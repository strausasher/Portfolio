import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { GalleryPage } from './components/GalleryPage';
import { ResumePage } from './components/ResumePage';
import { PortfolioPdfPage } from './components/PortfolioPdfPage';

export const router = createBrowserRouter([
  // Print-only layout rendered to public/Asher_Straus_Portfolio.pdf
  { path: '/portfolio-pdf', Component: PortfolioPdfPage },
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'gallery', Component: GalleryPage },
      { path: 'resume', Component: ResumePage },
    ],
  },
], {
  // Works both locally ('/') and on GitHub Pages ('/<repo-name>/')
  basename: import.meta.env.BASE_URL,
});
