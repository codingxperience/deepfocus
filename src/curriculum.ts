export type PathwayId = 'nursing' | 'midwifery'

export type CurriculumTerm = {
  id: string
  year: 1 | 2 | 3
  semester: 1 | 2
  label: string
  period: string
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
  { id: 'y1s1', year: 1, semester: 1, label: 'Year 1 · Semester 1', period: 'February–June' },
  { id: 'y1s2', year: 1, semester: 2, label: 'Year 1 · Semester 2', period: 'July–December' },
  { id: 'y2s1', year: 2, semester: 1, label: 'Year 2 · Semester 1', period: 'February–June' },
  { id: 'y2s2', year: 2, semester: 2, label: 'Year 2 · Semester 2', period: 'July–December' },
  { id: 'y3s1', year: 3, semester: 1, label: 'Year 3 · Semester 1', period: 'February–June' },
]

export const studyPathways: StudyPathway[] = [
  {
    id: 'nursing',
    title: 'Nursing',
    credential: 'Certificate in Nursing',
    summary: 'A five-semester revision pathway organised around the published CN course sequence.',
    terms: standardTerms,
    units: [
      { id: 'cn111-anatomy-physiology-1', code: 'CN 111', title: 'Anatomy & Physiology I', year: 1, semester: 1 },
      { id: 'cn111-first-aid', code: 'CN 111', title: 'First Aid', year: 1, semester: 1 },
      { id: 'cn112-foundations-nursing-1', code: 'CN 112', title: 'Foundations of Nursing I', year: 1, semester: 1 },
      { id: 'cn112-computer', code: 'CN 112', title: 'Computer', year: 1, semester: 1 },
      { id: 'cn113-personal-communal-health', code: 'CN 113', title: 'Personal and Communal Health', year: 1, semester: 1 },
      { id: 'cn113-microbiology', code: 'CN 113', title: 'Microbiology', year: 1, semester: 1 },
      { id: 'cn121', code: 'CN 121', title: 'Anatomy & Physiology II', year: 1, semester: 2 },
      { id: 'cn122-foundations-nursing-2', code: 'CN 122', title: 'Foundations of Nursing II', year: 1, semester: 2 },
      { id: 'cn122-sociology', code: 'CN 122', title: 'Sociology', year: 1, semester: 2 },
      { id: 'cn122-psychology', code: 'CN 122', title: 'Psychology', year: 1, semester: 2 },
      { id: 'cn211-medical-nursing-1', code: 'CN 211', title: 'Medical Nursing I', year: 2, semester: 1, revisionMapIds: ['medical-nursing-1'] },
      { id: 'cn211-pharmacology-1', code: 'CN 211', title: 'Pharmacology I', year: 2, semester: 1, revisionMapIds: ['pharmacology-1'] },
      { id: 'cn212-surgical-nursing-1', code: 'CN 212', title: 'Surgical Nursing I', year: 2, semester: 1, revisionMapIds: ['surgical-nursing-1'] },
      { id: 'cn212-gynaecologic-nursing', code: 'CN 212', title: 'Gynaecologic Nursing', year: 2, semester: 1, revisionMapIds: ['gynaecologic-nursing'] },
      { id: 'cn213-paediatric-nursing-1', code: 'CN 213', title: 'Paediatric Nursing I', year: 2, semester: 1, revisionMapIds: ['paediatric-nursing-1'] },
      { id: 'cn213-palliative-care', code: 'CN 213', title: 'Palliative Care', year: 2, semester: 1, revisionMapIds: ['palliative-care'] },
      { id: 'cn221-medical-nursing-2', code: 'CN 221', title: 'Medical Nursing II', year: 2, semester: 2 },
      { id: 'cn221-pharmacology-2', code: 'CN 221', title: 'Pharmacology II', year: 2, semester: 2 },
      { id: 'cn222-surgical-nursing-2', code: 'CN 222', title: 'Surgical Nursing II', year: 2, semester: 2 },
      { id: 'cn222-paediatric-nursing-2', code: 'CN 222', title: 'Paediatric Nursing II', year: 2, semester: 2 },
      { id: 'cn223-mental-health-nursing', code: 'CN 223', title: 'Mental Health Nursing', year: 2, semester: 2 },
      { id: 'cn223-occupational-health', code: 'CN 223', title: 'Occupational Health', year: 2, semester: 2 },
      { id: 'cn311-tropical-medicine', code: 'CN 311', title: 'Tropical Medicine', year: 3, semester: 1 },
      { id: 'cn311-surgical-nursing-3', code: 'CN 311', title: 'Surgical Nursing III', year: 3, semester: 1 },
      { id: 'cn312-reproductive-health', code: 'CN 312', title: 'Reproductive Health', year: 3, semester: 1 },
      { id: 'cn312-guidance-counselling', code: 'CN 312', title: 'Guidance and Counselling', year: 3, semester: 1 },
      { id: 'cn313-health-services-management', code: 'CN 313', title: 'Health Services Management', year: 3, semester: 1 },
      { id: 'cn313-entrepreneurship', code: 'CN 313', title: 'Entrepreneurship', year: 3, semester: 1 },
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
    summary: 'A five-semester revision pathway organised around publicly available CM course-outline references.',
    terms: standardTerms,
    units: [
      { id: 'cm111-anatomy-physiology-1', code: 'CM 111', title: 'Anatomy & Physiology I', year: 1, semester: 1 },
      { id: 'cm111-first-aid', code: 'CM 111', title: 'First Aid', year: 1, semester: 1 },
      { id: 'cm112-foundations-nursing-1', code: 'CM 112', title: 'Foundations of Nursing I', year: 1, semester: 1 },
      { id: 'cm112-basic-computer', code: 'CM 112', title: 'Basic Computer', year: 1, semester: 1 },
      { id: 'cm113-personal-communal-health', code: 'CM 113', title: 'Personal and Communal Health', year: 1, semester: 1 },
      { id: 'cm113-microbiology', code: 'CM 113', title: 'Microbiology', year: 1, semester: 1 },
      { id: 'cm121', code: 'CM 121', title: 'Anatomy & Physiology II', year: 1, semester: 2 },
      { id: 'cm122-foundations-nursing-2', code: 'CM 122', title: 'Foundations of Nursing II', year: 1, semester: 2 },
      { id: 'cm122-sociology', code: 'CM 122', title: 'Sociology', year: 1, semester: 2 },
      { id: 'cm122-psychology', code: 'CM 122', title: 'Psychology', year: 1, semester: 2 },
      { id: 'cm123', code: 'CM 123', title: 'Primary Health Care', year: 1, semester: 2 },
      { id: 'cm211', code: 'CM 211', title: 'Obstetrical Anatomy', year: 2, semester: 1 },
      { id: 'cm212-midwifery-1', code: 'CM 212', title: 'Midwifery I', year: 2, semester: 1 },
      { id: 'cm212-pharmacology-1', code: 'CM 212', title: 'Pharmacology I', year: 2, semester: 1 },
      { id: 'cm213-paediatric-nursing-1', code: 'CM 213', title: 'Paediatric Nursing I', year: 2, semester: 1 },
      { id: 'cm213-palliative-care-nursing', code: 'CM 213', title: 'Palliative Care Nursing', year: 2, semester: 1 },
      { id: 'cm221-midwifery-2', code: 'CM 221', title: 'Midwifery II', year: 2, semester: 2 },
      { id: 'cm221-tropical-medicine', code: 'CM 221', title: 'Tropical Medicine', year: 2, semester: 2 },
      { id: 'cm222-paediatric-nursing-2', code: 'CM 222', title: 'Paediatric Nursing II', year: 2, semester: 2 },
      { id: 'cm222-pharmacology-2', code: 'CM 222', title: 'Pharmacology II', year: 2, semester: 2 },
      { id: 'cm223-community-health', code: 'CM 223', title: 'Community Health', year: 2, semester: 2 },
      { id: 'cm223-occupational-health-safety', code: 'CM 223', title: 'Occupational Health & Safety', year: 2, semester: 2 },
      { id: 'cm311-gynaecology', code: 'CM 311', title: 'Gynaecology', year: 3, semester: 1 },
      { id: 'cm311-reproductive-health', code: 'CM 311', title: 'Reproductive Health', year: 3, semester: 1 },
      { id: 'cm312-mental-health', code: 'CM 312', title: 'Mental Health', year: 3, semester: 1 },
      { id: 'cm312-guidance-counselling', code: 'CM 312', title: 'Guidance and Counselling', year: 3, semester: 1 },
      { id: 'cm313-health-services-management', code: 'CM 313', title: 'Health Services Management', year: 3, semester: 1 },
      { id: 'cm313-entrepreneurship', code: 'CM 313', title: 'Entrepreneurship', year: 3, semester: 1 },
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
