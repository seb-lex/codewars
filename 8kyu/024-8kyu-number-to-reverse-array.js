<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <script>
    // function digitize(n) {
    //   const toString = n.toString().split('').reverse();
    //   return toNum = toString.map(Number);
    // }

    function digitize(n) {
      return (n.toString().split('').reverse()).map(Number);
    }

    console.log(digitize(348597))

  </script>
</body>

</html>
