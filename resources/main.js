
if (true)
{

function group_move (moved, replaced) {
  if (moved[0].attributes["id"]!= undefined) {
    $("."+moved[0].attributes["id"].value).insertAfter($('#'+moved[0].attributes["id"].value))
    console.log(moved[0].attributes["id"].value)
  }
  if (replaced[0].attributes["id"] != undefined) {
    $("."+replaced[0].attributes["id"].value).insertAfter($('#'+replaced[0].attributes["id"].value))
  }
  collapse_groups();

}

function collapse_groups () {
   $(".group").hide('fast');
}

function changeTheme(themeNum) {
  // Change the theme
  $.getJSON("resources/themes.json", data => {
    document.getElementById("homepageBody").style.backgroundColor = data["themes"][themeNum]["backgroundColor"];
    document.getElementById("homepageBody").style.backgroundImage = data["themes"][themeNum]["backgroundImage"];

    document.getElementById("bottomBar").style.backgroundColor = data["themes"][themeNum]["barColor"];
    document.getElementById("bottomBar").style.backgroundImage = data["themes"][themeNum]["barImage"];
  });

  // Save the theme
  $.ajax({
    url: "resources/theme.php",
    type: "POST",
    data: { num: themeNum}
  });
}


function hover(i){
  
  $.getJSON("resources/themes.json", data => {
    document.getElementsByClassName("theme")[i].style.backgroundImage = data["themes"][i]["backgroundImage"];

   
    });
   
}




//For Settings




function Settings() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
      document.getElementById("name").innerHTML = this.responseText;
    }
    xmlhttp.open("GET", "resources/greeting.php",true);
    xmlhttp.send();
  
  document.getElementById("overlay").style.display = "block";
   
}


function off() {
    document.getElementById("overlay").style.display = "none";
}

function hideform() {
  document.getElementById("info").style.display = "none";
}

function showform() {
  document.getElementById("info").style.display = "block";
}


$(document).on('click', 'body > .ui-widget-overlay', function(){
  $("#addModal").dialog("close");
  return false;
});


$(".group-class").click(function(){
  if ($(this).hasClass('noclick')) {
    $(this).removeClass('noclick');
  }
  else {
    $(this).find('.ui-icon').toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");
    $("."+$(this).attr('id')).toggle('fast');
  }
});
  
function hideform() {
  document.getElementById("info").style.display = "none";
}

function showform() {
  document.getElementById("info").style.display = "block";
}


function change() {
    $("#bottomBar").children().children().removeClass("box").addClass("box-small");
    $("#iconArea").children().children().removeClass("box-small").addClass("box");
}

}

$("#addButtonImage").click(function () {
  // console.log("clicked the add button")
  $('#addModal').dialog('open');
});

function add_remove(data) {
  // if the add button is checked then add it to the website
  for (i = 0; i < $("#add_section").children()['length']; i++) {
    let child = $("#add_section").children()[i];
    let input = child['children'][0].attributes['id'].value
    let checked = $("#"+input).is(':checked')
    if (checked) {
      console.log(input)
      let last = $("#main:last")
      last.append("<div class='box'>this is a test</div>");
    }
  }

  for (let child in $("#remove_section").children()) {

  }
}

$( function() {
  $( "#addModal" ).dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Close": function() {
          $( this ).dialog( "close" );
      },
      "Save": function() {
          $.ajax({
              // url: "#",                   
              // timeout: 30000,
              type: "POST",
              // data: $('#add/remove').serialize(),
              // dataType: 'json',
              error: function(XMLHttpRequest, textStatus, errorThrown)  {
                  alert("An error has occurred making the request: " + errorThrown)
              },
              success: function(data){                                                        
                   //Do stuff here on success such as modal info   
                  // alert("saved");   
                  add_remove(data);
                  $( "#addModal" ).dialog( "close" );
              }
          });
      }
    }
  });
});


function form_ajax(dat) {
  $.ajax({
    url: 'resources/add.php',
    type: 'post',
    data: dat,
    success: function(response) {
        console.log(response);
        $("#" + dat + "_section").html(response);
    }
});
}

let remove_clicked = false;

$("#check_remove").click( function() {
    if (!remove_clicked) {
      // remove_ajax();
      form_ajax("remove")
      remove_clicked = true;
    }


  let checked = $('#check_remove').is(":checked")
  // console.log(checked)
  if (checked) { // if the checkbox has been checked, show the fieldset with what to remove (build this from the page)
    $("#remove").show('fast');
  } else {
    $('#remove').hide('fast');
  }

});


let add_clicked = false;
$("#check_add").click( function() {
  if (!add_clicked) {
    form_ajax("add");
    add_clicked = true;
  }

  let checked = $('#check_add').is(':checked') 
  if (checked) { // show the fieldset with the add stuff info (build this from database of things that you can add)
    $("#add").show('fast');
  } else {
    $("#add").hide('fast');
  }

});


function logout() {
  // Logout ajax call
  $.ajax({
    url: "resources/logout.php",
    type: "POST",
    success: () => {
      window.location = "login.html";
    },
    error: () => {
      alert("There was an error connecting to the server, please try again.");
    }
  });
}


function callUpdate() {
  let email = document.getElementById("email").value;
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
    // Update
    $.ajax({
      url: "resources/update.php",
      type: "POST",
      data: { email: email, fname: fname, lname: lname },
      success: (data) => {
        if (data.substring(0, 5) == "Error") {
          alert(data);
        } else {
          alert("Account Updated!");
        }
      },
      error: () => {
        alert("There was an error connecting to the server, please try again.");
      }
    });  

    Settings();

  document.getElementById("email").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  
}
function save() {
  let main = $("#main");
  let bot = $("#bottomBar .container");

  let main_out = [];
  let bot_out = [];
  
  let i = 0;
  // for (i = 0; i < main.children()['length']; i++) {
  while (i < main.children()['length']) {
    main_out.push(main.children()[i].classList[1]);
    if (main.children()[i].classList.contains("group-class")) {
        // skip the next two things
        i += 2;
    }
    i++;
  }
  console.log(main_out)

  i = 0;
  while ( i <bot.children()['length']) {
    bot_out.push(bot.children()[i].classList[0]);
    i+=1;
  }
  console.log(bot_out)

}

$(document).ready(function() {
  change();
  // Get default theme
  $.ajax({
    url: "resources/theme.php",
    type: "GET",
    success: (data) => {
      changeTheme(data);
    },
    error: () => {
      changeTheme(0);
    }
  });

  // Moving groups around
  $( ".sort" ).sortable({
    start: function(event, ui){
      ui.item.addClass('noclick');
      collapse_groups();
      },
      stop: function (event, ui) {
        test1 = event;
        test2 = ui;
        var moved = ui.item,
            replaced = ui.item.prev();
        
        // if replaced.length === 0 then the item has been pushed to the top of the list
        // in this case we need the .next() sibling
        if (replaced.length == 0) {
            replaced = ui.item.next();
        }
        if (!(moved[0].attributes["id"] == undefined && replaced[0].attributes["id"] == undefined)) {
          group_move(moved, replaced);
        }
    }
  });

  // add_ajax();

});

