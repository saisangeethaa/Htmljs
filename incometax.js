
function cals()
{ 
    let x;
    let y;
    x=document.getElementById("salary").value;

    if(x<=300000)
    {
y=(x/100)*8;
document.getElementById('a1').value=y;
    }
    else if (x>30000 && x<=500000){
        y=(x/100)*10;
        document.getElementById('a1').value=y; 
    }
    else if (x>50000 && x<=800000){
        y=(x/100)*12;
        document.getElementById('a1').value=y; 
    }
    else if (x>80000 && x<=1000000){
        y=(x/100)*14;
        document.getElementById('a1').value=y; 
    }
    
    else if (x>1000000){
        y=(x/100)*16;
        document.getElementById('a1').value=y; 
    }
}

    


    
 