'use strict';
  
(function($){
  var RatePanel = function(args) {  
    
    var $rateRoot = $('<div class="rate-root"></div>');

    for (i=1; i<=10; i++) {
      var id = "rating-rating-"+i;
      $rateRoot.append($('<input type="radio" name="rating" value="1" id="'+id+'" class="radio"/>'));
      //$rateRoot.append($('<label class="rate-label" id="rating-label-"'+i+'">'));
    }
    return $rateRoot;
  };
  za.RatePanel = RatePanel;
}(jQuery));