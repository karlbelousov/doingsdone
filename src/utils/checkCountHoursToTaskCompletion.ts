import dayjs from "dayjs";

export default function checkCountHoursToTaskCompletion(date: string) {
    if (!date) return false;

    const taskComletetionDate = dayjs(date);
    const currentDate = dayjs();
    const diffHours = taskComletetionDate.diff(currentDate, "hour");
    return diffHours <= 24;
}
