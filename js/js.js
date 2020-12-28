$('.nav-list_item').on('click',function(){
    var tag = $(this).attr('value'); //lấy giá trị của li
    var tag1 = $(this).text(); //lấy tên của li
    var tag1 = tag1.split(' ').join('');
    var tag1 = tag1.split('&').join('');
    // window.alert("#layer"+tag1); // chữ #layer với tên
    // var back_link="#layer"+tag; // Chữ #layer với valua
    // window.alert(back_link);
    // $('.nav-link').attr('href',back_link);
    //$('.nav-link').text(tag1);
    // $('.nav-link').attr('value',tag);
    $("#layer"+tag1).removeClass('hide-menu'); 
    $("#layer"+tag1).toggleClass('show-menu');
});
$('.nav-link').on('click',function(){
    $(this).parent().parent().parent().removeClass('show-menu');
    $(this).parent().parent().parent().toggleClass('hide-menu');
    // console.log();
});



// $('.nav-link').on('click',function(){
//      var tag = $(this).attr('href');
//     var val= $(this).attr('value');
//     // window.alert(val);
//      $(tag).removeClass('show-menu'); 
//      var back_link="#layer"+(val-1);
//      $('.nav-link').attr('href',back_link);
//     $('.nav-link').attr('value',val-1);
//     //window.alert(back_link);
    
// });