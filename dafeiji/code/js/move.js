function getStyleAttr(t, e) {
	return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
}

function animate(t, e, r) {
	clearInterval(t.timer), t.timer = setInterval(function() {
		var a = !0;
		for(var l in e) {
			var n = e[l],
				o = 0;
			"opacity" == l ? (o = 100 * parseFloat(getStyleAttr(t, l)), o = Math.round(o)) : (o = parseFloat(getStyleAttr(t, l)), o = Math.round(o));
			var i = (n - o) / 8;
			i = i > 0 ? Math.ceil(i) : Math.floor(i), o != n && (a = !1), "opacity" == l ? (t.style[l] = (o + i) / 100, t.style.filter = "alpha(opacity=" + (o + i) + ")") : t.style[l] = o + i + "px"
		}
		a && (clearInterval(t.timer), r && r())
	}, 30)
}