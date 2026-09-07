import React from 'react';
import type { View } from '../view';


export default function PageIMap({ v }: { v: View }) {
  return v.rt.iMap ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "640px" } as React.CSSProperties} className="f">
        <button onClick={v.goSpaces} style={{ width: "fit-content", padding: "0", border: "0", background: "transparent", color: "#8d96a2", display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12px", cursor: "pointer" }} className="np hv4">
          <svg viewBox="0 0 24 24" width="15" height="15" className="s">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Course spaces
        </button>
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.mapSpace} · {v.mapCode} · {v.mapWeek}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Is this week ready for {v.mapLearners} people?</h1>
        </header>
        <label style={{ display: "block" }}>
          <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Map title</span>
          <input value={v.mapTitleValue} onChange={v.setMapTitle} style={{ width: "100%", height: "54px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "15px", outline: "0" }} className="fc0" />
        </label>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          {(v.checkRows || []).map((c, c_i) => (
            <React.Fragment key={c_i}>
              <button onClick={c.toggle} style={{ width: "100%", minHeight: "58px", padding: "15px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "24px minmax(0,1fr)", gap: "13px", alignItems: "center", textAlign: "left", cursor: "pointer" }} className="hv2">
                <span style={{ width: "18px", height: "18px", border: `1px solid ${c.mb}`, background: c.mf, color: "#fff", display: "grid", placeItems: "center" } as React.CSSProperties}>
                  <svg viewBox="0 0 24 24" width="12" height="12" style={{ strokeWidth: "3", opacity: c.dot } as React.CSSProperties} className="s">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span style={{ minWidth: "0", fontSize: "13.5px", fontWeight: "500" }}>{c.t}</span>
              </button>
            </React.Fragment>
          ))}
        </div>
        <p style={{ margin: "0", color: "#8d96a2", fontSize: "12px", lineHeight: "1.65" }}>{v.publishNote}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button onClick={v.publish} style={{ width: "100%", minHeight: "54px", border: "0", borderRadius: "3px", background: v.publishBg, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: v.publishCursor } as React.CSSProperties}>
            {v.publishLabel}
            <svg viewBox="0 0 24 24" width="17" height="17" className="s">
              <path d="M14.54 21.69a.5.5 0 0 0 .93-.03l6.5-19a.5.5 0 0 0-.63-.63l-19 6.5a.5.5 0 0 0-.03.93l7.93 3.18a2 2 0 0 1 1.11 1.11z" />
              <path d="m21.85 2.15-10.94 10.94" />
            </svg>
          </button>
          <button onClick={v.goNotice} style={{ minHeight: "44px", border: "0", background: "transparent", color: "#6b7480", fontSize: "13px", cursor: "pointer" }} className="hv4">
            Say something with it
          </button>
        </div>
      </section>
    </>
  ) : null;
}
