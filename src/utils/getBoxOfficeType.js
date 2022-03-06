export const getBoxOfficeType = (boxOffice) => {
    switch (boxOffice.type) {
        case 'BUDGET':
            return 'Бюджет';
        case 'USA':
            return 'Сборы в США';
        case 'MARKETING':
            return 'Маркетинг';
        case 'WORLD':
            return 'Сборы в мире';
        case 'RUS':
            return 'Сборы в России';
        default:
            break;
    }
};