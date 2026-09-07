import React from 'react';
import type { View } from '../view';


export default function PageISignals({ v }: { v: View }) {
  return v.rt.iSignals ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">This week · not a grade, not a ranking</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.signalHead}</h1>
        </header>
        <section style={{ display: "grid", gridTemplateColumns: v.twoCols, gap: v.blockGap } as React.CSSProperties}>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "9px" }} className="k">Fewer sessions than usual</span>
            <div style={{ borderTop: "1px solid #1b1e2b" }}>
              {(v.signalRows || []).map((r, r_i) => (
                <React.Fragment key={r_i}>
                  <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "baseline" }}>
                    <span style={{ minWidth: "0" }}>
                      <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>{r.name}</strong>
                      <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{r.meta}</small>
                    </span>
                    <small style={{ fontSize: "9px", color: r.tone } as React.CSSProperties} className="n k">{r.streak}</small>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <span style={{ marginTop: "10px", fontSize: "9px" }} className="k">Steady</span>
            <div style={{ borderTop: "1px solid #eef1f4" }}>
              {(v.steadyRows || []).map((r, r_i) => (
                <React.Fragment key={r_i}>
                  <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "baseline" }}>
                    <span style={{ minWidth: "0" }}>
                      <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500", color: "#6b7480" }}>{r.name}</strong>
                      <small style={{ display: "block", marginTop: "4px", color: "#b6bec7", fontSize: "11.5px" }}>{r.meta}</small>
                    </span>
                    <small style={{ fontSize: "9px", color: r.tone } as React.CSSProperties} className="n k">{r.streak}</small>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <p style={{ margin: "6px 0 0", color: "#8d96a2", fontSize: "12px", lineHeight: "1.65" }}>
              A session is a focus block the learner chose to keep. Nothing tracks reading or time on screen.
            </p>
          </div>
          <aside style={{ minWidth: "0", padding: v.cardPad, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", alignSelf: "flex-start", display: "flex", flexDirection: "column", gap: "16px" } as React.CSSProperties}>
            <span style={{ fontSize: "9px" }} className="k">How far each space has come</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {(v.spaceRows || []).map((r, r_i) => (
                <React.Fragment key={r_i}>
                  <span style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
                      <small style={{ fontSize: "12px", fontWeight: "500" }}>{r.title}</small>
                      <small style={{ fontSize: "9px" }} className="k n">{r.completion}</small>
                    </span>
                    <span style={{ height: "3px", background: "#eef1f4", borderRadius: "99px", overflow: "hidden" }}>
                      <i style={{ display: "block", height: "100%", width: r.pct, background: "#1b1e2b" } as React.CSSProperties} />
                    </span>
                  </span>
                </React.Fragment>
              ))}
            </div>
            <button onClick={v.goNotice} style={{ marginTop: "4px", minHeight: "46px", border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv2">
              Write one notice
            </button>
          </aside>
        </section>
      </section>
    </>
  ) : null;
}
