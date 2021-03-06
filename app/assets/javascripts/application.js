// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require pace-loader
//= require_tree .

window.onload = function(){
  MusicPlayer.start();

};

var MusicPlayer = {};

MusicPlayer.start = function(){
   window.Pace.start();
  this.element = document.querySelector('#plr');
  this.widget = SC.Widget( this.element );

  if( lasted.track != '' ){
    MusicPlayer.playAfter();
  }

  
  if ( window.location.hash == "#play" ){
    setTimeout(function(){
      MusicPlayer.widget.play();


    }, 5000);
  }
  MusicPlayer.search();

};

MusicPlayer.playAfter = function(){
      jQuery.getJSON( 'music_player/transpondertrack/?id=' + lasted.track, function(e){
      
        var title = e.title;
        jQuery('#plr').attr('src', 'http://w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/' + e.id );

      
        jQuery("#playSound").removeClass('flashing');

        jQuery('.app-header')
        .find('h3')
        .html('<i class="fa fa-play" id="playSound"></i><span class="playing">' + title + e.description + '</span><span class="volume"> <input id="volum" type="range" min="1" max="100" step="1" value="100"> <i class="fa  fa-volume-up" id="volumecaption"></i></span><span class="stats"><i id="stopSound" class="fa fa-pause"></i><span id="status"></span></span>' )
        .fadeIn(function(){
          jQuery('.playing').addClass('remove');
        });
      });

      document.querySelector.apply(document,['title']).innerHTML = jQuery('.playing').text();
      MusicPlayer.handleHash();

      setTimeout(function(){         
         MusicPlayer.handleEvents();           
      }, 5000);

};

MusicPlayer.searchHandler = function(){


  jQuery.getJSON(
  '/music_player/fetch', 
  { 
    q:  encodeURIComponent(jQuery('#find').val())
  },
  function(e){
      $.each(e, function(i, item) {
        var desc = ( e[i].label_name == 'null' ) ? '' : e[i].label_name;
        var returned = '';
        returned += '<div class="panel panel-default bordered-none card" data-desc="' + MusicPlayer.stripTags( e[i].desc ) + '" data-id="'+e[i].id+'">';
        returned += ' <a href="javascript:;" class="panel-body-heading full-line doact">';
        returned += ' <div class="pb-object pb-object-sm">';
        returned += '   <img src="' + e[i].artwork_url + '" alt="">';
        returned += ' </div><!-- /pb-object -->';
        returned += ' <h3 class="pb-title pb-title-sm">';
        returned += '  ' + MusicPlayer.stripTags( e[i].title ) + ' <small>'+ MusicPlayer.stripTags( desc ) +'</small>';
        returned += ' </h3><!-- /pb-title -->';
        returned += ' </a><!-- /panel-body-heading -->';
        returned += '</div><!-- /panel -->';


        jQuery('.ready').text('Resultados para: "' + jQuery('#find').val() + '"')
        jQuery('.side-wrapper, .side-wrapper-result').fadeIn(function(){

        });
        jQuery('.side-wrapper-result').append( returned );
        
      
      });
    MusicPlayer.listenClick();
  });
};

MusicPlayer.handeEnter = function(){
  jQuery('.side-form > .fa-search').fadeOut(function(){
    jQuery('#clearresults').fadeIn();
  });
  jQuery.proxy('this', MusicPlayer.searchHandler() );
};

MusicPlayer.search = function(){

  // remove older timeouted action based in user keyup event
  jQuery('#find').keydown(function(e){

      if ( e.keyCode === 13 )
        MusicPlayer.handeEnter();
  });

  jQuery( '.side-form' ).on('submit',function(e){
	// avoid form for get submited
    e.preventDefault();
  });

};

MusicPlayer.listenClick = function(){
  jQuery('div.panel').on('click', function(e){
      e.preventDefault();

      var id  = jQuery(this).data('id'),
      desc  = jQuery(this).data('desc');

      history.pushState({}, 'A ouvir' + jQuery(this)
        .find('.pb-title')
        .text(), id);

      jQuery('.app-header')
      .find('h3')
      .html('<i class="fa fa-play" id="playSound"></i><span class="playing">' + jQuery(this).find('.pb-title').text() + desc + '</span><span class="volume"> <input id="volum" type="range" min="1" max="100" step="1" value="100"> <i class="fa  fa-volume-up" id="volumecaption"></i></span><span class="stats"><i id="stopSound" class="fa fa-pause"></i><span id="status"></span></span>' );
      
      MusicPlayer.scPlayer( id );

      setTimeout(function(){
          jQuery('#playSound').click();
          jQuery('#playSound').removeClass('flashing');
          MusicPlayer.volumeControl();
          document.title = jQuery(this).find('.pb-title').text();

      }, 5000);

  });

  jQuery('#clearresults').on('click', function(e){
      e.preventDefault();
      jQuery(this).fadeOut(function(){
        jQuery('.side-form > .fa-search').fadeIn();
      })
      jQuery('.ready').empty();
      jQuery('.side-wrapper-result').empty();
  });
};

MusicPlayer.volumeControl = function(){
    jQuery("#volum").on('change', function(){
        MusicPlayer.widget.setVolume( jQuery(this).val() );
        //console.log(jQuery(this).val());
    });
};

MusicPlayer.stripTags = function( data ){
    var buffer = document.createElement("span");
    buffer.innerHTML = data;
    return buffer.textContent || buffer.innerText || null;
};

MusicPlayer.scPlayer = function(id, ex){

    this.id = id;
    var playerRaw;

    jQuery('#plr').attr('src', 'http://w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/'+this.id );

    jQuery('.app-body').append(playerRaw).fadeIn(function(){
      MusicPlayer.widget.bind(SC.Widget.Events.PLAY, function(e) {
        alert(1);
          console.log(e);
      });
    });
    jQuery('.playing').addClass('remove');
    setTimeout(function(){
      MusicPlayer.handleEvents(); 
    }, 4000);

    document.querySelector.apply(document,['title']).innerHTML = jQuery('.playing').text();

};

MusicPlayer.handleEvents = function(){
    $("#playSound").click(function() {
        return MusicPlayer.setHash('play');
    });  
    $("#stopSound").click(function() {
        return MusicPlayer.setHash('pause');
    });  

    MusicPlayer.listenClick();  
};

MusicPlayer.setHash = function(hashb){
  this.hashb = hashb;

  if ( this.hashb != '' ){
    window.location.hash = this.hashb;
  };
  MusicPlayer.handleHash();
};


MusicPlayer.handleHash = function(){

  window.onhashchange = function(e){ 
    var hash = e.newURL.split('#'),
    player = MusicPlayer.widget;

    console.log( hash );

    switch ( hash[1] ){
      case 'play' :
        player.play();
        jQuery('.playing').removeClass('remove');

      break;
      case 'pause' :
        player.pause();
        jQuery('.playing').addClass('remove');
      break;
    }

  };

};

MusicPlayer.timeXController = function(intval){


  var i = intval;
  var t = setInterval(function(){

    var minuties,
    secounds; 
    i--;
    var min = parseInt(parseInt(i) / 1000 / 60),
    sec = parseInt( (parseInt(i) / 1000 % 60)),
    minuties = ( min.toString().length == 1 ) ? '0'+min : min,
    secounds = ( sec.toString().length == 1 ) ? '0'+sec : sec;
    console.log( minuties + secounds );
    console.log(i, minuties, secounds);

  }, 1000);

};

