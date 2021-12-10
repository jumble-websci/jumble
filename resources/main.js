
if (true)
{

function group_move (moved, replaced) {
  if (moved[0].attributes["id"]!= undefined) {
    $("."+moved[0].attributes["id"].value).insertAfter($('#'+moved[0].attributes["id"].value))
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
  $('#addModal').dialog('open');
});

// let abcd;
function arr_find_name(arr, name) {
  let result = null;
  arr.forEach( function(element) { 
    // console.log("comparing " + name + " with " + element['name']);
    // abcd=element;
    if (name == element['name']) {
      // console.log("!!!")
      result = element;
    }
  });
  return result;
}

function arr_find_id(arr, id) {
  let result = null;
  arr.forEach( function(element) {
    if (id == element['id']) {
      result = element;
    }
  });
  return result;
}
let el, el_len;
function add_remove(data) {
  // if the add button is checked then add it to the website
  let checked = false, group_checked = false;
  if ($('#check_add').is(":checked")) {
    el = $("#add_section");
    el_len = el.children['length'];
    let add = [];
    for (let i = 0; i < el_len; i++) {
      if (i === el_len-1) {
        console.log("group")
        group_checked = true;
        let group_fieldset = $("#add_section fieldset")[0]
        // console.log(group_fieldset)
        for (let j = 0; j < group_fieldset.children['length']; j++) {
          // console.log(group_fieldset.children[j])
          // $("#reddit_group").is(':checked')
          let child = group_fieldset.children[j];
          let input = child['children'][0].attributes['id'].value
          if($("#"+input).is(':checked')) {
            temp = [input, child];
            group_checked = true;
            add.push(temp);
          }
          // console.log(checked)

        }
        if (group_checked) {
          // console.log("group checked")
          console.log(add);
          let last = $("#main:last");
          // let element = arr_find_name(data_[1], );
          let out = "";
          last.append(out);
        }

        // console.log($("#add_section fieldset")[0])

        // for (let group_index = 0; group_index < el_len-1; i++ ) {
        //   console.log()
        //   console.log(el.children()[el_len].children)
        // }



      } else {
        let child = $("#add_section").children()[i];
        let input = child['children'][0].attributes['id'].value
        checked = $("#"+input).is(':checked')
      }

      if (checked) {

        let last = $("#main:last")
        // console.log(input) // the name
        let element = arr_find_name(data_[1], input);{
        last.append("<div class='box " + element['id'] + "'><a href='" + element['link'] + "'> <img class='icon' src='" + element ['path'] + "' alt = '" + element['name'] + "'></a></div>");
          // $( "#add_selection" ).children()[i].prop( "checked", false );
        }
      }

    }
  }
  if ($("#check_remove").is(":checked")) {
    for (i = 0; i < $("#remove_section").children()['length']; i++) {
      let child = $("#remove_section").children()[i];
      let input = child['children'][0].attributes['id'].value
      let checked = $("#"+input).is(':checked')

      if (checked) {
        let element = arr_find_name(data_[1], input.slice(0, -7));
        $(".box."+element['id']).remove();
        check_remove();
      }
    }
  }

  $( "#addModal" ).dialog( "close" );
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

let data_;
function form_ajax(dat) {
  return $.ajax({
    url: 'resources/add.php',
    type: 'post',
    data: dat,
    success: function(response) {
        data_ = JSON.parse(response);
        // console.log(response);
        $("#" + dat + "_section").html(data_[0]);

    }
});
}

let remove_clicked = false;

$("#check_remove").click( function() {
  check_remove();
});
  
  
function check_remove() {
    if (!remove_clicked) {
      let arr = [];
      for (let i = 0; i < $("#main").children()['length']; i++) {
        let element = $("#main").children()[i];
        arr.push(element.classList[1]);
      }
      let out = "";
      let i = 0;
      arr = [...new Set(arr)];

      while (i < arr.length) {
        let element = arr[i];
        let el = arr_find_id(data_[1], element);
        if (element === 'group') {
          i += 2;
          continue;
        }
        
        out += '<div class="el-checkbox">';
          out +='<input type="checkbox" id="' + el["name"] +'_remove" value="option">';
          out +='<label class="el-checkbox-style" for="' + el["name"] + '_remove"></label>';
          out +='<span class="margin-r"> ' + el["name"] + '</span>';
        out +='</div>';
        
        i++;
      }
      if (out === "") {
        out = "<p> No icons present!</p>";
      }
      $("#remove_section").html(out);

      // remove_clicked = true;
    }


  let checked = $('#check_remove').is(":checked")
  // console.log(checked)
  if (checked) { // if the checkbox has been checked, show the fieldset with what to remove (build this from the page)
    $("#remove").show('fast');
  } else {
    $('#remove').hide('fast');
  }
}


let add_clicked = false;
$("#check_add").click( function() {
  if (!add_clicked) { // build the checkboxes and items
    $.when(form_ajax("add")).done(function() {
      $("#add_section div").last().children()[1].setAttribute('onclick', 'showGroupMenu()')
    })
    add_clicked = true;
  }

  let checked = $('#check_add').is(':checked') 
  if (checked) { // show the fieldset with the add stuff info (build this from database of things that you can add)
    $("#add").show('fast');
  } else {
    $("#add").hide('fast');
  }

});


let group_fieldset_added = false;
function showGroupMenu() {

  if (group_fieldset_added) {
    if ($("#group").is(':checked')) {
      $("#group-add").show('fast');
    } else {
      $("#group-add").hide('fast');
    }

  } else {
    // show a new fieldset inside this one for adding stuff to the group
    let out = "<fieldset id='group-add'>"
    for (let index in data_[1].slice(0, -1)) {
      // let id = data_[1][index]["id"]
      // let link = data_[1][index]["link"]
      let name = data_[1][index]["name"]
      // let path = data_[1][index]["path"]
      out += '<div class="el-checkbox">';
      out += '<input type="checkbox" id="' + name + '_group" value="option">';
      out += '<label class="el-checkbox-style" for="' + name + '_group"></label>';
      out += '<span class="margin-r"> ' + name + '</span>';
      out += '</div>';
    }
    out += '</fieldset>';
    $("#add_section").append(out);
    group_fieldset_added = true;
  }
}

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
  while (i < main.children()['length']) {
    main_out.push(main.children()[i].classList[1]);
    if (main.children()[i].classList.contains("group-class")) {
        // skip the next two things
        i += 2;
    }
    i++;
  }

  i = 0;
  while ( i <bot.children()['length']) {
    bot_out.push(bot.children()[i].classList[0]);
    i+=1;
  }
  
  let toSave = JSON.stringify({"main": main_out, "bot": bot_out})
  // console.log(toSave)
  
  $.ajax({
    url: "resources/icons.php",
    type: "POST",
    data: {json: toSave},
    sucess: (data) => {
      console.log(data);
    }
  });
}

let data1, data2;
let group_num = 1;
function getIcons() {
  $.ajax({
    url: "resources/icons.php",
    type: "POST",
    data: "getIcons",
    success: (data) => {
      // console.log(data)
      let theData = JSON.parse(JSON.parse(data));
      console.log(theData)
      if (Object.keys(theData).length === 0) {
        return;
      }
      // console.log(data)
      let mainData = theData['main'];
      let bottomBarData = theData['bot'];
      data1 = theData;

      console.log(mainData);
      console.log(bottomBarData);

      // main page:
      let main_out = "";
      mainData.forEach( function(el) {
        // main_out +=
        let element = arr_find_id(data_[1], el);
        if (el === '1') {
          main_out += '<div class="box 1"> <span class="none"></span></div>';
        } else if (el === '99') {
          main_out += '<div id="group' + group_num + '" class="box 99 group-class">';
          main_out += '<span class="none"></span>';
          main_out += "</div>";

          main_out += '<div class="group' + group_num + ' group newline hide">';
          main_out += 'Something'; //eventually will populate with actual groups
          main_out += '</div>';
          main_out += '<div class="group' + group_num++ + ' newline hide"></div>';
        } else {
          main_out += "<div class='box " + element['id'] + "'><a href='" + element['link'] + "'> <img class='icon' src='" +  element ['path'] + "' alt = '" + element['name']+ "'></a></div>"
        }
        
       });
      $("#main").html(main_out);
      

      // bottom bar:
      let bot_out = "";
      bottomBarData.forEach( function(el) {
        let element = arr_find_id(data_[1], el);
        if (el === '1') {
          bot_out += '<div class="box-small 1"> <span class="none"></span></div>';
        } else {
          bot_out += "<div class='box-small " + element['id'] + "'><a href='" + element['link'] + "'> <img class='icon' src='" +  element ['path'] + "' alt = '" + element['name']+ "'></a></div>"
        }
      });

      $("#bottomBar .container").html(bot_out);

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
    }
  });
}

$(document).ready(function() {

  form_ajax("add")
  change();
  getIcons();
  
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

  // Save the icon positions every 5 seconds
  setInterval(function(){save();}, 5000);


  // add_ajax();

});

