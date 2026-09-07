import React from 'react';
import type { View } from '../view';


export default function PageACourses({ v }: { v: View }) {
  return v.rt.aCourses ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Certificate in Nursing · Year 2 · Semester 1</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Course operations</h1>
        </header>
        <section style={{ display: "grid", gridTemplateColumns: v.tileCols, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
          {(v.opsTiles || []).map((t, t_i) => (
            <React.Fragment key={t_i}>
              <div style={{ padding: v.tilePad, borderRight: "1px solid #eef1f4", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "9px", minWidth: "0" } as React.CSSProperties}>
                <span style={{ fontSize: "9px" }} className="k">{t.k}</span>
                <strong style={{ fontSize: "28px", color: t.fg } as React.CSSProperties} className="d n">{t.v}</strong>
                <small style={{ color: "#8d96a2", fontSize: "11px" }}>{t.d}</small>
              </div>
            </React.Fragment>
          ))}
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ fontSize: "9px" }} className="k">Six course spaces</span>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.opsRows || []).map((o, o_i) => (
              <React.Fragment key={o_i}>
                <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.spaceCols, gap: "14px", alignItems: "center" } as React.CSSProperties}>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{o.title}</strong>
                    <small style={{ display: "block", marginTop: "4px", fontSize: "9px" }} className="k n">{o.code} · {o.week}</small>
                  </span>
                  <span style={{ minWidth: "0" }}>
                    <small style={{ display: "block", color: "#4c545f", fontSize: "12px" }}>{o.owner}</small>
                    <small style={{ display: "block", marginTop: "3px", color: "#b6bec7", fontSize: "10.5px" }}>{o.edited}</small>
                  </span>
                  <span style={{ minWidth: "0" }}>
                    <small style={{ display: "block", color: "#4c545f", fontSize: "12px" }} className="n">{o.learners}</small>
                    <small style={{ display: "block", marginTop: "3px", color: "#8d96a2", fontSize: "10.5px" }} className="n">
                      {o.completion} through
                    </small>
                  </span>
                  <small style={{ fontSize: "9px", color: o.tone, textAlign: "right" } as React.CSSProperties} className="k">{o.status}</small>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </section>
    </>
  ) : null;
}
