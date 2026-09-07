import React from 'react';
import type { View } from './view';
import PageDashboard from './pages/PageDashboard';
import PageCourses from './pages/PageCourses';
import PageInCourse from './pages/PageInCourse';
import PageGrades from './pages/PageGrades';
import PagePayConfirm from './pages/PagePayConfirm';
import PagePayMethod from './pages/PagePayMethod';
import PagePayNumber from './pages/PagePayNumber';
import PageMomoWaiting from './pages/PageMomoWaiting';
import PageReceipt from './pages/PageReceipt';
import PagePayFailed from './pages/PagePayFailed';
import PageDeposit from './pages/PageDeposit';
import PageDepositSent from './pages/PageDepositSent';
import PageStatement from './pages/PageStatement';
import PagePlan from './pages/PagePlan';
import PageCalendar from './pages/PageCalendar';
import PageInbox from './pages/PageInbox';
import PageComposeShow from './pages/PageComposeShow';
import PageSettingsShow from './pages/PageSettingsShow';
import PageAccount from './pages/PageAccount';
import PageHelp from './pages/PageHelp';
import PageInDesk from './pages/PageInDesk';

export default function Screens({ v }: { v: View }) {
  return (
    <>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#eef1f4" }}>
        {v.atGate ? (
          <>
          <div style={{ height: "100vh", display: "grid", gridTemplateColumns: v.gateCols, background: "#fff", overflow: "hidden" } as React.CSSProperties}>
            <aside style={{ display: v.gateAsideShow, padding: "38px 40px", background: "#0f121b", color: "#fff", flexDirection: "column", justifyContent: "space-between", gap: "40px", position: "relative", overflow: "hidden", boxShadow: "30px 0 70px -24px rgba(15,18,27,0.34)" } as React.CSSProperties}>
              <img src="assets/study.jpg" alt="Student nurses revising together at a library table" style={{ position: "absolute", zIndex: "0", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "24% 38%" }} />
              {' '}
              <span style={{ position: "absolute", zIndex: "1", inset: "0", background: "linear-gradient(180deg, rgba(15,18,27,0.92) 0%, rgba(15,18,27,0.5) 18%, rgba(15,18,27,0.08) 40%, rgba(15,18,27,0.16) 68%, rgba(15,18,27,0.78) 100%)" }} />
              {' '}
              <span style={{ position: "absolute", zIndex: "1", inset: "0", background: "linear-gradient(90deg, rgba(15,18,27,0.58) 0%, rgba(15,18,27,0.12) 42%, rgba(15,18,27,0) 100%)" }} />
              {' '}
              <span style={{ position: "relative", zIndex: "3", display: "inline-flex", alignItems: "center", gap: "11px" }}>
                <span style={{ width: "27px", height: "31px", display: "block", color: "#fff", flex: "0 0 auto" }}>
                  <svg viewBox="0 0 22 26" style={{ width: "100%", height: "100%" }}>
                    <rect x="0.9" y="0.9" width="20.2" height="24.2" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4.4 8.1h13.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M4.4 13.6h8.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <strong style={{ fontSize: "17px", letterSpacing: "-0.015em", color: "#fff" }} className="d">Deep Focus</strong>
                  <small style={{ fontSize: "8px", color: "rgba(255,255,255,0.62)" }} className="k">Nurse’s and Midwives Revision</small>
                </span>
              </span>
              <p style={{ position: "relative", zIndex: "3", margin: "0", fontSize: "9px", color: "rgba(255,255,255,0.52)" }} className="k">
                Kampala · 2026
              </p>
            </aside>
            <div style={{ display: "block", padding: v.gatePad, overflowY: "auto", background: "linear-gradient(to right, #f2f4f7 0%, #fafbfc 9%, #fff 20%)" } as React.CSSProperties}>
              <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
                <p className="k">Sign in</p>
                <h1 style={{ margin: "12px 0 0", fontSize: v.h1 } as React.CSSProperties} className="d">Your address decides your desk.</h1>
                <p style={{ margin: "14px 0 0", color: "#6b7480", fontSize: "14px", lineHeight: "1.7" }}>
                  Deep Focus reads the domain of the address you sign in with. There is no role menu to find.
                </p>
                <label style={{ display: "block", marginTop: "28px" }}>
                  <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Email address</span>
                  <input value={v.email} onChange={v.setEmail} onKeyDown={v.gateKey} placeholder="you@student.deepfocus.ug" autoCapitalize="off" autoComplete="username" style={{ width: "100%", height: "54px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "16px", outline: "0" }} className="fc0" />
                </label>
                <div style={{ marginTop: "9px", minHeight: "18px" }}>
                  {v.gateRead ? (
                    <>
                    <p style={{ margin: "0", fontSize: "9px", color: v.gateReadTone } as React.CSSProperties} className="k">{v.gateReadText}</p>
                    </>
                  ) : null}
                </div>
                <label style={{ display: "block", marginTop: "12px" }}>
                  <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Password</span>
                  <input type="password" value={v.pass} onChange={v.setPass} onKeyDown={v.gateKey} placeholder="Any value — this is a preview" style={{ width: "100%", height: "54px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "16px", outline: "0" }} className="fc0" />
                </label>
                <button onClick={v.signIn} style={{ width: "100%", minHeight: "54px", marginTop: "18px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", cursor: "pointer" }} className="hv1">
                  Sign in
                  <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                {v.gateErr ? (
                  <>
                  <p style={{ margin: "12px 0 0", padding: "13px 15px", border: "1px solid #e0d6cd", borderRadius: "3px", background: "#fdfbf8", color: "#8a5a34", fontSize: "12.5px", lineHeight: "1.6" }}>
                    {v.gateError}
                  </p>
                  </>
                ) : null}
                <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #eef1f4" }}>
                  <p style={{ margin: "0 0 12px", fontSize: "9px" }} className="k">Preview addresses</p>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {(v.gateAccounts || []).map((a, a_i) => (
                      <React.Fragment key={a_i}>
                        <button onClick={a.use} style={{ padding: "12px 2px", border: "0", borderBottom: "1px solid #eef1f4", background: "none", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "center", textAlign: "left", cursor: "pointer" }} className="hv2">
                          <span style={{ minWidth: "0" }}>
                            <strong style={{ display: "block", fontSize: "12.5px", fontWeight: "500", color: "#4a5a8a", overflowWrap: "anywhere" }} className="n">
                              {a.email}
                            </strong>
                            <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.55" }}>
                              {a.who}
                            </small>
                          </span>
                          <span style={{ fontSize: "9px", color: "#14171c" }} className="k">{a.desk}</span>
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  <p style={{ margin: "16px 0 0", color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.65" }}>
                    A preview environment. No school registration, credit or result is created here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </>
        ) : null}
        {v.inSetup ? (
          <>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
            <header style={{ minHeight: "60px", padding: `0 ${v.gut}`, borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flex: "0 0 auto" } as React.CSSProperties}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "9px" }}>
                <span style={{ width: "26px", height: "26px", display: "block", color: "#1b1e2b" }}>
                  <svg viewBox="0 0 22 26" style={{ width: "100%", height: "100%" }}>
                    <rect x="0.9" y="0.9" width="20.2" height="24.2" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4.4 8.1h13.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M4.4 13.6h8.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <strong style={{ fontSize: "13px", letterSpacing: "-0.015em" }}>Deep Focus</strong>
                  <small style={{ fontSize: "8px" }} className="k">revision</small>
                </span>
              </span>
              <span style={{ fontSize: "9px" }} className="k">Step {v.stepNo} of {v.stepTotal}</span>
            </header>
            <div style={{ height: "2px", background: "#eef1f4", flex: "0 0 auto" }}>
              <i style={{ display: "block", height: "100%", background: "#1b1e2b", width: v.stepPct, transition: "width 320ms cubic-bezier(.22,.8,.24,1)" } as React.CSSProperties} />
            </div>
            <div style={{ flex: "1", display: "flex", justifyContent: "center", padding: v.setupPad } as React.CSSProperties}>
              <div style={{ width: "100%", maxWidth: "560px", display: "flex", flexDirection: "column" }}>
                {v.st.welcome ? (
                  <>
                  <section style={{ flex: "1", display: "flex", flexDirection: "column" }} className="f">
                    <p className="k">Before anything else</p>
                    <h1 style={{ margin: "14px 0 0", fontSize: v.h1 } as React.CSSProperties} className="d">
                      Let’s shape your revision — {v.stepTotal} short steps.
                    </h1>
                    <label style={{ marginTop: "30px", display: "block" }}>
                      <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Your name</span>
                      <input value={v.name} onChange={v.setName} placeholder="Fred Okorio" style={{ width: "100%", height: "54px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "16px", outline: "0" }} className="fc0" />
                    </label>
                    <div style={{ marginTop: "26px", borderTop: "1px solid #eef1f4" }}>
                      <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "14px", alignItems: "baseline" }}>
                        <span style={{ fontSize: "9px" }} className="k">This is</span>
                        <span style={{ fontSize: "13px" }}>Your private revision plan</span>
                      </div>
                      <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "14px", alignItems: "baseline" }}>
                        <span style={{ fontSize: "9px" }} className="k">This is not</span>
                        <span style={{ fontSize: "13px", color: "#6b7480" }}>School registration, credit, or a result</span>
                      </div>
                      <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "14px", alignItems: "baseline" }}>
                        <span style={{ fontSize: "9px" }} className="k">Stored</span>
                        <span style={{ fontSize: "13px", color: "#6b7480" }}>On this device only</span>
                      </div>
                    </div>
                    <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <button onClick={v.next} style={{ width: "100%", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                        Begin
                        <svg viewBox="0 0 24 24" width="17" height="17" className="s">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </section>
                  </>
                ) : null}
                {v.st.certificate ? (
                  <>
                  <section style={{ flex: "1", display: "flex", flexDirection: "column" }} className="f">
                    <p className="k">Certificate</p>
                    <h1 style={{ margin: "14px 0 0", fontSize: v.h1 } as React.CSSProperties} className="d">Which pathway are you revising?</h1>
                    <div style={{ marginTop: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {(v.pathwayChoices || []).map((p, p_i) => (
                        <React.Fragment key={p_i}>
                          <button onClick={p.pick} style={{ padding: "18px", border: `1px solid ${p.bd}`, borderRadius: "3px", background: p.bg, display: "flex", alignItems: "flex-start", gap: "14px", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv3">
                            <span style={{ width: "20px", height: "20px", marginTop: "2px", border: `1px solid ${p.mb}`, borderRadius: "50%", background: p.mf, display: "grid", placeItems: "center", flex: "0 0 auto" } as React.CSSProperties}>
                              <i style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff", opacity: p.dot } as React.CSSProperties} />
                            </span>
                            <span style={{ minWidth: "0", flex: "1" }}>
                              <strong style={{ display: "block", fontSize: "15px", fontWeight: "600" }}>{p.credential}</strong>
                              <small style={{ display: "block", marginTop: "5px", color: "#6b7480", fontSize: "12px", lineHeight: "1.6" }}>
                                {p.summary}
                              </small>
                              <small style={{ display: "block", marginTop: "9px" }} className="k">
                                {p.termCount} semesters · {p.unitCount} courses
                              </small>
                            </span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                    <p style={{ margin: "20px 0 0", fontSize: "11.5px", color: "#8d96a2", lineHeight: "1.6" }}>
                      Reference:{' '}
                      <a href={v.srcUrl} target="_blank" rel="noreferrer">{v.srcTitle}</a>
                      . Confirm any institutional change with your school.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", gap: "10px" }}>
                      <button onClick={v.back} style={{ minHeight: "54px", padding: "0 18px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                        Back
                      </button>
                      <button onClick={v.next} style={{ flex: "1", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                        Continue
                        <svg viewBox="0 0 24 24" width="17" height="17" className="s">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </section>
                  </>
                ) : null}
                {v.st.entry ? (
                  <>
                  <section style={{ flex: "1", display: "flex", flexDirection: "column" }} className="f">
                    <p className="k">{v.credential}</p>
                    <h1 style={{ margin: "14px 0 0", fontSize: v.h1 } as React.CSSProperties} className="d">Which semester are you joining?</h1>
                    <div style={{ marginTop: "24px", borderTop: "1px solid #1b1e2b" }}>
                      {(v.termChoices || []).map((t, t_i) => (
                        <React.Fragment key={t_i}>
                          <button onClick={t.pick} style={{ width: "100%", minHeight: "66px", padding: "15px 12px 15px 0", border: "0", borderBottom: "1px solid #eef1f4", background: t.bg, display: "grid", gridTemplateColumns: "24px minmax(0,1fr) auto", gap: "13px", alignItems: "center", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                            <span style={{ width: "18px", height: "18px", marginLeft: "6px", border: `1px solid ${t.mb}`, borderRadius: "50%", background: t.mf, display: "grid", placeItems: "center" } as React.CSSProperties}>
                              <i style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff", opacity: t.dot } as React.CSSProperties} />
                            </span>
                            <span style={{ minWidth: "0" }}>
                              <strong style={{ display: "block", fontSize: "14px", fontWeight: t.fw } as React.CSSProperties}>{t.label}</strong>
                              <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{t.period}</small>
                            </span>
                            <span style={{ fontSize: "9px" }} className="k n">{t.units} courses</span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                    <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", gap: "10px" }}>
                      <button onClick={v.back} style={{ minHeight: "54px", padding: "0 18px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                        Back
                      </button>
                      <button onClick={v.next} style={{ flex: "1", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                        Continue
                        <svg viewBox="0 0 24 24" width="17" height="17" className="s">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </section>
                  </>
                ) : null}
                {v.st.cleared ? (
                  <>
                  <section style={{ flex: "1", display: "flex", flexDirection: "column" }} className="f">
                    <p className="k">Joining at {v.entryLabel}</p>
                    <h1 style={{ margin: "14px 0 0", fontSize: v.h1 } as React.CSSProperties} className="d">
                      Which earlier semesters has your school already cleared?
                    </h1>
                    <div style={{ marginTop: "24px", borderTop: "1px solid #1b1e2b" }}>
                      {(v.priorTerms || []).map((t, t_i) => (
                        <React.Fragment key={t_i}>
                          <button onClick={t.toggle} style={{ width: "100%", minHeight: "62px", padding: "14px 12px 14px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "24px minmax(0,1fr) auto", gap: "13px", alignItems: "center", textAlign: "left", cursor: "pointer" }} className="hv2">
                            <span style={{ width: "18px", height: "18px", marginLeft: "6px", border: `1px solid ${t.mb}`, background: t.mf, color: "#fff", display: "grid", placeItems: "center" } as React.CSSProperties}>
                              <svg viewBox="0 0 24 24" width="12" height="12" style={{ strokeWidth: "3", opacity: t.dot } as React.CSSProperties} className="s">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span style={{ minWidth: "0" }}>
                              <strong style={{ display: "block", fontSize: "14px", fontWeight: "500" }}>{t.label}</strong>
                              <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{t.period}</small>
                            </span>
                            <span style={{ fontSize: "9px", color: t.stateColor } as React.CSSProperties} className="k">{t.stateWord}</span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                    <p style={{ margin: "18px 0 0", fontSize: "11.5px", color: "#8d96a2", lineHeight: "1.6" }}>{v.clearedNote}</p>
                    <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", gap: "10px" }}>
                      <button onClick={v.back} style={{ minHeight: "54px", padding: "0 18px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                        Back
                      </button>
                      <button onClick={v.next} disabled={v.clearedBlocked} style={{ flex: "1", minHeight: "54px", border: "0", borderRadius: "3px", background: v.clearedBtnBg, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: v.clearedCursor } as React.CSSProperties}>
                        {v.clearedBtnLabel}
                        <svg viewBox="0 0 24 24" width="17" height="17" className="s">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </section>
                  </>
                ) : null}
                {v.st.rhythm ? (
                  <>
                  <section style={{ flex: "1", display: "flex", flexDirection: "column" }} className="f">
                    <p className="k">Your rhythm</p>
                    <h1 style={{ margin: "14px 0 0", fontSize: v.h1 } as React.CSSProperties} className="d">
                      How many study sessions fit your week?
                    </h1>
                    <div style={{ marginTop: "30px", display: "flex", alignItems: "center", gap: "18px" }}>
                      <button onClick={v.fewer} aria-label="Fewer sessions" style={{ width: "52px", height: "52px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", display: "grid", placeItems: "center", cursor: "pointer" }} className="hv3">
                        <svg viewBox="0 0 24 24" width="18" height="18" className="s">
                          <path d="M5 12h14" />
                        </svg>
                      </button>
                      <strong style={{ minWidth: "66px", fontSize: "56px", textAlign: "center" }} className="d n">{v.sessions}</strong>
                      <button onClick={v.more} aria-label="More sessions" style={{ width: "52px", height: "52px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", display: "grid", placeItems: "center", cursor: "pointer" }} className="hv3">
                        <svg viewBox="0 0 24 24" width="18" height="18" className="s">
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                      <span style={{ marginLeft: "4px", color: "#6b7480", fontSize: "13px" }}>sessions each week</span>
                    </div>
                    <div style={{ marginTop: "28px", display: "flex", gap: "6px" }}>
                      {(v.weekDots || []).map((d, d_i) => (
                        <React.Fragment key={d_i}>
                          <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "7px", alignItems: "center" }}>
                            <i style={{ width: "100%", height: "44px", borderRadius: "2px", background: d.bg } as React.CSSProperties} />
                            <small style={{ fontSize: "8px" }} className="k">{d.day}</small>
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                    <p style={{ margin: "22px 0 0", fontSize: "11.5px", color: "#8d96a2", lineHeight: "1.6" }}>
                      Change this whenever your shifts change.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", gap: "10px" }}>
                      <button onClick={v.back} style={{ minHeight: "54px", padding: "0 18px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                        Back
                      </button>
                      <button onClick={v.next} style={{ flex: "1", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                        Continue
                        <svg viewBox="0 0 24 24" width="17" height="17" className="s">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </section>
                  </>
                ) : null}
                {v.st.courses ? (
                  <>
                  <section style={{ flex: "1", display: "flex", flexDirection: "column" }} className="f">
                    <p className="k">{v.entryLabel} · {v.entryPeriod}</p>
                    <h1 style={{ margin: "14px 0 0", fontSize: v.h1 } as React.CSSProperties} className="d">
                      Register only the courses you will revise.
                    </h1>
                    <div style={{ marginTop: "24px", borderTop: "1px solid #1b1e2b" }}>
                      {(v.unitChoices || []).map((u, u_i) => (
                        <React.Fragment key={u_i}>
                          <button onClick={u.toggle} style={{ width: "100%", minHeight: "64px", padding: "14px 12px 14px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "24px minmax(0,1fr) auto", gap: "13px", alignItems: "center", textAlign: "left", cursor: "pointer" }} className="hv2">
                            <span style={{ width: "18px", height: "18px", marginLeft: "6px", border: `1px solid ${u.mb}`, background: u.mf, color: "#fff", display: "grid", placeItems: "center" } as React.CSSProperties}>
                              <svg viewBox="0 0 24 24" width="12" height="12" style={{ strokeWidth: "3", opacity: u.dot } as React.CSSProperties} className="s">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span style={{ minWidth: "0" }}>
                              <strong style={{ display: "block", fontSize: "14px", fontWeight: "500" }}>{u.title}</strong>
                              <small style={{ display: "block", marginTop: "4px", fontSize: "9px" }} className="k n">{u.code}</small>
                            </span>
                            <span style={{ fontSize: "9px", color: u.mapColor } as React.CSSProperties} className="k">{u.mapWord}</span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                    <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", gap: "10px" }}>
                      <button onClick={v.back} style={{ minHeight: "54px", padding: "0 18px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                        Back
                      </button>
                      <button onClick={v.next} disabled={v.noUnits} style={{ flex: "1", minHeight: "54px", border: "0", borderRadius: "3px", background: v.unitsBtnBg, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: v.unitsCursor } as React.CSSProperties}>
                        {v.unitsBtnLabel}
                        <svg viewBox="0 0 24 24" width="17" height="17" className="s">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </section>
                  </>
                ) : null}
                {v.st.confirm ? (
                  <>
                  <section style={{ flex: "1", display: "flex", flexDirection: "column" }} className="f">
                    <p className="k">Confirm</p>
                    <h1 style={{ margin: "14px 0 0", fontSize: v.h1 } as React.CSSProperties} className="d">Your plan, in your words.</h1>
                    <div style={{ marginTop: "26px", borderTop: "1px solid #1b1e2b" }}>
                      {(v.summaryRows || []).map((r, r_i) => (
                        <React.Fragment key={r_i}>
                          <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.sumCols, gap: "14px", alignItems: "baseline" } as React.CSSProperties}>
                            <span style={{ fontSize: "9px" }} className="k">{r.k}</span>
                            <span style={{ minWidth: "0", fontSize: "13.5px", fontWeight: "500", lineHeight: "1.55" }}>{r.v}</span>
                            <button onClick={r.edit} style={{ padding: "0", border: "0", background: "transparent", color: "#8d96a2", fontSize: "11.5px", cursor: "pointer", justifySelf: "end" }} className="np hv4">
                              Change
                            </button>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div style={{ marginTop: "22px", padding: "16px", background: "#f7f9fa", borderRadius: "3px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px" }}>
                      <span style={{ fontSize: "9px" }} className="k">Semester charge</span>
                      <strong style={{ fontSize: "18px", fontWeight: "700" }} className="n">UGX 58,000</strong>
                    </div>
                    <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", gap: "10px" }}>
                      <button onClick={v.back} style={{ minHeight: "54px", padding: "0 18px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                        Back
                      </button>
                      <button onClick={v.finishSetup} style={{ flex: "1", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                        Save my plan
                        <svg viewBox="0 0 24 24" width="17" height="17" className="s">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </button>
                    </div>
                  </section>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          </>
        ) : null}
        {v.inApp ? (
          <>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#eef1f4" }}>
            {v.showBookBar ? (
              <>
              <div style={{ minHeight: "34px", padding: `7px ${v.gut}`, background: "#1b1e2b", color: "rgba(255,255,255,0.72)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 18px", flex: "0 0 auto" } as React.CSSProperties} className="np">
                <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.45)" }} className="k">Set textbook · {v.bookCourse}</span>
                {v.hasBook ? (
                  <>
                  <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 18px" }}>
                    <a href={v.bookUrl} target="_blank" rel="noreferrer" style={{ color: "#fff", fontSize: "11.5px", fontWeight: "600" }}>
                      {v.bookTitle}
                    </a>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.42)" }}>{v.bookPublisher}</span>
                    <a href={v.bookChapterUrl} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.82)", fontSize: "11.5px" }}>
                      {v.bookChapter}
                    </a>
                  </span>
                  </>
                ) : null}
                {v.noBook ? (
                  <>
                  <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.55)" }}>{v.bookNone}</span>
                  </>
                ) : null}
                {v.hasBook ? (
                  <>
                  <span style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
                    <a href={v.bookSecondUrl} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.62)", fontSize: "11px" }}>
                      {v.bookSecond}
                    </a>
                    <a href={v.bookNationalUrl} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.62)", fontSize: "11px" }}>
                      {v.bookNational}
                    </a>
                  </span>
                  </>
                ) : null}
              </div>
              </>
            ) : null}
            <div style={{ flex: "1", minHeight: "0", display: "flex", background: "#eef1f4" }}>
              {v.showRail ? (
                <>
                <aside style={{ width: "92px", flex: "0 0 92px", background: "#1b1e2b", color: "#fff", display: "flex", flexDirection: "column", position: "sticky", top: "0", height: v.railH } as React.CSSProperties}>
                  <button onClick={v.goDash} style={{ height: "66px", border: "0", background: "#fff", display: "grid", placeItems: "center", cursor: "pointer", flex: "0 0 auto" }} aria-label="Deep Focus">
                    <span style={{ width: "30px", height: "30px", color: "#1b1e2b", display: "block" }}>
                      <svg viewBox="0 0 22 26" style={{ width: "100%", height: "100%" }}>
                        <rect x="0.9" y="0.9" width="20.2" height="24.2" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4.4 8.1h13.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M4.4 13.6h8.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </span>
                  </button>
                  <nav style={{ padding: "12px 0", display: "flex", flexDirection: "column", gap: "2px", minHeight: "0", overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }}>
                    <button onClick={v.goAccount} style={{ minHeight: "62px", border: "0", borderLeft: `3px solid ${v.railAccountEdge}`, background: "transparent", color: "rgba(255,255,255,0.62)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv5">
                      <span style={{ width: "30px", height: "30px", border: "1.5px solid rgba(255,255,255,0.8)", borderRadius: "50%", background: "#fff", backgroundImage: `url(${v.mePhoto})`, backgroundSize: "cover", backgroundPosition: "center", color: "#1b1e2b", display: "grid", placeItems: "center", fontSize: "10px", fontWeight: "700" } as React.CSSProperties}>
                        {v.meInitialsShown}
                      </span>
                      <span>Account</span>
                    </button>
                    {(v.railItems || []).map((r, r_i) => (
                      <React.Fragment key={r_i}>
                        <button onClick={r.go} style={{ minHeight: "56px", border: "0", borderLeft: `3px solid ${r.edge}`, background: r.bg, color: r.fg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv5">
                          <span style={{ position: "relative", display: "grid", placeItems: "center" }}>
                            <span style={{ width: "21px", height: "21px", display: "block" }}>{r.icon}</span>
                            {r.badge ? (
                              <>
                              <span style={{ position: "absolute", top: "-7px", right: "-9px", minWidth: "16px", height: "16px", padding: "0 4px", borderRadius: "20px", background: "#fff", color: "#1b1e2b", display: "grid", placeItems: "center", fontSize: "9px", fontWeight: "700", boxShadow: "0 0 0 2px #1b1e2b" }} className="n">
                                {r.badge}
                              </span>
                              </>
                            ) : null}
                          </span>
                          <span>{r.label}</span>
                        </button>
                      </React.Fragment>
                    ))}
                  </nav>
                  <div style={{ marginTop: "auto", padding: "10px 0 14px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <button onClick={v.signOut} style={{ minHeight: "52px", border: "0", background: "transparent", color: "rgba(255,255,255,0.62)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "600", cursor: "pointer" }} className="hv5">
                      <svg viewBox="0 0 24 24" width="20" height="20" className="s">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <path d="m16 17 5-5-5-5" />
                        <path d="M21 12H9" />
                      </svg>
                      <span>Sign out</span>
                    </button>
                    <button onClick={v.goHelp} style={{ minHeight: "52px", border: "0", background: "transparent", color: "rgba(255,255,255,0.62)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "600", cursor: "pointer" }} className="hv5">
                      <svg viewBox="0 0 24 24" width="20" height="20" className="s">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                      <span>Help</span>
                    </button>
                  </div>
                </aside>
                </>
              ) : null}
              <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                <header style={{ minHeight: v.barH, padding: `0 ${v.gut}`, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e4e8ec", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", position: "sticky", top: "0", zIndex: "20", flex: "0 0 auto" } as React.CSSProperties}>
                  <div style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "11px" }}>
                    {v.showRail ? (
                      <>
                      <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <strong style={{ fontSize: "15px", letterSpacing: "-0.015em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {v.pageTitle}
                        </strong>
                        <small style={{ fontSize: "8px" }} className="k">{v.pageMeta}</small>
                      </div>
                      </>
                    ) : null}
                    {v.showTabs ? (
                      <>
                      <div style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ width: "24px", height: "24px", display: "block", color: "#1b1e2b", flex: "0 0 auto" }}>
                          <svg viewBox="0 0 22 26" style={{ width: "100%", height: "100%" }}>
                            <rect x="0.9" y="0.9" width="20.2" height="24.2" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M4.4 8.1h13.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            <path d="M4.4 13.6h8.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          </svg>
                        </span>
                        <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                          <strong style={{ fontSize: "14px", letterSpacing: "-0.015em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {v.pageTitle}
                          </strong>
                          <small style={{ fontSize: "8px" }} className="k">{v.pageMeta}</small>
                        </div>
                      </div>
                      </>
                    ) : null}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: "0 0 auto" }}>
                    {v.showSearch ? (
                      <>
                      <button onClick={v.goCourses} style={{ width: "210px", height: "38px", padding: "0 9px 0 12px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#f7f9fa", color: "#8d96a2", display: "flex", alignItems: "center", gap: "9px", cursor: "pointer" }} className="hv6">
                        <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                        <span style={{ fontSize: "12.5px" }}>Search courses</span>
                        <kbd style={{ marginLeft: "auto", height: "21px", padding: "0 6px", border: "1px solid #e4e8ec", borderRadius: "2px", background: "#fff", display: "flex", alignItems: "center", fontSize: "10px", fontFamily: "inherit" }} className="n">
                          ⌘K
                        </kbd>
                      </button>
                      </>
                    ) : null}
                    <button onClick={v.goInbox} aria-label="Notices" style={{ position: "relative", width: "38px", height: "38px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "grid", placeItems: "center", cursor: "pointer" }} className="hv6">
                      <svg viewBox="0 0 24 24" width="18" height="18" className="s">
                        <path d="M10.27 21a2 2 0 0 0 3.46 0" />
                        <path d="M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33" />
                      </svg>
                      {v.unread ? (
                        <>
                        <i style={{ position: "absolute", top: "7px", right: "7px", width: "6px", height: "6px", border: "1.5px solid #fff", borderRadius: "50%", background: "#b4552f" }} />
                        </>
                      ) : null}
                    </button>
                    {v.showChip ? (
                      <>
                      <button onClick={v.goAccount} style={{ height: "44px", padding: "0 10px 0 6px", border: "0", borderLeft: "1px solid #e4e8ec", background: "transparent", display: "flex", alignItems: "center", gap: "9px", cursor: "pointer" }}>
                        <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#1b1e2b", backgroundImage: `url(${v.mePhoto})`, backgroundSize: "cover", backgroundPosition: "center", color: "#fff", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700", flex: "0 0 auto" } as React.CSSProperties}>
                          {v.meInitialsShown}
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px" }}>
                          <strong style={{ fontSize: "12px" }}>{v.whoName}</strong>
                          <small style={{ fontSize: "8px" }} className="k">{v.roleWord}</small>
                        </span>
                        <svg viewBox="0 0 24 24" width="14" height="14" style={{ color: "#8d96a2" }} className="s">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      </>
                    ) : null}
                    {v.showTabs ? (
                      <>
                      <button onClick={v.goAccount} aria-label="Account" style={{ width: "38px", height: "38px", padding: "0", border: "0", borderRadius: "50%", background: "#1b1e2b", color: "#fff", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700", cursor: "pointer" }} data-om-avatar="1">
                        {v.meInitialsShown}
                      </button>
                      </>
                    ) : null}
                  </div>
                </header>
                <div style={{ flex: "1", minHeight: "0", display: "flex", alignItems: "flex-start" }}>
                  <main style={{ flex: "1", minWidth: "0", padding: v.mainPad } as React.CSSProperties}>
                    <div style={{ width: "100%", maxWidth: v.contentMax, margin: "0 auto" } as React.CSSProperties}>
                      <PageDashboard v={v} />
                      <PageCourses v={v} />
                      <PageInCourse v={v} />
                      <PageGrades v={v} />
                      <PagePayConfirm v={v} />
                      <PagePayMethod v={v} />
                      <PagePayNumber v={v} />
                      <PageMomoWaiting v={v} />
                      <PageReceipt v={v} />
                      <PagePayFailed v={v} />
                      <PageDeposit v={v} />
                      <PageDepositSent v={v} />
                      <PageStatement v={v} />
                      <PagePlan v={v} />
                      <PageCalendar v={v} />
                      <PageInbox v={v} />
                      <PageComposeShow v={v} />
                      <PageSettingsShow v={v} />
                      <PageAccount v={v} />
                      <PageHelp v={v} />
                      <PageInDesk v={v} />
                    </div>
                  </main>
                  {v.showPanel ? (
                    <>
                    <aside style={{ width: "316px", flex: "0 0 316px", minHeight: "100%", padding: "30px 26px", borderLeft: "1px solid #e4e8ec", background: "#fff", position: "sticky", top: v.barH, display: "flex", flexDirection: "column", gap: "26px" } as React.CSSProperties}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <span style={{ fontSize: "9px" }} className="k">Balance</span>
                        <strong style={{ fontSize: "30px", color: v.balColor } as React.CSSProperties} className="d n">{v.balText}</strong>
                        <small style={{ color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.6" }}>{v.balNote}</small>
                        <button onClick={v.goPayments} style={{ marginTop: "4px", minHeight: "42px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                          {v.balAction}
                        </button>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <span style={{ fontSize: "9px" }} className="k">Your rhythm</span>
                        <div style={{ display: "flex", gap: "5px" }}>
                          {(v.weekDots || []).map((d, d_i) => (
                            <React.Fragment key={d_i}>
                              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                                <i style={{ width: "100%", height: "30px", borderRadius: "2px", background: d.bg } as React.CSSProperties} />
                                <small style={{ fontSize: "8px" }} className="k">{d.day}</small>
                              </span>
                            </React.Fragment>
                          ))}
                        </div>
                        <small style={{ color: "#8d96a2", fontSize: "11.5px" }}>{v.sessions} sessions each week</small>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <span style={{ fontSize: "9px" }} className="k">Pathway</span>
                        <div style={{ borderTop: "1px solid #eef1f4" }}>
                          {(v.pathwayRows || []).map((p, p_i) => (
                            <React.Fragment key={p_i}>
                              <div style={{ padding: "11px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "16px minmax(0,1fr) auto", gap: "10px", alignItems: "center" }}>
                                <span style={{ width: "8px", height: "8px", borderRadius: "50%", border: `1px solid ${p.dotBd}`, background: p.dotBg } as React.CSSProperties} />
                                <span style={{ minWidth: "0", fontSize: "12px", fontWeight: p.fw, color: p.fg, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } as React.CSSProperties}>
                                  {p.label}
                                </span>
                                <small style={{ fontSize: "8px", color: p.stateColor } as React.CSSProperties} className="k">
                                  {p.state}
                                </small>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </aside>
                    </>
                  ) : null}
                </div>
                {v.showTabs ? (
                  <>
                  <nav style={{ position: "sticky", bottom: "0", zIndex: "20", minHeight: "62px", padding: "0 4px calc(env(safe-area-inset-bottom, 0px))", background: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)", borderTop: "1px solid #e4e8ec", display: "grid", gridTemplateColumns: `repeat(${v.tabCount}, 1fr)`, flex: "0 0 auto" } as React.CSSProperties} className="np">
                    {(v.tabs || []).map((t, t_i) => (
                      <React.Fragment key={t_i}>
                        <button onClick={t.go} style={{ minHeight: "62px", padding: "0 2px", border: "0", background: "transparent", color: t.fg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", fontSize: "9.5px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties}>
                          <span style={{ position: "relative", display: "grid", placeItems: "center" }}>
                            <span style={{ width: "21px", height: "21px", display: "block" }}>{t.icon}</span>
                            {t.badge ? (
                              <>
                              <i style={{ position: "absolute", top: "-2px", right: "-4px", width: "6px", height: "6px", border: "1.5px solid #fff", borderRadius: "50%", background: "#b4552f" }} />
                              </>
                            ) : null}
                          </span>
                          <span>{t.label}</span>
                          <i style={{ width: "16px", height: "2px", borderRadius: "2px", background: t.edge } as React.CSSProperties} />
                        </button>
                      </React.Fragment>
                    ))}
                  </nav>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          </>
        ) : null}
      </div>
    </>
  );
}
