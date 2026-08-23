import type { PathwayId } from './curriculum'
import type { SemesterProduct } from './staffPreview'

export const semesterProducts: SemesterProduct[] = [
  { id: 'nursing-y1s1-2026', title: 'Certificate in Nursing · Year 1 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'nursing-y1s2-2026', title: 'Certificate in Nursing · Year 1 · Semester 2', courseCount: 6, amount: 58000 },
  { id: 'nursing-y2s1-2026', title: 'Certificate in Nursing · Year 2 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'nursing-y2s2-2026', title: 'Certificate in Nursing · Year 2 · Semester 2', courseCount: 6, amount: 58000 },
  { id: 'nursing-y3s1-2026', title: 'Certificate in Nursing · Year 3 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y1s1-2026', title: 'Certificate in Midwifery · Year 1 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y1s2-2026', title: 'Certificate in Midwifery · Year 1 · Semester 2', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y2s1-2026', title: 'Certificate in Midwifery · Year 2 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y2s2-2026', title: 'Certificate in Midwifery · Year 2 · Semester 2', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y3s1-2026', title: 'Certificate in Midwifery · Year 3 · Semester 1', courseCount: 6, amount: 58000 },
]

export function getSemesterProduct(pathwayId: PathwayId, year: number, semester: number): SemesterProduct | undefined {
  return semesterProducts.find((product) => product.id === `${pathwayId}-y${year}s${semester}-2026`)
}

export function getProductTiming(product: SemesterProduct): string {
  return product.id.includes('s1') ? 'February–June 2026' : 'July–December 2026'
}
