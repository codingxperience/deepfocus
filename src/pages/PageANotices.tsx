import React from 'react';
import type { View } from '../view';


export default function PageANotices({ v }: { v: View }) {
  return v.rt.aNotices ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "680px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Everyone, or one programme</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Announce something</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "58ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            This reaches phones. Send it when a date, a fee or an access rule changes — not to encourage anybody.
          </p>
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label style={{ display: "block" }}>
            <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Who receives it</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {(v.noticeAudience || []).map((a, a_i) => (
                <React.Fragment key={a_i}>
                  <button onClick={a.pick} style={{ minHeight: "42px", padding: "0 14px", border: `1px solid ${a.bd}`, borderRadius: "99px", background: a.bg, color: a.fg, fontSize: "12.5px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                    {a.label}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </label>
          <label style={{ display: "block" }}>
            <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Title</span>
            <input value={v.aNoticeTitle} onChange={v.setANoticeTitle} placeholder="Fees for Block 6 close on 12 October" style={{ width: "100%", height: "50px", padding: "0 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "15px", outline: "0" }} className="fc9" />
          </label>
          <label style={{ display: "block" }}>
            <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Message · {v.aNoticeLeft} characters left</span>
            <textarea value={v.aNoticeBody} onChange={v.setANoticeBody} rows={4} maxLength={220} placeholder="What changed, the date it changes, and what the learner must do." style={{ width: "100%", padding: "14px 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "15px", lineHeight: "1.65", resize: "vertical", outline: "0" }} className="fc9" />
          </label>
          <div style={{ padding: "15px 16px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontSize: "8px" }} className="k">It will be delivered as</span>
            {(v.noticeDelivery || []).map((d, d_i) => (
              <React.Fragment key={d_i}>
                <span style={{ display: "grid", gridTemplateColumns: "84px minmax(0,1fr)", gap: "12px", alignItems: "baseline" }}>
                  <small style={{ fontSize: "8px" }} className="k">{d.k}</small>
                  <small style={{ color: "#4c545f", fontSize: "12px", lineHeight: "1.6" }}>{d.v}</small>
                </span>
              </React.Fragment>
            ))}
          </div>
          <button onClick={v.sendANotice} style={{ minHeight: "52px", padding: "0 18px", border: "0", borderRadius: "3px", background: v.aNoticeBg, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "14.5px", fontWeight: "600", cursor: v.aNoticeCursor } as React.CSSProperties}>
            Send to {v.aNoticeCount}
            <svg viewBox="0 0 24 24" width="16" height="16" className="s">
              <path d="M14.54 21.69a.5.5 0 0 0 .93-.03l6.5-19a.5.5 0 0 0-.63-.63l-19 6.5a.5.5 0 0 0-.03.93l7.93 3.18a2 2 0 0 1 1.11 1.11z" />
            </svg>
          </button>
        </div>
        <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ fontSize: "9px" }} className="k">Already announced</span>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.globalRows || []).map((g, g_i) => (
              <React.Fragment key={g_i}>
                <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "7px" }}>
                  <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 14px" }}>
                    <strong style={{ fontSize: "13.5px", fontWeight: "600" }}>{g.title}</strong>
                    <small style={{ fontSize: "8px" }} className="k">{g.when}</small>
                  </span>
                  <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "12.5px", lineHeight: "1.7" }}>{g.body}</p>
                  <small style={{ fontSize: "8px" }} className="k">{g.author}</small>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </section>
    </>
  ) : null;
}
