function coinCombo(n) {
  n *= 100;

  var coins = ["half-dollars", "quarters", "dimes", "nickels", "pennies"];

  var tally = [];

  if (n > 0) {
    if (n >= 50) {
      var half_dollars = Math.floor(n / 50);

      tally.push(half_dollars);
      n %= 50;
    } else {
      tally.push(0);
    }
    if (n >= 25) {
      var quarters = Math.floor(n / 25);
      tally.push(quarters);
      n %= 25;
    }else {
      tally.push(0);
    }
    if (n >= 10) {
      var dimes = Math.floor(n / 10);
      tally.push(dimes);
      n %= 10;
    }else {
      tally.push(0);
    }
    if (n >= 5) {
      var nickels = Math.floor(n / 5);
      tally.push(nickels);
      n %= 5;
    }else {
      tally.push(0);
    }
    if (n >= 1) {
      var pennies = Math.floor(n);

      tally.push(pennies);
      n = 0;
    }
  }

  var result = "Your coin combo is ";

  for (var i = 0; i <= 4; i++) {
    if(tally[i] > 0) {
      result += tally[i] + " " + coins[i] + ", ";
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
