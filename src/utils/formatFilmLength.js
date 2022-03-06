export const formatFilmLength = (filmLength) => {
    let minutesPart = filmLength % 60;
    if (minutesPart < 10) {
        minutesPart = "0" + minutesPart;
    }
    return `${filmLength} мин. / 0${Math.floor(filmLength / 60)}:${minutesPart}`
}