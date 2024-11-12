function dateAndTime(){
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var dd=date.getDate();
    var mo=date.getMonth();
    var allmo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    mo=allmo[mo];
    var yy=date.getFullYear();
    var dy=date.getDay();
    var img=["nature_1.jpg","nature_2.jpg","nature_3.jpg","nature_4.jpg","nature_5.jpg","nature_6.jpg","nature_7.jfif"]
    document.body.style.backgroundImage=`url(../images/${img[dy]})`;
    var allDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    dy=allDay[dy]
    var am_pm="AM";
    if(hh>=12){
        am_pm="PM";
        if(hh>12){
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    if(hh>=0&&hh<=9){
        hh="0"+hh
    }
    if(mm>=0 && mm<=9){
        mm="0"+mm
    }
    if(dd>=0 && dd<=9){
        dd="0"+dd;
    }
    if (ss>=0 && ss<=9){
        ss="0"+ss
    }
    document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
    document.getElementById("dd").innerHTML=`${dd}-${mo}-${yy}`
    document.getElementById("day").innerHTML=dy
    document.getElementById("sec").innerHTML=ss;
    
    }
setInterval(dateAndTime,1000)
