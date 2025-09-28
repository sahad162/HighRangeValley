import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "home" },
    { name: "About us", href: "about" },
    { name: "Products", href: "products" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 font-satoshi">
      <div className="px-8 lg:px-20">
        <div className="flex justify-between items-center h-17">
          <div className="flex-shrink-0">
            <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" /></Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                offset={-80} 
                duration={500}
                className="cursor-pointer text-sm font-medium text-gray-700 hover:text-black"
                activeClass="text-black border-b-2 border-black pb-1"
                spy={true}
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-white p-6">
          <div className="flex items-center justify-between">
            <img src="/logo.svg" alt="Logo" className="h-8" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-black"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-8 space-y-4">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg cursor-pointer text-gray-700"
                activeClass="text-black font-semibold"
                spy={true}
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>
        </div>
      </Dialog>
    </header>
  );
}
