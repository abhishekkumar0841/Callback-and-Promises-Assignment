function arrangeInAlpha(books, callbackFn){
    const titles = books.map((book) => book.title);
    titles.sort().forEach(callbackFn);
}

function callback(title){
    console.log(title);
}

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
  ];

  arrangeInAlpha(books, callback);
