import React from 'react';
import type { View } from '../view';


export default function PageALog({ v }: { v: View }) {
  return v.rt.aLog ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "820px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Signed and unedited</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Log</h1>
        </header>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          {(v.auditRows || []).map((a, a_i) => (
            <React.Fragment key={a_i}>
              <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.rowCols, gap: "14px", alignItems: "baseline" } as React.CSSProperties}>
                <span style={{ fontSize: "9px" }} className="k">{a.action}</span>
                <span style={{ minWidth: "0", fontSize: "13.5px", lineHeight: "1.6" }}>{a.summary}</span>
                <small style={{ color: "#8d96a2", fontSize: "11px", textAlign: "right", whiteSpace: "nowrap" }}>{a.who} · {a.when}</small>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  ) : null;
}
