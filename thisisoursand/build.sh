#!/usr/bin/env bash
mkdir -p .bin
ζ ' φ`.bin/it.js`.text = ζ_compile(φ`it.ζ`.text); φ`.bin/hilbert_curve.js`.text = ζ_compile(φ`hilbert_curve.ζ`.text) ;' &&
browserify .bin/it.js -o bundle.js &&
ζ ' go_to(`http://localhost:8080/`) ;'
