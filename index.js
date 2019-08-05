
var body = document.getElementsByClassName("container");
var ListsHeading = document.querySelector("ul");
var Lists = document.querySelectorAll("li");




function AddClickEvent(){
    var Lists = document.querySelectorAll("li");
    for ( i = 0; i < Lists.length; i++){
        Lists[i].addEventListener("click", CrossList);
        
    }
}


function CrossList(){
    this.classList.toggle('red');
    if(this.classList.contains('red')){
        Alert("alert-success", "Check!");
    }
    else{
        Alert("alert-danger", "Uncheck!");
    }
}





var addlist = document.querySelector("a");
var inputvalue = document.querySelector("input");

addlist.addEventListener("click", AddList);


function CreateLi(){
    var li = document.createElement('li');
    li.classList.add("list-group-item");
    var text = inputvalue.value;
    li.innerHTML = text;
    if(li.innerHTML != ""){
        inputvalue.value = "";
        event.preventDefault();
        ListsHeading.appendChild(li);
    }
    else{
        Alert("alert-warning", "Please enter a list!")
    }
    
}

function AddList(){
    CreateLi();
    AddClickEvent();

}


function Alert(classname, message){
    var note = document.createElement("div");
    note.classList.add("alert", classname);
    var t = document.createTextNode(message); 
    note.appendChild(t);
    document.getElementById("alert").appendChild(note);
    setTimeout(function(){
        document.getElementById("alert").removeChild(note)},
        2000);


}


AddClickEvent();