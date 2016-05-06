//JavaScript File

//CAROUSEL
$(".carousel").carousel({
    interval: 5000
});
//Different way of changing data-interval. (Resource: http://getbootstrap.com/javascript/#carousel)

//JQuery
/* Basic JQuery example for reference:
$(document).ready(function() {
   $(selector).action("value") 
});
*/

/*Why doesn't this work? slideDown is not a JQuery UI action: http://www.w3schools.com/jquery/jquery_ref_effects.asp.
$(document).ready(function() {
   $("#About").slideDown("slow") 
});
*/

/*Why doesn't this work? animate is not a JQuery UI action: http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1
$(document).ready(function() {
   $("#About").click (function() {
       $(".pawprint").animate({right: "250px"});
   });
});
*/

//JQuery on "About"
$(document).ready(function() {
   $("#ourMission").hover (function() {
       $("#ourHistory").addClass("transparency");
       $("#ourAdoptions").addClass("transparency");
       $("#ourLocation").addClass("transparency");
       $("#mapDirections").addClass("transparency");
       $("#ourContactInfo").addClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourMission").mouseleave (function() {
       $("#ourHistory").removeClass("transparency");
       $("#ourAdoptions").removeClass("transparency");
       $("#ourLocation").removeClass("transparency");
       $("#mapDirections").removeClass("transparency");
       $("#ourContactInfo").removeClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourHistory").hover (function() {
       $("#ourMission").addClass("transparency");
       $("#ourAdoptions").addClass("transparency");
       $("#ourLocation").addClass("transparency");
       $("#mapDirections").addClass("transparency");
       $("#ourContactInfo").addClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourHistory").mouseleave (function() {
       $("#ourMission").removeClass("transparency");
       $("#ourAdoptions").removeClass("transparency");
       $("#ourLocation").removeClass("transparency");
       $("#mapDirections").removeClass("transparency");
       $("#ourContactInfo").removeClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourAdoptions").hover (function() {
       $("#ourMission").addClass("transparency");
       $("#ourHistory").addClass("transparency");
       $("#ourLocation").addClass("transparency");
       $("#mapDirections").addClass("transparency");
       $("#ourContactInfo").addClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourAdoptions").mouseleave (function() {
       $("#ourMission").removeClass("transparency");
       $("#ourHistory").removeClass("transparency");
       $("#ourLocation").removeClass("transparency");
       $("#mapDirections").removeClass("transparency");
       $("#ourContactInfo").removeClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourLocation").hover (function() {
       $("#ourMission").addClass("transparency");
       $("#ourHistory").addClass("transparency");
       $("#ourAdoptions").addClass("transparency");
       $("#mapDirections").addClass("transparency");
       $("#ourContactInfo").addClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourLocation").mouseleave (function() {
       $("#ourMission").removeClass("transparency");
       $("#ourHistory").removeClass("transparency");
       $("#ourAdoptions").removeClass("transparency");
       $("#mapDirections").removeClass("transparency");
       $("#ourContactInfo").removeClass("transparency");
   });
});

$(document).ready(function() {
   $("#mapDirections").hover (function() {
       $("#ourMission").addClass("transparency");
       $("#ourHistory").addClass("transparency");
       $("#ourAdoptions").addClass("transparency");
       $("#ourLocation").addClass("transparency");
       $("#ourContactInfo").addClass("transparency");
   });
});

$(document).ready(function() {
   $("#mapDirections").mouseleave (function() {
       $("#ourMission").removeClass("transparency");
       $("#ourHistory").removeClass("transparency");
       $("#ourAdoptions").removeClass("transparency");
       $("#ourLocation").removeClass("transparency");
       $("#ourContactInfo").removeClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourContactInfo").hover (function() {
       $("#ourMission").addClass("transparency");
       $("#ourHistory").addClass("transparency");
       $("#ourAdoptions").addClass("transparency");
       $("#ourLocation").addClass("transparency");
       $("#mapDirections").addClass("transparency");
   });
});

$(document).ready(function() {
   $("#ourContactInfo").mouseleave (function() {
       $("#ourMission").removeClass("transparency");
       $("#ourHistory").removeClass("transparency");
       $("#ourAdoptions").removeClass("transparency");
       $("#ourLocation").removeClass("transparency");
       $("#mapDirections").removeClass("transparency");
   });
});
//Reference: http://www.w3schools.com/jquery/html_addclass.asp

//JQuery on "Dogs"
$(document).ready(function() {
   $(".like").click (function() {
       $(".like").addClass("yellowHeart");
   });
});

$(document).ready(function() {
   $(".like").dblclick (function() {
       $(".like").removeClass("yellowHeart");
   });
});

//JQuery on "Footer"
$(document).ready(function() {
   $("#email > button").click (function() {
       $("#emailSignUp").hide();
   });
});

