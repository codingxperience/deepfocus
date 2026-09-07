import React from 'react';
import Screens from './Screens';
import {
  INK,
  NAVY,
  MUTED,
  FAINT,
  LINE,
  CLAY,
  GREEN,
  TERMS,
  PATHWAYS,
  PHARM_WEEKS,
  MED_WEEKS,
  PHARM_SHEETS,
  MED_SHEETS,
  MARKS,
  BOOKS,
  COVERS,
  COVER_BY_WORD,
  GROUPS,
  AMOUNT,
  money,
  SPACES,
  CLEARANCES,
  LEARNERS,
  TEAM,
  SEED_NOTICES,
  SEED_AUDIT,
  SETTLED,
  DAYS,
  SETUP_ORDER,
  svgIcon,
  I,
  CHANNELS,
  NOTIFY_TOPICS,
  LEVELS,
  ACCT_FILES,
  ACCT_SESSIONS,
  DOMAIN_DESK,
  DIRECTORY,
  MON,
  WEEKDAY,
  dayOf,
  dLabel,
  dueAt,
  spanOf,
  CI,
  TYPE,
  MOVEMENTS,
  buildWeek,
  STANDARD_RESOURCES,
  MAIL_FOLDERS,
  SEED_MAIL,
  MAIL_FOLDERS_BY_ID,
  SUBMISSIONS,
  PONDERS,
  GATHER_Q,
  FREE_UNIT,
  FOUND_WEEKS,
  FOUND_SHEETS,
  PUB_DEFAULT,
  PUB_STATE,
  DESK_RAIL,
  DESK_SUB,
  DESK_MAP,
  POLICY_GROUPS,
  COURSE_NAV,
  CLASSMATES,
  ICE_POSTS,
  TEACH_POSTS,
  COURSE_ANN,
  TUTOR_SLOTS,
} from './data';

export default class AppRoot extends React.Component<Record<string, never>, any> {
  measure!: () => void;
  ro?: ResizeObserver;
  timer: number | null = null;
  walletTimers: number[] = [];
  _mods: Record<string, any> = {};

  state: any = {
    w: typeof window !== 'undefined' ? window.innerWidth : 1280,
    signedIn: false,
    email: '',
    pass: '',
    gateError: '',
    role: 'learner',
    name: 'Fred Okorio',
    setup: true,
    step: 0,
    pathwayId: 'nursing',
    entryTermId: 'y2s1',
    clearedTermIds: [],
    sessions: 3,
    registered: ['cn211-medical-nursing-1', 'cn211-pharmacology-1', 'cn212-surgical-nursing-1', 'cn212-gynaecologic-nursing', 'cn213-paediatric-nursing-1', 'cn213-palliative-care'],
    route: 'dashboard',
    courseId: 'cn211-pharmacology-1',
    weekNo: 1,
    done: {},
    items: {},
    paid: false,
    unread: true,
    wallet: 'mtn',
    phone: '077 123 4567',
    phoneError: false,
    seq: 3,
    left: 300,
    slip: '',
    slipSent: '',
    attempts: [],
    feed: [],
    verdicts: {},
    caseId: null,
    spaceStatus: {},
    spaceId: 'course-surgical',
    notices: SEED_NOTICES,
    audit: SEED_AUDIT,
    read: false,
    mapTitle: 'Week 06 · Post-operative observation and wound care',
    checks: [false, false, false],
    notice: 'Week 06 is open. Start with the observation chart, then read the wound-care section once. Bring one question to Thursday.',
    acct: 'profile',
    displayName: '',
    bio: '',
    primaryCh: 'whatsapp',
    chOn: { sms: true, whatsapp: true, telegram: false },
    chTested: {},
    quietOn: true,
    quietWindow: '21:00–06:00',
    lowData: true,
    notify: {
      week: { sms: 'now', whatsapp: 'now', telegram: 'off', email: 'daily' },
      marks: { sms: 'now', whatsapp: 'now', telegram: 'off', email: 'now' },
      due: { sms: 'now', whatsapp: 'now', telegram: 'off', email: 'off' },
      teach: { sms: 'daily', whatsapp: 'now', telegram: 'off', email: 'off' },
      pay: { sms: 'now', whatsapp: 'now', telegram: 'off', email: 'now' },
      notice: { sms: 'daily', whatsapp: 'now', telegram: 'off', email: 'weekly' },
      summary: { sms: 'off', whatsapp: 'weekly', telegram: 'off', email: 'weekly' },
    },
    a11y: { contrast: false, dyslexia: false, underline: true, bigText: false, motion: false },
    pair: '482 913',
    pairFresh: false,
    ended: [],
    photo: '',
    cnav: true,
    anav: true,
    csec: 'home',
    itemId: null,
    discId: null,
    modClosed: {},
    itemsDone: {},
    notes: {},
    posts: {},
    postDraft: '',
    replyTo: null,
    replyDraft: '',
    discSort: 'newest',
    discSearch: '',
    threadsOpen: true,
    booked: [],
    unreadPosts: {},
    pub: {},
    handed: {},
    markStarted: [],
    pubCid: 'cn211-pharmacology-1',
    mailFolder: 'inbox',
    mailCourse: 'all',
    mailSearch: '',
    mailSel: null,
    mailChecked: [],
    mailRead: [],
    mailStar: [],
    mailArchived: [],
    mailDeleted: [],
    mailSent: [],
    folderOpen: false,
    courseOpen: false,
    composeOpen: false,
    settingsOpen: false,
    cCourseOpen: false,
    cCourse: null,
    cIndividual: false,
    bookOpen: false,
    sigOn: false,
    sigText: '',
    sigSaved: '',
    attach: [],
    cTo: '',
    cSubject: '',
    cBody: '',
    mailReply: '',
    dnav: true,
    markFilter: 'all',
    markOpenId: null,
    markScores: {},
    markComments: {},
    markTicks: {},
    returned: [],
    ponderRead: [],
    ponderAgenda: [],
    attendance: [],
    aNoticeTitle: '',
    aNoticeBody: '',
    noticeAud: 'all',
  };

  componentDidUpdate(_prevProps: any, prev: any) {
    if (prev.route !== 'momoWaiting' && this.state.route === 'momoWaiting') this.startClock();
    if (prev.route === 'momoWaiting' && this.state.route !== 'momoWaiting') { this.stopClock(); this.stopWallet(); }
  }

  componentDidMount() {
    this.measure = () => {
      const el = document.documentElement;
      const w = Math.round(Math.max(window.innerWidth || 0, el ? el.clientWidth : 0));
      if (w > 0 && w !== this.state.w) this.setState({ w });
    };
    this.measure();
    window.requestAnimationFrame(this.measure);
    window.setTimeout(this.measure, 120);
    window.addEventListener('resize', this.measure);
    if (typeof ResizeObserver !== 'undefined') {
      this.ro = new ResizeObserver(this.measure);
      this.ro.observe(document.documentElement);
    }
  }

  componentWillUnmount() {
    this.stopWallet();
    window.removeEventListener('resize', this.measure);
    if (this.ro) this.ro.disconnect();
    this.stopClock();
  }

  startClock() {
    this.stopClock();
    this.timer = window.setInterval(() => {
      this.setState((s) => {
        if (s.route !== 'momoWaiting') return null;
        if (s.left <= 1) return { left: 0, route: 'momoFailed', attempts: [this.attempt('Expired', '#a03a2a')].concat(s.attempts) };
        return { left: s.left - 1 };
      });
    }, 1000);
  }

  stopClock() { if (this.timer) { window.clearInterval(this.timer); this.timer = null; } }

  readDesk(raw) {
    const email = String(raw || '').trim().toLowerCase();
    const dom = email.indexOf('@') === -1 ? '' : email.split('@')[1];
    return { email, dom, role: DOMAIN_DESK[dom] || null, known: DIRECTORY.find((d) => d.email === email) || null };
  }

  enter() {
    const r = this.readDesk(this.state.email);
    if (!r.email || r.email.indexOf('@') === -1 || !r.dom) {
      this.setState({ gateError: 'Enter the full address your school issued, including what follows the @.' });
      return;
    }
    if (!r.role) {
      this.setState({ gateError: 'No desk is attached to ' + r.dom + '. Learners sign in at student.deepfocus.ug, instructors at staff.deepfocus.ug, administrators at admin.deepfocus.ug.' });
      return;
    }
    const base = { signedIn: true, gateError: '', pass: '', role: r.role };
    if (r.role === 'admin') {
      this.setState(Object.assign(base, { name: r.known ? r.known.name : 'Amara Kato', setup: false, route: 'aToday', caseId: null }));
      return;
    }
    if (r.role === 'instructor') {
      this.setState(Object.assign(base, { name: r.known ? r.known.name : 'Grace Nalubega', setup: false, route: 'iToday' }));
      return;
    }
    if (r.known && r.known.returning) {
      this.setState(Object.assign(base, { name: r.known.name, setup: false, paid: true, route: 'dashboard' }));
      return;
    }
    this.setState(Object.assign(base, {
      name: r.known ? r.known.name : '', setup: true, step: 0, paid: false, route: 'dashboard',
      clearedTermIds: [], attempts: [], feed: [], done: {}, items: {}, slipSent: '', slip: '',
    }));
  }

  leave() {
    this.stopWallet();
    this.stopClock();
    this.setState({ signedIn: false, email: '', pass: '', gateError: '', route: 'dashboard' });
  }

  clock() {
    const d = new Date();
    return [d.getHours(), d.getMinutes(), d.getSeconds()].map((x) => String(x).padStart(2, '0')).join(':');
  }

  stopWallet() {
    (this.walletTimers || []).forEach((t) => window.clearTimeout(t));
    this.walletTimers = [];
  }

  push(text, meta, state) {
    this.setState((pr) => {
      const feed = pr.feed.map((e) => (e.state === 'live' ? Object.assign({}, e, { state: 'done' }) : e));
      return { feed: feed.concat([{ text, meta, state, at: this.clock() }]) };
    });
  }

  runWallet() {
    this.stopWallet();
    const w = this.state.wallet === 'mtn' ? 'MTN Mobile Money' : 'Airtel Money';
    const num = this.mask();
    const digits = String(this.state.phone).replace(/\D/g, '');
    const fails = digits.slice(-1) === '0';
    const steps = [
      [400, 'Request queued at Deep Focus', 'Reference ' + this.ref() + ' · UGX ' + money(AMOUNT), 'live'],
      [2200, w + ' accepted the request', 'Gateway acknowledged in 1.8s · pending on ' + num, 'live'],
      [4600, 'Prompt delivered to the handset', 'The subscriber has five minutes to enter the wallet PIN', 'live'],
      [7400, 'PIN entered on ' + num, w + ' is debiting UGX ' + money(AMOUNT) + ' from the wallet', 'live'],
    ];
    steps.forEach(([ms, text, meta, st]: any[]) => {
      this.walletTimers.push(window.setTimeout(() => {
        if (this.state.route === 'momoWaiting') this.push(text, meta, st);
      }, ms));
    });
    this.walletTimers.push(window.setTimeout(() => {
      if (this.state.route !== 'momoWaiting') return;
      if (fails) {
        this.push('Wallet declined the debit', 'Balance on ' + num + ' is below UGX ' + money(AMOUNT) + '. Nothing was taken.', 'fail');
        this.walletTimers.push(window.setTimeout(() => {
          if (this.state.route === 'momoWaiting') this.walletFailed();
        }, 1600));
      } else {
        this.push('Callback received · payment confirmed', w + ' transaction ' + (this.state.wallet === 'mtn' ? 'MP' : 'AM') + '26090' + String(this.state.seq).padStart(4, '0') + ' · verified without a person', 'ok');
        this.walletTimers.push(window.setTimeout(() => {
          if (this.state.route === 'momoWaiting') this.walletVerified();
        }, 1500));
      }
    }, 10200));
  }

  walletVerified() {
    this.stopWallet();
    this.setState((pr) => ({ route: 'receipt', paid: true, attempts: [this.attempt('Verified', GREEN)].concat(pr.attempts), audit: [this.log('payment gateway', 'entitlement', 'Verified ' + this.ref() + '; access opened automatically on the wallet callback.')].concat(pr.audit) }));
  }

  walletFailed() {
    this.stopWallet();
    this.setState((pr) => ({ route: 'payFailed', attempts: [this.attempt('Failed', '#a03a2a')].concat(pr.attempts) }));
  }

  ref() { return 'DF-' + (this.state.pathwayId === 'nursing' ? 'NURSING' : 'MIDWIFERY') + '-' + this.state.entryTermId.toUpperCase() + '-2026-' + String(this.state.seq).padStart(4, '0'); }

  mask() {
    const d = String(this.state.phone).replace(/\D/g, '');
    return d.length < 5 ? this.state.phone : d.slice(0, 3) + ' ••• ' + d.slice(-3);
  }

  attempt(status, color) {
    return { ref: this.ref(), meta: (this.state.wallet === 'mtn' ? 'MTN MoMo' : 'Airtel Money') + ' · ' + this.mask() + ' · 4 Sep 2026', status, color, amount: '58,000' };
  }

  pathway() { return PATHWAYS[this.state.pathwayId]; }
  termUnits(termId) { return this.pathway().units.filter((u) => u.term === termId); }
  entryTerm() { return TERMS.find((t) => t.id === this.state.entryTermId) || TERMS[0]; }
  priorTerms() {
    const i = TERMS.findIndex((t) => t.id === this.state.entryTermId);
    return i > 0 ? TERMS.slice(0, i) : [];
  }
  regUnits() {
    const set = new Set(this.state.registered);
    return [FREE_UNIT].concat(this.pathway().units.filter((u) => set.has(u.id)));
  }
  paidUnits() {
    const set = new Set(this.state.registered);
    return this.pathway().units.filter((u) => set.has(u.id));
  }
  canOpen(u) { return !!(u && (u.free || this.state.paid)); }
  weeksFor(id) {
    if (id === 'df000-foundations') return FOUND_WEEKS;
    if (id === 'cn211-pharmacology-1' || id === 'cm212-pharmacology-1') return PHARM_WEEKS;
    if (id === 'cn211-medical-nursing-1') return MED_WEEKS;
    return [];
  }

  sheetsFor(id) {
    if (id === 'df000-foundations') return FOUND_SHEETS;
    if (id === 'cn211-pharmacology-1' || id === 'cm212-pharmacology-1') return PHARM_SHEETS;
    if (id === 'cn211-medical-nursing-1') return MED_SHEETS;
    return null;
  }

  /* ── publishing ── */
  pubOf(cid, no) {
    const local = this.state.pub[cid];
    if (local && local[no]) return local[no];
    const base = PUB_DEFAULT[cid];
    return base && base[no] ? base[no] : 'published';
  }
  setPub(cid, no, val) {
    this.setState((p) => ({ pub: Object.assign({}, p.pub, { [cid]: Object.assign({}, p.pub[cid], { [no]: val }) }) }));
  }
  visibleWeeks(cid) {
    const staff = this.state.role !== 'learner';
    return this.weeksFor(cid).filter((w) => staff || this.pubOf(cid, w.no) !== 'draft');
  }

  /* ── hand-in pipeline ── */
  handOf(id) { return this.state.handed[id] || null; }
  handIn(cid, item) {
    const when = dLabel(item.week || 1, item.day) + ' · 21:40';
    this.setState((p) => ({
      handed: Object.assign({}, p.handed, { [item.id]: { state: 'submitted', when, courseId: cid, title: item.title, pts: item.pts, week: item.week, learner: p.name } }),
      itemsDone: Object.assign({}, p.itemsDone, { [cid]: (p.itemsDone[cid] || []).indexOf(item.id) !== -1 ? (p.itemsDone[cid] || []) : (p.itemsDone[cid] || []).concat(item.id) }),
    }));
  }
  withdraw(id) {
    this.setState((p) => { const n = Object.assign({}, p.handed); delete n[id]; return { handed: n }; });
  }
  myQueue() {
    const s = this.state;
    return Object.keys(s.handed).map((k) => Object.assign({ id: k }, s.handed[k]));
  }

  sheet(id, no) {
    const set = this.sheetsFor(id);
    return set ? (set[no] || set[1]) : null;
  }

  coverFor(unit) {
    if (!unit) return '';
    if (COVERS[unit.id]) return COVERS[unit.id];
    if (unit.cover) return unit.cover;
    const t = String(unit.title).toLowerCase();
    const hit = COVER_BY_WORD.find((r) => t.indexOf(r[0]) !== -1);
    return hit ? hit[1] : '';
  }

  points(str) { return parseInt(String(str).replace(/[^0-9]/g, ''), 10) || 0; }

  groupOf(label) {
    if (label === 'Prepare') return 'prepare';
    if (label === 'Final') return 'final';
    return 'practise';
  }

  ledgerFor(courseId) {
    const weeks = this.weeksFor(courseId);
    const marks = MARKS[courseId] || {};
    const rows = [];
    weeks.forEach((wk) => {
      const sh = this.sheet(courseId, wk.no);
      if (!sh) return;
      (sh.reinforce || []).forEach((t, i) => rows.push({
        week: wk.no, group: this.groupOf(t.group), label: t.group, title: t.title,
        out: this.points(t.points), key: 'w' + wk.no + '-r' + i, got: marks['w' + wk.no + '-r' + i],
      }));
      (sh.teach || []).forEach((t, i) => rows.push({
        week: wk.no, group: 'teach', label: t.kind, title: t.title,
        out: this.points(t.points), key: 'w' + wk.no + '-t' + i, got: marks['w' + wk.no + '-t' + i],
      }));
      if (sh.ai) rows.push({
        week: wk.no, group: 'ai', label: 'Working with AI', title: sh.ai.title,
        out: this.points(sh.ai.points), key: 'w' + wk.no + '-ai', got: marks['w' + wk.no + '-ai'],
      });
    });
    return rows;
  }

  gradeOf(courseId) {
    const rows = this.ledgerFor(courseId);
    const acc = {};
    GROUPS.forEach((g) => { acc[g.id] = { got: 0, out: 0, all: 0, n: 0 }; });
    rows.forEach((r) => {
      const a = acc[r.group];
      if (!a) return;
      a.all += r.out;
      if (typeof r.got === 'number') { a.got += r.got; a.out += r.out; a.n++; }
    });
    let num = 0, den = 0;
    GROUPS.forEach((g) => { const a = acc[g.id]; if (a.out > 0) { num += g.weight * (a.got / a.out); den += g.weight; } });
    return { rows, acc, pct: den > 0 ? (num / den) * 100 : null, weighted: den };
  }

  letter(pct) {
    if (pct === null) return '—';
    const t = [[90, 'A'], [85, 'A−'], [80, 'B+'], [75, 'B'], [70, 'B−'], [65, 'C+'], [60, 'C'], [55, 'C−'], [50, 'D']];
    for (let i = 0; i < t.length; i++) if (pct >= t[i][0]) return t[i][1];
    return 'F';
  }

  course(id) { return this.pathway().units.find((u) => u.id === id) || this.regUnits()[0]; }
  doneCount(id) { return (this.state.done[id] || []).length; }

  product() {
    const t = this.entryTerm();
    return { title: this.pathway().credential + ' · ' + t.label, timing: t.period + ' 2026', courses: this.termUnits(t.id).length, amount: AMOUNT };
  }

  spaces() {
    return SPACES.map((sp) => Object.assign({}, sp, { mapStatus: this.state.spaceStatus[sp.id] || sp.mapStatus }));
  }

  space(id) { return this.spaces().find((x) => x.id === id) || this.spaces()[0]; }

  cases() {
    const s = this.state;
    const out: any[] = [{
      id: 'pay-0002', kind: 'Payment', icon: 'card', who: 'Moses Kato', what: 'Year 2 · Semester 2 payment',
      waiting: 'Waiting 2 days', urgency: 1,
      question: 'Did Moses Kato’s UGX 58,000 arrive?',
      rows: [
        { k: 'Learner', v: 'Moses Kato' },
        { k: 'Programme', v: 'Certificate in Midwifery · Year 2 · Semester 2' },
        { k: 'Reference', v: 'DF-MIDWIFERY-Y2S2-2026-0002' },
        { k: 'Wallet', v: 'Airtel Money · 075 ••• 318' },
        { k: 'Amount', v: 'UGX 58,000' },
        { k: 'Requested', v: '2 Sep 2026, 07:12 · expired 07:17' },
      ],
      evidenceLabel: 'Airtel merchant statement',
      evidence: 'Line 4471 · UGX 58,000 received from 075 ••• 318 at 07:14, reference DF-MIDWIFERY-Y2S2-2026-0002. The wallet callback never reached Deep Focus.',
      yes: 'Verify — open access', yesWord: 'Verified',
      no: 'Decline — not on the statement', noWord: 'Declined',
      yesLog: 'Verified DF-MIDWIFERY-Y2S2-2026-0002; access is active for Certificate in Midwifery · Year 2 · Semester 2.',
      noLog: 'DF-MIDWIFERY-Y2S2-2026-0002 was marked failed; no access granted.',
      action: 'payment',
    }];

    if (s.slipSent) out.push({
      id: 'slip-' + s.slipSent, kind: 'Deposit', icon: 'bank', who: s.name, what: 'Bank deposit ' + s.slipSent,
      waiting: 'Waiting since today', urgency: 1,
      question: 'Is deposit ' + s.slipSent + ' on today’s bank statement?',
      rows: [
        { k: 'Learner', v: s.name },
        { k: 'Programme', v: this.product().title },
        { k: 'Slip number', v: s.slipSent },
        { k: 'Amount', v: 'UGX 58,000' },
        { k: 'Submitted', v: 'Today · 08:34' },
      ],
      evidenceLabel: 'What to match it against',
      evidence: 'Open the branch statement for today and find UGX 58,000 against slip ' + s.slipSent + '. Nothing opens until a person has seen it there.',
      yes: 'Matched — open access', yesWord: 'Matched',
      no: 'Not on the statement', noWord: 'Not found',
      yesLog: 'Matched bank deposit ' + s.slipSent + '; access is active for ' + this.product().title + '.',
      noLog: 'Bank deposit ' + s.slipSent + ' was not found on the statement.',
      action: 'payment',
      grantsSelf: true,
    });

    CLEARANCES.filter((c) => c.status === 'pending').forEach((c) => out.push({
      id: c.id, kind: 'Clearance', icon: 'gavel', who: c.learner, what: 'Entry at ' + c.semester,
      waiting: 'Submitted ' + c.submitted.toLowerCase(), urgency: c.submitted.indexOf('Today') === 0 ? 0 : 1,
      question: 'Can ' + c.learner + ' start at ' + c.semester + '?',
      rows: [
        { k: 'Learner', v: c.learner },
        { k: 'Programme', v: c.programme },
        { k: 'Asking to start', v: c.semester },
        { k: 'Submitted', v: c.submitted },
        { k: 'Files', v: c.files },
      ],
      evidenceLabel: 'What was sent',
      evidence: c.evidence,
      yes: 'Approve — continue to payment', yesWord: 'Approved',
      no: 'Return — ask for the result record', noWord: 'Returned',
      yesLog: 'Approved ' + c.learner + '’s ' + c.semester + ' clearance review.',
      noLog: 'Returned ' + c.learner + '’s ' + c.semester + ' clearance review for a missing result record.',
      action: 'clearance',
    }));

    return out;
  }

  openCases() { return this.cases().filter((c) => !this.state.verdicts[c.id]); }

  log(who, action, summary) {
    return { id: 'a-' + Math.random().toString(36).slice(2, 8), who, action, summary, when: 'Just now' };
  }

  decide(kase, yes) {
    const word = yes ? kase.yesWord : kase.noWord;
    this.setState((p) => {
      const verdicts = Object.assign({}, p.verdicts, { [kase.id]: { word, who: kase.who, what: kase.what, kind: kase.kind, ok: yes, when: 'Just now' } });
      const audit = [this.log('amara kato', kase.action, yes ? kase.yesLog : kase.noLog)].concat(p.audit);
      const next: any = { verdicts, audit, caseId: null };
      if (kase.grantsSelf && yes) {
        next.paid = true;
        next.attempts = [{ ref: 'Bank deposit · ' + p.slipSent, meta: 'Matched by Amara Kato · 4 Sep 2026', status: 'Verified', color: GREEN, amount: '58,000' }].concat(p.attempts.filter((a) => a.ref.indexOf('Bank deposit') !== 0));
      }
      const remaining = this.cases().filter((c) => c.id !== kase.id && !p.verdicts[c.id]);
      next.route = remaining.length ? 'aCase' : 'aQueue';
      if (remaining.length) next.caseId = remaining[0].id;
      return next;
    });
  }

  setupSteps() {
    return SETUP_ORDER.filter((s) => (s === 'cleared' ? this.priorTerms().length > 0 : true));
  }

  go(route: string, extra?: any) { this.setState(Object.assign({ route }, extra || {})); }

  /* ── course structure ── */
  modulesOf(cid) {
    this._mods = this._mods || {};
    if (this._mods[cid]) return this._mods[cid];
    const c = this.course(cid) || { code: '', title: '' };
    const weeks = this.weeksFor(cid);
    const bk = BOOKS[cid];
    const groups = [];
    let n = 0;
    const meta = (o) => Object.assign({ week: 0, W: '', id: cid + ':meta:' + (++n), pts: 0, req: 'View', day: 1, steps: [], next: [] }, o);

    if (bk) {
      groups.push({
        id: 'books', title: 'Textbook Information', kind: 'books',
        note: 'Everything set for this course is openly licensed and free. Nothing on this course requires you to buy a book.',
        items: [
          meta({
            type: 'page', req: 'Mark done',
            title: 'About your textbook: ' + bk.title,
            overview: 'The set text for ' + c.code + '. ' + bk.publisher + '. It is free to read online, free to download as a PDF, and free to print. There is no edition to buy and no code to redeem.',
            url: bk.url, source: bk.publisher,
            steps: [
              'Open it once now and find the chapter list. You will be sent to it by chapter number every week.',
              'Download the PDF while you have Wi-Fi. It reads offline and costs you nothing afterwards.',
              'If a chapter link ever fails, the chapter number still works from the contents page.',
            ],
            next: ['Every week names its chapter in the strip at the top of the week page.'],
          }),
          meta({ type: 'link', title: 'Second explanation: ' + bk.second.title, overview: 'The same material in different words, from ' + bk.second.publisher + '. Use it on the weeks where the set chapter does not land for you.', url: bk.second.url, source: bk.second.publisher }),
          meta({ type: 'guide', title: 'National reference: ' + bk.national.title, overview: bk.national.publisher + '. This is the reference that decides an argument in Uganda. Where it differs from either textbook, it wins.', url: bk.national.url, source: bk.national.publisher }),
        ],
      });
    }

    groups.push({
      id: 'projects', title: 'Course Projects', kind: 'projects',
      note: 'Two pieces of work run across the whole term rather than inside one week. Start them in Week 01.',
      items: [
        meta({
          type: 'final', req: 'Submit', pts: 80, day: 7,
          title: 'Case portfolio: one patient, followed all term',
          overview: 'Choose one patient in Week 01 and follow them, on paper, to the end of the course. Each week adds one page: what you observed, what was given, what the guideline says, and what you would now do differently. The portfolio is what the final case is built from, so a portfolio kept weekly makes the final week ordinary rather than frightening.',
          prompt: { label: 'Rules that do not bend', q: 'No names. No facility. No photographs of charts or faces.', note: 'Write the patient as “a woman of 34” and the place as “a health centre III”. A single identifying detail returns the whole portfolio unmarked.' },
          steps: [
            'Choose the patient this week. Somebody whose treatment you will actually see more than once.',
            'Add one page every week, dated, in the same notebook.',
            'Upload the photographed pages at the end of Weeks 03 and ' + weeks.length + '.',
          ],
          next: ['Your instructor reads the Week 03 upload and comments on it before the final is set.'],
        }),
        meta({
          type: 'group', req: 'Submit', pts: 40, day: 7,
          title: 'Group unit: four learners teach one unit of the course',
          overview: 'Each group of four owns one unit of ' + c.title + ' and teaches it live at a gathering. You choose nothing about the unit and everything about how it is taught. Groups and the presenting rota are on the People page.',
          prompt: { label: 'What is marked', q: 'Whether the class can do the thing afterwards.', note: 'Not the slides, not the confidence, not the English. Your instructor asks two people from another group to explain your unit at the end of the hour.' },
          steps: [
            'Agree your roles in Week 01: who writes, who checks, who presents, who answers questions.',
            'Bring one real example and one real number from your own facility. Textbook examples score low.',
            'Upload the file with every name on it, and three lines each on what you personally did.',
          ],
          next: ['Groups that present in Weeks 02 and 05 have their file due the Tuesday before.'],
        }),
      ],
    });

    weeks.forEach((wk) => {
      const sh = this.sheet(cid, wk.no);
      if (!sh) return;
      groups.push({
        id: 'w' + wk.no, no: wk.no, kind: 'week',
        title: 'Week ' + String(wk.no).padStart(2, '0') + ': ' + wk.title,
        span: spanOf(wk.no), objective: sh.objective,
        items: buildWeek(cid, c.code, wk, sh, weeks.length),
      });
    });

    groups.push({
      id: 'resources', title: 'Student Resources', kind: 'resources',
      note: 'The same in every course. Bookmark the two you will actually need.',
      items: STANDARD_RESOURCES.map((r) => meta({ type: 'link', title: r.title, overview: r.note })),
    });

    this._mods[cid] = groups;
    return groups;
  }

  weekGroup(cid, no) { return this.modulesOf(cid).find((g) => g.kind === 'week' && g.no === no) || null; }
  flatItems(cid) { return this.modulesOf(cid).reduce((a, g) => a.concat(g.items), []); }
  itemOf(cid, id) { return this.flatItems(cid).find((x) => x.id === id) || null; }
  doneSet(cid) { return this.state.itemsDone[cid] || []; }
  isDone(cid, id) { return this.doneSet(cid).indexOf(id) !== -1; }

  toggleItemDone(cid, id) {
    this.setState((p) => {
      const cur = p.itemsDone[cid] || [];
      const nx = cur.indexOf(id) !== -1 ? cur.filter((x) => x !== id) : cur.concat(id);
      return { itemsDone: Object.assign({}, p.itemsDone, { [cid]: nx }) };
    });
  }

  weekProgress(cid, no) {
    const g = this.weekGroup(cid, no);
    if (!g) return { done: 0, total: 0, pct: 0 };
    const req = g.items.filter((x) => x.group !== 'Optional');
    const done = req.filter((x) => this.isDone(cid, x.id)).length;
    return { done, total: req.length, pct: req.length ? Math.round((done / req.length) * 100) : 0 };
  }

  seedPosts(discId) {
    const parts = String(discId).split(':');
    const wno = parseInt(String(parts[1]).replace(/[^0-9]/g, ''), 10) || 1;
    if (parts[2] === 'ice') return ICE_POSTS;
    return TEACH_POSTS[wno] || TEACH_POSTS[((wno - 1) % 5) + 1];
  }

  postsOf(discId) {
    const mine = this.state.posts[discId] || [];
    return this.seedPosts(discId).map((p, i) => Object.assign({ key: discId + '-' + i, mine: false, to: null }, p))
      .concat(mine);
  }

  myPosts(discId) { return (this.state.posts[discId] || []).filter((p) => !p.to); }
  myReplies(discId) {
    const names = {};
    (this.state.posts[discId] || []).forEach((p) => { if (p.to) names[p.to] = true; });
    return Object.keys(names);
  }

  renderVals() {
    const s = this.state;
    const w = s.w;
    const sm = w < 760;
    const lg = w >= 1180;
    const steps = this.setupSteps();
    const stepKey = steps[Math.min(s.step, steps.length - 1)];
    const st: Record<string, boolean> = {};
    SETUP_ORDER.forEach((k) => { st[k] = s.signedIn && s.setup && stepKey === k; });

    const routes = ['dashboard', 'courses', 'course', 'week', 'item', 'disc', 'calendar', 'grades', 'plan', 'inbox', 'account', 'help',
      'payConfirm', 'payMethod', 'payNumber', 'momoWaiting', 'receipt', 'payFailed', 'deposit', 'depositSent', 'statement',
      'aQueue', 'aCase', 'aMoney', 'aCourses', 'aPeople', 'aLog', 'aToday', 'aProgrammes', 'aStaff', 'aNotices', 'aPolicy',
      'aDecided', 'aAwaiting', 'aPublishing', 'iPublish',
      'iToday', 'iCourses', 'iMap', 'iSignals', 'iNotice', 'iMark', 'iLearners', 'iPonders', 'iGathering'];
    const rt: Record<string, boolean> = {};
    routes.forEach((k) => { rt[k] = s.signedIn && !s.setup && s.route === k; });

    const gateDesk = this.readDesk(s.email);
    const ACCT_TABS = [
      { id: 'profile', label: 'Profile' },
      { id: 'contact', label: 'Ways to contact' },
      { id: 'notify', label: 'Notifications' },
      { id: 'files', label: 'Files' },
      { id: 'security', label: 'Sign-in' },
      { id: 'access', label: 'Reading' },
      { id: 'notices', label: 'Announcements' },
    ];
    const ac: Record<string, boolean> = {};
    ACCT_TABS.forEach((t) => { ac[t.id] = s.acct === t.id; });
    const acctTabs = ACCT_TABS.map((t) => ({
      label: t.label,
      bg: s.acct === t.id ? '#fff' : 'transparent',
      fg: s.acct === t.id ? INK : MUTED,
      fw: s.acct === t.id ? 700 : 500,
      edge: s.acct === t.id ? NAVY : 'transparent',
      edgeW: s.acct === t.id ? '2px' : '2px',
      go: () => this.setState({ acct: t.id }),
    }));
    const globalNotices = s.notices.filter((n) => n.audience === 'all-learners');
    const p = this.pathway();
    const entry = this.entryTerm();
    const reg = this.regUnits();
    const course = this.course(s.courseId);
    const weeks = this.weeksFor(course ? course.id : '');
    const week = weeks.find((x) => x.no === s.weekNo) || weeks[0];
    const doneList = s.done[course ? course.id : ''] || [];
    const itemKey = (course ? course.id : '') + '-' + s.weekNo;
    const itemsDone = s.items[itemKey] || [];
    const sh = course ? this.sheet(course.id, week ? week.no : 1) : null;
    const bk = course ? BOOKS[course.id] : null;
    const prep = sh ? sh.prepare : [];
    const prepDone = itemsDone.filter((i) => i < prep.length);
    const courseMarks = MARKS[course ? course.id : ''] || {};
    const grade = this.gradeOf(course ? course.id : '');

    const initials = s.name.split(' ').filter(Boolean).map((x) => x[0]).join('').slice(0, 2).toUpperCase() || 'FO';
    const firstName = s.name.split(' ')[0] || 'there';

    const nextWeek = weeks.find((x) => doneList.indexOf(x.no) === -1) || weeks[weeks.length - 1];

    const isAdmin = s.role === 'admin';
    const isInstructor = s.role === 'instructor';
    const open = this.openCases();
    const spaces = this.spaces();
    const inReview = spaces.filter((x) => x.mapStatus !== 'published');

    const SECTION = {
      dashboard: 'dashboard', courses: 'courses', course: 'courses', week: 'courses', item: 'courses', disc: 'courses',
      grades: 'grades', plan: 'calendar', calendar: 'calendar',
      payConfirm: 'payments', payMethod: 'payments', payNumber: 'payments', momoWaiting: 'payments',
      receipt: 'payments', payFailed: 'payments', deposit: 'payments', depositSent: 'payments', statement: 'payments',
      inbox: 'inbox', aQueue: 'queue', aCase: 'queue', aMoney: 'money', aCourses: 'courses',
      aPeople: 'people', aLog: 'log', iToday: 'today', iCourses: 'courses', iMap: 'courses',
      aToday: 'aToday', aProgrammes: 'aProgrammes', aStaff: 'aStaff', aNotices: 'aNotices', aPolicy: 'aPolicy',
      aDecided: 'aDecided', aAwaiting: 'aAwaiting', aPublishing: 'aPublishing', iPublish: 'iPublish',
      iMark: 'iMark', iLearners: 'iLearners', iPonders: 'iPonders', iGathering: 'iGathering',
      iSignals: 'signals', iNotice: 'notices',
    };
    const activeKey = SECTION[s.route] || s.route;

    /* ── inbox ── */
    const courseTitleOf = (id) => { const u = p.units.filter((x) => x.id === id)[0]; return u ? u.code + ' · ' + u.title : 'No course · office'; };
    const mailAll = SEED_MAIL.concat(s.mailSent);
    const isRead = (m) => m.unread === 0 || s.mailRead.indexOf(m.id) !== -1;
    const isStar = (m) => (m.starred ? s.mailStar.indexOf('un-' + m.id) === -1 : s.mailStar.indexOf(m.id) !== -1);
    const isArch = (m) => m.folder === 'archived' || s.mailArchived.indexOf(m.id) !== -1;
    const notDel = (m) => s.mailDeleted.indexOf(m.id) === -1;
    const inFolder = (m) => {
      if (s.mailFolder === 'inbox') return m.folder === 'inbox' && !isArch(m);
      if (s.mailFolder === 'unread') return m.folder === 'inbox' && !isArch(m) && !isRead(m);
      if (s.mailFolder === 'starred') return isStar(m) && !isArch(m);
      if (s.mailFolder === 'sent') return m.folder === 'sent';
      if (s.mailFolder === 'archived') return isArch(m);
      return m.folder === 'submission';
    };
    const inCourseF = (m) => (s.mailCourse === 'all' ? true : s.mailCourse === 'none' ? !m.course : m.course === s.mailCourse);
    const mq = s.mailSearch.trim().toLowerCase();
    const matchQ = (m) => !mq || (m.subject + ' ' + m.participants.join(' ') + ' ' + m.msgs.map((x) => x.body).join(' ')).toLowerCase().indexOf(mq) !== -1;
    const mailList = mailAll.filter((m) => notDel(m) && inFolder(m) && inCourseF(m) && matchQ(m));
    const unreadMail = mailAll.filter((m) => notDel(m) && m.folder === 'inbox' && !isArch(m) && !isRead(m)).length;
    const curMail = s.mailSel ? mailAll.filter((m) => m.id === s.mailSel && notDel(m))[0] || null : null;
    const mailFolderCount = (fid) => mailAll.filter((m) => {
      if (!notDel(m)) return false;
      if (fid === 'inbox') return m.folder === 'inbox' && !isArch(m);
      if (fid === 'unread') return m.folder === 'inbox' && !isArch(m) && !isRead(m);
      if (fid === 'starred') return isStar(m) && !isArch(m);
      if (fid === 'sent') return m.folder === 'sent';
      if (fid === 'archived') return isArch(m);
      return m.folder === 'submission';
    }).length;
    const mailChecked = s.mailChecked.filter((id) => mailList.some((m) => m.id === id));
    const mailTargets = mailChecked.length ? mailChecked : (curMail ? [curMail.id] : []);

    const learnerNav = [
      { key: 'dashboard', label: 'Now', wide: 'Dashboard', icon: I.dashboard(), go: () => this.go('dashboard') },
      { key: 'courses', label: 'Courses', wide: 'Courses', icon: I.book(), go: () => this.go('courses') },
      { key: 'calendar', label: 'Calendar', wide: 'Calendar', icon: I.calendar(), go: () => this.go('calendar') },
      { key: 'inbox', label: 'Inbox', wide: 'Inbox', icon: I.inbox(), badge: unreadMail ? String(unreadMail) : null, go: () => this.go('inbox') },
      { key: 'payments', label: 'Pay', wide: 'Payments', icon: I.card(), go: () => this.go(s.paid ? 'statement' : 'payConfirm') },
    ];
    const RAIL_ICON = {
      aToday: I.dashboard, aDecide: I.gavel, aMoney: I.card, aPeople: I.people, aStruct: I.book, aLog: I.log,
      iToday: I.dashboard, iMark: I.signals, iCourses: I.book, iLearners: I.people,
    };
    const railBadge = {
      aDecide: open.length,
      aStruct: inReview.length,
      iMark: SUBMISSIONS.filter((x) => s.returned.indexOf(x.id) === -1).length + Object.keys(s.handed).length,
    };
    const deskRail = (isAdmin ? DESK_RAIL.admin : DESK_RAIL.instructor).map((r) => ({
      key: r.key, label: r.label, wide: r.label,
      icon: (RAIL_ICON[r.key] || I.dashboard)(),
      badge: railBadge[r.key] ? String(railBadge[r.key]) : null,
      go: () => this.setState({ route: r.route, caseId: null, markOpenId: null }),
    }));
    const adminNav = deskRail;
    const instructorNav = deskRail;
    const nav: any[] = isAdmin ? adminNav : isInstructor ? instructorNav : learnerNav;
    const railDef = nav.map((x) => Object.assign({}, x, { label: x.wide }));
    const tabDef = nav.concat([{ key: 'account', label: 'More', icon: I.more(), go: () => this.go('account') }]);

    const recordRoute = ['aMoney', 'aCourses', 'aPeople', 'aLog', 'iCourses', 'iSignals', 'statement', 'courses', 'plan', 'inbox'].indexOf(s.route) !== -1;
    const product = this.product();
    const walletName = s.wallet === 'mtn' ? 'MTN Mobile Money' : 'Airtel Money';
    const mm = String(Math.floor(s.left / 60));
    const ssx = String(s.left % 60).padStart(2, '0');

    const allCases = this.cases();
    const kase = allCases.find((c) => c.id === s.caseId) || open[0] || allCases[allCases.length - 1];
    const decided = Object.keys(s.verdicts).map((k) => s.verdicts[k]);

    const mosesV = s.verdicts['pay-0002'];
    const slipV = s.slipSent ? s.verdicts['slip-' + s.slipSent] : null;
    const selfStatus = s.paid ? 'Verified' : s.slipSent ? (slipV ? (slipV.ok ? 'Verified' : 'Not found') : 'Awaiting') : s.attempts.length ? s.attempts[0].status : 'Not started';
    const ledger = [
      { ref: 'DF-MIDWIFERY-Y2S2-2026-0002', who: 'Moses Kato', meta: 'Airtel Money · 075 ••• 318 · 2 Sep 2026, 07:12', status: mosesV ? mosesV.word : 'Awaiting', value: AMOUNT, by: mosesV ? 'Amara Kato' : 'Nobody yet' },
      { ref: s.slipSent ? 'Bank deposit · ' + s.slipSent : this.ref(), who: s.name, meta: s.slipSent ? 'Branch deposit · today · 08:34' : walletName + ' · ' + this.mask() + ' · 4 Sep 2026', status: selfStatus, value: AMOUNT, by: s.paid ? (s.slipSent ? 'Amara Kato' : 'Payment gateway') : 'Nobody yet' },
    ].concat(SETTLED.map((x) => Object.assign({}, x)));
    const tone = (st) => (st === 'Verified' || st === 'Matched' ? GREEN : st === 'Awaiting' ? CLAY : st === 'Declined' || st === 'Not found' || st === 'Failed' || st === 'Expired' ? '#a03a2a' : FAINT);
    const sumOf = (test) => ledger.filter((l) => test(l.status)).reduce((t, l) => t + l.value, 0);

    const roster = [{ id: 'learner-fred', name: s.name, programme: p.credential, semester: entry.label, access: s.paid ? 'active' : 'pending-payment', seen: 'Just now', streak: s.sessions }].concat(LEARNERS);
    const accessWord = { active: 'Access open', 'pending-payment': 'Awaiting payment', 'clearance-review': 'In clearance' };
    const accessTone = { active: GREEN, 'pending-payment': CLAY, 'clearance-review': FAINT };

    const mySpace = this.space(s.spaceId);
    const statusWord = { published: 'Published', 'in-review': 'In review', draft: 'Draft', archived: 'Archived' };
    const statusTone = { published: GREEN, 'in-review': CLAY, draft: FAINT, archived: FAINT };
    const checksDone = s.checks.every(Boolean);
    const blocked = inReview.reduce((t, x) => t + x.learners, 0);

    const myNotices = s.notices.filter((n) => n.audience === 'all-learners' || (n.space && reg.some((u) => n.space.indexOf(u.title.toLowerCase().split(' ')[0]) !== -1)) || n.space === 'course-pharmacology' || n.space === 'course-surgical');

    const sessionDays = ['Saturday', 'Sunday', 'Tuesday', 'Thursday', 'Friday', 'Monday', 'Wednesday'].slice(0, s.sessions);

    /* ── course architecture ── */
    const cid = course ? course.id : '';
    const inCourse = s.signedIn && !s.setup && ['course', 'week', 'item', 'disc'].indexOf(s.route) !== -1;
    const cnavOpen = s.cnav;
    const mods = cid ? this.modulesOf(cid) : [];
    const flat = cid ? this.flatItems(cid) : [];
    const cs: Record<string, boolean> = {};
    COURSE_NAV.forEach((n) => { cs[n.id] = rt.course && s.csec === n.id; });
    const visWeeks = cid ? this.visibleWeeks(cid) : [];
    const wkGroup = cid ? this.weekGroup(cid, s.weekNo) : null;
    const wkItems = wkGroup ? wkGroup.items : [];
    const wkProg = cid ? this.weekProgress(cid, s.weekNo) : { done: 0, total: 0, pct: 0 };
    const curItem = cid && s.itemId ? this.itemOf(cid, s.itemId) : null;
    const fIdx = curItem ? flat.map((x) => x.id).indexOf(curItem.id) : -1;
    const prevIt = fIdx > 0 ? flat[fIdx - 1] : null;
    const nextIt = fIdx > -1 && fIdx < flat.length - 1 ? flat[fIdx + 1] : null;
    const itemDone = curItem ? this.isDone(cid, curItem.id) : false;
    const curHand = curItem ? this.handOf(curItem.id) : null;
    const handState = curHand ? curHand.state : null;
    const needsHandIn = !!(curItem && curItem.pts > 0 && ['Submit', 'Take', 'Post'].indexOf(curItem.req) !== -1);
    const handWord = handState === 'returned' ? 'Returned' : handState === 'marking' ? 'Being marked' : 'Handed in';
    const gradedItems = flat.filter((x) => x.pts > 0).slice().sort((a, b) => (a.week - b.week) || (a.day - b.day));
    const todoItems = gradedItems.filter((x) => x.week && !this.isDone(cid, x.id)).slice(0, 6);
    const discItems = flat.filter((x) => x.type === 'discussion');
    const discOwed = discItems.filter((x) => this.myPosts(x.disc).length === 0 || this.myReplies(x.disc).length < 2).length;
    const allClosed = mods.length > 0 && mods.every((g) => !!s.modClosed[g.id]);

    const handed = gradedItems.filter((x) => this.isDone(cid, x.id)).slice(-3).reverse();
    const feedbackRows = handed.length
      ? handed.map((x) => ({ title: x.title, mark: '— / ' + x.pts + ' pts', tone: FAINT, note: 'Handed in · a person marks this inside five working days.' }))
      : [{ title: 'Nothing has been returned yet', mark: '', tone: FAINT, note: 'Work you hand in appears here with its mark and the comments written on it.' }];

    const totalPts = flat.reduce((t, x) => t + x.pts, 0) || 1;
    const pointGroups = MOVEMENTS.filter((m) => flat.some((x) => x.group === m.id && x.pts > 0)).map((m) => {
      const list = flat.filter((x) => x.group === m.id && x.pts > 0);
      const all = list.reduce((t, x) => t + x.pts, 0);
      const marked = list.filter((x) => typeof courseMarks[x.mark] === 'number');
      const got = marked.reduce((t, x) => t + courseMarks[x.mark], 0);
      return {
        label: m.label, note: m.note.split('.')[0] + '.',
        weight: Math.round((all / totalPts) * 100) + '%',
        got: marked.length ? got + ' / ' + marked.reduce((t, x) => t + x.pts, 0) : '—',
        all: all + ' pts total',
        fg: marked.length ? INK : FAINT,
      };
    });

    let cgGot = 0; let cgOut = 0;
    gradedItems.forEach((x) => { const m = courseMarks[x.mark]; if (typeof m === 'number') { cgGot += m; cgOut += x.pts; } });
    const courseGrade = { pct: cgOut ? (cgGot / cgOut) * 100 : null };

    const itemRow = (it) => {
      const dn = this.isDone(cid, it.id);
      const bits = [TYPE[it.type].word];
      if (it.pts > 0) bits.push(it.pts + ' pts');
      if (it.week) bits.push('due ' + dLabel(it.week, it.day));
      bits.push(it.req);
      return {
        title: it.title, icon: TYPE[it.type].icon(), meta: bits.join(' · '),
        fg: '#4a5a8a', iconFg: dn ? NAVY : FAINT,
        indent: it.group === 'Optional' ? (sm ? '32px' : '46px') : '16px',
        edge: dn ? NAVY : 'transparent',
        dotBd: dn ? NAVY : LINE, dotBg: dn ? NAVY : '#fff', dot: dn ? 1 : 0,
        tickWord: dn ? 'Done' : 'Mark done',
        tick: () => this.toggleItemDone(cid, it.id),
        state: dn ? 'Done' : it.pts > 0 ? 'Open' : '',
        tone: dn ? GREEN : FAINT,
        go: () => this.go('item', { itemId: it.id, weekNo: it.week || s.weekNo }),
      };
    };

    const weekRefs = sh ? [{ tag: 'Set chapter', title: sh.book.chapter + ' · ' + sh.book.title, url: sh.book.url, source: bk ? bk.title + ' · ' + bk.publisher : '' }]
      .concat(bk ? [
        { tag: 'Second reading', title: bk.second.title, url: bk.second.url, source: bk.second.publisher },
        { tag: 'National', title: bk.national.title, url: bk.national.url, source: bk.national.publisher },
      ] : [])
      .concat(sh.prepare.filter((p) => p.kind === 'Guideline' || p.kind === 'Reference').slice(0, 1).map((p) => ({ tag: p.kind, title: p.title, url: p.url, source: p.source })))
      : [];

    const matSeen = {};
    const prepRows = [];
    weeks.forEach((x) => {
      const shx = this.sheet(cid, x.no);
      if (!shx) return;
      shx.prepare.forEach((p) => {
        if (matSeen[p.url]) return;
        matSeen[p.url] = true;
        prepRows.push({ title: p.title, url: p.url, meta: p.source, tag: p.kind, icon: (p.kind === 'Video' ? CI.video : p.kind === 'Guideline' ? CI.guide : CI.reading)() });
      });
    });
    const materialGroups = [{
      title: 'Set textbook · chapter by chapter',
      rows: weeks.map((x) => {
        const shx = this.sheet(cid, x.no);
        return shx ? { title: 'Week ' + String(x.no).padStart(2, '0') + ' · ' + shx.book.chapter + ' · ' + shx.book.title, url: shx.book.url, meta: bk ? bk.title + ' · ' + bk.publisher : '', tag: 'Free', icon: CI.reading() } : null;
      }).filter(Boolean),
    }].concat(bk ? [{
      title: 'Second and national references',
      rows: [
        { title: bk.second.title, url: bk.second.url, meta: bk.second.publisher, tag: 'Free', icon: CI.reading() },
        { title: bk.national.title, url: bk.national.url, meta: bk.national.publisher, tag: 'PDF', icon: CI.guide() },
      ],
    }] : []).concat(prepRows.length ? [{ title: 'Everything Prepare sends you to', rows: prepRows }] : []);

    const discItem = cid && s.discId ? (flat.filter((x) => x.disc === s.discId && x.type === 'discussion')[0] || flat.filter((x) => x.disc === s.discId)[0] || null) : null;
    const board = s.discId ? this.postsOf(s.discId) : [];
    const mineOnBoard = s.discId ? (s.posts[s.discId] || []) : [];
    const boardReplies = board.reduce((t, p) => t + (p.replies || 0), 0);
    const myPostCount = s.discId ? this.myPosts(s.discId).length : 0;
    const myReplyNames = s.discId ? this.myReplies(s.discId) : [];
    const trackDone = myPostCount > 0 && myReplyNames.length >= 2;
    const draftWords = s.postDraft.trim() ? s.postDraft.trim().split(/\s+/).length : 0;
    const replyWords = s.replyDraft.trim() ? s.replyDraft.trim().split(/\s+/).length : 0;
    const dq = s.discSearch.trim().toLowerCase();
    const rootPosts = board.filter((p) => !p.to);
    const searched = dq ? rootPosts.filter((p) => (p.body + ' ' + p.who).toLowerCase().indexOf(dq) !== -1) : rootPosts;
    const ordered = s.discSort === 'oldest' ? searched : searched.slice().reverse();
    const shownPosts = ordered.map((p, i) => {
      const kids = mineOnBoard.filter((r) => r.to === p.who);
      const ini = String(p.who).split(' ').filter(Boolean).map((x) => x[0]).join('').slice(0, 2).toUpperCase();
      return {
        who: p.who, when: p.when, body: p.body,
        initials: p.mine && s.photo ? '' : ini,
        avBg: p.mine ? NAVY : '#eef1f4',
        avFg: p.mine ? '#fff' : '#4c545f',
        avPhoto: p.mine ? s.photo : '',
        nameFg: p.mine ? NAVY : INK,
        isHost: !!p.host,
        topBd: i === 0 ? NAVY : '#eef1f4',
        replyMeta: p.mine ? 'Your entry' : (p.replies || 0) + ((p.replies || 0) === 1 ? ' reply' : ' replies') + (s.unreadPosts[p.key] ? ' · kept unread' : ''),
        replyWord: kids.length ? 'Reply again' : 'Reply',
        unreadWord: s.unreadPosts[p.key] ? 'Marked unread' : 'Mark as unread',
        unread: () => this.setState((pr) => ({ unreadPosts: Object.assign({}, pr.unreadPosts, { [p.key]: !pr.unreadPosts[p.key] }) })),
        reply: () => this.setState({ replyTo: p.who, replyDraft: '' }),
        replying: s.replyTo === p.who,
        hasKids: kids.length > 0 && s.threadsOpen,
        kids: kids.map((k) => ({ who: k.who, when: k.when, body: k.body, initials: s.photo ? '' : initials, avBg: NAVY, avPhoto: s.photo, tag: 'Counts toward your two replies', tone: GREEN })),
      };
    });

    const crumbs: any[] = [{ label: course ? course.code : 'Course', go: () => this.setState({ route: 'course', csec: 'home', itemId: null, discId: null }) }];
    if (rt.week || rt.item || rt.disc) crumbs.push({ label: 'Modules', go: () => this.setState({ route: 'course', csec: 'modules' }) });
    if (rt.week) crumbs.push({ label: 'Week ' + String(s.weekNo).padStart(2, '0') });
    if (rt.item && curItem) crumbs.push({ label: curItem.title });
    if (rt.disc && discItem) crumbs.push({ label: discItem.title });
    if (rt.course && s.csec !== 'home') crumbs.push({ label: (COURSE_NAV.filter((n) => n.id === s.csec)[0] || {}).label || '' });

    /* ── calendar ── */
    const allDue = [];
    reg.forEach((u) => {
      if (this.weeksFor(u.id).length === 0) return;
      this.flatItems(u.id).forEach((x) => { if (x.pts > 0 && x.week) allDue.push({ code: u.code, courseId: u.id, it: x, d: dayOf(x.week, x.day) }); });
    });
    const calStart = new Date(2026, 7, 31);
    const calToday = new Date(2026, 8, 4);
    const calCells = [];
    for (let ci = 0; ci < 35; ci++) {
      const d = new Date(calStart.getTime());
      d.setDate(d.getDate() + ci);
      const on = allDue.filter((x) => x.d.getMonth() === d.getMonth() && x.d.getDate() === d.getDate());
      const isToday = d.getMonth() === calToday.getMonth() && d.getDate() === calToday.getDate();
      calCells.push({
        no: String(d.getDate()),
        month: d.getMonth() === 8 ? '' : MON[d.getMonth()],
        bg: isToday ? '#1b1e2b' : on.length ? '#fff' : '#fbfcfd',
        fg: isToday ? '#fff' : d.getMonth() === 8 ? INK : '#b6bec7',
        bd: isToday ? NAVY : '#eef1f4',
        count: on.length ? String(on.length) : '',
        dots: on.slice(0, 3).map(() => ({ bg: isToday ? 'rgba(255,255,255,0.8)' : NAVY })),
        label: on.length ? (on.length === 1 ? TYPE[on[0].it.type].word : TYPE[on[0].it.type].word + ' +' + (on.length - 1)) : '',
        go: on.length ? () => this.go('item', { courseId: on[0].courseId, itemId: on[0].it.id, weekNo: on[0].it.week }) : () => {},
        cursor: on.length ? 'pointer' : 'default',
      });
    }
    const calList = allDue.slice().sort((a, b) => a.d - b.d).filter((x) => x.d >= calToday).slice(0, 9).map((x) => ({
      date: MON[x.d.getMonth()] + ' ' + x.d.getDate(),
      day: WEEKDAY[(x.d.getDay() + 6) % 7],
      title: x.it.title, code: x.code,
      meta: TYPE[x.it.type].word + ' · ' + x.it.pts + ' pts',
      go: () => this.go('item', { courseId: x.courseId, itemId: x.it.id, weekNo: x.it.week }),
    }));

    /* ── desk (admin + instructor) ── */
    const deskKeys = Object.keys(DESK_MAP).concat(['aCase', 'iMap', 'iSignals']);
    const inDesk = s.signedIn && !s.setup && (isAdmin || isInstructor) && deskKeys.indexOf(s.route) !== -1;
    const unmarked = SUBMISSIONS.filter((x) => s.returned.indexOf(x.id) === -1);
    const ponderUnread = PONDERS.filter((x) => s.ponderRead.indexOf(x.id) === -1);
    const riskOf = (name, i) => {
      const flags = [];
      if (i % 3 === 0) flags.push('No post this week');
      if (i % 4 === 1) flags.push('Quiz not attempted');
      if (i % 5 === 2) flags.push('Silent 7 days');
      if (i % 6 === 4) flags.push('Gathering missed twice');
      return flags;
    };
    const atRisk = CLASSMATES.filter((c, i) => riskOf(c.name, i).length > 0).length;
    const myHand = this.myQueue();
    const teachIds = ['cn211-pharmacology-1', 'cn211-medical-nursing-1', 'df000-foundations'];
    let draftWeeks = 0;
    teachIds.forEach((cid2) => { this.weeksFor(cid2).forEach((w2) => { if (this.pubOf(cid2, w2.no) !== 'published') draftWeeks++; }); });
    const markQueue = SUBMISSIONS.map((x) => Object.assign({ own: false }, x))
      .concat(myHand.map((h) => ({
        id: h.id, own: true, name: h.learner || 'Fred Samson Okorio', course: (this.course(h.courseId) || { code: '' }).code,
        item: h.title, week: h.week || 1, when: h.when, outOf: h.pts || 10, late: false,
        body: 'Handed in from this device during the walkthrough. Open it to mark it and the learner sees the result on their own item page and grades.',
        rubric: [{ t: 'Answers the task that was set', pts: Math.round((h.pts || 10) * 0.4) }, { t: 'Evidence or working shown', pts: Math.round((h.pts || 10) * 0.3) }, { t: 'Own words, no patient names', pts: (h.pts || 10) - Math.round((h.pts || 10) * 0.4) - Math.round((h.pts || 10) * 0.3) }],
      })));
    const stateOf = (id) => (s.returned.indexOf(id) !== -1 ? 'returned' : s.markStarted.indexOf(id) !== -1 ? 'marking' : 'submitted');
    const unreturned = markQueue.filter((x) => stateOf(x.id) !== 'returned');
    const pubCid = s.pubCid || 'cn211-pharmacology-1';
    const decidedList = Object.keys(s.verdicts).filter((k) => k.indexOf('slip-') !== 0).map((k) => {
      const v = s.verdicts[k];
      const c = this.cases().filter((x) => x.id === k)[0];
      return {
        id: k, ok: !!v.ok, verdict: v.word || (v.ok ? 'Approved' : 'Refused'),
        who: c ? c.who : k, what: c ? c.what : 'Decision recorded from this desk',
        by: (v.by || 'Amara Kato') + ' · ' + (v.when || 'today'),
      };
    });
    const awaitRows = [{
      who: 'Moses Kato', meta: 'Bank deposit · Centenary branch · slip 4471902 · 2 Sep 2026',
      status: 'Awaiting a person', tone: CLAY, value: 'UGX ' + money(AMOUNT),
      go: () => this.go('aMoney'),
    }, {
      who: 'Grace Adeke', meta: 'Bank deposit · Stanbic branch · slip 4471955 · 3 Sep 2026',
      status: 'Awaiting a person', tone: CLAY, value: 'UGX ' + money(AMOUNT),
      go: () => this.go('aMoney'),
    }];
    const deskRailKey = DESK_MAP[s.route] || (isAdmin ? 'aToday' : 'iToday');
    const subCount = {
      aQueue: open.length, aAwaiting: awaitRows.length, aPublishing: draftWeeks,
      iPublish: draftWeeks, iPonders: ponderUnread.length,
    };
    const deskSubDef = (DESK_SUB[deskRailKey] || []).map((n) => Object.assign({}, n, { count: subCount[n.route] || 0 }));
    const deskActive = s.route === 'aCase' ? 'aQueue' : s.route === 'iMap' ? 'iCourses' : s.route;
    const markList = markQueue.filter((x) => {
      const st = stateOf(x.id);
      if (s.markFilter === 'open') return st === 'submitted';
      if (s.markFilter === 'marking') return st === 'marking';
      if (s.markFilter === 'returned') return st === 'returned';
      if (s.markFilter === 'late') return x.late;
      return true;
    });

    return {
      // responsive
      showRail: !sm,
      showTabs: sm,
      showPanel: lg && rt.dashboard,
      showSearch: !sm,
      showChip: !sm,
      showNextArt: !sm,
      gut: sm ? '16px' : '26px',
      barH: sm ? '58px' : '72px',
      mainPad: sm ? '22px 16px 30px' : lg ? '34px 34px 56px' : '28px 26px 48px',
      setupPad: sm ? '28px 18px 26px' : '46px 24px 40px',
      contentMax: inCourse || inDesk ? '1180px' : recordRoute ? '1120px' : lg ? '860px' : '760px',
      tileCols: 'repeat(3, minmax(0,1fr))',
      tilePad: sm ? '15px 12px' : '20px',
      recCols: sm ? 'minmax(0,1fr)' : lg ? 'repeat(3, minmax(0,1fr))' : 'repeat(2, minmax(0,1fr))',
      twoCols: lg ? 'minmax(0,1fr) 340px' : 'minmax(0,1fr)',
      caseCols: lg ? 'minmax(0,1fr) 320px' : 'minmax(0,1fr)',
      rowCols: sm ? 'minmax(0,1fr) auto' : '150px minmax(0,1fr) auto',
      ledgerCols: sm ? 'minmax(0,1fr) auto' : 'minmax(0,1fr) 130px 96px',
      spaceCols: sm ? 'minmax(0,1fr) auto' : 'minmax(0,1fr) 120px 110px 96px',
      peopleCols: sm ? 'minmax(0,1fr) auto' : 'minmax(0,1fr) 190px 120px 96px',
      blockGap: sm ? '26px' : '34px',
      cardPad: sm ? '20px' : '26px',
      h1: sm ? '27px' : '36px',
      h2: sm ? '22px' : '26px',
      h3: sm ? '18px' : '21px',
      statCols: sm ? 'repeat(2, minmax(0,1fr))' : 'repeat(4, minmax(0,1fr))',
      courseCols: sm ? 'minmax(0,1fr)' : 'repeat(auto-fill, minmax(232px, 1fr))',
      nextCols: sm ? 'minmax(0,1fr)' : 'minmax(0,1fr) 210px',
      weekBodyCols: lg ? 'minmax(0,1fr) 272px' : 'minmax(0,1fr)',
      agendaCols: sm ? '58px minmax(0,1fr) 16px' : '92px minmax(0,1fr) 16px',
      weekCols: sm ? '30px minmax(0,1fr) auto' : '30px minmax(0,1fr) 96px',
      sumCols: sm ? 'minmax(0,1fr) auto' : '120px minmax(0,1fr) auto',
      tabCount: tabDef.length,

      // identity
      st, rt,
      atGate: !s.signedIn,
      inSetup: s.signedIn && s.setup,
      inApp: s.signedIn && !s.setup,
      email: s.email,
      pass: s.pass,
      setEmail: (e) => this.setState({ email: e.target.value, gateError: '' }),
      setPass: (e) => this.setState({ pass: e.target.value, gateError: '' }),
      gateKey: (e) => { if (e.key === 'Enter') this.enter(); },
      signIn: () => this.enter(),
      signOut: () => this.leave(),
      gateErr: !!s.gateError,
      gateError: s.gateError,
      gateRead: !!gateDesk.dom,
      gateReadText: gateDesk.role
        ? gateDesk.dom + ' → ' + (gateDesk.role === 'learner' ? 'learner desk' : gateDesk.role === 'instructor' ? 'instructor desk' : 'administrator desk')
        : gateDesk.dom + ' → no desk',
      gateReadTone: gateDesk.role ? GREEN : CLAY,
      gateCols: w < 900 ? 'minmax(0,1fr)' : '1fr 1fr',
      gateAsideShow: w < 900 ? 'none' : 'flex',
      gatePad: sm ? '40px 22px' : '48px 40px',
      gateAccounts: DIRECTORY.map((d) => ({ email: d.email, who: d.who, desk: d.desk, use: () => this.setState({ email: d.email, pass: 'preview', gateError: '' }) })),
      name: s.name,
      initials: isAdmin ? 'AK' : isInstructor ? 'GN' : initials,
      whoName: isAdmin ? 'Amara Kato' : isInstructor ? 'Grace Nalubega' : s.name,
      roleWord: isAdmin ? 'Academic operations' : isInstructor ? 'Clinical instruction' : 'Revision space',
      greeting: s.paid ? 'Welcome back, ' + firstName + '.' : 'One thing first, ' + firstName + '.',
      today: 'Friday, 4 September',
      credential: p.credential,
      srcTitle: p.srcTitle, srcUrl: p.srcUrl,
      entryLabel: entry.label, entryPeriod: entry.period,
      sessions: s.sessions,
      unread: !s.read,
      paid: s.paid, unpaid: !s.paid,
      pageTitle: {
        dashboard: 'Dashboard', courses: isAdmin ? 'Course operations' : 'Courses', course: course ? course.title : 'Course',
        week: 'Week ' + String(s.weekNo).padStart(2, '0'), item: curItem ? curItem.title : 'Course item', disc: discItem ? discItem.title : 'Discussion',
        calendar: 'Calendar', grades: 'Grades', plan: 'Study plan', inbox: 'Inbox', account: 'Account', help: 'Help',
        payConfirm: 'Payment', payMethod: 'Payment', payNumber: 'Payment', momoWaiting: 'Payment', receipt: 'Receipt',
        payFailed: 'Payment', deposit: 'Bank deposit', depositSent: 'Bank deposit', statement: 'Statement',
        aQueue: 'Decision queue', aCase: kase ? kase.kind + ' · ' + kase.who : 'Decision', aMoney: 'Money',
        aCourses: 'Course operations', aPeople: 'People', aLog: 'Log',
        iToday: 'Today', iCourses: 'Course spaces', iMap: mySpace.title, iSignals: 'Signals', iNotice: 'Notices',
        aToday: 'Today', aProgrammes: 'Programmes', aStaff: 'Staff', aNotices: 'Announcements', aPolicy: 'Fees and access',
        aDecided: 'Already decided', aAwaiting: 'Awaiting a person', aPublishing: 'Publishing', iPublish: 'Publishing',
        iMark: 'Marking', iLearners: 'Learners', iPonders: 'Ponders', iGathering: 'Gathering',
      }[s.route] || 'Deep Focus',
      pageMeta: isAdmin ? 'Amara Kato · administrator' : isInstructor ? 'Grace Nalubega · six assigned spaces' : p.credential + ' · ' + entry.label,

      // setup
      stepNo: Math.min(s.step + 1, steps.length),
      stepTotal: steps.length,
      stepPct: Math.round(((s.step + 1) / steps.length) * 100) + '%',
      pathwayChoices: Object.keys(PATHWAYS).map((k) => {
        const it = PATHWAYS[k];
        const on = s.pathwayId === k;
        return {
          credential: it.credential, summary: it.summary,
          termCount: TERMS.length, unitCount: it.units.length,
          bd: on ? NAVY : '#e4e8ec', bg: on ? '#fafbfc' : '#fff',
          mb: on ? NAVY : LINE, mf: on ? NAVY : '#fff', dot: on ? 1 : 0,
          pick: () => this.setState({ pathwayId: k, registered: [] }),
        };
      }),
      termChoices: TERMS.map((t) => {
        const on = s.entryTermId === t.id;
        return {
          label: t.label, period: t.period, units: this.termUnits(t.id).length,
          bg: on ? '#fafbfc' : 'transparent', fw: on ? 700 : 500,
          mb: on ? NAVY : LINE, mf: on ? NAVY : '#fff', dot: on ? 1 : 0,
          pick: () => this.setState({ entryTermId: t.id, registered: [], clearedTermIds: [] }),
        };
      }),
      priorTerms: this.priorTerms().map((t) => {
        const on = s.clearedTermIds.indexOf(t.id) !== -1;
        return {
          label: t.label, period: t.period,
          mb: on ? NAVY : LINE, mf: on ? NAVY : '#fff', dot: on ? 1 : 0,
          stateWord: on ? 'Cleared' : 'Not recorded',
          stateColor: on ? GREEN : FAINT,
          toggle: () => this.setState((pr) => ({ clearedTermIds: pr.clearedTermIds.indexOf(t.id) !== -1 ? pr.clearedTermIds.filter((x) => x !== t.id) : pr.clearedTermIds.concat(t.id) })),
        };
      }),
      clearedBlocked: false,
      clearedBtnBg: NAVY,
      clearedCursor: 'pointer',
      clearedBtnLabel: s.clearedTermIds.length === 0 ? 'Nothing cleared yet — continue' : 'Continue with ' + s.clearedTermIds.length + (s.clearedTermIds.length === 1 ? ' semester' : ' semesters'),
      clearedNote: s.clearedTermIds.length === 0 ? 'Leave these empty if your school has not confirmed them. You can record them later.' : 'A private planning record. It awards no credit and changes no result.',
      weekDots: DAYS.map((d, i) => ({ day: d, bg: i < s.sessions ? NAVY : '#eef1f4' })),
      unitChoices: this.termUnits(s.entryTermId).map((u) => {
        const on = s.registered.indexOf(u.id) !== -1;
        return {
          title: u.title, code: u.code,
          mb: on ? NAVY : LINE, mf: on ? NAVY : '#fff', dot: on ? 1 : 0,
          mapWord: u.map ? 'Map ready' : 'No map yet',
          mapColor: u.map ? GREEN : FAINT,
          toggle: () => this.setState((pr) => ({ registered: pr.registered.indexOf(u.id) !== -1 ? pr.registered.filter((x) => x !== u.id) : pr.registered.concat(u.id) })),
        };
      }),
      noUnits: s.registered.length === 0,
      unitsBtnBg: s.registered.length === 0 ? '#c3cad2' : NAVY,
      unitsCursor: s.registered.length === 0 ? 'not-allowed' : 'pointer',
      unitsBtnLabel: s.registered.length === 0 ? 'Choose at least one' : 'Register ' + s.registered.length + (s.registered.length === 1 ? ' course' : ' courses'),
      summaryRows: [
        { k: 'Name', v: s.name, edit: () => this.setState({ step: 0 }) },
        { k: 'Certificate', v: p.credential, edit: () => this.setState({ step: steps.indexOf('certificate') }) },
        { k: 'Joining', v: entry.label + ' · ' + entry.period, edit: () => this.setState({ step: steps.indexOf('entry') }) },
        { k: 'Cleared', v: s.clearedTermIds.length ? s.clearedTermIds.map((id) => (TERMS.find((t) => t.id === id) || {}).label).join(', ') : 'Nothing recorded', edit: () => this.setState({ step: Math.max(steps.indexOf('cleared'), 0) }) },
        { k: 'Rhythm', v: s.sessions + ' sessions each week', edit: () => this.setState({ step: steps.indexOf('rhythm') }) },
        { k: 'Courses', v: reg.map((u) => u.title).join(', ') || 'None yet', edit: () => this.setState({ step: steps.indexOf('courses') }) },
      ],

      setName: (e) => this.setState({ name: e.target.value }),
      next: () => this.setState((pr) => ({ step: Math.min(pr.step + 1, this.setupSteps().length - 1) })),
      back: () => this.setState((pr) => ({ step: Math.max(pr.step - 1, 0) })),
      fewer: () => this.setState((pr) => ({ sessions: Math.max(1, pr.sessions - 1) })),
      more: () => this.setState((pr) => ({ sessions: Math.min(7, pr.sessions + 1) })),
      finishSetup: () => this.setState({ setup: false, route: 'dashboard' }),

      // rail + tabs
      railItems: railDef.map((r) => ({
        label: r.label, icon: r.icon, badge: r.badge, go: r.go,
        edge: activeKey === r.key ? '#fff' : 'transparent',
        bg: activeKey === r.key ? 'rgba(255,255,255,0.09)' : 'transparent',
        fg: activeKey === r.key ? '#fff' : 'rgba(255,255,255,0.62)',
      })),
      railAccountEdge: 'transparent',
      tabs: tabDef.map((t) => ({
        label: t.label, icon: t.icon, badge: t.key === 'inbox' ? s.unread : false, go: t.go,
        fg: activeKey === t.key ? INK : FAINT,
        edge: activeKey === t.key ? INK : 'transparent',
      })),

      // dashboard
      stats: [
        { k: 'Courses', v: String(reg.length), d: entry.label },
        { k: 'Weeks cleared', v: String(reg.reduce((t, u) => t + this.doneCount(u.id), 0)), d: 'This semester' },
        { k: 'Rhythm', v: s.sessions + '×', d: 'Sessions each week' },
        { k: 'Balance', v: s.paid ? '0' : '58k', d: s.paid ? 'Settled' : 'UGX 58,000 due' },
      ],
      nextCourse: course ? course.title : '—',
      nextCover: this.coverFor(course) || 'assets/pharmacology.jpeg',
      nextWeekNo: nextWeek ? nextWeek.no : 1,
      nextWeekTitle: nextWeek ? nextWeek.title : '',
      nextDone: doneList.length,
      nextTotal: weeks.length,
      nextPct: Math.round((doneList.length / weeks.length) * 100) + '%',
      agenda: [
        { when: 'Tomorrow', what: 'Focus block · 45 minutes', where: course ? course.title : '', go: () => this.go('week', { weekNo: nextWeek ? nextWeek.no : 1 }) },
        { when: 'Thursday', what: 'Focus block · 45 minutes', where: 'After shift', go: () => this.go('week', { weekNo: nextWeek ? nextWeek.no : 1 }) },
        { when: 'Sunday', what: 'Focus block · 90 minutes', where: 'Quiet afternoon', go: () => this.go('week', { weekNo: nextWeek ? nextWeek.no : 1 }) },
      ],

      // courses
      courseCount: reg.length,
      courses: reg.map((u) => {
        const ws = this.weeksFor(u.id);
        const dn = this.doneCount(u.id);
        const none = ws.length === 0;
        return {
          title: u.title, code: u.code, cover: this.coverFor(u),
          tint: this.coverFor(u) ? 'transparent' : '#e7ecef',
          plate: this.coverFor(u) ? 'none' : 'grid',
          pct: none ? '0%' : Math.round((dn / ws.length) * 100) + '%',
          stateWord: none ? 'Not published' : u.free ? (dn === 0 ? 'Free · open now' : dn >= ws.length ? 'Free · complete' : 'Free · in progress') : !s.paid ? 'Locked' : dn === 0 ? 'Not started' : dn >= ws.length ? 'Complete' : 'In progress',
          stateColor: none ? FAINT : u.free ? '#2f6f8f' : !s.paid ? CLAY : dn >= ws.length ? GREEN : FAINT,
          go: () => (this.canOpen(u) ? this.go('course', { courseId: u.id, weekNo: 1, csec: 'home', itemId: null, discId: null }) : this.go('payConfirm')),
        };
      }),

      // course
      courseTitle: course ? course.title : '',
      courseCode: course ? course.code : '',
      courseTotal: weeks.length,
      courseDone: doneList.length,
      hasWeeks: weeks.length > 0,
      noWeeks: weeks.length === 0,
      coursePct: weeks.length ? Math.round((doneList.length / weeks.length) * 100) + '%' : '0%',
      courseWeeks: weeks.map((x) => {
        const on = doneList.indexOf(x.no) !== -1;
        const isNext = nextWeek && x.no === nextWeek.no;
        return {
          no: String(x.no).padStart(2, '0'), title: x.title, short: x.short,
          mb: on ? NAVY : isNext ? NAVY : '#e4e8ec',
          mf: on ? NAVY : '#fff',
          mc: on ? '#fff' : isNext ? INK : FAINT,
          stateWord: on ? 'Cleared' : isNext ? 'Next' : 'Open',
          stateColor: on ? GREEN : isNext ? INK : FAINT,
          go: () => this.go('week', { weekNo: x.no }),
        };
      }),

      // week
      weekNo: String(s.weekNo).padStart(2, '0'),
      weekTitle: week ? week.title : '',
      weekDesc: week ? week.desc : '',
      weekOutcomes: week ? week.outcomes.map((t) => ({ t })) : [],
      weekItems: [],
      objective: sh ? sh.objective : '',
      weekSpan: sh ? sh.span : '',
      prepareNote: sh ? sh.prepareNote : '',
      prepareCount: prep.length,
      prepareRead: prepDone.length,
      prepareItems: prep.map((it, idx) => {
        const on = prepDone.indexOf(idx) !== -1;
        return {
          kind: it.kind, minutes: it.minutes, title: it.title, url: it.url, why: it.why, source: it.source,
          mb: on ? NAVY : LINE, mf: on ? NAVY : '#fff', dot: on ? 1 : 0,
          word: on ? 'Read' : 'Mark read',
          toggle: () => this.setState((pr) => {
            const cur = pr.items[itemKey] || [];
            const nx = cur.indexOf(idx) !== -1 ? cur.filter((x) => x !== idx) : cur.concat(idx);
            return { items: Object.assign({}, pr.items, { [itemKey]: nx }) };
          }),
        };
      }),
      reinforceItems: (sh ? sh.reinforce : []).map((t, i) => {
        const got = courseMarks['w' + (week ? week.no : 1) + '-r' + i];
        return {
          group: t.group, points: t.points, title: t.title, brief: t.brief, due: t.due,
          state: typeof got === 'number' ? got + ' of ' + this.points(t.points) : 'Not submitted',
          stateColor: typeof got === 'number' ? GREEN : CLAY,
        };
      }),
      teachItems: (sh ? sh.teach : []).map((t, i) => {
        const got = courseMarks['w' + (week ? week.no : 1) + '-t' + i];
        return {
          kind: t.kind, points: t.points, title: t.title, brief: t.brief, who: t.who, when: t.when, counts: t.counts,
          state: typeof got === 'number' ? got + ' of ' + this.points(t.points) : 'Open',
          stateColor: typeof got === 'number' ? GREEN : FAINT,
        };
      }),
      ai: sh && sh.ai ? {
        title: sh.ai.title, task: sh.ai.task, prompt: sh.ai.prompt, rule: sh.ai.rule, points: sh.ai.points,
        state: typeof courseMarks['w' + (week ? week.no : 1) + '-ai'] === 'number' ? courseMarks['w' + (week ? week.no : 1) + '-ai'] + ' of ' + this.points(sh.ai.points) : 'Not submitted',
        stateColor: typeof courseMarks['w' + (week ? week.no : 1) + '-ai'] === 'number' ? GREEN : CLAY,
      } : null,
      hasAi: !!(sh && sh.ai),
      weekPoints: wkItems.reduce((t, x) => t + x.pts, 0) + ' points on this week',
      weekBook: sh ? sh.book.chapter + ' · ' + sh.book.title : '',
      hasWeekBook: !!sh,
      weekBookUrl: sh ? sh.book.url : '',
      weekBtnBg: prepDone.length >= prep.length && prep.length > 0 ? NAVY : '#c3cad2',
      weekBtnCursor: prepDone.length >= prep.length && prep.length > 0 ? 'pointer' : 'not-allowed',
      weekBtnLabel: prepDone.length >= prep.length && prep.length > 0 ? 'Mark Week ' + String(s.weekNo).padStart(2, '0') + ' cleared' : 'Read all ' + prep.length + ' materials first',
      completeWeek: () => {
        if (prepDone.length < prep.length) return;
        this.setState((pr) => {
          const id = course ? course.id : '';
          const cur = pr.done[id] || [];
          const nx = cur.indexOf(pr.weekNo) !== -1 ? cur : cur.concat(pr.weekNo);
          return { done: Object.assign({}, pr.done, { [id]: nx }), route: 'course' };
        });
      },

      // ══ course shell ══
      inCourse, cs,
      cnavOpen: cnavOpen,
      cnavCols: cnavOpen ? (sm ? 'minmax(0,1fr)' : '182px minmax(0,1fr)') : 'minmax(0,1fr)',
      cnavGap: sm ? '20px' : '30px',
      cnavPos: lg ? 'sticky' : 'static',
      cnavTop: lg ? '96px' : 'auto',
      cnavBtnBg: cnavOpen ? '#1b1e2b' : '#fff',
      cnavBtnFg: cnavOpen ? '#fff' : '#14171c',
      toggleCnav: () => this.setState((p) => ({ cnav: !p.cnav })),
      courseBlockLabel: course && course.free ? 'Free · open to every learner' : '2026 Block 5 · ' + entry.label,
      courseNav: COURSE_NAV.map((n) => {
        const on = (rt.course && s.csec === n.id) || (n.id === 'modules' && (rt.week || rt.item)) || (n.id === 'discussions' && rt.disc);
        const owed = n.id === 'discussions' ? discOwed : 0;
        return {
          label: n.label,
          bg: on ? '#fff' : 'transparent',
          fg: on ? INK : '#4a5a8a',
          fw: on ? 700 : 500,
          edge: on ? NAVY : 'transparent',
          badge: owed > 0, count: String(owed),
          go: () => this.setState({ route: 'course', csec: n.id, itemId: null, discId: null }),
        };
      }),
      crumbs: crumbs.map((c, i) => ({
        label: c.label, go: c.go || (() => {}),
        fg: i === crumbs.length - 1 ? INK : '#4a5a8a',
        fw: i === crumbs.length - 1 ? 700 : 500,
        cursor: i === crumbs.length - 1 ? 'default' : 'pointer',
        sep: i === crumbs.length - 1 ? 'none' : 'inline',
      })),
      readerBd: s.a11y.bigText ? NAVY : '#e4e8ec',
      readerBg: s.a11y.bigText ? NAVY : '#fff',
      readerFg: s.a11y.bigText ? '#fff' : INK,
      toggleBigText: () => this.setState((p) => ({ a11y: Object.assign({}, p.a11y, { bigText: !p.a11y.bigText }) })),

      // ── course home ──
      homeCols: lg ? 'minmax(0,1fr) 268px' : 'minmax(0,1fr)',
      annCols: '34px minmax(0,1fr)',
      coverH: sm ? '150px' : '230px',
      coverTint: this.coverFor(course) ? 'transparent' : '#e7ecef',
      courseCover: this.coverFor(course),
      courseBlurb: course ? (course.free
        ? 'This course is free, and it is open to you before you pay for anything. It exists because most learners do not struggle with nursing — they struggle with reading forty pages of clinical English on a phone at night, giving a handover under pressure, and writing a note a stranger can read. Three weeks, no fee, no deadline, and nothing here counts against your programme mark.'
        : course.title + ' runs for ' + weeks.length + ' weeks inside ' + entry.label + '. It is read on a phone, worked in a notebook, and marked by a person. Every week carries the same movements, so once you have learned Week 01 you have learned the shape of all of them. The set textbook and the national guideline are free, and every source this course points you to is openly licensed.') : '',
      homeAnn: COURSE_ANN.slice(0, 2).map((a) => ({
        title: a.title, snippet: a.body.slice(0, 96) + '…', author: a.author, when: a.when, replies: a.replies,
        initials: 'GN', go: () => this.setState({ route: 'course', csec: 'announcements' }),
      })),
      homeDoors: [
        { label: 'Start here', go: () => this.go('week', { weekNo: nextWeek ? nextWeek.no : 1 }) },
        { label: 'Your instructor', go: () => this.setState({ route: 'course', csec: 'people' }) },
        { label: 'Student resources', go: () => this.setState({ route: 'course', csec: 'materials' }) },
      ],
      weekGridDone: doneList.length,
      sqSize: sm ? '66px' : '78px',
      weekSquares: visWeeks.map((x) => {
        const pr = this.weekProgress(cid, x.no);
        const st = this.pubOf(cid, x.no);
        const locked = st === 'scheduled';
        const cleared = doneList.indexOf(x.no) !== -1 || (pr.total > 0 && pr.done >= pr.total);
        const isNext = !locked && nextWeek && x.no === nextWeek.no;
        return {
          no: String(x.no).padStart(2, '0'),
          word: locked ? dLabel(x.no, 1) : cleared ? 'Done' : isNext ? 'Now' : pr.done > 0 ? pr.pct + '%' : 'Open',
          bd: locked ? '#e4e8ec' : cleared || isNext ? NAVY : '#e4e8ec',
          bg: locked ? '#fbfcfd' : cleared ? NAVY : '#fff',
          fg: locked ? '#b6bec7' : cleared ? '#fff' : INK,
          tone: locked ? '#c3cad2' : cleared ? 'rgba(255,255,255,0.68)' : isNext ? INK : FAINT,
          go: locked ? () => {} : () => this.go('week', { weekNo: x.no }),
        };
      }),
      homeLinks: [
        { label: 'Course announcements', icon: I.log(), go: () => this.setState({ route: 'course', csec: 'announcements' }) },
        { label: 'Course calendar', icon: I.calendar(), go: () => this.go('calendar') },
        { label: 'What reaches your phone', icon: I.inbox(), go: () => this.setState({ route: 'account', acct: 'notify' }) },
      ],
      todoRows: todoItems.map((it) => ({
        title: it.title, icon: TYPE[it.type].icon(),
        meta: (course ? course.code : '') + ' · ' + it.pts + ' pts · due ' + dLabel(it.week, it.day),
        go: () => this.go('item', { itemId: it.id, weekNo: it.week }),
      })),
      feedbackRows: feedbackRows,

      annRows: COURSE_ANN.map((a) => ({ title: a.title, body: a.body, when: a.when, author: a.author, replies: a.replies, initials: 'GN' })),

      // ── syllabus ──
      movCols: sm ? 'minmax(0,1fr)' : '170px minmax(0,1fr)',
      movementRows: MOVEMENTS.map((m) => ({ label: m.label, note: m.note })),
      weightRows: pointGroups,
      schedCols: sm ? 'minmax(0,1fr) auto' : '86px minmax(0,1fr) 64px',
      scheduleRows: gradedItems.map((it) => ({
        date: dLabel(it.week, it.day), title: it.title, kind: TYPE[it.type].word, pts: it.pts + ' pts',
        go: () => this.go('item', { itemId: it.id, weekNo: it.week }),
      })),
      policyRows: [
        { k: 'Late work', v: 'Accepted for seven days at eighty per cent, with no note and no apology required. After seven days it needs a reason your instructor can act on. Quizzes and the final do not extend, because their answers are published.' },
        { k: 'Your own work', v: 'Discuss anything with anybody; write your own sentences. Two submissions with the same paragraph are both returned unmarked and both learners are asked to explain. Copying from a textbook without saying so is the same failure as copying from a classmate.' },
        { k: 'Using AI', v: 'Permitted everywhere and required in one task a week. An AI answer is never a source: cite the chapter, the guideline page or the label that confirms it. Uncorrected AI text scores zero, however tidy it reads.' },
        { k: 'Patients and facilities', v: 'No names, no faces, no photographs of charts, no facility names. Write “a woman of 34 at a health centre III”. A single identifying detail returns the whole submission.' },
        { k: 'The gathering', v: 'One hour on Thursday at 19:00, twenty-five points a week, run by a lead student. If your data or your shift makes it impossible, post your teach-back in the thread instead and it counts in full.' },
        { k: 'Marking turnaround', v: 'Everything with points on it comes back inside five working days with comments you can act on. If it is later than that, message your instructor from the Inbox with the week number in the subject line.' },
      ],

      // ── modules ──
      collapseWord: allClosed ? 'Expand all' : 'Collapse all',
      toggleAllModules: () => this.setState(() => {
        const shut = {};
        if (!allClosed) mods.forEach((g) => { shut[g.id] = true; });
        return { modClosed: shut };
      }),
      modHeadCols: '22px minmax(0,1fr) auto',
      modItemCols: '17px minmax(0,1fr) 22px',
      moduleRows: mods.map((g) => {
        const closed = !!s.modClosed[g.id];
        const req = g.items.filter((x) => x.group !== 'Optional');
        const dn = req.filter((x) => this.isDone(cid, x.id)).length;
        const full = req.length > 0 && dn >= req.length;
        return {
          title: g.title,
          meta: g.kind === 'week' ? g.span + ' · ' + g.items.length + ' items · ' + g.objective : g.note,
          state: g.kind === 'week' ? (full ? 'All items done' : dn + ' of ' + req.length + ' done') : g.kind === 'books' ? 'Free · openly licensed' : g.kind === 'projects' ? 'Runs all term' : 'Reference',
          tone: full ? GREEN : FAINT,
          caret: closed ? 'rotate(-90deg)' : 'rotate(0deg)',
          open2: !closed,
          headBd: closed ? 'transparent' : '#e4e8ec',
          cursor: g.kind === 'week' ? 'pointer' : 'default',
          toggle: () => this.setState((p) => ({ modClosed: Object.assign({}, p.modClosed, { [g.id]: !p.modClosed[g.id] }) })),
          open: g.kind === 'week' ? () => this.go('week', { weekNo: g.no }) : () => this.setState({ route: 'course', csec: 'modules' }),
          items: g.items.map((it) => itemRow(it)),
        };
      }),

      // ── course grades ──
      cgPct: courseGrade.pct === null ? '—' : courseGrade.pct.toFixed(1) + '%',
      cgLetter: this.letter(courseGrade.pct),
      cgNote: courseGrade.pct === null
        ? 'Nothing in ' + (course ? course.code : '') + ' has been marked yet, so there is no grade to show. This page will never estimate one for you.'
        : 'Counted only on work a person has returned. Groups join the total as their work comes back.',
      cgGroups: pointGroups,
      cgCols: sm ? 'minmax(0,1fr) auto' : '76px minmax(0,1fr) 96px',
      cgRows: gradedItems.map((it) => {
        const got = it.mark ? courseMarks[it.mark] : undefined;
        return {
          week: it.week === 0 ? 'Term' : 'Week ' + String(it.week).padStart(2, '0'),
          title: it.title, kind: TYPE[it.type].word, due: dLabel(it.week || 1, it.day),
          mark: typeof got === 'number' ? got + ' / ' + it.pts : '— / ' + it.pts,
          state: typeof got === 'number' ? 'Marked' : 'Not marked',
          tone: typeof got === 'number' ? GREEN : FAINT,
          go: () => this.go('item', { itemId: it.id, weekNo: it.week }),
        };
      }),

      // ── discussions index ──
      discCols: '18px minmax(0,1fr) auto',
      discRows: discItems.map((it) => {
        const board = this.postsOf(it.disc).filter((p) => !p.to);
        const mine = this.myPosts(it.disc).length > 0;
        const reps = this.myReplies(it.disc).length;
        return {
          title: it.title, icon: TYPE[it.type].icon(),
          meta: 'Week ' + String(it.week).padStart(2, '0') + ' · ' + board.length + ' entries · ' + it.pts + ' pts · due ' + dLabel(it.week, it.day),
          state: mine && reps >= 2 ? 'Complete' : mine ? 'Replies owed' : 'Not posted',
          tone: mine && reps >= 2 ? GREEN : mine ? CLAY : FAINT,
          go: () => this.setState({ route: 'disc', discId: it.disc, itemId: it.id, weekNo: it.week }),
        };
      }),

      // ── tutoring ──
      tutorCols: sm ? 'minmax(0,1fr)' : 'minmax(0,1fr) 130px',
      tutorRows: TUTOR_SLOTS.map((t, i) => {
        const id = 'slot-' + i;
        const on = s.booked.indexOf(id) !== -1;
        return {
          when: t.when, focus: t.focus, tutor: t.tutor, mode: t.mode,
          bd: on ? NAVY : '#e4e8ec',
          word: on ? 'Booked' : t.open ? 'Book this hour' : 'Taken',
          btnBd: on ? NAVY : t.open ? NAVY : '#e4e8ec',
          btnBg: on ? NAVY : '#fff',
          btnFg: on ? '#fff' : t.open ? INK : FAINT,
          cursor: t.open ? 'pointer' : 'not-allowed',
          justify: sm ? 'start' : 'end',
          book: () => { if (t.open) this.setState((p) => ({ booked: p.booked.indexOf(id) !== -1 ? p.booked.filter((x) => x !== id) : p.booked.concat(id) })); },
        };
      }),

      // ── people ──
      peopleCount: CLASSMATES.length + 2,
      instrCols: sm ? 'minmax(0,1fr)' : '52px minmax(0,1fr)',
      personCols: '30px minmax(0,1fr) auto',
      leadRows: weeks.map((x) => {
        const lead = CLASSMATES.find((c) => c.lead === 'Week ' + String(x.no).padStart(2, '0'));
        const now = nextWeek && x.no === nextWeek.no;
        return {
          label: 'W' + String(x.no).padStart(2, '0') + ' · ' + (lead ? lead.name.split(' ')[0] + ' ' + lead.name.split(' ')[1] : s.name.split(' ')[0] + ' ' + (s.name.split(' ')[1] || '')),
          bd: now ? NAVY : '#e4e8ec', bg: now ? NAVY : '#fff', fg: now ? '#fff' : '#4c545f',
        };
      }),
      groupRows: ['Group 1', 'Group 2', 'Group 3'].map((gname, gi) => ({
        name: gname,
        unit: ['Presents Week 02 · dosage forms on our own ward', 'Presents Week 05 · a medication error, handled well', 'Presents at the revision gathering'][gi],
        members: (gi === 0 ? [{ name: s.name, place: 'Kampala · your facility', group: 'Group 1', lead: '', me: true }] as any[] : []).concat(CLASSMATES.filter((c) => c.group === gname)).map((c) => ({
          name: c.name, place: c.place,
          initials: c.name.split(' ').map((x) => x[0]).join('').slice(0, 2).toUpperCase(),
          avBg: c.me ? NAVY : '#eef1f4',
          avFg: c.me ? '#fff' : '#4c545f',
          tag: c.me ? 'You' : c.lead ? 'Leads ' + c.lead : '',
        })),
      })),

      // ── materials ──
      matCols: '17px minmax(0,1fr) auto',
      materialGroups: materialGroups,

      // ── notebook ──
      noteWeeks: weeks.map((x) => {
        const key = cid + ':' + x.no;
        const text = s.notes[key] || '';
        return {
          label: 'Week ' + String(x.no).padStart(2, '0') + ' · ' + x.title,
          text, count: text.trim() ? text.trim().split(/\s+/).length + ' words' : 'Empty',
          hint: x.no === 1 ? 'What you worked out, what you still cannot say, and the page you found it on.' : 'Notes for this week.',
          set: (e) => { const v = e.target.value; this.setState((p) => ({ notes: Object.assign({}, p.notes, { [key]: v }) })); },
        };
      }),

      // ── one week ──
      refCols: sm ? 'minmax(0,1fr)' : '96px minmax(0,1fr)',
      weekRefs: weekRefs,
      weekSpanDates: wkGroup ? wkGroup.span : spanOf(s.weekNo),
      weekItemCols: '22px minmax(0,1fr) auto',
      weekDoneCount: wkProg.done,
      weekItemCount: wkProg.total,
      weekPct: Math.max(2, wkProg.pct) + '%',
      weekMovements: MOVEMENTS.map((m) => {
        const list = wkItems.filter((x) => x.group === m.id);
        const p = list.reduce((t, x) => t + x.pts, 0);
        return {
          label: m.label, note: m.note, items: list.map((it) => itemRow(it)),
          count: list.length + (list.length === 1 ? ' item' : ' items') + (p ? ' · ' + p + ' pts' : ''),
          any: list.length > 0,
        };
      }).filter((m) => m.any),
      prevWeekLabel: s.weekNo > 1 ? 'Week ' + String(s.weekNo - 1).padStart(2, '0') : 'First week',
      prevWeekFg: s.weekNo > 1 ? INK : '#b6bec7',
      prevWeekCursor: s.weekNo > 1 ? 'pointer' : 'not-allowed',
      prevWeek: () => { if (s.weekNo > 1) this.go('week', { weekNo: s.weekNo - 1 }); },
      nextWeekLabel: s.weekNo < weeks.length ? 'Week ' + String(s.weekNo + 1).padStart(2, '0') : 'Last week',
      nextWeekFg: s.weekNo < weeks.length ? INK : '#b6bec7',
      nextWeekCursor: s.weekNo < weeks.length ? 'pointer' : 'not-allowed',
      nextWeekGo: () => { if (s.weekNo < weeks.length) this.go('week', { weekNo: s.weekNo + 1 }); },

      // ── one item ──
      itemEyebrow: curItem ? (curItem.week ? 'Week ' + String(curItem.week).padStart(2, '0') : 'Runs all term') + ' · ' + TYPE[curItem.type].word : '',
      itemTitle: curItem ? curItem.title : '',
      itemDue: curItem ? (curItem.pts > 0 ? 'To-do date: ' + dueAt(curItem.week || 1, curItem.day) : 'No date · read it before the week closes') : '',
      itemPts: curItem ? (curItem.pts > 0 ? curItem.pts + ' points' : 'No points') : '',
      itemReq: curItem ? curItem.req : '',
      itemOverview: curItem ? curItem.overview : '',
      hasPurpose: !!(curItem && curItem.purpose),
      itemPurpose: curItem && curItem.purpose ? curItem.purpose : '',
      hasPrompt: !!(curItem && curItem.prompt),
      promptLabel: curItem && curItem.prompt ? curItem.prompt.label : '',
      promptQ: curItem && curItem.prompt ? curItem.prompt.q : '',
      promptNote: curItem && curItem.prompt ? curItem.prompt.note : '',
      itemSteps: curItem ? curItem.steps.map((t) => ({ t })) : [],
      hasSource: !!(curItem && curItem.url),
      itemSource: curItem && curItem.source ? curItem.source : '',
      itemUrl: curItem && curItem.url ? curItem.url : '',
      hasOutcomes: !!(curItem && curItem.outcomes),
      itemOutcomes: curItem && curItem.outcomes ? curItem.outcomes.map((t) => ({ t })) : [],
      hasRubric: !!(curItem && curItem.rubric),
      rubricHead: curItem && curItem.rubricHead ? curItem.rubricHead : 'What earns the credit',
      itemRubric: curItem && curItem.rubric ? curItem.rubric.map((t, i) => ({ no: String(i + 1).padStart(2, '0'), t })) : [],
      hasReviewTrack: !!(curItem && curItem.type === 'review'),
      reviewCount: curItem && curItem.disc ? this.myReplies(curItem.disc).length : 0,
      reviewTone: curItem && curItem.disc && this.myReplies(curItem.disc).length >= 2 ? GREEN : CLAY,
      reviewNote: curItem && curItem.disc
        ? (this.myReplies(curItem.disc).length >= 2
          ? 'Both reviews are in. Your instructor reads them beside the work they answer.'
          : 'Counted from the thread itself, not from a form. Two replies to the same person still counts as one.')
        : '',
      hasDisc: !!(curItem && curItem.disc && curItem.type === 'discussion'),
      discBtnLabel: curItem && curItem.disc ? (this.myPosts(curItem.disc).length ? 'Open the board' : 'Open the board and post') : '',
      openThread: () => { if (curItem && curItem.disc) this.setState({ route: 'disc', discId: curItem.disc, itemId: curItem.id }); },
      hasNext: !!(curItem && curItem.next && curItem.next.length),
      itemNext: curItem && curItem.next ? curItem.next.map((t) => ({ t })) : [],
      hasComing: !!(curItem && curItem.coming),
      itemComing: curItem && curItem.coming ? curItem.coming : '',
      hasClosing: !!(curItem && curItem.closing),
      itemClosing: curItem && curItem.closing ? curItem.closing : '',
      prevItemLabel: prevIt ? prevIt.title : 'Nothing before this',
      prevItemFg: prevIt ? INK : '#b6bec7',
      prevItemCursor: prevIt ? 'pointer' : 'not-allowed',
      prevItem: () => { if (prevIt) this.go('item', { itemId: prevIt.id, weekNo: prevIt.week || s.weekNo }); },
      nextItemLabel: nextIt ? nextIt.title : 'End of the course',
      nextItemFg: nextIt ? INK : '#b6bec7',
      nextItemCursor: nextIt ? 'pointer' : 'not-allowed',
      nextItem: () => { if (nextIt) this.go('item', { itemId: nextIt.id, weekNo: nextIt.week || s.weekNo }); },
      tickWord: handState ? handWord : itemDone ? 'Done' : needsHandIn ? 'Hand in' : 'Mark as done',
      tickBd: handState === 'returned' ? GREEN : handState ? '#9a6a45' : itemDone ? NAVY : '#d3dae1',
      tickBg: handState === 'returned' ? GREEN : handState ? '#9a6a45' : itemDone ? NAVY : '#fff',
      tickFg: handState || itemDone ? '#fff' : INK,
      tickRing: handState || itemDone ? 'rgba(255,255,255,0.7)' : '#b6bec7',
      tickDot: handState || itemDone ? 1 : 0,
      tickItem: () => {
        if (!curItem) return;
        if (handState) { this.withdraw(curItem.id); return; }
        if (needsHandIn) { this.handIn(cid, curItem); return; }
        this.toggleItemDone(cid, curItem.id);
      },
      handShow: !!handState,
      handRows: handState ? [
        { k: 'Handed in', v: curHand.when, note: 'Your submission left this device and is now with your instructor.', fg: GREEN },
        { k: 'State', v: handState === 'returned' ? 'Returned with a mark' : handState === 'marking' ? 'Being marked' : 'With your instructor', note: handState === 'returned' ? 'The mark below is what appears on your grades page.' : 'Everything with points on it comes back inside five working days.', fg: handState === 'returned' ? GREEN : '#9a6a45' },
        { k: handState === 'returned' ? 'Mark' : 'Out of', v: handState === 'returned' ? curHand.mark + ' / ' + curHand.outOf : String(curItem ? curItem.pts : 0), note: handState === 'returned' ? (curHand.comment || 'No comment was written.') : 'Nothing is deducted for handing in early.', fg: INK },
      ] : [],
      handTone: handState === 'returned' ? '#cfe0d6' : '#e0d6cd',
      handBg: handState === 'returned' ? '#f4f9f6' : '#fdfbf8',
      handKey: handState === 'returned' ? GREEN : '#9a6a45',
      handHead: handState === 'returned' ? 'Marked and returned' : handState === 'marking' ? 'Your instructor has opened it' : 'Handed in',
      withdrawWord: handState === 'returned' ? 'Hand in a correction' : 'Withdraw and redo',

      // ── one discussion ──
      threadsWord: s.threadsOpen ? 'Collapse threads' : 'Expand threads',
      threadsBd: s.threadsOpen ? NAVY : '#e4e8ec',
      threadsBg: s.threadsOpen ? NAVY : '#fff',
      threadsFg: s.threadsOpen ? '#fff' : INK,
      toggleThreads: () => this.setState((p) => ({ threadsOpen: !p.threadsOpen })),
      discSearch: s.discSearch,
      setDiscSearch: (e) => this.setState({ discSearch: e.target.value }),
      sortChoices: [{ id: 'newest', label: 'Newest first' }, { id: 'oldest', label: 'Oldest first' }].map((c) => ({
        label: c.label,
        bd: s.discSort === c.id ? NAVY : '#e4e8ec',
        bg: s.discSort === c.id ? NAVY : '#fff',
        fg: s.discSort === c.id ? '#fff' : INK,
        pick: () => this.setState({ discSort: c.id }),
      })),
      discEyebrow: discItem ? 'Week ' + String(discItem.week).padStart(2, '0') + ' · Discussion · ' + (course ? course.code : '') : '',
      discTitle: discItem ? discItem.title : '',
      discDue: discItem ? 'Post by ' + dueAt(discItem.week, discItem.day) + ' · replies by ' + dueAt(discItem.week, 7) : '',
      discPts: discItem ? discItem.pts + ' points possible' : '',
      discCounts: rootPosts.length + ' entries · ' + (boardReplies + mineOnBoard.filter((p) => p.to).length) + ' replies',
      discOverview: discItem ? discItem.overview : '',
      discHasPurpose: !!(discItem && discItem.purpose),
      discPurpose: discItem && discItem.purpose ? discItem.purpose : '',
      discSteps: discItem ? discItem.steps.map((t) => ({ t })) : [],
      discHasRubric: !!(discItem && discItem.rubric),
      discRubric: discItem && discItem.rubric ? discItem.rubric.map((t, i) => ({ no: String(i + 1).padStart(2, '0'), t })) : [],
      trackBd: trackDone ? '#cfe0d6' : '#e0d6cd',
      trackBg: trackDone ? '#f4f9f6' : '#fdfbf8',
      trackKey: trackDone ? GREEN : '#9a6a45',
      trackState: trackDone ? 'Complete' : 'Outstanding',
      trackCols: sm ? 'minmax(0,1fr)' : 'repeat(3, minmax(0,1fr))',
      trackRows: [
        { k: 'Your own post', v: myPostCount ? 'Posted' : 'Not posted', fg: myPostCount ? GREEN : CLAY, note: myPostCount ? 'Visible to the class and to your instructor.' : 'Due Wednesday, 23:59. Two hundred words.' },
        { k: 'Replies to classmates', v: myReplyNames.length + ' of 2', fg: myReplyNames.length >= 2 ? GREEN : CLAY, note: myReplyNames.length >= 2 ? 'Two different people. Counted from the thread.' : 'Two different people, sixty words each.' },
        { k: 'Points on this board', v: discItem ? String(discItem.pts) : '0', fg: INK, note: 'Half for posting, half for the answering.' },
      ],
      myPostHead: myPostCount ? 'Add to the board' : 'Your post',
      myPostMeta: myPostCount ? 'You have posted once' : 'Nothing posted yet',
      composeCols: '38px minmax(0,1fr)',
      composeHint: discItem && /Ice Breaker/.test(discItem.title)
        ? 'Where you are from, where you work or train, one medicine or condition you meet most often, and what you want out of this course.'
        : 'Two hundred words, one real example from your own facility, one real number.',
      meAvBg: NAVY,
      mePhoto: s.photo,
      meInitialsShown: s.photo ? '' : initials,
      postDraft: s.postDraft,
      setPostDraft: (e) => this.setState({ postDraft: e.target.value }),
      wordCount: draftWords + (draftWords === 1 ? ' word' : ' words') + ' · 60 is the floor',
      wordTone: draftWords >= 60 ? GREEN : FAINT,
      postBtnBg: draftWords >= 60 ? NAVY : '#c3cad2',
      postBtnCursor: draftWords >= 60 ? 'pointer' : 'not-allowed',
      submitPost: () => {
        if (draftWords < 60 || !s.discId) return;
        const body = s.postDraft;
        const key = s.discId;
        this.setState((p) => ({
          posts: Object.assign({}, p.posts, { [key]: (p.posts[key] || []).concat([{ key: key + '-me-' + Date.now(), who: p.name, when: 'Just now', body, to: null, mine: true, replies: 0 }]) }),
          postDraft: '',
        }));
      },
      boardMeta: rootPosts.length + ' entries · ' + (s.discSort === 'newest' ? 'newest first' : 'oldest first'),
      postCols: '38px minmax(0,1fr)',
      posts: shownPosts,
      noPosts: shownPosts.length === 0,
      replyDraft: s.replyDraft,
      setReplyDraft: (e) => this.setState({ replyDraft: e.target.value }),
      replyWordCount: replyWords + (replyWords === 1 ? ' word' : ' words') + ' · 60 is the floor',
      replyWordTone: replyWords >= 60 ? GREEN : FAINT,
      replyBtnBg: replyWords >= 60 ? NAVY : '#c3cad2',
      replyBtnCursor: replyWords >= 60 ? 'pointer' : 'not-allowed',
      submitReply: () => {
        if (replyWords < 60 || !s.replyTo || !s.discId) return;
        const body = s.replyDraft; const to = s.replyTo; const key = s.discId;
        this.setState((p) => ({
          posts: Object.assign({}, p.posts, { [key]: (p.posts[key] || []).concat([{ key: key + '-r-' + Date.now(), who: p.name, when: 'Just now', body, to, mine: true, replies: 0 }]) }),
          replyDraft: '', replyTo: null, threadsOpen: true,
        }));
      },
      cancelReply: () => this.setState({ replyTo: null, replyDraft: '' }),
      backToItem: () => { if (discItem) this.go('item', { itemId: discItem.id, weekNo: discItem.week }); },
      goWeekFromDisc: () => this.go('week', { weekNo: discItem ? discItem.week : s.weekNo }),
      discWeekLabel: discItem ? 'Back to Week ' + String(discItem.week).padStart(2, '0') : 'Back to the week',

      // ── calendar ──
      calMonthLabel: 'September 2026',
      calDayHeads: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => ({ d })),
      calCells: calCells,
      calRows: calList,
      calCols: sm ? 'minmax(0,1fr)' : 'minmax(0,1fr) 300px',

      // ── textbook bar ──
      hasBook: !!bk,
      noBook: !bk,
      bookTitle: bk ? bk.title : '',
      bookPublisher: bk ? bk.publisher : '',
      bookUrl: bk ? bk.url : '',
      bookSecond: bk ? bk.second.title : '',
      bookSecondUrl: bk ? bk.second.url : '',
      bookNational: bk ? bk.national.title : '',
      bookNationalUrl: bk ? bk.national.url : '',
      bookCourse: course ? course.code + ' · ' + course.title : '',
      bookNone: course ? 'No set textbook published for ' + course.code + ' ' + course.title + ' yet' : 'No course selected',
      bookChapter: sh ? sh.book.chapter + ' · ' + sh.book.title : 'Chapter opens with each week',
      bookChapterUrl: sh ? sh.book.url : (bk ? bk.url : ''),
      showBookBar: !isAdmin && !isInstructor && !inCourse,

      // ── grades ──
      gradePct: grade.pct === null ? '—' : grade.pct.toFixed(1) + '%',
      gradeLetter: this.letter(grade.pct),
      gradeCourse: course ? course.code + ' · ' + course.title : '',
      gradeNote: grade.pct === null
        ? 'Nothing has been marked yet, so there is no grade to show. This page will never estimate one.'
        : 'Counted on the ' + grade.weighted + '% of the course that has been marked so far. The remaining groups join the total as their work is returned.',
      gradeGroups: GROUPS.map((g) => {
        const a = grade.acc[g.id];
        const pct = a.out > 0 ? (a.got / a.out) * 100 : null;
        return {
          label: g.label, note: g.note, weight: g.weight + '%',
          got: a.out > 0 ? a.got + ' / ' + a.out : '—',
          all: a.all + ' pts total',
          pct: pct === null ? '—' : pct.toFixed(0) + '%',
          bar: pct === null ? '0%' : Math.max(2, Math.round(pct)) + '%',
          fg: pct === null ? FAINT : INK,
        };
      }),
      gradeRows: grade.rows.map((r) => ({
        week: 'Week ' + String(r.week).padStart(2, '0'),
        title: r.title, label: r.label,
        mark: typeof r.got === 'number' ? r.got + ' / ' + r.out : '— / ' + r.out,
        state: typeof r.got === 'number' ? 'Marked' : 'Not marked',
        tone: typeof r.got === 'number' ? GREEN : FAINT,
      })),
      gradeCourses: reg.map((u) => {
        const gg = this.gradeOf(u.id);
        return {
          title: u.title, code: u.code,
          pct: gg.pct === null ? '—' : gg.pct.toFixed(1) + '%',
          letter: this.letter(gg.pct),
          on: course && u.id === course.id,
          fw: course && u.id === course.id ? 700 : 500,
          go: () => this.go('grades', { courseId: u.id }),
        };
      }),

      // panel
      pathwayRows: TERMS.map((t) => {
        const cleared = s.clearedTermIds.indexOf(t.id) !== -1;
        const now = t.id === s.entryTermId;
        return {
          label: t.label,
          dotBd: cleared || now ? NAVY : '#d3dae1',
          dotBg: cleared ? NAVY : now ? '#fff' : 'transparent',
          fw: now ? 700 : 500,
          fg: cleared || now ? INK : FAINT,
          state: cleared ? 'Cleared' : now ? 'Now' : t.period.slice(0, 3),
          stateColor: now ? INK : FAINT,
        };
      }),

      // ── payment ──
      amountText: 'UGX ' + money(AMOUNT),
      productTitle: product.title,
      productTiming: product.timing,
      productCourses: product.courses,
      payRows: reg.map((u) => ({ title: u.title, code: u.code })),
      walletName,
      walletFeed: s.feed.map((e) => ({
        text: e.text, meta: e.meta, at: e.at,
        showTick: e.state === 'live' ? 'none' : 'grid',
        showSpin: e.state === 'live' ? 'block' : 'none',
        dotBg: e.state === 'fail' ? '#a03a2a' : e.state === 'ok' ? GREEN : '#b6bec7',
        fw: e.state === 'live' || e.state === 'ok' || e.state === 'fail' ? 600 : 500,
        fg: e.state === 'fail' ? '#a03a2a' : INK,
      })),
      feedStatus: s.feed.some((e) => e.state === 'fail') ? 'Declined by the wallet' : s.feed.some((e) => e.state === 'ok') ? 'Confirmed' : 'Waiting on the wallet',
      feedTone: s.feed.some((e) => e.state === 'fail') ? '#a03a2a' : s.feed.some((e) => e.state === 'ok') ? GREEN : CLAY,
      isMtn: s.wallet === 'mtn',
      isAirtel: s.wallet === 'airtel',
      phone: s.phone,
      phoneError: s.phoneError,
      phoneMasked: this.mask(),
      reference: this.ref(),
      countdown: mm + ':' + ssx,
      countdownPct: Math.round((s.left / 300) * 100) + '%',
      slip: s.slip,
      slipShown: s.slipSent || '—',
      slipRef: 'DF-' + (s.pathwayId === 'nursing' ? 'NURSING' : 'MIDWIFERY') + '-' + s.entryTermId.toUpperCase() + '-' + initials,
      paidWhen: '4 Sep 2026, 08:34',

      // ── statement ──
      balText: s.paid ? 'UGX 0' : 'UGX ' + money(AMOUNT),
      balColor: s.paid ? INK : CLAY,
      balNote: s.paid ? 'Settled 4 September 2026 · nothing owed' : entry.label + ' · access closed',
      balAction: s.paid ? 'View statement' : 'Pay UGX ' + money(AMOUNT),
      charges: [
        { label: entry.label + ' · 2026', meta: product.courses + ' courses · charged 3 Sep 2026', amount: money(AMOUNT), fg: INK },
        { label: 'Year 2 · Semester 2 · 2026', meta: 'Opens 1 July 2026 · not yet charged', amount: '—', fg: FAINT },
      ],
      attempts: s.attempts.length ? s.attempts : [{ ref: 'No attempt yet', meta: 'Nothing has been requested from your wallet', status: '—', color: FAINT, amount: '' }],
      methodOnFile: s.paid ? (s.slipSent ? 'Bank deposit · ' + s.slipSent : walletName + ' · ' + this.mask()) : 'None yet',
      accessWord: s.paid ? 'Open' : 'Closed',
      accessTone: s.paid ? GREEN : CLAY,

      // ── plan · inbox · account ──
      planBlocks: sessionDays.map((d, i) => ({
        day: d, when: i === 0 ? 'Tomorrow' : d, length: i === s.sessions - 1 ? '90 minutes' : '45 minutes',
        what: course ? course.title : '', week: nextWeek ? 'Week ' + String(nextWeek.no).padStart(2, '0') : '',
        go: () => this.go('week', { weekNo: nextWeek ? nextWeek.no : 1 }),
      })),
      cleared: reg.reduce((acc, u) => acc.concat((s.done[u.id] || []).map((n) => ({ title: u.title, week: 'Week ' + String(n).padStart(2, '0'), code: u.code }))), []),
      clearedEmpty: reg.reduce((t, u) => t + this.doneCount(u.id), 0) === 0,
      // ══ inbox ══
      mailHeadMeta: unreadMail ? unreadMail + ' unread · ' + mailList.length + ' in ' + MAIL_FOLDERS_BY_ID[s.mailFolder].toLowerCase() : mailList.length + ' in ' + MAIL_FOLDERS_BY_ID[s.mailFolder].toLowerCase(),
      mailSettings: () => this.setState((pr) => ({ settingsOpen: true, sigText: pr.sigSaved, composeOpen: false })),
      settingsShow: s.settingsOpen,
      closeSettings: () => this.setState((pr) => ({ settingsOpen: false, sigText: pr.sigSaved })),
      saveSettings: () => this.setState((pr) => ({ settingsOpen: false, sigSaved: pr.sigOn ? pr.sigText : '' })),
      sigChoices: [{ on: false, label: 'Signature off' }, { on: true, label: 'Signature on' }].map((c) => ({
        label: c.label,
        ringBd: s.sigOn === c.on ? NAVY : '#b6bec7',
        dotBg: s.sigOn === c.on ? NAVY : 'transparent',
        fw: s.sigOn === c.on ? 700 : 500,
        pick: () => this.setState({ sigOn: c.on }),
      })),
      sigText: s.sigText,
      setSigText: (e) => this.setState({ sigText: e.target.value }),
      sigDisabled: !s.sigOn,
      sigBg: s.sigOn ? '#fff' : '#f7f9fa',
      sigFg: s.sigOn ? INK : '#8d96a2',
      sigPlaceholder: s.sigOn ? 'Fred Samson Okorio\nCertificate in Nursing, Year 2\nMulago National Referral · medical ward' : 'Turn the signature on to write one.',
      sigNote: s.sigOn
        ? (s.sigText.trim() ? 'Three lines is plenty. Your name and where you work is what an instructor needs.' : 'Nothing written yet, so nothing will be added.')
        : 'Off. Nothing is added to your messages.',
      sigNoteTone: s.sigOn && s.sigText.trim() ? GREEN : FAINT,
      settingsLinks: [
        { label: 'What reaches your phone', meta: 'SMS, WhatsApp, Telegram', go: () => this.setState({ settingsOpen: false, route: 'account', acct: 'notify' }) },
        { label: 'Ways to contact you', meta: 'Verify a number', go: () => this.setState({ settingsOpen: false, route: 'account', acct: 'contact' }) },
      ],
      mailCols: lg ? '360px minmax(0,1fr)' : 'minmax(0,1fr)',
      mailListH: lg ? '600px' : '380px',
      mailSearch: s.mailSearch,
      setMailSearch: (e) => this.setState({ mailSearch: e.target.value }),
      courseMenuOpen: s.courseOpen,
      courseMenuBd: s.courseOpen ? NAVY : '#e4e8ec',
      toggleCourseMenu: () => this.setState((pr) => ({ courseOpen: !pr.courseOpen, folderOpen: false })),
      mailCourseLabel: s.mailCourse === 'all' ? 'All courses' : s.mailCourse === 'none' ? 'No course · office' : courseTitleOf(s.mailCourse),
      mailCourseChoices: [{ id: 'all', label: 'All courses' }, { id: 'none', label: 'No course · the office' }]
        .concat(reg.map((u) => ({ id: u.id, label: u.code + ' · ' + u.title })))
        .map((c) => ({
          label: c.label,
          bg: s.mailCourse === c.id ? '#f3f0ea' : '#fff',
          fg: s.mailCourse === c.id ? INK : '#4c545f',
          fw: s.mailCourse === c.id ? 700 : 500,
          pick: () => this.setState({ mailCourse: c.id, courseOpen: false, mailSel: null }),
        })),
      folderMenuOpen: s.folderOpen,
      folderMenuBd: s.folderOpen ? NAVY : '#e4e8ec',
      toggleFolderMenu: () => this.setState((pr) => ({ folderOpen: !pr.folderOpen, courseOpen: false })),
      mailFolderLabel: MAIL_FOLDERS_BY_ID[s.mailFolder],
      mailFolderChoices: MAIL_FOLDERS.map((f) => {
        const n = mailFolderCount(f.id);
        return {
          label: f.label, count: n ? String(n) : '—',
          countFg: n ? INK : FAINT,
          bg: s.mailFolder === f.id ? '#f3f0ea' : '#fff',
          fg: s.mailFolder === f.id ? INK : '#4c545f',
          fw: s.mailFolder === f.id ? 700 : 500,
          pick: () => this.setState({ mailFolder: f.id, folderOpen: false, mailSel: null }),
        };
      }),
      mailActions: [
        { id: 'reply', label: 'Reply', icon: svgIcon(['M9 17l-5-5 5-5', 'M4 12h11a4 4 0 0 1 4 4v2']) },
        { id: 'read', label: 'Mark read', icon: svgIcon(['M20 6 9 17l-5-5']) },
        { id: 'star', label: 'Star', icon: svgIcon(['M11.5 2.5a.5.5 0 0 1 .9 0l2.3 4.7 5.2.8a.5.5 0 0 1 .3.9l-3.8 3.6.9 5.1a.5.5 0 0 1-.7.6L12 16l-4.6 2.4a.5.5 0 0 1-.7-.6l.9-5.1L3.8 9a.5.5 0 0 1 .3-.9l5.2-.8z']) },
        { id: 'archive', label: 'Archive', icon: svgIcon([{ r: [3, 4, 18, 4, 1] }, 'M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8', 'M10 12h4']) },
        { id: 'delete', label: 'Delete', icon: svgIcon(['M3 6h18', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', 'M10 11v6', 'M14 11v6', 'M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2']) },
      ].map((a) => ({
        label: a.label, icon: a.icon,
        fg: mailTargets.length ? INK : '#c3cad2',
        cursor: mailTargets.length ? 'pointer' : 'not-allowed',
        run: () => {
          if (!mailTargets.length) return;
          if (a.id === 'reply') { this.setState({ mailSel: mailTargets[0], mailChecked: [] }); return; }
          if (a.id === 'read') { this.setState((pr) => ({ mailRead: pr.mailRead.concat(mailTargets.filter((x) => pr.mailRead.indexOf(x) === -1)), mailChecked: [] })); return; }
          if (a.id === 'star') { this.setState((pr) => ({ mailStar: pr.mailStar.concat(mailTargets.filter((x) => pr.mailStar.indexOf(x) === -1)), mailChecked: [] })); return; }
          if (a.id === 'archive') { this.setState((pr) => ({ mailArchived: pr.mailArchived.concat(mailTargets.filter((x) => pr.mailArchived.indexOf(x) === -1)), mailChecked: [], mailSel: null })); return; }
          this.setState((pr) => ({ mailDeleted: pr.mailDeleted.concat(mailTargets), mailChecked: [], mailSel: null }));
        },
      })),
      mailBulkShow: mailChecked.length > 0,
      mailBulkNote: mailChecked.length + (mailChecked.length === 1 ? ' conversation selected. The buttons above act on it.' : ' conversations selected. The buttons above act on all of them.'),
      mailRows: mailList.map((m) => {
        const read = isRead(m);
        const star = isStar(m);
        const sel = s.mailSel === m.id;
        const checked = s.mailChecked.indexOf(m.id) !== -1;
        return {
          date: m.when, dateFg: read ? FAINT : CLAY,
          who: m.participants.slice(0, 3).join(', ') + (m.participants.length > 3 ? ' …' : ''),
          whoFw: read ? 500 : 700,
          subject: m.subject, subjFw: read ? 500 : 700,
          preview: m.msgs[m.msgs.length - 1].body.slice(0, 74) + '…',
          courseLabel: m.course ? courseTitleOf(m.course) : 'No course · the office',
          hasCount: !read && m.unread > 0, count: String(m.unread),
          dotBd: read ? '#c3cad2' : NAVY, dotBg: read ? '#fff' : NAVY,
          bg: sel ? '#f7f9fa' : '#fff', edge: sel ? NAVY : 'transparent',
          boxBd: checked ? NAVY : LINE, boxBg: checked ? NAVY : '#fff', boxDot: checked ? 1 : 0,
          check: () => this.setState((pr) => ({ mailChecked: pr.mailChecked.indexOf(m.id) !== -1 ? pr.mailChecked.filter((x) => x !== m.id) : pr.mailChecked.concat(m.id) })),
          starFg: star ? CLAY : FAINT, starFill: star ? CLAY : 'none', starWord: star ? 'Starred' : 'Star',
          star: () => this.setState((pr) => {
            if (m.starred) return { mailStar: pr.mailStar.indexOf('un-' + m.id) !== -1 ? pr.mailStar.filter((x) => x !== 'un-' + m.id) : pr.mailStar.concat('un-' + m.id) };
            return { mailStar: pr.mailStar.indexOf(m.id) !== -1 ? pr.mailStar.filter((x) => x !== m.id) : pr.mailStar.concat(m.id) };
          }),
          go: () => this.setState((pr) => ({ mailSel: m.id, mailReply: '', mailRead: pr.mailRead.indexOf(m.id) !== -1 ? pr.mailRead : pr.mailRead.concat(m.id) })),
        };
      }),
      noMail: mailList.length === 0,
      noMailHead: mq ? 'Nothing matches that search' : s.mailFolder === 'unread' ? 'Nothing unread' : s.mailFolder === 'starred' ? 'Nothing starred' : 'This folder is empty',
      noMailNote: mq ? 'Clear the search, or widen the course filter above it.' : 'Messages from your instructor and the office arrive here. Course announcements do not.',
      mailOpen: !!curMail,
      mailShut: !curMail,
      threadSubject: curMail ? curMail.subject : '',
      threadPeople: curMail ? curMail.participants.join(' · ') : '',
      threadCourse: curMail ? (curMail.course ? courseTitleOf(curMail.course) : 'No course · the office') : '',
      threadMsgs: curMail ? curMail.msgs.map((t) => {
        const me = t.who === 'you' || t.who === s.name;
        return {
          who: me ? s.name : t.who, when: t.when, body: t.body,
          initials: me && s.photo ? '' : String(me ? s.name : t.who).split(' ').filter(Boolean).map((x) => x[0]).join('').slice(0, 2).toUpperCase(),
          avBg: me ? NAVY : '#eef1f4', avFg: me ? '#fff' : '#4c545f', avPhoto: me ? s.photo : '',
        };
      }) : [],
      threadReplyTo: curMail ? curMail.participants.filter((x) => x !== 'you')[0] || 'the thread' : '',
      closeThread: () => this.setState({ mailSel: null, mailReply: '' }),
      mailReply: s.mailReply,
      setMailReply: (e) => this.setState({ mailReply: e.target.value }),
      replySendBg: s.mailReply.trim() ? NAVY : '#c3cad2',
      replySendCursor: s.mailReply.trim() ? 'pointer' : 'not-allowed',
      replyHint: 'Sent messages keep the week number in the subject line.',
      sendMailReply: () => {
        if (!s.mailReply.trim() || !curMail) return;
        const body = s.mailReply.trim();
        const id = curMail.id;
        this.setState((pr) => ({
          mailSent: pr.mailSent.concat([{
            id: 'sent-' + Date.now(), course: curMail.course, subject: 'Re: ' + curMail.subject,
            when: '4 Sep 2026', unread: 0, starred: false, folder: 'sent',
            participants: ['you'].concat(curMail.participants.filter((x) => x !== 'you')),
            msgs: [{ who: 'you', when: 'Just now', body }],
          }]),
          mailReply: '', mailFolder: 'sent', mailSel: null, mailRead: pr.mailRead.indexOf(id) !== -1 ? pr.mailRead : pr.mailRead.concat(id),
        }));
      },
      archiveWord: curMail && isArch(curMail) ? 'Already archived' : 'Archive this',
      archiveThread: () => { if (curMail) this.setState((pr) => ({ mailArchived: pr.mailArchived.indexOf(curMail.id) !== -1 ? pr.mailArchived : pr.mailArchived.concat(curMail.id), mailSel: null })); },
      composeShow: s.composeOpen,
      composeBodyH: sm ? '54vh' : '58vh',
      modalPad: sm ? '18px 14px' : '48px 24px',
      openCompose: () => this.setState({ composeOpen: true, settingsOpen: false, cTo: '', cSubject: '', cBody: '', cCourse: null, cCourseOpen: false, cIndividual: false, bookOpen: false, attach: [] }),
      closeCompose: () => this.setState({ composeOpen: false, cCourseOpen: false, bookOpen: false }),
      cCourseOpen: s.cCourseOpen,
      cCourseBd: s.cCourseOpen ? NAVY : '#d3dae1',
      cCourseLabel: s.cCourse === null ? 'Select course' : s.cCourse === 'none' ? 'No course · the office' : courseTitleOf(s.cCourse),
      cCourseFw: s.cCourse === null ? 500 : 600,
      cCourseFg: s.cCourse === null ? '#8d96a2' : INK,
      toggleCCourse: () => this.setState((pr) => ({ cCourseOpen: !pr.cCourseOpen, bookOpen: false })),
      toggleIndividual: () => this.setState((pr) => ({ cIndividual: !pr.cIndividual })),
      indivBd: s.cIndividual ? NAVY : LINE,
      indivBg: s.cIndividual ? NAVY : '#fff',
      indivDot: s.cIndividual ? 1 : 0,
      bookOpen: s.bookOpen,
      bookBd: s.bookOpen ? NAVY : '#d3dae1',
      bookBg: s.bookOpen ? NAVY : '#fff',
      bookFg: s.bookOpen ? '#fff' : '#4c545f',
      toggleBook: () => this.setState((pr) => ({ bookOpen: !pr.bookOpen, cCourseOpen: false })),
      bookGroups: [
        { title: 'Staff', rows: [{ name: 'Grace Nalubega', role: 'Instructor · answers in one working day' }, { name: 'Amara Kato', role: 'Registry · fees, clearance and access' }] },
        { title: 'Groups', rows: [{ name: 'Group 1', role: 'Four learners · dosage-forms unit' }, { name: 'Everyone in CN 211', role: '12 learners · use sparingly' }] },
        { title: 'Classmates', rows: CLASSMATES.slice(0, 6).map((c) => ({ name: c.name, role: c.place })) },
      ].map((g) => ({
        title: g.title,
        rows: g.rows.map((p2) => ({
          name: p2.name, role: p2.role,
          initials: p2.name.split(' ').map((x) => x[0]).join('').slice(0, 2).toUpperCase(),
          bg: s.cTo === p2.name ? '#f3f0ea' : 'transparent',
          pick: () => this.setState({ cTo: p2.name, bookOpen: false }),
        })),
      })),
      sigShow: s.sigOn && !!s.sigSaved.trim(),
      sigPreview: '—\n' + s.sigSaved,
      addAttachment: () => this.setState((pr) => ({ attach: pr.attach.concat('file') })),
      addVoice: () => this.setState((pr) => ({ attach: pr.attach.concat('voice') })),
      composeCourses: [{ id: 'none', label: 'No course · the office' }].concat(reg.map((u) => ({ id: u.id, label: u.code + ' · ' + u.title }))).map((c) => ({
        label: c.label,
        bg: s.cCourse === c.id ? '#f3f0ea' : '#fff',
        fg: s.cCourse === c.id ? INK : '#4c545f',
        fw: s.cCourse === c.id ? 700 : 500,
        pick: () => this.setState({ cCourse: c.id, cCourseOpen: false }),
      })),
      cTo: s.cTo, setCTo: (e) => this.setState({ cTo: e.target.value }),
      cSubject: s.cSubject, setCSubject: (e) => this.setState({ cSubject: e.target.value }),
      cBody: s.cBody, setCBody: (e) => this.setState({ cBody: e.target.value }),
      composeHintLine: s.attach.length
        ? s.attach.length + (s.attach.length === 1 ? ' attachment' : ' attachments') + ' ready'
        : s.cIndividual ? 'Each recipient gets their own thread' : 'Answered inside one working day',
      composeNoteTone: s.attach.length ? GREEN : FAINT,
      sendBg: s.cTo.trim() && s.cBody.trim() ? NAVY : '#c3cad2',
      sendCursor: s.cTo.trim() && s.cBody.trim() ? 'pointer' : 'not-allowed',
      sendCompose: () => {
        if (!s.cTo.trim() || !s.cBody.trim()) return;
        this.setState((pr) => ({
          mailSent: pr.mailSent.concat([{
            id: 'sent-' + Date.now(), course: pr.cCourse === 'none' || pr.cCourse === null ? null : pr.cCourse,
            subject: pr.cSubject.trim() || '(no subject)', when: '4 Sep 2026', unread: 0, starred: false, folder: 'sent',
            participants: ['you', pr.cTo.trim()],
            msgs: [{ who: 'you', when: 'Just now', body: pr.cBody.trim() + (pr.sigOn && pr.sigSaved.trim() ? '\n\n—\n' + pr.sigSaved.trim() : '') }],
          }]),
          composeOpen: false, cCourseOpen: false, bookOpen: false, cTo: '', cSubject: '', cBody: '', attach: [], mailFolder: 'sent', mailSel: null,
        }));
      },

      inboxItems: myNotices.map((n) => ({ title: n.title, body: n.body, who: n.author, when: n.when, scope: n.audience === 'all-learners' ? 'Everyone' : (this.space(n.space) || {}).title || 'Course' })),
      ac, acctTabs,
      acctPaneLabel: (ACCT_TABS.filter((t) => t.id === s.acct)[0] || ACCT_TABS[0]).label,
      anavOpen: s.anav,
      anavBtnBg: s.anav ? NAVY : '#fff',
      anavBtnFg: s.anav ? '#fff' : INK,
      toggleAnav: () => this.setState((p) => ({ anav: !p.anav })),
      goProfile: () => this.setState({ route: 'account', acct: 'profile' }),
      hasPhoto: !!s.photo,
      photoBg: s.photo ? '#eef1f4' : NAVY,
      photoNote: s.photo
        ? 'Your classmates see this beside every post you write on a discussion board, and your instructor sees it beside every piece of work you hand in.'
        : 'None uploaded, so your initials stand in. Add one — a board of initials is a board of strangers, and the ice breaker asks for a face.',
      photoBtnWord: s.photo ? 'Change photograph' : 'Upload a photograph',
      photoMeta: s.photo ? 'Held on this device for the preview · JPG or PNG' : 'JPG or PNG · a phone photograph is fine · nothing leaves this device in the preview',
      pickPhoto: (e) => {
        const file = e.target && e.target.files && e.target.files[0];
        if (!file) return;
        const rd = new FileReader();
        rd.onload = () => this.setState({ photo: String(rd.result) });
        rd.readAsDataURL(file);
      },
      clearPhoto: () => this.setState({ photo: '' }),
      acctCols: w < 900 ? 'minmax(0,1fr)' : s.anav ? '182px minmax(0,1fr)' : 'minmax(0,1fr)',
      acctNavDir: w < 900 ? 'row' : 'column',
      acctNavPos: w < 900 ? 'static' : 'sticky',
      acctNavTop: w < 900 ? 'auto' : '96px',
      acctRowCols: sm ? 'minmax(0,1fr)' : '140px minmax(0,1fr)',
      fullName: s.name,
      displayName: s.displayName || s.name.split(' ')[0] || '',
      bio: s.bio,
      setFullName: (e) => this.setState({ name: e.target.value }),
      setDisplayName: (e) => this.setState({ displayName: e.target.value }),
      setBio: (e) => this.setState({ bio: e.target.value }),
      userEmail: s.email,
      accountRows: [
        { k: 'Address', v: s.email || '—' },
        { k: 'Desk', v: isAdmin ? 'Administrator · admin.deepfocus.ug' : isInstructor ? 'Instructor · staff.deepfocus.ug' : 'Learner · student.deepfocus.ug' },
      ].concat(isAdmin ? [
        { k: 'Scope', v: 'Every pathway, every semester' },
        { k: 'Can', v: 'Verify payments, review clearance, assign instructors, reverse access' },
        { k: 'Open work', v: open.length + ' decisions waiting' },
      ] : isInstructor ? [
        { k: 'Teaching', v: 'Clinical instruction' },
        { k: 'Assigned', v: spaces.length + ' Year 2 Nursing course spaces' },
        { k: 'Unpublished', v: inReview.length + ' weeks still in draft or review' },
      ] : [
        { k: 'Certificate', v: p.credential },
        { k: 'Semester', v: entry.label + ' · ' + entry.period + ' 2026' },
        { k: 'Rhythm', v: s.sessions + ' sessions each week' },
        { k: 'Courses', v: reg.length + ' registered' },
        { k: 'Access', v: s.paid ? 'Open until 30 June 2026' : 'Closed · semester charge unpaid' },
      ]).concat([
        { k: 'Language', v: 'English · Uganda' },
        { k: 'Time zone', v: 'Kampala · EAT (UTC+3)' },
        { k: 'Stored', v: 'On this device only' },
      ]),
      primaryChoices: CHANNELS.map((c) => ({
        label: c.name, on: s.primaryCh === c.id,
        bd: s.primaryCh === c.id ? NAVY : LINE,
        bg: s.primaryCh === c.id ? NAVY : '#fff',
        fg: s.primaryCh === c.id ? '#fff' : INK,
        pick: () => this.setState({ primaryCh: c.id, chOn: Object.assign({}, this.state.chOn, { [c.id]: true }) }),
      })),
      channels: CHANNELS.map((c) => {
        const on = !!s.chOn[c.id];
        const tested = !!s.chTested[c.id];
        return {
          name: c.name + (s.primaryCh === c.id ? ' · first' : ''),
          handle: c.id === 'telegram' ? (on ? '@' + (s.name.split(' ')[0] || 'you').toLowerCase() + '_ug' : 'Not linked yet') : this.mask(),
          carries: c.carries, cost: c.cost, on,
          state: !on ? 'Off' : c.id === 'telegram' ? 'Linked' : 'Verified',
          stateTone: on ? GREEN : FAINT,
          bd: on ? LINE : '#e9edf1',
          swBd: on ? NAVY : LINE, swBg: on ? NAVY : '#fff',
          knob: on ? '22px' : '3px', knobBg: on ? '#fff' : '#b6bec7',
          testWord: tested ? 'Test sent' : 'Send a test',
          test: () => this.setState((pr) => ({ chTested: Object.assign({}, pr.chTested, { [c.id]: true }) })),
          toggle: () => this.setState((pr) => ({ chOn: Object.assign({}, pr.chOn, { [c.id]: !pr.chOn[c.id] }) })),
        };
      }),
      emailRows: [
        { address: s.email || '—', note: 'Issued by your school · signs you in', tag: 'Primary', tone: GREEN },
        { address: (s.name.split(' ')[0] || 'you').toLowerCase() + '@gmail.com', note: 'Your own address · receipts and summaries only', tag: 'Secondary', tone: FAINT },
      ],
      quietOn: s.quietOn,
      quietFrom: s.quietWindow.split('–')[0],
      quietTo: s.quietWindow.split('–')[1],
      quietBd: s.quietOn ? NAVY : LINE,
      quietBg: s.quietOn ? NAVY : '#fff',
      quietKnob: s.quietOn ? '22px' : '3px',
      quietKnobBg: s.quietOn ? '#fff' : '#b6bec7',
      toggleQuiet: () => this.setState((pr) => ({ quietOn: !pr.quietOn })),
      quietChoices: ['21:00–06:00', '22:00–05:00', '20:00–07:00'].map((q) => ({
        label: q, bd: s.quietWindow === q ? NAVY : LINE,
        bg: s.quietWindow === q ? NAVY : '#fff',
        fg: s.quietWindow === q ? '#fff' : INK,
        pick: () => this.setState({ quietWindow: q, quietOn: true }),
      })),
      sentShow: Object.keys(s.chTested).length > 0,
      sentNote: 'Test message sent to ' + Object.keys(s.chTested).map((k) => (CHANNELS.find((c) => c.id === k) || {}).name).join(' and ') + '. If nothing arrives within a minute, the number is wrong.',
      notifyCols: (sm ? '150px' : '210px') + ' repeat(4, minmax(56px, 1fr))',
      notifyHeads: [
        { label: 'SMS', tone: s.chOn.sms ? MUTED : FAINT },
        { label: 'WhatsApp', tone: s.chOn.whatsapp ? MUTED : FAINT },
        { label: 'Telegram', tone: s.chOn.telegram ? MUTED : FAINT },
        { label: 'Email', tone: MUTED },
      ],
      notifyRows: NOTIFY_TOPICS.map((t) => ({
        label: t.label, note: t.note,
        cells: ['sms', 'whatsapp', 'telegram', 'email'].map((ch) => {
          const lvl = (s.notify[t.id] || {})[ch] || 'off';
          const live = lvl !== 'off' && (ch === 'email' || s.chOn[ch]);
          return {
            word: (LEVELS.find((l) => l.id === lvl) || LEVELS[3]).word,
            bd: live ? NAVY : LINE,
            bg: live ? NAVY : '#fff',
            fg: live ? '#fff' : FAINT,
            cycle: () => this.setState((pr) => {
              const i = LEVELS.findIndex((l) => l.id === ((pr.notify[t.id] || {})[ch] || 'off'));
              const next = LEVELS[(i + 1) % LEVELS.length].id;
              const topic = Object.assign({}, pr.notify[t.id], { [ch]: next });
              return { notify: Object.assign({}, pr.notify, { [t.id]: topic }) };
            }),
          };
        }),
      })),
      lowDataOn: s.lowData,
      lowDataBd: s.lowData ? NAVY : LINE,
      lowDataBg: s.lowData ? NAVY : '#fff',
      lowDataKnob: s.lowData ? '22px' : '3px',
      lowDataKnobBg: s.lowData ? '#fff' : '#b6bec7',
      toggleLowData: () => this.setState((pr) => ({ lowData: !pr.lowData })),
      storageUsed: '2.1 MB of 1 GB',
      storagePct: '1%',
      fileRows: ACCT_FILES,
      pairCode: s.pair,
      pairNote: s.pairFresh ? 'Made just now · expires in 10 minutes' : 'Made at 07:04 · expires in 10 minutes',
      newPair: () => this.setState({ pair: String(Math.floor(100 + Math.random() * 900)) + ' ' + String(Math.floor(100 + Math.random() * 900)), pairFresh: true }),
      sessionRows: ACCT_SESSIONS.filter((d) => s.ended.indexOf(d.id) === -1).map((d) => ({
        device: d.device, meta: d.meta,
        action: d.current ? 'This device' : 'Sign out',
        actionFg: d.current ? FAINT : INK,
        cursor: d.current ? 'default' : 'pointer',
        end: () => { if (!d.current) this.setState((pr) => ({ ended: pr.ended.concat([d.id]) })); },
      })),
      passChanged: '12 August 2026',
      a11yRows: [
        { id: 'contrast', label: 'Higher contrast', note: 'Darker text and firmer lines, for bright wards and cracked screens.' },
        { id: 'bigText', label: 'Larger text', note: 'Raises every size by one step without changing the layout.' },
        { id: 'dyslexia', label: 'Dyslexia-friendly type', note: 'Swaps the reading face for one with heavier letter bottoms.' },
        { id: 'underline', label: 'Underline every link', note: 'Links stay underlined instead of only on hover.' },
        { id: 'motion', label: 'Remove animation', note: 'Pages appear rather than slide in.' },
      ].map((a) => {
        const on = !!s.a11y[a.id];
        return Object.assign({}, a, {
          on, bd: on ? NAVY : LINE, bg: on ? NAVY : '#fff',
          knob: on ? '22px' : '3px', knobBg: on ? '#fff' : '#b6bec7',
          toggle: () => this.setState((pr) => ({ a11y: Object.assign({}, pr.a11y, { [a.id]: !pr.a11y[a.id] }) })),
        });
      }),
      globalRows: globalNotices.map((n) => ({ title: n.title, body: n.body, when: n.when, author: n.author + ' · everyone' })),
      hasGlobal: globalNotices.length > 0,
      noGlobal: globalNotices.length === 0,
      helpRows: [
        { q: 'The wallet prompt never came.', a: 'Nothing was taken. Open Payments and send the request again, or pay at a branch and give the slip number.' },
        { q: 'I paid but access is still closed.', a: 'Bank deposits are matched by a person, usually the same working day. Wallet payments open access by themselves.' },
        { q: 'Does this replace my school?', a: 'No. Deep Focus is a private revision plan. It awards no credit and changes no result.' },
      ],

      // ══ desk shell ══
      inDesk,
      dnavOpen: s.dnav && deskSubDef.length > 0,
      dnavCols: s.dnav && deskSubDef.length > 0 ? (sm ? 'minmax(0,1fr)' : '196px minmax(0,1fr)') : 'minmax(0,1fr)',
      dnavBtnBg: s.dnav ? NAVY : '#fff',
      dnavBtnFg: s.dnav ? '#fff' : INK,
      toggleDnav: () => this.setState((pr) => ({ dnav: !pr.dnav })),
      deskName: isAdmin ? 'Registry' : 'Teaching desk',
      deskScope: isAdmin ? 'Academic operations' : 'Six assigned spaces',
      deskCrumb: (DESK_RAIL[isAdmin ? 'admin' : 'instructor'].filter((r) => r.key === deskRailKey)[0] || { label: '' }).label,
      deskCrumbSub: (deskSubDef.filter((n) => n.route === deskActive)[0] || { label: '' }).label,
      deskCrumbSubShow: deskSubDef.length > 0 && deskSubDef.some((n) => n.route === deskActive),
      deskState: isAdmin
        ? (open.length ? open.length + ' waiting on you' : 'Queue clear')
        : (unmarked.length ? unmarked.length + ' to mark' : 'Marking clear'),
      deskStateTone: isAdmin ? (open.length ? CLAY : GREEN) : (unmarked.length ? CLAY : GREEN),
      deskHome: () => this.go(isAdmin ? 'aToday' : 'iToday'),
      deskNav: deskSubDef.map((n) => ({
        label: n.label,
        bg: deskActive === n.route ? '#fff' : 'transparent',
        fg: deskActive === n.route ? INK : '#4a5a8a',
        fw: deskActive === n.route ? 700 : 500,
        edge: deskActive === n.route ? NAVY : 'transparent',
        badge: n.count > 0, count: String(n.count),
        badgeBg: CLAY,
        go: () => this.setState({ route: n.route, caseId: null, markOpenId: null }),
      })),
      deskSubShow: deskSubDef.length > 0,

      // ══ admin · today ══
      adminHead: open.length === 0 ? 'Nothing is waiting on a person.' : open.length === 1 ? 'One decision is waiting on you.' : open.length + ' decisions are waiting on you.',
      adminHeadNote: 'This desk decides the things a machine must not decide alone: whose money arrived, whose clearance stands, and which map a learner may open. Everything else on it is a record.',
      adminTiles: [
        { k: 'Money awaiting', v: money(sumOf((x) => x === 'Awaiting')), d: 'Bank deposits needing a person', fg: CLAY, go: () => this.go('aMoney') },
        { k: 'Decisions open', v: String(open.length), d: 'Clearance, payment and access', fg: open.length ? CLAY : GREEN, go: () => this.go('aQueue') },
        { k: 'Maps in review', v: String(inReview.length), d: 'Blocking ' + blocked + ' learners', fg: inReview.length ? CLAY : GREEN, go: () => this.go('aCourses') },
        { k: 'Access open', v: String(roster.filter((l) => l.access === 'active').length), d: 'Of ' + roster.length + ' registered learners', fg: GREEN, go: () => this.go('aPeople') },
      ],

      goPublishing: () => this.go('aPublishing'),
      funnelCols: sm ? 'minmax(0,1fr) auto' : 'minmax(0,1fr) 140px 70px',
      blockRows: [
        { k: 'Registered for Block 5', v: '39', pct: '100%', bar: NAVY, note: 'Learners with at least one course on their plan for 31 August – 18 October.' },
        { k: 'Paid and open', v: '34', pct: '87%', bar: GREEN, note: 'Semester charge settled. Every registered course opens for them.' },
        { k: 'Waiting on us', v: String(awaitRows.length), pct: '5%', bar: CLAY, note: 'They have paid. A person has not matched the deposit yet. This number should be nought by tomorrow.' },
        { k: 'Unpaid', v: '5', pct: '13%', bar: '#d3dae1', note: 'Access to paid courses is closed. The free foundation course stays open to all five.' },
        { k: 'On the free course only', v: '7', pct: '18%', bar: '#2f6f8f', note: 'Working through Reading, Speaking and Writing before committing money.' },
        { k: 'Never opened a week', v: '3', pct: '8%', bar: '#9a6a45', note: 'Paid, enrolled, and has not opened anything. The most recoverable group on this page.' },
      ],
      pubSummary: teachIds.map((cid2) => {
        const u = this.course(cid2) || { code: '', title: '' };
        const ws = this.weeksFor(cid2);
        const pn = ws.filter((w2) => this.pubOf(cid2, w2.no) === 'published').length;
        const sc2 = ws.filter((w2) => this.pubOf(cid2, w2.no) === 'scheduled').length;
        const dr = ws.length - pn - sc2;
        return {
          title: u.code + ' · ' + u.title,
          detail: pn + ' published · ' + sc2 + ' scheduled · ' + dr + ' draft',
          state: dr > 0 ? dr + ' unwritten' : 'Complete',
          tone: dr > 0 ? CLAY : GREEN,
        };
      }),
      attentionRows: [
        { who: 'Moses Kato', why: 'Deposited on 2 September. Nobody has matched the slip, so his courses are still shut.', tag: 'Money · one day old', tone: CLAY, go: () => this.go('aAwaiting') },
        { who: 'Nancy Atwine', why: 'Clearance for Year 1 Semester 2 was confirmed by the school in July and never recorded here.', tag: 'Clearance · record only', tone: '#9a6a45', go: () => this.go('aQueue') },
        { who: 'Medical Nursing I · Week 03', why: 'Scheduled to open Monday and still a draft. Thirty-eight learners will find nothing there.', tag: 'Publishing · opens in 3 days', tone: CLAY, go: () => this.go('aPublishing') },
        { who: 'Three paid learners', why: 'Paid, registered, and have not opened a single week since the block began.', tag: 'Engagement · write to them', tone: '#9a6a45', go: () => this.go('aPeople') },
      ],

      // ══ admin · programmes ══
      progCols: sm ? '64px minmax(0,1fr)' : '76px minmax(0,1fr) 132px',
      freeUnitRow: {
        code: FREE_UNIT.code, title: FREE_UNIT.title,
        weeks: FOUND_WEEKS.length + ' weeks published',
        note: 'Given to every learner the moment they are onboarded, before any money is taken. It carries no programme credit and it cannot be failed. Seven learners are working through it right now without having paid for anything.',
      },
      programmeRows: Object.keys(PATHWAYS).map((k) => {
        const it = PATHWAYS[k];
        const pub = it.units.filter((u) => (this.weeksFor(u.id) || []).length > 0).length;
        return {
          credential: it.credential, summary: it.summary,
          units: String(it.units.length), published: String(pub),
          pubFg: pub ? GREEN : CLAY,
          terms: TERMS.map((t) => {
            const us = it.units.filter((u) => u.term === t.id);
            return {
              label: t.label, period: t.period,
              count: us.length + (us.length === 1 ? ' unit' : ' units'),
              units: us.map((u) => {
                const has = (this.weeksFor(u.id) || []).length;
                return { code: u.code, title: u.title, state: has ? has + ' weeks published' : 'No weeks yet', tone: has ? GREEN : FAINT };
              }),
            };
          }),
        };
      }),

      // ══ admin · staff ══
      staffRows: TEAM.map((t) => ({
        name: t.name, role: t.role, desk: t.desk, scope: t.scope,
        initials: t.name.split(' ').map((x) => x[0]).join('').slice(0, 2).toUpperCase(),
        can: t.can.map((c) => ({ t: c })),
        spaces: t.role === 'Instructor' ? '6' : '—',
        learners: t.role === 'Instructor' ? '42' : String(roster.length),
        load: t.role === 'Instructor' ? String(unmarked.length) : '—',
        loadFg: t.role === 'Instructor' && unmarked.length ? CLAY : INK,
      })),

      // ══ admin · announcements ══
      noticeAudience: [
        { id: 'all', label: 'Every learner' },
        { id: 'nursing', label: 'Certificate in Nursing' },
        { id: 'midwifery', label: 'Certificate in Midwifery' },
      ].map((a) => ({
        label: a.label,
        bd: s.noticeAud === a.id ? NAVY : '#e4e8ec',
        bg: s.noticeAud === a.id ? NAVY : '#fff',
        fg: s.noticeAud === a.id ? '#fff' : INK,
        pick: () => this.setState({ noticeAud: a.id }),
      })),
      aNoticeTitle: s.aNoticeTitle,
      setANoticeTitle: (e) => this.setState({ aNoticeTitle: e.target.value }),
      aNoticeBody: s.aNoticeBody,
      setANoticeBody: (e) => this.setState({ aNoticeBody: e.target.value }),
      aNoticeLeft: 220 - s.aNoticeBody.length,
      noticeDelivery: [
        { k: 'SMS', v: 'The title only, to every learner whose first channel is SMS. No data needed to receive it.' },
        { k: 'WhatsApp', v: 'Title and message in full, to learners who have verified their number.' },
        { k: 'In Deep Focus', v: 'On the Announcements pane of every learner’s Account, permanently.' },
      ],
      aNoticeCount: s.noticeAud === 'all' ? String(roster.length) + ' learners' : s.noticeAud === 'nursing' ? '38 learners' : '19 learners',
      aNoticeBg: s.aNoticeTitle.trim() && s.aNoticeBody.trim() ? NAVY : '#c3cad2',
      aNoticeCursor: s.aNoticeTitle.trim() && s.aNoticeBody.trim() ? 'pointer' : 'not-allowed',
      sendANotice: () => {
        if (!s.aNoticeTitle.trim() || !s.aNoticeBody.trim()) return;
        this.setState((pr) => ({
          notices: [{ id: 'n-' + Date.now(), title: pr.aNoticeTitle.trim(), body: pr.aNoticeBody.trim(), space: null, audience: 'all-learners', author: 'Amara Kato', when: 'Just now' }].concat(pr.notices),
          audit: [this.log('amara kato', 'announcement', 'Announced “' + pr.aNoticeTitle.trim() + '” to ' + (pr.noticeAud === 'all' ? 'every learner' : pr.noticeAud))].concat(pr.audit),
          aNoticeTitle: '', aNoticeBody: '',
        }));
      },

      // ══ admin · already decided ══
      decidedRows: decidedList.map((d) => ({
        verdict: d.verdict, tone: d.ok ? GREEN : CLAY,
        who: d.who, what: d.what, by: d.by,
        reopen: () => this.setState((pr) => { const v = Object.assign({}, pr.verdicts); delete v[d.id]; return { verdicts: v, route: 'aQueue', caseId: d.id }; }),
      })),
      decidedEmpty: decidedList.length === 0,

      // ══ admin · awaiting ══
      awaitTiles: [
        { k: 'Deposits waiting', v: String(awaitRows.length), d: 'Each one is a learner locked out of paid courses', fg: awaitRows.length ? CLAY : GREEN },
        { k: 'Oldest', v: awaitRows.length ? '1 day' : '—', d: 'Anything past one working day is a failure', fg: awaitRows.length ? CLAY : GREEN },
        { k: 'Wallet, same minute', v: '2', d: 'Confirmed and opened without a person', fg: GREEN },
        { k: 'Value held', v: money(awaitRows.length * AMOUNT), d: 'Received but not yet matched to a name', fg: INK },
      ],
      awaitRows: awaitRows,

      // ══ admin · publishing ══
      pubCourses: teachIds.map((cid2) => {
        const u = this.course(cid2) || { code: '', title: '' };
        const ws = this.weeksFor(cid2);
        const pubN = ws.filter((w2) => this.pubOf(cid2, w2.no) === 'published').length;
        const sp = SPACES.filter((x) => x.title === u.title)[0];
        return {
          code: u.code, title: u.title,
          owner: sp ? sp.owner : 'Grace Nalubega',
          meta: (sp ? sp.learners + ' learners · ' : '') + ws.length + ' weeks written',
          state: pubN === ws.length ? 'All weeks open' : pubN + ' of ' + ws.length + ' open',
          tone: pubN === ws.length ? GREEN : CLAY,
          weeks: ws.map((w2) => {
            const st = this.pubOf(cid2, w2.no);
            const meta = PUB_STATE[st];
            return {
              no: String(w2.no).padStart(2, '0'), word: meta.word, note: meta.note,
              bd: st === 'published' ? '#cfe0d6' : st === 'scheduled' ? '#e0d6cd' : '#e4e8ec',
              bg: st === 'published' ? '#f4f9f6' : st === 'scheduled' ? '#fdfbf8' : '#fbfcfd',
              fg: st === 'draft' ? '#8d96a2' : INK,
              noteFg: '#8d96a2',
            };
          }),
        };
      }),

      // ══ instructor · publishing ══
      pubCols: sm ? 'minmax(0,1fr)' : 'minmax(0,1fr) auto',
      pubJustify: sm ? 'start' : 'end',
      pubCourseTabs: teachIds.map((cid2) => {
        const u = this.course(cid2) || { code: '', title: '' };
        const on = pubCid === cid2;
        return {
          label: u.code + ' · ' + u.title,
          bd: on ? NAVY : '#e4e8ec', bg: on ? NAVY : '#fff', fg: on ? '#fff' : INK,
          pick: () => this.setState({ pubCid: cid2 }),
        };
      }),
      pubWeekRows: this.weeksFor(pubCid).map((w2) => {
        const st = this.pubOf(pubCid, w2.no);
        const meta = PUB_STATE[st];
        const items = (this.weekGroup(pubCid, w2.no) || { items: [] }).items;
        const graded = items.filter((x) => x.pts > 0);
        return {
          no: String(w2.no).padStart(2, '0'), title: w2.title,
          meta: spanOf(w2.no) + ' · opens Monday ' + dLabel(w2.no, 1),
          note: meta.note, tone: meta.tone,
          counts: items.length + ' items · ' + graded.length + ' graded · ' + graded.reduce((t, x) => t + x.pts, 0) + ' pts',
          bd: st === 'published' ? '#cfe0d6' : st === 'scheduled' ? '#e0d6cd' : '#e4e8ec',
          headBg: st === 'draft' ? '#fbfcfd' : '#fff',
          states: ['draft', 'scheduled', 'published'].map((k) => ({
            label: PUB_STATE[k].word,
            bd: st === k ? NAVY : '#e4e8ec', bg: st === k ? NAVY : '#fff', fg: st === k ? '#fff' : '#4c545f',
            pick: () => this.setPub(pubCid, w2.no, k),
          })),
          preview: () => this.setState({ role: 'learner', route: 'week', courseId: pubCid, weekNo: w2.no, csec: 'home', itemId: null, discId: null }),
        };
      }),
      pubExplain: [
        { k: 'Draft', v: 'The week does not appear on the learner’s course home at all. No square, no date, nothing to ask about.', tone: FAINT },
        { k: 'Scheduled', v: 'The square appears and shows its Monday, but it cannot be opened. Learners can plan their month without reading ahead.', tone: '#9a6a45' },
        { k: 'Published', v: 'Every item opens. Due dates start counting, the calendar fills in, and the graded work appears on their to-do list.', tone: GREEN },
      ],

      // ══ admin · policy ══
      policyCols: sm ? 'minmax(0,1fr)' : 'minmax(0,1fr) 190px',
      policyJustify: sm ? 'start' : 'end',
      policyGroups: POLICY_GROUPS,

      // ══ instructor · today ══
      instHeadNote: 'Everything on this page is somebody waiting on you: work that has not come back, a week that has not opened, a private note nobody else will read, and the learners who have gone quiet.',
      instTiles: [
        { k: 'To mark', v: String(unreturned.length), d: 'Oldest is ' + (unreturned.length ? '2 days' : 'none') + ' old. Five working days is the promise.', fg: unreturned.length ? CLAY : GREEN, go: () => this.go('iMark') },
        { k: 'Weeks not open', v: String(draftWeeks), d: 'Draft or scheduled across your three written courses.', fg: draftWeeks ? CLAY : GREEN, go: () => this.go('iPublish') },
        { k: 'Ponders unread', v: String(ponderUnread.length), d: 'Read them all before Thursday. They are why the gathering works.', fg: ponderUnread.length ? '#9a6a45' : GREEN, go: () => this.go('iPonders') },
        { k: 'Learners gone quiet', v: String(atRisk), d: 'No post, no quiz, or nothing opened for seven days.', fg: atRisk ? '#9a6a45' : GREEN, go: () => this.go('iLearners') },
      ],
      goMarking: () => this.go('iMark'),
      goGathering: () => this.go('iGathering'),
      goPublish: () => this.go('iPublish'),
      instMarkRows: unreturned.slice(0, 5).map((x, i) => ({
        age: [2, 2, 1, 1, 0][i] === 0 ? 'Today' : [2, 2, 1, 1, 0][i] + ' days',
        ageTone: [2, 2, 1, 1, 0][i] >= 2 ? CLAY : FAINT,
        who: x.name, what: x.item + ' · ' + x.course + ' · Week ' + String(x.week).padStart(2, '0'),
        pts: 'of ' + x.outOf,
        go: () => this.setState({ route: 'iMark', markOpenId: x.id, markFilter: 'all' }),
      })),
      instMarkEmpty: unreturned.length === 0,
      instGatherNote: 'She runs the hour from the written agenda. ' + (s.ponderAgenda.length || 3) + ' questions from Ponder are queued for you to answer without naming anybody.',
      turnRows: [
        { k: 'Returned inside five days', v: '94%', fg: GREEN },
        { k: 'Median turnaround', v: '2.1 days', fg: INK },
        { k: 'Oldest still open', v: unreturned.length ? '2 days' : '—', fg: unreturned.length ? CLAY : GREEN },
      ],
      instPubRows: teachIds.map((cid2) => {
        const u = this.course(cid2) || { code: '', title: '' };
        const ws = this.weeksFor(cid2);
        const pn = ws.filter((w2) => this.pubOf(cid2, w2.no) === 'published').length;
        const sc2 = ws.filter((w2) => this.pubOf(cid2, w2.no) === 'scheduled').length;
        const dr = ws.length - pn - sc2;
        return {
          title: u.code + ' · ' + u.title,
          detail: pn + ' open to learners · ' + sc2 + ' scheduled · ' + dr + ' still draft',
          state: dr > 0 ? dr + ' to write' : sc2 > 0 ? sc2 + ' queued' : 'All open',
          tone: dr > 0 ? CLAY : sc2 > 0 ? '#9a6a45' : GREEN,
          go: () => this.setState({ route: 'iPublish', pubCid: cid2 }),
        };
      }),
      instRiskCols: sm ? '30px minmax(0,1fr) auto' : '30px minmax(0,1fr) 130px',
      instRiskRows: CLASSMATES.map((c, i) => ({ c, flags: riskOf(c.name, i), i }))
        .filter((x) => x.flags.length > 0)
        .sort((a, b) => b.flags.length - a.flags.length)
        .slice(0, 5)
        .map((x) => ({
          name: x.c.name,
          initials: x.c.name.split(' ').map((y) => y[0]).join('').slice(0, 2).toUpperCase(),
          why: x.flags.join(' · '),
          seen: x.flags.indexOf('Silent 7 days') !== -1 ? 'Silent 7 days' : 'Seen recently',
          tone: x.flags.indexOf('Silent 7 days') !== -1 ? CLAY : '#9a6a45',
          go: () => this.go('iLearners'),
        })),

      // ══ instructor · marking ══
      markHead: unreturned.length === 0 ? 'Everything has been returned.' : unreturned.length === 1 ? 'One piece of work is waiting.' : unreturned.length + ' pieces of work are waiting.',
      markHeadCols: '34px minmax(0,1fr) auto',
      markScoreCols: sm ? 'minmax(0,1fr)' : '130px 110px auto',
      markFilters: [
        { id: 'all', label: 'Everything · ' + markQueue.length },
        { id: 'open', label: 'Submitted · ' + markQueue.filter((x) => stateOf(x.id) === 'submitted').length },
        { id: 'marking', label: 'Being marked · ' + s.markStarted.filter((id) => s.returned.indexOf(id) === -1).length },
        { id: 'returned', label: 'Returned · ' + s.returned.length },
        { id: 'late', label: 'Late · ' + markQueue.filter((x) => x.late).length },
      ].map((f) => ({
        label: f.label,
        bd: s.markFilter === f.id ? NAVY : '#e4e8ec',
        bg: s.markFilter === f.id ? NAVY : '#fff',
        fg: s.markFilter === f.id ? '#fff' : INK,
        pick: () => this.setState({ markFilter: f.id }),
      })),
      markEmpty: markList.length === 0,
      markRows: markList.map((x) => {
        const st = stateOf(x.id);
        const done = st === 'returned';
        const isOpen = s.markOpenId === x.id;
        const ticks = s.markTicks[x.id] || [];
        const rubricTotal = x.rubric.reduce((t, r, i) => t + (ticks.indexOf(i) !== -1 ? r.pts : 0), 0);
        const score = s.markScores[x.id] === undefined ? '' : s.markScores[x.id];
        const comment = s.markComments[x.id] === undefined ? '' : s.markComments[x.id];
        const ready = String(score).trim() !== '' && String(comment).trim() !== '';
        return {
          initials: x.name.split(' ').map((y) => y[0]).join('').slice(0, 2).toUpperCase(),
          title: x.name + ' · ' + x.item,
          meta: x.course + ' · Week ' + String(x.week).padStart(2, '0') + ' · handed in ' + x.when + ' · out of ' + x.outOf + (x.late ? ' · late' : '') + (x.own ? ' · from this device' : ''),
          state: done ? 'Returned ' + (s.markScores[x.id] || rubricTotal) + '/' + x.outOf : st === 'marking' ? 'Being marked' : x.late ? 'Late · submitted' : 'Submitted',
          tone: done ? GREEN : st === 'marking' ? '#9a6a45' : x.late ? CLAY : FAINT,
          bd: isOpen ? NAVY : x.own ? '#cfd8e3' : '#e4e8ec',
          headBg: isOpen ? '#f7f9fa' : '#fff',
          caret: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          open2: isOpen,
          open: () => this.setState((pr) => ({
            markOpenId: pr.markOpenId === x.id ? null : x.id,
            markStarted: pr.markOpenId === x.id || pr.markStarted.indexOf(x.id) !== -1 || pr.returned.indexOf(x.id) !== -1 ? pr.markStarted : pr.markStarted.concat(x.id),
          })),
          body: x.body,
          outOf: String(x.outOf),
          rubric: x.rubric.map((r, i) => {
            const on = ticks.indexOf(i) !== -1;
            return {
              t: r.t, pts: r.pts + ' pts',
              bd: on ? NAVY : '#e4e8ec', bg: on ? '#fafbfc' : '#fff',
              dotBd: on ? NAVY : LINE, dotBg: on ? NAVY : '#fff', dot: on ? 1 : 0,
              toggle: () => this.setState((pr) => {
                const cur = pr.markTicks[x.id] || [];
                const nx = cur.indexOf(i) !== -1 ? cur.filter((y) => y !== i) : cur.concat(i);
                return { markTicks: Object.assign({}, pr.markTicks, { [x.id]: nx }) };
              }),
            };
          }),
          rubricTotal: rubricTotal + ' / ' + x.outOf,
          score: score,
          setScore: (e) => { const v = e.target.value.replace(/[^0-9]/g, ''); this.setState((pr) => ({ markScores: Object.assign({}, pr.markScores, { [x.id]: v }) })); },
          useRubric: () => this.setState((pr) => ({ markScores: Object.assign({}, pr.markScores, { [x.id]: String(rubricTotal) }) })),
          comment: comment,
          setComment: (e) => { const v = e.target.value; this.setState((pr) => ({ markComments: Object.assign({}, pr.markComments, { [x.id]: v }) })); },
          returnWord: done ? 'Returned' : 'Return work',
          returnBg: done ? GREEN : ready ? NAVY : '#c3cad2',
          returnCursor: done ? 'default' : ready ? 'pointer' : 'not-allowed',
          returnWork: () => {
            if (done || !ready) return;
            this.setState((pr) => ({
              returned: pr.returned.concat(x.id),
              markOpenId: null,
              handed: pr.handed[x.id]
                ? Object.assign({}, pr.handed, { [x.id]: Object.assign({}, pr.handed[x.id], { state: 'returned', mark: pr.markScores[x.id], comment: pr.markComments[x.id], outOf: x.outOf }) })
                : pr.handed,
              audit: [this.log('grace nalubega', 'marking', 'Returned ' + x.item + ' to ' + x.name + ' · ' + pr.markScores[x.id] + '/' + x.outOf)].concat(pr.audit),
            }));
          },
          skip: () => this.setState({ markOpenId: null }),
          hint: done ? 'The learner can see this mark and comment now.' : ready ? 'Nothing is sent until you press Return work.' : 'A mark and one comment are both required.',
          hintTone: done ? GREEN : ready ? FAINT : CLAY,
        };
      }),

      // ══ instructor · learners ══
      learnerScope: 'CN 211 Pharmacology I · ' + CLASSMATES.length + ' learners',
      signalCols: sm ? '34px minmax(0,1fr) auto' : '34px minmax(0,1fr) 200px 110px 82px',
      riskRows: CLASSMATES.map((c, i) => {
        const flags = riskOf(c.name, i);
        const quiet = flags.indexOf('Silent 7 days') !== -1;
        return {
          name: c.name, place: c.place,
          initials: c.name.split(' ').map((x) => x[0]).join('').slice(0, 2).toUpperCase(),
          flags: flags.map((t) => ({ t, bd: '#e0d6cd', bg: '#fdfbf8', fg: '#9a6a45' })),
          seen: quiet ? 'Last seen 7 days' : i % 2 === 0 ? 'Today' : 'Yesterday',
          tone: quiet ? CLAY : INK,
          done: (7 - (i % 5)) + ' of 12 items',
          write: () => this.go('iNotice'),
          n: flags.length,
        };
      }).sort((a, b) => b.n - a.n),

      // ══ instructor · ponders ══
      ponderCols: '34px minmax(0,1fr)',
      ponderRows: PONDERS.map((p2) => {
        const read = s.ponderRead.indexOf(p2.id) !== -1;
        const onAgenda = s.ponderAgenda.indexOf(p2.id) !== -1;
        return {
          name: p2.name, body: p2.body,
          initials: p2.name.split(' ').map((x) => x[0]).join('').slice(0, 2).toUpperCase(),
          meta: 'Week ' + String(p2.week).padStart(2, '0') + ' · ' + p2.when,
          bd: read ? '#e4e8ec' : NAVY,
          word: read ? 'Read' : 'Mark read',
          btnBd: read ? '#e4e8ec' : NAVY,
          btnBg: read ? '#fff' : NAVY,
          btnFg: read ? FAINT : '#fff',
          mark: () => this.setState((pr) => ({ ponderRead: pr.ponderRead.indexOf(p2.id) !== -1 ? pr.ponderRead.filter((x) => x !== p2.id) : pr.ponderRead.concat(p2.id) })),
          agendaWord: onAgenda ? 'On Thursday’s agenda' : 'Answer at the gathering',
          agenda: () => this.setState((pr) => ({ ponderAgenda: pr.ponderAgenda.indexOf(p2.id) !== -1 ? pr.ponderAgenda.filter((x) => x !== p2.id) : pr.ponderAgenda.concat(p2.id) })),
          pts: 'Ponder · 10 pts · never shown to the class',
        };
      }),

      // ══ instructor · gathering ══
      gatherWhen: 'Thursday 10 September · 19:00 · one hour',
      gatherLead: 'Agnes Chebet · Kapchorwa maternity',
      gatherLeadNote: 'She runs the hour from the agenda. You listen, then answer whatever is still standing at the end. If she does not appear by 19:05, Nancy Atwine takes it.',
      gatherAgenda: [
        { at: '19:00', what: 'Open and collect questions', note: 'Written questions only, so the quiet ones are heard too.', who: 'Lead student' },
        { at: '19:12', what: 'Teach-back · contraindication', note: 'Two learners explain it with no notes on screen.', who: 'Denis, Esther' },
        { at: '19:24', what: 'One case, argued', note: 'Pre-eclampsia with asthma. The class decides, then the guideline is opened.', who: 'Everyone' },
        { at: '19:36', what: 'The questions collected', note: (s.ponderAgenda.length || 3) + ' items, answered without naming anybody.', who: 'You' },
        { at: '19:48', what: 'Close · what Week 02 asks', note: 'The chapter, the two dates, and who hosts next.', who: 'Lead student' },
      ],
      gatherQuestions: GATHER_Q,
      attendCount: s.attendance.length + ' of ' + CLASSMATES.length + ' present',
      attendRows: CLASSMATES.map((c) => {
        const on = s.attendance.indexOf(c.name) !== -1;
        return {
          name: c.name,
          bd: on ? NAVY : LINE, bg: on ? NAVY : '#fff', dot: on ? 1 : 0,
          fw: on ? 700 : 500,
          word: on ? 'Present' : 'Not marked',
          tone: on ? GREEN : FAINT,
          toggle: () => this.setState((pr) => ({ attendance: pr.attendance.indexOf(c.name) !== -1 ? pr.attendance.filter((x) => x !== c.name) : pr.attendance.concat(c.name) })),
        };
      }),

      // ── admin ──
      isAdmin, isInstructor,
      queueHead: open.length === 0 ? 'Nobody is waiting on you.' : open.length === 1 ? 'One person is waiting on you.' : open.length + ' people are waiting on you.',
      queueEmpty: open.length === 0,
      queueAny: open.length > 0,
      queueCount: open.length,
      queueItems: open.map((c, i) => ({
        kind: c.kind, who: c.who, what: c.what, waiting: c.waiting,
        no: String(i + 1).padStart(2, '0'),
        tone: c.urgency === 0 ? CLAY : FAINT,
        go: () => this.setState({ route: 'aCase', caseId: c.id }),
      })),
      decidedItems: decided.map((d) => ({ word: d.word, who: d.who, what: d.what, kind: d.kind, when: d.when, tone: d.ok ? GREEN : '#a03a2a' })),
      decidedCount: decided.length,
      caseKind: kase ? kase.kind : '',
      casePos: 'Decision ' + Math.min(decided.length + 1, allCases.length) + ' of ' + allCases.length,
      caseQuestion: kase ? kase.question : '',
      caseRows: kase ? kase.rows : [],
      caseEvidenceLabel: kase ? kase.evidenceLabel : '',
      caseEvidence: kase ? kase.evidence : '',
      caseYes: kase ? kase.yes : '',
      caseNo: kase ? kase.no : '',
      decideYes: () => { if (kase) this.decide(kase, true); },
      decideNo: () => { if (kase) this.decide(kase, false); },
      skipCase: () => {
        const rest = open.filter((c) => !kase || c.id !== kase.id);
        this.setState(rest.length ? { caseId: rest[0].id } : { route: 'aQueue', caseId: null });
      },
      resetQueue: () => this.setState({ verdicts: {}, caseId: null, audit: SEED_AUDIT, route: 'aQueue' }),

      moneyTiles: [
        { k: 'Verified', v: money(sumOf((x) => x === 'Verified' || x === 'Matched')), d: 'Access granted', fg: GREEN },
        { k: 'Awaiting', v: money(sumOf((x) => x === 'Awaiting')), d: 'Needs a person', fg: CLAY },
        { k: 'Not collected', v: money(sumOf((x) => x === 'Declined' || x === 'Not found' || x === 'Failed' || x === 'Expired' || x === 'Not started')), d: 'Closed or unpaid', fg: FAINT },
      ],
      ledgerRows: ledger.map((l) => ({ ref: l.ref, who: l.who, meta: l.meta, status: l.status, tone: tone(l.status), amount: money(l.value), by: l.by })),

      opsTiles: [
        { k: 'Published', v: String(spaces.filter((x) => x.mapStatus === 'published').length), d: 'Learners can open them', fg: GREEN },
        { k: 'In review', v: String(spaces.filter((x) => x.mapStatus === 'in-review').length), d: 'Waiting on the author', fg: CLAY },
        { k: 'Draft', v: String(spaces.filter((x) => x.mapStatus === 'draft').length), d: 'Not visible yet', fg: FAINT },
      ],
      opsRows: spaces.map((x) => ({
        code: x.code, title: x.title, owner: x.owner, week: 'Week ' + String(x.week).padStart(2, '0'),
        learners: String(x.learners) + ' learners', completion: x.completion + '%', edited: x.edited,
        status: statusWord[x.mapStatus], tone: statusTone[x.mapStatus],
      })),

      rosterRows: roster.map((l) => ({
        name: l.name, programme: l.programme, semester: l.semester,
        access: accessWord[l.access], tone: accessTone[l.access], seen: l.seen, streak: l.streak + '×',
      })),
      teamRows: TEAM.map((t) => ({ name: t.name, role: t.role, desk: t.desk, scope: t.scope, can: t.can.map((c) => ({ t: c })) })),

      auditRows: s.audit.map((a) => ({ summary: a.summary, who: a.who, when: a.when, action: a.action })),

      // ── instructor ──
      instHead: unreturned.length + ponderUnread.length + draftWeeks === 0
        ? 'Nothing is waiting on you today.'
        : unreturned.length > 0
          ? unreturned.length + (unreturned.length === 1 ? ' piece of work is waiting to come back.' : ' pieces of work are waiting to come back.')
          : draftWeeks > 0
            ? draftWeeks + (draftWeeks === 1 ? ' week is not open to learners yet.' : ' weeks are not open to learners yet.')
            : ponderUnread.length + (ponderUnread.length === 1 ? ' Ponder is unread before Thursday.' : ' Ponders are unread before Thursday.'),
      instBlocked: inReview.length > 0,
      instRows: inReview.map((x) => ({
        code: x.code, title: x.title, week: 'Week ' + String(x.week).padStart(2, '0'),
        learners: String(x.learners) + ' learners waiting', status: statusWord[x.mapStatus], tone: statusTone[x.mapStatus],
        go: () => this.setState({ route: 'iMap', spaceId: x.id }),
      })),
      spaceRows: spaces.map((x) => ({
        code: x.code, title: x.title, week: 'Week ' + String(x.week).padStart(2, '0'),
        learners: String(x.learners), completion: x.completion + '%', pct: x.completion + '%',
        status: statusWord[x.mapStatus], tone: statusTone[x.mapStatus], edited: x.edited,
        go: () => this.setState({ route: 'iMap', spaceId: x.id }),
      })),
      mapSpace: mySpace.title,
      mapCode: mySpace.code,
      mapWeek: 'Week ' + String(mySpace.week).padStart(2, '0'),
      mapLearners: String(mySpace.learners),
      mapStatusWord: statusWord[mySpace.mapStatus],
      mapStatusTone: statusTone[mySpace.mapStatus],
      mapTitleValue: s.mapTitle,
      mapPublished: mySpace.mapStatus === 'published',
      setMapTitle: (e) => this.setState({ mapTitle: e.target.value }),
      checkRows: [
        { t: 'Every item comes from the ' + mySpace.code + ' outline', on: s.checks[0], i: 0 },
        { t: 'Prepare, learn and check are in order', on: s.checks[1], i: 1 },
        { t: 'Nothing here invents a lesson or a deadline', on: s.checks[2], i: 2 },
      ].map((c) => ({
        t: c.t, mb: c.on ? NAVY : LINE, mf: c.on ? NAVY : '#fff', dot: c.on ? 1 : 0,
        toggle: () => this.setState((pr) => { const arr = pr.checks.slice(); arr[c.i] = !arr[c.i]; return { checks: arr }; }),
      })),
      publishLabel: 'Publish to ' + mySpace.learners + ' learners',
      publishBg: checksDone ? NAVY : '#c3cad2',
      publishCursor: checksDone ? 'pointer' : 'not-allowed',
      publishNote: checksDone ? 'Publishing is a promise. ' + mySpace.learners + ' learners will act on this.' : 'Confirm all three before this can go out.',
      publish: () => {
        if (!this.state.checks.every(Boolean)) return;
        const sp = this.space(this.state.spaceId);
        this.setState((pr) => ({
          spaceStatus: Object.assign({}, pr.spaceStatus, { [sp.id]: 'published' }),
          audit: [this.log('grace nalubega', 'course-map', 'Published the ' + sp.title + ' ' + ('Week ' + String(sp.week).padStart(2, '0')) + ' revision map.')].concat(pr.audit),
          checks: [false, false, false],
          route: 'iCourses',
        }));
      },
      signalRows: roster.filter((l) => l.streak < 4).map((l) => ({ name: l.name, meta: l.programme + ' · last seen ' + l.seen.toLowerCase(), streak: l.streak + ' sessions', tone: CLAY })),
      steadyRows: roster.filter((l) => l.streak >= 4).map((l) => ({ name: l.name, meta: l.programme + ' · steady', streak: l.streak + ' sessions', tone: FAINT })),
      signalHead: roster.filter((l) => l.streak < 4).length === 1 ? 'One person could use a word from you.' : roster.filter((l) => l.streak < 4).length + ' people could use a word from you.',
      noticeText: s.notice,
      noticeLeft: 180 - s.notice.length,
      noticeScope: mySpace.title + ' · ' + mySpace.learners + ' learners',
      setNotice: (e) => this.setState({ notice: e.target.value.slice(0, 180) }),
      sentNotices: s.notices.filter((n) => n.author === 'Grace Nalubega').map((n) => ({ title: n.title, body: n.body, when: n.when, scope: n.audience === 'all-learners' ? 'Everyone' : (this.space(n.space) || {}).title || 'Course' })),
      sendNotice: () => {
        const sp = this.space(this.state.spaceId);
        const body = this.state.notice.trim();
        if (!body) return;
        this.setState((pr) => ({
          notices: [{ id: 'notice-' + (pr.notices.length + 1), title: sp.title + ' · ' + ('Week ' + String(sp.week).padStart(2, '0')), body, space: sp.id, audience: 'course', author: 'Grace Nalubega', when: 'Just now' }].concat(pr.notices),
          audit: [this.log('grace nalubega', 'notice', 'Sent a notice to the ' + sp.title + ' course space.')].concat(pr.audit),
          read: false,
          unread: true,
        }));
      },

      // ── nav ──
      goDash: () => this.go(isAdmin ? 'aToday' : isInstructor ? 'iToday' : 'dashboard'),
      goCourses: () => this.go('courses'),
      goGrades: () => this.go('grades'),
      railH: (!isAdmin && !isInstructor) ? 'calc(100vh - 34px)' : '100vh',
      goCourse: () => this.go('course'),
      goPayments: () => this.go('payConfirm'),
      goStatement: () => this.go('statement'),
      goInbox: () => this.setState({ route: 'inbox', read: true, unread: false }),
      goCalendar: () => this.go(isAdmin ? 'aLog' : isInstructor ? 'iSignals' : 'plan'),
      goHelp: () => this.go('help'),
      goAccount: () => this.go('account'),
      goQueue: () => this.setState({ route: 'aQueue', caseId: null }),
      goMoney: () => this.go('aMoney'),
      goOps: () => this.go('aCourses'),
      goSpaces: () => this.go('iCourses'),
      goMap: () => this.go('iMap'),
      goNotice: () => this.go('iNotice'),
      goSignals: () => this.go('iLearners'),
      goMethod: () => this.go('payMethod'),
      goConfirm: () => this.go('payConfirm'),
      goDeposit: () => this.go('deposit'),
      pickMtn: () => this.setState({ wallet: 'mtn', route: 'payNumber' }),
      pickAirtel: () => this.setState({ wallet: 'airtel', route: 'payNumber' }),
      setPhone: (e) => this.setState({ phone: e.target.value, phoneError: false }),
      setSlip: (e) => this.setState({ slip: e.target.value }),
      sendRequest: () => {
        const d = String(this.state.phone).replace(/\D/g, '');
        if (d.length < 9 || d.length > 12) { this.setState({ phoneError: true }); return; }
        this.setState((pr) => ({ route: 'momoWaiting', left: 300, phoneError: false, feed: [], seq: pr.attempts.length === 0 ? 3 : pr.seq + 1 }), () => this.runWallet());
      },

      sendSlip: () => this.setState((pr) => ({
        route: 'depositSent', slipSent: pr.slip || '88213047',
        attempts: [{ ref: 'Bank deposit · ' + (pr.slip || '88213047'), meta: 'Awaiting a person to match it · 4 Sep 2026', status: 'Awaiting', color: CLAY, amount: '58,000' }].concat(pr.attempts),
        audit: [this.log(s.name.toLowerCase(), 'payment', 'Submitted bank deposit ' + (pr.slip || '88213047') + ' for ' + product.title + '.')].concat(pr.audit),
      })),
      goPlan: () => this.go('plan'),
      goPlanner: () => this.setState({ setup: true, step: 0 }),
      goCase: () => this.setState(open.length ? { route: 'aCase', caseId: open[0].id } : { route: 'aQueue' }),
      altLabel: isAdmin ? 'Log' : isInstructor ? 'Signals' : 'Plan',
      openWeek: () => this.go('week', { weekNo: nextWeek ? nextWeek.no : 1 }),
      printPage: () => window.print(),

    };
  }

  render() {
    return <Screens v={this.renderVals()} />;
  }
}
