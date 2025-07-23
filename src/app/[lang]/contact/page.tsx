import Link from "next/link";
import { getDictionary } from "../dictionaries";
import styles from "../../page.module.css";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "bg" | "fr");
  return (
    <div className={styles.page}>
      <main style={{ width: '100%', maxWidth: 480, margin: '0 auto', textAlign: 'center', padding: '64px 0' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 32, letterSpacing: 1 }}>Contact Us</h1>
        <div style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '40px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 28,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: '1.15rem' }}>
            <span style={{ fontSize: '1.7rem', color: '#0070f3' }}>📧</span>
            <span>
              <strong style={{ color: '#222' }}>Email:</strong> <a href="mailto:tsvetan_k_ivanov@yahoo.com" style={{ color: '#0070f3', fontWeight: 600, textDecoration: 'none' }}>tsvetan_k_ivanov@yahoo.com</a>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: '1.15rem' }}>
            <span style={{ fontSize: '1.7rem', color: '#0070f3' }}>📞</span>
            <span>
              <strong style={{ color: '#222' }}>Telephone:</strong> <a href="tel:+359888276297" style={{ color: '#0070f3', fontWeight: 600, textDecoration: 'none' }}>(+359) 888 276 297</a>
            </span>
          </div>
        </div>
        <Link href={`/${lang}`} style={{
          display: 'inline-block',
          marginTop: 40,
          padding: '12px 32px',
          background: '#0070f3',
          color: '#fff',
          borderRadius: 24,
          fontWeight: 600,
          fontSize: '1.1rem',
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}>← Return to Home</Link>
      </main>
    </div>
  );
} 