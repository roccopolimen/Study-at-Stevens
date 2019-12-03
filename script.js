function load_problem(target_problem, target_class){
    file_txt = "";
    
    //path = "/classes/"+target_class+"/problems/"+target_problem
    var client = new XMLHttpRequest();
    client.open('GET', "/classes/"+target_class+"/problems/"+target_problem);
    
    client.onreadystatechange = function() {
        alert(client.responseText);
    }
    client.send();
}

window.onLoad = load_problem("Problem_1","ma121");