var intialprice=document.querySelector(".intial-price");
var nostocks=document.querySelector(".no-stocks");
var currentprice=document.querySelector(".current-price");
var submitbtn=document.querySelector(".submit-btn");
var ans=document.querySelector(".answer");

function validateresult(){
var ip=Number(intialprice.value);
var cp=Number(currentprice.value);
var stckcnt=Number(nostocks.value);

if(ip>cp)
{
var loss=(ip-cp)*stckcnt;
var lossperc=(loss/ip)*100;
ans.innerText="Your Loss is " +loss+" and Loss Percentage is "+lossperc;
}else{
    var profit=(cp-ip)*stckcnt;
    var profitperc=(profit/ip)*100;
     ans.innerHTML="Your Profit is "+profit+" and Profit Percentage is "+profitperc;
}

}

submitbtn.addEventListener('click', validateresult);