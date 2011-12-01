'use strict';
  
(function($){
  var CreateContest = function(args) {
    var $parentdiv = $( za.jq(args.id) );
    var attrs = za.contestattrs;
    var entrytypes = za.entrytypes;
    
    $parentdiv.append($('<div class="pageTitle">Create Contest</div>'));
    
    var $createcontestform = $('<div id="createcontestform"></div>');
    
    var buildCheckboxDiv = function (attr) {
      var $div = $('<div class="checkboxDiv"></div>');
      $div.append($('<label for="'+attr.id+'">'+attr.label+'</label>'));
      $div.append($('<input id="'+attr.id+'" type="checkbox" />')) ;
      return $div;
    };
    
    var buildRadioDiv = function(attr, options) {
      var $div = $('<div class="radioDiv">'+attr.label+'</div>');
      $.each(options, function(i, option) {
        $div.append($('<label for="'+option.id+'">'+option.label+'</label>'));
        $div.append($('<input type="radio" name = "groupa" id = "'+option.id+'" value="'+option.value+'" />'));
      });
      return $div;
    };
    
    var buildInputDiv = function(attr) {
      var $div = $('<div class="fieldDiv"></div>');
          $div.append($('<label for="'+attr.id+'">'+attr.label+'</label>'));
          $div.append($('<div><input type="text" id="'+attr.id+'"></input></div>'));
          return $div;
    }
    
    var buildTextareaDiv = function(attr) {
      var $div = $('<div class="textareaDiv"></div>');
          $div.append($('<label for="'+attr.id+'">'+attr.label+'</label>'));
          $div.append($('<div><textarea rows="5" cols="50" id="'+attr.id+'"></textarea></div>'));
          return $div;
    }
    
    $.each(attrs, function(idx, attr) {
      var $attrdiv;
      if (attr.type === 'checkbox') $attrdiv = buildCheckboxDiv(attr);
      else if (attr.type === 'radio') $attrdiv = buildRadioDiv(attr, entrytypes);
      else if (attr.type === 'textarea') $attrdiv = buildTextareaDiv(attr);
      else { if (idx !== 'pictureurl') $attrdiv = buildInputDiv(attr); }
      $createcontestform.append($attrdiv);
    });

    //$iscaption.button();
    /*
    var $uploadcaptionpic = $('<input id="uploadcaptionbutton" type="button" />') ;
    $uploadcaptionpic.button({label: 'Upload Picture for Caption'});
    */

    var $finishbutton = $('<button id="'+za.buttons['finishcontest'].id+'" />') ;
    $finishbutton.button({label: za.buttons['finishcontest'].label});
    
    $finishbutton.bind('click', function() {
       var jsonobject = {};
       jsonobject['op'] = 'create_contest';
       $.each(attrs, function(idx, attr) {
        if (idx === 'entrytype') { jsonobject[attr]=$('input[name=groupa]:checked').val(); }
        else if (idx === 'iscaption') { jsonobject[attr] = $( za.jq(attr.id)).is(':checked'); }
        else { jsonobject[attr] = $( za.jq(attr.id)).val(); }     
       });

       $.post( 'http://184.72.35.49/sangeeta/za/backend/index.php', jsonobject,
          function(data) { alert('response received'); } );

       /*
       var $uploadcaptiondiv = $('<div id="uploadcaptiondiv"></div>');
       var $uploadcaptionpic = $('<input id="uploadcaptionbutton" type="button" />') ;
       $uploadcaptionpic.button({label: 'Upload Picture for Caption'});
       $uploadcaptiondiv.append($uploadcaptionpic);
       $(za.jq(attrs['iscaption'].id)).parent().append($uploadcaptiondiv);
       $("#uploadcaptionbutton").button('refresh');*/
       //$("#uplaodcaptionbutton").show();
    });
    $createcontestform.append($finishbutton);
    
    var $savebutton = $('<button id="'+za.buttons['savecontest'].id+'" />') ;
    $savebutton.button({label: za.buttons['savecontest'].label});
    $createcontestform.append($savebutton);
    
    $parentdiv.append($createcontestform);
    
    $(za.jq(attrs['startdate'].id)).datepicker();
    $(za.jq(attrs['enddate'].id)).datepicker();
    $(za.jq(attrs['entrydeadline'].id)).datepicker();
    
    $(za.jq(entrytypes['picture'].id)).button();
    $(za.jq(entrytypes['video'].id)).button();
    $(za.jq(entrytypes['text'].id)).button();
    $(za.jq(entrytypes['picture'].id)).attr('checked','checked');
    $(za.jq(entrytypes['picture'].id)).button('refresh');
    
    //$("#uploadcaptionbutton").hide(); 
  };
  za.CreateContest = CreateContest;
}(jQuery));
