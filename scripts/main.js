
var open_file = document.querySelector('.open_file');

 function go_to_file(){
    var xmlhttp = new XMLHttpRequest();
    var file = 'D:/PythonProjects/python_tests/Stepan_tasks/string_encode.py';
    var line = '3';
    xmlhttp.open("GET", "http://localhost:63342/api/file?file="
        + file + "&line=" + line + "&column=3");
    xmlhttp.send();
};