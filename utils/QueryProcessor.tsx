export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "joyceh"
    );
  }

  else if (query.toLowerCase().includes("what is your name")) {
    return (
      "Joyce"
    );
  }

  else if (query.toLowerCase().includes("plus")) {
    const split = query.slice(0, -1).split(" ");
    return (
      (+split[2] + +split[4]).toString()
    );
  }

  else if (query.toLowerCase().includes("minus")) {
    const split = query.slice(0, -1).split(" ");
    return (
      (+split[2] - +split[4]).toString()
    );
  }

  else if (query.toLowerCase().includes("multiplied")) {
    const split = query.slice(0, -1).split(" ");
    return (
      (+split[2] * +split[5]).toString()
    );
  }

  else if (query.toLowerCase().includes("largest")) {
    const split = query.slice(0, -1).split(" ");
    return (
      Math.max(+split[8].slice(0, -1), +split[9].slice(0, -1), +split[10]).toString()
    );
  }

  else if (query.toLowerCase().includes("square")) {
    const split = query.split(" ");
    for (var i = 12; i < 19; i++) {
      if (IsSquare(+split[i].slice(0, -1)) && IsCube(+split[i].slice(0, -1))) {
        return split[i].slice(0, -1);
      }
    }
    return "None";
  }

  else if (query.toLowerCase().includes("primes")) {
    const split = query.split(" ");
    var res = "";
    for (var i = 7; i < 11; i++) {
      if (IsPrime(+split[i].slice(0, -1))) {
        res = res + split[i].slice(0, -1);
      }
    }
    return res;
  }

  return "";
}

function IsSquare(num: number) {
  var root = 1;
  var square = 1;
  while (square <= num) {
    if (square == num) {
      return true;
    }
    root += 1;
    square = root * root;
  }
  return false;
}

function IsCube(num: number) {
  var root = 1;
  var cube = 1;
  while (cube <= num) {
    if (cube == num) {
      return true;
    }
    root += 1;
    cube = root * root * root;
  }
  return false;
}

function IsPrime(num: number) {
  var test = 2;
  while (test < num) {
    if (num % test == 0) {
      return false;
    }
    test += 1;
  }
  return true;
}