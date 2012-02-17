'use strict';
  
(function($){
  var SubmitEntry = function(args) {
    var $parentdiv = $( za.jq(args.parentid) );
    var attrs = za.contestattrs;
    var contestid = args.contestid;
    var contestTitle = args.contestTitle;
    
    var entrytypes = za.entrytypes;
    
    
    var data = 'op=get_entries&cid=' + contestid + '&fbpid='+za.userFbId;
    $.ajax({                                      
      url: za.getServerUri(),       
      data: data,                        //you can insert url argumnets here to pass to api.php
                                       //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(serverdata)          //on recieve of reply
      { alert(JSON.stringify(serverdata)); displayEntries(serverdata['result']); }
    });
    
    var displayEntries = function(data) {
      var currentEntries = [];
      $.each(data, function(i, row) {
	var small_url;
	if (row.small_url === undefined || row.small_url === '') {
	  small_url = '../../images/no-img-contest.png';
	} else small_url = row.small_url;
	currentEntries.push({id: row.id, url: small_url, thumb: small_url, title: row.name, fbpid: row.fb_pid, fbpname: row.fb_pname});
      });
      buildGallery(currentEntries);
    }
    
    var buildGallery = function(currentEntries) {
        $currentEntriesDiv = $('<div class="current-entries-div"><span class="page-title">Your Entries</span></div>');
	var $currentEntries = $('<ul id="current-entries"></ul>');
	$.each(currentEntries, function(i, entry) {
	var id = entry+i;
	var $li = $('<li class="entry-li"></li>');
	$li.append('<img id="'+id+'" src="'+entry.thumb+'" />');
	$li.append('<div class="entry-info" >My Dance</div>');
	$li.append('<div class="date" >10102011</div>');
	$currentEntries.append($li);
      });

	$currentEntriesDiv.append($currentEntries);
	$parentdiv.append($currentEntriesDiv);
    }
      
    var $submitEntryDiv = $('<div class="submit-entry-div"><span class="page-title">Submit Your Entry For '+contestTitle+'</span></div>');
    var $frm = $('<form id="uploadit" enctype="multipart/form-data" method="post"></form>');
    $frm.append($('<input type="hidden" name="upload_pic" value="yes" />'));
    $frm.append($('<label for="entry-title">Entry Title</label>'));
    $frm.append($('<div><input type="text" name="title" id="entry-title" /></div>'));
    $frm.append($('<label for="entry-title">Entry Description</label>'));
    $frm.append($('<div><textarea name="desc" id="desc"></textarea></div>'));
    $frm.append($('<input id="upload-caption-button" type="file" name="files"/>'));
    $frm.append($('<input type="hidden" id="op" name="op" value="submit_entry" />'));
    $frm.append($('<input type="hidden" id="contest-title" name="cid" value="'+contestid+'" />'));
    $frm.append($('<input type="hidden" id="newpart" name="newpart" value="true" />'));
    $frm.append($('<input type="hidden" id="fbpid" name="fbpid" value="'+za.userFbId+'" />'));
    $frm.append($('<input type="hidden" id="fbpname" name="fbpname" value="'+za.userFbName+'" />'));

    $frm.append($('<div id="upload"></div>'));
    $frm.append($('<br /><input id="publish_to_fb" type="checkbox" name="publish_to_fb" value="yes" /> <label for="entry-title">Publish photo to Facebook</label>'));
    
    var $checkboxdiv = $('<div class="checkbox-div"></div>');
    var termsString1 = 'I agree to What\'s Your Zing\'s ';
    var termsString2 = ' and the ';
    $checkboxdiv.append($('<label for="read-terms">'+termsString1+'<a href="#">Terms of Usage</a>'+termsString2+'<a href="#">Contest Details</a></label>'));
    $checkboxdiv.append($('<input id="read-terms" type="checkbox" />')) ;
    var $finishbutton = $('<button id="'+za.buttons['finishentrysubmit'].id+'" />') ;
    $finishbutton.button({label: za.buttons['finishentrysubmit'].label});
    $finishbutton.bind('click', function() { fileUpload(this.form,za.getServerUri(),'upload'); });
	$frm.append($checkboxdiv);
	$frm.append($finishbutton);
	$submitEntryDiv.append($frm);
    $parentdiv.append($submitEntryDiv);
  };
  za.SubmitEntry = SubmitEntry;
}(jQuery));