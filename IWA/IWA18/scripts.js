    import {updateDragging, createOrderData, state, TABLES, COLUMNS } from './data.js';
    import {  moveToColumn, updateDraggingHtml, html,createOrderHtml} from './view.js'

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

    /**
     * A handler that fires when a user starts dragging an order. This sets the
     * `state.dragging` object to include the ID of the dragged order, as well as
     * the current column and position within the column. The HTML is also updated
     * to reflect the new state, with the dragged element given a `dragging` class.
     *
     * @param {Event} event
     */
    const handleDragStart = (event) => {
    const id = event.target.dataset.id
    const column = event.target.closest('.column').dataset.column
    const position = Array.from(event.target.parentElement.children).indexOf(event.target)
    updateDragging({ id, column, position })
    updateDraggingHtml({ dragging: true })
    };


    /**
     * A handler that fires when a user stops dragging an order. This moves the order
     * in the `state` array to its new column and position, and updates the HTML to
     * reflect the change. The `state.dragging` object is also reset to null.
     *
     * @param {Event} event
     */
    const handleDragEnd = (event) => {
    const { id, column, position } = state.dragging
    const targetColumn = event.target.closest('[data-area]').dataset.area

    if (targetColumn !== column) {
    const order = state.find(order => order.id === id)
    moveToColumn(order, targetColumn)
    } else {
    state.find(order => order.id === id).position = position
    }

    updateDragging({ id: null, column: null, position: null })
    updateDraggingHtml({ dragging: false })
    };



    const handleHelpToggle = (event) => {html.help.overlay.style.display = 'block'};

    const handleHelpToggleOff = (event) => {html.help.overlay.style.display = ''};

    const handleAddToggle = (event) => {html.add.overlay.style.display = 'block';console.log('add')};

    const handleAddToggleOff = () => {html.add.overlay.style.display = ''};

    const handleEditToggle = (event) => {
    html.edit.overlay.style.display = 'block';
    };

    const handleEditToggleOff = () => {html.edit.overlay.style.display = ''};

    const handleAddSubmit = (event) => {
    event.preventDefault();
    const order = {
        title: html.add.title.value,
        table: html.add.table.value,
        column: "ordered",
    };
    let orderData = createOrderData(order);
    html.add.overlay.style.display = '';
    const newOrders = createOrderHtml(orderData);
    const customerOrder = html.other.grid.querySelector('[data-column="ordered"]');
    html.add.form.reset()
    customerOrder.innerHTML += newOrders.innerHTML;
    console.log('submited')
    };

        const handleEditSubmit = (event) => {
            event.preventDefault();
            console.log('submitted')
            
            // Get the order data from the edit form fields
            const id = html.edit.id.value;
            const order = {
                id: id,
                title: html.edit.title.value,
                table: html.edit.table.value,
                column: html.edit.column.value,
            };
            
            // Update the state with the new order data
            const index = state.findIndex((o) => o.id === id);
            state[index] = order;
            
            // Create new HTML elements for the updated order
            const newOrderHtml = createOrderHtml(order);
            
            // Update the corresponding order element in the DOM
            const oldOrderEl = document.querySelector(`.order[data-id="${id}"]`);
            const columnEl = html.columns[order.column];
            columnEl.replaceChild(newOrderHtml, oldOrderEl);
            
            // Hide the edit overlay
            html.edit.overlay.style.display = '';
            };
            
            
    const handleDelete = (event) => {
    const id = event.target.dataset.id;
    // Remove the order data from state
    state = state.filter(order => order.id !== id);

    // Remove the order HTML from the column
    const column = event.target.closest(".column");
    const orderEl = column.querySelector(`[data-id="${id}"]`);
    orderEl.remove();
    };



    html.add.cancel.addEventListener('click', handleAddToggleOff)
    html.other.add.addEventListener('click', handleAddToggle)
    html.add.form.addEventListener('submit', handleAddSubmit)

    html.other.grid.addEventListener('click', handleEditToggle)
    html.edit.cancel.addEventListener('click', handleEditToggleOff)
    html.edit.form.addEventListener('submit', handleEditSubmit)
    html.edit.delete.addEventListener('click', handleDelete)

    html.help.cancel.addEventListener('click', handleHelpToggleOff)
    html.other.help.addEventListener('click', handleHelpToggle)

    for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
    }

    for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
    }