import React from 'react';
import type { View } from '../view';


export default function PageAStaff({ v }: { v: View }) {
  return v.rt.aStaff ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Who may do what, and to whom</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Staff and permissions</h1>
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {(v.staffRows || []).map((t, t_i) => (
            <React.Fragment key={t_i}>
              <article style={{ padding: "20px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", flexDirection: "column", gap: "15px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "14px" }}>
                  <span style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "13px" }}>
                    <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#1b1e2b", color: "#fff", display: "grid", placeItems: "center", fontSize: "13px", fontWeight: "700", flex: "0 0 auto" }}>
                      {t.initials}
                    </span>
                    <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "14.5px", fontWeight: "700" }}>{t.name}</strong>
                      <small style={{ fontSize: "8px" }} className="k">{t.role} · {t.desk}</small>
                    </span>
                  </span>
                  <span style={{ display: "flex", gap: "18px" }}>
                    <span>
                      <small style={{ display: "block", fontSize: "8px" }} className="k">Spaces</small>
                      <strong style={{ fontSize: "14px" }} className="n">{t.spaces}</strong>
                    </span>
                    <span>
                      <small style={{ display: "block", fontSize: "8px" }} className="k">Learners</small>
                      <strong style={{ fontSize: "14px" }} className="n">{t.learners}</strong>
                    </span>
                    <span>
                      <small style={{ display: "block", fontSize: "8px" }} className="k">Unmarked</small>
                      <strong style={{ fontSize: "14px", color: t.loadFg } as React.CSSProperties} className="n">{t.load}</strong>
                    </span>
                  </span>
                </div>
                <div style={{ paddingTop: "13px", borderTop: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.recCols, gap: "10px 16px" } as React.CSSProperties}>
                  {(t.can || []).map((c, c_i) => (
                    <React.Fragment key={c_i}>
                      <span style={{ display: "flex", alignItems: "baseline", gap: "8px", minWidth: "0" }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" style={{ color: "#2f6b52", flex: "0 0 auto" }} className="s">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <small style={{ color: "#4c545f", fontSize: "12px", lineHeight: "1.55" }}>{c.t}</small>
                      </span>
                    </React.Fragment>
                  ))}
                </div>
                <small style={{ fontSize: "8px" }} className="k">Scope · {t.scope}</small>
              </article>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  ) : null;
}
