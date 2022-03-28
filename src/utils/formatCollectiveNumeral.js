export const formatCollectiveNumeral = (number) => {
    switch (number) {
        case 1:
            return `1`
        case 2:
        case 3:
        case 4:
            return `${number} ребёнка`
        default:
            break;
    }
}