function calculation() {
    var x = document.getElementsByName('x');
    var y = document.getElementsByName('y');
    // var z = document.getElementsByName('z');
    var F = 1-x[0].value*y[0].value+x[0].value/y[0].value;
    alert(F);
}

function date() {
    now= new Date();
    date= now.getDate();
    month= now.getMonth()+1;
    year= now.getYear()-100;
    dateStr= date;
    dateStr+= "%" + month;
    dateStr+= "%" + year;
    document.date.date.value = dateStr;
    Timer= setTimeout("date()", 1000);
}

function clock() {
    now= new Date();
    min = now.getMinutes();
    sec = now.getSeconds();
    hour = now.getHours();
    dateStr= min;
    dateStr+= "/" + sec;
    dateStr+= "/" + hour;
    document.clock.clock.value = dateStr;
    Timer= setTimeout("clock()", 100);
}
