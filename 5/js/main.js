/**
 * Created by Administrator on 17.09.2015.
 */
window.onload = function(){
    var students, xmlhttp, xmlDoc, i = 0;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../xml/student.xml", false);
    xmlhttp.send();

    xmlDoc = xmlhttp.responseXML;
    students = xmlDoc.getElementsByTagName("student");

    var table = "<tr> <th>Name</th> <th>Group</th> <th>Book</th> </tr>";

    for (i = 0; i < students.length; i++){
        table += "<tr><td>";
        table += students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;

        table += "</td><td>";
        table += students[i].getElementsByTagName("group")[0].childNodes[0].nodeValue;

        table += "</td><td>";
        table += students[i].getElementsByTagName("book")[0].childNodes[0].nodeValue;
        table += "</td></tr>";
    }

    $('#search').change(function (){
        var textToSearch = $('#search').val();
        table = "<tr> <th>Name</th> <th>Group</th> <th>Book</th> </tr>";

        for(i = 0; i < students.length; i++){
            student = students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;

            if (student.search(textToSearch) == 0 ||
                student.toLowerCase().search(textToSearch) == 0 ||
                student.toUpperCase().search(textToSearch) == 0){

                table += "<tr><td>";
                table += students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;

                table += "</td><td>";
                table += students[i].getElementsByTagName("group")[0].childNodes[0].nodeValue;

                table += "</td><td>";
                table += students[i].getElementsByTagName("book")[0].childNodes[0].nodeValue;
                table += "</td></tr>";
            }
        }
        document.getElementById("content").innerHTML = table;
    });

    $('#goToEditPage').click(function(){
        location.replace('../pages/edit.php');
    });

    document.getElementById("content").innerHTML = table;
}