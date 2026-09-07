import React from 'react';
import type { View } from '../view';


export default function PageAToday({ v }: { v: View }) {
  return v.rt.aToday ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.today} · academic operations</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.adminHead}</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "60ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>{v.adminHeadNote}</p>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: v.statCols, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
          {(v.adminTiles || []).map((t, t_i) => (
            <React.Fragment key={t_i}>
              <button onClick={t.go} style={{ padding: v.tilePad, border: "0", borderRight: "1px solid #eef1f4", borderBottom: "1px solid #eef1f4", background: "#fff", display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                <span style={{ fontSize: "8px" }} className="k">{t.k}</span>
                <strong style={{ fontSize: "30px", color: t.fg } as React.CSSProperties} className="d n">{t.v}</strong>
                <small style={{ color: "#6b7480", fontSize: "11.5px", lineHeight: "1.55" }}>{t.d}</small>
              </button>
            </React.Fragment>
          ))}
        </div>
        <section style={{ display: "grid", gridTemplateColumns: v.twoCols, gap: v.blockGap } as React.CSSProperties}>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
              <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Waiting on a person</h2>
              <small style={{ fontSize: "9px" }} className="k n">{v.queueCount} open</small>
            </div>
            <div style={{ borderTop: "1px solid #1b1e2b" }}>
              {(v.queueItems || []).map((q, q_i) => (
                <React.Fragment key={q_i}>
                  <button onClick={q.go} style={{ width: "100%", padding: "15px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.sumCols, gap: "8px 14px", alignItems: "baseline", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                    <span style={{ fontSize: "9px" }} className="k n">{q.kind}</span>
                    <span style={{ minWidth: "0" }}>
                      <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{q.who}</strong>
                      <small style={{ display: "block", marginTop: "4px", color: "#6b7480", fontSize: "12px", lineHeight: "1.55" }}>{q.what}</small>
                    </span>
                    <small style={{ fontSize: "9px", color: q.tone, justifySelf: "end" } as React.CSSProperties} className="k">{q.waiting}</small>
                  </button>
                </React.Fragment>
              ))}
              {v.queueEmpty ? (
                <>
                <p style={{ margin: "0", padding: "22px 0", color: "#8d96a2", fontSize: "13px" }}>
                  Nobody is waiting on you. Every decision in the queue has been made.
                </p>
                </>
              ) : null}
            </div>
          </div>
          <aside style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "9px" }} className="k">Since yesterday</span>
            <div style={{ borderTop: "1px solid #eef1f4" }}>
              {(v.auditRows || []).map((a, a_i) => (
                <React.Fragment key={a_i}>
                  <div style={{ padding: "13px 0", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ color: "#14171c", fontSize: "12.5px", lineHeight: "1.6" }}>{a.summary}</span>
                    <small style={{ fontSize: "8px" }} className="k">{a.who} · {a.when}</small>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </aside>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
            <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Money this block</h2>
            <button onClick={v.goMoney} style={{ padding: "0", border: "0", background: "none", color: "#4a5a8a", fontSize: "12px", fontWeight: "600", cursor: "pointer" }} className="np hv7">
              Open the ledger
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: v.statCols, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
            {(v.moneyTiles || []).map((t, t_i) => (
              <React.Fragment key={t_i}>
                <div style={{ padding: v.tilePad, borderRight: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "8px" } as React.CSSProperties}>
                  <span style={{ fontSize: "8px" }} className="k">{t.k}</span>
                  <strong style={{ fontSize: "24px", color: t.fg } as React.CSSProperties} className="d n">{t.v}</strong>
                  <small style={{ color: "#6b7480", fontSize: "11px", lineHeight: "1.55" }}>{t.d}</small>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Where the block stands</h2>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.blockRows || []).map((r, r_i) => (
              <React.Fragment key={r_i}>
                <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.funnelCols, gap: "10px 16px", alignItems: "center" } as React.CSSProperties}>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{r.k}</strong>
                    <small style={{ display: "block", marginTop: "4px", maxWidth: "56ch", color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.6" }}>
                      {r.note}
                    </small>
                  </span>
                  <span style={{ height: "4px", minWidth: "90px", background: "#eef1f4", borderRadius: "99px", overflow: "hidden" }}>
                    <i style={{ display: "block", height: "100%", width: r.pct, background: r.bar } as React.CSSProperties} />
                  </span>
                  <strong style={{ fontSize: "14px", justifySelf: "end" }} className="n">{r.v}</strong>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
        <section style={{ display: "grid", gridTemplateColumns: v.twoCols, gap: v.blockGap } as React.CSSProperties}>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
              <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Publishing across the school</h2>
              <button onClick={v.goPublishing} style={{ padding: "0", border: "0", background: "none", color: "#4a5a8a", fontSize: "12px", fontWeight: "600", cursor: "pointer" }} className="np hv7">
                See every week
              </button>
            </div>
            <div style={{ borderTop: "1px solid #1b1e2b" }}>
              {(v.pubSummary || []).map((p, p_i) => (
                <React.Fragment key={p_i}>
                  <div style={{ padding: "13px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px 14px", alignItems: "baseline" }}>
                    <span style={{ minWidth: "0" }}>
                      <strong style={{ display: "block", fontSize: "13px", fontWeight: "600" }}>{p.title}</strong>
                      <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k">{p.detail}</small>
                    </span>
                    <small style={{ fontSize: "9px", color: p.tone, justifySelf: "end" } as React.CSSProperties} className="k n">{p.state}</small>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <aside style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "9px" }} className="k">Needs a human before Friday</span>
            <div style={{ borderTop: "1px solid #1b1e2b" }}>
              {(v.attentionRows || []).map((a, a_i) => (
                <React.Fragment key={a_i}>
                  <button onClick={a.go} style={{ width: "100%", padding: "12px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "flex", flexDirection: "column", gap: "5px", textAlign: "left", cursor: "pointer" }} className="hv2">
                    <strong style={{ fontSize: "12.5px", fontWeight: "600" }}>{a.who}</strong>
                    <small style={{ color: "#6b7480", fontSize: "11.5px", lineHeight: "1.6" }}>{a.why}</small>
                    <small style={{ fontSize: "7.5px", color: a.tone } as React.CSSProperties} className="k">{a.tag}</small>
                  </button>
                </React.Fragment>
              ))}
            </div>
          </aside>
        </section>
      </section>
    </>
  ) : null;
}
