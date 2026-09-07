import React from 'react';
import type { View } from '../view';


export default function PageINotice({ v }: { v: View }) {
  return v.rt.iNotice ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "640px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.noticeScope}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">What is the one thing they need to hear?</h1>
        </header>
        <label style={{ display: "block" }}>
          <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Message · {v.noticeLeft} characters left</span>
          <textarea value={v.noticeText} onChange={v.setNotice} rows={4} maxLength={180} style={{ width: "100%", padding: "14px 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "15px", lineHeight: "1.65", resize: "vertical", outline: "0" }} className="fc0" />
        </label>
        <p style={{ margin: "0", color: "#8d96a2", fontSize: "12px", lineHeight: "1.65" }}>
          180 characters, on purpose. It arrives once, next to the map it belongs to.
        </p>
        <button onClick={v.sendNotice} style={{ width: "100%", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
          Send it once
          <svg viewBox="0 0 24 24" width="17" height="17" className="s">
            <path d="M14.54 21.69a.5.5 0 0 0 .93-.03l6.5-19a.5.5 0 0 0-.63-.63l-19 6.5a.5.5 0 0 0-.03.93l7.93 3.18a2 2 0 0 1 1.11 1.11z" />
            <path d="m21.85 2.15-10.94 10.94" />
          </svg>
        </button>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ fontSize: "9px" }} className="k">Already sent</span>
          <div style={{ borderTop: "1px solid #eef1f4" }}>
            {(v.sentNotices || []).map((n, n_i) => (
              <React.Fragment key={n_i}>
                <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <strong style={{ fontSize: "13px", fontWeight: "600" }}>{n.title}</strong>
                    <small style={{ fontSize: "8px" }} className="k">{n.when}</small>
                  </span>
                  <p style={{ margin: "0", color: "#4c545f", fontSize: "12.5px", lineHeight: "1.65" }}>{n.body}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </section>
    </>
  ) : null;
}
