bookSearch.js - element created in search

if clicked favorite will display favorite removes input bars and isbn formula

# code structure
- index.html - user interface
- style.css - user interface design
- index.js - main script

- FOLDERS
- scripts - scripts
- styles - styles of page



## scripts

All about scripts

### Structure
- barcode/   
    - barcode-scanning.js  -> start camera
    - showScanner.js       -> show camera

- component/
    - Announce.js          -> show announcement
    - Book.js              -> create book element
    - Loading.js           -> display loading

- favorite/
    - addToFavorite.js     -> add book to favorite
    - removeToFavorite.js  -> remove book from favorite
    - showFavorite.js      -> show favorite books

- google-books/
    - showGoogleBooks.js   -> show google books

- google-sign-in/
    - handleResponse.js    -> handle sign in response
    - initialize-oauth.js -> initialize oauth
    - syncToGoogleBook.js -> sync favorite to google books

- switch-content/
    - ToFavorites.js       -> switch to favorite page
    - ToHome.js            -> switch to home page

- display-book-info.js    -> display more book info
- display-book.js         -> check if match then calls searchBookIndiv.js to display all search book
- searchedBookIndiv.js    -> display all book in page searched and related
- showSearch.js           -> show search result
- validate-isbn.js        -> validate isbn

## styles

All about styles

### Structure
- main.css - main style
- announcement.css - announcement style
- book.css - book style
- card.css - card style
- favorite.css - favorite style
- google-book.css - google book style
- loading.css - loading style
- searchbar.css - searchbar style


display-book-info.js - display more book info
display-book.js - check if match then calls searchBookIndiv.js to display alll search book
searchedBookIndiv.js - display all book in page searched and related 

if clicked a book it will call display-book-info.js and display more info


- FAvorite

addToFavorite.js - adding the favorite to the local storage


localStorage 
 - favorite -> added to favorites
 - googleBook -> google books favorite


 ```
 <!-- <div class="book-content">
          <h1 class="book-title">One Piece, Vol. 1 (2003-09-02)</h1>
          <div class="card-bg">
            <img
              class="book-thumbnail"
              width="128px"
              src="https://books.google.com/books/content?id=sZ9ROjUamcsC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            />
            <p class="author">Eiichiro oda</p>
            <div class="button-container">
              <button class="add-favorite">
                <img class="svg" src="/svg/heart.svg" alt="" />
                <span class="text">Add Favorite</span>
              </button>
              <button class="more-info">
                <img class="svg" src="/svg/more-vertical.svg" alt="" />
                <span class="text">More Info</span>
              </button>
            </div>
  
            <p class="category">Categoryhgn';fn hfolbk</p>
            <p class="description" scroll>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              quae cupiditate quod perspiciatis veritatis temporibus quaerat
              autem alias vitae eligendi, recusandae nemo ullam velit pariatur
              ratione eos accusantium adipisci animi?
            </p>
          </div>
          <p class="additional-info">
            ISBN 10: 1234567890 <br />
            ISBN 13: 1234567890123 <br />
            Publisher: hello INc. <br />
            Book : 176 pages <br />
            Dimension: 26.00 cm x 26.00 cm x 26.00 cm
          </p>
        </div> -->
 ```