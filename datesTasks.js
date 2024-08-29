//DATES!!!!!!!!!!
function getCurrentDateTime() {
    return new Date().toLocaleString('ru-RU')
}

console.log(getCurrentDateTime()); // "2024-07-30 12:34:56"
//////////////////////////////////////////////////////////

function daysBetween(date1, date2) {
    const check = Date.parse(date2) - Date.parse(date1)
    console.log(check / 86400000)
}

console.log(daysBetween('2024-01-01', '2024-01-31')); // 30

/////////////////////////////////////////////////////////

function addDays(date, days) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)
    return newDate
}

console.log(addDays('2024-07-30', 5)); // "2024-08-04"

///////////////////////////////////////////////////////

function getDayOfWeek(date) {
    return (new Date(date).toLocaleString('en-US', {weekday: 'long'}))
}
console.log(getDayOfWeek('2024-07-28'));

/////////////////////////////////////////////////////////

function scheduleEvent(start, end, day) {
    const result = []
        for(let i = new Date(start); Date.parse(i) <= Date.parse(end); i.setDate(i.getDate() + 1)) {
            if(i.toLocaleString('en-US', {weekday: 'long'}) === day) {
                result.push(i.toLocaleString('ru-RU').substring(0, i.toLocaleString('ru-RU').indexOf(',')))
            }
        }
    return result
}
console.log(scheduleEvent('2024-07-01', '2024-07-31', 'Tuesday'));