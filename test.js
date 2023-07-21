// const  join = (a, b, c) => {
//   return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)
// const _ = curry.placeholder

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(_, 2)(1, 3) // '1_2_3'

// curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

function curry (fn, ...args) {
  return fn.length > args.length ? (..._args) => curry(fn, ...args, ..._args) : fn(...args)
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3, 4));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));