// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const status1 = document.querySelector('div#book1 p span.status');
const reserve1 = document.querySelector('div#book1 button.reserve');
const checkout1 = document.querySelector('div#book1 button.checkout');
const checkin1 = document.querySelector('div#book1 button.checkin');

const status2 = document.querySelector('div#book2 p span.status');
const reserve2 = document.querySelector('div#book2 button.reserve');
const checkout2 = document.querySelector('div#book2 button.checkout');
const checkin2 = document.querySelector('div#book2 button.checkin');

const status3 = document.querySelector('div#book3 p span.status');
const reserve3 = document.querySelector('div#book3 button.reserve');
const checkout3 = document.querySelector('div#book3 button.checkout');
const checkin3 = document.querySelector('div#book3 button.checkin');

checkin1.style.color = 'none';
status1.style.color = STATUS_MAP[status1.innerText].color;
reserve1.disabled = !STATUS_MAP[status1.innerText].canReserve;
checkout1.disabled = !STATUS_MAP[status1.innerText].canCheckout;
checkin1.disabled = !STATUS_MAP[status1.innerText].canCheckIn;

checkin2.style.color = 'none';
status2.style.color = STATUS_MAP[status2.innerText].color;
reserve2.disabled = !STATUS_MAP[status2.innerText].canReserve;
checkout2.disabled = !STATUS_MAP[status2.innerText].canCheckout;
checkin2.disabled = !STATUS_MAP[status2.innerText].canCheckIn;

checkin3.style.color = 'none';
status3.style.color = STATUS_MAP[status3.innerText].color;
reserve3.disabled = !STATUS_MAP[status3.innerText].canReserve;
checkout3.disabled = !STATUS_MAP[status3.innerText].canCheckout;
checkin3.disabled = !STATUS_MAP[status3.innerText].canCheckIn;