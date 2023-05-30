let okButton = document.getElementById("okButton");
let listSection = document.getElementById("section2");

okButton.addEventListener("click", ok);

function ok(event){
    
    let listItem = document.createElement("div");
    listItem.style.width = "100%";
    listItem.style.height = "25px";
    listItem.style.display = "flex";
    listSection.appendChild(listItem);

    //Left side
    let leftSide = document.createElement("div");
    leftSide.style.width = "50%";
    leftSide.style.height = "100%";
    leftSide.style.display = "flex";
    listItem.appendChild(leftSide);

    let ul = document.createElement("ul");
    leftSide.appendChild(ul);
    let li = document.createElement("li");
    li.style.marginLeft = "30px";
    ul.appendChild(li);

    let text = document.createElement("p");
    let input = document.getElementById("input").value;
    text.innerText = input;
    leftSide.appendChild(text);

    //Right side
    let rightSide = document.createElement("div");
    rightSide.style.width = "50%";
    rightSide.style.height = "100%";
    rightSide.style.display = "flex";
    listItem.appendChild(rightSide);

    let deleteButton = document.createElement("p");
    deleteButton.innerText = "Delete";
    deleteButton.style.color = "red";
    deleteButton.style.fontSize = "20px";
    deleteButton.style.marginRight = "20px";
    rightSide.appendChild(deleteButton);

    let editButton = document.createElement("p");
    editButton.innerText = "Edit";
    editButton.style.color = "blue";
    editButton.style.fontSize = "20px";
    rightSide.appendChild(editButton);
 
    //Clear the input field
    let input1 = document.getElementById("input");
    input1.value = '';

    //Delete button
    deleteButton.addEventListener("click", deleteText);

    function deleteText(){
        listItem.style.display = "none";
    }

    //Edit button
    editButton.addEventListener("click", editText);

    function editText(){
        text.contentEditable = "true";
    }

}