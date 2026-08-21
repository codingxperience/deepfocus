import { Navigate, Route, Routes } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { CourseOverview } from './pages/CourseOverview'
import { CourseModules } from './pages/CourseModules'
import { CourseOutline } from './pages/CourseOutline'
import { CourseResources } from './pages/CourseResources'
import {
  AccountProfilePage,
  AccountPreferencesPage,
  MobileCompanionPage,
  StudyNoticesPage,
  StudyVaultPage,
  WorkspaceUpdatesPage,
} from './pages/AccountPages'
import {
  CoursesPage,
  HelpPage,
  HistoryPage,
  InboxPage,
  PlanPage,
  SettingsPage,
} from './pages/SecondaryPages'
import { PlannerPage } from './pages/PlannerPage'
import { hasCompletedPlannerSetup, loadPlannerState } from './planner'

function HomeRedirect() {
  return <Navigate to={hasCompletedPlannerSetup(loadPlannerState()) ? '/dashboard' : '/planner'} replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:courseId" element={<CourseOverview />} />
      <Route path="/courses/:courseId/modules" element={<CourseModules />} />
      <Route path="/courses/:courseId/outline" element={<CourseOutline />} />
      <Route path="/courses/:courseId/resources" element={<CourseResources />} />
      <Route path="/planner" element={<PlannerPage />} />
      <Route path="/calendar" element={<PlanPage />} />
      <Route path="/inbox" element={<InboxPage />} />
      <Route path="/profile" element={<AccountProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/account/notices" element={<StudyNoticesPage />} />
      <Route path="/account/vault" element={<StudyVaultPage />} />
      <Route path="/account/preferences" element={<AccountPreferencesPage />} />
      <Route path="/account/mobile" element={<MobileCompanionPage />} />
      <Route path="/account/updates" element={<WorkspaceUpdatesPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<HomeRedirect />} />
    </Routes>
  )
}
