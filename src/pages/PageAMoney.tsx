import React from 'react';
import type { View } from '../view';


export default function PageAMoney({ v }: { v: View }) {
  return v.rt.aMoney ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Every payment, in shillings</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Money</h1>
        </header>
        <section style={{ display: "grid", gridTemplateColumns: v.tileCols, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
          {(v.moneyTiles || []).map((t, t_i) => (
            <React.Fragment key={t_i}>
              <div style={{ padding: v.tilePad, borderRight: "1px solid #eef1f4", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "9px", minWidth: "0" } as React.CSSProperties}>
                <span style={{ fontSize: "9px" }} className="k">{t.k}</span>
                <strong style={{ fontSize: "28px", color: t.fg } as React.CSSProperties} className="d n">{t.v}</strong>
                <small style={{ color: "#8d96a2", fontSize: "11px" }}>{t.d}</small>
              </div>
            </React.Fragment>
          ))}
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ fontSize: "9px" }} className="k">Ledger</span>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.ledgerRows || []).map((l, l_i) => (
              <React.Fragment key={l_i}>
                <div style={{ padding: "16px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.ledgerCols, gap: "14px", alignItems: "center" } as React.CSSProperties}>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{l.who}</strong>
                    <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11px" }} className="n">{l.ref}</small>
                    <small style={{ display: "block", marginTop: "3px", color: "#b6bec7", fontSize: "10.5px" }}>{l.meta}</small>
                  </span>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "9px", color: l.tone } as React.CSSProperties} className="k">{l.status}</strong>
                    <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "10.5px" }}>{l.by}</small>
                  </span>
                  <strong style={{ fontSize: "13.5px", fontWeight: "600", textAlign: "right" }} className="n">{l.amount}</strong>
                </div>
              </React.Fragment>
            ))}
          </div>
          <button onClick={v.goQueue} style={{ width: "fit-content", minHeight: "46px", padding: "0 16px", border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv2">
            Open the queue
          </button>
        </section>
      </section>
    </>
  ) : null;
}
