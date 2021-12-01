$(document).ready(function() {
    change();
    //Make default theme there
    if (window.location.pathname == "/index.html") {
        changeTheme(0);
    }
    $( ".container" ).sortable();
    // alert("done");
});


function changeTheme(themeNum) {
    $.getJSON("resources/themes.json", data => {
        document.getElementById("homepageBody").style.backgroundColor = data["themes"][themeNum]["backgroundColor"];
        document.getElementById("homepageBody").style.backgroundImage = data["themes"][themeNum]["backgroundImage"];

        document.getElementById("bottomBar").style.backgroundColor = data["themes"][themeNum]["barColor"];
        document.getElementById("bottomBar").style.backgroundImage = data["themes"][themeNum]["barImage"];
        });
}

//For Settings

function Settings() {
    document.getElementById("overlay").style.display = "block";
}


function off() {
    document.getElementById("overlay").style.display = "none";
}



function show(id) {
    if (!$("#"+id).length) {
    $( "<p id='"+id+"'class='group'>Test</p>" ).insertAfter( "#group"+id );
    $("<span class='newline'></span>").insertAfter("#"+id);
    } else {
        $("#"+id+"+.newline").remove();
        $("#"+id).remove();
    }
    
    // $("<span></span>").insertAfter("#"+id);
    // $( "<p class='group'>Test</p>" ).insertAfter( "#group"+id );
}


function group(id) {
    // $("#"+id).toggle('fast');
    // if (!$("#"+id).length) {
    //     $("<span class='newline'></span>").insertAfter("#"+id);
    // } else {
    //     $("#"+id+"+.newline").remove();
    // }
    
    $("."+id).toggle('fast');
}

function change() {
    $("#bottomBar").children().children().removeClass("box").addClass("box-small");
    $("#iconArea").children().children().removeClass("box-small").addClass("box");
}


//
// document.addEventListener('DOMContentLoaded', (event) => {
//
//   var dragSrcEl = null;
//
//   function handleDragStart(e) {
//
//     dragSrcEl = this;
//
//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.innerHTML);
//   }
//
//   function handleDragOver(e) {
//     if (e.preventDefault) {
//       e.preventDefault();
//     }
//
//     e.dataTransfer.dropEffect = 'move';
//
//     return false;
//   }
//
//
//   function handleDrop(e) {
//     if (e.stopPropagation) {
//       e.stopPropagation(); // stops the browser from redirecting.
//     }
//
//     if (dragSrcEl != this) {
//       dragSrcEl.innerHTML = this.innerHTML;
//       this.innerHTML = e.dataTransfer.getData('text/html');
//     }
//
//     return false;
//   }
//
//
//   let items = document.querySelectorAll('.container .box');
//   items.forEach(function(item) {
//     item.addEventListener('dragstart', handleDragStart, false);
//     item.addEventListener('dragover', handleDragOver, false);
//     item.addEventListener('drop', handleDrop, false);
//   });
// });