import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactElement } from "react-router/node_modules/@types/react";

export const translations = {
  en: {
    kid: {
      cards: [
        {
          id: 1,
          title: "Earn",
          text: "Get automatic rewards from your parents for school performance. Learn better - earn more.",
        },
        {
          id: 2,
          title: "Learn",
          text: "Study financial and investment products in special courses, improve your financial literacy!",
        },
        {
          id: 3,
          title: "Play on",
          text: "We’ve prepared unique financial competitions, amusing tests, and quizzes for all users.",
        },
      ],
      suggestionText: {
        start: "Share the link with your parents and get a",
        span: "$10 welcome bonus",
        end: "!",
      },
    },
    parent: {
      cards: [
        {
          id: 1,
          title: "Financial literacy",
          text: "Using quizzes and financial literacy courses, we teach children to manage funds and set long-term goals.",
        },
        {
          id: 2,
          title: "Control",
          text: "Set daily/montly purchase limits for account. Restrict AppStore/PlayMarket/Steam transactions.",
        },
        {
          id: 3,
          title: "Rewards & Fines",
          text: "Come up with bonuses/fines for good and bad grades. Auto calculations due to integration with online gradebooks.",
        },
      ],
      suggestionText: {
        start: "Fill our survey about your dream bank and",
        span: "3-month “Premium”",
        end: "!",
      },
    },
    suggestionButtonText: "Get",
    mainTitle: {
      main: "Smart & Secure bank card in your phone for",
      kids: "kids",
      parents: "parents",
    },
    accounts: ["LLC AI-Fintech", "PSRN 1217700448855", "TIN 9725060564"],
    contacts: {
      title: "Contacts",
      items: [
        {
          icon: (className?: string): ReactElement => (
            <EmailIcon className={className} />
          ),
          text: "Info@joybank.ru",
        },
        {
          icon: (className?: string): ReactElement => (
            <PhoneIcon className={className} />
          ),
          text: "+7(499)653-54-20",
        },
        {
          icon: (className?: string): ReactElement => (
            <LocationIcon className={className} />
          ),
          text: "115419, Moscow, Orbzhonikidze 11-1A Russian Federation",
        },
      ],
    },
    appsTitle: "Download app",
    copyright: "© 2021 JoyBank. All rights reserved.",
    privacyPolicyLinkText: "Privacy policy",
    translateButtonText: "RU",
  },
  ru: {
    kid: {
      cards: [
        {
          id: 1,
          title: "Зарабатывай",
          text: "Получай автоматические вознаграждения от родителей за хорошие оценки в школе.",
        },
        {
          id: 2,
          title: "Учись",
          text: "Изучай финансовые и инвестиционные продукты на специальных курсах, повышай уровень знаний!",
        },
        {
          id: 3,
          title: "Играй",
          text: "Мы подготовили интересные тесты и смешные квизы за прохождение которых можно получить бонусы.",
        },
      ],
      suggestionText: {
        start: "Отправь ссылку на приложение родителям и получи",
        span: "200 рублей",
        end: " на баланс в подарок!",
      },
    },
    parent: {
      cards: [
        {
          id: 1,
          title: "Обучение",
          text: "Научите ребенка ценности денег, финансовой грамотности и подготовьте к будущему в мире финансов.",
        },
        {
          id: 2,
          title: "Контроль",
          text: "Установите лимит трат на день/месяц, ограничение в AppStore и PlayMarket, а также на  снятие наличных.",
        },
        {
          id: 3,
          title: "Награды",
          text: "Настройте автоматические бонусы за оценки в школе (интеграция с электронным дневником).",
        },
      ],
      suggestionText: {
        start:
          "Расскажите нам о вашем семейном банке мечты и получите 3 месяца",
        span: "бесплатного ",
        end: "обслуживания!",
      },
    },
    suggestionButtonText: "Давайте",
    mainTitle: {
      main: "Безопасная банковская карта для",
      kids: "детей",
      parents: "родителей",
    },
    accounts: ["ООО ”АИ-ФИНТЕХ”", "ОГРН 1217700448855", "ИНН 9725060564"],
    contacts: {
      title: "Контакты",
      items: [
        {
          icon: (className?: string) => <EmailIcon className={className} />,
          text: "Info@joybank.ru",
        },
        {
          icon: (className?: string) => <PhoneIcon className={className} />,
          text: "+7(499)653-54-20",
        },
        {
          icon: (className?: string) => <LocationIcon className={className} />,
          text: "115419, г. Москва,ул. Орджиникидзе 11с1а",
        },
      ],
    },
    appsTitle: "Установите приложение",
    copyright: "© 2021 JoyBank. Все права защищены.",
    privacyPolicyLinkText: "Правила обработки персональных данных",
    translateButtonText: "EN",
  },
};
