import React from 'react';
import type { View } from '../view';
import PageAToday from './PageAToday';
import PageAProgrammes from './PageAProgrammes';
import PageAStaff from './PageAStaff';
import PageANotices from './PageANotices';
import PageAPolicy from './PageAPolicy';
import PageAQueue from './PageAQueue';
import PageACase from './PageACase';
import PageAMoney from './PageAMoney';
import PageACourses from './PageACourses';
import PageAPeople from './PageAPeople';
import PageALog from './PageALog';
import PageADecided from './PageADecided';
import PageAAwaiting from './PageAAwaiting';
import PageAPublishing from './PageAPublishing';
import PageIPublish from './PageIPublish';
import PageIToday from './PageIToday';
import PageICourses from './PageICourses';
import PageIMap from './PageIMap';
import PageISignals from './PageISignals';
import PageINotice from './PageINotice';
import PageIMark from './PageIMark';
import PageILearners from './PageILearners';
import PageIPonders from './PageIPonders';
import PageIGathering from './PageIGathering';

export default function PageInDesk({ v }: { v: View }) {
  return v.inDesk ? (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "13px", borderBottom: "1px solid #e4e8ec", flexWrap: "wrap" }} className="np">
          {v.deskSubShow ? (
            <>
            <button onClick={v.toggleDnav} aria-label="Section menu" style={{ width: "34px", height: "34px", border: "1px solid #e4e8ec", borderRadius: "3px", background: v.dnavBtnBg, color: v.dnavBtnFg, display: "grid", placeItems: "center", cursor: "pointer", flex: "0 0 auto" } as React.CSSProperties} className="hv3">
              <svg viewBox="0 0 24 24" width="17" height="17" className="s">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>
            </>
          ) : null}
          <nav style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "7px", flexWrap: "wrap" }}>
            <button onClick={v.deskHome} style={{ padding: "0", border: "0", background: "none", color: "#4a5a8a", fontSize: "13px", fontWeight: "500", cursor: "pointer" }} className="hv7">
              {v.deskName}
            </button>
            <span style={{ color: "#b6bec7", fontSize: "13px" }}>›</span>
            <strong style={{ fontSize: "13px", fontWeight: "700" }}>{v.deskCrumb}</strong>
            {v.deskCrumbSubShow ? (
              <>
              <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ color: "#b6bec7", fontSize: "13px" }}>›</span>
                <strong style={{ fontSize: "13px", fontWeight: "700" }}>{v.deskCrumbSub}</strong>
              </span>
              </>
            ) : null}
          </nav>
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px", flex: "0 0 auto" }}>
            <small style={{ fontSize: "8px", color: v.deskStateTone } as React.CSSProperties} className="k n">{v.deskState}</small>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#1b1e2b", color: "#fff", display: "grid", placeItems: "center", fontSize: "10px", fontWeight: "700" }}>
              {v.initials}
            </span>
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: v.dnavCols, gap: v.cnavGap, paddingTop: "22px", alignItems: "start" } as React.CSSProperties}>
          {v.dnavOpen ? (
            <>
            <aside style={{ minWidth: "0", display: "flex", flexDirection: "column", position: v.cnavPos, top: v.cnavTop } as React.CSSProperties} className="np">
              <p style={{ margin: "0 0 11px", fontSize: "8px" }} className="k">{v.deskCrumb}</p>
              {(v.deskNav || []).map((n, n_i) => (
                <React.Fragment key={n_i}>
                  <button onClick={n.go} style={{ minHeight: "40px", padding: "0 11px", border: "0", borderLeft: `2px solid ${n.edge}`, background: n.bg, color: n.fg, fontSize: "13.5px", fontWeight: n.fw, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", cursor: "pointer" } as React.CSSProperties} className="hv8">
                    <span>{n.label}</span>
                    {n.badge ? (
                      <>
                      <span style={{ minWidth: "18px", height: "18px", padding: "0 5px", borderRadius: "99px", background: n.badgeBg, color: "#fff", display: "grid", placeItems: "center", fontSize: "9px", fontWeight: "700" } as React.CSSProperties} className="n">
                        {n.count}
                      </span>
                      </>
                    ) : null}
                  </button>
                </React.Fragment>
              ))}
              <button onClick={v.toggleDnav} style={{ marginTop: "14px", minHeight: "34px", padding: "0 11px", border: "0", background: "none", color: "#8d96a2", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11.5px", fontWeight: "600", cursor: "pointer" }} className="hv4">
                <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                  <path d="m11 17-5-5 5-5" />
                  <path d="M18 17V7" />
                </svg>
                Hide menu
              </button>
            </aside>
            </>
          ) : null}
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: v.blockGap } as React.CSSProperties}>
            <PageAToday v={v} />
            <PageAProgrammes v={v} />
            <PageAStaff v={v} />
            <PageANotices v={v} />
            <PageAPolicy v={v} />
            <PageAQueue v={v} />
            <PageACase v={v} />
            <PageAMoney v={v} />
            <PageACourses v={v} />
            <PageAPeople v={v} />
            <PageALog v={v} />
            <PageADecided v={v} />
            <PageAAwaiting v={v} />
            <PageAPublishing v={v} />
            <PageIPublish v={v} />
            <PageIToday v={v} />
            <PageICourses v={v} />
            <PageIMap v={v} />
            <PageISignals v={v} />
            <PageINotice v={v} />
            <PageIMark v={v} />
            <PageILearners v={v} />
            <PageIPonders v={v} />
            <PageIGathering v={v} />
          </div>
        </div>
      </div>
    </>
  ) : null;
}
