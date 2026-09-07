import React from 'react';
import type { View } from '../view';


export default function PagePayConfirm({ v }: { v: View }) {
  return v.rt.payConfirm ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap, maxWidth: "620px" } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">1 of 4 · Confirm</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Is this the semester you are paying for?</h1>
        </header>
        <div style={{ border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" }}>
          <div style={{ padding: "18px 18px 17px", borderBottom: "1px solid #eef1f4" }}>
            <span style={{ fontSize: "9px" }} className="k">Semester</span>
            <strong style={{ display: "block", marginTop: "7px", fontSize: "15px", fontWeight: "600" }}>{v.productTitle}</strong>
            <small style={{ display: "block", marginTop: "5px", color: "#6b7480", fontSize: "12.5px" }}>{v.productTiming}</small>
          </div>
          {(v.payRows || []).map((r, r_i) => (
            <React.Fragment key={r_i}>
              <div style={{ padding: "14px 18px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ color: "#4c545f", fontSize: "13px" }}>{r.title}</span>
                <small style={{ fontSize: "9px" }} className="k n">{r.code}</small>
              </div>
            </React.Fragment>
          ))}
          <div style={{ padding: "18px", background: "#f7f9fa", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "9px" }} className="k">Total, one payment</span>
            <strong style={{ fontSize: "20px", fontWeight: "700" }} className="n">{v.amountText}</strong>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button onClick={v.goMethod} style={{ width: "100%", minHeight: "54px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }} className="hv1">
            Yes, this is right
            <svg viewBox="0 0 24 24" width="17" height="17" className="s">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button onClick={v.goCourses} style={{ minHeight: "44px", border: "0", background: "transparent", color: "#6b7480", fontSize: "13px", cursor: "pointer" }} className="hv4">
            No — change my courses
          </button>
        </div>
      </section>
    </>
  ) : null;
}
