import React from 'react';
import type { View } from '../view';


export default function PageReceipt({ v }: { v: View }) {
  return v.rt.receipt ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "620px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2f6b52", color: "#fff", display: "grid", placeItems: "center" }}>
            <svg viewBox="0 0 24 24" width="22" height="22" style={{ strokeWidth: "2.4" }} className="s">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Paid. Your courses are open.</h1>
        </header>
        <div style={{ border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", overflow: "hidden" }}>
          <div style={{ padding: "16px 18px", borderBottom: "1px dashed #d3dae1", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "9px" }}>
              <span style={{ width: "15px", height: "15px", display: "block" }}>
                <svg viewBox="0 0 22 26" style={{ width: "100%", height: "100%" }}>
                  <rect x="0.9" y="0.9" width="20.2" height="24.2" rx="1" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M4.4 8.1h13.2" stroke="currentColor" strokeWidth="1.7" fill="none" />
                  <path d="M4.4 13.6h8.4" stroke="currentColor" strokeWidth="1.7" fill="none" />
                </svg>
              </span>
              <strong style={{ fontSize: "12px", fontWeight: "700" }}>Deep Focus receipt</strong>
            </span>
            <span style={{ fontSize: "8px" }} className="k">Official</span>
          </div>
          <div style={{ padding: "15px 18px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ color: "#6b7480", fontSize: "12.5px" }}>Amount</span>
            <strong style={{ fontSize: "14px", fontWeight: "700" }} className="n">{v.amountText}</strong>
          </div>
          <div style={{ padding: "15px 18px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ color: "#6b7480", fontSize: "12.5px" }}>Paid with</span>
            <strong style={{ fontSize: "12.5px", fontWeight: "600" }} className="n">{v.methodOnFile}</strong>
          </div>
          <div style={{ padding: "15px 18px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ color: "#6b7480", fontSize: "12.5px" }}>Reference</span>
            <strong style={{ fontSize: "12.5px", fontWeight: "600" }} className="n">{v.reference}</strong>
          </div>
          <div style={{ padding: "15px 18px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ color: "#6b7480", fontSize: "12.5px" }}>Received</span>
            <strong style={{ fontSize: "12.5px", fontWeight: "600" }} className="n">{v.paidWhen}</strong>
          </div>
          <div style={{ padding: "15px 18px", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "baseline" }}>
            <span style={{ color: "#6b7480", fontSize: "12.5px" }}>Covers</span>
            <strong style={{ fontSize: "12.5px", fontWeight: "600", textAlign: "right" }}>
              {v.productTitle}
              <br />
              {v.productCourses} courses
            </strong>
          </div>
        </div>
        <p style={{ margin: "0", color: "#8d96a2", fontSize: "12px", lineHeight: "1.65" }}>
          This records a Deep Focus revision payment. It is not a school fees receipt.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <button onClick={v.goDash} style={{ minHeight: "50px", padding: "0 18px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv1">
            Start studying
            <svg viewBox="0 0 24 24" width="16" height="16" className="s">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button onClick={v.printPage} style={{ minHeight: "50px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="np hv3">
            <svg viewBox="0 0 24 24" width="15" height="15" className="s">
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <path d="M6 9V3h12v6" />
              <rect x="6" y="14" width="12" height="8" rx="1" />
            </svg>
            Print receipt
          </button>
        </div>
      </section>
    </>
  ) : null;
}
