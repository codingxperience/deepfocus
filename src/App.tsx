import { Navigate, Route, Routes } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { CourseOverview } from './pages/CourseOverview'
import { CourseModules } from './pages/CourseModules'
import { CourseOutline } from './pages/CourseOutline'
import { CourseResources } from './pages/CourseResources'
import {
  CoursesPage,
  HelpPage,
  HistoryPage,
  InboxPage,
  PlanPage,
  ProfilePage,
  SettingsPage,
} from './pages/SecondaryPages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:courseId" element={<CourseOverview />} />
      <Route path="/courses/:courseId/modules" element={<CourseModules />} />
      <Route path="/courses/:courseId/outline" element={<CourseOutline />} />
      <Route path="/courses/:courseId/resources" element={<CourseResources />} />
      <Route path="/calendar" element={<PlanPage />} />
      <Route path="/inbox" element={<InboxPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
