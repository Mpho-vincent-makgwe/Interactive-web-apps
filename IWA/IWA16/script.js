// scripts.js

const MONTHS = [
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec',
]

const data = {
response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
    NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
        {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
        },
        {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
        },
        ],
    },

    SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
        {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
        },
        {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
        },
        {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
        },
        {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
        },
        ],
    },
    },
},
};

// Only edit below this comment

const createHtml = (athlete) => {
const fragment = document.createDocumentFragment();
const firstName = athlete.firstName;
const surname = athlete.surname;
const races = athlete.races;
const totalRaces = races.length;
const latestRace = races[races.length - 1];
const [dateString] = latestRace.date.split('T');
const date = new Date(dateString);
const day = date.getDate();
const month = MONTHS[date.getMonth()];
const year = date.getFullYear();

const [hours, minutes, seconds] = latestRace.time;
const totalTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

const athleteElement = document.createElement('div');
athleteElement.classList.add('athlete');
athleteElement.dataset.id = athlete.id;

const list = document.createElement('dl');
list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${totalRaces}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${totalTime}</dd>
`;

athleteElement.appendChild(list);
fragment.appendChild(athleteElement);
return fragment;
};


// [NM372], [SV782] = data
document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(data.response.data.NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(data.response.data.SV782));
