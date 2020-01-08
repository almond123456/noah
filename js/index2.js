//获取元素
var banner_Content1 = document.querySelector(".banner_content1");
var banner_right=document.querySelector(".banner_right");
var con_Top=document.querySelector(".con_top");
var con_Top2=document.querySelector(".con_top2");
var con_Mid=document.querySelector(".con_mid");
var con_Mid2=document.querySelector(".con_mid2");
var mix_top_Con1=document.querySelector(".mix_top_con1");
var mix_top_Con2=document.querySelector(".mix_top_con2");
var innovate1_con1_img1=document.querySelector(".innovate1_con1_img1");
var innovate2_con2_img1=document.querySelector(".innovate2_con2_img1");
var innovate1_con1_img3=document.querySelector(".innovate1_con1_img3");
var innovate2_con2_img3=document.querySelector(".innovate2_con2_img3");
var innovate1_con1_img2=document.querySelector(".innovate1_con1_img2");
var innovate2_con2_img2=document.querySelector(".innovate2_con2_img2");
var innovate1_con1_img4=document.querySelector(".innovate1_con1_img4");
var innovate2_con2_img4=document.querySelector(".innovate2_con2_img4");
var culture_con4=document.querySelector(".culture_con4");//文创工坊

var coop_c_title=document.querySelector(".coop_c_title");
var coop_c_mid=document.querySelector(".coop_c_mid");
var coop_c_foot=document.querySelector(".coop_c_foot");

 


// 页面每滚动一像素 bannerLeft 要旋转的角度
var speed = 360/window.innerHeight;//4/6倍速45*4 360,360*6 2160
var speed1 = 2160/window.innerHeight;
var speed2=600/window.innerHeight;//半屏 300*2
var speed3=1200/window.innerHeight;//半屏 600*2
var speed4=90/344; // 2156-2500px
var speed5=500/360; //2940-3300px  3684-4044px img1
var speed6=60/360;//2940-3300px  3684-4044px img3
var speed7=90/300;//3300px-3600px  4044-4344px img2
var speed8=500/360; // 2940-3300px  3684-4044px img4
var speed9=90/220;   //4880-5100px 文创工坊

var speed10=300/400;  //5290-5690px
var speed11=500/282;//5730-6012px
// 监听当前网页的滚动
window.onscroll=function(){
    //获取当前的滚动高度
    var top=document.documentElement.scrollTop;
    console.log(top);

    //y轴旋转的动画
    var angle=top*speed;
    if(angle<45){
        banner_Content1.style.transform="rotateY("+(45-angle)+"deg)";
    }
    else{
        banner_Content1.style.transform="rotateY(0deg)";
    }
    
    //右下角动画
    var angle2=top*speed1;
    if(angle2<360){
        banner_right.style.transform="rotate("+(360-angle2)+"deg)";
    }
    else{
        banner_right.style.transform="rotate(0deg)";
    }

    //处理首屏的定位方式
    // if(top>window.innerHeight){
    //     banner.style.position="absolute";
    //     banner.style.top=window.innerHeight+"px";
    //     }
    //     else{
    //     banner.style.position="fixed";
    //     banner.style.top=0;
    //     }


//基地简介01，02,标题1，标题2动画
if(top > 0.5*window.innerHeight && top < 1*window.innerHeight){
    var dis=-300+(top-0.5*window.innerHeight) * speed2;
    con_Top.style.transform="translateX("+dis+"px)";  

    var dis1=600-(top-0.5*window.innerHeight)*speed3;
    con_Mid.style.transform="translateX("+dis1+"px)";
}
else if(top > 1*window.innerHeight){
    con_Top.style.transform="translateX(0px)";//解决误差
    con_Mid.style.transform="translateX(0px)";
}
if(top > 1.5*window.innerHeight && top < 2*window.innerHeight){
    var dis2=300-(top-1.5*window.innerHeight) * this.speed2;
    con_Top2.style.transform="translateX("+dis2+"px)";

    var dis3=-600+(top-1.5*window.innerHeight)*speed3;
    con_Mid2.style.transform="translateX("+dis3+"px)";
    
}
else if(top > 2*window.innerHeight){
    con_Top2.style.transform="translateX(0PX)";
    con_Mid2.style.transform="translateX(0px)";
}
//产业融合部分
if(top>2156 && top<2500){
    var angle=90-(top-2156) * speed4;
    var angle2=90-(top-2156) * this.speed4;
    mix_top_Con1.style.transform="rotateX("+angle+"deg)";
    mix_top_Con2.style.transform="rotateX("+angle2+"deg)";

}
else if(top>2500){
    mix_top_Con1.style.transform="rotateX(0deg)";
}

//产教融合创新平台部分1  img1 5 ,img6 6 ,img2 7,img4 speed8
if(top>2940 && top<3300){
var dis=-500+(top-2940)*speed5;
innovate1_con1_img1.style.transform="translateX("+dis+"px)";

var angle=60-(top-2940)*speed6;
innovate1_con1_img3.style.transform="rotateY("+angle+"deg)";

var dis2=500-(top-2940)*speed8;
innovate1_con1_img4.style.transform="translateX("+dis2+"px)";
}
else if(top>3300){
innovate1_con1_img1.style.transform="translateX(0px)";
innovate1_con1_img3.style.transform="rotateY(0deg)";
innovate1_con1_img1.style.transform="translateX(0px)";
}

if(top>3300 && top<3600){
    var angle3=90-(top-3300)*speed7;
    innovate1_con1_img2.style.transform="rotateX("+angle3+"deg)";
    }
    else if(top>3600){
    innovate1_con1_img2.style.transform="rotateX(0deg)";
    }

//产教融合创新平台部分2
if(top>3684 && top<4044){
    var dis=500-(top-3684)*speed5;
    innovate2_con2_img1.style.transform="translateX("+dis+"px)";

    var dis2=-500+(top-3684)*speed5;
    innovate2_con2_img4.style.transform="translateX("+dis2+"px)";
  
    }
    else if(top>4044){
    innovate2_con2_img1.style.transform="translateX(0px)";
    innovate2_con2_img4.style.transform="translateX(0px)";

    }
    
if(top>4044 && top<4344){
    var angle2=60-(top-4044)*speed6;
    innovate2_con2_img3.style.transform="rotateY("+angle2+"deg)";

    var angle3=90-(top-4044)*speed7;
    innovate2_con2_img2.style.transform="rotateX("+angle3+"deg)";
    }
    else if(top>4344){
    innovate2_con2_img3.style.transform="rotateY(0deg)";

    innovate2_con2_img2.style.transform="rotateX(0deg)";
    }
//文创工坊
if(top>4880 && top<5100){
var angle=90-(top-4880)*this.speed9;
culture_con4.style.transform="rotateX("+ angle+"deg)";
}
else if(top>5100){
culture_con4.style.transform="rotateX(0deg)";
}

if(top>5290 && top<5690){
    var dis=-300+(top-5290)*speed10;
    coop_c_title.style.transform="translateX("+dis+"px)";

    var dis2=-300+(top-5290)*speed10;
    coop_c_mid.style.transform="translateX("+dis2+"px)";
  
    }
    else if(top>5290){
    coop_c_title.style.transform="translateX(0px)";
    coop_c_mid.style.transform="translateX(0px)";

    }

if(top>5730 && top<6012){
    var dis=500-(top-5730)*speed11;
    coop_c_foot.style.transform="translateX("+dis+"px)";


    }
    else if(top>6012){
    coop_c_foot.style.transform="translateX(0px)";

    }


}



//网页内容加载完成时回到顶部
// window.onload=function(){
//     setTimeout(function(){
//         window.scrollTo(0,0);
//     },20);
// }







