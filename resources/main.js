$(document).ready(function() {
    change();
    //Make default theme there
    if (window.location.pathname == "/index.html") {
        changeTheme(0);
    }
    $( ".container" ).sortable({
      start: function(event, ui){
        ui.item.addClass('noclick');
        },
      update: function( event, ui ) {
        test(event, ui)
      }
    });
});

let test1;
let test2;

// TODO: make groups follow where the item has been dragged
function test (event, ui) {
  test1 = event;
  test2 = ui;

}

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
}


$(".group-class").click(function(){
  if ($(this).hasClass('noclick')) {
    $(this).removeClass('noclick');
  }
  else {
    $(this).next().slideToggle();
    $(this).find('.ui-icon').toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");
  }
});
  

function change() {
    $("#bottomBar").children().children().removeClass("box").addClass("box-small");
    $("#iconArea").children().children().removeClass("box-small").addClass("box");
}
