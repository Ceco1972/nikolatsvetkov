import { getDictionary } from "../dictionaries";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "bg" | "fr");
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoArea}>
          <Image src="/template-reference.png" alt="Logo" width={48} height={48} className={styles.logoImg} />
          <span className={styles.siteTitle}>{dict.siteTitle}</span>
        </div>
        <nav className={styles.nav}>
          <a href="#courses">{dict.nav.courses}</a>
          <a href="#features">{dict.nav.features}</a>
          <a href="#testimonials">{dict.nav.testimonials}</a>
          <Link href={`/${lang}/contact`}>{dict.nav.contact}</Link>
        </nav>
        <a href="#enroll" className={styles.enrollBtn}>{dict.nav.enroll}</a>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{dict.hero.title}</h1>
          <p>{dict.hero.subtitle}</p>
          <a href="#courses" className={styles.ctaBtn}>{dict.hero.cta}</a>
        </div>
        {/* Removed hero image and any element under the button */}
      </section>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <h2>{dict.features.title}</h2>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <h3>{dict.features.items[0].title}</h3>
            <p>{dict.features.items[0].desc}</p>
          </div>
          <div className={styles.featureItem}>
            <h3>{dict.features.items[1].title}</h3>
            <p>{dict.features.items[1].desc}</p>
          </div>
          <div className={styles.featureItem}>
            <h3>{dict.features.items[2].title}</h3>
            <p>{dict.features.items[2].desc}</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.courses} id="courses">
        <h2>{dict.courses.title}</h2>
        <div className={styles.courseList}>
          <div className={styles.courseCard}>
            <h4>{dict.courses.items[0].title}</h4>
            <p>{dict.courses.items[0].desc}</p>
          </div>
          <div className={styles.courseCard}>
            <h4>{dict.courses.items[1].title}</h4>
            <p>{dict.courses.items[1].desc}</p>
          </div>
          <div className={styles.courseCard}>
            <h4>{dict.courses.items[2].title}</h4>
            <p>{dict.courses.items[2].desc}</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials} id="testimonials">
        <h2>{dict.testimonials.title}</h2>
        <div className={styles.testimonialList}>
          <div className={styles.testimonialCard}>
            <p>{dict.testimonials.items[0].quote}</p>
            <span>{dict.testimonials.items[0].author}</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>{dict.testimonials.items[1].quote}</p>
            <span>{dict.testimonials.items[1].author}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: 16, color: '#888', fontSize: '0.95rem' }}>
        © 2025 LinguaSchool. All rights reserved.
      </div>
    </div>
  );
} 