import React from 'react';
import type { View } from '../view';


export default function PageInCourse({ v }: { v: View }) {
  return v.inCourse ? (
    <>
      <section style={{ display: "flex", flexDirection: "column" }} className="f">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "13px", borderBottom: "1px solid #e4e8ec", flexWrap: "wrap" }} className="np">
          <button onClick={v.toggleCnav} aria-label="Course menu" style={{ width: "34px", height: "34px", border: "1px solid #e4e8ec", borderRadius: "3px", background: v.cnavBtnBg, color: v.cnavBtnFg, display: "grid", placeItems: "center", cursor: "pointer", flex: "0 0 auto" } as React.CSSProperties} className="hv3">
            <svg viewBox="0 0 24 24" width="17" height="17" className="s">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>
          <nav style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "7px", flexWrap: "wrap" }}>
            {(v.crumbs || []).map((c, c_i) => (
              <React.Fragment key={c_i}>
                <span style={{ display: "flex", alignItems: "center", gap: "7px", minWidth: "0" }}>
                  <button onClick={c.go} style={{ padding: "0", border: "0", background: "none", color: c.fg, fontSize: "13px", fontWeight: c.fw, textAlign: "left", cursor: c.cursor, maxWidth: "30ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } as React.CSSProperties} className="hv7">
                    {c.label}
                  </button>
                  <span style={{ display: c.sep, color: "#b6bec7", fontSize: "13px" } as React.CSSProperties}>›</span>
                </span>
              </React.Fragment>
            ))}
          </nav>
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px", flex: "0 0 auto" }}>
            <button onClick={v.toggleBigText} style={{ minHeight: "32px", padding: "0 11px", border: `1px solid ${v.readerBd}`, borderRadius: "3px", background: v.readerBg, color: v.readerFg, display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
              <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                <path d="M4 7V4h16v3" />
                <path d="M9 20h6" />
                <path d="M12 4v16" />
              </svg>
              Easy reading
            </button>
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: v.cnavCols, gap: v.cnavGap, paddingTop: "22px", alignItems: "start" } as React.CSSProperties}>
          {v.cnavOpen ? (
            <>
            <aside style={{ minWidth: "0", display: "flex", flexDirection: "column", position: v.cnavPos, top: v.cnavTop } as React.CSSProperties} className="np">
              <p style={{ margin: "0 0 11px", fontSize: "8px" }} className="k">{v.courseBlockLabel}</p>
              {(v.courseNav || []).map((n, n_i) => (
                <React.Fragment key={n_i}>
                  <button onClick={n.go} style={{ minHeight: "40px", padding: "0 11px", border: "0", borderLeft: `2px solid ${n.edge}`, background: n.bg, color: n.fg, fontSize: "13.5px", fontWeight: n.fw, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", cursor: "pointer" } as React.CSSProperties} className="hv8">
                    <span>{n.label}</span>
                    {n.badge ? (
                      <>
                      <span style={{ minWidth: "18px", height: "18px", padding: "0 5px", borderRadius: "99px", background: "#b4552f", color: "#fff", display: "grid", placeItems: "center", fontSize: "9px", fontWeight: "700" }} className="n">
                        {n.count}
                      </span>
                      </>
                    ) : null}
                  </button>
                </React.Fragment>
              ))}
              <button onClick={v.toggleCnav} style={{ marginTop: "14px", minHeight: "34px", padding: "0 11px", border: "0", background: "none", color: "#8d96a2", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11.5px", fontWeight: "600", cursor: "pointer" }} className="hv4">
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
            {v.cs.home ? (
              <>
              <div style={{ display: "grid", gridTemplateColumns: v.homeCols, gap: v.blockGap, alignItems: "start" } as React.CSSProperties}>
                <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "30px" }}>
                  <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Recent announcements</h2>
                    <div style={{ borderTop: "1px solid #1b1e2b" }}>
                      {(v.homeAnn || []).map((a, a_i) => (
                        <React.Fragment key={a_i}>
                          <button onClick={a.go} style={{ width: "100%", padding: "15px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.annCols, gap: "13px", alignItems: "start", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                            <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#1b1e2b", color: "#fff", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                              {a.initials}
                            </span>
                            <span style={{ minWidth: "0" }}>
                              <strong style={{ display: "block", fontSize: "14px", fontWeight: "600", lineHeight: "1.4" }}>{a.title}</strong>
                              <small style={{ display: "block", marginTop: "5px", color: "#6b7480", fontSize: "12.5px", lineHeight: "1.6" }}>
                                {a.snippet}
                              </small>
                              <small style={{ display: "block", marginTop: "7px", fontSize: "8px" }} className="k">
                                {a.author} · {a.when} · {a.replies} replies
                              </small>
                            </span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                  <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                      <p className="k">{v.courseCode} · {v.courseBlockLabel}</p>
                      <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.courseTitle}</h1>
                    </div>
                    <div style={{ height: v.coverH, border: "1px solid #e4e8ec", borderRadius: "3px", background: v.coverTint, backgroundImage: `url(${v.courseCover})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflow: "hidden" } as React.CSSProperties}>
                      <span style={{ position: "absolute", top: "14px", left: "16px", padding: "5px 10px", borderRadius: "2px", background: "rgba(255,255,255,0.92)", fontSize: "14px", letterSpacing: "0" }} className="d n">
                        {v.courseCode}
                      </span>
                      {' '}
                      <span style={{ position: "absolute", right: "0", bottom: "0", padding: "16px 20px", background: "rgba(20,23,28,0.72)", color: "#fff", maxWidth: "62%" }}>
                        <small style={{ display: "block", fontSize: "8px", color: "rgba(255,255,255,0.62)" }} className="k">
                          Certificate in Nursing · Year 2
                        </small>
                        <strong style={{ display: "block", marginTop: "6px", fontSize: v.h2, color: "#fff" } as React.CSSProperties} className="d">
                          {v.courseTitle}
                        </strong>
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {(v.homeDoors || []).map((d, d_i) => (
                        <React.Fragment key={d_i}>
                          <button onClick={d.go} style={{ minHeight: "52px", padding: "0 20px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                            {d.label}
                            <svg viewBox="0 0 24 24" width="15" height="15" className="s">
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                  <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                      <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Weeks</h2>
                      <small style={{ fontSize: "9px" }} className="k n">{v.weekGridDone} of {v.courseTotal} weeks cleared</small>
                    </div>
                    <p style={{ margin: "0", maxWidth: "60ch", color: "#6b7480", fontSize: "13px", lineHeight: "1.7" }}>
                      Every week is one page. Open the square and the whole week is in front of you in the order it should be done: prepare, teach one another, ponder, prove.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {(v.weekSquares || []).map((q, q_i) => (
                        <React.Fragment key={q_i}>
                          <button onClick={q.go} style={{ width: v.sqSize, height: v.sqSize, padding: "0", border: `1px solid ${q.bd}`, borderRadius: "3px", background: q.bg, color: q.fg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", cursor: "pointer" } as React.CSSProperties} className="hv3">
                            <strong style={{ fontSize: "24px", letterSpacing: "0", color: q.fg } as React.CSSProperties} className="d n">
                              {q.no}
                            </strong>
                            <small style={{ fontSize: "7px", color: q.tone } as React.CSSProperties} className="k">{q.word}</small>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                </div>
                <aside style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }} className="np">
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {(v.homeLinks || []).map((l, l_i) => (
                      <React.Fragment key={l_i}>
                        <button onClick={l.go} style={{ minHeight: "42px", padding: "0 13px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: "600", textAlign: "left", cursor: "pointer" }} className="hv3">
                          <span style={{ width: "16px", height: "16px", display: "block", color: "#4c545f", flex: "0 0 auto" }}>{l.icon}</span>
                          {l.label}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontSize: "9px" }} className="k">To do</span>
                    <div style={{ borderTop: "1px solid #1b1e2b" }}>
                      {(v.todoRows || []).map((t, t_i) => (
                        <React.Fragment key={t_i}>
                          <button onClick={t.go} style={{ width: "100%", padding: "12px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: "16px minmax(0,1fr)", gap: "10px", alignItems: "start", textAlign: "left", cursor: "pointer" }} className="hv2">
                            <span style={{ width: "15px", height: "15px", marginTop: "2px", display: "block", color: "#8d96a2" }}>
                              {t.icon}
                            </span>
                            <span style={{ minWidth: "0" }}>
                              <strong style={{ display: "block", fontSize: "12.5px", fontWeight: "500", lineHeight: "1.45", color: "#4a5a8a" }}>
                                {t.title}
                              </strong>
                              <small style={{ display: "block", marginTop: "5px", fontSize: "8px" }} className="k n">{t.meta}</small>
                            </span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontSize: "9px" }} className="k">Recent feedback</span>
                    <div style={{ borderTop: "1px solid #1b1e2b" }}>
                      {(v.feedbackRows || []).map((f, f_i) => (
                        <React.Fragment key={f_i}>
                          <div style={{ padding: "12px 0", borderBottom: "1px solid #eef1f4", display: "flex", flexDirection: "column", gap: "5px" }}>
                            <strong style={{ fontSize: "12.5px", fontWeight: "500", lineHeight: "1.45" }}>{f.title}</strong>
                            <small style={{ fontSize: "8px", color: f.tone } as React.CSSProperties} className="k n">{f.mark}</small>
                            <small style={{ color: "#8d96a2", fontSize: "11.5px", lineHeight: "1.55" }}>{f.note}</small>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
              </>
            ) : null}
            {v.cs.announcements ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <p className="k">{v.courseCode} · {v.courseTitle}</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Announcements</h1>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {(v.annRows || []).map((a, a_i) => (
                    <React.Fragment key={a_i}>
                      <article style={{ padding: "19px 20px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "grid", gridTemplateColumns: v.annCols, gap: "14px", alignItems: "start" } as React.CSSProperties}>
                        <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#1b1e2b", color: "#fff", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                          {a.initials}
                        </span>
                        <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "6px 14px" }}>
                            <strong style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.35" }}>{a.title}</strong>
                            <small style={{ fontSize: "8px" }} className="k">{a.when}</small>
                          </span>
                          <p style={{ margin: "0", maxWidth: "62ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.75" }}>
                            {a.body}
                          </p>
                          <span style={{ paddingTop: "10px", borderTop: "1px solid #eef1f4", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px" }}>
                            <small style={{ fontSize: "8px" }} className="k">{a.author} · instructor</small>
                            <small style={{ fontSize: "8px" }} className="k n">{a.replies} replies</small>
                          </span>
                        </span>
                      </article>
                    </React.Fragment>
                  ))}
                </div>
              </section>
              </>
            ) : null}
            {v.cs.syllabus ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <p className="k">{v.courseCode} · {v.courseBlockLabel}</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Syllabus</h1>
                  <p style={{ margin: "8px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>{v.courseBlurb}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ fontSize: "9px" }} className="k">What a week asks of you</span>
                  <div style={{ borderTop: "1px solid #1b1e2b" }}>
                    {(v.movementRows || []).map((m, m_i) => (
                      <React.Fragment key={m_i}>
                        <div style={{ padding: "15px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.movCols, gap: "8px 16px", alignItems: "baseline" } as React.CSSProperties}>
                          <strong style={{ fontSize: "13.5px", fontWeight: "600" }}>{m.label}</strong>
                          <span style={{ minWidth: "0", color: "#4c545f", fontSize: "13px", lineHeight: "1.7" }}>{m.note}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ fontSize: "9px" }} className="k">How the mark is built</span>
                  <div style={{ borderTop: "1px solid #1b1e2b" }}>
                    {(v.weightRows || []).map((g, g_i) => (
                      <React.Fragment key={g_i}>
                        <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "8px 14px", alignItems: "baseline" }}>
                          <span style={{ minWidth: "0" }}>
                            <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{g.label}</strong>
                            <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{g.note}</small>
                          </span>
                          <strong style={{ fontSize: "14px", fontWeight: "700" }} className="n">{g.weight}</strong>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Everything with points on it, by date</span>
                  <div style={{ borderTop: "1px solid #1b1e2b" }}>
                    {(v.scheduleRows || []).map((r, r_i) => (
                      <React.Fragment key={r_i}>
                        <button onClick={r.go} style={{ width: "100%", padding: "13px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.schedCols, gap: "8px 14px", alignItems: "baseline", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                          <span style={{ fontSize: "9px" }} className="k n">{r.date}</span>
                          <span style={{ minWidth: "0" }}>
                            <strong style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#4a5a8a" }}>{r.title}</strong>
                            <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k">{r.kind}</small>
                          </span>
                          <span style={{ fontSize: "9px", justifySelf: "end" }} className="k n">{r.pts}</span>
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Rules of this course</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {(v.policyRows || []).map((p, p_i) => (
                      <React.Fragment key={p_i}>
                        <article style={{ padding: "16px 18px", borderLeft: "2px solid #1b1e2b", background: "#fff", display: "flex", flexDirection: "column", gap: "7px" }}>
                          <strong style={{ fontSize: "13.5px", fontWeight: "600" }}>{p.k}</strong>
                          <p style={{ margin: "0", maxWidth: "62ch", color: "#4c545f", fontSize: "13px", lineHeight: "1.7" }}>{p.v}</p>
                        </article>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </section>
              </>
            ) : null}
            {v.cs.modules ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                    <p className="k">{v.courseCode} · {v.courseBlockLabel}</p>
                    <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Modules</h1>
                  </div>
                  <button onClick={v.toggleAllModules} style={{ minHeight: "38px", padding: "0 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="np hv3">
                    {v.collapseWord}
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {(v.moduleRows || []).map((m, m_i) => (
                    <React.Fragment key={m_i}>
                      <section style={{ border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", overflow: "hidden" }}>
                        <div style={{ padding: "13px 16px", background: "#f7f9fa", borderBottom: `1px solid ${m.headBd}`, display: "grid", gridTemplateColumns: v.modHeadCols, gap: "12px", alignItems: "center" } as React.CSSProperties}>
                          <button onClick={m.toggle} aria-label={m.title} style={{ width: "22px", height: "22px", padding: "0", border: "0", background: "none", color: "#4c545f", display: "grid", placeItems: "center", cursor: "pointer" }}>
                            <span style={{ display: "block", width: "14px", height: "14px", transform: m.caret, transition: "transform 140ms ease" } as React.CSSProperties}>
                              <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </span>
                          </button>
                          <button onClick={m.open} style={{ minWidth: "0", padding: "0", border: "0", background: "none", display: "flex", flexDirection: "column", gap: "4px", textAlign: "left", cursor: m.cursor } as React.CSSProperties}>
                            <strong style={{ fontSize: "14px", fontWeight: "700", lineHeight: "1.35" }}>{m.title}</strong>
                            <small style={{ fontSize: "8px" }} className="k">{m.meta}</small>
                          </button>
                          <span style={{ fontSize: "8px", justifySelf: "end", textAlign: "right", color: m.tone } as React.CSSProperties} className="k n">
                            {m.state}
                          </span>
                        </div>
                        {m.open2 ? (
                          <>
                          <div>
                            {(m.items || []).map((i, i_i) => (
                              <React.Fragment key={i_i}>
                                <div style={{ padding: `12px 16px 12px ${i.indent}`, borderBottom: "1px solid #f2f5f7", borderLeft: `3px solid ${i.edge}`, display: "grid", gridTemplateColumns: v.modItemCols, gap: "12px", alignItems: "center" } as React.CSSProperties}>
                                  <span style={{ width: "17px", height: "17px", display: "block", color: i.iconFg } as React.CSSProperties}>
                                    {i.icon}
                                  </span>
                                  <button onClick={i.go} style={{ minWidth: "0", padding: "0", border: "0", background: "none", display: "flex", flexDirection: "column", gap: "4px", textAlign: "left", cursor: "pointer" }}>
                                    <strong style={{ fontSize: "13.5px", fontWeight: "500", lineHeight: "1.45", color: i.fg } as React.CSSProperties} className="hv7">
                                      {i.title}
                                    </strong>
                                    <small style={{ fontSize: "8px" }} className="k n">{i.meta}</small>
                                  </button>
                                  <button onClick={i.tick} aria-label={i.tickWord} style={{ width: "22px", height: "22px", padding: "0", border: `1px solid ${i.dotBd}`, borderRadius: "50%", background: i.dotBg, color: "#fff", display: "grid", placeItems: "center", cursor: "pointer", justifySelf: "end" } as React.CSSProperties}>
                                    <svg viewBox="0 0 24 24" width="12" height="12" style={{ strokeWidth: "3", opacity: i.dot } as React.CSSProperties} className="s">
                                      <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                  </button>
                                </div>
                              </React.Fragment>
                            ))}
                          </div>
                          </>
                        ) : null}
                      </section>
                    </React.Fragment>
                  ))}
                </div>
              </section>
              </>
            ) : null}
            {v.cs.cgrades ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <p className="k">{v.courseCode} · {v.courseTitle}</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Grades</h1>
                </div>
                <div style={{ padding: "20px 0 22px", borderTop: "1px solid #1b1e2b", borderBottom: "1px solid #eef1f4", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px 22px" }}>
                  <strong style={{ fontSize: "44px" }} className="d n">{v.cgPct}</strong>
                  <strong style={{ fontSize: "22px", color: "#4c545f" }} className="d">{v.cgLetter}</strong>
                  <small style={{ flex: "1", minWidth: "240px", color: "#6b7480", fontSize: "12.5px", lineHeight: "1.65" }}>{v.cgNote}</small>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Points earned, by group</span>
                  <div style={{ borderTop: "1px solid #eef1f4" }}>
                    {(v.cgGroups || []).map((g, g_i) => (
                      <React.Fragment key={g_i}>
                        <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "8px 14px", alignItems: "baseline" }}>
                          <span style={{ minWidth: "0" }}>
                            <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600" }}>{g.label} · {g.weight}</strong>
                            <small style={{ display: "block", marginTop: "4px", color: "#8d96a2", fontSize: "11.5px" }}>{g.note}</small>
                          </span>
                          <span style={{ textAlign: "right" }}>
                            <strong style={{ display: "block", fontSize: "13.5px", fontWeight: "600", color: g.fg } as React.CSSProperties} className="n">
                              {g.got}
                            </strong>
                            <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k n">{g.all}</small>
                          </span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Every graded item in {v.courseCode}</span>
                  <div style={{ borderTop: "1px solid #1b1e2b" }}>
                    {(v.cgRows || []).map((r, r_i) => (
                      <React.Fragment key={r_i}>
                        <button onClick={r.go} style={{ width: "100%", padding: "13px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.cgCols, gap: "8px 14px", alignItems: "baseline", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                          <span style={{ fontSize: "9px" }} className="k n">{r.week}</span>
                          <span style={{ minWidth: "0" }}>
                            <strong style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#4a5a8a" }}>{r.title}</strong>
                            <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k">{r.kind} · due {r.due}</small>
                          </span>
                          <span style={{ textAlign: "right" }}>
                            <strong style={{ display: "block", fontSize: "13px", fontWeight: "600" }} className="n">{r.mark}</strong>
                            <small style={{ display: "block", marginTop: "4px", fontSize: "8px", color: r.tone } as React.CSSProperties} className="k">
                              {r.state}
                            </small>
                          </span>
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </section>
              </>
            ) : null}
            {v.cs.discussions ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <p className="k">{v.courseCode} · {v.courseTitle}</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Discussions</h1>
                  <p style={{ margin: "8px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14px", lineHeight: "1.75" }}>
                    One board a week, and one host a week. Your own posting is half the mark; answering two different classmates properly is the other half.
                  </p>
                </div>
                <div style={{ borderTop: "1px solid #1b1e2b" }}>
                  {(v.discRows || []).map((d, d_i) => (
                    <React.Fragment key={d_i}>
                      <button onClick={d.go} style={{ width: "100%", padding: "16px 0", border: "0", borderBottom: "1px solid #eef1f4", background: "transparent", display: "grid", gridTemplateColumns: v.discCols, gap: "10px 14px", alignItems: "center", textAlign: "left", cursor: "pointer" } as React.CSSProperties} className="hv2">
                        <span style={{ width: "18px", height: "18px", display: "block", color: "#8d96a2" }}>{d.icon}</span>
                        <span style={{ minWidth: "0" }}>
                          <strong style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#4a5a8a", lineHeight: "1.4" }}>
                            {d.title}
                          </strong>
                          <small style={{ display: "block", marginTop: "5px", fontSize: "8px" }} className="k n">{d.meta}</small>
                        </span>
                        <span style={{ fontSize: "9px", justifySelf: "end", textAlign: "right", color: d.tone } as React.CSSProperties} className="k n">
                          {d.state}
                        </span>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </section>
              </>
            ) : null}
            {v.cs.tutoring ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <p className="k">{v.courseCode} · free of charge</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Tutoring</h1>
                  <p style={{ margin: "8px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14px", lineHeight: "1.75" }}>
                    One hour, one-to-one, with somebody who has passed this course. Voice-call slots need almost no data. Booking costs nothing and missing one costs nothing either — but say so, because somebody else wanted the hour.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {(v.tutorRows || []).map((t, t_i) => (
                    <React.Fragment key={t_i}>
                      <article style={{ padding: "17px 18px", border: `1px solid ${t.bd}`, borderRadius: "3px", background: "#fff", display: "grid", gridTemplateColumns: v.tutorCols, gap: "12px 16px", alignItems: "center" } as React.CSSProperties}>
                        <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <strong style={{ fontSize: "14px", fontWeight: "600" }}>{t.when}</strong>
                          <small style={{ color: "#4c545f", fontSize: "12.5px", lineHeight: "1.6" }}>{t.focus}</small>
                          <small style={{ fontSize: "8px" }} className="k">{t.tutor} · {t.mode}</small>
                        </span>
                        <button onClick={t.book} style={{ minHeight: "42px", padding: "0 15px", border: `1px solid ${t.btnBd}`, borderRadius: "3px", background: t.btnBg, color: t.btnFg, fontSize: "12.5px", fontWeight: "600", cursor: t.cursor, justifySelf: t.justify } as React.CSSProperties}>
                          {t.word}
                        </button>
                      </article>
                    </React.Fragment>
                  ))}
                </div>
              </section>
              </>
            ) : null}
            {v.cs.people ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <p className="k">{v.courseCode} · {v.peopleCount} people</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">People</h1>
                </div>
                <article style={{ padding: "20px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "grid", gridTemplateColumns: v.instrCols, gap: "16px", alignItems: "start" } as React.CSSProperties}>
                  <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#1b1e2b", color: "#fff", display: "grid", placeItems: "center", fontSize: "16px", fontWeight: "700" }}>
                    GN
                  </span>
                  <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 14px" }}>
                      <strong style={{ fontSize: "15px", fontWeight: "700" }}>Grace Nalubega</strong>
                      <small style={{ fontSize: "8px" }} className="k">Instructor · clinical instruction</small>
                    </span>
                    <p style={{ margin: "0", maxWidth: "60ch", color: "#4c545f", fontSize: "13px", lineHeight: "1.7" }}>
                      Registered nurse, sixteen years on medical and surgical wards in Kampala and Mbarara. Reads every Ponder before Thursday. Message from the Inbox, not the discussion board, and put the week number in the subject line.
                    </p>
                    <span style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px" }}>
                      <small style={{ fontSize: "8px" }} className="k">Answers within one working day</small>
                      <small style={{ fontSize: "8px" }} className="k">Gathering · Thursday 19:00</small>
                    </span>
                  </span>
                </article>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ fontSize: "9px" }} className="k">Lead-student rota · runs the gathering</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {(v.leadRows || []).map((l, l_i) => (
                      <React.Fragment key={l_i}>
                        <span style={{ padding: "9px 13px", border: `1px solid ${l.bd}`, borderRadius: "99px", background: l.bg, color: l.fg, fontSize: "12px", fontWeight: "600" } as React.CSSProperties}>
                          {l.label}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {(v.groupRows || []).map((g, g_i) => (
                    <React.Fragment key={g_i}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                          <span style={{ fontSize: "9px" }} className="k">{g.name}</span>
                          <small style={{ fontSize: "8px" }} className="k">{g.unit}</small>
                        </div>
                        <div style={{ borderTop: "1px solid #eef1f4" }}>
                          {(g.members || []).map((p, p_i) => (
                            <React.Fragment key={p_i}>
                              <div style={{ padding: "12px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.personCols, gap: "12px", alignItems: "center" } as React.CSSProperties}>
                                <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: p.avBg, color: p.avFg, display: "grid", placeItems: "center", fontSize: "10px", fontWeight: "700" } as React.CSSProperties}>
                                  {p.initials}
                                </span>
                                <span style={{ minWidth: "0" }}>
                                  <strong style={{ display: "block", fontSize: "13px", fontWeight: "500" }}>{p.name}</strong>
                                  <small style={{ display: "block", marginTop: "3px", color: "#8d96a2", fontSize: "11.5px" }}>
                                    {p.place}
                                  </small>
                                </span>
                                <small style={{ fontSize: "8px", justifySelf: "end" }} className="k">{p.tag}</small>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
              </>
            ) : null}
            {v.cs.materials ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <p className="k">{v.courseCode} · openly licensed</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Course materials</h1>
                  <p style={{ margin: "8px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14px", lineHeight: "1.75" }}>
                    Every source this course sets is free to read, free to download and free to print. Nothing here asks you to buy a book or redeem a code.
                  </p>
                </div>
                {(v.materialGroups || []).map((mg, mg_i) => (
                  <React.Fragment key={mg_i}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ fontSize: "9px" }} className="k">{mg.title}</span>
                      <div style={{ borderTop: "1px solid #1b1e2b" }}>
                        {(mg.rows || []).map((r, r_i) => (
                          <React.Fragment key={r_i}>
                            <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.matCols, gap: "12px", alignItems: "center" } as React.CSSProperties}>
                              <span style={{ width: "17px", height: "17px", display: "block", color: "#8d96a2" }}>{r.icon}</span>
                              <span style={{ minWidth: "0" }}>
                                <a href={r.url} target="_blank" rel="noreferrer" style={{ display: "block", fontSize: "13.5px", fontWeight: "500" }}>
                                  {r.title}
                                </a>
                                <small style={{ display: "block", marginTop: "4px", fontSize: "8px" }} className="k">{r.meta}</small>
                              </span>
                              <small style={{ fontSize: "8px", justifySelf: "end" }} className="k">{r.tag}</small>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </section>
              </>
            ) : null}
            {v.cs.notebook ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <p className="k">{v.courseCode} · private to you</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">Notebook</h1>
                  <p style={{ margin: "8px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14px", lineHeight: "1.75" }}>
                    One page a week, seen by nobody but you. Not marked, not read, not counted. It exists so the thing you worked out at 23:00 is still there on Sunday.
                  </p>
                </div>
                {(v.noteWeeks || []).map((n, n_i) => (
                  <React.Fragment key={n_i}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                        <strong style={{ fontSize: "13.5px", fontWeight: "600" }}>{n.label}</strong>
                        <small style={{ fontSize: "8px" }} className="k n">{n.count}</small>
                      </div>
                      <textarea value={n.text} onChange={n.set} rows={3} placeholder={n.hint} style={{ width: "100%", padding: "13px 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13.5px", lineHeight: "1.7", resize: "vertical", outline: "0" }} className="fc9" />
                    </div>
                  </React.Fragment>
                ))}
              </section>
              </>
            ) : null}
            {v.rt.week ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                <div style={{ padding: "14px 16px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", flexDirection: "column", gap: "11px" }}>
                  <span style={{ fontSize: "8px" }} className="k">Textbook and references used this week</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                    {(v.weekRefs || []).map((r, r_i) => (
                      <React.Fragment key={r_i}>
                        <span style={{ display: "grid", gridTemplateColumns: v.refCols, gap: "10px 14px", alignItems: "baseline" } as React.CSSProperties}>
                          <small style={{ fontSize: "8px" }} className="k">{r.tag}</small>
                          <span style={{ minWidth: "0" }}>
                            <a href={r.url} target="_blank" rel="noreferrer" style={{ fontSize: "13px", fontWeight: "500" }}>
                              {r.title}
                            </a>
                            <small style={{ display: "block", marginTop: "3px", color: "#8d96a2", fontSize: "11px" }}>{r.source}</small>
                          </span>
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p className="k">Week {v.weekNo} of {v.courseTotal} · {v.weekSpanDates}</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.weekTitle}</h1>
                  <p style={{ margin: "6px 0 0", maxWidth: "62ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.75" }}>{v.weekDesc}</p>
                </header>
                <div style={{ padding: "18px", borderLeft: "2px solid #1b1e2b", background: "#fff", borderRadius: "0 3px 3px 0" }}>
                  <span style={{ fontSize: "9px" }} className="k">This week’s objective</span>
                  <p style={{ margin: "10px 0 0", fontSize: v.h3, maxWidth: "44ch" } as React.CSSProperties} className="d">{v.objective}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px" }}>
                  <span style={{ height: "3px", flex: "1", minWidth: "160px", maxWidth: "300px", background: "#eef1f4", borderRadius: "99px", overflow: "hidden" }}>
                    <i style={{ display: "block", height: "100%", width: v.weekPct, background: "#1b1e2b" } as React.CSSProperties} />
                  </span>
                  <small style={{ fontSize: "9px" }} className="k n">{v.weekDoneCount} of {v.weekItemCount} items done</small>
                  <small style={{ fontSize: "9px" }} className="k n">{v.weekPoints}</small>
                </div>
                {(v.weekMovements || []).map((mv, mv_i) => (
                  <React.Fragment key={mv_i}>
                    <section style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                        <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">{mv.label}</h2>
                        <small style={{ fontSize: "9px" }} className="k n">{mv.count}</small>
                      </div>
                      <p style={{ margin: "0", maxWidth: "62ch", color: "#6b7480", fontSize: "13px", lineHeight: "1.7" }}>{mv.note}</p>
                      <div style={{ borderTop: "1px solid #1b1e2b" }}>
                        {(mv.items || []).map((i, i_i) => (
                          <React.Fragment key={i_i}>
                            <div style={{ padding: "14px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: v.weekItemCols, gap: "12px", alignItems: "center" } as React.CSSProperties}>
                              <button onClick={i.tick} aria-label={i.tickWord} style={{ width: "22px", height: "22px", padding: "0", border: `1px solid ${i.dotBd}`, borderRadius: "50%", background: i.dotBg, color: "#fff", display: "grid", placeItems: "center", cursor: "pointer" } as React.CSSProperties}>
                                <svg viewBox="0 0 24 24" width="12" height="12" style={{ strokeWidth: "3", opacity: i.dot } as React.CSSProperties} className="s">
                                  <path d="M20 6 9 17l-5-5" />
                                </svg>
                              </button>
                              <button onClick={i.go} style={{ minWidth: "0", padding: "0", border: "0", background: "none", display: "flex", flexDirection: "column", gap: "5px", textAlign: "left", cursor: "pointer" }}>
                                <span style={{ display: "flex", alignItems: "center", gap: "9px", minWidth: "0" }}>
                                  <span style={{ width: "16px", height: "16px", display: "block", color: "#8d96a2", flex: "0 0 auto" }}>
                                    {i.icon}
                                  </span>
                                  <strong style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.45", color: i.fg } as React.CSSProperties} className="hv7">
                                    {i.title}
                                  </strong>
                                </span>
                                <small style={{ display: "block", marginLeft: "25px", fontSize: "8px" }} className="k n">{i.meta}</small>
                              </button>
                              <small style={{ fontSize: "8px", justifySelf: "end", color: i.tone } as React.CSSProperties} className="k n">
                                {i.state}
                              </small>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </section>
                  </React.Fragment>
                ))}
                <div style={{ paddingTop: "20px", borderTop: "1px solid #e4e8ec", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }} className="np">
                  <button onClick={v.prevWeek} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", color: v.prevWeekFg, display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "12.5px", fontWeight: "600", cursor: v.prevWeekCursor } as React.CSSProperties}>
                    <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    {v.prevWeekLabel}
                  </button>
                  <button onClick={v.nextWeekGo} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", color: v.nextWeekFg, display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "12.5px", fontWeight: "600", cursor: v.nextWeekCursor } as React.CSSProperties}>
                    {v.nextWeekLabel}
                    <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </section>
              </>
            ) : null}
            {v.rt.item ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "26px", maxWidth: "74ch" }}>
                <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p className="k">{v.itemEyebrow}</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.itemTitle}</h1>
                  <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 20px" }}>
                    <strong style={{ fontSize: "9px", color: "#14171c" }} className="k">{v.itemDue}</strong>
                    <small style={{ fontSize: "9px" }} className="k n">{v.itemPts}</small>
                    <small style={{ fontSize: "9px" }} className="k">{v.itemReq}</small>
                  </div>
                </header>
                <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Overview</h2>
                  <p style={{ margin: "0", color: "#14171c", fontSize: "15px", lineHeight: "1.85" }}>{v.itemOverview}</p>
                  {v.hasPurpose ? (
                    <>
                    <p style={{ margin: "0", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.85" }}>
                      <strong style={{ fontWeight: "700", color: "#14171c" }}>Purpose.</strong>
                      {v.itemPurpose}
                    </p>
                    </>
                  ) : null}
                </div>
                {v.hasPrompt ? (
                  <>
                  <section style={{ border: "1px solid #1b1e2b", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ padding: "11px 16px", background: "#1b1e2b", color: "#fff", display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(255,255,255,0.14)", display: "grid", placeItems: "center", flex: "0 0 auto" }}>
                        <svg viewBox="0 0 24 24" width="12" height="12" style={{ color: "#fff" }} className="s">
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        </svg>
                      </span>
                      <strong style={{ fontSize: "9px", color: "#fff" }} className="k">{v.promptLabel}</strong>
                    </div>
                    <div style={{ padding: "17px 18px", background: "#fff", display: "flex", flexDirection: "column", gap: "11px" }}>
                      <strong style={{ fontSize: "15.5px", fontWeight: "700", lineHeight: "1.55" }}>{v.promptQ}</strong>
                      <p style={{ margin: "0", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.8" }}>{v.promptNote}</p>
                    </div>
                  </section>
                  </>
                ) : null}
                <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Instructions</h2>
                  <ol style={{ margin: "0", paddingLeft: "22px", color: "#14171c", fontSize: "14.5px", lineHeight: "1.9" }}>
                    {(v.itemSteps || []).map((s, s_i) => (
                      <React.Fragment key={s_i}>
                        <li style={{ paddingBottom: "8px" }}>{s.t}</li>
                      </React.Fragment>
                    ))}
                  </ol>
                </section>
                {v.hasSource ? (
                  <>
                  <div style={{ padding: "16px 18px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "5px" }}>
                      <small style={{ fontSize: "8px" }} className="k">The source itself</small>
                      <strong style={{ fontSize: "13.5px", fontWeight: "600" }}>{v.itemSource}</strong>
                    </span>
                    <a href={v.itemUrl} target="_blank" rel="noreferrer" style={{ minHeight: "42px", padding: "0 16px", border: "1px solid #1b1e2b", borderRadius: "3px", background: "#fff", color: "#14171c", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "12.5px", fontWeight: "600", textDecoration: "none" }} className="hv2">
                      Open it
                      <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  </div>
                  </>
                ) : null}
                {v.hasOutcomes ? (
                  <>
                  <section style={{ padding: "18px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff" }}>
                    <span style={{ fontSize: "9px" }} className="k">By the end of this you should be able to</span>
                    <ul style={{ margin: "12px 0 0", paddingLeft: "20px", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.95" }}>
                      {(v.itemOutcomes || []).map((o, o_i) => (
                        <React.Fragment key={o_i}>
                          <li>{o.t}</li>
                        </React.Fragment>
                      ))}
                    </ul>
                  </section>
                  </>
                ) : null}
                {v.handShow ? (
                  <>
                  <section style={{ padding: "18px", border: `1px solid ${v.handTone}`, borderRadius: "3px", background: v.handBg, display: "flex", flexDirection: "column", gap: "14px" } as React.CSSProperties}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 14px" }}>
                      <span style={{ fontSize: "9px", color: v.handKey } as React.CSSProperties} className="k">{v.handHead}</span>
                      <button onClick={v.tickItem} style={{ padding: "0", border: "0", background: "none", color: "#4a5a8a", fontSize: "11.5px", fontWeight: "600", cursor: "pointer" }} className="hv7">
                        {v.withdrawWord}
                      </button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: v.trackCols, gap: "12px 18px" } as React.CSSProperties}>
                      {(v.handRows || []).map((h, h_i) => (
                        <React.Fragment key={h_i}>
                          <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                            <small style={{ fontSize: "8px" }} className="k">{h.k}</small>
                            <strong style={{ fontSize: "14px", fontWeight: "700", color: h.fg } as React.CSSProperties} className="n">
                              {h.v}
                            </strong>
                            <small style={{ color: "#6b7480", fontSize: "11.5px", lineHeight: "1.6" }}>{h.note}</small>
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                  </>
                ) : null}
                {v.hasRubric ? (
                  <>
                  <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">{v.rubricHead}</h2>
                    <div style={{ borderTop: "1px solid #1b1e2b" }}>
                      {(v.itemRubric || []).map((r, r_i) => (
                        <React.Fragment key={r_i}>
                          <div style={{ padding: "12px 0", borderBottom: "1px solid #eef1f4", display: "grid", gridTemplateColumns: "26px minmax(0,1fr)", gap: "12px", alignItems: "baseline" }}>
                            <span style={{ fontSize: "9px" }} className="k n">{r.no}</span>
                            <span style={{ minWidth: "0", color: "#14171c", fontSize: "13.5px", lineHeight: "1.75" }}>{r.t}</span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                  </>
                ) : null}
                {v.hasReviewTrack ? (
                  <>
                  <section style={{ padding: "18px", border: "1px solid #e0d6cd", borderRadius: "3px", background: "#fdfbf8", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 14px" }}>
                      <span style={{ fontSize: "9px", color: "#9a6a45" }} className="k">Your two reviews</span>
                      <strong style={{ fontSize: "9px", color: v.reviewTone } as React.CSSProperties} className="k n">{v.reviewCount} of 2 done</strong>
                    </div>
                    <p style={{ margin: "0", maxWidth: "58ch", color: "#4c545f", fontSize: "13.5px", lineHeight: "1.75" }}>{v.reviewNote}</p>
                    <button onClick={v.openThread} style={{ width: "fit-content", minHeight: "44px", padding: "0 16px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                      Open the thread
                      <svg viewBox="0 0 24 24" width="15" height="15" className="s">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </section>
                  </>
                ) : null}
                {v.hasDisc ? (
                  <>
                  <button onClick={v.openThread} style={{ width: "fit-content", minHeight: "48px", padding: "0 18px", border: "0", borderRadius: "3px", background: "#1b1e2b", color: "#fff", display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }} className="hv1">
                    {v.discBtnLabel}
                    <svg viewBox="0 0 24 24" width="16" height="16" className="s">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                  </>
                ) : null}
                {v.hasNext ? (
                  <>
                  <section style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                    <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Next steps</h2>
                    <ul style={{ margin: "0", paddingLeft: "20px", color: "#14171c", fontSize: "14.5px", lineHeight: "1.9" }}>
                      {(v.itemNext || []).map((n, n_i) => (
                        <React.Fragment key={n_i}>
                          <li>{n.t}</li>
                        </React.Fragment>
                      ))}
                    </ul>
                  </section>
                  </>
                ) : null}
                {v.hasComing ? (
                  <>
                  <section style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                    <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Coming up</h2>
                    <p style={{ margin: "0", color: "#4c545f", fontSize: "14px", lineHeight: "1.85" }}>{v.itemComing}</p>
                  </section>
                  </>
                ) : null}
                {v.hasClosing ? (
                  <>
                  <p style={{ margin: "0", color: "#8d96a2", fontSize: "12.5px", lineHeight: "1.7" }}>{v.itemClosing}</p>
                  </>
                ) : null}
                <div style={{ paddingTop: "20px", borderTop: "1px solid #e4e8ec", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }} className="np">
                  <button onClick={v.prevItem} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", color: v.prevItemFg, display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "12.5px", fontWeight: "600", cursor: v.prevItemCursor, maxWidth: "46%" } as React.CSSProperties}>
                    <svg viewBox="0 0 24 24" width="14" height="14" style={{ flex: "0 0 auto" }} className="s">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.prevItemLabel}</span>
                  </button>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
                    <button onClick={v.tickItem} style={{ minHeight: "44px", padding: "0 16px", border: `1px solid ${v.tickBd}`, borderRadius: "3px", background: v.tickBg, color: v.tickFg, display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties}>
                      <span style={{ width: "15px", height: "15px", border: `1.5px solid ${v.tickRing}`, borderRadius: "50%", display: "grid", placeItems: "center" } as React.CSSProperties}>
                        <svg viewBox="0 0 24 24" width="9" height="9" style={{ strokeWidth: "4", opacity: v.tickDot } as React.CSSProperties} className="s">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {v.tickWord}
                    </button>
                    <button onClick={v.nextItem} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", color: v.nextItemFg, display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "12.5px", fontWeight: "600", cursor: v.nextItemCursor, maxWidth: "220px" } as React.CSSProperties}>
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.nextItemLabel}</span>
                      <svg viewBox="0 0 24 24" width="14" height="14" style={{ flex: "0 0 auto" }} className="s">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </section>
              </>
            ) : null}
            {v.rt.disc ? (
              <>
              <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }} className="np">
                  <button onClick={v.toggleThreads} style={{ minHeight: "36px", padding: "0 12px", border: `1px solid ${v.threadsBd}`, borderRadius: "3px", background: v.threadsBg, color: v.threadsFg, display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                    <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                      <path d="M8 6h13" />
                      <path d="M8 12h13" />
                      <path d="M8 18h13" />
                      <path d="M3 6h.01" />
                      <path d="M3 12h.01" />
                      <path d="M3 18h.01" />
                    </svg>
                    {v.threadsWord}
                  </button>
                  <label style={{ flex: "1", minWidth: "180px", height: "36px", padding: "0 12px", border: "1px solid #e4e8ec", borderRadius: "3px", background: "#fff", display: "flex", alignItems: "center", gap: "9px" }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" style={{ color: "#8d96a2", flex: "0 0 auto" }} className="s">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input value={v.discSearch} onChange={v.setDiscSearch} placeholder="Search entries or author" style={{ flex: "1", minWidth: "0", border: "0", background: "none", fontSize: "12.5px", outline: "0" }} />
                  </label>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {(v.sortChoices || []).map((c, c_i) => (
                      <React.Fragment key={c_i}>
                        <button onClick={c.pick} style={{ minHeight: "36px", padding: "0 12px", border: `1px solid ${c.bd}`, borderRadius: "3px", background: c.bg, color: c.fg, fontSize: "12px", fontWeight: "600", cursor: "pointer" } as React.CSSProperties} className="hv3">
                          {c.label}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <header style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p className="k">{v.discEyebrow}</p>
                  <h1 style={{ margin: "0", fontSize: v.h1 } as React.CSSProperties} className="d">{v.discTitle}</h1>
                  <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 20px" }}>
                    <strong style={{ fontSize: "9px", color: "#14171c" }} className="k">{v.discDue}</strong>
                    <small style={{ fontSize: "9px" }} className="k n">{v.discPts}</small>
                    <small style={{ fontSize: "9px" }} className="k n">{v.discCounts}</small>
                  </div>
                </header>
                <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Overview</h2>
                  <p style={{ margin: "0", maxWidth: "72ch", color: "#14171c", fontSize: "15px", lineHeight: "1.85" }}>{v.discOverview}</p>
                  {v.discHasPurpose ? (
                    <>
                    <p style={{ margin: "0", maxWidth: "72ch", color: "#4c545f", fontSize: "14.5px", lineHeight: "1.85" }}>
                      <strong style={{ fontWeight: "700", color: "#14171c" }}>Purpose.</strong>
                      {v.discPurpose}
                    </p>
                    </>
                  ) : null}
                </div>
                <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">Instructions</h2>
                  <ol style={{ margin: "0", paddingLeft: "22px", maxWidth: "72ch", color: "#14171c", fontSize: "14.5px", lineHeight: "1.9" }}>
                    {(v.discSteps || []).map((s, s_i) => (
                      <React.Fragment key={s_i}>
                        <li style={{ paddingBottom: "8px" }}>{s.t}</li>
                      </React.Fragment>
                    ))}
                  </ol>
                </section>
                {v.discHasRubric ? (
                  <>
                  <section style={{ padding: "18px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#f7f9fa", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontSize: "9px", color: "#14171c" }} className="k">A reply that earns credit</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                      {(v.discRubric || []).map((r, r_i) => (
                        <React.Fragment key={r_i}>
                          <span style={{ display: "grid", gridTemplateColumns: "24px minmax(0,1fr)", gap: "10px", alignItems: "baseline" }}>
                            <small style={{ fontSize: "9px" }} className="k n">{r.no}</small>
                            <span style={{ minWidth: "0", color: "#14171c", fontSize: "13.5px", lineHeight: "1.75" }}>{r.t}</span>
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                  </>
                ) : null}
                <section style={{ padding: "18px", border: `1px solid ${v.trackBd}`, borderRadius: "3px", background: v.trackBg, display: "flex", flexDirection: "column", gap: "13px" } as React.CSSProperties}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 14px" }}>
                    <span style={{ fontSize: "9px", color: v.trackKey } as React.CSSProperties} className="k">Where you stand on this board</span>
                    <strong style={{ fontSize: "9px", color: v.trackKey } as React.CSSProperties} className="k n">{v.trackState}</strong>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: v.trackCols, gap: "12px 18px" } as React.CSSProperties}>
                    {(v.trackRows || []).map((t, t_i) => (
                      <React.Fragment key={t_i}>
                        <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <small style={{ fontSize: "8px" }} className="k">{t.k}</small>
                          <strong style={{ fontSize: "14px", fontWeight: "700", color: t.fg } as React.CSSProperties} className="n">{t.v}</strong>
                          <small style={{ color: "#6b7480", fontSize: "11.5px", lineHeight: "1.55" }}>{t.note}</small>
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
                <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                    <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">{v.myPostHead}</h2>
                    <small style={{ fontSize: "9px" }} className="k n">{v.myPostMeta}</small>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: v.composeCols, gap: "13px", alignItems: "start" } as React.CSSProperties}>
                    <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: v.meAvBg, backgroundImage: `url(${v.mePhoto})`, backgroundSize: "cover", backgroundPosition: "center", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", flex: "0 0 auto" } as React.CSSProperties}>
                      {v.meInitialsShown}
                    </span>
                    <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <textarea value={v.postDraft} onChange={v.setPostDraft} rows={4} placeholder={v.composeHint} style={{ width: "100%", padding: "13px 14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "14px", lineHeight: "1.75", resize: "vertical", outline: "0" }} className="fc9" />
                      <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px" }}>
                        <button onClick={v.submitPost} style={{ minHeight: "44px", padding: "0 17px", border: "0", borderRadius: "3px", background: v.postBtnBg, color: "#fff", fontSize: "13px", fontWeight: "600", cursor: v.postBtnCursor } as React.CSSProperties}>
                          Post to the board
                        </button>
                        <small style={{ fontSize: "8px", color: v.wordTone } as React.CSSProperties} className="k n">{v.wordCount}</small>
                      </span>
                    </span>
                  </div>
                </section>
                <section style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                    <h2 style={{ margin: "0", fontSize: v.h3 } as React.CSSProperties} className="d">The board</h2>
                    <small style={{ fontSize: "9px" }} className="k n">{v.boardMeta}</small>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {(v.posts || []).map((p, p_i) => (
                      <React.Fragment key={p_i}>
                        <article style={{ padding: "18px 0", borderTop: `1px solid ${p.topBd}`, display: "grid", gridTemplateColumns: v.postCols, gap: "14px", alignItems: "start" } as React.CSSProperties}>
                          <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: p.avBg, backgroundImage: `url(${p.avPhoto})`, backgroundSize: "cover", backgroundPosition: "center", color: p.avFg, display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", flex: "0 0 auto" } as React.CSSProperties}>
                            {p.initials}
                          </span>
                          <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 12px" }}>
                              <strong style={{ fontSize: "13.5px", fontWeight: "700", color: p.nameFg } as React.CSSProperties}>{p.who}</strong>
                              <small style={{ fontSize: "8px" }} className="k">{p.when}</small>
                              {p.isHost ? (
                                <>
                                <small style={{ padding: "3px 7px", borderRadius: "2px", background: "#1b1e2b", color: "#fff", fontSize: "7px" }} className="k">
                                  Host this week
                                </small>
                                </>
                              ) : null}
                            </span>
                            <p style={{ margin: "0", maxWidth: "72ch", color: "#14171c", fontSize: "14px", lineHeight: "1.85" }}>
                              {p.body}
                            </p>
                            <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px" }}>
                              <small style={{ fontSize: "8px" }} className="k n">{p.replyMeta}</small>
                              <button onClick={p.reply} style={{ padding: "0", border: "0", background: "none", color: "#4a5a8a", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11.5px", fontWeight: "600", cursor: "pointer" }} className="hv7">
                                <svg viewBox="0 0 24 24" width="13" height="13" className="s">
                                  <path d="M9 17l-5-5 5-5" />
                                  <path d="M4 12h11a4 4 0 0 1 4 4v2" />
                                </svg>
                                {p.replyWord}
                              </button>
                              <button onClick={p.unread} style={{ padding: "0", border: "0", background: "none", color: "#8d96a2", fontSize: "11.5px", fontWeight: "600", cursor: "pointer" }} className="hv4">
                                {p.unreadWord}
                              </button>
                            </span>
                            {p.replying ? (
                              <>
                              <span style={{ marginTop: "4px", padding: "14px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#f7f9fa", display: "flex", flexDirection: "column", gap: "10px" }}>
                                <small style={{ fontSize: "8px" }} className="k">Replying to {p.who}</small>
                                <textarea value={v.replyDraft} onChange={v.setReplyDraft} rows={3} placeholder="Name the sentence you are answering, add your evidence, end with a question." style={{ width: "100%", padding: "12px 13px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "13.5px", lineHeight: "1.75", resize: "vertical", outline: "0" }} className="fc9" />
                                <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px" }}>
                                  <button onClick={v.submitReply} style={{ minHeight: "40px", padding: "0 15px", border: "0", borderRadius: "3px", background: v.replyBtnBg, color: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: v.replyBtnCursor } as React.CSSProperties}>
                                    Post reply
                                  </button>
                                  <button onClick={v.cancelReply} style={{ minHeight: "40px", padding: "0 12px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                                    Cancel
                                  </button>
                                  <small style={{ fontSize: "8px", color: v.replyWordTone } as React.CSSProperties} className="k n">
                                    {v.replyWordCount}
                                  </small>
                                </span>
                              </span>
                              </>
                            ) : null}
                            {p.hasKids ? (
                              <>
                              <span style={{ marginTop: "6px", display: "flex", flexDirection: "column", gap: "12px", borderLeft: "2px solid #eef1f4", paddingLeft: "16px" }}>
                                {(p.kids || []).map((k, k_i) => (
                                  <React.Fragment key={k_i}>
                                    <span style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", gap: "11px", alignItems: "start" }}>
                                      <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: k.avBg, backgroundImage: `url(${k.avPhoto})`, backgroundSize: "cover", backgroundPosition: "center", color: "#fff", display: "grid", placeItems: "center", fontSize: "10px", fontWeight: "700" } as React.CSSProperties}>
                                        {k.initials}
                                      </span>
                                      <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                                        <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 10px" }}>
                                          <strong style={{ fontSize: "12.5px", fontWeight: "700" }}>{k.who}</strong>
                                          <small style={{ fontSize: "8px" }} className="k">{k.when}</small>
                                        </span>
                                        <p style={{ margin: "0", maxWidth: "66ch", color: "#14171c", fontSize: "13.5px", lineHeight: "1.8" }}>
                                          {k.body}
                                        </p>
                                        <small style={{ fontSize: "8px", color: k.tone } as React.CSSProperties} className="k">
                                          {k.tag}
                                        </small>
                                      </span>
                                    </span>
                                  </React.Fragment>
                                ))}
                              </span>
                              </>
                            ) : null}
                          </span>
                        </article>
                      </React.Fragment>
                    ))}
                  </div>
                  {v.noPosts ? (
                    <>
                    <p style={{ margin: "0", padding: "22px", border: "1px dashed #d3dae1", borderRadius: "3px", color: "#8d96a2", fontSize: "13px" }}>
                      Nothing on this board matches “{v.discSearch}”.
                    </p>
                    </>
                  ) : null}
                </section>
                <div style={{ paddingTop: "18px", borderTop: "1px solid #e4e8ec", display: "flex", flexWrap: "wrap", gap: "10px" }} className="np">
                  <button onClick={v.backToItem} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                    <svg viewBox="0 0 24 24" width="14" height="14" className="s">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to the task
                  </button>
                  <button onClick={v.goWeekFromDisc} style={{ minHeight: "44px", padding: "0 15px", border: "1px solid #d3dae1", borderRadius: "3px", background: "#fff", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }} className="hv3">
                    {v.discWeekLabel}
                  </button>
                </div>
              </section>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  ) : null;
}
