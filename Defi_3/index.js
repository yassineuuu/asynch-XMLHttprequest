let creat=document.getElementById('creat');
let read=document.getElementById('read');
let update=document.getElementById('update');
let dlt=document.getElementById('dlt');

creat.addEventListener('click',function addBook(){
    fetch('db.json')
    .then( (response) => response.json())
    .then((books) => {
        var output = `<h1>Book:</h1>`;
        for (let i in books){
            // output += 
            // `<ul>
            //     <li>Book: ${books.books[i].title}</li>
            //     <li>Author: ${books.books[i].author}</li>
            //     <li>Year: ${books.books[i].year}</li>
            //     <li>N° of pages: ${books.books[i].pages}</li>
            // </ul>`;
            console.log(books[i][1].author)
            output += books[i][1].author
        }
        document.getElementById('output').innerHTML = output;
    }); 
});


read.addEventListener('click',function getBook(){
    console.log(456)
});


update.addEventListener('click',function patchBook(){
    console.log(678)
});


dlt.addEventListener('click',function deletBook(){
    console.log(999)
});


