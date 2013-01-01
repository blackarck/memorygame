/*Code for Memory Game 
 * Developed by Vivek Sharma 
 * 25-Dec-2012
 * This is the main file that governs the working of the game.
 * www.blackarc.netii.net
 */

//Main objects
var canvas;
var stage;
var imageContainer;
var boardContainer;

//Main Images
var splashBmp;
var bkgBmp;
var	splashBmp;
var creditScrbmp;
var instrbmp;
var clrbtnbmp;
var enterbtnbmp;
var gameoverbmp;
var lifebmp1,lifebmp2,lifebmp3;
var pressEntrarray=new Array();
var entrBtnsBmp=new Array();
var showBtnsBmp=new Array();
var typeControl=false;

var tkr = new Object;

//scores
var manqtr=1;
var playerScore; //The main player score
var scoreText;
var instrText;
var gameIntrTxt;
var showLogin2;
var showLogin1;
var pressText;
var seekInputtxt;
var numShown=" ";
var numEnter;

var totScore;
var diffLevel=3;
var difflevelCount=1;
var life=1;
var complFlag=0;

//preloader
var preloader;
var manifest;
var totalLoaded = 0;

// TitleView, which will hold several graphics within in order to display them together (like a Flash DisplayObjectContainer)
var TitleView = new createjs.Container();

function main(){
	 //alert("Main function");
	canvas = document.getElementById('myCanvas');
	
    stage =  new createjs.Stage(canvas);
    imageContainer = new createjs.Container(); 
    boardContainer = new createjs.Container();
    stage.addChild(imageContainer);
    stage.mouseEventsEnabled = true;
    stage.enableMouseOver();
    
    manifest = [
                {id:"bkg", src:"images/bkg1.png"},
                {id:"creditScr",src:"images/creditScr.png"},
                {id:"instr",src:"images/instrimg.png"},
                {id:"splash",src:"images/splashImg.png"},
                {id:"v0",src:"images/clImg0.png"},
                {id:"v1",src:"images/clImg1.png"},
                {id:"v2",src:"images/clImg2.png"},
                {id:"v3",src:"images/clImg3.png"},
                {id:"v4",src:"images/clImg4.png"},
                {id:"v5",src:"images/clImg5.png"},
                {id:"v6",src:"images/clImg6.png"},
                {id:"v7",src:"images/clImg7.png"},
                {id:"v8",src:"images/clImg8.png"},
                {id:"v9",src:"images/clImg9.png"},
                {id:"v20",src:"images/img0.png"},
                {id:"v21",src:"images/img1.png"},
                {id:"v22",src:"images/img2.png"},
                {id:"v23",src:"images/img3.png"},
                {id:"v24",src:"images/img4.png"},
                {id:"v25",src:"images/img5.png"},
                {id:"v26",src:"images/img6.png"},
                {id:"v27",src:"images/img7.png"},
                {id:"v28",src:"images/img8.png"},
                {id:"v29",src:"images/img9.png"},
                {id:"life",src:"images/life.png"},
                {id:"clrbtn",src:"images/clrbtn.png"},
                {id:"click",src:"sounds/click.ogg"},
                {id:"correct",src:"sounds/correct.wav"},
                {id:"game_over",src:"images/gameover.png"},
                {id:"gamestart",src:"sounds/gamestart.ogg"},
                {id:"incorrect",src:"sounds/incorrect.wav"},
                {id:"slide",src:"sounds/slide.ogg"},
                {id:"gameover",src:"sounds/game_over.ogg"},
                {id:"playbtn",src:"images/playbtn.png"},
                {id:"creditbtn",src:"images/creditbtn.png"},
                {id:"enterbtn",src:"images/enterbtn.png"}
               ];    

      
       loaderText = new createjs.Text('0', 'bold 20px DFKai-SB', '#333300');		
	   loaderText.x=250;
	   loaderText.y=50;
	  
	  
    preloader = new createjs.PreloadJS();
    preloader.installPlugin(createjs.SoundJS);
    preloader.onProgress = handleProgress;
    preloader.onComplete = handleComplete;
    preloader.loadManifest(manifest);

   
    imageContainer.addChild(loaderText);
    /* Ticker */
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addListener(stage);
     
}//end of main

function handleProgress(event){
	//do nothing for now
	//do nothing for now
	 var perc = Math.floor(preloader.progress*100);
  //	createjs.Tween.get(loaderbmp, {loop:true}).to({rotation:360}, 1000, createjs.Ease.linear  );
	   //loaderText.text=""; 
	   loaderText.text= "Loading ..." + perc;
	   stage.update();
}

function handleComplete(event){
	var bkgImg = preloader.getResult("bkg");
    var creditScrImg = preloader.getResult("creditScr");
    var splashImg= preloader.getResult("splash"); //The losing popup
    var instrimg = preloader.getResult("instr");
    var clrbtnimg =preloader.getResult("clrbtn");
    var enterbtnimg=preloader.getResult("enterbtn");
    var lifeimg = preloader.getResult("life");
    var gameoverimg=preloader.getResult("game_over");
    var playbtnimg=preloader.getResult("playbtn");
    var creditbtnimg=preloader.getResult("creditbtn");
    //create enter buttons
 
  //  for(var i=0;i<=9;i++){
    //	entrBtnsImg[i]=preloader.getResult("v"+i);
  //  }
    var vimg0=preloader.getResult("v0");
    var vimg1=preloader.getResult("v1");
    var vimg2=preloader.getResult("v2");
    var vimg3=preloader.getResult("v3");
    var vimg4=preloader.getResult("v4");
    var vimg5=preloader.getResult("v5");
    var vimg6=preloader.getResult("v6");
    var vimg7=preloader.getResult("v7");
    var vimg8=preloader.getResult("v8");
    var vimg9=preloader.getResult("v9");
    var vimg20=preloader.getResult("v20");
    var vimg21=preloader.getResult("v21");
    var vimg22=preloader.getResult("v22");
    var vimg23=preloader.getResult("v23");
    var vimg24=preloader.getResult("v24");
    var vimg25=preloader.getResult("v25");
    var vimg26=preloader.getResult("v26");
    var vimg27=preloader.getResult("v27");
    var vimg28=preloader.getResult("v28");
    var vimg29=preloader.getResult("v29");
    
   
   
	entrBtnsBmp[0]=new createjs.Bitmap(vimg0.src);
	entrBtnsBmp[1]=new createjs.Bitmap(vimg1.src);
	entrBtnsBmp[2]=new createjs.Bitmap(vimg2.src);
	entrBtnsBmp[3]=new createjs.Bitmap(vimg3.src);
	entrBtnsBmp[4]=new createjs.Bitmap(vimg4.src);
	entrBtnsBmp[5]=new createjs.Bitmap(vimg5.src);
	entrBtnsBmp[6]=new createjs.Bitmap(vimg6.src);
	entrBtnsBmp[7]=new createjs.Bitmap(vimg7.src);
	entrBtnsBmp[8]=new createjs.Bitmap(vimg8.src);
	entrBtnsBmp[9]=new createjs.Bitmap(vimg9.src);
	
	showBtnsBmp[0]=new createjs.Bitmap(vimg20.src);
	showBtnsBmp[1]=new createjs.Bitmap(vimg21.src);
	showBtnsBmp[2]=new createjs.Bitmap(vimg22.src);
	showBtnsBmp[3]=new createjs.Bitmap(vimg23.src);
	showBtnsBmp[4]=new createjs.Bitmap(vimg24.src);
	showBtnsBmp[5]=new createjs.Bitmap(vimg25.src);
	showBtnsBmp[6]=new createjs.Bitmap(vimg26.src);
	showBtnsBmp[7]=new createjs.Bitmap(vimg27.src);
	showBtnsBmp[8]=new createjs.Bitmap(vimg28.src);
	showBtnsBmp[9]=new createjs.Bitmap(vimg29.src);
	
    creditScrbmp = new createjs.Bitmap(creditScrImg.src);
    lifebmp1=new createjs.Bitmap(lifeimg.src);
    lifebmp2=new createjs.Bitmap(lifeimg.src);
    lifebmp3=new createjs.Bitmap(lifeimg.src);
    bkgBmp = new createjs.Bitmap(bkgImg.src); 
    instrbmp=new createjs.Bitmap(instrimg.src);
    clrbtnbmp=new createjs.Bitmap(clrbtnimg.src);
    enterbtnbmp=new createjs.Bitmap(enterbtnimg.src);
    gameoverbmp = new createjs.Bitmap(gameoverimg.src);
    showLogin1 =  new createjs.Bitmap(playbtnimg.src);
	showLogin2 = new createjs.Bitmap(creditbtnimg.src);
    	
    
    //splash screen
    splashBmp = new createjs.Bitmap(splashImg.src);
    splashBmp.x= 300 - splashBmp.image.width/2;
    splashBmp.y= 225 - splashBmp.image.height/2;
    
    //player score
    playerScore = new createjs.Text('0', 'bold 20px Arial', '#660000');
    scoreText =  new createjs.Text('Score ', 'bold 20px Arial', '#660000');
    pressText =  new createjs.Text('', 'bold 20px Arial', '#660000');
    instrText =  new createjs.Text('Welcome ', 'bold 15px Arial', '#660000');
    seekInputtxt = new createjs.Text('Enter what you remember !!', 'bold 15px Arial', '#660000');
    var strgameTxt="Random numbers will come \non screens and will dissapear. \nRemember and select the correct \nnumbers in increasing order. \n\n\n        Tap to start. ";
    gameIntrTxt  =  new createjs.Text(strgameTxt, 'bold 15px Arial', '#660000');
    imageContainer.addChild(splashBmp);
    createjs.SoundJS.play("gamestart", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
    createjs.Tween.get(splashBmp).wait(1000).to({y:-320}, 500).call(gameStart);
}


function gameStart(){
	imageContainer.removeAllChildren();
	bkgBmp.x=0;
	bkgBmp.y=800;
	imageContainer.addChild(bkgBmp);
	createjs.SoundJS.play("slide", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	createjs.Tween.get(bkgBmp).to({y:0}, 500).call(showLogin);
	
}//end of gameStart

function showLogin(){
	//showLogin1 = new createjs.Text('Login to Facebook', 'bold 20px Arial', '#5CB8E6');
	//showLogin2 = new createjs.Text('or play as Guest', 'bold 20px Arial', '#5CB8E6');
	//imageContainer.removeAllChildren();
	showLogin1.x=700;
	showLogin2.x=800;
	showLogin1.y=100;
	showLogin2.y=160;;
	imageContainer.addChild(showLogin1);
	imageContainer.addChild(showLogin2);
	createjs.Tween.get(showLogin1).to({x:200}, 500);
	createjs.Tween.get(showLogin2).to({x:200}, 600);
	showLogin1.onPress= gueslog ;
	showLogin2.onPress=creditPress;
	
}//end of showLogin

function facebookLog(){	
	//console.log("facebook ");
}//end of facebook login;

function gueslog(){
	//console.log("Guest log");
	createjs.SoundJS.play("click", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	createjs.SoundJS.play("slide", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	instrText.text = "Welcome Guest";
	createjs.Tween.get(showLogin1).to({x:-200}, 500);
	createjs.Tween.get(showLogin2).to({x:-210}, 600).call(startBtnPress);
	 
}//end of guestlog

function creditPress(){
	createjs.SoundJS.play("click", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	imageContainer.removeAllChildren();
	creditScrbmp.x= 300 - creditScrbmp.image.width/2;
	creditScrbmp.y=800;
	createjs.SoundJS.play("slide", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	createjs.Tween.get(creditScrbmp).to({y:0}, 600); 
	imageContainer.addChild(creditScrbmp);
	creditScrbmp.onPress=gameStart;
}//credit button press

function startBtnPress(){
	
	imageContainer.removeChild(showLogin1,showLogin2);
	boardContainer.x=0;
	boardContainer.y=0;
	imageContainer.addChild(boardContainer);
	 showInstr();
	//stopnshow();
}//start button press event

function showInstr(){
	boardContainer.removeAllChildren();
	instrText.x=700;
	instrText.y=10;
	boardContainer.addChild(instrText);
	createjs.Tween.get(instrText).to({x:450}, 600); 
	boardContainer.addChild(instrbmp,gameIntrTxt);
	//positiong the instruction text image
	var newx = 0;
	instrbmp.x = 700;
	gameIntrTxt.x = 700;
	newx = 300 - instrbmp.image.width/2;
	instrbmp.y = 225 - instrbmp.image.height/2;
	gameIntrTxt.y = instrbmp.y + 50;
	createjs.Tween.get(instrbmp).to({x:newx}, 600);
	newx = newx + 80;
	createjs.Tween.get(gameIntrTxt).to({x:newx}, 600);
	instrbmp.onPress=removeInstr;
}

function removeInstr(){
	createjs.SoundJS.play("slide", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	createjs.Tween.get(gameIntrTxt).to({x:-500}, 600);
	createjs.Tween.get(instrbmp).to({x:-500}, 600).call(callMenu);
}

function callMenu(){
	boardContainer.removeChild(instrbmp,gameIntrTxt);
	boardContainer.addChild(pressText,clrbtnbmp,enterbtnbmp);
	pressText.x=200;
	pressText.y=330;
	clrbtnbmp.x=300;
	clrbtnbmp.y=345;
	enterbtnbmp.x=180;
	enterbtnbmp.y=345;
	diffLevel=3;
	difflevelCount=1;
	life=3;
	pressEntrarray=[
	                pressEntr0,
	                pressEntr1,
	                pressEntr2,
	                pressEntr3,
	                pressEntr4,
	                pressEntr5,
	                pressEntr6,
	                pressEntr7,
	                pressEntr8,
	                pressEntr9];
	for(var i=0;i<=9;i++){
	boardContainer.addChild(entrBtnsBmp[i]);
	entrBtnsBmp[i].x=15 + i*57;
	entrBtnsBmp[i].y=395;
	entrBtnsBmp[i].onPress=pressEntrarray[i];
	entrBtnsBmp[i].alpha=.3;
	}
	enterbtnbmp.onPress=sendText;
	clrbtnbmp.onPress=clearText;
	//init score
	 initScore();
	 //init life;
	 initLife();
	 
	 createjs.Ticker.addListener(tkr, false);
	 tkr.tick = gameLoop;
	// gameLoop();
	    
}

function pressAlpha(){
	for(var i=0;i<=9;i++){
		entrBtnsBmp[i].alpha=.3;
		}	
}

function pressAlphaOff(){
	for(var i=0;i<=9;i++){
		entrBtnsBmp[i].alpha=1;
		}	
}

function sendText(){
	boardContainer.removeChild(seekInputtxt);
	pressAlpha();
	typeControl=false;
	//do acheck to ensure correct text was entered
    //console.log("Pressed text " +pressText.text + " Showed text " + numShown);
	if(pressText.text!=""){
	if (pressText.text==numShown){
	   //answer was correct ;
	   correctans();
	}else{
	   //answer was incorrect ;
	    inCorrectans();
    }
	}
	pressText.text="";
	createjs.SoundJS.play("click", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
}

function correctans(){
	playerScore.text=parseInt(playerScore.text)+1;
	seekInputtxt.text="That answer was correct.";
	numShown="";
	createjs.SoundJS.play("correct", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	//console.log("Answer was correct ");
	seekInputtxt.x=200;
	seekInputtxt.y=200;
	boardContainer.addChild(seekInputtxt);
	//increase difficult level
	diffLevel++;
	starGameLoop();
	
}

function starGameLoop(){
	 createjs.Ticker.addListener(tkr, false);
	 tkr.tick = gameLoop;
}

function inCorrectans(){
	life--;
	createjs.SoundJS.play("incorrect", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	seekInputtxt.text="That answer was incorrect correct answer ." + numShown;
	seekInputtxt.x=150;
	seekInputtxt.y=200;
	boardContainer.addChild(seekInputtxt);
	numShown="";
	
	if(life==0){
		createjs.Ticker.removeListener(tkr);
		numShown="";
		showGameover();
	} else{
	initLife();
	createjs.Tween.get(seekInputtxt).wait(1000).to({alpha:0},1000).call(starGameLoop);
	}
}

function typenum(inpnum){
  if(typeControl){
	createjs.SoundJS.play("click", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
	pressText.text=pressText.text + inpnum;
  }
}

function clearText(){
	pressText.text="";
	createjs.SoundJS.play("click", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
}
function pressEntr0(){
	typenum(0);
}
function pressEntr1(){
	typenum(1);
}
function pressEntr2(){
	typenum(2);
}
function pressEntr3(){
	typenum(3);
}
function pressEntr4(){
	typenum(4);
}
function pressEntr5(){
	typenum(5);
}
function pressEntr6(){
	typenum(6);
}
function pressEntr7(){
	typenum(7);
}
function pressEntr8(){
	typenum(8);
}
function pressEntr9(){
	typenum(9);
}

//put score on board
function initScore(){
	playerScore.x=90;
	playerScore.y=10;
	scoreText.y=10;
	scoreText.x=20;
	boardContainer.addChild(playerScore,scoreText);
}

//put life on board
function initLife(){
	boardContainer.removeChild(lifebmp3,lifebmp2,lifebmp1);
	lifebmp1.x=280;
	lifebmp1.y=10;
	lifebmp2.x=310;
	lifebmp2.y=10;
	lifebmp3.x=340;
	lifebmp3.y=10;
	 if(life==1){
	 boardContainer.addChild(lifebmp3);}
	 if(life==2){
		 boardContainer.addChild(lifebmp2,lifebmp3);}
	 if(life==3){
		 boardContainer.addChild(lifebmp1,lifebmp2,lifebmp3);}
 }

 function showGameover(){
	   seekInputtxt.text="Your score was " + playerScore.text;
		seekInputtxt.x=200;
		seekInputtxt.y=100;
		boardContainer.addChild(seekInputtxt);
		gameoverbmp.x=200;
		gameoverbmp.y=200;
		gameoverbmp.alpha=0;
		boardContainer.addChild(gameoverbmp);
		createjs.Tween.get(gameoverbmp).to({alpha:1},500).wait(3000).call(gameStart);
		createjs.SoundJS.play("gameover", createjs.SoundJS.INTERRUPT_LATE, 0, 0, false, 1);
 }
 
function gameLoop(){
	
	if(createjs.Ticker.getTicks()%50==0){
         var tempobj=new Array();
		 var randnum=0;
		 var randx=0;
		 var randy=0;
	 
		 //get random number from 0 to 9
		 randnum=genNumber("fornum");
		 //get random x from 0 to 600
		 randx=genNumber("forx");
		 //get random y from 30 to 300
		 randy=genNumber("fory");
		 
		  //console.log("randnum no " + randnum +  " randx " + randx + " randy " + randy + " difflevel " +  difflevelCount);
		   
		    
		    tempobj[difflevelCount-1]=new createjs.Bitmap(showBtnsBmp[randnum].image.src); 	
		    tempobj[difflevelCount-1].x=randx;
		    tempobj[difflevelCount-1].y=randy;
		    tempobj[difflevelCount-1].alpha=0;
		
		 complFlag=1;
		 
		 if(difflevelCount==diffLevel){
			 numShown= String.trim(numShown) + randnum.toString();
			 boardContainer.addChild(tempobj[difflevelCount-1]);
		 createjs.Tween.get(tempobj[difflevelCount-1]).wait(600).to({alpha:1}, 600).wait(2000)
		 				.to({alpha:0},600).call(completeShowText);
		 difflevelCount++;
		 }
		 if(difflevelCount<diffLevel){
			 numShown= String.trim(numShown) + randnum.toString();
			 boardContainer.addChild(tempobj[difflevelCount-1]);
	
			 createjs.Tween.get(tempobj[difflevelCount-1]).wait(600).to({alpha:1}, 600).wait(2000)
				.to({alpha:0},600); 
			 difflevelCount++;
		 }
		
	}//end of check for %4
}

function completeShowText(){
	
		 //console.log("Number shown was " + numShown);
		 seekInput();
}

function seekInput(){
	createjs.Ticker.removeListener(tkr);
	difflevelCount=1;
	seekInputtxt.text="Enter what you remember!!"
	seekInputtxt.x=200;
	seekInputtxt.y=200;
	boardContainer.addChild(seekInputtxt);
	typeControl=true;
	pressAlphaOff();
}


function genNumber(forWhat){
	var multiplyFact=10;
	var genNumber=0;
	if(forWhat=="fornum"){
		genNumber= Math.floor(Math.random()*multiplyFact)%10;
	}//for num
	if(forWhat=="forx")
	{
		multiplyFact=1000;
		var rands=Math.random();
		//console.log("calc for x " + rands);
		genNumber= Math.floor(rands*multiplyFact)%550;
	}//for x
	if(forWhat=="fory"){
		multiplyFact=1000;
		genNumber= Math.floor(Math.random()*multiplyFact)%300;
		if(genNumber<60){
			genNumber=genNumber+40;
		}//end for greater than 30
		if(genNumber>550){
			genNumber=genNumber-50;
		}
	}

	return genNumber;
}
//createjs.Ticker.removeListener(tkr);
//****************************************************************//













