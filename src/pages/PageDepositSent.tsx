import React from 'react';
import type { View } from '../view';


export default function PageDepositSent({ v }: { v: View }) {
  return v.rt.depositSent ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "620px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fdfbf8", border: "1px solid #e0d6cd", color: "#b4552f", display: "grid", placeItems: "center" }}>
            <svg viewBox="0 0 24 24" width="21" height="21" className="s">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6h4.5" />
            </svg>
          </span>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">With the office. Usually the same working day.</h1>
        </header>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "9px" }} className="k">Slip number</span>
            <strong style={{ fontSize: "13px", fontWeight: "600" }} className="n">{v.slipShown}</strong>
          </div>
          <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "9px" }} className="k">Amount</span>
            <strong style={{ fontSize: "13px", fontWeight: "600" }} className="n">{v.amountText}</strong>
          </div>
          <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "9px" }} className="k">Status</span>
            <strong style={{ fontSize: "13px", fontWeight: "600", color: "#b4552f" }}>Awaiting confirmation</strong>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <button onClick={v.goDash} style={{ minHeight: "50px", padding: "0 18px", border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv2">
            Done
          </button>
          <button onClick={v.goStatement} style={{ minHeight: "50px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv3">
            See my statement
          </button>
        </div>
      </section>
    </>
  ) : null;
}
