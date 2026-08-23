import { useEffect, useState, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, Check, CircleHelp, Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

import { authenticatePreview, getRoleStartPath, loadPreviewSession, startPreviewSession, type PreviewAccount } from '../auth'
import { Brand, CircleMark } from '../components/Brand'

type SignInStage = 'identity' | 'password' | 'success' | 'help'

export function SignInPage() {
  const navigate = useNavigate()
  const existingSession = loadPreviewSession()
  const [stage, setStage] = useState<SignInStage>('identity')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState('')
  const [signedInAccount, setSignedInAccount] = useState<PreviewAccount | null>(null)

  useEffect(() => {
    if (stage !== 'success' || !signedInAccount) return
    const redirect = window.setTimeout(() => navigate(getRoleStartPath(signedInAccount), { replace: true }), 950)
    return () => window.clearTimeout(redirect)
  }, [navigate, signedInAccount, stage])

  if (existingSession && !signedInAccount) return <Navigate to={getRoleStartPath(existingSession)} replace />

  function continueToPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setStage('password')
  }

  function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const account = authenticatePreview(email, password)
    if (!account) {
      setError('We could not verify those sign-in details. Check them and try again.')
      return
    }
    startPreviewSession(account)
    setSignedInAccount(account)
    setStage('success')
  }

  function returnToIdentity() {
    setError('')
    setPassword('')
    setStage('identity')
  }

  return (
    <main className="identity-page">
      <header className="identity-header">
        <div className="identity-header__brand"><span className="identity-header__mark"><CircleMark light /></span><Brand /></div>
        <button type="button" className="identity-help-link" onClick={() => setStage('help')}><CircleHelp size={18} /> Need help?</button>
      </header>

      <section className="identity-main">
        <div className="identity-card">
          {stage === 'identity' && <form className="identity-form" onSubmit={continueToPassword}>
            <div className="identity-card__heading"><p className="identity-kicker">DeepFocus revision</p><h1>Sign in</h1><p>Continue to your personal revision workspace.</p></div>
            <label className="identity-field"><span>Email address</span><div><Mail size={18} /><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="username" placeholder="you@example.com" autoFocus required /></div></label>
            <button className="identity-primary" type="submit">Continue <ArrowRight size={17} /></button>
            <p className="identity-terms">By continuing, you agree to use DeepFocus responsibly and keep your account details private.</p>
            <button type="button" className="identity-text-link" onClick={() => setStage('help')}><UserRound size={17} /> Need access to DeepFocus?</button>
          </form>}

          {stage === 'password' && <form className="identity-form" onSubmit={signIn}>
            <div className="identity-card__heading identity-card__heading--with-icon"><span className="identity-lock"><LockKeyhole size={30} /></span><h1>Password</h1><p className="identity-account"><Mail size={15} /> {email}</p></div>
            <label className="identity-field"><span>Password</span><div><LockKeyhole size={18} /><input value={password} onChange={(event) => setPassword(event.target.value)} type={visible ? 'text' : 'password'} autoComplete="current-password" autoFocus required /><button type="button" onClick={() => setVisible((current) => !current)} aria-label={visible ? 'Hide password' : 'Show password'}>{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></label>
            {error && <p className="identity-error" role="alert">{error}</p>}
            <div className="identity-actions"><button className="identity-primary" type="submit">Sign in <ArrowRight size={17} /></button><button type="button" className="identity-back-link" onClick={returnToIdentity}><ArrowLeft size={17} /> Back</button></div>
            <button type="button" className="identity-text-link" onClick={() => setStage('help')}><CircleHelp size={17} /> Can&apos;t sign in?</button>
          </form>}

          {stage === 'success' && <div className="identity-success" aria-live="polite"><span><Check size={42} /></span><h1>Welcome back</h1><p>Your DeepFocus workspace is opening.</p><i aria-label="Loading" /></div>}

          {stage === 'help' && <section className="identity-help"><div className="identity-card__heading identity-card__heading--with-icon"><span className="identity-help-icon"><CircleHelp size={30} /></span><h1>Need help?</h1><p>Sign in with the email address connected to your DeepFocus access.</p></div><div className="identity-help__message"><strong>New to DeepFocus?</strong><p>Ask your programme coordinator or the DeepFocus team to confirm the email linked to your learning pathway.</p></div><div className="identity-help__message"><strong>Forgotten your password?</strong><p>Use the same contact point to restore access securely.</p></div><button type="button" className="identity-back-link" onClick={returnToIdentity}><ArrowLeft size={17} /> Back to sign in</button></section>}
        </div>
      </section>

      <footer className="identity-footer"><div className="identity-footer__waves" /><div className="identity-footer__content"><CircleMark /><strong>DeepFocus</strong><p>Revision with a clear direction.</p><nav aria-label="Legal links"><a href="#/sign-in">Privacy</a><a href="#/sign-in">Terms of use</a><a href="#/sign-in">Accessibility</a></nav><small>© 2026 DeepFocus revision</small></div></footer>
    </main>
  )
}
