import React from 'react';

export const INK = '#14171c';
export const NAVY = '#1b1e2b';
export const MUTED = '#6b7480';
export const FAINT = '#8d96a2';
export const LINE = '#d3dae1';
export const CLAY = '#b4552f';
export const GREEN = '#2f6b52';

export const TERMS = [
  { id: 'y1s1', year: 1, semester: 1, label: 'Year 1 · Semester 1', period: 'February–June' },
  { id: 'y1s2', year: 1, semester: 2, label: 'Year 1 · Semester 2', period: 'July–December' },
  { id: 'y2s1', year: 2, semester: 1, label: 'Year 2 · Semester 1', period: 'February–June' },
  { id: 'y2s2', year: 2, semester: 2, label: 'Year 2 · Semester 2', period: 'July–December' },
  { id: 'y3s1', year: 3, semester: 1, label: 'Year 3 · Semester 1', period: 'February–June' },
];

export const NURSING_UNITS = [
  { id: 'cn111-anatomy-physiology-1', code: 'CN 111', title: 'Anatomy & Physiology I', term: 'y1s1' },
  { id: 'cn111-first-aid', code: 'CN 111', title: 'First Aid', term: 'y1s1' },
  { id: 'cn112-foundations-nursing-1', code: 'CN 112', title: 'Foundations of Nursing I', term: 'y1s1' },
  { id: 'cn112-computer', code: 'CN 112', title: 'Computer', term: 'y1s1' },
  { id: 'cn113-personal-communal-health', code: 'CN 113', title: 'Personal and Communal Health', term: 'y1s1' },
  { id: 'cn113-microbiology', code: 'CN 113', title: 'Microbiology', term: 'y1s1' },
  { id: 'cn121', code: 'CN 121', title: 'Anatomy & Physiology II', term: 'y1s2' },
  { id: 'cn122-foundations-nursing-2', code: 'CN 122', title: 'Foundations of Nursing II', term: 'y1s2' },
  { id: 'cn122-sociology', code: 'CN 122', title: 'Sociology', term: 'y1s2' },
  { id: 'cn122-psychology', code: 'CN 122', title: 'Psychology', term: 'y1s2' },
  { id: 'cn211-medical-nursing-1', code: 'CN 211', title: 'Medical Nursing I', term: 'y2s1', map: true, cover: 'assets/medical-nursing.jpg' },
  { id: 'cn211-pharmacology-1', code: 'CN 211', title: 'Pharmacology I', term: 'y2s1', map: true, cover: 'assets/pharmacology.jpeg' },
  { id: 'cn212-surgical-nursing-1', code: 'CN 212', title: 'Surgical Nursing I', term: 'y2s1', map: true, cover: 'assets/surgical-nursing.jpeg' },
  { id: 'cn212-gynaecologic-nursing', code: 'CN 212', title: 'Gynaecologic Nursing', term: 'y2s1', map: true, cover: 'assets/gynaecologic-nursing.jpg' },
  { id: 'cn213-paediatric-nursing-1', code: 'CN 213', title: 'Paediatric Nursing I', term: 'y2s1', map: true, cover: 'assets/paediatric-nursing.jpg' },
  { id: 'cn213-palliative-care', code: 'CN 213', title: 'Palliative Care', term: 'y2s1', map: true, cover: 'assets/palliative-care.jpeg' },
  { id: 'cn221-medical-nursing-2', code: 'CN 221', title: 'Medical Nursing II', term: 'y2s2' },
  { id: 'cn221-pharmacology-2', code: 'CN 221', title: 'Pharmacology II', term: 'y2s2' },
  { id: 'cn222-surgical-nursing-2', code: 'CN 222', title: 'Surgical Nursing II', term: 'y2s2' },
  { id: 'cn222-paediatric-nursing-2', code: 'CN 222', title: 'Paediatric Nursing II', term: 'y2s2' },
  { id: 'cn223-mental-health-nursing', code: 'CN 223', title: 'Mental Health Nursing', term: 'y2s2' },
  { id: 'cn223-occupational-health', code: 'CN 223', title: 'Occupational Health', term: 'y2s2' },
  { id: 'cn311-tropical-medicine', code: 'CN 311', title: 'Tropical Medicine', term: 'y3s1' },
  { id: 'cn311-surgical-nursing-3', code: 'CN 311', title: 'Surgical Nursing III', term: 'y3s1' },
  { id: 'cn312-reproductive-health', code: 'CN 312', title: 'Reproductive Health', term: 'y3s1' },
  { id: 'cn312-guidance-counselling', code: 'CN 312', title: 'Guidance and Counselling', term: 'y3s1' },
  { id: 'cn313-health-services-management', code: 'CN 313', title: 'Health Services Management', term: 'y3s1' },
  { id: 'cn313-entrepreneurship', code: 'CN 313', title: 'Entrepreneurship', term: 'y3s1' },
];

export const MIDWIFERY_UNITS = [
  { id: 'cm111-anatomy-physiology-1', code: 'CM 111', title: 'Anatomy & Physiology I', term: 'y1s1' },
  { id: 'cm111-first-aid', code: 'CM 111', title: 'First Aid', term: 'y1s1' },
  { id: 'cm112-foundations-nursing-1', code: 'CM 112', title: 'Foundations of Nursing I', term: 'y1s1' },
  { id: 'cm112-basic-computer', code: 'CM 112', title: 'Basic Computer', term: 'y1s1' },
  { id: 'cm113-personal-communal-health', code: 'CM 113', title: 'Personal and Communal Health', term: 'y1s1' },
  { id: 'cm113-microbiology', code: 'CM 113', title: 'Microbiology', term: 'y1s1' },
  { id: 'cm121', code: 'CM 121', title: 'Anatomy & Physiology II', term: 'y1s2' },
  { id: 'cm122-foundations-nursing-2', code: 'CM 122', title: 'Foundations of Nursing II', term: 'y1s2' },
  { id: 'cm122-sociology', code: 'CM 122', title: 'Sociology', term: 'y1s2' },
  { id: 'cm122-psychology', code: 'CM 122', title: 'Psychology', term: 'y1s2' },
  { id: 'cm123', code: 'CM 123', title: 'Primary Health Care', term: 'y1s2' },
  { id: 'cm211', code: 'CM 211', title: 'Obstetrical Anatomy', term: 'y2s1' },
  { id: 'cm212-midwifery-1', code: 'CM 212', title: 'Midwifery I', term: 'y2s1' },
  { id: 'cm212-pharmacology-1', code: 'CM 212', title: 'Pharmacology I', term: 'y2s1', map: true, cover: 'assets/pharmacology.jpeg' },
  { id: 'cm213-paediatric-nursing-1', code: 'CM 213', title: 'Paediatric Nursing I', term: 'y2s1', cover: 'assets/paediatric-nursing.jpg' },
  { id: 'cm213-palliative-care-nursing', code: 'CM 213', title: 'Palliative Care Nursing', term: 'y2s1', cover: 'assets/palliative-care.jpeg' },
  { id: 'cm221-midwifery-2', code: 'CM 221', title: 'Midwifery II', term: 'y2s2' },
  { id: 'cm221-tropical-medicine', code: 'CM 221', title: 'Tropical Medicine', term: 'y2s2' },
  { id: 'cm222-paediatric-nursing-2', code: 'CM 222', title: 'Paediatric Nursing II', term: 'y2s2' },
  { id: 'cm222-pharmacology-2', code: 'CM 222', title: 'Pharmacology II', term: 'y2s2' },
  { id: 'cm223-community-health', code: 'CM 223', title: 'Community Health', term: 'y2s2' },
  { id: 'cm223-occupational-health-safety', code: 'CM 223', title: 'Occupational Health & Safety', term: 'y2s2' },
  { id: 'cm311-gynaecology', code: 'CM 311', title: 'Gynaecology', term: 'y3s1' },
  { id: 'cm311-reproductive-health', code: 'CM 311', title: 'Reproductive Health', term: 'y3s1' },
  { id: 'cm312-mental-health', code: 'CM 312', title: 'Mental Health', term: 'y3s1' },
  { id: 'cm312-guidance-counselling', code: 'CM 312', title: 'Guidance and Counselling', term: 'y3s1' },
  { id: 'cm313-health-services-management', code: 'CM 313', title: 'Health Services Management', term: 'y3s1' },
  { id: 'cm313-entrepreneurship', code: 'CM 313', title: 'Entrepreneurship', term: 'y3s1' },
];

export const PATHWAYS = {
  nursing: {
    id: 'nursing',
    credential: 'Certificate in Nursing',
    summary: 'A five-semester revision pathway organised around the published CN course sequence.',
    srcTitle: 'Certificate in Nursing course index',
    srcUrl: 'https://nursinguganda.com/courses/certificate-in-nursing/',
    units: NURSING_UNITS,
  },
  midwifery: {
    id: 'midwifery',
    credential: 'Certificate in Midwifery',
    summary: 'A five-semester revision pathway organised around publicly available CM course-outline references.',
    srcTitle: 'Certificate in Midwifery course outline',
    srcUrl: 'https://midwivesrevisionuganda.com/certificate-in-midwifery-course-outline/',
    units: MIDWIFERY_UNITS,
  },
};

export const PHARM_WEEKS = [
  {
    no: 1, title: 'Terms used in Pharmacology', short: 'Language of pharmacology',
    desc: 'Build the vocabulary needed to describe medicines, their actions, and the way the body responds to them.',
    outcomes: ['Recognise foundational pharmacology terms', 'Distinguish a medicine, drug, dose, and dosage form', 'Use core terminology accurately in context'],
    items: [
      { label: 'Begin with the key terms', helper: 'Topic orientation', type: 'Prepare' },
      { label: 'Language of medicines', helper: 'Concept notes', type: 'Learn' },
      { label: 'Check your vocabulary', helper: 'Knowledge check', type: 'Check' },
    ],
  },
  {
    no: 2, title: 'Sources and preparation of Medicines', short: 'Where medicines come from',
    desc: 'Explore the principal sources of medicines and the steps that turn an active substance into a usable preparation.',
    outcomes: ['Identify common sources of medicines', 'Relate preparation methods to dosage forms', 'Explain why medicine formulation matters'],
    items: [
      { label: 'Map the sources of medicines', helper: 'Topic orientation', type: 'Prepare' },
      { label: 'From source to preparation', helper: 'Concept notes', type: 'Learn' },
      { label: 'Consolidate the process', helper: 'Knowledge check', type: 'Check' },
    ],
  },
  {
    no: 3, title: 'Essential Drugs and Rational Medicine Use', short: 'Use medicines with purpose',
    desc: 'Understand the ideas behind essential medicines and the disciplined choices required for rational medicine use.',
    outcomes: ['Describe the purpose of essential medicines', 'Recognise the principles of rational use', 'Connect medicine choices to patient need'],
    items: [
      { label: 'Frame the essential medicines idea', helper: 'Topic orientation', type: 'Prepare' },
      { label: 'Principles of rational use', helper: 'Concept notes', type: 'Learn' },
      { label: 'Reason through a medicine choice', helper: 'Knowledge check', type: 'Check' },
    ],
  },
  {
    no: 4, title: 'Classification of Medicines & Controlled Substances', short: 'Organise medicines safely',
    desc: 'Learn how medicines are grouped and why controlled substances require additional safeguards and accountability.',
    outcomes: ['Compare common medicine classifications', 'Explain the purpose of controlled schedules', 'Recognise the role of safe accountability'],
    items: [
      { label: 'See the classification landscape', helper: 'Topic orientation', type: 'Prepare' },
      { label: 'Classes, schedules, and safeguards', helper: 'Concept notes', type: 'Learn' },
      { label: 'Sort and distinguish', helper: 'Knowledge check', type: 'Check' },
    ],
  },
  {
    no: 5, title: 'Pharmacokinetics & Pharmacodynamics', short: 'Medicine and the body',
    desc: 'Bring the course together by examining what the body does to a medicine and what the medicine does to the body.',
    outcomes: ['Outline absorption, distribution, metabolism, and excretion', 'Describe dose-response relationships', 'Differentiate pharmacokinetics and pharmacodynamics'],
    items: [
      { label: 'Meet the two core processes', helper: 'Topic orientation', type: 'Prepare' },
      { label: 'How medicines move and act', helper: 'Concept notes', type: 'Learn' },
      { label: 'Connect movement to effect', helper: 'Knowledge check', type: 'Check' },
    ],
  },
];

export const MED_WEEKS = [
  { no: 1, title: 'Introduction to Medical Nursing', short: 'Foundations of medical nursing', desc: 'Open the course with the language of medical nursing and the general principles behind managing disease.', outcomes: ['Terms used in Medical Nursing', 'General causes of disease in the human body', 'Levels of disease prevention'], items: [{ label: 'Orient to medical nursing', helper: 'Topic orientation', type: 'Prepare' }, { label: 'Principles of managing disease', helper: 'Concept notes', type: 'Learn' }, { label: 'Check the foundations', helper: 'Knowledge check', type: 'Check' }] },
  { no: 2, title: 'Conditions of the Circulatory System', short: 'Circulatory conditions', desc: 'Work through the cardiovascular disorders named in the outline, from inflammatory disease to hypertension.', outcomes: ['General signs and symptoms of cardiovascular disorders', 'Congestive cardiac failure and rheumatic heart disease', 'Arteriosclerosis, embolism, hypertension'], items: [{ label: 'Map the circulatory conditions', helper: 'Topic orientation', type: 'Prepare' }, { label: 'Disorders of heart and vessels', helper: 'Concept notes', type: 'Learn' }, { label: 'Check your recall', helper: 'Knowledge check', type: 'Check' }] },
  { no: 3, title: 'Hematologic Disorders', short: 'Hematologic disorders', desc: 'Study anaemia, leukemia and coagulation disorders as the outline sets them out.', outcomes: ['Anaemia', 'Leukemia', 'Coagulation disorders'], items: [{ label: 'Frame the blood disorders', helper: 'Topic orientation', type: 'Prepare' }, { label: 'Anaemia to coagulation', helper: 'Concept notes', type: 'Learn' }, { label: 'Check your recall', helper: 'Knowledge check', type: 'Check' }] },
  { no: 4, title: 'Conditions of the Respiratory System', short: 'Respiratory conditions', desc: 'Cover the upper and lower respiratory conditions listed for this unit.', outcomes: ['Common cold, sinusitis, tonsillitis', 'Influenza, pharyngitis, laryngitis', 'Otitis media'], items: [{ label: 'Map the respiratory tract', helper: 'Topic orientation', type: 'Prepare' }, { label: 'Common respiratory conditions', helper: 'Concept notes', type: 'Learn' }, { label: 'Check your recall', helper: 'Knowledge check', type: 'Check' }] },
];

export const PB = 'https://wtcs.pressbooks.pub/pharmacology2e/';
export const UCG = 'https://library.health.go.ug/sites/default/files/resources/Uganda%20Clinical%20Guidelines%202023.pdf';
export const YT = 'https://www.youtube.com/results?search_query=';
export const COMMONS = '';

export const BOOK = {
  title: 'Nursing Pharmacology, 2e',
  publisher: 'Open RN · CC BY 4.0',
  url: PB,
  second: { title: 'Pharmacology for Nurses', publisher: 'OpenStax', url: 'https://openstax.org/details/books/pharmacology' },
  national: { title: 'Uganda Clinical Guidelines 2023', publisher: 'Ministry of Health', url: UCG },
};

export function sheetFor(week) {
  return week;
}

export const PREP = (kind, minutes, title, url, why, source) => ({ kind, minutes, title, url, why, source });
export const TASK = (group, points, title, brief, due) => ({ group, points, title, brief, due });

export const PHARM_SHEETS = {
  1: {
    span: 'Week 1 · orientation week',
    objective: 'Leave this week able to read a drug chart and say what every word on it means.',
    book: { chapter: 'Chapter 1.2', title: 'Basic concepts of pharmacology', url: PB + 'chapter/1-2-basic-concepts/' },
    prepareNote: 'Start here even if you have handled medicines for years. The words are the work.',
    prepare: [
      PREP('Chapter', '25 min', '1.2 Basic concepts — the vocabulary of pharmacology', PB + 'chapter/1-2-basic-concepts/', 'Drug, medicine, dose, dosage form, indication, contraindication. Write each one in your own words.', 'Open RN · Nursing Pharmacology 2e'),
      PREP('Video', '11 min', 'Pharmacology terms for nurses — video search', YT + 'pharmacology+terminology+for+nursing+students', 'Watch one, then close it and write the eight terms from memory.', 'YouTube · search results'),
      PREP('Reference', '10 min', 'WHO Essential Medicines List — how a medicine is named', 'https://list.essentialmeds.org/', 'Search one medicine from your ward. Notice the generic name, not the brand.', 'World Health Organization'),
      PREP('Orientation', '15 min', 'How to study online without a timetable', YT + 'how+to+study+online+successfully+time+management', 'Choose your sittings for the week before Wednesday. Write them down.', 'YouTube · search results'),
    ],
    ai: {
      title: 'Make the AI define the terms, then catch it out',
      task: 'Ask an assistant to define eight pharmacology terms. Check every definition against 1.2 and the WHO list, and mark which ones it got wrong or vague.',
      prompt: 'Define these pharmacology terms for a first-year Ugandan nursing student in one sentence each, then list the source you used for each: drug, medicine, dose, dosage form, indication, contraindication, side effect, adverse reaction.',
      rule: 'An AI answer is never a source. Cite the chapter or the WHO entry that confirms it.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W01 Reading check: eight terms', 'Ten questions straight from 1.2. Two attempts, best mark stands.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '20 pts', 'W01 Introduction post', 'Two paragraphs: where you work, and one medicine you have handled that you did not fully understand.', 'Due Wednesday, 23:59'),
      TASK('Reinforce', '25 pts', 'W01 Glossary card set', 'Make eight handwritten cards, one term each, in your own words. Photograph and upload.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Rostered teach', points: '15 pts', title: 'One term each, taught in the thread', brief: 'You are given one term. Post a short explanation with one real example from a ward, and answer whoever asks.', who: 'Rostered · see the teach rota', when: 'Posted by Wednesday', counts: 'Posted, plus two classmates answered' },
    ],
  },
  2: {
    span: 'Week 2',
    objective: 'Trace one medicine from where it comes from to the form it reaches your hand in.',
    book: { chapter: 'Chapter 1.3', title: 'Pharmacokinetics · what the body does to a drug', url: PB + 'chapter/1-3-pharmacokinetics/' },
    prepareNote: 'Read the chapter before the video. The video is a revision, not a shortcut.',
    prepare: [
      PREP('Chapter', '30 min', '1.3 Pharmacokinetics — absorption to excretion', PB + 'chapter/1-3-pharmacokinetics/', 'Why the same drug works differently as a tablet, a syrup and an injection.', 'Open RN · Nursing Pharmacology 2e'),
      PREP('Chapter', '20 min', 'Sources and forms of medicines', 'https://openstax.org/details/books/pharmacology', 'OpenStax, Chapter 1. A second explanation in different words, free to download.', 'OpenStax · Pharmacology for Nurses'),
      PREP('Video', '12 min', 'Dosage forms explained — video search', YT + 'dosage+forms+of+medication+nursing', 'Copy the diagram of dosage forms by hand into your notes.', 'YouTube · search results'),
    ],
    ai: {
      title: 'Ask for a table, then verify every row',
      task: 'Have an assistant build a table of dosage forms with one advantage and one risk each. Then check three rows against the chapter and correct what is wrong.',
      prompt: 'Make a table of common dosage forms (tablet, capsule, syrup, suppository, IV, IM, topical) with one clinical advantage and one risk each, written for an enrolled nurse.',
      rule: 'Correct at least one row and say which chapter proved it wrong. Uncorrected tables score zero.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W02 Reading check: sources and forms', 'Twelve questions from 1.3 and the OpenStax chapter.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '30 pts', 'W02 Presentation: one medicine, from plant to vial', 'Five slides, five minutes. One medicine, its source, its preparation, its form on your ward.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Group unit', points: '20 pts', title: 'Group 1 presents: dosage forms on our own ward', brief: 'Four learners, one unit of the course. What forms your facility actually stocks, and what that changes.', who: 'Group 1 · four learners', when: 'Gathering · Thursday, 19:00', counts: 'Presented live and file uploaded' },
    ],
  },
  3: {
    span: 'Week 3',
    objective: 'Defend one medicine choice using the essential medicines list and the national guideline, not habit.',
    book: { chapter: 'Chapter 1.5', title: 'Legal and ethical considerations in medicine use', url: PB + 'chapter/1-5-legal-and-ethical-considerations/' },
    prepareNote: 'The guideline is the point of this week. Open the PDF properly, not a screenshot of it.',
    prepare: [
      PREP('Guideline', '35 min', 'Uganda Clinical Guidelines 2023 — find your condition', UCG, 'The national reference. Choose one condition you have seen and read how it is managed here.', 'Ministry of Health, Uganda'),
      PREP('Reference', '20 min', 'WHO Essential Medicines List — what “essential” means', 'https://list.essentialmeds.org/', 'Search three medicines. Note which are on the list and which are not.', 'World Health Organization'),
      PREP('Chapter', '20 min', '1.5 Legal and ethical considerations', PB + 'chapter/1-5-legal-and-ethical-considerations/', 'Rational use is also a legal duty. Read what that means for you personally.', 'Open RN · Nursing Pharmacology 2e'),
    ],
    ai: {
      title: 'Ask for a recommendation you are required to refuse',
      task: 'Ask an assistant which antibiotic to give for a described infection. Then find the answer in the Uganda Clinical Guidelines and write what differs and why the local guideline wins.',
      prompt: 'A 30-year-old in a Ugandan health centre has an uncomplicated urinary tract infection. Which antibiotic and dose would you suggest, and what is your source?',
      rule: 'Submit the AI answer, the guideline page, and your judgement. The mark is for the judgement.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W03 Reading check: rational use', 'Fifteen questions on essential medicines and rational use.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '25 pts', 'W03 Paper: one page on a medicine used badly', 'A real situation, without names. What was given, what the guideline says, what you would do.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '20 pts', 'W03 Group project: a stock list for one clinic', 'In fours, build an essential-medicines list for a health centre III and defend six of your choices.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Teach-back', points: '15 pts', title: 'Three minutes on rational use, no notes on screen', brief: 'Record yourself explaining rational use to a first-year student. No script visible.', who: 'Everyone', when: 'By Sunday', counts: 'Two classmates acknowledge it' },
    ],
  },
  4: {
    span: 'Week 4',
    objective: 'Sort medicines by class and handle a controlled substance the way the law and the ward book require.',
    book: { chapter: 'Chapter 2.3', title: 'Safe medication administration', url: PB + 'chapter/2-3-safe-medication-administration/' },
    prepareNote: 'Read the schedules slowly. This is the week where carelessness becomes a legal matter.',
    prepare: [
      PREP('Chapter', '30 min', '2.3 Safe medication administration', PB + 'chapter/2-3-safe-medication-administration/', 'The rights of administration, the checks, and what to do after an error.', 'Open RN · Nursing Pharmacology 2e'),
      PREP('Reference', '15 min', 'DailyMed — read a real manufacturer label', 'https://dailymed.nlm.nih.gov/dailymed/', 'Search one drug you have given and read its actual label. This is what a source looks like.', 'US National Library of Medicine'),
      PREP('Video', '14 min', 'Controlled drugs and the register — video search', YT + 'controlled+drugs+register+nursing+procedure', 'Watch one, then write the steps your own facility follows.', 'YouTube · search results'),
    ],
    ai: {
      title: 'Use AI to draft the register entry, then rewrite it as a nurse',
      task: 'Have an assistant draft a controlled-drug register entry. Rewrite it so it would survive an audit at your facility, and list what the AI left out.',
      prompt: 'Draft a controlled-drug register entry for pethidine 100 mg given to one patient, and list what must be recorded and who must countersign.',
      rule: 'Name at least two things the AI omitted. If it omitted nothing, you have not checked hard enough.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W04 Reading check: classes and schedules', 'Twenty questions, including three dosage calculations.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '30 pts', 'W04 Quiz: sorting a cupboard', 'Given thirty medicines, place each in its class and say which need a register.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Rostered teach', points: '15 pts', title: 'One class of medicines, taught by a classmate', brief: 'Own the sub-topic for the week. Bring one real drug and one real number.', who: 'Rostered · see the teach rota', when: 'Posted by Wednesday', counts: 'Posted, plus four questions answered' },
    ],
  },
  5: {
    span: 'Week 5 · final week',
    objective: 'Explain, for one real patient, what the body did to the drug and what the drug did to the body.',
    book: { chapter: 'Chapter 1.4', title: 'Pharmacodynamics · what the drug does to the body', url: PB + 'chapter/1-4-pharmacodynamics/' },
    prepareNote: 'Both chapters this week. They are two halves of one sentence.',
    prepare: [
      PREP('Chapter', '30 min', '1.4 Pharmacodynamics — receptors and response', PB + 'chapter/1-4-pharmacodynamics/', 'Agonists, antagonists, and the therapeutic window.', 'Open RN · Nursing Pharmacology 2e'),
      PREP('Chapter', '25 min', '1.3 Pharmacokinetics — read it again, with the chart in front of you', PB + 'chapter/1-3-pharmacokinetics/', 'Second reading. This time, map it onto a patient you have actually nursed.', 'Open RN · Nursing Pharmacology 2e'),
      PREP('Practice', '40 min', 'Dosage calculation practice with answers', 'https://wtcs.pressbooks.pub/nursingskills/chapter/5-3-calculating-doses/', 'Do all the worked examples with a pen. The final uses the same forms.', 'Open RN · Nursing Skills 2e'),
      PREP('Guideline', '20 min', 'Uganda Clinical Guidelines 2023 — your patient’s condition', UCG, 'Find the dosing for the condition you will write about.', 'Ministry of Health, Uganda'),
    ],
    ai: {
      title: 'Have AI mark your draft, then mark the AI',
      task: 'Paste your final case draft and ask for criticism. Accept what is right, reject what is wrong in writing, and hand in both.',
      prompt: 'Here is my medication plan for one patient. Criticise it as a nursing tutor would, name every unsupported claim, and tell me which national guideline to check.',
      rule: 'Your submission must show one piece of AI advice you rejected, and the source that let you reject it.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W05 Reading check: movement and effect', 'Twenty-five questions, ten of them calculations. One attempt.', 'Due Sunday, 23:59'),
      TASK('Final', '80 pts', 'W05 Final case: one patient, from dose to response', 'One patient, one medicine plan: kinetics, dynamics, monitoring, and what you would document. Four pages maximum.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Group unit', points: '20 pts', title: 'Group 2 presents: a medication error, handled well', brief: 'Not a horror story — a procedure. What was done, in what order, and what was written down.', who: 'Group 2 · four learners', when: 'Gathering · Thursday, 19:00', counts: 'Presented live and file uploaded' },
    ],
  },
};

export const MED_SHEETS = {
  1: {
    span: 'Week 1 · orientation week',
    objective: 'Say what medical nursing is for, and name the levels at which disease can be stopped.',
    book: { chapter: 'Chapter 1', title: 'Nursing Fundamentals · scope of practice', url: 'https://wtcs.pressbooks.pub/nursingfundamentals/' },
    prepareNote: 'Read first, then meet your group. This week is also where you learn how the course runs.',
    prepare: [
      PREP('Chapter', '30 min', 'Nursing Fundamentals — scope and standards', 'https://wtcs.pressbooks.pub/nursingfundamentals/', 'What a nurse is accountable for, in plain clinical English.', 'Open RN · Nursing Fundamentals'),
      PREP('Reference', '20 min', 'Levels of prevention', 'https://medlineplus.gov/', 'Primary, secondary, tertiary. Find one Ugandan example of each.', 'MedlinePlus · US National Library of Medicine'),
      PREP('Guideline', '25 min', 'Uganda Clinical Guidelines 2023 — general principles', UCG, 'Read the opening sections on managing disease at each level of care.', 'Ministry of Health, Uganda'),
    ],
    ai: {
      title: 'Ask AI for the causes of disease, then classify them yourself',
      task: 'Have an assistant list general causes of disease. Sort its list into the categories your outline uses, and name what it missed.',
      prompt: 'List the general causes of disease in the human body and group them, for a certificate-level nursing student in Uganda.',
      rule: 'Hand in your sorted list and one category the AI got wrong.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W01 Reading check: terms and prevention', 'Twelve questions from the reading.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '20 pts', 'W01 Introduction post', 'Where you work, and one medical condition you see most often.', 'Due Wednesday, 23:59'),
    ],
    teach: [
      { kind: 'Rostered teach', points: '15 pts', title: 'One level of prevention, taught by a classmate', brief: 'Explain your level with one example from your own facility.', who: 'Rostered · see the teach rota', when: 'Posted by Wednesday', counts: 'Posted, plus two classmates answered' },
    ],
  },
  2: {
    span: 'Week 2',
    objective: 'Recognise the cardiovascular conditions in the outline from their signs, and say what each one asks of a nurse.',
    book: { chapter: 'Chapter 6', title: 'Cardiovascular and renal system drugs', url: PB + 'chapter/6-1-introduction/' },
    prepareNote: 'Signs first, names second. You will meet the signs before you meet the diagnosis.',
    prepare: [
      PREP('Reference', '30 min', 'Heart failure, rheumatic heart disease, hypertension', 'https://www.nhs.uk/conditions/', 'Read each condition in the A–Z. Note the signs you could observe without a machine.', 'NHS · plain clinical English'),
      PREP('Chapter', '30 min', 'Cardiovascular and renal drugs', PB + 'chapter/6-1-introduction/', 'What we give, and what we must monitor after giving it.', 'Open RN · Nursing Pharmacology 2e'),
      PREP('Guideline', '25 min', 'Uganda Clinical Guidelines 2023 — hypertension and cardiac failure', UCG, 'How these are managed at your level of care, with the doses used here.', 'Ministry of Health, Uganda'),
    ],
    ai: {
      title: 'Turn an AI summary into an observation chart',
      task: 'Ask for the signs of congestive cardiac failure, then build the observation chart you would actually keep, and mark which AI signs you could not observe on your ward.',
      prompt: 'List the signs and symptoms of congestive cardiac failure and say which can be observed without laboratory tests.',
      rule: 'The mark is for the chart and the crossings-out, not the list.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W02 Reading check: circulatory conditions', 'Fifteen questions across the four conditions.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '30 pts', 'W02 Presentation: one cardiac patient', 'Five slides on one patient you have nursed, without names: signs, management, what you monitored.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Group unit', points: '20 pts', title: 'Group 1 presents: hypertension in our districts', brief: 'Four learners own the unit and present it live.', who: 'Group 1 · four learners', when: 'Gathering · Thursday, 19:00', counts: 'Presented live and file uploaded' },
    ],
  },
  3: {
    span: 'Week 3',
    objective: 'Tell anaemia, leukaemia and a coagulation disorder apart at the bedside, and know what each needs urgently.',
    book: { chapter: 'Chapter 6', title: 'Blood and the drugs that change it', url: PB + 'chapter/6-1-introduction/' },
    prepareNote: 'Anaemia is the one you will see today. Give it the most time.',
    prepare: [
      PREP('Reference', '30 min', 'Anaemia, leukaemia, clotting disorders', 'https://www.nhs.uk/conditions/', 'Read all three. Write the one sign that separates each from the others.', 'NHS · plain clinical English'),
      PREP('Guideline', '25 min', 'Uganda Clinical Guidelines 2023 — anaemia', UCG, 'Anaemia in pregnancy and in children, as managed here.', 'Ministry of Health, Uganda'),
      PREP('Video', '15 min', 'Anaemia assessment — video search', YT + 'anemia+nursing+assessment+signs', 'Watch one and practise the assessment on a colleague.', 'YouTube · search results'),
    ],
    ai: {
      title: 'Make AI explain a lab result, then check it against the guideline',
      task: 'Give an assistant a haemoglobin value and ask what it means and what to do. Compare its answer with the national guideline and write which you would follow.',
      prompt: 'A pregnant woman has a haemoglobin of 7 g/dL at a health centre III in Uganda. What does this mean and what should be done?',
      rule: 'Cite the guideline section. An AI answer alone is not an answer.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W03 Reading check: blood disorders', 'Fifteen questions.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '25 pts', 'W03 Paper: one page on anaemia in your district', 'What you see, why it happens there, and what your facility can do.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Teach-back', points: '15 pts', title: 'Three minutes on anaemia, no notes on screen', brief: 'Explain it as you would to a mother in your own language, then in English.', who: 'Everyone', when: 'By Sunday', counts: 'Two classmates acknowledge it' },
    ],
  },
  4: {
    span: 'Week 4 · final week',
    objective: 'Manage the common respiratory and ear conditions in the outline, and know which ones need referral today.',
    book: { chapter: 'Chapter 5', title: 'Respiratory system drugs', url: PB + 'chapter/5-1-introduction/' },
    prepareNote: 'Ends with the final case. Choose your patient early in the week.',
    prepare: [
      PREP('Reference', '30 min', 'Common cold, sinusitis, tonsillitis, otitis media', 'https://www.nhs.uk/conditions/', 'Read each. Mark the red flags that mean referral, not treatment.', 'NHS · plain clinical English'),
      PREP('Chapter', '30 min', 'Respiratory drugs — relievers and controllers', PB + 'chapter/5-1-introduction/', 'What each does, and how to teach an inhaler properly.', 'Open RN · Nursing Pharmacology 2e'),
      PREP('Guideline', '25 min', 'Uganda Clinical Guidelines 2023 — respiratory infections', UCG, 'Antibiotic choices here, and when not to give one at all.', 'Ministry of Health, Uganda'),
    ],
    ai: {
      title: 'Ask for a patient explanation, then make it true and local',
      task: 'Have an assistant write an inhaler explanation for a patient. Rewrite it for someone in your district, and list what you changed and why.',
      prompt: 'Write a short explanation of how to use a metered-dose inhaler, for a patient with low literacy.',
      rule: 'Hand in both versions. The mark is on your rewrite.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '20 pts', 'W04 Reading check: respiratory conditions', 'Twenty questions across the outline topics.', 'Due Sunday, 23:59'),
      TASK('Final', '80 pts', 'W04 Final case: one respiratory patient', 'Assessment, management, teaching, and referral decision, with the guideline cited.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Group unit', points: '20 pts', title: 'Group 2 presents: otitis media in children', brief: 'Own the unit and teach it live at the gathering.', who: 'Group 2 · four learners', when: 'Gathering · Thursday, 19:00', counts: 'Presented live and file uploaded' },
    ],
  },
};

export const MARKS = {
  'cn211-pharmacology-1': {},
  'cn211-medical-nursing-1': {},
};

export const MEDBOOK = {
  title: 'Nursing Fundamentals',
  publisher: 'Open RN · CC BY 4.0',
  url: 'https://wtcs.pressbooks.pub/nursingfundamentals/',
  second: { title: 'NHS Health A–Z', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/' },
  national: { title: 'Uganda Clinical Guidelines 2023', publisher: 'Ministry of Health', url: UCG },
};

export const BOOKS = {
  'cn211-pharmacology-1': BOOK,
  'cm212-pharmacology-1': BOOK,
  'cn211-medical-nursing-1': MEDBOOK,
};

export const COVERS = {
  'df000-foundations': 'assets/study-desk.jpg',
  'cn211-medical-nursing-1': 'assets/medical-nursing.jpg',
  'cn211-pharmacology-1': 'assets/pharmacology.jpeg',
  'cn212-surgical-nursing-1': 'assets/surgical-nursing.jpeg',
  'cn212-gynaecologic-nursing': 'assets/gynaecologic-nursing.jpg',
  'cn213-paediatric-nursing-1': 'assets/paediatric-nursing.jpg',
  'cn213-palliative-care': 'assets/palliative-care.jpeg',
  'cm212-pharmacology-1': 'assets/pharmacology.jpeg',
  'cm213-paediatric-nursing-1': 'assets/paediatric-nursing.jpg',
  'cm213-palliative-care-nursing': 'assets/palliative-care.jpeg',
};

export const COVER_BY_WORD = [
  ['pharmacolog', 'assets/pharmacology.jpeg'],
  ['medical nursing', 'assets/medical-nursing.jpg'],
  ['surgical', 'assets/surgical-nursing.jpeg'],
  ['gynaecolog', 'assets/gynaecologic-nursing.jpg'],
  ['obstetrical', 'assets/gynaecologic-nursing.jpg'],
  ['midwifery', 'assets/gynaecologic-nursing.jpg'],
  ['reproductive', 'assets/gynaecologic-nursing.jpg'],
  ['paediatric', 'assets/paediatric-nursing.jpg'],
  ['palliative', 'assets/palliative-care.jpeg'],
  ['tropical', 'assets/medical-nursing.jpg'],
  ['foundations', 'assets/medical-nursing.jpg'],
];

export const GROUPS = [
  { id: 'prepare', label: 'Prepare', weight: 20, note: 'Reading checks that open each week' },
  { id: 'practise', label: 'Reinforce', weight: 35, note: 'Quizzes, papers, presentations, group projects' },
  { id: 'teach', label: 'Teach one another', weight: 20, note: 'Student-led units and teach-backs' },
  { id: 'ai', label: 'Working with AI', weight: 10, note: 'Prompt, verify, cite — marked on the verification' },
  { id: 'final', label: 'Final assessment', weight: 15, note: 'The last week, integrating the whole course' },
];

export const AMOUNT = 58000;
export const money = (n) => n.toLocaleString('en-US');

export const SPACES = [
  { id: 'course-pharmacology', code: 'CN 211', title: 'Pharmacology I', semester: 'Year 2 · Semester 1', owner: 'Grace Nalubega', mapStatus: 'published', learners: 42, completion: 71, week: 5, edited: 'Today · 08:10' },
  { id: 'course-medical', code: 'CN 211', title: 'Medical Nursing I', semester: 'Year 2 · Semester 1', owner: 'Grace Nalubega', mapStatus: 'published', learners: 38, completion: 64, week: 4, edited: 'Yesterday · 15:20' },
  { id: 'course-surgical', code: 'CN 212', title: 'Surgical Nursing I', semester: 'Year 2 · Semester 1', owner: 'Grace Nalubega', mapStatus: 'in-review', learners: 36, completion: 49, week: 6, edited: 'Yesterday · 11:05' },
  { id: 'course-gynaecologic', code: 'CN 212', title: 'Gynaecologic Nursing', semester: 'Year 2 · Semester 1', owner: 'Grace Nalubega', mapStatus: 'draft', learners: 31, completion: 38, week: 3, edited: '28 Aug · 09:40' },
  { id: 'course-paediatric', code: 'CN 213', title: 'Paediatric Nursing I', semester: 'Year 2 · Semester 1', owner: 'Grace Nalubega', mapStatus: 'published', learners: 40, completion: 62, week: 5, edited: '27 Aug · 16:15' },
  { id: 'course-palliative', code: 'CN 213', title: 'Palliative Care', semester: 'Year 2 · Semester 1', owner: 'Grace Nalubega', mapStatus: 'draft', learners: 28, completion: 45, week: 4, edited: '27 Aug · 13:30' },
];

export const CLEARANCES = [
  {
    id: 'clearance-1', learner: 'Nancy Atwine', programme: 'Certificate in Nursing', semester: 'Year 2 · Semester 1',
    files: 'Prior study record · 2 files', submitted: 'Today · 07:42', status: 'pending',
    evidence: 'A Year 1 result slip covering both semesters, stamped and legible. Nothing is missing.',
  },
  {
    id: 'clearance-2', learner: 'Moses Kato', programme: 'Certificate in Midwifery', semester: 'Year 2 · Semester 2',
    files: 'Institutional letter · 1 file', submitted: 'Yesterday · 14:16', status: 'pending',
    evidence: 'A letter naming the semesters completed, but no result record for Year 2 Semester 1.',
  },
  {
    id: 'clearance-3', learner: 'Sandra Auma', programme: 'Certificate in Nursing', semester: 'Year 3 · Semester 1',
    files: 'Prior course record · 3 files', submitted: '28 Aug · 10:30', status: 'returned',
    note: 'Please include the missing Semester 2 result.',
  },
];

export const LEARNERS = [
  { id: 'learner-nancy', name: 'Nancy Atwine', programme: 'Certificate in Nursing', semester: 'Year 2 · Semester 1', access: 'clearance-review', seen: 'Today · 07:12', streak: 5 },
  { id: 'learner-moses', name: 'Moses Kato', programme: 'Certificate in Midwifery', semester: 'Year 2 · Semester 2', access: 'clearance-review', seen: 'Yesterday · 17:26', streak: 2 },
  { id: 'learner-sandra', name: 'Sandra Auma', programme: 'Certificate in Nursing', semester: 'Year 3 · Semester 1', access: 'active', seen: 'Yesterday · 13:40', streak: 8 },
];

export const TEAM = [
  { id: 'admin-amara', name: 'Amara Kato', role: 'Administrator', desk: 'Academic operations', can: ['Verify payments', 'Review clearance', 'Assign instructors', 'Reverse access'], scope: 'Every pathway' },
  { id: 'instructor-grace', name: 'Grace Nalubega', role: 'Instructor', desk: 'Clinical instruction', can: ['Author revision maps', 'Publish weeks', 'Send course notices'], scope: 'Six Year 2 Nursing spaces' },
  { id: 'payment-gateway-preview', name: 'Payment gateway', role: 'Service account', desk: 'Wallet callbacks', can: ['Resolve wallet requests'], scope: 'Payments only' },
];

export const SEED_NOTICES = [
  { id: 'notice-1', title: 'Week 05 map is ready', body: 'The pharmacology revision map is available to eligible learners.', space: 'course-pharmacology', audience: 'course', author: 'Grace Nalubega', when: 'Today · 08:12' },
  { id: 'notice-2', title: 'Planning keeps access clear', body: 'Choose only the semester you are currently preparing for.', space: null, audience: 'all-learners', author: 'Amara Kato', when: 'Yesterday · 12:05' },
];

export const SEED_AUDIT = [
  { id: 'a-2', who: 'grace nalubega', action: 'course-map', summary: 'Published the Pharmacology I Week 05 revision map.', when: 'Today · 08:15' },
  { id: 'a-1', who: 'amara kato', action: 'assignment', summary: 'Grace Nalubega remains assigned to six Year 2 Nursing course spaces.', when: 'Today · 08:00' },
];

export const SETTLED = [
  { ref: 'DF-NURSING-Y3S1-2026-0001', who: 'Sandra Auma', meta: 'MTN MoMo · 077 ••• 904 · 3 Sep 2026, 10:07', status: 'Verified', by: 'payment gateway', value: AMOUNT },
];

export const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
export const SETUP_ORDER = ['welcome', 'certificate', 'entry', 'cleared', 'rhythm', 'courses', 'confirm'];

export const ICONS = {
  dashboard: 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z',
};

/** A path string, or a circle `{ c: [cx, cy, r] }` / rect `{ r: [x, y, w, h, rx] }`. */
export type IconPart = string | { c: number[] } | { r: number[] };

export function svgIcon(paths: IconPart[]) {
  return React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '100%', height: '100%', className: 's', style: { display: 'block' } },
    paths.map((d, i) =>
      typeof d === 'string'
        ? React.createElement('path', { key: i, d })
        : 'c' in d
          ? React.createElement('circle', { key: i, cx: d.c[0], cy: d.c[1], r: d.c[2] })
          : React.createElement('rect', { key: i, x: d.r[0], y: d.r[1], width: d.r[2], height: d.r[3], rx: d.r[4] })
    )
  );
}

export const I = {
  dashboard: () => svgIcon([{ r: [3, 3, 7, 9, 1] }, { r: [14, 3, 7, 5, 1] }, { r: [14, 12, 7, 9, 1] }, { r: [3, 16, 7, 5, 1] }]),
  book: () => svgIcon(['M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z']),
  calendar: () => svgIcon(['M8 2v4', 'M16 2v4', 'M3 10h18', { r: [3, 4, 18, 18, 2] }]),
  planner: () => svgIcon(['M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5']),
  card: () => svgIcon([{ r: [2, 5, 20, 14, 2] }, 'M2 10h20']),
  inbox: () => svgIcon(['M22 12h-6l-2 3h-4l-2-3H2', 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z']),
  more: () => svgIcon(['M4 6h16', 'M4 12h16', 'M4 18h16']),
  people: () => svgIcon(['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', { c: [9, 7, 4] }, 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
  log: () => svgIcon(['M14 2v4a2 2 0 0 0 2 2h4', 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M9 13h6', 'M9 17h4']),
  signals: () => svgIcon(['M3 3v16a2 2 0 0 0 2 2h16', 'm7 15 3-4 3 3 4-6']),
  send: () => svgIcon(['M14.54 21.69a.5.5 0 0 0 .93-.03l6.5-19a.5.5 0 0 0-.63-.63l-19 6.5a.5.5 0 0 0-.03.93l7.93 3.18a2 2 0 0 1 1.11 1.11z', 'm21.85 2.15-10.94 10.94']),
  gavel: () => svgIcon(['M9 11 4.5 6.5', 'm14 4 6 6', 'M13 5 5 13l6 6 8-8z', 'M3 21h9']),
  bank: () => svgIcon(['M3 21h18', 'M5 21V10l7-5 7 5v11', 'M9 21v-6h6v6']),
  lock: () => svgIcon([{ r: [3, 10, 18, 12, 2] }, 'M7 10V7a5 5 0 0 1 10 0v3', { c: [12, 16, 1] }]),
  print: () => svgIcon(['M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2', 'M6 9V3h12v6', { r: [6, 14, 12, 8, 1] }]),
};

export const CHANNELS = [
  { id: 'sms', name: 'SMS', carries: 'The short line only: what changed, and the date it is due. It reaches any handset and needs no data.', cost: 'No data needed' },
  { id: 'whatsapp', name: 'WhatsApp', carries: 'The full notice: week number, what to read, what is due, and the points it carries.', cost: 'Uses data · about 2 KB a notice' },
  { id: 'telegram', name: 'Telegram', carries: 'The full notice, plus any file your instructor attaches to it.', cost: 'Uses data · attachments on request' },
];

export const NOTIFY_TOPICS = [
  { id: 'week', label: 'A week is published', note: 'New materials, new points' },
  { id: 'marks', label: 'Marks are returned', note: 'Only once a person has marked it' },
  { id: 'due', label: 'Something is due in 48 hours', note: 'Quizzes, papers, presentations' },
  { id: 'teach', label: 'Teach-back and group units', note: 'Your turn, and your group’s turn' },
  { id: 'pay', label: 'Payment and access', note: 'Requests, receipts, access opening' },
  { id: 'notice', label: 'Notices from your instructor', note: 'Course announcements' },
  { id: 'summary', label: 'Weekly summary', note: 'What you did, what is left' },
];

export const LEVELS = [
  { id: 'now', word: 'Now' },
  { id: 'daily', word: 'Daily' },
  { id: 'weekly', word: 'Weekly' },
  { id: 'off', word: 'Off' },
];

export const ACCT_FILES = [
  { name: 'Submissions', meta: 'Marked work · cannot be deleted', size: '14 items' },
  { name: 'W05 controlled-drug register.pdf', meta: 'Handed in 3 Sep 2026 · Pharmacology I', size: '240 KB' },
  { name: 'W04 teach-back slides.pptx', meta: 'Handed in 28 Aug 2026 · Medical Nursing I', size: '1.8 MB' },
  { name: 'Photographs', meta: 'Kept by you · not shared', size: '3 items' },
  { name: 'Unfiled', meta: 'Anything you upload without a folder', size: '0 items' },
];

export const ACCT_SESSIONS = [
  { id: 'ses-1', device: 'Tecno Spark · Kampala', meta: 'This device · signed in today, 07:04', current: true },
  { id: 'ses-2', device: 'Shared ward computer · Mulago', meta: 'Last used yesterday, 19:41', current: false },
  { id: 'ses-3', device: 'Deep Focus phone app', meta: 'Paired 12 Aug 2026 · code sign-in', current: false },
];

export const DOMAIN_DESK = {
  'student.deepfocus.ug': 'learner',
  'staff.deepfocus.ug': 'instructor',
  'admin.deepfocus.ug': 'admin',
};

export const DIRECTORY = [
  { email: 'fred@student.deepfocus.ug', desk: 'Learner', role: 'learner', name: 'Fred Samson Okorio', who: 'Plan set up · paid · Year 2 Semester 1', returning: true },
  { email: 'm.ssekandi@student.deepfocus.ug', desk: 'Learner', role: 'learner', name: 'Moses Ssekandi', who: 'First sign-in · sets his semester up', returning: false },
  { email: 'g.nalubega@staff.deepfocus.ug', desk: 'Instructor', role: 'instructor', name: 'Grace Nalubega', who: 'Clinical instruction · six Year 2 Nursing spaces' },
  { email: 'a.kato@admin.deepfocus.ug', desk: 'Administrator', role: 'admin', name: 'Amara Kato', who: 'Academic operations · payments and clearance' },
];

/* ═══════════ COURSE ARCHITECTURE ═══════════ */

export const BLOCK_START = new Date(2026, 7, 31);
export const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const WEEKDAY = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export function dayOf(wk, day) { const d = new Date(BLOCK_START.getTime()); d.setDate(d.getDate() + (wk - 1) * 7 + (day - 1)); return d; }
export function dLabel(wk, day) { const d = dayOf(wk, day); return MON[d.getMonth()] + ' ' + d.getDate(); }
export function dueAt(wk, day) { return dLabel(wk, day) + ' at 11:59pm'; }
export function spanOf(wk) { return dLabel(wk, 1) + ' – ' + dLabel(wk, 7); }
export function pts(str) { return parseInt(String(str).replace(/[^0-9]/g, ''), 10) || 0; }
export function short(title) { return String(title).split(' — ')[0].split(' · ')[0].replace(/^[0-9.]+\s/, ''); }

export const CI = {
  page: () => svgIcon(['M14 2v4a2 2 0 0 0 2 2h4', 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M9 13h6', 'M9 17h4']),
  reading: () => svgIcon(['M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z']),
  video: () => svgIcon(['m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5', { r: [2, 6, 14, 12, 2] }]),
  guide: () => svgIcon(['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', 'm9 12 2 2 4-4']),
  discussion: () => svgIcon(['M12 20a8 8 0 1 0-8-8 8 8 0 0 0 .5 2.8L3 21z']),
  quiz: () => svgIcon(['M12 17h.01', 'M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3', { c: [12, 12, 10] }]),
  paper: () => svgIcon(['M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z', 'm15 5 4 4']),
  present: () => svgIcon([{ r: [2, 3, 20, 14, 2] }, 'M12 17v4', 'M8 21h8']),
  group: () => svgIcon(['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', { c: [9, 7, 4] }, 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
  final: () => svgIcon(['M15.477 12.89 17 22l-5-3-5 3 1.523-9.11', { c: [12, 8, 6] }]),
  apply: () => svgIcon(['m9 11 3 3L22 4', 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11']),
  ai: () => svgIcon([{ r: [4, 4, 16, 16, 2] }, { r: [9, 9, 6, 6, 1] }, 'M9 2v2', 'M15 2v2', 'M9 20v2', 'M15 20v2', 'M2 9h2', 'M2 15h2', 'M20 9h2', 'M20 15h2']),
  lift: () => svgIcon(['M12 2v6', 'm9 5 3-3 3 3', 'M5 12a7 7 0 0 0 7 7 7 7 0 0 0 7-7', 'M3 12h2', 'M19 12h2', 'M12 19v3']),
  ponder: () => svgIcon(['M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4']),
  gathering: () => svgIcon([{ c: [12, 12, 3] }, 'M12 2v3', 'M12 19v3', 'M4.9 4.9l2.1 2.1', 'M17 17l2.1 2.1', 'M2 12h3', 'M19 12h3', 'M4.9 19.1 7 17', 'M17 7l2.1-2.1']),
  skill: () => svgIcon(['M22 11.08V12a10 10 0 1 1-5.93-9.14', 'm9 11 3 3L22 4']),
  review: () => svgIcon(['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', 'M9 10h6', 'M9 13h3']),
  survey: () => svgIcon([{ r: [8, 2, 8, 4, 1] }, 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'm9 14 2 2 4-4']),
  practice: () => svgIcon(['M3 2v6h6', 'M21 12A9 9 0 0 0 6 5.3L3 8', 'M21 22v-6h-6', 'M3 12a9 9 0 0 0 15 6.7l3-2.7']),
  link: () => svgIcon(['M15 3h6v6', 'M10 14 21 3', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6']),
};

export const TYPE = {
  page: { word: 'Page', icon: CI.page },
  reading: { word: 'Reading', icon: CI.reading },
  video: { word: 'Video', icon: CI.video },
  guide: { word: 'Guideline', icon: CI.guide },
  discussion: { word: 'Discussion', icon: CI.discussion },
  quiz: { word: 'Quiz', icon: CI.quiz },
  paper: { word: 'Paper', icon: CI.paper },
  present: { word: 'Presentation', icon: CI.present },
  group: { word: 'Group project', icon: CI.group },
  final: { word: 'Final', icon: CI.final },
  apply: { word: 'Application', icon: CI.apply },
  ai: { word: 'AI activity', icon: CI.ai },
  ponder: { word: 'Ponder', icon: CI.ponder },
  gathering: { word: 'Gathering', icon: CI.gathering },
  skill: { word: 'Skill check', icon: CI.skill },
  review: { word: 'Peer review', icon: CI.review },
  survey: { word: 'Survey', icon: CI.survey },
  practice: { word: 'Practice', icon: CI.practice },
  link: { word: 'Link', icon: CI.link },
  lift: { word: 'Motivation', icon: CI.lift },
};

export const MOVEMENTS = [
  { id: 'Lift', label: 'Lift', note: 'Two minutes before the work starts. Why this week matters, what it costs, and what to do when the week goes wrong.' },
  { id: 'Prepare', label: 'Prepare', note: 'Read and watch before anything is written. Nothing here carries points; everything here carries the week.' },
  { id: 'Teach', label: 'Teach One Another', note: 'One of you owns the topic and explains it. The rest answer, in writing, at least twice.' },
  { id: 'Ponder', label: 'Ponder', note: 'Written to your instructor only. Where you say what you have not understood, at no cost to your mark.' },
  { id: 'Prove', label: 'Prove', note: 'The graded work: quiz, paper, presentation, peer review, and the AI judgement task.' },
  { id: 'Gather', label: 'Gather', note: 'One live hour, run by a lead student from a written agenda.' },
  { id: 'Optional', label: 'Optional practice', note: 'Ungraded drills. Retake them as often as you like; nothing here can lower a mark.' },
];

export const PEER_RULE = [
  'Name the specific sentence or number in their post you are answering.',
  'Add evidence: a chapter, a guideline page, or something you have seen on a ward yourself.',
  'End with a question they can answer, or a correction you are able to defend.',
  'Sixty words at the very least. “Well said” and “Nice post” are worth nothing here.',
  'Two different classmates. Two replies to the same person counts once.',
];

export function buildWeek(cid, code, wk, sh, total) {
  const W = 'W' + String(wk.no).padStart(2, '0');
  const first = wk.no === 1;
  const last = wk.no === total;
  const out = [];
  const add = (o) => { out.push(Object.assign({ week: wk.no, W: W, id: cid + ':' + W + ':' + (out.length + 1), pts: 0, req: 'Mark done', day: 7, steps: [], next: [] }, o)); };

  const lf = LIFT[(wk.no - 1) % LIFT.length];
  add({
    group: 'Lift', type: 'lift', day: 1, req: 'Read',
    title: W + ' Lift: ' + lf.head.replace(/\.$/, ''),
    overview: lf.body,
    prompt: { label: 'From somebody who finished', q: lf.voice, note: lf.voiceWho },
    steps: [lf.nudge],
    rubricHead: 'If this week goes wrong',
    rubric: lf.wrong,
    next: ['Nothing here is marked and nothing here is checked. It is two minutes, and it is the difference between a week you finish and a week you abandon.'],
  });

  add({
    group: 'Prepare', type: 'page', day: 1,
    title: W + (first ? ' Lesson: Start Here' : ' Introduction'),
    overview: first
      ? 'This page is the door into ' + code + '. Read it once, in full, before you touch anything else. It tells you how a week is shaped, what is graded, and what to do when the network or the ward takes your evening.'
      : 'A short orientation to Week ' + wk.no + '. ' + wk.desc,
    prompt: first
      ? { label: 'How every week in this course is shaped', q: 'Prepare → Teach One Another → Ponder → Prove.', note: 'Prepare is reading and watching. Teach One Another is the discussion where one of you owns the topic of the week. Ponder is written privately to your instructor. Prove is the graded work: quiz, paper, presentation, peer review. Gather is the live hour on Thursday.' }
      : { label: 'This week’s objective', q: sh.objective, note: 'Everything below exists to get you to that one sentence.' },
    steps: first ? [
      'Read the four movements above. They do not change from week to week, so learn them once.',
      'Open Syllabus in the course menu and read the grading table. Nothing on it should surprise you in Week ' + total + '.',
      'Put your study sittings for this week in the Calendar. Written down beats remembered.',
      'Add a photograph in Account → Profile. Your classmates should be answering a face, not two initials.',
    ] : [
      'Read the objective above, then the list of what is due below it.',
      'Open the set chapter before any video. The video revises the chapter; it never replaces it.',
      'Note the two dates that matter: Wednesday for your discussion post, Sunday for everything else.',
    ],
    next: [first ? 'Mark this page done, then open ' + W + ' Lesson: ' + wk.title + '.' : 'Mark this page done and begin with the lesson.'],
    coming: 'Week ' + wk.no + ' runs ' + spanOf(wk.no) + '. The gathering is Thursday at 19:00.',
  });

  add({
    group: 'Prepare', type: 'page', day: 1,
    title: W + ' Lesson: ' + wk.title,
    overview: wk.desc,
    prompt: { label: 'Required lesson', q: sh.book.chapter + ' · ' + sh.book.title, note: 'Open it from the resource strip at the top of the week page. There is an audio version if you are reading on a small screen or a slow line.' },
    url: sh.book.url,
    source: sh.book.chapter,
    steps: [
      'Read the required lesson once through without stopping, then a second time with a pen in your hand.',
      'Copy the list or the diagram by hand into your notebook. The copying is the study, not the decoration.',
      'Write the objective at the top of that page in your own words: “' + sh.objective + '”',
    ],
    outcomes: wk.outcomes,
    next: ['Mark done only when you could explain the lesson to a colleague who has not read it.'],
    coming: 'Next: ' + W + ' Prepare, the three sources that sit under this lesson.',
  });

  sh.prepare.forEach((p) => {
    add({
      group: 'Prepare', day: 2,
      type: p.kind === 'Video' ? 'video' : p.kind === 'Guideline' ? 'guide' : p.kind === 'Practice' ? 'practice' : 'reading',
      title: W + ' Prepare: ' + short(p.title),
      overview: p.why,
      url: p.url, source: p.source, minutes: p.minutes,
      steps: [
        'Open the source below and work through it for about ' + p.minutes + '.',
        'Write the three sentences you would use to explain it to somebody who has not read it.',
        'Mark this done when you could teach it — not when the scrolling stopped.',
      ],
      next: ['Every source in Prepare is free and openly licensed. If a link will not open on your data, ask in the gathering for the offline copy.'],
    });
  });

  if (first) {
    add({
      group: 'Teach', type: 'discussion', day: 3, pts: 10, req: 'Post',
      title: W + ' Discussion: Ice Breaker',
      disc: cid + ':W01:ice',
      overview: 'Take part in a discussion where you introduce yourself and learn who you are studying beside.',
      purpose: 'This will help you become acquainted with your classmates, so that you are comfortable collaborating with them for the rest of the course.',
      steps: [
        'Write four short paragraphs introducing yourself: where you are from, where you work or train, one medicine or condition you meet most often, and what you want out of ' + code + '.',
        'If you have not done it already, upload a profile picture in Account → Profile. Your classmates should see a face.',
        'Post your introduction to the discussion board.',
      ],
      next: ['Read your classmates’ posts and respond to at least two of them. Say what you have in common, or ask them something about their ward.'],
      closing: 'This board closes for comments at the end of Week 01.',
    });
  }

  const tt = sh.teach[0];
  add({
    group: 'Teach', type: 'discussion', day: 3, pts: pts(tt.points) + 10, req: 'Post',
    title: W + ' Discussion: ' + tt.title,
    disc: cid + ':' + W + ':teach',
    overview: tt.brief,
    purpose: 'Part of ' + code + ' is taught by the people taking it. Explaining something out loud is the only reliable way to find the hole in your own understanding.',
    prompt: { label: 'Topic of the week', q: tt.title, note: tt.who + ' · ' + tt.when + ' · counts when ' + String(tt.counts).toLowerCase() },
    steps: [
      'If the rota names you as host this week, post your explanation by Wednesday, 23:59. Two hundred words, one real example, one real number.',
      'Everyone else: read the host’s post, then reply to at least two different classmates by Sunday, 23:59.',
      'A reply that earns its credit does the five things listed below it. A reply that says “well explained” earns nothing at all.',
    ],
    rubric: PEER_RULE,
    next: ['Come back on Sunday and answer whoever questioned your own post. This thread is marked on the answering, not on the posting.'],
  });

  add({
    group: 'Ponder', type: 'ponder', day: 4, pts: 10, req: 'Submit',
    title: W + ' Ponder: where you stand',
    overview: 'Ponder is written to your instructor and nobody else. No classmate sees it. It is the one place in the course where saying “I did not understand this” costs you nothing.',
    prompt: { label: 'This week’s question', q: 'Against this week’s objective — ' + sh.objective.replace(/\.$/, '') + ' — where do you actually stand tonight?', note: 'Three hundred words is plenty. Honest and short beats polished and empty.' },
    steps: [
      'Answer the question above in your own words, not the textbook’s.',
      'Name one thing from this week you have not understood, and what you have already tried.',
      'Name one thing you will do differently on your ward because of this week.',
    ],
    next: ['Your instructor reads every one of these before Thursday. Expect yours to be answered at the gathering, without your name attached.'],
  });

  sh.reinforce.forEach((r, i) => {
    if (/Introduction post/.test(r.title)) return;
    const ty = /Reading check|Quiz/.test(r.title) ? 'quiz'
      : /Final/.test(r.title) ? 'final'
      : /Paper|page on/.test(r.title) ? 'paper'
      : /Presentation/.test(r.title) ? 'present'
      : /Group project/.test(r.title) ? 'group' : 'apply';
    const steps = {
      quiz: ['Do the reading first. Every question comes out of ' + sh.book.chapter + ' or the sources in Prepare.', 'Two attempts where the task allows it, and the better mark is the one that stands.', 'Closed book. The final is set the same way, so practise it the honest way now.'],
      final: ['Choose the patient you will write about early in the week. Nobody writes a good case on a Saturday night.', 'Four pages maximum. Cite the guideline page for every dose you name.', 'One attempt, no extension, no names of patients or facilities.'],
      paper: ['One page unless the task says otherwise. No cover page, no padding.', 'Cite the chapter or the guideline page for anything that is not your own observation.', 'No patient names, no facility names, no photographs of charts.'],
      present: ['Record five minutes. A phone propped against a jerrycan on a table is enough.', 'Five slides at the most, and speak to them rather than read them.', 'Upload the file, or paste a link if your data cannot carry the upload.'],
      group: ['Agree before Wednesday who writes, who checks and who presents.', 'One file for the group with every name on it.', 'Each member also submits three lines saying what they personally did.'],
      apply: ['Read the task twice before you start. Half the lost marks are lost in the first sentence.', 'Hand in the working, not only the answer.', 'Late work is accepted for seven days at eighty per cent.'],
    }[ty];
    add({
      group: 'Prove', type: ty, pts: pts(r.points), req: ty === 'quiz' ? 'Take' : 'Submit',
      day: /Wednesday/.test(r.due) ? 3 : 7,
      title: r.title,
      overview: r.brief,
      mark: 'w' + wk.no + '-r' + i,
      prompt: ty === 'quiz' ? { label: 'What is examined', q: r.brief, note: 'Marks appear on your grades page the moment the attempt closes.' } : null,
      steps: steps,
      next: [ty === 'quiz' ? 'Your mark and the correct answers appear as soon as your last attempt closes.' : 'A person marks this. Expect it back inside five working days, with comments you can act on.'],
    });
  });

  if (sh.ai) {
    add({
      group: 'Prove', type: 'ai', day: 6, pts: pts(sh.ai.points), req: 'Submit',
      title: W + ' Working with AI: ' + sh.ai.title,
      overview: sh.ai.task,
      prompt: { label: 'The prompt to start from', q: sh.ai.prompt, note: sh.ai.rule },
      mark: 'w' + wk.no + '-ai',
      steps: [
        'Run the prompt above, unchanged, and keep the answer exactly as it came back.',
        'Check every claim in it against the chapter, the guideline or the label. Mark what is right, what is vague and what is wrong.',
        'Hand in three things: the answer, your corrections, and the source that let you correct it.',
      ],
      next: ['The mark is entirely for the judgement. An uncorrected answer, however well written, scores zero.'],
    });
  }

  if (out.some((x) => x.type === 'present' || x.type === 'group')) {
    add({
      group: 'Prove', type: 'review', day: 7, pts: 15, req: 'Submit',
      title: W + ' Peer Review: two classmates, in writing',
      disc: cid + ':' + W + ':teach',
      overview: 'Review the work of two different classmates from this week’s thread. Reviewing is graded here because reading somebody else’s reasoning carefully is the fastest way to correct your own.',
      prompt: { label: 'What counts as a review', q: 'Specific, evidenced, and it ends with a question.', note: 'Reviews are read by the person who wrote the work and by your instructor. Both can see who wrote them.' },
      rubric: PEER_RULE,
      steps: [
        'Open the thread and choose two posts from two different people — not two replies to the same person.',
        'Write each review against the five rules below. Sixty words is the floor, not the target.',
        'Say one thing the post got right before you say what is missing. Both are part of the mark.',
      ],
      next: ['Your two reviews are counted automatically from the thread. The tracker on this page shows where you stand.'],
    });
  }

  if (wk.no % 2 === 0) {
    add({
      group: 'Prove', type: 'skill', day: 6, pts: 20, req: 'Submit',
      title: W + ' Skill check: ' + wk.short.toLowerCase() + ', observed once',
      overview: 'A practical check done in front of a colleague who signs it. This is the part of the course a screen cannot mark: whether your hands do what your notes say.',
      prompt: { label: 'Who may observe you', q: 'A registered nurse, midwife or clinical officer at your facility.', note: 'They sign the sheet. You photograph it and upload it. Names of patients never appear on it.' },
      steps: [
        'Download the one-page check sheet from Course Materials.',
        'Do the procedure once, in full, while your observer watches and ticks each line.',
        'Photograph the signed sheet and upload it. A dark or blurred photograph is a returned submission.',
      ],
      next: ['If nothing at your facility gives you the chance this week, say so in Ponder and your instructor will arrange it at the gathering.'],
    });
  }

  add({
    group: 'Gather', type: 'gathering', day: 4, pts: 25, req: 'Attend',
    title: W + ' Gathering: ' + wk.short,
    overview: 'One live hour on Thursday at 19:00, run by a lead student from the agenda below. Your instructor listens, then answers everything that is still standing at the end.',
    prompt: { label: 'Agenda', q: 'Open · Teach-back · Case · Questions · Close', note: 'Twelve minutes each. The lead student changes every week and the rota is on the People page.' },
    steps: [
      'Come having read. The gathering revises the week; it does not deliver it.',
      'Bring one question in writing. The lead student collects them in the first two minutes.',
      'If your data cannot carry video, join by voice and say so in the chat. Nobody is marked down for bandwidth.',
    ],
    next: ['Attendance is marked by the lead student. If you genuinely cannot attend, post your teach-back in the thread instead and it counts.'],
  });

  add({
    group: 'Optional', type: 'practice', day: 7, req: 'View',
    title: W + ' Vocabulary list',
    overview: 'Every term this week introduces, with a plain-English gloss beside it and the chapter it came from. Ungraded. Nothing you do here can lower a mark.',
    steps: ['Read it before the quiz, not after it.', 'Cover the right column and say each definition aloud.', 'Any term you cannot say twice, write on a card.'],
    next: [],
  });

  if (/pharmacolog/i.test(code) || /Pharmacology/i.test(wk.title) || cid.indexOf('pharmacology') !== -1) {
    add({
      group: 'Optional', type: 'practice', day: 7, req: 'View',
      title: W + ' Dosage drill',
      overview: 'Twenty calculations with worked answers, in the same forms the final uses. Unlimited attempts, no mark recorded.',
      steps: ['Do them with a pen and paper, not a calculator app.', 'Redo every one you got wrong the following day, not the same evening.'],
      next: [],
    });
  }

  if (first) {
    add({
      group: 'Optional', type: 'survey', day: 5, req: 'View',
      title: W + ' Survey: how this term reaches you',
      overview: 'Six questions about your data, your handset and the hours you can actually study. It shapes what your instructor sends and when.',
      steps: ['Answer honestly about your data. The answers change what gets sent to your phone.'],
      next: [],
    });
  }

  if (last) {
    add({
      group: 'Optional', type: 'survey', day: 7, req: 'View',
      title: W + ' End-of-course evaluation',
      overview: 'What worked, what wasted your time, and what you would cut. Anonymous, and read before the course runs again.',
      steps: ['Name one thing to keep and one thing to remove. Vague answers change nothing.'],
      next: [],
    });
  }

  return out;
}

export const STANDARD_RESOURCES = [
  { title: 'Academic honesty and how work is checked', note: 'What counts as your own work, and what happens when it is not' },
  { title: 'Using AI in this course', note: 'Permitted, required in one task each week, and never a source' },
  { title: 'Grievances and appeals', note: 'How to contest a mark, and the deadline for doing it' },
  { title: 'Support for a disability or a chronic condition', note: 'Arranged privately with the office, not the instructor' },
  { title: 'Paying for a course · go to Payments', note: 'Wallet, bank deposit, and what closes access' },
  { title: 'Technology help · low data and shared handsets', note: 'Offline copies, SMS notices, and the phone sign-in code' },
  { title: 'Online tutoring hours', note: 'Free, one-to-one, booked from the Tutoring page' },
  { title: 'Gathering guide and weekly agendas', note: 'For lead students, one page per week' },
];

export const MAIL_FOLDERS = [
  { id: 'inbox', label: 'Inbox' },
  { id: 'unread', label: 'Unread' },
  { id: 'starred', label: 'Starred' },
  { id: 'sent', label: 'Sent' },
  { id: 'archived', label: 'Archived' },
  { id: 'submission', label: 'Submission comments' },
];

export const SEED_MAIL = [
  {
    id: 'm-1', course: 'cn211-pharmacology-1', subject: 'Week 01 gathering: joining by voice is fine',
    when: 'Sep 3, 2026', unread: 2, starred: false, folder: 'inbox',
    participants: ['Grace Nalubega', 'Agnes Chebet', 'you'],
    msgs: [
      { who: 'Grace Nalubega', when: 'Sep 2, 2026 at 18:40', body: 'Four of you have written to say the video will not hold on your line. Join by voice. Agnes has the agenda and will read each item out before we discuss it, so nothing is lost by not seeing the screen. If you drop, come back in — we will not restart the item.' },
      { who: 'Agnes Chebet', when: 'Sep 3, 2026 at 06:12', body: 'Agenda is in the thread and on the Gathering page. I will collect written questions in the first two minutes, so send yours to me before 19:00 if you would rather not speak.' },
    ],
  },
  {
    id: 'm-2', course: 'cn211-pharmacology-1', subject: 'Your Ponder for Week 01',
    when: 'Sep 3, 2026', unread: 1, starred: true, folder: 'inbox',
    participants: ['Grace Nalubega', 'you'],
    msgs: [
      { who: 'Grace Nalubega', when: 'Sep 3, 2026 at 21:05', body: 'I have read it. You are not behind — you are describing the gap between what the ward taught you and what the chapter says, which is the point of the week. Bring the labetalol question to Thursday; I will answer it without your name. One correction: a precaution is not a weaker contraindication, it is a different instruction. We will draw that line properly at the gathering.' },
    ],
  },
  {
    id: 'm-3', course: 'cn211-medical-nursing-1', subject: 'Week 6 information · observation charts',
    when: 'Sep 1, 2026', unread: 1, starred: false, folder: 'inbox',
    participants: ['Grace Nalubega', 'Nancy Atwine', 'Winnie Nabirye', 'you'],
    msgs: [
      { who: 'Grace Nalubega', when: 'Sep 1, 2026 at 12:20', body: 'Medical Nursing Week 06 opens on Monday. Read the wound-care section once before you open the observation chart activity, not after. If your facility uses a different chart, photograph yours and bring it — we will compare three of them in the hour.' },
      { who: 'Nancy Atwine', when: 'Sep 1, 2026 at 19:44', body: 'Ours in Mbarara has no column for daily weight. Is it acceptable to add one by hand for the activity, or should I submit the chart as it is used?' },
    ],
  },
  {
    id: 'm-4', course: null, subject: 'Payment received · access opened',
    when: 'Aug 31, 2026', unread: 0, starred: false, folder: 'inbox',
    participants: ['Amara Kato', 'you'],
    msgs: [
      { who: 'Amara Kato', when: 'Aug 31, 2026 at 09:02', body: 'Your semester charge of UGX 58,000 is settled and every registered course is open. The receipt is on your Statement page. Nothing further is owed this semester and no reminder will be sent to your phone.' },
    ],
  },
  {
    id: 'm-5', course: 'cn211-pharmacology-1', subject: 'Group 1: who is writing the dosage-forms slide?',
    when: 'Aug 30, 2026', unread: 0, starred: false, folder: 'inbox',
    participants: ['Brian Ochieng', 'Sandra Auma', 'Moses Kato', 'you'],
    msgs: [
      { who: 'Brian Ochieng', when: 'Aug 30, 2026 at 14:15', body: 'I can take the outpatient examples but I cannot present on Thursday — I am on the Monday-to-Thursday rota this block. Sandra, can you present if I write?' },
      { who: 'Sandra Auma', when: 'Aug 30, 2026 at 20:31', body: 'I can present. Send me the slide by Tuesday evening so I have a day with it. Somebody still needs the stock-price figure from their own store.' },
    ],
  },
  {
    id: 'm-6', course: 'cn211-pharmacology-1', subject: 'W01 Glossary card set · 23 of 25',
    when: 'Sep 4, 2026', unread: 1, starred: false, folder: 'submission',
    participants: ['Grace Nalubega', 'you'],
    msgs: [
      { who: 'Grace Nalubega', when: 'Sep 4, 2026 at 07:48', body: 'Eight cards, all in your own words, photographed clearly. Two marks off because “adverse reaction” and “side effect” are written as the same thing on card six. Fix that card before the Week 04 quiz — it is examined there.' },
    ],
  },
  {
    id: 'm-7', course: null, subject: 'Question about my clearance for Year 2 Semester 1',
    when: 'Aug 28, 2026', unread: 0, starred: false, folder: 'sent',
    participants: ['you', 'Amara Kato'],
    msgs: [
      { who: 'you', when: 'Aug 28, 2026 at 17:03', body: 'Good afternoon. My Year 1 Semester 2 clearance was confirmed by the school in July but my plan still shows it as not recorded. Nothing is blocked, but I would rather it were correct before results. Fred Samson Okorio.' },
    ],
  },
  {
    id: 'm-8', course: 'cn211-medical-nursing-1', subject: 'Term dates and the reading week',
    when: 'Aug 24, 2026', unread: 0, starred: false, folder: 'archived',
    participants: ['Amara Kato', 'you'],
    msgs: [
      { who: 'Amara Kato', when: 'Aug 24, 2026 at 10:00', body: 'Block 5 runs from 31 August to 18 October. There is no reading week in this block; the gatherings run every Thursday including the week of the final. Keep this for your records.' },
    ],
  },
];

export const MAIL_FOLDERS_BY_ID = {};
MAIL_FOLDERS.forEach((f) => { MAIL_FOLDERS_BY_ID[f.id] = f.label; });

export const SUBMISSIONS = [
  { id: 's-1', name: 'Denis Wanyama', course: 'CN 211', item: 'W01 Glossary card set', week: 1, when: 'Sep 2 · 21:14', outOf: 25, late: false,
    body: 'Eight cards photographed on a bench, all handwritten. Definitions are in his own words. Card six treats “side effect” and “adverse reaction” as the same thing; the other seven are clean and one uses a ward example the chapter does not give.',
    rubric: [{ t: 'Eight terms, all present', pts: 8 }, { t: 'Written in the learner’s own words, not copied', pts: 7 }, { t: 'One real clinical example somewhere in the set', pts: 5 }, { t: 'Legible photograph, cards in order', pts: 5 }] },
  { id: 's-2', name: 'Esther Adong', course: 'CN 211', item: 'W01 Working with AI: eight terms', week: 1, when: 'Sep 3 · 06:40', outOf: 10, late: false,
    body: 'Submitted the assistant’s answer unedited, then three corrections with sources: the WHO list for the naming point, chapter 1.2 for contraindication, and a DailyMed label for the adverse-reaction definition. Rejected the assistant’s claim that indication and use are interchangeable.',
    rubric: [{ t: 'Original AI answer included, unedited', pts: 2 }, { t: 'At least one claim corrected', pts: 3 }, { t: 'Every correction carries a source', pts: 3 }, { t: 'Judgement written in her own voice', pts: 2 }] },
  { id: 's-3', name: 'Nancy Atwine', course: 'CN 211', item: 'W01 Ponder: where you stand', week: 1, when: 'Sep 3 · 19:58', outOf: 10, late: false,
    body: 'Honest and specific: she can name the eight terms but cannot yet separate a precaution from a contraindication at the bedside. Names the labetalol case. Says her ward records the drug and the time but not the observation that justified it.',
    rubric: [{ t: 'Answers the week’s question directly', pts: 4 }, { t: 'Names one thing not yet understood', pts: 3 }, { t: 'Names one change to practice', pts: 3 }] },
  { id: 's-4', name: 'Brian Ochieng', course: 'CN 211', item: 'W01 Reading check: eight terms', week: 1, when: 'Sep 4 · 07:02', outOf: 20, late: true,
    body: 'Second attempt, submitted eleven hours after the deadline. Nine of ten correct; the missed question is the one separating dosage form from route.',
    rubric: [{ t: 'Nine of ten answers correct', pts: 18 }, { t: 'Within the two permitted attempts', pts: 2 }] },
  { id: 's-5', name: 'Winnie Nabirye', course: 'CN 211', item: 'W02 Presentation: one medicine, plant to vial', week: 2, when: 'Sep 4 · 12:30', outOf: 30, late: false,
    body: 'Five slides and a four-minute recording made on a phone in a changing room. One real number from her own store. Speaks to the slides rather than reading them. The source slide has no citation on it.',
    rubric: [{ t: 'One medicine followed source to ward form', pts: 10 }, { t: 'Five slides or fewer, spoken not read', pts: 8 }, { t: 'One real number from her own facility', pts: 7 }, { t: 'Sources cited on the slide', pts: 5 }] },
  { id: 's-6', name: 'Agnes Chebet', course: 'CN 211', item: 'W01 Discussion: host post', week: 1, when: 'Sep 2 · 20:40', outOf: 25, late: false,
    body: 'Hosted contraindication. Two hundred and ten words, one pre-eclampsia example, one number (peak flow), and she answered six questions in the thread including two she had to correct herself on.',
    rubric: [{ t: 'Posted by Wednesday, two hundred words', pts: 8 }, { t: 'One real example, one real number', pts: 7 }, { t: 'Answered every question put to her', pts: 6 }, { t: 'Corrected herself where she was wrong', pts: 4 }] },
];

export const PONDERS = [
  { id: 'p-1', name: 'Samuel Odongo', week: 1, when: 'Sep 3 · 22:10',
    body: 'I can define all eight terms now but I could not have told you last week that I did not know them — I have been giving these medicines for four years. What I have not understood is why the same tablet works differently in two children of the same weight. I have read 1.3 twice. I will keep going but I would rather you knew.' },
  { id: 'p-2', name: 'Prossy Nakato', week: 1, when: 'Sep 3 · 20:44',
    body: 'The reading is fine. My problem is time: I am on the theatre list until 20:00 four days a week and the gathering is at 19:00. I have listened to the audio version on the way home twice. If attendance is a quarter of the mark I will lose it every week through no laziness of mine.' },
  { id: 'p-3', name: 'Emmanuel Tumwine', week: 1, when: 'Sep 4 · 03:15',
    body: 'I understood the terms. What I did not understand is what I am allowed to give in casualty before a clinical officer arrives. The chapter says nothing about scope of practice in Uganda and the guideline assumes somebody senior is present. This is the thing I actually need and it is not in the week.' },
  { id: 'p-4', name: 'Ibrahim Mukasa', week: 1, when: 'Sep 3 · 18:02',
    body: 'I am dispensing, not nursing, so half the examples are not mine. I have been translating them into my own work as I read, which is slower but it is holding. One request: when you set a case, could one of them be a counter and not a bedside?' },
];

export const GATHER_Q = [
  { t: 'Where exactly is the line between a precaution and a contraindication, in a sentence I can use at a bedside?', who: 'Three learners asked this' },
  { t: 'If the correct medicine is out of stock, does the guideline’s alternatives column bind us or advise us?', who: 'Nancy Atwine' },
  { t: 'What may an enrolled nurse give in casualty before a clinical officer arrives?', who: 'Emmanuel Tumwine' },
];

/* ═══════════ FREE FOUNDATION COURSE ═══════════ */

export const NF = 'https://wtcs.pressbooks.pub/nursingfundamentals/';
export const OWL = 'https://owl.purdue.edu/owl/general_writing/';
export const PLAIN = 'https://www.cdc.gov/healthliteracy/developmaterials/plainlanguage.html';

export const FREE_UNIT = {
  id: 'df000-foundations',
  code: 'DF 000',
  title: 'Reading, Speaking and Writing in Nursing',
  term: 'free',
  free: true,
  map: true,
};

export const FOUND_WEEKS = [
  {
    no: 1, title: 'Reading a clinical text without drowning', short: 'Reading',
    desc: 'Most learners do not fail a nursing course because the ideas are too hard. They fail because nobody ever showed them how to read forty pages of clinical English on a phone, at night, after a shift. This week does that.',
    outcomes: ['Read a chapter once for shape and once for detail', 'Find the sentence that carries a paragraph', 'Build your own glossary as you read'],
    items: [],
  },
  {
    no: 2, title: 'Speaking so a patient and a prescriber both understand you', short: 'Speaking',
    desc: 'The same fact has to be said two ways: to a frightened mother in plain words, and to a clinical officer in twenty seconds with the numbers in order. Both are skills, and both can be practised.',
    outcomes: ['Give a handover in a fixed order under pressure', 'Explain a medicine to somebody who cannot read the label', 'Say what you do not know without losing authority'],
    items: [],
  },
  {
    no: 3, title: 'Writing notes that hold up', short: 'Writing',
    desc: 'A note is read by somebody who was not there, sometimes years later, sometimes in an inquiry. This week is about writing so that reader is never confused about what happened, when, and who did it.',
    outcomes: ['Write a note that survives being read by a stranger', 'Separate what you observed from what you concluded', 'Write an incident record that is complete and not defensive'],
    items: [],
  },
];

export const FOUND_SHEETS = {
  1: {
    span: 'Week 1 · free to everyone',
    objective: 'Leave this week able to read a set chapter twice, on purpose, and come out with a glossary you wrote yourself.',
    book: { chapter: 'Chapter 1', title: 'Nursing Fundamentals · scientific reasoning and reading', url: NF + 'chapter/introduction/' },
    prepareNote: 'Nothing here is examined. Everything here decides how the examined courses go.',
    prepare: [
      PREP('Chapter', '20 min', 'How a nursing chapter is built — headings, boxes, tables', NF + 'chapter/introduction/', 'Read only the headings first. Write what you think the chapter will say before you read a word of it.', 'Open RN · Nursing Fundamentals'),
      PREP('Reading', '15 min', 'Plain language: what makes a sentence readable', PLAIN, 'Read the checklist. You will use it on yourself in Week 03.', 'CDC · health literacy'),
      PREP('Video', '12 min', 'How to read a textbook chapter — video search', YT + 'how+to+read+a+textbook+chapter+effectively', 'Pick one. Try its method on tonight\u2019s chapter, not tomorrow\u2019s.', 'YouTube · search results'),
      PREP('Practice', '10 min', 'Reading on a small screen and a small data bundle', YT + 'study+offline+low+data+student+tips', 'Set your phone up once — offline copy, larger text, screen dimmed — and stop fighting it every night.', 'YouTube · search results'),
    ],
    ai: {
      title: 'Make the assistant summarise a chapter, then find what it left out',
      task: 'Paste one section of the chapter and ask for a summary in five lines. Then read the section yourself and list what the summary dropped.',
      prompt: 'Summarise this nursing text in five lines for a student whose second language is English. Then list any clinical detail you left out of the summary.',
      rule: 'A summary is a map, never the ground. What it drops is usually what is examined.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Prepare', '15 pts', 'W01 Reading log: one chapter, twice', 'Read the set chapter once for shape and once with a pen. Hand in the two-column note you made on the second pass.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '15 pts', 'W01 Your own glossary: twelve words', 'Twelve words you met this week that you could not have defined last week, each in your own sentence.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Open teach', points: '10 pts', title: 'The paragraph I had to read four times', brief: 'Post the one paragraph from this week that defeated you, and what finally made it make sense. Somebody else is stuck on the same one.', who: 'Everyone posts', when: 'Posted by Wednesday', counts: 'Posted, plus two classmates answered' },
    ],
  },
  2: {
    span: 'Week 2 · free to everyone',
    objective: 'Leave this week able to hand over a patient in a fixed order, out loud, in under a minute.',
    book: { chapter: 'Chapter 2', title: 'Nursing Fundamentals · communication', url: NF + 'chapter/2-2-basic-communication-concepts/' },
    prepareNote: 'Read it, then say it out loud. Reading about speaking has never once been enough.',
    prepare: [
      PREP('Chapter', '25 min', 'Basic communication concepts', NF + 'chapter/2-2-basic-communication-concepts/', 'Note the difference between what you say and what the other person receives.', 'Open RN · Nursing Fundamentals'),
      PREP('Reading', '18 min', 'Structured handover — the fixed order that stops you rambling', NF + 'chapter/2-4-communicating-with-health-care-team-members/', 'Learn the order once. Under pressure the order does the thinking for you.', 'Open RN · Nursing Fundamentals'),
      PREP('Video', '14 min', 'Nurse handover and patient explanation — video search', YT + 'nursing+handover+sbar+communication+example', 'Watch one handover. Time it. Most good ones are under sixty seconds.', 'YouTube · search results'),
      PREP('Reference', '10 min', 'Explaining a medicine to somebody who cannot read the label', PLAIN, 'Take three sentences from a leaflet and rewrite them for a mother in a hurry.', 'CDC · plain language'),
    ],
    ai: {
      title: 'Have the assistant play the patient who does not understand',
      task: 'Explain one medicine in plain words. Ask the assistant to reply as a patient with no schooling who is frightened, and to say exactly which words confused them.',
      prompt: 'You are a patient with no formal schooling and a sick child. I will explain a medicine. Reply as that patient, and list every word in my explanation you did not understand.',
      rule: 'Hand in your first explanation and your rewritten one. The mark is for the distance between them.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Reinforce', '20 pts', 'W02 Recorded handover: sixty seconds', 'Record yourself handing over one patient in the fixed order. A phone voice note is enough. No names.', 'Due Sunday, 23:59'),
      TASK('Reinforce', '15 pts', 'W02 One medicine, two explanations', 'The same medicine explained to a prescriber and to a patient. One page, side by side.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Open teach', points: '10 pts', title: 'The sentence I use when I do not know', brief: 'Post the exact words you use on a ward when you are asked something you cannot answer. Then read what others wrote and take the better one.', who: 'Everyone posts', when: 'Posted by Wednesday', counts: 'Posted, plus two classmates answered' },
    ],
  },
  3: {
    span: 'Week 3 · free to everyone',
    objective: 'Leave this week able to write a note a stranger can read years later without guessing.',
    book: { chapter: 'Chapter 3', title: 'Nursing Fundamentals · documentation', url: NF + 'chapter/2-6-documentation/' },
    prepareNote: 'Write badly first, then cut. Nobody writes a clean note in one pass.',
    prepare: [
      PREP('Chapter', '22 min', 'Documentation — what a note is legally for', NF + 'chapter/2-6-documentation/', 'Notice what must be in every entry: time, observation, action, name.', 'Open RN · Nursing Fundamentals'),
      PREP('Reading', '20 min', 'Writing clearly in English — sentence and paragraph', OWL, 'Two habits only: one idea per sentence, and cut every word that carries nothing.', 'Purdue OWL'),
      PREP('Guideline', '15 min', 'Observed, concluded, and done — keeping the three apart', NF + 'chapter/2-6-documentation/', '\u201cPatient appears anxious\u201d is a conclusion. \u201cPatient asked four times when the doctor comes\u201d is an observation.', 'Open RN · Nursing Fundamentals'),
      PREP('Practice', '12 min', 'Academic writing without the padding', YT + 'academic+writing+concise+clear+sentences', 'Watch one, then cut a paragraph of your own by a third.', 'YouTube · search results'),
    ],
    ai: {
      title: 'Ask the assistant to find what a stranger could not understand',
      task: 'Paste one of your own notes and ask what a reader who was not present would be unable to work out. Fix those gaps yourself.',
      prompt: 'Read this nursing note as somebody who was not present. List everything you cannot determine from it: what was observed, what was concluded, what was done, when, and by whom.',
      rule: 'Do not let it rewrite your note. Its job is to find the holes; filling them is yours.',
      points: '10 pts',
    },
    reinforce: [
      TASK('Reinforce', '20 pts', 'W03 One note, rewritten three times', 'Your first note, the assistant\u2019s list of gaps, and your final version. All three, in order.', 'Due Sunday, 23:59'),
      TASK('Final', '25 pts', 'W03 Incident record: complete and not defensive', 'Write up one thing that went wrong, real or given. Complete, dated, no blame, no names.', 'Due Sunday, 23:59'),
    ],
    teach: [
      { kind: 'Open teach', points: '10 pts', title: 'A note I could not understand', brief: 'Post a note you were once handed that told you nothing, and what was missing from it. Anonymise it completely.', who: 'Everyone posts', when: 'Posted by Wednesday', counts: 'Posted, plus two classmates answered' },
    ],
  },
};

/* ═══════════ MOTIVATION ═══════════ */

export const LIFT = [
  {
    head: 'You are not behind. You are at the start.',
    body: 'Week 01 always feels like too much, because in Week 01 everything is new at once — the words, the platform, the people, the hour you have to find. None of that is a measure of whether you can do this course. By Week 03 the words will be ordinary and you will not remember finding them hard.',
    voice: 'I nearly withdrew in the first week. I could not see how I would read all of that on a night shift. What I did was stop trying to read it all and start reading one chapter properly. Three weeks later I was ahead.',
    voiceWho: 'A learner who finished last year, Mbarara',
    nudge: 'Pick your three study sittings for this week and write them down somewhere you will see them. Written down beats remembered, every time.',
    wrong: ['If a night shift takes your evening, do the Prepare reading and skip the video. The reading is the week.', 'If your data runs out, the audio version and the offline chapter are on Course Materials.', 'If you fall behind, post in Ponder. It is private, it costs no marks, and your instructor answers it before Thursday.'],
  },
  {
    head: 'The second week is where most people quietly stop.',
    body: 'Week 01 runs on curiosity. Week 02 runs on habit, and the habit is not built yet. This is the week to be unglamorous about it: same hour, same place, same notebook. You are not trying to feel motivated. You are trying to make the decision once so you do not have to make it every night.',
    voice: 'My trick was the same chair every evening at eight. Some nights I did twenty minutes and it was rubbish. But I never had to decide whether to start, and that was the whole thing.',
    voiceWho: 'A learner who finished last year, Jinja',
    nudge: 'Do the hardest item in the week first, while the evening is still yours. Leave the vocabulary list for when you are tired.',
    wrong: ['Twenty honest minutes beats a planned two hours that never happens.', 'If you missed Week 01, do not try to catch up on everything. Do this week properly and go back later.', 'Late work is accepted for seven days at eighty per cent, automatically. Nobody has to be told.'],
  },
  {
    head: 'By now you can read things you could not read a fortnight ago.',
    body: 'That is worth stopping on, because it happens invisibly. Go back to the Week 01 chapter and read a paragraph. It will be easier than it was, and the difference is not the paragraph. This is the point in a course where the work stops feeling like translation and starts feeling like thinking.',
    voice: 'Around Week 03 I noticed I was arguing with the textbook instead of just trying to finish it. That was when I knew I was actually studying and not just reading.',
    voiceWho: 'A learner who finished last year, Gulu',
    nudge: 'Read one paragraph from Week 01 tonight. Notice how much less work it is. Then get on with this week.',
    wrong: ['If the gathering hour never works for your shift, post your teach-back in the thread. It counts in full.', 'If one topic is not landing, name it in Ponder rather than working around it for another week.', 'A low mark on one quiz changes very little. Missing three weeks changes everything.'],
  },
  {
    head: 'This is the week the course asks you to do it with your hands.',
    body: 'Everything so far could be done sitting down. The skill check cannot. That is uncomfortable, and it is the whole reason this course is worth taking — a screen can mark whether you know the dose, but only a colleague watching you can say whether your hands do what your notes say. Ask early. People are more willing to sign than you expect.',
    voice: 'I put off asking someone to observe me for two weeks because I thought they would think I was wasting their time. She said yes in four seconds and then taught me something not in the book.',
    voiceWho: 'A learner who finished last year, Mbale',
    nudge: 'Ask your observer today, not on Saturday. The ask is the hard part; the procedure you already do every week.',
    wrong: ['If nobody at your facility can observe you this week, say so in Ponder and it will be arranged at the gathering.', 'A blurred photograph of the signed sheet is a returned submission. Take it in daylight.', 'The observer signs what they saw. They are not marking you, and they cannot fail you.'],
  },
  {
    head: 'Last week. Finish it properly rather than quickly.',
    body: 'There is a version of the last week where you hand in whatever is nearest and it is over. There is another where you spend one extra hour on the final case and leave with something you would show somebody. The difference is one hour, and you will remember which one you chose for a long time.',
    voice: 'I wrote my final case about a patient I actually cared about instead of the easiest one. It took longer and it is the only piece of coursework I have kept.',
    voiceWho: 'A learner who finished last year, Kampala',
    nudge: 'Start the final on Monday, not Saturday. Nobody has ever written a good case at eleven on a Saturday night.',
    wrong: ['The final does not extend, because its answers are published afterwards. Everything else does.', 'If you are short of one submission, hand in the strongest thing you have rather than nothing.', 'Fill in the end-of-course evaluation honestly. It is read before this course runs again.'],
  },
];

/* ═══════════ PUBLISHING ═══════════ */

export const PUB_DEFAULT = {
  'cn211-pharmacology-1': { 1: 'published', 2: 'published', 3: 'published', 4: 'scheduled', 5: 'draft' },
  'cm212-pharmacology-1': { 1: 'published', 2: 'published', 3: 'published', 4: 'scheduled', 5: 'draft' },
  'cn211-medical-nursing-1': { 1: 'published', 2: 'published', 3: 'scheduled', 4: 'draft', 5: 'draft' },
  'df000-foundations': { 1: 'published', 2: 'published', 3: 'published' },
};

export const PUB_STATE = {
  published: { word: 'Published', note: 'Learners can open every item in it.', tone: GREEN },
  scheduled: { word: 'Scheduled', note: 'Visible as a locked square until its Monday.', tone: '#9a6a45' },
  draft: { word: 'Draft', note: 'Learners cannot see that this week exists.', tone: FAINT },
};

/* ═══════════ DESK NAVIGATION ═══════════ */

export const DESK_RAIL = {
  admin: [
    { key: 'aToday', label: 'Today', route: 'aToday' },
    { key: 'aDecide', label: 'Decisions', route: 'aQueue' },
    { key: 'aMoney', label: 'Money', route: 'aMoney' },
    { key: 'aPeople', label: 'People', route: 'aPeople' },
    { key: 'aStruct', label: 'Structure', route: 'aProgrammes' },
    { key: 'aLog', label: 'Log', route: 'aLog' },
  ],
  instructor: [
    { key: 'iToday', label: 'Today', route: 'iToday' },
    { key: 'iMark', label: 'Marking', route: 'iMark' },
    { key: 'iCourses', label: 'Courses', route: 'iCourses' },
    { key: 'iLearners', label: 'Learners', route: 'iLearners' },
  ],
};

export const DESK_SUB = {
  aDecide: [
    { route: 'aQueue', label: 'Open decisions' },
    { route: 'aDecided', label: 'Already decided' },
  ],
  aMoney: [
    { route: 'aMoney', label: 'Ledger' },
    { route: 'aAwaiting', label: 'Awaiting a person' },
    { route: 'aPolicy', label: 'Fees and access' },
  ],
  aPeople: [
    { route: 'aPeople', label: 'Learners' },
    { route: 'aStaff', label: 'Staff and permissions' },
    { route: 'aNotices', label: 'Announcements' },
  ],
  aStruct: [
    { route: 'aProgrammes', label: 'Programmes' },
    { route: 'aCourses', label: 'Course spaces' },
    { route: 'aPublishing', label: 'Publishing' },
  ],
  iCourses: [
    { route: 'iCourses', label: 'My course spaces' },
    { route: 'iPublish', label: 'Publishing' },
    { route: 'iPonders', label: 'Ponders' },
    { route: 'iGathering', label: 'Gathering' },
    { route: 'iNotice', label: 'Announcements' },
  ],
};

export const DESK_MAP = {
  aToday: 'aToday', aQueue: 'aDecide', aCase: 'aDecide', aDecided: 'aDecide',
  aMoney: 'aMoney', aAwaiting: 'aMoney', aPolicy: 'aMoney',
  aPeople: 'aPeople', aStaff: 'aPeople', aNotices: 'aPeople',
  aProgrammes: 'aStruct', aCourses: 'aStruct', aPublishing: 'aStruct',
  aLog: 'aLog',
  iToday: 'iToday', iMark: 'iMark',
  iCourses: 'iCourses', iMap: 'iCourses', iPublish: 'iCourses', iPonders: 'iCourses', iGathering: 'iCourses', iNotice: 'iCourses',
  iLearners: 'iLearners', iSignals: 'iLearners',
};

export const _UNUSED_NAV = [
  { key: 'iToday', label: 'Today' },
  { key: 'iMark', label: 'Marking' },
  { key: 'iCourses', label: 'Course spaces' },
  { key: 'iLearners', label: 'Learners' },
  { key: 'iPonders', label: 'Ponders' },
  { key: 'iGathering', label: 'Gathering' },
  { key: 'iSignals', label: 'Signals' },
  { key: 'iNotice', label: 'Send a notice' },
];

export const POLICY_GROUPS = [
  { title: 'Fees', rows: [
    { k: 'Semester charge', v: 'UGX 58,000', note: 'One charge a semester, whatever number of courses are registered.' },
    { k: 'What closes access', v: 'Non-payment only', note: 'Access closes when the semester charge is unpaid. Marks, attendance and behaviour never close access.' },
    { k: 'Accepted', v: 'MTN · Airtel · bank', note: 'Wallet payments open access automatically. Bank deposits are matched by a person, usually the same working day.' },
    { k: 'Refund window', v: '14 days', note: 'Full refund inside fourteen days of payment if no marked work has been submitted.' },
  ] },
  { title: 'Dates', rows: [
    { k: 'Block 5', v: '31 Aug – 18 Oct 2026', note: 'Seven teaching weeks; gatherings every Thursday including the final week.' },
    { k: 'Registration closes', v: '7 Sep 2026', note: 'A learner may add a course in Week 01 only.' },
    { k: 'Late work', v: '7 days at 80%', note: 'Automatic. Quizzes and finals do not extend because their answers are published.' },
    { k: 'Marking turnaround', v: '5 working days', note: 'Measured per submission and shown to instructors on their Today page.' },
  ] },
  { title: 'Access and identity', rows: [
    { k: 'Learner domain', v: 'student.deepfocus.ug', note: 'Anyone signing in from this domain reaches the learner desk.' },
    { k: 'Instructor domain', v: 'staff.deepfocus.ug', note: 'Authoring, publishing and marking. No access to money.' },
    { k: 'Administrator domain', v: 'admin.deepfocus.ug', note: 'Money, clearance, assignment and reversal. No authoring.' },
    { k: 'Clearance', v: 'Never blocks access', note: 'A planning record only. It awards no credit and changes no result.' },
  ] },
];

export const COURSE_NAV = [
  { id: 'home', label: 'Home' },
  { id: 'announcements', label: 'Announcements' },
  { id: 'syllabus', label: 'Syllabus' },
  { id: 'modules', label: 'Modules' },
  { id: 'cgrades', label: 'Grades' },
  { id: 'discussions', label: 'Discussions' },
  { id: 'tutoring', label: 'Tutoring' },
  { id: 'people', label: 'People' },
  { id: 'materials', label: 'Course Materials' },
  { id: 'notebook', label: 'Notebook' },
];

export const CLASSMATES = [
  { name: 'Nancy Atwine', place: 'Mbarara Regional Referral · medical ward', group: 'Group 1', lead: 'Week 02' },
  { name: 'Moses Kato', place: 'Kawempe Health Centre IV · maternity', group: 'Group 1', lead: 'Week 05' },
  { name: 'Sandra Auma', place: 'Lira Regional Referral · paediatrics', group: 'Group 1', lead: '' },
  { name: 'Brian Ochieng', place: 'Jinja Regional Referral · outpatients', group: 'Group 1', lead: '' },
  { name: 'Winnie Nabirye', place: 'Mulago National Referral · surgical', group: 'Group 2', lead: 'Week 03' },
  { name: 'Emmanuel Tumwine', place: 'Kabale Regional Referral · casualty', group: 'Group 2', lead: '' },
  { name: 'Prossy Nakato', place: 'Naguru China–Uganda Friendship · theatre', group: 'Group 2', lead: 'Week 04' },
  { name: 'Denis Wanyama', place: 'Mbale Regional Referral · medical ward', group: 'Group 2', lead: '' },
  { name: 'Agnes Chebet', place: 'Kapchorwa Hospital · maternity', group: 'Group 3', lead: 'Week 01' },
  { name: 'Ibrahim Mukasa', place: 'Entebbe Grade B · dispensary', group: 'Group 3', lead: '' },
  { name: 'Esther Adong', place: 'Gulu Regional Referral · HIV clinic', group: 'Group 3', lead: '' },
  { name: 'Samuel Odongo', place: 'Soroti Regional Referral · medical ward', group: 'Group 3', lead: '' },
];

export const ICE_POSTS = [
  { who: 'Agnes Chebet', when: 'Aug 31 · 20:14', body: 'Hello everyone. I am Agnes, from Kapchorwa, and I work in maternity at the hospital there. I have handed out oxytocin and misoprostol for three years without ever being taught properly why the dose is what it is. That is why I am here. I am also the lead student for Week 01, so bring me your questions before Thursday.', replies: 4 },
  { who: 'Samuel Odongo', when: 'Aug 31 · 21:02', body: 'My name is Samuel Odongo and I am on the medical ward in Soroti. The condition I meet most is anaemia, mostly in children under five, and I want to understand the iron and folate side of it rather than just following the chart. I have a Tecno with 1 GB of data a week, so I will be reading more than watching.', replies: 2 },
  { who: 'Winnie Nabirye', when: 'Sep 1 · 06:41', body: 'Good morning. Winnie, surgical ward at Mulago. Ten years of theatre lists and I still cannot explain to a student why we give one antibiotic before the knife and another after it. This term I want to be able to say it in one sentence. I am in Group 2 and I lead Week 03.', replies: 3 },
  { who: 'Ibrahim Mukasa', when: 'Sep 1 · 12:20', body: 'I am Ibrahim, dispensing at a Grade B facility in Entebbe. Most of my day is explaining medicines to people who cannot read the label, so the part of this course I want most is the plain language: how to say a contraindication to somebody in a hurry with a sick child.', replies: 1 },
  { who: 'Nancy Atwine', when: 'Sep 1 · 19:55', body: 'Nancy Atwine, medical ward in Mbarara. My clearance is still being reviewed by the office so I am reading ahead in case it takes another week. Congestive cardiac failure is what I see most often and what I understand least. Anybody else on a medical ward who wants to compare observation charts, I am here.', replies: 5 },
  { who: 'Prossy Nakato', when: 'Sep 2 · 07:18', body: 'Hello class. Prossy, theatre at Naguru. I am the one who counts the controlled drugs at the end of every list, so Week 04 is the week I have been waiting for. I want to know what the register is legally for, not just how to fill it in without being shouted at.', replies: 2 },
  { who: 'Denis Wanyama', when: 'Sep 2 · 13:44', body: 'Denis from Mbale. Medical ward, mostly hypertension and diabetes. I finished my certificate in 2019 and this is my first course since, so please be patient with me on the writing side. I read English much faster than I write it.', replies: 3 },
  { who: 'Esther Adong', when: 'Sep 2 · 18:30', body: 'I am Esther, HIV clinic in Gulu. Adherence and interactions are my whole day. What I want out of this course is the confidence to tell a prescriber, politely, that two of the medicines on a chart should not be sitting there together.', replies: 4 },
  { who: 'Brian Ochieng', when: 'Sep 3 · 09:12', body: 'Brian Ochieng, outpatients in Jinja. Two hundred patients on a Monday. I want the shortest possible correct answer for the ten things I am asked every day, and I want to know which of them I should stop giving at all. Group 1.', replies: 1 },
  { who: 'Emmanuel Tumwine', when: 'Sep 3 · 22:05', body: 'Emmanuel, casualty in Kabale. Night shifts, so I will be posting at odd hours. My interest is the emergency doses — what I am allowed to give before a clinical officer arrives, and what I must never touch. Looking forward to arguing with all of you.', replies: 2 },
];

export const TEACH_POSTS = {
  1: [
    { who: 'Agnes Chebet', when: 'Sep 2 · 20:40', host: true, body: 'My term is contraindication. A contraindication is a reason not to give a medicine that would otherwise be correct — the medicine is right for the condition and wrong for this person. Example from Monday: a mother with severe pre-eclampsia and asthma. Labetalol is the usual choice and asthma makes it a bad one. The number that matters is her peak flow, not the textbook’s. What I still cannot separate cleanly is a contraindication from a precaution. Chapter 1.2 says a precaution means proceed with monitoring. Where is the line?', replies: 6 },
    { who: 'Samuel Odongo', when: 'Sep 3 · 07:15', body: 'Agnes, your last question is the useful one. The way our tutor drew the line: a precaution means the harm is manageable if you watch for it, a contraindication means it is not. So asthma with labetalol is absolute where the asthma is brittle and a precaution where it is mild and controlled. Uganda Clinical Guidelines 2023 phrases it as "avoid" versus "use with caution" and I think that wording is more honest than the textbook’s. Question back: does your facility record which one you decided, or only what you gave?', replies: 2 },
    { who: 'Esther Adong', when: 'Sep 3 · 19:22', body: 'I want to correct one thing in the original post, gently. You wrote that the medicine is "right for the condition and wrong for this person" — but in the clinic we also meet the opposite: right for the person, wrong in combination. Nevirapine with rifampicin is my daily example; neither is contraindicated alone. Chapter 1.2 does not cover interaction as a contraindication and I think that is a gap in how we are being taught it. Agnes, would you count an interaction as a contraindication or as its own category?', replies: 3 },
    { who: 'Denis Wanyama', when: 'Sep 4 · 06:05', body: 'Reading both of you helped me more than the chapter did. My eight cards are done and I had "indication" and "dosage form" confused for two days — an indication is why you give it, a dosage form is what it physically is. Obvious once written down, invisible before. Agnes: on your peak flow point, we do not record it in Mbale, we record only the drug and the time. That feels like the real answer to Samuel’s question and it is not a good one.', replies: 1 },
  ],
  2: [
    { who: 'Winnie Nabirye', when: 'Sep 9 · 21:10', host: true, body: 'Group 1 has the dosage forms unit, and I took the tablet-versus-injection question. What our theatre actually stocks: paracetamol tablets, paracetamol IV, and nothing in between. So a patient who cannot swallow after abdominal surgery gets the expensive form because the syrup is not on the shelf, not because anyone judged the route. The number: 1 g IV costs us about fourteen times the tablet. Chapter 1.3 explains bioavailability beautifully and says nothing about a stockroom.', replies: 5 },
    { who: 'Prossy Nakato', when: 'Sep 10 · 08:33', body: 'Winnie, the fourteen-times figure is the part of your post I want to press on. Our stores give a smaller ratio because we buy IV paracetamol on the national tender. If the ratio changes by facility then "choose the cheaper route" is not a clinical rule at all, it is a local one, and we should be teaching juniors to check the shelf rather than the chapter. Do you have the tender price, or is fourteen from the private pharmacy?', replies: 2 },
    { who: 'Brian Ochieng', when: 'Sep 10 · 17:48', body: 'From outpatients, the other half of this: syrups are what I give all day and they are the form most often given wrongly. A mother measuring with a kitchen spoon is a dosage-form problem, not a compliance problem. NHS conditions pages and the OpenStax chapter both assume a measuring device exists. Winnie, does theatre ever send a child home with a syrup and no syringe?', replies: 1 },
    { who: 'Emmanuel Tumwine', when: 'Sep 11 · 23:40', body: 'Night casualty view. The form that saves me is rectal diazepam, because a convulsing child cannot swallow and I cannot always get a line. It is in the guideline at 0.5 mg/kg and I had never once read why the rectal route works so fast — the chapter’s section on first-pass metabolism answered it in two paragraphs. Winnie, add it to the group slide if there is room; the ward list is not the whole list.', replies: 3 },
  ],
  3: [
    { who: 'Esther Adong', when: 'Sep 16 · 20:02', host: true, body: 'My sub-topic is rational use, and I will make it concrete. Last month a patient came to the HIV clinic with a prescription for ciprofloxacin for a cough of two days. Uganda Clinical Guidelines 2023 does not support an antibiotic for that presentation at all. I refused to dispense and wrote to the prescriber, and I was told I was being difficult. The essential medicines idea only works if the person holding the tin is allowed to say no. What I want from the class: how do you phrase the refusal so it is heard as clinical, not personal?', replies: 7 },
    { who: 'Ibrahim Mukasa', when: 'Sep 17 · 09:26', body: 'Esther, I dispense too and I have the opposite instinct, so let me argue with you properly. Refusing outright loses the patient, who then buys the same ciprofloxacin at a drug shop with no counselling at all. What I do is dispense nothing and phone the prescriber in front of the patient. The guideline’s section on rational use lists patient education as part of the definition, so the conversation is the intervention. Your way is more correct and mine keeps them in the building. Which one do we teach the student?', replies: 4 },
    { who: 'Nancy Atwine', when: 'Sep 17 · 21:15', body: 'The WHO list search Esther set us was genuinely uncomfortable. Three of the antibiotics we keep on the medical ward in Mbarara are not on the essential list at all, and two things that are on it we have been out of since June. So "rational" in our building means rational within a stock-out. Esther, when the correct medicine is simply absent, does the guideline say anything useful, or is that where it stops?', replies: 2 },
    { who: 'Samuel Odongo', when: 'Sep 18 · 06:50', body: 'Nancy’s question is the one I could not answer either, so I looked. The guideline does have an alternatives column and I had never used it, which is my own failure and not the guideline’s. Esther: on your phrasing question, the sentence that works for me is "the guideline for this presentation is X, may I give that instead" — naming the page, never the person. Nobody argues with a page number at 2 a.m.', replies: 1 },
  ],
  4: [
    { who: 'Prossy Nakato', when: 'Sep 23 · 21:33', host: true, body: 'I have the controlled substances class this week. What the register is actually for: it is not stock control, it is a legal record that a named person removed a named quantity at a named time and that a second named person watched. In theatre we do it on a hard-backed book with numbered pages and no tippex, and the reason for all three of those details is that the book has to survive an audit years later. Chapter 2.3 covers the checks and says almost nothing about the aftermath. My number: three signatures for one pethidine ampoule.', replies: 6 },
    { who: 'Emmanuel Tumwine', when: 'Sep 24 · 02:14', body: 'Prossy, three signatures assumes three people. In casualty at 2 a.m. there are two of us and one is with a patient. The honest answer is that the second signature is sometimes added at the end of the shift, which makes the record neat and false. I am naming it here because Chapter 2.3 says what to do after an error and nothing about what to do after a shortcut. What does theatre do when the second person genuinely is not there?', replies: 5 },
    { who: 'Winnie Nabirye', when: 'Sep 24 · 18:40', body: 'Emmanuel, that is the most useful post in the thread and it deserves a real answer rather than a rule. In theatre we hold the ampoule and the empty until the second person arrives, then sign together, and if that is more than an hour we write the delay in the remarks column. The delay written down is a much smaller problem than a signature that is not true. Prossy, is the remarks column even in the standard national book, or is ours a local addition?', replies: 3 },
    { who: 'Denis Wanyama', when: 'Sep 25 · 07:22', body: 'I asked the assistant to draft a register entry as the AI task required, and it omitted exactly two things: the balance carried forward and the second signature. Both are the things Prossy and Emmanuel have been arguing about, which I found slightly frightening. It produced a very tidy entry that would fail an audit immediately. Prossy: does your book carry a running balance per page, or per drug?', replies: 2 },
  ],
  5: [
    { who: 'Moses Kato', when: 'Sep 30 · 20:11', host: true, body: 'Group 2 has the medication error unit and I am presenting the procedure rather than the story. What we did, in order: stopped the infusion, kept the line, took observations every five minutes, told the clinical officer inside two minutes, told the mother plainly, wrote the incident form before the end of the shift, and kept the used ampoule. What we did not do, and should have: nobody wrote the exact time the infusion started. Kinetics is the reason that time matters — without it the half-life is a guess and so is the monitoring window.', replies: 8 },
    { who: 'Nancy Atwine', when: 'Oct 1 · 06:34', body: 'Moses, the missing start time is the whole point of the week and you have put it better than the chapter. One correction, though: you list telling the mother sixth. Our ward policy puts the conversation before the incident form, because the family have a right to know before the paperwork exists. Chapter 1.3 cannot help us there, but the guideline’s section on disclosure does. Would you defend the order you used, or was it just what happened?', replies: 4 },
    { who: 'Agnes Chebet', when: 'Oct 1 · 19:47', body: 'What I take from this for my final case: the therapeutic window is not a range on a page, it is a set of times written on a chart. My patient is a mother on magnesium sulphate, and I have realised that my monitoring plan is only as good as my recorded start time — same failure as Moses’s. Moses, did keeping the ampoule change anything in the review, or was it just good practice?', replies: 2 },
    { who: 'Esther Adong', when: 'Oct 2 · 08:15', body: 'I asked the assistant to criticise my plan as the task required, and it told me to check renal function before a dose I had already justified from the guideline. It was wrong about the dose and right about the renal check, which is exactly the split the task wants us to notice. Moses: in your review, did anybody ask what the AI would have said? Ours now asks, and I am not sure that is progress.', replies: 3 },
  ],
};

export const COURSE_ANN = [
  { title: 'Week 01 midweek: two things before Thursday', when: 'Sep 2 · 05:19', author: 'Grace Nalubega', body: 'Two of you have not posted an introduction yet, and the gathering is much harder if we arrive as strangers. Post it tonight, however short. Also: the audio version of the lesson is now on Course Materials for those of you on limited data.', replies: 18 },
  { title: 'Welcome to ' + '' + 'the course and to the Thursday gathering', when: 'Aug 31 · 12:45', author: 'Grace Nalubega', body: 'Welcome to Week 01. Start with the Start Here page, not with the quiz. Our gathering is every Thursday at 19:00 and a lead student runs it — Agnes Chebet has Week 01. Bring one written question every week and you will get far more out of the hour.', replies: 14 },
  { title: 'Marking turnaround and how to chase me', when: 'Aug 28 · 16:02', author: 'Grace Nalubega', body: 'Everything with points on it comes back inside five working days with comments. If it is later than that, message me from the Inbox rather than the discussion board, and put the week number in the subject line.', replies: 6 },
];

export const TUTOR_SLOTS = [
  { tutor: 'Rebecca Nsubuga', focus: 'Dosage calculation and drug charts', when: 'Tuesday · 18:00–19:00', mode: 'Voice call · low data', open: true },
  { tutor: 'Rebecca Nsubuga', focus: 'Dosage calculation and drug charts', when: 'Saturday · 10:00–11:00', mode: 'Video · needs Wi-Fi', open: true },
  { tutor: 'Julius Bwambale', focus: 'Writing a case in clinical English', when: 'Wednesday · 20:00–21:00', mode: 'Voice call · low data', open: true },
  { tutor: 'Julius Bwambale', focus: 'Writing a case in clinical English', when: 'Thursday · 17:00–18:00', mode: 'Voice call · low data', open: false },
  { tutor: 'Miriam Kagoya', focus: 'Reading the Uganda Clinical Guidelines', when: 'Sunday · 15:00–16:00', mode: 'Video · needs Wi-Fi', open: true },
];
