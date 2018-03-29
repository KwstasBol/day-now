module.exports={
    getCurrentDay,
    getCurrentMonth,
    getCurrentDate
}


function getCurrentDay(z){
    var d = new Date();
    var n ='';
    if(z="z"){
        if(d<10){
            n="0"+d.getDate();
        }
        else{
            n=d.getDate();
        }
    }
    else if(z="nz"){
        n= d.getDate();
    }
   
    return n;
}
function getCurrentMonth(type){
    var d = new Date();
    var month = [];
    if(type=="mna"){
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";  
    }
    else if(type=="mnu"){
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";
    }
    var n =month[d.getMonth()];
    return n;
}
function getCurrentYear(){
    var d=new Date();
    var n=d.getFullYear();
    return n;
}

function getCurrentDate(dty,delimeter){
    var date='';
    if(dty=="us"){
        date=getCurrentMonth("mnu")+delimeter+getCurrentDay("z")+delimeter+getCurrentYear();
        return date;
    }
    else if(dty=="eu"){
        date=getCurrentDay("z")+delimeter+getCurrentMonth("mnu")+delimeter+getCurrentYear();
        return date;
    }
    else if(dty="nm"){
        date=getCurrentDay("nz")+delimeter+getCurrentMonth("mna")+delimeter+getCurrentYear();
        return date;
    }
   
}
