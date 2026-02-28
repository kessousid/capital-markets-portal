import React from 'react'

// ── Utility helpers ──────────────────────────────────────────────────────────
function lerp(arr, t) {
  // map t in [0,1] over an array of y-values
  const n = arr.length - 1
  const i = Math.min(Math.floor(t * n), n - 1)
  return arr[i]
}

// ── BAR CHART ────────────────────────────────────────────────────────────────
function BarChart({ data }) {
  const { title, bars, maxValue } = data
  const W = 460, H = 260, pad = { top: 40, right: 20, bottom: 50, left: 50 }
  const chartW = W - pad.left - pad.right
  const chartH = H - pad.top - pad.bottom
  const barW = chartW / bars.length * 0.6
  const barGap = chartW / bars.length

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map(t => {
        const y = pad.top + chartH - t * chartH
        const val = (t * maxValue).toFixed(0)
        return (
          <g key={t}>
            <line x1={pad.left} y1={y} x2={W - pad.right} y2={y} className="chart-grid" />
            <text x={pad.left - 6} y={y + 4} textAnchor="end" className="chart-tick">{val}</text>
          </g>
        )
      })}
      {/* Axes */}
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + chartH} className="chart-axis" />
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} className="chart-axis" />
      {/* Bars */}
      {bars.map((b, i) => {
        const x = pad.left + barGap * i + (barGap - barW) / 2
        const pct = Math.min((b.normalized !== undefined ? b.normalized : b.value) / maxValue, 1)
        const bH = pct * chartH
        const y = pad.top + chartH - bH
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={bH} rx={3} fill={b.color} opacity={0.85} className="chart-bar" />
            <text x={x + barW / 2} y={y - 5} textAnchor="middle" className="chart-value" fontSize={10}>
              {b.value}
            </text>
            <text x={x + barW / 2} y={pad.top + chartH + 16} textAnchor="middle" className="chart-tick" fontSize={9}>
              {b.label.length > 8 ? b.label.slice(0, 8) : b.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// ── LINE CHART ───────────────────────────────────────────────────────────────
function LineChart({ data }) {
  const { title, lines, xLabels, xTitle } = data
  const W = 460, H = 260, pad = { top: 40, right: 20, bottom: 55, left: 45 }
  const chartW = W - pad.left - pad.right
  const chartH = H - pad.top - pad.bottom
  const allVals = lines.flatMap(l => l.points)
  const minV = Math.min(...allVals), maxV = Math.max(...allVals)
  const range = maxV - minV || 1

  function toX(i) { return pad.left + i / (xLabels.length - 1) * chartW }
  function toY(v) { return pad.top + chartH - (v - minV) / range * chartH }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {/* Grid */}
      {[0, 0.25, 0.5, 0.75, 1].map(t => {
        const y = pad.top + t * chartH
        const v = maxV - t * range
        return (
          <g key={t}>
            <line x1={pad.left} y1={y} x2={W - pad.right} y2={y} className="chart-grid" />
            <text x={pad.left - 5} y={y + 4} textAnchor="end" className="chart-tick" fontSize={9}>{v.toFixed(0)}</text>
          </g>
        )
      })}
      {/* Axes */}
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + chartH} className="chart-axis" />
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} className="chart-axis" />
      {/* X labels */}
      {xLabels.map((l, i) => (
        <text key={i} x={toX(i)} y={pad.top + chartH + 16} textAnchor="middle" className="chart-tick" fontSize={9}>{l}</text>
      ))}
      {xTitle && <text x={W / 2} y={H - 5} textAnchor="middle" className="chart-label" fontSize={10}>{xTitle}</text>}
      {/* Lines */}
      {lines.map((line, li) => {
        const pts = line.points.map((v, i) => `${toX(i)},${toY(v)}`).join(' ')
        const areaBot = pad.top + chartH
        const areaPath = `M ${toX(0)},${areaBot} ` +
          line.points.map((v, i) => `L ${toX(i)},${toY(v)}`).join(' ') +
          ` L ${toX(line.points.length - 1)},${areaBot} Z`
        return (
          <g key={li}>
            <path d={areaPath} fill={line.color} className="chart-area" />
            <polyline points={pts} stroke={line.color} className="chart-line" />
            {line.points.map((v, i) => (
              <circle key={i} cx={toX(i)} cy={toY(v)} r={3} fill={line.color} className="chart-dot" />
            ))}
            <text x={toX(line.points.length - 1) + 5} y={toY(line.points[line.points.length - 1]) + 4}
              className="chart-label" fontSize={10} fill={line.color}>{line.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

// ── PIE CHART ────────────────────────────────────────────────────────────────
function PieChart({ data }) {
  const { title, charts } = data
  const W = 460, H = 260

  function makePie(slices, cx, cy, r) {
    let total = slices.reduce((s, sl) => s + sl.value, 0)
    let angle = -Math.PI / 2
    return slices.map(sl => {
      const sweep = (sl.value / total) * 2 * Math.PI
      const x1 = cx + r * Math.cos(angle)
      const y1 = cy + r * Math.sin(angle)
      const x2 = cx + r * Math.cos(angle + sweep)
      const y2 = cy + r * Math.sin(angle + sweep)
      const large = sweep > Math.PI ? 1 : 0
      const mid = angle + sweep / 2
      const tx = cx + (r * 0.7) * Math.cos(mid)
      const ty = cy + (r * 0.7) * Math.sin(mid)
      const d = `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${large},1 ${x2},${y2} Z`
      const res = { d, color: sl.color, label: sl.label, value: sl.value, tx, ty }
      angle += sweep
      return res
    })
  }

  const single = charts.length === 1
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {charts.map((chart, ci) => {
        const cx = single ? W / 2 : (ci === 0 ? W * 0.28 : W * 0.72)
        const cy = 140, r = single ? 85 : 65
        const slices = makePie(chart.slices, cx, cy, r)
        return (
          <g key={ci}>
            {slices.map((s, si) => (
              <g key={si}>
                <path d={s.d} fill={s.color} stroke="rgba(0,0,0,0.3)" strokeWidth={1} opacity={0.9} />
                {s.value >= 8 && (
                  <text x={s.tx} y={s.ty} textAnchor="middle" className="chart-tick" fontSize={9} fill="white">{s.value}%</text>
                )}
              </g>
            ))}
            <text x={cx} y={cy + r + 20} textAnchor="middle" className="chart-label" fontSize={11}>{chart.label}</text>
          </g>
        )
      })}
      {/* Legend for single chart */}
      {single && charts[0].slices.map((s, i) => (
        <g key={i} transform={`translate(${W * 0.02}, ${40 + i * 20})`}>
          <rect width={12} height={12} rx={2} fill={s.color} />
          <text x={16} y={10} className="chart-label" fontSize={10}>{s.label} ({s.value}%)</text>
        </g>
      ))}
    </svg>
  )
}

// ── YIELD CURVE ───────────────────────────────────────────────────────────────
function YieldCurveChart({ data }) {
  const { title, curves } = data
  const W = 460, H = 260, pad = { top: 40, right: 20, bottom: 50, left: 50 }
  const chartW = W - pad.left - pad.right
  const chartH = H - pad.top - pad.bottom
  const maturities = curves[0].points.map(p => p.maturity)
  const allYields = curves.flatMap(c => c.points.map(p => p.yield))
  const minY = 0, maxY = Math.max(...allYields) * 1.1

  function toX(i) { return pad.left + i / (maturities.length - 1) * chartW }
  function toYPos(v) { return pad.top + chartH - (v - minY) / (maxY - minY) * chartH }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {[0, 0.25, 0.5, 0.75, 1].map(t => {
        const y = pad.top + t * chartH
        const v = maxY - t * maxY
        return (
          <g key={t}>
            <line x1={pad.left} y1={y} x2={W - pad.right} y2={y} className="chart-grid" />
            <text x={pad.left - 5} y={y + 4} textAnchor="end" className="chart-tick" fontSize={9}>{v.toFixed(1)}%</text>
          </g>
        )
      })}
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + chartH} className="chart-axis" />
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} className="chart-axis" />
      {maturities.map((m, i) => (
        <text key={i} x={toX(i)} y={pad.top + chartH + 16} textAnchor="middle" className="chart-tick" fontSize={9}>{m}</text>
      ))}
      {curves.map((curve, ci) => {
        const pts = curve.points.map((p, i) => `${toX(i)},${toYPos(p.yield)}`).join(' ')
        return (
          <g key={ci}>
            <polyline points={pts} stroke={curve.color} className="chart-line" fill="none" />
            {curve.points.map((p, i) => (
              <circle key={i} cx={toX(i)} cy={toYPos(p.yield)} r={4} fill={curve.color} />
            ))}
            <text x={W - pad.right + 2} y={toYPos(curve.points[curve.points.length - 1].yield) + 4}
              className="chart-label" fontSize={9} fill={curve.color}>{curve.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

// ── FLOW DIAGRAM ─────────────────────────────────────────────────────────────
function FlowDiagram({ data }) {
  const { title, nodes, arrows } = data
  const W = 460, H = 280

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 280 }}>
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#FFD700" />
        </marker>
      </defs>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {/* Arrows */}
      {arrows.map((a, i) => {
        const from = nodes.find(n => n.id === a.from)
        const to = nodes.find(n => n.id === a.to)
        if (!from || !to) return null
        const fx = from.x + 60, fy = from.y + 20
        const tx = to.x, ty = to.y + 20
        const mx = (fx + tx) / 2
        const my = i % 2 === 0 ? Math.min(fy, ty) - 20 : Math.max(fy, ty) + 25
        return (
          <g key={i}>
            <path d={`M ${fx},${fy} Q ${mx},${my} ${tx},${ty}`}
              stroke="#FFD700" strokeWidth={1.5} fill="none"
              strokeDasharray={a.style === 'dashed' ? '4,3' : ''}
              markerEnd="url(#arrowhead)" opacity={0.7} />
            {a.label && (
              <text x={mx} y={my - 5} textAnchor="middle" className="chart-tick" fontSize={9} fill="#94a3b8">{a.label}</text>
            )}
          </g>
        )
      })}
      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i} transform={`translate(${n.x}, ${n.y})`}>
          <rect x={0} y={0} width={80} height={40} rx={8} fill={n.color} opacity={0.2} stroke={n.color} strokeWidth={1.5} />
          {n.label.split('\n').map((line, li) => (
            <text key={li} x={40} y={14 + li * 14} textAnchor="middle" fontSize={10} fill="white" fontWeight={600}>{line}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}

// ── PAYOFF DIAGRAM ────────────────────────────────────────────────────────────
function PayoffDiagram({ data }) {
  const { title, strike, premium } = data
  const W = 460, H = 260, pad = { top: 40, right: 20, bottom: 50, left: 50 }
  const chartW = W - pad.left - pad.right
  const chartH = H - pad.top - pad.bottom
  const priceRange = [strike * 0.75, strike * 1.25]
  const steps = 10
  const prices = Array.from({ length: steps + 1 }, (_, i) => priceRange[0] + (priceRange[1] - priceRange[0]) * i / steps)
  const callPayoffs = prices.map(p => Math.max(0, p - strike) - premium)
  const putPayoffs = prices.map(p => Math.max(0, strike - p) - premium)
  const allVals = [...callPayoffs, ...putPayoffs]
  const minV = Math.min(...allVals), maxV = Math.max(...allVals)
  const range = maxV - minV || 1

  function toX(p) { return pad.left + (p - priceRange[0]) / (priceRange[1] - priceRange[0]) * chartW }
  function toYP(v) { return pad.top + chartH - (v - minV) / range * chartH }

  const callPts = prices.map((p, i) => `${toX(p)},${toYP(callPayoffs[i])}`).join(' ')
  const putPts = prices.map((p, i) => `${toX(p)},${toYP(putPayoffs[i])}`).join(' ')
  const zeroY = toYP(0)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      <line x1={pad.left} y1={zeroY} x2={W - pad.right} y2={zeroY} stroke="rgba(255,255,255,0.25)" strokeDasharray="4,3" />
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + chartH} className="chart-axis" />
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} className="chart-axis" />
      <text x={pad.left - 5} y={zeroY + 4} textAnchor="end" className="chart-tick" fontSize={9}>$0</text>
      <text x={toX(strike)} y={pad.top + chartH + 16} textAnchor="middle" className="chart-tick" fontSize={9}>K={strike}</text>
      <polyline points={callPts} stroke="#50C878" className="chart-line" />
      <polyline points={putPts} stroke="#FF6B6B" className="chart-line" />
      <text x={W - pad.right - 5} y={toYP(callPayoffs[callPayoffs.length - 1]) - 6}
        fill="#50C878" fontSize={10} className="chart-label">Long Call</text>
      <text x={pad.left + 5} y={toYP(putPayoffs[0]) - 6}
        fill="#FF6B6B" fontSize={10} className="chart-label">Long Put</text>
    </svg>
  )
}

// ── EFFICIENT FRONTIER ────────────────────────────────────────────────────────
function EfficientFrontierChart({ data }) {
  const { title, frontier, portfolios } = data
  const W = 460, H = 260, pad = { top: 40, right: 30, bottom: 50, left: 50 }
  const chartW = W - pad.left - pad.right
  const chartH = H - pad.top - pad.bottom
  const risks = frontier.map(p => p.risk), returns = frontier.map(p => p.return)
  const minR = 0, maxR = Math.max(...risks) * 1.1
  const minRet = 0, maxRet = Math.max(...returns) * 1.2

  function toX(r) { return pad.left + (r - minR) / (maxR - minR) * chartW }
  function toY(ret) { return pad.top + chartH - (ret - minRet) / (maxRet - minRet) * chartH }

  const frontierPts = frontier.map(p => `${toX(p.risk)},${toY(p.return)}`).join(' ')

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + chartH} className="chart-axis" />
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} className="chart-axis" />
      <text x={W / 2} y={H - 5} textAnchor="middle" className="chart-label" fontSize={10}>Risk (Std Dev %)</text>
      <text x={14} y={pad.top + chartH / 2} textAnchor="middle" className="chart-label" fontSize={10}
        transform={`rotate(-90, 14, ${pad.top + chartH / 2})`}>Return %</text>
      {/* Grid */}
      {[0, 0.5, 1].map(t => {
        const y = pad.top + t * chartH
        const v = maxRet - t * maxRet
        return <line key={t} x1={pad.left} y1={y} x2={W - pad.right} y2={y} className="chart-grid" />
      })}
      <polyline points={frontierPts} stroke="#4ECDC4" strokeWidth={2.5} fill="none" />
      {portfolios.map((p, i) => (
        <g key={i}>
          <circle cx={toX(p.risk)} cy={toY(p.return)} r={6} fill={p.color} stroke="white" strokeWidth={1.5} />
          <text x={toX(p.risk) + 8} y={toY(p.return) + 4} className="chart-label" fontSize={9} fill={p.color}>{p.label}</text>
        </g>
      ))}
    </svg>
  )
}

// ── SECURITY MARKET LINE ──────────────────────────────────────────────────────
function SecurityMarketLine({ data }) {
  const { title, riskFreeRate, marketReturn, securities } = data
  const W = 460, H = 260, pad = { top: 40, right: 30, bottom: 50, left: 50 }
  const chartW = W - pad.left - pad.right
  const chartH = H - pad.top - pad.bottom
  const maxBeta = 2, minRet = 0, maxRet = 20

  function toX(b) { return pad.left + b / maxBeta * chartW }
  function toY(r) { return pad.top + chartH - r / maxRet * chartH }

  const smlX1 = toX(0), smlY1 = toY(riskFreeRate)
  const smlX2 = toX(maxBeta), smlY2 = toY(riskFreeRate + maxBeta * (marketReturn - riskFreeRate))

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + chartH} className="chart-axis" />
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} className="chart-axis" />
      {[0, 0.5, 1, 1.5, 2].map(b => (
        <text key={b} x={toX(b)} y={pad.top + chartH + 16} textAnchor="middle" className="chart-tick" fontSize={9}>β={b}</text>
      ))}
      {[0, 5, 10, 15, 20].map(r => (
        <g key={r}>
          <line x1={pad.left} y1={toY(r)} x2={W - pad.right} y2={toY(r)} className="chart-grid" />
          <text x={pad.left - 5} y={toY(r) + 4} textAnchor="end" className="chart-tick" fontSize={9}>{r}%</text>
        </g>
      ))}
      <line x1={smlX1} y1={smlY1} x2={smlX2} y2={smlY2} stroke="#FFD700" strokeWidth={2} />
      <text x={smlX2 + 4} y={smlY2} fill="#FFD700" fontSize={10} className="chart-label">SML</text>
      {securities.map((s, i) => (
        <g key={i}>
          <circle cx={toX(s.beta)} cy={toY(s.return)} r={6} fill={s.color} stroke="white" strokeWidth={1} />
          <text x={toX(s.beta) + 8} y={toY(s.return) + 4} fill={s.color} fontSize={9} className="chart-label">{s.label}</text>
        </g>
      ))}
    </svg>
  )
}

// ── VAR DISTRIBUTION ──────────────────────────────────────────────────────────
function VarDistribution({ data }) {
  const { title, varAmount, confidence, color } = data
  const W = 460, H = 260, pad = { top: 40, right: 20, bottom: 50, left: 30 }
  const chartW = W - pad.left - pad.right
  const chartH = H - pad.top - pad.bottom
  const nPts = 80
  const pts = Array.from({ length: nPts }, (_, i) => {
    const x = -4 + i * 8 / nPts
    const y = Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI)
    return { x, y }
  })
  const maxY = Math.max(...pts.map(p => p.y))
  const varX = -2.33  // ~99% confidence z-score

  function toX(x) { return pad.left + (x + 4) / 8 * chartW }
  function toY(y) { return pad.top + chartH - y / maxY * chartH }

  const mainPath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${toX(p.x)},${toY(p.y)}`).join(' ')
  const tailPts = pts.filter(p => p.x <= varX)
  const tailPath = tailPts.length
    ? tailPts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${toX(p.x)},${toY(p.y)}`).join(' ') +
      ` L ${toX(varX)},${toY(0) + 1} L ${toX(tailPts[0].x)},${toY(0) + 1} Z`
    : ''

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} className="chart-axis" />
      {tailPath && <path d={tailPath} fill={color} opacity={0.5} />}
      <path d={mainPath} stroke={color} strokeWidth={2.5} fill="none" />
      <line x1={toX(varX)} y1={pad.top} x2={toX(varX)} y2={pad.top + chartH}
        stroke="#FFD700" strokeWidth={1.5} strokeDasharray="4,3" />
      <text x={toX(varX)} y={pad.top + 15} textAnchor="middle" fill="#FFD700" fontSize={10}>
        VaR ${varAmount}M
      </text>
      <text x={toX(-3.2)} y={pad.top + chartH / 2} textAnchor="middle" fill={color} fontSize={9}>
        1% tail
      </text>
      <text x={pad.left + 5} y={pad.top + chartH - 5} fill="#94a3b8" fontSize={9}>Losses →</text>
      <text x={W - pad.right - 5} y={pad.top + chartH - 5} textAnchor="end" fill="#94a3b8" fontSize={9}>Gains →</text>
    </svg>
  )
}

// ── ORDER BOOK ────────────────────────────────────────────────────────────────
function OrderBook({ data }) {
  const { title, asks, bids, spread } = data
  const W = 460, H = 280

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 280 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {/* Headers */}
      <text x={80} y={44} textAnchor="middle" className="chart-label" fontSize={10} fill="#94a3b8">Price</text>
      <text x={200} y={44} textAnchor="middle" className="chart-label" fontSize={10} fill="#94a3b8">Size</text>
      <text x={320} y={44} textAnchor="middle" className="chart-label" fontSize={10} fill="#94a3b8">Total</text>
      {/* Asks (sells) — red */}
      <text x={W / 2} y={56} textAnchor="middle" className="chart-label" fontSize={9} fill="#ef4444">ASKS (Sell)</text>
      {asks.map((a, i) => {
        const y = 68 + i * 24
        const fillW = (parseInt(a.total) / 2000) * 200
        return (
          <g key={i}>
            <rect x={115} y={y - 12} width={fillW} height={18} fill="#ef4444" opacity={0.15} rx={2} />
            <text x={80} y={y} textAnchor="middle" fontSize={11} fill="#ff9999">{a.price}</text>
            <text x={200} y={y} textAnchor="middle" fontSize={11} fill="white">{a.size}</text>
            <text x={320} y={y} textAnchor="middle" fontSize={11} fill="#94a3b8">{a.total}</text>
          </g>
        )
      })}
      {/* Spread indicator */}
      <text x={W / 2} y={168} textAnchor="middle" fill="#FFD700" fontSize={10}>── Spread: ${spread} ──</text>
      {/* Bids (buys) — green */}
      <text x={W / 2} y={184} textAnchor="middle" className="chart-label" fontSize={9} fill="#22c55e">BIDS (Buy)</text>
      {bids.map((b, i) => {
        const y = 196 + i * 24
        const fillW = (parseInt(b.total) / 2000) * 200
        return (
          <g key={i}>
            <rect x={115} y={y - 12} width={fillW} height={18} fill="#22c55e" opacity={0.15} rx={2} />
            <text x={80} y={y} textAnchor="middle" fontSize={11} fill="#99ff99">{b.price}</text>
            <text x={200} y={y} textAnchor="middle" fontSize={11} fill="white">{b.size}</text>
            <text x={320} y={y} textAnchor="middle" fontSize={11} fill="#94a3b8">{b.total}</text>
          </g>
        )
      })}
    </svg>
  )
}

// ── RATING LADDER ─────────────────────────────────────────────────────────────
function RatingLadder({ data }) {
  const { title, ratings } = data
  const W = 460, H = 280

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 280 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {/* Column headers */}
      {['Rating', 'Category', 'Spread', 'Risk Level'].map((h, i) => (
        <text key={i} x={[40, 145, 280, 380][i]} y={42} textAnchor="middle"
          className="chart-label" fontSize={10} fill="#64748b">{h}</text>
      ))}
      {ratings.map((r, i) => {
        const y = 58 + i * 32
        const barW = Math.min(r.spread / 10 * 60, 80)
        return (
          <g key={i}>
            <rect x={10} y={y - 14} width={W - 20} height={26} rx={4}
              fill={r.color} opacity={0.08} />
            <text x={40} y={y + 2} textAnchor="middle" fontSize={12} fontWeight={700} fill={r.color}>{r.rating}</text>
            <text x={145} y={y + 2} textAnchor="middle" fontSize={10} fill="#94a3b8">{r.category}</text>
            <rect x={250} y={y - 8} width={barW} height={14} rx={2} fill={r.color} opacity={0.7} />
            <text x={250 + barW + 4} y={y + 2} fontSize={10} fill="white">+{r.spread}%</text>
            <text x={380} y={y + 2} textAnchor="middle" fontSize={9} fill={r.color}>
              {r.category === 'Investment Grade' ? 'Low' : r.category === 'High Yield' ? 'Medium' : 'High'}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// ── SWAP FLOW ─────────────────────────────────────────────────────────────────
function SwapFlow({ data }) {
  const { title, partyA, partyB, fixedRate, floatingRate, notional, tenor } = data
  const W = 460, H = 240

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 240 }}>
      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#FFD700" />
        </marker>
        <marker id="arrow3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4F8EF7" />
        </marker>
      </defs>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {/* Boxes */}
      <rect x={20} y={80} width={120} height={60} rx={10} fill="#FF9F43" opacity={0.2} stroke="#FF9F43" strokeWidth={1.5} />
      <rect x={320} y={80} width={120} height={60} rx={10} fill="#4F8EF7" opacity={0.2} stroke="#4F8EF7" strokeWidth={1.5} />
      {partyA.split('\n').map((l, i) => (
        <text key={i} x={80} y={105 + i * 16} textAnchor="middle" fontSize={11} fill="white" fontWeight={600}>{l}</text>
      ))}
      {partyB.split('\n').map((l, i) => (
        <text key={i} x={380} y={105 + i * 16} textAnchor="middle" fontSize={11} fill="white" fontWeight={600}>{l}</text>
      ))}
      {/* Fixed rate arrow (top) */}
      <line x1={140} y1={100} x2={320} y2={100} stroke="#FFD700" strokeWidth={2} markerEnd="url(#arrow2)" />
      <text x={230} y={92} textAnchor="middle" fill="#FFD700" fontSize={11} fontWeight={600}>{fixedRate}</text>
      {/* Floating rate arrow (bottom) */}
      <line x1={320} y1={120} x2={140} y2={120} stroke="#4F8EF7" strokeWidth={2} markerEnd="url(#arrow3)" />
      <text x={230} y={136} textAnchor="middle" fill="#4F8EF7" fontSize={11} fontWeight={600}>{floatingRate}</text>
      {/* Details */}
      <text x={W / 2} y={175} textAnchor="middle" fill="#64748b" fontSize={11}>{notional}</text>
      <text x={W / 2} y={195} textAnchor="middle" fill="#64748b" fontSize={11}>{tenor}</text>
      <text x={W / 2} y={215} textAnchor="middle" fill="#64748b" fontSize={10}>*Only net cash flow difference is exchanged</text>
    </svg>
  )
}

// ── CASH FLOW TIMELINE ────────────────────────────────────────────────────────
function CashFlowTimeline({ data }) {
  const { title, periods, coupon, principal, discount, color, isDiscount } = data
  const W = 460, H = 240, baseY = 140

  const nPts = periods.length
  const xStep = (W - 80) / (nPts - 1)
  const pts = periods.map((_, i) => 40 + i * xStep)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 240 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {/* Timeline */}
      <line x1={40} y1={baseY} x2={W - 40} y2={baseY} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
      {pts.map((x, i) => (
        <circle key={i} cx={x} cy={baseY} r={5} fill={color} />
      ))}
      {periods.map((p, i) => (
        <text key={i} x={pts[i]} y={baseY + 22} textAnchor="middle" className="chart-tick" fontSize={10}>{p}</text>
      ))}
      {/* Initial investment (if discount) */}
      {isDiscount && discount && (
        <g>
          <line x1={pts[0]} y1={baseY} x2={pts[0]} y2={baseY + 45} stroke="#ef4444" strokeWidth={1.5} />
          <text x={pts[0]} y={baseY + 58} textAnchor="middle" fontSize={10} fill="#ef4444">-${discount}</text>
          <text x={pts[0]} y={baseY + 70} textAnchor="middle" fontSize={9} fill="#94a3b8">Invest</text>
        </g>
      )}
      {/* Coupon payments */}
      {coupon > 0 && periods.slice(0, -1).map((_, i) => (
        <g key={i}>
          <line x1={pts[i + 1]} y1={baseY - 30} x2={pts[i + 1]} y2={baseY} stroke="#22c55e" strokeWidth={1.5} />
          <text x={pts[i + 1]} y={baseY - 36} textAnchor="middle" fontSize={10} fill="#22c55e">+${coupon}</text>
        </g>
      ))}
      {/* Principal at maturity */}
      <g>
        <line x1={pts[pts.length - 1]} y1={baseY - 55} x2={pts[pts.length - 1]} y2={baseY} stroke={color} strokeWidth={2} />
        <text x={pts[pts.length - 1]} y={baseY - 60} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>
          +${principal}
        </text>
        <text x={pts[pts.length - 1]} y={baseY - 46} textAnchor="middle" fontSize={9} fill="#94a3b8">
          {coupon > 0 ? `+$${coupon} coupon` : 'Face Value'}
        </text>
      </g>
    </svg>
  )
}

// ── CAPITAL STACK ─────────────────────────────────────────────────────────────
function CapitalStack({ data }) {
  const { title, segments } = data
  const W = 460, H = 260
  const total = segments.reduce((s, seg) => s + seg.value, 0)

  let cumY = 50
  const bars = segments.map(seg => {
    const h = (seg.value / total) * 160
    const item = { ...seg, y: cumY, h }
    cumY += h
    return item
  })

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 260 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      <text x={W / 2 - 90} y={42} textAnchor="middle" className="chart-label" fontSize={10}>Capital Stack</text>
      {bars.map((seg, i) => (
        <g key={i}>
          <rect x={W / 2 - 90} y={seg.y} width={180} height={seg.h - 2} rx={3} fill={seg.color} opacity={0.8} />
          <text x={W / 2 - 90 + 90} y={seg.y + seg.h / 2 + 5} textAnchor="middle" fontSize={12} fontWeight={600} fill={seg.h > 20 ? '#0a1628' : 'white'}>{seg.label}</text>
          {/* Percentage label */}
          <text x={W / 2 + 110} y={seg.y + seg.h / 2 + 5} fontSize={11} fill={seg.color}>{seg.value}%</text>
          <line x1={W / 2 + 90} y1={seg.y + seg.h / 2} x2={W / 2 + 105} y2={seg.y + seg.h / 2}
            stroke={seg.color} strokeWidth={1} strokeDasharray="2,2" />
        </g>
      ))}
    </svg>
  )
}

// ── TWO COLUMN ────────────────────────────────────────────────────────────────
function TwoColumn({ data }) {
  const { title, leftTitle, rightTitle, leftColor, rightColor, leftItems, rightItems } = data
  const W = 460, H = 280

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxHeight: 280 }}>
      <text x={W / 2} y={22} textAnchor="middle" className="chart-title">{title}</text>
      {/* Left column */}
      <rect x={10} y={34} width={210} height={H - 44} rx={8} fill={leftColor} opacity={0.08} stroke={leftColor} strokeWidth={1} />
      <text x={115} y={55} textAnchor="middle" fontSize={12} fontWeight={700} fill={leftColor}>{leftTitle}</text>
      {leftItems.map((item, i) => (
        <g key={i}>
          <circle cx={26} cy={70 + i * 36} r={4} fill={leftColor} opacity={0.6} />
          <text x={36} y={74 + i * 36} fontSize={10} fill="white" style={{ whiteSpace: 'pre-wrap' }}>
            {item.length > 28 ? item.slice(0, 28) : item}
          </text>
          {item.length > 28 && (
            <text x={36} y={86 + i * 36} fontSize={10} fill="#94a3b8">{item.slice(28)}</text>
          )}
        </g>
      ))}
      {/* Right column */}
      <rect x={240} y={34} width={210} height={H - 44} rx={8} fill={rightColor} opacity={0.08} stroke={rightColor} strokeWidth={1} />
      <text x={345} y={55} textAnchor="middle" fontSize={12} fontWeight={700} fill={rightColor}>{rightTitle}</text>
      {rightItems.map((item, i) => (
        <g key={i}>
          <circle cx={256} cy={70 + i * 36} r={4} fill={rightColor} opacity={0.6} />
          <text x={266} y={74 + i * 36} fontSize={10} fill="white">
            {item.length > 28 ? item.slice(0, 28) : item}
          </text>
          {item.length > 28 && (
            <text x={266} y={86 + i * 36} fontSize={10} fill="#94a3b8">{item.slice(28)}</text>
          )}
        </g>
      ))}
    </svg>
  )
}

// ── MAIN RENDERER ─────────────────────────────────────────────────────────────
export default function SceneRenderer({ svgType, svgData }) {
  switch (svgType) {
    case 'bar-chart': return <BarChart data={svgData} />
    case 'line-chart': return <LineChart data={svgData} />
    case 'pie-chart': return <PieChart data={svgData} />
    case 'yield-curve': return <YieldCurveChart data={svgData} />
    case 'flow-diagram': return <FlowDiagram data={svgData} />
    case 'payoff-diagram': return <PayoffDiagram data={svgData} />
    case 'efficient-frontier': return <EfficientFrontierChart data={svgData} />
    case 'security-market-line': return <SecurityMarketLine data={svgData} />
    case 'var-distribution': return <VarDistribution data={svgData} />
    case 'order-book': return <OrderBook data={svgData} />
    case 'rating-ladder': return <RatingLadder data={svgData} />
    case 'swap-flow': return <SwapFlow data={svgData} />
    case 'cash-flow-timeline': return <CashFlowTimeline data={svgData} />
    case 'capital-stack': return <CapitalStack data={svgData} />
    case 'two-column': return <TwoColumn data={svgData} />
    default: return <BarChart data={svgData || { title: svgType, bars: [], maxValue: 100 }} />
  }
}
