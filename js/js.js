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

  $('.slider-product__add-product').click(function (e) {
    e.preventDefault();
    var btn = $(this).select();
    var icon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16 sale-products__heart-solid" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>'
    $(btn).html(icon);
});

});