#!/usr/bin/env bash
mkdir -p .bin
ζ ' φ`.bin/main.js`.text = ζ_compile(φ`main.ζ`.text); φ`.bin/hilbert_curve.js`.text = ζ_compile(φ`hilbert_curve.ζ`.text) ;' &&
browserify .bin/main.js -o bundle.js &&
ζ ' go_to("app","chrome") ;'
