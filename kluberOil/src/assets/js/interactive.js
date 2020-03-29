! function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    function ri(n) {
        var t = n.length,
            r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }

    function ui(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if ("string" == typeof t) {
            if (ue.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }

    function hr(n, t) {
        do n = n[t]; while (n && 1 !== n.nodeType);
        return n
    }

    function oe(n) {
        var t = fi[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function cr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a), n.detachEvent("onload", a))
    }

    function a() {
        (u.addEventListener || "load" === event.type || "complete" === u.readyState) && (cr(), i.ready())
    }

    function yr(n, t, r) {
        if (void 0 === r && 1 === n.nodeType) {
            var u = "data-" + t.replace(vr, "-$1").toLowerCase();
            if (r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else r = void 0
        }
        return r
    }

    function ei(n) {
        for (var t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function pr(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando,
                l = n.nodeType,
                o = l ? i.cache : n,
                f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || void 0 !== r || "string" != typeof t) return f || (f = l ? n[h] = c.pop() || i.guid++ : h), o[f] || (o[f] = l ? {} : {
                toJSON: i.noop
            }), ("object" == typeof t || "function" == typeof t) && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), void 0 !== r && (e[i.camelCase(t)] = r), "string" == typeof t ? (s = e[t], null == s && (s = e[i.camelCase(t)])) : s = e, s
        }
    }

    function wr(n, t, u) {
        if (i.acceptData(n)) {
            var o, s, h = n.nodeType,
                f = h ? i.cache : n,
                e = h ? n[i.expando] : i.expando;
            if (f[e]) {
                if (t && (o = u ? f[e] : f[e].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t), t = (t in o) ? [t] : t.split(" ")), s = t.length; s--;) delete o[t[s]];
                    if (u ? !ei(o) : !i.isEmptyObject(o)) return
                }(u || (delete f[e].data, ei(f[e]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[e] : f[e] = null)
            }
        }
    }

    function vt() {
        return !0
    }

    function it() {
        return !1
    }

    function dr() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function gr(n) {
        var i = nu.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function f(n, t) {
        var e, u, s = 0,
            r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], e = n.childNodes || n; null != (u = e[s]); s++) !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function be(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }

    function eu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function ou(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type, n
    }

    function su(n) {
        var t = ye.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function li(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function hu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function ke(n, t) {
        var u, e, f;
        if (1 === t.nodeType) {
            if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events) i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            "script" === u && t.text !== n.text ? (ou(t).text = n.text, su(t)) : "object" === u ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === u && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === u ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === u || "textarea" === u) && (t.defaultValue = n.defaultValue)
        }
    }

    function cu(t, r) {
        var u = i(r.createElement(t)).appendTo(r.body),
            f = n.getDefaultComputedStyle ? n.getDefaultComputedStyle(u[0]).display : i.css(u[0], "display");
        return u.detach(), f
    }

    function lu(n) {
        var r = u,
            t = ai[n];
        return t || (t = cu(n, r), "none" !== t && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ot[0].contentWindow || ot[0].contentDocument).document, r.write(), r.close(), t = cu(n, r), ot.detach()), ai[n] = t), t
    }

    function vu(n, t) {
        return {
            get: function() {
                var i = n();
                if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function wu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = pu.length; i--;)
            if (t = pu[i] + r, t in n) return t;
        return u
    }

    function bu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && et(r) && (e[u] = i._data(r, "olddisplay", lu(r.nodeName)))) : e[u] || (o = et(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }

    function ku(n, t, i) {
        var r = to.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function du(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function gu(n, t, u) {
        var o = !0,
            f = "width" === t ? n.offsetWidth : n.offsetHeight,
            e = k(n),
            s = r.boxSizing() && "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= f || null == f) {
            if (f = d(n, t, e), (0 > f || null == f) && (f = n.style[t]), yt.test(f)) return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + du(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function tf() {
        return setTimeout(function() {
            rt = void 0
        }), rt = i.now()
    }

    function bt(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function rf(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function eo(n, t, u) {
        var f, l, p, a, o, b, y, w, c = this,
            v = {},
            s = n.style,
            h = n.nodeType && et(n),
            e = i._data(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, b = o.empty.fire, o.empty.fire = function() {
            o.unqueued || b()
        }), o.unqueued++, c.always(function() {
            c.always(function() {
                o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire()
            })
        }));
        1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], y = i.css(n, "display"), w = lu(n.nodeName), "none" === y && (y = w), "inline" === y && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout && "inline" !== w ? s.zoom = 1 : s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden", r.shrinkWrapBlocks() || c.always(function() {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (l = t[f], uo.exec(l)) {
                if (delete t[f], p = p || "toggle" === l, l === (h ? "hide" : "show")) {
                    if ("show" !== l || !e || void 0 === e[f]) continue;
                    h = !0
                }
                v[f] = e && e[f] || i.style(n, f)
            }
        if (!i.isEmptyObject(v)) {
            e ? "hidden" in e && (h = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !h);
            h ? i(n).show() : c.done(function() {
                i(n).hide()
            });
            c.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in v) i.style(n, t, v[t])
            });
            for (f in v) a = rf(h ? e[f] : 0, f, c), f in e || (e[f] = a.start, h && (a.end = a.start, a.start = "width" === f || "height" === f ? 1 : 0))
        }
    }

    function oo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function uf(n, t, r) {
        var h, e, o = 0,
            l = wt.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (e) return !1;
                for (var s = rt || tf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: rt || tf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; r > i; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            s = u.props;
        for (oo(s, u.opts.specialEasing); l > o; o++)
            if (h = wt[o].call(u, n, s, u.opts)) return h;
        return i.map(s, rf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function vf(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) "+" === u.charAt(0) ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function yf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === bi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function vo(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0] in i) u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u) return (u !== r[0] && r.unshift(u), i[u])
    }

    function yo(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function di(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || wo.test(n) ? u(n, i) : di(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) di(n + "[" + f + "]", t[f], r, u)
    }

    function wf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function ns() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function bf(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var c = [],
        l = c.slice,
        ir = c.concat,
        ti = c.push,
        rr = c.indexOf,
        ct = {},
        gf = ct.toString,
        tt = ct.hasOwnProperty,
        ii = "".trim,
        r = {},
        ur = "1.11.0",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ie = /-([\da-z])/gi,
        re = function(n, t) {
            return t.toUpperCase()
        },
        p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, ff, of , sf, dt, gi, ni, nr, tr, kf, df;
    i.fn = i.prototype = {
        jquery: ur,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[n] : l.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ti,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
            if (null != (o = arguments[u]))
                for (f in o) r = n[f], t = o[f], n !== t && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        },
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return n - parseFloat(n) >= 0
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            if (r.ownLast)
                for (t in n) return tt.call(n, t);
            for (t in n);
            return void 0 === t || tt.call(n, t)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ct[gf.call(n)] || "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function(n) {
            return n.replace(te, "ms-").replace(ie, re)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                f = n.length,
                e = ri(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i), u === !1) break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break;
            return n
        },
        trim: ii && !ii.call("ï»¿Â ") ? function(n) {
            return null == n ? "" : ii.call(n)
        } : function(n) {
            return null == n ? "" : (n + "").replace(ne, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ri(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (rr) return rr.call(t, n, i);
                for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; r > i;) n[u++] = t[i++];
            if (r !== r)
                while (void 0 !== t[i]) n[u++] = t[i++];
            return n.length = u, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                e = n.length,
                o = ri(n),
                f = [];
            if (o)
                for (; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), null != u && f.push(u);
            return ir.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return "string" == typeof t && (f = n[t], t = n, n = f), i.isFunction(n) ? (u = l.call(arguments, 2), r = function() {
                return n.apply(t || this, u.concat(l.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
        function u(n, t, i, u) {
            var w, h, c, v, k, y, d, a, nt, g;
            if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || "string" != typeof n) return i;
            if (1 !== (v = t.nodeType) && 9 !== v) return [];
            if (l && !u) {
                if (w = or.exec(n))
                    if (c = w[1]) {
                        if (9 === v) {
                            if (h = t.getElementById(c), !h || !h.parentNode) return i;
                            if (h.id === c) return i.push(h), i
                        } else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && et(t, h) && h.id === c) return i.push(h), i
                    } else {
                        if (w[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                        if ((c = w[3]) && r.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(c)), i
                    }
                if (r.qsa && (!o || !o.test(n))) {
                    if (a = d = f, nt = t, g = 9 === v && n, 1 === v && "object" !== t.nodeName.toLowerCase()) {
                        for (y = vt(n), (d = t.getAttribute("id")) ? a = d.replace(sr, "\\$&") : t.setAttribute("id", a), a = "[id='" + a + "'] ", k = y.length; k--;) y[k] = a + yt(y[k]);
                        nt = gt.test(n) && ii(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g) try {
                        return b.apply(i, nt.querySelectorAll(g)), i
                    } catch (tt) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return vr(n.replace(lt, "$1"), t, i, u)
        }

        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function h(n) {
            return n[f] = !0, n
        }

        function c(n) {
            var t = e.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ti(n, i) {
            for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
        }

        function pi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function hr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }

        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function tt(n) {
            return h(function(t) {
                return t = +t, h(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ii(n) {
            return n && typeof n.getElementsByTagName !== ut && n
        }

        function wi() {}

        function vt(n, i) {
            var e, f, s, o, r, h, c, l = hi[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = nr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = tr.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(lt, " ")
                }), r = r.slice(e.length));
                for (o in t.filter)(f = at[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : hi(n, h).slice(0)
        }

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
            return i
        }

        function ri(n, t, i) {
            var r = t.dir,
                u = i && "parentNode" === r,
                e = bi++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u) return n(t, i, f)
            } : function(t, i, o) {
                var s, h, c = [a, e];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2];
                            if (h[r] = c, c[2] = n(t, i, o)) return !0
                        }
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    k = f || ar(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || !f && t ? k : pt(k, p, n, o, s),
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
            })
        }

        function ei(n) {
            for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                    return n === s
                }, c, !0), a = ri(function(n) {
                    return nt.call(s, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                }]; o > i; i++)
                if (u = t.relative[n[i].type]) e = [ri(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; o > r; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(lt, "$1"), u, r > i && ei(n.slice(i, r)), o > r && ei(n = n.slice(r)), o > r && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }

        function lr(n, i) {
            var r = i.length > 0,
                f = n.length > 0,
                o = function(o, s, h, c, l) {
                    var y, d, w, k = 0,
                        v = "0",
                        g = o && [],
                        p = [],
                        nt = ht,
                        tt = o || f && t.find.TAG("*", l),
                        it = a += null == nt ? 1 : Math.random() || .1,
                        rt = tt.length;
                    for (l && (ht = s !== e && s); v !== rt && null != (y = tt[v]); v++) {
                        if (f && y) {
                            for (d = 0; w = n[d++];)
                                if (w(y, s, h)) {
                                    c.push(y);
                                    break
                                }
                            l && (a = it)
                        }
                        r && ((y = !w && y) && k--, o && g.push(y))
                    }
                    if (k += v, r && v !== k) {
                        for (d = 0; w = i[d++];) w(g, p, s, h);
                        if (o) {
                            if (k > 0)
                                while (v--) g[v] || p[v] || (p[v] = di.call(c));
                            p = pt(p)
                        }
                        b.apply(c, p);
                        l && !o && p.length > 0 && k + i.length > 1 && u.uniqueSort(c)
                    }
                    return l && (a = it, ht = nt), g
                };
            return r ? h(o) : o
        }

        function ar(n, t, i) {
            for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
            return i
        }

        function vr(n, i, u, f) {
            var s, e, o, c, a, h = vt(n);
            if (!f && 1 === h.length) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && r.getById && 9 === i.nodeType && l && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], !i) return u;
                    n = n.slice(e.shift().value.length)
                }
                for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[c = o.type]) break;
                    if ((a = t.find[c]) && (f = a(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && yt(e), !n) return b.apply(u, f), u;
                        break
                    }
                }
            }
            return wt(n, h)(f, i, !l, u, gt.test(n) && ii(i.parentNode) || i), u
        }
        var it, r, t, st, oi, wt, ht, y, rt, p, e, v, l, o, g, ct, et, f = "sizzle" + -new Date,
            s = n.document,
            a = 0,
            bi = 0,
            si = ni(),
            hi = ni(),
            ci = ni(),
            bt = function(n, t) {
                return n === t && (rt = !0), 0
            },
            ut = "undefined",
            li = -2147483648,
            ki = {}.hasOwnProperty,
            w = [],
            di = w.pop,
            gi = w.push,
            b = w.push,
            ai = w.slice,
            nt = w.indexOf || function(n) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (this[t] === n) return t;
                return -1
            },
            kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            i = "[\\x20\\t\\r\\n\\f]",
            ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            vi = ft.replace("w", "w#"),
            yi = "\\[" + i + "*(" + ft + ")" + i + "*(?:([*^$|!~]?=)" + i + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + vi + ")|)|)" + i + "*\\]",
            dt = ":(" + ft + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + yi.replace(3, 8) + ")*)|.*)\\)|)",
            lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
            nr = new RegExp("^" + i + "*," + i + "*"),
            tr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
            ir = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
            rr = new RegExp(dt),
            ur = new RegExp("^" + vi + "$"),
            at = {
                ID: new RegExp("^#(" + ft + ")"),
                CLASS: new RegExp("^\\.(" + ft + ")"),
                TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + yi),
                PSEUDO: new RegExp("^" + dt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + kt + ")$", "i"),
                needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
            },
            fr = /^(?:input|select|textarea|button)$/i,
            er = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            gt = /[+~]/,
            sr = /'|\\/g,
            k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
            d = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            b.apply(w = ai.call(s.childNodes), s.childNodes);
            w[s.childNodes.length].nodeType
        } catch (yr) {
            b = {
                apply: w.length ? function(n, t) {
                    gi.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        r = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        p = u.setDocument = function(n) {
            var a, u = n ? n.ownerDocument || n : s,
                h = u.defaultView;
            return u !== e && 9 === u.nodeType && u.documentElement ? (e = u, v = u.documentElement, l = !oi(u), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function() {
                p()
            }, !1) : h.attachEvent && h.attachEvent("onunload", function() {
                p()
            })), r.attributes = c(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), r.getElementsByTagName = c(function(n) {
                return n.appendChild(u.createComment("")), !n.getElementsByTagName("*").length
            }), r.getElementsByClassName = ot.test(u.getElementsByClassName) && c(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", 2 === n.getElementsByClassName("i").length
            }), r.getById = c(function(n) {
                return v.appendChild(n).id = f, !u.getElementsByName || !u.getElementsByName(f).length
            }), r.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById !== ut && l) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = r.getElementsByTagName ? function(n, t) {
                if (typeof t.getElementsByTagName !== ut) return t.getElementsByTagName(n)
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++]) 1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = r.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName !== ut && l) return t.getElementsByClassName(n)
            }, g = [], o = [], (r.qsa = ot.test(u.querySelectorAll)) && (c(function(n) {
                n.innerHTML = "<select t=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[t^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                n.querySelectorAll(":checked").length || o.push(":checked")
            }), c(function(n) {
                var t = u.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (r.matchesSelector = ot.test(ct = v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)) && c(function(n) {
                r.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                g.push("!=", dt)
            }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), a = ot.test(v.compareDocumentPosition), et = a || ot.test(v.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, bt = a ? function(n, t) {
                if (n === t) return rt = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !r.sortDetached && t.compareDocumentPosition(n) === i ? n === u || n.ownerDocument === s && et(s, n) ? -1 : t === u || t.ownerDocument === s && et(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : 4 & i ? -1 : 1)
            } : function(n, t) {
                if (n === t) return rt = !0, 0;
                var i, r = 0,
                    o = n.parentNode,
                    h = t.parentNode,
                    f = [n],
                    e = [t];
                if (!o || !h) return n === u ? -1 : t === u ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                if (o === h) return pi(n, t);
                for (i = n; i = i.parentNode;) f.unshift(i);
                for (i = t; i = i.parentNode;) e.unshift(i);
                while (f[r] === e[r]) r++;
                return r ? pi(f[r], e[r]) : f[r] === s ? -1 : e[r] === s ? 1 : 0
            }, u) : e
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== e && p(n), t = t.replace(ir, "='$1']"), !(!r.matchesSelector || !l || g && g.test(t) || o && o.test(t))) try {
                var i = ct.call(n, t);
                if (i || r.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
            } catch (f) {}
            return u(t, e, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== e && p(n), et(n, t)
        };
        u.attr = function(n, i) {
            (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()],
                u = f && ki.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : void 0;
            return void 0 !== u ? u : r.attributes || !l ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var u, f = [],
                t = 0,
                i = 0;
            if (rt = !r.detectDuplicates, y = !r.sortStable && n.slice(0), n.sort(bt), rt) {
                while (u = n[i++]) u === n[i] && (t = f.push(i));
                while (t--) n.splice(f[t], 1)
            }
            return y = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: at,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d), n[3] = (n[4] || n[5] || "").replace(k, d), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[5] && n[2];
                    return at.CHILD.test(n[0]) ? null : (n[3] && void 0 !== n[4] ? n[2] = n[4] : t && rr.test(t) && (i = vt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                            p = t.parentNode,
                            g = e && t.nodeName.toLowerCase(),
                            d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                    if (1 === c.nodeType && ++l && c === t) {
                                        k[n] = [a, y, l];
                                        break
                                    }
                            } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt.call(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: h(function(n) {
                    var i = [],
                        r = [],
                        t = wt(n.replace(lt, "$1"));
                    return t[f] ? h(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n, t(i, null, f, r), !r.pop()
                    }
                }),
                has: h(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: h(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }),
                lang: h(function(n) {
                    return ur.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === v
                },
                focus: function(n) {
                    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return er.test(n.nodeName)
                },
                input: function(n) {
                    return fr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; t > i; i += 2) n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; t > i; i += 2) n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[it] = hr(it);
        for (it in {
                submit: !0,
                reset: !0
            }) t.pseudos[it] = cr(it);
        return wi.prototype = t.filters = t.pseudos, t.setFilters = new wi, wt = u.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = ci[n + " "];
            if (!i) {
                for (t || (t = vt(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = ci(n, lr(e, u))
            }
            return i
        }, r.sortStable = f.split("").sort(bt).join("") === f, r.detectDuplicates = !!rt, p(), r.sortDetached = c(function(n) {
            return 1 & n.compareDocumentPosition(e.createElement("div"))
        }), c(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ti("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), r.attributes && c(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ti("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), c(function(n) {
            return null == n.getAttribute("disabled")
        }) || ti(kt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext,
        er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ue = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [],
                u = this,
                f = u.length;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; f > t; t++)
                    if (i.contains(u[t], this)) return !0
            }));
            for (t = 0; f > t; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        },
        filter: function(n) {
            return this.pushStack(ui(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ui(this, n || [], !0))
        },
        is: function(n) {
            return !!ui(this, "string" == typeof n && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    var ft, u = n.document,
        fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ee = i.fn.init = function(n, t) {
            var r, f;
            if (!n) return this;
            if ("string" == typeof n) {
                if (r = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : fe.exec(n), !r || !r[1] && t) return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n);
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), er.test(r[1]) && i.isPlainObject(t))
                        for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (f = u.getElementById(r[2]), f && f.parentNode) {
                    if (f.id !== r[2]) return ft.find(n);
                    this.length = 1;
                    this[0] = f
                }
                return this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof ft.ready ? ft.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
    ee.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var f = [], u = n[t]; u && 9 !== u.nodeType && (void 0 === r || 1 !== u.nodeType || !i(u).is(r));) 1 === u.nodeType && f.push(u), u = u[t];
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (sr[n] || (f = i.unique(f)), or.test(n) && (f = f.reverse())), this.pushStack(f)
        }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? fi[n] || oe(n) : i.extend({}, n);
        var o, u, h, f, e, c, t = [],
            r = !n.once && [],
            l = function(i) {
                for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                    if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                        u = !1;
                        break
                    }
                o = !1;
                t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
            },
            s = {
                add: function() {
                    if (t) {
                        var r = t.length;
                        ! function e(r) {
                            i.each(r, function(r, u) {
                                var f = i.type(u);
                                "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                            })
                        }(arguments);
                        o ? f = t.length : u && (c = r, l(u))
                    }
                    return this
                },
                remove: function() {
                    return t && i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (f >= u && f--, e >= u && e--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
                },
                empty: function() {
                    return t = [], f = 0, this
                },
                disable: function() {
                    return t = r = u = void 0, this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return r = void 0, u || s.disable(), this
                },
                locked: function() {
                    return !r
                },
                fireWith: function(n, i) {
                    return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = l.call(arguments),
                r = u.length,
                e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                f = 1 === e ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? l.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!u.body) return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (lt.resolveWith(u, [i]), i.fn.trigger && i(u).trigger("ready").off("ready"))
            }
        }
    });
    i.ready.promise = function(t) {
        if (!lt)
            if (lt = i.Deferred(), "complete" === u.readyState) setTimeout(i.ready);
            else if (u.addEventListener) u.addEventListener("DOMContentLoaded", a, !1), n.addEventListener("load", a, !1);
        else {
            u.attachEvent("onreadystatechange", a);
            n.attachEvent("onload", a);
            var r = !1;
            try {
                r = null == n.frameElement && u.documentElement
            } catch (e) {}
            r && r.doScroll && ! function f() {
                if (!i.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    cr();
                    i.ready()
                }
            }()
        }
        return lt.promise(t)
    };
    o = "undefined";
    for (lr in i(r)) break;
    r.ownLast = "0" !== lr;
    r.inlineBlockNeedsLayout = !1;
    i(function() {
            var t, n, i = u.getElementsByTagName("body")[0];
            i && (t = u.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", n = u.createElement("div"), i.appendChild(t).appendChild(n), typeof n.style.zoom !== o && (n.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (r.inlineBlockNeedsLayout = 3 === n.offsetWidth) && (i.style.zoom = 1)), i.removeChild(t), t = n = null)
        }),
        function() {
            var n = u.createElement("div");
            if (null == r.deleteExpando) {
                r.deleteExpando = !0;
                try {
                    delete n.test
                } catch (t) {
                    r.deleteExpando = !1
                }
            }
            n = null
        }();
    i.acceptData = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()],
            r = +n.nodeType || 1;
        return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    };
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ei(n)
        },
        data: function(n, t, i) {
            return pr(n, t, i)
        },
        removeData: function(n, t) {
            return wr(n, t)
        },
        _data: function(n, t, i) {
            return pr(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return wr(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0],
                o = r && r.attributes;
            if (void 0 === n) {
                if (this.length && (e = i.data(r), 1 === r.nodeType && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--;) u = o[f].name, 0 === u.indexOf("data-") && (u = i.camelCase(u.slice(5)), yr(r, u, e[u]));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? yr(r, n, i.data(r, n)) : void 0
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n) return (t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || [])
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1,
                e = i.Deferred(),
                u = this,
                o = this.length,
                s = function() {
                    --f || e.resolveWith(u, [u])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
            return s(), e.promise(t)
        }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = ["Top", "Right", "Bottom", "Left"],
        et = function(n, t) {
            return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
        },
        b = i.access = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        },
        oi = /^(?:checkbox|radio)$/i;
    ! function() {
        var i = u.createDocumentFragment(),
            n = u.createElement("div"),
            t = u.createElement("input");
        if (n.setAttribute("className", "t"), n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a>", r.leadingWhitespace = 3 === n.firstChild.nodeType, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = "<:nav><\/:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function() {
                r.noCloneEvent = !1
            }), n.cloneNode(!0).click()), null == r.deleteExpando) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
        i = n = t = null
    }(),
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    }();
    var si = /^(?:input|select|textarea)$/i,
        se = /^key/,
        he = /^(?:mouse|contextmenu)|click/,
        br = /^(?:focusinfocus|focusoutblur)$/,
        kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
                        if (typeof i !== o && (!n || i.event.triggered !== n.type)) return i.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = n), t = (t || "").match(h) || [""], b = t.length; b--;) w = kr.exec(t[b]) || [], e = d = w[1], k = (w[2] || "").split(".").sort(), e && (s = i.event.special[e] || {}, e = (f ? s.delegateType : s.bindType) || e, s = i.event.special[e] || {}, l = i.extend({
                    type: e,
                    origType: d,
                    data: u,
                    handler: r,
                    guid: r.guid,
                    selector: f,
                    needsContext: f && i.expr.match.needsContext.test(f),
                    namespace: k.join(".")
                }, p), (a = y[e]) || (a = y[e] = [], a.delegateCount = 0, s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = r.guid)), f ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;)
                    if (s = kr.exec(t[p]) || [], e = k = s[1], w = (s[2] || "").split(".").sort(), e) {
                        for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || s && !s.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                        b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                    } else
                        for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u],
                s = tt.call(t, "type") ? t.type : t,
                v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = h = f = f || u, 3 !== f.nodeType && 8 !== f.nodeType && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, "object" == typeof t && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = f), r = null == r ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s, br.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o), h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0;
                    (o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
                if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = void 0;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [],
                h = l.call(arguments),
                c = (i._data(this, "events") || {})[n.type] || [],
                u = i.event.special[n.type] || {};
            if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c), e = 0;
                    (r = s[e++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = r.elem, o = 0;
                        (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), void 0 !== f && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, h = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && (!n.button || "click" !== n.type))
                for (; r != this; r = r.parentNode || this)
                    if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                        for (u = [], o = 0; s > o; o++) e = t[o], f = e.selector + " ", void 0 === u[f] && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(e);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }), h
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, s, r = n.type,
                f = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = he.test(r) ? this.mouseHooks : se.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
            return n.target || (n.target = f.srcElement || u), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button,
                    o = t.fromElement;
                return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== dr() && this.focus) try {
                        return this.focus(), !1
                    } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === dr() && this.blur) return (this.blur(), !1)
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && "checkbox" === this.type && this.click) return (this.click(), !1)
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && (n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault()) ? vt : it) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
    };
    i.Event.prototype = {
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = vt;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = vt;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = vt;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    r.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit", function(n) {
                var r = n.target,
                    t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : void 0;
                t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }), i._data(t, "submitBubbles", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit")
        }
    });
    r.changeBubbles || (i.event.special.change = {
        setup: function() {
            return si.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })), !1) : void i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "changeBubbles", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"), !si.test(this.nodeName)
        }
    });
    r.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var o, e;
            if ("object" == typeof n) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (o in n) this.on(o, t, r, n[o], f);
                return this
            }
            if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1) u = it;
            else if (!u) return this;
            return 1 === f && (e = u, u = function(n) {
                return i().off(n), e.apply(this, arguments)
            }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = it), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ce = / jQuery\d+="(?:null|\d+)"/g,
        tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"),
        hi = /^\s+/,
        iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ru = /<([\w:]+)/,
        uu = /<tbody/i,
        le = /<|&#?\w+;/,
        ae = /<(?:script|style|link)/i,
        ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fu = /^$|\/(?:java|ecma)script/i,
        ye = /^true\/(.*)/,
        pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        s = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            area: [1, "<map>", "<\/map>"],
            param: [1, "<object>", "<\/object>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
        },
        we = gr(u),
        ci = we.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML, ci.removeChild(s = ci.firstChild)), !(r.noCloneEvent && r.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = f(s), h = f(n), o = 0; null != (c = h[o]); ++o) e[o] && ke(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n), e = e || f(s), o = 0; null != (c = h[o]); o++) hu(c, e[o]);
                else hu(n, s);
            return e = f(s, "script"), e.length > 0 && li(e, !l && f(n, "script")), e = h = c = null, s
        },
        buildFragment: function(n, t, u, e) {
            for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; k > y; y++)
                if (o = n[y], o || 0 === o)
                    if ("object" === i.type(o)) i.merge(l, o.nodeType ? [o] : o);
                    else if (le.test(o)) {
                for (h = h || v.appendChild(t.createElement("div")), p = (ru.exec(o) || ["", ""])[1].toLowerCase(), a = s[p] || s._default, h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2], c = a[0]; c--;) h = h.lastChild;
                if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])), !r.tbody)
                    for (o = "table" !== p || uu.test(o) ? "<table>" !== a[1] || uu.test(o) ? 0 : h : h.firstChild, c = o && o.childNodes.length; c--;) i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
                for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = v.lastChild
            } else l.push(t.createTextNode(o));
            for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), be), y = 0; o = l[y++];)
                if ((!e || -1 === i.inArray(o, e)) && (b = i.contains(o.ownerDocument, o), h = f(v.appendChild(o), "script"), b && li(h), u))
                    for (c = 0; o = h[c++];) fu.test(o.type || "") && u.push(o);
            return h = null, v
        },
        cleanData: function(n, t) {
            for (var u, e, f, s, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special; null != (u = n[a]); a++)
                if ((t || i.acceptData(u)) && (f = u[h], s = f && l[f])) {
                    if (s.events)
                        for (e in s.events) y[e] ? i.event.remove(u, e) : i.removeEvent(u, e, s.handle);
                    l[f] && (delete l[f], v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null, c.push(f))
                }
        }
    });
    i.fn.extend({
        text: function(n) {
            return b(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0; null != (r = e[u]); u++) t || 1 !== r.nodeType || i.cleanData(f(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return b(this, function(n) {
                var t = this[0] || {},
                    u = 0,
                    e = this.length;
                if (void 0 === n) return 1 === t.nodeType ? t.innerHTML.replace(ce, "") : void 0;
                if (!("string" != typeof n || ae.test(n) || !r.htmlSerialize && tu.test(n) || !r.leadingWhitespace && hi.test(n) || s[(ru.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(iu, "<$1><\/$2>");
                    try {
                        for (; e > u; u++) t = this[u] || {}, 1 === t.nodeType && (i.cleanData(f(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode;
                i.cleanData(f(this));
                n && n.replaceChild(t, this)
            }), n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = ir.apply([], n);
            var h, u, c, o, v, s, e = 0,
                l = this.length,
                p = this,
                w = l - 1,
                a = n[0],
                y = i.isFunction(a);
            if (y || l > 1 && "string" == typeof a && !r.checkClone && ve.test(a)) return this.each(function(i) {
                var r = p.eq(i);
                y && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, 1 === s.childNodes.length && (s = h), h)) {
                for (o = i.map(f(s, "script"), ou), c = o.length; l > e; e++) u = s, e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))), t.call(this[e], u, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument, i.map(o, su), e = 0; c > e; e++) u = o[e], fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(pe, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ai = {};
    ! function() {
        var t, i, n = u.createElement("div"),
            f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        t = n.getElementsByTagName("a")[0];
        t.style.cssText = "float:left;opacity:.5";
        r.opacity = /^0.5/.test(t.style.opacity);
        r.cssFloat = !!t.style.cssFloat;
        n.style.backgroundClip = "content-box";
        n.cloneNode(!0).style.backgroundClip = "";
        r.clearCloneStyle = "content-box" === n.style.backgroundClip;
        t = n = null;
        r.shrinkWrapBlocks = function() {
            var t, r, n, e;
            if (null == i) {
                if (t = u.getElementsByTagName("body")[0], !t) return;
                e = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
                r = u.createElement("div");
                n = u.createElement("div");
                t.appendChild(r).appendChild(n);
                i = !1;
                typeof n.style.zoom !== o && (n.style.cssText = f + ";width:1px;padding:1px;zoom:1", n.innerHTML = "<div><\/div>", n.firstChild.style.width = "5px", i = 3 !== n.offsetWidth);
                t.removeChild(r);
                t = r = n = null
            }
            return i
        }
    }();
    var au = /^margin/,
        yt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
        k, d, de = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(n) {
        return n.ownerDocument.defaultView.getComputedStyle(n, null)
    }, d = function(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] : void 0, r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), yt.test(u) && au.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 === u ? u : u + ""
    }) : u.documentElement.currentStyle && (k = function(n) {
        return n.currentStyle
    }, d = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n), r = i ? i[t] : void 0, null == r && u && u[t] && (r = u[t]), yt.test(r) && !de.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = "fontSize" === t ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), void 0 === r ? r : r + "" || "auto"
    });
    ! function() {
        function a() {
            var f, t, r = u.getElementsByTagName("body")[0];
            r && (f = u.createElement("div"), t = u.createElement("div"), f.style.cssText = l, r.appendChild(f).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", i.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function() {
                c = 4 === t.offsetWidth
            }), o = !0, s = !1, h = !0, n.getComputedStyle && (s = "1%" !== (n.getComputedStyle(t, null) || {}).top, o = "4px" === (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width), r.removeChild(f), t = r = null)
        }
        var f, e, c, o, s, h, t = u.createElement("div"),
            l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            v = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        f = t.getElementsByTagName("a")[0];
        f.style.cssText = "float:left;opacity:.5";
        r.opacity = /^0.5/.test(f.style.opacity);
        r.cssFloat = !!f.style.cssFloat;
        t.style.backgroundClip = "content-box";
        t.cloneNode(!0).style.backgroundClip = "";
        r.clearCloneStyle = "content-box" === t.style.backgroundClip;
        f = t = null;
        i.extend(r, {
            reliableHiddenOffsets: function() {
                if (null != e) return e;
                var i, n, f, t = u.createElement("div"),
                    r = u.getElementsByTagName("body")[0];
                if (r) return t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", i = u.createElement("div"), i.style.cssText = l, r.appendChild(i).appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", n = t.getElementsByTagName("td"), n[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", e = f && 0 === n[0].offsetHeight, r.removeChild(i), t = r = null, e
            },
            boxSizing: function() {
                return null == c && a(), c
            },
            boxSizingReliable: function() {
                return null == o && a(), o
            },
            pixelPosition: function() {
                return null == s && a(), s
            },
            reliableMarginRight: function() {
                var r, f, t, i;
                if (null == h && n.getComputedStyle) {
                    if (r = u.getElementsByTagName("body")[0], !r) return;
                    f = u.createElement("div");
                    t = u.createElement("div");
                    f.style.cssText = l;
                    r.appendChild(f).appendChild(t);
                    i = t.appendChild(u.createElement("div"));
                    i.style.cssText = t.style.cssText = v;
                    i.style.marginRight = i.style.width = "0";
                    t.style.width = "1px";
                    h = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight);
                    r.removeChild(f)
                }
                return h
            }
        })
    }();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
    };
    var vi = /alpha\([^)]*\)/i,
        ge = /opacity\s*=\s*([^)]*)/,
        no = /^(none|table(?!-c[ea]).+)/,
        to = new RegExp("^(" + at + ")(.*)$", "i"),
        io = new RegExp("^([+-])=(" + at + ")", "i"),
        ro = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        yu = {
            letterSpacing: 0,
            fontWeight: 400
        },
        pu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = d(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, c, e, s = i.camelCase(t),
                    h = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = wu(h, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === u) return e && "get" in e && void 0 !== (o = e.get(n, !1, f)) ? o : h[t];
                if (c = typeof u, "string" === c && (o = io.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), c = "number"), null != u && u === u && ("number" !== c || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || "" !== u || 0 !== t.indexOf("background") || (h[t] = "inherit"), !(e && "set" in e && void 0 === (u = e.set(n, u, f))))) try {
                    h[t] = "";
                    h[t] = u
                } catch (l) {}
            }
        },
        css: function(n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return t = i.cssProps[o] || (i.cssProps[o] = wu(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = d(n, t, u)), "normal" === f && t in yu && (f = yu[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return 0 === n.offsetWidth && no.test(i.css(n, "display")) ? i.swap(n, ro, function() {
                    return gu(n, t, u)
                }) : gu(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && k(n);
                return ku(n, u, f ? du(n, t, f, r.boxSizing() && "border-box" === i.css(n, "boxSizing", !1, e), e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return ge.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                f = u && u.filter || r.filter || "";
            r.zoom = 1;
            (t >= 1 || "" === t) && "" === i.trim(f.replace(vi, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = vu(r.reliableMarginRight, function(n, t) {
        if (t) return i.swap(n, {
            display: "inline-block"
        }, d, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        au.test(n) || (i.cssHooks[n + t].set = ku)
    });
    i.fn.extend({
        css: function(n, t) {
            return b(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = k(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return bu(this, !0)
        },
        hide: function() {
            return bu(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                et(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = e.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : e.propHooks._default.set(this), this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, pt, uo = /^(?:toggle|show|hide)$/,
        nf = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
        fo = /queueHooks$/,
        wt = [eo],
        st = {
            "*": [function(n, t) {
                var f = this.createTween(n, t),
                    s = f.cur(),
                    r = nf.exec(t),
                    e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                    u = (i.cssNumber[n] || "px" !== e && +s) && nf.exec(i.css(f.elem, n)),
                    o = 1,
                    h = 20;
                if (u && u[3] !== e) {
                    e = e || u[3];
                    r = r || [];
                    u = +s || 1;
                    do o = o || ".5", u /= o, i.style(f.elem, n, u + e); while (o !== (o = f.cur() / s) && 1 !== o && --h)
                }
                return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f
            }]
        };
    i.Animation = i.extend(uf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++) r = n[u], st[r] = st[r] || [], st[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? wt.unshift(n) : wt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n),
                e = i.speed(t, r, u),
                f = function() {
                    var t = uf(this, i.extend({}, n), e);
                    (o || i._data(this, "finish")) && t.stop(!0)
                };
            return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return "string" != typeof n && (r = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var o = !0,
                    t = null != n && n + "queueHooks",
                    e = i.timers,
                    f = i._data(this);
                if (t) f[t] && f[t].stop && u(f[t]);
                else
                    for (t in f) f[t] && f[t].stop && fo.test(t) && u(f[t]);
                for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(r), o = !1, e.splice(t, 1));
                (o || !r) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, f = i._data(this),
                    r = f[n + "queue"],
                    e = f[n + "queueHooks"],
                    u = i.timers,
                    o = r ? r.length : 0;
                for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers,
            t = 0;
        for (rt = i.now(); t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        rt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        pt || (pt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(pt);
        pt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var i, n, f, e, t = u.createElement("div");
            t.setAttribute("className", "t");
            t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
            i = t.getElementsByTagName("a")[0];
            f = u.createElement("select");
            e = f.appendChild(u.createElement("option"));
            n = t.getElementsByTagName("input")[0];
            i.style.cssText = "top:1px";
            r.getSetAttribute = "t" !== t.className;
            r.style = /top/.test(i.getAttribute("style"));
            r.hrefNormalized = "/a" === i.getAttribute("href");
            r.checkOn = !!n.value;
            r.optSelected = e.selected;
            r.enctype = !!u.createElement("form").enctype;
            f.disabled = !0;
            r.optDisabled = !e.disabled;
            n = u.createElement("input");
            n.setAttribute("value", "");
            r.input = "" === n.getAttribute("value");
            n.value = "t";
            n.setAttribute("type", "radio");
            r.radioValue = "t" === n.value;
            i = n = f = e = t = null
        }();
    ff = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(ff, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : i.text(n)
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, u = n.selectedIndex, f = "select-one" === n.type || 0 > u, h = f ? null : [], c = f ? u + 1 : s.length, e = 0 > u ? c : f ? u : 0; c > e; e++)
                        if (t = s[e], !(!t.selected && e !== u || (r.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), f) return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
                        if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0) try {
                            r.selected = f = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return f || (n.selectedIndex = -1), u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    var ut, ef, v = i.expr.attrHandle,
        yi = /^(?:checked|selected)$/i,
        g = r.getSetAttribute,
        kt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return b(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return typeof n.getAttribute === o ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ef : ut)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && 1 === n.nodeType)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? kt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(g ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t), u && (n.value = u), t
                    }
                }
            }
        }
    });
    ef = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : kt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = v[t] || i.find.attr;
        v[t] = kt && g || !yi.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = v[t], v[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, v[t] = f), u
        } : function(n, t, r) {
            if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    kt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            return i.nodeName(n, "input") ? void(n.defaultValue = t) : ut && ut.set(n, t, r)
        }
    });
    g || (ut = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", "value" === i || t === n.getAttribute(i) ? t : void 0
        }
    }, v.id = v.name = v.coords = function(n, t, i) {
        var r;
        if (!i) return (r = n.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified) return i.value
        },
        set: ut.set
    }, i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ut.set(n, "" === t ? !1 : t, i)
        }
    }, i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if ("" === i) return (n.setAttribute(t, "auto"), i)
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || void 0
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    }); of = /^(?:input|select|textarea|button|object)$/i;
    sf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return b(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n, this.each(function() {
                try {
                    this[n] = void 0;
                    delete this[n]
                } catch (t) {}
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : of .test(n.nodeName) || sf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    dt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(dt, " ") : " ")) {
                        for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(dt, " ") : "")) {
                        for (s = 0; u = o[s++];)
                            while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            } : function() {
                if ("string" === r)
                    for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(dt, " ").indexOf(i) >= 0) return !0;
            return !1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var pi = i.now(),
        wi = /\?/,
        so = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
        var f, r = null,
            u = i.trim(t + "");
        return u && !i.trim(u.replace(so, function(n, t, i, u) {
            return f && t && (r = 0), 0 === r ? n : (f = i || t, r += !u - !i, "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    };
    i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t) return null;
        try {
            n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
        } catch (f) {
            r = void 0
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var nt, y, ho = /#.*$/,
        hf = /([?&])_=[^&]*/,
        co = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        lo = /^(?:GET|HEAD)$/,
        ao = /^\/\//,
        cf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lf = {},
        bi = {},
        af = "*/".concat("*");
    try {
        y = location.href
    } catch (ts) {
        y = u.createElement("a");
        y.href = "";
        y = y.href
    }
    nt = cf.exec(y.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": af,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: vf(lf),
        ajaxTransport: vf(bi),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, nt, y, w, c = t;
                2 !== e && (e = 2, k && clearTimeout(k), a = void 0, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (y = vo(r, u, s)), y = yo(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]), u.statusCode(p), p = void 0, l && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]), tt.fireWith(o, [u, c]), l && (d.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (t = n, n = void 0);
            t = t || {};
            var s, c, f, b, k, l, a, v, r = i.ajaxSetup({}, t),
                o = r.context || r,
                d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                g = i.Deferred(),
                tt = i.Callbacks("once memory"),
                p = r.statusCode || {},
                it = {},
                rt = {},
                e = 0,
                ut = "canceled",
                u = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (2 === e) {
                            if (!v)
                                for (v = {}; t = co.exec(b);) v[t[1].toLowerCase()] = t[2];
                            t = v[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === e ? b : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return e || (r.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (2 > e)
                                for (t in n) p[t] = [p[t], n[t]];
                            else u.always(n[u.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ut;
                        return a && a.abort(t), w(0, t), this
                    }
                };
            if (g.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(ho, "").replace(ao, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], null == r.crossDomain && (s = cf.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === nt[1] && s[2] === nt[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), yf(lf, r, t, u), 2 === e) return u;
            l = r.global;
            l && 0 == i.active++ && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !lo.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = hf.test(f) ? f.replace(hf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + af + "; q=0.01" : "") : r.accepts["*"]);
            for (c in r.headers) u.setRequestHeader(c, r.headers[c]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e)) return u.abort();
            ut = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) u[c](r[c]);
            if (a = yf(bi, r, t, u)) {
                u.readyState = 1;
                l && d.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (k = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    a.send(it, w)
                } catch (ft) {
                    if (!(2 > e)) throw ft;
                    w(-1, ft)
                }
            } else w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(i.isFunction(n) ? function(t) {
                i(this).wrapInner(n.call(this, t))
            } : function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && "none" === (n.style && n.style.display || i.css(n, "display"))
    };
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    };
    var po = /%20/g,
        wo = /\[\]$/,
        pf = /\r?\n/g,
        bo = /^(?:submit|button|image|reset|file)$/i,
        ko = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                t = i.isFunction(t) ? t() : null == t ? "" : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) di(r, n[r], t, f);
        return u.join("&").replace(po, "+")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ko.test(this.nodeName) && !bo.test(n) && (this.checked || !oi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(pf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(pf, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && wf() || ns()
    } : wf;
    var go = 0,
        gt = {},
        ht = i.ajaxSettings.xhr();
    return n.ActiveXObject && i(n).on("unload", function() {
        for (var n in gt) gt[n](void 0, !0)
    }), r.cors = !!ht && "withCredentials" in ht, ht = r.ajax = !!ht, ht && i.ajaxTransport(function(n) {
        if (!n.crossDomain || r.cors) {
            var t;
            return {
                send: function(r, u) {
                    var e, f = n.xhr(),
                        o = ++go;
                    if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                        for (e in n.xhrFields) f[e] = n.xhrFields[e];
                    n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (e in r) void 0 !== r[e] && f.setRequestHeader(e, r[e] + "");
                    f.send(n.hasContent && n.data || null);
                    t = function(r, e) {
                        var s, c, h;
                        if (t && (e || 4 === f.readyState))
                            if (delete gt[o], t = void 0, f.onreadystatechange = i.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                h = {};
                                s = f.status;
                                "string" == typeof f.responseText && (h.text = f.responseText);
                                try {
                                    c = f.statusText
                                } catch (l) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = h.text ? 200 : 404
                            }
                        h && u(s, c, h, f.getAllResponseHeaders())
                    };
                    n.async ? 4 === f.readyState ? setTimeout(t) : f.onreadystatechange = gt[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function(n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
                    };
                    r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    }), gi = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = gi.pop() || i.expando + "_" + pi++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return e || i.error(f + " was not called"), e[0]
        }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
            e = arguments
        }, u.always(function() {
            n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, gi.push(f));
            e && i.isFunction(o) && o(e[0]);
            e = o = void 0
        }), "script")
    }), i.parseHTML = function(n, t, r) {
        if (!n || "string" != typeof n) return null;
        "boolean" == typeof t && (r = t, t = !1);
        t = t || u;
        var f = er.exec(n),
            e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, nr = i.fn.load, i.fn.load = function(n, t, r) {
        if ("string" != typeof n && nr) return nr.apply(this, arguments);
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e >= 0 && (u = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: t
        }).done(function(n) {
            o = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, o || [n.responseText, t, n])
        }), this
    }, i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, tr = n.document.documentElement, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var t, f, u = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                e = r && r.ownerDocument;
            if (e) return t = e.documentElement, i.contains(t, r) ? (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()), f = bf(e), {
                top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : u
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                        top: 0,
                        left: 0
                    },
                    u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || tr
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return b(this, function(n, u, f) {
                var e = bf(n);
                return void 0 === f ? e ? t in e ? e[t] : e.document.documentElement[u] : n[u] : void(e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f)
            }, n, u, arguments.length, null)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = vu(r.pixelPosition, function(n, r) {
            if (r) return (r = d(n, t), yt.test(r) ? i(n).position()[t] + "px" : r)
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || "boolean" != typeof u),
                    o = r || (u === !0 || f === !0 ? "margin" : "border");
                return b(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : void 0, e, null)
            }
        })
    }), i.fn.size = function() {
        return this.length
    }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), kf = n.jQuery, df = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = df), t && n.jQuery === i && (n.jQuery = kf), i
    }, typeof t === o && (n.jQuery = n.$ = i), i
});
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(n, t, i) {
        function r(i) {
            var r = t.console;
            o[i] || (o[i] = !0, n.migrateWarnings.push(i), r && r.warn && !n.migrateMute && (r.warn("JQMIGRATE: " + i), n.migrateTrace && r.trace && r.trace()))
        }

        function e(t, u, f, e) {
            if (Object.defineProperty) try {
                return Object.defineProperty(t, u, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(e), f
                    },
                    set: function(n) {
                        r(e);
                        f = n
                    }
                }), i
            } catch (o) {}
            n._definePropertyBroken = !0;
            t[u] = f
        }
        var o = {},
            l, a, v;
        n.migrateWarnings = [];
        !n.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active");
        n.migrateTrace === i && (n.migrateTrace = !0);
        n.migrateReset = function() {
            o = {};
            n.migrateWarnings.length = 0
        };
        "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var s = n("<input/>", {
                size: 1
            }).attr("size") && n.attrFn,
            h = n.attr,
            g = n.attrHooks.value && n.attrHooks.value.get || function() {
                return null
            },
            nt = n.attrHooks.value && n.attrHooks.value.set || function() {
                return i
            },
            tt = /^(?:input|button)$/i,
            it = /^[238]$/,
            rt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            ut = /^(?:checked|selected)$/i;
        e(n, "attrFn", s || {}, "jQuery.attrFn is deprecated");
        n.attr = function(t, u, f, e) {
            var o = u.toLowerCase(),
                c = t && t.nodeType;
            return e && (4 > h.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !it.test(c) && (s ? u in s : n.isFunction(n.fn[u]))) ? n(t)[u](f) : ("type" === u && f !== i && tt.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !n.attrHooks[o] && rt.test(o) && (n.attrHooks[o] = {
                get: function(t, r) {
                    var u, f = n.prop(t, r);
                    return f === !0 || "boolean" != typeof f && (u = t.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : i
                },
                set: function(t, i, r) {
                    var u;
                    return i === !1 ? n.removeAttr(t, r) : (u = n.propFix[r] || r, u in t && (t[u] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, ut.test(o) && r("jQuery.fn.attr('" + o + "') may use property instead of attribute")), h.call(n, t, u, f))
        };
        n.attrHooks.value = {
            get: function(n, t) {
                var i = (n.nodeName || "").toLowerCase();
                return "button" === i ? g.apply(this, arguments) : ("input" !== i && "option" !== i && r("jQuery.fn.attr('value') no longer gets properties"), t in n ? n.value : null)
            },
            set: function(n, t) {
                var u = (n.nodeName || "").toLowerCase();
                return "button" === u ? nt.apply(this, arguments) : ("input" !== u && "option" !== u && r("jQuery.fn.attr('value', val) no longer sets properties"), n.value = t, i)
            }
        };
        var f, u, c = n.fn.init,
            ft = n.parseJSON,
            et = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        n.fn.init = function(t, i, u) {
            var f;
            return t && "string" == typeof t && !n.isPlainObject(i) && (f = et.exec(n.trim(t))) && f[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), f[3] && r("$(html) HTML text after last tag is ignored"), "#" === f[0].charAt(0) && (r("HTML string cannot start with a '#' character"), n.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), n.parseHTML) ? c.call(this, n.parseHTML(f[2], i, !0), i, u) : c.apply(this, arguments)
        };
        n.fn.init.prototype = n.fn;
        n.parseJSON = function(n) {
            return n || null === n ? ft.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        };
        n.uaMatch = function(n) {
            n = n.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || 0 > n.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        };
        n.browser || (f = n.uaMatch(navigator.userAgent), u = {}, f.browser && (u[f.browser] = !0, u.version = f.version), u.chrome ? u.webkit = !0 : u.webkit && (u.safari = !0), n.browser = u);
        e(n, "browser", n.browser, "jQuery.browser is deprecated");
        n.sub = function() {
            function t(n, i) {
                return new t.fn.init(n, i)
            }
            n.extend(!0, t, this);
            t.superclass = this;
            t.fn = t.prototype = this();
            t.fn.constructor = t;
            t.sub = this.sub;
            t.fn.init = function(r, u) {
                return u && u instanceof n && !(u instanceof t) && (u = t(u)), n.fn.init.call(this, r, u, i)
            };
            t.fn.init.prototype = t.fn;
            var i = t(document);
            return r("jQuery.sub() is deprecated"), t
        };
        n.ajaxSetup({
            converters: {
                "text json": n.parseJSON
            }
        });
        l = n.fn.data;
        n.fn.data = function(t) {
            var f, u, e = this[0];
            return !e || "events" !== t || 1 !== arguments.length || (f = n.data(e, t), u = n._data(e, t), f !== i && f !== u || u === i) ? l.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), u)
        };
        a = /\/(java|ecma)script/i;
        v = n.fn.andSelf || n.fn.addBack;
        n.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), v.apply(this, arguments)
        };
        n.clean || (n.clean = function(t, u, f, e) {
            u = u || document;
            u = !u.nodeType && u[0] || u;
            u = u.ownerDocument || u;
            r("jQuery.clean() is deprecated");
            var s, o, c, l, h = [];
            if (n.merge(h, n.buildFragment(t, u).childNodes), f)
                for (c = function(n) {
                        return !n.type || a.test(n.type) ? e ? e.push(n.parentNode ? n.parentNode.removeChild(n) : n) : f.appendChild(n) : i
                    }, s = 0; null != (o = h[s]); s++) n.nodeName(o, "script") && c(o) || (f.appendChild(o), o.getElementsByTagName !== i && (l = n.grep(n.merge([], o.getElementsByTagName("script")), c), h.splice.apply(h, [s + 1, 0].concat(l)), s += l.length));
            return h
        });
        var ot = n.event.add,
            st = n.event.remove,
            ht = n.event.trigger,
            ct = n.fn.toggle,
            y = n.fn.live,
            p = n.fn.die,
            w = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            b = RegExp("\\b(?:" + w + ")\\b"),
            k = /(?:^|\s)hover(\.\S+|)\b/,
            d = function(t) {
                return "string" != typeof t || n.event.special.hover ? t : (k.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(k, "mouseenter$1 mouseleave$1"))
            };
        n.event.props && "attrChange" !== n.event.props[0] && n.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
        n.event.dispatch && e(n.event, "handle", n.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
        n.event.add = function(n, t, i, u, f) {
            n !== document && b.test(t) && r("AJAX events should be attached to document: " + t);
            ot.call(this, n, d(t || ""), i, u, f)
        };
        n.event.remove = function(n, t, i, r, u) {
            st.call(this, n, d(t) || "", i, r, u)
        };
        n.fn.error = function() {
            var n = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), n.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, n) : (this.triggerHandler.apply(this, n), this)
        };
        n.fn.toggle = function(t, i) {
            if (!n.isFunction(t) || !n.isFunction(i)) return ct.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var u = arguments,
                e = t.guid || n.guid++,
                f = 0,
                o = function(i) {
                    var r = (n._data(this, "lastToggle" + t.guid) || 0) % f;
                    return n._data(this, "lastToggle" + t.guid, r + 1), i.preventDefault(), u[r].apply(this, arguments) || !1
                };
            for (o.guid = e; u.length > f;) u[f++].guid = e;
            return this.click(o)
        };
        n.fn.live = function(t, i, u) {
            return r("jQuery.fn.live() is deprecated"), y ? y.apply(this, arguments) : (n(this.context).on(t, this.selector, i, u), this)
        };
        n.fn.die = function(t, i) {
            return r("jQuery.fn.die() is deprecated"), p ? p.apply(this, arguments) : (n(this.context).off(t, this.selector || "**", i), this)
        };
        n.event.trigger = function(n, t, i, u) {
            return i || b.test(n) || r("Global events are undocumented and deprecated"), ht.call(this, n, t, i || document, u)
        };
        n.each(w.split("|"), function(t, i) {
            n.event.special[i] = {
                setup: function() {
                    var t = this;
                    return t !== document && (n.event.add(document, i + "." + n.guid, function() {
                        n.event.trigger(i, null, t, !0)
                    }), n._data(this, i, n.guid++)), !1
                },
                teardown: function() {
                    return this !== document && n.event.remove(document, i + "." + n._data(this, i)), !1
                }
            }
        })
    }(jQuery, window);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function() {
            var r = n(this),
                i = u(r),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function u(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function e(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.2";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = u(f), o = i.hasClass("open"), r(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r), e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger("shown.bs.dropdown", e)
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, r;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = u(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            f.length && (r = f.index(t.target), 38 == t.which && r > 0 && r--, 40 == t.which && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', t.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.2";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.2";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (void 0 !== i.style[t]) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(n) {
    function r() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function c(t, i) {
        var u = n(t).data(),
            f = {},
            e, o = new RegExp("^" + i.toLowerCase() + "([A-Z])"),
            i = new RegExp("^" + i.toLowerCase());
        for (var r in u) i.test(r) && (e = r.replace(o, function(n, t) {
            return t.toLowerCase()
        }), f[e] = u[r]);
        return f
    }

    function l(t) {
        var u = {},
            r;
        if (i[t] || (t = t.split("-")[0], i[t])) return r = i[t], n.each(h, function(n, t) {
            t in r && (u[t] = r[t])
        }), u
    }
    var e = n(window),
        u = function(i, r) {
            var u = this;
            this._process_options(r);
            this.element = n(i);
            this.isInline = !1;
            this.isInput = this.element.is("input");
            this.component = this.element.is(".date") ? this.element.find(".add-on, .btn") : !1;
            this.hasInput = this.component && this.element.find("input").length;
            this.component && this.component.length === 0 && (this.component = !1);
            this.picker = n(t.template);
            this._buildEvents();
            this._attachEvents();
            this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu");
            this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right"));
            this.viewMode = this.o.startView;
            this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(n, t) {
                return parseInt(t) + 1
            });
            this._allow_update = !1;
            this.setStartDate(this._o.startDate);
            this.setEndDate(this._o.endDate);
            this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
            this.fillDow();
            this.fillMonths();
            this._allow_update = !0;
            this.update();
            this.showMode();
            this.isInline && this.show()
        },
        o, s, f, h, i, t;
    u.prototype = {
        constructor: u,
        _process_options: function(r) {
            var u, o, h, e, s;
            this._o = n.extend({}, this._o, r);
            u = this.o = n.extend({}, this._o);
            o = u.language;
            i[o] || (o = o.split("-")[0], i[o] || (o = f.language));
            u.language = o;
            switch (u.startView) {
                case 2:
                case "decade":
                    u.startView = 2;
                    break;
                case 1:
                case "year":
                    u.startView = 1;
                    break;
                default:
                    u.startView = 0
            }
            switch (u.minViewMode) {
                case 1:
                case "months":
                    u.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    u.minViewMode = 2;
                    break;
                default:
                    u.minViewMode = 0
            }
            if (u.startView = Math.max(u.startView, u.minViewMode), u.weekStart %= 7, u.weekEnd = (u.weekStart + 6) % 7, h = t.parseFormat(u.format), u.startDate !== -Infinity && (u.startDate = u.startDate ? u.startDate instanceof Date ? this._local_to_utc(this._zero_time(u.startDate)) : t.parseDate(u.startDate, h, u.language) : -Infinity), u.endDate !== Infinity && (u.endDate = u.endDate ? u.endDate instanceof Date ? this._local_to_utc(this._zero_time(u.endDate)) : t.parseDate(u.endDate, h, u.language) : Infinity), u.daysOfWeekDisabled = u.daysOfWeekDisabled || [], n.isArray(u.daysOfWeekDisabled) || (u.daysOfWeekDisabled = u.daysOfWeekDisabled.split(/[,\s]*/)), u.daysOfWeekDisabled = n.map(u.daysOfWeekDisabled, function(n) {
                    return parseInt(n, 10)
                }), e = String(u.orientation).toLowerCase().split(/\s+/g), s = u.orientation.toLowerCase(), e = n.grep(e, function(n) {
                    return /^auto|left|right|top|bottom$/.test(n)
                }), u.orientation = {
                    x: "auto",
                    y: "auto"
                }, s && s !== "auto")
                if (e.length === 1) switch (e[0]) {
                    case "top":
                    case "bottom":
                        u.orientation.y = e[0];
                        break;
                    case "left":
                    case "right":
                        u.orientation.x = e[0]
                } else s = n.grep(e, function(n) {
                    return /^left|right$/.test(n)
                }), u.orientation.x = s[0] || "auto", s = n.grep(e, function(n) {
                    return /^top|bottom$/.test(n)
                }), u.orientation.y = s[0] || "auto"
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(n) {
            for (var t = 0, i, r; t < n.length; t++) {
                i = n[t][0];
                r = n[t][1];
                i.on(r)
            }
        },
        _unapplyEvents: function(n) {
            for (var t = 0, i, r; t < n.length; t++) i = n[t][0], r = n[t][1], i.off(r)
        },
        _buildEvents: function() {
            this.isInput ? this._events = [
                [this.element, {
                    focus: n.proxy(this.show, this),
                    keyup: n.proxy(this.update, this),
                    keydown: n.proxy(this.keydown, this)
                }]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), {
                    focus: n.proxy(this.show, this),
                    keyup: n.proxy(this.update, this),
                    keydown: n.proxy(this.keydown, this)
                }],
                [this.component, {
                    click: n.proxy(this.show, this)
                }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: n.proxy(this.show, this)
                }]
            ];
            this._secondaryEvents = [
                [this.picker, {
                    click: n.proxy(this.click, this)
                }],
                [n(window), {
                    resize: n.proxy(this.place, this)
                }],
                [n(document), {
                    mousedown: n.proxy(function(n) {
                        this.element.is(n.target) || this.element.find(n.target).length || this.picker.is(n.target) || this.picker.find(n.target).length || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents();
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(i, r) {
            var u = r || this.date,
                f = this._utc_to_local(u);
            this.element.trigger({
                type: i,
                date: f,
                format: n.proxy(function(n) {
                    var i = n || this.o.format;
                    return t.formatDate(u, i, this.o.language)
                }, this)
            })
        },
        show: function(n) {
            this.isInline || this.picker.appendTo("body");
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.place();
            this._attachSecondaryEvents();
            n && n.preventDefault();
            this._trigger("show")
        },
        hide: function() {
            this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
        },
        remove: function() {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            this.isInput || delete this.element.data().date
        },
        _utc_to_local: function(n) {
            return new Date(n.getTime() + n.getTimezoneOffset() * 6e4)
        },
        _local_to_utc: function(n) {
            return new Date(n.getTime() - n.getTimezoneOffset() * 6e4)
        },
        _zero_time: function(n) {
            return new Date(n.getFullYear(), n.getMonth(), n.getDate())
        },
        _zero_utc_time: function(n) {
            return new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()))
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            return this.date
        },
        setDate: function(n) {
            this.setUTCDate(this._local_to_utc(n))
        },
        setUTCDate: function(n) {
            this.date = n;
            this.setValue()
        },
        setValue: function() {
            var n = this.getFormattedDate();
            this.isInput ? this.element.val(n).change() : this.component && this.element.find("input").val(n).change()
        },
        getFormattedDate: function(n) {
            return n === undefined && (n = this.o.format), t.formatDate(this.date, n, this.o.language)
        },
        setStartDate: function(n) {
            this._process_options({
                startDate: n
            });
            this.update();
            this.updateNavArrows()
        },
        setEndDate: function(n) {
            this._process_options({
                endDate: n
            });
            this.update();
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(n) {
            this._process_options({
                daysOfWeekDisabled: n
            });
            this.update();
            this.updateNavArrows()
        },
        place: function() {
            var i, v, s;
            if (!this.isInline) {
                var u = this.picker.outerWidth(),
                    f = this.picker.outerHeight(),
                    h = 10,
                    c = e.width(),
                    y = e.height(),
                    l = e.scrollTop(),
                    p = parseInt(this.element.parents().filter(function() {
                        return n(this).css("z-index") != "auto"
                    }).first().css("z-index")) + 10,
                    t = this.component ? this.component.parent().offset() : this.element.offset(),
                    a = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    w = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    r = t.left,
                    o = t.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left");
                this.o.orientation.x !== "auto" ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), this.o.orientation.x === "right" && (r -= u - w)) : (this.picker.addClass("datepicker-orient-left"), t.left < 0 ? r -= t.left - h : t.left + u > c && (r = c - u - h));
                i = this.o.orientation.y;
                i === "auto" && (v = -l + t.top - f, s = l + y - (t.top + a + f), i = Math.max(v, s) === s ? "top" : "bottom");
                this.picker.addClass("datepicker-orient-" + i);
                i === "top" ? o += a : o -= f + parseInt(this.picker.css("padding-top"));
                this.picker.css({
                    top: o,
                    left: r,
                    zIndex: p
                })
            }
        },
        _allow_update: !0,
        update: function() {
            if (this._allow_update) {
                var r = new Date(this.date),
                    n, i = !1;
                arguments && arguments.length && (typeof arguments[0] == "string" || arguments[0] instanceof Date) ? (n = arguments[0], n instanceof Date && (n = this._local_to_utc(n)), i = !0) : (n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date);
                this.date = t.parseDate(n, this.o.format, this.o.language);
                i ? this.setValue() : n ? r.getTime() !== this.date.getTime() && this._trigger("changeDate") : this._trigger("clearDate");
                this.date < this.o.startDate ? (this.viewDate = new Date(this.o.startDate), this.date = new Date(this.o.startDate)) : this.date > this.o.endDate ? (this.viewDate = new Date(this.o.endDate), this.date = new Date(this.o.endDate)) : (this.viewDate = new Date(this.date), this.date = new Date(this.date));
                this.fill()
            }
        },
        fillDow: function() {
            var r = this.o.weekStart,
                n = "<tr>",
                t;
            for (this.o.calendarWeeks && (t = '<th class="cw">&nbsp;<\/th>', n += t, this.picker.find(".datepicker-days thead tr:first-child").prepend(t)); r < this.o.weekStart + 7;) n += '<th class="dow">' + i[this.o.language].daysMin[r++ % 7] + "<\/th>";
            n += "<\/tr>";
            this.picker.find(".datepicker-days thead").append(n)
        },
        fillMonths: function() {
            for (var n = "", t = 0; t < 12;) n += '<span class="month">' + i[this.o.language].monthsShort[t++] + "<\/span>";
            this.picker.find(".datepicker-months td").html(n)
        },
        setRange: function(t) {
            t && t.length ? this.range = n.map(t, function(n) {
                return n.valueOf()
            }) : delete this.range;
            this.fill()
        },
        getClassNames: function(t) {
            var i = [],
                r = this.viewDate.getUTCFullYear(),
                f = this.viewDate.getUTCMonth(),
                e = this.date.valueOf(),
                u = new Date;
            return t.getUTCFullYear() < r || t.getUTCFullYear() == r && t.getUTCMonth() < f ? i.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() == r && t.getUTCMonth() > f) && i.push("new"), this.o.todayHighlight && t.getUTCFullYear() == u.getFullYear() && t.getUTCMonth() == u.getMonth() && t.getUTCDate() == u.getDate() && i.push("today"), e && t.valueOf() == e && i.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || n.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) && i.push("disabled"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"), n.inArray(t.valueOf(), this.range) != -1 && i.push("selected")), i
        },
        fill: function() {
            var k = new Date(this.viewDate),
                u = k.getUTCFullYear(),
                d = k.getUTCMonth(),
                v = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                it = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                y = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                rt = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                ft = this.date && this.date.valueOf(),
                p, f, w, h, o, s, e, a, c, tt, l;
            for (this.picker.find(".datepicker-days thead th.datepicker-switch").text(i[this.o.language].months[d] + " " + u), this.picker.find("tfoot th.today").text(i[this.o.language].today).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(i[this.o.language].clear).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths(), f = r(u, d - 1, 28, 0, 0, 0, 0), w = t.getDaysInMonth(f.getUTCFullYear(), f.getUTCMonth()), f.setUTCDate(w), f.setUTCDate(w - (f.getUTCDay() - this.o.weekStart + 7) % 7), h = new Date(f), h.setUTCDate(h.getUTCDate() + 42), h = h.valueOf(), o = []; f.valueOf() < h;) {
                if (f.getUTCDay() == this.o.weekStart && (o.push("<tr>"), this.o.calendarWeeks)) {
                    var g = new Date(+f + (this.o.weekStart - f.getUTCDay() - 7) % 7 * 864e5),
                        nt = new Date(+g + (11 - g.getUTCDay()) % 7 * 864e5),
                        b = new Date(+(b = r(nt.getUTCFullYear(), 0, 1)) + (11 - b.getUTCDay()) % 7 * 864e5),
                        ut = (nt - b) / 6048e5 + 1;
                    o.push('<td class="cw">' + ut + "<\/td>")
                }
                s = this.getClassNames(f);
                s.push("day");
                this.o.beforeShowDay !== n.noop && (e = this.o.beforeShowDay(this._utc_to_local(f)), e === undefined ? e = {} : typeof e == "boolean" ? e = {
                    enabled: e
                } : typeof e == "string" && (e = {
                    classes: e
                }), e.enabled === !1 && s.push("disabled"), e.classes && (s = s.concat(e.classes.split(/\s+/))), e.tooltip && (p = e.tooltip));
                s = n.unique(s);
                o.push('<td class="' + s.join(" ") + '"' + (p ? ' title="' + p + '"' : "") + ">" + f.getUTCDate() + "<\/td>");
                f.getUTCDay() == this.o.weekEnd && o.push("<\/tr>");
                f.setUTCDate(f.getUTCDate() + 1)
            }
            for (this.picker.find(".datepicker-days tbody").empty().append(o.join("")), a = this.date && this.date.getUTCFullYear(), c = this.picker.find(".datepicker-months").find("th:eq(1)").text(u).end().find("span").removeClass("active"), a && a == u && c.eq(this.date.getUTCMonth()).addClass("active"), (u < v || u > y) && c.addClass("disabled"), u == v && c.slice(0, it).addClass("disabled"), u == y && c.slice(rt + 1).addClass("disabled"), o = "", u = parseInt(u / 10, 10) * 10, tt = this.picker.find(".datepicker-years").find("th:eq(1)").text(u + "-" + (u + 9)).end().find("td"), u -= 1, l = -1; l < 11; l++) o += '<span class="year' + (l == -1 ? " old" : l == 10 ? " new" : "") + (a == u ? " active" : "") + (u < v || u > y ? " disabled" : "") + '">' + u + "<\/span>", u += 1;
            tt.html(o)
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    n = t.getUTCFullYear(),
                    i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -Infinity && n <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        });
                        this.o.endDate !== Infinity && n >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -Infinity && n <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        });
                        this.o.endDate !== Infinity && n >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                }
            }
        },
        click: function(i) {
            var u, h, e, l, s;
            if (i.preventDefault(), u = n(i.target).closest("span, td, th"), u.length == 1) switch (u[0].nodeName.toLowerCase()) {
                case "th":
                    switch (u[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            h = t.modes[this.viewMode].navStep * (u[0].className == "prev" ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, h);
                                    this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, h);
                                    this.viewMode === 1 && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case "today":
                            e = new Date;
                            e = r(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0);
                            this.showMode(-2);
                            l = this.o.todayBtn == "linked" ? null : "view";
                            this._setDate(e, l);
                            break;
                        case "clear":
                            this.isInput ? s = this.element : this.component && (s = this.element.find("input"));
                            s && s.val("").change();
                            this._trigger("changeDate");
                            this.update();
                            this.o.autoclose && this.hide()
                    }
                    break;
                case "span":
                    if (!u.is(".disabled")) {
                        if (this.viewDate.setUTCDate(1), u.is(".month")) {
                            var c = 1,
                                f = u.parent().find("span").index(u),
                                o = this.viewDate.getUTCFullYear();
                            this.viewDate.setUTCMonth(f);
                            this._trigger("changeMonth", this.viewDate);
                            this.o.minViewMode === 1 && this._setDate(r(o, f, c, 0, 0, 0, 0))
                        } else {
                            var o = parseInt(u.text(), 10) || 0,
                                c = 1,
                                f = 0;
                            this.viewDate.setUTCFullYear(o);
                            this._trigger("changeYear", this.viewDate);
                            this.o.minViewMode === 2 && this._setDate(r(o, f, c, 0, 0, 0, 0))
                        }
                        this.showMode(-1);
                        this.fill()
                    }
                    break;
                case "td":
                    if (u.is(".day") && !u.is(".disabled")) {
                        var c = parseInt(u.text(), 10) || 1,
                            o = this.viewDate.getUTCFullYear(),
                            f = this.viewDate.getUTCMonth();
                        u.is(".old") ? f === 0 ? (f = 11, o -= 1) : f -= 1 : u.is(".new") && (f == 11 ? (f = 0, o += 1) : f += 1);
                        this._setDate(r(o, f, c, 0, 0, 0, 0))
                    }
            }
        },
        _setDate: function(n, t) {
            t && t != "date" || (this.date = new Date(n));
            t && t != "view" || (this.viewDate = new Date(n));
            this.fill();
            this.setValue();
            this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input"));
            i && i.change();
            this.o.autoclose && (!t || t == "date") && this.hide()
        },
        moveMonth: function(n, t) {
            var f;
            if (!t) return n;
            var i = new Date(n.valueOf()),
                e = i.getUTCDate(),
                o = i.getUTCMonth(),
                s = Math.abs(t),
                r, u;
            if (t = t > 0 ? 1 : -1, s == 1) u = t == -1 ? function() {
                return i.getUTCMonth() == o
            } : function() {
                return i.getUTCMonth() != r
            }, r = o + t, i.setUTCMonth(r), (r < 0 || r > 11) && (r = (r + 12) % 12);
            else {
                for (f = 0; f < s; f++) i = this.moveMonth(i, t);
                r = i.getUTCMonth();
                i.setUTCDate(e);
                u = function() {
                    return r != i.getUTCMonth()
                }
            }
            while (u()) i.setUTCDate(--e), i.setUTCMonth(r);
            return i
        },
        moveYear: function(n, t) {
            return this.moveMonth(n, t * 12)
        },
        dateWithinRange: function(n) {
            return n >= this.o.startDate && n <= this.o.endDate
        },
        keydown: function(n) {
            var u, t, i, r, f;
            if (this.picker.is(":not(:visible)")) {
                n.keyCode == 27 && this.show();
                return
            }
            u = !1;
            switch (n.keyCode) {
                case 27:
                    this.hide();
                    n.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    t = n.keyCode == 37 ? -1 : 1;
                    n.ctrlKey ? (i = this.moveYear(this.date, t), r = this.moveYear(this.viewDate, t), this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (i = this.moveMonth(this.date, t), r = this.moveMonth(this.viewDate, t), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.date), i.setUTCDate(this.date.getUTCDate() + t), r = new Date(this.viewDate), r.setUTCDate(this.viewDate.getUTCDate() + t));
                    this.dateWithinRange(i) && (this.date = i, this.viewDate = r, this.setValue(), this.update(), n.preventDefault(), u = !0);
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    t = n.keyCode == 38 ? -1 : 1;
                    n.ctrlKey ? (i = this.moveYear(this.date, t), r = this.moveYear(this.viewDate, t), this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (i = this.moveMonth(this.date, t), r = this.moveMonth(this.viewDate, t), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.date), i.setUTCDate(this.date.getUTCDate() + t * 7), r = new Date(this.viewDate), r.setUTCDate(this.viewDate.getUTCDate() + t * 7));
                    this.dateWithinRange(i) && (this.date = i, this.viewDate = r, this.setValue(), this.update(), n.preventDefault(), u = !0);
                    break;
                case 13:
                    this.hide();
                    n.preventDefault();
                    break;
                case 9:
                    this.hide()
            }
            u && (this._trigger("changeDate"), this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change())
        },
        showMode: function(n) {
            n && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + n)));
            this.picker.find(">div").hide().filter(".datepicker-" + t.modes[this.viewMode].clsName).css("display", "block");
            this.updateNavArrows()
        }
    };
    o = function(t, i) {
        this.element = n(t);
        this.inputs = n.map(i.inputs, function(n) {
            return n.jquery ? n[0] : n
        });
        delete i.inputs;
        n(this.inputs).datepicker(i).bind("changeDate", n.proxy(this.dateUpdated, this));
        this.pickers = n.map(this.inputs, function(t) {
            return n(t).data("datepicker")
        });
        this.updateDates()
    };
    o.prototype = {
        updateDates: function() {
            this.dates = n.map(this.pickers, function(n) {
                return n.date
            });
            this.updateRanges()
        },
        updateRanges: function() {
            var t = n.map(this.dates, function(n) {
                return n.valueOf()
            });
            n.each(this.pickers, function(n, i) {
                i.setRange(t)
            })
        },
        dateUpdated: function(t) {
            var u = n(t.target).data("datepicker"),
                r = u.getUTCDate(),
                i = n.inArray(t.target, this.inputs),
                f = this.inputs.length;
            if (i != -1) {
                if (r < this.dates[i])
                    while (i >= 0 && r < this.dates[i]) this.pickers[i--].setUTCDate(r);
                else if (r > this.dates[i])
                    while (i < f && r > this.dates[i]) this.pickers[i++].setUTCDate(r);
                this.updateDates()
            }
        },
        remove: function() {
            n.map(this.pickers, function(n) {
                n.remove()
            });
            delete this.element.data().datepicker
        }
    };
    s = n.fn.datepicker;
    n.fn.datepicker = function(t) {
        var r = Array.apply(null, arguments),
            i;
        return r.shift(), this.each(function() {
            var s = n(this),
                e = s.data("datepicker"),
                a = typeof t == "object" && t,
                y;
            if (!e) {
                var v = c(this, "date"),
                    p = n.extend({}, f, v, a),
                    w = l(p.language),
                    h = n.extend({}, f, w, v, a);
                s.is(".input-daterange") || h.inputs ? (y = {
                    inputs: h.inputs || s.find("input").toArray()
                }, s.data("datepicker", e = new o(this, n.extend(h, y)))) : s.data("datepicker", e = new u(this, h))
            }
            if (typeof t == "string" && typeof e[t] == "function" && (i = e[t].apply(e, r), i !== undefined)) return !1
        }), i !== undefined ? i : this
    };
    f = n.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: n.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        daysOfWeekDisabled: [],
        endDate: Infinity,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        orientation: "auto",
        rtl: !1,
        startDate: -Infinity,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0
    };
    h = n.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    n.fn.datepicker.Constructor = u;
    i = n.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };
    t = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(n) {
            return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
        },
        getDaysInMonth: function(n, i) {
            return [31, t.isLeapYear(n) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][i]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(n) {
            var t = n.replace(this.validParts, '\0').split('\0'),
                i = n.match(this.validParts);
            if (!t || !t.length || !i || i.length === 0) throw new Error("Invalid date format.");
            return {
                separators: t,
                parts: i
            }
        },
        parseDate: function(f, e, o) {
            var g, h, a, v, l, nt, s, k, p;
            if (f instanceof Date) return f;
            if (typeof e == "string" && (e = t.parseFormat(e)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(f)) {
                for (g = /([\-+]\d+)([dmwy])/, h = f.match(/([\-+]\d+)([dmwy])/g), f = new Date, s = 0; s < h.length; s++) {
                    a = g.exec(h[s]);
                    v = parseInt(a[1]);
                    switch (a[2]) {
                        case "d":
                            f.setUTCDate(f.getUTCDate() + v);
                            break;
                        case "m":
                            f = u.prototype.moveMonth.call(u.prototype, f, v);
                            break;
                        case "w":
                            f.setUTCDate(f.getUTCDate() + v * 7);
                            break;
                        case "y":
                            f = u.prototype.moveYear.call(u.prototype, f, v)
                    }
                }
                return r(f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate(), 0, 0, 0)
            }
            var h = f && f.match(this.nonpunctuation) || [],
                f = new Date,
                w = {},
                d = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                c = {
                    yyyy: function(n, t) {
                        return n.setUTCFullYear(t)
                    },
                    yy: function(n, t) {
                        return n.setUTCFullYear(2e3 + t)
                    },
                    m: function(n, t) {
                        if (isNaN(n)) return n;
                        for (t -= 1; t < 0;) t += 12;
                        for (t %= 12, n.setUTCMonth(t); n.getUTCMonth() != t;) n.setUTCDate(n.getUTCDate() - 1);
                        return n
                    },
                    d: function(n, t) {
                        return n.setUTCDate(t)
                    }
                },
                y, b, a;
            if (c.M = c.MM = c.mm = c.m, c.dd = c.d, f = r(f.getFullYear(), f.getMonth(), f.getDate(), 0, 0, 0), l = e.parts.slice(), h.length != l.length && (l = n(l).filter(function(t, i) {
                    return n.inArray(i, d) !== -1
                }).toArray()), h.length == l.length) {
                for (s = 0, nt = l.length; s < nt; s++) {
                    if (y = parseInt(h[s], 10), a = l[s], isNaN(y)) switch (a) {
                        case "MM":
                            b = n(i[o].months).filter(function() {
                                var n = this.slice(0, h[s].length),
                                    t = h[s].slice(0, n.length);
                                return n == t
                            });
                            y = n.inArray(b[0], i[o].months) + 1;
                            break;
                        case "M":
                            b = n(i[o].monthsShort).filter(function() {
                                var n = this.slice(0, h[s].length),
                                    t = h[s].slice(0, n.length);
                                return n == t
                            });
                            y = n.inArray(b[0], i[o].monthsShort) + 1
                    }
                    w[a] = y
                }
                for (s = 0; s < d.length; s++) p = d[s], p in w && !isNaN(w[p]) && (k = new Date(f), c[p](k, w[p]), isNaN(k) || (f = k))
            }
            return f
        },
        formatDate: function(r, u, f) {
            var e, r, s, o, h;
            for (typeof u == "string" && (u = t.parseFormat(u)), e = {
                    d: r.getUTCDate(),
                    D: i[f].daysShort[r.getUTCDay()],
                    DD: i[f].days[r.getUTCDay()],
                    m: r.getUTCMonth() + 1,
                    M: i[f].monthsShort[r.getUTCMonth()],
                    MM: i[f].months[r.getUTCMonth()],
                    yy: r.getUTCFullYear().toString().substring(2),
                    yyyy: r.getUTCFullYear()
                }, e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, r = [], s = n.extend([], u.separators), o = 0, h = u.parts.length; o <= h; o++) s.length && r.push(s.shift()), r.push(e[u.parts[o]]);
            return r.join("")
        },
        headTemplate: '<thead><tr><th class="prev">&laquo;<\/th><th colspan="5" class="datepicker-switch"><\/th><th class="next">&raquo;<\/th><\/tr><\/thead>',
        contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"><\/th><\/tr><tr><th colspan="7" class="clear"><\/th><\/tr><\/tfoot>'
    };
    t.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + t.headTemplate + "<tbody><\/tbody>" + t.footTemplate + '<\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + t.headTemplate + t.contTemplate + t.footTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + t.headTemplate + t.contTemplate + t.footTemplate + "<\/table><\/div><\/div>";
    n.fn.datepicker.DPGlobal = t;
    n.fn.datepicker.noConflict = function() {
        return n.fn.datepicker = s, this
    };
    n(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
        var i = n(this);
        i.data("datepicker") || (t.preventDefault(), i.datepicker("show"))
    });
    n(function() {
        n('[data-provide="datepicker-inline"]').datepicker()
    })
}(window.jQuery),
function(n) {
    n.fn.datepicker.dates.de = {
        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
        daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"],
        daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
        months: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthsShort: ["Jan", "Feb", "MÃ¤r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        today: "Heute",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery),
function(n) {
    n.fn.datepicker.dates.es = {
        days: ["Domingo", "Lunes", "Martes", "MiÃ©rcoles", "Jueves", "Viernes", "SÃ¡bado", "Domingo"],
        daysShort: ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b", "Dom"],
        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: "Hoy"
    }
}(jQuery),
function(n) {
    n.fn.datepicker.dates.fr = {
        days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
        daysMin: ["D", "L", "Ma", "Me", "J", "V", "S", "D"],
        months: ["Janvier", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"],
        monthsShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
        today: "Aujourd'hui",
        clear: "Effacer",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery),
function(n) {
    n.fn.datepicker.dates.it = {
        days: ["Domenica", "LunedÃ¬", "MartedÃ¬", "MercoledÃ¬", "GiovedÃ¬", "VenerdÃ¬", "Sabato", "Domenica"],
        daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
        daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"],
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        today: "Oggi",
        weekStart: 1,
        format: "dd/mm/yyyy"
    }
}(jQuery),
function(n) {
    n.fn.datepicker.dates.nl = {
        days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
        daysShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
        daysMin: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
        months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        today: "Vandaag"
    }
}(jQuery),
function(n) {
    n.fn.datepicker.dates.tr = {
        days: ["Pazar", "Pazartesi", "SalÄ±", "Ã‡arÅŸamba", "PerÅŸembe", "Cuma", "Cumartesi", "Pazar"],
        daysShort: ["Pz", "Pzt", "Sal", "Ã‡rÅŸ", "PrÅŸ", "Cu", "Cts", "Pz"],
        daysMin: ["Pz", "Pzt", "Sa", "Ã‡r", "Pr", "Cu", "Ct", "Pz"],
        months: ["Ocak", "Åžubat", "Mart", "Nisan", "MayÄ±s", "Haziran", "Temmuz", "AÄŸustos", "EylÃ¼l", "Ekim", "KasÄ±m", "AralÄ±k"],
        monthsShort: ["Oca", "Åžub", "Mar", "Nis", "May", "Haz", "Tem", "AÄŸu", "Eyl", "Eki", "Kas", "Ara"],
        today: "BugÃ¼n",
        format: "dd.mm.yyyy"
    }
}(jQuery),
function(n) {
    n.fn.datepicker.dates.zh = {
        days: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­", "æ˜ŸæœŸæ—¥"],
        daysShort: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­", "å‘¨æ—¥"],
        daysMin: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "æ—¥"],
        months: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
        monthsShort: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
        today: "ä»Šæ—¥",
        format: "yyyyå¹´mmæœˆddæ—¥",
        weekStart: 1
    }
}(jQuery),
function(n) {
    n.fn.equalHeights = function(t, i) {
        return tallest = t ? t : 0, this.each(function() {
            n(this).height() > tallest && (tallest = n(this).height())
        }), i && tallest > i && (tallest = i), this.each(function() {
            n(this).height(tallest).css("overflow", "auto")
        })
    }
}(jQuery),
function(n) {
    function i(n) {
        return typeof n == "object" ? n : {
            top: n,
            left: n
        }
    }
    var t = n.scrollTo = function(t, i, r) {
        n(window).scrollTo(t, i, r)
    };
    t.defaults = {
        axis: "xy",
        duration: parseFloat(n.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    };
    t.window = function() {
        return n(window)._scrollable()
    };
    n.fn._scrollable = function() {
        return this.map(function() {
            var t = this,
                r = !t.nodeName || n.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1,
                i;
            return r ? (i = (t.contentWindow || t).document || t.ownerDocument || t, /webkit/i.test(navigator.userAgent) || i.compatMode == "BackCompat" ? i.body : i.documentElement) : t
        })
    };
    n.fn.scrollTo = function(r, u, f) {
        return typeof u == "object" && (f = u, u = 0), typeof f == "function" && (f = {
            onAfter: f
        }), r == "max" && (r = 9e9), f = n.extend({}, t.defaults, f), u = u || f.duration, f.queue = f.queue && f.axis.length > 1, f.queue && (u /= 2), f.offset = i(f.offset), f.over = i(f.over), this._scrollable().each(function() {
            function l(n) {
                h.animate(o, u, f.easing, n && function() {
                    n.call(this, r, f)
                })
            }
            if (r != null) {
                var s = this,
                    h = n(s),
                    e = r,
                    c, o = {},
                    a = h.is("html,body");
                switch (typeof e) {
                    case "number":
                    case "string":
                        if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                            e = i(e);
                            break
                        }
                        if (e = n(e, this), !e.length) return;
                    case "object":
                        (e.is || e.style) && (c = (e = n(e)).offset())
                }
                n.each(f.axis.split(""), function(n, i) {
                    var y = i == "x" ? "Left" : "Top",
                        u = y.toLowerCase(),
                        r = "scroll" + y,
                        p = s[r],
                        w = t.max(s, i),
                        v;
                    c ? (o[r] = c[u] + (a ? 0 : p - h.offset()[u]), f.margin && (o[r] -= parseInt(e.css("margin" + y)) || 0, o[r] -= parseInt(e.css("border" + y + "Width")) || 0), o[r] += f.offset[u] || 0, f.over[u] && (o[r] += e[i == "x" ? "width" : "height"]() * f.over[u])) : (v = e[u], o[r] = v.slice && v.slice(-1) == "%" ? parseFloat(v) / 100 * w : v);
                    f.limit && /^\d+$/.test(o[r]) && (o[r] = o[r] <= 0 ? 0 : Math.min(o[r], w));
                    !n && f.queue && (p != o[r] && l(f.onAfterFirst), delete o[r])
                });
                l(f.onAfter)
            }
        }).end()
    };
    t.max = function(t, i) {
        var r = i == "x" ? "Width" : "Height",
            u = "scroll" + r;
        if (!n(t).is("html,body")) return t[u] - n(t)[r.toLowerCase()]();
        var f = "client" + r,
            e = t.ownerDocument.documentElement,
            o = t.ownerDocument.body;
        return Math.max(e[u], o[u]) - Math.min(e[f], o[f])
    }
}(jQuery);
(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
})(function(n) {
    function i(n) {
        return t.raw ? n : encodeURIComponent(n)
    }

    function f(n) {
        return t.raw ? n : decodeURIComponent(n)
    }

    function e(n) {
        return i(t.json ? JSON.stringify(n) : String(n))
    }

    function o(n) {
        n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return n = decodeURIComponent(n.replace(u, " ")), t.json ? JSON.parse(n) : n
        } catch (i) {}
    }

    function r(i, r) {
        var u = t.raw ? i : o(i);
        return n.isFunction(r) ? r(u) : u
    }
    var u = /\+/g,
        t = n.cookie = function(u, o, s) {
            var y, a, h, v, c, p;
            if (o !== undefined && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
            for (h = u ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) {
                var w = v[c].split("="),
                    b = f(w.shift()),
                    l = w.join("=");
                if (u && u === b) {
                    h = r(l, o);
                    break
                }
                u || (l = r(l)) === undefined || (h[b] = l)
            }
            return h
        };
    t.defaults = {};
    n.removeCookie = function(t, i) {
        return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, {
            expires: -1
        })), !n.cookie(t))
    }
}),
function(n, t) {
    var f = {
            Identity: function(n) {
                return n
            },
            True: function() {
                return !0
            },
            Blank: function() {}
        },
        o = {
            Boolean: "boolean",
            Number: "number",
            String: "string",
            Object: "object",
            Undefined: typeof t,
            Function: typeof
            function() {}
        },
        p = {
            "": f.Identity
        },
        r = {
            createLambda: function(n) {
                var t, l, i, a, u, e, r, s, h, v, c;
                if (n == null) return f.Identity;
                if (typeof n === o.String) {
                    if (t = p[n], t != null) return t;
                    if (n.indexOf("=>") === -1) {
                        for (l = new RegExp("[$]+", "g"), i = 0;
                            (a = l.exec(n)) != null;) u = a[0].length, u > i && (i = u);
                        for (e = [], r = 1; r <= i; r++) {
                            for (s = "", h = 0; h < r; h++) s += "$";
                            e.push(s)
                        }
                        return v = Array.prototype.join.call(e, ","), t = new Function(v, "return " + n), p[n] = t, t
                    }
                    return c = n.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/), t = new Function(c[1], "return " + c[2]), p[n] = t, t
                }
                return n
            },
            isIEnumerable: function(n) {
                if (typeof Enumerator !== o.Undefined) try {
                    return new Enumerator(n), !0
                } catch (t) {}
                return !1
            },
            defineProperty: Object.defineProperties != null ? function(n, t, i) {
                Object.defineProperty(n, t, {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: i
                })
            } : function(n, t, i) {
                n[t] = i
            },
            compare: function(n, t) {
                return n === t ? 0 : n > t ? 1 : -1
            },
            dispose: function(n) {
                n != null && n.dispose()
            }
        },
        l = {
            Before: 0,
            Running: 1,
            After: 2
        },
        u = function(n, t, i) {
            var u = new b,
                r = l.Before;
            this.current = u.current;
            this.moveNext = function() {
                try {
                    switch (r) {
                        case l.Before:
                            r = l.Running;
                            n();
                        case l.Running:
                            return t.apply(u) ? !0 : (this.dispose(), !1);
                        case l.After:
                            return !1
                    }
                } catch (i) {
                    this.dispose();
                    throw i;
                }
            };
            this.dispose = function() {
                if (r == l.Running) try {
                    i()
                } finally {
                    r = l.After
                }
            }
        },
        b = function() {
            var n = null;
            this.current = function() {
                return n
            };
            this.yieldReturn = function(t) {
                return n = t, !0
            };
            this.yieldBreak = function() {
                return !1
            }
        },
        i = function(n) {
            this.getEnumerator = n
        },
        s, a, y, e, h, c;
    i.Utils = {};
    i.Utils.createLambda = function(n) {
        return r.createLambda(n)
    };
    i.Utils.createEnumerable = function(n) {
        return new i(n)
    };
    i.Utils.createEnumerator = function(n, t, i) {
        return new u(n, t, i)
    };
    i.Utils.extendTo = function(n) {
        var u = n.prototype,
            o, t, f;
        n === Array ? (o = e.prototype, r.defineProperty(u, "getSource", function() {
            return this
        })) : (o = i.prototype, r.defineProperty(u, "getEnumerator", function() {
            return i.from(this).getEnumerator()
        }));
        for (t in o)(f = o[t], u[t] != f) && (u[t] == null || (t = t + "ByLinq", u[t] != f)) && f instanceof Function && r.defineProperty(u, t, f)
    };
    i.choice = function() {
        var n = arguments;
        return new i(function() {
            return new u(function() {
                n = n[0] instanceof Array ? n[0] : n[0].getEnumerator != null ? n[0].toArray() : n
            }, function() {
                return this.yieldReturn(n[Math.floor(Math.random() * n.length)])
            }, f.Blank)
        })
    };
    i.cycle = function() {
        var n = arguments;
        return new i(function() {
            var t = 0;
            return new u(function() {
                n = n[0] instanceof Array ? n[0] : n[0].getEnumerator != null ? n[0].toArray() : n
            }, function() {
                return t >= n.length && (t = 0), this.yieldReturn(n[t++])
            }, f.Blank)
        })
    };
    i.empty = function() {
        return new i(function() {
            return new u(f.Blank, function() {
                return !1
            }, f.Blank)
        })
    };
    i.from = function(n) {
        if (n == null) return i.empty();
        if (n instanceof i) return n;
        if (typeof n == o.Number || typeof n == o.Boolean) return i.repeat(n, 1);
        if (typeof n == o.String) return new i(function() {
            var t = 0;
            return new u(f.Blank, function() {
                return t < n.length ? this.yieldReturn(n.charAt(t++)) : !1
            }, f.Blank)
        });
        if (typeof n != o.Function) {
            if (typeof n.length == o.Number) return new e(n);
            if (!(n instanceof Object) && r.isIEnumerable(n)) return new i(function() {
                var i = !0,
                    t;
                return new u(function() {
                    t = new Enumerator(n)
                }, function() {
                    return i ? i = !1 : t.moveNext(), t.atEnd() ? !1 : this.yieldReturn(t.item())
                }, f.Blank)
            });
            if (typeof Windows === o.Object && typeof n.first === o.Function) return new i(function() {
                var i = !0,
                    t;
                return new u(function() {
                    t = n.first()
                }, function() {
                    return i ? i = !1 : t.moveNext(), t.hasCurrent ? this.yieldReturn(t.current) : this.yieldBreak()
                }, f.Blank)
            })
        }
        return new i(function() {
            var t = [],
                i = 0;
            return new u(function() {
                var i, r;
                for (i in n) r = n[i], r instanceof Function || !Object.prototype.hasOwnProperty.call(n, i) || t.push({
                    key: i,
                    value: r
                })
            }, function() {
                return i < t.length ? this.yieldReturn(t[i++]) : !1
            }, f.Blank)
        })
    };
    i.make = function(n) {
        return i.repeat(n, 1)
    };
    i.matches = function(n, t, r) {
        return r == null && (r = ""), t instanceof RegExp && (r += t.ignoreCase ? "i" : "", r += t.multiline ? "m" : "", t = t.source), r.indexOf("g") === -1 && (r += "g"), new i(function() {
            var i;
            return new u(function() {
                i = new RegExp(t, r)
            }, function() {
                var t = i.exec(n);
                return t ? this.yieldReturn(t) : !1
            }, f.Blank)
        })
    };
    i.range = function(n, t, r) {
        return r == null && (r = 1), new i(function() {
            var i, e = 0;
            return new u(function() {
                i = n - r
            }, function() {
                return e++ < t ? this.yieldReturn(i += r) : this.yieldBreak()
            }, f.Blank)
        })
    };
    i.rangeDown = function(n, t, r) {
        return r == null && (r = 1), new i(function() {
            var i, e = 0;
            return new u(function() {
                i = n + r
            }, function() {
                return e++ < t ? this.yieldReturn(i -= r) : this.yieldBreak()
            }, f.Blank)
        })
    };
    i.rangeTo = function(n, t, r) {
        return r == null && (r = 1), n < t ? new i(function() {
            var i;
            return new u(function() {
                i = n - r
            }, function() {
                var n = i += r;
                return n <= t ? this.yieldReturn(n) : this.yieldBreak()
            }, f.Blank)
        }) : new i(function() {
            var i;
            return new u(function() {
                i = n + r
            }, function() {
                var n = i -= r;
                return n >= t ? this.yieldReturn(n) : this.yieldBreak()
            }, f.Blank)
        })
    };
    i.repeat = function(n, t) {
        return t != null ? i.repeat(n).take(t) : new i(function() {
            return new u(f.Blank, function() {
                return this.yieldReturn(n)
            }, f.Blank)
        })
    };
    i.repeatWithFinalize = function(n, t) {
        return n = r.createLambda(n), t = r.createLambda(t), new i(function() {
            var i;
            return new u(function() {
                i = n()
            }, function() {
                return this.yieldReturn(i)
            }, function() {
                i != null && (t(i), i = null)
            })
        })
    };
    i.generate = function(n, t) {
        return t != null ? i.generate(n).take(t) : (n = r.createLambda(n), new i(function() {
            return new u(f.Blank, function() {
                return this.yieldReturn(n())
            }, f.Blank)
        }))
    };
    i.toInfinity = function(n, t) {
        return n == null && (n = 0), t == null && (t = 1), new i(function() {
            var i;
            return new u(function() {
                i = n - t
            }, function() {
                return this.yieldReturn(i += t)
            }, f.Blank)
        })
    };
    i.toNegativeInfinity = function(n, t) {
        return n == null && (n = 0), t == null && (t = 1), new i(function() {
            var i;
            return new u(function() {
                i = n + t
            }, function() {
                return this.yieldReturn(i -= t)
            }, f.Blank)
        })
    };
    i.unfold = function(n, t) {
        return t = r.createLambda(t), new i(function() {
            var r = !0,
                i;
            return new u(f.Blank, function() {
                return r ? (r = !1, i = n, this.yieldReturn(i)) : (i = t(i), this.yieldReturn(i))
            }, f.Blank)
        })
    };
    i.defer = function(n) {
        return new i(function() {
            var t;
            return new u(function() {
                t = i.from(n()).getEnumerator()
            }, function() {
                return t.moveNext() ? this.yieldReturn(t.current()) : this.yieldBreak()
            }, function() {
                r.dispose(t)
            })
        })
    };
    i.prototype.traverseBreadthFirst = function(n, t) {
        var f = this;
        return n = r.createLambda(n), t = r.createLambda(t), new i(function() {
            var e, s = 0,
                o = [];
            return new u(function() {
                e = f.getEnumerator()
            }, function() {
                for (;;) {
                    if (e.moveNext()) return o.push(e.current()), this.yieldReturn(t(e.current(), s));
                    var u = i.from(o).selectMany(function(t) {
                        return n(t)
                    });
                    if (u.any()) s++, o = [], r.dispose(e), e = u.getEnumerator();
                    else return !1
                }
            }, function() {
                r.dispose(e)
            })
        })
    };
    i.prototype.traverseDepthFirst = function(n, t) {
        var f = this;
        return n = r.createLambda(n), t = r.createLambda(t), new i(function() {
            var o = [],
                e;
            return new u(function() {
                e = f.getEnumerator()
            }, function() {
                for (;;) {
                    if (e.moveNext()) {
                        var u = t(e.current(), o.length);
                        return o.push(e), e = i.from(n(e.current())).getEnumerator(), this.yieldReturn(u)
                    }
                    if (o.length <= 0) return !1;
                    r.dispose(e);
                    e = o.pop()
                }
            }, function() {
                try {
                    r.dispose(e)
                } finally {
                    i.from(o).forEach(function(n) {
                        n.dispose()
                    })
                }
            })
        })
    };
    i.prototype.flatten = function() {
        var n = this;
        return new i(function() {
            var e, t = null;
            return new u(function() {
                e = n.getEnumerator()
            }, function() {
                for (;;) {
                    if (t != null) {
                        if (t.moveNext()) return this.yieldReturn(t.current());
                        t = null
                    }
                    if (e.moveNext())
                        if (e.current() instanceof Array) {
                            r.dispose(t);
                            t = i.from(e.current()).selectMany(f.Identity).flatten().getEnumerator();
                            continue
                        } else return this.yieldReturn(e.current());
                    return !1
                }
            }, function() {
                try {
                    r.dispose(e)
                } finally {
                    r.dispose(t)
                }
            })
        })
    };
    i.prototype.pairwise = function(n) {
        var t = this;
        return n = r.createLambda(n), new i(function() {
            var i;
            return new u(function() {
                i = t.getEnumerator();
                i.moveNext()
            }, function() {
                var t = i.current();
                return i.moveNext() ? this.yieldReturn(n(t, i.current())) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.scan = function(n, t) {
        var f, e;
        return t == null ? (t = r.createLambda(n), f = !1) : (t = r.createLambda(t), f = !0), e = this, new i(function() {
            var i, o, s = !0;
            return new u(function() {
                i = e.getEnumerator()
            }, function() {
                if (s) {
                    if (s = !1, f) return this.yieldReturn(o = n);
                    if (i.moveNext()) return this.yieldReturn(o = i.current())
                }
                return i.moveNext() ? this.yieldReturn(o = t(o, i.current())) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.select = function(n) {
        if (n = r.createLambda(n), n.length <= 1) return new c(this, null, n);
        var t = this;
        return new i(function() {
            var i, f = 0;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                return i.moveNext() ? this.yieldReturn(n(i.current(), f++)) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.selectMany = function(n, f) {
        var e = this;
        return n = r.createLambda(n), f == null && (f = function(n, t) {
            return t
        }), f = r.createLambda(f), new i(function() {
            var s, o = t,
                h = 0;
            return new u(function() {
                s = e.getEnumerator()
            }, function() {
                if (o === t && !s.moveNext()) return !1;
                do {
                    if (o == null) {
                        var u = n(s.current(), h++);
                        o = i.from(u).getEnumerator()
                    }
                    if (o.moveNext()) return this.yieldReturn(f(s.current(), o.current()));
                    r.dispose(o);
                    o = null
                } while (s.moveNext());
                return !1
            }, function() {
                try {
                    r.dispose(s)
                } finally {
                    r.dispose(o)
                }
            })
        })
    };
    i.prototype.where = function(n) {
        if (n = r.createLambda(n), n.length <= 1) return new h(this, n);
        var t = this;
        return new i(function() {
            var i, f = 0;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                while (i.moveNext())
                    if (n(i.current(), f++)) return this.yieldReturn(i.current());
                return !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.choose = function(n) {
        n = r.createLambda(n);
        var t = this;
        return new i(function() {
            var i, f = 0;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                while (i.moveNext()) {
                    var t = n(i.current(), f++);
                    if (t != null) return this.yieldReturn(t)
                }
                return this.yieldBreak()
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.ofType = function(n) {
        var t;
        switch (n) {
            case Number:
                t = o.Number;
                break;
            case String:
                t = o.String;
                break;
            case Boolean:
                t = o.Boolean;
                break;
            case Function:
                t = o.Function;
                break;
            default:
                t = null
        }
        return t === null ? this.where(function(t) {
            return t instanceof n
        }) : this.where(function(n) {
            return typeof n === t
        })
    };
    i.prototype.zip = function() {
        var e = arguments,
            n = r.createLambda(arguments[arguments.length - 1]),
            t = this,
            f;
        return arguments.length == 2 ? (f = arguments[0], new i(function() {
            var e, o, s = 0;
            return new u(function() {
                e = t.getEnumerator();
                o = i.from(f).getEnumerator()
            }, function() {
                return e.moveNext() && o.moveNext() ? this.yieldReturn(n(e.current(), o.current(), s++)) : !1
            }, function() {
                try {
                    r.dispose(e)
                } finally {
                    r.dispose(o)
                }
            })
        })) : new i(function() {
            var f, o = 0;
            return new u(function() {
                var n = i.make(t).concat(i.from(e).takeExceptLast().select(i.from)).select(function(n) {
                    return n.getEnumerator()
                }).toArray();
                f = i.from(n)
            }, function() {
                if (f.all(function(n) {
                        return n.moveNext()
                    })) {
                    var t = f.select(function(n) {
                        return n.current()
                    }).toArray();
                    return t.push(o++), this.yieldReturn(n.apply(null, t))
                }
                return this.yieldBreak()
            }, function() {
                i.from(f).forEach(r.dispose)
            })
        })
    };
    i.prototype.merge = function() {
        var n = arguments,
            t = this;
        return new i(function() {
            var f, e = -1;
            return new u(function() {
                f = i.make(t).concat(i.from(n).select(i.from)).select(function(n) {
                    return n.getEnumerator()
                }).toArray()
            }, function() {
                while (f.length > 0) {
                    e = e >= f.length - 1 ? 0 : e + 1;
                    var n = f[e];
                    if (n.moveNext()) return this.yieldReturn(n.current());
                    n.dispose();
                    f.splice(e--, 1)
                }
                return this.yieldBreak()
            }, function() {
                i.from(f).forEach(r.dispose)
            })
        })
    };
    i.prototype.join = function(n, e, o, s, h) {
        e = r.createLambda(e);
        o = r.createLambda(o);
        s = r.createLambda(s);
        h = r.createLambda(h);
        var c = this;
        return new i(function() {
            var l, v, a = null,
                y = 0;
            return new u(function() {
                l = c.getEnumerator();
                v = i.from(n).toLookup(o, f.Identity, h)
            }, function() {
                for (var n, i;;) {
                    if (a != null) {
                        if (n = a[y++], n !== t) return this.yieldReturn(s(l.current(), n));
                        n = null;
                        y = 0
                    }
                    if (l.moveNext()) i = e(l.current()), a = v.get(i).toArray();
                    else return !1
                }
            }, function() {
                r.dispose(l)
            })
        })
    };
    i.prototype.groupJoin = function(n, t, e, o, s) {
        t = r.createLambda(t);
        e = r.createLambda(e);
        o = r.createLambda(o);
        s = r.createLambda(s);
        var h = this;
        return new i(function() {
            var c = h.getEnumerator(),
                l = null;
            return new u(function() {
                c = h.getEnumerator();
                l = i.from(n).toLookup(e, f.Identity, s)
            }, function() {
                if (c.moveNext()) {
                    var n = l.get(t(c.current()));
                    return this.yieldReturn(o(c.current(), n))
                }
                return !1
            }, function() {
                r.dispose(c)
            })
        })
    };
    i.prototype.all = function(n) {
        n = r.createLambda(n);
        var t = !0;
        return this.forEach(function(i) {
            if (!n(i)) return t = !1, !1
        }), t
    };
    i.prototype.any = function(n) {
        n = r.createLambda(n);
        var t = this.getEnumerator();
        try {
            if (arguments.length == 0) return t.moveNext();
            while (t.moveNext())
                if (n(t.current())) return !0;
            return !1
        } finally {
            r.dispose(t)
        }
    };
    i.prototype.isEmpty = function() {
        return !this.any()
    };
    i.prototype.concat = function() {
        var n = this,
            t, f;
        return arguments.length == 1 ? (t = arguments[0], new i(function() {
            var e, f;
            return new u(function() {
                e = n.getEnumerator()
            }, function() {
                if (f == null) {
                    if (e.moveNext()) return this.yieldReturn(e.current());
                    f = i.from(t).getEnumerator()
                }
                return f.moveNext() ? this.yieldReturn(f.current()) : !1
            }, function() {
                try {
                    r.dispose(e)
                } finally {
                    r.dispose(f)
                }
            })
        })) : (f = arguments, new i(function() {
            var t;
            return new u(function() {
                t = i.make(n).concat(i.from(f).select(i.from)).select(function(n) {
                    return n.getEnumerator()
                }).toArray()
            }, function() {
                while (t.length > 0) {
                    var n = t[0];
                    if (n.moveNext()) return this.yieldReturn(n.current());
                    n.dispose();
                    t.splice(0, 1)
                }
                return this.yieldBreak()
            }, function() {
                i.from(t).forEach(r.dispose)
            })
        }))
    };
    i.prototype.insert = function(n, t) {
        var f = this;
        return new i(function() {
            var o, e, s = 0,
                h = !1;
            return new u(function() {
                o = f.getEnumerator();
                e = i.from(t).getEnumerator()
            }, function() {
                return s == n && e.moveNext() ? (h = !0, this.yieldReturn(e.current())) : o.moveNext() ? (s++, this.yieldReturn(o.current())) : !h && e.moveNext() ? this.yieldReturn(e.current()) : !1
            }, function() {
                try {
                    r.dispose(o)
                } finally {
                    r.dispose(e)
                }
            })
        })
    };
    i.prototype.alternate = function(n) {
        var t = this;
        return new i(function() {
            var f, e, s, o;
            return new u(function() {
                s = n instanceof Array || n.getEnumerator != null ? i.from(i.from(n).toArray()) : i.make(n);
                e = t.getEnumerator();
                e.moveNext() && (f = e.current())
            }, function() {
                for (;;) {
                    if (o != null) {
                        if (o.moveNext()) return this.yieldReturn(o.current());
                        o = null
                    }
                    if (f == null && e.moveNext()) {
                        f = e.current();
                        o = s.getEnumerator();
                        continue
                    } else if (f != null) {
                        var n = f;
                        return f = null, this.yieldReturn(n)
                    }
                    return this.yieldBreak()
                }
            }, function() {
                try {
                    r.dispose(e)
                } finally {
                    r.dispose(o)
                }
            })
        })
    };
    i.prototype.contains = function(n, t) {
        t = r.createLambda(t);
        var i = this.getEnumerator();
        try {
            while (i.moveNext())
                if (t(i.current()) === n) return !0;
            return !1
        } finally {
            r.dispose(i)
        }
    };
    i.prototype.defaultIfEmpty = function(n) {
        var f = this;
        return n === t && (n = null), new i(function() {
            var t, i = !0;
            return new u(function() {
                t = f.getEnumerator()
            }, function() {
                return t.moveNext() ? (i = !1, this.yieldReturn(t.current())) : i ? (i = !1, this.yieldReturn(n)) : !1
            }, function() {
                r.dispose(t)
            })
        })
    };
    i.prototype.distinct = function(n) {
        return this.except(i.empty(), n)
    };
    i.prototype.distinctUntilChanged = function(n) {
        n = r.createLambda(n);
        var t = this;
        return new i(function() {
            var i, f, e;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                while (i.moveNext()) {
                    var t = n(i.current());
                    if (e) return e = !1, f = t, this.yieldReturn(i.current());
                    if (f !== t) return f = t, this.yieldReturn(i.current())
                }
                return this.yieldBreak()
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.except = function(n, t) {
        t = r.createLambda(t);
        var f = this;
        return new i(function() {
            var e, o;
            return new u(function() {
                e = f.getEnumerator();
                o = new v(t);
                i.from(n).forEach(function(n) {
                    o.add(n)
                })
            }, function() {
                while (e.moveNext()) {
                    var n = e.current();
                    if (!o.contains(n)) return o.add(n), this.yieldReturn(n)
                }
                return !1
            }, function() {
                r.dispose(e)
            })
        })
    };
    i.prototype.intersect = function(n, t) {
        t = r.createLambda(t);
        var f = this;
        return new i(function() {
            var e, o, s;
            return new u(function() {
                e = f.getEnumerator();
                o = new v(t);
                i.from(n).forEach(function(n) {
                    o.add(n)
                });
                s = new v(t)
            }, function() {
                while (e.moveNext()) {
                    var n = e.current();
                    if (!s.contains(n) && o.contains(n)) return s.add(n), this.yieldReturn(n)
                }
                return !1
            }, function() {
                r.dispose(e)
            })
        })
    };
    i.prototype.sequenceEqual = function(n, t) {
        var f, u;
        t = r.createLambda(t);
        f = this.getEnumerator();
        try {
            u = i.from(n).getEnumerator();
            try {
                while (f.moveNext())
                    if (!u.moveNext() || t(f.current()) !== t(u.current())) return !1;
                return u.moveNext() ? !1 : !0
            } finally {
                r.dispose(u)
            }
        } finally {
            r.dispose(f)
        }
    };
    i.prototype.union = function(n, f) {
        f = r.createLambda(f);
        var e = this;
        return new i(function() {
            var h, o, s;
            return new u(function() {
                h = e.getEnumerator();
                s = new v(f)
            }, function() {
                var r;
                if (o === t) {
                    while (h.moveNext())
                        if (r = h.current(), !s.contains(r)) return s.add(r), this.yieldReturn(r);
                    o = i.from(n).getEnumerator()
                }
                while (o.moveNext())
                    if (r = o.current(), !s.contains(r)) return s.add(r), this.yieldReturn(r);
                return !1
            }, function() {
                try {
                    r.dispose(h)
                } finally {
                    r.dispose(o)
                }
            })
        })
    };
    i.prototype.orderBy = function(n) {
        return new s(this, n, !1)
    };
    i.prototype.orderByDescending = function(n) {
        return new s(this, n, !0)
    };
    i.prototype.reverse = function() {
        var n = this;
        return new i(function() {
            var t, i;
            return new u(function() {
                t = n.toArray();
                i = t.length
            }, function() {
                return i > 0 ? this.yieldReturn(t[--i]) : !1
            }, f.Blank)
        })
    };
    i.prototype.shuffle = function() {
        var n = this;
        return new i(function() {
            var t;
            return new u(function() {
                t = n.toArray()
            }, function() {
                if (t.length > 0) {
                    var n = Math.floor(Math.random() * t.length);
                    return this.yieldReturn(t.splice(n, 1)[0])
                }
                return !1
            }, f.Blank)
        })
    };
    i.prototype.weightedSample = function(n) {
        n = r.createLambda(n);
        var t = this;
        return new i(function() {
            var i, r = 0;
            return new u(function() {
                i = t.choose(function(t) {
                    var i = n(t);
                    return i <= 0 ? null : (r += i, {
                        value: t,
                        bound: r
                    })
                }).toArray()
            }, function() {
                var t;
                if (i.length > 0) {
                    for (var f = Math.floor(Math.random() * r) + 1, u = -1, n = i.length; n - u > 1;) t = Math.floor((u + n) / 2), i[t].bound >= f ? n = t : u = t;
                    return this.yieldReturn(i[n].value)
                }
                return this.yieldBreak()
            }, f.Blank)
        })
    };
    i.prototype.groupBy = function(n, t, f, e) {
        var o = this;
        return n = r.createLambda(n), t = r.createLambda(t), f != null && (f = r.createLambda(f)), e = r.createLambda(e), new i(function() {
            var i;
            return new u(function() {
                i = o.toLookup(n, t, e).toEnumerable().getEnumerator()
            }, function() {
                while (i.moveNext()) return f == null ? this.yieldReturn(i.current()) : this.yieldReturn(f(i.current().key(), i.current()));
                return !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.partitionBy = function(n, t, f, e) {
        var s = this,
            o;
        return n = r.createLambda(n), t = r.createLambda(t), e = r.createLambda(e), f == null ? (o = !1, f = function(n, t) {
            return new w(n, t)
        }) : (o = !0, f = r.createLambda(f)), new i(function() {
            var h, l, a, c = [];
            return new u(function() {
                h = s.getEnumerator();
                h.moveNext() && (l = n(h.current()), a = e(l), c.push(t(h.current())))
            }, function() {
                for (var r, u;
                    (r = h.moveNext()) == !0;)
                    if (a === e(n(h.current()))) c.push(t(h.current()));
                    else break;
                return c.length > 0 ? (u = o ? f(l, i.from(c)) : f(l, c), r ? (l = n(h.current()), a = e(l), c = [t(h.current())]) : c = [], this.yieldReturn(u)) : !1
            }, function() {
                r.dispose(h)
            })
        })
    };
    i.prototype.buffer = function(n) {
        var t = this;
        return new i(function() {
            var i;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                for (var t = [], r = 0; i.moveNext();)
                    if (t.push(i.current()), ++r >= n) return this.yieldReturn(t);
                return t.length > 0 ? this.yieldReturn(t) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.aggregate = function(n, t, i) {
        return i = r.createLambda(i), i(this.scan(n, t, i).last())
    };
    i.prototype.average = function(n) {
        n = r.createLambda(n);
        var t = 0,
            i = 0;
        return this.forEach(function(r) {
            t += n(r);
            ++i
        }), t / i
    };
    i.prototype.count = function(n) {
        n = n == null ? f.True : r.createLambda(n);
        var t = 0;
        return this.forEach(function(i, r) {
            n(i, r) && ++t
        }), t
    };
    i.prototype.max = function(n) {
        return n == null && (n = f.Identity), this.select(n).aggregate(function(n, t) {
            return n > t ? n : t
        })
    };
    i.prototype.min = function(n) {
        return n == null && (n = f.Identity), this.select(n).aggregate(function(n, t) {
            return n < t ? n : t
        })
    };
    i.prototype.maxBy = function(n) {
        return n = r.createLambda(n), this.aggregate(function(t, i) {
            return n(t) > n(i) ? t : i
        })
    };
    i.prototype.minBy = function(n) {
        return n = r.createLambda(n), this.aggregate(function(t, i) {
            return n(t) < n(i) ? t : i
        })
    };
    i.prototype.sum = function(n) {
        return n == null && (n = f.Identity), this.select(n).aggregate(0, function(n, t) {
            return n + t
        })
    };
    i.prototype.elementAt = function(n) {
        var t, i = !1;
        if (this.forEach(function(r, u) {
                if (u == n) return t = r, i = !0, !1
            }), !i) throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
        return t
    };
    i.prototype.elementAtOrDefault = function(n, i) {
        i === t && (i = null);
        var r, u = !1;
        return this.forEach(function(t, i) {
            if (i == n) return r = t, u = !0, !1
        }), u ? r : i
    };
    i.prototype.first = function(n) {
        if (n != null) return this.where(n).first();
        var t, i = !1;
        if (this.forEach(function(n) {
                return t = n, i = !0, !1
            }), !i) throw new Error("first:No element satisfies the condition.");
        return t
    };
    i.prototype.firstOrDefault = function(n, i) {
        if (i === t && (i = null), n != null) return this.where(n).firstOrDefault(null, i);
        var r, u = !1;
        return this.forEach(function(n) {
            return r = n, u = !0, !1
        }), u ? r : i
    };
    i.prototype.last = function(n) {
        if (n != null) return this.where(n).last();
        var t, i = !1;
        if (this.forEach(function(n) {
                i = !0;
                t = n
            }), !i) throw new Error("last:No element satisfies the condition.");
        return t
    };
    i.prototype.lastOrDefault = function(n, i) {
        if (i === t && (i = null), n != null) return this.where(n).lastOrDefault(null, i);
        var r, u = !1;
        return this.forEach(function(n) {
            u = !0;
            r = n
        }), u ? r : i
    };
    i.prototype.single = function(n) {
        if (n != null) return this.where(n).single();
        var i, t = !1;
        if (this.forEach(function(n) {
                if (t) throw new Error("single:sequence contains more than one element.");
                else t = !0, i = n
            }), !t) throw new Error("single:No element satisfies the condition.");
        return i
    };
    i.prototype.singleOrDefault = function(n, i) {
        if (i === t && (i = null), n != null) return this.where(n).singleOrDefault(null, i);
        var u, r = !1;
        return this.forEach(function(n) {
            if (r) throw new Error("single:sequence contains more than one element.");
            else r = !0, u = n
        }), r ? u : i
    };
    i.prototype.skip = function(n) {
        var t = this;
        return new i(function() {
            var i, f = 0;
            return new u(function() {
                for (i = t.getEnumerator(); f++ < n && i.moveNext(););
            }, function() {
                return i.moveNext() ? this.yieldReturn(i.current()) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.skipWhile = function(n) {
        n = r.createLambda(n);
        var t = this;
        return new i(function() {
            var i, e = 0,
                f = !1;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                while (!f)
                    if (i.moveNext()) {
                        if (!n(i.current(), e++)) return f = !0, this.yieldReturn(i.current());
                        continue
                    } else return !1;
                return i.moveNext() ? this.yieldReturn(i.current()) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.take = function(n) {
        var t = this;
        return new i(function() {
            var i, f = 0;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                return f++ < n && i.moveNext() ? this.yieldReturn(i.current()) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.takeWhile = function(n) {
        n = r.createLambda(n);
        var t = this;
        return new i(function() {
            var i, f = 0;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                return i.moveNext() && n(i.current(), f++) ? this.yieldReturn(i.current()) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.takeExceptLast = function(n) {
        n == null && (n = 1);
        var t = this;
        return new i(function() {
            if (n <= 0) return t.getEnumerator();
            var i, f = [];
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                while (i.moveNext()) {
                    if (f.length == n) return f.push(i.current()), this.yieldReturn(f.shift());
                    f.push(i.current())
                }
                return !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.takeFromLast = function(n) {
        if (n <= 0 || n == null) return i.empty();
        var t = this;
        return new i(function() {
            var o, f, e = [];
            return new u(function() {
                o = t.getEnumerator()
            }, function() {
                while (o.moveNext()) e.length == n && e.shift(), e.push(o.current());
                return f == null && (f = i.from(e).getEnumerator()), f.moveNext() ? this.yieldReturn(f.current()) : !1
            }, function() {
                r.dispose(f)
            })
        })
    };
    i.prototype.indexOf = function(n) {
        var t = null;
        return typeof n === o.Function ? this.forEach(function(i, r) {
            if (n(i, r)) return t = r, !1
        }) : this.forEach(function(i, r) {
            if (i === n) return t = r, !1
        }), t !== null ? t : -1
    };
    i.prototype.lastIndexOf = function(n) {
        var t = -1;
        return typeof n === o.Function ? this.forEach(function(i, r) {
            n(i, r) && (t = r)
        }) : this.forEach(function(i, r) {
            i === n && (t = r)
        }), t
    };
    i.prototype.cast = function() {
        return this
    };
    i.prototype.asEnumerable = function() {
        return i.from(this)
    };
    i.prototype.toArray = function() {
        var n = [];
        return this.forEach(function(t) {
            n.push(t)
        }), n
    };
    i.prototype.toLookup = function(n, i, u) {
        n = r.createLambda(n);
        i = r.createLambda(i);
        u = r.createLambda(u);
        var f = new v(u);
        return this.forEach(function(r) {
            var u = n(r),
                e = i(r),
                o = f.get(u);
            o !== t ? o.push(e) : f.add(u, [e])
        }), new k(f)
    };
    i.prototype.toObject = function(n, t) {
        n = r.createLambda(n);
        t = r.createLambda(t);
        var i = {};
        return this.forEach(function(r) {
            i[n(r)] = t(r)
        }), i
    };
    i.prototype.toDictionary = function(n, t, i) {
        n = r.createLambda(n);
        t = r.createLambda(t);
        i = r.createLambda(i);
        var u = new v(i);
        return this.forEach(function(i) {
            u.add(n(i), t(i))
        }), u
    };
    i.prototype.toJSONString = function(n, t) {
        if (typeof JSON === o.Undefined || JSON.stringify == null) throw new Error("toJSONString can't find JSON.stringify. This works native JSON support Browser or include json2.js");
        return JSON.stringify(this.toArray(), n, t)
    };
    i.prototype.toJoinedString = function(n, t) {
        return n == null && (n = ""), t == null && (t = f.Identity), this.select(t).toArray().join(n)
    };
    i.prototype.doAction = function(n) {
        var t = this;
        return n = r.createLambda(n), new i(function() {
            var i, f = 0;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                return i.moveNext() ? (n(i.current(), f++), this.yieldReturn(i.current())) : !1
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.forEach = function(n) {
        n = r.createLambda(n);
        var i = 0,
            t = this.getEnumerator();
        try {
            while (t.moveNext())
                if (n(t.current(), i++) === !1) break
        } finally {
            r.dispose(t)
        }
    };
    i.prototype.write = function(n, t) {
        n == null && (n = "");
        t = r.createLambda(t);
        var i = !0;
        this.forEach(function(r) {
            i ? i = !1 : document.write(n);
            document.write(t(r))
        })
    };
    i.prototype.writeLine = function(n) {
        n = r.createLambda(n);
        this.forEach(function(t) {
            document.writeln(n(t) + "<br />")
        })
    };
    i.prototype.force = function() {
        var n = this.getEnumerator();
        try {
            while (n.moveNext());
        } finally {
            r.dispose(n)
        }
    };
    i.prototype.letBind = function(n) {
        n = r.createLambda(n);
        var t = this;
        return new i(function() {
            var f;
            return new u(function() {
                f = i.from(n(t)).getEnumerator()
            }, function() {
                return f.moveNext() ? this.yieldReturn(f.current()) : !1
            }, function() {
                r.dispose(f)
            })
        })
    };
    i.prototype.share = function() {
        var i = this,
            n, t = !1;
        return new y(function() {
            return new u(function() {
                n == null && (n = i.getEnumerator())
            }, function() {
                if (t) throw new Error("enumerator is disposed");
                return n.moveNext() ? this.yieldReturn(n.current()) : !1
            }, f.Blank)
        }, function() {
            t = !0;
            r.dispose(n)
        })
    };
    i.prototype.memoize = function() {
        var e = this,
            n, t, i = !1;
        return new y(function() {
            var r = -1;
            return new u(function() {
                t == null && (t = e.getEnumerator(), n = [])
            }, function() {
                if (i) throw new Error("enumerator is disposed");
                return (r++, n.length <= r) ? t.moveNext() ? this.yieldReturn(n[r] = t.current()) : !1 : this.yieldReturn(n[r])
            }, f.Blank)
        }, function() {
            i = !0;
            r.dispose(t);
            n = null
        })
    };
    i.prototype.catchError = function(n) {
        n = r.createLambda(n);
        var t = this;
        return new i(function() {
            var i;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                try {
                    return i.moveNext() ? this.yieldReturn(i.current()) : !1
                } catch (t) {
                    return n(t), !1
                }
            }, function() {
                r.dispose(i)
            })
        })
    };
    i.prototype.finallyAction = function(n) {
        n = r.createLambda(n);
        var t = this;
        return new i(function() {
            var i;
            return new u(function() {
                i = t.getEnumerator()
            }, function() {
                return i.moveNext() ? this.yieldReturn(i.current()) : !1
            }, function() {
                try {
                    r.dispose(i)
                } finally {
                    n()
                }
            })
        })
    };
    i.prototype.log = function(n) {
        return n = r.createLambda(n), this.doAction(function(t) {
            typeof console !== o.Undefined && console.log(n(t))
        })
    };
    i.prototype.trace = function(n, t) {
        return n == null && (n = "Trace"), t = r.createLambda(t), this.doAction(function(i) {
            typeof console !== o.Undefined && console.log(n, t(i))
        })
    };
    s = function(n, t, i, u) {
        this.source = n;
        this.keySelector = r.createLambda(t);
        this.descending = i;
        this.parent = u
    };
    s.prototype = new i;
    s.prototype.createOrderedEnumerable = function(n, t) {
        return new s(this.source, n, t, this)
    };
    s.prototype.thenBy = function(n) {
        return this.createOrderedEnumerable(n, !1)
    };
    s.prototype.thenByDescending = function(n) {
        return this.createOrderedEnumerable(n, !0)
    };
    s.prototype.getEnumerator = function() {
        var i = this,
            t, n, r = 0;
        return new u(function() {
            t = [];
            n = [];
            i.source.forEach(function(i, r) {
                t.push(i);
                n.push(r)
            });
            var r = a.create(i, null);
            r.GenerateKeys(t);
            n.sort(function(n, t) {
                return r.compare(n, t)
            })
        }, function() {
            return r < n.length ? this.yieldReturn(t[n[r++]]) : !1
        }, f.Blank)
    };
    a = function(n, t, i) {
        this.keySelector = n;
        this.descending = t;
        this.child = i;
        this.keys = null
    };
    a.create = function(n, t) {
        var i = new a(n.keySelector, n.descending, t);
        return n.parent != null ? a.create(n.parent, i) : i
    };
    a.prototype.GenerateKeys = function(n) {
        for (var i = n.length, u = this.keySelector, r = new Array(i), t = 0; t < i; t++) r[t] = u(n[t]);
        this.keys = r;
        this.child != null && this.child.GenerateKeys(n)
    };
    a.prototype.compare = function(n, t) {
        var i = r.compare(this.keys[n], this.keys[t]);
        return i == 0 ? this.child != null ? this.child.compare(n, t) : r.compare(n, t) : this.descending ? -i : i
    };
    y = function(n, t) {
        this.dispose = t;
        i.call(this, n)
    };
    y.prototype = new i;
    e = function(n) {
        this.getSource = function() {
            return n
        }
    };
    e.prototype = new i;
    e.prototype.any = function(n) {
        return n == null ? this.getSource().length > 0 : i.prototype.any.apply(this, arguments)
    };
    e.prototype.count = function(n) {
        return n == null ? this.getSource().length : i.prototype.count.apply(this, arguments)
    };
    e.prototype.elementAt = function(n) {
        var t = this.getSource();
        return 0 <= n && n < t.length ? t[n] : i.prototype.elementAt.apply(this, arguments)
    };
    e.prototype.elementAtOrDefault = function(n, i) {
        i === t && (i = null);
        var r = this.getSource();
        return 0 <= n && n < r.length ? r[n] : i
    };
    e.prototype.first = function(n) {
        var t = this.getSource();
        return n == null && t.length > 0 ? t[0] : i.prototype.first.apply(this, arguments)
    };
    e.prototype.firstOrDefault = function(n, r) {
        if (r === t && (r = null), n != null) return i.prototype.firstOrDefault.apply(this, arguments);
        var u = this.getSource();
        return u.length > 0 ? u[0] : r
    };
    e.prototype.last = function(n) {
        var t = this.getSource();
        return n == null && t.length > 0 ? t[t.length - 1] : i.prototype.last.apply(this, arguments)
    };
    e.prototype.lastOrDefault = function(n, r) {
        if (r === t && (r = null), n != null) return i.prototype.lastOrDefault.apply(this, arguments);
        var u = this.getSource();
        return u.length > 0 ? u[u.length - 1] : r
    };
    e.prototype.skip = function(n) {
        var t = this.getSource();
        return new i(function() {
            var i;
            return new u(function() {
                i = n < 0 ? 0 : n
            }, function() {
                return i < t.length ? this.yieldReturn(t[i++]) : !1
            }, f.Blank)
        })
    };
    e.prototype.takeExceptLast = function(n) {
        return n == null && (n = 1), this.take(this.getSource().length - n)
    };
    e.prototype.takeFromLast = function(n) {
        return this.skip(this.getSource().length - n)
    };
    e.prototype.reverse = function() {
        var n = this.getSource();
        return new i(function() {
            var t;
            return new u(function() {
                t = n.length
            }, function() {
                return t > 0 ? this.yieldReturn(n[--t]) : !1
            }, f.Blank)
        })
    };
    e.prototype.sequenceEqual = function(n, t) {
        return (n instanceof e || n instanceof Array) && t == null && i.from(n).count() != this.count() ? !1 : i.prototype.sequenceEqual.apply(this, arguments)
    };
    e.prototype.toJoinedString = function(n, t) {
        var r = this.getSource();
        return t != null || !(r instanceof Array) ? i.prototype.toJoinedString.apply(this, arguments) : (n == null && (n = ""), r.join(n))
    };
    e.prototype.getEnumerator = function() {
        var n = this.getSource(),
            t = -1;
        return {
            current: function() {
                return n[t]
            },
            moveNext: function() {
                return ++t < n.length
            },
            dispose: f.Blank
        }
    };
    h = function(n, t) {
        this.prevSource = n;
        this.prevPredicate = t
    };
    h.prototype = new i;
    h.prototype.where = function(n) {
        if (n = r.createLambda(n), n.length <= 1) {
            var t = this.prevPredicate,
                u = function(i) {
                    return t(i) && n(i)
                };
            return new h(this.prevSource, u)
        }
        return i.prototype.where.call(this, n)
    };
    h.prototype.select = function(n) {
        return n = r.createLambda(n), n.length <= 1 ? new c(this.prevSource, this.prevPredicate, n) : i.prototype.select.call(this, n)
    };
    h.prototype.getEnumerator = function() {
        var t = this.prevPredicate,
            i = this.prevSource,
            n;
        return new u(function() {
            n = i.getEnumerator()
        }, function() {
            while (n.moveNext())
                if (t(n.current())) return this.yieldReturn(n.current());
            return !1
        }, function() {
            r.dispose(n)
        })
    };
    c = function(n, t, i) {
        this.prevSource = n;
        this.prevPredicate = t;
        this.prevSelector = i
    };
    c.prototype = new i;
    c.prototype.where = function(n) {
        return n = r.createLambda(n), n.length <= 1 ? new h(this, n) : i.prototype.where.call(this, n)
    };
    c.prototype.select = function(n) {
        if (n = r.createLambda(n), n.length <= 1) {
            var t = this.prevSelector,
                u = function(i) {
                    return n(t(i))
                };
            return new c(this.prevSource, this.prevPredicate, u)
        }
        return i.prototype.select.call(this, n)
    };
    c.prototype.getEnumerator = function() {
        var t = this.prevPredicate,
            i = this.prevSelector,
            f = this.prevSource,
            n;
        return new u(function() {
            n = f.getEnumerator()
        }, function() {
            while (n.moveNext())
                if (t == null || t(n.current())) return this.yieldReturn(i(n.current()));
            return !1
        }, function() {
            r.dispose(n)
        })
    };
    var v = function() {
            var n = function(n, t) {
                    return Object.prototype.hasOwnProperty.call(n, t)
                },
                r = function(n) {
                    return n === null ? "null" : n === t ? "undefined" : typeof n.toString === o.Function ? n.toString() : Object.prototype.toString.call(n)
                },
                h = function(n, t) {
                    this.key = n;
                    this.value = t;
                    this.prev = null;
                    this.next = null
                },
                e = function() {
                    this.first = null;
                    this.last = null
                },
                s;
            return e.prototype = {
                addLast: function(n) {
                    this.last != null ? (this.last.next = n, n.prev = this.last, this.last = n) : this.first = this.last = n
                },
                replace: function(n, t) {
                    n.prev != null ? (n.prev.next = t, t.prev = n.prev) : this.first = t;
                    n.next != null ? (n.next.prev = t, t.next = n.next) : this.last = t
                },
                remove: function(n) {
                    n.prev != null ? n.prev.next = n.next : this.first = n.next;
                    n.next != null ? n.next.prev = n.prev : this.last = n.prev
                }
            }, s = function(n) {
                this.countField = 0;
                this.entryList = new e;
                this.buckets = {};
                this.compareSelector = n == null ? f.Identity : n
            }, s.prototype = {
                add: function(t, i) {
                    var s = this.compareSelector(t),
                        o = r(s),
                        e = new h(t, i),
                        u, f;
                    if (n(this.buckets, o)) {
                        for (u = this.buckets[o], f = 0; f < u.length; f++)
                            if (this.compareSelector(u[f].key) === s) {
                                this.entryList.replace(u[f], e);
                                u[f] = e;
                                return
                            }
                        u.push(e)
                    } else this.buckets[o] = [e];
                    this.countField++;
                    this.entryList.addLast(e)
                },
                get: function(i) {
                    var o = this.compareSelector(i),
                        s = r(o),
                        f, u, e;
                    if (!n(this.buckets, s)) return t;
                    for (f = this.buckets[s], u = 0; u < f.length; u++)
                        if (e = f[u], this.compareSelector(e.key) === o) return e.value;
                    return t
                },
                set: function(t, i) {
                    var o = this.compareSelector(t),
                        s = r(o),
                        f, u, e;
                    if (n(this.buckets, s))
                        for (f = this.buckets[s], u = 0; u < f.length; u++)
                            if (this.compareSelector(f[u].key) === o) return e = new h(t, i), this.entryList.replace(f[u], e), f[u] = e, !0;
                    return !1
                },
                contains: function(t) {
                    var f = this.compareSelector(t),
                        e = r(f),
                        u, i;
                    if (!n(this.buckets, e)) return !1;
                    for (u = this.buckets[e], i = 0; i < u.length; i++)
                        if (this.compareSelector(u[i].key) === f) return !0;
                    return !1
                },
                clear: function() {
                    this.countField = 0;
                    this.buckets = {};
                    this.entryList = new e
                },
                remove: function(t) {
                    var e = this.compareSelector(t),
                        f = r(e),
                        i, u;
                    if (n(this.buckets, f))
                        for (i = this.buckets[f], u = 0; u < i.length; u++)
                            if (this.compareSelector(i[u].key) === e) {
                                this.entryList.remove(i[u]);
                                i.splice(u, 1);
                                i.length == 0 && delete this.buckets[f];
                                this.countField--;
                                return
                            }
                },
                count: function() {
                    return this.countField
                },
                toEnumerable: function() {
                    var n = this;
                    return new i(function() {
                        var t;
                        return new u(function() {
                            t = n.entryList.first
                        }, function() {
                            if (t != null) {
                                var n = {
                                    key: t.key,
                                    value: t.value
                                };
                                return t = t.next, this.yieldReturn(n)
                            }
                            return !1
                        }, f.Blank)
                    })
                }
            }, s
        }(),
        k = function(n) {
            this.count = function() {
                return n.count()
            };
            this.get = function(t) {
                return i.from(n.get(t))
            };
            this.contains = function(t) {
                return n.contains(t)
            };
            this.toEnumerable = function() {
                return n.toEnumerable().select(function(n) {
                    return new w(n.key, n.value)
                })
            }
        },
        w = function(n, t) {
            this.key = function() {
                return n
            };
            e.call(this, t)
        };
    w.prototype = new e;
    typeof define === o.Function && define.amd ? define("linqjs", [], function() {
        return i
    }) : typeof module !== o.Undefined && module.exports ? module.exports = i : n.Enumerable = i
}(this);
(function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
})(function(n) {
    function o() {
        var t = this;
        t.top = "auto";
        t.left = "auto";
        t.right = "auto";
        t.bottom = "auto";
        t.set = function(i, r) {
            n.isNumeric(r) && (t[i] = Math.round(r))
        }
    }

    function d(n, i, r) {
        function s(s, h) {
            o();
            n.data(f) || (s ? (h && n.data(e, !0), r.showTip(n)) : (t.tipOpenImminent = !0, u = setTimeout(function() {
                u = null;
                c()
            }, i.intentPollInterval)))
        }

        function h(s) {
            o();
            t.tipOpenImminent = !1;
            n.data(f) && (n.data(e, !1), s ? r.hideTip(n) : (t.delayInProgress = !0, u = setTimeout(function() {
                u = null;
                r.hideTip(n);
                t.delayInProgress = !1
            }, i.closeDelay)))
        }

        function c() {
            var u = Math.abs(t.previousX - t.currentX),
                f = Math.abs(t.previousY - t.currentY),
                e = u + f;
            i.intentSensitivity > e ? r.showTip(n) : (t.previousX = t.currentX, t.previousY = t.currentY, s())
        }

        function o() {
            u = clearTimeout(u);
            t.delayInProgress = !1
        }

        function l() {
            r.resetPosition(n)
        }
        var u = null;
        this.show = s;
        this.hide = h;
        this.cancel = o;
        this.resetPosition = l
    }

    function g() {
        function n(n, u, f, e, s) {
            var h, l = u.split("-")[0],
                c = new o;
            switch (h = tt(n) ? r(n, l) : i(n, l), u) {
                case "n":
                    c.set("left", h.left - f / 2);
                    c.set("bottom", t.windowHeight - h.top + s);
                    break;
                case "e":
                    c.set("left", h.left + s);
                    c.set("top", h.top - e / 2);
                    break;
                case "s":
                    c.set("left", h.left - f / 2);
                    c.set("top", h.top + s);
                    break;
                case "w":
                    c.set("top", h.top - e / 2);
                    c.set("right", t.windowWidth - h.left + s);
                    break;
                case "nw":
                    c.set("bottom", t.windowHeight - h.top + s);
                    c.set("right", t.windowWidth - h.left - 20);
                    break;
                case "nw-alt":
                    c.set("left", h.left);
                    c.set("bottom", t.windowHeight - h.top + s);
                    break;
                case "ne":
                    c.set("left", h.left - 20);
                    c.set("bottom", t.windowHeight - h.top + s);
                    break;
                case "ne-alt":
                    c.set("bottom", t.windowHeight - h.top + s);
                    c.set("right", t.windowWidth - h.left);
                    break;
                case "sw":
                    c.set("top", h.top + s);
                    c.set("right", t.windowWidth - h.left - 20);
                    break;
                case "sw-alt":
                    c.set("left", h.left);
                    c.set("top", h.top + s);
                    break;
                case "se":
                    c.set("left", h.left - 20);
                    c.set("top", h.top + s);
                    break;
                case "se-alt":
                    c.set("top", h.top + s);
                    c.set("right", t.windowWidth - h.left)
            }
            return c
        }

        function i(n, t) {
            var r, u, i = n.offset(),
                f = n.outerWidth(),
                e = n.outerHeight();
            switch (t) {
                case "n":
                    r = i.left + f / 2;
                    u = i.top;
                    break;
                case "e":
                    r = i.left + f;
                    u = i.top + e / 2;
                    break;
                case "s":
                    r = i.left + f / 2;
                    u = i.top + e;
                    break;
                case "w":
                    r = i.left;
                    u = i.top + e / 2;
                    break;
                case "nw":
                    r = i.left;
                    u = i.top;
                    break;
                case "ne":
                    r = i.left + f;
                    u = i.top;
                    break;
                case "sw":
                    r = i.left;
                    u = i.top + e;
                    break;
                case "se":
                    r = i.left + f;
                    u = i.top + e
            }
            return {
                top: u,
                left: r
            }
        }

        function r(n, i) {
            function u() {
                f.push(r.matrixTransform(l))
            }
            var c, y, o, e, w = n.closest("svg")[0],
                p = n[0],
                r = w.createSVGPoint(),
                s = p.getBBox(),
                l = p.getScreenCTM(),
                h = s.width / 2,
                a = s.height / 2,
                f = [],
                v = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
            if (r.x = s.x, r.y = s.y, u(), r.x += h, u(), r.x += h, u(), r.y += a, u(), r.y += a, u(), r.x -= h, u(), r.x -= h, u(), r.y -= a, u(), f[0].y !== f[1].y || f[0].x !== f[7].x)
                for (y = Math.atan2(l.b, l.a) * ft, o = Math.ceil((y % 360 - 22.5) / 45), 1 > o && (o += 8); o--;) v.push(v.shift());
            for (e = 0; f.length > e; e++)
                if (v[e] === i) {
                    c = f[e];
                    break
                }
            return {
                top: c.y + t.scrollTop,
                left: c.x + t.scrollLeft
            }
        }
        this.compute = n
    }

    function nt(s) {
        function tt(n) {
            n.data(f, !0);
            h.queue(function(t) {
                k(n);
                t()
            })
        }

        function k(n) {
            var i;
            if (n.data(f)) {
                if (t.isTipOpen) return t.isClosing || v(t.activeHover), h.delay(100).queue(function(t) {
                    k(n);
                    t()
                }), void 0;
                n.trigger("powerTipPreRender");
                i = rt(n);
                i && (h.empty().append(i), n.trigger("powerTipRender"), t.activeHover = n, t.isTipOpen = !0, h.data(a, s.mouseOnToPopup), s.followMouse ? b() : (d(n), t.isFixedTipOpen = !0), h.fadeIn(s.fadeInTime, function() {
                    t.desyncTimeout || (t.desyncTimeout = setInterval(it, 500));
                    n.trigger("powerTipOpen")
                }))
            }
        }

        function v(n) {
            t.isClosing = !0;
            t.activeHover = null;
            t.isTipOpen = !1;
            t.desyncTimeout = clearInterval(t.desyncTimeout);
            n.data(f, !1);
            n.data(e, !1);
            h.fadeOut(s.fadeOutTime, function() {
                var i = new o;
                t.isClosing = !1;
                t.isFixedTipOpen = !1;
                h.removeClass();
                i.set("top", t.currentY + s.offset);
                i.set("left", t.currentX + s.offset);
                h.css(i);
                n.trigger("powerTipClose")
            })
        }

        function b() {
            if (!t.isFixedTipOpen && (t.isTipOpen || t.tipOpenImminent && h.data(l))) {
                var i, e, r = h.outerWidth(),
                    f = h.outerHeight(),
                    n = new o;
                n.set("top", t.currentY + s.offset);
                n.set("left", t.currentX + s.offset);
                i = p(n, r, f);
                i !== u.none && (e = ut(i), 1 === e ? i === u.right ? n.set("left", t.windowWidth - r) : i === u.bottom && n.set("top", t.scrollTop + t.windowHeight - f) : (n.set("left", t.currentX - r - s.offset), n.set("top", t.currentY - f - s.offset)));
                h.css(n)
            }
        }

        function d(t) {
            var r, i;
            s.smartPlacement ? (r = n.fn.powerTip.smartPlacementLists[s.placement], n.each(r, function(n, r) {
                var f = p(nt(t, r), h.outerWidth(), h.outerHeight());
                return i = r, f === u.none ? !1 : void 0
            })) : (nt(t, s.placement), i = s.placement);
            h.addClass(i)
        }

        function nt(n, t) {
            var r, u, f = 0,
                i = new o;
            i.set("top", 0);
            i.set("left", 0);
            h.css(i);
            do r = h.outerWidth(), u = h.outerHeight(), i = ft.compute(n, t, r, u, s.offset), h.css(i); while (5 >= ++f && (r !== h.outerWidth() || u !== h.outerHeight()));
            return i
        }

        function it() {
            var n = !1;
            !t.isTipOpen || t.isClosing || t.delayInProgress || (t.activeHover.data(f) === !1 || t.activeHover.is(":disabled") ? n = !0 : y(t.activeHover) || t.activeHover.is(":focus") || t.activeHover.data(e) || (h.data(a) ? y(h) || (n = !0) : n = !0), n && v(t.activeHover))
        }
        var ft = new g,
            h = n("#" + s.popupId);
        0 === h.length && (h = n("<div/>", {
            id: s.popupId
        }), 0 === c.length && (c = n("body")), c.append(h));
        s.followMouse && (h.data(l) || (w.on("mousemove", b), i.on("scroll", b), h.data(l, !0)));
        s.mouseOnToPopup && h.on({
            mouseenter: function() {
                h.data(a) && t.activeHover && t.activeHover.data(r).cancel()
            },
            mouseleave: function() {
                t.activeHover && t.activeHover.data(r).hide()
            }
        });
        this.showTip = tt;
        this.hideTip = v;
        this.resetPosition = d
    }

    function tt(n) {
        return window.SVGElement && n[0] instanceof SVGElement
    }

    function it() {
        t.mouseTrackingActive || (t.mouseTrackingActive = !0, n(function() {
            t.scrollLeft = i.scrollLeft();
            t.scrollTop = i.scrollTop();
            t.windowWidth = i.width();
            t.windowHeight = i.height()
        }), w.on("mousemove", v), i.on({
            resize: function() {
                t.windowWidth = i.width();
                t.windowHeight = i.height()
            },
            scroll: function() {
                var n = i.scrollLeft(),
                    r = i.scrollTop();
                n !== t.scrollLeft && (t.currentX += n - t.scrollLeft, t.scrollLeft = n);
                r !== t.scrollTop && (t.currentY += r - t.scrollTop, t.scrollTop = r)
            }
        }))
    }

    function v(n) {
        t.currentX = n.pageX;
        t.currentY = n.pageY
    }

    function y(n) {
        var i = n.offset(),
            r = n[0].getBoundingClientRect(),
            u = r.right - r.left,
            f = r.bottom - r.top;
        return t.currentX >= i.left && t.currentX <= i.left + u && t.currentY >= i.top && t.currentY <= i.top + f
    }

    function rt(t) {
        var f, u, r = t.data(h),
            i = t.data(b),
            e = t.data(k);
        return r ? (n.isFunction(r) && (r = r.call(t[0])), u = r) : i ? (n.isFunction(i) && (i = i.call(t[0])), i.length > 0 && (u = i.clone(!0, !0))) : e && (f = n("#" + e), f.length > 0 && (u = f.html())), u
    }

    function p(n, i, r) {
        var e = t.scrollTop,
            o = t.scrollLeft,
            s = e + t.windowHeight,
            h = o + t.windowWidth,
            f = u.none;
        return (e > n.top || e > Math.abs(n.bottom - t.windowHeight) - r) && (f |= u.top), (n.top + r > s || Math.abs(n.bottom - t.windowHeight) > s) && (f |= u.bottom), (o > n.left || n.right + i > h) && (f |= u.left), (n.left + i > h || o > n.right) && (f |= u.right), f
    }

    function ut(n) {
        for (var t = 0; n;) n &= n - 1, t++;
        return t
    }
    var w = n(document),
        i = n(window),
        c = n("body"),
        r = "displayController",
        f = "hasActiveHover",
        e = "forcedOpen",
        l = "hasMouseMove",
        a = "mouseOnToPopup",
        s = "originalTitle",
        h = "powertip",
        b = "powertipjq",
        k = "powertiptarget",
        ft = 180 / Math.PI,
        t = {
            isTipOpen: !1,
            isFixedTipOpen: !1,
            isClosing: !1,
            tipOpenImminent: !1,
            activeHover: null,
            currentX: 0,
            currentY: 0,
            previousX: 0,
            previousY: 0,
            desyncTimeout: null,
            mouseTrackingActive: !1,
            delayInProgress: !1,
            windowWidth: 0,
            windowHeight: 0,
            scrollTop: 0,
            scrollLeft: 0
        },
        u = {
            none: 0,
            top: 1,
            bottom: 2,
            left: 4,
            right: 8
        };
    n.fn.powerTip = function(t, i) {
        if (!this.length) return this;
        if ("string" === n.type(t) && n.powerTip[t]) return n.powerTip[t].call(this, this, i);
        var u = n.extend({}, n.fn.powerTip.defaults, t),
            f = new nt(u);
        return it(), this.each(function() {
            var i, t = n(this),
                e = t.data(h),
                o = t.data(b),
                c = t.data(k);
            t.data(r) && n.powerTip.destroy(t);
            i = t.attr("title");
            e || c || o || !i || (t.data(h, i), t.data(s, i), t.removeAttr("title"));
            t.data(r, new d(t, u, f))
        }), u.manual || this.on({
            "mouseenter.powertip": function(t) {
                n.powerTip.show(this, t)
            },
            "mouseleave.powertip": function() {
                n.powerTip.hide(this)
            },
            "focus.powertip": function() {
                n.powerTip.show(this)
            },
            "blur.powertip": function() {
                n.powerTip.hide(this, !0)
            },
            "keydown.powertip": function(t) {
                27 === t.keyCode && n.powerTip.hide(this, !0)
            }
        }), this
    };
    n.fn.powerTip.defaults = {
        fadeInTime: 200,
        fadeOutTime: 100,
        followMouse: !1,
        popupId: "powerTip",
        intentSensitivity: 7,
        intentPollInterval: 100,
        closeDelay: 100,
        placement: "n",
        smartPlacement: !1,
        offset: 10,
        mouseOnToPopup: !1,
        manual: !1
    };
    n.fn.powerTip.smartPlacementLists = {
        n: ["n", "ne", "nw", "s"],
        e: ["e", "ne", "se", "w", "nw", "sw", "n", "s", "e"],
        s: ["s", "se", "sw", "n"],
        w: ["w", "nw", "sw", "e", "ne", "se", "n", "s", "w"],
        nw: ["nw", "w", "sw", "n", "s", "se", "nw"],
        ne: ["ne", "e", "se", "n", "s", "sw", "ne"],
        sw: ["sw", "w", "nw", "s", "n", "ne", "sw"],
        se: ["se", "e", "ne", "s", "n", "nw", "se"],
        "nw-alt": ["nw-alt", "n", "ne-alt", "sw-alt", "s", "se-alt", "w", "e"],
        "ne-alt": ["ne-alt", "n", "nw-alt", "se-alt", "s", "sw-alt", "e", "w"],
        "sw-alt": ["sw-alt", "s", "se-alt", "nw-alt", "n", "ne-alt", "w", "e"],
        "se-alt": ["se-alt", "s", "sw-alt", "ne-alt", "n", "nw-alt", "e", "w"]
    };
    n.powerTip = {
        show: function(i, u) {
            return u ? (v(u), t.previousX = u.pageX, t.previousY = u.pageY, n(i).data(r).show()) : n(i).first().data(r).show(!0, !0), i
        },
        reposition: function(t) {
            return n(t).first().data(r).resetPosition(), t
        },
        hide: function(i, u) {
            return i ? n(i).first().data(r).hide(u) : t.activeHover && t.activeHover.data(r).hide(!0), i
        },
        destroy: function(t) {
            return n(t).off(".powertip").each(function() {
                var t = n(this),
                    i = [s, r, f, e];
                t.data(s) && (t.attr("title", t.data(s)), i.push(h));
                t.removeData(i)
            }), t
        }
    };
    n.powerTip.showTip = n.powerTip.show;
    n.powerTip.closeTip = n.powerTip.hide
}),
function(n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" && typeof require == "function" ? n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";

    function i(t, r) {
        var u = this;
        u.element = t;
        u.el = n(t);
        u.suggestions = [];
        u.badQueries = [];
        u.selectedIndex = -1;
        u.currentValue = u.element.value;
        u.timeoutId = null;
        u.cachedResponse = {};
        u.onChangeTimeout = null;
        u.onChange = null;
        u.isLocal = !1;
        u.suggestionsContainer = null;
        u.noSuggestionsContainer = null;
        u.options = n.extend({}, i.defaults, r);
        u.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        };
        u.hint = null;
        u.hintValue = "";
        u.selection = null;
        u.initialize();
        u.setOptions(r)
    }

    function f(n, t, i) {
        return n.value.toLowerCase().indexOf(i) !== -1
    }

    function e(t) {
        return typeof t == "string" ? n.parseJSON(t) : t
    }

    function o(n, t) {
        if (!t) return n.value;
        var i = "(" + u.escapeRegExChars(t) + ")";
        return n.value.replace(new RegExp(i, "gi"), "<strong>$1<\/strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
    }

    function s(n, t) {
        return '<div class="autocomplete-group">' + t + "<\/div>"
    }
    var u = function() {
            return {
                escapeRegExChars: function(n) {
                    return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                },
                createNode: function(n) {
                    var t = document.createElement("div");
                    return t.className = n, t.style.position = "absolute", t.style.display = "none", t
                }
            }
        }(),
        t = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        },
        r = n.noop;
    i.utils = u;
    n.Autocomplete = i;
    i.defaults = {
        ajaxSettings: {},
        autoSelectFirst: !1,
        appendTo: "body",
        serviceUrl: null,
        lookup: null,
        onSelect: null,
        width: "auto",
        minChars: 1,
        maxHeight: 300,
        deferRequestBy: 0,
        params: {},
        formatResult: o,
        formatGroup: s,
        delimiter: null,
        zIndex: 9999,
        type: "GET",
        noCache: !1,
        onSearchStart: r,
        onSearchComplete: r,
        onSearchError: r,
        preserveInput: !1,
        containerClass: "autocomplete-suggestions",
        tabDisabled: !1,
        dataType: "text",
        currentRequest: null,
        triggerSelectOnValidInput: !0,
        preventBadQueries: !0,
        lookupFilter: f,
        paramName: "query",
        transformResult: e,
        showNoSuggestionNotice: !1,
        noSuggestionNotice: "No results",
        orientation: "bottom",
        forceFixPosition: !1
    };
    i.prototype = {
        initialize: function() {
            var t = this,
                f = "." + t.classes.suggestion,
                e = t.classes.selected,
                u = t.options,
                r;
            t.element.setAttribute("autocomplete", "off");
            t.noSuggestionsContainer = n('<div class="autocomplete-no-suggestion"><\/div>').html(this.options.noSuggestionNotice).get(0);
            t.suggestionsContainer = i.utils.createNode(u.containerClass);
            r = n(t.suggestionsContainer);
            r.appendTo(u.appendTo || "body");
            u.width !== "auto" && r.css("width", u.width);
            r.on("mouseover.autocomplete", f, function() {
                t.activate(n(this).data("index"))
            });
            r.on("mouseout.autocomplete", function() {
                t.selectedIndex = -1;
                r.children("." + e).removeClass(e)
            });
            r.on("click.autocomplete", f, function() {
                t.select(n(this).data("index"))
            });
            r.on("click.autocomplete", function() {
                clearTimeout(t.blurTimeoutId)
            });
            t.fixPositionCapture = function() {
                t.visible && t.fixPosition()
            };
            n(window).on("resize.autocomplete", t.fixPositionCapture);
            t.el.on("keydown.autocomplete", function(n) {
                t.onKeyPress(n)
            });
            t.el.on("keyup.autocomplete", function(n) {
                t.onKeyUp(n)
            });
            t.el.on("blur.autocomplete", function() {
                t.onBlur()
            });
            t.el.on("focus.autocomplete", function() {
                t.onFocus()
            });
            t.el.on("change.autocomplete", function(n) {
                t.onKeyUp(n)
            });
            t.el.on("input.autocomplete", function(n) {
                t.onKeyUp(n)
            })
        },
        onFocus: function() {
            var n = this;
            n.fixPosition();
            n.el.val().length >= n.options.minChars && n.onValueChange()
        },
        onBlur: function() {
            var n = this;
            n.blurTimeoutId = setTimeout(function() {
                n.hide()
            }, 200)
        },
        abortAjax: function() {
            var n = this;
            n.currentRequest && (n.currentRequest.abort(), n.currentRequest = null)
        },
        setOptions: function(t) {
            var r = this,
                i = n.extend({}, r.options, t);
            r.isLocal = Array.isArray(i.lookup);
            r.isLocal && (i.lookup = r.verifySuggestionsFormat(i.lookup));
            i.orientation = r.validateOrientation(i.orientation, "bottom");
            n(r.suggestionsContainer).css({
                "max-height": i.maxHeight + "px",
                width: i.width + "px",
                "z-index": i.zIndex
            });
            this.options = i
        },
        clearCache: function() {
            this.cachedResponse = {};
            this.badQueries = []
        },
        clear: function() {
            this.clearCache();
            this.currentValue = "";
            this.suggestions = []
        },
        disable: function() {
            var n = this;
            n.disabled = !0;
            clearTimeout(n.onChangeTimeout);
            n.abortAjax()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var t = this,
                i = n(t.suggestionsContainer),
                f = i.parent().get(0),
                a, s;
            if (f === document.body || t.options.forceFixPosition) {
                var e = t.options.orientation,
                    o = i.outerHeight(),
                    h = t.el.outerHeight(),
                    u = t.el.offset(),
                    r = {
                        top: u.top,
                        left: u.left
                    };
                if (e === "auto") {
                    var v = n(window).height(),
                        c = n(window).scrollTop(),
                        l = -c + u.top - o,
                        y = c + v - (u.top + h + o);
                    e = Math.max(l, y) === l ? "top" : "bottom"
                }
                r.top += e === "top" ? -o : h;
                f !== document.body && (a = i.css("opacity"), t.visible || i.css("opacity", 0).show(), s = i.offsetParent().offset(), r.top -= s.top, r.top += f.scrollTop, r.left -= s.left, t.visible || i.css("opacity", a).hide());
                t.options.width === "auto" && (r.width = t.el.outerWidth() + "px");
                i.css(r)
            }
        },
        isCursorAtEnd: function() {
            var i = this,
                n = i.el.val().length,
                r = i.element.selectionStart,
                t;
            return typeof r == "number" ? r === n : document.selection ? (t = document.selection.createRange(), t.moveStart("character", -n), n === t.text.length) : !0
        },
        onKeyPress: function(n) {
            var i = this;
            if (!i.disabled && !i.visible && n.which === t.DOWN && i.currentValue) {
                i.suggest();
                return
            }
            if (!i.disabled && i.visible) {
                switch (n.which) {
                    case t.ESC:
                        i.el.val(i.currentValue);
                        i.hide();
                        break;
                    case t.RIGHT:
                        if (i.hint && i.options.onHint && i.isCursorAtEnd()) {
                            i.selectHint();
                            break
                        }
                        return;
                    case t.TAB:
                        if (i.hint && i.options.onHint) {
                            i.selectHint();
                            return
                        }
                        if (i.selectedIndex === -1) {
                            i.hide();
                            return
                        }
                        if (i.select(i.selectedIndex), i.options.tabDisabled === !1) return;
                        break;
                    case t.RETURN:
                        if (i.selectedIndex === -1) {
                            i.hide();
                            return
                        }
                        i.select(i.selectedIndex);
                        break;
                    case t.UP:
                        i.moveUp();
                        break;
                    case t.DOWN:
                        i.moveDown();
                        break;
                    default:
                        return
                }
                n.stopImmediatePropagation();
                n.preventDefault()
            }
        },
        onKeyUp: function(n) {
            var i = this;
            if (!i.disabled) {
                switch (n.which) {
                    case t.UP:
                    case t.DOWN:
                        return
                }
                clearTimeout(i.onChangeTimeout);
                i.currentValue !== i.el.val() && (i.findBestHint(), i.options.deferRequestBy > 0 ? i.onChangeTimeout = setTimeout(function() {
                    i.onValueChange()
                }, i.options.deferRequestBy) : i.onValueChange())
            }
        },
        onValueChange: function() {
            if (this.ignoreValueChange) {
                this.ignoreValueChange = !1;
                return
            }
            var t = this,
                r = t.options,
                u = t.el.val(),
                i = t.getQuery(u);
            if (t.selection && t.currentValue !== i && (t.selection = null, (r.onInvalidateSelection || n.noop).call(t.element)), clearTimeout(t.onChangeTimeout), t.currentValue = u, t.selectedIndex = -1, r.triggerSelectOnValidInput && t.isExactMatch(i)) {
                t.select(0);
                return
            }
            i.length < r.minChars ? t.hide() : t.getSuggestions(i)
        },
        isExactMatch: function(n) {
            var t = this.suggestions;
            return t.length === 1 && t[0].value.toLowerCase() === n.toLowerCase()
        },
        getQuery: function(t) {
            var r = this.options.delimiter,
                i;
            return r ? (i = t.split(r), n.trim(i[i.length - 1])) : t
        },
        getSuggestionsLocal: function(t) {
            var f = this,
                r = f.options,
                e = t.toLowerCase(),
                o = r.lookupFilter,
                u = parseInt(r.lookupLimit, 10),
                i;
            return i = {
                suggestions: n.grep(r.lookup, function(n) {
                    return o(n, t, e)
                })
            }, u && i.suggestions.length > u && (i.suggestions = i.suggestions.slice(0, u)), i
        },
        getSuggestions: function(t) {
            var u, i = this,
                r = i.options,
                f = r.serviceUrl,
                e, o, s;
            if (r.params[r.paramName] = t, r.onSearchStart.call(i.element, r.params) !== !1) {
                if (e = r.ignoreParams ? null : r.params, n.isFunction(r.lookup)) {
                    r.lookup(t, function(n) {
                        i.suggestions = n.suggestions;
                        i.suggest();
                        r.onSearchComplete.call(i.element, t, n.suggestions)
                    });
                    return
                }
                i.isLocal ? u = i.getSuggestionsLocal(t) : (n.isFunction(f) && (f = f.call(i.element, t)), o = f + "?" + n.param(e || {}), u = i.cachedResponse[o]);
                u && Array.isArray(u.suggestions) ? (i.suggestions = u.suggestions, i.suggest(), r.onSearchComplete.call(i.element, t, u.suggestions)) : i.isBadQuery(t) ? r.onSearchComplete.call(i.element, t, []) : (i.abortAjax(), s = {
                    url: f,
                    data: e,
                    type: r.type,
                    dataType: r.dataType
                }, n.extend(s, r.ajaxSettings), i.currentRequest = n.ajax(s).done(function(n) {
                    var u;
                    i.currentRequest = null;
                    u = r.transformResult(n, t);
                    i.processResponse(u, t, o);
                    r.onSearchComplete.call(i.element, t, u.suggestions)
                }).fail(function(n, u, f) {
                    r.onSearchError.call(i.element, t, n, u, f)
                }))
            }
        },
        isBadQuery: function(n) {
            if (!this.options.preventBadQueries) return !1;
            for (var t = this.badQueries, i = t.length; i--;)
                if (n.indexOf(t[i]) === 0) return !0;
            return !1
        },
        hide: function() {
            var t = this,
                i = n(t.suggestionsContainer);
            n.isFunction(t.options.onHide) && t.visible && t.options.onHide.call(t.element, i);
            t.visible = !1;
            t.selectedIndex = -1;
            clearTimeout(t.onChangeTimeout);
            n(t.suggestionsContainer).hide();
            t.signalHint(null)
        },
        suggest: function() {
            if (!this.suggestions.length) {
                this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide();
                return
            }
            var t = this,
                i = t.options,
                o = i.groupBy,
                c = i.formatResult,
                u = t.getQuery(t.currentValue),
                s = t.classes.suggestion,
                l = t.classes.selected,
                r = n(t.suggestionsContainer),
                a = n(t.noSuggestionsContainer),
                h = i.beforeRender,
                f = "",
                e, v = function(n) {
                    var t = n.data[o];
                    return e === t ? "" : (e = t, i.formatGroup(n, e))
                };
            if (i.triggerSelectOnValidInput && t.isExactMatch(u)) {
                t.select(0);
                return
            }
            n.each(t.suggestions, function(n, t) {
                o && (f += v(t, u, n));
                f += '<div class="' + s + '" data-index="' + n + '">' + c(t, u, n) + "<\/div>"
            });
            this.adjustContainerWidth();
            a.detach();
            r.html(f);
            n.isFunction(h) && h.call(t.element, r, t.suggestions);
            t.fixPosition();
            r.show();
            i.autoSelectFirst && (t.selectedIndex = 0, r.scrollTop(0), r.children("." + s).first().addClass(l));
            t.visible = !0;
            t.findBestHint()
        },
        noSuggestions: function() {
            var t = this,
                r = t.options.beforeRender,
                i = n(t.suggestionsContainer),
                u = n(t.noSuggestionsContainer);
            this.adjustContainerWidth();
            u.detach();
            i.empty();
            i.append(u);
            n.isFunction(r) && r.call(t.element, i, t.suggestions);
            t.fixPosition();
            i.show();
            t.visible = !0
        },
        adjustContainerWidth: function() {
            var t = this,
                r = t.options,
                i, u = n(t.suggestionsContainer);
            r.width === "auto" ? (i = t.el.outerWidth(), u.css("width", i > 0 ? i : 300)) : r.width === "flex" && u.css("width", "")
        },
        findBestHint: function() {
            var t = this,
                i = t.el.val().toLowerCase(),
                r = null;
            i && (n.each(t.suggestions, function(n, t) {
                var u = t.value.toLowerCase().indexOf(i) === 0;
                return u && (r = t), !u
            }), t.signalHint(r))
        },
        signalHint: function(t) {
            var r = "",
                i = this;
            t && (r = i.currentValue + t.value.substr(i.currentValue.length));
            i.hintValue !== r && (i.hintValue = r, i.hint = t, (this.options.onHint || n.noop)(r))
        },
        verifySuggestionsFormat: function(t) {
            return t.length && typeof t[0] == "string" ? n.map(t, function(n) {
                return {
                    value: n,
                    data: null
                }
            }) : t
        },
        validateOrientation: function(t, i) {
            return t = n.trim(t || "").toLowerCase(), n.inArray(t, ["auto", "bottom", "top"]) === -1 && (t = i), t
        },
        processResponse: function(n, t, i) {
            var r = this,
                u = r.options;
            (n.suggestions = r.verifySuggestionsFormat(n.suggestions), u.noCache || (r.cachedResponse[i] = n, u.preventBadQueries && !n.suggestions.length && r.badQueries.push(t)), t === r.getQuery(r.currentValue)) && (r.suggestions = n.suggestions, r.suggest())
        },
        activate: function(t) {
            var i = this,
                r, u = i.classes.selected,
                f = n(i.suggestionsContainer),
                e = f.find("." + i.classes.suggestion);
            return (f.find("." + u).removeClass(u), i.selectedIndex = t, i.selectedIndex !== -1 && e.length > i.selectedIndex) ? (r = e.get(i.selectedIndex), n(r).addClass(u), r) : null
        },
        selectHint: function() {
            var t = this,
                i = n.inArray(t.hint, t.suggestions);
            t.select(i)
        },
        select: function(n) {
            var t = this;
            t.hide();
            t.onSelect(n)
        },
        moveUp: function() {
            var t = this;
            if (t.selectedIndex !== -1) {
                if (t.selectedIndex === 0) {
                    n(t.suggestionsContainer).children("." + t.classes.suggestion).first().removeClass(t.classes.selected);
                    t.selectedIndex = -1;
                    t.ignoreValueChange = !1;
                    t.el.val(t.currentValue);
                    t.findBestHint();
                    return
                }
                t.adjustScroll(t.selectedIndex - 1)
            }
        },
        moveDown: function() {
            var n = this;
            n.selectedIndex !== n.suggestions.length - 1 && n.adjustScroll(n.selectedIndex + 1)
        },
        adjustScroll: function(t) {
            var i = this,
                u = i.activate(t),
                r, f, o, e;
            u && (e = n(u).outerHeight(), r = u.offsetTop, f = n(i.suggestionsContainer).scrollTop(), o = f + i.options.maxHeight - e, r < f ? n(i.suggestionsContainer).scrollTop(r) : r > o && n(i.suggestionsContainer).scrollTop(r - i.options.maxHeight + e), i.options.preserveInput || (i.ignoreValueChange = !0, i.el.val(i.getValue(i.suggestions[t].value))), i.signalHint(null))
        },
        onSelect: function(t) {
            var i = this,
                u = i.options.onSelect,
                r = i.suggestions[t];
            i.currentValue = i.getValue(r.value);
            i.currentValue === i.el.val() || i.options.preserveInput || i.el.val(i.currentValue);
            i.signalHint(null);
            i.suggestions = [];
            i.selection = r;
            n.isFunction(u) && u.call(i.element, r)
        },
        getValue: function(n) {
            var r = this,
                u = r.options.delimiter,
                t, i;
            return u ? (t = r.currentValue, i = t.split(u), i.length === 1) ? n : t.substr(0, t.length - i[i.length - 1].length) + n : n
        },
        dispose: function() {
            var t = this;
            t.el.off(".autocomplete").removeData("autocomplete");
            n(window).off("resize.autocomplete", t.fixPositionCapture);
            n(t.suggestionsContainer).remove()
        }
    };
    n.fn.devbridgeAutocomplete = function(t, r) {
        var u = "autocomplete";
        return arguments.length ? this.each(function() {
            var e = n(this),
                f = e.data(u);
            typeof t == "string" ? f && typeof f[t] == "function" && f[t](r) : (f && f.dispose && f.dispose(), f = new i(this, t), e.data(u, f))
        }) : this.first().data(u)
    };
    n.fn.autocomplete || (n.fn.autocomplete = n.fn.devbridgeAutocomplete)
});
eval(function(n, t, i, r, u, f) {
    if (u = function(n) {
            return (n < t ? "" : u(parseInt(n / t))) + ((n = n % t) > 35 ? String.fromCharCode(n + 29) : n.toString(36))
        }, !"".replace(/^/, String)) {
        while (i--) f[u(i)] = r[i] || u(i);
        r = [function(n) {
            return f[n]
        }];
        u = function() {
            return "\\w+"
        };
        i = 1
    }
    while (i--) r[i] && (n = n.replace(new RegExp("\\b" + u(i) + "\\b", "g"), r[i]));
    return n
}('!4(e){"3w 3G";6 i={17:3,G:!1,I:1,y:10,A:"",j:"z",31:!0,1B:"3K",2d:"3r",H:2a,1z:!1,N:!1,1y:!0,1O:3C,1M:!1,1J:!0,2x:"",2D:"",1H:!1,2e:!1,D:!1,2b:3V,29:1w,26:10,1t:!0,Q:!1,2h:5,1p:5,2G:"2X",1W:!0,1S:!0,1Q:!0,1r:40,1d:[],2I:4(){},2O:4(){},2R:4(){},2T:4(){},28:4(){},23:4(){}};e.3g.21=4(t){k(0===8.9)U 8;k(8.9>1)U 8.3J(4(){e(8).21(t)}),8;6 n={},l=e.3d(!0,{},i,t),a={},s=8;n.$3k=8,"1c"===l.j&&(l.D=!1);6 o=s.1n(),r=e(1o).16(),d=1h,c=1h,f=0,h=0,u=!1,g=0,v="",p=0,m=l.D===!0?"19":"16",S=l.D===!0?"1u-2Y":"1u-1i",M=0,T=0,b=0,C=0,x=1h,w="3B"1G 2g.2W,P=3P 3Q;U P.20=4(){k(r=e(1o).16(),l.1d.9){k(l.G===!1)6 i=l.17;k(r<l.1d[0].1I)O(6 t=0;t<l.1d.9;t++)r<l.1d[t].1I&&(d=l.1d[t].1I,c=l.1d[t]);k("2v"!=38 c&&1h!=c)O(t 1G c.2A)("2v"==38 a[t]||1h==a[t])&&(a[t]=l[t]),l[t]=c.2A[t];k(!e.3q(a)&&r>l.1d[0].1I)O(t 1G a)l[t]=a[t];l.G===!1&&M>0&&b>0&&i!==l.17&&(p=1K.3t(M/((b+l.y)*l.I)))}},P.1C=4(){l.G===!1&&(b=(g-(l.17*l.y-l.y))/l.17)},P.1v=4(e){6 i=e===!0?v.7(".J").9:o.9;k(l.G===!1)h=i*(b+l.y);Y{h=0;O(6 t=0;i>t;t++)h+=1g(o.F(t).16())+l.y}U h%1!==0&&(h+=1),h},n={11:4(){6 e=4(){O(6 e=["14","3X","3Y","3b","4a","3f"],i=2g.2W,t=0;t<e.9;t++)k(e[t]1G i.2t)U!0};U l.31&&e()?!0:!1},1M:4(){l.1M&&e(2g).V("3i.3j",4(e){e.1k(),37===e.2z?(s.1R(),1j(x)):39===e.2z&&(s.1q(),1j(x))})},1J:4(){l.1J&&(s.2H(\'<1s 1a="13"><a 1a="2o">\'+l.2x+\'<\/a><a 1a="2U">\'+l.2D+"<\/a><\/1s>"),l.G?P.1v(!1)<g&&v.7(".13").1D():f<=l.17&&v.7(".13").1D(),v.7(".13 a").V("1E",4(i){i.1k(),"2o"===e(8).1F("1a")?s.1R():s.1q(),1j(x)}))},30:4(){6 e=8;"1c"===l.j&&(l.G=!1,l.1y=!1),l.1z&&(l.1y=!1),l.G&&(l.I=1,l.17=1),l.N&&(l.I=1,l.1Q=!1),l.2I.1f(8,s),P.20(),s.A("21").3Z("<1s 1a=\'3a "+l.A+"\'><1s 1a=\'2q\'><\/1s><\/1s>"),v=s.R(".2q"),l.1H===!0&&v.R().A("3e"),l.D?(v.R().A("D"),g=l.2b,v.q("19",g+"E")):g=s.2w(),o.A("J"),l.N===!0&&"z"===l.j&&(P.1C(),P.B=4(){k(P.1v(!0)>g){O(6 i=0,t=0,n=0;n<o.9&&(i+=1g(s.7(".J").F(n).16())+l.y,t++,!(i>=g+l.y));n++);6 a=l.G===!0?t:l.17;k(a<s.7(".B.L").9)O(6 r=0;r<s.7(".B.L").9-a;r++)o.F(r).2f();k(a<s.7(".B.1i").9)O(6 d=o.9-1;d>o.9-1-s.7(".B.1i").9;d--)p--,o.F(d).2f();O(6 n=s.7(".B.1i").9;a>n;n++)s.7(".J").F(n).B().1b("J").A("B 1i").3m(s),p++;O(6 c=s.7(".J").9-s.7(".B.L").9;c>s.7(".J").9-a;c--)s.7(".J").F(c-1).B().1b("J").A("B L").3n(s);o=s.1n()}Y o.3o("B")&&(s.7(".B").2f(),e.1l(s,0))},P.B()),P.2k=4(){f=o.9,l.1H===!0&&l.D===!1&&(S="1u-L"),l.G===!1&&o.q(m,b+"E"),o.q(S,l.y+"E"),h=P.1v(!1),s.q(m,h+"E"),l.N===!0&&"z"===l.j&&u===!1&&(p=s.7(".B.L").9)},P.2n=4(){o=s.1n(),f=o.9},8.11()&&v.A("3s"),P.2n(),"z"===l.j?(P.1C(),P.2k(),l.N===!0&&(M=e.1x(),8.1l(s,M)),l.D===!1&&8.1L(s,!1,!0)):(8.1L(s,!0,!0),s.A("3u"),8.11()||o.3v(".K").q("3z","3A")),l.N===!0&&"z"===l.j?o.F(p).A("K"):o.1N().A("K")},1t:4(){6 e=8;k(P.22=4(){C=(g-(l.26*l.1p-l.1p))/l.26;6 i=v.7(".J"),t=v.7(".J").9,n=0,a="",o=0;O(n=0;t>n;n++){"z"===l.j&&(l.G?o+=(1g(i.F(n).16())+l.y)*l.I:o=n*(b+l.y)*l.I);6 r=i.F(n*l.I).1F("3E-3F");k(a+=l.Q===!0?\'<15 2t="16:1w%;\'+m+":"+C+"E;"+S+":"+l.1p+\'E"><a 24="25:1P(0)"><33 3T="\'+r+\'" /><\/a><\/15>\':\'<15><a 24="25:1P(0)">\'+(n+1)+"<\/a><\/15>","z"===l.j&&o>=h-g-l.y){n+=1;6 d=2;l.G&&(a+=\'<15><a 24="25:1P(0)">\'+(n+1)+"<\/a><\/15>",d=1),d>n?(a=1h,v.R().A("2r")):v.R().1b("2r");27}}6 c=v.R();k(c.7(".X").41(a),!l.D&&l.Q){6 f=v.R().7(".2u");12(4(){e.1L(f,!1,!1)})}l.Q===!0&&(l.D===!0&&c.7(".X").q("16",l.29+"E"),T=n*(l.1p+C)+.5,c.7(".X").q({3c:T+"E","14-1m":l.H+"1A"}),l.D===!0&&v.R().q("2y-1i",l.29+l.2h+"E"),c.7(".X").q(m,T+"E"));6 u=c.7(".X").7("15");u.1N().A("K"),u.V("1E",4(){l.N===!0&&"z"===l.j?p+=u.2c(8)-c.7(".X").7("15.K").2c():p=u.2c(8),s.j(!1),l.Q===!0&&e.18(),1j(x)})},l.1t){6 i="3h";l.Q&&(i="2u"),v.2H(\'<2B 1a="X \'+i+\'"><\/2B>\');6 t=l.D?"1u-L":"1u-2C";v.R().7(".X").q(t,l.2h+"E"),P.22()}12(4(){P.1T()},0)},1L:4(e,i,t){6 n=1h;n=t?e.1n(".J ").1N():e.1n().1N();6 l=4(){6 t=n.19(),l=0,a=t;i&&(t=0,l=1w*a/g),e.q({19:t+"E","2y-2Y":l+"%"})};l(),n.7("33").3l(4(){12(4(){l()},1w)})},K:4(e,i){8.11()&&"1c"===l.j&&v.A("V");6 t=0;k(p*l.I<f){k(e.1b("K"),8.11()||"1c"!==l.j||i!==!1||e.2E(l.H),t=i===!0?p:p*l.I,i===!0){6 n=e.9,a=n-1;t+1>=n&&(t=a)}k(l.N===!0&&"z"===l.j&&(t=i===!0?p-s.7(".B.L").9:p*l.I,i===!0)){6 n=e.9,a=n-1;t+1==n?t=a:t+1>n&&(t=0)}8.11()||"1c"!==l.j||i!==!1||e.F(t).2F(l.H),e.F(t).A("K")}Y e.1b("K"),e.F(e.9-1).A("K"),8.11()||"1c"!==l.j||i!==!1||(e.2E(l.H),e.F(t).2F(l.H))},1l:4(e,i){l.1H===!0&&(i=-i),8.11()?e.q(l.D===!0?{1U:"1V(1e, "+-i+"E, 1e)","-2J-1U":"1V(1e, "+-i+"E, 1e)"}:{1U:"1V("+-i+"E, 1e, 1e)","-2J-1U":"1V("+-i+"E, 1e, 1e)"}):l.D===!0?e.q("2K","2L").2M({2C:-i+"E"},l.H,l.2d):e.q("2K","2L").2M({L:-i+"E"},l.H,l.2d);6 t=v.R().7(".X").7("15");8.K(t,!0)},1c:4(){8.K(o,!1);6 e=v.R().7(".X").7("15");8.K(e,!0)},z:4(){6 e=8;P.2N=4(){h>g&&(M=e.1x(),e.K(o,!1),M>h-g-l.y?M=h-g-l.y:0>M&&(M=0),e.1l(s,M),l.N===!0&&"z"===l.j&&(p>=f-s.7(".B.L").9/l.I&&e.2i(s.7(".B.L").9),0===p&&e.2i(v.7(".J").9)))},P.2N()},2i:4(e){6 i=8;v.7(".13 a").A("2P"),12(4(){p=e,v.q("14-1m","2Q"),M=i.1x(),i.K(o,!1),n.1l(s,M),12(4(){v.q("14-1m",l.H+"1A"),v.7(".13 a").1b("2P")},3x)},l.H+1w)},1x:4(){6 e=0;k(l.G===!1)e=p*(b+l.y)*l.I;Y{e=0;O(6 i=0;p>i;i++)e+=1g(o.F(i).16())+l.y}U e},18:4(){6 e;3y(l.2G){2j"L":e=0;27;2j"2X":e=g/2-C/2;27;2j"1i":e=g-C}6 i=p-s.7(".B.L").9,t=v.R().7(".X");"z"===l.j&&l.N===!0&&(i>=t.1n().9?i=0:0>i&&(i=t.1n().9));6 n=i*(C+l.1p)-e;n+g>T&&(n=T-g-l.1p),0>n&&(n=0),8.1l(t,n)},1z:4(){l.1z&&(x=2S(4(){s.1q()},l.1O))},1X:4(e,i){k(v.q("14-1m","2Q"),"z"===l.j){6 t=e-i,n=M-t;k(n>=h-g-l.y)k(l.1Q===!1)n=h-g-l.y;Y{6 a=h-g-l.y;n=a+(n-a)/5}Y 0>n&&(l.1Q===!1?n=0:n/=5);8.1l(s,n)}},2l:4(e){k(v.q("14-1m",l.H+"1A"),1j(x),"z"===l.j){6 i=!1,t=!0;M-=e,M>h-g-l.y?(M=h-g-l.y,l.G===!1&&(i=!0)):0>M&&(M=0);6 n=4(e){6 t=0;k(i||e&&(t=1),l.G)O(6 n=0,a=0;a<o.9&&(n+=1g(o.F(a).16())+l.y,p=a+t,!(n>=M));a++);Y{6 s=M/((b+l.y)*l.I);p=1g(s)+t,M>=h-g-l.y&&s%1!==0&&p++}};e>=l.1r?(n(!1),t=!1):e<=-l.1r&&(n(!0),t=!1),s.j(t),8.18()}Y e>=l.1r?s.1R():e<=-l.1r&&s.1q()},1S:4(){6 i=8;k(!w){6 t=0,n=0,a=!1;v.V("3D",4(i){U g>h&&0!==h?!1:1P("2o"!==e(i.2V).1F("1a")&&"2U"!==e(i.2V).1F("1a")&&(t=l.D===!0?i.Z:i.W,a=!0,i.1k()))}),e(1o).V("3H",4(e){a&&(n=l.D===!0?e.Z:e.W,i.1X(n,t))}),e(1o).V("3I",4(s){k(a){a=!1,n=l.D===!0?s.Z:s.W;6 o=n-t;1K.2m(o)>=l.1r&&e(1o).V("1E.2Z",4(i){i.1k(),i.3L(),i.3M(),e(1o).3N("1E.2Z")}),i.2l(o)}})}},1W:4(){6 e=8;k(w){6 i={},t={};v.V("3O",4(e){t=e.1Y.1Z[0],i.W=e.1Y.1Z[0].W,i.Z=e.1Y.1Z[0].Z}),v.V("3R",4(n){k(g>h&&0!==h)U!1;6 a=n.1Y;t=a.1Z[0];6 s=1K.2m(t.W-i.W),o=1K.2m(t.Z-i.Z);l.D===!0?(3*o>s&&n.1k(),e.1X(t.Z,i.Z)):(3*s>o&&n.1k(),e.1X(t.W,i.W))}),v.V("3S",4(){k(g>h&&0!==h)U!1;k(l.D===!0)6 n=t.Z-i.Z;Y 6 n=t.W-i.W;e.2l(n)})}},32:4(){6 e=8;e.30(),e.1z(),8.11()&&(l.1W===!0&&e.1W(),l.1S===!0&&e.1S()),e.1t(),e.1J(),e.1M()}},n.32(),P.1T=4(){P.20(),l.D===!0?(g=l.17>1?l.2b:o.3U(),v.q("19",g+"E")):g=v.2w(),l.N===!0&&"z"===l.j&&P.B(),P.2n(),"z"===l.j&&s.1b("2p"),"z"===l.j&&(P.1C(),P.2k()),12(4(){"z"===l.j&&s.A("2p")},3W),l.1t&&P.22(),l.2e===!0&&l.D===!1&&s.q("19",o.F(p).19()),l.Q===!0&&n.18(),"z"===l.j&&n.z(),l.G===!1?o.9<=l.17?v.7(".13").1D():v.7(".13").34():P.1v(!1)<g&&0!==h?v.7(".13").1D():v.7(".13").34()},s.1R=4(){k(p>0)l.23.1f(8,s,p),p--,s.j(!1),l.Q===!0&&n.18();Y k(l.N===!0){k(l.23.1f(8,s,p),"1c"===l.j){6 e=f-1;p=1g(e/l.I)}s.j(!1),l.Q===!0&&n.18()}Y l.1y===!0&&(s.A("35"),12(4(){s.1b("35")},2a))},s.1q=4(){6 e=!0;k("z"===l.j)6 i=n.1x(),e=i<h-g-l.y;p*l.I<f-l.I&&e?(l.28.1f(8,s,p),p++,s.j(!1),l.Q===!0&&n.18()):l.N===!0?(l.28.1f(8,s,p),p=0,s.j(!1),l.Q===!0&&n.18()):l.1y===!0&&(s.A("36"),12(4(){s.1b("36")},2a))},s.j=4(e){l.2e===!0&&l.D===!1&&s.q("19",o.F(p).19()),u===!1&&("z"===l.j?n.11()&&(s.A("2p"),""!==l.H&&v.q("14-1m",l.H+"1A"),""!==l.1B&&v.q("14-2s-4",l.1B)):n.11()&&(""!==l.H&&s.q("14-1m",l.H+"1A"),""!==l.1B&&s.q("14-2s-4",l.1B))),e||l.2R.1f(8,s,p),"z"===l.j?n.z():n.1c(),12(4(){e||l.2T.1f(8,s,p)},l.H),u=!0},s.42=4(){1j(x),s.1q(),x=2S(4(){s.1q()},l.1O)},s.1O=4(){1j(x)},s.43=4(){P.1T()},s.44=4(){6 e=p;k(l.N){6 i=v.7(".J").9,t=s.7(".B.L").9;e=t-1>=p?i+(p-t):p>=i+t?p-i-t:p-t}U e+1},s.45=4(){U v.7(".J").9},s.46=4(e){p=l.N?e+s.7(".B.L").9-1:e,s.j(!1),l.Q===!0&&n.18()},12(4(){l.2O.1f(8,s)},10),e(1o).V("47 48",4(e){12(4(){e.1k(),P.1T()},49)}),8}}(3p);', 62, 259, "||||function||var|find|this|length||||||||||mode|if||||||css||||||||slideMargin|slide|addClass|clone||vertical|px|eq|autoWidth|speed|slideMove|lslide|active|left||loop|for||gallery|parent|||return|on|pageX|lSPager|else|pageY||doCss|setTimeout|lSAction|transition|li|width|item|slideThumb|height|class|removeClass|fade|responsive|0px|call|parseInt|null|right|clearInterval|preventDefault|move|duration|children|window|thumbMargin|goToNextSlide|swipeThreshold|div|pager|margin|calWidth|100|slideValue|slideEndAnimatoin|auto|ms|cssEasing|calSW|hide|click|attr|in|rtl|breakpoint|controls|Math|setHeight|keyPress|first|pause|void|freeMove|goToPrevSlide|enableDrag|init|transform|translate3d|enableTouch|touchMove|originalEvent|targetTouches|chbreakpoint|lightSlider|createPager|onBeforePrevSlide|href|javascript|thumbItem|break|onBeforeNextSlide|vThumbWidth|400|verticalHeight|index|easing|adaptiveHeight|remove|document|galleryMargin|resetSlide|case|sSW|touchEnd|abs|calL|lSPrev|lSSlide|lSSlideWrapper|noPager|timing|style|lSGallery|undefined|outerWidth|prevHtml|padding|keyCode|settings|ul|top|nextHtml|fadeOut|fadeIn|currentPagerPosition|after|onBeforeStart|webkit|position|relative|animate|calSlide|onSliderLoad|disabled|0ms|onBeforeSlide|setInterval|onAfterSlide|lSNext|target|documentElement|middle|bottom|ls|initialStyle|useCSS|build|img|show|leftEnd|rightEnd||typeof||lSSlideOuter|OTransition|property|extend|lSrtl|KhtmlTransition|fn|lSpg|keyup|lightslider|el|load|appendTo|prependTo|hasClass|jQuery|isEmptyObject|linear|usingCss|round|lSFade|not|use|50|switch|display|none|ontouchstart|2e3|mousedown|data|thumb|strict|mousemove|mouseup|each|ease|stopImmediatePropagation|stopPropagation|off|touchstart|new|Object|touchmove|touchend|src|outerHeight|500|1e3|MozTransition|WebkitTransition|wrap||html|play|refresh|getCurrentSlideCount|getTotalSlideCount|goToSlide|resize|orientationchange|200|msTransition".split("|"), 0, {}));
var vegaslider = $("#vega-slider").lightSlider({
        item: 1,
        slideEndAnimation: !0,
        keyPress: !0,
        controls: !1,
        auto: !0,
        loop: !0,
        speed: 1e3,
        pause: 6e3,
        mode: "fade",
        onSliderLoad: function(n) {
            n.getTotalSlideCount() < 2 && $("#vega-slider").parent().parent().find(".lSPager").remove()
        }
    }),
    sliderTimeout;
$("#vega-slider").parent().on("mouseenter", function() {
    vegaslider.pause()
}).on("mouseleave", function() {
    clearTimeout(sliderTimeout);
    sliderTimeout = setTimeout(function() {
        vegaslider.play()
    }, 5e3)
});
new function(n) {
    var i = n.separator || "&",
        t = n.spaces === !1 ? !0 : !1,
        e = n.suffix === !1 ? "" : "[]",
        r = n.prefix === !1 ? !1 : !0,
        u = r ? n.hash === !0 ? "#" : "?" : "",
        f = n.numbers === !1 ? !1 : !0;
    jQuery.query = new function() {
        var n = function(n, t) {
                return n != undefined && n !== null && (!t ? !0 : n.constructor == t)
            },
            o = function(n) {
                for (var t, u = /\[([^[]*)\]/g, i = /^([^[]+)(\[.*\])?$/.exec(n), f = i[1], r = []; t = u.exec(i[2]);) r.push(t[1]);
                return [f, r]
            },
            r = function(t, i, u) {
                var e = i.shift(),
                    o, s, f;
                if (typeof t != "object" && (t = null), e === "")
                    if (t || (t = []), n(t, Array)) t.push(i.length == 0 ? u : r(null, i.slice(0), u));
                    else if (n(t, Object)) {
                    for (f = 0; t[f++] != null;);
                    t[--f] = i.length == 0 ? u : r(t[f], i.slice(0), u)
                } else t = [], t.push(i.length == 0 ? u : r(null, i.slice(0), u));
                else if (e && e.match(/^\s*[0-9]+\s*$/)) o = parseInt(e, 10), t || (t = []), t[o] = i.length == 0 ? u : r(t[o], i.slice(0), u);
                else if (e) {
                    if (o = e.replace(/^\s*|\s*$/g, ""), t || (t = {}), n(t, Array)) {
                        for (s = {}, f = 0; f < t.length; ++f) s[f] = t[f];
                        t = s
                    }
                    t[o] = i.length == 0 ? u : r(t[o], i.slice(0), u)
                } else return u;
                return t
            },
            e = function(n) {
                var t = this;
                return t.keys = {}, n.queryObject ? jQuery.each(n.get(), function(n, i) {
                    t.SET(n, i)
                }) : t.parseNew.apply(t, arguments), t
            };
        return e.prototype = {
            queryObject: !0,
            parseNew: function() {
                var n = this;
                return n.keys = {}, jQuery.each(arguments, function() {
                    var i = "" + this;
                    i = i.replace(/^[?#]/, "");
                    i = i.replace(/[;&]$/, "");
                    t && (i = i.replace(/[+]/g, " "));
                    jQuery.each(i.split(/[&;]/), function() {
                        var i = decodeURIComponent(this.split("=")[0] || ""),
                            t = decodeURIComponent(this.split("=")[1] || "");
                        i && (f && (/^[+-]?[0-9]+\.[0-9]*$/.test(t) ? t = parseFloat(t) : /^[+-]?[1-9][0-9]*$/.test(t) && (t = parseInt(t, 10))), t = !t && t !== 0 ? !0 : t, n.SET(i, t))
                    })
                }), n
            },
            has: function(t, i) {
                var r = this.get(t);
                return n(r, i)
            },
            GET: function(t) {
                if (!n(t)) return this.keys;
                for (var r = o(t), f = r[0], u = r[1], i = this.keys[f]; i != null && u.length != 0;) i = i[u.shift()];
                return typeof i == "number" ? i : i || ""
            },
            get: function(t) {
                var i = this.GET(t);
                return n(i, Object) ? jQuery.extend(!0, {}, i) : n(i, Array) ? i.slice(0) : i
            },
            SET: function(t, i) {
                var e = n(i) ? i : null,
                    u = o(t),
                    f = u[0],
                    s = u[1],
                    h = this.keys[f];
                return this.keys[f] = r(h, s.slice(0), e), this
            },
            set: function(n, t) {
                return this.copy().SET(n, t)
            },
            REMOVE: function(t, i) {
                var r, u;
                if (i)
                    if (r = this.GET(t), n(r, Array)) {
                        for (tval in r) r[tval] = r[tval].toString();
                        if (u = $.inArray(i, r), u >= 0) t = r.splice(u, 1), t = t[u];
                        else return
                    } else if (i != r) return;
                return this.SET(t, null).COMPACT()
            },
            remove: function(n, t) {
                return this.copy().REMOVE(n, t)
            },
            EMPTY: function() {
                var n = this;
                return jQuery.each(n.keys, function(t) {
                    delete n.keys[t]
                }), n
            },
            load: function(n) {
                var t = n.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"),
                    i = n.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new e(n.length == i.length ? "" : i, n.length == t.length ? "" : t)
            },
            empty: function() {
                return this.copy().EMPTY()
            },
            copy: function() {
                return new e(this)
            },
            COMPACT: function() {
                function t(i) {
                    var r = typeof i == "object" ? n(i, Array) ? [] : {} : i;
                    if (typeof i == "object") {
                        function u(t, i, r) {
                            n(t, Array) ? t.push(r) : t[i] = r
                        }
                        jQuery.each(i, function(i, f) {
                            if (!n(f)) return !0;
                            u(r, i, t(f))
                        })
                    }
                    return r
                }
                return this.keys = t(this.keys), this
            },
            compact: function() {
                return this.copy().COMPACT()
            },
            toString: function() {
                var r = [],
                    f = [],
                    h = this,
                    e = function(n) {
                        return n = n + "", t && (n = n.replace(/ /g, "+")), encodeURIComponent(n)
                    },
                    s = function(t, i, r) {
                        if (n(r) && r !== !1) {
                            var u = [e(i)];
                            r !== !0 && (u.push("="), u.push(e(r)));
                            t.push(u.join(""))
                        }
                    },
                    o = function(n, t) {
                        var i = function(n) {
                            return !t || t == "" ? [n].join("") : [t, "[", n, "]"].join("")
                        };
                        jQuery.each(n, function(n, t) {
                            typeof t == "object" ? o(t, i(n)) : s(f, i(n), t)
                        })
                    };
                return o(this.keys), f.length > 0 && r.push(u), r.push(f.join(i)), r.join("")
            }
        }, new e(location.search, location.hash)
    }
}(jQuery.query || {});
(function() {
    var n;
    $.fn.tabcordion = function(t) {
        return this.each(function() {
            var i, r;
            (i = $(this), "object" == typeof t) && (r = i.data("tabcordion") || new n(this, t))
        })
    };
    $.fn.tabcordion.defaults = {
        resizeEl: null,
        onResize: !0,
        delay: 500,
        breakWidth: 500,
        tabs: {
            panelTitleTag: "h4"
        },
        accordion: {
            elementId: "accordion"
        },
        scheduler: null
    };
    n = function() {
        function n(n, t) {
            if (this.el = n, this.$el = $(n), this.options = $.extend({}, $.fn.tabcordion.defaults, {
                    resizeEl: this.$el
                }, t), this.options.onResize) {
                this.proxy = $.proxy(this.eventHandler, this);
                $(window).on("resize", this.proxy)
            }
            this.onResize()
        }
        return n.prototype.getTemplates = function() {
            var n = {};
            return n.containerStart = '<div class="panel-group" id="accordion">', n.containerItemStart = '<div class="panel panel-default">', n.containerItemEnd = "<\/div>", n.containerEnd = "<\/div>", n
        }, n.prototype.collapse2tab = function() {
            this.$el.find(" > #" + this.options.accordion.elementId).remove();
            this.$el.find(" > .nav-tabs").show();
            this.$el.find(" > .tab-content").show()
        }, n.prototype.tab2collapse = function() {
            var t, r;
            if (this.$el.find(" > .nav-tabs").hide(), this.$el.find(" > .tab-content").hide(), 0 === this.$el.find("#accordion").length) {
                var n = {},
                    u = {
                        heads: [],
                        bodies: []
                    },
                    f = this.getTemplates(),
                    i = "";
                if (n.titles = this.$el.find("> .nav-tabs li a"), n.contents = this.$el.find("> .tab-content .tab-pane"), n.titles.length !== n.contents.length) return;
                for (t = 0; t < n.titles.length; t++) u.heads[t] = '<div class="panel-heading"><' + this.options.tabs.panelTitleTag + ' class="panel-title"><a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#' + this.options.accordion.elementId + '" href="' + $(n.titles[t]).attr("href") + '_accordion">' + $(n.titles[t]).html() + "<\/a><\/" + this.options.tabs.panelTitleTag + "><\/div>", u.bodies[t] = '<div id="' + $(n.contents[t]).attr("id") + '_accordion" class="panel-collapse collapse"><div class="panel-body">' + $(n.contents[t]).html() + "<\/div><\/div>";
                for (i += f.containerStart, r = 0; r < n.titles.length; r++) i += f.containerItemStart, i += u.heads[r], i += u.bodies[r], i += f.containerItemEnd;
                i += f.containerEnd;
                this.$el.prepend(i)
            } else this.$el.find(" >.panel-group .panel .panel-heading").show()
        }, n.prototype.eventHandler = function(n) {
            var t = this;
            return this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                return t.options.scheduler ? t.options.scheduler(function() {
                    return t.onResize(n)
                }) : t.onResize(n)
            }, this.options.delay)
        }, n.prototype.onResize = function() {
            this.options.breakWidth > $(document).width() ? this.tab2collapse() : this.collapse2tab()
        }, n
    }()
}).call(this);
$(function() {
        $(".tabcordion").tabcordion({
            breakWidth: 769
        })
    }),
    function(n, t, i) {
        "use strict";

        function p(n) {
            return function() {
                for (var i = arguments[0], i = "[" + (n ? n + ":" : "") + i + "] http://errors.angularjs.org/1.2.30/" + (n ? n + "/" : "") + i, t = 1; t < arguments.length; t++) i = i + (1 == t ? "?" : "&") + "p" + (t - 1) + "=" + encodeURIComponent("function" == typeof arguments[t] ? arguments[t].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[t] ? "undefined" : "string" != typeof arguments[t] ? JSON.stringify(arguments[t]) : arguments[t]);
                return Error(i)
            }
        }

        function bi(n) {
            if (null == n || si(n)) return !1;
            var t = n.length;
            return 1 === n.nodeType && t ? !0 : e(n) || o(n) || 0 === t || "number" == typeof t && 0 < t && t - 1 in n
        }

        function r(n, t, i) {
            var u;
            if (n)
                if (h(n))
                    for (u in n) "prototype" == u || "length" == u || "name" == u || n.hasOwnProperty && !n.hasOwnProperty(u) || t.call(i, n[u], u);
                else if (o(n) || bi(n))
                for (u = 0; u < n.length; u++) t.call(i, n[u], u);
            else if (n.forEach && n.forEach !== r) n.forEach(t, i);
            else
                for (u in n) n.hasOwnProperty(u) && t.call(i, n[u], u);
            return n
        }

        function lf(n) {
            var t = [];
            for (var i in n) n.hasOwnProperty(i) && t.push(i);
            return t.sort()
        }

        function ns(n, t, i) {
            for (var r = lf(n), u = 0; u < r.length; u++) t.call(i, n[r[u]], r[u]);
            return r
        }

        function af(n) {
            return function(t, i) {
                n(i, t)
            }
        }

        function vr() {
            for (var n = pt.length, t; n;) {
                if (n--, t = pt[n].charCodeAt(0), 57 == t) return pt[n] = "A", pt.join("");
                if (90 == t) pt[n] = "0";
                else return pt[n] = String.fromCharCode(t + 1), pt.join("")
            }
            return pt.unshift("0"), pt.join("")
        }

        function vf(n, t) {
            t ? n.$$hashKey = t : delete n.$$hashKey
        }

        function c(n) {
            var t = n.$$hashKey;
            return r(arguments, function(t) {
                t !== n && r(t, function(t, i) {
                    n[i] = t
                })
            }), vf(n, t), n
        }

        function b(n) {
            return parseInt(n, 10)
        }

        function yf(n, t) {
            return c(new(c(function() {}, {
                prototype: n
            })), t)
        }

        function s() {}

        function ut(n) {
            return n
        }

        function nt(n) {
            return function() {
                return n
            }
        }

        function l(n) {
            return "undefined" == typeof n
        }

        function f(n) {
            return "undefined" != typeof n
        }

        function a(n) {
            return null != n && "object" == typeof n
        }

        function e(n) {
            return "string" == typeof n
        }

        function yr(n) {
            return "number" == typeof n
        }

        function wt(n) {
            return "[object Date]" === ei.call(n)
        }

        function h(n) {
            return "function" == typeof n
        }

        function pr(n) {
            return "[object RegExp]" === ei.call(n)
        }

        function si(n) {
            return n && n.document && n.location && n.alert && n.setInterval
        }

        function ts(n) {
            return !(!n || !(n.nodeName || n.prop && n.attr && n.find))
        }

        function is(n, t, i) {
            var u = [];
            return r(n, function(n, r, f) {
                u.push(t.call(i, n, r, f))
            }), u
        }

        function ki(n, t) {
            if (n.indexOf) return n.indexOf(t);
            for (var i = 0; i < n.length; i++)
                if (t === n[i]) return i;
            return -1
        }

        function di(n, t) {
            var i = ki(n, t);
            return 0 <= i && n.splice(i, 1), t
        }

        function hi(n, t, i, u) {
            var e, f, s;
            if (si(n) || n && n.$evalAsync && n.$watch) throw rr("cpws");
            if (t) {
                if (n === t) throw rr("cpi");
                if (i = i || [], u = u || [], a(n)) {
                    if (e = ki(i, n), -1 !== e) return u[e];
                    i.push(n);
                    u.push(t)
                }
                if (o(n))
                    for (f = t.length = 0; f < n.length; f++) e = hi(n[f], null, i, u), a(n[f]) && (i.push(n[f]), u.push(e)), t.push(e);
                else {
                    s = t.$$hashKey;
                    o(t) ? t.length = 0 : r(t, function(n, i) {
                        delete t[i]
                    });
                    for (f in n) e = hi(n[f], null, i, u), a(n[f]) && (i.push(n[f]), u.push(e)), t[f] = e;
                    vf(t, s)
                }
            } else(t = n) && (o(n) ? t = hi(n, [], i, u) : wt(n) ? t = new Date(n.getTime()) : pr(n) ? (t = RegExp(n.source, n.toString().match(/[^\/]*$/)[0]), t.lastIndex = n.lastIndex) : a(n) && (t = hi(n, {}, i, u)));
            return t
        }

        function ft(n, t) {
            if (o(n)) {
                t = t || [];
                for (var i = 0; i < n.length; i++) t[i] = n[i]
            } else if (a(n))
                for (i in t = t || {}, n) uu.call(n, i) && ("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (t[i] = n[i]);
            return t || n
        }

        function ti(n, t) {
            if (n === t) return !0;
            if (null === n || null === t) return !1;
            if (n !== n && t !== t) return !0;
            var u = typeof n,
                r;
            if (u == typeof t && "object" == u)
                if (o(n)) {
                    if (!o(t)) return !1;
                    if ((u = n.length) == t.length) {
                        for (r = 0; r < u; r++)
                            if (!ti(n[r], t[r])) return !1;
                        return !0
                    }
                } else {
                    if (wt(n)) return wt(t) ? isNaN(n.getTime()) && isNaN(t.getTime()) || n.getTime() === t.getTime() : !1;
                    if (pr(n) && pr(t)) return n.toString() == t.toString();
                    if (n && n.$evalAsync && n.$watch || t && t.$evalAsync && t.$watch || si(n) || si(t) || o(t)) return !1;
                    u = {};
                    for (r in n)
                        if ("$" !== r.charAt(0) && !h(n[r])) {
                            if (!ti(n[r], t[r])) return !1;
                            u[r] = !0
                        }
                    for (r in t)
                        if (!u.hasOwnProperty(r) && "$" !== r.charAt(0) && t[r] !== i && !h(t[r])) return !1;
                    return !0
                }
            return !1
        }

        function cu(n, t) {
            var i = 2 < arguments.length ? dt.call(arguments, 2) : [];
            return !h(t) || t instanceof RegExp ? t : i.length ? function() {
                return arguments.length ? t.apply(n, i.concat(dt.call(arguments, 0))) : t.apply(n, i)
            } : function() {
                return arguments.length ? t.apply(n, arguments) : t.call(n)
            }
        }

        function rs(n, r) {
            var u = r;
            return "string" == typeof n && "$" === n.charAt(0) ? u = i : si(r) ? u = "$WINDOW" : r && t === r ? u = "$DOCUMENT" : r && r.$evalAsync && r.$watch && (u = "$SCOPE"), u
        }

        function ct(n, t) {
            return "undefined" == typeof n ? i : JSON.stringify(n, rs, t ? "  " : null)
        }

        function pf(n) {
            return e(n) ? JSON.parse(n) : n
        }

        function gi(n) {
            return "function" == typeof n ? n = !0 : n && 0 !== n.length ? (n = v("" + n), n = !("f" == n || "0" == n || "false" == n || "no" == n || "n" == n || "[]" == n)) : n = !1, n
        }

        function et(n) {
            n = u(n).clone();
            try {
                n.empty()
            } catch (i) {}
            var t = u("<div>").append(n).html();
            try {
                return 3 === n[0].nodeType ? v(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(n, t) {
                    return "<" + v(t)
                })
            } catch (r) {
                return v(t)
            }
        }

        function wf(n) {
            try {
                return decodeURIComponent(n)
            } catch (t) {}
        }

        function bf(n) {
            var i = {},
                u, t;
            return r((n || "").split("&"), function(n) {
                n && (u = n.replace(/\+/g, "%20").split("="), t = wf(u[0]), f(t) && (n = f(u[1]) ? wf(u[1]) : !0, uu.call(i, t) ? o(i[t]) ? i[t].push(n) : i[t] = [i[t], n] : i[t] = n))
            }), i
        }

        function lu(n) {
            var t = [];
            return r(n, function(n, i) {
                o(n) ? r(n, function(n) {
                    t.push(ii(i, !0) + (!0 === n ? "" : "=" + ii(n, !0)))
                }) : t.push(ii(i, !0) + (!0 === n ? "" : "=" + ii(n, !0)))
            }), t.length ? t.join("&") : ""
        }

        function wr(n) {
            return ii(n, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function ii(n, t) {
            return encodeURIComponent(n).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
        }

        function us(n, i) {
            function f(n) {
                n && s.push(n)
            }
            var s = [n],
                u, e, o = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            r(o, function(i) {
                o[i] = !0;
                f(t.getElementById(i));
                i = i.replace(":", "\\:");
                n.querySelectorAll && (r(n.querySelectorAll("." + i), f), r(n.querySelectorAll("." + i + "\\:"), f), r(n.querySelectorAll("[" + i + "]"), f))
            });
            r(s, function(n) {
                if (!u) {
                    var t = h.exec(" " + n.className + " ");
                    t ? (u = n, e = (t[2] || "").replace(/\s+/g, ",")) : r(n.attributes, function(t) {
                        !u && o[t.name] && (u = n, e = t.value)
                    })
                }
            });
            u && i(u, e ? [e] : [])
        }

        function kf(i, f) {
            var e = function() {
                    if (i = u(i), i.injector()) {
                        var n = i[0] === t ? "document" : et(i);
                        throw rr("btstrpd", n.replace(/</, "&lt;").replace(/>/, "&gt;"));
                    }
                    return f = f || [], f.unshift(["$provide", function(n) {
                        n.value("$rootElement", i)
                    }]), f.unshift("ng"), n = ue(f), n.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(n, t, i, r) {
                        n.$apply(function() {
                            t.data("$injector", r);
                            i(t)(n)
                        })
                    }]), n
                },
                o = /^NG_DEFER_BOOTSTRAP!/;
            if (n && !o.test(n.name)) return e();
            n.name = n.name.replace(o, "");
            ur.resumeBootstrap = function(n) {
                r(n, function(n) {
                    f.push(n)
                });
                e()
            }
        }

        function br(n, t) {
            return t = t || "_", n.replace(rc, function(n, i) {
                return (i ? t : "") + n.toLowerCase()
            })
        }

        function au(n, t, i) {
            if (!n) throw rr("areq", t || "?", i || "required");
            return n
        }

        function nr(n, t, i) {
            return i && o(n) && (n = n[n.length - 1]), au(h(n), t, "not a function, got " + (n && "object" == typeof n ? n.constructor.name || "Object" : typeof n)), n
        }

        function ri(n, t) {
            if ("hasOwnProperty" === n) throw rr("badname", t);
        }

        function df(n, t, i) {
            if (!t) return n;
            t = t.split(".");
            for (var u, f = n, e = t.length, r = 0; r < e; r++) u = t[r], n && (n = (f = n)[u]);
            return !i && h(n) ? cu(f, n) : n
        }

        function vu(n) {
            var t = n[0],
                i;
            if (n = n[n.length - 1], t === n) return u(t);
            i = [t];
            do {
                if (t = t.nextSibling, !t) break;
                i.push(t)
            } while (t !== n);
            return u(i)
        }

        function fs(n) {
            var t = p("$injector"),
                i = p("ng");
            return n = n.angular || (n.angular = {}), n.$$minErr = n.$$minErr || p, n.module || (n.module = function() {
                var n = {};
                return function(r, u, f) {
                    if ("hasOwnProperty" === r) throw i("badname", "module");
                    return u && n.hasOwnProperty(r) && (n[r] = null), n[r] || (n[r] = function() {
                        function n(n, t, r) {
                            return function() {
                                return i[r || "push"]([n, t, arguments]), s
                            }
                        }
                        if (!u) throw t("nomod", r);
                        var i = [],
                            e = [],
                            o = n("$injector", "invoke"),
                            s = {
                                _invokeQueue: i,
                                _runBlocks: e,
                                requires: u,
                                name: r,
                                provider: n("$provide", "provider"),
                                factory: n("$provide", "factory"),
                                service: n("$provide", "service"),
                                value: n("$provide", "value"),
                                constant: n("$provide", "constant", "unshift"),
                                animation: n("$animateProvider", "register"),
                                filter: n("$filterProvider", "register"),
                                controller: n("$controllerProvider", "register"),
                                directive: n("$compileProvider", "directive"),
                                config: o,
                                run: function(n) {
                                    return e.push(n), this
                                }
                            };
                        return f && o(f), s
                    }())
                }
            }())
        }

        function es(t) {
            c(t, {
                bootstrap: kf,
                copy: hi,
                extend: c,
                equals: ti,
                element: u,
                forEach: r,
                injector: ue,
                noop: s,
                bind: cu,
                toJson: ct,
                fromJson: pf,
                identity: ut,
                isUndefined: l,
                isDefined: f,
                isString: e,
                isFunction: h,
                isObject: a,
                isNumber: yr,
                isElement: ts,
                isArray: o,
                version: uc,
                isDate: wt,
                lowercase: v,
                uppercase: vi,
                callbacks: {
                    counter: 0
                },
                $$minErr: p,
                $$csp: er
            });
            fr = fs(n);
            try {
                fr("ngLocale")
            } catch (i) {
                fr("ngLocale", []).provider("$locale", ih)
            }
            fr("ng", ["ngLocale"], ["$provide", function(n) {
                n.provider({
                    $$sanitizeUri: lh
                });
                n.provider("$compile", fe).directive({
                    a: yo,
                    input: bo,
                    textarea: bo,
                    form: sl,
                    script: tv,
                    select: uv,
                    style: ev,
                    option: fv,
                    ngBind: gl,
                    ngBindHtml: ta,
                    ngBindTemplate: na,
                    ngClass: ia,
                    ngClassEven: ua,
                    ngClassOdd: ra,
                    ngCloak: fa,
                    ngController: ea,
                    ngForm: hl,
                    ngHide: wa,
                    ngIf: sa,
                    ngInclude: ha,
                    ngInit: la,
                    ngNonBindable: aa,
                    ngPluralize: va,
                    ngRepeat: ya,
                    ngShow: pa,
                    ngStyle: ba,
                    ngSwitch: ka,
                    ngSwitchWhen: da,
                    ngSwitchDefault: ga,
                    ngOptions: rv,
                    ngTransclude: nv,
                    ngModel: pl,
                    ngList: bl,
                    ngChange: wl,
                    required: ko,
                    ngRequired: ko,
                    ngValue: dl
                }).directive({
                    ngInclude: ca
                }).directive(eu).directive(go);
                n.provider({
                    $anchorScroll: ss,
                    $animate: bc,
                    $browser: ls,
                    $cacheFactory: as,
                    $controller: ys,
                    $document: ps,
                    $exceptionHandler: ws,
                    $filter: ge,
                    $interpolate: nh,
                    $interval: th,
                    $http: bs,
                    $httpBackend: ds,
                    $location: rh,
                    $log: uh,
                    $parse: eh,
                    $rootScope: ch,
                    $q: oh,
                    $sce: yh,
                    $sceDelegate: vh,
                    $sniffer: ph,
                    $templateCache: vs,
                    $timeout: wh,
                    $window: bh,
                    $$rAF: hh,
                    $$asyncCallback: hs
                })
            }])
        }

        function tr(n) {
            return n.replace(ec, function(n, t, i, r) {
                return r ? i.toUpperCase() : i
            }).replace(oc, "Moz$1")
        }

        function yu(n, t, i, r) {
            function e(n) {
                var h = i && n ? [this.filter(n)] : [this],
                    c = t,
                    l, o, a, e, s, v;
                if (!r || null != n)
                    for (; h.length;)
                        for (l = h.shift(), o = 0, a = l.length; o < a; o++)
                            for (e = u(l[o]), c ? e.triggerHandler("$destroy") : c = !c, s = 0, e = (v = e.children()).length; s < e; s++) h.push(fi(v[s]));
                return f.apply(this, arguments)
            }
            var f = fi.fn[n],
                f = f.$original || f;
            e.$original = f;
            fi.fn[n] = e
        }

        function w(n) {
            var r, o, i, f;
            if (n instanceof w) return n;
            if (e(n) && (n = g(n)), !(this instanceof w)) {
                if (e(n) && "<" != n.charAt(0)) throw ef("nosel");
                return new w(n)
            }
            if (e(n)) {
                if (r = n, n = t, o = sc.exec(r)) n = [n.createElement(o[1])];
                else {
                    if (i = n, n = i.createDocumentFragment(), o = [], of .test(r)) {
                        for (i = n.appendChild(i.createElement("div")), f = (hc.exec(r) || ["", ""])[1].toLowerCase(), f = tt[f] || tt._default, i.innerHTML = "<div>&#160;<\/div>" + f[1] + r.replace(cc, "<$1><\/$2>") + f[2], i.removeChild(i.firstChild), r = f[0]; r--;) i = i.lastChild;
                        for (r = 0, f = i.childNodes.length; r < f; ++r) o.push(i.childNodes[r]);
                        i = n.firstChild;
                        i.textContent = ""
                    } else o.push(i.createTextNode(r));
                    n.textContent = "";
                    n.innerHTML = "";
                    n = o
                }
                du(this, n);
                u(t.createDocumentFragment()).append(this)
            } else du(this, n)
        }

        function pu(n) {
            return n.cloneNode(!0)
        }

        function ci(n) {
            wu(n);
            var t = 0;
            for (n = n.childNodes || []; t < n.length; t++) ci(n[t])
        }

        function gf(n, t, i, u) {
            if (f(u)) throw ef("offargs");
            var e = lt(n, "events");
            lt(n, "handle") && (l(t) ? r(e, function(t, i) {
                sr(n, i, t);
                delete e[i]
            }) : r(t.split(" "), function(t) {
                l(i) ? (sr(n, t, e[t]), delete e[t]) : di(e[t] || [], i)
            }))
        }

        function wu(n, t) {
            var u = n.ng339,
                r = or[u];
            r && (t ? delete or[u].data[t] : (r.handle && (r.events.$destroy && r.handle({}, "$destroy"), gf(n)), delete or[u], n.ng339 = i))
        }

        function lt(n, t, i) {
            var r = n.ng339,
                r = or[r || -1];
            if (f(i)) r || (n.ng339 = r = ++fc, r = or[r] = {}), r[t] = i;
            else return r && r[t]
        }

        function bu(n, t, i) {
            var r = lt(n, "data"),
                u = f(i),
                e = !u && f(t),
                o = e && !a(t);
            if (r || o || lt(n, "data", r = {}), u) r[t] = i;
            else if (e) {
                if (o) return r && r[t];
                c(r, t)
            } else return r
        }

        function ku(n, t) {
            return n.getAttribute ? -1 < (" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") : !1
        }

        function kr(n, t) {
            t && n.setAttribute && r(t.split(" "), function(t) {
                n.setAttribute("class", g((" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + g(t) + " ", " ")))
            })
        }

        function dr(n, t) {
            if (t && n.setAttribute) {
                var i = (" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                r(t.split(" "), function(n) {
                    n = g(n); - 1 === i.indexOf(" " + n + " ") && (i += n + " ")
                });
                n.setAttribute("class", g(i))
            }
        }

        function du(n, t) {
            if (t) {
                t = t.nodeName || !f(t.length) || si(t) ? [t] : t;
                for (var i = 0; i < t.length; i++) n.push(t[i])
            }
        }

        function ne(n, t) {
            return gr(n, "$" + (t || "ngController") + "Controller")
        }

        function gr(n, t, r) {
            for (9 == n.nodeType && (n = n.documentElement), t = o(t) ? t : [t]; n;) {
                for (var f = 0, e = t.length; f < e; f++)
                    if ((r = u.data(n, t[f])) !== i) return r;
                n = n.parentNode || 11 === n.nodeType && n.host
            }
        }

        function te(n) {
            for (var t = 0, i = n.childNodes; t < i.length; t++) ci(i[t]);
            for (; n.firstChild;) n.removeChild(n.firstChild)
        }

        function ie(n, t) {
            var i = hr[t.toLowerCase()];
            return i && sf[n.nodeName] && i
        }

        function os(n, i) {
            var u = function(u, f) {
                var e, o;
                u.preventDefault || (u.preventDefault = function() {
                    u.returnValue = !1
                });
                u.stopPropagation || (u.stopPropagation = function() {
                    u.cancelBubble = !0
                });
                u.target || (u.target = u.srcElement || t);
                l(u.defaultPrevented) && (e = u.preventDefault, u.preventDefault = function() {
                    u.defaultPrevented = !0;
                    e.call(u)
                }, u.defaultPrevented = !1);
                u.isDefaultPrevented = function() {
                    return u.defaultPrevented || !1 === u.returnValue
                };
                o = ft(i[f || u.type] || []);
                r(o, function(t) {
                    t.call(n, u)
                });
                8 >= y ? (u.preventDefault = null, u.stopPropagation = null, u.isDefaultPrevented = null) : (delete u.preventDefault, delete u.stopPropagation, delete u.isDefaultPrevented)
            };
            return u.elem = n, u
        }

        function li(n, t) {
            var u = typeof n,
                r;
            return "function" == u || "object" == u && null !== n ? "function" == typeof(r = n.$$hashKey) ? r = n.$$hashKey() : r === i && (r = n.$$hashKey = (t || vr)()) : r = n, u + ":" + r
        }

        function ir(n, t) {
            if (t) {
                var i = 0;
                this.nextUid = function() {
                    return ++i
                }
            }
            r(n, this.put, this)
        }

        function re(n) {
            var i, t;
            return "function" == typeof n ? (i = n.$inject) || (i = [], n.length && (t = n.toString().replace(pc, ""), t = t.match(ac), r(t[1].split(vc), function(n) {
                n.replace(yc, function(n, t, r) {
                    i.push(r)
                })
            })), n.$inject = i) : o(n) ? (t = n.length - 1, nr(n[t], "fn"), i = n.slice(0, t)) : nr(n, "fn", !0), i
        }

        function ue(n) {
            function i(n) {
                return function(t, i) {
                    if (a(t)) r(t, af(n));
                    else return n(t, i)
                }
            }

            function w(n, i) {
                if (ri(n, "service"), (h(i) || o(i)) && (i = t.instantiate(i)), !i.$get) throw cr("pget", n);
                return u[n + c] = i
            }

            function v(n, t) {
                return w(n, {
                    $get: t
                })
            }

            function b(n) {
                var i = [],
                    u, s, f, c;
                return r(n, function(n) {
                    if (!d.get(n)) {
                        d.put(n, !0);
                        try {
                            if (e(n))
                                for (u = fr(n), i = i.concat(b(u.requires)).concat(u._runBlocks), s = u._invokeQueue, f = 0, c = s.length; f < c; f++) {
                                    var l = s[f],
                                        a = t.get(l[0]);
                                    a[l[1]].apply(a, l[2])
                                } else h(n) ? i.push(t.invoke(n)) : o(n) ? i.push(t.invoke(n)) : nr(n, "module")
                        } catch (r) {
                            throw o(n) && (n = n[n.length - 1]), r.message && r.stack && -1 == r.stack.indexOf(r.message) && (r = r.message + "\n" + r.stack), cr("modulerr", n, r.stack || r.message || r);
                        }
                    }
                }), i
            }

            function k(n, t) {
                function i(i) {
                    if (n.hasOwnProperty(i)) {
                        if (n[i] === y) throw cr("cdep", i + " <- " + l.join(" <- "));
                        return n[i]
                    }
                    try {
                        return l.unshift(i), n[i] = y, n[i] = t(i)
                    } catch (r) {
                        throw n[i] === y && delete n[i], r;
                    } finally {
                        l.shift()
                    }
                }

                function r(n, t, r) {
                    for (var s = [], h = re(n), u, f = 0, e = h.length; f < e; f++) {
                        if (u = h[f], "string" != typeof u) throw cr("itkn", u);
                        s.push(r && r.hasOwnProperty(u) ? r[u] : i(u))
                    }
                    return o(n) && (n = n[e]), n.apply(t, s)
                }
                return {
                    invoke: r,
                    instantiate: function(n, t) {
                        var i = function() {},
                            u;
                        return i.prototype = (o(n) ? n[n.length - 1] : n).prototype, i = new i, u = r(n, i, t), a(u) || h(u) ? u : i
                    },
                    get: i,
                    annotate: re,
                    has: function(t) {
                        return u.hasOwnProperty(t + c) || n.hasOwnProperty(t)
                    }
                }
            }
            var y = {},
                c = "Provider",
                l = [],
                d = new ir([], !0),
                u = {
                    $provide: {
                        provider: i(w),
                        factory: i(v),
                        service: i(function(n, t) {
                            return v(n, ["$injector", function(n) {
                                return n.instantiate(t)
                            }])
                        }),
                        value: i(function(n, t) {
                            return v(n, nt(t))
                        }),
                        constant: i(function(n, t) {
                            ri(n, "constant");
                            u[n] = t;
                            p[n] = t
                        }),
                        decorator: function(n, i) {
                            var r = t.get(n + c),
                                u = r.$get;
                            r.$get = function() {
                                var n = f.invoke(u, r);
                                return f.invoke(i, null, {
                                    $delegate: n
                                })
                            }
                        }
                    }
                },
                t = u.$injector = k(u, function() {
                    throw cr("unpr", l.join(" <- "));
                }),
                p = {},
                f = p.$injector = k(p, function(n) {
                    return n = t.get(n + c), f.invoke(n.$get, n)
                });
            return r(b(n), function(n) {
                f.invoke(n || s)
            }), f
        }

        function ss() {
            var n = !0;
            this.disableAutoScrolling = function() {
                n = !1
            };
            this.$get = ["$window", "$location", "$rootScope", function(t, i, u) {
                function o(n) {
                    var t = null;
                    return r(n, function(n) {
                        t || "a" !== v(n.nodeName) || (t = n)
                    }), t
                }

                function f() {
                    var n = i.hash(),
                        r;
                    n ? (r = e.getElementById(n)) ? r.scrollIntoView() : (r = o(e.getElementsByName(n))) ? r.scrollIntoView() : "top" === n && t.scrollTo(0, 0) : t.scrollTo(0, 0)
                }
                var e = t.document;
                return n && u.$watch(function() {
                    return i.hash()
                }, function() {
                    u.$evalAsync(f)
                }), f
            }]
        }

        function hs() {
            this.$get = ["$$rAF", "$timeout", function(n, t) {
                return n.supported ? function(t) {
                    return n(t)
                } : function(n) {
                    return t(n, 0, !1)
                }
            }]
        }

        function cs(n, t, f, o) {
            function nt(n) {
                try {
                    n.apply(null, dt.call(arguments, 1))
                } finally {
                    if (a--, 0 === a)
                        for (; k.length;) try {
                            k.pop()()
                        } catch (t) {
                            f.error(t)
                        }
                }
            }

            function ht(n, t) {
                (function i() {
                    r(d, function(n) {
                        n()
                    });
                    et = t(i, n)
                })()
            }

            function y() {
                v != h.url() && (v = h.url(), r(it, function(n) {
                    n(h.url())
                }))
            }
            var h = this,
                p = t[0],
                c = n.location,
                w = n.history,
                ft = n.setTimeout,
                ct = n.clearTimeout,
                b = {},
                a, k, d, et, it, rt;
            h.isMock = !1;
            a = 0;
            k = [];
            h.$$completeOutstandingRequest = nt;
            h.$$incOutstandingRequestCount = function() {
                a++
            };
            h.notifyWhenNoOutstandingRequests = function(n) {
                r(d, function(n) {
                    n()
                });
                0 === a ? n() : k.push(n)
            };
            d = [];
            h.addPollFn = function(n) {
                return l(et) && ht(100, ft), d.push(n), n
            };
            var v = c.href,
                tt = t.find("base"),
                ot = null;
            h.url = function(t, i) {
                var r, u;
                if (c !== n.location && (c = n.location), w !== n.history && (w = n.history), t) {
                    if (v != t) return r = v && ui(v) === ui(t), v = t, !r && o.history ? i ? w.replaceState(null, "", t) : (w.pushState(null, "", t), tt.attr("href", tt.attr("href"))) : (r || (ot = t), i) ? c.replace(t) : r ? (r = c, u = t.indexOf("#"), u = -1 === u ? "" : t.substr(u + 1), r.hash = u) : c.href = t, h
                } else return ot || c.href.replace(/%27/g, "'")
            };
            it = [];
            rt = !1;
            h.onUrlChange = function(t) {
                if (!rt) {
                    if (o.history) u(n).on("popstate", y);
                    if (o.hashchange) u(n).on("hashchange", y);
                    else h.addPollFn(y);
                    rt = !0
                }
                return it.push(t), t
            };
            h.$$checkUrlChange = y;
            h.baseHref = function() {
                var n = tt.attr("href");
                return n ? n.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
            var g = {},
                ut = "",
                st = h.baseHref();
            h.cookies = function(n, t) {
                var r, u, o, s;
                if (n) t === i ? p.cookie = escape(n) + "=;path=" + st + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : e(t) && (r = (p.cookie = escape(n) + "=" + escape(t) + ";path=" + st).length + 1, 4096 < r && f.warn("Cookie '" + n + "' possibly not set or overflowed because it was too large (" + r + " > 4096 bytes)!"));
                else {
                    if (p.cookie !== ut)
                        for (ut = p.cookie, r = ut.split("; "), g = {}, o = 0; o < r.length; o++) u = r[o], s = u.indexOf("="), 0 < s && (n = unescape(u.substring(0, s)), g[n] === i && (g[n] = unescape(u.substring(s + 1))));
                    return g
                }
            };
            h.defer = function(n, t) {
                var i;
                return a++, i = ft(function() {
                    delete b[i];
                    nt(n)
                }, t || 0), b[i] = !0, i
            };
            h.defer.cancel = function(n) {
                return b[n] ? (delete b[n], ct(n), nt(s), !0) : !1
            }
        }

        function ls() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(n, t, i, r) {
                return new cs(n, r, t, i)
            }]
        }

        function as() {
            this.$get = function() {
                function t(t, i) {
                    function a(n) {
                        n != f && (r ? r == n && (r = n.n) : r = n, h(n.n, n.p), h(n, f), f = n, f.n = null)
                    }

                    function h(n, t) {
                        n != t && (n && (n.p = t), t && (t.n = n))
                    }
                    if (t in n) throw p("$cacheFactory")("iid", t);
                    var o = 0,
                        v = c({}, i, {
                            id: t
                        }),
                        e = {},
                        s = i && i.capacity || Number.MAX_VALUE,
                        u = {},
                        f = null,
                        r = null;
                    return n[t] = {
                        put: function(n, t) {
                            if (s < Number.MAX_VALUE) {
                                var i = u[n] || (u[n] = {
                                    key: n
                                });
                                a(i)
                            }
                            if (!l(t)) return n in e || o++, e[n] = t, o > s && this.remove(r.key), t
                        },
                        get: function(n) {
                            if (s < Number.MAX_VALUE) {
                                var t = u[n];
                                if (!t) return;
                                a(t)
                            }
                            return e[n]
                        },
                        remove: function(n) {
                            if (s < Number.MAX_VALUE) {
                                var t = u[n];
                                if (!t) return;
                                t == f && (f = t.p);
                                t == r && (r = t.n);
                                h(t.n, t.p);
                                delete u[n]
                            }
                            delete e[n];
                            o--
                        },
                        removeAll: function() {
                            e = {};
                            o = 0;
                            u = {};
                            f = r = null
                        },
                        destroy: function() {
                            u = v = e = null;
                            delete n[t]
                        },
                        info: function() {
                            return c({}, v, {
                                size: o
                            })
                        }
                    }
                }
                var n = {};
                return t.info = function() {
                    var t = {};
                    return r(n, function(n, i) {
                        t[i] = n.info()
                    }), t
                }, t.get = function(t) {
                    return n[t]
                }, t
            }
        }

        function vs() {
            this.$get = ["$cacheFactory", function(n) {
                return n("templates")
            }]
        }

        function fe(n, s) {
            var l = {},
                v = "Directive",
                p = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
                w = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
                b = /^(on[a-z]+|formaction)$/;
            this.directive = function k(t, i) {
                return ri(t, "directive"), e(t) ? (au(i, "directiveFactory"), l.hasOwnProperty(t) || (l[t] = [], n.factory(t + v, ["$injector", "$exceptionHandler", function(n, i) {
                    var u = [];
                    return r(l[t], function(r, f) {
                        try {
                            var e = n.invoke(r);
                            h(e) ? e = {
                                compile: nt(e)
                            } : !e.compile && e.link && (e.compile = nt(e.link));
                            e.priority = e.priority || 0;
                            e.index = f;
                            e.name = e.name || t;
                            e.require = e.require || e.controller && e.name;
                            e.restrict = e.restrict || "A";
                            u.push(e)
                        } catch (o) {
                            i(o)
                        }
                    }), u
                }])), l[t].push(i)) : r(t, af(k)), this
            };
            this.aHrefSanitizationWhitelist = function(n) {
                return f(n) ? (s.aHrefSanitizationWhitelist(n), this) : s.aHrefSanitizationWhitelist()
            };
            this.imgSrcSanitizationWhitelist = function(n) {
                return f(n) ? (s.imgSrcSanitizationWhitelist(n), this) : s.imgSrcSanitizationWhitelist()
            };
            this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(n, f, s, k, d, nt, tt, it, rt, ot, st, ct) {
                function bt(n, t, i, f, e) {
                    n instanceof u || (n = u(n));
                    r(n, function(t, i) {
                        3 == t.nodeType && t.nodeValue.match(/\S+/) && (n[i] = u(t).wrap("<span><\/span>").parent()[0])
                    });
                    var o = kt(n, t, n, i, f, e);
                    return lt(n, "ng-scope"),
                        function(t, i, u, f) {
                            var e, h, s;
                            for (au(t, "scope"), e = i ? oi.clone.call(n) : n, r(u, function(n, t) {
                                    e.data("$" + t + "Controller", n)
                                }), u = 0, h = e.length; u < h; u++) s = e[u].nodeType, 1 !== s && 9 !== s || e.eq(u).data("$scope", t);
                            return i && i(e, t), o && o(t, e, e, f), e
                        }
                }

                function lt(n, t) {
                    try {
                        n.addClass(t)
                    } catch (i) {}
                }

                function kt(n, t, r, f, e, o) {
                    function y(n, r, f, e) {
                        var s, h, l, o, y, a, p, v;
                        for (s = r.length, v = Array(s), o = 0; o < s; o++) v[o] = r[o];
                        for (a = o = 0, y = c.length; o < y; a++) h = v[a], r = c[o++], s = c[o++], r ? (r.scope ? (l = n.$new(), u.data(h, "$scope", l)) : l = n, p = r.transcludeOnThisElement ? yt(n, r.transclude, e) : !r.templateOnThisElement && e ? e : !e && t ? yt(n, t) : null, r(s, l, h, f, p)) : s && s(n, h.childNodes, i, e)
                    }
                    for (var c = [], s, l, a, v, h = 0; h < n.length; h++) s = new ni, l = gt(n[h], [], s, 0 === h ? f : i, e), (o = l.length ? ui(l, n[h], s, t, r, null, [], [], o) : null) && o.scope && lt(s.$$element, "ng-scope"), s = o && o.terminal || !(a = n[h].childNodes) || !a.length ? null : kt(a, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : t), c.push(o, s), v = v || o || s, o = null;
                    return v ? y : null
                }

                function yt(n, t, i) {
                    return function(r, u, f) {
                        var e = !1;
                        if (r || (r = n.$new(), e = r.$$transcluded = !0), u = t(r, u, f, i), e) u.on("$destroy", function() {
                            r.$destroy()
                        });
                        return u
                    }
                }

                function gt(n, t, i, r, u) {
                    var k = i.$attr,
                        o, l, a, b;
                    switch (n.nodeType) {
                        case 1:
                            pt(t, at(yi(n).toLowerCase()), "E", r, u);
                            for (var f, s, v, h = n.attributes, c = 0, d = h && h.length; c < d; c++) l = !1, a = !1, f = h[c], (!y || 8 <= y || f.specified) && (o = f.name, s = g(f.value), f = at(o), (v = ki.test(f)) && (o = br(f.substr(6), "-")), b = f.replace(/(Start|End)$/, ""), f === b + "Start" && (l = o, a = o.substr(0, o.length - 5) + "end", o = o.substr(0, o.length - 6)), f = at(o.toLowerCase()), k[f] = o, (v || !i.hasOwnProperty(f)) && (i[f] = s, ie(n, f) && (i[f] = !0)), bi(n, t, s, f), pt(t, f, "A", r, u, l, a));
                            if (n = n.className, e(n) && "" !== n)
                                for (; o = w.exec(n);) f = at(o[2]), pt(t, f, "C", r, u) && (i[f] = g(o[3])), n = n.substr(o.index + o[0].length);
                            break;
                        case 3:
                            if (11 === y)
                                for (; n.parentNode && n.nextSibling && 3 === n.nextSibling.nodeType;) n.nodeValue += n.nextSibling.nodeValue, n.parentNode.removeChild(n.nextSibling);
                            pi(t, n.nodeValue);
                            break;
                        case 8:
                            try {
                                (o = p.exec(n.nodeValue)) && (f = at(o[1]), pt(t, f, "M", r, u) && (i[f] = g(o[2])))
                            } catch (nt) {}
                    }
                    return t.sort(vi), t
                }

                function ii(n, t, i) {
                    var r = [],
                        f = 0;
                    if (t && n.hasAttribute && n.hasAttribute(t)) {
                        do {
                            if (!n) throw ht("uterdir", t, i);
                            1 == n.nodeType && (n.hasAttribute(t) && f++, n.hasAttribute(i) && f--);
                            r.push(n);
                            n = n.nextSibling
                        } while (0 < f)
                    } else r.push(n);
                    return u(r)
                }

                function ri(n, t, i) {
                    return function(r, u, f, e, o) {
                        return u = ii(u[0], t, i), n(r, u, f, e, o)
                    }
                }

                function ui(n, c, l, v, y, p, w, b, k) {
                    function di(n, t, i, r) {
                        n && (i && (n = ri(n, i, r)), n.require = d.require, n.directiveName = ot, (rt === d || d.$$isolateScope) && (n = si(n, {
                            isolateScope: !0
                        })), w.push(n));
                        t && (i && (t = ri(t, i, r)), t.require = d.require, t.directiveName = ot, (rt === d || d.$$isolateScope) && (t = si(t, {
                            isolateScope: !0
                        })), b.push(t))
                    }

                    function wi(n, t, i, u) {
                        var f, s = "data",
                            h = !1;
                        if (e(t)) {
                            for (;
                                "^" == (f = t.charAt(0)) || "?" == f;) t = t.substr(1), "^" == f && (s = "inheritedData"), h = h || "?" == f;
                            if (f = null, u && "data" === s && (f = u[t]), f = f || i[s]("$" + t + "Controller"), !f && !h) throw ht("ctreq", t, n);
                        } else o(t) && (f = [], r(t, function(t) {
                            f.push(wi(n, t, i, u))
                        }));
                        return f
                    }

                    function ct(n, t, e, o, h) {
                        function ot(n, t) {
                            var r;
                            return 2 > arguments.length && (t = n, n = i), yi && (r = d), h(n, t, r)
                        }
                        var v, y, it, p, k, a, d = {},
                            g, ut;
                        for (v = c === e ? l : ft(l, new ni(u(e), l.$attr)), y = v.$$element, rt && (ut = /^\s*([@=&])(\??)\s*(\w*)\s*$/, a = t.$new(!0), !st || st !== rt && st !== rt.$$originalDirective ? y.data("$isolateScopeNoTemplate", a) : y.data("$isolateScope", a), lt(y, "ng-isolate-scope"), r(rt.scope, function(n, i) {
                                var e = n.match(ut) || [],
                                    r = e[3] || i,
                                    c = "?" == e[2],
                                    e = e[1],
                                    o, u, h, s;
                                a.$$isolateBindings[i] = e + r;
                                switch (e) {
                                    case "@":
                                        v.$observe(r, function(n) {
                                            a[i] = n
                                        });
                                        v.$$observers[r].$$scope = t;
                                        v[r] && (a[i] = f(v[r])(t));
                                        break;
                                    case "=":
                                        if (c && !v[r]) break;
                                        u = nt(v[r]);
                                        s = u.literal ? ti : function(n, t) {
                                            return n === t || n !== n && t !== t
                                        };
                                        h = u.assign || function() {
                                            o = a[i] = u(t);
                                            throw ht("nonassign", v[r], rt.name);
                                        };
                                        o = a[i] = u(t);
                                        a.$watch(function() {
                                            var n = u(t);
                                            return s(n, a[i]) || (s(n, o) ? h(t, n = a[i]) : a[i] = n), o = n
                                        }, null, u.literal);
                                        break;
                                    case "&":
                                        u = nt(v[r]);
                                        a[i] = function(n) {
                                            return u(t, n)
                                        };
                                        break;
                                    default:
                                        throw ht("iscp", rt.name, i, n);
                                }
                            })), g = h && ot, at && r(at, function(n) {
                                var r = {
                                        $scope: n === rt || n.$$isolateScope ? a : t,
                                        $element: y,
                                        $attrs: v,
                                        $transclude: g
                                    },
                                    i;
                                k = n.controller;
                                "@" == k && (k = v[n.name]);
                                i = tt(k, r);
                                d[n.name] = i;
                                yi || y.data("$" + n.name + "Controller", i);
                                n.controllerAs && (r.$scope[n.controllerAs] = i)
                            }), o = 0, it = w.length; o < it; o++) try {
                            p = w[o];
                            p(p.isolateScope ? a : t, y, v, p.require && wi(p.directiveName, p.require, y, d), g)
                        } catch (ct) {
                            s(ct, et(y))
                        }
                        for (o = t, rt && (rt.template || null === rt.templateUrl) && (o = a), n && n(o, e.childNodes, i, h), o = b.length - 1; 0 <= o; o--) try {
                            p = b[o];
                            p(p.isolateScope ? a : t, y, v, p.require && wi(p.directiveName, p.require, y, d), g)
                        } catch (vt) {
                            s(vt, et(y))
                        }
                    }
                    var hi, pi, gi;
                    k = k || {};
                    for (var ui = -Number.MAX_VALUE, ci, at = k.controllerDirectives, rt = k.newIsolateScopeDirective, st = k.templateDirective, vi = k.nonTlbTranscludeDirective, bi = !1, ki = !1, yi = k.hasElementTranscludeDirective, ut = l.$$element = u(c), d, ot, it, oi = v, pt, yt = 0, kt = n.length; yt < kt; yt++) {
                        if (d = n[yt], hi = d.$$start, pi = d.$$end, hi && (ut = ii(c, hi, pi)), it = i, ui > d.priority) break;
                        if ((it = d.scope) && (ci = ci || d, d.templateUrl || (vt("new/isolated scope", rt, d, ut), a(it) && (rt = d))), ot = d.name, !d.templateUrl && d.controller && (it = d.controller, at = at || {}, vt("'" + ot + "' controller", at[ot], d, ut), at[ot] = d), (it = d.transclude) && (bi = !0, d.$$tlb || (vt("transclusion", vi, d, ut), vi = d), "element" == it ? (yi = !0, ui = d.priority, it = ut, ut = l.$$element = u(t.createComment(" " + ot + ": " + l[ot] + " ")), c = ut[0], wt(y, dt.call(it, 0), c), oi = bt(it, v, ui, p && p.name, {
                                nonTlbTranscludeDirective: vi
                            })) : (it = u(pu(c)).contents(), ut.empty(), oi = bt(it, v))), d.template)
                            if (ki = !0, vt("template", st, d, ut), st = d, it = h(d.template) ? d.template(ut, l) : d.template, it = li(it), d.replace) {
                                if (p = d, it = of .test(it) ? u(g(it)) : [], c = it[0], 1 != it.length || 1 !== c.nodeType) throw ht("tplrt", ot, "");
                                wt(y, ut, c);
                                kt = {
                                    $attr: {}
                                };
                                it = gt(c, [], kt);
                                gi = n.splice(yt + 1, n.length - (yt + 1));
                                rt && fi(it);
                                n = n.concat(it).concat(gi);
                                ei(l, kt);
                                kt = n.length
                            } else ut.html(it);
                        if (d.templateUrl) ki = !0, vt("template", st, d, ut), st = d, d.replace && (p = d), ct = ai(n.splice(yt, n.length - yt), ut, l, y, bi && oi, w, b, {
                            controllerDirectives: at,
                            newIsolateScopeDirective: rt,
                            templateDirective: st,
                            nonTlbTranscludeDirective: vi
                        }), kt = n.length;
                        else if (d.compile) try {
                            pt = d.compile(ut, l, oi);
                            h(pt) ? di(null, pt, hi, pi) : pt && di(pt.pre, pt.post, hi, pi)
                        } catch (nr) {
                            s(nr, et(ut))
                        }
                        d.terminal && (ct.terminal = !0, ui = Math.max(ui, d.priority))
                    }
                    return ct.scope = ci && !0 === ci.scope, ct.transcludeOnThisElement = bi, ct.templateOnThisElement = ki, ct.transclude = oi, k.hasElementTranscludeDirective = yi, ct
                }

                function fi(n) {
                    for (var t = 0, i = n.length; t < i; t++) n[t] = yf(n[t], {
                        $$isolateScope: !0
                    })
                }

                function pt(t, r, u, f, e, o, h) {
                    var c, a, y;
                    if (r === e) return null;
                    if (e = null, l.hasOwnProperty(r))
                        for (r = n.get(r + v), a = 0, y = r.length; a < y; a++) try {
                            c = r[a];
                            (f === i || f > c.priority) && -1 != c.restrict.indexOf(u) && (o && (c = yf(c, {
                                $$start: o,
                                $$end: h
                            })), t.push(c), e = c)
                        } catch (p) {
                            s(p)
                        }
                    return e
                }

                function ei(n, t) {
                    var u = t.$attr,
                        f = n.$attr,
                        i = n.$$element;
                    r(n, function(i, r) {
                        "$" != r.charAt(0) && (t[r] && t[r] !== i && (i += ("style" === r ? ";" : " ") + t[r]), n.$set(r, i, !0, u[r]))
                    });
                    r(t, function(t, r) {
                        "class" == r ? (lt(i, t), n["class"] = (n["class"] ? n["class"] + " " : "") + t) : "style" == r ? (i.attr("style", i.attr("style") + ";" + t), n.style = (n.style ? n.style + ";" : "") + t) : "$" == r.charAt(0) || n.hasOwnProperty(r) || (n[r] = t, f[r] = u[r])
                    })
                }

                function ai(n, t, i, f, e, o, s, l) {
                    var v = [],
                        p, w, b = t[0],
                        y = n.shift(),
                        tt = c({}, y, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: y
                        }),
                        nt = h(y.templateUrl) ? y.templateUrl(t, i) : y.templateUrl;
                    return t.empty(), k.get(ot.getTrustedResourceUrl(nt), {
                            cache: d
                        }).success(function(h) {
                            var c, d, k, rt;
                            if (h = li(h), y.replace) {
                                if (h = of .test(h) ? u(g(h)) : [], c = h[0], 1 != h.length || 1 !== c.nodeType) throw ht("tplrt", y.name, nt);
                                h = {
                                    $attr: {}
                                };
                                wt(f, t, c);
                                k = gt(c, [], h);
                                a(y.scope) && fi(k);
                                n = k.concat(n);
                                ei(i, h)
                            } else c = b, t.html(h);
                            for (n.unshift(tt), p = ui(n, c, i, e, t, y, o, s, l), r(f, function(n, i) {
                                    n == c && (f[i] = t[0])
                                }), w = kt(t[0].childNodes, e); v.length;) {
                                h = v.shift();
                                d = v.shift();
                                var ut = v.shift(),
                                    it = v.shift(),
                                    k = t[0];
                                d !== b && (rt = d.className, l.hasElementTranscludeDirective && y.replace || (k = pu(c)), wt(ut, u(d), k), lt(u(k), rt));
                                d = p.transcludeOnThisElement ? yt(h, p.transclude, it) : it;
                                p(w, h, k, f, d)
                            }
                            v = null
                        }).error(function(n, t, i, r) {
                            throw ht("tpload", r.url);
                        }),
                        function(n, t, i, r, u) {
                            n = u;
                            v ? (v.push(t), v.push(i), v.push(r), v.push(n)) : (p.transcludeOnThisElement && (n = yt(t, p.transclude, u)), p(w, t, i, r, n))
                        }
                }

                function vi(n, t) {
                    var i = t.priority - n.priority;
                    return 0 !== i ? i : n.name !== t.name ? n.name < t.name ? -1 : 1 : n.index - t.index
                }

                function vt(n, t, i, r) {
                    if (t) throw ht("multidir", t.name, i.name, n, et(r));
                }

                function pi(n, t) {
                    var i = f(t, !0);
                    i && n.push({
                        priority: 0,
                        compile: function(n) {
                            var t = n.parent().length;
                            return t && lt(n.parent(), "ng-binding"),
                                function(n, r) {
                                    var u = r.parent(),
                                        f = u.data("$binding") || [];
                                    f.push(i);
                                    u.data("$binding", f);
                                    t || lt(u, "ng-binding");
                                    n.$watch(i, function(n) {
                                        r[0].nodeValue = n
                                    })
                                }
                        }
                    })
                }

                function wi(n, t) {
                    if ("srcdoc" == t) return ot.HTML;
                    var i = yi(n);
                    if ("xlinkHref" == t || "FORM" == i && "action" == t || "LINK" == i && "href" == t || "IMG" != i && ("src" == t || "ngSrc" == t)) return ot.RESOURCE_URL
                }

                function bi(n, t, i, r) {
                    var u = f(i, !0);
                    if (u) {
                        if ("multiple" === r && "SELECT" === yi(n)) throw ht("selmulti", et(n));
                        t.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(t, i, e) {
                                        if (i = e.$$observers || (e.$$observers = {}), b.test(r)) throw ht("nodomevents");
                                        (u = f(e[r], !0, wi(n, r))) && (e[r] = u(t), (i[r] || (i[r] = [])).$$inter = !0, (e.$$observers && e.$$observers[r].$$scope || t).$watch(u, function(n, t) {
                                            "class" === r && n != t ? e.$updateClass(n, t) : e.$set(r, n)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function wt(n, i, r) {
                    var f = i[0],
                        h = i.length,
                        s = f.parentNode,
                        e, o, c;
                    if (n)
                        for (e = 0, o = n.length; e < o; e++)
                            if (n[e] == f) {
                                for (n[e++] = r, o = e + h - 1, c = n.length; e < c; e++, o++) o < c ? n[e] = n[o] : delete n[e];
                                n.length -= h - 1;
                                break
                            }
                    for (s && s.replaceChild(r, f), n = t.createDocumentFragment(), n.appendChild(f), r[u.expando] = f[u.expando], f = 1, h = i.length; f < h; f++) s = i[f], u(s).remove(), n.appendChild(s), delete i[f];
                    i[0] = r;
                    i.length = 1
                }

                function si(n, t) {
                    return c(function() {
                        return n.apply(null, arguments)
                    }, n, t)
                }
                var ni = function(n, t) {
                    this.$$element = n;
                    this.$attr = t || {}
                };
                ni.prototype = {
                    $normalize: at,
                    $addClass: function(n) {
                        n && 0 < n.length && st.addClass(this.$$element, n)
                    },
                    $removeClass: function(n) {
                        n && 0 < n.length && st.removeClass(this.$$element, n)
                    },
                    $updateClass: function(n, t) {
                        var i = ee(n, t),
                            r = ee(t, n);
                        0 === i.length ? st.removeClass(this.$$element, r) : 0 === r.length ? st.addClass(this.$$element, i) : st.setClass(this.$$element, i, r)
                    },
                    $set: function(n, t, u, f) {
                        var e = ie(this.$$element[0], n);
                        e && (this.$$element.prop(n, t), f = e);
                        this[n] = t;
                        f ? this.$attr[n] = f : (f = this.$attr[n]) || (this.$attr[n] = f = br(n, "-"));
                        e = yi(this.$$element).toUpperCase();
                        ("A" === e && ("href" === n || "xlinkHref" === n) || "IMG" === e && "src" === n) && (this[n] = t = ct(t, "src" === n));
                        !1 !== u && (null === t || t === i ? this.$$element.removeAttr(f) : this.$$element.attr(f, t));
                        (u = this.$$observers) && r(u[n], function(n) {
                            try {
                                n(t)
                            } catch (i) {
                                s(i)
                            }
                        })
                    },
                    $observe: function(n, t) {
                        var i = this,
                            r = i.$$observers || (i.$$observers = {}),
                            u = r[n] || (r[n] = []);
                        return u.push(t), it.$evalAsync(function() {
                            u.$$inter || t(i[n])
                        }), t
                    }
                };
                var hi = f.startSymbol(),
                    ci = f.endSymbol(),
                    li = "{{" == hi || "}}" == ci ? ut : function(n) {
                        return n.replace(/\{\{/g, hi).replace(/}}/g, ci)
                    },
                    ki = /^ngAttr[A-Z]/;
                return bt
            }]
        }

        function at(n) {
            return tr(n.replace(kc, ""))
        }

        function ee(n, t) {
            var r = "",
                e = n.split(/\s+/),
                o = t.split(/\s+/),
                u = 0,
                f, i;
            n: for (; u < e.length; u++) {
                for (f = e[u], i = 0; i < o.length; i++)
                    if (f == o[i]) continue n;
                r += (0 < r.length ? " " : "") + f
            }
            return r
        }

        function ys() {
            var n = {},
                t = /^(\S+)(\s+as\s+(\w+))?$/;
            this.register = function(t, i) {
                ri(t, "controller");
                a(t) ? c(n, t) : n[t] = i
            };
            this.$get = ["$injector", "$window", function(i, r) {
                return function(u, f) {
                    var s, o, h;
                    if (e(u) && (s = u.match(t), o = s[1], h = s[3], u = n.hasOwnProperty(o) ? n[o] : df(f.$scope, o, !0) || df(r, o, !0), nr(u, o, !0)), s = i.instantiate(u, f), h) {
                        if (!f || "object" != typeof f.$scope) throw p("$controller")("noscp", o || u.name, h);
                        f.$scope[h] = s
                    }
                    return s
                }
            }]
        }

        function ps() {
            this.$get = ["$window", function(n) {
                return u(n.document)
            }]
        }

        function ws() {
            this.$get = ["$log", function(n) {
                return function() {
                    n.error.apply(n, arguments)
                }
            }]
        }

        function oe(n) {
            var t = {},
                i, u, f;
            return n ? (r(n.split("\n"), function(n) {
                f = n.indexOf(":");
                i = v(g(n.substr(0, f)));
                u = g(n.substr(f + 1));
                i && (t[i] = t[i] ? t[i] + ", " + u : u)
            }), t) : t
        }

        function se(n) {
            var t = a(n) ? n : i;
            return function(i) {
                return t || (t = oe(n)), i ? t[v(i)] || null : t
            }
        }

        function he(n, t, i) {
            return h(i) ? i(n, t) : (r(i, function(i) {
                n = i(n, t)
            }), n)
        }

        function bs() {
            var u = /^\s*(\[|\{[^\{])/,
                s = /[\}\]]\s*$/,
                y = /^\)\]\}',?\n/,
                t = {
                    "Content-Type": "application/json;charset=utf-8"
                },
                n = this.defaults = {
                    transformResponse: [function(n) {
                        return e(n) && (n = n.replace(y, ""), u.test(n) && s.test(n) && (n = pf(n))), n
                    }],
                    transformRequest: [function(n) {
                        return a(n) && "[object File]" !== ei.call(n) && "[object Blob]" !== ei.call(n) ? ct(n) : n
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: ft(t),
                        put: ft(t),
                        patch: ft(t)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN"
                },
                p = this.interceptors = [],
                w = this.responseInterceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(t, u, s, y, b, k) {
                function d(t) {
                    function s(n) {
                        var t = c({}, n, {
                            data: he(n.data, n.headers, f.transformResponse)
                        });
                        return 200 <= n.status && 300 > n.status ? t : b.reject(t)
                    }
                    var f = {
                            method: "get",
                            transformRequest: n.transformRequest,
                            transformResponse: n.transformResponse
                        },
                        e = function(t) {
                            var i = n.headers,
                                u = c({}, t.headers),
                                f, e, i = c({}, i.common, i[v(t.method)]);
                            n: for (f in i) {
                                t = v(f);
                                for (e in u)
                                    if (v(e) === t) continue n;
                                u[f] = i[f]
                            }
                            return function(n) {
                                var t;
                                r(n, function(i, r) {
                                    h(i) && (t = i(), null != t ? n[r] = t : delete n[r])
                                })
                            }(u), u
                        }(t),
                        o, a, u;
                    for (c(f, t), f.headers = e, f.method = vi(f.method), o = [function(t) {
                            e = t.headers;
                            var i = he(t.data, se(e), t.transformRequest);
                            return l(i) && r(e, function(n, t) {
                                "content-type" === v(t) && delete e[t]
                            }), l(t.withCredentials) && !l(n.withCredentials) && (t.withCredentials = n.withCredentials), nt(t, i, e).then(s, s)
                        }, i], u = b.when(f), r(g, function(n) {
                            (n.request || n.requestError) && o.unshift(n.request, n.requestError);
                            (n.response || n.responseError) && o.push(n.response, n.responseError)
                        }); o.length;) t = o.shift(), a = o.shift(), u = u.then(t, a);
                    return u.success = function(n) {
                        return u.then(function(t) {
                            n(t.data, t.status, t.headers, f)
                        }), u
                    }, u.error = function(n) {
                        return u.then(null, function(t) {
                            n(t.data, t.status, t.headers, f)
                        }), u
                    }, u
                }

                function nt(r, e, s) {
                    function rt(n, t, i, r) {
                        v && (200 <= n && 300 > n ? v.put(p, [n, t, oe(i), r]) : v.remove(p));
                        k(t, n, i, r);
                        y.$$phase || y.$apply()
                    }

                    function k(n, t, i, u) {
                        t = Math.max(t, 0);
                        (200 <= t && 300 > t ? g.resolve : g.reject)({
                            data: n,
                            status: t,
                            headers: se(i),
                            config: r,
                            statusText: u
                        })
                    }

                    function w() {
                        var n = ki(d.pendingRequests, r); - 1 !== n && d.pendingRequests.splice(n, 1)
                    }
                    var g = b.defer(),
                        nt = g.promise,
                        v, c, p = tt(r.url, r.params);
                    if (d.pendingRequests.push(r), nt.then(w, w), (r.cache || n.cache) && !1 !== r.cache && ("GET" === r.method || "JSONP" === r.method) && (v = a(r.cache) ? r.cache : a(n.cache) ? n.cache : it), v)
                        if (c = v.get(p), f(c)) {
                            if (c && h(c.then)) return c.then(w, w), c;
                            o(c) ? k(c[1], c[0], ft(c[2]), c[3]) : k(c, 200, {}, "OK")
                        } else v.put(p, nt);
                    return l(c) && ((c = rf(r.url) ? u.cookies()[r.xsrfCookieName || n.xsrfCookieName] : i) && (s[r.xsrfHeaderName || n.xsrfHeaderName] = c), t(r.method, p, e, rt, s, r.timeout, r.withCredentials, r.responseType)), nt
                }

                function tt(n, t) {
                    if (!t) return n;
                    var i = [];
                    return ns(t, function(n, t) {
                        null === n || l(n) || (o(n) || (n = [n]), r(n, function(n) {
                            a(n) && (n = wt(n) ? n.toISOString() : ct(n));
                            i.push(ii(t) + "=" + ii(n))
                        }))
                    }), 0 < i.length && (n += (-1 == n.indexOf("?") ? "?" : "&") + i.join("&")), n
                }
                var it = s("$http"),
                    g = [];
                return r(p, function(n) {
                        g.unshift(e(n) ? k.get(n) : k.invoke(n))
                    }), r(w, function(n, t) {
                        var i = e(n) ? k.get(n) : k.invoke(n);
                        g.splice(t, 0, {
                            response: function(n) {
                                return i(b.when(n))
                            },
                            responseError: function(n) {
                                return i(b.reject(n))
                            }
                        })
                    }), d.pendingRequests = [],
                    function() {
                        r(arguments, function(n) {
                            d[n] = function(t, i) {
                                return d(c(i || {}, {
                                    method: n,
                                    url: t
                                }))
                            }
                        })
                    }("get", "delete", "head", "jsonp"),
                    function() {
                        r(arguments, function(n) {
                            d[n] = function(t, i, r) {
                                return d(c(r || {}, {
                                    method: n,
                                    url: t,
                                    data: i
                                }))
                            }
                        })
                    }("post", "put", "patch"), d.defaults = n, d
            }]
        }

        function ks(t) {
            if (8 >= y && (!t.match(/^(get|post|head|put|delete|options)$/i) || !n.XMLHttpRequest)) return new n.ActiveXObject("Microsoft.XMLHTTP");
            if (n.XMLHttpRequest) return new n.XMLHttpRequest;
            throw p("$httpBackend")("noxhr");
        }

        function ds() {
            this.$get = ["$browser", "$window", "$document", function(n, t, i) {
                return gs(n, ks, n.defer, t.angular.callbacks, i[0])
            }]
        }

        function gs(n, t, i, u, o) {
            function l(n, t, i) {
                var r = o.createElement("script"),
                    f = null;
                return r.type = "text/javascript", r.src = n, r.async = !0, f = function(n) {
                    sr(r, "load", f);
                    sr(r, "error", f);
                    o.body.removeChild(r);
                    r = null;
                    var e = -1,
                        s = "unknown";
                    n && ("load" !== n.type || u[t].called || (n = {
                        type: "error"
                    }), s = n.type, e = "error" === n.type ? 404 : 200);
                    i && i(e, s)
                }, fu(r, "load", f), fu(r, "error", f), 8 >= y && (r.onreadystatechange = function() {
                    e(r.readyState) && /loaded|complete/.test(r.readyState) && (r.onreadystatechange = null, f({
                        type: "load"
                    }))
                }), o.body.appendChild(r), f
            }
            var c = -1;
            return function(e, o, a, p, w, b, k, d) {
                function ut() {
                    tt = c;
                    it && it();
                    g && g.abort()
                }

                function ft(t, r, u, f, e) {
                    rt && i.cancel(rt);
                    it = g = null;
                    0 === r && (r = u ? 200 : "file" == bt(o).protocol ? 404 : 0);
                    t(1223 === r ? 204 : r, u, f, e || "");
                    n.$$completeOutstandingRequest(s)
                }
                var tt, nt, it, g, rt;
                if (n.$$incOutstandingRequestCount(), o = o || n.url(), "jsonp" == v(e)) nt = "_" + (u.counter++).toString(36), u[nt] = function(n) {
                    u[nt].data = n;
                    u[nt].called = !0
                }, it = l(o.replace("JSON_CALLBACK", "angular.callbacks." + nt), nt, function(n, t) {
                    ft(p, n, u[nt].data, "", t);
                    u[nt] = s
                });
                else {
                    if (g = t(e), g.open(e, o, !0), r(w, function(n, t) {
                            f(n) && g.setRequestHeader(t, n)
                        }), g.onreadystatechange = function() {
                            if (g && 4 == g.readyState) {
                                var n = null,
                                    t = null,
                                    i = "";
                                tt !== c && (n = g.getAllResponseHeaders(), t = "response" in g ? g.response : g.responseText);
                                tt === c && 10 > y || (i = g.statusText);
                                ft(p, tt || g.status, t, n, i)
                            }
                        }, k && (g.withCredentials = !0), d) try {
                        g.responseType = d
                    } catch (et) {
                        if ("json" !== d) throw et;
                    }
                    g.send(a || null)
                }
                0 < b ? rt = i(ut, b) : b && h(b.then) && b.then(ut)
            }
        }

        function nh() {
            var n = "{{",
                t = "}}";
            this.startSymbol = function(t) {
                return t ? (n = t, this) : n
            };
            this.endSymbol = function(n) {
                return n ? (t = n, this) : t
            };
            this.$get = ["$parse", "$exceptionHandler", "$sce", function(i, r, u) {
                function f(f, s, h) {
                    for (var v, p, c = 0, l = [], a = f.length, y = !1, w = []; c < a;) - 1 != (v = f.indexOf(n, c)) && -1 != (p = f.indexOf(t, v + e)) ? (c != v && l.push(f.substring(c, v)), l.push(c = i(y = f.substring(v + e, p))), c.exp = y, c = p + o, y = !0) : (c != a && l.push(f.substring(c)), c = a);
                    if ((a = l.length) || (l.push(""), a = 1), h && 1 < l.length) throw oo("noconcat", f);
                    if (!s || y) return w.length = a, c = function(n) {
                        try {
                            for (var i = 0, e = a, t; i < e; i++) {
                                if ("function" == typeof(t = l[i]))
                                    if (t = t(n), t = h ? u.getTrusted(h, t) : u.valueOf(t), null == t) t = "";
                                    else switch (typeof t) {
                                        case "string":
                                            break;
                                        case "number":
                                            t = "" + t;
                                            break;
                                        default:
                                            t = ct(t)
                                    }
                                w[i] = t
                            }
                            return w.join("")
                        } catch (o) {
                            n = oo("interr", f, o.toString());
                            r(n)
                        }
                    }, c.exp = f, c.parts = l, c
                }
                var e = n.length,
                    o = t.length;
                return f.startSymbol = function() {
                    return n
                }, f.endSymbol = function() {
                    return t
                }, f
            }]
        }

        function th() {
            this.$get = ["$rootScope", "$window", "$q", function(n, t, i) {
                function u(u, e, o, s) {
                    var a = t.setInterval,
                        v = t.clearInterval,
                        c = i.defer(),
                        h = c.promise,
                        l = 0,
                        y = f(s) && !s;
                    return o = f(o) ? o : 0, h.then(null, null, u), h.$$intervalId = a(function() {
                        c.notify(l++);
                        0 < o && l >= o && (c.resolve(l), v(h.$$intervalId), delete r[h.$$intervalId]);
                        y || n.$apply()
                    }, e), r[h.$$intervalId] = c, h
                }
                var r = {};
                return u.cancel = function(n) {
                    return n && n.$$intervalId in r ? (r[n.$$intervalId].reject("canceled"), t.clearInterval(n.$$intervalId), delete r[n.$$intervalId], !0) : !1
                }, u
            }]
        }

        function ih() {
            this.$get = function() {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "Â¤",
                            posSuf: "",
                            negPre: "(Â¤",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January February March April May June July August September October November December".split(" "),
                        SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                        DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                        SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        short: "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function(n) {
                        return 1 === n ? "one" : "other"
                    }
                }
            }
        }

        function gu(n) {
            n = n.split("/");
            for (var t = n.length; t--;) n[t] = wr(n[t]);
            return n.join("/")
        }

        function ce(n, t, i) {
            n = bt(n, i);
            t.$$protocol = n.protocol;
            t.$$host = n.hostname;
            t.$$port = b(n.port) || gc[n.protocol] || null
        }

        function le(n, t, i) {
            var r = "/" !== n.charAt(0);
            r && (n = "/" + n);
            n = bt(n, i);
            t.$$path = decodeURIComponent(r && "/" === n.pathname.charAt(0) ? n.pathname.substring(1) : n.pathname);
            t.$$search = bf(n.search);
            t.$$hash = decodeURIComponent(n.hash);
            t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
        }

        function vt(n, t) {
            if (0 === t.indexOf(n)) return t.substr(n.length)
        }

        function ui(n) {
            var t = n.indexOf("#");
            return -1 == t ? n : n.substr(0, t)
        }

        function ae(n) {
            return n.replace(/(#.+)|#$/, "$1")
        }

        function nf(n) {
            return n.substr(0, ui(n).lastIndexOf("/") + 1)
        }

        function ve(n, t) {
            this.$$html5 = !0;
            t = t || "";
            var r = nf(n);
            ce(n, this, n);
            this.$$parse = function(t) {
                var i = vt(r, t);
                if (!e(i)) throw hf("ipthprfx", t, r);
                le(i, this, n);
                this.$$path || (this.$$path = "/");
                this.$$compose()
            };
            this.$$compose = function() {
                var n = lu(this.$$search),
                    t = this.$$hash ? "#" + wr(this.$$hash) : "";
                this.$$url = gu(this.$$path) + (n ? "?" + n : "") + t;
                this.$$absUrl = r + this.$$url.substr(1)
            };
            this.$$parseLinkUrl = function(u) {
                var f, e;
                return (f = vt(n, u)) !== i ? (e = f, e = (f = vt(t, f)) !== i ? r + (vt("/", f) || f) : n + e) : (f = vt(r, u)) !== i ? e = r + f : r == u + "/" && (e = r), e && this.$$parse(e), !!e
            }
        }

        function tf(n, t) {
            var i = nf(n);
            ce(n, this, n);
            this.$$parse = function(r) {
                var u = vt(n, r) || vt(i, r),
                    u = "#" == u.charAt(0) ? vt(t, u) : this.$$html5 ? u : "",
                    f;
                if (!e(u)) throw hf("ihshprfx", r, t);
                le(u, this, n);
                r = this.$$path;
                f = /^\/[A-Z]:(\/.*)/;
                0 === u.indexOf(n) && (u = u.replace(n, ""));
                f.exec(u) || (r = (u = f.exec(r)) ? u[1] : r);
                this.$$path = r;
                this.$$compose()
            };
            this.$$compose = function() {
                var i = lu(this.$$search),
                    r = this.$$hash ? "#" + wr(this.$$hash) : "";
                this.$$url = gu(this.$$path) + (i ? "?" + i : "") + r;
                this.$$absUrl = n + (this.$$url ? t + this.$$url : "")
            };
            this.$$parseLinkUrl = function(t) {
                return ui(n) == ui(t) ? (this.$$parse(t), !0) : !1
            }
        }

        function ye(n, t) {
            this.$$html5 = !0;
            tf.apply(this, arguments);
            var i = nf(n);
            this.$$parseLinkUrl = function(r) {
                var u, f;
                return n == ui(r) ? u = r : (f = vt(i, r)) ? u = n + t + f : i === r + "/" && (u = i), u && this.$$parse(u), !!u
            };
            this.$$compose = function() {
                var i = lu(this.$$search),
                    r = this.$$hash ? "#" + wr(this.$$hash) : "";
                this.$$url = gu(this.$$path) + (i ? "?" + i : "") + r;
                this.$$absUrl = n + t + this.$$url
            }
        }

        function nu(n) {
            return function() {
                return this[n]
            }
        }

        function pe(n, t) {
            return function(i) {
                return l(i) ? this[n] : (this[n] = t(i), this.$$compose(), this)
            }
        }

        function rh() {
            var t = "",
                i = !1;
            this.hashPrefix = function(n) {
                return f(n) ? (t = n, this) : t
            };
            this.html5Mode = function(n) {
                return f(n) ? (i = n, this) : i
            };
            this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(r, f, e, o) {
                function y(n) {
                    r.$broadcast("$locationChangeSuccess", s.absUrl(), n)
                }
                var s, c = f.baseHref(),
                    h = f.url(),
                    p, l;
                i ? (c = h.substring(0, h.indexOf("/", h.indexOf("//") + 2)) + (c || "/"), e = e.history ? ve : ye) : (c = ui(h), e = tf);
                s = new e(c, "#" + t);
                s.$$parseLinkUrl(h, h);
                p = /^\s*(javascript|mailto):/i;
                o.on("click", function(t) {
                    var i, e, h;
                    if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
                        for (i = u(t.target);
                            "a" !== v(i[0].nodeName);)
                            if (i[0] === o[0] || !(i = i.parent())[0]) return;
                        e = i.prop("href");
                        h = i.attr("href") || i.attr("xlink:href");
                        a(e) && "[object SVGAnimatedString]" === e.toString() && (e = bt(e.animVal).href);
                        p.test(e) || !e || i.attr("target") || t.isDefaultPrevented() || !s.$$parseLinkUrl(e, h) || (t.preventDefault(), s.absUrl() != f.url() && (r.$apply(), n.angular["ff-684208-preventDefault"] = !0))
                    }
                });
                s.absUrl() != h && f.url(s.absUrl(), !0);
                f.onUrlChange(function(n) {
                    s.absUrl() != n && (r.$evalAsync(function() {
                        var t = s.absUrl();
                        s.$$parse(n);
                        r.$broadcast("$locationChangeStart", n, t).defaultPrevented ? (s.$$parse(t), f.url(t)) : y(t)
                    }), r.$$phase || r.$digest())
                });
                return l = 0, r.$watch(function() {
                    var n = ae(f.url()),
                        t = ae(s.absUrl()),
                        i = s.$$replace;
                    return l && n == t || (l++, r.$evalAsync(function() {
                        r.$broadcast("$locationChangeStart", s.absUrl(), n).defaultPrevented ? s.$$parse(n) : (f.url(s.absUrl(), i), y(n))
                    })), s.$$replace = !1, l
                }), s
            }]
        }

        function uh() {
            var n = !0,
                t = this;
            this.debugEnabled = function(t) {
                return f(t) ? (n = t, this) : n
            };
            this.$get = ["$window", function(i) {
                function f(n) {
                    return n instanceof Error && (n.stack ? n = n.message && -1 === n.stack.indexOf(n.message) ? "Error: " + n.message + "\n" + n.stack : n.stack : n.sourceURL && (n = n.message + "\n" + n.sourceURL + ":" + n.line)), n
                }

                function u(n) {
                    var t = i.console || {},
                        u = t[n] || t.log || s;
                    n = !1;
                    try {
                        n = !!u.apply
                    } catch (e) {}
                    return n ? function() {
                        var n = [];
                        return r(arguments, function(t) {
                            n.push(f(t))
                        }), u.apply(t, n)
                    } : function(n, t) {
                        u(n, null == t ? "" : t)
                    }
                }
                return {
                    log: u("log"),
                    info: u("info"),
                    warn: u("warn"),
                    error: u("error"),
                    debug: function() {
                        var i = u("debug");
                        return function() {
                            n && i.apply(t, arguments)
                        }
                    }()
                }
            }]
        }

        function ot(n, t) {
            if ("__defineGetter__" === n || "__defineSetter__" === n || "__lookupGetter__" === n || "__lookupSetter__" === n || "__proto__" === n) throw it("isecfld", t);
            return n
        }

        function we(n, t) {
            if (n += "", !e(n)) throw it("iseccst", t);
            return n
        }

        function st(n, t) {
            if (n) {
                if (n.constructor === n) throw it("isecfn", t);
                if (n.document && n.location && n.alert && n.setInterval) throw it("isecwindow", t);
                if (n.children && (n.nodeName || n.prop && n.attr && n.find)) throw it("isecdom", t);
                if (n === Object) throw it("isecobj", t);
            }
            return n
        }

        function tu(n, t, r, u, f) {
            var e, s, o;
            for (st(n, u), f = f || {}, t = t.split("."), s = 0; 1 < t.length; s++) e = ot(t.shift(), u), o = st(n[e], u), o || (o = {}, n[e] = o), n = o, n.then && f.unwrapPromises && (gt(u), "$$v" in n || function(n) {
                n.then(function(t) {
                    n.$$v = t
                })
            }(n), n.$$v === i && (n.$$v = {}), n = n.$$v);
            return e = ot(t.shift(), u), st(n[e], u), n[e] = r
        }

        function ai(n) {
            return "constructor" == n
        }

        function be(n, t, r, u, f, e, o) {
            ot(n, e);
            ot(t, e);
            ot(r, e);
            ot(u, e);
            ot(f, e);
            var s = function(n) {
                    return st(n, e)
                },
                h = o.expensiveChecks,
                c = h || ai(n) ? s : ut,
                l = h || ai(t) ? s : ut,
                a = h || ai(r) ? s : ut,
                v = h || ai(u) ? s : ut,
                y = h || ai(f) ? s : ut;
            return o.unwrapPromises ? function(o, s) {
                var h = s && s.hasOwnProperty(n) ? s : o,
                    p;
                return null == h ? h : ((h = c(h[n])) && h.then && (gt(e), "$$v" in h || (p = h, p.$$v = i, p.then(function(n) {
                    p.$$v = c(n)
                })), h = c(h.$$v)), !t) ? h : null == h ? i : ((h = l(h[t])) && h.then && (gt(e), "$$v" in h || (p = h, p.$$v = i, p.then(function(n) {
                    p.$$v = l(n)
                })), h = l(h.$$v)), !r) ? h : null == h ? i : ((h = a(h[r])) && h.then && (gt(e), "$$v" in h || (p = h, p.$$v = i, p.then(function(n) {
                    p.$$v = a(n)
                })), h = a(h.$$v)), !u) ? h : null == h ? i : ((h = v(h[u])) && h.then && (gt(e), "$$v" in h || (p = h, p.$$v = i, p.then(function(n) {
                    p.$$v = v(n)
                })), h = v(h.$$v)), !f) ? h : null == h ? i : ((h = y(h[f])) && h.then && (gt(e), "$$v" in h || (p = h, p.$$v = i, p.then(function(n) {
                    p.$$v = y(n)
                })), h = y(h.$$v)), h)
            } : function(e, o) {
                var s = o && o.hasOwnProperty(n) ? o : e;
                return null == s ? s : (s = c(s[n]), !t) ? s : null == s ? i : (s = l(s[t]), !r) ? s : null == s ? i : (s = a(s[r]), !u) ? s : null == s ? i : (s = v(s[u]), f ? null == s ? i : s = y(s[f]) : s)
            }
        }

        function fh(n, t) {
            return function(i, r) {
                return n(i, r, gt, st, t)
            }
        }

        function ke(n, t, u) {
            var s = t.expensiveChecks,
                h = s ? ul : rl,
                f, c, e, o, l;
            return h.hasOwnProperty(n) ? h[n] : (f = n.split("."), c = f.length, t.csp ? e = 6 > c ? be(f[0], f[1], f[2], f[3], f[4], u, t) : function(n, r) {
                var e = 0,
                    o;
                do o = be(f[e++], f[e++], f[e++], f[e++], f[e++], u, t)(n, r), r = i, n = o; while (e < c);
                return o
            } : (o = "var p;\n", s && (o += "s = eso(s, fe);\nl = eso(l, fe);\n"), l = s, r(f, function(n, i) {
                ot(n, u);
                var r = (i ? "s" : '((l&&l.hasOwnProperty("' + n + '"))?l:s)') + '["' + n + '"]',
                    f = s || ai(n);
                f && (r = "eso(" + r + ", fe)", l = !0);
                o += "if(s == null) return undefined;\ns=" + r + ";\n";
                t.unwrapPromises && (o += 'if (s && s.then) {\n pw("' + u.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (f ? "eso(v)" : "v") + ";});\n}\n s=" + (f ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
            }), o += "return s;", e = new Function("s", "l", "pw", "eso", "fe", o), e.toString = nt(o), (l || t.unwrapPromises) && (e = fh(e, u))), "hasOwnProperty" !== n && (h[n] = e), e)
        }

        function eh() {
            var t = {},
                i = {},
                n = {
                    csp: !1,
                    unwrapPromises: !1,
                    logPromiseWarnings: !0,
                    expensiveChecks: !1
                };
            this.unwrapPromises = function(t) {
                return f(t) ? (n.unwrapPromises = !!t, this) : n.unwrapPromises
            };
            this.logPromiseWarnings = function(t) {
                return f(t) ? (n.logPromiseWarnings = t, this) : n.logPromiseWarnings
            };
            this.$get = ["$filter", "$sniffer", "$log", function(r, u, f) {
                n.csp = u.csp;
                var e = {
                    csp: n.csp,
                    unwrapPromises: n.unwrapPromises,
                    logPromiseWarnings: n.logPromiseWarnings,
                    expensiveChecks: !0
                };
                return gt = function(t) {
                        n.logPromiseWarnings && !so.hasOwnProperty(t) && (so[t] = !0, f.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                    },
                    function(u, f) {
                        var o, h, c;
                        switch (typeof u) {
                            case "string":
                                return (h = f ? i : t, h.hasOwnProperty(u)) ? h[u] : (o = f ? e : n, c = new cf(o), o = new pi(c, r, o).parse(u), "hasOwnProperty" !== u && (h[u] = o), o);
                            case "function":
                                return u;
                            default:
                                return s
                        }
                    }
            }]
        }

        function oh() {
            this.$get = ["$rootScope", "$exceptionHandler", function(n, t) {
                return sh(function(t) {
                    n.$evalAsync(t)
                }, t)
            }]
        }

        function sh(n, t) {
            function f(n) {
                return n
            }

            function c(n) {
                return s(n)
            }
            var u = function() {
                    var r = [],
                        o, s;
                    return s = {
                        resolve: function(t) {
                            if (r) {
                                var u = r;
                                r = i;
                                o = e(t);
                                u.length && n(function() {
                                    for (var n, t = 0, i = u.length; t < i; t++) n = u[t], o.then(n[0], n[1], n[2])
                                })
                            }
                        },
                        reject: function(n) {
                            s.resolve(l(n))
                        },
                        notify: function(t) {
                            if (r) {
                                var i = r;
                                r.length && n(function() {
                                    for (var r, n = 0, u = i.length; n < u; n++) r = i[n], r[2](t)
                                })
                            }
                        },
                        promise: {
                            then: function(n, i, e) {
                                var s = u(),
                                    l = function(i) {
                                        try {
                                            s.resolve((h(n) ? n : f)(i))
                                        } catch (r) {
                                            s.reject(r);
                                            t(r)
                                        }
                                    },
                                    a = function(n) {
                                        try {
                                            s.resolve((h(i) ? i : c)(n))
                                        } catch (r) {
                                            s.reject(r);
                                            t(r)
                                        }
                                    },
                                    v = function(n) {
                                        try {
                                            s.notify((h(e) ? e : f)(n))
                                        } catch (i) {
                                            t(i)
                                        }
                                    };
                                return r ? r.push([l, a, v]) : o.then(l, a, v), s.promise
                            },
                            "catch": function(n) {
                                return this.then(null, n)
                            },
                            "finally": function(n) {
                                function t(n, t) {
                                    var i = u();
                                    return t ? i.resolve(n) : i.reject(n), i.promise
                                }

                                function i(i, r) {
                                    var u = null;
                                    try {
                                        u = (n || f)()
                                    } catch (e) {
                                        return t(e, !1)
                                    }
                                    return u && h(u.then) ? u.then(function() {
                                        return t(i, r)
                                    }, function(n) {
                                        return t(n, !1)
                                    }) : t(i, r)
                                }
                                return this.then(function(n) {
                                    return i(n, !0)
                                }, function(n) {
                                    return i(n, !1)
                                })
                            }
                        }
                    }
                },
                e = function(t) {
                    return t && h(t.then) ? t : {
                        then: function(i) {
                            var r = u();
                            return n(function() {
                                r.resolve(i(t))
                            }), r.promise
                        }
                    }
                },
                s = function(n) {
                    var t = u();
                    return t.reject(n), t.promise
                },
                l = function(i) {
                    return {
                        then: function(r, f) {
                            var e = u();
                            return n(function() {
                                try {
                                    e.resolve((h(f) ? f : c)(i))
                                } catch (n) {
                                    e.reject(n);
                                    t(n)
                                }
                            }), e.promise
                        }
                    }
                };
            return {
                defer: u,
                reject: s,
                when: function(i, r, o, l) {
                    var v = u(),
                        a, w = function(n) {
                            try {
                                return (h(r) ? r : f)(n)
                            } catch (i) {
                                return t(i), s(i)
                            }
                        },
                        y = function(n) {
                            try {
                                return (h(o) ? o : c)(n)
                            } catch (i) {
                                return t(i), s(i)
                            }
                        },
                        p = function(n) {
                            try {
                                return (h(l) ? l : f)(n)
                            } catch (i) {
                                t(i)
                            }
                        };
                    return n(function() {
                        e(i).then(function(n) {
                            a || (a = !0, v.resolve(e(n).then(w, y, p)))
                        }, function(n) {
                            a || (a = !0, v.resolve(y(n)))
                        }, function(n) {
                            a || v.notify(p(n))
                        })
                    }), v.promise
                },
                all: function(n) {
                    var i = u(),
                        f = 0,
                        t = o(n) ? [] : {};
                    return r(n, function(n, r) {
                        f++;
                        e(n).then(function(n) {
                            t.hasOwnProperty(r) || (t[r] = n, --f || i.resolve(t))
                        }, function(n) {
                            t.hasOwnProperty(r) || i.reject(n)
                        })
                    }), 0 === f && i.resolve(t), i.promise
                }
            }
        }

        function hh() {
            this.$get = ["$window", "$timeout", function(n, t) {
                var i = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame,
                    f = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.webkitCancelRequestAnimationFrame,
                    r = !!i,
                    u = r ? function(n) {
                        var t = i(n);
                        return function() {
                            f(t)
                        }
                    } : function(n) {
                        var i = t(n, 16.66, !1);
                        return function() {
                            t.cancel(i)
                        }
                    };
                return u.supported = r, u
            }]
        }

        function ch() {
            var t = 10,
                i = p("$rootScope"),
                n = null;
            this.digestTtl = function(n) {
                return arguments.length && (t = n), t
            };
            this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(u, f, e, o) {
                function l() {
                    this.$id = vr();
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this["this"] = this.$root = this;
                    this.$$destroyed = !1;
                    this.$$asyncQueue = [];
                    this.$$postDigestQueue = [];
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$isolateBindings = {}
                }

                function v(n) {
                    if (c.$$phase) throw i("inprog", c.$$phase);
                    c.$$phase = n
                }

                function y(n, t) {
                    var i = e(n);
                    return nr(i, t), i
                }

                function p(n, t, i) {
                    do n.$$listenerCount[i] -= t, 0 === n.$$listenerCount[i] && delete n.$$listenerCount[i]; while (n = n.$parent)
                }

                function w() {}
                l.prototype = {
                    constructor: l,
                    $new: function(n) {
                        return n ? (n = new l, n.$root = this.$root, n.$$asyncQueue = this.$$asyncQueue, n.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                            this.$$listeners = {};
                            this.$$listenerCount = {};
                            this.$id = vr();
                            this.$$childScopeClass = null
                        }, this.$$childScopeClass.prototype = this), n = new this.$$childScopeClass), n["this"] = n, n.$parent = this, n.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = n : this.$$childHead = this.$$childTail = n, n
                    },
                    $watch: function(t, i, r) {
                        var e = y(t, "watch"),
                            f = this.$$watchers,
                            u = {
                                fn: i,
                                last: w,
                                get: e,
                                exp: t,
                                eq: !!r
                            },
                            o, c;
                        return n = null, h(i) || (o = y(i || s, "listener"), u.fn = function(n, t, i) {
                                o(i)
                            }), "string" == typeof t && e.constant && (c = u.fn, u.fn = function(n, t, i) {
                                c.call(this, n, t, i);
                                di(f, u)
                            }), f || (f = this.$$watchers = []), f.unshift(u),
                            function() {
                                di(f, u);
                                n = null
                            }
                    },
                    $watchCollection: function(n, t) {
                        var s = this,
                            i, r, o, v = 1 < t.length,
                            u = 0,
                            y = e(n),
                            h = [],
                            c = {},
                            l = !0,
                            f = 0;
                        return this.$watch(function() {
                            i = y(s);
                            var t, n, e;
                            if (a(i))
                                if (bi(i))
                                    for (r !== h && (r = h, f = r.length = 0, u++), t = i.length, f !== t && (u++, r.length = f = t), n = 0; n < t; n++) e = r[n] !== r[n] && i[n] !== i[n], e || r[n] === i[n] || (u++, r[n] = i[n]);
                                else {
                                    r !== c && (r = c = {}, f = 0, u++);
                                    t = 0;
                                    for (n in i) i.hasOwnProperty(n) && (t++, r.hasOwnProperty(n) ? (e = r[n] !== r[n] && i[n] !== i[n], e || r[n] === i[n] || (u++, r[n] = i[n])) : (f++, r[n] = i[n], u++));
                                    if (f > t)
                                        for (n in u++, r) r.hasOwnProperty(n) && !i.hasOwnProperty(n) && (f--, delete r[n])
                                }
                            else r !== i && (r = i, u++);
                            return u
                        }, function() {
                            if (l ? (l = !1, t(i, i, s)) : t(i, o, s), v)
                                if (a(i))
                                    if (bi(i)) {
                                        o = Array(i.length);
                                        for (var n = 0; n < i.length; n++) o[n] = i[n]
                                    } else
                                        for (n in o = {}, i) uu.call(i, n) && (o[n] = i[n]);
                            else o = i
                        })
                    },
                    $digest: function() {
                        var r, e, s, l, y = this.$$asyncQueue,
                            tt = this.$$postDigestQueue,
                            k, a, d = t,
                            u, p = [],
                            b, g, nt;
                        v("$digest");
                        o.$$checkUrlChange();
                        n = null;
                        do {
                            for (a = !1, u = this; y.length;) {
                                try {
                                    nt = y.shift();
                                    nt.scope.$eval(nt.expression)
                                } catch (it) {
                                    c.$$phase = null;
                                    f(it)
                                }
                                n = null
                            }
                            n: do {
                                if (l = u.$$watchers)
                                    for (k = l.length; k--;) try {
                                        if (r = l[k])
                                            if ((e = r.get(u)) === (s = r.last) || (r.eq ? ti(e, s) : "number" == typeof e && "number" == typeof s && isNaN(e) && isNaN(s))) {
                                                if (r === n) {
                                                    a = !1;
                                                    break n
                                                }
                                            } else a = !0, n = r, r.last = r.eq ? hi(e, null) : e, r.fn(e, s === w ? e : s, u), 5 > d && (b = 4 - d, p[b] || (p[b] = []), g = h(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, g += "; newVal: " + ct(e) + "; oldVal: " + ct(s), p[b].push(g))
                                    } catch (rt) {
                                        c.$$phase = null;
                                        f(rt)
                                    }
                                if (!(l = u.$$childHead || u !== this && u.$$nextSibling))
                                    for (; u !== this && !(l = u.$$nextSibling);) u = u.$parent
                            } while (u = l);
                            if ((a || y.length) && !d--) throw c.$$phase = null, i("infdig", t, ct(p));
                        } while (a || y.length);
                        for (c.$$phase = null; tt.length;) try {
                            tt.shift()()
                        } catch (ut) {
                            f(ut)
                        }
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var n = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            this !== c && (r(this.$$listenerCount, cu(null, p, this)), n.$$childHead == this && (n.$$childHead = this.$$nextSibling), n.$$childTail == this && (n.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = s, this.$on = this.$watch = function() {
                                return s
                            })
                        }
                    },
                    $eval: function(n, t) {
                        return e(n)(this, t)
                    },
                    $evalAsync: function(n) {
                        c.$$phase || c.$$asyncQueue.length || o.defer(function() {
                            c.$$asyncQueue.length && c.$digest()
                        });
                        this.$$asyncQueue.push({
                            scope: this,
                            expression: n
                        })
                    },
                    $$postDigest: function(n) {
                        this.$$postDigestQueue.push(n)
                    },
                    $apply: function(n) {
                        try {
                            return v("$apply"), this.$eval(n)
                        } catch (i) {
                            f(i)
                        } finally {
                            c.$$phase = null;
                            try {
                                c.$digest()
                            } catch (t) {
                                throw f(t), t;
                            }
                        }
                    },
                    $on: function(n, t) {
                        var r = this.$$listeners[n],
                            i, u;
                        r || (this.$$listeners[n] = r = []);
                        r.push(t);
                        i = this;
                        do i.$$listenerCount[n] || (i.$$listenerCount[n] = 0), i.$$listenerCount[n]++; while (i = i.$parent);
                        return u = this,
                            function() {
                                var i = ki(r, t); - 1 !== i && (r[i] = null, p(u, 1, n))
                            }
                    },
                    $emit: function(n) {
                        var s = [],
                            r, i = this,
                            o = !1,
                            u = {
                                name: n,
                                targetScope: i,
                                stopPropagation: function() {
                                    o = !0
                                },
                                preventDefault: function() {
                                    u.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            h = [u].concat(dt.call(arguments, 1)),
                            t, e;
                        do {
                            for (r = i.$$listeners[n] || s, u.currentScope = i, t = 0, e = r.length; t < e; t++)
                                if (r[t]) try {
                                    r[t].apply(null, h)
                                } catch (c) {
                                    f(c)
                                } else r.splice(t, 1), t--, e--;
                            if (o) break;
                            i = i.$parent
                        } while (i);
                        return u
                    },
                    $broadcast: function(n) {
                        for (var t = this, i = this, u = {
                                name: n,
                                targetScope: this,
                                preventDefault: function() {
                                    u.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, o = [u].concat(dt.call(arguments, 1)), r, e; t = i;) {
                            for (u.currentScope = t, i = t.$$listeners[n] || [], r = 0, e = i.length; r < e; r++)
                                if (i[r]) try {
                                    i[r].apply(null, o)
                                } catch (s) {
                                    f(s)
                                } else i.splice(r, 1), r--, e--;
                            if (!(i = t.$$listenerCount[n] && t.$$childHead || t !== this && t.$$nextSibling))
                                for (; t !== this && !(i = t.$$nextSibling);) t = t.$parent
                        }
                        return u
                    }
                };
                var c = new l;
                return c
            }]
        }

        function lh() {
            var n = /^\s*(https?|ftp|mailto|tel|file):/,
                t = /^\s*((https?|ftp|file):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(t) {
                return f(t) ? (n = t, this) : n
            };
            this.imgSrcSanitizationWhitelist = function(n) {
                return f(n) ? (t = n, this) : t
            };
            this.$get = function() {
                return function(i, r) {
                    var f = r ? t : n,
                        u;
                    return (!y || 8 <= y) && (u = bt(i).href, "" !== u && !u.match(f)) ? "unsafe:" + u : i
                }
            }
        }

        function ah(n) {
            if ("self" === n) return n;
            if (e(n)) {
                if (-1 < n.indexOf("***")) throw ni("iwcard", n);
                return n = n.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + n + "$")
            }
            if (pr(n)) return RegExp("^" + n.source + "$");
            throw ni("imatcher");
        }

        function de(n) {
            var t = [];
            return f(n) && r(n, function(n) {
                t.push(ah(n))
            }), t
        }

        function vh() {
            this.SCE_CONTEXTS = rt;
            var n = ["self"],
                t = [];
            this.resourceUrlWhitelist = function(t) {
                return arguments.length && (n = de(t)), n
            };
            this.resourceUrlBlacklist = function(n) {
                return arguments.length && (t = de(n)), t
            };
            this.$get = ["$injector", function(r) {
                function f(n) {
                    var t = function(n) {
                        this.$$unwrapTrustedValue = function() {
                            return n
                        }
                    };
                    return n && (t.prototype = new n), t.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, t.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, t
                }
                var o = function() {
                        throw ni("unsafe");
                    },
                    e, u;
                return r.has("$sanitize") && (o = r.get("$sanitize")), e = f(), u = {}, u[rt.HTML] = f(e), u[rt.CSS] = f(e), u[rt.URL] = f(e), u[rt.JS] = f(e), u[rt.RESOURCE_URL] = f(u[rt.URL]), {
                    trustAs: function(n, t) {
                        var r = u.hasOwnProperty(n) ? u[n] : null;
                        if (!r) throw ni("icontext", n, t);
                        if (null === t || t === i || "" === t) return t;
                        if ("string" != typeof t) throw ni("itype", n);
                        return new r(t)
                    },
                    getTrusted: function(r, f) {
                        var s, e, c, h;
                        if (null === f || f === i || "" === f) return f;
                        if (s = u.hasOwnProperty(r) ? u[r] : null, s && f instanceof s) return f.$$unwrapTrustedValue();
                        if (r === rt.RESOURCE_URL) {
                            for (s = bt(f.toString()), h = !1, e = 0, c = n.length; e < c; e++)
                                if ("self" === n[e] ? rf(s) : n[e].exec(s.href)) {
                                    h = !0;
                                    break
                                }
                            if (h)
                                for (e = 0, c = t.length; e < c; e++)
                                    if ("self" === t[e] ? rf(s) : t[e].exec(s.href)) {
                                        h = !1;
                                        break
                                    }
                            if (h) return f;
                            throw ni("insecurl", f.toString());
                        }
                        if (r === rt.HTML) return o(f);
                        throw ni("unsafe");
                    },
                    valueOf: function(n) {
                        return n instanceof e ? n.$$unwrapTrustedValue() : n
                    }
                }
            }]
        }

        function yh() {
            var n = !0;
            this.enabled = function(t) {
                return arguments.length && (n = !!t), n
            };
            this.$get = ["$parse", "$sniffer", "$sceDelegate", function(t, i, u) {
                var f;
                if (n && i.msie && 8 > i.msieDocumentMode) throw ni("iequirks");
                f = ft(rt);
                f.isEnabled = function() {
                    return n
                };
                f.trustAs = u.trustAs;
                f.getTrusted = u.getTrusted;
                f.valueOf = u.valueOf;
                n || (f.trustAs = f.getTrusted = function(n, t) {
                    return t
                }, f.valueOf = ut);
                f.parseAs = function(n, i) {
                    var r = t(i);
                    return r.literal && r.constant ? r : function(t, i) {
                        return f.getTrusted(n, r(t, i))
                    }
                };
                var e = f.parseAs,
                    o = f.getTrusted,
                    s = f.trustAs;
                return r(rt, function(n, t) {
                    var i = v(t);
                    f[tr("parse_as_" + i)] = function(t) {
                        return e(n, t)
                    };
                    f[tr("get_trusted_" + i)] = function(t) {
                        return o(n, t)
                    };
                    f[tr("trust_as_" + i)] = function(t) {
                        return s(n, t)
                    }
                }), f
            }]
        }

        function ph() {
            this.$get = ["$window", "$document", function(n, t) {
                var s = {},
                    h = b((/android (\d+)/.exec(v((n.navigator || {}).userAgent)) || [])[1]),
                    p = /Boxee/i.test((n.navigator || {}).userAgent),
                    u = t[0] || {},
                    c = u.documentMode,
                    i, r = u.body && u.body.style,
                    f = !1,
                    o = !1,
                    a;
                if (r) {
                    for (a in r)
                        if (f = /^(Moz|webkit|O|ms)(?=[A-Z])/.exec(a)) {
                            i = f[0];
                            i = i.substr(0, 1).toUpperCase() + i.substr(1);
                            break
                        }
                    i || (i = "WebkitOpacity" in r && "webkit");
                    f = !!("transition" in r || i + "Transition" in r);
                    o = !!("animation" in r || i + "Animation" in r);
                    !h || f && o || (f = e(u.body.style.webkitTransition), o = e(u.body.style.webkitAnimation))
                }
                return {
                    history: !(!n.history || !n.history.pushState || 4 > h || p),
                    hashchange: "onhashchange" in n && (!c || 7 < c),
                    hasEvent: function(n) {
                        if ("input" == n && 9 == y) return !1;
                        if (l(s[n])) {
                            var t = u.createElement("div");
                            s[n] = "on" + n in t
                        }
                        return s[n]
                    },
                    csp: er(),
                    vendorPrefix: i,
                    transitions: f,
                    animations: o,
                    android: h,
                    msie: y,
                    msieDocumentMode: c
                }
            }]
        }

        function wh() {
            this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(n, t, i, r) {
                function e(e, o, s) {
                    var h = i.defer(),
                        c = h.promise,
                        l = f(s) && !s;
                    return o = t.defer(function() {
                        try {
                            h.resolve(e())
                        } catch (t) {
                            h.reject(t);
                            r(t)
                        } finally {
                            delete u[c.$$timeoutId]
                        }
                        l || n.$apply()
                    }, o), c.$$timeoutId = o, u[o] = h, c
                }
                var u = {};
                return e.cancel = function(n) {
                    return n && n.$$timeoutId in u ? (u[n.$$timeoutId].reject("canceled"), delete u[n.$$timeoutId], t.defer.cancel(n.$$timeoutId)) : !1
                }, e
            }]
        }

        function bt(n) {
            var t = n;
            return y && (d.setAttribute("href", t), t = d.href), d.setAttribute("href", t), {
                href: d.href,
                protocol: d.protocol ? d.protocol.replace(/:$/, "") : "",
                host: d.host,
                search: d.search ? d.search.replace(/^\?/, "") : "",
                hash: d.hash ? d.hash.replace(/^#/, "") : "",
                hostname: d.hostname,
                port: d.port,
                pathname: "/" === d.pathname.charAt(0) ? d.pathname : "/" + d.pathname
            }
        }

        function rf(n) {
            return n = e(n) ? bt(n) : n, n.protocol === co.protocol && n.host === co.host
        }

        function bh() {
            this.$get = nt(n)
        }

        function ge(n) {
            function t(u, f) {
                if (a(u)) {
                    var e = {};
                    return r(u, function(n, i) {
                        e[i] = t(i, n)
                    }), e
                }
                return n.factory(u + i, f)
            }
            var i = "Filter";
            this.register = t;
            this.$get = ["$injector", function(n) {
                return function(t) {
                    return n.get(t + i)
                }
            }];
            t("currency", no);
            t("date", ro);
            t("filter", kh);
            t("json", dh);
            t("limitTo", gh);
            t("lowercase", ao);
            t("number", to);
            t("orderBy", uo);
            t("uppercase", vo)
        }

        function kh() {
            return function(n, t, i) {
                var u, r, e, f, s;
                if (!o(n)) return n;
                u = typeof i;
                r = [];
                r.check = function(n) {
                    for (var t = 0; t < r.length; t++)
                        if (!r[t](n)) return !1;
                    return !0
                };
                "function" !== u && (i = "boolean" === u && i ? function(n, t) {
                    return ur.equals(n, t)
                } : function(n, t) {
                    if (n && t && "object" == typeof n && "object" == typeof t) {
                        for (var r in n)
                            if ("$" !== r.charAt(0) && uu.call(n, r) && i(n[r], t[r])) return !0;
                        return !1
                    }
                    return t = ("" + t).toLowerCase(), -1 < ("" + n).toLowerCase().indexOf(t)
                });
                e = function(n, t) {
                    if ("string" == typeof t && "!" === t.charAt(0)) return !e(n, t.substr(1));
                    switch (typeof n) {
                        case "boolean":
                        case "number":
                        case "string":
                            return i(n, t);
                        case "object":
                            switch (typeof t) {
                                case "object":
                                    return i(n, t);
                                default:
                                    for (var r in n)
                                        if ("$" !== r.charAt(0) && e(n[r], t)) return !0
                            }
                            return !1;
                        case "array":
                            for (r = 0; r < n.length; r++)
                                if (e(n[r], t)) return !0;
                            return !1;
                        default:
                            return !1
                    }
                };
                switch (typeof t) {
                    case "boolean":
                    case "number":
                    case "string":
                        t = {
                            $: t
                        };
                    case "object":
                        for (f in t)(function(n) {
                            "undefined" != typeof t[n] && r.push(function(i) {
                                return e("$" == n ? i : i && i[n], t[n])
                            })
                        })(f);
                        break;
                    case "function":
                        r.push(t);
                        break;
                    default:
                        return n
                }
                for (u = [], f = 0; f < n.length; f++) s = n[f], r.check(s) && u.push(s);
                return u
            }
        }

        function no(n) {
            var t = n.NUMBER_FORMATS;
            return function(n, i) {
                return l(i) && (i = t.CURRENCY_SYM), io(n, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, i)
            }
        }

        function to(n) {
            var t = n.NUMBER_FORMATS;
            return function(n, i) {
                return io(n, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, i)
            }
        }

        function io(n, t, i, r, u) {
            var h, s;
            if (null == n || !isFinite(n) || a(n)) return "";
            h = 0 > n;
            n = Math.abs(n);
            var f = n + "",
                o = "",
                c = [],
                e = !1;
            if (-1 !== f.indexOf("e") && (s = f.match(/([\d\.]+)e(-?)(\d+)/), s && "-" == s[2] && s[3] > u + 1 ? (f = "0", n = 0) : (o = f, e = !0)), e) 0 < u && -1 < n && 1 > n && (o = n.toFixed(u));
            else {
                f = (f.split(lo)[1] || "").length;
                l(u) && (u = Math.min(Math.max(t.minFrac, f), t.maxFrac));
                n = +(Math.round(+(n.toString() + "e" + u)).toString() + "e" + -u);
                0 === n && (h = !1);
                n = ("" + n).split(lo);
                f = n[0];
                n = n[1] || "";
                var s = 0,
                    v = t.lgSize,
                    y = t.gSize;
                if (f.length >= v + y)
                    for (s = f.length - v, e = 0; e < s; e++) 0 == (s - e) % y && 0 !== e && (o += i), o += f.charAt(e);
                for (e = s; e < f.length; e++) 0 == (f.length - e) % v && 0 !== e && (o += i), o += f.charAt(e);
                for (; n.length < u;) n += "0";
                u && "0" !== u && (o += r + n.substr(0, u))
            }
            return c.push(h ? t.negPre : t.posPre), c.push(o), c.push(h ? t.negSuf : t.posSuf), c.join("")
        }

        function uf(n, t, i) {
            var r = "";
            for (0 > n && (r = "-", n = -n), n = "" + n; n.length < t;) n = "0" + n;
            return i && (n = n.substr(n.length - t)), r + n
        }

        function k(n, t, i, r) {
            return i = i || 0,
                function(u) {
                    return u = u["get" + n](), (0 < i || u > -i) && (u += i), 0 === u && -12 == i && (u = 12), uf(u, t, r)
                }
        }

        function iu(n, t) {
            return function(i, r) {
                var u = i["get" + n](),
                    f = vi(t ? "SHORT" + n : n);
                return r[f][u]
            }
        }

        function ro(n) {
            function t(n) {
                var t;
                if (t = n.match(i)) {
                    n = new Date(0);
                    var r = 0,
                        u = 0,
                        f = t[8] ? n.setUTCFullYear : n.setFullYear,
                        e = t[8] ? n.setUTCHours : n.setHours;
                    t[9] && (r = b(t[9] + t[10]), u = b(t[9] + t[11]));
                    f.call(n, b(t[1]), b(t[2]) - 1, b(t[3]));
                    r = b(t[4] || 0) - r;
                    u = b(t[5] || 0) - u;
                    f = b(t[6] || 0);
                    t = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                    e.call(n, r, u, f, t)
                }
                return n
            }
            var i = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(i, u) {
                var s = "",
                    f = [],
                    o, h;
                if (u = u || "mediumDate", u = n.DATETIME_FORMATS[u] || u, e(i) && (i = ol.test(i) ? b(i) : t(i)), yr(i) && (i = new Date(i)), !wt(i)) return i;
                for (; u;)(h = el.exec(u)) ? (f = f.concat(dt.call(h, 1)), u = f.pop()) : (f.push(u), u = null);
                return r(f, function(t) {
                    o = fl[t];
                    s += o ? o(i, n.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), s
            }
        }

        function dh() {
            return function(n) {
                return ct(n, !0)
            }
        }

        function gh() {
            return function(n, t) {
                return o(n) || e(n) ? (t = Infinity === Math.abs(Number(t)) ? Number(t) : b(t)) ? 0 < t ? n.slice(0, t) : n.slice(t) : e(n) ? "" : [] : n
            }
        }

        function uo(n) {
            return function(t, i, r) {
                function u(n, t) {
                    return gi(t) ? function(t, i) {
                        return n(i, t)
                    } : n
                }

                function f(n, t) {
                    var i = typeof n,
                        r = typeof t;
                    return i == r ? (wt(n) && wt(t) && (n = n.valueOf(), t = t.valueOf()), "string" == i && (n = n.toLowerCase(), t = t.toLowerCase()), n === t ? 0 : n < t ? -1 : 1) : i < r ? -1 : 1
                }
                return bi(t) ? (i = o(i) ? i : [i], 0 === i.length && (i = ["+"]), i = is(i, function(t) {
                    var r = !1,
                        i = t || ut,
                        o;
                    if (e(t)) {
                        if (("+" == t.charAt(0) || "-" == t.charAt(0)) && (r = "-" == t.charAt(0), t = t.substring(1)), "" === t) return u(function(n, t) {
                            return f(n, t)
                        }, r);
                        if (i = n(t), i.constant) return o = i(), u(function(n, t) {
                            return f(n[o], t[o])
                        }, r)
                    }
                    return u(function(n, t) {
                        return f(i(n), i(t))
                    }, r)
                }), dt.call(t).sort(u(function(n, t) {
                    for (var u, r = 0; r < i.length; r++)
                        if (u = i[r](n, t), 0 !== u) return u;
                    return 0
                }, r))) : t
            }
        }

        function kt(n) {
            return h(n) && (n = {
                link: n
            }), n.restrict = n.restrict || "AC", nt(n)
        }

        function fo(n, t, i, u) {
            function e(t, i) {
                i = i ? "-" + br(i, "-") : "";
                u.setClass(n, (t ? ou : su) + i, (t ? su : ou) + i)
            }
            var f = this,
                o = n.parent().controller("form") || ar,
                s = 0,
                h = f.$error = {},
                c = [];
            f.$name = t.name || t.ngForm;
            f.$dirty = !1;
            f.$pristine = !0;
            f.$valid = !0;
            f.$invalid = !1;
            o.$addControl(f);
            n.addClass(wi);
            e(!0);
            f.$addControl = function(n) {
                ri(n.$name, "input");
                c.push(n);
                n.$name && (f[n.$name] = n)
            };
            f.$removeControl = function(n) {
                n.$name && f[n.$name] === n && delete f[n.$name];
                r(h, function(t, i) {
                    f.$setValidity(i, !0, n)
                });
                di(c, n)
            };
            f.$setValidity = function(n, t, i) {
                var r = h[n];
                if (t) r && (di(r, i), r.length || (s--, s || (e(t), f.$valid = !0, f.$invalid = !1), h[n] = !1, e(!0, n), o.$setValidity(n, !0, f)));
                else {
                    if (s || e(t), r) {
                        if (-1 != ki(r, i)) return
                    } else h[n] = r = [], s++, e(!1, n), o.$setValidity(n, !1, f);
                    r.push(i);
                    f.$valid = !1;
                    f.$invalid = !0
                }
            };
            f.$setDirty = function() {
                u.removeClass(n, wi);
                u.addClass(n, hu);
                f.$dirty = !0;
                f.$pristine = !1;
                o.$setDirty()
            };
            f.$setPristine = function() {
                u.removeClass(n, hu);
                u.addClass(n, wi);
                f.$dirty = !1;
                f.$pristine = !0;
                r(c, function(n) {
                    n.$setPristine()
                })
            }
        }

        function yt(n, t, r, u) {
            return n.$setValidity(t, r), r ? u : i
        }

        function eo(n, t) {
            var i, r;
            if (t)
                for (i = 0; i < t.length; ++i)
                    if (r = t[i], n[r]) return !0;
            return !1
        }

        function nc(n, t, i, r, u) {
            a(u) && (n.$$hasNativeValidators = !0, n.$parsers.push(function(f) {
                if (n.$error[t] || eo(u, r) || !eo(u, i)) return f;
                n.$setValidity(t, !1)
            }))
        }

        function ru(n, t, i, r, u, f) {
            var l = t.prop(tc),
                a = t[0].placeholder,
                d = {},
                nt = v(t[0].type),
                s, o, h, c, e, w, k;
            if (r.$$validityState = l, !u.android) {
                s = !1;
                t.on("compositionstart", function() {
                    s = !0
                });
                t.on("compositionend", function() {
                    s = !1;
                    o()
                })
            }
            if (o = function(u) {
                    if (!s) {
                        var f = t.val();
                        y && "input" === (u || d).type && t[0].placeholder !== a ? a = t[0].placeholder : ("password" !== nt && gi(i.ngTrim || "T") && (f = g(f)), u = l && r.$$hasNativeValidators, r.$viewValue !== f || "" === f && u) && (n.$root.$$phase ? r.$setViewValue(f) : n.$apply(function() {
                            r.$setViewValue(f)
                        }))
                    }
                }, u.hasEvent("input")) t.on("input", o);
            else {
                c = function() {
                    h || (h = f.defer(function() {
                        o();
                        h = null
                    }))
                };
                t.on("keydown", function(n) {
                    n = n.keyCode;
                    91 === n || 15 < n && 19 > n || 37 <= n && 40 >= n || c()
                });
                if (u.hasEvent("paste")) t.on("paste cut", c)
            }
            t.on("change", o);
            r.$render = function() {
                t.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
            };
            e = i.ngPattern;
            e && ((u = e.match(/^\/(.*)\/([gim]*)$/)) ? (e = RegExp(u[1], u[2]), u = function(n) {
                return yt(r, "pattern", r.$isEmpty(n) || e.test(n), n)
            }) : u = function(i) {
                var u = n.$eval(e);
                if (!u || !u.test) throw p("ngPattern")("noregexp", e, u, et(t));
                return yt(r, "pattern", r.$isEmpty(i) || u.test(i), i)
            }, r.$formatters.push(u), r.$parsers.push(u));
            i.ngMinlength && (w = b(i.ngMinlength), u = function(n) {
                return yt(r, "minlength", r.$isEmpty(n) || n.length >= w, n)
            }, r.$parsers.push(u), r.$formatters.push(u));
            i.ngMaxlength && (k = b(i.ngMaxlength), u = function(n) {
                return yt(r, "maxlength", r.$isEmpty(n) || n.length <= k, n)
            }, r.$parsers.push(u), r.$formatters.push(u))
        }

        function ff(n, t) {
            return n = "ngClass" + n, ["$animate", function(i) {
                function f(n, t) {
                    var f = [],
                        r = 0,
                        u, i;
                    n: for (; r < n.length; r++) {
                        for (u = n[r], i = 0; i < t.length; i++)
                            if (u == t[i]) continue n;
                        f.push(u)
                    }
                    return f
                }

                function u(n) {
                    if (!o(n)) {
                        if (e(n)) return n.split(" ");
                        if (a(n)) {
                            var t = [];
                            return r(n, function(n, i) {
                                n && (t = t.concat(i.split(" ")))
                            }), t
                        }
                    }
                    return n
                }
                return {
                    restrict: "AC",
                    link: function(e, o, s) {
                        function h(n, t) {
                            var i = o.data("$classCounts") || {},
                                u = [];
                            return r(n, function(n) {
                                (0 < t || i[n]) && (i[n] = (i[n] || 0) + t, i[n] === +(0 < t) && u.push(n))
                            }), o.data("$classCounts", i), u.join(" ")
                        }

                        function l(n) {
                            var r, l;
                            if (!0 === t || e.$index % 2 === t)
                                if (r = u(n || []), c) {
                                    if (!ti(n, c)) {
                                        var a = u(c),
                                            l = f(r, a),
                                            r = f(a, r),
                                            r = h(r, -1),
                                            l = h(l, 1);
                                        0 === l.length ? i.removeClass(o, r) : 0 === r.length ? i.addClass(o, l) : i.setClass(o, l, r)
                                    }
                                } else l = h(r, 1), s.$addClass(l);
                            c = ft(n)
                        }
                        var c;
                        e.$watch(s[n], l, !0);
                        s.$observe("class", function() {
                            l(e.$eval(s[n]))
                        });
                        "ngClass" !== n && e.$watch("$index", function(i, r) {
                            var f = i & 1,
                                o;
                            f !== (r & 1) && (o = u(e.$eval(s[n])), f === t ? (f = h(o, 1), s.$addClass(f)) : (f = h(o, -1), s.$removeClass(f)))
                        })
                    }
                }
            }]
        }
        var tc = "validity",
            v = function(n) {
                return e(n) ? n.toLowerCase() : n
            },
            uu = Object.prototype.hasOwnProperty,
            vi = function(n) {
                return e(n) ? n.toUpperCase() : n
            },
            y, u, fi, dt = [].slice,
            ic = [].push,
            ei = Object.prototype.toString,
            rr = p("ng"),
            ur = n.angular || (n.angular = {}),
            fr, yi, pt = ["0", "0", "0"],
            o, g, oi, hr, sf, pi, ao, vo, yo, eu, ar;
        y = b((/msie (\d+)/.exec(v(navigator.userAgent)) || [])[1]);
        isNaN(y) && (y = b((/trident\/.*; rv:(\d+)/.exec(v(navigator.userAgent)) || [])[1]));
        s.$inject = [];
        ut.$inject = [];
        o = function() {
            return h(Array.isArray) ? Array.isArray : function(n) {
                return "[object Array]" === ei.call(n)
            }
        }();
        g = function() {
            return String.prototype.trim ? function(n) {
                return e(n) ? n.trim() : n
            } : function(n) {
                return e(n) ? n.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : n
            }
        }();
        yi = 9 > y ? function(n) {
            return n = n.nodeName ? n : n[0], n.scopeName && "HTML" != n.scopeName ? vi(n.scopeName + ":" + n.nodeName) : n.nodeName
        } : function(n) {
            return n.nodeName ? n.nodeName : n[0].nodeName
        };
        var er = function() {
                if (f(er.isActive_)) return er.isActive_;
                var n = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
                if (!n) try {
                    new Function("")
                } catch (i) {
                    n = !0
                }
                return er.isActive_ = n
            },
            rc = /[A-Z]/g,
            uc = {
                full: "1.2.30",
                major: 1,
                minor: 2,
                dot: 30,
                codeName: "patronal-resurrection"
            };
        w.expando = "ng339";
        var or = w.cache = {},
            fc = 1,
            fu = n.document.addEventListener ? function(n, t, i) {
                n.addEventListener(t, i, !1)
            } : function(n, t, i) {
                n.attachEvent("on" + t, i)
            },
            sr = n.document.removeEventListener ? function(n, t, i) {
                n.removeEventListener(t, i, !1)
            } : function(n, t, i) {
                n.detachEvent("on" + t, i)
            };
        w._data = function(n) {
            return this.cache[n[this.expando]] || {}
        };
        var ec = /([\:\-\_]+(.))/g,
            oc = /^moz([A-Z])/,
            ef = p("jqLite"),
            sc = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            of = /<|&#?\w+;/,
            hc = /<([\w:]+)/,
            cc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            tt = {
                option: [1, '<select multiple="multiple">', "<\/select>"],
                thead: [1, "<table>", "<\/table>"],
                col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: [0, "", ""]
            };
        tt.optgroup = tt.option;
        tt.tbody = tt.tfoot = tt.colgroup = tt.caption = tt.thead;
        tt.th = tt.td;
        oi = w.prototype = {
            ready: function(i) {
                function r() {
                    u || (u = !0, i())
                }
                var u = !1;
                "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), w(n).on("load", r))
            },
            toString: function() {
                var n = [];
                return r(this, function(t) {
                    n.push("" + t)
                }), "[" + n.join(", ") + "]"
            },
            eq: function(n) {
                return 0 <= n ? u(this[n]) : u(this[this.length + n])
            },
            length: 0,
            push: ic,
            sort: [].sort,
            splice: [].splice
        };
        hr = {};
        r("multiple selected checked disabled readOnly required open".split(" "), function(n) {
            hr[v(n)] = n
        });
        sf = {};
        r("input select option textarea button form details".split(" "), function(n) {
            sf[vi(n)] = !0
        });
        r({
            data: bu,
            removeData: wu
        }, function(n, t) {
            w[t] = n
        });
        r({
            data: bu,
            inheritedData: gr,
            scope: function(n) {
                return u.data(n, "$scope") || gr(n.parentNode || n, ["$isolateScope", "$scope"])
            },
            isolateScope: function(n) {
                return u.data(n, "$isolateScope") || u.data(n, "$isolateScopeNoTemplate")
            },
            controller: ne,
            injector: function(n) {
                return gr(n, "$injector")
            },
            removeAttr: function(n, t) {
                n.removeAttribute(t)
            },
            hasClass: ku,
            css: function(n, t, r) {
                if (t = tr(t), f(r)) n.style[t] = r;
                else {
                    var u;
                    return 8 >= y && (u = n.currentStyle && n.currentStyle[t], "" === u && (u = "auto")), u = u || n.style[t], 8 >= y && (u = "" === u ? i : u), u
                }
            },
            attr: function(n, t, r) {
                var u = v(t);
                if (hr[u])
                    if (f(r)) r ? (n[t] = !0, n.setAttribute(t, u)) : (n[t] = !1, n.removeAttribute(u));
                    else return n[t] || (n.attributes.getNamedItem(t) || s).specified ? u : i;
                else if (f(r)) n.setAttribute(t, r);
                else if (n.getAttribute) return n = n.getAttribute(t, 2), null === n ? i : n
            },
            prop: function(n, t, i) {
                if (f(i)) n[t] = i;
                else return n[t]
            },
            text: function() {
                function t(t, i) {
                    var r = n[t.nodeType];
                    if (l(i)) return r ? t[r] : "";
                    t[r] = i
                }
                var n = [];
                return 9 > y ? (n[1] = "innerText", n[3] = "nodeValue") : n[1] = n[3] = "textContent", t.$dv = "", t
            }(),
            val: function(n, t) {
                if (l(t)) {
                    if ("SELECT" === yi(n) && n.multiple) {
                        var i = [];
                        return r(n.options, function(n) {
                            n.selected && i.push(n.value || n.text)
                        }), 0 === i.length ? null : i
                    }
                    return n.value
                }
                n.value = t
            },
            html: function(n, t) {
                if (l(t)) return n.innerHTML;
                for (var i = 0, r = n.childNodes; i < r.length; i++) ci(r[i]);
                n.innerHTML = t
            },
            empty: te
        }, function(n, t) {
            w.prototype[t] = function(t, r) {
                var u, f, e = this.length,
                    o;
                if (n !== te && (2 == n.length && n !== ku && n !== ne ? t : r) === i) {
                    if (a(t)) {
                        for (u = 0; u < e; u++)
                            if (n === bu) n(this[u], t);
                            else
                                for (f in t) n(this[u], f, t[f]);
                        return this
                    }
                    for (u = n.$dv, e = u === i ? Math.min(e, 1) : e, f = 0; f < e; f++) o = n(this[f], t, r), u = u ? u + o : o;
                    return u
                }
                for (u = 0; u < e; u++) n(this[u], t, r);
                return this
            }
        });
        r({
            removeData: wu,
            dealoc: ci,
            on: function lc(n, i, u, e) {
                if (f(e)) throw ef("onargs");
                var o = lt(n, "events"),
                    s = lt(n, "handle");
                o || lt(n, "events", o = {});
                s || lt(n, "handle", s = os(n, o));
                r(i.split(" "), function(i) {
                    var r = o[i],
                        f;
                    r || ("mouseenter" == i || "mouseleave" == i ? (f = t.body.contains || t.body.compareDocumentPosition ? function(n, t) {
                        var r = 9 === n.nodeType ? n.documentElement : n,
                            i = t && t.parentNode;
                        return n === i || !!(i && 1 === i.nodeType && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
                    } : function(n, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === n) return !0;
                        return !1
                    }, o[i] = [], lc(n, {
                        mouseleave: "mouseout",
                        mouseenter: "mouseover"
                    } [i], function(n) {
                        var t = n.relatedTarget;
                        t && (t === this || f(this, t)) || s(n, i)
                    })) : (fu(n, i, s), o[i] = []), r = o[i]);
                    r.push(u)
                })
            },
            off: gf,
            one: function(n, t, i) {
                n = u(n);
                n.on(t, function r() {
                    n.off(t, i);
                    n.off(t, r)
                });
                n.on(t, i)
            },
            replaceWith: function(n, t) {
                var i, u = n.parentNode;
                ci(n);
                r(new w(t), function(t) {
                    i ? u.insertBefore(t, i.nextSibling) : u.replaceChild(t, n);
                    i = t
                })
            },
            children: function(n) {
                var t = [];
                return r(n.childNodes, function(n) {
                    1 === n.nodeType && t.push(n)
                }), t
            },
            contents: function(n) {
                return n.contentDocument || n.childNodes || []
            },
            append: function(n, t) {
                r(new w(t), function(t) {
                    1 !== n.nodeType && 11 !== n.nodeType || n.appendChild(t)
                })
            },
            prepend: function(n, t) {
                if (1 === n.nodeType) {
                    var i = n.firstChild;
                    r(new w(t), function(t) {
                        n.insertBefore(t, i)
                    })
                }
            },
            wrap: function(n, t) {
                t = u(t)[0];
                var i = n.parentNode;
                i && i.replaceChild(t, n);
                t.appendChild(n)
            },
            remove: function(n) {
                ci(n);
                var t = n.parentNode;
                t && t.removeChild(n)
            },
            after: function(n, t) {
                var i = n,
                    u = n.parentNode;
                r(new w(t), function(n) {
                    u.insertBefore(n, i.nextSibling);
                    i = n
                })
            },
            addClass: dr,
            removeClass: kr,
            toggleClass: function(n, t, i) {
                t && r(t.split(" "), function(t) {
                    var r = i;
                    l(r) && (r = !ku(n, t));
                    (r ? dr : kr)(n, t)
                })
            },
            parent: function(n) {
                return (n = n.parentNode) && 11 !== n.nodeType ? n : null
            },
            next: function(n) {
                if (n.nextElementSibling) return n.nextElementSibling;
                for (n = n.nextSibling; null != n && 1 !== n.nodeType;) n = n.nextSibling;
                return n
            },
            find: function(n, t) {
                return n.getElementsByTagName ? n.getElementsByTagName(t) : []
            },
            clone: pu,
            triggerHandler: function(n, t, i) {
                var u, e, f;
                u = t.type || t;
                f = (lt(n, "events") || {})[u];
                f && (u = {
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return !0 === this.defaultPrevented
                    },
                    stopPropagation: s,
                    type: u,
                    target: n
                }, t.type && (u = c(u, t)), t = ft(f), e = i ? [u].concat(i) : [u], r(t, function(t) {
                    t.apply(n, e)
                }))
            }
        }, function(n, t) {
            w.prototype[t] = function(t, i, r) {
                for (var e, o = 0; o < this.length; o++) l(e) ? (e = n(this[o], t, i, r), f(e) && (e = u(e))) : du(e, n(this[o], t, i, r));
                return f(e) ? e : this
            };
            w.prototype.bind = w.prototype.on;
            w.prototype.unbind = w.prototype.off
        });
        ir.prototype = {
            put: function(n, t) {
                this[li(n, this.nextUid)] = t
            },
            get: function(n) {
                return this[li(n, this.nextUid)]
            },
            remove: function(n) {
                var t = this[n = li(n, this.nextUid)];
                return delete this[n], t
            }
        };
        var ac = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            vc = /,/,
            yc = /^\s*(_?)(\S+?)\1\s*$/,
            pc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
            cr = p("$injector"),
            wc = p("$animate"),
            bc = ["$provide", function(n) {
                this.$$selectors = {};
                this.register = function(t, i) {
                    var r = t + "-animation";
                    if (t && "." != t.charAt(0)) throw wc("notcsel", t);
                    this.$$selectors[t.substr(1)] = r;
                    n.factory(r, i)
                };
                this.classNameFilter = function(n) {
                    return 1 === arguments.length && (this.$$classNameFilter = n instanceof RegExp ? n : null), this.$$classNameFilter
                };
                this.$get = ["$timeout", "$$asyncCallback", function(n, t) {
                    return {
                        enter: function(n, i, r, u) {
                            r ? r.after(n) : (i && i[0] || (i = r.parent()), i.append(n));
                            u && t(u)
                        },
                        leave: function(n, i) {
                            n.remove();
                            i && t(i)
                        },
                        move: function(n, t, i, r) {
                            this.enter(n, t, i, r)
                        },
                        addClass: function(n, i, u) {
                            i = e(i) ? i : o(i) ? i.join(" ") : "";
                            r(n, function(n) {
                                dr(n, i)
                            });
                            u && t(u)
                        },
                        removeClass: function(n, i, u) {
                            i = e(i) ? i : o(i) ? i.join(" ") : "";
                            r(n, function(n) {
                                kr(n, i)
                            });
                            u && t(u)
                        },
                        setClass: function(n, i, u, f) {
                            r(n, function(n) {
                                dr(n, i);
                                kr(n, u)
                            });
                            f && t(f)
                        },
                        enabled: s
                    }
                }]
            }],
            ht = p("$compile");
        fe.$inject = ["$provide", "$$sanitizeUriProvider"];
        var kc = /^(x[\:\-_]|data[\:\-_])/i,
            oo = p("$interpolate"),
            dc = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
            gc = {
                http: 80,
                https: 443,
                ftp: 21
            },
            hf = p("$location");
        ye.prototype = tf.prototype = ve.prototype = {
            $$html5: !1,
            $$replace: !1,
            absUrl: nu("$$absUrl"),
            url: function(n) {
                return l(n) ? this.$$url : (n = dc.exec(n), n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || ""), this)
            },
            protocol: nu("$$protocol"),
            host: nu("$$host"),
            port: nu("$$port"),
            path: pe("$$path", function(n) {
                return n = null !== n ? n.toString() : "", "/" == n.charAt(0) ? n : "/" + n
            }),
            search: function(n, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (e(n) || yr(n)) n = n.toString(), this.$$search = bf(n);
                        else if (a(n)) r(n, function(t, i) {
                            null == t && delete n[i]
                        }), this.$$search = n;
                        else throw hf("isrcharg");
                        break;
                    default:
                        l(t) || null === t ? delete this.$$search[n] : this.$$search[n] = t
                }
                return this.$$compose(), this
            },
            hash: pe("$$hash", function(n) {
                return null !== n ? n.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
        var it = p("$parse"),
            so = {},
            gt, nl = Function.prototype.call,
            tl = Function.prototype.apply,
            ho = Function.prototype.bind,
            lr = {
                "null": function() {
                    return null
                },
                "true": function() {
                    return !0
                },
                "false": function() {
                    return !1
                },
                undefined: s,
                "+": function(n, t, r, u) {
                    return r = r(n, t), u = u(n, t), f(r) ? f(u) ? r + u : r : f(u) ? u : i
                },
                "-": function(n, t, i, r) {
                    return i = i(n, t), r = r(n, t), (f(i) ? i : 0) - (f(r) ? r : 0)
                },
                "*": function(n, t, i, r) {
                    return i(n, t) * r(n, t)
                },
                "/": function(n, t, i, r) {
                    return i(n, t) / r(n, t)
                },
                "%": function(n, t, i, r) {
                    return i(n, t) % r(n, t)
                },
                "^": function(n, t, i, r) {
                    return i(n, t) ^ r(n, t)
                },
                "=": s,
                "===": function(n, t, i, r) {
                    return i(n, t) === r(n, t)
                },
                "!==": function(n, t, i, r) {
                    return i(n, t) !== r(n, t)
                },
                "==": function(n, t, i, r) {
                    return i(n, t) == r(n, t)
                },
                "!=": function(n, t, i, r) {
                    return i(n, t) != r(n, t)
                },
                "<": function(n, t, i, r) {
                    return i(n, t) < r(n, t)
                },
                ">": function(n, t, i, r) {
                    return i(n, t) > r(n, t)
                },
                "<=": function(n, t, i, r) {
                    return i(n, t) <= r(n, t)
                },
                ">=": function(n, t, i, r) {
                    return i(n, t) >= r(n, t)
                },
                "&&": function(n, t, i, r) {
                    return i(n, t) && r(n, t)
                },
                "||": function(n, t, i, r) {
                    return i(n, t) || r(n, t)
                },
                "&": function(n, t, i, r) {
                    return i(n, t) & r(n, t)
                },
                "|": function(n, t, i, r) {
                    return r(n, t)(n, t, i(n, t))
                },
                "!": function(n, t, i) {
                    return !i(n, t)
                }
            },
            il = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "\t",
                v: "\v",
                "'": "'",
                '"': '"'
            },
            cf = function(n) {
                this.options = n
            };
        cf.prototype = {
            constructor: cf,
            lex: function(n) {
                for (this.text = n, this.index = 0, this.ch = i, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                    if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                    else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(this.ch)) this.readIdent();
                    else if (this.is("(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: this.ch
                    }), this.index++;
                    else if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    } else {
                        n = this.ch + this.peek();
                        var t = n + this.peek(2),
                            r = lr[this.ch],
                            u = lr[n],
                            f = lr[t];
                        f ? (this.tokens.push({
                            index: this.index,
                            text: t,
                            fn: f
                        }), this.index += 3) : u ? (this.tokens.push({
                            index: this.index,
                            text: n,
                            fn: u
                        }), this.index += 2) : r ? (this.tokens.push({
                            index: this.index,
                            text: this.ch,
                            fn: r
                        }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                    this.lastCh = this.ch
                }
                return this.tokens
            },
            is: function(n) {
                return -1 !== n.indexOf(this.ch)
            },
            was: function(n) {
                return -1 !== n.indexOf(this.lastCh)
            },
            peek: function(n) {
                return n = n || 1, this.index + n < this.text.length ? this.text.charAt(this.index + n) : !1
            },
            isNumber: function(n) {
                return "0" <= n && "9" >= n
            },
            isWhitespace: function(n) {
                return " " === n || "\r" === n || "\t" === n || "\n" === n || "\v" === n || "Â " === n
            },
            isIdent: function(n) {
                return "a" <= n && "z" >= n || "A" <= n && "Z" >= n || "_" === n || "$" === n
            },
            isExpOperator: function(n) {
                return "-" === n || "+" === n || this.isNumber(n)
            },
            throwError: function(n, t, i) {
                i = i || this.index;
                t = f(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, i) + "]" : " " + i;
                throw it("lexerr", n, t, this.text);
            },
            readNumber: function() {
                for (var t, i, n = "", r = this.index; this.index < this.text.length;) {
                    if (t = v(this.text.charAt(this.index)), "." == t || this.isNumber(t)) n += t;
                    else if (i = this.peek(), "e" == t && this.isExpOperator(i)) n += t;
                    else if (this.isExpOperator(t) && i && this.isNumber(i) && "e" == n.charAt(n.length - 1)) n += t;
                    else if (!this.isExpOperator(t) || i && this.isNumber(i) || "e" != n.charAt(n.length - 1)) break;
                    else this.throwError("Invalid exponent");
                    this.index++
                }
                n *= 1;
                this.tokens.push({
                    index: r,
                    text: n,
                    literal: !0,
                    constant: !0,
                    fn: function() {
                        return n
                    }
                })
            },
            readIdent: function() {
                for (var o, e = this, n = "", t = this.index, r, u, f, i; this.index < this.text.length;) {
                    if (i = this.text.charAt(this.index), "." === i || this.isIdent(i) || this.isNumber(i)) "." === i && (r = this.index), n += i;
                    else break;
                    this.index++
                }
                if (r)
                    for (u = this.index; u < this.text.length;) {
                        if (i = this.text.charAt(u), "(" === i) {
                            f = n.substr(r - t + 1);
                            n = n.substr(0, r - t);
                            this.index = u;
                            break
                        }
                        if (this.isWhitespace(i)) u++;
                        else break
                    }
                t = {
                    index: t,
                    text: n
                };
                lr.hasOwnProperty(n) ? (t.fn = lr[n], t.literal = !0, t.constant = !0) : (o = ke(n, this.options, this.text), t.fn = c(function(n, t) {
                    return o(n, t)
                }, {
                    assign: function(t, i) {
                        return tu(t, n, i, e.text, e.options)
                    }
                }));
                this.tokens.push(t);
                f && (this.tokens.push({
                    index: r,
                    text: "."
                }), this.tokens.push({
                    index: r + 1,
                    text: f
                }))
            },
            readString: function(n) {
                var f = this.index,
                    t, u;
                this.index++;
                for (var r = "", u = n, i = !1; this.index < this.text.length;) {
                    if (t = this.text.charAt(this.index), u = u + t, i) "u" === t ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, r += String.fromCharCode(parseInt(i, 16))) : r += il[t] || t, i = !1;
                    else if ("\\" === t) i = !0;
                    else {
                        if (t === n) {
                            this.index++;
                            this.tokens.push({
                                index: f,
                                text: u,
                                string: r,
                                literal: !0,
                                constant: !0,
                                fn: function() {
                                    return r
                                }
                            });
                            return
                        }
                        r += t
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", f)
            }
        };
        pi = function(n, t, i) {
            this.lexer = n;
            this.$filter = t;
            this.options = i
        };
        pi.ZERO = c(function() {
            return 0
        }, {
            constant: !0
        });
        pi.prototype = {
            constructor: pi,
            parse: function(n) {
                return this.text = n, this.tokens = this.lexer.lex(n), n = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), n.literal = !!n.literal, n.constant = !!n.constant, n
            },
            primary: function() {
                var n, t, i;
                for (this.expect("(") ? (n = this.filterChain(), this.consume(")")) : this.expect("[") ? n = this.arrayDeclaration() : this.expect("{") ? n = this.object() : (t = this.expect(), (n = t.fn) || this.throwError("not a primary expression", t), n.literal = !!t.literal, n.constant = !!t.constant); t = this.expect("(", "[", ".");) "(" === t.text ? (n = this.functionCall(n, i), i = null) : "[" === t.text ? (i = n, n = this.objectIndex(n)) : "." === t.text ? (i = n, n = this.fieldAccess(n)) : this.throwError("IMPOSSIBLE");
                return n
            },
            throwError: function(n, t) {
                throw it("syntax", t.text, n, t.index + 1, this.text, this.text.substring(t.index));
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw it("ueoe", this.text);
                return this.tokens[0]
            },
            peek: function(n, t, i, r) {
                if (0 < this.tokens.length) {
                    var f = this.tokens[0],
                        u = f.text;
                    if (u === n || u === t || u === i || u === r || !(n || t || i || r)) return f
                }
                return !1
            },
            expect: function(n, t, i, r) {
                return (n = this.peek(n, t, i, r)) ? (this.tokens.shift(), n) : !1
            },
            consume: function(n) {
                this.expect(n) || this.throwError("is unexpected, expecting [" + n + "]", this.peek())
            },
            unaryFn: function(n, t) {
                return c(function(i, r) {
                    return n(i, r, t)
                }, {
                    constant: t.constant
                })
            },
            ternaryFn: function(n, t, i) {
                return c(function(r, u) {
                    return n(r, u) ? t(r, u) : i(r, u)
                }, {
                    constant: n.constant && t.constant && i.constant
                })
            },
            binaryFn: function(n, t, i) {
                return c(function(r, u) {
                    return t(r, u, n, i)
                }, {
                    constant: n.constant && i.constant
                })
            },
            statements: function() {
                for (var n = [];;)
                    if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && n.push(this.filterChain()), !this.expect(";")) return 1 === n.length ? n[0] : function(t, i) {
                        for (var f, u, r = 0; r < n.length; r++) u = n[r], u && (f = u(t, i));
                        return f
                    }
            },
            filterChain: function() {
                for (var n = this.expression(), t;;)
                    if (t = this.expect("|")) n = this.binaryFn(n, t.fn, this.filter());
                    else return n
            },
            filter: function() {
                for (var i, t = this.expect(), r = this.$filter(t.text), n = [];;)
                    if (t = this.expect(":")) n.push(this.expression());
                    else return i = function(t, i, u) {
                            u = [u];
                            for (var f = 0; f < n.length; f++) u.push(n[f](t, i));
                            return r.apply(t, u)
                        },
                        function() {
                            return i
                        }
            },
            expression: function() {
                return this.assignment()
            },
            assignment: function() {
                var n = this.ternary(),
                    i, t;
                return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), i = this.ternary(), function(t, r) {
                    return n.assign(t, i(t, r), r)
                }) : n
            },
            ternary: function() {
                var n = this.logicalOR(),
                    t, i;
                if (this.expect("?")) {
                    if (t = this.assignment(), i = this.expect(":")) return this.ternaryFn(n, t, this.assignment());
                    this.throwError("expected :", i)
                } else return n
            },
            logicalOR: function() {
                for (var n = this.logicalAND(), t;;)
                    if (t = this.expect("||")) n = this.binaryFn(n, t.fn, this.logicalAND());
                    else return n
            },
            logicalAND: function() {
                var n = this.equality(),
                    t;
                return (t = this.expect("&&")) && (n = this.binaryFn(n, t.fn, this.logicalAND())), n
            },
            equality: function() {
                var n = this.relational(),
                    t;
                return (t = this.expect("==", "!=", "===", "!==")) && (n = this.binaryFn(n, t.fn, this.equality())), n
            },
            relational: function() {
                var n = this.additive(),
                    t;
                return (t = this.expect("<", ">", "<=", ">=")) && (n = this.binaryFn(n, t.fn, this.relational())), n
            },
            additive: function() {
                for (var n = this.multiplicative(), t; t = this.expect("+", "-");) n = this.binaryFn(n, t.fn, this.multiplicative());
                return n
            },
            multiplicative: function() {
                for (var n = this.unary(), t; t = this.expect("*", "/", "%");) n = this.binaryFn(n, t.fn, this.unary());
                return n
            },
            unary: function() {
                var n;
                return this.expect("+") ? this.primary() : (n = this.expect("-")) ? this.binaryFn(pi.ZERO, n.fn, this.unary()) : (n = this.expect("!")) ? this.unaryFn(n.fn, this.unary()) : this.primary()
            },
            fieldAccess: function(n) {
                var t = this,
                    i = this.expect().text,
                    r = ke(i, this.options, this.text);
                return c(function(t, i, u) {
                    return r(u || n(t, i))
                }, {
                    assign: function(r, u, f) {
                        return (f = n(r, f)) || n.assign(r, f = {}), tu(f, i, u, t.text, t.options)
                    }
                })
            },
            objectIndex: function(n) {
                var t = this,
                    r = this.expression();
                return this.consume("]"), c(function(u, f) {
                    var e = n(u, f),
                        s = we(r(u, f), t.text),
                        o;
                    return (ot(s, t.text), !e) ? i : ((e = st(e[s], t.text)) && e.then && t.options.unwrapPromises && (o = e, "$$v" in e || (o.$$v = i, o.then(function(n) {
                        o.$$v = n
                    })), e = e.$$v), e)
                }, {
                    assign: function(i, u, f) {
                        var e = ot(we(r(i, f), t.text), t.text);
                        return (f = st(n(i, f), t.text)) || n.assign(i, f = {}), f[e] = u
                    }
                })
            },
            functionCall: function(n, t) {
                var r = [],
                    i;
                if (")" !== this.peekToken().text)
                    do r.push(this.expression()); while (this.expect(","));
                return this.consume(")"), i = this,
                    function(u, f) {
                        for (var c, o = [], h = t ? t(u, f) : u, e = 0; e < r.length; e++) o.push(st(r[e](u, f), i.text));
                        if (e = n(u, f, h) || s, st(h, i.text), c = i.text, e) {
                            if (e.constructor === e) throw it("isecfn", c);
                            if (e === nl || e === tl || ho && e === ho) throw it("isecff", c);
                        }
                        return o = e.apply ? e.apply(h, o) : e(o[0], o[1], o[2], o[3], o[4]), st(o, i.text)
                    }
            },
            arrayDeclaration: function() {
                var n = [],
                    i = !0,
                    t;
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        t = this.expression();
                        n.push(t);
                        t.constant || (i = !1)
                    } while (this.expect(","));
                return this.consume("]"), c(function(t, i) {
                    for (var u = [], r = 0; r < n.length; r++) u.push(n[r](t, i));
                    return u
                }, {
                    literal: !0,
                    constant: i
                })
            },
            object: function() {
                var t = [],
                    r = !0,
                    n, i;
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        n = this.expect();
                        n = n.string || n.text;
                        this.consume(":");
                        i = this.expression();
                        t.push({
                            key: n,
                            value: i
                        });
                        i.constant || (r = !1)
                    } while (this.expect(","));
                return this.consume("}"), c(function(n, i) {
                    for (var f, u = {}, r = 0; r < t.length; r++) f = t[r], u[f.key] = f.value(n, i);
                    return u
                }, {
                    literal: !0,
                    constant: r
                })
            }
        };
        var rl = {},
            ul = {},
            ni = p("$sce"),
            rt = {
                HTML: "html",
                CSS: "css",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            },
            d = t.createElement("a"),
            co = bt(n.location.href, !0);
        ge.$inject = ["$provide"];
        no.$inject = ["$locale"];
        to.$inject = ["$locale"];
        var lo = ".",
            fl = {
                yyyy: k("FullYear", 4),
                yy: k("FullYear", 2, 0, !0),
                y: k("FullYear", 1),
                MMMM: iu("Month"),
                MMM: iu("Month", !0),
                MM: k("Month", 2, 1),
                M: k("Month", 1, 1),
                dd: k("Date", 2),
                d: k("Date", 1),
                HH: k("Hours", 2),
                H: k("Hours", 1),
                hh: k("Hours", 2, -12),
                h: k("Hours", 1, -12),
                mm: k("Minutes", 2),
                m: k("Minutes", 1),
                ss: k("Seconds", 2),
                s: k("Seconds", 1),
                sss: k("Milliseconds", 3),
                EEEE: iu("Day"),
                EEE: iu("Day", !0),
                a: function(n, t) {
                    return 12 > n.getHours() ? t.AMPMS[0] : t.AMPMS[1]
                },
                Z: function(n) {
                    return n = -1 * n.getTimezoneOffset(), (0 <= n ? "+" : "") + (uf(Math[0 < n ? "floor" : "ceil"](n / 60), 2) + uf(Math.abs(n % 60), 2))
                }
            },
            el = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
            ol = /^\-?\d+$/;
        ro.$inject = ["$locale"];
        ao = nt(v);
        vo = nt(vi);
        uo.$inject = ["$parse"];
        yo = nt({
            restrict: "E",
            compile: function(n, i) {
                return 8 >= y && (i.href || i.name || i.$set("href", ""), n.append(t.createComment("IE fix"))), !i.href && !i.xlinkHref && !i.name ? function(n, t) {
                    var i = "[object SVGAnimatedString]" === ei.call(t.prop("href")) ? "xlink:href" : "href";
                    t.on("click", function(n) {
                        t.attr(i) || n.preventDefault()
                    })
                } : void 0
            }
        });
        eu = {};
        r(hr, function(n, t) {
            if ("multiple" != n) {
                var i = at("ng-" + t);
                eu[i] = function() {
                    return {
                        priority: 100,
                        link: function(n, r, u) {
                            n.$watch(u[i], function(n) {
                                u.$set(t, !!n)
                            })
                        }
                    }
                }
            }
        });
        r(["src", "srcset", "href"], function(n) {
            var t = at("ng-" + n);
            eu[t] = function() {
                return {
                    priority: 99,
                    link: function(i, r, u) {
                        var e = n,
                            f = n;
                        "href" === n && "[object SVGAnimatedString]" === ei.call(r.prop("href")) && (f = "xlinkHref", u.$attr[f] = "xlink:href", e = null);
                        u.$observe(t, function(t) {
                            t ? (u.$set(f, t), y && e && r.prop(e, u[f])) : "href" === n && u.$set(f, null)
                        })
                    }
                }
            }
        });
        ar = {
            $addControl: s,
            $removeControl: s,
            $setValidity: s,
            $setDirty: s,
            $setPristine: s
        };
        fo.$inject = ["$element", "$attrs", "$scope", "$animate"];
        var po = function(n) {
                return ["$timeout", function(t) {
                    return {
                        name: "form",
                        restrict: n ? "EAC" : "E",
                        controller: fo,
                        compile: function() {
                            return {
                                pre: function(n, r, u, f) {
                                    var o, s, e;
                                    if (!u.action) {
                                        o = function(n) {
                                            n.preventDefault ? n.preventDefault() : n.returnValue = !1
                                        };
                                        fu(r[0], "submit", o);
                                        r.on("$destroy", function() {
                                            t(function() {
                                                sr(r[0], "submit", o)
                                            }, 0, !1)
                                        })
                                    }
                                    if (s = r.parent().controller("form"), e = u.name || u.ngForm, e && tu(n, e, f, e), s) r.on("$destroy", function() {
                                        s.$removeControl(f);
                                        e && tu(n, e, i, e);
                                        c(f, ar)
                                    })
                                }
                            }
                        }
                    }
                }]
            },
            sl = po(),
            hl = po(!0),
            cl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            ll = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            al = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            wo = {
                text: ru,
                number: function(n, t, r, u, f, e) {
                    ru(n, t, r, u, f, e);
                    u.$parsers.push(function(n) {
                        var t = u.$isEmpty(n);
                        return t || al.test(n) ? (u.$setValidity("number", !0), "" === n ? null : t ? n : parseFloat(n)) : (u.$setValidity("number", !1), i)
                    });
                    nc(u, "number", vl, null, u.$$validityState);
                    u.$formatters.push(function(n) {
                        return u.$isEmpty(n) ? "" : "" + n
                    });
                    r.min && (n = function(n) {
                        var t = parseFloat(r.min);
                        return yt(u, "min", u.$isEmpty(n) || n >= t, n)
                    }, u.$parsers.push(n), u.$formatters.push(n));
                    r.max && (n = function(n) {
                        var t = parseFloat(r.max);
                        return yt(u, "max", u.$isEmpty(n) || n <= t, n)
                    }, u.$parsers.push(n), u.$formatters.push(n));
                    u.$formatters.push(function(n) {
                        return yt(u, "number", u.$isEmpty(n) || yr(n), n)
                    })
                },
                url: function(n, t, i, r, u, f) {
                    ru(n, t, i, r, u, f);
                    n = function(n) {
                        return yt(r, "url", r.$isEmpty(n) || cl.test(n), n)
                    };
                    r.$formatters.push(n);
                    r.$parsers.push(n)
                },
                email: function(n, t, i, r, u, f) {
                    ru(n, t, i, r, u, f);
                    n = function(n) {
                        return yt(r, "email", r.$isEmpty(n) || ll.test(n), n)
                    };
                    r.$formatters.push(n);
                    r.$parsers.push(n)
                },
                radio: function(n, t, i, r) {
                    l(i.name) && t.attr("name", vr());
                    t.on("click", function() {
                        t[0].checked && n.$apply(function() {
                            r.$setViewValue(i.value)
                        })
                    });
                    r.$render = function() {
                        t[0].checked = i.value == r.$viewValue
                    };
                    i.$observe("value", r.$render)
                },
                checkbox: function(n, t, i, r) {
                    var u = i.ngTrueValue,
                        f = i.ngFalseValue;
                    e(u) || (u = !0);
                    e(f) || (f = !1);
                    t.on("click", function() {
                        n.$apply(function() {
                            r.$setViewValue(t[0].checked)
                        })
                    });
                    r.$render = function() {
                        t[0].checked = r.$viewValue
                    };
                    r.$isEmpty = function(n) {
                        return n !== u
                    };
                    r.$formatters.push(function(n) {
                        return n === u
                    });
                    r.$parsers.push(function(n) {
                        return n ? u : f
                    })
                },
                hidden: s,
                button: s,
                submit: s,
                reset: s,
                file: s
            },
            vl = ["badInput"],
            bo = ["$browser", "$sniffer", function(n, t) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function(i, r, u, f) {
                        f && (wo[v(u.type)] || wo.text)(i, r, u, f, t, n)
                    }
                }
            }],
            ou = "ng-valid",
            su = "ng-invalid",
            wi = "ng-pristine",
            hu = "ng-dirty",
            yl = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(n, t, i, u, f, e) {
                function h(n, t) {
                    t = t ? "-" + br(t, "-") : "";
                    e.removeClass(u, (n ? su : ou) + t);
                    e.addClass(u, (n ? ou : su) + t)
                }
                var c, a, o;
                if (this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = i.name, c = f(i.ngModel), a = c.assign, !a) throw p("ngModel")("nonassign", i.ngModel, et(u));
                this.$render = s;
                this.$isEmpty = function(n) {
                    return l(n) || "" === n || null === n || n !== n
                };
                var w = u.inheritedData("$formController") || ar,
                    v = 0,
                    y = this.$error = {};
                u.addClass(wi);
                h(!0);
                this.$setValidity = function(n, t) {
                    y[n] !== !t && (t ? (y[n] && v--, v || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, v++), y[n] = !t, h(t, n), w.$setValidity(n, t, this))
                };
                this.$setPristine = function() {
                    this.$dirty = !1;
                    this.$pristine = !0;
                    e.removeClass(u, hu);
                    e.addClass(u, wi)
                };
                this.$setViewValue = function(i) {
                    this.$viewValue = i;
                    this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(u, wi), e.addClass(u, hu), w.$setDirty());
                    r(this.$parsers, function(n) {
                        i = n(i)
                    });
                    this.$modelValue !== i && (this.$modelValue = i, a(n, i), r(this.$viewChangeListeners, function(n) {
                        try {
                            n()
                        } catch (i) {
                            t(i)
                        }
                    }))
                };
                o = this;
                n.$watch(function() {
                    var t = c(n),
                        i, r;
                    if (o.$modelValue !== t) {
                        for (i = o.$formatters, r = i.length, o.$modelValue = t; r--;) t = i[r](t);
                        o.$viewValue !== t && (o.$viewValue = t, o.$render())
                    }
                    return t
                })
            }],
            pl = function() {
                return {
                    require: ["ngModel", "^?form"],
                    controller: yl,
                    link: function(n, t, i, r) {
                        var u = r[0],
                            f = r[1] || ar;
                        f.$addControl(u);
                        n.$on("$destroy", function() {
                            f.$removeControl(u)
                        })
                    }
                }
            },
            wl = nt({
                require: "ngModel",
                link: function(n, t, i, r) {
                    r.$viewChangeListeners.push(function() {
                        n.$eval(i.ngChange)
                    })
                }
            }),
            ko = function() {
                return {
                    require: "?ngModel",
                    link: function(n, t, i, r) {
                        if (r) {
                            i.required = !0;
                            var u = function(n) {
                                if (i.required && r.$isEmpty(n)) r.$setValidity("required", !1);
                                else return r.$setValidity("required", !0), n
                            };
                            r.$formatters.push(u);
                            r.$parsers.unshift(u);
                            i.$observe("required", function() {
                                u(r.$viewValue)
                            })
                        }
                    }
                }
            },
            bl = function() {
                return {
                    require: "ngModel",
                    link: function(n, t, u, f) {
                        var e = (n = /\/(.*)\//.exec(u.ngList)) && RegExp(n[1]) || u.ngList || ",";
                        f.$parsers.push(function(n) {
                            if (!l(n)) {
                                var t = [];
                                return n && r(n.split(e), function(n) {
                                    n && t.push(g(n))
                                }), t
                            }
                        });
                        f.$formatters.push(function(n) {
                            return o(n) ? n.join(", ") : i
                        });
                        f.$isEmpty = function(n) {
                            return !n || !n.length
                        }
                    }
                }
            },
            kl = /^(true|false|\d+)$/,
            dl = function() {
                return {
                    priority: 100,
                    compile: function(n, t) {
                        return kl.test(t.ngValue) ? function(n, t, i) {
                            i.$set("value", n.$eval(i.ngValue))
                        } : function(n, t, i) {
                            n.$watch(i.ngValue, function(n) {
                                i.$set("value", n)
                            })
                        }
                    }
                }
            },
            gl = kt({
                compile: function(n) {
                    return n.addClass("ng-binding"),
                        function(n, t, r) {
                            t.data("$binding", r.ngBind);
                            n.$watch(r.ngBind, function(n) {
                                t.text(n == i ? "" : n)
                            })
                        }
                }
            }),
            na = ["$interpolate", function(n) {
                return function(t, i, r) {
                    t = n(i.attr(r.$attr.ngBindTemplate));
                    i.addClass("ng-binding").data("$binding", t);
                    r.$observe("ngBindTemplate", function(n) {
                        i.text(n)
                    })
                }
            }],
            ta = ["$sce", "$parse", function(n, t) {
                return {
                    compile: function(i) {
                        return i.addClass("ng-binding"),
                            function(i, r, u) {
                                r.data("$binding", u.ngBindHtml);
                                var f = t(u.ngBindHtml);
                                i.$watch(function() {
                                    return (f(i) || "").toString()
                                }, function() {
                                    r.html(n.getTrustedHtml(f(i)) || "")
                                })
                            }
                    }
                }
            }],
            ia = ff("", !0),
            ra = ff("Odd", 0),
            ua = ff("Even", 1),
            fa = kt({
                compile: function(n, t) {
                    t.$set("ngCloak", i);
                    n.removeClass("ng-cloak")
                }
            }),
            ea = [function() {
                return {
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }],
            go = {},
            oa = {
                blur: !0,
                focus: !0
            };
        r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(n) {
            var t = at("ng-" + n);
            go[t] = ["$parse", "$rootScope", function(i, r) {
                return {
                    compile: function(u, f) {
                        var e = i(f[t], !0);
                        return function(t, i) {
                            i.on(n, function(i) {
                                var u = function() {
                                    e(t, {
                                        $event: i
                                    })
                                };
                                oa[n] && r.$$phase ? t.$evalAsync(u) : t.$apply(u)
                            })
                        }
                    }
                }
            }]
        });
        var sa = ["$animate", function(n) {
                return {
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(i, r, u, f, e) {
                        var h, o, s;
                        i.$watch(u.ngIf, function(f) {
                            gi(f) ? o || (o = i.$new(), e(o, function(i) {
                                i[i.length++] = t.createComment(" end ngIf: " + u.ngIf + " ");
                                h = {
                                    clone: i
                                };
                                n.enter(i, r.parent(), r)
                            })) : (s && (s.remove(), s = null), o && (o.$destroy(), o = null), h && (s = vu(h.clone), n.leave(s, function() {
                                s = null
                            }), h = null))
                        })
                    }
                }
            }],
            ha = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(n, t, i, r, u) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: ur.noop,
                    compile: function(e, o) {
                        var h = o.ngInclude || o.src,
                            c = o.onload || "",
                            s = o.autoscroll;
                        return function(e, o, l, a, v) {
                            var b = 0,
                                y, p, w, k = function() {
                                    p && (p.remove(), p = null);
                                    y && (y.$destroy(), y = null);
                                    w && (r.leave(w, function() {
                                        p = null
                                    }), p = w, w = null)
                                };
                            e.$watch(u.parseAsResourceUrl(h), function(u) {
                                var l = function() {
                                        f(s) && (!s || e.$eval(s)) && i()
                                    },
                                    h = ++b;
                                u ? (n.get(u, {
                                    cache: t
                                }).success(function(n) {
                                    if (h === b) {
                                        var t = e.$new();
                                        a.template = n;
                                        n = v(t, function(n) {
                                            k();
                                            r.enter(n, null, o, l)
                                        });
                                        y = t;
                                        w = n;
                                        y.$emit("$includeContentLoaded");
                                        e.$eval(c)
                                    }
                                }).error(function() {
                                    h === b && k()
                                }), e.$emit("$includeContentRequested")) : (k(), a.template = null)
                            })
                        }
                    }
                }
            }],
            ca = ["$compile", function(n) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(t, i, r, u) {
                        i.html(u.template);
                        n(i.contents())(t)
                    }
                }
            }],
            la = kt({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(n, t, i) {
                            n.$eval(i.ngInit)
                        }
                    }
                }
            }),
            aa = kt({
                terminal: !0,
                priority: 1e3
            }),
            va = ["$locale", "$interpolate", function(n, t) {
                var i = /{}/g;
                return {
                    restrict: "EA",
                    link: function(u, f, e) {
                        var s = e.count,
                            l = e.$attr.when && f.attr(e.$attr.when),
                            h = e.offset || 0,
                            o = u.$eval(l) || {},
                            c = {},
                            a = t.startSymbol(),
                            y = t.endSymbol(),
                            p = /^when(Minus)?(.+)$/;
                        r(e, function(n, t) {
                            p.test(t) && (o[v(t.replace("when", "").replace("Minus", "-"))] = f.attr(e.$attr[t]))
                        });
                        r(o, function(n, r) {
                            c[r] = t(n.replace(i, a + s + "-" + h + y))
                        });
                        u.$watch(function() {
                            var t = parseFloat(u.$eval(s));
                            return isNaN(t) ? "" : (t in o || (t = n.pluralCat(t - h)), c[t](u, f, !0))
                        }, function(n) {
                            f.text(n)
                        })
                    }
                }
            }],
            ya = ["$parse", "$animate", function(n, i) {
                var f = p("ngRepeat");
                return {
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    link: function(e, o, s, h, c) {
                        var y = s.ngRepeat,
                            l = y.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                            k, w, d, g, b, v, p = {
                                $id: li
                            },
                            a;
                        if (!l) throw f("iexp", y);
                        if (s = l[1], h = l[2], (l = l[3]) ? (k = n(l), w = function(n, t, i) {
                                return v && (p[v] = n), p[b] = t, p.$index = i, k(e, p)
                            }) : (d = function(n, t) {
                                return li(t)
                            }, g = function(n) {
                                return n
                            }), l = s.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !l) throw f("iidexp", s);
                        b = l[3] || l[1];
                        v = l[2];
                        a = {};
                        e.$watchCollection(h, function(n) {
                            var s, ft, it = o[0],
                                l, rt = {},
                                ot, p, k, ut, et, nt, h, tt = [];
                            if (bi(n)) nt = n, et = w || d;
                            else {
                                et = w || g;
                                nt = [];
                                for (k in n) n.hasOwnProperty(k) && "$" != k.charAt(0) && nt.push(k);
                                nt.sort()
                            }
                            for (ot = nt.length, ft = tt.length = nt.length, s = 0; s < ft; s++)
                                if (k = n === nt ? s : nt[s], ut = n[k], l = et(k, ut, s), ri(l, "`track by` id"), a.hasOwnProperty(l)) h = a[l], delete a[l], rt[l] = h, tt[s] = h;
                                else {
                                    if (rt.hasOwnProperty(l)) throw r(tt, function(n) {
                                        n && n.scope && (a[n.id] = n)
                                    }), f("dupes", y, l, ct(ut));
                                    tt[s] = {
                                        id: l
                                    };
                                    rt[l] = !1
                                }
                            for (k in a) a.hasOwnProperty(k) && (h = a[k], s = vu(h.clone), i.leave(s), r(s, function(n) {
                                n.$$NG_REMOVED = !0
                            }), h.scope.$destroy());
                            for (s = 0, ft = nt.length; s < ft; s++) {
                                if (k = n === nt ? s : nt[s], ut = n[k], h = tt[s], tt[s - 1] && (it = tt[s - 1].clone[tt[s - 1].clone.length - 1]), h.scope) {
                                    p = h.scope;
                                    l = it;
                                    do l = l.nextSibling; while (l && l.$$NG_REMOVED);
                                    h.clone[0] != l && i.move(vu(h.clone), null, u(it));
                                    it = h.clone[h.clone.length - 1]
                                } else p = e.$new();
                                p[b] = ut;
                                v && (p[v] = k);
                                p.$index = s;
                                p.$first = 0 === s;
                                p.$last = s === ot - 1;
                                p.$middle = !(p.$first || p.$last);
                                p.$odd = !(p.$even = 0 == (s & 1));
                                h.scope || c(p, function(n) {
                                    n[n.length++] = t.createComment(" end ngRepeat: " + y + " ");
                                    i.enter(n, null, u(it));
                                    it = n;
                                    h.scope = p;
                                    h.clone = n;
                                    rt[h.id] = h
                                })
                            }
                            a = rt
                        })
                    }
                }
            }],
            pa = ["$animate", function(n) {
                return function(t, i, r) {
                    t.$watch(r.ngShow, function(t) {
                        n[gi(t) ? "removeClass" : "addClass"](i, "ng-hide")
                    })
                }
            }],
            wa = ["$animate", function(n) {
                return function(t, i, r) {
                    t.$watch(r.ngHide, function(t) {
                        n[gi(t) ? "addClass" : "removeClass"](i, "ng-hide")
                    })
                }
            }],
            ba = kt(function(n, t, i) {
                n.$watch(i.ngStyle, function(n, i) {
                    i && n !== i && r(i, function(n, i) {
                        t.css(i, "")
                    });
                    n && t.css(n)
                }, !0)
            }),
            ka = ["$animate", function(n) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope", function() {
                        this.cases = {}
                    }],
                    link: function(t, i, u, f) {
                        var h = [],
                            s = [],
                            e = [],
                            o = [];
                        t.$watch(u.ngSwitch || u.on, function(i) {
                            for (var a, c = 0, l = e.length; c < l; ++c) e[c].remove();
                            for (c = e.length = 0, l = o.length; c < l; ++c) a = s[c], o[c].$destroy(), e[c] = a, n.leave(a, function() {
                                e.splice(c, 1)
                            });
                            s.length = 0;
                            o.length = 0;
                            (h = f.cases["!" + i] || f.cases["?"]) && (t.$eval(u.change), r(h, function(i) {
                                var r = t.$new();
                                o.push(r);
                                i.transclude(r, function(t) {
                                    var r = i.element;
                                    s.push(t);
                                    n.enter(t, r.parent(), r)
                                })
                            }))
                        })
                    }
                }
            }],
            da = kt({
                transclude: "element",
                priority: 800,
                require: "^ngSwitch",
                link: function(n, t, i, r, u) {
                    r.cases["!" + i.ngSwitchWhen] = r.cases["!" + i.ngSwitchWhen] || [];
                    r.cases["!" + i.ngSwitchWhen].push({
                        transclude: u,
                        element: t
                    })
                }
            }),
            ga = kt({
                transclude: "element",
                priority: 800,
                require: "^ngSwitch",
                link: function(n, t, i, r, u) {
                    r.cases["?"] = r.cases["?"] || [];
                    r.cases["?"].push({
                        transclude: u,
                        element: t
                    })
                }
            }),
            nv = kt({
                link: function(n, t, i, r, u) {
                    if (!u) throw p("ngTransclude")("orphan", et(t));
                    u(function(n) {
                        t.empty();
                        t.append(n)
                    })
                }
            }),
            tv = ["$templateCache", function(n) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(t, i) {
                        "text/ng-template" == i.type && n.put(i.id, t[0].text)
                    }
                }
            }],
            iv = p("ngOptions"),
            rv = nt({
                terminal: !0
            }),
            uv = ["$compile", "$parse", function(n, e) {
                var h = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                    c = {
                        $setViewValue: s
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs", function(n, t, i) {
                        var r = this,
                            f = {},
                            e = c,
                            u;
                        r.databound = i.ngModel;
                        r.init = function(n, t, i) {
                            e = n;
                            u = i
                        };
                        r.addOption = function(t) {
                            ri(t, '"option value"');
                            f[t] = !0;
                            e.$viewValue == t && (n.val(t), u.parent() && u.remove())
                        };
                        r.removeOption = function(n) {
                            this.hasOption(n) && (delete f[n], e.$viewValue == n && this.renderUnknownOption(n))
                        };
                        r.renderUnknownOption = function(t) {
                            t = "? " + li(t) + " ?";
                            u.val(t);
                            n.prepend(u);
                            n.val(t);
                            u.prop("selected", !0)
                        };
                        r.hasOption = function(n) {
                            return f.hasOwnProperty(n)
                        };
                        t.$on("$destroy", function() {
                            r.renderUnknownOption = s
                        })
                    }],
                    link: function(s, c, a, v) {
                        function rt(n, t, i, r) {
                            i.$render = function() {
                                var n = i.$viewValue;
                                r.hasOption(n) ? (k.parent() && k.remove(), t.val(n), "" === n && nt.prop("selected", !0)) : l(n) && nt ? t.val("") : r.renderUnknownOption(n)
                            };
                            t.on("change", function() {
                                n.$apply(function() {
                                    k.parent() && k.remove();
                                    i.$setViewValue(t.val())
                                })
                            })
                        }

                        function ut(n, t, i) {
                            var u;
                            i.$render = function() {
                                var n = new ir(i.$viewValue);
                                r(t.find("option"), function(t) {
                                    t.selected = f(n.get(t.value))
                                })
                            };
                            n.$watch(function() {
                                ti(u, i.$viewValue) || (u = ft(i.$viewValue), i.$render())
                            });
                            t.on("change", function() {
                                n.$apply(function() {
                                    var n = [];
                                    r(t.find("option"), function(t) {
                                        t.selected && n.push(t.value)
                                    });
                                    i.$setViewValue(n)
                                })
                            })
                        }

                        function ot(t, r, u) {
                            function k() {
                                var ot = {
                                        "": []
                                    },
                                    ct = [""],
                                    n, h, g, ut, i, et, ht, c, e, k, ft;
                                if (g = u.$modelValue, ut = nt(t) || [], et = a ? lf(ut) : ut, c = {}, e = !1, w)
                                    if (h = u.$modelValue, s && o(h))
                                        for (e = new ir([]), n = {}, i = 0; i < h.length; i++) n[l] = h[i], e.put(s(t, n), h[i]);
                                    else e = new ir(h);
                                for (i = e, e = 0; ht = et.length, e < ht; e++) {
                                    if (h = e, a) {
                                        if (h = et[e], "$" === h.charAt(0)) continue;
                                        c[a] = h
                                    }
                                    c[l] = ut[h];
                                    n = rt(t, c) || "";
                                    (h = ot[n]) || (h = ot[n] = [], ct.push(n));
                                    w ? n = f(i.remove(s ? s(t, c) : d(t, c))) : (s ? (n = {}, n[l] = g, n = s(t, n) === s(t, c)) : n = g === d(t, c), i = i || n);
                                    k = it(t, c);
                                    k = f(k) ? k : "";
                                    h.push({
                                        id: s ? s(t, c) : a ? et[e] : e,
                                        label: k,
                                        selected: n
                                    })
                                }
                                for (w || (p || null === g ? ot[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !i
                                    }) : i || ot[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), c = 0, et = ct.length; c < et; c++) {
                                    for (n = ct[c], h = ot[n], v.length <= c ? (g = {
                                            element: st.clone().attr("label", n),
                                            label: h.label
                                        }, ut = [g], v.push(ut), r.append(g.element)) : (ut = v[c], g = ut[0], g.label != n && g.element.attr("label", g.label = n)), k = null, e = 0, ht = h.length; e < ht; e++) n = h[e], (i = ut[e + 1]) ? (k = i.element, i.label !== n.label && (k.text(i.label = n.label), k.prop("label", i.label)), i.id !== n.id && k.val(i.id = n.id), k[0].selected !== n.selected && (k.prop("selected", i.selected = n.selected), y && k.prop("selected", i.selected))) : ("" === n.id && p ? ft = p : (ft = tt.clone()).val(n.id).prop("selected", n.selected).attr("selected", n.selected).prop("label", n.label).text(n.label), ut.push({
                                        element: ft,
                                        label: n.label,
                                        id: n.id,
                                        selected: n.selected
                                    }), b.addOption(n.label, ft), k ? k.after(ft) : g.element.append(ft), k = ft);
                                    for (e++; ut.length > e;) n = ut.pop(), b.removeOption(n.label), n.element.remove()
                                }
                                for (; v.length > c;) v.pop()[0].element.remove()
                            }
                            var c;
                            if (!(c = g.match(h))) throw iv("iexp", g, et(r));
                            var it = e(c[2] || c[1]),
                                l = c[4] || c[6],
                                a = c[5],
                                rt = e(c[3] || ""),
                                d = e(c[2] ? c[1] : l),
                                nt = e(c[7]),
                                s = c[8] ? e(c[8]) : null,
                                v = [
                                    [{
                                        element: r,
                                        label: ""
                                    }]
                                ];
                            p && (n(p)(t), p.removeClass("ng-scope"), p.remove());
                            r.empty();
                            r.on("change", function() {
                                t.$apply(function() {
                                    var p, h = nt(t) || [],
                                        f = {},
                                        n, o, c, y, b, g, e;
                                    if (w) {
                                        for (o = [], y = 0, g = v.length; y < g; y++)
                                            for (p = v[y], c = 1, b = p.length; c < b; c++)
                                                if ((n = p[c].element)[0].selected) {
                                                    if (n = n.val(), a && (f[a] = n), s)
                                                        for (e = 0; e < h.length && (f[l] = h[e], s(t, f) != n); e++);
                                                    else f[l] = h[n];
                                                    o.push(d(t, f))
                                                }
                                    } else if (n = r.val(), "?" == n) o = i;
                                    else if ("" === n) o = null;
                                    else if (s) {
                                        for (e = 0; e < h.length; e++)
                                            if (f[l] = h[e], s(t, f) == n) {
                                                o = d(t, f);
                                                break
                                            }
                                    } else f[l] = h[n], a && (f[a] = n), o = d(t, f);
                                    u.$setViewValue(o);
                                    k()
                                })
                            });
                            u.$render = k;
                            t.$watchCollection(nt, k);
                            t.$watchCollection(function() {
                                var r = {},
                                    n = nt(t);
                                if (n) {
                                    for (var u = Array(n.length), i = 0, f = n.length; i < f; i++) r[l] = n[i], u[i] = it(t, r);
                                    return u
                                }
                            }, k);
                            w && t.$watchCollection(function() {
                                return u.$modelValue
                            }, k)
                        }
                        var b, d, it;
                        if (v[1]) {
                            b = v[0];
                            v = v[1];
                            var w = a.multiple,
                                g = a.ngOptions,
                                p = !1,
                                nt, tt = u(t.createElement("option")),
                                st = u(t.createElement("optgroup")),
                                k = tt.clone();
                            for (a = 0, d = c.children(), it = d.length; a < it; a++)
                                if ("" === d[a].value) {
                                    nt = p = d.eq(a);
                                    break
                                }
                            b.init(v, p, k);
                            w && (v.$isEmpty = function(n) {
                                return !n || 0 === n.length
                            });
                            g ? ot(s, c, v) : w ? ut(s, c, v) : rt(s, c, v, b)
                        }
                    }
                }
            }],
            fv = ["$interpolate", function(n) {
                var t = {
                    addOption: s,
                    removeOption: s
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(i, r) {
                        if (l(r.value)) {
                            var u = n(i.text(), !0);
                            u || r.$set("value", i.text())
                        }
                        return function(n, i, r) {
                            var e = i.parent(),
                                f = e.data("$selectController") || e.parent().data("$selectController");
                            f && f.databound ? i.prop("selected", !1) : f = t;
                            u ? n.$watch(u, function(n, t) {
                                r.$set("value", n);
                                n !== t && f.removeOption(t);
                                f.addOption(n)
                            }) : f.addOption(r.value);
                            i.on("$destroy", function() {
                                f.removeOption(r.value)
                            })
                        }
                    }
                }
            }],
            ev = nt({
                restrict: "E",
                terminal: !0
            });
        n.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((fi = n.jQuery) && fi.fn.on ? (u = fi, c(fi.fn, {
            scope: oi.scope,
            isolateScope: oi.isolateScope,
            controller: oi.controller,
            injector: oi.injector,
            inheritedData: oi.inheritedData
        }), yu("remove", !0, !0, !1), yu("empty", !1, !1, !1), yu("html", !1, !1, !0)) : u = w, ur.element = u, es(ur), u(t).ready(function() {
            us(t, kf)
        }))
    }(window, document);
window.angular.$$csp() || window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}<\/style>'),
    function(n, t, i) {
        "use strict";

        function k(n) {
            var i = [];
            return o(i, t.noop).chars(n), i.join("")
        }

        function r(n) {
            var i = {},
                t;
            for (n = n.split(","), t = 0; t < n.length; t++) i[n[t]] = !0;
            return i
        }

        function d(n, i) {
            function k(n, r, e, s) {
                if (r = t.lowercase(r), v[r])
                    for (; u.last() && y[u.last()];) o("", u.last());
                a[r] && u.last() == r && o("", r);
                (s = l[r] || !!s) || u.push(r);
                var h = {};
                e.replace(nt, function(n, t, i, r, u) {
                    h[t] = f(i || r || u || "")
                });
                i.start && i.start(r, h, s)
            }

            function o(n, r) {
                var f = 0,
                    e;
                if (r = t.lowercase(r))
                    for (f = u.length - 1; 0 <= f && u[f] != r; f--);
                if (0 <= f) {
                    for (e = u.length - 1; e >= f; e--) i.end && i.end(u[e]);
                    u.length = f
                }
            }
            "string" != typeof n && (n = null === n || "undefined" == typeof n ? "" : "" + n);
            var r, e, u = [],
                b = n,
                w;
            for (u.last = function() {
                    return u[u.length - 1]
                }; n;) {
                if (w = "", e = !0, u.last() && p[u.last()] ? (n = n.replace(RegExp("(.*)<\\s*\\/\\s*" + u.last() + "[^>]*>", "i"), function(n, t) {
                        return t = t.replace(rt, "$1").replace(ut, "$1"), i.chars && i.chars(f(t)), ""
                    }), o("", u.last())) : (0 === n.indexOf("<!--") ? (r = n.indexOf("--", 4), 0 <= r && n.lastIndexOf("-->", r) === r && (i.comment && i.comment(n.substring(4, r)), n = n.substring(r + 3), e = !1)) : c.test(n) ? (r = n.match(c)) && (n = n.replace(r[0], ""), e = !1) : it.test(n) ? (r = n.match(h)) && (n = n.substring(r[0].length), r[0].replace(h, o), e = !1) : tt.test(n) && ((r = n.match(s)) ? (r[4] && (n = n.substring(r[0].length), r[0].replace(s, k)), e = !1) : (w += "<", n = n.substring(1))), e && (r = n.indexOf("<"), w += 0 > r ? n : n.substring(0, r), n = 0 > r ? "" : n.substring(r), i.chars && i.chars(f(w)))), n == b) throw g("badparse", n);
                b = n
            }
            o()
        }

        function f(n) {
            var t, i;
            return n ? (t = st.exec(n), n = t[1], i = t[3], (t = t[2]) && (u.innerHTML = t.replace(/</g, "&lt;"), t = "textContent" in u ? u.textContent : u.innerText), n + t + i) : ""
        }

        function e(n) {
            return n.replace(/&/g, "&amp;").replace(ft, function(n) {
                var t = n.charCodeAt(0);
                return n = n.charCodeAt(1), "&#" + (1024 * (t - 55296) + (n - 56320) + 65536) + ";"
            }).replace(et, function(n) {
                return "&#" + n.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function o(n, i) {
            var u = !1,
                r = t.bind(n, n.push);
            return {
                start: function(n, f, o) {
                    n = t.lowercase(n);
                    !u && p[n] && (u = n);
                    u || !0 !== w[n] || (r("<"), r(n), t.forEach(f, function(u, f) {
                        var o = t.lowercase(f),
                            s = "img" === n && "src" === o || "background" === o;
                        !0 === ot[o] && (!0 !== b[o] || i(u, s)) && (r(" "), r(f), r('="'), r(e(u)), r('"'))
                    }), r(o ? "/>" : ">"))
                },
                end: function(n) {
                    n = t.lowercase(n);
                    u || !0 !== w[n] || (r("<\/"), r(n), r(">"));
                    n == u && (u = !1)
                },
                chars: function(n) {
                    u || r(e(n))
                }
            }
        }
        var g = t.$$minErr("$sanitize"),
            s = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
            h = /^<\/\s*([\w:-]+)[^>]*>/,
            nt = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            tt = /^</,
            it = /^<\//,
            rt = /\x3c!--(.*?)--\x3e/g,
            c = /<!DOCTYPE([^>]*?)>/i,
            ut = /<!\[CDATA\[(.*?)]]\x3e/g,
            ft = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            et = /([^\#-~| |!])/g,
            l = r("area,br,col,hr,img,wbr");
        n = r("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
        i = r("rp,rt");
        var a = t.extend({}, i, n),
            v = t.extend({}, n, r("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            y = t.extend({}, i, r("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            p = r("script,style"),
            w = t.extend({}, l, v, y, a),
            b = r("background,cite,href,longdesc,src"),
            ot = t.extend({}, b, r("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
            u = document.createElement("pre"),
            st = /^(\s*)([\s\S]*?)(\s*)$/;
        t.module("ngSanitize", []).provider("$sanitize", function() {
            this.$get = ["$$sanitizeUri", function(n) {
                return function(t) {
                    var i = [];
                    return d(t, o(i, function(t, i) {
                        return !/^unsafe/.test(n(t, i))
                    })), i.join("")
                }
            }]
        });
        t.module("ngSanitize").filter("linky", ["$sanitize", function(n) {
            var i = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,
                r = /^mailto:/;
            return function(u, f) {
                function c(n) {
                    n && e.push(k(n))
                }

                function a(n, i) {
                    e.push("<a ");
                    t.isDefined(f) && (e.push('target="'), e.push(f), e.push('" '));
                    e.push('href="', n.replace('"', "&quot;"), '">');
                    c(i);
                    e.push("<\/a>")
                }
                if (!u) return u;
                for (var o, s = u, e = [], h, l; o = s.match(i);) h = o[0], o[2] == o[3] && (h = "mailto:" + h), l = o.index, c(s.substr(0, l)), a(h, o[0].replace(r, "")), s = s.substring(l + o[0].length);
                return c(s), n(e.join(""))
            }
        }])
    }(window, window.angular),
    function(n, t) {
        "use strict";

        function i(n, i, r, u, f) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                compile: function(e, o, s) {
                    return function(e, o, h) {
                        function v() {
                            c && (c.$destroy(), c = null);
                            l && (f.leave(l), l = null)
                        }

                        function y() {
                            var h = n.current && n.current.locals,
                                w = h && h.$template,
                                y;
                            w ? (y = e.$new(), s(y, function(s) {
                                var d, b, k;
                                s.html(w);
                                f.enter(s, null, l || o, function() {
                                    t.isDefined(a) && (!a || e.$eval(a)) && i()
                                });
                                v();
                                d = r(s.contents());
                                b = n.current;
                                c = b.scope = y;
                                l = s;
                                b.controller && (h.$scope = c, k = u(b.controller, h), b.controllerAs && (c[b.controllerAs] = k), s.data("$ngControllerController", k), s.children().data("$ngControllerController", k));
                                d(c);
                                c.$emit("$viewContentLoaded");
                                c.$eval(p)
                            })) : v()
                        }
                        var c, l, a = h.autoscroll,
                            p = h.onload || "";
                        e.$on("$routeChangeSuccess", y);
                        y()
                    }
                }
            }
        }
        n = t.module("ngRoute", ["ng"]).provider("$route", function() {
            function i(n, i) {
                return t.extend(new(t.extend(function() {}, {
                    prototype: n
                })), i)
            }

            function r(n, t) {
                var r = t.caseInsensitiveMatch,
                    i = {
                        originalPath: n,
                        regexp: n
                    },
                    u = i.keys = [];
                return n = n.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g, function(n, t, i, r) {
                    return n = "?" === r ? r : null, r = "*" === r ? r : null, u.push({
                        name: i,
                        optional: !!n
                    }), t = t || "", "" + (n ? "" : t) + "(?:" + (n ? t : "") + (r && "(.+?)" || "([^/]+)") + (n || "") + ")" + (n || "")
                }).replace(/([\/$\*])/g, "\\$1"), i.regexp = RegExp("^" + n + "$", r ? "i" : ""), i
            }
            var n = {};
            this.when = function(i, u) {
                if (n[i] = t.extend({
                        reloadOnSearch: !0
                    }, u, i && r(i, u)), i) {
                    var f = "/" == i[i.length - 1] ? i.substr(0, i.length - 1) : i + "/";
                    n[f] = t.extend({
                        redirectTo: i
                    }, r(f, u))
                }
                return this
            };
            this.otherwise = function(n) {
                return this.when(null, n), this
            };
            this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(r, u, f, e, o, s, h, c) {
                function v() {
                    var n = y(),
                        i = l.current;
                    n && i && n.$$route === i.$$route && t.equals(n.pathParams, i.pathParams) && !n.reloadOnSearch && !a ? (i.params = n.params, t.copy(i.params, f), r.$broadcast("$routeUpdate", i)) : (n || i) && (a = !1, r.$broadcast("$routeChangeStart", n, i), (l.current = n) && n.redirectTo && (t.isString(n.redirectTo) ? u.path(p(n.redirectTo, n.params)).search(n.params).replace() : u.url(n.redirectTo(n.pathParams, u.path(), u.search())).replace()), e.when(n).then(function() {
                        if (n) {
                            var u = t.extend({}, n.resolve),
                                r, i;
                            return t.forEach(u, function(n, i) {
                                u[i] = t.isString(n) ? o.get(n) : o.invoke(n)
                            }), t.isDefined(r = n.template) ? t.isFunction(r) && (r = r(n.params)) : t.isDefined(i = n.templateUrl) && (t.isFunction(i) && (i = i(n.params)), i = c.getTrustedResourceUrl(i), t.isDefined(i) && (n.loadedTemplateUrl = i, r = s.get(i, {
                                cache: h
                            }).then(function(n) {
                                return n.data
                            }))), t.isDefined(r) && (u.$template = r), e.all(u)
                        }
                    }).then(function(u) {
                        n == l.current && (n && (n.locals = u, t.copy(n.params, f)), r.$broadcast("$routeChangeSuccess", n, i))
                    }, function(t) {
                        n == l.current && r.$broadcast("$routeChangeError", n, i, t)
                    }))
                }

                function y() {
                    var f, r;
                    return t.forEach(n, function(n) {
                        var e, o, h, s, a, c, l;
                        if (e = !r) {
                            if (o = u.path(), e = n.keys, h = {}, n.regexp)
                                if (o = n.regexp.exec(o)) {
                                    for (s = 1, a = o.length; s < a; ++s) c = e[s - 1], l = "string" == typeof o[s] ? decodeURIComponent(o[s]) : o[s], c && l && (h[c.name] = l);
                                    e = h
                                } else e = null;
                            else e = null;
                            e = f = e
                        }
                        e && (r = i(n, {
                            params: t.extend({}, u.search(), f),
                            pathParams: f
                        }), r.$$route = n)
                    }), r || n[null] && i(n[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function p(n, i) {
                    var r = [];
                    return t.forEach((n || "").split(":"), function(n, t) {
                        if (0 === t) r.push(n);
                        else {
                            var u = n.match(/(\w+)(.*)/),
                                f = u[1];
                            r.push(i[f]);
                            r.push(u[2] || "");
                            delete i[f]
                        }
                    }), r.join("")
                }
                var a = !1,
                    l = {
                        routes: n,
                        reload: function() {
                            a = !0;
                            r.$evalAsync(v)
                        }
                    };
                return r.$on("$locationChangeSuccess", v), l
            }]
        });
        n.provider("$routeParams", function() {
            this.$get = function() {
                return {}
            }
        });
        n.directive("ngView", i);
        i.$inject = ["$route", "$anchorScroll", "$compile", "$controller", "$animate"]
    }(window, window.angular)