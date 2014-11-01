// create and Populate the database
function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO1 (id unique, url,title)');
}

// Query the database
function queryDB(tx) {
    tx.executeSql('SELECT * FROM DEMO1', [], querySuccess, errorCB);
}

// Query the success callback and populate db to table
function querySuccess(tx, results) {
    var len = results.rows.length;
    if (len == 0)
    {
      tx.executeSql('INSERT INTO DEMO1 (id, url,title) VALUES (1, "http://cloud.faithcomesbyhearing.com/mp3audiobibles2/MJSNIVN2DA/B01___03_Matthew_____MJSNIVN2DA.mp3", "Mathew 1")');
      tx.executeSql('INSERT INTO DEMO1 (id, url,title) VALUES (2, "http://cloud.faithcomesbyhearing.com/mp3audiobibles2/MJSNIVN2DA/B01___03_Matthew_____MJSNIVN2DA.mp3", "Mathew 2")');
    }
    else{
    }
    $("#pollo").append("<h3>");
    for (var i=0; i<len; i++){

        $("#pollo").append("<a href='play.html?id=" + results.rows.item(i).id + "'>"+ results.rows.item(i).title +"</a>");
        $("#pollo").append("<br/>");

    }
    $("#pollo").append("</h3>");
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