import React from 'react';
import type { View } from '../view';


export default function PageGrades({ v }: { v: View }) {
  return v.rt.grades ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.gradeCourse}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Your grade, and the arithmetic behind it.</h1>
        </header>
        <section style={{ display: "grid", gridTemplateColumns: v.twoCols, gap: v.blockGap } as React.CSSProperties}>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties}>
            <div style={{ padding: "20px 0 22px", borderTop: "1px solid #1b1e2b", borderBottom: "1px solid #eef1f4", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px 20px" }}>
              <strong style={{ fontSize: "46px" }} className="d n">{v.gradePct}</strong>
              <strong style={{ fontSize: "24px", color: "#4c545f" }} className="d">{v.gradeLetter}</strong>
              <small style={{ flex: "1", minWidth: "240px", color: "#6b7480", fontSize: "12.5px", lineHeight: "1.65" }}>{v.gradeNote}</small>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "9px" }} className="k">How the course is weighted</span>
              <div style={{ borderTop: "1px solid #eef1f4" }}>
                {(v.gradeGroups || []).map((g, g_i) => (
                  <React.Fragment key={g_i}>
                    <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "8px 14px", alignItems: "baseline" }}>
                      <span style={{ minWidth: "0" }}>
                        <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{g.label} · {g.weight}</strong>
                        <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{g.note}</small>
                        <span style={{ marginTop: "9px", display: "flex", alignItems: "center", gap: "9px" }}>
                          <span style={{ height: "3px", flex: "1", maxWidth: "260px", background: "#eef1f4", borderRadius: "99px", overflow: "hidden", display: "block" }}>
                            <i style={{ display: "block", height: "100%", width: g.bar, background: "#1b1e2b" } as React.CSSProperties} />
                          </span>
                          <small style={{ fontSize: "9px" }} className="k n">{g.pct}</small>
                        </span>
                      </span>
                      <span style={{ textAlign: "right" }}>
                        <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600", color: g.fg } as React.CSSProperties} className="n">
                          {g.got}
                        </strong>
                        <small style={{ display: "block", marginTop: "4px", fontSize: "9px" }} className="k n">{g.all}</small>
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "9px" }} className="k">Every piece of work, marked or not</span>
              <div style={{ borderTop: "1px solid #1b1e2b" }}>
                {(v.gradeRows || []).map((r, r_i) => (
                  <React.Fragment key={r_i}>
                    <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.rowCols, gap: "8px 14px", alignItems: "baseline" } as React.CSSProperties}>
                      <span style={{ fontSize: "9px" }} className="k n">{r.week}</span>
                      <span style={{ minWidth: "0" }}>
                        <strong style={{ display: "block", fontSize: "13px", fontWeight: "500" }}>{r.title}</strong>
                        <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k">{r.label}</small>
                      </span>
                      <span style={{ textAlign: "right" }}>
                        <strong style={{ display: "block", fontSize: "13px", fontWeight: "600" }} className="n">{r.mark}</strong>
                        <small style={{ display: "block", marginTop: "4px", fontSize: "8px", color: r.tone } as React.CSSProperties} className="k">
                          {r.state}
                        </small>
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <aside style={{ minWidth: "0", padding: v.cardPad, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", alignSelf: "flex-start", display: "flex", flexDirection: "column", gap: "16px" } as React.CSSProperties}>
            <span style={{ fontSize: "9px" }} className="k">Your other courses</span>
            <div style={{ borderTop: "1px solid #eef1f4" }}>
              {(v.gradeCourses || []).map((c, c_i) => (
                <React.Fragment key={c_i}>
                  <button onClick={c.go} style={{ width: "100%", padding: "13px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "baseline", textAlign: "left", cursor: "pointer" }} className="hv2">
                    <span style={{ minWidth: "0" }}>
                      <strong style={{ display: "block", fontSize: "12.5px", fontWeight: c.fw } as React.CSSProperties}>{c.title}</strong>
                      <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k n">{c.code}</small>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <strong style={{ display: "block", fontSize: "12.5px", fontWeight: "600" }} className="n">{c.pct}</strong>
                      <small style={{ display: "block", marginTop: "3px", fontSize: "8px" }} className="k">{c.letter}</small>
                    </span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <p style={{ margin: "0", paddingTop: "14px", borderTop: "1px solid #eef1f4", color: "#8d96a2", fontSize: "11px", lineHeight: "1.6" }}>
              Nothing here is estimated or predicted. A group joins your total only once a piece of its work has been marked.
            </p>
          </aside>
        </section>
      </section>
    </>
  ) : null;
}
