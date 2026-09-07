import React from 'react';
import type { View } from '../view';


export default function PageACase({ v }: { v: View }) {
  return v.rt.aCase ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <button onClick={v.goQueue} style={{ width: "fit-content", padding: "0", border: "0", background: "transparent", color: "#8d96a2", display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12px", cursor: "pointer" }} className="np hv4">
          <svg viewBox="0 0 24 24" width="15" height="15" className="s">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Queue
        </button>
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.caseKind} · {v.casePos}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.caseQuestion}</h1>
        </header>
        <section style={{ display: "grid", gridTemplateColumns: v.caseCols, gap: v.blockGap } as React.CSSProperties}>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ borderTop: "1px solid #1b1e2b" }}>
              {(v.caseRows || []).map((r, r_i) => (
                <React.Fragment key={r_i}>
                  <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.sumCols, gap: "14px", alignItems: "baseline" } as React.CSSProperties}>
                    <span style={{ fontSize: "9px" }} className="k">{r.k}</span>
                    <span style={{ minWidth: "0", fontSize: "13.5px", fontWeight: "500" }} className="n">{r.v}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <button onClick={v.decideYes} style={{ minHeight: "52px", padding: "0 20px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {v.caseYes}
              </button>
              <button onClick={v.decideNo} style={{ minHeight: "52px", padding: "0 18px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                {v.caseNo}
              </button>
              <button onClick={v.skipCase} style={{ minHeight: "52px", padding: "0 14px", border: "0", background: "transparent", color: "#8d96a2", fontSize: "12.5px", cursor: "pointer" }} className="hv4">
                Not now
              </button>
            </div>
          </div>
          <aside style={{ minWidth: "0", padding: v.cardPad, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", alignSelf: "flex-start" } as React.CSSProperties}>
            <span style={{ fontSize: "9px" }} className="k">{v.caseEvidenceLabel}</span>
            <p style={{ margin: "14px 0 0", color: "#4c545f", fontSize: "13px", lineHeight: "1.75" }}>{v.caseEvidence}</p>
            <p style={{ margin: "16px 0 0", paddingTop: "14px", borderTop: "1px solid #eef1f4", color: "#8d96a2", fontSize: "11px", lineHeight: "1.6" }}>
              Every decision is signed and appears in the log.
            </p>
          </aside>
        </section>
      </section>
    </>
  ) : null;
}
