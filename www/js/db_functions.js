// create and Populate the database
function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS BOOKS (id unique, s_title,title)');
}

// Query the database
function queryDB(tx) {
    tx.executeSql('SELECT * FROM BOOKS', [], querySuccess, errorCB);
}

// Query the success callback and populate db to table
function querySuccess(tx, results) {
    var len = results.rows.length;
    if (len == 0)
    {
        create_books(tx);
    }
    else{
    }
    // $("#pollo").append("<h3>");
    // for (var i=0; i<len; i++){

    //     $("#pollo").append("<a href='play.html?id=" + results.rows.item(i).id + "'>"+ results.rows.item(i).title +"</a>");
    //     $("#pollo").append("<br/>");

    // }
    // $("#pollo").append("</h3>");
}

// Transaction error callback
function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

// Transaction success callback
function successCB() {
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
    db.transaction(queryDB, errorCB);
    // alert("success");

}