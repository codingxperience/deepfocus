import React from 'react';
import type { View } from '../view';


export default function PageInbox({ v }: { v: View }) {
  return v.rt.inbox ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: "15px" }} className="f">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
          <div style={{ minWidth: "0", display: "flex", alignItems: "baseline", gap: "14px", flexWrap: "wrap" }}>
            <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Inbox</h1>
            <small style={{ fontSize: "9px" }} className="k n">{v.mailHeadMeta}</small>
          </div>
          <div style={{ display: "flex", gap: "8px", flex: "0 0 auto", flexWrap: "nowrap" }} className="np">
            <button onClick={v.mailSettings} style={{ minHeight: "40px", padding: "0 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
              <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.67 1.1 1.31 1.1H21a2 2 0 0 1 0 4h-.09c-.64 0-1.17.47-1.31 1.1z" />
              </svg>
              Settings
            </button>
            <button onClick={v.openCompose} style={{ minHeight: "40px", padding: "0 15px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv1">
              <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
              Compose
            </button>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", paddingBottom: "13px", borderBottom: "1px solid #e4e8ec" }} className="np">
          <div style={{ position: "relative", minWidth: "190px" }}>
            <button onClick={v.toggleCourseMenu} style={{ width: "100%", minHeight: "40px", padding: "0 12px", border: `1px solid ${v.courseMenuBd}`, borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", fontSize: "12.5px", fontWeight: "500", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv3">
              {v.mailCourseLabel}
              <svg viewBox="0 0 24 24" width="14" height="14" style={{ color: "#8d96a2", flex: "0 0 auto" }} className="s">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {v.courseMenuOpen ? (
              <>
              <div style={{ position: "absolute", zIndex: "40", top: "44px", left: "0", width: "260px", maxHeight: "264px", overflowY: "auto", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", boxShadow: "0 12px 30px rgba(20,23,28,0.12)", padding: "6px 0" }}>
                <p style={{ margin: "0", padding: "8px 12px 6px", fontSize: "8px" }} className="k">Courses</p>
                {(v.mailCourseChoices || []).map((c, c_i) => (
                  <React.Fragment key={c_i}>
                    <button onClick={c.pick} style={{ width: "100%", minHeight: "38px", padding: "8px 12px", border: "0", background: c.bg, color: c.fg, fontSize: "12.5px", fontWeight: c.fw, textAlign: "left", lineHeight: "1.45", cursor: "pointer" } as React.CSSProperties} className="hv10">
                      {c.label}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              </>
            ) : null}
          </div>
          <div style={{ position: "relative", minWidth: "150px" }}>
            <button onClick={v.toggleFolderMenu} style={{ width: "100%", minHeight: "40px", padding: "0 12px", border: `1px solid ${v.folderMenuBd}`, borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", fontSize: "12.5px", fontWeight: "500", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv3">
              {v.mailFolderLabel}
              <svg viewBox="0 0 24 24" width="14" height="14" style={{ color: "#8d96a2", flex: "0 0 auto" }} className="s">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {v.folderMenuOpen ? (
              <>
              <div style={{ position: "absolute", zIndex: "40", top: "44px", left: "0", width: "216px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", boxShadow: "0 12px 30px rgba(20,23,28,0.12)", padding: "6px 0" }}>
                {(v.mailFolderChoices || []).map((f, f_i) => (
                  <React.Fragment key={f_i}>
                    <button onClick={f.pick} style={{ width: "100%", minHeight: "38px", padding: "8px 12px", border: "0", background: f.bg, color: f.fg, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", fontSize: "12.5px", fontWeight: f.fw, textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv10">
                      {f.label}
                      <small style={{ fontSize: "8px", color: f.countFg } as React.CSSProperties} className="k n">{f.count}</small>
                    </button>
                  </React.Fragment>
                ))}
              </div>
              </>
            ) : null}
          </div>
          <label style={{ flex: "1", minWidth: "170px", minHeight: "40px", padding: "0 12px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", gap: "9px" }}>
            <svg viewBox="0 0 24 24" width="14" height="14" style={{ color: "#8d96a2", flex: "0 0 auto" }} className="s">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input value={v.mailSearch} onChange={v.setMailSearch} placeholder="Search messages, people, subjects" style={{ flex: "1", minWidth: "0", border: "0", background: "none", fontSize: "12.5px", outline: "0" }} />
          </label>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {(v.mailActions || []).map((a, a_i) => (
              <React.Fragment key={a_i}>
                <button onClick={a.run} aria-label={a.label} title={a.label} style={{ width: "40px", height: "40px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", color: a.fg, display: "grid", placeItems: "center", cursor: a.cursor } as React.CSSProperties} className="hv3">
                  <span style={{ width: "16px", height: "16px", display: "block" }}>{a.icon}</span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
        {v.mailBulkShow ? (
          <>
          <p style={{ margin: "0", padding: "11px 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#f7f9fa", color: "#14171c", fontSize: "12.5px" }}>
            {v.mailBulkNote}
          </p>
          </>
        ) : null}
        <div style={{ display: "grid", gridTemplateColumns: v.mailCols, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
          <div style={{ minWidth: "0", borderRight: "1px solid #eef1f4", maxHeight: v.mailListH, overflowY: "auto" } as React.CSSProperties}>
            {(v.mailRows || []).map((m, m_i) => (
              <React.Fragment key={m_i}>
                <div style={{ padding: "13px 14px", borderBottom: "1px solid #eef1f4", borderLeft: `3px solid ${m.edge}`, background: m.bg, display: "grid", gridTemplateColumns: "18px minmax(0,1fr)", gap: "11px", alignItems: "start" } as React.CSSProperties}>
                  <button onClick={m.check} aria-label="Select" style={{ width: "16px", height: "16px", marginTop: "3px", padding: "0", border: `1px solid ${m.boxBd}`, borderRadius: "2px", background: m.boxBg, color: "#fff", display: "grid", placeItems: "center", cursor: "pointer" } as React.CSSProperties}>
                    <svg viewBox="0 0 24 24" width="10" height="10" style={{ strokeWidth: "4", opacity: m.boxDot } as React.CSSProperties} className="s">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </button>
                  <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                      <small style={{ fontSize: "8px", color: m.dateFg } as React.CSSProperties} className="k n">{m.date}</small>
                      {m.hasCount ? (
                        <>
                        <small style={{ minWidth: "18px", height: "17px", padding: "0 5px", borderRadius: "2px", background: "#1b1e2b", color: "#fff", display: "grid", placeItems: "center", fontSize: "9px", fontWeight: "700" }} className="n">
                          {m.count}
                        </small>
                        </>
                      ) : null}
                    </span>
                    <button onClick={m.go} style={{ minWidth: "0", padding: "0", border: "0", background: "none", display: "grid", gridTemplateColumns: "15px minmax(0,1fr)", gap: "9px", alignItems: "start", textAlign: "left", cursor: "pointer" }}>
                      <span style={{ width: "11px", height: "11px", marginTop: "4px", border: `1.5px solid ${m.dotBd}`, borderRadius: "50%", background: m.dotBg, display: "block" } as React.CSSProperties} />
                      <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <strong style={{ fontSize: "12.5px", fontWeight: m.whoFw, lineHeight: "1.4", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } as React.CSSProperties}>
                          {m.who}
                        </strong>
                        <span style={{ fontSize: "12.5px", fontWeight: m.subjFw, color: "#14171c", lineHeight: "1.45" } as React.CSSProperties}>
                          {m.subject}
                        </span>
                        <small style={{ color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.5", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {m.preview}
                        </small>
                        <small style={{ marginTop: "2px", fontSize: "8px" }} className="k">{m.courseLabel}</small>
                      </span>
                    </button>
                    <button onClick={m.star} aria-label="Star" style={{ width: "fit-content", padding: "0", border: "0", background: "none", color: m.starFg, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv4">
                      <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: m.starFill } as React.CSSProperties} className="s">
                        <path d="M11.5 2.5a.5.5 0 0 1 .9 0l2.3 4.7 5.2.8a.5.5 0 0 1 .3.9l-3.8 3.6.9 5.1a.5.5 0 0 1-.7.6L12 16l-4.6 2.4a.5.5 0 0 1-.7-.6l.9-5.1L3.8 9a.5.5 0 0 1 .3-.9l5.2-.8z" />
                      </svg>
                      {m.starWord}
                    </button>
                  </span>
                </div>
              </React.Fragment>
            ))}
            {v.noMail ? (
              <>
              <div style={{ padding: "40px 22px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
                <span style={{ width: "42px", height: "42px", display: "block", color: "#c3cad2" }}>
                  <svg viewBox="0 0 24 24" width="42" height="42" className="s">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m3 6 9 7 9-7" />
                  </svg>
                </span>
                <strong style={{ fontSize: "13px", fontWeight: "600" }}>{v.noMailHead}</strong>
                <small style={{ maxWidth: "30ch", color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.6" }}>{v.noMailNote}</small>
              </div>
              </>
            ) : null}
          </div>
          <div style={{ minWidth: "0", minHeight: "420px", display: "flex", flexDirection: "column" }}>
            {v.mailOpen ? (
              <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "18px 20px", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "9px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                    <h2 style={{ margin: "0", fontSize: v.h3, maxWidth: "46ch" } as React.CSSProperties} className="d">{v.threadSubject}</h2>
                    <button onClick={v.closeThread} aria-label="Close" style={{ width: "32px", height: "32px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "grid", placeItems: "center", cursor: "pointer", flex: "0 0 auto" }} className="np hv3">
                      <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px" }}>
                    <small style={{ fontSize: "8px" }} className="k">{v.threadPeople}</small>
                    <small style={{ fontSize: "8px" }} className="k">{v.threadCourse}</small>
                  </div>
                </div>
                <div style={{ padding: "4px 20px 0" }}>
                  {(v.threadMsgs || []).map((t, t_i) => (
                    <React.Fragment key={t_i}>
                      <article style={{ padding: "18px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "36px minmax(0,1fr)", gap: "13px", alignItems: "start" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: t.avBg, backgroundImage: `url(${t.avPhoto})`, backgroundSize: "cover", backgroundPosition: "center", color: t.avFg, display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" } as React.CSSProperties}>
                          {t.initials}
                        </span>
                        <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "7px" }}>
                          <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 12px" }}>
                            <strong style={{ fontSize: "13px", fontWeight: "700" }}>{t.who}</strong>
                            <small style={{ fontSize: "8px" }} className="k">{t.when}</small>
                          </span>
                          <p style={{ margin: "0", maxWidth: "64ch", color: "#14171c", fontSize: "13.5px", lineHeight: "1.8" }}>
                            {t.body}
                          </p>
                        </span>
                      </article>
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "8px" }} className="k">Reply to {v.threadReplyTo}</span>
                  <textarea value={v.mailReply} onChange={v.setMailReply} rows={3} placeholder="Answer in plain words. Instructors read these before the gathering." style={{ width: "100%", padding: "12px 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13.5px", lineHeight: "1.75", resize: "vertical", outline: "0" }} className="fc9" />
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
                    <button onClick={v.sendMailReply} style={{ minHeight: "42px", padding: "0 16px", border: "0", borderRadius: "3px", background: v.replySendBg, color: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: v.replySendCursor } as React.CSSProperties}>
                      Send reply
                    </button>
                    <button onClick={v.archiveThread} style={{ minHeight: "42px", padding: "0 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                      {v.archiveWord}
                    </button>
                    <small style={{ fontSize: "8px" }} className="k">{v.replyHint}</small>
                  </div>
                </div>
              </div>
              </>
            ) : null}
            {v.mailShut ? (
              <>
              <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", padding: "40px 24px", textAlign: "center" }}>
                <span style={{ width: "92px", height: "74px", display: "block", color: "#c3cad2" }}>
                  <svg viewBox="0 0 24 20" style={{ width: "100%", height: "100%", fill: "none", stroke: "currentColor", strokeWidth: "1.1" }}>
                    <rect x="0.9" y="0.9" width="22.2" height="18.2" />
                    <path d="M0.9 0.9 12 11 23.1 0.9" />
                  </svg>
                </span>
                <strong style={{ fontSize: v.h3, color: "#8d96a2" } as React.CSSProperties} className="d">No conversation selected</strong>
                <small style={{ maxWidth: "34ch", color: "#8d96a2", fontSize: "12px", lineHeight: "1.65" }}>
                  Choose a message on the left. Course announcements are not sent here — they live on each course’s Announcements page.
                </small>
              </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  ) : null;
}
