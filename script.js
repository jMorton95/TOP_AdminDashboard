let userNameFull = "Joshua Morton";
let userName = "klavelon";
let uNList = [];
//let imgSrc = "url('images/userPicture.jpg')";

/*Set all Full UserName Class Elements to the name set above.*/
uNList = document.querySelectorAll('.userNameFull');
for (i = uNList.length; i > 0; i--){
    uNList[i-1].textContent = userNameFull + "-";
}

document.querySelector('#userName').textContent = " (@" + userName + ")";
