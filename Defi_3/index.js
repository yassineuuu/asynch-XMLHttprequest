let creat=document.getElementById('creat');
let read=document.getElementById('read');
let update=document.getElementById('update');
let dlt=document.getElementById('dlt');

creat.addEventListener('click',addBook);

function addBook(){
    var url = "http://localhost:3000/books"
    var bookData={}
    bookData.id = 95;
    bookData.author = "George R. R. Martin";
    bookData.country = "États-Unis"
    bookData.imageLink = "https://images-na.ssl-images-amazon.com/images/I/417qjDCskML._SX340_BO1,204,203,200_.jpg";
    bookData.language = "English";
    bookData.link = "https://fr.wikipedia.org/wiki/Le_Tr%C3%B4ne_de_fer";
    bookData.pages = 960;
    bookData.title = "A Game Of Thrones"
    bookData.year = 1999;
    
    var json =JSON.stringify(bookData);

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    // xhr.onload = function () {
    //     var book = JSON.parse(xhr.responseText);
    //     if (xhr.readyState == 4 && xhr.status == "201") {
    //         console.table(book);
    //     } else {
    //         console.error(book);
    //     }
    // }
    // xhr.send(json);
    
    const postBOOk= async function() {
        let data = await fetch(url,{
        method: 'POST',
        body: json,
        headers:{'Content-type':'application/json'}

    })
                .then((res)=>res.json()).then(console.log(data))

    }
    postBOOk();
    
}

  
read.addEventListener('click',function getBook(){
    const url = 'http://localhost:3000/books';
    fetch(url)
    .then( (res) => res.json())
    .then((data) => {
        var output = `
        <thead>
            <tr>
                
                <th scope="col">Book:</th>
                <th scope="col">Author:</th>
                <th scope="col">Pages N°:</th>
                <th scope="col">Country:</th>
                <th scope="col">Language:</th>
                <th scope="col">Year:</th>
                <th scope="col">Link:</th>
                <th scope="col">Image link:</th>
            </tr>
        </thead>`;
        data.forEach(book => {
            output += `
            
                    <tr>
                        <td> ${book.title}</td>
                        <td> ${book.author}</td>
                        <td> ${book.pages}</td>
                        <td> ${book.country}</td>
                        <td> ${book.language}</td>
                        <td> ${book.year}</td>
                        <td> ${book.link}</td>
                        <td> ${book.imageLink}</td>
                    </tr>
            `;
        });
        
        document.getElementById('output').innerHTML = output;
    });
    // const xhr= new XMLHttpRequest();

    // xhr.open('GET', url, true)
    // xhr.onload = function (){
    //     if (xhr.readyState == 4 && xhr.status == 200){
    //         var res = JSON.parse(xhr.response)
    //         var output = '';
    //         for (let i in res) {
    //             output += `
    //             <ul>
    //                 <li>Book: ${res[i].title}</li>
    //                 <li>Author: ${res[i].author}</li>
    //                 <li>Pages N°: ${res[i].pages}</li>
    //                 <li>Country: ${res[i].country}</li>
    //                 <li>Language: ${res[i].language}</li>
    //                 <li>Year: ${res[i].year}</li>
    //                 <li>Link: ${res[i].link}</li>
    //                 <li>Image link: ${res[i].imagelink}</li>
    //             </ul>
    //             `;
                
    //         }
    //         document.getElementById('output').innerHTML = output;

    //     }
    //     else {
    //         console.error(res);
    //     }
    // }
    // xhr.send();
});


update.addEventListener('click',function patchBook(){
    var url = "http://localhost:3000/books/1"

    var bookdata = {};
    bookdata.id= 1,
    bookdata.author= "Yassine MAKHLOUK",
    bookdata.country = "MOROCCO",
    bookdata.imageLink = "images/things-fall.jpg",
    bookdata.language = "Darija",
    bookdata.link = "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    bookdata.pages = 209,
    bookdata.title = "Thrab Ntab3ak.",
    bookdata.year = 1958
    var json = JSON.stringify(bookdata);
    
    // var xhr = new XMLHttpRequest();
    // xhr.open("PUT", url, true);
    // xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    // xhr.onload = function () {
    //     var res = JSON.parse(xhr.responseText);
    //     if (xhr.readyState == 4 && xhr.status == "200") {
    //         console.table(res);
    //     } else {
    //         console.error(res);
    //     }
    // }
    // xhr.send(json);


    // fetch(url,{
    //     method: 'PUT',
    //     body: json,
    //     headers:{'Content-type':'application/json'}
    // })
    // .then((res)=>res.json()).then((data))

    async function patchBook (){
        let response = await  fetch(url,{
                    method: 'PUT',
                    body: json,
                    headers:{'Content-type':'application/json'}
                })
        let data = response.json()
        console.log(data)
    }
    patchBook()

})


dlt.addEventListener('click',function deletBook(){

    var url = "http://localhost:3000/books"

        // var xhr = new XMLHttpRequest();
        // xhr.open("DELETE", url+'/95', true);
        // xhr.onload = function () {
        //     var book = JSON.parse(xhr.responseText);
        //     if (xhr.readyState == 4 && xhr.status == "200") {
        //         console.table(book);
        //     } else {
        //         console.error(book);
        //     }
        // }
        // xhr.send(null);
        async function dltBook (){
            let response =await fetch(url+'/95',{
                method : 'DELETE',
                headers : {'Content-type' : 'application/json'}
            })
            let data = res.json()
            console.log(data)
        }

        // fetch(url+'/95',{
        //     method: 'DELETE',
        //     headers:{'Content-type':'application/json'}
        // })
        // .then((res)=>res.json()).then((data))
});
