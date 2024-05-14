export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}

export function formatDateOnly(timestamp) {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}
export function formatPaymentPeriod(date, period) {
  const paymentDate = new Date(date);
  const month = paymentDate.toLocaleString("default", { month: "long" });
  const year = paymentDate.getFullYear();

  let result = "";

  switch (period) {
    case "monthly":
      result = `${month} ${year}`;
      break;
    case "quarterly":
      const quarter = Math.ceil((paymentDate.getMonth() + 1) / 3);
      const quarterMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ].slice((quarter - 1) * 3, quarter * 3);
      const firstMonth = quarterMonths[0];
      const lastMonth = quarterMonths[quarterMonths.length - 1];
      result = `${firstMonth} to ${lastMonth} ${year}`;
      break;
    case "semi-annually":
      const semester = Math.ceil((paymentDate.getMonth() + 1) / 6);
      const semesterMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ].slice((semester - 1) * 6, semester * 6);
      const firstSemesterMonth = semesterMonths[0];
      const lastSemesterMonth = semesterMonths[semesterMonths.length - 1];
      result = `${firstSemesterMonth} to ${lastSemesterMonth} ${year}`;
      break;
    case "annually":
      result = `${year}`;
      break;
    default:
      result = "Invalid period";
      break;
  }

  return result;
}
