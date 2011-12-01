'use strict';
  
(function($){
  var GalleryCollection = function(args) {
    alert("COming here");
    var $parentdiv = $( za.jq(args.id) );
    
    var $gallery = $('<div class="mygallery"></div>');
    //var $album = $('<div class="tn3 album"></div>');
    var $ol = $('<ol></ol>');
    $ol.append($('<li><a href="../../samplecontent/images/1.jpg"><img src="../../samplecontent/images/1.jpg" /></a></li>'));
    $ol.append($('<li><a href="../../samplecontent/images/2.jpg"><img src="../../samplecontent/images/2.jpg" /></a></li>'));
    $ol.append($('<li><a href="../../samplecontent/images/3.jpg"><img src="../../samplecontent/images/3.jpg" /></a></li>'));
    //$album.append($ol);
    //$gallery.append($album);
    //$gallery.append($('<div class="tn3 thumb">images/35x35/1.jpg</div>'));
    $gallery.append($ol);
    $parentdiv.append($gallery);
    var tn1 = $gallery.tn3({
skinDir:"../plugins/tn3/skins",
imageClick:"fullscreen",
image:{
maxZoom:1.5,
crop:true,
clickEvent:"dblclick",
transitions:[{
type:"blinds"
},{
type:"grid"
},{
type:"grid",
duration:460,
easing:"easeInQuad",
gridX:1,
gridY:8,
// flat, diagonal, circle, random
sort:"random",
sortReverse:false,
diagonalStart:"bl",
// fade, scale
method:"scale",
partDuration:360,
partEasing:"easeOutSine",
partDirection:"left"
}]
}
		});
    /****
		<li>
		    <h4>Walls of the Old Town</h4>
		    <div class="tn3 description">Kotor, Montenegro</div>
		    <a href="images/620x378/4.jpg">
			<img src="images/35x35/4.jpg" />
		    </a>
		</li>
		<li>
		    <h4>Boat in the port</h4>
		    <div class="tn3 description">Sousse, Tunis</div>
		    <a href="images/620x378/5.jpg">
			<img src="images/35x35/5.jpg" />
		    </a>
		</li>
		<li>
		    <h4>Wall of the Jain temple</h4>
		    <div class="tn3 description">Jaisalmer, India</div>
		    <a href="images/620x378/6.jpg">
			<img src="images/35x35/6.jpg" />
		    </a>
		</li>
		<li>
		    <h4>City park</h4>
		    <div class="tn3 description">Negotin, Serbia</div>
		    <a href="images/620x378/7.jpg">
			<img src="images/35x35/7.jpg" />
		    </a>
		</li>
		<li>
		    <h4>Taj Mahal mausoleum</h4>
		    <div class="tn3 description">Agra, India</div>
		    <a href="images/620x378/8.jpg">
			<img src="images/35x35/8.jpg" />
		    </a>
		</li>
		<li>
		    <h4>Zante Port</h4>
		    <div class="tn3 description">Zakynthos, Greece</div>
		    <a href="images/620x378/9.jpg">
			<img src="images/35x35/9.jpg" />
		    </a>
		</li>
		<li>
		    <h4>Rustovo Monastery</h4>
		    <div class="tn3 description">Budva, Montenegro</div>
		    <a href="images/620x378/10.jpg">
			<img src="images/35x35/10.jpg" />
		    </a>
		</li>
		<li>
		    <h4>The Mezquita, Cathedral and former Great Mosque</h4>
		    <div class="tn3 description">Cordoba, Spain</div>
		    <a href="images/620x378/11.jpg">
			<img src="images/35x35/11.jpg" />
		    </a>
		</li>
		<li>
		    <h4>Wine Cellars</h4>
		    <div class="tn3 description">Rajac, Serbia</div>
		    <a href="images/620x378/12.jpg">
			<img src="images/35x35/12.jpg" />
		    </a>
    
    *****/
    
    
    //$parentdiv.append($gallery);
    //$(".mygallery").tn3({autoplay:true});
  };
  za.GalleryCollection = GalleryCollection;
}(jQuery));