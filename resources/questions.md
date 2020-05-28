##### Q1. `var`, `let` & `const` declare ____________ scope variables.

  (A) block, function, block \
  (B) function, block, function \
  (C) function, block, block \
  (D) block, block, function

__ANSWER:__ (C) Fact.


##### Q2. Which operator splits an iterable into individual values?

  (A) `.` \
  (B) `...` \
  (C) `->` \
  (D) `.->`

__ANSWER:__ (B) `...` is the spread-operator.


##### Q3. The output of the following code-snippet is:
``` js
function foo(x){
    x();
    function x(){
        console.log("bar");
    }
}

foo();
foo(undefined);
foo(function(){
   console.log("Not bar");
});
```

  (A) bar, bar, not bar \
  (B) bar, undefined, not bar \
  (C) bar, bar, bar \
  (D) Program throws an error.

__ANSWER:__ (C) The moment `x()` is declared, the passed argument `x` is overwritten.


##### Q4. The value of `c` in the following code-snippet is:
``` js
let [a, b, ...c] = [1, 2, 3, 4, [5,6]];
```

  (A) [5, 6] \
  (B) [3, 4, [5,6]] \
  (C) undefined \
  (D) [ ]

__ANSWER:__ (B) The above code implements an array-destructuring assignment where the rest-parameter `c` is initialized as an array.


##### Q5. The output of the following code-snippet is:
``` js
function foo([a, b, c=3] = [1, 2]){
    console.log(a, b, c);
}

foo(undefined);
```

  (A) 1 2 3 \
  (B) 1 2 \
  (C) undefined \
  (D) Raises a `TypeError` exception.

__ANSWER:__ (A) The above code assigns the function-paramters using an array-destructuring assignment. `c` has a default-value of `3`.