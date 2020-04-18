let creat=document.getElementById('creat');
let read=document.getElementById('read');
let update=document.getElementById('update');
let dlt=document.getElementById('dlt');

creat.addEventListener('click',addBook);

function addBook(){
   
} 



read.addEventListener('click',function getBook(){
    // fetch('db.json')
    // .then( (res) => res.json())
    // .then((data) => {
    //     var output = `<h1>Book:</h1>`;
    //     data.forEach(book => {
    //         output += `
    //         <ul>
    //             <li>Book: ${book.title}</li>
    //             <li>Author: ${book.author}</li>
    //             <li>Pages N°: ${book.pages}</li>
    //             <li>Country: ${book.country}</li>
    //             <li>Language: ${book.language}</li>
    //             <li>Year: ${book.year}</li>
    //             <li>Link: ${book.link}</li>
    //             <li>Image link: ${book.imagelink}</li>
    //         </ul>
    //         `;
    //     });
        
    //     document.getElementById('output').innerHTML = output;
    // });
    const xhr= new XMLHttpRequest();

    xhr.open('GET', 'db.json', true)
    xhr.onload = function (){
        if (xhr.readyState == 4 && xhr.status == 200){
            var res = JSON.parse(xhr.response)
            var output = '';
            for (let i in res) {
                output += `
                <ul>
                    <li>Book: ${res[i].title}</li>
                    <li>Author: ${res[i].author}</li>
                    <li>Pages N°: ${res[i].pages}</li>
                    <li>Country: ${res[i].country}</li>
                    <li>Language: ${res[i].language}</li>
                    <li>Year: ${res[i].year}</li>
                    <li>Link: ${res[i].link}</li>
                    <li>Image link: ${res[i].imagelink}</li>
                </ul>
                `;
                
            }
            document.getElementById('output').innerHTML = output;

        }
    }
    xhr.send();
});


update.addEventListener('click',function patchBook(){
    console.log(678)
});


dlt.addEventListener('click',function deletBook(){
    console.log(999)
});


