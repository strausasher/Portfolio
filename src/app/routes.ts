import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { GalleryPage } from './components/GalleryPage';
import { ResumePage } from './components/ResumePage';

export const router = createBrowserRouter([
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
