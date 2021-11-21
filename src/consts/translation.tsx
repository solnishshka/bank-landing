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
          title: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet libero eget elit egestas gravida.",
        },
        {
          id: 2,
          title: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet libero eget elit egestas gravida.",
        },
        {
          id: 3,
          title: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet libero eget elit egestas gravida.",
        },
      ],
      suggestionText: {
        start: "Lorem ipsum dolor sit amet, consectetur",
        span: "adipiscing",
        end: "elit.",
      },
    },
    parent: {
      cards: [
        {
          id: 1,
          title: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet libero eget elit egestas gravida.",
        },
        {
          id: 2,
          title: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet libero eget elit egestas gravida.",
        },
        {
          id: 3,
          title: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet libero eget elit egestas gravida.",
        },
      ],
      suggestionText: {
        start: "Lorem ipsum dolor sit amet, consectetur",
        span: "adipiscing ",
        end: "elit.",
      },
    },
    suggestionButtonText: "Get",
    mainTitle: {
      main: "Integer imperdiet libero eget elit egestas",
      kids: "this",
      parents: "other",
    },
    accounts: ["Lorem ipsum", "Lorem ipsum dolor", "Lorem ipsum"],
    contacts: {
      title: "Contacts",
      items: [
        {
          icon: (className?: string): ReactElement => (
            <EmailIcon className={className} />
          ),
          text: "test@test.test",
        },
        {
          icon: (className?: string): ReactElement => (
            <PhoneIcon className={className} />
          ),
          text: "+0(000)000-00-00",
        },
        {
          icon: (className?: string): ReactElement => (
            <LocationIcon className={className} />
          ),
          text: "000000, Moscow, Test Street",
        },
      ],
    },
    appsTitle: "Download app",
    copyright: "© 2021 created by Solnishshka",
    privacyPolicyLinkText: "Privacy policy",
    translateButtonText: "RU",
  },
  ru: {
    kid: {
      cards: [
        {
          id: 1,
          title: "Важно",
          text: "Не следует, однако, забывать, что перспективное планирование позволяет",
        },
        {
          id: 2,
          title: "Интересно",
          text: "Не следует, однако, забывать, что перспективное планирование позволяет",
        },
        {
          id: 3,
          title: "Полезно",
          text: "Не следует, однако, забывать, что перспективное планирование позволяет",
        },
      ],
      suggestionText: {
        start:
          "Не следует, однако, забывать, что перспективное планирование позволяет",
        span: "выполнить",
        end: "важные задания.",
      },
    },
    parent: {
      cards: [
        {
          id: 1,
          title: "Важно",
          text: "Не следует, однако, забывать, что перспективное планирование позволяет",
        },
        {
          id: 2,
          title: "Интересно",
          text: "Не следует, однако, забывать, что перспективное планирование позволяет",
        },
        {
          id: 3,
          title: "Полезно",
          text: "Не следует, однако, забывать, что перспективное планирование позволяет",
        },
      ],
      suggestionText: {
        start:
          "Не следует, однако, забывать, что перспективное планирование позволяет",
        span: "выполнить",
        end: "важные задания.",
      },
    },
    suggestionButtonText: "Давайте",
    mainTitle: {
      main: "Не следует, однако, забывать",
      kids: "важно",
      parents: "полезно",
    },
    accounts: ["ООО ”Тест”", "ОГРН 0000000000000", "ИНН 0000000000"],
    contacts: {
      title: "Контакты",
      items: [
        {
          icon: (className?: string): ReactElement => (
            <EmailIcon className={className} />
          ),
          text: "test@test.test",
        },
        {
          icon: (className?: string): ReactElement => (
            <PhoneIcon className={className} />
          ),
          text: "+0(000)000-00-00",
        },
        {
          icon: (className?: string): ReactElement => (
            <LocationIcon className={className} />
          ),
          text: "000000, Москва, Тестовая улица",
        },
      ],
    },
    appsTitle: "Установите приложение",
    copyright: "© 2021 created by Solnishshka",
    privacyPolicyLinkText: "Правила обработки персональных данных",
    translateButtonText: "EN",
  },
};
