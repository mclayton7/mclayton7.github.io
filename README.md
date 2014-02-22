
Source code for macclayton.com
=========================

This is the [Jekyll](http://www.jekyllrb.com) source code for my personal website that I host using [GitHub Pages](http://pages.github.com/). Because I need SASS compilation, you'll need to switch to the source branch (if you clone this repo) to do your work, because the Rakefile will compile all the assets to the master branch.

Useful Commands
--------------------
Because I use [SASS] (http://sass-lang.com) (/assets/scss), I need a way to compile the SASS to CSS before deploying to GitHub. Unfortunately, you cannot use plugins with the way GitHub Pages works. The easiest way around this is to use a custom Rakefile.  
1. `rake dev:build` compiles the SASS and starts a development server  
2. `rake dev:pro` builds the site for production. This minifies everything in addition to compiling the SASS
3. `rake commit_deploy` commits the site (using Git) and deploys to GitHub.
