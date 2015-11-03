/**
 * Created by Administrator on 17.09.2015.
 */
window.onload = function(){
    var students, xmlhttp, xmlDoc, i = 0;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "student.xml", false);
    xmlhttp.send();

    xmlDoc = xmlhttp.responseXML;
    students = xmlDoc.getElementsByTagName("student");

    var table = "<tr> <th>Name</th> <th>Group</th> <th>Book</th> </tr>";

    $('input[type="button"]').click(function(){
        var step = parseInt($(this).data('step'));
        var rows = "<tr> <th>Name</th> <th>Group</th> <th>Book</th> </tr>";

        console.log("step: ", step);
        console.log("I start: ", i);

        if(step > 0) {
            for(var j = i; j < (i + step); j++){
                if(students[j] == null) break;
                else {
                    console.log("j = ", j, " student: ", students[j]);
                    rows += "<tr><td id='name'>";
                    rows += students[j].getElementsByTagName("name")[0].childNodes[0].nodeValue;

                    rows += "</td><td>";
                    rows += students[j].getElementsByTagName("group")[0].childNodes[0].nodeValue;

                    rows += "</td><td>";
                    rows += students[j].getElementsByTagName("book")[0].childNodes[0].nodeValue;
                    rows += "</td></tr>";
                    }
            }
        if (j < students.length) i = j;
        }

        if(step < 0){
            console.log("Name-html: ", $('#name').html());
            console.log("Name-student: ", students[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);
            if( ($('#name').html() != students[0].getElementsByTagName("name")[0].childNodes[0].nodeValue
                && $('#name').html() != students[1].getElementsByTagName("name")[0].childNodes[0].nodeValue) ){
                console.log("In loop");
                for(j = (i - 1); j >= (i + step); j--){
                    if (students[j] == null || j < 0) break;
                    else {
                        console.log("j = ", j, " student: ", students[j]);
                        rows += "<tr><td id='name'>";
                        rows += students[j].getElementsByTagName("name")[0].childNodes[0].nodeValue;

                        rows += "</td><td>";
                        rows += students[j].getElementsByTagName("group")[0].childNodes[0].nodeValue;

                        rows += "</td><td>";
                        rows += students[j].getElementsByTagName("book")[0].childNodes[0].nodeValue;
                        rows += "</td></tr>";
                    }
                }
                if (j >= 0) i = j;
            }else {
                rows = "<tr> <th>Name</th> <th>Group</th> <th>Book</th> </tr>";
                i = 0;
            }
        }
        console.log("I end: ", i);
        console.log(rows);

        $('#content').html(rows);
    });
    document.getElementById("content").innerHTML = table;
}