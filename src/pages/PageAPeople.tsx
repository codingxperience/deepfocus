import React from 'react';
import type { View } from '../view';


export default function PageAPeople({ v }: { v: View }) {
  return v.rt.aPeople ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Learners and staff</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">People</h1>
        </header>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ fontSize: "9px" }} className="k">Learners</span>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.rosterRows || []).map((l, l_i) => (
              <React.Fragment key={l_i}>
                <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.peopleCols, gap: "14px", alignItems: "center" } as React.CSSProperties}>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{l.name}</strong>
                    <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11px" }}>{l.programme}</small>
                  </span>
                  <span style={{ minWidth: "0" }}>
                    <small style={{ display: "block", color: "#4c545f", fontSize: "12px" }}>{l.semester}</small>
                    <small style={{ display: "block", marginTop: "3px", color: "#b6bec7", fontSize: "10.5px" }}>Last seen {l.seen}</small>
                  </span>
                  <small style={{ color: "#4c545f", fontSize: "12px" }} className="n">{l.streak} weekly</small>
                  <small style={{ fontSize: "9px", color: l.tone, textAlign: "right" } as React.CSSProperties} className="k">{l.access}</small>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </section>
    </>
  ) : null;
}
