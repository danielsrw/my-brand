function ajaxpost () {
    // (A) GET FORM DATA
    var form = document.getElementById("myForm");
    var data = new FormData(form);

    // (B) AJAX REQUEST
    // (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
    fetch("contact.html", { method:"POST", body:data })
    .then(res=>res.text())

    // (B2) SHOW MESSAGE ON SERVER RESPONSE
    .then((response) => {
        console.log(response);
        if (response == "OK") { alert("SUCCESSFUL!"); }
        else { alert("FAILURE!"); }
    })

    // (B3) OPTIONAL - HANDLE FETCH ERROR
    .catch((err) => { console.error(err); });

    // (C) PREVENT FORM SUBMIT
    return false;
}