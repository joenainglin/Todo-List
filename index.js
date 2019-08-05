
var mainlist = document.querySelector("ul");
var allLists = document.querySelectorAll("li");




function Loopall(){
    var allLists = document.querySelectorAll("li");
    for ( i = 0; i < allLists.length; i++){
        allLists[i].addEventListener("click", Mylist);
    }
}


function Mylist(){
    console.log(allLists);
    this.classList.toggle('red');
}





var clicker = document.getElementById("clicker");

var inputvalue = document.querySelector("input");

clicker.addEventListener("click", addlist);

function addlist(){
        var li = document.createElement('li');
        var text = inputvalue.value;
        li.innerHTML = text;
        inputvalue.value = "";
        event.preventDefault();
        mainlist.appendChild(li);
        Loopall();
        console.log("kleng", allLists);
}
// when click add list 

// when click x delete



