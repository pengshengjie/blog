var addTwoNumbers = function (l1, l2) {
  let curry = 0;
  let c1 = l1;
  let c2 = l2;
  const head = {
    pendding: null,
  };
  let c;
  while (c1 || c2 || curry) {
    let sum = (c1?.value || 0) + c2.value;
    if (sum >= 10) {
      sum = sum - 10;
      curry = 1;
    } else {
      curry = 0;
    }
    if (c) {
      c = head.pendding = {
        value: sum,
        next: null,
      };
    } else {
      c = c.next = {
        value: sum,
        next: null,
      };
    }
    c1 = c1?.next;
    c2 = c2?.next;
  }
  return head.pending;
};

const dd = addTwoNumbers(
  {
    value: 1,
    next: {
      vanlue: 2,
      next: {
        value: 3,
      },
    },
  },
  {
    value: 1,
    next: {
      vanlue: 2,
      next: {
        value: 3,
      },
    },
  }
);

console.log(dd);