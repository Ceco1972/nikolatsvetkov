const dictionaries = {
  en: {
    siteTitle: "LinguaSchool",
    nav: {
      courses: "Courses",
      features: "Features",
      testimonials: "Testimonials",
      contact: "Contact",
      enroll: "Enroll Now",
    },
    hero: {
      title: "Master a New Language with LinguaSchool",
      subtitle: "Interactive online courses for all ages. Start your journey today!",
      cta: "View Courses",
    },
    features: {
      title: "Why Choose Us?",
      items: [
        { title: "Expert Teachers", desc: "Learn from certified language professionals." },
        { title: "Flexible Schedule", desc: "Study at your own pace, anytime, anywhere." },
        { title: "Community Support", desc: "Join a vibrant community of learners." },
      ],
    },
    courses: {
      title: "Our Popular Courses",
      items: [
        { title: "French for Beginners", desc: "Start speaking French from day one." },
        { title: "French Intermediate", desc: "Boost your French skills with interactive lessons." },
        { title: "French Advanced", desc: "Master French with advanced grammar and conversation." },
      ],
    },
    testimonials: {
      title: "What Our Students Say",
      items: [
        { quote: '"The best online language course I\'ve ever taken!"', author: "- Maria S." },
        { quote: '"Flexible, fun, and effective. Highly recommended."', author: "- John D." },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  bg: {
    siteTitle: "LinguaSchool",
    nav: {
      courses: "Курсове",
      features: "Предимства",
      testimonials: "Отзиви",
      contact: "Контакт",
      enroll: "Запиши се",
    },
    hero: {
      title: "Научи нов език с LinguaSchool",
      subtitle: "Интерактивни онлайн курсове за всички възрасти. Започни своето обучение днес!",
      cta: "Виж курсовете",
    },
    features: {
      title: "Защо да изберете нас?",
      items: [
        { title: "Експертни преподаватели", desc: "Учете с квалифицирани професионалисти." },
        { title: "Гъвкав график", desc: "Учи в удобно за теб време, навсякъде." },
        { title: "Общностна подкрепа", desc: "Стани част от активна общност от учащи." },
      ],
    },
    courses: {
      title: "Популярни курсове",
      items: [
        { title: "Френски за начинаещи", desc: "Започни да говориш френски от първия ден." },
        { title: "Френски средно ниво", desc: "Подобри френския си с интерактивни уроци." },
        { title: "Френски напреднали", desc: "Овладей френския с напреднала граматика и разговори." },
      ],
    },
    testimonials: {
      title: "Какво казват нашите ученици",
      items: [
        { quote: '"Най-добрият онлайн курс по езици, който съм посещавал!"', author: "- Мария С." },
        { quote: '"Гъвкаво, забавно и ефективно. Препоръчвам!"', author: "- Иван Д." },
      ],
    },
    footer: {
      rights: "Всички права запазени.",
      privacy: "Политика за поверителност",
      terms: "Общи условия",
    },
  },
  fr: {
    siteTitle: "LinguaSchool",
    nav: {
      courses: "Cours",
      features: "Atouts",
      testimonials: "Témoignages",
      contact: "Contact",
      enroll: "S'inscrire",
    },
    hero: {
      title: "Maîtrisez une nouvelle langue avec LinguaSchool",
      subtitle: "Cours en ligne interactifs pour tous les âges. Commencez votre apprentissage aujourd'hui!",
      cta: "Voir les cours",
    },
    features: {
      title: "Pourquoi nous choisir?",
      items: [
        { title: "Professeurs experts", desc: "Apprenez avec des professionnels certifiés." },
        { title: "Horaires flexibles", desc: "Étudiez à votre rythme, où et quand vous voulez." },
        { title: "Communauté solidaire", desc: "Rejoignez une communauté dynamique d'apprenants." },
      ],
    },
    courses: {
      title: "Nos cours populaires",
      items: [
        { title: "Français débutant", desc: "Commencez à parler français dès le premier jour." },
        { title: "Français intermédiaire", desc: "Améliorez votre français avec des leçons interactives." },
        { title: "Français avancé", desc: "Maîtrisez le français avec une grammaire avancée et des conversations." },
      ],
    },
    testimonials: {
      title: "Ce que disent nos étudiants",
      items: [
        { quote: '"Le meilleur cours de langue en ligne que j\'ai jamais suivi!"', author: "- Marie S." },
        { quote: '"Flexible, amusant et efficace. Je recommande vivement."', author: "- Jean D." },
      ],
    },
    footer: {
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
  },
};

export async function getDictionary(lang: "en" | "bg" | "fr") {
  return dictionaries[lang] || dictionaries.en;
} 