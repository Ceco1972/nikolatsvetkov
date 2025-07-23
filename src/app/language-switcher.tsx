"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "EN" },
  { code: "bg", label: "BG" },
  { code: "fr", label: "FR" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "en";
  return (
    <div style={{ position: "absolute", top: 8, right: 16, zIndex: 100 }}>
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}`}
          style={{
            marginRight: 8,
            fontWeight: currentLang === lang.code ? "bold" : "normal",
            textDecoration: currentLang === lang.code ? "underline" : "none",
          }}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
} 