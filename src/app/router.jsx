import { createBrowserRouter } from 'react-router-dom'
import FoundationPage from '../pages/FoundationPage.jsx'
import AdminPage from '../pages/admin/AdminPage.jsx'
import CounsellorPage from '../pages/counsellor/CounsellorPage.jsx'
import StudentPage from '../pages/student/StudentPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

export const router = createBrowserRouter([
  { path: '/', Component: FoundationPage },
  { path: '/admin', Component: AdminPage },
  { path: '/counsellor', Component: CounsellorPage },
  { path: '/student', Component: StudentPage },
  { path: '*', Component: NotFoundPage },
])
