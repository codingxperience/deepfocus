import React from 'react';
import type { View } from '../view';


export default function PageAProgrammes({ v }: { v: View }) {
  return v.rt.aProgrammes ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">Structure · what the school actually offers</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Programmes</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            Two certificates, six semesters, and every unit inside them. A unit with no published weeks cannot be registered for, however many learners ask.
          </p>
        </header>
        <section style={{ padding: "19px 20px", borderLeft: "2px solid #2f6f8f", background: "#fff", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 16px" }}>
            <strong style={{ fontSize: "14.5px", fontWeight: "700" }}>{v.freeUnitRow.code} · {v.freeUnitRow.title}</strong>
            <small style={{ fontSize: "8px", color: "#2f6f8f" }} className="k n">Free · {v.freeUnitRow.weeks}</small>
          </div>
          <p style={{ margin: "0", maxWidth: "62ch", color: "#4c545f", fontSize: "13px", lineHeight: "1.7" }}>{v.freeUnitRow.note}</p>
        </section>
        {(v.programmeRows || []).map((pg, pg_i) => (
          <React.Fragment key={pg_i}>
            <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ padding: "17px 18px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "10px 18px" }}>
                <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <strong style={{ fontSize: "15px", fontWeight: "700" }}>{pg.credential}</strong>
                  <small style={{ maxWidth: "56ch", color: "#6b7480", fontSize: "12.5px", lineHeight: "1.6" }}>{pg.summary}</small>
                </span>
                <span style={{ display: "flex", gap: "18px" }}>
                  <span>
                    <small style={{ display: "block", fontSize: "8px" }} className="k">Units</small>
                    <strong style={{ fontSize: "15px" }} className="n">{pg.units}</strong>
                  </span>
                  <span>
                    <small style={{ display: "block", fontSize: "8px" }} className="k">Published</small>
                    <strong style={{ fontSize: "15px", color: pg.pubFg } as React.CSSProperties} className="n">{pg.published}</strong>
                  </span>
                </span>
              </div>
              {(pg.terms || []).map((tm, tm_i) => (
                <React.Fragment key={tm_i}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "9px" }} className="k">{tm.label}</span>
                      <small style={{ fontSize: "8px" }} className="k">{tm.period} · {tm.count}</small>
                    </div>
                    <div style={{ borderTop: "1px solid #eef1f4" }}>
                      {(tm.units || []).map((u, u_i) => (
                        <React.Fragment key={u_i}>
                          <div style={{ padding: "11px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.progCols, gap: "10px 14px", alignItems: "baseline" } as React.CSSProperties}>
                            <small style={{ fontSize: "9px" }} className="k n">{u.code}</small>
                            <span style={{ minWidth: "0", fontSize: "13px", fontWeight: "500" }}>{u.title}</span>
                            <small style={{ fontSize: "8px", color: u.tone, justifySelf: "end" } as React.CSSProperties} className="k">
                              {u.state}
                            </small>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </section>
          </React.Fragment>
        ))}
      </section>
    </>
  ) : null;
}
