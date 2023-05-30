// Open categories

var categoryImgs = document.getElementsByClassName("categoryImg");
var categoryNames = document.getElementsByClassName("categoryName");

var femaleCategoryImages = [
    "images/f_category/f-category1.png",
    "images/f_category/f-category2.png",
    "images/f_category/f-category3.png",
    "images/f_category/f-category4.png",
    "images/f_category/f-category5.png",
    "images/f_category/f-category6.png",
    "images/f_category/f-category7.png",
]
var femaleCategoryNames = [
    "кольцo",
    "Цепь",
    "браслеты",
    "серьги",
    "Брошь",
    "кулоны",
    "колье"
]
var maleCategoryImages = [
    "images/m_category/m-category1.png",
    "images/m_category/m-category2.png",
    "images/m_category/m-category3.png",
    "images/m_category/m-category1.png",
    "images/m_category/m-category5.png",
    "images/m_category/m-category6.webp",
    "images/m_category/m-category3.png"
]
var maleCategoryNames = [
    "кольцo",
    "Цепь",
    "браслеты",
    "кольцo",
    "Цепь",
    "часы",
    "браслеты"
]

var femaleBtn = document.getElementById("femaleBtn");
var categories = document.getElementById("categories");
var plusBtn1 = document.getElementById("plusBtn1");

femaleBtn.addEventListener("click", femaleSection);
function femaleSection() {
    items.style.display = "none";
    subcategories.style.display = "none";
    femaleBtn.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
    femaleBtn.style.color = "#0008C1";
    femaleBtn.style.border = "none";
    maleBtn.style.border = "1px solid #D9D9D9";
    maleBtn.style.color = "#939393";
    maleBtn.style.boxShadow = "none";
    categories.style.display = "flex";
    plusBtn1.style.display = "flex";

    for ( j = 0; j < femaleCategoryImages.length; j++){
        categoryImgs[j].setAttribute('src', femaleCategoryImages[j])
    }
    for( k = 0; k < femaleCategoryNames.length; k++){
        categoryNames[k].innerText = femaleCategoryNames[k];
    }

}

var maleBtn = document.getElementById("maleBtn");
maleBtn.addEventListener("click", maleSection);
function maleSection() {
    items.style.display = "none";
    subcategories.style.display = "none";
    maleBtn.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
    maleBtn.style.color = "#0008C1";
    maleBtn.style.border = "none";
    femaleBtn.style.border = "1px solid #D9D9D9";
    femaleBtn.style.color = "#939393";
    femaleBtn.style.boxShadow = "none";
    categories.style.display = "flex";
    plusBtn1.style.display = "flex";

    for ( i = 0; i < maleCategoryImages.length; i++){
        categoryImgs[i].setAttribute('src', maleCategoryImages[i])
    }
    for( h = 0; h < maleCategoryNames.length; h++){
        categoryNames[h].innerText = maleCategoryNames[h];
    }
}

// Open subcategories

var subcategoryNames = [
    "A555",
    "A666",
    "A777",
]

var category = document.getElementsByClassName("category");
var subcategories = document.getElementById("subCategoriesSection");
var subcategoryName = document.getElementsByClassName("subcategoryName")

var click = 0;

for ( z = 0; z < category.length; z++){

    category[z].addEventListener("click", openSubcategories);

    function openSubcategories() {

        subcategories.style.display = "flex";
        line.style.width = "0px";

        if(click == 0){
            this.style.border = "2px solid #939393";
            click++;
        }
        if(click > 0){
            for ( l = 0; l <category.length; l++){
                category[l].style.border = "none";
            }
            this.style.border = "2px solid #939393"; 
            items.style.display = "none"
        }

        for( p = 0; p < subcategoryName.length; p++){
            subcategoryName[p].innerText = subcategoryNames[p]
        }
    }
}

// Open items

var subcategory = document.getElementsByClassName("subCategory");
var line = document.getElementById("line");
var items = document.getElementById("items");
var itemImgs = document.getElementsByClassName("itemImg");
var left = 132;
var click2 = 0;

var itemImages1 = [
    "images/items/item1.jpeg",
    "images/items/item2.jpeg",
    "images/items/item3.jpeg"
]

var itemImages2 = [
    "images/items/item4.jpeg",
    "images/items/item5.jpeg",
    "images/items/item6.jpeg"
]

var itemImages3 = [
    "images/items/item7.jpeg",
    "images/items/item8.jpeg",
    "images/items/item9.jpeg"
]

for( a = 0; a < subcategoryName.length; a++){

    subcategoryName[a].addEventListener("click", openItems);

    function openItems() {
        

        if(this.innerText == subcategoryNames[0]){
            line.style.width = "100%";
            line.style.left = "0px";
            items.style.display = "grid";
            for ( x = 0; x < itemImages1.length; x++){
                itemImgs[x].setAttribute('src', itemImages1[x])
            }
        }

        if(this.innerText == subcategoryNames[1]){
            line.style.width = "100%";
            line.style.left = "132px";
            items.style.display = "grid";
            for ( e = 0; e < itemImages2.length; e++){
                itemImgs[e].setAttribute('src', itemImages2[e])
            }
        }

        if(this.innerText == subcategoryNames[2]){
            line.style.width = "100%";
            line.style.left = "264px";
            items.style.display = "grid";
            for ( t = 0; t < itemImages3.length; t++){
                itemImgs[t].setAttribute('src', itemImages3[t])
            }
        }
    }
}

// Add new subcategory

var plusBtn2 = document.getElementById("plusBtn2");
var layer = document.getElementById("layer")
plusBtn2.addEventListener("click", openWindow);
function openWindow() {
    layer.style.display = "flex";
}

var addBtn = document.getElementById("addBtn");
var subcatInput = document.getElementById("subcatInput");

addBtn.addEventListener("click", addSubcat);
function addSubcat() {
    var newSubcatName = document.getElementById("subcatInput").value;

    var newSubcat = document.createElement("div");
    var subCategories = document.getElementById("subCategories_1");
    newSubcat.innerText = newSubcatName;
    newSubcat.classList.add("subCategory");
    subCategories.appendChild(newSubcat);
    layer.style.display = "none";
    items.style.display = "none";
    line.style.width = "0px";
    subcatInput.value = " ";
}

var closeWdw = document.getElementById("closeWdw");
closeWdw.addEventListener("click", close);
function close() {
    layer.style.display = "none";
    items.style.display = "none";
    line.style.width = "0px";
    subcatInput.value = " ";
}


