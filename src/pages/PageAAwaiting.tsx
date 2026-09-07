import React from 'react';
import type { View } from '../view';


export default function PageAAwaiting({ v }: { v: View }) {
  return v.rt.aAwaiting ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Money a machine cannot confirm</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Awaiting a person</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            Wallet payments confirm themselves and open access in seconds. Bank deposits do not: somebody has to match a slip to a name. That is this page, and it is the only reason a paying learner ever waits.
          </p>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: v.statCols, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
          {(v.awaitTiles || []).map((t, t_i) => (
            <React.Fragment key={t_i}>
              <div style={{ padding: v.tilePad, borderRight: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "8px" } as React.CSSProperties}>
                <span style={{ fontSize: "8px" }} className="k">{t.k}</span>
                <strong style={{ fontSize: "26px", color: t.fg } as React.CSSProperties} className="d n">{t.v}</strong>
                <small style={{ color: "#6b7480", fontSize: "11.5px", lineHeight: "1.55" }}>{t.d}</small>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          {(v.awaitRows || []).map((r, r_i) => (
            <React.Fragment key={r_i}>
              <button onClick={r.go} style={{ width: "100%", padding: "16px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.ledgerCols, gap: "8px 14px", alignItems: "baseline", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                <span style={{ minWidth: "0" }}>
                  <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{r.who}</strong>
                  <small style={{ display: "block", marginTop: "5px", fontSize: "8px" }} className="k">{r.meta}</small>
                </span>
                <small style={{ fontSize: "9px", color: r.tone } as React.CSSProperties} className="k n">{r.status}</small>
                <strong style={{ fontSize: "13px", justifySelf: "end" }} className="n">{r.value}</strong>
              </button>
            </React.Fragment>
          ))}
        </div>
        <p style={{ margin: "0", maxWidth: "62ch", color: "#8d96a2", fontSize: "12.5px", lineHeight: "1.7" }}>
          A deposit older than one working day should not be here. If it is, the learner has been locked out of paid courses for a day and nobody told them.
        </p>
      </section>
    </>
  ) : null;
}
