import React from 'react';
import type { View } from '../view';


export default function PageAPublishing({ v }: { v: View }) {
  return v.rt.aPublishing ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">What learners can actually open</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Publishing</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            Instructors write and publish their own weeks. This desk cannot edit a week, only see whether one exists — because a learner blocked by an unwritten week looks identical to a learner blocked by a fee, and the two need different answers.
          </p>
        </header>
        {(v.pubCourses || []).map((c, c_i) => (
          <React.Fragment key={c_i}>
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 16px" }}>
                <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "5px" }}>
                  <strong style={{ fontSize: "14.5px", fontWeight: "700" }}>{c.code} · {c.title}</strong>
                  <small style={{ fontSize: "8px" }} className="k">{c.owner} · {c.meta}</small>
                </span>
                <small style={{ fontSize: "9px", color: c.tone } as React.CSSProperties} className="k n">{c.state}</small>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {(c.weeks || []).map((w, w_i) => (
                  <React.Fragment key={w_i}>
                    <span style={{ minWidth: "132px", flex: "1", padding: "12px 13px", border: `1px solid ${w.bd}`, borderRadius: "3px", background: w.bg, display: "flex", flexDirection: "column", gap: "6px" } as React.CSSProperties}>
                      <strong style={{ fontSize: "9px", color: w.fg } as React.CSSProperties} className="k n">Week {w.no}</strong>
                      <strong style={{ fontSize: "12.5px", fontWeight: "700", color: w.fg } as React.CSSProperties}>{w.word}</strong>
                      <small style={{ color: w.noteFg, fontSize: "10.5px", lineHeight: "1.5" } as React.CSSProperties}>{w.note}</small>
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </section>
          </React.Fragment>
        ))}
      </section>
    </>
  ) : null;
}
