import { Check, FileImage, Layers3 } from 'lucide-react'
import courseOutline from '../../pharmacology course outline.png'
import { CourseShell } from '../components/CourseShell'
import { courseWeeks } from '../data'

export function CourseOutline() {
  return (
    <CourseShell sectionTitle="Course outline">
      <div className="document-page">
        <header className="document-header">
          <div><span className="eyebrow eyebrow--accent"><Layers3 size={14} /> Official structure</span><h1>Introduction to Pharmacology</h1><p>The supplied outline, translated into a clear five-week learning sequence without adding unsupported topics.</p></div>
          <span className="document-badge"><FileImage size={15} /> Source attached</span>
        </header>
        <div className="outline-layout">
          <section className="outline-document">
            <div className="outline-document__label"><span>PHA 301</span><span>Course outline</span></div>
            <h2>Introduction to<br />Pharmacology</h2>
            <div className="outline-document__rule" />
            <ol>
              {courseWeeks.map((week) => <li key={week.number}><span>{String(week.number).padStart(2, '0')}</span><strong>{week.title}</strong></li>)}
            </ol>
            <footer><Check size={15} /> Five supplied topics • one topic per week</footer>
          </section>
          <aside className="source-preview">
            <span className="eyebrow">Original attachment</span>
            <img src={courseOutline} alt="Original Introduction to Pharmacology course outline" />
            <p>Kept visible here so the implemented structure can always be checked against its source.</p>
          </aside>
        </div>
      </div>
    </CourseShell>
  )
}
