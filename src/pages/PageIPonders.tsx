import React from 'react';
import type { View } from '../view';


export default function PageIPonders({ v }: { v: View }) {
  return v.rt.iPonders ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Private · never shown to the class</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Ponders</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            This is where learners tell you what they have not understood, at no cost to their mark. Read them all before Thursday and answer the pattern at the gathering without naming anybody.
          </p>
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {(v.ponderRows || []).map((p, p_i) => (
            <React.Fragment key={p_i}>
              <article style={{ padding: "18px", border: `1px solid ${p.bd}`, borderRadius: "3px", background: "#fff", display: "grid", gridTemplateColumns: v.ponderCols, gap: "14px", alignItems: "start" } as React.CSSProperties}>
                <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#eef1f4", color: "#4c545f", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                  {p.initials}
                </span>
                <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "9px" }}>
                  <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "6px 14px" }}>
                    <strong style={{ fontSize: "13.5px", fontWeight: "700" }}>{p.name}</strong>
                    <small style={{ fontSize: "8px" }} className="k">{p.meta}</small>
                  </span>
                  <p style={{ margin: "0", maxWidth: "66ch", color: "#14171c", fontSize: "13.5px", lineHeight: "1.8" }}>{p.body}</p>
                  <span style={{ paddingTop: "11px", borderTop: "1px solid #eef1f4", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "9px 14px" }}>
                    <button onClick={p.mark} style={{ minHeight: "38px", padding: "0 12px", border: `1px solid ${p.btnBd}`, borderRadius: "3px", background: p.btnBg, color: p.btnFg, fontSize: "12px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties}>
                      {p.word}
                    </button>
                    <button onClick={p.agenda} style={{ minHeight: "38px", padding: "0 12px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                      {p.agendaWord}
                    </button>
                    <small style={{ fontSize: "8px" }} className="k">{p.pts}</small>
                  </span>
                </span>
              </article>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  ) : null;
}
