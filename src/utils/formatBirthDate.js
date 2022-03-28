export const formatBirthDate = (date) => {
    const dateObj = new Date(date);
    const monthsArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const year = dateObj.getFullYear();
    const monthDay = dateObj.getDate();
    const month = dateObj.getMonth();
    const dateMessage = `${monthDay} ${monthsArray[month]}, ${year}`;
    return dateMessage;
}