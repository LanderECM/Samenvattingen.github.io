window.onload = mobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
}
/*
window.onload=function(){
    if (/Edge\/\d./i.test(navigator.userAgent)){
        window.alert('Als je Microsoft Edge gebruikt zijn er problemen met het openen van samenvattingen. Om dit op te lossen kan je Google Chrome of Firefox downloaden.');
    }
}
*/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

var module_check = false;
function openNav() {
    $("#navBar").css({
        "width": "275px",
        "left": "0",
        "font-size": "2vmax",
    });
    $("#navBarFull").fadeIn(200);
    $(".closebtn").css({
        "display": "block"
    });
	if (module_check == false) {
		$(".m3").css ({
			"background-color": "rgba(0,0,0,0.2)"
		});
	}
};
function closeNav() {
    $("#navBar").css({"left": "-275px"});
    $("#navBarFull").fadeOut(200);
    $(".list").css({
        "margin-top": "0%"
    });
};
var closeTopNav_check = false;
function openSumm(summ, mobileSumm) {
    if (isMobile.any()) {
        $("#pdf").attr("data", mobileSumm);
    }
    else {
        $("#pdf").attr("data", summ);
    }    
    closeTopNav_check = true;
    closeNav();
    closeAll();
    closeTopNav();
    $("#pdf").css({
        "z-index": "1"
    });
    $(".home").css({
        "display": "none"
    });
    $("#loading").css({
        "display": "block"
    });
};

function closeTopNav() {
    if (isMobile.any()) {
    }
    else{
        $(".nav").css({
            "top": "-10%"
        });
        $(".pdf").css({
            "height": "100%",
            "top": "0"
        });
    }
}

function openTopNav() {
    if (isMobile.any()) {
    }
    else{
        $(".nav").css({
            "top": "0"
        });
        $(".pdf").css({
            "height": "90%",
            "top": "10%"
        });
    }
}

$(function() {
  $('.openTopNav').hover(function() {
    if (isMobile.any()) {
    }
    else{
        if (closeTopNav_check == true){
            $('.nav').css('top', '0');
        }
    }
  }, function() {
  });
});

$(function() {
  $('.pdf').hover(function() {
    if (isMobile.any()) {
    }
    else{
        if (closeTopNav_check == true){
            $('.nav').css('top', '-10%');
        }
    }
  }, function() {
  });
});

function home() {
    closeTopNav_check = false;
    closeNav();
    closeAll();
    openTopNav();
    $("#pdf").css({
        "z-index": "0"
    });
    $(".home").css({
        "display": "block"
    });
    $("#pdf").attr("data", "");
    $("#loading").css({
        "display": "none"
    });
};
function show(vak) {
    $(vak).fadeIn(200);
    $("#closePopup").fadeIn(200);
};

function closeInner(vak) {
    $(vak).fadeOut(200);
};

function closeAll() {
    closeInner(document.querySelectorAll("#aardM1, #bioM1, #chemM1, #engM1, #fransM1, #fysM1, #geschM1, #nedM1, #wiskM1, #aardM2, #bioM2, #chemM2, #engM2, #fransM2, #fysM2, #geschM2, #nedM2, #wiskM2, #aardM3, #bioM3, #chemM3, #engM3, #fransM3, #fysM3, #geschM3, #nedM3, #wiskM3, #exam"));
    $("#closePopup").fadeOut(200);
}
$(document).ready(function() {
    $(window).on('orientationchange', function(event) {
        if (screen.height < screen.width){
            $(".nav").css({
                "height": "12%"
            });
        }
        else {
            $(".nav").css({
                "height": "10%"
            });
        }
    });
});

function m1() {
    $(".list1").css({
        "display": "block"
    });
    $(".list2").css({
        "display": "none"
    });
    $(".list3").css({
        "display": "none"
    });
    $(".list").css({
        "margin-top": "0%"
    });
	$(".m1").css({
		"background-color": "rgba(0,0,0,0.2)"
	});
	$(".m2").css({
        "background-color": ""
    });
    $(".m3").css({
        "background-color": ""
    });
	module_check = true;
}
function m2() {
    $(".list1").css({
        "display": "none"
    });
    $(".list2").css({
        "display": "block"
    });
    $(".list3").css({
        "display": "none"
    });
    $(".list").css({
        "margin-top": "0%"
    });
    $(".m1").css({
        "background-color": ""
    });
	$(".m2").css({
		"background-color": "rgba(0,0,0,0.2)"
	});
    $(".m3").css({
        "background-color": ""
    });
	module_check = true;
}
function m3() {
    $(".list1").css({
        "display": "none"
    });
    $(".list2").css({
        "display": "none"
    });
    $(".list3").css({
        "display": "block"
    });
    $(".list").css({
        "margin-top": "0%"
    });
	$(".m1").css({
		"background-color": ""
	});
	$(".m2").css({
		"background-color": ""
	});
	$(".m3").css({
		"background-color": "rgba(0,0,0,0.2)"
	});
	module_check = true;
}

function mobile() {
    if (isMobile.any()) {
        $(document).ready(function(){
            $(".popup_content").css({
                "width": "80%",
                "height": "80%",
                "font-size": "18px",
            });
            $(".navList").css({
                "font-size": "20px"
            });
            $(".txt").css({
                "font-size": "2.4vmax"
            });
            $(".m1").css({
                "font-size": "20px"
            });
            $(".m1").text("M1");
            $(".m2").css({
                "font-size": "20px"
            });
            $(".m2").text("M2");
            $(".m3").css({
                "font-size": "20px"
            });
            $(".m3").text("M3");
            $("#loading").css({
                "height": "100px",
                "width": "100px",
                "top": "53%"
            });
        });
    };
};

// swiped-left
document.addEventListener('swiped-left', function(e) {
    closeNav();
});

// swiped-right
document.addEventListener('swiped-right', function(e) {
    openNav();
});

// swiped-up
document.addEventListener('swiped-up', function(e) {
  // ...
});

// swiped-down
document.addEventListener('swiped-down', function(e) {
  // ...
});
