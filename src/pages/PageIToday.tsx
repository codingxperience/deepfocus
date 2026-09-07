import React from 'react';
import type { View } from '../view';


export default function PageIToday({ v }: { v: View }) {
  return v.rt.iToday ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.today} · Grace Nalubega</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.instHead}</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>{v.instHeadNote}</p>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: v.statCols, border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
          {(v.instTiles || []).map((t, t_i) => (
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
              <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Oldest work waiting</h2>
              <button onClick={v.goMarking} style={{ padding: "0", border: "0", background: "none", color: "#4a5a8a", fontSize: "12px", fontWeight: "600", cursor: "pointer" }} className="np hv7">
                Open marking
              </button>
            </div>
            <div style={{ borderTop: "1px solid #1b1e2b" }}>
              {(v.instMarkRows || []).map((m, m_i) => (
                <React.Fragment key={m_i}>
                  <button onClick={m.go} style={{ width: "100%", padding: "14px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.sumCols, gap: "8px 14px", alignItems: "baseline", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                    <span style={{ fontSize: "9px", color: m.ageTone } as React.CSSProperties} className="k n">{m.age}</span>
                    <span style={{ minWidth: "0" }}>
                      <strong style={{ display: "block", fontSize: "13px", fontWeight: "600" }}>{m.who}</strong>
                      <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k">{m.what}</small>
                    </span>
                    <small style={{ fontSize: "8px", justifySelf: "end" }} className="k n">{m.pts}</small>
                  </button>
                </React.Fragment>
              ))}
              {v.instMarkEmpty ? (
                <>
                <p style={{ margin: "0", padding: "22px 0", color: "#8d96a2", fontSize: "13px" }}>
                  Nothing is waiting. Every submission has been returned with a comment.
                </p>
                </>
              ) : null}
            </div>
          </div>
          <aside style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "9px" }} className="k">Thursday, 19:00</span>
            <div style={{ padding: "16px", borderLeft: "2px solid #1b1e2b", background: "#fff", display: "flex", flexDirection: "column", gap: "9px" }}>
              <strong style={{ fontSize: "13.5px", fontWeight: "700" }}>{v.gatherLead}</strong>
              <small style={{ color: "#6b7480", fontSize: "12px", lineHeight: "1.65" }}>{v.instGatherNote}</small>
              <button onClick={v.goGathering} style={{ marginTop: "4px", minHeight: "40px", padding: "0 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                Open the agenda
              </button>
            </div>
            <span style={{ fontSize: "9px" }} className="k">Turnaround</span>
            <div style={{ borderTop: "1px solid #eef1f4" }}>
              {(v.turnRows || []).map((t, t_i) => (
                <React.Fragment key={t_i}>
                  <div style={{ padding: "12px 0", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <small style={{ minWidth: "0", color: "#4c545f", fontSize: "12px", lineHeight: "1.5" }}>{t.k}</small>
                    <strong style={{ fontSize: "13px", color: t.fg, flex: "0 0 auto" } as React.CSSProperties} className="n">{t.v}</strong>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </aside>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
            <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Your weeks, and what learners can see</h2>
            <button onClick={v.goPublish} style={{ padding: "0", border: "0", background: "none", color: "#4a5a8a", fontSize: "12px", fontWeight: "600", cursor: "pointer" }} className="np hv7">
              Publishing
            </button>
          </div>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.instPubRows || []).map((p, p_i) => (
              <React.Fragment key={p_i}>
                <button onClick={p.go} style={{ width: "100%", padding: "14px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px 14px", alignItems: "baseline", textAlign: "left", cursor: "pointer" }} className="hv2">
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13px", fontWeight: "600" }}>{p.title}</strong>
                    <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k">{p.detail}</small>
                  </span>
                  <small style={{ fontSize: "9px", color: p.tone, justifySelf: "end" } as React.CSSProperties} className="k n">{p.state}</small>
                </button>
              </React.Fragment>
            ))}
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Learners you should write to tonight</h2>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.instRiskRows || []).map((r, r_i) => (
              <React.Fragment key={r_i}>
                <button onClick={r.go} style={{ width: "100%", padding: "13px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.instRiskCols, gap: "10px 14px", alignItems: "center", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                  <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#eef1f4", color: "#4c545f", display: "grid", placeItems: "center", fontSize: "10px", fontWeight: "700" }}>
                    {r.initials}
                  </span>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13px", fontWeight: "600" }}>{r.name}</strong>
                    <small style={{ display: "block", marginTop: "3px", color: "#8d96a2", fontSize: "11.5px" }}>{r.why}</small>
                  </span>
                  <small style={{ fontSize: "8px", color: r.tone, justifySelf: "end" } as React.CSSProperties} className="k n">{r.seen}</small>
                </button>
              </React.Fragment>
            ))}
          </div>
        </section>
        {v.instBlocked ? (
          <>
          <div style={{ borderTop: "1px solid #1b1e2b" }}>
            {(v.instRows || []).map((r, r_i) => (
              <React.Fragment key={r_i}>
                <button onClick={r.go} style={{ width: "100%", padding: "18px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto 16px", gap: "14px", alignItems: "center", textAlign: "left", cursor: "pointer" }} className="hv2">
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "14.5px", fontWeight: "600" }}>{r.title}</strong>
                    <small style={{ display: "block", marginTop: "4px", fontSize: "9px" }} className="k n">{r.code} · {r.week}</small>
                    <small style={{ display: "block", marginTop: "5px", color: "#b4552f", fontSize: "11.5px" }}>{r.learners}</small>
                  </span>
                  <small style={{ fontSize: "9px", color: r.tone } as React.CSSProperties} className="k">{r.status}</small>
                  <svg viewBox="0 0 24 24" width="16" height="16" style={{ color: "#b6bec7" }} className="s">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </React.Fragment>
            ))}
          </div>
          </>
        ) : null}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <button onClick={v.goSpaces} style={{ minHeight: "50px", padding: "0 18px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }} className="hv1">
            All six spaces
            <svg viewBox="0 0 24 24" width="16" height="16" className="s">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button onClick={v.goSignals} style={{ minHeight: "50px", padding: "0 16px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv3">
            Signals
          </button>
        </div>
        <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span style={{ fontSize: "9px" }} className="k">What you have sent</span>
          <div style={{ borderTop: "1px solid #eef1f4" }}>
            {(v.sentNotices || []).map((n, n_i) => (
              <React.Fragment key={n_i}>
                <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ minWidth: "0" }}>
                    <strong style={{ display: "block", fontSize: "13px", fontWeight: "500" }}>{n.title}</strong>
                    <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{n.scope}</small>
                  </span>
                  <small style={{ fontSize: "8px" }} className="k">{n.when}</small>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </section>
    </>
  ) : null;
}
