var link = document.querySelector('.my_link');
var img = document.querySelector('img');
var for_user = document.querySelector('h2');
var changeUserButton = document.querySelector('.change_user');
var closeMeeting = document.querySelector('.close_meeting');

link.onclick = function () {
    alert('Сначала нажмите на ОК плииз');
};

closeMeeting.onclick = function(){
  for_user.innerHTML = '';
};

img.onclick = function () {
    var currentImg = img.getAttribute('src');
    if (currentImg === 'images/cat.jpeg') {
        img.setAttribute('src', 'images/little_cat.jpg');
    } else {
        img.setAttribute('src', 'images/cat.jpeg');
    }
};

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    for_user.innerHTML = 'Nice to meet you, ' + myName;
}
if (localStorage.getItem('name') === 'null'){
    setUserName();
}
changeUserButton.onclick = function () {
    setUserName();
};
