# TNTLive
A Translation of the Open Source TNT Basic Runtime to Javascript

This core directory is the first phase of the project - the js implementation of TNT's core functionality in javascript.
A 'Runner' script will directly translate existing TNT Source code into a js executable and link against this core library. This runner (coming soon) will be a PHP script that accepts an archived '*.tbproj' file. It will unpack the original directory structure and map numbered resources to relative URLs.
The code has been structured this way to make it easier to edit (I can tick off the functionality easily against the user manual), and to allow expansion.
This whole thing is very much a work in progress, just something to keep the old grey matter ticking over between paying projects for the 'Day Job'.
