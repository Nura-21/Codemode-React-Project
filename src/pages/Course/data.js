const activeCourseList = [
  {
    img: "algo.png",
    title: "Алгоритмы и структуры данных",
    firstTutor: "Ашим Жаксылык",
    secondTutor: "Балгазиев Бауыржан",
    time: "12 недель по 4 часа в неделю",
    price: "32000",
    hasOneTutor: true,
    hasSecondTutor: true,
    isActive: true,
    isFuture: false,
  },
  {
    img: "cpp.svg",
    title: "Принципы программирования - C++",
    firstTutor: "Жапар Адиль, Ручанов Яслан",
    secondTutor: "Турдалин Нурасыл, Губаев Алихан",
    time: "12 недель по 4 часа в неделю",
    price: "24000",
    hasOneTutor: false,
    hasSecondTutor: true,
    isActive: true,
    isFuture: false,
  },
  {
    img: "postgre.svg",
    title: "Основы баз данных - PostgreSQL",
    firstTutor: "Кипшакбаев Санжар",
    secondTutor: "Балгазиев Бауыржан",
    time: "8 недель по 4 часа в неделю",
    price: "30000",
    hasOneTutor: true,
    hasSecondTutor: false,
    isActive: true,
    isFuture: false,
  }
];

const futureCourseList = [
  {
    img: "python.svg",
    title: "Принципы программирования - Python",
    firstTutor: "Жапар Адиль, Ручанов Яслан",
    secondTutor: "Турдалин Нурасыл, Губаев Алихан",
    time: "12 недель по 4 часа в неделю",
    price: "24000",
    hasOneTutor: false,
    hasSecondTutor: true,
    isActive: false,
    isFuture: false,
  },
  {
    img: "js.svg",
    title: "Web-разработка - HTML, CSS, JS",
    firstTutor: "Турдалин Нурасыл",
    secondTutor: "Жапар Адиль",
    time: "8 недель по 4 часа в неделю",
    price: "0",
    hasOneTutor: true,
    hasSecondTutor: true,
    isActive: false,
    isFuture: true,
  }
]

export {
  activeCourseList,
  futureCourseList
}