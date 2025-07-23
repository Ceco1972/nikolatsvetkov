export async function getDictionary(lang: "en" | "bg" | "fr") {
  // Example placeholder dictionaries
  const dictionaries = {
    en: {
      siteTitle: "LinguaSchool",
      nav: { courses: "Courses", features: "Features", testimonials: "Testimonials", contact: "Contact", enroll: "Enroll" },
      hero: { title: "Learn French Easily", subtitle: "Join our courses and master a new language!", cta: "See Courses" },
      features: { title: "Features", items: [ { title: "Native Teachers", desc: "Learn from the best native speakers." }, { title: "Flexible Schedule", desc: "Study at your own pace." }, { title: "Affordable", desc: "Best prices for quality education." } ] },
      courses: { title: "Our Courses", items: [ { title: "French Basics", desc: "Start your French journey." }, { title: "French for Beginners", desc: "Learn French from scratch." }, { title: "French Essentials", desc: "Master the basics of French." } ] },
      testimonials: { title: "Testimonials", items: [ { quote: "Great teachers!", author: "Maria" }, { quote: "Loved the flexibility.", author: "Ivan" } ] },
      footer: { rights: "All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Service" }
    },
    bg: {
      siteTitle: "LinguaSchool",
      nav: { courses: "Курсове", features: "Функции", testimonials: "Отзиви", contact: "Контакт", enroll: "Запиши се" },
      hero: { title: "Учи френски лесно", subtitle: "Присъедини се към нашите курсове!", cta: "Виж курсовете" },
      features: { title: "Функции", items: [ { title: "Родни учители", desc: "Учи с най-добрите преподаватели." }, { title: "Гъвкав график", desc: "Учи в удобно за теб време." }, { title: "Достъпни цени", desc: "Най-добри цени за качествено обучение." } ] },
      courses: { title: "Нашите курсове", items: [ { title: "Френски основи", desc: "Започнете своето пътешествие във френския език." }, { title: "Френски за начинаещи", desc: "Научете френски от нулата." }, { title: "Френски есенциални знания", desc: "Овладейте основите на френския език." } ] },
      testimonials: { title: "Отзиви", items: [ { quote: "Страхотни учители!", author: "Мария" }, { quote: "Хареса ми гъвкавостта.", author: "Иван" } ] },
      footer: { rights: "Всички права запазени.", privacy: "Политика за поверителност", terms: "Общи условия" }
    },
    fr: {
      siteTitle: "LinguaÉcole",
      nav: { courses: "Cours", features: "Fonctionnalités", testimonials: "Témoignages", contact: "Contact", enroll: "S'inscrire" },
      hero: { title: "Apprenez le français facilement", subtitle: "Rejoignez nos cours et maîtrisez une nouvelle langue!", cta: "Voir les cours" },
      features: { title: "Fonctionnalités", items: [ { title: "Enseignants natifs", desc: "Apprenez avec les meilleurs natifs." }, { title: "Horaires flexibles", desc: "Étudiez à votre rythme." }, { title: "Abordable", desc: "Meilleurs prix pour une éducation de qualité." } ] },
      courses: { title: "Nos cours", items: [ { title: "Bases de français", desc: "Commencez votre parcours en français." }, { title: "Français pour débutants", desc: "Apprenez le français à partir de zéro." }, { title: "Notions essentielles de français", desc: "Maîtrisez les bases du français." } ] },
      testimonials: { title: "Témoignages", items: [ { quote: "Super professeurs!", author: "Marie" }, { quote: "J'ai adoré la flexibilité.", author: "Jean" } ] },
      footer: { rights: "Tous droits réservés.", privacy: "Politique de confidentialité", terms: "Conditions d'utilisation" }
    }
  };
  return dictionaries[lang];
} 