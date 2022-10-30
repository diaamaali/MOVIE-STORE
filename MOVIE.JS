src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
 let content = document.getElementById ('content');
  let container = document.getElementById ('container');

  let data = [{
    name:'gone girl',
    category:'romantic',
    icon:'1.jpg',
    input:'file:///C:/Users/Admin/Desktop/front%20end/film1.html',
    parg:' its a fun movie, we love watching it a lot. This film is characterized by high technique and quality',
    id:"1"
  },
{
    name:'Joker',
    category:'horror',
    icon:'2.png',
    input:'file:///C:/Users/Admin/Desktop/front%20end/film2.html',
    parg:' its a fun movie, we love watching it a lot. This film is characterized by high technique and quality',
    id:"2"
},
{
    name:'Dunkire',
    category:'action movie',
    icon:'3.jpg',
    input:'file:///C:/Users/Admin/Desktop/front%20end/film3.html',
    parg:' its a fun movie, we love watching it a lot. This film is characterized by high technique and quality',
    id:"3"
 },
 {
    name:'luna',
    category:'classic',
    icon:'4.jpg',
    input:'file:///C:/Users/Admin/Desktop/front%20end/film4.html',
    parg:' its a fun movie, we love watching it a lot. This film is characterized by high technique and quality',
    id:"4"
 },
 {
    name:'free guy',
    category:'clasic',
    icon:'5.jpg',
    input:'file:///C:/Users/Admin/Desktop/front%20end/film5.html',
    parg:' its a fun movie, we love watching it a lot. This film is characterized by high technique and quality',
    id:"5"
 },
 {
    name:'neruda',
    category:'clasic',
    icon:'6.jpg',
    input:'file:///C:/Users/Admin/Desktop/front%20end/film6.html',
    parg:' its a fun movie, we love watching it a lot. This film is characterized by high technique and quality',
    id:"6"
 },
 {
    name:'trailer',
    category:'clasic',
    icon:'7.jpg',
    input:'file:///C:/Users/Admin/Desktop/front%20end/film7.html',
    parg:' its a fun movie, we love watching it a lot. This film is characterized by high technique and quality',
    id:"7"
 },
 {
    name:'gorgeo ',
    category:'romantic',
    icon:'8.jpeg',
    input:'file:///C:/Users/Admin/Desktop/front%20end/film8.html',
    parg:' its a fun movie, we love watching it a lot. This film is characterized by high technique and quality',
    id:"8"
 }



];


for( let i=0; i<data.length; i++){
    
content.innerHTML+= 
`
<div class="card" id="${data[i].id}">
 <div class="icon">
 <img src="${data[i].icon}" height="100px " width="100px" >
      </div>

      <div class="info">
      <h3  class="movie_item" >${data[i].name}</h3>
      <h6>${data[i].category}</h6>
      </div>

     
      <div class="input">
         <a href=${data[i].input} target="_blank" >Watch  </a>            
      </div>

     <div class="parg">
         <p > ${data[i].parg} .</p>  
     </div>
     

     <button  id="deleteBtn"  onclick="document.getElementById('pobab').style.display='block'">Delete </button>

    
     <button id="UpdateBtn" onclick="document.getElementById('myModalUpdate').style.display='block'">Update</button>
     
 
     </div>
  

     `;

 }
//............................................................

//for search

let search=document.getElementById ('input');
search.addEventListener('keyup',() =>{

    let searchValue= search.value.trim().toLocaleLowerCase();
    data.forEach((element, index) => {
        if(!element.name.trim().toLocaleLowerCase().includes(searchValue)) {
            let item =document.getElementById(element.id);
            item.style.display = 'none'
        }
    });

})
//......................................................................

/////// add movie modal .......................................
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function validateForm() {
  debugger
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return;
  }
    let y = document.forms["myForm"]["fgateg"].value;
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }

    let z = document.forms["myForm"]["ficon"].value;
  if (z == "") {
    alert("Name must be filled out");
    return false;
  }

    let w = document.forms["myForm"]["fparg"].value;
  if (w == "") {
    alert("Name must be filled out");
    return false;
  }
  let id = data.length + 1;

  let r =data.push('{x,y,z,w}');
  content.appendChild(r);
  console.log(data);
  }

//..........................................................................
//delete modal
// Get the modal
var pobab = document.getElementById('pobab');
var deletebtn = document.getElementsByClassName('deletebtn');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == pobab) {
    pobab.style.display = "none";
  }
}
deletebtn.addEventListener= function() {
  data.remove(`${data[i].id}`,1);
}

//.................................................................................
/////// update movie  ///////////////////////////////////////////////////////////////////
// Get the modal
let myModalUpdate = document.getElementById("myModalUpdate");
// Get the <span> element that closes the modal
let idid = document.getElementById("idid");

// When the user clicks on <span> (x), close the modal
idid.onclick = function() {
    myModalUpdate.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == myModalUpdate) {
    myModalUpdate.style.display = "none";
  }
}



function myFunction() {
  document.getElementById("myText").value = "Johnny Bravo";
}
//...........................................................................