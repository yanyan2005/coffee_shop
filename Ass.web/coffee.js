function search() {
    let filter = document.getElementById('find-slection').value.toUpperCase();
    let item = document.querySelectorAll('.coffee');

    for (var i = 0; i < item.length; i++) {
        let a = item[i].getElementsByTagName('h2')[0];
        let value = a.textContent || a.innerText;

        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
        }
    }
}

