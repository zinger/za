'use strict';
  
(function($){
  var SubmitEntry = function(args) {
    var $parentdiv = $( za.jq(args.parentid) );
    var attrs = za.contestattrs;
    
    var entrytypes = za.entrytypes;
    
    $parentdiv.append($('<div class="page-title">Submit Entry</div>'));
    
    var currentEntries = [];
    currentEntries.push({id: '1', url: '../../samplecontent/images/thumbnails/1.jpg', thumb: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', fbpid: 'User1', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    currentEntries.push({id: '2', url: '../../samplecontent/images/thumbnails/2.jpg', thumb: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title1', fbpid: 'User2', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    currentEntries.push({id: '3', url: '../../samplecontent/images/thumbnails/3.jpg', thumb: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title1', fbpid: 'User3', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    
      $div = $('<div class="submit-entry-form"></div>');
      $div.append($('<div>Current Entries</div>'));
      var $currentEntries = $('<ul id="current-entries"></ul>');
      $.each(currentEntries, function(i, entry) {
	var id = entry+i;
	var $li = $('<li class="entry-li"></li>');
	$li.append('<img id="'+id+'" src="'+entry.thumb+'" />');
	$li.append('<div class="entry-info" >My Dance</div>');
	$li.append('<div class="date" >10102011</div>');
	$currentEntries.append($li);
      });
      $div.append($currentEntries);
      
      $div.append($('<label for="entry-title">Entry Title</label>'));
      $div.append($('<div><input type="text" id="entry-title"></input></div>'));
      $div.append($('<input id="upload-caption-button" type="file" name="files[]" multiple/>'));
      var $checkboxdiv = $('<div class="checkbox-div"></div>');
      var termsString1 = 'I agree to What\'s Your Zing\'s ';
      var termsString2 = ' and the ';
      $checkboxdiv.append($('<label for="read-terms">'+termsString1+'<a href="#">Terms of Usage</a>'+termsString2+'<a href="#">Contest Details</a></label>'));
      $checkboxdiv.append($('<input id="read-terms" type="checkbox" />')) ;
      var $finishbutton = $('<button id="'+za.buttons['finishentrysubmit'].id+'" />') ;
      $finishbutton.button({label: za.buttons['finishentrysubmit'].label});
      $finishbutton.bind('click', function() {
	alert("I was clicked"); 
      });
      $div.append($checkboxdiv);
      $div.append($finishbutton);
    
    $parentdiv.append($div);
  };
  za.SubmitEntry = SubmitEntry;
}(jQuery));