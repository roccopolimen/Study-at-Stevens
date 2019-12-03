var logfile;
$.get("/classes/ma121/problems/Problem_1.txt", function(response) {
    logfile = response;
    alert(logfile);
});