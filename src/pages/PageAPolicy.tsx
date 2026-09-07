import React from 'react';
import type { View } from '../view';


export default function PageAPolicy({ v }: { v: View }) {
  return v.rt.aPolicy ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">The numbers the software obeys</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Fees, dates and access</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            Every rule below is enforced by the software, not by a person’s memory. Changing one changes what learners are shown the same minute.
          </p>
        </header>
        {(v.policyGroups || []).map((pgp, pgp_i) => (
          <React.Fragment key={pgp_i}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "9px" }} className="k">{pgp.title}</span>
              <div style={{ borderTop: "1px solid #1b1e2b" }}>
                {(pgp.rows || []).map((r, r_i) => (
                  <React.Fragment key={r_i}>
                    <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.policyCols, gap: "10px 16px", alignItems: "baseline" } as React.CSSProperties}>
                      <span style={{ minWidth: "0" }}>
                        <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{r.k}</strong>
                        <small style={{ display: "block", marginTop: "4px", maxWidth: "54ch", color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.6" }}>
                          {r.note}
                        </small>
                      </span>
                      <strong style={{ fontSize: "13.5px", fontWeight: "700", justifySelf: v.policyJustify } as React.CSSProperties} className="n">
                        {r.v}
                      </strong>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </section>
    </>
  ) : null;
}
