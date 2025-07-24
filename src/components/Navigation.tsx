"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/services", label: "サービス" },
    { href: "/tours", label: "モンゴルツアー" },
    { href: "/gallery", label: "ギャラリー" },
    { href: "/company", label: "会社案内" },
    { href: "/contacts", label: "お問い合わせ" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-green-800">
              Chuluut 合同会社
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-600",
                  pathname === item.href
                    ? "text-green-800 border-b-2 border-green-800"
                    : "text-gray-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="メニューを開く"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav className="md:hidden absolute left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 animate-fade-in">
            <ul className="flex flex-col py-4 px-6 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 px-2 rounded text-base font-medium transition-colors hover:bg-green-50 hover:text-green-700",
                      pathname === item.href ? "text-green-800 font-bold" : "text-gray-700"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
