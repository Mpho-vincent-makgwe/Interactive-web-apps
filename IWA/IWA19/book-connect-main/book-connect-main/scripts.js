import {authors, books, genres} from './data.js'

const matches = books;
const page = 1;

// const searchBtn = document.querySelector('[data-header-search]');

// const searchOverlay = document.querySelector('[data-search-overlay]')

// const searchHandler =(event)=>{
//     event.preventDefault();
//     searchOverlay.style.display = 'block';
//     console.log(searchBtn);
//     console.log(searchOverlay);

// }
// searchBtn.addEventListener('click',searchHandler);


// const searchCancelBtn = document.querySelector('[data-search-cancel]');


// const searchCancelHandler =(event)=>{
//     event.preventDefault();
//     searchOverlay.style.display = '';
//     console.log(searchCancelBtn);

// }
// searchCancelBtn.addEventListener('click',searchCancelHandler);



// const settings = document.querySelector('[data-settings-overlay]');


// const settingsBtn = document.querySelector('[data-header-settings]');



// const settingsHandler =(event)=>{
//     event.preventDefault();
//     settings.style.display = 'block';
//     console.log(settingsBtn);
//     console.log(settings);

// }
// settingsBtn.addEventListener('click',settingsHandler);

// const settingsCancelBtn = document.querySelector('[data-settings-cancel]');



// const settingsCancelHandler =(event)=>{
//     event.preventDefault();
//     settings.style.display = '';
//     console.log(settingsCancelBtn);
//     console.log(settings);

// }
// settingsCancelBtn.addEventListener('click',settingsCancelHandler);



// const dataBtn = document.querySelector('[data-list-button]');
// const dataOverlay = document.querySelector('[data-list-active]');

// const dataOvHandler =(event)=>{
// event.preventDefault();
// dataOverlay.style.display = 'block';

// }
// dataBtn.addEventListener('click', dataOvHandler)

// if (!books || !Array.isArray(books)) {
//     throw new Error('Source required');
//   }
/*if (!range && range.length < 2) {
    throw new Error('Range must be an array with two numbers')
}*/

   const day = {
      dark = '10, 10, 20',
      light = '255, 255, 255',
    };
    const night = {
      dark = '255, 255, 255',
      light = '10, 10, 20',
    };
  
  
let fragment = document.createDocumentFragment()
const extracted = books.slice(0, 36)

function createPreview({ author, id, image, title }) {
    // implementation code goes here
    const preview = document.createElement("div");
preview.classList.add("preview");

const img = document.createElement("img");
img.src = image;
img.alt = title;
img.classList.add("preview__image"); // add a new class to the img element
preview.appendChild(img);

const titleEl = document.createElement("h2");
titleEl.textContent = title;
titleEl.classList.add("preview__title");
preview.appendChild(titleEl);

const authorEl = document.createElement("p");
authorEl.textContent = `By ${authors[author]}`;
authorEl.classList.add("preview__author");
preview.appendChild(authorEl);

const link = document.createElement("a");
link.href = `article.html?id=${id}`;
link.textContent = "Read more";
// link.classList.add("overlay");
link.target = "_blank";
preview.appendChild(link);

return preview;
}

for (let i = 0; i < extracted.length; i++) {
const { author, image, title, id } = extracted[i];
const preview = createPreview({
    author,
    id,
    image,
    title,
});
fragment.appendChild(preview);
}


document.querySelector('[data-list-items]').appendChild(fragment)


const genresSelect = document.querySelector('[data-search-genres]');
const authorsSelect = document.querySelector('[data-search-authors]');

const genresFragment = document.createDocumentFragment();
const allGenresOption = document.createElement('option');
allGenresOption.value = 'any';
allGenresOption.innerText = 'All Genres';
genresFragment.appendChild(allGenresOption);

for (const [id, name] of Object.entries(genres)) {
  const option = document.createElement('option');
  option.value = id;
  option.innerText = name;
  genresFragment.appendChild(option);
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

const dataSettingsTheme = document.querySelector('[data-settings-theme]');

dataSettingsTheme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'

const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

document.documentElement.style.setProperty('--color-dark', css[v].dark);
document.documentElement.style.setProperty('--color-light', css[v].light);

const dataListButton = document.querySelector('[data-list-button]');

dataListButton = "Show more (books.length - BOOKS_PER_PAGE)"

dataListButton.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

dataListButton.innerHTML = /* html */ `
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
`

// data-search-cancel.click() { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// const handleDataListButton = () => {
//     // event.preventDefault();
//     const dataListItems = document.querySelector("[data-list-items]");
//     const startIndex = page * BOOKS_PER_PAGE;
//     const endIndex = (page + 1) * BOOKS_PER_PAGE;
//     const previewFragment = createPreviewsFragment(matches, startIndex, endIndex);
//     dataListItems.appendChild(previewFragment);
//     updateRemaining(); // assuming updateRemaining() is a globally defined function
//     page = page + 1;
//   };
  
//   const dataListButton = document.querySelector("[data-list-button]");
//   dataListButton.addEventListener("click", handleDataListButton);
  

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if (display.length < 0){
//         document.querySelector('[data-list-message]').show();
//     } else{
//         document.querySelector('[data-list-message]').remove()
//     };
    

//     data-list-items.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])

//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         } 
//     }
    
//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }
