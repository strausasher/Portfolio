import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import logo from 'figma:asset/logo-skinny-65.webp';

interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
  isRoute?: boolean;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Photo Gallery', href: '/gallery', isRoute: true },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/resume', isRoute: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isOnSubpage = location.pathname !== '/';

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.isExternal) return; // let default behavior handle it
    if (item.isRoute) {
      e.preventDefault();
      navigate(item.href);
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);

    if (isOnSubpage) {
      // Navigate home first, then scroll to hash
      navigate('/' + item.href);
    } else {
      // Already on home, just scroll
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOnSubpage ? 'bg-[#F7F3ED]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (isOnSubpage) {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center"
          aria-label="Asher Straus — back to top"
        >
          {/* Logo is recolored via CSS mask (its alpha shape filled with a solid
              color) so it's the project-title blue on the light navbar and
              white over the dark hero. */}
          <span
            role="img"
            aria-hidden="true"
            style={{
              aspectRatio: '351 / 300',
              WebkitMaskImage: `url(${logo})`,
              maskImage: `url(${logo})`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
            className={`inline-block transition-all duration-300 ${
              scrolled || isOnSubpage ? 'h-9 bg-[#1B2D5B]' : 'h-11 bg-white'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(item, e)}
              className={`text-sm font-bold tracking-widest uppercase hover:text-[#3B5998] transition-colors ${
                item.isRoute && location.pathname === item.href
                  ? 'text-[#3B5998]'
                  : (scrolled || isOnSubpage ? 'text-[#1B2D5B]/70' : 'text-white/90')
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled || isOnSubpage ? 'text-[#1B2D5B]' : 'text-white'} />
          ) : (
            <Menu className={scrolled || isOnSubpage ? 'text-[#1B2D5B]' : 'text-white'} />
          )}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#F7F3ED] shadow-lg md:hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`font-bold tracking-widest uppercase hover:text-[#3B5998] ${
                      item.isRoute && location.pathname === item.href
                        ? 'text-[#3B5998]'
                        : 'text-[#1B2D5B]/70'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
