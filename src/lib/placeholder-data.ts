const projects = [
  { id: 1, project_name: "Входящие" },
  { id: 2, project_name: "Учеба" },
  { id: 3, project_name: "Работа" },
  { id: 4, project_name: "Домашние дела" },
  { id: 5, project_name: "Авто" },
];

const tasks = [
  {
    id: 1,
    title: "Собеседование в IT-компании",
    project_name: "Работа",
    is_done: false,
    date_completion: "2026-06-20",
  },
  {
    id: 2,
    title: "Выполнить тестовое задание",
    project_name: "Работа",
    is_done: false,
    date_completion: "2026-06-22",
  },
  {
    id: 3,
    title: "Сделать задание первого раздела",
    project_name: "Учеба",
    is_done: true,
    date_completion: "2026-06-14",
  },
  {
    id: 4,
    title: "Встреча с другом",
    project_name: "Входящие",
    is_done: true,
    date_completion: "2026-06-12",
  },
  {
    id: 5,
    title: "Купить корм для кота",
    project_name: "Домашние дела",
    is_done: false,
    date_completion: "",
  },
  {
    id: 6,
    title: "Собеседование в IT-компании",
    project_name: "Домашние дела",
    is_done: false,
    date_completion: "",
  },
];

export { projects, tasks };
