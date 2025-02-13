
function ColumnAnim(){
	$('#page1Div1').html("");
	$('#page1Div1').removeAttr('width');
	$('#page1Div1').removeAttr('height');
	var w =670;
	var h = 620;

	if ($(window).width() < 500) {
		paper = new Raphael(document.getElementById('page1Div1'), '100%', '100%');
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('page1Div1'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

   var workingLoadValue = parseInt(pre);
//	console.log("workingLoadValue =  "+pre);
   
   var concreteValue =parseInt(conVal);
//   	console.log("concreteValue =  "+conVal);
   
   var steelValue =parseInt(steelVal);
//   	console.log("steelValue =  "+steelVal);
  
   var colSizeValue = parseInt(colSize);
//   	console.log("colSizeValue =  "+colSize);
   
   var dValue = parseInt(d_val);
   

   
   
   var x=100;
   var y=50;
  // footingDig1=paper.image("images/F_topView1preview.png", (x -30), (y - 100), 500, 300);
  
   
   
//   var P_val_text=paper.text((x+235), (y-90),"P = "+workingLoadValue).attr({'font-size':20,'stroke':'#0099ff'});
   var D_val_text=paper.text((x-30), (y+150),"D = "+D_val).attr({'font-size':20,'stroke':'#0099ff'});
   var d_val_text=paper.text((x+190), (y+150),"d = "+dValue).attr({'font-size':20,'stroke':'#0099ff'});
   var b_val_text=paper.text((x+80), (y+300),"b = "+colSizeValue).attr({'font-size':20,'stroke':'#0099ff'});
    var d_val_text1 =paper.text((x+175), (y+40),"d' = "+ eCover_val).attr({'font-size':20,'stroke':'#0099ff'});
    var d_val_text1 =paper.text((x+175), (y+260),"d' = "+ eCover_val).attr({'font-size':20,'stroke':'#0099ff'});
    var text = paper.text((x+340), (y+20),"0.0035").attr({'font-size':15,'stroke':'#0099ff'});
  
   paper.rect((x+10), (y+30),130,250).attr({'stroke':'#000'});
   paper.rect((x+25), (y+50),100,10).attr({'stroke':'#000','fill':'#000'});
   paper.rect((x+25), (y+250),100,10).attr({'stroke':'#000','fill':'#000'});
   
   if(xuflg == 1){
	  var text = paper.text((x+250), (y+70),"Xu = " + xu).attr({'font-size':18,'stroke':'#0099ff'}); 
   }
   
     if(escflg == 1){
	
	  var text1 = paper.text((x+390), (y+100),esc).attr({'font-size':18,'stroke':'#0099ff'}); 
   }
   
     if(estflg == 1){
		 
	  var text2 = paper.text((x+280), (y+270), est).attr({'font-size':15,'stroke':'#0099ff'}); 
   }
   
   if(fscflg == 1){
	  paper.image("images/esc.png", (x + 50), (y + 350), 150, 150);  
   } 
   if(fstflg == 1){
	  
   paper.image("images/est.png", (x + 250), (y + 350), 150, 150);
   }
   
   react = paper.path('M' + (x + 380) + ' ' + (y + 30) + 'l -80 0 l 0 220 l -80 0  M')		
			.attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': '' }).toFront();
   reactl = paper.path('M' + (x + 380) + ' ' + (y + 30) + 'l -160  220   M')		
			.attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': '' }).toFront();			
   
}

function columnLast(){
	
	
	$('#page1Div1').html("");
	$('#page1Div1').removeAttr('width');
	$('#page1Div1').removeAttr('height');
	var w =670;
	var h = 620;

	if ($(window).width() < 500) {
		paper = new Raphael(document.getElementById('page1Div1'), '100%', '100%');
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('page1Div1'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	
	
	   var x=150;
    var y=50;
  // footingDig1=paper.image("images/F_topView1preview.png", (x -30), (y - 100), 500, 300);
  
   
   
      var workingLoadValue = parseInt(pre);
//	console.log("workingLoadValue =  "+pre);
   
   var concreteValue =parseInt(conVal);
//   	console.log("concreteValue =  "+conVal);
   
   var steelValue =parseInt(steelVal);
//   	console.log("steelValue =  "+steelVal);
  
   var colSizeValue = parseInt(colSize);
//   	console.log("colSizeValue =  "+colSize);
   
   var dValue = parseInt(d_val);
   
//   var P_val_text=paper.text((x+235), (y-90),"P = "+workingLoadValue).attr({'font-size':20,'stroke':'#0099ff'});
   var D_val_text=paper.text((x-30), (y+150),"D = "+D_val).attr({'font-size':20,'stroke':'#0099ff'});
   var d_val_text=paper.text((x+190), (y+150),"d = "+dValue).attr({'font-size':20,'stroke':'#0099ff'});
   var b_val_text=paper.text((x+80), (y+300),"b = "+colSizeValue).attr({'font-size':20,'stroke':'#0099ff'});
    var d_val_text1 =paper.text((x+175), (y+40),"d' = "+ eCover_val).attr({'font-size':20,'stroke':'#0099ff'});
    var d_val_text1 =paper.text((x+175), (y+260),"d' = "+ eCover_val).attr({'font-size':20,'stroke':'#0099ff'});
//    var text = paper.text((x+340), (y+20),"0.0035").attr({'font-size':15,'stroke':'#0099ff'});
  
   paper.rect((x+10), (y+30),130,250).attr({'stroke':'#000'});
   paper.rect((x+25), (y+50),100,10).attr({'stroke':'#000','fill':'#000'});
   paper.rect((x+25), (y+250),100,10).attr({'stroke':'#000','fill':'#000'});
	
}











