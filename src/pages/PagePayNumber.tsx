import React from 'react';
import type { View } from '../view';


export default function PagePayNumber({ v }: { v: View }) {
  return v.rt.payNumber ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "620px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">3 of 4 · Number</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Which {v.walletName} number should we ask?</h1>
        </header>
        <label style={{ display: "block" }}>
          <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Mobile money number</span>
          <input value={v.phone} onChange={v.setPhone} inputMode="numeric" autoComplete="tel" placeholder="077 000 0000" style={{ width: "100%", height: "62px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "23px", outline: "0" }} className="n fc0" />
        </label>
        {v.phoneError ? (
          <>
          <p style={{ margin: "0", color: "#a03a2a", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
            <svg viewBox="0 0 24 24" width="15" height="15" className="s">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            Enter a valid Mobile Money number.
          </p>
          </>
        ) : null}
        <div style={{ padding: "18px", background: "#f7f9fa", borderRadius: "3px" }}>
          <span style={{ fontSize: "9px" }} className="k">You are about to be charged</span>
          <strong style={{ display: "block", marginTop: "8px", fontSize: "30px" }} className="d n">{v.amountText}</strong>
          <small style={{ display: "block", marginTop: "7px", color: "#6b7480", fontSize: "12.5px" }}>{v.walletName} · one payment, nothing added</small>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button onClick={v.sendRequest} style={{ width: "100%", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
            Send the request
            <svg viewBox="0 0 24 24" width="17" height="17" className="s">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button onClick={v.goMethod} style={{ minHeight: "44px", border: "0", background: "transparent", color: "#6b7480", fontSize: "13px", cursor: "pointer" }} className="hv4">
            Use a different wallet
          </button>
        </div>
      </section>
    </>
  ) : null;
}
