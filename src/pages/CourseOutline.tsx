import { Check, FileImage, Layers3 } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { CourseShell } from '../components/CourseShell'
import { getCourseById } from '../data'

export function CourseOutline() {
  const { courseId } = useParams()
  const course = getCourseById(courseId)

  if (!course) return <Navigate to="/courses" replace />

  return (
    <CourseShell sectionTitle="Course outline" course={course}>
      <div className="document-page">
        <header className="document-header">
          <div><span className="eyebrow eyebrow--accent"><Layers3 size={14} /> Official structure</span><h1>{course.title}</h1><p>The supplied examination syllabus, organised into a clear {course.weeks.length}-week learning sequence without adding unsupported topics.</p></div>
          <span className="document-badge"><FileImage size={15} /> Source verified</span>
        </header>
        <div className="outline-layout">
          <section className="outline-document">
            <div className="outline-document__label"><span>{course.code}</span><span>Year 2 • Semester 1</span></div>
            <h2>{course.title}</h2>
            <div className="outline-document__rule" />
            <ol>
              {course.weeks.map((week) => <li key={week.number}><span>{String(week.number).padStart(2, '0')}</span><strong>{week.title}</strong></li>)}
            </ol>
            <footer><Check size={15} /> {course.weeks.length} syllabus units • one unit per week</footer>
          </section>
          <aside className="source-preview">
            <span className="eyebrow">Verified source</span>
            <div className="source-preview__document">
              <small>Uganda Nurses and Midwives<br />Examinations Board</small>
              <strong>Certificate in Nursing</strong>
              <span>Examination syllabus</span>
              <i />
              <b>Year 2 • Semester 1</b>
              <p>{course.code}: {course.title}</p>
            </div>
            <p>The weekly structure preserves every relevant topic from the attached examination syllabus. Closely related lists are kept together as one coherent week.</p>
          </aside>
        </div>
      </div>
    </CourseShell>
  )
}
