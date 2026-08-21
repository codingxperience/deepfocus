import type { LucideIcon } from 'lucide-react'
import {
  Beaker,
  BookOpenText,
  Brain,
  ClipboardCheck,
  FileText,
  Layers3,
} from 'lucide-react'

import medicalNursing from '../medical nursing.jpg'
import pharmacology from '../pharmacology.jpeg'
import surgicalNursing from '../surgical nursing.jpeg'
import gynaecologicNursing from '../gynaecologic nursing.jpg'
import paediatricNursing from '../paedetric nursing.jpg'
import palliativeCare from '../palliative care.jpeg'

export type ModuleItem = {
  id: string
  label: string
  helper: string
  type: 'prepare' | 'learn' | 'check'
  icon: LucideIcon
}

export type CourseWeek = {
  number: number
  title: string
  shortTitle: string
  description: string
  outcomes: string[]
  items: ModuleItem[]
}

export type Course = {
  id: string
  code: string
  title: string
  programme: 'Certificate in Nursing'
  year: 1 | 2 | 3
  semester: 1 | 2
  image: string
  accent: string
  active?: boolean
  kicker: string
  heroTitle: string
  summary: string
  introduction: string
  weeks: CourseWeek[]
}

function weeklyItems(courseId: string, week: number, shortTitle: string): ModuleItem[] {
  return [
    {
      id: `${courseId}-w${week}-prepare`,
      label: `Preview ${shortTitle}`,
      helper: 'Topic orientation',
      type: 'prepare',
      icon: BookOpenText,
    },
    {
      id: `${courseId}-w${week}-learn`,
      label: `Study ${shortTitle}`,
      helper: 'Weekly topic',
      type: 'learn',
      icon: FileText,
    },
    {
      id: `${courseId}-w${week}-check`,
      label: 'Check your understanding',
      helper: 'Knowledge check',
      type: 'check',
      icon: ClipboardCheck,
    },
  ]
}

function syllabusWeek(
  courseId: string,
  number: number,
  title: string,
  shortTitle: string,
  topics: string[],
): CourseWeek {
  const topicList = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(topics)
  return {
    number,
    title,
    shortTitle,
    description: `This syllabus week covers ${topicList}.`,
    outcomes: topics,
    items: weeklyItems(courseId, number, shortTitle),
  }
}

export const pharmacologyWeeks: CourseWeek[] = [
  {
    number: 1,
    title: 'Terms used in Pharmacology',
    shortTitle: 'Language of pharmacology',
    description:
      'Build the vocabulary needed to describe medicines, their actions, and the way the body responds to them.',
    outcomes: [
      'Recognise foundational pharmacology terms',
      'Distinguish a medicine, drug, dose, and dosage form',
      'Use core terminology accurately in context',
    ],
    items: [
      { id: 'pharmacology-1-w1-prepare', label: 'Begin with the key terms', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'pharmacology-1-w1-learn', label: 'Language of medicines', helper: 'Concept notes', type: 'learn', icon: FileText },
      { id: 'pharmacology-1-w1-check', label: 'Check your vocabulary', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
    ],
  },
  {
    number: 2,
    title: 'Sources and preparation of Medicines',
    shortTitle: 'Where medicines come from',
    description:
      'Explore the principal sources of medicines and the steps that turn an active substance into a usable preparation.',
    outcomes: [
      'Identify common sources of medicines',
      'Relate preparation methods to dosage forms',
      'Explain why medicine formulation matters',
    ],
    items: [
      { id: 'pharmacology-1-w2-prepare', label: 'Map the sources of medicines', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'pharmacology-1-w2-learn', label: 'From source to preparation', helper: 'Concept notes', type: 'learn', icon: Beaker },
      { id: 'pharmacology-1-w2-check', label: 'Consolidate the process', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
    ],
  },
  {
    number: 3,
    title: 'Essential Drugs and Rational Medicine Use',
    shortTitle: 'Use medicines with purpose',
    description:
      'Understand the ideas behind essential medicines and the disciplined choices required for rational medicine use.',
    outcomes: [
      'Describe the purpose of essential medicines',
      'Recognise the principles of rational use',
      'Connect medicine choices to patient need',
    ],
    items: [
      { id: 'pharmacology-1-w3-prepare', label: 'Frame the essential medicines idea', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'pharmacology-1-w3-learn', label: 'Principles of rational use', helper: 'Concept notes', type: 'learn', icon: Brain },
      { id: 'pharmacology-1-w3-check', label: 'Reason through a medicine choice', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
    ],
  },
  {
    number: 4,
    title: 'Classification of Medicines & Controlled Substances',
    shortTitle: 'Organise medicines safely',
    description:
      'Learn how medicines are grouped and why controlled substances require additional safeguards and accountability.',
    outcomes: [
      'Compare common medicine classifications',
      'Explain the purpose of controlled schedules',
      'Recognise the role of safe accountability',
    ],
    items: [
      { id: 'pharmacology-1-w4-prepare', label: 'See the classification landscape', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'pharmacology-1-w4-learn', label: 'Classes, schedules, and safeguards', helper: 'Concept notes', type: 'learn', icon: Layers3 },
      { id: 'pharmacology-1-w4-check', label: 'Sort and distinguish', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
    ],
  },
  {
    number: 5,
    title: 'Pharmacokinetics & Pharmacodynamics',
    shortTitle: 'Medicine and the body',
    description:
      'Bring the course together by examining what the body does to a medicine and what the medicine does to the body.',
    outcomes: [
      'Outline absorption, distribution, metabolism, and excretion',
      'Describe dose-response relationships',
      'Differentiate pharmacokinetics and pharmacodynamics',
    ],
    items: [
      { id: 'pharmacology-1-w5-prepare', label: 'Meet the two core processes', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'pharmacology-1-w5-learn', label: 'How medicines move and act', helper: 'Concept notes', type: 'learn', icon: Beaker },
      { id: 'pharmacology-1-w5-check', label: 'Connect movement to effect', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
    ],
  },
]

const medicalNursingWeeks: CourseWeek[] = [
  syllabusWeek('medical-nursing-1', 1, 'Introduction to Medical Nursing', 'Foundations of medical nursing', [
    'terms used in Medical Nursing',
    'general causes of disease in the human body',
    'levels of disease prevention',
    'general principles of managing disease',
  ]),
  syllabusWeek('medical-nursing-1', 2, 'Conditions of the Circulatory System', 'Circulatory conditions', [
    'general signs and symptoms of cardiovascular disorders',
    'inflammatory disorders of the heart and blood vessels',
    'congestive cardiac failure',
    'rheumatic heart disease',
    'arteriosclerosis',
    'embolism',
    'hypertension',
  ]),
  syllabusWeek('medical-nursing-1', 3, 'Hematologic Disorders', 'Hematologic disorders', [
    'anaemia',
    'leukemia',
    'coagulation disorders',
  ]),
  syllabusWeek('medical-nursing-1', 4, 'Conditions of the Respiratory System', 'Respiratory conditions', [
    'common cold',
    'sinusitis',
    'tonsillitis',
    'influenza',
    'pharyngitis',
    'laryngitis',
    'otitis media',
    'pneumonia',
    'bronchitis',
    'tuberculosis',
    'asthma',
    'emphysema',
  ]),
]

const surgicalNursingWeeks: CourseWeek[] = [
  syllabusWeek('surgical-nursing-1', 1, 'Introduction to Surgical Nursing', 'Surgical nursing foundations', [
    'introduction to surgical nursing',
    'history of surgery',
    'terms used in surgical nursing',
  ]),
  syllabusWeek('surgical-nursing-1', 2, 'Aseptic Technique & Special Investigations', 'Safe surgical practice', [
    'aseptic technique',
    'special investigations in surgical nursing',
  ]),
  syllabusWeek('surgical-nursing-1', 3, 'Peri-operative Nursing', 'The peri-operative pathway', [
    'pre-operative nursing',
    'peri-operative nursing',
    'post-operative nursing care',
  ]),
  syllabusWeek('surgical-nursing-1', 4, 'Body Defence & Surgical Infection', 'Defence and infection', [
    'natural body defence mechanisms',
    'immunity',
    'inflammation',
    'specific surgical infections',
    'anthrax',
    'tetanus',
    'gangrene',
  ]),
  syllabusWeek('surgical-nursing-1', 5, 'Common Surgical Conditions', 'Common surgical conditions', [
    'common surgical conditions',
  ]),
  syllabusWeek('surgical-nursing-1', 6, 'Shock, Burns & Fluid Management', 'Surgical emergencies', [
    'surgical shock',
    'burns',
    'haemorrhage',
    'blood transfusion',
    'fluids and electrolyte imbalance',
  ]),
  syllabusWeek('surgical-nursing-1', 7, 'Tumours, Fractures & Wounds', 'Injury and tissue care', [
    'tumours',
    'fractures',
    'wounds',
  ]),
]

const gynaecologicNursingWeeks: CourseWeek[] = [
  syllabusWeek('gynaecologic-nursing', 1, 'Menstruation Disorders', 'Menstruation disorders', ['menstruation disorders']),
  syllabusWeek('gynaecologic-nursing', 2, 'Abortion & Ectopic Pregnancy', 'Early pregnancy conditions', ['abortion', 'ectopic pregnancy']),
  syllabusWeek('gynaecologic-nursing', 3, 'Cervical & Pelvic Inflammatory Conditions', 'Cervical and pelvic conditions', [
    'cervical erosion, trauma and polyps',
    'pelvic inflammatory diseases',
  ]),
  syllabusWeek('gynaecologic-nursing', 4, 'Infertility', 'Infertility', ['infertility']),
  syllabusWeek('gynaecologic-nursing', 5, 'Vesico-vaginal & Recto-vaginal Fistula', 'VVF and RVF', [
    'vesico-vaginal fistula (VVF)',
    'recto-vaginal fistula (RVF)',
  ]),
  syllabusWeek('gynaecologic-nursing', 6, 'Cancers of Reproductive Health Organs', 'Reproductive organ cancers', [
    'cancers of the breast',
    'cancers of the cervix',
    'cancers of the uterus',
    'cancers of the ovaries',
  ]),
]

const paediatricNursingWeeks: CourseWeek[] = [
  syllabusWeek('paediatric-nursing-1', 1, 'The Normal Infant & Child', 'The normal infant and child', ['characteristic features of a normal infant and child']),
  syllabusWeek('paediatric-nursing-1', 2, 'Care of the Newborn', 'Newborn care', ['care of the newborn']),
  syllabusWeek('paediatric-nursing-1', 3, 'Child Growth & Development', 'Growth and development', ['child growth and development']),
  syllabusWeek('paediatric-nursing-1', 4, 'Breastfeeding & Child Development', 'Breastfeeding and development', ['breastfeeding and its effects on child growth and development']),
  syllabusWeek('paediatric-nursing-1', 5, 'Child Health & Nutrition', 'Child health and nutrition', ['child health and nutrition']),
  syllabusWeek('paediatric-nursing-1', 6, 'Determining Nutritional Status', 'Nutritional assessment', ['methods of determining the nutritional status of children']),
  syllabusWeek('paediatric-nursing-1', 7, 'Malnutrition in Children', 'Malnutrition in children', ['malnutrition in children']),
]

const palliativeCareWeeks: CourseWeek[] = [
  syllabusWeek('palliative-care', 1, 'Concepts of Hospice & Palliative Care', 'Hospice and palliative care', ['concepts of hospice and palliative care']),
  syllabusWeek('palliative-care', 2, 'Pain Management in Palliative Care', 'Pain management', ['pain management in palliative care']),
  syllabusWeek('palliative-care', 3, 'Management of Common Symptoms', 'Common symptom management', ['management of common symptoms in palliative care']),
  syllabusWeek('palliative-care', 4, 'Psychosocial Support', 'Psychosocial support', ['psychosocial support to terminally ill patients']),
]

export const courses: Course[] = [
  {
    id: 'medical-nursing-1',
    code: 'CN 211',
    title: 'Medical Nursing I',
    programme: 'Certificate in Nursing',
    year: 2,
    semester: 1,
    image: medicalNursing,
    accent: '#6757d9',
    kicker: 'Medical Nursing I',
    heroTitle: 'Read the signs.\nConnect the system.',
    summary: 'A four-week path through medical nursing foundations and conditions of the circulatory, hematologic, and respiratory systems.',
    introduction: 'Begin with the principles of Medical Nursing, then move system by system through the conditions named in the examination syllabus.',
    weeks: medicalNursingWeeks,
  },
  {
    id: 'pharmacology-1',
    code: 'CN 211',
    title: 'Pharmacology I',
    programme: 'Certificate in Nursing',
    year: 2,
    semester: 1,
    image: pharmacology,
    accent: '#9c4dcc',
    active: true,
    kicker: 'Introduction to Pharmacology',
    heroTitle: 'Understand medicines.\nStrengthen every decision.',
    summary: 'A five-week foundation in how medicines are named, prepared, organised, used, and understood in the body.',
    introduction: 'Begin with the language of medicines, then build one careful layer at a time - from where medicines come from to how they move through and act within the body.',
    weeks: pharmacologyWeeks,
  },
  {
    id: 'surgical-nursing-1',
    code: 'CN 212',
    title: 'Surgical Nursing I',
    programme: 'Certificate in Nursing',
    year: 2,
    semester: 1,
    image: surgicalNursing,
    accent: '#267c7b',
    kicker: 'Surgical Nursing I',
    heroTitle: 'Prepare carefully.\nCare decisively.',
    summary: 'A seven-week path from surgical nursing foundations and asepsis to peri-operative care, emergencies, injury, and wound care.',
    introduction: 'Follow the surgical pathway from core language and safe technique to the body’s defences, common conditions, emergencies, and tissue care.',
    weeks: surgicalNursingWeeks,
  },
  {
    id: 'gynaecologic-nursing',
    code: 'CN 212',
    title: 'Gynaecologic Nursing',
    programme: 'Certificate in Nursing',
    year: 2,
    semester: 1,
    image: gynaecologicNursing,
    accent: '#ad526e',
    kicker: 'Gynaecologic Nursing',
    heroTitle: 'Understand the condition.\nProtect dignity.',
    summary: 'A six-week syllabus path through menstrual, early-pregnancy, cervical, pelvic, fertility, fistula, and reproductive cancer topics.',
    introduction: 'Move through the examination syllabus in a clear sequence, keeping each gynaecologic topic distinct and easy to revisit.',
    weeks: gynaecologicNursingWeeks,
  },
  {
    id: 'paediatric-nursing-1',
    code: 'CN 213',
    title: 'Paediatric Nursing I',
    programme: 'Certificate in Nursing',
    year: 2,
    semester: 1,
    image: paediatricNursing,
    accent: '#4980bd',
    kicker: 'Paediatric Nursing I',
    heroTitle: 'See the child.\nSupport every stage.',
    summary: 'A seven-week path through newborn care, child growth and development, breastfeeding, health, nutrition, assessment, and malnutrition.',
    introduction: 'Start with the normal infant and child, then build through care, development, feeding, nutrition, and nutritional assessment.',
    weeks: paediatricNursingWeeks,
  },
  {
    id: 'palliative-care',
    code: 'CN 213',
    title: 'Palliative Care',
    programme: 'Certificate in Nursing',
    year: 2,
    semester: 1,
    image: palliativeCare,
    accent: '#b2764f',
    kicker: 'Palliative Care',
    heroTitle: 'Relieve suffering.\nProtect dignity.',
    summary: 'A four-week path through hospice and palliative concepts, pain management, symptom management, and psychosocial support.',
    introduction: 'Build a coherent foundation in the four palliative care areas listed in the examination syllabus.',
    weeks: palliativeCareWeeks,
  },
]

export const courseWeeks = pharmacologyWeeks

export function getCourseById(id?: string): Course | undefined {
  return courses.find((course) => course.id === id)
}
