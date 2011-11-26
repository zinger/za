'use strict';
  
(function($){
  var CreateContest = function(args) {
    var $parentdiv = $( za.jq(args.id) );
    var attrs = za.contestattrs;
    
    $parentdiv.append($('<div>This is the create contests page</div>'));
    
    var $createcontestform = $('<div id="createcontestform"></div>');
    
    var $titlediv = $('<div></div>');
    $titlediv.append($('<label for="'+attrs.title+'">Title</label>'));
    $titlediv.append($('<div><input type="text" id="'+attrs.title+'"></input></div>'));
    
    var $taglinediv =  $('<div></div>');
    $taglinediv.append($('<label for="'+attrs.tagline+'">Tag Line</label>'));
    $taglinediv.append($('<div><input type="text" id="'+attrs.tagline+'"></input></div>'));
    
    var $startdatediv = $('<div id="startdatediv"></div>');
    $startdatediv.append($('<label for="'+attrs.startdate+'">Start Date</label>'))
    $startdatediv.append($('<input type="text" id="'+attrs.startdate+'"></input>'));
    
    
    var $enddatediv = $('<div id="enddatediv"></div>');
    $enddatediv.append($('<label for="'+attrs.enddate+'">End Date</label>'))
    $enddatediv.append($('<input type="text" id="'+attrs.enddate+'"></input>'));
    
 
    var $entrydeadlinediv = $('<div id="entrydeadlinediv"></div>');
    $entrydeadlinediv.append($('<label for="'+attrs.entrydeadline+'">Entry Deadline</label>'))
    $entrydeadlinediv.append($('<input type="text" id="'+attrs.entrydeadline+'"></input>'));
   
    
    var $iscaptiondiv = $('<div id="iscaptiondiv"></div>');
    $iscaptiondiv.append($('<label for="'+attrs.iscaption+'">Caption Contest?</label>'));
    $iscaptiondiv.append($('<input id="'+attrs.iscaption+'" type="checkbox" />')) ;
    //$iscaption.button();
    /*
    var $uploadcaptionpic = $('<input id="uploadcaptionbutton" type="button" />') ;
    $uploadcaptionpic.button({label: 'Upload Picture for Caption'});
    */
    var $entrytypediv = $('<div id="entrytypediv">Entry Type</div>');
    $entrytypediv.append($('<label for="b1">Picture</label>'));
    $entrytypediv.append($('<input type="radio" name = "groupa" id = "b1" value="'+za.entrytypes.picture+'" />'));
    
    $entrytypediv.append($('<label for="b2">Video</label>'));
    $entrytypediv.append($('<input type="radio" name = "groupa" id = "b2" value="'+za.entrytypes.video+'" />'));
    
    $entrytypediv.append($('<label for="b3">Text</label>'));
    $entrytypediv.append($('<input type="radio" name = "groupa" id = "b3" value="'+za.entrytypes.text+'" />'));
    
    var $detailsdiv = $('<div id="detailsdiv"></div>');
    $detailsdiv.append($('<label for="'+attrs.details+'">Details</label>'));
    $detailsdiv.append($('<textarea id="'+attrs.details+'"rows="5" cols="50"></textarea>'));
    
    var $tagsdiv = $('<div id="tagsdiv"></div>');
    $tagsdiv.append($('<label for="'+attrs.tags+'">Tags</label>'));
    $tagsdiv.append($('<div><input type="text" id="'+attrs.tags+'"></input></div>'));
    
    $createcontestform.append($titlediv).append($taglinediv).append($startdatediv).append($enddatediv).append($entrydeadlinediv);
    $createcontestform.append($iscaptiondiv).append($entrytypediv).append($detailsdiv).append($tagsdiv);
    
    var $finishbutton = $('<input id="finish" type="submit" />') ;
    $finishbutton.button({label: za.finishcontestlabel});
    
    $finishbutton.bind('click', function() {
       var jsonobject = {}; 
       $.each(attrs, function(idx, attr) {
        if (idx === 'entrytype') { jsonobject[attr]=$('input[name=groupa]:checked').val(); }
        else if (idx === 'iscaption') { jsonobject[attr] = $( za.jq(attr)).is(':checked'); }
        else { jsonobject[attr] = $( za.jq(attr)).val(); }     
       });
       var $uploadcaptiondiv = $('<div id="uploadcaptiondiv"></div>');
       var $uploadcaptionpic = $('<input id="uploadcaptionbutton" type="button" />') ;
       $uploadcaptionpic.button({label: 'Upload Picture for Caption'});
       $uploadcaptiondiv.append($uploadcaptionpic);
       $("#iscaptiondiv").append($uploadcaptiondiv);
       $("#uploadcaptionbutton").button('refresh');
       //$("#uplaodcaptionbutton").show();
    });
    $createcontestform.append($finishbutton);
    
    var $savebutton = $('<input id="save" type="button" />') ;
    $savebutton.button({label: za.savecontestlabel});
    $createcontestform.append($savebutton);
    
    $parentdiv.append($createcontestform);
    $("#startdatediv input").datepicker();
    $("#enddatediv input").datepicker();
     $("#entrydeadlinediv input").datepicker();
    
    $('#entrytypediv input').button();     
    $('#b1').attr('checked','checked');
    $('#entrytypediv input').button('refresh');
    
    //$("#uploadcaptionbutton").hide(); 
  };
  za.CreateContest = CreateContest;
}(jQuery));
