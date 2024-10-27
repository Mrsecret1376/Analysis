// ==UserScript==

// @name Analiz zrib AI 

// @namespace http://tampermonkey.net/

// @version 0.7

// @description Enhance game_busted and game_waiting functions with AI capabilities

// @author Your Name

// @match http://*/*","https://*/*"
// @grant allow-scripts

// @require https://raw.githubusercontent.com/mrsecret0000/bot/refs/heads/main/ml5.js

// @require https://raw.githubusercontent.com/mrsecret0000/bot/refs/heads/main/tf.min.js

// @require https://raw.githubusercontent.com/mrsecret0000/bot/refs/heads/main/keras.min.js

// @require https://raw.githubusercontent.com/mrsecret0000/bot/refs/heads/main/compromise-speed.min.js

// ==/UserScript==

//algoritm
var nored_price_alogoritm_fibonaci = false;
var nored_price_alogoritm_randValue = false;
var nored_price_alogoritm_double = true;
var nored_price_algoritm_sum = false;
var nored_price_nored_fake_stop_algoritm = false;
//fibonaci
var nored_fi_previous_price = 1;
var nored_double_start_algortim = 1;
//var t_coefficient = 1;//ضریب مقادیر است 1 , 10,100
var nored_t_times = 100;//تعداد دفعات تکرار حلقه
var nored_numberOneCount =0;
// this is the code which will be injected into a given page...
var nored_h_docule_first_value = 12.5;
var nored_h_double_amount = 12.5;

var nored_t_fakeStop = 1.87;//ضریب توقف برای اولیت های حلقه
var nored_t_forceStop = 3.30;//ضریب
var damage = 0;

var nored_t_randValue;//آخرین ضریب ارایه شده
var nored_t_correntValue;//ضریب درحال حاظر


//append to functions
var nored_f_game_waiting = game_waiting;
var nored_f_game_busted = game_busted;
var nored_f_game_update = game_update;
var nored_f_game_cash_out = game_cash_out;
var box =document.getElementsByClassName('game-controls')[0];
//elements
var t_cashoutProduct = document.getElementsByClassName('cashout-amount')[0];
var t_nored_priceAmount = document.getElementsByClassName('game-amount')[0];
var t_setCashBtn = document.getElementsByClassName("place-bet")[0];//دکمه ثبت
var t_setCashCancelBtn = document.getElementsByClassName("place-bet-cancel")[0];//دکمه کنسل
var h_information = $('div.user-name');
h_information.after("<div class='top-link'><h4 id='hadi-box'><b>ربات فعال شده است .</b></h4></div> ");

// var t_remain = $("div.top-link chips-amount");//مقدار باقی مانده ما
var nored_counter = 0;
//
var nored_lastRoundCo=2;
var nored_lastRoundResult=1;
var nored_betIndex=1;
var nored_savedIndex=0;
var nored_skipped=0;
var nored_coeficientRange=[1.2,1.2,1.25,1.30,1.35,1.4,1.45,1.5,1.6,1.7,1.8,1.9];
var nored_BETs=[1,1,8,33,124,418,1300,3770,9425,23200,54686,116207,232414];
var nored_primary_BETs=[1,1,8,33,124,418,1300,3770,9425,23200,54686,116207,232414];
var random_ranges=[1,2,3,4,5,6,7,8,9,10,11,12,13];
var nored_bet_counter=0;
var nored_bias=1.99;
var nored_coe_greater_than_nored_bias_seen_flag=1;
var nored_avgCOE=1.48;
var nored_rnd_skip=1;
var nored_enable_crash=0;
function nored_getCondition( nored_counter) {
	if(nored_enable_crash===1){
		nored_makeDecision();
			if(nored_betIndex>0 && nored_BETs[nored_betIndex]>10000000000){
					nored_BETs=nored_primary_BETs;
					nored_betIndex=1;
			}
		t_cashoutProduct.value = nored_coeficientRange[nored_betIndex];
		setCoficient();
		t_nored_priceAmount.value = nored_BETs[nored_betIndex]*t_coefficient;
		t_setCashBtn.click();
	}
}

// get nored_price to add it
function nored_getprice() {
     if (nored_price_alogoritm_fibonaci) {

         return nored_fibonacci_algoritm();
     } else if (nored_price_alogoritm_randValue) {

         return nored_rand_value_algoritm();
     } else if (nored_price_alogoritm_double) {

        return nored_double_algoritm();
     }

     return 0;
}

game_waiting = (function () {
    return function (str) {
		if(nored_enable_crash===1){
        console.log("game_waiting ", str);
        nored_getInformation();
         nored_H_addOption();
         if (nored_t_times % 15!= 0 ) {
            nored_getCondition(nored_counter); gane wating
         }
         var robot = getCookie('crash50');
            
         if (robot=='bot') {

             console.log("XXXXX");
             setTimeout(myFunction,60*10000*60*4250);
         }else{
		}
        nored_f_game_waiting.apply(this, arguments);  calling the real function
         }
        
    };
}());

game_busted = (function () {
    return function (str) {
	if(nored_enable_crash===1){
        var currentValue = str.amount / 100;
        nored_lastRoundCo= currentValue;
		if(currentValue>nored_bias){
			nored_coe_greater_than_nored_bias_seen_flag=1;
		}
        if (currentValue >= nored_coeficientRange[nored_betIndex]) {
            if played
            if(nored_betIndex>0){
                nored_lastRoundResult=1;
                nored_betIndex=1;
                nored_BETs=nored_primary_BETs;
				nored_bet_counter=0;
            }
            nored_t_times--;
            nored_counter = 0;
            nored_fi_previous_price = 1;
            nored_numberOneCount = 0;
            damage = 0;
            nored_h_double_amount = nored_h_docule_first_value;
        } else {
            if played
            if(nored_betIndex>0){
                    nored_lastRoundResult = 0;
                    nored_savedIndex = nored_betIndex;
                    nored_betIndex = 0;
                    nored_skipped = 0;
					 nored_bet_counter is standing for getting ranges for get random values to wait
                    nored_rnd_skip = Math.floor((Math.random() * random_ranges[2* nored_bet_counter+1]) + random_ranges[2* nored_bet_counter]);
					nored_coe_greater_than_nored_bias_seen_flag=0;
					nored_bet_counter++;
					if((2*nored_bet_counter+1)>random_ranges.length){
						nored_bet_counter=0;
					}
            }
					
			
            nored_counter++;
            if (currentValue < 2){
                nored_numberOneCount++;

            }
            damage += nored_getprice() * t_coefficient;
        }
	}
        nored_f_game_busted.apply(this, arguments);  calling the real function
    };
}());




game_update = (function () {
    return function (str) {
        var robot = getCookie('crash50');
         if (robot=='bot') {
             setTimeout(myFunction,60*10000*60*4250);
         }else
            nored_f_game_update.apply(this, arguments);  calling the real function
    };
}());

game_cash_out = (function () {
    return function (str) {
		if(nored_enable_crash===1){
			console.log(str);
		}
        nored_f_game_cash_out.apply(this, arguments);  calling the real function
    };
}());

//aloritms
function nored_fake_stop_algoritm(nored_counter, str) {
    var t_cachoutBtn = document.getElementsByClassName("place-bet-cashout")[0];
    if (nored_counter ==0 || nored_counter == 1 || nored_counter == 3 || nored_counter ==2) {
        if( (str.current/100) >= (nored_t_fakeStop -0.40) ){

            t_cachoutBtn.click();
        }
    }
    if (nored_counter == 4 || nored_counter == 3 || nored_counter ==2) {
        if( (str.current/100) >= nored_t_fakeStop){

            t_cachoutBtn.click();
        }
    }
    if (nored_numberOneCount>13){
        if( (str.current/100) >= 2.9)
            t_cachoutBtn.click();
    }
}


function nored_fibonacci_algoritm() {
    if (nored_t_times > 0) {
        for (var i= 0; i<nored_counter ;i++) {
            nored_fi_previous_price += i;
        }

        return nored_fi_previous_price;
    }

    return 0;
}

function nored_double_algoritm() {
     if (nored_t_times > 0) {

        return nored_BETs[nored_betIndex] ;
     }

     return 0;
}

function nored_rand_value_algoritm() {
    var nored_t_prices = [1,1, 2, 4, 8, 15, 30,50, 80, 140, 220, 330, 490, 710, 980, 1450, 1950, 3500,5850,8950, 13800,20750,35000 ,55000,93000,180000 ];//مقادیر8100

    if (nored_t_prices.length == nored_counter) {
        nored_counter = 0;
    }
    return nored_t_prices[nored_counter];
}

function nored_sum_alogoritm() {
    var p = 1;
    for (var i = 0; i <= nored_counter; i++) {
        p +=i;
    }

    return p;
}

//-------------------
function nored_getInformation(){
    var str =" <b style='color: green' ' >--->  ( بردها )  <---  :"+nored_t_times+ "</b>  | ";
    str += " <b style='color:red'>   ضرر :" + (nored_counter) + "</b> | ";
    str += " <b style='color:brown'>  ضررها :" + (damage) + "</b> | ";
    str += " <b style='color:blue'>  سود :   " + h_profit() + "</b> | ";
    str += " <b style='color:blueviolet'>  ضریب میانی :   " + (nored_t_fakeStop) + "</b> | ";
	str += " <b style='color:blueviolet'>  فعال است :   " + ("ضريب متغير و متوالي ") + "</b> | ";
    $("h4#hadi-box").html(str);
}

function changeMethod() {
    var method = $('select#change-method').val();
    switch (method) {
        case 1 : {
            nored_price_alogoritm_fibonaci = false;
            nored_price_alogoritm_randValue = true;
            nored_price_alogoritm_double = false;
            break;
        }
        case 2 : {
            nored_price_alogoritm_fibonaci = false;
            nored_price_alogoritm_randValue = false;
            nored_price_alogoritm_double = true;
            break;
        }
        case 3 : {
            nored_price_alogoritm_fibonaci = true;
            nored_price_alogoritm_randValue = false;
            nored_price_alogoritm_double = false;
            break;
        }
        default :{
            nored_price_alogoritm_fibonaci = true;
            nored_price_alogoritm_randValue = false;
            nored_price_alogoritm_double = false;
        }
    }
}
function changeCof() {
    var cof = $('select#change-method').val();
    t_coefficient = (cof) ? cof : 3.01;
}
//-----add option
function nored_H_addOption() {
    var h_option_text='<input id="conficient" class="amir" type="number" onchange="addConficient()" placeholder="صریب بازی" value="' + t_coefficient + '">';
     var h_option_text='<span style="color:red" > ضریب مبالغ :' + t_coefficient + '</span>';
    h_option_text += '<button class="amir" onclick="restartTimes()">+100 to WIN</button>';
    h_option_text += '<select onchange="changeConf()" id="change-method">';
    h_option_text += '<option value="3">3</option>';
    h_option_text += '<option value="4.01">4</option>';
    h_option_text += '<option value="5">5</option></select>';
	h_option_text += " <b style='color:blue'>  سود :   " + h_profit() + "</b> | ";
		$('input.amir').remove();
		$('button.amir').remove();
		h_option_text += $('div.top-bar').html();
	
    $('div.top-bar').prepend(h_option_text);
}

function addConficient() {
    t_coefficient = $("input#conficient").val();
}
function restartTimes() {
    nored_t_times += 100;
}

//profit
var first_amount = 0;
function h_profit() {
    if(first_amount == 0) {
        first_amount = user_data.chips;
    }

    return parseInt( (user_data.chips - first_amount)/100) ;
}

h_information.after("<div class='top-link'><span id='hadi-timing'></span></div> ");
 var test = setTimeout(myFunction, 50*60*1000);
function myFunction() {
    setCookie("crash50", "bot");
    alert('ربات تستی از کار افتاد لطفا با سازنده تماس بگیرید و پس از پرداخت هزبنه ربات بدونه محدودیت را دریافت کنید برای تماس به آیدی @ کنید');
}

function setCookie(cname,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (60*1000*1000*30));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCoficient() {
    var amount = user_data.chips/100;
    var newCof = parseInt(amount/10000) + 1;
    t_coefficient =  newCof;
}
function nored_makeDecision() {
    if(nored_lastRoundResult===0){	   
				   nored_betIndex= nored_savedIndex+1;
				   if(nored_betIndex>13){
					   nored_betIndex=1;
					   var num =0;
					   num = nored_BETs[4] * 3.0;
					   nored_BETs[1]=num.toFixed(0);
					   num = nored_BETs[1] * 3.0;
					   nored_BETs[2]=num.toFixed(0);
					   num = nored_BETs[2] * 3.0;
					   nored_BETs[3]=num.toFixed(0);
					   num = nored_BETs[3] * 3.0;
					   nored_BETs[4]=num.toFixed(0);
				   }
    }

    else{
        nored_betIndex=1;
    }
    if(nored_betIndex===1){
         nored_coeficientRange[nored_betIndex]=nored_lastRoundCo
    }
}
function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}
function nored_add_side_bar(){
	var side_bar='<div id="mySidenav" class="sidenav">';
  side_bar+='<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
  side_bar+='<a href="#">coe 1<input id="coe_id_1" onchange="nored_update_coe()" value="' + nored_coeficientRange[1] + '"></a>';
  side_bar+='<a href="#">coe 2<input id="coe_id_2" onchange="nored_update_coe()" value="' + nored_coeficientRange[2] + '"></a>';
  side_bar+='<a href="#">coe 3<input id="coe_id_3" onchange="nored_update_coe()" value="' + nored_coeficientRange[3] + '"></a>';
  side_bar+='<a href="#">coe 4<input id="coe_id_4" onchange="nored_update_coe()" value="' + nored_coeficientRange[4] + '"></a>';
  side_bar+='<a href="#">coe 5<input id="coe_id_5" onchange="nored_update_coe()" value="' + nored_coeficientRange[5] + '"></a>';
  side_bar+='<a href="#">coe 6<input id="coe_id_6" onchange="nored_update_coe()" value="' + nored_coeficientRange[6] + '"></a>';
  side_bar+='<a href="#">coe 7<input id="coe_id_7" onchange="nored_update_coe()"  value="' + nored_coeficientRange[7] + '"></a>';
  side_bar+='<a href="#">coe 8<input id="coe_id_8" onchange="nored_update_coe()" value="' + nored_coeficientRange[8] + '"></a>';
  side_bar+='<a href="#">coe 9<input id="coe_id_9" onchange="nored_update_coe()" value="' + nored_coeficientRange[4] + '"></a>';
  side_bar+='<a href="#">coe 10<input></input></a>';
  side_bar+='<a href="#">coe 11<input></input></a>';
  side_bar+='<a href="#">coe 12<input></input></a>';
  side_bar+='<a href="#">coe 13<input></input></a>';
  side_bar+='<a href="#">coe 14<input></input></a>';
  side_bar+='<a href="#">coe 15<input></input></a>';
side_bar+='</div>';
$( ".top-bar" ).before( side_bar);
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function nored_update_coe(){
	nored_coeficientRange[1] = $("input#coe_id_1").val();
	nored_coeficientRange[2] = $("input#coe_id_2").val();
	nored_coeficientRange[3] = $("input#coe_id_3").val();
	nored_coeficientRange[4] = $("input#coe_id_4").val();
	nored_coeficientRange[5] = $("input#coe_id_5").val();
	nored_coeficientRange[6] = $("input#coe_id_6").val();
	nored_coeficientRange[7] = $("input#coe_id_7").val();
	nored_coeficientRange[8] = $("input#coe_id_8").val();
	nored_coeficientRange[9] = $("input#coe_id_9").val();
}
function nored_update_side_bar(){
	$("input#coe_id_1").val(nored_coeficientRange[1]);
	$("input#coe_id_2").val(nored_coeficientRange[2]);
	$("input#coe_id_3").val(nored_coeficientRange[3]);
	$("input#coe_id_4").val(nored_coeficientRange[4]);
	$("input#coe_id_5").val(nored_coeficientRange[5]);
	$("input#coe_id_6").val(nored_coeficientRange[6]);
	$("input#coe_id_7").val(nored_coeficientRange[7]);
	$("input#coe_id_8").val(nored_coeficientRange[8]);
	$("input#coe_id_9").val(nored_coeficientRange[9]);
}
})():