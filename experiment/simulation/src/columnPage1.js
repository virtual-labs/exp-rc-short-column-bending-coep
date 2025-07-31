var xubal;
var xu;
var xufact ;
var esc;
var est;
var xuflg = 0;
var escflg = 0;
var estflg = 0;
tempJson1={};
function Page1(){
	$("#page1Div2").html("");
	$("#centerText").html("CALCULATION");
	if(steelVal == 250){
	 var xubal1 = 0.53*d_val;
	 xubal = xubal1.toFixed(2);
		xufact = 0.53;
	}else if(steelVal == 415){
	 var xubal1 = 0.48*d_val;
	  xubal = xubal1.toFixed(2);
		xufact = 0.48;
	}else if(steelVal == 500){
		var xubal1 = 0.46*d_val;
		 xubal = xubal1.toFixed(2);
		xufact = 0.46;
	}
	
	xu = Math.ceil((xubal+1)/10)*10;
	console.log(xu,xubal);
	
	var ec = 0.0035;
	var esc1 = (0.0035*(xu-eCover_val))/xu;
	 esc = esc1.toFixed(6);
	var est1 = (0.0035*(d_val-xu))/xu;
	 est = est1.toFixed(6);
		console.log(ec,esc,est);
		console.log(d_val);
		tempJson1.xu = xu;
		tempJson1.esc = esc;
		tempJson1.est = est;
		
		
   calculation =   '<div class="col-sm-12" id="forceEntered" >'
				   +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate Xubal (mm):  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="Xubal_submit" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   
				   	+'<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" id="xuLabel" hidden>'
      			  	 +' <center><label class="labelstyle " >Xu :'+xu+' </label> </center>'
	  			   +'</div>'
      				+'</div>'
      				
      				
      				 +'<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" id="ecLabel" hidden>'
      			  	 +' <center><label class="labelstyle " > &epsilon;<sub>c</sub> : 0.0035 </label> </center>'
	  			   +'</div>'
      				+'</div>'
      				
      				+ '<div class="col-sm-12" id="calculationVal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate strain in compression  &epsilon;sc:  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="esctext"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="esc_submit" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   + '<div class="col-sm-12" id="calest" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate tension steel  &epsilon;st  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="esttext"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="est_submit" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   +'<div class="row">'
	               +'<div class="col-sm-3">'
	   				+'</div>'
	  			 +'<div class="col-sm-8">'
	  			 +'<button type="button" style="padding: 5px;font-size: 16px; width:80%;margin-top:7px;"  class="btn btn-danger btnStyle" id="page2Next" hidden  ><b>Next Level</b></button>'
	 			  +'</div>'
	 			  +'<div class="col-sm-1">'
	  			 +'</div>'
	  			 +'</div>'
			
				   
				   
	$("#page1Div2").html(calculation);	
	
	
				 id = 1;
			  $("#Xubal_submit").click(function(){
					 var xubal_user = $("#text1").val(); 
			  
				if(xubal_user ==""){
					
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Please enter the value");
					
					
			}
				else
					{
					if (id <= 3) {
						if (xubal_user == xubal) {
							 $("#Xubal_submit").prop("disabled",true);
							  $("#text1").prop("disabled",true);
							 $("#xuLabel").prop("hidden",false);
							  $("#xuTemp").text(xu+" mm ");
							  $("#ecLabel").prop("hidden",false);
							   $("#calculationVal").prop("hidden",false);
							   $(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer  ");
							  xuflg = 1;
							  ColumnAnim();
							 
							
						} else if (xubal_user != xubal) {
//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//					
					 $(".modal-header").html("Error Message");
					$(".modal-header").css("background","#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Incorrect answer, try again");		
						
						}


					} else if (id == 4)
					 {
//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");
						
					 $(".modal-header").html("Formula Message");
					$(".modal-header").css("background","#3ea8bd");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Formula : Xubal = "+xufact+" X d");

						
					} else {
						xubal_user =  $("#text1").val(); 
//						flow = flowAns.toFixed(2);
						if (xubal_user == xubal) {
						$("#Xubal_submit").prop("disabled",true);
						  $("#text1").prop("disabled",true);
						 $("#xuLabel").prop("hidden",false);
						$("#xuTemp").text(xu+" mm ");
						  $("#ecLabel").prop("hidden",false);
						  $("#calculationVal").prop("hidden",false);
						  $(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer  ");
					
						  xuflg = 1;
						ColumnAnim();
						
					
						} else {

//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer is "+xubal);
						}
					}
					id++;
					}
					
			   
				});	
				
				
				 id1 = 1;
			  $("#esc_submit").click(function(){
					 var esc_user = $("#esctext").val(); 
			  
				if(esc_user ==""){
					
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Please enter the value");
					
					
				}
				else
					{
					if (id1 <= 3) {
						if (esc_user == esc) {
							  $("#esctext").prop("disabled",true);
							    $("#esc_submit").prop("disabled",true);
							$("#calest").prop("hidden",false);
							$(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer ");
					
					escflg = 1;
					ColumnAnim();		 
							
						} else if (esc_user != esc) {
//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//					
					 $(".modal-header").html("Error Message");
					$(".modal-header").css("background","#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Incorrect answer, try again");		
						
						}


					} else if (id1 == 4)
					 {
//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");
						
					 $(".modal-header").html("Formula Message");
					$(".modal-header").css("background","#3ea8bd");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Formula : 0.0035 X (Xu - d')/Xu");

						
					} else {
						esc_user =  $("#esctext").val(); 
//						flow = flowAns.toFixed(2);
						if (esc_user == esc) {
							  $("#esctext").prop("disabled",true);
							 $("#esc_submit").prop("disabled",true);
							$("#calest").prop("hidden",false);
							$(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer");
					escflg = 1;
					ColumnAnim();
						
					
						} else {

//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer is "+esc);
						}
					}
					id1++;
					}
					
			   
				});	
				
				
				 id2 = 1;
			  $("#est_submit").click(function(){
					 var est_user = $("#esttext").val(); 
			  
				if(est_user ==""){
					
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Please enter the value");
					
					
				}
				else
					{
					if (id2 <= 3) {
						if (est_user == est) {
							$("#esttext").prop("disabled",true);
							$("#est_submit").prop("disabled",true);
							$("#calest").prop("hidden",false);
							$(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer ");
					$("#page2Next").prop("hidden",false);
					estflg = 1;
					ColumnAnim();
							 
							
						} else if (est_user != est) {
//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//					
					 $(".modal-header").html("Error Message");
					$(".modal-header").css("background","#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Incorrect answer, try again");		
						
						}


					} else if (id2 == 4)
					 {
//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");
						
					 $(".modal-header").html("Formula Message");
					$(".modal-header").css("background","#3ea8bd");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Formula : 0.0035 X ( d - Xu)/Xu");

						
					} else {
						est_user =  $("#esttext").val(); 
//						flow = flowAns.toFixed(2);
						if (est_user == est) {
							$("#esttext").prop("disabled",true);
							$("#est_submit").prop("disabled",true);
							$("#calest").prop("hidden",false);
							$(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer");
						$("#page2Next").prop("hidden",false);
						estflg = 1;
					ColumnAnim();
						
					
						} else {

//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html(" Message");
					$(".modal-header").css("background","#47d163");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer is "+est);
						}
					}
					id2++;
					}
					
			   
				});		 
				
				 $("#page2Next").click(function(){
					 Page2();
					 
				});  		
}