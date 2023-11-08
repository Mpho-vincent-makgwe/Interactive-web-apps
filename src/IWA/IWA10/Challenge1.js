const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId]?.name || `ID ${futureId} not created yet`)
let copied = {}
 copied.id = holidays[6].id;
 copied.name =  'X-mas';
 copied.date = new Date(holidays[6].date);
 copied.date = new Date(copied.date);
copied.date.setHours(0);
copied.date.setMinutes(0);
const isEarlier = copied.date < holidays[6].date;

console.log('New date is earlier:', isEarlier)
console.log('ID change:',copied.id && holidays[6].id !== copied.id);
console.log('Name change:', holidays[6].name === copied.name ? false : copied.name )
console.log('Date change:', holidays[6].date === copied.date ? false : copied.date.toLocaleDateString('en-GB') )


// Find the timestamps for the first and last holidays
const timestamps = Object.values(holidays).map(holiday => new Date(holiday.Ndate).getTime());
const firstHolidayTimestamp = Math.min(...timestamps);
const lastHolidayTimestamp = Math.max(...timestamps);

const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(firstHolidayTimestamp).getMonth()+1;
const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth()+1;

console.log(`0${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);
const obj = Object.keys(holidays)

const randomHoliday = Math.floor(Math.random () * obj.length);
const randomHolidaykey = new Date (holidays[randomHoliday].date)
console.log(randomHolidaykey.toLocaleDateString('en-GB'));

const Newone = new Date(holidays[1].date).getTime();
const Newtwo = new Date(Newone).getDate();
const Newthree = new Date(Newone).getMonth();
const NewFour = new Date(Newone).getFullYear();
console.log(Newtwo,Newthree,NewFour)