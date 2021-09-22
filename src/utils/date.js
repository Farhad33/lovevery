const months = ["Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export function getDays(year, month) {
    if(year === 'Year' || year === undefined) {
        year = new Date().getFullYear()
    }
    if(month === 'Month' || month === undefined) {
        month = new Date().getMonth() + 1
    } else {
        month = months.indexOf(month)
    }
    let days = new Date(year,month, 0).getDate()
    days = Array.from({length: days}, (_, i) => i + 1)
    days.unshift('Day')
    return days
}

export function getYears() {
    let currentYear = new Date().getFullYear()
    let lastYear = new Date(`${currentYear}`).getFullYear()
    let nextYear = new Date(`${currentYear + 2}`).getFullYear()
    return ['Year', lastYear, currentYear, nextYear]
}

export function getMonths() {
    return months
}