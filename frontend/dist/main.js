(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/xterm/lib/xterm.js
  var require_xterm = __commonJS({
    "node_modules/xterm/lib/xterm.js"(exports, module) {
      !function(e, t) {
        if ("object" == typeof exports && "object" == typeof module)
          module.exports = t();
        else if ("function" == typeof define && define.amd)
          define([], t);
        else {
          var r = t();
          for (var i in r)
            ("object" == typeof exports ? exports : e)[i] = r[i];
        }
      }(self, function() {
        return (() => {
          "use strict";
          var e = { 4567: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            });
            Object.defineProperty(t2, "__esModule", { value: true }), t2.AccessibilityManager = void 0;
            var o = r(9042), s = r(6114), a = r(9924), c = r(3656), l = r(844), h = r(5596), u = r(9631), f = function(e3) {
              function t3(t4, r2) {
                var i2 = e3.call(this) || this;
                i2._terminal = t4, i2._renderService = r2, i2._liveRegionLineCount = 0, i2._charsToConsume = [], i2._charsToAnnounce = "", i2._accessibilityTreeRoot = document.createElement("div"), i2._accessibilityTreeRoot.classList.add("xterm-accessibility"), i2._accessibilityTreeRoot.tabIndex = 0, i2._rowContainer = document.createElement("div"), i2._rowContainer.setAttribute("role", "list"), i2._rowContainer.classList.add("xterm-accessibility-tree"), i2._rowElements = [];
                for (var n2 = 0; n2 < i2._terminal.rows; n2++)
                  i2._rowElements[n2] = i2._createAccessibilityTreeNode(), i2._rowContainer.appendChild(i2._rowElements[n2]);
                if (i2._topBoundaryFocusListener = function(e4) {
                  return i2._onBoundaryFocus(e4, 0);
                }, i2._bottomBoundaryFocusListener = function(e4) {
                  return i2._onBoundaryFocus(e4, 1);
                }, i2._rowElements[0].addEventListener("focus", i2._topBoundaryFocusListener), i2._rowElements[i2._rowElements.length - 1].addEventListener("focus", i2._bottomBoundaryFocusListener), i2._refreshRowsDimensions(), i2._accessibilityTreeRoot.appendChild(i2._rowContainer), i2._renderRowsDebouncer = new a.TimeBasedDebouncer(i2._renderRows.bind(i2)), i2._refreshRows(), i2._liveRegion = document.createElement("div"), i2._liveRegion.classList.add("live-region"), i2._liveRegion.setAttribute("aria-live", "assertive"), i2._accessibilityTreeRoot.appendChild(i2._liveRegion), !i2._terminal.element)
                  throw new Error("Cannot enable accessibility before Terminal.open");
                return i2._terminal.element.insertAdjacentElement("afterbegin", i2._accessibilityTreeRoot), i2.register(i2._renderRowsDebouncer), i2.register(i2._terminal.onResize(function(e4) {
                  return i2._onResize(e4.rows);
                })), i2.register(i2._terminal.onRender(function(e4) {
                  return i2._refreshRows(e4.start, e4.end);
                })), i2.register(i2._terminal.onScroll(function() {
                  return i2._refreshRows();
                })), i2.register(i2._terminal.onA11yChar(function(e4) {
                  return i2._onChar(e4);
                })), i2.register(i2._terminal.onLineFeed(function() {
                  return i2._onChar("\n");
                })), i2.register(i2._terminal.onA11yTab(function(e4) {
                  return i2._onTab(e4);
                })), i2.register(i2._terminal.onKey(function(e4) {
                  return i2._onKey(e4.key);
                })), i2.register(i2._terminal.onBlur(function() {
                  return i2._clearLiveRegion();
                })), i2.register(i2._renderService.onDimensionsChange(function() {
                  return i2._refreshRowsDimensions();
                })), i2._screenDprMonitor = new h.ScreenDprMonitor(), i2.register(i2._screenDprMonitor), i2._screenDprMonitor.setListener(function() {
                  return i2._refreshRowsDimensions();
                }), i2.register((0, c.addDisposableDomListener)(window, "resize", function() {
                  return i2._refreshRowsDimensions();
                })), i2;
              }
              return n(t3, e3), t3.prototype.dispose = function() {
                e3.prototype.dispose.call(this), (0, u.removeElementFromParent)(this._accessibilityTreeRoot), this._rowElements.length = 0;
              }, t3.prototype._onBoundaryFocus = function(e4, t4) {
                var r2 = e4.target, i2 = this._rowElements[0 === t4 ? 1 : this._rowElements.length - 2];
                if (r2.getAttribute("aria-posinset") !== (0 === t4 ? "1" : "" + this._terminal.buffer.lines.length) && e4.relatedTarget === i2) {
                  var n2, o2;
                  if (0 === t4 ? (n2 = r2, o2 = this._rowElements.pop(), this._rowContainer.removeChild(o2)) : (n2 = this._rowElements.shift(), o2 = r2, this._rowContainer.removeChild(n2)), n2.removeEventListener("focus", this._topBoundaryFocusListener), o2.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t4) {
                    var s2 = this._createAccessibilityTreeNode();
                    this._rowElements.unshift(s2), this._rowContainer.insertAdjacentElement("afterbegin", s2);
                  } else
                    s2 = this._createAccessibilityTreeNode(), this._rowElements.push(s2), this._rowContainer.appendChild(s2);
                  this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t4 ? -1 : 1), this._rowElements[0 === t4 ? 1 : this._rowElements.length - 2].focus(), e4.preventDefault(), e4.stopImmediatePropagation();
                }
              }, t3.prototype._onResize = function(e4) {
                this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
                for (var t4 = this._rowContainer.children.length; t4 < this._terminal.rows; t4++)
                  this._rowElements[t4] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[t4]);
                for (; this._rowElements.length > e4; )
                  this._rowContainer.removeChild(this._rowElements.pop());
                this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
              }, t3.prototype._createAccessibilityTreeNode = function() {
                var e4 = document.createElement("div");
                return e4.setAttribute("role", "listitem"), e4.tabIndex = -1, this._refreshRowDimensions(e4), e4;
              }, t3.prototype._onTab = function(e4) {
                for (var t4 = 0; t4 < e4; t4++)
                  this._onChar(" ");
              }, t3.prototype._onChar = function(e4) {
                var t4 = this;
                this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e4 && (this._charsToAnnounce += e4) : this._charsToAnnounce += e4, "\n" === e4 && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += o.tooMuchOutput)), s.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout(function() {
                  t4._accessibilityTreeRoot.appendChild(t4._liveRegion);
                }, 0));
              }, t3.prototype._clearLiveRegion = function() {
                this._liveRegion.textContent = "", this._liveRegionLineCount = 0, s.isMac && (0, u.removeElementFromParent)(this._liveRegion);
              }, t3.prototype._onKey = function(e4) {
                this._clearLiveRegion(), this._charsToConsume.push(e4);
              }, t3.prototype._refreshRows = function(e4, t4) {
                this._renderRowsDebouncer.refresh(e4, t4, this._terminal.rows);
              }, t3.prototype._renderRows = function(e4, t4) {
                for (var r2 = this._terminal.buffer, i2 = r2.lines.length.toString(), n2 = e4; n2 <= t4; n2++) {
                  var o2 = r2.translateBufferLineToString(r2.ydisp + n2, true), s2 = (r2.ydisp + n2 + 1).toString(), a2 = this._rowElements[n2];
                  a2 && (0 === o2.length ? a2.innerText = "\xA0" : a2.textContent = o2, a2.setAttribute("aria-posinset", s2), a2.setAttribute("aria-setsize", i2));
                }
                this._announceCharacters();
              }, t3.prototype._refreshRowsDimensions = function() {
                if (this._renderService.dimensions.actualCellHeight) {
                  this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
                  for (var e4 = 0; e4 < this._terminal.rows; e4++)
                    this._refreshRowDimensions(this._rowElements[e4]);
                }
              }, t3.prototype._refreshRowDimensions = function(e4) {
                e4.style.height = this._renderService.dimensions.actualCellHeight + "px";
              }, t3.prototype._announceCharacters = function() {
                0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
              }, t3;
            }(l.Disposable);
            t2.AccessibilityManager = f;
          }, 3614: (e2, t2) => {
            function r(e3) {
              return e3.replace(/\r?\n/g, "\r");
            }
            function i(e3, t3) {
              return t3 ? "\x1B[200~" + e3 + "\x1B[201~" : e3;
            }
            function n(e3, t3, n2) {
              e3 = i(e3 = r(e3), n2.decPrivateModes.bracketedPasteMode), n2.triggerDataEvent(e3, true), t3.value = "";
            }
            function o(e3, t3, r2) {
              var i2 = r2.getBoundingClientRect(), n2 = e3.clientX - i2.left - 10, o2 = e3.clientY - i2.top - 10;
              t3.style.width = "20px", t3.style.height = "20px", t3.style.left = n2 + "px", t3.style.top = o2 + "px", t3.style.zIndex = "1000", t3.focus();
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.rightClickHandler = t2.moveTextAreaUnderMouseCursor = t2.paste = t2.handlePasteEvent = t2.copyHandler = t2.bracketTextForPaste = t2.prepareTextForTerminal = void 0, t2.prepareTextForTerminal = r, t2.bracketTextForPaste = i, t2.copyHandler = function(e3, t3) {
              e3.clipboardData && e3.clipboardData.setData("text/plain", t3.selectionText), e3.preventDefault();
            }, t2.handlePasteEvent = function(e3, t3, r2) {
              e3.stopPropagation(), e3.clipboardData && n(e3.clipboardData.getData("text/plain"), t3, r2);
            }, t2.paste = n, t2.moveTextAreaUnderMouseCursor = o, t2.rightClickHandler = function(e3, t3, r2, i2, n2) {
              o(e3, t3, r2), n2 && i2.rightClickSelect(e3), t3.value = i2.selectionText, t3.select();
            };
          }, 7239: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorContrastCache = void 0;
            var r = function() {
              function e3() {
                this._color = {}, this._rgba = {};
              }
              return e3.prototype.clear = function() {
                this._color = {}, this._rgba = {};
              }, e3.prototype.setCss = function(e4, t3, r2) {
                this._rgba[e4] || (this._rgba[e4] = {}), this._rgba[e4][t3] = r2;
              }, e3.prototype.getCss = function(e4, t3) {
                return this._rgba[e4] ? this._rgba[e4][t3] : void 0;
              }, e3.prototype.setColor = function(e4, t3, r2) {
                this._color[e4] || (this._color[e4] = {}), this._color[e4][t3] = r2;
              }, e3.prototype.getColor = function(e4, t3) {
                return this._color[e4] ? this._color[e4][t3] : void 0;
              }, e3;
            }();
            t2.ColorContrastCache = r;
          }, 5680: function(e2, t2, r) {
            var i = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s2 = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s2.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s2;
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorManager = t2.DEFAULT_ANSI_COLORS = void 0;
            var n = r(8055), o = r(7239), s = n.css.toColor("#ffffff"), a = n.css.toColor("#000000"), c = n.css.toColor("#ffffff"), l = n.css.toColor("#000000"), h = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117 };
            t2.DEFAULT_ANSI_COLORS = Object.freeze(function() {
              for (var e3 = [n.css.toColor("#2e3436"), n.css.toColor("#cc0000"), n.css.toColor("#4e9a06"), n.css.toColor("#c4a000"), n.css.toColor("#3465a4"), n.css.toColor("#75507b"), n.css.toColor("#06989a"), n.css.toColor("#d3d7cf"), n.css.toColor("#555753"), n.css.toColor("#ef2929"), n.css.toColor("#8ae234"), n.css.toColor("#fce94f"), n.css.toColor("#729fcf"), n.css.toColor("#ad7fa8"), n.css.toColor("#34e2e2"), n.css.toColor("#eeeeec")], t3 = [0, 95, 135, 175, 215, 255], r2 = 0; r2 < 216; r2++) {
                var i2 = t3[r2 / 36 % 6 | 0], o2 = t3[r2 / 6 % 6 | 0], s2 = t3[r2 % 6];
                e3.push({ css: n.channels.toCss(i2, o2, s2), rgba: n.channels.toRgba(i2, o2, s2) });
              }
              for (r2 = 0; r2 < 24; r2++) {
                var a2 = 8 + 10 * r2;
                e3.push({ css: n.channels.toCss(a2, a2, a2), rgba: n.channels.toRgba(a2, a2, a2) });
              }
              return e3;
            }());
            var u = function() {
              function e3(e4, r2) {
                this.allowTransparency = r2;
                var i2 = e4.createElement("canvas");
                i2.width = 1, i2.height = 1;
                var u2 = i2.getContext("2d");
                if (!u2)
                  throw new Error("Could not get rendering context");
                this._ctx = u2, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), this._contrastCache = new o.ColorContrastCache(), this.colors = { foreground: s, background: a, cursor: c, cursorAccent: l, selectionTransparent: h, selectionOpaque: n.color.blend(a, h), selectionForeground: void 0, ansi: t2.DEFAULT_ANSI_COLORS.slice(), contrastCache: this._contrastCache }, this._updateRestoreColors();
              }
              return e3.prototype.onOptionsChange = function(e4) {
                "minimumContrastRatio" === e4 && this._contrastCache.clear();
              }, e3.prototype.setTheme = function(e4) {
                void 0 === e4 && (e4 = {}), this.colors.foreground = this._parseColor(e4.foreground, s), this.colors.background = this._parseColor(e4.background, a), this.colors.cursor = this._parseColor(e4.cursor, c, true), this.colors.cursorAccent = this._parseColor(e4.cursorAccent, l, true), this.colors.selectionTransparent = this._parseColor(e4.selection, h, true), this.colors.selectionOpaque = n.color.blend(this.colors.background, this.colors.selectionTransparent);
                var r2 = { css: "", rgba: 0 };
                this.colors.selectionForeground = e4.selectionForeground ? this._parseColor(e4.selectionForeground, r2) : void 0, this.colors.selectionForeground === r2 && (this.colors.selectionForeground = void 0), n.color.isOpaque(this.colors.selectionTransparent) && (this.colors.selectionTransparent = n.color.opacity(this.colors.selectionTransparent, 0.3)), this.colors.ansi[0] = this._parseColor(e4.black, t2.DEFAULT_ANSI_COLORS[0]), this.colors.ansi[1] = this._parseColor(e4.red, t2.DEFAULT_ANSI_COLORS[1]), this.colors.ansi[2] = this._parseColor(e4.green, t2.DEFAULT_ANSI_COLORS[2]), this.colors.ansi[3] = this._parseColor(e4.yellow, t2.DEFAULT_ANSI_COLORS[3]), this.colors.ansi[4] = this._parseColor(e4.blue, t2.DEFAULT_ANSI_COLORS[4]), this.colors.ansi[5] = this._parseColor(e4.magenta, t2.DEFAULT_ANSI_COLORS[5]), this.colors.ansi[6] = this._parseColor(e4.cyan, t2.DEFAULT_ANSI_COLORS[6]), this.colors.ansi[7] = this._parseColor(e4.white, t2.DEFAULT_ANSI_COLORS[7]), this.colors.ansi[8] = this._parseColor(e4.brightBlack, t2.DEFAULT_ANSI_COLORS[8]), this.colors.ansi[9] = this._parseColor(e4.brightRed, t2.DEFAULT_ANSI_COLORS[9]), this.colors.ansi[10] = this._parseColor(e4.brightGreen, t2.DEFAULT_ANSI_COLORS[10]), this.colors.ansi[11] = this._parseColor(e4.brightYellow, t2.DEFAULT_ANSI_COLORS[11]), this.colors.ansi[12] = this._parseColor(e4.brightBlue, t2.DEFAULT_ANSI_COLORS[12]), this.colors.ansi[13] = this._parseColor(e4.brightMagenta, t2.DEFAULT_ANSI_COLORS[13]), this.colors.ansi[14] = this._parseColor(e4.brightCyan, t2.DEFAULT_ANSI_COLORS[14]), this.colors.ansi[15] = this._parseColor(e4.brightWhite, t2.DEFAULT_ANSI_COLORS[15]), this._contrastCache.clear(), this._updateRestoreColors();
              }, e3.prototype.restoreColor = function(e4) {
                if (void 0 !== e4)
                  switch (e4) {
                    case 256:
                      this.colors.foreground = this._restoreColors.foreground;
                      break;
                    case 257:
                      this.colors.background = this._restoreColors.background;
                      break;
                    case 258:
                      this.colors.cursor = this._restoreColors.cursor;
                      break;
                    default:
                      this.colors.ansi[e4] = this._restoreColors.ansi[e4];
                  }
                else
                  for (var t3 = 0; t3 < this._restoreColors.ansi.length; ++t3)
                    this.colors.ansi[t3] = this._restoreColors.ansi[t3];
              }, e3.prototype._updateRestoreColors = function() {
                this._restoreColors = { foreground: this.colors.foreground, background: this.colors.background, cursor: this.colors.cursor, ansi: this.colors.ansi.slice() };
              }, e3.prototype._parseColor = function(e4, t3, r2) {
                if (void 0 === r2 && (r2 = this.allowTransparency), void 0 === e4)
                  return t3;
                if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = e4, "string" != typeof this._ctx.fillStyle)
                  return console.warn("Color: " + e4 + " is invalid using fallback " + t3.css), t3;
                this._ctx.fillRect(0, 0, 1, 1);
                var o2 = this._ctx.getImageData(0, 0, 1, 1).data;
                if (255 !== o2[3]) {
                  if (!r2)
                    return console.warn("Color: " + e4 + " is using transparency, but allowTransparency is false. Using fallback " + t3.css + "."), t3;
                  var s2 = i(this._ctx.fillStyle.substring(5, this._ctx.fillStyle.length - 1).split(",").map(function(e5) {
                    return Number(e5);
                  }), 4), a2 = s2[0], c2 = s2[1], l2 = s2[2], h2 = s2[3], u2 = Math.round(255 * h2);
                  return { rgba: n.channels.toRgba(a2, c2, l2, u2), css: e4 };
                }
                return { css: this._ctx.fillStyle, rgba: n.channels.toRgba(o2[0], o2[1], o2[2], o2[3]) };
              }, e3;
            }();
            t2.ColorManager = u;
          }, 9631: function(e2, t2) {
            var r = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i >= e3.length && (e3 = void 0), { value: e3 && e3[i++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.removeElementFromParent = void 0, t2.removeElementFromParent = function() {
              for (var e3, t3, i, n = [], o = 0; o < arguments.length; o++)
                n[o] = arguments[o];
              try {
                for (var s = r(n), a = s.next(); !a.done; a = s.next()) {
                  var c = a.value;
                  null === (i = null == c ? void 0 : c.parentElement) || void 0 === i || i.removeChild(c);
                }
              } catch (t4) {
                e3 = { error: t4 };
              } finally {
                try {
                  a && !a.done && (t3 = s.return) && t3.call(s);
                } finally {
                  if (e3)
                    throw e3.error;
                }
              }
            };
          }, 3656: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.addDisposableDomListener = void 0, t2.addDisposableDomListener = function(e3, t3, r, i) {
              e3.addEventListener(t3, r, i);
              var n = false;
              return { dispose: function() {
                n || (n = true, e3.removeEventListener(t3, r, i));
              } };
            };
          }, 3551: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.MouseZone = t2.Linkifier = void 0;
            var o = r(8460), s = r(2585), a = function() {
              function e3(e4, t3, r2) {
                this._bufferService = e4, this._logService = t3, this._unicodeService = r2, this._linkMatchers = [], this._nextLinkMatcherId = 0, this._onShowLinkUnderline = new o.EventEmitter(), this._onHideLinkUnderline = new o.EventEmitter(), this._onLinkTooltip = new o.EventEmitter(), this._rowsToLinkify = { start: void 0, end: void 0 };
              }
              return Object.defineProperty(e3.prototype, "onShowLinkUnderline", { get: function() {
                return this._onShowLinkUnderline.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onHideLinkUnderline", { get: function() {
                return this._onHideLinkUnderline.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onLinkTooltip", { get: function() {
                return this._onLinkTooltip.event;
              }, enumerable: false, configurable: true }), e3.prototype.attachToDom = function(e4, t3) {
                this._element = e4, this._mouseZoneManager = t3;
              }, e3.prototype.linkifyRows = function(t3, r2) {
                var i2 = this;
                this._mouseZoneManager && (void 0 === this._rowsToLinkify.start || void 0 === this._rowsToLinkify.end ? (this._rowsToLinkify.start = t3, this._rowsToLinkify.end = r2) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, t3), this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, r2)), this._mouseZoneManager.clearAll(t3, r2), this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout(function() {
                  return i2._linkifyRows();
                }, e3._timeBeforeLatency));
              }, e3.prototype._linkifyRows = function() {
                this._rowsTimeoutId = void 0;
                var e4 = this._bufferService.buffer;
                if (void 0 !== this._rowsToLinkify.start && void 0 !== this._rowsToLinkify.end) {
                  var t3 = e4.ydisp + this._rowsToLinkify.start;
                  if (!(t3 >= e4.lines.length)) {
                    for (var r2 = e4.ydisp + Math.min(this._rowsToLinkify.end, this._bufferService.rows) + 1, i2 = Math.ceil(2e3 / this._bufferService.cols), n2 = this._bufferService.buffer.iterator(false, t3, r2, i2, i2); n2.hasNext(); )
                      for (var o2 = n2.next(), s2 = 0; s2 < this._linkMatchers.length; s2++)
                        this._doLinkifyRow(o2.range.first, o2.content, this._linkMatchers[s2]);
                    this._rowsToLinkify.start = void 0, this._rowsToLinkify.end = void 0;
                  }
                } else
                  this._logService.debug("_rowToLinkify was unset before _linkifyRows was called");
              }, e3.prototype.registerLinkMatcher = function(e4, t3, r2) {
                if (void 0 === r2 && (r2 = {}), !t3)
                  throw new Error("handler must be defined");
                var i2 = { id: this._nextLinkMatcherId++, regex: e4, handler: t3, matchIndex: r2.matchIndex, validationCallback: r2.validationCallback, hoverTooltipCallback: r2.tooltipCallback, hoverLeaveCallback: r2.leaveCallback, willLinkActivate: r2.willLinkActivate, priority: r2.priority || 0 };
                return this._addLinkMatcherToList(i2), i2.id;
              }, e3.prototype._addLinkMatcherToList = function(e4) {
                if (0 !== this._linkMatchers.length) {
                  for (var t3 = this._linkMatchers.length - 1; t3 >= 0; t3--)
                    if (e4.priority <= this._linkMatchers[t3].priority)
                      return void this._linkMatchers.splice(t3 + 1, 0, e4);
                  this._linkMatchers.splice(0, 0, e4);
                } else
                  this._linkMatchers.push(e4);
              }, e3.prototype.deregisterLinkMatcher = function(e4) {
                for (var t3 = 0; t3 < this._linkMatchers.length; t3++)
                  if (this._linkMatchers[t3].id === e4)
                    return this._linkMatchers.splice(t3, 1), true;
                return false;
              }, e3.prototype._doLinkifyRow = function(e4, t3, r2) {
                for (var i2, n2 = this, o2 = new RegExp(r2.regex.source, (r2.regex.flags || "") + "g"), s2 = -1, a2 = function() {
                  var a3 = i2["number" != typeof r2.matchIndex ? 0 : r2.matchIndex];
                  if (!a3)
                    return c2._logService.debug("match found without corresponding matchIndex", i2, r2), "break";
                  if (s2 = t3.indexOf(a3, s2 + 1), o2.lastIndex = s2 + a3.length, s2 < 0)
                    return "break";
                  var l = c2._bufferService.buffer.stringIndexToBufferIndex(e4, s2);
                  if (l[0] < 0)
                    return "break";
                  var h = c2._bufferService.buffer.lines.get(l[0]);
                  if (!h)
                    return "break";
                  var u = h.getFg(l[1]), f = u ? u >> 9 & 511 : void 0;
                  r2.validationCallback ? r2.validationCallback(a3, function(e5) {
                    n2._rowsTimeoutId || e5 && n2._addLink(l[1], l[0] - n2._bufferService.buffer.ydisp, a3, r2, f);
                  }) : c2._addLink(l[1], l[0] - c2._bufferService.buffer.ydisp, a3, r2, f);
                }, c2 = this; null !== (i2 = o2.exec(t3)) && "break" !== a2(); )
                  ;
              }, e3.prototype._addLink = function(e4, t3, r2, i2, n2) {
                var o2 = this;
                if (this._mouseZoneManager && this._element) {
                  var s2 = this._unicodeService.getStringCellWidth(r2), a2 = e4 % this._bufferService.cols, l = t3 + Math.floor(e4 / this._bufferService.cols), h = (a2 + s2) % this._bufferService.cols, u = l + Math.floor((a2 + s2) / this._bufferService.cols);
                  0 === h && (h = this._bufferService.cols, u--), this._mouseZoneManager.add(new c(a2 + 1, l + 1, h + 1, u + 1, function(e5) {
                    if (i2.handler)
                      return i2.handler(e5, r2);
                    var t4 = window.open();
                    t4 ? (t4.opener = null, t4.location.href = r2) : console.warn("Opening link blocked as opener could not be cleared");
                  }, function() {
                    o2._onShowLinkUnderline.fire(o2._createLinkHoverEvent(a2, l, h, u, n2)), o2._element.classList.add("xterm-cursor-pointer");
                  }, function(e5) {
                    o2._onLinkTooltip.fire(o2._createLinkHoverEvent(a2, l, h, u, n2)), i2.hoverTooltipCallback && i2.hoverTooltipCallback(e5, r2, { start: { x: a2, y: l }, end: { x: h, y: u } });
                  }, function() {
                    o2._onHideLinkUnderline.fire(o2._createLinkHoverEvent(a2, l, h, u, n2)), o2._element.classList.remove("xterm-cursor-pointer"), i2.hoverLeaveCallback && i2.hoverLeaveCallback();
                  }, function(e5) {
                    return !i2.willLinkActivate || i2.willLinkActivate(e5, r2);
                  }));
                }
              }, e3.prototype._createLinkHoverEvent = function(e4, t3, r2, i2, n2) {
                return { x1: e4, y1: t3, x2: r2, y2: i2, cols: this._bufferService.cols, fg: n2 };
              }, e3._timeBeforeLatency = 200, e3 = i([n(0, s.IBufferService), n(1, s.ILogService), n(2, s.IUnicodeService)], e3);
            }();
            t2.Linkifier = a;
            var c = function(e3, t3, r2, i2, n2, o2, s2, a2, c2) {
              this.x1 = e3, this.y1 = t3, this.x2 = r2, this.y2 = i2, this.clickCallback = n2, this.hoverCallback = o2, this.tooltipCallback = s2, this.leaveCallback = a2, this.willLinkActivate = c2;
            };
            t2.MouseZone = c;
          }, 6465: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, a = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, c = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s2 = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s2.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s2;
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Linkifier2 = void 0;
            var l = r(2585), h = r(8460), u = r(844), f = r(3656), _ = function(e3) {
              function t3(t4) {
                var r2 = e3.call(this) || this;
                return r2._bufferService = t4, r2._linkProviders = [], r2._linkCacheDisposables = [], r2._isMouseOut = true, r2._activeLine = -1, r2._onShowLinkUnderline = r2.register(new h.EventEmitter()), r2._onHideLinkUnderline = r2.register(new h.EventEmitter()), r2.register((0, u.getDisposeArrayDisposable)(r2._linkCacheDisposables)), r2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "currentLink", { get: function() {
                return this._currentLink;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onShowLinkUnderline", { get: function() {
                return this._onShowLinkUnderline.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onHideLinkUnderline", { get: function() {
                return this._onHideLinkUnderline.event;
              }, enumerable: false, configurable: true }), t3.prototype.registerLinkProvider = function(e4) {
                var t4 = this;
                return this._linkProviders.push(e4), { dispose: function() {
                  var r2 = t4._linkProviders.indexOf(e4);
                  -1 !== r2 && t4._linkProviders.splice(r2, 1);
                } };
              }, t3.prototype.attachToDom = function(e4, t4, r2) {
                var i2 = this;
                this._element = e4, this._mouseService = t4, this._renderService = r2, this.register((0, f.addDisposableDomListener)(this._element, "mouseleave", function() {
                  i2._isMouseOut = true, i2._clearCurrentLink();
                })), this.register((0, f.addDisposableDomListener)(this._element, "mousemove", this._onMouseMove.bind(this))), this.register((0, f.addDisposableDomListener)(this._element, "mousedown", this._handleMouseDown.bind(this))), this.register((0, f.addDisposableDomListener)(this._element, "mouseup", this._handleMouseUp.bind(this)));
              }, t3.prototype._onMouseMove = function(e4) {
                if (this._lastMouseEvent = e4, this._element && this._mouseService) {
                  var t4 = this._positionFromMouseEvent(e4, this._element, this._mouseService);
                  if (t4) {
                    this._isMouseOut = false;
                    for (var r2 = e4.composedPath(), i2 = 0; i2 < r2.length; i2++) {
                      var n2 = r2[i2];
                      if (n2.classList.contains("xterm"))
                        break;
                      if (n2.classList.contains("xterm-hover"))
                        return;
                    }
                    this._lastBufferCell && t4.x === this._lastBufferCell.x && t4.y === this._lastBufferCell.y || (this._onHover(t4), this._lastBufferCell = t4);
                  }
                }
              }, t3.prototype._onHover = function(e4) {
                if (this._activeLine !== e4.y)
                  return this._clearCurrentLink(), void this._askForLink(e4, false);
                this._currentLink && this._linkAtPosition(this._currentLink.link, e4) || (this._clearCurrentLink(), this._askForLink(e4, true));
              }, t3.prototype._askForLink = function(e4, t4) {
                var r2, i2, n2, o2, s2 = this;
                this._activeProviderReplies && t4 || (null === (n2 = this._activeProviderReplies) || void 0 === n2 || n2.forEach(function(e5) {
                  null == e5 || e5.forEach(function(e6) {
                    e6.link.dispose && e6.link.dispose();
                  });
                }), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = e4.y);
                var l2 = false, h2 = function(r3, i3) {
                  t4 ? (null === (o2 = u2._activeProviderReplies) || void 0 === o2 ? void 0 : o2.get(r3)) && (l2 = u2._checkLinkProviderResult(r3, e4, l2)) : i3.provideLinks(e4.y, function(t5) {
                    var i4, n3;
                    if (!s2._isMouseOut) {
                      var o3 = null == t5 ? void 0 : t5.map(function(e5) {
                        return { link: e5 };
                      });
                      null === (i4 = s2._activeProviderReplies) || void 0 === i4 || i4.set(r3, o3), l2 = s2._checkLinkProviderResult(r3, e4, l2), (null === (n3 = s2._activeProviderReplies) || void 0 === n3 ? void 0 : n3.size) === s2._linkProviders.length && s2._removeIntersectingLinks(e4.y, s2._activeProviderReplies);
                    }
                  });
                }, u2 = this;
                try {
                  for (var f2 = a(this._linkProviders.entries()), _2 = f2.next(); !_2.done; _2 = f2.next()) {
                    var d = c(_2.value, 2);
                    h2(d[0], d[1]);
                  }
                } catch (e5) {
                  r2 = { error: e5 };
                } finally {
                  try {
                    _2 && !_2.done && (i2 = f2.return) && i2.call(f2);
                  } finally {
                    if (r2)
                      throw r2.error;
                  }
                }
              }, t3.prototype._removeIntersectingLinks = function(e4, t4) {
                for (var r2 = /* @__PURE__ */ new Set(), i2 = 0; i2 < t4.size; i2++) {
                  var n2 = t4.get(i2);
                  if (n2)
                    for (var o2 = 0; o2 < n2.length; o2++)
                      for (var s2 = n2[o2], a2 = s2.link.range.start.y < e4 ? 0 : s2.link.range.start.x, c2 = s2.link.range.end.y > e4 ? this._bufferService.cols : s2.link.range.end.x, l2 = a2; l2 <= c2; l2++) {
                        if (r2.has(l2)) {
                          n2.splice(o2--, 1);
                          break;
                        }
                        r2.add(l2);
                      }
                }
              }, t3.prototype._checkLinkProviderResult = function(e4, t4, r2) {
                var i2, n2 = this;
                if (!this._activeProviderReplies)
                  return r2;
                for (var o2 = this._activeProviderReplies.get(e4), s2 = false, a2 = 0; a2 < e4; a2++)
                  this._activeProviderReplies.has(a2) && !this._activeProviderReplies.get(a2) || (s2 = true);
                if (!s2 && o2) {
                  var c2 = o2.find(function(e5) {
                    return n2._linkAtPosition(e5.link, t4);
                  });
                  c2 && (r2 = true, this._handleNewLink(c2));
                }
                if (this._activeProviderReplies.size === this._linkProviders.length && !r2)
                  for (a2 = 0; a2 < this._activeProviderReplies.size; a2++) {
                    var l2 = null === (i2 = this._activeProviderReplies.get(a2)) || void 0 === i2 ? void 0 : i2.find(function(e5) {
                      return n2._linkAtPosition(e5.link, t4);
                    });
                    if (l2) {
                      r2 = true, this._handleNewLink(l2);
                      break;
                    }
                  }
                return r2;
              }, t3.prototype._handleMouseDown = function() {
                this._mouseDownLink = this._currentLink;
              }, t3.prototype._handleMouseUp = function(e4) {
                if (this._element && this._mouseService && this._currentLink) {
                  var t4 = this._positionFromMouseEvent(e4, this._element, this._mouseService);
                  t4 && this._mouseDownLink === this._currentLink && this._linkAtPosition(this._currentLink.link, t4) && this._currentLink.link.activate(e4, this._currentLink.link.text);
                }
              }, t3.prototype._clearCurrentLink = function(e4, t4) {
                this._element && this._currentLink && this._lastMouseEvent && (!e4 || !t4 || this._currentLink.link.range.start.y >= e4 && this._currentLink.link.range.end.y <= t4) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, u.disposeArray)(this._linkCacheDisposables));
              }, t3.prototype._handleNewLink = function(e4) {
                var t4 = this;
                if (this._element && this._lastMouseEvent && this._mouseService) {
                  var r2 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                  r2 && this._linkAtPosition(e4.link, r2) && (this._currentLink = e4, this._currentLink.state = { decorations: { underline: void 0 === e4.link.decorations || e4.link.decorations.underline, pointerCursor: void 0 === e4.link.decorations || e4.link.decorations.pointerCursor }, isHovered: true }, this._linkHover(this._element, e4.link, this._lastMouseEvent), e4.link.decorations = {}, Object.defineProperties(e4.link.decorations, { pointerCursor: { get: function() {
                    var e5, r3;
                    return null === (r3 = null === (e5 = t4._currentLink) || void 0 === e5 ? void 0 : e5.state) || void 0 === r3 ? void 0 : r3.decorations.pointerCursor;
                  }, set: function(e5) {
                    var r3, i2;
                    (null === (r3 = t4._currentLink) || void 0 === r3 ? void 0 : r3.state) && t4._currentLink.state.decorations.pointerCursor !== e5 && (t4._currentLink.state.decorations.pointerCursor = e5, t4._currentLink.state.isHovered && (null === (i2 = t4._element) || void 0 === i2 || i2.classList.toggle("xterm-cursor-pointer", e5)));
                  } }, underline: { get: function() {
                    var e5, r3;
                    return null === (r3 = null === (e5 = t4._currentLink) || void 0 === e5 ? void 0 : e5.state) || void 0 === r3 ? void 0 : r3.decorations.underline;
                  }, set: function(r3) {
                    var i2, n2, o2;
                    (null === (i2 = t4._currentLink) || void 0 === i2 ? void 0 : i2.state) && (null === (o2 = null === (n2 = t4._currentLink) || void 0 === n2 ? void 0 : n2.state) || void 0 === o2 ? void 0 : o2.decorations.underline) !== r3 && (t4._currentLink.state.decorations.underline = r3, t4._currentLink.state.isHovered && t4._fireUnderlineEvent(e4.link, r3));
                  } } }), this._renderService && this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange(function(e5) {
                    var r3 = 0 === e5.start ? 0 : e5.start + 1 + t4._bufferService.buffer.ydisp;
                    t4._clearCurrentLink(r3, e5.end + 1 + t4._bufferService.buffer.ydisp);
                  })));
                }
              }, t3.prototype._linkHover = function(e4, t4, r2) {
                var i2;
                (null === (i2 = this._currentLink) || void 0 === i2 ? void 0 : i2.state) && (this._currentLink.state.isHovered = true, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t4, true), this._currentLink.state.decorations.pointerCursor && e4.classList.add("xterm-cursor-pointer")), t4.hover && t4.hover(r2, t4.text);
              }, t3.prototype._fireUnderlineEvent = function(e4, t4) {
                var r2 = e4.range, i2 = this._bufferService.buffer.ydisp, n2 = this._createLinkUnderlineEvent(r2.start.x - 1, r2.start.y - i2 - 1, r2.end.x, r2.end.y - i2 - 1, void 0);
                (t4 ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(n2);
              }, t3.prototype._linkLeave = function(e4, t4, r2) {
                var i2;
                (null === (i2 = this._currentLink) || void 0 === i2 ? void 0 : i2.state) && (this._currentLink.state.isHovered = false, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t4, false), this._currentLink.state.decorations.pointerCursor && e4.classList.remove("xterm-cursor-pointer")), t4.leave && t4.leave(r2, t4.text);
              }, t3.prototype._linkAtPosition = function(e4, t4) {
                var r2 = e4.range.start.y === e4.range.end.y, i2 = e4.range.start.y < t4.y, n2 = e4.range.end.y > t4.y;
                return (r2 && e4.range.start.x <= t4.x && e4.range.end.x >= t4.x || i2 && e4.range.end.x >= t4.x || n2 && e4.range.start.x <= t4.x || i2 && n2) && e4.range.start.y <= t4.y && e4.range.end.y >= t4.y;
              }, t3.prototype._positionFromMouseEvent = function(e4, t4, r2) {
                var i2 = r2.getCoords(e4, t4, this._bufferService.cols, this._bufferService.rows);
                if (i2)
                  return { x: i2[0], y: i2[1] + this._bufferService.buffer.ydisp };
              }, t3.prototype._createLinkUnderlineEvent = function(e4, t4, r2, i2, n2) {
                return { x1: e4, y1: t4, x2: r2, y2: i2, cols: this._bufferService.cols, fg: n2 };
              }, o([s(0, l.IBufferService)], t3);
            }(u.Disposable);
            t2.Linkifier2 = _;
          }, 9042: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.tooMuchOutput = t2.promptLabel = void 0, t2.promptLabel = "Terminal input", t2.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
          }, 6954: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.MouseZoneManager = void 0;
            var a = r(844), c = r(3656), l = r(4725), h = r(2585), u = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2) {
                var a2 = e3.call(this) || this;
                return a2._element = t4, a2._screenElement = r2, a2._bufferService = i2, a2._mouseService = n2, a2._selectionService = o2, a2._optionsService = s2, a2._zones = [], a2._areZonesActive = false, a2._lastHoverCoords = [void 0, void 0], a2._initialSelectionLength = 0, a2.register((0, c.addDisposableDomListener)(a2._element, "mousedown", function(e4) {
                  return a2._onMouseDown(e4);
                })), a2._mouseMoveListener = function(e4) {
                  return a2._onMouseMove(e4);
                }, a2._mouseLeaveListener = function(e4) {
                  return a2._onMouseLeave(e4);
                }, a2._clickListener = function(e4) {
                  return a2._onClick(e4);
                }, a2;
              }
              return n(t3, e3), t3.prototype.dispose = function() {
                e3.prototype.dispose.call(this), this._deactivate();
              }, t3.prototype.add = function(e4) {
                this._zones.push(e4), 1 === this._zones.length && this._activate();
              }, t3.prototype.clearAll = function(e4, t4) {
                if (0 !== this._zones.length) {
                  e4 && t4 || (e4 = 0, t4 = this._bufferService.rows - 1);
                  for (var r2 = 0; r2 < this._zones.length; r2++) {
                    var i2 = this._zones[r2];
                    (i2.y1 > e4 && i2.y1 <= t4 + 1 || i2.y2 > e4 && i2.y2 <= t4 + 1 || i2.y1 < e4 && i2.y2 > t4 + 1) && (this._currentZone && this._currentZone === i2 && (this._currentZone.leaveCallback(), this._currentZone = void 0), this._zones.splice(r2--, 1));
                  }
                  0 === this._zones.length && this._deactivate();
                }
              }, t3.prototype._activate = function() {
                this._areZonesActive || (this._areZonesActive = true, this._element.addEventListener("mousemove", this._mouseMoveListener), this._element.addEventListener("mouseleave", this._mouseLeaveListener), this._element.addEventListener("click", this._clickListener));
              }, t3.prototype._deactivate = function() {
                this._areZonesActive && (this._areZonesActive = false, this._element.removeEventListener("mousemove", this._mouseMoveListener), this._element.removeEventListener("mouseleave", this._mouseLeaveListener), this._element.removeEventListener("click", this._clickListener));
              }, t3.prototype._onMouseMove = function(e4) {
                this._lastHoverCoords[0] === e4.pageX && this._lastHoverCoords[1] === e4.pageY || (this._onHover(e4), this._lastHoverCoords = [e4.pageX, e4.pageY]);
              }, t3.prototype._onHover = function(e4) {
                var t4 = this, r2 = this._findZoneEventAt(e4);
                r2 !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), r2 && (this._currentZone = r2, r2.hoverCallback && r2.hoverCallback(e4), this._tooltipTimeout = window.setTimeout(function() {
                  return t4._onTooltip(e4);
                }, this._optionsService.rawOptions.linkTooltipHoverDuration)));
              }, t3.prototype._onTooltip = function(e4) {
                this._tooltipTimeout = void 0;
                var t4 = this._findZoneEventAt(e4);
                null == t4 || t4.tooltipCallback(e4);
              }, t3.prototype._onMouseDown = function(e4) {
                if (this._initialSelectionLength = this._getSelectionLength(), this._areZonesActive) {
                  var t4 = this._findZoneEventAt(e4);
                  (null == t4 ? void 0 : t4.willLinkActivate(e4)) && (e4.preventDefault(), e4.stopImmediatePropagation());
                }
              }, t3.prototype._onMouseLeave = function(e4) {
                this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout));
              }, t3.prototype._onClick = function(e4) {
                var t4 = this._findZoneEventAt(e4), r2 = this._getSelectionLength();
                t4 && r2 === this._initialSelectionLength && (t4.clickCallback(e4), e4.preventDefault(), e4.stopImmediatePropagation());
              }, t3.prototype._getSelectionLength = function() {
                var e4 = this._selectionService.selectionText;
                return e4 ? e4.length : 0;
              }, t3.prototype._findZoneEventAt = function(e4) {
                var t4 = this._mouseService.getCoords(e4, this._screenElement, this._bufferService.cols, this._bufferService.rows);
                if (t4)
                  for (var r2 = t4[0], i2 = t4[1], n2 = 0; n2 < this._zones.length; n2++) {
                    var o2 = this._zones[n2];
                    if (o2.y1 === o2.y2) {
                      if (i2 === o2.y1 && r2 >= o2.x1 && r2 < o2.x2)
                        return o2;
                    } else if (i2 === o2.y1 && r2 >= o2.x1 || i2 === o2.y2 && r2 < o2.x2 || i2 > o2.y1 && i2 < o2.y2)
                      return o2;
                  }
              }, o([s(2, h.IBufferService), s(3, l.IMouseService), s(4, l.ISelectionService), s(5, h.IOptionsService)], t3);
            }(a.Disposable);
            t2.MouseZoneManager = u;
          }, 6193: function(e2, t2) {
            var r = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderDebouncer = void 0;
            var i = function() {
              function e3(e4) {
                this._renderCallback = e4, this._refreshCallbacks = [];
              }
              return e3.prototype.dispose = function() {
                this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
              }, e3.prototype.addRefreshCallback = function(e4) {
                var t3 = this;
                return this._refreshCallbacks.push(e4), this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                  return t3._innerRefresh();
                })), this._animationFrame;
              }, e3.prototype.refresh = function(e4, t3, r2) {
                var i2 = this;
                this._rowCount = r2, e4 = void 0 !== e4 ? e4 : 0, t3 = void 0 !== t3 ? t3 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e4) : e4, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t3) : t3, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                  return i2._innerRefresh();
                }));
              }, e3.prototype._innerRefresh = function() {
                if (this._animationFrame = void 0, void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount) {
                  var e4 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
                  this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e4, t3), this._runRefreshCallbacks();
                } else
                  this._runRefreshCallbacks();
              }, e3.prototype._runRefreshCallbacks = function() {
                var e4, t3;
                try {
                  for (var i2 = r(this._refreshCallbacks), n = i2.next(); !n.done; n = i2.next())
                    (0, n.value)(0);
                } catch (t4) {
                  e4 = { error: t4 };
                } finally {
                  try {
                    n && !n.done && (t3 = i2.return) && t3.call(i2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
                this._refreshCallbacks = [];
              }, e3;
            }();
            t2.RenderDebouncer = i;
          }, 5596: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            });
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ScreenDprMonitor = void 0;
            var o = function(e3) {
              function t3() {
                var t4 = null !== e3 && e3.apply(this, arguments) || this;
                return t4._currentDevicePixelRatio = window.devicePixelRatio, t4;
              }
              return n(t3, e3), t3.prototype.setListener = function(e4) {
                var t4 = this;
                this._listener && this.clearListener(), this._listener = e4, this._outerListener = function() {
                  t4._listener && (t4._listener(window.devicePixelRatio, t4._currentDevicePixelRatio), t4._updateDpr());
                }, this._updateDpr();
              }, t3.prototype.dispose = function() {
                e3.prototype.dispose.call(this), this.clearListener();
              }, t3.prototype._updateDpr = function() {
                var e4;
                this._outerListener && (null === (e4 = this._resolutionMediaMatchList) || void 0 === e4 || e4.removeListener(this._outerListener), this._currentDevicePixelRatio = window.devicePixelRatio, this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)"), this._resolutionMediaMatchList.addListener(this._outerListener));
              }, t3.prototype.clearListener = function() {
                this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0);
              }, t3;
            }(r(844).Disposable);
            t2.ScreenDprMonitor = o;
          }, 3236: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, s = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s2 = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s2.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s2;
            }, a = this && this.__spreadArray || function(e3, t3, r2) {
              if (r2 || 2 === arguments.length)
                for (var i2, n2 = 0, o2 = t3.length; n2 < o2; n2++)
                  !i2 && n2 in t3 || (i2 || (i2 = Array.prototype.slice.call(t3, 0, n2)), i2[n2] = t3[n2]);
              return e3.concat(i2 || Array.prototype.slice.call(t3));
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Terminal = void 0;
            var c = r(2950), l = r(1680), h = r(3614), u = r(2584), f = r(5435), _ = r(3525), d = r(3551), p = r(9312), v = r(6114), y = r(3656), g = r(9042), m = r(357), b = r(6954), S = r(4567), C = r(1296), w = r(7399), L = r(8460), E = r(8437), x = r(5680), R = r(3230), k = r(4725), M = r(428), A = r(8934), O = r(6465), D = r(5114), T = r(8969), B = r(8055), P = r(4269), I = r(5941), H = r(3107), j = r(5744), F = r(9074), W = r(2585), U = "undefined" != typeof window ? window.document : null, q = function(e3) {
              function t3(t4) {
                void 0 === t4 && (t4 = {});
                var r2 = e3.call(this, t4) || this;
                return r2.browser = v, r2._keyDownHandled = false, r2._keyDownSeen = false, r2._keyPressHandled = false, r2._unprocessedDeadKey = false, r2._onCursorMove = new L.EventEmitter(), r2._onKey = new L.EventEmitter(), r2._onRender = new L.EventEmitter(), r2._onSelectionChange = new L.EventEmitter(), r2._onTitleChange = new L.EventEmitter(), r2._onBell = new L.EventEmitter(), r2._onFocus = new L.EventEmitter(), r2._onBlur = new L.EventEmitter(), r2._onA11yCharEmitter = new L.EventEmitter(), r2._onA11yTabEmitter = new L.EventEmitter(), r2._setup(), r2.linkifier = r2._instantiationService.createInstance(d.Linkifier), r2.linkifier2 = r2.register(r2._instantiationService.createInstance(O.Linkifier2)), r2._decorationService = r2._instantiationService.createInstance(F.DecorationService), r2._instantiationService.setService(W.IDecorationService, r2._decorationService), r2.register(r2._inputHandler.onRequestBell(function() {
                  return r2.bell();
                })), r2.register(r2._inputHandler.onRequestRefreshRows(function(e4, t5) {
                  return r2.refresh(e4, t5);
                })), r2.register(r2._inputHandler.onRequestSendFocus(function() {
                  return r2._reportFocus();
                })), r2.register(r2._inputHandler.onRequestReset(function() {
                  return r2.reset();
                })), r2.register(r2._inputHandler.onRequestWindowsOptionsReport(function(e4) {
                  return r2._reportWindowsOptions(e4);
                })), r2.register(r2._inputHandler.onColor(function(e4) {
                  return r2._handleColorEvent(e4);
                })), r2.register((0, L.forwardEvent)(r2._inputHandler.onCursorMove, r2._onCursorMove)), r2.register((0, L.forwardEvent)(r2._inputHandler.onTitleChange, r2._onTitleChange)), r2.register((0, L.forwardEvent)(r2._inputHandler.onA11yChar, r2._onA11yCharEmitter)), r2.register((0, L.forwardEvent)(r2._inputHandler.onA11yTab, r2._onA11yTabEmitter)), r2.register(r2._bufferService.onResize(function(e4) {
                  return r2._afterResize(e4.cols, e4.rows);
                })), r2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onCursorMove", { get: function() {
                return this._onCursorMove.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onKey", { get: function() {
                return this._onKey.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRender", { get: function() {
                return this._onRender.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onSelectionChange", { get: function() {
                return this._onSelectionChange.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onTitleChange", { get: function() {
                return this._onTitleChange.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onBell", { get: function() {
                return this._onBell.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onFocus", { get: function() {
                return this._onFocus.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onBlur", { get: function() {
                return this._onBlur.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onA11yChar", { get: function() {
                return this._onA11yCharEmitter.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onA11yTab", { get: function() {
                return this._onA11yTabEmitter.event;
              }, enumerable: false, configurable: true }), t3.prototype._handleColorEvent = function(e4) {
                var t4, r2, i2, n2;
                if (this._colorManager) {
                  try {
                    for (var c2 = o(e4), l2 = c2.next(); !l2.done; l2 = c2.next()) {
                      var h2 = l2.value, f2 = void 0, _2 = "";
                      switch (h2.index) {
                        case 256:
                          f2 = "foreground", _2 = "10";
                          break;
                        case 257:
                          f2 = "background", _2 = "11";
                          break;
                        case 258:
                          f2 = "cursor", _2 = "12";
                          break;
                        default:
                          f2 = "ansi", _2 = "4;" + h2.index;
                      }
                      if (f2)
                        switch (h2.type) {
                          case 0:
                            var d2 = B.color.toColorRGB("ansi" === f2 ? this._colorManager.colors.ansi[h2.index] : this._colorManager.colors[f2]);
                            this.coreService.triggerDataEvent(u.C0.ESC + "]" + _2 + ";" + (0, I.toRgbString)(d2) + u.C1_ESCAPED.ST);
                            break;
                          case 1:
                            "ansi" === f2 ? this._colorManager.colors.ansi[h2.index] = B.rgba.toColor.apply(B.rgba, a([], s(h2.color), false)) : this._colorManager.colors[f2] = B.rgba.toColor.apply(B.rgba, a([], s(h2.color), false));
                            break;
                          case 2:
                            this._colorManager.restoreColor(h2.index);
                        }
                    }
                  } catch (e5) {
                    t4 = { error: e5 };
                  } finally {
                    try {
                      l2 && !l2.done && (r2 = c2.return) && r2.call(c2);
                    } finally {
                      if (t4)
                        throw t4.error;
                    }
                  }
                  null === (i2 = this._renderService) || void 0 === i2 || i2.setColors(this._colorManager.colors), null === (n2 = this.viewport) || void 0 === n2 || n2.onThemeChange(this._colorManager.colors);
                }
              }, t3.prototype.dispose = function() {
                var t4, r2, i2;
                this._isDisposed || (e3.prototype.dispose.call(this), null === (t4 = this._renderService) || void 0 === t4 || t4.dispose(), this._customKeyEventHandler = void 0, this.write = function() {
                }, null === (i2 = null === (r2 = this.element) || void 0 === r2 ? void 0 : r2.parentNode) || void 0 === i2 || i2.removeChild(this.element));
              }, t3.prototype._setup = function() {
                e3.prototype._setup.call(this), this._customKeyEventHandler = void 0;
              }, Object.defineProperty(t3.prototype, "buffer", { get: function() {
                return this.buffers.active;
              }, enumerable: false, configurable: true }), t3.prototype.focus = function() {
                this.textarea && this.textarea.focus({ preventScroll: true });
              }, t3.prototype._updateOptions = function(t4) {
                var r2, i2, n2, o2;
                switch (e3.prototype._updateOptions.call(this, t4), t4) {
                  case "fontFamily":
                  case "fontSize":
                    null === (r2 = this._renderService) || void 0 === r2 || r2.clear(), null === (i2 = this._charSizeService) || void 0 === i2 || i2.measure();
                    break;
                  case "cursorBlink":
                  case "cursorStyle":
                    this.refresh(this.buffer.y, this.buffer.y);
                    break;
                  case "customGlyphs":
                  case "drawBoldTextInBrightColors":
                  case "letterSpacing":
                  case "lineHeight":
                  case "fontWeight":
                  case "fontWeightBold":
                  case "minimumContrastRatio":
                    this._renderService && (this._renderService.clear(), this._renderService.onResize(this.cols, this.rows), this.refresh(0, this.rows - 1));
                    break;
                  case "rendererType":
                    this._renderService && (this._renderService.setRenderer(this._createRenderer()), this._renderService.onResize(this.cols, this.rows));
                    break;
                  case "scrollback":
                    null === (n2 = this.viewport) || void 0 === n2 || n2.syncScrollArea();
                    break;
                  case "screenReaderMode":
                    this.optionsService.rawOptions.screenReaderMode ? !this._accessibilityManager && this._renderService && (this._accessibilityManager = new S.AccessibilityManager(this, this._renderService)) : (null === (o2 = this._accessibilityManager) || void 0 === o2 || o2.dispose(), this._accessibilityManager = void 0);
                    break;
                  case "tabStopWidth":
                    this.buffers.setupTabStops();
                    break;
                  case "theme":
                    this._setTheme(this.optionsService.rawOptions.theme);
                }
              }, t3.prototype._onTextAreaFocus = function(e4) {
                this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(u.C0.ESC + "[I"), this.updateCursorStyle(e4), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
              }, t3.prototype.blur = function() {
                var e4;
                return null === (e4 = this.textarea) || void 0 === e4 ? void 0 : e4.blur();
              }, t3.prototype._onTextAreaBlur = function() {
                this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(u.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
              }, t3.prototype._syncTextArea = function() {
                if (this.textarea && this.buffer.isCursorInViewport && !this._compositionHelper.isComposing && this._renderService) {
                  var e4 = this.buffer.ybase + this.buffer.y, t4 = this.buffer.lines.get(e4);
                  if (t4) {
                    var r2 = Math.min(this.buffer.x, this.cols - 1), i2 = this._renderService.dimensions.actualCellHeight, n2 = t4.getWidth(r2), o2 = this._renderService.dimensions.actualCellWidth * n2, s2 = this.buffer.y * this._renderService.dimensions.actualCellHeight, a2 = r2 * this._renderService.dimensions.actualCellWidth;
                    this.textarea.style.left = a2 + "px", this.textarea.style.top = s2 + "px", this.textarea.style.width = o2 + "px", this.textarea.style.height = i2 + "px", this.textarea.style.lineHeight = i2 + "px", this.textarea.style.zIndex = "-5";
                  }
                }
              }, t3.prototype._initGlobal = function() {
                var e4 = this;
                this._bindKeys(), this.register((0, y.addDisposableDomListener)(this.element, "copy", function(t5) {
                  e4.hasSelection() && (0, h.copyHandler)(t5, e4._selectionService);
                }));
                var t4 = function(t5) {
                  return (0, h.handlePasteEvent)(t5, e4.textarea, e4.coreService);
                };
                this.register((0, y.addDisposableDomListener)(this.textarea, "paste", t4)), this.register((0, y.addDisposableDomListener)(this.element, "paste", t4)), v.isFirefox ? this.register((0, y.addDisposableDomListener)(this.element, "mousedown", function(t5) {
                  2 === t5.button && (0, h.rightClickHandler)(t5, e4.textarea, e4.screenElement, e4._selectionService, e4.options.rightClickSelectsWord);
                })) : this.register((0, y.addDisposableDomListener)(this.element, "contextmenu", function(t5) {
                  (0, h.rightClickHandler)(t5, e4.textarea, e4.screenElement, e4._selectionService, e4.options.rightClickSelectsWord);
                })), v.isLinux && this.register((0, y.addDisposableDomListener)(this.element, "auxclick", function(t5) {
                  1 === t5.button && (0, h.moveTextAreaUnderMouseCursor)(t5, e4.textarea, e4.screenElement);
                }));
              }, t3.prototype._bindKeys = function() {
                var e4 = this;
                this.register((0, y.addDisposableDomListener)(this.textarea, "keyup", function(t4) {
                  return e4._keyUp(t4);
                }, true)), this.register((0, y.addDisposableDomListener)(this.textarea, "keydown", function(t4) {
                  return e4._keyDown(t4);
                }, true)), this.register((0, y.addDisposableDomListener)(this.textarea, "keypress", function(t4) {
                  return e4._keyPress(t4);
                }, true)), this.register((0, y.addDisposableDomListener)(this.textarea, "compositionstart", function() {
                  return e4._compositionHelper.compositionstart();
                })), this.register((0, y.addDisposableDomListener)(this.textarea, "compositionupdate", function(t4) {
                  return e4._compositionHelper.compositionupdate(t4);
                })), this.register((0, y.addDisposableDomListener)(this.textarea, "compositionend", function() {
                  return e4._compositionHelper.compositionend();
                })), this.register((0, y.addDisposableDomListener)(this.textarea, "input", function(t4) {
                  return e4._inputEvent(t4);
                }, true)), this.register(this.onRender(function() {
                  return e4._compositionHelper.updateCompositionElements();
                })), this.register(this.onRender(function(t4) {
                  return e4._queueLinkification(t4.start, t4.end);
                }));
              }, t3.prototype.open = function(e4) {
                var t4 = this;
                if (!e4)
                  throw new Error("Terminal requires a parent element.");
                e4.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this._document = e4.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), e4.appendChild(this.element);
                var r2 = U.createDocumentFragment();
                this._viewportElement = U.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), r2.appendChild(this._viewportElement), this._viewportScrollArea = U.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = U.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = U.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), r2.appendChild(this.screenElement), this.textarea = U.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", g.promptLabel), this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this.register((0, y.addDisposableDomListener)(this.textarea, "focus", function(e5) {
                  return t4._onTextAreaFocus(e5);
                })), this.register((0, y.addDisposableDomListener)(this.textarea, "blur", function() {
                  return t4._onTextAreaBlur();
                })), this._helperContainer.appendChild(this.textarea);
                var i2 = this._instantiationService.createInstance(D.CoreBrowserService, this.textarea);
                this._instantiationService.setService(k.ICoreBrowserService, i2), this._charSizeService = this._instantiationService.createInstance(M.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(k.ICharSizeService, this._charSizeService), this._theme = this.options.theme || this._theme, this._colorManager = new x.ColorManager(U, this.options.allowTransparency), this.register(this.optionsService.onOptionChange(function(e5) {
                  return t4._colorManager.onOptionsChange(e5);
                })), this._colorManager.setTheme(this._theme), this._characterJoinerService = this._instantiationService.createInstance(P.CharacterJoinerService), this._instantiationService.setService(k.ICharacterJoinerService, this._characterJoinerService);
                var n2 = this._createRenderer();
                this._renderService = this.register(this._instantiationService.createInstance(R.RenderService, n2, this.rows, this.screenElement)), this._instantiationService.setService(k.IRenderService, this._renderService), this.register(this._renderService.onRenderedViewportChange(function(e5) {
                  return t4._onRender.fire(e5);
                })), this.onResize(function(e5) {
                  return t4._renderService.resize(e5.cols, e5.rows);
                }), this._compositionView = U.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(c.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(r2), this._soundService = this._instantiationService.createInstance(m.SoundService), this._instantiationService.setService(k.ISoundService, this._soundService), this._mouseService = this._instantiationService.createInstance(A.MouseService), this._instantiationService.setService(k.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(l.Viewport, function(e5) {
                  return t4.scrollLines(e5, true, 1);
                }, this._viewportElement, this._viewportScrollArea, this.element), this.viewport.onThemeChange(this._colorManager.colors), this.register(this._inputHandler.onRequestSyncScrollBar(function() {
                  return t4.viewport.syncScrollArea();
                })), this.register(this.viewport), this.register(this.onCursorMove(function() {
                  t4._renderService.onCursorMove(), t4._syncTextArea();
                })), this.register(this.onResize(function() {
                  return t4._renderService.onResize(t4.cols, t4.rows);
                })), this.register(this.onBlur(function() {
                  return t4._renderService.onBlur();
                })), this.register(this.onFocus(function() {
                  return t4._renderService.onFocus();
                })), this.register(this._renderService.onDimensionsChange(function() {
                  return t4.viewport.syncScrollArea();
                })), this._selectionService = this.register(this._instantiationService.createInstance(p.SelectionService, this.element, this.screenElement, this.linkifier2)), this._instantiationService.setService(k.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines(function(e5) {
                  return t4.scrollLines(e5.amount, e5.suppressScrollEvent);
                })), this.register(this._selectionService.onSelectionChange(function() {
                  return t4._onSelectionChange.fire();
                })), this.register(this._selectionService.onRequestRedraw(function(e5) {
                  return t4._renderService.onSelectionChanged(e5.start, e5.end, e5.columnSelectMode);
                })), this.register(this._selectionService.onLinuxMouseSelection(function(e5) {
                  t4.textarea.value = e5, t4.textarea.focus(), t4.textarea.select();
                })), this.register(this._onScroll.event(function(e5) {
                  t4.viewport.syncScrollArea(), t4._selectionService.refresh();
                })), this.register((0, y.addDisposableDomListener)(this._viewportElement, "scroll", function() {
                  return t4._selectionService.refresh();
                })), this._mouseZoneManager = this._instantiationService.createInstance(b.MouseZoneManager, this.element, this.screenElement), this.register(this._mouseZoneManager), this.register(this.onScroll(function() {
                  return t4._mouseZoneManager.clearAll();
                })), this.linkifier.attachToDom(this.element, this._mouseZoneManager), this.linkifier2.attachToDom(this.screenElement, this._mouseService, this._renderService), this.register(this._instantiationService.createInstance(H.BufferDecorationRenderer, this.screenElement)), this.register((0, y.addDisposableDomListener)(this.element, "mousedown", function(e5) {
                  return t4._selectionService.onMouseDown(e5);
                })), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager = new S.AccessibilityManager(this, this._renderService)), this.options.overviewRulerWidth && (this._overviewRulerRenderer = this._instantiationService.createInstance(j.OverviewRulerRenderer, this._viewportElement, this.screenElement)), this.optionsService.onOptionChange(function() {
                  !t4._overviewRulerRenderer && t4.options.overviewRulerWidth && t4._viewportElement && t4.screenElement && (t4._overviewRulerRenderer = t4._instantiationService.createInstance(j.OverviewRulerRenderer, t4._viewportElement, t4.screenElement));
                }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
              }, t3.prototype._createRenderer = function() {
                switch (this.options.rendererType) {
                  case "canvas":
                    return this._instantiationService.createInstance(_.Renderer, this._colorManager.colors, this.screenElement, this.linkifier, this.linkifier2);
                  case "dom":
                    return this._instantiationService.createInstance(C.DomRenderer, this._colorManager.colors, this.element, this.screenElement, this._viewportElement, this.linkifier, this.linkifier2);
                  default:
                    throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"');
                }
              }, t3.prototype._setTheme = function(e4) {
                var t4, r2, i2;
                this._theme = e4, null === (t4 = this._colorManager) || void 0 === t4 || t4.setTheme(e4), null === (r2 = this._renderService) || void 0 === r2 || r2.setColors(this._colorManager.colors), null === (i2 = this.viewport) || void 0 === i2 || i2.onThemeChange(this._colorManager.colors);
              }, t3.prototype.bindMouse = function() {
                var e4 = this, t4 = this, r2 = this.element;
                function i2(e5) {
                  var r3, i3, n3 = t4._mouseService.getRawByteCoords(e5, t4.screenElement, t4.cols, t4.rows);
                  if (!n3)
                    return false;
                  switch (e5.overrideType || e5.type) {
                    case "mousemove":
                      i3 = 32, void 0 === e5.buttons ? (r3 = 3, void 0 !== e5.button && (r3 = e5.button < 3 ? e5.button : 3)) : r3 = 1 & e5.buttons ? 0 : 4 & e5.buttons ? 1 : 2 & e5.buttons ? 2 : 3;
                      break;
                    case "mouseup":
                      i3 = 0, r3 = e5.button < 3 ? e5.button : 3;
                      break;
                    case "mousedown":
                      i3 = 1, r3 = e5.button < 3 ? e5.button : 3;
                      break;
                    case "wheel":
                      if (0 === t4.viewport.getLinesScrolled(e5))
                        return false;
                      i3 = e5.deltaY < 0 ? 0 : 1, r3 = 4;
                      break;
                    default:
                      return false;
                  }
                  return !(void 0 === i3 || void 0 === r3 || r3 > 4) && t4.coreMouseService.triggerMouseEvent({ col: n3.x - 33, row: n3.y - 33, button: r3, action: i3, ctrl: e5.ctrlKey, alt: e5.altKey, shift: e5.shiftKey });
                }
                var n2 = { mouseup: null, wheel: null, mousedrag: null, mousemove: null }, o2 = function(t5) {
                  return i2(t5), t5.buttons || (e4._document.removeEventListener("mouseup", n2.mouseup), n2.mousedrag && e4._document.removeEventListener("mousemove", n2.mousedrag)), e4.cancel(t5);
                }, s2 = function(t5) {
                  return i2(t5), e4.cancel(t5, true);
                }, a2 = function(e5) {
                  e5.buttons && i2(e5);
                }, c2 = function(e5) {
                  e5.buttons || i2(e5);
                };
                this.register(this.coreMouseService.onProtocolChange(function(t5) {
                  t5 ? ("debug" === e4.optionsService.rawOptions.logLevel && e4._logService.debug("Binding to mouse events:", e4.coreMouseService.explainEvents(t5)), e4.element.classList.add("enable-mouse-events"), e4._selectionService.disable()) : (e4._logService.debug("Unbinding from mouse events."), e4.element.classList.remove("enable-mouse-events"), e4._selectionService.enable()), 8 & t5 ? n2.mousemove || (r2.addEventListener("mousemove", c2), n2.mousemove = c2) : (r2.removeEventListener("mousemove", n2.mousemove), n2.mousemove = null), 16 & t5 ? n2.wheel || (r2.addEventListener("wheel", s2, { passive: false }), n2.wheel = s2) : (r2.removeEventListener("wheel", n2.wheel), n2.wheel = null), 2 & t5 ? n2.mouseup || (n2.mouseup = o2) : (e4._document.removeEventListener("mouseup", n2.mouseup), n2.mouseup = null), 4 & t5 ? n2.mousedrag || (n2.mousedrag = a2) : (e4._document.removeEventListener("mousemove", n2.mousedrag), n2.mousedrag = null);
                })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, y.addDisposableDomListener)(r2, "mousedown", function(t5) {
                  if (t5.preventDefault(), e4.focus(), e4.coreMouseService.areMouseEventsActive && !e4._selectionService.shouldForceSelection(t5))
                    return i2(t5), n2.mouseup && e4._document.addEventListener("mouseup", n2.mouseup), n2.mousedrag && e4._document.addEventListener("mousemove", n2.mousedrag), e4.cancel(t5);
                })), this.register((0, y.addDisposableDomListener)(r2, "wheel", function(t5) {
                  if (!n2.wheel) {
                    if (!e4.buffer.hasScrollback) {
                      var r3 = e4.viewport.getLinesScrolled(t5);
                      if (0 === r3)
                        return;
                      for (var i3 = u.C0.ESC + (e4.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (t5.deltaY < 0 ? "A" : "B"), o3 = "", s3 = 0; s3 < Math.abs(r3); s3++)
                        o3 += i3;
                      return e4.coreService.triggerDataEvent(o3, true), e4.cancel(t5, true);
                    }
                    return e4.viewport.onWheel(t5) ? e4.cancel(t5) : void 0;
                  }
                }, { passive: false })), this.register((0, y.addDisposableDomListener)(r2, "touchstart", function(t5) {
                  if (!e4.coreMouseService.areMouseEventsActive)
                    return e4.viewport.onTouchStart(t5), e4.cancel(t5);
                }, { passive: true })), this.register((0, y.addDisposableDomListener)(r2, "touchmove", function(t5) {
                  if (!e4.coreMouseService.areMouseEventsActive)
                    return e4.viewport.onTouchMove(t5) ? void 0 : e4.cancel(t5);
                }, { passive: false }));
              }, t3.prototype.refresh = function(e4, t4) {
                var r2;
                null === (r2 = this._renderService) || void 0 === r2 || r2.refreshRows(e4, t4);
              }, t3.prototype._queueLinkification = function(e4, t4) {
                var r2;
                null === (r2 = this.linkifier) || void 0 === r2 || r2.linkifyRows(e4, t4);
              }, t3.prototype.updateCursorStyle = function(e4) {
                var t4;
                (null === (t4 = this._selectionService) || void 0 === t4 ? void 0 : t4.shouldColumnSelect(e4)) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
              }, t3.prototype._showCursor = function() {
                this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = true, this.refresh(this.buffer.y, this.buffer.y));
              }, t3.prototype.scrollLines = function(t4, r2, i2) {
                void 0 === i2 && (i2 = 0), e3.prototype.scrollLines.call(this, t4, r2, i2), this.refresh(0, this.rows - 1);
              }, t3.prototype.paste = function(e4) {
                (0, h.paste)(e4, this.textarea, this.coreService);
              }, t3.prototype.attachCustomKeyEventHandler = function(e4) {
                this._customKeyEventHandler = e4;
              }, t3.prototype.registerLinkMatcher = function(e4, t4, r2) {
                var i2 = this.linkifier.registerLinkMatcher(e4, t4, r2);
                return this.refresh(0, this.rows - 1), i2;
              }, t3.prototype.deregisterLinkMatcher = function(e4) {
                this.linkifier.deregisterLinkMatcher(e4) && this.refresh(0, this.rows - 1);
              }, t3.prototype.registerLinkProvider = function(e4) {
                return this.linkifier2.registerLinkProvider(e4);
              }, t3.prototype.registerCharacterJoiner = function(e4) {
                if (!this._characterJoinerService)
                  throw new Error("Terminal must be opened first");
                var t4 = this._characterJoinerService.register(e4);
                return this.refresh(0, this.rows - 1), t4;
              }, t3.prototype.deregisterCharacterJoiner = function(e4) {
                if (!this._characterJoinerService)
                  throw new Error("Terminal must be opened first");
                this._characterJoinerService.deregister(e4) && this.refresh(0, this.rows - 1);
              }, Object.defineProperty(t3.prototype, "markers", { get: function() {
                return this.buffer.markers;
              }, enumerable: false, configurable: true }), t3.prototype.addMarker = function(e4) {
                if (this.buffer === this.buffers.normal)
                  return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e4);
              }, t3.prototype.registerDecoration = function(e4) {
                return this._decorationService.registerDecoration(e4);
              }, t3.prototype.hasSelection = function() {
                return !!this._selectionService && this._selectionService.hasSelection;
              }, t3.prototype.select = function(e4, t4, r2) {
                this._selectionService.setSelection(e4, t4, r2);
              }, t3.prototype.getSelection = function() {
                return this._selectionService ? this._selectionService.selectionText : "";
              }, t3.prototype.getSelectionPosition = function() {
                if (this._selectionService && this._selectionService.hasSelection)
                  return { startColumn: this._selectionService.selectionStart[0], startRow: this._selectionService.selectionStart[1], endColumn: this._selectionService.selectionEnd[0], endRow: this._selectionService.selectionEnd[1] };
              }, t3.prototype.clearSelection = function() {
                var e4;
                null === (e4 = this._selectionService) || void 0 === e4 || e4.clearSelection();
              }, t3.prototype.selectAll = function() {
                var e4;
                null === (e4 = this._selectionService) || void 0 === e4 || e4.selectAll();
              }, t3.prototype.selectLines = function(e4, t4) {
                var r2;
                null === (r2 = this._selectionService) || void 0 === r2 || r2.selectLines(e4, t4);
              }, t3.prototype._keyDown = function(e4) {
                if (this._keyDownHandled = false, this._keyDownSeen = true, this._customKeyEventHandler && false === this._customKeyEventHandler(e4))
                  return false;
                var t4 = this.browser.isMac && this.options.macOptionIsMeta && e4.altKey;
                if (!t4 && !this._compositionHelper.keydown(e4))
                  return this.buffer.ybase !== this.buffer.ydisp && this._bufferService.scrollToBottom(), false;
                t4 || "Dead" !== e4.key && "AltGraph" !== e4.key || (this._unprocessedDeadKey = true);
                var r2 = (0, w.evaluateKeyboardEvent)(e4, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
                if (this.updateCursorStyle(e4), 3 === r2.type || 2 === r2.type) {
                  var i2 = this.rows - 1;
                  return this.scrollLines(2 === r2.type ? -i2 : i2), this.cancel(e4, true);
                }
                return 1 === r2.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e4) || (r2.cancel && this.cancel(e4, true), !r2.key || !!(e4.key && !e4.ctrlKey && !e4.altKey && !e4.metaKey && 1 === e4.key.length && e4.key.charCodeAt(0) >= 65 && e4.key.charCodeAt(0) <= 90) || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = false, true) : (r2.key !== u.C0.ETX && r2.key !== u.C0.CR || (this.textarea.value = ""), this._onKey.fire({ key: r2.key, domEvent: e4 }), this._showCursor(), this.coreService.triggerDataEvent(r2.key, true), this.optionsService.rawOptions.screenReaderMode ? void (this._keyDownHandled = true) : this.cancel(e4, true))));
              }, t3.prototype._isThirdLevelShift = function(e4, t4) {
                var r2 = e4.isMac && !this.options.macOptionIsMeta && t4.altKey && !t4.ctrlKey && !t4.metaKey || e4.isWindows && t4.altKey && t4.ctrlKey && !t4.metaKey || e4.isWindows && t4.getModifierState("AltGraph");
                return "keypress" === t4.type ? r2 : r2 && (!t4.keyCode || t4.keyCode > 47);
              }, t3.prototype._keyUp = function(e4) {
                this._keyDownSeen = false, this._customKeyEventHandler && false === this._customKeyEventHandler(e4) || (function(e5) {
                  return 16 === e5.keyCode || 17 === e5.keyCode || 18 === e5.keyCode;
                }(e4) || this.focus(), this.updateCursorStyle(e4), this._keyPressHandled = false);
              }, t3.prototype._keyPress = function(e4) {
                var t4;
                if (this._keyPressHandled = false, this._keyDownHandled)
                  return false;
                if (this._customKeyEventHandler && false === this._customKeyEventHandler(e4))
                  return false;
                if (this.cancel(e4), e4.charCode)
                  t4 = e4.charCode;
                else if (null === e4.which || void 0 === e4.which)
                  t4 = e4.keyCode;
                else {
                  if (0 === e4.which || 0 === e4.charCode)
                    return false;
                  t4 = e4.which;
                }
                return !(!t4 || (e4.altKey || e4.ctrlKey || e4.metaKey) && !this._isThirdLevelShift(this.browser, e4) || (t4 = String.fromCharCode(t4), this._onKey.fire({ key: t4, domEvent: e4 }), this._showCursor(), this.coreService.triggerDataEvent(t4, true), this._keyPressHandled = true, this._unprocessedDeadKey = false, 0));
              }, t3.prototype._inputEvent = function(e4) {
                if (e4.data && "insertText" === e4.inputType && (!e4.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
                  if (this._keyPressHandled)
                    return false;
                  this._unprocessedDeadKey = false;
                  var t4 = e4.data;
                  return this.coreService.triggerDataEvent(t4, true), this.cancel(e4), true;
                }
                return false;
              }, t3.prototype.bell = function() {
                var e4;
                this._soundBell() && (null === (e4 = this._soundService) || void 0 === e4 || e4.playBellSound()), this._onBell.fire();
              }, t3.prototype.resize = function(t4, r2) {
                t4 !== this.cols || r2 !== this.rows ? e3.prototype.resize.call(this, t4, r2) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
              }, t3.prototype._afterResize = function(e4, t4) {
                var r2, i2;
                null === (r2 = this._charSizeService) || void 0 === r2 || r2.measure(), null === (i2 = this.viewport) || void 0 === i2 || i2.syncScrollArea(true);
              }, t3.prototype.clear = function() {
                if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                  this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                  for (var e4 = 1; e4 < this.rows; e4++)
                    this.buffer.lines.push(this.buffer.getBlankLine(E.DEFAULT_ATTR_DATA));
                  this.refresh(0, this.rows - 1), this._onScroll.fire({ position: this.buffer.ydisp, source: 0 });
                }
              }, t3.prototype.reset = function() {
                var t4, r2;
                this.options.rows = this.rows, this.options.cols = this.cols;
                var i2 = this._customKeyEventHandler;
                this._setup(), e3.prototype.reset.call(this), null === (t4 = this._selectionService) || void 0 === t4 || t4.reset(), this._decorationService.reset(), this._customKeyEventHandler = i2, this.refresh(0, this.rows - 1), null === (r2 = this.viewport) || void 0 === r2 || r2.syncScrollArea();
              }, t3.prototype.clearTextureAtlas = function() {
                var e4;
                null === (e4 = this._renderService) || void 0 === e4 || e4.clearTextureAtlas();
              }, t3.prototype._reportFocus = function() {
                var e4;
                (null === (e4 = this.element) || void 0 === e4 ? void 0 : e4.classList.contains("focus")) ? this.coreService.triggerDataEvent(u.C0.ESC + "[I") : this.coreService.triggerDataEvent(u.C0.ESC + "[O");
              }, t3.prototype._reportWindowsOptions = function(e4) {
                if (this._renderService)
                  switch (e4) {
                    case f.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                      var t4 = this._renderService.dimensions.scaledCanvasWidth.toFixed(0), r2 = this._renderService.dimensions.scaledCanvasHeight.toFixed(0);
                      this.coreService.triggerDataEvent(u.C0.ESC + "[4;" + r2 + ";" + t4 + "t");
                      break;
                    case f.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                      var i2 = this._renderService.dimensions.scaledCellWidth.toFixed(0), n2 = this._renderService.dimensions.scaledCellHeight.toFixed(0);
                      this.coreService.triggerDataEvent(u.C0.ESC + "[6;" + n2 + ";" + i2 + "t");
                  }
              }, t3.prototype.cancel = function(e4, t4) {
                if (this.options.cancelEvents || t4)
                  return e4.preventDefault(), e4.stopPropagation(), false;
              }, t3.prototype._visualBell = function() {
                return false;
              }, t3.prototype._soundBell = function() {
                return "sound" === this.options.bellStyle;
              }, t3;
            }(T.CoreTerminal);
            t2.Terminal = q;
          }, 9924: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.TimeBasedDebouncer = void 0;
            var r = function() {
              function e3(e4, t3) {
                void 0 === t3 && (t3 = 1e3), this._renderCallback = e4, this._debounceThresholdMS = t3, this._lastRefreshMs = 0, this._additionalRefreshRequested = false;
              }
              return e3.prototype.dispose = function() {
                this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
              }, e3.prototype.refresh = function(e4, t3, r2) {
                var i = this;
                this._rowCount = r2, e4 = void 0 !== e4 ? e4 : 0, t3 = void 0 !== t3 ? t3 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e4) : e4, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t3) : t3;
                var n = Date.now();
                if (n - this._lastRefreshMs >= this._debounceThresholdMS)
                  this._lastRefreshMs = n, this._innerRefresh();
                else if (!this._additionalRefreshRequested) {
                  var o = n - this._lastRefreshMs, s = this._debounceThresholdMS - o;
                  this._additionalRefreshRequested = true, this._refreshTimeoutID = window.setTimeout(function() {
                    i._lastRefreshMs = Date.now(), i._innerRefresh(), i._additionalRefreshRequested = false, i._refreshTimeoutID = void 0;
                  }, s);
                }
              }, e3.prototype._innerRefresh = function() {
                if (void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount) {
                  var e4 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
                  this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e4, t3);
                }
              }, e3;
            }();
            t2.TimeBasedDebouncer = r;
          }, 1680: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Viewport = void 0;
            var a = r(844), c = r(3656), l = r(4725), h = r(2585), u = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, a2, l2) {
                var h2 = e3.call(this) || this;
                return h2._scrollLines = t4, h2._viewportElement = r2, h2._scrollArea = i2, h2._element = n2, h2._bufferService = o2, h2._optionsService = s2, h2._charSizeService = a2, h2._renderService = l2, h2.scrollBarWidth = 0, h2._currentRowHeight = 0, h2._currentScaledCellHeight = 0, h2._lastRecordedBufferLength = 0, h2._lastRecordedViewportHeight = 0, h2._lastRecordedBufferHeight = 0, h2._lastTouchY = 0, h2._lastScrollTop = 0, h2._wheelPartialScroll = 0, h2._refreshAnimationFrame = null, h2._ignoreNextScrollEvent = false, h2.scrollBarWidth = h2._viewportElement.offsetWidth - h2._scrollArea.offsetWidth || 15, h2.register((0, c.addDisposableDomListener)(h2._viewportElement, "scroll", h2._onScroll.bind(h2))), h2._activeBuffer = h2._bufferService.buffer, h2.register(h2._bufferService.buffers.onBufferActivate(function(e4) {
                  return h2._activeBuffer = e4.activeBuffer;
                })), h2._renderDimensions = h2._renderService.dimensions, h2.register(h2._renderService.onDimensionsChange(function(e4) {
                  return h2._renderDimensions = e4;
                })), setTimeout(function() {
                  return h2.syncScrollArea();
                }, 0), h2;
              }
              return n(t3, e3), t3.prototype.onThemeChange = function(e4) {
                this._viewportElement.style.backgroundColor = e4.background.css;
              }, t3.prototype._refresh = function(e4) {
                var t4 = this;
                if (e4)
                  return this._innerRefresh(), void (null !== this._refreshAnimationFrame && cancelAnimationFrame(this._refreshAnimationFrame));
                null === this._refreshAnimationFrame && (this._refreshAnimationFrame = requestAnimationFrame(function() {
                  return t4._innerRefresh();
                }));
              }, t3.prototype._innerRefresh = function() {
                if (this._charSizeService.height > 0) {
                  this._currentRowHeight = this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio, this._currentScaledCellHeight = this._renderService.dimensions.scaledCellHeight, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                  var e4 = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderService.dimensions.canvasHeight);
                  this._lastRecordedBufferHeight !== e4 && (this._lastRecordedBufferHeight = e4, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
                }
                var t4 = this._bufferService.buffer.ydisp * this._currentRowHeight;
                this._viewportElement.scrollTop !== t4 && (this._ignoreNextScrollEvent = true, this._viewportElement.scrollTop = t4), this._refreshAnimationFrame = null;
              }, t3.prototype.syncScrollArea = function(e4) {
                if (void 0 === e4 && (e4 = false), this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length)
                  return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e4);
                this._lastRecordedViewportHeight === this._renderService.dimensions.canvasHeight && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.scaledCellHeight === this._currentScaledCellHeight || this._refresh(e4);
              }, t3.prototype._onScroll = function(e4) {
                if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent) {
                  if (this._ignoreNextScrollEvent)
                    return this._ignoreNextScrollEvent = false, void this._scrollLines(0);
                  var t4 = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
                  this._scrollLines(t4);
                }
              }, t3.prototype._bubbleScroll = function(e4, t4) {
                var r2 = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
                return !(t4 < 0 && 0 !== this._viewportElement.scrollTop || t4 > 0 && r2 < this._lastRecordedBufferHeight) || (e4.cancelable && e4.preventDefault(), false);
              }, t3.prototype.onWheel = function(e4) {
                var t4 = this._getPixelsScrolled(e4);
                return 0 !== t4 && (this._viewportElement.scrollTop += t4, this._bubbleScroll(e4, t4));
              }, t3.prototype._getPixelsScrolled = function(e4) {
                if (0 === e4.deltaY || e4.shiftKey)
                  return 0;
                var t4 = this._applyScrollModifier(e4.deltaY, e4);
                return e4.deltaMode === WheelEvent.DOM_DELTA_LINE ? t4 *= this._currentRowHeight : e4.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t4 *= this._currentRowHeight * this._bufferService.rows), t4;
              }, t3.prototype.getLinesScrolled = function(e4) {
                if (0 === e4.deltaY || e4.shiftKey)
                  return 0;
                var t4 = this._applyScrollModifier(e4.deltaY, e4);
                return e4.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t4 /= this._currentRowHeight + 0, this._wheelPartialScroll += t4, t4 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e4.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t4 *= this._bufferService.rows), t4;
              }, t3.prototype._applyScrollModifier = function(e4, t4) {
                var r2 = this._optionsService.rawOptions.fastScrollModifier;
                return "alt" === r2 && t4.altKey || "ctrl" === r2 && t4.ctrlKey || "shift" === r2 && t4.shiftKey ? e4 * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e4 * this._optionsService.rawOptions.scrollSensitivity;
              }, t3.prototype.onTouchStart = function(e4) {
                this._lastTouchY = e4.touches[0].pageY;
              }, t3.prototype.onTouchMove = function(e4) {
                var t4 = this._lastTouchY - e4.touches[0].pageY;
                return this._lastTouchY = e4.touches[0].pageY, 0 !== t4 && (this._viewportElement.scrollTop += t4, this._bubbleScroll(e4, t4));
              }, o([s(4, h.IBufferService), s(5, h.IOptionsService), s(6, l.ICharSizeService), s(7, l.IRenderService)], t3);
            }(a.Disposable);
            t2.Viewport = u;
          }, 3107: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, a = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferDecorationRenderer = void 0;
            var c = r(3656), l = r(4725), h = r(844), u = r(2585), f = function(e3) {
              function t3(t4, r2, i2, n2) {
                var o2 = e3.call(this) || this;
                return o2._screenElement = t4, o2._bufferService = r2, o2._decorationService = i2, o2._renderService = n2, o2._decorationElements = /* @__PURE__ */ new Map(), o2._altBufferIsActive = false, o2._dimensionsChanged = false, o2._container = document.createElement("div"), o2._container.classList.add("xterm-decoration-container"), o2._screenElement.appendChild(o2._container), o2.register(o2._renderService.onRenderedViewportChange(function() {
                  return o2._queueRefresh();
                })), o2.register(o2._renderService.onDimensionsChange(function() {
                  o2._dimensionsChanged = true, o2._queueRefresh();
                })), o2.register((0, c.addDisposableDomListener)(window, "resize", function() {
                  return o2._queueRefresh();
                })), o2.register(o2._bufferService.buffers.onBufferActivate(function() {
                  o2._altBufferIsActive = o2._bufferService.buffer === o2._bufferService.buffers.alt;
                })), o2.register(o2._decorationService.onDecorationRegistered(function() {
                  return o2._queueRefresh();
                })), o2.register(o2._decorationService.onDecorationRemoved(function(e4) {
                  return o2._removeDecoration(e4);
                })), o2;
              }
              return n(t3, e3), t3.prototype.dispose = function() {
                this._container.remove(), this._decorationElements.clear(), e3.prototype.dispose.call(this);
              }, t3.prototype._queueRefresh = function() {
                var e4 = this;
                void 0 === this._animationFrame && (this._animationFrame = this._renderService.addRefreshCallback(function() {
                  e4.refreshDecorations(), e4._animationFrame = void 0;
                }));
              }, t3.prototype.refreshDecorations = function() {
                var e4, t4;
                try {
                  for (var r2 = a(this._decorationService.decorations), i2 = r2.next(); !i2.done; i2 = r2.next()) {
                    var n2 = i2.value;
                    this._renderDecoration(n2);
                  }
                } catch (t5) {
                  e4 = { error: t5 };
                } finally {
                  try {
                    i2 && !i2.done && (t4 = r2.return) && t4.call(r2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
                this._dimensionsChanged = false;
              }, t3.prototype._renderDecoration = function(e4) {
                this._refreshStyle(e4), this._dimensionsChanged && this._refreshXPosition(e4);
              }, t3.prototype._createElement = function(e4) {
                var t4, r2 = document.createElement("div");
                r2.classList.add("xterm-decoration"), r2.style.width = Math.round((e4.options.width || 1) * this._renderService.dimensions.actualCellWidth) + "px", r2.style.height = (e4.options.height || 1) * this._renderService.dimensions.actualCellHeight + "px", r2.style.top = (e4.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.actualCellHeight + "px", r2.style.lineHeight = this._renderService.dimensions.actualCellHeight + "px";
                var i2 = null !== (t4 = e4.options.x) && void 0 !== t4 ? t4 : 0;
                return i2 && i2 > this._bufferService.cols && (r2.style.display = "none"), this._refreshXPosition(e4, r2), r2;
              }, t3.prototype._refreshStyle = function(e4) {
                var t4 = this, r2 = e4.marker.line - this._bufferService.buffers.active.ydisp;
                if (r2 < 0 || r2 >= this._bufferService.rows)
                  e4.element && (e4.element.style.display = "none", e4.onRenderEmitter.fire(e4.element));
                else {
                  var i2 = this._decorationElements.get(e4);
                  i2 || (e4.onDispose(function() {
                    return t4._removeDecoration(e4);
                  }), i2 = this._createElement(e4), e4.element = i2, this._decorationElements.set(e4, i2), this._container.appendChild(i2)), i2.style.top = r2 * this._renderService.dimensions.actualCellHeight + "px", i2.style.display = this._altBufferIsActive ? "none" : "block", e4.onRenderEmitter.fire(i2);
                }
              }, t3.prototype._refreshXPosition = function(e4, t4) {
                var r2;
                if (void 0 === t4 && (t4 = e4.element), t4) {
                  var i2 = null !== (r2 = e4.options.x) && void 0 !== r2 ? r2 : 0;
                  "right" === (e4.options.anchor || "left") ? t4.style.right = i2 ? i2 * this._renderService.dimensions.actualCellWidth + "px" : "" : t4.style.left = i2 ? i2 * this._renderService.dimensions.actualCellWidth + "px" : "";
                }
              }, t3.prototype._removeDecoration = function(e4) {
                var t4;
                null === (t4 = this._decorationElements.get(e4)) || void 0 === t4 || t4.remove(), this._decorationElements.delete(e4);
              }, o([s(1, u.IBufferService), s(2, u.IDecorationService), s(3, l.IRenderService)], t3);
            }(h.Disposable);
            t2.BufferDecorationRenderer = f;
          }, 5871: function(e2, t2) {
            var r = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorZoneStore = void 0;
            var i = function() {
              function e3() {
                this._zones = [], this._zonePool = [], this._zonePoolIndex = 0, this._linePadding = { full: 0, left: 0, center: 0, right: 0 };
              }
              return Object.defineProperty(e3.prototype, "zones", { get: function() {
                return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
              }, enumerable: false, configurable: true }), e3.prototype.clear = function() {
                this._zones.length = 0, this._zonePoolIndex = 0;
              }, e3.prototype.addDecoration = function(e4) {
                var t3, i2;
                if (e4.options.overviewRulerOptions) {
                  try {
                    for (var n = r(this._zones), o = n.next(); !o.done; o = n.next()) {
                      var s = o.value;
                      if (s.color === e4.options.overviewRulerOptions.color && s.position === e4.options.overviewRulerOptions.position) {
                        if (this._lineIntersectsZone(s, e4.marker.line))
                          return;
                        if (this._lineAdjacentToZone(s, e4.marker.line, e4.options.overviewRulerOptions.position))
                          return void this._addLineToZone(s, e4.marker.line);
                      }
                    }
                  } catch (e5) {
                    t3 = { error: e5 };
                  } finally {
                    try {
                      o && !o.done && (i2 = n.return) && i2.call(n);
                    } finally {
                      if (t3)
                        throw t3.error;
                    }
                  }
                  if (this._zonePoolIndex < this._zonePool.length)
                    return this._zonePool[this._zonePoolIndex].color = e4.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = e4.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = e4.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = e4.marker.line, void this._zones.push(this._zonePool[this._zonePoolIndex++]);
                  this._zones.push({ color: e4.options.overviewRulerOptions.color, position: e4.options.overviewRulerOptions.position, startBufferLine: e4.marker.line, endBufferLine: e4.marker.line }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
                }
              }, e3.prototype.setPadding = function(e4) {
                this._linePadding = e4;
              }, e3.prototype._lineIntersectsZone = function(e4, t3) {
                return t3 >= e4.startBufferLine && t3 <= e4.endBufferLine;
              }, e3.prototype._lineAdjacentToZone = function(e4, t3, r2) {
                return t3 >= e4.startBufferLine - this._linePadding[r2 || "full"] && t3 <= e4.endBufferLine + this._linePadding[r2 || "full"];
              }, e3.prototype._addLineToZone = function(e4, t3) {
                e4.startBufferLine = Math.min(e4.startBufferLine, t3), e4.endBufferLine = Math.max(e4.endBufferLine, t3);
              }, e3;
            }();
            t2.ColorZoneStore = i;
          }, 5744: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, a = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.OverviewRulerRenderer = void 0;
            var c = r(5871), l = r(3656), h = r(4725), u = r(844), f = r(2585), _ = { full: 0, left: 0, center: 0, right: 0 }, d = { full: 0, left: 0, center: 0, right: 0 }, p = { full: 0, left: 0, center: 0, right: 0 }, v = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2) {
                var a2, l2 = e3.call(this) || this;
                l2._viewportElement = t4, l2._screenElement = r2, l2._bufferService = i2, l2._decorationService = n2, l2._renderService = o2, l2._optionsService = s2, l2._colorZoneStore = new c.ColorZoneStore(), l2._shouldUpdateDimensions = true, l2._shouldUpdateAnchor = true, l2._lastKnownBufferLength = 0, l2._canvas = document.createElement("canvas"), l2._canvas.classList.add("xterm-decoration-overview-ruler"), l2._refreshCanvasDimensions(), null === (a2 = l2._viewportElement.parentElement) || void 0 === a2 || a2.insertBefore(l2._canvas, l2._viewportElement);
                var h2 = l2._canvas.getContext("2d");
                if (!h2)
                  throw new Error("Ctx cannot be null");
                return l2._ctx = h2, l2._registerDecorationListeners(), l2._registerBufferChangeListeners(), l2._registerDimensionChangeListeners(), l2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "_width", { get: function() {
                return this._optionsService.options.overviewRulerWidth || 0;
              }, enumerable: false, configurable: true }), t3.prototype._registerDecorationListeners = function() {
                var e4 = this;
                this.register(this._decorationService.onDecorationRegistered(function() {
                  return e4._queueRefresh(void 0, true);
                })), this.register(this._decorationService.onDecorationRemoved(function() {
                  return e4._queueRefresh(void 0, true);
                }));
              }, t3.prototype._registerBufferChangeListeners = function() {
                var e4 = this;
                this.register(this._renderService.onRenderedViewportChange(function() {
                  return e4._queueRefresh();
                })), this.register(this._bufferService.buffers.onBufferActivate(function() {
                  e4._canvas.style.display = e4._bufferService.buffer === e4._bufferService.buffers.alt ? "none" : "block";
                })), this.register(this._bufferService.onScroll(function() {
                  e4._lastKnownBufferLength !== e4._bufferService.buffers.normal.lines.length && (e4._refreshDrawHeightConstants(), e4._refreshColorZonePadding());
                }));
              }, t3.prototype._registerDimensionChangeListeners = function() {
                var e4 = this;
                this.register(this._renderService.onRender(function() {
                  e4._containerHeight && e4._containerHeight === e4._screenElement.clientHeight || (e4._queueRefresh(true), e4._containerHeight = e4._screenElement.clientHeight);
                })), this.register(this._optionsService.onOptionChange(function(t4) {
                  "overviewRulerWidth" === t4 && e4._queueRefresh(true);
                })), this.register((0, l.addDisposableDomListener)(window, "resize", function() {
                  e4._queueRefresh(true);
                })), this._queueRefresh(true);
              }, t3.prototype.dispose = function() {
                var t4;
                null === (t4 = this._canvas) || void 0 === t4 || t4.remove(), e3.prototype.dispose.call(this);
              }, t3.prototype._refreshDrawConstants = function() {
                var e4 = Math.floor(this._canvas.width / 3), t4 = Math.ceil(this._canvas.width / 3);
                d.full = this._canvas.width, d.left = e4, d.center = t4, d.right = e4, this._refreshDrawHeightConstants(), p.full = 0, p.left = 0, p.center = d.left, p.right = d.left + d.center;
              }, t3.prototype._refreshDrawHeightConstants = function() {
                _.full = Math.round(2 * window.devicePixelRatio);
                var e4 = this._canvas.height / this._bufferService.buffer.lines.length, t4 = Math.round(Math.max(Math.min(e4, 12), 6) * window.devicePixelRatio);
                _.left = t4, _.center = t4, _.right = t4;
              }, t3.prototype._refreshColorZonePadding = function() {
                this._colorZoneStore.setPadding({ full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * _.full), left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * _.left), center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * _.center), right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * _.right) }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
              }, t3.prototype._refreshCanvasDimensions = function() {
                this._canvas.style.width = this._width + "px", this._canvas.width = Math.round(this._width * window.devicePixelRatio), this._canvas.style.height = this._screenElement.clientHeight + "px", this._canvas.height = Math.round(this._screenElement.clientHeight * window.devicePixelRatio), this._refreshDrawConstants(), this._refreshColorZonePadding();
              }, t3.prototype._refreshDecorations = function() {
                var e4, t4, r2, i2, n2, o2;
                this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
                try {
                  for (var s2 = a(this._decorationService.decorations), c2 = s2.next(); !c2.done; c2 = s2.next()) {
                    var l2 = c2.value;
                    this._colorZoneStore.addDecoration(l2);
                  }
                } catch (t5) {
                  e4 = { error: t5 };
                } finally {
                  try {
                    c2 && !c2.done && (t4 = s2.return) && t4.call(s2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
                this._ctx.lineWidth = 1;
                var h2 = this._colorZoneStore.zones;
                try {
                  for (var u2 = a(h2), f2 = u2.next(); !f2.done; f2 = u2.next())
                    "full" !== (p2 = f2.value).position && this._renderColorZone(p2);
                } catch (e5) {
                  r2 = { error: e5 };
                } finally {
                  try {
                    f2 && !f2.done && (i2 = u2.return) && i2.call(u2);
                  } finally {
                    if (r2)
                      throw r2.error;
                  }
                }
                try {
                  for (var _2 = a(h2), d2 = _2.next(); !d2.done; d2 = _2.next()) {
                    var p2;
                    "full" === (p2 = d2.value).position && this._renderColorZone(p2);
                  }
                } catch (e5) {
                  n2 = { error: e5 };
                } finally {
                  try {
                    d2 && !d2.done && (o2 = _2.return) && o2.call(_2);
                  } finally {
                    if (n2)
                      throw n2.error;
                  }
                }
                this._shouldUpdateDimensions = false, this._shouldUpdateAnchor = false;
              }, t3.prototype._renderColorZone = function(e4) {
                this._ctx.fillStyle = e4.color, this._ctx.fillRect(p[e4.position || "full"], Math.round((this._canvas.height - 1) * (e4.startBufferLine / this._bufferService.buffers.active.lines.length) - _[e4.position || "full"] / 2), d[e4.position || "full"], Math.round((this._canvas.height - 1) * ((e4.endBufferLine - e4.startBufferLine) / this._bufferService.buffers.active.lines.length) + _[e4.position || "full"]));
              }, t3.prototype._queueRefresh = function(e4, t4) {
                var r2 = this;
                this._shouldUpdateDimensions = e4 || this._shouldUpdateDimensions, this._shouldUpdateAnchor = t4 || this._shouldUpdateAnchor, void 0 === this._animationFrame && (this._animationFrame = window.requestAnimationFrame(function() {
                  r2._refreshDecorations(), r2._animationFrame = void 0;
                }));
              }, o([s(2, f.IBufferService), s(3, f.IDecorationService), s(4, h.IRenderService), s(5, f.IOptionsService)], t3);
            }(u.Disposable);
            t2.OverviewRulerRenderer = v;
          }, 2950: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CompositionHelper = void 0;
            var o = r(4725), s = r(2585), a = function() {
              function e3(e4, t3, r2, i2, n2, o2) {
                this._textarea = e4, this._compositionView = t3, this._bufferService = r2, this._optionsService = i2, this._coreService = n2, this._renderService = o2, this._isComposing = false, this._isSendingComposition = false, this._compositionPosition = { start: 0, end: 0 }, this._dataAlreadySent = "";
              }
              return Object.defineProperty(e3.prototype, "isComposing", { get: function() {
                return this._isComposing;
              }, enumerable: false, configurable: true }), e3.prototype.compositionstart = function() {
                this._isComposing = true, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
              }, e3.prototype.compositionupdate = function(e4) {
                var t3 = this;
                this._compositionView.textContent = e4.data, this.updateCompositionElements(), setTimeout(function() {
                  t3._compositionPosition.end = t3._textarea.value.length;
                }, 0);
              }, e3.prototype.compositionend = function() {
                this._finalizeComposition(true);
              }, e3.prototype.keydown = function(e4) {
                if (this._isComposing || this._isSendingComposition) {
                  if (229 === e4.keyCode)
                    return false;
                  if (16 === e4.keyCode || 17 === e4.keyCode || 18 === e4.keyCode)
                    return false;
                  this._finalizeComposition(false);
                }
                return 229 !== e4.keyCode || (this._handleAnyTextareaChanges(), false);
              }, e3.prototype._finalizeComposition = function(e4) {
                var t3 = this;
                if (this._compositionView.classList.remove("active"), this._isComposing = false, e4) {
                  var r2 = { start: this._compositionPosition.start, end: this._compositionPosition.end };
                  this._isSendingComposition = true, setTimeout(function() {
                    if (t3._isSendingComposition) {
                      t3._isSendingComposition = false;
                      var e5;
                      r2.start += t3._dataAlreadySent.length, (e5 = t3._isComposing ? t3._textarea.value.substring(r2.start, r2.end) : t3._textarea.value.substring(r2.start)).length > 0 && t3._coreService.triggerDataEvent(e5, true);
                    }
                  }, 0);
                } else {
                  this._isSendingComposition = false;
                  var i2 = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                  this._coreService.triggerDataEvent(i2, true);
                }
              }, e3.prototype._handleAnyTextareaChanges = function() {
                var e4 = this, t3 = this._textarea.value;
                setTimeout(function() {
                  if (!e4._isComposing) {
                    var r2 = e4._textarea.value.replace(t3, "");
                    r2.length > 0 && (e4._dataAlreadySent = r2, e4._coreService.triggerDataEvent(r2, true));
                  }
                }, 0);
              }, e3.prototype.updateCompositionElements = function(e4) {
                var t3 = this;
                if (this._isComposing) {
                  if (this._bufferService.buffer.isCursorInViewport) {
                    var r2 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), i2 = this._renderService.dimensions.actualCellHeight, n2 = this._bufferService.buffer.y * this._renderService.dimensions.actualCellHeight, o2 = r2 * this._renderService.dimensions.actualCellWidth;
                    this._compositionView.style.left = o2 + "px", this._compositionView.style.top = n2 + "px", this._compositionView.style.height = i2 + "px", this._compositionView.style.lineHeight = i2 + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                    var s2 = this._compositionView.getBoundingClientRect();
                    this._textarea.style.left = o2 + "px", this._textarea.style.top = n2 + "px", this._textarea.style.width = Math.max(s2.width, 1) + "px", this._textarea.style.height = Math.max(s2.height, 1) + "px", this._textarea.style.lineHeight = s2.height + "px";
                  }
                  e4 || setTimeout(function() {
                    return t3.updateCompositionElements(true);
                  }, 0);
                }
              }, i([n(2, s.IBufferService), n(3, s.IOptionsService), n(4, s.ICoreService), n(5, o.IRenderService)], e3);
            }();
            t2.CompositionHelper = a;
          }, 9806: (e2, t2) => {
            function r(e3, t3, r2) {
              var i = r2.getBoundingClientRect(), n = e3.getComputedStyle(r2), o = parseInt(n.getPropertyValue("padding-left")), s = parseInt(n.getPropertyValue("padding-top"));
              return [t3.clientX - i.left - o, t3.clientY - i.top - s];
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.getRawByteCoords = t2.getCoords = t2.getCoordsRelativeToElement = void 0, t2.getCoordsRelativeToElement = r, t2.getCoords = function(e3, t3, i, n, o, s, a, c, l) {
              if (s) {
                var h = r(e3, t3, i);
                if (h)
                  return h[0] = Math.ceil((h[0] + (l ? a / 2 : 0)) / a), h[1] = Math.ceil(h[1] / c), h[0] = Math.min(Math.max(h[0], 1), n + (l ? 1 : 0)), h[1] = Math.min(Math.max(h[1], 1), o), h;
              }
            }, t2.getRawByteCoords = function(e3) {
              if (e3)
                return { x: e3[0] + 32, y: e3[1] + 32 };
            };
          }, 9504: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.moveToCellSequence = void 0;
            var i = r(2584);
            function n(e3, t3, r2, i2) {
              var n2 = e3 - o(r2, e3), a2 = t3 - o(r2, t3), h = Math.abs(n2 - a2) - function(e4, t4, r3) {
                for (var i3 = 0, n3 = e4 - o(r3, e4), a3 = t4 - o(r3, t4), c2 = 0; c2 < Math.abs(n3 - a3); c2++) {
                  var l2 = "A" === s(e4, t4) ? -1 : 1, h2 = r3.buffer.lines.get(n3 + l2 * c2);
                  (null == h2 ? void 0 : h2.isWrapped) && i3++;
                }
                return i3;
              }(e3, t3, r2);
              return l(h, c(s(e3, t3), i2));
            }
            function o(e3, t3) {
              for (var r2 = 0, i2 = e3.buffer.lines.get(t3), n2 = null == i2 ? void 0 : i2.isWrapped; n2 && t3 >= 0 && t3 < e3.rows; )
                r2++, n2 = null == (i2 = e3.buffer.lines.get(--t3)) ? void 0 : i2.isWrapped;
              return r2;
            }
            function s(e3, t3) {
              return e3 > t3 ? "A" : "B";
            }
            function a(e3, t3, r2, i2, n2, o2) {
              for (var s2 = e3, a2 = t3, c2 = ""; s2 !== r2 || a2 !== i2; )
                s2 += n2 ? 1 : -1, n2 && s2 > o2.cols - 1 ? (c2 += o2.buffer.translateBufferLineToString(a2, false, e3, s2), s2 = 0, e3 = 0, a2++) : !n2 && s2 < 0 && (c2 += o2.buffer.translateBufferLineToString(a2, false, 0, e3 + 1), e3 = s2 = o2.cols - 1, a2--);
              return c2 + o2.buffer.translateBufferLineToString(a2, false, e3, s2);
            }
            function c(e3, t3) {
              var r2 = t3 ? "O" : "[";
              return i.C0.ESC + r2 + e3;
            }
            function l(e3, t3) {
              e3 = Math.floor(e3);
              for (var r2 = "", i2 = 0; i2 < e3; i2++)
                r2 += t3;
              return r2;
            }
            t2.moveToCellSequence = function(e3, t3, r2, i2) {
              var s2, h = r2.buffer.x, u = r2.buffer.y;
              if (!r2.buffer.hasScrollback)
                return function(e4, t4, r3, i3, s3, h2) {
                  return 0 === n(t4, i3, s3, h2).length ? "" : l(a(e4, t4, e4, t4 - o(s3, t4), false, s3).length, c("D", h2));
                }(h, u, 0, t3, r2, i2) + n(u, t3, r2, i2) + function(e4, t4, r3, i3, s3, h2) {
                  var u2;
                  u2 = n(t4, i3, s3, h2).length > 0 ? i3 - o(s3, i3) : t4;
                  var f2 = i3, _ = function(e5, t5, r4, i4, s4, a2) {
                    var c2;
                    return c2 = n(r4, i4, s4, a2).length > 0 ? i4 - o(s4, i4) : t5, e5 < r4 && c2 <= i4 || e5 >= r4 && c2 < i4 ? "C" : "D";
                  }(e4, t4, r3, i3, s3, h2);
                  return l(a(e4, u2, r3, f2, "C" === _, s3).length, c(_, h2));
                }(h, u, e3, t3, r2, i2);
              if (u === t3)
                return s2 = h > e3 ? "D" : "C", l(Math.abs(h - e3), c(s2, i2));
              s2 = u > t3 ? "D" : "C";
              var f = Math.abs(u - t3);
              return l(function(e4, t4) {
                return t4.cols - e4;
              }(u > t3 ? e3 : h, r2) + (f - 1) * r2.cols + 1 + ((u > t3 ? h : e3) - 1), c(s2, i2));
            };
          }, 4389: function(e2, t2, r) {
            var i = this && this.__assign || function() {
              return i = Object.assign || function(e3) {
                for (var t3, r2 = 1, i2 = arguments.length; r2 < i2; r2++)
                  for (var n2 in t3 = arguments[r2])
                    Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
                return e3;
              }, i.apply(this, arguments);
            }, n = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Terminal = void 0;
            var o = r(3236), s = r(9042), a = r(7975), c = r(7090), l = r(5741), h = r(8285), u = ["cols", "rows"], f = function() {
              function e3(e4) {
                var t3 = this;
                this._core = new o.Terminal(e4), this._addonManager = new l.AddonManager(), this._publicOptions = i({}, this._core.options);
                var r2 = function(e5) {
                  return t3._core.options[e5];
                }, n2 = function(e5, r3) {
                  t3._checkReadonlyOptions(e5), t3._core.options[e5] = r3;
                };
                for (var s2 in this._core.options) {
                  var a2 = { get: r2.bind(this, s2), set: n2.bind(this, s2) };
                  Object.defineProperty(this._publicOptions, s2, a2);
                }
              }
              return e3.prototype._checkReadonlyOptions = function(e4) {
                if (u.includes(e4))
                  throw new Error('Option "' + e4 + '" can only be set in the constructor');
              }, e3.prototype._checkProposedApi = function() {
                if (!this._core.optionsService.rawOptions.allowProposedApi)
                  throw new Error("You must set the allowProposedApi option to true to use proposed API");
              }, Object.defineProperty(e3.prototype, "onBell", { get: function() {
                return this._core.onBell;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onBinary", { get: function() {
                return this._core.onBinary;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onCursorMove", { get: function() {
                return this._core.onCursorMove;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onData", { get: function() {
                return this._core.onData;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onKey", { get: function() {
                return this._core.onKey;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onLineFeed", { get: function() {
                return this._core.onLineFeed;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onRender", { get: function() {
                return this._core.onRender;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onResize", { get: function() {
                return this._core.onResize;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onScroll", { get: function() {
                return this._core.onScroll;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onSelectionChange", { get: function() {
                return this._core.onSelectionChange;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onTitleChange", { get: function() {
                return this._core.onTitleChange;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onWriteParsed", { get: function() {
                return this._core.onWriteParsed;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "element", { get: function() {
                return this._core.element;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "parser", { get: function() {
                return this._checkProposedApi(), this._parser || (this._parser = new a.ParserApi(this._core)), this._parser;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "unicode", { get: function() {
                return this._checkProposedApi(), new c.UnicodeApi(this._core);
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "textarea", { get: function() {
                return this._core.textarea;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "rows", { get: function() {
                return this._core.rows;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "cols", { get: function() {
                return this._core.cols;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "buffer", { get: function() {
                return this._checkProposedApi(), this._buffer || (this._buffer = new h.BufferNamespaceApi(this._core)), this._buffer;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "markers", { get: function() {
                return this._checkProposedApi(), this._core.markers;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "modes", { get: function() {
                var e4 = this._core.coreService.decPrivateModes, t3 = "none";
                switch (this._core.coreMouseService.activeProtocol) {
                  case "X10":
                    t3 = "x10";
                    break;
                  case "VT200":
                    t3 = "vt200";
                    break;
                  case "DRAG":
                    t3 = "drag";
                    break;
                  case "ANY":
                    t3 = "any";
                }
                return { applicationCursorKeysMode: e4.applicationCursorKeys, applicationKeypadMode: e4.applicationKeypad, bracketedPasteMode: e4.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: t3, originMode: e4.origin, reverseWraparoundMode: e4.reverseWraparound, sendFocusMode: e4.sendFocus, wraparoundMode: e4.wraparound };
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "options", { get: function() {
                return this._publicOptions;
              }, set: function(e4) {
                for (var t3 in e4)
                  this._publicOptions[t3] = e4[t3];
              }, enumerable: false, configurable: true }), e3.prototype.blur = function() {
                this._core.blur();
              }, e3.prototype.focus = function() {
                this._core.focus();
              }, e3.prototype.resize = function(e4, t3) {
                this._verifyIntegers(e4, t3), this._core.resize(e4, t3);
              }, e3.prototype.open = function(e4) {
                this._core.open(e4);
              }, e3.prototype.attachCustomKeyEventHandler = function(e4) {
                this._core.attachCustomKeyEventHandler(e4);
              }, e3.prototype.registerLinkMatcher = function(e4, t3, r2) {
                return this._checkProposedApi(), this._core.registerLinkMatcher(e4, t3, r2);
              }, e3.prototype.deregisterLinkMatcher = function(e4) {
                this._checkProposedApi(), this._core.deregisterLinkMatcher(e4);
              }, e3.prototype.registerLinkProvider = function(e4) {
                return this._checkProposedApi(), this._core.registerLinkProvider(e4);
              }, e3.prototype.registerCharacterJoiner = function(e4) {
                return this._checkProposedApi(), this._core.registerCharacterJoiner(e4);
              }, e3.prototype.deregisterCharacterJoiner = function(e4) {
                this._checkProposedApi(), this._core.deregisterCharacterJoiner(e4);
              }, e3.prototype.registerMarker = function(e4) {
                return void 0 === e4 && (e4 = 0), this._checkProposedApi(), this._verifyIntegers(e4), this._core.addMarker(e4);
              }, e3.prototype.registerDecoration = function(e4) {
                var t3, r2, i2;
                return this._checkProposedApi(), this._verifyPositiveIntegers(null !== (t3 = e4.x) && void 0 !== t3 ? t3 : 0, null !== (r2 = e4.width) && void 0 !== r2 ? r2 : 0, null !== (i2 = e4.height) && void 0 !== i2 ? i2 : 0), this._core.registerDecoration(e4);
              }, e3.prototype.addMarker = function(e4) {
                return this.registerMarker(e4);
              }, e3.prototype.hasSelection = function() {
                return this._core.hasSelection();
              }, e3.prototype.select = function(e4, t3, r2) {
                this._verifyIntegers(e4, t3, r2), this._core.select(e4, t3, r2);
              }, e3.prototype.getSelection = function() {
                return this._core.getSelection();
              }, e3.prototype.getSelectionPosition = function() {
                return this._core.getSelectionPosition();
              }, e3.prototype.clearSelection = function() {
                this._core.clearSelection();
              }, e3.prototype.selectAll = function() {
                this._core.selectAll();
              }, e3.prototype.selectLines = function(e4, t3) {
                this._verifyIntegers(e4, t3), this._core.selectLines(e4, t3);
              }, e3.prototype.dispose = function() {
                this._addonManager.dispose(), this._core.dispose();
              }, e3.prototype.scrollLines = function(e4) {
                this._verifyIntegers(e4), this._core.scrollLines(e4);
              }, e3.prototype.scrollPages = function(e4) {
                this._verifyIntegers(e4), this._core.scrollPages(e4);
              }, e3.prototype.scrollToTop = function() {
                this._core.scrollToTop();
              }, e3.prototype.scrollToBottom = function() {
                this._core.scrollToBottom();
              }, e3.prototype.scrollToLine = function(e4) {
                this._verifyIntegers(e4), this._core.scrollToLine(e4);
              }, e3.prototype.clear = function() {
                this._core.clear();
              }, e3.prototype.write = function(e4, t3) {
                this._core.write(e4, t3);
              }, e3.prototype.writeUtf8 = function(e4, t3) {
                this._core.write(e4, t3);
              }, e3.prototype.writeln = function(e4, t3) {
                this._core.write(e4), this._core.write("\r\n", t3);
              }, e3.prototype.paste = function(e4) {
                this._core.paste(e4);
              }, e3.prototype.getOption = function(e4) {
                return this._core.optionsService.getOption(e4);
              }, e3.prototype.setOption = function(e4, t3) {
                this._checkReadonlyOptions(e4), this._core.optionsService.setOption(e4, t3);
              }, e3.prototype.refresh = function(e4, t3) {
                this._verifyIntegers(e4, t3), this._core.refresh(e4, t3);
              }, e3.prototype.reset = function() {
                this._core.reset();
              }, e3.prototype.clearTextureAtlas = function() {
                this._core.clearTextureAtlas();
              }, e3.prototype.loadAddon = function(e4) {
                return this._addonManager.loadAddon(this, e4);
              }, Object.defineProperty(e3, "strings", { get: function() {
                return s;
              }, enumerable: false, configurable: true }), e3.prototype._verifyIntegers = function() {
                for (var e4, t3, r2 = [], i2 = 0; i2 < arguments.length; i2++)
                  r2[i2] = arguments[i2];
                try {
                  for (var o2 = n(r2), s2 = o2.next(); !s2.done; s2 = o2.next()) {
                    var a2 = s2.value;
                    if (a2 === 1 / 0 || isNaN(a2) || a2 % 1 != 0)
                      throw new Error("This API only accepts integers");
                  }
                } catch (t4) {
                  e4 = { error: t4 };
                } finally {
                  try {
                    s2 && !s2.done && (t3 = o2.return) && t3.call(o2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
              }, e3.prototype._verifyPositiveIntegers = function() {
                for (var e4, t3, r2 = [], i2 = 0; i2 < arguments.length; i2++)
                  r2[i2] = arguments[i2];
                try {
                  for (var o2 = n(r2), s2 = o2.next(); !s2.done; s2 = o2.next()) {
                    var a2 = s2.value;
                    if (a2 && (a2 === 1 / 0 || isNaN(a2) || a2 % 1 != 0 || a2 < 0))
                      throw new Error("This API only accepts positive integers");
                  }
                } catch (t4) {
                  e4 = { error: t4 };
                } finally {
                  try {
                    s2 && !s2.done && (t3 = o2.return) && t3.call(o2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
              }, e3;
            }();
            t2.Terminal = f;
          }, 1546: function(e2, t2, r) {
            var i = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BaseRenderLayer = void 0;
            var n = r(643), o = r(8803), s = r(1420), a = r(3734), c = r(1752), l = r(8055), h = r(9631), u = r(8978), f = function() {
              function e3(e4, t3, r2, i2, n2, o2, s2, a2, c2) {
                this._container = e4, this._alpha = i2, this._colors = n2, this._rendererId = o2, this._bufferService = s2, this._optionsService = a2, this._decorationService = c2, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._columnSelectMode = false, this._currentGlyphIdentifier = { chars: "", code: 0, bg: 0, fg: 0, bold: false, dim: false, italic: false }, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + t3 + "-layer"), this._canvas.style.zIndex = r2.toString(), this._initCanvas(), this._container.appendChild(this._canvas);
              }
              return e3.prototype.dispose = function() {
                var e4;
                (0, h.removeElementFromParent)(this._canvas), null === (e4 = this._charAtlas) || void 0 === e4 || e4.dispose();
              }, e3.prototype._initCanvas = function() {
                this._ctx = (0, c.throwIfFalsy)(this._canvas.getContext("2d", { alpha: this._alpha })), this._alpha || this._clearAll();
              }, e3.prototype.onOptionsChanged = function() {
              }, e3.prototype.onBlur = function() {
              }, e3.prototype.onFocus = function() {
              }, e3.prototype.onCursorMove = function() {
              }, e3.prototype.onGridChanged = function(e4, t3) {
              }, e3.prototype.onSelectionChanged = function(e4, t3, r2) {
                void 0 === r2 && (r2 = false), this._selectionStart = e4, this._selectionEnd = t3, this._columnSelectMode = r2;
              }, e3.prototype.setColors = function(e4) {
                this._refreshCharAtlas(e4);
              }, e3.prototype._setTransparency = function(e4) {
                if (e4 !== this._alpha) {
                  var t3 = this._canvas;
                  this._alpha = e4, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, t3), this._refreshCharAtlas(this._colors), this.onGridChanged(0, this._bufferService.rows - 1);
                }
              }, e3.prototype._refreshCharAtlas = function(e4) {
                this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = (0, s.acquireCharAtlas)(this._optionsService.rawOptions, this._rendererId, e4, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp());
              }, e3.prototype.resize = function(e4) {
                this._scaledCellWidth = e4.scaledCellWidth, this._scaledCellHeight = e4.scaledCellHeight, this._scaledCharWidth = e4.scaledCharWidth, this._scaledCharHeight = e4.scaledCharHeight, this._scaledCharLeft = e4.scaledCharLeft, this._scaledCharTop = e4.scaledCharTop, this._canvas.width = e4.scaledCanvasWidth, this._canvas.height = e4.scaledCanvasHeight, this._canvas.style.width = e4.canvasWidth + "px", this._canvas.style.height = e4.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(this._colors);
              }, e3.prototype.clearTextureAtlas = function() {
                var e4;
                null === (e4 = this._charAtlas) || void 0 === e4 || e4.clear();
              }, e3.prototype._fillCells = function(e4, t3, r2, i2) {
                this._ctx.fillRect(e4 * this._scaledCellWidth, t3 * this._scaledCellHeight, r2 * this._scaledCellWidth, i2 * this._scaledCellHeight);
              }, e3.prototype._fillMiddleLineAtCells = function(e4, t3, r2) {
                void 0 === r2 && (r2 = 1);
                var i2 = Math.ceil(0.5 * this._scaledCellHeight);
                this._ctx.fillRect(e4 * this._scaledCellWidth, (t3 + 1) * this._scaledCellHeight - i2 - window.devicePixelRatio, r2 * this._scaledCellWidth, window.devicePixelRatio);
              }, e3.prototype._fillBottomLineAtCells = function(e4, t3, r2) {
                void 0 === r2 && (r2 = 1), this._ctx.fillRect(e4 * this._scaledCellWidth, (t3 + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r2 * this._scaledCellWidth, window.devicePixelRatio);
              }, e3.prototype._fillLeftLineAtCell = function(e4, t3, r2) {
                this._ctx.fillRect(e4 * this._scaledCellWidth, t3 * this._scaledCellHeight, window.devicePixelRatio * r2, this._scaledCellHeight);
              }, e3.prototype._strokeRectAtCell = function(e4, t3, r2, i2) {
                this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e4 * this._scaledCellWidth + window.devicePixelRatio / 2, t3 * this._scaledCellHeight + window.devicePixelRatio / 2, r2 * this._scaledCellWidth - window.devicePixelRatio, i2 * this._scaledCellHeight - window.devicePixelRatio);
              }, e3.prototype._clearAll = function() {
                this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
              }, e3.prototype._clearCells = function(e4, t3, r2, i2) {
                this._alpha ? this._ctx.clearRect(e4 * this._scaledCellWidth, t3 * this._scaledCellHeight, r2 * this._scaledCellWidth, i2 * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e4 * this._scaledCellWidth, t3 * this._scaledCellHeight, r2 * this._scaledCellWidth, i2 * this._scaledCellHeight));
              }, e3.prototype._fillCharTrueColor = function(e4, t3, r2) {
                this._ctx.font = this._getFont(false, false), this._ctx.textBaseline = o.TEXT_BASELINE, this._clipRow(r2);
                var i2 = false;
                false !== this._optionsService.rawOptions.customGlyphs && (i2 = (0, u.tryDrawCustomChar)(this._ctx, e4.getChars(), t3 * this._scaledCellWidth, r2 * this._scaledCellHeight, this._scaledCellWidth, this._scaledCellHeight)), i2 || this._ctx.fillText(e4.getChars(), t3 * this._scaledCellWidth + this._scaledCharLeft, r2 * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight);
              }, e3.prototype._drawChars = function(e4, t3, r2) {
                var s2, a2, c2, l2 = this._getContrastColor(e4, t3, r2);
                if (l2 || e4.isFgRGB() || e4.isBgRGB())
                  this._drawUncachedChars(e4, t3, r2, l2);
                else {
                  var h2, u2;
                  e4.isInverse() ? (h2 = e4.isBgDefault() ? o.INVERTED_DEFAULT_COLOR : e4.getBgColor(), u2 = e4.isFgDefault() ? o.INVERTED_DEFAULT_COLOR : e4.getFgColor()) : (u2 = e4.isBgDefault() ? n.DEFAULT_COLOR : e4.getBgColor(), h2 = e4.isFgDefault() ? n.DEFAULT_COLOR : e4.getFgColor()), h2 += this._optionsService.rawOptions.drawBoldTextInBrightColors && e4.isBold() && h2 < 8 ? 8 : 0, this._currentGlyphIdentifier.chars = e4.getChars() || n.WHITESPACE_CELL_CHAR, this._currentGlyphIdentifier.code = e4.getCode() || n.WHITESPACE_CELL_CODE, this._currentGlyphIdentifier.bg = u2, this._currentGlyphIdentifier.fg = h2, this._currentGlyphIdentifier.bold = !!e4.isBold(), this._currentGlyphIdentifier.dim = !!e4.isDim(), this._currentGlyphIdentifier.italic = !!e4.isItalic();
                  var f2 = false;
                  try {
                    for (var _ = i(this._decorationService.getDecorationsAtCell(t3, r2)), d = _.next(); !d.done; d = _.next()) {
                      var p = d.value;
                      if (p.backgroundColorRGB || p.foregroundColorRGB) {
                        f2 = true;
                        break;
                      }
                    }
                  } catch (e5) {
                    s2 = { error: e5 };
                  } finally {
                    try {
                      d && !d.done && (a2 = _.return) && a2.call(_);
                    } finally {
                      if (s2)
                        throw s2.error;
                    }
                  }
                  !f2 && (null === (c2 = this._charAtlas) || void 0 === c2 ? void 0 : c2.draw(this._ctx, this._currentGlyphIdentifier, t3 * this._scaledCellWidth + this._scaledCharLeft, r2 * this._scaledCellHeight + this._scaledCharTop)) || this._drawUncachedChars(e4, t3, r2);
                }
              }, e3.prototype._drawUncachedChars = function(e4, t3, r2, i2) {
                if (this._ctx.save(), this._ctx.font = this._getFont(!!e4.isBold(), !!e4.isItalic()), this._ctx.textBaseline = o.TEXT_BASELINE, e4.isInverse())
                  if (i2)
                    this._ctx.fillStyle = i2.css;
                  else if (e4.isBgDefault())
                    this._ctx.fillStyle = l.color.opaque(this._colors.background).css;
                  else if (e4.isBgRGB())
                    this._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e4.getBgColor()).join(",") + ")";
                  else {
                    var n2 = e4.getBgColor();
                    this._optionsService.rawOptions.drawBoldTextInBrightColors && e4.isBold() && n2 < 8 && (n2 += 8), this._ctx.fillStyle = this._colors.ansi[n2].css;
                  }
                else if (i2)
                  this._ctx.fillStyle = i2.css;
                else if (e4.isFgDefault())
                  this._ctx.fillStyle = this._colors.foreground.css;
                else if (e4.isFgRGB())
                  this._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e4.getFgColor()).join(",") + ")";
                else {
                  var s2 = e4.getFgColor();
                  this._optionsService.rawOptions.drawBoldTextInBrightColors && e4.isBold() && s2 < 8 && (s2 += 8), this._ctx.fillStyle = this._colors.ansi[s2].css;
                }
                this._clipRow(r2), e4.isDim() && (this._ctx.globalAlpha = o.DIM_OPACITY);
                var c2 = false;
                false !== this._optionsService.rawOptions.customGlyphs && (c2 = (0, u.tryDrawCustomChar)(this._ctx, e4.getChars(), t3 * this._scaledCellWidth, r2 * this._scaledCellHeight, this._scaledCellWidth, this._scaledCellHeight)), c2 || this._ctx.fillText(e4.getChars(), t3 * this._scaledCellWidth + this._scaledCharLeft, r2 * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight), this._ctx.restore();
              }, e3.prototype._clipRow = function(e4) {
                this._ctx.beginPath(), this._ctx.rect(0, e4 * this._scaledCellHeight, this._bufferService.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip();
              }, e3.prototype._getFont = function(e4, t3) {
                return (t3 ? "italic" : "") + " " + (e4 ? this._optionsService.rawOptions.fontWeightBold : this._optionsService.rawOptions.fontWeight) + " " + this._optionsService.rawOptions.fontSize * window.devicePixelRatio + "px " + this._optionsService.rawOptions.fontFamily;
              }, e3.prototype._getContrastColor = function(e4, t3, r2) {
                var n2, o2, s2, a2, h2 = false;
                try {
                  for (var u2 = i(this._decorationService.getDecorationsAtCell(t3, r2)), f2 = u2.next(); !f2.done; f2 = u2.next()) {
                    var _ = f2.value;
                    "top" !== _.options.layer && h2 || (_.backgroundColorRGB && (s2 = _.backgroundColorRGB.rgba), _.foregroundColorRGB && (a2 = _.foregroundColorRGB.rgba), h2 = "top" === _.options.layer);
                  }
                } catch (e5) {
                  n2 = { error: e5 };
                } finally {
                  try {
                    f2 && !f2.done && (o2 = u2.return) && o2.call(u2);
                  } finally {
                    if (n2)
                      throw n2.error;
                  }
                }
                if (h2 || this._colors.selectionForeground && this._isCellInSelection(t3, r2) && (a2 = this._colors.selectionForeground.rgba), s2 || a2 || 1 !== this._optionsService.rawOptions.minimumContrastRatio && !(0, c.excludeFromContrastRatioDemands)(e4.getCode())) {
                  if (!s2 && !a2) {
                    var d = this._colors.contrastCache.getColor(e4.bg, e4.fg);
                    if (void 0 !== d)
                      return d || void 0;
                  }
                  var p = e4.getFgColor(), v = e4.getFgColorMode(), y = e4.getBgColor(), g = e4.getBgColorMode(), m = !!e4.isInverse(), b = !!e4.isInverse();
                  if (m) {
                    var S = p;
                    p = y, y = S;
                    var C = v;
                    v = g, g = C;
                  }
                  var w = this._resolveBackgroundRgba(void 0 !== s2 ? 50331648 : g, null != s2 ? s2 : y, m), L = this._resolveForegroundRgba(v, p, m, b), E = l.rgba.ensureContrastRatio(null != s2 ? s2 : w, null != a2 ? a2 : L, this._optionsService.rawOptions.minimumContrastRatio);
                  if (!E) {
                    if (!a2)
                      return void this._colors.contrastCache.setColor(e4.bg, e4.fg, null);
                    E = a2;
                  }
                  var x = { css: l.channels.toCss(E >> 24 & 255, E >> 16 & 255, E >> 8 & 255), rgba: E };
                  return s2 || a2 || this._colors.contrastCache.setColor(e4.bg, e4.fg, x), x;
                }
              }, e3.prototype._resolveBackgroundRgba = function(e4, t3, r2) {
                switch (e4) {
                  case 16777216:
                  case 33554432:
                    return this._colors.ansi[t3].rgba;
                  case 50331648:
                    return t3 << 8;
                  default:
                    return r2 ? this._colors.foreground.rgba : this._colors.background.rgba;
                }
              }, e3.prototype._resolveForegroundRgba = function(e4, t3, r2, i2) {
                switch (e4) {
                  case 16777216:
                  case 33554432:
                    return this._optionsService.rawOptions.drawBoldTextInBrightColors && i2 && t3 < 8 && (t3 += 8), this._colors.ansi[t3].rgba;
                  case 50331648:
                    return t3 << 8;
                  default:
                    return r2 ? this._colors.background.rgba : this._colors.foreground.rgba;
                }
              }, e3.prototype._isCellInSelection = function(e4, t3) {
                var r2 = this._selectionStart, i2 = this._selectionEnd;
                return !(!r2 || !i2) && (this._columnSelectMode ? e4 >= r2[0] && t3 >= r2[1] && e4 < i2[0] && t3 < i2[1] : t3 > r2[1] && t3 < i2[1] || r2[1] === i2[1] && t3 === r2[1] && e4 >= r2[0] && e4 < i2[0] || r2[1] < i2[1] && t3 === i2[1] && e4 < i2[0] || r2[1] < i2[1] && t3 === r2[1] && e4 >= r2[0]);
              }, e3;
            }();
            t2.BaseRenderLayer = f;
          }, 2512: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CursorRenderLayer = void 0;
            var a = r(1546), c = r(511), l = r(2585), h = r(4725), u = 600, f = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, a2, l2, h2, u2) {
                var f2 = e3.call(this, t4, "cursor", r2, true, i2, n2, s2, a2, u2) || this;
                return f2._onRequestRedraw = o2, f2._coreService = l2, f2._coreBrowserService = h2, f2._cell = new c.CellData(), f2._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 }, f2._cursorRenderers = { bar: f2._renderBarCursor.bind(f2), block: f2._renderBlockCursor.bind(f2), underline: f2._renderUnderlineCursor.bind(f2) }, f2;
              }
              return n(t3, e3), t3.prototype.dispose = function() {
                this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = void 0), e3.prototype.dispose.call(this);
              }, t3.prototype.resize = function(t4) {
                e3.prototype.resize.call(this, t4), this._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 };
              }, t3.prototype.reset = function() {
                var e4;
                this._clearCursor(), null === (e4 = this._cursorBlinkStateManager) || void 0 === e4 || e4.restartBlinkAnimation(), this.onOptionsChanged();
              }, t3.prototype.onBlur = function() {
                var e4;
                null === (e4 = this._cursorBlinkStateManager) || void 0 === e4 || e4.pause(), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
              }, t3.prototype.onFocus = function() {
                var e4;
                null === (e4 = this._cursorBlinkStateManager) || void 0 === e4 || e4.resume(), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
              }, t3.prototype.onOptionsChanged = function() {
                var e4, t4 = this;
                this._optionsService.rawOptions.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new _(this._coreBrowserService.isFocused, function() {
                  t4._render(true);
                })) : (null === (e4 = this._cursorBlinkStateManager) || void 0 === e4 || e4.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
              }, t3.prototype.onCursorMove = function() {
                var e4;
                null === (e4 = this._cursorBlinkStateManager) || void 0 === e4 || e4.restartBlinkAnimation();
              }, t3.prototype.onGridChanged = function(e4, t4) {
                !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(false) : this._cursorBlinkStateManager.restartBlinkAnimation();
              }, t3.prototype._render = function(e4) {
                if (this._coreService.isCursorInitialized && !this._coreService.isCursorHidden) {
                  var t4 = this._bufferService.buffer.ybase + this._bufferService.buffer.y, r2 = t4 - this._bufferService.buffer.ydisp;
                  if (r2 < 0 || r2 >= this._bufferService.rows)
                    this._clearCursor();
                  else {
                    var i2 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);
                    if (this._bufferService.buffer.lines.get(t4).loadCell(i2, this._cell), void 0 !== this._cell.content) {
                      if (!this._coreBrowserService.isFocused) {
                        this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
                        var n2 = this._optionsService.rawOptions.cursorStyle;
                        return n2 && "block" !== n2 ? this._cursorRenderers[n2](i2, r2, this._cell) : this._renderBlurCursor(i2, r2, this._cell), this._ctx.restore(), this._state.x = i2, this._state.y = r2, this._state.isFocused = false, this._state.style = n2, void (this._state.width = this._cell.getWidth());
                      }
                      if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                        if (this._state) {
                          if (this._state.x === i2 && this._state.y === r2 && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.rawOptions.cursorStyle && this._state.width === this._cell.getWidth())
                            return;
                          this._clearCursor();
                        }
                        this._ctx.save(), this._cursorRenderers[this._optionsService.rawOptions.cursorStyle || "block"](i2, r2, this._cell), this._ctx.restore(), this._state.x = i2, this._state.y = r2, this._state.isFocused = false, this._state.style = this._optionsService.rawOptions.cursorStyle, this._state.width = this._cell.getWidth();
                      } else
                        this._clearCursor();
                    }
                  }
                } else
                  this._clearCursor();
              }, t3.prototype._clearCursor = function() {
                this._state && (window.devicePixelRatio < 1 ? this._clearAll() : this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 });
              }, t3.prototype._renderBarCursor = function(e4, t4, r2) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(e4, t4, this._optionsService.rawOptions.cursorWidth), this._ctx.restore();
              }, t3.prototype._renderBlockCursor = function(e4, t4, r2) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(e4, t4, r2.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(r2, e4, t4), this._ctx.restore();
              }, t3.prototype._renderUnderlineCursor = function(e4, t4, r2) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(e4, t4), this._ctx.restore();
              }, t3.prototype._renderBlurCursor = function(e4, t4, r2) {
                this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(e4, t4, r2.getWidth(), 1), this._ctx.restore();
              }, o([s(5, l.IBufferService), s(6, l.IOptionsService), s(7, l.ICoreService), s(8, h.ICoreBrowserService), s(9, l.IDecorationService)], t3);
            }(a.BaseRenderLayer);
            t2.CursorRenderLayer = f;
            var _ = function() {
              function e3(e4, t3) {
                this._renderCallback = t3, this.isCursorVisible = true, e4 && this._restartInterval();
              }
              return Object.defineProperty(e3.prototype, "isPaused", { get: function() {
                return !(this._blinkStartTimeout || this._blinkInterval);
              }, enumerable: false, configurable: true }), e3.prototype.dispose = function() {
                this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
              }, e3.prototype.restartBlinkAnimation = function() {
                var e4 = this;
                this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = true, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                  e4._renderCallback(), e4._animationFrame = void 0;
                })));
              }, e3.prototype._restartInterval = function(e4) {
                var t3 = this;
                void 0 === e4 && (e4 = u), this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout = window.setTimeout(function() {
                  if (t3._animationTimeRestarted) {
                    var e5 = u - (Date.now() - t3._animationTimeRestarted);
                    if (t3._animationTimeRestarted = void 0, e5 > 0)
                      return void t3._restartInterval(e5);
                  }
                  t3.isCursorVisible = false, t3._animationFrame = window.requestAnimationFrame(function() {
                    t3._renderCallback(), t3._animationFrame = void 0;
                  }), t3._blinkInterval = window.setInterval(function() {
                    if (t3._animationTimeRestarted) {
                      var e6 = u - (Date.now() - t3._animationTimeRestarted);
                      return t3._animationTimeRestarted = void 0, void t3._restartInterval(e6);
                    }
                    t3.isCursorVisible = !t3.isCursorVisible, t3._animationFrame = window.requestAnimationFrame(function() {
                      t3._renderCallback(), t3._animationFrame = void 0;
                    });
                  }, u);
                }, e4);
              }, e3.prototype.pause = function() {
                this.isCursorVisible = true, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
              }, e3.prototype.resume = function() {
                this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation();
              }, e3;
            }();
          }, 8978: function(e2, t2, r) {
            var i, n, o, s, a, c, l, h, u, f, _, d, p, v, y, g, m, b, S, C, w, L, E, x, R, k, M, A, O, D, T, B, P, I, H, j, F, W, U, q, N, z, K, G, V, X, Z, Y, J, $, Q, ee, te, re, ie, ne, oe, se, ae, ce, le, he, ue, fe, _e, de, pe, ve, ye, ge, me, be, Se, Ce, we, Le, Ee, xe, Re, ke, Me, Ae, Oe, De, Te, Be, Pe, Ie, He, je, Fe, We, Ue, qe, Ne, ze, Ke, Ge, Ve, Xe, Ze, Ye, Je, $e, Qe, et, tt, rt, it, nt, ot, st, at, ct, lt, ht, ut, ft, _t, dt, pt, vt, yt, gt, mt, bt, St, Ct, wt = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s2 = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s2.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s2;
            }, Lt = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.tryDrawCustomChar = t2.powerlineDefinitions = t2.boxDrawingDefinitions = t2.blockElementDefinitions = void 0;
            var Et = r(1752);
            t2.blockElementDefinitions = { "\u2580": [{ x: 0, y: 0, w: 8, h: 4 }], "\u2581": [{ x: 0, y: 7, w: 8, h: 1 }], "\u2582": [{ x: 0, y: 6, w: 8, h: 2 }], "\u2583": [{ x: 0, y: 5, w: 8, h: 3 }], "\u2584": [{ x: 0, y: 4, w: 8, h: 4 }], "\u2585": [{ x: 0, y: 3, w: 8, h: 5 }], "\u2586": [{ x: 0, y: 2, w: 8, h: 6 }], "\u2587": [{ x: 0, y: 1, w: 8, h: 7 }], "\u2588": [{ x: 0, y: 0, w: 8, h: 8 }], "\u2589": [{ x: 0, y: 0, w: 7, h: 8 }], "\u258A": [{ x: 0, y: 0, w: 6, h: 8 }], "\u258B": [{ x: 0, y: 0, w: 5, h: 8 }], "\u258C": [{ x: 0, y: 0, w: 4, h: 8 }], "\u258D": [{ x: 0, y: 0, w: 3, h: 8 }], "\u258E": [{ x: 0, y: 0, w: 2, h: 8 }], "\u258F": [{ x: 0, y: 0, w: 1, h: 8 }], "\u2590": [{ x: 4, y: 0, w: 4, h: 8 }], "\u2594": [{ x: 0, y: 0, w: 9, h: 1 }], "\u2595": [{ x: 7, y: 0, w: 1, h: 8 }], "\u2596": [{ x: 0, y: 4, w: 4, h: 4 }], "\u2597": [{ x: 4, y: 4, w: 4, h: 4 }], "\u2598": [{ x: 0, y: 0, w: 4, h: 4 }], "\u2599": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "\u259A": [{ x: 0, y: 0, w: 4, h: 4 }, { x: 4, y: 4, w: 4, h: 4 }], "\u259B": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 0, y: 0, w: 4, h: 8 }], "\u259C": [{ x: 0, y: 0, w: 8, h: 4 }, { x: 4, y: 0, w: 4, h: 8 }], "\u259D": [{ x: 4, y: 0, w: 4, h: 4 }], "\u259E": [{ x: 4, y: 0, w: 4, h: 4 }, { x: 0, y: 4, w: 4, h: 4 }], "\u259F": [{ x: 4, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "\u{1FB70}": [{ x: 1, y: 0, w: 1, h: 8 }], "\u{1FB71}": [{ x: 2, y: 0, w: 1, h: 8 }], "\u{1FB72}": [{ x: 3, y: 0, w: 1, h: 8 }], "\u{1FB73}": [{ x: 4, y: 0, w: 1, h: 8 }], "\u{1FB74}": [{ x: 5, y: 0, w: 1, h: 8 }], "\u{1FB75}": [{ x: 6, y: 0, w: 1, h: 8 }], "\u{1FB76}": [{ x: 0, y: 1, w: 8, h: 1 }], "\u{1FB77}": [{ x: 0, y: 2, w: 8, h: 1 }], "\u{1FB78}": [{ x: 0, y: 3, w: 8, h: 1 }], "\u{1FB79}": [{ x: 0, y: 4, w: 8, h: 1 }], "\u{1FB7A}": [{ x: 0, y: 5, w: 8, h: 1 }], "\u{1FB7B}": [{ x: 0, y: 6, w: 8, h: 1 }], "\u{1FB7C}": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "\u{1FB7D}": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "\u{1FB7E}": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "\u{1FB7F}": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "\u{1FB80}": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "\u{1FB81}": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 2, w: 8, h: 1 }, { x: 0, y: 4, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "\u{1FB82}": [{ x: 0, y: 0, w: 8, h: 2 }], "\u{1FB83}": [{ x: 0, y: 0, w: 8, h: 3 }], "\u{1FB84}": [{ x: 0, y: 0, w: 8, h: 5 }], "\u{1FB85}": [{ x: 0, y: 0, w: 8, h: 6 }], "\u{1FB86}": [{ x: 0, y: 0, w: 8, h: 7 }], "\u{1FB87}": [{ x: 6, y: 0, w: 2, h: 8 }], "\u{1FB88}": [{ x: 5, y: 0, w: 3, h: 8 }], "\u{1FB89}": [{ x: 3, y: 0, w: 5, h: 8 }], "\u{1FB8A}": [{ x: 2, y: 0, w: 6, h: 8 }], "\u{1FB8B}": [{ x: 1, y: 0, w: 7, h: 8 }], "\u{1FB95}": [{ x: 0, y: 0, w: 2, h: 2 }, { x: 4, y: 0, w: 2, h: 2 }, { x: 2, y: 2, w: 2, h: 2 }, { x: 6, y: 2, w: 2, h: 2 }, { x: 0, y: 4, w: 2, h: 2 }, { x: 4, y: 4, w: 2, h: 2 }, { x: 2, y: 6, w: 2, h: 2 }, { x: 6, y: 6, w: 2, h: 2 }], "\u{1FB96}": [{ x: 2, y: 0, w: 2, h: 2 }, { x: 6, y: 0, w: 2, h: 2 }, { x: 0, y: 2, w: 2, h: 2 }, { x: 4, y: 2, w: 2, h: 2 }, { x: 2, y: 4, w: 2, h: 2 }, { x: 6, y: 4, w: 2, h: 2 }, { x: 0, y: 6, w: 2, h: 2 }, { x: 4, y: 6, w: 2, h: 2 }], "\u{1FB97}": [{ x: 0, y: 2, w: 8, h: 2 }, { x: 0, y: 6, w: 8, h: 2 }] };
            var xt = { "\u2591": [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]], "\u2592": [[1, 0], [0, 0], [0, 1], [0, 0]], "\u2593": [[0, 1], [1, 1], [1, 0], [1, 1]] };
            t2.boxDrawingDefinitions = { "\u2500": (i = {}, i[1] = "M0,.5 L1,.5", i), "\u2501": (n = {}, n[3] = "M0,.5 L1,.5", n), "\u2502": (o = {}, o[1] = "M.5,0 L.5,1", o), "\u2503": (s = {}, s[3] = "M.5,0 L.5,1", s), "\u250C": (a = {}, a[1] = "M0.5,1 L.5,.5 L1,.5", a), "\u250F": (c = {}, c[3] = "M0.5,1 L.5,.5 L1,.5", c), "\u2510": (l = {}, l[1] = "M0,.5 L.5,.5 L.5,1", l), "\u2513": (h = {}, h[3] = "M0,.5 L.5,.5 L.5,1", h), "\u2514": (u = {}, u[1] = "M.5,0 L.5,.5 L1,.5", u), "\u2517": (f = {}, f[3] = "M.5,0 L.5,.5 L1,.5", f), "\u2518": (_ = {}, _[1] = "M.5,0 L.5,.5 L0,.5", _), "\u251B": (d = {}, d[3] = "M.5,0 L.5,.5 L0,.5", d), "\u251C": (p = {}, p[1] = "M.5,0 L.5,1 M.5,.5 L1,.5", p), "\u2523": (v = {}, v[3] = "M.5,0 L.5,1 M.5,.5 L1,.5", v), "\u2524": (y = {}, y[1] = "M.5,0 L.5,1 M.5,.5 L0,.5", y), "\u252B": (g = {}, g[3] = "M.5,0 L.5,1 M.5,.5 L0,.5", g), "\u252C": (m = {}, m[1] = "M0,.5 L1,.5 M.5,.5 L.5,1", m), "\u2533": (b = {}, b[3] = "M0,.5 L1,.5 M.5,.5 L.5,1", b), "\u2534": (S = {}, S[1] = "M0,.5 L1,.5 M.5,.5 L.5,0", S), "\u253B": (C = {}, C[3] = "M0,.5 L1,.5 M.5,.5 L.5,0", C), "\u253C": (w = {}, w[1] = "M0,.5 L1,.5 M.5,0 L.5,1", w), "\u254B": (L = {}, L[3] = "M0,.5 L1,.5 M.5,0 L.5,1", L), "\u2574": (E = {}, E[1] = "M.5,.5 L0,.5", E), "\u2578": (x = {}, x[3] = "M.5,.5 L0,.5", x), "\u2575": (R = {}, R[1] = "M.5,.5 L.5,0", R), "\u2579": (k = {}, k[3] = "M.5,.5 L.5,0", k), "\u2576": (M = {}, M[1] = "M.5,.5 L1,.5", M), "\u257A": (A = {}, A[3] = "M.5,.5 L1,.5", A), "\u2577": (O = {}, O[1] = "M.5,.5 L.5,1", O), "\u257B": (D = {}, D[3] = "M.5,.5 L.5,1", D), "\u2550": (T = {}, T[1] = function(e3, t3) {
              return "M0," + (0.5 - t3) + " L1," + (0.5 - t3) + " M0," + (0.5 + t3) + " L1," + (0.5 + t3);
            }, T), "\u2551": (B = {}, B[1] = function(e3, t3) {
              return "M" + (0.5 - e3) + ",0 L" + (0.5 - e3) + ",1 M" + (0.5 + e3) + ",0 L" + (0.5 + e3) + ",1";
            }, B), "\u2552": (P = {}, P[1] = function(e3, t3) {
              return "M.5,1 L.5," + (0.5 - t3) + " L1," + (0.5 - t3) + " M.5," + (0.5 + t3) + " L1," + (0.5 + t3);
            }, P), "\u2553": (I = {}, I[1] = function(e3, t3) {
              return "M" + (0.5 - e3) + ",1 L" + (0.5 - e3) + ",.5 L1,.5 M" + (0.5 + e3) + ",.5 L" + (0.5 + e3) + ",1";
            }, I), "\u2554": (H = {}, H[1] = function(e3, t3) {
              return "M1," + (0.5 - t3) + " L" + (0.5 - e3) + "," + (0.5 - t3) + " L" + (0.5 - e3) + ",1 M1," + (0.5 + t3) + " L" + (0.5 + e3) + "," + (0.5 + t3) + " L" + (0.5 + e3) + ",1";
            }, H), "\u2555": (j = {}, j[1] = function(e3, t3) {
              return "M0," + (0.5 - t3) + " L.5," + (0.5 - t3) + " L.5,1 M0," + (0.5 + t3) + " L.5," + (0.5 + t3);
            }, j), "\u2556": (F = {}, F[1] = function(e3, t3) {
              return "M" + (0.5 + e3) + ",1 L" + (0.5 + e3) + ",.5 L0,.5 M" + (0.5 - e3) + ",.5 L" + (0.5 - e3) + ",1";
            }, F), "\u2557": (W = {}, W[1] = function(e3, t3) {
              return "M0," + (0.5 + t3) + " L" + (0.5 - e3) + "," + (0.5 + t3) + " L" + (0.5 - e3) + ",1 M0," + (0.5 - t3) + " L" + (0.5 + e3) + "," + (0.5 - t3) + " L" + (0.5 + e3) + ",1";
            }, W), "\u2558": (U = {}, U[1] = function(e3, t3) {
              return "M.5,0 L.5," + (0.5 + t3) + " L1," + (0.5 + t3) + " M.5," + (0.5 - t3) + " L1," + (0.5 - t3);
            }, U), "\u2559": (q = {}, q[1] = function(e3, t3) {
              return "M1,.5 L" + (0.5 - e3) + ",.5 L" + (0.5 - e3) + ",0 M" + (0.5 + e3) + ",.5 L" + (0.5 + e3) + ",0";
            }, q), "\u255A": (N = {}, N[1] = function(e3, t3) {
              return "M1," + (0.5 - t3) + " L" + (0.5 + e3) + "," + (0.5 - t3) + " L" + (0.5 + e3) + ",0 M1," + (0.5 + t3) + " L" + (0.5 - e3) + "," + (0.5 + t3) + " L" + (0.5 - e3) + ",0";
            }, N), "\u255B": (z = {}, z[1] = function(e3, t3) {
              return "M0," + (0.5 + t3) + " L.5," + (0.5 + t3) + " L.5,0 M0," + (0.5 - t3) + " L.5," + (0.5 - t3);
            }, z), "\u255C": (K = {}, K[1] = function(e3, t3) {
              return "M0,.5 L" + (0.5 + e3) + ",.5 L" + (0.5 + e3) + ",0 M" + (0.5 - e3) + ",.5 L" + (0.5 - e3) + ",0";
            }, K), "\u255D": (G = {}, G[1] = function(e3, t3) {
              return "M0," + (0.5 - t3) + " L" + (0.5 - e3) + "," + (0.5 - t3) + " L" + (0.5 - e3) + ",0 M0," + (0.5 + t3) + " L" + (0.5 + e3) + "," + (0.5 + t3) + " L" + (0.5 + e3) + ",0";
            }, G), "\u255E": (V = {}, V[1] = function(e3, t3) {
              return "M.5,0 L.5,1 M.5," + (0.5 - t3) + " L1," + (0.5 - t3) + " M.5," + (0.5 + t3) + " L1," + (0.5 + t3);
            }, V), "\u255F": (X = {}, X[1] = function(e3, t3) {
              return "M" + (0.5 - e3) + ",0 L" + (0.5 - e3) + ",1 M" + (0.5 + e3) + ",0 L" + (0.5 + e3) + ",1 M" + (0.5 + e3) + ",.5 L1,.5";
            }, X), "\u2560": (Z = {}, Z[1] = function(e3, t3) {
              return "M" + (0.5 - e3) + ",0 L" + (0.5 - e3) + ",1 M1," + (0.5 + t3) + " L" + (0.5 + e3) + "," + (0.5 + t3) + " L" + (0.5 + e3) + ",1 M1," + (0.5 - t3) + " L" + (0.5 + e3) + "," + (0.5 - t3) + " L" + (0.5 + e3) + ",0";
            }, Z), "\u2561": (Y = {}, Y[1] = function(e3, t3) {
              return "M.5,0 L.5,1 M0," + (0.5 - t3) + " L.5," + (0.5 - t3) + " M0," + (0.5 + t3) + " L.5," + (0.5 + t3);
            }, Y), "\u2562": (J = {}, J[1] = function(e3, t3) {
              return "M0,.5 L" + (0.5 - e3) + ",.5 M" + (0.5 - e3) + ",0 L" + (0.5 - e3) + ",1 M" + (0.5 + e3) + ",0 L" + (0.5 + e3) + ",1";
            }, J), "\u2563": ($ = {}, $[1] = function(e3, t3) {
              return "M" + (0.5 + e3) + ",0 L" + (0.5 + e3) + ",1 M0," + (0.5 + t3) + " L" + (0.5 - e3) + "," + (0.5 + t3) + " L" + (0.5 - e3) + ",1 M0," + (0.5 - t3) + " L" + (0.5 - e3) + "," + (0.5 - t3) + " L" + (0.5 - e3) + ",0";
            }, $), "\u2564": (Q = {}, Q[1] = function(e3, t3) {
              return "M0," + (0.5 - t3) + " L1," + (0.5 - t3) + " M0," + (0.5 + t3) + " L1," + (0.5 + t3) + " M.5," + (0.5 + t3) + " L.5,1";
            }, Q), "\u2565": (ee = {}, ee[1] = function(e3, t3) {
              return "M0,.5 L1,.5 M" + (0.5 - e3) + ",.5 L" + (0.5 - e3) + ",1 M" + (0.5 + e3) + ",.5 L" + (0.5 + e3) + ",1";
            }, ee), "\u2566": (te = {}, te[1] = function(e3, t3) {
              return "M0," + (0.5 - t3) + " L1," + (0.5 - t3) + " M0," + (0.5 + t3) + " L" + (0.5 - e3) + "," + (0.5 + t3) + " L" + (0.5 - e3) + ",1 M1," + (0.5 + t3) + " L" + (0.5 + e3) + "," + (0.5 + t3) + " L" + (0.5 + e3) + ",1";
            }, te), "\u2567": (re = {}, re[1] = function(e3, t3) {
              return "M.5,0 L.5," + (0.5 - t3) + " M0," + (0.5 - t3) + " L1," + (0.5 - t3) + " M0," + (0.5 + t3) + " L1," + (0.5 + t3);
            }, re), "\u2568": (ie = {}, ie[1] = function(e3, t3) {
              return "M0,.5 L1,.5 M" + (0.5 - e3) + ",.5 L" + (0.5 - e3) + ",0 M" + (0.5 + e3) + ",.5 L" + (0.5 + e3) + ",0";
            }, ie), "\u2569": (ne = {}, ne[1] = function(e3, t3) {
              return "M0," + (0.5 + t3) + " L1," + (0.5 + t3) + " M0," + (0.5 - t3) + " L" + (0.5 - e3) + "," + (0.5 - t3) + " L" + (0.5 - e3) + ",0 M1," + (0.5 - t3) + " L" + (0.5 + e3) + "," + (0.5 - t3) + " L" + (0.5 + e3) + ",0";
            }, ne), "\u256A": (oe = {}, oe[1] = function(e3, t3) {
              return "M.5,0 L.5,1 M0," + (0.5 - t3) + " L1," + (0.5 - t3) + " M0," + (0.5 + t3) + " L1," + (0.5 + t3);
            }, oe), "\u256B": (se = {}, se[1] = function(e3, t3) {
              return "M0,.5 L1,.5 M" + (0.5 - e3) + ",0 L" + (0.5 - e3) + ",1 M" + (0.5 + e3) + ",0 L" + (0.5 + e3) + ",1";
            }, se), "\u256C": (ae = {}, ae[1] = function(e3, t3) {
              return "M0," + (0.5 + t3) + " L" + (0.5 - e3) + "," + (0.5 + t3) + " L" + (0.5 - e3) + ",1 M1," + (0.5 + t3) + " L" + (0.5 + e3) + "," + (0.5 + t3) + " L" + (0.5 + e3) + ",1 M0," + (0.5 - t3) + " L" + (0.5 - e3) + "," + (0.5 - t3) + " L" + (0.5 - e3) + ",0 M1," + (0.5 - t3) + " L" + (0.5 + e3) + "," + (0.5 - t3) + " L" + (0.5 + e3) + ",0";
            }, ae), "\u2571": (ce = {}, ce[1] = "M1,0 L0,1", ce), "\u2572": (le = {}, le[1] = "M0,0 L1,1", le), "\u2573": (he = {}, he[1] = "M1,0 L0,1 M0,0 L1,1", he), "\u257C": (ue = {}, ue[1] = "M.5,.5 L0,.5", ue[3] = "M.5,.5 L1,.5", ue), "\u257D": (fe = {}, fe[1] = "M.5,.5 L.5,0", fe[3] = "M.5,.5 L.5,1", fe), "\u257E": (_e = {}, _e[1] = "M.5,.5 L1,.5", _e[3] = "M.5,.5 L0,.5", _e), "\u257F": (de = {}, de[1] = "M.5,.5 L.5,1", de[3] = "M.5,.5 L.5,0", de), "\u250D": (pe = {}, pe[1] = "M.5,.5 L.5,1", pe[3] = "M.5,.5 L1,.5", pe), "\u250E": (ve = {}, ve[1] = "M.5,.5 L1,.5", ve[3] = "M.5,.5 L.5,1", ve), "\u2511": (ye = {}, ye[1] = "M.5,.5 L.5,1", ye[3] = "M.5,.5 L0,.5", ye), "\u2512": (ge = {}, ge[1] = "M.5,.5 L0,.5", ge[3] = "M.5,.5 L.5,1", ge), "\u2515": (me = {}, me[1] = "M.5,.5 L.5,0", me[3] = "M.5,.5 L1,.5", me), "\u2516": (be = {}, be[1] = "M.5,.5 L1,.5", be[3] = "M.5,.5 L.5,0", be), "\u2519": (Se = {}, Se[1] = "M.5,.5 L.5,0", Se[3] = "M.5,.5 L0,.5", Se), "\u251A": (Ce = {}, Ce[1] = "M.5,.5 L0,.5", Ce[3] = "M.5,.5 L.5,0", Ce), "\u251D": (we = {}, we[1] = "M.5,0 L.5,1", we[3] = "M.5,.5 L1,.5", we), "\u251E": (Le = {}, Le[1] = "M0.5,1 L.5,.5 L1,.5", Le[3] = "M.5,.5 L.5,0", Le), "\u251F": (Ee = {}, Ee[1] = "M.5,0 L.5,.5 L1,.5", Ee[3] = "M.5,.5 L.5,1", Ee), "\u2520": (xe = {}, xe[1] = "M.5,.5 L1,.5", xe[3] = "M.5,0 L.5,1", xe), "\u2521": (Re = {}, Re[1] = "M.5,.5 L.5,1", Re[3] = "M.5,0 L.5,.5 L1,.5", Re), "\u2522": (ke = {}, ke[1] = "M.5,.5 L.5,0", ke[3] = "M0.5,1 L.5,.5 L1,.5", ke), "\u2525": (Me = {}, Me[1] = "M.5,0 L.5,1", Me[3] = "M.5,.5 L0,.5", Me), "\u2526": (Ae = {}, Ae[1] = "M0,.5 L.5,.5 L.5,1", Ae[3] = "M.5,.5 L.5,0", Ae), "\u2527": (Oe = {}, Oe[1] = "M.5,0 L.5,.5 L0,.5", Oe[3] = "M.5,.5 L.5,1", Oe), "\u2528": (De = {}, De[1] = "M.5,.5 L0,.5", De[3] = "M.5,0 L.5,1", De), "\u2529": (Te = {}, Te[1] = "M.5,.5 L.5,1", Te[3] = "M.5,0 L.5,.5 L0,.5", Te), "\u252A": (Be = {}, Be[1] = "M.5,.5 L.5,0", Be[3] = "M0,.5 L.5,.5 L.5,1", Be), "\u252D": (Pe = {}, Pe[1] = "M0.5,1 L.5,.5 L1,.5", Pe[3] = "M.5,.5 L0,.5", Pe), "\u252E": (Ie = {}, Ie[1] = "M0,.5 L.5,.5 L.5,1", Ie[3] = "M.5,.5 L1,.5", Ie), "\u252F": (He = {}, He[1] = "M.5,.5 L.5,1", He[3] = "M0,.5 L1,.5", He), "\u2530": (je = {}, je[1] = "M0,.5 L1,.5", je[3] = "M.5,.5 L.5,1", je), "\u2531": (Fe = {}, Fe[1] = "M.5,.5 L1,.5", Fe[3] = "M0,.5 L.5,.5 L.5,1", Fe), "\u2532": (We = {}, We[1] = "M.5,.5 L0,.5", We[3] = "M0.5,1 L.5,.5 L1,.5", We), "\u2535": (Ue = {}, Ue[1] = "M.5,0 L.5,.5 L1,.5", Ue[3] = "M.5,.5 L0,.5", Ue), "\u2536": (qe = {}, qe[1] = "M.5,0 L.5,.5 L0,.5", qe[3] = "M.5,.5 L1,.5", qe), "\u2537": (Ne = {}, Ne[1] = "M.5,.5 L.5,0", Ne[3] = "M0,.5 L1,.5", Ne), "\u2538": (ze = {}, ze[1] = "M0,.5 L1,.5", ze[3] = "M.5,.5 L.5,0", ze), "\u2539": (Ke = {}, Ke[1] = "M.5,.5 L1,.5", Ke[3] = "M.5,0 L.5,.5 L0,.5", Ke), "\u253A": (Ge = {}, Ge[1] = "M.5,.5 L0,.5", Ge[3] = "M.5,0 L.5,.5 L1,.5", Ge), "\u253D": (Ve = {}, Ve[1] = "M.5,0 L.5,1 M.5,.5 L1,.5", Ve[3] = "M.5,.5 L0,.5", Ve), "\u253E": (Xe = {}, Xe[1] = "M.5,0 L.5,1 M.5,.5 L0,.5", Xe[3] = "M.5,.5 L1,.5", Xe), "\u253F": (Ze = {}, Ze[1] = "M.5,0 L.5,1", Ze[3] = "M0,.5 L1,.5", Ze), "\u2540": (Ye = {}, Ye[1] = "M0,.5 L1,.5 M.5,.5 L.5,1", Ye[3] = "M.5,.5 L.5,0", Ye), "\u2541": (Je = {}, Je[1] = "M.5,.5 L.5,0 M0,.5 L1,.5", Je[3] = "M.5,.5 L.5,1", Je), "\u2542": ($e = {}, $e[1] = "M0,.5 L1,.5", $e[3] = "M.5,0 L.5,1", $e), "\u2543": (Qe = {}, Qe[1] = "M0.5,1 L.5,.5 L1,.5", Qe[3] = "M.5,0 L.5,.5 L0,.5", Qe), "\u2544": (et = {}, et[1] = "M0,.5 L.5,.5 L.5,1", et[3] = "M.5,0 L.5,.5 L1,.5", et), "\u2545": (tt = {}, tt[1] = "M.5,0 L.5,.5 L1,.5", tt[3] = "M0,.5 L.5,.5 L.5,1", tt), "\u2546": (rt = {}, rt[1] = "M.5,0 L.5,.5 L0,.5", rt[3] = "M0.5,1 L.5,.5 L1,.5", rt), "\u2547": (it = {}, it[1] = "M.5,.5 L.5,1", it[3] = "M.5,.5 L.5,0 M0,.5 L1,.5", it), "\u2548": (nt = {}, nt[1] = "M.5,.5 L.5,0", nt[3] = "M0,.5 L1,.5 M.5,.5 L.5,1", nt), "\u2549": (ot = {}, ot[1] = "M.5,.5 L1,.5", ot[3] = "M.5,0 L.5,1 M.5,.5 L0,.5", ot), "\u254A": (st = {}, st[1] = "M.5,.5 L0,.5", st[3] = "M.5,0 L.5,1 M.5,.5 L1,.5", st), "\u254C": (at = {}, at[1] = "M.1,.5 L.4,.5 M.6,.5 L.9,.5", at), "\u254D": (ct = {}, ct[3] = "M.1,.5 L.4,.5 M.6,.5 L.9,.5", ct), "\u2504": (lt = {}, lt[1] = "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5", lt), "\u2505": (ht = {}, ht[3] = "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5", ht), "\u2508": (ut = {}, ut[1] = "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5", ut), "\u2509": (ft = {}, ft[3] = "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5", ft), "\u254E": (_t = {}, _t[1] = "M.5,.1 L.5,.4 M.5,.6 L.5,.9", _t), "\u254F": (dt = {}, dt[3] = "M.5,.1 L.5,.4 M.5,.6 L.5,.9", dt), "\u2506": (pt = {}, pt[1] = "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333", pt), "\u2507": (vt = {}, vt[3] = "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333", vt), "\u250A": (yt = {}, yt[1] = "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95", yt), "\u250B": (gt = {}, gt[3] = "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95", gt), "\u256D": (mt = {}, mt[1] = "C.5,1,.5,.5,1,.5", mt), "\u256E": (bt = {}, bt[1] = "C.5,1,.5,.5,0,.5", bt), "\u256F": (St = {}, St[1] = "C.5,0,.5,.5,0,.5", St), "\u2570": (Ct = {}, Ct[1] = "C.5,0,.5,.5,1,.5", Ct) }, t2.powerlineDefinitions = { "\uE0B0": { d: "M0,0 L1,.5 L0,1", type: 0 }, "\uE0B1": { d: "M0,0 L1,.5 L0,1", type: 1, horizontalPadding: 0.5 }, "\uE0B2": { d: "M1,0 L0,.5 L1,1", type: 0 }, "\uE0B3": { d: "M1,0 L0,.5 L1,1", type: 1, horizontalPadding: 0.5 } }, t2.tryDrawCustomChar = function(e3, r2, i2, n2, o2, s2) {
              var a2 = t2.blockElementDefinitions[r2];
              if (a2)
                return function(e4, t3, r3, i3, n3, o3) {
                  for (var s3 = 0; s3 < t3.length; s3++) {
                    var a3 = t3[s3], c3 = n3 / 8, l3 = o3 / 8;
                    e4.fillRect(r3 + a3.x * c3, i3 + a3.y * l3, a3.w * c3, a3.h * l3);
                  }
                }(e3, a2, i2, n2, o2, s2), true;
              var c2 = xt[r2];
              if (c2)
                return function(e4, t3, r3, i3, n3, o3) {
                  var s3, a3 = Rt.get(t3);
                  a3 || (a3 = /* @__PURE__ */ new Map(), Rt.set(t3, a3));
                  var c3 = e4.fillStyle;
                  if ("string" != typeof c3)
                    throw new Error('Unexpected fillStyle type "' + c3 + '"');
                  var l3 = a3.get(c3);
                  if (!l3) {
                    var h3 = t3[0].length, u2 = t3.length, f2 = document.createElement("canvas");
                    f2.width = h3, f2.height = u2;
                    var _2 = (0, Et.throwIfFalsy)(f2.getContext("2d")), d2 = new ImageData(h3, u2), p2 = void 0, v2 = void 0, y2 = void 0, g2 = void 0;
                    if (c3.startsWith("#"))
                      p2 = parseInt(c3.slice(1, 3), 16), v2 = parseInt(c3.slice(3, 5), 16), y2 = parseInt(c3.slice(5, 7), 16), g2 = c3.length > 7 && parseInt(c3.slice(7, 9), 16) || 1;
                    else {
                      if (!c3.startsWith("rgba"))
                        throw new Error('Unexpected fillStyle color format "' + c3 + '" when drawing pattern glyph');
                      p2 = (s3 = wt(c3.substring(5, c3.length - 1).split(",").map(function(e5) {
                        return parseFloat(e5);
                      }), 4))[0], v2 = s3[1], y2 = s3[2], g2 = s3[3];
                    }
                    for (var m2 = 0; m2 < u2; m2++)
                      for (var b2 = 0; b2 < h3; b2++)
                        d2.data[4 * (m2 * h3 + b2)] = p2, d2.data[4 * (m2 * h3 + b2) + 1] = v2, d2.data[4 * (m2 * h3 + b2) + 2] = y2, d2.data[4 * (m2 * h3 + b2) + 3] = t3[m2][b2] * (255 * g2);
                    _2.putImageData(d2, 0, 0), l3 = (0, Et.throwIfFalsy)(e4.createPattern(f2, null)), a3.set(c3, l3);
                  }
                  e4.fillStyle = l3, e4.fillRect(r3, i3, n3, o3);
                }(e3, c2, i2, n2, o2, s2), true;
              var l2 = t2.boxDrawingDefinitions[r2];
              if (l2)
                return function(e4, t3, r3, i3, n3, o3) {
                  var s3, a3, c3, l3;
                  e4.strokeStyle = e4.fillStyle;
                  try {
                    for (var h3 = Lt(Object.entries(t3)), u2 = h3.next(); !u2.done; u2 = h3.next()) {
                      var f2 = wt(u2.value, 2), _2 = f2[0], d2 = f2[1];
                      e4.beginPath(), e4.lineWidth = window.devicePixelRatio * Number.parseInt(_2);
                      var p2 = void 0;
                      p2 = "function" == typeof d2 ? d2(0.15, 0.15 / o3 * n3) : d2;
                      try {
                        for (var v2 = (c3 = void 0, Lt(p2.split(" "))), y2 = v2.next(); !y2.done; y2 = v2.next()) {
                          var g2 = y2.value, m2 = g2[0], b2 = Mt[m2];
                          if (b2) {
                            var S2 = g2.substring(1).split(",");
                            S2[0] && S2[1] && b2(e4, At(S2, n3, o3, r3, i3));
                          } else
                            console.error('Could not find drawing instructions for "' + m2 + '"');
                        }
                      } catch (e5) {
                        c3 = { error: e5 };
                      } finally {
                        try {
                          y2 && !y2.done && (l3 = v2.return) && l3.call(v2);
                        } finally {
                          if (c3)
                            throw c3.error;
                        }
                      }
                      e4.stroke(), e4.closePath();
                    }
                  } catch (e5) {
                    s3 = { error: e5 };
                  } finally {
                    try {
                      u2 && !u2.done && (a3 = h3.return) && a3.call(h3);
                    } finally {
                      if (s3)
                        throw s3.error;
                    }
                  }
                }(e3, l2, i2, n2, o2, s2), true;
              var h2 = t2.powerlineDefinitions[r2];
              return !!h2 && (function(e4, t3, r3, i3, n3, o3) {
                var s3, a3;
                e4.beginPath(), e4.lineWidth = window.devicePixelRatio;
                try {
                  for (var c3 = Lt(t3.d.split(" ")), l3 = c3.next(); !l3.done; l3 = c3.next()) {
                    var h3 = l3.value, u2 = h3[0], f2 = Mt[u2];
                    if (f2) {
                      var _2 = h3.substring(1).split(",");
                      _2[0] && _2[1] && f2(e4, At(_2, n3, o3, r3, i3, t3.horizontalPadding));
                    } else
                      console.error('Could not find drawing instructions for "' + u2 + '"');
                  }
                } catch (e5) {
                  s3 = { error: e5 };
                } finally {
                  try {
                    l3 && !l3.done && (a3 = c3.return) && a3.call(c3);
                  } finally {
                    if (s3)
                      throw s3.error;
                  }
                }
                1 === t3.type ? (e4.strokeStyle = e4.fillStyle, e4.stroke()) : e4.fill(), e4.closePath();
              }(e3, h2, i2, n2, o2, s2), true);
            };
            var Rt = /* @__PURE__ */ new Map();
            function kt(e3, t3, r2) {
              return void 0 === r2 && (r2 = 0), Math.max(Math.min(e3, t3), r2);
            }
            var Mt = { C: function(e3, t3) {
              return e3.bezierCurveTo(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
            }, L: function(e3, t3) {
              return e3.lineTo(t3[0], t3[1]);
            }, M: function(e3, t3) {
              return e3.moveTo(t3[0], t3[1]);
            } };
            function At(e3, t3, r2, i2, n2, o2) {
              void 0 === o2 && (o2 = 0);
              var s2 = e3.map(function(e4) {
                return parseFloat(e4) || parseInt(e4);
              });
              if (s2.length < 2)
                throw new Error("Too few arguments for instruction");
              for (var a2 = 0; a2 < s2.length; a2 += 2)
                s2[a2] *= t3 - 2 * o2 * window.devicePixelRatio, 0 !== s2[a2] && (s2[a2] = kt(Math.round(s2[a2] + 0.5) - 0.5, t3, 0)), s2[a2] += i2 + o2 * window.devicePixelRatio;
              for (var c2 = 1; c2 < s2.length; c2 += 2)
                s2[c2] *= r2, 0 !== s2[c2] && (s2[c2] = kt(Math.round(s2[c2] + 0.5) - 0.5, r2, 0)), s2[c2] += n2;
              return s2;
            }
          }, 3700: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.GridCache = void 0;
            var r = function() {
              function e3() {
                this.cache = [];
              }
              return e3.prototype.resize = function(e4, t3) {
                for (var r2 = 0; r2 < e4; r2++) {
                  this.cache.length <= r2 && this.cache.push([]);
                  for (var i = this.cache[r2].length; i < t3; i++)
                    this.cache[r2].push(void 0);
                  this.cache[r2].length = t3;
                }
                this.cache.length = e4;
              }, e3.prototype.clear = function() {
                for (var e4 = 0; e4 < this.cache.length; e4++)
                  for (var t3 = 0; t3 < this.cache[e4].length; t3++)
                    this.cache[e4][t3] = void 0;
              }, e3;
            }();
            t2.GridCache = r;
          }, 5098: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.LinkRenderLayer = void 0;
            var a = r(1546), c = r(8803), l = r(2040), h = r(2585), u = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, a2, c2, l2) {
                var h2 = e3.call(this, t4, "link", r2, true, i2, n2, a2, c2, l2) || this;
                return o2.onShowLinkUnderline(function(e4) {
                  return h2._onShowLinkUnderline(e4);
                }), o2.onHideLinkUnderline(function(e4) {
                  return h2._onHideLinkUnderline(e4);
                }), s2.onShowLinkUnderline(function(e4) {
                  return h2._onShowLinkUnderline(e4);
                }), s2.onHideLinkUnderline(function(e4) {
                  return h2._onHideLinkUnderline(e4);
                }), h2;
              }
              return n(t3, e3), t3.prototype.resize = function(t4) {
                e3.prototype.resize.call(this, t4), this._state = void 0;
              }, t3.prototype.reset = function() {
                this._clearCurrentLink();
              }, t3.prototype._clearCurrentLink = function() {
                if (this._state) {
                  this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                  var e4 = this._state.y2 - this._state.y1 - 1;
                  e4 > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e4), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0;
                }
              }, t3.prototype._onShowLinkUnderline = function(e4) {
                if (e4.fg === c.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : e4.fg && (0, l.is256Color)(e4.fg) ? this._ctx.fillStyle = this._colors.ansi[e4.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e4.y1 === e4.y2)
                  this._fillBottomLineAtCells(e4.x1, e4.y1, e4.x2 - e4.x1);
                else {
                  this._fillBottomLineAtCells(e4.x1, e4.y1, e4.cols - e4.x1);
                  for (var t4 = e4.y1 + 1; t4 < e4.y2; t4++)
                    this._fillBottomLineAtCells(0, t4, e4.cols);
                  this._fillBottomLineAtCells(0, e4.y2, e4.x2);
                }
                this._state = e4;
              }, t3.prototype._onHideLinkUnderline = function(e4) {
                this._clearCurrentLink();
              }, o([s(6, h.IBufferService), s(7, h.IOptionsService), s(8, h.IDecorationService)], t3);
            }(a.BaseRenderLayer);
            t2.LinkRenderLayer = u;
          }, 3525: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, a = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Renderer = void 0;
            var c = r(9596), l = r(4149), h = r(2512), u = r(5098), f = r(844), _ = r(4725), d = r(2585), p = r(1420), v = r(8460), y = 1, g = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, a2, f2) {
                var _2 = e3.call(this) || this;
                _2._colors = t4, _2._screenElement = r2, _2._bufferService = s2, _2._charSizeService = a2, _2._optionsService = f2, _2._id = y++, _2._onRequestRedraw = new v.EventEmitter();
                var d2 = _2._optionsService.rawOptions.allowTransparency;
                return _2._renderLayers = [o2.createInstance(c.TextRenderLayer, _2._screenElement, 0, _2._colors, d2, _2._id), o2.createInstance(l.SelectionRenderLayer, _2._screenElement, 1, _2._colors, _2._id), o2.createInstance(u.LinkRenderLayer, _2._screenElement, 2, _2._colors, _2._id, i2, n2), o2.createInstance(h.CursorRenderLayer, _2._screenElement, 3, _2._colors, _2._id, _2._onRequestRedraw)], _2.dimensions = { scaledCharWidth: 0, scaledCharHeight: 0, scaledCellWidth: 0, scaledCellHeight: 0, scaledCharLeft: 0, scaledCharTop: 0, scaledCanvasWidth: 0, scaledCanvasHeight: 0, canvasWidth: 0, canvasHeight: 0, actualCellWidth: 0, actualCellHeight: 0 }, _2._devicePixelRatio = window.devicePixelRatio, _2._updateDimensions(), _2.onOptionsChanged(), _2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onRequestRedraw", { get: function() {
                return this._onRequestRedraw.event;
              }, enumerable: false, configurable: true }), t3.prototype.dispose = function() {
                var t4, r2;
                try {
                  for (var i2 = a(this._renderLayers), n2 = i2.next(); !n2.done; n2 = i2.next())
                    n2.value.dispose();
                } catch (e4) {
                  t4 = { error: e4 };
                } finally {
                  try {
                    n2 && !n2.done && (r2 = i2.return) && r2.call(i2);
                  } finally {
                    if (t4)
                      throw t4.error;
                  }
                }
                e3.prototype.dispose.call(this), (0, p.removeTerminalFromCache)(this._id);
              }, t3.prototype.onDevicePixelRatioChange = function() {
                this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._bufferService.cols, this._bufferService.rows));
              }, t3.prototype.setColors = function(e4) {
                var t4, r2;
                this._colors = e4;
                try {
                  for (var i2 = a(this._renderLayers), n2 = i2.next(); !n2.done; n2 = i2.next()) {
                    var o2 = n2.value;
                    o2.setColors(this._colors), o2.reset();
                  }
                } catch (e5) {
                  t4 = { error: e5 };
                } finally {
                  try {
                    n2 && !n2.done && (r2 = i2.return) && r2.call(i2);
                  } finally {
                    if (t4)
                      throw t4.error;
                  }
                }
              }, t3.prototype.onResize = function(e4, t4) {
                var r2, i2;
                this._updateDimensions();
                try {
                  for (var n2 = a(this._renderLayers), o2 = n2.next(); !o2.done; o2 = n2.next())
                    o2.value.resize(this.dimensions);
                } catch (e5) {
                  r2 = { error: e5 };
                } finally {
                  try {
                    o2 && !o2.done && (i2 = n2.return) && i2.call(n2);
                  } finally {
                    if (r2)
                      throw r2.error;
                  }
                }
                this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px";
              }, t3.prototype.onCharSizeChanged = function() {
                this.onResize(this._bufferService.cols, this._bufferService.rows);
              }, t3.prototype.onBlur = function() {
                this._runOperation(function(e4) {
                  return e4.onBlur();
                });
              }, t3.prototype.onFocus = function() {
                this._runOperation(function(e4) {
                  return e4.onFocus();
                });
              }, t3.prototype.onSelectionChanged = function(e4, t4, r2) {
                void 0 === r2 && (r2 = false), this._runOperation(function(i2) {
                  return i2.onSelectionChanged(e4, t4, r2);
                }), this._colors.selectionForeground && this._onRequestRedraw.fire({ start: 0, end: this._bufferService.rows - 1 });
              }, t3.prototype.onCursorMove = function() {
                this._runOperation(function(e4) {
                  return e4.onCursorMove();
                });
              }, t3.prototype.onOptionsChanged = function() {
                this._runOperation(function(e4) {
                  return e4.onOptionsChanged();
                });
              }, t3.prototype.clear = function() {
                this._runOperation(function(e4) {
                  return e4.reset();
                });
              }, t3.prototype._runOperation = function(e4) {
                var t4, r2;
                try {
                  for (var i2 = a(this._renderLayers), n2 = i2.next(); !n2.done; n2 = i2.next())
                    e4(n2.value);
                } catch (e5) {
                  t4 = { error: e5 };
                } finally {
                  try {
                    n2 && !n2.done && (r2 = i2.return) && r2.call(i2);
                  } finally {
                    if (t4)
                      throw t4.error;
                  }
                }
              }, t3.prototype.renderRows = function(e4, t4) {
                var r2, i2;
                try {
                  for (var n2 = a(this._renderLayers), o2 = n2.next(); !o2.done; o2 = n2.next())
                    o2.value.onGridChanged(e4, t4);
                } catch (e5) {
                  r2 = { error: e5 };
                } finally {
                  try {
                    o2 && !o2.done && (i2 = n2.return) && i2.call(n2);
                  } finally {
                    if (r2)
                      throw r2.error;
                  }
                }
              }, t3.prototype.clearTextureAtlas = function() {
                var e4, t4;
                try {
                  for (var r2 = a(this._renderLayers), i2 = r2.next(); !i2.done; i2 = r2.next())
                    i2.value.clearTextureAtlas();
                } catch (t5) {
                  e4 = { error: t5 };
                } finally {
                  try {
                    i2 && !i2.done && (t4 = r2.return) && t4.call(r2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
              }, t3.prototype._updateDimensions = function() {
                this._charSizeService.hasValidSize && (this.dimensions.scaledCharWidth = Math.floor(this._charSizeService.width * window.devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.rawOptions.lineHeight), this.dimensions.scaledCharTop = 1 === this._optionsService.rawOptions.lineHeight ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.scaledCharLeft = Math.floor(this._optionsService.rawOptions.letterSpacing / 2), this.dimensions.scaledCanvasHeight = this._bufferService.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._bufferService.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols);
              }, o([s(4, d.IInstantiationService), s(5, d.IBufferService), s(6, _.ICharSizeService), s(7, d.IOptionsService)], t3);
            }(f.Disposable);
            t2.Renderer = g;
          }, 1752: (e2, t2) => {
            function r(e3) {
              return 57508 <= e3 && e3 <= 57558;
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.excludeFromContrastRatioDemands = t2.isPowerlineGlyph = t2.throwIfFalsy = void 0, t2.throwIfFalsy = function(e3) {
              if (!e3)
                throw new Error("value must not be falsy");
              return e3;
            }, t2.isPowerlineGlyph = r, t2.excludeFromContrastRatioDemands = function(e3) {
              return r(e3) || function(e4) {
                return 9472 <= e4 && e4 <= 9631;
              }(e3);
            };
          }, 4149: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionRenderLayer = void 0;
            var a = r(1546), c = r(2585), l = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, a2) {
                var c2 = e3.call(this, t4, "selection", r2, true, i2, n2, o2, s2, a2) || this;
                return c2._clearState(), c2;
              }
              return n(t3, e3), t3.prototype._clearState = function() {
                this._state = { start: void 0, end: void 0, columnSelectMode: void 0, ydisp: void 0 };
              }, t3.prototype.resize = function(t4) {
                e3.prototype.resize.call(this, t4), this._clearState();
              }, t3.prototype.reset = function() {
                this._state.start && this._state.end && (this._clearState(), this._clearAll());
              }, t3.prototype.onSelectionChanged = function(t4, r2, i2) {
                if (e3.prototype.onSelectionChanged.call(this, t4, r2, i2), this._didStateChange(t4, r2, i2, this._bufferService.buffer.ydisp))
                  if (this._clearAll(), t4 && r2) {
                    var n2 = t4[1] - this._bufferService.buffer.ydisp, o2 = r2[1] - this._bufferService.buffer.ydisp, s2 = Math.max(n2, 0), a2 = Math.min(o2, this._bufferService.rows - 1);
                    if (s2 >= this._bufferService.rows || a2 < 0)
                      this._state.ydisp = this._bufferService.buffer.ydisp;
                    else {
                      if (this._ctx.fillStyle = this._colors.selectionTransparent.css, i2) {
                        var c2 = t4[0], l2 = r2[0] - c2, h = a2 - s2 + 1;
                        this._fillCells(c2, s2, l2, h);
                      } else {
                        c2 = n2 === s2 ? t4[0] : 0;
                        var u = s2 === o2 ? r2[0] : this._bufferService.cols;
                        this._fillCells(c2, s2, u - c2, 1);
                        var f = Math.max(a2 - s2 - 1, 0);
                        if (this._fillCells(0, s2 + 1, this._bufferService.cols, f), s2 !== a2) {
                          var _ = o2 === a2 ? r2[0] : this._bufferService.cols;
                          this._fillCells(0, a2, _, 1);
                        }
                      }
                      this._state.start = [t4[0], t4[1]], this._state.end = [r2[0], r2[1]], this._state.columnSelectMode = i2, this._state.ydisp = this._bufferService.buffer.ydisp;
                    }
                  } else
                    this._clearState();
              }, t3.prototype._didStateChange = function(e4, t4, r2, i2) {
                return !this._areCoordinatesEqual(e4, this._state.start) || !this._areCoordinatesEqual(t4, this._state.end) || r2 !== this._state.columnSelectMode || i2 !== this._state.ydisp;
              }, t3.prototype._areCoordinatesEqual = function(e4, t4) {
                return !(!e4 || !t4) && e4[0] === t4[0] && e4[1] === t4[1];
              }, o([s(4, c.IBufferService), s(5, c.IOptionsService), s(6, c.IDecorationService)], t3);
            }(a.BaseRenderLayer);
            t2.SelectionRenderLayer = l;
          }, 9596: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, a = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.TextRenderLayer = void 0;
            var c = r(3700), l = r(1546), h = r(3734), u = r(643), f = r(511), _ = r(2585), d = r(4725), p = r(4269), v = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, a2, l2, h2) {
                var u2 = e3.call(this, t4, "text", r2, n2, i2, o2, s2, a2, h2) || this;
                return u2._characterJoinerService = l2, u2._characterWidth = 0, u2._characterFont = "", u2._characterOverlapCache = {}, u2._workCell = new f.CellData(), u2._state = new c.GridCache(), u2;
              }
              return n(t3, e3), t3.prototype.resize = function(t4) {
                e3.prototype.resize.call(this, t4);
                var r2 = this._getFont(false, false);
                this._characterWidth === t4.scaledCharWidth && this._characterFont === r2 || (this._characterWidth = t4.scaledCharWidth, this._characterFont = r2, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows);
              }, t3.prototype.reset = function() {
                this._state.clear(), this._clearAll();
              }, t3.prototype._forEachCell = function(e4, t4, r2) {
                for (var i2 = e4; i2 <= t4; i2++)
                  for (var n2 = i2 + this._bufferService.buffer.ydisp, o2 = this._bufferService.buffer.lines.get(n2), s2 = this._characterJoinerService.getJoinedCharacters(n2), a2 = 0; a2 < this._bufferService.cols; a2++) {
                    o2.loadCell(a2, this._workCell);
                    var c2 = this._workCell, l2 = false, h2 = a2;
                    if (0 !== c2.getWidth()) {
                      if (s2.length > 0 && a2 === s2[0][0]) {
                        l2 = true;
                        var f2 = s2.shift();
                        c2 = new p.JoinedCellData(this._workCell, o2.translateToString(true, f2[0], f2[1]), f2[1] - f2[0]), h2 = f2[1] - 1;
                      }
                      !l2 && this._isOverlapping(c2) && h2 < o2.length - 1 && o2.getCodePoint(h2 + 1) === u.NULL_CELL_CODE && (c2.content &= -12582913, c2.content |= 2 << 22), r2(c2, a2, i2), a2 = h2;
                    }
                  }
              }, t3.prototype._drawBackground = function(e4, t4) {
                var r2 = this, i2 = this._ctx, n2 = this._bufferService.cols, o2 = 0, s2 = 0, c2 = null;
                i2.save(), this._forEachCell(e4, t4, function(e5, t5, l2) {
                  var u2, f2, _2 = null;
                  e5.isInverse() ? _2 = e5.isFgDefault() ? r2._colors.foreground.css : e5.isFgRGB() ? "rgb(" + h.AttributeData.toColorRGB(e5.getFgColor()).join(",") + ")" : r2._colors.ansi[e5.getFgColor()].css : e5.isBgRGB() ? _2 = "rgb(" + h.AttributeData.toColorRGB(e5.getBgColor()).join(",") + ")" : e5.isBgPalette() && (_2 = r2._colors.ansi[e5.getBgColor()].css);
                  var d2 = false;
                  try {
                    for (var p2 = a(r2._decorationService.getDecorationsAtCell(t5, r2._bufferService.buffer.ydisp + l2)), v2 = p2.next(); !v2.done; v2 = p2.next()) {
                      var y = v2.value;
                      "top" !== y.options.layer && d2 || (y.backgroundColorRGB && (_2 = y.backgroundColorRGB.css), d2 = "top" === y.options.layer);
                    }
                  } catch (e6) {
                    u2 = { error: e6 };
                  } finally {
                    try {
                      v2 && !v2.done && (f2 = p2.return) && f2.call(p2);
                    } finally {
                      if (u2)
                        throw u2.error;
                    }
                  }
                  null === c2 && (o2 = t5, s2 = l2), l2 !== s2 ? (i2.fillStyle = c2 || "", r2._fillCells(o2, s2, n2 - o2, 1), o2 = t5, s2 = l2) : c2 !== _2 && (i2.fillStyle = c2 || "", r2._fillCells(o2, s2, t5 - o2, 1), o2 = t5, s2 = l2), c2 = _2;
                }), null !== c2 && (i2.fillStyle = c2, this._fillCells(o2, s2, n2 - o2, 1)), i2.restore();
              }, t3.prototype._drawForeground = function(e4, t4) {
                var r2 = this;
                this._forEachCell(e4, t4, function(e5, t5, i2) {
                  if (!e5.isInvisible() && (r2._drawChars(e5, t5, i2), e5.isUnderline() || e5.isStrikethrough())) {
                    if (r2._ctx.save(), e5.isInverse())
                      if (e5.isBgDefault())
                        r2._ctx.fillStyle = r2._colors.background.css;
                      else if (e5.isBgRGB())
                        r2._ctx.fillStyle = "rgb(" + h.AttributeData.toColorRGB(e5.getBgColor()).join(",") + ")";
                      else {
                        var n2 = e5.getBgColor();
                        r2._optionsService.rawOptions.drawBoldTextInBrightColors && e5.isBold() && n2 < 8 && (n2 += 8), r2._ctx.fillStyle = r2._colors.ansi[n2].css;
                      }
                    else if (e5.isFgDefault())
                      r2._ctx.fillStyle = r2._colors.foreground.css;
                    else if (e5.isFgRGB())
                      r2._ctx.fillStyle = "rgb(" + h.AttributeData.toColorRGB(e5.getFgColor()).join(",") + ")";
                    else {
                      var o2 = e5.getFgColor();
                      r2._optionsService.rawOptions.drawBoldTextInBrightColors && e5.isBold() && o2 < 8 && (o2 += 8), r2._ctx.fillStyle = r2._colors.ansi[o2].css;
                    }
                    e5.isStrikethrough() && r2._fillMiddleLineAtCells(t5, i2, e5.getWidth()), e5.isUnderline() && r2._fillBottomLineAtCells(t5, i2, e5.getWidth()), r2._ctx.restore();
                  }
                });
              }, t3.prototype.onGridChanged = function(e4, t4) {
                0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, e4, this._bufferService.cols, t4 - e4 + 1), this._drawBackground(e4, t4), this._drawForeground(e4, t4));
              }, t3.prototype.onOptionsChanged = function() {
                this._setTransparency(this._optionsService.rawOptions.allowTransparency);
              }, t3.prototype._isOverlapping = function(e4) {
                if (1 !== e4.getWidth())
                  return false;
                if (e4.getCode() < 256)
                  return false;
                var t4 = e4.getChars();
                if (this._characterOverlapCache.hasOwnProperty(t4))
                  return this._characterOverlapCache[t4];
                this._ctx.save(), this._ctx.font = this._characterFont;
                var r2 = Math.floor(this._ctx.measureText(t4).width) > this._characterWidth;
                return this._ctx.restore(), this._characterOverlapCache[t4] = r2, r2;
              }, o([s(5, _.IBufferService), s(6, _.IOptionsService), s(7, d.ICharacterJoinerService), s(8, _.IDecorationService)], t3);
            }(l.BaseRenderLayer);
            t2.TextRenderLayer = v;
          }, 9616: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BaseCharAtlas = void 0;
            var r = function() {
              function e3() {
                this._didWarmUp = false;
              }
              return e3.prototype.dispose = function() {
              }, e3.prototype.warmUp = function() {
                this._didWarmUp || (this._doWarmUp(), this._didWarmUp = true);
              }, e3.prototype._doWarmUp = function() {
              }, e3.prototype.clear = function() {
              }, e3.prototype.beginFrame = function() {
              }, e3;
            }();
            t2.BaseCharAtlas = r;
          }, 1420: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.removeTerminalFromCache = t2.acquireCharAtlas = void 0;
            var i = r(2040), n = r(1906), o = [];
            t2.acquireCharAtlas = function(e3, t3, r2, s, a) {
              for (var c = (0, i.generateConfig)(s, a, e3, r2), l = 0; l < o.length; l++) {
                var h = (u = o[l]).ownedBy.indexOf(t3);
                if (h >= 0) {
                  if ((0, i.configEquals)(u.config, c))
                    return u.atlas;
                  1 === u.ownedBy.length ? (u.atlas.dispose(), o.splice(l, 1)) : u.ownedBy.splice(h, 1);
                  break;
                }
              }
              for (l = 0; l < o.length; l++) {
                var u = o[l];
                if ((0, i.configEquals)(u.config, c))
                  return u.ownedBy.push(t3), u.atlas;
              }
              var f = { atlas: new n.DynamicCharAtlas(document, c), config: c, ownedBy: [t3] };
              return o.push(f), f.atlas;
            }, t2.removeTerminalFromCache = function(e3) {
              for (var t3 = 0; t3 < o.length; t3++) {
                var r2 = o[t3].ownedBy.indexOf(e3);
                if (-1 !== r2) {
                  1 === o[t3].ownedBy.length ? (o[t3].atlas.dispose(), o.splice(t3, 1)) : o[t3].ownedBy.splice(r2, 1);
                  break;
                }
              }
            };
          }, 2040: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.is256Color = t2.configEquals = t2.generateConfig = void 0;
            var i = r(643);
            t2.generateConfig = function(e3, t3, r2, i2) {
              var n = { foreground: i2.foreground, background: i2.background, cursor: void 0, cursorAccent: void 0, selection: void 0, ansi: i2.ansi.slice() };
              return { devicePixelRatio: window.devicePixelRatio, scaledCharWidth: e3, scaledCharHeight: t3, fontFamily: r2.fontFamily, fontSize: r2.fontSize, fontWeight: r2.fontWeight, fontWeightBold: r2.fontWeightBold, allowTransparency: r2.allowTransparency, colors: n };
            }, t2.configEquals = function(e3, t3) {
              for (var r2 = 0; r2 < e3.colors.ansi.length; r2++)
                if (e3.colors.ansi[r2].rgba !== t3.colors.ansi[r2].rgba)
                  return false;
              return e3.devicePixelRatio === t3.devicePixelRatio && e3.fontFamily === t3.fontFamily && e3.fontSize === t3.fontSize && e3.fontWeight === t3.fontWeight && e3.fontWeightBold === t3.fontWeightBold && e3.allowTransparency === t3.allowTransparency && e3.scaledCharWidth === t3.scaledCharWidth && e3.scaledCharHeight === t3.scaledCharHeight && e3.colors.foreground === t3.colors.foreground && e3.colors.background === t3.colors.background;
            }, t2.is256Color = function(e3) {
              return e3 < i.DEFAULT_COLOR;
            };
          }, 8803: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CHAR_ATLAS_CELL_SPACING = t2.TEXT_BASELINE = t2.DIM_OPACITY = t2.INVERTED_DEFAULT_COLOR = void 0;
            var i = r(6114);
            t2.INVERTED_DEFAULT_COLOR = 257, t2.DIM_OPACITY = 0.5, t2.TEXT_BASELINE = i.isFirefox || i.isLegacyEdge ? "bottom" : "ideographic", t2.CHAR_ATLAS_CELL_SPACING = 1;
          }, 1906: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            });
            Object.defineProperty(t2, "__esModule", { value: true }), t2.NoneCharAtlas = t2.DynamicCharAtlas = t2.getGlyphCacheKey = void 0;
            var o = r(8803), s = r(9616), a = r(5680), c = r(7001), l = r(6114), h = r(1752), u = r(8055), f = 1024, _ = 1024, d = { css: "rgba(0, 0, 0, 0)", rgba: 0 };
            function p(e3) {
              return e3.code << 21 | e3.bg << 12 | e3.fg << 3 | (e3.bold ? 0 : 4) + (e3.dim ? 0 : 2) + (e3.italic ? 0 : 1);
            }
            t2.getGlyphCacheKey = p;
            var v = function(e3) {
              function t3(t4, r2) {
                var i2 = e3.call(this) || this;
                i2._config = r2, i2._drawToCacheCount = 0, i2._glyphsWaitingOnBitmap = [], i2._bitmapCommitTimeout = null, i2._bitmap = null, i2._cacheCanvas = t4.createElement("canvas"), i2._cacheCanvas.width = f, i2._cacheCanvas.height = _, i2._cacheCtx = (0, h.throwIfFalsy)(i2._cacheCanvas.getContext("2d", { alpha: true }));
                var n2 = t4.createElement("canvas");
                n2.width = i2._config.scaledCharWidth, n2.height = i2._config.scaledCharHeight, i2._tmpCtx = (0, h.throwIfFalsy)(n2.getContext("2d", { alpha: i2._config.allowTransparency })), i2._width = Math.floor(f / i2._config.scaledCharWidth), i2._height = Math.floor(_ / i2._config.scaledCharHeight);
                var o2 = i2._width * i2._height;
                return i2._cacheMap = new c.LRUMap(o2), i2._cacheMap.prealloc(o2), i2;
              }
              return n(t3, e3), t3.prototype.dispose = function() {
                null !== this._bitmapCommitTimeout && (window.clearTimeout(this._bitmapCommitTimeout), this._bitmapCommitTimeout = null);
              }, t3.prototype.beginFrame = function() {
                this._drawToCacheCount = 0;
              }, t3.prototype.clear = function() {
                if (this._cacheMap.size > 0) {
                  var e4 = this._width * this._height;
                  this._cacheMap = new c.LRUMap(e4), this._cacheMap.prealloc(e4);
                }
                this._cacheCtx.clearRect(0, 0, f, _), this._tmpCtx.clearRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight);
              }, t3.prototype.draw = function(e4, t4, r2, i2) {
                if (32 === t4.code)
                  return true;
                if (!this._canCache(t4))
                  return false;
                var n2 = p(t4), o2 = this._cacheMap.get(n2);
                if (null != o2)
                  return this._drawFromCache(e4, o2, r2, i2), true;
                if (this._drawToCacheCount < 100) {
                  var s2;
                  s2 = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
                  var a2 = this._drawToCache(t4, s2);
                  return this._cacheMap.set(n2, a2), this._drawFromCache(e4, a2, r2, i2), true;
                }
                return false;
              }, t3.prototype._canCache = function(e4) {
                return e4.code < 256;
              }, t3.prototype._toCoordinateX = function(e4) {
                return e4 % this._width * this._config.scaledCharWidth;
              }, t3.prototype._toCoordinateY = function(e4) {
                return Math.floor(e4 / this._width) * this._config.scaledCharHeight;
              }, t3.prototype._drawFromCache = function(e4, t4, r2, i2) {
                if (!t4.isEmpty) {
                  var n2 = this._toCoordinateX(t4.index), o2 = this._toCoordinateY(t4.index);
                  e4.drawImage(t4.inBitmap ? this._bitmap : this._cacheCanvas, n2, o2, this._config.scaledCharWidth, this._config.scaledCharHeight, r2, i2, this._config.scaledCharWidth, this._config.scaledCharHeight);
                }
              }, t3.prototype._getColorFromAnsiIndex = function(e4) {
                return e4 < this._config.colors.ansi.length ? this._config.colors.ansi[e4] : a.DEFAULT_ANSI_COLORS[e4];
              }, t3.prototype._getBackgroundColor = function(e4) {
                return this._config.allowTransparency ? d : e4.bg === o.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : e4.bg < 256 ? this._getColorFromAnsiIndex(e4.bg) : this._config.colors.background;
              }, t3.prototype._getForegroundColor = function(e4) {
                return e4.fg === o.INVERTED_DEFAULT_COLOR ? u.color.opaque(this._config.colors.background) : e4.fg < 256 ? this._getColorFromAnsiIndex(e4.fg) : this._config.colors.foreground;
              }, t3.prototype._drawToCache = function(e4, t4) {
                this._drawToCacheCount++, this._tmpCtx.save();
                var r2 = this._getBackgroundColor(e4);
                this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = r2.css, this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), this._tmpCtx.globalCompositeOperation = "source-over";
                var i2 = e4.bold ? this._config.fontWeightBold : this._config.fontWeight, n2 = e4.italic ? "italic" : "";
                this._tmpCtx.font = n2 + " " + i2 + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = o.TEXT_BASELINE, this._tmpCtx.fillStyle = this._getForegroundColor(e4).css, e4.dim && (this._tmpCtx.globalAlpha = o.DIM_OPACITY), this._tmpCtx.fillText(e4.chars, 0, this._config.scaledCharHeight);
                var s2 = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), a2 = false;
                if (this._config.allowTransparency || (a2 = g(s2, r2)), a2 && "_" === e4.chars && !this._config.allowTransparency)
                  for (var c2 = 1; c2 <= 5 && (this._tmpCtx.fillText(e4.chars, 0, this._config.scaledCharHeight - c2), a2 = g(s2 = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), r2)); c2++)
                    ;
                this._tmpCtx.restore();
                var l2 = this._toCoordinateX(t4), h2 = this._toCoordinateY(t4);
                this._cacheCtx.putImageData(s2, l2, h2);
                var u2 = { index: t4, isEmpty: a2, inBitmap: false };
                return this._addGlyphToBitmap(u2), u2;
              }, t3.prototype._addGlyphToBitmap = function(e4) {
                var t4 = this;
                !("createImageBitmap" in window) || l.isFirefox || l.isSafari || (this._glyphsWaitingOnBitmap.push(e4), null === this._bitmapCommitTimeout && (this._bitmapCommitTimeout = window.setTimeout(function() {
                  return t4._generateBitmap();
                }, 100)));
              }, t3.prototype._generateBitmap = function() {
                var e4 = this, t4 = this._glyphsWaitingOnBitmap;
                this._glyphsWaitingOnBitmap = [], window.createImageBitmap(this._cacheCanvas).then(function(r2) {
                  e4._bitmap = r2;
                  for (var i2 = 0; i2 < t4.length; i2++)
                    t4[i2].inBitmap = true;
                }), this._bitmapCommitTimeout = null;
              }, t3;
            }(s.BaseCharAtlas);
            t2.DynamicCharAtlas = v;
            var y = function(e3) {
              function t3(t4, r2) {
                return e3.call(this) || this;
              }
              return n(t3, e3), t3.prototype.draw = function(e4, t4, r2, i2) {
                return false;
              }, t3;
            }(s.BaseCharAtlas);
            function g(e3, t3) {
              for (var r2 = true, i2 = t3.rgba >>> 24, n2 = t3.rgba >>> 16 & 255, o2 = t3.rgba >>> 8 & 255, s2 = 0; s2 < e3.data.length; s2 += 4)
                e3.data[s2] === i2 && e3.data[s2 + 1] === n2 && e3.data[s2 + 2] === o2 ? e3.data[s2 + 3] = 0 : r2 = false;
              return r2;
            }
            t2.NoneCharAtlas = y;
          }, 7001: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.LRUMap = void 0;
            var r = function() {
              function e3(e4) {
                this.capacity = e4, this._map = {}, this._head = null, this._tail = null, this._nodePool = [], this.size = 0;
              }
              return e3.prototype._unlinkNode = function(e4) {
                var t3 = e4.prev, r2 = e4.next;
                e4 === this._head && (this._head = r2), e4 === this._tail && (this._tail = t3), null !== t3 && (t3.next = r2), null !== r2 && (r2.prev = t3);
              }, e3.prototype._appendNode = function(e4) {
                var t3 = this._tail;
                null !== t3 && (t3.next = e4), e4.prev = t3, e4.next = null, this._tail = e4, null === this._head && (this._head = e4);
              }, e3.prototype.prealloc = function(e4) {
                for (var t3 = this._nodePool, r2 = 0; r2 < e4; r2++)
                  t3.push({ prev: null, next: null, key: null, value: null });
              }, e3.prototype.get = function(e4) {
                var t3 = this._map[e4];
                return void 0 !== t3 ? (this._unlinkNode(t3), this._appendNode(t3), t3.value) : null;
              }, e3.prototype.peekValue = function(e4) {
                var t3 = this._map[e4];
                return void 0 !== t3 ? t3.value : null;
              }, e3.prototype.peek = function() {
                var e4 = this._head;
                return null === e4 ? null : e4.value;
              }, e3.prototype.set = function(e4, t3) {
                var r2 = this._map[e4];
                if (void 0 !== r2)
                  r2 = this._map[e4], this._unlinkNode(r2), r2.value = t3;
                else if (this.size >= this.capacity)
                  r2 = this._head, this._unlinkNode(r2), delete this._map[r2.key], r2.key = e4, r2.value = t3, this._map[e4] = r2;
                else {
                  var i = this._nodePool;
                  i.length > 0 ? ((r2 = i.pop()).key = e4, r2.value = t3) : r2 = { prev: null, next: null, key: e4, value: t3 }, this._map[e4] = r2, this.size++;
                }
                this._appendNode(r2);
              }, e3;
            }();
            t2.LRUMap = r;
          }, 1296: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, a = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DomRenderer = void 0;
            var c = r(3787), l = r(8803), h = r(844), u = r(4725), f = r(2585), _ = r(8460), d = r(8055), p = r(9631), v = "xterm-dom-renderer-owner-", y = "xterm-fg-", g = "xterm-bg-", m = "xterm-focus", b = 1, S = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, a2, l2, h2, u2) {
                var f2 = e3.call(this) || this;
                return f2._colors = t4, f2._element = r2, f2._screenElement = i2, f2._viewportElement = n2, f2._linkifier = o2, f2._linkifier2 = s2, f2._charSizeService = l2, f2._optionsService = h2, f2._bufferService = u2, f2._terminalClass = b++, f2._rowElements = [], f2._rowContainer = document.createElement("div"), f2._rowContainer.classList.add("xterm-rows"), f2._rowContainer.style.lineHeight = "normal", f2._rowContainer.setAttribute("aria-hidden", "true"), f2._refreshRowElements(f2._bufferService.cols, f2._bufferService.rows), f2._selectionContainer = document.createElement("div"), f2._selectionContainer.classList.add("xterm-selection"), f2._selectionContainer.setAttribute("aria-hidden", "true"), f2.dimensions = { scaledCharWidth: 0, scaledCharHeight: 0, scaledCellWidth: 0, scaledCellHeight: 0, scaledCharLeft: 0, scaledCharTop: 0, scaledCanvasWidth: 0, scaledCanvasHeight: 0, canvasWidth: 0, canvasHeight: 0, actualCellWidth: 0, actualCellHeight: 0 }, f2._updateDimensions(), f2._injectCss(), f2._rowFactory = a2.createInstance(c.DomRendererRowFactory, document, f2._colors), f2._element.classList.add(v + f2._terminalClass), f2._screenElement.appendChild(f2._rowContainer), f2._screenElement.appendChild(f2._selectionContainer), f2.register(f2._linkifier.onShowLinkUnderline(function(e4) {
                  return f2._onLinkHover(e4);
                })), f2.register(f2._linkifier.onHideLinkUnderline(function(e4) {
                  return f2._onLinkLeave(e4);
                })), f2.register(f2._linkifier2.onShowLinkUnderline(function(e4) {
                  return f2._onLinkHover(e4);
                })), f2.register(f2._linkifier2.onHideLinkUnderline(function(e4) {
                  return f2._onLinkLeave(e4);
                })), f2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onRequestRedraw", { get: function() {
                return new _.EventEmitter().event;
              }, enumerable: false, configurable: true }), t3.prototype.dispose = function() {
                this._element.classList.remove(v + this._terminalClass), (0, p.removeElementFromParent)(this._rowContainer, this._selectionContainer, this._themeStyleElement, this._dimensionsStyleElement), e3.prototype.dispose.call(this);
              }, t3.prototype._updateDimensions = function() {
                var e4, t4;
                this.dimensions.scaledCharWidth = this._charSizeService.width * window.devicePixelRatio, this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.rawOptions.lineHeight), this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._bufferService.cols, this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._bufferService.rows, this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols, this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows;
                try {
                  for (var r2 = a(this._rowElements), i2 = r2.next(); !i2.done; i2 = r2.next()) {
                    var n2 = i2.value;
                    n2.style.width = this.dimensions.canvasWidth + "px", n2.style.height = this.dimensions.actualCellHeight + "px", n2.style.lineHeight = this.dimensions.actualCellHeight + "px", n2.style.overflow = "hidden";
                  }
                } catch (t5) {
                  e4 = { error: t5 };
                } finally {
                  try {
                    i2 && !i2.done && (t4 = r2.return) && t4.call(r2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
                this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
                var o2 = this._terminalSelector + " .xterm-rows span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}";
                this._dimensionsStyleElement.textContent = o2, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px";
              }, t3.prototype.setColors = function(e4) {
                this._colors = e4, this._injectCss();
              }, t3.prototype._injectCss = function() {
                var e4 = this;
                this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
                var t4 = this._terminalSelector + " .xterm-rows { color: " + this._colors.foreground.css + "; font-family: " + this._optionsService.rawOptions.fontFamily + "; font-size: " + this._optionsService.rawOptions.fontSize + "px;}";
                t4 += this._terminalSelector + " span:not(." + c.BOLD_CLASS + ") { font-weight: " + this._optionsService.rawOptions.fontWeight + ";}" + this._terminalSelector + " span." + c.BOLD_CLASS + " { font-weight: " + this._optionsService.rawOptions.fontWeightBold + ";}" + this._terminalSelector + " span." + c.ITALIC_CLASS + " { font-style: italic;}", t4 += "@keyframes blink_box_shadow_" + this._terminalClass + " { 50% {  box-shadow: none; }}", t4 += "@keyframes blink_block_" + this._terminalClass + " { 0% {  background-color: " + this._colors.cursor.css + ";  color: " + this._colors.cursorAccent.css + "; } 50% {  background-color: " + this._colors.cursorAccent.css + ";  color: " + this._colors.cursor.css + "; }}", t4 += this._terminalSelector + " .xterm-rows:not(.xterm-focus) ." + c.CURSOR_CLASS + "." + c.CURSOR_STYLE_BLOCK_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + c.CURSOR_CLASS + "." + c.CURSOR_BLINK_CLASS + ":not(." + c.CURSOR_STYLE_BLOCK_CLASS + ") { animation: blink_box_shadow_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + c.CURSOR_CLASS + "." + c.CURSOR_BLINK_CLASS + "." + c.CURSOR_STYLE_BLOCK_CLASS + " { animation: blink_block_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + c.CURSOR_CLASS + "." + c.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " .xterm-rows ." + c.CURSOR_CLASS + "." + c.CURSOR_STYLE_BAR_CLASS + " { box-shadow: " + this._optionsService.rawOptions.cursorWidth + "px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " .xterm-rows ." + c.CURSOR_CLASS + "." + c.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", t4 += this._terminalSelector + " .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " .xterm-selection div { position: absolute; background-color: " + this._colors.selectionOpaque.css + ";}", this._colors.ansi.forEach(function(r2, i2) {
                  t4 += e4._terminalSelector + " ." + y + i2 + " { color: " + r2.css + "; }" + e4._terminalSelector + " ." + g + i2 + " { background-color: " + r2.css + "; }";
                }), t4 += this._terminalSelector + " ." + y + l.INVERTED_DEFAULT_COLOR + " { color: " + d.color.opaque(this._colors.background).css + "; }" + this._terminalSelector + " ." + g + l.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }", this._themeStyleElement.textContent = t4;
              }, t3.prototype.onDevicePixelRatioChange = function() {
                this._updateDimensions();
              }, t3.prototype._refreshRowElements = function(e4, t4) {
                for (var r2 = this._rowElements.length; r2 <= t4; r2++) {
                  var i2 = document.createElement("div");
                  this._rowContainer.appendChild(i2), this._rowElements.push(i2);
                }
                for (; this._rowElements.length > t4; )
                  this._rowContainer.removeChild(this._rowElements.pop());
              }, t3.prototype.onResize = function(e4, t4) {
                this._refreshRowElements(e4, t4), this._updateDimensions();
              }, t3.prototype.onCharSizeChanged = function() {
                this._updateDimensions();
              }, t3.prototype.onBlur = function() {
                this._rowContainer.classList.remove(m);
              }, t3.prototype.onFocus = function() {
                this._rowContainer.classList.add(m);
              }, t3.prototype.onSelectionChanged = function(e4, t4, r2) {
                for (; this._selectionContainer.children.length; )
                  this._selectionContainer.removeChild(this._selectionContainer.children[0]);
                if (this._rowFactory.onSelectionChanged(e4, t4, r2), this.renderRows(0, this._bufferService.rows - 1), e4 && t4) {
                  var i2 = e4[1] - this._bufferService.buffer.ydisp, n2 = t4[1] - this._bufferService.buffer.ydisp, o2 = Math.max(i2, 0), s2 = Math.min(n2, this._bufferService.rows - 1);
                  if (!(o2 >= this._bufferService.rows || s2 < 0)) {
                    var a2 = document.createDocumentFragment();
                    if (r2) {
                      var c2 = e4[0] > t4[0];
                      a2.appendChild(this._createSelectionElement(o2, c2 ? t4[0] : e4[0], c2 ? e4[0] : t4[0], s2 - o2 + 1));
                    } else {
                      var l2 = i2 === o2 ? e4[0] : 0, h2 = o2 === n2 ? t4[0] : this._bufferService.cols;
                      a2.appendChild(this._createSelectionElement(o2, l2, h2));
                      var u2 = s2 - o2 - 1;
                      if (a2.appendChild(this._createSelectionElement(o2 + 1, 0, this._bufferService.cols, u2)), o2 !== s2) {
                        var f2 = n2 === s2 ? t4[0] : this._bufferService.cols;
                        a2.appendChild(this._createSelectionElement(s2, 0, f2));
                      }
                    }
                    this._selectionContainer.appendChild(a2);
                  }
                }
              }, t3.prototype._createSelectionElement = function(e4, t4, r2, i2) {
                void 0 === i2 && (i2 = 1);
                var n2 = document.createElement("div");
                return n2.style.height = i2 * this.dimensions.actualCellHeight + "px", n2.style.top = e4 * this.dimensions.actualCellHeight + "px", n2.style.left = t4 * this.dimensions.actualCellWidth + "px", n2.style.width = this.dimensions.actualCellWidth * (r2 - t4) + "px", n2;
              }, t3.prototype.onCursorMove = function() {
              }, t3.prototype.onOptionsChanged = function() {
                this._updateDimensions(), this._injectCss();
              }, t3.prototype.clear = function() {
                var e4, t4;
                try {
                  for (var r2 = a(this._rowElements), i2 = r2.next(); !i2.done; i2 = r2.next())
                    i2.value.innerText = "";
                } catch (t5) {
                  e4 = { error: t5 };
                } finally {
                  try {
                    i2 && !i2.done && (t4 = r2.return) && t4.call(r2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
              }, t3.prototype.renderRows = function(e4, t4) {
                for (var r2 = this._bufferService.buffer.ybase + this._bufferService.buffer.y, i2 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), n2 = this._optionsService.rawOptions.cursorBlink, o2 = e4; o2 <= t4; o2++) {
                  var s2 = this._rowElements[o2];
                  s2.innerText = "";
                  var a2 = o2 + this._bufferService.buffer.ydisp, c2 = this._bufferService.buffer.lines.get(a2), l2 = this._optionsService.rawOptions.cursorStyle;
                  s2.appendChild(this._rowFactory.createRow(c2, a2, a2 === r2, l2, i2, n2, this.dimensions.actualCellWidth, this._bufferService.cols));
                }
              }, Object.defineProperty(t3.prototype, "_terminalSelector", { get: function() {
                return "." + v + this._terminalClass;
              }, enumerable: false, configurable: true }), t3.prototype._onLinkHover = function(e4) {
                this._setCellUnderline(e4.x1, e4.x2, e4.y1, e4.y2, e4.cols, true);
              }, t3.prototype._onLinkLeave = function(e4) {
                this._setCellUnderline(e4.x1, e4.x2, e4.y1, e4.y2, e4.cols, false);
              }, t3.prototype._setCellUnderline = function(e4, t4, r2, i2, n2, o2) {
                for (; e4 !== t4 || r2 !== i2; ) {
                  var s2 = this._rowElements[r2];
                  if (!s2)
                    return;
                  var a2 = s2.children[e4];
                  a2 && (a2.style.textDecoration = o2 ? "underline" : "none"), ++e4 >= n2 && (e4 = 0, r2++);
                }
              }, o([s(6, f.IInstantiationService), s(7, u.ICharSizeService), s(8, f.IOptionsService), s(9, f.IBufferService)], t3);
            }(h.Disposable);
            t2.DomRenderer = S;
          }, 3787: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, o = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DomRendererRowFactory = t2.CURSOR_STYLE_UNDERLINE_CLASS = t2.CURSOR_STYLE_BAR_CLASS = t2.CURSOR_STYLE_BLOCK_CLASS = t2.CURSOR_BLINK_CLASS = t2.CURSOR_CLASS = t2.STRIKETHROUGH_CLASS = t2.UNDERLINE_CLASS = t2.ITALIC_CLASS = t2.DIM_CLASS = t2.BOLD_CLASS = void 0;
            var s = r(8803), a = r(643), c = r(511), l = r(2585), h = r(8055), u = r(4725), f = r(4269), _ = r(1752);
            t2.BOLD_CLASS = "xterm-bold", t2.DIM_CLASS = "xterm-dim", t2.ITALIC_CLASS = "xterm-italic", t2.UNDERLINE_CLASS = "xterm-underline", t2.STRIKETHROUGH_CLASS = "xterm-strikethrough", t2.CURSOR_CLASS = "xterm-cursor", t2.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t2.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t2.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t2.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
            var d = function() {
              function e3(e4, t3, r2, i2, n2, o2) {
                this._document = e4, this._colors = t3, this._characterJoinerService = r2, this._optionsService = i2, this._coreService = n2, this._decorationService = o2, this._workCell = new c.CellData(), this._columnSelectMode = false;
              }
              return e3.prototype.setColors = function(e4) {
                this._colors = e4;
              }, e3.prototype.onSelectionChanged = function(e4, t3, r2) {
                this._selectionStart = e4, this._selectionEnd = t3, this._columnSelectMode = r2;
              }, e3.prototype.createRow = function(e4, r2, i2, n2, c2, l2, u2, _2) {
                for (var d2, v, y = this._document.createDocumentFragment(), g = this._characterJoinerService.getJoinedCharacters(r2), m = 0, b = Math.min(e4.length, _2) - 1; b >= 0; b--)
                  if (e4.loadCell(b, this._workCell).getCode() !== a.NULL_CELL_CODE || i2 && b === c2) {
                    m = b + 1;
                    break;
                  }
                for (b = 0; b < m; b++) {
                  e4.loadCell(b, this._workCell);
                  var S = this._workCell.getWidth();
                  if (0 !== S) {
                    var C = false, w = b, L = this._workCell;
                    if (g.length > 0 && b === g[0][0]) {
                      C = true;
                      var E = g.shift();
                      L = new f.JoinedCellData(this._workCell, e4.translateToString(true, E[0], E[1]), E[1] - E[0]), w = E[1] - 1, S = L.getWidth();
                    }
                    var x = this._document.createElement("span");
                    if (S > 1 && (x.style.width = u2 * S + "px"), C && (x.style.display = "inline", c2 >= b && c2 <= w && (c2 = b)), !this._coreService.isCursorHidden && i2 && b === c2)
                      switch (x.classList.add(t2.CURSOR_CLASS), l2 && x.classList.add(t2.CURSOR_BLINK_CLASS), n2) {
                        case "bar":
                          x.classList.add(t2.CURSOR_STYLE_BAR_CLASS);
                          break;
                        case "underline":
                          x.classList.add(t2.CURSOR_STYLE_UNDERLINE_CLASS);
                          break;
                        default:
                          x.classList.add(t2.CURSOR_STYLE_BLOCK_CLASS);
                      }
                    L.isBold() && x.classList.add(t2.BOLD_CLASS), L.isItalic() && x.classList.add(t2.ITALIC_CLASS), L.isDim() && x.classList.add(t2.DIM_CLASS), L.isUnderline() && x.classList.add(t2.UNDERLINE_CLASS), L.isInvisible() ? x.textContent = a.WHITESPACE_CELL_CHAR : x.textContent = L.getChars() || a.WHITESPACE_CELL_CHAR, L.isStrikethrough() && x.classList.add(t2.STRIKETHROUGH_CLASS);
                    var R = L.getFgColor(), k = L.getFgColorMode(), M = L.getBgColor(), A = L.getBgColorMode(), O = !!L.isInverse();
                    if (O) {
                      var D = R;
                      R = M, M = D;
                      var T = k;
                      k = A, A = T;
                    }
                    var B = void 0, P = void 0, I = false;
                    try {
                      for (var H = (d2 = void 0, o(this._decorationService.getDecorationsAtCell(b, r2))), j = H.next(); !j.done; j = H.next()) {
                        var F = j.value;
                        "top" !== F.options.layer && I || (F.backgroundColorRGB && (A = 50331648, M = F.backgroundColorRGB.rgba >> 8 & 16777215, B = F.backgroundColorRGB), F.foregroundColorRGB && (k = 50331648, R = F.foregroundColorRGB.rgba >> 8 & 16777215, P = F.foregroundColorRGB), I = "top" === F.options.layer);
                      }
                    } catch (e5) {
                      d2 = { error: e5 };
                    } finally {
                      try {
                        j && !j.done && (v = H.return) && v.call(H);
                      } finally {
                        if (d2)
                          throw d2.error;
                      }
                    }
                    var W = this._isCellInSelection(b, r2);
                    I || this._colors.selectionForeground && W && (k = 50331648, R = this._colors.selectionForeground.rgba >> 8 & 16777215, P = this._colors.selectionForeground), W && (B = this._colors.selectionOpaque, I = true), I && x.classList.add("xterm-decoration-top");
                    var U = void 0;
                    switch (A) {
                      case 16777216:
                      case 33554432:
                        U = this._colors.ansi[M], x.classList.add("xterm-bg-" + M);
                        break;
                      case 50331648:
                        U = h.rgba.toColor(M >> 16, M >> 8 & 255, 255 & M), this._addStyle(x, "background-color:#" + p((M >>> 0).toString(16), "0", 6));
                        break;
                      default:
                        O ? (U = this._colors.foreground, x.classList.add("xterm-bg-" + s.INVERTED_DEFAULT_COLOR)) : U = this._colors.background;
                    }
                    switch (k) {
                      case 16777216:
                      case 33554432:
                        L.isBold() && R < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && (R += 8), this._applyMinimumContrast(x, U, this._colors.ansi[R], L, B, void 0) || x.classList.add("xterm-fg-" + R);
                        break;
                      case 50331648:
                        var q = h.rgba.toColor(R >> 16 & 255, R >> 8 & 255, 255 & R);
                        this._applyMinimumContrast(x, U, q, L, B, P) || this._addStyle(x, "color:#" + p(R.toString(16), "0", 6));
                        break;
                      default:
                        this._applyMinimumContrast(x, U, this._colors.foreground, L, B, void 0) || O && x.classList.add("xterm-fg-" + s.INVERTED_DEFAULT_COLOR);
                    }
                    y.appendChild(x), b = w;
                  }
                }
                return y;
              }, e3.prototype._applyMinimumContrast = function(e4, t3, r2, i2, n2, o2) {
                if (1 === this._optionsService.rawOptions.minimumContrastRatio || (0, _.excludeFromContrastRatioDemands)(i2.getCode()))
                  return false;
                var s2 = void 0;
                return n2 || o2 || (s2 = this._colors.contrastCache.getColor(t3.rgba, r2.rgba)), void 0 === s2 && (s2 = h.color.ensureContrastRatio(n2 || t3, o2 || r2, this._optionsService.rawOptions.minimumContrastRatio), this._colors.contrastCache.setColor((n2 || t3).rgba, (o2 || r2).rgba, null != s2 ? s2 : null)), !!s2 && (this._addStyle(e4, "color:" + s2.css), true);
              }, e3.prototype._addStyle = function(e4, t3) {
                e4.setAttribute("style", "" + (e4.getAttribute("style") || "") + t3 + ";");
              }, e3.prototype._isCellInSelection = function(e4, t3) {
                var r2 = this._selectionStart, i2 = this._selectionEnd;
                return !(!r2 || !i2) && (this._columnSelectMode ? r2[0] <= i2[0] ? e4 >= r2[0] && t3 >= r2[1] && e4 < i2[0] && t3 <= i2[1] : e4 < r2[0] && t3 >= r2[1] && e4 >= i2[0] && t3 <= i2[1] : t3 > r2[1] && t3 < i2[1] || r2[1] === i2[1] && t3 === r2[1] && e4 >= r2[0] && e4 < i2[0] || r2[1] < i2[1] && t3 === i2[1] && e4 < i2[0] || r2[1] < i2[1] && t3 === r2[1] && e4 >= r2[0]);
              }, i([n(2, u.ICharacterJoinerService), n(3, l.IOptionsService), n(4, l.ICoreService), n(5, l.IDecorationService)], e3);
            }();
            function p(e3, t3, r2) {
              for (; e3.length < r2; )
                e3 = t3 + e3;
              return e3;
            }
            t2.DomRendererRowFactory = d;
          }, 456: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionModel = void 0;
            var r = function() {
              function e3(e4) {
                this._bufferService = e4, this.isSelectAllActive = false, this.selectionStartLength = 0;
              }
              return e3.prototype.clearSelection = function() {
                this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = false, this.selectionStartLength = 0;
              }, Object.defineProperty(e3.prototype, "finalSelectionStart", { get: function() {
                return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "finalSelectionEnd", { get: function() {
                return this.isSelectAllActive ? [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1] : this.selectionStart ? !this.selectionEnd || this.areSelectionValuesReversed() ? (e4 = this.selectionStart[0] + this.selectionStartLength) > this._bufferService.cols ? e4 % this._bufferService.cols == 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(e4 / this._bufferService.cols) - 1] : [e4 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e4 / this._bufferService.cols)] : [e4, this.selectionStart[1]] : this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? (e4 = this.selectionStart[0] + this.selectionStartLength) > this._bufferService.cols ? [e4 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e4 / this._bufferService.cols)] : [Math.max(e4, this.selectionEnd[0]), this.selectionEnd[1]] : this.selectionEnd : void 0;
                var e4;
              }, enumerable: false, configurable: true }), e3.prototype.areSelectionValuesReversed = function() {
                var e4 = this.selectionStart, t3 = this.selectionEnd;
                return !(!e4 || !t3) && (e4[1] > t3[1] || e4[1] === t3[1] && e4[0] > t3[0]);
              }, e3.prototype.onTrim = function(e4) {
                return this.selectionStart && (this.selectionStart[1] -= e4), this.selectionEnd && (this.selectionEnd[1] -= e4), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), true) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), false);
              }, e3;
            }();
            t2.SelectionModel = r;
          }, 428: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CharSizeService = void 0;
            var o = r(2585), s = r(8460), a = function() {
              function e3(e4, t3, r2) {
                this._optionsService = r2, this.width = 0, this.height = 0, this._onCharSizeChange = new s.EventEmitter(), this._measureStrategy = new c(e4, t3, this._optionsService);
              }
              return Object.defineProperty(e3.prototype, "hasValidSize", { get: function() {
                return this.width > 0 && this.height > 0;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onCharSizeChange", { get: function() {
                return this._onCharSizeChange.event;
              }, enumerable: false, configurable: true }), e3.prototype.measure = function() {
                var e4 = this._measureStrategy.measure();
                e4.width === this.width && e4.height === this.height || (this.width = e4.width, this.height = e4.height, this._onCharSizeChange.fire());
              }, i([n(2, o.IOptionsService)], e3);
            }();
            t2.CharSizeService = a;
            var c = function() {
              function e3(e4, t3, r2) {
                this._document = e4, this._parentElement = t3, this._optionsService = r2, this._result = { width: 0, height: 0 }, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement);
              }
              return e3.prototype.measure = function() {
                this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                var e4 = this._measureElement.getBoundingClientRect();
                return 0 !== e4.width && 0 !== e4.height && (this._result.width = e4.width, this._result.height = Math.ceil(e4.height)), this._result;
              }, e3;
            }();
          }, 4269: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CharacterJoinerService = t2.JoinedCellData = void 0;
            var a = r(3734), c = r(643), l = r(511), h = r(2585), u = function(e3) {
              function t3(t4, r2, i2) {
                var n2 = e3.call(this) || this;
                return n2.content = 0, n2.combinedData = "", n2.fg = t4.fg, n2.bg = t4.bg, n2.combinedData = r2, n2._width = i2, n2;
              }
              return n(t3, e3), t3.prototype.isCombined = function() {
                return 2097152;
              }, t3.prototype.getWidth = function() {
                return this._width;
              }, t3.prototype.getChars = function() {
                return this.combinedData;
              }, t3.prototype.getCode = function() {
                return 2097151;
              }, t3.prototype.setFromCharData = function(e4) {
                throw new Error("not implemented");
              }, t3.prototype.getAsCharData = function() {
                return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
              }, t3;
            }(a.AttributeData);
            t2.JoinedCellData = u;
            var f = function() {
              function e3(e4) {
                this._bufferService = e4, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new l.CellData();
              }
              return e3.prototype.register = function(e4) {
                var t3 = { id: this._nextCharacterJoinerId++, handler: e4 };
                return this._characterJoiners.push(t3), t3.id;
              }, e3.prototype.deregister = function(e4) {
                for (var t3 = 0; t3 < this._characterJoiners.length; t3++)
                  if (this._characterJoiners[t3].id === e4)
                    return this._characterJoiners.splice(t3, 1), true;
                return false;
              }, e3.prototype.getJoinedCharacters = function(e4) {
                if (0 === this._characterJoiners.length)
                  return [];
                var t3 = this._bufferService.buffer.lines.get(e4);
                if (!t3 || 0 === t3.length)
                  return [];
                for (var r2 = [], i2 = t3.translateToString(true), n2 = 0, o2 = 0, s2 = 0, a2 = t3.getFg(0), l2 = t3.getBg(0), h2 = 0; h2 < t3.getTrimmedLength(); h2++)
                  if (t3.loadCell(h2, this._workCell), 0 !== this._workCell.getWidth()) {
                    if (this._workCell.fg !== a2 || this._workCell.bg !== l2) {
                      if (h2 - n2 > 1)
                        for (var u2 = this._getJoinedRanges(i2, s2, o2, t3, n2), f2 = 0; f2 < u2.length; f2++)
                          r2.push(u2[f2]);
                      n2 = h2, s2 = o2, a2 = this._workCell.fg, l2 = this._workCell.bg;
                    }
                    o2 += this._workCell.getChars().length || c.WHITESPACE_CELL_CHAR.length;
                  }
                if (this._bufferService.cols - n2 > 1)
                  for (u2 = this._getJoinedRanges(i2, s2, o2, t3, n2), f2 = 0; f2 < u2.length; f2++)
                    r2.push(u2[f2]);
                return r2;
              }, e3.prototype._getJoinedRanges = function(t3, r2, i2, n2, o2) {
                var s2 = t3.substring(r2, i2), a2 = [];
                try {
                  a2 = this._characterJoiners[0].handler(s2);
                } catch (e4) {
                  console.error(e4);
                }
                for (var c2 = 1; c2 < this._characterJoiners.length; c2++)
                  try {
                    for (var l2 = this._characterJoiners[c2].handler(s2), h2 = 0; h2 < l2.length; h2++)
                      e3._mergeRanges(a2, l2[h2]);
                  } catch (e4) {
                    console.error(e4);
                  }
                return this._stringRangesToCellRanges(a2, n2, o2), a2;
              }, e3.prototype._stringRangesToCellRanges = function(e4, t3, r2) {
                var i2 = 0, n2 = false, o2 = 0, s2 = e4[i2];
                if (s2) {
                  for (var a2 = r2; a2 < this._bufferService.cols; a2++) {
                    var l2 = t3.getWidth(a2), h2 = t3.getString(a2).length || c.WHITESPACE_CELL_CHAR.length;
                    if (0 !== l2) {
                      if (!n2 && s2[0] <= o2 && (s2[0] = a2, n2 = true), s2[1] <= o2) {
                        if (s2[1] = a2, !(s2 = e4[++i2]))
                          break;
                        s2[0] <= o2 ? (s2[0] = a2, n2 = true) : n2 = false;
                      }
                      o2 += h2;
                    }
                  }
                  s2 && (s2[1] = this._bufferService.cols);
                }
              }, e3._mergeRanges = function(e4, t3) {
                for (var r2 = false, i2 = 0; i2 < e4.length; i2++) {
                  var n2 = e4[i2];
                  if (r2) {
                    if (t3[1] <= n2[0])
                      return e4[i2 - 1][1] = t3[1], e4;
                    if (t3[1] <= n2[1])
                      return e4[i2 - 1][1] = Math.max(t3[1], n2[1]), e4.splice(i2, 1), e4;
                    e4.splice(i2, 1), i2--;
                  } else {
                    if (t3[1] <= n2[0])
                      return e4.splice(i2, 0, t3), e4;
                    if (t3[1] <= n2[1])
                      return n2[0] = Math.min(t3[0], n2[0]), e4;
                    t3[0] < n2[1] && (n2[0] = Math.min(t3[0], n2[0]), r2 = true);
                  }
                }
                return r2 ? e4[e4.length - 1][1] = t3[1] : e4.push(t3), e4;
              }, e3 = o([s(0, h.IBufferService)], e3);
            }();
            t2.CharacterJoinerService = f;
          }, 5114: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreBrowserService = void 0;
            var r = function() {
              function e3(e4) {
                this._textarea = e4;
              }
              return Object.defineProperty(e3.prototype, "isFocused", { get: function() {
                return (this._textarea.getRootNode ? this._textarea.getRootNode() : document).activeElement === this._textarea && document.hasFocus();
              }, enumerable: false, configurable: true }), e3;
            }();
            t2.CoreBrowserService = r;
          }, 8934: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.MouseService = void 0;
            var o = r(4725), s = r(9806), a = function() {
              function e3(e4, t3) {
                this._renderService = e4, this._charSizeService = t3;
              }
              return e3.prototype.getCoords = function(e4, t3, r2, i2, n2) {
                return (0, s.getCoords)(window, e4, t3, r2, i2, this._charSizeService.hasValidSize, this._renderService.dimensions.actualCellWidth, this._renderService.dimensions.actualCellHeight, n2);
              }, e3.prototype.getRawByteCoords = function(e4, t3, r2, i2) {
                var n2 = this.getCoords(e4, t3, r2, i2);
                return (0, s.getRawByteCoords)(n2);
              }, i([n(0, o.IRenderService), n(1, o.ICharSizeService)], e3);
            }();
            t2.MouseService = a;
          }, 3230: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderService = void 0;
            var a = r(6193), c = r(8460), l = r(844), h = r(5596), u = r(3656), f = r(2585), _ = r(4725), d = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, l2) {
                var f2 = e3.call(this) || this;
                if (f2._renderer = t4, f2._rowCount = r2, f2._charSizeService = o2, f2._isPaused = false, f2._needsFullRefresh = false, f2._isNextRenderRedrawOnly = true, f2._needsSelectionRefresh = false, f2._canvasWidth = 0, f2._canvasHeight = 0, f2._selectionState = { start: void 0, end: void 0, columnSelectMode: false }, f2._onDimensionsChange = new c.EventEmitter(), f2._onRenderedViewportChange = new c.EventEmitter(), f2._onRender = new c.EventEmitter(), f2._onRefreshRequest = new c.EventEmitter(), f2.register({ dispose: function() {
                  return f2._renderer.dispose();
                } }), f2._renderDebouncer = new a.RenderDebouncer(function(e4, t5) {
                  return f2._renderRows(e4, t5);
                }), f2.register(f2._renderDebouncer), f2._screenDprMonitor = new h.ScreenDprMonitor(), f2._screenDprMonitor.setListener(function() {
                  return f2.onDevicePixelRatioChange();
                }), f2.register(f2._screenDprMonitor), f2.register(l2.onResize(function() {
                  return f2._fullRefresh();
                })), f2.register(l2.buffers.onBufferActivate(function() {
                  var e4;
                  return null === (e4 = f2._renderer) || void 0 === e4 ? void 0 : e4.clear();
                })), f2.register(n2.onOptionChange(function() {
                  return f2._handleOptionsChanged();
                })), f2.register(f2._charSizeService.onCharSizeChange(function() {
                  return f2.onCharSizeChanged();
                })), f2.register(s2.onDecorationRegistered(function() {
                  return f2._fullRefresh();
                })), f2.register(s2.onDecorationRemoved(function() {
                  return f2._fullRefresh();
                })), f2._renderer.onRequestRedraw(function(e4) {
                  return f2.refreshRows(e4.start, e4.end, true);
                }), f2.register((0, u.addDisposableDomListener)(window, "resize", function() {
                  return f2.onDevicePixelRatioChange();
                })), "IntersectionObserver" in window) {
                  var _2 = new IntersectionObserver(function(e4) {
                    return f2._onIntersectionChange(e4[e4.length - 1]);
                  }, { threshold: 0 });
                  _2.observe(i2), f2.register({ dispose: function() {
                    return _2.disconnect();
                  } });
                }
                return f2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onDimensionsChange", { get: function() {
                return this._onDimensionsChange.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRenderedViewportChange", { get: function() {
                return this._onRenderedViewportChange.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRender", { get: function() {
                return this._onRender.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRefreshRequest", { get: function() {
                return this._onRefreshRequest.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "dimensions", { get: function() {
                return this._renderer.dimensions;
              }, enumerable: false, configurable: true }), t3.prototype._onIntersectionChange = function(e4) {
                this._isPaused = void 0 === e4.isIntersecting ? 0 === e4.intersectionRatio : !e4.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = false);
              }, t3.prototype.refreshRows = function(e4, t4, r2) {
                void 0 === r2 && (r2 = false), this._isPaused ? this._needsFullRefresh = true : (r2 || (this._isNextRenderRedrawOnly = false), this._renderDebouncer.refresh(e4, t4, this._rowCount));
              }, t3.prototype._renderRows = function(e4, t4) {
                this._renderer.renderRows(e4, t4), this._needsSelectionRefresh && (this._renderer.onSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = false), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({ start: e4, end: t4 }), this._onRender.fire({ start: e4, end: t4 }), this._isNextRenderRedrawOnly = true;
              }, t3.prototype.resize = function(e4, t4) {
                this._rowCount = t4, this._fireOnCanvasResize();
              }, t3.prototype._handleOptionsChanged = function() {
                this._renderer.onOptionsChanged(), this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize();
              }, t3.prototype._fireOnCanvasResize = function() {
                this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions);
              }, t3.prototype.dispose = function() {
                e3.prototype.dispose.call(this);
              }, t3.prototype.setRenderer = function(e4) {
                var t4 = this;
                this._renderer.dispose(), this._renderer = e4, this._renderer.onRequestRedraw(function(e5) {
                  return t4.refreshRows(e5.start, e5.end, true);
                }), this._needsSelectionRefresh = true, this._fullRefresh();
              }, t3.prototype.addRefreshCallback = function(e4) {
                return this._renderDebouncer.addRefreshCallback(e4);
              }, t3.prototype._fullRefresh = function() {
                this._isPaused ? this._needsFullRefresh = true : this.refreshRows(0, this._rowCount - 1);
              }, t3.prototype.clearTextureAtlas = function() {
                var e4, t4;
                null === (t4 = null === (e4 = this._renderer) || void 0 === e4 ? void 0 : e4.clearTextureAtlas) || void 0 === t4 || t4.call(e4), this._fullRefresh();
              }, t3.prototype.setColors = function(e4) {
                this._renderer.setColors(e4), this._fullRefresh();
              }, t3.prototype.onDevicePixelRatioChange = function() {
                this._charSizeService.measure(), this._renderer.onDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1);
              }, t3.prototype.onResize = function(e4, t4) {
                this._renderer.onResize(e4, t4), this._fullRefresh();
              }, t3.prototype.onCharSizeChanged = function() {
                this._renderer.onCharSizeChanged();
              }, t3.prototype.onBlur = function() {
                this._renderer.onBlur();
              }, t3.prototype.onFocus = function() {
                this._renderer.onFocus();
              }, t3.prototype.onSelectionChanged = function(e4, t4, r2) {
                this._selectionState.start = e4, this._selectionState.end = t4, this._selectionState.columnSelectMode = r2, this._renderer.onSelectionChanged(e4, t4, r2);
              }, t3.prototype.onCursorMove = function() {
                this._renderer.onCursorMove();
              }, t3.prototype.clear = function() {
                this._renderer.clear();
              }, o([s(3, f.IOptionsService), s(4, _.ICharSizeService), s(5, f.IDecorationService), s(6, f.IBufferService)], t3);
            }(l.Disposable);
            t2.RenderService = d;
          }, 9312: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionService = void 0;
            var a = r(6114), c = r(456), l = r(511), h = r(8460), u = r(4725), f = r(2585), _ = r(9806), d = r(9504), p = r(844), v = r(4841), y = String.fromCharCode(160), g = new RegExp(y, "g"), m = function(e3) {
              function t3(t4, r2, i2, n2, o2, s2, a2, u2) {
                var f2 = e3.call(this) || this;
                return f2._element = t4, f2._screenElement = r2, f2._linkifier = i2, f2._bufferService = n2, f2._coreService = o2, f2._mouseService = s2, f2._optionsService = a2, f2._renderService = u2, f2._dragScrollAmount = 0, f2._enabled = true, f2._workCell = new l.CellData(), f2._mouseDownTimeStamp = 0, f2._oldHasSelection = false, f2._oldSelectionStart = void 0, f2._oldSelectionEnd = void 0, f2._onLinuxMouseSelection = f2.register(new h.EventEmitter()), f2._onRedrawRequest = f2.register(new h.EventEmitter()), f2._onSelectionChange = f2.register(new h.EventEmitter()), f2._onRequestScrollLines = f2.register(new h.EventEmitter()), f2._mouseMoveListener = function(e4) {
                  return f2._onMouseMove(e4);
                }, f2._mouseUpListener = function(e4) {
                  return f2._onMouseUp(e4);
                }, f2._coreService.onUserInput(function() {
                  f2.hasSelection && f2.clearSelection();
                }), f2._trimListener = f2._bufferService.buffer.lines.onTrim(function(e4) {
                  return f2._onTrim(e4);
                }), f2.register(f2._bufferService.buffers.onBufferActivate(function(e4) {
                  return f2._onBufferActivate(e4);
                })), f2.enable(), f2._model = new c.SelectionModel(f2._bufferService), f2._activeSelectionMode = 0, f2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onLinuxMouseSelection", { get: function() {
                return this._onLinuxMouseSelection.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRequestRedraw", { get: function() {
                return this._onRedrawRequest.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onSelectionChange", { get: function() {
                return this._onSelectionChange.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRequestScrollLines", { get: function() {
                return this._onRequestScrollLines.event;
              }, enumerable: false, configurable: true }), t3.prototype.dispose = function() {
                this._removeMouseDownListeners();
              }, t3.prototype.reset = function() {
                this.clearSelection();
              }, t3.prototype.disable = function() {
                this.clearSelection(), this._enabled = false;
              }, t3.prototype.enable = function() {
                this._enabled = true;
              }, Object.defineProperty(t3.prototype, "selectionStart", { get: function() {
                return this._model.finalSelectionStart;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "selectionEnd", { get: function() {
                return this._model.finalSelectionEnd;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "hasSelection", { get: function() {
                var e4 = this._model.finalSelectionStart, t4 = this._model.finalSelectionEnd;
                return !(!e4 || !t4 || e4[0] === t4[0] && e4[1] === t4[1]);
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "selectionText", { get: function() {
                var e4 = this._model.finalSelectionStart, t4 = this._model.finalSelectionEnd;
                if (!e4 || !t4)
                  return "";
                var r2 = this._bufferService.buffer, i2 = [];
                if (3 === this._activeSelectionMode) {
                  if (e4[0] === t4[0])
                    return "";
                  for (var n2 = e4[0] < t4[0] ? e4[0] : t4[0], o2 = e4[0] < t4[0] ? t4[0] : e4[0], s2 = e4[1]; s2 <= t4[1]; s2++) {
                    var c2 = r2.translateBufferLineToString(s2, true, n2, o2);
                    i2.push(c2);
                  }
                } else {
                  var l2 = e4[1] === t4[1] ? t4[0] : void 0;
                  for (i2.push(r2.translateBufferLineToString(e4[1], true, e4[0], l2)), s2 = e4[1] + 1; s2 <= t4[1] - 1; s2++) {
                    var h2 = r2.lines.get(s2);
                    c2 = r2.translateBufferLineToString(s2, true), (null == h2 ? void 0 : h2.isWrapped) ? i2[i2.length - 1] += c2 : i2.push(c2);
                  }
                  e4[1] !== t4[1] && (h2 = r2.lines.get(t4[1]), c2 = r2.translateBufferLineToString(t4[1], true, 0, t4[0]), h2 && h2.isWrapped ? i2[i2.length - 1] += c2 : i2.push(c2));
                }
                return i2.map(function(e5) {
                  return e5.replace(g, " ");
                }).join(a.isWindows ? "\r\n" : "\n");
              }, enumerable: false, configurable: true }), t3.prototype.clearSelection = function() {
                this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
              }, t3.prototype.refresh = function(e4) {
                var t4 = this;
                this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame(function() {
                  return t4._refresh();
                })), a.isLinux && e4 && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
              }, t3.prototype._refresh = function() {
                this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({ start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: 3 === this._activeSelectionMode });
              }, t3.prototype._isClickInSelection = function(e4) {
                var t4 = this._getMouseBufferCoords(e4), r2 = this._model.finalSelectionStart, i2 = this._model.finalSelectionEnd;
                return !!(r2 && i2 && t4) && this._areCoordsInSelection(t4, r2, i2);
              }, t3.prototype.isCellInSelection = function(e4, t4) {
                var r2 = this._model.finalSelectionStart, i2 = this._model.finalSelectionEnd;
                return !(!r2 || !i2) && this._areCoordsInSelection([e4, t4], r2, i2);
              }, t3.prototype._areCoordsInSelection = function(e4, t4, r2) {
                return e4[1] > t4[1] && e4[1] < r2[1] || t4[1] === r2[1] && e4[1] === t4[1] && e4[0] >= t4[0] && e4[0] < r2[0] || t4[1] < r2[1] && e4[1] === r2[1] && e4[0] < r2[0] || t4[1] < r2[1] && e4[1] === t4[1] && e4[0] >= t4[0];
              }, t3.prototype._selectWordAtCursor = function(e4, t4) {
                var r2, i2, n2 = null === (i2 = null === (r2 = this._linkifier.currentLink) || void 0 === r2 ? void 0 : r2.link) || void 0 === i2 ? void 0 : i2.range;
                if (n2)
                  return this._model.selectionStart = [n2.start.x - 1, n2.start.y - 1], this._model.selectionStartLength = (0, v.getRangeLength)(n2, this._bufferService.cols), this._model.selectionEnd = void 0, true;
                var o2 = this._getMouseBufferCoords(e4);
                return !!o2 && (this._selectWordAt(o2, t4), this._model.selectionEnd = void 0, true);
              }, t3.prototype.selectAll = function() {
                this._model.isSelectAllActive = true, this.refresh(), this._onSelectionChange.fire();
              }, t3.prototype.selectLines = function(e4, t4) {
                this._model.clearSelection(), e4 = Math.max(e4, 0), t4 = Math.min(t4, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e4], this._model.selectionEnd = [this._bufferService.cols, t4], this.refresh(), this._onSelectionChange.fire();
              }, t3.prototype._onTrim = function(e4) {
                this._model.onTrim(e4) && this.refresh();
              }, t3.prototype._getMouseBufferCoords = function(e4) {
                var t4 = this._mouseService.getCoords(e4, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
                if (t4)
                  return t4[0]--, t4[1]--, t4[1] += this._bufferService.buffer.ydisp, t4;
              }, t3.prototype._getMouseEventScrollAmount = function(e4) {
                var t4 = (0, _.getCoordsRelativeToElement)(window, e4, this._screenElement)[1], r2 = this._renderService.dimensions.canvasHeight;
                return t4 >= 0 && t4 <= r2 ? 0 : (t4 > r2 && (t4 -= r2), t4 = Math.min(Math.max(t4, -50), 50), (t4 /= 50) / Math.abs(t4) + Math.round(14 * t4));
              }, t3.prototype.shouldForceSelection = function(e4) {
                return a.isMac ? e4.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e4.shiftKey;
              }, t3.prototype.onMouseDown = function(e4) {
                if (this._mouseDownTimeStamp = e4.timeStamp, (2 !== e4.button || !this.hasSelection) && 0 === e4.button) {
                  if (!this._enabled) {
                    if (!this.shouldForceSelection(e4))
                      return;
                    e4.stopPropagation();
                  }
                  e4.preventDefault(), this._dragScrollAmount = 0, this._enabled && e4.shiftKey ? this._onIncrementalClick(e4) : 1 === e4.detail ? this._onSingleClick(e4) : 2 === e4.detail ? this._onDoubleClick(e4) : 3 === e4.detail && this._onTripleClick(e4), this._addMouseDownListeners(), this.refresh(true);
                }
              }, t3.prototype._addMouseDownListeners = function() {
                var e4 = this;
                this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = window.setInterval(function() {
                  return e4._dragScroll();
                }, 50);
              }, t3.prototype._removeMouseDownListeners = function() {
                this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
              }, t3.prototype._onIncrementalClick = function(e4) {
                this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e4));
              }, t3.prototype._onSingleClick = function(e4) {
                if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = false, this._activeSelectionMode = this.shouldColumnSelect(e4) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e4), this._model.selectionStart) {
                  this._model.selectionEnd = void 0;
                  var t4 = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
                  t4 && t4.length !== this._model.selectionStart[0] && 0 === t4.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++;
                }
              }, t3.prototype._onDoubleClick = function(e4) {
                this._selectWordAtCursor(e4, true) && (this._activeSelectionMode = 1);
              }, t3.prototype._onTripleClick = function(e4) {
                var t4 = this._getMouseBufferCoords(e4);
                t4 && (this._activeSelectionMode = 2, this._selectLineAt(t4[1]));
              }, t3.prototype.shouldColumnSelect = function(e4) {
                return e4.altKey && !(a.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
              }, t3.prototype._onMouseMove = function(e4) {
                if (e4.stopImmediatePropagation(), this._model.selectionStart) {
                  var t4 = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
                  if (this._model.selectionEnd = this._getMouseBufferCoords(e4), this._model.selectionEnd) {
                    2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e4), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
                    var r2 = this._bufferService.buffer;
                    if (this._model.selectionEnd[1] < r2.lines.length) {
                      var i2 = r2.lines.get(this._model.selectionEnd[1]);
                      i2 && 0 === i2.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++;
                    }
                    t4 && t4[0] === this._model.selectionEnd[0] && t4[1] === this._model.selectionEnd[1] || this.refresh(true);
                  } else
                    this.refresh(true);
                }
              }, t3.prototype._dragScroll = function() {
                if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                  this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: false });
                  var e4 = this._bufferService.buffer;
                  this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e4.ydisp + this._bufferService.rows, e4.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e4.ydisp), this.refresh();
                }
              }, t3.prototype._onMouseUp = function(e4) {
                var t4 = e4.timeStamp - this._mouseDownTimeStamp;
                if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t4 < 500 && e4.altKey && this._optionsService.getOption("altClickMovesCursor")) {
                  if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                    var r2 = this._mouseService.getCoords(e4, this._element, this._bufferService.cols, this._bufferService.rows, false);
                    if (r2 && void 0 !== r2[0] && void 0 !== r2[1]) {
                      var i2 = (0, d.moveToCellSequence)(r2[0] - 1, r2[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                      this._coreService.triggerDataEvent(i2, true);
                    }
                  }
                } else
                  this._fireEventIfSelectionChanged();
              }, t3.prototype._fireEventIfSelectionChanged = function() {
                var e4 = this._model.finalSelectionStart, t4 = this._model.finalSelectionEnd, r2 = !(!e4 || !t4 || e4[0] === t4[0] && e4[1] === t4[1]);
                r2 ? e4 && t4 && (this._oldSelectionStart && this._oldSelectionEnd && e4[0] === this._oldSelectionStart[0] && e4[1] === this._oldSelectionStart[1] && t4[0] === this._oldSelectionEnd[0] && t4[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e4, t4, r2)) : this._oldHasSelection && this._fireOnSelectionChange(e4, t4, r2);
              }, t3.prototype._fireOnSelectionChange = function(e4, t4, r2) {
                this._oldSelectionStart = e4, this._oldSelectionEnd = t4, this._oldHasSelection = r2, this._onSelectionChange.fire();
              }, t3.prototype._onBufferActivate = function(e4) {
                var t4 = this;
                this.clearSelection(), this._trimListener.dispose(), this._trimListener = e4.activeBuffer.lines.onTrim(function(e5) {
                  return t4._onTrim(e5);
                });
              }, t3.prototype._convertViewportColToCharacterIndex = function(e4, t4) {
                for (var r2 = t4[0], i2 = 0; t4[0] >= i2; i2++) {
                  var n2 = e4.loadCell(i2, this._workCell).getChars().length;
                  0 === this._workCell.getWidth() ? r2-- : n2 > 1 && t4[0] !== i2 && (r2 += n2 - 1);
                }
                return r2;
              }, t3.prototype.setSelection = function(e4, t4, r2) {
                this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e4, t4], this._model.selectionStartLength = r2, this.refresh(), this._fireEventIfSelectionChanged();
              }, t3.prototype.rightClickSelect = function(e4) {
                this._isClickInSelection(e4) || (this._selectWordAtCursor(e4, false) && this.refresh(true), this._fireEventIfSelectionChanged());
              }, t3.prototype._getWordAt = function(e4, t4, r2, i2) {
                if (void 0 === r2 && (r2 = true), void 0 === i2 && (i2 = true), !(e4[0] >= this._bufferService.cols)) {
                  var n2 = this._bufferService.buffer, o2 = n2.lines.get(e4[1]);
                  if (o2) {
                    var s2 = n2.translateBufferLineToString(e4[1], false), a2 = this._convertViewportColToCharacterIndex(o2, e4), c2 = a2, l2 = e4[0] - a2, h2 = 0, u2 = 0, f2 = 0, _2 = 0;
                    if (" " === s2.charAt(a2)) {
                      for (; a2 > 0 && " " === s2.charAt(a2 - 1); )
                        a2--;
                      for (; c2 < s2.length && " " === s2.charAt(c2 + 1); )
                        c2++;
                    } else {
                      var d2 = e4[0], p2 = e4[0];
                      0 === o2.getWidth(d2) && (h2++, d2--), 2 === o2.getWidth(p2) && (u2++, p2++);
                      var v2 = o2.getString(p2).length;
                      for (v2 > 1 && (_2 += v2 - 1, c2 += v2 - 1); d2 > 0 && a2 > 0 && !this._isCharWordSeparator(o2.loadCell(d2 - 1, this._workCell)); ) {
                        o2.loadCell(d2 - 1, this._workCell);
                        var y2 = this._workCell.getChars().length;
                        0 === this._workCell.getWidth() ? (h2++, d2--) : y2 > 1 && (f2 += y2 - 1, a2 -= y2 - 1), a2--, d2--;
                      }
                      for (; p2 < o2.length && c2 + 1 < s2.length && !this._isCharWordSeparator(o2.loadCell(p2 + 1, this._workCell)); ) {
                        o2.loadCell(p2 + 1, this._workCell);
                        var g2 = this._workCell.getChars().length;
                        2 === this._workCell.getWidth() ? (u2++, p2++) : g2 > 1 && (_2 += g2 - 1, c2 += g2 - 1), c2++, p2++;
                      }
                    }
                    c2++;
                    var m2 = a2 + l2 - h2 + f2, b = Math.min(this._bufferService.cols, c2 - a2 + h2 + u2 - f2 - _2);
                    if (t4 || "" !== s2.slice(a2, c2).trim()) {
                      if (r2 && 0 === m2 && 32 !== o2.getCodePoint(0)) {
                        var S = n2.lines.get(e4[1] - 1);
                        if (S && o2.isWrapped && 32 !== S.getCodePoint(this._bufferService.cols - 1)) {
                          var C = this._getWordAt([this._bufferService.cols - 1, e4[1] - 1], false, true, false);
                          if (C) {
                            var w = this._bufferService.cols - C.start;
                            m2 -= w, b += w;
                          }
                        }
                      }
                      if (i2 && m2 + b === this._bufferService.cols && 32 !== o2.getCodePoint(this._bufferService.cols - 1)) {
                        var L = n2.lines.get(e4[1] + 1);
                        if ((null == L ? void 0 : L.isWrapped) && 32 !== L.getCodePoint(0)) {
                          var E = this._getWordAt([0, e4[1] + 1], false, false, true);
                          E && (b += E.length);
                        }
                      }
                      return { start: m2, length: b };
                    }
                  }
                }
              }, t3.prototype._selectWordAt = function(e4, t4) {
                var r2 = this._getWordAt(e4, t4);
                if (r2) {
                  for (; r2.start < 0; )
                    r2.start += this._bufferService.cols, e4[1]--;
                  this._model.selectionStart = [r2.start, e4[1]], this._model.selectionStartLength = r2.length;
                }
              }, t3.prototype._selectToWordAt = function(e4) {
                var t4 = this._getWordAt(e4, true);
                if (t4) {
                  for (var r2 = e4[1]; t4.start < 0; )
                    t4.start += this._bufferService.cols, r2--;
                  if (!this._model.areSelectionValuesReversed())
                    for (; t4.start + t4.length > this._bufferService.cols; )
                      t4.length -= this._bufferService.cols, r2++;
                  this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t4.start : t4.start + t4.length, r2];
                }
              }, t3.prototype._isCharWordSeparator = function(e4) {
                return 0 !== e4.getWidth() && this._optionsService.rawOptions.wordSeparator.indexOf(e4.getChars()) >= 0;
              }, t3.prototype._selectLineAt = function(e4) {
                var t4 = this._bufferService.buffer.getWrappedRangeForLine(e4), r2 = { start: { x: 0, y: t4.first }, end: { x: this._bufferService.cols - 1, y: t4.last } };
                this._model.selectionStart = [0, t4.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = (0, v.getRangeLength)(r2, this._bufferService.cols);
              }, o([s(3, f.IBufferService), s(4, f.ICoreService), s(5, u.IMouseService), s(6, f.IOptionsService), s(7, u.IRenderService)], t3);
            }(p.Disposable);
            t2.SelectionService = m;
          }, 4725: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ICharacterJoinerService = t2.ISoundService = t2.ISelectionService = t2.IRenderService = t2.IMouseService = t2.ICoreBrowserService = t2.ICharSizeService = void 0;
            var i = r(8343);
            t2.ICharSizeService = (0, i.createDecorator)("CharSizeService"), t2.ICoreBrowserService = (0, i.createDecorator)("CoreBrowserService"), t2.IMouseService = (0, i.createDecorator)("MouseService"), t2.IRenderService = (0, i.createDecorator)("RenderService"), t2.ISelectionService = (0, i.createDecorator)("SelectionService"), t2.ISoundService = (0, i.createDecorator)("SoundService"), t2.ICharacterJoinerService = (0, i.createDecorator)("CharacterJoinerService");
          }, 357: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a = e3.length - 1; a >= 0; a--)
                  (n2 = e3[a]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.SoundService = void 0;
            var o = r(2585), s = function() {
              function e3(e4) {
                this._optionsService = e4;
              }
              return Object.defineProperty(e3, "audioContext", { get: function() {
                if (!e3._audioContext) {
                  var t3 = window.AudioContext || window.webkitAudioContext;
                  if (!t3)
                    return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"), null;
                  e3._audioContext = new t3();
                }
                return e3._audioContext;
              }, enumerable: false, configurable: true }), e3.prototype.playBellSound = function() {
                var t3 = e3.audioContext;
                if (t3) {
                  var r2 = t3.createBufferSource();
                  t3.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.rawOptions.bellSound)), function(e4) {
                    r2.buffer = e4, r2.connect(t3.destination), r2.start(0);
                  });
                }
              }, e3.prototype._base64ToArrayBuffer = function(e4) {
                for (var t3 = window.atob(e4), r2 = t3.length, i2 = new Uint8Array(r2), n2 = 0; n2 < r2; n2++)
                  i2[n2] = t3.charCodeAt(n2);
                return i2.buffer;
              }, e3.prototype._removeMimeType = function(e4) {
                return e4.split(",")[1];
              }, e3 = i([n(0, o.IOptionsService)], e3);
            }();
            t2.SoundService = s;
          }, 6349: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CircularList = void 0;
            var i = r(8460), n = function() {
              function e3(e4) {
                this._maxLength = e4, this.onDeleteEmitter = new i.EventEmitter(), this.onInsertEmitter = new i.EventEmitter(), this.onTrimEmitter = new i.EventEmitter(), this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
              }
              return Object.defineProperty(e3.prototype, "onDelete", { get: function() {
                return this.onDeleteEmitter.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onInsert", { get: function() {
                return this.onInsertEmitter.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "onTrim", { get: function() {
                return this.onTrimEmitter.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "maxLength", { get: function() {
                return this._maxLength;
              }, set: function(e4) {
                if (this._maxLength !== e4) {
                  for (var t3 = new Array(e4), r2 = 0; r2 < Math.min(e4, this.length); r2++)
                    t3[r2] = this._array[this._getCyclicIndex(r2)];
                  this._array = t3, this._maxLength = e4, this._startIndex = 0;
                }
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "length", { get: function() {
                return this._length;
              }, set: function(e4) {
                if (e4 > this._length)
                  for (var t3 = this._length; t3 < e4; t3++)
                    this._array[t3] = void 0;
                this._length = e4;
              }, enumerable: false, configurable: true }), e3.prototype.get = function(e4) {
                return this._array[this._getCyclicIndex(e4)];
              }, e3.prototype.set = function(e4, t3) {
                this._array[this._getCyclicIndex(e4)] = t3;
              }, e3.prototype.push = function(e4) {
                this._array[this._getCyclicIndex(this._length)] = e4, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
              }, e3.prototype.recycle = function() {
                if (this._length !== this._maxLength)
                  throw new Error("Can only recycle when the buffer is full");
                return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
              }, Object.defineProperty(e3.prototype, "isFull", { get: function() {
                return this._length === this._maxLength;
              }, enumerable: false, configurable: true }), e3.prototype.pop = function() {
                return this._array[this._getCyclicIndex(this._length-- - 1)];
              }, e3.prototype.splice = function(e4, t3) {
                for (var r2 = [], i2 = 2; i2 < arguments.length; i2++)
                  r2[i2 - 2] = arguments[i2];
                if (t3) {
                  for (var n2 = e4; n2 < this._length - t3; n2++)
                    this._array[this._getCyclicIndex(n2)] = this._array[this._getCyclicIndex(n2 + t3)];
                  this._length -= t3, this.onDeleteEmitter.fire({ index: e4, amount: t3 });
                }
                for (n2 = this._length - 1; n2 >= e4; n2--)
                  this._array[this._getCyclicIndex(n2 + r2.length)] = this._array[this._getCyclicIndex(n2)];
                for (n2 = 0; n2 < r2.length; n2++)
                  this._array[this._getCyclicIndex(e4 + n2)] = r2[n2];
                if (r2.length && this.onInsertEmitter.fire({ index: e4, amount: r2.length }), this._length + r2.length > this._maxLength) {
                  var o = this._length + r2.length - this._maxLength;
                  this._startIndex += o, this._length = this._maxLength, this.onTrimEmitter.fire(o);
                } else
                  this._length += r2.length;
              }, e3.prototype.trimStart = function(e4) {
                e4 > this._length && (e4 = this._length), this._startIndex += e4, this._length -= e4, this.onTrimEmitter.fire(e4);
              }, e3.prototype.shiftElements = function(e4, t3, r2) {
                if (!(t3 <= 0)) {
                  if (e4 < 0 || e4 >= this._length)
                    throw new Error("start argument out of range");
                  if (e4 + r2 < 0)
                    throw new Error("Cannot shift elements in list beyond index 0");
                  if (r2 > 0) {
                    for (var i2 = t3 - 1; i2 >= 0; i2--)
                      this.set(e4 + i2 + r2, this.get(e4 + i2));
                    var n2 = e4 + t3 + r2 - this._length;
                    if (n2 > 0)
                      for (this._length += n2; this._length > this._maxLength; )
                        this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
                  } else
                    for (i2 = 0; i2 < t3; i2++)
                      this.set(e4 + i2 + r2, this.get(e4 + i2));
                }
              }, e3.prototype._getCyclicIndex = function(e4) {
                return (this._startIndex + e4) % this._maxLength;
              }, e3;
            }();
            t2.CircularList = n;
          }, 1439: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.clone = void 0, t2.clone = function e3(t3, r) {
              if (void 0 === r && (r = 5), "object" != typeof t3)
                return t3;
              var i = Array.isArray(t3) ? [] : {};
              for (var n in t3)
                i[n] = r <= 1 ? t3[n] : t3[n] && e3(t3[n], r - 1);
              return i;
            };
          }, 8055: function(e2, t2) {
            var r, i, n, o, s = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s2 = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s2.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s2;
            };
            function a(e3) {
              var t3 = e3.toString(16);
              return t3.length < 2 ? "0" + t3 : t3;
            }
            function c(e3, t3) {
              return e3 < t3 ? (t3 + 0.05) / (e3 + 0.05) : (e3 + 0.05) / (t3 + 0.05);
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.contrastRatio = t2.toPaddedHex = t2.rgba = t2.rgb = t2.css = t2.color = t2.channels = void 0, function(e3) {
              e3.toCss = function(e4, t3, r2, i2) {
                return void 0 !== i2 ? "#" + a(e4) + a(t3) + a(r2) + a(i2) : "#" + a(e4) + a(t3) + a(r2);
              }, e3.toRgba = function(e4, t3, r2, i2) {
                return void 0 === i2 && (i2 = 255), (e4 << 24 | t3 << 16 | r2 << 8 | i2) >>> 0;
              };
            }(r = t2.channels || (t2.channels = {})), (i = t2.color || (t2.color = {})).blend = function(e3, t3) {
              var i2 = (255 & t3.rgba) / 255;
              if (1 === i2)
                return { css: t3.css, rgba: t3.rgba };
              var n2 = t3.rgba >> 24 & 255, o2 = t3.rgba >> 16 & 255, s2 = t3.rgba >> 8 & 255, a2 = e3.rgba >> 24 & 255, c2 = e3.rgba >> 16 & 255, l = e3.rgba >> 8 & 255, h = a2 + Math.round((n2 - a2) * i2), u = c2 + Math.round((o2 - c2) * i2), f = l + Math.round((s2 - l) * i2);
              return { css: r.toCss(h, u, f), rgba: r.toRgba(h, u, f) };
            }, i.isOpaque = function(e3) {
              return 255 == (255 & e3.rgba);
            }, i.ensureContrastRatio = function(e3, t3, r2) {
              var i2 = o.ensureContrastRatio(e3.rgba, t3.rgba, r2);
              if (i2)
                return o.toColor(i2 >> 24 & 255, i2 >> 16 & 255, i2 >> 8 & 255);
            }, i.opaque = function(e3) {
              var t3 = (255 | e3.rgba) >>> 0, i2 = s(o.toChannels(t3), 3), n2 = i2[0], a2 = i2[1], c2 = i2[2];
              return { css: r.toCss(n2, a2, c2), rgba: t3 };
            }, i.opacity = function(e3, t3) {
              var i2 = Math.round(255 * t3), n2 = s(o.toChannels(e3.rgba), 3), a2 = n2[0], c2 = n2[1], l = n2[2];
              return { css: r.toCss(a2, c2, l, i2), rgba: r.toRgba(a2, c2, l, i2) };
            }, i.toColorRGB = function(e3) {
              return [e3.rgba >> 24 & 255, e3.rgba >> 16 & 255, e3.rgba >> 8 & 255];
            }, (t2.css || (t2.css = {})).toColor = function(e3) {
              if (e3.match(/#[0-9a-f]{3,8}/i))
                switch (e3.length) {
                  case 4:
                    var t3 = parseInt(e3.slice(1, 2).repeat(2), 16), r2 = parseInt(e3.slice(2, 3).repeat(2), 16), i2 = parseInt(e3.slice(3, 4).repeat(2), 16);
                    return o.toColor(t3, r2, i2);
                  case 5:
                    t3 = parseInt(e3.slice(1, 2).repeat(2), 16), r2 = parseInt(e3.slice(2, 3).repeat(2), 16), i2 = parseInt(e3.slice(3, 4).repeat(2), 16);
                    var n2 = parseInt(e3.slice(4, 5).repeat(2), 16);
                    return o.toColor(t3, r2, i2, n2);
                  case 7:
                    return { css: e3, rgba: (parseInt(e3.slice(1), 16) << 8 | 255) >>> 0 };
                  case 9:
                    return { css: e3, rgba: parseInt(e3.slice(1), 16) >>> 0 };
                }
              var s2 = e3.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
              if (s2)
                return t3 = parseInt(s2[1]), r2 = parseInt(s2[2]), i2 = parseInt(s2[3]), n2 = Math.round(255 * (void 0 === s2[5] ? 1 : parseFloat(s2[5]))), o.toColor(t3, r2, i2, n2);
              throw new Error("css.toColor: Unsupported css format");
            }, function(e3) {
              function t3(e4, t4, r2) {
                var i2 = e4 / 255, n2 = t4 / 255, o2 = r2 / 255;
                return 0.2126 * (i2 <= 0.03928 ? i2 / 12.92 : Math.pow((i2 + 0.055) / 1.055, 2.4)) + 0.7152 * (n2 <= 0.03928 ? n2 / 12.92 : Math.pow((n2 + 0.055) / 1.055, 2.4)) + 0.0722 * (o2 <= 0.03928 ? o2 / 12.92 : Math.pow((o2 + 0.055) / 1.055, 2.4));
              }
              e3.relativeLuminance = function(e4) {
                return t3(e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4);
              }, e3.relativeLuminance2 = t3;
            }(n = t2.rgb || (t2.rgb = {})), function(e3) {
              function t3(e4, t4, r2) {
                for (var i3 = e4 >> 24 & 255, o2 = e4 >> 16 & 255, s2 = e4 >> 8 & 255, a2 = t4 >> 24 & 255, l = t4 >> 16 & 255, h = t4 >> 8 & 255, u = c(n.relativeLuminance2(a2, l, h), n.relativeLuminance2(i3, o2, s2)); u < r2 && (a2 > 0 || l > 0 || h > 0); )
                  a2 -= Math.max(0, Math.ceil(0.1 * a2)), l -= Math.max(0, Math.ceil(0.1 * l)), h -= Math.max(0, Math.ceil(0.1 * h)), u = c(n.relativeLuminance2(a2, l, h), n.relativeLuminance2(i3, o2, s2));
                return (a2 << 24 | l << 16 | h << 8 | 255) >>> 0;
              }
              function i2(e4, t4, r2) {
                for (var i3 = e4 >> 24 & 255, o2 = e4 >> 16 & 255, s2 = e4 >> 8 & 255, a2 = t4 >> 24 & 255, l = t4 >> 16 & 255, h = t4 >> 8 & 255, u = c(n.relativeLuminance2(a2, l, h), n.relativeLuminance2(i3, o2, s2)); u < r2 && (a2 < 255 || l < 255 || h < 255); )
                  a2 = Math.min(255, a2 + Math.ceil(0.1 * (255 - a2))), l = Math.min(255, l + Math.ceil(0.1 * (255 - l))), h = Math.min(255, h + Math.ceil(0.1 * (255 - h))), u = c(n.relativeLuminance2(a2, l, h), n.relativeLuminance2(i3, o2, s2));
                return (a2 << 24 | l << 16 | h << 8 | 255) >>> 0;
              }
              e3.ensureContrastRatio = function(e4, r2, o2) {
                var s2 = n.relativeLuminance(e4 >> 8), a2 = n.relativeLuminance(r2 >> 8);
                if (c(s2, a2) < o2) {
                  if (a2 < s2) {
                    var l = t3(e4, r2, o2), h = c(s2, n.relativeLuminance(l >> 8));
                    if (h < o2) {
                      var u = i2(e4, e4, o2);
                      return h > c(s2, n.relativeLuminance(u >> 8)) ? l : u;
                    }
                    return l;
                  }
                  var f = i2(e4, r2, o2), _ = c(s2, n.relativeLuminance(f >> 8));
                  return _ < o2 ? (u = t3(e4, e4, o2), _ > c(s2, n.relativeLuminance(u >> 8)) ? f : u) : f;
                }
              }, e3.reduceLuminance = t3, e3.increaseLuminance = i2, e3.toChannels = function(e4) {
                return [e4 >> 24 & 255, e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4];
              }, e3.toColor = function(e4, t4, i3, n2) {
                return { css: r.toCss(e4, t4, i3, n2), rgba: r.toRgba(e4, t4, i3, n2) };
              };
            }(o = t2.rgba || (t2.rgba = {})), t2.toPaddedHex = a, t2.contrastRatio = c;
          }, 8969: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreTerminal = void 0;
            var s = r(844), a = r(2585), c = r(4348), l = r(7866), h = r(744), u = r(7302), f = r(6975), _ = r(8460), d = r(1753), p = r(3730), v = r(1480), y = r(7994), g = r(9282), m = r(5435), b = r(5981), S = false, C = function(e3) {
              function t3(t4) {
                var r2 = e3.call(this) || this;
                return r2._onBinary = new _.EventEmitter(), r2._onData = new _.EventEmitter(), r2._onLineFeed = new _.EventEmitter(), r2._onResize = new _.EventEmitter(), r2._onScroll = new _.EventEmitter(), r2._onWriteParsed = new _.EventEmitter(), r2._instantiationService = new c.InstantiationService(), r2.optionsService = new u.OptionsService(t4), r2._instantiationService.setService(a.IOptionsService, r2.optionsService), r2._bufferService = r2.register(r2._instantiationService.createInstance(h.BufferService)), r2._instantiationService.setService(a.IBufferService, r2._bufferService), r2._logService = r2._instantiationService.createInstance(l.LogService), r2._instantiationService.setService(a.ILogService, r2._logService), r2.coreService = r2.register(r2._instantiationService.createInstance(f.CoreService, function() {
                  return r2.scrollToBottom();
                })), r2._instantiationService.setService(a.ICoreService, r2.coreService), r2.coreMouseService = r2._instantiationService.createInstance(d.CoreMouseService), r2._instantiationService.setService(a.ICoreMouseService, r2.coreMouseService), r2._dirtyRowService = r2._instantiationService.createInstance(p.DirtyRowService), r2._instantiationService.setService(a.IDirtyRowService, r2._dirtyRowService), r2.unicodeService = r2._instantiationService.createInstance(v.UnicodeService), r2._instantiationService.setService(a.IUnicodeService, r2.unicodeService), r2._charsetService = r2._instantiationService.createInstance(y.CharsetService), r2._instantiationService.setService(a.ICharsetService, r2._charsetService), r2._inputHandler = new m.InputHandler(r2._bufferService, r2._charsetService, r2.coreService, r2._dirtyRowService, r2._logService, r2.optionsService, r2.coreMouseService, r2.unicodeService), r2.register((0, _.forwardEvent)(r2._inputHandler.onLineFeed, r2._onLineFeed)), r2.register(r2._inputHandler), r2.register((0, _.forwardEvent)(r2._bufferService.onResize, r2._onResize)), r2.register((0, _.forwardEvent)(r2.coreService.onData, r2._onData)), r2.register((0, _.forwardEvent)(r2.coreService.onBinary, r2._onBinary)), r2.register(r2.optionsService.onOptionChange(function(e4) {
                  return r2._updateOptions(e4);
                })), r2.register(r2._bufferService.onScroll(function(e4) {
                  r2._onScroll.fire({ position: r2._bufferService.buffer.ydisp, source: 0 }), r2._dirtyRowService.markRangeDirty(r2._bufferService.buffer.scrollTop, r2._bufferService.buffer.scrollBottom);
                })), r2.register(r2._inputHandler.onScroll(function(e4) {
                  r2._onScroll.fire({ position: r2._bufferService.buffer.ydisp, source: 0 }), r2._dirtyRowService.markRangeDirty(r2._bufferService.buffer.scrollTop, r2._bufferService.buffer.scrollBottom);
                })), r2._writeBuffer = new b.WriteBuffer(function(e4, t5) {
                  return r2._inputHandler.parse(e4, t5);
                }), r2.register((0, _.forwardEvent)(r2._writeBuffer.onWriteParsed, r2._onWriteParsed)), r2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onBinary", { get: function() {
                return this._onBinary.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onData", { get: function() {
                return this._onData.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onLineFeed", { get: function() {
                return this._onLineFeed.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onResize", { get: function() {
                return this._onResize.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onWriteParsed", { get: function() {
                return this._onWriteParsed.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onScroll", { get: function() {
                var e4 = this;
                return this._onScrollApi || (this._onScrollApi = new _.EventEmitter(), this.register(this._onScroll.event(function(t4) {
                  var r2;
                  null === (r2 = e4._onScrollApi) || void 0 === r2 || r2.fire(t4.position);
                }))), this._onScrollApi.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "cols", { get: function() {
                return this._bufferService.cols;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "rows", { get: function() {
                return this._bufferService.rows;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "buffers", { get: function() {
                return this._bufferService.buffers;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "options", { get: function() {
                return this.optionsService.options;
              }, set: function(e4) {
                for (var t4 in e4)
                  this.optionsService.options[t4] = e4[t4];
              }, enumerable: false, configurable: true }), t3.prototype.dispose = function() {
                var t4;
                this._isDisposed || (e3.prototype.dispose.call(this), null === (t4 = this._windowsMode) || void 0 === t4 || t4.dispose(), this._windowsMode = void 0);
              }, t3.prototype.write = function(e4, t4) {
                this._writeBuffer.write(e4, t4);
              }, t3.prototype.writeSync = function(e4, t4) {
                this._logService.logLevel <= a.LogLevelEnum.WARN && !S && (this._logService.warn("writeSync is unreliable and will be removed soon."), S = true), this._writeBuffer.writeSync(e4, t4);
              }, t3.prototype.resize = function(e4, t4) {
                isNaN(e4) || isNaN(t4) || (e4 = Math.max(e4, h.MINIMUM_COLS), t4 = Math.max(t4, h.MINIMUM_ROWS), this._bufferService.resize(e4, t4));
              }, t3.prototype.scroll = function(e4, t4) {
                void 0 === t4 && (t4 = false), this._bufferService.scroll(e4, t4);
              }, t3.prototype.scrollLines = function(e4, t4, r2) {
                this._bufferService.scrollLines(e4, t4, r2);
              }, t3.prototype.scrollPages = function(e4) {
                this._bufferService.scrollPages(e4);
              }, t3.prototype.scrollToTop = function() {
                this._bufferService.scrollToTop();
              }, t3.prototype.scrollToBottom = function() {
                this._bufferService.scrollToBottom();
              }, t3.prototype.scrollToLine = function(e4) {
                this._bufferService.scrollToLine(e4);
              }, t3.prototype.registerEscHandler = function(e4, t4) {
                return this._inputHandler.registerEscHandler(e4, t4);
              }, t3.prototype.registerDcsHandler = function(e4, t4) {
                return this._inputHandler.registerDcsHandler(e4, t4);
              }, t3.prototype.registerCsiHandler = function(e4, t4) {
                return this._inputHandler.registerCsiHandler(e4, t4);
              }, t3.prototype.registerOscHandler = function(e4, t4) {
                return this._inputHandler.registerOscHandler(e4, t4);
              }, t3.prototype._setup = function() {
                this.optionsService.rawOptions.windowsMode && this._enableWindowsMode();
              }, t3.prototype.reset = function() {
                this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
              }, t3.prototype._updateOptions = function(e4) {
                var t4;
                switch (e4) {
                  case "scrollback":
                    this.buffers.resize(this.cols, this.rows);
                    break;
                  case "windowsMode":
                    this.optionsService.rawOptions.windowsMode ? this._enableWindowsMode() : (null === (t4 = this._windowsMode) || void 0 === t4 || t4.dispose(), this._windowsMode = void 0);
                }
              }, t3.prototype._enableWindowsMode = function() {
                var e4 = this;
                if (!this._windowsMode) {
                  var t4 = [];
                  t4.push(this.onLineFeed(g.updateWindowsModeWrappedState.bind(null, this._bufferService))), t4.push(this.registerCsiHandler({ final: "H" }, function() {
                    return (0, g.updateWindowsModeWrappedState)(e4._bufferService), false;
                  })), this._windowsMode = { dispose: function() {
                    var e5, r2;
                    try {
                      for (var i2 = o(t4), n2 = i2.next(); !n2.done; n2 = i2.next())
                        n2.value.dispose();
                    } catch (t5) {
                      e5 = { error: t5 };
                    } finally {
                      try {
                        n2 && !n2.done && (r2 = i2.return) && r2.call(i2);
                      } finally {
                        if (e5)
                          throw e5.error;
                      }
                    }
                  } };
                }
              }, t3;
            }(s.Disposable);
            t2.CoreTerminal = C;
          }, 8460: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.forwardEvent = t2.EventEmitter = void 0;
            var r = function() {
              function e3() {
                this._listeners = [], this._disposed = false;
              }
              return Object.defineProperty(e3.prototype, "event", { get: function() {
                var e4 = this;
                return this._event || (this._event = function(t3) {
                  return e4._listeners.push(t3), { dispose: function() {
                    if (!e4._disposed) {
                      for (var r2 = 0; r2 < e4._listeners.length; r2++)
                        if (e4._listeners[r2] === t3)
                          return void e4._listeners.splice(r2, 1);
                    }
                  } };
                }), this._event;
              }, enumerable: false, configurable: true }), e3.prototype.fire = function(e4, t3) {
                for (var r2 = [], i = 0; i < this._listeners.length; i++)
                  r2.push(this._listeners[i]);
                for (i = 0; i < r2.length; i++)
                  r2[i].call(void 0, e4, t3);
              }, e3.prototype.dispose = function() {
                this._listeners && (this._listeners.length = 0), this._disposed = true;
              }, e3;
            }();
            t2.EventEmitter = r, t2.forwardEvent = function(e3, t3) {
              return e3(function(e4) {
                return t3.fire(e4);
              });
            };
          }, 5435: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            });
            Object.defineProperty(t2, "__esModule", { value: true }), t2.InputHandler = t2.WindowsOptionsReportType = void 0;
            var o, s = r(2584), a = r(7116), c = r(2015), l = r(844), h = r(8273), u = r(482), f = r(8437), _ = r(8460), d = r(643), p = r(511), v = r(3734), y = r(2585), g = r(6242), m = r(6351), b = r(5941), S = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 }, C = 131072;
            function w(e3, t3) {
              if (e3 > 24)
                return t3.setWinLines || false;
              switch (e3) {
                case 1:
                  return !!t3.restoreWin;
                case 2:
                  return !!t3.minimizeWin;
                case 3:
                  return !!t3.setWinPosition;
                case 4:
                  return !!t3.setWinSizePixels;
                case 5:
                  return !!t3.raiseWin;
                case 6:
                  return !!t3.lowerWin;
                case 7:
                  return !!t3.refreshWin;
                case 8:
                  return !!t3.setWinSizeChars;
                case 9:
                  return !!t3.maximizeWin;
                case 10:
                  return !!t3.fullscreenWin;
                case 11:
                  return !!t3.getWinState;
                case 13:
                  return !!t3.getWinPosition;
                case 14:
                  return !!t3.getWinSizePixels;
                case 15:
                  return !!t3.getScreenSizePixels;
                case 16:
                  return !!t3.getCellSizePixels;
                case 18:
                  return !!t3.getWinSizeChars;
                case 19:
                  return !!t3.getScreenSizeChars;
                case 20:
                  return !!t3.getIconTitle;
                case 21:
                  return !!t3.getWinTitle;
                case 22:
                  return !!t3.pushTitle;
                case 23:
                  return !!t3.popTitle;
                case 24:
                  return !!t3.setWinLines;
              }
              return false;
            }
            !function(e3) {
              e3[e3.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e3[e3.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
            }(o = t2.WindowsOptionsReportType || (t2.WindowsOptionsReportType = {}));
            var L = function() {
              function e3(e4, t3, r2, i2) {
                this._bufferService = e4, this._coreService = t3, this._logService = r2, this._optionsService = i2, this._data = new Uint32Array(0);
              }
              return e3.prototype.hook = function(e4) {
                this._data = new Uint32Array(0);
              }, e3.prototype.put = function(e4, t3, r2) {
                this._data = (0, h.concat)(this._data, e4.subarray(t3, r2));
              }, e3.prototype.unhook = function(e4) {
                if (!e4)
                  return this._data = new Uint32Array(0), true;
                var t3 = (0, u.utf32ToString)(this._data);
                switch (this._data = new Uint32Array(0), t3) {
                  case '"q':
                    this._coreService.triggerDataEvent(s.C0.ESC + 'P1$r0"q' + s.C0.ESC + "\\");
                    break;
                  case '"p':
                    this._coreService.triggerDataEvent(s.C0.ESC + 'P1$r61;1"p' + s.C0.ESC + "\\");
                    break;
                  case "r":
                    var r2 = this._bufferService.buffer.scrollTop + 1 + ";" + (this._bufferService.buffer.scrollBottom + 1) + "r";
                    this._coreService.triggerDataEvent(s.C0.ESC + "P1$r" + r2 + s.C0.ESC + "\\");
                    break;
                  case "m":
                    this._coreService.triggerDataEvent(s.C0.ESC + "P1$r0m" + s.C0.ESC + "\\");
                    break;
                  case " q":
                    var i2 = { block: 2, underline: 4, bar: 6 }[this._optionsService.rawOptions.cursorStyle];
                    i2 -= this._optionsService.rawOptions.cursorBlink ? 1 : 0, this._coreService.triggerDataEvent(s.C0.ESC + "P1$r" + i2 + " q" + s.C0.ESC + "\\");
                    break;
                  default:
                    this._logService.debug("Unknown DCS $q %s", t3), this._coreService.triggerDataEvent(s.C0.ESC + "P0$r" + s.C0.ESC + "\\");
                }
                return true;
              }, e3;
            }(), E = function(e3) {
              function t3(t4, r2, i2, n2, o2, l2, h2, d2, v2) {
                void 0 === v2 && (v2 = new c.EscapeSequenceParser());
                var y2 = e3.call(this) || this;
                y2._bufferService = t4, y2._charsetService = r2, y2._coreService = i2, y2._dirtyRowService = n2, y2._logService = o2, y2._optionsService = l2, y2._coreMouseService = h2, y2._unicodeService = d2, y2._parser = v2, y2._parseBuffer = new Uint32Array(4096), y2._stringDecoder = new u.StringToUtf32(), y2._utf8Decoder = new u.Utf8ToUtf32(), y2._workCell = new p.CellData(), y2._windowTitle = "", y2._iconName = "", y2._windowTitleStack = [], y2._iconNameStack = [], y2._curAttrData = f.DEFAULT_ATTR_DATA.clone(), y2._eraseAttrDataInternal = f.DEFAULT_ATTR_DATA.clone(), y2._onRequestBell = new _.EventEmitter(), y2._onRequestRefreshRows = new _.EventEmitter(), y2._onRequestReset = new _.EventEmitter(), y2._onRequestSendFocus = new _.EventEmitter(), y2._onRequestSyncScrollBar = new _.EventEmitter(), y2._onRequestWindowsOptionsReport = new _.EventEmitter(), y2._onA11yChar = new _.EventEmitter(), y2._onA11yTab = new _.EventEmitter(), y2._onCursorMove = new _.EventEmitter(), y2._onLineFeed = new _.EventEmitter(), y2._onScroll = new _.EventEmitter(), y2._onTitleChange = new _.EventEmitter(), y2._onColor = new _.EventEmitter(), y2._parseStack = { paused: false, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 }, y2._specialColors = [256, 257, 258], y2.register(y2._parser), y2._activeBuffer = y2._bufferService.buffer, y2.register(y2._bufferService.buffers.onBufferActivate(function(e4) {
                  return y2._activeBuffer = e4.activeBuffer;
                })), y2._parser.setCsiHandlerFallback(function(e4, t5) {
                  y2._logService.debug("Unknown CSI code: ", { identifier: y2._parser.identToString(e4), params: t5.toArray() });
                }), y2._parser.setEscHandlerFallback(function(e4) {
                  y2._logService.debug("Unknown ESC code: ", { identifier: y2._parser.identToString(e4) });
                }), y2._parser.setExecuteHandlerFallback(function(e4) {
                  y2._logService.debug("Unknown EXECUTE code: ", { code: e4 });
                }), y2._parser.setOscHandlerFallback(function(e4, t5, r3) {
                  y2._logService.debug("Unknown OSC code: ", { identifier: e4, action: t5, data: r3 });
                }), y2._parser.setDcsHandlerFallback(function(e4, t5, r3) {
                  "HOOK" === t5 && (r3 = r3.toArray()), y2._logService.debug("Unknown DCS code: ", { identifier: y2._parser.identToString(e4), action: t5, payload: r3 });
                }), y2._parser.setPrintHandler(function(e4, t5, r3) {
                  return y2.print(e4, t5, r3);
                }), y2._parser.registerCsiHandler({ final: "@" }, function(e4) {
                  return y2.insertChars(e4);
                }), y2._parser.registerCsiHandler({ intermediates: " ", final: "@" }, function(e4) {
                  return y2.scrollLeft(e4);
                }), y2._parser.registerCsiHandler({ final: "A" }, function(e4) {
                  return y2.cursorUp(e4);
                }), y2._parser.registerCsiHandler({ intermediates: " ", final: "A" }, function(e4) {
                  return y2.scrollRight(e4);
                }), y2._parser.registerCsiHandler({ final: "B" }, function(e4) {
                  return y2.cursorDown(e4);
                }), y2._parser.registerCsiHandler({ final: "C" }, function(e4) {
                  return y2.cursorForward(e4);
                }), y2._parser.registerCsiHandler({ final: "D" }, function(e4) {
                  return y2.cursorBackward(e4);
                }), y2._parser.registerCsiHandler({ final: "E" }, function(e4) {
                  return y2.cursorNextLine(e4);
                }), y2._parser.registerCsiHandler({ final: "F" }, function(e4) {
                  return y2.cursorPrecedingLine(e4);
                }), y2._parser.registerCsiHandler({ final: "G" }, function(e4) {
                  return y2.cursorCharAbsolute(e4);
                }), y2._parser.registerCsiHandler({ final: "H" }, function(e4) {
                  return y2.cursorPosition(e4);
                }), y2._parser.registerCsiHandler({ final: "I" }, function(e4) {
                  return y2.cursorForwardTab(e4);
                }), y2._parser.registerCsiHandler({ final: "J" }, function(e4) {
                  return y2.eraseInDisplay(e4);
                }), y2._parser.registerCsiHandler({ prefix: "?", final: "J" }, function(e4) {
                  return y2.eraseInDisplay(e4);
                }), y2._parser.registerCsiHandler({ final: "K" }, function(e4) {
                  return y2.eraseInLine(e4);
                }), y2._parser.registerCsiHandler({ prefix: "?", final: "K" }, function(e4) {
                  return y2.eraseInLine(e4);
                }), y2._parser.registerCsiHandler({ final: "L" }, function(e4) {
                  return y2.insertLines(e4);
                }), y2._parser.registerCsiHandler({ final: "M" }, function(e4) {
                  return y2.deleteLines(e4);
                }), y2._parser.registerCsiHandler({ final: "P" }, function(e4) {
                  return y2.deleteChars(e4);
                }), y2._parser.registerCsiHandler({ final: "S" }, function(e4) {
                  return y2.scrollUp(e4);
                }), y2._parser.registerCsiHandler({ final: "T" }, function(e4) {
                  return y2.scrollDown(e4);
                }), y2._parser.registerCsiHandler({ final: "X" }, function(e4) {
                  return y2.eraseChars(e4);
                }), y2._parser.registerCsiHandler({ final: "Z" }, function(e4) {
                  return y2.cursorBackwardTab(e4);
                }), y2._parser.registerCsiHandler({ final: "`" }, function(e4) {
                  return y2.charPosAbsolute(e4);
                }), y2._parser.registerCsiHandler({ final: "a" }, function(e4) {
                  return y2.hPositionRelative(e4);
                }), y2._parser.registerCsiHandler({ final: "b" }, function(e4) {
                  return y2.repeatPrecedingCharacter(e4);
                }), y2._parser.registerCsiHandler({ final: "c" }, function(e4) {
                  return y2.sendDeviceAttributesPrimary(e4);
                }), y2._parser.registerCsiHandler({ prefix: ">", final: "c" }, function(e4) {
                  return y2.sendDeviceAttributesSecondary(e4);
                }), y2._parser.registerCsiHandler({ final: "d" }, function(e4) {
                  return y2.linePosAbsolute(e4);
                }), y2._parser.registerCsiHandler({ final: "e" }, function(e4) {
                  return y2.vPositionRelative(e4);
                }), y2._parser.registerCsiHandler({ final: "f" }, function(e4) {
                  return y2.hVPosition(e4);
                }), y2._parser.registerCsiHandler({ final: "g" }, function(e4) {
                  return y2.tabClear(e4);
                }), y2._parser.registerCsiHandler({ final: "h" }, function(e4) {
                  return y2.setMode(e4);
                }), y2._parser.registerCsiHandler({ prefix: "?", final: "h" }, function(e4) {
                  return y2.setModePrivate(e4);
                }), y2._parser.registerCsiHandler({ final: "l" }, function(e4) {
                  return y2.resetMode(e4);
                }), y2._parser.registerCsiHandler({ prefix: "?", final: "l" }, function(e4) {
                  return y2.resetModePrivate(e4);
                }), y2._parser.registerCsiHandler({ final: "m" }, function(e4) {
                  return y2.charAttributes(e4);
                }), y2._parser.registerCsiHandler({ final: "n" }, function(e4) {
                  return y2.deviceStatus(e4);
                }), y2._parser.registerCsiHandler({ prefix: "?", final: "n" }, function(e4) {
                  return y2.deviceStatusPrivate(e4);
                }), y2._parser.registerCsiHandler({ intermediates: "!", final: "p" }, function(e4) {
                  return y2.softReset(e4);
                }), y2._parser.registerCsiHandler({ intermediates: " ", final: "q" }, function(e4) {
                  return y2.setCursorStyle(e4);
                }), y2._parser.registerCsiHandler({ final: "r" }, function(e4) {
                  return y2.setScrollRegion(e4);
                }), y2._parser.registerCsiHandler({ final: "s" }, function(e4) {
                  return y2.saveCursor(e4);
                }), y2._parser.registerCsiHandler({ final: "t" }, function(e4) {
                  return y2.windowOptions(e4);
                }), y2._parser.registerCsiHandler({ final: "u" }, function(e4) {
                  return y2.restoreCursor(e4);
                }), y2._parser.registerCsiHandler({ intermediates: "'", final: "}" }, function(e4) {
                  return y2.insertColumns(e4);
                }), y2._parser.registerCsiHandler({ intermediates: "'", final: "~" }, function(e4) {
                  return y2.deleteColumns(e4);
                }), y2._parser.setExecuteHandler(s.C0.BEL, function() {
                  return y2.bell();
                }), y2._parser.setExecuteHandler(s.C0.LF, function() {
                  return y2.lineFeed();
                }), y2._parser.setExecuteHandler(s.C0.VT, function() {
                  return y2.lineFeed();
                }), y2._parser.setExecuteHandler(s.C0.FF, function() {
                  return y2.lineFeed();
                }), y2._parser.setExecuteHandler(s.C0.CR, function() {
                  return y2.carriageReturn();
                }), y2._parser.setExecuteHandler(s.C0.BS, function() {
                  return y2.backspace();
                }), y2._parser.setExecuteHandler(s.C0.HT, function() {
                  return y2.tab();
                }), y2._parser.setExecuteHandler(s.C0.SO, function() {
                  return y2.shiftOut();
                }), y2._parser.setExecuteHandler(s.C0.SI, function() {
                  return y2.shiftIn();
                }), y2._parser.setExecuteHandler(s.C1.IND, function() {
                  return y2.index();
                }), y2._parser.setExecuteHandler(s.C1.NEL, function() {
                  return y2.nextLine();
                }), y2._parser.setExecuteHandler(s.C1.HTS, function() {
                  return y2.tabSet();
                }), y2._parser.registerOscHandler(0, new g.OscHandler(function(e4) {
                  return y2.setTitle(e4), y2.setIconName(e4), true;
                })), y2._parser.registerOscHandler(1, new g.OscHandler(function(e4) {
                  return y2.setIconName(e4);
                })), y2._parser.registerOscHandler(2, new g.OscHandler(function(e4) {
                  return y2.setTitle(e4);
                })), y2._parser.registerOscHandler(4, new g.OscHandler(function(e4) {
                  return y2.setOrReportIndexedColor(e4);
                })), y2._parser.registerOscHandler(10, new g.OscHandler(function(e4) {
                  return y2.setOrReportFgColor(e4);
                })), y2._parser.registerOscHandler(11, new g.OscHandler(function(e4) {
                  return y2.setOrReportBgColor(e4);
                })), y2._parser.registerOscHandler(12, new g.OscHandler(function(e4) {
                  return y2.setOrReportCursorColor(e4);
                })), y2._parser.registerOscHandler(104, new g.OscHandler(function(e4) {
                  return y2.restoreIndexedColor(e4);
                })), y2._parser.registerOscHandler(110, new g.OscHandler(function(e4) {
                  return y2.restoreFgColor(e4);
                })), y2._parser.registerOscHandler(111, new g.OscHandler(function(e4) {
                  return y2.restoreBgColor(e4);
                })), y2._parser.registerOscHandler(112, new g.OscHandler(function(e4) {
                  return y2.restoreCursorColor(e4);
                })), y2._parser.registerEscHandler({ final: "7" }, function() {
                  return y2.saveCursor();
                }), y2._parser.registerEscHandler({ final: "8" }, function() {
                  return y2.restoreCursor();
                }), y2._parser.registerEscHandler({ final: "D" }, function() {
                  return y2.index();
                }), y2._parser.registerEscHandler({ final: "E" }, function() {
                  return y2.nextLine();
                }), y2._parser.registerEscHandler({ final: "H" }, function() {
                  return y2.tabSet();
                }), y2._parser.registerEscHandler({ final: "M" }, function() {
                  return y2.reverseIndex();
                }), y2._parser.registerEscHandler({ final: "=" }, function() {
                  return y2.keypadApplicationMode();
                }), y2._parser.registerEscHandler({ final: ">" }, function() {
                  return y2.keypadNumericMode();
                }), y2._parser.registerEscHandler({ final: "c" }, function() {
                  return y2.fullReset();
                }), y2._parser.registerEscHandler({ final: "n" }, function() {
                  return y2.setgLevel(2);
                }), y2._parser.registerEscHandler({ final: "o" }, function() {
                  return y2.setgLevel(3);
                }), y2._parser.registerEscHandler({ final: "|" }, function() {
                  return y2.setgLevel(3);
                }), y2._parser.registerEscHandler({ final: "}" }, function() {
                  return y2.setgLevel(2);
                }), y2._parser.registerEscHandler({ final: "~" }, function() {
                  return y2.setgLevel(1);
                }), y2._parser.registerEscHandler({ intermediates: "%", final: "@" }, function() {
                  return y2.selectDefaultCharset();
                }), y2._parser.registerEscHandler({ intermediates: "%", final: "G" }, function() {
                  return y2.selectDefaultCharset();
                });
                var m2 = function(e4) {
                  b2._parser.registerEscHandler({ intermediates: "(", final: e4 }, function() {
                    return y2.selectCharset("(" + e4);
                  }), b2._parser.registerEscHandler({ intermediates: ")", final: e4 }, function() {
                    return y2.selectCharset(")" + e4);
                  }), b2._parser.registerEscHandler({ intermediates: "*", final: e4 }, function() {
                    return y2.selectCharset("*" + e4);
                  }), b2._parser.registerEscHandler({ intermediates: "+", final: e4 }, function() {
                    return y2.selectCharset("+" + e4);
                  }), b2._parser.registerEscHandler({ intermediates: "-", final: e4 }, function() {
                    return y2.selectCharset("-" + e4);
                  }), b2._parser.registerEscHandler({ intermediates: ".", final: e4 }, function() {
                    return y2.selectCharset("." + e4);
                  }), b2._parser.registerEscHandler({ intermediates: "/", final: e4 }, function() {
                    return y2.selectCharset("/" + e4);
                  });
                }, b2 = this;
                for (var S2 in a.CHARSETS)
                  m2(S2);
                return y2._parser.registerEscHandler({ intermediates: "#", final: "8" }, function() {
                  return y2.screenAlignmentPattern();
                }), y2._parser.setErrorHandler(function(e4) {
                  return y2._logService.error("Parsing error: ", e4), e4;
                }), y2._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new L(y2._bufferService, y2._coreService, y2._logService, y2._optionsService)), y2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onRequestBell", { get: function() {
                return this._onRequestBell.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRequestRefreshRows", { get: function() {
                return this._onRequestRefreshRows.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRequestReset", { get: function() {
                return this._onRequestReset.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRequestSendFocus", { get: function() {
                return this._onRequestSendFocus.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRequestSyncScrollBar", { get: function() {
                return this._onRequestSyncScrollBar.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onRequestWindowsOptionsReport", { get: function() {
                return this._onRequestWindowsOptionsReport.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onA11yChar", { get: function() {
                return this._onA11yChar.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onA11yTab", { get: function() {
                return this._onA11yTab.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onCursorMove", { get: function() {
                return this._onCursorMove.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onLineFeed", { get: function() {
                return this._onLineFeed.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onScroll", { get: function() {
                return this._onScroll.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onTitleChange", { get: function() {
                return this._onTitleChange.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onColor", { get: function() {
                return this._onColor.event;
              }, enumerable: false, configurable: true }), t3.prototype.dispose = function() {
                e3.prototype.dispose.call(this);
              }, t3.prototype._preserveStack = function(e4, t4, r2, i2) {
                this._parseStack.paused = true, this._parseStack.cursorStartX = e4, this._parseStack.cursorStartY = t4, this._parseStack.decodedLength = r2, this._parseStack.position = i2;
              }, t3.prototype._logSlowResolvingAsync = function(e4) {
                this._logService.logLevel <= y.LogLevelEnum.WARN && Promise.race([e4, new Promise(function(e5, t4) {
                  return setTimeout(function() {
                    return t4("#SLOW_TIMEOUT");
                  }, 5e3);
                })]).catch(function(e5) {
                  if ("#SLOW_TIMEOUT" !== e5)
                    throw e5;
                  console.warn("async parser handler taking longer than 5000 ms");
                });
              }, t3.prototype.parse = function(e4, t4) {
                var r2, i2 = this._activeBuffer.x, n2 = this._activeBuffer.y, o2 = 0, s2 = this._parseStack.paused;
                if (s2) {
                  if (r2 = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t4))
                    return this._logSlowResolvingAsync(r2), r2;
                  i2 = this._parseStack.cursorStartX, n2 = this._parseStack.cursorStartY, this._parseStack.paused = false, e4.length > C && (o2 = this._parseStack.position + C);
                }
                if (this._logService.logLevel <= y.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + ("string" == typeof e4 ? ' "' + e4 + '"' : ' "' + Array.prototype.map.call(e4, function(e5) {
                  return String.fromCharCode(e5);
                }).join("") + '"'), "string" == typeof e4 ? e4.split("").map(function(e5) {
                  return e5.charCodeAt(0);
                }) : e4), this._parseBuffer.length < e4.length && this._parseBuffer.length < C && (this._parseBuffer = new Uint32Array(Math.min(e4.length, C))), s2 || this._dirtyRowService.clearRange(), e4.length > C)
                  for (var a2 = o2; a2 < e4.length; a2 += C) {
                    var c2 = a2 + C < e4.length ? a2 + C : e4.length, l2 = "string" == typeof e4 ? this._stringDecoder.decode(e4.substring(a2, c2), this._parseBuffer) : this._utf8Decoder.decode(e4.subarray(a2, c2), this._parseBuffer);
                    if (r2 = this._parser.parse(this._parseBuffer, l2))
                      return this._preserveStack(i2, n2, l2, a2), this._logSlowResolvingAsync(r2), r2;
                  }
                else if (!s2 && (l2 = "string" == typeof e4 ? this._stringDecoder.decode(e4, this._parseBuffer) : this._utf8Decoder.decode(e4, this._parseBuffer), r2 = this._parser.parse(this._parseBuffer, l2)))
                  return this._preserveStack(i2, n2, l2, 0), this._logSlowResolvingAsync(r2), r2;
                this._activeBuffer.x === i2 && this._activeBuffer.y === n2 || this._onCursorMove.fire(), this._onRequestRefreshRows.fire(this._dirtyRowService.start, this._dirtyRowService.end);
              }, t3.prototype.print = function(e4, t4, r2) {
                var i2, n2, o2 = this._charsetService.charset, s2 = this._optionsService.rawOptions.screenReaderMode, a2 = this._bufferService.cols, c2 = this._coreService.decPrivateModes.wraparound, l2 = this._coreService.modes.insertMode, h2 = this._curAttrData, f2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                this._dirtyRowService.markDirty(this._activeBuffer.y), this._activeBuffer.x && r2 - t4 > 0 && 2 === f2.getWidth(this._activeBuffer.x - 1) && f2.setCellFromCodePoint(this._activeBuffer.x - 1, 0, 1, h2.fg, h2.bg, h2.extended);
                for (var _2 = t4; _2 < r2; ++_2) {
                  if (i2 = e4[_2], n2 = this._unicodeService.wcwidth(i2), i2 < 127 && o2) {
                    var p2 = o2[String.fromCharCode(i2)];
                    p2 && (i2 = p2.charCodeAt(0));
                  }
                  if (s2 && this._onA11yChar.fire((0, u.stringFromCodePoint)(i2)), n2 || !this._activeBuffer.x) {
                    if (this._activeBuffer.x + n2 - 1 >= a2) {
                      if (c2) {
                        for (; this._activeBuffer.x < a2; )
                          f2.setCellFromCodePoint(this._activeBuffer.x++, 0, 1, h2.fg, h2.bg, h2.extended);
                        this._activeBuffer.x = 0, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), true)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true), f2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                      } else if (this._activeBuffer.x = a2 - 1, 2 === n2)
                        continue;
                    }
                    if (l2 && (f2.insertCells(this._activeBuffer.x, n2, this._activeBuffer.getNullCell(h2), h2), 2 === f2.getWidth(a2 - 1) && f2.setCellFromCodePoint(a2 - 1, d.NULL_CELL_CODE, d.NULL_CELL_WIDTH, h2.fg, h2.bg, h2.extended)), f2.setCellFromCodePoint(this._activeBuffer.x++, i2, n2, h2.fg, h2.bg, h2.extended), n2 > 0)
                      for (; --n2; )
                        f2.setCellFromCodePoint(this._activeBuffer.x++, 0, 0, h2.fg, h2.bg, h2.extended);
                  } else
                    f2.getWidth(this._activeBuffer.x - 1) ? f2.addCodepointToCell(this._activeBuffer.x - 1, i2) : f2.addCodepointToCell(this._activeBuffer.x - 2, i2);
                }
                r2 - t4 > 0 && (f2.loadCell(this._activeBuffer.x - 1, this._workCell), 2 === this._workCell.getWidth() || this._workCell.getCode() > 65535 ? this._parser.precedingCodepoint = 0 : this._workCell.isCombined() ? this._parser.precedingCodepoint = this._workCell.getChars().charCodeAt(0) : this._parser.precedingCodepoint = this._workCell.content), this._activeBuffer.x < a2 && r2 - t4 > 0 && 0 === f2.getWidth(this._activeBuffer.x) && !f2.hasContent(this._activeBuffer.x) && f2.setCellFromCodePoint(this._activeBuffer.x, 0, 1, h2.fg, h2.bg, h2.extended), this._dirtyRowService.markDirty(this._activeBuffer.y);
              }, t3.prototype.registerCsiHandler = function(e4, t4) {
                var r2 = this;
                return "t" !== e4.final || e4.prefix || e4.intermediates ? this._parser.registerCsiHandler(e4, t4) : this._parser.registerCsiHandler(e4, function(e5) {
                  return !w(e5.params[0], r2._optionsService.rawOptions.windowOptions) || t4(e5);
                });
              }, t3.prototype.registerDcsHandler = function(e4, t4) {
                return this._parser.registerDcsHandler(e4, new m.DcsHandler(t4));
              }, t3.prototype.registerEscHandler = function(e4, t4) {
                return this._parser.registerEscHandler(e4, t4);
              }, t3.prototype.registerOscHandler = function(e4, t4) {
                return this._parser.registerOscHandler(e4, new g.OscHandler(t4));
              }, t3.prototype.bell = function() {
                return this._onRequestBell.fire(), true;
              }, t3.prototype.lineFeed = function() {
                return this._dirtyRowService.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowService.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), true;
              }, t3.prototype.carriageReturn = function() {
                return this._activeBuffer.x = 0, true;
              }, t3.prototype.backspace = function() {
                var e4;
                if (!this._coreService.decPrivateModes.reverseWraparound)
                  return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, true;
                if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0)
                  this._activeBuffer.x--;
                else if (0 === this._activeBuffer.x && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && (null === (e4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)) || void 0 === e4 ? void 0 : e4.isWrapped)) {
                  this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
                  var t4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                  t4.hasWidth(this._activeBuffer.x) && !t4.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
                }
                return this._restrictCursor(), true;
              }, t3.prototype.tab = function() {
                if (this._activeBuffer.x >= this._bufferService.cols)
                  return true;
                var e4 = this._activeBuffer.x;
                return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e4), true;
              }, t3.prototype.shiftOut = function() {
                return this._charsetService.setgLevel(1), true;
              }, t3.prototype.shiftIn = function() {
                return this._charsetService.setgLevel(0), true;
              }, t3.prototype._restrictCursor = function(e4) {
                void 0 === e4 && (e4 = this._bufferService.cols - 1), this._activeBuffer.x = Math.min(e4, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowService.markDirty(this._activeBuffer.y);
              }, t3.prototype._setCursor = function(e4, t4) {
                this._dirtyRowService.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e4, this._activeBuffer.y = this._activeBuffer.scrollTop + t4) : (this._activeBuffer.x = e4, this._activeBuffer.y = t4), this._restrictCursor(), this._dirtyRowService.markDirty(this._activeBuffer.y);
              }, t3.prototype._moveCursor = function(e4, t4) {
                this._restrictCursor(), this._setCursor(this._activeBuffer.x + e4, this._activeBuffer.y + t4);
              }, t3.prototype.cursorUp = function(e4) {
                var t4 = this._activeBuffer.y - this._activeBuffer.scrollTop;
                return t4 >= 0 ? this._moveCursor(0, -Math.min(t4, e4.params[0] || 1)) : this._moveCursor(0, -(e4.params[0] || 1)), true;
              }, t3.prototype.cursorDown = function(e4) {
                var t4 = this._activeBuffer.scrollBottom - this._activeBuffer.y;
                return t4 >= 0 ? this._moveCursor(0, Math.min(t4, e4.params[0] || 1)) : this._moveCursor(0, e4.params[0] || 1), true;
              }, t3.prototype.cursorForward = function(e4) {
                return this._moveCursor(e4.params[0] || 1, 0), true;
              }, t3.prototype.cursorBackward = function(e4) {
                return this._moveCursor(-(e4.params[0] || 1), 0), true;
              }, t3.prototype.cursorNextLine = function(e4) {
                return this.cursorDown(e4), this._activeBuffer.x = 0, true;
              }, t3.prototype.cursorPrecedingLine = function(e4) {
                return this.cursorUp(e4), this._activeBuffer.x = 0, true;
              }, t3.prototype.cursorCharAbsolute = function(e4) {
                return this._setCursor((e4.params[0] || 1) - 1, this._activeBuffer.y), true;
              }, t3.prototype.cursorPosition = function(e4) {
                return this._setCursor(e4.length >= 2 ? (e4.params[1] || 1) - 1 : 0, (e4.params[0] || 1) - 1), true;
              }, t3.prototype.charPosAbsolute = function(e4) {
                return this._setCursor((e4.params[0] || 1) - 1, this._activeBuffer.y), true;
              }, t3.prototype.hPositionRelative = function(e4) {
                return this._moveCursor(e4.params[0] || 1, 0), true;
              }, t3.prototype.linePosAbsolute = function(e4) {
                return this._setCursor(this._activeBuffer.x, (e4.params[0] || 1) - 1), true;
              }, t3.prototype.vPositionRelative = function(e4) {
                return this._moveCursor(0, e4.params[0] || 1), true;
              }, t3.prototype.hVPosition = function(e4) {
                return this.cursorPosition(e4), true;
              }, t3.prototype.tabClear = function(e4) {
                var t4 = e4.params[0];
                return 0 === t4 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : 3 === t4 && (this._activeBuffer.tabs = {}), true;
              }, t3.prototype.cursorForwardTab = function(e4) {
                if (this._activeBuffer.x >= this._bufferService.cols)
                  return true;
                for (var t4 = e4.params[0] || 1; t4--; )
                  this._activeBuffer.x = this._activeBuffer.nextStop();
                return true;
              }, t3.prototype.cursorBackwardTab = function(e4) {
                if (this._activeBuffer.x >= this._bufferService.cols)
                  return true;
                for (var t4 = e4.params[0] || 1; t4--; )
                  this._activeBuffer.x = this._activeBuffer.prevStop();
                return true;
              }, t3.prototype._eraseInBufferLine = function(e4, t4, r2, i2) {
                void 0 === i2 && (i2 = false);
                var n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                n2.replaceCells(t4, r2, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i2 && (n2.isWrapped = false);
              }, t3.prototype._resetBufferLine = function(e4) {
                var t4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                t4.fill(this._activeBuffer.getNullCell(this._eraseAttrData())), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e4), t4.isWrapped = false;
              }, t3.prototype.eraseInDisplay = function(e4) {
                var t4;
                switch (this._restrictCursor(this._bufferService.cols), e4.params[0]) {
                  case 0:
                    for (t4 = this._activeBuffer.y, this._dirtyRowService.markDirty(t4), this._eraseInBufferLine(t4++, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x); t4 < this._bufferService.rows; t4++)
                      this._resetBufferLine(t4);
                    this._dirtyRowService.markDirty(t4);
                    break;
                  case 1:
                    for (t4 = this._activeBuffer.y, this._dirtyRowService.markDirty(t4), this._eraseInBufferLine(t4, 0, this._activeBuffer.x + 1, true), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(t4 + 1).isWrapped = false); t4--; )
                      this._resetBufferLine(t4);
                    this._dirtyRowService.markDirty(0);
                    break;
                  case 2:
                    for (t4 = this._bufferService.rows, this._dirtyRowService.markDirty(t4 - 1); t4--; )
                      this._resetBufferLine(t4);
                    this._dirtyRowService.markDirty(0);
                    break;
                  case 3:
                    var r2 = this._activeBuffer.lines.length - this._bufferService.rows;
                    r2 > 0 && (this._activeBuffer.lines.trimStart(r2), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - r2, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - r2, 0), this._onScroll.fire(0));
                }
                return true;
              }, t3.prototype.eraseInLine = function(e4) {
                switch (this._restrictCursor(this._bufferService.cols), e4.params[0]) {
                  case 0:
                    this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x);
                    break;
                  case 1:
                    this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false);
                    break;
                  case 2:
                    this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true);
                }
                return this._dirtyRowService.markDirty(this._activeBuffer.y), true;
              }, t3.prototype.insertLines = function(e4) {
                this._restrictCursor();
                var t4 = e4.params[0] || 1;
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                for (var r2 = this._activeBuffer.ybase + this._activeBuffer.y, i2 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, n2 = this._bufferService.rows - 1 + this._activeBuffer.ybase - i2 + 1; t4--; )
                  this._activeBuffer.lines.splice(n2 - 1, 1), this._activeBuffer.lines.splice(r2, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                return this._dirtyRowService.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
              }, t3.prototype.deleteLines = function(e4) {
                this._restrictCursor();
                var t4 = e4.params[0] || 1;
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                var r2, i2 = this._activeBuffer.ybase + this._activeBuffer.y;
                for (r2 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r2 = this._bufferService.rows - 1 + this._activeBuffer.ybase - r2; t4--; )
                  this._activeBuffer.lines.splice(i2, 1), this._activeBuffer.lines.splice(r2, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                return this._dirtyRowService.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
              }, t3.prototype.insertChars = function(e4) {
                this._restrictCursor();
                var t4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                return t4 && (t4.insertCells(this._activeBuffer.x, e4.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), true;
              }, t3.prototype.deleteChars = function(e4) {
                this._restrictCursor();
                var t4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                return t4 && (t4.deleteCells(this._activeBuffer.x, e4.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), true;
              }, t3.prototype.scrollUp = function(e4) {
                for (var t4 = e4.params[0] || 1; t4--; )
                  this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }, t3.prototype.scrollDown = function(e4) {
                for (var t4 = e4.params[0] || 1; t4--; )
                  this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(f.DEFAULT_ATTR_DATA));
                return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }, t3.prototype.scrollLeft = function(e4) {
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                for (var t4 = e4.params[0] || 1, r2 = this._activeBuffer.scrollTop; r2 <= this._activeBuffer.scrollBottom; ++r2) {
                  var i2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + r2);
                  i2.deleteCells(0, t4, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i2.isWrapped = false;
                }
                return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }, t3.prototype.scrollRight = function(e4) {
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                for (var t4 = e4.params[0] || 1, r2 = this._activeBuffer.scrollTop; r2 <= this._activeBuffer.scrollBottom; ++r2) {
                  var i2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + r2);
                  i2.insertCells(0, t4, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i2.isWrapped = false;
                }
                return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }, t3.prototype.insertColumns = function(e4) {
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                for (var t4 = e4.params[0] || 1, r2 = this._activeBuffer.scrollTop; r2 <= this._activeBuffer.scrollBottom; ++r2) {
                  var i2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + r2);
                  i2.insertCells(this._activeBuffer.x, t4, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i2.isWrapped = false;
                }
                return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }, t3.prototype.deleteColumns = function(e4) {
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                for (var t4 = e4.params[0] || 1, r2 = this._activeBuffer.scrollTop; r2 <= this._activeBuffer.scrollBottom; ++r2) {
                  var i2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + r2);
                  i2.deleteCells(this._activeBuffer.x, t4, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i2.isWrapped = false;
                }
                return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }, t3.prototype.eraseChars = function(e4) {
                this._restrictCursor();
                var t4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                return t4 && (t4.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e4.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), true;
              }, t3.prototype.repeatPrecedingCharacter = function(e4) {
                if (!this._parser.precedingCodepoint)
                  return true;
                for (var t4 = e4.params[0] || 1, r2 = new Uint32Array(t4), i2 = 0; i2 < t4; ++i2)
                  r2[i2] = this._parser.precedingCodepoint;
                return this.print(r2, 0, r2.length), true;
              }, t3.prototype.sendDeviceAttributesPrimary = function(e4) {
                return e4.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(s.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(s.C0.ESC + "[?6c")), true;
              }, t3.prototype.sendDeviceAttributesSecondary = function(e4) {
                return e4.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(s.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(s.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e4.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(s.C0.ESC + "[>83;40003;0c")), true;
              }, t3.prototype._is = function(e4) {
                return 0 === (this._optionsService.rawOptions.termName + "").indexOf(e4);
              }, t3.prototype.setMode = function(e4) {
                for (var t4 = 0; t4 < e4.length; t4++)
                  4 === e4.params[t4] && (this._coreService.modes.insertMode = true);
                return true;
              }, t3.prototype.setModePrivate = function(e4) {
                for (var t4 = 0; t4 < e4.length; t4++)
                  switch (e4.params[t4]) {
                    case 1:
                      this._coreService.decPrivateModes.applicationCursorKeys = true;
                      break;
                    case 2:
                      this._charsetService.setgCharset(0, a.DEFAULT_CHARSET), this._charsetService.setgCharset(1, a.DEFAULT_CHARSET), this._charsetService.setgCharset(2, a.DEFAULT_CHARSET), this._charsetService.setgCharset(3, a.DEFAULT_CHARSET);
                      break;
                    case 3:
                      this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                      break;
                    case 6:
                      this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
                      break;
                    case 7:
                      this._coreService.decPrivateModes.wraparound = true;
                      break;
                    case 12:
                      break;
                    case 45:
                      this._coreService.decPrivateModes.reverseWraparound = true;
                      break;
                    case 66:
                      this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
                      break;
                    case 9:
                      this._coreMouseService.activeProtocol = "X10";
                      break;
                    case 1e3:
                      this._coreMouseService.activeProtocol = "VT200";
                      break;
                    case 1002:
                      this._coreMouseService.activeProtocol = "DRAG";
                      break;
                    case 1003:
                      this._coreMouseService.activeProtocol = "ANY";
                      break;
                    case 1004:
                      this._coreService.decPrivateModes.sendFocus = true, this._onRequestSendFocus.fire();
                      break;
                    case 1005:
                      this._logService.debug("DECSET 1005 not supported (see #2507)");
                      break;
                    case 1006:
                      this._coreMouseService.activeEncoding = "SGR";
                      break;
                    case 1015:
                      this._logService.debug("DECSET 1015 not supported (see #2507)");
                      break;
                    case 25:
                      this._coreService.isCursorHidden = false;
                      break;
                    case 1048:
                      this.saveCursor();
                      break;
                    case 1049:
                      this.saveCursor();
                    case 47:
                    case 1047:
                      this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                      break;
                    case 2004:
                      this._coreService.decPrivateModes.bracketedPasteMode = true;
                  }
                return true;
              }, t3.prototype.resetMode = function(e4) {
                for (var t4 = 0; t4 < e4.length; t4++)
                  4 === e4.params[t4] && (this._coreService.modes.insertMode = false);
                return true;
              }, t3.prototype.resetModePrivate = function(e4) {
                for (var t4 = 0; t4 < e4.length; t4++)
                  switch (e4.params[t4]) {
                    case 1:
                      this._coreService.decPrivateModes.applicationCursorKeys = false;
                      break;
                    case 3:
                      this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                      break;
                    case 6:
                      this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
                      break;
                    case 7:
                      this._coreService.decPrivateModes.wraparound = false;
                      break;
                    case 12:
                      break;
                    case 45:
                      this._coreService.decPrivateModes.reverseWraparound = false;
                      break;
                    case 66:
                      this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
                      break;
                    case 9:
                    case 1e3:
                    case 1002:
                    case 1003:
                      this._coreMouseService.activeProtocol = "NONE";
                      break;
                    case 1004:
                      this._coreService.decPrivateModes.sendFocus = false;
                      break;
                    case 1005:
                      this._logService.debug("DECRST 1005 not supported (see #2507)");
                      break;
                    case 1006:
                      this._coreMouseService.activeEncoding = "DEFAULT";
                      break;
                    case 1015:
                      this._logService.debug("DECRST 1015 not supported (see #2507)");
                      break;
                    case 25:
                      this._coreService.isCursorHidden = true;
                      break;
                    case 1048:
                      this.restoreCursor();
                      break;
                    case 1049:
                    case 47:
                    case 1047:
                      this._bufferService.buffers.activateNormalBuffer(), 1049 === e4.params[t4] && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                      break;
                    case 2004:
                      this._coreService.decPrivateModes.bracketedPasteMode = false;
                  }
                return true;
              }, t3.prototype._updateAttrColor = function(e4, t4, r2, i2, n2) {
                return 2 === t4 ? (e4 |= 50331648, e4 &= -16777216, e4 |= v.AttributeData.fromColorRGB([r2, i2, n2])) : 5 === t4 && (e4 &= -50331904, e4 |= 33554432 | 255 & r2), e4;
              }, t3.prototype._extractColor = function(e4, t4, r2) {
                var i2 = [0, 0, -1, 0, 0, 0], n2 = 0, o2 = 0;
                do {
                  if (i2[o2 + n2] = e4.params[t4 + o2], e4.hasSubParams(t4 + o2)) {
                    var s2 = e4.getSubParams(t4 + o2), a2 = 0;
                    do {
                      5 === i2[1] && (n2 = 1), i2[o2 + a2 + 1 + n2] = s2[a2];
                    } while (++a2 < s2.length && a2 + o2 + 1 + n2 < i2.length);
                    break;
                  }
                  if (5 === i2[1] && o2 + n2 >= 2 || 2 === i2[1] && o2 + n2 >= 5)
                    break;
                  i2[1] && (n2 = 1);
                } while (++o2 + t4 < e4.length && o2 + n2 < i2.length);
                for (a2 = 2; a2 < i2.length; ++a2)
                  -1 === i2[a2] && (i2[a2] = 0);
                switch (i2[0]) {
                  case 38:
                    r2.fg = this._updateAttrColor(r2.fg, i2[1], i2[3], i2[4], i2[5]);
                    break;
                  case 48:
                    r2.bg = this._updateAttrColor(r2.bg, i2[1], i2[3], i2[4], i2[5]);
                    break;
                  case 58:
                    r2.extended = r2.extended.clone(), r2.extended.underlineColor = this._updateAttrColor(r2.extended.underlineColor, i2[1], i2[3], i2[4], i2[5]);
                }
                return o2;
              }, t3.prototype._processUnderline = function(e4, t4) {
                t4.extended = t4.extended.clone(), (!~e4 || e4 > 5) && (e4 = 1), t4.extended.underlineStyle = e4, t4.fg |= 268435456, 0 === e4 && (t4.fg &= -268435457), t4.updateExtended();
              }, t3.prototype.charAttributes = function(e4) {
                if (1 === e4.length && 0 === e4.params[0])
                  return this._curAttrData.fg = f.DEFAULT_ATTR_DATA.fg, this._curAttrData.bg = f.DEFAULT_ATTR_DATA.bg, true;
                for (var t4, r2 = e4.length, i2 = this._curAttrData, n2 = 0; n2 < r2; n2++)
                  (t4 = e4.params[n2]) >= 30 && t4 <= 37 ? (i2.fg &= -50331904, i2.fg |= 16777216 | t4 - 30) : t4 >= 40 && t4 <= 47 ? (i2.bg &= -50331904, i2.bg |= 16777216 | t4 - 40) : t4 >= 90 && t4 <= 97 ? (i2.fg &= -50331904, i2.fg |= 16777224 | t4 - 90) : t4 >= 100 && t4 <= 107 ? (i2.bg &= -50331904, i2.bg |= 16777224 | t4 - 100) : 0 === t4 ? (i2.fg = f.DEFAULT_ATTR_DATA.fg, i2.bg = f.DEFAULT_ATTR_DATA.bg) : 1 === t4 ? i2.fg |= 134217728 : 3 === t4 ? i2.bg |= 67108864 : 4 === t4 ? (i2.fg |= 268435456, this._processUnderline(e4.hasSubParams(n2) ? e4.getSubParams(n2)[0] : 1, i2)) : 5 === t4 ? i2.fg |= 536870912 : 7 === t4 ? i2.fg |= 67108864 : 8 === t4 ? i2.fg |= 1073741824 : 9 === t4 ? i2.fg |= 2147483648 : 2 === t4 ? i2.bg |= 134217728 : 21 === t4 ? this._processUnderline(2, i2) : 22 === t4 ? (i2.fg &= -134217729, i2.bg &= -134217729) : 23 === t4 ? i2.bg &= -67108865 : 24 === t4 ? i2.fg &= -268435457 : 25 === t4 ? i2.fg &= -536870913 : 27 === t4 ? i2.fg &= -67108865 : 28 === t4 ? i2.fg &= -1073741825 : 29 === t4 ? i2.fg &= 2147483647 : 39 === t4 ? (i2.fg &= -67108864, i2.fg |= 16777215 & f.DEFAULT_ATTR_DATA.fg) : 49 === t4 ? (i2.bg &= -67108864, i2.bg |= 16777215 & f.DEFAULT_ATTR_DATA.bg) : 38 === t4 || 48 === t4 || 58 === t4 ? n2 += this._extractColor(e4, n2, i2) : 59 === t4 ? (i2.extended = i2.extended.clone(), i2.extended.underlineColor = -1, i2.updateExtended()) : 100 === t4 ? (i2.fg &= -67108864, i2.fg |= 16777215 & f.DEFAULT_ATTR_DATA.fg, i2.bg &= -67108864, i2.bg |= 16777215 & f.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", t4);
                return true;
              }, t3.prototype.deviceStatus = function(e4) {
                switch (e4.params[0]) {
                  case 5:
                    this._coreService.triggerDataEvent(s.C0.ESC + "[0n");
                    break;
                  case 6:
                    var t4 = this._activeBuffer.y + 1, r2 = this._activeBuffer.x + 1;
                    this._coreService.triggerDataEvent(s.C0.ESC + "[" + t4 + ";" + r2 + "R");
                }
                return true;
              }, t3.prototype.deviceStatusPrivate = function(e4) {
                if (6 === e4.params[0]) {
                  var t4 = this._activeBuffer.y + 1, r2 = this._activeBuffer.x + 1;
                  this._coreService.triggerDataEvent(s.C0.ESC + "[?" + t4 + ";" + r2 + "R");
                }
                return true;
              }, t3.prototype.softReset = function(e4) {
                return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = f.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
              }, t3.prototype.setCursorStyle = function(e4) {
                var t4 = e4.params[0] || 1;
                switch (t4) {
                  case 1:
                  case 2:
                    this._optionsService.options.cursorStyle = "block";
                    break;
                  case 3:
                  case 4:
                    this._optionsService.options.cursorStyle = "underline";
                    break;
                  case 5:
                  case 6:
                    this._optionsService.options.cursorStyle = "bar";
                }
                var r2 = t4 % 2 == 1;
                return this._optionsService.options.cursorBlink = r2, true;
              }, t3.prototype.setScrollRegion = function(e4) {
                var t4, r2 = e4.params[0] || 1;
                return (e4.length < 2 || (t4 = e4.params[1]) > this._bufferService.rows || 0 === t4) && (t4 = this._bufferService.rows), t4 > r2 && (this._activeBuffer.scrollTop = r2 - 1, this._activeBuffer.scrollBottom = t4 - 1, this._setCursor(0, 0)), true;
              }, t3.prototype.windowOptions = function(e4) {
                if (!w(e4.params[0], this._optionsService.rawOptions.windowOptions))
                  return true;
                var t4 = e4.length > 1 ? e4.params[1] : 0;
                switch (e4.params[0]) {
                  case 14:
                    2 !== t4 && this._onRequestWindowsOptionsReport.fire(o.GET_WIN_SIZE_PIXELS);
                    break;
                  case 16:
                    this._onRequestWindowsOptionsReport.fire(o.GET_CELL_SIZE_PIXELS);
                    break;
                  case 18:
                    this._bufferService && this._coreService.triggerDataEvent(s.C0.ESC + "[8;" + this._bufferService.rows + ";" + this._bufferService.cols + "t");
                    break;
                  case 22:
                    0 !== t4 && 2 !== t4 || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t4 && 1 !== t4 || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                    break;
                  case 23:
                    0 !== t4 && 2 !== t4 || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t4 && 1 !== t4 || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
                }
                return true;
              }, t3.prototype.saveCursor = function(e4) {
                return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, true;
              }, t3.prototype.restoreCursor = function(e4) {
                return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), true;
              }, t3.prototype.setTitle = function(e4) {
                return this._windowTitle = e4, this._onTitleChange.fire(e4), true;
              }, t3.prototype.setIconName = function(e4) {
                return this._iconName = e4, true;
              }, t3.prototype.setOrReportIndexedColor = function(e4) {
                for (var t4 = [], r2 = e4.split(";"); r2.length > 1; ) {
                  var i2 = r2.shift(), n2 = r2.shift();
                  if (/^\d+$/.exec(i2)) {
                    var o2 = parseInt(i2);
                    if (0 <= o2 && o2 < 256)
                      if ("?" === n2)
                        t4.push({ type: 0, index: o2 });
                      else {
                        var s2 = (0, b.parseColor)(n2);
                        s2 && t4.push({ type: 1, index: o2, color: s2 });
                      }
                  }
                }
                return t4.length && this._onColor.fire(t4), true;
              }, t3.prototype._setOrReportSpecialColor = function(e4, t4) {
                for (var r2 = e4.split(";"), i2 = 0; i2 < r2.length && !(t4 >= this._specialColors.length); ++i2, ++t4)
                  if ("?" === r2[i2])
                    this._onColor.fire([{ type: 0, index: this._specialColors[t4] }]);
                  else {
                    var n2 = (0, b.parseColor)(r2[i2]);
                    n2 && this._onColor.fire([{ type: 1, index: this._specialColors[t4], color: n2 }]);
                  }
                return true;
              }, t3.prototype.setOrReportFgColor = function(e4) {
                return this._setOrReportSpecialColor(e4, 0);
              }, t3.prototype.setOrReportBgColor = function(e4) {
                return this._setOrReportSpecialColor(e4, 1);
              }, t3.prototype.setOrReportCursorColor = function(e4) {
                return this._setOrReportSpecialColor(e4, 2);
              }, t3.prototype.restoreIndexedColor = function(e4) {
                if (!e4)
                  return this._onColor.fire([{ type: 2 }]), true;
                for (var t4 = [], r2 = e4.split(";"), i2 = 0; i2 < r2.length; ++i2)
                  if (/^\d+$/.exec(r2[i2])) {
                    var n2 = parseInt(r2[i2]);
                    0 <= n2 && n2 < 256 && t4.push({ type: 2, index: n2 });
                  }
                return t4.length && this._onColor.fire(t4), true;
              }, t3.prototype.restoreFgColor = function(e4) {
                return this._onColor.fire([{ type: 2, index: 256 }]), true;
              }, t3.prototype.restoreBgColor = function(e4) {
                return this._onColor.fire([{ type: 2, index: 257 }]), true;
              }, t3.prototype.restoreCursorColor = function(e4) {
                return this._onColor.fire([{ type: 2, index: 258 }]), true;
              }, t3.prototype.nextLine = function() {
                return this._activeBuffer.x = 0, this.index(), true;
              }, t3.prototype.keypadApplicationMode = function() {
                return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
              }, t3.prototype.keypadNumericMode = function() {
                return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
              }, t3.prototype.selectDefaultCharset = function() {
                return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, a.DEFAULT_CHARSET), true;
              }, t3.prototype.selectCharset = function(e4) {
                return 2 !== e4.length ? (this.selectDefaultCharset(), true) : ("/" === e4[0] || this._charsetService.setgCharset(S[e4[0]], a.CHARSETS[e4[1]] || a.DEFAULT_CHARSET), true);
              }, t3.prototype.index = function() {
                return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), true;
              }, t3.prototype.tabSet = function() {
                return this._activeBuffer.tabs[this._activeBuffer.x] = true, true;
              }, t3.prototype.reverseIndex = function() {
                if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
                  var e4 = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
                  this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e4, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
                } else
                  this._activeBuffer.y--, this._restrictCursor();
                return true;
              }, t3.prototype.fullReset = function() {
                return this._parser.reset(), this._onRequestReset.fire(), true;
              }, t3.prototype.reset = function() {
                this._curAttrData = f.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = f.DEFAULT_ATTR_DATA.clone();
              }, t3.prototype._eraseAttrData = function() {
                return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
              }, t3.prototype.setgLevel = function(e4) {
                return this._charsetService.setgLevel(e4), true;
              }, t3.prototype.screenAlignmentPattern = function() {
                var e4 = new p.CellData();
                e4.content = 1 << 22 | "E".charCodeAt(0), e4.fg = this._curAttrData.fg, e4.bg = this._curAttrData.bg, this._setCursor(0, 0);
                for (var t4 = 0; t4 < this._bufferService.rows; ++t4) {
                  var r2 = this._activeBuffer.ybase + this._activeBuffer.y + t4, i2 = this._activeBuffer.lines.get(r2);
                  i2 && (i2.fill(e4), i2.isWrapped = false);
                }
                return this._dirtyRowService.markAllDirty(), this._setCursor(0, 0), true;
              }, t3;
            }(l.Disposable);
            t2.InputHandler = E;
          }, 844: function(e2, t2) {
            var r = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.getDisposeArrayDisposable = t2.disposeArray = t2.Disposable = void 0;
            var i = function() {
              function e3() {
                this._disposables = [], this._isDisposed = false;
              }
              return e3.prototype.dispose = function() {
                var e4, t3;
                this._isDisposed = true;
                try {
                  for (var i2 = r(this._disposables), n2 = i2.next(); !n2.done; n2 = i2.next())
                    n2.value.dispose();
                } catch (t4) {
                  e4 = { error: t4 };
                } finally {
                  try {
                    n2 && !n2.done && (t3 = i2.return) && t3.call(i2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
                this._disposables.length = 0;
              }, e3.prototype.register = function(e4) {
                return this._disposables.push(e4), e4;
              }, e3.prototype.unregister = function(e4) {
                var t3 = this._disposables.indexOf(e4);
                -1 !== t3 && this._disposables.splice(t3, 1);
              }, e3;
            }();
            function n(e3) {
              var t3, i2;
              try {
                for (var n2 = r(e3), o = n2.next(); !o.done; o = n2.next())
                  o.value.dispose();
              } catch (e4) {
                t3 = { error: e4 };
              } finally {
                try {
                  o && !o.done && (i2 = n2.return) && i2.call(n2);
                } finally {
                  if (t3)
                    throw t3.error;
                }
              }
              e3.length = 0;
            }
            t2.Disposable = i, t2.disposeArray = n, t2.getDisposeArrayDisposable = function(e3) {
              return { dispose: function() {
                return n(e3);
              } };
            };
          }, 6114: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.isLinux = t2.isWindows = t2.isIphone = t2.isIpad = t2.isMac = t2.isSafari = t2.isLegacyEdge = t2.isFirefox = void 0;
            var r = "undefined" == typeof navigator, i = r ? "node" : navigator.userAgent, n = r ? "node" : navigator.platform;
            t2.isFirefox = i.includes("Firefox"), t2.isLegacyEdge = i.includes("Edge"), t2.isSafari = /^((?!chrome|android).)*safari/i.test(i), t2.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(n), t2.isIpad = "iPad" === n, t2.isIphone = "iPhone" === n, t2.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(n), t2.isLinux = n.indexOf("Linux") >= 0;
          }, 6106: function(e2, t2) {
            var r = this && this.__generator || function(e3, t3) {
              var r2, i2, n, o, s = { label: 0, sent: function() {
                if (1 & n[0])
                  throw n[1];
                return n[1];
              }, trys: [], ops: [] };
              return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
              }), o;
              function a(o2) {
                return function(a2) {
                  return function(o3) {
                    if (r2)
                      throw new TypeError("Generator is already executing.");
                    for (; s; )
                      try {
                        if (r2 = 1, i2 && (n = 2 & o3[0] ? i2.return : o3[0] ? i2.throw || ((n = i2.return) && n.call(i2), 0) : i2.next) && !(n = n.call(i2, o3[1])).done)
                          return n;
                        switch (i2 = 0, n && (o3 = [2 & o3[0], n.value]), o3[0]) {
                          case 0:
                          case 1:
                            n = o3;
                            break;
                          case 4:
                            return s.label++, { value: o3[1], done: false };
                          case 5:
                            s.label++, i2 = o3[1], o3 = [0];
                            continue;
                          case 7:
                            o3 = s.ops.pop(), s.trys.pop();
                            continue;
                          default:
                            if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== o3[0] && 2 !== o3[0])) {
                              s = 0;
                              continue;
                            }
                            if (3 === o3[0] && (!n || o3[1] > n[0] && o3[1] < n[3])) {
                              s.label = o3[1];
                              break;
                            }
                            if (6 === o3[0] && s.label < n[1]) {
                              s.label = n[1], n = o3;
                              break;
                            }
                            if (n && s.label < n[2]) {
                              s.label = n[2], s.ops.push(o3);
                              break;
                            }
                            n[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        o3 = t3.call(e3, s);
                      } catch (e4) {
                        o3 = [6, e4], i2 = 0;
                      } finally {
                        r2 = n = 0;
                      }
                    if (5 & o3[0])
                      throw o3[1];
                    return { value: o3[0] ? o3[1] : void 0, done: true };
                  }([o2, a2]);
                };
              }
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.SortedList = void 0;
            var i = function() {
              function e3(e4) {
                this._getKey = e4, this._array = [];
              }
              return e3.prototype.clear = function() {
                this._array.length = 0;
              }, e3.prototype.insert = function(e4) {
                if (0 !== this._array.length) {
                  var t3 = this._search(this._getKey(e4), 0, this._array.length - 1);
                  this._array.splice(t3, 0, e4);
                } else
                  this._array.push(e4);
              }, e3.prototype.delete = function(e4) {
                if (0 === this._array.length)
                  return false;
                var t3 = this._getKey(e4), r2 = this._search(t3, 0, this._array.length - 1);
                if (this._getKey(this._array[r2]) !== t3)
                  return false;
                do {
                  if (this._array[r2] === e4)
                    return this._array.splice(r2, 1), true;
                } while (++r2 < this._array.length && this._getKey(this._array[r2]) === t3);
                return false;
              }, e3.prototype.getKeyIterator = function(e4) {
                var t3;
                return r(this, function(r2) {
                  switch (r2.label) {
                    case 0:
                      if (0 === this._array.length)
                        return [2];
                      if ((t3 = this._search(e4, 0, this._array.length - 1)) < 0 || t3 >= this._array.length)
                        return [2];
                      if (this._getKey(this._array[t3]) !== e4)
                        return [2];
                      r2.label = 1;
                    case 1:
                      return [4, this._array[t3]];
                    case 2:
                      r2.sent(), r2.label = 3;
                    case 3:
                      if (++t3 < this._array.length && this._getKey(this._array[t3]) === e4)
                        return [3, 1];
                      r2.label = 4;
                    case 4:
                      return [2];
                  }
                });
              }, e3.prototype.values = function() {
                return this._array.values();
              }, e3.prototype._search = function(e4, t3, r2) {
                if (r2 < t3)
                  return t3;
                var i2 = Math.floor((t3 + r2) / 2);
                if (this._getKey(this._array[i2]) > e4)
                  return this._search(e4, t3, i2 - 1);
                if (this._getKey(this._array[i2]) < e4)
                  return this._search(e4, i2 + 1, r2);
                for (; i2 > 0 && this._getKey(this._array[i2 - 1]) === e4; )
                  i2--;
                return i2;
              }, e3;
            }();
            t2.SortedList = i;
          }, 8273: (e2, t2) => {
            function r(e3, t3, r2, i) {
              if (void 0 === r2 && (r2 = 0), void 0 === i && (i = e3.length), r2 >= e3.length)
                return e3;
              r2 = (e3.length + r2) % e3.length, i = i >= e3.length ? e3.length : (e3.length + i) % e3.length;
              for (var n = r2; n < i; ++n)
                e3[n] = t3;
              return e3;
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.concat = t2.fillFallback = t2.fill = void 0, t2.fill = function(e3, t3, i, n) {
              return e3.fill ? e3.fill(t3, i, n) : r(e3, t3, i, n);
            }, t2.fillFallback = r, t2.concat = function(e3, t3) {
              var r2 = new e3.constructor(e3.length + t3.length);
              return r2.set(e3), r2.set(t3, e3.length), r2;
            };
          }, 9282: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.updateWindowsModeWrappedState = void 0;
            var i = r(643);
            t2.updateWindowsModeWrappedState = function(e3) {
              var t3 = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y - 1), r2 = null == t3 ? void 0 : t3.get(e3.cols - 1), n = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y);
              n && r2 && (n.isWrapped = r2[i.CHAR_DATA_CODE_INDEX] !== i.NULL_CELL_CODE && r2[i.CHAR_DATA_CODE_INDEX] !== i.WHITESPACE_CELL_CODE);
            };
          }, 3734: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ExtendedAttrs = t2.AttributeData = void 0;
            var r = function() {
              function e3() {
                this.fg = 0, this.bg = 0, this.extended = new i();
              }
              return e3.toColorRGB = function(e4) {
                return [e4 >>> 16 & 255, e4 >>> 8 & 255, 255 & e4];
              }, e3.fromColorRGB = function(e4) {
                return (255 & e4[0]) << 16 | (255 & e4[1]) << 8 | 255 & e4[2];
              }, e3.prototype.clone = function() {
                var t3 = new e3();
                return t3.fg = this.fg, t3.bg = this.bg, t3.extended = this.extended.clone(), t3;
              }, e3.prototype.isInverse = function() {
                return 67108864 & this.fg;
              }, e3.prototype.isBold = function() {
                return 134217728 & this.fg;
              }, e3.prototype.isUnderline = function() {
                return 268435456 & this.fg;
              }, e3.prototype.isBlink = function() {
                return 536870912 & this.fg;
              }, e3.prototype.isInvisible = function() {
                return 1073741824 & this.fg;
              }, e3.prototype.isItalic = function() {
                return 67108864 & this.bg;
              }, e3.prototype.isDim = function() {
                return 134217728 & this.bg;
              }, e3.prototype.isStrikethrough = function() {
                return 2147483648 & this.fg;
              }, e3.prototype.getFgColorMode = function() {
                return 50331648 & this.fg;
              }, e3.prototype.getBgColorMode = function() {
                return 50331648 & this.bg;
              }, e3.prototype.isFgRGB = function() {
                return 50331648 == (50331648 & this.fg);
              }, e3.prototype.isBgRGB = function() {
                return 50331648 == (50331648 & this.bg);
              }, e3.prototype.isFgPalette = function() {
                return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
              }, e3.prototype.isBgPalette = function() {
                return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
              }, e3.prototype.isFgDefault = function() {
                return 0 == (50331648 & this.fg);
              }, e3.prototype.isBgDefault = function() {
                return 0 == (50331648 & this.bg);
              }, e3.prototype.isAttributeDefault = function() {
                return 0 === this.fg && 0 === this.bg;
              }, e3.prototype.getFgColor = function() {
                switch (50331648 & this.fg) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.fg;
                  case 50331648:
                    return 16777215 & this.fg;
                  default:
                    return -1;
                }
              }, e3.prototype.getBgColor = function() {
                switch (50331648 & this.bg) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.bg;
                  case 50331648:
                    return 16777215 & this.bg;
                  default:
                    return -1;
                }
              }, e3.prototype.hasExtendedAttrs = function() {
                return 268435456 & this.bg;
              }, e3.prototype.updateExtended = function() {
                this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
              }, e3.prototype.getUnderlineColor = function() {
                if (268435456 & this.bg && ~this.extended.underlineColor)
                  switch (50331648 & this.extended.underlineColor) {
                    case 16777216:
                    case 33554432:
                      return 255 & this.extended.underlineColor;
                    case 50331648:
                      return 16777215 & this.extended.underlineColor;
                    default:
                      return this.getFgColor();
                  }
                return this.getFgColor();
              }, e3.prototype.getUnderlineColorMode = function() {
                return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
              }, e3.prototype.isUnderlineColorRGB = function() {
                return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
              }, e3.prototype.isUnderlineColorPalette = function() {
                return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
              }, e3.prototype.isUnderlineColorDefault = function() {
                return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
              }, e3.prototype.getUnderlineStyle = function() {
                return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
              }, e3;
            }();
            t2.AttributeData = r;
            var i = function() {
              function e3(e4, t3) {
                void 0 === e4 && (e4 = 0), void 0 === t3 && (t3 = -1), this.underlineStyle = e4, this.underlineColor = t3;
              }
              return e3.prototype.clone = function() {
                return new e3(this.underlineStyle, this.underlineColor);
              }, e3.prototype.isEmpty = function() {
                return 0 === this.underlineStyle;
              }, e3;
            }();
            t2.ExtendedAttrs = i;
          }, 9092: function(e2, t2, r) {
            var i = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s2 = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s2.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s2;
            }, n = this && this.__spreadArray || function(e3, t3, r2) {
              if (r2 || 2 === arguments.length)
                for (var i2, n2 = 0, o2 = t3.length; n2 < o2; n2++)
                  !i2 && n2 in t3 || (i2 || (i2 = Array.prototype.slice.call(t3, 0, n2)), i2[n2] = t3[n2]);
              return e3.concat(i2 || Array.prototype.slice.call(t3));
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferStringIterator = t2.Buffer = t2.MAX_BUFFER_SIZE = void 0;
            var o = r(6349), s = r(8437), a = r(511), c = r(643), l = r(4634), h = r(4863), u = r(7116), f = r(3734);
            t2.MAX_BUFFER_SIZE = 4294967295;
            var _ = function() {
              function e3(e4, t3, r2) {
                this._hasScrollback = e4, this._optionsService = t3, this._bufferService = r2, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = s.DEFAULT_ATTR_DATA.clone(), this.savedCharset = u.DEFAULT_CHARSET, this.markers = [], this._nullCell = a.CellData.fromCharData([0, c.NULL_CELL_CHAR, c.NULL_CELL_WIDTH, c.NULL_CELL_CODE]), this._whitespaceCell = a.CellData.fromCharData([0, c.WHITESPACE_CELL_CHAR, c.WHITESPACE_CELL_WIDTH, c.WHITESPACE_CELL_CODE]), this._isClearing = false, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new o.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
              }
              return e3.prototype.getNullCell = function(e4) {
                return e4 ? (this._nullCell.fg = e4.fg, this._nullCell.bg = e4.bg, this._nullCell.extended = e4.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new f.ExtendedAttrs()), this._nullCell;
              }, e3.prototype.getWhitespaceCell = function(e4) {
                return e4 ? (this._whitespaceCell.fg = e4.fg, this._whitespaceCell.bg = e4.bg, this._whitespaceCell.extended = e4.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new f.ExtendedAttrs()), this._whitespaceCell;
              }, e3.prototype.getBlankLine = function(e4, t3) {
                return new s.BufferLine(this._bufferService.cols, this.getNullCell(e4), t3);
              }, Object.defineProperty(e3.prototype, "hasScrollback", { get: function() {
                return this._hasScrollback && this.lines.maxLength > this._rows;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "isCursorInViewport", { get: function() {
                var e4 = this.ybase + this.y - this.ydisp;
                return e4 >= 0 && e4 < this._rows;
              }, enumerable: false, configurable: true }), e3.prototype._getCorrectBufferLength = function(e4) {
                if (!this._hasScrollback)
                  return e4;
                var r2 = e4 + this._optionsService.rawOptions.scrollback;
                return r2 > t2.MAX_BUFFER_SIZE ? t2.MAX_BUFFER_SIZE : r2;
              }, e3.prototype.fillViewportRows = function(e4) {
                if (0 === this.lines.length) {
                  void 0 === e4 && (e4 = s.DEFAULT_ATTR_DATA);
                  for (var t3 = this._rows; t3--; )
                    this.lines.push(this.getBlankLine(e4));
                }
              }, e3.prototype.clear = function() {
                this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new o.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
              }, e3.prototype.resize = function(e4, t3) {
                var r2 = this.getNullCell(s.DEFAULT_ATTR_DATA), i2 = this._getCorrectBufferLength(t3);
                if (i2 > this.lines.maxLength && (this.lines.maxLength = i2), this.lines.length > 0) {
                  if (this._cols < e4)
                    for (var n2 = 0; n2 < this.lines.length; n2++)
                      this.lines.get(n2).resize(e4, r2);
                  var o2 = 0;
                  if (this._rows < t3)
                    for (var a2 = this._rows; a2 < t3; a2++)
                      this.lines.length < t3 + this.ybase && (this._optionsService.rawOptions.windowsMode ? this.lines.push(new s.BufferLine(e4, r2)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + o2 + 1 ? (this.ybase--, o2++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new s.BufferLine(e4, r2)));
                  else
                    for (a2 = this._rows; a2 > t3; a2--)
                      this.lines.length > t3 + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                  if (i2 < this.lines.maxLength) {
                    var c2 = this.lines.length - i2;
                    c2 > 0 && (this.lines.trimStart(c2), this.ybase = Math.max(this.ybase - c2, 0), this.ydisp = Math.max(this.ydisp - c2, 0), this.savedY = Math.max(this.savedY - c2, 0)), this.lines.maxLength = i2;
                  }
                  this.x = Math.min(this.x, e4 - 1), this.y = Math.min(this.y, t3 - 1), o2 && (this.y += o2), this.savedX = Math.min(this.savedX, e4 - 1), this.scrollTop = 0;
                }
                if (this.scrollBottom = t3 - 1, this._isReflowEnabled && (this._reflow(e4, t3), this._cols > e4))
                  for (n2 = 0; n2 < this.lines.length; n2++)
                    this.lines.get(n2).resize(e4, r2);
                this._cols = e4, this._rows = t3;
              }, Object.defineProperty(e3.prototype, "_isReflowEnabled", { get: function() {
                return this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
              }, enumerable: false, configurable: true }), e3.prototype._reflow = function(e4, t3) {
                this._cols !== e4 && (e4 > this._cols ? this._reflowLarger(e4, t3) : this._reflowSmaller(e4, t3));
              }, e3.prototype._reflowLarger = function(e4, t3) {
                var r2 = (0, l.reflowLargerGetLinesToRemove)(this.lines, this._cols, e4, this.ybase + this.y, this.getNullCell(s.DEFAULT_ATTR_DATA));
                if (r2.length > 0) {
                  var i2 = (0, l.reflowLargerCreateNewLayout)(this.lines, r2);
                  (0, l.reflowLargerApplyNewLayout)(this.lines, i2.layout), this._reflowLargerAdjustViewport(e4, t3, i2.countRemoved);
                }
              }, e3.prototype._reflowLargerAdjustViewport = function(e4, t3, r2) {
                for (var i2 = this.getNullCell(s.DEFAULT_ATTR_DATA), n2 = r2; n2-- > 0; )
                  0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t3 && this.lines.push(new s.BufferLine(e4, i2))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
                this.savedY = Math.max(this.savedY - r2, 0);
              }, e3.prototype._reflowSmaller = function(e4, t3) {
                for (var r2 = this.getNullCell(s.DEFAULT_ATTR_DATA), o2 = [], a2 = 0, c2 = this.lines.length - 1; c2 >= 0; c2--) {
                  var h2 = this.lines.get(c2);
                  if (!(!h2 || !h2.isWrapped && h2.getTrimmedLength() <= e4)) {
                    for (var u2 = [h2]; h2.isWrapped && c2 > 0; )
                      h2 = this.lines.get(--c2), u2.unshift(h2);
                    var f2 = this.ybase + this.y;
                    if (!(f2 >= c2 && f2 < c2 + u2.length)) {
                      var _2, d2 = u2[u2.length - 1].getTrimmedLength(), p = (0, l.reflowSmallerGetNewLineLengths)(u2, this._cols, e4), v = p.length - u2.length;
                      _2 = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + v) : Math.max(0, this.lines.length - this.lines.maxLength + v);
                      for (var y = [], g = 0; g < v; g++) {
                        var m = this.getBlankLine(s.DEFAULT_ATTR_DATA, true);
                        y.push(m);
                      }
                      y.length > 0 && (o2.push({ start: c2 + u2.length + a2, newLines: y }), a2 += y.length), u2.push.apply(u2, n([], i(y), false));
                      var b = p.length - 1, S = p[b];
                      0 === S && (S = p[--b]);
                      for (var C = u2.length - v - 1, w = d2; C >= 0; ) {
                        var L = Math.min(w, S);
                        if (void 0 === u2[b])
                          break;
                        if (u2[b].copyCellsFrom(u2[C], w - L, S - L, L, true), 0 == (S -= L) && (S = p[--b]), 0 == (w -= L)) {
                          C--;
                          var E = Math.max(C, 0);
                          w = (0, l.getWrappedLineTrimmedLength)(u2, E, this._cols);
                        }
                      }
                      for (g = 0; g < u2.length; g++)
                        p[g] < e4 && u2[g].setCell(p[g], r2);
                      for (var x = v - _2; x-- > 0; )
                        0 === this.ybase ? this.y < t3 - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + a2) - t3 && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                      this.savedY = Math.min(this.savedY + v, this.ybase + t3 - 1);
                    }
                  }
                }
                if (o2.length > 0) {
                  var R = [], k = [];
                  for (g = 0; g < this.lines.length; g++)
                    k.push(this.lines.get(g));
                  var M = this.lines.length, A = M - 1, O = 0, D = o2[O];
                  this.lines.length = Math.min(this.lines.maxLength, this.lines.length + a2);
                  var T = 0;
                  for (g = Math.min(this.lines.maxLength - 1, M + a2 - 1); g >= 0; g--)
                    if (D && D.start > A + T) {
                      for (var B = D.newLines.length - 1; B >= 0; B--)
                        this.lines.set(g--, D.newLines[B]);
                      g++, R.push({ index: A + 1, amount: D.newLines.length }), T += D.newLines.length, D = o2[++O];
                    } else
                      this.lines.set(g, k[A--]);
                  var P = 0;
                  for (g = R.length - 1; g >= 0; g--)
                    R[g].index += P, this.lines.onInsertEmitter.fire(R[g]), P += R[g].amount;
                  var I = Math.max(0, M + a2 - this.lines.maxLength);
                  I > 0 && this.lines.onTrimEmitter.fire(I);
                }
              }, e3.prototype.stringIndexToBufferIndex = function(e4, t3, r2) {
                for (void 0 === r2 && (r2 = false); t3; ) {
                  var i2 = this.lines.get(e4);
                  if (!i2)
                    return [-1, -1];
                  for (var n2 = r2 ? i2.getTrimmedLength() : i2.length, o2 = 0; o2 < n2; ++o2)
                    if (i2.get(o2)[c.CHAR_DATA_WIDTH_INDEX] && (t3 -= i2.get(o2)[c.CHAR_DATA_CHAR_INDEX].length || 1), t3 < 0)
                      return [e4, o2];
                  e4++;
                }
                return [e4, 0];
              }, e3.prototype.translateBufferLineToString = function(e4, t3, r2, i2) {
                void 0 === r2 && (r2 = 0);
                var n2 = this.lines.get(e4);
                return n2 ? n2.translateToString(t3, r2, i2) : "";
              }, e3.prototype.getWrappedRangeForLine = function(e4) {
                for (var t3 = e4, r2 = e4; t3 > 0 && this.lines.get(t3).isWrapped; )
                  t3--;
                for (; r2 + 1 < this.lines.length && this.lines.get(r2 + 1).isWrapped; )
                  r2++;
                return { first: t3, last: r2 };
              }, e3.prototype.setupTabStops = function(e4) {
                for (null != e4 ? this.tabs[e4] || (e4 = this.prevStop(e4)) : (this.tabs = {}, e4 = 0); e4 < this._cols; e4 += this._optionsService.rawOptions.tabStopWidth)
                  this.tabs[e4] = true;
              }, e3.prototype.prevStop = function(e4) {
                for (null == e4 && (e4 = this.x); !this.tabs[--e4] && e4 > 0; )
                  ;
                return e4 >= this._cols ? this._cols - 1 : e4 < 0 ? 0 : e4;
              }, e3.prototype.nextStop = function(e4) {
                for (null == e4 && (e4 = this.x); !this.tabs[++e4] && e4 < this._cols; )
                  ;
                return e4 >= this._cols ? this._cols - 1 : e4 < 0 ? 0 : e4;
              }, e3.prototype.clearMarkers = function(e4) {
                this._isClearing = true;
                for (var t3 = 0; t3 < this.markers.length; t3++)
                  this.markers[t3].line === e4 && (this.markers[t3].dispose(), this.markers.splice(t3--, 1));
                this._isClearing = false;
              }, e3.prototype.clearAllMarkers = function() {
                this._isClearing = true;
                for (var e4 = 0; e4 < this.markers.length; e4++)
                  this.markers[e4].dispose(), this.markers.splice(e4--, 1);
                this._isClearing = false;
              }, e3.prototype.addMarker = function(e4) {
                var t3 = this, r2 = new h.Marker(e4);
                return this.markers.push(r2), r2.register(this.lines.onTrim(function(e5) {
                  r2.line -= e5, r2.line < 0 && r2.dispose();
                })), r2.register(this.lines.onInsert(function(e5) {
                  r2.line >= e5.index && (r2.line += e5.amount);
                })), r2.register(this.lines.onDelete(function(e5) {
                  r2.line >= e5.index && r2.line < e5.index + e5.amount && r2.dispose(), r2.line > e5.index && (r2.line -= e5.amount);
                })), r2.register(r2.onDispose(function() {
                  return t3._removeMarker(r2);
                })), r2;
              }, e3.prototype._removeMarker = function(e4) {
                this._isClearing || this.markers.splice(this.markers.indexOf(e4), 1);
              }, e3.prototype.iterator = function(e4, t3, r2, i2, n2) {
                return new d(this, e4, t3, r2, i2, n2);
              }, e3;
            }();
            t2.Buffer = _;
            var d = function() {
              function e3(e4, t3, r2, i2, n2, o2) {
                void 0 === r2 && (r2 = 0), void 0 === i2 && (i2 = e4.lines.length), void 0 === n2 && (n2 = 0), void 0 === o2 && (o2 = 0), this._buffer = e4, this._trimRight = t3, this._startIndex = r2, this._endIndex = i2, this._startOverscan = n2, this._endOverscan = o2, this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), this._current = this._startIndex;
              }
              return e3.prototype.hasNext = function() {
                return this._current < this._endIndex;
              }, e3.prototype.next = function() {
                var e4 = this._buffer.getWrappedRangeForLine(this._current);
                e4.first < this._startIndex - this._startOverscan && (e4.first = this._startIndex - this._startOverscan), e4.last > this._endIndex + this._endOverscan && (e4.last = this._endIndex + this._endOverscan), e4.first = Math.max(e4.first, 0), e4.last = Math.min(e4.last, this._buffer.lines.length);
                for (var t3 = "", r2 = e4.first; r2 <= e4.last; ++r2)
                  t3 += this._buffer.translateBufferLineToString(r2, this._trimRight);
                return this._current = e4.last + 1, { range: e4, content: t3 };
              }, e3;
            }();
            t2.BufferStringIterator = d;
          }, 8437: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLine = t2.DEFAULT_ATTR_DATA = void 0;
            var i = r(482), n = r(643), o = r(511), s = r(3734);
            t2.DEFAULT_ATTR_DATA = Object.freeze(new s.AttributeData());
            var a = function() {
              function e3(e4, t3, r2) {
                void 0 === r2 && (r2 = false), this.isWrapped = r2, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e4);
                for (var i2 = t3 || o.CellData.fromCharData([0, n.NULL_CELL_CHAR, n.NULL_CELL_WIDTH, n.NULL_CELL_CODE]), s2 = 0; s2 < e4; ++s2)
                  this.setCell(s2, i2);
                this.length = e4;
              }
              return e3.prototype.get = function(e4) {
                var t3 = this._data[3 * e4 + 0], r2 = 2097151 & t3;
                return [this._data[3 * e4 + 1], 2097152 & t3 ? this._combined[e4] : r2 ? (0, i.stringFromCodePoint)(r2) : "", t3 >> 22, 2097152 & t3 ? this._combined[e4].charCodeAt(this._combined[e4].length - 1) : r2];
              }, e3.prototype.set = function(e4, t3) {
                this._data[3 * e4 + 1] = t3[n.CHAR_DATA_ATTR_INDEX], t3[n.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e4] = t3[1], this._data[3 * e4 + 0] = 2097152 | e4 | t3[n.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e4 + 0] = t3[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t3[n.CHAR_DATA_WIDTH_INDEX] << 22;
              }, e3.prototype.getWidth = function(e4) {
                return this._data[3 * e4 + 0] >> 22;
              }, e3.prototype.hasWidth = function(e4) {
                return 12582912 & this._data[3 * e4 + 0];
              }, e3.prototype.getFg = function(e4) {
                return this._data[3 * e4 + 1];
              }, e3.prototype.getBg = function(e4) {
                return this._data[3 * e4 + 2];
              }, e3.prototype.hasContent = function(e4) {
                return 4194303 & this._data[3 * e4 + 0];
              }, e3.prototype.getCodePoint = function(e4) {
                var t3 = this._data[3 * e4 + 0];
                return 2097152 & t3 ? this._combined[e4].charCodeAt(this._combined[e4].length - 1) : 2097151 & t3;
              }, e3.prototype.isCombined = function(e4) {
                return 2097152 & this._data[3 * e4 + 0];
              }, e3.prototype.getString = function(e4) {
                var t3 = this._data[3 * e4 + 0];
                return 2097152 & t3 ? this._combined[e4] : 2097151 & t3 ? (0, i.stringFromCodePoint)(2097151 & t3) : "";
              }, e3.prototype.loadCell = function(e4, t3) {
                var r2 = 3 * e4;
                return t3.content = this._data[r2 + 0], t3.fg = this._data[r2 + 1], t3.bg = this._data[r2 + 2], 2097152 & t3.content && (t3.combinedData = this._combined[e4]), 268435456 & t3.bg && (t3.extended = this._extendedAttrs[e4]), t3;
              }, e3.prototype.setCell = function(e4, t3) {
                2097152 & t3.content && (this._combined[e4] = t3.combinedData), 268435456 & t3.bg && (this._extendedAttrs[e4] = t3.extended), this._data[3 * e4 + 0] = t3.content, this._data[3 * e4 + 1] = t3.fg, this._data[3 * e4 + 2] = t3.bg;
              }, e3.prototype.setCellFromCodePoint = function(e4, t3, r2, i2, n2, o2) {
                268435456 & n2 && (this._extendedAttrs[e4] = o2), this._data[3 * e4 + 0] = t3 | r2 << 22, this._data[3 * e4 + 1] = i2, this._data[3 * e4 + 2] = n2;
              }, e3.prototype.addCodepointToCell = function(e4, t3) {
                var r2 = this._data[3 * e4 + 0];
                2097152 & r2 ? this._combined[e4] += (0, i.stringFromCodePoint)(t3) : (2097151 & r2 ? (this._combined[e4] = (0, i.stringFromCodePoint)(2097151 & r2) + (0, i.stringFromCodePoint)(t3), r2 &= -2097152, r2 |= 2097152) : r2 = t3 | 1 << 22, this._data[3 * e4 + 0] = r2);
              }, e3.prototype.insertCells = function(e4, t3, r2, i2) {
                if ((e4 %= this.length) && 2 === this.getWidth(e4 - 1) && this.setCellFromCodePoint(e4 - 1, 0, 1, (null == i2 ? void 0 : i2.fg) || 0, (null == i2 ? void 0 : i2.bg) || 0, (null == i2 ? void 0 : i2.extended) || new s.ExtendedAttrs()), t3 < this.length - e4) {
                  for (var n2 = new o.CellData(), a2 = this.length - e4 - t3 - 1; a2 >= 0; --a2)
                    this.setCell(e4 + t3 + a2, this.loadCell(e4 + a2, n2));
                  for (a2 = 0; a2 < t3; ++a2)
                    this.setCell(e4 + a2, r2);
                } else
                  for (a2 = e4; a2 < this.length; ++a2)
                    this.setCell(a2, r2);
                2 === this.getWidth(this.length - 1) && this.setCellFromCodePoint(this.length - 1, 0, 1, (null == i2 ? void 0 : i2.fg) || 0, (null == i2 ? void 0 : i2.bg) || 0, (null == i2 ? void 0 : i2.extended) || new s.ExtendedAttrs());
              }, e3.prototype.deleteCells = function(e4, t3, r2, i2) {
                if (e4 %= this.length, t3 < this.length - e4) {
                  for (var n2 = new o.CellData(), a2 = 0; a2 < this.length - e4 - t3; ++a2)
                    this.setCell(e4 + a2, this.loadCell(e4 + t3 + a2, n2));
                  for (a2 = this.length - t3; a2 < this.length; ++a2)
                    this.setCell(a2, r2);
                } else
                  for (a2 = e4; a2 < this.length; ++a2)
                    this.setCell(a2, r2);
                e4 && 2 === this.getWidth(e4 - 1) && this.setCellFromCodePoint(e4 - 1, 0, 1, (null == i2 ? void 0 : i2.fg) || 0, (null == i2 ? void 0 : i2.bg) || 0, (null == i2 ? void 0 : i2.extended) || new s.ExtendedAttrs()), 0 !== this.getWidth(e4) || this.hasContent(e4) || this.setCellFromCodePoint(e4, 0, 1, (null == i2 ? void 0 : i2.fg) || 0, (null == i2 ? void 0 : i2.bg) || 0, (null == i2 ? void 0 : i2.extended) || new s.ExtendedAttrs());
              }, e3.prototype.replaceCells = function(e4, t3, r2, i2) {
                for (e4 && 2 === this.getWidth(e4 - 1) && this.setCellFromCodePoint(e4 - 1, 0, 1, (null == i2 ? void 0 : i2.fg) || 0, (null == i2 ? void 0 : i2.bg) || 0, (null == i2 ? void 0 : i2.extended) || new s.ExtendedAttrs()), t3 < this.length && 2 === this.getWidth(t3 - 1) && this.setCellFromCodePoint(t3, 0, 1, (null == i2 ? void 0 : i2.fg) || 0, (null == i2 ? void 0 : i2.bg) || 0, (null == i2 ? void 0 : i2.extended) || new s.ExtendedAttrs()); e4 < t3 && e4 < this.length; )
                  this.setCell(e4++, r2);
              }, e3.prototype.resize = function(e4, t3) {
                if (e4 !== this.length) {
                  if (e4 > this.length) {
                    var r2 = new Uint32Array(3 * e4);
                    this.length && (3 * e4 < this._data.length ? r2.set(this._data.subarray(0, 3 * e4)) : r2.set(this._data)), this._data = r2;
                    for (var i2 = this.length; i2 < e4; ++i2)
                      this.setCell(i2, t3);
                  } else if (e4) {
                    (r2 = new Uint32Array(3 * e4)).set(this._data.subarray(0, 3 * e4)), this._data = r2;
                    var n2 = Object.keys(this._combined);
                    for (i2 = 0; i2 < n2.length; i2++) {
                      var o2 = parseInt(n2[i2], 10);
                      o2 >= e4 && delete this._combined[o2];
                    }
                  } else
                    this._data = new Uint32Array(0), this._combined = {};
                  this.length = e4;
                }
              }, e3.prototype.fill = function(e4) {
                this._combined = {}, this._extendedAttrs = {};
                for (var t3 = 0; t3 < this.length; ++t3)
                  this.setCell(t3, e4);
              }, e3.prototype.copyFrom = function(e4) {
                for (var t3 in this.length !== e4.length ? this._data = new Uint32Array(e4._data) : this._data.set(e4._data), this.length = e4.length, this._combined = {}, e4._combined)
                  this._combined[t3] = e4._combined[t3];
                for (var t3 in this._extendedAttrs = {}, e4._extendedAttrs)
                  this._extendedAttrs[t3] = e4._extendedAttrs[t3];
                this.isWrapped = e4.isWrapped;
              }, e3.prototype.clone = function() {
                var t3 = new e3(0);
                for (var r2 in t3._data = new Uint32Array(this._data), t3.length = this.length, this._combined)
                  t3._combined[r2] = this._combined[r2];
                for (var r2 in this._extendedAttrs)
                  t3._extendedAttrs[r2] = this._extendedAttrs[r2];
                return t3.isWrapped = this.isWrapped, t3;
              }, e3.prototype.getTrimmedLength = function() {
                for (var e4 = this.length - 1; e4 >= 0; --e4)
                  if (4194303 & this._data[3 * e4 + 0])
                    return e4 + (this._data[3 * e4 + 0] >> 22);
                return 0;
              }, e3.prototype.copyCellsFrom = function(e4, t3, r2, i2, n2) {
                var o2 = e4._data;
                if (n2)
                  for (var s2 = i2 - 1; s2 >= 0; s2--)
                    for (var a2 = 0; a2 < 3; a2++)
                      this._data[3 * (r2 + s2) + a2] = o2[3 * (t3 + s2) + a2];
                else
                  for (s2 = 0; s2 < i2; s2++)
                    for (a2 = 0; a2 < 3; a2++)
                      this._data[3 * (r2 + s2) + a2] = o2[3 * (t3 + s2) + a2];
                var c = Object.keys(e4._combined);
                for (a2 = 0; a2 < c.length; a2++) {
                  var l = parseInt(c[a2], 10);
                  l >= t3 && (this._combined[l - t3 + r2] = e4._combined[l]);
                }
              }, e3.prototype.translateToString = function(e4, t3, r2) {
                void 0 === e4 && (e4 = false), void 0 === t3 && (t3 = 0), void 0 === r2 && (r2 = this.length), e4 && (r2 = Math.min(r2, this.getTrimmedLength()));
                for (var o2 = ""; t3 < r2; ) {
                  var s2 = this._data[3 * t3 + 0], a2 = 2097151 & s2;
                  o2 += 2097152 & s2 ? this._combined[t3] : a2 ? (0, i.stringFromCodePoint)(a2) : n.WHITESPACE_CELL_CHAR, t3 += s2 >> 22 || 1;
                }
                return o2;
              }, e3;
            }();
            t2.BufferLine = a;
          }, 4841: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.getRangeLength = void 0, t2.getRangeLength = function(e3, t3) {
              if (e3.start.y > e3.end.y)
                throw new Error("Buffer range end (" + e3.end.x + ", " + e3.end.y + ") cannot be before start (" + e3.start.x + ", " + e3.start.y + ")");
              return t3 * (e3.end.y - e3.start.y) + (e3.end.x - e3.start.x + 1);
            };
          }, 4634: (e2, t2) => {
            function r(e3, t3, r2) {
              if (t3 === e3.length - 1)
                return e3[t3].getTrimmedLength();
              var i = !e3[t3].hasContent(r2 - 1) && 1 === e3[t3].getWidth(r2 - 1), n = 2 === e3[t3 + 1].getWidth(0);
              return i && n ? r2 - 1 : r2;
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.getWrappedLineTrimmedLength = t2.reflowSmallerGetNewLineLengths = t2.reflowLargerApplyNewLayout = t2.reflowLargerCreateNewLayout = t2.reflowLargerGetLinesToRemove = void 0, t2.reflowLargerGetLinesToRemove = function(e3, t3, i, n, o) {
              for (var s = [], a = 0; a < e3.length - 1; a++) {
                var c = a, l = e3.get(++c);
                if (l.isWrapped) {
                  for (var h = [e3.get(a)]; c < e3.length && l.isWrapped; )
                    h.push(l), l = e3.get(++c);
                  if (n >= a && n < c)
                    a += h.length - 1;
                  else {
                    for (var u = 0, f = r(h, u, t3), _ = 1, d = 0; _ < h.length; ) {
                      var p = r(h, _, t3), v = p - d, y = i - f, g = Math.min(v, y);
                      h[u].copyCellsFrom(h[_], d, f, g, false), (f += g) === i && (u++, f = 0), (d += g) === p && (_++, d = 0), 0 === f && 0 !== u && 2 === h[u - 1].getWidth(i - 1) && (h[u].copyCellsFrom(h[u - 1], i - 1, f++, 1, false), h[u - 1].setCell(i - 1, o));
                    }
                    h[u].replaceCells(f, i, o);
                    for (var m = 0, b = h.length - 1; b > 0 && (b > u || 0 === h[b].getTrimmedLength()); b--)
                      m++;
                    m > 0 && (s.push(a + h.length - m), s.push(m)), a += h.length - 1;
                  }
                }
              }
              return s;
            }, t2.reflowLargerCreateNewLayout = function(e3, t3) {
              for (var r2 = [], i = 0, n = t3[i], o = 0, s = 0; s < e3.length; s++)
                if (n === s) {
                  var a = t3[++i];
                  e3.onDeleteEmitter.fire({ index: s - o, amount: a }), s += a - 1, o += a, n = t3[++i];
                } else
                  r2.push(s);
              return { layout: r2, countRemoved: o };
            }, t2.reflowLargerApplyNewLayout = function(e3, t3) {
              for (var r2 = [], i = 0; i < t3.length; i++)
                r2.push(e3.get(t3[i]));
              for (i = 0; i < r2.length; i++)
                e3.set(i, r2[i]);
              e3.length = t3.length;
            }, t2.reflowSmallerGetNewLineLengths = function(e3, t3, i) {
              for (var n = [], o = e3.map(function(i2, n2) {
                return r(e3, n2, t3);
              }).reduce(function(e4, t4) {
                return e4 + t4;
              }), s = 0, a = 0, c = 0; c < o; ) {
                if (o - c < i) {
                  n.push(o - c);
                  break;
                }
                s += i;
                var l = r(e3, a, t3);
                s > l && (s -= l, a++);
                var h = 2 === e3[a].getWidth(s - 1);
                h && s--;
                var u = h ? i - 1 : i;
                n.push(u), c += u;
              }
              return n;
            }, t2.getWrappedLineTrimmedLength = r;
          }, 5295: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            });
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferSet = void 0;
            var o = r(9092), s = r(8460), a = function(e3) {
              function t3(t4, r2) {
                var i2 = e3.call(this) || this;
                return i2._optionsService = t4, i2._bufferService = r2, i2._onBufferActivate = i2.register(new s.EventEmitter()), i2.reset(), i2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onBufferActivate", { get: function() {
                return this._onBufferActivate.event;
              }, enumerable: false, configurable: true }), t3.prototype.reset = function() {
                this._normal = new o.Buffer(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new o.Buffer(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
              }, Object.defineProperty(t3.prototype, "alt", { get: function() {
                return this._alt;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "active", { get: function() {
                return this._activeBuffer;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "normal", { get: function() {
                return this._normal;
              }, enumerable: false, configurable: true }), t3.prototype.activateNormalBuffer = function() {
                this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
              }, t3.prototype.activateAltBuffer = function(e4) {
                this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e4), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
              }, t3.prototype.resize = function(e4, t4) {
                this._normal.resize(e4, t4), this._alt.resize(e4, t4);
              }, t3.prototype.setupTabStops = function(e4) {
                this._normal.setupTabStops(e4), this._alt.setupTabStops(e4);
              }, t3;
            }(r(844).Disposable);
            t2.BufferSet = a;
          }, 511: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            });
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CellData = void 0;
            var o = r(482), s = r(643), a = r(3734), c = function(e3) {
              function t3() {
                var t4 = null !== e3 && e3.apply(this, arguments) || this;
                return t4.content = 0, t4.fg = 0, t4.bg = 0, t4.extended = new a.ExtendedAttrs(), t4.combinedData = "", t4;
              }
              return n(t3, e3), t3.fromCharData = function(e4) {
                var r2 = new t3();
                return r2.setFromCharData(e4), r2;
              }, t3.prototype.isCombined = function() {
                return 2097152 & this.content;
              }, t3.prototype.getWidth = function() {
                return this.content >> 22;
              }, t3.prototype.getChars = function() {
                return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, o.stringFromCodePoint)(2097151 & this.content) : "";
              }, t3.prototype.getCode = function() {
                return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
              }, t3.prototype.setFromCharData = function(e4) {
                this.fg = e4[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                var t4 = false;
                if (e4[s.CHAR_DATA_CHAR_INDEX].length > 2)
                  t4 = true;
                else if (2 === e4[s.CHAR_DATA_CHAR_INDEX].length) {
                  var r2 = e4[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                  if (55296 <= r2 && r2 <= 56319) {
                    var i2 = e4[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                    56320 <= i2 && i2 <= 57343 ? this.content = 1024 * (r2 - 55296) + i2 - 56320 + 65536 | e4[s.CHAR_DATA_WIDTH_INDEX] << 22 : t4 = true;
                  } else
                    t4 = true;
                } else
                  this.content = e4[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e4[s.CHAR_DATA_WIDTH_INDEX] << 22;
                t4 && (this.combinedData = e4[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e4[s.CHAR_DATA_WIDTH_INDEX] << 22);
              }, t3.prototype.getAsCharData = function() {
                return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
              }, t3;
            }(a.AttributeData);
            t2.CellData = c;
          }, 643: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.WHITESPACE_CELL_CODE = t2.WHITESPACE_CELL_WIDTH = t2.WHITESPACE_CELL_CHAR = t2.NULL_CELL_CODE = t2.NULL_CELL_WIDTH = t2.NULL_CELL_CHAR = t2.CHAR_DATA_CODE_INDEX = t2.CHAR_DATA_WIDTH_INDEX = t2.CHAR_DATA_CHAR_INDEX = t2.CHAR_DATA_ATTR_INDEX = t2.DEFAULT_ATTR = t2.DEFAULT_COLOR = void 0, t2.DEFAULT_COLOR = 256, t2.DEFAULT_ATTR = 256 | t2.DEFAULT_COLOR << 9, t2.CHAR_DATA_ATTR_INDEX = 0, t2.CHAR_DATA_CHAR_INDEX = 1, t2.CHAR_DATA_WIDTH_INDEX = 2, t2.CHAR_DATA_CODE_INDEX = 3, t2.NULL_CELL_CHAR = "", t2.NULL_CELL_WIDTH = 1, t2.NULL_CELL_CODE = 0, t2.WHITESPACE_CELL_CHAR = " ", t2.WHITESPACE_CELL_WIDTH = 1, t2.WHITESPACE_CELL_CODE = 32;
          }, 4863: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            });
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Marker = void 0;
            var o = r(8460), s = function(e3) {
              function t3(r2) {
                var i2 = e3.call(this) || this;
                return i2.line = r2, i2._id = t3._nextId++, i2.isDisposed = false, i2._onDispose = new o.EventEmitter(), i2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "id", { get: function() {
                return this._id;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onDispose", { get: function() {
                return this._onDispose.event;
              }, enumerable: false, configurable: true }), t3.prototype.dispose = function() {
                this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), e3.prototype.dispose.call(this));
              }, t3._nextId = 1, t3;
            }(r(844).Disposable);
            t2.Marker = s;
          }, 7116: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DEFAULT_CHARSET = t2.CHARSETS = void 0, t2.CHARSETS = {}, t2.DEFAULT_CHARSET = t2.CHARSETS.B, t2.CHARSETS[0] = { "`": "\u25C6", a: "\u2592", b: "\u2409", c: "\u240C", d: "\u240D", e: "\u240A", f: "\xB0", g: "\xB1", h: "\u2424", i: "\u240B", j: "\u2518", k: "\u2510", l: "\u250C", m: "\u2514", n: "\u253C", o: "\u23BA", p: "\u23BB", q: "\u2500", r: "\u23BC", s: "\u23BD", t: "\u251C", u: "\u2524", v: "\u2534", w: "\u252C", x: "\u2502", y: "\u2264", z: "\u2265", "{": "\u03C0", "|": "\u2260", "}": "\xA3", "~": "\xB7" }, t2.CHARSETS.A = { "#": "\xA3" }, t2.CHARSETS.B = void 0, t2.CHARSETS[4] = { "#": "\xA3", "@": "\xBE", "[": "ij", "\\": "\xBD", "]": "|", "{": "\xA8", "|": "f", "}": "\xBC", "~": "\xB4" }, t2.CHARSETS.C = t2.CHARSETS[5] = { "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.R = { "#": "\xA3", "@": "\xE0", "[": "\xB0", "\\": "\xE7", "]": "\xA7", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xA8" }, t2.CHARSETS.Q = { "@": "\xE0", "[": "\xE2", "\\": "\xE7", "]": "\xEA", "^": "\xEE", "`": "\xF4", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xFB" }, t2.CHARSETS.K = { "@": "\xA7", "[": "\xC4", "\\": "\xD6", "]": "\xDC", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xDF" }, t2.CHARSETS.Y = { "#": "\xA3", "@": "\xA7", "[": "\xB0", "\\": "\xE7", "]": "\xE9", "`": "\xF9", "{": "\xE0", "|": "\xF2", "}": "\xE8", "~": "\xEC" }, t2.CHARSETS.E = t2.CHARSETS[6] = { "@": "\xC4", "[": "\xC6", "\\": "\xD8", "]": "\xC5", "^": "\xDC", "`": "\xE4", "{": "\xE6", "|": "\xF8", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.Z = { "#": "\xA3", "@": "\xA7", "[": "\xA1", "\\": "\xD1", "]": "\xBF", "{": "\xB0", "|": "\xF1", "}": "\xE7" }, t2.CHARSETS.H = t2.CHARSETS[7] = { "@": "\xC9", "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS["="] = { "#": "\xF9", "@": "\xE0", "[": "\xE9", "\\": "\xE7", "]": "\xEA", "^": "\xEE", _: "\xE8", "`": "\xF4", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xFB" };
          }, 2584: (e2, t2) => {
            var r, i;
            Object.defineProperty(t2, "__esModule", { value: true }), t2.C1_ESCAPED = t2.C1 = t2.C0 = void 0, function(e3) {
              e3.NUL = "\0", e3.SOH = "", e3.STX = "", e3.ETX = "", e3.EOT = "", e3.ENQ = "", e3.ACK = "", e3.BEL = "\x07", e3.BS = "\b", e3.HT = "	", e3.LF = "\n", e3.VT = "\v", e3.FF = "\f", e3.CR = "\r", e3.SO = "", e3.SI = "", e3.DLE = "", e3.DC1 = "", e3.DC2 = "", e3.DC3 = "", e3.DC4 = "", e3.NAK = "", e3.SYN = "", e3.ETB = "", e3.CAN = "", e3.EM = "", e3.SUB = "", e3.ESC = "\x1B", e3.FS = "", e3.GS = "", e3.RS = "", e3.US = "", e3.SP = " ", e3.DEL = "\x7F";
            }(r = t2.C0 || (t2.C0 = {})), (i = t2.C1 || (t2.C1 = {})).PAD = "\x80", i.HOP = "\x81", i.BPH = "\x82", i.NBH = "\x83", i.IND = "\x84", i.NEL = "\x85", i.SSA = "\x86", i.ESA = "\x87", i.HTS = "\x88", i.HTJ = "\x89", i.VTS = "\x8A", i.PLD = "\x8B", i.PLU = "\x8C", i.RI = "\x8D", i.SS2 = "\x8E", i.SS3 = "\x8F", i.DCS = "\x90", i.PU1 = "\x91", i.PU2 = "\x92", i.STS = "\x93", i.CCH = "\x94", i.MW = "\x95", i.SPA = "\x96", i.EPA = "\x97", i.SOS = "\x98", i.SGCI = "\x99", i.SCI = "\x9A", i.CSI = "\x9B", i.ST = "\x9C", i.OSC = "\x9D", i.PM = "\x9E", i.APC = "\x9F", (t2.C1_ESCAPED || (t2.C1_ESCAPED = {})).ST = r.ESC + "\\";
          }, 7399: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.evaluateKeyboardEvent = void 0;
            var i = r(2584), n = { 48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"'] };
            t2.evaluateKeyboardEvent = function(e3, t3, r2, o) {
              var s = { type: 0, cancel: false, key: void 0 }, a = (e3.shiftKey ? 1 : 0) | (e3.altKey ? 2 : 0) | (e3.ctrlKey ? 4 : 0) | (e3.metaKey ? 8 : 0);
              switch (e3.keyCode) {
                case 0:
                  "UIKeyInputUpArrow" === e3.key ? s.key = t3 ? i.C0.ESC + "OA" : i.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e3.key ? s.key = t3 ? i.C0.ESC + "OD" : i.C0.ESC + "[D" : "UIKeyInputRightArrow" === e3.key ? s.key = t3 ? i.C0.ESC + "OC" : i.C0.ESC + "[C" : "UIKeyInputDownArrow" === e3.key && (s.key = t3 ? i.C0.ESC + "OB" : i.C0.ESC + "[B");
                  break;
                case 8:
                  if (e3.shiftKey) {
                    s.key = i.C0.BS;
                    break;
                  }
                  if (e3.altKey) {
                    s.key = i.C0.ESC + i.C0.DEL;
                    break;
                  }
                  s.key = i.C0.DEL;
                  break;
                case 9:
                  if (e3.shiftKey) {
                    s.key = i.C0.ESC + "[Z";
                    break;
                  }
                  s.key = i.C0.HT, s.cancel = true;
                  break;
                case 13:
                  s.key = e3.altKey ? i.C0.ESC + i.C0.CR : i.C0.CR, s.cancel = true;
                  break;
                case 27:
                  s.key = i.C0.ESC, e3.altKey && (s.key = i.C0.ESC + i.C0.ESC), s.cancel = true;
                  break;
                case 37:
                  if (e3.metaKey)
                    break;
                  a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "D", s.key === i.C0.ESC + "[1;3D" && (s.key = i.C0.ESC + (r2 ? "b" : "[1;5D"))) : s.key = t3 ? i.C0.ESC + "OD" : i.C0.ESC + "[D";
                  break;
                case 39:
                  if (e3.metaKey)
                    break;
                  a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "C", s.key === i.C0.ESC + "[1;3C" && (s.key = i.C0.ESC + (r2 ? "f" : "[1;5C"))) : s.key = t3 ? i.C0.ESC + "OC" : i.C0.ESC + "[C";
                  break;
                case 38:
                  if (e3.metaKey)
                    break;
                  a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "A", r2 || s.key !== i.C0.ESC + "[1;3A" || (s.key = i.C0.ESC + "[1;5A")) : s.key = t3 ? i.C0.ESC + "OA" : i.C0.ESC + "[A";
                  break;
                case 40:
                  if (e3.metaKey)
                    break;
                  a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "B", r2 || s.key !== i.C0.ESC + "[1;3B" || (s.key = i.C0.ESC + "[1;5B")) : s.key = t3 ? i.C0.ESC + "OB" : i.C0.ESC + "[B";
                  break;
                case 45:
                  e3.shiftKey || e3.ctrlKey || (s.key = i.C0.ESC + "[2~");
                  break;
                case 46:
                  s.key = a ? i.C0.ESC + "[3;" + (a + 1) + "~" : i.C0.ESC + "[3~";
                  break;
                case 36:
                  s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "H" : t3 ? i.C0.ESC + "OH" : i.C0.ESC + "[H";
                  break;
                case 35:
                  s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "F" : t3 ? i.C0.ESC + "OF" : i.C0.ESC + "[F";
                  break;
                case 33:
                  e3.shiftKey ? s.type = 2 : e3.ctrlKey ? s.key = i.C0.ESC + "[5;" + (a + 1) + "~" : s.key = i.C0.ESC + "[5~";
                  break;
                case 34:
                  e3.shiftKey ? s.type = 3 : e3.ctrlKey ? s.key = i.C0.ESC + "[6;" + (a + 1) + "~" : s.key = i.C0.ESC + "[6~";
                  break;
                case 112:
                  s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "P" : i.C0.ESC + "OP";
                  break;
                case 113:
                  s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "Q" : i.C0.ESC + "OQ";
                  break;
                case 114:
                  s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "R" : i.C0.ESC + "OR";
                  break;
                case 115:
                  s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "S" : i.C0.ESC + "OS";
                  break;
                case 116:
                  s.key = a ? i.C0.ESC + "[15;" + (a + 1) + "~" : i.C0.ESC + "[15~";
                  break;
                case 117:
                  s.key = a ? i.C0.ESC + "[17;" + (a + 1) + "~" : i.C0.ESC + "[17~";
                  break;
                case 118:
                  s.key = a ? i.C0.ESC + "[18;" + (a + 1) + "~" : i.C0.ESC + "[18~";
                  break;
                case 119:
                  s.key = a ? i.C0.ESC + "[19;" + (a + 1) + "~" : i.C0.ESC + "[19~";
                  break;
                case 120:
                  s.key = a ? i.C0.ESC + "[20;" + (a + 1) + "~" : i.C0.ESC + "[20~";
                  break;
                case 121:
                  s.key = a ? i.C0.ESC + "[21;" + (a + 1) + "~" : i.C0.ESC + "[21~";
                  break;
                case 122:
                  s.key = a ? i.C0.ESC + "[23;" + (a + 1) + "~" : i.C0.ESC + "[23~";
                  break;
                case 123:
                  s.key = a ? i.C0.ESC + "[24;" + (a + 1) + "~" : i.C0.ESC + "[24~";
                  break;
                default:
                  if (!e3.ctrlKey || e3.shiftKey || e3.altKey || e3.metaKey)
                    if (r2 && !o || !e3.altKey || e3.metaKey)
                      !r2 || e3.altKey || e3.ctrlKey || e3.shiftKey || !e3.metaKey ? e3.key && !e3.ctrlKey && !e3.altKey && !e3.metaKey && e3.keyCode >= 48 && 1 === e3.key.length ? s.key = e3.key : e3.key && e3.ctrlKey && ("_" === e3.key && (s.key = i.C0.US), "@" === e3.key && (s.key = i.C0.NUL)) : 65 === e3.keyCode && (s.type = 1);
                    else {
                      var c = n[e3.keyCode], l = null == c ? void 0 : c[e3.shiftKey ? 1 : 0];
                      if (l)
                        s.key = i.C0.ESC + l;
                      else if (e3.keyCode >= 65 && e3.keyCode <= 90) {
                        var h = e3.ctrlKey ? e3.keyCode - 64 : e3.keyCode + 32, u = String.fromCharCode(h);
                        e3.shiftKey && (u = u.toUpperCase()), s.key = i.C0.ESC + u;
                      } else
                        "Dead" === e3.key && e3.code.startsWith("Key") && (u = e3.code.slice(3, 4), e3.shiftKey || (u = u.toLowerCase()), s.key = i.C0.ESC + u, s.cancel = true);
                    }
                  else
                    e3.keyCode >= 65 && e3.keyCode <= 90 ? s.key = String.fromCharCode(e3.keyCode - 64) : 32 === e3.keyCode ? s.key = i.C0.NUL : e3.keyCode >= 51 && e3.keyCode <= 55 ? s.key = String.fromCharCode(e3.keyCode - 51 + 27) : 56 === e3.keyCode ? s.key = i.C0.DEL : 219 === e3.keyCode ? s.key = i.C0.ESC : 220 === e3.keyCode ? s.key = i.C0.FS : 221 === e3.keyCode && (s.key = i.C0.GS);
              }
              return s;
            };
          }, 482: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Utf8ToUtf32 = t2.StringToUtf32 = t2.utf32ToString = t2.stringFromCodePoint = void 0, t2.stringFromCodePoint = function(e3) {
              return e3 > 65535 ? (e3 -= 65536, String.fromCharCode(55296 + (e3 >> 10)) + String.fromCharCode(e3 % 1024 + 56320)) : String.fromCharCode(e3);
            }, t2.utf32ToString = function(e3, t3, r2) {
              void 0 === t3 && (t3 = 0), void 0 === r2 && (r2 = e3.length);
              for (var i2 = "", n = t3; n < r2; ++n) {
                var o = e3[n];
                o > 65535 ? (o -= 65536, i2 += String.fromCharCode(55296 + (o >> 10)) + String.fromCharCode(o % 1024 + 56320)) : i2 += String.fromCharCode(o);
              }
              return i2;
            };
            var r = function() {
              function e3() {
                this._interim = 0;
              }
              return e3.prototype.clear = function() {
                this._interim = 0;
              }, e3.prototype.decode = function(e4, t3) {
                var r2 = e4.length;
                if (!r2)
                  return 0;
                var i2 = 0, n = 0;
                this._interim && (56320 <= (a = e4.charCodeAt(n++)) && a <= 57343 ? t3[i2++] = 1024 * (this._interim - 55296) + a - 56320 + 65536 : (t3[i2++] = this._interim, t3[i2++] = a), this._interim = 0);
                for (var o = n; o < r2; ++o) {
                  var s = e4.charCodeAt(o);
                  if (55296 <= s && s <= 56319) {
                    if (++o >= r2)
                      return this._interim = s, i2;
                    var a;
                    56320 <= (a = e4.charCodeAt(o)) && a <= 57343 ? t3[i2++] = 1024 * (s - 55296) + a - 56320 + 65536 : (t3[i2++] = s, t3[i2++] = a);
                  } else
                    65279 !== s && (t3[i2++] = s);
                }
                return i2;
              }, e3;
            }();
            t2.StringToUtf32 = r;
            var i = function() {
              function e3() {
                this.interim = new Uint8Array(3);
              }
              return e3.prototype.clear = function() {
                this.interim.fill(0);
              }, e3.prototype.decode = function(e4, t3) {
                var r2 = e4.length;
                if (!r2)
                  return 0;
                var i2, n, o, s, a = 0, c = 0, l = 0;
                if (this.interim[0]) {
                  var h = false, u = this.interim[0];
                  u &= 192 == (224 & u) ? 31 : 224 == (240 & u) ? 15 : 7;
                  for (var f = 0, _ = void 0; (_ = 63 & this.interim[++f]) && f < 4; )
                    u <<= 6, u |= _;
                  for (var d = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, p = d - f; l < p; ) {
                    if (l >= r2)
                      return 0;
                    if (128 != (192 & (_ = e4[l++]))) {
                      l--, h = true;
                      break;
                    }
                    this.interim[f++] = _, u <<= 6, u |= 63 & _;
                  }
                  h || (2 === d ? u < 128 ? l-- : t3[a++] = u : 3 === d ? u < 2048 || u >= 55296 && u <= 57343 || 65279 === u || (t3[a++] = u) : u < 65536 || u > 1114111 || (t3[a++] = u)), this.interim.fill(0);
                }
                for (var v = r2 - 4, y = l; y < r2; ) {
                  for (; !(!(y < v) || 128 & (i2 = e4[y]) || 128 & (n = e4[y + 1]) || 128 & (o = e4[y + 2]) || 128 & (s = e4[y + 3])); )
                    t3[a++] = i2, t3[a++] = n, t3[a++] = o, t3[a++] = s, y += 4;
                  if ((i2 = e4[y++]) < 128)
                    t3[a++] = i2;
                  else if (192 == (224 & i2)) {
                    if (y >= r2)
                      return this.interim[0] = i2, a;
                    if (128 != (192 & (n = e4[y++]))) {
                      y--;
                      continue;
                    }
                    if ((c = (31 & i2) << 6 | 63 & n) < 128) {
                      y--;
                      continue;
                    }
                    t3[a++] = c;
                  } else if (224 == (240 & i2)) {
                    if (y >= r2)
                      return this.interim[0] = i2, a;
                    if (128 != (192 & (n = e4[y++]))) {
                      y--;
                      continue;
                    }
                    if (y >= r2)
                      return this.interim[0] = i2, this.interim[1] = n, a;
                    if (128 != (192 & (o = e4[y++]))) {
                      y--;
                      continue;
                    }
                    if ((c = (15 & i2) << 12 | (63 & n) << 6 | 63 & o) < 2048 || c >= 55296 && c <= 57343 || 65279 === c)
                      continue;
                    t3[a++] = c;
                  } else if (240 == (248 & i2)) {
                    if (y >= r2)
                      return this.interim[0] = i2, a;
                    if (128 != (192 & (n = e4[y++]))) {
                      y--;
                      continue;
                    }
                    if (y >= r2)
                      return this.interim[0] = i2, this.interim[1] = n, a;
                    if (128 != (192 & (o = e4[y++]))) {
                      y--;
                      continue;
                    }
                    if (y >= r2)
                      return this.interim[0] = i2, this.interim[1] = n, this.interim[2] = o, a;
                    if (128 != (192 & (s = e4[y++]))) {
                      y--;
                      continue;
                    }
                    if ((c = (7 & i2) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & s) < 65536 || c > 1114111)
                      continue;
                    t3[a++] = c;
                  }
                }
                return a;
              }, e3;
            }();
            t2.Utf8ToUtf32 = i;
          }, 225: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeV6 = void 0;
            var i, n = r(8273), o = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], s = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]], a = function() {
              function e3() {
                if (this.version = "6", !i) {
                  i = new Uint8Array(65536), (0, n.fill)(i, 1), i[0] = 0, (0, n.fill)(i, 0, 1, 32), (0, n.fill)(i, 0, 127, 160), (0, n.fill)(i, 2, 4352, 4448), i[9001] = 2, i[9002] = 2, (0, n.fill)(i, 2, 11904, 42192), i[12351] = 1, (0, n.fill)(i, 2, 44032, 55204), (0, n.fill)(i, 2, 63744, 64256), (0, n.fill)(i, 2, 65040, 65050), (0, n.fill)(i, 2, 65072, 65136), (0, n.fill)(i, 2, 65280, 65377), (0, n.fill)(i, 2, 65504, 65511);
                  for (var e4 = 0; e4 < o.length; ++e4)
                    (0, n.fill)(i, 0, o[e4][0], o[e4][1] + 1);
                }
              }
              return e3.prototype.wcwidth = function(e4) {
                return e4 < 32 ? 0 : e4 < 127 ? 1 : e4 < 65536 ? i[e4] : function(e5, t3) {
                  var r2, i2 = 0, n2 = t3.length - 1;
                  if (e5 < t3[0][0] || e5 > t3[n2][1])
                    return false;
                  for (; n2 >= i2; )
                    if (e5 > t3[r2 = i2 + n2 >> 1][1])
                      i2 = r2 + 1;
                    else {
                      if (!(e5 < t3[r2][0]))
                        return true;
                      n2 = r2 - 1;
                    }
                  return false;
                }(e4, s) ? 0 : e4 >= 131072 && e4 <= 196605 || e4 >= 196608 && e4 <= 262141 ? 2 : 1;
              }, e3;
            }();
            t2.UnicodeV6 = a;
          }, 5981: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.WriteBuffer = void 0;
            var i = r(8460), n = "undefined" == typeof queueMicrotask ? function(e3) {
              Promise.resolve().then(e3);
            } : queueMicrotask, o = function() {
              function e3(e4) {
                this._action = e4, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = false, this._syncCalls = 0, this._onWriteParsed = new i.EventEmitter();
              }
              return Object.defineProperty(e3.prototype, "onWriteParsed", { get: function() {
                return this._onWriteParsed.event;
              }, enumerable: false, configurable: true }), e3.prototype.writeSync = function(e4, t3) {
                if (void 0 !== t3 && this._syncCalls > t3)
                  this._syncCalls = 0;
                else if (this._pendingData += e4.length, this._writeBuffer.push(e4), this._callbacks.push(void 0), this._syncCalls++, !this._isSyncWriting) {
                  var r2;
                  for (this._isSyncWriting = true; r2 = this._writeBuffer.shift(); ) {
                    this._action(r2);
                    var i2 = this._callbacks.shift();
                    i2 && i2();
                  }
                  this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = false, this._syncCalls = 0;
                }
              }, e3.prototype.write = function(e4, t3) {
                var r2 = this;
                if (this._pendingData > 5e7)
                  throw new Error("write data discarded, use flow control to avoid losing data");
                this._writeBuffer.length || (this._bufferOffset = 0, setTimeout(function() {
                  return r2._innerWrite();
                })), this._pendingData += e4.length, this._writeBuffer.push(e4), this._callbacks.push(t3);
              }, e3.prototype._innerWrite = function(e4, t3) {
                var r2 = this;
                void 0 === e4 && (e4 = 0), void 0 === t3 && (t3 = true);
                for (var i2 = e4 || Date.now(); this._writeBuffer.length > this._bufferOffset; ) {
                  var o2 = this._writeBuffer[this._bufferOffset], s = this._action(o2, t3);
                  if (s)
                    return void s.catch(function(e5) {
                      return n(function() {
                        throw e5;
                      }), Promise.resolve(false);
                    }).then(function(e5) {
                      return Date.now() - i2 >= 12 ? setTimeout(function() {
                        return r2._innerWrite(0, e5);
                      }) : r2._innerWrite(i2, e5);
                    });
                  var a = this._callbacks[this._bufferOffset];
                  if (a && a(), this._bufferOffset++, this._pendingData -= o2.length, Date.now() - i2 >= 12)
                    break;
                }
                this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(function() {
                  return r2._innerWrite();
                })) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
              }, e3;
            }();
            t2.WriteBuffer = o;
          }, 5941: function(e2, t2) {
            var r = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s;
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.toRgbString = t2.parseColor = void 0;
            var i = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, n = /^[\da-f]+$/;
            function o(e3, t3) {
              var r2 = e3.toString(16), i2 = r2.length < 2 ? "0" + r2 : r2;
              switch (t3) {
                case 4:
                  return r2[0];
                case 8:
                  return i2;
                case 12:
                  return (i2 + i2).slice(0, 3);
                default:
                  return i2 + i2;
              }
            }
            t2.parseColor = function(e3) {
              if (e3) {
                var t3 = e3.toLowerCase();
                if (0 === t3.indexOf("rgb:")) {
                  t3 = t3.slice(4);
                  var r2 = i.exec(t3);
                  if (r2) {
                    var o2 = r2[1] ? 15 : r2[4] ? 255 : r2[7] ? 4095 : 65535;
                    return [Math.round(parseInt(r2[1] || r2[4] || r2[7] || r2[10], 16) / o2 * 255), Math.round(parseInt(r2[2] || r2[5] || r2[8] || r2[11], 16) / o2 * 255), Math.round(parseInt(r2[3] || r2[6] || r2[9] || r2[12], 16) / o2 * 255)];
                  }
                } else if (0 === t3.indexOf("#") && (t3 = t3.slice(1), n.exec(t3) && [3, 6, 9, 12].includes(t3.length))) {
                  for (var s = t3.length / 3, a = [0, 0, 0], c = 0; c < 3; ++c) {
                    var l = parseInt(t3.slice(s * c, s * c + s), 16);
                    a[c] = 1 === s ? l << 4 : 2 === s ? l : 3 === s ? l >> 4 : l >> 8;
                  }
                  return a;
                }
              }
            }, t2.toRgbString = function(e3, t3) {
              void 0 === t3 && (t3 = 16);
              var i2 = r(e3, 3), n2 = i2[0], s = i2[1], a = i2[2];
              return "rgb:" + o(n2, t3) + "/" + o(s, t3) + "/" + o(a, t3);
            };
          }, 5770: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.PAYLOAD_LIMIT = void 0, t2.PAYLOAD_LIMIT = 1e7;
          }, 6351: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DcsHandler = t2.DcsParser = void 0;
            var i = r(482), n = r(8742), o = r(5770), s = [], a = function() {
              function e3() {
                this._handlers = /* @__PURE__ */ Object.create(null), this._active = s, this._ident = 0, this._handlerFb = function() {
                }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
              }
              return e3.prototype.dispose = function() {
                this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = function() {
                }, this._active = s;
              }, e3.prototype.registerHandler = function(e4, t3) {
                void 0 === this._handlers[e4] && (this._handlers[e4] = []);
                var r2 = this._handlers[e4];
                return r2.push(t3), { dispose: function() {
                  var e5 = r2.indexOf(t3);
                  -1 !== e5 && r2.splice(e5, 1);
                } };
              }, e3.prototype.clearHandler = function(e4) {
                this._handlers[e4] && delete this._handlers[e4];
              }, e3.prototype.setHandlerFallback = function(e4) {
                this._handlerFb = e4;
              }, e3.prototype.reset = function() {
                if (this._active.length)
                  for (var e4 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e4 >= 0; --e4)
                    this._active[e4].unhook(false);
                this._stack.paused = false, this._active = s, this._ident = 0;
              }, e3.prototype.hook = function(e4, t3) {
                if (this.reset(), this._ident = e4, this._active = this._handlers[e4] || s, this._active.length)
                  for (var r2 = this._active.length - 1; r2 >= 0; r2--)
                    this._active[r2].hook(t3);
                else
                  this._handlerFb(this._ident, "HOOK", t3);
              }, e3.prototype.put = function(e4, t3, r2) {
                if (this._active.length)
                  for (var n2 = this._active.length - 1; n2 >= 0; n2--)
                    this._active[n2].put(e4, t3, r2);
                else
                  this._handlerFb(this._ident, "PUT", (0, i.utf32ToString)(e4, t3, r2));
              }, e3.prototype.unhook = function(e4, t3) {
                if (void 0 === t3 && (t3 = true), this._active.length) {
                  var r2 = false, i2 = this._active.length - 1, n2 = false;
                  if (this._stack.paused && (i2 = this._stack.loopPosition - 1, r2 = t3, n2 = this._stack.fallThrough, this._stack.paused = false), !n2 && false === r2) {
                    for (; i2 >= 0 && true !== (r2 = this._active[i2].unhook(e4)); i2--)
                      if (r2 instanceof Promise)
                        return this._stack.paused = true, this._stack.loopPosition = i2, this._stack.fallThrough = false, r2;
                    i2--;
                  }
                  for (; i2 >= 0; i2--)
                    if ((r2 = this._active[i2].unhook(false)) instanceof Promise)
                      return this._stack.paused = true, this._stack.loopPosition = i2, this._stack.fallThrough = true, r2;
                } else
                  this._handlerFb(this._ident, "UNHOOK", e4);
                this._active = s, this._ident = 0;
              }, e3;
            }();
            t2.DcsParser = a;
            var c = new n.Params();
            c.addParam(0);
            var l = function() {
              function e3(e4) {
                this._handler = e4, this._data = "", this._params = c, this._hitLimit = false;
              }
              return e3.prototype.hook = function(e4) {
                this._params = e4.length > 1 || e4.params[0] ? e4.clone() : c, this._data = "", this._hitLimit = false;
              }, e3.prototype.put = function(e4, t3, r2) {
                this._hitLimit || (this._data += (0, i.utf32ToString)(e4, t3, r2), this._data.length > o.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
              }, e3.prototype.unhook = function(e4) {
                var t3 = this, r2 = false;
                if (this._hitLimit)
                  r2 = false;
                else if (e4 && (r2 = this._handler(this._data, this._params)) instanceof Promise)
                  return r2.then(function(e5) {
                    return t3._params = c, t3._data = "", t3._hitLimit = false, e5;
                  });
                return this._params = c, this._data = "", this._hitLimit = false, r2;
              }, e3;
            }();
            t2.DcsHandler = l;
          }, 2015: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            });
            Object.defineProperty(t2, "__esModule", { value: true }), t2.EscapeSequenceParser = t2.VT500_TRANSITION_TABLE = t2.TransitionTable = void 0;
            var o = r(844), s = r(8273), a = r(8742), c = r(6242), l = r(6351), h = function() {
              function e3(e4) {
                this.table = new Uint8Array(e4);
              }
              return e3.prototype.setDefault = function(e4, t3) {
                (0, s.fill)(this.table, e4 << 4 | t3);
              }, e3.prototype.add = function(e4, t3, r2, i2) {
                this.table[t3 << 8 | e4] = r2 << 4 | i2;
              }, e3.prototype.addMany = function(e4, t3, r2, i2) {
                for (var n2 = 0; n2 < e4.length; n2++)
                  this.table[t3 << 8 | e4[n2]] = r2 << 4 | i2;
              }, e3;
            }();
            t2.TransitionTable = h;
            var u = 160;
            t2.VT500_TRANSITION_TABLE = function() {
              var e3 = new h(4095), t3 = Array.apply(null, Array(256)).map(function(e4, t4) {
                return t4;
              }), r2 = function(e4, r3) {
                return t3.slice(e4, r3);
              }, i2 = r2(32, 127), n2 = r2(0, 24);
              n2.push(25), n2.push.apply(n2, r2(28, 32));
              var o2, s2 = r2(0, 14);
              for (o2 in e3.setDefault(1, 0), e3.addMany(i2, 0, 2, 0), s2)
                e3.addMany([24, 26, 153, 154], o2, 3, 0), e3.addMany(r2(128, 144), o2, 3, 0), e3.addMany(r2(144, 152), o2, 3, 0), e3.add(156, o2, 0, 0), e3.add(27, o2, 11, 1), e3.add(157, o2, 4, 8), e3.addMany([152, 158, 159], o2, 0, 7), e3.add(155, o2, 11, 3), e3.add(144, o2, 11, 9);
              return e3.addMany(n2, 0, 3, 0), e3.addMany(n2, 1, 3, 1), e3.add(127, 1, 0, 1), e3.addMany(n2, 8, 0, 8), e3.addMany(n2, 3, 3, 3), e3.add(127, 3, 0, 3), e3.addMany(n2, 4, 3, 4), e3.add(127, 4, 0, 4), e3.addMany(n2, 6, 3, 6), e3.addMany(n2, 5, 3, 5), e3.add(127, 5, 0, 5), e3.addMany(n2, 2, 3, 2), e3.add(127, 2, 0, 2), e3.add(93, 1, 4, 8), e3.addMany(i2, 8, 5, 8), e3.add(127, 8, 5, 8), e3.addMany([156, 27, 24, 26, 7], 8, 6, 0), e3.addMany(r2(28, 32), 8, 0, 8), e3.addMany([88, 94, 95], 1, 0, 7), e3.addMany(i2, 7, 0, 7), e3.addMany(n2, 7, 0, 7), e3.add(156, 7, 0, 0), e3.add(127, 7, 0, 7), e3.add(91, 1, 11, 3), e3.addMany(r2(64, 127), 3, 7, 0), e3.addMany(r2(48, 60), 3, 8, 4), e3.addMany([60, 61, 62, 63], 3, 9, 4), e3.addMany(r2(48, 60), 4, 8, 4), e3.addMany(r2(64, 127), 4, 7, 0), e3.addMany([60, 61, 62, 63], 4, 0, 6), e3.addMany(r2(32, 64), 6, 0, 6), e3.add(127, 6, 0, 6), e3.addMany(r2(64, 127), 6, 0, 0), e3.addMany(r2(32, 48), 3, 9, 5), e3.addMany(r2(32, 48), 5, 9, 5), e3.addMany(r2(48, 64), 5, 0, 6), e3.addMany(r2(64, 127), 5, 7, 0), e3.addMany(r2(32, 48), 4, 9, 5), e3.addMany(r2(32, 48), 1, 9, 2), e3.addMany(r2(32, 48), 2, 9, 2), e3.addMany(r2(48, 127), 2, 10, 0), e3.addMany(r2(48, 80), 1, 10, 0), e3.addMany(r2(81, 88), 1, 10, 0), e3.addMany([89, 90, 92], 1, 10, 0), e3.addMany(r2(96, 127), 1, 10, 0), e3.add(80, 1, 11, 9), e3.addMany(n2, 9, 0, 9), e3.add(127, 9, 0, 9), e3.addMany(r2(28, 32), 9, 0, 9), e3.addMany(r2(32, 48), 9, 9, 12), e3.addMany(r2(48, 60), 9, 8, 10), e3.addMany([60, 61, 62, 63], 9, 9, 10), e3.addMany(n2, 11, 0, 11), e3.addMany(r2(32, 128), 11, 0, 11), e3.addMany(r2(28, 32), 11, 0, 11), e3.addMany(n2, 10, 0, 10), e3.add(127, 10, 0, 10), e3.addMany(r2(28, 32), 10, 0, 10), e3.addMany(r2(48, 60), 10, 8, 10), e3.addMany([60, 61, 62, 63], 10, 0, 11), e3.addMany(r2(32, 48), 10, 9, 12), e3.addMany(n2, 12, 0, 12), e3.add(127, 12, 0, 12), e3.addMany(r2(28, 32), 12, 0, 12), e3.addMany(r2(32, 48), 12, 9, 12), e3.addMany(r2(48, 64), 12, 0, 11), e3.addMany(r2(64, 127), 12, 12, 13), e3.addMany(r2(64, 127), 10, 12, 13), e3.addMany(r2(64, 127), 9, 12, 13), e3.addMany(n2, 13, 13, 13), e3.addMany(i2, 13, 13, 13), e3.add(127, 13, 0, 13), e3.addMany([27, 156, 24, 26], 13, 14, 0), e3.add(u, 0, 2, 0), e3.add(u, 8, 5, 8), e3.add(u, 6, 0, 6), e3.add(u, 11, 0, 11), e3.add(u, 13, 13, 13), e3;
            }();
            var f = function(e3) {
              function r2(r3) {
                void 0 === r3 && (r3 = t2.VT500_TRANSITION_TABLE);
                var i2 = e3.call(this) || this;
                return i2._transitions = r3, i2._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 }, i2.initialState = 0, i2.currentState = i2.initialState, i2._params = new a.Params(), i2._params.addParam(0), i2._collect = 0, i2.precedingCodepoint = 0, i2._printHandlerFb = function(e4, t3, r4) {
                }, i2._executeHandlerFb = function(e4) {
                }, i2._csiHandlerFb = function(e4, t3) {
                }, i2._escHandlerFb = function(e4) {
                }, i2._errorHandlerFb = function(e4) {
                  return e4;
                }, i2._printHandler = i2._printHandlerFb, i2._executeHandlers = /* @__PURE__ */ Object.create(null), i2._csiHandlers = /* @__PURE__ */ Object.create(null), i2._escHandlers = /* @__PURE__ */ Object.create(null), i2._oscParser = new c.OscParser(), i2._dcsParser = new l.DcsParser(), i2._errorHandler = i2._errorHandlerFb, i2.registerEscHandler({ final: "\\" }, function() {
                  return true;
                }), i2;
              }
              return n(r2, e3), r2.prototype._identifier = function(e4, t3) {
                void 0 === t3 && (t3 = [64, 126]);
                var r3 = 0;
                if (e4.prefix) {
                  if (e4.prefix.length > 1)
                    throw new Error("only one byte as prefix supported");
                  if ((r3 = e4.prefix.charCodeAt(0)) && 60 > r3 || r3 > 63)
                    throw new Error("prefix must be in range 0x3c .. 0x3f");
                }
                if (e4.intermediates) {
                  if (e4.intermediates.length > 2)
                    throw new Error("only two bytes as intermediates are supported");
                  for (var i2 = 0; i2 < e4.intermediates.length; ++i2) {
                    var n2 = e4.intermediates.charCodeAt(i2);
                    if (32 > n2 || n2 > 47)
                      throw new Error("intermediate must be in range 0x20 .. 0x2f");
                    r3 <<= 8, r3 |= n2;
                  }
                }
                if (1 !== e4.final.length)
                  throw new Error("final must be a single byte");
                var o2 = e4.final.charCodeAt(0);
                if (t3[0] > o2 || o2 > t3[1])
                  throw new Error("final must be in range " + t3[0] + " .. " + t3[1]);
                return (r3 <<= 8) | o2;
              }, r2.prototype.identToString = function(e4) {
                for (var t3 = []; e4; )
                  t3.push(String.fromCharCode(255 & e4)), e4 >>= 8;
                return t3.reverse().join("");
              }, r2.prototype.dispose = function() {
                this._csiHandlers = /* @__PURE__ */ Object.create(null), this._executeHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null), this._oscParser.dispose(), this._dcsParser.dispose();
              }, r2.prototype.setPrintHandler = function(e4) {
                this._printHandler = e4;
              }, r2.prototype.clearPrintHandler = function() {
                this._printHandler = this._printHandlerFb;
              }, r2.prototype.registerEscHandler = function(e4, t3) {
                var r3 = this._identifier(e4, [48, 126]);
                void 0 === this._escHandlers[r3] && (this._escHandlers[r3] = []);
                var i2 = this._escHandlers[r3];
                return i2.push(t3), { dispose: function() {
                  var e5 = i2.indexOf(t3);
                  -1 !== e5 && i2.splice(e5, 1);
                } };
              }, r2.prototype.clearEscHandler = function(e4) {
                this._escHandlers[this._identifier(e4, [48, 126])] && delete this._escHandlers[this._identifier(e4, [48, 126])];
              }, r2.prototype.setEscHandlerFallback = function(e4) {
                this._escHandlerFb = e4;
              }, r2.prototype.setExecuteHandler = function(e4, t3) {
                this._executeHandlers[e4.charCodeAt(0)] = t3;
              }, r2.prototype.clearExecuteHandler = function(e4) {
                this._executeHandlers[e4.charCodeAt(0)] && delete this._executeHandlers[e4.charCodeAt(0)];
              }, r2.prototype.setExecuteHandlerFallback = function(e4) {
                this._executeHandlerFb = e4;
              }, r2.prototype.registerCsiHandler = function(e4, t3) {
                var r3 = this._identifier(e4);
                void 0 === this._csiHandlers[r3] && (this._csiHandlers[r3] = []);
                var i2 = this._csiHandlers[r3];
                return i2.push(t3), { dispose: function() {
                  var e5 = i2.indexOf(t3);
                  -1 !== e5 && i2.splice(e5, 1);
                } };
              }, r2.prototype.clearCsiHandler = function(e4) {
                this._csiHandlers[this._identifier(e4)] && delete this._csiHandlers[this._identifier(e4)];
              }, r2.prototype.setCsiHandlerFallback = function(e4) {
                this._csiHandlerFb = e4;
              }, r2.prototype.registerDcsHandler = function(e4, t3) {
                return this._dcsParser.registerHandler(this._identifier(e4), t3);
              }, r2.prototype.clearDcsHandler = function(e4) {
                this._dcsParser.clearHandler(this._identifier(e4));
              }, r2.prototype.setDcsHandlerFallback = function(e4) {
                this._dcsParser.setHandlerFallback(e4);
              }, r2.prototype.registerOscHandler = function(e4, t3) {
                return this._oscParser.registerHandler(e4, t3);
              }, r2.prototype.clearOscHandler = function(e4) {
                this._oscParser.clearHandler(e4);
              }, r2.prototype.setOscHandlerFallback = function(e4) {
                this._oscParser.setHandlerFallback(e4);
              }, r2.prototype.setErrorHandler = function(e4) {
                this._errorHandler = e4;
              }, r2.prototype.clearErrorHandler = function() {
                this._errorHandler = this._errorHandlerFb;
              }, r2.prototype.reset = function() {
                this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0, 0 !== this._parseStack.state && (this._parseStack.state = 2, this._parseStack.handlers = []);
              }, r2.prototype._preserveStack = function(e4, t3, r3, i2, n2) {
                this._parseStack.state = e4, this._parseStack.handlers = t3, this._parseStack.handlerPos = r3, this._parseStack.transition = i2, this._parseStack.chunkPos = n2;
              }, r2.prototype.parse = function(e4, t3, r3) {
                var i2, n2 = 0, o2 = 0, s2 = 0;
                if (this._parseStack.state)
                  if (2 === this._parseStack.state)
                    this._parseStack.state = 0, s2 = this._parseStack.chunkPos + 1;
                  else {
                    if (void 0 === r3 || 1 === this._parseStack.state)
                      throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
                    var a2 = this._parseStack.handlers, c2 = this._parseStack.handlerPos - 1;
                    switch (this._parseStack.state) {
                      case 3:
                        if (false === r3 && c2 > -1) {
                          for (; c2 >= 0 && true !== (i2 = a2[c2](this._params)); c2--)
                            if (i2 instanceof Promise)
                              return this._parseStack.handlerPos = c2, i2;
                        }
                        this._parseStack.handlers = [];
                        break;
                      case 4:
                        if (false === r3 && c2 > -1) {
                          for (; c2 >= 0 && true !== (i2 = a2[c2]()); c2--)
                            if (i2 instanceof Promise)
                              return this._parseStack.handlerPos = c2, i2;
                        }
                        this._parseStack.handlers = [];
                        break;
                      case 6:
                        if (n2 = e4[this._parseStack.chunkPos], i2 = this._dcsParser.unhook(24 !== n2 && 26 !== n2, r3))
                          return i2;
                        27 === n2 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                        break;
                      case 5:
                        if (n2 = e4[this._parseStack.chunkPos], i2 = this._oscParser.end(24 !== n2 && 26 !== n2, r3))
                          return i2;
                        27 === n2 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                    }
                    this._parseStack.state = 0, s2 = this._parseStack.chunkPos + 1, this.precedingCodepoint = 0, this.currentState = 15 & this._parseStack.transition;
                  }
                for (var l2 = s2; l2 < t3; ++l2) {
                  switch (n2 = e4[l2], (o2 = this._transitions.table[this.currentState << 8 | (n2 < 160 ? n2 : u)]) >> 4) {
                    case 2:
                      for (var h2 = l2 + 1; ; ++h2) {
                        if (h2 >= t3 || (n2 = e4[h2]) < 32 || n2 > 126 && n2 < u) {
                          this._printHandler(e4, l2, h2), l2 = h2 - 1;
                          break;
                        }
                        if (++h2 >= t3 || (n2 = e4[h2]) < 32 || n2 > 126 && n2 < u) {
                          this._printHandler(e4, l2, h2), l2 = h2 - 1;
                          break;
                        }
                        if (++h2 >= t3 || (n2 = e4[h2]) < 32 || n2 > 126 && n2 < u) {
                          this._printHandler(e4, l2, h2), l2 = h2 - 1;
                          break;
                        }
                        if (++h2 >= t3 || (n2 = e4[h2]) < 32 || n2 > 126 && n2 < u) {
                          this._printHandler(e4, l2, h2), l2 = h2 - 1;
                          break;
                        }
                      }
                      break;
                    case 3:
                      this._executeHandlers[n2] ? this._executeHandlers[n2]() : this._executeHandlerFb(n2), this.precedingCodepoint = 0;
                      break;
                    case 0:
                      break;
                    case 1:
                      if (this._errorHandler({ position: l2, code: n2, currentState: this.currentState, collect: this._collect, params: this._params, abort: false }).abort)
                        return;
                      break;
                    case 7:
                      for (var f2 = (a2 = this._csiHandlers[this._collect << 8 | n2]) ? a2.length - 1 : -1; f2 >= 0 && true !== (i2 = a2[f2](this._params)); f2--)
                        if (i2 instanceof Promise)
                          return this._preserveStack(3, a2, f2, o2, l2), i2;
                      f2 < 0 && this._csiHandlerFb(this._collect << 8 | n2, this._params), this.precedingCodepoint = 0;
                      break;
                    case 8:
                      do {
                        switch (n2) {
                          case 59:
                            this._params.addParam(0);
                            break;
                          case 58:
                            this._params.addSubParam(-1);
                            break;
                          default:
                            this._params.addDigit(n2 - 48);
                        }
                      } while (++l2 < t3 && (n2 = e4[l2]) > 47 && n2 < 60);
                      l2--;
                      break;
                    case 9:
                      this._collect <<= 8, this._collect |= n2;
                      break;
                    case 10:
                      for (var _ = this._escHandlers[this._collect << 8 | n2], d = _ ? _.length - 1 : -1; d >= 0 && true !== (i2 = _[d]()); d--)
                        if (i2 instanceof Promise)
                          return this._preserveStack(4, _, d, o2, l2), i2;
                      d < 0 && this._escHandlerFb(this._collect << 8 | n2), this.precedingCodepoint = 0;
                      break;
                    case 11:
                      this._params.reset(), this._params.addParam(0), this._collect = 0;
                      break;
                    case 12:
                      this._dcsParser.hook(this._collect << 8 | n2, this._params);
                      break;
                    case 13:
                      for (var p = l2 + 1; ; ++p)
                        if (p >= t3 || 24 === (n2 = e4[p]) || 26 === n2 || 27 === n2 || n2 > 127 && n2 < u) {
                          this._dcsParser.put(e4, l2, p), l2 = p - 1;
                          break;
                        }
                      break;
                    case 14:
                      if (i2 = this._dcsParser.unhook(24 !== n2 && 26 !== n2))
                        return this._preserveStack(6, [], 0, o2, l2), i2;
                      27 === n2 && (o2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
                      break;
                    case 4:
                      this._oscParser.start();
                      break;
                    case 5:
                      for (var v = l2 + 1; ; v++)
                        if (v >= t3 || (n2 = e4[v]) < 32 || n2 > 127 && n2 < u) {
                          this._oscParser.put(e4, l2, v), l2 = v - 1;
                          break;
                        }
                      break;
                    case 6:
                      if (i2 = this._oscParser.end(24 !== n2 && 26 !== n2))
                        return this._preserveStack(5, [], 0, o2, l2), i2;
                      27 === n2 && (o2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
                  }
                  this.currentState = 15 & o2;
                }
              }, r2;
            }(o.Disposable);
            t2.EscapeSequenceParser = f;
          }, 6242: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.OscHandler = t2.OscParser = void 0;
            var i = r(5770), n = r(482), o = [], s = function() {
              function e3() {
                this._state = 0, this._active = o, this._id = -1, this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = function() {
                }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
              }
              return e3.prototype.registerHandler = function(e4, t3) {
                void 0 === this._handlers[e4] && (this._handlers[e4] = []);
                var r2 = this._handlers[e4];
                return r2.push(t3), { dispose: function() {
                  var e5 = r2.indexOf(t3);
                  -1 !== e5 && r2.splice(e5, 1);
                } };
              }, e3.prototype.clearHandler = function(e4) {
                this._handlers[e4] && delete this._handlers[e4];
              }, e3.prototype.setHandlerFallback = function(e4) {
                this._handlerFb = e4;
              }, e3.prototype.dispose = function() {
                this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = function() {
                }, this._active = o;
              }, e3.prototype.reset = function() {
                if (2 === this._state)
                  for (var e4 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e4 >= 0; --e4)
                    this._active[e4].end(false);
                this._stack.paused = false, this._active = o, this._id = -1, this._state = 0;
              }, e3.prototype._start = function() {
                if (this._active = this._handlers[this._id] || o, this._active.length)
                  for (var e4 = this._active.length - 1; e4 >= 0; e4--)
                    this._active[e4].start();
                else
                  this._handlerFb(this._id, "START");
              }, e3.prototype._put = function(e4, t3, r2) {
                if (this._active.length)
                  for (var i2 = this._active.length - 1; i2 >= 0; i2--)
                    this._active[i2].put(e4, t3, r2);
                else
                  this._handlerFb(this._id, "PUT", (0, n.utf32ToString)(e4, t3, r2));
              }, e3.prototype.start = function() {
                this.reset(), this._state = 1;
              }, e3.prototype.put = function(e4, t3, r2) {
                if (3 !== this._state) {
                  if (1 === this._state)
                    for (; t3 < r2; ) {
                      var i2 = e4[t3++];
                      if (59 === i2) {
                        this._state = 2, this._start();
                        break;
                      }
                      if (i2 < 48 || 57 < i2)
                        return void (this._state = 3);
                      -1 === this._id && (this._id = 0), this._id = 10 * this._id + i2 - 48;
                    }
                  2 === this._state && r2 - t3 > 0 && this._put(e4, t3, r2);
                }
              }, e3.prototype.end = function(e4, t3) {
                if (void 0 === t3 && (t3 = true), 0 !== this._state) {
                  if (3 !== this._state)
                    if (1 === this._state && this._start(), this._active.length) {
                      var r2 = false, i2 = this._active.length - 1, n2 = false;
                      if (this._stack.paused && (i2 = this._stack.loopPosition - 1, r2 = t3, n2 = this._stack.fallThrough, this._stack.paused = false), !n2 && false === r2) {
                        for (; i2 >= 0 && true !== (r2 = this._active[i2].end(e4)); i2--)
                          if (r2 instanceof Promise)
                            return this._stack.paused = true, this._stack.loopPosition = i2, this._stack.fallThrough = false, r2;
                        i2--;
                      }
                      for (; i2 >= 0; i2--)
                        if ((r2 = this._active[i2].end(false)) instanceof Promise)
                          return this._stack.paused = true, this._stack.loopPosition = i2, this._stack.fallThrough = true, r2;
                    } else
                      this._handlerFb(this._id, "END", e4);
                  this._active = o, this._id = -1, this._state = 0;
                }
              }, e3;
            }();
            t2.OscParser = s;
            var a = function() {
              function e3(e4) {
                this._handler = e4, this._data = "", this._hitLimit = false;
              }
              return e3.prototype.start = function() {
                this._data = "", this._hitLimit = false;
              }, e3.prototype.put = function(e4, t3, r2) {
                this._hitLimit || (this._data += (0, n.utf32ToString)(e4, t3, r2), this._data.length > i.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
              }, e3.prototype.end = function(e4) {
                var t3 = this, r2 = false;
                if (this._hitLimit)
                  r2 = false;
                else if (e4 && (r2 = this._handler(this._data)) instanceof Promise)
                  return r2.then(function(e5) {
                    return t3._data = "", t3._hitLimit = false, e5;
                  });
                return this._data = "", this._hitLimit = false, r2;
              }, e3;
            }();
            t2.OscHandler = a;
          }, 8742: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Params = void 0;
            var r = 2147483647, i = function() {
              function e3(e4, t3) {
                if (void 0 === e4 && (e4 = 32), void 0 === t3 && (t3 = 32), this.maxLength = e4, this.maxSubParamsLength = t3, t3 > 256)
                  throw new Error("maxSubParamsLength must not be greater than 256");
                this.params = new Int32Array(e4), this.length = 0, this._subParams = new Int32Array(t3), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e4), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
              }
              return e3.fromArray = function(t3) {
                var r2 = new e3();
                if (!t3.length)
                  return r2;
                for (var i2 = Array.isArray(t3[0]) ? 1 : 0; i2 < t3.length; ++i2) {
                  var n = t3[i2];
                  if (Array.isArray(n))
                    for (var o = 0; o < n.length; ++o)
                      r2.addSubParam(n[o]);
                  else
                    r2.addParam(n);
                }
                return r2;
              }, e3.prototype.clone = function() {
                var t3 = new e3(this.maxLength, this.maxSubParamsLength);
                return t3.params.set(this.params), t3.length = this.length, t3._subParams.set(this._subParams), t3._subParamsLength = this._subParamsLength, t3._subParamsIdx.set(this._subParamsIdx), t3._rejectDigits = this._rejectDigits, t3._rejectSubDigits = this._rejectSubDigits, t3._digitIsSub = this._digitIsSub, t3;
              }, e3.prototype.toArray = function() {
                for (var e4 = [], t3 = 0; t3 < this.length; ++t3) {
                  e4.push(this.params[t3]);
                  var r2 = this._subParamsIdx[t3] >> 8, i2 = 255 & this._subParamsIdx[t3];
                  i2 - r2 > 0 && e4.push(Array.prototype.slice.call(this._subParams, r2, i2));
                }
                return e4;
              }, e3.prototype.reset = function() {
                this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
              }, e3.prototype.addParam = function(e4) {
                if (this._digitIsSub = false, this.length >= this.maxLength)
                  this._rejectDigits = true;
                else {
                  if (e4 < -1)
                    throw new Error("values lesser than -1 are not allowed");
                  this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e4 > r ? r : e4;
                }
              }, e3.prototype.addSubParam = function(e4) {
                if (this._digitIsSub = true, this.length)
                  if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength)
                    this._rejectSubDigits = true;
                  else {
                    if (e4 < -1)
                      throw new Error("values lesser than -1 are not allowed");
                    this._subParams[this._subParamsLength++] = e4 > r ? r : e4, this._subParamsIdx[this.length - 1]++;
                  }
              }, e3.prototype.hasSubParams = function(e4) {
                return (255 & this._subParamsIdx[e4]) - (this._subParamsIdx[e4] >> 8) > 0;
              }, e3.prototype.getSubParams = function(e4) {
                var t3 = this._subParamsIdx[e4] >> 8, r2 = 255 & this._subParamsIdx[e4];
                return r2 - t3 > 0 ? this._subParams.subarray(t3, r2) : null;
              }, e3.prototype.getSubParamsAll = function() {
                for (var e4 = {}, t3 = 0; t3 < this.length; ++t3) {
                  var r2 = this._subParamsIdx[t3] >> 8, i2 = 255 & this._subParamsIdx[t3];
                  i2 - r2 > 0 && (e4[t3] = this._subParams.slice(r2, i2));
                }
                return e4;
              }, e3.prototype.addDigit = function(e4) {
                var t3;
                if (!(this._rejectDigits || !(t3 = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)) {
                  var i2 = this._digitIsSub ? this._subParams : this.params, n = i2[t3 - 1];
                  i2[t3 - 1] = ~n ? Math.min(10 * n + e4, r) : e4;
                }
              }, e3;
            }();
            t2.Params = i;
          }, 5741: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.AddonManager = void 0;
            var r = function() {
              function e3() {
                this._addons = [];
              }
              return e3.prototype.dispose = function() {
                for (var e4 = this._addons.length - 1; e4 >= 0; e4--)
                  this._addons[e4].instance.dispose();
              }, e3.prototype.loadAddon = function(e4, t3) {
                var r2 = this, i = { instance: t3, dispose: t3.dispose, isDisposed: false };
                this._addons.push(i), t3.dispose = function() {
                  return r2._wrappedAddonDispose(i);
                }, t3.activate(e4);
              }, e3.prototype._wrappedAddonDispose = function(e4) {
                if (!e4.isDisposed) {
                  for (var t3 = -1, r2 = 0; r2 < this._addons.length; r2++)
                    if (this._addons[r2] === e4) {
                      t3 = r2;
                      break;
                    }
                  if (-1 === t3)
                    throw new Error("Could not dispose an addon that has not been loaded");
                  e4.isDisposed = true, e4.dispose.apply(e4.instance), this._addons.splice(t3, 1);
                }
              }, e3;
            }();
            t2.AddonManager = r;
          }, 8771: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferApiView = void 0;
            var i = r(3785), n = r(511), o = function() {
              function e3(e4, t3) {
                this._buffer = e4, this.type = t3;
              }
              return e3.prototype.init = function(e4) {
                return this._buffer = e4, this;
              }, Object.defineProperty(e3.prototype, "cursorY", { get: function() {
                return this._buffer.y;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "cursorX", { get: function() {
                return this._buffer.x;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "viewportY", { get: function() {
                return this._buffer.ydisp;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseY", { get: function() {
                return this._buffer.ybase;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "length", { get: function() {
                return this._buffer.lines.length;
              }, enumerable: false, configurable: true }), e3.prototype.getLine = function(e4) {
                var t3 = this._buffer.lines.get(e4);
                if (t3)
                  return new i.BufferLineApiView(t3);
              }, e3.prototype.getNullCell = function() {
                return new n.CellData();
              }, e3;
            }();
            t2.BufferApiView = o;
          }, 3785: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLineApiView = void 0;
            var i = r(511), n = function() {
              function e3(e4) {
                this._line = e4;
              }
              return Object.defineProperty(e3.prototype, "isWrapped", { get: function() {
                return this._line.isWrapped;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "length", { get: function() {
                return this._line.length;
              }, enumerable: false, configurable: true }), e3.prototype.getCell = function(e4, t3) {
                if (!(e4 < 0 || e4 >= this._line.length))
                  return t3 ? (this._line.loadCell(e4, t3), t3) : this._line.loadCell(e4, new i.CellData());
              }, e3.prototype.translateToString = function(e4, t3, r2) {
                return this._line.translateToString(e4, t3, r2);
              }, e3;
            }();
            t2.BufferLineApiView = n;
          }, 8285: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferNamespaceApi = void 0;
            var i = r(8771), n = r(8460), o = function() {
              function e3(e4) {
                var t3 = this;
                this._core = e4, this._onBufferChange = new n.EventEmitter(), this._normal = new i.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new i.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(function() {
                  return t3._onBufferChange.fire(t3.active);
                });
              }
              return Object.defineProperty(e3.prototype, "onBufferChange", { get: function() {
                return this._onBufferChange.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "active", { get: function() {
                if (this._core.buffers.active === this._core.buffers.normal)
                  return this.normal;
                if (this._core.buffers.active === this._core.buffers.alt)
                  return this.alternate;
                throw new Error("Active buffer is neither normal nor alternate");
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "normal", { get: function() {
                return this._normal.init(this._core.buffers.normal);
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "alternate", { get: function() {
                return this._alternate.init(this._core.buffers.alt);
              }, enumerable: false, configurable: true }), e3;
            }();
            t2.BufferNamespaceApi = o;
          }, 7975: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ParserApi = void 0;
            var r = function() {
              function e3(e4) {
                this._core = e4;
              }
              return e3.prototype.registerCsiHandler = function(e4, t3) {
                return this._core.registerCsiHandler(e4, function(e5) {
                  return t3(e5.toArray());
                });
              }, e3.prototype.addCsiHandler = function(e4, t3) {
                return this.registerCsiHandler(e4, t3);
              }, e3.prototype.registerDcsHandler = function(e4, t3) {
                return this._core.registerDcsHandler(e4, function(e5, r2) {
                  return t3(e5, r2.toArray());
                });
              }, e3.prototype.addDcsHandler = function(e4, t3) {
                return this.registerDcsHandler(e4, t3);
              }, e3.prototype.registerEscHandler = function(e4, t3) {
                return this._core.registerEscHandler(e4, t3);
              }, e3.prototype.addEscHandler = function(e4, t3) {
                return this.registerEscHandler(e4, t3);
              }, e3.prototype.registerOscHandler = function(e4, t3) {
                return this._core.registerOscHandler(e4, t3);
              }, e3.prototype.addOscHandler = function(e4, t3) {
                return this.registerOscHandler(e4, t3);
              }, e3;
            }();
            t2.ParserApi = r;
          }, 7090: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeApi = void 0;
            var r = function() {
              function e3(e4) {
                this._core = e4;
              }
              return e3.prototype.register = function(e4) {
                this._core.unicodeService.register(e4);
              }, Object.defineProperty(e3.prototype, "versions", { get: function() {
                return this._core.unicodeService.versions;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "activeVersion", { get: function() {
                return this._core.unicodeService.activeVersion;
              }, set: function(e4) {
                this._core.unicodeService.activeVersion = e4;
              }, enumerable: false, configurable: true }), e3;
            }();
            t2.UnicodeApi = r;
          }, 744: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferService = t2.MINIMUM_ROWS = t2.MINIMUM_COLS = void 0;
            var a = r(2585), c = r(5295), l = r(8460), h = r(844);
            t2.MINIMUM_COLS = 2, t2.MINIMUM_ROWS = 1;
            var u = function(e3) {
              function r2(r3) {
                var i2 = e3.call(this) || this;
                return i2._optionsService = r3, i2.isUserScrolling = false, i2._onResize = new l.EventEmitter(), i2._onScroll = new l.EventEmitter(), i2.cols = Math.max(r3.rawOptions.cols || 0, t2.MINIMUM_COLS), i2.rows = Math.max(r3.rawOptions.rows || 0, t2.MINIMUM_ROWS), i2.buffers = new c.BufferSet(r3, i2), i2;
              }
              return n(r2, e3), Object.defineProperty(r2.prototype, "onResize", { get: function() {
                return this._onResize.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(r2.prototype, "onScroll", { get: function() {
                return this._onScroll.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(r2.prototype, "buffer", { get: function() {
                return this.buffers.active;
              }, enumerable: false, configurable: true }), r2.prototype.dispose = function() {
                e3.prototype.dispose.call(this), this.buffers.dispose();
              }, r2.prototype.resize = function(e4, t3) {
                this.cols = e4, this.rows = t3, this.buffers.resize(e4, t3), this.buffers.setupTabStops(this.cols), this._onResize.fire({ cols: e4, rows: t3 });
              }, r2.prototype.reset = function() {
                this.buffers.reset(), this.isUserScrolling = false;
              }, r2.prototype.scroll = function(e4, t3) {
                void 0 === t3 && (t3 = false);
                var r3, i2 = this.buffer;
                (r3 = this._cachedBlankLine) && r3.length === this.cols && r3.getFg(0) === e4.fg && r3.getBg(0) === e4.bg || (r3 = i2.getBlankLine(e4, t3), this._cachedBlankLine = r3), r3.isWrapped = t3;
                var n2 = i2.ybase + i2.scrollTop, o2 = i2.ybase + i2.scrollBottom;
                if (0 === i2.scrollTop) {
                  var s2 = i2.lines.isFull;
                  o2 === i2.lines.length - 1 ? s2 ? i2.lines.recycle().copyFrom(r3) : i2.lines.push(r3.clone()) : i2.lines.splice(o2 + 1, 0, r3.clone()), s2 ? this.isUserScrolling && (i2.ydisp = Math.max(i2.ydisp - 1, 0)) : (i2.ybase++, this.isUserScrolling || i2.ydisp++);
                } else {
                  var a2 = o2 - n2 + 1;
                  i2.lines.shiftElements(n2 + 1, a2 - 1, -1), i2.lines.set(o2, r3.clone());
                }
                this.isUserScrolling || (i2.ydisp = i2.ybase), this._onScroll.fire(i2.ydisp);
              }, r2.prototype.scrollLines = function(e4, t3, r3) {
                var i2 = this.buffer;
                if (e4 < 0) {
                  if (0 === i2.ydisp)
                    return;
                  this.isUserScrolling = true;
                } else
                  e4 + i2.ydisp >= i2.ybase && (this.isUserScrolling = false);
                var n2 = i2.ydisp;
                i2.ydisp = Math.max(Math.min(i2.ydisp + e4, i2.ybase), 0), n2 !== i2.ydisp && (t3 || this._onScroll.fire(i2.ydisp));
              }, r2.prototype.scrollPages = function(e4) {
                this.scrollLines(e4 * (this.rows - 1));
              }, r2.prototype.scrollToTop = function() {
                this.scrollLines(-this.buffer.ydisp);
              }, r2.prototype.scrollToBottom = function() {
                this.scrollLines(this.buffer.ybase - this.buffer.ydisp);
              }, r2.prototype.scrollToLine = function(e4) {
                var t3 = e4 - this.buffer.ydisp;
                0 !== t3 && this.scrollLines(t3);
              }, o([s(0, a.IOptionsService)], r2);
            }(h.Disposable);
            t2.BufferService = u;
          }, 7994: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CharsetService = void 0;
            var r = function() {
              function e3() {
                this.glevel = 0, this._charsets = [];
              }
              return e3.prototype.reset = function() {
                this.charset = void 0, this._charsets = [], this.glevel = 0;
              }, e3.prototype.setgLevel = function(e4) {
                this.glevel = e4, this.charset = this._charsets[e4];
              }, e3.prototype.setgCharset = function(e4, t3) {
                this._charsets[e4] = t3, this.glevel === e4 && (this.charset = t3);
              }, e3;
            }();
            t2.CharsetService = r;
          }, 1753: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, o = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreMouseService = void 0;
            var s = r(2585), a = r(8460), c = { NONE: { events: 0, restrict: function() {
              return false;
            } }, X10: { events: 1, restrict: function(e3) {
              return 4 !== e3.button && 1 === e3.action && (e3.ctrl = false, e3.alt = false, e3.shift = false, true);
            } }, VT200: { events: 19, restrict: function(e3) {
              return 32 !== e3.action;
            } }, DRAG: { events: 23, restrict: function(e3) {
              return 32 !== e3.action || 3 !== e3.button;
            } }, ANY: { events: 31, restrict: function(e3) {
              return true;
            } } };
            function l(e3, t3) {
              var r2 = (e3.ctrl ? 16 : 0) | (e3.shift ? 4 : 0) | (e3.alt ? 8 : 0);
              return 4 === e3.button ? (r2 |= 64, r2 |= e3.action) : (r2 |= 3 & e3.button, 4 & e3.button && (r2 |= 64), 8 & e3.button && (r2 |= 128), 32 === e3.action ? r2 |= 32 : 0 !== e3.action || t3 || (r2 |= 3)), r2;
            }
            var h = String.fromCharCode, u = { DEFAULT: function(e3) {
              var t3 = [l(e3, false) + 32, e3.col + 32, e3.row + 32];
              return t3[0] > 255 || t3[1] > 255 || t3[2] > 255 ? "" : "\x1B[M" + h(t3[0]) + h(t3[1]) + h(t3[2]);
            }, SGR: function(e3) {
              var t3 = 0 === e3.action && 4 !== e3.button ? "m" : "M";
              return "\x1B[<" + l(e3, true) + ";" + e3.col + ";" + e3.row + t3;
            } }, f = function() {
              function e3(e4, t3) {
                var r2, i2, n2, s2;
                this._bufferService = e4, this._coreService = t3, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._onProtocolChange = new a.EventEmitter(), this._lastEvent = null;
                try {
                  for (var l2 = o(Object.keys(c)), h2 = l2.next(); !h2.done; h2 = l2.next()) {
                    var f2 = h2.value;
                    this.addProtocol(f2, c[f2]);
                  }
                } catch (e5) {
                  r2 = { error: e5 };
                } finally {
                  try {
                    h2 && !h2.done && (i2 = l2.return) && i2.call(l2);
                  } finally {
                    if (r2)
                      throw r2.error;
                  }
                }
                try {
                  for (var _ = o(Object.keys(u)), d = _.next(); !d.done; d = _.next()) {
                    var p = d.value;
                    this.addEncoding(p, u[p]);
                  }
                } catch (e5) {
                  n2 = { error: e5 };
                } finally {
                  try {
                    d && !d.done && (s2 = _.return) && s2.call(_);
                  } finally {
                    if (n2)
                      throw n2.error;
                  }
                }
                this.reset();
              }
              return e3.prototype.addProtocol = function(e4, t3) {
                this._protocols[e4] = t3;
              }, e3.prototype.addEncoding = function(e4, t3) {
                this._encodings[e4] = t3;
              }, Object.defineProperty(e3.prototype, "activeProtocol", { get: function() {
                return this._activeProtocol;
              }, set: function(e4) {
                if (!this._protocols[e4])
                  throw new Error('unknown protocol "' + e4 + '"');
                this._activeProtocol = e4, this._onProtocolChange.fire(this._protocols[e4].events);
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "areMouseEventsActive", { get: function() {
                return 0 !== this._protocols[this._activeProtocol].events;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "activeEncoding", { get: function() {
                return this._activeEncoding;
              }, set: function(e4) {
                if (!this._encodings[e4])
                  throw new Error('unknown encoding "' + e4 + '"');
                this._activeEncoding = e4;
              }, enumerable: false, configurable: true }), e3.prototype.reset = function() {
                this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
              }, Object.defineProperty(e3.prototype, "onProtocolChange", { get: function() {
                return this._onProtocolChange.event;
              }, enumerable: false, configurable: true }), e3.prototype.triggerMouseEvent = function(e4) {
                if (e4.col < 0 || e4.col >= this._bufferService.cols || e4.row < 0 || e4.row >= this._bufferService.rows)
                  return false;
                if (4 === e4.button && 32 === e4.action)
                  return false;
                if (3 === e4.button && 32 !== e4.action)
                  return false;
                if (4 !== e4.button && (2 === e4.action || 3 === e4.action))
                  return false;
                if (e4.col++, e4.row++, 32 === e4.action && this._lastEvent && this._compareEvents(this._lastEvent, e4))
                  return false;
                if (!this._protocols[this._activeProtocol].restrict(e4))
                  return false;
                var t3 = this._encodings[this._activeEncoding](e4);
                return t3 && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t3) : this._coreService.triggerDataEvent(t3, true)), this._lastEvent = e4, true;
              }, e3.prototype.explainEvents = function(e4) {
                return { down: !!(1 & e4), up: !!(2 & e4), drag: !!(4 & e4), move: !!(8 & e4), wheel: !!(16 & e4) };
              }, e3.prototype._compareEvents = function(e4, t3) {
                return e4.col === t3.col && e4.row === t3.row && e4.button === t3.button && e4.action === t3.action && e4.ctrl === t3.ctrl && e4.alt === t3.alt && e4.shift === t3.shift;
              }, i([n(0, s.IBufferService), n(1, s.ICoreService)], e3);
            }();
            t2.CoreMouseService = f;
          }, 6975: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, s = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreService = void 0;
            var a = r(2585), c = r(8460), l = r(1439), h = r(844), u = Object.freeze({ insertMode: false }), f = Object.freeze({ applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, origin: false, reverseWraparound: false, sendFocus: false, wraparound: true }), _ = function(e3) {
              function t3(t4, r2, i2, n2) {
                var o2 = e3.call(this) || this;
                return o2._bufferService = r2, o2._logService = i2, o2._optionsService = n2, o2.isCursorInitialized = false, o2.isCursorHidden = false, o2._onData = o2.register(new c.EventEmitter()), o2._onUserInput = o2.register(new c.EventEmitter()), o2._onBinary = o2.register(new c.EventEmitter()), o2._scrollToBottom = t4, o2.register({ dispose: function() {
                  return o2._scrollToBottom = void 0;
                } }), o2.modes = (0, l.clone)(u), o2.decPrivateModes = (0, l.clone)(f), o2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onData", { get: function() {
                return this._onData.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onUserInput", { get: function() {
                return this._onUserInput.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onBinary", { get: function() {
                return this._onBinary.event;
              }, enumerable: false, configurable: true }), t3.prototype.reset = function() {
                this.modes = (0, l.clone)(u), this.decPrivateModes = (0, l.clone)(f);
              }, t3.prototype.triggerDataEvent = function(e4, t4) {
                if (void 0 === t4 && (t4 = false), !this._optionsService.rawOptions.disableStdin) {
                  var r2 = this._bufferService.buffer;
                  r2.ybase !== r2.ydisp && this._scrollToBottom(), t4 && this._onUserInput.fire(), this._logService.debug('sending data "' + e4 + '"', function() {
                    return e4.split("").map(function(e5) {
                      return e5.charCodeAt(0);
                    });
                  }), this._onData.fire(e4);
                }
              }, t3.prototype.triggerBinaryEvent = function(e4) {
                this._optionsService.rawOptions.disableStdin || (this._logService.debug('sending binary "' + e4 + '"', function() {
                  return e4.split("").map(function(e5) {
                    return e5.charCodeAt(0);
                  });
                }), this._onBinary.fire(e4));
              }, o([s(1, a.IBufferService), s(2, a.ILogService), s(3, a.IOptionsService)], t3);
            }(h.Disposable);
            t2.CoreService = _;
          }, 9074: function(e2, t2, r) {
            var i, n = this && this.__extends || (i = function(e3, t3) {
              return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
                e4.__proto__ = t4;
              } || function(e4, t4) {
                for (var r2 in t4)
                  Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
              }, i(e3, t3);
            }, function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
              function r2() {
                this.constructor = e3;
              }
              i(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
            }), o = this && this.__generator || function(e3, t3) {
              var r2, i2, n2, o2, s2 = { label: 0, sent: function() {
                if (1 & n2[0])
                  throw n2[1];
                return n2[1];
              }, trys: [], ops: [] };
              return o2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
                return this;
              }), o2;
              function a2(o3) {
                return function(a3) {
                  return function(o4) {
                    if (r2)
                      throw new TypeError("Generator is already executing.");
                    for (; s2; )
                      try {
                        if (r2 = 1, i2 && (n2 = 2 & o4[0] ? i2.return : o4[0] ? i2.throw || ((n2 = i2.return) && n2.call(i2), 0) : i2.next) && !(n2 = n2.call(i2, o4[1])).done)
                          return n2;
                        switch (i2 = 0, n2 && (o4 = [2 & o4[0], n2.value]), o4[0]) {
                          case 0:
                          case 1:
                            n2 = o4;
                            break;
                          case 4:
                            return s2.label++, { value: o4[1], done: false };
                          case 5:
                            s2.label++, i2 = o4[1], o4 = [0];
                            continue;
                          case 7:
                            o4 = s2.ops.pop(), s2.trys.pop();
                            continue;
                          default:
                            if (!((n2 = (n2 = s2.trys).length > 0 && n2[n2.length - 1]) || 6 !== o4[0] && 2 !== o4[0])) {
                              s2 = 0;
                              continue;
                            }
                            if (3 === o4[0] && (!n2 || o4[1] > n2[0] && o4[1] < n2[3])) {
                              s2.label = o4[1];
                              break;
                            }
                            if (6 === o4[0] && s2.label < n2[1]) {
                              s2.label = n2[1], n2 = o4;
                              break;
                            }
                            if (n2 && s2.label < n2[2]) {
                              s2.label = n2[2], s2.ops.push(o4);
                              break;
                            }
                            n2[2] && s2.ops.pop(), s2.trys.pop();
                            continue;
                        }
                        o4 = t3.call(e3, s2);
                      } catch (e4) {
                        o4 = [6, e4], i2 = 0;
                      } finally {
                        r2 = n2 = 0;
                      }
                    if (5 & o4[0])
                      throw o4[1];
                    return { value: o4[0] ? o4[1] : void 0, done: true };
                  }([o3, a3]);
                };
              }
            }, s = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DecorationService = void 0;
            var a = r(8055), c = r(8460), l = r(844), h = r(6106), u = function(e3) {
              function t3() {
                var t4 = e3.call(this) || this;
                return t4._decorations = new h.SortedList(function(e4) {
                  return e4.marker.line;
                }), t4._onDecorationRegistered = t4.register(new c.EventEmitter()), t4._onDecorationRemoved = t4.register(new c.EventEmitter()), t4;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "onDecorationRegistered", { get: function() {
                return this._onDecorationRegistered.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "onDecorationRemoved", { get: function() {
                return this._onDecorationRemoved.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "decorations", { get: function() {
                return this._decorations.values();
              }, enumerable: false, configurable: true }), t3.prototype.registerDecoration = function(e4) {
                var t4 = this;
                if (!e4.marker.isDisposed) {
                  var r2 = new f(e4);
                  if (r2) {
                    var i2 = r2.marker.onDispose(function() {
                      return r2.dispose();
                    });
                    r2.onDispose(function() {
                      r2 && (t4._decorations.delete(r2) && t4._onDecorationRemoved.fire(r2), i2.dispose());
                    }), this._decorations.insert(r2), this._onDecorationRegistered.fire(r2);
                  }
                  return r2;
                }
              }, t3.prototype.reset = function() {
                var e4, t4;
                try {
                  for (var r2 = s(this._decorations.values()), i2 = r2.next(); !i2.done; i2 = r2.next())
                    i2.value.dispose();
                } catch (t5) {
                  e4 = { error: t5 };
                } finally {
                  try {
                    i2 && !i2.done && (t4 = r2.return) && t4.call(r2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
                this._decorations.clear();
              }, t3.prototype.getDecorationsAtLine = function(e4) {
                return o(this, function(t4) {
                  return [2, this._decorations.getKeyIterator(e4)];
                });
              }, t3.prototype.getDecorationsAtCell = function(e4, t4, r2) {
                var i2, n2, a2, c2, l2, h2, u2, f2, _, d, p;
                return o(this, function(o2) {
                  switch (o2.label) {
                    case 0:
                      i2 = 0, n2 = 0, o2.label = 1;
                    case 1:
                      o2.trys.push([1, 6, 7, 8]), a2 = s(this._decorations.getKeyIterator(t4)), c2 = a2.next(), o2.label = 2;
                    case 2:
                      return c2.done ? [3, 5] : (l2 = c2.value, i2 = null !== (_ = l2.options.x) && void 0 !== _ ? _ : 0, n2 = i2 + (null !== (d = l2.options.width) && void 0 !== d ? d : 1), !(e4 >= i2 && e4 < n2) || r2 && (null !== (p = l2.options.layer) && void 0 !== p ? p : "bottom") !== r2 ? [3, 4] : [4, l2]);
                    case 3:
                      o2.sent(), o2.label = 4;
                    case 4:
                      return c2 = a2.next(), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return h2 = o2.sent(), u2 = { error: h2 }, [3, 8];
                    case 7:
                      try {
                        c2 && !c2.done && (f2 = a2.return) && f2.call(a2);
                      } finally {
                        if (u2)
                          throw u2.error;
                      }
                      return [7];
                    case 8:
                      return [2];
                  }
                });
              }, t3.prototype.dispose = function() {
                var e4, t4;
                try {
                  for (var r2 = s(this._decorations.values()), i2 = r2.next(); !i2.done; i2 = r2.next()) {
                    var n2 = i2.value;
                    this._onDecorationRemoved.fire(n2);
                  }
                } catch (t5) {
                  e4 = { error: t5 };
                } finally {
                  try {
                    i2 && !i2.done && (t4 = r2.return) && t4.call(r2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
                this.reset();
              }, t3;
            }(l.Disposable);
            t2.DecorationService = u;
            var f = function(e3) {
              function t3(t4) {
                var r2 = e3.call(this) || this;
                return r2.options = t4, r2.isDisposed = false, r2.onRenderEmitter = r2.register(new c.EventEmitter()), r2.onRender = r2.onRenderEmitter.event, r2._onDispose = r2.register(new c.EventEmitter()), r2.onDispose = r2._onDispose.event, r2._cachedBg = null, r2._cachedFg = null, r2.marker = t4.marker, r2.options.overviewRulerOptions && !r2.options.overviewRulerOptions.position && (r2.options.overviewRulerOptions.position = "full"), r2;
              }
              return n(t3, e3), Object.defineProperty(t3.prototype, "backgroundColorRGB", { get: function() {
                return null === this._cachedBg && (this.options.backgroundColor ? this._cachedBg = a.css.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
              }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "foregroundColorRGB", { get: function() {
                return null === this._cachedFg && (this.options.foregroundColor ? this._cachedFg = a.css.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
              }, enumerable: false, configurable: true }), t3.prototype.dispose = function() {
                this._isDisposed || (this._isDisposed = true, this._onDispose.fire(), e3.prototype.dispose.call(this));
              }, t3;
            }(l.Disposable);
          }, 3730: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a = e3.length - 1; a >= 0; a--)
                  (n2 = e3[a]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DirtyRowService = void 0;
            var o = r(2585), s = function() {
              function e3(e4) {
                this._bufferService = e4, this.clearRange();
              }
              return Object.defineProperty(e3.prototype, "start", { get: function() {
                return this._start;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "end", { get: function() {
                return this._end;
              }, enumerable: false, configurable: true }), e3.prototype.clearRange = function() {
                this._start = this._bufferService.buffer.y, this._end = this._bufferService.buffer.y;
              }, e3.prototype.markDirty = function(e4) {
                e4 < this._start ? this._start = e4 : e4 > this._end && (this._end = e4);
              }, e3.prototype.markRangeDirty = function(e4, t3) {
                if (e4 > t3) {
                  var r2 = e4;
                  e4 = t3, t3 = r2;
                }
                e4 < this._start && (this._start = e4), t3 > this._end && (this._end = t3);
              }, e3.prototype.markAllDirty = function() {
                this.markRangeDirty(0, this._bufferService.rows - 1);
              }, i([n(0, o.IBufferService)], e3);
            }();
            t2.DirtyRowService = s;
          }, 4348: function(e2, t2, r) {
            var i = this && this.__values || function(e3) {
              var t3 = "function" == typeof Symbol && Symbol.iterator, r2 = t3 && e3[t3], i2 = 0;
              if (r2)
                return r2.call(e3);
              if (e3 && "number" == typeof e3.length)
                return { next: function() {
                  return e3 && i2 >= e3.length && (e3 = void 0), { value: e3 && e3[i2++], done: !e3 };
                } };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, n = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s2 = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s2.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s2;
            }, o = this && this.__spreadArray || function(e3, t3, r2) {
              if (r2 || 2 === arguments.length)
                for (var i2, n2 = 0, o2 = t3.length; n2 < o2; n2++)
                  !i2 && n2 in t3 || (i2 || (i2 = Array.prototype.slice.call(t3, 0, n2)), i2[n2] = t3[n2]);
              return e3.concat(i2 || Array.prototype.slice.call(t3));
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.InstantiationService = t2.ServiceCollection = void 0;
            var s = r(2585), a = r(8343), c = function() {
              function e3() {
                for (var e4, t3, r2 = [], o2 = 0; o2 < arguments.length; o2++)
                  r2[o2] = arguments[o2];
                this._entries = /* @__PURE__ */ new Map();
                try {
                  for (var s2 = i(r2), a2 = s2.next(); !a2.done; a2 = s2.next()) {
                    var c2 = n(a2.value, 2), l2 = c2[0], h = c2[1];
                    this.set(l2, h);
                  }
                } catch (t4) {
                  e4 = { error: t4 };
                } finally {
                  try {
                    a2 && !a2.done && (t3 = s2.return) && t3.call(s2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
              }
              return e3.prototype.set = function(e4, t3) {
                var r2 = this._entries.get(e4);
                return this._entries.set(e4, t3), r2;
              }, e3.prototype.forEach = function(e4) {
                this._entries.forEach(function(t3, r2) {
                  return e4(r2, t3);
                });
              }, e3.prototype.has = function(e4) {
                return this._entries.has(e4);
              }, e3.prototype.get = function(e4) {
                return this._entries.get(e4);
              }, e3;
            }();
            t2.ServiceCollection = c;
            var l = function() {
              function e3() {
                this._services = new c(), this._services.set(s.IInstantiationService, this);
              }
              return e3.prototype.setService = function(e4, t3) {
                this._services.set(e4, t3);
              }, e3.prototype.getService = function(e4) {
                return this._services.get(e4);
              }, e3.prototype.createInstance = function(e4) {
                for (var t3, r2, s2 = [], c2 = 1; c2 < arguments.length; c2++)
                  s2[c2 - 1] = arguments[c2];
                var l2 = (0, a.getServiceDependencies)(e4).sort(function(e5, t4) {
                  return e5.index - t4.index;
                }), h = [];
                try {
                  for (var u = i(l2), f = u.next(); !f.done; f = u.next()) {
                    var _ = f.value, d = this._services.get(_.id);
                    if (!d)
                      throw new Error("[createInstance] " + e4.name + " depends on UNKNOWN service " + _.id + ".");
                    h.push(d);
                  }
                } catch (e5) {
                  t3 = { error: e5 };
                } finally {
                  try {
                    f && !f.done && (r2 = u.return) && r2.call(u);
                  } finally {
                    if (t3)
                      throw t3.error;
                  }
                }
                var p = l2.length > 0 ? l2[0].index : s2.length;
                if (s2.length !== p)
                  throw new Error("[createInstance] First service dependency of " + e4.name + " at position " + (p + 1) + " conflicts with " + s2.length + " static arguments");
                return new (e4.bind.apply(e4, o([void 0], n(o(o([], n(s2), false), n(h), false)), false)))();
              }, e3;
            }();
            t2.InstantiationService = l;
          }, 7866: function(e2, t2, r) {
            var i = this && this.__decorate || function(e3, t3, r2, i2) {
              var n2, o2 = arguments.length, s2 = o2 < 3 ? t3 : null === i2 ? i2 = Object.getOwnPropertyDescriptor(t3, r2) : i2;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s2 = Reflect.decorate(e3, t3, r2, i2);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (n2 = e3[a2]) && (s2 = (o2 < 3 ? n2(s2) : o2 > 3 ? n2(t3, r2, s2) : n2(t3, r2)) || s2);
              return o2 > 3 && s2 && Object.defineProperty(t3, r2, s2), s2;
            }, n = this && this.__param || function(e3, t3) {
              return function(r2, i2) {
                t3(r2, i2, e3);
              };
            }, o = this && this.__read || function(e3, t3) {
              var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
              if (!r2)
                return e3;
              var i2, n2, o2 = r2.call(e3), s2 = [];
              try {
                for (; (void 0 === t3 || t3-- > 0) && !(i2 = o2.next()).done; )
                  s2.push(i2.value);
              } catch (e4) {
                n2 = { error: e4 };
              } finally {
                try {
                  i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
                } finally {
                  if (n2)
                    throw n2.error;
                }
              }
              return s2;
            }, s = this && this.__spreadArray || function(e3, t3, r2) {
              if (r2 || 2 === arguments.length)
                for (var i2, n2 = 0, o2 = t3.length; n2 < o2; n2++)
                  !i2 && n2 in t3 || (i2 || (i2 = Array.prototype.slice.call(t3, 0, n2)), i2[n2] = t3[n2]);
              return e3.concat(i2 || Array.prototype.slice.call(t3));
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.LogService = void 0;
            var a = r(2585), c = { debug: a.LogLevelEnum.DEBUG, info: a.LogLevelEnum.INFO, warn: a.LogLevelEnum.WARN, error: a.LogLevelEnum.ERROR, off: a.LogLevelEnum.OFF }, l = function() {
              function e3(e4) {
                var t3 = this;
                this._optionsService = e4, this.logLevel = a.LogLevelEnum.OFF, this._updateLogLevel(), this._optionsService.onOptionChange(function(e5) {
                  "logLevel" === e5 && t3._updateLogLevel();
                });
              }
              return e3.prototype._updateLogLevel = function() {
                this.logLevel = c[this._optionsService.rawOptions.logLevel];
              }, e3.prototype._evalLazyOptionalParams = function(e4) {
                for (var t3 = 0; t3 < e4.length; t3++)
                  "function" == typeof e4[t3] && (e4[t3] = e4[t3]());
              }, e3.prototype._log = function(e4, t3, r2) {
                this._evalLazyOptionalParams(r2), e4.call.apply(e4, s([console, "xterm.js: " + t3], o(r2), false));
              }, e3.prototype.debug = function(e4) {
                for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                  t3[r2 - 1] = arguments[r2];
                this.logLevel <= a.LogLevelEnum.DEBUG && this._log(console.log, e4, t3);
              }, e3.prototype.info = function(e4) {
                for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                  t3[r2 - 1] = arguments[r2];
                this.logLevel <= a.LogLevelEnum.INFO && this._log(console.info, e4, t3);
              }, e3.prototype.warn = function(e4) {
                for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                  t3[r2 - 1] = arguments[r2];
                this.logLevel <= a.LogLevelEnum.WARN && this._log(console.warn, e4, t3);
              }, e3.prototype.error = function(e4) {
                for (var t3 = [], r2 = 1; r2 < arguments.length; r2++)
                  t3[r2 - 1] = arguments[r2];
                this.logLevel <= a.LogLevelEnum.ERROR && this._log(console.error, e4, t3);
              }, i([n(0, a.IOptionsService)], e3);
            }();
            t2.LogService = l;
          }, 7302: function(e2, t2, r) {
            var i = this && this.__assign || function() {
              return i = Object.assign || function(e3) {
                for (var t3, r2 = 1, i2 = arguments.length; r2 < i2; r2++)
                  for (var n2 in t3 = arguments[r2])
                    Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
                return e3;
              }, i.apply(this, arguments);
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.OptionsService = t2.DEFAULT_OPTIONS = t2.DEFAULT_BELL_SOUND = void 0;
            var n = r(8460), o = r(6114);
            t2.DEFAULT_BELL_SOUND = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", t2.DEFAULT_OPTIONS = { cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, customGlyphs: true, bellSound: t2.DEFAULT_BELL_SOUND, bellStyle: "none", drawBoldTextInBrightColors: true, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "courier-new, courier, monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", lineHeight: 1, linkTooltipHoverDuration: 500, letterSpacing: 0, logLevel: "info", scrollback: 1e3, scrollSensitivity: 1, screenReaderMode: false, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: true, allowTransparency: false, tabStopWidth: 8, theme: {}, rightClickSelectsWord: o.isMac, rendererType: "canvas", windowOptions: {}, windowsMode: false, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false, overviewRulerWidth: void 0 };
            var s = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"], a = function() {
              function e3(e4) {
                this._onOptionChange = new n.EventEmitter();
                var r2 = i({}, t2.DEFAULT_OPTIONS);
                for (var o2 in e4)
                  if (o2 in r2)
                    try {
                      var s2 = e4[o2];
                      r2[o2] = this._sanitizeAndValidateOption(o2, s2);
                    } catch (e5) {
                      console.error(e5);
                    }
                this.rawOptions = r2, this.options = i({}, r2), this._setupOptions();
              }
              return Object.defineProperty(e3.prototype, "onOptionChange", { get: function() {
                return this._onOptionChange.event;
              }, enumerable: false, configurable: true }), e3.prototype._setupOptions = function() {
                var e4 = this, r2 = function(r3) {
                  if (!(r3 in t2.DEFAULT_OPTIONS))
                    throw new Error('No option with key "' + r3 + '"');
                  return e4.rawOptions[r3];
                }, i2 = function(r3, i3) {
                  if (!(r3 in t2.DEFAULT_OPTIONS))
                    throw new Error('No option with key "' + r3 + '"');
                  i3 = e4._sanitizeAndValidateOption(r3, i3), e4.rawOptions[r3] !== i3 && (e4.rawOptions[r3] = i3, e4._onOptionChange.fire(r3));
                };
                for (var n2 in this.rawOptions) {
                  var o2 = { get: r2.bind(this, n2), set: i2.bind(this, n2) };
                  Object.defineProperty(this.options, n2, o2);
                }
              }, e3.prototype.setOption = function(e4, t3) {
                this.options[e4] = t3;
              }, e3.prototype._sanitizeAndValidateOption = function(e4, r2) {
                switch (e4) {
                  case "bellStyle":
                  case "cursorStyle":
                  case "rendererType":
                  case "wordSeparator":
                    r2 || (r2 = t2.DEFAULT_OPTIONS[e4]);
                    break;
                  case "fontWeight":
                  case "fontWeightBold":
                    if ("number" == typeof r2 && 1 <= r2 && r2 <= 1e3)
                      break;
                    r2 = s.includes(r2) ? r2 : t2.DEFAULT_OPTIONS[e4];
                    break;
                  case "cursorWidth":
                    r2 = Math.floor(r2);
                  case "lineHeight":
                  case "tabStopWidth":
                    if (r2 < 1)
                      throw new Error(e4 + " cannot be less than 1, value: " + r2);
                    break;
                  case "minimumContrastRatio":
                    r2 = Math.max(1, Math.min(21, Math.round(10 * r2) / 10));
                    break;
                  case "scrollback":
                    if ((r2 = Math.min(r2, 4294967295)) < 0)
                      throw new Error(e4 + " cannot be less than 0, value: " + r2);
                    break;
                  case "fastScrollSensitivity":
                  case "scrollSensitivity":
                    if (r2 <= 0)
                      throw new Error(e4 + " cannot be less than or equal to 0, value: " + r2);
                  case "rows":
                  case "cols":
                    if (!r2 && 0 !== r2)
                      throw new Error(e4 + " must be numeric, value: " + r2);
                }
                return r2;
              }, e3.prototype.getOption = function(e4) {
                return this.options[e4];
              }, e3;
            }();
            t2.OptionsService = a;
          }, 8343: (e2, t2) => {
            function r(e3, t3, r2) {
              t3.di$target === t3 ? t3.di$dependencies.push({ id: e3, index: r2 }) : (t3.di$dependencies = [{ id: e3, index: r2 }], t3.di$target = t3);
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.createDecorator = t2.getServiceDependencies = t2.serviceRegistry = void 0, t2.serviceRegistry = /* @__PURE__ */ new Map(), t2.getServiceDependencies = function(e3) {
              return e3.di$dependencies || [];
            }, t2.createDecorator = function(e3) {
              if (t2.serviceRegistry.has(e3))
                return t2.serviceRegistry.get(e3);
              var i = function(e4, t3, n) {
                if (3 !== arguments.length)
                  throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                r(i, e4, n);
              };
              return i.toString = function() {
                return e3;
              }, t2.serviceRegistry.set(e3, i), i;
            };
          }, 2585: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.IDecorationService = t2.IUnicodeService = t2.IOptionsService = t2.ILogService = t2.LogLevelEnum = t2.IInstantiationService = t2.IDirtyRowService = t2.ICharsetService = t2.ICoreService = t2.ICoreMouseService = t2.IBufferService = void 0;
            var i, n = r(8343);
            t2.IBufferService = (0, n.createDecorator)("BufferService"), t2.ICoreMouseService = (0, n.createDecorator)("CoreMouseService"), t2.ICoreService = (0, n.createDecorator)("CoreService"), t2.ICharsetService = (0, n.createDecorator)("CharsetService"), t2.IDirtyRowService = (0, n.createDecorator)("DirtyRowService"), t2.IInstantiationService = (0, n.createDecorator)("InstantiationService"), (i = t2.LogLevelEnum || (t2.LogLevelEnum = {}))[i.DEBUG = 0] = "DEBUG", i[i.INFO = 1] = "INFO", i[i.WARN = 2] = "WARN", i[i.ERROR = 3] = "ERROR", i[i.OFF = 4] = "OFF", t2.ILogService = (0, n.createDecorator)("LogService"), t2.IOptionsService = (0, n.createDecorator)("OptionsService"), t2.IUnicodeService = (0, n.createDecorator)("UnicodeService"), t2.IDecorationService = (0, n.createDecorator)("DecorationService");
          }, 1480: (e2, t2, r) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeService = void 0;
            var i = r(8460), n = r(225), o = function() {
              function e3() {
                this._providers = /* @__PURE__ */ Object.create(null), this._active = "", this._onChange = new i.EventEmitter();
                var e4 = new n.UnicodeV6();
                this.register(e4), this._active = e4.version, this._activeProvider = e4;
              }
              return Object.defineProperty(e3.prototype, "onChange", { get: function() {
                return this._onChange.event;
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "versions", { get: function() {
                return Object.keys(this._providers);
              }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "activeVersion", { get: function() {
                return this._active;
              }, set: function(e4) {
                if (!this._providers[e4])
                  throw new Error('unknown Unicode version "' + e4 + '"');
                this._active = e4, this._activeProvider = this._providers[e4], this._onChange.fire(e4);
              }, enumerable: false, configurable: true }), e3.prototype.register = function(e4) {
                this._providers[e4.version] = e4;
              }, e3.prototype.wcwidth = function(e4) {
                return this._activeProvider.wcwidth(e4);
              }, e3.prototype.getStringCellWidth = function(e4) {
                for (var t3 = 0, r2 = e4.length, i2 = 0; i2 < r2; ++i2) {
                  var n2 = e4.charCodeAt(i2);
                  if (55296 <= n2 && n2 <= 56319) {
                    if (++i2 >= r2)
                      return t3 + this.wcwidth(n2);
                    var o2 = e4.charCodeAt(i2);
                    56320 <= o2 && o2 <= 57343 ? n2 = 1024 * (n2 - 55296) + o2 - 56320 + 65536 : t3 += this.wcwidth(o2);
                  }
                  t3 += this.wcwidth(n2);
                }
                return t3;
              }, e3;
            }();
            t2.UnicodeService = o;
          } }, t = {};
          return function r(i) {
            var n = t[i];
            if (void 0 !== n)
              return n.exports;
            var o = t[i] = { exports: {} };
            return e[i].call(o.exports, o, o.exports, r), o.exports;
          }(4389);
        })();
      });
    }
  });

  // src/index.js
  var import_xterm = __toESM(require_xterm());
  var ws = new WebSocket(`wss://onlineklox-production.up.railway.app`);
  console.log("created instace of websocket");
  console.log(ws);
  var term = new import_xterm.Terminal();
  term.open(document.getElementById("terminal"));
  term.write("Try out \x1B[1;3;31mKlox\x1B[0m \r\n");
  term.write(
    "Contribute to the project at: https://github.com/srirajshukla/klox \r\n"
  );
  term.onData((e) => {
    ws.send(e);
  });
  ws.onmessage = function(e) {
    term.write(e.data);
  };
})();
