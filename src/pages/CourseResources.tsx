import { BookOpenText, Brain, Clock3, Layers3 } from 'lucide-react'
import { CourseShell } from '../components/CourseShell'

export function CourseResources() {
  return (
    <CourseShell sectionTitle="Study resources">
      <div className="document-page resources-page">
        <header className="document-header"><div><span className="eyebrow eyebrow--accent"><Brain size={14} /> Study deliberately</span><h1>A simple rhythm for deep focus.</h1><p>These are learning-method guides for using the course structure—not invented pharmacology lesson content.</p></div></header>
        <div className="resource-guide-grid">
          <article><span><BookOpenText size={20} /></span><small>01 • Prepare</small><h2>Start with the map.</h2><p>Read the topic title, notice the week’s outcomes, and name what you already know before opening the concept notes.</p></article>
          <article><span><Layers3 size={20} /></span><small>02 • Learn</small><h2>Build one layer.</h2><p>Work through a single concept at a time. Pause to explain it in your own words before moving to the next idea.</p></article>
          <article><span><Brain size={20} /></span><small>03 • Check</small><h2>Retrieve, then review.</h2><p>Close the notes and recall the central ideas. Use the knowledge check to find the gaps worth revisiting.</p></article>
        </div>
        <div className="focus-session-card"><div><Clock3 size={24} /><span><strong>A focused session</strong><small>A lightweight rhythm, not a rigid rule</small></span></div><div className="session-timeline"><span><b>2 min</b> Orient</span><i /><span><b>20 min</b> Learn</span><i /><span><b>5 min</b> Recall</span></div></div>
      </div>
    </CourseShell>
  )
}
