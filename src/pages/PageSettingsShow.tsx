import React from 'react';
import type { View } from '../view';


export default function PageSettingsShow({ v }: { v: View }) {
  return v.settingsShow ? (
    <>
      <div style={{ position: "fixed", inset: "0", zIndex: "60", background: "rgba(20,23,28,0.42)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: v.modalPad, overflowY: "auto" } as React.CSSProperties} className="np">
        <div style={{ width: "100%", maxWidth: "560px", border: "1px solid #d3dae1", borderRadius: "4px", background: "#fff", boxShadow: "0 24px 60px rgba(20,23,28,0.28)", display: "flex", flexDirection: "column" }} className="f">
          <div style={{ padding: "18px 22px", borderBottom: "1px solid #eef1f4", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <strong style={{ fontSize: v.h3 } as React.CSSProperties} className="d">Inbox settings</strong>
            <button onClick={v.closeSettings} aria-label="Close" style={{ width: "34px", height: "34px", border: "1px solid #d8b23c", borderRadius: "3px", background: "#fff", display: "grid", placeItems: "center", cursor: "pointer" }} className="hv3">
              <svg viewBox="0 0 24 24" width="15" height="15" className="s">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <strong style={{ fontSize: "14px", fontWeight: "700" }}>Signature</strong>
              <p style={{ margin: "0", maxWidth: "54ch", color: "#4c545f", fontSize: "13px", lineHeight: "1.7" }}>
                Added to the end of every message you send from this Inbox. It is never added to discussion posts or to work you hand in.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {(v.sigChoices || []).map((c, c_i) => (
                <React.Fragment key={c_i}>
                  <button onClick={c.pick} style={{ padding: "11px 0", border: "0", background: "none", display: "grid", gridTemplateColumns: "22px minmax(0,1fr)", gap: "12px", alignItems: "center", textAlign: "left", cursor: "pointer" }}>
                    <span style={{ width: "20px", height: "20px", border: `1.5px solid ${c.ringBd}`, borderRadius: "50%", display: "grid", placeItems: "center" } as React.CSSProperties}>
                      <i style={{ width: "10px", height: "10px", borderRadius: "50%", background: c.dotBg, display: "block" } as React.CSSProperties} />
                    </span>
                    <span style={{ minWidth: "0", fontSize: "13.5px", fontWeight: c.fw } as React.CSSProperties}>{c.label}</span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <label style={{ display: "block" }}>
              <span style={{ display: "block", marginBottom: "9px", fontSize: "13px", fontWeight: "700" }}>Your signature</span>
              <textarea value={v.sigText} onChange={v.setSigText} rows={5} placeholder={v.sigPlaceholder} disabled={v.sigDisabled} style={{ width: "100%", padding: "13px", border: "1px solid #d3dae1", borderRadius: "3px", background: v.sigBg, color: v.sigFg, fontSize: "14px", lineHeight: "1.75", resize: "vertical", outline: "0" } as React.CSSProperties} className="fc9" />
              <small style={{ display: "block", marginTop: "9px", fontSize: "8px", color: v.sigNoteTone } as React.CSSProperties} className="k">
                {v.sigNote}
              </small>
            </label>
            <div style={{ padding: "15px 16px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fbfcfd", display: "flex", flexDirection: "column", gap: "11px" }}>
              <span style={{ fontSize: "8px" }} className="k">While you are here</span>
              {(v.settingsLinks || []).map((l, l_i) => (
                <React.Fragment key={l_i}>
                  <button onClick={l.go} style={{ padding: "0", border: "0", background: "none", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", textAlign: "left", cursor: "pointer" }} className="hv7">
                    <span style={{ minWidth: "0", color: "#4a5a8a", fontSize: "12.5px", fontWeight: "600" }}>{l.label}</span>
                    <small style={{ fontSize: "7.5px", flex: "0 0 auto" }} className="k">{l.meta}</small>
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div style={{ padding: "14px 20px", borderTop: "1px solid #eef1f4", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: "9px" }}>
            <button onClick={v.closeSettings} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
              Cancel
            </button>
            <button onClick={v.saveSettings} style={{ minHeight: "44px", padding: "0 19px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv1">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
