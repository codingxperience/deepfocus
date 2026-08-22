import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

import { authenticatePreview, getPreviewAccounts, getRoleStartPath, loadPreviewSession, startPreviewSession, type PreviewAccount } from '../auth'
import { CircleMark } from '../components/Brand'
import { resetPlannerState } from '../planner'
import { resetStaffPreviewState } from '../staffPreview'

const accounts = getPreviewAccounts()

function roleCopy(role: PreviewAccount['role']) {
  if (role === 'admin') return 'Access, payments, content operations'
  if (role === 'instructor') return 'Assigned courses and learner support'
  return 'Planning, course access, and revision'
}

export function SignInPage() {
  const navigate = useNavigate()
  const session = loadPreviewSession()
  const [email, setEmail] = useState(accounts[0].email)
  const [password, setPassword] = useState('deepfocus-preview')
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState('')

  if (session) return <Navigate to={getRoleStartPath(session)} replace />

  const signIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const account = authenticatePreview(email, password)
    if (!account) {
      setError('Use one of the preview accounts and the shown password.')
      return
    }
    startPreviewSession(account)
    navigate(getRoleStartPath(account), { replace: true })
  }

  const chooseAccount = (account: PreviewAccount) => {
    setEmail(account.email)
    setPassword('deepfocus-preview')
    setError('')
  }

  return <main className="auth-page">
    <section className="auth-page__panel">
      <div className="auth-brand"><CircleMark /><span><strong>DeepFocus</strong><small>revision workspace</small></span></div>
      <div className="auth-intro"><span className="eyebrow eyebrow--accent"><ShieldCheck size={14} /> Workspace sign in</span><h1>A focused space for every role.</h1><p>Use a local preview account to experience the learner, instructor, and administrator workflows.</p></div>
      <form className="auth-form" onSubmit={signIn}>
        <label><span>Email address</span><div><Mail size={17} /><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="username" required /></div></label>
        <label><span>Password</span><div><LockKeyhole size={17} /><input value={password} onChange={(event) => setPassword(event.target.value)} type={visible ? 'text' : 'password'} autoComplete="current-password" required /><button type="button" onClick={() => setVisible((current) => !current)} aria-label={visible ? 'Hide password' : 'Show password'}>{visible ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>
        {error && <p className="auth-form__error" role="alert">{error}</p>}
        <button className="auth-form__submit" type="submit">Sign in to DeepFocus <ArrowRight size={17} /></button>
      </form>
      <div className="auth-preview"><div><span className="eyebrow">Preview accounts</span><p>Each account opens a separate workspace.</p></div><div className="auth-preview__accounts">{accounts.map((account) => <button type="button" key={account.id} onClick={() => chooseAccount(account)}><span className="staff-avatar">{account.initials}</span><span><strong>{account.name}</strong><small>{roleCopy(account.role)}</small></span><CheckCircle2 size={17} /></button>)}</div><p className="auth-preview__hint">Password for all preview accounts: <kbd>deepfocus-preview</kbd></p></div>
      <button className="auth-reset" type="button" onClick={() => { resetPlannerState(); resetStaffPreviewState(); setError('Preview data reset. Sign in to begin again.') }}>Reset local preview data</button>
    </section>
    <aside className="auth-page__aside"><span className="auth-page__shape auth-page__shape--one" /><span className="auth-page__shape auth-page__shape--two" /><div><span className="eyebrow">DeepFocus revision</span><h2>One clear system.<br />Thoughtful access.</h2><p>The payment and staff areas are a local operational simulation. They demonstrate the journey without collecting payment information or presenting a transaction as real.</p></div><footer>Designed for careful nursing and midwifery revision.</footer></aside>
  </main>
}
