    //variable declartion
	  var Interval;
   	var Interval1;
   	var Interval2;
   	var    chopperX;
   	var    chopperY;
    var a;
    var chop = $('.heli');
    $('.popupdiv').slideDown(1000);
 
 //function declartion
	function fly(){
		
		chop.animate({top :'-=25px' ,left :'+=25px'},200,CollisonCheck);
          
    }

function down()
	{
		
		
		chop.animate({top:'+=25px',left :'+=25px'},200,CollisonCheck);
    
}

function CollisonCheck()
{
      var tp =$(this).offset().top;
      var lft = $(this).offset().left;
       if (((tp>=365) && (tp<=610)) && ((lft>=241) && (lft<=370)))
         {
          stop_game();

      }else if (((tp>=28) && (tp<=280)) && ((lft>=391) && (lft<=515)))
         {
        stop_game();
        
        }else if (((tp>=224) && (tp<=474)) && ((lft>=629) && (lft<=753)))
        {
          stop_game();
        }else if (((tp>=60) && (tp<=311)) && ((lft>=938) && (lft<=1067)))
        {
          stop_game();
        }else if (((tp>=369) && (tp<=620)) && ((lft>=992) && (lft<=1119)))
        {
           stop_game();
        }else if (((tp>=189) && (tp<=440)) && ((lft>=1210) && (lft<=1326)))
        {
          stop_game();
        }else if ((tp ==0) || (tp ==625))
        {
          stop_game();
        }else if (lft>=1350)
        {
          win_game();
        }
     
     
     
}

function stop_game()
{
        $('.crash').slideDown(1000);
        
       
        $('#yes').click(function(){$('.crash').fadeOut(1000);window.location = "game.html"});
        $('#no').click(function(){window.close();})
        $fx.off = true;
}

function win_game()
{
  $('.win').slideDown(1000);
  $fx.off = true;

}
	$( document)
      
      .keypress(function() {
         $('.popupdiv').slideUp(1000);
         a= true;
      })
      .mousedown(function()
       {

     if(a)
     {
      Interval2 =setInterval(fly,200);
      clearInterval(Interval1);
        }
        
       })
      .mouseup(function() 
      {
           if(a)
            {
            clearInterval(Interval2);
            Interval1 = setInterval(down,200);
             } 
      }) 