
var conVal;
var steelVal;
var len;
var pre; 
var pu_val; 
var colSize ;
var d_val ; 
var D_val;
var e_val;
var eCover_val;
let MasterJson={};
array = [];


var htm ='<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter Working Load (P) kN : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="presText" style= "width:100%;"  class=" form-control marginBottom"  >'
	   +'</div>' 
	   +'</div>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Design Load (Pu)  kN: </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="puText" style= "width:100%;"  class=" form-control marginBottom"  >'
	   +'</div>' 
	   +'</div>'
	   
	     +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom"> Essentricity e (mm) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="Essen" style= 10px;width:100%;" placeholder="" class=" form-control marginBottom" >'
	   +'</div>'	     
	   +'</div>'
	   
	     +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Size of column b (mm) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="columnSize" style= 10px;width:100%;" placeholder="" class=" form-control marginBottom" >'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +"<label class='labelstyle marginBottom'> D (mm) : </label>"
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="D" style= 10px;width:100%;" placeholder="" class=" form-control marginBottom" >'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +"<label class='labelstyle marginBottom'>Effective Cover d'(mm) : </label>"
	   +'</div>'
	   +'<div class="col-sm-3">'
	   +'<input type="number" id="effectiveCover" style= 10px;width:100%;" placeholder="" class=" form-control marginBottom" >'
	   +'</div>'	     
	   
	   
	   +'<div class="col-sm-3" id="dLabel" hidden>'
	    +'<div class="col-sm-3">'
	     +'</div>'
       +'<label class="labelstyle spanMsg" >d =  <label id = "dTemp" class="labelstyle spanMsg ">'+d_val+'</label>   </label>'
//	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
	   +'</div>'
	   +'</div>'
	   +'</div>'
	 
	   
	
	   
	     
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete f<sub>ck</sub> (N/mm<sup>2</sup>) : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade" " style="height:auto; " >'
	   +'<option value="0">--- Select grade of concrete --- </option>'
	   +'<option value="10" >M10  </option>'
	   +'<option value="15" >M15  </option>'
	   +'<option value="20" >M20  </option>'
	   +'<option value="25" >M25  </option>'
	   +'<option value="30" >M30  </option>'
	   +'<option value="35" >M35  </option>'
	   +'<option value="40" >M40  </option>'
	   +'<option value="45" >M45  </option>'
	   +'<option value="50" >M50  </option>'
	   +'<option value="55" >M55  </option>'
	   +'<option value="60" >M60  </option>'
	   +'<option value="65" >M65  </option>'
	   +'<option value="70" >M70  </option>'
	   +'<option value="75" >M75  </option>'
	   +'<option value="80" >M80  </option>'		    	  
	   +'</select>'	  
	   +'</div>'
	   
	   
	   +'<div class="col-sm-3" id="concreteLabel" hidden>'
       +'<label class="labelstyle spanMsg " >&nbsp;f<sub>ck</sub> : <label id = "relTemp" class="labelstyle spanMsg ">'+conVal+'</label>   </label>'
//	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
	   +'</div>'
	   +'</div>'
	   	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Steel f<sub>y</sub> (N/mm<sup>2</sup>) : </label>'
	   +'</div>'	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade" " style="height:auto; " >'
	   +'<option value="0">--- Select grade of steel --- </option>'
	   +'<option value="250" >Fe250  </option>'
	   +'<option value="415" >Fe415  </option>'
	   +'<option value="500" >Fe500  </option>'	  
	   +'</select>'	   
	   +'</div>'
	   
	   
	    +'<div class="col-sm-3" id="steelLabel" hidden>'
       +'<label class="labelstyle spanMsg" >&nbsp;f<sub>y</sub> :<label id = "relTemp1" class="labelstyle spanMsg"> '+steelVal+' </label>   </label>'
//	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
	   +'</div>'
	   +'</div>'
	   

	   +'<div class="row">'
	   +'<div class="col-sm-3">'
	   +'</div>'
	   +'<div class="col-sm-8">'
	   +'<button type="button" style="padding: 5px;font-size: 16px; width:80%;margin-top:7px;"  class="btn btn-danger btnStyle" id="checkConfg"  data-toggle="modal" data-target="#myModal"  ><b>CHECK CONFIGURATION </b></button>'
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'	   
   
    $("#page1Div2").html(htm);

	$("#concreteGrade").change(function(){
		
		conVal = parseInt($("#concreteGrade").val());
		
          if(conVal<=0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select appropriate values");
    	  }else{
			$("#concreteLabel").prop("hidden",false);				
			$("#relTemp").text(conVal+" Mpa");
			$("#FootingA").text(conVal+" Mpa");
		  }        
	});
	
	$("#steelGrade").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		steelVal = parseInt($("#steelGrade").val());
		if(steelVal<=0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select appropriate values");
		}else{
		 
		 $("#steelLabel").prop("hidden",false);
		  $("#relTemp1").text(steelVal+"Mpa");
 		 
		 
		}
		
		
	});
	
	
	
	$("#effectiveCover").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		eCover_val = $("#effectiveCover").val();
		D_val = $("#D").val();
			d_val = (D_val - eCover_val);
		if(effectiveCover<=0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select appropriate values");
		}else{
		 
		 
		    $("#dLabel").prop("hidden",false);	
		   $("#dTemp").text(d_val+" mm");
 		 
		 
		}
		
		
	});
	

	
  
  $("#checkConfg").click(function(){
	
	pre = $("#presText").val();
	conVal = $("#concreteGrade").val();
	steelVal =$("#steelGrade").val();
	colSize = $("#columnSize").val();
	D_val = $("#D").val();
	pu_val = $("#puText").val();
	e_val = $("#Essen").val();
	eCover_val = $("#effectiveCover").val();
	d_val = (D_val - eCover_val);
	
	if(pre==""||conVal==0||steelVal==0||colSize==""||e_val ==""||eCover_val==""|| pu_val==""){
		
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Please enter the values");
			
	}else{
	
	pre = $("#presText").val();
	conVal = $("#concreteGrade").val();
	steelVal =$("#steelGrade").val();
	colSize = $("#columnSize").val(); //b value
	D_val = $("#D").val();
	pu_val = $("#puText").val();
	e_val = $("#Essen").val();
	eCover_val = $("#effectiveCover").val();
	
	var pucorr = pre*1.5;

	
	if(pre<=0||conVal==0||steelVal==0||colSize<=0||e_val<=0||eCover_val<=0)
	  {
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Provide the necessary values.");
	}else{
	  if(pu_val != pucorr){
	        $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter value of Design Load 1.5 X Pressure ");
	}else if(d_val<=0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter value of D greater than effective cover d' ");
		
	}else{
		Page1();
		ColumnAnim();
		$("#checkConfg").prop("disabled",true);
		$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Configured successfully!");
			
//		$("#checkConfg").prop("disabled",true);
	}
  }	
  }
});

   