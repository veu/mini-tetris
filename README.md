# Mini Tetris

A JavaScript Tetris clone in 500b.

[Play the game](https://veu.github.io/mini-tetris/dist/tetris.html).

## Features

* 10x18 playing field (Game Boy version dimensions)
* Move, turn, and speed up pieces with arrow keys
* Score with bonus for multiple lines
* Beautiful UI ;)

## Caveats

* Pieces turn differently than in original version.

## Contributors

* [@aemkei](https://twitter.com/aemkei)
* [@benjamin_js](https://twitter.com/benjamin_js)
* [@fusselwurm](https://twitter.com/fusselwurm)
* [@MaximeEuziere](https://twitter.com/MaximeEuziere)
* [@subzey](https://twitter.com/subzey)

## Some tricks used

* The cells in a row of the playing field are encoded as bits simplifying operations like
  removing rows (pop the row) or checking whether a row is filled (row equals `1023`, ie. `1111111111` in binary).
* The spread operator `...` is used to cheaply copy the playing field.
  Thanks to the copy adding the piece to the field (for drawing, updating the field, and checking for overlaps)
  is one operation without having to remove the piece afterwards.
* The shapes of the tetrominos are stored in a single string with coordinates overlapping each other.
  E.g. three blocks of the I tetromino are also part of the L.
* The shape string has a length of 18 which is also the height of the playing field.
  Thus the string can be used to cheaply create the array for the field.
* Pieces are moved by mapping their coordinates.
  Because that always looks the same apart from the `Array.map` body
  the mapping function `M` is called as a template literal tag function
  with the body as an argument which is then passed to `eval()`.
* `onkeyup` is shorter than `onkeydown` though less responsive.
* `KeyboardEvent.which` is shorter than `KeyboardEvent.keyCode`.
* The key code is stored in the global variable `k`and can thus be used outside of the event handler.
* `setTimeout()` returns a random identifier which can be used for `clearTimeout()` or as random value to select tetrominos.
* The `<body>` tag doubles as cheap way to execute the code (via `onload`) and element to insert the UI.
* With `Node.innerText` line breaks can be done with `\n` instead of `<br>` when using `Element.innerHTML`.
* `A&&B` is used in favor of `if(A)B` but `A?B:0` is used when B is an assignment to avoid wrapping it in parentheses.

## Other projects

If you want to join us or see other golfing projects we’ve made, see [this list](https://gist.github.com/xem/206db44adbdd09bac424).
