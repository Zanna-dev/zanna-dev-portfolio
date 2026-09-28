import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Home } from '../pages/Home/Home';
import { ProjectExplore } from '../pages/ProjectExplore/ProjectExplore';
import { ScrollManager } from './ScrollManager';

export function AppRoutes() {
  return <BrowserRouter><ScrollManager /><DashboardLayout><Routes><Route path="/" element={<Home />} /><Route path="/projects/:projectId" element={<ProjectExplore />} /><Route path="*" element={<ProjectExplore />} /></Routes></DashboardLayout></BrowserRouter>;
}
