import React from 'react';
import type { View } from '../view';


export default function PageIPublish({ v }: { v: View }) {
  return v.rt.iPublish ? (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties} className="f">
        <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="k">You decide what opens, and when</p>
          <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Publishing</h1>
          <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>
            A week is written as a draft, where nobody can see it. Scheduling it makes it a locked square on the learner’s course home so they can see it coming. Publishing opens every item inside it. Nothing you type reaches a learner until you press Publish.
          </p>
        </header>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {(v.pubCourseTabs || []).map((t, t_i) => (
            <React.Fragment key={t_i}>
              <button onClick={t.pick} style={{ minHeight: "42px", padding: "0 14px", border: `1px solid ${t.bd}`, borderRadius: "99px", background: t.bg, color: t.fg, fontSize: "12.5px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                {t.label}
              </button>
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {(v.pubWeekRows || []).map((w, w_i) => (
            <React.Fragment key={w_i}>
              <article style={{ border: `1px solid ${w.bd}`, borderRadius: "3px", background: "#fff", overflow: "hidden" } as React.CSSProperties}>
                <div style={{ padding: "16px 18px", display: "grid", gridTemplateColumns: v.pubCols, gap: "12px 16px", alignItems: "center", background: w.headBg } as React.CSSProperties}>
                  <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "5px" }}>
                    <strong style={{ fontSize: "14px", fontWeight: "700", lineHeight: "1.4" }}>Week {w.no} · {w.title}</strong>
                    <small style={{ fontSize: "8px" }} className="k">{w.meta}</small>
                  </span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifySelf: v.pubJustify } as React.CSSProperties}>
                    {(w.states || []).map((st, st_i) => (
                      <React.Fragment key={st_i}>
                        <button onClick={st.pick} style={{ minHeight: "38px", padding: "0 12px", border: `1px solid ${st.bd}`, borderRadius: "3px", background: st.bg, color: st.fg, fontSize: "12px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                          {st.label}
                        </button>
                      </React.Fragment>
                    ))}
                  </span>
                </div>
                <div style={{ padding: "14px 18px", borderTop: "1px solid #eef1f4", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 18px" }}>
                  <small style={{ fontSize: "8px", color: w.tone } as React.CSSProperties} className="k n">{w.note}</small>
                  <small style={{ fontSize: "8px" }} className="k n">{w.counts}</small>
                  <button onClick={w.preview} style={{ marginLeft: "auto", minHeight: "36px", padding: "0 12px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                    See it as a learner
                  </button>
                </div>
              </article>
            </React.Fragment>
          ))}
        </div>
        <div style={{ padding: "18px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fbfcfd", display: "flex", flexDirection: "column", gap: "11px" }}>
          <span style={{ fontSize: "8px" }} className="k">What publishing does to a learner’s week</span>
          {(v.pubExplain || []).map((e, e_i) => (
            <React.Fragment key={e_i}>
              <span style={{ display: "grid", gridTemplateColumns: v.refCols, gap: "10px 14px", alignItems: "baseline" } as React.CSSProperties}>
                <small style={{ fontSize: "8px", color: e.tone } as React.CSSProperties} className="k">{e.k}</small>
                <small style={{ minWidth: "0", color: "#4c545f", fontSize: "12.5px", lineHeight: "1.7" }}>{e.v}</small>
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  ) : null;
}
