export function format(date, split) {
    let targetData = date ? new Date(date) : new Date();
    // cons
    let year = targetData.getFullYear();
    let month = targetData.getMonth() + 1;
    let day = targetData.getDate();
    if (split) {
        return `${year}${split}${month}${split}${day}`
    }
    return `${year}-${month}-${day}`
}