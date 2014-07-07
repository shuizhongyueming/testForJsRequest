testForJsRequest
================

compare the total request time of load many js files with requirejs and load one merged file with requirejs

in the index.html, the requirejs will load 20 js files

the 20 js files will merge with the command

    node r.js -o baseUrl=js name=main out=built.js optimize=none

I make many comments in js files, and disable optimize when merge, to make files very big, so we can compare the time easily.

run this test, you should installed nodejs.

This test is baseed in requirejs to make the js file download at the same time.
