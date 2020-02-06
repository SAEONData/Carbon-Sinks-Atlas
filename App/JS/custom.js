/* Header Scroll */

    $(window).scroll(function(){
        if($(this).scrollTop() > 150) {
            $('#ea-header').addClass('scrollnav');
            // $('#app').addClass('scrollnavbody');
        }
        else{
            $('#ea-header').removeClass('scrollnav');
            // $('#app').removeClass('scrollnavbody');
        }
    });
     function explorer(){
        /* Explorer page */
    if ($(".ea-content-full").hasClass("explore-data")) {
        setTimeout(function(){
            console.log('explorer meh start');
            $('#ea-header').addClass('explorer-scrollnav');
            $('#app').addClass('full-explorer');
            console.log('explorer meh end');
          }, 4000);
      }else{
        $('#ea-header').removeClass('explorer-scrollnav');
        $('#app').removeClass('full-explorer');
      };
    };

/* Sidenav Dropdowns */

$('body').on('click', '.ea-parent span', function(){
    var ea_child = $(this).next('.ea-child');
    $(this).toggleClass('ea-open-child');
    $(ea_child).slideToggle(300);
});

/* Tabs */
$('body').on('click', '.tab-parent h3', function(){
    var ea_tab_parent = $(this).parent('.tab-parent');
    var ea_tab_child = $(this).next('.tab-child');
    var map_path = $(ea_tab_parent).attr('maploc');
    $('#svg2 path.active-path').removeClass('active-path');
    $('#'+map_path).addClass('active-path');
    $(ea_tab_child).slideToggle(300);
    $('.tab-parent ').removeClass('active-tab');
    $(ea_tab_parent).addClass('active-tab');

});
$('body').on('click', '#svg2 path', function(){
    $('#svg2 path.active-path').removeClass('active-path');
    $(this).addClass('active-path');
    var path_id = $(this).attr('id');
    var parent_info = $('.ea-tabs').find('[maploc="'+ path_id+'"');
    $('.tab-parent ').removeClass('active-tab');
    $('.tab-child').slideUp(300);
    $(parent_info).addClass('active-tab').find('.tab-child').slideDown(300);
});
/* custom tabs */
$('body').on('click', '.ea-tabs .nav-tabs a', function(){
    var tab_label = $(this).attr('tab-link');
    $('.ea-tabs a.active').removeClass('active');
    $(this).addClass('active');
    $('.ea-tabs .tab-pane').hide();
    $('#'+tab_label).slideDown(300);
});

$(document).ready(function() {
    $("#homemap").attr("src","https://map-ccis.saeon.ac.za/");
    $("body").on("click", ".supportToggle", function(){
        $("#supportform").toggleClass('show');
        $("#supportform").fadeToggle(300);
    });
    explorer();
    

});

$(window).on('hashchange', function(){

    setTimeout(function(){
        explorer();
        console.log('window changed 4');
      }, 2000);

    

});

/* Modal */
$('body').on('click', '.modalshow', function(){
    $('.modalqgis').show();
    $('.modalqgis').addClass('fade modal show');
});
$('body').on('click', '.modalhide', function(){
    $('.modalqgis').hide();
    $('.modalqgis').removeClass('fade modal show');
});
// $('#myModal').modal('show')
