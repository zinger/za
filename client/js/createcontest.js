'use strict';
  
(function($){
  var CreateContest = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(args.parentid) );
    var attrs = za.contestattrs;
    var entrytypes = za.entrytypes;
    /*
    za.contestattrs = {
    title: {id: 'name', label: 'Title', type: 'input'},
    tagline: {id: 'tagl', label: 'Tag Line', type: 'input'},
    startdate: {id: 'sd', label: 'Start Date', type: 'input'},
    enddate: {id: 'ed', label: 'End Date', type: 'date'},
    entrydeadline: {id: 'sed', label: 'Entry Deadline', type: 'date'},
    iscaption: {id: 'ctype', label: 'Caption Contest', type: 'checkbox'},
    pictureurl: {id: 'url', label: 'Picture', type: 'input'},
    entrytype: {id: 'etype', label: 'Entry Type', type: 'radio'},
    whocanpart: {id: 'whocan', label: 'Who Can Participate?', type: 'radio'},
    inviteothers: {id: 'inviteothers', label: 'Participants can invite other participants', type: 'checkbox'},
    details: {id: 'desc', label: 'Details', type: 'textarea'},
    tags: {id: 'tags', label: 'Tags', type: 'input'}
  };
    */
    var contestData = {name: 'Crazy Fools', tagl:'Craziest Zing Ever', sd:'1/12/2012',
                       ed:'2/18/2012', sed:'1/30/2012', ctype: '1', etype:'1', whocan: '1',
                       inviteothers: '1',
                       desc: 'This is the description',
                       //'<div style=\"color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; background-image: initial; background-repeat: initial; background-attachment: initial; -webkit-background-clip: initial; -webkit-background-origin: initial; background-color: #ffffff; outline-width: 0px; outline-style: initial; outline-color: initial; background-position: initial initial; margin: 8px;\">\n<p>&nbsp;</p>\n<div style=\"color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; background-image: initial; background-repeat: initial; background-attachment: initial; -webkit-background-clip: initial; -webkit-background-origin: initial; background-color: #ffffff; outline-width: 0px; outline-style: initial; outline-color: initial; margin: 8px;\">\n<div style=\"color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; background-image: initial; background-repeat: initial; background-attachment: initial; -webkit-background-clip: initial; -webkit-background-origin: initial; background-color: #ffffff; outline-width: 0px; outline-style: initial; outline-color: initial; margin: 8px;\">\n<div style=\"color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; background-image: initial; background-repeat: initial; background-attachment: initial; -webkit-background-clip: initial; -webkit-background-origin: initial; background-color: #ffffff; outline-width: 0px; outline-style: initial; outline-color: initial; margin: 8px;\">\n<p>this is not the description</p>\n<hr style=\"cursor: default;\" />\n<p><img style=\"border-style: initial; border-color: initial; cursor: default; border-width: 0px;\" title=\"Embarassed\" src=\"file:///Users/sunilmasand/za/za/client/plugins/tinymce/jscripts/tiny_mce/plugins/emotions/img/smiley-embarassed.gif\" alt=\"Embarassed\" border=\"0\" />&nbsp;Must join this contest!!!! Its a lot of fun</p>\n<h1 style=\"font-size: 2em;\">BOOOOOOO.... Join Because</h1>\n<ol>\n<li><span class=\"Apple-style-span\" style=\"font-size: xx-small;\">You will love it</span></li>\n<li><span class=\"Apple-style-span\" style=\"font-size: xx-small;\">You are insane</span></li>\n<li><span class=\"Apple-style-span\" style=\"font-size: xx-small;\">You are stupid</span></li>\n</ol>\n<div><hr style=\"cursor: default;\" /><span class=\"Apple-style-span\" style=\"font-size: xx-small;\">&radic; this is a special character</span></div>\n</div>\n</div>\n</div>\n<p>&nbsp;</p>\n</div>',
                       tags: 'these are tags'
                       };
    
    $parentdiv.append($('<div class="pageTitle">Create Contest</div>'));
    
    //var $createcontestform = $('<div id="create-contest-form"></div>');
    
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
          $div.append($('<div><textarea rows="5" cols="50" name="'+attr.id+'" id="'+attr.id+'"></textarea></div>'));
          return $div;
    }
    
    var buildButtonDiv = function(attr) {
      var $div = $('<div class="button-div"></div>')
      if (attr.label !== 'undefined') $div.append($('<label for="'+attr.id+'">'+attr.label+'</label>'));
      $div.append($('<input id="'+attr.id+'" type="button" />'));
      return $div;
    }
    
    var $createcontestform = $('<form id="create-contest-form" enctype="multipart/form-data" method="post"></form>');
    //$createcontestform.append($('<input id="op" name="op" value="create_contest" />'));
    $createcontestform.append($('<input id="obj" type="hidden" name="obj">'));
    
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
        if (idx !== 'pictureurl') var $attrdiv = $createcontestform.append(buildInputDiv(attr));
        break;
      }
    });
    $createcontestform.append($('<div id="upload"></div>'));
    var $finishbutton = $('<button id="'+za.buttons['finishcontest'].id+'" />') ;
    $finishbutton.button({label: za.buttons['finishcontest'].label});
    
    $finishbutton.bind('click', function() {
       var jsonobject = {};
       jsonobject['op'] = 'create_contest';
       $.each(attrs, function(idx, attr) {
        switch (idx) {
          case 'entrytype':
            jsonobject[attr.id]=$('input[name="'+attr.id+'"]:checked').val();
            break;
          case 'iscaption':
            jsonobject[attr.id] = $( za.jq(attr.id)).is(':checked');
            break;
          case 'whocanpart':
            jsonobject[attr.id] = $('input[name="'+attr.id+'"]:checked').val();
            break;
          case 'inviteothers':
            jsonobject[attr.id] = $( za.jq(attr.id)).is(':checked');
            break;
          case 'details':
            jsonobject[attr.id] = tinyMCE.get(attr.id).getContent();
            break;
          default:
            jsonobject[attr.id] = $( za.jq(attr.id)).val();
            break;
        }
        
        $('#obj').val(JSON.stringify(jsonobject));

       });

       alert("JSON Object thats being passed is " + JSON.stringify(jsonobject));
        fileUpload(this.form,za.getServerUri(),'upload');
    });
    $createcontestform.append($finishbutton);
    
    var $savebutton = $('<button id="'+za.buttons['savecontest'].id+'" />') ;
    $savebutton.button({label: za.buttons['savecontest'].label});
    $createcontestform.append($savebutton);
    
    $parentdiv.append($createcontestform);
    
    $( za.jq(attrs['iscaption'].id)).change(function() {
      if ($( za.jq(attrs['iscaption'].id)).is(':checked')) {
        var $uploadcaptiondiv = $('<div id="upload-caption-div"></div>');
        //var $uploadcaptionpic = $('<input id="upload-caption-button" type="file" name="capFile" multiple/>') ;
        var $uploadcaptionpic = $('<input id="upload-caption-button" type="file" name="files" />') ;
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

    $.each(attrs, function(idx, attr) {
        switch (idx) {
          case 'entrytype':
            if (contestData[attr.id] === za.entrytypes['picture'].value) {
              $(za.jq(entrytypes['picture'].id)).attr('checked','checked');
              $(za.jq(entrytypes['picture'].id)).button('refresh');
            }
            else if (contestData[attr.id] === za.entrytypes['video'].value) {
              $(za.jq(entrytypes['video'].id)).attr('checked','checked');
              $(za.jq(entrytypes['video'].id)).button('refresh');
            }
            else if (contestData[attr.id] === za.entrytypes['text'].value) {
              $(za.jq(entrytypes['text'].id)).attr('checked','checked');
              $(za.jq(entrytypes['text'].id)).button('refresh');
            }
            break;
          case 'iscaption':
            if (contestData[attr.id] === '1') 
              $( za.jq(attr.id)).attr('checked','checked');
            break;
          case 'whocanpart':
            if (contestData[attr.id] === za.whocanpart['everyone'].value) {
              $(za.jq(za.whocanpart['everyone'].id)).attr('checked','checked');
              $(za.jq(za.whocanpart['everyone'].id)).button('refresh');
            } else {
              $(za.jq(za.whocanpart['restricted'].id)).attr('checked','checked');
              $(za.jq(za.whocanpart['restricted'].id)).button('refresh');
            }
            break;
          case 'inviteothers':
            if (contestData[attr.id] === '1') {
              //$( za.jq(attr.id)).attr('checked','checked');
              var $invOthers = buildCheckboxDiv(attrs['inviteothers']);
              $invOthers.insertAfter($('input[name="'+za.contestattrs['whocanpart'].id+'"]').parent());
              $( za.jq(attr.id)).attr('checked','checked');
            }
            break;
          default:
            $(za.jq(attr.id)).attr('value', contestData[attr.id]);
            //jsonobject[attr.id] = $( za.jq(attr.id)).val();
            break;
        };
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
        skin_variant : "silver",
        setup : function(ed) {
          ed.bind('mouseover', function(ed) {
            $("#desc_ifr").qtip({
            content: 'I was clicked',
            style: 'mystyle',
            show: 'click',
            hide: 'mouseout'
            }).qtip("focus").qtip("show");
          });
        // Display an alert onclick
        /*
                    $("#desc_ifr").qtip({
            content: 'I was clicked',
            style: 'mystyle',
            show: 'click',
            hide: 'mouseout'
          }).qtip("focus").qtip("show");*/
        //ed.onClick.add(function(ed) {
        //    ed.windowManager.alert('User clicked the editor.');

        //});
    }

    });
          za.buildCreateContestTooltip();
         /*   tinymce.get(0).qtip({
            content: 'I was clicked',
            style: 'mystyle',
            show: 'mouseover',
            hide: 'mouseout'
          }).qtip("focus").qtip("show");*/

  };
  za.CreateContest = CreateContest;
}(jQuery));
