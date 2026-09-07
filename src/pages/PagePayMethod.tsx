import React from 'react';
import type { View } from '../view';


export default function PagePayMethod({ v }: { v: View }) {
  return v.rt.payMethod ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "620px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">2 of 4 · Method</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">How will you send {v.amountText}?</h1>
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button onClick={v.pickMtn} style={{ minHeight: "78px", padding: "15px 17px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", gap: "15px", textAlign: "left", cursor: "pointer" }} className="hv3">
            <span style={{ width: "46px", height: "46px", borderRadius: "3px", background: "#ffcc00", color: "#1b1e2b", display: "grid", placeItems: "center", flex: "0 0 auto", fontSize: "12px", fontWeight: "700", letterSpacing: "0.04em" }}>
              MTN
            </span>
            <span style={{ flex: "1", minWidth: "0" }}>
              <strong style={{ display: "block", fontSize: "14.5px", fontWeight: "600" }}>MTN Mobile Money</strong>
              <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "12px" }}>Approve on your phone · instant</small>
            </span>
            <svg viewBox="0 0 24 24" width="18" height="18" style={{ color: "#b6bec7" }} className="s">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <button onClick={v.pickAirtel} style={{ minHeight: "78px", padding: "15px 17px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", gap: "15px", textAlign: "left", cursor: "pointer" }} className="hv3">
            <span style={{ width: "46px", height: "46px", borderRadius: "3px", background: "#e40000", color: "#fff", display: "grid", placeItems: "center", flex: "0 0 auto", fontSize: "11px", fontWeight: "700", letterSpacing: "0.04em" }}>
              airtel
            </span>
            <span style={{ flex: "1", minWidth: "0" }}>
              <strong style={{ display: "block", fontSize: "14.5px", fontWeight: "600" }}>Airtel Money</strong>
              <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "12px" }}>Approve on your phone · instant</small>
            </span>
            <svg viewBox="0 0 24 24" width="18" height="18" style={{ color: "#b6bec7" }} className="s">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <button onClick={v.goDeposit} style={{ minHeight: "78px", padding: "15px 17px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", gap: "15px", textAlign: "left", cursor: "pointer" }} className="hv3">
            <span style={{ width: "46px", height: "46px", borderRadius: "3px", background: "#f7f9fa", color: "#4c545f", display: "grid", placeItems: "center", flex: "0 0 auto" }}>
              <svg viewBox="0 0 24 24" width="22" height="22" className="s">
                <path d="M3 21h18" />
                <path d="M5 21V10l7-5 7 5v11" />
                <path d="M9 21v-6h6v6" />
              </svg>
            </span>
            <span style={{ flex: "1", minWidth: "0" }}>
              <strong style={{ display: "block", fontSize: "14.5px", fontWeight: "600" }}>Bank deposit</strong>
              <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "12px" }}>Pay at a branch · matched by a person</small>
            </span>
            <svg viewBox="0 0 24 24" width="18" height="18" style={{ color: "#b6bec7" }} className="s">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        <p style={{ margin: "0", color: "#8d96a2", display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "12px", lineHeight: "1.65" }}>
          <svg viewBox="0 0 24 24" width="15" height="15" style={{ marginTop: "2px", flex: "0 0 auto" }} className="s">
            <rect x="3" y="10" width="18" height="12" rx="2" />
            <path d="M7 10V7a5 5 0 0 1 10 0v3" />
            <circle cx="12" cy="16" r="1" />
          </svg>
          Your wallet PIN is entered on your own phone. Deep Focus never sees it.
        </p>
        <button onClick={v.goConfirm} style={{ width: "fit-content", minHeight: "44px", padding: "0", border: "0", background: "transparent", color: "#6b7480", display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "13px", cursor: "pointer" }} className="hv4">
          <svg viewBox="0 0 24 24" width="15" height="15" className="s">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back
        </button>
      </section>
    </>
  ) : null;
}
