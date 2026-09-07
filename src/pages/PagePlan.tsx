import React from 'react';
import type { View } from '../view';


export default function PagePlan({ v }: { v: View }) {
  return v.rt.plan ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.sessions} sessions each week</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Your week, as you set it.</h1>
        </header>
        <div style={{ display: "flex", gap: "6px", maxWidth: "460px" }}>
          {(v.weekDots || []).map((d, d_i) => (
            <React.Fragment key={d_i}>
              <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "7px", alignItems: "center" }}>
                <i style={{ width: "100%", height: "40px", borderRadius: "2px", background: d.bg } as React.CSSProperties} />
                <small style={{ fontSize: "8px" }} className="k">{d.day}</small>
              </span>
            </React.Fragment>
          ))}
        </div>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ fontSize: "9px" }} className="k">Focus blocks</span>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.planBlocks || []).map((b, b_i) => (
              <React.Fragment key={b_i}>
                <button onClick={b.go} style={{ width: "100%", padding: "16px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.agendaCols, gap: "13px", alignItems: "center", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                  <span style={{ fontSize: "9px" }} className="k n">{b.when}</span>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>{b.length} · {b.what}</strong>
                    <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{b.week}</small>
                  </span>
                  <svg viewBox="0 0 24 24" width="16" height="16" style={{ color: "#b6bec7", justifySelf: "end" }} className="s">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </React.Fragment>
            ))}
          </div>
          <button onClick={v.goPlanner} style={{ width: "fit-content", padding: "0", border: "0", background: "transparent", color: "#8d96a2", fontSize: "12px", cursor: "pointer" }} className="np hv4">
            Change my rhythm
          </button>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ fontSize: "9px" }} className="k">Cleared so far</span>
          {v.clearedEmpty ? (
            <>
            <p style={{ margin: "0", color: "#8d96a2", fontSize: "13px" }}>Nothing yet. A week appears here once all three steps are done.</p>
            </>
          ) : null}
          <div style={{ borderTop: "1px solid #eef1f4" }}>
            {(v.cleared || []).map((c, c_i) => (
              <React.Fragment key={c_i}>
                <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "78px minmax(0,1fr) auto", gap: "13px", alignItems: "center" }}>
                  <span style={{ fontSize: "9px" }} className="k n">{c.week}</span>
                  <span style={{ minWidth: "0", fontSize: "13px", fontWeight: "500" }}>{c.title}</span>
                  <small style={{ fontSize: "9px", color: "#2f6b52" }} className="k">Cleared</small>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </section>
    </>
  ) : null;
}
