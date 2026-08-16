"use client";

import { useState } from "react";
import { Menu, X, LogOut, User as UserIcon } from "lucide-react";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import NotificationBell from "@/components/NotificationBell";

const navLinks = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Events",      href: "/events" },
  { label: "Resources",   href: "/explore" },
  { label: "Contact",     href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useApp();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => { logout(); router.push("/"); };
  const getDashboardHref = () => !user ? "/login" : `/dashboard/${user.role}`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight shrink-0">
          <span style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: "1rem", color: "#2e3a32" }}>
            Project_Astera
          </span>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", color: "rgba(46,58,50,0.5)", lineHeight: "1.3" }}>
            Turning Sparks<br />Into Constellations
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                color: pathname === link.href ? "#2e3a32" : "rgba(46,58,50,0.6)",
                textDecoration: pathname === link.href ? "underline" : "none",
                textUnderlineOffset: "4px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="hidden items-center gap-3 md:flex shrink-0">
          {user ? (
            <div className="flex items-center gap-3">
              <NotificationBell userId={user.id} />
              <Link href={getDashboardHref()} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#2e3a32" }}>
                <UserIcon size={13} className="inline mr-1" />{user.name}
              </Link>
              <button onClick={handleLogout} className="text-rose-400 hover:text-rose-600">
                <LogOut size={13} />
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(46,58,50,0.55)" }}>
                Log in
              </Link>
              <Link
                href="/volunteer-apply"
                className="rounded-full px-6 py-2 hover:opacity-85 transition-opacity"
                style={{ backgroundColor: "#ffbedd", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#2e3a32" }}
              >
                Join Astera
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" style={{ color: "#2e3a32" }} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(46,58,50,0.7)" }}>
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            {user ? (
              <>
                <Link href={getDashboardHref()} onClick={() => setOpen(false)} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#2e3a32" }}>
                  Dashboard ({user.name})
                </Link>
                <button onClick={() => { setOpen(false); handleLogout(); }} className="text-left text-sm text-rose-400">Log out</button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(46,58,50,0.55)" }}>Log in</Link>
                <Link href="/volunteer-apply" onClick={() => setOpen(false)}
                  className="rounded-full py-2.5 text-center hover:opacity-85 transition-opacity"
                  style={{ backgroundColor: "#ffbedd", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#2e3a32" }}>
                  Join Astera
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
