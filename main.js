$(document).ready( function(){
  var rps = ["Rock", "Paper", "Scissors"]
  var my_score = 0
  var score = 0
  //-----------------------------------------------
  $('#rock').on('click', function(){
    var random = rps[Math.floor(Math.random()*rps.length)]

    if (random ==='Paper'){
      $('#choices').html('Computer chose paper')
      $('#choices').css("color", "white")
      $('#results').html('You lost!')
      $('#score').html("Computer's Score:" + score++)
      $('#score').css("color", "rgb(230, 154, 227)")
    }
    else if (random ==='Rock'){
      $('#choices').html('Computer chose rock')
      $('#results').html("It's a tie!")
    }
    else if (random ==='Scissors'){
      $('#choices').html('Computer chose scissors')
      $('#results').html('You are a winner!!')
      $('#results').css("color", "rgb(208, 37, 174)")
      $('#my_score').html("Your Score:" + my_score++)
      $('#my_score').css("color", "rgb(230, 154, 227)")
    }
  })
      
  $('#paper').on('click', function(){
    var random = rps[Math.floor(Math.random()*rps.length)]

    if (random ==='Scissors'){
      $('#choices').html('Computer chose scissors')
      $('#result').html('You are a loser!')
      $('#score').html("Computer's Score:" + score++)
    }
    else if (random === 'Paper'){
      $('#choices').html('The computer chose paper')
      $('#results').html('You tied!')
    }
    else if (random ==='Rock'){
      $('#choices').html('The computer chose Rock')
      $('#results').html("It's your lucky day, you win!")
      $('#results').css("color", "rgb(208, 37, 174)")
      $('#my_score').html('Your Score:' + my_score++)
    }
  })
     
  $('#scissors').on('click', function(){
    var random = rps[Math.floor(Math.random()*rps.length)]

    if (random ==='Rock'){
      $('#choices').html('Computer chose rock')
      $('#result').html('You are a loser!')
      $('#score').html("Computer's Score:" + score++)
    }
    else if (random === 'Scissors'){
      $('#choices').html('The computer chose scissors')
      $('#results').html('You tied!')
    }
    else if (random ==='Paper'){
      $('#choices').html('The computer chose paper')
      $('#results').html("It's your lucky day, you win!")
      $('#my_score').html('Your Score:' + my_score++)
    }
  })
})