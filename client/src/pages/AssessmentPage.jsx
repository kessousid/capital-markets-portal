import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { getAssessmentByModuleId } from '../data/assessments.js'
import { getModuleById, isModuleUnlocked } from '../data/modules.js'

const LETTERS = ['A', 'B', 'C', 'D']

export default function AssessmentPage() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { user, saveQuizResult } = useAuth()

  const mod = getModuleById(moduleId)
  const assessment = getAssessmentByModuleId(moduleId)
  const progress = user?.progress || {}

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [answers, setAnswers] = useState([])  // { questionIdx, selected, correct }
  const [phase, setPhase] = useState('quiz')  // 'quiz' | 'results'
  const [saving, setSaving] = useState(false)

  // Gate check
  if (!mod || !assessment) {
    return <div><Link to="/dashboard">Back to Dashboard</Link></div>
  }
  if (!isModuleUnlocked(moduleId, progress)) {
    return (
      <div>
        <p>This module is locked.</p>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    )
  }
  if (!progress[moduleId]?.videoWatched) {
    return (
      <div className="card" style={{ maxWidth: 500 }}>
        <h2 style={{ marginBottom: 12 }}>Video Required</h2>
        <p style={{ color: 'var(--gray-400)', marginBottom: 20 }}>
          Please watch the video lesson before taking the assessment.
        </p>
        <button className="btn btn-primary" onClick={() => navigate(`/module/${moduleId}`)}>
          Go to Module
        </button>
      </div>
    )
  }

  const questions = assessment.questions
  const question = questions[currentQ]

  function handleSelect(idx) {
    if (submitted) return
    setSelected(idx)
  }

  function handleSubmit() {
    if (selected === null) return
    setSubmitted(true)
  }

  function handleNext() {
    const newAnswers = [...answers, {
      questionIdx: currentQ,
      selected,
      correct: selected === question.correct
    }]
    setAnswers(newAnswers)
    setSelected(null)
    setSubmitted(false)

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      // Quiz complete — calculate results
      finishQuiz(newAnswers)
    }
  }

  async function finishQuiz(finalAnswers) {
    const correctCount = finalAnswers.filter(a => a.correct).length
    const score = Math.round((correctCount / questions.length) * 100)
    const passed = score >= assessment.passingScore

    setSaving(true)
    try {
      await saveQuizResult(moduleId, score, passed)
    } catch (e) {
      console.error('Failed to save quiz result', e)
    } finally {
      setSaving(false)
    }
    setPhase('results')
  }

  if (phase === 'results') {
    const correctCount = answers.filter(a => a.correct).length
    const score = Math.round((correctCount / questions.length) * 100)
    const passed = score >= assessment.passingScore

    return (
      <div className="assessment-page">
        <div className="assessment-header">
          <div className="breadcrumb">
            <Link to="/dashboard">Dashboard</Link> /
            <Link to={`/module/${moduleId}`}> {mod.title}</Link> /
            Assessment Results
          </div>
        </div>

        <div className="results-card">
          <div className={`results-score ${passed ? 'pass' : 'fail'}`}>{score}%</div>
          <div className={`results-verdict ${passed ? 'pass' : 'fail'}`}>
            {passed ? '🎉 Passed!' : '❌ Not Passed'}
          </div>
          <p className="results-subtitle">
            {passed
              ? `Excellent! You answered ${correctCount} out of ${questions.length} questions correctly.`
              : `You answered ${correctCount} out of ${questions.length} correctly. You need ${assessment.passingScore}% to pass.`}
          </p>
          <div className="results-actions">
            {!passed && (
              <button className="btn btn-primary" onClick={() => {
                setCurrentQ(0)
                setSelected(null)
                setSubmitted(false)
                setAnswers([])
                setPhase('quiz')
              }}>
                Retry Assessment
              </button>
            )}
            <button className="btn btn-secondary" onClick={() => navigate(`/module/${moduleId}`)}>
              Back to Module
            </button>
            {passed && (
              <button className="btn btn-outline" onClick={() => navigate('/dashboard')}>
                View Dashboard
              </button>
            )}
          </div>
        </div>

        {/* Question review */}
        <h3 style={{ marginBottom: 16, fontSize: 16 }}>Question Review</h3>
        <div className="review-list">
          {answers.map((a, i) => {
            const q = questions[a.questionIdx]
            return (
              <div key={i} className={`review-item ${a.correct ? 'review-correct' : 'review-wrong'}`}>
                <div className="review-q">Q{i + 1}: {q.question}</div>
                <div className="review-answers">
                  <div className="your-ans" style={{ color: a.correct ? 'var(--green)' : 'var(--red)' }}>
                    {a.correct ? '✓' : '✗'} Your answer: {LETTERS[a.selected]}. {q.options[a.selected]}
                  </div>
                  {!a.correct && (
                    <div className="correct-ans">
                      ✓ Correct: {LETTERS[q.correct]}. {q.options[q.correct]}
                    </div>
                  )}
                </div>
                <div className="review-explain">{q.explanation}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Quiz phase
  return (
    <div className="assessment-page">
      <div className="assessment-header">
        <div className="breadcrumb">
          <Link to="/dashboard">Dashboard</Link> /
          <Link to={`/module/${moduleId}`}> {mod.title}</Link> /
          Assessment
        </div>
        <h1>{mod.title}</h1>
        <p className="assessment-meta">
          Question {currentQ + 1} of {questions.length} · Pass score: {assessment.passingScore}%
        </p>
      </div>

      {/* Progress bar */}
      <div className="quiz-progress-wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--gray-400)' }}>
          <span>Progress</span>
          <span>{currentQ + 1}/{questions.length}</span>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className="question-card">
        <div className="question-number">Question {currentQ + 1}</div>
        <div className="question-text">{question.question}</div>

        <div className="options-list">
          {question.options.map((opt, idx) => {
            let cls = 'option-btn'
            if (submitted) {
              if (idx === question.correct) cls += ' correct'
              else if (idx === selected && idx !== question.correct) cls += ' wrong'
            } else if (idx === selected) {
              cls += ' selected'
            }

            return (
              <button
                key={idx}
                className={cls}
                onClick={() => handleSelect(idx)}
                disabled={submitted}
              >
                <span className="option-letter">{LETTERS[idx]}</span>
                <span>{opt}</span>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {submitted && (
          <div className="explanation-box">
            <strong>{selected === question.correct ? '✓ Correct! ' : '✗ Incorrect. '}</strong>
            {question.explanation}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="quiz-actions">
        {!submitted ? (
          <button
            className="btn btn-primary"
            style={{ minWidth: 160 }}
            onClick={handleSubmit}
            disabled={selected === null}
          >
            Submit Answer
          </button>
        ) : (
          <button
            className="btn btn-primary"
            style={{ minWidth: 160 }}
            onClick={handleNext}
            disabled={saving}
          >
            {currentQ < questions.length - 1 ? 'Next Question →' : saving ? 'Saving...' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  )
}
