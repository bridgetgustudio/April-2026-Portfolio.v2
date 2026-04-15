import { createBrowserRouter } from 'react-router';
import Root from '@/app/components/Root';
import Home from '@/app/pages/Home';
import About from '@/app/pages/About';
import CaseStudy from '@/app/pages/CaseStudy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'work/:slug', Component: CaseStudy },
    ],
  },
]);
