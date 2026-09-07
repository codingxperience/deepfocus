import React from 'react';
import type { View } from '../view';


export default function PageDashboard({ v }: { v: View }) {
  return v.rt.dashboard ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.today} · {v.entryLabel}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.greeting}</h1>
        </header>
        {v.unpaid ? (
          <>
          <section style={{ border: "1px solid #e0d6cd", borderRadius: "3px", background: "#fdfbf8", overflow: "hidden" }}>
            <div style={{ padding: v.cardPad, display: "flex", flexDirection: "column", gap: "14px" } as React.CSSProperties}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "9px", color: "#9a6a45" }} className="k">Access closed</span>
                <strong style={{ fontSize: "15px", fontWeight: "700" }} className="n">UGX 58,000</strong>
              </div>
              <p style={{ margin: "0", fontSize: v.h3, maxWidth: "30ch" } as React.CSSProperties} className="d">Your semester charge is unpaid.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <button onClick={v.goPayments} style={{ minHeight: "46px", padding: "0 18px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                  Pay now
                  <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                <button onClick={v.goStatement} style={{ minHeight: "46px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                  Statement
                </button>
              </div>
            </div>
          </section>
          </>
        ) : null}
        {v.paid ? (
          <>
          <section style={{ border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden", display: "grid", gridTemplateColumns: v.nextCols } as React.CSSProperties}>
            <div style={{ padding: v.cardPad, display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" } as React.CSSProperties}>
              <span style={{ fontSize: "9px" }} className="k">Continue</span>
              <h2 style={{ margin: "0", fontSize: v.h2 } as React.CSSProperties} className="d">{v.nextCourse}</h2>
              <p style={{ margin: "0", color: "#6b7480", fontSize: "13px" }}>Week {v.nextWeekNo} · {v.nextWeekTitle}</p>
              <div style={{ marginTop: "4px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ height: "3px", flex: "1", maxWidth: "220px", background: "#eef1f4", borderRadius: "99px", overflow: "hidden" }}>
                  <i style={{ display: "block", height: "100%", width: v.nextPct, background: "#1b1e2b" } as React.CSSProperties} />
                </span>
                <small style={{ fontSize: "9px" }} className="k n">{v.nextDone} of {v.nextTotal} weeks</small>
              </div>
              <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <button onClick={v.openWeek} style={{ minHeight: "46px", padding: "0 18px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                  Open Week {v.nextWeekNo}
                  <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                <button onClick={v.goCourses} style={{ minHeight: "46px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                  All courses
                </button>
              </div>
            </div>
            {v.showNextArt ? (
              <>
              <div style={{ background: "#f7f9fa", borderLeft: "1px solid #e4e8ec", minHeight: "190px", backgroundImage: `url(${v.nextCover})`, backgroundSize: "cover", backgroundPosition: "center" } as React.CSSProperties} />
              </>
            ) : null}
          </section>
          </>
        ) : null}
        <section style={{ display: "grid", gridTemplateColumns: v.statCols, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
          {(v.stats || []).map((s, s_i) => (
            <React.Fragment key={s_i}>
              <div style={{ padding: "18px", borderRight: "1px solid #eef1f4", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "9px", minWidth: "0" }}>
                <span style={{ fontSize: "9px" }} className="k">{s.k}</span>
                <strong style={{ fontSize: "27px" }} className="d n">{s.v}</strong>
                <small style={{ color: "#8d96a2", fontSize: "11px" }}>{s.d}</small>
              </div>
            </React.Fragment>
          ))}
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
            <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Your registered courses</h2>
            <small style={{ fontSize: "9px" }} className="k n">{v.courseCount} this semester</small>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: v.courseCols, gap: "14px" } as React.CSSProperties}>
            {(v.courses || []).map((c, c_i) => (
              <React.Fragment key={c_i}>
                <button onClick={c.go} style={{ padding: "0", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden", display: "flex", flexDirection: "column", textAlign: "left", cursor: "pointer" }} className="hv3">
                  <span style={{ height: "92px", background: c.tint, backgroundImage: `url(${c.cover})`, backgroundSize: "cover", backgroundPosition: "center", display: "grid", placeItems: "center", borderBottom: "1px solid #eef1f4" } as React.CSSProperties}>
                    <span style={{ display: c.plate, fontSize: "20px", color: "#8d96a2" } as React.CSSProperties} className="d n">{c.code}</span>
                  </span>
                  <span style={{ padding: "14px 15px 16px", display: "flex", flexDirection: "column", gap: "8px", flex: "1", minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
                      <small style={{ fontSize: "9px" }} className="k n">{c.code}</small>
                      <small style={{ fontSize: "9px", color: c.stateColor } as React.CSSProperties} className="k">{c.stateWord}</small>
                    </span>
                    <strong style={{ fontSize: "14px", fontWeight: "600", lineHeight: "1.35" }}>{c.title}</strong>
                    <span style={{ marginTop: "4px", display: "flex", alignItems: "center", gap: "9px" }}>
                      <span style={{ height: "3px", flex: "1", background: "#eef1f4", borderRadius: "99px", overflow: "hidden" }}>
                        <i style={{ display: "block", height: "100%", width: c.pct, background: "#1b1e2b" } as React.CSSProperties} />
                      </span>
                      <small style={{ fontSize: "9px" }} className="k n">{c.pct}</small>
                    </span>
                  </span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">This week</h2>
            <button onClick={v.goCalendar} style={{ padding: "0", border: "0", background: "transparent", color: "#8d96a2", fontSize: "11.5px", cursor: "pointer" }} className="np hv4">
              Focus blocks
            </button>
          </div>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.agenda || []).map((a, a_i) => (
              <React.Fragment key={a_i}>
                <button onClick={a.go} style={{ width: "100%", padding: "15px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.agendaCols, gap: "13px", alignItems: "center", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                  <span style={{ fontSize: "9px" }} className="k n">{a.when}</span>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>{a.what}</strong>
                    <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{a.where}</small>
                  </span>
                  <svg viewBox="0 0 24 24" width="16" height="16" style={{ color: "#b6bec7", justifySelf: "end" }} className="s">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </React.Fragment>
            ))}
          </div>
        </section>
      </section>
    </>
  ) : null;
}
