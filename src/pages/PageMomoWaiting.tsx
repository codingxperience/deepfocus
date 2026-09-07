import React from 'react';
import type { View } from '../view';


export default function PageMomoWaiting({ v }: { v: View }) {
  return v.rt.momoWaiting ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "620px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">4 of 4 · Approve</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Look at your phone. Enter your PIN there.</h1>
        </header>
        <div style={{ padding: "24px 22px", background: "#1b1e2b", borderRadius: "3px", color: "#fff" }} aria-live="polite">
          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.55)" }} className="k">Request expires in</span>
          <strong style={{ display: "block", marginTop: "9px", fontSize: "52px", color: "#fff" }} className="d n">{v.countdown}</strong>
          <div style={{ marginTop: "18px", height: "2px", background: "rgba(255,255,255,0.16)" }}>
            <i style={{ display: "block", height: "100%", background: "#fff", width: v.countdownPct, transition: "width 1s linear" } as React.CSSProperties} />
          </div>
          <p style={{ margin: "18px 0 0", color: "rgba(255,255,255,0.68)", fontSize: "12.5px", lineHeight: "1.65" }}>
            A prompt from {v.walletName} is on its way to {v.phoneMasked}.
          </p>
        </div>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "9px" }} className="k">Reference</span>
            <strong style={{ fontSize: "12.5px", fontWeight: "600" }} className="n">{v.reference}</strong>
          </div>
          <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "9px" }} className="k">Amount</span>
            <strong style={{ fontSize: "12.5px", fontWeight: "600" }} className="n">{v.amountText}</strong>
          </div>
        </div>
        <section style={{ display: "flex", flexDirection: "column", gap: "13px" }} aria-live="polite">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "9px" }} className="k">Gateway messages</span>
            <small style={{ fontSize: "9px", color: v.feedTone } as React.CSSProperties} className="k n">{v.feedStatus}</small>
          </div>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.walletFeed || []).map((e, e_i) => (
              <React.Fragment key={e_i}>
                <div style={{ padding: "13px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "22px minmax(0,1fr) auto", gap: "12px", alignItems: "start" }}>
                  <span style={{ marginTop: "2px", display: "grid", placeItems: "center" }}>
                    <span style={{ display: e.showTick, width: "17px", height: "17px", borderRadius: "50%", background: e.dotBg, color: "#fff", placeItems: "center" } as React.CSSProperties}>
                      <svg viewBox="0 0 24 24" width="10" height="10" style={{ strokeWidth: "3.4" }} className="s">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <i style={{ display: e.showSpin, width: "15px", height: "15px", border: "1.6px solid #e4e8ec", borderTopColor: "#1b1e2b", borderRadius: "50%", animation: "sp 720ms linear infinite" } as React.CSSProperties} />
                  </span>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13px", fontWeight: e.fw, color: e.fg, lineHeight: "1.5" } as React.CSSProperties}>
                      {e.text}
                    </strong>
                    <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.6" }}>{e.meta}</small>
                  </span>
                  <small style={{ fontSize: "9px" }} className="k n">{e.at}</small>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
        <p style={{ margin: "0", color: "#8d96a2", fontSize: "12px", lineHeight: "1.65" }}>
          You can close Deep Focus. When the wallet confirms, your access opens by itself.
        </p>
      </section>
    </>
  ) : null;
}
