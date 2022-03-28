export const formatAgeDeclination = age => {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['год', 'года', 'лет']
    return age + " " + titles[(age % 100 > 4 && age % 100 < 20) ? 2 : cases[(age % 10 < 5) ? age % 10 : 5]];
}