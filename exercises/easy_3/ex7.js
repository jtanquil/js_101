const twice = (n) => {
  let nStr = String(n);

  if (nStr.length % 2 === 1) {
    return 2 * n;
  } else {
    let halfwayPoint = nStr.length/2;
    let leftDigits = nStr.slice(0, halfwayPoint);
    let rightDigits = nStr.slice(halfwayPoint);

    return leftDigits === rightDigits ? n : 2 * n;
  }
};

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676