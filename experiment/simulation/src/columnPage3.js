var asc ,ast, As;
var ASC,AST,AS
function page3(){
	var setpl1 = pu_val *Math.pow(10,3);
	var stepl2 =(D_val/2) ;
	stepl2 = parseFloat(stepl2);
	e_val = parseFloat(e_val);
	var stepll2  =  e_val+stepl2;
	stepll2 = parseFloat(stepll2);
	eCover_val = parseFloat(eCover_val);
	var  stepl3 = stepll2 - eCover_val;
	stepl3 = parseFloat(stepl3);
	var stepL = (stepl3*setpl1); //left side complt
	    stepL = parseFloat(stepL);
	          
	 var stepr0   = (0.42 * xu);
	 d_val = parseFloat(d_val);
	var stepr1 = ( d_val - stepr0);
	conVal = parseFloat(conVal);
	colSize = parseFloat(colSize);
	var stepr2 = (0.36*conVal*colSize*xu);
	stepr2 = parseFloat(stepr2);
	var stepr30 = (2*eCover_val);
	stepr30 = parseFloat(stepr30);
	D_val = parseFloat(D_val);
	var stepr3 = (D_val - stepr30);
	stepr3 = parseFloat(stepr3);
	var stepR = (strSteel*stepr3);
	stepR = parseFloat(stepR);
	var stepR1 = (stepr2*stepr1);
	  stepR1 = parseFloat(stepR1);
	var stepF = (stepL - stepR1);
	stepF = parseFloat(stepF);
	var asc1 = stepF/stepR;
	var asc = asc1.toFixed(4);
	asc = parseFloat(asc);
	console.log(asc+'asc value');
	
	var stept1 = (asc*strSteel);
	var stept2 = (stepr2 + stept1);
	var stepL1 = (setpl1 - stept2);
	var ast1 = stepL1/strSteel1;
	ast = ast1*(-1);
	ast = ast.toFixed(4);
	ast = parseFloat(ast);
	tempJson1.ast = ast;
	tempJson1.asc = asc;
	
	console.log(ast+'ast value');
	
	As = asc+ast;
	As = As.toFixed(2);
	tempJson1.as = As;
	array.push(tempJson1);
	MasterJson.reading = array;
	console.log(MasterJson);
	
			$("#page1Div2").html("");
			$('#page1Div1').html("");
			$("#centerText").html("Area of steel  in Compression and Tension Face");
	         page3htm =  '<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-2">'
		 			 +'</div>'
        			 +'<div class="col-sm-8" id = "page2">'
      			  	 +' <center><label class="labelstyle " > Area of steel to be provide at compression face = asc =  '+asc+' mm<sup>2</sup>  </label> </center>'
	  			   	 +'</div>'
      				 +'</div>'
      				
      				 + '<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-2">'
		 			 +'</div>'
        			 +'<div class="col-sm-8" id = "page2">'
      			  	 +' <center><label class="labelstyle " > Area of steel to be provide at tension face = ast =  '+ast+' mm<sup>2</sup>  </label> </center>'
	  			   	 +'</div>'
      				 +'</div>'
      				 
      				  + '<div  class="col-sm-12 marginBottom">'
		 			 +'<div class="col-sm-2">'
		 			 +'</div>'
        			 +'<div class="col-sm-8" id = "page2">'
      			  	 +' <center><label class="labelstyle " > Area of steel = As =  '+As+' mm<sup>2</sup>  </label> </center>'
	  			   	 +'</div>'
      				 +'</div>'
      				 
      				 
      				
      				
		$("#page1Div2").html(page3htm);
		var arrxu;
		
		if(steelVal == 250){
			for(i= 0;i<=8;i++){
				tempJson={};
				if(i==0){
					arrxu = xu - 10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
						tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
					
					
				}else if (i == 1){
					arrxu = arrxu - 10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
					
				
				}else if(i == 2){
					arrxu = xu+10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
						
						
				
				}else{
					arrxu = arrxu+10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
						
						
				}
				
				
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
	var setpl1 = pu_val *Math.pow(10,3);
	var stepl2 =(D_val/2) ;
	stepl2 = parseFloat(stepl2);
	e_val = parseFloat(e_val);
	var stepll2  =  e_val+stepl2;
	stepll2 = parseFloat(stepll2);
	eCover_val = parseFloat(eCover_val);
	var  stepl3 = stepll2 - eCover_val;
	stepl3 = parseFloat(stepl3);
	var stepL = (stepl3*setpl1); //left side complt
	    stepL = parseFloat(stepL);
	          
	 var stepr0   = (0.42 * arrxu);
	 d_val = parseFloat(d_val);
	var stepr1 = ( d_val - stepr0);
	conVal = parseFloat(conVal);
	colSize = parseFloat(colSize);
	var stepr2 = (0.36*conVal*colSize*arrxu);
	stepr2 = parseFloat(stepr2);
	var stepr30 = (2*eCover_val);
	stepr30 = parseFloat(stepr30);
	D_val = parseFloat(D_val);
	var stepr3 = (D_val - stepr30);
	stepr3 = parseFloat(stepr3);
	var stepR = (strSteel*stepr3);
	stepR = parseFloat(stepR);
	var stepR1 = (stepr2*stepr1);
	  stepR1 = parseFloat(stepR1);
	var stepF = (stepL - stepR1);
	stepF = parseFloat(stepF);
	var asc1 = stepF/stepR;
	var asc = asc1.toFixed(4);
	asc = parseFloat(asc);
	
	
	var stept1 = (asc*strSteel);
	var stept2 = (stepr2 + stept1);
	var stepL1 = (setpl1 - stept2);
	var ast1 = stepL1/strSteel1;
	ast = ast1*(-1);
	ast = ast.toFixed(4);
	ast = parseFloat(ast);
	tempJson.ast = ast;
	tempJson.asc = asc;
	
	
	
	As = asc+ast;
	As = As.toFixed(2)
	tempJson.as = As;
	array.push(tempJson);
	MasterJson.reading = array;
	console.log(MasterJson);		
				
			
			}
	}else if(steelVal == 415){
		
		for(i= 0;i<=8;i++){
				tempJson={};
				if(i==0){
					arrxu = xu - 10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
						tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
					
					
				}else if (i == 1){
					arrxu = arrxu - 10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
					
				
				}else if(i == 2){
					arrxu = xu+10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
						
						
				
				}else{
					arrxu = arrxu+10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
						
						
				}
				
				
				
			var x1,x3,y1,y3,y2;
			var xt1,yt1,yt3,xt3,yt2;
			
			if(esc >= 0.00144 && esc < 0.00163){
				x1 = 0.00144;
				xt1 = 0.00144;
				x3 = 0.00163;
				xt3 = 0.00163;
				y1 = 288.7;
				y3 = 306.7;
				yt1 = 288.7;
				yt3 = 306.7;
			}else if(esc >= 0.00163 && esc < 0.00192){
				x3 = 0.00192;
				x1 = 0.00163;
				y3 = 324.8;
				y1 = 306.7;
				xt3 = 0.00192;
				xt1 = 0.00163;
				yt3 = 324.8;
				yt1 = 306.7;
			}else if(esc >= 0.00192 && esc < 0.00241){
				x1 = 0.00192;
				x3 = 0.00241;
				y1 = 324.8;
				y3 = 342.8;
				xt1 = 0.00192;
				xt3 = 0.00241;
				yt1 = 324.8;
				yt3 = 342.8;
			}else if(esc >= 0.00241 && esc < 0.00276){
				x3 = 0.00276;
				x1 = 0.00241;
				y3 = 351.8;
				y1 = 342.8;
				xt3 = 0.00276;
				xt1 = 0.00241;
				yt3 = 351.8;
				yt1 = 342.8;
			}	else if(esc >= 0.00276 && esc < 0.00380){
				x1 = 0.00276;
				x3 = 0.00380;
				y1 = 351.8;
				y3 = 360.9;
				xt1 = 0.00276;
				xt3 = 0.00380;
				yt1 = 351.8;
				yt3 = 360.9;
			}		
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
	
	var setpl1 = pu_val *Math.pow(10,3);
	var stepl2 =(D_val/2) ;
	stepl2 = parseFloat(stepl2);
	e_val = parseFloat(e_val);
	var stepll2  =  e_val+stepl2;
	stepll2 = parseFloat(stepll2);
	eCover_val = parseFloat(eCover_val);
	var  stepl3 = stepll2 - eCover_val;
	stepl3 = parseFloat(stepl3);
	var stepL = (stepl3*setpl1); //left side complt
	    stepL = parseFloat(stepL);
	          
	 var stepr0   = (0.42 * arrxu);
	 d_val = parseFloat(d_val);
	var stepr1 = ( d_val - stepr0);
	conVal = parseFloat(conVal);
	colSize = parseFloat(colSize);
	var stepr2 = (0.36*conVal*colSize*arrxu);
	stepr2 = parseFloat(stepr2);
	var stepr30 = (2*eCover_val);
	stepr30 = parseFloat(stepr30);
	D_val = parseFloat(D_val);
	var stepr3 = (D_val - stepr30);
	stepr3 = parseFloat(stepr3);
	var stepR = (strSteel*stepr3);
	stepR = parseFloat(stepR);
	var stepR1 = (stepr2*stepr1);
	  stepR1 = parseFloat(stepR1);
	var stepF = (stepL - stepR1);
	stepF = parseFloat(stepF);
	var asc1 = stepF/stepR;
	var asc = asc1.toFixed(4);
	asc = parseFloat(asc);
	
	
	var stept1 = (asc*strSteel);
	var stept2 = (stepr2 + stept1);
	var stepL1 = (setpl1 - stept2);
	var ast1 = stepL1/strSteel1;
	ast = ast1*(-1);
	ast = ast.toFixed(4);
	ast = parseFloat(ast);
	tempJson.ast = ast;
	tempJson.asc = asc;
	
	
	
	As = asc+ast;
	As = As.toFixed(2)
	tempJson.as = As;
	array.push(tempJson);
	MasterJson.reading = array;
	console.log(MasterJson);
		
	}
	
	}else if (steelVal == 500){
		
		for(i= 0;i<=8;i++){
				tempJson={};
				if(i==0){
					arrxu = xu - 10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
						tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
					
					
				}else if (i == 1){
					arrxu = arrxu - 10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
					
				
				}else if(i == 2){
					arrxu = xu+10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
						
						
				
				}else{
					arrxu = arrxu+10;
					var esc1 = (0.0035*(arrxu-eCover_val))/arrxu;
					 esc = esc1.toFixed(6);
					var est1 = (0.0035*(d_val-arrxu))/arrxu;
					 est = est1.toFixed(6);
					 tempJson.xu = arrxu;
						tempJson.esc = esc;
						tempJson.est = est;
						
						
				}
				
				
				
			var x1,x3,y1,y3,y2;
			var xt1,yt1,yt3,xt3,yt2;
			
			if(esc >= 0.00174 && esc < 0.00195){
				x1 = 0.00174;
				xt1 = 0.00174;
				x3 = 0.00195;
				xt3 = 0.00195;
				y1 = 347.8;
				y3 = 369.6;
				yt1 = 347.8;
				yt3 = 369.6;
			}else if(esc >= 0.00195 && esc < 0.00226){
				x3 = 0.00226;
				x1 = 0.00195;
				y3 = 391.3;
				y1 = 369.6;
				xt3 = 0.00226;
				xt1 = 0.00195;
				yt3 = 391.3;
				yt1 = 369.6;
			}else if(esc >= 0.00226 && esc < 0.00277){
				x1 = 0.00226;
				x3 = 0.00277;
				y1 = 391.3;
				y3 = 413.0;
				xt1 = 0.00226;
				xt3 = 0.00277;
				yt1 = 391.3;
				yt3 = 413.0;
			}else if(esc >= 0.00277 && esc < 0.00312){
				x3 = 0.00312;
				x1 = 0.00277;
				y3 = 423.9;
				y1 = 413.0;
				xt3 = 0.00312;
				xt1 = 0.00277;
				yt3 = 423.9;
				yt1 = 413.0;
			}	else if(esc >= 0.00312 && esc < 0.00417){
				x1 = 0.00312;
				x3 = 0.00417;
				y1 = 423.9;
				y3 = 434.8;
				xt1 = 0.00312;
				xt3 = 0.00417;
				yt1 = 423.9;
				yt3 = 434.8;
			}		
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
	
	var setpl1 = pu_val *Math.pow(10,3);
	var stepl2 =(D_val/2) ;
	stepl2 = parseFloat(stepl2);
	e_val = parseFloat(e_val);
	var stepll2  =  e_val+stepl2;
	stepll2 = parseFloat(stepll2);
	eCover_val = parseFloat(eCover_val);
	var  stepl3 = stepll2 - eCover_val;
	stepl3 = parseFloat(stepl3);
	var stepL = (stepl3*setpl1); //left side complt
	    stepL = parseFloat(stepL);
	          
	 var stepr0   = (0.42 * arrxu);
	 d_val = parseFloat(d_val);
	var stepr1 = ( d_val - stepr0);
	conVal = parseFloat(conVal);
	colSize = parseFloat(colSize);
	var stepr2 = (0.36*conVal*colSize*arrxu);
	stepr2 = parseFloat(stepr2);
	var stepr30 = (2*eCover_val);
	stepr30 = parseFloat(stepr30);
	D_val = parseFloat(D_val);
	var stepr3 = (D_val - stepr30);
	stepr3 = parseFloat(stepr3);
	var stepR = (strSteel*stepr3);
	stepR = parseFloat(stepR);
	var stepR1 = (stepr2*stepr1);
	  stepR1 = parseFloat(stepR1);
	var stepF = (stepL - stepR1);
	stepF = parseFloat(stepF);
	var asc1 = stepF/stepR;
	var asc = asc1.toFixed(4);
	asc = parseFloat(asc);
	
	
	var stept1 = (asc*strSteel);
	var stept2 = (stepr2 + stept1);
	var stepL1 = (setpl1 - stept2);
	var ast1 = stepL1/strSteel1;
	ast = ast1*(-1);
	ast = ast.toFixed(4);
	ast = parseFloat(ast);
	tempJson.ast = ast;
	tempJson.asc = asc;
	
	
	
	As = asc+ast;
	As = As.toFixed(2)
	tempJson.as = As;
	array.push(tempJson);
	MasterJson.reading = array;
	console.log(MasterJson);
		
	}
		
		
		
		
		
		
	}
	
	var sortedData = MasterJson.reading.sort(function(a, b) {  
    return a.as - b.as; // Change this to the desired property for sorting  
 }); 
 
  	tableMainDiv =	'<div class="">'
			        + '<table class=" table table-bordered "   style ="overflow-x: auto;height: 200px;margin-top: 10px;">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Trial.No</center></th>'
					+ '  <th><center>Xu</center></th>'
					+ '   <th><center>Asc (mm<sup>2</sup>)</center></th>'
					+ '  <th><center>Ast (mm<sup>2</sup>)</center> </th>'
					+ '  <th><center>As (mm<sup>2</sup>)</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
				for(i=0,p=1;i<MasterJson.reading.length;i++,p++)
						{
						tableMainDiv +='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+MasterJson.reading[i].xu+'</td>'
							+'      <td>'+MasterJson.reading[i].asc+'</td>'
							+'      <td>'+MasterJson.reading[i].ast+'</td>'
							+'      <td>'+MasterJson.reading[i].as+'</td>'					
				
							+'    </tr>'
						}
        		
        			tableMainDiv +='    </tbody>'
        			tableMainDiv +='    </table>'
//        			tableMainDiv +='    <tr>'

        
       
        
        $("#page1Div1").html(tableMainDiv);
        
         ASC = MasterJson.reading[0].asc;
         AST = MasterJson.reading[0].ast;
         AS = MasterJson.reading[0].as;
        page3htm1 =	  '<div class="col-sm-12" >'
      			  	 +' <center><label class="labelstyle " style = "color:#913abd; font-size: 20px;"  > Choose the trail with minimum value of As = '+AS+'</label> </center>'
	  			   	 +'</div>'
	  			   	 
	  			   	  +'<div class="col-sm-12" >'
      			  	 +' <center><label class="labelstyle " style = "color:#913abd; font-size: 20px;"  > Asc = '+ASC+' mm<sup>2</sup> </label> </center>'
	  			   	 +'</div>'
	  			   	 
	  			   	 +'<div class="col-sm-12" >'
      			  	 +' <center><label class="labelstyle " style = "color:#913abd; font-size: 20px;"  >  Ast = '+AST+' mm<sup>2</sup> </label> </center>'
	  			   	 +'</div>'
	  			   	 
	  			   	+'<div class="row">'
	                +'<div class="col-sm-3">'
	   				+'</div>'
	  			   +'<div class="col-sm-8">'
	  			   +'<button type="button" style="padding: 5px;font-size: 16px; width:80%;margin-top:7px;"  class="btn btn-danger btnStyle" id="page4Next"><b>Next Level</b></button>'
	 			    +'</div>'
	 			    +'<div class="col-sm-1">'
	  			   +'</div>'
	  			   +'</div>'
	  			   	 
	  			   	 
		
		
		
		$("#page1Div2").append(page3htm1);
		
		
		 $("#page4Next").click(function(){
                      page4();
					 columnLast();
				}); 
				
	
}