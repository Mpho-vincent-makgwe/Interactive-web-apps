    import {authors, books, genres, BOOKS_PER_PAGE} from './data.js'

    const matches = books;
    const page = 1;

    const searchBtn = document.querySelector('[class="header__button"]');

    const searchOverlay = document.querySelector('[data-search-overlay]')

    const searchHandler =(event)=>{
    event.preventDefault();
    searchOverlay.show();
    console.log(searchBtn);
    console.log(searchOverlay);

    }
    searchBtn.addEventListener('click',searchHandler);






    const settings = document.querySelector('[data-settings-overlay]');


    const settingsBtn = document.querySelector('[data-header-settings]');



    const settingsHandler =(event)=>{
    event.preventDefault();
    settings.style.display = 'block';
    console.log(settingsBtn);
    console.log(settings);

    }
    settingsBtn.addEventListener('click',settingsHandler);

    const settingsCancelBtn = document.querySelector('[data-settings-cancel]');



    const settingsCancelHandler =(event)=>{
    event.preventDefault();
    settings.style.display = '';
    console.log(settingsCancelBtn);
    console.log(settings);

    }
    settingsCancelBtn.addEventListener('click',settingsCancelHandler);



    const dataBtn = document.querySelector('[data-list-button]');
    // const dataOverlay = document.querySelector('[data-list-active]');

    // const dataOvHandler =(event)=>{
    // event.preventDefault();
    // dataOverlay.style.display = 'block';

    // }
    // dataBtn.addEventListener('click', dataOvHandler)

    /*if (!books || !Array.isArray(books)) {
    throw new Error('Source required');
    }*/
    /*if (!range && range.length < 2) {
    throw new Error('Range must be an array with two numbers')
    }*/
    const closeButton = document.querySelector('[data-list-close]');

    closeButton.addEventListener('click', () => {overlay.close()});


    const overlay = document.querySelector('[data-list-active]');
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
    overlay.style.display = 'block';

    
    const dialog = document.querySelector('[data-list-active]');
    const hero = document.querySelector('[data-list-blur]')
    hero.classList.add("overlayblur")
    const cover = document.querySelector('[data-list-image]')
    const picture = document.querySelector(`[data-image-${event.target.id}]`).getAttribute('src')
    const bookTitle = document.querySelector('[data-list-title]')
    const description = document.querySelector('[data-list-description]')
    const subTitle = document.querySelector('[data-list-subtitle]')

    dialog.classList.add('overlay'); // add the overlay class to the dialog element
    cover.setAttribute('src', picture)
    hero.setAttribute('src', picture)
    bookTitle.innerHTML = document.querySelector(`[data-title-${event.target.id}]`).innerHTML 
    description.innerHTML = document.querySelector(`[data-description-${event.target.id}]`).innerHTML;
    const year = new Date(document.querySelector(`[data-subtitle-${event.target.id}]`).innerHTML).getFullYear()
   const name = document.querySelector(`[data-author-${event.target.id}]`).innerHTML
   subTitle.innerHTML = `${name}(${year})`
    } 

    for (let i = 0; i < extracted.length; i++) {
  const { author, image, title, id, description, published} = extracted[i];
    const preview = createpreview({
        author,
        image,
        title,
        id,
        description,
        published,
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


/*Night/Dark and Light Modes*/
    const day = {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    };
    const night = {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    };


    const dataSettingsTheme = document.querySelector('[data-settings-theme]');
    const saveButton = document.querySelector("body > dialog:nth-child(5) > div > div > button.overlay__button.overlay__button_primary")


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








     const dataListButton = document.querySelector('[data-list-button]');
    // displayPreview(extractedBooks, initialFragment);
    // let extractedBooks = matches.slice(0, BOOKS_PER_PAGE)
    // let remaining = matches.length - booksDisplayed.length;
    // dataListButton.innerHTML = /* html */ `
    //         <span>Show more</span><span class="list__remaining"> (${remaining})</span>
    //     `

    // alert("Show more (books.length - BOOKS_PER_PAGE)") 

    // dataListButton.show() = (!matches.length - [page * BOOKS_PER_PAGE] > 0)

    dataListButton.innerHTML = /* html */[ `
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>'
    `]
    // const searchCancelBtn = document.querySelector('[data-search-cancel]');

    dataListButton.addEventListener('click', (event)=>{
        event.preventDefault()
        page += 1
        let rangeMax = [page * BOOKS_PER_PAGE];
        let rangeMin = [rangeMax - 36];
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
    // const searchCancelHandler =(event)=>{
    // event.preventDefault();
    // searchOverlay.close();
    // console.log(searchCancelBtn);

    // }
    // searchCancelBtn.addEventListener('click',searchCancelHandler);


    document.querySelector('[data-search-cancel]').click().close()
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
/*
document.querySelector("body > dialog:nth-child(4) > div > div > button.overlay__button.overlay__button_primary").addEventListener('click', (event) => {
    event.preventDefault()
    const searchForm = document.querySelector('[data-search-form]')
    const formData = {
        authors: document.querySelector('[data-search-authors]').value,
        title: document.querySelector('[data-search-title]').value,
        genre: document.querySelector('[data-search-genres]').value
    }
    console.log (formData.authors, formData.title, formData.genre)
    */

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

    //     if (display.length < 2){
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
