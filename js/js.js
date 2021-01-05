$(document).ready(function () {
$('.nav-list_item').on('click',function(){
    var tag = $(this).attr('value');
    var tag1 = $(this).text();
    var tag1 = tag1.split(' ').join('');
    var tag1 = tag1.split('&').join('');
    $("#layer"+tag1).removeClass('hide-menu'); 
    $("#layer"+tag1).toggleClass('show-menu');
});
$('.nav-link').on('click',function(){
    $(this).parent().parent().parent().removeClass('show-menu');
    $(this).parent().parent().parent().toggleClass('hide-menu');
});

$(".bc-sf-filter-block-title").on('click',function(){

    if ($(this).next().hasClass('active-content')) {
        $(this).next().removeClass('active-content')
        $(this).children().next().removeClass('toggle-open');
    }
    else{
        $(this).next().toggleClass('active-content');
        $(this).children().next().toggleClass('toggle-open');
    }
    
    
    // console.log($(this).next());
  });
  $(".bc-sf-filter-option-single-list>li").on('click',function(){
    console.log($(this).children());
    $(this).children().toggleClass('blue');
  });

  $("#bc-sf-filter-tree-mobile-button").on('click',function(){
    if($("#slider-bar").hasClass('active-slider')){
        $("#slider-bar").removeClass('active-slider');
    }  
    else{
        $("#slider-bar").toggleClass('active-slider');
    }
  });

  var $slider = $('#slider');
  var $input1 = $('#input1');
  var $input2 = $('#input2');
  var $inputs = $('input');
  
  noUiSlider.create(slider, {
      start: [1, 200],
      step: 1,
      connect: true,
      range: {
          'min': [     1 ],
          '10%': [   20 ],
          '60%': [  120 ],
          '80%': [ 160],
          'max': [ 200 ]
      } 
  });
  
  slider.noUiSlider.on('update', function ( values, handle ) {
      
      if (values != 1 || values != 200) {
              handle == 0 ? $input1.val(values[handle]) : $input2.val(values[handle]);
      } else {
          handle == 0 ? $input1.val("No Min") : $input2.val("No Max");
      }
  
  });
  
  $inputs.on('change', function() { 
      if (this == $input1[0]) {
          slider.noUiSlider.set([this.value,null]);
      } else {
          slider.noUiSlider.set([null,this.value]);
      }
  });

  $(".toggle-button").on('click',function(){
    $(".rte").removeClass('toggle-this-container');
    $(".rte").toggleClass('toggle-this-active');
    $(this).parent().next().slideToggle(500);
    $(this).toggle();
    $(".toggle-button--off").toggle();
  });
  $(".toggle-button--off").on('click',function(){
    $(".rte").removeClass('toggle-this-active');
    $(".rte").toggleClass('toggle-this-container');
    $(".toggle-this").slideToggle(500);
    $(this).toggle();
    $(".toggle-button").toggle();
  });

});