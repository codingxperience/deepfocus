import React from 'react';
import type { View } from '../view';


export default function PageHelp({ v }: { v: View }) {
  return v.rt.help ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "640px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Help</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Three things people ask.</h1>
        </header>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          {(v.helpRows || []).map((h, h_i) => (
            <React.Fragment key={h_i}>
              <div style={{ padding: "18px 0", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "8px" }}>
                <strong style={{ fontSize: "14px", fontWeight: "600" }}>{h.q}</strong>
                <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.7" }}>{h.a}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  ) : null;
}
