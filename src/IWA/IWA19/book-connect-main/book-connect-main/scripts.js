/**
 * The search overlay cancel button element.
 * @type {HTMLElement}
 */
const searchOverlayCancelButton = document.querySelector('[data-search-cancel]');

/**
 * The search overlay element.
 * @type {HTMLElement}
 */
const searchOverlay = document.querySelector('[data-search-overlay]');

/**
 * The settings overlay cancel button element.
 * @type {HTMLElement}
 */
const settingsOverlayCancelButton = document.querySelector('[data-settings-cancel]');

/**
 * The settings overlay element.
 * @type {HTMLElement}
 */
const settingsOverlay = document.querySelector('[data-settings-overlay]');

/**
 * The search title input element.
 * @type {HTMLInputElement}
 */
const searchTitle = document.querySelector('[data-search-title]');

/**
 * The list items container element.
 * @type {HTMLElement}
 */
const listItems = document.querySelector('[data-list-items]');

/**
 * The "Show more" button element.
 * @type {HTMLButtonElement}
 */
const listButton = document.querySelector('[data-list-button]');

/**
 * The message element for displaying search results.
 * @type {HTMLElement}
 */
const messageList = document.querySelector('[data-list-message]');

/**
 * The search form element.
 * @type {HTMLFormElement}
 */
const searchForm = document.querySelector('[data-search-form]');

/**
 * The header search button element.
 * @type {HTMLElement}
 */
const headerSearch = document.querySelector('[data-header-search]');

/**
 * The search genres select element.
 * @type {HTMLSelectElement}
 */
const searchGenres = document.querySelector('[data-search-genres]');

/**
 * The search authors select element.
 * @type {HTMLSelectElement}
 */
const searchAuthors = document.querySelector('[data-search-authors]');

/**
 * The settings theme select element.
 * @type {HTMLSelectElement}
 */
const settingsTheme = document.querySelector('[data-settings-theme]');

/**
 * The settings form element.
 * @type {HTMLFormElement}
 */
const settingsForm = document.querySelector('[data-settings-form]');

/**
 * The active list overlay element.
 * @type {HTMLElement}
 */
const activeList = document.querySelector('[data-list-active]');

/**
 * The blur image element in the active list overlay.
 * @type {HTMLImageElement}
 */
const blurList = document.querySelector('[data-list-blur]');

/**
 * The image element in the active list overlay.
 * @type {HTMLImageElement}
 */
const imageList = document.querySelector('[data-list-image]');

/**
 * The title element in the active list overlay.
 * @type {HTMLElement}
 */
const titleList = document.querySelector('[data-list-title]');

/**
 * The subtitle element in the active list overlay.
 * @type {HTMLElement}
 */
const subactiveList = document.querySelector('[data-list-subtitle]');

/**
 * The description element in the active list overlay.
 * @type {HTMLElement}
 */
const descriptionList = document.querySelector('[data-list-description]');

/**
 * The close button element in the active list overlay.
 * @type {HTMLButtonElement}
 */
const closeList = document.querySelector('[data-list-close]');

/**
 * The header settings button element.
 * @type {HTMLElement}
 */
const headerSettings = document.querySelector('[data-header-settings]');

/**
 * The page number for pagination.
 * @type {number}
 */
let page = 1;

/**
 * The filtered books array.
 * @type {Array<Object>}
 */
let matches = books;

/**
 * Displays the initial list of books.
 */
function displayInitialBooks() {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = createPreviewElement(id, image, title, author);
    fragment.appendChild(element);
  }

  listItems.appendChild(fragment);
}

/**
 * Creates a preview element for a book.
 * @param {string} id - The ID of the book.
 * @param {string} image - The URL of the book's image.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @returns {HTMLElement} The created preview element.
 */
function createPreviewElement(id, image, title, author) {
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = `
    <img class="preview__image" src="${image}" />
    
    <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
    </div>
  `;

  return element;
}

/**
 * Toggles the visibility of the search overlay.
 * @param {boolean} open - Whether to open or close the overlay.
 */
function toggleSearchOverlay(open) {
  searchOverlay.open = open;
}

/**
 * Toggles the visibility of the settings overlay.
 * @param {boolean} open - Whether to open or close the overlay.
 */
function toggleSettingsOverlay(open) {
  settingsOverlay.open = open;
}

/**
 * Handles the cancel button click event in the search overlay.
 */
function handleSearchOverlayCancel() {
  toggleSearchOverlay(false);
}

/**
 * Handles the cancel button click event in the settings overlay.
 */
function handleSettingsOverlayCancel() {
  toggleSettingsOverlay(false);
}

/**
 * Handles the click event on the header search button.
 */
function handleHeaderSearchClick() {
  toggleSearchOverlay(true);
  searchTitle.focus();
}

/**
 * Handles the click event on the header settings button.
 */
function handleHeaderSettingsClick() {
  toggleSettingsOverlay(true);
}

/**
 * Handles the click event on the close button in the active list overlay.
 */
function handleCloseListClick() {
  activeList.open = false;
}

/**
 * Handles the form submission event in the settings overlay.
 * @param {Event} event - The form submission event.
 */
function handleSettingsFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { theme } = Object.fromEntries(formData);

  if (theme === 'night') {
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
  } else {
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
  }

  toggleSettingsOverlay(false);
}

/**
 * Handles the form submission event in the search overlay.
 * @param {Event} event - The form submission event.
 */
function handleSearchFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    let genreMatch = filters.genre === 'any';

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }

    if (
      (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.author === 'any' || book.author === filters.author) &&
      genreMatch
    ) {
      result.push(book);
    }
  }

  page = 1;
  matches = result;

  if (result.length < 1) {
    messageList.classList.add('list__message_show');
  } else {
    messageList.classList.remove('list__message_show');
  }

  listItems.innerHTML = '';
  createPreviewElements(result.slice(0, BOOKS_PER_PAGE));
  listButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1;
  listButton.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  toggleSearchOverlay(false);
}

/**
 * Handles the click event on the list button to load more books.
 */
function handleListButtonClick() {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
    const element = createPreviewElement(id, image, title, author);
    fragment.appendChild(element);
  }

  listItems.appendChild(fragment);
  page += 1;
}

/**
 * Handles the click event on the list items to show the active book details.
 * @param {Event} event - The click event.
 */
function handleListItemsClick(event) {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      let result = null;

      for (const singleBook of books) {
        if (result) break;
        if (singleBook.id === node?.dataset?.preview) result = singleBook;
      }

      active = result;
    }
  }

  if (active) {
    activeList.open = true;
    blurList.src = active.image;
    imageList.src = active.image;
    titleList.innerText = active.title;
    subactiveList.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
    descriptionList.innerText = active.description;
  }
}

// Event listeners
searchOverlayCancelButton.addEventListener('click', handleSearchOverlayCancel);
settingsOverlayCancelButton.addEventListener('click', handleSettingsOverlayCancel);
headerSearch.addEventListener('click', handleHeaderSearchClick);
headerSettings.addEventListener('click', handleHeaderSettingsClick);
closeList.addEventListener('click', handleCloseListClick);
settingsForm.addEventListener('submit', handleSettingsFormSubmit);
searchForm.addEventListener('submit', handleSearchFormSubmit);
listButton.addEventListener('click', handleListButtonClick);
listItems.addEventListener('click', handleListItemsClick);
