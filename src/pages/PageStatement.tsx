import React from 'react';
import type { View } from '../view';


export default function PageStatement({ v }: { v: View }) {
  return v.rt.statement ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Account statement · {v.name}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Every charge, every attempt.</h1>
        </header>
        <section style={{ display: "grid", gridTemplateColumns: v.twoCols, gap: v.blockGap } as React.CSSProperties}>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties}>
            <div style={{ padding: "20px 0 22px", borderTop: "1px solid #1b1e2b", borderBottom: "1px solid #eef1f4" }}>
              <span style={{ fontSize: "9px" }} className="k">Running balance</span>
              <strong style={{ display: "block", marginTop: "9px", fontSize: "42px", color: v.balColor } as React.CSSProperties} className="d n">
                {v.balText}
              </strong>
              <small style={{ display: "block", marginTop: "10px", color: "#6b7480", fontSize: "13px" }}>{v.balNote}</small>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "9px" }} className="k">Charges</span>
              <div style={{ borderTop: "1px solid #eef1f4" }}>
                {(v.charges || []).map((c, c_i) => (
                  <React.Fragment key={c_i}>
                    <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "baseline" }}>
                      <span style={{ minWidth: "0", color: c.fg } as React.CSSProperties}>
                        <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>{c.label}</strong>
                        <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{c.meta}</small>
                      </span>
                      <strong style={{ fontSize: "13.5px", fontWeight: "600", color: c.fg } as React.CSSProperties} className="n">{c.amount}</strong>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "9px" }} className="k">Every attempt</span>
              <div style={{ borderTop: "1px solid #eef1f4" }}>
                {(v.attempts || []).map((a, a_i) => (
                  <React.Fragment key={a_i}>
                    <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "center" }}>
                      <span style={{ minWidth: "0" }}>
                        <strong style={{ display: "block", fontSize: "12.5px", fontWeight: "600" }} className="n">{a.ref}</strong>
                        <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{a.meta}</small>
                      </span>
                      <span style={{ textAlign: "right" }}>
                        <strong style={{ display: "block", fontSize: "9px", color: a.color } as React.CSSProperties} className="k">{a.status}</strong>
                        <small style={{ display: "block", marginTop: "5px", color: "#4c545f", fontSize: "11.5px" }} className="n">{a.amount}</small>
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <aside style={{ minWidth: "0", padding: v.cardPad, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", alignSelf: "flex-start", display: "flex", flexDirection: "column", gap: "18px" } as React.CSSProperties}>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              <span style={{ fontSize: "9px" }} className="k">Access</span>
              <strong style={{ fontSize: "15px", fontWeight: "600", color: v.accessTone } as React.CSSProperties}>{v.accessWord}</strong>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", paddingTop: "16px", borderTop: "1px solid #eef1f4" }}>
              <span style={{ fontSize: "9px" }} className="k">Method on file</span>
              <strong style={{ fontSize: "13px", fontWeight: "600" }} className="n">{v.methodOnFile}</strong>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px", borderTop: "1px solid #eef1f4" }}>
              <button onClick={v.goPayments} style={{ minHeight: "46px", border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv2">
                {v.balAction}
              </button>
              <button onClick={v.printPage} style={{ minHeight: "44px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="np hv3">
                <svg viewBox="0 0 24 24" width="15" height="15" className="s">
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <path d="M6 9V3h12v6" />
                  <rect x="6" y="14" width="12" height="8" rx="1" />
                </svg>
                Print statement
              </button>
            </div>
          </aside>
        </section>
      </section>
    </>
  ) : null;
}
