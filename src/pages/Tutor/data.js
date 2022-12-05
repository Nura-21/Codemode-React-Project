const tutors = [
  {
    img: "zhaks.jpg",
    name: "Ашим Жаксылык",
    courses: [
      {
        title: "Принципы программирования - C++",
        icon: "cpp.svg",
      },
      {
        title: "Принципы программирования - Python",
        icon: "python.svg",
      },
      {
        title: "Алгоритмы и структуры данных",
        icon: "algo.png",
      },
    ],
    email: "duramash.02@gmail.com",
    telegram: "https://t.me/duramash",
    row: 0,
  },
  {
    img: "adil.jpg",
    name: "Жапар Адиль",
    courses: [
      {
        title: "Принципы программирования - C++",
        icon: "cpp.svg",
      },
      {
        title: "Принципы программирования - Python",
        icon: "python.svg",
      },
      {
        title: "Web-разработка - HTML, CSS, JS",
        icon: "js.svg",
      },
    ],
    email: "adilzhapar2002@gmail.com",
    telegram: "https://t.me/zhaparka",
    row: 0,
  },
  {
    img: "nura.jpg",
    name: "Турдалин Нурасыл",
    courses: [
      {
        title: "Принципы программирования - C++",
        icon: "cpp.svg",
      },
      {
        title: "Принципы программирования - Python",
        icon: "python.svg",
      },
      {
        title: "Web-разработка - HTML, CSS, JS",
        icon: "js.svg",
      },
    ],
    email: "n.turdalin@arbuz.kz",
    telegram: "https://t.me/trdln",
    row: 1,
  },
  {
    img: "bauka.jpg",
    name: "Балгазиев Бауыржан",
    courses: [
      {
        title: "Алгоритмы и структуры данных",
        icon: "algo.png",
      },
    ],
    email: "b.balgaziev03@gmail.com",
    telegram: "https://t.me/bbaaurzhan",
    row: 1,
  },
  {
    img: "rama.jpg",
    name: "Бактыбаев Райымбек",
    courses: [
      {
        title: "Принципы программирования - C++",
        icon: "cpp.svg",
      },
      {
        title: "Web-разработка - HTML, CSS, JS",
        icon: "js.svg",
      },
    ],
    email: "mibuchi773@mail.ru",
    telegram: "https://t.me/b0napartt",
    row: 1,
  },
  {
    img: "sanzhik.jpg",
    name: "Кипшакбаев Санжар",
    courses: [
      {
        title: "Основы баз данных - PostgreSQL",
        icon: "postgre.svg",
      },
    ],
    email: "sanzhar122002@gmail.com",
    telegram: "https://t.me/Sanzhar_OG",
    row: 1,
  },
  {
    img: "darina.jpg",
    name: "Айтбаева Дарина",
    courses: [
      {
        title: "Принципы программирования - C++",
        icon: "cpp.svg",
      },
      {
        title: "Принципы программирования - Python",
        icon: "python.svg",
      },
    ],
    email: "dajtbaeva@gmail.com",
    telegram: "https://t.me/dajtbaeva",
    row: 2,
  },
  {
    img: "alikh.jpg",
    name: "Губаев Алихан",
    courses: [
      {
        title: "Принципы программирования - C++",
        icon: "cpp.svg",
      },
      {
        title: "Принципы программирования - Python",
        icon: "python.svg",
      },
    ],
    email: "jonasofan.gubaev@gmail.com",
    telegram: "https://t.me/akidra4L",
    row: 2,
  },
  {
    img: "yaslan.jpg",
    name: "Ручанов Яслан",
    courses: [
      {
        title: "Принципы программирования - C++",
        icon: "cpp.svg",
      },
      {
        title: "Принципы программирования - Python",
        icon: "python.svg",
      },
    ],
    email: "yaslan.ruchanov@mail.ru",
    telegram: "https://t.me/Ruchanov",
    row: 2,
  },
];

const firstRow = tutors.filter((i) => i.row === 0);
const secondRow = tutors.filter((i) => i.row === 1);
const thirdRow = tutors.filter((i) => i.row === 2);

export { firstRow, secondRow, thirdRow };
