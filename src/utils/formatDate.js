export const formatDate = date => {
    const dateObj = new Date(date);
    const monthsArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const year = dateObj.getFullYear();
    const monthDay = dateObj.getDate();
    const month = dateObj.getMonth();
    const time = dateObj.toLocaleTimeString().slice(0, 5);
    const dateMessage = `${monthDay} ${monthsArray[month]} ${year} в ${time}`;
    return dateMessage;
};