var ascProvided ;
var buser;
var duser;
var acsflg = 0;
var bflg = 0;
function page4()
{		
	
		$("#page1Div2").html("");
		$('#page1Div1').html("");
		labels1 = '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Diameter of logitudinal bar  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="textD"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="dsubmit"  data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
		+ '</div>'
		+ '</div>'
		
		
		+'<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">choose number of bars  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txtbar"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="bsubmit"  data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
		+ '</div>'
		+ '</div>'
		
		$("#page1Div2").html(labels1);
		
			$("#dsubmit").click(function() {
				
				 duser = $("#textD").val();
				if(duser < 12){
					toastr.error('<span class="blinking1">Enter Value greater than 12mm </span>');
					$("#blink1").prop("hidden",true);
//					blinker();
				}else{
					 $("#dsubmit").prop("disabled",true);
				}
				
		});	
		
		$("#bsubmit").click(function() {
			 buser = $("#txtbar").val();
			
			if(buser < 4){
				toastr.error('<span class="blinking1">Enter Value greater than 4 </span>');
					$("#blink1").prop("hidden",true);
				
			}else{
				$("#bsubmit").prop("disabled",true);
				calculateLast();
				
			}
			
			});
			
			function calculateLast(){
				var acsflg = 0;
				bflg = 1;
				columnLast();
			var ascpro	= (buser * (3.14/4)*duser*duser);
			ascProvided = parseFloat(ascpro);
			ascProvided = ascProvided.toFixed(2);
			if (ascProvided < ASC){
				acsflg = 1;
			}
			
			var cond2 = duser*16;
			let cond1 = Math.min(D_val,colSize);
			let cond3 = 300;
			let smallest = Math.min(cond1,cond2,cond3);
//			console.log("Smallest number is:", smallest);
			
			label = '<div class = "row" id = "labelrow" >'
		+'<div class="col-sm-2">'
		+'</div>'	
         +'<div class="col-sm-8 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > ASC provided = '+ascProvided+' mm<sup>2</sup> </label></center> '
      	+'</div>'
      	+'</div>'
      	if(acsflg == 1){
			  label += '<div class = "row" id = "labelrow" >'
		+'<div class="col-sm-2">'
		+'</div>'	
         +'<div class="col-sm-8 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > ASC provided should be greater than ASC required </label></center> '
      	+'</div>'
      	+'</div>'
		  }else{
			  
		  
      	label += '<div class = "row" id = "labelrow">'
      	+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">choose diameter of lateral tie()-  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="tietxt"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="tsubmit" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
		+ '</div>'
		+'</div>'
      	
		
      	
      	+'<div class = "row" id = "labelrow">'
		+'<div class="col-sm-2">'
		+'</div>'
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " >1. Least lateral dimension  = '+cond1+'  </label></center> '
      	+'</div>'
      	+'</div>'
      	
      	+'<div class = "row" id = "labelrow">'
		+'<div class="col-sm-2">'
		+'</div>'
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " >2. 16 X Longitudinal bar  = '+cond2+' mm </label></center> '
      	+'</div>'
      	+'</div>'
      	
      	+'<div class = "row" id = "labelrow">'
		+'<div class="col-sm-2">'
		+'</div>'
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > 3. '+cond3+' mm  </label></center> '
      	+'</div>'
      	+'</div>'
      	
      	+'<div class = "row" id = "labelrow">'
		+'<div class="col-sm-2">'
		+'</div>'
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > Lateral spacing of tie bars = '+smallest+' mm  </label></center> '
      	+'</div>'
      	+'</div>'
      	

		
		
      	
     }
    	
      	
      	$("#page1Div2").append(label);
	
		
	
			
			
			
			let condtie = Math.max(duser,6);
			$("#tsubmit").click(function() {
			tuser = $("#tietxt").val();
			
			if(tuser < condtie ){
				
					
					toastr.error('<span class="blinking1">Enter Value greater than '+condtie+' mm </span>');
					$("#blink1").prop("hidden",true);
				
			}else{
				$("#tsubmit").prop("disabled",true);
			}
			
			});
			
			
		
			
		}
		
		}