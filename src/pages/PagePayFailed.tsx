import React from 'react';
import type { View } from '../view';


export default function PagePayFailed({ v }: { v: View }) {
  return v.rt.payFailed ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "620px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fdfbf8", border: "1px solid #e0d6cd", color: "#b4552f", display: "grid", placeItems: "center" }}>
            <svg viewBox="0 0 24 24" width="21" height="21" className="s">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </span>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">The request closed without an answer.</h1>
          <p style={{ margin: "0", maxWidth: "52ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.7" }}>
            Nothing was taken from {v.phoneMasked}. {v.reference} is closed and cannot be reused.
          </p>
        </header>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", gap: "12px" }}>
            <span style={{ fontSize: "9px" }} className="k n">01</span>
            <span style={{ color: "#4c545f", fontSize: "13px", lineHeight: "1.6" }}>
              Check the number is registered for Mobile Money and has {v.amountText} available.
            </span>
          </div>
          <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", gap: "12px" }}>
            <span style={{ fontSize: "9px" }} className="k n">02</span>
            <span style={{ color: "#4c545f", fontSize: "13px", lineHeight: "1.6" }}>
              If the prompt never appeared, try the other wallet or a bank deposit.
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <button onClick={v.goMethod} style={{ minHeight: "50px", padding: "0 18px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv1">
            Try again
            <svg viewBox="0 0 24 24" width="16" height="16" className="s">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button onClick={v.goStatement} style={{ minHeight: "50px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv3">
            See every attempt
          </button>
        </div>
      </section>
    </>
  ) : null;
}
