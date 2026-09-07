import React from 'react';
import type { View } from '../view';


export default function PageIMark({ v }: { v: View }) {
  return v.rt.iMark ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Five working days is the promise</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.markHead}</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            Oldest first. Enter the mark against the rubric, write one line the learner can act on, and return it. Nothing is returned to a learner until you press Return work.
          </p>
        </header>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {(v.markFilters || []).map((f, f_i) => (
            <React.Fragment key={f_i}>
              <button onClick={f.pick} style={{ minHeight: "40px", padding: "0 14px", border: `1px solid ${f.bd}`, borderRadius: "99px", background: f.bg, color: f.fg, fontSize: "12.5px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                {f.label}
              </button>
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {(v.markRows || []).map((m, m_i) => (
            <React.Fragment key={m_i}>
              <article style={{ border: `1px solid ${m.bd}`, borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
                <div style={{ padding: "15px 17px", display: "grid", gridTemplateColumns: v.markHeadCols, gap: "12px 16px", alignItems: "center", background: m.headBg } as React.CSSProperties}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#eef1f4", color: "#4c545f", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                    {m.initials}
                  </span>
                  <button onClick={m.open} style={{ minWidth: "0", padding: "0", border: "0", background: "none", display: "flex", flexDirection: "column", gap: "5px", textAlign: "left", cursor: "pointer" }}>
                    <strong style={{ fontSize: "13.5px", fontWeight: "600", lineHeight: "1.4" }}>{m.title}</strong>
                    <small style={{ fontSize: "8px" }} className="k n">{m.meta}</small>
                  </button>
                  <span style={{ display: "flex", alignItems: "center", gap: "12px", justifySelf: "end" }}>
                    <small style={{ fontSize: "9px", color: m.tone } as React.CSSProperties} className="k n">{m.state}</small>
                    <span style={{ width: "16px", height: "16px", display: "block", color: "#8d96a2", transform: m.caret, transition: "transform 140ms ease" } as React.CSSProperties}>
                      <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </span>
                </div>
                {m.open2 ? (
                  <>
                  <div style={{ padding: "18px 17px 20px", borderTop: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "17px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                      <span style={{ fontSize: "8px" }} className="k">What they handed in</span>
                      <p style={{ margin: "0", maxWidth: "68ch", color: "#14171c", fontSize: "13.5px", lineHeight: "1.8" }}>{m.body}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span style={{ fontSize: "8px" }} className="k">Rubric · tick what the work does</span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {(m.rubric || []).map((r, r_i) => (
                          <React.Fragment key={r_i}>
                            <button onClick={r.toggle} style={{ padding: "11px 13px", border: `1px solid ${r.bd}`, borderRadius: "3px", background: r.bg, display: "grid", gridTemplateColumns: "20px minmax(0,1fr) auto", gap: "11px", alignItems: "center", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv3">
                              <span style={{ width: "18px", height: "18px", border: `1px solid ${r.dotBd}`, borderRadius: "3px", background: r.dotBg, color: "#fff", display: "grid", placeItems: "center" } as React.CSSProperties}>
                                <svg viewBox="0 0 24 24" width="11" height="11" style={{ strokeWidth: "4", opacity: r.dot } as React.CSSProperties} className="s">
                                  <path d="M20 6 9 17l-5-5" />
                                </svg>
                              </span>
                              <span style={{ minWidth: "0", fontSize: "12.5px", lineHeight: "1.6", color: "#14171c" }}>{r.t}</span>
                              <small style={{ fontSize: "8px" }} className="k n">{r.pts}</small>
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: v.markScoreCols, gap: "14px", alignItems: "end" } as React.CSSProperties}>
                      <label style={{ display: "block" }}>
                        <span style={{ display: "block", marginBottom: "8px", fontSize: "8px" }} className="k">Mark out of {m.outOf}</span>
                        <input value={m.score} onChange={m.setScore} inputMode="numeric" style={{ width: "100%", height: "46px", padding: "0 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "16px", fontVariantNumeric: "tabular-nums", outline: "0" }} className="fc9" />
                      </label>
                      <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <small style={{ fontSize: "8px" }} className="k">From the rubric</small>
                        <strong style={{ fontSize: "15px" }} className="n">{m.rubricTotal}</strong>
                      </span>
                      <button onClick={m.useRubric} style={{ minHeight: "42px", padding: "0 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                        Use rubric total
                      </button>
                    </div>
                    <label style={{ display: "block" }}>
                      <span style={{ display: "block", marginBottom: "8px", fontSize: "8px" }} className="k">One line they can act on</span>
                      <textarea value={m.comment} onChange={m.setComment} rows={3} placeholder="Name the one thing to fix and where to read it. No praise without a reason." style={{ width: "100%", padding: "12px 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13.5px", lineHeight: "1.75", resize: "vertical", outline: "0" }} className="fc9" />
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px" }}>
                      <button onClick={m.returnWork} style={{ minHeight: "46px", padding: "0 17px", border: "0", borderRadius: "3px", background: m.returnBg, color: "#fff", fontSize: "13px", fontWeight: "600", cursor: m.returnCursor } as React.CSSProperties}>
                        {m.returnWord}
                      </button>
                      <button onClick={m.skip} style={{ minHeight: "46px", padding: "0 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                        Leave it open
                      </button>
                      <small style={{ fontSize: "8px", color: m.hintTone } as React.CSSProperties} className="k">{m.hint}</small>
                    </div>
                  </div>
                  </>
                ) : null}
              </article>
            </React.Fragment>
          ))}
          {v.markEmpty ? (
            <>
            <p style={{ margin: "0", padding: "24px", border: "1px dashed #d3dae1", borderRadius: "3px", color: "#8d96a2", fontSize: "13px" }}>
              Nothing is waiting in this filter. Every piece of work here has been returned.
            </p>
            </>
          ) : null}
        </div>
      </section>
    </>
  ) : null;
}
