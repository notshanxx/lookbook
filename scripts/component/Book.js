// IMPORTS
import displayBookInfo from "../display-book-info.js";

// this is the book component
// will take care of book cover ,author ,title and year
// pass the book information and a boolean to disable the favorite button (mainly use for the google books page)

/*
  THIS FUNCTION CREATES/PASS THIS STRUCTURE

  <div class="book">

    <div class="image-container">
      <img
        src="http://books.google.com/books/content?id=4YJmPwAACAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;source=gbs_api"
        width="128"
        height="192"
      />
      <img
        src="https://flagsapi.com/GB/flat/64.png"
        alt="language flag for en"
        class="language-flag"
      />
    </div>

    <div class="info-container">
      <h3>Slam Dunk</h3>
      <i>Takehiko Inoue</i>
      <p>2006</p>
    </div>

  </div>

*/

export default function Book(book, disableFavoriteBtn) {
  // will take care of book cover displayed initially

  // desktop style purposes only
  function removeMargin() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const matchedBook = document.getElementById("matched-book");
      const relatedBook = document.getElementById("related-book");
      matchedBook.style.margin = "0 1rem";
      relatedBook.style.margin = "0 1rem";
    }
  }
  // format data to be used
  let formatData = {
    authors: book.volumeInfo.authors
      ? book.volumeInfo.authors.join(", ")
      : "Unknown",
    publishedDate: book.volumeInfo.publishedDate || "Unknown",
    imageUrl: book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.thumbnail
      : "https://via.placeholder.com/128x192?text=No+Image+Available",
  };

  const identifiers = book.volumeInfo.industryIdentifiers || [];
  console.log("hello ");
  console.log(book);
  console.log(JSON.stringify(book).replace(/'/g, "\\'").replace(/"/g, '\\"'));

  // CREATE MOTHER DIV

  // create a book element
  const bookEl = document.createElement("div");
  bookEl.classList.add("book");

  /*
  THE FOLLOWING CREATE THIS HTML STRUCTURES

  <div class="image-container">
      <img
        src="http://books.google.com/books/content?id=4YJmPwAACAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;source=gbs_api"
        width="128"
        height="192"
      />
      <img
        src="https://flagsapi.com/GB/flat/64.png"
        alt="language flag for en"
        class="language-flag"
      />
    </div>
  */

  // wrap image in a div
  const imgWrapper = document.createElement("div");
  const img = document.createElement("img");
  img.src = formatData.imageUrl;
  img.width = 128;
  img.height = 192;
  imgWrapper.classList.add("image-container");
  imgWrapper.appendChild(img);

  //map language to flag
  const languageMapping = {
    aa: "dj",
    af: "za",
    ak: "gh",
    sq: "al",
    am: "et",
    ar: {
      proposed_iso_3166: "aa",
      flag: "https://en.wikipedia.org/wiki/Flag_of_the_Arab_League",
      name: "Arab League",
    },
    hy: "am",
    ay: {
      proposed_iso_3166: "wh",
      flag: "https://en.wikipedia.org/wiki/Wiphala",
      name: "Wiphala",
    },
    az: "az",
    bm: "ml",
    be: "by",
    bn: "bd",
    bi: "vu",
    bs: "ba",
    bg: "bg",
    my: "mm",
    ca: "ad",
    zh: "cn",
    hr: "hr",
    cs: "cz",
    da: "dk",
    dv: "mv",
    nl: "nl",
    dz: "bt",
    en: "gb",
    et: "ee",
    ee: {
      proposed_iso_3166: "ew",
      flag:
        "https://en.wikipedia.org/wiki/Ewe_people#/media/File:Flag_of_the_Ewe_people.svg",
      name: "Ewe",
    },
    fj: "fj",
    fil: "ph",
    fi: "fi",
    fr: "fr",
    ff: {
      proposed_iso_3166: "ff",
      flag:
        "https://www.nationstates.net/images/flags/uploads/fulah__403173.png",
      name: "Fulah",
    },
    gaa: "gh",
    ka: "ge",
    de: "de",
    el: "gr",
    gn: {
      proposed_iso_3166: "gx",
      flag: "https://www.crwflags.com/fotw/flags/xg.html",
      name: "Guarani",
    },
    gu: "in",
    ht: "ht",
    ha: {
      proposed_iso_3166: "ha",
      flag: "https://www.crwflags.com/fotw/flags/ng%7Dhausa.html",
      name: "Hausa",
    },
    he: "il",
    hi: "in",
    ho: "pg",
    hu: "hu",
    is: "is",
    ig: "ng",
    id: "id",
    ga: "ie",
    it: "it",
    ja: "jp",
    kr: "ne",
    kk: "kz",
    km: "kh",
    kmb: "ao",
    rw: "rw",
    kg: "cg",
    ko: "kr",
    kj: "ao",
    ku: "iq",
    ky: "kg",
    lo: "la",
    la: "va",
    lv: "lv",
    ln: "cg",
    lt: "lt",
    lu: "cd",
    lb: "lu",
    mk: "mk",
    mg: "mg",
    ms: "my",
    mt: "mt",
    mi: "nz",
    mh: "mh",
    mn: "mn",
    mos: "bf",
    ne: "np",
    nd: "zw",
    nso: "za",
    no: "no",
    nb: "no",
    nn: "no",
    ny: "mw",
    pap: "aw",
    ps: "af",
    fa: "ir",
    pl: "pl",
    pt: "pt",
    pa: "in",
    qu: "wh",
    ro: "ro",
    rm: "ch",
    rn: "bi",
    ru: "ru",
    sg: "cf",
    sr: "rs",
    srr: "sn",
    sn: "zw",
    si: "lk",
    sk: "sk",
    sl: "si",
    so: "so",
    snk: "sn",
    nr: "za",
    st: "ls",
    es: "es",
    sw: {
      proposed_iso_3166: "sw",
      flag: "https://commons.wikimedia.org/wiki/File:Flag_of_Swahili.gif",
      name: "Swahili",
    },
    ss: "sz",
    sv: "se",
    tl: "ph",
    tg: "tj",
    ta: "lk",
    te: "in",
    tet: "tl",
    th: "th",
    ti: "er",
    tpi: "pg",
    ts: "za",
    tn: "bw",
    tr: "tr",
    tk: "tm",
    uk: "ua",
    umb: "ao",
    ur: "pk",
    uz: "uz",
    ve: "za",
    vi: "vn",
    cy: "gb",
    wo: "sn",
    xh: "za",
    yo: {
      proposed_iso_3166: "yo",
      flag: "https://www.crwflags.com/fotw/flags/ng%7Dyorub.html",
      name: "Yoruba",
    },
    zu: "za",
  };

  // adding a language flag
  if (book.volumeInfo.language) {
    let flagSrc = `https://flagsapi.com/${
      languageMapping[
        book.volumeInfo.language.slice(0, 2)
      ].toUpperCase()
    }/flat/64.png`;
    // if the language mapping for the language is an object, use the flag property in that object
    // otherwise, use the language code as the flag src
    // const languageFlagMapping = languageMapping[book.volumeInfo.language.slice(0, 2)];
    // if (typeof languageFlagMapping === "object") {
    //   flagSrc = languageFlagMapping.flag;
    // }

    const languageImg = document.createElement("img");
    languageImg.src = flagSrc;
    languageImg.alt = `language flag for ${book.volumeInfo.language}`;
    languageImg.classList.add("language-flag");
    imgWrapper.appendChild(languageImg);
  }

  bookEl.appendChild(imgWrapper);

  /*
  The following creates this HTML structure
    <div class="info-container">
      <h3>Slam Dunk</h3>
      <i>Takehiko Inoue</i>
      <p>2006</p>
    </div>
  */

  // wrap other info in a div
  const otherInfo = document.createElement("div");
  otherInfo.classList.add("info-container");

  // add title and subtitle
  const h3 = document.createElement("h3");
  h3.textContent = `${book.volumeInfo.title} ${
    book.volumeInfo.subtitle ? `(${book.volumeInfo.subtitle})` : ""
  }`;
  // add click event to h3
  h3.addEventListener("click", () => {
    displayBookInfo(JSON.stringify(book), disableFavoriteBtn);
    removeMargin();
  });

  otherInfo.appendChild(h3);
  // add authors
  const authors = document.createElement("i");
  authors.textContent = formatData.authors;
  otherInfo.appendChild(authors);

  // add publish date
  const publishDate = document.createElement("p");
  publishDate.textContent = formatData.publishedDate;
  otherInfo.appendChild(publishDate);

  bookEl.appendChild(otherInfo);

  // return the HTML structure
  return bookEl;
}
