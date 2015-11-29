var j = void 0,
	l = !0,
	m = null,
	n = !1;

function s() {
	return function() {}
}
var t;
if ("undefined" !== typeof document && (document.head === j && (document.head = document.getElementsByTagName("head")[0]), document.body === j && (document.body = document.getElementsByTagName("body")[0]), !Element.prototype.hasOwnProperty("classList"))) {
	var aa = /^\s+|\s+$/g,
		ca = function(a, b) {
			if ("" === b) throw "SYNTAX_ERR";
			if (/\s/.test(b)) throw u(n), "INVALID_CHARACTER_ERR";
			return a.indexOf(b)
		},
		da = function() {
			var a = this,
				b = a.className.replace(aa, "").split(/\s+/);
			return {
				length: b.length,
				item: function(a) {
					return b[a] || m
				},
				contains: function(a) {
					return -1 !== ca(b, a)
				},
				add: function(c) {
					-1 === ca(b, c) && (b.push(c), this.length = b.length, a.className = b.join(" "))
				},
				remove: function(c) {
					c = ca(b, c); - 1 !== c && (b.splice(c, 1), this.length = b.length, a.className = b.join(" "))
				},
				toggle: function(a) {
					-1 === ca(b, a) ? this.add(a) : this.remove(a)
				},
				toString: function() {
					return a.className
				}
			}
		};
	Object.defineProperty ? Object.defineProperty(Element.prototype, "classList", {
		get: da
	}) : Object.prototype.__defineGetter__ && Element.prototype.__defineGetter__("classList", da)
}
var ea = {},
	u, z, A, C, ga, D, ha, ia, E, ja, ka, la, ma, oa, F, pa, G, qa, H, I, ra, sa, ta, J, ua, va, wa, xa, L, M, ya, za, Aa, Ba, N, O, Ca;
z = function(a) {
	var b, c = this;
	this.F = n;
	this.Ka = 0;
	this.w = m;
	this.$a = this.wb = this.vb = 0;
	this.pd = a;
	if (!a || !a.nodeType) throw new TypeError("Layer must be a document node");
	this.xa = function() {
		z.prototype.xa.apply(c, arguments)
	};
	this.Aa = function() {
		z.prototype.Aa.apply(c, arguments)
	};
	this.za = function() {
		z.prototype.za.apply(c, arguments)
	};
	this.ya = function() {
		z.prototype.ya.apply(c, arguments)
	};
	"undefined" !== typeof window.ontouchstart && (a.addEventListener("click", this.xa, l), a.addEventListener("touchstart", this.Aa, n), a.addEventListener("touchend", this.za, n), a.addEventListener("touchcancel", this.ya, n), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, f) {
		var h = Node.prototype.removeEventListener;
		"click" === b ? h.call(a, b, c.Wa || c, f) : h.call(a, b, c, f)
	}, a.addEventListener = function(b, c, f) {
		var h = Node.prototype.addEventListener;
		"click" === b ? h.call(a, b, c.Wa || (c.Wa = function(a) {
			a.oc || c(a)
		}), f) : h.call(a, b, c, f)
	}), "function" === typeof a.onclick && (b = a.onclick, a.addEventListener("click", function(a) {
		b(a)
	}, n), a.onclick = m))
};
t = z.prototype;
t.Fb = 0 < navigator.userAgent.indexOf("Android");
t.A = /iP(ad|hone|od)/.test(navigator.userAgent);
t.pa = z.prototype.A && /OS 4_\d(_\d)?/.test(navigator.userAgent);
t.Gb = z.prototype.A && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
t.fb = function(a) {
	switch (a.nodeName.toLowerCase()) {
		case "button":
		case "input":
			return this.A && "file" === a.type ? l : a.disabled;
		case "label":
		case "video":
			return l;
		default:
			return /\bneedsclick\b/.test(a.className)
	}
};
t.Yb = function(a) {
	switch (a.nodeName.toLowerCase()) {
		case "textarea":
		case "select":
			return l;
		case "input":
			switch (a.type) {
				case "button":
				case "checkbox":
				case "file":
				case "image":
				case "radio":
				case "submit":
					return n
			}
			return !a.disabled;
		default:
			return /\bneedsfocus\b/.test(a.className)
	}
};
t.qc = function(a, b) {
	var c, d;
	document.activeElement && document.activeElement !== a && document.activeElement.blur();
	d = b.changedTouches[0];
	c = document.createEvent("MouseEvents");
	c.initMouseEvent("click", l, l, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, n, n, n, n, 0, m);
	c.Kb = l;
	a.dispatchEvent(c)
};
t.focus = function(a) {
	var b;
	this.A && a.setSelectionRange ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
};
t.Hc = function(a) {
	var b, c;
	b = a.Ua;
	if (!b || !b.contains(a)) {
		c = a;
		do {
			if (c.scrollHeight > c.offsetHeight) {
				b = c;
				a.Ua = c;
				break
			}
			c = c.parentElement
		} while (c)
	}
	b && (b.Ib = b.scrollTop)
};
t.Qb = function(a) {
	return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
};
t.Aa = function(a) {
	var b, c, d;
	b = this.Qb(a.target);
	c = a.targetTouches[0];
	if (this.A) {
		d = window.getSelection();
		if (d.rangeCount && !d.isCollapsed) return l;
		if (!this.pa) {
			if (c.identifier === this.$a) return a.preventDefault(), n;
			this.$a = c.identifier;
			this.Hc(b)
		}
	}
	this.F = l;
	this.Ka = a.timeStamp;
	this.w = b;
	this.vb = c.pageX;
	this.wb = c.pageY;
	200 > a.timeStamp - this.Za && a.preventDefault();
	return l
};
t.Dc = function(a) {
	a = a.changedTouches[0];
	return 10 < Math.abs(a.pageX - this.vb) || 10 < Math.abs(a.pageY - this.wb) ? l : n
};
t.Jb = function(a) {
	return a.Eb !== j ? a.Eb : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
t.za = function(a) {
	var b, c, d;
	d = this.w;
	this.Dc(a) && (this.F = n, this.w = m);
	if (!this.F) return l;
	if (200 > a.timeStamp - this.Za) return this.Qa = l;
	this.Za = a.timeStamp;
	b = this.Ka;
	this.F = n;
	this.Ka = 0;
	this.Gb && (d = a.changedTouches[0], d = document.elementFromPoint(d.pageX - window.pageXOffset, d.pageY - window.pageYOffset));
	c = d.tagName.toLowerCase();
	if ("label" === c) {
		if (b = this.Jb(d)) {
			this.focus(d);
			if (this.Fb) return n;
			d = b
		}
	} else if (this.Yb(d)) {
		if (100 < a.timeStamp - b || this.A && window.top !== window && "input" === c) return this.w = m, n;
		this.focus(d);
		if (!this.pa || "select" !== c) this.w = m, a.preventDefault();
		return n
	}
	if (this.A && !this.pa && (b = d.Ua) && b.Ib !== b.scrollTop) return l;
	this.fb(d) || (a.preventDefault(), this.qc(d, a));
	return n
};
t.ya = function() {
	this.F = n;
	this.w = m
};
t.xa = function(a) {
	var b;
	if (!this.w || a.Kb) return l;
	b = this.w;
	this.w = m;
	return this.F ? (this.F = n, l) : !a.cancelable || "submit" === a.target.type && 0 === a.detail ? l : !this.fb(b) || this.Qa ? (this.Qa = n, a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.oc = l, a.stopPropagation(), a.preventDefault(), n) : l
};
"undefined" !== typeof define && define.Tc && define(function() {
	return z
});
"undefined" !== typeof module && module.Ta && (module.Ta = function(a) {
	return new z(a)
}, module.Ta.Lc = z);
A = {
	q: function(a) {
		if (a === j || "" === a) return "";
		a.constructor === String && (a = parseInt(a, 10));
		return (10 > a ? "0" : "") + a
	}
};
var Da = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
	Ea = "January February March April May June July August September October November December".split(" ");
A.gd = function(a) {
	dowOffset = "int" == typeof dowOffset ? dowOffset : 0;
	var b = new Date(a.getFullYear(), 0, 1),
		c = b.getDay() - dowOffset,
		c = 0 <= c ? c : c + 7,
		b = Math.floor((a.getTime() - b.getTime() - 6E4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864E5) + 1;
	4 > c ? (c = Math.floor((b + c - 1) / 7) + 1, 52 < c && (nYear = new Date(a.getFullYear() + 1, 0, 1), nday = nYear.getDay() - dowOffset, nday = 0 <= nday ? nday : nday + 7, c = 4 > nday ? 1 : 53)) : c = Math.floor((b + c - 1) / 7);
	return c
};
A.add = function(a, b, c, d, e) {
	e === j && (e = 0);
	d === j && (d = 0);
	c === j && (c = 0);
	b === j && (b = 0);
	e = a.getMilliseconds() + e;
	d = a.getSeconds() + d + e / 1E3;
	c = a.getMinutes() + c + d / 60;
	b = a.getHours() + b + c / 60;
	a.setHours(b % 24, c % 60, d % 60, e % 1E3);
	a.setUTCDate(a.getUTCDate() + b / 24);
	return a
};
A.Lb = function(a) {
	var a = new Date(+a),
		b = +new Date(a.getFullYear(), a.getMonth(), a.getDate());
	return b += 6E4 * (a.getTimezoneOffset() - (new Date(b)).getTimezoneOffset())
};
A.f = {};
A.f.getHours = function(a, b) {
	var c = a.getHours();
	b && (c %= 12, 0 == c && (c = 12));
	return A.q(c)
};
A.f.getMinutes = function(a) {
	return A.q(a.getMinutes())
};
A.f.getSeconds = function(a) {
	return A.q(a.getSeconds())
};
A.f.getDate = function(a) {
	return A.q(a.getDate())
};
A.f.getDay = function(a) {
	return Da[a.getDay()]
};
A.f.getMonth = function(a) {
	return Ea[a.getMonth()]
};
A.f.getTime = function(a, b) {
	u(2 === arguments.length);
	u(b.constructor === Boolean);
	var c = a - A.Lb(a);
	if (b) {
		var d = 432E5 <= c;
		d && (c -= 432E5)
	}
	c = A.f.X(c, b ? "periodclock" : "alarmclock");
	b && (c += " " + (d ? "PM" : "AM"));
	return c
};
A.f.X = function(a, b) {
	u(2 === arguments.length);
	format = {
		text: "%hv?%mv?%0sv?",
		countdown: "%0h:?%0m:?%0s",
		alarmclock: "%0h:%0m",
		periodclock: "%h%:0m?"
	}[b];
	u(format);
	var c = format.match(/%:?0?(h|s|m)v?\s?:?\??/g);
	u(c);
	var d = {
			ms: a % 1E3 | 0,
			s: a / 1E3 % 60 | 0,
			m: a / 1E3 / 60 % 60 | 0,
			h: a / 1E3 / 60 / 60 | 0
		},
		c = c.map(function(a) {
			if ("%" !== a[0]) return a;
			a = a.substring(1);
			if ("?" === a[a.length - 1]) var b = l,
				a = a.substring(0, a.length - 1);
			for (var c in d)
				if (-1 !== a.indexOf(c)) return b && ("h" === c && !d.h || "m" === c && !d.h && !d.m || "s" === c && d.h) ? "" : a.replace(RegExp("(0?)" + c), (10 > d[c] ? "$1" : "") + d[c]).replace("v", c);
			u(n)
		});
	return c.join("")
};
A.f.bd = function(a, b) {
	u(a);
	var a = new Date(a),
		c = new Date;
	c.setHours(23);
	c.setMinutes(59);
	c.setSeconds(59);
	c.setMilliseconds(999);
	var c = (c - a) / 864E5,
		d;
	if (1 > c) return "today";
	if (2 > c) d = "yesterday";
	else if (15 > c) d = (c | 0) + " days ago";
	else if (31 > c) d = (c / 7 | 0) + " weeks ago";
	else if (d = c / 30.5 | 0, 356 > c) d = d + " month" + (1 < d ? "s" : "") + " ago";
	else {
		var e = c / 356.24 | 0;
		d = e + " year" + (1 < e ? "s" : "") + " ago"
	}
	return !b ? d : d + ", " + A.f.getDay(a) + (8 > c ? "" : " " + a.getDate() + "." + A.f.getMonth(a)) + (!e ? "" : "." + a.getFullYear())
};
C = {
	e: function(a, b) {
		return document.defaultView.getComputedStyle(a, m).getPropertyValue(b)
	},
	Ob: function(a) {
		var b = 0,
			c = 0;
		do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent);
		return {
			x: b,
			y: c
		}
	},
	Ed: function(a) {
		u(a);
		a.parentElement.removeChild(a)
	},
	create: function(a, b) {
		var c = document.createElement(a),
			d;
		if (b.Oa) {
			d = function() {
				e.appendChild(c)
			};
			var e = b.Oa;
			delete b.Oa
		}
		b.mb && (d = function() {
			e.firstChild ? e.insertBefore(c, e.firstChild) : e.appendChild(c)
		}, e = b.mb, delete b.mb);
		if (b.na) {
			for (var f in b.na) c.appendChild(b.na[f]);
			delete b.na
		}
		for (f in b) c[f] = b[f];
		d && d();
		return c
	}
};

function Fa(a) {
	a = document.createElement(a || "div");
	a.style.display = "inline-block";
	a.style.position = "absolute";
	a.style.top = "0";
	a.style.top = "-9999px";
	a.style.zIndex = "-9999";
	a.style.visibility = "hidden";
	return a
}

function Ga(a, b, c, d, e) {
	var f = (a.getAttribute("data-text") || "") + a.innerHTML;
	f.length < (e && e.length) && (f = e);
	1 > f.length && (f = "y");
	if (d) {
		u(0 === a.children.length);
		for (var h, e = -1, g = document.body.appendChild(Fa()), k = 0; k < d.length; k++) {
			g.innerHTML = d[k];
			var p = parseInt(C.e(g, "width"), 10);
			p > e && (e = p, h = d[k])
		}
		document.body.removeChild(g);
		u(h);
		d = h;
		h = f.length;
		f = "";
		for (e = 0; e < h; e++) f += d
	}
	d = Fa(a.tagName);
	d.style.fontFamily = C.e(a, "font-family");
	d.style.fontFamily = C.e(a, "font-family");
	d.style.fontSize = Ha + "px";
	d.style.whiteSpace = "nowrap";
	d.style.letterSpacing = C.e(a, "letter-spacing");
	d.innerHTML = f;
	document.body.appendChild(d);
	a = b && parseInt(C.e(d, "width"), 10);
	f = c && parseInt(C.e(d, "height"), 10);
	b = Math.min(c ? c / f : Infinity, b ? b / a : Infinity);
	document.body.removeChild(d);
	return {
		fontSize: b * Ha,
		width: b * a,
		height: b * f
	}
}
var Ha = 100,
	Ia = m;
ga = function(a, b, c, d, e) {
	function f(a, b) {
		return parseInt(C.e(a, b) || 0, 10)
	}
	if (e) {
		var h = a.innerHTML,
			g = a.getAttribute("data-text");
		a.innerHTML = "";
		a.removeAttribute("data-text")
	}
	var k = f(a, "width"),
		p;
	c || (p = f(a, "height"));
	e && (a.innerHTML = h, g && a.setAttribute("data-text", g));
	Ia === m && (Ia = ["box-sizing", "-moz-box-sizing", "-o-box-sizing", "-ms-box-sizing", "-webkit-box-sizing"].filter(function(a) {
		return document.createElement("div").style[a] !== j
	})[0]);
	Ia && "border-box" === C.e(a, Ia) && (k -= f(a, "border-left") + f(a, "border-right") + f(a, "padding-left") + f(a, "padding-right"), p && (p -= f(a, "border-top") + f(a, "border-bottom") + f(a, "padding-top") + f(a, "padding-bottom")));
	a.style.fontSize = Math.floor(Ga(a, k, p, b, d).fontSize) + "px";
	u("block" === C.e(a, "display") || "inline-block" === C.e(a, "display") || "table-cell" === C.e(a, "display"), "ml.element.getStyle(el,'display')==" + C.e(a, "display"), 1)
};
"undefined" !== typeof window && window.console && (window.console.print = function(a) {
	window.console.log(JSON.stringify(a))
}, window.console.Cd = function() {
	window.console && window.console.log && window.console.log(Error().stack)
});
u = function(a, b, c, d) {
	if ("undefined" !== typeof window && !a) {
		var e = Error().stack,
			f;
		c || (c = 0);
		c++;
		D().L && (window.console && window.console.log) && window.console.log(e);
		if (e) {
			do e = e.replace(/.*[\s\S]/, ""); while (c--);
			f = /[^\/]*$/.exec(e.split("\n")[0]).toString().replace(/\:[^\:]*$/, "")
		}
		f = "assertion fail at " + f;
		b !== j && (f += " (" + (b.join && b.join(",") || b) + ")");
		if (d) throw f;
		var h = "localhost" === window.location.hostname;
		if (-1 === window.navigator.userAgent.indexOf("MSIE")) {
			window.console && (window.console.log && !h) && window.console.log(f);
			for (var g = 3; g < arguments.length; g++) window.console && window.console.log ? window.console.log(arguments[g]) : f += arguments[g] + "\n";
			h && window.alert(f + "\n" + e);
			window.console.log(f + "\n" + e);
			if (h) throw f;
		}
	}
};
var Ja, Ka = [];
ha = function(a) {
	Ka.push(a);
	Ja || (Ja = window.setInterval(function() {
		for (var a in Ka) Ka[a]()
	}, 150))
};
ia = function(a, b) {
	if (window.onhashchange !== j) window.addEventListener("hashchange", function() {
		a()
	}, n);
	else {
		var c = location.hash;
		ha(function() {
			location.hash != c && (c = location.hash, a())
		})
	}
	b && a()
};
E = function(a) {
	return a.ctrlKey || a.altKey || a.metaKey
};
var La;
ja = function(a) {
	var b = D().L;
	if (!La || b) {
		for (var b = document.getElementsByTagName("link"), c = 0; c < b.length; c++) {
			var d = b[c].getAttribute("rel");
			d && "icon" == d.toLowerCase() && document.head.removeChild(b[c])
		}
		La = document.createElement("link");
		La.rel = "icon";
		La.type = "image/png";
		document.head.appendChild(La)
	}
	La.href = a
};
ka = function(a, b) {
	b || (b = 1);
	arguments.callee.xb || (arguments.callee.xb = {});
	var c = arguments.callee.xb;
	if (!c[a]) {
		var d = document.createElement("canvas");
		d.height = 32 / b;
		d.width = 32 / b;
		var e = d.getContext("2d");
		e.scale(1 / b, 1 / b);
		e.fillStyle = a;
		e.fillRect(0, 0, 300, 150);
		c[a] = d.toDataURL()
	}
	return c[a]
};
la = function(a, b, c, d) {
	u(c === j);
	u(d === j);
	if (0 >= a && b) return ka(0 === Math.abs(a) % 2 ? "#e11" : "transparent", 2);
	0 >= a && (a = 0);
	c = document.createElement("canvas");
	c.height = 16;
	c.width = 16;
	var d = c.getContext("2d"),
		e = a / 60 | 0,
		f = 59 < e;
	f && (e %= 60);
	var h = f ? a / 3600 | 0 : e,
		a = f ? e : a % 60;
	if (b !== j && b !== m) {
		u(1 >= b && 0 <= b, "percent===" + b);
		e = c.height;
		f = c.width;
		d.fillStyle = "#eee";
		d.fillRect(0, 0, f, e);
		d.moveTo(f / 2, 0);
		var g = (2 * e + 2 * f) * b;
		g <= f / 2 ? g = [f / 2 + g, 0] : (d.lineTo(f, 0), g <= f / 2 + e ? g = [f, g - f / 2] : (d.lineTo(f, e), g <= f / 2 + e + f ? g = [f - (g - f / 2 - e), e] : (d.lineTo(0, e), g <= f / 2 + e + f + e ? g = [0, e - (g - f / 2 - e - f)] : (u(g <= f / 2 + e + f + e + f / 2, b), d.lineTo(0, 0), g = [g - (f / 2 + e + f + e), 0]))));
		d.lineTo(g[0], g[1]);
		d.lineTo(f / 2, e / 2);
		d.fillStyle = "#aaf";
		d.fill()
	} else d.fillStyle = "#eee", d.fillRect(0, 0, d.canvas.height, d.canvas.width);
	d.fillStyle = "black";
	0 < h ? (d.font = "7pt arial", d.fillText(A.q(h), 0, 7), d.font = "9pt arial", d.fillText(A.q(a), 2, 16)) : (d.font = "10pt arial", d.textAlign = "center", d.fillText(a, 8 + (1 === a.length ? 1 : 0), 12 + (D().L ? 1 : 0)));
	return c.toDataURL()
};
ma = function() {
	for (var a = [], b, c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) b = c[d].split("="), a.push(b[0]), a[b[0]] = window.decodeURIComponent(b[1]);
	return a
};
oa = function(a, b) {
	function c() {
		var g = document.createElement(e);
		g[f] = a;
		g.type = "text/" + (d ? "css" : "javascript");
		d && (g.rel = "stylesheet");
		g.onerror = function() {
			h.removeChild(g);
			setTimeout(c, Math.min(1E3 * Math.pow(2, p), 6E4))
		};
		g.Y = [];
		g.onload = function() {
			g.loaded = l;
			g.Y.forEach(function(a) {
				a()
			});
			b && b()
		};
		p++;
		h.appendChild(g)
	}
	var d = /\.css$/.test(a),
		e = d ? "link" : "script",
		f = d ? "href" : "src",
		h = document.getElementsByTagName("head")[0],
		g = h.getElementsByTagName(e),
		k;
	for (k in g)
		if (g[k][f] === a) {
			b && (g[k].Y && g[k].Y.push(b), (g[k].loaded || !g[k].Y) && b());
			return
		}
	var p = 0;
	c()
};
var Ma = {};
F = function(a, b) {
	if (!b || !Ma[a]) {
		var c = document.createElement("style");
		c.appendChild(document.createTextNode(a));
		c.setAttribute("type", "text/css");
		document.getElementsByTagName("head")[0].appendChild(c);
		b && (Ma[a] = l)
	}
};
var P = m;
D = function() {
	if (!P) {
		P = {};
		var a = window.navigator.platform || "",
			b = window.navigator.userAgent.toLowerCase() || ""; - 1 < b.indexOf("googlebot") || -1 < b.indexOf("msnbot") || -1 < b.indexOf("slurp") ? P.jd = l : -1 < b.indexOf("webkit") ? P.Ic = l : -1 < b.indexOf("gecko") && (P.L = l);
		!/\bchrome\b/.test(b) && /safari/.test(b) && (P.nd = l);
		/Win/.test(a) ? P.od = l : /Mac/.test(a) && (P.ld = l);
		window.opera && (P.Ya = l)
	}
	return P
};
pa = function(a) {
	var b = m;
	a.target ? b = a.target : a.srcElement && (b = a.srcElement);
	3 == b.nodeType && (b = b.parentNode);
	return b
};
G = function(a) {
	if ("keypress" === a.type) {
		var b = {
			10: "enter",
			13: "enter",
			32: " ",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			43: "+",
			45: "-",
			47: "/",
			48: "0",
			49: "1",
			50: "2",
			51: "3",
			52: "4",
			53: "5",
			54: "6",
			55: "7",
			56: "8",
			57: "9",
			63: "?",
			65: "A",
			66: "B",
			67: "C",
			68: "D",
			69: "E",
			70: "F",
			71: "G",
			72: "H",
			73: "I",
			74: "J",
			75: "K",
			76: "L",
			77: "M",
			78: "N",
			79: "O",
			80: "P",
			81: "Q",
			82: "R",
			83: "S",
			84: "T",
			85: "U",
			86: "V",
			87: "W",
			88: "X",
			89: "Y",
			90: "Z",
			97: "a",
			98: "b",
			99: "c",
			100: "d",
			101: "e",
			102: "f",
			103: "g",
			104: "h",
			105: "i",
			106: "j",
			107: "k",
			108: "l",
			109: "m",
			110: "n",
			111: "o",
			112: "p",
			113: "q",
			114: "r",
			115: "s",
			116: "t",
			117: "u",
			118: "v",
			119: "w",
			120: "x",
			121: "y",
			122: "z",
			666: "comma dummy"
		};
		if (a.wa) return b[a.wa];
		if (0 === a.charCode) return b[a.keyCode];
		u(a.charCode);
		return b[a.charCode]
	}
	if ("keydown" === a.type || "keyup" === a.type || "change" === a.type) return b = {
		13: "enter",
		27: "esc",
		32: " ",
		37: "left",
		38: "up",
		39: "right",
		40: "down",
		48: "0",
		49: "1",
		50: "2",
		51: "3",
		52: "4",
		53: "5",
		54: "6",
		55: "7",
		56: "8",
		57: "9",
		65: "a",
		66: "b",
		67: "c",
		68: "d",
		69: "e",
		70: "f",
		71: "g",
		72: "h",
		73: "i",
		74: "j",
		75: "k",
		76: "l",
		77: "m",
		78: "n",
		79: "o",
		80: "p",
		81: "q",
		82: "r",
		83: "s",
		84: "t",
		85: "u",
		86: "v",
		87: "w",
		88: "x",
		89: "y",
		90: "z",
		96: "0",
		97: "1",
		98: "2",
		99: "3",
		100: "4",
		101: "5",
		102: "6",
		103: "7",
		104: "8",
		105: "9",
		187: "+",
		189: "-",
		666: "comma dummy"
	}, a.wa ? b[a.wa] : b[a.keyCode];
	u(n)
};
var Na = function(a) {
	a()
};
if ("undefined" === typeof window) qa = Na;
else {
	var Oa = {},
		Pa = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame,
		Qa = window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame;
	qa = !Pa || !Qa ? Na : function(a) {
		Oa[a] && Qa(Oa[a]);
		Oa[a] = Pa(a)
	}
}
H = function(a) {
	if (a)
		if (a.constructor === Array) {
			a.filter && (a = a.filter(function(a) {
				return !!a
			}));
			for (var b = 0; b < a.length; b++) {
				var c = [].slice.call(arguments);
				[].splice.call(c, 0, 1, a[b]);
				arguments.callee.apply(m, c)
			}
		} else {
			if ("localhost" === window.location.hostname) return a.apply(m, [].slice.call(arguments, 1));
			try {
				return a.apply(m, [].slice.call(arguments, 1))
			} catch (d) {
				u(n, d, 1)
			}
		}
};
var Q = {},
	Ra = window.chrome && window.chrome.storage && window.chrome.storage.local;
Ra ? (Q.set = function(a, b) {
	u(a.constructor === String && (b === j || b.constructor === String));
	var c = {};
	c[a] = b;
	Ra.set(c)
}, Q.get = function(a, b) {
	u(a.constructor === String && b);
	Ra.get(a, function(c) {
		b(c[a])
	})
}, Q.clear = function(a) {
	Ra.clear(function() {
		a && a()
	})
}, window.chrome && window.chrome.storage.onChanged.addListener(function(a) {
	Sa(Object.keys(a))
})) : window.localStorage && (Q.set = function(a, b) {
	u(a.constructor === String && (b === j || b.constructor === String));
	b ? window.localStorage[a] = b : delete window.localStorage[a]
}, Q.get = function(a, b) {
	u(a.constructor === String && b);
	b(window.localStorage[a])
}, Q.clear = function(a) {
	window.localStorage.clear();
	a && a()
}, window.addEventListener("storage", function(a) {
	Sa([a.key])
}));
Q.get || u(n);
var Sa, Ta = [];
Q.ma = function(a) {
	Ta.push(a)
};
Sa = function(a) {
	Ta.forEach(function(b) {
		b(a)
	})
};
I = Q;
ra = function(a, b) {
	function c(b) {
		I.get(a, function(a) {
			b(JSON.parse(a || "{}"))
		})
	}
	c(function(d) {
		u(d.constructor === Object);
		Object.defineProperty(d, Object.keys({
			put: l
		}), {
			value: function() {
				I.set(a, JSON.stringify(d))
			}
		});
		var e = [];
		Object.defineProperty(d, Object.keys({
			ma: l
		}), {
			value: function(a) {
				e.push(a)
			}
		});
		var f, h = [];
		I.ma(function(b) {
			u(b);
			h = h.concat(b);
			clearTimeout(f);
			f = setTimeout(function() {
				-1 < h.indexOf(a) && c(function(a) {
					for (var b in d) a[b] === j && delete d[b];
					for (b in a) d[b] = a[b];
					H(e.forEach(function(a) {
						H(a)
					}))
				});
				h = []
			}, 300)
		});
		b(d)
	})
};
sa = function(a, b, c, d) {
	u(b !== j && a !== j && c !== j);
	d || (d = {});
	var e, f, h, g;
	d.Ad ? e = l : b === l || b === n ? f = l : b.constructor === String && "#" === b[0] ? h = l : b.constructor === String ? g = l : u(n);
	var k = document.getElementById(a) || document.createElement(e ? "select" : "input");
	k.id = a;
	g && (k.type = "text");
	h && (k.type = "color");
	f && (k.type = "checkbox");
	k.setAttribute("tabindex", "-1");
	var p;
	["change", "keyup"].forEach(function(b) {
		k.addEventListener(b, function() {
			window.clearTimeout(p);
			p = window.setTimeout(function() {
				var b = f ? k.checked ? "true" : "" : k.value;
				I.get(a, function(d) {
					d !== b && (I.set(a, b), c && c(f ? !!b : b))
				})
			}, g ? 500 : 0)
		}, n)
	});
	I.get(a, function(a) {
		a || (a = b);
		f && (a = !!a);
		k[f ? "checked" : "value"] = a;
		c(a)
	});
	return k
};
ta = function(a) {
	function b() {
		c.style.backgroundColor = d;
		c.style.backgroundImage = e;
		c.style.backgroundSize = "url(http://i.imgur.com/zqG5F.gif)" === e ? "auto" : "cover"
	}
	u(!arguments.callee.Zb);
	arguments.callee.Zb = l;
	var c = document.documentElement;
	c.style.backgroundRepeat = "no-repeat";
	c.style.backgroundPosition = "center";
	c.style.backgroundAttachment = "fixed";
	c.style["min-height"] = "100%";
	c.style["min-width"] = "100%";
	J && (document.body.style.background = "transparent", document.body.style.backgroundColor = "transparent");
	var d, e;
	return function(a) {
		if (-1 !== a.indexOf(".") || /^data:image/.test(a)) {
			var c = document.createElement("img"),
				g;
			c.onload = function() {
				var c = this.width,
					d = this.height;
				4E6 < c * d ? alert("The provided image has a size of " + c + "*" + d + " pixels. Large images are likely to slow down your machine. Thus only images of maximal 4 000 000 pixels -- e.g. 2500*1600 pixels -- are allowed.") : e === 'url("' + a + '")' && b();
				g = l
			};
			c.onerror = function() {
				"url(http://i.imgur.com/zqG5F.gif)" === e && e === 'url("' + a + '")' && (e = "none", b())
			};
			window.setTimeout(function() {
				!g && e === 'url("' + a + '")' && (d = "", e = "url(http://i.imgur.com/zqG5F.gif)", b(), d = "", e = 'url("' + a + '")')
			}, 50);
			d = "";
			e = 'url("' + a + '")';
			c.src = a
		} else "" === a ? (d = "", e = "none") : -1 !== a.indexOf("gradient") ? (d = "", e = a) : (d = a, e = "none"), b()
	}
};
ua = function(a, b, c) {
	for (var c = c || {}, d, e = ["-webkit-", "-moz-", "-ms-", "-o-", ""], f = ["WebkitT", "MozT", "msT", "OT", "t"], h, g = 0; g < f.length; g++) {
		var k = f[g];
		document.documentElement.style[k + "ransition"] !== j && document.documentElement.style[k + "ransform"] !== j && (document.documentElement.style[k + "ransition"] = c.gb ? "none" : e[g] + "transform 0.6s ease-in-out", document.documentElement.style[k + "ransition"] && (h = k))
	}
	if (d = h)
		if (b)
			if (a.t) {
				window.removeEventListener("resize", a.t.ka);
				c.D && c.D.forEach(function(b) {
					b === a.t.ka && c.D.splice(c.D.indexOf(b), 1)
				});
				var p = a.t.fc;
				delete a.t;
				document.documentElement.style[d + "ransform"] = "";
				setTimeout(function() {
					document.documentElement.style.overflow = p
				}, 700)
			} else u(n);
	else b = function() {
		function b(a) {
			function c(b) {
				return parseInt(C.e(a, b), 10) || 0
			}

			function d(a) {
				return a.map(function(a) {
					return (f ? 0 : c("padding-" + a) + c("border-" + a)) + c("margin-" + a)
				}).reduce(function(a, b) {
					return a + b
				})
			}
			var e = c("height"),
				g = c("width"),
				f = !D().L && "border-box" === ["-webkit-", "-moz-", "-ms-", "-o", ""].reduce(function(b, c) {
					return C.e(a, b + "box-sizing") || C.e(a, c + "box-sizing")
				}),
				e = e + d(["top", "bottom"]),
				g = g + d(["left", "right"]);
			return {
				height: e,
				width: g
			}
		}
		var e, g = {},
			f = b(a);
		e = f.width;
		var g = f.height,
			k = !c.Pa ? 0 : c.Pa.map(function(a) {
				return b(a).height
			}).reduce(function(a, b) {
				return a + b
			}),
			f = C.Ob(a),
			h = parseInt(C.e(a, "padding-top"), 10);
		f.y += h;
		var g = g - h,
			h = parseInt(C.e(document.documentElement, "width")),
			y = parseInt(C.e(document.documentElement, "height")),
			k = g + k,
			g = {};
		g.scale = Math.min(y / k, h / e, c.Wb || Infinity);
		g.hb = [h - 2 * (f.x + e / 2), y - 2 * (f.y + k / 2)];
		g.nb = g.scale / 2;
		e = g;
		document.documentElement.style[d + "ransform"] = "translate(" + e.nb * e.hb[0] + "px," + e.nb * e.hb[1] + "px) scale(" + e.scale + ")"
	}, a.t ? u(n) : (a.t = {}, a.t.fc = document.documentElement.style.overflow, a.t.ka = b, window.addEventListener("resize", a.t.ka), c.D && c.D.push(a.t.ka), document.documentElement.style.overflow = "hidden", b())
};
va = function(a, b, c) {
	var d, e;
	a.ha = function() {
		"#fullscreen" === location.hash && (location.hash = "")
	};
	d = function() {
		location.hash = "#fullscreen" === location.hash ? "" : "fullscreen"
	};
	var f;
	e = function() {
		qa(function() {
			var b = "#fullscreen" === location.hash;
			c.gb = f === j;
			!!b !== !!f && ua(a, !b, c);
			f = b
		})
	};
	a.addEventListener("click", d, n);
	b && window.addEventListener("keydown", function(a) {
		a = a || window.event;
		if (!E(a)) {
			var c = pa(a).type;
			"text" === c || "url" === c || G(a) === b && d()
		}
	}, n);
	e();
	ia(e);
	window.addEventListener("resize", function() {
		setTimeout(e, 1)
	}, n)
};
wa = function() {
	return !!("ontouchstart" in window)
};
xa = function() {
	try {
		return !(!window.chrome || !window.chrome.browserAction || !window.chrome.extension || !(window.chrome.extension.getBackgroundPage && window.chrome.extension.getBackgroundPage() === window))
	} catch (a) {
		return n
	}
};
L = function() {
	try {
		return !(!window.chrome || !window.chrome.app || !window.chrome.app.window)
	} catch (a) {
		return n
	}
};
M = function() {
	try {
		return !(!window.chrome || !window.chrome.browserAction || !window.chrome.extension)
	} catch (a) {
		return n
	}
};
ya = function(a) {
	window.chrome && window.chrome.runtime && window.chrome.runtime.onSuspend && L() ? window.chrome.runtime.onSuspend.addListener(a) : (window.addEventListener("beforeunload", a, n), window.addEventListener("unload", a, n), window.addEventListener("pagehide", a, n))
};
var Ua = [];
za = function(a, b, c) {
	if (-1 === Ua.indexOf(a)) {
		Ua.push(a);
		var d;
		window.addEventListener("resize", function() {
			c && c();
			window.clearTimeout(d);
			d = window.setTimeout(a, b)
		})
	}
};
Aa = function(a) {
	if (window.parent !== window) return n;
	document.body.innerHTML = "";
	var b = document.createElement("iframe");
	b.src = a;
	b.setAttribute("frameborder", "0");
	document.documentElement.style.overflow = document.body.style.overflow = "hidden";
	document.documentElement.style.margin = document.body.style.margin = "0";
	document.documentElement.style.width = document.body.style.width = document.documentElement.style.height = document.body.style.height = b.style.height = b.style.width = "100%";
	document.body.appendChild(b);
	return l
};
Ba = function(a, b) {
	var c = c || [];
	c.push(["_setAccount", a]);
	c.push(["_trackPageview"]);
	var d = document.createElement("script");
	d.type = "text/javascript";
	d.async = l;
	d.src = ("https:" == document.location.protocol || b ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
	(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(d);
	window._gaq = c
};
N = {};
var R;
N.get = function(a) {
	R === j ? setTimeout(function() {
		function b() {
			R = window.navigator.Nd || window.navigator.language || m;
			a(R)
		}
		try {
			window.chrome && window.chrome.i18n && window.chrome.i18n.getAcceptLanguages ? window.chrome.i18n.getAcceptLanguages(function(b) {
				b && ["en", "de", "fr"].some(function(a) {
					if (-1 < b.indexOf(a)) return R = a, l
				});
				R === j && (R = m);
				a(R)
			}) : b()
		} catch (c) {
			b()
		}
	}, 0) : a(R)
};
N.Tb = function(a) {
	N.get(function(b) {
		a("fr" !== b && "de" !== b)
	})
};
var T = "undefined" !== typeof Windows && Windows;
if (T) {
	J = {};
	var U = T.UI.Notifications;
	J.Nc = "undefined" === typeof window;
	J.R = {};
	J.R.Yc = function(a, b, c, d) {
		u("big" === a || "bigCenter" === a);
		var e;
		"big" === a ? e = U.TileUpdateManager.getTemplateContent(U.TileTemplateType.tileWideText03) : "bigCenter" === a && (e = U.TileUpdateManager.getTemplateContent(U.TileTemplateType.tileWideSmallImageAndText01));
		a = e.getElementsByTagName("text");
		a[0].appendChild(e.createTextNode(b + "\n" + c + "\n" + d));
		var f = U.TileUpdateManager.getTemplateContent(U.TileTemplateType.tileSquareText02),
			a = f.getElementsByTagName("text");
		a[0].appendChild(f.createTextNode(b));
		a[1].appendChild(f.createTextNode(c + "\n" + d));
		b = e.importNode(f.getElementsByTagName("binding").item(0), l);
		e.getElementsByTagName("visual").item(0).appendChild(b);
		return e
	};
	J.R.Xc = function(a) {
		var b = U.Sc.fd(U.Rc.Kd);
		b.getElementsByTagName("image")[0].setAttribute("src", a);
		return b
	};
	J.R.update = function(a, b, c) {
		u(a && b && b.constructor === Date && (!c || c.constructor === Date));
		a = c && new U.ScheduledTileNotification(a, c) || new U.TileNotification(a);
		a.expirationTime = b;
		U.TileUpdateManager.createTileUpdaterForApplication()[c ? "addToSchedule" : "update"](a)
	};
	J.rd = function(a, b) {
		var c = new T.ApplicationModel.Background.BackgroundTaskBuilder;
		c.name = "Maintenance background task";
		c.taskEntryPoint = a;
		var d = new T.ApplicationModel.Background.MaintenanceTrigger(b, n);
		c.setTrigger(d);
		c.register()
	};
	J.Id = T.Storage.ApplicationData.current.localSettings.values;
	J.Uc = function(a, b, c) {
		var d = a.td(),
			e = m,
			f = m,
			h = m;
		T.la.Jc.Zc.qd.Wc(b, T.la.Kc.Fd).sb(function(a) {
			return a.zd(T.la.Mc.Dd)
		}).sb(function(a) {
			h = a;
			e = a.ed(0);
			f = d.sd();
			return T.la.Qc.Pc.Vc(f, e)
		}).sb(function() {
			return e.ad()
		}).$c(function() {
			f.close();
			e.close();
			h.close();
			c("ms-appdata:///local/" + b)
		})
	}
}
O = {};

function Va() {
	var a = m;
	!D().L && window.webkitNotifications && window.webkitNotifications.checkPermission ? (a = {
		z: function() {
			return 0 != window.webkitNotifications.checkPermission()
		},
		ba: function() {
			return 2 == window.webkitNotifications.checkPermission()
		}
	}, O.ab = 'you have previously blocked notifications for Timer Tab \n\ngo to the address:\nchrome://settings/contentExceptions#notifications\nor manually go to:\n"Settings -> Show advanced settings... -> Privacy -> Content Settings -> Notifications -> Manage exceptions..."\nand remove ' + window.location.origin + " from the blocked Sites", a.ca = function(a) {
		window.webkitNotifications.requestPermission(function() {
			a && a()
		})
	}, a.W = function(a, c, d, e, f) {
		try {
			var h = window.webkitNotifications.createNotification(d, a, c);
			h.ondisplay = e;
			h.onclick = f;
			h.show();
			return function() {
				h.cancel()
			}
		} catch (g) {}
	}) : window.S && window.S.requestPermission && (a = {
		z: function() {
			return "granted" !== window.S.hc
		},
		ba: function() {
			return "denied" === window.S.hc
		},
		ca: function(a) {
			window.S.requestPermission(function() {
				a && a()
			})
		},
		W: function(a, c, d, e, f) {
			try {
				var h = new Notification(a, {
					dir: "auto",
					lang: "",
					body: c,
					hd: d
				});
				h.yd = e;
				h.onclick = f;
				return function() {
					h.close()
				}
			} catch (g) {}
		}
	});
	V = a
}
var V;
O.Xa = function() {
	V || Va();
	return !!V
};
O.z = function() {
	V || Va();
	return !V || V.z()
};
O.ba = function() {
	V || Va();
	return !V || V.ba()
};
O.ca = function(a) {
	V || Va();
	V && (V.z() ? V.ca(a) : a && a())
};
O.W = function(a, b, c, d, e) {
	V || Va();
	if (!V) return s();
	var f = V.W(a, b, c, function() {
		setTimeout(f, d)
	}, e);
	return f
};
var Wa, W, X = 3;
Wa = function(a, b, c) {
	function d(a) {
		q = a
	}

	function e(a, d, e, K) {
		if (1 === b) g = s();
		else {
			var y, k = a();
			y = function(b) {
				var c = a();
				JSON.stringify(k) !== JSON.stringify(c) && (b || H.apply(m, [f].concat(c)), k = c)
			};
			K(y);
			h = function(a, c, g, f) {
				u((a === j || a.constructor === Number) && (c === j || c.constructor === Number) && (g === j || g.constructor === Number));
				a === j && (a = "");
				c === j && (c = "");
				g === j && (g = "");
				var K;
				e && 12 <= parseInt(a, 10) && (a -= 12, K = l);
				!a && b === X && (a = "0");
				e && 0 === parseInt(a, 10) && (a = "12");
				b === X && (a = A.q(a), c = A.q(c), g = A.q(g), a || (a = "00"), c || (c = "00"));
				2 === b && (a && (a = parseInt(a, 10)), c && (c = parseInt(c, 10)), g && (g = parseInt(g, 10)));
				d(a, c, g, K);
				y(f)
			};
			var w = function() {
				var b = a();
				"PM" === b.kb && 12 !== b.u && (b.u += 12);
				"AM" === b.kb && 12 === b.u && (b.u -= 12);
				return b
			};
			g = 2 === b ? function() {
				var a = w(),
					a = +A.add(new Date, a.u, a.Z, a.da),
					b = +new Date + 999999999999;
				return isNaN(a) || a > b ? b : a
			} : b === X ? function() {
				var a = w(),
					b = new Date;
				b.setHours(a.u || 0, a.Z || 0, a.da || 0, 0);
				b <= new Date && b.setDate(b.getDate() + 1);
				return +b
			} : j;
			K = function() {
				h(p.J, p.C, p.ea, l)
			};
			if (1 !== b && c.data) {
				var p = c.data.qa(b);
				if (p.J === j && p.C === j && p.ea === j) {
					if (b === X) {
						var r = A.add(new Date, 0, 10, 0);
						p.J = r.getHours();
						p.C = r.getMinutes()
					}
					2 === b && (p.C = 10)
				}
				K(); - 1 !== window.navigator.userAgent.indexOf("MSIE") && setTimeout(K, 1);
				f = function(a) {
					c.data.fa({
						J: a.u,
						C: a.Z,
						ea: a.da
					}, b)
				}
			}
		}
	}
	u(2 === b || b === X || 1 === b);
	u(!a || a.nodeName && "form" === a.nodeName.toLowerCase());
	var f, h, g, k = a,
		p, v, x, q;
	if (1 !== b && wa() && 1100 >= Math.max(window.screen.width, window.screen.height)) {
		var w = function() {
			F(".dw,.dwwr,.dwc{border:0!important;padding:0!important;margin:0!important;background:0!important;}", l);
			F("form{line-height:.6em}", l);
			F(".dw{-webkit-filter:grayscale(1);-moz-filter: grayscale(1);} .dw-li{font-size:2em!important}", l);
			[].slice.call(k.querySelectorAll("input,span")).forEach(function(a) {
				a.parentElement.removeChild(a)
			});
			var a = document.createElement("div");
			k.insertBefore(a, k.firstChild);
			var b = $("#" + k.id + " div"),
				a = X ? "HH:ii" : "ii:ss";
			b.cb().time({
				Jd: "android-ics light",
				display: "inline",
				mode: "scroller",
				Ld: a,
				Md: a,
				rows: 3,
				ib: function() {
					q && q()
				}
			});
			p = function() {
				var a = b.cb("getValue");
				return {
					u: parseInt(a[0], 10),
					Z: parseInt(a[1], 10),
					da: 0
				}
			};
			v = function(a, c) {
				b.cb("setValue", [a, c], l)
			};
			e(p, v, x, d)
		};
		oa("http://brillcdn.appspot.com/sf/mobiscroll.datetime.ics.css");
		oa("http://brillcdn.appspot.com/sf/zepto.min.js", function() {
			oa("http://brillcdn.appspot.com/sf/mobiscroll.datetime.ics.js", w)
		})
	} else {
		var r, B, y;
		y = function(a, b) {
			var c = k.appendChild(document.createElement("input"));
			c.setAttribute("autocomplete", "off");
			c.setAttribute("spellcheck", "false");
			c.setAttribute("min", "0");
			b && c.setAttribute("max", "" + b);
			c.setAttribute("size", "1");
			c.setAttribute("placeholder", a)
		};
		k || (k = document.createElement("form"), y("h", b === X ? "23" : j), y("m", b === X ? "59" : j), y("s", b === X ? "59" : j));
		if (window.WinJS && window.WinJS.UI && window.WinJS.UI.TimePicker && 1 !== b) {
			[].slice.call(k.querySelectorAll("input")).forEach(function(a) {
				a.parentElement.removeChild(a)
			});
			b === X && (y = document.createElement("div"), k.insertBefore(y, k.firstChild), new window.WinJS.UI.TimePicker(y));
			if (2 === b)
				for (y = 0; 3 > y; y++) {
					var ba = document.createElement("select");
					ba.setAttribute("placeholder", 0 === y && "h" || 1 === y && "m" || 2 === y && "s");
					for (var na = 0; 100 > na; na++) {
						var K = ba.appendChild(document.createElement("option"));
						K.value = na.toString();
						K.innerHTML = K.value
					}
					k.insertBefore(ba, k.firstChild)
				}
			r = [].slice.call(k.getElementsByTagName("select"));
			b === X && (B = r.pop())
		} else r = [].slice.call(k.getElementsByTagName("input"));
		y = r;
		B && y.push(B);
		p = function() {
			var a = r.map(function(a) {
				a = parseInt(a.value, 10);
				if (!isNaN(a) && (a || 0 === a)) return a
			});
			2 > a.length && a.push(j);
			u(3 === a.length);
			return {
				u: a[0],
				Z: a[1],
				da: a[2],
				kb: B && B.value || j
			}
		};
		v = function(a, b, c, d) {
			r[0].value = a;
			r[1].value = b;
			r[2] && (r[2].value = c);
			u(d === j || B);
			B && (B.value = d ? "PM" : "AM")
		};
		x = !!B;
		y.forEach(function(a) {
			a["SELECT" === a.tagName ? "onchange" : "oninput"] = function() {
				q && q()
			}
		});
		e(p, v, x, d)
	}
	a.onsubmit = function(b) {
		b && b.preventDefault();
		u(g);
		if (!g) return n;
		H(this.dc, g());
		var c = this;
		H(function() {
			a.Bc && a.Bc.forEach(function(a) {
				a.call(c)
			})
		});
		return n
	};
	a.type = b;
	return a
};
var Ya;

function Za(a) {
	function b() {
		u(k === j || k.constructor === Number);
		var a = k || +new Date;
		return g ? g - a : a - h
	}

	function c(a, b) {
		H(d.p.Ha, b, a, e);
		b && H(d.p.oa, {
			state: f.getData(),
			n: b
		})
	}
	var d = this;
	d.p = {};
	d.r = {};
	var e = {
			U: 1,
			T: 2,
			M: 3,
			G: 4
		},
		f = {},
		h = a && a.start,
		g = a && a.end,
		k = a && a.paused;
	f.va = function() {
		return h !== j
	};
	f.md = function() {
		return !!k
	};
	f.Mb = function() {
		return g ? Math.ceil(b() / 1E3) : Math.floor(b() / 1E3)
	};
	f.Nb = function() {
		if (!g) return m;
		u(g, "__end==" + g);
		u(h, "__start==" + h);
		var a = Math.abs(g - h),
			c = b(),
			d = 0 === a ? 1 : Math.min(1 - c / a, 1);
		u(!isNaN(d), "progress_total==" + a + ",progress_current==" + c);
		u(0 <= d && 1 >= d, d);
		return d
	};
	f.Ub = function() {
		return !!g
	};
	f.getData = function() {
		return {
			start: h,
			end: g,
			paused: k
		}
	};
	f.Rb = function() {
		u(!a || a.end === j || a.end.constructor === Number);
		c(!(a && a.start && (a.end === j || a.end > (a.paused || +new Date))) && e.U || k && e.T || e.M);
		p(l)
	};
	d.r.qb = function(a) {
		u("Invalid Date" !== a && (a === j || a.constructor === Number && !isNaN(a) && 999999999999 >= a - +new Date));
		h = +new Date;
		H(d.p.I, a, g);
		g = a;
		k = j;
		c(e.M, "start");
		p(l)
	};
	d.r.Ia = function() {
		f.va() && (h = j, H(d.p.I, j, g), k = g = j, c(e.U, "stop"))
	};
	d.r.Ja = function() {
		u(k === j || k.constructor === Number);
		if (g || h) {
			var a = k ? new Date - k : 0;
			g && g + a < new Date ? d.r.Ia() : k ? (u(k.constructor === Number), h = +new Date(h + a), g && (a = +new Date(g + a), H(d.p.I, a, j), g = a), k = j, c(e.M, "resume")) : (H(d.p.I, j, g), k = +new Date, c(e.T, "pause"))
		}
	};
	d.r.ga = function(a) {
		u("Invalid Date" !== a);
		f.va() ? d.r.Ia() : d.r.qb(a);
		p()
	};
	var p, v, x;
	p = function(a) {
		a && (x = v = l);
		a = f.Nb();
		if (f.va()) {
			x = l;
			var b = f.Mb();
			if (v === j || v !== b) v = b, H(d.p.Ra, b, a), 0 === b && f.Ub() && c(e.G)
		} else x && H(d.p.Ra, -2, a && 1 || a), x = n
	};
	var q;
	d.Q = function() {
		u(q === j);
		q = l;
		(function() {
			q && (p(), window.setTimeout(arguments.callee, 300))
		})();
		f.Rb()
	};
	d.P = function() {
		q = n
	}
}
var $a = {};
H(function() {
	var a = window.external && window.external.getUnityObject && window.external.getUnityObject(1);
	if (a) {
		var b = {};
		b.name = document.querySelector("meta[itemprop=name]").content;
		b.iconUrl = document.querySelector("link[rel=apple-touch-icon]").href;
		u(b.name && b.iconUrl);
		b.onInit = s();
		a.init(b)
	}
	$a.Gc = function() {
		var b = ab;
		a && a.Notification.showNotification(b, "", m)
	};
	$a.uc = function(b, d, e) {
		a && (a.Launcher.setCount(d), b !== j && b !== m ? a.Launcher.setProgress(b) : a.Launcher.clearProgress(), a.Launcher.setUrgent(e))
	};
	$a.rc = function(b, d) {
		a && (a.Launcher.removeActions(), d && (a.addAction("/Toggle Pause", function() {
			d.click()
		}), a.Launcher.addAction("Pause/Resume/Stop", function() {
			d.click()
		})), b.forEach(function(b) {
			var c = {
				2: "Countdown"
			};
			c[X] = "Alarm Clock";
			c[1] = "Stopwatch";
			a.addAction("/" + c[b.type], function() {
				b.onsubmit()
			});
			a.Launcher.addAction("Start " + c[b.type], function() {
				b.onsubmit()
			})
		}))
	}
});
var Y = {},
	bb = /Chrome/.test(navigator.userAgent) && /Chrome[^\s]*/.exec(navigator.userAgent)[0].replace("Chrome/", "").split(".").map(function(a, b) {
		return [parseInt(a, 10), [22, 0, 1215, 0][b] || 0]
	}).map(function(a) {
		if (a[0] > a[1]) return l;
		if (a[0] < a[1]) return n
	}).reduce(function(a, b) {
		return a === j ? b : a
	}) === n,
	cb = window.Windows && window.Windows && window.Windows.UI && window.Windows.UI.Notifications && window.WinJS && window.WinJS.Application,
	db, ab = "",
	eb = "",
	Z = {},
	fb = [];
fb.push(function() {
	function a(a, b) {
		e = a;
		var c = window.Windows.UI.Notifications,
			d = c.BadgeUpdateManager.getTemplateContent(c.BadgeTemplateType.badgeNumber);
		d.getElementsByTagName("badge")[0].setAttribute("value", a);
		d = new c.BadgeNotification(d);
		(b = new Date((new Date).getTime() + 1E4)) && (d.expirationTime = b);
		c.BadgeUpdateManager.createBadgeUpdaterForApplication().update(d)
	}
	if (cb) {
		var b, c, d;
		Z.B.R = function(f) {
			var h, g = [];
			6E3 <= f ? (g[0] = f / 3600 | 0, g[1] = "Hour" + (1 == g[0] ? "" : "s") + " " + (f % 3600 / 60 | 0) + " Min") : 60 < f ? (g[0] = f / 60 | 0, g[1] = "Minute" + (1 == g[0] ? "" : "s"), 300 > f && (f = f % 60 / 10 | 0, g[1] += " " + f + (1 > f ? "" : "0") + " Sec")) : (0 > f && (f = 0), g[0] = f, g[1] = "Second" + (1 == g[0] ? "" : "s"));
			f = g[0];
			h = g[1];
			g = (new Date).getTime() - 59E3;
			if (!b || !(b === f && c && c === h && d && d > g)) {
				b = f;
				c = h;
				d = (new Date).getTime();
				var g = window.Windows.UI.Notifications,
					k = g.TileUpdateManager.getTemplateContent(g.TileTemplateType.tileWideText03);
				k.getElementsByTagName("text")[0].appendChild(k.createTextNode(f + " " + h));
				var p = g.TileUpdateManager.getTemplateContent(g.TileTemplateType.tileSquareBlock),
					v = p.getElementsByTagName("text");
				v[0].appendChild(p.createTextNode(f));
				v[1].appendChild(p.createTextNode(h));
				f = k.importNode(p.getElementsByTagName("binding").item(0), l);
				k.getElementsByTagName("visual").item(0).appendChild(f);
				f = new g.TileNotification(k);
				h = new Date((new Date).getTime() + 6E4);
				f.expirationTime = h;
				g.TileUpdateManager.createTileUpdaterForApplication().update(f);
				e && a(e, h)
			}
		};
		var e;
		Z.B.Cb = function(b, c) {
			var d = {};
			d[c.T] = "paused";
			d[c.U] = "paused";
			d[c.M] = "playing";
			d[c.G] = "alert";
			a(d[b])
		};
		Z.B.ub = function(a) {
			var b = window.Windows.UI.Notifications.ToastNotificationManager.getTemplateContent(window.Windows.UI.Notifications.ToastTemplateType.toastText02);
			b.getElementsByTagName("text")[0].appendChild(b.createTextNode(a));
			var a = b.selectSingleNode("/toast"),
				c = b.createElement("audio");
			c.setAttribute("src", "ms-winsoundevent:Notification.Looping.Alarm");
			c.setAttribute("loop", "true");
			a.appendChild(c);
			a.setAttribute("duration", "long");
			b = new window.Windows.UI.Notifications.ToastNotification(b);
			window.Windows.UI.Notifications.ToastNotificationManager.createToastNotifier().show(b)
		};
		window.WinJS.Application.oncheckpoint = function() {
			window.Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().clear();
			window.Windows.UI.Notifications.BadgeUpdateManager.createBadgeUpdaterForApplication().clear()
		}
	}
});
fb.push(function() {
	O.Xa() && (Z.mc = function() {
		O.z() || I.get("disableNotification", function(a) {
			if (!a) {
				var b = O.W(ab, eb, la(0, 1), 1E4, function() {
					b();
					db && db()
				});
				Z.nc = b;
				ya(b)
			}
		})
	})
});
fb.push(function() {
	Z.Fc = function() {
		$a.Gc()
	}
});
fb.push(function() {
	window.chrome && (window.chrome.browserAction && window.chrome.browserAction.setBadgeText) && (Z.Db = function(a, b) {
		window.chrome.browserAction.setBadgeText({
			text: A.f.X(0 > a ? 0 : 1E3 * a, "text")
		});
		var c = b === j || b === m ? [0, 0, 255] : [parseInt(255 * b, 10), parseInt(255 * (1 - b), 10), 0],
			c = "#" + c.map(function(a) {
				a = a.toString(16);
				return 1 === a.length ? "0" + a : a
			}).reduce(function(a, b) {
				return a + b
			});
		window.chrome.browserAction.setBadgeBackgroundColor({
			color: c
		})
	})
});
Z.B = {};
window.external && (Z.zb = function() {
	try {
		window.external.msSiteModeActivate()
	} catch (a) {}
});
H(fb);
Y.state = function(a, b) {
	db = b;
	Z.K = {};
	var c = {},
		d = [];
	d.push(function() {
		Z.B.ub && (c.bb = function() {
			Z.B.ub(ab)
		})
	});
	d.push(function() {
		function b() {
			d || (d = document.getElementById("notify_sound"));
			if (!d) return l
		}
		var d;
		c.ic = function() {
			if (b()) return l;
			try {
				var c = function() {
					d.currentTime = 0;
					d.play()
				};
				c();
				var e = 5;
				d.Hb || (d.addEventListener("ended", function() {
					(a.Da || e--) && c()
				}, n), d.Hb = l)
			} catch (f) {
				return l
			}
		};
		c.xc = function() {
			b();
			try {
				d.pause()
			} catch (a) {}
		}
	});
	d.push(function() {
		var b = window.AudioContext || window.webkitAudioContext;
		if (b) {
			var d,
				e, f;
			c.kc = function() {
				if (!d) {
					e = new b;
					var c = e.sampleRate,
						x = 2 * Math.PI,
						q = e.createBuffer(1, 88473.6, c),
						w = q.getChannelData(0);
					for (i = 0; 88473.6 > i; ++i) {
						var r = i,
							B = 88473.6 / 100;
						w[i] = (r > B ? 1 - (r - B) / 88473.6 : r / B) * Math.sin(440 * x * i / c)
					}
					d = e.createBufferSource(0);
					d.buffer = q;
					d.loop = l;
					d.looping = l;
					d.noteOn(e.currentTime)
				}
				d.connect(e.destination);
				f && clearTimeout(f);
				a.Da || (f = setTimeout(function() {
					d.disconnect()
				}, 12E4))
			};
			c.zc = function() {
				d && d.disconnect()
			}
		}
	});
	d.push(function() {
		if (!cb) {
			var b = {};
			a.style.position = "relative";
			var d;
			a.ta = function() {
				d = l;
				a.style.height = "1px";
				a.style.width = "1px";
				a.style.top = "-10000px"
			};
			a.ta();
			a.show = function() {
				d = n;
				a.style.height = "";
				a.style.width = "";
				a.style.top = ""
			};
			a.kd = function() {
				return d
			};
			a.gc = function(b) {
				u(b.constructor === String);
				b = b.replace(" ", "");
				a.Sb = b;
				var c = /youtube\.com.*(?:\?|&)v=([a-zA-Z0-9\-_]+)/.exec(b) || /youtu.be\/([a-zA-Z0-9\-_]+)/.exec(b);
				a.ja = c ? c[1] : m;
				matches = /(?:\?|&)(?:start|t)=([^&#]*)/.exec(b);
				a.ia = matches ? matches[1] : m;
				a.Da = /repeat|replay|loop/.test(b);
				a.yb = !a.ja ? m : "http://www.youtube.com/embed/" + a.ja + "?enablejsapi=1" + (a.ia ? "&start=" + a.ia : "") + "&origin=http://" + location.host + "&rel=0&controls=0&hd=0&showinfo=0&html5=1"
			};
			a.Bd = s();
			var e, f;
			b.Fa = function(b) {
				if (!e) {
					e = document.createElement(L() ? "webview" : "iframe");
					e.style.border = "0";
					e.style.position = "absolute";
					e.style.left = "0";
					e.style.top = "0";
					e.style.width = "100%";
					e.style.height = "100%";
					var c = document.createElement("div");
					c.style.position = "absolute";
					c.style.left = "0";
					c.style.top = "0";
					c.style.width = "100%";
					c.style.height = "100%";
					c.style.cursor = "pointer";
					a.appendChild(e);
					a.appendChild(c)
				}
				b != e.src && (e.src = b);
				"WEBVIEW" === e.nodeName && (f = b, setTimeout(function() {
					e.src != f && (e.src = f)
				}, 0))
			};
			var v;
			b.N = function() {
				if (!v) {
					var a = e,
						b = function() {
							if (!fa) {
								try {
									a.contentWindow && a.contentWindow.postMessage(JSON.stringify({
										event: "listening",
										id: 1
									}), '*')
								} catch (c) {}
								setTimeout(b, 300)
							}
						},
						c = function() {
							u(fa);
							u(a.src);
							u(a.contentWindow);
							callStack.forEach(function(b) {
								var c = b[1];
								a.contentWindow.postMessage(JSON.stringify({
									event: "command",
									func: b[0],
									args: c ? [c] : [],
									id: 1
								}), '*')
							});
							callStack = []
						},
						d = function(a, b) {
							callStack.push([a, b]);
							fa && c()
						};
					if (typeof window.postMessage) {
						var f = {
								state: -4
							},
							g, h, p;
						window.addEventListener("message", function(b) {
							if (b && b.origin && /youtube\.com$/.test(b['origin']) && b.source === a.contentWindow && b.data) {
								b = JSON.parse(b.data);
								"onReady" === b.event && (fa = l, c());
								if (b.info) {
									var d = b.info.playerState;
									d !== j && (d !== m && d !== f.state) && (f.state = d, f.jb && f.jb(d), g && (g(), g = j));
									var e;
									b.info.videoData && (d = b.info.videoData.video_id, h !== d && (h = d, e = l));
									d = b.info.videoBytesTotal;
									d !== j && d !== p && (d < p && (e = l), p = d);
									if (e && f.onload) f.onload()
								}
								if (f.onerror && b.event && "onError" === b.event) f.onerror(b.error)
							}
						}, n);
						var fa;
						a.onload = function() {
							f.state = /youtube/.test(a.src) ? -2 : -3;
							fa = n; - 2 === f.state && b();
							if (f.onload) f.onload()
						};
						"WEBVIEW" === a.nodeName && (a.addEventListener("loadstop", a.onload), delete a.onload);
						callStack = [];
						f.ud = function() {
							d("mute")
						};
						f.Ec = function() {
							d("unMute")
						};
						f.pause = function() {
							d("pauseVideo")
						};
						f.play = function() {
							d("playVideo")
						};
						f.Gd = function(a) {
							d("seekTo", [a])
						};
						f.Hd = function(a) {
							d("setPlaybackQuality", a)
						};
						f.wc = function() {
							d("setVolume", 100)
						};
						v = f
					} else v = n
				}
				return v
			};
			a.xd = s();
			var x, q;
			c.lc = function() {
				function c() {
					if (q) try {
						var a = b.N();
						a.play();
						a.Ec();
						a.wc()
					} catch (d) {
						u(n)
					}
				}
				if (x || !a.yb) return l;
				b.Fa("about:blank");
				a.show();
				b.Fa(a.yb + "&autoplay=1");
				try {
					b.N()
				} catch (d) {
					u(n)
				}
				try {
					var e = b.N();
					e.jb = function(b) {
						0 === b && a.Da && setTimeout(e.play, 100)
					}
				} catch (f) {
					u(n)
				}
				q = setTimeout(function() {
					if (q) {
						var a;
						try {
							a = L() ? -2 === b.N().state : 1 === b.N().state
						} catch (c) {}
						a || (x = l, setTimeout(function() {
							x = n
						}, 15E3), Z.K.stop(), Z.K.lb())
					}
				}, 15E3);
				setTimeout(c, 0);
				setTimeout(c, 1E3);
				setTimeout(c, 2E3)
			};
			c.Ac = function() {
				a.ta();
				b.Fa("about:blank");
				q && window.clearTimeout(q);
				q = n
			};
			var w, r;
			c.jc = function() {
				w || (w = document.createElement("iframe"), w.style.display = "none", w.style.position = "absolute", w.style.border = "0", w.style.width = "100%", w.style.height = "100%", w.style.left = "0", a.appendChild(w));
				var b;
				a.ja ? b = "http://www.youtube.com/embed/" + a.ja + "?autoplay=1&autohide=1" + (a.ia ? "&start=" + a.ia : "") : (b = a.Sb, /^(http|ftp)s?:\/\//.test(b) || (b = "http://" + b));
				w.src = "about:blank";
				w.src = b;
				w.style.display = "";
				r = l;
				a.show()
			};
			c.yc = function() {
				r && (w.style.display = "none", w.src = "about:blank", a.ta(), r = n)
			}
		}
	});
	d.push(function() {
		var a = [
				[c.lc, c.Ac],
				[c.kc, c.zc],
				[c.ic, c.xc],
				[c.jc, c.yc]
			].filter(function(a) {
				return !(!a[0] || !a[1])
			}),
			b;
		Z.K.lb = function() {
			(!c.bb || c.bb()) && a.forEach(function(a) {
				if (!b && a && a[0] && !a[0]()) b = l;
				else a[1]()
			})
		};
		Z.K.stop = function() {
			b && (a.forEach(function(a) {
				a && a[1] && a[1]()
			}), b = n)
		}
	});
	H(d);
	var e = [];
	e.push(Z.K.lb);
	e.push(Z.zb);
	e.push(Z.mc);
	e.push(Z.Fc);
	var f;
	return function(a, b, c) {
		N.get(function(a) {
			ab = (c || "timer") + " " + ("de" === a && "abgelaufen" || "fr" === a && "termin\u00e9" || "finished");
			eb = "de" === a && "hier klicken, um das Klingeln zu stoppen" || "fr" === a && "cliquez ici pour arr\u00eater la sonnerie" || "click here to stop the alarm bell"
		});
		f !== a && (f === b.G && (H(Z.K.stop), H(Z.nc)), a === b.G && H(e, c), H(Z.B.Cb, a, b));
		f = a
	}
};
var gb = [];
gb.push(function(a, b) {
	$a.uc(b, 0 > a ? 0 : a, b && 0 >= a)
});
if (!bb) {
	var hb;
	gb.push(function(a, b) {
		var c = la(a, b);
		if (hb === j || hb !== c) hb = c, ja(c)
	})
}
gb.push(function(a, b, c) {
	a = -1 === a % 2 ? "\u266a" : A.f.X(0 > a ? 0 : 1E3 * a, "text");
	c && (a = a + "\u00a0|\u00a0" + c);
	L() && (a += "\u00a0\u00a0|\u00a0Timer Tab");
	document.title = a
});
gb.push(Z.B.R);
gb.push(Z.Db);
Y.Cc = function() {
	H.apply(m, [gb].concat([].slice.call(arguments)))
};
Y.V = {};
Y.V.add = s();
Y.V.remove = s();
Ya = function(a, b) {
	function c() {
		e.d.H && (ga(e.d.H, k && "0123456789-".split(""), l, "00:00", l), M() || za(c, 100, function() {
			e.d.H.style.fontSize = "0px"
		}))
	}

	function d(a) {
		q === X && (a && e.d.Na) && N.Tb(function(b) {
			e.d.Na.innerHTML = A.f.getTime(a, b)
		})
	}
	var e = this;
	e.d = {};
	var f = {},
		h, g, k = window.WinJS && window.WinJS.UI;
	h = function(a) {
		e.d.H && qa(function() {
			var b = A.f.X(0 > a ? 0 : 1E3 * a, "countdown");
			g !== b && (e.d.H.innerHTML = b, !e.d.H.vd && (!g || g.length !== b.length) && c(), g = b)
		})
	};
	var p = new Za(a);
	p.p.Ha = function() {
		H.apply(m, [f.Ha].concat([].slice.call(arguments)))
	};
	p.p.oa = function() {
		H.apply(m, [f.oa].concat([].slice.call(arguments)))
	};
	p.p.I = function() {
		H.apply(m, [f.I].concat([].slice.call(arguments)))
	};
	p.p.Ra = function(a, b) {
		h(a);
		H(f.ac, a, b)
	};
	f.Q = function() {
		h(0);
		p.Q()
	};
	f.pb = p.r.qb;
	f.rb = p.r.Ia;
	f.Ja = p.r.Ja;
	f.ga = p.r.ga;
	f.P = p.P;
	var v;
	f.Ha = function(a, b, c) {
		H(v, b, c, e.getName && H(e.getName, q));
		x = b === c.G;
		H(e.ec, a, b, c, q)
	};
	f.oa = function(a) {
		e.data && ("start" === a.n && (a.type = q), H(function() {
			e.data.bc(a)
		}))
	};
	f.I = function(a, b) {
		a && Y.V.add(a);
		b && Y.V.remove(b);
		d(a)
	};
	e.Vb = function() {
		f.ac = function(a, b) {
			Y.Cc(a, b, e.data && e.data.getName())
		};
		H(function() {
			$a.rc(e.d.v, e.d.Ba)
		})
	};
	var x, q = b;
	e.Q = function(b) {
		e.d.La && (e.d.La.onclick = f.rb, b || (v = Y.state(e.d.La, f.rb)));
		e.d.v && (1 === e.d.v.length && (q = e.d.v[0].type), e.d.v.forEach(function(a) {
			a.dc = function(b) {
				q = a.type;
				f.pb(b)
			}
		}));
		e.d.Ba && (e.d.Ba.onclick = function() {
			(q !== X || x) && f.Ja()
		});
		if (e.d.aa && e.d.eb) {
			var c = e.d.aa,
				g = function() {
					e.d.eb.setAttribute("data-name", c.value)
				};
			e.data && (c.value = e.data.getName() || "", g());
			c.onkeyup = function(a) {
				"enter" === G(a) ? c.blur() : (e.data && e.data.Ea(c.value), g())
			}
		}
		d(a.end);
		f.Q()
	};
	e.start = f.pb;
	e.ga = f.ga;
	e.P = f.P;
	return e
};
var ib = {};
Ca = function(a, b, c) {
	a.constructor === Array && (c = b, b = a, a = j);
	if (!(a && a.constructor === String || a === j) || !b || !(b.constructor === Array && c && c.constructor === Function)) throw "wrong usage";
	b = c.apply(m, b.map(function(a) {
		var b;
		if (!(b = ib[a])) throw "no module " + a;
		return b
	}));
	if (a) {
		if (!b || b.constructor !== Object && b.constructor !== Function) throw "module should be an object or a function";
		ib[a] = b
	}
};
Ca("data", [], function() {
	function a(a) {
		return a && (a.constructor === Number || a.constructor === String) && 13 === a.toString().length && !/[^\d]/.test(a) && (a.constructor === Number || parseInt(a, 10).toString() === a)
	}
	var b = {},
		c, d;
	b.ua = function(a) {
		function e() {
			ra("countdowns", function(e) {
				c = e;
				e.ma(function() {
					d();
					H(b.cc)
				});
				d();
				a()
			})
		}
		I.get("data_version", function(a) {
			"5" !== a && I.set("data_version", "5");
			a && "5" !== a ? I.clear(e) : e()
		})
	};
	b.Ma = function(b) {
		function e() {
			h(c);
			h(b);
			h(c[b]);
			h(c[b][x] === b);
			return c[b]
		}

		function f() {
			d();
			c.put()
		}

		function h(a) {
			if (!a) throw u(a, j, 0), "about to corrupt data";
		}
		var x = "d",
			q = ["lap", "start", "stop", "resume", "pause"];
		u(b === j || b.constructor === Number && a(b));
		var w = +new Date;
		if (!b) {
			var r = +new Date,
				B = Object.keys(c).map(function(a) {
					return parseInt(a, 10)
				});
			if (B.constructor !== Array || !B.indexOf) throw "avoing infinite loop";
			for (u(r.constructor === Number && (!B[0] || B[0].constructor === Number)); 0 <= B.indexOf(r);) r++;
			h(r.constructor === Number && a(r));
			h(c[r] === j);
			b = r;
			r = {};
			r[x] = b;
			c[b] = r;
			f()
		}
		return {
			getName: function() {
				return e()["0"]
			},
			ra: function() {
				return e().o
			},
			sa: function() {
				return e()["1"]
			},
			ob: function(a) {
				var b = e();
				h(a && (1 === a || a === X || 2 === a));
				b["1"] = a;
				f()
			},
			Ea: function(a) {
				var b = e();
				h(a === j || a.constructor === String);
				b["0"] = a;
				f()
			},
			Ga: function(a) {
				var b = e();
				h(a === j || a.constructor === String);
				b.o = a;
				f()
			},
			Pb: function() {
				var a = e();
				return {
					start: a["2"] && a["2"]["3"],
					end: a["2"] && a["2"]["4"],
					paused: a["2"] && a["2"]["5"]
				}
			},
			vc: function(b) {
				var c = e();
				h(b && (b.start === j || b.start.constructor === Number && a(b.start)) && (b.end === j || b.end.constructor === Number && a(b.end)) && (b.paused === j || b.paused.constructor === Number && a(b.paused) && b.paused > b.start) && (!b.paused || !b.end || b.paused < b.end));
				u(c.a);
				if (c.a) {
					var d = c.a[c.a.length - 1],
						g = c["2"] && c["2"]["3"],
						Xa = c["2"] && c["2"]["5"];
					u("stop" === d.b === (b.start === j && b.paused === j && b.end === j && g !== j));
					u("pause" === d.b === (b.start !== j && b.paused !== j && Xa === j && g !== j));
					u("start" !== d.b || b.start !== j && b.paused === j);
					u("resume" !== d.b || b.start !== j && b.paused === j && g !== j && Xa !== j)
				}
				c["2"] = {};
				c["2"]["3"] = b.start;
				c["2"]["4"] = b.end;
				c["2"]["5"] = b.paused;
				f()
			},
			qa: function(a) {
				var b = e();
				a || (a = this.sa());
				u(a === X || 2 === a);
				return !b["6"] || !b["6"][a] ? {} : {
					J: b["6"][a]["7"],
					C: b["6"][a]["8"],
					ea: b["6"][a]["9"]
				}
			},
			fa: function(a, b) {
				var c = e();
				b || (b = this.sa());
				h(b === X || 2 === b);
				h(a);
				for (var d in a) h(a[d] === j || a[d].constructor === Number && !isNaN(a[d]) && 0 <= a[d]);
				c["6"] || (c["6"] = {});
				c["6"][b] || (c["6"][b] = {});
				c["6"][b]["7"] = a.J;
				c["6"][b]["8"] = a.C;
				c["6"][b]["9"] = a.ea;
				f()
			},
			Ab: function(b) {
				var c = e();
				c.a || (c.a = []);
				var d = c.a[c.a.length - 1];
				h(b.time && b.time.constructor === Number && a(b.time) && b.time > w && (!d || b.time > d.c));
				h(-1 !== q.indexOf(b.n));
				if ("start" !== b.n)
					for (d = c.a.length - 1; 0 <= d; d--) {
						var g = c.a[d].b;
						if ("resume" === b.n) {
							if ("pause" === g) break;
							u("lap" === g)
						}
						u("stop" !== g);
						if ("start" === g) break
					}
				d = {};
				d.b = b.n;
				b.type && (d.m = b.type);
				d.c = b.time;
				c.a.push(d);
				f()
			},
			cd: function() {
				var a = e(),
					b = [],
					c;
				for (c in a.a) {
					var d = {};
					d.n = a.a[c].b;
					d.time = a.a[c].c;
					b.push(d)
				}
				return b
			},
			tc: function(b) {
				var c = e();
				c.g = {};
				var d = c.a.map(function(a) {
					return parseInt(a.c, 10)
				});
				h(b);
				for (var g in b) h(a(g)), h(b[g].$ === j || b[g].$.constructor === Number && a(b[g].$)), h(b[g].Ca === j || b[g].Ca.constructor === Boolean), h(b[g].O === j || b[g].O.constructor === Boolean), h(b[g].n === j || -1 !== q.indexOf(b[g].n)), h(b[g].O || -1 !== d.indexOf(parseInt(g, 10))), h(b[g].O === j || b[g].n), c.g[g] = {}, c.g[g].j = b[g].$, c.g[g].i = b[g].Ca, c.g[g].k = b[g].O, c.g[g].l = b[g].n;
				f()
			},
			dd: function() {
				var a = e(),
					b = {},
					c;
				for (c in a.g) b[c] = {}, a.g[c].i && (b[c].Ca = a.g[c].i), a.g[c].j && (b[c].$ = a.g[c].j), a.g[c].k && (b[c].O = a.g[c].k), a.g[c].l && (b[c].n = a.g[c].l);
				return b
			},
			Va: function() {
				e();
				return e()[x]
			},
			remove: function() {
				if (!c[e()[x]]) throw "Trying to remove a countdown that is not in data";
				delete c[e()[x]];
				f()
			}
		}
	};
	var e = {},
		f = {},
		h = [];
	d = function() {
		for (var d in f) delete f[d];
		for (d in c) u(13 === d.length), u(a(d)), e[d] || (e[d] = new b.Ma(parseInt(d, 10))), u(d === e[d].Va().toString()), f[d] = e[d];
		h.splice(0);
		var k = Object.keys(f).sort();
		for (d in k) h.push(f[k[d]]);
		H(b.ib, h)
	};
	return b
});

function jb(a) {
	var b = a.Pb(),
		c = new Ya(b, a.sa());
	c.data = {};
	var d = {};
	c.data.bc = function(b) {
		b.n && (b.history = {}, b.history.n = b.n, b.history.time = +new Date, "start" === b.n && (u(b.type), b.history.type = b.type), b.save = l, delete b.n);
		for (var c in b) d[c] = b[c];
		b.save && (d.remove ? a.remove() : (d.history !== j && a.Ab(d.history), d.type !== j && a.ob(d.type), d.state !== j && a.vc(d.state), d.Xb !== j && a.tc(d.Xb)), d = {})
	};
	c.data.id = a.Va();
	c.data.Sa = !b.start || b.end < +new Date;
	c.data.pc = function() {
		a.remove()
	};
	c.data.ra = function() {
		return a.ra()
	};
	c.data.Ga = function() {
		a.Ga.apply(a, arguments)
	};
	c.data.getName = function() {
		return a.getName()
	};
	c.data.Ea = function() {
		a.Ea.apply(a, arguments)
	};
	c.data.fa = function() {
		a.fa.apply(a, arguments)
	};
	c.data.qa = function() {
		return a.qa.apply(a, arguments)
	};
	return c
}
W = {};
Ca(["data"], function(a) {
	a.ib = function(a) {
		W.all = a.map(jb)
	};
	W.create = function(b, c) {
		var d = new a.Ma;
		d.ob(b);
		jb(d).start();
		c()
	};
	W.sc = function(b) {
		a.cc = b
	};
	W.ua = function(b) {
		a.ua(b)
	}
});
var kb;
try {
	kb = window.chrome.app.window.current()
} catch (lb) {}
if (window.chrome && window.chrome.app && window.chrome.app.runtime && !kb) {
	var mb = function() {
		window.chrome.app.window.create("index.html", {
			width: 800,
			height: 500,
			minWidth: 300,
			minHeight: 300,
			left: 100,
			top: 100,
			id: "main",
			singleton: l,
			type: "shell"
		})
	};
	window.chrome.alarms.onAlarm.addListener(function() {
		var a;
		try {
			a = window.chrome.app.window.current()
		} catch (b) {}
		a || mb()
	});
	window.chrome.app.runtime.onLaunched.addListener(mb)
} else window.onload = function() {
	if (/passtest/.test(location.href) || !/fallback/.test(location.href) && [].map && [].reduce && [].filter && document.querySelectorAll && document.documentElement.classList && ["Transition", "Transform", "BoxSizing"].map(function(a) {
		return ["Webkit", "Moz", "ms", "O", ""].map(function(b) {
			return document.documentElement.style[b + (b ? a : a[0].toLowerCase() + a.substring(1))] !== j
		}).reduce(function(a, b) {
			return a || b
		})
	}).reduce(function(a, b) {
		return a && b
	}) || !Aa("http://4b.timerintab.appspot.com/")) {
		var a = document.getElementById("alarmForm"),
			b = document.getElementById("timerForm"),
			c = document.getElementById("stopwForm"),
			d = document.getElementById("pause"),
			e = document.getElementById("yt"),
			f = document.getElementById("alarmTime"),
			h = [];
		if (ea) {
			var g = document.getElementById("time"),
				k = document.getElementById("allcontent"),
				p = document.getElementById("counter"),
				v = window.WinJS && window.WinJS.UI && window.WinJS.UI.processAll,
				x = H(function() {
					if (window.Oc) {
						var a = [];
						(new MutationObserver(function() {
							setTimeout(function() {
								a.forEach(function(a) {
									a()
								})
							}, 600)
						})).$b(document.documentElement, {
							attributes: l,
							Bb: ["class"]
						});
						return a
					}
				}),
				q = [];
			h.push(function() {
				function a() {
					var c = "#options" === location.hash;
					if (!!b !== !!c) {
						document.documentElement.classList[c ? "add" : "remove"]("fullscreenOptions");
						var d = {
							Wb: 2,
							gb: b === j
						};
						x && (d.D = x);
						ua(document.getElementById("settingsWrapper"), !c, d)
					}
					b = c
				}
				var b;
				ia(a);
				a()
			});
			h.push(function() {
				xa() && (window.chrome.browserAction.onClicked.addListener(function() {
					d.click()
				}), (new MutationObserver(function() {
					window.chrome.browserAction.setPopup({
						popup: document.body.classList.contains("ringing") ? "" : "index.html"
					})
				})).$b(document.body, {
					attributes: l,
					Bb: ["class"]
				}))
			});
			q.push(function() {
				if ((D().Ic || v) && document.querySelectorAll)
					for (var a = document.querySelectorAll('input[type="tel"]'), b = 0; b < a.length; b++) {
						var c = a[b];
						a[b].type = "number";
						c.value.length != window.getSelection().toString().length && (c.value = c.value.replace(/^0*(?=.)/, ""))
					}
			});
			q.push(function() {
				v && F(".inputSep{display:none}")
			});
			q.push(function() {
				var a = document.querySelectorAll && document.querySelectorAll("input");
				if (a) {
					for (var b = 0; b < a.length; b++) a[b].addEventListener("focus", function() {
						var a = this;
						setTimeout(function() {
							try {
								document.activeElement && (document.activeElement === a && document.activeElement.selectionStart !== j) && (document.activeElement.selectionStart = 0, document.activeElement.selectionEnd = document.activeElement.value.length)
							} catch (b) {}
						}, 0)
					}, n);
					if (D().Ya || v)
						for (b = 0; b < a.length; b++) a[b].addEventListener("mousedown", function() {
							document.activeElement.selectionStart !== j && (document.activeElement.selectionStart = 0, document.activeElement.selectionEnd = 0)
						}, n)
				}
			});
			h.push(function() {
				setTimeout(function() {
					F("       #vertical       {         -webkit-transition-property: top,margin!important;            -moz-transition-property: top,margin!important;             -ms-transition-property: top,margin!important;              -o-transition-property: top,margin!important;                 transition-property: top,margin!important;       }     ")
				}, 100)
			});
			q.push(function() {
				if (L() || M()) document.getElementById("opt_name").style.display = "none"
			});
			q.push(function() {
				if (L() || M()) document.getElementById("bg_option").style.display = "none"
			});
			q.push(function() {
				I.get("visits", function(a) {
					a = parseInt(a || "0", 10) + 1;
					I.set("visits", a.toString())
				});
				document.getElementById("settingsWrapper").addEventListener("touchstart", function() {
					document.documentElement.classList.add("showOptions")
				}, n);
				if (window.chrome && window.chrome.webstore && window.chrome.webstore.install && (!window.chrome || !window.chrome.app || !window.chrome.app.isInstalled) && !L()) {
					var a = document.getElementById("install");
					a.style.display = "";
					a.onclick = function() {
						window.chrome.webstore.install()
					}
				}
			});
			h.push(function() {
				if (e.wd) document.getElementById("goto").style.display = "none";
				else {
					var a;
					sa("goto_url", "http://youtu.be/PS5KAEgrtMA", function(b) {
						e.gc(b);
						a || (setTimeout(s(), 1600), a = l)
					})
				}
			});
			q.push(function() {
				function a() {
					I.get("disableNotification", function(a) {
						b.checked = !(O.z() || a)
					})
				}
				if (O.Xa()) {
					var b = document.getElementById("hNotiBox");
					a();
					b.onchange = function() {
						I.get("disableNotification", function(b) {
							b || O.z() ? (O.ba() ? O.ab && alert(O.ab) : O.z() && O.ca(a), I.set("disableNotification")) : I.set("disableNotification", "true");
							a()
						})
					}
				} else document.getElementById("hNoti").style.display = "none"
			});
			q.push(function() {
				document.getElementById("bg_url_container").appendChild(sa("bg_url", "", ta()))
			});
			q.push(function() {
				v && ["settingsWrapper", "hShare"].map(function(a) {
					return document.getElementById(a)
				}).forEach(function(a) {
					a.style.display = "none"
				})
			});
			q.push(function() {
				var a = {
					Pa: [d, f]
				};
				x && (a.D = x);
				va(p, "f", a)
			});
			q.push(function() {
				!L() && (!M() && !v) && setTimeout(function() {
					var a = document.createElement("iframe");
					a.src = "http://brillcdn.appspot.com/sf/tt.html";
					a.id = "files_iframe";
					a.style.display = "none";
					document.body.appendChild(a);
					Ba("UA-5263303-6", l);
					a = document.createElement("script");
					a.type = "text/javascript";
					a.async = l;
					a.src = "https://apis.google.com/js/plusone.js";
					var b = document.getElementsByTagName("script")[0];
					b.parentNode.insertBefore(a, b);
					a.onload = function() {
						setTimeout(function() {
							document.getElementById("plusone_wrapper").style.opacity = ""
						}, 500)
					};
					var c = document.getElementById("hTweet");
					c.src = "https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fwww.timer-tab.com&text=Well%20Designed%20Timer%20Web%20App,%20made%20by%20@brillout&count=horizontal";
					c.onload = function() {
						c.style.opacity = ""
					}
				}, 1600)
			});
			q.push(function() {
				var a = document.createElement("audio");
				a.id = "notify_sound";
				a.style.display = "none";
				[
					["mp3", "mpeg"],
					["ogg", "ogg"],
					["wav", "wav"]
				].forEach(function(b) {
					var c = a.appendChild(document.createElement("source"));
					c.type = "audio/" + b[1];
					c.src = "http://brillcdn.appspot.com/sf/ring." + b[0]
				});
				document.body.appendChild(a)
			});
			q.push(function() {
				function a() {
					qa(function() {
						var c = A.f.getTime(+new Date, document.documentElement.classList.contains("de") || document.documentElement.classList.contains("fr") ? n : l);
						b !== c && (b = c, g.innerHTML = c);
						window.setTimeout(a, 1E3)
					})
				}
				var b;
				a()
			});
			var w = document.getElementById("stopwButton"),
				r = [].slice.call(b.getElementsByTagName("input")).concat([].slice.call(a.getElementsByTagName("input"))),
				B = r[1];
			q.push(function() {
				function b(c) {
					c = c || window.event;
					if (!E(c)) {
						var d = c.charCode || c.which;
						48 <= d && 57 >= d ? this.parentNode === a && 2 <= this.value.length && (this.value = "") : 32 <= d && c.preventDefault()
					}
				}

				function c(a) {
					a = a || window.event;
					if (!E(a)) {
						var b = G(a),
							d = b === (v ? "down" : "up") || "+" === b;
						if (b === (v ? "up" : "down") || "-" === b || d) {
							var b = l,
								e = parseInt(this.value, 10);
							e || (e = 0);
							var d = e + (d ? 1 : -1),
								e = this.getAttribute("min"),
								f = this.getAttribute("max");
							e && f && (parseInt(f, 10) + 1 === d && (b = l, d = e), parseInt(e, 10) - 1 === d && (b = l, d = f));
							b && (a.preventDefault(), e && (d = Math.max(e, d)), f && (d = Math.min(f, d)), this.value = d, H(this.oninput));
							this.selectionStart !== j && (this.selectionStart = 0, this.selectionEnd = this.value.length);
							if (b) return n
						}
					}
				}
				window.onkeydown = function(a) {
					a = a || window.event;
					if (!E(a)) {
						var b = pa(a).type;
						"text" === b || "url" === b || (b = G(a), " " === b && a.preventDefault(), " " === b || "p" === b ? d.click() : "esc" === b && p.ha && p.ha())
					}
				};
				for (var e = D().L ? "keypress" : "keydown", f = 0; f < r.length; f++)(function() {
					"INPUT" === r[f].tagName && (r[f].addEventListener("keypress", b, n), r[f].addEventListener(e, c, n));
					var a = f;
					r[f].addEventListener(e, function(b) {
						b = b || window.event;
						if (!E(b)) {
							var c = G(b);
							if ("enter" === c && "SELECT" === this.tagName) {
								b.preventDefault();
								for (b = this; b && "FORM" !== b.tagName;) b = b.parentElement;
								u(b);
								b.onsubmit();
								return n
							}
							var d = "left" === c,
								c = "right" === c,
								e = this.value === j ? j : this.value.length;
							if (d && 0 <= a && !this.selectionStart && (!this.selectionEnd || this.selectionEnd === e) || c && a <= r.length - 1 && (this.selectionStart === e || !this.selectionStart) && (this.selectionEnd === e || this.selectionEnd === j)) {
								b.preventDefault();
								if (!(d && 0 === a)) {
									if ((D().Ya || v) && document.activeElement && document.activeElement.selectionStart !== j && document.activeElement === r[a]) document.activeElement.selectionStart = 0, document.activeElement.selectionEnd = 0;
									c && a === r.length - 1 ? w.focus() : r[a + (d ? -1 : 1)].focus()
								}
								return n
							}
						}
					}, n)
				})();
				w.addEventListener(e, function(a) {
					a = a || window.event;
					if (!E(a) && "left" === G(a)) return a.preventDefault(), r[r.length - 1].focus(), n
				}, n);
				w.onkeyup = function(a) {
					" " === G(a) && a.preventDefault()
				}
			});
			q.push(function() {
				function a() {
					if (document.activeElement && "INPUT" !== document.activeElement.tagName && "SELECT" !== document.activeElement.tagName && document.activeElement !== w) {
						var b = [window.scrollX, window.scrollY];
						c.focus();
						(window.scrollX !== b[0] || window.scrollY !== b[1]) && window.scrollTo.apply(m, b)
					}
				}
				var b = r.concat([w]);
				u(7 === b.length);
				for (var c = B, d = 0; d < b.length; d++) b[d].onfocus = function() {
					c !== this && p.ha && p.ha();
					c = this
				};
				window.onclick = function() {
					setTimeout(a, 1)
				}
			});
			h.push(function() {
				B.focus()
			});
			[].slice.call(document.querySelectorAll("button,#counter")).forEach(function(a) {
				a.addEventListener("click", function(a) {
					if (0 !== a.detail) return a.stopImmediatePropagation(), a.preventDefault(), n
				});
				a.addEventListener("mousedown", function() {
					a.click()
				});
				a.addEventListener("touchstart", function(b) {
					b.preventDefault();
					a.click()
				})
			});
			q.push(function() {
				N.get(function(a) {
					var b, c;
					a && "en" !== a && document.documentElement.classList.add(a);
					"de" === a ? (a = "Adresse von ", b = "YouTube Video", c = "Bild") : ("fr" === a ? (a = "adresse d'une ", b = "video YouTube") : (a = "address of ", b = "YouTube video"), c = "image");
					document.getElementById("feedback").href = "http://www.google.com/moderator/#15/e=1fde25&t=1fde25.41&v=24";
					document.getElementById("promo").href = "https://chrome.google.com/webstore/detail/facebook-unseen/dmdhkalcecemojegheiohcghkamlipof";
					[
						["goto_url", a + b],
						["bg_url", a + c]
					].forEach(function(a) {
						var b = document.getElementById(a[0]);
						b && b.setAttribute("placeholder", a[1])
					})
				})
			});
			q.push(function() {
				if (L()) {
					document.documentElement.style.overflow = "hidden";
					var a = Math.min(window.innerWidth / (k.scrollWidth + 1), window.innerHeight / k.scrollHeight);
					document.documentElement.style.zoom = a;
					za(arguments.callee, 100, function() {
						document.documentElement.style.zoom = ""
					})
				}
			});
			q.push(function() {
				function a() {
					window.clearTimeout(d);
					d = setTimeout(function() {
						b.forEach(function(a, b) {
							a.style.height = c[b]
						});
						900 <= window.innerWidth && b.forEach(function(a) {
							a.style.height = a.parentElement.scrollHeight + "px"
						})
					}, 300)
				}
				if (/MSIE/.test(navigator.userAgent) || window.opera) {
					document.documentElement.classList.add("noIcons");
					var b = [document.getElementById("middletable").firstChild, document.getElementById("vertical"),
							document.getElementById("head")
						],
						c = b.map(function(a) {
							C.e(a, "height")
						}),
						d;
					window.addEventListener("resize", a);
					a()
				}
			});
			H(q)
		}
		var y = function(g) {
				g.d = {};
				g.d.H = document.getElementById("counter");
				g.d.v = [
					[b, 2],
					[a, X],
					[c, 1]
				].map(function(a) {
					return Wa(a[0], a[1], g)
				});
				g.d.La = e;
				g.d.Ba = d;
				g.d.Na = f;
				g.d.aa = document.getElementById("opt_name_input");
				g.d.eb = document.getElementById("vertical");
				g.getName = function(a) {
					return g.d.aa && g.d.aa.value || window.getComputedStyle(g.d.v.filter(function(b) {
						return b.type === a
					})[0].getElementsByTagName("button")[0], ":after").content.replace(/'/g, "")
				};
				g.ec = function(a, b, c, d) {
					document.body.classList[b === c.U ? "add" : "remove"]("stoped");
					document.body.classList[b === c.T ? "add" : "remove"]("paused");
					document.body.classList[b === c.M ? "add" : "remove"]("running");
					document.body.classList[b === c.G ? "add" : "remove"]("ringing");
					document.documentElement.classList[2 === d ? "add" : "remove"]("timer");
					document.documentElement.classList[d === X ? "add" : "remove"]("alarm");
					document.documentElement.classList[1 === d ? "add" : "remove"]("stopw")
				};
				(!M() || xa()) && g.Vb();
				g.Q(M() && !xa());
				if (g.tb !== j) g.d.v.filter(function(a) {
					return a.type === g.tb
				})[0].onsubmit();
				ba && (H(h), ba = n)
			},
			ba = l;
		try {
			/doreset/.test(location.href.toLowerCase()) && (I.clear(), wontwork()), W.ua(function() {
				function a(b, c) {
					I.get("showed", function(a) {
						a = JSON.parse(a || "{}");
						c ? a[b] = c : delete a[b];
						I.set("showed", JSON.stringify(a))
					})
				}

				function b() {
					function a(b) {
						c = b;
						setTimeout(function() {
							y(c)
						}, 0)
					}
					W.all.forEach(function(a) {
						"tab-to-search" === a.data.ra() && a.data.Sa && a.data.pc()
					});
					var d;
					c && (c.P(), (d = W.all.filter(function(a) {
						return a.data.id === c.data.id
					})[0]) && a(d));
					if (!d) {
						var e;
						b: if ((e = ma().timer || window.decodeURIComponent(location.hash.replace("#", ""))) && /^\d+$/.test(e)) e = [j, parseInt(e, 10)];
							else {
								if (e && /^\d*(\+|:|\s|\.|\-)\d*$/.test(e)) {
									var f = e.split(/\+|:|\s|\.|\-/);
									e = parseInt(f[0], 10);
									f = parseInt(f[1], 10);
									if (24 > e && 0 <= e && 60 > f && 0 <= f) {
										e = [e, f];
										break b
									}
								}
								e = m
							}
						if (e) {
							var g = e[0] === j ? 2 : X,
								h = {
									J: e[0],
									C: e[1]
								};
							W.create(g, function() {
								ret = W.all[W.all.length - 1];
								u(ret);
								ret.data.fa(h);
								ret.data.Ga("tab-to-search");
								ret.tb = g;
								a(ret)
							});
							d = l
						} else d = n
					}
					d || d || I.get("showed", function(b) {
						for (var c = 0; c < W.all.length; c++)
							if (!(JSON.parse(b || "{}")[W.all[c].data.id] > +new Date - 2E3)) {
								d = W.all[c];
								break
							}
						d ? a(d) : W.create(1, function() {
							d = W.all[W.all.length - 1];
							u(d);
							a(d)
						})
					})
				}
				var c;
				W.sc(b);
				b();
				if (!M() && !L()) {
					(function() {
						c && a(c.data.id, +new Date);
						setTimeout(arguments.callee, 1E3)
					})();
					W.all.forEach(function(b) {
						b.data.Sa && a(b.data.id)
					});
					var d = W.all.map(function(a) {
						return a.data.id
					});
					I.get("showed", function(a) {
						var a = JSON.parse(a || "{}"),
							b = n,
							c;
						for (c in a) 0 > d.indexOf(parseInt(c, 10)) && (delete a[c], b = l);
						b && I.set("showed", JSON.stringify(a))
					});
					ya(function() {
						c && a(c.data.id)
					})
				}
			})
		} catch (na) {
			q = new Ya({
				start: +new Date
			}, 1), y(q), q.d.v[0].getElementsByTagName("input")[1].value = "10", q.d.v[1].getElementsByTagName("input")[0].value = A.q(A.add(new Date, 0, 10, 0).getHours()), q.d.v[1].getElementsByTagName("input")[1].value = A.q(A.add(new Date, 0, 10, 0).getMinutes())
		}
	}
};
