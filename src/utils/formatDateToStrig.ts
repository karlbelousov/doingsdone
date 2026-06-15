import dayjs from "dayjs";

export default function formatDateToString(date: string) {
  return dayjs(date).format("DD.MM.YYYY");
}
