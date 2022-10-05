let elForm = document.querySelector(".site-form");
let elUserName = document.querySelector(".user-name");
let elUserNickName = document.querySelector(".user-nickname");
let elUserNumber = document.querySelector(".user-number");
let elResultBox = document.querySelector(".result-list");
let elRsultFthBox=document.querySelector(".result-box");
let elTemplate = document.querySelector(".contact_template").content;
let usersArray = JSON.parse(window.localStorage.getItem("array")) || [];

let fragment = new DocumentFragment();


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    
    let nameValue = elUserName.value;
    let nickValue = elUserNickName.value;
    let numberValue = Number(elUserNumber.value);

    let obj = {
        id: usersArray.length + 1,
        name: nameValue,
        nickname: nickValue,
        number: numberValue,
        isCompLate: false,
    }

    if (elUserName.value!=""){
        usersArray.push(obj);
    }else{
        alert("To'liq malumot bering!")
    }
    


    window.localStorage.setItem("array",JSON.stringify(usersArray))
    makeContactbBox();
    elUserName.value = ""
    elUserNickName.value = ""
    elUserNumber.value = ""
})


//function
function makeContactbBox() {
    elResultBox.innerHTML = ""

    usersArray.forEach(i => {
        let templateClone = elTemplate.cloneNode(true);
        templateClone.querySelector(".listItemName").textContent = "Name: " + i.name;
        templateClone.querySelector(".listItemNick").textContent = "Nick: " + i.nickname;
        templateClone.querySelector(".listItemNumber").textContent = "Number: " + i.number;
        templateClone.querySelector(".listDeleteContact").textContent= "Delete: "
        templateClone.querySelector(".listDeleteContact").dataset.arrayPlace=i.id
        fragment.appendChild(templateClone);        
    });
    elResultBox.appendChild(fragment)
};

elRsultFthBox.addEventListener("click",function(evt){
    if (evt.target.matches(".listDeleteContact")) {
        let btnId = Number(evt.target.dataset.arrayPlace);
        let arrayItemIndex = usersArray.findIndex(i=>i.id === btnId);
        usersArray.splice(arrayItemIndex, 1);
        window.localStorage.setItem("array",JSON.stringify(usersArray))
        makeContactbBox();
    }
})

makeContactbBox();
