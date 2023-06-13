$(document).ready(function(){
  $("#studio-maker").hide();

  /* LocalStorage 불러오기 */
  window.localStorage.getItem('img_casesize');
  window.localStorage.getItem('img_colorid');
  window.localStorage.getItem('img_bandcolor');
  window.localStorage.getItem('img_gps');

  var img_src = 'images/' + window.localStorage.img_casesize + '-' + window.localStorage.img_colorid + '-' + window.localStorage.img_bandcolor + '-front.png' 

  $("#studio-main-img").attr("src",img_src)

  /* 하단 nav-bar 선택자 */
  $("#casesize-img-zone").show();
  $("#material-img-zone").hide();
  $('#caseband-img-zone').hide();
  $("#studio-nav-name-case").hide();
  $("#studio-nav-name-size").hide();
  $("#studio-nav-name-band").hide();

  ClickSize();
  ClickBand();
  ClickMaterial();

  $(".radio-choice").on('click', function() {

      var radiochoice = $(this).val();

      if(radiochoice == "size"){
          $("#casesize-img-zone").show();
          $("#material-img-zone").hide();
          $('#caseband-img-zone').hide();
      $("#studio-nav-title-size").hide();
      $("#studio-nav-name-size").show();
      $("#studio-nav-title-case").show();
      $("#studio-nav-name-case").hide();
      $("#studio-nav-title-band").show();
      $("#studio-nav-name-band").hide();}

      else if(radiochoice == "case"){
          $("#casesize-img-zone").hide();
          $("#material-img-zone").show();
          $('#caseband-img-zone').hide();
      $("#studio-nav-title-size").show();
      $("#studio-nav-name-size").hide();
      $("#studio-nav-title-case").hide();
      $("#studio-nav-name-case").show();
      $("#studio-nav-title-band").show();
      $("#studio-nav-name-band").hide();}

      else if(radiochoice == "band"){
          $("#casesize-img-zone").hide();
          $("#material-img-zone").hide();
          $('#caseband-img-zone').show();
      $("#studio-nav-title-size").show();
      $("#studio-nav-name-size").hide();
      $("#studio-nav-title-case").show();
      $("#studio-nav-name-case").hide();
      $("#studio-nav-title-band").hide();
      $("#studio-nav-name-band").show();}
  });

});

function clickStudio() {                
  $("#studio-main").hide();
  $("#studio-maker").show();

}

function ClickSize() {

$(".size-img-zone").on('click', function() {
    var seq = $(".size-img-zone").index(this)
    $(".size-scroll").animate({marginLeft: seq * -312});

    var seqname = $(".size-img-zone:eq(" + seq + ")").attr("name");
    var seqprice = $(".size-img-zone:eq(" + seq + ")").attr("price");

    $("#studio-text-name").html(seqname);
    $("#studio-text-price").html(seqprice);
    
    if(seq < 1) {$("[name='casesize'][value='0']").prop('checked',true)}
    else {$("[name='casesize'][value='1']").prop('checked',true)}
});

$("input").on('click', function() {
    var sizeseq = $("[name='casesize']:checked").val();
    $(".size-scroll").animate({marginLeft: sizeseq * -312});

    var seqname = $(".size-img-zone:eq(" + sizeseq + ")").attr("name");
    var seqprice = $(".size-img-zone:eq(" + sizeseq + ")").attr("price");

    $("#studio-text-name").html(seqname);
    $("#studio-text-price").html(seqprice);
});
}


function ClickMaterial() {

$(".material-case-img-zone").on('click', function() {
    var seq = $(".material-case-img-zone").index(this)
    $(".material-scroll").animate({marginLeft: seq * -312});

    var seqname = $(".material-case-img-zone:eq(" + seq + ")").attr("name");
    var seqprice = $(".material-case-img-zone:eq(" + seq + ")").attr("price");

    $("#studio-text-name").html(seqname);
    $("#studio-text-price").html(seqprice);

    if(seq < 3) {$("[name='casematerial'][value='0']").prop('checked',true)}
    else {$("[name='casematerial'][value='3']").prop('checked',true)};       
});

$("input").on('click', function() {
    var sizeseq = $("[name='casematerial']:checked").val();
    $(".material-scroll").animate({marginLeft: sizeseq * -312});

    var seqname = $(".material-case-img-zone:eq(" + sizeseq + ")").attr("name");
    var seqprice = $(".material-case-img-zone:eq(" + sizeseq + ")").attr("price");

    $("#studio-text-name").html(seqname);
    $("#studio-text-price").html(seqprice);
});
}


function ClickBand() {


$(".band-img-zone").on('click', function() {
    var seq = $(".band-img-zone").index(this)
    $(".band-scroll").animate({marginLeft: seq * -312});

    var seqname = $(".band-img-zone:eq(" + seq + ")").attr("name");
    var seqprice = $(".band-img-zone:eq(" + seq + ")").attr("price");

    $("#studio-text-name").html(seqname);
    $("#studio-text-price").html(seqprice);

    if(seq < 2) {$("[name='band'][value='0']").prop('checked',true)}
    else if(seq < 4) {$("[name='band'][value='2']").prop('checked',true)}
    else if(seq < 11) {$("[name='band'][value='4']").prop('checked',true)}
    else if(seq < 13) {$("[name='band'][value='11']").prop('checked',true)}
    else {$("[name='band'][value='13']").prop('checked',true)};  
});

$("input").on('click', function() {
    var bandseq = $("[name='band']:checked").val();
    $(".band-scroll").animate({marginLeft:bandseq * -312});

    var seqname = $(".band-img-zone:eq(" + bandseq + ")").attr("name");
    var seqprice = $(".band-img-zone:eq(" + bandseq + ")").attr("price");
   
    $("#studio-text-name").html(seqname);
    $("#studio-text-price").html(seqprice);
});
}