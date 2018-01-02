#!/usr/bin/env bash
mkdir -p .bin
ζ ' φ`.bin/it.js`.text = ζ_compile(φ`it.ζ`.text) ;' &&
browserify .bin/it.js -o bundle.js &&
ζ ' go_to(`file:///~/code/alice0meta.github.io/turing%20draw/index.html`,{in_app:`chrome`}) ;'
