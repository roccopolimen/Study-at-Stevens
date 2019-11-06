function load_problem(target_problem, target_class){
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "/classes/"+target_class+"/problems/"+target_problem, true);
    txtFile.onreadystatechange = function() {
        if (txtFile.readyState === 4 && txtFile.status == 200) {
            document.getElementById("problem_header").innerHTML = text;
        }
    }
}

window.onLoad = load_problem("Problem_1","ma121");