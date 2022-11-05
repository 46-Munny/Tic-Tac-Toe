
var a1=["first","second","third"];
var a2=["first","fourth","seventh"];
var a3=["first","fifth","ninth"];
var a4=["fourth","fifth","sixth"];
var a5=["second","fifth","eight"];
var a6=["third","fifth","seventh"];
var a7=["seventh","eight","ninth"];
var a8=["third","sixth","seventh"];
var a=[];
var c1=0;
var c2=0;
var c3=0;
var c4=0;
var c5=0;
var c6=0;
var c7=0;
var c8=0;
var a=[];
var userClickedPattern=[];

$(".p1").click(function(){
  $(".p1").addClass("pressed");
  setTimeout(function() {
    $(".p1").removeClass("pressed");
  }, 100);
player1()
});


function player1()
{
  $(".btn").click(function(){
    let pos=$(this).attr("id");
    $(this).addClass("pressed");
    $(this).html("<i class='far fa-circle fa-5x' style='margin: 10px 8px;'></i>");
    setTimeout(function() {
    $(".btn").removeClass("pressed");
    }, 100);

    matching1(pos);
      throw "game end";
  });

}


$(".p2").click(function(){
  $(".p2").addClass("pressed");
  setTimeout(function() {
    $(".p2").removeClass("pressed");
  }, 100);
player2();
});


function player2()
{
  $(".btn").click(function(){
    $(this).addClass("pressed");
    $(this).html("<i class='fas fa-expand-arrows-alt fa-5x' style='margin: 11px 15px;'></i> ");
    setTimeout(function() {
    $(".btn").removeClass("pressed");
    }, 100);
  });
}


function matching1(position)
{
  let i,j;
  for(i=0;i<3;i++)
  {
    if(a1[i]===position)
    {
      c1=c1+1;
    }
  }

  for(i=0;i<3;i++)
  {
    if(a2[i]===position)
    {
      c2=c2+1;
    }
  }

  for(i=0;i<3;i++)
  {
    if(a3[i]===position)
    {
      c3=c3+1;
    }
  }

  for(i=0;i<3;i++)
  {
    if(a4[i]===position)
    {
      c4=c4+1;
    }
  }

  for(i=0;i<3;i++)
  {
    if(a5[i]===position)
    {
      c5=c5+1;
    }
  }

  for(i=0;i<3;i++)
  {
    if(a6[i]===position)
    {
      c6=c6+1;
    }
  }

  for(i=0;i<3;i++)
  {
    if(a7[i]===position)
    {
      c7=c7+1;
    }
  }

  for(i=0;i<3;i++)
  {
    if(a8[i]===position)
    {
      c8=c8+1;
    }
  }


  if(c1===3||c2===3||c3===3||c4===3||c5===3||c6===3||c7===3||c8===3)
  {
    $(".p1").html("Player1 Win!");
  }
}
