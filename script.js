var n1=0,n3=0,n2=0,n4=0,n5=0,n6=0,n7=0,n8=0,n9=0,n10=0,final=0;
var i=0,j=0;
var click=0;
var piccode1,piccode2;
function check(){
        if(n1==0){
                document.getElementById("num1").style.transform="rotateY(180deg)";
                n1++;
        }else if(n1==1){
                document.getElementById("num1").style.transform="rotateY(0deg)";
                n1--;
        }
        if(click==0){
            console.log(click);
            click=1;
            piccode1=1;
            i=1;
        }else{
            console.log(click);
            click=0;
            piccode2=1;
            j=1;
            checking(piccode1,piccode2,i,j);
        }
}
function check2(){
    if(n2==0){
            document.getElementById("num2").style.transform="rotateY(180deg)";
            n2++;
    }else if(n2==1){
            document.getElementById("num2").style.transform="rotateY(0deg)";
            n2--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=2;
        i=2;
    }else{
        console.log(click);
        click=0;
        piccode2=2;
        j=2;
        checking(piccode1,piccode2,i,j);
    }
}

function check3(){
    if(n3==0){
            document.getElementById("num3").style.transform="rotateY(180deg)";
            n3++;
    }else if(n3==1){
            document.getElementById("num3").style.transform="rotateY(0deg)";
            n3--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=3;
        i=3;
    }else{
        console.log(click);
        click=0;
        piccode2=3;
        j=3;
        checking(piccode1,piccode2,i,j);
    }
}
function check4(){
    if(n4==0){
            document.getElementById("num4").style.transform="rotateY(180deg)";
            n4++;
    }else if(n4==1){
            document.getElementById("num4").style.transform="rotateY(0deg)";
            n4--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=4;
        i=4;
    }else{
        console.log(click);
        click=0;
        piccode2=4;
        j=4;
        checking(piccode1,piccode2,i,j);
    }
}
function check5(){
    if(n5==0){
            document.getElementById("num5").style.transform="rotateY(180deg)";
            n5++;
    }else if(n5==1){
            document.getElementById("num5").style.transform="rotateY(0deg)";
            n5--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=1;
        i=5;
    }else{
        console.log(click);
        click=0;
        piccode2=1;
        j=5;
        checking(piccode1,piccode2,i,j);
    }
}
function check6(){
    if(n6==0){
            document.getElementById("num6").style.transform="rotateY(180deg)";
            n6++;
    }else if(n6==1){
            document.getElementById("num6").style.transform="rotateY(0deg)";
            n6--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=5;
        i=6;
    }else{
        console.log(click);
        click=0;
        piccode2=5;
        j=6;
        checking(piccode1,piccode2,i,j);
    }
}
function check7(){
    if(n7==0){
            document.getElementById("num7").style.transform="rotateY(180deg)";
            n7++;
    }else if(n7==1){
            document.getElementById("num7").style.transform="rotateY(0deg)";
            n7--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=4;
        i=7;
    }else{
        console.log(click);
        click=0;
        piccode2=4;
        j=7;
        checking(piccode1,piccode2,i,j);
    }
}
function check8(){
    if(n8==0){
            document.getElementById("num8").style.transform="rotateY(180deg)";
            n8++;
    }else if(n8==1){
            document.getElementById("num8").style.transform="rotateY(0deg)";
            n8--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=2;
        i=8;
    }else{
        console.log(click);
        click=0;
        piccode2=2;
        j=8;
        checking(piccode1,piccode2,i,j);
    }
}
function check9(){
    if(n9==0){
            document.getElementById("num9").style.transform="rotateY(180deg)";
            n9++;
    }else if(n9==1){
            document.getElementById("num9").style.transform="rotateY(0deg)";
            n9--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=5;
        i=9;
    }else{
        console.log(click);
        click=0;
        piccode2=5;
        j=9;
        checking(piccode1,piccode2,i,j);
    }
}
function check10(){
    if(n10==0){
            document.getElementById("num10").style.transform="rotateY(180deg)";
            n10++;
    }else if(n10==1){
            document.getElementById("num10").style.transform="rotateY(0deg)";
            n10--;
    }
    if(click==0){
        console.log(click);
        click=1;
        piccode1=3;
        i=10;
    }else{
        console.log(click);
        click=0;
        piccode2=3;
        j=10;
        checking(piccode1,piccode2,i,j);
    }
}
function checking(a,b,i,j){
    if(a==b && i!=j){
           setTimeout(() => {
               console.log(i);
               console.log(j);
            document.getElementById("front"+j).style.display="none";
            document.getElementById("back"+j).style.display="none";
            document.getElementById("num"+j).style.boxShadow="none";
            document.getElementById("num"+i).style.boxShadow="none";
            document.getElementById("front"+i).style.display="none";
            document.getElementById("back"+i).style.display="none";
            final++;
            if(final==5){
                alert("Congrats!..");
            }
           }, 1000);
            
    }else{
        setTimeout(() => {
            document.getElementById("num"+j).style.transform="rotateY(0deg)";
            document.getElementById("num"+i).style.transform="rotateY(0deg)";
            n1=0,n3=0,n2=0,n4=0,n5=0,n6=0,n7=0,n8=0,n9=0,n10=0;
        }, 1000);
    }
}

