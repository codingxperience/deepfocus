import React from 'react';
import type { View } from '../view';


export default function PageCourses({ v }: { v: View }) {
  return v.rt.courses ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.credential} · {v.entryLabel}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.courseCount} registered courses</h1>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: v.courseCols, gap: "14px" } as React.CSSProperties}>
          {(v.courses || []).map((c, c_i) => (
            <React.Fragment key={c_i}>
              <button onClick={c.go} style={{ padding: "0", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden", display: "flex", flexDirection: "column", textAlign: "left", cursor: "pointer" }} className="hv3">
                <span style={{ height: "104px", background: c.tint, backgroundImage: `url(${c.cover})`, backgroundSize: "cover", backgroundPosition: "center", display: "grid", placeItems: "center", borderBottom: "1px solid #eef1f4" } as React.CSSProperties}>
                  <span style={{ display: c.plate, fontSize: "22px", color: "#8d96a2" } as React.CSSProperties} className="d n">{c.code}</span>
                </span>
                <span style={{ padding: "15px 16px 17px", display: "flex", flexDirection: "column", gap: "8px", flex: "1", minWidth: "0" }}>
                  <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
                    <small style={{ fontSize: "9px" }} className="k n">{c.code}</small>
                    <small style={{ fontSize: "9px", color: c.stateColor } as React.CSSProperties} className="k">{c.stateWord}</small>
                  </span>
                  <strong style={{ fontSize: "14.5px", fontWeight: "600", lineHeight: "1.35" }}>{c.title}</strong>
                  <span style={{ marginTop: "5px", display: "flex", alignItems: "center", gap: "9px" }}>
                    <span style={{ height: "3px", flex: "1", background: "#eef1f4", borderRadius: "99px", overflow: "hidden" }}>
                      <i style={{ display: "block", height: "100%", width: c.pct, background: "#1b1e2b" } as React.CSSProperties} />
                    </span>
                    <small style={{ fontSize: "9px" }} className="k n">{c.pct}</small>
                  </span>
                </span>
              </button>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  ) : null;
}
