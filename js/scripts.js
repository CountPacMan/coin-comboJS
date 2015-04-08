function coinCombo(n) {
  n *= 100;

  var tally = {"half-dollar": 0, "quarter": 0, "dime": 0, "nickel": 0, "penny": 0};

  while (n > 0) {
    if (n < 5) {
      tally["penny"]++;
      n--;
    } else if (n < 10) {
      tally["nickel"]++;
      n -= 5;
    } else if (n < 25) {
      tally["dime"]++;
      n -= 10;
    } else if (n < 50) {
      tally["quarter"]++;
      n -= 25;
    } else {
      tally["half-dollar"]++;
      n -= 50;
    }
  }

  var result = "Your coin combo is ";

  $.each(tally, function(key, value) {
    if (key === "penny" && value > 1) {
      key = "pennie";
    }
    if (value > 1) {
      result += value + " " + key + "s, ";
    } else if (value > 0) {
      result += value + " " + key + ", ";
    }
  });

  // remove extraneous comma and space at end
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
