let group_num = 1;

  function group_move(moved, replaced) {
    if (moved[0].attributes["id"] !== undefined) {
      $("." + moved[0].attributes["id"].value).insertAfter($('#' + moved[0].attributes["id"].value))
    }
    if (replaced[0].attributes["id"] !== undefined) {
      $("." + replaced[0].attributes["id"].value).insertAfter($('#' + replaced[0].attributes["id"].value))
    }
    collapse_groups();
  }

  function collapse_groups() {
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
      data: {num: themeNum}
    });
  }


  function hover(i) {

    $.getJSON("resources/themes.json", data => {
      document.getElementsByClassName("theme")[i].style.backgroundImage = data["themes"][i]["backgroundImage"];


    });

  }


//For Settings




function Greeting(){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
      document.getElementById("name").innerHTML = this.responseText;
    }
    xmlhttp.open("GET", "resources/greeting.php", true);
    xmlhttp.send();
}



function Settings() {
  Greeting();
  
  document.getElementById("overlay").style.display = "block";
   
}

    document.getElementById("overlay").style.display = "block";

  }


  function off() {
    document.getElementById("overlay").style.display = "none";
  }



  $(document).on('click', 'body > .ui-widget-overlay', function () {
    $("#addModal").dialog("close");
    return false;
  });

  function group_click(id) {
    let el=$("#"+id)
    if (el.hasClass('noclick')) {
      el.removeClass('noclick');
    }
    else {
      $("."+id).toggle('fast')
    }

  }

  function hideform() {
    document.getElementById("info").style.display = "none";
  }
  
function hideform() {
  document.getElementById("info").style.display = "none";
  document.getElementById("update").style.visibility = "hidden";
}

function showform() {
  document.getElementById("info").style.display = "block";
  document.getElementById("update").style.visibility = "visible";
}


  function change() {
    $("#bottomBar").children().children().removeClass("box").addClass("box-small");
    $("#iconArea").children().children().removeClass("box-small").addClass("box");
  }


  $("#addButtonImage").click(function () {
    $('#addModal').dialog('open');
  });

  function arr_find_name(arr, name) {
    let result = null;
    arr.forEach(function (element) {
      if (name === element['name']) {
        result = element;
      }
    });
    return result;
  }

  function arr_find_id(arr, id) {
    let result = null;
    arr.forEach(function (element) {
      if (id === element['id']) {
        result = element;
      }
    });
    return result;
  }


let el, el_len;
let temp_arr;
function add_remove(data) {
  // if the add button is checked then add it to the website
  let checked = false, group_checked = false;
  if ($('#check_add').is(":checked")) {
    el = $("#add_section")[0];
    el_len = el.children['length'];
    let add = [];
    for (let i = 0; i < el_len-1; i++) {
      if (i === el_len-2) {
        checked = $("#group").is(':checked')
        if (checked) {
          let group_fieldset = $("#add_section fieldset")[0]
          for (let j = 0; j < group_fieldset.children['length']; j++) {
            let child = group_fieldset.children[j];
            let input = child['children'][0].attributes['id'].value
            let info = data_[1][j]
            if ($("#" + input).is(':checked')) {
              group_checked = true;
              add.push([info, child]);
            }
          }
          if (group_checked) {
            let last = $("#main:last");
            temp_arr = add;
            let out = "";
            out += "<div id='group" + group_num + "' class='box 99 group-class' onclick='group_click(\"group" + group_num +"\")'>";
            out += "<span class='none'></span>";
            out += "</div>";

            out += "<div class='group" + group_num + " group newline hide'>";
            for (let element_index in add) {
              let element = add[element_index][0];

              out += '<a href="' + element['link'] + '" class="' + element['id'] + '">';
              if (element['name'] === "blank_space") {
                out += '<span class="none 1"></span>';
              } else {
                out += '<img class="icon" src="' + element['path'] + '" alt="' + element['name'] + '">';
              }
              out += '</a>';

            }
            out += "</div>";
            out += "<div class='group" + group_num++ + " newline hide'></div>";
            last.append(out);
          }
        }

      } else {
        let child = el.children[i];
        let input = child['children'][0].attributes['id'].value
        checked = $("#"+input).is(':checked')

        if (checked) {
          let last = $("#main:last")
          let element = arr_find_name(data_[1], input);{
            last.append("<div class='box " + element['id'] + "'><a href='" + element['link'] + "'> <img class='icon' src='" + element ['path'] + "' alt = '" + element['name'] + "'></a></div>");
          }
        }
      }



    }
  }
  if ($("#check_remove").is(":checked")) {
    for (let i = 0; i < $("#remove_section").children()['length']; i++) {
      let child = $("#remove_section").children()[i];
      let input = child['children'][0].attributes['id'].value
      let checked = $("#"+input).is(':checked')

      if (checked) {
        if (input.slice(0, 5) === "group") {
          let name = input.slice(0, -7);
          $("."+name).remove()
          $("#"+name).remove()
        } else {
          let element = arr_find_name(data_[1], input.slice(0, -7));
          console.log(element)
          $(".box." + element['id']).remove();
        }
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
        $("#" + dat + "_section").html(data_[0]);

    }
});
}

let remove_clicked = false;

$("#check_remove").click( function() {
  check_remove();
});
  

function check_remove() {
    // if (!remove_clicked) {
      let temp_group_num = 1;
      let arr = [];
      let i = 0;
      while (i < $("#main").children()['length']) {
      // for (let i = 0; i < $("#main").children()['length']; i++) {
        let element = $("#main").children()[i];
        if (element.classList[1] === "99") {
          let temp = [];
          temp.push(element.classList[1]);
          // temp.push(element.nextElementSibling.classList[1]);
          // temp.push(element.nextElementSibling.nextElementSibling.classList[1]);
          temp.push(i)
          i += 3
          arr.push(temp);
          continue;
        }
        arr.push(element.classList[1]);
        i++;
      }

      let out = "";
      i = 0;
      arr = [...new Set(arr)];

      while (i < arr.length) {
        let element = arr[i];
        if (element[0] === '99') {

          out += '<div class="el-checkbox">';
          out += `<input type="checkbox" id="group${temp_group_num}_remove" value="option">`;
          out += `<label class="el-checkbox-style" for="group${temp_group_num}_remove"></label>`;
          out += `<span class="margin-r"> group ${temp_group_num++}</span>`;
          out += '</div>';
        } else {
          let el = arr_find_id(data_[1], element);
          out += '<div class="el-checkbox">';
          out += '<input type="checkbox" id="' + el["name"] + '_remove" value="option">';
          out += '<label class="el-checkbox-style" for="' + el["name"] + '_remove"></label>';
          out += '<span class="margin-r"> ' + el["name"] + '</span>';
          out += '</div>';

        }
        i++;
      }
      if (out === "") {
        out = "<p> No icons present!</p>";
      }
      $("#remove_section").html(out);

      // remove_clicked = true;
    // }


  let checked = $('#check_remove').is(":checked")
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

    Greeting();

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

    if (main.children()[i].classList.contains("group-class")) {
        // skip the next two things
        // let temp = [];
      let group_box = main.children()[i]
      let group_group = main.children()[i+1]
      let group_newline = main.children()[i+2]
      // temp = [group_box, group_group, group_newline]
      let contents = []
      for (let i = 0; i < group_group.children['length']; i++) {
        contents.push(group_group.children[i].classList[0])
      }
      let group_arr = ['99', contents]
      // temp.push(group_arr)

      main_out.push(group_arr)
      i += 2
    } else {
      // console.log(main.children()[i].classList[1])
      main_out.push([main.children()[i].classList[1]]);
    }
    i++;
  }

  i = 0;
  while ( i <bot.children()['length']) {
    bot_out.push(bot.children()[i].classList[0]);
    i+=1;
  }

  
  let toSave = JSON.stringify({"main": main_out, "bot": bot_out})

  temp = toSave;
  
  $.ajax({
    url: "resources/icons.php",
    type: "POST",
    data: {'json': toSave},
    // success: (data) => {
    //   console.log(data);
    // },
    error: () => {
      alert("There was an error")
    }
  });
}

let data1;


function getIcons() {
  $.ajax({
    url: "resources/icons.php",
    type: "POST",
    data: "getIcons",
    success: (data) => {
      // console.log(data)
      data1 = data;

      let theData = JSON.parse(JSON.parse(data));

      if (Object.keys(theData).length === 0) {
        return;
      }

      let mainData = theData['main'];
      let bottomBarData = theData['bot'];
      data1 = theData;

      // main page:
      let main_out = "";
      mainData.forEach( function(el) {
        let id = el[0];
        // console.log(el)
        let element = arr_find_id(data_[1], id);
        if (id === '1') {
          main_out += '<div class="box 1"> <span class="none"></span></div>';
        }
        else if (id === '99') {
          main_out += '<div id="group' + group_num + '" class="box 99 group-class" onclick="group_click(\'group'+ group_num +'\')">';
          main_out += '<span class="none"></span>';
          main_out += "</div>";

          main_out += '<div class="group' + group_num + ' group newline hide" >';
          for (let i = 0; i < el[1]['length']; i++) {
            element = arr_find_id(data_[1], el[1][i]);
            main_out += `<a class="${element['id']}" href="${element['link']}">`;
              main_out += `<img class="icon" src="${element['path']}" alt="${element['name']}">`;
            main_out += '</a>';
          }
          main_out += '</div>';
          main_out += '<div class="group' + group_num++ + ' newline hide"></div>';
        }
            else {
              // element['id']
          main_out += "<div class='box " + element['id'] + "'><a href='" + element['link'] + "'> <img class='icon' src='" +  element ['path'] + "' alt = '" + element['name']+ "'></a></div>"
        }
      //
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

      addSort();
    }, error: () => {
      alert("this isnt supposed to happen")
    }
  });
}
function addSort() {
  // Moving groups around
  $( ".sort" ).sortable({
    start: function(event, ui){
      ui.item.addClass('noclick');
      collapse_groups();
    },
    stop: function (event, ui) {

      let moved = ui.item,
          replaced = ui.item.prev();

      // if replaced.length === 0 then the item has been pushed to the top of the list
      // in this case we need the .next() sibling
      if (replaced.length === 0) {
        replaced = ui.item.next();
      }
      if (!(moved[0].attributes["id"] === undefined && replaced[0].attributes["id"] === undefined)) {
        group_move(moved, replaced);
      }
    }
  });
}
function ready() {
  $.when(form_ajax("add").done(function() {

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

    addSort()

    // Save the icon positions every 5 seconds
    setInterval(function(){save();}, 5000);


    // add_ajax();
  }))

}
$(document).ready(function() {
  ready();

});

