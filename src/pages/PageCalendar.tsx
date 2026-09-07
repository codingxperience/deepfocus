import React from 'react';
import type { View } from '../view';


export default function PageCalendar({ v }: { v: View }) {
  return v.rt.calendar ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Every course you are registered for</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.calMonthLabel}</h1>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: v.calCols, gap: v.blockGap, alignItems: "start" } as React.CSSProperties}>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0,1fr))", gap: "4px" }}>
              {(v.calDayHeads || []).map((h, h_i) => (
                <React.Fragment key={h_i}>
                  <span style={{ fontSize: "8px", textAlign: "center", paddingBottom: "4px" }} className="k">{h.d}</span>
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0,1fr))", gap: "4px" }}>
              {(v.calCells || []).map((c, c_i) => (
                <React.Fragment key={c_i}>
                  <button onClick={c.go} style={{ minHeight: "74px", padding: "7px 6px", border: `1px solid ${c.bd}`, borderRadius: "2px", background: c.bg, color: c.fg, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "5px", textAlign: "left", cursor: c.cursor } as React.CSSProperties} className="hv3">
                    <span style={{ display: "flex", alignItems: "baseline", gap: "4px", fontSize: "12px", fontWeight: "600", color: c.fg } as React.CSSProperties} className="n">
                      {c.no}
                      <small style={{ fontSize: "7px", color: c.fg } as React.CSSProperties} className="k">{c.month}</small>
                    </span>
                    <span style={{ display: "flex", gap: "3px" }}>
                      {(c.dots || []).map((d, d_i) => (
                        <React.Fragment key={d_i}>
                          <i style={{ width: "5px", height: "5px", borderRadius: "50%", background: d.bg, display: "block" } as React.CSSProperties} />
                        </React.Fragment>
                      ))}
                    </span>
                    <small style={{ fontSize: "9px", lineHeight: "1.3", color: c.fg, overflow: "hidden", display: "block", maxHeight: "24px" } as React.CSSProperties}>
                      {c.label}
                    </small>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <p style={{ margin: "6px 0 0", color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.7" }}>
              Every dot is one piece of graded work. The dark square is today. Nothing is added here by Deep Focus without a date your instructor set.
            </p>
          </div>
          <aside style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "9px" }} className="k">What is next</span>
              <div style={{ borderTop: "1px solid #1b1e2b" }}>
                {(v.calRows || []).map((r, r_i) => (
                  <React.Fragment key={r_i}>
                    <button onClick={r.go} style={{ width: "100%", padding: "12px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "62px minmax(0,1fr)", gap: "11px", alignItems: "start", textAlign: "left", cursor: "pointer" }} className="hv2">
                      <span style={{ minWidth: "0" }}>
                        <strong style={{ display: "block", fontSize: "9px", color: "#14171c" }} className="k n">{r.date}</strong>
                        <small style={{ display: "block", marginTop: "3px", fontSize: "7px" }} className="k">{r.day}</small>
                      </span>
                      <span style={{ minWidth: "0" }}>
                        <strong style={{ display: "block", fontSize: "12.5px", fontWeight: "500", lineHeight: "1.45", color: "#4a5a8a" }}>
                          {r.title}
                        </strong>
                        <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k n">{r.code} · {r.meta}</small>
                      </span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <button onClick={v.goPlanner} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="np hv3">
              Your study rhythm
            </button>
          </aside>
        </div>
      </section>
    </>
  ) : null;
}
