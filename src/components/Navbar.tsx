"use client";

import { useState } from "react";
import { Menu, X, LogOut, User as UserIcon, Home } from "lucide-react";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import NotificationBell from "@/components/NotificationBell";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Initiatives", href: "/explore" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/explore" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useApp();
  const router = useRouter();
  const pathname = usePathname();

  // Show Home link for guests when they are NOT on the homepage
  const isGuest = !user;
  const showHomeLink = isGuest && pathname !== "/";

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const getDashboardHref = () => {
    if (!user) return "/login";
    return `/dashboard/${user.role}`;
  };

  const visibleLinks = navLinks.filter(link => {
    if (user?.role === "admin" && link.label === "Volunteer") return false;
    return true;
  });

  // Smooth scroll to #how-it-works from any page
  const handleHowItWorks = (e: React.MouseEvent, closeMobile?: () => void) => {
    e.preventDefault();
    if (closeMobile) closeMobile();
    if (pathname === "/") {
      // Already on homepage — just scroll
      document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage then scroll after load
      router.push("/#how-it-works");
    }
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="group flex flex-col items-center leading-none"
        >
          <span className="font-seasons text-[1.55rem] text-[#26332d]">
            Project Astera
          </span>
          <span className="font-seasons text-[0.74rem] text-[#26332d]">Turning Sparks</span>
          <span className="font-seasons text-[0.74rem] text-[#26332d]">Into Constellations</span>
        </Link>
        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {/* Home link for guests navigating away from homepage */}
          {showHomeLink && (
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-sage-dark"
            >
              <Home size={14} />
              Home
            </Link>
          )}
          {visibleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="link-sweep text-sm font-medium text-ink/70 transition-colors hover:text-sage-dark"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <div className="flex items-center gap-4">
              <NotificationBell userId={user.id} />
              <Link
                href={getDashboardHref()}
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-sage"
              >
                <UserIcon size={15} />
                <span>Dashboard ({user.name})</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm font-medium text-rose-600 transition-colors hover:text-rose-800"
                title="Log out"
              >
                <LogOut size={15} />
                <span>Log out</span>
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/volunteer-apply"
                className="rounded-full bg-[#f7afd0] px-7 py-3 text-base text-[#202a27] shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Join Astera
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-card text-sage-dark transition-all duration-200 hover:bg-sage-dark/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`flex transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer — animated slide-down */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="border-t border-sage-dark/10 bg-[#ffbedd] px-6 py-5">
          <div className="flex flex-col gap-4">
            {/* Home link for guests */}
            {showHomeLink && (
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm font-semibold text-sage-dark transition-colors hover:text-sage"
              >
                <Home size={14} />
                Home
              </Link>
            )}
            {visibleLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="link-sweep text-sm font-medium text-ink/80 transition-colors hover:text-sage-dark"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#how-it-works"
              onClick={(e) => handleHowItWorks(e, () => setOpen(false))}
              className="link-sweep text-sm font-medium text-ink/80 transition-colors hover:text-sage-dark cursor-pointer"
            >
              How it works
            </a>
            <div className="mt-2 flex flex-col gap-3 border-t border-sage-dark/10 pt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-2">
                    <NotificationBell userId={user.id} />
                    <span className="text-xs text-ink/40">Notifications</span>
                  </div>
                  <Link
                    href={getDashboardHref()}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-1.5 text-sm font-semibold text-sage-dark"
                  >
                    <UserIcon size={15} />
                    <span>My Dashboard ({user.name})</span>
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center gap-1 text-left text-sm font-medium text-rose-600"
                  >
                    <LogOut size={15} />
                    <span>Log out</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-card bg-[#ffbedd] px-10 py-2.5 text-center text-sm font-medium text-sage-dark shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                  >
                    Join Astera
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
