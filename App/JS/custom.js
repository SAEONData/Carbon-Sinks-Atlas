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
            $('#ea-header').addClass('explorer-scrollnav');
            $('#app').addClass('full-explorer');
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
    
    var path_id = $(this).attr('id');
    var parent_info = $('.ea-tabs').find('[maploc="'+ path_id+'"');
    var statsProvince = $('.'+ path_id+'');

    
    $('.statsTableProvince').removeClass('statsActive').fadeOut(300);
    $(statsProvince).addClass('statsActive');
    $('.statsTableProvince.statsActive').fadeIn(300);
    

    $(this).addClass('active-path');
    $('.tab-parent ').removeClass('active-tab');
    $('.tab-child').slideUp(300);
    $(parent_info).addClass('active-tab').find('.tab-child').slideDown(300);
});
/* Map */
$('body').on('click', '#svg2 path', function(){
    var selectPath = $(this);
    var selectPathID = $(this).attr('id');
    console.log(selectPathID);
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
    tableBuild();
    //statsTableCols();
});

// $('body').on('click', '#extractit', function(){


//     var collimp = 'rgba(255, 182, 18, 1)';// #ffb612 rgba(255, 182, 18, 1)
//     var colmp = 'rgba(46, 125, 50, 1)';// #2e7d32 rgba(46, 125, 50, 1)
//     var colgt = 'rgba(28, 83, 121, 1)';// #1c5379 rgba(28, 83, 121, 1)
//     var colnw = 'rgba(133, 28, 82, 1)';// #851c52 rgba(133, 28, 82, 1)
//     var colfs = 'rgba(97, 20, 98, 1)';// #611462 rgba(97, 20, 98, 1)
//     var colkzn = 'rgba(13, 69, 93, 1)';// #0d455d rgba(13, 69, 93, 1)
//     var colnc = 'rgba(30, 25, 65, 1)';// #1e1941 rgba(30, 25, 65, 1)
//     var colec = 'rgba(97, 24, 16, 1)';// #611810 rgba(97, 24, 16, 1)
//     var colwc = 'rgba(92, 92, 15, 1)';// #5c5c0f rgba(92, 92, 15, 1)
//     $('g[province="Eastern Cape"] .st0').css ({
//         "fill": colec 
//     });
//     $('g[province="Free State"] .st0').css ({
//         "fill": colfs 
//     });
//     $('g[province="Gauteng"] .st0').css ({
//         "fill": colgt 
//     });
//     $('g[province="KwaZulu-Natal"] .st0').css ({
//         "fill": colkzn 
//     });
//     $('g[province="Limpopo"] .st0').css ({
//         "fill": collimp 
//     });
//     $('g[province="Mpumalanga"] .st0').css ({
//         "fill": colmp 
//     });
//     $('g[province="North West"] .st0').css ({
//         "fill": colnw 
//     });
//     $('g[province="Northern Cape"] .st0').css ({
//         "fill": colnc 
//     });
//     $('g[province="Western Cape"] .st0').css ({
//         "fill": colwc 
//     });
//     $('#mapsalocal g').each(function(){
//        // $('.st0').css( "fill", collimp );
        
//         $('.st0').css ({
//             "opacity": randomOpacity
//         });
        
//         // var maplabel = $(this).attr('class');
//         // console.log(maplabel);
//         // //this wrapped in jQuery will give us the current .letter-q div
//         // $('#extractlist').append(maplabel + '<br />');
            
//     });
    
// });
// function randomOpacity(){
// var opac = 0;
//     opac =  Math.floor(Math.random() * (99 - 35)) + 35;
//     thenumber = "0."+ opac
//     return thenumber;
// }


$(window).on('hashchange', function(){

    setTimeout(function(){
        explorer();
        tableBuild();
        //statsTableCols();
        
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
// $('svg').on('click', 'g', function(){
//     var glabel = $(this).attr('label');
//    console.log(glabel);
// });
// $('#myModal').modal('show')
/* Map */

// $('body').on('click', '#extractit', function(){
//     $('#mapsdistricts g').each(function(){
//         var maplabel = $(this).attr('label');
//         console.log(maplabel);
//         //this wrapped in jQuery will give us the current .letter-q div
//         $('#extractlist').append(maplabel + '<br />');
//     });
// });
/* Data Table Filter */
function tableBuild() {

    if ( $.fn.dataTable.isDataTable( '#tableSmall' ) ) {
        grid = $('#tableSmall').DataTable();
    }
    else {
        grid = $('#tableSmall').DataTable( {
            "paging": true,
            "ordering": true,
            "info": true
        } );
        console.log('is NOT a bdTable');
        grid.draw();
        $.fn.dataTable.ext.search.push(
            function(settings, data, dataIndex) {
              var dead = $('#gridDisplayDead')[0].checked;
              var alive = $('#gridDisplayAlive')[0].checked;
              var all = $('#gridDisplayAll')[0].checked;
              var condition = String(data[5]); 
              if (all) {
                 toggleActive($('#gridDisplayAllLabel'));
                 return true;
              } else if (dead) {
                 toggleActive($('#gridDisplayPublicDeadLabel'));
                 return ("Public" == condition);
              } else if (alive) {
                 toggleActive($('#gridDisplayCommercialLabel'));   
                 return ("Commercial" == condition);
              }
              return false;
            }
          );
          
        
    }


    
      // Reload on record filter radio button clicks 
      $(document).on("click", "#record-filters", function() {
        grid.draw();
      });
      
      var toggleActive = function(activate)
      {
         // de-activate any existing selection
         $('#record-filters').find('.btn-primary').each(function(index, element) {
           $(element).removeClass('active');
         });
         activate.addClass('active');
      }
    
      
  
  };
