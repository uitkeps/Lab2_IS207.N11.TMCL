    var dob = new Date("06/16/2002");  
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff);       
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);  

    console.log("Age of the date entered: " + age + " years");