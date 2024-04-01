    var x;
    var y;
    function add() {
      x = Number(document.getElementById("firstnumber").value);
      y = Number(document.getElementById("secondnumber").value);

      sum = x + y;

      document.getElementById("output").innerHTML = "Addition of two numbers is " + sum;
    }

    function subtract() {
      x = Number(document.getElementById("firstnumber").value);
      y = Number(document.getElementById("secondnumber").value);

      sub = x - y;
      document.getElementById("output").innerHTML = "Subtraction of two numbers is " + sub;
    }

    function multiply() {
      x = Number(document.getElementById("firstnumber").value);
      y = Number(document.getElementById("secondnumber").value);

      var multiply = x * y;

      document.getElementById("output").innerHTML =
        "Multiplication of two numbers is " + multiply;
    }

    function divide() {
      x = Number(document.getElementById("firstnumber").value);
      y = Number(document.getElementById("secondnumber").value);

      var division = x / y;

      document.getElementById("output").innerHTML = "Division of two numbers is " + division;
    }

    function modulus() {
      x = Number(document.getElementById("firstnumber").value);
      y = Number(document.getElementById("secondnumber").value);

      var mod = x % y;

      document.getElementById("output").innerHTML = "Modulus  of two numbers is " + mod;
    }

    function reset() {
        document.getElementById("firstnumber").value = "";
        document.getElementById("secondnumber").value = "";

    }
