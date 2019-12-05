//var file_txt = "";
//    
//"/classes/ma121/problems/Problem_5.txt"
//"/classes/"+cl+"/problems/Problem_"+num+".txt"
//
////path = "/classes/"+target_class+"/problems/"+target_problem
//$.get("/classes/"+target_class+"/problems/"+target_problem,  function(data) {
//    file_txt = data;
//    alert(file_txt);
//});

//function load_problem(cl, num){
// var logfile;
// $.get("/classes/ma121/problems/Problem_5.txt", function(response) {
//     logfile = response.split("\n");
//     alert(response);
//     var topic = logfile[1];
    
//     var prob_number = logfile[4];
//     var prob_body = "";
//     var n = 7;
//     while (logfile[n] != logfile[2]){
//         prob_body += logfile[n];
//         n++;
//     }
    
//     n+=2
//     var solution = "";
//     while (logfile[n] != logfile[2]){
//         solution += logfile[n];
//         n++;
//     }
    
//     alert(topic + prob_number + prob_body + solution);
    
//     $("#prob_header").text(topic + ": Problem " + prob_number);
//     $("#prob_content").text("Problem: " + prob_body);
//     $("#prob_solution").text("Solution: " + solution);
//     //$("#prob_solution").hide();
// });
//}

//var topic;
//var prob_number;
//var prob_body;
//var solution;

function load_problem(class_name, problem_num) {
    $.ajax({async: false});
    var logfile;
    var path = "/classes/" + class_name + "/problems/Problem_" + problem_num + ".txt";

    $.get(path, function(response) {
        logfile = response.split("\n");
        var topic = logfile[1];
        var prob_number = logfile[4];
        var prob_body = "";

        var n = 7;
        while(logfile[n] != logfile[2]) {
            prob_body += logfile[n]+"\n";
            n++;
        }
        n += 2;
        var solution = "";
        while(logfile[n] != logfile[2]) {
            solution += logfile[n]+"\n";
            n++;
        }

        alert("Topic: "+topic+"\nProblem: "+prob_body);
        alert("Solution: "+solution);
    });
}

function contact_form(){
    alert("Message Sent.")
}

//$(document).ready(function{
//    $.ajax({async: false});
//    $("#prob_header").text(topic + ": Problem " + prob_number);
//    $("#prob_content").text("Problem: " + prob_body);
//    $("#prob_solution").text("Solution: " + solution);
//    //$("#prob_solution").hide();
//});