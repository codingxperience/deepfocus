import React from 'react';
import type { View } from '../view';


export default function PageADecided({ v }: { v: View }) {
  return v.rt.aDecided ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Nothing here needs you</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Already decided</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            Every decision this desk has made, with the person who made it and the reason they gave. A decision can be reversed here; it is never deleted.
          </p>
        </header>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          {(v.decidedRows || []).map((d, d_i) => (
            <React.Fragment key={d_i}>
              <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.sumCols, gap: "8px 14px", alignItems: "baseline" } as React.CSSProperties}>
                <span style={{ fontSize: "9px", color: d.tone } as React.CSSProperties} className="k n">{d.verdict}</span>
                <span style={{ minWidth: "0" }}>
                  <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{d.who}</strong>
                  <small style={{ display: "block", marginTop: "4px", maxWidth: "58ch", color: "#6b7480", fontSize: "12px", lineHeight: "1.6" }}>
                    {d.what}
                  </small>
                  <small style={{ display: "block", marginTop: "6px", fontSize: "8px" }} className="k">{d.by}</small>
                </span>
                <button onClick={d.reopen} style={{ minHeight: "36px", padding: "0 12px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12px", fontWeight: "600", cursor: "pointer", justifySelf: "end" }} className="hv3">
                  Reverse
                </button>
              </div>
            </React.Fragment>
          ))}
          {v.decidedEmpty ? (
            <>
            <p style={{ margin: "0", padding: "24px 0", color: "#8d96a2", fontSize: "13px" }}>
              No decision has been made from this desk yet. Decide something in Open decisions and it is recorded here.
            </p>
            </>
          ) : null}
        </div>
      </section>
    </>
  ) : null;
}
