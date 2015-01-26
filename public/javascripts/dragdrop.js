function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    
    // Parse "id"-section from dropped element
    var dragged_id = "";
    for(var i = 0; i < data.length - 2; ++i) {
        // if "id=" is found
        if (data[i] === "i" && data[i + 1] === "d" && data[i + 2] === "=") {
            // To the beginning of the dragget items id
            i = i + 4;
            // Lure's id to dragged_id
            for(i; i < data.length - 2; ++i) 
            {
                // id end to "-character
                if(data[i] === "\"") {
                    break;
                }
                dragged_id += (data[i]);
            }
        }
    }
    
    // Lure with own text as a separate because it shows a modal
    if(dragged_id === "your_text_lure") {
        $('#textModal').modal('show');
        return;
    }
    
    // Redirect if 50mm main lure is dropped to cart
    if(dragged_id === "50mm_main") {
        window.location.href = "/vaaput/50mm/varikartta";    
    }

    // Angular scope
    var scope = angular.element(document.getElementById('angularBody')).scope();
    
    // Whitelist valid elements and call angularcontroller
    switch(dragged_id) {
        case "kiiski":
            scope.addOrder('Kameleonttikiiski', 10);
            break;
        case "violetti":
            scope.addOrder('Violetti kameleontti', 10);
            break;
        case "hopeahile":
            scope.addOrder("Hopeahile", 10);
            break;
        case "sinihile":
            scope.addOrder("Sinihile", 10);
            break;
        case "vihrea":
            scope.addOrder("Tylliahven", 10);
            break;
        case "papukaija":
            scope.addOrder("Papukaija", 10);
            break;
    }

    scope.$apply();
}
