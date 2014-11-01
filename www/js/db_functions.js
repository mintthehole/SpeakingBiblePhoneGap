// create and Populate the database
function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS BOOKS (id unique, s_title,title)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS CHAPTERS (id unique,book_s_title,chapter_no,url)');
}

function createBooks(tx) {
    tx.executeSql('SELECT * FROM BOOKS', [], querySuccessBooks, errorCB);
}

function createChapters(tx) {
    alert("pollo");
    tx.executeSql('SELECT * FROM CHAPTERS', [], querySuccessChapters, errorCB);
}




function querySuccessChapters(tx, results) {
    var len = results.rows.length;
    if (len == 0)
    {

        create_chapters(tx);
    }
}

function querySuccessBooks(tx, results) {

    var len = results.rows.length;
    if (len == 0)
    {

        create_books(tx);
    }
    createChapters(tx);
}


// Transaction error callback
function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

// Transaction success callback
function successCB() {
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
    db.transaction(createBooks, errorCB);
    // alert("success");

}