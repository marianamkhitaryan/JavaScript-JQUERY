document.body.style.cssText = "margin: 0; padding: 0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";

let main = document.createElement("div");
main.style.width = "60%";


let header = document.createElement("header");
header.style.width = "100%";
header.style.height = "200px";
header.style.backgroundColor = "#265B6A";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";

let information = document.createElement("div");
information.style.display = "flex";
information.style.flexDirection = "column";
information.style.alignItems = "center";
information.style.justifyContent = "center";

let personalInformation = document.createElement("h1");
personalInformation.innerText = "Elizabeth Holmes"
personalInformation.style.fontFamily = "cursive";
personalInformation.style.color = "#EDD29E";

let number = document.createElement("p");
number.innerText = "+1 (970) 333-3833";
number.style.color = "white";

let email = document.createElement("p");
email.innerText = "elizabeth.holmes@gmail.com";
email.style.color = "white";



let section1 = document.createElement("div");
section1.style.width = "100%";
section1.style.height = "150px";
section1.style.display = "flex";
section1.style.alignItems = "center";
section1.style.justifyContent = "space-around";

let lorem = document.createElement("div");
lorem.innerText = "Store Manager equipped with extensive experience in automotive sales management. Employs excellent leadership skills and multi-tasking strengths. Demonstrated ability to improve store operations, increase top line sales, and reduce costs";
lorem.style.width = "50%";
lorem.style.fontSize = "20px";
lorem.style.color = "black";

let photo = document.createElement("img");
photo.style.backgroundImage = "url(img.png)";
photo.style.backgroundSize = "cover";
photo.style.width = "150px";
photo.style.height = "150px";


let hr = document.createElement("hr");


let section2 = document.createElement("div");
section2.style.width = "100%";
section2.style.height = "300px";
section2.style.display = "flex";
section2.style.alignItems = "center";
section2.style.justifyContent = "space-around";

let experience = document.createElement("div");
experience.style.display = "flex";
experience.style.flexDirection = "column";
experience.style.width = "40%";
experience.style.height = "100%";

let h2 = document.createElement("h2");
h2.innerText = "Experience";
h2.style.color = "#EDD29E";

let ul1 = document.createElement("ul");
let li1_1 = document.createElement("li");
let li1_2 = document.createElement("li");
let li1_3 = document.createElement("li");
let li1_4 = document.createElement("li");
let li1_5 = document.createElement("li");
li1_1.innerText = "Motivate and coach employees to meet service, sales, and repair goals.";
li1_2.innerText = "Create and modify employee schedules with service levels in mind,";
li1_3.innerText = "Recruit and hire top mechanics, service advisors, and sales people.";
li1_4.innerText = "Maintain detailed logs and reports of services performed, profit, and budget information.";
li1_5.innerText = "Help out in sales and repair areas as needed and maintain comprehensive current knowledge of operatons";

let highlights = document.createElement("div");
highlights.style.display = "flex";
highlights.style.flexDirection = "column";
highlights.style.width = "40%";
highlights.style.height = "100%";

let h2_2 = document.createElement("h2");
h2_2.innerText = "Highlights";
h2_2.style.color = "#EDD29E";

let ul2 = document.createElement("ul");
let li2_1 = document.createElement("li");
let li2_2 = document.createElement("li");
let li2_3 = document.createElement("li");
let li2_4 = document.createElement("li");
let li2_5 = document.createElement("li");
let li2_6 = document.createElement("li");
let li2_7 = document.createElement("li");
let li2_8 = document.createElement("li");
let li2_9 = document.createElement("li");
li2_1.innerText = "Results-orented";
li2_2.innerText = "Revenue generation";
li2_3.innerText = "Business development";
li2_4.innerText = "Effective marketing";
li2_5.innerText = "Organisational capacity";
li2_6.innerText = "Operability and commitment";
li2_7.innerText = "Ability to motivate staff and maintain good relations";
li2_8.innerText = "Resistance to stress";
li2_9.innerText = "Good mannere";






document.body.appendChild(main);
main.appendChild(header);
main.appendChild(section1);
main.appendChild(hr);
main.appendChild(section2);
header.appendChild(information);
information.appendChild(personalInformation);
information.appendChild(number);
information.appendChild(email);
section1.appendChild(lorem);
section1.appendChild(photo);
section2.appendChild(experience);
section2.appendChild(highlights);
experience.appendChild(h2);
experience.appendChild(ul1);
ul1.appendChild(li1_1);
ul1.appendChild(li1_2);
ul1.appendChild(li1_3);
ul1.appendChild(li1_4);
ul1.appendChild(li1_5);
highlights.appendChild(h2_2);
highlights.appendChild(ul2);
ul2.appendChild(li2_1);
ul2.appendChild(li2_2);
ul2.appendChild(li2_3);
ul2.appendChild(li2_4);
ul2.appendChild(li2_5);
ul2.appendChild(li2_6);
ul2.appendChild(li2_7);
ul2.appendChild(li2_8);
ul2.appendChild(li2_9);