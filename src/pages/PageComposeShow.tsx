import React from 'react';
import type { View } from '../view';


export default function PageComposeShow({ v }: { v: View }) {
  return v.composeShow ? (
    <>
      <div style={{ position: "fixed", inset: "0", zIndex: "60", background: "rgba(20,23,28,0.42)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: v.modalPad, overflowY: "auto" } as React.CSSProperties} className="np">
        <div style={{ width: "100%", maxWidth: "560px", border: "1px solid #d3dae1", borderRadius: "4px", background: "#fff", boxShadow: "0 24px 60px rgba(20,23,28,0.28)", display: "flex", flexDirection: "column" }} className="f">
          <div style={{ padding: "18px 22px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <strong style={{ fontSize: v.h3 } as React.CSSProperties} className="d">Compose message</strong>
            <button onClick={v.closeCompose} aria-label="Close" style={{ width: "34px", height: "34px", border: "1px solid #d8b23c", borderRadius: "3px", background: "#fff", display: "grid", placeItems: "center", cursor: "pointer" }} className="hv3">
              <svg viewBox="0 0 24 24" width="15" height="15" className="s">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: "19px", maxHeight: v.composeBodyH, overflowY: "auto" } as React.CSSProperties}>
            <label style={{ display: "block" }}>
              <span style={{ display: "block", marginBottom: "9px", fontSize: "13px", fontWeight: "700" }}>Course</span>
              <div style={{ position: "relative" }}>
                <button onClick={v.toggleCCourse} style={{ width: "100%", minHeight: "46px", padding: "0 14px", border: `1px solid ${v.cCourseBd}`, borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", fontSize: "14px", fontWeight: v.cCourseFw, color: v.cCourseFg, textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv3">
                  {v.cCourseLabel}
                  <svg viewBox="0 0 24 24" width="15" height="15" style={{ color: "#8d96a2", flex: "0 0 auto" }} className="s">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {v.cCourseOpen ? (
                  <>
                  <div style={{ position: "absolute", zIndex: "20", top: "50px", left: "0", right: "0", maxHeight: "216px", overflowY: "auto", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", boxShadow: "0 14px 34px rgba(20,23,28,0.16)", padding: "5px 0" }}>
                    {(v.composeCourses || []).map((c, c_i) => (
                      <React.Fragment key={c_i}>
                        <button onClick={c.pick} style={{ width: "100%", minHeight: "42px", padding: "9px 14px", border: "0", background: c.bg, color: c.fg, fontSize: "13.5px", fontWeight: c.fw, textAlign: "left", lineHeight: "1.45", cursor: "pointer" } as React.CSSProperties} className="hv10">
                          {c.label}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  </>
                ) : null}
              </div>
            </label>
            <button onClick={v.toggleIndividual} style={{ padding: "0", border: "0", background: "none", display: "grid", gridTemplateColumns: "20px minmax(0,1fr)", gap: "12px", alignItems: "center", textAlign: "left", cursor: "pointer" }}>
              <span style={{ width: "19px", height: "19px", border: `1px solid ${v.indivBd}`, borderRadius: "2px", background: v.indivBg, color: "#fff", display: "grid", placeItems: "center" } as React.CSSProperties}>
                <svg viewBox="0 0 24 24" width="12" height="12" style={{ strokeWidth: "3.5", opacity: v.indivDot } as React.CSSProperties} className="s">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span style={{ minWidth: "0", fontSize: "13.5px", lineHeight: "1.5" }}>Send an individual message to each recipient</span>
            </button>
            <label style={{ display: "block" }}>
              <span style={{ display: "block", marginBottom: "9px", fontSize: "13px", fontWeight: "700" }}>
                To{' '}
                <em style={{ color: "#b4552f", fontStyle: "normal" }}>*</em>
              </span>
              <span style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 46px", gap: "9px" }}>
                <span style={{ minWidth: "0", minHeight: "46px", padding: "0 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" style={{ color: "#8d96a2", flex: "0 0 auto" }} className="s">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input value={v.cTo} onChange={v.setCTo} placeholder="Insert or select names" style={{ flex: "1", minWidth: "0", border: "0", background: "none", fontSize: "14px", outline: "0" }} />
                </span>
                <button onClick={v.toggleBook} aria-label="Address book" style={{ width: "46px", height: "46px", border: `1px solid ${v.bookBd}`, borderRadius: "3px", background: v.bookBg, color: v.bookFg, display: "grid", placeItems: "center", cursor: "pointer" } as React.CSSProperties} className="hv3">
                  <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <path d="M10 7h6" />
                    <path d="M10 11h4" />
                  </svg>
                </button>
              </span>
              {v.bookOpen ? (
                <>
                <span style={{ marginTop: "9px", display: "block", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fbfcfd", padding: "6px 0", maxHeight: "190px", overflowY: "auto" }}>
                  {(v.bookGroups || []).map((bg, bg_i) => (
                    <React.Fragment key={bg_i}>
                      <span style={{ display: "block" }}>
                        <small style={{ display: "block", padding: "9px 14px 6px", fontSize: "8px" }} className="k">{bg.title}</small>
                        {(bg.rows || []).map((p, p_i) => (
                          <React.Fragment key={p_i}>
                            <button onClick={p.pick} style={{ width: "100%", minHeight: "40px", padding: "8px 14px", border: "0", background: p.bg, display: "grid", gridTemplateColumns: "26px minmax(0,1fr)", gap: "10px", alignItems: "center", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv10">
                              <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#eef1f4", color: "#4c545f", display: "grid", placeItems: "center", fontSize: "9px", fontWeight: "700" }}>
                                {p.initials}
                              </span>
                              <span style={{ minWidth: "0" }}>
                                <strong style={{ display: "block", fontSize: "12.5px", fontWeight: "600" }}>{p.name}</strong>
                                <small style={{ display: "block", marginTop: "3px", fontSize: "7.5px" }} className="k">{p.role}</small>
                              </span>
                            </button>
                          </React.Fragment>
                        ))}
                      </span>
                    </React.Fragment>
                  ))}
                </span>
                </>
              ) : null}
            </label>
            <label style={{ display: "block" }}>
              <span style={{ display: "block", marginBottom: "9px", fontSize: "13px", fontWeight: "700" }}>Subject</span>
              <input value={v.cSubject} onChange={v.setCSubject} placeholder="Week number first, then the question" style={{ width: "100%", height: "46px", padding: "0 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", outline: "0" }} className="fc9" />
            </label>
            <label style={{ display: "block" }}>
              <span style={{ display: "block", marginBottom: "9px", fontSize: "13px", fontWeight: "700" }}>
                Message{' '}
                <em style={{ color: "#b4552f", fontStyle: "normal" }}>*</em>
              </span>
              <textarea value={v.cBody} onChange={v.setCBody} rows={6} placeholder="Say what you have tried and where you are stuck. No patient names." style={{ width: "100%", padding: "13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", lineHeight: "1.75", resize: "vertical", outline: "0" }} className="fc9" />
              {v.sigShow ? (
                <>
                <small style={{ display: "block", marginTop: "9px", padding: "11px 13px", borderLeft: "2px solid #d3dae1", color: "#6b7480", fontSize: "12.5px", lineHeight: "1.7", whiteSpace: "pre-line" }}>
                  {v.sigPreview}
                </small>
                </>
              ) : null}
            </label>
          </div>
          <div style={{ padding: "14px 20px", borderTop: "1px solid #eef1f4", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={v.addAttachment} aria-label="Attach a file" title="Attach a file" style={{ width: "42px", height: "42px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", color: "#4c545f", display: "grid", placeItems: "center", cursor: "pointer" }} className="hv3">
                <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
              <button onClick={v.addVoice} aria-label="Record a voice note" title="Record a voice note" style={{ width: "42px", height: "42px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", color: "#4c545f", display: "grid", placeItems: "center", cursor: "pointer" }} className="hv3">
                <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <path d="M12 19v3" />
                </svg>
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", flexWrap: "wrap" }}>
              <small style={{ fontSize: "8px", color: v.composeNoteTone } as React.CSSProperties} className="k">{v.composeHintLine}</small>
              <button onClick={v.closeCompose} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                Cancel
              </button>
              <button onClick={v.sendCompose} style={{ minHeight: "44px", padding: "0 19px", border: "0", borderRadius: "3px", background: v.sendBg, color: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: v.sendCursor } as React.CSSProperties}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
