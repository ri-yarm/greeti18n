import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { DateTime } from 'luxon';

i18n
  // обнаруживаем язык пользователя
  .use(LanguageDetector)
  // передаём инстанс i18n в react-i18next
  .use(initReactI18next)
  // инициация i18next
  .init({
    debug: true,
    fallbackLng: 'en', // список резервных языков
    /* interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }, */
    resources: {
      // Здесь будут переводы
      en: {
        translation: {
          description: {
            part1: 'hello i18n',
            part2: 'learn i18n-react'
          },
          counter_one: 'Changed language just once',
          counter_other: 'Changed language already {{count}} times',
          footer: {
            date: 'Today is {{date, DATE_HUGE}}',
            date_morning: 'Good morning! Today is {{date, DATE_HUGE}} | Have a nice day!',
            date_afternoon: 'Good afternoon! It\'s {{date, DATE_HUGE}}',
            date_evening: 'Good evening! Today was the {{date, DATE_HUGE}}'
          }
        }
      },
      ru: {
        translation: {
          description: {
            part1: 'привет i18n',
            part2: 'изучаем i18n-react'
          },
          counter_one: 'Сменили язык единожды',
          counter_other: 'Сменили язык уже {{count}} раз',
          footer: {
            date: 'сегодня {{date, DATE_HUGE}}',
            date_morning: 'Доброе утро, сегодня {{date, DATE_HUGE}} | Хорошего дня!',
            date_afternoon: 'Добрый день! сейчас {{date, DATE_HUGE}}',
            date_evening: 'Добрый вечер, пора собираться домой {{date, DATE_HUGE}}'
          }
        }
      }
    }
  });

  i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
    return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
  });
  
export default i18n;