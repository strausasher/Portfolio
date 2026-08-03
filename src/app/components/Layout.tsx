import { Outlet } from 'react-router';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#F7F3ED] font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <Outlet />
    </div>
  );
}
