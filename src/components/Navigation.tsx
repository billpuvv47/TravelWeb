"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/services", label: "サービス" },
    { href: "/tours", label: "モンゴルツアー" },
    { href: "/gallery", label: "ギャラリー" },
    { href: "/blog", label: "ブログ" },
    { href: "/company", label: "会社案内" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-green-800">
              Adya Travel
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
            <button className="text-gray-700 hover:text-green-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
