function create_books(tx){
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Matt","Matthew","1")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Mark","Mark","2")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Luke","Luke","3")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("John","John","4")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Acts","Acts","5")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Rom","Romans","6")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("1Cor","1 Corinthians","7")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("2Cor","2 Corinthians","8")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Gal","Galatians","9")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Eph","Ephesians","10")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Phil","Philippians","11")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Col","Colossians","12")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("1Thess","1 Thessalonians","13")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("2Thess","2 Thessalonians","14")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("1Tim","1 Timothy","15")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("2Tim","2 Timothy","16")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Titus","Titus","17")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Phlm","Philemon","18")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Heb","Hebrews","19")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Jas","James","20")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("1Pet","1 Peter","21")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("2Pet","2 Peter","22")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("1John","1 John","23")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("2John","2 John","24")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("3John","3 John","25")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Jude","Jude","26")');
  tx.executeSql('INSERT INTO BOOKS (s_title,title,id) VALUES("Rev","Revelation","27")');
}