var link = document.querySelector('.my_link');
var img = document.querySelector('img');
var for_user = document.querySelector('h2');
var changeUserButton = document.querySelector('.change_user');
var closeMeeting = document.querySelector('.close_meeting');
link.onclick = function () {
    alert('Сначала нажмите на ОК плииз');
};

// Кнопка "Закрыть приветствие"
closeMeeting.onclick = function(){
    if (localStorage.getItem('name') && for_user.innerHTML === ''){
        localStorage.removeItem('name');
        closeMeeting.title = 'Закрыть приветствие';
    }
  for_user.innerHTML = '';
    closeMeeting.title = 'Удалить имя из localstorage';
};

// метод смены изображение при книке на него
img.onclick = function () {
    var currentImg = img.getAttribute('src');
    if (currentImg === 'images/cat.jpeg') {
        img.setAttribute('src', 'images/little_cat.jpg');
    } else {
        img.setAttribute('src', 'images/cat.jpeg');
    }
};
// добавление переменной name в localstorage
function setUserName() {
    var myName = prompt('Пожалуйста введите имя для приветствия');
    if (myName !== null && myName !== '') {
        localStorage.setItem('name', myName);
        for_user.innerHTML = 'Приветствую, ' + myName;
        closeMeeting.title = 'Закрыть приветствие'
    }
}
if (localStorage.getItem('name') !== null){
    for_user.innerHTML = 'Приветствую, ' + localStorage.getItem('name');
    closeMeeting.title = 'Закрыть приветствие'
}
else{
    localStorage.removeItem('name');
    setUserName();
}

// Кнопка "Сменить пользователя"
changeUserButton.onclick = function () {
    setUserName();
};
