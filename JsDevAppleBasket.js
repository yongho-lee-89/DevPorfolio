$(document).ready(function(){
  window.localStorage.getItem('img_casesize');
  window.localStorage.getItem('img_colorid');
  window.localStorage.getItem('img_bandcolor');
  window.localStorage.getItem('img_gps');
  window.localStorage.getItem('insur_price');

  //이미지 불러오기
  var img_src = 'images/' + window.localStorage.img_casesize + '-' + window.localStorage.img_colorid + '-' + window.localStorage.img_bandcolor + '-' + window.localStorage.img_gps + '.png' 

  $(".orderlist-image img").attr("src", img_src)

  //합계 불러오기
  window.localStorage.getItem('totalprice');
  
  
  fn_totalprice();
  fn_valtoname_size();
  fn_valtoname_gps();
  fn_valtoname_color();
  fn_insurance();

});

function fn_valtoname_size(){
  if(window.localStorage.img_casesize == "41mm")
  {
      $("#name_size").html("41mm")
  }
  else if(window.localStorage.img_casesize == "45mm")
  {
      $("#name_size").html("45mm")
  }
}

function fn_valtoname_gps(){
  if(window.localStorage.img_gps == "cellular")
  {
      $("#name_gps").html("GPS + Cellular")
  }
  else if(window.localStorage.img_gps == "gps")
  {
      $("#name_gps").html("GPS,")
  }
}

function fn_valtoname_color(){
  if(window.localStorage.img_bandcolor == "olive")
  {
      $("#name_band").html("올리브 스포츠 밴드")
  }
  else if(window.localStorage.img_bandcolor == "sky")
  {
      $("#name_band").html("스카이 스포츠 밴드")
  }
  else if(window.localStorage.img_bandcolor == "brightorange")
  {
      $("#name_band").html("오렌지 스포츠 밴드")
  }
  else if(window.localStorage.img_bandcolor == "midnight")
  {
      $("#name_band").html("미드나이트 스포츠 밴드")
  }
  else if(window.localStorage.img_bandcolor == "starlight")
  {
      $("#name_band").html("스타라이트 스포츠 밴드")
  }
  else if(window.localStorage.img_bandcolor == "white")
  {
      $("#name_band").html("화이트 스포츠 밴드")
  }
  else if(window.localStorage.img_bandcolor == "red")
  {
      $("#name_band").html("프로덕트 레드 스포츠 밴드")
  };
}


function fn_totalprice (){

  fn_quanselect();
};

function fn_quanselect (){
  
  //계산값 가져오기
  var totalprice = window.localStorage.totalprice
  var totalprice_int = parseInt(totalprice.replace(/,/g , ''));
  var quan = $("[name='quan']:checked").val();
  var pricetag = totalprice_int * quan

  $("#basket-top-price span").html(pricetag.toLocaleString())
  $("#orderlist-text-title-price span").html(pricetag.toLocaleString())
  $(".totalprice-text-sub span").html(pricetag.toLocaleString())
  $(".totalprice-text-main span").html(pricetag.toLocaleString())

  return pricetag;
}


function fn_insurance (){
  var insurance = window.localStorage.insur_price
  
  if(insurance == "129000") {
    $("#insurance-unselect").hide();
    $("#insurance-select").show();

    var insur_total = $(".totalprice-text-price").html();
    var totalprice_int = parseInt(insur_total.replace(/,/g , ''));
    $(".totalprice-text-price").html((totalprice_int + 129000).toLocaleString());

    return insurance;
  }
  else {
    $("#insurance-unselect").show();
    $("#insurance-select").hide();

    return insurance;
  }
}


  /* 보증 추가 */
function fn_insurance_click (){
  var insurYN = $("#insurance-select").css("display");
    
  if(insurYN == "none"){
    $("#insurance-unselect").hide();
    $("#insurance-select").show();

    /* LocalStorage 저장 */
    insur_price = 129000;
    window.localStorage.setItem('insur_price', insur_price);

    var insur_total = $(".totalprice-text-price").html();
    var totalprice_int = parseInt(insur_total.replace(/,/g , ''));
    $(".totalprice-text-price").html((totalprice_int + 129000).toLocaleString());
    
    console.log("추가됨");
    return false;
  }

  else{
    $("#insurance-unselect").show();
    $("#insurance-select").hide();

    /* LocalStorage 저장 */
    insur_price = 0;
    window.localStorage.setItem('insur_price', insur_price);

    var insur_total = $(".totalprice-text-price").html();
    var totalprice_int = parseInt(insur_total.replace(/,/g , ''));
    $(".totalprice-text-price").html((totalprice_int - 129000).toLocaleString());

    console.log("제거됨");
    return false;
  } 
};