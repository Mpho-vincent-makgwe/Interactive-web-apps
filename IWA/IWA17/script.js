
// scripts.js

const MONTHS = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

// A function that creates an array of a specified length and returns it.
const createArray = (length) => {
const result = [];
for (let i = 0; i < length; i++) {
    result.push(i);
}
return result;
};
// A function that creates an array of data representing the days in the current month.
const createData = () => {
const current = new Date();
const firstDayOfMonth = new Date(current.getFullYear(), current.getMonth(), 1);
// Get the day of the week for the first day of the month & the number of days in the month..
const startDay = firstDayOfMonth.getDay();
const daysInMonth = getDaysInMonth(firstDayOfMonth);
// Create array of the number of weeks in the month & number of days in the week.
const numWeeks = Math.ceil(daysInMonth / 7);
const weeks = createArray(numWeeks + (numWeeks === 5 ? 1 : 0));
const days = createArray(7);
// Iterate over the weeks array and fill in the days array for each week.
for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
    const value = {
    week: weekIndex + 1,
    days: [],
    };
    for (const dayIndex in days) {
    const day = dayIndex - startDay + 1 + weekIndex * 7;
    const isValid = day > 0 && day <= daysInMonth;
    value.days.push({
        dayOfWeek: parseInt(dayIndex) + 1,
        value: isValid ? day : null,
    });
    }
    weeks[weekIndex] = value;
}
return weeks;
};
/**
 * It has all the information about the week column.
 * -A function that returns a table cell with the given class and content.
 */
const addCell = (existing, classString) => {
return /* html */ `
    <td class="${classString}">${existing}</td>
`;
};
const createHtml = (data) => {
let result = '';
for (const week of data) {
    let inner = '';
        // Add the week number to the sidebar of the table.
    inner = addCell(`Week ${week.week}`, 'table__cell table__cell_sidebar', inner);
        // Iterate over the days in the week and add them to the table.
    for (const day of week.days) {
    let classString = 'table__cell';
        // Check if the day is today.
    const isToday = new Date().toDateString() === new Date(current.getFullYear(), current.getMonth(), day.value).toDateString();
    const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        // Add the appropriate classes to the cell based on the day properties.
    if (isToday) classString += ' table__cell_today';
    if (isWeekend) classString += ' table__cell_week';
    /**
     *  Add the 'alternate' class to every other row
     *  If week.week is an even  number, then the class table__cell_alternate is added to the current
        cell, indicating that it should have a different background color or
        some other visual distinction from the other cells in the same row.
        */
    if (week.week % 2 === 0) classString += ' table__cell_alternate';
    inner += addCell(day.value || '', classString);
    }
    result += `<tr class="table__row">${inner}</tr>`;
}
return result;
};
// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data);