import {updateDragging, createOrderData, state } from "./data.js";
import { moveToColumn, updateDraggingHtml, html} from "./view.js";


/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}
const handleDragStart = (event) => {
    const id = event.target.dataset.id
    updateDragging({ id })
    updateDraggingHtml({ dragging: true })}

const handleDragEnd = (event) => {
    updateDragging({ id: null, over: null })
    updateDraggingHtml({ dragging: false })
}


const addToggle = document.querySelector('.button_primary');
const orderForm = document.querySelector('.overlay');
const handleAddToggle = () => {
    orderForm.classList.toggle('visible');
  };
  addToggle.addEventListener('click', handleAddToggle);
  


  const handleHelpToggle = (event) => {
    html.help.dialog.classList.toggle('visible');
  };
  

const handleAddSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { value: order } = form.elements.order;

    // add the new order to the data array
    data.orders.push({ id: data.orders.length + 1, order: order, status: 'pending' });

    // update the display of the orders
    displayData(data);

    // clear the form
    form.reset();

    // hide the form
    handleAddToggle();
}
const handleEditToggle = (event) => {
    const target = event.target.closest('[data-id]')
    if (!target) return
    const { id } = target.dataset
    const order = data.orders.find(o => o.id === parseInt(id))
    if (!order) return
    html.edit.dialog.classList.add('visible')
    html.edit.form.elements.order.value = order.order
    html.edit.form.elements.status.value = order.status
    html.edit.form.dataset.id = id
}
const handleEditSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const orderId = form.dataset.orderId;
    const { value: newOrder } = form.elements.order;

    // find the order in the data array and update its order value
    const orderIndex = data.orders.findIndex(order => order.id === orderId);
    data.orders[orderIndex].order = newOrder;

    // update the display of the orders
    displayData(data);

    // hide the form
    handleEditToggle();
}

const handleDelete = (event) => {
    event.preventDefault();
    const form = html.edit.form;
    const orderId = form.dataset.orderId;

    // remove the order with the specified id from the data array
    const index = data.orders.findIndex((order) => order.id === parseInt(orderId));
    if (index >= 0) {
        data.orders.splice(index, 1);
    }

    // update the display of the orders
    displayData(data);

    // hide the "Edit Order" dialog box
    handleEditToggle();
}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', orderForm)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)



for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}