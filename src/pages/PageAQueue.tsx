import React from 'react';
import type { View } from '../view';


export default function PageAQueue({ v }: { v: View }) {
  return v.rt.aQueue ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "720px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.today} · Amara Kato</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.queueHead}</h1>
        </header>
        {v.queueAny ? (
          <>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.queueItems || []).map((q, q_i) => (
              <React.Fragment key={q_i}>
                <button onClick={q.go} style={{ width: "100%", padding: "18px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "34px minmax(0,1fr) auto 16px", gap: "14px", alignItems: "center", textAlign: "left", cursor: "pointer" }} className="hv2">
                  <span style={{ fontSize: "9px" }} className="k n">{q.no}</span>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "14.5px", fontWeight: "600" }}>{q.who}</strong>
                    <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{q.kind} · {q.what}</small>
                  </span>
                  <small style={{ fontSize: "9px", color: q.tone, textAlign: "right" } as React.CSSProperties} className="k">{q.waiting}</small>
                  <svg viewBox="0 0 24 24" width="16" height="16" style={{ color: "#b6bec7" }} className="s">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </React.Fragment>
            ))}
          </div>
          <button onClick={v.goCase} style={{ width: "fit-content", minHeight: "52px", padding: "0 20px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "14.5px", fontWeight: "600", cursor: "pointer" }} className="hv1">
            Open the first one
            <svg viewBox="0 0 24 24" width="16" height="16" className="s">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          </>
        ) : null}
        {v.queueEmpty ? (
          <>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "9px" }} className="k">Decided today · {v.decidedCount}</span>
            <div style={{ borderTop: "1px solid #eef1f4" }}>
              {(v.decidedItems || []).map((d, d_i) => (
                <React.Fragment key={d_i}>
                  <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "center" }}>
                    <span style={{ minWidth: "0" }}>
                      <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>{d.who}</strong>
                      <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{d.kind} · {d.what}</small>
                    </span>
                    <small style={{ fontSize: "9px", color: d.tone } as React.CSSProperties} className="k">{d.word}</small>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <button onClick={v.goMoney} style={{ minHeight: "46px", padding: "0 16px", border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv2">
                Money
              </button>
              <button onClick={v.resetQueue} style={{ minHeight: "46px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", color: "#6b7480", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="np hv3">
                Reset the queue
              </button>
            </div>
          </div>
          </>
        ) : null}
      </section>
    </>
  ) : null;
}
