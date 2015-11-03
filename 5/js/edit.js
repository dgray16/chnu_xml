/**
 * Created by Administrator on 29.09.2015.
 */

window.onload = function(){

    var students, xmlhttp, xmlDoc, i = 0;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../xml/student.xml", false);
    xmlhttp.send();

    xmlDoc = xmlhttp.responseXML;
    students = xmlDoc.getElementsByTagName("student");

    var table = "<tr> <th>Name</th> <th>Group</th> <th>Book</th> </tr>";
    var name;
    var group;
    var book;

    for (i = 0; i < students.length; i++){
        name = students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        group = students[i].getElementsByTagName("group")[0].childNodes[0].nodeValue;
        book = students[i].getElementsByTagName("book")[0].childNodes[0].nodeValue;

        table += "<tr>";

        table += "<td><input type='text' id='name-" + i + "' value='" + name + "'> </td>";
        table += "<td><input type='text' id='group-" + i + "' value='" + group + "'> </td>";
        table += "<td><input type='text' id='book-" + i + "' value='" + book + "'> </td>";

        table += "</tr>";
    }

    document.getElementById("editContent").innerHTML = table;

    $('#goToMainPage').click(function () {
        location.replace('../pages/index.html');
    });

    $('#submitButton').click(function (){
        var url = '../php/main.php';
        var xmlData = [];

        for(i = 0; i < students.length; i++){
            xmlData[i] = {name:$('#name-' + i).val(), group:$('#group-' + i).val(), book:$('#book-' + i).val()};
        }
        //console.log(xmlData);
        var data = {'array' : xmlData};
        $.post(url, data, function (response){
            console.log(response);
        });
    });
}