import React from 'react';
import type { View } from '../view';


export default function PageILearners({ v }: { v: View }) {
  return v.rt.iLearners ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">{v.learnerScope}</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Who is quietly falling behind</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            Sorted by silence, not by mark. A learner with no post and no quiz this week is the one to write to tonight — the marks will say so three weeks late.
          </p>
        </header>
        <div style={{ borderTop: "1px solid #1b1e2b" }}>
          {(v.riskRows || []).map((l, l_i) => (
            <React.Fragment key={l_i}>
              <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.signalCols, gap: "10px 14px", alignItems: "center" } as React.CSSProperties}>
                <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#eef1f4", color: "#4c545f", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                  {l.initials}
                </span>
                <span style={{ minWidth: "0" }}>
                  <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{l.name}</strong>
                  <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{l.place}</small>
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {(l.flags || []).map((f, f_i) => (
                    <React.Fragment key={f_i}>
                      <small style={{ padding: "4px 8px", border: `1px solid ${f.bd}`, borderRadius: "99px", background: f.bg, color: f.fg, fontSize: "7.5px" } as React.CSSProperties} className="k">
                        {f.t}
                      </small>
                    </React.Fragment>
                  ))}
                </span>
                <span style={{ textAlign: "right" }}>
                  <strong style={{ display: "block", fontSize: "9px", color: l.tone } as React.CSSProperties} className="k n">{l.seen}</strong>
                  <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k n">{l.done}</small>
                </span>
                <button onClick={l.write} style={{ minHeight: "38px", padding: "0 12px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12px", fontWeight: "600", cursor: "pointer", justifySelf: "end" }} className="hv3">
                  Write
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  ) : null;
}
