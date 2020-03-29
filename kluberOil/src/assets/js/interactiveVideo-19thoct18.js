function supportsVideo() {
    var t = document.createElement("video"),
        n = !1,
        i;
    try {
        (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"'), i = 'video/mp4; codecs="avc1.42E01E', n.h264 = t.canPlayType(i + '"') || t.canPlayType(i + ', mp4a.40.2"'), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"'))
    } catch (r) {}
    return n
}
var interactiveVideoApp = {
    init: function() {
        _this = this;
        _this.hideApplicationDetails();
        _this.interactiveVideoModel = interactiveVideos;
        _this.currentPoster = _this.interactiveVideoModel.Poster ? _this.interactiveVideoModel.Poster : null;
        _this.setActiveVideo(_this.interactiveVideoModel, "loop");
        _this.currentVideo = null;
        $("#video-back").click(function() { //$('#videolink29').hide();
			$("#logolink").attr("href","index.html");
$('#videolink2').hide();$('#videolink3').hide();$('#videolink4').hide();$('#videolink5').hide();$('#videolink6').hide();$('#videolink7').hide();$('#videolink8').hide();$('#videolink9').hide();$('#videolink10').hide();$('#videolink11').hide();$('#videolink12').hide();$('#videolink13').hide();$('#videolink14').hide();$('#videolink15').hide();$('#videolink16').hide();$('#videolink17').hide();$('#videolink18').hide();$('#videolink19').hide();$('#videolink20').hide();$('#videolink21').hide();$('#videolink22').hide();$('#videolink23').hide();$('#videolink24').hide();$('#videolink25').hide();$('#videolink26').hide();$('#videolink27').hide();$('#videolink28').hide();$('#videolink30').hide();$('#videolink31').hide();$('#videolink32').hide();$('#videolink33').hide();$('#videolink34').hide();$('#videolink35').hide();$('#videolink36').hide();$('#videolink37').hide();$('#videolink38').hide();$('#videolink39').hide();$('#videolink40').hide();$('#videolink41').hide();$('#videolink42').hide();$('#videolink43').hide();$('#videolink44').hide();$('#videolink45').hide();$('#videolink47').hide();$('#videolink48').hide();$('#videolink49').hide();
$('#mpopupBox').hide();$('#mpopupBox1').hide();$('#mpopupBox2').hide();$('#mpopupBox3').hide();$('#mpopupBox4').hide();$('#mpopupBox5').hide();$('#mpopupBox6').hide();$('#mpopupBox7').hide();$('#mpopupBox8').hide();$('#mpopupBox9').hide();$('#mpopupBox10').hide();$('#mpopupBox11').hide();$('#mpopupBox12').hide();$('#mpopupBox13').hide();$('#mpopupBox14').hide();$('#mpopupBox15').hide();$('#mpopupBox16').hide();$('#mpopupBox17').hide();$('#mpopupBox18').hide();$('#mpopupBox19').hide();$('#mpopupBox20').hide();$('#mpopupBox21').hide();$('#mpopupBox22').hide();$('#mpopupBox23').hide();$('#mpopupBox42').hide();$('#mpopupBox43').hide();$('#mpopupBox24').hide();$('#mpopupBox25').hide();$('#mpopupBox26').hide();$('#mpopupBox27').hide();$('#mpopupBox28').hide();$('#mpopupBox29').hide();$('#mpopupBox30').hide();$('#mpopupBox31').hide();$('#mpopupBox32').hide();$('#mpopupBox33').hide();$('#mpopupBox34').hide();$('#mpopupBox35').hide();$('#mpopupBox36').hide();$('#mpopupBox37').hide();$('#mpopupBox38').hide();$('#mpopupBox39').hide();$('#mpopupBox40').hide();$('#mpopupBox41').hide();$("#div4").css("display","none");$("#div5").css("display","none");
			$("#div6").css("display","none");
			$("#div7").css("display","none");
			$("#div8").css("display","none");
			$("#div9").css("display","none");
			$("#div10").css("display","none");
            $(this).fadeOut(300);
            _this.moveOutToParent()
        });
		$("#video-back1").click(function() {
            $(this).fadeOut(300);
            _this.moveOutToHome()
        });
    },
    setActiveVideo: function(n, t) { //alert('gg');
        var i, r;//W$('#loader').css("display","block"); 
		
        _this.currentVideo = n;
        _this.hideVideoButtons();
        _this.preloadImage(n.Poster);
        i = "";
      // $('#loader').fadeOut(2000, function() { 
		   $("#video-content").html(_this.getVideoHtml(n, t));
		
        $("#video-content video").on("canplay", function() {
            $("#video-content video")[0].play()
			
        });
	 //  });
		 //$("#video-content video")[0].pause()
		/* $('#loader').fadeOut(2000, function() {
            $("#video-content video")[0].play()
        }); */
        switch (t) {
            case "in":
                
				//$('#loader').fadeOut(2000, function() {
					$("#video-content video").on("ended", function() {
						_this.setActiveVideo(n, "loop")
					});
					fireAnalyticsEvent("Interactive Video", n.Id, n.Title);
					i = n.Poster;
				//});
              
                break;
            case "out":
                $("#video-content video").on("ended", function() {
                    _this.setActiveVideo(_this.getVideoById(n.Parent), "loop")
                });
				n.Poster && (r = _this.getVideoById(n.Parent), i = r.Poster);
                _this.hideApplicationDetails();
                break;
			case "home":
               $("#video-content video").on("ended", function() {
                    _this.setActiveVideo(_this.getVideoById(n.Parent), "home")
                });
				 n.Poster && (r = _this.getVideoById(n.Parent), i = r.Poster);
                _this.hideApplicationDetails();
               
                break;	
            case "loop":
                n.SubVideos.length === 0 ? _this.showApplicationDetails(n) : _this.showVideoButtons(n);
                n.Parent !== "" ? $("#video-back").fadeIn(300) : $("#video-back").fadeOut(300);
				n.Parent !== "" ? $("#video-back1").fadeIn(300) : $("#video-back1").fadeOut(300);
                i = n.Poster
        }
        i && _this.setPosterOnPlay(i)
    },
    moveOutToParent: function() {
        _this.setActiveVideo(_this.currentVideo, "out")
    },
	moveOutToHome: function() {
        _this.setActiveVideo(_this.currentVideo, "home")
    },
    setPosterOnPlay: function(n) { 
        $("#video-content video").on("play", function() {
            _this.currentPoster = n;
            $("#video-content video").attr("poster", _this.currentPoster)
        })
    },
    showVideoButtons: function(n) {
        var t = "";
        $.each(n.SubVideos, function(n, i) {
            t += "<div class='video-overlay   " + (i.SubVideos.length !== 0 ? "big" : "") + "' title='" + i.Title + "' data-video-id='" + i.Id + "' style='top:" + i.LinkPosition.Top + "%; left:" + i.LinkPosition.Left + "%;'><\/div>"
        });
        $.each(n.AdditionalLinks, function(n, i) {
            t += "<div class='video-overlay additional-link big' title='" + i.Title + "' data-link='" + i.Url + "' style='top:" + i.Top + "%; left:" + i.Left + "%;'><\/div>"
        });
        $("#video-overlays").html(t);
        $("#video-overlays .video-overlay").powerTip({
            placement: "n",
            smartPlacement: !0,
            fadeInTime: 0,
            fadeOutTime: 0,
            offset: 7,
            closeDelay: 0,
            showDelay: 0
        });
		$("#video-overlays").click(function() {
		
		$('.mpopup').hide();
        });
        $(".video-overlay").click(function() { var id = $(this).data("video-id");
		$('.mpopup').hide();$("#logolink").removeAttr("href");//$("#loader").css("display","block");
		
		if(id == '1a7b9f31-767d-49f7-b393-9db731f19264'){ //alert('fdd');
			
			
				$("#div4").css("display","block"); 
			
			$("#div5").css("display","none");
			$("#div6").css("display","none");
			$("#div7").css("display","none");
			$("#div8").css("display","none");
			$("#div9").css("display","none");
			$("#div10").css("display","none");
			//$("#loader").css("display","none");
			//$('#videolink29').hide();
			$('#videolink2').show();$('#videolink3').show();$('#videolink4').show();$('#videolink5').show();$('#videolink6').show();$('#videolink7').show();$('#videolink8').hide();$('#videolink9').hide();$('#videolink10').hide();$('#videolink11').hide();$('#videolink12').hide();$('#videolink13').hide();$('#videolink12').hide();$('#videolink13').hide();$('#videolink14').hide();$('#videolink15').hide();$('#videolink16').hide();$('#videolink17').hide();$('#videolink21').hide();$('#videolink22').hide();$('#videolink23').hide();$('#videolink24').hide();$('#videolink25').hide();$('#videolink26').hide();$('#videolink27').hide();$('#videolink28').hide();$('#videolink30').hide();$('#videolink31').hide();$('#videolink32').hide();$('#videolink33').hide();$('#videolink34').hide();$('#videolink35').hide();$('#videolink36').hide();$('#videolink37').hide();$('#videolink38').hide();$('#videolink39').hide();$('#videolink40').hide();$('#videolink41').hide();$('#videolink42').hide();$('#videolink43').hide();$('#videolink44').hide();$('#videolink46').show();$('#videolink48').hide();$('#videolink47').hide();$('#videolink49').hide();$('#videolink45').hide();
		}else if(id == '1a7b9f31-767d-49f7-b393-9db731f19265'){ 
			$("#div4").css("display","none");
			$("#div5").css("display","block");
			$("#div6").css("display","none");
			$("#div7").css("display","none");
			$("#div8").css("display","none");
			$("#div9").css("display","none");
			$("#div10").css("display","none"); //$('#videolink29').hide();
		$('#videolink2').hide();$('#videolink3').hide();$('#videolink4').hide();$('#videolink5').hide();$('#videolink6').hide();$('#videolink7').hide();$('#videolink8').hide();$('#videolink9').hide();$('#videolink10').hide();$('#videolink11').hide();$('#videolink12').hide();$('#videolink13').hide();$('#videolink14').show();$('#videolink15').show();$('#videolink16').show();$('#videolink17').show();$('#videolink21').hide();$('#videolink22').hide();$('#videolink23').hide();$('#videolink24').hide();$('#videolink25').hide();$('#videolink26').hide();$('#videolink27').hide();$('#videolink28').hide();$('#videolink30').hide();$('#videolink31').hide();$('#videolink32').hide();$('#videolink33').hide();$('#videolink34').hide();$('#videolink35').hide();$('#videolink36').hide();$('#videolink37').hide();$('#videolink38').hide();$('#videolink39').hide();$('#videolink40').hide();$('#videolink41').hide();$('#videolink42').hide();$('#videolink43').hide();$('#videolink44').hide();$('#videolink46').hide();$('#videolink48').hide();$('#videolink47').hide();$('#videolink49').hide();$('#videolink45').hide();
		}
		else if(id == '1a7b9f31-767d-49f7-b393-9db731f19266'){ 
			$("#div4").css("display","none");
			$("#div5").css("display","none");
			$("#div6").css("display","block");
			$("#div7").css("display","none");
			$("#div8").css("display","none");
			$("#div9").css("display","none");
			$("#div10").css("display","none");//$('#videolink29').hide();
			$('#videolink8').show();$('#videolink9').show();$('#videolink10').show();$('#videolink11').show();$('#videolink12').show();$('#videolink13').show();$('#videolink2').hide();$('#videolink3').hide();$('#videolink4').hide();$('#videolink5').hide();$('#videolink6').hide();$('#videolink7').hide();$('#videolink14').hide();$('#videolink15').hide();$('#videolink16').hide();$('#videolink17').hide();$('#videolink21').hide();$('#videolink22').hide();$('#videolink23').hide();$('#videolink24').hide();$('#videolink25').hide();$('#videolink26').hide();$('#videolink27').hide();$('#videolink28').hide();$('#videolink30').hide();$('#videolink31').hide();$('#videolink32').hide();$('#videolink33').hide();$('#videolink34').hide();$('#videolink35').hide();$('#videolink36').hide();$('#videolink37').hide();$('#videolink38').hide();$('#videolink39').hide();$('#videolink40').hide();$('#videolink41').hide();$('#videolink42').hide();$('#videolink43').hide();$('#videolink44').hide();$('#videolink46').hide();$('#videolink48').hide();$('#videolink47').hide();$('#videolink49').hide();$('#videolink45').hide();
		}
		else if(id == '1a7b9f31-767d-49f7-b393-9db731f19267'){ 
			$("#div4").css("display","none");
			$("#div5").css("display","none");
			$("#div6").css("display","none");
			$("#div7").css("display","block");
			$("#div8").css("display","none");
			$("#div9").css("display","none");
			$("#div10").css("display","none");//$('#videolink29').hide();
			$('#videolink8').hide();$('#videolink9').hide();$('#videolink10').hide();$('#videolink11').hide();$('#videolink12').hide();$('#videolink13').hide();$('#videolink2').hide();$('#videolink3').hide();$('#videolink4').hide();$('#videolink5').hide();$('#videolink6').hide();$('#videolink7').hide();$('#videolink14').hide();$('#videolink15').hide();$('#videolink16').hide();$('#videolink17').hide();$('#videolink21').hide();$('#videolink22').hide();$('#videolink23').hide();$('#videolink24').hide();$('#videolink25').hide();
			$('#videolink18').show();$('#videolink19').show();$('#videolink20').show();$('#videolink26').hide();$('#videolink27').hide();$('#videolink28').hide();$('#videolink30').hide();$('#videolink31').hide();$('#videolink32').hide();$('#videolink33').hide();$('#videolink34').hide();$('#videolink35').hide();$('#videolink36').hide();$('#videolink37').hide();$('#videolink38').hide();$('#videolink39').hide();$('#videolink40').hide();$('#videolink41').hide();$('#videolink42').hide();$('#videolink43').hide();$('#videolink44').hide();$('#videolink45').hide();$('#videolink46').hide();$('#videolink48').hide();$('#videolink47').hide();$('#videolink49').hide();
		}
		else if(id == '1a7b9f31-767d-49f7-b393-9db731f19268'){ 
			$("#div4").css("display","none");
			$("#div5").css("display","none");
			$("#div6").css("display","none");
			$("#div7").css("display","none");
			$("#div8").css("display","block");
			$("#div9").css("display","none");
			$("#div10").css("display","none");//$('#videolink29').show();
			$('#videolink8').hide();$('#videolink9').hide();$('#videolink10').hide();$('#videolink11').hide();$('#videolink12').hide();$('#videolink13').hide();$('#videolink2').hide();$('#videolink3').hide();$('#videolink4').hide();$('#videolink5').hide();$('#videolink6').hide();$('#videolink7').hide();$('#videolink14').hide();$('#videolink15').hide();$('#videolink16').hide();$('#videolink17').hide();;$('#videolink37').show();
			$('#videolink18').hide();$('#videolink19').hide();$('#videolink20').hide();$('#videolink21').show();$('#videolink22').show();$('#videolink23').show();$('#videolink24').show();$('#videolink25').show();$('#videolink26').show();$('#videolink27').show();$('#videolink28').show();$('#videolink30').hide();$('#videolink31').hide();$('#videolink32').hide();$('#videolink33').hide();$('#videolink34').hide();$('#videolink35').hide();$('#videolink36').hide();$('#videolink38').hide();$('#videolink39').hide();$('#videolink40').hide();$('#videolink41').hide();$('#videolink42').hide();$('#videolink43').hide();$('#videolink44').show();$('#videolink45').show();$('#videolink46').hide();$('#videolink48').show();$('#videolink47').show();$('#videolink49').show();
		}
		else if(id == '1a7b9f31-767d-49f7-b393-9db731f19269'){
		$("#div4").css("display","none");
			$("#div5").css("display","none");
			$("#div6").css("display","none");
			$("#div7").css("display","none");
			$("#div8").css("display","none");
			$("#div9").css("display","block");
			$("#div10").css("display","none"); //$('#videolink29').hide();
			$('#videolink8').hide();$('#videolink9').hide();$('#videolink10').hide();$('#videolink11').hide();$('#videolink12').hide();$('#videolink13').hide();$('#videolink2').hide();$('#videolink3').hide();$('#videolink4').hide();$('#videolink5').hide();$('#videolink6').hide();$('#videolink7').hide();$('#videolink14').hide();$('#videolink15').hide();$('#videolink16').hide();$('#videolink17').hide();
			$('#videolink18').hide();$('#videolink19').hide();$('#videolink20').hide();$('#videolink21').hide();$('#videolink22').hide();$('#videolink23').hide();$('#videolink24').hide();$('#videolink25').hide();$('#videolink26').hide();$('#videolink27').hide();$('#videolink28').hide();$('#videolink30').show();$('#videolink31').show();$('#videolink32').show();$('#videolink33').show();$('#videolink34').show();$('#videolink35').show();$('#videolink36').hide();$('#videolink37').hide();$('#videolink38').hide();$('#videolink39').hide();$('#videolink40').hide();$('#videolink41').hide();$('#videolink42').hide();$('#videolink43').hide();$('#videolink44').hide();$('#videolink45').hide();$('#videolink46').hide();$('#videolink48').hide();$('#videolink47').hide();
		}
		else if(id == '1a7b9f31-767d-49f7-b393-9db731f19270'){ 
		$("#div4").css("display","none");
			$("#div5").css("display","none");
			$("#div6").css("display","none");
			$("#div7").css("display","none");
			$("#div8").css("display","none");
			$("#div9").css("display","none");
			$("#div10").css("display","block"); //$('#videolink29').hide();
			$('#videolink8').hide();$('#videolink9').hide();$('#videolink10').hide();$('#videolink11').hide();$('#videolink12').hide();$('#videolink13').hide();$('#videolink2').hide();$('#videolink3').hide();$('#videolink4').hide();$('#videolink5').hide();$('#videolink6').hide();$('#videolink7').hide();$('#videolink14').hide();$('#videolink15').hide();$('#videolink16').hide();$('#videolink17').hide();
			$('#videolink18').hide();$('#videolink19').hide();$('#videolink20').hide();$('#videolink21').hide();$('#videolink22').hide();$('#videolink23').hide();$('#videolink24').hide();$('#videolink25').hide();$('#videolink26').hide();$('#videolink27').hide();$('#videolink28').hide();$('#videolink30').hide();$('#videolink31').hide();$('#videolink32').hide();$('#videolink33').hide();$('#videolink34').hide();$('#videolink35').hide();$('#videolink36').show();$('#videolink37').hide();$('#videolink38').show();$('#videolink39').show();$('#videolink40').show();$('#videolink41').show();$('#videolink42').show();$('#videolink43').show();$('#videolink44').hide();$('#videolink46').hide();$('#videolink48').hide();$('#videolink47').hide();$('#videolink45').hide();
		}
            if ($(this).hasClass("additional-link")) window.location.href = $(this).data("link");
            else {  //document.getElementById('current-video-description').style.display = 'block';
                var n = _this.getVideoById($(this).data("video-id"));
                n !== !1 ? _this.setActiveVideo(n, "in") : console.error("could not find video by id: " + $(this).data("video-id"))
            }
        })
    },
    preloadImage: function(n) { 
        $("#video-poster-preload").empty();
        n !== "" && n !== null && $("#video-poster-preload").html("<img src='" + n + "' />")
    },
    hideVideoButtons: function() {
        $("#video-overlays").html("")
    },
    getVideoById: function(n) {
		
		var t = !1,i ;
		i = _this.interactiveVideoModel;
		return i.Id === n && (t = i), t || (t = _this.getSubVideoById(i.SubVideos, n)), t
    },
    getSubVideoById: function(n, t) {
        var i = !1;
        return $.each(n, function(n, r) {
            r.Id === t && (i = r);
            i || r.SubVideos.length === 0 || (i = _this.getSubVideoById(r.SubVideos, t))
        }), i
    },
    showApplicationDetails: function(n) {  
        n.Link ? ($("#video-link").show(), $("#video-link").attr("href", n.Link)) : $("#video-link").hide();
        $("#video-title").text(n.Title);
        $("#video-description").text(n.Description);
        $("#current-video-description").fadeIn(300)
    },
    hideApplicationDetails: function() {
        $("#current-video-description").fadeOut(300)
    },
    getVideoHtml: function(n, t) { 
        var i = t === "loop" ? n.Sources.Loop : t === "in" ? n.Sources.In : n.Sources.Out,
            r = "<video id='vedioid' " + (t === "loop" ? " loop" : "") + " preload='auto' " + (_this.currentPoster ? "poster='" + _this.currentPoster + "'" : "") + " muted autoplay>";
        return r += "<source src='" + i.Mp4 + "' type='video/mp4'>", r += "<source src='" + i.Ogg + "' type='video/ogg'>", r + ("<source src='" + i.Webm + "' type='video/webm'><\/video>")
    }
};
supportsVideo() && typeof interactiveVideos != "undefined" ? interactiveVideoApp.init() : $(".interactive-video-row").hide()