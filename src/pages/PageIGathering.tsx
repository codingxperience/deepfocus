import React from 'react';
import type { View } from '../view';


export default function PageIGathering({ v }: { v: View }) {
  return v.rt.iGathering ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.gatherWhen}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Tonight’s hour</h1>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: v.twoCols, gap: v.blockGap, alignItems: "start" } as React.CSSProperties}>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ padding: "18px", borderLeft: "2px solid #1b1e2b", background: "#fff", display: "flex", flexDirection: "column", gap: "9px" }}>
              <span style={{ fontSize: "9px" }} className="k">Lead student</span>
              <strong style={{ fontSize: v.h3 } as React.CSSProperties} className="d">{v.gatherLead}</strong>
              <p style={{ margin: "0", maxWidth: "54ch", color: "#4c545f", fontSize: "13px", lineHeight: "1.7" }}>{v.gatherLeadNote}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "9px" }} className="k">Agenda · twelve minutes each</span>
              <div style={{ borderTop: "1px solid #1b1e2b" }}>
                {(v.gatherAgenda || []).map((a, a_i) => (
                  <React.Fragment key={a_i}>
                    <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.agendaCols, gap: "12px", alignItems: "baseline" } as React.CSSProperties}>
                      <small style={{ fontSize: "9px" }} className="k n">{a.at}</small>
                      <span style={{ minWidth: "0" }}>
                        <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{a.what}</strong>
                        <small style={{ display: "block", marginTop: "4px", color: "#6b7480", fontSize: "12px", lineHeight: "1.6" }}>
                          {a.note}
                        </small>
                      </span>
                      <small style={{ fontSize: "8px", justifySelf: "end" }} className="k">{a.who}</small>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "9px" }} className="k">Questions collected in writing</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                {(v.gatherQuestions || []).map((q, q_i) => (
                  <React.Fragment key={q_i}>
                    <p style={{ margin: "0", padding: "13px 15px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", color: "#14171c", fontSize: "13px", lineHeight: "1.7" }}>
                      {q.t}
                      <small style={{ display: "block", marginTop: "6px", fontSize: "8px" }} className="k">{q.who}</small>
                    </p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <aside style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
              <span style={{ fontSize: "9px" }} className="k">Attendance</span>
              <small style={{ fontSize: "9px" }} className="k n">{v.attendCount}</small>
            </div>
            <div style={{ borderTop: "1px solid #1b1e2b" }}>
              {(v.attendRows || []).map((a, a_i) => (
                <React.Fragment key={a_i}>
                  <button onClick={a.toggle} style={{ width: "100%", padding: "11px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "22px minmax(0,1fr) auto", gap: "11px", alignItems: "center", textAlign: "left", cursor: "pointer" }} className="hv2">
                    <span style={{ width: "20px", height: "20px", border: `1px solid ${a.bd}`, borderRadius: "50%", background: a.bg, color: "#fff", display: "grid", placeItems: "center" } as React.CSSProperties}>
                      <svg viewBox="0 0 24 24" width="11" height="11" style={{ strokeWidth: "4", opacity: a.dot } as React.CSSProperties} className="s">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ minWidth: "0", fontSize: "12.5px", fontWeight: a.fw } as React.CSSProperties}>{a.name}</span>
                    <small style={{ fontSize: "8px", color: a.tone } as React.CSSProperties} className="k">{a.word}</small>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <p style={{ margin: "0", color: "#8d96a2", fontSize: "11px", lineHeight: "1.65" }}>
              Twenty-five points a week. A learner who cannot attend posts the teach-back in the thread instead and it counts in full.
            </p>
          </aside>
        </div>
      </section>
    </>
  ) : null;
}
