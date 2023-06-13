$(document).ready(function(){

  /* radio 선택에 따른 값 변화 */

  $("input[type='radio']").change(function () {
    radiochangeinit();
  });

  $("[name='casesize']").change(function() {
    fn_onchg_casesize();
    fn_onchg_img_src();
  });
  $("[name='gps']").change(function() {
    fn_onchg_gps();
    fn_onchg_img_src();
  });

  function fn_onchg_img_src() {
    //함수이름 변경으로 인해 오류발생을 방지하고자 리턴해주는 임시 함수 생성
    radiochangeinit();
  }

  deliverydateinit();
  popupinit();
  insuranceinit();
 
});

window.onload = function() {
  radiochangeinit();
  fn_onchg_casesize();
  fn_onchg_gps();
}

function radiochangeinit() {  
  var img_casesize = $("[name='casesize']:checked").attr("id");
  var img_colorid = $("[name='colornav']:checked").val();
  var img_bandcolor = $("[name='colornav']:checked").attr("id");
  var img_gps = $("[name='gps']:checked").attr("id");

  var img_src = 'images/' + img_casesize + '-' + img_colorid + '-' + img_bandcolor + '-' + img_gps + '.png';

  $("#shop-image-png").attr("src", img_src);

  var img_name = $("[name='colornav']:checked").data("color");
  var img_name_describe = '색상 - ' + img_name

  $("#colornm").html(img_name_describe);

  if(img_casesize == '41mm'){
      $("#bandsize-text").html("손목 둘레 130–200mm에 맞는 밴드.")
  }
  else if(img_casesize == '45mm'){
      $("#bandsize-text").html("손목 둘레 140–210mm에 맞는 밴드.")
  }

  var studio_main_img = 'images/' + img_casesize + '-' + img_colorid + '-' + img_bandcolor + '-front.png';
  $("#studio-popup-main-img").attr("src", studio_main_img)

  
  /* LocalStorage 저장 */
  window.localStorage.setItem('img_casesize', img_casesize);
  window.localStorage.setItem('img_colorid', img_colorid);
  window.localStorage.setItem('img_bandcolor', img_bandcolor);
  window.localStorage.setItem('img_gps', img_gps);
}


  
/* radio 선택에 따른 total price 변화 */

var tatalprice = 0;

function fn_onchg_casesize(){

  var tatalprice = 0;

  totalprice = isNumCheck(($("[name='casesize']:checked").val()).toLocaleString());
  $("#totalprice").html(totalprice);
  $("#totalprice-top").html(totalprice); 

  $("#gpsprice").html(totalprice.toLocaleString());
  $("#cellprice").html((totalprice + 150000).toLocaleString()); 

  fn_onchg_gps();
}

function fn_onchg_gps(){

  totalprice = (isNumCheck($("[name='casesize']:checked").val()) + isNumCheck($("[name='gps']:checked").val())).toLocaleString()
  $("#totalprice").html(totalprice.toLocaleString());
  $("#totalprice-top").html(totalprice.toLocaleString());

  window.localStorage.setItem('totalprice', totalprice);
}


// 배송 요일 년/월/일

function deliverydateinit() {

  var deliverydate = new Date();
  deliverydate.setDate(deliverydate.getDate() + 2);   

  var year = deliverydate.getFullYear();
  var month = deliverydate.getMonth() + 1 ;
  var date = deliverydate.getDate();
  var day = deliverydate.getDay();

  if(day == 0){day = "일"}
  else if(day == 1){day = "월"}
  else if(day == 2){day = "화"}
  else if(day == 3){day = "수"}
  else if(day == 4){day = "목"}
  else if(day == 5){day = "금"}
  else if(day == 6){day = "토"}

  $("#deliverydate").html(day + ' ' + year + '/' + month + '/' + date);
};


// pop-up 

function popupinit() {
  
  $('#size-info').click(function() {
    $('#case-popup').fadeIn();
    return false;
  });

  $('.close').click(function() {
    $('#case-popup').fadeOut();
    return false;
  });

  $(document).on('click', function(e) {
    if (e.target.id == 'case-popup') {
      $('#case-popup').fadeOut();
      return false;
    }
  });

  
  $('#gps-info').click(function() {
    $('#gps-popup').fadeIn();
    return false;
  });

  $('.close').click(function() {
    $('#gps-popup').fadeOut();
    return false;
  });

  $(document).on('click', function(e) {
    if (e.target.id == 'gps-popup') {
      $('#gps-popup').fadeOut();
      return false;
    }
  });
}


function insuranceinit() {
  
  var insur_price = 0; 
  window.localStorage.setItem('insur_price', insur_price);
  
  /* 보증 추가 */

  $("#insurance-yn").on('click', function(){

    var insurYN = $("#insurance-yn").html();
    var totalprice = $("#totalprice").html(); 
    
    if(insurYN == "추가"){
        $('#insur-popup').fadeIn();
        
        $('#insurance-yn-btn').click(function() {
          $("#insurance-yn").html('제거');
          $('#insur-popup').fadeOut();

          /* LocalStorage 저장 */
          insur_price = 129000;
          window.localStorage.setItem('insur_price', insur_price);
          return false;
        })
        
        $('.close').click(function() {
          $('#insur-popup').fadeOut();
          return false;
        });
        
        $(document).on('click', function(e) {
          if (e.target.id == 'insur-popup') {
            $('#insur-popup').fadeOut();
            return false;
          }
          
        });

        console.log("추가됨");
        return false;
    }
    else if(insurYN == "제거"){
        $("#insurance-yn").html('추가');

          /* LocalStorage 저장 */
          insur_price = 0;
          window.localStorage.setItem('insur_price', insur_price);

        console.log("제거됨");
        return false;
    } 
  });
}


// Num Check

function isNumCheck(p)
{
  if(!isNaN(p))
  {
    return parseInt(p);
  }
  else
  {
    return 0;
  }

}