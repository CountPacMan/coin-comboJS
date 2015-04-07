function coinCombo(n) {
  n *= 100;

  // var coins = ["half-dollars", "quarters", "dimes", "nickels", "pennies"];

  var tally = [];

  if (n > 0) {
    if (n >= 50) {
      var half_dollars = Math.floor(n / 50);
      if (half_dollars === 1) {
        tally.push("1 half-dollar");
      } else if (half_dollars > 1) {
        tally.push(half_dollars + " half-dollars");
      } else {
        tally.push(0);
      }
      n %= 50;
    } else {
      tally.push(0);
    }

    if (n >= 25) {
      var quarters = Math.floor(n / 25);
      if (quarters === 1) {
        tally.push("1 quarter");
      } else if (quarters > 1) {
        tally.push(quarters + " quarters");
      } else {
        tally.push(0);
      }
      n %= 25;
    } else {
      tally.push(0);
    }

    if (n >= 10) {
      var dimes = Math.floor(n / 10);
      if (dimes === 1) {
        tally.push("1 dime");
      } else if (dimes > 1) {
        tally.push(dimes + " dimes");
      } else {
        tally.push(0);
      }
      n %= 10;
    } else {
      tally.push(0);
    }

    if (n >= 5) {
      var nickels = Math.floor(n / 5);
      if (nickels === 1) {
        tally.push("1 nickel");
      } else if (nickels > 1) {
        tally.push(nickels + " nickels");
      } else {
        tally.push(0);
      }
      n %= 5;
    } else {
      tally.push(0);
    }

    if (n >= 1) {
      var pennies = Math.floor(n);
      if (pennies === 1) {
        tally.push("1 penny");
      } else if (pennies > 1) {
        tally.push(pennies + " pennies");
      } else {
        tally.push(0);
      }
      n = 0;
    }
  }

  var result = "Your coin combo is ";

  for (var i = 0; i <= 4; i++) {
    if(tally[i] !== 0) {
      result += tally[i] + ", ";
    }
  }

  result = result.substring(0, result.length - 2);
  return result;
};

$(document).ready(function() {
  $("#converter").submit(function(event) {
    var input = $("#input").val();
    var n = parseFloat(input);

    var result = coinCombo(n);
    $("#result").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
