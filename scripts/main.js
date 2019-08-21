
var open_file = document.querySelector('.open_file');

 function go_to_file(){
    var xmlhttp = new XMLHttpRequest();
    var file = 'C:/Api-tests/19.511/mobile/test-message-new/test_contacts_read.py';
    var line = '3';
    xmlhttp.open("GET", "http://localhost:63341/api/file?file="
        + file + "&line=" + line + "&column=3");
    xmlhttp.send();
};