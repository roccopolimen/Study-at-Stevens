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