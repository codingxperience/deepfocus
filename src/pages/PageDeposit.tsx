import React from 'react';
import type { View } from '../view';


export default function PageDeposit({ v }: { v: View }) {
  return v.rt.deposit ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "620px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Bank deposit</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Deposit, then give us the slip number.</h1>
        </header>
        <div style={{ border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" }}>
          <div style={{ padding: "16px 18px", borderBottom: "1px solid #eef1f4" }}>
            <span style={{ fontSize: "9px" }} className="k">Pay to</span>
            <strong style={{ display: "block", marginTop: "7px", fontSize: "15px", fontWeight: "600" }}>Deep Focus Revision Ltd</strong>
          </div>
          <div style={{ padding: "15px 18px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ color: "#6b7480", fontSize: "12.5px" }}>Account</span>
            <strong style={{ fontSize: "13.5px", fontWeight: "600" }} className="n">0100 4451 2287</strong>
          </div>
          <div style={{ padding: "15px 18px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ color: "#6b7480", fontSize: "12.5px" }}>Amount</span>
            <strong style={{ fontSize: "13.5px", fontWeight: "600" }} className="n">{v.amountText}</strong>
          </div>
          <div style={{ padding: "15px 18px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ color: "#6b7480", fontSize: "12.5px" }}>Write on the slip</span>
            <strong style={{ fontSize: "13.5px", fontWeight: "600" }} className="n">{v.slipRef}</strong>
          </div>
        </div>
        <label style={{ display: "block" }}>
          <span style={{ display: "block", marginBottom: "9px", fontSize: "9px" }} className="k">Slip or transaction number</span>
          <input value={v.slip} onChange={v.setSlip} placeholder="e.g. 88213047" style={{ width: "100%", height: "56px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "17px", outline: "0" }} className="n fc0" />
        </label>
        <p style={{ margin: "0", color: "#8d96a2", fontSize: "12px", lineHeight: "1.65" }}>
          A person checks this against the bank statement, so it is not instant.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button onClick={v.sendSlip} style={{ width: "100%", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
            Submit for confirmation
            <svg viewBox="0 0 24 24" width="17" height="17" className="s">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button onClick={v.goMethod} style={{ minHeight: "44px", border: "0", background: "transparent", color: "#6b7480", fontSize: "13px", cursor: "pointer" }} className="hv4">
            Pay by Mobile Money instead
          </button>
        </div>
      </section>
    </>
  ) : null;
}
