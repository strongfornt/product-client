import moment from "moment";

 export const getTime = (createdAt:string) => {
    const now = moment();
    const time = moment(createdAt);

    const yearsDiff = now.diff(time, "years");
    const monthsDiff = now.diff(time, "months");
    const daysDiff = now.diff(time, "days");
    const hoursDiff = now.diff(time, "hours");
    const minutesDiff = now.diff(time, "minutes");

    if (yearsDiff > 0) {
      return `${yearsDiff}y`;
    } else if (monthsDiff > 0) {
      return `${monthsDiff}m`;
    } else if (daysDiff > 0) {
      return `${daysDiff}d`;
    } else if (hoursDiff > 0) {
      return `${hoursDiff}h`;
    } else if (minutesDiff > 0) {
      return `${minutesDiff}m`;
    } else {
      return `Just now`;
    }
  }
