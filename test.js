
// let el = document.getElementById('items');
// for(let i = 1; i <= 12; i++) {
//   let div = document.createElement('div');
//   let a = document.createElement('a');
//   let link = document.createTextNode("This is a link" + i);
//   a.appendChild(link); 
//   a.href = "https://www.google.com";
//   div.appendChild(a);

//   let test = document.createElement('img');
//   test.src = "https://source.unsplash.com/random/150x150";
//   test.alt = "image";
//   div.appendChild(test);

//   el.appendChild(div);
// }

// let sortable = Sortable.create(el);

$( function() {
    $( ".items" ).sortable();
} );
