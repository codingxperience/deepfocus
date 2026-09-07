import React from 'react';
import type { View } from '../view';


export default function PageAccount({ v }: { v: View }) {
  return v.rt.account ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "780px" } as React.CSSProperties} className="f">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "13px", borderBottom: "1px solid #e4e8ec", flexWrap: "wrap" }} className="np">
          <button onClick={v.toggleAnav} aria-label="Account menu" style={{ width: "34px", height: "34px", border: "1px solid #e4e8ec", borderRadius: "3px", background: v.anavBtnBg, color: v.anavBtnFg, display: "grid", placeItems: "center", cursor: "pointer", flex: "0 0 auto" } as React.CSSProperties} className="hv3">
            <svg viewBox="0 0 24 24" width="17" height="17" className="s">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>
          <nav style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "7px", flexWrap: "wrap" }}>
            <button onClick={v.goProfile} style={{ padding: "0", border: "0", background: "none", color: "#4a5a8a", fontSize: "13px", fontWeight: "500", cursor: "pointer" }} className="hv7">
              Account
            </button>
            <span style={{ color: "#b6bec7", fontSize: "13px" }}>›</span>
            <strong style={{ fontSize: "13px", fontWeight: "700" }}>{v.acctPaneLabel}</strong>
          </nav>
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "9px", flex: "0 0 auto" }}>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: v.meAvBg, backgroundImage: `url(${v.mePhoto})`, backgroundSize: "cover", backgroundPosition: "center", color: "#fff", display: "grid", placeItems: "center", fontSize: "10px", fontWeight: "700" } as React.CSSProperties}>
              {v.meInitialsShown}
            </span>
            <small style={{ fontSize: "8px" }} className="k">{v.roleWord}</small>
          </span>
        </div>
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.roleWord}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.whoName}</h1>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: v.acctCols, gap: v.blockGap, alignItems: "start" } as React.CSSProperties}>
          {v.anavOpen ? (
            <>
            <nav style={{ minWidth: "0", display: "flex", flexDirection: v.acctNavDir, flexWrap: "wrap", gap: "2px", position: v.acctNavPos, top: v.acctNavTop } as React.CSSProperties} className="np">
              {(v.acctTabs || []).map((t, t_i) => (
                <React.Fragment key={t_i}>
                  <button onClick={t.go} style={{ minHeight: "42px", padding: "0 12px", border: "0", borderLeft: `${t.edgeW} solid ${t.edge}`, borderRadius: "2px", background: t.bg, color: t.fg, fontSize: "13px", fontWeight: t.fw, textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv8">
                    {t.label}
                  </button>
                </React.Fragment>
              ))}
              <button onClick={v.toggleAnav} style={{ minHeight: "36px", marginTop: "12px", padding: "0 12px", border: "0", background: "none", color: "#8d96a2", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11.5px", fontWeight: "600", cursor: "pointer" }} className="hv4">
                <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                  <path d="m11 17-5-5 5-5" />
                  <path d="M18 17V7" />
                </svg>
                Hide menu
              </button>
            </nav>
            </>
          ) : null}
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "30px" }}>
            {v.ac.profile ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "22px" }} className="f">
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  <span style={{ width: "78px", height: "78px", borderRadius: "50%", background: v.photoBg, backgroundImage: `url(${v.mePhoto})`, backgroundSize: "cover", backgroundPosition: "center", color: "#fff", display: "grid", placeItems: "center", fontSize: "24px", fontWeight: "700", flex: "0 0 auto" } as React.CSSProperties}>
                    {v.meInitialsShown}
                  </span>
                  <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "9px" }}>
                    <strong style={{ fontSize: "14px", fontWeight: "600" }}>Photograph</strong>
                    <small style={{ maxWidth: "44ch", color: "#8d96a2", fontSize: "12px", lineHeight: "1.6" }}>{v.photoNote}</small>
                    <span style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                      <label style={{ position: "relative", minHeight: "40px", padding: "0 14px", border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "600", cursor: "pointer", overflow: "hidden" }} className="hv2">
                        <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                          <path d="M12 3v12" />
                          <path d="m17 8-5-5-5 5" />
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        </svg>
                        {v.photoBtnWord}
                        <input type="file" accept="image/*" onChange={v.pickPhoto} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", opacity: "0", cursor: "pointer" }} />
                      </label>
                      {v.hasPhoto ? (
                        <>
                        <button onClick={v.clearPhoto} style={{ minHeight: "40px", padding: "0 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                          Remove
                        </button>
                        </>
                      ) : null}
                    </span>
                    <small style={{ fontSize: "8px" }} className="k">{v.photoMeta}</small>
                  </span>
                </div>
                <label style={{ display: "block" }}>
                  <span style={{ display: "block", marginBottom: "8px", fontSize: "9px" }} className="k">Full name · used on marked work</span>
                  <input value={v.fullName} onChange={v.setFullName} style={{ width: "100%", height: "50px", padding: "0 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "15px", outline: "0" }} className="fc9" />
                </label>
                <label style={{ display: "block" }}>
                  <span style={{ display: "block", marginBottom: "8px", fontSize: "9px" }} className="k">Display name · what classmates see</span>
                  <input value={v.displayName} onChange={v.setDisplayName} style={{ width: "100%", height: "50px", padding: "0 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "15px", outline: "0" }} className="fc9" />
                </label>
                <label style={{ display: "block" }}>
                  <span style={{ display: "block", marginBottom: "8px", fontSize: "9px" }} className="k">About you · seen by your group</span>
                  <textarea value={v.bio} onChange={v.setBio} rows={3} placeholder="Where you work, what you are revising for, anything your group should know." style={{ width: "100%", padding: "13px 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", lineHeight: "1.6", resize: "vertical", outline: "0" }} className="fc9" />
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Account</span>
                  <div style={{ borderTop: "1px solid #1b1e2b" }}>
                    {(v.accountRows || []).map((r, r_i) => (
                      <React.Fragment key={r_i}>
                        <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.acctRowCols, gap: "14px", alignItems: "baseline" } as React.CSSProperties}>
                          <span style={{ fontSize: "9px" }} className="k">{r.k}</span>
                          <span style={{ minWidth: "0", fontSize: "13.5px", fontWeight: "500", overflowWrap: "anywhere" }}>{r.v}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <button onClick={v.goPlanner} style={{ minHeight: "46px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                    Revise my plan
                  </button>
                  <button onClick={v.goStatement} style={{ minHeight: "46px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                    Statement
                  </button>
                  <button onClick={v.signOut} style={{ minHeight: "46px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                    Sign out
                  </button>
                </div>
              </section>
              </>
            ) : null}
            {v.ac.contact ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="f">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Ways to reach you</h2>
                  <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.7" }}>
                    Most learners here read on a phone. WhatsApp and Telegram carry the full notice; SMS carries the short line and works with no data at all.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "9px" }} className="k">First place we write</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {(v.primaryChoices || []).map((c, c_i) => (
                      <React.Fragment key={c_i}>
                        <button onClick={c.pick} style={{ minHeight: "44px", padding: "0 16px", border: `1px solid ${c.bd}`, borderRadius: "99px", background: c.bg, color: c.fg, fontSize: "13px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                          {c.label}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {(v.channels || []).map((c, c_i) => (
                    <React.Fragment key={c_i}>
                      <article style={{ padding: "18px", border: `1px solid ${c.bd}`, borderRadius: "3px", background: "#fff", display: "flex", flexDirection: "column", gap: "13px" } as React.CSSProperties}>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                          <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap" }}>
                              <strong style={{ fontSize: "14.5px", fontWeight: "600" }}>{c.name}</strong>
                              <small style={{ fontSize: "9px", color: c.stateTone } as React.CSSProperties} className="k">{c.state}</small>
                            </span>
                            <small style={{ color: "#4c545f", fontSize: "13px" }} className="n">{c.handle}</small>
                          </span>
                          <button onClick={c.toggle} role="switch" aria-checked={c.on} aria-label={c.name} style={{ width: "46px", height: "26px", padding: "0", border: `1px solid ${c.swBd}`, borderRadius: "99px", background: c.swBg, display: "flex", alignItems: "center", cursor: "pointer", flex: "0 0 auto" } as React.CSSProperties}>
                            <i style={{ width: "18px", height: "18px", marginLeft: c.knob, borderRadius: "50%", background: c.knobBg, display: "block", transition: "margin 150ms ease" } as React.CSSProperties} />
                          </button>
                        </div>
                        <p style={{ margin: "0", maxWidth: "56ch", color: "#6b7480", fontSize: "12.5px", lineHeight: "1.7" }}>
                          {c.carries}
                        </p>
                        <div style={{ paddingTop: "12px", borderTop: "1px solid #eef1f4", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                          <small style={{ fontSize: "9px" }} className="k">{c.cost}</small>
                          <button onClick={c.test} style={{ minHeight: "38px", padding: "0 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                            {c.testWord}
                          </button>
                        </div>
                      </article>
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Email addresses</span>
                  <div style={{ borderTop: "1px solid #1b1e2b" }}>
                    {(v.emailRows || []).map((e, e_i) => (
                      <React.Fragment key={e_i}>
                        <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "baseline" }}>
                          <span style={{ minWidth: "0" }}>
                            <strong style={{ display: "block", fontSize: "13px", fontWeight: "500", overflowWrap: "anywhere" }} className="n">
                              {e.address}
                            </strong>
                            <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{e.note}</small>
                          </span>
                          <small style={{ fontSize: "9px", color: e.tone } as React.CSSProperties} className="k">{e.tag}</small>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "17px 18px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", flexDirection: "column", gap: "13px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                    <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "5px" }}>
                      <strong style={{ fontSize: "14px", fontWeight: "600" }}>Quiet hours</strong>
                      <small style={{ color: "#6b7480", fontSize: "12.5px", lineHeight: "1.6" }}>
                        Nothing is sent between {v.quietFrom} and {v.quietTo}. Anything urgent waits until morning.
                      </small>
                    </span>
                    <button onClick={v.toggleQuiet} role="switch" aria-checked={v.quietOn} aria-label="Quiet hours" style={{ width: "46px", height: "26px", padding: "0", border: `1px solid ${v.quietBd}`, borderRadius: "99px", background: v.quietBg, display: "flex", alignItems: "center", cursor: "pointer", flex: "0 0 auto" } as React.CSSProperties}>
                      <i style={{ width: "18px", height: "18px", marginLeft: v.quietKnob, borderRadius: "50%", background: v.quietKnobBg, display: "block", transition: "margin 150ms ease" } as React.CSSProperties} />
                    </button>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {(v.quietChoices || []).map((q, q_i) => (
                      <React.Fragment key={q_i}>
                        <button onClick={q.pick} style={{ minHeight: "38px", padding: "0 13px", border: `1px solid ${q.bd}`, borderRadius: "99px", background: q.bg, color: q.fg, fontSize: "12.5px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                          {q.label}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                {v.sentShow ? (
                  <>
                  <p style={{ margin: "0", padding: "13px 15px", border: "1px solid #cfe0d6", borderRadius: "3px", background: "#f4f9f6", color: "#2f6b52", fontSize: "12.5px", lineHeight: "1.6" }}>
                    {v.sentNote}
                  </p>
                  </>
                ) : null}
              </section>
              </>
            ) : null}
            {v.ac.notify ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "22px" }} className="f">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">What reaches you, and where</h2>
                  <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.7" }}>
                    Tap a cell to change it. Now, Daily, Weekly, or Off. A channel you have turned off in Ways to contact is not written to, whatever this table says.
                  </p>
                </div>
                <div style={{ overflowX: "auto", paddingBottom: "4px" }}>
                  <div style={{ minWidth: "520px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: v.notifyCols, gap: "8px", paddingBottom: "11px", borderBottom: "1px solid #1b1e2b" } as React.CSSProperties}>
                      <span style={{ fontSize: "9px" }} className="k">Subject</span>
                      {(v.notifyHeads || []).map((h, h_i) => (
                        <React.Fragment key={h_i}>
                          <span style={{ fontSize: "9px", textAlign: "center", color: h.tone } as React.CSSProperties} className="k">
                            {h.label}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                    {(v.notifyRows || []).map((r, r_i) => (
                      <React.Fragment key={r_i}>
                        <div style={{ display: "grid", gridTemplateColumns: v.notifyCols, gap: "8px", padding: "11px 0", borderBottom: "1px solid #eef1f4", alignItems: "center" } as React.CSSProperties}>
                          <span style={{ minWidth: "0" }}>
                            <strong style={{ display: "block", fontSize: "13px", fontWeight: "500" }}>{r.label}</strong>
                            <small style={{ display: "block", marginTop: "3px", color: "#8d96a2", fontSize: "11px", lineHeight: "1.5" }}>
                              {r.note}
                            </small>
                          </span>
                          {(r.cells || []).map((c, c_i) => (
                            <React.Fragment key={c_i}>
                              <button onClick={c.cycle} style={{ minHeight: "38px", padding: "0 6px", border: `1px solid ${c.bd}`, borderRadius: "3px", background: c.bg, color: c.fg, fontSize: "11.5px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                                {c.word}
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "17px 18px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                  <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "5px" }}>
                    <strong style={{ fontSize: "14px", fontWeight: "600" }}>Low-data mode</strong>
                    <small style={{ maxWidth: "52ch", color: "#6b7480", fontSize: "12.5px", lineHeight: "1.65" }}>
                      Send the short SMS line instead of the full notice when you are not on Wi-Fi.
                    </small>
                  </span>
                  <button onClick={v.toggleLowData} role="switch" aria-checked={v.lowDataOn} aria-label="Low-data mode" style={{ width: "46px", height: "26px", padding: "0", border: `1px solid ${v.lowDataBd}`, borderRadius: "99px", background: v.lowDataBg, display: "flex", alignItems: "center", cursor: "pointer", flex: "0 0 auto" } as React.CSSProperties}>
                    <i style={{ width: "18px", height: "18px", marginLeft: v.lowDataKnob, borderRadius: "50%", background: v.lowDataKnobBg, display: "block", transition: "margin 150ms ease" } as React.CSSProperties} />
                  </button>
                </div>
              </section>
              </>
            ) : null}
            {v.ac.files ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "22px" }} className="f">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Your files</h2>
                  <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.7" }}>
                    Everything you have handed in, and everything you have kept. Submitted work cannot be deleted once it has been marked.
                  </p>
                </div>
                <div style={{ padding: "17px 18px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ fontSize: "9px" }} className="k">Storage used</span>
                    <strong style={{ fontSize: "13px", fontWeight: "600" }} className="n">{v.storageUsed}</strong>
                  </div>
                  <span style={{ height: "4px", background: "#eef1f4", borderRadius: "99px", overflow: "hidden", display: "block" }}>
                    <i style={{ display: "block", height: "100%", width: v.storagePct, background: "#1b1e2b" } as React.CSSProperties} />
                  </span>
                </div>
                <div style={{ borderTop: "1px solid #1b1e2b" }}>
                  {(v.fileRows || []).map((f, f_i) => (
                    <React.Fragment key={f_i}>
                      <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "baseline" }}>
                        <span style={{ minWidth: "0" }}>
                          <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>{f.name}</strong>
                          <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{f.meta}</small>
                        </span>
                        <small style={{ fontSize: "9px" }} className="k n">{f.size}</small>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
              </>
            ) : null}
            {v.ac.security ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="f">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Sign-in and devices</h2>
                  <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.7" }}>
                    Your address decides your desk, so guard the address. Anything signed in below can read your work.
                  </p>
                </div>
                <div style={{ padding: "18px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", flexDirection: "column", gap: "13px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Phone sign-in code</span>
                  <p style={{ margin: "0", maxWidth: "54ch", color: "#6b7480", fontSize: "12.5px", lineHeight: "1.7" }}>
                    Type this code on the Deep Focus phone app instead of your password. It changes every time you ask for a new one, and it expires in ten minutes.
                  </p>
                  <strong style={{ fontSize: "40px", letterSpacing: "0.08em" }} className="d n">{v.pairCode}</strong>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <button onClick={v.newPair} style={{ minHeight: "42px", padding: "0 15px", border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv2">
                      New code
                    </button>
                    <small style={{ alignSelf: "center", fontSize: "9px" }} className="k">{v.pairNote}</small>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Signed in now</span>
                  <div style={{ borderTop: "1px solid #1b1e2b" }}>
                    {(v.sessionRows || []).map((d, d_i) => (
                      <React.Fragment key={d_i}>
                        <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "center" }}>
                          <span style={{ minWidth: "0" }}>
                            <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>{d.device}</strong>
                            <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{d.meta}</small>
                          </span>
                          <button onClick={d.end} style={{ minHeight: "38px", padding: "0 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", color: d.actionFg, fontSize: "12.5px", fontWeight: "600", cursor: d.cursor } as React.CSSProperties} className="hv3">
                            {d.action}
                          </button>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Password</span>
                  <p style={{ margin: "0", maxWidth: "56ch", color: "#4c545f", fontSize: "13px", lineHeight: "1.7" }}>
                    Last changed {v.passChanged}. Change it from the phone app or ask the office to reset it if you have lost access to your address.
                  </p>
                </div>
              </section>
              </>
            ) : null}
            {v.ac.access ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "22px" }} className="f">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Reading and display</h2>
                  <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.7" }}>
                    These follow your account, not the device, so a shared phone in the ward reads the way you set it.
                  </p>
                </div>
                <div style={{ borderTop: "1px solid #1b1e2b" }}>
                  {(v.a11yRows || []).map((a, a_i) => (
                    <React.Fragment key={a_i}>
                      <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "14px", alignItems: "center" }}>
                        <span style={{ minWidth: "0" }}>
                          <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>{a.label}</strong>
                          <small style={{ display: "block", marginTop: "4px", maxWidth: "52ch", color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.6" }}>
                            {a.note}
                          </small>
                        </span>
                        <button onClick={a.toggle} role="switch" aria-checked={a.on} aria-label={a.label} style={{ width: "46px", height: "26px", padding: "0", border: `1px solid ${a.bd}`, borderRadius: "99px", background: a.bg, display: "flex", alignItems: "center", cursor: "pointer", flex: "0 0 auto" } as React.CSSProperties}>
                          <i style={{ width: "18px", height: "18px", marginLeft: a.knob, borderRadius: "50%", background: a.knobBg, display: "block", transition: "margin 150ms ease" } as React.CSSProperties} />
                        </button>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
              </>
            ) : null}
            {v.ac.notices ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "22px" }} className="f">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Announcements to everyone</h2>
                  <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.7" }}>
                    Notices sent to the whole institution. Course notices sit in your Notices page instead.
                  </p>
                </div>
                {v.hasGlobal ? (
                  <>
                  <div style={{ borderTop: "1px solid #1b1e2b" }}>
                    {(v.globalRows || []).map((g, g_i) => (
                      <React.Fragment key={g_i}>
                        <div style={{ padding: "17px 0", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 14px" }}>
                            <strong style={{ fontSize: "14px", fontWeight: "600" }}>{g.title}</strong>
                            <small style={{ fontSize: "9px" }} className="k">{g.when}</small>
                          </div>
                          <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13px", lineHeight: "1.7" }}>{g.body}</p>
                          <small style={{ fontSize: "9px" }} className="k">{g.author}</small>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  </>
                ) : null}
                {v.noGlobal ? (
                  <>
                  <p style={{ margin: "0", padding: "20px", border: "1px dashed #d3dae1", borderRadius: "3px", color: "#8d96a2", fontSize: "13px" }}>
                    Nothing has been announced to everyone.
                  </p>
                  </>
                ) : null}
              </section>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  ) : null;
}
