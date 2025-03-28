var fst;
var fsc;
var strSteel;
var strSteel1;
var x1,y1,y3,x3,y2;
var xt1,yt1,yt3,xt3,yt2;
var fscflg = 0;
var fstflg = 0;
function Page2(){
	
	$("#page1Div2").html("");
	$("#centerText").html("Stress in Compression and Tension Steel");
	
	if(steelVal == 250){
		if(esc <= 0.00109){
		fsc = esc*2*Math.pow(10,5);	
		}else{
		fsc = 0.87*250;
		}
		
		if(est <= 0.00109){
		 fst =	est*2*Math.pow(10,5);
		}else{
		 fst = 0.87*250;
		}
		
		
	if(fsc <= steelVal)	{
		strSteel = fsc;
		strSteel = parseFloat(strSteel);
	}else{
		strSteel = steelVal;
		strSteel = parseFloat(strSteel);
	}
	
	if(fst <= steelVal){
		
		strSteel1 = fst;
		strSteel1 = parseFloat(strSteel1);
	}else{
		strSteel1 = steelVal;
		strSteel1 = parseFloat(strSteel1);
	}
		
	page2htm =	    '<div class="col-sm-12" >'
      			  	 +' <center><label class="labelstyle " style = "color:#913abd; font-size: 20px;"  > For Mild Steel (Grade Fe-250) </label> </center>'
	  			   	 +'</div>'
	  	
	
					 + '<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" id = "page2" >'
      			  	 +' <center><label class="labelstyle " > Stresses in Compression, fsc: '+fsc+' N/mm<sup>2</sup> </label> </center>'
	  			   	 +'</div>'
      				+'</div>'
      				
      				+'<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" id = "page2">'
      			  	 +' <center><label class="labelstyle " > Stresses in Tension, fst: '+fst+' N/mm<sup>2</sup> </label> </center>'
	  			   	 +'</div>'
      				+'</div>'
      				
      				+'<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" id = "page2">'
      			  	 +' <center><label class="labelstyle " > Stresses in Steel : '+strSteel+' N/mm<sup>2</sup> </label> </center>'
	  			   	 +'</div>'
      				+'</div>'
      				
      				+'<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" id = "page2">'
      			  	 +' <center><label class="labelstyle " > Stresses in Steel: '+strSteel1+' N/mm<sup>2</sup>  </label> </center>'
	  			   	 +'</div>'
      				+'</div>'
      				
      				+'<div class="row">'
	               +'<div class="col-sm-3">'
	   				+'</div>'
	  			 +'<div class="col-sm-8">'
	  			 +'<button type="button" style="padding: 5px;font-size: 16px; width:80%;margin-top:7px;"  class="btn btn-danger btnStyle" id="page3Next"><b>Next Level</b></button>'
	 			  +'</div>'
	 			  +'<div class="col-sm-1">'
	  			 +'</div>'
	  			 +'</div>'
      				
      	$("#page1Div2").html(page2htm);			
      	
      	
      	 $("#page3Next").click(function(){
                      page3();
					 
	      });
		
		
	}else{
		
		$("#page1Div2").html("");
	   $("#centerText").html("Stress in Compression and Tension Steel");
	   fscflg = 1;
	    ColumnAnim();
		
	page2htm =	  '<div class="col-sm-12" >'
      			  	 +' <center><label class="labelstyle " style = "color:#913abd; font-size: 20px;"  > For Grade Fe- '+steelVal+' </label> </center>'
	  			   	 +'</div>'
	  			   	 
	  			   	  +'<div class="col-sm-12" >'
	  			   	  +'<div class="col-sm-10">'
      			  	 +' <center><label class="labelstyle " style = "color:#1a6f87; font-size: 18px;"  > Use table A of SP-16 </label> </center>'
      			  	  +'</div>'
      			  	  +'<div class="col-sm-2">'
				    +'<button type="submit"   id="refer"  style=" background-color: #008CBA;;" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Refer</input>'
				     +'</div>'
	  			   	 +'</div>'
	
				  +'<div class="col-sm-12" id="forceEntered" >'
				   +'<div class="col-sm-3">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Submit X1 for fsc  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="xc1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				    +'<div class="col-sm-3">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Submit Y1 for fsc </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="yc1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'</div>'
				   
				   + '<div class="col-sm-12" id="forceEntered" >'
				   +'<div class="col-sm-3">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Submit X3 for fsc </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="xc3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Submit Y3 for fsc </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="yc3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'</div>'
				   
				    +'<div class="row">'
	               +'<div class="col-sm-3">'
	   				+'</div>'
	  			 +'<div class="col-sm-8">'
	  			 +'<button type="button" style="padding: 5px;font-size: 16px; width:80%;margin-top:7px;" data-toggle="modal" data-target="#myModal" class="btn btn-danger btnStyle" id="fsc_submit" >Submit</button>'
	 			  +'</div>'
	 			  +'<div class="col-sm-1">'
	  			 +'</div>'
	  			 +'</div>'
	  			 
	  			
		
		$("#page1Div2").html(page2htm);	
		
		
		$("#refer").click(function(){
			
			  $(".modal-header").html("Reference Table");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg = '<img src="images/Linear_interpolation.png" class="img-responsive" alt="Cinque Terre">'
            $("#MsgModal").html(modelImg);		  
		});

		
	$("#fsc_submit").click(function(){
		x1 = $("#xc1").val();
		x3 = $("#xc3").val();
		y1 = $("#yc1").val();
		y3 = $("#yc3").val();
		
	
		
		if(x1 == "" || x3 == "" || y1 == "" || y3 == ""  ){
			 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Values not found");
		}else{
			
			  fstflg = 1;
	         ColumnAnim();
			var y23 = (esc - x1)
			var y22  =  (y3 - y1);
			var y21 = (y23*y22);
			y21 = parseFloat(y21);
			var y211 = (y21)/(x3-x1);
			y211 = parseFloat(y211);
			y1 = parseFloat(y1);
			y2 = y211 + y1;
			
			fsc = parseFloat(y2);
			fsc = fsc.toFixed(2);
			
			console.log(fsc+"fsc");	
			
			var page2htm1   =   '<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" >'
        			 +' <center><label class="labelstyle " style = "color:#3fabd9 ; font-size: 16px;" > Stresses in Compression, fsc: '+fsc+' N/mm<sup>2</sup> </label> </center>'
	  			   	 +'</div>'
      				+'</div>'
      				
      				
      				 +'<div class="col-sm-12" id="forceEntered" >'
				   +'<div class="col-sm-3">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Submit X1 for fst  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="xt1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				    +'<div class="col-sm-3">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Submit Y1 for fst </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="yt1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'</div>'
				   
				   + '<div class="col-sm-12" id="forceEntered" >'
				   +'<div class="col-sm-3">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Submit X3 for fst </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="xt3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Submit Y3 for fst </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="yt3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'</div>'
				   
				    +'<div class="row">'
	               +'<div class="col-sm-3">'
	   				+'</div>'
	  			 +'<div class="col-sm-8">'
	  			 +'<button type="button" style="padding: 5px;font-size: 16px; width:80%;margin-top:7px;" data-toggle="modal" data-target="#myModal" class="btn btn-danger btnStyle" id="fst_submit" >Submit</button>'
	 			  +'</div>'
	 			  +'<div class="col-sm-1">'
	  			 +'</div>'
	  			 +'</div>'
      				
      	$("#page1Div2").append(page2htm1);	
      	
      	
      	$("#fst_submit").click(function(){
			  xt1 = $("#xt1").val();
		     xt3 = $("#xt3").val();
		     yt1 = $("#yt1").val();
		     yt3 = $("#yt3").val();
		
		if(xt1 == "" || xt3 == "" || yt1 == "" || yt3 == ""  ){
			 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Values not found");
		}else{
			
			var y231 = (est - xt1)
			var y221  =  (yt3 - yt1);
			var y210 = (y231*y221);
			y210 = parseFloat(y210);
			var y2110 = (y210)/(xt3-xt1);
			y2110 = parseFloat(y2110);
			yt1 = parseFloat(yt1);
			yt2 = y211 + yt1;
			
			fst = parseFloat(yt2);
			fst = fst.toFixed(2);
			
		
			
					
	if(fsc <= steelVal)	{
		strSteel = fsc;
		strSteel = parseFloat(strSteel);
	}else{
		strSteel = steelVal;
		strSteel = parseFloat(strSteel);
	}
	
	if(fst <= steelVal){
		
		strSteel1 = fst;
		strSteel1 = parseFloat(strSteel1);
	}else{
		strSteel1 = steelVal;
		strSteel1 = parseFloat(strSteel1);
	}
			
			
			
			
			var page2htm2   =   '<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" >'
        			 +' <center><label class="labelstyle " style = "color:#3fabd9 ; font-size: 16px;" > Stresses in Tension, fst: '+fst+' N/mm<sup>2</sup> </label> </center>'
	  			   	 +'</div>'
      				+'</div>'
      				
      				+'<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" id = "page2">'
      			  	 +' <center><label class="labelstyle " > Stresses in Compression Steel = fsc = '+strSteel+' N/mm<sup>2</sup> </label> </center>'
	  			   	 +'</div>'
      				+'</div>'
      				
      				+'<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-3">'
		 			 +'</div>'
        			 +'<div class="col-sm-6" id = "page2">'
      			  	 +' <center><label class="labelstyle " > Stresses in Tension Steel = fst =  '+strSteel1+' N/mm<sup>2</sup>  </label> </center>'
	  			   	 +'</div>'
      				+'</div>'
      				
      				+'<div class="row">'
	               +'<div class="col-sm-3">'
	   				+'</div>'
	  			 +'<div class="col-sm-8">'
	  			 +'<button type="button" style="padding: 5px;font-size: 16px; width:80%;margin-top:7px;"  class="btn btn-danger btnStyle" id="page3Next"><b>Next Level</b></button>'
	 			  +'</div>'
	 			  +'<div class="col-sm-1">'
	  			 +'</div>'
	  			 +'</div>'
      				
      			$("#page1Div2").append(page2htm2);
      			
      			
      			
      			
      			
      			 $("#page3Next").click(function(){
                      page3();
					 
				}); 		
			
			
			}
		
		
		
		});
      	
      	
      				
		}
		
		
	});	
	
	
	

	
	
	
	
	}
	
}