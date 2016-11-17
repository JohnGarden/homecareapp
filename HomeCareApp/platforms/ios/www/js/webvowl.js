webvowl = function(t) {
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {
      exports: {},
      id: r,
      loaded: !1
    };
    return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
  }
  var e = {};
  return n.m = t, n.c = e, n.p = "", n(0)
}([function(t, n, e) {
  function r(t, n) {
    var e = n.key.replace(":", "").toLowerCase();
    t[e] = n.value
  }
  e(1);
  var i = e(5)(),
    a = e(33)(),
    o = {};
  o.graph = e(47), o.options = e(55), o.version = "0.5.2", o.util = {}, o.util.constants = e(12), o.util.languageTools = e(11), o.util.elementTools = e(54), o.modules = {}, o.modules.compactNotationSwitch = e(58), o.modules.datatypeFilter = e(59), o.modules.disjointFilter = e(61), o.modules.focuser = e(62), o.modules.nodeDegreeFilter = e(63), o.modules.nodeScalingSwitch = e(64), o.modules.pickAndPin = e(65), o.modules.selectionDetailsDisplayer = e(66), o.modules.setOperatorFilter = e(67), o.modules.statistics = e(68), o.modules.subclassFilter = e(69), o.nodes = {}, i.entries().forEach(function(t) {
    r(o.nodes, t)
  }), o.properties = {}, a.entries().forEach(function(t) {
    r(o.properties, t)
  }), t.exports = o
}, function(t, n) {}, , , , function(t, n, e) {
  (function(n) {
    var r = [];
    r.push(e(7)), r.push(e(17)), r.push(e(18)), r.push(e(20)), r.push(e(21)), r.push(e(22)), r.push(e(23)), r.push(e(24)), r.push(e(25)), r.push(e(26)), r.push(e(27)), r.push(e(31)), r.push(e(32));
    var i = n.map(r, function(t) {
      return (new t).type()
    });
    t.exports = function() {
      return i
    }
  }).call(n, e(6))
}, function(t, n) {
  t.exports = d3
}, function(t, n, e) {
  var r = e(8);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["external"]).type("ExternalClass")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  (function(n) {
    var r = e(9),
      i = e(14)();
    t.exports = function() {
      var t = function(t) {
        r.apply(this, arguments);
        var a, o, s, u = this,
          c = !1,
          l = 50;
        this.collapsible = function(t) {
          return arguments.length ? (c = t, this) : c
        }, this.textBlock = function(t) {
          return arguments.length ? (s = t, this) : s
        }, this.radius = function(t) {
          return arguments.length ? (l = t, this) : l
        }, this.setHoverHighlighting = function(t) {
          u.nodeElement().selectAll("circle").classed("hovered", t)
        }, this.textWidth = function() {
          return 2 * this.actualRadius()
        }, this.toggleFocus = function() {
          u.focused(!u.focused()), u.nodeElement().select("circle").classed("focused", u.focused())
        }, this.actualRadius = function() {
          if (!t.options().scaleNodesByIndividuals() || u.individuals().length <= 0) return u.radius();
          var n = 8,
            e = Math.log(u.individuals().length + 1) * n + 5;
          return u.radius() + e
        }, this.distanceToBorder = function() {
          return u.actualRadius()
        }, this.drawPin = function() {
          u.pinned(!0), o = u.nodeElement().append("g").classed("hidden-in-export", !0).attr("transform", function() {
            var t = .4 * u.actualRadius(),
              n = -0.7 * u.actualRadius();
            return "translate(" + t + "," + n + ")"
          }), o.append("circle").classed("class pin feature", !0).attr("r", 12).on("click", function() {
            u.removePin(), n.event.stopPropagation()
          }), o.append("line").attr("x1", 0).attr("x2", 0).attr("y1", 12).attr("y2", 16)
        }, this.removePin = function() {
          u.pinned(!1), o && o.remove(), t.updateStyle()
        }, this.drawCollapsingButton = function() {
          a = u.nodeElement().append("g").classed("hidden-in-export", !0).attr("transform", function() {
            var t = -0.4 * u.actualRadius(),
              n = .5 * u.actualRadius();
            return "translate(" + t + "," + n + ")"
          }), a.append("rect").classed("class pin feature", !0).attr("x", 0).attr("y", 0).attr("width", 40).attr("height", 24), a.append("line").attr("x1", 13).attr("y1", 12).attr("x2", 27).attr("y2", 12), a.append("line").attr("x1", 20).attr("y1", 6).attr("x2", 20).attr("y2", 18)
        }, this.draw = function(t, n) {
          var e = u.collectCssClasses();
          u.nodeElement(t), n instanceof Array && (e = e.concat(n)), i.appendCircularClass(t, u.actualRadius(), e, u.labelForCurrentLanguage()), u.postDrawActions(t)
        }, this.postDrawActions = function() {
          var n = e(15)(u.nodeElement());
          n.addText(u.labelForCurrentLanguage()), t.options().compactNotation() || n.addSubText(u.indicationString()), n.addInstanceCount(u.individuals().length), u.textBlock(n), u.addMouseListeners(), u.pinned() && u.drawPin(), u.collapsible() && u.drawCollapsingButton()
        }
      };
      return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
    }()
  }).call(n, e(6))
}, function(t, n, e) {
  var r = e(10),
    i = e(13)();
  t.exports = function() {
    var t = function(t) {
      function n() {
        if (!p.mouseEntered()) {
          var t = p.nodeElement().node(),
            n = t.parentNode;
          n.appendChild(t), p.setHoverHighlighting(!0), p.mouseEntered(!0)
        }
      }

      function e() {
        p.setHoverHighlighting(!1), p.mouseEntered(!1)
      }
      r.apply(this, arguments);
      var a, o, s, u, c, l, p = this,
        f = [];
      this.complement = function(t) {
        return arguments.length ? (a = t, this) : a
      }, this.disjointWith = function(t) {
        return arguments.length ? (o = t, this) : o
      }, this.individuals = function(t) {
        return arguments.length ? (f = t || [], this) : f
      }, this.intersection = function(t) {
        return arguments.length ? (s = t, this) : s
      }, this.maxIndividualCount = function(t) {
        return arguments.length ? (c = t, this) : c
      }, this.nodeElement = function(t) {
        return arguments.length ? (l = t, this) : l
      }, this.union = function(t) {
        return arguments.length ? (u = t, this) : u
      }, p.collectCssClasses = function() {
        var t = [];
        return "string" == typeof p.styleClass() && t.push(p.styleClass()), "string" == typeof p.visualAttribute() && t.push(p.visualAttribute()), t
      }, this.addMouseListeners = function() {
        return p.nodeElement() ? void p.nodeElement().selectAll("*").on("mouseover", n).on("mouseout", e) : void console.warn(this)
      }, i.addTo(this)
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  t.exports = function() {
    var t = "DEFAULT_LABEL",
      n = function(n) {
        var r, i, a, o, s, u, c, l, p, f, d, h = [],
          g = [],
          v = !1,
          y = [],
          m = !1,
          b = !0,
          x = e(11)();
        this.attributes = function(t) {
          return arguments.length ? (g = t, this) : g
        }, this.annotations = function(t) {
          return arguments.length ? (u = t, this) : u
        }, this.comment = function(t) {
          return arguments.length ? (l = t, this) : l
        }, this.description = function(t) {
          return arguments.length ? (p = t, this) : p
        }, this.equivalents = function(t) {
          return arguments.length ? (h = t || [], this) : h
        }, this.equivalentBase = function(t) {
          return arguments.length ? (f = t, this) : f
        }, this.focused = function(t) {
          return arguments.length ? (v = t, this) : v
        }, this.id = function(t) {
          return arguments.length ? (r = t, this) : r
        }, this.indications = function(t) {
          return arguments.length ? (y = t, this) : y
        }, this.iri = function(t) {
          return arguments.length ? (o = t, this) : o
        }, this.label = function(n) {
          return arguments.length ? (i = n || t, this) : i
        }, this.links = function(t) {
          return arguments.length ? (s = t, this) : s
        }, this.mouseEntered = function(t) {
          return arguments.length ? (m = t, this) : m
        }, this.styleClass = function(t) {
          return arguments.length ? (d = t, this) : d
        }, this.type = function(t) {
          return arguments.length ? (a = t, this) : a
        }, this.visible = function(t) {
          return arguments.length ? (b = t, this) : b
        }, this.visualAttribute = function(t) {
          return arguments.length ? (c = t, this) : c
        }, this.commentForCurrentLanguage = function() {
          return x.textInLanguage(this.comment(), n.language())
        }, this.cssClassOfNode = function() {
          return "node" + this.id()
        }, this.descriptionForCurrentLanguage = function() {
          return x.textInLanguage(this.description(), n.language())
        }, this.defaultLabel = function() {
          return x.textInLanguage(this.label(), "default")
        }, this.indicationString = function() {
          return this.indications().join(", ")
        }, this.labelForCurrentLanguage = function() {
          return x.textInLanguage(this.label(), n.language())
        }
      };
    return n.prototype.constructor = n, n.prototype.equals = function(t) {
      return t instanceof n && this.id() === t.id()
    }, n
  }()
}, function(t, n, e) {
  var r = e(12)();
  t.exports = function() {
    function t(t, n) {
      for (var e in t)
        if (e === n && t.hasOwnProperty(e)) return t[e]
    }
    var n = {};
    return n.textInLanguage = function(n, e) {
        if ("undefined" == typeof n) return void 0;
        if ("string" == typeof n) return n;
        if (e && n.hasOwnProperty(e)) return n[e];
        var i = t(n, "en");
        return i ? i : (i = t(n, r.LANG_UNDEFINED), i ? i : n[r.LANG_IRIBASED])
      },
      function() {
        return n
      }
  }()
}, function(t, n) {
  t.exports = function() {
    var t = {};
    return t.LANG_IRIBASED = "IRI-based", t.LANG_UNDEFINED = "undefined",
      function() {
        return t
      }
  }()
}, function(t, n) {
  function e(t) {
    function n() {
      t.locked() || t.frozen() || t.pinned() ? t.fixed = !0 : t.fixed = !1
    }
    var e = !1,
      r = !1,
      i = !1;
    t.locked = function(r) {
      return arguments.length ? (e = r, n(), t) : e
    }, t.frozen = function(e) {
      return arguments.length ? (r = e, n(), t) : r
    }, t.pinned = function(e) {
      return arguments.length ? (i = e, n(), t) : i
    }
  }
  var r = {};
  t.exports = function() {
    return r
  }, r.addTo = function(t) {
    e(t)
  }
}, function(t, n) {
  t.exports = function() {
    function t(t, n) {
      n instanceof Array && n.forEach(function(n) {
        t.classed(n, !0)
      })
    }

    function n(t, n) {
      n && t.append("title").text(n)
    }
    var e = {};
    return e.appendCircularClass = function(e, r, i, a) {
        var o = e.append("circle").classed("class", !0).attr("r", r);
        return t(o, i), n(o, a), o
      }, e.appendRectangularClass = function(e, r, i, a, o) {
        var s = e.append("rect").classed("class", !0).attr("x", -r / 2).attr("y", -i / 2).attr("width", r).attr("height", i);
        return t(s, a), n(s, o), s
      },
      function() {
        return e
      }
  }()
}, function(t, n, e) {
  (function(n) {
    var r = e(16)();
    t.exports = function(t) {
      function e() {
        var t = i();
        if (1 > t) return void f.attr("y", 0);
        var n = u(f);
        f.attr("y", .6 * -n + "px")
      }

      function i() {
        return f.property("childElementCount") - f.selectAll(".instance-count").size()
      }

      function a(a, u, c, p) {
        if (a) {
          var d, h;
          u = u || "text", d = r.truncate(a, t.datum().textWidth(), u), h = f.append("tspan").classed("text", !0).classed(u, !0).text(o(d, c, p)).attr("x", 0).attr("dy", function() {
            var t = s(n.select(this)),
              e = i() - 1,
              r = e > 0 ? l : 0;
            return t + r + "px"
          }), e()
        }
      }

      function o(t, n, e) {
        return n && (t = n + t), e && (t += e), t
      }

      function s(t) {
        return t.classed("subtext") ? 10 : 14
      }

      function u(t) {
        var e = t.selectAll("*"),
          r = e.size();
        if (0 === r) return 0;
        var i = r * l;
        return e.each(function() {
          i += s(n.select(this))
        }), i
      }
      var c = {},
        l = 1,
        p = "subtext",
        f = t.append("text").classed("text", !0).attr("text-anchor", "middle");
      return c.addText = function(t) {
        a(t)
      }, c.addSubText = function(t) {
        a(t, p, "(", ")")
      }, c.addEquivalents = function(t) {
        a(t, p, "[", "]")
      }, c.addInstanceCount = function(t) {
        t && a(t.toString(), "instance-count")
      }, c.setTranslation = function(t, n) {
        f.attr("transform", "translate(" + t + ", " + n + ")")
      }, c.clear = function() {
        f.selectAll("*").remove()
      }, c
    }
  }).call(n, e(6))
}, function(t, n, e) {
  (function(n) {
    function e(t, e) {
      e || (e = "text");
      var r = n.select("body").append("div").attr("class", e).attr("id", "width-test").attr("style", "position:absolute; float:left; white-space:nowrap; visibility:hidden;").text(t),
        i = document.getElementById("width-test").offsetWidth;
      return r.remove(), i
    }
    var r = 4,
      i = {};
    i.truncate = function(t, n, i, a) {
      if (n -= isNaN(a) ? r : a, isNaN(n) || 0 >= n) return t;
      for (var o, s, u, c = t;;) {
        if (s = e(c, i), n >= s) break;
        if (u = s / n, o = Math.floor(c.length / u), c.length === o) break;
        c = c.substring(0, o)
      }
      return t.length > c.length ? t.substring(0, c.length - 3) + "..." : t
    }, t.exports = function() {
      return i
    }
  }).call(n, e(6))
}, function(t, n, e) {
  var r = e(8);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.type("owl:Class")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(19);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = this;
      this.styleClass("complementof").type("owl:complementOf"), this.draw = function(t) {
        n.nodeElement(t), t.append("circle").attr("class", n.type()).classed("class", !0).classed("special", !0).attr("r", n.actualRadius());
        var e = t.append("g").classed("embedded", !0);
        e.append("circle").attr("class", "symbol").classed("fineline", !0).attr("r", n.radius() - 15), e.append("path").attr("class", "nofill").attr("d", "m -7,-1.5 12,0 0,6"), e.attr("transform", "translate(-" + (n.radius() - 15) / 100 + ",-" + (n.radius() - 15) / 100 + ")"), n.postDrawActions()
      }
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  (function(n) {
    var r = e(8);
    t.exports = function() {
      var t = 40,
        e = function(e) {
          r.apply(this, arguments);
          var i = this,
            a = this.setHoverHighlighting,
            o = this.postDrawActions;
          this.radius(t), this.setHoverHighlighting = function(t) {
            a(t), n.selectAll(".special." + i.cssClassOfNode()).classed("hovered", t)
          }, this.postDrawActions = function() {
            o(), i.textBlock().clear(), i.textBlock().addInstanceCount(i.individuals().length), i.textBlock().setTranslation(0, i.radius() - 15)
          }
        };
      return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
  }).call(n, e(6))
}, function(t, n, e) {
  var r = e(8);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["deprecated"]).type("owl:DeprecatedClass")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(8),
    i = e(14)();
  t.exports = function() {
    var t = function(t) {
      function n(t, n) {
        if ("undefined" != typeof n) {
          var e, r;
          e = n.map(function(t) {
            return t.labelForCurrentLanguage()
          }), r = e.join(", "), t.addEquivalents(r)
        }
      }
      r.apply(this, arguments);
      var e = 4,
        a = this,
        o = a.actualRadius;
      this.styleClass("equivalentclass").type("owl:equivalentClass"), this.actualRadius = function() {
        return o() + e
      }, this.draw = function(t) {
        var r = a.collectCssClasses();
        a.nodeElement(t), i.appendCircularClass(t, a.actualRadius(), ["white", "embedded"]), i.appendCircularClass(t, a.actualRadius() - e, r, a.labelForCurrentLanguage()), a.postDrawActions(), n(a.textBlock(), a.equivalents())
      }, a.setHoverHighlighting = function(t) {
        a.nodeElement().selectAll("circle:last-of-type").classed("hovered", t)
      }
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(19);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = this;
      this.styleClass("intersectionof").type("owl:intersectionOf"), this.draw = function(t) {
        n.nodeElement(t), t.append("circle").attr("class", n.type()).classed("class", !0).classed("special", !0).attr("r", n.actualRadius());
        var e = t.append("g").classed("embedded", !0);
        e.append("path").attr("class", "nostroke").classed("symbol", !0).attr("d", "m 24.777,0.771 c0,16.387-13.607,23.435-19.191,23.832S-15.467,14.526-15.467,0.424S-1.216-24.4,5.437-24.4 C12.09-24.4,24.777-15.616,24.777,0.771z"), e.append("circle").attr("class", "nofill").classed("fineline", !0).attr("r", n.radius() - 15), e.append("circle").attr("cx", 10).attr("class", "nofill").classed("fineline", !0).attr("r", n.radius() - 15), e.append("path").attr("class", "nofill").attr("d", "m 9,5 c 0,-2 0,-4 0,-6 0,0 0,0 0,0 0,0 0,-1.8 -1,-2.3 -0.7,-0.6 -1.7,-0.8 -2.9,-0.8 -1.2,0 -2,0 -3,0.8 -0.7,0.5 -1,1.4 -1,2.3 0,2 0,4 0,6"), e.attr("transform", "translate(-" + (n.radius() - 15) / 5 + ",-" + (n.radius() - 15) / 100 + ")"), n.postDrawActions()
      }
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(24);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.label("Nothing").type("owl:Nothing").iri("http://www.w3.org/2002/07/owl#Nothing")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(8);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = this.draw;
      this.label("Thing").type("owl:Thing").iri("http://www.w3.org/2002/07/owl#Thing").radius(30), this.draw = function(t) {
        n(t, ["white", "special"])
      }
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(19);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = this;
      this.styleClass("unionof").type("owl:unionOf"), this.draw = function(t) {
        n.nodeElement(t), t.append("circle").attr("class", n.type()).classed("class", !0).classed("special", !0).attr("r", n.actualRadius());
        var e = t.append("g").classed("embedded", !0);
        e.append("circle").attr("class", "symbol").attr("r", n.radius() - 15), e.append("circle").attr("cx", 10).attr("class", "symbol").classed("fineline", !0).attr("r", n.radius() - 15), e.append("circle").attr("class", "nofill").classed("fineline", !0).attr("r", n.radius() - 15), e.append("path").attr("class", "link").attr("d", "m 1,-3 c 0,2 0,4 0,6 0,0 0,0 0,0 0,2 2,3 4,3 2,0 4,-1 4,-3 0,-2 0,-4 0,-6"), e.attr("transform", "translate(-" + (n.radius() - 15) / 5 + ",-" + (n.radius() - 15) / 100 + ")"), n.postDrawActions()
      }
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(8);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["rdf"]).type("rdfs:Class")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(28);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["datatype"]).type("rdfs:Datatype")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(29);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments)
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(9),
    i = e(14)(),
    a = e(30)();
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = this,
        o = 20,
        s = 60,
        u = o / 2;
      this.height = function(t) {
        return arguments.length ? (o = t, this) : o
      }, this.width = function(t) {
        return arguments.length ? (s = t, this) : s
      }, this.actualRadius = function() {
        return u
      }, this.distanceToBorder = function(t, e) {
        return a.distanceToBorder(n, t, e)
      }, this.setHoverHighlighting = function(t) {
        n.nodeElement().selectAll("rect").classed("hovered", t)
      }, this.textWidth = function() {
        return this.width()
      }, this.toggleFocus = function() {
        n.focused(!n.focused()), n.nodeElement().select("rect").classed("focused", n.focused())
      }, this.draw = function(t, r) {
        var a, o = n.collectCssClasses();
        n.nodeElement(t), r instanceof Array && (o = o.concat(r)), i.appendRectangularClass(t, n.width(), n.height(), o, n.labelForCurrentLanguage()), a = e(15)(t), a.addText(n.labelForCurrentLanguage()), n.addMouseListeners()
      }
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n) {
  var e = {};
  t.exports = function() {
    return e
  }, e.distanceToBorder = function(t, n, e) {
    var r, i = t.width(),
      a = t.height(),
      o = Math.abs(e / n),
      s = a / i;
    if (s >= o) {
      var u = n / (i / 2),
        c = e / u;
      r = Math.sqrt(Math.pow(i / 2, 2) + Math.pow(c, 2))
    } else {
      var l = e / (a / 2),
        p = n / l;
      r = Math.sqrt(Math.pow(a / 2, 2) + Math.pow(p, 2))
    }
    return r
  }
}, function(t, n, e) {
  var r = e(28);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = this.draw,
        e = this.label;
      this.attributes(["datatype"]).label("Literal").styleClass("literal").type("rdfs:Literal").iri("http://www.w3.org/2000/01/rdf-schema#Literal"), this.draw = function(t) {
        n(t, ["special"])
      }, this.label = function(t) {
        return arguments.length ? this : e()
      }
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(8);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = this.draw;
      this.attributes(["rdf"]).label("Resource").radius(30).styleClass("rdfsresource").type("rdfs:Resource"), this.draw = function(t) {
        n(t, ["rdf", "special"])
      }
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  (function(n) {
    var r = [];
    r.push(e(34)), r.push(e(37)), r.push(e(36)), r.push(e(38)), r.push(e(39)), r.push(e(40)), r.push(e(41)), r.push(e(42)), r.push(e(43)), r.push(e(44)), r.push(e(45)), r.push(e(46));
    var i = n.map(r, function(t) {
      return (new t).type()
    });
    t.exports = function() {
      return i
    }
  }).call(n, e(6))
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["datatype"]).styleClass("datatypeproperty").type("owl:DatatypeProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(10),
    i = e(30)();
  t.exports = function() {
    var t = 28,
      n = 80,
      a = t / 2,
      o = function(t) {
        function n() {
          C.mouseEntered() || (C.mouseEntered(!0), a(!0), C.foreground(), s())
        }

        function a(t) {
          C.labelElement().select("rect").classed("hovered", t), C.linkGroup().selectAll("path, text").classed("hovered", t), C.markerElement().select("path").classed("hovered", t), C.cardinalityElement() && C.cardinalityElement().classed("hovered", t);
          var n = o();
          n.forEach(function(n) {
            n.labelElement().select("rect").classed("indirectHighlighting", t)
          })
        }

        function o() {
          var t = [];
          return C.subproperties() && (t = t.concat(C.subproperties())), C.superproperties() && (t = t.concat(C.superproperties())), t
        }

        function s() {
          var t = o();
          t.forEach(function(t) {
            t.foreground()
          })
        }

        function u() {
          C.mouseEntered(!1), a(!1)
        }
        r.apply(this, arguments);
        var c, l, p, f, d, h, g, v, y, m, b, x, w, C = this,
          E = "normal",
          k = "normal",
          O = !0,
          N = [];
        this.cardinality = function(t) {
          return arguments.length ? (c = t, this) : c
        }, this.cardinalityElement = function(t) {
          return arguments.length ? (m = t, this) : m
        }, this.domain = function(t) {
          return arguments.length ? (l = t, this) : l
        }, this.inverse = function(t) {
          return arguments.length ? (p = t, this) : p
        }, this.labelElement = function(t) {
          return arguments.length ? (b = t, this) : b
        }, this.labelVisible = function(t) {
          return arguments.length ? (O = t, this) : O
        }, this.link = function(t) {
          return arguments.length ? (f = t, this) : f
        }, this.linkGroup = function(t) {
          return arguments.length ? (x = t, this) : x
        }, this.linkType = function(t) {
          return arguments.length ? (E = t, this) : E
        }, this.markerElement = function(t) {
          return arguments.length ? (w = t, this) : w
        }, this.markerType = function(t) {
          return arguments.length ? (k = t, this) : k
        }, this.maxCardinality = function(t) {
          return arguments.length ? (h = t, this) : h
        }, this.minCardinality = function(t) {
          return arguments.length ? (d = t, this) : d
        }, this.range = function(t) {
          return arguments.length ? (g = t, this) : g
        }, this.redundantProperties = function(t) {
          return arguments.length ? (N = t, this) : N
        }, this.subproperties = function(t) {
          return arguments.length ? (v = t, this) : v
        }, this.superproperties = function(t) {
          return arguments.length ? (y = t, this) : y
        }, this.distanceToBorder = function(t, n) {
          return i.distanceToBorder(C, t, n)
        }, this.isSpecialLink = function() {
          return "special" === E
        }, this.markerId = function() {
          return "marker" + C.id()
        }, this.toggleFocus = function() {
          C.focused(!C.focused()), b.select("rect").classed("focused", C.focused())
        }, this.draw = function(t) {
          function n(n) {
            var r = t.append("g").datum(n).classed("label", !0).attr("id", n.id());
            n.addRect(r);
            var i = e(15)(r);
            return n instanceof e(36) ? (n.addDisjointLabel(t, i), r) : (i.addText(n.labelForCurrentLanguage()), i.addSubText(n.indicationString()), n.addEquivalentsToLabel(i), r)
          }
          if (!C.labelVisible()) return void 0;
          if (C.labelElement(n(C)), C.inverse()) {
            var r = C.height() / 2 + 1;
            C.inverse().labelElement(n(C.inverse())), C.labelElement().attr("transform", "translate(0,-" + r + ")"), C.inverse().labelElement().attr("transform", "translate(0," + r + ")")
          }
          return C.labelElement()
        }, this.addRect = function(t) {
          var e = t.append("rect").classed(C.styleClass(), !0).classed("property", !0).attr("x", -C.width() / 2).attr("y", -C.height() / 2).attr("width", C.width()).attr("height", C.height()).on("mouseover", function() {
            n()
          }).on("mouseout", function() {
            u()
          });
          e.append("title").text(C.labelForCurrentLanguage()), C.visualAttribute() && e.classed(C.visualAttribute(), !0)
        }, this.addDisjointLabel = function(n, e) {
          n.append("circle").classed("symbol", !0).classed("fineline", !0).classed("embedded", !0).attr("cx", -12.5).attr("r", 10), n.append("circle").classed("symbol", !0).classed("fineline", !0).classed("embedded", !0).attr("cx", 12.5).attr("r", 10), t.options().compactNotation() || e.addSubText("disjoint"), e.setTranslation(0, 20)
        }, this.addEquivalentsToLabel = function(t) {
          if (C.equivalents()) {
            var n, e;
            n = C.equivalents().map(function(t) {
              return t.labelForCurrentLanguage()
            }), e = n.join(", "), t.addEquivalents(e)
          }
        }, this.drawCardinality = function(t) {
          if (void 0 === C.minCardinality() && void 0 === C.maxCardinality() && void 0 === C.cardinality()) return void 0;
          C.cardinalityElement(t.classed("cardinality", !0));
          var n = t.append("text").classed("cardinality", !0).attr("text-anchor", "middle").attr("dy", "0.5ex");
          if (void 0 !== C.minCardinality()) {
            var e = C.minCardinality() + "..";
            e += void 0 !== C.maxCardinality() ? C.maxCardinality() : "*", n.text(e)
          } else void 0 !== C.maxCardinality() ? n.text("*.." + C.maxCardinality()) : void 0 !== C.cardinality() && n.text(C.cardinality());
          return C.cardinalityElement()
        }, this.foreground = function() {
          var t = C.labelElement().node().parentNode,
            n = t.parentNode,
            e = C.linkGroup().node(),
            r = C.linkGroup().node().parentNode;
          n.appendChild(t), r.appendChild(e)
        }
      };
    return o.prototype = Object.create(r.prototype), o.prototype.constructor = o, o.prototype.height = function() {
      return t
    }, o.prototype.width = function() {
      return n
    }, o.prototype.actualRadius = function() {
      return a
    }, o.prototype.textWidth = o.prototype.width, o
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = "Disjoint With";
      this.label = function(t) {
        return arguments.length ? this : n
      }, this.markerType("special").linkType("special").styleClass("disjointwith").type("owl:disjointWith")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["deprecated"]).styleClass("deprecatedproperty").type("owl:DeprecatedProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.styleClass("equivalentproperty").type("owl:equivalentProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["functional"]).styleClass("functionalproperty").type("owl:FunctionalProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["inverse functional"]).styleClass("inversefunctionalproperty").type("owl:InverseFunctionalProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["object"]).styleClass("objectproperty").type("owl:ObjectProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["symmetric"]).styleClass("symmetricproperty").type("owl:SymmetricProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["transitive"]).styleClass("transitiveproperty").type("owl:TransitiveProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.attributes(["rdf"]).styleClass("rdfproperty").type("rdf:Property")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments);
      var n = this,
        e = n.draw,
        i = "Subclass of";
      this.draw = function(r) {
        return n.labelVisible(!t.options().compactNotation()), e(r)
      }, this.label = function(t) {
        return arguments.length ? this : i
      }, this.linkType("dotted").markerType("dotted").styleClass("subclass").type("rdfs:subClassOf")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  var r = e(35);
  t.exports = function() {
    var t = function(t) {
      r.apply(this, arguments), this.markerType("special").labelVisible(!1).linkType("special").styleClass("setoperatorproperty").type("setOperatorProperty")
    };
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t
  }()
}, function(t, n, e) {
  (function(n) {
    var r = e(48)(),
      i = e(49)(),
      a = e(54)();
    t.exports = function(t) {
      function o() {
        N.attr("transform", function(t) {
          return "translate(" + t.x + "," + t.y + ")"
        }), L.attr("transform", function(t) {
          var n, e = t.link();
          if (1 !== e.layers().length || e.loops()) n = t;
          else {
            var i = r.calculateIntersection(e.range(), e.domain(), 0),
              a = r.calculateIntersection(e.domain(), e.range(), 0);
            n = r.calculateCenter(i, a), t.x = n.x, t.y = n.y
          }
          return "translate(" + n.x + "," + n.y + ")"
        }), P.attr("d", function(t) {
          if (t.isLoop()) return r.calculateLoopPath(t);
          var n = t.label(),
            e = r.calculateIntersection(n, t.domain(), 1),
            i = r.calculateIntersection(n, t.range(), 1);
          return z([e, n, i])
        }), j.attr("transform", function(t) {
          var n = t.link().label(),
            e = r.calculateIntersection(n, t.range(), G),
            i = r.calculateNormalVector(n, t.domain(), H);
          return "translate(" + (e.x + i.x) + "," + (e.y + i.y) + ")"
        })
      }

      function s() {
        w.attr("transform", "translate(" + n.event.translate + ")scale(" + n.event.scale + ")")
      }

      function u() {
        U.graphContainerSelector(t), S = n.layout.force().on("tick", o), B = n.behavior.drag().origin(function(t) {
          return t
        }).on("dragstart", function(t) {
          n.event.sourceEvent.stopPropagation(), t.locked(!0)
        }).on("drag", function(t) {
          t.px = n.event.x, t.py = n.event.y, S.resume()
        }).on("dragend", function(t) {
          t.locked(!1)
        }), F = n.behavior.zoom().duration(150).scaleExtent([U.minMagnification(), U.maxMagnification()]).on("zoom", s)
      }

      function c(t) {
        var n = t.link();
        if (n.isLoop()) return U.loopDistance();
        var e = l(n);
        return e += n.domain().actualRadius(), e += n.range().actualRadius(), e / 2
      }

      function l(t) {
        return a.isDatatype(t.domain()) || a.isDatatype(t.range()) ? U.datatypeDistance() : U.classDistance()
      }

      function p() {
        x(), w = n.selectAll(U.graphContainerSelector()).append("svg").classed("vowlGraph", !0).attr("width", U.width()).attr("height", U.height()).call(F).append("g")
      }

      function f() {
        var t;
        w && (w.selectAll("*").remove(), O = w.append("g").classed("linkContainer", !0), k = w.append("g").classed("cardinalityContainer", !0), E = w.append("g").classed("labelContainer", !0), C = w.append("g").classed("nodeContainer", !0), t = O.append("defs"), N = C.selectAll(".node").data(T).enter().append("g").classed("node", !0).attr("id", function(t) {
          return t.id()
        }).call(B), N.each(function(t) {
          t.draw(n.select(this))
        }), L = E.selectAll(".labelGroup").data(D).enter().append("g").classed("labelGroup", !0).call(B), L.each(function(t) {
          var e = t.draw(n.select(this));
          e || n.select(this).remove()
        }), L.each(function(t) {
          if (this.parentNode && a.isRdfsSubClassOf(t.property())) {
            var n = this.parentNode;
            n.insertBefore(this, n.firstChild)
          }
        }), j = k.selectAll(".cardinality").data(R).enter().append("g").classed("cardinality", !0), j.each(function(t) {
          var e = t.drawCardinality(n.select(this));
          e || n.select(this).remove()
        }), A = O.selectAll(".link").data(I).enter().append("g").classed("link", !0), A.each(function(e) {
          e.draw(n.select(this), t)
        }), P = A.selectAll("path"), d())
      }

      function d() {
        function t(t) {
          U.selectionModules().forEach(function(n) {
            n.handle(t)
          })
        }
        N.on("click", function(n) {
          t(n)
        }), L.selectAll(".label").on("click", function(n) {
          t(n)
        })
      }

      function h() {
        V.parse(U.data()), M = V.nodes(), q = V.properties()
      }

      function g() {
        var t = M,
          n = q;
        U.filterModules().forEach(function(e) {
          I = i.createLinks(n), v(t, I), e.filter(t, n), t = e.filteredNodes(), n = e.filteredProperties()
        }), T = t, R = n, I = i.createLinks(R), D = I.map(function(t) {
          return t.label()
        }), v(T, I), y(T, D, I)
      }

      function v(t, n) {
        for (var e = 0, r = t.length; r > e; e++) {
          for (var i = t[e], a = [], o = 0, s = n.length; s > o; o++) {
            var u = n[o];
            (u.domain() === i || u.range() === i) && a.push(u)
          }
          i.links(a)
        }
      }

      function y(t, n, e) {
        var r = [];
        e.forEach(function(t) {
          r = r.concat(t.linkParts())
        });
        var i = [].concat(t).concat(n);
        m(S.nodes(), n), S.nodes(i).links(r)
      }

      function m(t, n) {
        n.forEach(function(n) {
          for (var e = 0; e < t.length; e++) {
            var r = t[e];
            if (r.equals(n)) {
              n.x = r.x, n.y = r.y;
              break
            }
          }
        })
      }

      function b() {
        F = F.scaleExtent([U.minMagnification(), U.maxMagnification()]), w && F.event(w), S.charge(function(t) {
          var n = U.charge();
          return a.isLabel(t) && (n *= .8), n
        }).size([U.width(), U.height()]).linkDistance(c).gravity(U.gravity()).linkStrength(U.linkStrength())
      }

      function x() {
        w && n.select(w.node().parentNode).remove()
      }
      var w, C, E, k, O, N, L, A, P, j, T, D, I, R, M, q, S, B, F, W = {},
        G = 20,
        H = 10,
        z = n.svg.line().x(function(t) {
          return t.x
        }).y(function(t) {
          return t.y
        }).interpolate("cardinal"),
        U = e(55)(),
        V = e(56)(W),
        _ = "default";
      return u(), W.graphOptions = function() {
        return U
      }, W.start = function() {
        S.stop(), h(), p(), W.update()
      }, W.updateStyle = function() {
        b(), S.start()
      }, W.reload = function() {
        h(), this.update()
      }, W.update = function() {
        g(), b(), S.start(), f()
      }, W.freeze = function() {
        S.nodes().forEach(function(t) {
          t.frozen(!0)
        })
      }, W.unfreeze = function() {
        S.nodes().forEach(function(t) {
          t.frozen(!1)
        }), S.resume()
      }, W.reset = function() {
        F.translate([0, 0]).scale(1)
      }, W.options = function() {
        return U
      }, W.language = function(t) {
        return arguments.length ? (_ !== t && (_ = t || "default", f(), o()), W) : _
      }, W
    }
  }).call(n, e(6))
}, function(t, n, e) {
  (function(n) {
    t.exports = function() {
      function t(t) {
        return t %= 360, 0 > t && (t += 360), Math.PI * t / 180
      }

      function e(t) {
        return t * (180 / Math.PI)
      }
      var r = {},
        i = n.svg.line().x(function(t) {
          return t.x
        }).y(function(t) {
          return t.y
        }).interpolate("cardinal").tension(-1);
      return r.calculateNormalVector = function(t, n, e) {
          var r = n.x - t.x,
            i = n.y - t.y,
            a = -i,
            o = r,
            s = Math.sqrt(a * a + o * o),
            u = 0 !== s ? e / s : 0;
          return {
            x: a * u,
            y: o * u
          }
        }, r.calculateLoopPath = function(n) {
          var r = n.domain(),
            a = n.label(),
            o = 360 / n.loops().length,
            s = .8 * o,
            u = Math.min(60, s),
            c = a.x - r.x,
            l = a.y - r.y,
            p = Math.atan2(l, c),
            f = e(p),
            d = f - u / 2,
            h = f + u / 2,
            g = t(d),
            v = t(h),
            y = Math.cos(g) * r.actualRadius(),
            m = Math.sin(g) * r.actualRadius(),
            b = Math.cos(v) * r.actualRadius(),
            x = Math.sin(v) * r.actualRadius(),
            w = {
              x: r.x + y,
              y: r.y + m
            },
            C = {
              x: r.x + b,
              y: r.y + x
            };
          return i([w, n.label(), C])
        }, r.calculateIntersection = function(t, n, e) {
          var r = n.x - t.x,
            i = n.y - t.y,
            a = Math.sqrt(r * r + i * i);
          if (0 === a) return {
            x: t.x,
            y: t.y
          };
          var o = n.distanceToBorder(r, i),
            s = (a - (o + e)) / a,
            u = r * s + t.x,
            c = i * s + t.y;
          return {
            x: u,
            y: c
          }
        }, r.calculateCenter = function(t, n) {
          return {
            x: (t.x + n.x) / 2,
            y: (t.y + n.y) / 2
          }
        },
        function() {
          return r
        }
    }()
  }).call(n, e(6))
}, function(t, n, e) {
  t.exports = function() {
    function t(t) {
      for (var n, r = [], i = e(50)(), a = 0, o = t.length; o > a; a++)
        if (n = t[a], !i.has(n)) {
          var s = e(51)(n.domain(), n.range(), n);
          n.link(s), n.inverse() && n.inverse().link(s), r.push(s), i.add(n), n.inverse() && i.add(n.inverse())
        }
      return r
    }

    function n(t, n) {
      var e, r, i, a;
      if ("undefined" == typeof t.layers()) {
        for (r = [], i = 0, a = n.length; a > i; i++) {
          var o = n[i];
          (t.domain() === o.domain() && t.range() === o.range() || t.domain() === o.range() && t.range() === o.domain()) && r.push(o)
        }
        for (i = 0, a = r.length; a > i; ++i) e = r[i], e.layerIndex(i), e.layers(r)
      }
    }

    function r(t, n) {
      var e, r, i, a;
      if ("undefined" == typeof t.loops()) {
        for (r = [], i = 0, a = n.length; a > i; i++) {
          var o = n[i];
          t.domain() === o.domain() && t.domain() === o.range() && r.push(o)
        }
        for (i = 0, a = r.length; a > i; ++i) e = r[i], e.loopIndex(i), e.loops(r)
      }
    }
    var i = {};
    return i.createLinks = function(e) {
        for (var i = t(e), a = 0, o = i.length; o > a; a++) {
          var s = i[a];
          n(s, i), r(s, i)
        }
        return i
      },
      function() {
        return i
      }
  }()
}, function(t, n, e) {
  (function(n) {
    t.exports = function(t) {
      var e = {},
        r = n.set(t);
      return e.has = function(t) {
        return r.has(t.id())
      }, e.add = function(t) {
        return r.add(t.id())
      }, e.remove = function(t) {
        return r.remove(t.id())
      }, e.empty = function() {
        return r.empty()
      }, e.size = function() {
        return r.size()
      }, e
    }
  }).call(n, e(6))
}, function(t, n, e) {
  var r = e(52);
  t.exports = function(t, n, i) {
    var a, o, s, u, c = {},
      l = t,
      p = new r(i, c),
      f = n,
      d = e(53)(l, p, c),
      h = e(53)(p, f, c);
    return c.layers = function(t) {
      return arguments.length ? (a = t, c) : a
    }, c.layerIndex = function(t) {
      return arguments.length ? (o = t, c) : o
    }, c.loops = function(t) {
      return arguments.length ? (s = t, c) : s
    }, c.loopIndex = function(t) {
      return arguments.length ? (u = t, c) : u
    }, c.domain = function() {
      return l
    }, c.inverse = function() {
      return p.inverse()
    }, c.isLoop = function() {
      return l === f
    }, c.label = function() {
      return p
    }, c.linkParts = function() {
      return [h, d]
    }, c.property = function() {
      return p.property()
    }, c.range = function() {
      return f
    }, c.draw = function(t, n) {
      var e = p.property(),
        r = p.inverse();
      e.linkGroup(t), r && r.linkGroup(t), e.markerElement(n.append("marker").datum(e).attr("id", e.markerId()).attr("viewBox", "0 -8 14 16").attr("refX", 12).attr("refY", 0).attr("markerWidth", 12).attr("markerHeight", 12).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").attr("class", e.markerType() + "Marker")), e.markerElement().append("path").attr("d", "M0,-8L12,0L0,8Z"), r && (r.markerElement(n.append("marker").datum(r).attr("id", r.markerId()).attr("viewBox", "0 -8 14 16").attr("refX", 0).attr("refY", 0).attr("markerWidth", 12).attr("markerHeight", 12).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").attr("class", r.markerType() + "Marker")), r.markerElement().append("path").attr("d", "M12,-8L0,0L12,8Z")), t.append("path").classed("link-path", !0).classed(l.cssClassOfNode(), !0).classed(f.cssClassOfNode(), !0).classed(e.linkType(), !0).attr("marker-end", function(t) {
        return t.label().property().isSpecialLink() ? "" : "url(#" + t.label().property().markerId() + ")"
      }).attr("marker-start", function(t) {
        var n = t.label().inverse();
        return n && !n.isSpecialLink() ? "url(#" + n.markerId() + ")" : ""
      })
    }, c
  }
}, function(t, n, e) {
  function r(t, n) {
    i.addTo(this), this.link = function() {
      return n
    }, this.property = function() {
      return t
    }
  }
  var i = e(13)();
  t.exports = r, r.prototype.actualRadius = function() {
    return this.property().actualRadius()
  }, r.prototype.draw = function(t) {
    return this.property().draw(t)
  }, r.prototype.inverse = function() {
    return this.property().inverse()
  }, r.prototype.equals = function(t) {
    if (!t) return !1;
    var n = t instanceof r,
      e = this.property().equals(t.property()),
      i = !1;
    return this.inverse() ? i = this.inverse().equals(t.inverse()) : t.inverse() || (i = !0), n && e && i
  }
}, function(t, n) {
  t.exports = function(t, n, e) {
    var r = {},
      i = t,
      a = e,
      o = n;
    return Object.defineProperties(r, {
      source: {
        value: i,
        writable: !0
      },
      target: {
        value: o,
        writable: !0
      }
    }), r.domain = function() {
      return i
    }, r.link = function() {
      return a
    }, r.range = function() {
      return o
    }, r
  }
}, function(t, n, e) {
  var r = e(35),
    i = e(9),
    a = e(28),
    o = e(41),
    s = e(34),
    u = e(45),
    c = e(52);
  t.exports = function() {
    var t = {};
    return t.isLabel = function(t) {
        return t instanceof c
      }, t.isNode = function(t) {
        return t instanceof i
      }, t.isDatatype = function(t) {
        return t instanceof a
      }, t.isProperty = function(t) {
        return t instanceof r
      }, t.isObjectProperty = function(t) {
        return t instanceof o
      }, t.isDatatypeProperty = function(t) {
        return t instanceof s
      }, t.isRdfsSubClassOf = function(t) {
        return t instanceof u
      },
      function() {
        return t
      }
  }()
}, function(t, n) {
  t.exports = function() {
    var t, n, e = {},
      r = 200,
      i = 120,
      a = 100,
      o = -500,
      s = .025,
      u = 1,
      c = 600,
      l = 800,
      p = [],
      f = [],
      d = .1,
      h = 4,
      g = !1,
      v = !1;
    return e.charge = function(t) {
      return arguments.length ? (o = +t, e) : o
    }, e.classDistance = function(t) {
      return arguments.length ? (r = +t, e) : r
    }, e.compactNotation = function(t) {
      return arguments.length ? (g = t, e) : g
    }, e.data = function(n) {
      return arguments.length ? (t = n, e) : t
    }, e.datatypeDistance = function(t) {
      return arguments.length ? (i = +t, e) : i
    }, e.filterModules = function(t) {
      return arguments.length ? (f = t, e) : f
    }, e.graphContainerSelector = function(t) {
      return arguments.length ? (n = t, e) : n
    }, e.gravity = function(t) {
      return arguments.length ? (s = +t, e) : s
    }, e.height = function(t) {
      return arguments.length ? (c = +t, e) : c
    }, e.linkStrength = function(t) {
      return arguments.length ? (u = +t, e) : u
    }, e.loopDistance = function(t) {
      return arguments.length ? (a = t, e) : a
    }, e.minMagnification = function(t) {
      return arguments.length ? (d = +t, e) : d
    }, e.maxMagnification = function(t) {
      return arguments.length ? (h = +t, e) : h
    }, e.scaleNodesByIndividuals = function(t) {
      return arguments.length ? (v = t, e) : v
    }, e.selectionModules = function(t) {
      return arguments.length ? (p = t, e) : p
    }, e.width = function(t) {
      return arguments.length ? (l = +t, e) : l
    }, e
  }
}, function(t, n, e) {
  (function(n) {
    var r = e(24),
      i = e(31),
      a = e(36),
      o = e(57)(),
      s = e(54)(),
      u = e(5)(),
      c = e(33)();
    t.exports = function(t) {
      function e(e, r) {
        var i = [],
          a = p(u);
        return e && e.forEach(function(e) {
          var o;
          if (r) {
            for (var s = 0; s < r.length; s++) {
              var u = r[s];
              if (e.id === u.id) {
                o = u;
                break
              }
            }
            k(e, o)
          }
          var c = a.get(e.type.toLowerCase());
          if (c) {
            k(e, c);
            var l = new c(t);
            if (l.annotations(e.annotations).comment(e.comment).complement(e.complement).description(e.description).equivalents(e.equivalent).id(e.id).intersection(e.intersection).label(e.label).union(e.union).iri(e.iri), e.individuals && e.individuals.forEach(function(n) {
                var e = new c(t);
                e.label(n.labels).iri(n.iri), l.individuals().push(e)
              }), e.attributes) {
              var p = n.set(e.attributes.concat(l.attributes()));
              l.attributes(p.values())
            }
            i.push(l)
          } else console.error("Unknown element type: " + e.type)
        }), i
      }

      function l(e, r) {
        var i = [],
          a = p(c);
        return e && e.forEach(function(e) {
          var o;
          if (r) {
            for (var s = 0; s < r.length; s++) {
              var u = r[s];
              if (e.id === u.id) {
                o = u;
                break
              }
            }
            k(e, o)
          }
          var c = a.get(e.type.toLowerCase());
          if (c) {
            var l = new c(t);
            if (l.annotations(e.annotations).cardinality(e.cardinality).comment(e.comment).domain(e.domain).description(e.description).equivalents(e.equivalent).id(e.id).inverse(e.inverse).label(e.label).minCardinality(e.minCardinality).maxCardinality(e.maxCardinality).range(e.range).subproperties(e.subproperty).superproperties(e.superproperty).iri(e.iri), e.attributes) {
              var p = n.set(e.attributes.concat(l.attributes()));
              l.attributes(p.values())
            }
            i.push(l)
          } else console.error("Unknown element type: " + e.type)
        }), i
      }

      function p(t) {
        return n.map(t.values(), function(t) {
          return (new t).type().toLowerCase()
        })
      }

      function f(e, a) {
        var o, u, c, l, p = a.slice(),
          f = n.set(),
          h = "GENERATED-MERGED_RANGE-";
        for (a.length = 0, o = 0, u = e.length; u > o; o++) {
          var g = e[o],
            v = g.equivalents();
          if (0 !== v.length && 0 !== g.range().indexOf(h)) {
            var y;
            y = s.isDatatypeProperty(g) ? new i(t) : new r(t), y.id(h + g.id()), a.push(y);
            var m = g.range();
            for (g.range(y.id()), c = 0, l = v.length; l > c; c++) {
              var b = v[c],
                x = j[b],
                w = x.range();
              x.range(y.id()), d(w, e) || f.add(w)
            }
            d(m, e) || f.add(m)
          }
        }
        for (o = 0, u = p.length; u > o; o++) {
          var C = p[o];
          f.has(C.id()) || a.push(C)
        }
        P = E(a)
      }

      function d(t, n) {
        var e, r;
        for (e = 0, r = n.length; r > e; e++) {
          var i = n[e];
          if (i.domain() === t || i.range() === t) return !0
        }
        return !1
      }

      function h(t, n) {
        var e = [],
          r = 0;
        return t.forEach(function(t) {
          r = Math.max(r, t.individuals().length), t.visible(!0)
        }), t.forEach(function(t) {
          w(t, n), o.parseClassAttributes(t), t.maxIndividualCount(r)
        }), t.forEach(function(t) {
          t.visible() && e.push(t)
        }), e
      }

      function g(t) {
        if (t instanceof a != !1) {
          var n = t.domain(),
            e = t.range();
          n.disjointWith() || n.disjointWith([]), e.disjointWith() || e.disjointWith([]), n.disjointWith().push(t.range()), e.disjointWith().push(t.domain())
        }
      }

      function v(t, n, e) {
        var r = [];
        return t.forEach(function(t) {
          t.visible(!0)
        }), t.forEach(function(t) {
          var r, i, a, o, s;
          if (t.domain() && t.range() || t.inverse()) {
            var u = N(t.inverse());
            u && (s = e[u], s || console.warn("No inverse property was found for id: " + u)), "undefined" != typeof t.domain() && "undefined" != typeof t.range() ? (r = N(t.domain()), i = N(t.range()), a = n[r], o = n[i]) : s ? (r = N(s.range()), i = N(s.domain()), a = n[r], o = n[i]) : console.warn("Domain and range not found for property: " + t.id()), t.domain(a), t.range(o), s && (t.inverse(s), s.inverse(t), s.domain(o), s.range(a))
          }
          y(t.subproperties()), y(t.superproperties())
        }), t.forEach(function(t) {
          w(t, e), g(t), o.parsePropertyAttributes(t)
        }), t.forEach(function(n) {
          var e = !1;
          m(n.domain()) && (n.domain(n.domain().equivalentBase()), e = !0), m(n.range()) && (n.range(n.range().equivalentBase()), e = !0);
          var i = b(t, n);
          e && i && (n.visible(!1), i.redundantProperties().push(n)), n.domain().visible() && n.range().visible() || n.visible(!1), n.visible() && r.push(n)
        }), r
      }

      function y(t) {
        var n, e;
        if (t)
          for (n = 0, e = t.length; e > n; ++n) {
            var r = N(t[n]),
              i = j[r];
            i ? t[n] = i : console.warn("No sub-/superproperty was found for id: " + r)
          }
      }

      function m(t) {
        return !t.visible() && t.equivalentBase()
      }

      function b(t, n) {
        var e, r, i;
        for (e = 0, r = t.length; r > e; e++)
          if (i = t[e], n !== i && n.domain() === i.domain() && n.range() === i.range())
            if (n.iri() && i.iri()) {
              if (n.iri() === i.iri()) return i
            } else if (n.type() === i.type() && n.defaultLabel() === i.defaultLabel()) return i;
        return void 0
      }

      function x(t, n) {
        function e(t, e, r) {
          e && e.forEach(function(e, i) {
            var a = {
              id: "GENERATED-" + r + "-" + t + "-" + e + "-" + i,
              type: "setOperatorProperty",
              domain: t,
              range: e
            };
            n.push(a)
          })
        }
        t.forEach(function(t) {
          e(t.id(), t.complement(), "COMPLEMENT"), e(t.id(), t.intersection(), "INTERSECTION"), e(t.id(), t.union(), "UNION")
        })
      }

      function w(t, n) {
        var e = t.equivalents();
        if (e && !t.equivalentBase())
          for (var r = 0, i = e.length; i > r; ++r) {
            var a = N(e[r]),
              o = n[a];
            o ? (o.equivalents(o.equivalents()), o.equivalents().push(t), o.equivalentBase(t), e[r] = o, o.visible(!1)) : console.warn("No class/property was found for equivalent id: " + a)
          }
      }

      function C(t, n) {
        t.forEach(function(t) {
          "string" == typeof t.iri() && t.iri(O(t.iri(), n))
        })
      }

      function E(t) {
        for (var n = {}, e = 0, r = t.length; r > e; e++) {
          var i = t[e];
          n[i.id()] = i
        }
        return n
      }

      function k(t, n) {
        n = n || {};
        for (var e in n) e in t || !n.hasOwnProperty(e) || (t[e] = n[e]);
        return t
      }

      function O(t, n) {
        var e = t.indexOf(":");
        if (-1 === e) return t;
        for (var r = t.substring(0, e), i = 0, a = n.length; a > i; ++i) {
          var o = n[i];
          if (r === o.name) return o.iri + t.substring(e + 1)
        }
        return t
      }

      function N(t) {
        return t ? "string" == typeof t ? t : "id" in t ? t.id() : void console.warn("No Id was found for this object: " + t) : void 0
      }
      var L, A, P, j, T = {};
      return T.parse = function(t) {
        if (!t) return L = [], void(A = []);
        var n, r = e(t["class"], t.classAttribute),
          i = e(t.datatype, t.datatypeAttribute),
          a = r.concat(i);
        x(a, t.property), n = l(t.property, t.propertyAttribute), P = E(a), j = E(n), f(n, a), C(a, t.namespace), C(n, t.namespace), L = h(a, P), A = v(n, P, j)
      }, T.nodes = function() {
        return L
      }, T.properties = function() {
        return A
      }, T
    }
  }).call(n, e(6))
}, function(t, n) {
  t.exports = function() {
    function t(t) {
      var n, e, r, c = [i, a, o, s, u];
      for (n = 0, e = c.length; e > n; n++)
        if (r = c[n], t.attributes().indexOf(r) >= 0) {
          t.visualAttribute(r);
          break
        }
    }

    function n(t) {
      var n, e, r, o = [i, a];
      for (n = 0, e = o.length; e > n; n++) r = o[n], t.attributes().indexOf(r) >= 0 && t.indications().push(r)
    }

    function e(t) {
      var n, e, r, i = [c, l, f, p];
      for (n = 0, e = i.length; e > n; n++) r = i[n], t.attributes().indexOf(r) >= 0 && t.indications().push(r)
    }
    var r = {},
      i = "deprecated",
      a = "external",
      o = "datatype",
      s = "object",
      u = "rdf",
      c = "functional",
      l = "inverse functional",
      p = "transitive",
      f = "symmetric";
    return r.parseClassAttributes = function(e) {
        e.attributes() instanceof Array && (t(e), n(e))
      }, r.parsePropertyAttributes = function(n) {
        n.attributes() instanceof Array && (t(n), e(n))
      },
      function() {
        return r
      }
  }()
}, function(t, n) {
  t.exports = function(t) {
    var n, e, r, i, a = !1,
      o = {},
      s = a;
    return o.filter = function(a, o) {
      n = a, e = o, t.options().compactNotation(s), r = n, i = e
    }, o.enabled = function(t) {
      return arguments.length ? (s = t, o) : s
    }, o.reset = function() {
      s = a
    }, o.filteredNodes = function() {
      return r
    }, o.filteredProperties = function() {
      return i
    }, o
  }
}, function(t, n, e) {
  var r = e(54)(),
    i = e(60)();
  t.exports = function() {
    function t() {
      var t = i.filterNodesAndTidy(e, a, n);
      e = t.nodes, a = t.properties
    }

    function n(t) {
      return !r.isDatatype(t)
    }
    var e, a, o, s, u = {},
      c = !1;
    return u.filter = function(n, r) {
      e = n, a = r, this.enabled() && t(), o = e, s = a
    }, u.enabled = function(t) {
      return arguments.length ? (c = t, u) : c
    }, u.filteredNodes = function() {
      return o
    }, u.filteredProperties = function() {
      return s
    }, u
  }
}, function(t, n, e) {
  var r = e(54)();
  t.exports = function() {
    function t(t, n) {
      return !t.has(n.domain()) && !t.has(n.range())
    }
    var n = {};
    return n.filterNodesAndTidy = function(n, i, a) {
        var o = e(50)(),
          s = [],
          u = [];
        return n.forEach(function(t) {
          a(t) ? s.push(t) : o.add(t)
        }), i.forEach(function(n) {
          if (t(o, n)) u.push(n);
          else if (r.isDatatypeProperty(n)) {
            var e = s.indexOf(n.range());
            e >= 0 && s.splice(e, 1)
          }
        }), {
          nodes: s,
          properties: u
        }
      },
      function() {
        return n
      }
  }()
}, function(t, n, e) {
  var r = e(36);
  t.exports = function() {
    function t() {
      var t, n, i, a = [];
      for (t = 0, n = e.length; n > t; t++) i = e[t], i instanceof r || a.push(i);
      e = a
    }
    var n, e, i, a, o = {},
      s = !0;
    return o.filter = function(r, o) {
      n = r, e = o, this.enabled() && t(), i = n, a = e
    }, o.enabled = function(t) {
      return arguments.length ? (s = t, o) : s
    }, o.filteredNodes = function() {
      return i
    }, o.filteredProperties = function() {
      return a
    }, o
  }
}, function(t, n, e) {
  (function(n) {
    t.exports = function() {
      var t, e = {};
      return e.handle = function(e) {
        n.event.defaultPrevented || (void 0 !== t && t.toggleFocus(), t !== e ? (e.toggleFocus(), t = e) : t = void 0)
      }, e.reset = function() {
        t && (t.toggleFocus(), t = void 0)
      }, e
    }
  }).call(n, e(6))
}, function(t, n, e) {
  var r = e(54)(),
    i = e(60)();
  t.exports = function() {
    function t() {
      for (var t = 0, e = 0, r = o.length; r > e; e++) {
        var i = n(o[e].links());
        t = Math.max(t, i.length)
      }
      l instanceof Function && l(t)
    }

    function n(t) {
      return t.filter(function(t) {
        return !r.isDatatypeProperty(t.property())
      })
    }

    function e(t) {
      var n = i.filterNodesAndTidy(o, s, a(t));
      o = n.nodes, s = n.properties
    }

    function a(t) {
      return function(e) {
        return n(e.links()).length >= t
      }
    }
    var o, s, u, c, l, p, f = {},
      d = !0;
    return f.filter = function(n, r) {
      o = n, s = r, t(), this.enabled() && (p instanceof Function ? e(p()) : console.error("No degree query function set.")), u = o, c = s
    }, f.setMaxDegreeSetter = function(t) {
      l = t
    }, f.setDegreeQueryFunction = function(t) {
      p = t
    }, f.enabled = function(t) {
      return arguments.length ? (d = t, f) : d
    }, f.filteredNodes = function() {
      return u
    }, f.filteredProperties = function() {
      return c
    }, f
  }
}, function(t, n) {
  t.exports = function(t) {
    var n, e, r, i, a = !0,
      o = {},
      s = a;
    return o.filter = function(a, o) {
      n = a, e = o, t.options().scaleNodesByIndividuals(s), r = n, i = e
    }, o.enabled = function(t) {
      return arguments.length ? (s = t, o) : s
    }, o.reset = function() {
      s = a
    }, o.filteredNodes = function() {
      return r
    }, o.filteredProperties = function() {
      return i
    }, o
  }
}, function(t, n, e) {
  var r = e(54)();
  t.exports = function() {
    var t = {},
      n = !1,
      e = [];
    return t.handle = function(t) {
      n && (r.isDatatype(t) || t.pinned() || (t.drawPin(), e.push(t)))
    }, t.enabled = function(e) {
      return arguments.length ? (n = e, t) : n
    }, t.reset = function() {
      for (var t = 0, n = e.length; n > t; t++) e[t].removePin();
      e.length = 0
    }, t
  }
}, function(t, n, e) {
  (function(n) {
    t.exports = function(t) {
      var e, r = {};
      return r.handle = function(r) {
        if (!n.event.defaultPrevented) {
          var i = !0;
          e === r && (i = !1), t instanceof Function && t(i ? r : void 0), e = i ? r : void 0
        }
      }, r.reset = function() {
        e && (t(void 0), e = void 0)
      }, r
    }
  }).call(n, e(6))
}, function(t, n, e) {
  var r = e(19);
  t.exports = function() {
    function t() {
      var t = l.filterNodesAndTidy(i, a, n);
      i = t.nodes, a = t.properties
    }

    function n(t) {
      return !(t instanceof r)
    }
    var i, a, o, s, u = {},
      c = !1,
      l = e(60)();
    return u.filter = function(n, e) {
      i = n, a = e, this.enabled() && t(), o = i, s = a
    }, u.enabled = function(t) {
      return arguments.length ? (c = t, u) : c
    }, u.filteredNodes = function() {
      return o
    }, u.filteredProperties = function() {
      return s
    }, u
  }
}, function(t, n, e) {
  (function(n) {
    var r = e(19),
      i = e(24),
      a = e(23),
      o = e(54)();
    t.exports = function() {
      function t() {
        h = 0, g = 0, v = 0, y = 0, m = 0, b = 0, x = 0, w = 0
      }

      function s(t, n) {
        h = t.length;
        var r, i, a, o = e(50)();
        for (r = 0, i = n.length; i > r; r++) a = n[r], o.has(a) || (g += 1), o.add(a), a.inverse() && o.add(a.inverse())
      }

      function u(t) {
        var e = n.set(),
          s = !1,
          u = !1;
        t.forEach(function(t) {
          o.isDatatype(t) ? e.add(t.defaultLabel()) : t instanceof r || (t instanceof i ? s = !0 : t instanceof a ? u = !0 : (v += 1, v += p(t.equivalents())))
        }), v += s ? 1 : 0, v += u ? 1 : 0, y = e.size()
      }

      function c(t) {
        for (var n = 0, e = t.length; e > n; n++) {
          var r = t[n];
          o.isObjectProperty(r) ? b += l(r) : o.isDatatypeProperty(t) && (m += l(r))
        }
        x = b + m
      }

      function l(t) {
        var n = 1;
        return n += p(t.equivalents()), n += p(t.redundantProperties())
      }

      function p(t) {
        return t ? t.length : 0
      }

      function f(t, n) {
        t.forEach(function(t) {
          var e = t.type(),
            r = n[e];
          "undefined" == typeof r ? r = 0 : r += 1, n[e] = r
        })
      }

      function d(t) {
        for (var n = 0, e = 0, r = t.length; r > e; e++) n += t[e].individuals().length || 0;
        w = n
      }
      var h, g, v, y, m, b, x, w, C, E, k = {},
        O = {},
        N = {};
      return k.filter = function(n, e) {
        t(), s(n, e), u(n), c(e), f(n, O), f(e, N), d(n), C = n, E = e
      }, k.nodeCount = function() {
        return h
      }, k.occurencesOfClassAndDatatypeTypes = function() {
        return O
      }, k.edgeCount = function() {
        return g
      }, k.occurencesOfPropertyTypes = function() {
        return N
      }, k.classCount = function() {
        return v
      }, k.datatypeCount = function() {
        return y
      }, k.datatypePropertyCount = function() {
        return m
      }, k.objectPropertyCount = function() {
        return b
      }, k.propertyCount = function() {
        return x
      }, k.totalIndividualCount = function() {
        return w
      }, k.filteredNodes = function() {
        return C
      }, k.filteredProperties = function() {
        return E
      }, k
    }
  }).call(n, e(6))
}, function(t, n, e) {
  var r = e(54)();
  t.exports = function() {
    function t() {
      var t, e, c, l, p, f = [],
        d = [],
        h = [];
      for (l = 0, p = u.length; p > l; l++) c = u[l], r.isRdfsSubClassOf(c) && h.push(c.domain());
      for (l = 0, p = h.length; p > l; l++) e = h[l], t = n(e, u), i(t) && a(e, t) && (f = f.concat(t), d.push(e));
      s = o(s, d), u = o(u, f)
    }

    function n(t, i, a) {
      var o, s, u, c = [];
      for (s = 0, u = i.length; u > s; s++)
        if (o = i[s], (o.domain() === t || o.range() === t) && (c.push(o), r.isRdfsSubClassOf(o))) {
          var l = o.domain();
          if (a = a || e(50)(), t === o.range() && !a.has(l)) {
            a.add(l);
            var p = n(l, i, a);
            c = c.concat(p)
          }
        }
      return c
    }

    function i(t) {
      var n, e, i, a = !0;
      for (e = 0, i = t.length; i > e; e++)
        if (n = t[e], !r.isRdfsSubClassOf(n)) {
          a = !1;
          break
        }
      return a
    }

    function a(t, n) {
      for (var e = 0, r = 0, i = n.length; i > r; r++) {
        var a = n[r];
        if (a.domain() === t && (e += 1), e > 1) return !1
      }
      return !0
    }

    function o(t, n) {
      var e, r, i, a = [];
      for (r = 0, i = t.length; i > r; r++) e = t[r], -1 === n.indexOf(e) && a.push(e);
      return a
    }
    var s, u, c, l, p = {},
      f = !1;
    return p.filter = function(n, e) {
      s = n, u = e, this.enabled() && t(), c = s, l = u
    }, p.enabled = function(t) {
      return arguments.length ? (f = t, p) : f
    }, p.filteredNodes = function() {
      return c
    }, p.filteredProperties = function() {
      return l
    }, p
  }
}]);