export const getPagesCount = totalCount => {
    let totalPages = [];
    for (let i = 0; i < totalCount; i++) {
        totalPages.push(i + 1)
    }
    return totalPages;
}