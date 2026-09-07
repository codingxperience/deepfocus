import React from 'react';
import type { View } from '../view';


export default function PageICourses({ v }: { v: View }) {
  return v.rt.iCourses ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Assigned to Grace Nalubega</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Six course spaces</h1>
        </header>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          {(v.spaceRows || []).map((r, r_i) => (
            <React.Fragment key={r_i}>
              <button onClick={r.go} style={{ width: "100%", padding: "17px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.spaceCols, gap: "14px", alignItems: "center", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                <span style={{ minWidth: "0" }}>
                  <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{r.title}</strong>
                  <small style={{ display: "block", marginTop: "4px", fontSize: "9px" }} className="k n">{r.code} · {r.week}</small>
                </span>
                <span style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ height: "3px", flex: "1", background: "#eef1f4", borderRadius: "99px", overflow: "hidden" }}>
                    <i style={{ display: "block", height: "100%", width: r.pct, background: "#1b1e2b" } as React.CSSProperties} />
                  </span>
                  <small style={{ fontSize: "9px" }} className="k n">{r.completion}</small>
                </span>
                <small style={{ color: "#4c545f", fontSize: "12px" }} className="n">{r.learners} learners</small>
                <small style={{ fontSize: "9px", color: r.tone, textAlign: "right" } as React.CSSProperties} className="k">{r.status}</small>
              </button>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  ) : null;
}
