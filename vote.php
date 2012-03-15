<?php
//echo "yup coming here";
mysql_connect('localhost', 'root', 'root') or die(mysql_error());
mysql_select_db('za') or die(mysql_error());

require_once('backend/logger.php');
require_once('backend/facebook.php');
require_once('backend/fbhelper.php');
require_once('backend/common/Config.php');
require_once('backend/common/constants.php');
// NOT BEING USED NOW -
$fbobj = new FBHelper();
$ufrnd = $fbobj->getFriends();
?>
<div class="gap">&nbsp;</div>

<form name="frndSelectFrm" action="../../index.php" target="_parent">
<input type="hidden" name="selectedLately" id="selectedLately" value=""/>

<div class="allContent">
	<div class="genInfo">
		<div class="mainHead">Invite your friends</div>
		<div class="cancelBtn"><!--<input type="button" name="Cancel" value="Cancel" class="popupbtn" />--></div>
	</div>
	<br />
	<hr style="color:#F4F4F4; margin-left:5px; margin-right:5px;" align="center"/>
	<br />
	
	<div class="finfrn">Find Friends: <?php //echo $form->text('rfriend', array('size'=>'30', 'onkeyup'=>'removeSpansPop(this.value)')); ?></div>
	<br />
	
	<div class="tablediv">
		<div style="width:530px; float:left;">
			<?php
			$i=0;
			asort($ufrnd['data']);
			foreach($ufrnd['data'] AS $uf) 
			{
			 	if(in_array($uf['id'],$invitedfrnd))
					continue;
					
				//$i++;
			?>
			<div title="<?=$uf['name']?>" valign="top" width="165" class="tdGen" id="<?=$uf['id']?>" onmouseover="lightBlueClr(this.id)" onmouseout="backToOriginal(this.id)" onclick="selectUnselect(this.id)" style="float:left;width:165px; margin-left:6px; padding:0px; margin-top:2px;">
				<div style="float:left;width:58px;"><img src="http://graph.facebook.com/<?=$uf['id']?>/picture" class="popImage" id="im<?=$uf['id']?>" /></div>
				<div><span id="txt<?=$uf['id']?>" class="frndName"><?php echo $uf['name'];?></span></div>			
			</div>
			<?php 
			}?>
		</div>
	</div>
	
	<br />
	<div class="footerbtns">
		<div class="selectBtn" align="left"><input type="submit" value="Select" class="popupbtn" /></div>
		<div class="cancelBtn2" align="left"><?php /*?><?php echo $form->button('Cancel', array('class'=>'popupbtn', 'id'=>'closeCbox'));?><?php */?></div>
	</div>
</div>
</form>