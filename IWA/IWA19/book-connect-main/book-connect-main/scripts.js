    import {authors, books, genres, BOOKS_PER_PAGE} from './data.js'

/**************Buttons **************/

    const settingsBtn = document.querySelector('[data-header-settings]');
    const settingsCancelBtn = document.querySelector('[data-settings-cancel]');
    const closeButton = document.querySelector('[data-list-close]');

const showMoreButton = document.querySelector('[data-list-button]')

    const matches = books;
    const page = 1;

    const settings = document.querySelector('[data-settings-overlay]');

    const settingsHandler =(event)=>{
    event.preventDefault();
    settings.style.display = 'block';
    console.log(settingsBtn);
    console.log(settings);

    }
    settingsBtn.addEventListener('click',settingsHandler);


    const settingsCancelHandler =(event)=>{
    event.preventDefault();
    settings.style.display = '';
    console.log(settingsCancelBtn);
    console.log(settings);

    }
    settingsCancelBtn.addEventListener('click',settingsCancelHandler);




    const previewOverlay = document.querySelector('[data-list-active]');

    const createpreview = ({ author, image, title, id, description, published}) => {
    const divPreview = document.createElement('div') 
    divPreview.classList.add("preview")
    divPreview.id = id
    const htmlblock = `
    <img class= "preview__image" data-image-${id} src="${image}" id= "${id}">
    <div class= "preview__info" data-info-${id} id= "${id}">
          <h2 class= "preview__title" data-title-${id} id= "${id}">${title}</h2>
          <h3 class= "preview__author" data-author-${id}  id= "${id}">${authors[author]}</h3>
          <dialog data-description-${id}>${description}</dialog>
          <dialog data-subtitle-${id}>${published}</dialog>
     </div>`
            
    divPreview.innerHTML = htmlblock
            
    return divPreview                       
    };

    const fragment = document.createDocumentFragment()
    const extracted = books.slice(0, 36)
    console.log (extracted.length)

    const displayDiscription = (event) => {
        previewOverlay.style.display = 'block';

    const hero = document.querySelector('[data-list-blur]')
    const cover = document.querySelector('[data-list-image]')
    const picture = document.querySelector(`[data-image-${event.target.id}]`).getAttribute('src')
    const bookTitle = document.querySelector('[data-list-title]')
    const description = document.querySelector('[data-list-description]')
    const subTitle = document.querySelector('[data-list-subtitle]')

    cover.setAttribute('src', picture)
    hero.setAttribute('src', picture)
    bookTitle.innerHTML = document.querySelector(`[data-title-${event.target.id}]`).innerHTML 
    description.innerHTML = document.querySelector(`[data-description-${event.target.id}]`).innerHTML;
    const year = new Date(document.querySelector(`[data-subtitle-${event.target.id}]`).innerHTML).getFullYear()
   const name = document.querySelector(`[data-author-${event.target.id}]`).innerHTML
   subTitle.innerHTML = `${name}(${year})`
    } 
    for (let { author, image, title, id, description, published} of extracted) {
      const preview = createpreview({
          author,
          image,
          title,
          id,
          description,
          published
      })
        
    preview.addEventListener('click', displayDiscription)
    fragment.appendChild(preview)
    
}
    document.querySelector('[data-list-items]').appendChild(fragment)


    const genresSelect = document.querySelector('[data-search-genres]');
    const authorsSelect = document.querySelector('[data-search-authors]');

    const genresFragment = document.createDocumentFragment();
    const allGenresOption = document.createElement('option');

    allGenresOption.value = 'any';
    allGenresOption.innerText = 'All Genres';
    genresFragment.appendChild(allGenresOption);

    for (let [id, name] of Object.entries(genres)) {
    const elementOption = document.createElement('option');
    elementOption.value = id;
    elementOption.innerText = name;
    genresFragment.appendChild(elementOption);
    console.log(elementOption);
    //   console.log(id, name);
    }

    genresSelect.appendChild(genresFragment);

    const authorsFragment = document.createDocumentFragment();
    const allAuthorsOption = document.createElement('option');
    allAuthorsOption.value = 'any';
    allAuthorsOption.innerText = 'All Authors';
    authorsFragment.appendChild(allAuthorsOption);

    for (const [id, name] of Object.entries(authors)) {
    const option = document.createElement('option');
    option.value = id;
    option.innerText = name;
    authorsFragment.appendChild(option);
    }

    authorsSelect.appendChild(authorsFragment);


/******>DAY && NIGHT<******/
/*Night/Dark and Light Modes*/
    const day = {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    };
    const night = {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    };

/******>DAY && NIGHT BUTTON<******/

    const dataSettingsTheme = document.querySelector('[data-settings-theme]');
    const saveButton = document.querySelector("body > dialog:nth-child(5) > div > div > button.overlay__button.overlay__button_primary")

/******>DAY && NIGHT TOGGLE<******/
    saveButton.addEventListener('click', (event) =>{
    event.preventDefault()
    if (dataSettingsTheme.value === 'day') {
    document.querySelector('body').style.setProperty('--color-dark', day.dark)
    document.querySelector('body').style.setProperty('--color-light', day.light)
    appoverlays.settingsOverlay.style.display = '';
    }

    if (dataSettingsTheme.value === 'night') {
    document.querySelector('body').style.setProperty('--color-dark', night.dark)
    document.querySelector('body').style.setProperty('--color-light', night.light)
    appoverlays.settingsOverlay.style.display = '';
    }
    appoverlays.settingsOverlay.close();
    });



/******>DAY && NIGHT TOGGLE ENDS HERE<******/






/********************************SEARCH********************************/
const searchIconOverlay = document.querySelector('[data-search-overlay]')
/****************************SEARCH OPEN****************************/

const searchIconBtn = document.querySelector('[class="header__button"]');
const searchIconHandler =(event)=>{
event.preventDefault();
searchIconOverlay.show();
}
searchIconBtn.addEventListener('click',searchIconHandler);
/****************************SEARCH CLOSE****************************/
const searchCloseBtn = document.querySelector('[data-search-cancel]');
const searchCloseHandler =(event)=>{
event.preventDefault();
searchIconOverlay.close();
}
searchCloseBtn.addEventListener('click',searchCloseHandler);
/*
*
*
*
*This code is used to implement a search feature for a list of books. When the user submits the search form, the code extracts the form data and filters the list of books based on the search criteria.
*
*
*/
/****>DATA SEARCH OR RETURNING RESULTS FOR SEARCHING<*****/
const searchForm = document.querySelector('[data-search-form]');
    const authorsArr = Object.entries(authors);
    const genresArr = Object.entries(genres);
    
searchForm.addEventListener('submit', event => {
event.preventDefault();
  const formData = new FormData(searchForm);
  const searchTitle = formData.get('title').toLowerCase();
  const searchGenreKey = formData.get('genre');
  const searchGenre = searchGenreKey === 'any' ? null : genres[searchGenreKey];
  const searchAuthorKey = formData.get('author');
  const searchAuthor = searchAuthorKey === 'any' ? null : authors[searchAuthorKey];
  const booksArr = Object.values(books);
  
  const result = [];

  for (let i = 0; i < booksArr.length; i++) {
    const book = booksArr[i];
    // Check if book title includes search phrase
    const titleMatch = searchTitle === '' || book.title.toLowerCase().includes(searchTitle);
    // Check if book author matches selected author
    const authorMatch = searchAuthor === 'All Authors' || authorsArr.some(author => authors[author] === book[author] || authors[author] === searchAuthor);
    // Check if book genre matches selected genre
    const genreMatch = searchGenre === 'All Genres' || genresArr.some(genre => genres[genre] === book[genre] || genres[genre] === searchGenre);
    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }
  }
  /****>DISPLAY BOOK SEARCH RESULTS<****/
  const resultList = document.querySelector('[data-list-items]');
  resultList.innerHTML = ''; // clear previous search results
  if (result.length > 0) {
    for (const book of result) {
      const bookElement = document.createElement('div');
      bookElement.classList.add('preview__info');

      const genreNames = book.genres.map(genreId => genres[genreId]);

      bookElement.innerHTML = `
        <img class = "preview__image" src="${book.image}" alt="${book.title}">
        <h2 class = "preview__title">${book.title}</h2>
        <p class = "preview__author">Author: ${authors[book.author]}</p>
        <p class="preview__genre">Genre: ${genreNames[book.genres.innerText]}</p>

      `;
      resultList.appendChild(bookElement);
    }
  } else {
    resultList.innerHTML = '<p>No results found.</p>';
  }
  console.log(`Search Title: ${searchTitle}`);
  console.log(`Search Genre: ${searchGenre}`);

  console.log(`Search Author: ${searchAuthor}`);
    });
/**********************SEARCH END**************************/


/*******************.Show More button doesn't work*******************/
document.querySelector('[data-list-button]').innerHTML = /* html */ [
  `<span>Show more</span>
  <span class="list__remaining" data-list-remaining> (${books.length - 36})</span>`,
]
showMoreButton.addEventListener('click', (event)=>{
  event.preventDefault()
  page += 1;
  let rangeMax = page * BOOKS_PER_PAGE
  let rangeMin = rangeMax - 36
  extracted = books.slice(rangeMin, rangeMax)
  for (let { author, image, title, id, description, published} of extracted) {
      const preview = createpreview({
          author,
          image,
          title,
          id,
          description,
          published
      })
      preview.addEventListener('click', displayDiscription)
      document.querySelector('[data-list-items]').appendChild(preview)
      document.querySelector('[data-list-remaining]').innerHTML = `(${matches.length - rangeMax > 0 ? matches.length - rangeMax : 0})`
  };
})