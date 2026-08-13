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

export type Course = {
  id: string
  code: string
  title: string
  image: string
  accent: string
  active?: boolean
}

export const courses: Course[] = [
  {
    id: 'medical-nursing-1',
    code: 'NUR 301',
    title: 'Medical Nursing I',
    image: medicalNursing,
    accent: '#6757d9',
  },
  {
    id: 'pharmacology-1',
    code: 'PHA 301',
    title: 'Pharmacology I',
    image: pharmacology,
    accent: '#9c4dcc',
    active: true,
  },
  {
    id: 'surgical-nursing-1',
    code: 'NUR 303',
    title: 'Surgical Nursing I',
    image: surgicalNursing,
    accent: '#267c7b',
  },
  {
    id: 'gynaecologic-nursing',
    code: 'NUR 305',
    title: 'Gynaecologic Nursing',
    image: gynaecologicNursing,
    accent: '#ad526e',
  },
  {
    id: 'paediatric-nursing-1',
    code: 'NUR 307',
    title: 'Paediatric Nursing I',
    image: paediatricNursing,
    accent: '#4980bd',
  },
  {
    id: 'palliative-care',
    code: 'NUR 309',
    title: 'Palliative Care',
    image: palliativeCare,
    accent: '#b2764f',
  },
]

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

export const courseWeeks: CourseWeek[] = [
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
      { id: 'w1-prepare', label: 'Begin with the key terms', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'w1-learn', label: 'Language of medicines', helper: 'Concept notes', type: 'learn', icon: FileText },
      { id: 'w1-check', label: 'Check your vocabulary', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
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
      { id: 'w2-prepare', label: 'Map the sources of medicines', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'w2-learn', label: 'From source to preparation', helper: 'Concept notes', type: 'learn', icon: Beaker },
      { id: 'w2-check', label: 'Consolidate the process', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
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
      { id: 'w3-prepare', label: 'Frame the essential medicines idea', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'w3-learn', label: 'Principles of rational use', helper: 'Concept notes', type: 'learn', icon: Brain },
      { id: 'w3-check', label: 'Reason through a medicine choice', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
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
      { id: 'w4-prepare', label: 'See the classification landscape', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'w4-learn', label: 'Classes, schedules, and safeguards', helper: 'Concept notes', type: 'learn', icon: Layers3 },
      { id: 'w4-check', label: 'Sort and distinguish', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
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
      'Describe dose–response relationships',
      'Differentiate pharmacokinetics and pharmacodynamics',
    ],
    items: [
      { id: 'w5-prepare', label: 'Meet the two core processes', helper: 'Topic orientation', type: 'prepare', icon: BookOpenText },
      { id: 'w5-learn', label: 'How medicines move and act', helper: 'Concept notes', type: 'learn', icon: Beaker },
      { id: 'w5-check', label: 'Connect movement to effect', helper: 'Knowledge check', type: 'check', icon: ClipboardCheck },
    ],
  },
]
