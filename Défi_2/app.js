const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');


button1.addEventListener('click', loadCustomer);
button2.addEventListener('click', loadCustomers);

function loadCustomer (){
    const xhr = new XMLHttpRequest;
    xhr.open('get', 'customer.json', true);

    xhr.onload =function(){
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var ob1 = JSON.parse(xhr.response)
                document.getElementById('customer').innerHTML = "name: " + ob1.name + "<br>" + "company: " + ob1.company + "<br>" + "phone: " + ob1.phone +"<br>" + "id: " + ob1.id  
                ;
                
            }
            if (xhr.status == 404) {
                console.log("ERROR 404")
            }
        }
    }
    
    xhr.send();
};




function loadCustomers (){
    const xhr = new XMLHttpRequest;


    xhr.onload =function(){

            if (xhr.status == 200) {
                var ob2 = JSON.parse(xhr.response)
                var data='';
                for (var i in ob2){
                        data +="name: " + ob2[i].name + "<br>" + "company: " + ob2[i].company + "<br>" + "phone: " + ob2[i].phone +"<br>" + "id: " + ob2[i].id + "<hr>";
                    }
                    document.getElementById('customers').innerHTML = data

            }
            if (xhr.status == 404) {
                console.log("ERROR 404")
            }
        
    }    
    xhr.open('get', 'customers.json', true);

    xhr.send();
    
};
