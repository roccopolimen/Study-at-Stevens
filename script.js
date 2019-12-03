//var file_txt = "";
//    
//"/classes/ma121/problems/Problem_5.txt"
//
////path = "/classes/"+target_class+"/problems/"+target_problem
//$.get("/classes/"+target_class+"/problems/"+target_problem,  function(data) {
//    file_txt = data;
//    alert(file_txt);
//});

function load_problem(cl, num){
    var logfile;
    $.get("/classes/"+cl+"/problems/Problem_"+num+".txt", function(response) {
        logfile = response.split("\n");
        alert(response);

        var topic = logfile[1];
        
        var prob_number = logfile[4];

        var prob_body = "";
        var n = 7;
        while (logfile[n] != logfile[2]){
            prob_body += logfile[n];
            n++;
        }

        var solution = logfile[n+2];
        
        alert(topic + prob_number + prob_body + solution);
    });
}
