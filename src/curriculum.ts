export type PathwayId = 'nursing' | 'midwifery'

export type CurriculumTerm = {
  id: string
  year: 1 | 2 | 3
  semester: 1 | 2
  label: string
}

export type CurriculumUnit = {
  id: string
  code: string
  title: string
  year: 1 | 2 | 3
  semester: 1 | 2
  revisionMapIds?: string[]
}

export type StudyPathway = {
  id: PathwayId
  title: string
  credential: string
  summary: string
  terms: CurriculumTerm[]
  units: CurriculumUnit[]
  source: {
    title: string
    url: string
    note: string
  }
}

const standardTerms: CurriculumTerm[] = [
  { id: 'y1s1', year: 1, semester: 1, label: 'Year 1 · Semester 1' },
  { id: 'y1s2', year: 1, semester: 2, label: 'Year 1 · Semester 2' },
  { id: 'y2s1', year: 2, semester: 1, label: 'Year 2 · Semester 1' },
  { id: 'y2s2', year: 2, semester: 2, label: 'Year 2 · Semester 2' },
  { id: 'y3s1', year: 3, semester: 1, label: 'Year 3 · Semester 1' },
]

export const studyPathways: StudyPathway[] = [
  {
    id: 'nursing',
    title: 'Nursing',
    credential: 'Certificate in Nursing',
    summary: 'A five-term revision pathway organised around the published CN course-unit sequence.',
    terms: standardTerms,
    units: [
      { id: 'cn111', code: 'CN 111', title: 'Anatomy & Physiology I and First Aid', year: 1, semester: 1 },
      { id: 'cn112', code: 'CN 112', title: 'Foundations of Nursing I and Computer', year: 1, semester: 1 },
      { id: 'cn113', code: 'CN 113', title: 'Personal and Communal Health & Microbiology', year: 1, semester: 1 },
      { id: 'cn121', code: 'CN 121', title: 'Anatomy & Physiology II', year: 1, semester: 2 },
      { id: 'cn122', code: 'CN 122', title: 'Foundations of Nursing II, Sociology and Psychology', year: 1, semester: 2 },
      { id: 'cn211', code: 'CN 211', title: 'Medical Nursing I and Pharmacology I', year: 2, semester: 1, revisionMapIds: ['medical-nursing-1', 'pharmacology-1'] },
      { id: 'cn212', code: 'CN 212', title: 'Surgical Nursing I and Gynaecologic Nursing', year: 2, semester: 1, revisionMapIds: ['surgical-nursing-1', 'gynaecologic-nursing'] },
      { id: 'cn213', code: 'CN 213', title: 'Paediatric Nursing I and Palliative Care', year: 2, semester: 1, revisionMapIds: ['paediatric-nursing-1', 'palliative-care'] },
      { id: 'cn221', code: 'CN 221', title: 'Medical Nursing II and Pharmacology II', year: 2, semester: 2 },
      { id: 'cn222', code: 'CN 222', title: 'Surgical Nursing II and Paediatric Nursing II', year: 2, semester: 2 },
      { id: 'cn223', code: 'CN 223', title: 'Mental Health Nursing and Occupational Health', year: 2, semester: 2 },
      { id: 'cn311', code: 'CN 311', title: 'Tropical Medicine and Surgical Nursing III', year: 3, semester: 1 },
      { id: 'cn312', code: 'CN 312', title: 'Reproductive Health, Guidance and Counselling', year: 3, semester: 1 },
      { id: 'cn313', code: 'CN 313', title: 'Health Services Management and Entrepreneurship', year: 3, semester: 1 },
    ],
    source: {
      title: 'Certificate in Nursing course index',
      url: 'https://nursinguganda.com/courses/certificate-in-nursing/',
      note: 'Cross-checked against the supplied CN outline. Confirm any institutional change directly with your school or assessment body.',
    },
  },
  {
    id: 'midwifery',
    title: 'Midwifery',
    credential: 'Certificate in Midwifery',
    summary: 'A five-term revision pathway organised around publicly available CM course-outline references.',
    terms: standardTerms,
    units: [
      { id: 'cm111', code: 'CM 111', title: 'Anatomy & Physiology I and First Aid', year: 1, semester: 1 },
      { id: 'cm112', code: 'CM 112', title: 'Foundations of Nursing I and Basic Computer', year: 1, semester: 1 },
      { id: 'cm113', code: 'CM 113', title: 'Personal and Communal Health & Microbiology', year: 1, semester: 1 },
      { id: 'cm121', code: 'CM 121', title: 'Anatomy & Physiology II', year: 1, semester: 2 },
      { id: 'cm122', code: 'CM 122', title: 'Foundations of Nursing II, Sociology and Psychology', year: 1, semester: 2 },
      { id: 'cm123', code: 'CM 123', title: 'Primary Health Care', year: 1, semester: 2 },
      { id: 'cm211', code: 'CM 211', title: 'Obstetrical Anatomy', year: 2, semester: 1 },
      { id: 'cm212', code: 'CM 212', title: 'Midwifery I and Pharmacology I', year: 2, semester: 1 },
      { id: 'cm213', code: 'CM 213', title: 'Paediatric Nursing I and Palliative Care Nursing', year: 2, semester: 1 },
      { id: 'cm221', code: 'CM 221', title: 'Midwifery II and Tropical Medicine', year: 2, semester: 2 },
      { id: 'cm222', code: 'CM 222', title: 'Paediatric Nursing II and Pharmacology II', year: 2, semester: 2 },
      { id: 'cm223', code: 'CM 223', title: 'Community Health and Occupational Health & Safety', year: 2, semester: 2 },
      { id: 'cm311', code: 'CM 311', title: 'Gynaecology and Reproductive Health', year: 3, semester: 1 },
      { id: 'cm312', code: 'CM 312', title: 'Mental Health, Guidance and Counselling', year: 3, semester: 1 },
      { id: 'cm313', code: 'CM 313', title: 'Health Services Management and Entrepreneurship', year: 3, semester: 1 },
    ],
    source: {
      title: 'Certificate in Midwifery course outline',
      url: 'https://midwivesrevisionuganda.com/certificate-in-midwifery-course-outline/',
      note: 'A public revision reference. Confirm any institutional change directly with your school or assessment body.',
    },
  },
]

export function getStudyPathway(id: PathwayId): StudyPathway {
  return studyPathways.find((pathway) => pathway.id === id) ?? studyPathways[0]
}

export function getTermUnits(pathway: StudyPathway, termId: string): CurriculumUnit[] {
  const term = pathway.terms.find((item) => item.id === termId)
  if (!term) return []
  return pathway.units.filter((unit) => unit.year === term.year && unit.semester === term.semester)
}
