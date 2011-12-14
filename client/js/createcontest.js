'use strict';
  
(function($){
  var CreateContest = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(args.parentid) );
    var attrs = za.contestattrs;
    var entrytypes = za.entrytypes;
    
    $parentdiv.append($('<div class="pageTitle">Create Contest</div>'));
    
    var $createcontestform = $('<div id="create-contest-form"></div>');
    
    var buildCheckboxDiv = function (attr) {
      var $div = $('<div class="checkbox-div"></div>');
      $div.append($('<label for="'+attr.id+'">'+attr.label+'</label>'));
      $div.append($('<input id="'+attr.id+'" type="checkbox" />')) ;
      return $div;
    };
    
    var buildRadioDiv = function(attr, options) {
      var $div = $('<div class="radio-div">'+attr.label+'</div>');
      $.each(options, function(i, option) {
        $div.append($('<label for="'+option.id+'">'+option.label+'</label>'));
        $div.append($('<input type="radio" name = "'+attr.id+'" id = "'+option.id+'" value="'+option.value+'" />'));
      });
      return $div;
    };
    
    var buildInputDiv = function(attr) {
      var $div = $('<div class="field-div"></div>');
          $div.append($('<label for="'+attr.id+'">'+attr.label+'</label>'));
          $div.append($('<div><input type="text" id="'+attr.id+'"></input></div>'));
          return $div;
    }
    
    var buildTextareaDiv = function(attr) {
      var $div = $('<div class="textarea-div"></div>');
          $div.append($('<label for="'+attr.id+'">'+attr.label+'</label>'));
          $div.append($('<div><textarea rows="5" cols="50" id="'+attr.id+'"></textarea></div>'));
          return $div;
    }
    
    var buildButtonDiv = function(attr) {
      var $div = $('<div class="button-div"></div>')
      if (attr.label !== 'undefined') $div.append($('<label for="'+attr.id+'">'+attr.label+'</label>'));
      $div.append($('<input id="'+attr.id+'" type="button" />'));
      return $div;
    }
    
    $.each(attrs, function(idx, attr) {
      switch (attr.type) {
      case 'checkbox':
        if (idx !== 'inviteothers') $createcontestform.append(buildCheckboxDiv(attr));
        break;
      case 'radio':
        if (idx === 'entrytype')
          $attrdiv = $createcontestform.append(buildRadioDiv(attr, entrytypes));
        else
          $attrdiv = $createcontestform.append(buildRadioDiv(attr, za.whocanpart));
        break;
      case 'textarea': $attrdiv = $createcontestform.append(buildTextareaDiv(attr));
        break;
      case 'button':
        $attrdiv = $createcontestform.append(buildButtonDiv(attr));
        break;
      default:
        if (idx !== 'pictureurl') $attrdiv = $createcontestform.append(buildInputDiv(attr));
        break;
      }
    });
                
    var $finishbutton = $('<button id="'+za.buttons['finishcontest'].id+'" />') ;
    $finishbutton.button({label: za.buttons['finishcontest'].label});
    
    $finishbutton.bind('click', function() {
       var jsonobject = {};
       jsonobject['op'] = 'create_contest';
       $.each(attrs, function(idx, attr) {
        switch (idx) {
          case 'entrytype':
            jsonobject[attr]=$('input[name="'+attr.id+'"]:checked').val();
            break;
          case 'iscaption':
            jsonobject[attr] = $( za.jq(attr.id)).is(':checked');
            break;
          case 'whocanpart':
            jsonobject[attr] = $('input[name="'+attr.id+'"]:checked').val();
            break;
          case 'inviteothers':
            jsonobject[attr] = $( za.jq(attr.id)).is(':checked');
            break;
          default:
            jsonobject[attr] = $( za.jq(attr.id)).val();
        }

       $.post( 'http://184.72.35.49/sangeeta/za/backend/index.php', jsonobject,
          function(data) { 
              alert('response received ' + JSON.stringify(data));
              sendContestRequest(); return false;
          } );
    });
    $createcontestform.append($finishbutton);
    
    var $savebutton = $('<button id="'+za.buttons['savecontest'].id+'" />') ;
    $savebutton.button({label: za.buttons['savecontest'].label});
    $createcontestform.append($savebutton);
    
    $parentdiv.append($createcontestform);
    
    $( za.jq(attrs['iscaption'].id)).change(function() {
      if ($( za.jq(attrs['iscaption'].id)).is(':checked')) {
        var $uploadcaptiondiv = $('<div id="upload-caption-div"></div>');
        var $uploadcaptionpic = $('<input id="upload-caption-button" type="file" name="files[]" multiple/>') ;
        $uploadcaptiondiv.append($uploadcaptionpic);
        $uploadcaptiondiv.insertAfter($(this));
      } else {
        $("#upload-caption-div").remove();
      }     
    });
    
    $(za.jq(attrs['startdate'].id)).datepicker();
    $(za.jq(attrs['enddate'].id)).datepicker();
    $(za.jq(attrs['entrydeadline'].id)).datepicker();
    
    $(za.jq(entrytypes['picture'].id)).button();
    $(za.jq(entrytypes['video'].id)).button();
    $(za.jq(entrytypes['text'].id)).button();
    $(za.jq(entrytypes['picture'].id)).attr('checked','checked');
    $(za.jq(entrytypes['picture'].id)).button('refresh');
    
    $(za.jq(za.whocanpart['everyone'].id)).button();
    $(za.jq(za.whocanpart['everyone'].id)).attr('checked','checked');
    $(za.jq(za.whocanpart['everyone'].id)).button('refresh');
    $(za.jq(za.whocanpart['restricted'].id)).button();
    
    $('input[name="'+za.contestattrs['whocanpart'].id+'"]').change(function() {
 //     if ($(za.whocanpart['everyone'].id).is(':checked')) {
      if ($('input[name="'+za.contestattrs['whocanpart'].id+'"]:checked').val() === za.whocanpart['everyone'].value) {
        $(za.jq(attrs['inviteothers'].id)).parent().remove();
      } else {
        var $canInviteOthers = buildCheckboxDiv(attrs['inviteothers']);
        $canInviteOthers.insertAfter($('input[name="'+za.contestattrs['whocanpart'].id+'"]').parent());
      }     
    });

    tinyMCE.init({
            mode : "textareas",
            theme : "advanced",   //(n.b. no trailing comma, this will be critical as you experiment later)
            plugins : "spellchecker,emotions,iespell,inlinepopups,preview,print,directionality,visualchars",
            theme_advanced_buttons1 : "bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,formatselect,fontselect,fontsizeselect,|,bullist,numlist,|,outdent,indent",
        theme_advanced_buttons2 : "undo,redo,|,forecolor,backcolor,|,hr,charmap,emotions,image,|,iespell,|,ltr,rtl,|,spellchecker,|,preview,|,print",
        theme_advanced_buttons3 : "",
        theme_advanced_toolbar_location : "top",
        theme_advanced_toolbar_align : "left",
        theme_advanced_statusbar_location : "bottom",
        theme_advanced_resizing : true,

        // Skin options
        skin : "o2k7",
        skin_variant : "silver"

    });
    
  };
  za.CreateContest = CreateContest;
}(jQuery));
