var players = [];

var S = [
  "div",
  "100%",
  "⬅️ ",
  "absolute",
  "canvas",
  "none",
  "inherit",
  "rgb(",
  "rgba(",
  "auto",
  "center",
  "<br>",
  "0.75em",
  "   ",
  "span",
  "hidden",
  "flex",
  "1em",
  "Data",
  "0.8em",
  " / ",
  "territorial.io",
  "input",
  "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==",
  "click",
  "0.5em",
  "' target='_blank'>",
  "undefined",
  "pre",
  "</a>",
  "scroll",
  "pointer",
  "password",
  "middle",
  "function",
  "break-word",
  "bold",
  "Value",
  "Escape",
  "Enter",
  "1.5em",
  "0.6em",
  "0.4em",
  "text",
  "string",
  "rgba(0,0,0,0.8)",
  "number",
  "nowrap",
  "mouseleave",
  "inline-block",
  "focus",
  "blur",
  "Space",
  "Redacted ",
  "Player ",
  "NoStack",
  "<a href='",
  "50%",
  "1.2em",
  "1.0em",
  "0px",
  "0.3em",
  "0.0em 0.9em",
  " voted with ",
  "  • ",
  "   Gold: ",
  "🚩 Report",
  "🔄 Reload",
  "wheel",
  "underline",
  "top",
  "tls7",
  "sans-serif",
  "rgba(140,10,10,0.75)",
  "rgba(100,0,0,0.8)",
  "rgba(10,140,10,0.75)",
  "rgba(0,100,0,0.8)",
  "rgba(0,",
  "rgb(10,220,10)",
  "pre-wrap",
  "placeholder",
  "mouseover",
  "mouseout",
  "long",
  "logo",
  "loading",
  "keydown",
  "italic ",
  "file",
  "error",
  "en-US",
  "data:image/png;base64,",
  "break-all",
  "blur(4px)",
  "arena",
  "account",
  "accept",
  "_blank",
  "[Redacted Message]",
  "Seed",
  "Reload",
  "Patreon",
  "Interest",
  "Bot ",
  "Battle Royale",
  "Back",
  "Arial Black, sans-serif",
  "@room",
  "1v1",
  "1.4em",
  "1 Minute",
  "1 Hour",
  "1 Day",
  "000",
  "0.4em 0em",
  "0.2em",
  "0.02em brown",
  ". Duration: x",
  ",0,0.85)",
  " solid white;}",
  " Rank: ",
  " / 160",
  " -> ",
];
function a() {
  var b;
  var c;
  function d(e) {
    c = "";
    try {
      window.removeEventListener(S[89], d);
      c = e.lineno + " " + e.colno + "|" + f(e);
      if (performance.memory) {
        var g = [];
        g.push(Math.floor(performance.memory.jsHeapSizeLimit / 100000));
        g.push(Math.floor(performance.memory.totalJSHeapSize / 100000));
        g.push(Math.floor(performance.memory.usedJSHeapSize / 100000));
        c = c + "|" + g.join(" ");
      }
      if (h) {
        c = c + "|R" + h.i + "," + h.j + "," + h.k.toFixed(2);
      }
      c = c + "|" + e.message;
      if (l && l.m === 1) {
        c = l.n + "|" + o.p.join(",") + "|" + c;
        if (e.lineno < 43) {
          q();
          return;
        }
        var r = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!";
        r += "<br>Error Message: " + c;
        o.s();
        t.u(
          4,
          5,
          new v("🤖 Beep Boop! An error occurred.", r, true, [
            new w("Close", function () {
              t.x();
              t.y.z();
            }),
            new w(S[100], function () {
              a0.a1.a2();
            }),
          ])
        );
      }
    } catch (e) {
      c = "SE|" + c + "|" + e;
      console.log(c);
      alert(c);
    }
    q();
  }
  function q() {
    b = new WebSocket("wss://territorial.io/s52/");
    b.onopen = a3;
    b.onclose = function () {
      a4();
    };
  }
  function f(e) {
    if (!e.error) {
      return S[55];
    }
    var stack = e.error.stack;
    if (!stack || !stack.length) {
      return S[55];
    }
    var a5 = new RegExp(":([0-9]+):([0-9]+)", "g");
    var result = [];
    var match;
    while ((match = a5.exec(stack)) !== null) {
      result.push(parseInt(match[1], 10));
      result.push(parseInt(match[2], 10));
    }
    if (!result.length) {
      return S[55];
    }
    return result.join(" ");
  }
  function a3() {
    if (!b || b.readyState !== b.OPEN) {
      return;
    }
    var i = new a6();
    i.a7(1 + 6 + 2 + 1 + 1 + 1 + 7 * 228);
    i.a8(1, 0);
    i.a8(6, 7);
    i.a8(2, a0 ? a0.id : 3);
    i.a8(1, l.a9 ? 1 : 0);
    i.a8(1, l.aA ? 1 : 0);
    i.a8(1, l ? l.m : 0);
    for (var aB = 0; aB < c.length && aB < 228; aB++) {
      i.a8(7, c.charCodeAt(aB) % 128);
    }
    b.send(i.aC);
    a4();
  }
  function a4() {
    if (!b) {
      return;
    }
    b.onclose = null;
    b.onopen = null;
    b = null;
  }
  window.addEventListener(S[89], d);
}
a();
var l;
var aD;
var aE;
var aF;
var aG;
var aH;
var aI;
var aJ;
var aK;
var aL;
var aM;
var aN;
var aO;
var aP;
var aQ;
var aR;
var aS;
var aT;
var aU;
var aV;
var aW;
var aX;
var aY;
var aZ;
var aa;
var ab;
var ac;
var ad;
var ae;
var af;
var ag;
var ah;
var ai;
var aj;
var ak;
var al;
var am;
var an;
var ao;
var ap;
var aq;
var ar;
var at;
var au;
var av;
var aw;
var h;
var ax;
var ay;
var az;
var b0;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var bA;
var bB;
var bC;
var bD;
var bE;
var bF;
var bG;
var bH;
var bI;
var bJ;
var bK;
var bL;
var bM;
var bN;
var bO;
var bP;
var bQ;
var bR;
var bS;
var t;
var bT;
var bU;
var bV;
var bW;
var bX;
var bY;
var bZ;
var ba;
var bb;
var bc;
var bd;
var be;
var bf;
var bg;
var a0;
var bh;
var bi;
var bj;
var o;
var bk;
var bl;
var bm;
var bn;
var bo;
var bp;
function bq(br) {
  if (l && !br) {
    return;
  }
  function bs() {
    bt();
    bK = new bu();
    bJ = new bv();
    b9 = new bw();
    bA = new bx();
    aD = new by();
    b6 = new bz();
    bE = new c0();
    bF = new c1();
    aE = new c2();
    aF = new c3();
    aG = new c4();
    aH = new c5();
    aI = new c6();
    aJ = new c7();
    aK = new c8();
    aL = new c9();
    aM = new cA();
    aN = new cB();
    aO = new cC();
    aP = new cD();
    aQ = new cE();
    aR = new cF();
    aS = new cG();
    aT = new cH();
    aU = new cI();
    aV = new cJ();
    aW = new cK();
    aX = new cL();
    aY = new cM();
    aZ = new cN();
    aa = new cO();
    ab = new cP();
    ac = new cQ();
    ak = new cR();
    al = new cS();
    am = new cT();
    ad = new cU();
    ae = new cV();
    ah = new cW();
    af = new cX();
    ag = new cY();
    ai = new cZ();
    ay = new ca();
    aj = new cb();
    ao = new cc();
    ap = new cd();
    aq = new ce();
    az = new cf();
    ax = new cg();
    an = new ch();
    ar = new ci();
    at = new cj();
    au = new ck();
    h = new cl();
    av = new cm();
    aw = new cn();
    b0 = new co();
    b1 = new cp();
    b2 = new cq();
    b3 = new cr();
    b4 = new cs();
    b5 = new ct();
    b7 = new cu();
    b8 = new cv();
    bB = new cw();
    bC = new a6();
    bD = new cx();
    bG = new cy();
    bH = new cz();
    bI = new d0();
    bL = new d1();
    bM = new d2();
    bN = new d3();
    bO = new d4();
    bP = new d5();
    bQ = new d6();
    bR = new d7();
    bS = new d8();
    t = new d9();
    bT = new dA();
    a0 = new dB();
    l = new dC();
    bh = new dD();
    bi = new dE();
    bf = new dF();
    bg = new dG();
    bZ = new dH();
    ba = new dI();
    bU = new dJ();
    bV = new dK();
    bc = new dL();
    bd = new dM();
    be = new dN();
    bj = new dO();
    bb = new dP();
    o = new dQ();
    bk = new dR();
    bl = new dS();
    bm = new dT();
    bo = new dU();
    bp = new dV();
  }
  function dW() {
    l.dX();
    a0.dX();
    h.dY();
    bi.dX();
    b6.dX();
    b6.dZ();
    bW = new da();
    bW.dX();
    b9.dX();
    bU.dX();
    az.dX();
    bE.dX();
    bF.dX();
    bR.dX();
    t.dX();
    bX = new db();
    h.dX();
    a0.a1.dc();
    be.dX();
    bb.dX();
    bV.dX();
    bY = new dd();
    ax.dX();
    ae.de();
    bT.dX();
    ao.dX();
    aa.dX();
    aT.dX();
    ai.dX();
    bI.dX();
    ab.dX();
    be.df = true;
    setTimeout(function () {
      bR.a7(2, 14071);
    }, 0);
    t.u(5, 5);
    if (!bH.dg()) {
      a0.a1.dh();
    }
    h.di();
  }
  bs();
  dW();
  l.m = 1;
}
function dC() {
  this.dj = 1097;
  this.n = 2086;
  this.rVersion = 9;
  this.dk = 0;
  this.dX = function () {
    this.dl = 2;
    var dm = bK.dn(this.n, 10) % 100;
    this.dp = "26 June 2025 [" + bK.dn(this.n, 1000) + "." + (dm < 10 ? "0" : "") + dm + "." + (this.n % 10) + "]";
    this.a9 = window.location.hostname.toLowerCase().indexOf(S[21]) >= 0;
    this.aA = dq();
    this.dr = new Date().getTime() % 1024;
  };
  this.m = 0;
  function dq() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
}
function ds() {
  var dt = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)];
  var du = [100, 60, 30, 15, 6, 1];
  var dv = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [1, 2, 1, 1, 1],
    [1, 3, 2, 1, 2],
    [1, 4, 2, 2, 3],
    [1, 4, 3, 3, 4],
    [1, 5, 3, 3, 5],
  ];
  var dw = [
    " 👢 kicked ",
    " 🔇 muted ",
    " ✂️ redacted the username of ",
    " deducted x from ",
    " seized x from ",
    " 🚩 reported ",
  ];
  var dx = ["👢 Kick", "🔇 Mute", "✂️ Username Redaction", "Elo Deduction", "Gold Seizure", S[66]];
  var dy = [".", S[117], S[117], ".", ".", ". Reason: x"];
  this.dz = [
    ["", "", ""],
    ["20 Seconds", S[110], "5 Minutes", S[111], S[112]],
    [S[110], S[111], S[112]],
    ["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
    ["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
    ["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"],
  ];
  this.e0 = function (id, e1, e2) {
    var aB = this.e3(e1);
    return +(dv[aB][id] > e2);
  };
  this.e3 = function (e1) {
    for (var aB = 0; aB < du.length; aB++) {
      if (e1 >= du[aB]) {
        return aB;
      }
    }
    return du.length;
  };
  this.e4 = function (e1) {
    return dt[this.e3(e1)];
  };
  this.e5 = function (id, e6) {
    return dw[id].replace(new RegExp("x", "g"), e6);
  };
  this.e7 = function (id, e6) {
    return dy[id].replace(new RegExp("x", "g"), e6);
  };
  this.e8 = function (id, e9) {
    return dx[id] + (this.dz[id][e9].length ? " (" + this.dz[id][e9] + ")" : "");
  };
}
function dA() {
  this.eA = new eB();
  this.dX = function () {
    a0.a1.eC();
  };
  this.eD = function () {
    return bi.eE.data[160].value;
  };
}
function eB() {
  var eF = 1000 * 20;
  this.show = function () {
    if (be.eG < eF) {
      return false;
    }
    var dm = 22.5 * 60 * 1000;
    eF = be.eG + dm;
    if (l.dl !== 2) {
      return;
    }
    a0.a1.eH(Math.floor(dm));
  };
}
function cT() {
  this.eI = new eJ();
}
function eJ() {
  this.eK = function (eL) {
    if (!bR.eM(bR.eN)) {
      return 0;
    }
    if (!aD.data.passableMountains) {
      return 0;
    }
    var eO = ac.eP(eL);
    if (!this.eQ(aD.eR, eO) && !this.eS(aD.eR, eO)) {
      return 0;
    }
    var eT = eU(bL.eV(eL));
    if (eT === 0) {
      return 0;
    }
    var eW = bL.eX(eT);
    if (ac.eY(eW)) {
      return eT;
    }
    var player = ac.eZ(eW);
    if (player === aD.eR) {
      return 0;
    }
    if (ea(player, aD.eR)) {
      return eT;
    }
    return 0;
  };
  this.eb = function (player, eT) {
    var eL = bL.eX(eT);
    if (!ac.ec(eL)) {
      return false;
    }
    if (ac.eY(eL)) {
      bN.ed[0] = aD.ee;
    } else if (ac.eZ(eL) !== bN.ed[0]) {
      return false;
    }
    var ef = eg(eL);
    var eh = ef.length;
    for (var aB = 0; aB < eh; aB++) {
      if (!this.eQ(player, ef[aB]) && !this.eS(player, ef[aB])) {
        continue;
      }
      bN.ei[0] = bN.ei[aB];
      return true;
    }
    return false;
  };
  function eg(eL) {
    var ej = ac.ej;
    var ef = [];
    loop: for (var ek = 3; ek >= 0; ek--) {
      var el = eL + ej[ek];
      if (ac.em(el)) {
        var id = ac.eP(el);
        for (var aB = 0; aB < ef.length; aB++) {
          if (id === ef[aB]) {
            continue loop;
          }
        }
        bN.ei[ef.length] = el;
        ef.push(id);
      }
    }
    return ef;
  }
  function eU(en) {
    var eo = bL.ep(en);
    var eq = bL.er(en);
    var max = Math.max(bR.es, bR.et) - 2;
    var eu = max * max;
    var ev = false;
    var ew = 0;
    for (var ex = 0; ex < max; ex++) {
      var eT = dg(eo, eq, ex);
      if (!eT) {
        continue;
      }
      var ey = bL.ez(eo, eq, eT);
      if (ey < eu) {
        ew = eT;
        eu = ey;
        if (!ev) {
          ev = true;
          max = Math.floor(Math.sqrt(ey)) + 1;
        }
      }
    }
    return ew;
  }
  function dg(eo, eq, ex) {
    for (var aB = 0; aB <= ex; aB++) {
      for (var f0 = -1; f0 < 2; f0 += 2) {
        for (var f1 = -1; f1 < 2; f1 += 2) {
          for (var f2 = 0; f2 < 2; f2++) {
            var eL = f3(eo + f2 * f0 * aB + (1 - f2) * f1 * ex, eq + f2 * f1 * ex + (1 - f2) * f0 * aB);
            if (eL) {
              return eL;
            }
          }
        }
      }
    }
    return 0;
  }
  function f3(eo, eq) {
    if (!bL.f4(eo, eq)) {
      return 0;
    }
    var eT = bL.f5(eo, eq);
    var eL = bL.eX(eT);
    if (ac.ec(eL) && ac.f6(eL)) {
      return eT;
    }
    return 0;
  }
  this.eQ = function (player, eO) {
    var f7 = ag.f7[player];
    var eh = f7.length;
    var f8 = Math.max(bK.dn(eh, 12), 1);
    var ej = ac.ej;
    for (var aB = 0; aB < eh; aB += f8) {
      var eW = f7[aB];
      for (var ek = 3; ek >= 0; ek--) {
        var el = eW + ej[ek];
        if (ac.em(el) && eO === ac.eP(el)) {
          return true;
        }
      }
    }
    return false;
  };
  this.eS = function (player, eO) {
    var f7 = ag.f7[player];
    var eh = f7.length;
    var ej = ac.ej;
    for (var aB = 0; aB < eh; aB++) {
      var eW = f7[aB];
      for (var ek = 3; ek >= 0; ek--) {
        var el = eW + ej[ek];
        if (ac.em(el) && eO === ac.eP(el)) {
          return true;
        }
      }
    }
    return false;
  };
}
self.aiCommand746 = function (f9) {
  if (f9 === 0) {
    bq();
    return;
  }
  if (f9 === 1) {
    if (!a0) {
      return;
    }
    if (a0.id !== 1 || a0.dp < 14) {
      return;
    }
    bI.fA();
  }
};
function d3() {
  this.fB = new Uint16Array(2);
  this.fC = new Uint16Array(2);
  this.fD = new Int32Array(2);
  this.fE = new Uint32Array(2);
  this.fF = new Uint32Array(2);
  this.fG = new Uint8Array(4);
  this.fH = new Uint8Array(4);
  this.ei = new Uint32Array(4);
  this.fI = new Uint32Array(5);
  this.ed = new Uint32Array(8);
  this.fJ = new Uint16Array(16);
  this.fK = new Uint16Array(512);
  this.fL = new Uint16Array(512);
  this.fM = new Uint16Array(512);
  this.fN = function (g, fO) {
    g[0] = fO;
    return g;
  };
  this.fP = function (g, fO, fQ) {
    g[0] = fO;
    g[1] = fQ;
    return g;
  };
  this.fR = function (g, fO, fQ, fS) {
    g[0] = fO;
    g[1] = fQ;
    g[2] = fS;
    return g;
  };
  this.fT = function (g, fO, fQ, fS, fU) {
    g[0] = fO;
    g[1] = fQ;
    g[2] = fS;
    g[3] = fU;
    return g;
  };
}
var fV;
var fW;
var fX;
var fY;
var fZ;
var fa;
var fb;
var fc;
var fd;
var fe;
var ff;
var fg;
var fh;
function fi() {
  fb = 0;
  fc = 2048;
  fd = new Uint32Array(4 * fc);
  fe = 0;
  ff = new Uint32Array(fc);
  fg = new Uint8Array(bR.es * bR.et);
}
function fj(player) {
  fW = player;
  fh = false;
  fk();
  fl();
  for (var aB = ad.fm(fW) - 1; aB >= 0; aB--) {
    if (ad.fn(fW, aB) === 0) {
      fV = aB;
      fo();
    }
  }
  if (fh) {
    fp();
  }
}
function fp() {
  fq();
  fr();
}
function fo() {
  fa = ad.fs(fW, fV);
  fX = ad.ft(fW, fV);
  fY = ad.fu(fW, fV);
  fv();
  if (fb === 0) {
    fw();
    return;
  }
  fx();
  if (!fy()) {
    fw();
    return;
  }
  fz();
}
function fy() {
  fZ = bK.dn(fX, fb);
  if (fZ > aD.g0) {
    return true;
  }
  if (!fY) {
    return false;
  }
  var g1 = fb * (1 + aD.g0);
  fX += b9.g2.g3(fW, g1 - fX);
  fZ = bK.dn(fX, fb);
  return true;
}
function fx() {
  var aB;
  for (aB = fb - 1; aB >= 0; aB--) {
    fg[bK.dn(fd[aB], 4)] = 0;
  }
}
function fw() {
  if (ad.fm(fW) === 1) {
    aF.g4(fW);
  }
  var dm = b9.g2.g5(fW, fX);
  bc.g6(fW, fX - dm, 12);
  ad.g7(fW, fV);
}
function fk() {
  var player = fW;
  var g8 = ag.g8;
  var eh = Math.min(g8[player].length, fc);
  var g9 = 0;
  var gA = ff;
  for (var aB = eh - 1; aB >= 0; aB--) {
    gA[g9++] = g8[player][aB];
  }
  fe = g9;
}
function fl() {
  var aB;
  for (aB = ag.g8[fW].length - 1; aB >= 0; aB--) {
    if (ac.ec(ag.g8[fW][aB])) {
      ac.gB(ag.g8[fW][aB], fW);
    }
  }
  ag.g8[fW] = [];
}
function fv() {
  fb = 0;
  if (fa === aD.ee) {
    gC();
  } else {
    gD();
  }
}
function gD() {
  var gE, gF, ek, aB;
  var ej = ac.ej;
  for (ek = 3; ek >= 0; ek--) {
    for (aB = fe - 1; aB >= 0; aB--) {
      gE = ff[aB] + ej[ek];
      gF = bK.dn(gE, 4);
      if (fg[gF] === 0 && ac.gG(gE) && ac.eZ(gE) === fa) {
        fg[gF] = 1;
        fd[fb++] = gE;
      }
    }
  }
}
function gC() {
  var gE, gF, ek, aB;
  var ej = ac.ej;
  for (ek = 3; ek >= 0; ek--) {
    for (aB = fe - 1; aB >= 0; aB--) {
      gE = ff[aB] + ej[ek];
      gF = bK.dn(gE, 4);
      if (fg[gF] === 0 && ac.eY(gE)) {
        fg[gF] = 1;
        fd[fb++] = gE;
      }
    }
  }
}
function fz() {
  if (gH()) {
    gI();
    if (fa !== aD.ee) {
      gJ();
    }
  } else {
    fw();
  }
}
function gJ() {
  gK();
  gL(ag.gM[fa]);
  gL(ag.gN[fa]);
  if (bR.eM(bR.eN)) {
    gL(ag.f7[fa]);
  }
  gO(ag.g8[fa]);
  gP(ag.gN[fa]);
  gP(ag.f7[fa]);
  gQ();
  gR();
}
function gI() {
  fh = true;
  ad.gS(fW, fV, fX);
  ad.gT(fW, fV);
  ag.gU[fW] += fb;
  gV();
  gW();
}
function gH() {
  if (fa === aD.ee) {
    return gX();
  } else {
    return gY();
  }
}
function gY() {
  var gZ = fb * aD.g0;
  var ga = gb();
  var gc = gd();
  var ge = gZ + 2 * ga + gc;
  var gf = fZ * fb;
  if (gf > ge) {
    fX -= ge;
    bc.g6(fW, ge, 13);
    gg(ge - gZ, gc);
    return true;
  } else {
    if (fY && gc === 0) {
      fX -= gf;
      gf += b9.g2.g3(fW, ge - gf + 1);
      bc.g6(fW, gf, 13);
      gg(gf - gZ, 0);
      return true;
    }
    fX -= gf;
    bc.g6(fW, gf, 13);
    gg(gf - gZ, gc);
    return false;
  }
}
function gg(gf, gc) {
  if (gc > 0) {
    if (gf <= gc) {
      bc.g6(fa, gf, 13);
      ad.gh(fa, fW, gc - gf);
      return;
    }
    ad.gh(fa, fW, 0);
    gf -= gc;
  }
  gf = bK.dn(gf, 2);
  gf = Math.min(ag.gi[fa], gf);
  bc.g6(fa, gf, 13);
  ag.gi[fa] -= gf;
}
function gd() {
  return ad.gj(fa, fW);
}
function gb() {
  return bK.dn(fb * ag.gi[fa], 1 + bK.dn(10 * ag.gU[fa], 16));
}
function gX() {
  var gk = fb * aD.g0;
  fX -= gk;
  bc.g6(fW, gk, 13);
  return true;
}
function gW() {
  for (var aB = fb - 1; aB >= 0; aB--) {
    ag.g8[fW].push(fd[aB]);
    ag.gM[fW].push(fd[aB]);
    ac.gB(fd[aB], fW);
  }
}
function d8() {
  var gl = 0;
  var gm = 0;
  this.gn = function (eo, eq) {
    gl = eo;
    gm = eq;
  };
  this.go = function (gp) {
    if (aD.gq || aM.gr) {
      return;
    }
    if (!b9.g2.gs(0) && !b9.g2.gs(1)) {
      return;
    }
    if (!b9.g2.gt(aD.eR)) {
      return;
    }
    if (aR.gu(gl, gm)) {
      aR.gv = false;
      return;
    }
    if (aP.gu(gl, gm)) {
      return;
    }
    gw(gp);
  };
  function gw(gp) {
    var player;
    var gx = bL.gy(gl);
    var gz = bL.h0(gm);
    var eT = bL.f5(gx, gz);
    var eL = bL.eX(eT);
    if (!bL.h1(gx, gz)) {
      return;
    }
    if (aD.h2) {
      if (!ac.ec(eL)) {
        return;
      }
      b7.h3.h4(eT);
      return;
    }
    if (ac.em(eL)) {
      if (gp) {
        return;
      }
      var h5 = am.eI.eK(eL);
      if (h5) {
        var eW = bL.eX(h5);
        var h6 = ac.eY(eW) ? aD.ee : ac.eZ(eW);
        b7.h3.h7(aR.h8(), h5, h6);
      }
      return;
    }
    if (ac.h9(eL)) {
      if (bM.hA.hB(aD.eR, eT)) {
        b7.h3.hC(aR.h8(), eT);
      }
      return;
    }
    if (gp) {
      if (bM.hA.hB(aD.eR, eT)) {
        b7.h3.hC(aR.h8(), eT);
      }
      return;
    }
    if (ac.eY(eL)) {
      if (hD(aD.eR)) {
        b7.h3.hE(aR.h8(), aD.ee);
      } else if (hF(aD.eR, aD.ee)) {
        b0.hG(aD.ee, aR.h8());
      } else if (bM.hA.hB(aD.eR, eT)) {
        b7.h3.hC(aR.h8(), eT);
      }
      return;
    }
    player = ac.eZ(eL);
    if (player === aD.eR) {
      return;
    }
    if (!ea(player, aD.eR)) {
      if (bM.hA.hB(aD.eR, eT)) {
        b7.h3.hC(aR.h8(), eT);
      }
      return;
    }
    if (hH(aD.eR, player)) {
      b7.h3.hE(aR.h8(), player);
    } else if (hF(aD.eR, player)) {
      b0.hG(player, aR.h8());
    } else if (bM.hA.hB(aD.eR, eT)) {
      b7.h3.hC(aR.h8(), eT);
    }
  }
  this.hI = function () {
    if (aD.gq || aM.gr) {
      return;
    }
    if (!b9.g2.gs(1)) {
      return;
    }
    var gE = aD.eR;
    if (!b9.g2.gt(gE)) {
      return;
    }
    var eh = ad.fm(gE);
    if (eh < 1) {
      hJ();
      return;
    }
    var hK = 0;
    var hL = ad.ft(gE, 0);
    for (var aB = 1; aB < eh; aB++) {
      var hM = ad.ft(gE, aB);
      if (hM < hL) {
        hL = hM;
        hK = aB;
      }
    }
    b7.h3.hE(aR.h8(), ad.fs(gE, hK));
  };
  this.hN = function () {
    if (aD.gq || aM.gr) {
      return;
    }
    if (!b9.g2.gt(aD.eR)) {
      return;
    }
    if (!b9.g2.gs(1)) {
      return;
    }
    if (av.hO) {
      if (!av.hP(aD.eR)) {
        return;
      }
      b7.h3.hQ(1);
      return;
    }
    if (!av.hR(aD.eR)) {
      return;
    }
    b7.h3.hN();
  };
  function hJ() {
    var gE = aD.eR;
    if (hD(gE)) {
      b7.h3.hE(aR.h8(), aD.ee);
      return;
    }
    var ej = ac.ej;
    var gM = ag.gM;
    var eh = gM[gE].length;
    var hS = Math.floor(Math.random() * eh);
    for (var aB = 0; aB < eh; aB++) {
      for (var hT = 3; hT >= 0; hT--) {
        var hU = gM[gE][(aB + hS) % eh] + ej[hT];
        if (ac.gG(hU)) {
          var hV = ac.eZ(hU);
          if (hV !== gE && (!aD.hW || ea(gE, hV))) {
            b7.h3.hE(aR.h8(), hV);
            return;
          }
        }
      }
    }
  }
}
function hX(hY, size, hZ, ha, font) {
  function dX() {
    var aB, hb, hc;
    var hd = 0.2;
    var canvas = document.createElement(S[4]);
    var he = canvas.getContext("2d", {
      alpha: false,
    });
    canvas.width = hY;
    canvas.height = hY;
    he.font = size + font;
    he.textAlign = S[10];
    he.textBaseline = S[33];
    he.fillStyle = "red";
    for (aB = 0; aB < hZ.length; aB++) {
      he.fillText(hZ[aB], 0.5 * hY, 0.5 * hY);
    }
    hb = he.getImageData(0, 0, hY, hY);
    hc = hf(hb);
    if (hc > -1) {
      hd = (hc - 0.5 * hY + 0.1 * size) / size;
    }
    return Math.max(hd, 0);
  }
  function hf(hb) {
    var aB, e1;
    var ek = hb.data;
    for (aB = ek.length - 4; aB >= 0; aB -= 4) {
      e1 = ek[aB];
      if (e1 >= ha) {
        return Math.floor(aB / (4 * hY));
      }
    }
    return -1;
  }
  return dX();
}
function d1() {
  this.hg = new Int16Array(4);
  this.hh = new Int16Array(4);
  this.dX = function () {
    var aB;
    this.hg[0] = -bR.es;
    this.hg[1] = 1;
    this.hg[2] = bR.es;
    this.hg[3] = -1;
    for (aB = 0; aB < 4; aB++) {
      this.hh[aB] = 4 * this.hg[aB];
    }
  };
  this.hi = function (h5, hj) {
    var hk = this.ep(hj) - this.ep(h5);
    var hl = this.er(hj) - this.er(h5);
    var hm = (hk >>> 31) << 1;
    var hn = hl >>> 31;
    var ho = (Math.abs(hk) - Math.abs(hl)) >>> 31;
    return (5 + hm + (1 - hm) * (1 - (hn << 1)) * ho) & 3;
  };
  this.hp = function (h5, hj, hT) {
    var hq;
    if (hT % 2 === 0) {
      hq = ((this.ep(hj) - this.ep(h5)) >>> 31) << 1;
      return (hT + (1 - hT) * (1 - hq) + 4) & 3;
    }
    hq = ((this.er(hj) - this.er(h5)) >>> 31) << 1;
    return (hT + (2 - hT) * (1 - hq) + 4) & 3;
  };
  this.hr = function (gE, eT) {
    var aB, f9, hj, hs, ht;
    var hu = ag.gN[gE];
    var eh = hu.length;
    var i = bR.es;
    var hv = this.ep(eT);
    var hw = this.er(eT);
    var en = hu[0] >> 2;
    var min = this.ez(hv, hw, en);
    for (aB = 1; aB < eh; aB++) {
      hj = hu[aB] >> 2;
      hs = hv - (hj % i);
      ht = hw - ~~((hj + 0.5) / i);
      f9 = hs * hs + ht * ht;
      if (f9 < min) {
        min = f9;
        en = hj;
      }
    }
    return en;
  };
  this.hx = function (player, eL) {
    if (ac.eY(eL)) {
      return false;
    }
    if (player === ac.eZ(eL)) {
      return true;
    }
    return false;
  };
  this.ez = function (gx, gz, eT) {
    gx -= this.ep(eT);
    gz -= this.er(eT);
    return gx * gx + gz * gz;
  };
  this.hy = function (hz, i0, i1) {
    var i2 = this.i3(hz) - this.i4(i1);
    var i5 = this.i6(i0) - this.i7(i1);
    return Math.sqrt(i2 * i2 + i5 * i5);
  };
  this.i8 = function (h5, hj) {
    var i2 = this.ep(h5) - this.ep(hj);
    var i5 = this.er(h5) - this.er(hj);
    return Math.sqrt(i2 * i2 + i5 * i5);
  };
  this.i9 = function (h5, hj) {
    var i2 = this.ep(h5) - this.ep(hj);
    var i5 = this.er(h5) - this.er(hj);
    return i2 * i2 + i5 * i5;
  };
  this.iA = function (iB, iC, iD, iE) {
    iB -= iD;
    iC -= iE;
    return iB * iB + iC * iC;
  };
  this.iF = function (gE, iG) {
    return bK.dn(iG * ag.gi[gE], 1000);
  };
  this.i3 = function (hz) {
    return (16 * (hz + iH)) / iI;
  };
  this.i6 = function (i0) {
    return (16 * (i0 + iJ)) / iI;
  };
  this.iK = function (ek) {
    return (16 * ek) / iI;
  };
  this.gy = function (hz) {
    return Math.floor((hz + iH) / iI);
  };
  this.h0 = function (i0) {
    return Math.floor((i0 + iJ) / iI);
  };
  this.h1 = function (gx, gz) {
    return gx >= 1 && gz >= 1 && gx < bR.es - 1 && gz < bR.et - 1;
  };
  this.ep = function (eT) {
    return eT % bR.es;
  };
  this.er = function (eT) {
    return bK.dn(eT, bR.es);
  };
  this.f5 = function (gx, gz) {
    return gz * bR.es + gx;
  };
  this.iL = function (eT) {
    return this.f4(this.ep(eT), this.er(eT));
  };
  this.f4 = function (gx, gz) {
    return gx > 0 && gx < bR.es - 1 && gz > 0 && gz < bR.et - 1;
  };
  this.eX = function (eT) {
    return eT << 2;
  };
  this.eV = function (eL) {
    return eL >> 2;
  };
  this.iM = function (eT) {
    return bR.es * this.er(eT) * 256 + (this.ep(eT) << 4);
  };
  this.iN = function (eT) {
    return this.iM(eT) + 8 + (bR.es << 7);
  };
  this.iO = function (i1) {
    return bR.es * (this.i7(i1) >> 4) + (this.i4(i1) >> 4);
  };
  this.iP = function (i1) {
    var eT = this.iO(i1);
    return (this.ep(eT) >> 5) + bM.iQ.iR * (this.er(eT) >> 5);
  };
  this.i4 = function (i1) {
    return i1 % (bR.es << 4);
  };
  this.i7 = function (i1) {
    return bK.dn(i1, bR.es << 4);
  };
  this.iS = function (eT, hT) {
    return eT + this.hg[hT];
  };
  this.iT = function (eL, hT) {
    return eL + this.hh[hT];
  };
  this.iU = function (player) {
    return this.f5((ag.iV[player] + ag.iW[player]) >> 1, (ag.iX[player] + ag.iY[player]) >> 1);
  };
  this.iZ = function (player) {
    return this.f5(ax.ia(ag.iV[player], ag.iW[player]), ax.ia(ag.iX[player], ag.iY[player]));
  };
}
function ch() {
  this.ib = new ic();
  this.ie = new ig();
  this.ih = new ii();
  this.performance = new ij();
  this.ik = new il();
  this.im = new ioo();
  this.ip = new iq();
  this.dX = function () {
    this.ib.dX();
    this.ih.dX();
    this.performance.dX();
    this.ik.dX();
    this.im.dX();
  };
  this.ir = function () {
    this.performance.ir();
    this.ib.ir();
  };
}
function il() {
  var is;
  var it = 8;
  var iu = new Uint16Array(it);
  this.dX = function () {
    is = 0;
  };
  this.iv = function (player, iw) {
    bN.ed[1] = ag.g8[player].length;
    if (bN.ed[0] === aD.ee) {
      an.ik.ix(player);
    } else {
      this.iy(player, bN.ed[0]);
    }
    if (bN.ed[1] === 0 && ag.g8[player].length === 0) {
      return false;
    }
    if (!iw && bN.ed[1] === ag.g8[player].length) {
      return false;
    }
    if (bN.ed[0] === aD.ee) {
      ag.iz[player]++;
    } else {
      ag.j0[player]++;
    }
    return true;
  };
  this.j1 = function (player) {
    if (aD.hW) {
      an.im.j2[player] = 1;
    }
    j3(bN.ed[1], player);
    ad.j4(player, bN.fE[0], bN.ed[0]);
    aF.j5(player, false);
  };
  this.j6 = function (player, j7, eh, hL) {
    var j8 = bK.dn(12 * ag.gi[player], 1024);
    hL -= hL >= bK.dn(ag.gi[player], 2) ? j8 : 0;
    j3(eh, player);
    ad.j4(player, hL, j7);
    ag.gi[player] -= hL + j8;
    aF.j5(player, false);
  };
  this.iy = function (player, j7) {
    var aB, hT;
    var ej = ac.ej;
    for (aB = ag.gM[player].length - 1; aB >= 0; aB--) {
      if (ac.j9(ag.gM[player][aB])) {
        for (hT = 3; hT >= 0; hT--) {
          if (ac.gG(ag.gM[player][aB] + ej[hT]) && ac.eZ(ag.gM[player][aB] + ej[hT]) === j7) {
            ag.g8[player].push(ag.gM[player][aB]);
            break;
          }
        }
      }
    }
  };
  function j3(size, player) {
    for (var aB = ag.g8[player].length - 1; aB >= size; aB--) {
      ac.jA(ag.g8[player][aB], player);
    }
  }
  this.ix = function (player) {
    var ej = ac.ej;
    for (var aB = ag.gM[player].length - 1; aB >= 0; aB--) {
      if (ac.j9(ag.gM[player][aB])) {
        for (var hT = 3; hT >= 0; hT--) {
          if (ac.eY(ag.gM[player][aB] + ej[hT])) {
            ag.g8[player].push(ag.gM[player][aB]);
            break;
          }
        }
      }
    }
  };
  this.jB = function (player, jC) {
    var aB, f0, hT, hV;
    var eh = ag.gM[player].length;
    var hq = eh >= 256 ? 12 : eh >= 32 ? 6 : 1;
    var jD = eh - 1 - ax.jE(hq);
    var ej = ac.ej;
    is = 0;
    loop: for (aB = jD; aB >= 0; aB -= hq) {
      for (hT = 3; hT >= 0; hT--) {
        hV = ac.eY(ag.gM[player][aB] + ej[hT]) ? aD.ee : ac.eZ(ag.gM[player][aB] + ej[hT]);
        if (hV === aD.ee || (ac.gG(ag.gM[player][aB] + ej[hT]) && hV !== player && (jC || ea(player, hV)))) {
          for (f0 = is - 1; f0 >= 0; f0--) {
            if (iu[f0] === hV) {
              continue loop;
            }
          }
          iu[is] = hV;
          if (++is >= it) {
            return true;
          }
        }
      }
    }
    return is > 0;
  };
  this.jF = function (player, jC) {
    var aB, hT, hV;
    var ej = ac.ej;
    is = 0;
    for (aB = ag.gM[player].length - 1; aB >= 0; aB--) {
      for (hT = 3; hT >= 0; hT--) {
        hV = ac.eY(ag.gM[player][aB] + ej[hT]) ? aD.ee : ac.eZ(ag.gM[player][aB] + ej[hT]);
        if (hV === aD.ee || (ac.gG(ag.gM[player][aB] + ej[hT]) && hV !== player && (jC || ea(player, hV)))) {
          iu[is++] = hV;
          return true;
        }
      }
    }
    return false;
  };
  this.jG = function () {
    var aB, f1;
    for (aB = is - 1; aB >= 0; aB--) {
      if (iu[aB] === aD.ee) {
        is--;
        for (f1 = aB; f1 < is; f1++) {
          iu[f1] = iu[f1 + 1];
        }
        return true;
      }
    }
    return false;
  };
  this.jH = function (player) {
    var aB, f1;
    for (aB = is - 1; aB >= 0; aB--) {
      if (ad.jI(player, iu[aB])) {
        is--;
        for (f1 = aB; f1 < is; f1++) {
          iu[f1] = iu[f1 + 1];
        }
      }
    }
    return is === 0;
  };
  this.jJ = function () {
    var aB;
    for (aB = is - 1; aB >= 0; aB--) {
      if (b9.g2.jK(iu[aB])) {
        return true;
      }
    }
    return false;
  };
  this.jL = function () {
    var aB;
    for (aB = is - 1; aB >= 0; aB--) {
      if (!b9.g2.jK(iu[aB])) {
        iu[aB] = iu[--is];
      }
    }
    return is > 0;
  };
  this.jM = function (player) {
    var aB, f1;
    var jN = iu[0];
    var jO = ag.gi[jN] + ad.gj(jN, player);
    for (aB = is - 1; aB >= 1; aB--) {
      f1 = ag.gi[iu[aB]] + ad.gj(iu[aB], player);
      if (f1 < jO) {
        jN = iu[aB];
        jO = f1;
      }
    }
    return jN;
  };
  this.jP = function (player) {
    var aB, j;
    var jQ = iu[0];
    if (is === 1) {
      return jQ;
    }
    var jR = bK.dn(ag.iW[player] + ag.iV[player], 2);
    var jS = bK.dn(ag.iY[player] + ag.iX[player], 2);
    var ex = jT(jR - bK.dn(ag.iW[jQ] + ag.iV[jQ], 2)) + jT(jS - bK.dn(ag.iY[jQ] + ag.iX[jQ], 2));
    for (aB = is - 1; aB >= 1; aB--) {
      j = jT(jR - bK.dn(ag.iW[iu[aB]] + ag.iV[iu[aB]], 2)) + jT(jS - bK.dn(ag.iY[iu[aB]] + ag.iX[iu[aB]], 2));
      if (j < ex) {
        ex = j;
        jQ = iu[aB];
      }
    }
    return jQ;
  };
  this.jU = function () {
    var jV = iu;
    var jW = jV[0];
    var gi = ag.gi;
    var jX = gi[jW];
    for (var aB = is - 1; aB >= 1; aB--) {
      var gE = jV[aB];
      var f1 = gi[gE];
      if (f1 > jX) {
        jW = gE;
        jX = f1;
      }
    }
    return jW;
  };
  this.jY = function () {
    return iu[ax.jE(is)];
  };
}
function ioo() {
  this.j2 = new Uint8Array(aD.ee);
  this.dX = function () {
    this.j2.fill(0);
  };
  this.jZ = function (player, hL) {
    if (!ad.ja(player)) {
      return;
    }
    var jb = ae.jc(player);
    var jd = aE.hL[player];
    if (jd >= 3 && jd < 6) {
      hL = Math.max(ag.gi[player] - jb, hL);
    }
    var je = ag.gN[player].length;
    var jf = ag.gM[player].length;
    if (30 * ag.gU[player] > aD.jg && jh[player] < 10 && je >= 100 * jf) {
      aE.ji(player, 10);
    }
    if (aD.hW) {
      jj(player, hL, jd, jb);
      return;
    }
    if (!jf || (je && ((je < jf && !ax.jE(10)) || (je >= 100 * jf && ax.jE(3)) || !ax.jE(8)))) {
      if (bM.jk.ir(player)) {
        return;
      }
    }
    jl(player, hL, jd);
  };
  function jj(player, hL, jd, jb) {
    an.im.j2[player] = 1;
    var j7;
    if (an.ik.jB(player, false) || an.ik.jF(player, false)) {
      if (an.ik.jH(player)) {
        return;
      }
      if (an.ik.jG()) {
        jm(player, hL);
        jn(player, aD.ee, jd);
        return;
      }
      if (ax.jo(aE.jp[jd])) {
        j7 = an.ik.jM(player);
        jq(player, hL, j7, jd);
      } else {
        if (an.ik.jJ() && ax.jo(aE.jr[jd])) {
          an.ik.jL();
        }
        if (jd === 6) {
          jq(player, hL, an.ik.jY(), jd);
          return;
        }
        j7 = an.ik.jP(player);
        jq(player, hL, j7, jd);
      }
      jn(player, j7, jd);
      return;
    }
    if (bM.jk.ir(player)) {
      return;
    }
    if (an.ip.ir(player)) {
      return;
    }
    an.im.j2[player] = 0;
    js(player, hL, jd, jb);
  }
  function jn(player, j7, jd) {
    if (jd >= 3 && be.jt() > 2142 && (j7 === aD.ee || ag.gi[j7] < bK.dn(ag.gi[player], 20))) {
      aE.ji(player, 20);
    }
  }
  function js(player, hL, jd, jb) {
    var aB, f1, f2;
    var ef = bf.ef;
    var ju = ef[player];
    if (ju === 0) {
      return;
    }
    var gi = ag.gi;
    var jv = gi[player];
    var gU = ag.gU;
    if (player < aD.jw) {
      hL = jv;
    }
    if (jv < gU[player]) {
      return;
    }
    if ((jd === 5 && jv < jb) || (jd === 4 && jv < bK.dn(jb, 2))) {
      return;
    }
    var eh = al.jx;
    var jy = al.jy;
    aB = ax.jE(eh);
    var j2 = an.im.j2;
    for (f1 = 0; f1 < eh; f1++) {
      f2 = jy[(f1 + aB) % eh];
      if (j2[f2] === 1 && ef[f2] === ju) {
        b7.jz.k0(player, f2, hL);
        return;
      }
    }
  }
  function jl(player, hL, jd) {
    if (!an.ik.jB(player, true) && !an.ik.jF(player, true)) {
      an.ip.ir(player);
      return;
    }
    if (an.ik.jH(player)) {
      return;
    }
    if (an.ik.jG()) {
      jm(player, hL);
      return;
    }
    if (ax.jo(aE.jp[jd])) {
      jq(player, hL, an.ik.jM(player), jd);
      return;
    }
    if (jd === 5) {
      jq(player, hL, an.ik.jU(), jd);
      return;
    }
    if (an.ik.jJ() && ax.jo(aE.jr[jd])) {
      an.ik.jL();
    }
    if (jd === 6) {
      jq(player, hL, an.ik.jY(), jd);
      return;
    }
    jq(player, hL, an.ik.jP(player), jd);
  }
  function jq(player, hL, j7, jd) {
    if (jd >= 3 && jd < 6 && bK.dn(ag.gi[player], 8) > ag.gi[j7]) {
      hL = Math.max(bK.dn(11 * ag.gi[j7], 5), bK.dn(ag.gi[player], 10));
    }
    var eh = ag.g8[player].length;
    an.ik.iy(player, j7);
    an.ik.j6(player, j7, eh, hL);
  }
  function jm(player, hL) {
    var j7 = aD.ee;
    var eh = ag.g8[player].length;
    an.ik.ix(player);
    if (ag.g8[player].length !== eh) {
      an.ik.j6(player, j7, eh, hL);
      return true;
    }
    return false;
  }
}
function c2() {
  var k1 = new Uint8Array(aD.ee);
  var k2 = new Uint16Array(aD.ee);
  var k3 = new Uint16Array(aD.ee);
  var k4 = new Uint8Array(aD.ee);
  this.hL = new Uint8Array(aD.ee);
  var k5 = new Uint16Array(aD.ee);
  var k6 = new Uint16Array(aD.ee);
  this.k7 = null;
  this.jr = [97, 94, 70, 40, 20, 0, 100];
  this.k8 = [500, 450, 400, 300, 80, 50, 100];
  this.jp = [0, 0, 5, 25, 50, 100, 0];
  this.k9 = [60, 74, 112, 200, 256, 512, 512];
  this.kA = [1, 2, 3, 4, 6, 8, 1];
  this.kB = [500, 450, 400, 300, 80, 50, 100];
  this.dY = function () {
    this.k7 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"];
  };
  this.dX = function () {
    var aB;
    k1.fill(0);
    k2.fill(0);
    k3.fill(0);
    k4.fill(0);
    this.hL.fill(0);
    k5.fill(0);
    k6.fill(0);
    var kC = aD.jw;
    if (aD.kD === 9) {
      this.kE();
    } else if (!aD.kF) {
      const dif = lobby ? lobby.settings.difficulty : 0;

      var kG = aD.kD === 8 ? 1 : dif;
      for (aB = aD.kH - 1; aB >= 0; aB--) {
        this.hL[aB + kC] = kG;
      }
    } else {
      if (aD.data.botDifficultyType === 3) {
        for (aB = aD.kH - 1; aB >= 0; aB--) {
          var hU = aB + kC;
          this.hL[hU] = aD.data.botDifficultyData[hU];
        }
      } else if (aD.data.botDifficultyType === 2) {
        for (aB = aD.kH - 1; aB >= 0; aB--) {
          hU = aB + kC;
          this.hL[hU] = aD.data.botDifficultyTeam[bf.kI[bf.ef[hU]]];
        }
      } else if (aD.data.botDifficultyType === 1) {
        var kJ = this.k7.length;
        for (aB = aD.kH - 1; aB >= 0; aB--) {
          this.hL[aB + kC] = aB % kJ;
        }
      } else {
        kJ = aD.data.botDifficultyValue;
        for (aB = aD.kH - 1; aB >= 0; aB--) {
          this.hL[aB + kC] = kJ;
        }
      }
    }
    for (aB = 0; aB < kC; aB++) {
      this.hL[aB] = 6;
    }
    var eh = aD.ee;
    for (aB = 0; aB < eh; aB++) {
      if (this.hL[aB] <= 2) {
        k4[aB] = 5;
        k5[aB] = k6[aB] = 1040;
        if (this.hL[aB] === 0) {
          k2[aB] = 980;
          k3[aB] = 980;
        } else if (this.hL[aB] === 1) {
          k2[aB] = 980;
          k3[aB] = 920;
          k5[aB] = k6[aB] = 1100;
        } else {
          k2[aB] = 825;
          k3[aB] = 750;
        }
        kK(aB);
        continue;
      }
      if (this.hL[aB] <= 4) {
        k4[aB] = 1 + ax.jE(20);
        if (this.hL[aB] === 3) {
          k2[aB] = k3[aB] = 500;
          k5[aB] = k6[aB] = 1000;
        } else {
          k6[aB] = 250 + ax.jE(1501);
          k5[aB] = 500 + ax.jE(501);
          k2[aB] = 300 + ax.jE(201);
          k3[aB] = 100 + ax.jE(201);
        }
        kK(aB);
        continue;
      }
      if (this.hL[aB] <= 5) {
        k5[aB] = 1000;
        k6[aB] = 1000;
        k4[aB] = 35 + ax.jE(16);
        k2[aB] = 300 + ax.jE(201);
        k3[aB] = 50 + ax.jE(101);
        kK(aB);
        continue;
      }
      k5[aB] = k6[aB] = 800;
      k4[aB] = 5;
      k2[aB] = 10;
      k3[aB] = 250;
      kK(aB);
    }
  };
  this.kE = function () {
    var eL = ay.kL;
    var kC = aD.jw;
    for (var aB = eL - 1; aB >= 0; aB--) {
      this.hL[aB + kC] = 0;
    }
    for (var f1 = 0; f1 < 6; f1++) {
      for (aB = eL + ay.kM[f1] - 1; aB >= eL; aB--) {
        this.hL[aB + kC] = f1;
      }
      eL += ay.kM[f1];
    }
  };
  function kK(aB) {
    k1[aB] = 1 + bK.dn(k5[aB] * ax.random(), 10 * ax.value(100));
  }
  this.ji = function (gE, value) {
    k1[gE] = Math.min(value, k1[gE]);
  };
  this.ir = function (gE) {
    if (--k1[gE] === 0) {
      kN(gE);
    }
  };
  function kN(gE) {
    kO(gE);
    an.im.jZ(gE, bK.dn(k2[gE] * ag.gi[gE], 1000));
  }
  function kO(gE) {
    if (k5[gE] !== k6[gE]) {
      k5[gE] += k5[gE] < k6[gE] ? 3 : -3;
    }
    if (k2[gE] !== k3[gE]) {
      k2[gE] += k2[gE] < k3[gE] ? k4[gE] : -k4[gE];
      k2[gE] = Math.abs(k2[gE] - k3[gE]) <= k4[gE] ? k3[gE] : k2[gE];
    }
    k1[gE] = bK.dn(k5[gE], 10);
  }
  this.kP = function (gE, g9) {
    k5[gE] = k6[gE] = g9;
  };
}
function ii() {
  var kQ = new Uint16Array(aD.ee);
  this.dX = function () {
    kQ.fill(aD.ee);
  };
  this.ir = function (player) {
    var j7 = kR(player);
    kS(player);
    if (bN.fC[0] === 0) {
      return false;
    }
    var kT = bL.iZ(player);
    var kU = kV(player, kT);
    var kW = kX(kU, kT);
    if (kW > 0) {
      if (bM.kY.kZ(player, kW)) {
        ka(player, kT, kU, j7);
        return true;
      }
    }
    var kb = kc(player, kT);
    if (kb > 0 && bM.kY.kZ(player, kb)) {
      ka(player, kT, ac.eZ(kb << 2), j7);
      return true;
    }
    kW = kX(j7, kT);
    if (kW > 0 && bM.kY.kZ(player, kW)) {
      return true;
    }
    return false;
  };
  function kS(player) {
    var kd = al.jy;
    var ke = al.jx;
    var eh = Math.min(ke, ke < 17 && ax.jE(20) === 5 ? 1 : 16);
    var gF = ax.jE(ke);
    var fJ = bN.fJ;
    var gN = ag.gN;
    var g9 = 0;
    for (var aB = 0; aB < eh; aB++) {
      var gE = kd[(aB + gF) % ke];
      if (gE !== player && gN[gE].length) {
        fJ[g9++] = gE;
      }
    }
    bN.fC[0] = g9;
  }
  function kV(player, kT) {
    var eh = bN.fC[0];
    var fJ = bN.fJ;
    var kf = -1;
    var kg = aD.ee;
    for (var aB = 0; aB < eh; aB++) {
      var gE = fJ[aB];
      if (!ea(player, gE)) {
        continue;
      }
      var ex = bL.i9(kT, bL.iU(gE));
      if (kf === -1 || ex < kf) {
        kf = ex;
        kg = gE;
      }
    }
    return kg;
  }
  function kX(kU, kT) {
    if (kU === aD.ee) {
      return 0;
    }
    var gN = ag.gN[kU];
    var ke = gN.length;
    var eh = Math.min(ke, 10);
    var kg = 0;
    var kf = bL.i9(gN[kg] >> 2, kT);
    for (var aB = 0; aB < eh; aB++) {
      var hU = ax.jE(ke);
      var ex = bL.i9(gN[hU] >> 2, kT);
      if (ex < kf) {
        kf = ex;
        kg = hU;
      }
    }
    return gN[kg] >> 2;
  }
  function kc(player, kT) {
    var eh = bN.fC[0];
    var fJ = bN.fJ;
    var kh = kQ;
    var gF = 0;
    for (var aB = 0; aB < eh; aB++) {
      var gE = fJ[aB];
      var j7 = kh[gE];
      if (j7 === aD.ee) {
        continue;
      }
      if (!b9.g2.ki(j7)) {
        continue;
      }
      if (player === j7) {
        continue;
      }
      if (!ea(player, j7)) {
        continue;
      }
      fJ[gF++] = j7;
    }
    bN.fC[0] = gF;
    if (gF === 0) {
      return 0;
    }
    var kU = kV(player, kT);
    return kX(kU, kT);
  }
  function kR(player) {
    var j7 = kQ[player];
    if (j7 === aD.ee) {
      return aD.ee;
    }
    if (!b9.g2.ki(j7)) {
      kQ[player] = aD.ee;
      return aD.ee;
    }
    return j7;
  }
  function ka(player, kT, j7, kj) {
    if (kj === aD.ee) {
      kQ[player] = j7;
      return;
    }
    var kk = bL.iU(j7);
    var kl = bL.iU(kj);
    if (bL.i9(kT, kk) < bL.i9(kT, kl)) {
      kQ[player] = j7;
    }
  }
}
function iq() {
  this.ir = function (player) {
    if (!bR.eM(bR.eN)) {
      return false;
    }
    if (!aD.data.passableMountains) {
      return false;
    }
    if (ag.f7[player].length === 0) {
      return false;
    }
    return km(player);
  };
  function km(player) {
    var kn = ko(player);
    if (kn === null) {
      return false;
    }
    kp(player);
    var kq = kr(kn.id);
    if (kq === null) {
      return ks(player, kn.id);
    }
    kt(player, kq);
    return true;
  }
  function ks(player, eO) {
    var eh = an.ib.ku;
    if (eh === 0) {
      return false;
    }
    var eL = an.ib.eE[ax.jE(eh)] << 2;
    var ej = ac.ej;
    var ek = ax.jE(4);
    while (true) {
      eL += ej[ek];
      if (ac.em(eL)) {
        if (ac.eP(eL) === eO) {
          kt(player, {
            eL: eL,
            gE: aD.ee,
          });
          return true;
        }
        break;
      }
      if (!ac.eY(eL)) {
        break;
      }
    }
    return false;
  }
  function ko(player) {
    var f7 = ag.f7[player];
    var eh = f7.length;
    var f8 = Math.max(bK.dn(eh, 12), 1);
    var ej = ac.ej;
    var e1 = ax.jE(eh);
    for (var aB = 0; aB < eh; aB += f8) {
      var eW = f7[(aB + e1) % eh];
      for (var ek = 3; ek >= 0; ek--) {
        var el = eW + ej[ek];
        if (ac.em(el)) {
          return {
            eL: el,
            id: ac.eP(el),
            gE: player,
          };
        }
      }
    }
    return null;
  }
  function kp(player) {
    var jy = al.jy;
    var jx = al.jx;
    var eh = Math.min(jx, 12);
    var gF = ax.jE(jx);
    var fJ = bN.fJ;
    var f7 = ag.f7;
    var g9 = 0;
    for (var aB = 0; aB < eh; aB++) {
      var gE = jy[(aB + gF) % jx];
      if (gE !== player && f7[gE].length && ea(player, gE)) {
        fJ[g9++] = gE;
      }
    }
    bN.fC[0] = g9;
  }
  function kr(eO) {
    var eh = bN.fC[0];
    var fJ = bN.fJ;
    for (var aB = 0; aB < eh; aB++) {
      var kv = ko(fJ[aB]);
      if (kv === null) {
        continue;
      }
      if (kv.id === eO) {
        return kv;
      }
    }
    return null;
  }
  function kt(player, kv) {
    var hL = b9.g2.kw(player, aE.kB[aE.hL[player]]);
    ag.g8[player].push(kv.eL);
    ad.j4(player, hL, kv.gE);
    aF.j5(player, true);
  }
}
function ig() {
  this.ir = function (player) {
    var eT = kx(player);
    if (eT === -1) {
      return false;
    }
    return bM.kY.kZ(player, eT);
  };
  function kx(player) {
    var eh = an.ib.ku;
    if (eh === 0) {
      return -1;
    }
    var ke = Math.min(eh, an.performance.ky ? eh : 10);
    var eE = an.ib.eE;
    var jD = bK.dn(ax.random() * eh, ax.value(100));
    var e = jD + ke;
    var kz = ax.ia(ag.iV[player], ag.iW[player]);
    var l0 = ax.ia(ag.iX[player], ag.iY[player]);
    var kg = -1;
    var ex = bL.iA(0, 0, bR.es, bR.et);
    for (var aB = jD; aB < e; aB++) {
      var gF = aB % eh;
      var l1 = bL.ez(kz, l0, eE[gF]);
      if (l1 < ex) {
        ex = l1;
        kg = gF;
      }
    }
    if (kg === -1) {
      return -1;
    }
    return eE[kg];
  }
}
function ij() {
  this.ky = 0;
  this.dX = function () {
    this.ky = 0;
  };
  this.ir = function () {
    if (this.ky) {
      return;
    }
    if (!l2()) {
      return;
    }
    l3();
  };
  function l2() {
    if (be.jt() % 30 !== 7) {
      return false;
    }
    if (b9.g2.l4(80)) {
      an.performance.ky = 1;
      return true;
    }
    return false;
  }
  function l3() {
    if (aD.hW) {
      l5();
    }
    l6();
  }
  function l5() {
    var l7 = bg.l8();
    if (!bf.kI[l7]) {
      return;
    }
    bg.l9(l7);
    var g = bN.fK;
    var eh = bN.fC[0];
    if (eh === 0) {
      return;
    }
    var lA = Math.min(100 + (eh - 1) * 10, 400);
    for (var aB = 0; aB < eh; aB++) {
      aE.kP(g[aB], lA);
    }
  }
  function l6() {
    aE.kP(lB[0], 100);
  }
}
function ic() {
  var lC = 0;
  var lD = 0;
  var lE = 300;
  var lF = 300;
  var lG = 0;
  this.ku = 0;
  this.eE = new Uint32Array(512);
  this.dX = function () {
    lC = 0;
    lD = 0;
    this.ku = 0;
    lG = 0;
  };
  this.ir = function () {
    if (!lH()) {
      return;
    }
    if (lC >= lE) {
      lI();
      return;
    }
    lJ();
  };
  function lI() {
    var lK = an.ib.ku;
    if (lK) {
      if (be.jt() % 350 !== 1) {
        return;
      }
      if (lG !== lK) {
        lG = lK;
        return;
      }
      if (!b9.g2.jK(lB[0])) {
        return;
      }
    } else {
      if (be.jt() % 12 !== 8) {
        return;
      }
    }
    if (b9.g2.lL()) {
      return;
    }
    an.ib.dX();
  }
  function lH() {
    var eh = an.ib.ku;
    if (eh === 0) {
      return true;
    }
    var eE = an.ib.eE;
    if (be.jt() % 35 !== 6) {
      return eh < eE.length;
    }
    for (var aB = eh - 1; aB >= 0; aB--) {
      if (!ac.eY(eE[aB] << 2)) {
        eh--;
        eE[aB] = eE[eh];
      }
    }
    an.ib.ku = eh;
    return eh < eE.length;
  }
  function lJ() {
    var i = bR.es;
    var lM = i - 2;
    var eh = lM * (bR.et - 2);
    var lN = lE;
    var eE = an.ib.eE;
    var ke = an.ib.ku;
    var lO = eE.length;
    var gF = Math.min(lD + lN * ((1 + 19 * an.performance.ky) * lF), eh);
    var aB;
    for (aB = lD; aB < gF; aB += lN) {
      var eL = 4 * ((aB % lM) + (bK.dn(aB, lM) + 1) * i + 1);
      if (ac.eY(eL)) {
        eE[ke] = eL >> 2;
        ke++;
        if (ke === lO) {
          aB += lN;
          break;
        }
      }
    }
    lD = aB;
    if (lD >= eh) {
      lC++;
      lD = lC;
    }
    an.ib.ku = ke;
  }
}
function lP() {
  aN.ir();
  af.ir();
  aW.lQ();
  az.y.ir();
}
function lR() {
  b0.ir();
  aG.ir();
  ae.ir();
  b3.ir();
  aF.ir();
  an.ir();
  bM.y.ir();
  al.lS();
  aV.ir();
  ay.ir();
  bU.ir();
  af.ir();
  af.lT();
  aW.ir();
  bO.ir();
  aU.ir();
  aP.ir();
  aN.ir();
  b4.ir();
  aR.ir();
  av.ir();
  bc.ir();
  bg.ir();
  az.y.ir();
  az.lU.ir();
  t.ir();
  b8.ir();
  be.ir();
}
function lV() {
  aH.ir();
  aX.ir();
  aQ.ir();
  au.ir();
  bB.ir();
  aw.lW();
}
function lX() {
  aV.lY(false);
  aP.lY();
  aW.lY(false);
  aU.lY();
  aR.lY();
  av.lY();
  af.lY(false);
  bg.lZ();
}
function la() {
  if (af.lY(false)) {
    be.df = true;
  }
  az.y.ir();
}
function c3() {
  var lb;
  var lc;
  var ld;
  this.dX = function () {
    lb = 0;
    lc = new Uint16Array(aD.ee);
    ld = new Uint8Array(aD.ee);
  };
  this.ir = function () {
    for (var aB = lb - 1; aB >= 0; aB--) {
      if (ld[lc[aB]] === 64) {
        le(lc[aB]);
      } else if (ld[lc[aB]]-- === 0) {
        le(lc[aB]);
        fj(lc[aB]);
      }
    }
    if (ag.gU[lB[0]] >= 160000) {
      lf(160000);
      if (ag.gU[lB[0]] >= 300000) {
        lf(300000);
      }
    }
    lg();
  };
  function lf(lh) {
    for (var aB = lb - 1; aB >= 0; aB--) {
      if (ld[lc[aB]] === 0 && ag.gU[lc[aB]] >= lh) {
        fj(lc[aB]);
      }
    }
  }
  function lg() {
    if (!b9.g2.ki(aD.eR)) {
      return;
    }
    bc.li[7] = Math.max(ag.gU[aD.eR], bc.li[7]);
  }
  function le(player) {
    if (ld[player] === 64) {
      ld[player] = 6;
    } else {
      var dm = ag.gU[player];
      if (dm < 1000) {
        ld[player] = 3;
      } else if (dm < 10000) {
        ld[player] = 2;
      } else if (dm < 60000) {
        ld[player] = 1;
      } else {
        ld[player] = 0;
      }
    }
  }
  this.g4 = function (player) {
    var f0, aB;
    for (aB = lb - 1; aB >= 0; aB--) {
      if (player === lc[aB]) {
        lb--;
        for (f0 = aB; f0 < lb; f0++) {
          lc[f0] = lc[f0 + 1];
        }
        return;
      }
    }
  };
  this.j5 = function (player, lj) {
    for (var aB = lb - 1; aB >= 0; aB--) {
      if (player === lc[aB]) {
        return;
      }
    }
    lc[lb++] = player;
    ld[player] = lj ? 2 : 64;
  };
}
function c4() {
  var size;
  var jk;
  this.dX = function () {
    size = aD.kH;
    jk = new Uint16Array(aD.ee);
    var jw = aD.jw;
    for (var aB = aD.kH - 1; aB >= 0; aB--) {
      jk[aB] = jw + aB;
    }
  };
  this.ir = function () {
    lk();
  };
  this.ll = function (gE) {
    jk[size++] = gE;
  };
  function lk() {
    for (var aB = size - 1; aB >= 0; aB--) {
      if (ag.lm[jk[aB]] === 0) {
        ln(aB);
        continue;
      }
      aE.ir(jk[aB]);
    }
  }
  function ln(f0) {
    size--;
    jk[f0] = jk[size];
  }
}
function c5() {
  var lo;
  var lp;
  var lq;
  var lr;
  var ls;
  var lt;
  var lu;
  var lv;
  var lw;
  var lx;
  var ly;
  var lz;
  var m0;
  var m1 = false;
  var m2 = false;
  function m3(e9) {
    lz = be.eG;
    m0 = 33;
    lp = 0;
    lr = 0;
    lq = 0;
    ls = m0 / e9;
    lo = 1 / (e9 / m0 / 4);
    lt = (h.i / 2 + iH) / iI;
    lu = (h.j / 2 + iJ) / iI;
    lv = iI;
  }
  this.m4 = function () {
    return m1;
  };
  this.m5 = function () {
    m3(1);
    this.m6(0, 0, bR.es - 1, bR.et - 1);
    if (!aD.h2 && !aD.gq) {
      this.m7(aD.eR, 3000, true, 0.3);
    }
  };
  this.m8 = function (player, m9) {
    mA(bM.hA.mB(player, m9));
  };
  function mA(aB) {
    if (aB === -1) {
      return;
    }
    var eT = bL.iO(bM.y.mC[aB]);
    var mD = bL.ep(eT) - 10;
    var mE = bL.er(eT) - 10;
    aH.m6(mD, mE, mD + 19, mE + 19);
  }
  this.m7 = function (player, e9, mF, zoom) {
    if (aD.mG || (m1 && !mF && m2)) {
      return;
    }
    if (ag.gU[player] === 0) {
      mA(bM.hA.mH(player));
      return;
    }
    aS.mI = false;
    m2 = mF;
    m3(e9);
    mJ(player);
    mK(zoom, player);
    m1 = true;
    aq.mL();
  };
  this.mM = function (e9) {
    if (aD.gq || aD.mG) {
      return;
    }
    aS.mI = false;
    m2 = false;
    m3(e9);
    mN(0, 0, bR.es - 1, bR.et - 1);
    mO(7 / 8);
    m1 = true;
    aq.mL();
  };
  function mJ(player) {
    lw = (ag.iV[player] + ag.iW[player] + 1) / 2;
    lx = (ag.iX[player] + ag.iY[player] + 1) / 2;
  }
  function mK(zoom, player) {
    var i2 = ag.iW[player] - ag.iV[player] + 1;
    var i5 = ag.iY[player] - ag.iX[player] + 1;
    var f0 = h.i / i2;
    var f1 = h.j / i5;
    ly = f0 < f1 ? f0 : f1;
    var mP = zoom !== 0 ? zoom : i2 < 20 && i5 < 20 ? 0.5 : 0.9;
    ly *= mP;
    mO(7 / 8);
  }
  function mO(e6) {
    if (Math.abs(Math.log(ly / lv)) < 0.125) {
      ly = e6 * lv;
    }
  }
  function mN(mD, mE, mQ, mR) {
    lw = (mD + mQ + 1) / 2;
    lx = (mE + mR + 1) / 2;
    var i2 = mQ - mD + 1;
    var i5 = mR - mE + 1;
    var f0 = h.i / i2;
    var f1 = h.j / i5;
    ly = 0.9 * (f0 < f1 ? f0 : f1);
  }
  this.m6 = function (mD, mE, mQ, mR) {
    mN(mD, mE, mQ, mR);
    iI = ly;
    aS.mS(lw, h.i / 2);
    aS.mT(lx, h.j / 2);
    bZ.mU();
    be.df = true;
  };
  this.mV = function () {
    if (m1 && m2) {
      return false;
    }
    m1 = false;
    return true;
  };
  this.ir = function () {
    if (m1) {
      mW();
    }
  };
  function mW() {
    if (lp < 0.5) {
      if (lr < ls) {
        lr += ls * lo;
        lq = lp;
      }
    } else {
      if (lp > 1 - lq) {
        lr -= ls * lo;
        lr = lr < ls * lo ? ls * lo : lr;
      }
    }
    lz = lz >= be.eG ? be.eG - 1 : lz;
    var ek = be.eG - lz;
    if (ek > 1000) {
      lp = 1;
    } else {
      lp += (lr * ek) / m0;
      lp = lp > 1 ? 1 : lp;
    }
    lz = be.eG;
    var mX = iI;
    var mY = iH;
    var mZ = iJ;
    iI = lv * Math.pow(ly / lv, lp);
    var ma = iI / mX;
    var mb = lv * Math.pow(ly / lv, 1 - lp);
    var mc = 1 - (mb - lv) / (ly - lv);
    aS.mS(lt + mc * (lw - lt), h.i / 2);
    aS.mT(lu + mc * (lx - lu), h.j / 2);
    af.zoom(ma, (mY * ma - iH) / (1 - ma), (mZ * ma - iJ) / (1 - ma));
    bZ.mU();
    if (lp >= 1) {
      m1 = false;
      ba.md = true;
    }
    be.df = true;
  }
}
function bx() {
  var f2 = b9.color;
  this.me = f2.mf(0, 0, 0);
  this.mg = f2.mh(0, 0, 0, 0.7);
  this.mi = f2.mh(0, 0, 0, 0.5);
  this.mj = f2.mh(0, 0, 0, 0.85);
  this.mk = f2.mh(0, 0, 0, 0.75);
  this.ml = f2.mh(0, 0, 0, 0.6);
  this.mm = f2.mh(0, 0, 0, 0.35);
  this.mn = f2.mf(255, 255, 255);
  this.mo = f2.mh(255, 255, 255, 0.3);
  this.mp = f2.mh(255, 255, 255, 0.6);
  this.mq = f2.mh(255, 255, 255, 0.4);
  this.mr = f2.mh(255, 255, 255, 0.25);
  this.ms = f2.mh(255, 255, 255, 0.85);
  this.mt = f2.mh(255, 255, 255, 0.75);
  this.mu = f2.mh(255, 255, 255, 0.15);
  this.mv = f2.mh(255, 255, 255, 0.11);
  this.mw = f2.mf(128, 128, 128);
  this.mx = f2.mh(64, 64, 64, 0.75);
  this.my = f2.mh(88, 88, 88, 0.83);
  this.mz = f2.mh(60, 60, 60, 0.85);
  this.n0 = f2.mh(80, 60, 60, 0.85);
  this.n1 = f2.mf(170, 170, 170);
  this.n2 = f2.mf(200, 235, 245);
  this.n3 = f2.mf(30, 255, 30);
  this.n4 = f2.mf(0, 200, 0);
  this.n5 = f2.mf(128, 255, 128);
  this.n6 = f2.mh(10, 65, 10, 0.75);
  this.n7 = f2.mh(0, 255, 0, 0.6);
  this.n8 = f2.mh(0, 255, 0, 0.5);
  this.n9 = f2.mh(0, 200, 0, 0.5);
  this.nA = f2.mh(0, 100, 0, 0.75);
  this.nB = f2.mh(0, 60, 0, 0.8);
  this.nC = f2.mh(0, 255, 0, 0.3);
  this.nD = f2.mh(0, 180, 0, 0.6);
  this.nE = f2.mh(0, 120, 0, 0.85);
  this.nF = f2.mf(0, 120, 0);
  this.nG = f2.mh(0, 70, 0, 0.85);
  this.nH = f2.mf(190, 230, 190);
  this.nI = f2.mf(0, 255, 0);
  this.nJ = f2.mf(255, 120, 120);
  this.nK = f2.mf(255, 160, 160);
  this.nL = f2.mf(255, 70, 70);
  this.nM = f2.mf(230, 0, 0);
  this.nN = f2.mh(220, 0, 0, 0.6);
  this.nO = f2.mh(255, 100, 100, 0.8);
  this.nP = f2.mh(100, 0, 0, 0.85);
  this.nQ = f2.mh(60, 0, 0, 0.85);
  this.nR = f2.mh(200, 0, 0, 0.6);
  this.nS = f2.mh(120, 0, 0, 0.85);
  this.nT = f2.mf(255, 70, 10);
  this.nU = f2.mf(230, 190, 190);
  this.nV = f2.mf(255, 0, 0);
  this.nW = f2.mf(255, 0, 255);
  this.nX = f2.mh(60, 0, 60, 0.85);
  this.nY = f2.mh(0, 60, 60, 0.85);
  this.nZ = f2.mh(10, 60, 60, 0.9);
  this.na = f2.mh(0, 96, 96, 0.75);
  this.nb = f2.mf(0, 255, 255);
  this.nc = f2.mf(160, 160, 255);
  this.nd = f2.mh(0, 40, 90, 0.75);
  this.ne = f2.mh(0, 0, 255, 0.6);
  this.nf = f2.mf(200, 200, 255);
  this.ng = f2.mf(255, 120, 100);
  this.nh = f2.mh(255, 255, 0, 0.5);
  this.ni = f2.mh(255, 255, 150, 0.2);
  this.nj = f2.mf(255, 255, 0);
  this.nk = f2.mf(255, 255, 200);
  this.nl = f2.mh(200, 200, 0, 0.6);
  this.nm = f2.mh(140, 120, 0, 0.75);
  this.nn = f2.mh(180, 160, 40, 0.75);
  this.no = f2.mh(70, 50, 20, 0.85);
  this.np = f2.mh(30, 30, 0, 0.85);
  this.nq = f2.mh(60, 60, 0, 0.85);
  this.nr = f2.mh(255, 140, 0, 0.75);
  this.ns = f2.mh(70, 40, 0, 0.85);
  this.nt = f2.mf(220, 120, 0);
  this.nu = f2.mh(255, 200, 80, 0.85);
  this.nv = f2.mf(255, 150, 120);
  this.nw = f2.mh(0, 0, 0, 0);
  this.nx = f2.mh(255, 255, 255, 0);
  this.ny = f2.mh(254, 254, 254, 0);
  f2 = null;
}
function cu() {
  this.h3 = new nz();
  this.g2 = new o0();
  this.o1 = new o2();
  this.o3 = new o4();
  this.jz = new o5();
}
function nz() {
  this.h4 = function (eT) {
    if (aD.kF) {
      b7.o1.h4(aD.eR, eT);
    } else {
      az.o6.o7(eT);
    }
  };
  this.hE = function (iG, j7) {
    if (aD.kF) {
      b7.o1.hE(aD.eR, iG, j7);
    } else {
      az.o6.o8(iG, j7);
    }
  };
  this.o9 = function (iG, oA) {
    if (aD.kF) {
      b7.o1.oB(aD.eR, iG, oA);
    } else {
      az.o6.oC(iG, oA);
    }
  };
  this.hC = function (iG, eT) {
    if (aD.kF) {
      b7.o1.hC(aD.eR, iG, eT);
    } else {
      if (!bM.hA.hB(aD.eR, eT)) {
        return;
      }
      az.o6.oD(iG, eT);
    }
  };
  this.oE = function (m9, eT) {
    if (aD.kF) {
      b7.o1.oE(aD.eR, m9, eT);
    } else {
      if (!bM.hA.oF(aD.eR, m9, eT)) {
        return;
      }
      az.o6.oG(m9, eT);
    }
  };
  this.oH = function (j7) {
    if (aD.kF) {
      b7.o1.oH(aD.eR, j7);
    } else {
      az.o6.oI(j7);
    }
  };
  this.oJ = function (oK) {
    if (aD.kF) {
      b7.o1.oL(aD.eR, oK);
    } else {
      az.o6.oM(oK);
    }
  };
  this.hQ = function (oN) {
    if (aD.kF) {
      b7.o1.hQ(aD.eR, oN);
    } else {
      az.o6.oO(oN);
    }
  };
  this.oP = function () {
    if (aD.kF) {
      b7.o1.oP(aD.eR);
    } else {
      az.o6.oQ();
    }
  };
  this.hN = function () {
    if (aD.kF) {
      b7.o1.hN(aD.eR);
    } else {
      az.o6.oD(1, 0);
    }
  };
  this.h7 = function (iG, eT, j7) {
    if (aD.kF) {
      b7.o1.h7(aD.eR, iG, eT, j7);
    } else {
      az.o6.oR(iG, eT, j7);
    }
  };
}
function o5() {
  this.k0 = function (player, oA, hL) {
    if (!b9.g2.oS(player, hL, oA)) {
      return;
    }
    ae.o9(player, oA);
    if (oA < aD.jw && ax.random() < ax.value(10)) {
      an.im.j2[oA] = 0;
    }
  };
  this.oT = function (player, oA, hL) {
    if (!b9.g2.oU(hL, oA)) {
      bc.g6(player, hL, 12);
      return;
    }
    b9.g2.g5(oA, bN.fE[0]);
    bc.oV(player, oA);
    af.oW(oA, bN.fE[0]);
  };
}
function o0() {
  this.oX = function (oK, player) {
    aN.oJ(aD.eR, player, oK);
    az.o6.oY(oK, player);
  };
  this.oZ = function (player) {
    aN.oa(player, 0);
    az.o6.ob(player);
  };
  this.oc = function (od, player) {
    aN.oe(od, player);
    az.o6.og(od, player);
  };
  this.oh = function () {
    if (aD.kF || aD.gq) {
      return;
    }
    az.oi.oh();
  };
}
function o4() {
  this.ir = function (aC) {
    // Action Decoder
    var id, fO, mV;
    bG.dX(aC);
    bG.e2 += 2;
    mV = 8 * bG.size;
    while (bG.e2 + 8 <= mV) {
      id = bG.oj(4);
      fO = bG.oj(9); // id of the player that did the action

      var continueLoop = true;
      var a, b;
      for (var i = 0; i < players.length; i++) {
        if (fO === players[i].originalId) {
          fO = players[i].modifiedId;
          continueLoop = false;
          break;
        }
      }
      if (id === 0) {
        a = bG.oj(22);
        if (continueLoop) continue;
        this.ok(id, fO, a);
      } else if (id === 1) {
        a = bG.oj(10);
        b = bG.oj(10);
        if (continueLoop) continue;
        this.ok(id, fO, a, b);
      } else if (id === 2) {
        a = bG.oj(10);
        b = bG.oj(9);
        if (continueLoop) continue;
        this.ok(id, fO, a, b);
      } else if (id === 3) {
        a = bG.oj(10);
        b = bG.oj(22);
        if (continueLoop) continue;
        this.ok(id, fO, a, b);
      } else if (id === 4) {
        a = bG.oj(10);
        b = bG.oj(22);
        if (continueLoop) continue;
        this.ok(id, fO, a, b);
      } else if (id === 5) {
        a = bG.oj(10);
        if (continueLoop) continue;
        this.ok(id, fO, a);
      } else if (id === 6) {
        a = bG.oj(10);
        if (continueLoop) continue;
        this.ok(id, fO, a);
      } else if (id === 7) {
        a = bG.oj(10);
        if (continueLoop) continue;
        this.ok(id, fO, a);
      } else if (id === 10) {
        a = bG.oj(20);
        b = bG.oj(22);
        if (continueLoop) continue;
        this.ok(id, fO, a, b);
      } else {
        if (continueLoop) continue;
        this.ok(id, fO);
      }
    }
  };
  this.ol = [];
  this.om = function () {
    var on = 0;
    var oo = 0;
    var op = 0;
    var oq = 0;
    var or = 0;
    var os = 0;
    var ot = 0;
    var aB;
    var eh = 512;
    for (aB = 0; aB < eh; aB++) {
      oo += ag.lm[aB];
      op += ag.gU[aB];
      oq += ag.gi[aB];
      or += bM.y.ou[aB];
    }
    os += bM.y.ov;
    ot += al.jx;
    on = oo + op + or + os + ot;
    on = (oq % 1073741824) * 4 + (on % 4);
    this.ol.push(on);
  };
  this.ok = function (id, fO, fQ, fS) {
    if (id === 0) {
      b7.o1.h4(fO, fQ);
    } else if (id === 1) {
      b7.o1.hE(fO, fQ, fS);
    } else if (id === 2) {
      b7.o1.oB(fO, fQ, fS);
    } else if (id === 3) {
      b7.o1.hC(fO, fQ, fS);
    } else if (id === 4) {
      b7.o1.oE(fO, fQ, fS);
    } else if (id === 5) {
      b7.o1.oH(fO, fQ);
    } else if (id === 6) {
      b7.o1.oL(fO, fQ);
    } else if (id === 7) {
      b7.o1.hQ(fO, fQ);
    } else if (id === 8) {
      b7.o1.oP(fO);
    } else if (id === 9) {
      b7.o1.ow(fO);
    } else if (id === 10) {
      b7.o1.h7(fO, fQ >> 10, fS, fQ % 1024);
    }
  };
}
function o2() {
  this.h4 = function (player, eT) {
    if (!b9.g2.gs(0)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    if (!bL.iL(eT)) {
      return;
    }
    b8.ox.oy(0, player, eT);
    aD.oz.j4(player, eT);
  };
  this.hE = function (player, iG, j7) {
    if (!b9.g2.gs(1)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    if (!b9.g2.p0(player, j7)) {
      return;
    }
    if (!b9.g2.p1(player, iG, 12, 0)) {
      return;
    }
    if (!b9.g2.p2(player, j7)) {
      return;
    }
    var iw = ad.jI(player, bN.ed[0]);
    if (!iw && !ad.ja(player)) {
      return;
    }
    ag.p3[player]++;
    b8.ox.oy(1, player, iG, bN.ed[0]);
    if (!an.ik.iv(player, iw)) {
      return;
    }
    b9.g2.p4(player);
    bc.p5(player, iG);
    an.ik.j1(player);
  };
  this.oB = function (player, iG, oA) {
    if (!b9.g2.gs(1)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    if (!aD.hW) {
      return;
    }
    if (!b9.g2.p0(player, oA)) {
      return;
    }
    if (!b9.g2.p6(player, oA)) {
      return;
    }
    if (!b9.g2.oS(player, b9.g2.iF(player, iG), oA)) {
      return;
    }
    b8.ox.oy(2, player, iG, oA);
    ae.o9(player, oA);
  };
  this.hC = function (player, iG, eT) {
    if (!b9.g2.gs(1)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    if (eT === 0 && iG === 1) {
      this.hN(player);
      return;
    }
    if (!bL.iL(eT)) {
      return;
    }
    if (bM.y.ov === bM.y.kA) {
      return;
    }
    if (bM.y.ou[player] === bM.y.p7) {
      return;
    }
    if (ag.gN[player].length === 0) {
      return;
    }
    if (!b9.g2.p1(player, iG, 32, 0)) {
      return;
    }
    if (!bM.kY.kZ(player, eT)) {
      return;
    }
    bc.p8(player);
    b8.ox.oy(3, player, iG, eT);
    b9.g2.p4(player);
    bk.p9.hC(player);
    bM.y.pA(player);
  };
  this.oE = function (player, m9, eT) {
    if (!b9.g2.gs(1)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    if (!bL.iL(eT)) {
      return;
    }
    if (!bM.hA.pB(player, m9)) {
      return;
    }
    if (!bM.kY.pC(eT)) {
      return;
    }
    b8.ox.oy(4, player, m9, eT);
    b9.g2.pD(player, 8);
    bc.g6(player, bN.fE[1], 12);
    bk.p9.oE(player);
    bM.y.oE();
  };
  this.oH = function (player, j7) {
    if (!b9.g2.gs(1)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    j7 = Math.min(j7, aD.ee);
    if (!ad.jI(player, j7)) {
      return;
    }
    b8.ox.oy(5, player, j7);
    ad.pE(player, j7);
  };
  this.oL = function (player, oK) {
    if (!b9.g2.gs(1) && !b9.g2.gs(2)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    oK = bK.pF(oK, 0, 1023);
    b8.ox.oy(6, player, oK);
    af.pG(player, 0, oK);
  };
  this.hQ = function (player, oN) {
    if (!av.hP(player)) {
      return;
    }
    b8.ox.oy(7, player, oN);
    av.pH(player, oN);
  };
  this.oP = function (player) {
    if (!b9.g2.gs(0) && !b9.g2.gs(1)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    if (!aM.pI(player)) {
      return;
    }
    b8.ox.oy(8, player);
    bP.oP(player);
  };
  this.ow = function (player) {
    b8.ox.oy(9, player);
    bP.ow(player);
  };
  this.hN = function (player) {
    if (!av.hR(player)) {
      return;
    }
    b8.ox.oy(3, player, 1, 0);
    av.hN(player);
  };
  this.h7 = function (player, iG, eT, j7) {
    if (!b9.g2.gs(1)) {
      return;
    }
    if (!b9.g2.gt(player)) {
      return;
    }
    if (!b9.g2.p0(player, j7)) {
      return;
    }
    if (!b9.g2.p2(player, j7)) {
      return;
    }
    if (!bL.iL(eT)) {
      return;
    }
    if (!am.eI.eb(player, eT)) {
      return;
    }
    if (!ad.jI(player, bN.ed[0]) && !ad.ja(player)) {
      return;
    }
    b8.ox.oy(10, player, (iG << 10) + bN.ed[0], eT);
    var hL = b9.g2.kw(player, iG);
    ag.g8[player].push(bN.ei[0]);
    ad.j4(player, hL, bN.ed[0]);
    aF.j5(player, true);
    bc.pJ(player);
  };
}
function pK() {
  this.pL = [];
  this.pM = document.createElement(S[0]);
  function dX(pM) {
    pM.style.position = S[3];
    pM.style.height = S[9];
    pM.style.padding = S[25];
  }
  this.pN = function (pO, marginTop) {
    var title = document.createElement("h2");
    title.textContent = pO;
    title.style.margin = "0";
    title.style.marginBottom = S[41];
    if (marginTop) {
      title.style.marginTop = marginTop;
    }
    title.style.fontSize = S[109];
    title.style.overflowWrap = S[35];
    this.pM.appendChild(title);
    return title;
  };
  this.pP = function (pO, marginBottom) {
    var pQ = document.createElement("p");
    pQ.textContent = pO;
    pQ.style.fontSize = S[12];
    pQ.style.lineHeight = S[58];
    pQ.style.marginBottom = marginBottom || "0";
    this.pM.appendChild(pQ);
    return pQ;
  };
  this.pR = function (pO) {
    var pS = document.createElement("p");
    pS.textContent = pO;
    pS.style.fontSize = S[17];
    pS.style.marginBottom = "0";
    pS.style.whiteSpace = S[79];
    pS.style.overflowWrap = S[35];
    this.pM.appendChild(pS);
    return pS;
  };
  this.pT = function (pU, fontSize) {
    var pM = document.createElement(S[0]);
    pM.innerHTML = pU;
    pM.style.fontSize = fontSize || S[17];
    pM.style.lineHeight = S[58];
    this.pM.appendChild(pM);
    return pM;
  };
  this.pV = function (pW) {
    var aB;
    var pX = pW.pX;
    var eh = pX.length;
    for (aB = 0; aB < eh; aB++) {
      this.pM.appendChild(pX[aB]);
    }
  };
  this.pY = function (pZ) {
    this.pL.push(pZ);
    this.pM.appendChild(pZ.e);
    return pZ;
  };
  this.resize = function () {
    var eh = this.pL.length;
    for (var aB = 0; aB < eh; aB++) {
      if (this.pL[aB].resize) {
        this.pL[aB].resize();
      }
    }
  };
  dX(this.pM);
}
function pa(pb, pc) {
  var pM = document.createElement(S[0]);
  this.pd = pM;
  this.pe = pc;
  function dX() {
    pM.style.width = S[1];
    pM.style.maxWidth = S[1];
    pb.style.lineHeight = S[40];
    pb.style.overflowX = S[15];
    pb.style.overflowY = S[9];
    for (var aB = 0; aB < pc.length; aB++) {
      pM.appendChild(pc[aB].pM);
    }
    pb.appendChild(pM);
  }
  function pf(pg) {
    var i = 0.25 * b9.ph.pi(0.6) * h.pj;
    return Math.max(Math.floor(pg / i), 1);
  }
  this.resize = function () {
    pk();
    pl();
    pl();
  };
  function pk() {
    var aB;
    for (aB = 0; aB < pc.length; aB++) {
      pc[aB].resize();
    }
  }
  function pl() {
    var aB, pm, j, gF, ek;
    var pg = h.k * pM.offsetWidth;
    var pn = new Float64Array(pf(pg));
    var po = bb.po;
    var pp = (pg - (pn.length + 1) * bb.gap) / (pn.length * h.k);
    pn.fill(po);
    for (aB = 0; aB < pc.length; aB++) {
      ek = pc[aB].pM;
      pm = ek.style;
      j = b9.pq.min(pn);
      gF = pn.indexOf(j);
      pm.top = b9.ph.pr(j);
      pm.left = b9.ph.pr(po + gF * (pp + po));
      pm.width = b9.ph.pr(pp);
      b9.ph.ps(ek, 5);
      pn[gF] += ek.offsetHeight + 3 * po;
    }
    pM.style.height = b9.ph.pr(b9.pq.max(pn) - 2 * po);
  }
  dX();
}
function w(pt, pu, pv, pw, px) {
  var py = document.createElement("button");
  this.button = py;
  this.pz = pu;
  this.q0 = pv;
  function q1(self) {
    py.innerHTML = pt;
    py.style.color = px ? bA.nj : bA.mn;
    py.style.userSelect = S[5];
    py.style.outline = S[5];
    py.style.overflowWrap = S[35];
    self.q2(pv);
    py.style.border = S[5];
    py.style.font = S[6];
    self.q3(0);
    py.style.padding = "0em 0.3em";
    py.onclick = q4;
    py.addEventListener(S[81], q5);
    py.addEventListener(S[82], q6);
    py.addEventListener(S[50], q5);
    py.addEventListener(S[51], q7);
  }
  this.q3 = function (q8) {
    var q9 = 1.1 - Math.min(0.01 * pt.length, 0.6) + 0.2 * q8;
    py.style.fontSize = q9.toFixed(1) + "em";
  };
  this.q2 = function (f2) {
    if (!f2) {
      pw = 0;
      f2 = bA.mj;
    } else if (f2 === 1) {
      f2 = bA.mz;
    } else if (f2 === 2) {
      pw = 1;
      f2 = bA.mz;
    }
    this.q0 = pv = f2;
    py.style.backgroundColor = f2;
  };
  function q5() {
    if (bI.qA()) {
      return;
    }
    var qB = b9.color.qC(pv);
    if (pw !== false) {
      if (qB[0] > 0 && qB[0] < 255 && qB[0] === qB[1] && qB[0] === qB[2]) {
        return;
      }
    }
    py.style.backgroundColor = b9.color.qD(pv, qB[3] && qB[3] < 120 ? 150 : 50);
  }
  function q4() {
    if (pw) {
      var qB = b9.color.qC(pv);
      if (qB[0] === qB[1] && qB[0] === qB[2]) {
        return;
      }
    }
    if (pu) {
      var qE = pu(this);
      if (!qE) {
        qF(this);
      } else if (qE === 2) {
        q5();
      }
    }
  }
  function q7() {
    this.style.backgroundColor = pv;
  }
  function q6() {
    qF(this);
  }
  function qF(ek) {
    ek.style.backgroundColor = pv;
    ek.blur();
  }
  q1(this);
}
function qG(qH, pb) {
  var pM;
  function dX() {
    pM = document.createElement(S[0]);
    pM.style.display = "grid";
    pM.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))";
    pM.style.overflowY = S[9];
    pM.style.gridAutoRows = "5.3em";
    pM.style.maxHeight = S[1];
    qI();
  }
  function qI() {
    for (var aB = 0; aB < qH.length; aB++) {
      qH[aB].q3(1);
      pM.appendChild(qH[aB].button);
    }
    pb.appendChild(pM);
  }
  this.resize = function () {
    var aB;
    for (aB = 0; aB < qH.length; aB++) {
      b9.ph.ps(qH[aB].button);
    }
    pM.style.gap = pM.style.padding = b9.ph.pr(bb.po);
  };
  dX();
}
function qJ(qK, qL, qM) {
  this.eo = 0;
  this.eq = 0;
  this.i = 0;
  this.j = 0;
  this.resize = function () {
    this.j = Math.min(b9.ph.pi(qM || 0.5) * qK[1] * h.pj, h.j - 2 * bb.gap);
    this.i = Math.min(this.j * (qK[0] / qK[1]), h.i - 2 * bb.gap);
    this.j = (qK[1] * this.i) / qK[0];
    this.eo = bb.gap + qL[0] * (h.i - this.i - 2 * bb.gap);
    this.eq = bb.gap + qL[1] * (h.j - this.j - 2 * bb.gap);
  };
  this.qN = function () {
    return this.eo + 0.5 * this.i;
  };
}
function qO(qP, qQ) {
  var qR = document.createElement(S[0]);
  var qS = document.createElement(S[0]);
  var qT = document.createElement(S[0]);
  var qU = null;
  this.qV = new qW(
    {
      value: "",
      e2: -1,
    },
    0,
    qX,
    qY
  );
  var qZ;
  var qa = 0;
  var qb = 1;
  var qc = 0;
  var qd = 1048575;
  function q1(self) {
    self.qV.e.qe = 127;
    qR.style.position = S[3];
    qR.style.top = "0";
    qR.style.left = "0";
    qR.style.width = S[1];
    qR.style.overflowX = S[15];
    qR.style.overflowY = S[9];
    qR.style.font = S[6];
    qR.style.backgroundColor = bA.ml;
    qR.addEventListener(S[30], function () {
      qc = qR.scrollTop;
      if (qc < qR.scrollHeight - qR.clientHeight - 2) {
        qb = 0;
      } else {
        qb = 1;
      }
    });
    qS.style.font = S[6];
    qT.style.position = S[3];
    qT.style.left = "0";
    qT.style.width = S[1];
    self.qV.e.setAttribute(S[80], L(13));
    self.qV.e.style.position = S[3];
    self.qV.e.style.top = "0";
    self.qV.e.style.left = "0";
    self.qV.e.style.height = S[1];
    self.qV.e.style.backgroundColor = bA.mi;
    self.qV.e.style.textAlign = S[10];
    qZ = new w(L(14), qX);
    qZ.button.top = "0";
    qZ.button.style.position = S[3];
    qZ.button.style.height = S[1];
    qZ.q2(bA.nx);
    qU = new qf("127", qZ.button, 1, 1);
    qR.appendChild(qS);
    qT.appendChild(self.qV.e);
    qT.appendChild(qZ.button);
  }
  function qX() {
    qP();
    qU.qg.textContent = 127;
  }
  function qY(e) {
    e.target.value = b9.qh.qi(e.target.value);
    qU.qg.textContent = 127 - e.target.value.length;
  }
  this.qj = function (qk) {
    qd = 1048575;
    qS.textContent = "";
    if (!qk) {
      this.lZ();
    }
  };
  this.lZ = function () {
    var ql = bm.y.qm[0];
    var qn = bm.y.qo[ql];
    var qp = qn.qp;
    var eh = qp.length;
    var jD = qd === 1048575 ? 0 : eh - ((qn.qq - qd + 1048575) % 1048575);
    qd = qn.qq;
    jD = Math.max(jD, 0);
    if (jD >= eh) {
      return;
    }
    var qr = document.createDocumentFragment();
    for (var aB = jD; aB < eh; aB++) {
      qs(qr, bm.qt.qu(qp[aB], bm.qt.qv(qp[aB])));
    }
    qS.appendChild(qr);
    qw();
  };
  this.qx = function (r) {
    var qr = document.createDocumentFragment();
    qs(qr, r);
    qS.appendChild(qr);
    qw();
  };
  function qs(qr, pZ) {
    if (!pZ) {
      return;
    }
    pZ.qy = 1;
    qr.appendChild(bm.qz.transform(pZ));
  }
  function qw(br) {
    if (qb) {
      qR.scrollTop = qR.scrollHeight;
    } else if (br) {
      qR.scrollTop = qc;
    }
  }
  this.show = function (pb) {
    pb.appendChild(qR);
    pb.appendChild(qT);
    this.resize(pb);
  };
  this.r0 = function (pb) {
    pb.removeChild(qR);
    pb.removeChild(qT);
  };
  this.resize = function (pb) {
    qa = pb ? pb.offsetHeight : qa;
    var r1 = b9.ph.r2(0.04, 0.75);
    var r3 = Math.max(r1, qa - r1);
    var r4 = h.i / h.k;
    var r5 = 0.7 * r4;
    qT.style.top = b9.ph.pr(qa - r1);
    qT.style.height = b9.ph.pr(r1);
    qR.style.top = b9.ph.pr(qa - r1 - r3);
    qR.style.height = b9.ph.pr(r3);
    b9.ph.ps(qR, 2);
    this.qV.e.style.width = b9.ph.pr(r5);
    this.qV.e.style.fontSize = qZ.button.style.fontSize = b9.ph.pr(0.5 * r1);
    b9.ph.ps(this.qV.e, 6);
    qZ.button.style.left = b9.ph.pr(r5);
    qZ.button.style.width = b9.ph.pr(r4 - r5);
    var r6 = 0.385 * r1;
    if (a0.a1.r7()) {
      r6 *= 0.8 - (h.i > h.j) * 0.12;
    }
    qS.style.marginLeft = qS.style.marginRight = b9.ph.pr(0.5 * r6);
    qS.style.fontSize = b9.ph.pr(r6);
    qw(1);
  };
  q1(this);
}
function r8(r9, pt, rA) {
  pt = pt || L(15);
  this.e = document.createElement("p");
  function dX(e) {
    e.textContent = (r9.value ? "🟩 " : "⬜ ") + pt;
    e.style.margin = "0";
    e.style.marginBottom = S[25];
    e.style.cursor = S[31];
    e.addEventListener(S[24], click);
  }
  function click() {
    var value = 1 - r9.value;
    this.textContent = (value ? "🟩 " : "⬜ ") + pt;
    if (r9.e2 !== undefined) {
      bi.rB.rC(r9.e2, value);
    } else {
      r9.value = value;
    }
    rA && rA(value);
  }
  dX(this.e);
}
function rD(pb, pU) {
  var pM = document.createElement(S[0]);
  this.pd = pM;
  function dX() {
    pb.style.overflowX = S[15];
    pb.style.overflowY = S[9];
    pM.innerHTML = pU;
    pb.appendChild(pM);
  }
  this.resize = function () {
    pM.style.padding = b9.ph.pr(bb.po);
    pM.style.lineHeight = b9.ph.pr(b9.ph.r2(0.035));
  };
  dX();
}
function rE(rF) {
  var pM = document.createElement(S[0]);
  this.e = pM;
  this.rG = rF;
  function dX() {
    var aB;
    var eh = rF.length;
    pM.style.width = S[1];
    pM.style.height = "2.7em";
    pM.style.marginTop = S[41];
    pM.style.border = S[6];
    for (aB = 0; aB < eh; aB++) {
      rF[aB].style.verticalAlign = S[70];
      rF[aB].style.width = (100 / eh).toFixed(2) + "%";
      rF[aB].style.height = S[1];
      rF[aB].style.fontSize = S[12];
      pM.appendChild(rF[aB]);
    }
  }
  this.resize = function () {
    var aB;
    var eh = rF.length;
    for (aB = 1; aB < eh; aB++) {
      b9.ph.ps(rF[aB], 4);
    }
  };
  dX();
}
function rH(rI, pv, rJ) {
  this.pM = document.createElement(S[0]);
  this.qH = rI;
  var rK = 0;
  function q1(rL) {
    rL.pM.style.height = rL.pM.style.maxHeight = S[1];
    for (var aB = 0; aB < rI.length; aB++) {
      rI[aB].q2(pv);
      rI[aB].button.style.height = S[1];
      rI[aB].button.style.padding = S[62];
      rL.pM.appendChild(rI[aB].button);
    }
  }
  this.resize = function (pb, rM) {
    var eh = rI.length;
    if (!rJ) {
      for (var aB = 1; aB < eh; aB++) {
        b9.ph.ps(rI[aB].button, 4);
      }
    }
    var rN = 0;
    for (aB = 0; aB < eh; aB++) {
      rN += rI[aB].button.offsetWidth;
    }
    if (pb) {
      rK = pb.offsetWidth;
    }
    if (rM && rN < rK) {
      for (aB = 0; aB < eh; aB++) {
        rI[aB].button.style.width = ((100 * rI[aB].button.offsetWidth) / rN).toFixed(2) + "%";
      }
    } else {
      for (aB = 0; aB < eh; aB++) {
        rI[aB].button.style.width = S[9];
      }
    }
    if (!rM) {
      this.resize(pb, 1);
    }
  };
  q1(this);
}
function rO() {
  this.e = document.createElement("hr");
  function q1(e) {
    e.style.marginBottom = e.style.marginTop = "0.65em";
    e.style.marginLeft = e.style.marginRight = "-4%";
    e.style.border = S[5];
  }
  this.resize = function () {
    b9.ph.ps(this.e, 8, bA.mw);
  };
  q1(this.e);
}
function rP() {
  var rQ = document.createElement(S[0]);
  var rR = 0;
  var rS = 0;
  var rT, rU;
  function q1() {
    rQ.style.position = S[3];
    rQ.style.backgroundColor = bA.mj;
    rQ.style.color = bA.mn;
    rQ.style.pointerEvents = S[5];
    rQ.style.zIndex = "5";
    rQ.style.maxWidth = S[1];
  }
  this.show = function (eo, eq, pO, rV, rW) {
    if (rR) {
      if (rV) {
        this.r0();
      } else {
        return;
      }
    }
    if (eo === eq && eo === -1) {
      eo = rT;
      eq = rU;
    } else {
      rT = eo;
      rU = eq;
    }
    if (!rW) {
      rS = rV;
    }
    rR = 1;
    var rX = h.i / h.k;
    rQ.style.whiteSpace = S[28];
    rQ.textContent = pO;
    b9.ph.ps(rQ, 5);
    rQ.style.font = b9.ph.rY(0, b9.ph.r2(0.015));
    rQ.style.padding = "0.3em 0.6em";
    rQ.style.left = eo + "px";
    rQ.style.top = S[60];
    document.body.appendChild(rQ);
    var hq = eo + rQ.offsetWidth - rX;
    if (hq > 0) {
      var rZ = eo - hq;
      rQ.style.left = rZ + "px";
      if (rZ < 5) {
        rQ.style.whiteSpace = S[79];
      }
    }
    rQ.style.top = eq - rQ.offsetHeight + rS * bb.ra + "px";
  };
  this.r0 = function (rb) {
    if (!rR) {
      return 1;
    }
    if (rb && rS) {
      return 0;
    }
    rR = 0;
    document.body.removeChild(rQ);
    return 1;
  };
  q1();
}
function qW(rc, type, rd, re) {
  this.e = document.createElement(S[22]);
  function dX(e) {
    e.type = type ? S[46] : S[43];
    e.id = S[22] + t.y.rf++;
    e.value = rc.value;
    e.style.width = S[1];
    e.style.userSelect = S[5];
    e.style.outline = S[5];
    e.style.resize = S[5];
    e.style.border = S[6];
    e.style.font = S[6];
    e.style.color = bA.mn;
    e.style.backgroundColor = bA.mg;
    e.style.fontSize = S[17];
    e.style.padding = "0.1em 0.2em";
    e.addEventListener(S[50], function () {
      h.rg++;
    });
    e.addEventListener(S[51], function () {
      h.rg--;
      if (rc.e2 !== -1) {
        bi.rB.rC(rc.e2, e.value);
      }
    });
    e.addEventListener("keypress", function (event) {
      if (event.key === S[39]) {
        event.preventDefault();
        if (rc.e2 !== -1) {
          bi.rB.rC(rc.e2, e.value);
        }
        if (rd) {
          rd();
        } else {
          e.blur();
        }
      }
    });
    if (re) {
      e.addEventListener(S[22], function (pZ) {
        re(pZ);
      });
    }
  }
  dX(this.e);
}
function rh(pb, data) {
  var eh = data.ri.length;
  var rj = document.createElement(S[0]);
  var rk = document.createElement(S[0]);
  var rl = document.createElement(S[0]);
  var rm = new Array(eh);
  var pc = new Array(eh);
  var rn = new Array(data.ro.length);
  var rp = b9.color.mh(70, 70, 0, 0.35);
  function dX() {
    pb.style.display = S[16];
    pb.style.flexDirection = "column";
    rk.style.overflowX = S[15];
    rk.style.overflowY = S[9];
    rk.addEventListener(S[30], function () {
      this.rq = this.scrollTop;
    });
    rr();
    qI();
  }
  function rr() {
    var ek, aB;
    var ri = data.ri;
    var ke = eh ? ri[0].length : 0;
    for (aB = 0; aB < eh; aB++) {
      rm[aB] = document.createElement(S[0]);
      rm[aB].style.backgroundColor = rs(aB);
      rm[aB].style.width = S[1];
      rm[aB].style.display = S[16];
      pc[aB] = new Array(ke);
      for (var f0 = 0; f0 < ke; f0++) {
        pc[aB][f0] = ek = document.createElement(S[0]);
        ek.style.display = S[16];
        ek.style.justifyContent = S[10];
        ek.style.wordBreak = S[92];
        ek.style.padding = S[114];
        ek.style.width = data.rt[f0] + "%";
        ek.innerHTML = ri[aB][f0].f9;
        if (ri[aB][f0].dm === 1) {
          ek.name = "" + aB;
          ek.style.color = bA.nj;
          ek.style.backgroundColor = rp;
          ek.addEventListener(S[81], qD);
          ek.addEventListener(S[82], ru);
          rv(ek, ri[aB][f0].rw, ri[aB][f0].rx);
        }
        rm[aB].appendChild(ek);
      }
    }
    rj.style.display = S[16];
    rj.style.backgroundColor = b9.color.mh(0, 120, 0, 0.35);
    for (aB = 0; aB < rn.length; aB++) {
      rn[aB] = ek = document.createElement(S[0]);
      ek.style.display = S[16];
      ek.style.justifyContent = S[10];
      ek.style.wordBreak = S[92];
      ek.style.padding = S[114];
      ek.style.width = data.rt[aB] + "%";
      ek.innerHTML = data.ro[aB];
      rj.appendChild(ek);
    }
  }
  function rv(ek, rw, rx) {
    if (rx === 2147483647) {
      return;
    }
    ek.addEventListener(S[24], function () {
      bC.a7(30);
      bC.a8(30, rw);
      bG.dX(bC.aC);
      this.style.backgroundColor = rp;
      t.u(
        8,
        t.ry,
        new rz(25, {
          s0: 0,
          rw: bE.s1.s2(bE.s1.s3(5)),
          rx: rx,
        })
      );
    });
  }
  function qD() {
    this.style.backgroundColor = b9.color.qD(rp, 160);
  }
  function ru() {
    this.style.backgroundColor = rp;
  }
  function qI() {
    for (var aB = 0; aB < eh; aB++) {
      rl.appendChild(rm[aB]);
    }
    rk.appendChild(rl);
    pb.appendChild(rj);
    pb.appendChild(rk);
  }
  function rs(aB) {
    return aB % 2 === 1 ? b9.color.mh(130, 130, 130, 0.35) : bA.mm;
  }
  this.resize = function () {
    pl();
    pl();
  };
  function pl() {
    var aB, f0;
    pb.style.font = b9.ph.rY(0, b9.ph.s4(0.026, 0.5, 0.03));
    for (aB = 1; aB < rn.length; aB++) {
      b9.ph.ps(rn[aB], 4);
    }
    b9.ph.ps(rj, 2);
    if (!eh) {
      return;
    }
    var s5 = rj.offsetWidth;
    var s6 = rl.offsetWidth;
    var h6;
    for (aB = 0; aB < rn.length; aB++) {
      h6 = 0.01 * data.rt[aB] * s6;
      rn[aB].style.width = ((100 * h6) / s5).toFixed(2) + "%";
    }
    var ke = data.ri[0].length;
    for (aB = 0; aB < eh; aB++) {
      b9.ph.ps(rm[aB], 2);
      for (f0 = 1; f0 < ke; f0++) {
        b9.ph.ps(pc[aB][f0], 4);
      }
    }
    if (rk.rq) {
      rk.scrollTop = rk.rq;
    }
  }
  dX();
}
function s7() {
  var s8 = document.createElement(S[0]);
  var s9 = document.createElement(S[0]);
  var sA = document.createElement(S[0]);
  var rl = document.createElement(S[0]);
  var qH = [];
  var sB;
  var sC;
  var dx = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)];
  var sD = [1, 2, 3, 0, 9, 10, 11];
  function dX() {
    s8.style.position = S[3];
    s9.style.width = "25%";
    s9.style.height = S[1];
    s9.style.backgroundColor = bA.mj;
    sA.style.position = S[3];
    sA.style.width = "75%";
    sA.style.height = S[1];
    sA.style.backgroundColor = bA.mj;
    sA.style.top = sA.style.right = b9.ph.pr(0);
    b9.ph.sE(sA);
    rl.style.height = rl.style.maxHeight = S[1];
    qH.push(
      new w(
        "",
        function () {
          sF(0);
        },
        bA.nX
      )
    );
    qH.push(
      new w(
        "",
        function () {
          sF(1);
        },
        bA.nY
      )
    );
    qH.push(
      new w(
        "",
        function () {
          sF(2);
        },
        bA.nQ
      )
    );
    qH.push(
      new w(
        "",
        function () {
          sF(3);
        },
        bA.nB
      )
    );
    qH.push(
      new w(
        "",
        function () {
          sF(4);
        },
        bA.ns
      )
    );
    qH.push(
      new w(
        "",
        function () {
          sF(5);
        },
        bA.nq
      )
    );
    qH.push(
      new w(
        "",
        function () {
          sF(6);
        },
        bA.ns
      )
    );
    sB = new Array(qH.length);
    for (var aB = 0; aB < qH.length; aB++) {
      qH[aB].button.style.position = S[3];
      sB[aB] = [new sG(dx[aB], qH[aB].button, 0.25, 0.45), new sG("", qH[aB].button, 0.53, 0.84, 1)];
      qH[aB].button.style.height = qH[aB].button.style.maxHeight = S[1];
      qH[aB].button.top = b9.ph.pr(0);
      rl.appendChild(qH[aB].button);
    }
    sA.appendChild(rl);
    s8.appendChild(s9);
    s8.appendChild(sA);
  }
  function sF(aB) {
    t.u(
      8,
      0,
      new rz(21, {
        sH: sD[aB],
        sI: 0,
        sJ: 10,
      })
    );
  }
  this.show = function () {
    this.rC(t.y.sK);
    document.body.appendChild(s8);
  };
  this.r0 = function () {
    document.body.removeChild(s8);
  };
  this.rC = function (sK) {
    var sL = [3, 0, 1, 2, 4, 5, 6];
    for (var aB = 0; aB < qH.length; aB++) {
      var i = sK[aB];
      i = i ? i : "";
      sB[sL[aB]][1].qg.textContent = i;
    }
  };
  this.resize = function () {
    var aB;
    var sM = bb.gap;
    var j = b9.ph.sN(0.085);
    var i = Math.min(4 * j, h.i - 2 * sM);
    var eh = qH.length;
    b9.ph.sO(s8, sM, h.j - sM - j, i, j);
    b9.ph.ps(s8);
    b9.ph.ps(s9, 6);
    for (aB = 0; aB < eh - 1; aB++) {
      b9.ph.ps(qH[aB].button, 6);
    }
    for (aB = 0; aB < eh; aB++) {
      sB[aB][0].resize();
      sB[aB][1].resize();
    }
    qH[0].eo = 0;
    qH[0].button.style.left = b9.ph.pr(qH[0].eo);
    qH[0].button.style.width = b9.ph.sP(1.7 * j);
    for (aB = 1; aB < eh; aB++) {
      qH[aB].eo = qH[aB - 1].eo + qH[aB - 1].button.offsetWidth;
      qH[aB].button.style.left = b9.ph.pr(qH[aB].eo);
    }
    if (!sC) {
      if (!ab.sQ()) {
        return;
      }
      sC = ab.get(14);
      sC.style.width = "24%";
      sC.style.position = S[3];
      s9.appendChild(sC);
    }
    sC.style.left = b9.ph.pr(0);
    sC.style.top = "7%";
    if (sA.sR) {
      sA.scrollLeft = sA.sR;
    }
  };
  dX();
}
function sS(sT, sU, sV, sW, qP, qQ) {
  var sX = document.createElement(S[0]);
  var sY = document.createElement(S[0]);
  var sZ = document.createElement(S[0]);
  var sa = document.createElement(S[0]);
  var sb = document.createElement(S[0]);
  var sc = document.createElement(S[0]);
  var sd = document.createElement(S[0]);
  var se = document.createElement(S[0]);
  var sf = document.createElement(S[14]);
  var sg = document.createElement(S[0]);
  this.sh = new qO(qP, qQ);
  this.si = new sj(qQ);
  this.sk = [sT, sU, sV, sW];
  function q1(self) {
    sX.style.position = S[3];
    sX.style.top = "0";
    sX.style.left = "0";
    sX.style.width = S[1];
    sX.style.height = S[1];
    sX.style.backgroundColor = bA.mm;
    if (!bI.qA()) {
      sX.style.backdropFilter = S[93];
      sX.style.webkitBackdropFilter = S[93];
    }
    sY.style.position = S[3];
    sY.style.top = "0";
    sY.style.left = "0";
    sY.style.width = S[1];
    sY.style.display = S[16];
    sY.style.alignItems = S[10];
    var g = [sZ, sa, sb, sg];
    for (var aB = 0; aB < g.length; aB++) {
      g[aB].style.position = S[3];
      g[aB].style.left = "0";
      g[aB].style.width = S[1];
      b9.ph.sE(g[aB]);
    }
    sc.style.position = S[3];
    sc.style.left = "0";
    sc.style.width = S[1];
    sc.style.font = S[6];
    sd.style.position = S[3];
    sd.style.left = "0";
    sd.style.width = S[1];
    se.style.position = S[3];
    se.style.top = "0";
    se.style.left = "0";
    se.style.height = S[1];
    se.style.width = S[57];
    se.style.backgroundColor = bA.n9;
    sf.innerHTML = "";
    sf.style.position = S[3];
    sf.style.top = S[57];
    sf.style.left = S[57];
    sf.style.transform = "translate(-50%, -50%)";
    sl();
    self.si.show(sc);
  }
  function sl() {
    sY.appendChild(sm());
    sZ.appendChild(sT.pM);
    sa.appendChild(sU.pM);
    sb.appendChild(sV.pM);
    sd.appendChild(se);
    sd.appendChild(sf);
    sg.appendChild(sW.pM);
    sX.appendChild(sY);
    sX.appendChild(sZ);
    sX.appendChild(sa);
    sX.appendChild(sb);
    sX.appendChild(sc);
    sX.appendChild(sd);
    sX.appendChild(sg);
  }
  function sm() {
    var sn = document.createElement("h1");
    sn.textContent = L(23);
    sn.style.margin = "0 auto 0.15em auto";
    sn.style.webkitTextStroke = S[116];
    sn.style.fontFamily = S[106];
    sn.style.fontSize = S[6];
    sn.style.fontWeight = S[6];
    return sn;
  }
  this.so = function (sp) {
    var pO = (sp / 10).toFixed(1) + "%";
    se.style.width = pO;
    sf.innerHTML = pO;
  };
  this.sq = function () {
    this.si.r0(sc);
    this.sh.show(sc);
  };
  this.sr = function () {
    this.sh.r0(sc);
    this.si.show(sc);
  };
  this.ss = function () {
    return sY;
  };
  this.show = function () {
    document.body.appendChild(sX);
  };
  this.r0 = function () {
    document.body.removeChild(sX);
  };
  this.resize = function (st) {
    var su = 1 - 0.4 * a0.a1.r7() * (h.i > 1.6 * h.j);
    var sv = b9.ph.r2(su * 0.05);
    var sw = h.j > h.i;
    var sx = b9.ph.r2(su * 0.07 + 0.03 * sw);
    var sy = b9.ph.r2(0.04 + 0.02 * sw);
    var sz = b9.ph.r2(su * 0.02 + 0.01 * sw);
    var t0 = b9.ph.r2(0.025);
    sX.style.font = b9.ph.rY(0, t0);
    if (su < 1) {
      var t1 = b9.ph.rY(0, su * t0);
      sZ.style.font = t1;
      sb.style.font = t1;
      sg.style.font = t1;
      sd.style.font = t1;
      sa.style.font = t1;
    }
    sY.style.height = b9.ph.pr(sv);
    sY.style.font = b9.ph.rY(0, 0.72 * sv);
    b9.ph.ps(sY, 2);
    sZ.style.top = b9.ph.pr(sv);
    sZ.style.height = b9.ph.pr(sx);
    b9.ph.ps(sZ, 2);
    sa.style.font = b9.ph.rY(0, su * b9.ph.r2(0.02));
    sa.style.top = b9.ph.pr(sv + sx);
    sa.style.height = b9.ph.pr(sy);
    b9.ph.ps(sa, 2);
    sb.style.top = b9.ph.pr(sv + sx + sy);
    sb.style.height = b9.ph.pr(sx);
    b9.ph.ps(sb, 2);
    sc.style.top = b9.ph.pr(sv + sx + sy + sx);
    sc.style.height = b9.ph.pr(h.j / h.k - sv - 3 * sx - sy - sz);
    sd.style.top = b9.ph.pr(h.j / h.k - sx - sz);
    sd.style.height = b9.ph.pr(sz);
    b9.ph.ps(sd, 8);
    sf.style.font = b9.ph.rY(0, 0.8 * sz);
    sg.style.top = b9.ph.pr(h.j / h.k - sx);
    sg.style.height = b9.ph.pr(sx);
    b9.ph.ps(sg, 8);
    sT.resize(sZ);
    sU.resize(sZ);
    sV.resize(sZ);
    sW.resize(sZ);
    if (st) {
      this.sh.resize(sc);
    } else {
      this.si.resize();
    }
  };
  q1(this);
}
function sj(qQ) {
  var sX = document.createElement(S[0]);
  var sc = document.createElement(S[0]);
  function q1() {
    sX.style.top = "0";
    sX.style.left = "0";
    sX.style.width = sX.style.height = S[1];
    sX.style.overflowX = S[15];
    sX.style.overflowY = S[9];
    sX.style.font = S[6];
    sc.style.font = S[6];
    sc.style.margin = S[42];
    sX.appendChild(sc);
  }
  this.lZ = function () {
    sc.textContent = "";
    bm.t2.r0(1);
    var qr = document.createDocumentFragment();
    var t3 = bm.y.qm[0];
    var t4 = bm.t4.t5[t3];
    var t6 = bm.t4.t6[t3];
    for (var aB = 0; aB < t4.length; aB++) {
      t7(qr, t4[aB], aB < t6, t3);
    }
    sc.appendChild(qr);
  };
  function t7(qr, pZ, t8, t3) {
    var qg = document.createElement(S[14]);
    qg.textContent = (t8 ? "🟢 " : "⚪ ") + bm.qt.t9(pZ, t3);
    qg.style.color = bm.qt.tA(pZ.tB);
    qg.style.cursor = S[31];
    qg.style.margin = "0.2em 0.2em 0.2em 0.2em";
    qg.style.width = qg.style.maxWidth = t3 === 2 ? "10em" : "9em";
    qg.style.height = qg.style.maxHeight = S[109];
    qg.style.whiteSpace = S[47];
    qg.style.overflow = S[15];
    qg.style.textOverflow = "ellipsis";
    qg.style.font = S[6];
    qg.style.display = S[49];
    bm.qt.tC(pZ) && (qg.style.textDecoration = S[69]);
    qg.onclick = function (e) {
      qQ(e, pZ);
    };
    !bI.qA() &&
      (qg.onmouseover = function (e) {
        bm.t2.tD(e, pZ, 1);
      });
    qr.appendChild(qg);
  }
  this.show = function (pb) {
    pb.appendChild(sX);
  };
  this.r0 = function (pb) {
    pb.removeChild(sX);
  };
  this.resize = function () {
    sc.style.fontSize = b9.ph.pr(b9.ph.r2(0.02, 0.3));
  };
  q1();
}
function tE(tF) {
  var sX = document.createElement(S[0]);
  var qT = document.createElement(S[0]);
  var tG = [];
  function q1() {
    sX.style.position = S[3];
    sX.style.color = bA.mn;
    sX.style.zIndex = "3";
    sX.style.right = "0";
    sX.style.top = "0";
    qT.style.position = S[3];
    qT.style.height = S[9];
    qT.style.color = bA.mn;
    qT.style.backgroundColor = bA.mj;
    qT.style.left = "0";
    qT.style.width = S[1];
    qT.style.overflowWrap = S[35];
    sX.appendChild(qT);
    for (var aB = 0; aB < 4; aB++) {
      tG[aB] = document.createElement(S[0]);
      tG[aB].style.position = S[3];
      tG[aB].style.backgroundColor = bA.mj;
      tG[aB].style.color = bA.mn;
      tG[aB].style.top = "0";
      tG[aB].style.display = S[16];
      tG[aB].style.justifyContent = S[10];
      tG[aB].style.alignItems = S[10];
      tG[aB].style.userSelect = S[5];
      tG[aB].style.outline = S[5];
      tG[aB].style.font = S[6];
      tG[aB].tH = aB;
      if (aB !== 2) {
        tG[aB].onclick = tF;
        tG[aB].onmouseover = q5;
        tG[aB].onmouseout = q6;
      }
      sX.appendChild(tG[aB]);
    }
    tG[0].textContent = "◀";
    tG[1].textContent = "▶";
    tG[3].textContent = "✖";
  }
  this.rC = function (tI, tJ) {
    tG[2].textContent = tI + 1 + S[20] + tJ;
  };
  function q5() {
    if (bI.qA()) {
      return;
    }
    this.style.backgroundColor = b9.color.qD(bA.mj, 50);
  }
  function q6() {
    this.style.backgroundColor = bA.mj;
  }
  this.show = function (pZ) {
    qT.appendChild(bm.qz.transform(bm.qt.qu(pZ, bm.qt.qv(pZ))));
    document.body.appendChild(sX);
  };
  this.resize = function () {
    var j = b9.ph.r2(0.03, 0.5);
    sX.style.width = 10 * j + "px";
    sX.style.font = b9.ph.rY(1, 0.75 * j);
    b9.ph.ps(sX, 4);
    qT.style.top = j + "px";
    qT.style.font = b9.ph.rY(0, 0.55 * j);
    b9.ph.ps(qT, 2);
    sX.style.height = j + qT.offsetHeight + "px";
    for (var aB = 0; aB < 3; aB++) {
      b9.ph.ps(tG[aB], 6);
      tG[[0, 1, 3][aB]].style.width = 2 * j + "px";
    }
    for (aB = 0; aB < 4; aB++) {
      tG[aB].style.height = j + "px";
      b9.ph.ps(tG[aB], 2);
    }
    tG[2].style.width = 4 * j + "px";
    tG[1].style.left = 2 * j + "px";
    tG[2].style.left = 4 * j + "px";
    tG[3].style.left = 8 * j + "px";
  };
  this.tK = function () {
    for (var aB = 0; aB < 4; aB++) {
      tG[aB].onclick = null;
      tG[aB].onmouseover = null;
      tG[aB].onmouseout = null;
    }
    document.body.removeChild(sX);
    sX = qT = tG = null;
  };
  q1();
}
function tL(tF) {
  var rQ = document.createElement(S[0]);
  function q1() {
    rQ.style.position = S[3];
    q6();
    rQ.style.color = bA.mn;
    rQ.style.zIndex = "3";
    rQ.style.right = "0";
    rQ.style.top = "0";
    rQ.style.display = S[16];
    rQ.style.justifyContent = S[10];
    rQ.style.alignItems = S[10];
    rQ.style.userSelect = S[5];
    rQ.style.outline = S[5];
    rQ.onclick = tF;
    rQ.onmouseover = q5;
    rQ.onmouseout = q6;
  }
  function q5() {
    if (bI.qA()) {
      return;
    }
    rQ.style.backgroundColor = b9.color.qD(bA.mj, 50);
  }
  function q6() {
    rQ.style.backgroundColor = bA.mj;
  }
  this.rC = function (tJ) {
    rQ.textContent = tJ;
  };
  this.show = function () {
    document.body.appendChild(rQ);
  };
  this.resize = function () {
    var j = b9.ph.r2(0.03, 0.5);
    rQ.style.width = 2 * j + "px";
    rQ.style.height = j + "px";
    rQ.style.font = b9.ph.rY(1, 0.75 * j);
    b9.ph.ps(rQ, 4);
    b9.ph.ps(rQ, 2);
  };
  this.tK = function () {
    rQ.onclick = null;
    rQ.onmouseover = null;
    rQ.onmouseout = null;
    document.body.removeChild(rQ);
    rQ = null;
  };
  q1();
}
function tM(rI) {
  var sX = document.createElement(S[0]);
  var tN = document.createElement(S[0]);
  this.eo = 0;
  this.eq = 0;
  var rR = 0;
  this.qH = rI;
  function q1() {
    for (var aB = 0; aB < rI.length; aB++) {
      new qf("" + (1 + aB), rI[aB].button, 0, 1);
    }
    sX.style.position = "fixed";
    sX.style.top = "0";
    sX.style.left = "0";
    sX.style.width = S[1];
    sX.style.height = S[1];
    sX.style.zIndex = "5";
    tN.style.position = S[3];
    tO();
    sX.appendChild(tN);
    sX.addEventListener(S[24], tP);
  }
  function tP() {
    bm.tQ.r0();
  }
  function tO() {
    var tR = (100 / rI.length).toFixed(2) + "%";
    for (var aB = 0; aB < rI.length; aB++) {
      rI[aB].button.style.width = S[1];
      rI[aB].button.style.height = rI[aB].button.style.maxHeight = tR;
      rI[aB].button.style.padding = S[62];
      tN.appendChild(rI[aB].button);
    }
  }
  this.show = function (eo, eq, tS) {
    if (rR) {
      return [0, 0];
    }
    rR = 1;
    this.eo = eo;
    this.eq = eq;
    tT(this, tS);
    document.body.appendChild(sX);
  };
  this.r0 = function () {
    if (!rR) {
      return;
    }
    rR = 0;
    sX.removeEventListener(S[24], tP);
    document.body.removeChild(sX);
  };
  function tT(self, tS) {
    var i = b9.ph.r2(0.16, 0.7);
    var j = (rI.length * i) / 3;
    var tU = h.i / h.k;
    var tV = h.j / h.k;
    var mP = Math.min(1, Math.min(tU / i, tV / j));
    i *= mP;
    j *= mP;
    tS && (self.eo += b9.ph.r2(0.03, 0.5));
    self.eo = bK.pF(self.eo, 0, tU - i);
    self.eq = bK.pF(self.eq, 0, tV - j);
    tN.style.left = self.eo + "px";
    tN.style.top = self.eq + "px";
    tN.style.width = i + "px";
    tN.style.height = j + "px";
    tN.style.font = b9.ph.rY(0, (0.34 * j) / rI.length);
    b9.ph.ps(tN, 5);
    for (var aB = 1; aB < rI.length; aB++) {
      b9.ph.ps(rI[aB].button, 8);
    }
  }
  q1();
}
function tW(rc, tX) {
  this.pX = [];
  var tY = this.pX;
  function dX() {
    var tZ;
    var eh = rc.ta.length;
    for (var aB = 0; aB < eh; aB++) {
      tZ = document.createElement("p");
      tZ.textContent = "⚪ " + rc.ta[aB];
      tZ.style.margin = "0";
      tZ.name = "" + aB;
      tZ.style.cursor = S[31];
      tZ.style.fontSize = S[17];
      tZ.addEventListener(S[24], click);
      tY.push(tZ);
    }
    tY[rc.value].textContent = tY[rc.value].textContent.replace("⚪", "🟢");
  }
  function click() {
    for (var aB = 0; aB < tY.length; aB++) {
      tY[aB].textContent = tY[aB].textContent.replace("🟢", "⚪");
    }
    this.textContent = this.textContent.replace("⚪", "🟢");
    var e2 = parseInt(this.name);
    if (rc.e2 !== undefined) {
      bi.rB.rC(rc.e2, e2);
    }
    if (tX) {
      tX(e2);
    }
  }
  dX();
}
function tb(title, tc, td) {
  var s8 = document.createElement(S[0]);
  var te = document.createElement(S[0]);
  var rl = document.createElement(S[0]);
  var tf = document.createElement(S[0]);
  var tg = document.createElement(S[0]);
  this.th = rl;
  this.ti = tc;
  function dX() {
    s8.style.position = S[3];
    s8.style.top = "0";
    s8.style.left = "0";
    s8.style.width = S[1];
    s8.style.height = S[1];
    te.style.position = S[3];
    te.style.top = "0";
    te.style.left = "0";
    te.style.width = S[1];
    te.style.display = S[16];
    te.style.backgroundColor = bA.mj;
    tf.style.position = S[3];
    tf.style.left = "0";
    tf.style.width = S[1];
    b9.ph.sE(tf);
    tg.style.height = tg.style.maxHeight = S[1];
    rl.style.position = S[3];
    rl.style.width = S[1];
    rl.style.backgroundColor = bA.mj;
    tj();
    qI();
  }
  function tj() {
    for (var aB = 0; aB < tc.length; aB++) {
      tc[aB].button.style.height = S[1];
      tc[aB].button.style.padding = S[62];
    }
  }
  function qI() {
    for (var aB = 0; aB < tc.length; aB++) {
      tg.appendChild(tc[aB].button);
    }
    te.appendChild(tk());
    tf.appendChild(tg);
    if (td !== false) {
      s8.appendChild(rl);
      s8.appendChild(te);
      s8.appendChild(tf);
    }
  }
  function tk() {
    var tl = document.createElement("h1");
    tl.textContent = title;
    tl.style.margin = S[9];
    tl.style.fontSize = title.length > 20 && h.j > h.i ? "1.8em" : "2.3em";
    tl.style.webkitTextStroke = S[116];
    tl.style.fontFamily = S[106];
    return tl;
  }
  this.show = function () {
    if (td !== false) {
      document.body.appendChild(s8);
    } else {
      document.body.appendChild(te);
      document.body.appendChild(tf);
    }
  };
  this.r0 = function () {
    if (td !== false) {
      document.body.removeChild(s8);
    } else {
      document.body.removeChild(te);
      document.body.removeChild(tf);
    }
  };
  this.tm = function () {
    var r3 = b9.ph.r2(0.1);
    var r1 = b9.ph.r2(0.08 + 0.04 * (h.tn < 1));
    var to = h.j / h.k - r3 - r1;
    return {
      r3: r3,
      r1: r1,
      to: to,
    };
  };
  this.resize = function (rM) {
    var aB, e;
    var eh = tc.length;
    var tp = this.tm();
    var r3 = tp.r3;
    var r1 = tp.r1;
    te.style.height = b9.ph.pr(r3);
    b9.ph.ps(te, 2);
    tf.style.top = b9.ph.pr(h.j / h.k - r1);
    tf.style.height = b9.ph.pr(r1);
    b9.ph.ps(tf, 8);
    rl.style.top = b9.ph.pr(r3);
    rl.style.height = rl.style.maxHeight = b9.ph.pr(tp.to);
    te.style.font = b9.ph.rY(0, b9.ph.r2(0.02, 0.3));
    tf.style.font = b9.ph.rY(0, b9.ph.r2(0.02, 0.7));
    rl.style.font = b9.ph.rY(0, b9.ph.r2(0.02, 0.7));
    for (aB = 1; aB < eh; aB++) {
      b9.ph.ps(tc[aB].button, 4);
    }
    var rN = 0;
    for (aB = 0; aB < eh; aB++) {
      rN += tc[aB].button.offsetWidth;
    }
    if (rM && rN < tf.offsetWidth) {
      for (aB = 0; aB < eh; aB++) {
        e = tc[aB].button;
        e.style.width = ((100 * tc[aB].button.offsetWidth) / rN).toFixed(2) + "%";
      }
    } else {
      for (aB = 0; aB < eh; aB++) {
        e = tc[aB].button;
        e.style.width = S[9];
      }
    }
    if (tf.sR) {
      tf.scrollLeft = tf.sR;
    }
    if (!rM) {
      this.resize(true);
    }
  };
  this.tq = function () {
    var tp = this.tm();
    var f2 = h.k;
    tr.fillStyle = bA.mj;
    tr.fillRect(0, f2 * tp.r3, h.i, f2 * tp.to);
  };
  dX();
}
function qf(ts, tt, tu, tv) {
  this.qg = document.createElement(S[14]);
  function q1(self) {
    self.qg.textContent = ts;
    self.qg.style.color = bA.mn;
    self.qg.style.position = S[3];
    self.qg.style.font = S[6];
    if (tv) {
      self.qg.style.bottom = "0.06em";
    } else {
      self.qg.style.top = "0.12em";
    }
    if (tu) {
      self.qg.style.left = S[115];
    } else {
      self.qg.style.right = S[115];
    }
    self.qg.style.fontSize = S[41];
    self.qg.style.pointerEvents = S[5];
    self.qg.style.whiteSpace = S[28];
    tt.style.position = "relative";
    tt.style.overflow = S[15];
    tt.appendChild(self.qg);
  }
  q1(this);
}
function sG(ts, tt, tw, tx, ty) {
  this.qg = document.createElement(S[14]);
  function q1(self) {
    self.qg.textContent = ts;
    self.qg.style.color = bA.mn;
    self.qg.style.font = S[6];
    self.qg.style.margin = "0.1em 0.6em";
    self.qg.style.pointerEvents = S[5];
    ty && (self.qg.style.fontWeight = S[36]);
    self.qg.style.whiteSpace = S[47];
    self.qg.style.display = "block";
    tt.appendChild(self.qg);
  }
  this.resize = function () {
    this.qg.style.fontSize = ((tx - tw) * tt.offsetHeight).toFixed(1) + "px";
  };
  q1(this);
}
function tz(u0, u1, u2, u3) {
  var u4 = document.createElement("textarea");
  this.e = u4;
  var u5 = true;
  function dX() {
    u4.setAttribute("id", "textArea" + t.y.rf++);
    u4.setAttribute("autocomplete", "off");
    if (u0) {
      u4.setAttribute(S[80], u0);
    }
    u4.style.top = "0";
    u4.style.left = "0";
    u4.style.width = S[1];
    u4.style.height = S[1];
    u4.style.userSelect = S[5];
    u4.style.outline = S[5];
    u4.style.resize = S[5];
    u4.style.border = S[5];
    u4.style.color = bA.mn;
    u4.style.backgroundColor = bA.mg;
    if (u3) {
      u4.style.fontSize = S[17];
      u4.rows = 6;
      u4.style.padding = "0.25em";
    } else {
      u4.style.padding = "0.45em";
      u4.style.fontSize = S[58];
    }
    if (u2) {
      u4.addEventListener(S[22], function (e) {
        u2(e);
      });
    }
    u4.addEventListener(S[50], function () {
      h.rg++;
    });
    u4.addEventListener(S[51], function () {
      h.rg--;
    });
  }
  this.resize = function () {
    if (u1) {
      b9.ph.ps(u4, 5);
    }
  };
  this.u6 = function (u7) {
    u4.value = u7;
  };
  this.u8 = function () {
    return u4.value;
  };
  this.u9 = function () {
    u4.select();
  };
  this.clear = function () {
    u4.value = "";
  };
  this.uA = function () {
    if (u5 && navigator.clipboard) {
      u4.select();
      navigator.clipboard.writeText(u4.value).catch(function () {
        u5 = false;
        uB();
      });
      return;
    }
    uB();
  };
  function uB() {
    u4.select();
    document.execCommand("copy");
  }
  dX();
}
function dE() {
  this.pz = new uC();
  this.eE = new uD();
  this.rB = new uE();
  this.y = new uF();
  this.dX = function () {
    this.eE.dX();
    new uG().dX();
  };
}
function uD() {
  this.data = [];
  this.dX = function () {
    uH(0, 1, 0, 5);
    uH(1, 1, 1);
    uH(2, 0);
    uI(3, 2);
    uH(4, 1);
    uI(5, 2, S[72], 1);
    uH(6, 0);
    uH(7, 0, 0);
    uH(8, 0);
    uH(9, 1, 1);
    uH(10, 1);
    uH(11, 1, 1);
    uI(12, 2, navigator.language);
    uH(13);
    uH(14);
    uJ(100);
    uI(100, 2);
    uI(101, 2);
    uI(102, 2);
    uI(103, 2);
    uI(104, 2);
    uI(105, 2);
    uI(106, 2);
    uH(107);
    uH(108);
    uH(109);
    uI(110, 2);
    uH(111);
    uH(112);
    uH(113);
    uI(114, 2);
    uH(115);
    uI(116, 2);
    uH(117, 1);
    uI(118, 2, "", 2);
    uH(119, 1, 0, 1);
    uI(120, 2);
    uH(121, 1, ~~(Math.random() * 262144));
    uI(122, 2, S[54] + Math.floor(Math.random() * 1000));
    uH(123);
    uI(124);
    uH(125, 1);
    uI(126, 2);
    uH(127, 0, 1);
    uH(128);
    uH(129);
    uH(130);
    uH(131);
    uH(132);
    uI(133, 2);
    uH(134, 0, 5);
    uI(135, 2);
    uI(136, 2);
    uH(137);
    uH(138);
    uH(139);
    uH(140);
    uH(141);
    uH(142);
    uH(143);
    uH(144);
    uI(145, 2);
    uH(146);
    uH(147);
    uI(148, 2);
    uH(149);
    uH(150, 0, 1);
    uI(151, 2);
    uH(152, 0, 5);
    uH(153, 1);
    uH(154, 1);
    uI(155, 2);
    uI(156, 2);
    uH(157);
    uH(158);
    uH(159);
    uH(160);
    uJ(180);
    uH(180, 0);
    uH(181, 0);
  };
  this.rC = function (e2, value) {
    this.data[e2].value = value;
  };
  this.uK = function (e2, value) {
    this.rC(e2, value);
    bi.pz.save(e2, String(value));
    bi.pz.save(e2, String(this.data[e2].dp), true);
  };
  this.uL = function () {
    var aB;
    for (aB = 0; aB < this.data.length; aB++) {
      if (this.data[aB]) {
        bi.pz.save(aB, String(this.data[aB].value));
        bi.pz.save(aB, String(this.data[aB].dp), true);
      }
    }
  };
  this.uM = function (e2) {
    return Number(this.data[e2].value);
  };
  this.uN = function (e2) {
    return String(this.data[e2].value);
  };
  function uH(aB, type, uO, dp) {
    bi.eE.data.push({
      e2: aB,
      type: type || 0,
      value: uO || 0,
      uO: uO || 0,
      dp: dp || 0,
    });
  }
  function uI(aB, type, uO, dp) {
    bi.eE.data.push({
      e2: aB,
      type: type,
      value: uO || "",
      uO: uO || "",
      dp: dp || 0,
    });
  }
  function uJ(mV) {
    var aB;
    for (aB = bi.eE.data.length; aB < mV; aB++) {
      bi.eE.data.push(null);
    }
  }
}
function uC() {
  this.uP = function (e2, dp) {
    return Number(this.uQ(e2, dp));
  };
  this.uQ = function (e2, dp) {
    var f9 = null;
    if (a0.id === 0) {
      if (a0.uR) {
        f9 = a0.uR.getItem((dp ? "v" : "d") + e2);
      }
    } else if (a0.id === 1) {
      f9 = a0.uS.loadString((dp ? 1000 : 2000) + e2);
    } else if (a0.id === 2) {
      f9 = a0.uT[(dp ? "v" : "d") + e2];
    }
    if (!f9 || f9.length === 0) {
      return null;
    }
    return f9;
  };
  this.uU = function (eh, uV) {
    var aB;
    var g = [];
    var uW = uV ? "e" : "l";
    if (a0.id === 0) {
      if (a0.uR) {
        for (aB = 0; aB < eh; aB++) {
          g.push(a0.uR.getItem(uW + aB));
        }
      }
    } else if (a0.id === 1) {
      var uX = uV ? 5000 : 3000;
      for (aB = 0; aB < eh; aB++) {
        g.push(a0.uS.loadString(uX + aB));
      }
    } else if (a0.id === 2) {
      for (aB = 0; aB < eh; aB++) {
        g.push(a0.uT[uW + aB]);
      }
    }
    return g;
  };
  this.save = function (e2, value, dp) {
    var uY = (dp ? "v" : "d") + e2;
    if (a0.id === 0) {
      if (a0.uR && bi.eE.data[140].value) {
        try {
          a0.uR.setItem(uY, value);
        } catch (e) {
          console.log(e);
        }
      }
      return;
    }
    if (a0.id === 1) {
      a0.uS.saveString((dp ? 1000 : 2000) + e2, value);
      return;
    }
    if (a0.id === 2) {
      a0.uT[uY] = value;
      a0.uZ.postMessage(uY + " " + value);
    }
  };
  this.ua = function (g, uV) {
    var aB;
    var eh = g.length;
    var uW = uV ? "e" : "l";
    if (a0.id === 0) {
      if (a0.uR && bi.eE.data[140].value) {
        try {
          for (aB = 0; aB < eh; aB++) {
            a0.uR.setItem(uW + aB, g[aB]);
          }
        } catch (e) {
          console.log(e);
        }
      }
    } else if (a0.id === 1) {
      var uX = uV ? 5000 : 3000;
      for (aB = 0; aB < eh; aB++) {
        a0.uS.saveString(uX + aB, g[aB]);
      }
    } else if (a0.id === 2) {
      for (aB = 0; aB < eh; aB++) {
        a0.uT[uW + aB] = g[aB];
        a0.uZ.postMessage(uW + aB + " " + g[aB]);
      }
    }
  };
}
function uG() {
  this.dX = function () {
    ub();
    uc();
  };
  function ub() {
    var data = bi.eE.data;
    if (data[2].dp === 0 && (h.j > h.i || a0.id !== 0)) {
      data[2].value = data[2].uO = 1;
    }
    if (data[100].dp === 0) {
      data[100].value = data[100].uO =
        (a0.id === 0 ? S[54] : a0.id === 1 ? "Android User " : "iOS User ") + Math.floor(1000 * Math.random());
    }
  }
  function uc() {
    var aB, f9;
    var data = bi.eE.data;
    var eh = data.length;
    for (aB = 0; aB < eh; aB++) {
      if (data[aB] && data[aB].dp === bi.pz.uP(aB, true)) {
        f9 = bi.pz.uQ(aB);
        data[aB].value = f9 === null ? data[aB].uO : data[aB].type === 2 ? f9 : Number(f9);
      }
    }
  }
}
function uF() {
  this.ud = function () {
    if (!bi.eE.data[110].value.length) {
      return;
    }
    bi.eE.data[106].value = bi.eE.data[110];
    bi.rB.rC(110, "");
    this.ue();
  };
  this.ue = function () {
    var aB;
    var g = bi.eE.data[116].value.split(";");
    if (g.length % 2 === 1) {
      g.pop();
    }
    g.unshift(bi.eE.data[106].value);
    g.unshift(bi.eE.data[105].value);
    for (aB = 2; aB < g.length; aB += 2) {
      if (g[aB] === g[0]) {
        g.splice(aB, 2);
        break;
      }
    }
    var uf = [];
    for (aB = 0; aB < g.length; aB += 2) {
      uf.push(g[aB]);
    }
    ug(g);
    bi.eE.data[117].value = 0;
    bi.eE.data[117].ta = uf;
  };
  this.uh = function (e2) {
    bi.eE.data[117].ta.splice(e2, 1);
    bi.eE.data[117].value = Math.min(e2, bi.eE.data[117].ta.length - 1);
    var g = bi.eE.data[116].value.split(";");
    g.splice(2 * e2, 2);
    ug(g);
  };
  this.ui = function (e2) {
    var g = bi.eE.data[116].value.split(";");
    return {
      rw: g[2 * e2],
      password: g[2 * e2 + 1],
    };
  };
  function ug(g) {
    if (g.length === 0) {
      bi.rB.rC(116, "");
      return;
    }
    var uj = g[0];
    for (var aB = 1; aB < g.length; aB++) {
      uj += ";" + g[aB];
    }
    bi.rB.rC(116, uj);
  }
  this.uk = function () {
    var f9 = bK.pF(bi.eE.data[121].value, -1, 262143);
    if (f9 === -1) {
      f9 = ~~(Math.random() * 262144);
    }
    return f9;
  };
}
function uE() {
  this.rC = function (e2, value) {
    if (bi.eE.data[e2].value === value) {
      return;
    }
    bi.eE.uK(e2, value);
    if (e2 === 0) {
      t.x();
      b6.dX();
      t.u(2);
      return;
    }
    if (e2 === 1) {
      h.di(1);
      return;
    }
    if (e2 === 2) {
      h.di(0);
      return;
    }
    if (e2 === 5) {
      b9.ph.ul();
      h.di(0);
      return;
    }
  };
  this.um = function () {
    var aB;
    var data = bi.eE.data;
    for (aB = 0; aB < 100; aB++) {
      if (data[aB]) {
        bi.eE.uK(aB, data[aB].uO);
      }
    }
    b9.ph.ul();
    h.di(1);
    b6.dX();
  };
  this.un = function () {
    var data = bi.eE.data;
    for (var aB = 0; aB < data.length; aB++) {
      if (data[aB]) {
        bi.eE.rC(aB, data[aB].uO);
      }
    }
  };
  this.uo = function () {
    var aB;
    var f1 = bi.eE;
    for (aB = 128; aB < 135; aB++) {
      f1.uK(aB, f1.data[aB].uO);
    }
  };
  this.up = function (data) {
    bi.rB.rC(109, data.rx);
    bi.rB.rC(107, data.uq);
    bi.rB.rC(108, data.ur);
    bi.rB.rC(112, data.us);
    bi.rB.rC(111, data.ut);
    bi.rB.rC(113, data.uu);
    bi.rB.rC(135, data.uv);
    bi.rB.rC(136, data.uw);
    bi.rB.rC(137, data.ux);
    bi.rB.rC(138, data.uy);
    bi.rB.rC(139, data.uz);
    bi.rB.rC(141, data.v0);
    bi.rB.rC(142, data.v1);
    bi.rB.rC(143, data.v2);
    bi.rB.rC(144, data.v3);
  };
}
function c1() {
  this.s1 = new v4();
  this.v5 = new v6();
  this.v7 = new v8();
  this.dX = function () {
    this.s1.dX();
  };
}
function v6() {
  this.v9 = function (size) {
    var vA = bG;
    var g = [];
    for (var aB = 0; aB < size; aB++) {
      g.push(String.fromCharCode(vA.oj(16)));
    }
    return g.join("");
  };
  this.vB = function (pO) {
    pO = pO.trim();
    if (pO.length > 20) {
      return pO.substring(0, 20);
    }
    return pO;
  };
}
function v4() {
  var vC = new Uint8Array(78);
  this.dX = function () {
    var aB;
    vC[50] = 37;
    for (aB = 0; aB < 10; aB++) {
      vC[aB + 3] = aB + 1;
    }
    for (aB = 0; aB < 26; aB++) {
      vC[aB + 20] = aB + 11;
      vC[aB + 52] = aB + 38;
    }
  };
  this.vD = function (pO) {
    return pO.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-");
  };
  this.vE = function (pO, size) {
    pO = this.vD(pO);
    if (pO.length > size) {
      return pO.substring(0, size);
    }
    while (pO.length < size) {
      pO = "-" + pO;
    }
    return pO;
  };
  this.vF = function (pO) {
    var vG = vC;
    var eh = pO.length;
    var g = new Uint8Array(eh);
    for (var aB = 0; aB < eh; aB++) {
      g[aB] = vG[pO.charCodeAt(aB) - 45];
    }
    return g;
  };
  this.vH = function (vI) {
    bC.a7(6 * vI.length);
    this.vJ(vI);
    bG.dX(bC.aC);
  };
  this.vJ = function (vI) {
    var eh = vI.length;
    var i = bC;
    for (var aB = 0; aB < eh; aB++) {
      i.a8(6, vI[aB]);
    }
  };
  this.vK = function (pO) {
    this.vJ(this.vF(pO));
  };
  this.vL = function (pO, size) {
    this.vJ(this.vF(this.vE(pO, size)));
  };
  this.vM = function (pO, size) {
    var g = this.vF(this.vE(pO, size));
    var f9 = 0;
    var mP = 1;
    for (var aB = g.length - 1; aB >= 0; aB--) {
      f9 += mP * g[aB];
      mP *= 64;
    }
    return f9;
  };
}
function vN() {
  var i, j;
  var vO;
  this.vP = function (pO) {
    var aB, vQ, eh, ke, gE, vR, vS, vT;
    var vA = bG;
    bF.s1.vH(bF.s1.vF(pO));
    bR.vU.vV[bR.eN].i = bR.es = i = vA.oj(12);
    bR.vU.vV[bR.eN].j = bR.et = j = vA.oj(12);
    vO = [-i, -1, i, 1];
    vW();
    eh = vA.oj(12);
    vQ = vA.oj(5);
    vR = vX(i * j - 1);
    for (aB = 0; aB < eh; aB++) {
      ke = vA.oj(vQ);
      gE = vA.oj(vR);
      vS = vA.oj(1) === 1;
      vT = vA.oj(1) === 1;
      vY(ke, gE, vS, vT);
    }
    vZ();
    bR.va.putImageData(bR.vb, 0, 0);
    bR.vc = true;
    bR.vd.dX();
    be.df = true;
  };
  function vW() {
    bR.ve = document.createElement(S[4]);
    bR.ve.width = bR.es;
    bR.ve.height = bR.et;
    bR.va = bR.ve.getContext("2d", {
      alpha: false,
    });
    bR.vb = bR.vf = null;
    bR.vb = bR.va.getImageData(0, 0, bR.es, bR.et);
    bR.vf = bR.vb.data;
    b9.pq.vg(bR.vf);
  }
  function vY(ke, gE, vS, vT) {
    var aB, ek;
    var vA = bG;
    var vh = bR.vf;
    var vi = gE;
    var vj = gE;
    var vk = 0;
    var vl = 1 + vS;
    var vm = 2 - vS;
    vh[gE << 2] = vl;
    for (aB = 0; aB < ke; aB++) {
      ek = vA.oj(2);
      gE = vn(gE, ek);
      if (vh[gE << 2] === vl) {
        if (vk % 2 === 1) {
          vo(vj, vk + 2 * vT + 3, vm, vT, vh);
        }
      } else {
        vh[gE << 2] = vl;
      }
      vo(gE, ek, vm, vT, vh);
      vo(vj, ek, vm, vT, vh);
      vj = gE;
      vk = ek;
    }
    if (vn(gE, 0) === vi) {
      vo(gE, 0, vm, vT, vh);
      vo(vi, 0, vm, vT, vh);
    } else if (vn(gE, 1) === vi) {
      vo(gE, 0, vm, vT, vh);
      vo(vi, 2, vm, vT, vh);
    }
    if (ke === 0) {
      vo(vi, 0, vm, vT, vh);
      vo(vi, 2, vm, vT, vh);
    }
  }
  function vo(h6, ek, vm, vT, vh) {
    var vp = vn(h6, (ek + 1 + 2 * vT) & 3);
    if (!vq(h6, vp) && vh[vp << 2] === 0) {
      vh[vp << 2] = vm;
    }
  }
  function vq(h6, vp) {
    return Math.abs(vr(h6) - vr(vp)) > 1 || Math.abs(vs(h6) - vs(vp)) > 1;
  }
  function vr(gE) {
    return gE % i;
  }
  function vs(gE) {
    return Math.floor((gE + 0.5) / i) % j;
  }
  function vn(gE, ek) {
    return gE + vO[ek];
  }
  function vZ() {
    var eo, eq, hU, vt, vu, vv;
    var vh = bR.vf;
    var vw = true;
    var vx = bR.vU.vV[bR.eN].vx;
    var vy = bR.vU.vV[bR.eN].vy;
    for (eq = 0; eq < j; eq++) {
      vt = true;
      vu = vw;
      vv = 0;
      for (eo = 0; eo < i; eo++) {
        hU = 4 * eq * i + 4 * eo;
        if (eo >= vv && vh[hU] > 0) {
          vu = vh[hU] === 2;
          if (vt) {
            vt = false;
            if (vu !== vw) {
              vw = vu;
              vv = eo + 1;
              eo = -1;
              continue;
            }
          }
        }
        if (vu) {
          vh[hU] = vy[0];
          vh[hU + 1] = vy[1];
          vh[hU + 2] = vy[2];
          vh[hU + 3] = 255;
        } else {
          vh[hU] = vx[0];
          vh[hU + 1] = vx[1];
          vh[hU + 2] = vx[2];
          vh[hU + 3] = 255;
        }
      }
    }
  }
}
function v8() {
  this.vP = function (vz) {
    var vA = bG;
    var size = vA.oj(vz);
    var w0 = 7 + 9 * vA.oj(1);
    var g = [];
    for (var aB = 0; aB < size; aB++) {
      g.push(String.fromCharCode(vA.oj(w0)));
    }
    return g.join("");
  };
}
function c6() {
  var rT, rU, w1, w2, w3, w4, w5, w6, w7, w8;
  this.dX = function () {
    w8 = new Array(12);
    w6 = 6;
    w3 = 10;
    w1 = bK.dn(bR.es, w3);
    w2 = bK.dn(bR.et, w3);
    w4 = bK.dn(bR.es - w3 * w1, 2);
    w5 = bK.dn(bR.et - w3 * w2, 2);
    if (aD.h2) {
      for (var aB = 0; aB < aD.jw; aB++) {
        w7 = aB;
        w9();
        ag.lm[w7] = 1;
      }
    }
    if (aD.data.spawningType === 0) {
      wA();
    } else if (aD.data.spawningType === 1) {
      wA();
      wB();
    } else {
      wC();
    }
    bc.li[7] = ag.gU[aD.eR];
  };
  function wA() {
    var wD = aD.wD;
    for (w7 = wD; w7 < aD.ee; w7++) {
      w9();
    }
    for (w7 = aD.h2 ? aD.jw : 0; w7 < wD; w7++) {
      if (wE()) {
        var wF = w4 + rT * w3 + bK.dn(w3, 2);
        var wG = w5 + rU * w3 + bK.dn(w3, 2);
        wH(wF, wG);
      } else {
        aD.wI = w7;
        for (var f1 = w7; f1 < wD; f1++) {
          w7 = f1;
          w9();
        }
        return;
      }
    }
  }
  function wB() {
    var wJ = aD.wK;
    if (!aD.wL) {
      wJ++;
    }
    if (wJ < 3) {
      return;
    }
    var data = aD.data;
    var jD = (aD.h2 ? aD.jw : 0) + data.teamPlayerCount[0];
    var mV = aD.wI;
    var wM = new Uint32Array(wJ);
    var wN = new Uint32Array(wJ);
    var wO = new Uint16Array(wJ);
    var wP = new Uint16Array(wJ);
    var ef = bf.ef;
    var iV = ag.iV;
    var iX = ag.iX;
    var iW = ag.iW;
    var iY = ag.iY;
    var fL = bN.fL;
    var fM = bN.fM;
    for (var aB = jD; aB < mV; aB++) {
      fL[aB] = (iV[aB] + iW[aB]) >> 1;
      fM[aB] = (iX[aB] + iY[aB]) >> 1;
    }
    for (aB = jD; aB < mV; aB++) {
      var id = ef[aB];
      wM[id] += fL[aB];
      wN[id] += fM[aB];
    }
    var kI = bf.kI;
    for (aB = 1; aB < wJ; aB++) {
      var g9 = Math.max(data.teamPlayerCount[kI[aB]], 1);
      wO[aB] = bK.dn(wM[aB], g9);
      wP[aB] = bK.dn(wN[aB], g9);
    }
    var wQ = bf.wQ;
    var wR = bf.wR;
    var wS = bf.wS;
    var fK = bN.fK;
    for (aB = 0; aB < 512; aB++) {
      fK[aB] = aB;
    }
    for (var e1 = 0; e1 < 2 + (wJ >= 4); e1++) {
      for (aB = jD; aB < mV; aB++) {
        var h6 = aB;
        var wT = fK[h6];
        var wU = 1;
        var ex = bK.wV(fL[wT] - wO[1], fM[wT] - wP[1]);
        for (var f0 = 2; f0 < wJ; f0++) {
          var wW = bK.wV(fL[wT] - wO[f0], fM[wT] - wP[f0]);
          if (wW < ex) {
            ex = wW;
            wU = f0;
          }
        }
        var wX = ef[h6];
        if (wU === wX) {
          continue;
        }
        if (e1 === 2 && wJ >= 4) {
          var wY = Math.max((wU + 1) % wJ, 1);
          var wZ = bK.wV(fL[wT] - wO[wY], fM[wT] - wP[wY]);
          for (f0 = 1; f0 < wJ; f0++) {
            wW = bK.wV(fL[wT] - wO[f0], fM[wT] - wP[f0]);
            if (wW > ex && wW < wZ) {
              wZ = wW;
              wY = f0;
            }
          }
          if (wY !== wX && bK.wV(wO[wX] - wO[wY], wP[wX] - wP[wY]) < bK.wV(wO[wX] - wO[wU], wP[wX] - wP[wU])) {
            wU = wY;
          }
        }
        var wa = kI[wU];
        var wb = wR[wa] + (aD.h2 ? 0 : wS[wa]);
        var vp = wQ[wb];
        var wc = fK[vp];
        var wd = wR[wa + 1];
        ex = bK.wV(fL[wc] - wO[wX], fM[wc] - wP[wX]);
        for (var f2 = wb + 1; f2 < wd; f2++) {
          var we = wQ[f2];
          var wf = fK[we];
          wW = bK.wV(fL[wf] - wO[wX], fM[wf] - wP[wX]);
          if (wW < ex) {
            ex = wW;
            vp = we;
          }
        }
        if (vp < jD || vp >= mV) {
          continue;
        }
        wc = fK[vp];
        wM[wX] += fL[wc] - fL[wT];
        wN[wX] += fM[wc] - fM[wT];
        wM[wU] += fL[wT] - fL[wc];
        wN[wU] += fM[wT] - fM[wc];
        g9 = data.teamPlayerCount[kI[wX]];
        wO[wX] = bK.dn(wM[wX], g9);
        wP[wX] = bK.dn(wN[wX], g9);
        g9 = data.teamPlayerCount[wa];
        wO[wU] = bK.dn(wM[wU], g9);
        wP[wU] = bK.dn(wN[wU], g9);
        fK[h6] = wc;
        fK[vp] = wT;
      }
    }
    wg();
  }
  function wg() {
    var fK = bN.fK;
    var iV = ag.iV;
    var iX = ag.iX;
    var iW = ag.iW;
    var iY = ag.iY;
    var gU = ag.gU;
    var wh = ag.wh;
    var gM = ag.gM;
    var gN = ag.gN;
    var f7 = ag.f7;
    for (var aB = 0; aB < 512; aB++) {
      var wi = fK[aB];
      if (wi === aB) {
        continue;
      }
      wj(iV, aB, wi);
      wj(iX, aB, wi);
      wj(iW, aB, wi);
      wj(iY, aB, wi);
      wj(gU, aB, wi);
      wj(wh, aB, wi);
      wj(gM, aB, wi);
      wj(gN, aB, wi);
      wj(f7, aB, wi);
      wk(aB);
      wk(wi);
      fK[aB] = aB;
      var j = wi;
      var gF = fK[j];
      while (gF !== aB) {
        j = gF;
        gF = fK[gF];
      }
      fK[j] = wi;
    }
  }
  function wk(player) {
    var iV = ag.iV;
    var iX = ag.iX;
    var iW = ag.iW;
    var iY = ag.iY;
    for (var eq = iX[player]; eq <= iY[player]; eq++) {
      for (var eo = iV[player]; eo <= iW[player]; eo++) {
        var eL = ac.wl(eo, eq);
        if (!ac.gG(eL)) {
          continue;
        }
        if (ac.j9(eL)) {
          ac.gB(eL, player);
        } else {
          ac.wm(eL, player);
        }
      }
    }
  }
  function wj(g, sI, sJ) {
    var dm = g[sI];
    g[sI] = g[sJ];
    g[sJ] = dm;
  }
  function wC() {
    var wD = aD.wD;
    for (w7 = wD; w7 < aD.ee; w7++) {
      w9();
    }
    for (w7 = aD.h2 ? aD.jw : 0; w7 < wD; w7++) {
      if (wn()) {
        continue;
      }
      if (wE()) {
        var wF = w4 + rT * w3 + bK.dn(w3, 2);
        var wG = w5 + rU * w3 + bK.dn(w3, 2);
        wH(wF, wG);
        continue;
      }
      aD.wI = w7;
      for (var f1 = w7; f1 < wD; f1++) {
        w7 = f1;
        w9();
      }
      return;
    }
  }
  function wE() {
    return wo() || wp();
  }
  function wn() {
    var spawningData = aD.data.spawningData;
    var wF = spawningData[2 * w7] + 1;
    var wG = spawningData[2 * w7 + 1] + 1;
    if (wF > 3 && wF < bR.es - 5 && wG > 3 && wG < bR.et - 5) {
      if (ac.ec(ac.wl(wF, wG)) && wq(wF + 3, wG + 3)) {
        wH(wF + 1, wG + 1);
        return true;
      }
    }
    return false;
  }
  function wo() {
    var aB;
    for (aB = 0; aB < 8; aB++) {
      rT = bK.dn(w1 * ax.random(), ax.value(100));
      rU = bK.dn(w2 * ax.random(), ax.value(100));
      if (wr()) {
        return true;
      }
    }
    return false;
  }
  function wp() {
    var i2, i5, f0, wG, f1, wF;
    i2 = bK.dn(w1 * ax.random(), ax.value(100));
    i5 = bK.dn(w2 * ax.random(), ax.value(100));
    for (f0 = 40; f0 >= 1; f0--) {
      for (wG = w2 - f0; wG >= 0; wG -= 40) {
        rU = (wG + i5) % w2;
        for (f1 = 40; f1 >= 1; f1--) {
          for (wF = w1 - f1; wF >= 0; wF -= 40) {
            rT = (wF + i2) % w1;
            if (wr()) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  function wr() {
    var gE, ws, wt;
    var gap = bK.dn(w3 - w6, 2);
    var wu = w5 + rU * w3 + gap;
    var wv = w4 + rT * w3 + gap;
    for (ws = wu + w6 - 1; ws >= wu; ws--) {
      for (wt = wv + w6 - 1; wt >= wv; wt--) {
        gE = ac.wl(wt, ws);
        if (!ac.ec(gE) || ac.j9(gE)) {
          return false;
        }
      }
    }
    return true;
  }
  function wH(wF, wG) {
    w9();
    ww(wF - 2, wG - 2);
  }
  function w9() {
    ag.lm[w7] = 0;
    ag.gU[w7] = ag.wh[w7] = 0;
    ag.g8[w7] = [];
    ag.gM[w7] = [];
    ag.gN[w7] = [];
    ag.f7[w7] = [];
    ag.iV[w7] = ag.iX[w7] = ag.iW[w7] = ag.iY[w7] = 0;
  }
  function ww(wF, wG) {
    ag.lm[w7] = 1;
    ag.iV[w7] = wF + 10;
    ag.iX[w7] = wG + 10;
    ag.iY[w7] = ag.iW[w7] = 0;
    var gE, aB, wx, wy;
    for (wx = wF; wx < wF + 4; wx++) {
      for (wy = wG; wy < wG + 4; wy++) {
        if ((wx > wF && wx < wF + 3) || (wy > wG && wy < wG + 3)) {
          gE = ac.wl(wx, wy);
          if (ac.ec(gE)) {
            ag.iV[w7] = Math.min(wx, ag.iV[w7]);
            ag.iW[w7] = Math.max(wx, ag.iW[w7]);
            ag.iX[w7] = Math.min(wy, ag.iX[w7]);
            ag.iY[w7] = Math.max(wy, ag.iY[w7]);
            w8[ag.gU[w7]] = gE;
            ag.gU[w7]++;
            ac.wm(gE, w7);
          }
        }
      }
    }
    ag.wh[w7] = ag.gU[w7];
    for (aB = ag.gU[w7] - 1; aB >= 0; aB--) {
      if (ac.wz(w8[aB], w7)) {
        ac.gB(w8[aB], w7);
        ag.gM[w7].push(w8[aB]);
      } else if (ac.x0(w8[aB])) {
        ac.gB(w8[aB], w7);
        ag.gN[w7].push(w8[aB]);
      } else if (ac.x1(w8[aB])) {
        ac.gB(w8[aB], w7);
        ag.f7[w7].push(w8[aB]);
      }
    }
  }
  this.x2 = function (j7, x3, x4) {
    var aB, wF, wG;
    w7 = j7;
    for (aB = 0; aB < 20; aB++) {
      for (wF = x3 + aB; wF >= x3 - aB; wF--) {
        for (wG = x4 + aB; wG >= x4 - aB; wG--) {
          if (wF === x3 + aB || wF === x3 - aB || wG === x4 + aB || wG === x4 - aB) {
            if (wF > 3 && wF < bR.es - 5 && wG > 3 && wG < bR.et - 5) {
              if (ac.ec(ac.wl(wF, wG)) && wq(wF + 3, wG + 3)) {
                if (ag.gU[w7] > 0) {
                  x5();
                  w9();
                }
                ww(wF - 1, wG - 1);
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  };
  function x5() {
    var gE, rT, rU;
    for (rT = ag.iW[w7]; rT >= ag.iV[w7]; rT--) {
      for (rU = ag.iY[w7]; rU >= ag.iX[w7]; rU--) {
        gE = (rU * bR.es + rT) * 4;
        if (ac.x6(w7, gE)) {
          ac.x7(gE);
          ag.gU[w7]--;
        }
      }
    }
  }
  this.x8 = function (j7) {
    w7 = j7;
    if (wE()) {
      var wF = w4 + rT * w3 + bK.dn(w3, 2);
      var wG = w5 + rU * w3 + bK.dn(w3, 2);
      wH(wF, wG);
    } else {
      w9();
    }
  };
  function wq(wF, wG) {
    var gE, wt, ws;
    for (ws = wG; ws > wG - 6; ws--) {
      for (wt = wF; wt > wF - 6; wt--) {
        gE = ac.wl(wt, ws);
        if (ac.j9(gE)) {
          return false;
        }
      }
    }
    return true;
  }
}
function x9() {
  ar.xA();
  tr.setTransform(iI, 0, 0, iI, 0, 0);
  tr.imageSmoothingEnabled = iI < 3;
  tr.drawImage(bR.ve, aS.xB(), aS.xC());
  bO.xD.tq();
  tr.drawImage(xE, aS.xB(), aS.xC());
  ar.tq();
  bM.tq();
  af.tq();
  if (aD.mG) {
    bg.tq();
    bB.tq();
    t.tq();
    return;
  }
  aN.tq();
  aV.tq();
  aR.tq();
  bB.tq();
  av.tq();
  aW.tq();
  aS.tq();
  aQ.tq();
  bg.tq();
  aU.tq();
  aP.tq();
  aM.tq();
  aL.tq();
  aX.tq();
  bd.tq();
  au.tq();
  t.tq();
}
function xF(xG, i, j) {
  xG.clearRect(0, 0, i, j);
  xG.fillStyle = bA.mk;
  xG.fillRect(0, 0, i, j);
}
function xH(xG, i, j, xI) {
  xG.fillStyle = bA.mn;
  xG.fillRect(0, 0, i, xI);
  xG.fillRect(0, 0, xI, j);
  xG.fillRect(i - xI, 0, xI, j);
  xG.fillRect(0, j - xI, i, xI);
}
function xJ(xG, eo, eq, hY, xI, gE, xK) {
  xG.fillStyle = bA.mn;
  var s5 = Math.floor(hY * gE);
  s5 += (s5 - xI) % 2;
  var s6 = Math.floor((s5 - xI) / 2);
  var xL = Math.floor((hY - s5) / 2);
  xG.fillRect(eo + xL, eq + xL + s6, s5, xI);
  if (xK) {
    xG.fillRect(eo + xL + s6, eq + xL, xI, s5);
  }
}
function xM() {
  this.dX = function () {
    if (aD.kD !== 8) {
      return;
    }
    aN.xN();
  };
  this.xO = function (xP) {
    var elo = aD.data.elo;
    var hq = (elo[xP] - elo[1 - xP]) / 10;
    var xQ = 8 / (1 + Math.pow(2, hq / 32));
    xQ = Math.floor(10 * xQ + 0.5);
    var xR = elo[xP] + (1 + aD.xS) * xQ + 1;
    var xT = this.xU(xR);
    var xV = this.xU(elo[1 - xP] - xQ);
    if (xP === 0) {
      aN.xW(xT, xV, [S[75], S[73]]);
    } else {
      aN.xW(xV, xT, [S[73], S[75]]);
    }
    if (ag.xX[xP] < 100) {
      return;
    }
    var xY = (((1 + aD.xS) * (xR >> 1)) / 100).toFixed(2);
    if (xP === aD.eR) {
      aN.xZ(640, L(24, [xY]), 40, 0, bA.mn, bA.mk, -1, false);
    } else {
      aN.xZ(640, L(25, [ag.xa[xP], xY]), 40, 0, bA.mn, bA.mk, -1, false);
    }
  };
  this.xU = function (elo) {
    elo = bK.pF(elo, 0, 16000);
    if (elo === 16000) {
      return "Unknown";
    }
    return (elo / 10).toFixed(1);
  };
}
function cb() {
  this.qz = new xb();
  this.vh = new xc();
}
function xc() {
  this.hO = false;
  var mD, mE, gap, hY, xd;
  var xe = 10;
  var xf = 1;
  this.xg = [];
  this.xh = 100;
  var xi = 0;
  var xj = new Array(9);
  var xk = [];
  var xl = [];
  var xm = 0;
  var xn = 0;
  var xo = 0;
  var xp = 0;
  this.dX = function () {
    var aB;
    var xq = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6];
    for (aB = 0; aB < xq.length; aB++) {
      var color = xq[aB] === 6 ? bA.nD : bA.ml;
      this.xg.push(b9.canvas.xr(ab.get(3), xq[aB], color));
    }
    for (aB = 0; aB < aj.qz.xs; aB++) {
      xl.push(aj.qz.xt - aj.qz.xs + aB);
    }
    for (aB = 0; aB < aj.qz.xu; aB++) {
      xl.push(aj.qz.xv + aB);
    }
    var xw = aj.qz.xx(bJ.xw);
    for (aB = 0; aB < xw.length; aB++) {
      xl.push(xw[aB]);
    }
    xy();
  };
  function xy() {
    var aB;
    var pO = bi.eE.data[120].value;
    var g = pO.split(",");
    if (g.length !== 18) {
      for (aB = 0; aB < 9; aB++) {
        xj[aB] = {
          oK: 1024 - 9 + aB,
          k1: 0,
        };
      }
      return;
    }
    for (aB = 0; aB < 9; aB++) {
      var f9 = parseInt(g[aB]);
      f9 = f9 >= 0 && f9 < aj.qz.xt ? f9 : 0;
      var f2 = parseInt(g[aB + 9]);
      f2 = f2 >= 0 && f2 < 1000 ? f2 : 0;
      xj[aB] = {
        oK: f9,
        k1: f2,
      };
    }
  }
  function xz() {
    var aB;
    xk = [];
    if (xi === 0) {
      for (aB = 0; aB < 9; aB++) {
        xk.push(xj[aB].oK);
      }
    } else {
      var f1 = 49 * xi;
      var f0 = f1 - 49;
      if (f0 >= xl.length) {
        xi = 1;
        f0 = 0;
        f1 = 49;
      }
      f1 = Math.min(f1, xl.length);
      f0 = f1 - 49;
      for (aB = f0; aB < f1; aB++) {
        xk.push(xl[aB]);
      }
    }
    xk.push(1024);
  }
  function y0(oK) {
    var aB;
    for (aB = 0; aB < 9; aB++) {
      xj[aB].k1 = Math.floor(xj[aB].k1 * 0.99);
    }
    for (aB = 0; aB < 9; aB++) {
      if (oK === xj[aB].oK) {
        xj[aB].k1 = Math.min(xj[aB].k1 + 30, 999);
        y1();
        return;
      }
    }
    xj.splice(5, 0, {
      oK: oK,
      k1: Math.max(xj[4].k1, 30),
    });
    xj.pop();
    y1();
  }
  function y1() {
    var aB;
    xj.sort(function (f0, f1) {
      return f1.k1 - f0.k1;
    });
    var pO = "" + xj[0].oK;
    for (aB = 1; aB < 9; aB++) {
      pO += "," + xj[aB].oK;
    }
    for (aB = 0; aB < 9; aB++) {
      pO += "," + xj[aB].k1;
    }
    bi.eE.uK(120, pO);
  }
  this.show = function (kz, l0, y2) {
    xm = kz;
    xn = l0;
    xi = y2 || 0;
    this.hO = true;
    xz();
    var g9 = xk.length;
    hY = Math.floor((a0.a1.r7() ? 0.075 : 0.0468) * h.pj);
    gap = Math.floor(hY / 3);
    xd = hY + gap;
    xo = xe * xd;
    if (xo > h.i) {
      xo = h.i;
      xd = xo / xe;
      hY = (3 * xd) / 4;
      gap = xd - hY;
    }
    xf = bK.dn(g9, xe) + !!(g9 % xe);
    xp = xf * xd;
    if (xp > h.j) {
      xp = h.j;
      xd = xp / xf;
      hY = (3 * xd) / 4;
      gap = xd - hY;
    }
    var y3 = 0.5 * gap;
    mD = Math.min(Math.max(kz - 0.5 * xo + y3, y3), h.i - xo + y3);
    mE = Math.min(Math.max(l0 - 0.5 * xp + y3, y3), h.j - xp + y3);
  };
  this.gu = function (kz, l0, player) {
    if (!this.hO) {
      return false;
    }
    if (this.y4(kz, l0)) {
      var e2 = bK.pF(bK.dn(kz - mD + 0.5 * gap, xd), 0, xe - 1);
      e2 += xe * bK.pF(bK.dn(l0 - mE + 0.5 * gap, xd), 0, xe - 1);
      if (e2 >= xk.length) {
        aL.r0();
        return true;
      }
      var oK = xk[e2];
      if (oK === 1024) {
        this.show(xm, xn, xi + 1);
        return true;
      }
      y0(oK);
      if (player === aD.eR) {
        b7.h3.oJ(oK);
      } else {
        b7.g2.oX(oK, player);
      }
    }
    aL.r0();
    return true;
  };
  this.y4 = function (kz, l0) {
    return !(kz < mD - 0.5 * gap || l0 < mE - 0.5 * gap || kz >= mD + xo - 0.5 * gap || l0 >= mE + xp - 0.5 * gap);
  };
  this.tq = function () {
    tr.fillStyle = bA.mk;
    tr.fillRect(mD - 0.5 * gap, mE - 0.5 * gap, xo, xp);
    var hU = 0.5 * bb.y5;
    tr.lineWidth = bb.y5;
    tr.strokeStyle = tr.fillStyle = bA.mn;
    tr.strokeRect(mD - 0.5 * gap + hU, mE - 0.5 * gap + hU, xo - 2 * hU, xp - 2 * hU);
    tr.imageSmoothingEnabled = true;
    var eh = xk.length;
    for (var aB = 0; aB < eh; aB++) {
      this.y6(xk[aB], tr, mD + (aB % xe) * xd, mE + bK.dn(aB, xe) * xd, hY);
    }
    tr.imageSmoothingEnabled = false;
  };
  this.y6 = function (oK, he, eo, eq, hY) {
    if (oK >= 1024 - aj.qz.xs) {
      var eL = hY / this.xh;
      he.setTransform(eL, 0, 0, eL, eo, eq);
      he.drawImage(this.xg[oK - 1024 + aj.qz.xs], 0, 0);
      he.setTransform(1, 0, 0, 1, 0, 0);
      return;
    }
    b9.ph.textAlign(he, 1);
    b9.ph.textBaseline(he, 1);
    he.font = b9.ph.rY(0, 0.89 * hY);
    he.fillText(aj.qz.y7(oK), eo + 0.5 * hY, eq + (0.56 + (0.35 - b9.ph.y8)) * hY);
  };
}
function xb() {
  this.emojis = [
    "🥰",
    "😎",
    "😘",
    "😜",
    "🤗",
    "🥳",
    "😇",
    "😊",
    "🥱",
    "🙄",
    "🤔",
    "🥺",
    "😡",
    "😭",
    "😱",
    "😞",
    "💀",
    "👹",
    "👋",
    "🙏",
    "👏",
    "💪",
    "🙋‍♂️",
    "🤦‍♂️",
    "⬆️",
    "➡️",
    "⬇️",
    "⬅️",
    "👀",
    "❤️",
    "💔",
    "💥",
    "🔥",
    "🪦",
    "🥇",
    "🥈",
    "🥉",
    "🎖️",
    "🏅",
    "👑",
    "🎉",
    "💯",
    "✝️",
    "☪️",
    "🕉️",
    "☸️",
    "✡️",
    "☦️",
    "⚛️",
  ];
  this.xs = 13;
  this.xu = this.emojis.length;
  this.xv = 676;
  this.xt = 1024;
  this.y9 = this.emojis.indexOf("💀");
  this.yA = this.y9 + 1;
  this.yB = this.emojis.indexOf("🥇");
  this.yC = this.emojis.indexOf("😊");
  this.y7 = function (f9) {
    if (f9 < this.xv) {
      return String.fromCharCode(55356, 56806 + bK.dn(f9, 26), 55356, 56806 + (f9 % 26));
    }
    return this.emojis[Math.min(f9 - this.xv, this.xu - 1)];
  };
  this.xx = function (pO) {
    var eh = pO.length - 2;
    var g = [];
    for (var aB = 0; aB < eh; aB++) {
      var hm = pO.charCodeAt(aB) - 56806;
      var hn = pO.charCodeAt(aB + 2) - 56806;
      if (hm >= 0 && hm < 26 && hn >= 0 && hn < 26) {
        g.push(26 * hm + hn);
        aB += 3;
      }
    }
    return g;
  };
  this.yD = function (f9) {
    return f9 < this.xv;
  };
  this.yE = function (f9) {
    return f9 >= 1024 - this.xs;
  };
  this.yF = function (f9) {
    return f9 >= this.xv && f9 < this.xv + this.yA;
  };
}
function c0() {
  this.s1 = new yG();
  this.v5 = new yH();
  this.v7 = new yI();
  this.dX = function () {
    this.s1.dX();
  };
}
function yH() {
  this.vK = function (pO) {
    var eh = pO.length;
    var i = bC;
    for (var aB = 0; aB < eh; aB++) {
      i.a8(16, pO.charCodeAt(aB));
    }
  };
}
function yG() {
  var yJ = new Uint8Array(64);
  this.dX = function () {
    var aB;
    yJ[0] = 45;
    yJ[37] = 95;
    for (aB = 0; aB < 10; aB++) {
      yJ[aB + 1] = 48 + aB;
    }
    for (aB = 0; aB < 26; aB++) {
      yJ[aB + 11] = 65 + aB;
      yJ[aB + 38] = 97 + aB;
    }
  };
  this.s3 = function (yK) {
    var vA = bG;
    var vI = new Uint8Array(yK);
    for (var aB = 0; aB < yK; aB++) {
      vI[aB] = vA.oj(6);
    }
    return vI;
  };
  this.s2 = function (vI) {
    var eh = vI.length;
    var yL = yJ;
    var g = [];
    for (var aB = 0; aB < eh; aB++) {
      g.push(String.fromCharCode(yL[vI[aB]]));
    }
    return g.join("");
  };
  this.yM = function (value, yN) {
    var yL = yJ;
    var g = [];
    for (var aB = 0; aB < yN; aB++) {
      g.push(String.fromCharCode(yL[(value >> ((yN - 1 - aB) * 6)) & 63]));
    }
    return g.join("");
  };
}
function c8() {
  var yO;
  var yP;
  var yQ;
  function yR() {
    yO = [32, 65, 191, 913, 931];
    yP = [64, 127, 688, 930, 1155];
    yQ = new Array(yO.length + 1);
    for (var aB = 0; aB < yQ.length; aB++) {
      yQ[aB] = 0;
      for (var f0 = aB - 1; f0 >= 0; f0--) {
        yQ[aB] += yP[f0] - yO[f0];
      }
    }
  }
  yR();
  this.vB = function (pO) {
    pO = pO.trim();
    if (pO.indexOf(S[103]) === 0) {
      return false;
    }
    if (pO.indexOf("[Bot] ") === 0) {
      return false;
    }
    return yS(pO, 3, 20);
  };
  function yS(pO, yT, yU) {
    pO = pO.trim();
    var eh = pO.length;
    if (eh < yT || eh > yU) {
      return false;
    }
    var yV = 0;
    var f2;
    for (var aB = 0; aB < eh; aB++) {
      f2 = pO.charCodeAt(aB);
      yV += (f2 >= 65 && f2 <= 90) || (f2 >= 1040 && f2 <= 1071) ? 1 : 0;
      if (yW(f2) === -1) {
        return false;
      }
    }
    if (yV > 3 && yV > Math.floor(eh / 2)) {
      return false;
    }
    return true;
  }
  this.yX = function (pO) {
    pO = pO.trim();
    var eh = pO.length;
    var g = [];
    var f2;
    for (var aB = 0; aB < eh; aB++) {
      f2 = pO.charCodeAt(aB);
      var gE = yW(f2);
      g.push(yQ[gE] + f2 - yO[gE]);
    }
    return g;
  };
  this.vP = function (g) {
    var pO = "";
    var eh = g.length;
    var f2, f1;
    for (var aB = 0; aB < eh; aB++) {
      for (f1 = 1; f1 < yQ.length; f1++) {
        if (g[aB] < yQ[f1]) {
          f2 = yO[f1 - 1] + g[aB] - yQ[f1 - 1];
          pO += String.fromCharCode(f2);
          break;
        }
      }
    }
    return pO;
  };
  function yW(f2) {
    for (var aB = yO.length - 1; aB >= 0; aB--) {
      if (f2 >= yO[aB] && f2 < yP[aB]) {
        return aB;
      }
    }
    return -1;
  }
  this.yY = function (pO) {
    var g = this.yX(pO);
    var result = "";
    for (var aB = 0; aB < g.length; aB++) {
      result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "";
      result += g[aB].toString(10);
    }
    return result;
  };
  this.yZ = function (pO) {
    var g = new Array(Math.floor(pO.length / 3));
    for (var aB = 0; aB < pO.length; aB += 3) {
      g[Math.floor(aB / 3)] = parseInt(pO.substring(aB, aB + 3));
    }
    return this.vP(g);
  };
  this.ya = function (pO) {
    var aB, f9;
    var g = [pO.length];
    for (aB = 0; aB < pO.length; aB++) {
      g[aB] = pO.charCodeAt(aB) - 48;
    }
    var result = "";
    for (aB = 0; aB < pO.length; aB++) {
      if (aB === pO.length - 1 || g[aB] * 10 + g[aB + 1] > 51) {
        result += g[aB].toString();
      } else {
        f9 = g[aB] * 10 + g[aB + 1];
        result += String.fromCharCode(f9 + (f9 < 26 ? 65 : 71));
        aB++;
      }
    }
    return result;
  };
  this.yb = function (pO) {
    var result = "";
    var f2;
    for (var aB = 0; aB < pO.length; aB++) {
      f2 = pO.charCodeAt(aB);
      if (f2 >= 48 && f2 < 58) {
        result += String.fromCharCode(f2);
      } else if (f2 >= 65 && f2 < 75) {
        result += "0" + (f2 - 65).toString();
      } else if (f2 >= 75 && f2 < 91) {
        result += (f2 - 65).toString();
      } else if (f2 >= 97 && f2 < 123) {
        result += (f2 - 71).toString();
      }
    }
    return result;
  };
  this.yc = function (pO) {
    var eh = pO.length;
    var f2, aB;
    var g = [];
    for (aB = 0; aB < eh; aB++) {
      f2 = pO.charCodeAt(aB);
      if (f2 < 58) {
        g.push(pO[aB]);
        continue;
      } else if (f2 < 91) {
        f2 -= 65;
      } else {
        f2 -= 71;
      }
      g.push(String(bK.dn(f2, 10)));
      g.push(String(f2 - 10 * bK.dn(f2, 10)));
    }
    eh = g.length - 2;
    f2 = 0;
    var vI = [];
    for (aB = 0; aB < eh; aB += 3) {
      vI[f2++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
    }
    return vI;
  };
  this.yd = function () {
    var aB, e1;
    var ye = "";
    for (aB = 0; aB < 6; aB++) {
      e1 = 48 + (ax.random() % 36);
      e1 += e1 >= 58 ? 39 : 0;
      ye += String.fromCharCode(e1);
    }
    return ye;
  };
}
function yI() {
  this.yX = function (pO, vz, yf) {
    var yg = [];
    var eh = pO.length;
    var max = 0;
    for (var aB = 0; aB < eh; aB++) {
      var f9 = pO.charCodeAt(aB);
      yg.push(f9);
      max = Math.max(max, f9);
    }
    var w0 = max < 128 ? 7 : 16;
    yf.a8(vz, eh);
    yf.a8(1, +(w0 === 16));
    for (aB = 0; aB < eh; aB++) {
      yf.a8(w0, yg[aB]);
    }
  };
}
function d6() {
  this.yh = new yi();
  this.result = new yj();
  this.hA = new yk();
  this.yl = new ym();
  this.yn = new yo();
  this.yp = new yq();
  this.dX = function () {
    this.result.dX();
  };
}
function yk() {
  this.yr = function () {
    var eh = al.jx;
    var ys = al.jy;
    var yt = [];
    for (var aB = 0; aB < eh; aB++) {
      var gE = ys[aB];
      if (b9.g2.yu(gE)) {
        yt.push(gE);
      }
    }
    return yt;
  };
  this.yv = function () {
    if (bf.kI[aD.yw] === 0) {
      return this.yx();
    }
    bg.l9(aD.yw);
    var yt = [];
    var eh = bN.fC[0];
    var fK = bN.fK;
    for (var aB = 0; aB < eh; aB++) {
      var gE = fK[aB];
      if (b9.g2.yu(gE)) {
        yt.push(gE);
      }
    }
    return yt;
  };
  this.yx = function () {
    var gE = lB[0];
    if (b9.g2.yu(gE)) {
      return [gE];
    }
    return [];
  };
  this.yy = function (yt) {
    var eh = yt.length;
    var dm = 0;
    var gU = ag.gU;
    for (var aB = 0; aB < eh; aB++) {
      dm += gU[yt[aB]];
    }
    return dm;
  };
}
function yi() {
  this.yz = function () {
    if (z0()) {
      return;
    }
    aD.z1 = 2;
    z2();
  };
  this.z3 = function () {
    if (z0()) {
      return;
    }
    aD.z1 = 1;
    z2();
  };
  function z0() {
    if (aD.z4 === 2) {
      return true;
    }
    av.z5();
    aD.z4 = 2;
    aD.z6 = aD.z7;
    return false;
  }
  function z2() {
    bQ.yn.z8();
    aX.show(aD.z9 === 1, false, aD.z9 === 2);
    bQ.result.z8();
    bQ.yp.ir();
    bQ.yl.ir();
    aN.zA(true);
    aN.zB(247);
    aN.zB(956);
    aN.zB(957);
    aV.lY(true);
    aW.lY(true);
    av.lY();
    bB.zC();
    aD.gq && be.zD.zE();
    be.df = true;
    ba.zF();
    a0.a1.setState(0);
  }
}
function ym() {
  this.ir = function () {
    if (aD.z1 === 2) {
      aN.zG(0, 59);
      aH.mM(2700);
      return;
    }
    if (aD.kD < 7) {
      zH();
      return;
    }
    if (aD.kD === 8) {
      zI();
      return;
    }
    if (aD.kD === 9) {
      zJ();
      return;
    }
    zK();
  };
  function zI() {
    if (aD.z9) {
      aN.zG(aD.zL, 2);
    } else {
      aN.zG(1 - aD.eR, 3);
    }
    aD.zM.xO(aD.zL);
    aH.m7(aD.zL, 2700, false, 0);
  }
  function zH() {
    var zN = bf.kI[aD.yw];
    var zO = bf.zP[zN];
    aQ.zQ(L(26, [zO]), 2, 1, 12);
    aN.xZ(0, L(27, [zO]), 40, 0, bA.mn, bA.mk, -1, false);
    aH.mM(2700);
  }
  function zJ() {
    aN.zR();
    aH.mM(2700);
  }
  function zK() {
    aN.zS(aD.zL);
    aH.m7(aD.zL, 2700, false, 0);
  }
}
function yq() {
  this.ir = function () {
    if (bQ.result.zT === 0 || bQ.result.yt.length === 0 || aD.kD === 8) {
      if (b9.g2.gt(aD.eR)) {
        zU();
      }
      return;
    }
    var zV = zW();
    zX(zV);
    if (aD.z1 === 2 || aD.kD >= 7) {
      return;
    }
    zY(zV);
  };
  this.zZ = function () {
    if (aD.kF) {
      return;
    }
    var za = ag;
    var vi = aD.eR;
    if (za.zb[vi] === 0 || za.j0[vi] < 1 || 2 * za.p3[vi] > 3 * (za.iz[vi] + za.j0[vi])) {
      return;
    }
    zU();
  };
  function zc() {
    var sM = Math.floor(ag.xX[aD.eR] / 50);
    sM = Math.min(sM, 400);
    return sM / 100;
  }
  function zU() {
    var sM = zc();
    if (sM === 0) {
      return;
    }
    aN.xZ(440, L(28, [sM.toFixed(2)]), 40, 0, bA.n5, bA.mk, -1, false);
  }
  function zW() {
    aN.xZ(520, L(29), 40, 0, bA.mn, bA.mk, -1, false);
    var yt = bQ.result.yt;
    var eh = yt.length;
    var gU = ag.gU;
    var g = [];
    for (var aB = 0; aB < eh; aB++) {
      var gE = yt[aB];
      g.push({
        gE: gE,
        dm: gU[gE],
      });
    }
    g.sort((f0, f1) => f1.dm - f0.dm);
    var zP = ag.xa;
    var dm = bQ.result.zd;
    var sM = bQ.result.zT;
    var pO = "";
    var ze = "";
    var zV = 0;
    for (aB = 0; aB < eh; aB++) {
      var hM = (g[aB].dm * sM) / (100 * dm);
      var zf = zP[g[aB].gE] + ": " + hM.toFixed(2) + S[13];
      ze += zf;
      if (g[aB].gE === aD.eR) {
        zV = hM;
      }
      if (aB > 2 && eh !== 4) {
        if (aB === 3) {
          pO += "(" + L(30, [eh - 3]) + ")";
        }
        continue;
      }
      pO += zf;
    }
    aN.xZ(560, b9.qh.zg(pO), 40, 0, bA.n5, bA.mk, -1, false);
    if (zV) {
      aN.xZ(580, L(31, [zV.toFixed(2) + " + " + zc().toFixed(2)]), 40, 0, bA.n5, bA.mk, -1, false);
    } else if (b9.g2.gt(aD.eR)) {
      zU();
    }
    return zV;
  }
  function zX(zV) {
    if (aD.kD !== 7 && aD.kD !== 10) {
      return;
    }
    if (aD.z9 === 0) {
      return;
    }
    aN.xZ(600, L(32, [zV.toFixed(2)]), 40, 0, bA.mn, bA.mk, -1, false);
  }
  function zY(zV) {
    var yt = bQ.result.yt;
    var eh = yt.length;
    var zh = ag.zh;
    var gU = ag.gU;
    var zi = [];
    loop: for (var aB = 0; aB < eh; aB++) {
      var gE = yt[aB];
      var zj = b9.qh.zk(zh[gE]);
      if (zj === null) {
        continue;
      }
      var zl = gU[gE];
      for (var f1 = zi.length - 1; f1 >= 0; f1--) {
        if (zj === zi[f1].name) {
          zi[f1].dm += zl;
          zi[f1].g.push({
            gE: gE,
            dm: zl,
          });
          continue loop;
        }
      }
      zi.push({
        name: zj,
        dm: zl,
        g: [
          {
            gE: gE,
            dm: zl,
          },
        ],
      });
    }
    if (zi.length === 0) {
      return;
    }
    zi.sort((f0, f1) => f1.dm - f0.dm);
    var g = zi[0].g;
    g.sort((f0, f1) => f1.dm - f0.dm);
    var zm = "[" + zi[0].name + "]";
    var sM = bQ.result.zT;
    var zn = (8 * 64 * sM) / (100 * 4 * 65536);
    aN.xZ(0, L(33, [zm, zn.toFixed(4)]), 40, 0, bA.mn, bA.mk, -1, false);
    var ke = g.length;
    var vG = zi[0].dm;
    var zo = 10000 * zn;
    for (aB = 0; aB < ke; aB++) {
      if (g[aB].gE === aD.eR) {
        aN.xZ(600, L(34, [((zo * g[aB].dm) / (10 * vG)).toFixed(2)]), 40, 0, bA.mn, bA.mk, -1, false);
        aN.xZ(640, L(35, [(0.2 * zV).toFixed(2), zm]), 40, 0, bA.mn, bA.mk, -1, false);
        break;
      }
    }
    if (!aD.gq) {
      aN.xZ(720, L(36) + bJ.zp, 736, 0, bA.mn, bA.nB, -1, false);
    }
  }
}
function yj() {
  this.dX = function () {
    this.zq = 0;
    this.yt = [];
    this.zd = 0;
    this.zT = 0;
  };
  this.z8 = function () {
    if (aD.kF) {
      return;
    }
    zr(this);
  };
  function zr(rL) {
    if (aD.z1 === 2) {
      rL.yt = bQ.hA.yr();
    } else {
      if (aD.hW) {
        rL.yt = bQ.hA.yv();
      } else {
        rL.yt = bQ.hA.yx();
      }
    }
    rL.zq = bh.zs.zt();
    rL.zd = Math.max(1, bQ.hA.yy(rL.yt));
    b7.g2.oh();
    if (aD.kD === 8) {
      zu();
      return;
    }
    rL.zT = 100 * bQ.result.zq * (1 + aD.xS);
  }
  function zu() {
    bQ.result.zT = 0;
  }
}
function yo() {
  this.z8 = function () {
    if (aD.z1 === 2) {
      aD.z9 = 2;
      return;
    }
    zv();
  };
  function zv() {
    if (aD.kD === 8) {
      if (b9.g2.jK(0) || ag.lm[0] === 0) {
        aD.zL = 1;
      } else if (b9.g2.jK(1) || ag.lm[1] === 0) {
        aD.zL = 0;
      } else {
        aD.zL = +(ag.gU[1] > ag.gU[0]);
      }
      aD.z9 = +(aD.zL === aD.eR);
      return;
    }
    if (aD.hW) {
      var l7 = bg.zw();
      aD.yw = l7;
      if (bf.kI[l7]) {
        aD.z9 = +(bf.ef[aD.eR] === l7);
        return;
      }
    }
    aD.zL = lB[0];
    aD.z9 = +(aD.zL === aD.eR);
  }
}
function dB() {
  this.id = 0;
  this.dp = 0;
  this.uR = null;
  this.uS = null;
  this.uT = null;
  this.uZ = null;
  this.a1 = new zx();
  this.dX = function () {
    zy(this);
    zz(this);
    a00(this);
  };
  function a00(self) {
    var uR;
    if (self.id !== 0) {
      return;
    }
    try {
      uR = window.localStorage;
      if (!uR) {
        return;
      }
      uR.setItem(S[71], "1");
      uR.removeItem(S[71]);
    } catch (error) {
      return;
    }
    self.uR = uR;
  }
  function zy(self) {
    var dp;
    if (typeof Android === S[27]) {
      return;
    }
    if (typeof Android.getVersion !== S[34]) {
      return;
    }
    dp = Android.getVersion();
    if (dp < 12) {
      return;
    }
    self.dp = dp;
    self.id = 1;
    self.uS = Android;
  }
  function zz(self) {
    var dp;
    if (typeof mwIOSdataX === S[27]) {
      return;
    }
    if (!window.webkit || !window.webkit.messageHandlers || !window.webkit.messageHandlers.iosCommandA) {
      return;
    }
    self.id = 2;
    self.uT = mwIOSdataX;
    self.uZ = window.webkit.messageHandlers.iosCommandA;
    dp = self.uT["version"];
    self.dp = dp ? Number(dp) : 0;
  }
}
function zx() {
  this.a01 = function () {
    bi.rB.um();
    bi.rB.un();
    az.y.close(0, 3255);
    if (a0.id === 0) {
      if (a0.uR) {
        a0.uR.clear();
      }
      return;
    }
    if (a0.id === 1) {
      a0.uS.saveString(199, "");
      return;
    }
    if (a0.id === 2) {
      a0.uZ.postMessage("clear");
    }
  };
  this.a02 = function () {
    if (a0.id === 2) {
      a0.uZ.postMessage("showConsentForm");
      return;
    }
    if (a0.id === 1) {
      a0.uS.setState(7);
      return;
    }
  };
  this.a03 = function () {
    this.setState(14);
  };
  this.r7 = function () {
    return bi.eE.uM(2) === 1;
  };
  this.a04 = function () {
    var pO = "";
    bi.eE.uK(102, pO);
  };
  this.setState = function (a05) {
    if (a0.id !== 1) {
      return;
    }
    if (a0.dp >= 5) {
      a0.uS.setState(a05);
    }
  };
  this.a2 = function () {
    var a06;
    if (a0.id === 1 && a0.dp >= 7) {
      a0.uS.setState(5);
      return;
    }
    a06 = new URL(window.location);
    a06.searchParams.set("v", "" + Math.floor(Math.random() * 1000));
    window.location.href = a06.toString();
  };
  this.dc = function () {
    if (a0.id !== 1 || a0.dp < 17) {
      return;
    }
    a0.uS.saveString(23, document.documentElement.outerHTML);
  };
  this.eC = function () {
    if (a0.id === 0) {
      return;
    }
    if (a0.id === 1) {
      a0.uS.prepareAd("1688441405");
      return;
    }
    if (a0.id === 2) {
      if (a0.dp === 0) {
        a0.uZ.postMessage("prepare ad 1770251391");
      } else {
        a0.uZ.postMessage("loadAds 1770251391");
      }
    }
  };
  this.eH = function (dm) {
    if (a0.id === 0) {
      return false;
    }
    if (a0.id === 1) {
      return false;
    }
    if (a0.id === 2) {
      if (a0.dp === 0) {
        a0.uZ.postMessage("show ad " + dm);
      } else {
        a0.uZ.postMessage("showAd");
      }
      return true;
    }
    return false;
  };
  this.dh = function () {
    if (a0.id === 2 && a0.dp < 23) {
      t.u(
        4,
        1,
        new v(
          "App Update Required",
          "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" +
            bJ.a07 +
            S[26] +
            bJ.a07 +
            S[29],
          true,
          [
            new w(
              S[2] + L(37),
              function () {
                t.u(0);
              },
              bA.nS
            ),
          ]
        )
      );
    }
  };
}
function dQ() {
  this.p = [];
  this.a08 = function (a09, e) {
    this.p.push(e);
    if (t.ry === 8 && a09 === 0) {
      if (e === 4211) {
        a0A(e);
      } else {
        if (bm.a0B && e === 4495 && az.y.a0C !== a09) {
          t.a0D();
          return;
        }
        if (aa.a0E() !== 8) {
          a0F();
        }
        if (e === 4480) {
          a0G();
          return;
        }
        t.u(4, 0, new v(L(38), a0H(e), true));
      }
      return;
    }
    var a05 = aa.a0E();
    if (a05 === 6) {
      if (e === 4211) {
        a0A(e);
        return;
      } else if (e !== 4215 && e !== 4516 && e !== 4527 && e !== 4533 && e !== 4528) {
        aZ.a0I(a09);
        return;
      }
    } else if (bm.a0B) {
      if (a09 !== az.y.a0C) {
        return;
      }
    } else if (a05 === 8) {
      if (a09 === az.y.a0J && !aD.kF && aD.z4 === 1 && !aD.gq) {
        aN.a0K(L(39, [e]));
      }
      return;
    } else {
      return;
    }
    a0L(e);
  };
  this.a0M = function (e) {
    this.p.push(e);
    if (aa.a0E() === 8) {
      if (!aD.kF && aD.z4 === 1) {
        aN.a0K(L(39, [e]));
      }
      return;
    }
    a0L(e);
  };
  this.s = function () {
    var e = 3268;
    this.p.push(e);
    a0N(e);
  };
  function a0G() {
    bi.rB.uo();
    t.u(4, 0, new v(L(40), L(41), true));
  }
  function a0A(e) {
    a0N(e);
    t.u(
      4,
      5,
      new v("🚀 New Game Update", "The game has been updated! Please reload the game.", true, [
        new w(S[2] + L(37), function () {
          t.a0D();
        }),
        new w(
          S[67],
          function () {
            a0.a1.a2();
          },
          bA.nA
        ),
      ])
    );
  }
  function a0L(e) {
    a0N(e);
    t.u(4, 5, new v(L(38), a0H(e), true));
  }
  function a0H(e) {
    var pO = " [" + e + "]";
    if (e === 3249 || e === 1006) {
      return "No Internet / No Server Response" + pO;
    }
    if (e === 4527) {
      return "Player already in lobby" + pO;
    }
    if (e === 4530) {
      return "Lobby Timeout" + pO;
    }
    if (e === 4528) {
      return "Lobby Kick: Another login detected." + pO;
    }
    if (e === 4540) {
      return "You have been kicked." + pO;
    }
    if (e === 4495) {
      return "Account doesn't exist.";
    }
    return "Unknown error" + pO;
  }
  function a0N(e) {
    a0F(e);
    t.y.z();
  }
  function a0F(e) {
    var a05 = aa.a0E();
    if (a05 === 6) {
      az.y.a0O(e);
    } else if (bm.a0B) {
      t.x();
      bm.tK();
      az.y.close(az.y.a0C, 3256);
    } else if (a05 === 8) {
      aD.a0P(true);
    }
  }
}
function d0() {
  var a0Q, a0R;
  var a0S = -15000;
  var a0T = false;
  this.a0U = 0;
  this.a0V = "";
  this.a0W = false;
  this.dX = function () {
    a0X.addEventListener("mousedown", gu, {
      passive: false,
    });
    a0X.addEventListener("mousemove", a0Y, {
      passive: false,
    });
    a0X.addEventListener("mouseup", a0Z, {
      passive: false,
    });
    a0X.addEventListener(S[24], click, {
      passive: false,
    });
    a0X.addEventListener(S[48], a0a, {
      passive: false,
    });
    a0X.addEventListener(S[68], a0b, {
      passive: false,
    });
    a0X.addEventListener("touchstart", a0c, {
      passive: false,
    });
    a0X.addEventListener("touchmove", a0d, {
      passive: false,
    });
    a0X.addEventListener("touchend", a0e, {
      passive: false,
    });
    a0X.addEventListener("touchcancel", a0f, {
      passive: false,
    });
    a0X.addEventListener("dragover", a0g);
    a0X.addEventListener("drop", a0h);
    a0X.addEventListener("dblclick", a0i);
    document.addEventListener("contextmenu", a0j);
    document.addEventListener(S[86], a0k);
    document.addEventListener("keyup", a0l);
    document.addEventListener("visibilitychange", a0m);
    window.addEventListener("resize", resize);
  };
  function gu(e) {
    if (a0n()) {
      return;
    }
    a0T = true;
    a0o(e, 1);
    az.y.a0p(az.y.a0J);
    a0q(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY));
  }
  function a0c(e) {
    a0S = be.eG;
    a0o(e, 1);
    az.y.a0p(az.y.a0J);
    if (e.touches.length > 0) {
      a0Q = Math.floor(h.k * e.touches[0].clientX);
      a0R = Math.floor(h.k * e.touches[0].clientY);
      if (!at.a0c(e)) {
        a0q(a0Q, a0R);
      }
    }
  }
  function a0q(eo, eq) {
    t.gu(eo, eq);
    if (aD.z4 === 0) {
      aa.gu(eo, eq);
      return;
    }
    if (bB.a0r(eo, eq)) {
      return;
    }
    if (bd.gu(eo, eq)) {
      return;
    }
    if (aX.gu(eo, eq)) {
      return;
    }
    if (aL.a0s(eo, eq)) {
      return;
    }
    if (aP.gu(eo, eq)) {
      return;
    }
    if (aM.gu(eo, eq) >= 0) {
      return;
    }
    if (av.gu(eo, eq)) {
      return;
    }
    if (bI.a0t(eo, eq)) {
      return;
    }
    aL.a0u(eo, eq);
  }
  this.a0t = function (eo, eq) {
    if (bB.gu(eo, eq)) {
      return true;
    }
    if (aV.gu(eo, eq)) {
      return true;
    }
    if (aS.gu(eo, eq)) {
      return true;
    }
    if (aR.gu(eo, eq)) {
      return true;
    }
    if (aN.gu(eo, eq)) {
      return true;
    }
    return false;
  };
  function a0Y(e) {
    if (a0n()) {
      return;
    }
    a0T = true;
    a0o(e, 1);
    a0v(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY));
  }
  function a0d(e) {
    a0S = be.eG;
    a0o(e, 1);
    if (e.touches.length > 0) {
      a0Q = Math.floor(h.k * e.touches[0].clientX);
      a0R = Math.floor(h.k * e.touches[0].clientY);
      if (!at.a0d(e)) {
        a0v(a0Q, a0R);
      }
    }
  }
  function a0v(eo, eq) {
    t.a0Y(eo, eq);
    if (aD.z4 === 0) {
      aa.a0Y(eo, eq);
      return;
    }
    bS.gn(eo, eq);
    if (bd.a0Y(eo, eq)) {
      return;
    }
    aM.a0Y(eo, eq);
    if (aL.hO()) {
      aL.a0Y(eo, eq);
      return;
    }
    if (aR.gv) {
      if (aR.a0Y(eo)) {
        be.df = true;
      }
      return;
    }
    aV.a0Y(eo, eq);
    if (aS.mI) {
      if (aS.a0Y(eo, eq)) {
        be.df = true;
      }
      return;
    }
  }
  function a0a(e) {
    if (a0n()) {
      return;
    }
    a0o(e, 1);
    a0w();
    if (aD.z4 === 0) {
      aa.click(-1024, -1024);
      aT.qj();
      return;
    }
    aV.a0x(-1024, -1024);
    aM.a0Y(-1024, -1024);
    aR.a0y();
    aS.mI = false;
  }
  function a0Z(e) {
    if (a0n()) {
      return;
    }
    a0o(e, 1);
    a0z(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), e.button === 2);
    if (bI.a0W) {
      bI.a0W = false;
      e.preventDefault();
    }
  }
  function click(e) {
    if (a0n()) {
      return;
    }
    a0o(e, 1);
  }
  function a0e(e) {
    a0S = be.eG;
    a0o(e, 1);
    if (e && e.touches && e.touches.length > 0 && aD.z4 !== 0) {
      aS.mI = false;
      return;
    }
    if (at.a10()) {
      return;
    }
    a0z(a0Q, a0R, false);
    if (bI.a0W) {
      bI.a0W = false;
      e.preventDefault();
    }
  }
  function a0f(e) {
    a0S = be.eG;
    a0o(e, 1);
    a0z(a0Q, a0R, false);
    if (bI.a0W) {
      bI.a0W = false;
      e.preventDefault();
    }
  }
  function a0g(e) {}
  function a0h(e) {}
  function a0i(e) {
    if (a0n()) {
      return;
    }
    a0o(e, 0);
  }
  function a0z(eo, eq, a11) {
    a0w();
    if (aD.z4 === 0) {
      aa.click(eo, eq);
      return;
    }
    aV.a0x(eo, eq);
    bd.a0x();
    aR.a0y();
    aS.mI = false;
    if (aL.click(eo, eq, a11)) {
      be.df = true;
      return;
    }
    if (aM.a0Z(eo, eq)) {
      return;
    }
  }
  function a0w() {
    t.a0w();
  }
  function a0b(e) {
    if (a0n()) {
      return;
    }
    a0o(e, 1);
    az.y.a0p(az.y.a0J);
    var eo = Math.floor(h.k * e.clientX);
    var eq = Math.floor(h.k * e.clientY);
    var deltaY = e.deltaY;
    if (e.deltaMode === 1) {
      deltaY *= 16;
    }
    t.a0b(eo, eq, deltaY);
    if (aD.z4 === 0) {
      aa.a0b(eo, eq, deltaY);
      return;
    }
    if (aV.a0b(eo, eq, deltaY)) {
      return;
    }
    if (aR.a12(eo, eq)) {
      if (aR.a0b(deltaY)) {
        be.df = true;
      }
      return;
    }
    aS.a0b(eo, eq, deltaY);
  }
  function a0j(e) {
    a0o(e, 0);
  }
  function a0o(e, id) {
    if (id === 0 && t.hO()) {
      return;
    }
    if (a13()) {
      return;
    }
    if (aa.a0E() === 0) {
      return;
    }
    e.preventDefault();
  }
  function a13() {
    var e1 = window.innerWidth / document.documentElement.clientWidth;
    return e1 < 0.999 || e1 > 1.001;
  }
  function a0k(e) {
    if (a0n()) {
      return;
    }
    if (h.rg > 0) {
      return;
    }
    var code = e.code;
    if (!code || !code.length) {
      return;
    }
    if (bW.f2(code, 18)) {
      aq.a14(3);
    } else if (bW.f2(code, 22)) {
      aq.a14(0);
    } else if (bW.f2(code, 20)) {
      aq.a14(1);
    } else if (bW.f2(code, 24)) {
      aq.a14(2);
    } else if (bW.f2(code, 10)) {
      aR.a15(31 / 32);
    } else if (bW.f2(code, 8)) {
      aR.a15(32 / 31);
    } else if (bW.f2(code, 6)) {
      aR.a15(7 / 8);
    } else if (bW.f2(code, 4)) {
      aR.a15(8 / 7);
    } else if (bW.f2(code, 14)) {
      if (aD.z4 !== 0) {
        aS.a0b(Math.floor(h.i / 2), Math.floor(h.j / 2), -200);
      }
    } else if (bW.f2(code, 16)) {
      if (aD.z4 !== 0) {
        aS.a0b(Math.floor(h.i / 2), Math.floor(h.j / 2), 200);
      }
    } else if (bW.f2(code, 0)) {
      if (!aD.z4) {
        return;
      }
      bS.go(false);
    } else if (bW.f2(code, 2)) {
      if (!aD.z4) {
        return;
      }
      bS.go(true);
    } else if (bW.f2(code, 26)) {
      if (!aD.z4) {
        return;
      }
      bS.hI();
    } else if (bW.f2(code, 28)) {
      if (!aD.z4) {
        return;
      }
      bS.hN();
    }
  }
  function a0l(e) {
    if (a0n()) {
      return;
    }
    if (h.rg > 0) {
      return;
    }
    if (be.eG < 400) {
      return;
    }
    var code = e.code;
    if (!code || !code.length) {
      return;
    }
    if (code === S[39]) {
      if (t.a16(1)) {
        return;
      }
    }
    if (code === S[52]) {
      if (t.a16(0)) {
        return;
      }
    }
    if (bm.a0B) {
      if (bm.tQ.a16(code)) {
        return;
      }
      if (code === S[38]) {
        bI.fA();
      }
      return;
    }
    if (aa.a0E() !== 8) {
      if (aa.a16(e)) {
        be.df = true;
        return;
      }
    }
    if (code === S[38]) {
      bI.fA();
    } else if (bW.f2(code, 18)) {
      aq.a17(3);
    } else if (bW.f2(code, 22)) {
      aq.a17(0);
    } else if (bW.f2(code, 20)) {
      aq.a17(1);
    } else if (bW.f2(code, 24)) {
      aq.a17(2);
    } else if (bW.f2(code, 12)) {
      bB.a18(!aD.mG);
    } else if (code === S[52]) {
      if (!aD.z4) {
        return;
      }
      aM.gr && aM.a19();
      aD.gq && bB.a1A(false);
    }
  }
  function a0m() {
    if (document.visibilityState === S[15]) {
      if (aD.z4 !== 1) {
        return;
      }
      if (aD.gq) {
        bB.a1B();
      } else if (aD.kF && !aM.gr && !aD.h2) {
        aM.a19();
      }
    } else {
      be.df = true;
    }
  }
  function a0n() {
    return a0S + 15000 > be.eG;
  }
  this.a1C = function () {
    return a0n();
  };
  this.qA = function () {
    return !a0T || a0S > 0;
  };
  function resize() {
    h.a1D();
  }
  this.fA = function () {
    if (t.hO()) {
      t.a16(2);
      return;
    }
    if (aa.a0E() === 8) {
      if (aD.mG) {
        bB.a18(false);
        return;
      }
      if (bd.hO) {
        bd.a19();
        return;
      }
      aM.a19();
      return;
    }
    if (aa.a0E() === 7) {
      return;
    }
    if (aa.a0E() === 6) {
      aZ.a1E();
      return;
    }
  };
}
function bw() {
  this.ph = new a1F();
  this.pq = new a1G();
  this.g2 = new a1H();
  this.qh = new a1I();
  this.xG = new a1J();
  this.a1K = new a1L();
  this.canvas = new a1M();
  this.color = new a1N();
  this.a1O = new a1P();
  this.dX = function () {
    this.ph.ul();
  };
}
function a1G() {
  this.vg = function (g) {
    g.fill(0);
  };
  this.a1Q = function (g) {
    var aB;
    var eh = g.length;
    for (aB = 0; aB < eh; aB++) {
      g[aB] = [];
    }
  };
  this.a1R = function (hm, a1S) {
    var aB;
    var hn = bN.fH;
    for (aB = 0; aB < 3; aB++) {
      hn[aB] = a1S * hm[aB];
    }
    return hn;
  };
  this.a1T = function (hm, hn, a1U) {
    var aB;
    var hq = 0;
    for (aB = 0; aB < 3; aB++) {
      hq += Math.abs(hm[aB] - hn[aB]);
    }
    return hq >= a1U;
  };
  this.a1V = function (hm, a1W) {
    var aB;
    for (aB = 0; aB < 3; aB++) {
      hm[aB] = bK.pF(hm[aB] + a1W, 0, 255);
    }
    return hm;
  };
  this.a1X = function (g, sI, sJ) {
    sI = sI || 0;
    sJ = sJ || g.length - 1;
    var a1Y = 0;
    for (var aB = sI; aB <= sJ; aB++) {
      a1Y += g[aB];
    }
    return a1Y;
  };
  this.a1Z = function (g, a1a) {
    var f0, aB, a1b;
    var eh = g.length;
    var a1c = [];
    for (f0 = eh - 1; f0 >= 0; f0--) {
      a1b = 0;
      for (aB = 0; aB < eh; aB++) {
        if (a1a(g[aB]) < a1a(g[a1b])) {
          a1b = aB;
        }
      }
      eh--;
      a1c.push(g[a1b]);
      g[a1b] = g[eh];
      g.pop();
    }
    return a1c;
  };
  this.min = function (g) {
    var aB, f9;
    var eh = g.length;
    if (eh === 0) {
      return 0;
    }
    f9 = g[0];
    for (aB = 1; aB < eh; aB++) {
      f9 = Math.min(f9, g[aB]);
    }
    return f9;
  };
  this.max = function (g) {
    var eh = g.length;
    if (eh === 0) {
      return 0;
    }
    var f9 = g[0];
    for (var aB = 1; aB < eh; aB++) {
      f9 = Math.max(f9, g[aB]);
    }
    return f9;
  };
  this.a1d = function (g, f9) {
    var eh = g.length;
    var g9 = 0;
    for (var aB = 0; aB < eh; aB++) {
      g9 += g[aB] > f9;
    }
    return g9;
  };
  this.a1e = function (a1f, a1g, min) {
    var eh = a1g[0];
    for (var aB = eh - 1; aB >= 0; aB--) {
      if (a1f[aB] < min) {
        eh--;
        a1f[aB] = a1f[eh];
      }
    }
    a1g[0] = eh;
  };
  this.a1h = function (g, eh, value) {
    for (var aB = 0; aB < eh; aB++) {
      g[aB] -= value;
    }
  };
  this.a1i = function (g) {
    var eh = g.length;
    for (var aB = 0; aB < eh; aB++) {
      if (typeof g[aB] !== S[44]) {
        return false;
      }
    }
    return true;
  };
  this.a1j = function (pO, g, a1k) {
    g.fill(0);
    var sM = pO.split(",");
    var eh = Math.min(sM.length, g.length);
    for (var aB = 0; aB < eh; aB++) {
      g[aB] = Math.min(parseInt(sM[aB]), a1k);
    }
  };
  this.a1l = function (pO, g, qe) {
    g.fill("");
    var sM = pO.split('"');
    var eh = Math.min(sM.length, 2 * g.length);
    var hU = 0;
    for (var aB = 1; aB < eh; aB += 2) {
      g[hU++] = sM[aB].slice(0, qe);
    }
  };
  this.a1m = function (g, g9) {
    if (g9 === 0) {
      g.fill(0);
      return;
    }
    var a1Y = this.a1X(g);
    var eh = g.length;
    if (a1Y === 0) {
      g.fill(bK.dn(g9, eh));
    } else {
      for (var aB = 0; aB < eh; aB++) {
        g[aB] = bK.dn(g9 * g[aB], a1Y);
      }
    }
    a1Y = this.a1X(g);
    if (a1Y === 0) {
      g[1] = g9;
      return;
    }
    var hU = 0;
    while (a1Y++ < g9) {
      hU = (hU + 1) % eh;
      if (g[hU]) {
        g[hU]++;
      }
    }
  };
  this.a1n = function (g) {
    if (!g) {
      return 0;
    }
    var eh = g.length;
    if (eh === 0) {
      return 0;
    }
    var f9 = g[eh - 1];
    for (var aB = eh - 2; aB >= 0; aB--) {
      if (g[aB] !== f9) {
        return aB + 2;
      }
    }
    return 1;
  };
  this.a1o = function (g) {
    var a1Y = 0;
    for (var aB = 0; aB < g.length; aB++) {
      a1Y += g[aB].length;
    }
    return a1Y;
  };
  this.a1p = function (a1q) {
    var g = [];
    for (var aB = 0; aB < a1q.length; aB++) {
      g = g.concat(a1q[aB]);
    }
    return g;
  };
}
function a1M() {
  this.xr = function (a1r, e2, a1s) {
    var hY = a1r.height;
    var a1t = b9.ph.vW(hY, hY);
    var he = b9.ph.getContext(a1t);
    a1u(hY, he, a1s);
    he.drawImage(a1r, -e2 * hY, 0);
    return a1t;
  };
  function a1u(i, he, a1s) {
    he.fillStyle = a1s;
    he.beginPath();
    he.arc(i / 2, i / 2, i * 0.47, 0, 2 * Math.PI);
    he.fill();
  }
  this.a1v = function (a1w) {
    var hY = a1w.height;
    if (a1w.width !== hY) {
      return a1w;
    }
    var he = b9.ph.getContext(a1w, true);
    var hb = he.getImageData(0, 0, hY, hY);
    b9.a1K.a1x(hb.data, hY, hY, 0.9);
    he.putImageData(hb, 0, 0);
    return a1w;
  };
}
function a1N() {
  this.a1y = function (f9) {
    return [(f9 >> 12) & 63, (f9 >> 6) & 63, f9 & 63];
  };
  this.a1z = function (f9) {
    var g = this.a1y(f9);
    for (var aB = 0; aB < 3; aB++) {
      g[aB] = ~~(4.05 * g[aB]);
    }
    return g;
  };
  this.a20 = function (f9) {
    var g = this.a1z(f9);
    return b9.color.mf(g[0], g[1], g[2]);
  };
  this.a21 = function (g) {
    for (var aB = 0; aB < 3; aB++) {
      g[aB] = ~~(g[aB] / 4.04);
    }
    return (g[0] << 12) + (g[1] << 6) + g[2];
  };
  this.mf = function (e1, sM, f1) {
    return S[7] + e1 + "," + sM + "," + f1 + ")";
  };
  this.mh = function (e1, sM, f1, f0) {
    return S[8] + e1 + "," + sM + "," + f1 + "," + f0.toFixed(3) + ")";
  };
  this.qC = function (f2) {
    var g = f2.split("(")[1].split(",");
    var fG = bN.fG;
    for (var aB = 0; aB < 3; aB++) {
      fG[aB] = parseInt(g[aB]);
    }
    if (g.length === 4) {
      fG[3] = 255 * parseFloat(g[3].slice(0, -1));
    } else {
      fG[3] = 255;
    }
    return fG;
  };
  this.qD = function (a22, ek) {
    var pO = a22.slice(a22.indexOf("(") + 1, a22.indexOf(")"));
    var g = pO.split(",");
    var fG = bN.fG;
    for (var aB = 0; aB < 3; aB++) {
      fG[aB] = bK.pF(parseInt(g[aB].trim(), 10) + ek, 0, 255);
    }
    if (g.length === 3) {
      return this.mf(fG[0], fG[1], fG[2]);
    }
    var alpha = parseFloat(g[3].trim());
    alpha = alpha === 0 ? 0.3 : alpha;
    return this.mh(fG[0], fG[1], fG[2], alpha);
  };
  this.a23 = function (g) {
    var pO = "#";
    for (var aB = 0; aB < 3; aB++) {
      var e1 = g[aB].toString(16);
      pO += e1.length === 1 ? "0" + e1 : e1;
    }
    return pO;
  };
  this.a24 = function (pO) {
    if (pO.length < 7) {
      return bA.me;
    }
    var e1 = parseInt(pO.slice(1, 3), 16);
    var sM = parseInt(pO.slice(3, 5), 16);
    var f1 = parseInt(pO.slice(5, 7), 16);
    return this.mf(e1, sM, f1);
  };
}
function a1J() {
  this.a25 = function (pO, font, maxWidth) {
    if (font) {
      tr.font = font;
    }
    var i = tr.measureText(pO).width;
    if (i <= maxWidth) {
      return pO;
    }
    var a26 = "...";
    for (var aB = pO.length - 1; aB >= 1; aB--) {
      pO = pO.substring(0, aB);
      i = tr.measureText(pO + a26).width;
      if (i <= maxWidth) {
        return pO + a26;
      }
    }
    return a26;
  };
}
function a1P() {
  var a27 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  this.a28 = function (eG) {
    var a29, a2A, gF;
    var pO = new Date(eG.getTime() - 1000 * 60 * eG.getTimezoneOffset()).toUTCString();
    if (pO.length < 12) {
      return pO;
    }
    pO = pO.substring(5, pO.length);
    a29 = eG.getTimezoneOffset();
    if (a29 === 0) {
      return pO;
    }
    a2A = bK.dn(Math.abs(a29), 60);
    a2A = (a29 < 0 ? "+" : "-") + a2A;
    gF = Math.abs(a29) % 60;
    if (gF === 0) {
      return pO + a2A;
    }
    return pO + a2A + ":" + (gF < 10 ? "0" : "") + gF;
  };
  this.a2B = function (eG) {
    var pO = eG.toUTCString();
    if (pO.length < 12) {
      return pO;
    }
    return a2C(eG) + ", " + pO.substring(5, pO.length - 4);
  };
  function a2C(eG) {
    return a27[eG.getUTCDay()];
  }
}
function a1F() {
  var a2D = null;
  this.y8 = 0;
  this.ul = function () {
    var f9 = bi.eE.data[5].value;
    a2D = "px " + f9;
    if (f9 !== S[72]) {
      a2D += ", sans-serif";
    }
    this.y8 = hX(32, 32, ["a", "b", "m"], 200, a2D);
  };
  this.vW = function (i, j) {
    var f2 = document.createElement(S[4]);
    f2.width = i;
    f2.height = j;
    return f2;
  };
  this.getContext = function (canvas, alpha) {
    return canvas.getContext("2d", {
      alpha: alpha,
    });
  };
  this.getImageData = function (xG, i, j) {
    return xG.getImageData(0, 0, i, j);
  };
  this.rY = function (type, size) {
    size = size.toFixed(2);
    if (type === 0) {
      return size + a2D;
    } else if (type === 1) {
      return "bold " + size + a2D;
    } else if (type === 2) {
      return "lighter " + size + a2D;
    } else if (type === 3) {
      return S[87] + size + a2D;
    } else if (type === 4) {
      return "oblique " + size + a2D;
    } else if (type === 5) {
      return "small-caps " + size + a2D;
    } else {
      return "small-caps bold " + size + a2D;
    }
  };
  this.textAlign = function (he, id) {
    if (id === 0) {
      he.textAlign = "left";
    } else if (id === 1) {
      he.textAlign = S[10];
    } else {
      he.textAlign = "right";
    }
  };
  this.textBaseline = function (he, id) {
    if (id === 1) {
      he.textBaseline = S[33];
    } else if (id === 2) {
      he.textBaseline = "bottom";
    } else {
      he.textBaseline = S[70];
    }
  };
  this.ps = function (e, code, color) {
    var f9 = this.pr(bb.ra) + " solid " + (color || bA.mn);
    code = code || 5;
    if (code === 5) {
      e.style.border = f9;
    } else if (code === 4) {
      e.style.borderLeft = f9;
    } else if (code === 2) {
      e.style.borderBottom = f9;
    } else if (code === 6) {
      e.style.borderRight = f9;
    } else {
      e.style.borderTop = f9;
    }
  };
  this.sO = function (e, eo, eq, i, j) {
    var pm = e.style;
    pm.left = this.sP(eo);
    pm.top = this.sP(eq);
    pm.width = this.sP(i);
    pm.height = this.sP(j);
  };
  this.pi = function (f9) {
    return 1 + f9 * a0.a1.r7();
  };
  this.r2 = function (mP, gF) {
    return (mP * this.pi(gF === undefined ? 0.5 : gF) * h.pj) / h.k;
  };
  this.sN = function (mP, gF) {
    return mP * this.pi(gF === undefined ? 0.5 : gF) * h.pj;
  };
  this.s4 = function (mP, gF, a2E) {
    var a2F = this.pi(gF);
    return (a2F * Math.min(mP * h.pj, a2E * h.i)) / h.k;
  };
  this.pr = function (f9) {
    return f9.toFixed(1) + "px";
  };
  this.sP = function (f9) {
    return this.a2G(f9).toFixed(1) + "px";
  };
  this.a2G = function (f9) {
    return f9 / h.k;
  };
  this.a2H = function (ro, a2I) {
    var aB;
    var pO = "<ul>";
    var eh = ro.length;
    for (aB = 0; aB < eh; aB++) {
      pO += "<li>" + ro[aB] + ": <a href='" + a2I[aB] + S[26] + a2I[aB] + "</a></li>";
    }
    pO += "</ul>";
    return pO;
  };
  this.a2J = function (a2K) {
    return S[56] + a2K + S[26] + a2K + S[29];
  };
  this.a2L = function (e) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(e.value);
    }
  };
  this.a2M = function (e) {
    var dm = e.textContent;
    if (b9.qh.a2N(dm, "✔")) {
      return;
    }
    if (dm.length === 1) {
      e.textContent = "✔";
    } else {
      e.textContent = dm + " ✔";
    }
    setTimeout(function () {
      e.textContent = dm;
    }, 500);
  };
  this.measureText = function (pO) {
    return tr.measureText(pO).width;
  };
  this.sE = function (a2O) {
    a2O.style.overflowX = S[9];
    a2O.style.overflowY = S[15];
    a2O.style.whiteSpace = S[47];
    a2O.addEventListener(S[68], function (e) {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) {
        return;
      }
      this.scrollLeft += e.deltaY;
      this.sR = this.scrollLeft;
      e.preventDefault();
    });
    a2O.addEventListener(S[30], function () {
      this.sR = this.scrollLeft;
    });
  };
}
function a1H() {
  this.gs = function (a05) {
    if (a05 === 0) {
      return aD.z4 === 1 && aD.h2;
    }
    if (a05 === 1) {
      return aD.z4 === 1 && !aD.h2;
    }
    return aD.z4 === 2;
  };
  this.gt = function (player) {
    return ag.lm[player] !== 0 && ag.a2P[player] !== 2;
  };
  this.a2Q = function (player) {
    return player === aD.eR && ag.a2P[player] !== 2;
  };
  this.lL = function () {
    var jx = al.jx;
    if (jx < 2) {
      return 0;
    }
    if (!aD.hW) {
      return ag.gU[lB[1]];
    }
    return bg.a2R() > 1;
  };
  this.a2S = function () {
    var jx = al.jx;
    if (jx === 0) {
      return 0;
    }
    if (!aD.hW) {
      return !this.jK(lB[0]);
    }
    var ef = bf.ef;
    var l7 = bg.l8();
    var jy = al.jy;
    for (var aB = jx - 1; aB >= 0; aB--) {
      var gE = jy[aB];
      if (ef[gE] === l7 && !this.jK(gE)) {
        return 1;
      }
    }
    return 0;
  };
  this.a2T = function (player) {
    return player === aD.eR;
  };
  this.jK = function (player) {
    return player >= aD.jw || ag.a2P[player] === 2;
  };
  this.ki = function (player) {
    return ag.lm[player] !== 0;
  };
  this.yu = function (player) {
    return player < aD.jw;
  };
  this.p0 = function (a2U, a2V) {
    return a2U !== a2V;
  };
  this.g5 = function (player, f9) {
    f9 = this.a2W(player, f9);
    ag.gi[player] += f9;
    if (ag.a2X[player]) {
      var min = Math.min(ag.a2X[player], ag.gi[player]);
      ag.a2X[player] -= min;
      ag.gi[player] -= min;
    }
    return f9;
  };
  this.a2W = function (player, f9) {
    var a2Y = ag.gi[player];
    f9 = Math.min(f9, ag.gU[player] * aD.a2Z - a2Y);
    f9 = Math.min(f9, aD.a2a - a2Y);
    return Math.max(f9, 0);
  };
  this.p1 = function (player, iG, a2b, a2c) {
    var a2Y = ag.gi[player];
    var hL = bK.dn(a2Y * (iG + 1), 1024);
    var a2d = bK.dn(a2b * a2Y, 1024);
    hL = Math.min(hL, a2Y - a2d);
    if (aD.kD === 10) {
      hL = b3.a2e(player, hL);
    }
    bN.fE[0] = hL;
    bN.fE[1] = a2d;
    return hL >= a2c;
  };
  this.oS = function (player, oB, oA) {
    var a2Y = ag.gi[player];
    var a2d = bK.dn(64 * a2Y, 1024);
    oB = Math.min(oB, a2Y - a2d);
    var a2f = this.a2g(oB);
    oB -= a2f;
    a2d += a2f;
    oB = this.a2W(oA, oB);
    bN.fE[0] = oB;
    bN.fE[1] = a2d;
    return oB >= 1;
  };
  this.oU = function (oB, oA) {
    var a2f = this.a2g(oB);
    oB -= a2f;
    oB = this.a2W(oA, oB);
    bN.fE[0] = oB;
    bN.fE[1] = a2f;
    return oB >= 1;
  };
  this.iF = function (player, a2h) {
    return bK.dn(ag.gi[player] * (a2h + 1), 1024);
  };
  this.a2g = function (a2i) {
    return bK.dn(Math.max(2142 - be.jt(), 0) * a2i, 2142);
  };
  this.pD = function (player, a2b) {
    var a2d = bK.dn(a2b * ag.gi[player], 1024);
    bN.fE[1] = a2d;
    ag.gi[player] -= a2d;
  };
  this.g3 = function (player, a2j) {
    var f1 = ag.gi[player];
    if (a2j <= f1) {
      ag.gi[player] -= a2j;
      return a2j;
    }
    ag.gi[player] = 0;
    var fO = a2j - f1;
    var fQ = 5 * (fO >> 2);
    var ek = ag.a2X[player];
    var fS = ek + fQ;
    bc.g6(player, fQ - fO, 12);
    if (fS <= aD.a2k) {
      ag.a2X[player] = fS;
      return a2j;
    }
    ag.a2X[player] = aD.a2k;
    bc.g6(player, fS - aD.a2k, 18);
    return a2j;
  };
  this.kw = function (player, iG) {
    var gi = ag.gi;
    var a2Y = gi[player];
    var hL = bK.dn(a2Y * (iG + 1), 1024);
    var a2d = Math.max(bK.dn(a2Y, 10), 1000);
    hL = Math.min(hL, a2Y - a2d);
    if (hL < 0) {
      gi[player] = 0;
      a2d = Math.min(1000, a2Y + aD.a2k - ag.a2X[player]);
      bN.fE[1] = a2d;
      ag.a2X[player] += a2d - a2Y;
      return 0;
    }
    bN.fE[1] = a2d;
    if (aD.kD === 10) {
      hL = b3.a2e(player, hL);
    }
    gi[player] -= a2d + hL;
    return hL;
  };
  this.p4 = function (player) {
    ag.gi[player] -= bN.fE[0] + bN.fE[1];
  };
  this.p2 = function (player, j7) {
    j7 = Math.min(j7, aD.ee);
    if (j7 < aD.ee && ag.lm[j7] === 0) {
      j7 = aD.ee;
    }
    bN.ed[0] = j7;
    return j7 === aD.ee || ea(player, j7);
  };
  this.p6 = function (player, oA) {
    if (ag.lm[oA] === 0) {
      return false;
    }
    return !ea(player, oA);
  };
  this.a2l = function (player, a2m) {
    var aB, gE;
    var eh = al.jx;
    var a2n = 0;
    var a2o = lB;
    for (aB = 0; aB < eh; aB++) {
      gE = a2o[aB];
      if (!this.jK(gE)) {
        if (player === gE) {
          return true;
        }
        if (++a2n > a2m) {
          return false;
        }
      }
    }
    return false;
  };
  this.l4 = function (gE) {
    var a2p;
    if (aD.hW) {
      a2p = bg.a2q();
    } else {
      a2p = ag.gU[lB[0]];
    }
    return a2p >= bK.dn(gE * aD.jg, 100);
  };
  this.a2r = function (f9, min, max) {
    return Math.floor(bK.pF(isNaN(f9) ? 0 : Number(f9), min, max));
  };
}
function a1L() {
  this.a2s = function (canvas, a2t, a2u) {
    var i = canvas.width;
    var j = canvas.height;
    var f2 = b9.ph.vW(i, j);
    var he = b9.ph.getContext(f2, true);
    he.drawImage(canvas, 0, 0);
    var hb = he.getImageData(0, 0, i, j);
    a2t(hb.data, i, j, a2u);
    he.putImageData(hb, 0, 0);
    return f2;
  };
  this.a2v = function (vh, i, j) {
    for (var eo = i - 1; eo >= 0; eo--) {
      for (var eq = j - 1; eq >= 0; eq--) {
        var aB = 4 * (eo + eq * i);
        vh[aB + 3] = vh[aB];
        vh[aB] = vh[aB + 1] = vh[aB + 2] = 255;
      }
    }
  };
  this.a2w = function (vh, i, j) {
    for (var eo = i - 1; eo >= 0; eo--) {
      for (var eq = j - 1; eq >= 0; eq--) {
        var aB = 4 * (eo + eq * i);
        if (vh[aB + 1] > vh[aB + 2] + 10) {
          vh[aB + 3] = vh[aB];
          vh[aB + 1] = vh[aB + 2];
        }
      }
    }
  };
  this.a2x = function (vh, i, j, a2u) {
    var gap = Math.floor(Math.min(i, j) * a2u);
    for (var eo = 0; eo < i; eo++) {
      for (var eq = 0; eq < j; eq++) {
        if (eo < gap || eq < gap || eo >= i - gap || eq >= j - gap) {
          var aB = 4 * (eo + eq * i);
          vh[aB + 3] = 255 - (255 * (vh[aB + 1] - vh[aB])) / (255 - vh[aB]);
        }
      }
    }
  };
  this.a2y = function (vh, i, j, a2u) {
    for (var eo = i - 1; eo >= 0; eo--) {
      for (var eq = j - 1; eq >= 0; eq--) {
        var aB = 4 * (eo + eq * i);
        vh[aB] = a2u[0];
        vh[aB + 1] = a2u[1];
        vh[aB + 2] = a2u[2];
      }
    }
  };
  this.a2z = function (vh, i, j, a2u) {
    var gap = Math.floor(i * a2u);
    for (var eo = 0; eo < i; eo++) {
      for (var eq = 0; eq < j; eq++) {
        if (eo < gap || eq < gap || eo >= i - gap || eq >= j - gap) {
          var aB = 4 * (eo + eq * i);
          vh[aB] = vh[aB + 1] = vh[aB + 2] = 0;
        }
      }
    }
  };
  this.a30 = function (vh, i, j) {
    var eo, eq, aB;
    for (eo = i - 1; eo >= 0; eo--) {
      for (eq = j - 1; eq >= 0; eq--) {
        aB = 4 * (eo + eq * i);
        if (vh[aB + 1] > 200 && vh[aB + 1] - 20 > vh[aB] && vh[aB + 1] - 20 > vh[aB + 2]) {
          if (vh[aB] + vh[aB + 2] < 40) {
            vh[aB + 3] = 0;
          } else {
            vh[aB + 3] = vh[aB];
            vh[aB] = 255;
            vh[aB + 1] = 255;
            vh[aB + 2] = 255;
          }
        } else if (vh[aB] < 50 && vh[aB + 1] < 50 && vh[aB + 2] < 50) {
          if (vh[aB] + vh[aB + 1] + vh[aB + 2] < 50) {
            vh[aB + 3] = 180;
          } else {
            vh[aB + 3] = 180 + Math.floor((75 * (vh[aB] + vh[aB + 1] + vh[aB + 2] - 50)) / 100);
          }
        }
      }
    }
  };
  this.a31 = function (vh, i, j) {
    var eo, eq, aB;
    for (eo = i - 1; eo >= 0; eo--) {
      for (eq = j - 1; eq >= 0; eq--) {
        aB = 4 * (eo + eq * i);
        if (vh[aB + 1] > vh[aB] + 20 && vh[aB + 1] > vh[aB + 2] + 20 && vh[aB] + vh[2] < 40) {
          vh[aB + 3] = 255 - vh[aB + 1];
          vh[aB] = vh[aB + 1] = vh[aB + 2] = vh[aB];
        }
      }
    }
  };
  this.a1x = function (vh, i, j, a2u) {
    var e1 = i >> 1;
    for (var eo = 0; eo < i; eo++) {
      for (var eq = 0; eq < j; eq++) {
        if (Math.sqrt((eo - e1) * (eo - e1) + (eq - e1) * (eq - e1)) > a2u * e1) {
          vh[4 * (eo + eq * i) + 3] = 0;
        }
      }
    }
  };
}
function a1I() {
  var a32 = {
    ":joy:": "😂",
    ":rofl:": "🤣",
    ":sob:": "😭",
    ":sad": "😔",
    ":eyes:": "👀",
    ":skull:": "💀",
    ":fire:": "🔥",
    ":100:": "💯",
    ":clown:": "🤡",
    ":sunglasses:": "😎",
    ":thinking:": "🤔",
    ":zzz:": "😴",
    ":rage:": "😡",
    ":poop:": "💩",
    ":thumbsup:": "👍",
    ":thumbsdown:": "👎",
    ":pray:": "🙏",
    ":clap:": "👏",
    ":trophy:": "🏆",
    ":sparkles:": "✨",
    ":heart:": "❤️",
    ":brokenheart:": "💔",
    ":laughing:": "😆",
    ":grimacing:": "😬",
    ":grinning:": "😀",
    ":ok:": "👌",
    ":pepehands:": "🙌",
    ":gold:": "🧈",
  };
  var a33 = new RegExp(":[a-zA-Z0-9_]+:", "g");
  this.qi = function (u7) {
    return u7.replace(a33, function (match) {
      return a32[match] || match;
    });
  };
  this.yM = function (f9) {
    var aB, a34, a35, a36, a37;
    if (f9 < 0) {
      return "-" + this.yM(Math.abs(f9));
    }
    if (f9 < 1000) {
      return f9.toString();
    }
    a34 = Math.floor(Math.log(f9 + 0.5) / Math.log(10)) + 1;
    a35 = Math.floor((a34 - 1) / 3);
    a36 = f9.toString();
    a37 = a36.substring(a34 - 3, a34);
    for (aB = 1; aB < a35; aB++) {
      a37 = a36.substring(a34 - 3 * (aB + 1), a34 - 3 * aB) + " " + a37;
    }
    return a36.substring(0, a34 - 3 * a35) + " " + a37;
  };
  this.a38 = function (gE, a34) {
    return gE.toFixed(a34) + "%";
  };
  this.a39 = function (f9, a3A) {
    return f9.toFixed(bK.pF(Math.floor((a3A === undefined ? 3 : a3A) - Math.log10(Math.max(f9, 1))), 0, 8));
  };
  this.a3B = function (f9, mP, a34) {
    return (f9 * mP).toFixed(a34);
  };
  this.zk = function (username) {
    var eW, el;
    eW = username.indexOf("[");
    if (eW < 0) {
      return null;
    }
    el = username.indexOf("]");
    if (el - eW > 1 && el - eW <= 7 + 1) {
      return username
        .substring(eW + 1, el)
        .toUpperCase()
        .trim();
    }
    return null;
  };
  this.a3C = function (pO) {
    var f0 = Math.floor(0.5 * pO.length + 0.5);
    var mV = Math.floor(0.5 * (f0 - 1));
    for (var aB = 0; aB < mV; aB++) {
      for (var f1 = -1; f1 < 2; f1 += 2) {
        var f2 = f0 + f1 * aB;
        if (pO[f2] === " ") {
          return [this.zg(pO.substring(0, f2)), this.a3D(pO.substring(f2))];
        }
      }
    }
    return [pO.substring(0, f0), pO.substring(f0)];
  };
  this.a3D = function (pO) {
    var eh = pO.length;
    for (var aB = 0; aB < eh; aB++) {
      if (pO[aB] !== " ") {
        return pO.substring(aB);
      }
    }
    return pO;
  };
  this.zg = function (pO) {
    var eh = pO.length;
    for (var aB = eh - 1; aB >= 0; aB--) {
      if (pO[aB] !== " ") {
        return pO.substring(0, aB + 1);
      }
    }
    return pO;
  };
  this.a3E = function (pO, a3F) {
    return pO.split("(")[0] + "(🧈 " + a3F.toFixed(2) + ")";
  };
  this.startsWith = function (pO, a3G) {
    return pO.substring(0, a3G.length) === a3G;
  };
  this.a2N = function (pO, a3G) {
    var eh = pO.length;
    return pO.substring(eh - a3G.length, eh) === a3G;
  };
  this.a3H = function (g, a3I, a3J) {
    var pO = "";
    var eh = g.length - 1;
    a3J = a3J || "";
    for (var aB = 0; aB < eh; aB++) {
      pO += a3J + g[aB] + a3J + ",";
      if ((aB + 1) % a3I === 0) {
        pO += "\n";
      }
    }
    pO += a3J + g[eh] + a3J;
    return pO;
  };
  this.a3K = function (pO, hm, hn) {
    return pO.replace(new RegExp(hm, "g"), hn);
  };
}
function a3L() {
  this.j4 = function (player, eT) {
    if (aI.x2(player, bL.ep(eT), bL.er(eT))) {
      be.df = true;
    }
    aD.kF && this.ir();
  };
  this.ir = function () {
    aD.h2 = false;
    for (var aB = 0; aB < aD.jw; aB++) {
      if (ag.lm[aB] !== 0 && ag.gU[aB] === 0) {
        aI.x8(aB);
      }
    }
    if (ag.lm[aD.eR] !== 0) {
      bc.li[7] = ag.gU[aD.eR];
      bc.li[8] = ag.gi[aD.eR];
      aR.a3M();
      aW.a3N();
      if (!aD.gq) {
        aH.m6(ag.iV[aD.eR] - 5, ag.iX[aD.eR] - 5, ag.iW[aD.eR] + 5, ag.iY[aD.eR] + 5);
      }
      au.dX();
    } else {
      aX.show(false, false, false, true);
    }
    aN.a3O(18);
    af.a3P();
    af.lY(true);
    bO.y.a3Q();
    aL.r0();
    aD.oz = null;
    ba.a3R = true;
    ba.a3S();
    if (aD.kF) {
      a0.a1.setState(1);
    }
  };
}
function by() {
  this.ee = 512;
  this.a2a = 1500000000;
  this.a3T = 1000000000;
  this.a2k = 50000;
  this.a3U = 512;
  this.g0 = 2;
  this.eR = 0;
  this.jw = 0;
  this.z7 = 0;
  this.kH = 0;
  this.z6 = 0;
  this.wD = 512;
  this.wI = 512;
  this.a2Z = 150;
  this.kF = true;
  this.gq = 0;
  this.z4 = 0;
  this.jg = 0;
  this.mG = false;
  this.h2 = 0;
  this.a3V = 0;
  this.hW = false;
  this.wK = 0;
  this.wL = 0;
  this.kD = 0;
  this.xS = 0;
  this.oz = null;
  this.zM = new xM();
  this.a3W = 30;
  this.z1 = 0;
  this.z9 = 0;
  this.zL = 0;
  this.yw = 0;
  this.data = new a3X();
  this.a3Y = new a3Z();
  this.a3a = 0;
  this.gameInit = function () {
    bQ.dX();
    this.z7 = this.jw = this.data.humanCount;
    this.kF = this.z7 === 1 && !lobby
    this.mG = false;
    this.gq = this.data.isReplay;
    this.kD =
      this.data.gameMode === 0
        ? [7, 10, 8][this.data.battleRoyaleMode]
        : this.data.isZombieMode
        ? 9
        : this.data.numberTeams - 2;
    this.xS = this.data.isContest;
    this.hW = this.kD < 7 || this.kD === 9;
    this.kD = this.kD === 10 && this.kF ? 7 : this.kD;
    this.kD = this.kD === 8 && this.jw !== 2 ? 7 : this.kD;
    ay.dX();
    this.wK = this.data.numberTeams;
    if (!this.data.teamPlayerCount) {
      this.wL = 0;
      if (this.hW && this.kF) {
        this.data.teamPlayerCount = new Uint16Array(9);
        this.data.teamPlayerCount.fill(1, 1, this.wK + 1);
        aD.a3Y.a3c();
      }
    } else {
      this.wL = +(this.data.teamPlayerCount[0] > 0);
    }
    // this.a3W = this.jw <= 2 ? 30 : this.jw <= 50 ? 40 : 50;
    this.a3W = this.jw <= 2 ? 30 : 40;
    if (lobby) {
      switch (lobby.settings.spawnTime) {
        case 0:
          this.a3W *= 0.1;
          break;
        case 1:
          this.a3W *= 0.25;
          break;
        case 2:
          this.a3W *= 0.5;
          break;
        case 3:
          this.a3W *= 0.75;
          break;
        case 4:
          this.a3W *= 1;
          break;
        case 5:
          this.a3W *= 1.25;
          break;
        case 6:
          this.a3W *= 1.5;
          break;
        case 7:
          this.a3W *= 1.75;
          break;
        case 8:
          this.a3W *= 2;
          break;
        case 9:
          this.a3W *= 2.5;
          break;
        case 10:
          this.a3W *= 3;
          break;
        case 11:
          this.a3W *= 4;
          break;
        case 12:
          this.a3W *= 5;
          break;
      }
    }
    this.zV = Math.ceil(this.zV);

    this.a3V = this.h2 = this.data.selectableSpawn;
    this.oz = this.h2 ? new a3L() : null;
    if (l.dl === 1) {
      this.wD = this.jw;
    } else {
      this.wD = this.data.playerCount;
    }
    this.wI = this.wD;
    this.kH = this.wD - this.jw;
    this.z6 = 0;
    this.eR = this.data.selectedPlayer;
    this.z1 = 0;
    this.z9 = 0;
    this.zL = 0;
    this.yw = 0;
    ax.a3d(this.data.spawningSeed);
    ae.dX();
    ag.dX();
    ai.a3e();
    b7.o3.ol = [];
    bf.dX();
    this.z4 = 1;
    bc.dX();
    a3f();
    ac.dY();
    ao.a3g();
    ba.dX();
    ac.dX();
    ar.dX();
    bL.dX();
    bM.dX();
    an.dX();
    bU.a3h();
    aE.dX();
    ai.a7();
    aI.dX();
    aJ.dX();
    al.a3i();
    b8.dX();
    bg.dX();
    bO.dX();
    bd.dX();
    a3j.putImageData(a3k, 0, 0);
    aV.dX();
    aS.dX();
    aR.dX();
    bB.dX();
    av.dX();
    aU.dX();
    aW.dX();
    aM.dX();
    aQ.dX();
    aN.dX();
    aP.dX();
    aL.dX();
    aX.dX();
    aF.dX();
    aG.dX();
    fi();
    ad.dX();
    af.dX();
    b3.dX();
    b4.dX();
    b0.dX();
    this.zM.dX();
    be.a3h();
    a3l();
    au.dX();
    be.df = true;
    if (!this.gq && (!this.kF || !this.h2)) {
      a0.a1.setState(1);
    }
    this.a3a = 0;
    if (lobby) {
      lobbyUIHide();
      if (spectator) {
        setTimeout(() => {
          az.o6.oQ(); // Surrender
        }, 1000);
      }
    }
  };
  function a3l() {
    aH.m5();
    if (ag.lm[aD.eR] === 0) {
      aX.show(false, true);
    }
    af.lY(true);
  }
  this.a0P = function (a3m) {
    if (!aD.gq && !b8.ox.a3n.length) {
      b8.ox.a3n = b8.a3o.yX();
    }
    az.y.a3p();
    bp.clear();
    this.z4 = 0;
    be.a3q();
    a0.a1.setState(0);
    aa.setState(0);
    !a3m && bT.eA.show();
    if (this.a3a === 2) {
      // t.y.a3r();
    } else if (this.a3a === 1) {
      t.u(19);
    } else {
      t.u(5, 5);
    }
    checkRejoinCustomLobby();
  };
  this.a3s = function () {
    return this.gq ? aM.gr || !bB.a3t : this.kF && (aM.gr || this.h2);
  };
  this.a3u = function () {
    return this.z4 === 1 && !this.h2;
  };
}
function a3X() {
  this.mapType = 0;
  this.mapProceduralIndex = 2;
  this.mapRealisticIndex = 0;
  this.mapSeed = 14071;
  this.mapName = "";
  this.canvas = null;
  this.passableWater = 1;
  this.passableMountains = 1;
  this.playerCount = 512;
  this.humanCount = 1;
  this.selectedPlayer = 0;
  this.gameMode = 0;
  this.playerMode = 0;
  this.battleRoyaleMode = 0;
  this.numberTeams = 0;
  this.isZombieMode = 0;
  this.isContest = 0;
  this.isReplay = 0;
  this.elo = null;
  this.colorsType = 0;
  this.colorsPersonalized = 1;
  this.colorsData = null;
  this.selectableColor = 1;
  this.teamPlayerCount = null;
  this.neutralBots = 0;
  this.botDifficultyType = 0;
  this.botDifficultyValue = 0;
  this.botDifficultyTeam = null;
  this.botDifficultyData = null;
  this.spawningType = 0;
  this.spawningSeed = 0;
  this.spawningData = null;
  this.selectableSpawn = 1;
  this.playerNamesType = 0;
  this.playerNamesData = null;
  this.selectableName = 1;
  this.aIncomeType = 0;
  this.aIncomeValue = 0;
  this.aIncomeData = null;
  this.tIncomeType = 0;
  this.tIncomeValue = 32;
  this.tIncomeData = null;
  this.iIncomeType = 0;
  this.iIncomeValue = 64;
  this.iIncomeData = null;
  this.sResourcesType = 0;
  this.sResourcesValue = 0;
  this.sResourcesData = null;
}
function a3Z() {
  this.a3c = function () {
    var a3v = aD.data;
    b9.pq.a1m(a3v.teamPlayerCount, a3v.playerCount);
    a3v.numberTeams = b9.pq.a1d(a3v.teamPlayerCount, 0);
    if (a3v.teamPlayerCount[0] && a3v.teamPlayerCount[7]) {
      a3v.teamPlayerCount[7] = 0;
      this.a3c();
    }
  };
  this.a3w = function () {
    var a3v = aD.data;
    if (a3v.mapType < 2) {
      bR.a7(bR.a3x(a3v), a3v.mapSeed);
    } else {
      bR.a3y(a3v.canvas);
    }
  };
  this.a3z = function () {
    var a3v = aD.data;
    if (!a3v.colorsData) {
      a3v.colorsData = new Uint32Array(1);
    }
    if (a3v.selectableColor) {
      a3v.colorsData[0] = bi.y.uk();
    }
    if (a3v.selectableName) {
      if (!a3v.playerNamesData) {
        a3v.playerNamesData = new Array(1);
      }
      a3v.playerNamesData[0] = bi.eE.data[122].value;
    }
  };
  this.a40 = function () {
    aD.data = new a3X();
    aD.data.aIncomeType = 2;
    aD.data.aIncomeData = new Uint8Array(aD.ee);
    aD.data.aIncomeData[0] = 64;
  };
}
function dV() {
  var a41 = [];
  this.xZ = function (pO, oK) {
    var a42 = {
      eG: aW.a43(),
      pO: pO,
      oK: oK,
    };
    a41.push(a42);
    if (t.ry === 30) {
      t.a44().xZ(a42);
    }
  };
  this.clear = function () {
    a41 = [];
    if (t.a45(30)) {
      t.a45(30).clear();
    }
  };
  this.a46 = function () {
    return a41;
  };
}
function dP() {
  this.y5 = 0;
  this.gap = 0;
  this.ra = 0;
  this.po = 0;
  this.dX = function () {
    this.resize();
  };
  this.resize = function () {
    this.y5 = 0.0022 * b9.ph.pi(0.5) * h.pj;
    this.ra = this.y5 / h.k;
    this.gap = Math.max(Math.floor((a0.a1.r7() ? 0.0114 : 0.01296) * h.pj), 2);
    this.po = this.gap / h.k;
  };
}
function dO() {
  this.a47 = function () {
    return a0.a1.r7() ? 2 : 1;
  };
}
function c9() {
  var qH;
  var eo, eq, a48;
  var a49, a4A;
  var eG;
  var player;
  var a4B;
  var gap;
  var zoom;
  var od;
  var a4C;
  this.a4D = function () {
    a4E();
  };
  this.a4F = function () {
    return qH;
  };
  this.dX = function () {
    od = [];
    eo = eq = eG = 0;
    a49 = a4A = -1000;
    this.resize();
  };
  this.resize = function () {
    a48 = Math.floor((a0.a1.r7() ? 0.075 : 0.0468) * h.pj);
    zoom = a48 / ab.get(3).height;
    gap = Math.floor(a48 / 3);
  };
  function a4E() {
    var aB, f1;
    var eh = 9;
    var a4G = [bA.nD, bA.nR, bA.ml, bA.nl, bA.ne];
    qH = new Array(eh);
    for (aB = 0; aB < eh; aB++) {
      qH[aB] = {
        id: aB,
        hO: false,
        kg: 0,
        canvas: [],
        eo: 0,
        eq: 0,
      };
    }
    qH[0].colors = [0, 1, 2, 3];
    qH[0].eo = 0;
    qH[0].eq = 0;
    qH[1].colors = [0, 1, 4];
    qH[1].eo = 1;
    qH[1].eq = 0;
    qH[2].colors = [0, 2];
    qH[2].eo = -1;
    qH[2].eq = 0;
    qH[3].colors = [0];
    qH[3].eo = 0;
    qH[3].eq = 0;
    qH[4].colors = [0, 2];
    qH[4].eo = 1;
    qH[4].eq = 1;
    qH[5].colors = [3];
    qH[5].eo = 0;
    qH[5].eq = -1;
    qH[6].id = 20;
    qH[6].colors = [0];
    qH[6].eo = 1;
    qH[6].eq = -1;
    qH[7].id = 21;
    qH[7].colors = [0];
    qH[7].eo = 0;
    qH[7].eq = 1;
    qH[8].id = 16;
    qH[8].colors = [0];
    qH[8].eo = 0;
    qH[8].eq = 0;
    for (aB = 0; aB < eh; aB++) {
      for (f1 = 0; f1 < qH[aB].colors.length; f1++) {
        qH[aB].canvas.push(vW(qH[aB].id, a4G[qH[aB].colors[f1]]));
      }
    }
  }
  function vW(id, a1s) {
    if (id < 20) {
      return b9.canvas.xr(ab.get(3), id, a1s);
    }
    var hY = ab.get(3).height;
    var a1t = b9.ph.vW(hY, hY);
    var he = b9.ph.getContext(a1t);
    if (id === 20) {
      he.drawImage(ab.get(18), 0, 0);
    } else if (id === 21) {
      aj.vh.y6(aj.qz.xv + aj.qz.yC, he, 0, 0, hY);
    }
    return a1t;
  }
  this.a0s = function (kz, l0) {
    if (!this.hO()) {
      return false;
    }
    be.df = true;
    if (aj.vh.gu(kz, l0, player)) {
      return true;
    }
    var f1 = gu(kz, l0);
    this.r0();
    if (f1 === 2) {
      aj.vh.hO = true;
    }
    return f1 > 0;
  };
  this.a0u = function (kz, l0) {
    if (this.hO()) {
      return;
    }
    a49 = kz;
    a4A = l0;
    eG = performance.now();
  };
  function gu(kz, l0) {
    a49 = -1000;
    a4A = -1000;
    var a4H = a4I(kz, l0);
    var a4J = a4K(a4H);
    if (a4J === -1) {
      return 0;
    }
    if (qH[a4J].colors[qH[a4J].kg] === 1) {
      return 1;
    }
    if (a4J === 5) {
      a4L();
      if (a4M(player)) {
        return 1;
      }
      od.push(player);
      if (od.length > 16) {
        od.shift();
      }
      return 1;
    }
    if (a4J === 6) {
      for (var aB = od.length - 1; aB >= 0; aB--) {
        if (ag.lm[od[aB]] === 0) {
          od.splice(aB, 1);
        }
      }
      if (od.length > 0) {
        if (b4.a4N(1, od, true)) {
          b7.g2.oc(od, player);
        }
        od = [];
      }
      return 1;
    }
    if (a4J === 2) {
      b7.h3.o9(aR.h8(), player);
      return 1;
    }
    if (a4J === 3) {
      if (aD.h2) {
        b7.h3.h4(a4B);
      }
      return 1;
    }
    if (a4J === 0) {
      if (qH[0].kg === 0) {
        if (aD.a3V && aW.a43() < 350) {
          return 1;
        }
        bU.a4O(4);
        b7.h3.hE(aR.h8(), player);
      } else {
        b0.hG(player, aR.h8());
      }
      return 1;
    }
    if (a4J === 1) {
      bU.a4O(1);
      b7.h3.hC(aR.h8(), a4B);
      return 1;
    }
    if (a4J === 7) {
      bU.a4O(0);
      aj.vh.show(kz, l0);
      return 2;
    }
    if (a4J === 4) {
      if (b4.a4N(0, [player], true)) {
        b7.g2.oZ(player);
      }
      return 1;
    }
    if (a4J === 8) {
      b7.h3.h7(aR.h8(), a4B, player);
      return 1;
    }
    return 0;
  }
  this.click = function (kz, l0, a11) {
    var gx = bL.gy(kz);
    var gz = bL.h0(l0);
    var eT = bL.f5(gx, gz);
    var eL = bL.eX(eT);
    if (!bL.h1(gx, gz)) {
      return false;
    }
    var a4P = (a0.a1.r7() ? 0.025 : 0.0144) * h.pj;
    var dm = performance.now();
    if (Math.abs(kz - a49) > a4P || Math.abs(l0 - a4A) > a4P || dm > eG + 500) {
      return false;
    }
    eG = dm;
    if (a11) {
      a4Q(kz, l0, eL);
    }
    if (aM.gr || this.hO() || !b9.g2.gt(aD.eR) || aD.gq) {
      this.r0();
      return false;
    }
    if (aD.h2) {
      if (!a11) {
        if (!ac.ec(eL)) {
          return false;
        }
        a4B = eT;
        qH[3].hO = true;
      }
      return this.a4R(kz, l0);
    }
    if (bM.hA.oE(eT)) {
      if (!a11) {
        bM.a4S.a4T = -1;
      } else {
        aN.a4U(55, 0);
      }
      return this.a4R(kz, l0);
    }
    if (a11) {
      return false;
    }
    if (bM.hA.a4V(kz, l0)) {
      return this.a4R(kz, l0);
    }
    if (aD.z4 === 2) {
      if (!ac.gG(eL)) {
        return this.a4R(kz, l0);
      }
      player = ac.eZ(eL);
      if (!b9.g2.jK(player)) {
        qH[0].hO = true;
        qH[0].kg = 1;
        qH[7].hO = true;
        return this.a4R(kz, l0);
      }
      return this.a4R(kz, l0);
    }
    if (ac.em(eL)) {
      a4B = am.eI.eK(eL);
      if (a4B) {
        var eW = bL.eX(a4B);
        qH[8].hO = true;
        player = ac.eY(eW) ? aD.ee : ac.eZ(eW);
      }
      return this.a4R(kz, l0);
    }
    a4B = eT;
    if (bM.hA.hB(aD.eR, eT)) {
      qH[0].hO = true;
      qH[0].kg = 1;
      qH[1].hO = true;
      qH[1].kg = bN.fI[2] ? 0 : 2;
    }
    if (ac.h9(eL)) {
      return this.a4R(kz, l0);
    }
    if (ac.eY(eL)) {
      player = aD.ee;
      if (hD(aD.eR)) {
        qH[0].hO = true;
        qH[0].kg = 0;
      } else if (hF(aD.eR, player)) {
        qH[0].hO = true;
        qH[0].kg = 3;
      }
      return this.a4R(kz, l0);
    }
    player = ac.eZ(eL);
    if (player === aD.eR) {
      qH[0].hO = true;
      qH[0].kg = 1;
      qH[7].hO = true;
      return this.a4R(kz, l0);
    }
    qH[0].kg = 1;
    qH[5].hO = a4W(player);
    qH[7].hO = !b9.g2.jK(player);
    if (ea(player, aD.eR)) {
      qH[4].hO = !b9.g2.jK(player) && !af.a4X(player) && b4.a4N(0, [player], false);
      qH[6].hO = a4Y(player);
      if (hH(aD.eR, player)) {
        qH[0].kg = 0;
        qH[0].hO = true;
      } else if (hF(aD.eR, player)) {
        qH[0].kg = 3;
        qH[0].hO = true;
      }
      qH[0].hO = this.a4Z();
      return this.a4R(kz, l0);
    }
    qH[2].hO = true;
    qH[0].hO = true;
    return this.a4R(kz, l0);
  };
  function a4Q(kz, l0, eL) {
    var a4a;
    if (ac.ec(eL)) {
      aN.a4b(eL);
      return;
    }
    a4a = bM.hA.a4c(kz, l0);
    if (a4a === -1) {
      aN.a4b(eL);
    } else {
      aN.a4d(a4a);
    }
  }
  function a4L() {
    var dm = performance.now();
    if (dm > a4C + 4000) {
      od = [];
    }
    a4C = dm;
  }
  function a4W(player) {
    return !b9.g2.jK(player) && !a4M(player) && b4.a4N(1, [player], false);
  }
  function a4Y(player) {
    if (od.length === 0) {
      return false;
    }
    if (performance.now() > a4C + 4000) {
      od = [];
      return false;
    }
    return !a4M(player) && !a4e(player);
  }
  function a4M(player) {
    var aB;
    for (aB = od.length - 1; aB >= 0; aB--) {
      if (od[aB] === player) {
        return true;
      }
    }
    return false;
  }
  function a4e(player) {
    var aB;
    if (!aD.hW) {
      return false;
    }
    for (aB = od.length - 1; aB >= 0; aB--) {
      if (!ea(player, od[aB])) {
        return true;
      }
    }
    return false;
  }
  this.a4R = function (kz, l0) {
    eo = kz - Math.floor(a48 / 2);
    eq = l0 - Math.floor(a48 / 2);
    if (this.hO()) {
      return true;
    }
    return false;
  };
  this.a0Y = function (kz, l0) {
    if (!this.hO()) {
      return false;
    }
    if (aj.vh.hO) {
      if (aj.vh.y4(kz, l0)) {
        return false;
      }
      aj.vh.hO = false;
      be.df = true;
      return true;
    }
    return a4f(this, kz, l0);
  };
  function a4f(rL, kz, l0) {
    var e2 = a4I(kz, l0);
    if (a4K(e2) >= 0) {
      return false;
    }
    if ((e2 === 1 || e2 === 6) && a4K(2) >= 0) {
      return false;
    }
    if ((e2 === 6 || e2 === 9) && a4K(10) >= 0) {
      return false;
    }
    rL.r0();
    be.df = true;
    return true;
  }
  function a4K(a4H) {
    var aB, eh;
    if (a4H === -1) {
      return -1;
    }
    eh = qH.length;
    for (aB = 0; aB < eh; aB++) {
      if (qH[aB].hO && qH[aB].eo + 1 === a4H % 4 && qH[aB].eq + 1 === a4H >> 2) {
        return aB;
      }
    }
    return -1;
  }
  this.r0 = function () {
    for (var aB = qH.length - 1; aB >= 0; aB--) {
      qH[aB].hO = false;
      qH[aB].kg = 0;
    }
    aj.vh.hO = false;
  };
  this.hO = function () {
    return this.a4Z() || aj.vh.hO;
  };
  this.a4Z = function () {
    var aB;
    var eh = qH.length;
    for (aB = 0; aB < eh; aB++) {
      if (qH[aB].hO) {
        return true;
      }
    }
    return false;
  };
  function a4I(kz, l0) {
    var wF, wG;
    var sM = gap / 2;
    if (kz < eo - a48 - 3 * sM || kz > eo + 3 * a48 + 5 * sM || l0 < eq - a48 - 3 * sM || l0 > eq + 2 * a48 + 3 * sM) {
      return -1;
    }
    wF = kz < eo - sM ? 0 : kz < eo + a48 + sM ? 1 : kz < eo + 2 * a48 + 3 * sM ? 2 : 3;
    wG = l0 < eq - sM ? 0 : l0 < eq + a48 + sM ? 1 : 2;
    return wG * 4 + wF;
  }
  this.tq = function () {
    if (!this.hO()) {
      return;
    }
    if (aj.vh.hO) {
      aj.vh.tq();
      return;
    }
    a4g();
  };
  function a4g() {
    var aB;
    var he = tr;
    var f1 = qH;
    var eh = f1.length;
    var a4h = (a48 + gap) / zoom;
    he.imageSmoothingEnabled = true;
    he.setTransform(zoom, 0, 0, zoom, eo, eq);
    for (aB = 0; aB < eh; aB++) {
      if (f1[aB].hO) {
        tr.drawImage(f1[aB].canvas[f1[aB].kg], f1[aB].eo * a4h, f1[aB].eq * a4h);
      }
    }
    he.imageSmoothingEnabled = false;
    he.setTransform(1, 0, 0, 1, 0, 0);
  }
}
function cA() {
  var j;
  var canvas;
  var a4i;
  var a4j;
  var a4k;
  var a4l = -1;
  this.gr = false;
  this.dX = function () {
    a4j = -1;
    this.gr = false;
    a4k = a0.a1.r7() ? 1.2 : 0.6;
    this.resize();
  };
  this.resize = function () {
    j = aR.j;
    canvas = document.createElement(S[4]);
    canvas.width = j;
    canvas.height = j;
    a4i = b9.ph.rY(1, (a0.a1.r7() ? 0.5 : 0.45) * j);
    a4m();
  };
  function a4m() {
    var a4n;
    var xG = canvas.getContext("2d", {
      alpha: true,
    });
    xG.clearRect(0, 0, j, j);
    xG.fillStyle = bA.mj;
    xG.fillRect(0, 0, j, j);
    if (a4j === 0) {
      xG.fillStyle = bA.mo;
      xG.fillRect(0, 0, j, j);
    }
    xG.fillStyle = bA.mn;
    xG.fillRect(0, 0, j, 1);
    xG.fillRect(0, 0, 1, j);
    xG.fillRect(0, j - 1, j, 1);
    xG.fillRect(j - 1, 0, 1, j);
    a4n = (0.9 * j) / ab.get(0).width;
    xG.imageSmoothingEnabled = true;
    xG.setTransform(
      a4n,
      0,
      0,
      a4n,
      Math.floor((j - a4n * ab.get(0).width) / 2),
      Math.floor((j - a4n * ab.get(0).height) / 2)
    );
    xG.drawImage(ab.get(0), 0, 0);
    xG.setTransform(1, 0, 0, 1, 0, 0);
  }
  this.a19 = function () {
    this.gr = !this.gr;
    if (!this.gr) {
      a4j = -1;
      a4m();
      if (aD.kF && aD.z4 === 1 && !aD.h2 && !aD.gq) {
        a0.a1.setState(1);
      }
    } else {
      bB.a18(false);
      aD.gq && bB.a3t && bB.a1A(true);
      this.a4o();
    }
    be.df = true;
  };
  this.a4o = function () {
    if ((aD.kF || aD.gq) && aD.z4 === 1) {
      aV.lY(true);
      if (!aD.h2) {
        setTimeout(function () {
          ba.zF();
        }, 0);
      }
      a0.a1.setState(0);
    }
  };
  this.gu = function (kz, l0) {
    a4l = a4p(kz, l0);
    if (a4l >= 0) {
      return a4l;
    }
    a4q();
    return a4l;
  };
  function a4q() {
    if (aM.gr && !aD.kF && !aD.gq && !bd.hO) {
      aM.a19();
    }
  }
  this.a0Y = function (kz, l0) {
    var kg = a4p(kz, l0);
    if (kg === a4j) {
      return;
    }
    a4j = kg;
    if (!this.gr) {
      a4m();
    }
    be.df = true;
    return;
  };
  this.a0Z = function (kz, l0) {
    var kg = a4p(kz, l0);
    if (kg === -1) {
      return false;
    }
    if (a4l !== kg) {
      return false;
    }
    if (this.gr) {
      if (aD.mG) {
        if (kg >= 0) {
          bB.a18(false);
        }
        return !aD.gq;
      }
      if (kg === 0) {
        aD.a0P();
        return true;
      }
      if (kg === 1) {
        this.a19();
        return true;
      }
      if (kg === 2) {
        t.u(1, 0);
        return true;
      }
      return true;
    }
    if (kg === 9) {
      this.a19();
      return true;
    }
    return false;
  };
  function a4p(kz, l0) {
    if (!aM.gr) {
      if (kz <= j + bb.gap && l0 >= aR.eq) {
        return 9;
      }
      return -1;
    }
    if (kz <= 4 * j + bb.gap) {
      if (l0 >= aR.eq) {
        return 0;
      }
      if (l0 >= aR.eq - j - a4k * bb.gap) {
        return 2;
      }
    } else if (kz <= 7 * j + bb.gap && l0 >= aR.eq - j - a4k * bb.gap) {
      return 1;
    }
    return -1;
  }
  this.tq = function () {
    if (this.gr) {
      a4r();
      a4s();
      tr.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      tr.drawImage(canvas, bb.gap, aR.eq);
    }
  };
  this.pI = function (player) {
    return ag.lm[player] !== 0 && aD.z4 !== 2 && !b9.g2.jK(player);
  };
  function a4r() {
    var eh;
    var i = Math.floor(5.5 * j);
    tr.setTransform(1, 0, 0, 1, bb.gap, aR.eq);
    tr.fillStyle = bA.mj;
    tr.fillRect(0, 0, i, j);
    if (a4j === 0) {
      tr.fillStyle = bA.mo;
      tr.fillRect(0, 0, 4 * j, j);
    } else if (a4j === 1) {
      tr.fillStyle = bA.mo;
      tr.fillRect(4 * j, 0, Math.floor(1.5 * j), j);
    }
    tr.fillStyle = bA.mn;
    tr.fillRect(0, 0, i, 1);
    tr.fillRect(0, 0, 1, j);
    tr.fillRect(4 * j, 0, 1, j);
    tr.fillRect(0, j - 1, i, 1);
    tr.fillRect(i - 1, 0, 1, j);
    tr.font = a4i;
    b9.ph.textBaseline(tr, 1);
    b9.ph.textAlign(tr, 1);
    tr.fillText(L(42), 2 * j, 0.54 * j);
    eh = 0.4 * j;
    aM.a4t(bb.gap + 4 * j + (1.5 * j - eh) / 2, aR.eq + 0.3 * j, eh);
  }
  function a4s() {
    a4u(1);
  }
  function a4u(aB) {
    tr.setTransform(1, 0, 0, 1, bb.gap, aR.eq - aB * a4k * bb.gap - aB * j);
    tr.fillStyle = bA.mj;
    tr.fillRect(0, 0, 4 * j, j);
    if (a4j === aB + 1) {
      tr.fillStyle = bA.mo;
      tr.fillRect(0, 0, 4 * j, j);
    }
    tr.fillStyle = bA.mn;
    tr.fillRect(0, 0, 4 * j, 1);
    tr.fillRect(0, 0, 1, j);
    tr.fillRect(4 * j, 0, 1, j);
    tr.fillRect(0, j - 1, 4 * j, 1);
    tr.fillText(aB === 0 ? L(42) : L(43), 2 * j, 0.54 * j);
  }
  this.a4t = function (eo, eq, eh) {
    tr.setTransform(1, 0, 0, 1, eo, eq);
    tr.lineWidth = bb.y5;
    tr.strokeStyle = bA.mn;
    tr.beginPath();
    tr.moveTo(0, 0);
    tr.lineTo(eh, eh);
    tr.moveTo(0, eh);
    tr.lineTo(eh, 0);
    tr.stroke();
  };
}
function cB() {
  var a4v;
  var j;
  var a4w;
  var a4x;
  var a4y;
  var a4z;
  var a50;
  var a51;
  var a52;
  this.a53 = "";
  this.dX = function () {
    a51 = 0;
    a50 = !a0.a1.r7() ? 12 : 7;
    a4z = {
      ys: [0, 0, 0],
      a54: [0, 0, 0],
      e9: [220, 180, 180],
      tp: [0, 0, 0],
      f2: [0, 0, 0],
    };
    a4v = [];
    this.resize();
    if (aD.h2) {
      this.zG(0, 18);
    }
    a55();
    a56(this);
    if (aD.xS) {
      a57(340, L(44), 6, 0, a58(255, 200, 0), bA.mk, -1, false);
    }
  };
  function a56(self) {
    if (self.a53.length === 0) {
      return;
    }
    a57(200, self.a53, 0, 0, bA.mn, bA.mk, -1, false);
    self.a53 = "";
  }
  this.resize = function () {
    var a59, aB;
    j = Math.floor((a0.a1.r7() ? 0.031 : 0.0249) * h.pj);
    j = j < 10 ? 10 : j;
    this.fontSize = Math.floor((2 * j) / 3);
    this.a4i = b9.ph.rY(1, this.fontSize);
    a4w = bb.gap;
    a4x = Math.floor(j / 5);
    if (a4v.length > 0) {
      a59 = a4v;
      a4v = [];
      for (aB = a59.length - 1; aB >= 0; aB--) {
        a57(
          a59[aB].eG,
          a59[aB].pO,
          a59[aB].id,
          a59[aB].player,
          a59[aB].a5A,
          a59[aB].a5B,
          a59[aB].vp,
          a59[aB].a5C,
          a59[aB].a5D,
          a59[aB].a5E,
          true
        );
      }
    }
    this.a5F();
  };
  this.a5F = function () {
    a52 = document.createElement(S[4]);
    var pO = L(45);
    a4y = aQ.measureText(pO, this.a4i) + 5 * a4x;
    a52.height = j;
    a52.width = a4y;
    var xG = a52.getContext("2d", {
      alpha: true,
    });
    xG.font = this.a4i;
    b9.ph.textBaseline(xG, 1);
    b9.ph.textAlign(xG, 1);
    xG.clearRect(0, 0, a4y, j);
    xG.fillStyle = bA.nA;
    xG.fillRect(0, 0, a4y, j);
    xG.fillStyle = bA.mn;
    xG.fillText(pO, Math.floor(a4y / 2), Math.floor(j / 2));
  };
  this.a5G = function () {
    if (av.hO) {
      return av.i;
    }
    var eh = a4v.length;
    if (eh === 0) {
      return 0;
    } else if (eh === 1) {
      return a4v[0].a5H;
    }
    return a5I(a4v[0].a5H, a4v[1].a5H);
  };
  this.a5J = function () {
    var eh = a4v.length;
    if (av.hO) {
      if (eh) {
        return a5I(av.i, a4v[0].a5H);
      }
      return av.i;
    }
    if (eh === 0) {
      return 0;
    } else if (eh === 1) {
      return a4v[0].a5H;
    } else if (eh === 2) {
      return a5I(a4v[0].a5H, a4v[1].a5H);
    }
    return a5I(a5I(a4v[0].a5H, a4v[1].a5H), a4v[2].a5H);
  };
  function xC() {
    if (aR.a5K(aN.a5G())) {
      if (av.hO) {
        return aR.eq - aR.j - 2 * a4w;
      } else {
        return aR.eq - a4w;
      }
    } else if (bB.a5K(aN.a5J())) {
      if (av.hO) {
        return bB.xC() - aR.j - 2 * a4w;
      } else {
        return bB.xC() - a4w;
      }
    } else if (av.hO) {
      return h.j - aR.j - (bj.a47() + 1) * a4w;
    }
    return h.j - bj.a47() * bb.gap;
  }
  this.gu = function (eo, eq) {
    var aB, a5L, dm;
    var a5M = xC();
    for (aB = a4v.length - 1; aB >= 0; aB--) {
      a5L = a5M - (aB + 1) * j;
      if (eq >= a5L && eq < a5L + j) {
        if (a4v[aB].id === 50) {
          if (eo >= h.i - a4y - a4w - a4v[aB].i) {
            if (eo >= h.i - a4y - a4w) {
              b7.g2.oZ(a4v[aB].player);
            } else {
              aH.m7(a4v[aB].player, 800, false, 0);
            }
            return true;
          }
          return false;
        }
        if (eo >= h.i - a4v[aB].i - a4w) {
          if (a4v[aB].id === 736) {
            var a5N = a4v[aB].pO.split(" ");
            window.open(a5N[a5N.length - 1], S[97]);
          } else if (a4v[aB].a5C) {
            if (a4v[aB].a5E && a4v[aB].a5E.f0) {
              var eT = a4v[aB].a5E.eT;
              var mD = bL.ep(eT) - 10;
              var mE = bL.er(eT) - 10;
              aH.m6(mD, mE, mD + 19, mE + 19);
            } else if (a4v[aB].a5E && a4v[aB].a5E.f1) {
              aH.m8(a4v[aB].player, a4v[aB].a5E.m9);
            } else {
              aH.m7(a4v[aB].player, 800, false, 0);
              if (a4v[aB].vp >= 0) {
                dm = a4v[aB].vp;
                a4v[aB].vp = a4v[aB].player;
                a4v[aB].player = dm;
              }
            }
          }
          return true;
        }
        return false;
      }
    }
    return false;
  };
  this.xZ = function (dm, pO, id, gE, a5A, a5B, vp, a5C, a5D, a5E) {
    a57(dm, pO, id, gE, a5A, a5B, vp, a5C, a5D, a5E);
  };
  this.a5O = function (r) {
    a57(300, r, 252, 0, bA.mn, bA.mk, -1, false);
  };
  function a57(dm, pO, id, gE, a5A, a5B, vp, a5C, a5D, a5E, a5P) {
    var aB, xG, a5H, a1t, pZ;
    var a5Q = a5D !== undefined;
    var i = Math.floor(aQ.measureText(pO, aN.a4i) + 1.5 * a4x + (a5Q ? j : 1.5 * a4x));
    be.df = true;
    if (!a5P) {
      bp.xZ(pO, a5D);
    }
    if (i + 2 * a4w + aR.j > h.i && !a5Q && id !== 50 && pO.length > 20) {
      var g = b9.qh.a3C(pO);
      a57(dm, g[0], id, gE, a5A, a5B, vp, a5C, a5D, a5E, true);
      a57(dm, g[1], id, gE, a5A, a5B, vp, a5C, a5D, a5E, true);
      return;
    }
    a5H = i + (id === 50 ? a4y : 0);
    a1t = document.createElement(S[4]);
    a1t.width = i;
    a1t.height = j;
    xG = a1t.getContext("2d", {
      alpha: true,
    });
    xG.font = aN.a4i;
    b9.ph.textBaseline(xG, 1);
    b9.ph.textAlign(xG, 0);
    xG.clearRect(0, 0, i, j);
    xG.fillStyle = a5B;
    xG.fillRect(0, 0, i, j);
    xG.fillStyle = a5A;
    xG.fillText(pO, Math.floor(1.5 * a4x), Math.floor(j / 2));
    if (a5Q) {
      xG.imageSmoothingEnabled = true;
      aj.vh.y6(a5D, xG, i - j, 0, j);
    }
    pZ = {
      eG: dm,
      pO: pO,
      id: id,
      player: gE,
      canvas: a1t,
      a5A: a5A,
      a5B: a5B,
      i: i,
      a5H: a5H,
      vp: vp,
      a5C: a5C,
      a5D: a5D,
      a5E: a5E,
    };
    if (pZ.eG === 0 || (a4v.length > 0 && a4v[0].eG > 0)) {
      a4v.unshift(pZ);
    } else {
      for (aB = 1; aB < a4v.length; aB++) {
        if (a4v[aB].eG > 0) {
          a4v.splice(aB, 0, pZ);
          return;
        }
      }
      a4v.push(pZ);
    }
  }
  this.a3O = function (id) {
    for (var aB = a4v.length - 1; aB >= 0; aB--) {
      if (a4v[aB].id === id) {
        a4v[aB].eG = 1;
      }
    }
  };
  this.zG = function (player, id) {
    if (id === 0) {
      aQ.j4(player, 0);
      a5R(423, 0);
      a57(160, L(46, [ag.xa[player]]), 423, player, S[78], bA.mk, -1, false);
    } else if (id === 1) {
      a5S(50, aD.ee);
      aQ.j4(player, 1);
      a57(360, L(47, [ag.xa[player]]), 0, player, bA.nT, bA.mk, -1, true);
      aH.m7(player, 2700, false, 0);
    } else if (id === 2) {
      aQ.j4(player, 2);
      a57(0, L(48), 0, player, "rgb(10,255,255)", bA.mk, -1, true);
      aH.m7(player, 2700, false, 0);
    } else if (id === 3) {
      aQ.j4(player, 2);
      a57(0, L(49, [ag.xa[player]]), 0, player, bA.mn, bA.mk, -1, true);
      aH.m7(player, 2700, false, 0);
    } else if (id === 4) {
      this.a5T(1, player, player);
    } else if (id === 5) {
      if (ag.a2P[player] === 2 || b9.g2.jK(aD.eR)) {
        return;
      }
      a5U(1, 5);
      if (af.a5V(player)) {
        a57(180, L(50, [ag.xa[player]]), 1, player, a58(255, 200, 180), bA.mk, -1, true);
      } else {
        a5R(573, 0);
        a57(180, L(51, [ag.xa[player]]), 573, player, bA.nT, bA.mk, -1, true);
      }
    } else if (id === 18) {
      a57(255, L(52), 18, 0, bA.mn, bA.mk, -1, false);
    } else if (id === 21) {
      a57(220, L(53), id, 0, bA.mn, bA.mk, -1, false);
    } else if (id === 22) {
      this.a5T(2, player, player);
    } else if (id === 59) {
      a57(0, L(54), id, 0, bA.nk, bA.mk, 0, false);
    }
  };
  this.a0K = function (r) {
    a57(200, L(55, [r]), 94, 0, bA.mn, bA.nP, -1, false);
  };
  this.zS = function (a5W) {
    if (!ag.gU[a5W]) {
      return;
    }
    aQ.j4(a5W, 2);
    if (aD.jw < 100) {
      a57(0, L(49, [ag.xa[a5W]]), 3, a5W, bA.mn, bA.mk, -1, true);
    } else {
      a57(0, L(56, [ag.xa[a5W]]), 3, a5W, bA.mn, bA.mk, -1, true);
    }
  };
  this.a4b = function (eL) {
    var pO;
    var a5X = "(" + bL.ep(eL >> 2) + ", " + bL.er(eL >> 2) + ")";
    var a5C = false;
    var player = 0;
    if (ac.ec(eL)) {
      if (ac.eY(eL)) {
        a5X = L(57, [a5X]);
      } else {
        player = ac.eZ(eL);
        pO = L(58, [b9.xG.a25(ag.zh[player], b9.ph.rY(0, 10), 150)]) + S[13];
        pO += L(59, [b9.qh.yM(ag.gi[player])]) + S[13];
        pO += L(60, [b9.qh.yM(ag.gU[player])]) + S[13];
        if (aD.hW) {
          var a5Y = bf.zP[bf.kI[bf.ef[player]]];
          pO += L(61) + ": " + a5Y + S[13];
        }
        if (b9.g2.jK(player)) {
          pO += L(62) + ": " + aE.k7[aE.hL[player]] + S[13];
        }
        pO += L(63, [player]) + S[13];
        pO += L(64, [a5X]);
        a5X = pO;
        a5C = true;
      }
    } else if (ac.em(eL)) {
      a5X = L(65, [a5X]) + "   #" + ac.eP(eL);
    } else {
      a5X = L(66, [a5X]);
    }
    be.df = true;
    a5R(55, 0);
    a57(220, a5X, 55, player, bA.mn, bA.mk, -1, a5C, undefined, undefined, true);
  };
  this.a4d = function (a5Z) {
    var ke = bM.y;
    var player = ke.a5a[a5Z] >> 3;
    be.df = true;
    a5R(55, 0);
    var pO = L(67, [ag.xa[player]]) + S[13];
    pO += L(59, [ke.a5b[a5Z]]);
    a57(220, pO, 55, player, bA.mn, bA.mk, -1, true);
  };
  this.oJ = function (o6, a5c, oK) {
    if (o6 === aD.eR) {
      a57(175, " " + L(68, [ag.xa[a5c]]) + ": ", 1001, a5c, a58(200, 255, 210), bA.mk, -1, true, oK);
    } else {
      this.a5d(o6, oK);
    }
  };
  this.a5d = function (o6, oK) {
    a5R(1000, 0);
    a57(175, ag.xa[o6] + ": ", 1000, o6, bA.mn, "rgba(5,60,25,0.9)", -1, true, oK);
  };
  function a5U(id, lh) {
    var aB;
    var a5e = 0;
    var eh = a4v.length;
    for (aB = 0; aB < eh; aB++) {
      if (a4v[aB].id === id) {
        a5e++;
        if (a5e >= lh) {
          a4v.splice(aB, 1);
          return;
        }
      }
    }
  }
  this.zR = function () {
    var r;
    if (aD.z9) {
      r = L(69);
      aQ.zQ(L(70), 2, 1, 12);
      a57(0, r, 40, 0, S[78], bA.mk, -1, false);
    } else {
      r = L(71);
      aQ.zQ(L(72), 2, 0, 16);
      a57(0, r, 41, 0, bA.mn, bA.mk, -1, false);
    }
  };
  this.xN = function () {
    var g9 = ag.xa;
    var ek = aD.data;
    a57(
      300,
      g9[0] + " [" + aD.zM.xU(ek.elo[0]) + "] vs " + g9[1] + " [" + aD.zM.xU(ek.elo[1]) + "]",
      65,
      0,
      bA.me,
      "rgba(100,255,255,0.75)",
      -1,
      false
    );
  };
  this.a5f = function (r) {
    a57(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, false);
  };
  this.a5g = function (a5h) {
    a57(0, a5h ? L(73) : L(74), 247, 0, bA.nj, bA.mk, -1, false);
  };
  this.xW = function (xT, xV, a5i) {
    var ek = aD.data;
    var g9 = ag.xa;
    a57(0, g9[0] + ": " + aD.zM.xU(ek.elo[0]) + S[122] + xT, 66, 0, bA.mn, a5i[0], -1, false);
    a57(0, g9[1] + ": " + aD.zM.xU(ek.elo[1]) + S[122] + xV, 66, 1, bA.mn, a5i[1], -1, false);
  };
  this.oa = function (player, id) {
    if (id === 0) {
      if (a5S(50, player)) {
        a57(128, L(75, [ag.xa[player]]), 52, player, a58(180, 255, 180), bA.mk, -1, true);
        af.pG(player, 2, 255);
      } else {
        a57(384, L(76, [ag.xa[player]]), 51, player, a58(210, 210, 255), bA.mk, -1, true);
      }
    } else {
      if (a5S(51, player)) {
        a57(128, L(77, [ag.xa[player]]), 52, player, bA.mn, "rgba(60,120,10,0.9)", -1, true);
        af.pG(player, 2, 255);
      } else {
        a57(384, L(78, [ag.xa[player]]), 50, player, bA.mn, "rgba(90,90,90,0.9)", -1, true);
        af.pG(player, 2, 96);
      }
    }
  };
  this.oe = function (ys, target) {
    var color = a58(210, 255, 210);
    if (ys.length > 1) {
      a57(230, L(79, [ys.length, ag.xa[target]]), 66, target, color, bA.mk, -1, true);
    } else {
      a57(230, L(80, [ag.xa[ys[0]], ag.xa[target]]), 66, ys[0], color, bA.mk, target, true);
    }
  };
  function a58(e1, sM, f1) {
    return S[7] + e1 + "," + sM + "," + f1 + ")";
  }
  this.a5j = function (player, target) {
    a57(230, L(81, [ag.xa[player], ag.xa[target]]), 66, player, bA.mn, "rgba(75,65,5,0.9)", target, true);
  };
  this.a4U = function (id, g9) {
    a5R(id, g9);
  };
  function a5R(id, g9) {
    var aB;
    var eh = a4v.length;
    for (aB = 0; aB < eh; aB++) {
      if (a4v[aB].id === id && g9-- <= 0) {
        a4v.splice(aB, 1);
        aB--;
        eh--;
      }
    }
  }
  this.zB = function (id, player) {
    a5S(id, player === undefined ? aD.ee : player);
  };
  function a5S(id, player) {
    var ev = false;
    for (var aB = a4v.length - 1; aB >= 0; aB--) {
      if (a4v[aB].id === id && (player === aD.ee || a4v[aB].player === player)) {
        a4v.splice(aB, 1);
        ev = true;
      }
    }
    return ev;
  }
  this.a5k = function (id) {
    for (var aB = a4v.length - 1; aB >= 0; aB--) {
      if (a4v[aB].id === id) {
        return a4v[aB];
      }
    }
    return null;
  };
  this.oV = function (a5l, a5m, player) {
    if (ag.a2P[aD.eR] === 2) {
      return;
    }
    var a5n;
    if (a5l === 1) {
      a5n = L(82, [ag.xa[player]]);
    } else {
      a5n = L(83, [b9.qh.yM(a5l), ag.xa[player]]);
    }
    a57(200, a5n, 30, player, "rgb(190,255,190)", bA.mk, -1, true);
    if (a5m) {
      if (a5m === 1) {
        a5n = L(84);
      } else {
        a5n = L(85, [b9.qh.yM(a5m)]);
      }
      bp.xZ(a5n);
    }
  };
  this.a5o = function (a5l, player) {
    if (ag.a2P[aD.eR] === 2) {
      return;
    }
    a5R(31, 0);
    var a5n;
    if (ag.a2P[player] === 2 || player >= aD.jw) {
      if (a5l === 1) {
        a5n = L(86, [ag.xa[player]]);
      } else {
        a5n = L(87, [ag.xa[player], b9.qh.yM(a5l)]);
      }
      a57(150, a5n, 31, player, bA.me, "rgba(205,205,205,0.9)", -1, true);
    } else {
      if (a5l === 1) {
        a5n = L(88, [ag.xa[player]]);
      } else {
        a5n = L(89, [ag.xa[player], b9.qh.yM(a5l)]);
      }
      a57(150, a5n, 31, player, bA.me, "rgba(205,255,205,0.9)", -1, true);
    }
  };
  function a55() {
    if (bR.vU.vV[bR.eN].name.length) {
      a5p(L(90, [bR.vU.vV[bR.eN].name]));
    }
    a5p(L(91, [bR.es - 2 + "x" + (bR.et - 2)]));
    a5p(L(92, [b9.qh.yM(ao.a5q)]));
    if (ao.a5q !== ao.a5r) {
      a5p(L(93, [b9.qh.yM(ao.a5r) + " (" + b9.qh.a38((100 * ao.a5r) / ao.a5q, 1) + ")"]));
    }
    if (ao.a5s > 0) {
      a5p(L(66, [b9.qh.yM(ao.a5s) + " (" + b9.qh.a38((100 * ao.a5s) / ao.a5q, 1) + ")"]));
    }
    if (ao.a5t > 0) {
      a5p(L(94, [b9.qh.yM(ao.a5t) + " (" + b9.qh.a38((100 * ao.a5t) / ao.a5q, 1) + ")"]));
    }
    if (aD.kD === 10) {
      a57(120, L(95), 6, 0, a58(235, 255, 120), bA.mk, -1, false);
    }
  }
  function a5p(pO) {
    a57(340, pO, 6, 0, a58(215, 245, 255), bA.mk, -1, false);
  }
  this.zA = function (br) {
    var aB;
    var f2 = be.jt();
    for (aB = 2; aB >= 0; aB--) {
      if (a4z.tp[aB] > 0 && (br || a4z.f2[aB] < f2 - 220)) {
        this.a5u(aB);
      }
    }
  };
  this.a5u = function (id) {
    var pO;
    var eh = a4z.tp[id];
    var player = a4z.ys[id];
    a4z.tp[id] = 0;
    if (eh === 1) {
      if (id === 0) {
        pO = L(96, [ag.xa[player], ag.xa[a4z.a54[0]]]);
      } else if (id === 1) {
        pO = L(97, [ag.xa[player]]);
      } else if (id === 2) {
        pO = L(98, [ag.xa[player]]);
      } else if (id === 3) {
        pO = L(99, [ag.xa[player]]);
      }
      a5R(7, 0);
      a57(a4z.e9[id], pO, 7, a4z.a54[id], bA.mn, bA.mk, -1, true);
    } else {
      if (id === 0) {
        pO = L(100, [eh]);
      } else if (id === 1) {
        pO = L(101, [eh]);
      } else {
        pO = L(102, [eh]);
      }
      a5R(7, 0);
      a57(a4z.e9[id], pO, 7, player, bA.mn, bA.mk, -1, false);
    }
  };
  this.a5T = function (id, h6, vp) {
    var f2 = be.jt();
    var eh = a4z.tp[id] + 1;
    a4z.tp[id]++;
    a4z.ys[id] = h6;
    a4z.a54[id] = vp;
    if (eh === 1) {
      a4z.f2[id] = f2;
    }
    if (eh === 1 && (aD.z7 < 32 || aD.z4 === 2)) {
      this.a5u(id);
      return;
    }
    if (eh > 1 && (a4z.f2[id] < f2 - 140 || aD.z4 === 2)) {
      this.a5u(id);
    }
  };
  this.ir = function () {
    b1.ir();
    var hq = a4v.length - a50;
    hq = hq <= 1 ? 1 : hq * hq;
    for (var aB = a4v.length - 1; aB >= 0; aB--) {
      if (a4v[aB].eG > 0) {
        a4v[aB].eG -= hq;
        if (a4v[aB].eG <= 0) {
          be.df = true;
          a4v.splice(aB, 1);
        }
      }
    }
    a5v();
    this.zA(false);
  };
  function a5v() {
    var g9, aB;
    if (a51 === 128) {
      return;
    }
    a51++;
    if (a51 < 128) {
      return;
    }
    g9 = 5;
    for (aB = al.jx - 1; aB >= 0; aB--) {
      if (ag.a2P[al.jy[aB]] === 1 && g9-- > 0) {
        a57(240, L(99, [ag.xa[al.jy[aB]]]), 1, al.jy[aB], bA.me, "rgba(255,255,255,0.75)", -1, true);
      }
    }
  }
  this.tq = function () {
    var eq = xC();
    var wG;
    for (var aB = a4v.length - 1; aB >= 0; aB--) {
      wG = eq - (aB + 1) * j;
      if (a4v[aB].id === 50) {
        tr.drawImage(a4v[aB].canvas, h.i - a4v[aB].i - a4y - a4w, wG);
        tr.drawImage(a52, h.i - a4y - a4w, wG);
      } else {
        tr.drawImage(a4v[aB].canvas, h.i - a4v[aB].i - a4w, wG);
      }
    }
  };
}
function cC() {
  var a5w, a5x, a5y;
  var i;
  var j;
  var font;
  var pO;
  this.dX = function () {
    pO = L(103);
  };
  this.resize = function () {
    i = Math.floor((a0.a1.r7() ? 0.53 : 0.36) * h.pj);
    j = Math.floor(0.065 * i);
    font = b9.ph.rY(1, Math.floor(0.9 * j));
    a5y--;
    this.setTime();
  };
  this.ir = function () {
    if (this.setTime()) {
      be.df = true;
    }
  };
  this.setTime = function () {
    var zl;
    var dm = new Date();
    var a5z = dm.getUTCMinutes();
    var a60 = dm.getUTCSeconds();
    var a61 = [0, 10, 20, 25, 30, 35, 40, 45, 50];
    a5x = 60 * 60 - 60 * a5z - a60;
    a5x %= 60 * 5;
    var a62 = 60 * 5;
    for (var aB = 0; aB < a61.length; aB++) {
      if ((60 * a5z + a60 + a5x) % 3600 === 60 * a61[aB]) {
        a62 = 0;
        break;
      }
    }
    a5x += a62;
    a5w = pO + a63(Math.floor(a5x / 60)) + ":" + a63(a5x % 60);
    zl = a5y;
    a5y = a5z * 60 + a60;
    if (zl === a5y) {
      return false;
    }
    i = aQ.measureText(a5w, font);
    i += Math.floor(0.4 * j);
    return true;
  };
  function a63(a64) {
    return a64 < 10 ? "0" + a64 : String(a64);
  }
  this.tq = function () {
    tr.lineWidth = 1 + Math.floor(j / 15);
    tr.translate(h.i - j, Math.floor(0.5 * (h.j + i)));
    tr.rotate(-Math.PI / 2);
    tr.fillStyle = bA.mn;
    tr.fillRect(0, 0, i, j);
    tr.strokeStyle = bA.me;
    tr.strokeRect(0, 0, i, j + 10);
    tr.fillStyle = bA.me;
    tr.font = font;
    b9.ph.textBaseline(tr, 1);
    b9.ph.textAlign(tr, 1);
    tr.fillText(a5w, Math.floor(i / 2), Math.floor(0.59 * j));
    tr.setTransform(1, 0, 0, 1, 0, 0);
  };
}
function cD() {
  var a4v;
  var a65;
  var a4i;
  var j, a66;
  this.dX = function () {
    a4v = [];
    this.resize();
  };
  this.resize = function () {
    a4i = aN.a4i;
    j = aN.fontSize + 5;
    j = Math.floor(1.25 * j);
    if (a0.a1.r7()) {
      j = Math.floor(1.25 * j);
    }
    a66 = Math.floor(0.15 * j);
    bR.va.font = a4i;
    a65 = Math.floor(bR.va.measureText("02 000 000 0000").width);
    for (var aB = a4v.length - 1; aB >= 0; aB--) {
      a67(a4v[aB]);
      a68(aB);
    }
  };
  this.lY = function () {
    for (var aB = a4v.length - 1; aB >= 0; aB--) {
      if (a4v[aB].a69) {
        a4v[aB].a69 = false;
        a68(aB);
      }
    }
  };
  function a68(aB) {
    var a6A = true;
    var hm = bA.mn;
    if (a4v[aB].j7 === aD.ee) {
      a4v[aB].xG.fillStyle = bA.my;
    } else {
      ac.a6B(a4v[aB].j7);
      a4v[aB].xG.fillStyle = b9.color.mh(bN.fG[0], bN.fG[1], bN.fG[2], 0.87);
      if (b9.pq.a1X(bN.fG, 0, 2) > 400) {
        a6A = false;
        hm = bA.me;
      }
    }
    var i = a4v[aB].canvas.width;
    a4v[aB].xG.clearRect(0, 0, i, j);
    a4v[aB].xG.fillRect(0, 0, i, j);
    a4v[aB].xG.fillStyle = hm;
    a6C(a4v[aB].xG, i, j);
    if (i > a65 + 2 * j) {
      a4v[aB].xG.fillRect(i - a65 - j, 0, 1, j);
      a4v[aB].xG.fillText(ag.xa[a4v[aB].j7], Math.floor((i - a65) / 2), Math.floor(0.57 * j));
    }
    var s5 = a4v[aB].id !== 0 ? 0 : j;
    a4v[aB].xG.fillText(b9.qh.yM(a4v[aB].hL), Math.floor(i - a65 / 2 - s5), Math.floor(0.57 * j));
    a6D(aB, i, s5, a6A);
    if (a4v[aB].id === 0) {
      a6E(aB, i, a6A, hm);
      a6F(aB, i, a6A);
    } else {
      a6E(aB, 2 * j, a6A, hm);
    }
  }
  function a6C(xG, i, j) {
    xG.fillRect(0, 0, i, 1);
    xG.fillRect(0, j - 1, i, 1);
    xG.fillRect(0, 0, 1, j);
    xG.fillRect(i - 1, 0, 1, j);
  }
  function a6D(aB, i, s5, a6A) {
    a4v[aB].xG.fillStyle = a6A ? bA.mp : bA.ml;
    var a6G = Math.floor((a65 * a4v[aB].hL) / a4v[aB].a6H);
    a4v[aB].xG.fillRect(Math.floor(i - a65 - s5), j - a66, a6G, a66);
  }
  function a6E(aB, i, a6A, hm) {
    a4v[aB].xG.strokeStyle = a4v[aB].a6I ? bA.mw : a6A ? bA.nL : bA.nM;
    a4v[aB].xG.fillStyle = hm;
    a4v[aB].xG.fillRect(i - j, 0, 1, j);
    a4v[aB].xG.lineWidth = Math.max(Math.floor(j / 12), 3);
    a4v[aB].xG.lineCap = "round";
    var ek = 0;
    var mP = 0.35;
    i = j + 1;
    a4v[aB].xG.beginPath();
    a4v[aB].xG.moveTo(Math.floor(i - mP * j + ek), Math.floor(mP * j));
    a4v[aB].xG.lineTo(Math.floor(i - j + mP * j), Math.floor(j - mP * j + ek));
    a4v[aB].xG.stroke();
    a4v[aB].xG.beginPath();
    a4v[aB].xG.moveTo(Math.floor(i - j + mP * j), Math.floor(mP * j));
    a4v[aB].xG.lineTo(Math.floor(i - mP * j + ek), Math.floor(j - mP * j + ek));
    a4v[aB].xG.stroke();
  }
  function a6F(aB, i, a6A) {
    a4v[aB].xG.strokeStyle = a6A ? bA.n5 : bA.nF;
    a4v[aB].xG.fillRect(j, 0, 1, j);
    var ek = 0;
    var mP = 0.3;
    var wW = i - j;
    a4v[aB].xG.beginPath();
    a4v[aB].xG.moveTo(Math.floor(mP * j + wW), Math.floor(j / 2));
    a4v[aB].xG.lineTo(Math.floor(j - mP * j + ek + wW), Math.floor(j / 2));
    a4v[aB].xG.stroke();
    a4v[aB].xG.beginPath();
    a4v[aB].xG.moveTo(Math.floor(j / 2 + wW), Math.floor(mP * j));
    a4v[aB].xG.lineTo(Math.floor(j / 2 + wW), Math.floor(j - mP * j + ek));
    a4v[aB].xG.stroke();
  }
  this.gu = function (kz, l0) {
    if (aD.z4 === 2 || ag.lm[aD.eR] === 0 || aD.gq || b9.g2.jK(aD.eR)) {
      return false;
    }
    var aB;
    var a6J;
    var a6K;
    var a6L;
    var a6M = a0.a1.r7() ? j : 0;
    var a6N = a0.a1.r7() ? Math.floor(0.15 * j) : 0;
    for (aB = a4v.length - 1; aB >= 0; aB--) {
      a6J = a6O(aB);
      a6K = a6P(aB);
      a6L = a4v[aB].canvas.width;
      if (l0 >= a6K - a6N && l0 <= a6K + j + a6N) {
        if (kz >= a6J - a6M && kz <= a6J + j + a6M) {
          if (!a4v[aB].a6I) {
            a4v[aB].a69 = true;
            a4v[aB].a6I = true;
            if (a4v[aB].id === 0) {
              b7.h3.oH(a4v[aB].j7);
            } else {
            }
          }
          return true;
        } else if (a4v[aB].id === 0 && kz >= a6J + a6L - j - a6M && kz <= a6J + a6L + a6M) {
          bU.a4O(3);
          b7.h3.hE(aR.h8(), a4v[aB].j7);
          return true;
        }
      }
    }
    return false;
  };
  this.ir = function () {
    if (ag.lm[aD.eR] === 0 || (b9.g2.jK(aD.eR) && !aD.gq)) {
      return;
    }
    a6Q();
  };
  function a6Q() {
    var eh = ad.fm(aD.eR);
    if (!a6R(eh)) {
      a6S(eh);
      return;
    }
    a6T(eh);
    a6S(eh);
  }
  function a6R(eh) {
    if (a4v.length !== eh) {
      return true;
    }
    for (var aB = eh - 1; aB >= 0; aB--) {
      if (a4v[aB].id !== ad.fn(aD.eR, aB) || a4v[aB].j7 !== ad.fs(aD.eR, aB)) {
        return true;
      }
    }
    return false;
  }
  function a6S(eh) {
    var aB, hL;
    for (aB = eh - 1; aB >= 0; aB--) {
      hL = ad.ft(aD.eR, aB);
      if (a4v[aB].hL !== hL) {
        a4v[aB].hL = hL;
        a4v[aB].a6H = hL > a4v[aB].a6H ? hL : a4v[aB].a6H;
        a4v[aB].a69 = true;
      }
    }
  }
  function a6T(eh) {
    var aB, id, j7, f1, hL, a42;
    var a59 = [];
    loop: for (aB = 0; aB < eh; aB++) {
      id = ad.fn(aD.eR, aB);
      j7 = ad.fs(aD.eR, aB);
      for (f1 = 0; f1 < a4v.length; f1++) {
        if (a4v[f1].id === id && a4v[f1].j7 === j7) {
          a59.push(a4v.splice(f1, 1)[0]);
          continue loop;
        }
      }
      hL = ad.ft(aD.eR, aB);
      a42 = {
        j7: j7,
        hL: hL,
        a6H: hL,
        id: id,
        a69: true,
        a6I: false,
        canvas: null,
        xG: null,
      };
      a67(a42);
      a59.push(a42);
    }
    a4v = a59;
  }
  this.a6U = function (gE) {
    var aB;
    var eh = Math.min(a4v.length, ad.fm(aD.eR));
    for (aB = 0; aB < eh; aB++) {
      if (a4v[aB].j7 === gE) {
        a4v = [];
        return;
      }
    }
  };
  function a67(a42) {
    a42.canvas = document.createElement(S[4]);
    bR.va.font = a4i;
    var i = a65;
    if (a42.j7 < aD.ee && a42.id === 0) {
      i += Math.floor(bR.va.measureText(ag.xa[a42.j7] + S[113]).width);
    }
    i += j;
    if (a42.id === 0) {
      i += j;
    }
    a42.canvas.width = i;
    a42.canvas.height = j;
    a42.xG = a42.canvas.getContext("2d", {
      alpha: true,
    });
    a42.xG.font = a4i;
    b9.ph.textBaseline(a42.xG, 1);
    b9.ph.textAlign(a42.xG, 1);
  }
  function a6O(aB) {
    return aU.a6V() ? h.i - a4v[aB].canvas.width - bb.gap : aU.eo;
  }
  function a6P(aB) {
    return Math.floor(2 * bb.gap + (aU.a6V() ? aW.j + bb.gap : 0) + aU.j + aB * (1.3 * j));
  }
  this.tq = function () {
    if (ag.lm[aD.eR] === 0 || (b9.g2.jK(aD.eR) && !aD.gq)) {
      return;
    }
    for (var aB = a4v.length - 1; aB >= 0; aB--) {
      tr.drawImage(a4v[aB].canvas, a6O(aB), a6P(aB));
    }
  };
}
function cE() {
  var a4v;
  var k1;
  var a6W;
  var a6X;
  var j;
  var a4i;
  var fontSize;
  var a6Y;
  var a6Z;
  var a6a;
  var a6b;
  var canvas, xG;
  var lz;
  var a6c;
  this.dX = function () {
    lz = 0;
    k1 = 4;
    a6W = a6X = 0;
    a4v = [];
    a4i = new Array(2);
    fontSize = new Array(2);
    a6Y = new Array(2);
    a6Y[0] = 0.3;
    a6Y[1] = 0.7;
    a6Z = new Array(4);
    canvas = document.createElement(S[4]);
    a6c = be.eG + 2000;
    this.resize();
  };
  function u8(aB) {
    return aB === 0 ? L(104) : aB === 1 ? L(105) : aB === 2 ? L(106) : L(107);
  }
  this.resize = function () {
    var aB, i;
    j = Math.floor((a0.a1.r7() ? 0.0725 : 0.058) * h.pj);
    fontSize[0] = Math.floor(a6Y[0] * 0.85 * j);
    fontSize[1] = Math.floor(a6Y[1] * 0.85 * j);
    a4i[0] = b9.ph.rY(1, fontSize[0]);
    a4i[1] = b9.ph.rY(1, fontSize[1]);
    for (aB = a6Z.length - 1; aB >= 0; aB--) {
      a6Z[aB] = this.measureText(u8(aB) + S[113], a4i[0]);
    }
    a6a = Math.floor(1 + 0.05 * j);
    a6b = Math.floor(0.2 * j);
    if (a4v.length > 0) {
      for (aB = a4v.length - 1; aB >= 0; aB--) {
        i = this.measureText(a4v[aB].pO + "00", a4i[1]);
        a4v[aB].width = i < a6Z[aB] ? a6Z[aB] : i;
      }
      a6d();
    }
  };
  this.ir = function () {
    if (k1 === 0) {
      return;
    }
    a6e();
  };
  function a6e() {
    if (k1 === 4) {
      if (be.eG > a6c) {
        k1 = 0;
        if (aD.z4 === 1) {
          aQ.zQ(bR.vU.vV[bR.eN].name, 3, 1, 9);
        }
      }
    } else {
      a6f();
    }
  }
  this.measureText = function (pO, a4i) {
    tr.font = a4i;
    return Math.floor(tr.measureText(pO).width);
  };
  this.j4 = function (a6g, aB) {
    this.zQ(ag.xa[a6g], aB, 1, aB === 0 ? 3 : 7);
  };
  this.zQ = function (pO, a6h, a6i, e9) {
    if (!pO.length) {
      return;
    }
    var i = this.measureText(pO + "00", a4i[1]);
    i = i < a6Z[a6h] ? a6Z[a6h] : i;
    a4v.push({
      pO: pO,
      width: i,
      a6h: a6h,
      a6i: a6i,
      e9: e9,
    });
    if (k1 === 0) {
      a6W = 0;
      k1 = 1;
      lz = be.eG;
    }
  };
  function a6f() {
    if (k1 === 1) {
      if (a6W === 0) {
        a6d();
        a6W = 0.0001;
      }
      a6W += (be.eG - lz) * 0.002;
      if (a6W >= 1) {
        a6X = 0;
        k1 = 2;
        a6W = 1;
      }
      be.df = true;
    } else if (k1 === 2) {
      a6X += (be.eG - lz) / 1000;
      if (a6X > a4v[0].e9 || (a6X > 1 && a4v.length > 1)) {
        k1 = 3;
      }
    } else if (k1 === 3) {
      a6W -= (be.eG - lz) * 0.002;
      if (a6W <= 0) {
        a6W = 0;
        a4v.shift();
        k1 = a4v.length > 0 ? 1 : 0;
      }
      be.df = true;
    }
    lz = be.eG;
  }
  this.tq = function () {
    if (k1 === 0 || a6W === 0) {
      return;
    }
    if (a6W < 1) {
      tr.globalAlpha = a6W;
      a6j();
      tr.globalAlpha = 1;
      return;
    }
    a6j();
  };
  function a6j() {
    tr.drawImage(canvas, bb.gap + (aD.hW ? bb.gap + bg.a6k() : 0), a6l + 2 * bb.gap);
  }
  function a6d() {
    canvas.width = a4v[0].width + a6a;
    canvas.height = j + a6a;
    xG = canvas.getContext("2d", {
      alpha: true,
    });
    xG.clearRect(0, 0, a4v[0].width + a6a, j + a6a);
    xG.translate(Math.floor(a6a / 2), Math.floor(a6a / 2));
    xG.lineWidth = a6a;
    xG.fillStyle = a4v[0].a6i === 1 ? bA.ms : bA.mk;
    a6m();
    xG.fill();
    xG.strokeStyle = a4v[0].a6i === 1 ? bA.me : bA.mn;
    a6m();
    xG.stroke();
    b9.ph.textAlign(xG, 1);
    b9.ph.textBaseline(xG, 1);
    xG.fillStyle = a4v[0].a6i === 1 ? bA.me : bA.mn;
    xG.font = a4i[0];
    xG.fillText(u8(a4v[0].a6h), Math.floor(a4v[0].width / 2), Math.floor(0.72 * a6Y[0] * j));
    xG.font = a4i[1];
    xG.fillText(a4v[0].pO, Math.floor(a4v[0].width / 2), Math.floor((a6Y[0] + 0.48 * a6Y[1]) * j));
  }
  function a6m() {
    xG.beginPath();
    xG.moveTo(a6b, 0);
    xG.lineTo(a4v[0].width - a6b, 0);
    xG.lineTo(a4v[0].width, a6b);
    xG.lineTo(a4v[0].width, j - a6b);
    xG.lineTo(a4v[0].width - a6b, j);
    xG.lineTo(a6b, j);
    xG.lineTo(0, j - a6b);
    xG.lineTo(0, a6b);
    xG.closePath();
  }
}
function cm() {
  var j;
  var canvas;
  var xG;
  var a6n;
  var a6o;
  var a6p;
  var a6q;
  var a69;
  var a6r;
  var a6s;
  var a6t;
  var a5h = false;
  this.hO = false;
  this.i = 0;
  var a6u;
  var a1t = new Array(2);
  var a6v = 0;
  this.dY = function () {
    for (var aB = 0; aB < 2; aB++) {
      a1t[aB] = b9.canvas.xr(ab.get(3), 8 - aB, bA.nw);
      a1t[aB] = b9.canvas.a1v(a1t[aB]);
    }
  };
  this.dX = function () {
    a6t = -10000;
    a6v = 0;
    a6s = 0;
    a6u = -1;
    this.hO = false;
    a5h = false;
    a69 = false;
    a6r = 0;
    a6n = 0;
    a6o = [0, 0];
    a6p = [1, 1];
    a6q = [];
    this.resize();
  };
  this.resize = function () {
    j = aR.j;
    this.i = 4 * j;
    canvas = document.createElement(S[4]);
    canvas.width = this.i;
    canvas.height = j;
    xG = canvas.getContext("2d", {
      alpha: true,
    });
    lZ();
  };
  this.lY = function () {
    if (!a69) {
      return;
    }
    lZ();
  };
  function lZ() {
    var i = av.i;
    a69 = false;
    xF(xG, i, j);
    var ke = Math.floor(i / 2);
    if (a6n === 1) {
      xG.fillStyle = bA.n7;
      xG.fillRect(ke, 0, ke, j);
    } else if (a6n === -1) {
      xG.fillStyle = bA.nN;
      xG.fillRect(0, 0, ke, j);
    }
    xH(xG, i, j, 2);
    var s5 = Math.floor(0.25 * j);
    s5 = s5 < 2 ? 2 : s5;
    xG.fillStyle = bA.mt;
    var a5q = Math.floor(((j - 4) * a6o[1]) / a6p[1]);
    if (a5q > 0) {
      xG.fillRect(2, j - 2 - a5q, s5, a5q);
    }
    a5q = Math.floor(((j - 4) * a6o[0]) / a6p[0]);
    if (a5q > 0) {
      xG.fillRect(i - 2 - s5, j - 2 - a5q, s5, a5q);
    }
    var xI = Math.floor(j / 8);
    xI = xI < 2 ? 2 : xI;
    xJ(xG, Math.floor(0.4 * j), 0, j, xI, 0.5, false);
    xJ(xG, Math.floor(i - 1.4 * j), 0, j, xI, 0.5, true);
    var eL = (1.1 * j) / a1t[0].width;
    xG.imageSmoothingEnabled = true;
    xG.setTransform(eL, 0, 0, eL, (i - eL * a1t[0].width) / 2, -0.05 * j);
    xG.drawImage(a1t[+a5h], 0, 0);
    xG.setTransform(1, 0, 0, 1, 0, 0);
  }
  this.gu = function (eo, eq) {
    if (!this.hO) {
      return false;
    }
    if (eo < h.i - this.i - bb.gap) {
      return false;
    }
    var mE = xC();
    if (eq < mE) {
      return false;
    }
    if (aD.gq) {
      return true;
    }
    if (!this.hP(aD.eR)) {
      return true;
    }
    aM.gr && aM.a19();
    b7.h3.hQ(eo > h.i - bb.gap - this.i / 2 ? 1 : 0);
    return true;
  };
  this.ir = function () {
    if (a6s > 0) {
      a6s--;
      if (a6s === 0) {
        a6w();
      }
      return;
    }
    if (this.hO) {
      a6x();
    } else {
      if (a6y()) {
        return;
      }
      if (a6u >= 0) {
        a6z();
        a70();
      }
    }
  };
  function a70() {
    a6u = -1;
    a5h = ah.a71();
    aN.a3O(257);
    aN.a5g(a5h);
    av.hO = true;
    a69 = true;
    a6r = 360;
    a72();
  }
  function a6y() {
    var a73 = be.jt();
    if (a73 % 40 !== 14) {
      return 0;
    }
    if (a6v) {
      if (a73 < a6v) {
        return 0;
      }
      if (a73 < a6t + 535) {
        return 0;
      }
      a6v = a73 + 1071;
      if (!b9.g2.a2S()) {
        return 0;
      }
      a70();
      return 1;
    }
    if (al.jx === 1) {
      a6v = a73 + 535;
      return 0;
    }
    var a2p;
    if (aD.hW) {
      a2p = bg.a2q();
    } else {
      a2p = ag.gU[lB[0]];
    }
    if (a2p >= bK.dn(96 * aD.jg, 100)) {
      a6v = a73 + 535;
    }
    return 0;
  }
  function a6z() {
    aN.xZ(250, L(108, [ag.xa[a6u]]), 673, a6u, bA.mn, bA.mk, -1, true);
  }
  function a72() {
    var dm = 0;
    for (var aB = al.jx - 1; aB >= 0; aB--) {
      if (!b9.g2.jK(al.jy[aB])) {
        dm += ag.gU[al.jy[aB]];
      }
    }
    if (a5h) {
      a6p[0] = Math.max(bK.dn(3 * dm, 4), 1);
    } else {
      if (aD.hW) {
        if (aD.kD === 9 && bf.kI[bg.l8()] === 8) {
          a6p[0] = Math.max(dm, 1);
        } else {
          var f9 = bK.dn(100 * bg.a2q(), aD.jg);
          f9 = bK.pF(200 - 2 * f9, 40, 100);
          f9 = bK.dn(f9 * dm, 100);
          a6p[0] = Math.max(f9, 1);
        }
      } else {
        a6p[0] = Math.max(bK.dn(3 * dm, 5), 1);
      }
    }
    a6p[1] = Math.max(dm - a6p[0], 1);
  }
  function a6x() {
    a6r--;
    if (a6r === 180 && 3 * a6o[0] < a6p[0]) {
      a6w();
      return;
    }
    if (a6o[0] >= a6p[0]) {
      if (a5h) {
        bQ.yh.yz();
      } else {
        bQ.yh.z3();
      }
      return;
    }
    if (a6o[1] >= a6p[1]) {
      a6s = 4;
      return;
    }
    if (a6r <= 0) {
      a6w();
    }
  }
  function a6w() {
    a6t = be.jt();
    a69 = true;
    a6n = 0;
    a6r = 0;
    a6q = [];
    av.hO = false;
    aN.zB(247);
    a6o[0] = a6o[1] = 0;
    aN.a3O(673);
  }
  this.z5 = function () {
    if (this.hO && a6o[0] < a6p[0]) {
      a6w();
    }
  };
  this.pH = function (player, a74) {
    var a75;
    if (a74) {
      a75 = L(109, [ag.xa[player]]);
    } else {
      a75 = L(110, [ag.xa[player]]);
    }
    aN.xZ(450, a75, 257, player, a74 ? bA.n5 : bA.nK, bA.mk, -1, true);
    a6q.push(player);
    a69 = true;
    var dm = aD.kF ? Math.max(a6p[0], a6p[1]) : ag.gU[player];
    dm = Math.max(dm, 1);
    if (a74) {
      a6o[0] += dm;
    } else {
      a6o[1] += dm;
    }
    if (player === aD.eR) {
      a6n = a74 ? 1 : -1;
    }
  };
  function xC() {
    if (aR.a5K(aN.a5G())) {
      return aR.eq - j - bb.gap;
    }
    if (bB.a5K(aN.a5J())) {
      return bB.xC() - j - bb.gap;
    }
    return h.j - j - bj.a47() * bb.gap;
  }
  this.tq = function () {
    if (!this.hO) {
      return;
    }
    var eq = xC();
    tr.drawImage(canvas, h.i - this.i - bb.gap, eq);
  };
  this.hR = function (player) {
    if (!aD.kF) {
      if (be.jt() < a6t + 140) {
        return false;
      }
    }
    if (a6r !== 0) {
      return false;
    }
    if (!b9.g2.gs(1)) {
      return false;
    }
    if (!b9.g2.gt(player)) {
      return false;
    }
    if (jh[player] >= 10 && !b9.g2.a2l(player, 9)) {
      return false;
    }
    return true;
  };
  this.hP = function (gE) {
    if (!b9.g2.gs(1)) {
      return false;
    }
    if (!b9.g2.gt(gE)) {
      return false;
    }
    if (!this.hO) {
      return false;
    }
    for (var aB = a6q.length - 1; aB >= 0; aB--) {
      if (a6q[aB] === gE) {
        return false;
      }
    }
    return true;
  };
  this.hN = function (player) {
    a6u = player;
  };
}
function cF() {
  var i, eo;
  var a76;
  var canvas;
  var xG;
  var hO;
  var iG;
  var a3F;
  var a4i;
  var a69;
  var a77 = 11 / 12;
  this.eq = 0;
  this.gv = false;
  this.dX = function () {
    hO = !aD.h2 && !aD.gq;
    a69 = false;
    iG = 0.5;
    a3F = 0;
    this.gv = false;
    this.resize();
  };
  this.resize = function () {
    if (a0.a1.r7() && h.i < 0.8 * h.j) {
      this.j = Math.floor(0.066 * h.pj);
      i = h.i - 4 * bb.gap - this.j;
    } else {
      i = Math.floor((a0.a1.r7() ? 0.65 : 0.389) * h.pj);
      i += 12 - (i % 12);
      this.j = Math.floor(i / 12);
    }
    a76 = Math.floor((3 * this.j) / 2);
    a4i = b9.ph.rY(1, Math.floor(0.5 * this.j));
    canvas = document.createElement(S[4]);
    canvas.width = i;
    canvas.height = this.j;
    xG = canvas.getContext("2d", {
      alpha: true,
    });
    xG.font = a4i;
    b9.ph.textBaseline(xG, 1);
    b9.ph.textAlign(xG, 1);
    this.a78();
    a79();
  };
  this.a78 = function () {
    if (a0.a1.r7() && h.i < 0.8 * h.j) {
      eo = this.j + 3 * bb.gap;
    } else {
      eo = Math.floor((h.i - i) / 2);
    }
    this.eq = h.j - this.j - bj.a47() * bb.gap;
  };
  this.lY = function () {
    if (a69) {
      a69 = false;
      a79();
    }
  };
  function a7A() {
    var f9;
    var a7B = 130;
    if (iG < 1 / 3) {
      f9 = Math.floor(3 * iG * a7B);
      return S[8] + f9 + "," + a7B + S[118];
    } else if (iG < 2 / 3) {
      f9 = Math.floor(3 * (iG - 1 / 3) * a7B);
      return S[8] + a7B + "," + (a7B - f9) + S[118];
    } else {
      f9 = Math.floor(3 * (iG - 2 / 3) * a7B);
      return S[8] + a7B + ",0," + f9 + ",0.85)";
    }
  }
  function a79() {
    var a6G = Math.floor(iG * (i - 2 * a76));
    var a7C = 1 + Math.floor(0.0625 * aR.j);
    var a7D = 1 + Math.floor(0.3 * aR.j);
    var a7E = Math.floor(0.55 * aR.j);
    xG.clearRect(0, 0, i, aR.j);
    xG.fillStyle = bA.mj;
    xG.fillRect(0, 0, a76, aR.j);
    xG.fillRect(a76 + a6G, 0, i - a76 - a6G, aR.j);
    xG.fillStyle = a7A();
    xG.fillRect(a76, 0, a6G, aR.j);
    xG.fillStyle = bA.mn;
    xG.fillRect(0, 0, i, 1);
    xG.fillRect(0, aR.j - 1, i, 1);
    xG.fillRect(0, 0, 1, aR.j);
    xG.fillRect(a76, 0, 1, aR.j);
    xG.fillRect(a76 + a6G, 0, 1, aR.j);
    xG.fillRect(i - a76, 0, 1, aR.j);
    xG.fillRect(i - 1, 0, 1, aR.j);
    xG.fillRect(Math.floor(0.25 * aR.j) + a7D, Math.floor((aR.j - a7C) / 2), aR.j - 2 * a7D, a7C);
    xG.fillRect(Math.floor(i - 1.25 * aR.j) + a7D, Math.floor((aR.j - a7C) / 2), aR.j - 2 * a7D - (a7D % 2), a7C);
    xG.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a7C) / 2), a7D, a7C, aR.j - 2 * a7D - (a7D % 2));
    a3F = b9.g2.iF(aD.eR, aR.h8());
    xG.fillText(b9.qh.yM(a3F) + " (" + b9.qh.a38(100 * iG, +(iG < 0.1)) + ")", Math.floor(0.5 * i), a7E);
  }
  this.hO = function () {
    return !(!hO || (aM.gr && eo < Math.floor(bb.gap + 5.5 * this.j)));
  };
  this.a5K = function (a7F) {
    if (this.hO()) {
      return eo + i > h.i - a7F - bb.gap;
    }
    return false;
  };
  this.a3M = function () {
    hO = !aD.gq;
  };
  this.a6w = function () {
    hO = false;
  };
  this.h8 = function () {
    return bK.pF(Math.floor(iG * 1024 + 0.5) - 1, 0, 1023);
  };
  this.a12 = function (kz, l0) {
    return this.hO() && kz > eo && kz < eo + i && l0 > this.eq;
  };
  function a7G(kz, l0) {
    return kz > eo && kz < eo + a76 && l0 > aR.eq;
  }
  function a7H(kz, l0) {
    return kz > eo + i - a76 && kz < eo + i && l0 > aR.eq;
  }
  this.gu = function (kz, l0) {
    if (!this.hO()) {
      return false;
    }
    if (!aR.a12(kz, l0)) {
      return false;
    }
    aS.mI = false;
    if (a7I(this, kz, l0)) {
      be.df = true;
    }
    return true;
  };
  function a7I(rL, kz, l0) {
    if (a7G(kz, l0)) {
      return a7J(a77);
    }
    if (a7H(kz, l0)) {
      return a7J(1 / a77);
    }
    rL.gv = true;
    return a7K(kz);
  }
  this.a15 = function (mP) {
    if (aD.z4 === 0 || !this.hO()) {
      return;
    }
    if (a7J(mP)) {
      be.df = true;
    }
  };
  function a7J(a1S) {
    if (a1S > 1 && iG === 1) {
      return false;
    }
    if (a1S > 1 && a1S * iG - iG < 1 / 1024) {
      a1S = (iG + 1 / 1024) / iG;
    } else if (a1S < 1 && iG - a1S * iG < 1 / 1024) {
      a1S = (iG - 1 / 1024) / iG;
    }
    iG = bK.pF(iG * a1S, 1 / 1024, 1);
    a79();
    return true;
  }
  function a7K(kz) {
    var dm = iG;
    iG = bK.pF((kz - eo - a76) / (i - 2 * a76), 1 / 1024, 1);
    if (dm !== iG) {
      a79();
      return true;
    }
    return false;
  }
  this.a0b = function (deltaY) {
    var mP;
    if (deltaY === 0 || !this.hO()) {
      return false;
    }
    if (deltaY > 0) {
      mP = 400 / (400 + deltaY);
      mP = mP < a77 ? a77 : mP;
    } else {
      mP = (400 - deltaY) / 400;
      mP = mP > 1 / a77 ? 1 / a77 : mP;
    }
    return a7J(mP);
  };
  this.a0Y = function (kz) {
    if (this.gv) {
      return a7K(kz);
    }
    return false;
  };
  this.a0y = function () {
    this.gv = false;
  };
  this.ir = function () {
    if (!this.hO()) {
      return;
    }
    if (a3F !== b9.g2.iF(aD.eR, this.h8())) {
      a69 = true;
    }
  };
  this.tq = function () {
    if (!this.hO()) {
      return;
    }
    tr.drawImage(canvas, eo, this.eq);
  };
}
function cw() {
  var canvas;
  var xG;
  var a7L;
  var font;
  var a7M = 0;
  var a7N = false;
  var a7O = [10, 5, 3, 2, 1.5, 1, 0.75, 0.5, 0.25];
  var a7P = 5;
  this.a3t = false;
  this.dX = function () {
    if (!aD.gq) {
      return;
    }
    a7P = 5;
    this.a3t = false;
    a7N = false;
    a7L = new qJ([0.3, 0.3 / 6], [0.5, 1]);
    this.resize();
  };
  this.a7Q = function () {
    return a7O[a7P];
  };
  this.xC = function () {
    return a7L.eq;
  };
  this.a5K = function (a7F) {
    if (aD.gq) {
      return a7L.eo + a7L.i > h.i - a7F - bb.gap;
    }
    return false;
  };
  this.resize = function () {
    if (!aD.gq) {
      return;
    }
    a7L.resize();
    a7L.eq -= (bj.a47() - 1) * bb.gap;
    font = b9.ph.rY(0, 0.3 * a7L.j);
    canvas = document.createElement(S[4]);
    canvas.width = Math.floor(a7L.i);
    canvas.height = Math.floor(a7L.j);
    xG = canvas.getContext("2d", {
      alpha: true,
    });
    xG.font = font;
    b9.ph.textAlign(xG, 1);
    b9.ph.textBaseline(xG, 1);
    lZ(this);
  };
  this.a18 = function (a7R) {
    if (aD.z4 === 0 || t.hO()) {
      return;
    }
    if (a7R === aD.mG) {
      return;
    }
    aD.mG = a7R;
    bg.resize();
    be.df = true;
    if (aD.gq) {
      a7M = be.eG + 2000;
      lZ(this);
    }
  };
  this.gu = function (eo, eq) {
    if (!aD.gq) {
      return false;
    }
    if (eo < a7L.eo || eq < a7L.eq || eo > a7L.eo + a7L.i) {
      return a7N && a7S(this, eo, eq);
    }
    eo -= a7L.eo;
    if (eo < 0.3 * a7L.i) {
      a7N = false;
      this.a18(!aD.mG);
      return true;
    } else if (eo < 0.7 * a7L.i) {
      a7N = !a7N;
      be.df = true;
      return true;
    }
    this.a1A(false);
    return true;
  };
  this.a1A = function (a7T) {
    if (aD.z4 === 2) {
      this.a18(false);
      t.u(3);
      return;
    }
    a7N = false;
    this.a3t = !this.a3t;
    if (this.a3t) {
      if (aM.gr) {
        aM.a19();
      }
      a0.a1.setState(1);
    } else {
      !a7T && aM.a4o();
    }
    be.df = true;
    lZ(this);
  };
  this.a1B = function () {
    this.a3t = false;
    aM.a4o();
    be.df = true;
    lZ(this);
  };
  this.a0r = function (eo, eq) {
    if (!aD.mG) {
      return false;
    }
    if (aM.gu(eo, eq) >= 0) {
      return true;
    }
    if (!aD.gq) {
      aS.gu(eo, eq);
      return true;
    }
    if (be.eG > a7M || !this.gu(eo, eq)) {
      aS.gu(eo, eq);
    }
    be.df = true;
    a7M = be.eG + 2000;
    return true;
  };
  this.ir = function () {
    if (aD.gq && aD.mG && be.eG > a7M - 1000 && be.eG < a7M) {
      be.df = true;
    }
  };
  this.zC = function () {
    if (!aD.gq) {
      return;
    }
    this.a3t = false;
    be.df = true;
    lZ(this);
  };
  this.tq = function () {
    if (!aD.gq) {
      return;
    }
    if (aD.mG) {
      if (be.eG > a7M) {
        return;
      }
      if (be.eG > a7M - 1000) {
        tr.globalAlpha = a7U(0, (1000 - (be.eG - (a7M - 1000))) / 1000, 1);
        a7V();
        tr.globalAlpha = 1;
        return;
      }
    }
    a7V();
  };
  function a7V() {
    if (a7N) {
      a7W();
    }
    tr.drawImage(canvas, Math.floor(a7L.eo), Math.floor(a7L.eq));
  }
  function lZ(rL) {
    a7X();
    a7Y();
    a7Z();
    !rL.a3t ? a7a() : a7b();
    a7c();
  }
  function a7X() {
    xG.clearRect(0, 0, Math.floor(a7L.i), Math.floor(a7L.j));
    xG.fillStyle = bA.mj;
    xG.fillRect(0, 0, Math.floor(a7L.i), Math.floor(a7L.j));
    if (aD.mG) {
      xG.fillStyle = bA.nC;
      xG.fillRect(0, 0, Math.floor(0.3 * a7L.i), Math.floor(a7L.j));
    }
  }
  function a7Y() {
    xG.fillStyle = bA.mn;
    xG.fillText("Hide UI", 0.15 * a7L.i, 0.5 * a7L.j);
    xG.fillRect(Math.floor(0.3 * a7L.i - 0.5), 0, 2, Math.floor(a7L.j));
  }
  function a7Z() {
    var eo = 0.5 * a7L.i;
    xG.fillText("Replay Speed", eo, 0.31 * a7L.j);
    xG.fillText(a7d(a7P), eo, 0.69 * a7L.j);
    xG.fillRect(Math.floor(0.7 * a7L.i - 0.5), 0, 2, Math.floor(a7L.j));
  }
  function a7a() {
    var i = Math.floor(0.46 * a7L.j);
    var j = Math.floor(0.23 * a7L.j);
    var eo = Math.floor(0.85 * a7L.i - 0.5 * i + i / 12);
    var eq = Math.floor(0.5 * a7L.j - j);
    xG.beginPath();
    xG.moveTo(eo, eq);
    xG.lineTo(eo + i, eq + j);
    xG.lineTo(eo, eq + (j << 1));
    xG.fill();
  }
  function a7b() {
    var s5 = Math.floor(0.02 * a7L.i);
    var s6 = Math.floor(0.025 * a7L.i);
    var mD = Math.floor(0.85 * a7L.i - s5 - 0.5 * s6);
    var mE = Math.floor(0.25 * a7L.j);
    var a7E = Math.floor(a7L.j) - 2 * mE;
    xG.fillRect(mD, mE, s5, a7E);
    xG.fillRect(mD + s5 + s6, mE, s5, a7E);
  }
  function a7c() {
    xG.fillRect(0, 0, Math.floor(a7L.i), 2);
    xG.fillRect(0, 0, 2, Math.floor(a7L.j));
    xG.fillRect(0, Math.floor(a7L.j) - 2, Math.floor(a7L.i), 2);
    xG.fillRect(Math.floor(a7L.i - 2), 0, 2, Math.floor(a7L.j));
  }
  function a7W() {
    var aB;
    var eh = a7O.length;
    var a7E = Math.floor(0.5 * a7L.j);
    var j = eh * a7E;
    var eo = Math.floor(Math.floor(a7L.eo) + 0.3 * a7L.i - 0.5);
    var eq = Math.floor(Math.floor(a7L.eq) - j);
    var i = Math.floor(0.4 * a7L.i + 2.5);
    tr.fillStyle = bA.mj;
    tr.fillRect(eo, eq, i, j);
    tr.fillStyle = bA.nC;
    tr.fillRect(eo, eq + a7P * a7E, i, a7E);
    tr.fillStyle = bA.mn;
    tr.fillRect(eo, eq, 2, j);
    tr.fillRect(eo, eq, i, 2);
    tr.fillRect(eo + i - 2, eq, 2, j);
    for (aB = 1; aB < eh; aB++) {
      tr.fillRect(eo, eq + aB * a7E, i, 2);
    }
    tr.fillStyle = bA.mn;
    b9.ph.textAlign(tr, 1);
    b9.ph.textBaseline(tr, 1);
    tr.font = b9.ph.rY(0, 0.6 * a7E);
    eo = eo + 0.5 * i;
    for (aB = 0; aB < eh; aB++) {
      tr.fillText(a7d(aB), eo, eq + (aB + 0.6) * a7E);
    }
  }
  function a7S(rL, eo, eq) {
    var eh = a7O.length;
    var a7E = Math.floor(0.5 * a7L.j);
    var j = eh * a7E;
    var mD = Math.floor(Math.floor(a7L.eo) + 0.3 * a7L.i - 0.5);
    var mE = Math.floor(Math.floor(a7L.eq) - j);
    var i = Math.floor(0.4 * a7L.i + 2.5);
    a7N = false;
    be.df = true;
    if (eo < mD || eo > mD + i || eq < mE) {
      return true;
    }
    a7P = a7U(0, Math.floor((eq - mE) / a7E), eh - 1);
    lZ(rL);
    return true;
  }
  function a7d(aB) {
    return aB === 5 ? "Normal" : "" + a7O[aB];
  }
}
var iI;
var iH;
var iJ;
function cG() {
  var a7e;
  var a7f;
  var i;
  var eo, eq;
  var a7g;
  var a7h;
  this.dX = function () {
    a7e = new Array(2);
    a7f = new Array(2);
    this.mI = false;
    iH = 0;
    iJ = 0;
    a7g = 0;
    a7h = 0;
    iI = 1;
    this.resize();
  };
  this.resize = function () {
    i = Math.floor((a0.a1.r7() ? 0.072 : 0.0502) * h.pj);
    i = i < 8 ? 8 : i;
    for (var aB = 1; aB >= 0; aB--) {
      a7e[aB] = document.createElement(S[4]);
      a7e[aB].width = i;
      a7e[aB].height = i;
      a7f[aB] = a7e[aB].getContext("2d", {
        alpha: true,
      });
    }
    this.a78();
    a7i();
  };
  function a7j(a7k, a5L) {
    return (
      Math.pow(a7k - (eo + i / 2), 2) + Math.pow(a5L - (eq + i / 2), 2) < (i * i) / 4 ||
      Math.pow(a7k - (eo + i / 2), 2) + Math.pow(a5L - (eq + 2 * i), 2) < (i * i) / 4
    );
  }
  this.xB = function () {
    return -iH / iI;
  };
  this.xC = function () {
    return -iJ / iI;
  };
  this.mS = function (a7l, hz) {
    iH = iI * a7l - hz;
  };
  this.mT = function (a7m, i0) {
    iJ = iI * a7m - i0;
  };
  this.gu = function (a7k, a5L) {
    if (!aD.mG && a7j(a7k, a5L) && !bi.eE.data[8].value) {
      if (a5L < eq + 1.25 * i) {
        return this.a0b(Math.floor(h.i / 2), Math.floor(h.j / 2), -200);
      } else {
        return this.a0b(Math.floor(h.i / 2), Math.floor(h.j / 2), 200);
      }
    } else {
      if (aH.mV()) {
        this.mI = true;
        a7g = a7k;
        a7h = a5L;
      }
    }
    return false;
  };
  this.a0Y = function (a7k, a5L) {
    if (!aH.mV()) {
      return true;
    }
    var a7n = iH;
    var a7o = iJ;
    var i2 = a7g - a7k;
    var i5 = a7h - a5L;
    iH += i2;
    iJ += i5;
    af.a0Y(i2, i5);
    this.a7p();
    a7g = a7k;
    a7h = a5L;
    return a7n !== iH || a7o !== iJ;
  };
  this.a0b = function (kz, l0, deltaY) {
    var mP;
    if (!aH.mV()) {
      return true;
    }
    if (deltaY > 0) {
      mP = 500 / (500 + deltaY);
      mP = mP < 0.5 ? 0.5 : mP;
    } else if (deltaY < 0) {
      mP = (500 - deltaY) / 500;
      mP = mP > 2 ? 2 : mP;
    } else {
      return false;
    }
    this.a7q(kz, l0, mP);
    be.df = true;
    return true;
  };
  this.a7q = function (eo, eq, eL) {
    eL = a7r(eL);
    af.zoom(eL, eo, eq);
    a7s(eL, eo, eq);
  };
  this.a7p = function () {
    var a7t = h.i / 16;
    var hk = 0;
    var a7u = h.j / 16;
    var hl = 0;
    if (iH < -h.i + a7t) {
      hk = -h.i + a7t - iH;
    }
    if (iH > iI * bR.es - a7t) {
      hk = iI * bR.es - a7t - iH;
    }
    if (iJ < -h.j + a7u) {
      hl = -h.j + a7u - iJ;
    }
    if (iJ > iI * bR.et - a7u) {
      hl = iI * bR.et - a7u - iJ;
    }
    iH += hk;
    iJ += hl;
    bZ.mU();
    af.a7v(hk, hl);
  };
  function a7r(a1S) {
    a1S = a1S * iI > 1024 ? 1024 / iI : a1S;
    a1S = a1S * iI < 0.125 ? 0.125 / iI : a1S;
    return a1S;
  }
  function a7s(a1S, kz, l0) {
    iI *= a1S;
    iH = (iH + kz) * a1S - kz;
    iJ = (iJ + l0) * a1S - l0;
    aS.a7p();
  }
  function a7i() {
    var a7w = Math.floor(1 + i / 20);
    for (var aB = 1; aB >= 0; aB--) {
      a7f[aB].clearRect(0, 0, i, i);
      a7f[aB].fillStyle = bA.mg;
      a7f[aB].beginPath();
      a7f[aB].arc(i / 2, i / 2, i / 2 - a7w, 0, 2 * Math.PI);
      a7f[aB].fill();
      a7f[aB].lineWidth = a7w;
      a7f[aB].fillStyle = bA.mn;
      a7f[aB].strokeStyle = bA.mn;
      a7f[aB].beginPath();
      a7f[aB].arc(i / 2, i / 2, i / 2 - a7w, 0, 2 * Math.PI);
      a7f[aB].stroke();
      xJ(a7f[aB], 0, 0, i, a7w, 0.3, aB === 0);
    }
  }
  this.a78 = function () {
    eo = h.i - i - bb.gap;
    eq = Math.floor(h.j / 2 - 1.25 * i);
  };
  this.tq = function () {
    if (bi.eE.data[8].value) {
      return;
    }
    tr.drawImage(a7e[0], eo, eq);
    tr.drawImage(a7e[1], eo, Math.floor(eq + (3 * i) / 2));
  };
}
function cH() {
  var g;
  var a7x;
  var a7y;
  var a7z;
  var gap;
  var a80;
  var a81;
  var a82;
  var a83;
  var a84;
  var a4i;
  var a85;
  var gl;
  var a86;
  var a6G;
  var a87;
  var a88;
  this.a89 = false;
  this.dX = function () {
    a87 = -1;
    a88 = -1;
    a86 = 1;
    a83 = -1;
    this.a8A = false;
    gl = 0;
    a85 = new Date();
    a7x = 0;
    gap = 0.3;
    a8B();
    g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    this.resize();
  };
  this.resize = function () {
    a7y = Math.floor(0.15 * h.j);
    a84 = Math.floor((a0.a1.r7() ? 0.018 : 0.0137) * h.pj);
    a84 = a84 < 2 ? 2 : a84;
    a4i = b9.ph.rY(1, a84);
    a8C();
  };
  function a8B() {}
  this.a8D = function (a8E) {
    var aB;
    this.a89 = true;
    for (aB = 0; aB < a8E.length; aB++) {
      g.unshift(a8E[aB]);
    }
    a8C();
    be.df = true;
  };
  function a8C() {
    a7z = Math.floor((a0.a1.r7() ? 0.07 : 0.035) * 0.2 * h.pj);
    a7z = a5I(a0.a1.r7() ? 3 : 1, a7z);
    var a8F = h.i / (g.length + gap);
    a7z = a8F > a7z ? a8F : a7z;
    a6G = Math.floor((1 - gap) * a7z);
    a7x = 0;
    a8G();
  }
  this.a8H = function () {
    a8G();
  };
  function a8G() {
    a7x = a7x < -20 ? -20 : a7x;
    a7x = a7x > (g.length - 15) * a7z ? (g.length - 15) * a7z : a7x;
    a81 = Math.floor(a7x / a7z);
    a82 = a81 + Math.floor(h.i / a7z);
    a82 = a82 > g.length - 1 ? g.length - 1 : a82;
    a81 = a82 < a81 ? a82 : a81;
    a81 = a81 < 0 ? 0 : a81;
    a8I();
  }
  function a8I() {
    var ke = a82;
    a80 = a7y / g[ke];
    for (var aB = a82 - 1; aB >= a81; aB--) {
      if (g[aB] > g[ke]) {
        ke = aB;
        a80 = a7y / Math.pow(g[aB], a86);
      }
    }
  }
  function a8J(eo) {
    var dm = Math.floor((a7x + h.i - eo - gap * a7z) / a7z);
    dm = dm < -1 ? -1 : dm === -1 ? 0 : dm > g.length - 1 ? -1 : dm;
    if (dm !== a83) {
      a83 = dm;
      if (a87 === -1 && a83 === 0 && aT.a89) {
        a87 = setInterval(a8K, 100);
      }
      return true;
    }
    return false;
  }
  this.a0Y = function (eo, eq) {
    if (eq > h.j - 0.6 * a7y) {
      if (this.a8A) {
        if (eo !== gl) {
          a7x += eo - gl;
          gl = eo;
          a8G();
          a8J(eo);
          this.a8A = a83 !== -1;
          be.df = true;
        }
        return;
      }
      if (a8J(eo)) {
        be.df = true;
        return;
      }
    } else {
      this.qj();
    }
  };
  this.qj = function () {
    if (a83 !== -1) {
      this.a8A = false;
      a83 = -1;
      be.df = true;
    }
  };
  this.a0b = function (eo, deltaY) {
    if (a83 !== -1) {
      a7x += Math.floor(deltaY);
      a8G();
      a8J(eo);
      be.df = true;
    }
  };
  this.gu = function (eo, eq) {
    this.a0Y(eo, eq);
    if (a83 !== -1) {
      gl = eo;
      this.a8A = true;
    }
  };
  this.a0x = function () {
    if (a83 !== -1) {
      this.a8A = false;
    }
  };
  this.tq = function () {
    tr.fillStyle = bA.mq;
    for (var aB = a82; aB >= a81; aB--) {
      a8L(aB);
    }
    if (this.a89 && a81 === 0) {
      tr.fillStyle = bA.nN;
      a8L(0);
    }
    if (a83 !== -1) {
      tr.fillStyle = bA.mp;
      a8L(a83);
    }
    a8M();
  };
  function a8L(aB) {
    var a66 = Math.floor(a80 * Math.pow(g[aB], a86));
    tr.fillRect(a7x + h.i - (aB + 1) * a7z, h.j - a66, a6G, a66);
  }
  function a8M() {
    if (a83 === -1) {
      return;
    }
    tr.font = a4i;
    b9.ph.textBaseline(tr, 2);
    var dm = new Date();
    dm.setTime(a85.getTime() - a83 * 1000 * 60 * 60 * 24);
    var month = "month";
    var a8N = "day";
    if (typeof Intl !== S[27]) {
      month = new Intl.DateTimeFormat(S[90], {
        month: S[83],
      }).format(dm);
      a8N = new Intl.DateTimeFormat(S[90], {
        weekday: S[83],
      }).format(dm);
    }
    var a8O = a8N + ", " + dm.getUTCDate() + " " + month + " " + dm.getFullYear();
    var a8P;
    a8P = g[a83] === 1 ? L(111) : L(112);
    a8P = b9.qh.yM(g[a83]) + " " + a8P;
    var s5 = Math.floor(tr.measureText(a8O).width);
    var s6 = Math.floor(tr.measureText(a8P).width);
    var a8Q = Math.floor(0.5 * (s5 + a84));
    var a8R = a7x + h.i - (a83 + 1) * a7z;
    a8R = a8R < a8Q ? a8Q : a8R > h.i - a8Q ? h.i - a8Q : a8R;
    var mE = h.j - Math.floor(a80 * Math.pow(g[a83], a86));
    var a8S = Math.floor(1.1 * a84);
    var a8T = mE > h.j - a8S ? h.j - a8S : mE;
    tr.fillStyle = bA.mk;
    tr.fillRect(h.i - s6 - a84, a8T - a8S, s6 + a84, a8S);
    tr.fillRect(a8R - a8Q, h.j - a8S, s5 + a84, a8S);
    tr.fillStyle = bA.mn;
    b9.ph.textAlign(tr, 2);
    tr.fillText(a8P, Math.floor(h.i - 0.5 * a84), a8T);
    b9.ph.textAlign(tr, 1);
    tr.fillText(a8O, a8R, h.j);
    tr.strokeStyle = bA.mr;
    tr.lineWidth = 1;
    tr.beginPath();
    tr.moveTo(0, mE);
    tr.lineTo(h.i, mE);
    tr.closePath();
    tr.stroke();
  }
  function a8K() {
    if (aa.a0E() === 8) {
      a83 = -1;
    }
    if (a83 !== 0) {
      a88 = new Date().getTime();
      clearInterval(a87);
      a87 = -1;
      return;
    }
    var gE = g[1] / (24 * 60 * 60 * 10);
    if (a88 !== -1) {
      var dm = new Date().getTime();
      gE += ((dm - a88) * g[1]) / (24 * 60 * 60 * 1000);
      a88 = -1;
    }
    if (gE > 0) {
      g[0] += Math.floor(gE);
      be.df = true;
    }
  }
}
function cI() {
  this.eo = 0;
  this.j = 0;
  var a4i;
  var i, eq, a8U;
  var a8V;
  var canvas;
  var xG;
  var a69;
  var a2Y;
  var a8W;
  var a8X;
  var a8Y;
  var a8Z;
  this.dX = function () {
    a8V = aD.a3U;
    a8X = S[76];
    a8Y = "rgba(150,0,0,0.8)";
    a8W = true;
    a69 = true;
    a2Y = ag.gi[aD.eR];
    this.resize();
  };
  this.resize = function () {
    i = Math.floor((a0.a1.r7() ? 0.305 : 0.24) * h.pj);
    this.j = Math.floor(0.5 + 0.13 * i);
    i = Math.floor(this.j * 6);
    a4i = b9.ph.rY(1, Math.floor(0.8 * this.j));
    a8Z = Math.floor(0.5 * this.j);
    bR.va.font = a4i;
    eq = bb.gap;
    a8U = Math.floor(1 + 0.13 * this.j);
    canvas = document.createElement(S[4]);
    canvas.width = i;
    canvas.height = this.j;
    xG = canvas.getContext("2d", {
      alpha: true,
    });
    xG.font = a4i;
    b9.ph.textBaseline(xG, 1);
    b9.ph.textAlign(xG, 1);
    this.a8a();
  };
  this.a6V = function () {
    return a0.a1.r7() && h.i < 1.2 * h.j;
  };
  this.a78 = function () {
    if (this.a6V()) {
      this.eo = h.i - i - bb.gap;
    } else {
      this.eo = Math.floor(aV.a8b() + (h.i - aV.a8b() - aW.i - i) / 2 - 0.5 * bb.gap);
    }
  };
  this.lY = function () {
    if (a69) {
      a69 = false;
      this.a8a();
    }
  };
  this.a8a = function () {
    xG.clearRect(0, 0, i, this.j);
    xG.fillStyle = a8W ? a8X : a8Y;
    xG.fillRect(0, 0, i, this.j);
    xG.fillStyle = bA.mp;
    this.a8c();
    this.a8d();
    xG.fillStyle = ag.gi[aD.eR] >= ae.jc(aD.eR) ? bA.nK : bA.mn;
    xG.fillText(b9.qh.yM(a2Y), Math.floor(i / 2), a8Z);
    xG.fillStyle = bA.mn;
    xG.fillRect(0, 0, i, 1);
    xG.fillRect(0, 0, 1, this.j);
    xG.fillRect(0, this.j - 1, i, 1);
    xG.fillRect(i - 1, 0, 1, this.j);
  };
  this.a8c = function () {
    var f2 = be.jt() % 100;
    f2 -= f2 % 10;
    f2 = 9 - bK.dn(f2, 10);
    var wG = Math.floor((f2 * (this.j - a8U)) / 9);
    xG.fillRect(0, wG, a8U, this.j - wG);
    xG.fillRect(i - a8U, wG, a8U, this.j - wG);
  };
  this.a8d = function () {
    xG.fillRect(a8U, this.j - a8U, Math.floor(((i - 2 * a8U) * ag.gi[aD.eR]) / a8V), a8U);
  };
  this.ir = function () {
    var gE = aD.eR;
    if (!b9.g2.gt(gE)) {
      return;
    }
    var f1 = ag.gi[gE] - ag.a2X[gE];
    if (a2Y !== f1) {
      a8V = a5I(f1, a8V);
      a8W = f1 > a2Y && f1 >= 10;
      a2Y = f1;
      a69 = true;
    } else if (be.jt() % 10 === 9) {
      a69 = true;
    }
  };
  this.tq = function () {
    if (ag.lm[aD.eR] === 0 || aD.h2 || ag.a2P[aD.eR] === 2) {
      return;
    }
    tr.drawImage(canvas, this.eo, eq);
  };
}
var a6l;
var lB;
var jh;
function cJ() {
  var a8e;
  var a8f;
  var a8g;
  var a8h;
  var a8i;
  var a8j;
  var a8k;
  var a8l;
  var a8m;
  var a8n, a8o;
  var a8p;
  var a8q;
  var a8r, a8s, a8t;
  var a8u;
  var a8v;
  var a8w;
  var a8x;
  var a8y;
  var a8z;
  var position;
  var a90;
  var a91;
  var a92;
  var a93;
  var a94 = 1;
  var a95 = 1;
  var a96 = "";
  this.dX = function () {
    var aB;
    a90 = 0;
    a91 = false;
    a92 = 0;
    a93 = 0;
    a8z = -1;
    a8i = a0.a1.r7() ? 6 : 10;
    position = 0;
    a95 = bi.eE.data[11].value;
    a95 = a95 === 0 ? 10 : a95 === 1 ? 5 : 1;
    a8y = false;
    a8w = new Uint16Array(a8i + 1);
    a8x = new Uint32Array(a8i + 1);
    a8m = aD.ee;
    lB = new Uint16Array(a8m);
    jh = new Uint16Array(a8m);
    for (aB = a8m - 1; aB >= 0; aB--) {
      lB[aB] = aB;
      jh[aB] = aB;
    }
    this.resize(true);
    a8u = new Uint16Array(aD.ee);
    var a97 = Math.floor(a8e - a8s - a8r - a8l);
    a8v = new Array(aD.ee);
    a8k.font = a8h;
    for (aB = aD.ee - 1; aB >= 0; aB--) {
      a8v[aB] = aB + 1 + ".";
      ag.xa[aB] = b9.xG.a25(ag.zh[aB], a8h, a97);
      a8u[aB] = Math.floor(a8k.measureText(ag.xa[aB]).width);
    }
    a98();
  };
  this.resize = function (dX) {
    if (a0.a1.r7()) {
      a8e = Math.floor(0.335 * h.pj);
      a6l = Math.floor((a8i * a8e) / 8);
    } else {
      a8e = Math.floor(0.27 * h.pj);
      a6l = Math.floor((a8i * a8e) / 10);
    }
    a8e = Math.floor(0.97 * a8e);
    a8j = document.createElement(S[4]);
    a8j.width = a8e;
    a8j.height = a6l;
    a8k = a8j.getContext("2d", {
      alpha: true,
    });
    a8n = 0.025 * a8e;
    a8g = 0.16 * a8e;
    a8o = 0.0 * a8e;
    a8p = Math.floor(0.45 * a8n + a8g);
    a8q = (a6l - a8g - 2 * a8n - a8o) / a8i;
    a8f = b9.ph.rY(1, Math.floor(0.55 * a8g));
    a94 = Math.floor((a0.a1.r7() ? 0.67 : 0.72) * a8q);
    a8h = b9.ph.rY(0, a94);
    a8k.font = a8h;
    a8r = Math.floor(0.04 * a8e);
    a8s = Math.floor((a0.a1.r7() ? 0.195 : 0.18) * a8e);
    a8l = Math.floor(a8k.measureText("00920600").width);
    a8k.font = a8f;
    a8t = a8e - a8r;
    if (!dX) {
      a8k.font = a8h;
      for (var aB = aD.ee - 1; aB >= 0; aB--) {
        a8u[aB] = Math.floor(a8k.measureText(ag.xa[aB]).width);
      }
      a98();
    }
    a96 = b9.xG.a25(L(113), a8f, 0.96 * a8e);
  };
  this.a8b = function () {
    return a8e;
  };
  this.lY = function (br, a99) {
    if (a99 || (a8y && (br || be.jt() % a95 === 0))) {
      a8y = false;
      a98();
    }
  };
  function a98() {
    var f0;
    a8k.clearRect(0, 0, a8e, a6l);
    a8k.fillStyle = bA.nd;
    a8k.fillRect(0, 0, a8e, a8p);
    a8k.fillStyle = bA.mj;
    a8k.fillRect(0, a8p, a8e, a6l - a8p);
    if (jh[aD.eR] >= position) {
      a9A(jh[aD.eR] - position, bA.nC);
    }
    if (jh[aD.eR] !== 0 && position === 0) {
      a9A(0, bA.ni);
    }
    if (a8z !== -1) {
      a9A(a8z, bA.mo);
    }
    a8k.fillStyle = bA.mn;
    a8k.fillRect(0, a8p, a8e, 1);
    a8k.fillRect(0, 0, a8e, bb.y5);
    a8k.fillRect(0, 0, bb.y5, a6l);
    a8k.fillRect(a8e - bb.y5, 0, bb.y5, a6l);
    a8k.fillRect(0, a6l - bb.y5, a8e, bb.y5);
    a8k.font = a8f;
    b9.ph.textBaseline(a8k, 1);
    b9.ph.textAlign(a8k, 1);
    a8k.fillText(a96, Math.floor(a8e / 2), Math.floor(a8n + a8g / 2));
    var gF = jh[aD.eR] < position + a8i - 1 ? 1 : 2;
    a8k.font = a8h;
    b9.ph.textAlign(a8k, 0);
    for (f0 = a8i - gF; f0 >= 0; f0--) {
      a9B(lB[f0 + position]);
      a9C(f0, f0 + position, lB[f0 + position]);
    }
    b9.ph.textAlign(a8k, 2);
    for (f0 = a8i - gF; f0 >= 0; f0--) {
      a9B(lB[f0 + position]);
      a9D(f0, lB[f0 + position]);
    }
    if (gF === 2) {
      a9B(aD.eR);
      b9.ph.textAlign(a8k, 0);
      a9C(a8i - 1, jh[aD.eR], aD.eR);
      b9.ph.textAlign(a8k, 2);
      a9D(a8i - 1, aD.eR);
    }
    if (position === 0) {
      a9E();
    }
  }
  function a9B(player) {
    if (aD.hW) {
      a8k.fillStyle = bf.a9F[bf.a9G[player]];
    }
  }
  function a9A(aB, a9H) {
    a8k.fillStyle = a9H;
    aB = aB > a8i - 1 ? a8i - 1 : aB;
    var a9I = Math.floor((aB === a8i - 1 ? 2 : aB === 0 ? 1.15 : 1) * a8q);
    a9I = aB === a8i - 2 ? Math.floor(a8p + 9.15 * a8q) - Math.floor(a8p + 8.15 * a8q) : a9I;
    a8k.fillRect(0, Math.floor(a8p + (aB + (aB === 0 ? 0 : 0.15)) * a8q), a8e, a9I);
  }
  function a9E() {
    var a4n = (0.7 * a8q) / ab.get(4).height;
    a8k.setTransform(
      a4n,
      0,
      0,
      a4n,
      Math.floor(a8r + 0.58 * a8q + 0.5 * a4n * ab.get(4).width),
      Math.floor(a8n + a8g + 0.4 * a8q)
    );
    a8k.imageSmoothingEnabled = true;
    a8k.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2));
    a8k.setTransform(1, 0, 0, 1, 0, 0);
  }
  function a9C(a9J, a2n, aB) {
    a8k.fillText(a8v[a2n], a8r, Math.floor(a8n + a8g + (a9J + 0.5) * a8q));
    if (ag.a2P[aB] === 1) {
      a8k.font = S[87] + a8h;
    }
    var eq = Math.floor(a8n + a8g + (a9J + 0.5) * a8q);
    a8k.fillText(ag.xa[aB], a8s, eq);
    if (ag.a2P[aB] !== 0) {
      a8k.font = a8h;
    }
    if (aB < aD.jw && ag.a2P[aB] !== 2) {
      return;
    }
    a8k.fillRect(a8s, eq + 0.35 * a94, a8u[aB], Math.max(1, 0.1 * a94));
  }
  function a9D(a9J, aB) {
    a8k.fillText(ag.gU[aB], a8t, Math.floor(a8n + a8g + (a9J + 0.5) * a8q));
  }
  this.ir = function () {
    a9K();
    a9L();
    a9M();
    a9N();
  };
  function a9N() {
    for (var aB = a8i - 1; aB >= 0; aB--) {
      a8w[aB] = lB[aB];
      a8x[aB] = ag.gU[lB[aB]];
    }
    a8w[a8i] = jh[aD.eR];
    a8x[a8i] = ag.gU[aD.eR];
  }
  function a9M() {
    var dm = a8y;
    a8y = true;
    var gF = jh[aD.eR] >= a8i - 1 ? a8i - 2 : a8i - 1;
    for (var aB = gF; aB >= 0; aB--) {
      if (a8w[aB] !== lB[aB] || a8x[aB] !== ag.gU[lB[aB]]) {
        return true;
      }
    }
    if (gF === a8i - 2 && (a8w[a8i] !== jh[aD.eR] || a8x[a8i] !== ag.gU[aD.eR])) {
      return true;
    }
    a8y = dm;
    return dm;
  }
  function a9L() {
    var a9O;
    var mV = a8m - 1;
    for (var f0 = 0; f0 < mV; f0++) {
      if (ag.gU[lB[f0]] < ag.gU[lB[f0 + 1]]) {
        a9O = lB[f0];
        lB[f0] = lB[f0 + 1];
        lB[f0 + 1] = a9O;
        jh[lB[f0]] = f0;
        jh[lB[f0 + 1]] = f0 + 1;
      }
    }
  }
  function a9K() {
    for (var f0 = a8m - 1; f0 >= 0; f0--) {
      if (ag.lm[lB[f0]] === 0) {
        a9P(f0);
      }
    }
  }
  function a9P(f0) {
    var a9Q = lB[f0];
    a8m--;
    for (var aB = f0; aB < a8m; aB++) {
      lB[aB] = lB[aB + 1];
      jh[lB[aB]] = aB;
    }
    lB[a8m] = a9Q;
    jh[lB[a8m]] = a8m;
  }
  this.gu = function (eo, eq) {
    var a9R;
    if (y4(eo, eq)) {
      a90 = be.eG;
      a91 = true;
      a92 = a93 = a9S(eq);
      if (bI.a1C()) {
        a9R = a7U(-1, a93, a8i);
        a9R = a9R === a8i ? -1 : a9R;
        if (a8z !== a9R) {
          a8z = a9R;
          a98();
          be.df = true;
        }
      }
      return true;
    }
    return false;
  };
  this.a0Y = function (eo, eq) {
    var dm;
    var a9R = a9S(eq);
    if (a91) {
      dm = position;
      position += a92 - a9R;
      position = a7U(0, position, aD.ee - a8i);
      if (position !== dm) {
        a92 = a9R;
        a9R = a7U(-1, a9R, a8i);
        a9R = a9R === a8i || !y4(eo, eq) ? -1 : a9R;
        a8z = a9R;
        a98();
        be.df = true;
      }
      return true;
    }
    a9R = a7U(-1, a9R, a8i);
    a9R = a9R === a8i || !y4(eo, eq) || bI.a1C() ? -1 : a9R;
    if (a8z !== a9R) {
      a8z = a9R;
      a98();
      be.df = true;
      return true;
    }
    return false;
  };
  this.a0x = function (eo, eq) {
    if (!a91) {
      return false;
    }
    a91 = false;
    var a9R = a9S(eq);
    if (bI.a1C() && a8z !== -1) {
      a8z = -1;
      a98();
      be.df = true;
    }
    if (be.eG - a90 < 350 && a93 === a9R) {
      a9R = a7U(-1, a9R, a8i);
      a9R = a9R === a8i || !y4(eo, eq) ? -1 : a9R;
      if (a9R !== -1) {
        var player = lB[a9R + position];
        if (a9R === a8i - 1 && jh[aD.eR] >= position + a8i - 1) {
          player = aD.eR;
        }
        if (ag.lm[player] !== 0) {
          aH.m7(player, 800, false, 0);
        }
      }
    }
    return true;
  };
  this.a0b = function (eo, eq, deltaY) {
    var a9R;
    if (a91 || aD.mG) {
      return false;
    }
    var a9T = Math.max(Math.floor(Math.abs(deltaY) / 40), 1);
    if (y4(eo, eq)) {
      a9R = a9S(eq);
      a9R = a7U(-1, a9R, a8i);
      a9R = a9R === a8i || bI.a1C() ? -1 : a9R;
      if (deltaY > 0) {
        if (position < aD.ee - a8i) {
          position += Math.min(aD.ee - a8i - position, a9T);
          a8z = a9R;
          a98();
          be.df = true;
        }
      } else if (position > 0) {
        position -= Math.min(position, a9T);
        a8z = a9R;
        a98();
        be.df = true;
      }
      return true;
    }
    return false;
  };
  function a9S(eq) {
    eq -= bb.gap + a8p;
    if (eq < 0) {
      return Math.floor(eq / a8q) - 1;
    } else if (eq < (a8i - 1) * a8q) {
      return Math.floor(eq / a8q);
    } else if (eq < a6l - a8p) {
      return a8i - 1;
    }
    eq -= a6l - a8p;
    return a8i + Math.floor(eq / a8q);
  }
  function y4(eo, eq) {
    return eo >= bb.gap && eo < bb.gap + a8e && eq >= bb.gap && eq < bb.gap + a6l;
  }
  this.tq = function () {
    tr.drawImage(a8j, bb.gap, bb.gap);
  };
}
function cK() {
  var canvas;
  var xG;
  var eo;
  var eq;
  var a66, a9U;
  var gap;
  var a9V;
  var fontSize;
  var a9W;
  var a9X, a9Y;
  var a9Z;
  var a9a;
  var a9b;
  var a9c;
  var a9d;
  var a9e;
  this.dX = function () {
    a9c = a9d = 0;
    a9X = new Array(8);
    a9X[0] = L(114);
    a9X[1] = aD.kF ? L(115) : L(116);
    a9X[2] = L(117);
    a9X[3] = L(118);
    a9X[4] = L(119);
    a9X[5] = L(120, 0, S[102]);
    a9X[6] = L(121);
    a9X[7] = L(122);
    a9Y = new Array(a9X.length);
    a9Y.fill("");
    a9Z = new Array(a9X.length);
    a9Z[0] = aD.kF ? 0 : aD.jw;
    a9Z[1] = aD.kF ? al.jx : aD.kH;
    a9Z[2] = aD.z6;
    a9Z[3] = 0;
    a9Z[4] = bK.dn(10000 * ag.gU[0], Math.max(aD.jg, 1));
    a9Z[5] =
      aD.data.iIncomeType === 0
        ? 700
        : aD.data.iIncomeType === 1
        ? bK.dn(aD.data.iIncomeValue * 700, 64)
        : bK.dn(aD.data.iIncomeData[aD.eR] * 700, 64);
    a9Z[6] = 0;
    a9f();
    a9Z[7] = 0;
    a9b = a9g(6);
    a9a = new Array(a9X.length);
    for (var aB = a9X.length - 1; aB >= 0; aB--) {
      a9a[aB] = true;
    }
    a9e = 0;
    if (aD.kF) {
      a9a[0] = false;
      a9a[2] = false;
      a9a[3] = false;
      a9e = 3;
    } else {
      a9a[3] = false;
      a9e = 1;
    }
    a9W = 0;
    this.resize();
  };
  this.resize = function () {
    this.i = Math.floor((a0.a1.r7() ? 0.1646 : 0.126) * h.pj);
    this.j = Math.floor(1.18 * this.i);
    a66 = Math.floor(0.04 * this.i);
    gap = Math.floor(0.035 * this.i);
    a9V = 0.04 * this.i;
    a9U = this.j;
    this.j -= Math.floor((a9e * (this.j - 2 * a66)) / a9X.length);
    fontSize = Math.floor((0.7 * (a9U - a66)) / a9X.length);
    var a4i = b9.ph.rY(1, fontSize);
    canvas = document.createElement(S[4]);
    canvas.width = this.i;
    canvas.height = this.j;
    xG = canvas.getContext("2d", {
      alpha: true,
    });
    xG.font = a4i;
    a9h(a4i, 0.575 * this.i);
    b9.ph.textBaseline(xG, 1);
    xG.lineWidth = 1;
    this.a3N();
    this.a78();
    aU.a78();
    a9i();
  };
  function a9h(a4i, i) {
    for (var aB = 0; aB < a9Y.length; aB++) {
      a9Y[aB] = b9.xG.a25(a9X[aB], a4i, i);
    }
  }
  this.a78 = function () {
    eo = h.i - this.i - bb.gap;
  };
  this.a9j = function () {
    eq = bb.gap;
  };
  this.a3N = function () {
    eq = bb.gap + (aU.a6V() && ag.lm[aD.eR] !== 0 && !aD.h2 ? aU.j + bb.gap : 0);
  };
  this.lY = function (br) {
    if (br || a9W >= 100) {
      a9W = 0;
      a9i();
    }
  };
  function a9i() {
    var eL;
    xG.clearRect(0, 0, aW.i, aW.j);
    xG.fillStyle = bA.mk;
    xG.fillRect(0, 0, aW.i, aW.j);
    xG.fillStyle = bA.n7;
    eL = a9c > 0 ? a9c : Math.sqrt(a9Z[4] / 10000);
    xG.fillRect(0, aW.j - a66 - 1, Math.floor(eL * aW.i), a66);
    xG.fillStyle = bA.mn;
    xG.fillRect(0, 0, aW.i, 1);
    xG.fillRect(0, 0, 1, aW.j);
    xG.fillRect(aW.i - 1, 0, 1, aW.j);
    xG.fillRect(0, aW.j - 1, aW.i, 1);
    xG.fillRect(0, aW.j - a66 - 1, aW.i, 1);
    var dm = 0;
    for (var aB = 0; aB < a9Y.length; aB++) {
      if (!a9a[aB]) {
        dm++;
        continue;
      }
      b9.ph.textAlign(xG, 0);
      var a9k = Math.floor(((a9U - a66 + 2 * a9V) * (aB - dm + 1)) / (a9Y.length + 1) - 0.7 * a9V);
      xG.fillText(a9Y[aB], gap, a9k);
      b9.ph.textAlign(xG, 2);
      if (aB === 5 && ag.lm[aD.eR] !== 0 && ag.gi[aD.eR] >= ae.jc(aD.eR)) {
        xG.fillStyle = bA.ng;
        xG.fillText(a9g(aB), aW.i - gap, a9k);
        xG.fillStyle = bA.mn;
      } else {
        xG.fillText(a9g(aB), aW.i - gap, a9k);
      }
    }
  }
  function a9g(aB) {
    if (aB < 3) {
      return a9Z[aB].toString();
    } else if (aB === 3) {
      return b9.qh.a38(a9Z[aB] / 100, 2);
    } else if (aB === 4) {
      return b9.qh.a38(a9Z[aB] / 100, 2);
    } else if (aB === 5) {
      return b9.qh.a38(a9Z[aB] / 100, 2);
    } else if (aB < 7) {
      return b9.qh.yM(a9Z[aB]);
    } else {
      return aW.a9l(a9Z[7]);
    }
  }
  this.a43 = function () {
    return a9Z[7];
  };
  this.a9l = function (value) {
    var ke = Math.floor(value / 1000 / 60);
    var eh = Math.floor((value - 1000 * 60 * ke) / 1000);
    if (eh < 10) {
      return ke + ":0" + eh;
    }
    return ke + ":" + eh;
  };
  this.ir = function () {
    a9m();
    a9n();
    this.lQ();
    a9o();
    a9f();
    a9p();
    a9q();
    a9r();
  };
  function a9m() {
    if (!a9a[0]) {
      return;
    }
    if (aD.z7 - aD.z6 === a9Z[0]) {
      return;
    }
    a9Z[0] = aD.z7 - aD.z6;
    a9W++;
  }
  function a9n() {
    if (al.jx - a9Z[0] === a9Z[1]) {
      return;
    }
    a9Z[1] = al.jx - a9Z[0];
    a9W++;
  }
  this.lQ = function () {
    if (!a9a[2]) {
      return;
    }
    if (aD.z6 === a9Z[2]) {
      return;
    }
    a9Z[2] = aD.z6;
    a9W++;
  };
  function a9q() {
    var a2p, per;
    if (aD.hW) {
      a2p = bg.a2q();
    } else {
      a2p = ag.gU[lB[0]];
    }
    per = bK.dn(10000 * a2p, Math.max(aD.jg, 1));
    a9Z[3] = a2p;
    if (a9Z[4] === per) {
      return;
    }
    a9W++;
    a9Z[4] = per;
  }
  function a9r() {
    if (aD.kD === 8 && a9s()) {
      return;
    }
    if (a9Z[3] < aD.jg) {
      return;
    }
    if (!a9t()) {
      return;
    }
    bQ.yh.z3();
  }
  function a9t() {
    for (var aB = al.jx - 1; aB >= 0; aB--) {
      if (ag.g8[al.jy[aB]].length > 0) {
        return false;
      }
    }
    return true;
  }
  function a9s() {
    for (var aB = 0; aB < 2; aB++) {
      if (!b9.g2.gt(aB)) {
        bQ.yh.z3();
        return true;
      }
    }
    return false;
  }
  function a9o() {
    var a9u = ae.a9v(aD.eR);
    if (a9u === a9Z[5]) {
      return;
    }
    a9Z[5] = a9u;
    a9W++;
  }
  function a9f() {
    if (ag.gU[aD.eR] === a9Z[6]) {
      return;
    }
    a9Z[6] = ag.gU[aD.eR];
    a9W++;
  }
  function a9p() {
    a9Z[7] += be.a9w;
    var pO = a9g(7);
    if (a9b !== pO) {
      a9b = pO;
      a9W += 100;
    }
  }
  this.a9x = function (aB) {
    var sM, a9y, dm;
    if (aD.z4 === 2) {
      return false;
    }
    if (aB % 2 === 1) {
      aV.lY(1, 1);
      be.df = true;
    }
    if (aB === aD.a3W) {
      a9c = 0;
      a9i();
      return false;
    }
    if (aB === -1 && a9d === 0) {
      return false;
    }
    a9y = a9c;
    if (aD.gq) {
      a9c = aB / aD.a3W;
      a9i();
      return a9c !== a9y;
    }
    dm = performance.now();
    if (aB >= 0) {
      sM = dm - aB * 392;
      a9d = aB === 0 || sM < a9d ? sM : a9d;
    }
    a9c = (dm - a9d) / (aD.a3W * 392);
    a9c = a9c > 1 ? 1 : a9c;
    a9i();
    return a9c !== a9y;
  };
  this.tq = function () {
    tr.drawImage(canvas, eo, eq);
  };
}
function cL() {
  var hO;
  var a9z;
  var i;
  var j;
  var a7E;
  var aA0;
  var aA1;
  var a6W;
  var canvas;
  var lz;
  var aA2;
  this.dX = function () {
    hO = false;
    aA2 = false;
    j = 0;
    a7E = 0.61;
    aA0 = 0.07;
    aA1 = 0.09;
    a6W = 0;
    lz = 0;
  };
  this.resize = function () {
    if (!hO) {
      return;
    }
    if (a0.a1.r7()) {
      i = Math.floor(0.69 * h.pj);
    } else {
      i = Math.floor(0.5 * h.pj);
    }
    i = aA3(i, a5I(h.i - 2 * bb.gap, 10));
    i = aA3(i, Math.floor(a5I(h.j - 2 * bb.gap, 3) * 3.57));
    j = Math.floor(0.28 * i);
    aA4();
  };
  this.show = function (f9, aA5, a71, aA6) {
    if (hO) {
      return;
    }
    if (aA6 && aA2) {
      return;
    }
    aA2 = true;
    a9z = a71 ? 21 : f9 ? 1 : 2;
    hO = true;
    this.resize();
    aL.r0();
    aR.a6w();
    lz = be.eG;
    a6W = aA5 ? 1 : 0;
  };
  this.ir = function () {
    if (!hO || a6W >= 1) {
      return;
    }
    a6W += 0.0005 * (be.eG - lz);
    a6W = a6W > 1 ? 1 : a6W;
    lz = be.eG;
    be.df = true;
  };
  this.gu = function (eo, eq) {
    if (!hO || a6W <= 0) {
      return false;
    }
    eo -= Math.floor((h.i - i) / 2);
    eq -= xC();
    if (eo < 0 || eq < 0 || eo > i || eq > j) {
      return false;
    }
    if (eo > i - j / 3 && eq < j / 3) {
      hO = false;
      be.df = true;
    }
    return true;
  };
  this.tq = function () {
    if (!hO || a6W <= 0) {
      return;
    }
    tr.globalAlpha = a6W;
    tr.drawImage(canvas, Math.floor((h.i - i) / 2), xC());
    tr.globalAlpha = 1;
  };
  function xC() {
    var eo = Math.floor((h.i - i) / 2);
    if (eo < aR.j + 2 * bb.gap) {
      return h.j - j - 4 * bb.gap - aR.j;
    }
    return h.j - j - 2 * bb.gap;
  }
  function aA4() {
    canvas = document.createElement(S[4]);
    canvas.width = i;
    canvas.height = j;
    var xG = canvas.getContext("2d", {
      alpha: true,
    });
    var mD = Math.floor(1 + j / 40);
    xG.clearRect(0, 0, i, j);
    xG.fillStyle = bA.mk;
    xG.fillRect(mD, mD, i - 2 * mD, j - 2 * mD);
    xG.lineJoin = "bevel";
    xG.lineWidth = 2 * mD;
    xG.strokeStyle = bA.mn;
    xG.strokeRect(mD, mD, i - 2 * mD, j - 2 * mD);
    xG.imageSmoothingEnabled = false;
    var f2 = ab.get(a9z);
    var aA7 = f2.width;
    var aA8 = f2.height;
    var a4n = ((a9z === 1 ? 0.85 : a9z === 21 ? 0.666 : 0.9) * a7E * j) / aA8;
    xG.setTransform(a4n, 0, 0, a4n, Math.floor((i - a4n * aA7) / 2), Math.floor((j - a4n * aA8) / 2));
    xG.drawImage(f2, 0, 0);
    xG.setTransform(1, 0, 0, 1, Math.floor(i - aA1 * j - aA0 * j - mD), Math.floor(mD + aA0 * j));
    aA9(xG, Math.floor(aA1 * j));
    xG.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aA9(xG, eh) {
    xG.lineWidth = Math.floor(1 + j / 80);
    xG.strokeStyle = bA.mn;
    xG.beginPath();
    xG.moveTo(0, 0);
    xG.lineTo(eh, eh);
    xG.moveTo(0, eh);
    xG.lineTo(eh, 0);
    xG.stroke();
  }
}
function dJ() {
  var aAA;
  var aAB = new Uint8Array(5);
  var aAC = new Uint8Array(5);
  this.aAD = new aAE();
  this.dX = function () {
    var f9 = bi.eE.data[119].value;
    for (var aB = 0; aB < aAB.length; aB++) {
      aAB[aB] = (f9 >> (2 * aB)) % 4;
    }
  };
  this.a3h = function () {
    aAA = [L(123), L(124), L(125, [bW.aAF[28]]), L(126, [bW.aAF[26]]), L(127, [bW.aAF[0]])];
    this.aAD.dX();
  };
  this.ir = function () {
    this.aAD.ir();
  };
  this.a4O = function (id) {
    if (id > 1 && bI.qA()) {
      return;
    }
    if (!aAG(id)) {
      return;
    }
    aN.a5O(aAA[id]);
  };
  function aAG(e2) {
    if (aAB[e2] === 3 || aAC[e2] === 1) {
      return false;
    }
    aAC[e2] = 1;
    if (Math.random() < 0.6) {
      return true;
    }
    aAB[e2]++;
    var f9 = 0;
    for (var aB = 0; aB < aAB.length; aB++) {
      f9 += aAB[aB] << (2 * aB);
    }
    bi.rB.rC(119, f9);
    return true;
  }
}
function aAE() {
  var aAH;
  this.dX = function () {
    aAH = false;
  };
  this.ir = function () {
    if (!aAI()) {
      return;
    }
    if (aAJ()) {
      return;
    }
    if (aAK()) {
      return;
    }
    if (aAL()) {
      return;
    }
    aAM();
  };
  function aAI() {
    if (aAH) {
      return true;
    }
    if (be.jt() % 30 !== 9) {
      return false;
    }
    if (!b9.g2.l4(90)) {
      return false;
    }
    aAH = true;
    return true;
  }
  function aAJ() {
    var pZ = aN.a5k(956);
    if (!pZ) {
      return false;
    }
    if (b9.g2.ki(pZ.player)) {
      return true;
    }
    aN.a4U(956, 0);
    return false;
  }
  function aAK() {
    var gE = aD.hW ? aAN() : aAO();
    if (gE === -1) {
      return false;
    }
    aN.xZ(0, L(128, [ag.xa[gE]]), 956, gE, bA.mn, bA.mk, -1, true);
    return true;
  }
  function aAO() {
    var aAP = al.jx;
    var kd = al.jy;
    var aAQ = jh;
    for (var aB = 0; aB < aAP; aB++) {
      var gE = kd[aB];
      if (aAQ[gE] !== 0) {
        return gE;
      }
    }
    return -1;
  }
  function aAN() {
    var id = bg.l8();
    var eh = al.jx;
    if (!bf.kI[id]) {
      if (eh > 1) {
        return lB[eh - 1];
      }
      return -1;
    }
    var ys = al.jy;
    var ef = bf.ef;
    for (var aB = 0; aB < eh; aB++) {
      var gE = ys[aB];
      if (ef[gE] !== id) {
        return gE;
      }
    }
    return -1;
  }
  function aAL() {
    var pZ = aN.a5k(957);
    if (!pZ || !pZ.a5E) {
      return false;
    }
    if (ac.eY(pZ.a5E.eT << 2)) {
      return true;
    }
    aN.a4U(957, 0);
    return false;
  }
  function aAM() {
    var eh = an.ib.ku;
    if (eh === 0) {
      return;
    }
    var eE = an.ib.eE;
    for (var aB = 0; aB < eh; aB++) {
      var eT = eE[aB];
      if (ac.eY(eT << 2)) {
        aN.xZ(0, L(129, [bL.ep(eT), bL.er(eT)]), 957, 0, bA.mn, bA.mk, -1, true, undefined, {
          f0: 1,
          eT: eT,
        });
        return;
      }
    }
  }
}
function dK() {
  this.aAR = new aAS();
  this.dX = function () {
    this.aAR.resize();
  };
}
function aAS() {
  this.resize = function () {
    var aB;
    var aAT = document.head.querySelector("style#ss");
    if (!aAT) {
      aAT = document.createElement("style");
      aAT.id = "ss";
      document.head.appendChild(aAT);
    } else {
      for (aB = aAT.sheet.cssRules.length - 1; aB >= 0; aB--) {
        aAT.sheet.deleteRule(0);
      }
    }
    var a7M = "::-webkit-scrollbar";
    var aAU = b9.ph.pr(bb.ra);
    var hY = b9.ph.pr(Math.max(b9.ph.r2(0.012), 8));
    try {
      aAT.sheet.insertRule(a7M + "{width:" + hY + ";height:" + hY + ";}", aAT.sheet.cssRules.length);
      aAT.sheet.insertRule(a7M + "-thumb{background-color:white;}", aAT.sheet.cssRules.length);
      aAT.sheet.insertRule(a7M + "-track{background:" + bA.mj + ";}", aAT.sheet.cssRules.length);
      aAT.sheet.insertRule(a7M + "-track:horizontal{border-top:" + aAU + S[119], aAT.sheet.cssRules.length);
      aAT.sheet.insertRule(a7M + "-track:vertical{border-left:" + aAU + S[119], aAT.sheet.cssRules.length);
      aAT.sheet.insertRule(a7M + "-button{display:none;}", aAT.sheet.cssRules.length);
    } catch (e) {
      console.log("error 3425: " + e);
      for (aB = aAT.sheet.cssRules.length - 1; aB >= 0; aB--) {
        aAT.sheet.deleteRule(0);
      }
    }
  };
}
function dI() {
  this.aAV = false;
  this.md = false;
  this.a3R = false;
  this.aAW = [0, 0, 0, 0];
  this.aAX = function () {
    this.a3R = this.a3R || this.md;
    if (!this.md && (!this.aAV || !this.a3R)) {
      return;
    }
    var mD = bZ.aAY[0];
    var mE = bZ.aAY[1];
    var mQ = bZ.aAY[2];
    var mR = bZ.aAY[3];
    mD = mD < this.aAW[0] ? this.aAW[0] : mD;
    mE = mE < this.aAW[1] ? this.aAW[1] : mE;
    mQ = mQ > this.aAW[2] ? this.aAW[2] : mQ;
    mR = mR > this.aAW[3] ? this.aAW[3] : mR;
    this.md = false;
    this.aAV = false;
    if (mD === this.aAW[0] && mE === this.aAW[1] && mQ === this.aAW[2] && mR === this.aAW[3]) {
      this.a3S();
      return;
    }
    if (mQ >= mD && mR >= mE) {
      a3j.putImageData(a3k, 0, 0, mD, mE, mQ - mD + 1, mR - mE + 1);
    }
  };
  this.a3S = function () {
    if (this.a3R && this.aAW[2] >= this.aAW[0] && this.aAW[3] >= this.aAW[1]) {
      a3j.putImageData(
        a3k,
        0,
        0,
        this.aAW[0],
        this.aAW[1],
        this.aAW[2] - this.aAW[0] + 1,
        this.aAW[3] - this.aAW[1] + 1
      );
    }
    this.a3R = false;
  };
  this.zF = function () {
    if (this.aAW[2] >= this.aAW[0] && this.aAW[3] >= this.aAW[1]) {
      a3j.putImageData(
        a3k,
        0,
        0,
        this.aAW[0],
        this.aAW[1],
        this.aAW[2] - this.aAW[0] + 1,
        this.aAW[3] - this.aAW[1] + 1
      );
    }
    this.a3R = false;
  };
  this.dX = function () {
    var eo, eq;
    this.aAV = false;
    this.md = false;
    this.a3R = false;
    this.aAW[0] = bR.es;
    this.aAW[1] = bR.et;
    this.aAW[2] = this.aAW[3] = 0;
    loop: for (eo = 1; eo < bR.es - 1; eo++) {
      for (eq = bR.et - 2; eq > 1; eq--) {
        if (aAZ[ac.wl(eo, eq) + 2] === 1) {
          this.aAW[0] = eo;
          break loop;
        }
      }
    }
    loop: for (eq = 1; eq < bR.et - 1; eq++) {
      for (eo = bR.es - 2; eo > 1; eo--) {
        if (aAZ[ac.wl(eo, eq) + 2] === 1) {
          this.aAW[1] = eq;
          break loop;
        }
      }
    }
    loop: for (eo = bR.es - 2; eo > 0; eo--) {
      for (eq = bR.et - 2; eq > 1; eq--) {
        if (aAZ[ac.wl(eo, eq) + 2] === 1) {
          this.aAW[2] = eo;
          break loop;
        }
      }
    }
    loop: for (eq = bR.et - 2; eq > 0; eq--) {
      for (eo = bR.es - 2; eo > 1; eo--) {
        if (aAZ[ac.wl(eo, eq) + 2] === 1) {
          this.aAW[3] = eq;
          break loop;
        }
      }
    }
  };
}
function L(value, aAa, uO) {
  var pO;
  if (typeof value === S[46]) {
    pO = b6.aAb[value];
  } else {
    pO = value;
  }
  if (uO && b6.aAc()) {
    pO = uO;
  }
  if (!aAa) {
    return pO;
  }
  var eh = aAa.length;
  for (var aB = 0; aB < eh; aB++) {
    for (var f0 = 0; f0 < 3; f0++) {
      pO = pO.replace("{" + (10 * f0 + aB) + "}", aAa[aB]);
    }
  }
  return pO;
}
function bz() {
  this.data = new aAd();
  var aAe = new aAf().L84;
  this.aAb = aAe;
  var aAg = false;
  this.dX = function () {
    aAg = false;
    if (aAh()) {
      return;
    }
    if (aAi() && aAj() && aAk()) {
      return;
    }
    aAg = true;
  };
  this.dZ = function () {
    bf.dY();
    aE.dY();
    bd.dY();
    bc.dY();
    aO.dX();
    bn = new ds();
  };
  this.aAc = function () {
    return this.aAb === aAe || !aAe.length;
  };
  function aAh() {
    var f9 = bi.eE.data[12].value.split("-")[0].toLowerCase();
    if (f9 === "en") {
      b6.aAb = aAe;
      return true;
    }
    return false;
  }
  function aAi() {
    return bi.eE.data[12].value === bi.eE.data[145].value;
  }
  function aAj() {
    return bi.eE.data[146].value > 0;
  }
  function aAk() {
    var eh = bi.eE.data[146].value;
    var g = bi.pz.uU(eh, false);
    if (g.length !== eh) {
      return false;
    }
    if (!b9.pq.a1i(g)) {
      return false;
    }
    return aAl(g);
  }
  function aAl(g) {
    var eh = g.length;
    for (var j = 0; j < eh; j++) {
      g[j] = g[j].replace("&#39;", "'");
    }
    var aAm = bi.pz.uU(eh, true);
    if (eh !== aAm.length) {
      return false;
    }
    if (!b9.pq.a1i(aAm)) {
      return false;
    }
    var ke = aAe.length;
    var a8E = new Array(ke);
    var aAn = ke === eh;
    var g9 = Math.min(eh, ke);
    for (var aB = 0; aB < ke; aB++) {
      a8E[aB] = aAe[aB];
      if (aB < eh && aAm[aB] === a8E[aB]) {
        a8E[aB] = g[aB];
        continue;
      }
      aAn = false;
      for (var f1 = 0; f1 < g9; f1++) {
        if (aAm[f1] === a8E[aB]) {
          a8E[aB] = g[f1];
          break;
        }
      }
    }
    b6.aAb = a8E;
    return aAn;
  }
  this.aAo = function () {
    if (!aAg) {
      return;
    }
    aAg = false;
    if (aAe.length === 0) {
      return;
    }
    var aAp = bi.eE.data[12].value;
    az.aAq.aAr(0, aAp.slice(0, 20));
  };
  this.aAs = function (g) {
    if (g.length !== aAe.length) {
      return;
    }
    this.aAb = g;
    bi.rB.rC(145, bi.eE.data[12].value);
    bi.rB.rC(146, g.length);
    bi.pz.ua(g, false);
    bi.pz.ua(aAe, true);
    if (aa.a0E() === 0 && t.ry === 5) {
      t.y.aAt();
    }
  };
  this.aAu = function () {
    var g = navigator.languages;
    if (!g || !g.length) {
      return [0, 0];
    }
    var aAv = Math.max(b6.data.aAw(g[0]), 0);
    if (g.length === 1) {
      return [aAv, aAv];
    }
    return [aAv, Math.max(b6.data.aAw(g[1]), 0)];
  };
}
function aAd() {
  this.g = [
    "en",
    "aa",
    "ab",
    "ace",
    "ach",
    "af",
    "ak",
    "alz",
    "am",
    "ar",
    "as",
    "av",
    "awa",
    "ay",
    "az",
    "ba",
    "bal",
    "ban",
    "bbc",
    "bci",
    "be",
    "bem",
    "ber",
    "ber-Latn",
    "bew",
    "bg",
    "bho",
    "bik",
    "bm",
    "bm-Nkoo",
    "bn",
    "bo",
    "br",
    "bs",
    "bts",
    "btx",
    "bua",
    "ca",
    "ce",
    "ceb",
    "cgg",
    "ch",
    "chk",
    "chm",
    "ckb",
    "cnh",
    "co",
    "crh",
    "crs",
    "cs",
    "cv",
    "cy",
    "da",
    "de",
    "din",
    "doi",
    "dov",
    "dv",
    "dyu",
    "dz",
    "ee",
    "el",
    "eo",
    "es",
    "et",
    "eu",
    "fa",
    "fa-AF",
    "ff",
    "fi",
    "fj",
    "fo",
    "fon",
    "fr",
    "fur",
    "fy",
    "ga",
    "gaa",
    "gd",
    "gl",
    "gn",
    "gom",
    "gu",
    "gv",
    "ha",
    "haw",
    "he",
    "hi",
    "hil",
    "hmn",
    "hr",
    "hrx",
    "ht",
    "hu",
    "hy",
    "iba",
    "id",
    "ig",
    "ilo",
    "is",
    "it",
    "iw",
    "ja",
    "jam",
    "jv",
    "jw",
    "ka",
    "kac",
    "kek",
    "kg",
    "kha",
    "kk",
    "kl",
    "km",
    "kn",
    "ko",
    "kr",
    "kri",
    "ktu",
    "ku",
    "kv",
    "ky",
    "la",
    "lb",
    "lg",
    "li",
    "lij",
    "lmo",
    "ln",
    "lo",
    "lt",
    "ltg",
    "luo",
    "lus",
    "lv",
    "mad",
    "mai",
    "mak",
    "mam",
    "mfe",
    "mg",
    "mh",
    "mi",
    "min",
    "mk",
    "ml",
    "mn",
    "mni-Mtei",
    "mr",
    "ms",
    "ms-Arab",
    "mt",
    "mwr",
    "my",
    "ndc-ZW",
    "ne",
    "new",
    "nhe",
    "nl",
    "no",
    "nr",
    "nso",
    "nus",
    "ny",
    "oc",
    "om",
    "or",
    "os",
    "pa",
    "pa-Arab",
    "pag",
    "pam",
    "pap",
    "pl",
    "ps",
    "pt",
    "pt-PT",
    "qu",
    "rn",
    "ro",
    "rom",
    "ru",
    "rw",
    "sa",
    "sah",
    "scn",
    "sd",
    "se",
    "sg",
    "shn",
    "si",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sq",
    "sr",
    "ss",
    "st",
    "su",
    "sus",
    "sv",
    "sw",
    "szl",
    "ta",
    "tcy",
    "te",
    "tet",
    "tg",
    "th",
    "ti",
    "tiv",
    "tk",
    "tl",
    "tn",
    "to",
    "tpi",
    "tr",
    "trp",
    "ts",
    "tt",
    "tum",
    "ty",
    "tyv",
    "udm",
    "ug",
    "uk",
    "ur",
    "uz",
    "ve",
    "vec",
    "vi",
    "war",
    "wo",
    "xh",
    "yi",
    "yo",
    "yua",
    "yue",
    "zap",
    "zh",
    "zh-CN",
    "zh-TW",
    "zu",
    "nb",
    "fil",
    "sh",
  ];
  this.aAx = function () {
    var aB;
    var aAy = [];
    var g = this.g;
    var eh = g.length;
    for (aB = 0; aB < eh; aB++) {
      aAy.push(g[aB]);
    }
    var aAz = bi.eE.data[12].uO;
    for (aB = 0; aB < eh; aB++) {
      if (aAy[aB] === aAz) {
        aAy.splice(aB, 1);
        eh--;
        break;
      }
    }
    aAy.sort();
    eh++;
    aAy.unshift(aAz);
    try {
      if (typeof Intl === S[27]) {
        return aAy;
      }
      for (aB = 0; aB < eh; aB++) {
        var aB0 = new Intl.DisplayNames([aAy[aB]], {
          type: "language",
        });
        var pO = aB0.of(aAy[aB]);
        if (pO !== aAy[aB]) {
          aAy[aB] = aAy[aB] + ": " + pO;
        }
      }
    } catch (e) {
      console.log("error 3646: " + e);
    }
    return aAy;
  };
  this.aB1 = function (aB2) {
    var pO = bi.eE.data[12].value;
    var eh = aB2.length;
    for (var aB = 0; aB < eh; aB++) {
      if (pO === aB2[aB].split(":")[0]) {
        return aB;
      }
    }
    return 0;
  };
  this.aAw = function (aB3) {
    if (!aB3 || aB3.length < 2) {
      return 0;
    }
    aB3 = aB3.split("-")[0].toLowerCase();
    var g = this.g;
    var eh = g.length;
    for (var aB = 0; aB < eh; aB++) {
      if (aB3 === g[aB]) {
        return aB;
      }
    }
    return -1;
  };
}
function aAf() {
  this.L84 = [
    "No Admin",
    "Helper",
    "Junior Moderator",
    "Moderator",
    "Senior Moderator",
    "Lead Moderator",
    "Head Admin",
    "Very Easy",
    "Easy",
    "Normal",
    "Hard",
    "Very Hard",
    "Impossible",
    "Type your message here...",
    "Send",
    "Activated",
    "Top Clan",
    "Best Clan Member",
    "Top Admin",
    "Best 1v1 Player",
    "Best Battle Royale Player",
    "Richest Player",
    "Top Patreon",
    "Lobby",
    "You have earned an additional {10} gold!",
    "{0} has earned an additional {11} gold!",
    "Team {0}",
    "Team {0} has won the game!",
    "You have earned a participation reward of {10} gold.",
    "The prize money has been distributed as follows:",
    "and {10} more",
    "You have earned {10} gold.",
    "You have earned {10} battle royale points!",
    "Clan {0} has won {11} points.",
    "You have earned {10} clan points!",
    "You have earned an additional {10} gold because you played for {1}.",
    "Check clan results at this page: ",
    "Back",
    "Error",
    "Error {10}",
    "Not Enough Gold!",
    "You need more gold to perform this action.",
    "Quit Game",
    "More",
    "This is a contest!",
    "Accept",
    "You have conquered {0}.",
    "You have been conquered by {0}.",
    "Congratulations! You have won the game.",
    "{0} has won the game.",
    "{0} has broken the non-aggression pact.",
    "{0} is attacking you!",
    "Choose your start position!",
    "You have surrendered!",
    "The game has ended in a stalemate!",
    "Error: {10}",
    "{0} has been immortalized!",
    "Neutral Land: {0}",
    "Player: {0}",
    "Strength: {10}",
    "Territory: {10}",
    "Team",
    "Bot Difficulty",
    "Index: {10}",
    "Coordinates: {10}",
    "Mountain: {10}",
    "Water: {10}",
    "Ship Owner: {0}",
    "Message to {0}",
    "Humanity triumphs! The undead have been beaten back.",
    "The Resistance",
    "Mankind's era ends, overrun by the relentless tide of the undead.",
    "The Virus",
    "If peace is agreed upon, the game ends in a stalemate.",
    "If peace is agreed upon, the largest territory holder wins the game.",
    "You have signed a non-aggression pact with {0}.",
    "You have asked {0} to sign a non-aggression pact.",
    "{0} has accepted the non-aggression pact.",
    "{0} requests a non-aggression pact.",
    "You have asked {10} players to attack {1}.",
    "You have asked {0} to attack {1}.",
    "{0} suggests you attack {1}.",
    "You have exported 1 resource to {0}.",
    "You have exported {10} resources to {1}.",
    "A tax of 1 unit has been deducted.",
    "A tax of {10} units has been deducted.",
    "A bot ({0}) has supported you with 1 resource.",
    "A bot ({0}) has supported you with {11} resources.",
    "{0} has supported you with 1 resource.",
    "{0} has supported you with {11} resources.",
    "Map: {0}",
    "Dimension: {10}",
    "Overall Pixels: {10}",
    "Land: {10}",
    "Mountains: {10}",
    "Full sending is disabled.",
    "{0} has been conquered by {1}.",
    "{0} has left the game.",
    "{0} has surrendered.",
    "{0} has joined the game.",
    "{10} players have been conquered.",
    "{10} players have left the game.",
    "{10} players have surrendered.",
    "Next Contest: ",
    "YOU HAVE CONQUERED",
    "YOU HAVE BEEN CONQUERED BY",
    "THE GAME HAS BEEN WON BY",
    "MAP:",
    "{0} has called the peace vote.",
    "{0} has voted for peace.",
    "{0} has rejected peace.",
    "second played",
    "seconds played",
    "LEADERBOARD",
    "Humans",
    "Players",
    "Bots",
    "Spectators",
    "Threshold",
    "Percentage",
    "Growth",
    "Income",
    "Time",
    "Hint: The top 9 emojis are ordered by usage.",
    "Hint: Select a boat to send it to a new location.",
    "Hint: Call the peace vote by pressing {0}.",
    "Hint: Add troops to your weakest ongoing attack with {0}.",
    "Hint: Hover with the mouse over a player and press {0} to attack them.",
    "{0} still needs to be conquered!",
    "A neutral pixel at position ({10}, {11}) still needs to be conquered!",
    "🔑 Show Account",
    "🚨 Moderation Actions",
    "🚩 Report User",
    "💬 Mention",
    "Loading",
    "{0} has defeated {1}!",
    "White Arena",
    "Black Arena",
    "Island",
    "Mountains",
    "Desert",
    "Swamp",
    "White Plains",
    "Cliffs",
    "Pond",
    "Halo",
    "Europe",
    "World",
    "Caucasia",
    "Africa",
    "Middle East",
    "Scandinavia",
    "North America",
    "South America",
    "Asia",
    "Australia",
    "Island Kingdom",
    "Refresh",
    "Public Profile",
    "🧈 Gold",
    "Monopolist",
    "Banker",
    "Miner",
    "Saver",
    "Starter",
    "Account Balance: ",
    "Rank: ",
    "Status: ",
    "Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
    "Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.",
    "Gold is the fuel that keeps your account running! Keep the balance up!",
    "Gold Transfer",
    "Confirm",
    "Cancel",
    "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.",
    "Account Name",
    "Copy",
    "Password",
    "Show",
    "Hide",
    "Request New Password",
    "Security Tip",
    "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
    "If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
    "If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.",
    "Account Options",
    "Log in to a Different Account",
    "Create New Account",
    "Delete Account: ",
    "🗑️ Account Deletion",
    "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.",
    "Saved Accounts",
    "Listed accounts may have been removed in the meantime due to insufficient funds.",
    "🗑️ Remove From List",
    "➡️ Login",
    "1v1 Rating",
    "Elo: ",
    "Played Games: ",
    "Battle Royale Rating",
    "Commander",
    "Strategist",
    "Soldier",
    "Recruit",
    "Rating: ",
    "Admin Statistics",
    "Votes: ",
    "You are about to purchase {10} votes for {11} Gold with your Account {2}.",
    "Username",
    "Please choose a respectful username.",
    "Bio",
    "Upload Bio",
    "The monthly fee is currently {10} gold.",
    "Enable Auto Renew",
    "Disable Auto Renew",
    "Auto Renew is off. The subscription will end in {10} day(s).",
    "Auto Renew is on. The subscription will renew in {10} day(s).",
    "Description",
    "Report Player",
    "Primary Clan Stats",
    "Clan: {0}",
    "Monthly Points: {0}",
    "Rank: {0}",
    "Total Points: {0}",
    "Won Games: {0}",
    "Avg. Points per Game: {0}",
    "Secondary Clan Stats",
    "Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.",
    "In this scenario, your clan leader statistics will be reset.",
    "Clan Leader Statistics",
    "Clan Leader of {0}",
    "No Clan Leader",
    "Elect",
    "Every week, you can vote for one clan member to increase their clan leader points.",
    "You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.",
    "A clan leader gains gold whenever a member earns gold in a game.",
    "Rating: {10}",
    "Rank: {10}",
    "Status: {10}",
    "Active",
    "Inactive",
    "Unlink Account",
    "Benefits:",
    "No Ads",
    "Separate Leaderboard",
    "Extra Gold Income",
    "Status: Not Linked",
    "Join Territorial.io on Patreon:",
    "Once you have joined, connect your account:",
    "If you hide Patreon, no one can share their membership with you.",
    "Additional Income",
    "Options",
    "Default",
    "Uniform",
    "Customized",
    "Mixed",
    "Team dependent",
    "Player Count",
    "Clan Chart",
    "🛠️ Options",
    "🛠️ Chart Options",
    "Search Terms",
    "Separate search terms with a comma.",
    "Load Data",
    "Start Index",
    "End Index",
    "Timeframe",
    "More Options",
    "Y-Axis Compression",
    "Choose Your Nation's Color!",
    "National Color",
    "Red: ",
    "Green: ",
    "Blue: ",
    "Adjust",
    "Colors",
    "Random",
    "Selectable Color",
    "⏳ Connecting...",
    "Find Server...",
    "New Connection...",
    "Custom Scenario",
    "⚔️ Play",
    "Map",
    "Settings",
    "Game Mode",
    "Clustered",
    "Player Names",
    "Kingdom Names",
    "Simple Names",
    "Territorial Income",
    "Interest Income",
    "Starting Resources",
    "More Settings",
    "Reset Scenario",
    "Open File...",
    "Save As File...",
    "📜 Game Log",
    "Custom Lobbies",
    "My Account",
    "Game Menu",
    "Your Kingdom's Name",
    "Clans",
    "Clan Members",
    "Admins",
    "1v1 Players",
    "Battle Royale",
    "Richest Players",
    "Patreon Members",
    "🏆 Leaderboards",
    "Previous 10",
    "Next 10",
    "1v1 Player Ranking",
    "Clan Ranking",
    "Clan Member Ranking",
    "Admin Ranking",
    "1v1 Reports",
    "Admin Election",
    "Blockchain",
    "Clan Leader Election",
    "Bio Reports",
    "Battle Royale Players",
    "Audit Log",
    "Ranking",
    "Player",
    "Elo",
    "Clan",
    "Rating",
    "Leader",
    "Index",
    "Seconds Ago",
    "Accuser",
    "Accused",
    "Voter",
    "Target Account",
    "Votes",
    "Sender",
    "Receiver",
    "Amount",
    "Number",
    "Gold",
    "Admin",
    "Affected Account",
    "Type",
    "Elo Deducted",
    "Bio Removed",
    "🛠️ List Options",
    "Clan Name Search",
    "Username Search",
    "Quantity",
    "Account Name Search",
    "1v1",
    "Zombie",
    "Chat",
    "Close",
    "Ready",
    "Next Map",
    "Next Game Mode",
    "Next Contest",
    "Teams",
    "ON",
    "OFF",
    "Zombies",
    "Login",
    "📜 Logs",
    "Procedural Map",
    "Realistic Map",
    "Custom Map",
    "Passable Water",
    "Passable Mountains",
    "Select File",
    "Preview",
    "Map Name",
    "Selectable Name",
    "▶️ Replay",
    "🔲 Select All",
    "📋 Copy",
    "🗑️ Clear",
    "▶️ Launch",
    "Insert the replay string here!",
    "⚙️ Settings",
    "🔄 Reset",
    "Reload Required",
    "A game reload is required to apply the new configuration.",
    "Information",
    "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.",
    "Resolution",
    "Low",
    "Medium",
    "High",
    "Very High",
    "Minimum Font Size",
    "Small",
    "Very Small",
    "Text Rendering Speed",
    "Slow",
    "Fast",
    "Large UI",
    "Place Balance Above",
    "Hide Zoom Buttons",
    "Font",
    "Message Box",
    "Keep Closed",
    "Is Muted",
    "Shortcut Keys",
    "Reset",
    "Language",
    "Spawning",
    "Selectable Spawn",
    "🔑 My Account",
    "📈 Clan Charts",
    "🧈 Gold Transfer",
    "🔗 Links",
    "ℹ️ Game Version",
    "🗑️ Delete Data",
    "Privacy Settings",
    "Force Restart Game",
    "☰ Game Menu",
    "📊 Game Statistics",
    "🏳️ Surrender",
    "🕊️ Call Peace Vote",
    "Android App",
    "iOS App",
    "Changelog",
    "Clan Results",
    "Tutorial",
    "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
    "Please make sure to safely store passwords before performing this action.",
    "🗑️ Delete",
    "User Privacy",
    "Check out our Privacy Policy at:",
    "Source Account",
    "Send gold only to trusted accounts!",
    "Replay Error",
    "Warning",
    "Loading...",
    "An enemy ship belonging to {0} is heading towards your shore.",
    "Initiate Land Attack At Mouse Pointer",
    "Launch Ship Towards Mouse Pointer",
    "Increase Percentage Bar",
    "Decrease Percentage Bar",
    "Slightly Increase Percentage Bar",
    "Slightly Decrease Percentage Bar",
    "Switch UI Visibility",
    "Zoom In",
    "Zoom Out",
    "Camera Left",
    "Camera Right",
    "Camera Up",
    "Camera Down",
    "Add To Weakest Attack",
    "Call Peace Vote",
    "Avg. Attack Strength",
    "Land Attacks",
    "Ships launched",
    "Bots conquered",
    "Humans conquered",
    "Attacked by Bots",
    "Attacked by Humans",
    "Territorial Loss",
    "Received Support",
    "Overall Income",
    "Additional Costs",
    "Land War Losses",
    "Naval Losses",
    "Transmitted Support",
    "Overall Expenses",
    "Mountain Attacks",
    "Ships landed",
    "Territory",
    "Numbers",
    "Statistics",
    "Neutral",
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Magenta",
    "Cyan",
    "White",
    "Black",
    "Ship launched!",
    "Ship selected!",
    "Ship on the way!",
    "Upcoming Alliance Contest!",
    "Upcoming Battle Royale Contest!",
    "Upcoming 1v1 Contest!",
    "Upcoming Zombie Contest!",
  ];
}
function dd() {
  var eo, eq;
  var j;
  var sv;
  var aB4;
  var aB5;
  var aB6;
  var aB7;
  var aB8;
  var i;
  var a2K;
  var aB9;
  this.hO = false;
  this.dX = function (pO, aBA) {
    if (a0.id === 1 && a0.dp >= 13 && a0.dp < 18) {
      if (aBA) {
        a2K = pO;
        return;
      }
      if (a2K !== pO) {
        return;
      }
      a0.uS.saveString(200, pO);
      return;
    }
    if (!aBA) {
      return;
    }
    a2K = pO;
    aB9 = document.createElement("a");
    aB9.appendChild(document.createTextNode(a2K));
    this.hO = true;
    aB9.title = a2K;
    aB9.target = S[97];
    aB9.href = a2K;
    aB9.style.textAlign = S[10];
    aB9.style.color = bA.mn;
    aB9.style.position = S[3];
    aB9.style.padding = S[60];
    aB9.style.margin = S[60];
    this.resize();
    document.body.appendChild(aB9);
    be.df = true;
  };
  this.r0 = function () {
    if (!this.hO) {
      return false;
    }
    document.body.removeChild(aB9);
    this.hO = false;
    return true;
  };
  this.gu = function (hz, i0) {
    if (!this.hO) {
      return false;
    }
    if (hz < eo || i0 < eq || hz > eo + i || i0 > eq + j || (hz > eo + i - sv && i0 < eq + sv)) {
      be.df = true;
      this.hO = false;
      document.body.removeChild(aB9);
      return true;
    }
    return true;
  };
  this.resize = function () {
    if (!this.hO) {
      return;
    }
    aB7 = Math.floor(0.8 * (a0.a1.r7() ? (h.i > h.j ? 0.6 : 0.55) : 0.4) * h.pj);
    sv = Math.floor(0.15 * aB7);
    aB4 = Math.floor(0.35 * sv);
    aB5 = Math.floor(0.5 * sv);
    aB6 = Math.floor(2.5 * aB5);
    j = sv + aB4 + 3 * aB5;
    var a4i = b9.ph.rY(1, aB4 / h.k);
    aB8 = Math.floor(h.k * aQ.measureText(a2K, a4i));
    i = (aB8 > aB7 ? aB8 : aB7) + 2 * aB6;
    var aBB = i;
    i = Math.min(i, h.i - 2 * (a0.a1.r7() ? 2 : 1) * bb.gap);
    a4i = b9.ph.rY(1, ((i / aBB) * aB4) / h.k);
    aB8 = Math.floor(h.k * aQ.measureText(a2K, a4i));
    eo = Math.floor((h.i - i) / 2);
    eq = Math.floor((h.j - j) / 2);
    aB9.style.font = a4i;
    aB9.style.top = Math.floor((eq + 1.4 * aB5 + sv) / h.k) + "px";
    aB9.style.left = Math.floor((eo + (i - aB8) / 2) / h.k) + "px";
  };
  this.tq = function () {
    if (!this.hO) {
      return;
    }
    tr.fillStyle = bA.mk;
    tr.fillRect(eo, eq + sv, i, j - sv);
    tr.fillStyle = bA.nr;
    tr.fillRect(eo, eq, i, sv);
    tr.fillStyle = bA.mn;
    tr.lineWidth = bb.y5;
    tr.strokeStyle = bA.mn;
    tr.strokeRect(eo, eq, i, j);
    tr.fillRect(eo, eq + sv, i, bb.y5);
    tr.font = b9.ph.rY(1, 0.48 * sv);
    b9.ph.textAlign(tr, 1);
    b9.ph.textBaseline(tr, 1);
    tr.fillText("You are leaving Territorial.io!", Math.floor(eo + (i - 0.5 * sv) / 2), Math.floor(eq + 0.55 * sv));
    aM.a4t(Math.floor(eo + i - 0.8 * sv), Math.floor(eq + 0.25 * sv), Math.floor(0.5 * sv));
    tr.setTransform(1, 0, 0, 1, 0, 0);
  };
}
function db() {
  var gap = 0;
  var eo = [0, 0, 0, 0, 0];
  var eq = [0, 0, 0, 0, 0];
  var mP = [1, 1, 1, 1, 1];
  var f9 = [true, true, true, false, false];
  this.fS = [true, true, true, false, false];
  var f2 = null;
  var a9X;
  this.aBC = function (a1t, aBD) {
    f2 = a1t;
    f9 = aBD;
    a9X = [bJ.aBE, bJ.a07, bJ.aBF, bJ.aBF, bJ.aBG];
    this.dX();
  };
  this.dX = function () {
    if (!ab.sQ()) {
      return;
    }
    var aB;
    var s5 = Math.floor((a0.a1.r7() ? 0.261 : 0.195) * h.pj);
    var s6 = Math.floor(0.9 * s5);
    var a7E = Math.floor(0.17 * s6);
    gap = a0.a1.r7() ? 2 * bb.gap : bb.gap;
    mP[0] = s5 / f2[0].width;
    mP[1] = s6 / f2[1].width;
    mP[2] = a7E / f2[2].height;
    mP[3] = a7E / f2[3].height;
    mP[4] = a7E / f2[4].height;
    mP[2] *= 1.7;
    mP[3] *= 1.07;
    eo[0] = gap;
    eo[1] = gap;
    eo[2] = gap;
    eo[3] = gap;
    eo[4] = Math.floor(2 * gap + mP[3] * f2[3].width);
    eq[0] = gap;
    eq[1] = eq[0] + gap + mP[0] * f2[0].height;
    eq[2] = eq[1] + gap + mP[1] * f2[1].height;
    eq[3] = eq[2] + gap + mP[2] * f2[2].height;
    eq[4] = eq[3];
    if (!f9[0]) {
      for (aB = 0; aB < 5; aB++) {
        eq[aB] -= mP[0] * f2[0].height + gap;
      }
    }
    if (!f9[1]) {
      for (aB = 2; aB < 5; aB++) {
        eq[aB] -= mP[1] * f2[1].height + gap;
      }
    }
  };
  this.hO = function () {
    return !(aa.a0E() === 7 && a0.a1.r7());
  };
  this.gu = function (hz, i0) {
    if (!f2 || !this.hO()) {
      return false;
    }
    var aB;
    for (aB = f9.length - 1; aB >= 0; aB--) {
      if (
        f9[aB] &&
        this.fS[aB] &&
        hz > eo[aB] &&
        i0 > eq[aB] &&
        hz < eo[aB] + mP[aB] * f2[aB].width &&
        i0 < eq[aB] + mP[aB] * f2[aB].height
      ) {
        t.u(9, t.ry, new aBH("You are leaving Territorial.io.", b9.ph.a2J(a9X[aB])));
        return true;
      }
    }
    return false;
  };
  this.tq = function () {
    if (!f2 || !this.hO()) {
      return;
    }
    tr.imageSmoothingEnabled = true;
    var aB;
    for (aB = 0; aB < 5; aB++) {
      if (f9[aB] && this.fS[aB]) {
        tr.setTransform(mP[aB], 0, 0, mP[aB], eo[aB], eq[aB]);
        tr.drawImage(f2[aB], 0, 0);
      }
    }
    tr.setTransform(1, 0, 0, 1, 0, 0);
  };
}
function dT() {
  this.aBI = 0;
  this.aBJ = null;
  this.t4 = null;
  this.qt = null;
  this.y = null;
  this.tQ = null;
  this.t2 = null;
  this.message = null;
  this.aBK = null;
  this.qz = null;
  this.aBL = new aBM();
  this.a0B = 0;
  this.a85 = 0;
  this.dX = function () {
    this.a85 = be.eG;
    this.aBI = bF.s1.vM(bi.eE.data[105].value);
    this.t4 = new aBN();
    this.qt = new aBO();
    this.y = new aBP();
    this.tQ = new aBQ();
    this.t2 = new aBR();
    this.message = new aBS();
    this.aBK = new aBT();
    this.qz = new aBU();
    this.y.dX();
    bo.dX();
    this.a0B = 1;
    a0.a1.setState(1);
    aa.setState(0);
  };
  this.tK = function () {
    this.qz && this.qz.tK();
    this.aBJ = null;
    this.t4 = null;
    this.qt = null;
    this.y = null;
    this.tQ = null;
    this.t2 = null;
    this.message = null;
    this.aBK = null;
    this.qz = null;
    this.a0B = 0;
    bo.tK();
    a0.a1.setState(0);
  };
}
function aBN() {
  this.t5 = [[], [], [], []];
  this.t6 = [0, 0, 0, 0];
  this.aBV = [];
  this.aBW = function (aBX, rw, username, tB, a2n, aBY, elo, color, uu, aBZ) {
    this.t5[aBX].push(this.aBa(rw, username, tB, a2n, aBY, elo, color, uu, aBZ));
    if (bm.aBI === rw) {
      bm.aBJ = this.t5[aBX][this.t5[aBX].length - 1];
    }
    bm.y.aBb += t.ry === 29 && bm.y.qm[0] === aBX && bm.y.qm[2] === 1;
  };
  this.aBa = function (rw, username, tB, a2n, aBY, elo, color, uu, aBZ) {
    return {
      rw: rw,
      username: username,
      tB: tB,
      a2n: a2n,
      aBY: aBY,
      elo: elo,
      color: color,
      uu: uu,
      aBZ: aBZ,
    };
  };
  this.aBc = function (e2, aBX, tB, a2n, aBY, elo, uu) {
    var player = this.t5[aBX][e2];
    player.tB = tB;
    player.a2n = a2n;
    player.aBY = aBY;
    player.elo = elo;
    player.uu = uu;
    bm.y.aBb += t.ry === 29 && bm.y.qm[0] === aBX && bm.y.qm[2] === 1;
  };
  this.aBd = function (e2, aBX, aBe) {
    var player = this.t5[aBX][e2];
    var aBf = player.username;
    var aBg = S[53] + bE.s1.yM(player.rw, 2);
    if (aBe) {
      player.username = "[" + b9.qh.zk(aBf) + "] " + aBg;
    } else {
      player.username = aBg;
    }
    if (aBf.indexOf("Redacted") < 0) {
      player.aBh = aBf;
      player.aBi = 3;
    }
    bm.y.aBb += t.ry === 29 && bm.y.qm[0] === aBX && bm.y.qm[2] === 1;
  };
  this.aBj = function (e2, aBk, aBl) {
    var player = this.t5[aBk][e2];
    this.aBm(e2, aBk);
    this.t5[aBl].push(player);
    bm.y.aBb += t.ry === 29 && bm.y.qm[0] === aBl && bm.y.qm[2] === 1;
  };
  this.aBm = function (e2, aBk) {
    var t4 = this.t5[aBk];
    this.aBV.push(t4[e2]);
    if (this.aBV.length > 1000) {
      this.aBV.shift();
    }
    if (e2 >= this.t6[aBk]) {
      t4[e2] = t4[t4.length - 1];
    } else {
      this.t6[aBk]--;
      if (aBk === 2) {
        t4.splice(this.t6[aBk] + 1, 0, t4[t4.length - 1]);
        t4.splice(e2, 1);
      } else {
        t4[e2] = t4[this.t6[aBk]];
        t4[this.t6[aBk]] = t4[t4.length - 1];
      }
    }
    t4.pop();
    bm.y.aBb += t.ry === 29 && bm.y.qm[0] === aBk && bm.y.qm[2] === 1;
  };
  this.aBn = function (e2, ql) {
    bm.y.aBb += t.ry === 29 && bm.y.qm[0] === ql && bm.y.qm[2] === 1;
    var t4 = this.t5[ql];
    var pZ = t4[e2];
    if (ql === 2) {
      if (e2 >= this.t6[ql]) {
        var aBo = this.t6[ql];
        var elo = pZ.elo;
        while (aBo && elo > t4[aBo - 1].elo) {
          aBo--;
        }
        t4[e2] = t4[this.t6[ql]];
        t4.splice(this.t6[ql]++, 1);
        t4.splice(aBo, 0, pZ);
        return;
      }
      t4.splice(this.t6[ql]--, 0, pZ);
      t4.splice(e2, 1);
      return;
    }
    if (e2 >= this.t6[ql]) {
      aBp(t4, this.t6[ql]++, e2);
      return;
    }
    aBp(t4, --this.t6[ql], e2);
  };
  function aBp(g, sI, sJ) {
    var aBq = g[sI];
    g[sI] = g[sJ];
    g[sJ] = aBq;
  }
  this.aBr = function (rw) {
    var t5 = this.t5;
    var eh = t5.length;
    for (var aB = 0; aB < eh; aB++) {
      var t4 = t5[aB];
      var ke = t4.length;
      for (var f0 = 0; f0 < ke; f0++) {
        if (rw === t4[f0].rw) {
          return t4[f0];
        }
      }
    }
    return null;
  };
}
function aBM() {
  this.dg = function (e2) {
    var t6 = bm.t4.t6[e2];
    if (t6 < 2) {
      return false;
    }
    var qn = bm.y.qo[e2];
    var aBs = qn.aBt === 9 ? 333 : 512;
    t6 = Math.min(t6, aBs);
    if (qn.aBt === 8) {
      t6 -= t6 % 2;
    }
    var t4 = bm.t4.t5[e2];
    var aBu = t4.splice(0, t6);
    bm.t4.t6[e2] -= t6;
    var aBv = aBw(aBu);
    if (aBv === -1) {
      bm.t4.aBV = bm.t4.aBV.concat(aBu);
      if (bm.t4.aBV.length > 1000) {
        bm.t4.aBV.splice(0, bm.t4.aBV.length - 1000);
      }
      bm.y.aBb += t.ry === 29 && bm.y.qm[0] === e2 && bm.y.qm[2] === 1;
      return false;
    }
    if (qn.aBt === 8) {
      qn.aBx = (qn.aBx + (aBv >> 1)) % 1024;
      var gF = aBv - (aBv % 2);
      aBv = aBv % 2;
      aBu = aBu.slice(gF, gF + 2);
    }
    aw.dX(qn, aBu, aBv);
    return true;
  };
  this.aBy = function (qn, aBu, aBv) {
    var ek = (aD.data = new a3X());
    ek.spawningSeed = qn.spawningSeed;
    if (qn.aBt < 7) {
      ek.gameMode = 1;
      ek.numberTeams = qn.aBt + 2;
    } else if (qn.aBt === 9) {
      ek.gameMode = ek.isZombieMode = 1;
      ek.numberTeams = 2;
    } else {
      ek.gameMode = 0;
      ek.battleRoyaleMode = qn.aBt === 7 ? 0 : qn.aBt === 10 ? 1 : 2;
    }

    if (lobby != null) {
      if (lobby.settings.randomMapID === null) {
        qn.eN = lobby.settings.mapID;
      } else {
        qn.eN = lobby.settings.randomMapID;
      }
      if (lobby.settings.gameMode < 7) {
        ek.gameMode = 1;
        ek.numberTeams = lobby.settings.gameMode + 2;
      } else if (lobby.settings.gameMode === 9) {
        ek.gameMode = ek.isZombieMode = 1;
        ek.numberTeams = 2;
      } else {
        ek.gameMode = 0;
        ek.battleRoyaleMode = lobby.settings.gameMode === 7 ? 0 : lobby.settings.gameMode === 10 ? 1 : 2;
      }
    }

    ek.selectedPlayer = aBv;
    // ek.isContest = qn.aBz;
    ek.isContest = false;
    ek.mapType = bR.aC0(qn.eN) ? 0 : 1;
    bR.aC1(ek, qn.eN);
    ek.mapSeed = qn.mapSeed;
    var aC2 = (ek.humanCount = aBu.length);
    // ek.selectableSpawn = ek.gameMode === 1 || aC2 < 100;
    ek.selectableSpawn = !lobby.settings.randomSpawn;
    // ek.colorsData = new Uint32Array(aC2);
    // ek.playerNamesData = new Array(aC2);
    ek.colorsData = [];
    ek.playerNamesData = [];

    players = []; // Reset Players

    for (var aB = 0; aB < aC2; aB++) {
      // ek.colorsData[aB] = aBu[aB].color;
      // ek.playerNamesData[aB] = aBu[aB].username;

      const name = aBu[aB].username;
      if (lobby && lobby.players.some((player) => player.name === name)) {
        if (aB === ek.selectedPlayer) {
          ek.selectedPlayer = players.length;
        }
        players.push({
          originalId: aB,
          modifiedId: players.length,
        });
        ek.colorsData.push(aBu[aB].color);
        ek.playerNamesData.push(name);
      }
    }
    if (ek.battleRoyaleMode === 2) {
      ek.elo = new Uint16Array(aC2);
      for (aB = 0; aB < aC2; aB++) {
        ek.elo[aB] = aBu[aB].elo;
      }
    }

    ek.humanCount = players.length;

    aa.setState(8);
    bR.a7(qn.eN, ek.mapSeed);
    aD.gameInit();
    aD.a3a = 2;
  };
  function aBw(aBu) {
    if (!bm.aBJ) {
      return -1;
    }
    var eh = aBu.length;
    var rw = bm.aBJ.rw;
    for (var aB = 0; aB < eh; aB++) {
      if (aBu[aB].rw === rw) {
        return aB;
      }
    }
    return -1;
  }
}
function aBO() {
  var dt = ["", "", "", "Admin", "Clan Leader", S[108], "Clan Member", "", S[104], "Wealthy Player", "Patreon Member"];
  var aC3 = [bA.n1, bA.n1, bA.n2, bA.nV, bA.nW, bA.nI, bA.nb, bA.n2, bA.nt, bA.nj, bA.nv];
  var aC4 = [
    [1],
    [1],
    [1.2],
    [1.4, 1.2],
    [1.7, 1.4, 1.2],
    [1.4, 1.2],
    [1.4, 1.2],
    [1.2],
    [1.4, 1.2],
    [1.4, 1.2],
    [1.4, 1.2],
  ];
  var aC5 = [
    "Your account is too new!",
    "The server couldn't process your request.",
    "Spam detected!",
    "You are muted!",
    "Player couldn't be found.",
    "You don't have permission for this operation!",
    "Not enough gold!",
    "Action cancelled!",
    "User received this punishment already!",
    "Lobby restarts in 2 minutes!",
    "Lobby restarts in 10 seconds!",
  ];
  this.qv = function (aC6) {
    var aC7;
    if (aC6.id < 5) {
      aC7 = "@" + bE.s1.yM(aC6.rw, 5);
    }
    if (aC6.id === 0) {
      return aC7 + ": " + aC6.r;
    }
    if (aC6.id === 1) {
      var zl = "@" + bE.s1.yM(aC6.target, 5);
      if (aC6.aC8 === 0) {
        if (aC6.value >= 32768) {
          return (
            aC7 + S[63] + (aC6.value - 32768 + 1) + " gold against " + zl + " to weaken the latter's admin position. 📉"
          );
        }
        return aC7 + S[63] + (aC6.value + 1) + " gold for " + zl + " to strengthen the latter's admin position. 💪";
      } else if (aC6.aC8 === 1) {
        return aC7 + " sent " + Math.floor(aC6.value / 100) + " 🧈 gold to " + zl + ".";
      }
      return (
        aC7 +
        S[63] +
        (aC6.value / 10).toFixed(1) +
        " points for " +
        zl +
        " to acknowledge the latter as clan leader. ✅"
      );
    }
    if (aC6.id === 2) {
      if (aC6.aC8 === 0) {
        return aC7 + " was 🔇 muted for 1 Hour.";
      }
      if (aC6.aC8 === 1) {
        return "The username of " + aC7 + " was ✂️ redacted. Duration: 1 Day";
      }
      return aC7 + " 👢 was kicked.";
    }
    if (aC6.id === 3) {
      return (
        aC7 +
        bn.e5(aC6.aC8, bn.dz[aC6.aC8][aC6.value]) +
        "@" +
        bE.s1.yM(aC6.target, 5) +
        bn.e7(aC6.aC8, bn.dz[aC6.aC8][aC6.value])
      );
    }
    if (aC6.id === 4) {
      if (aC6.aC8 === 3 && aC6.rw === 0) {
        return "@" + bE.s1.yM(aC6.target, 5) + " was 🕵️‍♂️ stealth-reported.";
      }
      return aC7 + bn.e5(5, bn.dz[5][aC6.aC8]) + "@" + bE.s1.yM(aC6.target, 5) + bn.e7(5, bn.dz[5][aC6.aC8]);
    }
    if (aC6.id === 5) {
      return aC5[aC6.aC8];
    }
    if (aC6.id === 6) {
      return (
        "You are about to mention " +
        aC6.value +
        " player" +
        (aC6.value === 1 ? "" : "s") +
        ". This action will cost " +
        (Math.max(10 * aC6.value, 10) / 100).toFixed(2) +
        " Gold. Proceed? (yes / no)"
      );
    }
  };
  this.qu = function (aC6, a5w) {
    return {
      aC6: aC6,
      r: a5w,
      aC9: 0,
      fontSize: 1,
      qy: 0,
      aCA: aC6.id ? bA.nU : bA.mn,
    };
  };
  this.t9 = function (player, ql) {
    return (ql === 2 ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username;
  };
  this.tA = function (tB) {
    return aC3[tB];
  };
  this.aCB = function (tB, a2n) {
    if (tB < 3 || tB === 7) {
      return aC4[tB][0];
    }
    if (tB === 4) {
      return aC4[tB][a2n < 1 ? 0 : a2n < 10 ? 1 : 2];
    }
    return aC4[tB][a2n < 10 ? 0 : 1];
  };
  this.aCC = function (a2n) {
    return a2n === 0;
  };
  this.aBr = function (ql, rw) {
    var t5 = bm.t4.t5;
    var t4 = t5[ql];
    var eh = t4.length;
    for (var aB = 0; aB < eh; aB++) {
      if (rw === t4[aB].rw) {
        return t4[aB];
      }
    }
    for (var f1 = 0; f1 < t5.length; f1++) {
      if (ql === f1) {
        continue;
      }
      t4 = t5[f1];
      eh = t4.length;
      for (aB = 0; aB < eh; aB++) {
        if (rw === t4[aB].rw) {
          return t4[aB];
        }
      }
    }
    return null;
  };
  this.tC = function (pZ) {
    if (!bm.aBJ) {
      return false;
    }
    return pZ.rw === bm.aBJ.rw;
  };
  this.aCD = function (t4, aCE, aCF) {
    var zi = [];
    loop: for (var aB = aCE; aB < aCF; aB++) {
      var zj = b9.qh.zk(t4[aB].username);
      if (!zj) {
        continue;
      }
      for (var f1 = zi.length - 1; f1 >= 0; f1--) {
        if (zj === zi[f1].name) {
          zi[f1].g9++;
          continue loop;
        }
      }
      zi.push({
        name: zj,
        g9: 1,
      });
    }
    zi.sort(function (f0, f1) {
      return f1.g9 - f0.g9;
    });
    if (zi.length === 0) {
      return "";
    }
    var pO = zi[0].name + ": " + zi[0].g9;
    for (aB = 1; aB < zi.length; aB++) {
      pO += S[13] + zi[aB].name + ": " + zi[aB].g9;
    }
    return pO;
  };
  this.aCG = function (tB, a2n, aBY) {
    if (dt[tB].length === 0) {
      return "Rank: " + (a2n + 1);
    }
    return dt[tB] + S[120] + (a2n + 1) + (tB !== 3 && aBY < 100 ? S[13] + (dt[3] + S[120] + (aBY + 1)) : "");
  };
  this.aCH = function (rw) {
    var qo = bm.y.qo;
    for (var aB = 0; aB < qo.length; aB++) {
      aCI(qo[aB].qp, rw);
    }
    aCI(bm.message.aCJ(), rw, 1);
    bm.qz.aCH(rw);
  };
  function aCI(qp, rw, aCK) {
    for (var f1 = qp.length - 1; f1 >= 0; f1--) {
      var pZ = qp[f1];
      if (pZ.id === 0 && pZ.rw === rw) {
        pZ.r = S[98];
        if (aCK) {
          pZ.aCL = 1;
        }
      }
    }
  }
}
function aBR() {
  var rR = 0;
  var aCM = 0;
  var aCN = 0;
  var aCO = null;
  var aCP = null;
  this.aCQ = function () {
    if (!rR) {
      return;
    }
    if (aCM === aCR(aCP) && aCN === aCP.uu) {
      return;
    }
    aCN = aCP.uu;
    aCO.show(-1, -1, aCS(aCP, 0, 1), 1, 1);
  };
  this.tD = function (e, pZ, aCT) {
    var a7L = e.target.getBoundingClientRect();
    this.show(a7L.left, a7L.top, pZ, 0, aCT);
    e.target.addEventListener(S[48], function remove() {
      e.target.removeEventListener(S[48], remove);
      bm.t2 && bm.t2.r0(1);
    });
  };
  function aCS(pZ, aCT, aCU) {
    var pO = pZ.username;
    pO += S[13] + bm.qt.aCG(pZ.tB, pZ.a2n, pZ.aBY);
    pO += aCV(pZ);
    pO += "   IP: " + bE.s1.yM(pZ.aBZ, 2);
    pO += S[13] + ["🟥 Offline", "🟩 Online"][aCU ? aCM : aCR(pZ, aCT)];
    return pO;
  }
  function aCR(pZ, aCT) {
    if (aCT || bm.t4.aBr(pZ.rw)) {
      return (aCM = 1);
    }
    return (aCM = 0);
  }
  function aCV(pZ) {
    var sM = pZ.uu;
    if (sM < 1000) {
      return S[65] + sM;
    }
    sM = sM % 1024;
    if (sM < 1000) {
      return S[65] + sM + "k";
    }
    return S[65] + (sM - 999) + "M";
  }
  this.show = function (eo, eq, pZ, rV, aCT) {
    if (!aCO) {
      aCO = new rP();
    }
    aCP = pZ;
    aCN = aCP.uu;
    aCO.show(eo, eq, aCS(pZ, aCT), rV);
    rR = 1;
  };
  this.r0 = function (rb) {
    if (aCO && aCO.r0(rb)) {
      rR = 0;
      aCP = null;
    }
  };
}
function aBP() {
  this.qo = new Array(4);
  this.qm = [0, 0, 1, 0];
  this.aBb = 0;
  this.aCW = [0, 0];
  this.dX = function () {
    for (var aB = 0; aB < this.qo.length; aB++) {
      this.qo[aB] = new aCX();
    }
    this.qm[0] = bi.eE.data[158].value;
  };
  this.aCY = function () {
    aCZ(true);
  };
  this.aCa = function () {
    aCb();
    aCZ(false);
  };
  function aCZ(aCc) {
    if (bm.y.aBb && bm.y.qm[2] === 1) {
      t.a45(29).aCd();
    }
    bm.y.aBb = 0;
    t.a45(29).aCe();
    if (bm.y.qo[bm.y.qm[0]].sp === 0 || aCc) {
      t.a45(29).aCf();
    }
    bm.t2.aCQ();
  }
  function aCb() {
    for (var aB = 0; aB < bm.y.qo.length; aB++) {
      var qn = bm.y.qo[aB];
      if (qn.sp === 0) {
        qn.aCg = 0;
        continue;
      }
      qn.aCh = Math.max(qn.aCh - (qn.aCg % 2), 0);
      qn.aCg++;
    }
  }
  this.aCi = function (ql) {
    if (this.qm[0] !== ql) {
      return;
    }
    if (this.qm[2]) {
      return;
    }
    t.a45(29).aCj();
  };
}
function aBT() {
  var aCk = 0;
  var aCl = "";
  var aCm = 0;
  var aCn = 0;
  var aCo = 0;
  this.z8 = function (r) {
    if (aCk) {
      aCk = 0;
      var aCp = r.toLowerCase();
      if (aCp === "yes" || aCp === "y") {
        aCq(aCl);
        return;
      }
      aCr();
      return;
    }
    if (r.indexOf("@") < 0) {
      aCq(r);
      return;
    }
    var aCs = aCt(r);
    if (!aCs) {
      aCq(r);
      return;
    }
    aCl = r;
    var g = aCu(aCs);
    var aCv = aCw(aCs);
    if (aCx(aCs, aCv, r)) {
      return;
    }
    if (aCv.length === 0) {
      if (aCn || aCy(aCs)) {
        aCz(g.length);
      } else {
        aCq(r);
      }
      return;
    }
    if (aCs.length === aCo) {
      aCq(r);
      return;
    }
    aD0(g, aCv);
    aCz(g.length);
  };
  function aCq(a5w) {
    az.aD1.aD2(3, a5w);
  }
  function aCr() {
    bm.message.aD3({
      id: 5,
      aC8: 7,
    });
  }
  function aCz(g9) {
    aCk = 1;
    bm.message.aD3({
      id: 6,
      value: g9,
    });
  }
  function aCy(aCs) {
    var eh = aCs.length;
    for (var aB = 0; aB < eh; aB++) {
      var i = aCs[aB];
      if (i === "@all" || i === "@everyone") {
        return 1;
      }
    }
    return 0;
  }
  function aCu(aCs) {
    var eh = aCs.length;
    var aD4 = [0, 0, 0, 0];
    for (var aB = 0; aB < eh; aB++) {
      var i = aCs[aB];
      for (var f0 = 0; f0 < 4; f0++) {
        if (i === S[107] + (f0 + 1)) {
          aD4[f0] = 1;
        }
      }
    }
    aCn = b9.pq.a1X(aD4);
    if (aCn % 4 === 0) {
      return b9.pq.a1p(bm.t4.t5);
    }
    for (f0 = 0; f0 < 4; f0++) {
      if (aD4[f0]) {
        aD4[f0] = bm.t4.t5[f0];
      } else {
        aD4[f0] = [];
      }
    }
    return b9.pq.a1p(aD4);
  }
  function aCw(aCs) {
    var aCv = [];
    aCm = 0;
    aCo = 0;
    var eh = aCs.length;
    for (var aB = 0; aB < eh; aB++) {
      var i = aCs[aB];
      var ke = i.length;
      if (b9.qh.startsWith(i, "@[")) {
        if (ke <= 9 && b9.qh.a2N(i, "]")) {
          aCv.push({
            id: 0,
            f9: i.substring(2, ke - 1).toUpperCase(),
          });
        }
        continue;
      }
      if (ke === 6) {
        if (b9.qh.startsWith(i, S[107])) {
          continue;
        }
        aCo++;
        aCv.push({
          id: 1,
          f9: bF.s1.vM(i.substring(1)),
        });
        continue;
      }
      if (ke > 1 && ke < 5) {
        var aD5 = b6.data.aAw(i.substring(1));
        if (aD5 >= 0) {
          aCv.push({
            id: 2,
            f9: aD5,
            e2: aB,
          });
          aCm = 1;
        }
      }
    }
    return aCv;
  }
  function aCx(aCs, aCv, r) {
    if (!aCm) {
      return 0;
    }
    var eh = aCv.length;
    for (var aB = 0; aB < eh; aB++) {
      if (aCv[aB].id === 2) {
        r = r.replace(aCs[aCv[aB].e2], "@" + aCv[aB].f9);
      }
    }
    aCl = r;
    aCk = 1;
    aCq(r.slice(0, 126) + "|");
    return 1;
  }
  function aD0(g, aCv) {
    var ke = aCv.length;
    if (ke === 0) {
      return g;
    }
    var eh = g.length;
    loop: for (var aB = eh - 1; aB >= 0; aB--) {
      for (var f0 = 0; f0 < ke; f0++) {
        if (aCv[f0].id === 0) {
          if (aCv[f0].f9 === b9.qh.zk(g[aB].username)) {
            continue loop;
          }
          continue;
        }
        if (aCv[f0].id === 1) {
          if (aCv[f0].f9 === g[aB].rw) {
            continue loop;
          }
          continue;
        }
      }
      g[aB] = g[--eh];
      g.pop();
    }
  }
  function aCt(r) {
    var aD6 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
    return r.match(aD6);
  }
  this.aD7 = function (r) {
    var aCs = aCt(r);
    if (!aCs) {
      return r;
    }
    var a5 = new RegExp("^[0-9]+$");
    var eh = aCs.length;
    for (var aB = 0; aB < eh; aB++) {
      var i = aCs[aB].substring(1);
      var ke = i.length;
      if (ke >= 1 && ke <= 3 && a5.test(i)) {
        var aD5 = parseInt(i, 10);
        if (!isNaN(aD5) && aD5 >= 0 && aD5 < b6.data.g.length) {
          r = r.replace("@" + i, "@" + b6.data.g[aD5]);
        }
      }
    }
    return r;
  };
}
function aBS() {
  var aD8;
  var aD9 = [];
  var aDA = -1;
  var aDB = 0;
  var aDC = 0;
  this.aD3 = function (aC6) {
    if (aC6.id === 2 && aC6.aC8 === 3) {
      bm.qt.aCH(aC6.rw);
      return;
    }
    var pZ = bm.qt.qu(aC6, bm.qt.qv(aC6));
    if (aC6.id === 5 || aC6.id === 6) {
      t.a45(29).aDD().qx(pZ);
      if (aC6.id !== 5) {
        return;
      }
    }
    var f1 = be.eG < aDB + 20000;
    if (aDA === aD9.length - 1 || !f1) {
      aDA = aD9.length;
    }
    aD9.push(aC6);
    !bi.eE.data[14].value && bo.play();
    if (!aD8) {
      return;
    }
    if (bi.eE.data[13].value || (aDC && f1)) {
      aD8.rC(aD9.length);
    } else {
      aDE();
    }
  };
  this.show = function () {
    aDF();
  };
  function aDG() {
    aDB = be.eG;
    if (this.tH === 3) {
      aDC = 1;
      aDF();
    } else {
      aDA = (aD9.length + aDA + 2 * this.tH - 1) % aD9.length;
      aDE();
    }
  }
  function aDE() {
    if (aD9.length === 0) {
      return;
    }
    aDC = 0;
    aD8 && aD8.tK();
    aD8 = new tE(aDG);
    aD8.rC(aDA, aD9.length);
    aD8.show(aD9[aDA]);
    bm.message.resize();
  }
  function aDF() {
    aD8 && aD8.tK();
    aD8 = new tL(aDE);
    aD8.rC(aD9.length);
    aD8.show();
    bm.message.resize();
  }
  this.r0 = function () {
    aDA = aD9.length - 1;
    aD8 && aD8.tK();
    aD8 = null;
  };
  this.resize = function () {
    aD8 && aD8.resize();
  };
  this.aCJ = function () {
    return aD9;
  };
}
function aBQ() {
  var aDH = null;
  var aDI = null;
  var aDJ = 0;
  var aDK = 0;
  var aDL = null;
  this.aDM = function (e, pZ) {
    aDJ = 1;
    aDI = pZ;
    aDH = new tM([
      new w(L(130), aDN, aDI.tB === 0 ? 1 : 0),
      new w(L(131), aDO, aDP()),
      new w(L(132, 0, S[66]), aDQ, aDR()),
      new w(L(133), aDS, 0),
    ]);
    aDL = {
      clientX: e.clientX,
      clientY: e.clientY,
    };
    aDT(aDL.clientX, aDL.clientY, 1);
  };
  this.a16 = function (code) {
    if (t.ry !== 29) {
      return false;
    }
    if (!aDI) {
      return false;
    }
    if (code.length < 1) {
      return true;
    }
    if (code === S[38]) {
      this.r0();
      return true;
    }
    if (!b9.qh.startsWith(code, "Numpad") && !b9.qh.startsWith(code, "Digit")) {
      return true;
    }
    var f9 = parseInt(code[code.length - 1], 10);
    if (isNaN(f9)) {
      return true;
    }
    if (aDJ === 0) {
      this.aDM(aDL, aDI);
      return true;
    }
    if (!aDH) {
      return false;
    }
    if (aDJ === 1) {
      if (f9 <= 1) {
        aDN();
      } else if (f9 === 2) {
        aDO();
      } else if (f9 === 3) {
        aDQ();
      } else {
        aDS();
        this.r0();
      }
      return true;
    }
    if (aDJ === 2) {
      if (aDK === 1) {
        if (f9 <= 1) {
          aDU(0, 0);
          this.r0();
          return true;
        } else if (f9 === 2) {
          aDV();
        } else {
          aDW();
        }
        return true;
      }
      aDU(5, bK.pF(f9 - 1, 0, 3));
      this.r0();
      return true;
    }
    aDU(aDK, bK.pF(f9 - 1, 0, bn.dz[aDK].length - 1));
    this.r0();
    return true;
  };
  function aDN() {
    if (aDI.tB === 0) {
      return;
    }
    bm.tQ.r0();
    t.u(
      8,
      29,
      new rz(
        25,
        {
          s0: 0,
          rw: bE.s1.yM(aDI.rw, 5),
          rx: 0,
        },
        29
      )
    );
  }
  function aDO() {
    var eo = aDH.eo;
    var eq = aDH.eq;
    bm.tQ.r0();
    aDH = new tM([
      new w(
        "Kick User",
        function () {
          aDU(0, 0);
        },
        aDX(0, 0)
      ),
      new w("Block Chat", aDV, aDX(1, 0)),
      new w("Censor Username", aDW, aDX(2, 0)),
    ]);
    aDT(eo, eq);
    aDJ = 2;
    aDK = 1;
  }
  function aDX(id, e2) {
    if (!bm.aBJ) {
      return 1;
    }
    if (bm.qt.tC(aDI)) {
      return 1;
    }
    var e1 = aDI.a2n;
    var aBY = bm.aBJ.aBY;
    if (aBY >= e1) {
      return 1;
    }
    if (1 - bn.e0(id, aBY, e2)) {
      return 1;
    }
    if (aDI.tB === 4) {
      if (e1 >= 50) {
        return +(aBY >= e1);
      }
      if (e1 >= 20) {
        return +(aBY >= e1 / 2);
      }
      return +(aBY >= e1 / 3);
    }
    return 0;
  }
  function aDR() {
    if (!bm.aBJ) {
      return 1;
    }
    if (bm.qt.tC(aDI)) {
      return 1;
    }
    return 0;
  }
  function aDP() {
    if (!bm.aBJ) {
      return 1;
    }
    if (bm.qt.tC(aDI)) {
      return 1;
    }
    if (bm.aBJ.aBY >= 100) {
      return 1;
    }
    if (bm.aBJ.aBY >= aDI.a2n) {
      return 1;
    }
    return 0;
  }
  function aDQ() {
    var eo = aDH.eo;
    var eq = aDH.eq;
    bm.tQ.r0();
    var aDY = aDR();
    aDH = new tM([
      new w(
        bn.dz[5][0],
        function () {
          aDU(5, 0);
        },
        aDY
      ),
      new w(
        bn.dz[5][1],
        function () {
          aDU(5, 1);
        },
        aDY
      ),
      new w(
        bn.dz[5][2],
        function () {
          aDU(5, 2);
        },
        aDY
      ),
      new w(
        aDI.aBY < 100 ? "Stealth Report" : bn.dz[5][3],
        function () {
          aDU(5, 3);
        },
        aDY
      ),
    ]);
    aDT(eo, eq);
    aDJ = 2;
    aDK = 2;
  }
  function aDS() {
    if (t.ry === 29) {
      t.a44().aBK(bE.s1.yM(aDI.rw, 5));
    }
  }
  function aDU(id, value) {
    az.aD1.aD2(5, {
      id: id,
      value: value,
      rw: aDI.rw,
    });
  }
  function aDV() {
    var eo = aDH.eo;
    var eq = aDH.eq;
    bm.tQ.r0();
    aDH = new tM([
      new w(
        bn.dz[1][0],
        function () {
          aDU(1, 0);
        },
        aDX(1, 0)
      ),
      new w(
        bn.dz[1][1],
        function () {
          aDU(1, 1);
        },
        aDX(1, 1)
      ),
      new w(
        bn.dz[1][2],
        function () {
          aDU(1, 2);
        },
        aDX(1, 2)
      ),
      new w(
        bn.dz[1][3],
        function () {
          aDU(1, 3);
        },
        aDX(1, 3)
      ),
      new w(
        bn.dz[1][4],
        function () {
          aDU(1, 4);
        },
        aDX(1, 4)
      ),
    ]);
    aDT(eo, eq);
    aDJ = 3;
    aDK = 1;
  }
  function aDW() {
    var eo = aDH.eo;
    var eq = aDH.eq;
    bm.tQ.r0();
    aDH = new tM([
      new w(
        bn.dz[2][0],
        function () {
          aDU(2, 0);
        },
        aDX(2, 0)
      ),
      new w(
        bn.dz[2][1],
        function () {
          aDU(2, 1);
        },
        aDX(2, 1)
      ),
      new w(
        bn.dz[2][2],
        function () {
          aDU(2, 2);
        },
        aDX(2, 2)
      ),
    ]);
    aDT(eo, eq);
    aDJ = 3;
    aDK = 2;
  }
  function aDZ() {
    var eo = aDH.eo;
    var eq = aDH.eq;
    bm.tQ.r0();
    aDH = new tM([
      new w(
        bn.dz[3][0],
        function () {
          aDU(3, 0);
        },
        aDX(3, 0)
      ),
      new w(
        bn.dz[3][1],
        function () {
          aDU(3, 1);
        },
        aDX(3, 1)
      ),
      new w(
        bn.dz[3][2],
        function () {
          aDU(3, 2);
        },
        aDX(3, 2)
      ),
    ]);
    aDT(eo, eq);
    aDJ = 3;
    aDK = 3;
  }
  function aDa() {
    var eo = aDH.eo;
    var eq = aDH.eq;
    bm.tQ.r0();
    aDH = new tM([
      new w(
        bn.dz[4][0],
        function () {
          aDU(4, 0);
        },
        aDX(4, 0)
      ),
      new w(
        bn.dz[4][1],
        function () {
          aDU(4, 1);
        },
        aDX(4, 1)
      ),
      new w(
        bn.dz[4][2],
        function () {
          aDU(4, 2);
        },
        aDX(4, 2)
      ),
      new w(
        bn.dz[4][3],
        function () {
          aDU(4, 3);
        },
        aDX(4, 3)
      ),
      new w(
        bn.dz[4][4],
        function () {
          aDU(4, 4);
        },
        aDX(4, 4)
      ),
    ]);
    aDT(eo, eq);
    aDJ = 3;
    aDK = 4;
  }
  function aDT(eo, eq, tS) {
    aDH.show(eo, eq, tS);
    bm.t2.show(aDH.eo, aDH.eq, aDI, 1);
  }
  this.r0 = function () {
    aDJ = 0;
    aDH && aDH.r0();
    aDH = null;
    bm.t2.r0();
  };
}
function aCX() {
  this.sp = 0;
  this.eN = 0;
  this.mapSeed = 0;
  this.aBt = 0;
  this.aDb = 0;
  this.aDc = 0;
  this.aBz = 0;
  this.aCh = 0;
  this.spawningSeed = 0;
  this.a0J = 0;
  this.aBx = 0;
  this.qp = [];
  this.qq = 1048575;
  this.aCg = 0;
  this.aDd = [
    {
      eN: 0,
      mapSeed: 0,
      aBt: 0,
      eG: 100,
      aBz: 0,
    },
    {
      eN: 1,
      mapSeed: 0,
      aBt: 1,
      eG: 200,
      aBz: 0,
    },
    {
      eN: 2,
      mapSeed: 0,
      aBt: 2,
      eG: 300,
      aBz: 0,
    },
    {
      eN: 3,
      mapSeed: 0,
      aBt: 3,
      eG: 400,
      aBz: 0,
    },
    {
      eN: 0,
      mapSeed: 0,
      aBt: 9,
      eG: 500,
      aBz: 0,
    },
    {
      eN: 1,
      mapSeed: 0,
      aBt: 10,
      eG: 600,
      aBz: 0,
    },
    {
      eN: 2,
      mapSeed: 0,
      aBt: 8,
      eG: 700,
      aBz: 0,
    },
    {
      eN: 3,
      mapSeed: 0,
      aBt: 3,
      eG: 800,
      aBz: 0,
    },
  ];
}
function aBU() {
  var aDe = [];
  var sB = [];
  var aDf = [];
  this.tK = function () {
    for (var aB = 0; aB < sB.length; aB++) {
      sB[aB].onclick = sB[aB].onmouseover = null;
    }
    sB = null;
    aDf = null;
  };
  this.transform = function (pZ) {
    var pM = document.createElement(S[0]);
    var aDg = aDh(pZ);
    for (var aB = 0; aB < aDg.length; aB++) {
      pM.appendChild(aDg[aB]);
    }
    if (pZ.aC6.id === 0) {
      pM.vx143 = pZ.aC6;
      aDf.push(pM);
    }
    pM.style.margin = "0.6em 0.6em";
    pZ.qy && (pM.style.marginLeft = pM.style.marginRight = S[6]);
    pM.style.font = S[6];
    var aDi = pZ.aC6.id > 0;
    pZ.aC9 && (pM.style.fontWeight = S[36]);
    aDi && (pM.style.paddingLeft = "0.7em");
    aDi && (pM.style.fontStyle = "italic");
    pM.style.fontSize = pZ.fontSize.toFixed(2) + "em";
    return pM;
  };
  function aDh(pZ) {
    var r = pZ.r;
    var aDg = [];
    while (true) {
      var f2 = aDj(r, 0);
      if (f2 === -1) {
        aDg.push(aDk(r, pZ));
        break;
      }
      if (f2 === 0) {
        aDg.push(aDl(r.substring(1, 6), pZ, f2));
      } else {
        aDg.push(aDk(r.substring(0, f2), pZ));
        aDg.push(aDl(r.substring(f2 + 1, f2 + 6), pZ, f2));
      }
      r = r.substring(f2 + 6);
    }
    return aDg;
  }
  function aDl(pO, pZ, f2) {
    var aDm = aDn(pO);
    if (f2 === 0 && pZ.aC6.id === 0 && pZ.qy) {
      pZ.fontSize = bm.qt.aCB(aDm.tB, aDm.a2n);
      pZ.aC9 = bm.qt.aCC(aDm.a2n);
    }
    var qg = document.createElement(S[14]);
    qg.textContent = aDo(aDm, pZ, f2);
    qg.style.display = S[49];
    qg.style.color = bm.qt.tA(aDm.tB);
    qg.style.cursor = S[31];
    qg.style.margin = "0";
    qg.style.font = S[6];
    qg.style.minWidth = qg.style.minHeight = S[17];
    bm.qt.tC(aDm) && (qg.style.textDecoration = S[69]);
    bm.qt.aCC(aDm.a2n) && (qg.style.fontWeight = S[36]);
    qg.onclick = function (e) {
      bm.tQ.aDM(e, aDm);
    };
    !bI.qA() &&
      (qg.onmouseover = function (e) {
        bm.t2.tD(e, aDm);
      });
    sB.push(qg);
    return qg;
  }
  function aDo(aDm, pZ, f2) {
    if (aDm.aBi) {
      aDm.aBi--;
      var aDp = pZ.aC6.id === 2 || ((pZ.aC6.id === 3 || pZ.aC6.id === 4) && f2 !== 0);
      return aDm.username + (aDp ? " (" + aDm.aBh + ")" : "");
    }
    if (pZ.aC6.aCL) {
      return S[53] + bE.s1.yM(aDm.rw, 2);
    }
    return aDm.username;
  }
  function aDk(r, pZ) {
    var qg = document.createElement(S[14]);
    qg.textContent = r;
    qg.style.color = pZ.aCA;
    qg.style.margin = "0";
    qg.style.font = S[6];
    return qg;
  }
  function aDn(pO) {
    var rw = bF.s1.vM(pO);
    var aDm = bm.t4.aBr(rw);
    if (aDm) {
      aDe.push(aDm);
      while (aDe.length > 75) {
        aDe.shift();
      }
      return aDm;
    }
    var aBV = bm.t4.aBV;
    for (var aB = aBV.length - 1; aB >= 0; aB--) {
      aDm = aBV[aB];
      if (rw === aDm.rw) {
        aDe.push(aDm);
        return aDm;
      }
    }
    for (aB = aDe.length - 1; aB >= 0; aB--) {
      aDm = aDe[aB];
      if (rw === aDm.rw) {
        aDe.push(aDm);
        return aDm;
      }
    }
    return bm.t4.aBa(rw, pO, 1, 999999, 999999, 0, 0, 0, 0);
  }
  function aDj(r, position) {
    var aB = r.indexOf("@", position);
    if (aB < 0) {
      return -1;
    }
    var pO = r.substring(aB + 1, aB + 6);
    if (pO.length !== 5) {
      return aDj(r, aB + 1);
    }
    if (b9.qh.startsWith(pO, "room")) {
      return aDj(r, aB + 1);
    }
    var aDq = new RegExp("^[a-zA-Z0-9_-]+$");
    if (!aDq.test(pO)) {
      return aDj(r, aB + 1);
    }
    var aDr = r.substring(aB + 6, aB + 7);
    if (aDr.length !== 1) {
      return aB;
    }
    var aDs = new RegExp("^[ :!.]+$");
    if (!aDs.test(aDr)) {
      return aDj(r, aB + 1);
    }
    return aB;
  }
  this.aDt = function (aDu) {
    if (!aDu) {
      return;
    }
    if (!((aDu.id === 2 && aDu.aC8 === 1) || (aDu.id === 3 && aDu.aC8 === 2))) {
      return;
    }
    var rw = aDu.id === 3 ? aDu.target : aDu.rw;
    if (bm.t4.aBr(rw)) {
      return;
    }
    var aBg = S[53] + bE.s1.yM(rw, 2);
    var aBV = bm.t4.aBV;
    for (var aB = aBV.length - 1; aB >= 0; aB--) {
      aDv(aBV[aB], aBg, rw);
    }
    for (aB = aDe.length - 1; aB >= 0; aB--) {
      aDv(aDe[aB], aBg, rw);
    }
  };
  function aDv(aDm, aBg, rw) {
    if (rw === aDm.rw && !aDm.aBh) {
      aDm.aBh = aDm.username;
      aDm.aBi = 3;
      aDm.username = aBg;
    }
  }
  this.aCH = function (rw) {
    var aDw = aDf;
    for (var aB = aDw.length - 1; aB >= 0; aB--) {
      var ek = aDw[aB];
      if (ek.vx143.rw === rw) {
        while (ek.firstChild) {
          ek.removeChild(ek.firstChild);
        }
        ek.vx143.r = S[98];
        var aDg = aDh(bm.qt.qu(ek.vx143, bm.qt.qv(ek.vx143)));
        for (var f0 = 0; f0 < aDg.length; f0++) {
          ek.appendChild(aDg[f0]);
        }
        aDw.splice(aB, 1);
      }
    }
  };
}
function cM() {
  var aDx;
  var aDy;
  var aDz;
  this.i = 0;
  this.j = 0;
  this.eq = 0;
  this.gap = 0;
  this.dX = function () {
    aDx = -1;
    aDy = bA.mn;
    aDz = "rgba(255,255,255,0.16)";
    this.qH = new Array(7);
    this.j = Math.floor((a0.a1.r7() ? 0.123 : 0.093) * h.pj);
    this.i = Math.floor((a0.a1.r7() ? 3.96 : 4.2) * this.j);
    this.gap = Math.floor(0.025 * this.i);
    var aE0 = Math.floor(0.26 * this.j);
    var aE1 = b9.ph.rY(1, aE0);
    this.qH[0] = {
      eo: 0,
      eq: 0,
      i: Math.floor(0.6 * this.i - this.gap / 2),
      j: this.j,
      a5w: "Multiplayer",
      font: aE1,
      aE2: "rgba(22,88,22,0.8)",
      fontSize: aE0,
    };
    aE0 = Math.floor(0.18 * this.j);
    aE1 = b9.ph.rY(1, aE0);
    this.qH[1] = {
      eo: 0,
      eq: 0,
      i: this.i - this.qH[0].i - this.gap,
      j: this.j,
      a5w: "Single Player",
      font: aE1,
      aE2: "rgba(22,88,88,0.8)",
      fontSize: aE0,
    };
    this.qH[2] = {
      eo: 0,
      eq: 0,
      i: this.i,
      j: Math.floor(0.3 * this.j),
      a5w: "",
      font: this.qH[1].font,
      aE2: S[74],
      fontSize: this.qH[1].fontSize,
    };
    this.qH[3] = {
      eo: 0,
      eq: 0,
      i: this.i,
      j: this.j,
      a5w: S[105],
      font: this.qH[0].font,
      aE2: S[45],
      fontSize: this.qH[0].fontSize,
    };
    this.qH[4] = {
      eo: 0,
      eq: 0,
      i: this.i,
      j: Math.floor(0.3 * this.j),
      a5w: "The game was updated!",
      font: this.qH[1].font,
      aE2: S[74],
      fontSize: this.qH[1].fontSize,
    };
    this.qH[5] = {
      eo: 0,
      eq: 0,
      i: this.qH[0].i,
      j: Math.floor(0.8 * this.j),
      a5w: S[100],
      font: this.qH[0].font,
      aE2: S[76],
      fontSize: this.qH[0].fontSize,
    };
    this.qH[6] = {
      eo: 0,
      eq: 0,
      i: this.qH[1].i,
      j: this.qH[5].j,
      a5w: S[105],
      font: this.qH[0].font,
      aE2: S[45],
      fontSize: this.qH[0].fontSize,
    };
    this.a8H();
  };
  this.a8H = function () {
    this.eq = Math.floor(0.54 * h.j);
    this.qH[0].eo = Math.floor(0.5 * h.i - 0.5 * this.i);
    this.qH[1].eo = this.qH[0].eo + this.qH[0].i + this.gap;
    this.qH[2].eo = this.qH[3].eo = this.qH[0].eo;
    this.qH[4].eo = this.qH[5].eo = this.qH[0].eo;
    this.qH[6].eo = this.qH[1].eo;
    this.qH[0].eq = Math.floor(0.54 * h.j);
    this.qH[1].eq = this.qH[0].eq;
    this.qH[2].eq = Math.floor((h.j - this.qH[2].j - this.qH[3].j - this.gap) / 2);
    this.qH[3].eq = this.qH[2].eq + this.qH[2].j + this.gap;
    this.qH[4].eq = Math.floor((h.j - this.qH[4].j - this.qH[5].j - this.gap) / 2);
    this.qH[5].eq = this.qH[6].eq = this.qH[4].eq + this.qH[4].j + this.gap;
  };
  this.aE3 = function () {
    aE4(0);
    aE4(1);
  };
  this.aE5 = function () {
    aE4(2);
    aE4(3);
  };
  this.aE6 = function () {
    aE4(4);
    aE4(5);
    aE4(6);
  };
  this.a0Y = function (eo, eq, lY) {
    var aB = -1;
    if (aa.a0E() === 0) {
      aB = this.a12(eo, eq, 0, 2);
    } else if (aa.a0E() === 3) {
      aB = this.a12(eo, eq, 3, 1);
    } else if (aa.a0E() === 5) {
      aB = this.a12(eo, eq, 5, 2);
    }
    if (aDx !== aB) {
      aDx = aB;
      if (lY) {
        be.df = true;
      }
    }
    if (aB !== -1) {
      aT.qj();
      return true;
    }
    return false;
  };
  this.a12 = function (eo, eq, aE7, size) {
    for (var aB = aE7; aB < aE7 + size; aB++) {
      if (
        eo >= this.qH[aB].eo &&
        eq >= this.qH[aB].eq &&
        eo <= this.qH[aB].eo + this.qH[aB].i &&
        eq <= this.qH[aB].eq + this.qH[aB].j
      ) {
        return aB;
      }
    }
    return -1;
  };
  function aE4(aB) {
    var button = aY.qH[aB];
    var eo = button.eo;
    var eq = button.eq;
    var i = button.i;
    var j = button.j;
    tr.fillStyle = button.aE2;
    tr.fillRect(eo, eq, i, j);
    if (aB === aDx) {
      tr.fillStyle = aDz;
      tr.fillRect(eo, eq, i, j);
    }
    tr.lineWidth = bb.y5;
    tr.strokeStyle = aDy;
    tr.strokeRect(eo, eq, i, j);
    aE8(button);
  }
  function aE8(button) {
    var eo = button.eo;
    var eq = button.eq;
    var i = button.i;
    var j = button.j;
    b9.ph.textAlign(tr, 1);
    b9.ph.textBaseline(tr, 1);
    tr.font = button.font;
    tr.fillStyle = aDy;
    tr.fillText(button.a5w, Math.floor(eo + i / 2), Math.floor(eq + j / 2 + 0.1 * button.fontSize));
  }
}
function cN() {
  var aE9;
  var aEA;
  var aEB, aEC, aED, aEE, aEF, aEG, aEH;
  var aEI;
  var aEJ;
  var aEK;
  var aEL;
  var aEM = 1;
  this.aEN = 1;
  this.dX = function () {
    aa.setState(6);
    aE9 = 0;
    aEA = 1;
    aEG = "rgba(0,220,120,0.4)";
    aEH = S[45];
    this.resize();
    be.df = true;
    aEM = 1;
    aEL = this.aEN - 1;
    aEO(1);
  };
  this.resize = function () {
    aEC = Math.floor((a0.a1.r7() ? 0.5 : 0.25) * h.pj);
    aED = aEC + 12;
    aEB = Math.floor(0.125 * aEC);
    aEF = aEB * 3;
    aEE = Math.floor(0.225 * aEC);
    aEJ = Math.floor(0.3 * aEB);
    aEI = b9.ph.rY(0, aEJ);
  };
  function aEO(aEP) {
    if (!aEP && aEL === 1 && aEM) {
      aEM = 0;
      az.y.close(aEL, 3280);
    } else {
      aEL = (aEL + 1) % az.y.aEQ;
    }
    aEK = be.eG;
    if (az.y.aER(aEL, 4)) {
      az.aD1.aES(aEL);
    }
  }
  this.a0I = function (a09) {
    if (a09 === aEL) {
      aET();
    }
  };
  function aEU() {
    if (be.eG > aEK + 12000) {
      aET();
    }
  }
  function aET() {
    if (aEL === 0) {
      o.a0M(3249);
      return;
    }
    aEO();
  }
  this.gu = function (eo, eq) {
    var mD = Math.floor((h.i - aED) / 2);
    var mE = Math.floor(0.5 * (h.j - bb.gap - aEB - aEE)) + aEB + bb.gap;
    if (eo > mD && eo < mD + aED && eq > mE && eq < mE + aEE) {
      this.a1E();
      aY.a0Y(eo, eq, false);
      return true;
    }
    return false;
  };
  this.a1E = function () {
    az.y.a0O(3260);
    t.y.z();
  };
  this.ir = function () {
    if (aa.a0E() !== 6) {
      return;
    }
    aEU();
    aEV();
  };
  function aEV() {
    aE9 += aEA * 0.07 * (aE9 < 16 ? 5 + aE9 : aE9 > 84 ? 105 - aE9 : 17);
    if (aE9 > 100) {
      aE9 = 100;
      aEA = -1;
    } else if (aE9 < 0) {
      aE9 = 0;
      aEA = 1;
    }
    aEG = S[77] + Math.floor(190 - 1.9 * aE9) + "," + Math.floor(120 - 1.2 * aE9) + "," + (0.4 + 0.004 * aE9) + ")";
    aEH = S[77] + Math.floor(1.9 * aE9) + "," + Math.floor(1.2 * aE9) + "," + (0.8 - 0.004 * aE9) + ")";
    be.df = true;
  }
  this.tq = function () {
    var eo = Math.floor((h.i - aED) / 2);
    var eq = Math.floor(0.5 * (h.j - bb.gap - aEB - aEE));
    aEW(L(134), eq, 3, aE9 / 100);
    aEX(eo, eq + aEB + bb.gap, aED, aEE, L(37));
  };
  function aEX(eo, eq, i, j, a5w) {
    tr.fillStyle = bA.mi;
    tr.fillRect(eo, eq, i, j);
    tr.lineWidth = 3;
    tr.strokeStyle = bA.mn;
    tr.strokeRect(eo, eq, i, j);
    var eh = Math.floor(0.3 * j);
    b9.ph.textAlign(tr, 1);
    b9.ph.textBaseline(tr, 1);
    tr.font = b9.ph.rY(0, eh);
    tr.fillStyle = bA.mn;
    tr.fillText(a5w, Math.floor(eo + i / 2), Math.floor(eq + j / 2 + 0.1 * eh));
  }
  function aEW(title, eq, a7z, sp) {
    tr.fillStyle = aEH;
    aEY(eq, a7z, 1);
    tr.fill();
    tr.fillStyle = aEG;
    aEY(eq, a7z, sp);
    tr.fill();
    tr.strokeStyle = bA.mn;
    aEY(eq, a7z, 1);
    tr.stroke();
    aEZ(title, eq);
  }
  function aEZ(aEa, eq) {
    b9.ph.textAlign(tr, 1);
    b9.ph.textBaseline(tr, 1);
    tr.font = aEI;
    tr.fillStyle = bA.mn;
    tr.fillText(aEa, Math.floor(0.5 * h.i), Math.floor(eq + 0.58 * aEB));
  }
  function aEY(eq, a7z, sp) {
    var mD = Math.floor((h.i - aEC) / 2) + aEF;
    var mQ = mD + Math.floor(sp * (aEC - 2 * aEF));
    tr.lineWidth = a7z;
    tr.beginPath();
    tr.moveTo(mD, eq);
    tr.lineTo(mQ, eq);
    tr.lineTo(Math.floor(mD - aEF + sp * aEC), eq + aEB);
    tr.lineTo(mD - aEF, eq + aEB);
    tr.closePath();
  }
}
function cO() {
  var a05 = 0;
  this.dX = function () {
    aY.dX();
    a05 = 0;
  };
  this.setState = function (aEb) {
    a05 = aEb;
  };
  this.a0E = function () {
    return a05;
  };
  this.aEc = function () {
    this.setState(8);
    t.x();
  };
  this.a16 = function (e) {
    if (!bR.vc) {
      return false;
    }
    if (be.eG < 400) {
      return;
    }
    if (e.key === S[39] || e.key === S[38]) {
      if (this.aEd()) {
        return true;
      }
      if (e.key === S[39]) {
        if (a05 === 0) {
          return true;
        } else if (a05 === 7) {
          return true;
        }
      }
    }
    return false;
  };
  this.aEe = function () {
    bY.resize();
  };
  this.aEd = function () {
    if (bY.r0()) {
      return true;
    }
    return false;
  };
  this.gu = function (eo, eq) {
    if (!bR.vc) {
      return;
    }
    if (bY.gu(eo, eq)) {
      return;
    }
    if (a05 === 6 && aZ.gu(eo, eq)) {
      return;
    }
    if (bX.gu(eo, eq)) {
      return;
    }
    aT.gu(eo, eq);
    if (a05 === 0) {
    } else if (a05 === 7) {
    }
  };
  this.a0Y = function (eo, eq) {
    if (!aT.a8A) {
      if (aY.a0Y(eo, eq, true)) {
        return;
      }
    }
    aT.a0Y(eo, eq);
  };
  this.click = function (eo, eq) {
    aT.a0x();
  };
  this.a0b = function (eo, eq, deltaY) {};
  this.aEf = function () {
    aY.a8H();
    be.df = true;
  };
  this.tq = function () {
    if (a05 === 8 || a05 === 10) {
      return;
    }
    tr.imageSmoothingEnabled = true;
    this.xA();
    if (a05 !== 0) {
      aT.tq();
      aO.tq();
      this.aEg();
      bX.tq();
    }
    if (a05 === 0) {
    } else if (a05 === 6) {
      aZ.tq();
    }
    bY.tq();
    t.tq();
  };
  this.xA = function () {
    if (!bR.vc) {
      tr.fillStyle = bA.me;
      tr.fillRect(0, 0, h.i, h.j);
      return;
    }
    var aEh = h.i / bR.es;
    var aEi = h.j / bR.et;
    var eL = aEh > aEi ? aEh : aEi;
    tr.setTransform(eL, 0, 0, eL, Math.floor((h.i - eL * bR.es) / 2), Math.floor((h.j - eL * bR.et) / 2));
    tr.drawImage(bR.ve, 0, 0);
    tr.setTransform(1, 0, 0, 1, 0, 0);
    tr.fillStyle = bA.mi;
    tr.fillRect(0, 0, h.i, h.j);
  };
  this.aEg = function () {
    var eq = Math.floor(0.3 * h.j);
    var canvas = ab.aEj(S[21]);
    var hd = (1.75 * h.j) / canvas.width;
    hd = hd * canvas.width < 0.98 * h.i ? (0.98 * h.i) / canvas.width : hd;
    tr.globalAlpha = 0.15;
    tr.imageSmoothingEnabled = false;
    var eo = Math.floor(0.5 * (h.i - hd * canvas.width));
    eo = Math.floor(eo / hd);
    var a5L = Math.floor(eq - 0.5 * canvas.height * hd);
    a5L = Math.floor(a5L / hd);
    tr.setTransform(hd, 0, 0, hd, eo, a5L);
    tr.drawImage(canvas, eo, a5L);
    tr.setTransform(1, 0, 0, 1, 0, 0);
    tr.globalAlpha = 1;
    tr.imageSmoothingEnabled = true;
  };
}
function cn() {
  this.aBx = 0;
  this.aEk = 0;
  var aEl;
  var aEm;
  var aEn;
  var aEo;
  var aEp;
  var aEq = 0;
  this.dX = function (qn, aBu, aBv) {
    t.x();
    bm.tK();
    aa.setState(10);
    aEo = qn;
    aEp = aBu;
    aEq = aBv;
    this.aBx = qn.aBx;
    this.aEk = aBv;
    aEl = 0;
    aEm = be.eG + 4500;
    az.y.a0J = qn.a0J;
    if (az.y.a0C === qn.a0J) {
      console.log("direct pass");
      aEn = 0;
    } else {
      console.log("delayed pass");
      az.y.close(az.y.a0C, 3247);
      aEn = 2;
      if (az.y.aER(qn.a0J, 5)) {
        az.o6.aEr();
      }
    }
    aEs();
  };
  function aEt() {
    aEo = aEp = null;
    aEq = 0;
  }
  this.lW = function () {
    if (aEn > 0 && be.eG > aEm) {
      aEu();
    }
  };
  function aEu() {
    aEn--;
    aEm += 4500;
    if (be.aEv === 0 && be.jt() === 0) {
      az.y.aER(az.y.a0J, 5);
    }
  }
  this.aEw = function () {
    if (aa.a0E() !== 10) {
      return false;
    }
    bm.aBL.aBy(aEo, aEp, aEq);
    aEt();
    return true;
  };
  this.aEx = function () {
    if (aa.a0E() !== 10) {
      return;
    }
    aEl++;
    if (aEl >= 2) {
      bm.aBL.aBy(aEo, aEp, aEq);
      aEt();
    }
  };
  function aEs() {
    tr.imageSmoothingEnabled = true;
    aa.xA();
    aEy();
  }
  function aEy() {
    var canvas = ab.aEj(S[85]);
    var mP = ((a0.a1.r7() ? 0.396 : 0.25) * h.pj) / canvas.width;
    tr.setTransform(
      mP,
      0,
      0,
      mP,
      Math.floor((h.i - mP * canvas.width) / 2),
      Math.floor((h.j - mP * canvas.height) / 2)
    );
    tr.imageSmoothingEnabled = false;
    tr.drawImage(canvas, 0, 0);
    tr.setTransform(1, 0, 0, 1, 0, 0);
  }
}
function cP() {
  var aEz;
  var canvas;
  var zP;
  var aF0;
  this.dX = function () {
    if (canvas === undefined) {
      aF1();
    }
  };
  this.get = function (e2) {
    return canvas[e2];
  };
  this.aEj = function (name) {
    for (var aB = zP.length - 1; aB >= 0; aB--) {
      if (zP[aB] === name) {
        return canvas[aB];
      }
    }
    return aF0;
  };
  this.sQ = function () {
    return aEz <= 0;
  };
  this.aF2 = function () {
    aEz = 0;
    aF3();
  };
  function aF1() {
    aEz = 23;
    canvas = new Array(aEz);
    zP = new Array(aEz);
    aF4();
    aF5();
    aF6(
      0,
      "exit",
      6,
      "iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
    );
    aF6(
      1,
      "victory",
      6,
      "iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="
    );
    aF6(2, "defeat", 6, S[23]);
    aF6(
      3,
      "orders",
      6,
      "iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
    );
    aF6(
      4,
      "crown",
      4,
      "iVBORw0KGgoAAAANSUhEUgAAAJsAAABqBAMAAABZgT4DAAAAJ1BMVEUgIi0xOi5GUTMadCZ3bkARrRyhk1AA1g/AqzAA/wDVxWXy2D/25XVxgVVAAAAGjElEQVRo3s2az2vcRhTHn+SV14l9UEJ+NEkPGygBEx/UhhJ8W0owJclBLZSwtw2YUGoflJhg9uaWUgq5rC2E6M0pJYdmD40xZsn0EAfjw0Z/VOfNSJr35LUjKTr0HcxiTT4785033/c0DvxRJp7fufOozLghlBm1ATLuNoWLXcRZg4ZwAahoN4OTk2uNXnXBbgYXArwW4gCg1wgugPNCRh+uNYLz4Tbi3pQQrxxuDXEH4DSC81C6/y0uXex+Q7gAbjS5FdvQQlwXFhvBRQAPhDgCGDRzZj2wVlYBZhqygGfaApabMigPaSUmdwpus6BS1JG0wu82S+M2wB4UNxfOFSd8uSQugouuU8zkQg4H1s1pWk7DBXNi7PLpycVa3FHXxM9OOZwnz9QWS9kYwGXmGcnEHkM5HOCJanM/bvXZmQjn8JgMyuBiSw7daxf8+B07sdvzpXFTZufBwyOWd2p2nUFp7frLXLpRwo6s0s4qubOz0ioHXLok6bLEcB+cvrPPv7S+pl8NFs8yKV2S7DLxnsIFvtVfKQTiIjyRl3lLMuBJvJQkXLy4w3oWPIV4DCVOH3C2lBBOSJdMuHjcmn2FuIq4UNsP/e6h5bBDZyUyOnR1T602N1jdFEmcB/Zr8Zi1DMG3tF3ahlnEMfG8FYeJa62LvwAWhxAr65aVgAz217rLdCWfI+492Z/IGtvsSC+prsMZQqQLyx7dTO/FG4cOXkfcMXGBp3OCmEQM1gdViO0hbANmuHhL+i15zMZmtal0SUJcQGZ6t0ekm0WEcCGAtIrKzwYn52tWG2rpksS0UJE81lvLJBHUjKRgiFP9keiYPIjk0z3H6LygcYe5HtIRxT+mPduBeaFbNj/HkdntzKObDcz517jjXA881cRzQljIZzfU6H/B4AL8gswEdBKryJIpslF4h+Bm0wUGkH7eJ3nsY+Zkq1XnX0fmArhWMZ4hW2Hr3bQwUVS/RZPUeyHMatX515FZqKc6KqCnEH9zCDPyVHRwegf00Lpa2EUuXe4Caq3MjH1ofRBvXWhLnHxruHTPJW8hsR6uV0uky1wg0JnV79He3pYI6ElcVHwJibSwOu+JdJl4nRfqMUm8uKMQjvI71dGQuh/qpBRbV7l0qQuELf2YlhP10ib3Xbnx98CKfLoYsT+jpFsyOCWenz12WHEC61FWKzZ96k/BA5Gutsek0+LFrl4rzRQUzBmY0rND7dNLx4uttpTOThImXpgqK4TF3PgaqWQRfV91s/EHNpcOxXO829ljU2fDrDikuJi8r6Z5olLrrmuyTosHVv40zxS1sQNaZ12zG1G+GrFnMemU55mneaaowsPKtmdez3fm8n8gbWaW0eRqIVM2z5QNU7kyXAC35Dp6NE+UXfO1qtV+lj1NMyWSK1tNl5bhhrDwMu1//TWjTubrJjpgZdPT1QfL9PXMHDIcOnhXyRcDndz1Iu4Q4AbbWimcLTVYZjhZz5JjF3uLqGU2trgRmMmumR62qN9J3dblTHoMJzNFCQOX/fmM9suUySXJS6PenhMj7T5u+IA3ZB5O5CXu0ZX0y/fl3oxO4uT0IFV3DJgQ1/HwWYX+zld7+Fi1Gl/8Lsf+Kv/ZUjIlMJV/RNhv36hvV0XJKeAC3Tk81uYnuzcZs8nUwDHWhXTgFd1vtAu47fRw/gl5tEbTcZgCWdxKk/tcARdlc3nVSUdeOo1m1mD/lPUHywVcbJxo9aYcefF+cka8UkNWTG73iq02zbHJ36PkI8GG5I2pwXm67aoTx7n3Gpw/PS3KxFFeaQwub5Sqx2FeVQ0uPC3NPh67+eufwUW0PleLbl4GDS4+6W1lw817QfJO1oFRPdrE9OAE5xeNvHqeUFxqAtXjvWmXCG6bV+jy8c5cihBc7Uzpm05zSFtS+1PzhL1tY7moE+TNlOJqmsCEvH5RXM1MOSKtJsXVNIFD0lZTXFgvU3bJ5TnF1TSBPumDKa6mCZBXTX4t49YxgQl5N+Q4v06mHNM7DoYL6pQLeuPAccM6W8tu4hiulgn06Y0Qw0V1TKBL73MYLq5jAi69muL3dx6sPCkT68kEf07wA/t7F8f5UC7Oq773/JH64JyKC6B1r0w8TCb4cyI/HLKbN47bqZ4pu+z2nONqmADLkwKuhgl02L1m4Wa2ugnAWbjK5eKY/1WkgKtsAjxPTuIWPsEATuBCaD2pFIU/nhVwEVSO3hm4uDpucNYVvleVNnPmXwSiHyoG/98Hw/8AAslhvSUnOcMAAAAASUVORK5CYII="
    );
    aF6(
      5,
      S[94],
      6,
      "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="
    );
    aF6(
      6,
      S[21],
      6,
      "iVBORw0KGgoAAAANSUhEUgAAAGMAAAAKAQMAAACaDnJEAAAABlBMVEUAAAD///+l2Z/dAAAAaklEQVQI12P4X1dvP/vvn3+JjxnOP2CA8ZLBPImERIOGxJZDzMoMPApg3gwgL1mZ4QyQV1NvD+T9g/EqbCQSWz6kfwbzEmrsgLwfMF6eOZB3J80YzKtLN56R+OdcmvE3kA11yYZA3jEwDwAD7zy1rz50OAAAAABJRU5ErkJggg=="
    );
    aF6(7, "youtube", 7, S[23]);
    aF6(
      8,
      "googleplay",
      3,
      "iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg=="
    );
    aF6(
      9,
      "discord",
      7,
      "iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
    );
    aF6(10, "insta", 3, S[23]);
    aF6(11, "emojis", 4, S[23]);
    aF6(12, "flags", 3, S[23]);
    aF6(13, "bestTeam", 5, S[23]);
    aF6(
      14,
      "bestPlayer",
      5,
      "iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
    );
    aF6(
      15,
      "zoom",
      6,
      "iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
    );
    aF6(
      16,
      "apple",
      3,
      "iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
    );
    aF6(
      17,
      S[85],
      6,
      "iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"
    );
    aF6(
      18,
      "target",
      7,
      "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
    );
    aF6(
      19,
      "members",
      7,
      "iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
    );
    aF6(
      20,
      "hourglass",
      7,
      "iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
    );
    aF6(
      21,
      "stalemate",
      6,
      "iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
    );
    aF6(
      22,
      S[84],
      8,
      "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEW+AAHAIiMAiAfESkosjSx4cMRcnFzPgoGbmNGow6e7ut7ftLTX4dbf3+7u3d7////Ro4BnAAACgklEQVRIx+3VMYgaQRQA0D1SpEizcv0Vg1h7XHHFQQpZUqVdWIRrRBaEQCIWKSxSBWRBDoIIC0J6YZHjCgshdsLCwvYB2cLiCkHLQ5zMz3cl7ow6O1OkSJF/V8lj5s+fP38N43/8s/GqoMUK17fjcVkDttvT9epRAwIGW17rQWBjUwmTXz+Hc2BPSugNbdsZwbal2t3eRRdgORk3TSV0kjTRydOlAtrDID0UTEwFtKtJksqmCjodL5jPAbamAu6s08EEHtVwf6gXLWiPgJW1YCeR7i1CLL3sOEfQAaYHMcuyLvykBb2E6cERrLitL24KEogV55v9btmSQGxMbufXa8hekwjnQhnfAvdGBFfF9slWvJhi3y2kTZGt+GYNXN8dH/o52/kK6CBrkmO44FMMG7EEdvnmmUKvFB/qL8J7bus7oDXynTXPFzxL/nKdQpDBNKd2y7z9ARAS8vGQ9NFdP+y2arPnz1OgUZ2QRvxyHt7DwsSbA/wP/QohpXhbkHT4tnyVjgLatwghxRjGrRvTPIUJu5lCFAHdrYfxHthqtZw0Tzo8YF8QNaKonzpS2g8ldgI9/HVWL1r79TA+7KUAnY7zFTuSuoSLUoSJiHCIY2qOQw3rzEXRdRuDiIfV/eBL6yxGse76hvAMYvyj/jdyGtYBOl4CfiP0B+E7ci7+QC9IYNOzrKJbIXnQwWFLZxLDQ3xV1He1IA1rhKihA2GF6MAqzIgm3NSI3ta0rgcT6GtBfPlU69S7i+5pQax47sUcICaZX3EjG0+byt+FXUXJD/BBUR8jG9+a0FEU0uDmfGjpQDs4evhSiB//vOY1hK9RTwtiljnXzc+eIO9yDOGjTuXwN2h8zFYEBekAAAAAAElFTkSuQmCC"
    );
  }
  function aF4() {
    aF0 = document.createElement(S[4]);
    aF0.width = 1;
    aF0.height = 1;
    for (var aB = aEz - 1; aB >= 0; aB--) {
      canvas[aB] = aF0;
    }
  }
  function aF6(e2, name, aF7, pO) {
    zP[e2] = name;
    canvas[e2] = new Image();
    canvas[e2].onload = function () {
      aF8(e2, aF7);
      aF9();
    };
    canvas[e2].onerror = function (e) {
      console.error("Error loading image at index", e2, "Error:", e);
      aF9();
    };
    canvas[e2].src = S[91] + pO;
  }
  function aF8(e2, aF7) {
    var a2u = null;
    var a2t;
    if (aF7 === 7) {
      a2t = b9.a1K.a2w;
    } else if (aF7 === 8) {
      a2t = b9.a1K.a2z;
      a2u = 0.1;
    } else if (aF7 === 3) {
      a2t = b9.a1K.a2x;
      a2u = 0.06;
    } else if (aF7 === 5) {
      a2t = b9.a1K.a30;
    } else if (aF7 === 6) {
      a2t = b9.a1K.a2v;
    } else if (aF7 === 4) {
      a2t = b9.a1K.a31;
    }
    canvas[e2] = b9.a1K.a2s(canvas[e2], a2t, a2u);
  }
  function aF9() {
    aEz--;
    aF3();
  }
  function aF3() {
    if (aEz !== 0) {
      return;
    }
    aEz = -1;
    aF5();
    be.df = true;
    aFA();
    if (t.ry === 5) {
      t.a44().aFB.resize();
    }
  }
  function aF5() {
    aL.a4D();
    bX.aBC([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [a0.id !== 2, a0.id !== 1, true, true, true]);
    aj.vh = new xc();
    aj.vh.dX();
    av.dY();
  }
  function aFA() {
    canvas[7] = aF0;
    canvas[8] = aF0;
    canvas[9] = aF0;
    canvas[10] = aF0;
  }
}
function cQ() {
  var aFC = [
    [100, 100, 100],
    [144, 0, 0],
    [0, 128, 0],
    [0, 0, 144],
    [128, 128, 0],
    [128, 0, 128],
    [0, 128, 128],
    [196, 196, 196],
    [0, 0, 0],
  ];
  var aFD = [
    [4, 4, 4, 20],
    [4, 0, 0, 27],
    [0, 4, 0, 31],
    [0, 0, 4, 27],
    [4, 4, 0, 31],
    [4, 0, 4, 31],
    [0, 4, 4, 31],
    [4, 4, 4, 14],
    [4, 4, 4, 13],
  ];
  var aFE;
  var aFF;
  var aFG;
  var aFH;
  var aFI;
  var aFJ;
  var aFK;
  var aFL;
  var aFM;
  var aFN;
  var aFO = 208;
  var aFP = 224;
  var aFQ = 248;
  this.ej = new Int32Array(4);
  this.dY = function () {
    var ej = this.ej;
    ej[0] = -4 * bR.es;
    ej[1] = 4;
    ej[2] = -ej[0];
    ej[3] = -ej[1];
  };
  this.dX = function () {
    aFE = new Uint8Array(aD.ee);
    aFF = new Uint8Array(aD.ee);
    aFG = new Uint8Array(aD.ee);
    aFH = new Uint8Array(aD.ee);
    aFI = new Uint8Array(aD.ee);
    aFJ = new Uint8Array(aD.ee);
    aFK = new Uint8Array(aD.ee);
    aFL = new Uint8Array(aD.ee);
    aFM = new Uint8Array(aD.ee);
    aFN = new Uint8Array(aD.ee);
    this.a7B = new Uint8Array(aD.ee);
    if (aD.hW) {
      aFR();
    } else {
      if (aD.data.colorsType === 0) {
        if (aD.data.selectableColor) {
          aFS(0, aD.jw);
          aFT(aD.jw, aD.ee);
        } else {
          aFT(0, aD.ee);
        }
      } else {
        aFS(0, aD.ee);
      }
    }
    aFU();
    aFV();
    this.aFW();
    aFX();
    aFY();
  };
  this.a6B = function (player) {
    var g = bN.fG;
    g[0] = aFE[player];
    g[1] = aFF[player];
    g[2] = aFG[player];
    return g;
  };
  function aFT(jD, mV) {
    for (var aB = jD; aB < mV; aB++) {
      aFE[aB] = 4 * bK.dn(64 * ax.random(), ax.value(100));
      aFF[aB] = 4 * bK.dn(64 * ax.random(), ax.value(100));
      aFG[aB] = 4 * bK.dn(64 * ax.random(), ax.value(100));
    }
  }
  function aFS(jD, mV) {
    var colorsData = aD.data.colorsData;
    for (var aB = jD; aB < mV; aB++) {
      var f9 = colorsData[aB];
      aFE[aB] = 4 * (f9 >> 12);
      aFF[aB] = 4 * ((f9 >> 6) & 63);
      aFG[aB] = 4 * (f9 & 63);
    }
  }
  function aFU() {
    var aB, ek;
    for (aB = aD.ee - 1; aB >= 0; aB--) {
      ek = bK.dn(aFE[aB] + aFF[aB] + aFG[aB], 3);
      aFE[aB] += aFZ(ek - aFE[aB], 2);
      aFF[aB] += aFZ(ek - aFF[aB], 2);
      aFG[aB] += aFZ(ek - aFG[aB], 2);
      aFE[aB] -= aFE[aB] % 4;
      aFF[aB] -= aFF[aB] % 4;
      aFG[aB] -= aFG[aB] % 4;
    }
  }
  function aFR() {
    var a9G = bf.a9G;
    for (var aB = aD.ee - 1; aB >= 0; aB--) {
      var f2 = a9G[aB];
      var ke = bK.dn((aFD[f2][3] + 1) * ax.random(), ax.value(100));
      aFE[aB] = aFC[f2][0] + ke * aFD[f2][0];
      aFF[aB] = aFC[f2][1] + ke * aFD[f2][1];
      aFG[aB] = aFC[f2][2] + ke * aFD[f2][2];
    }
  }
  function aFV() {
    for (var aB = aD.ee - 1; aB >= 0; aB--) {
      aFE[aB] += bK.dn(aB, 128);
      aFF[aB] += bK.dn(aB % 128, 32);
      aFG[aB] += bK.dn(aB % 32, 8);
      aFH[aB] = aB % 8;
    }
  }
  function aFX() {
    var f1 = 32;
    for (var aB = aD.ee - 1; aB >= 0; aB--) {
      aFI[aB] = aFE[aB] < f1 ? aFE[aB] + f1 : aFE[aB] - f1;
      aFJ[aB] = aFF[aB] < f1 ? aFF[aB] + f1 : aFF[aB] - f1;
      aFK[aB] = aFG[aB] < f1 ? aFG[aB] + f1 : aFG[aB] - f1;
    }
  }
  function aFY() {
    var f1 = 20;
    var e = 256 - f1 - 1;
    for (var aB = aD.ee - 1; aB >= 0; aB--) {
      aFL[aB] = aFE[aB] > e ? aFE[aB] - f1 : aFE[aB] + f1;
      aFM[aB] = aFF[aB] > e ? aFF[aB] - f1 : aFF[aB] + f1;
      aFN[aB] = aFG[aB] > e ? aFG[aB] - f1 : aFG[aB] + f1;
    }
  }
  this.aFW = function () {
    for (var aB = aD.ee - 1; aB >= 0; aB--) {
      this.a7B[aB] = aFE[aB] + aFF[aB] + aFG[aB] < 280 ? 0 : 1;
    }
  };
  this.xB = function (eL) {
    return bK.dn(eL, 4) % bR.es;
  };
  this.xC = function (eL) {
    return bK.dn(eL, 4 * bR.es);
  };
  this.wl = function (eo, eq) {
    return Math.floor((eq * bR.es + eo) * 4);
  };
  this.x1 = function (eL) {
    var ej = this.ej;
    return this.aFa(eL + ej[0]) || this.aFa(eL + ej[1]) || this.aFa(eL + ej[2]) || this.aFa(eL + ej[3]);
  };
  this.f6 = function (eL) {
    var ej = this.ej;
    return this.em(eL + ej[0]) || this.em(eL + ej[1]) || this.em(eL + ej[2]) || this.em(eL + ej[3]);
  };
  this.wz = function (eL, player) {
    var ej = this.ej;
    return (
      this.aFb(eL + ej[0], player) ||
      this.aFb(eL + ej[1], player) ||
      this.aFb(eL + ej[2], player) ||
      this.aFb(eL + ej[3], player)
    );
  };
  this.gG = function (eL) {
    return aAZ[eL + 3] >= aFO;
  };
  this.x6 = function (player, eL) {
    return this.gG(eL) && this.aFc(player, eL);
  };
  this.aFc = function (player, eL) {
    return player === this.eZ(eL);
  };
  this.aFd = function (eL) {
    return aAZ[eL + 3] >= aFO && aAZ[eL + 3] < aFP;
  };
  this.j9 = function (eL) {
    return aAZ[eL + 3] >= aFP && aAZ[eL + 3] < aFQ;
  };
  this.x0 = function (eL) {
    var ej = this.ej;
    for (var aB = 3; aB >= 0; aB--) {
      if (this.h9(eL + ej[aB])) {
        return true;
      }
    }
    return false;
  };
  this.ec = function (eL) {
    return this.gG(eL) || this.eY(eL);
  };
  this.h9 = function (eL) {
    return aAZ[eL + 3] === 0 && aAZ[eL + 2] === 2;
  };
  this.eY = function (eL) {
    return aAZ[eL + 3] === 0 && aAZ[eL + 2] === 1;
  };
  this.vq = function (eL) {
    return aAZ[eL + 3] === 0 && aAZ[eL + 2] === 3;
  };
  this.em = function (eL) {
    return aAZ[eL + 3] === 0 && aAZ[eL + 2] >= 5;
  };
  this.aFa = function (eL) {
    return aAZ[eL + 3] === 0 && aAZ[eL + 2] >= 3;
  };
  this.eP = function (eL) {
    return aAZ[eL + 2] - 5;
  };
  this.aFb = function (eL, player) {
    return this.eY(eL) || (this.gG(eL) && player !== this.eZ(eL));
  };
  this.eZ = function (eL) {
    return 128 * (aAZ[eL] % 4) + 32 * (aAZ[eL + 1] % 4) + 8 * (aAZ[eL + 2] % 4) + (aAZ[eL + 3] % 8);
  };
  this.x7 = function (eL) {
    aFe(eL, 1);
  };
  this.aFf = function (eL) {
    aFe(eL, 2);
  };
  function aFe(eL, aFg) {
    aAZ[eL] = 0;
    aAZ[eL + 1] = 0;
    aAZ[eL + 2] = aFg;
    aAZ[eL + 3] = 0;
    aFh(eL);
  }
  this.wm = function (eL, player) {
    aAZ[eL] = aFE[player];
    aAZ[eL + 1] = aFF[player];
    aAZ[eL + 2] = aFG[player];
    aAZ[eL + 3] = aFO + aFH[player];
    aFh(eL);
  };
  this.gB = function (eL, player) {
    aAZ[eL] = aFI[player];
    aAZ[eL + 1] = aFJ[player];
    aAZ[eL + 2] = aFK[player];
    aAZ[eL + 3] = aFP + aFH[player];
    aFh(eL);
  };
  this.jA = function (eL, player) {
    aAZ[eL] = aFL[player];
    aAZ[eL + 1] = aFM[player];
    aAZ[eL + 2] = aFN[player];
    aAZ[eL + 3] = aFQ + aFH[player];
    aFh(eL);
  };
  function aFh(eL) {
    if (ba.md) {
      return;
    }
    var eo = ac.xB(eL);
    var eq = ac.xC(eL);
    ba.md = eo >= bZ.aAY[0] && eo <= bZ.aAY[2] && eq >= bZ.aAY[1] && eq <= bZ.aAY[3];
  }
}
function co() {
  var e2 = 0;
  var size = 2 * 16;
  var aFi = new Uint16Array(size);
  this.dX = function () {
    e2 = 0;
  };
  this.ir = function () {
    if (e2 === 0) {
      return;
    }
    if (ag.lm[aD.eR] === 0 || ad.aFj(aD.eR) === ad.fm(aD.eR)) {
      e2 = 0;
      return;
    }
    z8();
  };
  function z8() {
    var aB, j7, iG;
    for (aB = e2 - 2; aB >= 0; aB -= 2) {
      j7 = aFi[aB];
      if (j7 < aD.ee && ag.lm[j7] === 0) {
        remove(aB);
        continue;
      }
      iG = aFi[aB + 1];
      if ((j7 >= aD.ee && aFk(aD.eR)) || (j7 < aD.ee && aFl(aD.eR, j7))) {
        b7.h3.hE(iG, j7);
        remove(aB);
      }
    }
  }
  function remove(a4H) {
    var aB;
    e2 -= 2;
    for (aB = a4H; aB < e2; aB += 2) {
      aFi[aB] = aFi[aB + 2];
      aFi[aB + 1] = aFi[aB + 3];
    }
  }
  this.hG = function (j7, iG) {
    if (aFm(j7, iG) || e2 === size) {
      return;
    }
    aFi[e2] = j7;
    aFi[e2 + 1] = iG;
    e2 += 2;
  };
  function aFm(j7, iG) {
    var aB;
    for (aB = 0; aB < e2; aB += 2) {
      if (aFi[aB] === j7) {
        aFi[aB + 1] = Math.min(aFi[aB + 1] + iG, 1023);
        return true;
      }
    }
    return false;
  }
}
function cR() {
  this.dg = function (gE) {
    var dm = ag.gU[gE];
    if (bM.y.ou[gE]) {
      if (dm) {
        aFn(gE);
      }
      return;
    }
    if (dm) {
      this.aFo(gE);
      return;
    }
    if (ag.g8[gE].length) {
      return;
    }
    this.aFo(gE);
  };
  function aFn(player) {
    aFp(player, ad.aFq(player));
    aFr(player);
    aF.g4(player);
    ad.clear(player);
    aFs(player);
    aFt(player);
  }
  function aFt(player) {
    ag.wh[player] = 0;
    ag.g8[player] = [];
    ag.gM[player] = [];
    ag.gN[player] = [];
    ag.f7[player] = [];
  }
  function aFs(player) {
    if (b9.g2.a2T(player)) {
      var dm = ag.gi[player] - ag.a2X[player] + ad.aFu(player);
      bc.g6(player, Math.abs(dm), dm < 0 ? 18 : 12);
    }
    ag.gi[player] = 0;
    ag.a2X[player] = 0;
  }
  this.aFo = function (player) {
    aFv(player);
    aFr(player);
    aFs(player);
    aFw(player);
    aF.g4(player);
    ad.clear(player);
    bM.aFx.aFy(player);
  };
  function aFv(player) {
    if (!b9.g2.jK(player)) {
      ag.xX[player] = bh.zs.aFz();
      aD.z6++;
    }
    var aG0 = ad.aFq(player);
    if (aG0.length === 0) {
      if (b9.g2.a2Q(player)) {
        aG1();
      }
      return;
    }
    aFp(player, aG0);
    aG2(player, aG0);
  }
  function aG1() {
    aX.show(false, false, false, true);
    aW.a9j();
    bQ.yp.zZ();
  }
  function aFp(player, aG0) {
    for (var aB = aG0.length - 1; aB >= 0; aB--) {
      ad.aG3(aG0[aB], player);
    }
  }
  function aG4(aG0) {
    var aB;
    var e2 = 0;
    for (aB = aG0.length - 1; aB >= 1; aB--) {
      if (ag.gU[aG0[aB]] > ag.gU[aG0[e2]]) {
        e2 = aB;
      }
    }
    return e2;
  }
  function aG2(player, aG0) {
    var aG5 = aG0[aG4(aG0)];
    if (aD.kD === 9) {
      if (bf.ef[player] === 1) {
        if (ax.jo(8)) {
          ay.aG6(aG5);
        }
      } else if (aE.hL[player]) {
        aN.a4U(765, 0);
        aN.xZ(280, L(135, [ag.xa[aG5], ag.xa[player]]), 765, aG5, bA.me, bA.nu, -1, true);
      }
    }
    if (b9.g2.a2Q(player)) {
      aG1(player);
      aN.zG(aG5, 1);
      return;
    }
    for (var aB = aG0.length - 1; aB >= 0; aB--) {
      if (b9.g2.a2T(aG0[aB])) {
        bc.li[4 - b9.g2.jK(player)]++;
        if (b9.g2.a2Q(aG0[aB])) {
          aN.zG(player, 0);
          return;
        }
      }
    }
    if (!b9.g2.jK(player)) {
      aN.a5T(0, player, aG5);
    }
  }
  function aFw(player) {
    ag.lm[player] = 0;
    ag.g8[player] = null;
    ag.gM[player] = null;
    ag.gN[player] = null;
    ag.f7[player] = null;
  }
  function aFr(player) {
    var iV = ag.iV;
    var iW = ag.iW;
    var iX = ag.iX;
    var iY = ag.iY;
    var mD = iV[player];
    var mE = iX[player];
    var es = bR.es;
    var gU = ag.gU;
    for (var eo = iW[player]; eo >= mD; eo--) {
      for (var eq = iY[player]; eq >= mE; eq--) {
        var gE = (eq * es + eo) * 4;
        if (ac.x6(player, gE)) {
          ac.x7(gE);
          gU[player]--;
        }
      }
    }
    iW[player] = iY[player] = 0;
    iV[player] = iX[player] = Math.max(es, bR.et);
  }
}
function ct() {
  var input;
  this.dX = function () {
    input = document.createElement(S[22]);
    input.type = S[88];
    input.setAttribute(S[96], ".png, .jpg, .gif, .jpeg");
    input.onchange = aG7;
  };
  this.tK = function () {
    if (!input) {
      return;
    }
    input.onchange = null;
    input.value = "";
    input = null;
  };
  this.aG8 = function () {
    input.click();
  };
  function aG7(e) {
    aG9(e.target.files);
  }
  function aG9(files) {
    if (files && files.length > 0) {
      b5.aGA(files[0]);
    }
  }
  this.aGA = function (aGB) {
    var g = aGB.name.split(".");
    var aGC = g[g.length - 1].toLowerCase();
    if (aGC === "gif" || aGC === "jpg" || aGC === "jpeg" || aGC === "png") {
      var aGD = new FileReader();
      aGD.onload = aGE;
      aGD.readAsDataURL(aGB);
    }
  };
  function aGE(e) {
    var f2 = new Image();
    f2.onload = aGF;
    f2.src = e.target.result;
  }
  function aGF(e) {
    var aGG = e.target;
    var canvas = document.createElement(S[4]);
    canvas.width = aGG.width;
    canvas.height = aGG.height;
    var he = canvas.getContext("2d");
    he.drawImage(aGG, 0, 0);
    var i = canvas.width;
    var j = canvas.height;
    if (i > bR.aGH || j > bR.aGH || i < 10 || j < 10) {
      var aGI = "Image dimensions must be between 10 and " + bR.aGH + ".";
      if (a0.uS) {
        a0.uS.showToast(aGI);
      } else {
        alert(aGI);
      }
      return;
    }
    t.ry === 20 && t.a44().aGF(canvas);
  }
}
function cr() {
  this.aGJ = null;
  this.dX = function () {
    if (aD.kD !== 10) {
      this.aGJ = null;
      return;
    }
    this.aGJ = new Uint32Array(aD.ee);
  };
  this.ir = function () {
    if (aD.kD !== 10) {
      return;
    }
    this.qt();
  };
  this.qt = function () {
    var aB, gE, target, a9u;
    var aGJ = this.aGJ;
    var ys = al.jy;
    var a2Y = ag.gi;
    for (aB = al.jx - 1; aB >= 0; aB--) {
      gE = ys[aB];
      if (gE >= aD.jw) {
        continue;
      }
      target = Math.max(bK.dn(a2Y[gE], 4), 2048);
      a9u = Math.max(ae.a9v(gE), 100);
      aGJ[gE] += bK.dn(a9u * target, 10000);
      if (aGJ[gE] > target) {
        aGJ[gE] = target;
      }
    }
  };
  this.a2e = function (player, hL) {
    if (hL > this.aGJ[player]) {
      hL = this.aGJ[player];
      this.aGJ[player] = 0;
      return hL;
    }
    this.aGJ[player] -= hL;
    return hL;
  };
}
function dS() {
  this.aGK = function () {
    var input = document.createElement(S[22]);
    input.type = S[88];
    input.setAttribute(S[96], ".json");
    input.onchange = aGL;
    input.click();
  };
  this.aGM = function () {
    var a42 = aD.data;
    var keys = Object.keys(a42);
    var aGN = {};
    for (var aB = 0; aB < keys.length; aB++) {
      var key = keys[aB];
      if (a42[key] instanceof Uint8Array || a42[key] instanceof Uint16Array || a42[key] instanceof Uint32Array) {
        aGN[key] = Array.from(a42[key]);
      } else {
        aGN[key] = a42[key];
      }
    }
    if (aGN.mapType === 2 && aGN.canvas) {
      aGN.canvas = aGN.canvas.toDataURL();
    } else {
      aGN.canvas = null;
    }
    aGO(aGN);
  };
  function aGO(aGP) {
    var aGQ = JSON.stringify(aGP, null, 2);
    var aGR = new Blob([aGQ], {
      type: "application/json",
    });
    var aB9 = document.createElement("a");
    aB9.href = URL.createObjectURL(aGR);
    aB9.download = "tt_scenario.json";
    aB9.click();
  }
  function aGL(e) {
    var files = e.target.files;
    if (files && files.length > 0) {
      aGS(files[0]);
    }
  }
  function aGS(aGB) {
    var g = aGB.name.split(".");
    var aGC = g[g.length - 1].toLowerCase();
    if (aGC === "json") {
      var aGD = new FileReader();
      aGD.onload = aGT;
      aGD.readAsText(aGB);
    }
  }
  function aGT(e) {
    if (aD.z4) {
      return;
    }
    aGU(JSON.parse(e.target.result));
    t.x();
    t.y.aGV[0] = 0;
    t.u(19);
  }
  function aGU(aGW) {
    var aGX = (aD.data = new a3X());
    aGY(aGW, aGX, "mapType", 0, 2);
    aGY(aGW, aGX, "mapProceduralIndex", 0, 255);
    aGY(aGW, aGX, "mapRealisticIndex", 0, 255);
    aGY(aGW, aGX, "mapSeed", 0, 16383);
    aGZ(aGW, aGX, "mapName", 20);
    aGa(aGW, aGX, S[4]);
    aGY(aGW, aGX, "passableWater", 0, 1);
    aGY(aGW, aGX, "passableMountains", 0, 1);
    aGY(aGW, aGX, "playerCount", 1, 512);
    aGY(aGW, aGX, "humanCount", 1, 1);
    aGY(aGW, aGX, "selectedPlayer", 0, 0);
    aGY(aGW, aGX, "gameMode", 0, 1);
    aGY(aGW, aGX, "playerMode", 0, 0);
    aGY(aGW, aGX, "battleRoyaleMode", 0, 0);
    aGY(aGW, aGX, "numberTeams", 0, 8);
    aGY(aGW, aGX, "isZombieMode", 0, 0);
    aGY(aGW, aGX, "isContest", 0, 0);
    aGY(aGW, aGX, "isReplay", 0, 0);
    aGb(aGW, aGX, "elo", 16, 2, 16383);
    aGY(aGW, aGX, "colorsType", 0, 1);
    aGY(aGW, aGX, "colorsPersonalized", 0, 1);
    aGb(aGW, aGX, "colorsData", 32, 512, 262143);
    aGY(aGW, aGX, "selectableColor", 0, 1);
    aGb(aGW, aGX, "teamPlayerCount", 16, 9, 512);
    aGY(aGW, aGX, "neutralBots", 0, 1);
    aGY(aGW, aGX, "botDifficultyType", 0, 3);
    aGY(aGW, aGX, "botDifficultyValue", 0, 15);
    aGb(aGW, aGX, "botDifficultyTeam", 8, 9, 15);
    aGb(aGW, aGX, "botDifficultyData", 8, 512, 15);
    aGY(aGW, aGX, "spawningType", 0, 2);
    aGY(aGW, aGX, "spawningSeed", 0, 16383);
    aGb(aGW, aGX, "spawningData", 16, 1024, 4095);
    aGY(aGW, aGX, "selectableSpawn", 0, 1);
    aGY(aGW, aGX, "playerNamesType", 0, 2);
    aGc(aGW, aGX, "playerNamesData", 512, 20);
    aGY(aGW, aGX, "selectableName", 0, 1);
    aGY(aGW, aGX, "aIncomeType", 0, 2);
    aGY(aGW, aGX, "aIncomeValue", 0, 255);
    aGb(aGW, aGX, "aIncomeData", 8, 512, 255);
    aGY(aGW, aGX, "tIncomeType", 0, 2);
    aGY(aGW, aGX, "tIncomeValue", 0, 255);
    aGb(aGW, aGX, "tIncomeData", 8, 512, 255);
    aGY(aGW, aGX, "iIncomeType", 0, 2);
    aGY(aGW, aGX, "iIncomeValue", 0, 255);
    aGb(aGW, aGX, "iIncomeData", 8, 512, 255);
    aGY(aGW, aGX, "sResourcesType", 0, 2);
    aGY(aGW, aGX, "sResourcesValue", 0, 2047);
    aGb(aGW, aGX, "sResourcesData", 16, 512, 2047);
  }
  function aGY(aGW, aGX, gF, min, max) {
    var f9 = aGW[gF];
    aGX[gF] = aGd(f9) && f9 >= min && f9 <= max ? Math.floor(f9) : aGX[gF];
  }
  function aGd(f9) {
    return typeof f9 === S[46];
  }
  function aGZ(aGW, aGX, gF, max) {
    var pO = aGW[gF];
    aGX[gF] = aGe(pO) ? pO.slice(0, max) : aGX[gF];
  }
  function aGa(aGW, aGX, gF) {
    if (aGX.mapType !== 2) {
      return;
    }
    var pO = aGW[gF];
    if (!aGe(pO) || pO.length <= 20) {
      aGX.mapType = 0;
      return;
    }
    var aGG = new Image();
    aGG.onload = function () {
      b8.aGf.aGg(aGG, 1);
      aGG.onload = null;
      aGG = null;
    };
    aGG.src = pO;
  }
  function aGe(pO) {
    return typeof pO === S[44];
  }
  function aGb(aGW, aGX, gF, aGh, size, max) {
    var a1f = aGW[gF];
    if (!Array.isArray(a1f)) {
      return;
    }
    var a1g = aGh === 8 ? new Uint8Array(size) : aGh === 16 ? new Uint16Array(size) : new Uint32Array(size);
    var eh = Math.min(a1f.length, size);
    for (var aB = 0; aB < eh; aB++) {
      a1g[aB] = bK.pF(a1f[aB], 0, max);
    }
    aGX[gF] = a1g;
  }
  function aGc(aGW, aGX, gF, size, max) {
    var a1f = aGW[gF];
    if (!Array.isArray(a1f)) {
      return;
    }
    var a1g = new Array(size);
    var eh = Math.min(a1f.length, size);
    for (var aB = 0; aB < eh; aB++) {
      a1g[aB] = aGe(a1f[aB]) ? a1f[aB].slice(0, max) : "";
    }
    aGX[gF] = a1g;
  }
}
function cU() {
  var aGi;
  var aGj;
  var size;
  var j7;
  var hL;
  var id;
  var aGk;
  this.dX = function () {
    aGi = aD.jw < 16 ? 12 : 8;
    aGj = 4;
    var eh = aGl(aD.ee);
    size = new Uint8Array(aD.ee);
    j7 = new Uint16Array(eh);
    hL = new Uint32Array(eh);
    id = new Uint16Array(eh);
    aGk = new Uint8Array(eh);
  };
  this.pE = function (a6g, aGm) {
    var aGn = this.gj(a6g, aGm);
    this.gh(a6g, aGm, 0);
    var aGo = b9.g2.g5(a6g, aGn);
    bc.g6(a6g, aGn - aGo, 12);
  };
  function aGl(player) {
    return player < aD.jw ? aGi * player : aGi * aD.jw + aGj * (player - aD.jw);
  }
  this.clear = function (player) {
    size[player] = 0;
  };
  this.aG3 = function (player, aGm) {
    var aB = aGp(player, aGm);
    if (aB === size[player]) {
      return;
    }
    var aGq = hL[aGl(player) + aB];
    this.g7(player, aB);
    this.j4(player, aGq, aD.ee);
  };
  function aGp(player, aGm) {
    var aB;
    var ke = aGl(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (id[ke + aB] === 0 && j7[ke + aB] === aGm) {
        return aB;
      }
    }
    return size[player];
  }
  this.jI = function (player, aGm) {
    var aB;
    var ke = aGl(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (id[ke + aB] === 0 && j7[ke + aB] === aGm) {
        return true;
      }
    }
    return false;
  };
  this.ja = function (player) {
    return player < aD.jw ? size[player] < aGi : size[player] < aGj;
  };
  this.fm = function (player) {
    return size[player];
  };
  this.fs = function (player, aB) {
    return j7[aGl(player) + aB];
  };
  this.fn = function (player, aB) {
    return id[aGl(player) + aB];
  };
  this.aGr = function (player, aGs) {
    var aB;
    var ke = aGl(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (id[ke + aB] === aGs) {
        return aB;
      }
    }
    return -1;
  };
  this.ft = function (player, aB) {
    return hL[aGl(player) + aB];
  };
  this.gj = function (player, aGm) {
    var aB;
    var ke = aGl(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (id[ke + aB] === 0 && j7[ke + aB] === aGm) {
        return hL[ke + aB];
      }
    }
    return 0;
  };
  this.aFu = function (player) {
    var aB;
    var ke = aGl(player);
    var f9 = 0;
    for (aB = size[player] - 1; aB >= 0; aB--) {
      f9 += hL[ke + aB];
    }
    return f9;
  };
  this.aGt = function (player) {
    var aB;
    var ke = aGl(player);
    var f9 = 0;
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (id[ke + aB] === 0) {
        f9 += hL[ke + aB];
      }
    }
    return f9;
  };
  this.aFj = function (player) {
    var aB;
    var ke = aGl(player);
    var g9 = 0;
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (id[ke + aB] > 0) {
        g9++;
      }
    }
    return g9;
  };
  this.gh = function (player, aGm, aGq) {
    var aB;
    var ke = aGl(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (id[ke + aB] === 0 && j7[ke + aB] === aGm) {
        hL[ke + aB] = aGq;
      }
    }
  };
  this.gS = function (player, aB, aGq) {
    hL[aGl(player) + aB] = Math.max(aGq, 0);
  };
  this.gT = function (player, aB) {
    aGk[aGl(player) + aB] = 0;
  };
  this.fu = function (player, aB) {
    return aGk[aGl(player) + aB];
  };
  this.j4 = function (player, aGq, aGm) {
    if (b9.g2.a2T(aGm)) {
      bc.li[6 - b9.g2.jK(player)]++;
    }
    var ke = aGl(player);
    for (var aB = size[player] - 1; aB >= 0; aB--) {
      if (id[ke + aB] === 0 && j7[ke + aB] === aGm) {
        hL[ke + aB] += aGq;
        hL[ke + aB] = hL[ke + aB] > aD.a2a ? aD.a2a : hL[ke + aB];
        return;
      }
    }
    j7[ke + size[player]] = aGm;
    hL[ke + size[player]] = aGq;
    id[ke + size[player]] = 0;
    aGk[ke + size[player]] = 1;
    size[player]++;
    if (player < aD.jw) {
      if (aGm === aD.eR) {
        aN.zG(player, 5);
      } else if (player === aD.eR) {
        af.a5V(aGm);
      }
    }
  };
  this.aGu = function (player, aGq, aGs) {
    var ke = aGl(player);
    j7[ke + size[player]] = 0;
    hL[ke + size[player]] = aGq;
    id[ke + size[player]] = aGs;
    aGk[ke + size[player]] = 0;
    size[player]++;
  };
  this.g7 = function (player, e2) {
    var f0, ke;
    if (size[player] === 0) {
      return;
    }
    ke = aGl(player);
    size[player]--;
    for (f0 = e2; f0 < size[player]; f0++) {
      j7[ke + f0] = j7[ke + f0 + 1];
      hL[ke + f0] = hL[ke + f0 + 1];
      id[ke + f0] = id[ke + f0 + 1];
      aGk[ke + f0] = aGk[ke + f0 + 1];
    }
  };
  this.aFq = function (player) {
    var aB, f0, ke;
    var aG0 = [];
    for (aB = al.jx - 1; aB >= 0; aB--) {
      ke = aGl(al.jy[aB]);
      for (f0 = size[al.jy[aB]] - 1; f0 >= 0; f0--) {
        if (id[ke + f0] === 0 && j7[ke + f0] === player) {
          aG0.push(al.jy[aB]);
          break;
        }
      }
    }
    return aG0;
  };
}
function cV() {
  var aGv;
  this.de = function () {
    var eh = aD.ee;
    aGv = new Uint16Array(eh);
    var jD = 100;
    for (var aB = 0; aB < eh; aB++) {
      aGv[aB] = jD + aGw(bK.dn(aB * 25600, eh - 4), 9);
    }
  };
  this.dX = function () {
    if (aD.data.iIncomeType === 0) {
      this.a9v = function (player) {
        return aGx(player);
      };
    } else if (aD.data.iIncomeType === 1) {
      this.a9v = function (player) {
        return bK.dn(aD.data.iIncomeValue * aGx(player), 64);
      };
    } else {
      this.a9v = function (player) {
        return bK.dn(aD.data.iIncomeData[player] * aGx(player), 64);
      };
    }
  };
  this.ir = function () {
    if (be.jt() % 10 !== 9) {
      return;
    }
    aGy();
  };
  function aGx(player) {
    if (b9.g2.jK(player) && player < aD.jw) {
      return 0;
    }
    var e1 = aGv[bK.dn((aD.ee - 1) * ag.gU[player], aD.jg)];
    if (be.jt() < 1920) {
      e1 = Math.max(bK.dn(100 * (13440 - 6 * be.jt()), 1920), e1);
    }
    var jb = ae.jc(player);
    if (ag.gi[player] > jb) {
      e1 -= bK.dn(2 * e1 * (ag.gi[player] - jb), jb);
    }
    return Math.min(Math.max(e1, 0), 700);
  }
  this.jc = function (player) {
    return Math.min(100 * ag.gU[player], aD.a3T);
  };
  this.o9 = function (player, oA) {
    b9.g2.g5(oA, bN.fE[0]);
    bc.oV(player, oA);
    af.aGz(player, bN.fE[0] + bN.fE[1]);
    af.oW(oA, bN.fE[0]);
    b9.g2.p4(player);
  };
  this.aH0 = function () {
    var eh = al.jx;
    var ys = al.jy;
    var ke = 0;
    var a2Y = ag.gi;
    for (var aB = 0; aB < eh; aB++) {
      ke += a2Y[ys[aB]];
    }
    return ke;
  };
  this.aH1 = function (aH2) {
    var eh = al.jx;
    var ys = al.jy;
    var ke = 0;
    var a2Y = ag.gi;
    var ef = bf.ef;
    var gE;
    for (var aB = 0; aB < eh; aB++) {
      gE = ys[aB];
      if (ef[gE] === aH2) {
        ke += a2Y[gE];
      }
    }
    return ke;
  };
  function aGy() {
    aH3();
    aH4();
    if (be.jt() % 100 !== 99) {
      return;
    }
    aH5();
  }
  function aH3() {
    aH6();
    var jy = al.jy;
    var gi = ag.gi;
    for (var aB = al.jx - 1; aB >= 0; aB--) {
      var gE = jy[aB];
      var aH7 = bK.dn(ae.a9v(gE) * gi[gE], 10000);
      b9.g2.g5(gE, Math.max(aH7, 1));
    }
    aH8(9);
  }
  function aH5() {
    aH6();
    if (aD.data.tIncomeType === 0) {
      aH9(32);
    } else if (aD.data.tIncomeType === 1) {
      aH9(aD.data.tIncomeValue);
    } else {
      aHA();
    }
    aH8(8);
  }
  function aH9(mP) {
    var gU = ag.gU;
    var jy = al.jy;
    for (var aB = al.jx - 1; aB >= 0; aB--) {
      var gE = jy[aB];
      b9.g2.g5(gE, bK.dn(mP * gU[gE], 32));
    }
  }
  function aHA() {
    var gU = ag.gU;
    var jy = al.jy;
    var mP = aD.data.tIncomeData;
    for (var aB = al.jx - 1; aB >= 0; aB--) {
      var gE = jy[aB];
      b9.g2.g5(gE, bK.dn(mP[gE] * gU[gE], 32));
    }
  }
  function aH4() {
    if (aD.data.aIncomeType === 0) {
      return;
    }
    aH6();
    if (aD.data.aIncomeType === 1) {
      aHB();
    } else if (aD.data.aIncomeType === 2) {
      aHC();
    }
    aH8(18);
  }
  function aHB() {
    var gU = ag.gU;
    var jy = al.jy;
    var mP = aD.data.aIncomeValue;
    for (var aB = al.jx - 1; aB >= 0; aB--) {
      var gE = jy[aB];
      b9.g2.g5(gE, bK.dn(mP * gU[gE], 128));
    }
  }
  function aHC() {
    var gU = ag.gU;
    var jy = al.jy;
    var mP = aD.data.aIncomeData;
    for (var aB = al.jx - 1; aB >= 0; aB--) {
      var gE = jy[aB];
      b9.g2.g5(gE, bK.dn(mP[gE] * gU[gE], 128));
    }
  }
  function aH6() {
    var vi = aD.eR;
    bN.fD[0] = ag.gi[vi] - ag.a2X[vi];
  }
  function aH8(e2) {
    var vi = aD.eR;
    bc.li[e2] += ag.gi[vi] - ag.a2X[vi] - bN.fD[0];
  }
}
function cX() {
  var aHD, aHE;
  var aHF, aHG;
  var aHH, aHI;
  var aHJ;
  var aHK;
  var aHL;
  var aHM;
  var aHN;
  var aHO;
  var aHP;
  var aHQ;
  var aHR, aHS;
  var aHT;
  var aHU;
  var aHV = null;
  var aHW;
  var aHX;
  var aB2;
  var aHY, aHZ;
  var aHa = 0.1;
  var aHb = 0;
  var aHc = false;
  var aHd = new Float32Array(4);
  var aHe = 0;
  var aHf = true;
  var aHg;
  var aHh;
  var a95 = 400;
  var aHi = 0;
  this.dX = function () {
    aHi = bi.eE.data[7].value || aD.kD === 8;
    a95 = bi.eE.data[11].value;
    a95 = a95 === 0 ? 280 : a95 === 1 ? 187 : 112;
    aHU = false;
    aHQ = 0.88;
    aHN = 0.5;
    aHO = 1.8;
    aHP = 12 - 3 * bi.eE.data[9].value;
    aHD = 0;
    aHE = 0;
    aHF = new Uint16Array(aD.ee);
    aHG = new Uint16Array(aD.ee);
    aHH = new Uint16Array(aD.ee);
    aHI = new Uint16Array(aD.ee);
    aHJ = new Float32Array(aD.ee);
    aHK = new Float32Array(aD.ee);
    aHX = new Uint16Array(2 * aD.ee);
    aB2 = new Uint8Array(5 * aD.ee);
    aHg = new Uint8Array(aD.ee);
    aHh = new Uint8Array(aD.ee);
    if (!aHf) {
      aHV = aHV ? aHV : document.createElement(S[4]);
    }
    pl();
    aHR = 0;
    aHS = 0;
    aHT = 1;
    if (aHi) {
      aHj();
      aHk();
    } else {
      aHj();
    }
    aHl();
  };
  this.aGz = function (gE, a5l) {
    if (a5l > 18 * ag.gU[gE]) {
      aHh[gE] = 6;
      ac.a7B[gE] = 2 + (ac.a7B[gE] % 2);
    } else {
      aHg[gE] = 4;
      if (ac.a7B[gE] < 2 || ac.a7B[gE] > 3) {
        ac.a7B[gE] = 6 + (ac.a7B[gE] % 2);
      }
    }
  };
  this.oW = function (gE, a5l) {
    if (a5l > 6 * ag.gU[gE]) {
      aHh[gE] = 6;
      ac.a7B[gE] = 4 + (ac.a7B[gE] % 2);
    } else {
      aHg[gE] = 4;
      if (ac.a7B[gE] < 4 || ac.a7B[gE] > 5) {
        ac.a7B[gE] = 8 + (ac.a7B[gE] % 2);
      }
    }
  };
  function aHm() {
    aHV.width = h.i;
    aHV.height = h.j;
    aHW = aHV.getContext("2d", {
      alpha: true,
    });
    b9.ph.textAlign(aHW, 1);
    b9.ph.textBaseline(aHW, 1);
    aHW.imageSmoothingEnabled = true;
  }
  this.resize = function () {
    pl();
    if (aHf) {
      return;
    }
    aHn(aHW);
  };
  function pl() {
    aHL = Math.floor(1 * h.pj);
    aHM = Math.floor(0.5 * aHL);
  }
  function aHj() {
    var aB, aHo;
    tr.font = b9.ph.rY(1, 100 * aHN);
    aHo = 80 / Math.floor(tr.measureText(b9.qh.yM(aD.a2a)).width);
    tr.font = b9.ph.rY(1, 100);
    for (aB = aD.ee - 1; aB >= 0; aB--) {
      aHK[aB] = 100 / Math.floor(tr.measureText(ag.xa[aB]).width);
      aHJ[aB] = Math.min(aHo, aHK[aB]);
    }
  }
  function aHk() {
    var aB, aHo;
    tr.font = b9.ph.rY(1, 100);
    aHo = 100 / Math.floor(tr.measureText("900 000").width);
    for (aB = aD.ee - 1; aB >= 0; aB--) {
      aHJ[aB] = Math.min(aHo, 2 * aHK[aB]);
    }
    aHe = aHo;
    aHd[0] = 100 / (aHo * Math.floor(tr.measureText("5 000 000").width));
    aHd[1] = 100 / (aHo * Math.floor(tr.measureText("50 000 000").width));
    aHd[2] = 100 / (aHo * Math.floor(tr.measureText("500 000 000").width));
    aHd[3] = 100 / (aHo * Math.floor(tr.measureText("1 000 000 000").width));
  }
  function aHp(aB) {
    if (!aHi) {
      return 1;
    }
    var vQ = ag.gi[aB];
    if (vQ < 1000000) {
      return 1;
    }
    if (vQ < 10000000) {
      return aHd[0];
    }
    return aHd[Math.min(Math.floor(Math.log10(vQ)) - 6, 3)];
  }
  function aHl() {
    var aB;
    for (aB = aD.ee - 1; aB >= 0; aB--) {
      if (ag.gU[aB] < 12) {
        aHF[aB] = ag.iV[aB] + 1;
        aHG[aB] = ag.iX[aB] + 1;
        aHH[aB] = 1;
        aHI[aB] = 1;
      } else {
        aHF[aB] = ag.iV[aB];
        aHG[aB] = ag.iX[aB] + 1;
        aHH[aB] = 4;
        aHI[aB] = 2;
      }
    }
    if (aD.h2) {
      for (aB = 0; aB < aD.jw; aB++) {
        aHH[aB] = 0;
      }
    }
    aHY = ab.get(4).width;
    aHZ = ab.get(4).height;
  }
  this.a3P = function () {
    for (var aB = 0; aB < aD.jw; aB++) {
      if (ag.iW[aB] - ag.iV[aB] !== 3 || ag.iY[aB] - ag.iX[aB] !== 3) {
        aHF[aB] = ag.iV[aB] + (ag.iW[aB] !== ag.iV[aB] ? 1 : 0);
        aHG[aB] = ag.iX[aB];
        aHH[aB] = 1;
        aHI[aB] = 1;
      } else {
        aHF[aB] = ag.iV[aB];
        aHG[aB] = ag.iX[aB] + 1;
        aHH[aB] = 4;
        aHI[aB] = 2;
      }
    }
  };
  this.pG = function (player, e2, aHq) {
    aHr(player, e2, aHq);
    if (aD.z4 === 2) {
      this.lY(true);
    }
  };
  function aHr(player, e2, aHq) {
    var hU = player + e2 * aD.ee;
    if (e2 === 0) {
      if (aHX[hU] === aHq && aB2[hU] > 0) {
        aB2[hU] = 0;
        return;
      }
      aHX[hU] = aHq;
      aB2[hU] = aj.qz.yD(aHq) ? 255 : 64;
      return;
    }
    if (e2 === 1) {
      aB2[hU] = 64;
      aHX[hU] = aHq;
    } else {
      aB2[hU] = aHq;
    }
  }
  this.tq = function () {
    if (aHf) {
      aHn(tr);
      return;
    }
    if (!aHU) {
      return;
    }
    if (aHT !== 1) {
      tr.imageSmoothingEnabled = true;
      tr.setTransform(aHT, 0, 0, aHT, 0, 0);
      tr.drawImage(aHV, -aHR / aHT, -aHS / aHT);
      tr.setTransform(1, 0, 0, 1, 0, 0);
      tr.imageSmoothingEnabled = false;
    } else {
      tr.drawImage(aHV, -aHR, -aHS);
    }
  };
  this.a7v = function (i2, i5) {
    aHR += i2;
    aHS += i5;
  };
  this.a0Y = function (i2, i5) {
    af.a7v(i2, i5);
  };
  this.zoom = function (a1S, kz, l0) {
    aHT *= a1S;
    aHR = (aHR + kz) * a1S - kz;
    aHS = (aHS + l0) * a1S - l0;
  };
  function aHs() {
    if (aHT !== 1 || aHR !== 0 || aHS !== 0) {
      return a95;
    }
    if (aD.a3s() || aD.h2 || aD.z4 === 2) {
      return 1000;
    }
    return a95;
  }
  this.lY = function (br) {
    if (aHf) {
      return false;
    }
    if (!aHc && !br && be.eG < aHb + aHs()) {
      return false;
    }
    aHc = false;
    aHb = be.eG;
    aHn(aHW);
    return true;
  };
  this.aHt = function (aB) {
    return aHp(aB) * aHJ[aB];
  };
  this.aHu = function (player) {
    return aHJ[player];
  };
  function aHn(he) {
    aHU = false;
    aHT = 1;
    aHR = aHS = 0;
    if (!aHf) {
    } else {
      b9.ph.textAlign(he, 1);
      b9.ph.textBaseline(he, 1);
    }
    var mD = iH / iI;
    var mE = iJ / iI;
    var mQ = (h.i + iH) / iI;
    var mR = (h.j + iJ) / iI;
    var aHv, aHw;
    var aB, aHx;
    var fontSize;
    var aHy;
    var aHz = ag.lm[aD.eR] !== 0 && !b9.g2.jK(aD.eR);
    for (var f0 = al.jx - 1; f0 >= 0; f0--) {
      aB = al.jy[f0];
      fontSize = Math.floor(aHQ * iI * aHp(aB) * aHJ[aB] * aHH[aB]);
      if (fontSize < aHP || fontSize >= aHL) {
        continue;
      }
      if (!(aHF[aB] + aHH[aB] > mD && aHF[aB] < mQ && aHG[aB] + aHI[aB] > mE && aHG[aB] < mR)) {
        continue;
      }
      aHv = Math.floor((h.i * (aHF[aB] + aHH[aB] / 2 - mD)) / (mQ - mD));
      aHw = Math.floor((h.j * (aHG[aB] + aHI[aB] / 2 - mE)) / (mR - mE) - 0.1 * fontSize);
      aHx = ac.a7B[aB];
      he.font = b9.ph.rY(ag.a2P[aB] === 1 ? 4 : 1, fontSize);
      he.fillStyle = aI0(fontSize, aHx % 2);
      if (aHi) {
        aI1(he, aB, fontSize, aHv, aHw, aHx);
      } else {
        aI2(aB, fontSize, aHv, aHw, he);
      }
      aHU = true;
      if (aB2[aB] > 0) {
        aI3(aHv, aHw, fontSize, aB, he);
      } else if (jh[aB] === 0) {
        aI4(aHv, aHw, fontSize, 0, 0, he);
      }
      if (
        aHz &&
        (aB2[aB + aD.ee] > 0 || aB2[aB + 2 * aD.ee] > 0 || aB2[aB + 3 * aD.ee] > 0 || aB2[aB + 4 * aD.ee] > 0)
      ) {
        aI5(aHv, aHw, fontSize, aB, he);
      }
      aHy = aHN * fontSize;
      if (aHy < aHP) {
        continue;
      }
      he.font = b9.ph.rY(1, aHy);
      aHw += Math.floor(0.78 * fontSize);
      if (aHi) {
        aI2(aB, aHy, aHv, aHw, he);
      } else {
        aI1(he, aB, aHy, aHv, aHw, aHx);
      }
    }
  }
  function aI2(aB, fontSize, eo, eq, he) {
    he.fillText(ag.xa[aB], eo, eq);
    if (aB < aD.jw && ag.a2P[aB] !== 2) {
      return;
    }
    var aI6 = fontSize / aHK[aB];
    he.fillRect(eo - 0.5 * aI6, eq + b9.ph.y8 * fontSize, aI6, Math.max(1, 0.1 * fontSize));
  }
  function aI1(he, aB, fontSize, aHv, aHw, aHx) {
    var aI7 = b9.qh.yM(ag.gi[aB]);
    if ((aHx >> 1) & 1) {
      he.lineWidth = 0.05 * fontSize;
      he.strokeStyle = aI0(fontSize, aHx % 2);
      he.strokeText(aI7, aHv, aHw);
      return;
    }
    if (aHx > 1) {
      he.lineWidth = 0.12 * fontSize;
      he.strokeStyle = aI0(fontSize, aHx);
      he.strokeText(aI7, aHv, aHw);
    }
    he.fillText(aI7, aHv, aHw);
  }
  function aI4(aHv, aHw, fontSize, aI8, aI9, he) {
    var a4n = (0.95 * fontSize) / aHZ;
    var wF = aHv - 0.5 * a4n * aHY + 0.8 * aI8 * fontSize;
    var wG = aHw - 1.76 * a4n * aHZ - (0.7 + (0.35 - b9.ph.y8)) * aI9 * fontSize;
    he.setTransform(a4n, 0, 0, a4n, wF, wG);
    he.globalAlpha = aIA(fontSize);
    he.drawImage(ab.get(4), 0, 0);
    he.globalAlpha = 1;
    he.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aI5(aHv, aHw, fontSize, aB, he) {
    var f2;
    var g9 = -1;
    for (f2 = 4; f2 >= 1; f2--) {
      if (aB2[aB + f2 * aD.ee] > 0) {
        g9++;
      }
    }
    for (f2 = 1; f2 < 5; f2++) {
      if (aB2[aB + f2 * aD.ee] > 0) {
        aIB(aHv, aHw, fontSize, f2, aB, g9, aB2[aB + f2 * aD.ee], he);
        g9 -= 2;
      }
    }
  }
  function aI3(aHv, aHw, fontSize, aB, he) {
    if (jh[aB] === 0) {
      if (aj.qz.yD(aHX[aB])) {
        aIC(aHv, aHw, fontSize, aB, aHX[aB], he);
        aI4(aHv, aHw, fontSize, 0, 0, he);
      } else if (aj.qz.yF(aHX[aB])) {
        aID(aHv, aHw, fontSize, aHX[aB], 0, he);
        aI4(aHv, aHw, fontSize, 0, 1, he);
      } else {
        aID(aHv, aHw, fontSize, aHX[aB], 1, he);
        aI4(aHv, aHw, fontSize, 1, 0, he);
      }
    } else {
      aID(aHv, aHw, fontSize, aHX[aB], 0, he);
    }
  }
  function aID(aHv, aHw, fontSize, oK, aI8, he) {
    var hY;
    var a4n;
    var wF;
    var wG;
    he.globalAlpha = aIA(fontSize);
    if (aj.qz.yE(oK)) {
      hY = aj.vh.xh;
      a4n = (1.1 * fontSize) / hY;
      wF = aHv - 0.5 * a4n * hY - 0.8 * aI8 * fontSize;
      wG = aHw - 1.55 * a4n * hY;
      he.setTransform(a4n, 0, 0, a4n, wF, wG);
      he.drawImage(aj.vh.xg[oK - 1024 + aj.qz.xs], 0, 0);
      he.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      wF = aHv - 0.8 * aI8 * fontSize;
      wG = aHw - (1 + (0.35 - b9.ph.y8)) * fontSize;
      he.fillText(aj.qz.y7(oK), wF, wG);
    }
    he.globalAlpha = 1;
  }
  function aIB(aHv, aHw, fontSize, f2, aB, aI8, dm, he) {
    var a1t;
    if (f2 === 1) {
      var oK = aHX[aB + aD.ee];
      if (aj.qz.yE(oK)) {
        a1t = aj.vh.xg[oK - 1024 + aj.qz.xs];
      } else {
        aIE(aHv, aHw, fontSize, oK, aI8, he);
        return;
      }
    } else if (f2 === 2) {
      a1t = aL.a4F()[4].canvas[+(dm < 255)];
    } else if (f2 === 3) {
      a1t = aL.a4F()[5].canvas[0];
    } else {
      a1t = aL.a4F()[6].canvas[0];
    }
    var hY = aj.vh.xh;
    var a4n = (0.8 * fontSize) / hY;
    var wF = aHv - 0.5 * a4n * hY - 0.534 * aI8 * fontSize;
    var wG = aHw + 1.4 * a4n * hY;
    he.setTransform(a4n, 0, 0, a4n, wF, wG);
    he.globalAlpha = aIA(fontSize);
    he.drawImage(a1t, 0, 0);
    he.globalAlpha = 1;
    he.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aIE(aHv, aHw, fontSize, oK, aI8, he) {
    he.globalAlpha = aIA(fontSize);
    var wF = aHv - 0.534 * aI8 * fontSize;
    var wG = aHw + 1.59 * fontSize;
    he.font = b9.ph.rY(0, 0.785 * fontSize);
    he.fillText(aj.qz.y7(oK), wF, wG);
    he.globalAlpha = 1;
  }
  function aIC(aHv, aHw, fontSize, player, oK, he) {
    var wG = aHw;
    he.globalAlpha = aIA(fontSize);
    var hd = aHp(player) * (aHi ? aHe : aHK[player]);
    var wF = aHv - (0.5 * fontSize) / hd - 0.9 * fontSize;
    for (var f1 = 0; f1 < 2; f1++) {
      he.fillText(aj.qz.y7(oK), wF, wG);
      wF = aHv + (0.5 * fontSize) / hd + 0.9 * fontSize;
    }
    he.globalAlpha = 1;
  }
  function aI0(fontSize, aHx) {
    if (fontSize >= aHM && fontSize < aHL) {
      return bf.aIF[aHx] + aIA(fontSize).toFixed(3) + ")";
    }
    return bf.aIG[aHx];
  }
  function aIA(fontSize) {
    if (fontSize >= aHM && fontSize < aHL) {
      return 1 - (fontSize - aHM) / (aHL - aHM);
    }
    return 1;
  }
  this.ir = function () {
    var aB;
    if (be.jt() % 10 === 9) {
      aHc = aD.a3u() && !aD.a3s();
    }
    if (!aD.a3s() && ++aHE >= 4) {
      aIH();
    }
    var eh = Math.floor(aHa * al.jx);
    eh = eh < 8 ? 8 : eh;
    eh = eh > al.jx ? al.jx : eh;
    var f0;
    for (aB = aHD + eh - 1; aB >= aHD; aB--) {
      f0 = aB % al.jx;
      aII(al.jy[f0]);
    }
    aHD += eh;
    aHD %= al.jx;
  };
  this.lT = function () {
    var aB, gE, hm, hn;
    if (be.jt() % 4 !== 1) {
      return;
    }
    for (aB = al.jx - 1; aB >= 0; aB--) {
      gE = al.jy[aB];
      if (ac.a7B[gE] < 2) {
        continue;
      }
      hm = Math.max(aHg[gE] - 1, 0);
      hn = Math.max(aHh[gE] - 1, 0);
      if (hm === hn) {
        if (hm === 0) {
          ac.a7B[gE] %= 2;
        }
      } else if (hn === 0 && ac.a7B[gE] < 6) {
        ac.a7B[gE] += 4;
      }
      aHg[gE] = hm;
      aHh[gE] = hn;
    }
  };
  this.a5V = function (player) {
    var aB = player + 2 * aD.ee;
    var dm = aB2[aB];
    if (dm > 0) {
      aN.zB(50, player);
      aB2[aB] = 0;
      return dm === 255;
    }
    return false;
  };
  this.a4X = function (player) {
    return aB2[player + 2 * aD.ee] === 255;
  };
  function aIH() {
    var aB, f0, f1;
    aHE = 0;
    for (f1 = 4; f1 >= 1; f1--) {
      for (f0 = al.jx - 1; f0 >= 0; f0--) {
        aB = al.jy[f0] + f1 * aD.ee;
        if (aB2[aB] > 0 && aB2[aB] < 255) {
          aB2[aB]--;
        }
      }
    }
    if (aD.z4 === 2) {
      return;
    }
    for (f0 = al.jx - 1; f0 >= 0; f0--) {
      aB = al.jy[f0];
      if (aB2[aB] > 0 && aB2[aB] < 255) {
        aB2[aB]--;
      }
    }
  }
  function aII(aB) {
    var hd = aHp(aB) * aHJ[aB];
    if (aHH[aB] > 0 && aIJ(aB, aHF[aB], aHG[aB], aHH[aB], aHI[aB])) {
      if (!aIK(aB) && aIL(aB, hd)) {
        aIM(aB);
      }
    } else if (aIN(aB, hd)) {
      aIM(aB);
    } else {
      aIO(aB, hd);
    }
  }
  function aIP(hd, i) {
    return 1 + Math.floor(aHO * hd * i);
  }
  function aIK(aB) {
    var eL = false;
    var eo, eq, i, j;
    for (var f1 = 0; f1 < 8; f1++) {
      i = aHH[aB] + 2;
      j = aHI[aB] + 2;
      if (i > ag.iW[aB] - ag.iV[aB] + 1 || j > ag.iY[aB] - ag.iX[aB] + 1) {
        return eL;
      }
      eo = aHF[aB] - 1;
      eq = aHG[aB] - 1;
      if (aIJ(aB, eo, eq, i, j)) {
        aHF[aB] = eo;
        aHG[aB] = eq;
        aHH[aB] = i;
        aHI[aB] = j;
        eL = true;
      } else {
        return eL;
      }
    }
    return eL;
  }
  function aIL(aB, hd) {
    var eL = false;
    var eo, eq, i, j;
    var aBB = aHH[aB];
    var mP = 1 + Math.floor(0.02 * aBB);
    for (var f1 = 1; f1 < 5; f1++) {
      i = aBB + f1 * mP;
      if (i > ag.iW[aB] - ag.iV[aB] + 1) {
        return eL;
      }
      j = aIP(hd, i);
      if (j > ag.iY[aB] - ag.iX[aB] + 1) {
        return eL;
      }
      eo = ag.iV[aB] + Math.floor(Math.random() * (ag.iW[aB] - ag.iV[aB] + 2 - i));
      eq = ag.iX[aB] + Math.floor(Math.random() * (ag.iY[aB] - ag.iX[aB] + 2 - j));
      if (aIJ(aB, eo, eq, i, j)) {
        aHF[aB] = eo;
        aHG[aB] = eq;
        aHH[aB] = i;
        aHI[aB] = j;
        eL = true;
      }
    }
    return eL;
  }
  function aIN(aB, hd) {
    var eo = aHF[aB] + 1;
    var eq = aHG[aB] + 1;
    var i = aHH[aB] - 2;
    var j;
    while (true) {
      if (i < 1) {
        aHH[aB] = 0;
        break;
      }
      j = aIP(hd, i);
      if (aIJ(aB, eo, eq, i, j)) {
        aHF[aB] = eo;
        aHG[aB] = eq;
        aHH[aB] = i;
        aHI[aB] = j;
        return true;
      }
      eo++;
      eq++;
      i -= 2;
    }
    return false;
  }
  function aIO(aB, hd) {
    var eo, eq, i, j, f1, mV;
    var jD = ag.iW[aB] - ag.iV[aB] + 1;
    var aIQ = Math.floor(0.02 * jD);
    aIQ = aIQ < 1 ? 1 : aIQ;
    mV = -6 * aIQ;
    for (f1 = jD; f1 >= mV; f1 -= aIQ) {
      i = f1 > 0 ? f1 : 1;
      j = aIP(hd, i);
      eo = ag.iV[aB] + Math.floor(Math.random() * (ag.iW[aB] - ag.iV[aB] + 2 - i));
      eq = ag.iX[aB] + Math.floor(Math.random() * (ag.iY[aB] - ag.iX[aB] + 2 - j));
      if (aIJ(aB, eo, eq, i, j)) {
        aHF[aB] = eo;
        aHG[aB] = eq;
        aHH[aB] = i;
        aHI[aB] = j;
        return;
      }
    }
  }
  function aIM(aB) {
    var f0;
    var left = aHF[aB];
    for (f0 = aHF[aB] - ag.iV[aB] - 1; f0 >= 0; f0--) {
      left--;
      if (!aIR(aB, left, aHG[aB], aHI[aB])) {
        left++;
        break;
      }
    }
    var right = aHF[aB];
    for (f0 = ag.iW[aB] - aHF[aB] - aHH[aB]; f0 >= 0; f0--) {
      right++;
      if (!aIR(aB, right + aHH[aB] - 1, aHG[aB], aHI[aB])) {
        right--;
        break;
      }
    }
    var eo = Math.floor((left + right) / 2);
    var top = aHG[aB];
    for (f0 = aHG[aB] - ag.iX[aB] - 1; f0 >= 0; f0--) {
      top--;
      if (!aIS(aB, eo, top, aHH[aB])) {
        top++;
        break;
      }
    }
    var bottom = aHG[aB];
    for (f0 = ag.iY[aB] - aHG[aB] - aHI[aB]; f0 >= 0; f0--) {
      bottom++;
      if (!aIS(aB, eo, bottom + aHI[aB] - 1, aHH[aB])) {
        bottom--;
        break;
      }
    }
    var eq = Math.floor((top + bottom) / 2);
    if (aIJ(aB, eo, eq, aHH[aB], aHI[aB])) {
      aHF[aB] = eo;
      aHG[aB] = eq;
    }
  }
  function aIJ(player, eo, eq, i, j) {
    var f2;
    var ek = Math.floor(0.2 * i);
    ek = ek < 1 ? 1 : ek;
    for (f2 = eo + i - 1; f2 >= eo; f2--) {
      if (!aIR(player, f2, eq, j)) {
        return false;
      }
    }
    ek = Math.floor(0.25 * j);
    ek = ek < 1 ? 1 : ek;
    for (f2 = eq + j - 1 - ek; f2 >= eq + ek; f2--) {
      if (!aIS(player, eo, f2, i)) {
        return false;
      }
    }
    return true;
  }
  function aIR(player, eo, eq, j) {
    return ac.x6(player, (eq * bR.es + eo) * 4) && ac.x6(player, ((eq + j - 1) * bR.es + eo) * 4);
  }
  function aIS(player, eo, eq, i) {
    return ac.x6(player, (eq * bR.es + eo) * 4) && ac.x6(player, (eq * bR.es + eo + i - 1) * 4);
  }
}
function cZ() {
  var aIT;
  var aIU;
  var aIV;
  this.dX = function () {
    aIT =
      "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(
        ";"
      );
    aIU =
      "Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord".split(
        ";"
      );
    aIV =
      "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector".split(
        ";"
      );
    var a5n = ["K ", " Y", "E ", " Z", " z", " s", "S "];
    var aIW = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
    for (var aB = aIT.length - 1; aB >= 0; aB--) {
      for (var f0 = a5n.length - 1; f0 >= 0; f0--) {
        aIT[aB] = aIT[aB].replace(a5n[f0], aIW[f0]);
      }
    }
  };
  this.a3e = function () {
    aIX();
  };
  this.a7 = function () {
    if (aD.kD === 9) {
      aIY();
      return;
    }
    if (aD.data.playerNamesType === 2) {
      aIZ();
      return;
    }
    if (aD.data.playerNamesType === 1) {
      aIa();
      return;
    }
    aIb();
  };
  function aIX() {
    var eh = aD.jw;
    var xa = ag.xa;
    var zh = ag.zh;
    var playerNamesData = aD.data.playerNamesData;
    if (!playerNamesData || playerNamesData.length < eh) {
      for (var aB = 0; aB < eh; aB++) {
        xa[aB] = zh[aB] = S[54] + ax.jE(1000);
      }
      return;
    }
    for (aB = 0; aB < eh; aB++) {
      xa[aB] = zh[aB] = playerNamesData[aB];
    }
  }
  function aIY() {
    var e1 = ax.random();
    var aIc = aIV;
    var aId = aIU;
    var hL = aE.hL;
    var eh = aIc.length;
    var ke = aD.data.teamPlayerCount[7];
    var xa = ag.xa;
    var zh = ag.zh;
    for (var aB = ke - 1; aB >= aD.jw; aB--) {
      xa[aB] = zh[aB] = aIc[(aB + e1) % eh];
    }
    eh = aId.length - 1;
    for (aB = ke; aB < aD.ee; aB++) {
      xa[aB] = zh[aB] = aId[hL[aB] ? eh : aB % eh];
    }
  }
  function aIZ() {
    var eh = aD.ee;
    var xa = ag.xa;
    var zh = ag.zh;
    var playerNamesData = aD.data.playerNamesData;
    for (var aB = aD.jw; aB < eh; aB++) {
      xa[aB] = zh[aB] = playerNamesData[aB];
    }
  }
  function aIa() {
    var xa = ag.xa;
    var zh = ag.zh;
    for (var aB = aD.jw; aB < aD.ee; aB++) {
      xa[aB] = zh[aB] = S[103] + ax.jE(1000);
    }
  }
  function aIb() {
    var aIe = aIT;
    var eh = aIe.length;
    var e1 = ax.random();
    var xa = ag.xa;
    var zh = ag.zh;
    for (var aB = aD.jw; aB < aD.ee; aB++) {
      xa[aB] = zh[aB] = aIe[(aB + e1) % eh];
    }
  }
}
function cs() {
  this.aIf = [];
  this.aIg = [];
  this.dX = function () {
    this.aIf = [];
    this.aIg = [];
  };
  this.ir = function () {
    if (this.aIf.length >= 0) {
      this.aIh(this.aIf);
    }
    if (this.aIg.length >= 0) {
      this.aIh(this.aIg);
    }
  };
  this.aIh = function (g) {
    var aB;
    var f1 = -1;
    for (aB = g.length - 1; aB >= 0; aB--) {
      g[aB].eG--;
      if (g[aB].eG <= 0) {
        f1 = aB;
        break;
      }
    }
    for (aB = f1; aB >= 0; aB--) {
      g.shift();
    }
  };
  this.a4N = function (id, ys, aIi) {
    return this.f3(this.aIf, id, ys, aIi);
  };
  this.aIj = function (id, ys, aIi) {
    return this.f3(this.aIg, id, ys, aIi);
  };
  this.f3 = function (g, id, ys, aIi) {
    if (aIk(g, id, ys)) {
      return false;
    }
    if (aIi) {
      aIl(g, id, ys);
    }
    return true;
  };
  function aIk(g, id, ys) {
    var aB, hU;
    for (aB = ys.length - 1; aB >= 0; aB--) {
      for (hU = g.length - 1; hU >= 0; hU--) {
        if (g[hU].player === ys[aB] && id === g[hU].id) {
          return true;
        }
      }
    }
    return false;
  }
  function aIl(g, id, ys) {
    var aB;
    for (aB = ys.length - 1; aB >= 0; aB--) {
      g.push({
        player: ys[aB],
        id: id,
        eG: 384,
      });
    }
  }
}
function cY() {
  this.zh = new Array(aD.ee);
  this.xa = new Array(aD.ee);
  this.a2P = new Uint8Array(aD.ee);
  this.lm = new Uint8Array(aD.ee);
  this.iV = new Uint16Array(aD.ee);
  this.iX = new Uint16Array(aD.ee);
  this.iW = new Uint16Array(aD.ee);
  this.iY = new Uint16Array(aD.ee);
  this.gU = new Uint32Array(aD.ee);
  this.wh = new Uint32Array(aD.ee);
  this.gi = new Uint32Array(aD.ee);
  this.g8 = null;
  this.gM = null;
  this.gN = null;
  this.f7 = null;
  this.p3 = new Uint16Array(aD.ee);
  this.iz = new Uint16Array(aD.ee);
  this.j0 = new Uint16Array(aD.ee);
  this.xX = new Uint16Array(aD.ee);
  this.zb = new Uint8Array(aD.ee);
  this.a2X = new Uint16Array(aD.ee);
  this.dX = function () {
    this.zh.fill("");
    this.xa.fill("");
    this.a2P.fill(0);
    this.lm.fill(0);
    this.iV.fill(0);
    this.iX.fill(0);
    this.iW.fill(0);
    this.iY.fill(0);
    this.gU.fill(0);
    this.wh.fill(0);
    this.gi.fill(0);
    this.g8 = new Array(aD.ee);
    this.gM = new Array(aD.ee);
    this.gN = new Array(aD.ee);
    this.f7 = new Array(aD.ee);
    this.p3.fill(0);
    this.iz.fill(0);
    this.j0.fill(0);
    this.xX.fill(0);
    this.zb.fill(0);
    this.a2X.fill(0);
  };
}
function cq() {
  this.aBW = function (player) {
    aG.ll(player);
    aD.z6++;
    ag.a2P[player] = 2;
    ag.xX[player] = bh.zs.aFz();
    if (player === aD.eR) {
      aX.show(false, false);
      aW.a9j();
      bQ.yp.zZ();
    }
    af.a5V(player);
  };
}
function cS() {
  this.jy = null;
  this.jx = 0;
  this.a3i = function () {
    var aB;
    this.jx = 0;
    for (aB = aD.ee - 1; aB >= 0; aB--) {
      if (ag.lm[aB] !== 0) {
        this.jx++;
      }
    }
    this.jy = new Uint16Array(this.jx);
    var eh = 0;
    for (aB = 0; aB < aD.ee; aB++) {
      if (ag.lm[aB] !== 0) {
        this.jy[eh++] = aB;
      }
    }
  };
  this.lS = function () {
    aIm();
    this.aIn();
  };
  this.aIn = function () {
    var lm = ag.lm;
    var kd = this.jy;
    var aAP = this.jx;
    for (var aB = aAP - 1; aB >= 0; aB--) {
      if (lm[kd[aB]] === 0) {
        kd[aB] = kd[--aAP];
      }
    }
    this.jx = aAP;
  };
  function aIm() {
    var gU = ag.gU;
    var wh = ag.wh;
    var zb = ag.zb;
    var jy = al.jy;
    for (var aB = al.jx - 1; aB >= 0; aB--) {
      var gE = jy[aB];
      if (gU[gE] <= bK.dn(wh[gE], 4)) {
        ak.dg(gE);
      } else if (gU[gE] >= wh[gE]) {
        var dm = gU[gE];
        wh[gE] = dm;
        if (dm >= 250) {
          zb[gE] = 1;
        }
      } else {
        wh[gE] -= Math.max(1, bK.dn(wh[gE] - gU[gE], 1000));
      }
    }
  }
}
var a0X;
var tr;
function ca() {
  var aIo;
  this.kM = null;
  this.kL = 0;
  this.dX = function () {
    aIo = [];
    if (aD.kD !== 9) {
      return;
    }
    this.aIp();
  };
  this.aIp = function () {
    var aIq = [60, 80, 105, 150, 190, 333];
    this.kM = [0, 0, 0, 0, 0, 0];
    this.kL = 0;
    if (aD.jw < 9) {
      this.kL = 256 - bK.dn(275 * aD.jw, 100);
      this.kM[0] = aD.ee - aD.jw - this.kL;
    } else if (aD.jw < 13) {
      this.kL = 256 - 22 - 7 * (aD.jw - 8);
      this.kM[0] = aD.ee - aD.jw - this.kL;
    } else if (aD.jw <= aIq[0]) {
      this.kL = 256 - bK.dn(256 * aD.jw, aIq[0]);
      if (aD.jw <= 23) {
        this.kM[5] = bK.dn(Math.max(aD.jw - 7, 0), 6);
      } else {
        this.kM[5] = 3 + bK.dn(37 * (aD.jw - 23), 100);
      }
      this.kM[0] = aD.ee - aD.jw - this.kL - this.kM[5];
    } else {
      this.kM[5] = Math.min(16 + bK.dn(61 * (aD.jw - 60), 100), 179);
      this.kM[0] = 512 - aD.jw - this.kM[5];
    }
    aD.kH = aD.ee - aD.jw;
    aD.data.numberTeams = (aD.jw > 0) + (aD.kH > 0);
    aD.data.playerCount = aD.wD = aD.jw + aD.kH;
    aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.jw + this.kL, aD.kH - this.kL]);
    aD.a3Y.a3c();
  };
  this.aG6 = function (player) {
    aIo.push({
      player: player,
      g9: 14 + ax.jE(20),
    });
  };
  this.ir = function () {
    if (aD.kD !== 9) {
      return;
    }
    aIr();
  };
  function aIr() {
    for (var aB = aIo.length - 1; aB >= 0; aB--) {
      if (--aIo[aB].g9 <= 0) {
        af.pG(aIo[aB].player, 0, aj.qz.xv + aj.qz.y9);
        aIo.splice(aB);
      }
    }
  }
}
function d7() {
  this.aIs = 22;
  this.aGH = 4096;
  this.es = 0;
  this.et = 0;
  this.ve = null;
  this.va = null;
  this.vb = null;
  this.vf = null;
  this.eN = 0;
  this.mapSeed = 0;
  this.vc = false;
  this.vd = new aIt();
  this.vU = new aIu();
  this.a5t = new aIv();
  this.dX = function () {
    this.vU.dX();
  };
  this.a7 = function (map, aIw) {
    var vV;
    map = map % this.aIs;
    if (map === this.eN && (!aIx(this.eN) || aIw === this.mapSeed)) {
      return;
    }
    this.vc = false;
    this.vd.aIy();
    ax.a3d(map);
    this.eN = map;
    this.mapSeed = aIw;
    if (aIx(map)) {
      bR.vU.vV[map].aIz = aIw;
    }
    if (!this.aC0(this.eN)) {
      aJ0();
      return;
    }
    vV = bR.vU.vV[this.eN];
    this.es = vV.i;
    this.et = vV.j;
    ax.a3d(vV.aIz);
    ap.a7([this.es, this.et, vV.lr, vV.lo]);
    aJ1();
    ao.aJ2();
    ap.aJ3();
  };
  this.aJ4 = function (map, aIw) {
    var fO = aJ5();
    this.a7(map, aIw);
    this.vd.aIy();
    var fQ = aJ5();
    aJ6(fO);
    return fQ;
  };
  this.a3y = function (canvas) {
    if (!canvas) {
      return;
    }
    if (this.ve === canvas) {
      return;
    }
    this.es = canvas.width;
    this.et = canvas.height;
    this.ve = canvas;
    this.va = this.ve.getContext("2d", {
      alpha: false,
    });
    this.hb = this.va.getImageData(0, 0, this.es, this.et);
    this.vf = this.hb.data;
    this.eN = this.aJ7();
    this.mapSeed = 0;
    bR.vU.vV[this.eN].name = aD.data.mapName;
  };
  function aJ5() {
    return {
      es: bR.es,
      et: bR.et,
      ve: bR.ve,
      va: bR.va,
      vb: bR.vb,
      vf: bR.vf,
      eN: bR.eN,
      mapSeed: bR.mapSeed,
      vc: bR.vc,
    };
  }
  function aJ6(f9) {
    bR.es = f9.es;
    bR.et = f9.et;
    bR.ve = f9.ve;
    bR.va = f9.va;
    bR.vb = f9.vb;
    bR.vf = f9.vf;
    bR.eN = f9.eN;
    bR.mapSeed = f9.mapSeed;
    bR.vc = f9.vc;
  }
  this.eM = function (aB) {
    return aB === 3 || aB === 7 || aB === 9 || aB === 21 || aB === this.aJ7();
  };
  this.aJ8 = function (aB) {
    return aB === 2 || aB === 7 || aB === 9 || aB === 20;
  };
  this.aJ9 = function (aB) {
    return aB === 1;
  };
  this.aJ7 = function () {
    return this.aIs;
  };
  this.aC0 = function (aB) {
    return this.vU.vV[aB].aJA === undefined;
  };
  function aIx(aB) {
    return !(aB === 1 || !bR.aC0(aB) || aB === bR.aJ7());
  }
  this.a3x = function (pZ) {
    if (pZ.mapType === 0) {
      return pZ.mapProceduralIndex < 10 ? pZ.mapProceduralIndex : 10 + pZ.mapProceduralIndex;
    } else if (pZ.mapType === 1) {
      return pZ.mapRealisticIndex + 10;
    }
  };
  this.aC1 = function (pZ, aJB) {
    if (pZ.mapType === 0) {
      pZ.mapProceduralIndex = aJB < 10 ? aJB : aJB - 10;
    } else if (pZ.mapType === 1) {
      pZ.mapRealisticIndex = aJB - 10;
    }
  };
}
function aIt() {
  this.a87 = -1;
  this.a05 = 0;
  this.aJC = 0;
  this.aJD = 8;
  this.aJE = 32;
  this.aJF = 8;
  this.aJG = 32;
  this.aJH = [0, 0];
  this.a7B = [0, 0, 0, 0];
  this.iQ = null;
  this.aJI = true;
  this.aJJ = false;
  this.aIy = function () {
    if (this.a87 !== -1) {
      clearTimeout(this.a87);
    }
    this.a87 = -1;
    this.iQ = null;
    ap.aJ3();
  };
  this.dX = function () {
    if (aa.a0E() === 7 || this.aJJ) {
      return;
    }
    this.aJI = true;
    this.a05 = 0;
    this.aJC = 1;
    this.aJH = [bR.vU.vV[bR.eN].vx[0], bR.vU.vV[bR.eN].vy[0]];
    this.a7B = [bR.vU.vV[bR.eN].aJA[3], bR.vU.vV[bR.eN].aJA[4], bR.vU.vV[bR.eN].aJA[5], bR.vU.vV[bR.eN].aJA[6]];
    this.aJD = bR.vU.vV[bR.eN].aJA[7];
    this.aJE = bR.vU.vV[bR.eN].aJA[8];
    this.aJF = bR.vU.vV[bR.eN].aJA[9];
    this.aJG = bR.vU.vV[bR.eN].aJA[10];
    if (this.aJI) {
      this.a87 = setTimeout(aJK, 16);
    } else {
      this.ir();
    }
  };
  function aJK() {
    bR.vd.ir();
  }
  this.ir = function () {
    if (aa.a0E() === 8 && aH.m4()) {
      this.a87 = setTimeout(aJK, 16);
      return;
    }
    if (this.a05 === 0) {
      var aIz = ax.aJL();
      ax.a3d(bR.vU.vV[bR.eN].aJA[2]);
      ap.a7([bR.es, bR.et, bR.vU.vV[bR.eN].aJA[0], bR.vU.vV[bR.eN].aJA[1]]);
      ax.a3d(aIz);
      this.iQ = ap.aJM();
      this.a05++;
      if (this.aJI) {
        this.a87 = setTimeout(aJK, 16);
        return;
      }
    }
    var j = !this.aJI ? 1000000 : 10;
    j = bR.et - this.aJC - 1 < j ? bR.et - this.aJC - 1 : j;
    var wu = this.aJC + j;
    var gE, eT;
    for (var eq = this.aJC; eq < wu; eq++) {
      for (var eo = 1; eo < bR.es - 1; eo++) {
        eT = eo + eq * bR.es;
        gE = 4 * eT;
        if (h9(gE)) {
          this.aJN(gE, eT, 1);
        } else {
          this.aJN(gE, eT, 0);
          if (x0(eo, eq, gE)) {
            this.aJO(eo, eq);
          }
        }
      }
    }
    this.aJC = wu;
    if (this.aJC >= bR.et - 1) {
      bR.va.putImageData(bR.vb, 0, 0, 1, 1, bR.es - 2, bR.et - 2);
      be.df = true;
      this.aIy();
      return;
    } else {
      if (this.aJI) {
        this.a87 = setTimeout(aJK, 16);
      }
    }
    return;
  };
  this.aJN = function (gE, eT, e2) {
    var aJP = Math.floor(this.aJH[e2] + (this.a7B[e2] * this.iQ[eT]) / 10000) - bR.vf[gE];
    aJQ(gE, aJP);
  };
  this.aJR = function (gE, e1, aJS, e2, a7B) {
    var aJP = Math.floor(this.aJH[e2] + (1 - e1 / aJS) * a7B) - bR.vf[gE];
    aJQ(gE, aJP);
  };
  function aJQ(gE, aJP) {
    if (aJP > 0) {
      bR.vf[gE] += aJP;
      bR.vf[gE + 1] += aJP;
      bR.vf[gE + 2] += aJP;
    }
  }
  this.aJO = function (kz, l0) {
    var gE, e1, aJS;
    var a7x = kz - this.aJE;
    var aJT = l0 - this.aJE;
    var wv = kz + this.aJE;
    var wu = l0 + this.aJE;
    a7x = a7x < 1 ? 1 : a7x;
    aJT = aJT < 1 ? 1 : aJT;
    wv = wv > bR.es - 2 ? bR.es - 2 : wv;
    wu = wu > bR.et - 2 ? bR.et - 2 : wu;
    for (var eq = aJT; eq <= wu; eq++) {
      for (var eo = a7x; eo <= wv; eo++) {
        gE = 4 * (eo + eq * bR.es);
        if (h9(gE)) {
          aJS = this.aJD + ((this.aJE - this.aJD) * this.iQ[eo + bR.es * eq]) / 10000;
          if (Math.abs(kz - eo) > aJS || Math.abs(l0 - eq) > aJS) {
            continue;
          }
          e1 = Math.sqrt((kz - eo) * (kz - eo) + (l0 - eq) * (l0 - eq));
          if (e1 >= aJS) {
            continue;
          }
          this.aJR(gE, e1, aJS, 1, this.a7B[3]);
        } else {
          aJS = this.aJF + ((this.aJG - this.aJF) * this.iQ[eo + bR.es * eq]) / 10000;
          if (Math.abs(kz - eo) > aJS || Math.abs(l0 - eq) > aJS) {
            continue;
          }
          e1 = Math.sqrt((kz - eo) * (kz - eo) + (l0 - eq) * (l0 - eq));
          if (e1 >= aJS) {
            continue;
          }
          this.aJR(gE, e1, aJS, 0, this.a7B[2]);
        }
      }
    }
  };
  function h9(gE) {
    return bR.vf[gE + 2] > bR.vf[gE] && bR.vf[gE + 2] > bR.vf[gE + 1];
  }
  function x0(eo, eq, gE) {
    return (
      (eo > 1 && h9(gE - 4)) ||
      (eo < bR.es - 2 && h9(gE + 4)) ||
      (eq > 1 && h9(gE - 4 * bR.es)) ||
      (eq < bR.et - 2 && h9(gE + 4 * bR.es))
    );
  }
}
function aJ1() {
  var ta = aJU(bR.eN);
  if (ta) {
    aJV(ta[0], ta[1], ta[2], ta[3], ta[4]);
  }
}
function aJU(eN) {
  if (eN === 2) {
    return [[256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]];
  } else if (eN === 7) {
    return [[512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]];
  } else if (eN === 8) {
    return [[410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]];
  } else if (eN === 9) {
    return [[512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]];
  } else if (eN === 20) {
    return [[512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]];
  }
  return null;
}
function aJV(aJW, aJX, aJY, aJZ, aJa) {
  var aB, eo, eq;
  var i1 = aJW.length - 1;
  var aJb = bR.es + bR.et;
  aJb *= aJb;
  var aJc;
  var aJd;
  var eh = aJY.length;
  var aJe = Array(eh);
  for (aB = eh - 1; aB >= 0; aB--) {
    aJe[aB] = aJY[aB] * aJY[aB];
  }
  var a1S;
  var aJf;
  var aJg = new Array(eh);
  var aAz = new Array(eh);
  var aJh = new Array(eh);
  var f9 = ap.aJM();
  if (aJa === undefined) {
    aJa = new Array(eh);
    for (aB = eh - 1; aB >= 0; aB--) {
      aJa[aB] = 0;
    }
  }
  for (aB = 1; aB < eh; aB++) {
    aJg[aB] = aJe[aB] - aJe[aB - 1];
    aAz[aB] = aJZ[aB] - aJZ[aB - 1];
    aJh[aB] = aJa[aB] - aJa[aB - 1];
  }
  for (eo = bR.es - 1; eo >= 0; eo--) {
    for (eq = bR.et - 1; eq >= 0; eq--) {
      aJc = aJb;
      for (aB = i1; aB >= 0; aB--) {
        aJd = (eo - aJW[aB]) * (eo - aJW[aB]) + (eq - aJX[aB]) * (eq - aJX[aB]);
        aJc = aJd < aJc ? aJd : aJc;
      }
      a1S = aJZ[eh - 1];
      aJf = aJa[eh - 1];
      for (aB = 1; aB < eh; aB++) {
        if (aJc < aJe[aB]) {
          a1S = aJZ[aB - 1] + aFZ((aJc - aJe[aB - 1]) * aAz[aB], aJg[aB]);
          aJf = aJa[aB - 1] + aFZ((aJc - aJe[aB - 1]) * aJh[aB], aJg[aB]);
          break;
        }
      }
      aJi(bR.es * eq + eo, a1S, aJf, f9);
    }
  }
}
function aJi(e2, a1S, aJf, f9) {
  if (a1S < 500) {
    f9[e2] = bK.dn(f9[e2] * a1S * 2, 1000);
  } else if (a1S > 500) {
    f9[e2] += bK.dn((10000 - f9[e2]) * 2 * (a1S - 500), 1000);
  }
  f9[e2] += bK.dn(aJf * (10 * a1S - f9[e2]), 1000);
}
function cc() {
  var aJj;
  this.a5q = 0;
  this.a5r = 0;
  this.a5s = 0;
  this.a5t = 0;
  this.dX = function () {
    aJj = new Array(bR.aIs);
    aJj[0] = {
      i: [0, 5000, 8000, 10000],
      e1: [220, 250, 255, 220],
      sM: [190, 220, 0, 0],
      f1: [170, 200, 0, 0],
    };
    aJj[1] = {
      i: [0, 4000, 5000, 6000, 10000],
      e1: [25, 0, 100, 0, 25],
      sM: [25, 0, 0, 0, 25],
      f1: [25, 0, 0, 0, 25],
    };
    aJj[2] = {
      i: [0, 500, 2500, 2999, 3000, 3200, 4200, 5200, 5700, 8800, 10000],
      e1: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
      sM: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
      f1: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10],
    };
    aJj[3] = {
      i: [0, 400, 1899, 1900, 3200, 4500, 6000, 7700, 8499, 8500, 9500, 10000],
      e1: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
      sM: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
      f1: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230],
    };
    aJj[4] = {
      i: [0, 300, 1400, 1700, 3000, 4000, 10000],
      e1: [10, 10, 20, 10, 10, 170, 212],
      sM: [20, 20, 60, 100, 100, 110, 170],
      f1: [70, 70, 160, 30, 30, 60, 120],
    };
    aJj[5] = {
      i: [0, 1000, 3000, 3500, 4000, 4500, 7000, 7500, 8000, 10000],
      e1: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
      sM: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
      f1: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25],
    };
    aJj[6] = {
      i: [0, 700, 2650, 3200, 5000, 8000, 10000],
      e1: [10, 10, 60, 255, 255, 200, 200],
      sM: [10, 10, 60, 255, 255, 200, 200],
      f1: [80, 80, 255, 255, 255, 200, 200],
    };
    aJj[7] = {
      i: [0, 400, 1999, 2000, 3200, 4000, 4700, 5500, 6500, 9500, 10000],
      e1: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
      sM: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
      f1: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255],
    };
    aJj[8] = {
      i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6000, 10000],
      e1: [25, 30, 30, 30, 255, 255, 30, 40, 20],
      sM: [25, 30, 150, 150, 245, 245, 80, 150, 70],
      f1: [60, 170, 170, 170, 235, 235, 30, 40, 40],
    };
    aJj[9] = {
      i: [0, 400, 2009, 2010, 3300, 4000, 5200, 6500, 8000, 9500, 10000],
      e1: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
      sM: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
      f1: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255],
    };
    aJj[20] = {
      i: [0, 5500, 6700, 6999, 7000, 7300, 7600, 8200, 10000],
      e1: [5, 5, 70, 70, 255, 255, 252, 10, 8],
      sM: [20, 28, 190, 190, 255, 255, 248, 90, 60],
      f1: [60, 80, 220, 220, 220, 220, 217, 10, 8],
    };
    aJj[21] = {
      i: [0, 1500, 3000, 4000, 5000, 5999, 6000, 9500, 10000],
      e1: [12, 30, 10, 16, 40, 50, 55, 170, 170],
      sM: [45, 100, 40, 80, 120, 80, 55, 170, 170],
      f1: [12, 60, 10, 16, 40, 50, 55, 170, 170],
    };
  };
  this.aJ2 = function () {
    var hb = aJk();
    aJl(aJj[bR.eN].i, aJj[bR.eN].e1, aJj[bR.eN].sM, aJj[bR.eN].f1);
    bR.va.putImageData(hb, 0, 0);
    if (bR.aJ9(bR.eN)) {
      aJm();
    }
    bR.vc = true;
    be.df = true;
  };
  function aJk() {
    var hb;
    bR.ve = document.createElement(S[4]);
    bR.ve.width = bR.es;
    bR.ve.height = bR.et;
    bR.va = bR.ve.getContext("2d", {
      alpha: false,
    });
    hb = bR.va.getImageData(0, 0, bR.es, bR.et);
    bR.vf = hb.data;
    return hb;
  }
  function aJl(i, e1, sM, f1) {
    var aB, f0;
    var f9 = ap.aJM();
    var eh = i.length - 2;
    var fO;
    var aJn = new Array(eh + 1);
    var aJo = new Array(eh + 1);
    var aJp = new Array(eh + 1);
    var aJq = new Array(eh + 1);
    for (f0 = eh; f0 >= 0; f0--) {
      aJn[f0] = i[f0 + 1] - i[f0];
      aJo[f0] = e1[f0 + 1] - e1[f0];
      aJp[f0] = sM[f0 + 1] - sM[f0];
      aJq[f0] = f1[f0 + 1] - f1[f0];
    }
    for (aB = bR.es * bR.et - 1; aB >= 0; aB--) {
      for (f0 = eh; f0 >= 0; f0--) {
        if (f9[aB] >= i[f0]) {
          fO = f9[aB] - i[f0];
          bR.vf[aB * 4] = e1[f0] + aFZ(aJo[f0] * fO, aJn[f0]);
          bR.vf[aB * 4 + 1] = sM[f0] + aFZ(aJp[f0] * fO, aJn[f0]);
          bR.vf[aB * 4 + 2] = f1[f0] + aFZ(aJq[f0] * fO, aJn[f0]);
          bR.vf[aB * 4 + 3] = 255;
          break;
        }
      }
    }
  }
  function aJm() {
    if (!ab.sQ() || !bR.aJ9(bR.eN)) {
      return;
    }
    var aJr = ab.aEj(S[94]);
    var aJs = ab.aEj(S[21]);
    aJt(aJr, 5, 0.5, 0.5, 0.1);
    aJt(aJs, 2, 0.5, 0.45, 0.1);
  }
  function aJt(a1t, hd, eo, eq, globalAlpha) {
    bR.va.save();
    bR.va.globalAlpha = globalAlpha;
    bR.va.imageSmoothingEnabled = false;
    bR.va.scale(hd, hd);
    bR.va.drawImage(a1t, Math.floor(eo * (bR.es / hd - a1t.width)), Math.floor(eq * (bR.et / hd - a1t.height)));
    bR.va.restore();
  }
  this.a3g = function () {
    var aB, gE, eo, eq, aJu, hS, fQ;
    var a5r = 0;
    var i = bR.es;
    var j = bR.et;
    var fO = i * j * 4;
    var aJv = aAZ;
    var aJw = bR.vf;
    for (aB = i - 1; aB >= 0; aB--) {
      gE = aB << 2;
      aJv[gE + 2] = aJv[fO - gE - 2] = 3;
    }
    fO = i * 4;
    for (aB = j - 1; aB >= 0; aB--) {
      gE = aB * fO;
      aJv[gE + 2] = aJv[gE + fO - 2] = 3;
    }
    aJu = i - 1;
    hS = j - 1;
    for (eq = 1; eq < hS; eq++) {
      fO = eq * i;
      for (eo = 1; eo < aJu; eo++) {
        gE = (fO + eo) << 2;
        fQ = 1 - (aJw[gE + 2] > aJw[gE + 1] && aJw[gE + 2] > aJw[gE]);
        aJv[gE + 2] = 2 - fQ;
        a5r += fQ;
      }
    }
    this.a5q = (i - 2) * (j - 2);
    this.a5t = 0;
    if (bR.eM(bR.eN)) {
      bR.a5t.aJx();
      bR.a5t.aJy();
    }
    this.a5r = aD.jg = a5r - this.a5t;
    this.a5s = this.a5q - this.a5r - this.a5t;
  };
}
function aJ0() {
  var pO;
  if (bR.eN === 10) {
    pO =
      "DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX";
  } else if (bR.eN === 11) {
    pO =
      "QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk";
  } else if (bR.eN === 12) {
    pO =
      "JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV";
  } else if (bR.eN === 13) {
    pO =
      "C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V";
  } else if (bR.eN === 14) {
    pO =
      "EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs";
  } else if (bR.eN === 15) {
    pO =
      "CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV";
  } else if (bR.eN === 16) {
    pO =
      "DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc";
  } else if (bR.eN === 17) {
    pO =
      "9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc";
  } else if (bR.eN === 18) {
    pO =
      "DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-";
  } else if (bR.eN === 19) {
    pO =
      "EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV";
  }
  new vN().vP(pO);
}
function aIu() {
  this.vV = null;
  this.aJz = null;
  this.aK0 = null;
  this.dX = function () {
    var aK1 = [120, 105, 92];
    var cos = [12, 12, 60];
    var aK2 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9];
    var aK3 = [140, 130, 120];
    var aK4 = [12, 12, 76];
    var aK5 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9];
    var aK6 = [130, 117, 106];
    var aK7 = [12, 12, 68];
    var aK8 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
    this.vV = new Array(bR.aIs + 1);
    this.vV[0] = {
      name: L(136),
      i: 230,
      j: 230,
      lr: 1000,
      lo: 2000,
      aIz: 173,
    };
    this.vV[1] = {
      name: L(137),
      i: 800,
      j: 800,
      lr: 100,
      lo: 50,
      aIz: 43,
    };
    this.vV[2] = {
      name: L(138),
      i: 512,
      j: 512,
      lr: 128,
      lo: 32,
      aIz: 0,
    };
    this.vV[3] = {
      name: L(139) + " 1",
      i: 960,
      j: 960,
      lr: 60,
      lo: 8,
      aIz: 0,
    };
    this.vV[4] = {
      name: L(140),
      i: 900,
      j: 900,
      lr: 100,
      lo: 5,
      aIz: 0,
    };
    this.vV[5] = {
      name: L(141),
      i: 1000,
      j: 1000,
      lr: 100,
      lo: 40,
      aIz: 0,
    };
    this.vV[6] = {
      name: L(142),
      i: 1000,
      j: 1000,
      lr: 100,
      lo: 20,
      aIz: 0,
    };
    this.vV[7] = {
      name: L(143),
      i: 1024,
      j: 1024,
      lr: 128,
      lo: 32,
      aIz: 0,
    };
    this.vV[8] = {
      name: L(144),
      i: 820,
      j: 820,
      lr: 200,
      lo: 100,
      aIz: 0,
    };
    this.vV[9] = {
      name: L(145),
      i: 1024,
      j: 1024,
      lr: 128,
      lo: 32,
      aIz: 0,
    };
    this.vV[10] = {
      name: L(146),
      vx: aK3,
      vy: aK4,
      aJA: aK5,
    };
    this.vV[11] = {
      name: L(147),
      vx: aK6,
      vy: aK7,
      aJA: aK8,
    };
    this.vV[12] = {
      name: L(148),
      vx: aK6,
      vy: aK7,
      aJA: aK8,
    };
    this.vV[13] = {
      name: L(149),
      vx: aK1,
      vy: cos,
      aJA: aK2,
    };
    this.vV[14] = {
      name: L(150),
      vx: aK1,
      vy: cos,
      aJA: aK2,
    };
    this.vV[15] = {
      name: L(151),
      vx: aK3,
      vy: aK4,
      aJA: aK5,
    };
    this.vV[16] = {
      name: L(152),
      vx: aK3,
      vy: aK4,
      aJA: aK5,
    };
    this.vV[17] = {
      name: L(153),
      vx: aK1,
      vy: cos,
      aJA: aK2,
    };
    this.vV[18] = {
      name: L(154),
      vx: aK6,
      vy: aK7,
      aJA: aK8,
    };
    this.vV[19] = {
      name: L(155),
      vx: aK1,
      vy: cos,
      aJA: aK2,
    };
    this.vV[20] = {
      name: L(156),
      i: 1024,
      j: 1024,
      lr: 128,
      lo: 32,
      aIz: 0,
    };
    this.vV[21] = {
      name: L(139) + " 2",
      i: 940,
      j: 940,
      lr: 80,
      lo: 8,
      aIz: 0,
    };
    this.vV[bR.aIs] = {
      name: "",
    };
    this.aJz = new Uint8Array(12);
    for (var aB = 0; aB < 10; aB++) {
      this.aJz[aB] = aB;
    }
    this.aJz[10] = 20;
    this.aJz[11] = 21;
    this.aK0 = new Uint8Array(10);
    for (aB = 0; aB < 10; aB++) {
      this.aK0[aB] = 10 + aB;
    }
  };
}
function aIv() {
  this.aJx = function () {
    var gE, eo, eq, fO;
    var aJv = aAZ;
    var aJw = bR.vf;
    var i = bR.es;
    var aJu = i - 1;
    var hS = bR.et - 1;
    var g9 = 0;
    for (eq = 1; eq < hS; eq++) {
      fO = eq * i;
      for (eo = 1; eo < aJu; eo++) {
        gE = (fO + eo) << 2;
        if (aJw[gE] === aJw[gE + 1] && aJw[gE] === aJw[gE + 2]) {
          g9++;
          aJv[gE + 2] = 4;
        }
      }
    }
    ao.a5t = g9;
  };
  this.aJy = function () {
    var aJv = aAZ;
    var i = bR.es;
    var aJu = i - 1;
    var hS = bR.et - 1;
    var id = 5;
    for (var eq = 1; eq < hS; eq++) {
      var fO = eq * i;
      for (var eo = 1; eo < aJu; eo++) {
        var eL = ((fO + eo) << 2) + 2;
        if (aJv[eL] === 4) {
          aK9(eL, id);
          id = Math.max((id + 1) % 256, 5);
        }
      }
    }
  };
  function aK9(eL, id) {
    var eh = 1;
    var aJv = aAZ;
    var ej = ac.ej;
    var a1f = [eL];
    aJv[eL] = id;
    while (eh) {
      var a1g = [];
      for (var aB = 0; aB < eh; aB++) {
        var eW = a1f[aB];
        for (var ek = 3; ek >= 0; ek--) {
          var el = eW + ej[ek];
          if (aJv[el] === 4) {
            aJv[el] = id;
            a1g.push(el);
          }
        }
      }
      a1f = a1g;
      eh = a1f.length;
    }
  }
}
var xE;
var aAZ;
var a3j;
var a3k;
function a3f() {
  if (xE === undefined) {
    xE = document.createElement(S[4]);
  }
  xE.width = bR.es;
  xE.height = bR.et;
  a3j = xE.getContext("2d", {
    alpha: true,
  });
  a3k = aAZ = null;
  a3k = a3j.getImageData(0, 0, bR.es, bR.et);
  aAZ = a3k.data;
  b9.pq.vg(aAZ);
}
function cd() {
  var f9;
  var i;
  var j;
  var max;
  var aKA;
  var lo;
  var aKB = 10000;
  var aKC;
  var aKD;
  var aKE;
  var aKF;
  var aKG;
  var aKH;
  var aKI;
  var aKJ;
  this.a7 = function (a2u) {
    aKK(a2u);
    aKL();
    aKM();
    aKN();
  };
  this.aJM = function () {
    return f9;
  };
  this.aJ3 = function () {
    f9 = null;
  };
  function aKK(a2u) {
    var aB;
    i = a2u[0];
    j = a2u[1];
    aKA = a2u[2];
    lo = a2u[3];
    f9 = new Int16Array(i * j);
    max = i > j ? i : j;
    aKC = new Int16Array(max);
    aKD = [];
    aKE = [];
    aKF = [];
    aKG = new Array(i);
    aKH = new Array(j);
    for (aB = i - 1; aB >= 0; aB--) {
      aKG[aB] = false;
    }
    for (aB = j - 1; aB >= 0; aB--) {
      aKH[aB] = false;
    }
    aKI = new Int16Array(i);
    aKJ = new Int16Array(j);
  }
  function aKO(eh) {
    var aKP = ax.random() % aKB;
    var lr = (ax.random() % (2 * aKA + 1)) - aKA;
    aKQ(aKP, lr, eh);
  }
  function aKR(aKP, eh) {
    var lr = (ax.random() % (2 * aKA + 1)) - aKA;
    aKQ(aKP, lr, eh);
  }
  function aKQ(aKP, lr, eh) {
    var aB;
    aKC[0] = aKP;
    for (aB = 1; aB < eh; aB++) {
      aKC[aB] = aKC[aB - 1] + lr;
      if (aKC[aB] >= aKB) {
        aKC[aB] = aKB - 1;
        lr = -lr;
      } else if (aKC[aB] < 0) {
        aKC[aB] = 0;
        lr = -lr;
      } else {
        lr += ax.random() >= 16384 ? lo : -lo;
        lr = lr < -aKA ? -aKA : lr > aKA ? aKA : lr;
      }
    }
  }
  function aKS(eo, eq, aKT, eh) {
    if (aKT) {
      aKU(eo, eq, eh);
    } else {
      aKV(eo, eq, eh);
    }
  }
  function aKU(eo, eq, eh) {
    var aB;
    for (aB = 0; aB < eh; aB++) {
      f9[eq * i + eo + aB] = aKC[aB];
    }
  }
  function aKV(eo, eq, eh) {
    var aB;
    for (aB = 0; aB < eh; aB++) {
      f9[eq * i + eo + aB * i] = aKC[aB];
    }
  }
  function aKW(value, eh) {
    var aB, aIQ, eL;
    var hq = value - aKC[eh - 1];
    if (hq === 0) {
      return;
    }
    aIQ = 1 + bK.dn(Math.abs(hq), eh - 1);
    aIQ = hq < 0 ? -aIQ : aIQ;
    aKC[eh - 1] = value;
    eL = eh - 1 - bK.dn(Math.abs(hq), Math.abs(aIQ));
    eL = eL < 1 ? 1 : eL > eh - 2 ? eh - 2 : eL;
    for (aB = eh - 2; aB >= eL; aB--) {
      aKC[aB] += hq - (eh - 1 - aB) * aIQ;
    }
    if (hq < 0) {
      aKX(eh);
    } else {
      aKY(eh);
    }
  }
  function aKY(eh) {
    var aB;
    for (aB = eh - 2; aB >= 1; aB--) {
      if (aKC[aB] >= aKB) {
        aKC[aB] = 2 * aKB - aKC[aB] - 1;
      }
    }
  }
  function aKX(eh) {
    var aB;
    for (aB = eh - 2; aB >= 1; aB--) {
      if (aKC[aB] < 0) {
        aKC[aB] = -aKC[aB] - 1;
      }
    }
  }
  function aKZ(a1f, a1g, eh) {
    var aB;
    for (aB = 0; aB < eh; aB++) {
      a1f[aB] = a1g[aB];
    }
  }
  function aKa(g) {
    var aB;
    for (aB = 0; aB < g.length - 1; aB++) {
      g[aB] = g[aB + 1] - g[aB];
    }
    g[g.length - 1] = g[g.length - 3];
  }
  function aKb(a4H, gap, hT) {
    aKD.push(a4H);
    aKE.push(gap);
    aKF.push(hT);
  }
  function aKc() {
    var aB;
    var aKd = aKD.length - 1;
    for (aB = aKd - 1; aB >= 0; aB--) {
      if (aKE[aB] > aKE[aKd]) {
        aKd = aB;
      }
    }
    return aKd;
  }
  function aKL() {
    aKO(max);
    aKZ(aKJ, aKC, j);
    aKS(0, 0, true, i);
    aKR(f9[0], max);
    aKZ(aKI, aKC, i);
    aKS(0, 0, false, j);
    aKa(aKI);
    aKa(aKJ);
    aKQ(f9[i - 1], aKI[i - 1], j);
    aKS(i - 1, 0, false, j);
    aKQ(f9[i * (j - 1)], aKJ[j - 1], i);
    aKW(f9[i * j - 1], i);
    aKS(0, j - 1, true, i);
    aKG[i - 1] = aKG[0] = true;
    aKH[j - 1] = aKH[0] = true;
    aKb(0, i, true);
    aKb(0, j, false);
  }
  function aKM() {
    var aKd, a4H;
    while (true) {
      aKd = aKc();
      if (aKE[aKd] < 5) {
        return;
      }
      a4H = aKD[aKd] + bK.dn(aKE[aKd], 2);
      if (aKF[aKd]) {
        aKe(a4H);
      } else {
        aKf(a4H);
      }
      aKb(a4H, aKD[aKd] + aKE[aKd] - a4H, aKF[aKd]);
      aKE[aKd] = a4H - aKD[aKd] + 1;
    }
  }
  function aKf(eq) {
    var eh, aKg, aB;
    var aE7 = 0;
    var aKh = 0;
    while (aKh < i - 1) {
      for (aB = aE7 + 1; aB < i; aB++) {
        if (aKG[aB]) {
          aKh = aB;
          break;
        }
      }
      eh = aKh - aE7 + 1;
      aKQ(f9[eq * i + aE7], aE7 === 0 ? aKJ[eq] : aKC[aKg - 1] - aKC[aKg - 2], eh);
      aKW(f9[eq * i + aKh], eh);
      aKS(aE7, eq, true, eh);
      aKg = eh;
      aE7 = aKh;
    }
    aKH[eq] = true;
  }
  function aKe(eo) {
    var eh, aKg, aB;
    var aE7 = 0;
    var aKh = 0;
    while (aKh < j - 1) {
      for (aB = aE7 + 1; aB < j; aB++) {
        if (aKH[aB]) {
          aKh = aB;
          break;
        }
      }
      eh = aKh - aE7 + 1;
      aKQ(f9[eo + i * aE7], aE7 === 0 ? aKI[eo] : aKC[aKg - 1] - aKC[aKg - 2], eh);
      aKW(f9[aKh * i + eo], eh);
      aKS(eo, aE7, false, eh);
      aKg = eh;
      aE7 = aKh;
    }
    aKG[eo] = true;
  }
  function aKN() {
    var eo, eq;
    for (eo = 0; eo < i; eo++) {
      if (!aKG[eo]) {
        for (eq = 0; eq < j; eq++) {
          if (!aKH[eq]) {
            aKi(eo, eq);
          }
        }
      }
    }
  }
  function aKi(eo, eq) {
    var value = f9[eq * i + eo - 1] + f9[(eq - 1) * i + eo];
    var a64 = 2;
    if (aKG[eo + 1]) {
      a64++;
      value += f9[eq * i + eo + 1];
    }
    if (aKH[eq + 1]) {
      a64++;
      value += f9[(eq + 1) * i + eo];
    }
    f9[eq * i + eo] = bK.dn(value, a64);
  }
}
function aFZ(f0, f1) {
  return f0 >= 0 ? bK.dn(f0, f1) : -bK.dn(-f0, f1);
}
function jT(f9) {
  return f9 * f9;
}
function a5I(f0, f1) {
  return f0 > f1 ? f0 : f1;
}
function aA3(f0, f1) {
  return f0 < f1 ? f0 : f1;
}
function a7U(f0, f9, f1) {
  return f9 < f0 ? f0 : f9 > f1 ? f1 : f9;
}
function aKj(f9, eh) {
  var f2 = bK.dn(f9 + 1, 2);
  for (var aB = 0; aB < eh; aB++) {
    f2 = bK.dn(f2 + bK.dn(f9, f2), 2);
  }
  return f2;
}
function aGw(f9, eh) {
  if (f9 < 1) {
    return 0;
  }
  return aKj(f9, eh);
}
function aKk(mD, mE, s5, a7E, mQ, mR, s6, sn) {
  return !(mD + s5 <= mQ || mE + a7E <= mR || mD >= mQ + s6 || mE >= mR + sn);
}
function aKl(mD, mE, s5, a7E, mQ, mR, s6, sn) {
  return mD <= mQ && mE <= mR && mD + s5 >= mQ + s6 && mE + a7E >= mR + sn;
}
function vX(f9) {
  return Math.floor(!!f9 * (1 + Math.log2(f9 + 0.5)));
}
function bu() {
  this.dn = function (f0, f1) {
    return Math.floor((f0 + 0.5) / f1);
  };
  this.aKm = function (f0, f1) {
    return Math.floor(f0 * (f1 + 0.5));
  };
  this.sqrt = function (f9) {
    return ~~Math.sqrt(f9 + 0.5);
  };
  this.pow = function (e) {
    return Math.floor(Math.pow(2, e) + 0.5);
  };
  this.pF = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
  };
  this.aKn = function (fO, fQ, fS) {
    return Math.max(Math.min(fO, fQ), fS);
  };
  this.aKo = function (aKp, aKq, eo, eq) {
    var i2 = eo - aKp;
    var i5 = eq - aKq;
    var aKr = 0;
    if (i2 === 0) {
      aKr = i5 >= 0 ? Math.PI : 0;
    } else {
      aKr = Math.atan(i5 / i2);
      aKr += i2 > 0 ? 0.5 * Math.PI : 1.5 * Math.PI;
    }
    return aKr;
  };
  this.log2 = function (f9) {
    return Math.floor(!!f9 * (1 + Math.log2(f9 + 0.5)));
  };
  this.log10 = function (f9) {
    return Math.floor(Math.log10(f9 + 0.5));
  };
  this.aKs = function (aKt, aKu, aKv, aKw, aKx) {
    return aKt > aKv - aKx && aKt < aKv + aKx && aKu > aKw - aKx && aKu < aKw + aKx;
  };
  this.wV = function (hk, hl) {
    return hk * hk + hl * hl;
  };
}
function d9() {
  this.y = new aKy();
  this.ry = 0;
  var aKz = new Array(31);
  this.dX = function () {
    var aL0;
    var aL1 = document.body.firstChild;
    while (aL1) {
      aL0 = aL1.nextSibling;
      if (
        document.body.contains(aL1) &&
        (aL1.tagName === "DIV" || aL1.tagName === "INPUT" || aL1.tagName === "BUTTON")
      ) {
        try {
          document.body.removeChild(aL1);
        } catch (e) {
          console.log("error 2623: " + e);
        }
      }
      aL1 = aL0;
    }
  };
  this.u = function (e2, aL2, a2u) {
    if (aL2 === undefined) {
      aL2 = this.ry;
    }
    be.df = true;
    if (e2 === 0) {
      if (aa.a0E() === 0) {
        e2 = 5;
      } else {
        a0.a1.setState(13);
      }
    }
    this.r0();
    if (this.ry === e2) {
      aL2 = aKz[e2].aL2;
      aKz[e2] = null;
    }
    this.ry = e2;
    var ke = aKz[e2];
    if (
      !ke ||
      e2 === 4 ||
      e2 === 7 ||
      e2 === 8 ||
      e2 === 9 ||
      e2 === 10 ||
      e2 === 11 ||
      e2 === 13 ||
      e2 === 15 ||
      e2 === 18 ||
      (e2 >= 20 && e2 <= 28) ||
      e2 === 32 ||
      e2 === 33
    ) {
      if (e2 === 0) {
        aL3();
        return;
      } else if (e2 === 1) {
        ke = new aL4();
      } else if (e2 === 2) {
        ke = new aL5();
      } else if (e2 === 3) {
        ke = new aL6();
      } else if (e2 === 4 || e2 === 9 || e2 === 10 || e2 === 11 || e2 === 13 || e2 === 33) {
        ke = a2u;
      } else if (e2 === 5) {
        ke = new aL7();
      } else if (e2 === 6) {
        ke = new aL8();
      } else if (e2 === 7) {
        ke = new aL9(t.y.aLA);
      } else if (e2 === 8) {
        ke = a2u;
      } else if (e2 === 12) {
        ke = new aLB();
      } else if (e2 === 14) {
        ke = new aLC();
      } else if (e2 === 15) {
        ke = new aL9(t.y.aLD);
      } else if (e2 === 16) {
        ke = new aLE();
      } else if (e2 === 17) {
        ke = new aLF();
      } else if (e2 === 18) {
        ke = new aLG();
      } else if (e2 === 19) {
        ke = new aLH();
      } else if (e2 === 20) {
        ke = new aLI();
      } else if (e2 === 21) {
        ke = new aLJ();
      } else if (e2 === 22) {
        ke = new aLK();
      } else if (e2 === 23) {
        ke = new aLL();
      } else if (e2 === 24) {
        ke = new aLM();
      } else if (e2 === 25) {
        ke = new aLN();
      } else if (e2 === 26) {
        ke = new aLO();
      } else if (e2 === 27) {
        ke = new aLP();
      } else if (e2 === 28) {
        ke = new aLQ();
      } else if (e2 === 29) {
        ke = new aLR();
      } else if (e2 === 30) {
        ke = new aLS();
      }
      ke.aL2 = aL2;
      aKz[e2] = ke;
    }
    ke.show(a2u);
  };
  function aL3() {
    var eh = aKz.length;
    for (var aB = 0; aB < eh; aB++) {
      aKz[aB] = null;
    }
  }
  this.a0D = function () {
    if (!this.hO()) {
      return;
    }
    this.aLT(this.a44().aL2);
  };
  this.aLT = function (e2) {
    if (!this.hO()) {
      return;
    }
    if (!aKz[e2]) {
      this.u(e2);
      return;
    }
    this.r0();
    be.df = true;
    this.ry = e2;
    aKz[e2].show();
  };
  this.r0 = function () {
    if (!this.hO()) {
      return;
    }
    aKz[this.ry].r0();
  };
  this.x = function () {
    if (!this.hO()) {
      return;
    }
    aKz[this.ry].r0();
    aL3();
    this.ry = 0;
    a0.a1.setState(13);
  };
  this.tq = function () {
    if (!this.hO()) {
      return;
    }
    var ke = aKz[this.ry];
    if (ke.tq) {
      ke.tq();
    }
  };
  this.resize = function () {
    if (!this.hO()) {
      return false;
    }
    aKz[this.ry].resize();
  };
  this.gu = function (eo, eq) {
    if (!this.hO()) {
      return;
    }
    var ke = aKz[this.ry];
    if (ke.gu) {
      ke.gu(eo, eq);
    }
  };
  this.a0Y = function (eo, eq) {
    if (!this.hO()) {
      return;
    }
    var ke = aKz[this.ry];
    if (ke.a0Y) {
      ke.a0Y(eo, eq);
    }
  };
  this.a0w = function () {
    if (!this.hO()) {
      return;
    }
    var ke = aKz[this.ry];
    if (ke.a0w) {
      ke.a0w();
    }
  };
  this.a0b = function (kz, l0, deltaY) {
    if (!this.hO()) {
      return;
    }
    var ke = aKz[this.ry];
    if (ke.a0b) {
      ke.a0b(kz, l0, deltaY);
    }
  };
  this.a16 = function (code) {
    if (!this.hO()) {
      return false;
    }
    var ke = aKz[this.ry];
    if (ke.a16) {
      ke.a16(code);
    }
    return true;
  };
  this.ir = function () {
    if (!this.hO()) {
      return;
    }
    var ke = aKz[this.ry];
    if (ke && ke.ir) {
      ke.ir();
    }
  };
  this.hO = function () {
    return this.ry > 0;
  };
  this.a44 = function () {
    return aKz[this.ry];
  };
  this.a45 = function (e2) {
    return aKz[e2];
  };
  this.aLU = function () {
    return aKz;
  };
}
function aL9(data) {
  var aLV;
  var aLW;
  function dX() {
    aLV = new tb(data.username, [
      new w(S[2] + L(37), function () {
        bH.clear();
        t.a0D();
      }),
      new w(
        data.aLX ? "🔄 " + L(157) : L(158),
        function () {
          t.u(
            8,
            t.a44().aL2,
            new rz(25, {
              s0: 0,
              rw: data.rw,
              rx: data.rx,
            })
          );
        },
        0,
        0,
        1
      ),
    ]);
    aLW = new pa(aLV.th, aLY());
  }
  function aLY() {
    var pc = [];
    pc.push(aLZ());
    aLa(pc);
    aLb(pc);
    pc.push(aLc());
    if (data.aLX) {
      pc.push(aLd());
    }
    pc.push(aLe());
    if (!data.aLX) {
      pc.push(aLf());
      pc.push(aLg());
      pc.push(aLh());
    }
    pc.push(aLi());
    pc.push(aLj());
    aLk(pc);
    aLl(pc);
    pc.push(aLm());
    aLn(pc);
    return pc;
  }
  function aLc() {
    var aLo = new pK();
    aLo.pN(L(159));
    var aLp = [L(160), L(161), L(162), L(163), L(164)];
    var e1 = data.aLq;
    aLo.pT(
      L(165) +
        b9.qh.a3B(data.uu, 0.01, 2) +
        S[11] +
        L(166) +
        (e1 + 1) +
        S[20] +
        data.ut +
        S[11] +
        L(167) +
        aLp[e1 < 10 ? 0 : e1 < 50 ? 1 : e1 < 200 ? 2 : e1 < 1000 ? 3 : 4]
    );
    if (!data.aLX) {
      aLo.pP(L(168));
      aLo.pP(L(169));
      aLo.pP(L(170));
    }
    return aLo;
  }
  function aLd() {
    var aLo = new pK();
    aLo.pN(L(171));
    var qV = new qW(
      {
        value: bi.eE.data[147].value,
        e2: -1,
      },
      1,
      undefined,
      function (e) {
        bi.rB.rC(147, aLr(e.target.value));
      }
    );
    aLo.pY(qV);
    var aLs = new w(
      L(14),
      function (e) {
        if (qV.e.readOnly && az.y.aLt(0)) {
          b9.ph.a2M(e);
          aLu();
          az.aLv.aLw({
            s0: 0,
            rw: data.rw,
            value: parseInt(bi.eE.data[147].value, 10),
          });
        }
        return true;
      },
      1
    );
    var aLx = new w(L(172), function (e) {
      if (e.textContent === L(172)) {
        e.textContent = L(173);
        qV.e.readOnly = true;
        aLs.q2(0);
        aLs.button.style.color = bA.nj;
        bi.rB.rC(147, qV.e.value);
        aLr(bi.eE.data[147].value);
      } else {
        aLu();
      }
      return true;
    });
    aLo.pY(new rE([aLx.button]));
    var pQ = aLo.pP();
    var aLr = function (f9) {
      f9 = b9.g2.a2r(f9, 2, 1000000);
      var aLy = Math.max(1, 1 + Math.floor(0.01 * (f9 - 100)));
      pQ.textContent = L(174, [f9, bi.eE.data[105].value, aLy, data.rw, f9 - aLy]);
    };
    var aLu = function () {
      aLx.button.textContent = L(172);
      qV.e.readOnly = false;
      aLs.q2(1);
      aLs.button.style.color = bA.mn;
    };
    aLr(bi.eE.data[147].value);
    aLo.pY(new rE([aLs.button]));
    return aLo;
  }
  function aLe() {
    var aLo = new pK();
    aLo.pN(L(175));
    var qV = new qW({
      value: data.rw,
      e2: -1,
    });
    qV.e.readOnly = true;
    aLo.pY(qV);
    aLo.pY(
      new rE([
        new w(L(176), function (e) {
          b9.ph.a2L(qV.e);
          b9.ph.a2M(e);
          return true;
        }).button,
      ])
    );
    return aLo;
  }
  function aLf() {
    var aLo = new pK();
    aLo.pN(L(177));
    var aLz = new qW(bi.eE.data[106]);
    aLz.e.readOnly = true;
    aLz.e.type = S[32];
    aLo.pY(aLz);
    aLo.pY(
      new rE([
        new w(L(178), function (e) {
          if (e.textContent === L(178)) {
            e.textContent = L(179);
            aLz.e.type = S[43];
          } else {
            e.textContent = L(178);
            aLz.e.type = S[32];
          }
          return true;
        }).button,
        new w(L(176), function (e) {
          b9.ph.a2L(aLz.e);
          b9.ph.a2M(e);
          return true;
        }).button,
      ])
    );
    aLo.pY(
      new rE([
        new w(L(180), function () {
          t.u(8, t.a44().aL2, new rz(15));
        }).button,
      ])
    );
    aLo.pN(L(181), S[19]);
    aLo.pP(L(182));
    aLo.pP(L(183));
    aLo.pP(L(184));
    return aLo;
  }
  function aLg() {
    var aLo = new pK();
    aLo.pN(L(185));
    aLo.pY(
      new rE([
        new w(L(186), function () {
          t.u(6, t.a44().aL2);
        }).button,
      ])
    );
    aLo.pY(
      new rE([
        new w(L(187), function () {
          bi.rB.rC(105, "");
          t.u(8, t.a44().aL2, new rz(18));
        }).button,
      ])
    );
    aLo.pY(
      new rE([
        new w(
          L(188) + bi.eE.data[105].value,
          function () {
            t.u(
              4,
              0,
              new v(L(189), L(190), true, [
                new w(S[2] + L(37), function () {
                  t.u(7, t.a45(7).aL2);
                }),
              ])
            );
          },
          bA.nS
        ).button,
      ])
    );
    return aLo;
  }
  function aLh() {
    var aLo = new pK();
    aLo.pN(L(191));
    aLo.pP(L(192));
    bi.y.ue();
    var pW;
    var aM0;
    var aM1 = function (e2) {
      for (var aB = 0; aB < 2; aB++) {
        aM0[aB].q2(e2 === 0 ? bA.mz : aB === 0 ? bA.nS : bA.nA);
      }
    };
    aM0 = [
      new w(
        L(193),
        function () {
          var e2 = Math.min(bi.eE.data[117].value, pW.pX.length - 1);
          if (e2 < 1) {
            return;
          }
          pW.pX[e2].remove();
          pW.pX.splice(e2, 1);
          for (var aB = e2; aB < pW.pX.length; aB++) {
            pW.pX[aB].name = "" + aB;
          }
          bi.y.uh(e2);
          e2 = bi.eE.data[117].value;
          pW.pX[e2].textContent = pW.pX[e2].textContent.replace("⚪", "🟢");
          aM1(e2);
        },
        bA.mz
      ),
      new w(
        L(194),
        function () {
          var e2 = Math.min(bi.eE.data[117].value, pW.pX.length - 1);
          if (e2 < 1) {
            return;
          }
          var data = bi.y.ui(e2);
          bi.rB.rC(105, data.rw);
          bi.rB.rC(106, data.password);
          t.u(8, t.a44().aL2, new rz(18));
        },
        bA.mz
      ),
    ];
    pW = new tW(bi.eE.data[117], aM1);
    pW.pX[0].style.marginTop = S[25];
    aLo.pV(pW);
    aLo.pY(new rE([aM0[1].button]));
    aLo.pY(new rE([aM0[0].button]));
    return aLo;
  }
  function aLj() {
    var aLo = new pK();
    aLo.pN(L(195));
    aLo.pT(
      L(196) + b9.qh.a3B(data.uq, 0.1, 1) + S[11] + L(166) + (data.ur + 1) + S[20] + data.ut + S[11] + L(197) + data.us
    );
    return aLo;
  }
  function aLi() {
    var aLo = new pK();
    aLo.pN(L(198));
    var aLp = [L(199), L(200), L(201), L(202)];
    var e1 = data.aM2;
    aLo.pT(
      L(203) +
        (data.zV / 100).toFixed(2) +
        S[11] +
        L(166) +
        (e1 + 1) +
        S[20] +
        data.ut +
        S[11] +
        L(167) +
        aLp[e1 < 10 ? 0 : e1 < 50 ? 1 : e1 < 200 ? 2 : 3]
    );
    return aLo;
  }
  function aLm() {
    var aLo = new pK();
    aLo.pN(L(204));
    aLo.pT(L(205) + data.aM3 + S[11] + L(166) + (data.aM4 + 1) + S[20] + data.ut + S[11] + L(167) + bn.e4(data.aM4));
    if (data.aLX) {
      var qV = new qW(
        {
          value: bi.eE.data[157].value,
          e2: -1,
        },
        1,
        undefined,
        function (e) {
          bi.rB.rC(157, aLr(e.target.value));
        }
      );
      qV.e.style.marginTop = S[41];
      aLo.pY(qV);
      var aLx = new w(L(172), function (e) {
        if (e.textContent === L(172)) {
          e.textContent = L(173);
          qV.e.readOnly = true;
          aM5[0].q2(0);
          aM5[1].q2(0);
          aM5[0].button.style.color = bA.nj;
          aM5[1].button.style.color = bA.nj;
          aLr(bi.eE.data[157].value);
        } else {
          aLu();
        }
        return true;
      });
      aLo.pY(new rE([aLx.button]));
      var aM5 = [
        new w(
          "−",
          function (e) {
            if (qV.e.readOnly && az.y.aLt(0)) {
              b9.ph.a2M(e);
              aLu();
              az.aLv.aLw({
                s0: 2,
                rw: data.rw,
                value: bK.pF(parseInt(bi.eE.data[157].value, 10), 3, 32767),
              });
            }
            return true;
          },
          1
        ),
        new w(
          "+",
          function (e) {
            if (qV.e.readOnly && az.y.aLt(0)) {
              b9.ph.a2M(e);
              aLu();
              az.aLv.aLw({
                s0: 1,
                rw: data.rw,
                value: bK.pF(parseInt(bi.eE.data[157].value, 10), 3, 32767),
              });
            }
            return true;
          },
          1
        ),
      ];
      var pQ = aLo.pP();
      var aLr = function (f9) {
        f9 = b9.g2.a2r(f9, 3, 32767);
        pQ.textContent = L(206, [f9 - 1, f9, bi.eE.data[105].value]);
        return f9;
      };
      aLo.pY(new rE([aM5[0].button, aM5[1].button]));
      for (var aB = 0; aB < 2; aB++) {
        aM5[aB].button.style.fontSize = "1.6em";
      }
      var aLu = function () {
        aLx.button.textContent = L(172);
        qV.e.readOnly = false;
        aM5[0].q2(1);
        aM5[1].q2(1);
        aM5[0].button.style.color = bA.mn;
        aM5[1].button.style.color = bA.mn;
      };
      aLr(bi.eE.data[157].value);
    }
    return aLo;
  }
  function aLZ() {
    var aLo = new pK();
    aLo.pN(L(207));
    var qV = new qW({
      value: data.username,
      e2: -1,
    });
    qV.e.readOnly = true;
    aLo.pY(qV);
    aLo.pY(
      new rE([
        new w(L(176), function (e) {
          b9.ph.a2L(qV.e);
          b9.ph.a2M(e);
          return true;
        }).button,
      ])
    );
    if (!data.aLX) {
      aLo.pP(L(208));
    }
    return aLo;
  }
  function aLa(pc) {
    if (data.aLX) {
      return;
    }
    var aLo = new pK();
    aLo.pN(L(209));
    var pQ = aLo.pP(data.aM6.length + S[121]);
    pQ.style.textAlign = S[10];
    var aAn = true;
    var aM7 = new tz(0, 1, function (e) {
      var g9 = e.target.value.length;
      pQ.textContent = g9 + S[121];
      if (g9 > 160) {
        if (aAn) {
          aAn = false;
          aLx.q2(1);
          aLx.button.style.color = bA.mn;
        }
      } else if (!aAn) {
        aAn = true;
        aLx.q2(0);
        aLx.button.style.color = bA.nj;
      }
    });
    aM7.e.rows = 6;
    aM7.e.style.fontSize = S[17];
    aM7.u6(data.aM6);
    aLo.pY(aM7);
    var aLx = new w(
      L(210),
      function () {
        if (!aAn) {
          return true;
        }
        t.u(
          8,
          t.a44().aL2,
          new rz(29, {
            s0: 1,
            pO: aM7.u8().substring(0, 160),
          })
        );
      },
      0,
      0,
      1
    );
    aLo.pY(new rE([aLx.button]));
    if (data.aM8 === 0) {
      aLo.pP(L(211, [data.aM9]));
      pc.push(aLo);
      return;
    }
    aLo.pY(
      new rE([
        new w(
          data.aM8 === 1 ? L(212) : L(213),
          function () {
            t.u(
              8,
              t.a44().aL2,
              new rz(29, {
                s0: 0,
                pO: "",
              })
            );
          },
          0,
          0,
          1
        ).button,
      ])
    );
    aLo.pP(data.aM8 === 1 ? L(214, [data.aMA - 1]) : L(215, [data.aMA - 1]));
    aLo.pP(L(211, [data.aM9]));
    pc.push(aLo);
  }
  function aLb(pc) {
    if (!data.aLX) {
      return;
    }
    if (data.aM8 === 0) {
      return;
    }
    var aLo = new pK();
    aLo.pN(L(216));
    aLo.pR(data.aM6);
    aLo.pY(
      new rE([
        new w(
          L(217, 0, "Report"),
          function (e) {
            if (az.y.aLt(0)) {
              b9.ph.a2M(e);
              az.aLv.aMB({
                s0: 5,
                rw: data.rw,
              });
            }
            return true;
          },
          0,
          0,
          1
        ).button,
      ])
    );
    pc.push(aLo);
  }
  function aLk(pc) {
    var aLo = new pK();
    var aMC = data.ux;
    aLo.pN(L(218));
    aLo.pT(L(219, [data.uv.length ? "[" + data.uv + "]" : "-"]));
    aLo.pT(L(220, [b9.qh.a3B(aMC, 0.01, 2)]));
    aLo.pT(L(221, [data.uz + 1 + S[20] + data.ut]));
    var aMD = data.v0;
    aLo.pT(L(222, [b9.qh.a3B(aMD, 0.1, 1)]));
    var aME = data.v2;
    aLo.pT(L(223, [aME]));
    aLo.pT(L(224, [b9.qh.a3B(aMD / Math.max(aME, 1), 0.1, 2)]));
    aMC = data.uy;
    aLo.pN(L(225), S[19]);
    aLo.pT(L(219, [data.uw.length ? "[" + data.uw + "]" : "-"]));
    aLo.pT(L(220, [b9.qh.a3B(aMC, 0.01, 2)]));
    aMD = data.v1;
    aLo.pT(L(222, [b9.qh.a3B(aMD, 0.1, 1)]));
    aME = data.v3;
    aLo.pT(L(223, [aME]));
    aLo.pT(L(224, [b9.qh.a3B(aMD / Math.max(aME, 1), 0.1, 2)]));
    if (!data.aLX) {
      aLo.pP(L(226));
      aLo.pP(L(227));
    }
    pc.push(aLo);
  }
  function aLl(pc) {
    var aLo = new pK();
    aLo.pN(L(228));
    aLo.pT(L(203) + (data.aMF / 10).toFixed(1) + S[11] + L(167) + (data.aMG.length ? L(229, [data.aMG]) : L(230)));
    if (data.aLX) {
      aLo.pY(
        new rE([
          new w(
            L(231),
            function (e) {
              if (az.y.aLt(0)) {
                b9.ph.a2M(e);
                az.aLv.aMB({
                  s0: 4,
                  rw: data.rw,
                });
              }
              return true;
            },
            0,
            0,
            1
          ).button,
        ])
      );
      aLo.pP(L(232));
      aLo.pP(L(233));
    } else {
      aLo.pP(L(234));
    }
    pc.push(aLo);
  }
  function aLn(pc) {
    if (data.aLX && !data.aMH) {
      return;
    }
    if (a0.id !== 0 && !data.aLX && !data.aMH) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[101]);
    if (!data.aLX && data.aMI) {
      aLo.pY(
        new rE([
          new w(L(178), function () {
            az.aLv.aMB({
              s0: 7,
              rw: data.rw,
            });
            data.aMI = 0;
            t.u(7);
          }).button,
        ])
      );
      pc.push(aLo);
      return;
    }
    if (data.aMH) {
      aLo.pT(
        L(235, [(data.aMJ / 100).toFixed(2)]) +
          S[11] +
          L(236, [1 + data.aMK + S[20] + data.aML]) +
          S[11] +
          L(237, [data.aMM ? L(238) : L(239)])
      );
      if (!data.aLX) {
        aLo.pY(
          new rE([
            new w(L(240), function () {
              az.aLv.aMB({
                s0: 8,
                rw: data.rw,
              });
              data.aMH = 0;
              bi.rB.rC(160, 0);
              t.u(7);
            }).button,
          ])
        );
      }
      pc.push(aLo);
      return;
    }
    aLo.pT(L(241), S[12]).style.marginBottom = S[61];
    aLo.pT(S[64] + L(242), S[12]).style.whiteSpace = S[28];
    aLo.pT(S[64] + L(243), S[12]).style.whiteSpace = S[28];
    aLo.pT(S[64] + L(244), S[12]).style.whiteSpace = S[28];
    aLo.pT(L(245), S[12]).style.marginTop = S[59];
    aLo.pT(L(246), S[12]).style.marginTop = S[59];
    aLo.pT(S[56] + bJ.aMN + "' target='_blank'>patreon.com/c/territorial</a>", S[12]).style.marginTop = S[61];
    var a2K =
      "https://www.patreon.com/oauth2/authorize?state=" +
      data.rw +
      "&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/";
    aLo.pT(L(247), S[12]).style.marginTop = S[59];
    aLo.pT(S[56] + a2K + "' target='_blank'>patreon.com/oauth2/...</a>", S[12]).style.marginTop = S[61];
    if (!data.aLX) {
      aLo.pY(new rO());
      aLo.pY(
        new rE([
          new w(L(179), function () {
            az.aLv.aMB({
              s0: 6,
              rw: data.rw,
            });
            data.aMI = 1;
            t.u(7);
          }).button,
        ])
      );
      aLo.pT(L(248), S[12]).style.marginTop = S[12];
    }
    pc.push(aLo);
  }
  this.show = function () {
    if (data.aLX) {
      bH.aMO(S[95], data.rw);
    }
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aLW.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLK() {
  var aMP;
  var aMQ;
  var aMR;
  function q1() {
    aMP = new tb(L(249), [new w(S[2] + L(37), aMS)]);
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    aMU();
    if (aD.data.aIncomeType !== 2) {
      aD.data.aIncomeData = null;
    }
    t.aLU()[19] = null;
    t.a0D();
  }
  function aMU() {
    if (aD.data.aIncomeType === 2) {
      b9.pq.a1j(aMR.u8(), aD.data.aIncomeData, 255);
      if (!b9.pq.max(aD.data.aIncomeData)) {
        aD.data.aIncomeType = 0;
      }
    } else if (aD.data.aIncomeType === 1 && !aD.data.aIncomeValue) {
      aD.data.aIncomeType = 0;
    }
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    aMW(pc);
    aMX(pc);
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    aLo.pV(
      new tW(
        {
          ta: [L(251), L(252), L(253)],
          value: aD.data.aIncomeType,
        },
        function (e2) {
          aMU();
          if (e2 === 2 && !aD.data.aIncomeData) {
            aD.data.aIncomeData = new Uint8Array(aD.ee);
          }
          aD.data.aIncomeType = e2;
          t.u(22);
        }
      )
    );
    pc.push(aLo);
  }
  function aMW(pc) {
    if (aD.data.aIncomeType !== 1) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[37]);
    aLo.pY(
      new qW(
        {
          e2: -1,
          value: aD.data.aIncomeValue,
        },
        1,
        0,
        function (e) {
          var value = bK.pF(Math.floor(e.target.value), 0, 255);
          e.target.value = aD.data.aIncomeValue = value;
        }
      )
    );
    pc.push(aLo);
  }
  function aMX(pc) {
    if (aD.data.aIncomeType !== 2) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[18]);
    aMR = new tz(0, 1, 0, 1);
    aMR.u6(b9.qh.a3H(aD.data.aIncomeData, 4));
    aLo.pY(aMR);
    pc.push(aLo);
  }
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function aLN() {
  var aMP;
  var aMQ;
  var aMR;
  function q1() {
    aMP = new tb(L(62), [new w(S[2] + L(37), aMS)]);
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    aMU();
    aMY();
    t.aLU()[19] = null;
    t.a0D();
  }
  function aMU() {
    if (aD.data.botDifficultyType === 3) {
      b9.pq.a1j(aMR.u8(), aD.data.botDifficultyData, aE.k7.length - 1);
    }
  }
  function aMY() {
    if (aD.data.botDifficultyType === 3) {
      if (!b9.pq.a1X(aD.data.botDifficultyData)) {
        aD.data.botDifficultyType = 0;
      }
    }
    if (aD.data.botDifficultyType !== 3) {
      aD.data.botDifficultyData = null;
    }
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    if (aD.data.botDifficultyType === 0) {
      aMZ(pc, -1);
    } else if (aD.data.botDifficultyType === 2) {
      for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) {
        if (aD.data.teamPlayerCount[aB]) {
          aMZ(pc, aB);
        }
      }
    } else if (aD.data.botDifficultyType === 3) {
      aMX(pc);
    }
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    var ta = [L(252), L(254), L(255), L(253)];
    var value = aD.data.botDifficultyType;
    if (aD.data.gameMode === 0) {
      value = Math.min(value, 2);
      ta.splice(2, 1);
    }
    aLo.pV(
      new tW(
        {
          ta: ta,
          value: value,
        },
        function (e2) {
          aMU();
          aD.data.botDifficultyType = e2;
          if (aD.data.gameMode === 0 && e2 === 2) {
            aD.data.botDifficultyType = 3;
          }
          if (aD.data.botDifficultyType === 3 && !aD.data.botDifficultyData) {
            aD.data.botDifficultyData = new Uint8Array(aD.ee);
          }
          if (aD.data.botDifficultyType === 2 && !aD.data.botDifficultyTeam) {
            aD.data.botDifficultyTeam = new Uint8Array(9);
          }
          t.u(25);
        }
      )
    );
    pc.push(aLo);
  }
  function aMZ(pc, e2) {
    var aLo = new pK();
    aLo.pN(e2 < 0 ? L(62) : L(61) + " " + bf.zP[e2 % 9]);
    if (e2 >= 0) {
      aLo.pT(L(256) + ": " + aD.data.teamPlayerCount[e2]).style.marginBottom = S[17];
    }
    var value = e2 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e2];
    aLo.pV(
      new tW(
        {
          ta: aE.k7,
          value: value,
        },
        function (hU) {
          if (e2 < 0) {
            aD.data.botDifficultyValue = hU;
          } else {
            aD.data.botDifficultyTeam[e2] = hU;
          }
        }
      )
    );
    pc.push(aLo);
  }
  function aMX(pc) {
    var aLo = new pK();
    aLo.pN(S[18]);
    aMR = new tz(0, 1, 0, 1);
    aMR.u6(b9.qh.a3H(aD.data.botDifficultyData, 8));
    aLo.pY(aMR);
    pc.push(aLo);
  }
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function aMa(data) {
  var aLV;
  var aMb, aMc, aMd, aMe;
  var aMf, aMg;
  var colors;
  var aMh, aMi;
  var aMj = 0;
  var aMk = 0;
  var aMl = false;
  var aMm = false;
  var aMn = [1, 5, 60, 4 * 60, 24 * 60, 7 * 24 * 60, 30 * 24 * 60];
  function dX() {
    aMo();
    aMp();
    aMq();
    var aMr = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"];
    aLV = new tb(
      L(257) + ", " + aMr[data.aMs] + ", " + b9.a1O.a28(aMh),
      [
        new w(S[2] + L(37), function () {
          t.u(1);
        }),
        new w(L(258), function () {
          t.u(14);
        }),
      ],
      false
    );
  }
  function aMo() {
    var aB;
    var ek = data.data;
    var eh = ek.length;
    var max = 1;
    for (aB = 0; aB < eh; aB++) {
      max = Math.max(max, ek[aB].aMt.length);
    }
    for (aB = 0; aB < eh; aB++) {
      while (ek[aB].aMt.length < max) {
        ek[aB].aMt.unshift(0);
      }
    }
  }
  function aMp() {
    var gF;
    var dm = new Date();
    var a29 = 1000 * 60 * dm.getTimezoneOffset();
    var hU = dm.getTime() - a29;
    aMh = new Date(hU);
    if (data.aMs === 6) {
      aMu(dm, a29);
      return;
    }
    gF = 1000 * 60 * aMn[data.aMs];
    if (data.aMs <= 4) {
      aMi = new Date(hU + gF - (dm.getTime() % gF));
      return;
    }
    aMi = new Date(hU + gF - ((dm.getTime() + 3 * 24 * 60 * 60 * 1000) % gF));
  }
  function aMu(dm, a29) {
    var aMv = dm.getUTCFullYear();
    var month = dm.getUTCMonth() + 1;
    if (month < 12) {
      aMi = new Date(Date.UTC(aMv, month) - a29);
    } else {
      aMi = new Date(Date.UTC(aMv + 1, 0) - a29);
    }
  }
  function aMq() {
    var f2 = b9.color;
    colors = [
      bA.mn,
      f2.mf(255, 0, 0),
      f2.mf(0, 200, 0),
      f2.mf(80, 80, 255),
      f2.mf(255, 255, 0),
      f2.mf(255, 0, 255),
      f2.mf(0, 255, 255),
      f2.mf(255, 140, 0),
      f2.mf(128, 128, 128),
      f2.mf(0, 255, 140),
    ];
  }
  this.show = function () {
    aMm = bi.eE.data[127].value;
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    var f2 = h.k;
    var tp = aLV.tm();
    var aMw = f2 * tp.to;
    var r3 = f2 * tp.r3;
    aMf = b9.ph.sN(0.06);
    aMg = b9.ph.sN(0.04);
    aMb = b9.ph.sN(0.06);
    aMc = r3 + aMf;
    aMd = h.i - aMb - aMg;
    aMe = aMw + r3 - aMc - aMg;
  };
  this.tq = function () {
    aLV.tq();
    aMx();
    aMy();
    aMz();
  };
  function aMy() {
    tr.lineWidth = bb.y5;
    tr.strokeStyle = bA.mn;
    tr.beginPath();
    tr.moveTo(aMb, aMc);
    tr.lineTo(aMb, aMc + aMe);
    tr.lineTo(aMb + aMd, aMc + aMe);
    tr.stroke();
  }
  function aMx() {
    var aB, aMt, g9, eo, f0;
    var g = data.data;
    var aN0 = 1;
    var aN1 = 0.125;
    var aN2 = aMm ? 1 << 16 : 0;
    for (aB = 0; aB < g.length; aB++) {
      aMt = g[aB].aMt;
      g9 = aMt.length;
      aN0 = Math.max(g9, aN0);
      for (f0 = 0; f0 < g9; f0++) {
        aN1 = Math.max(aMt[f0], aN1);
        aN2 = Math.min(aMt[f0], aN2);
      }
    }
    var mE = aMc + aMe;
    var x4 = aMe / (aN1 - aN2);
    var x3 = 1 / (aN0 - 1);
    tr.lineWidth = bb.y5;
    for (aB = 0; aB < g.length; aB++) {
      aMt = g[aB].aMt;
      g9 = aMt.length;
      eo = aMb;
      tr.beginPath();
      tr.moveTo(eo + aMd, mE - x4 * (aMt[g9 - 1] - aN2));
      for (f0 = g9 - 2; f0 >= 0; f0--) {
        tr.lineTo(eo + x3 * f0 * aMd, mE - x4 * (aMt[f0] - aN2));
      }
      tr.strokeStyle = colors[aB];
      tr.stroke();
    }
    aN3(aN2, aN1, mE, x4);
    aN4(aN0);
    a4t(aN0, aN2, aN1);
  }
  function aN3(aN2, aN1, mE, x4) {
    tr.font = b9.ph.rY(0, 0.25 * aMb);
    b9.ph.textBaseline(tr, 1);
    b9.ph.textAlign(tr, 2);
    tr.fillStyle = colors[0];
    var eo = 0.92 * aMb;
    for (var aB = 0; aB < 3; aB++) {
      var f9 = aN2 + (aB * (aN1 - aN2)) / 2;
      tr.fillText((f9 / 1000).toFixed(3), eo, mE - x4 * (f9 - aN2));
    }
  }
  function aN4(aN0) {
    var eq = aMc + aMe + 0.15 * aMg;
    tr.font = b9.ph.rY(0, Math.min(0.4 * aMg, 0.028 * h.i));
    b9.ph.textBaseline(tr, 0);
    b9.ph.textAlign(tr, 2);
    tr.fillStyle = colors[0];
    tr.fillText(b9.a1O.a2B(aMh), aMb + aMd, eq);
    b9.ph.textAlign(tr, 0);
    tr.fillText(b9.a1O.a2B(new Date(aMi.getTime() - 1000 * 60 * (aN0 - 1) * aMn[data.aMs])), aMb, eq);
  }
  function a4t(aN0, aN2, aN1) {
    if (!aMl) {
      return;
    }
    if (aN0 < 2) {
      return;
    }
    var gE = (aMj - aMb) / aMd;
    var e2 = gE * (aN0 - 1);
    var aN5 = Math.floor(e2);
    var aN6 = Math.floor(e2 + 1);
    var aN7 = e2 - aN5;
    var aN8 = 100000;
    var aN9 = -1;
    var aNA = -1;
    var aNB = aN1 - ((aN1 - aN2) * (aMk - aMc)) / aMe;
    var g = data.data;
    for (var aB = 0; aB < g.length; aB++) {
      var aMt = g[aB].aMt;
      var g9 = aMt.length;
      if (aN6 >= g9) {
        continue;
      }
      var f9 = aMt[aN5] + aN7 * (aMt[aN6] - aMt[aN5]);
      var aAz = Math.abs(aNB - f9);
      if (aAz < aN8) {
        aN8 = aAz;
        aN9 = aB;
        aNA = f9;
      }
    }
    if (aN9 === -1) {
      return;
    }
    var aNC = aMc + aMe - ((aNA - aN2) / (aN1 - aN2)) * aMe;
    tr.lineWidth = 0.5 * bb.y5;
    tr.strokeStyle = colors[aN9];
    tr.beginPath();
    tr.moveTo(aMb, aNC);
    tr.lineTo(aMj, aNC);
    tr.lineTo(aMj, aMc + aMe);
    tr.stroke();
    tr.beginPath();
    tr.arc(aMj, aNC, 0.1 * aMb, 0, 2 * Math.PI);
    tr.fillStyle = colors[aN9];
    tr.fill();
    var aND = aMc + aMe + 0.15 * aMg;
    b9.ph.textAlign(tr, 1);
    var dm, a7M;
    if (e2 > aN0 - 2) {
      a7M = aMi.getTime() - 1000 * 60 * aMn[data.aMs];
      dm = new Date(a7M + (e2 - (aN0 - 2)) * (aMh.getTime() - a7M));
    } else {
      dm = new Date(aMi.getTime() - 1000 * 60 * (aN0 - e2 - 1) * aMn[data.aMs]);
    }
    var pO = b9.a1O.a2B(dm);
    var aNE = b9.ph.measureText(pO);
    var aNF = bK.pF(aMj, aMb + 0.5 * aNE, aMb + aMd - 0.5 * aNE);
    tr.fillStyle = b9.color.mf(70, 50, 20);
    tr.fillRect(aNF - 0.52 * aNE, aMc + aMe, 1.04 * aNE, 0.55 * aMg);
    tr.fillStyle = colors[0];
    tr.fillText(pO, aNF, aND);
    tr.font = b9.ph.rY(0, 0.25 * aMb);
    b9.ph.textBaseline(tr, 1);
    b9.ph.textAlign(tr, 2);
    aNF = 0.92 * aMb;
    pO = (aNA / 1000).toFixed(3);
    aNE = b9.ph.measureText(pO);
    var aNG = aNF - 1.04 * aNE;
    tr.fillStyle = b9.color.mf(70, 50, 20);
    tr.fillRect(aNG, aNC - 0.65 * 0.25 * aMb, aMb - aNG, 1.1 * 0.25 * aMb);
    tr.fillStyle = colors[aN9];
    tr.fillText(pO, aNF, aNC);
  }
  function aMz() {
    var aB;
    var fontSize = 0.5 * aMf;
    tr.font = b9.ph.rY(0, fontSize);
    b9.ph.textBaseline(tr, 1);
    b9.ph.textAlign(tr, 0);
    var g = data.data;
    var eh = g.length;
    var eq = aMc - 0.5 * aMf;
    var pO = "";
    for (aB = 0; aB < eh; aB++) {
      pO += g[aB].name + "  ";
    }
    pO = pO.trim();
    var aNE = b9.ph.measureText(pO);
    var eo = 0.5 * (h.i - aNE);
    if (aNE > h.i) {
      eo = 0;
      tr.font = b9.ph.rY(0, (h.i / aNE) * fontSize);
    }
    for (aB = 0; aB < eh; aB++) {
      tr.fillStyle = colors[aB];
      tr.fillText(g[aB].name, eo, eq);
      eo += b9.ph.measureText(g[aB].name + "  ");
    }
  }
  this.gu = function (kz, l0) {
    aNH(kz, l0);
  };
  this.a0Y = function (kz, l0) {
    aNH(kz, l0);
  };
  function aNH(kz, l0) {
    aMj = kz;
    aMk = l0;
    if (!a12(kz, l0)) {
      if (aMl) {
        be.df = true;
      }
      aMl = false;
      return;
    }
    aMl = true;
    be.df = true;
  }
  function a12(kz, l0) {
    return kz > aMb && kz < aMb + aMd && l0 > aMc && l0 < aMc + aMe;
  }
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLC() {
  var aLV;
  var aLW;
  function dX() {
    aLV = new tb(L(259), [
      new w(S[2] + L(37), function () {
        t.aLT(13);
      }),
    ]);
    aLW = new pa(aLV.th, aLY());
  }
  function aLY() {
    var pc = [];
    pc.push(aNI());
    pc.push(aNJ());
    pc.push(aNK());
    pc.push(aNL());
    return pc;
  }
  function aNI() {
    var aLo = new pK();
    aLo.pN(L(260));
    aLo.pP(L(261));
    var aLx = new w(
      L(262),
      function () {
        bi.rB.rC(130, 0);
        t.y.aNM();
      },
      0,
      0,
      1
    );
    var qV = new qW(bi.eE.data[126], 0, function () {
      aLx.button.click();
    });
    aLo.pY(qV);
    qV.e.placeholder = "a,b,c";
    qV.e.style.marginTop = S[25];
    aLo.pY(new rE([aLx.button]));
    return aLo;
  }
  function aNJ() {
    var aLo = new pK();
    var aLx = new w(
      L(262),
      function () {
        bi.rB.rC(130, 1);
        t.y.aNM();
      },
      0,
      0,
      1
    );
    var aNN = new qW(bi.eE.data[129], 1, function () {
      aNN.e.focus();
    });
    var aNO = new qW(bi.eE.data[128], 1, function () {
      aLx.button.click();
    });
    aLo.pN(L(263));
    aLo.pY(aNO);
    aNO.e.style.marginBottom = S[25];
    aLo.pN(L(264));
    aLo.pY(aNN);
    aLo.pY(new rE([aLx.button]));
    return aLo;
  }
  function aNK() {
    var aLo = new pK();
    aLo.pN(L(265));
    bi.eE.data[125].ta = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"];
    aLo.pV(new tW(bi.eE.data[125]));
    return aLo;
  }
  function aNL() {
    var aLo = new pK();
    aLo.pN(L(266));
    aLo.pY(new r8(bi.eE.data[127], L(267)));
    return aLo;
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aLW.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLB() {
  var aLV;
  var aNP;
  var aMd;
  var aNQ;
  var aNR;
  var aNS;
  var colors = [0, 0, 0];
  var aNT = -1;
  function dX() {
    aLV = new tb(
      L(268),
      [
        new w(S[2] + L(37), function () {
          t.y.aAt();
        }),
      ],
      false
    );
    aNP = new qJ([0.5, 0.25], [0.5, 0.5], 1);
  }
  this.show = function () {
    var f9 = bi.eE.data[121].value;
    colors[0] = (f9 >> 12) / 63;
    colors[1] = ((f9 >> 6) & 63) / 63;
    colors[2] = (f9 & 63) / 63;
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    bi.rB.rC(121, (aNU(0, 64) << 12) + (aNU(1, 64) << 6) + aNU(2, 64));
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aNP.resize();
    var f2 = h.k;
    var tp = aLV.tm();
    aNP.eq = Math.max(aNP.eq, f2 * tp.r3 + bb.gap);
    var aNV = f2 * tp.to - 2 * bb.gap;
    aNP.j = Math.min(aNP.j, aNV);
    aNP.i = 2 * aNP.j;
    aNP.eq = f2 * tp.r3 + 0.5 * (f2 * tp.to - aNP.j);
    aNP.eo = 0.5 * (h.i - aNP.i);
    aMd = 0.25 * aNP.i;
    aNQ = aNP.eo + aMd + bb.gap;
    aNR = aNP.i - aMd - bb.gap;
    aNS = (aNP.j - 2 * bb.gap) / 3;
  };
  this.tq = function () {
    aLV.tq();
    tr.lineWidth = bb.y5;
    aMy();
    aNW(0);
    aNW(1);
    aNW(2);
  };
  function aMy() {
    var e1 = aNU(0);
    var sM = aNU(1);
    var f1 = aNU(2);
    tr.fillStyle = S[7] + e1 + "," + sM + "," + f1 + ")";
    tr.fillRect(aNP.eo, aNP.eq, aMd, aNP.j);
    tr.strokeStyle = bA.mn;
    tr.strokeRect(aNP.eo, aNP.eq, aMd, aNP.j);
    tr.fillStyle = e1 + sM + f1 < 0.4 * (3 * 255) && sM < 150 ? bA.mn : bA.me;
    b9.ph.textBaseline(tr, 1);
    b9.ph.textAlign(tr, 1);
    tr.font = b9.ph.rY(0, 0.1 * aNP.j);
    tr.rotate(-Math.PI / 2);
    tr.fillText(L(269), -aNP.eq - 0.5 * aNP.j, aNP.eo + 0.5 * aMd);
    tr.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aNW(aB) {
    var e1 = aB === 0 ? 150 : aB === 2 ? 30 : 0;
    var sM = aB === 1 ? 130 : aB === 2 ? 30 : 0;
    var f1 = aB === 2 ? 220 : 0;
    var aNX = aNP.eq + aB * (bb.gap + aNS);
    tr.fillStyle = S[7] + e1 + "," + sM + "," + f1 + ")";
    tr.fillRect(aNQ, aNX, colors[aB] * aNR, aNS);
    tr.strokeStyle = bA.mn;
    tr.strokeRect(aNQ, aNX, aNR, aNS);
    tr.fillStyle = bA.mn;
    tr.font = b9.ph.rY(0, 0.32 * aNS);
    b9.ph.textBaseline(tr, 1);
    b9.ph.textAlign(tr, 0);
    tr.fillText((aB === 0 ? L(270) : aB === 1 ? L(271) : L(272)) + aNU(aB), aNQ + bb.gap, aNX + 0.53 * aNS);
  }
  function aNU(aB, aNY) {
    aNY = aNY || 256;
    return bK.pF(Math.floor(aNY * colors[aB]), 0, aNY - 1);
  }
  this.gu = function (kz, l0) {
    if (!a12(kz, l0)) {
      return;
    }
    aNT = bK.pF(Math.floor((l0 - aNP.eq) / (aNS + 0.75 * bb.gap)), 0, 2);
    colors[aNT] = bK.pF((kz - aNQ) / aNR, 0, 1);
    be.df = true;
  };
  function a12(kz, l0) {
    if (kz < aNQ || l0 < aNP.eq || kz > aNP.eo + aNP.i || l0 > aNP.eq + aNP.j) {
      return false;
    }
    return true;
  }
  this.a0Y = function (kz) {
    if (aNT === -1) {
      return;
    }
    colors[aNT] = bK.pF((kz - aNQ) / aNR, 0, 1);
    be.df = true;
  };
  this.a0b = function (kz, l0, deltaY) {
    if (!a12(kz, l0)) {
      return;
    }
    var e2 = bK.pF(Math.floor((l0 - aNP.eq) / (aNS + 0.75 * bb.gap)), 0, 2);
    colors[e2] = bK.pF(colors[e2] + (1 - 2 * (deltaY > 0)) / 256, 0, 1);
    be.df = true;
  };
  this.a0w = function () {
    if (aNT >= 0) {
      aNT = -1;
      be.df = true;
    }
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLJ() {
  var aMP;
  var aMQ;
  var aMR;
  function q1() {
    var qH = [new w(S[2] + L(37), aMS)];
    if (aD.data.gameMode === 1) {
      qH.push(new w(L(273), aNZ, 1, 1));
    }
    aMP = new tb(L(274), qH);
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    aMU();
    if (aD.data.colorsType !== 1) {
      aD.data.colorsData = null;
    }
    t.aLU()[19] = null;
    t.a0D();
  }
  function aNZ() {
    aMU();
    t.u(21);
  }
  function aMU() {
    if (aD.data.gameMode === 1) {
      aD.a3Y.a3c();
    } else if (aD.data.gameMode === 0 && aD.data.colorsType === 1) {
      b9.pq.a1j(aMR.u8(), aD.data.colorsData, 262143);
    }
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    if (aD.data.gameMode === 0) {
      if (aD.data.colorsType === 1) {
        aMX(pc);
      }
      return pc;
    }
    aD.a3Y.a3c();
    pc.push(aNa());
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    if (aD.data.gameMode === 0) {
      aLo.pV(
        new tW(
          {
            ta: [L(275), L(253)],
            value: aD.data.colorsType,
          },
          function (e2) {
            aMU();
            aD.data.colorsType = e2;
            if (aD.data.colorsType === 1 && (!aD.data.colorsData || aD.data.colorsData.length !== aD.ee)) {
              aD.data.colorsData = new Uint32Array(aD.ee);
            }
            t.u(21);
          }
        )
      );
      aLo.pY(new rO());
    }
    aLo.pY(
      new r8(
        {
          value: aD.data.selectableColor,
        },
        L(276),
        function (value) {
          aD.data.selectableColor = value;
        }
      )
    );
    pc.push(aLo);
  }
  function aMX(pc) {
    var aLo = new pK();
    aLo.pN(S[18]);
    aMR = new tz(0, 1, 0, 1);
    aMR.u6(b9.qh.a3H(aD.data.colorsData, 1));
    aLo.pY(aMR);
    pc.push(aLo);
  }
  function aNa() {
    var aLo = new pK();
    aLo.pN(L(256));
    for (var aB = 0; aB < bf.zP.length; aB++) {
      var hU = (aB + 1) % bf.zP.length;
      var e = aLo.pT((hU === 0 ? "" : "Team ") + bf.zP[hU]);
      if (aB) {
        e.style.marginTop = S[25];
      }
      aLo.pY(
        new qW(
          {
            e2: -1,
            value: aD.data.teamPlayerCount[hU],
          },
          1,
          0,
          function (e) {
            aMP.ti[1].q2(0);
            var playerCount = bK.pF(Math.floor(e.target.value), 0, 512);
            e.target.value = playerCount;
            aD.data.teamPlayerCount[e.target.aNb] = playerCount;
          }
        )
      ).e.aNb = hU;
    }
    return aLo;
  }
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function rz(id, a2u, aNc) {
  var aLV;
  var aNd;
  this.aNe = true;
  this.aNf = id;
  function dX() {
    aLV = new tb(L(277), [
      new w(S[2] + L(37), function () {
        if (aNc) {
          t.u(29);
        } else {
          t.y.aAt();
        }
      }),
    ]);
    aNd = new rD(aLV.th, L(278));
  }
  this.show = function () {
    aLV.show();
    this.resize();
    if (id === 15) {
      if (az.y.aNg(id)) {
        aNh();
      } else {
        aNi();
      }
    } else if (id === 16) {
      if (az.y.aNg(id)) {
        az.aAq.aNj(2);
      } else {
        aNi();
      }
    } else if (id === 17) {
      if (az.y.aNg(id)) {
        az.aAq.aNj(3);
      } else {
        aNi();
      }
    } else if (id === 18) {
      az.y.close(0, 3253);
      az.y.aER(0, id);
      aNi();
    } else if (id === 21) {
      if (az.y.aNg(id)) {
        az.aNk.aNl(a2u.sH, a2u.sI, a2u.sJ);
      } else {
        aNi();
      }
    } else if (id === 22) {
      if (az.y.aNg(id)) {
        az.aNk.aNm(a2u.sH, a2u.aNn, a2u.aNo);
      } else {
        aNi();
      }
    } else if (id === 23) {
      if (az.y.aNg(id)) {
        az.aNk.aNp(a2u.aMs, a2u.zi);
      } else {
        aNi();
      }
    } else if (id === 24) {
      if (az.y.aNg(id)) {
        az.aNk.aNq(a2u.aMs, a2u.sI, a2u.sJ);
      } else {
        aNi();
      }
    } else if (id === 25) {
      if (az.y.aNg(id)) {
        az.aLv.aMB(a2u);
      } else {
        aNi();
      }
    } else if (id === 28) {
      if (az.y.aNg(id)) {
        az.aNk.aNr(a2u.sH, a2u.aNn, a2u.aNo);
      } else {
        aNi();
      }
    } else if (id === 29) {
      if (az.y.aNg(id)) {
        az.aLv.aNs(a2u);
      } else {
        aNi();
      }
    } else if (id === 1000) {
      return;
    }
  };
  function aNi() {
    aNd.pd.innerHTML += S[11] + L(279);
  }
  this.aNt = function () {
    if (id === 15) {
      aNh();
      return;
    }
    if (id === 16) {
      az.aAq.aNj(2);
      return;
    }
    if (id === 17) {
      az.aAq.aNj(3);
      return;
    }
    if (id === 18) {
      t.u(8, this.aL2, new rz(16));
      return;
    }
    if (id === 21) {
      az.aNk.aNl(a2u.sH, a2u.sI, a2u.sJ);
      return;
    }
    if (id === 22) {
      az.aNk.aNm(a2u.sH, a2u.aNn, a2u.aNo);
      return;
    }
    if (id === 23) {
      az.aNk.aNp(a2u.aMs, a2u.zi);
      return;
    }
    if (id === 24) {
      az.aNk.aNq(a2u.aMs, a2u.sI, a2u.sJ);
      return;
    }
    if (id === 25) {
      az.aLv.aMB(a2u);
      return;
    }
    if (id === 28) {
      az.aNk.aNr(a2u.sH, a2u.aNn, a2u.aNo);
      return;
    }
    if (id === 29) {
      az.aLv.aNs(a2u);
      return;
    }
    if (id === 1000) {
      this.aNf = id = 25;
      az.aLv.aMB(a2u);
      return;
    }
  };
  this.aNu = function (code, br, data) {
    if (!br && code !== id) {
      return;
    }
    if (code === 15 || code === 16) {
      t.u(7, this.aL2);
      return;
    }
    if (code === 17) {
      az.y.close(0, 3252);
      bi.y.uh(0);
      if (bi.eE.data[117].ta && bi.eE.data[117].ta.length > 0) {
        var ek = bi.y.ui(0);
        bi.rB.rC(105, ek.rw);
        bi.rB.rC(106, ek.password);
        t.u(8, this.aL2, new rz(16));
      } else {
        bi.rB.rC(105, "");
        t.y.aAt();
      }
      return;
    }
    if (code === 21) {
      t.u(10, this.aL2, new aNv(data));
      return;
    }
    if (code === 23) {
      t.u(
        13,
        this.aL2,
        new aMa({
          data: data,
          aMs: a2u.aMs,
        })
      );
      return;
    }
    if (code === 25) {
      t.y.aLD.rw = a2u.rw;
      t.u(15, this.aL2);
      return;
    }
  };
  function aNh() {
    bC.a7(48);
    bC.a8(24, Math.floor(bK.pow(24) * Math.random()));
    bC.a8(24, Math.floor(bK.pow(24) * Math.random()));
    bG.dX(bC.aC);
    bi.rB.rC(110, bE.s1.s2(bE.s1.s3(8)));
    az.aLv.aNw();
  }
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aNd.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLH() {
  var aMP;
  var aMQ;
  function q1() {
    aMP = new tb("🔧 " + L(280), [new w(S[2] + L(37), aMS), new w(L(281), aNx)]);
    aNy();
    aMQ = new pa(aMP.th, aMT());
  }
  function aNy() {
    aNz();
    aO0();
  }
  function aO0() {
    if (aD.data.canvas) {
      return;
    }
    if (aD.data.mapType === 2) {
      aD.data.canvas = bR.ve;
      return;
    }
    if (aD.data.mapType === 1) {
      aD.data.canvas = bR.aJ4(bR.a3x(aD.data), 0).ve;
      return;
    }
    aD.data.mapType = 0;
    aD.data.passableWater = aD.data.passableMountains = 1;
    aD.data.canvas = bR.aJ4(bR.a3x(aD.data), aD.data.mapSeed).ve;
  }
  function aNz() {
    if (aD.data.gameMode === 1) {
      if (!aD.data.teamPlayerCount) {
        aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]);
        aD.a3Y.a3c();
      }
      var g9 = b9.pq.a1d(aD.data.teamPlayerCount, 0);
      aD.data.numberTeams = g9;
    } else {
      if (aD.data.botDifficultyType === 2) {
        aD.data.botDifficultyType = 0;
      }
      if (aD.data.spawningType === 1) {
        aD.data.spawningType = 0;
      }
    }
  }
  function aMS() {
    if (aD.data.gameMode !== 1) {
      aD.data.teamPlayerCount = null;
    }
    aO1();
    aD.data.canvas = null;
    t.u(5, 5);
  }
  function aO1() {
    b8.ox.dX();
    bi.rB.rC(156, b8.a3o.yX());
  }
  function aNx() {
    aD.data.isReplay = 0;
    aO1();
    aD.a3Y.a3z();
    aa.aEc();
    aD.a3Y.a3w();
    aD.data.canvas = aD.data.mapType === 2 ? bR.ve : null;
    aD.gameInit();
    aD.a3a = 1;
  }
  function aMT() {
    var pc = [];
    aO2(pc);
    aNa(pc);
    aO3(pc);
    pc.push(aO4());
    pc.push(aO5());
    pc.push(aO6());
    aO7(pc);
    aO8(pc);
    aO9(pc);
    aOA(pc);
    aOB(pc);
    aOC(pc);
    return pc;
  }
  function aO2(pc) {
    var aLo = new pK();
    aLo.pN(L(282));
    var a1t = aD.data.canvas;
    a1t.style.width = S[1];
    aLo.pY({
      e: a1t,
    });
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(20);
        }).button,
      ])
    );
    pc.push(aLo);
  }
  function aNa(pc) {
    var aLo = new pK();
    aLo.pN(L(256));
    aLo.pY(
      new qW(
        {
          e2: -1,
          value: aD.data.playerCount,
        },
        1,
        0,
        function (e) {
          var playerCount = bK.pF(Math.floor(e.target.value), 1, 512);
          e.target.value = aD.data.playerCount = playerCount;
          if (aD.data.gameMode === 1) {
            var aOD = b9.pq.a1d(aD.data.teamPlayerCount, 0);
            aD.a3Y.a3c();
            var aOE = b9.pq.a1d(aD.data.teamPlayerCount, 0);
            if (aOE !== aOD) {
              aOF();
            }
          }
        }
      )
    );
    pc.push(aLo);
  }
  function aO3(pc) {
    var aLo = new pK();
    aLo.pN(L(284));
    aLo.pV(
      new tW(
        {
          ta: [S[104], "Teams"],
          value: aD.data.gameMode,
        },
        function (e2) {
          if (aD.data.gameMode === e2) {
            return;
          }
          aD.data.gameMode = e2;
          aOF();
        }
      )
    );
    pc.push(aLo);
  }
  function aOF() {
    aNz();
    var g = [aO4(), aO5(), aO6()];
    for (var aB = 3; aB < 6; aB++) {
      aMQ.pd.removeChild(aMQ.pe[aB].pM);
      aMQ.pe[aB] = g[aB - 3];
      aMQ.pd.appendChild(aMQ.pe[aB].pM);
    }
    aMQ.resize();
  }
  function aO4() {
    var aLo = new pK();
    aLo.pN(L(274));
    var aOG;
    if (aD.data.gameMode === 0) {
      aOG = [L(275), L(253)][aD.data.colorsType];
    } else {
      aOG = aD.data.numberTeams + " Team" + (aD.data.numberTeams === 1 ? "" : "s");
    }
    aLo.pT(aOG);
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(21);
        }).button,
      ])
    );
    return aLo;
  }
  function aO5() {
    var aLo = new pK();
    aLo.pN(L(62));
    var g = [L(252) + ": " + aE.k7[aD.data.botDifficultyValue], L(254), L(255), L(253)];
    aLo.pT(g[aD.data.botDifficultyType]);
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(25);
        }).button,
      ])
    );
    return aLo;
  }
  function aO6() {
    var aLo = new pK();
    aLo.pN("Spawning");
    var g = [L(275), L(285), L(253)];
    aLo.pT(g[aD.data.spawningType]);
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(24);
        }).button,
      ])
    );
    return aLo;
  }
  function aO7(pc) {
    var aLo = new pK();
    aLo.pN(L(286));
    var g = [L(287), L(288), L(253)];
    aLo.pT(g[aD.data.playerNamesType]);
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(23);
        }).button,
      ])
    );
    pc.push(aLo);
  }
  function aO8(pc) {
    var aLo = new pK();
    aLo.pN(L(249));
    var g = [L(251), L(252) + ": " + aD.data.aIncomeValue, L(253)];
    aLo.pT(g[aD.data.aIncomeType]);
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(22);
        }).button,
      ])
    );
    pc.push(aLo);
  }
  function aO9(pc) {
    var aLo = new pK();
    aLo.pN(L(289));
    var g = [L(251), L(252) + ": " + aD.data.tIncomeValue, L(253)];
    aLo.pT(g[aD.data.tIncomeType]);
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(26);
        }).button,
      ])
    );
    pc.push(aLo);
  }
  function aOA(pc) {
    var aLo = new pK();
    aLo.pN(L(290));
    var g = [L(251), L(252) + ": " + aD.data.iIncomeValue, L(253)];
    aLo.pT(g[aD.data.iIncomeType]);
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(27);
        }).button,
      ])
    );
    pc.push(aLo);
  }
  function aOB(pc) {
    var aLo = new pK();
    aLo.pN(L(291));
    var g = [L(251), L(252) + ": " + aD.data.sResourcesValue, L(253)];
    aLo.pT(g[aD.data.sResourcesType]);
    aLo.pY(
      new rE([
        new w(L(283), function () {
          t.u(28);
        }).button,
      ])
    );
    pc.push(aLo);
  }
  function aOC(pc) {
    var aLo = new pK();
    aLo.pN(L(292));
    aLo.pY(
      new rE([
        new w(L(293), function () {
          t.x();
          aD.a3Y.a40();
          t.y.aGV[0] = 0;
          t.u(19);
        }).button,
      ])
    );
    aLo.pY(
      new rE([
        new w(L(294), function () {
          bl.aGK();
        }).button,
      ])
    );
    aLo.pY(
      new rE([
        new w(L(295), function () {
          bl.aGM();
          return true;
        }).button,
      ])
    );
    pc.push(aLo);
  }
  this.show = function () {
    aMP.show();
    this.resize();
    aMP.th.scrollTop = t.y.aGV[0];
  };
  this.r0 = function () {
    t.y.aGV[0] = aMP.th.scrollTop;
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function aLS() {
  var aMP;
  var qb = true;
  function q1() {
    aMP = new tb(L(296), [
      new w(S[2] + L(37), function () {
        t.aLT(1);
      }),
    ]);
    aMP.th.style.overflowY = S[9];
    aMP.th.addEventListener(S[30], function () {
      qb = aMP.th.scrollTop >= aMP.th.scrollHeight - aMP.th.clientHeight - 2;
    });
  }
  this.clear = function () {
    aMP.th.textContent = "";
  };
  this.show = function () {
    this.clear();
    aOH();
    aMP.show();
    this.resize();
    qb = true;
    qw();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMP.th.style.padding = "0.4em " + b9.ph.pr(bb.po);
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  function aOH() {
    var a4v = bp.a46();
    var eh = a4v.length;
    var qr = document.createDocumentFragment();
    for (var aB = 0; aB < eh; aB++) {
      qs(qr, a4v[aB]);
    }
    aMP.th.appendChild(qr);
    qw();
  }
  this.xZ = function (a42) {
    var qr = document.createDocumentFragment();
    qs(qr, a42);
    aMP.th.appendChild(qr);
    qw();
  };
  function qs(qr, a42) {
    var pM = document.createElement(S[0]);
    var aOI = document.createElement(S[14]);
    var aOJ = document.createElement(S[14]);
    aOI.textContent = aW.a9l(a42.eG) + ":";
    aOI.style.color = bA.n2;
    aOI.style.paddingRight = S[42];
    aOI.style.display = "table-cell";
    aOI.style.width = "6ch";
    aOI.style.textAlign = "end";
    pM.appendChild(aOI);
    aOJ.textContent = a42.pO;
    pM.appendChild(aOJ);
    pM.style.display = "table";
    if (a42.oK) {
      aOK(pM, a42.oK);
    }
    qr.appendChild(pM);
  }
  function aOK(pM, oK) {
    if (oK >= 1024 - aj.qz.xs) {
      var aGG = document.createElement("img");
      aGG.src = aj.vh.xg[oK - 1024 + aj.qz.xs].toDataURL();
      aGG.style.width = S[40];
      aGG.style.height = S[40];
      aGG.style.verticalAlign = S[33];
      pM.appendChild(aGG);
    } else {
      var qg = document.createElement(S[14]);
      qg.textContent = aj.qz.y7(oK);
      qg.style.display = S[49];
      qg.style.fontSize = S[40];
      qg.style.lineHeight = S[17];
      qg.style.verticalAlign = S[33];
      pM.appendChild(qg);
    }
  }
  function qw() {
    if (qb) {
      aMP.th.scrollTop = aMP.th.scrollHeight;
    }
  }
  q1();
}
function aLP() {
  var aMP;
  var aMQ;
  var aMR;
  function q1() {
    aMP = new tb(L(290), [new w(S[2] + L(37), aMS)]);
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    aMU();
    if (aD.data.iIncomeType !== 2) {
      aD.data.iIncomeData = null;
    }
    t.aLU()[19] = null;
    t.a0D();
  }
  function aMU() {
    if (aD.data.iIncomeType === 2) {
      b9.pq.a1j(aMR.u8(), aD.data.iIncomeData, 255);
    }
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    aMW(pc);
    aMX(pc);
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    aLo.pV(
      new tW(
        {
          ta: [L(251), L(252), L(253)],
          value: aD.data.iIncomeType,
        },
        function (e2) {
          aMU();
          if (e2 === 2 && !aD.data.iIncomeData) {
            aD.data.iIncomeData = new Uint8Array(aD.ee);
            aD.data.iIncomeData.fill(32);
          }
          aD.data.iIncomeType = e2;
          t.u(27);
        }
      )
    );
    pc.push(aLo);
  }
  function aMW(pc) {
    if (aD.data.iIncomeType !== 1) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[37]);
    aLo.pY(
      new qW(
        {
          e2: -1,
          value: aD.data.iIncomeValue,
        },
        1,
        0,
        function (e) {
          var value = bK.pF(Math.floor(e.target.value), 0, 255);
          e.target.value = aD.data.iIncomeValue = value;
        }
      )
    );
    pc.push(aLo);
  }
  function aMX(pc) {
    if (aD.data.iIncomeType !== 2) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[18]);
    aMR = new tz(0, 1, 0, 1);
    aMR.u6(b9.qh.a3H(aD.data.iIncomeData, 4));
    aLo.pY(aMR);
    pc.push(aLo);
  }
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function aL7() {
  var aOL;
  var aOM;
  var aNP;
  var qV;
  var aON;
  this.aFB = new s7();
  function dX() {
    aNP = new qJ([0.9 * 0.5, 0.9 * 0.3], [0.5, 0.5], 2 / 3);
    aOM = [
      new w(
        "⚔️<br>" + L(297),
        function () {
          aOO(0);
        },
        /* bA.nG */ "rgba(0,30,120,0.850)"
      ),
      new w(
        "🗡️<br>" + L(280),
        function () {
          aOO(1);
        },
        bA.nY
      ),
      new w(
        "🔑<br>" + L(298),
        function () {
          aOO(2);
        },
        bA.no
      ),
      new w(
        "☰<br>" + L(299),
        function () {
          aOO(3);
        },
        bA.n0
      ),
      new w(
        "",
        function () {
          t.u(12);
        },
        bA.mj,
        false
      ),
    ];
    qV = new qW(bi.eE.data[122]);
    for (var aB = 0; aB < aOM.length; aB++) {
      aOM[aB].button.style.position = S[3];
    }
    qV.e.style.position = S[3];
    qV.e.style.textAlign = S[10];
    qV.e.placeholder = L(300);
  }
  dX();
  function aOO(e2) {
    a0.a1.setState(10);
    if (!ab.sQ()) {
      ab.aF2();
    }
    if (e2 === 0) {
      t.y.a3r();
    } else if (e2 === 1) {
      if (!b8.aGf.vP(bi.eE.data[156].value, 1)) {
        aD.a3Y.a40();
      }
      t.u(19);
    } else if (e2 === 2) {
      if (a0.id !== 0 || bi.eE.data[140].value) {
        t.u(8, t.ry, new rz(16));
      } else {
        t.y.aOP(t.ry, 16);
      }
    } else if (e2 === 3) {
      t.u(1);
    }
  }
  this.show = function () {
    aa.setState(0);
    a0.a1.setState(12);
    this.aFB.show();
    aOM[4].q2(b9.color.a20(bi.eE.data[121].value));
    this.resize();
    document.body.appendChild(qV.e);
    for (var aB = 0; aB < aOM.length; aB++) {
      document.body.appendChild(aOM[aB].button);
    }
    aOQ();
  };
  function aOQ() {
    if (a0.id !== 1) {
      return;
    }
    if (a0.dp < 5) {
      return;
    }
    if (!aON) {
      aON = be.eG;
      return;
    }
    if (be.eG > aON + 1000 * 60 * 60 * 4) {
      a0.uS.setState(14);
      return;
    }
    aON = be.eG;
  }
  this.r0 = function () {
    this.aFB.r0();
    document.body.removeChild(qV.e);
    for (var aB = 0; aB < aOM.length; aB++) {
      document.body.removeChild(aOM[aB].button);
    }
  };
  this.resize = function () {
    this.aFB.resize();
    this.aFB.resize();
    aNP.resize();
    var gap = 0.5 * bb.gap;
    var sv = 0.84 * (10 / 99) * aNP.i;
    var aOR = 3 * gap;
    var aOS = 0.16 * aNP.j;
    var a7t = 0.19 * aNP.i;
    var eo = aNP.eo + a7t;
    var eq = aNP.eq + sv + aOR;
    var i = 0.5 * (aNP.i - gap) - a7t;
    var r5 = aNP.i - 2 * a7t - aOS - gap;
    b9.ph.sO(qV.e, eo, eq, r5, aOS);
    b9.ph.sO(aOM[4].button, eo + r5 + gap, eq, aOS, aOS);
    eq += aOS + gap;
    var j = 0.5 * (aNP.eq + aNP.j - eq - gap);
    b9.ph.sO(aOM[0].button, eo, eq, i, j);
    b9.ph.sO(aOM[1].button, eo + i + gap, eq, i, j);
    b9.ph.sO(aOM[2].button, eo, eq + j + gap, i, j);
    b9.ph.sO(aOM[3].button, eo + i + gap, eq + j + gap, i, j);
    for (var aB = 0; aB < aOM.length; aB++) {
      aOM[aB].button.style.font = b9.ph.rY(0, b9.ph.a2G(0.065 * aNP.j));
      b9.ph.ps(aOM[aB].button, 5);
    }
    qV.e.style.font = b9.ph.rY(0, b9.ph.a2G(0.08 * aNP.j));
    b9.ph.ps(qV.e, 5);
  };
  this.tq = function () {
    aa.aEg();
    aT.tq();
    aO.tq();
    bX.tq();
    aOT();
  };
  function aOT() {
    if (!ab.sQ()) {
      return;
    }
    tr.imageSmoothingEnabled = false;
    var f2 = ab.aEj(S[21]);
    var mP = (0.84 * aNP.i) / f2.width;
    tr.setTransform(mP, 0, 0, mP, aNP.eo + 0.08 * aNP.i, aNP.eq);
    if (!aOL) {
      aOL = b9.a1K.a2s(f2, b9.a1K.a2y, [0, 0, 0]);
    }
    for (var eo = -1; eo <= 1; eo += 2) {
      for (var eq = -1; eq <= 1; eq += 2) {
        tr.drawImage(aOL, eo, eq);
      }
    }
    tr.drawImage(f2, 0, 0);
    tr.imageSmoothingEnabled = true;
    var hn = ab.aEj(S[84]);
    var aOU = (0.6666 * mP * f2.height) / hn.height;
    var mQ = 0.5 * h.i;
    var mR = aNP.eq + 0.5 * mP * f2.height - 0.5 * aOU * hn.height;
    tr.setTransform(aOU, 0, 0, aOU, mQ - 0.6 * mP * f2.width, mR);
    tr.drawImage(hn, 0, 0);
    tr.setTransform(aOU, 0, 0, aOU, mQ + 0.6 * mP * f2.width - aOU * hn.width, mR);
    tr.drawImage(hn, 0, 0);
    tr.setTransform(1, 0, 0, 1, 0, 0);
    tr.imageSmoothingEnabled = true;
  }
}
function aLE() {
  var aLV;
  var aOV;
  var aOW;
  function dX() {
    aOW = [
      new w(
        L(301),
        function () {
          aOX(1);
        },
        0,
        0,
        1
      ),
      new w(
        L(302),
        function () {
          aOX(2);
        },
        0,
        0,
        1
      ),
      new w(
        L(303),
        function () {
          aOX(3);
        },
        0,
        0,
        1
      ),
      new w(
        L(304),
        function () {
          aOX(0);
        },
        0,
        0,
        1
      ),
      new w(
        L(305),
        function () {
          aOX(9);
        },
        0,
        0,
        1
      ),
      new w(
        L(306),
        function () {
          aOX(10);
        },
        0,
        0,
        1
      ),
      new w(
        L(307),
        function () {
          aOX(11);
        },
        0,
        0,
        1
      ),
    ];
    var tc = [
      new w(S[2] + L(37), function () {
        t.a0D();
      }),
    ];
    aLV = new tb(L(308), tc);
    aOV = new qG(aOW, aLV.th);
  }
  function aOX(aB) {
    t.u(
      8,
      t.ry,
      new rz(21, {
        sH: aB,
        sI: 0,
        sJ: 10,
      })
    );
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aOV.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aBH(title, pU, aOY) {
  var aLV;
  var aNd;
  function dX() {
    if (!aOY) {
      aOY = [
        new w(
          S[2] + L(37),
          function () {
            t.a0D();
          },
          bA.nS
        ),
      ];
    }
    aLV = new tb(title, aOY);
    aNd = new rD(aLV.th, pU);
    b9.ph.textAlign(aLV.th.style, 1);
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aNd.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aNv(data) {
  var aLV;
  var aOZ;
  function dX() {
    var f2 = data.data.length ? 0 : 1;
    var aOY = [
      new w(S[2] + L(37), function () {
        t.a0D();
      }),
      new w(
        L(309),
        function () {
          aOa(-10);
        },
        f2,
        0,
        1
      ),
      new w(
        L(310),
        function () {
          aOa(10);
        },
        f2,
        0,
        1
      ),
      new w(L(258), function () {
        t.u(
          11,
          10,
          new aOb({
            sH: data.sH,
          })
        );
      }),
    ];
    var ro = [L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(318), L(319), L(320), L(306), L(307), L(321)];
    aLV = new tb(ro[data.sH], aOY);
    aOc();
  }
  function aOc() {
    var aB;
    var ek = {
      ri: [],
    };
    var ri = ek.ri;
    var aOd = data.data;
    var eh = aOd.length;
    if (eh && aOd[0][0] === 0) {
      var e2 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.sH];
      if (e2 >= 0) {
        t.y.sK[e2] = aOd[0][1];
      }
    }
    var aOe = [0.1, 0.001, 0.01, 1, 100, 1, 1, 0.1, 100, 0.01, 0.01, 0.01, 1];
    var mP = aOe[data.sH];
    var aOf = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0];
    var a34 = aOf[data.sH];
    var ro = [
      [L(322), L(323) + " ↗", L(324)],
      [L(322), L(325), L(326), L(327) + " ↗"],
      [L(322), L(323) + " ↗", L(326)],
      [L(322), L(323) + " ↗", L(326)],
      [L(328), L(329), L(330) + " ↗", L(331) + " ↗", L(119)],
      [L(328), L(329), L(332) + " ↗", L(333) + " ↗", L(334)],
      [L(328), L(329), L(335) + " ↗", L(336) + " ↗", L(337)],
      [L(328), L(329), L(332) + " ↗", L(333) + " ↗", L(338)],
      [L(328), L(329), L(330) + " ↗", L(331) + " ↗", L(119)],
      [L(322), L(323) + " ↗", L(326)],
      [L(322), L(323) + " ↗", L(339)],
      [L(322), L(323) + " ↗", L(326)],
      [L(328), L(329), L(340) + " ↗", L(341) + " ↗", L(342)],
    ];
    var rt = [
      [25, 40, 35],
      [15, 25, 25, 35],
      [25, 40, 35],
      [25, 40, 35],
      [12, 16, 30, 30, 12],
      [12, 16, 30, 30, 12],
      [12, 16, 30, 30, 12],
      [12, 16, 30, 30, 12],
      [12, 16, 30, 30, 12],
      [25, 40, 35],
      [25, 40, 35],
      [25, 40, 35],
      [12, 13, 25, 25, 25],
    ];
    ek.ro = ro[data.sH];
    ek.rt = rt[data.sH];
    if (data.sH === 0 || data.sH === 2 || data.sH === 3 || data.sH === 9 || data.sH === 10 || data.sH === 11) {
      for (aB = 0; aB < eh; aB++) {
        ri.push([
          {
            f9: aOd[aB][0] + 1 + ".",
            dm: 0,
          },
          {
            f9: aOd[aB][1],
            dm: 1,
            rw: aOd[aB][4],
            rx: aOd[aB][3],
          },
          {
            f9: (mP * aOd[aB][2]).toFixed(a34),
            dm: 0,
          },
        ]);
      }
    } else if (data.sH === 12) {
      for (aB = 0; aB < eh; aB++) {
        var aOg = aOd[aB][3];
        ri.push([
          {
            f9: "" + aOd[aB][0],
            dm: 0,
          },
          {
            f9: "" + aOd[aB][4],
            dm: 0,
          },
          {
            f9: aOd[aB][5],
            dm: 1,
            rw: aOd[aB][1],
            rx: 0,
          },
          {
            f9: aOd[aB][6],
            dm: 1,
            rw: aOd[aB][2],
            rx: 0,
          },
          {
            f9: bn.e8(aOg % 16, aOg >> 4),
            dm: 0,
          },
        ]);
      }
    } else if (data.sH === 1) {
      for (aB = 0; aB < eh; aB++) {
        ri.push([
          {
            f9: aOd[aB][0] + 1 + ".",
            dm: 0,
          },
          {
            f9: aOd[aB][1],
            dm: 0,
          },
          {
            f9: (mP * aOd[aB][2]).toFixed(a34),
            dm: 0,
          },
          {
            f9: aOd[aB][3],
            dm: 1,
            rw: aOd[aB][5],
            rx: aOd[aB][4],
          },
        ]);
      }
    } else if (data.sH === 4 || data.sH === 5 || data.sH === 6 || data.sH === 7 || data.sH === 8) {
      for (aB = 0; aB < eh; aB++) {
        var aOh = aOd[aB][5];
        if (data.sH === 4 || data.sH === 8) {
          aOh = ((100 * (aOh % 64)) / (aOh >> 6)).toFixed(0) + "%";
          if (aOh === S[1]) {
            if (data.sH === 4) {
              aOh += " (" + L(343) + ")";
            } else {
              aOh += " (" + L(344) + ")";
            }
          }
        } else if (data.sH === 5) {
          if (aOh >= 32768) {
            aOh = -(aOh - 32768);
          }
        } else {
          aOh = (mP * aOh).toFixed(a34);
        }
        ri.push([
          {
            f9: "" + aOd[aB][0],
            dm: 0,
          },
          {
            f9: "" + aOd[aB][6],
            dm: 0,
          },
          {
            f9: aOd[aB][7],
            dm: 1,
            rw: aOd[aB][1],
            rx: aOd[aB][2],
          },
          {
            f9: aOd[aB][8],
            dm: 1,
            rw: aOd[aB][3],
            rx: aOd[aB][4],
          },
          {
            f9: "" + aOh,
            dm: 0,
          },
        ]);
      }
    }
    aOZ = new rh(aLV.th, ek);
  }
  function aOa(hq) {
    var eh = data.data.length;
    if (!eh) {
      return;
    }
    var min = parseInt(data.data[0][0]);
    var max = min;
    for (var aB = 1; aB < eh; aB++) {
      var aD5 = parseInt(data.data[aB][0]);
      min = Math.min(aD5, min);
      max = Math.max(aD5, max);
    }
    var sI;
    if (hq < 0) {
      sI = min + hq;
    } else {
      sI = max + 1;
    }
    t.u(
      8,
      t.a44().aL2,
      new rz(21, {
        sH: data.sH,
        sI: sI,
        sJ: sI + Math.abs(hq),
      })
    );
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aOZ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aOb(a2u) {
  var aLV;
  var aLW;
  function dX() {
    aLV = new tb(L(345), [
      new w(S[2] + L(37), function () {
        t.aLT(10);
      }),
    ]);
    aLW = new pa(aLV.th, aLY());
  }
  function aLY() {
    var pc = [];
    pc.push(aNJ());
    pc.push(aOi());
    pc.push(aOj());
    return pc;
  }
  function aNJ() {
    var aLo = new pK();
    var aLx;
    var aNN = new qW(bi.eE.data[132], 1, function () {
      aLx.button.click();
    });
    var aNO = new qW(bi.eE.data[131], 1, function () {
      aNN.e.focus();
    });
    aLo.pN(L(263));
    aLo.pY(aNO);
    aNO.e.style.marginBottom = S[19];
    aLo.pN(L(264));
    aLo.pY(aNN);
    var aOk = function () {
      var sI = Math.floor(aNO.e.value);
      var sJ = Math.floor(aNN.e.value);
      var a1b = Math.min(sI, sJ);
      var aKd = Math.max(sI, sJ);
      return {
        a1b: a1b,
        aKd: aKd,
      };
    };
    aLx = new w(
      L(262),
      function () {
        var pZ = aOk();
        t.u(
          8,
          t.a45(10).aL2,
          new rz(21, {
            sH: a2u.sH,
            sI: pZ.a1b,
            sJ: pZ.aKd,
          })
        );
      },
      0,
      0,
      1
    );
    aLo.pY(new rE([aLx.button]));
    return aLo;
  }
  function aOi() {
    var aLo = new pK();
    var aLx;
    var aNN = new qW(bi.eE.data[134], 1, function () {
      aLx.button.click();
    });
    var aNO = new qW(bi.eE.data[133], 0, function () {
      aNN.e.focus();
    });
    aLo.pN(a2u.sH === 1 ? L(346) : L(347));
    aLo.pY(aNO);
    aNO.e.style.marginBottom = S[19];
    aLo.pN(L(348));
    aLo.pY(aNN);
    aLx = new w(
      L(262),
      function () {
        var aNn = aNO.e.value.slice(0, 20);
        var aNo = Math.abs(Math.floor(aNN.e.value));
        t.u(
          8,
          t.a45(10).aL2,
          new rz(22, {
            sH: a2u.sH,
            aNn: aNn,
            aNo: aNo,
          })
        );
      },
      0,
      0,
      1
    );
    aLo.pY(new rE([aLx.button]));
    return aLo;
  }
  function aOj() {
    var aLo = new pK();
    var aLx;
    var aNN = new qW(bi.eE.data[152], 1, function () {
      aLx.button.click();
    });
    var aNO = new qW(bi.eE.data[151], 0, function () {
      aNN.e.focus();
    });
    aLo.pN(L(349));
    aLo.pY(aNO);
    aNO.e.style.marginBottom = S[19];
    aLo.pN(L(348));
    aLo.pY(aNN);
    aLx = new w(
      L(262),
      function () {
        var aNn = aNO.e.value.slice(0, 5);
        var aNo = Math.abs(Math.floor(aNN.e.value));
        t.u(
          8,
          t.a45(10).aL2,
          new rz(28, {
            sH: a2u.sH,
            aNn: aNn,
            aNo: aNo,
          })
        );
      },
      0,
      0,
      1
    );
    aLo.pY(new rE([aLx.button]));
    return aLo;
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aLW.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLR() {
  var aOl;
  var sU;
  var aOm = [new Array(4), [], new Array(2), new Array(2)];
  var aOn = new Array(4);
  var aOo;
  var aOp = new Array(2);
  var aOq = [L(61), L(305), L(350), L(351)];
  var sT;
  var sW;
  function q1() {
    sT = new rH(
      [
        new w(aOq[0], function () {
          aOr(0, 0);
          return 2;
        }),
        new w(aOq[1], function () {
          aOr(0, 1);
          return 2;
        }),
        new w(aOq[2], function () {
          aOr(0, 2);
          return 2;
        }),
        new w(aOq[3], function () {
          aOr(0, 3);
          return 2;
        }),
      ],
      bA.nx
    );
    sU = new rH([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bA.ny, 1);
    var aOs = new rH(
      [
        new w(L(352), function () {
          aOr(2, 0);
          return 2;
        }),
        new w(L(115), function () {
          aOr(2, 1);
          return 2;
        }),
      ],
      bA.nx
    );
    sW = new rH(
      [
        new w(L(353), function () {
          aMS();
        }),
        new w(L(354), function () {
          aOt(1);
          return 2;
        }),
      ],
      bA.nx
    );
    aOl = new sS(sT, sU, aOs, sW, aCq, bm.tQ.aDM);
    for (var aB = 0; aB < 4; aB++) {
      aOm[0][aB] = new qf("0", sT.qH[aB].button);
    }
    aOm[2][1] = new qf("0", aOs.qH[1].button);
    aOm[3][1] = new qf("0", sW.qH[1].button);
    aOo = [new qf("", aOs.qH[1].button, 1, 1), new qf("", sW.qH[1].button, 1, 1)];
    aOu(0, bm.y.qm[0], 1);
    aOu(2, bm.y.qm[2], 1);
    aOp = [new qf(L(256), aOl.ss(), 1, 0), new qf("", aOl.ss(), 1, 1)];
    aOp[0].qg.style.fontSize = S[42];
    aOp[1].qg.style.fontSize = S[42];
  }
  function aCq() {
    var a5w = aOl.sh.qV.e.value.trim().slice(0, 127);
    if (a5w.length < 1) {
      return;
    }
    aOl.sh.qV.e.value = "";
    bm.aBK.z8(a5w);
  }
  this.aDD = function () {
    return aOl.sh;
  };
  function aMS() {
    t.x();
    bm.tK();
    az.y.a0O(3240);
    t.u(5, 5);
  }
  function aOt(aOv) {
    bm.y.qm[3] = 1 - bm.y.qm[3];
    aOu(3, 1, bm.y.qm[3]);
    if (aOv) {
      az.aD1.aD2(4);
    }
    if (bm.y.qm[3]) {
      bi.rB.rC(158, bm.y.qm[0]);
    }
  }
  this.aBK = function (rw) {
    aOr(2, 0);
    var pO = aOl.sh.qV.e.value;
    var aOw = "@" + rw + " ";
    if (pO.length && !b9.qh.a2N(pO, " ")) {
      aOw = " " + aOw;
    }
    pO += aOw;
    aOl.sh.qV.e.value = pO;
    aOl.sh.qV.e.focus();
  };
  function aOr(f0, f1) {
    if (bm.y.qm[f0] === f1) {
      return;
    }
    if (f0 === 0 && bm.y.qm[3]) {
      aOt(0);
    }
    aOu(f0, bm.y.qm[f0], 0);
    aOu(f0, f1, 1);
    bm.y.qm[f0] = f1;
    if (f0 === 0) {
      az.aD1.aD2(2, f1);
      if (bm.y.qm[2]) {
        aOl.si.lZ();
        aOl.sh.qj(1);
      } else {
        aOl.sh.qj(0);
      }
      t.a44().aCf();
      t.a44().aCe();
      return;
    }
    if (f0 === 2) {
      if (f1 === 0) {
        az.aD1.aD2(0);
        aOl.sh.lZ();
        aOl.sq();
      } else {
        az.aD1.aD2(1);
        aOl.si.lZ();
        aOl.sr();
      }
    }
  }
  function aOu(f0, f1, color) {
    aOl.sk[f0].qH[f1].q2(color ? bA.nC : bA.nx);
  }
  this.aCd = function () {
    aOl.si.lZ();
  };
  this.aCf = function () {
    var aOx = bm.y.qm[0];
    var qn = bm.y.qo[aOx];
    bR.a7(qn.eN, qn.mapSeed);
    sU.qH[0].button.textContent = L(282) + ": " + bR.vU.vV[qn.eN].name;
    sU.qH[1].button.textContent = L(284, 0, "Mode") + ": " + aOy(qn.aBt);
    sU.qH[2].button.textContent = L(355) + ": " + bR.vU.vV[qn.aDb].name;
    sU.qH[3].button.textContent = L(356, 0, "Next Mode") + ": " + aOy(qn.aDc);
    sU.qH[4].button.textContent = L(357) + ": " + aOz(qn.aCh);
    sU.resize();
  };
  this.aCe = function () {
    var aOx = bm.y.qm[0];
    var qn = bm.y.qo[aOx];
    aOl.so(qn.sp);
    for (var aB = 0; aB < bm.t4.t5.length; aB++) {
      aOm[0][aB].qg.textContent = "" + bm.t4.t5[aB].length;
    }
    var t4 = bm.t4.t5[aOx];
    var aP0 = t4.length;
    var aP1 = bm.t4.t6[aOx];
    aOm[2][1].qg.textContent = "" + aP0;
    aOm[3][1].qg.textContent = "" + aP1;
    sU.qH[4].button.textContent = L(357) + ": " + aOz(qn.aCh);
    for (var aB = 0; aB < 4; aB++) {
      var aP2 = bm.y.qo[aB];
      if (!aOn[aB]) {
        aOn[aB] = new qf(bR.vU.vV[aP2.eN].name, sT.qH[aB].button, 1, 1);
      } else if (aP2.sp === 0) {
        aOn[aB].qg.textContent = bR.vU.vV[aP2.eN].name;
      }
      if (b9.qh.startsWith(aOq[aB], "🏆 ")) {
        if (!aP2.aBz) {
          aOq[aB] = aOq[aB].substring(3);
          sT.qH[aB].button.textContent = aOq[aB];
          sT.qH[aB].button.appendChild(aOm[0][aB].qg);
          sT.qH[aB].button.appendChild(aOn[aB].qg);
        }
      } else if (aP2.aBz) {
        aOq[aB] = "🏆 " + aOq[aB];
        sT.qH[aB].button.textContent = aOq[aB];
        sT.qH[aB].button.appendChild(aOm[0][aB].qg);
        sT.qH[aB].button.appendChild(aOn[aB].qg);
      }
    }
    var aP3 = "";
    var aP4 = "";
    if (aOx === 0) {
      aP3 = bm.qt.aCD(t4, 0, aP0);
      aP4 = bm.qt.aCD(t4, 0, aP1);
    }
    aOo[0].qg.textContent = aP3;
    aOo[1].qg.textContent = aP4;
    aOp[1].qg.textContent = "MP: " + bm.y.aCW[0] + "   SP: " + bm.y.aCW[1] + "   Lobby: " + b9.pq.a1o(bm.t4.t5);
  };
  function aOy(aBt) {
    if (aBt < 7) {
      return aBt + 2 + " " + L(358);
    } else if (aBt === 7 || aBt === 10) {
      return L(305) + " (Full-Sending: " + (aBt === 7 ? L(359) : L(360)) + ")";
    } else if (aBt === 8) {
      return S[108];
    }
    return L(361);
  }
  this.aCj = function () {
    aOl.sh.lZ();
  };
  function aOz(f9) {
    var a5z = bK.dn(f9, 60);
    var a60 = f9 % 60;
    return (a5z < 10 ? "0" : "") + a5z + ":" + (a60 < 10 ? "0" : "") + a60;
  }
  this.show = function () {
    aOl.show();
    this.resize();
    bm.message.show();
  };
  this.r0 = function () {
    aOl.r0();
    bm.tQ.r0();
    bm.t2.r0();
    bm.message.r0();
  };
  this.resize = function () {
    aOl.resize(1 - bm.y.qm[2]);
    bm.message.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      if (bm.y.qm[3]) {
        aOt(1);
      } else {
        aOl.sk[3].qH[0].pz();
      }
      return;
    }
    if (f2 < 2) {
      aOt(1);
    }
  };
  q1();
}
function aL8() {
  var aLV;
  var aLW;
  function dX() {
    aLV = new tb(L(362), [
      new w(S[2] + L(37), function () {
        t.u(7, t.a45(7).aL2);
      }),
      new w(L(194), function () {
        aP5();
      }),
    ]);
    aLW = new pa(aLV.th, aLY());
  }
  function aP5() {
    bi.rB.rC(105, bF.s1.vE(aLW.pe[0].pL[0].e.value, 5));
    bi.rB.rC(106, bF.s1.vE(aLW.pe[1].pL[0].e.value, 8));
    t.u(8, t.a45(7).aL2, new rz(18));
  }
  function aLY() {
    var pc = [];
    pc.push(aLe());
    pc.push(aLf());
    return pc;
  }
  function aLe() {
    var aLo = new pK();
    aLo.pN(L(175));
    aLo.pY(
      new qW({
        value: "",
        e2: -1,
      })
    );
    return aLo;
  }
  function aLf() {
    var aLo = new pK();
    aLo.pN(L(177));
    var aLz = new qW({
      value: "",
      e2: -1,
    });
    aLz.e.type = S[32];
    aLo.pY(aLz);
    aLo.pY(
      new rE([
        new w(L(178), function (e) {
          if (e.textContent === L(178)) {
            e.textContent = L(179);
            aLz.e.type = S[43];
          } else {
            e.textContent = L(178);
            aLz.e.type = S[32];
          }
          return true;
        }).button,
      ])
    );
    return aLo;
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aLW.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLF() {
  var aLV;
  var aOV;
  var aOW;
  function dX() {
    aOW = [
      new w(
        L(316),
        function () {
          aOX(5);
        },
        0,
        0,
        1
      ),
      new w(
        L(317),
        function () {
          aOX(6);
        },
        0,
        0,
        1
      ),
      new w(
        L(318),
        function () {
          aOX(7);
        },
        0,
        0,
        1
      ),
      new w(
        L(321),
        function () {
          aOX(12);
        },
        0,
        0,
        1
      ),
    ];
    var tc = [
      new w(S[2] + L(37), function () {
        t.a0D();
      }),
    ];
    aLV = new tb(L(363), tc);
    aOV = new qG(aOW, aLV.th);
  }
  function aOX(aB) {
    t.u(
      8,
      t.ry,
      new rz(21, {
        sH: aB,
        sI: 0,
        sJ: 10,
      })
    );
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aOV.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aKy() {
  this.eE = {};
  this.sK = new Array(7);
  this.aLD = null;
  this.aLA = null;
  this.rf = 0;
  this.aGV = [0, 0];
  this.z = function () {
    t.u(5, 5);
  };
  this.a3r = function () {
    t.x(); // To remove the UI
    // aZ.dX(); // Enter the lobby
    createPreCustomLobbyUI();
  };
  this.aAt = function () {
    t.u(aa.a0E() === 0 ? 5 : 0);
  };
  this.aNM = function () {
    if (bi.eE.data[130].value === 1) {
      t.u(
        8,
        t.a44().aL2,
        new rz(24, {
          aMs: bi.eE.data[125].value,
          sI: bi.eE.data[128].value,
          sJ: bi.eE.data[129].value,
        })
      );
      return;
    }
    var g = bi.eE.data[126].value.split(",");
    g = g.slice(0, 10);
    for (var aB = 0; aB < g.length; aB++) {
      g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
    }
    if (g.length === 1 && g[0].length === 0) {
      g = [];
    }
    t.u(
      8,
      t.a44().aL2,
      new rz(23, {
        aMs: bi.eE.data[125].value,
        zi: g,
      })
    );
  };
  this.aOP = function (aL2, target) {
    t.u(
      4,
      aL2,
      new v(
        "Data Usage Information",
        "Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" +
          bJ.aP6 +
          S[26] +
          bJ.aP6 +
          S[29],
        false,
        [
          new w(S[2] + L(37), function () {
            t.u(aL2);
          }),
          new w("✅ Accept", function () {
            bi.rB.rC(140, 1);
            if (target === 0) {
              t.u(2, aL2);
            } else {
              t.u(8, aL2, new rz(target));
            }
          }),
        ]
      )
    );
  };
  this.aP7 = function () {
    for (var aB = 0; aB < 7; aB++) {
      this.sK[aB] = bF.v5.v9(bG.oj(5));
    }
    this.sK[1] = "[" + this.sK[1] + "]";
    if (t.ry === 5) {
      t.a44().aFB.rC(this.sK);
      t.a44().resize();
    }
  };
}
function aLI() {
  var aMP;
  var aMQ;
  var aP8;
  function q1() {
    aMP = new tb(L(282), [new w(S[2] + L(37), aMS)]);
    if (aD.data.mapType === 2) {
      b5.dX();
    }
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    b5.tK();
    t.aLU()[19] = null;
    t.a0D();
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    aP9(pc);
    aPA(pc);
    aPB(pc);
    aPC(pc);
    aPD(pc);
    aPE(pc);
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    aLo.pV(
      new tW(
        {
          ta: [L(364), L(365), L(366)],
          value: aD.data.mapType,
        },
        function (e2) {
          aD.data.mapType = e2;
          if (e2 === 2) {
            b5.dX();
            aD.data.canvas = null;
          } else {
            aD.data.passableWater = aD.data.passableMountains = 1;
            b5.tK();
          }
          t.u(20);
        }
      )
    );
    if (aD.data.mapType >= 2) {
      aLo.pY(new rO());
      aLo.pY(
        new r8(
          {
            value: aD.data.passableWater,
          },
          L(367),
          function (value) {
            aD.data.passableWater = value;
          }
        )
      );
      aLo.pY(
        new r8(
          {
            value: aD.data.passableMountains,
          },
          L(368),
          function (value) {
            aD.data.passableMountains = value;
          }
        )
      );
    }
    pc.push(aLo);
  }
  function aP9(pc) {
    if (aD.data.mapType !== 0) {
      return;
    }
    var aLo = new pK();
    aLo.pN(L(282));
    var ta = [];
    for (var aB = 0; aB < bR.vU.aJz.length; aB++) {
      ta.push(bR.vU.vV[bR.vU.aJz[aB]].name);
    }
    var tX = function (e2) {
      aD.data.mapProceduralIndex = e2;
      aPF();
    };
    aLo.pV(
      new tW(
        {
          ta: ta,
          value: aD.data.mapProceduralIndex,
        },
        tX
      )
    );
    pc.push(aLo);
  }
  function aPA(pc) {
    if (aD.data.mapType !== 1) {
      return;
    }
    var aLo = new pK();
    aLo.pN(L(282));
    var ta = [];
    for (var aB = 0; aB < bR.vU.aK0.length; aB++) {
      ta.push(bR.vU.vV[bR.vU.aK0[aB]].name);
    }
    var tX = function (e2) {
      aD.data.mapRealisticIndex = e2;
      aPF();
    };
    aLo.pV(
      new tW(
        {
          ta: ta,
          value: aD.data.mapRealisticIndex,
        },
        tX
      )
    );
    pc.push(aLo);
  }
  function aPB(pc) {
    if (aD.data.mapType !== 2) {
      return;
    }
    var aLo = new pK();
    aLo.pN(L(282));
    aLo.pY(
      new rE([
        new w(L(369), function () {
          b5.aG8();
          return true;
        }).button,
      ])
    );
    pc.push(aLo);
  }
  function aPC(pc) {
    aP8 = new pK();
    aP8.pN(L(370));
    if (aD.data.mapType !== 2) {
      aPG();
    } else if (aD.data.canvas) {
      aPH();
    }
    pc.push(aP8);
  }
  function aPD(pc) {
    if (aD.data.mapType !== 0) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[99]);
    var qV = new qW(
      {
        e2: -1,
        value: aD.data.mapSeed,
      },
      1,
      0,
      function (e) {
        var aIz = Math.abs(Math.floor(e.target.value)) % 16384;
        if (aD.data.mapSeed === aIz) {
          return;
        }
        aD.data.mapSeed = aIz;
        aPF();
      }
    );
    var aLx = new w(L(275), function (e) {
      var aIz = Math.floor(Math.random() * 16384);
      if (aD.data.mapSeed === aIz) {
        return;
      }
      qV.e.value = aD.data.mapSeed = aIz;
      aPF();
      return true;
    });
    aLo.pY(qV);
    aLo.pY(new rE([aLx.button]));
    pc.push(aLo);
  }
  function aPE(pc) {
    if (aD.data.mapType !== 2) {
      return;
    }
    var aLo = new pK();
    aLo.pN(L(371));
    var qV = new qW(
      {
        e2: -1,
        value: aD.data.mapName,
      },
      0,
      0,
      function (e) {
        aD.data.mapName = e.target.value = e.target.value.slice(0, 20);
      }
    );
    aLo.pY(qV);
    pc.push(aLo);
  }
  function aPF() {
    aPI();
    aPG();
  }
  function aPI() {
    if (aP8.pM.lastChild) {
      aP8.pM.removeChild(aP8.pM.lastChild);
    }
  }
  function aPG() {
    var aPJ = bR.a3x(aD.data);
    aD.data.canvas = bR.aJ4(aPJ, aD.data.mapSeed).ve;
    aPH();
  }
  function aPH() {
    var a1t = aD.data.canvas;
    a1t.style.width = S[1];
    aP8.pM.appendChild(a1t);
  }
  this.aGF = function (a1t) {
    if (aD.data.canvas) {
      aPI();
    }
    aD.data.canvas = a1t;
    aPH();
  };
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function v(title, pU, aPK, aOY) {
  var aLV;
  var aNd;
  function dX() {
    if (!aOY) {
      aOY = [
        new w(S[2] + L(37), function () {
          t.a0D();
        }),
      ];
    }
    aLV = new tb(title, aOY);
    aNd = new rD(aLV.th, pU);
    if (aPK) {
      b9.ph.textAlign(aLV.th.style, 1);
    }
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aNd.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLL() {
  var aMP;
  var aMQ;
  var aMR;
  function q1() {
    aMP = new tb(L(286), [new w(S[2] + L(37), aMS)]);
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    aMU();
    aMY();
    t.aLU()[19] = null;
    t.a0D();
  }
  function aMY() {
    if (aD.data.playerNamesType === 2 && b9.pq.a1X(aD.data.playerNamesData).length === 1) {
      aD.data.playerNamesType = 0;
    }
    if (aD.data.playerNamesType !== 2) {
      aD.data.playerNamesData = null;
    }
  }
  function aMU() {
    if (aD.data.playerNamesType === 2) {
      b9.pq.a1l(aMR.u8(), aD.data.playerNamesData, 20);
    }
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    aMX(pc);
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    aLo.pV(
      new tW(
        {
          ta: [L(287), L(288), L(253)],
          value: aD.data.playerNamesType,
        },
        function (e2) {
          aMU();
          aD.data.playerNamesType = e2;
          t.u(23);
        }
      )
    );
    aLo.pY(new rO());
    aLo.pY(
      new r8(
        {
          value: aD.data.selectableName,
        },
        L(372),
        function (value) {
          aD.data.selectableName = value;
        }
      )
    );
    pc.push(aLo);
  }
  function aMX(pc) {
    if (aD.data.playerNamesType !== 2) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[18]);
    aMR = new tz(0, 1, 0, 1);
    if (!aD.data.playerNamesData || aD.data.playerNamesData.length !== aD.ee) {
      aD.data.playerNamesData = new Array(aD.ee);
      aD.data.playerNamesData.fill("");
    }
    aMR.u6(b9.qh.a3H(aD.data.playerNamesData, 1, '"'));
    aLo.pY(aMR);
    pc.push(aLo);
  }
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function aL6() {
  var aMP;
  var u4;
  function q1() {
    aMP = new tb(L(373), [
      new w(S[2] + L(37), function () {
        t.aLT(1);
      }),
      new w(L(374), function () {
        u4.u9();
      }),
      new w(L(375), function () {
        u4.uA();
      }),
      new w(L(376), function () {
        u4.clear();
      }),
      new w(L(377), function () {
        aPL();
      }),
    ]);
    u4 = new tz(L(378));
    aMP.th.appendChild(u4.e);
  }
  this.show = function (aPM) {
    this.aPN(aPM);
    aMP.show();
    this.resize();
  };
  this.aPN = function (aPM) {
    if (aD.z4 === 0) {
      if (aPM) {
        u4.u6(aPM);
      } else if (b8.ox.a3n.length) {
        u4.u6(b8.ox.a3n);
      }
      return;
    }
    if (!aD.gq) {
      b8.ox.a3n = b8.a3o.yX();
    }
    u4.u6(b8.aPO(b8.ox.a3n));
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    u4.resize();
  };
  function aPL() {
    t.x();
    var pO = b8.aPP(u4.u8());
    if (aD.z4 && pO.length > 0 && pO === b8.ox.a3n) {
      b8.aPQ();
      return;
    }
    if (!b8.aGf.vP(pO)) {
      return;
    }
    b8.aPQ();
  }
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    } else {
      aPL();
    }
  };
  q1();
}
function aL5() {
  var aLV;
  var aLW;
  var pc;
  var aAp;
  function dX() {
    aLV = new tb(L(379), [
      new w(S[2] + L(37), aPR),
      new w(L(380), function () {
        t.x();
        bi.rB.um();
        t.u(2);
      }),
    ]);
    aLY();
    aLW = new pa(aLV.th, pc);
  }
  function aPR() {
    if (aAp !== bi.eE.data[12].value) {
      b6.dX();
      b6.aAo();
      var eG = be.eG;
      t.u(
        4,
        1,
        new v(L(381), L(382), false, [
          new w(S[2] + L(37), function () {
            t.u(1);
          }),
          new w(
            S[67],
            function () {
              if (be.eG < eG + 1500) {
                return;
              }
              a0.a1.a2();
            },
            bA.nA
          ),
        ])
      );
      return;
    }
    t.u(1);
  }
  function aLY() {
    var aLo;
    pc = [];
    aLo = new pK();
    aLo.pN(L(383));
    aLo.pP(L(384));
    pc.push(aLo);
    aPS(pc);
    aPT(pc);
    aLo = new pK();
    aLo.pN(L(23));
    aLo.pV(
      new tW(
        {
          ta: ["1", "2"],
          value: aZ.aEN - 1,
        },
        function (aB) {
          aZ.aEN = aB + 1;
        }
      )
    );
    pc.push(aLo);
    aLo = new pK();
    aLo.pN(L(385));
    bi.eE.data[1].ta = [L(386), L(387), L(388), L(389)];
    aLo.pV(new tW(bi.eE.data[1]));
    pc.push(aLo);
    aLo = new pK();
    aLo.pN(L(390));
    bi.eE.data[9].ta = [L(387), L(391), L(392)];
    aLo.pV(new tW(bi.eE.data[9]));
    pc.push(aLo);
    aLo = new pK();
    aLo.pN(L(393));
    bi.eE.data[11].ta = [L(394), L(9), L(395)];
    aLo.pV(new tW(bi.eE.data[11]));
    pc.push(aLo);
    aLo = new pK();
    aLo.pN(L(396));
    aLo.pY(new r8(bi.eE.data[2]));
    pc.push(aLo);
    aLo = new pK();
    aLo.pN(L(397));
    aLo.pY(new r8(bi.eE.data[7]));
    pc.push(aLo);
    aLo = new pK();
    aLo.pN(L(398));
    aLo.pY(new r8(bi.eE.data[8]));
    pc.push(aLo);
    aLo = new pK();
    aLo.pN(L(399));
    aLo.pY(new qW(bi.eE.data[5]));
    pc.push(aLo);
    aLo = new pK();
    aLo.pN(L(400));
    aLo.pY(new r8(bi.eE.data[13], L(401)));
    aLo.pY(new r8(bi.eE.data[14], L(402)));
    pc.push(aLo);
  }
  function aPT(pc) {
    var aLo = new pK();
    aLo.pN(L(403));
    var aPU = [];
    aLo.pY(
      new rE([
        new w(L(404), function (e) {
          bW.aPV();
          for (var aB = 0; aB < aPU.length; aB++) {
            aPU[aB].e.value = bW.aAF[aB];
          }
          b9.ph.a2M(e);
          return true;
        }).button,
      ])
    );
    for (var aB = 0; aB < bW.aPW.length; aB++) {
      aLo.pP(bW.aPW[aB]);
      for (var f0 = 0; f0 < 2; f0++) {
        var e2 = 2 * aB + f0;
        var qV = new qW({
          value: bW.aAF[e2],
          e2: -1,
        });
        qV.e.aPX = e2;
        aPU.push(qV);
        qV.e.addEventListener(S[86], function (e) {
          e.preventDefault();
          var code = e.code;
          e.target.value = code;
          bW.aPY(e.target.aPX, code);
        });
        f0 && (qV.e.style.marginLeft = "4%");
        qV.e.style.width = "48%";
        aLo.pY(qV);
      }
    }
    pc.push(aLo);
  }
  function aPS(pc) {
    var aLo = new pK();
    aLo.pN(L(405));
    var g = b6.data.aAx();
    aLo.pV(
      new tW(
        {
          ta: g,
          value: b6.data.aB1(g),
        },
        function (e2) {
          bi.rB.rC(12, g[e2].split(":")[0]);
          return true;
        }
      )
    );
    pc.push(aLo);
  }
  this.show = function () {
    aAp = bi.eE.data[12].value;
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aLW.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLM() {
  var aMP;
  var aMQ;
  var aMR;
  function q1() {
    aMP = new tb(L(406), [new w(S[2] + L(37), aMS)]);
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    aMU();
    aMY();
    t.aLU()[19] = null;
    t.a0D();
  }
  function aMU() {
    if (aD.data.spawningType === 2) {
      b9.pq.a1j(aMR.u8(), aD.data.spawningData, bR.aGH - 1);
    }
  }
  function aMY() {
    if (aD.data.spawningType === 2) {
      if (!b9.pq.a1X(aD.data.spawningData)) {
        aD.data.spawningType = 0;
      }
    }
    if (aD.data.spawningType !== 2) {
      aD.data.spawningData = null;
    }
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    aMW(pc);
    aMX(pc);
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    var ta = [L(275), L(285), L(253)];
    var value = aD.data.spawningType;
    if (aD.data.gameMode === 0) {
      ta.splice(1, 1);
      if (value > 0) {
        value = 1;
      }
    }
    aLo.pV(
      new tW(
        {
          ta: ta,
          value: value,
        },
        function (e2) {
          aMU();
          aD.data.spawningType = e2;
          if (aD.data.gameMode === 0 && e2 === 1) {
            aD.data.spawningType = 2;
          }
          if (aD.data.spawningType === 2 && !aD.data.spawningData) {
            aD.data.spawningData = new Uint16Array(2 * aD.ee);
          }
          t.u(24);
        }
      )
    );
    aLo.pY(new rO());
    aLo.pY(
      new r8(
        {
          value: aD.data.selectableSpawn,
        },
        L(407),
        function (value) {
          aD.data.selectableSpawn = value;
        }
      )
    );
    pc.push(aLo);
  }
  function aMW(pc) {
    var aLo = new pK();
    aLo.pN(S[99]);
    aLo.pY(
      new qW(
        {
          e2: -1,
          value: aD.data.spawningSeed,
        },
        1,
        0,
        function (e) {
          var value = Math.abs(Math.floor(e.target.value)) % 16384;
          e.target.value = aD.data.spawningSeed = value;
        }
      )
    );
    pc.push(aLo);
  }
  function aMX(pc) {
    if (aD.data.spawningType !== 2) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[18]);
    aMR = new tz(0, 1, 0, 1);
    aMR.u6(b9.qh.a3H(aD.data.spawningData, 2));
    aLo.pY(aMR);
    pc.push(aLo);
  }
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function aL4() {
  var aLV;
  var aOV;
  var aOW;
  function dX() {
    aOW = [
      new w(L(408), function () {
        aPZ(0);
      }),
      new w(L(308), function () {
        t.u(16);
      }),
      new w(L(363), function () {
        t.u(17);
      }),
      new w(
        L(409),
        function () {
          t.y.aNM();
        },
        0,
        0,
        1
      ),
      new w(L(373), function () {
        t.u(3, 1);
      }),
      new w(L(410), function () {
        t.u(18);
      }),
      new w(L(379), function () {
        aPZ(1);
      }),
      new w(L(411), function () {
        aPa();
      }),
      new w(L(412), function () {
        aPb();
      }),
      new w(L(413), function () {
        aPc();
      }),
      new w(L(414), function () {
        a02();
      }),
    ];
    var tc = [
      new w(S[2] + L(37), function () {
        t.y.aAt();
      }),
    ];
    aPd();
    if (a0.id === 1 && a0.dp >= 5) {
      aOW.push(
        new w(L(415), function () {
          a0.a1.a03();
        })
      );
    }
    aLV = new tb(L(416), tc);
    aOV = new qG(aOW, aLV.th);
  }
  function aPd() {
    if (aa.a0E() !== 8) {
      return;
    }
    aOW.unshift(
      new w(L(296), function () {
        t.u(30);
      })
    );
    aOW.unshift(
      new w(
        L(417),
        function () {
          if (bc.aPe >= 2) {
            t.x();
            bd.a19();
            be.df = true;
          }
        },
        0,
        1
      )
    );
    aOW.unshift(
      new w(
        L(418),
        function () {
          if (!aD.gq && aM.pI(aD.eR)) {
            b7.h3.oP();
            t.x();
            if (aM.gr) {
              aM.a19();
            }
          }
        },
        0,
        1
      )
    );
    aOW.unshift(
      new w(
        L(419),
        function () {
          if (!aD.gq && av.hR(aD.eR)) {
            bU.a4O(2);
            b7.h3.hN();
            t.x();
            if (aM.gr) {
              aM.a19();
            }
          }
        },
        0,
        1
      )
    );
  }
  function aPZ(id) {
    if (a0.id === 0 && !bi.eE.data[140].value) {
      t.y.aOP(t.ry, id === 0 ? 16 : 0);
      return;
    }
    if (id === 0) {
      t.u(8, 1, new rz(16));
    } else {
      t.u(2);
    }
  }
  function aPa() {
    var ro = [
      S[101],
      L(420),
      L(421),
      "YouTube Tutorial",
      "Discord",
      L(422),
      L(301),
      L(423),
      L(304),
      L(424),
      "Terms",
      "Privacy",
    ];
    var a2I = [
      bJ.aMN,
      bJ.aBE,
      bJ.a07,
      "https://www.youtube.com/watch?v=6QBmA9N1668",
      bJ.aBF,
      bJ.aPf,
      bJ.aPg,
      bJ.zp,
      bJ.aPh,
      bJ.aPi,
      bJ.aPj,
      bJ.aP6,
    ];
    if (a0.id === 1) {
      ro.splice(2, 1);
      ro.splice(0, 1);
      a2I.splice(2, 1);
      a2I.splice(0, 1);
    } else if (a0.id === 2) {
      ro.splice(1, 1);
      ro.splice(0, 1);
      a2I.splice(1, 1);
      a2I.splice(0, 1);
    }
    t.u(
      4,
      1,
      new v(L(411), b9.ph.a2H(ro, a2I), false, [
        new w(S[2] + L(37), function () {
          t.u(1);
        }),
      ])
    );
  }
  function aPb() {
    t.u(
      4,
      1,
      new v(L(412), l.dp + "<br><a href='" + bJ.aPf + S[26] + bJ.aPf + S[29], true, [
        new w(S[2] + L(37), function () {
          t.u(1);
        }),
      ])
    );
  }
  function aPc() {
    t.u(
      4,
      1,
      new v(L(413), L(425) + S[11] + L(426), false, [
        new w(S[2] + L(37), function () {
          t.u(1);
        }),
        new w(L(427), function () {
          a0.a1.a01();
          t.u(1);
        }),
      ])
    );
  }
  function a02() {
    a0.a1.a02();
    t.u(
      4,
      1,
      new v(L(428), L(429) + " <a href='" + bJ.aP6 + S[26] + bJ.aP6 + S[29], false, [
        new w(S[2] + L(37), function () {
          t.u(1);
        }),
      ])
    );
  }
  this.show = function () {
    a0.a1.setState(12);
    aLV.show();
    this.resize();
    this.ir();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aOV.resize();
  };
  this.ir = function () {
    if (aa.a0E() !== 8) {
      return;
    }
    if (bc.aPe >= 2) {
      if (aOW[2].q0 === bA.mz) {
        aOW[2].q2(0);
      }
    } else {
      if (aOW[2].q0 !== bA.mz) {
        aOW[2].q2(bA.mz);
      }
    }
    if (!aD.gq && aM.pI(aD.eR)) {
      if (aOW[1].q0 === bA.mz) {
        aOW[1].q2(0);
      }
    } else {
      if (aOW[1].q0 !== bA.mz) {
        aOW[1].q2(bA.mz);
      }
    }
    if (!aD.gq && av.hR(aD.eR)) {
      if (aOW[0].q0 === bA.mz) {
        aOW[0].q2(0);
      }
    } else {
      if (aOW[0].q0 !== bA.mz) {
        aOW[0].q2(bA.mz);
      }
    }
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function aLQ() {
  var aMP;
  var aMQ;
  var aMR;
  function q1() {
    aMP = new tb(L(291), [new w(S[2] + L(37), aMS)]);
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    aMU();
    if (aD.data.sResourcesType !== 2) {
      aD.data.sResourcesData = null;
    }
    t.aLU()[19] = null;
    t.a0D();
  }
  function aMU() {
    if (aD.data.sResourcesType === 2) {
      b9.pq.a1j(aMR.u8(), aD.data.sResourcesData, 2047);
    }
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    aMW(pc);
    aMX(pc);
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    aLo.pV(
      new tW(
        {
          ta: [L(251), L(252), L(253)],
          value: aD.data.sResourcesType,
        },
        function (e2) {
          aMU();
          if (e2 === 2 && !aD.data.sResourcesData) {
            aD.data.sResourcesData = new Uint16Array(aD.ee);
          }
          aD.data.sResourcesType = e2;
          t.u(28);
        }
      )
    );
    pc.push(aLo);
  }
  function aMW(pc) {
    if (aD.data.sResourcesType !== 1) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[37]);
    aLo.pY(
      new qW(
        {
          e2: -1,
          value: aD.data.sResourcesValue,
        },
        1,
        0,
        function (e) {
          var value = bK.pF(Math.floor(e.target.value), 0, 2047);
          e.target.value = aD.data.sResourcesValue = value;
        }
      )
    );
    pc.push(aLo);
  }
  function aMX(pc) {
    if (aD.data.sResourcesType !== 2) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[18]);
    aMR = new tz(0, 1, 0, 1);
    aMR.u6(b9.qh.a3H(aD.data.sResourcesData, 2));
    aLo.pY(aMR);
    pc.push(aLo);
  }
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function aLO() {
  var aMP;
  var aMQ;
  var aMR;
  function q1() {
    aMP = new tb(L(289), [new w(S[2] + L(37), aMS)]);
    aMQ = new pa(aMP.th, aMT());
  }
  function aMS() {
    aMU();
    if (aD.data.tIncomeType !== 2) {
      aD.data.tIncomeData = null;
    }
    t.aLU()[19] = null;
    t.a0D();
  }
  function aMU() {
    if (aD.data.tIncomeType === 2) {
      b9.pq.a1j(aMR.u8(), aD.data.tIncomeData, 255);
    }
  }
  function aMT() {
    var pc = [];
    aMV(pc);
    aMW(pc);
    aMX(pc);
    return pc;
  }
  function aMV(pc) {
    var aLo = new pK();
    aLo.pN(L(250));
    aLo.pV(
      new tW(
        {
          ta: [L(251), L(252), L(253)],
          value: aD.data.tIncomeType,
        },
        function (e2) {
          aMU();
          if (e2 === 2 && !aD.data.tIncomeData) {
            aD.data.tIncomeData = new Uint8Array(aD.ee);
            aD.data.tIncomeData.fill(32);
          }
          aD.data.tIncomeType = e2;
          t.u(26);
        }
      )
    );
    pc.push(aLo);
  }
  function aMW(pc) {
    if (aD.data.tIncomeType !== 1) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[37]);
    aLo.pY(
      new qW(
        {
          e2: -1,
          value: aD.data.tIncomeValue,
        },
        1,
        0,
        function (e) {
          var value = bK.pF(Math.floor(e.target.value), 0, 255);
          e.target.value = aD.data.tIncomeValue = value;
        }
      )
    );
    pc.push(aLo);
  }
  function aMX(pc) {
    if (aD.data.tIncomeType !== 2) {
      return;
    }
    var aLo = new pK();
    aLo.pN(S[18]);
    aMR = new tz(0, 1, 0, 1);
    aMR.u6(b9.qh.a3H(aD.data.tIncomeData, 4));
    aLo.pY(aMR);
    pc.push(aLo);
  }
  this.show = function () {
    aMP.show();
    this.resize();
  };
  this.r0 = function () {
    aMP.r0();
  };
  this.resize = function () {
    aMP.resize();
    aMQ.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aMP.ti[0].pz();
    }
  };
  q1();
}
function aLG() {
  var aLV;
  var aLW;
  function dX() {
    aLV = new tb(L(410), [
      new w(S[2] + L(37), function () {
        t.a0D();
      }),
    ]);
    aLW = new pa(aLV.th, aLY());
  }
  function aLY() {
    var pc = [];
    pc.push(aPk());
    return pc;
  }
  function aPk() {
    var aLo = new pK();
    aLo.pN(L(430));
    var aPl = new qW({
      value: bi.eE.data[105].value,
      e2: -1,
    });
    aPl.e.readOnly = true;
    aLo.pY(aPl);
    aLo.pN(L(333), S[19]);
    var aPm = new qW(bi.eE.data[148]);
    var aPm = new qW(bi.eE.data[148], 0, undefined, function (e) {
      aLr(bi.eE.data[149].value, e.target.value);
    });
    aLo.pY(aPm);
    aLo.pN(L(337), S[19]);
    var aPn = new qW(bi.eE.data[149], 1, undefined, function (e) {
      aLr(e.target.value, bi.eE.data[148].value);
    });
    aLo.pY(aPn);
    var aLu = function () {
      aPo.button.textContent = L(172);
      aPm.e.readOnly = false;
      aPn.e.readOnly = false;
      aLs.q2(1);
      aLs.button.style.color = bA.mn;
    };
    var aPo = new w(L(172), function (e) {
      if (e.textContent === L(172)) {
        e.textContent = L(173);
        aPm.e.readOnly = true;
        aPn.e.readOnly = true;
        aLs.q2(0);
        aLs.button.style.color = bA.nj;
        bi.rB.rC(149, aPn.e.value);
        aLr(bi.eE.data[149].value, bi.eE.data[148].value);
      } else {
        aLu();
      }
      return true;
    });
    aLo.pY(new rE([aPo.button]));
    var aLs = new w(
      L(14),
      function (e) {
        if (aPm.e.readOnly && az.y.aLt(0)) {
          b9.ph.a2M(e);
          aLu();
          az.aLv.aLw({
            s0: 0,
            rw: bi.eE.data[148].value,
            value: parseInt(bi.eE.data[149].value, 10),
          });
        }
        return true;
      },
      1
    );
    var pQ = aLo.pP();
    aLo.pP(L(431)).style.fontWeight = S[36];
    var aLr = function (f9, pO) {
      f9 = b9.g2.a2r(f9, 2, 1000000);
      var aLy = Math.max(1, 1 + Math.floor(0.01 * (f9 - 100)));
      pQ.textContent = L(174, [f9, bi.eE.data[105].value, aLy, pO, f9 - aLy]);
    };
    aLo.pY(new rE([aLs.button]));
    aLr(bi.eE.data[149].value, bi.eE.data[148].value);
    return aLo;
  }
  this.show = function () {
    aLV.show();
    this.resize();
  };
  this.r0 = function () {
    aLV.r0();
  };
  this.resize = function () {
    aLV.resize();
    aLW.resize();
  };
  this.a16 = function (f2) {
    if (f2 === 2) {
      aLV.ti[0].pz();
    }
  };
  dX();
}
function bt() {
  if (typeof Math.log2 !== S[34]) {
    Math.log2 = function (eo) {
      return Math.log(eo) / Math.log(2);
    };
  }
  if (typeof Math.log10 !== S[34]) {
    Math.log10 = function (eo) {
      return Math.log(eo) / Math.log(10);
    };
  }
  if (typeof Math.sign !== S[34]) {
    Math.sign = function (eo) {
      return eo > 0 ? 1 : eo < 0 ? -1 : 0;
    };
  }
}
function ce() {
  var aPp = false;
  var a87;
  var aPq;
  var aPr;
  var aPs;
  function aPt() {
    aPp = true;
    a87 = -1;
    aPq = new Array(4);
    for (var aB = 3; aB >= 0; aB--) {
      aPq[aB] = false;
    }
    var wV = Math.floor(1 + 0.02 * h.min);
    aPr = new Array(4);
    aPs = new Array(4);
    aPs[1] = aPs[3] = aPr[0] = aPr[2] = 0;
    aPs[0] = aPr[3] = -wV;
    aPr[1] = aPs[2] = wV;
  }
  this.a14 = function (e2) {
    if (aD.z4 === 0) {
      return;
    }
    if (!aH.mV()) {
      return;
    }
    if (!aPp) {
      aPt();
    }
    aPq[e2] = true;
    if (a87 === -1) {
      a87 = setInterval(aPu, 20);
      aPu();
    }
  };
  this.a17 = function (e2) {
    if (aD.z4 === 0) {
      return;
    }
    if (!aPp) {
      aPt();
    }
    aPq[e2] = false;
    if (a87 === -1) {
      return;
    }
    var aPv = false;
    for (var aB = 3; aB >= 0; aB--) {
      aPv = aPv || aPq[aB];
    }
    if (!aPv) {
      this.mL();
    }
  };
  this.mL = function () {
    if (!aPp) {
      return;
    }
    if (a87 === -1) {
      return;
    }
    for (var aB = 3; aB >= 0; aB--) {
      aPq[aB] = false;
    }
    clearInterval(a87);
    a87 = -1;
  };
  function aPu() {
    if (a87 === -1) {
      return;
    }
    if (aD.z4 === 0 || !aH.mV()) {
      aq.mL();
      return;
    }
    var aPv = false;
    for (var aB = 3; aB >= 0; aB--) {
      if (aPq[aB]) {
        aPv = true;
        iH += aPr[aB];
        iJ += aPs[aB];
        af.a0Y(aPr[aB], aPs[aB]);
        aS.a7p();
      }
    }
    if (!aPv) {
      aq.mL();
      return;
    }
    be.df = true;
  }
}
function cf() {
  this.y = new aPw();
  this.lU = new aPx();
  this.o6 = new aPy();
  this.aD1 = new aPz();
  this.aAq = new aQ0();
  this.aLv = new aQ1();
  this.oi = new aQ2();
  this.aNk = new aQ3();
  this.a5c = new aQ4();
  this.aQ5 = new aQ6();
  this.aQ7 = new aQ8();
  this.aQ9 = new aQA();
  this.aQB = new aQC();
  this.dX = function () {
    this.y.dX();
  };
}
function aPw() {
  this.aEQ = 5;
  var aQD;
  this.aQE = null;
  var aQF;
  var aQG = 15000;
  this.a0J = 0;
  this.a0C = 0;
  this.dX = function () {
    this.aQE = new Array(this.aEQ);
    var a5n = ".territorial.io";
    this.aQE[0] = S[21];
    var aIz = ax.aJL(0);
    ax.a3d(0);
    for (var aB = 1; aB < this.aEQ; aB++) {
      this.aQE[aB] = aK.yd() + a5n;
    }
    ax.a3d(aIz);
    aQD = new Array(this.aEQ);
    aQF = new Array(this.aEQ);
    for (aB = this.aEQ - 1; aB >= 0; aB--) {
      aQF[aB] = {
        aPp: false,
        eG: 0,
        aQH: false,
      };
    }
    this.aER(0, 0);
  };
  this.aQI = function (aB) {
    return aQD[aB];
  };
  this.ir = function () {
    for (var aB = this.aEQ - 1; aB >= 0; aB--) {
      if (this.aLt(aB) && be.eG > aQF[aB].eG + aQG) {
        az.o6.aQJ(aB, aQF[aB].aQH);
      }
    }
    if (!this.aLt(0) && be.eG > aQF[0].eG + 8000) {
      aQF[0].eG = be.eG;
      this.aER(0, 0);
    }
  };
  this.aNg = function (id) {
    return this.aER(0, id) && this.aQK(0);
  };
  this.aER = function (a09, aL2) {
    if (!aQF[a09].aPp) {
      this.aQL(a09, aL2);
      return false;
    }
    if (aQD[a09].aQM()) {
      aQD[a09].aQN(aL2);
      return aQD[a09].aLt();
    }
    aQD[a09].r0();
    this.aQL(a09, aL2);
    return false;
  };
  this.aQL = function (a09, aL2) {
    aQF[a09].aPp = true;
    aQO(a09);
    aQD[a09] = new aQP();
    aQD[a09].dX(a09, aL2);
  };
  this.aQN = function (a09, aL2) {
    if (aQM(a09)) {
      aQD[a09].aQN(aL2);
    }
  };
  this.aQQ = function (a09, aL2) {
    az.aAq.aQR(a09);
  };
  this.aQK = function (aB) {
    return this.aLt(aB) && aQD[aB].aQK();
  };
  this.aQS = function (aB) {
    aQD[aB].aQS();
  };
  this.aLt = function (aB) {
    return aQF[aB].aPp && aQD[aB].aLt();
  };
  function aQM(aB) {
    return aQF[aB].aPp && aQD[aB].aQM();
  }
  this.send = function (a09, aC) {
    aQO(a09);
    aQD[a09].send(aC);
  };
  this.a0p = function (a09) {
    if (aa.a0E() === 8) {
      aQF[a09].aQH = true;
      az.lU.aQT = true;
    }
  };
  function aQO(a09) {
    aQF[a09].eG = be.eG;
    aQF[a09].aQH = false;
  }
  this.close = function (a09, aQU) {
    if (aQM(a09)) {
      aQD[a09].close(aQU);
    }
  };
  this.aQV = function (a09, aQU) {
    o.a0M(aQU);
    if (aQM(a09)) {
      aQD[a09].close(aQU);
    }
  };
  this.a0O = function (aQU) {
    for (var aB = this.aEQ - 1; aB >= 0; aB--) {
      this.close(aB, aQU);
    }
  };
  this.aQW = function (a09, aQU) {
    for (var aB = this.aEQ - 1; aB >= 0; aB--) {
      if (aB !== a09) {
        this.close(aB, aQU);
      }
    }
  };
  this.a3p = function () {
    this.close(this.a0J, 3246);
  };
  this.aQX = function (a09, e) {
    aQD[a09].r0();
    o.a08(a09, e.code);
  };
}
function aPx() {
  this.aQT = false;
  this.ir = function () {
    if (be.jt() % 250 !== 249) {
      return;
    }
    if (aD.gq) {
      return;
    }
    az.aAq.aQY(+(this.aQT && ag.lm[aD.eR]), aQZ());
    this.aQT = false;
  };
  function aQZ() {
    return al.jx + bM.y.ov;
  }
}
function aQ4() {
  this.aQa = function (a09, aC) {
    bG.dX(aC);
    if (bG.size === 0) {
      az.y.aQV(a09, 3205);
      return;
    }
    if (bG.oj(1) === 0) {
      aQb(a09);
    } else {
      aQc(a09);
    }
    be.aQd();
  };
  function aQb(a09) {
    var aQe = bG.oj(6);
    if (aQe === 0) {
      aQf(a09);
    } else if (aQe === 2) {
      az.aQ5.aQg(a09);
    } else if (aQe === 3 || aQe === 4) {
      aw.dX();
    } else if (aQe === 9) {
      az.aQ7.aQh(a09);
    } else if (aQe === 10) {
      az.aQ9.aQi();
    } else if (aQe === 11) {
      az.aQ7.aQj(a09);
    } else if (aQe === 12) {
      az.aQ9.aQk();
    } else if (aQe === 13) {
      az.aQB.aQl();
    } else if (aQe === 14) {
      az.aQB.aQm();
    } else if (aQe === 15) {
      az.aQ7.aQn();
    } else if (aQe === 16) {
      az.aQ5.aQo(a09);
    } else if (aQe === 17) {
      az.aQ5.aQp(a09);
    } else if (aQe === 19) {
      az.aQ5.aQq(a09);
    }
  }
  function aQf(a09) {
    if (a09 !== 0) {
      return;
    }
    if (aa.a0E() === 8) {
      return;
    }
    t.y.aP7();
    var aQr = bG.oj(12);
    var aQs = bG.oj(6);
    var g = new Array(aQr);
    for (var aB = 0; aB < aQr; aB++) {
      g[aB] = bG.oj(aQs);
    }
    aT.a8D(g);
  }
  this.aQt = function (aC) {
    bG.dX(aC);
    bG.e2 = 1;
    var aQe = bG.oj(6);
    if (aQe === 3) {
      aQu();
    } else {
      aQv();
    }
  };
  this.aQw = function () {
    bG.e2 = 1;
    var aQe = bG.oj(6);
    var aQx = bG.oj(10);
    if (az.y.a0C === aQx) {
      az.y.a0J = aQx;
      return false;
    }
    az.y.close(az.y.a0C, 3247);
    az.y.a0J = aQx;
    aw.aBx = bG.oj(10);
    aw.aEk = bG.oj(aQe === 3 ? 9 : 1);
    if (az.y.aER(aQx, 5)) {
      az.o6.aEr();
    }
    return true;
  };
  function aQu() {
    bG.e2 += 20;
    var ek = (aD.data = new a3X());
    var aQy = aQz(9);
    var aC2 = (ek.humanCount = bG.oj(9) + 1);
    ek.selectableSpawn = ek.gameMode === 1 || aC2 < 100;
    ek.colorsData = new Uint32Array(aC2);
    ek.playerNamesData = new Array(aC2);
    for (var aB = 0; aB < aC2; aB++) {
      bG.e2++;
      ek.colorsData[aB] = bG.oj(18);
      ek.playerNamesData[aB] = bF.v5.v9(bG.oj(5));
    }
    aa.aEc();
    bR.a7(aQy, ek.mapSeed);
    aD.gameInit();
  }
  function aQv() {
    bG.e2 += 20;
    var ek = (aD.data = new a3X());
    var aQy = aQz(1);
    var aC2 = (ek.humanCount = 2);
    ek.selectableSpawn = 1;
    ek.elo = new Uint16Array(aC2);
    ek.colorsData = new Uint32Array(aC2);
    ek.playerNamesData = new Array(aC2);
    for (var aB = 0; aB < aC2; aB++) {
      bG.e2++;
      ek.colorsData[aB] = bG.oj(18);
      ek.elo[aB] = bG.oj(14);
      ek.playerNamesData[aB] = bF.v5.v9(bG.oj(5));
    }
    aa.aEc();
    bR.a7(aQy, ek.mapSeed);
    aD.gameInit();
  }
  function aQz(aR0) {
    var ek = aD.data;
    ek.selectedPlayer = bG.oj(aR0);
    ek.spawningSeed = bG.oj(14);
    var aBt = bG.oj(4);
    if (aBt < 7) {
      ek.gameMode = 1;
      ek.numberTeams = aBt + 2;
    } else if (aBt === 9) {
      ek.gameMode = ek.isZombieMode = 1;
      ek.numberTeams = 2;
    } else {
      ek.gameMode = 0;
      ek.battleRoyaleMode = aBt === 7 ? 0 : aBt === 10 ? 1 : 2;
    }
    ek.isContest = bG.oj(1);
    var aQy = bG.oj(6);
    ek.mapType = bR.aC0(aQy) ? 0 : 1;
    bR.aC1(ek, aQy);
    ek.mapSeed = bG.oj(14);
    return aQy;
  }
  function aQc(a09) {
    var aQe;
    var pm = aa.a0E();
    if (pm !== 8) {
      if (!aw.aEw()) {
        return;
      }
    }
    if (a09 !== az.y.a0J) {
      az.y.aQV(a09, 3244);
      return;
    }
    aQe = bG.oj(1);
    if (aQe === 0) {
      be.zD.aR1(bG.aC);
    } else {
      aR2();
    }
  }
  function aR2() {
    var aR3 = bG.oj(2);
    if (aR3 === 0) {
      aR4();
    } else if (aR3 === 1) {
      aR5();
    } else if (aR3 === 2) {
      aR6();
    } else {
      if (!l.a9 || l.aA) {
        return;
      }
      var eh = 3 * 60 * 3;
      bC.a7(1 + 6 + eh * 32);
      bC.a8(1, 0);
      bC.a8(6, 10);
      var aB;
      eh = Math.min(b7.o3.ol.length, eh);
      for (aB = 0; aB < eh; aB++) {
        bC.aR7(32, b7.o3.ol[aB]);
      }
      az.y.send(az.y.a0J, bC.aC);
    }
  }
  function aR4() {
    var o6 = bG.oj(9);
    if (ag.lm[o6] === 0 || ag.lm[aD.eR] === 0) {
      return;
    }
    var oK = bG.oj(10);
    aN.oJ(o6, aD.eR, oK);
    af.pG(o6, 1, oK);
  }
  function aR5() {
    var o6 = bG.oj(9);
    if (ag.lm[o6] === 0 || ag.lm[aD.eR] === 0) {
      return;
    }
    if (!b4.aIj(0, [o6], true)) {
      return;
    }
    aN.oa(o6, 1);
  }
  function aR6() {
    var o6 = bG.oj(9);
    var target = bG.oj(9);
    if (ag.lm[o6] === 0 || ag.lm[target] === 0 || ag.lm[aD.eR] === 0) {
      return;
    }
    if (!b4.aIj(1, [o6], true)) {
      return;
    }
    af.pG(o6, 3, 96);
    af.pG(target, 4, 96);
    aN.a5j(o6, target);
  }
}
function aQA() {
  this.aQi = function () {
    bi.y.ud();
    bi.rB.rC(105, bE.s1.s2(bE.s1.s3(5)));
    bi.rB.rC(106, bE.s1.s2(bE.s1.s3(8)));
    bi.rB.rC(109, bG.oj(30));
    bi.rB.rC(108, bi.eE.data[109].value);
    bi.rB.rC(111, bi.eE.data[109].value + 1);
    bi.rB.rC(107, 0);
    bi.rB.rC(110, "");
  };
  this.aQk = function () {
    if (bG.size < bC.aR8(1 + 6 + 5 + 3 + 3 + 3 + 8)) {
      az.y.aQV(0, 3254);
      return;
    }
    var data = {
      rx: bG.oj(30),
      uq: bG.oj(16),
      ur: bG.oj(30),
      us: bG.oj(30),
      ut: bG.oj(30),
      uu: bG.aR9(32),
      username: bF.v7.vP(5),
      uv: bF.v7.vP(3),
      uw: bF.v7.vP(3),
      ux: bG.aR9(32),
      uy: bG.aR9(32),
      uz: bG.oj(30),
      v0: bG.aR9(32),
      v1: bG.aR9(32),
      v2: bG.aR9(32),
      v3: bG.aR9(32),
      aM3: bG.aR9(32),
      aM4: bG.aR9(30),
      aMF: bG.aR9(32),
      aMG: bF.v7.vP(3),
      aM8: bG.aR9(2),
      aM9: bG.aR9(10),
      aM6: bF.v7.vP(8),
      aMA: bG.aR9(5),
      aLq: bG.oj(30),
      aM2: bG.oj(30),
      zV: bG.aR9(32),
      aMH: bG.oj(1),
      aMI: bG.oj(1),
    };
    if (data.aMH) {
      data.aMJ = bG.aR9(32);
      data.aMK = bG.oj(30);
      data.aML = bG.oj(30);
      data.aMM = bG.oj(1);
    }
    if (t.ry === 8) {
      if (t.a44().aNf === 25) {
        data.aLX = true;
        t.y.aLD = data;
        t.a44().aNu(25, false);
      } else {
        data.aLX = false;
        bi.rB.rC(160, +(data.aMH && data.aMM));
        data.rw = bi.eE.data[105].value;
        t.y.aLA = data;
        bi.rB.up(data);
        t.a44().aNu(16, true);
      }
    }
  };
}
function aQC() {
  this.aQl = function () {
    var aB;
    if (bG.size < bC.aR8(1 + 6 + 6 + 10)) {
      az.y.aQV(0, 3259);
      return;
    }
    var sH = bG.oj(6);
    var eh = bG.oj(10);
    var data = [];
    if (sH === 9 || sH === 10 || sH === 11) {
      for (aB = 0; aB < eh; aB++) {
        data.push([bG.oj(30), bF.v7.vP(5), bG.aR9(32), 0, bG.oj(30)]);
      }
      if (t.ry === 8) {
        t.a44().aNu(21, true, {
          sH: sH,
          data: data,
        });
      }
      return;
    }
    if (sH === 12) {
      for (aB = 0; aB < eh; aB++) {
        data.push([bG.oj(20), bG.oj(30), bG.oj(30), bG.aR9(32), bG.oj(30), bF.v7.vP(5), bF.v7.vP(5)]);
      }
      if (t.ry === 8) {
        t.a44().aNu(21, true, {
          sH: sH,
          data: data,
        });
      }
      return;
    }
    var hZ = bG.oj(16);
    if (
      !bG.aRA(
        1 +
          6 +
          6 +
          10 +
          16 +
          hZ * 16 +
          eh *
            (sH === 0
              ? 30 + 5 + 16 + 30 + 30
              : sH === 1
              ? 16 + 3 + 16 + 5 + 31 + 30
              : sH === 2 || sH === 3
              ? 30 + 5 + 32 + 30 + 30
              : 4 * 30 + 32 + 30 + 20 + 5 + 5)
      )
    ) {
      az.y.aQV(0, 3260);
      return;
    }
    if (sH === 0) {
      for (aB = 0; aB < eh; aB++) {
        data.push([bG.oj(30), bF.v5.v9(bG.oj(5)), bG.oj(16), bG.oj(30), bG.oj(30)]);
      }
    } else if (sH === 1) {
      for (aB = 0; aB < eh; aB++) {
        data.push([bG.oj(16), bF.v5.v9(bG.oj(3)), bG.oj(16), bF.v5.v9(bG.oj(5)), bG.oj(31), bG.oj(30)]);
      }
    } else if (sH === 2 || sH === 3) {
      for (aB = 0; aB < eh; aB++) {
        data.push([bG.oj(30), bF.v5.v9(bG.oj(5)), bG.aR9(32), bG.oj(30), bG.oj(30)]);
      }
    } else {
      for (aB = 0; aB < eh; aB++) {
        data.push([
          bG.oj(20),
          bG.oj(30),
          bG.oj(30),
          bG.oj(30),
          bG.oj(30),
          bG.aR9(32),
          bG.oj(30),
          bF.v5.v9(bG.oj(5)),
          bF.v5.v9(bG.oj(5)),
        ]);
      }
    }
    if (t.ry === 8) {
      t.a44().aNu(21, true, {
        sH: sH,
        data: data,
      });
    }
  };
  this.aQm = function () {
    if (bG.size < bC.aR8(1 + 6 + 4 + 7 + 11)) {
      az.y.aQV(0, 3265);
      return;
    }
    var aRB = bG.oj(4);
    var aRC = bG.oj(7);
    var aRD = bG.oj(11);
    if (!bG.aRA(1 + 6 + 4 + 7 + 11 + aRC * 16 + aRD * 16 + aRB * (3 + 8))) {
      az.y.aQV(0, 3266);
      return;
    }
    var data = [];
    for (var aB = 0; aB < aRB; aB++) {
      var zj = bF.v5.v9(bG.oj(3));
      var aRE = bG.oj(8);
      var aMt = [];
      for (var f0 = 0; f0 < aRE; f0++) {
        aMt.push(bG.oj(16));
      }
      data.push({
        name: "[" + zj + "]",
        aMt: aMt,
      });
    }
    if (t.ry === 8) {
      t.a44().aNu(23, true, data);
    }
  };
}
function aQ6() {
  this.aQg = function (a09) {
    if (a09 !== az.y.a0C) {
      az.y.close(a09, 3239);
      return;
    }
    if (aa.a0E() !== 6) {
      az.y.close(a09, 3271);
      return;
    }
    bm.dX();
    for (var aB = 0; aB < 4; aB++) {
      var qn = bm.y.qo[aB];
      qn.sp = bG.oj(10);
      if (aB === 0) {
        updateTimeLeft(qn.sp);
        if (host) {
          chooseGame();
        }
      }
      qn.eN = bG.oj(6);
      qn.mapSeed = bG.oj(14);
      qn.aBt = bG.oj(4);
      qn.aDb = bG.oj(6);
      qn.aDc = bG.oj(4);
      qn.aBz = bG.oj(1);
      qn.aCh = bG.oj(12);
      qn.spawningSeed = bG.oj(14);
      var playerCount = bG.oj(16);
      bm.t4.t6[aB] = bG.oj(16);
      for (var f0 = 0; f0 < playerCount; f0++) {
        bm.t4.aBW(
          aB,
          bG.oj(30),
          bF.v7.vP(5),
          bG.oj(4),
          bG.oj(30),
          bG.oj(7),
          bG.oj(16),
          bG.oj(18),
          bG.oj(11),
          bG.oj(12)
        );
      }
    }
    t.u(29);
    bm.y.aCY(true);
  };
  this.aQo = function (a09) {
    if (a09 !== az.y.a0C) {
      az.y.close(a09, 3239);
      return;
    }
    if (!bm.a0B) {
      az.y.close(a09, 3251);
      return;
    }
    bm.y.aCW[0] = bG.oj(20);
    bm.y.aCW[1] = bG.oj(20);
    var aRF = bG.oj(16);
    for (var f0 = 0; f0 < aRF; f0++) {
      var id = bG.oj(3);
      if (id === 0) {
        bm.t4.aBW(bG.oj(2), bG.oj(30), bF.v7.vP(5), 0, 1234566, 127, 0, bG.oj(18), 0, bG.oj(12));
      } else if (id === 1) {
        bm.t4.aBn(bG.oj(16), bG.oj(2));
      } else if (id === 2) {
        bm.t4.aBj(bG.oj(16), bG.oj(2), bG.oj(2));
      } else if (id === 3) {
        bm.t4.aBm(bG.oj(16), bG.oj(2));
      } else if (id === 4) {
        bm.t4.aBc(bG.oj(16), bG.oj(2), bG.oj(4), bG.oj(30), bG.oj(7), bG.oj(16), bG.oj(11));
      } else if (id === 5) {
        bm.t4.aBd(bG.oj(16), bG.oj(2), bG.oj(1));
      }
    }
    for (var aB = 0; aB < 4; aB++) {
      var qn = bm.y.qo[aB];
      qn.sp = bG.oj(10);
      if (aB === 0) {
        updateTimeLeft(qn.sp);
      }
      if (qn.sp === 0) {
        qn.a0J = bG.oj(10);
        qn.aBx = bG.oj(10);
        if (bm.aBL.dg(aB)) {
          return;
        }
        qn.eN = bG.oj(6);
        qn.mapSeed = bG.oj(14);
        qn.aBt = bG.oj(4);
        qn.aDb = bG.oj(6);
        qn.aDc = bG.oj(4);
        qn.aBz = bG.oj(1);
        qn.aCh = bG.oj(12);
        qn.spawningSeed = bG.oj(14);
        qn.aDd.push(qn.aDd[0]);
        qn.aDd.shift();
      }
    }
    bm.y.aCa();
  };
  this.aQp = function (a09) {
    if (a09 !== az.y.a0C) {
      az.y.close(a09, 3272);
      return;
    }
    if (!bm.a0B) {
      az.y.close(a09, 3273);
      return;
    }
    var ql = bG.oj(4);
    var qn = bm.y.qo[ql];
    var qp = qn.qp;
    qn.qq = bG.oj(20);
    var tJ = bG.oj(6);
    for (var aB = 0; aB < tJ; aB++) {
      var aDu = aRG();
      bm.qz.aDt(aDu);
      qp.push(aDu);
    }
    bm.y.aCi(ql);
  };
  function aRG() {
    var id = bG.oj(3);
    if (id === 0) {
      return {
        id: id,
        rw: bG.oj(30),
        r: bm.aBK.aD7(bF.v7.vP(7)),
      };
    }
    if (id === 1) {
      return {
        id: id,
        rw: bG.oj(30),
        aC8: bG.oj(3),
        value: bG.oj(30),
        target: bG.oj(30),
      };
    }
    if (id === 2) {
      return {
        id: id,
        rw: bG.oj(30),
        aC8: bG.oj(3),
      };
    }
    if (id === 3) {
      return {
        id: id,
        rw: bG.oj(30),
        aC8: bG.oj(3),
        value: bG.oj(4),
        target: bG.oj(30),
      };
    }
    if (id === 4) {
      return {
        id: id,
        rw: bG.oj(30),
        aC8: bG.oj(3),
        target: bG.oj(30),
      };
    }
    if (id === 5) {
      return {
        id: id,
        aC8: bG.oj(6),
      };
    }
    if (id === 6) {
      return {
        id: id,
        value: bG.oj(17),
      };
    }
    return null;
  }
  this.aQq = function (a09) {
    if (a09 !== az.y.a0C) {
      az.y.close(a09, 3276);
      return;
    }
    if (!bm.a0B) {
      az.y.close(a09, 3277);
      return;
    }
    bm.message.aD3(aRG());
  };
}
function aQ8() {
  this.aQh = function (a09) {
    if (!bG.aRA(1 + 6 + 3 + 30 + 30)) {
      az.y.aQV(a09, 3269);
      return;
    }
    var aR3 = bG.oj(3);
    var qE = bh.aRH.ir(bG.oj(30), bG.oj(30));
    az.aAq.aRI(a09, qE, aR3);
    if (aR3 > 0) {
      return;
    }
    if (a09 === 0) {
      if (bi.eE.data[105].value.length === 0) {
        az.aAq.aNj(0);
      } else {
        az.aLv.aRJ(a09);
      }
    } else {
      az.aLv.aRJ(a09);
    }
    if (az.y.aQI(a09).aRK() === 4) {
      if (aa.a0E() === 6) {
        az.aD1.aES(a09);
      }
    } else if (az.y.aQI(a09).aRK() === 5) {
      if (aa.a0E() === 8 || aa.a0E() === 10) {
        az.o6.aEr();
      }
    }
  };
  this.aQj = function (a09) {
    var id = bG.oj(6);
    if (id === 1) {
      bi.rB.rC(160, bG.oj(30));
      az.y.aQS(a09);
      if (!aT.a89) {
        az.aAq.aNj(1);
      }
      b6.aAo();
      if (t.ry === 8) {
        t.a44().aNt();
      }
      return;
    }
    if (id === 21) {
      if (t.ry === 8) {
        t.a44().aNu(17);
      }
      return;
    }
    if (id === 22) {
      bi.rB.rC(106, bi.eE.data[110].value);
      bi.rB.rC(110, "");
      if (t.ry === 8) {
        t.a44().aNu(15);
      }
      return;
    }
  };
  this.aQn = function () {
    var eh = bG.oj(16);
    var aRL = bG.oj(16);
    if (!bG.aRA(1 + 6 + 16 + 16 + 16 + eh * 10 + aRL * 16)) {
      az.y.aQV(0, 3270);
      return;
    }
    var g = [];
    for (var aB = 0; aB < eh; aB++) {
      g.push(bF.v5.v9(bG.oj(10)));
    }
    b6.aAs(g);
  };
}
function aPy() {
  this.aQJ = function (a09, aQH) {
    bC.a7(1 + 6 + 1);
    bC.a8(1, 0);
    bC.a8(6, 4);
    bC.a8(1, aQH ? 1 : 0);
    az.y.send(a09, bC.aC);
  };
  this.aEr = function () {
    bC.a7(1 + 6 + 8 + 10 + 9 + 10 + 14);
    bC.a8(1, 0);
    bC.a8(6, 5);
    bC.a8(8, az.y.a0C);
    bC.a8(10, aw.aBx);
    bC.a8(9, aw.aEk);
    bC.a8(10, l.dr);
    bC.a8(14, l.dj);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.o7 = function (eT) {
    bC.a7(1 + 4 + 22);
    bC.a8(1, 1);
    bC.a8(4, 0);
    bC.a8(22, eT);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.o8 = function (iG, j7) {
    bC.a7(1 + 4 + 10 + 10);
    bC.a8(1, 1);
    bC.a8(4, 1);
    bC.a8(10, iG);
    bC.a8(10, j7);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oC = function (iG, oA) {
    bC.a7(1 + 4 + 10 + 9);
    bC.a8(1, 1);
    bC.a8(4, 2);
    bC.a8(10, iG);
    bC.a8(9, oA);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oD = function (iG, eT) {
    bC.a7(1 + 4 + 10 + 22);
    bC.a8(1, 1);
    bC.a8(4, 3);
    bC.a8(10, iG);
    bC.a8(22, eT);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oG = function (m9, eT) {
    bC.a7(1 + 4 + 10 + 22);
    bC.a8(1, 1);
    bC.a8(4, 4);
    bC.a8(10, m9);
    bC.a8(22, eT);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oI = function (j7) {
    bC.a7(1 + 4 + 10);
    bC.a8(1, 1);
    bC.a8(4, 5);
    bC.a8(10, j7);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oM = function (e2) {
    bC.a7(1 + 4 + 10);
    bC.a8(1, 1);
    bC.a8(4, 6);
    bC.a8(10, e2);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oO = function (oN) {
    bC.a7(1 + 4 + 1);
    bC.a8(1, 1);
    bC.a8(4, 7);
    bC.a8(1, oN);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oQ = function () {
    bC.a7(1 + 4);
    bC.a8(1, 1);
    bC.a8(4, 8);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oR = function (iG, eT, j7) {
    bC.a7(1 + 4 + 10 + 10 + 22);
    bC.a8(1, 1);
    bC.a8(4, 10);
    bC.a8(10, iG);
    bC.a8(10, j7);
    bC.a8(22, eT);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.oY = function (aRM, aRN) {
    bC.a7(1 + 4 + 9 + 10);
    bC.a8(1, 1);
    bC.a8(4, 15);
    bC.a8(9, aRN);
    bC.a8(10, aRM);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.ob = function (a5c) {
    bC.a7(1 + 4 + 9);
    bC.a8(1, 1);
    bC.a8(4, 14);
    bC.a8(9, a5c);
    az.y.send(az.y.a0J, bC.aC);
  };
  this.og = function (aRO, target) {
    var aB;
    var eh = aRO.length;
    bC.a7(1 + 4 + 9 + eh * 9);
    bC.a8(1, 1);
    bC.a8(4, 13);
    bC.a8(9, target);
    for (aB = 0; aB < eh; aB++) {
      bC.a8(9, aRO[aB]);
    }
    az.y.send(az.y.a0J, bC.aC);
  };
}
function aQ1() {
  this.aRP = function () {
    bC.a7(1 + 6 + (14 + 4 + 7 + 1 + 1 + 5));
    bC.a8(1, 0);
    bC.a8(6, 16);
    az.aAq.aRQ();
    az.y.send(0, bC.aC);
  };
  this.aRJ = function (a09) {
    bC.a7(1 + 6 + (30 + 48 + 30));
    bC.a8(1, 0);
    bC.a8(6, 17);
    aRR();
    az.y.send(a09, bC.aC);
  };
  this.aNw = function () {
    bC.a7(1 + 6 + 48);
    bC.a8(1, 0);
    bC.a8(6, 18);
    bF.s1.vK(bi.eE.data[110].value);
    az.y.send(0, bC.aC);
  };
  this.aNs = function (a2u) {
    var eh = a2u.pO.length;
    bC.a7(1 + 6 + 6 + 8 + eh * 16);
    bC.a8(1, 0);
    bC.a8(6, 29);
    bC.a8(6, a2u.s0);
    bC.a8(8, eh);
    bE.v5.vK(a2u.pO);
    az.y.send(0, bC.aC);
  };
  this.aMB = function (data) {
    bC.a7(1 + 6 + 6 + 30);
    bC.a8(1, 0);
    bC.a8(6, 25);
    bC.a8(6, data.s0);
    bF.s1.vL(data.rw, 5);
    az.y.send(0, bC.aC);
  };
  this.aLw = function (data) {
    bC.a7(1 + 6 + 6 + 30 + 32);
    bC.a8(1, 0);
    bC.a8(6, 27);
    bC.a8(6, data.s0);
    bF.s1.vL(data.rw, 5);
    bC.aR7(32, data.value);
    az.y.send(0, bC.aC);
  };
  function aRR() {
    bF.s1.vL(bi.eE.data[105].value, 5);
    bF.s1.vL(bi.eE.data[106].value, 8);
    bC.a8(30, bi.eE.data[109].value);
  }
}
function aQ2() {
  this.oh = function () {
    var eh = aD.jw;
    var yt = bQ.result.yt;
    var ke = yt.length;
    bC.a7(1 + 4 + 10 + 1 + 1 + eh * 16 + ke * (9 + 24));
    bC.a8(1, 1);
    bC.a8(4, 12);
    bC.a8(10, ke);
    bC.a8(1, +(aD.z1 === 2));
    bC.a8(1, aD.zL % 2);
    var xX = ag.xX;
    for (var aB = 0; aB < eh; aB++) {
      bC.a8(16, xX[aB]);
    }
    var gU = ag.gU;
    for (aB = 0; aB < ke; aB++) {
      var gE = yt[aB];
      bC.a8(9, gE);
      bC.a8(24, gU[gE]);
    }
    az.y.send(az.y.a0J, bC.aC);
  };
}
function aQ3() {
  this.aNl = function (sH, sI, sJ) {
    bC.a7(1 + 6 + 6 + 2 * (1 + 30));
    bC.a8(1, 0);
    bC.a8(6, 21);
    bC.a8(6, sH);
    bC.a8(1, +(sI < 0));
    bC.a8(1, +(sJ < 0));
    bC.a8(30, Math.abs(sI));
    bC.a8(30, Math.abs(sJ));
    az.y.send(0, bC.aC);
  };
  this.aNm = function (sH, aNn, aNo) {
    bC.a7(1 + 6 + 6 + 5 + aNn.length * 16 + 30);
    bC.a8(1, 0);
    bC.a8(6, 22);
    bC.a8(6, sH);
    az.aAq.aRS(aNn);
    bC.a8(30, aNo);
    az.y.send(0, bC.aC);
  };
  this.aNr = function (sH, aNn, aNo) {
    bC.a7(1 + 6 + 6 + 30 + 30);
    bC.a8(1, 0);
    bC.a8(6, 28);
    bC.a8(6, sH);
    bF.s1.vL(aNn, 5);
    bC.a8(30, aNo);
    az.y.send(0, bC.aC);
  };
  this.aNp = function (aMs, zi) {
    var aB;
    var eh = zi.length;
    var hZ = 0;
    for (aB = 0; aB < eh; aB++) {
      hZ += zi[aB].length;
    }
    bC.a7(1 + 6 + 3 + 4 + 7 + eh * 3 + hZ * 16);
    bC.a8(1, 0);
    bC.a8(6, 23);
    bC.a8(3, aMs);
    bC.a8(4, eh);
    bC.a8(7, hZ);
    for (aB = 0; aB < eh; aB++) {
      bC.a8(3, zi[aB].length);
      bE.v5.vK(zi[aB]);
    }
    az.y.send(0, bC.aC);
  };
  this.aNq = function (aMs, sI, sJ) {
    bC.a7(1 + 6 + 3 + 2 * (1 + 20));
    bC.a8(1, 0);
    bC.a8(6, 24);
    bC.a8(3, aMs);
    bC.a8(1, +(sI < 0));
    bC.a8(1, +(sJ < 0));
    bC.a8(20, Math.abs(sI));
    bC.a8(20, Math.abs(sJ));
    az.y.send(0, bC.aC);
  };
}
function aPz() {
  this.aES = function (a09) {
    var username = bi.eE.data[122].value.slice(0, 20);
    bC.a7(1 + 6 + 10 + 2 + 5 + username.length * 16 + 18 + 2 * 9);
    bC.a8(1, 0);
    bC.a8(6, 1);
    bC.a8(10, l.dr);
    bC.a8(2, bi.eE.data[158].value);
    az.aAq.aRS(username);
    var aRT = b9.color.a1y(bi.y.uk());
    bC.a8(6, aRT[0]);
    bC.a8(6, aRT[1]);
    bC.a8(6, aRT[2]);
    var aRU = b6.aAu();
    bC.a8(9, aRU[0]);
    bC.a8(9, aRU[1]);
    az.y.a0C = a09;
    az.y.send(a09, bC.aC);
  };
  this.aD2 = function (aRV, a2u) {
    bD.dX();
    bD.a8(1, 0);
    bD.a8(6, 2);
    bD.a8(3, aRV);
    if (aRV === 2) {
      bD.a8(2, a2u);
    } else if (aRV === 3) {
      bE.v7.yX(a2u, 7, bD);
    } else if (aRV === 5) {
      bD.a8(3, a2u.id);
      bD.a8(3, a2u.value);
      bD.a8(30, a2u.rw);
    }
    az.y.send(az.y.a0C, bD.aRW());
  };
}
function aQ0() {
  this.aQR = function (a09) {
    bC.a7(1 + 6 + (14 + 4 + 7 + 1 + 1 + 5));
    bC.a8(1, 0);
    bC.a8(6, 13);
    aRX();
    az.y.send(a09, bC.aC);
  };
  this.aRI = function (a09, qE, aR3) {
    bC.a7(1 + 6 + 3 + 30 + 30);
    bC.a8(1, 0);
    bC.a8(6, 14);
    bC.a8(3, aR3);
    bC.a8(30, qE[0]);
    bC.a8(30, qE[1]);
    az.y.send(a09, bC.aC);
  };
  this.aNj = function (id) {
    bC.a7(1 + 6 + 6);
    bC.a8(1, 0);
    bC.a8(6, 15);
    bC.a8(6, id);
    az.y.send(0, bC.aC);
  };
  this.aAr = function (id, pO) {
    var eh = Math.min(pO.length, 63);
    bC.a7(1 + 6 + 6 + 6 + eh * 16);
    bC.a8(1, 0);
    bC.a8(6, 26);
    bC.a8(6, id);
    bC.a8(6, eh);
    bE.v5.vK(pO);
    az.y.send(0, bC.aC);
  };
  this.aRY = function (aQx, pZ) {
    bC.a7(1 + 6 + pZ.length * (16 + 10));
    bC.a8(1, 0);
    bC.a8(6, 9);
    for (var aB = 0; aB < pZ.length; aB++) {
      bC.a8(16, pZ[aB][0]);
      bC.a8(10, pZ[aB][1]);
    }
    az.y.send(aQx, bC.aC);
  };
  this.aQY = function (aRZ, aRa) {
    bC.a7(1 + 6 + 1 + 12);
    bC.a8(1, 0);
    bC.a8(6, 19);
    bC.a8(1, aRZ);
    bC.a8(12, aRa);
    az.y.send(az.y.a0J, bC.aC);
  };
  function aRX() {
    bC.a8(14, l.dj);
    bC.a8(4, a0.id);
    bC.a8(7, a0.dp);
    bC.a8(1, +l.a9);
    bC.a8(1, +l.aA);
    bC.a8(5, new Date().getHours() % 24);
  }
  this.aRS = function (username) {
    bC.a8(5, username.length);
    bE.v5.vK(username);
  };
}
function aQP() {
  var a09;
  var aL2;
  var aRb;
  var aRc = ["wss://", "/s50/", "/s51/", "/s52/"];
  var aRd = 0;
  this.dX = function (e2, aRe) {
    a09 = e2;
    aL2 = aRe;
    aRf();
  };
  this.aRg = function () {
    return aRb.readyState === aRb.CONNECTING;
  };
  this.aLt = function () {
    return aRb.readyState === aRb.OPEN;
  };
  this.aQK = function () {
    return aRd;
  };
  this.aQS = function () {
    aRd = 1;
  };
  this.aQM = function () {
    return this.aRg() || this.aLt();
  };
  this.aQN = function (aRe) {
    aL2 = aRe;
  };
  this.aRK = function () {
    return aL2;
  };
  this.send = function (aC) {
    if (this.aLt()) {
      aRb.send(aC);
    }
  };
  this.close = function (aQU) {
    if (this.aQM()) {
      aRb.close(aQU);
      this.r0();
    }
  };
  this.r0 = function () {
    aRb.onopen = null;
    aRb.onmessage = null;
    aRb.onclose = null;
    aRb.onerror = null;
  };
  function aRf() {
    var aRh;
    if (l.dk) {
      aRh = "ws://localhost:" + (7130 + a09) + "/";
    } else {
      aRh = aRc[0] + az.y.aQE[a09] + aRc[1 + l.dl];
    }
    aRb = new WebSocket(aRh);
    aRb.binaryType = "arraybuffer";
    aRb.onopen = aQQ;
    aRb.onmessage = aRi;
    aRb.onclose = aQX;
    aRb.onerror = aRj;
  }
  function aQQ() {
    az.y.aQQ(a09, aL2);
  }
  function aRi(e) {
    az.a5c.aQa(a09, new Uint8Array(e.data));
  }
  function aRj() {}
  function aQX(e) {
    az.y.aQX(a09, e);
  }
}
function dG() {
  var aRk = false;
  var a5x = 0;
  var i = 0;
  var s5 = 0;
  var gap = 0;
  var canvas = null;
  var xG = null;
  var a1Y = null;
  this.dX = function () {
    if (!aD.hW) {
      canvas = null;
      xG = null;
      a1Y = null;
      return;
    }
    a5x = 0;
    a1Y = new Uint32Array(aD.wK + 1);
    aRl();
    this.resize();
  };
  this.a6k = function () {
    return i;
  };
  this.resize = function () {
    if (!aD.hW) {
      return;
    }
    i = Math.floor(a0.a1.r7() && !aD.mG ? 0.18 * h.min : 0.13 * h.pj);
    i *= 1 + (0.5 + 0.2 * a0.a1.r7()) * aD.mG;
    i += i % 2;
    s5 = Math.floor((7 * i) / 8);
    canvas = canvas ? canvas : document.createElement(S[4]);
    canvas.width = i;
    canvas.height = i;
    xG = canvas.getContext("2d", {
      alpha: true,
    });
    gap = Math.max(1, 0.015 * i);
    xG.lineWidth = gap;
    xG.strokeStyle = bA.mn;
    b9.ph.textAlign(xG, 1);
    b9.ph.textBaseline(xG, 1);
    aRm();
  };
  this.a2q = function () {
    var l7 = this.l8();
    if (bf.kI[l7]) {
      return a1Y[l7];
    }
    l7 = aRn();
    var dm = ag.gU[lB[0]];
    if (l7 === -1) {
      return dm;
    }
    if (a1Y[l7] > dm) {
      return a1Y[l7];
    }
    return dm;
  };
  this.zw = function () {
    a5x = 31;
    this.ir();
    return this.l8();
  };
  this.l8 = function () {
    var l7 = 0;
    for (var aB = aD.wK; aB > 0; aB--) {
      if (a1Y[aB] > a1Y[l7]) {
        l7 = aB;
      }
    }
    return l7;
  };
  function aRn() {
    var l7 = -1;
    for (var aB = aD.wK; aB >= 1; aB--) {
      if (l7 === -1 || a1Y[aB] > a1Y[l7]) {
        l7 = aB;
      }
    }
    return l7;
  }
  this.l9 = function (aRo) {
    var g9 = 0;
    var jy = al.jy;
    var ef = bf.ef;
    var eh = al.jx;
    var fK = bN.fK;
    for (var aB = 0; aB < eh; aB++) {
      var gE = jy[aB];
      if (ef[gE] === aRo) {
        fK[g9++] = gE;
      }
    }
    bN.fC[0] = g9;
  };
  this.a2R = function () {
    var g9 = 0;
    for (var aB = aD.wK; aB >= 0; aB--) {
      g9 += a1Y[aB] > 0;
    }
    return g9;
  };
  this.ir = function () {
    if (!aD.hW) {
      return;
    }
    if (++a5x >= 32) {
      a5x = 0;
      aRp();
    }
  };
  function aRl() {
    for (var aB = aD.wK; aB >= 0; aB--) {
      a1Y[aB] = 0;
    }
    for (aB = al.jx - 1; aB >= 0; aB--) {
      a1Y[bf.ef[al.jy[aB]]] += 1;
    }
  }
  function aRp() {
    for (var aB = aD.wK; aB >= 0; aB--) {
      a1Y[aB] = 0;
    }
    for (aB = al.jx - 1; aB >= 0; aB--) {
      a1Y[bf.ef[al.jy[aB]]] += ag.gU[al.jy[aB]];
    }
    aRk = true;
  }
  this.lZ = function () {
    if (!aD.hW) {
      return;
    }
    if (aRk) {
      aRm();
    }
  };
  function aRm() {
    var aB;
    var aRq = 0;
    var eh = 0;
    var f2 = Math.floor(i / 2);
    var e1 = Math.floor(s5 / 2);
    var aRr = 1.5 * Math.PI;
    var aRs;
    for (aB = aD.wK; aB >= 0; aB--) {
      eh += a1Y[aB];
      if (a1Y[aB] === 0) {
        aRq++;
      }
    }
    xA();
    if (eh > 0) {
      if (aRq === aD.wK) {
        for (aB = aD.wK; aB >= 0; aB--) {
          if (a1Y[aB] > 0) {
            aRt(aB, f2, e1);
            break;
          }
        }
        aRu(f2);
      } else {
        for (aB = 0; aB <= aD.wK; aB++) {
          if (a1Y[aB] > 0) {
            aRs = aRr + (2 * Math.PI * a1Y[aB]) / eh;
            aRv(aB, f2, e1, aRr, aRs);
            aRw(f2, e1, aRr, aRs);
            if (aB !== 0) {
              aRx(f2, e1, aRr);
            }
            aRr = aRs;
          }
        }
        aRx(f2, e1, 1.5 * Math.PI);
      }
    }
    aRy(f2, e1);
  }
  function xA() {
    aRk = false;
    xG.clearRect(0, 0, i, i);
    xG.fillStyle = bA.mk;
    xG.fillRect(0, 0, i, i);
    xG.fillStyle = bA.mn;
    xG.fillRect(0, 0, i, gap);
    xG.fillRect(0, 0, gap, i);
    xG.fillRect(i - gap, 0, gap, i);
    xG.fillRect(0, i - gap, i, gap);
  }
  function aRt(aB, f2, e1) {
    xG.fillStyle = bf.aRz[bf.kI[aB]];
    xG.beginPath();
    xG.arc(f2, f2, e1, 0, 2 * Math.PI);
    xG.fill();
  }
  function aRv(aB, f2, e1, aRr, aRs) {
    xG.fillStyle = bf.aRz[bf.kI[aB]];
    xG.beginPath();
    xG.arc(f2, f2, e1, aRr, aRs);
    xG.lineTo(f2, f2);
    xG.fill();
  }
  function aRu(f2) {
    var fontSize = f2 / 3;
    xG.font = b9.ph.rY(1, fontSize);
    xG.fillStyle = bA.mn;
    xG.fillText(S[1], f2, f2 + 0.1 * fontSize);
  }
  function aRw(f2, e1, aRr, aRs) {
    var aS0, u7;
    var f9 = (aRs - aRr) / (2 * Math.PI);
    var fontSize = 1 * e1 * Math.min(f9, 0.37);
    if (fontSize < 8) {
      return;
    }
    aS0 = (aRr + aRs) / 2;
    u7 = Math.floor(100 * f9 + 0.5) + "%";
    e1 *= 0.525 - Math.max(0.6 * (f9 - 0.7), 0);
    xG.font = b9.ph.rY(1, fontSize);
    xG.fillStyle = bA.mn;
    xG.fillText(u7, f2 + Math.cos(aS0) * e1, f2 + Math.cos(aS0 + 1.5 * Math.PI) * e1);
  }
  function aRx(f2, e1, aS0) {
    xG.beginPath();
    xG.moveTo(f2, f2);
    xG.lineTo(f2 + Math.cos(aS0) * e1, f2 + Math.cos(aS0 + 1.5 * Math.PI) * e1);
    xG.stroke();
  }
  function aRy(f2, e1) {
    xG.beginPath();
    xG.arc(f2, f2, e1, 0, 2 * Math.PI);
    xG.stroke();
  }
  this.tq = function () {
    if (aD.hW) {
      if (aD.mG) {
        tr.drawImage(canvas, bb.gap, bb.gap);
      } else {
        tr.drawImage(canvas, bb.gap, a6l + 2 * bb.gap);
      }
    }
  };
}
function cz() {
  this.dg = function () {
    if (a0.id !== 0) {
      return false;
    }
    if (aS1()) {
      return true;
    }
    var value = aS2("replay");
    if (!this.clear()) {
      return false;
    }
    if (!value) {
      return false;
    }
    t.u(3, 0, value);
    return true;
  };
  function aS1() {
    var value = aS2(S[95]);
    if (!value) {
      value = aS2("a");
      if (!value) {
        bH.clear();
        return false;
      }
    }
    bH.clear();
    t.u(
      8,
      t.ry,
      new rz(1000, {
        s0: 0,
        rw: value,
        rx: 0,
      })
    );
    return true;
  }
  this.clear = function () {
    var a06 = new URL(window.location.href);
    a06.search = "";
    try {
      history.replaceState(null, "", a06.toString());
      return true;
    } catch (e) {
      console.log("error 352: " + e);
    }
    return false;
  };
  function aS2(key) {
    if (typeof URLSearchParams === S[27]) {
      return null;
    }
    var aPM = window.location.search;
    var aS3 = new URLSearchParams(aPM);
    var value = aS3.get(key);
    if (typeof value !== S[44] || value.length < 1) {
      return null;
    }
    return value;
  }
  this.aMO = function (key, value) {
    if (a0.id !== 0) {
      return;
    }
    try {
      var a06 = new URL(window.location.href);
      var gE = a06.searchParams;
      gE.set(key, value);
      a06.search = gE.toString();
      history.replaceState(null, "", a06.toString());
    } catch (e) {
      console.log("error 358: " + e);
    }
  };
}
function cg() {
  var aS4;
  var g;
  this.dX = function () {
    g = new Uint16Array(101);
    for (var aB = g.length - 1; aB >= 0; aB--) {
      g[aB] = bK.dn(aB * 32768, 100);
    }
    this.a3d(0);
  };
  this.value = function (gE) {
    return g[gE];
  };
  this.aJL = function () {
    return bK.dn(aS4 - 1, 2);
  };
  this.a3d = function (aIz) {
    aS4 = ((aIz * 2) % 32768) + 1;
  };
  this.random = function () {
    aS4 = (aS4 * 167) % 32768;
    return aS4;
  };
  this.jE = function (lh) {
    return bK.dn(lh * this.random(), 32768);
  };
  this.jo = function (gE) {
    return gE !== 0 && this.random() < this.value(gE);
  };
  this.ia = function (f0, f1) {
    return f0 + this.jE(f1 - f0);
  };
}
function cv() {
  this.ox = new aS5();
  this.a3o = new aS6();
  this.aGf = new aS7();
  this.dX = function () {
    if (aD.gq) {
      return;
    }
    this.ox.dX();
  };
  this.ir = function () {
    if (aD.gq) {
      return;
    }
    this.ox.ir();
    aS8();
  };
  function aS8() {
    if (t.ry !== 3) {
      return;
    }
    if (be.jt() % 15 !== 5 && aD.z4 !== 2) {
      return;
    }
    t.a44().aPN();
  }
  this.aPQ = function () {
    if (aD.z4 === 0) {
      aa.aEc();
    }
    aD.a3Y.a3w();
    aD.data.canvas = null;
    az.y.close(az.y.a0J, 3257);
    az.y.a0J = 0;
    aD.data.isReplay = 1;
    aD.gameInit();
  };
  this.aPP = function (pO) {
    var aB = pO.indexOf("=");
    if (aB >= 0) {
      return pO.substring(aB + 1);
    }
    return pO;
  };
  this.aPO = function (pO) {
    return "https://territorial.io/?replay=" + pO;
  };
}
function aS5() {
  this.aS9 = null;
  this.aSA = null;
  this.aSB = null;
  this.aSC = null;
  this.aSD = null;
  this.aSE = null;
  this.a3n = "";
  var aSF = 0;
  this.dX = function () {
    this.aS9 = [];
    this.aSA = [];
    this.aSB = [];
    this.aSC = [];
    this.aSD = [0];
    this.aSE = [0];
    aSF = 0;
    this.a3n = "";
  };
  this.oy = function (id, fO, fQ, fS) {
    if (aD.gq || aD.z4 === 2) {
      return;
    }
    if (this.aSD[aSF] === 0) {
      if (this.aSE[aSF]) {
        this.aSD.push(1);
        this.aSE.push(0);
        aSF++;
      } else {
        this.aSD[aSF] = 1;
      }
    }
    this.aS9.push(id);
    this.aSA.push(fO);
    this.aSB.push(fQ === undefined ? 0 : fQ);
    this.aSC.push(fS === undefined ? 0 : fS);
    this.aSE[aSF]++;
  };
  this.ir = function () {
    if (this.aSD[aSF] === 0) {
      this.aSE[aSF]++;
      return;
    }
    this.aSD.push(0);
    this.aSE.push(0);
    aSF++;
  };
}
function aS7() {
  var aSG = 0;
  this.vP = function (pO, aSH) {
    aSG = aSH;
    bF.s1.vH(bF.s1.vF(bF.s1.vD(pO)));
    aN.a53 = "";
    if (!aMY()) {
      return false;
    }
    aSI();
    if (!aSJ()) {
      return false;
    }
    if (bG.e2 < 8 * bG.size - 13 || bG.e2 > 8 * bG.size) {
      aSK("Out Of Bounds Error: " + bG.e2 + " " + 8 * bG.size);
      return false;
    }
    b8.ox.a3n = pO;
    if (aD.data.mapType === 2) {
      aSK("Load base64 image...", 2);
      return false;
    }
    return true;
  };
  this.aGg = function (aGG, aSL) {
    var a1t = document.createElement(S[4]);
    var he = a1t.getContext("2d");
    a1t.width = aGG.width;
    a1t.height = aGG.height;
    he.drawImage(aGG, 0, 0);
    if (aSG || aSL) {
      if (aD.z4) {
        return;
      }
      aD.data.canvas = a1t;
      aD.data.mapType = 2;
      t.x();
      t.u(19);
      return;
    }
    b8.aPQ();
  };
  function aMY() {
    if (bG.size < 10) {
      aSK("File Too Small");
      return false;
    }
    var aSM = bG.oj(12);
    if (aSM !== l.rVersion) {
      var r = "Incompatible Version   Required: " + l.rVersion;
      r += "   Found: " + aSM;
      r += "   Compatible at territorial.io/" + aSM;
      aSK(r, 1);
    }
    var aRa = bG.oj(12);
    var aSN = bG.oj(31);
    if (aSN !== bG.size) {
      aSK("Size Error: " + aSN + " " + bG.size);
      return false;
    }
    if (aSO(aRa, aSM)) {
      return true;
    }
    return false;
  }
  function aSK(pO, id) {
    if (aSG) {
      return;
    }
    if (!id) {
      t.u(4, 3, new v("⚠️ " + L(432), pO, 1));
      return;
    }
    if (id === 1) {
      aN.a53 = L(433) + ": " + pO;
      return;
    }
    t.u(4, 3, new v(L(434), pO, 1));
  }
  function aSO(j, aSM) {
    var gE = bG.aC;
    var eh = bG.size;
    var aRa = aSM;
    for (var aB = 3; aB < eh; aB++) {
      aRa = (aRa + gE[aB]) & 4095;
    }
    if (aRa === j) {
      return true;
    }
    aSK("Hash Error: " + aRa + " " + j + " " + eh);
    return false;
  }
  function aSI() {
    var i1 = bG;
    var pZ = (aD.data = new a3X());
    pZ.mapType = i1.oj(2);
    pZ.mapProceduralIndex = i1.oj(8);
    pZ.mapRealisticIndex = i1.oj(8);
    pZ.mapSeed = i1.oj(14);
    pZ.mapName = i1.aSP(5);
    pZ.mapType === 2 && i1.aSQ();
    pZ.passableWater = i1.oj(1);
    pZ.passableMountains = i1.oj(1);
    pZ.playerCount = i1.oj(10);
    pZ.humanCount = i1.oj(10);
    pZ.selectedPlayer = i1.oj(9);
    pZ.gameMode = i1.oj(1);
    pZ.playerMode = i1.oj(2);
    pZ.battleRoyaleMode = i1.oj(2);
    pZ.numberTeams = i1.oj(4);
    pZ.isZombieMode = i1.oj(1);
    pZ.isContest = i1.oj(1);
    pZ.isReplay = i1.oj(1);
    pZ.elo = i1.aSR(2, 14, 2);
    pZ.colorsType = i1.oj(1);
    pZ.colorsPersonalized = i1.oj(1);
    pZ.colorsData = i1.aSR(10, 18, 512);
    pZ.selectableColor = i1.oj(1);
    pZ.teamPlayerCount = i1.aSR(4, 10, 9);
    pZ.neutralBots = i1.oj(1);
    pZ.botDifficultyType = i1.oj(2);
    pZ.botDifficultyValue = i1.oj(4);
    pZ.botDifficultyTeam = i1.aSR(4, 4, 9);
    pZ.botDifficultyData = i1.aSR(10, 4, 512);
    pZ.spawningType = i1.oj(2);
    pZ.spawningSeed = i1.oj(14);
    pZ.spawningData = i1.aSR(11, 12, 1024);
    pZ.selectableSpawn = i1.oj(1);
    pZ.playerNamesType = i1.oj(2);
    pZ.playerNamesData = i1.aSS(10, 5, 512);
    pZ.selectableName = i1.oj(1);
    pZ.aIncomeType = i1.oj(2);
    pZ.aIncomeValue = i1.oj(8);
    pZ.aIncomeData = i1.aSR(10, 8, 512);
    pZ.tIncomeType = i1.oj(2);
    pZ.tIncomeValue = i1.oj(8);
    pZ.tIncomeData = i1.aSR(10, 8, 512);
    pZ.iIncomeType = i1.oj(2);
    pZ.iIncomeValue = i1.oj(8);
    pZ.iIncomeData = i1.aSR(10, 8, 512);
    pZ.sResourcesType = i1.oj(2);
    pZ.sResourcesValue = i1.oj(11);
    pZ.sResourcesData = i1.aSR(10, 11, 512);
  }
  function aSJ() {
    var i1 = bG;
    var vQ = i1.oj(5);
    var aST = i1.oj(30);
    var aSU = i1.oj(30);
    if (aST + aSU > 8 * i1.size) {
      aSK("Corrupted File");
      return false;
    }
    aSV(aST);
    aSW(aSU, vQ);
    return true;
  }
  function aSV(eh) {
    var aSX = new Uint8Array(eh);
    var aSY = new Uint16Array(eh);
    var aSZ = new Uint32Array(eh);
    var aSa = new Uint32Array(eh);
    b8.ox.aS9 = aSX;
    b8.ox.aSA = aSY;
    b8.ox.aSB = aSZ;
    b8.ox.aSC = aSa;
    for (var aB = 0; aB < eh; aB++) {
      var id = bG.oj(4);
      aSX[aB] = id;
      aSY[aB] = bG.oj(9);
      if (id === 0) {
        aSZ[aB] = bG.oj(22);
      } else if (id === 1) {
        aSZ[aB] = bG.oj(10);
        aSa[aB] = bG.oj(10);
      } else if (id === 2) {
        aSZ[aB] = bG.oj(10);
        aSa[aB] = bG.oj(9);
      } else if (id === 3) {
        aSZ[aB] = bG.oj(10);
        aSa[aB] = bG.oj(22);
      } else if (id === 4) {
        aSZ[aB] = bG.oj(10);
        aSa[aB] = bG.oj(22);
      } else if (id === 5) {
        aSZ[aB] = bG.oj(10);
      } else if (id === 6) {
        aSZ[aB] = bG.oj(10);
      } else if (id === 7) {
        aSZ[aB] = bG.oj(1);
      } else if (id === 10) {
        aSZ[aB] = bG.oj(20);
        aSa[aB] = bG.oj(22);
      }
    }
  }
  function aSW(eh, vQ) {
    var aSD = new Uint8Array(eh);
    var aSE = new Array(eh);
    aSE.fill(0);
    b8.ox.aSD = aSD;
    b8.ox.aSE = aSE;
    for (var aB = 0; aB < eh; aB++) {
      aSD[aB] = bG.oj(1);
      aSE[aB] = bG.oj(vQ);
    }
  }
}
function aS6() {
  this.yX = function () {
    var vQ = aSb();
    aSc();
    aSd(vQ);
    aSe(vQ);
    var aSf = bD.e2;
    var yK = bK.dn(aSf - 1, 6) + 1;
    if (bC.aR8(6 * yK) !== bD.g.length) {
      bD.g.push(0);
    }
    aSg();
    bG.dX(bD.g);
    var qE = bE.s1.s2(bE.s1.s3(yK));
    bG.tK();
    bD.dX();
    return qE;
  };
  function aSc() {
    var pZ = aD.data;
    var i = bD;
    i.dX();
    i.a8(12, l.rVersion);
    i.e2 += 12 + 31;
    i.a8(2, pZ.mapType);
    i.a8(8, pZ.mapProceduralIndex);
    i.a8(8, pZ.mapRealisticIndex);
    i.a8(14, pZ.mapSeed);
    i.aSh(pZ.mapName, 5);
    pZ.mapType === 2 && i.aSi(pZ.canvas);
    i.a8(1, pZ.passableWater);
    i.a8(1, pZ.passableMountains);
    i.a8(10, pZ.playerCount);
    i.a8(10, pZ.humanCount);
    i.a8(9, pZ.selectedPlayer);
    i.a8(1, pZ.gameMode);
    i.a8(2, pZ.playerMode);
    i.a8(2, pZ.battleRoyaleMode);
    i.a8(4, pZ.numberTeams);
    i.a8(1, pZ.isZombieMode);
    i.a8(1, pZ.isContest);
    i.a8(1, pZ.isReplay);
    i.de(pZ.elo, 2, 14);
    i.a8(1, pZ.colorsType);
    i.a8(1, pZ.colorsPersonalized);
    i.de(pZ.colorsData, 10, 18);
    i.a8(1, pZ.selectableColor);
    i.de(pZ.teamPlayerCount, 4, 10);
    i.a8(1, pZ.neutralBots);
    i.a8(2, pZ.botDifficultyType);
    i.a8(4, pZ.botDifficultyValue);
    i.de(pZ.botDifficultyTeam, 4, 4);
    i.de(pZ.botDifficultyData, 10, 4);
    i.a8(2, pZ.spawningType);
    i.a8(14, pZ.spawningSeed);
    i.de(pZ.spawningData, 11, 12);
    i.a8(1, pZ.selectableSpawn);
    i.a8(2, pZ.playerNamesType);
    i.aSj(pZ.playerNamesData, 10, 5);
    i.a8(1, pZ.selectableName);
    i.a8(2, pZ.aIncomeType);
    i.a8(8, pZ.aIncomeValue);
    i.de(pZ.aIncomeData, 10, 8);
    i.a8(2, pZ.tIncomeType);
    i.a8(8, pZ.tIncomeValue);
    i.de(pZ.tIncomeData, 10, 8);
    i.a8(2, pZ.iIncomeType);
    i.a8(8, pZ.iIncomeValue);
    i.de(pZ.iIncomeData, 10, 8);
    i.a8(2, pZ.sResourcesType);
    i.a8(11, pZ.sResourcesValue);
    i.de(pZ.sResourcesData, 10, 11);
  }
  function aSd(vQ) {
    var i = bD;
    var aS9 = b8.ox.aS9;
    var fO = b8.ox.aSA;
    var fQ = b8.ox.aSB;
    var fS = b8.ox.aSC;
    var eh = aS9.length;
    i.a8(5, vQ);
    i.a8(30, eh);
    i.a8(30, b8.ox.aSE.length);
    for (var aB = 0; aB < eh; aB++) {
      var f2 = aS9[aB];
      i.a8(4, f2);
      i.a8(9, fO[aB]);
      if (f2 === 0) {
        i.a8(22, fQ[aB]);
      } else if (f2 === 1) {
        i.a8(10, fQ[aB]);
        i.a8(10, fS[aB]);
      } else if (f2 === 2) {
        i.a8(10, fQ[aB]);
        i.a8(9, fS[aB]);
      } else if (f2 === 3) {
        i.a8(10, fQ[aB]);
        i.a8(22, fS[aB]);
      } else if (f2 === 4) {
        i.a8(10, fQ[aB]);
        i.a8(22, fS[aB]);
      } else if (f2 === 5) {
        i.a8(10, fQ[aB]);
      } else if (f2 === 6) {
        i.a8(10, fQ[aB]);
      } else if (f2 === 7) {
        i.a8(1, fQ[aB]);
      } else if (f2 === 10) {
        i.a8(20, fQ[aB]);
        i.a8(22, fS[aB]);
      }
    }
  }
  function aSe(vQ) {
    var i = bD;
    var aSD = b8.ox.aSD;
    var aSE = b8.ox.aSE;
    var eh = aSD.length;
    for (var aB = 0; aB < eh; aB++) {
      i.a8(1, aSD[aB]);
      i.a8(vQ, aSE[aB]);
    }
  }
  function aSk() {
    var g = bD.g;
    var eh = g.length;
    var aRa = l.rVersion;
    for (var aB = 3; aB < eh; aB++) {
      aRa = (aRa + g[aB]) & 4095;
    }
    return aRa;
  }
  function aSg() {
    var i = bD;
    i.e2 = 12 + 12;
    i.a8(31, i.g.length);
    i.e2 = 12;
    i.a8(12, aSk());
  }
  function aSb() {
    var aSE = b8.ox.aSE;
    var eh = aSE.length;
    var max = 0;
    for (var aB = 0; aB < eh; aB++) {
      max = Math.max(max, aSE[aB]);
    }
    return vX(Math.max(max, 1));
  }
}
function cl() {
  var f2;
  var br = false;
  var aSl = false;
  var aSm = -10000;
  var aSn = -1;
  var aSo = 0;
  this.i = 0;
  this.j = 0;
  this.min = 0;
  this.max = 0;
  this.pj = 0;
  this.tn = 1;
  this.k = 1;
  this.rg = 0;
  this.dY = function () {
    this.i = aSp(document.documentElement.clientWidth) + 2;
    this.j = aSp(document.documentElement.clientHeight) + 2;
  };
  this.dX = function () {
    f2 = 1;
    vW();
    aSq(0);
  };
  function vW() {
    a0X = document.getElementById("canvasA");
    tr = a0X.getContext("2d", {
      alpha: false,
    });
    tr.imageSmoothingEnabled = false;
  }
  this.ir = function () {
    if (++f2 >= 50) {
      resize(0);
    }
    aSr();
  };
  function aSr() {
    if (aSn === -1) {
      return;
    }
    if (be.eG < aSn) {
      return;
    }
    aSo++;
    aSn = -1;
    if (2000 * aSo >= be.eG + 4 * 2000) {
      console.log("error 3748");
      return;
    }
    a0.a1.setState(15);
  }
  this.di = function (hq) {
    br = true;
    resize(hq);
  };
  this.a1D = function () {
    if (aSm + 1000 > be.eG) {
      return;
    }
    aSm = be.eG;
    resize(0);
  };
  function resize(aSs) {
    f2 = 0;
    if (!ab.sQ()) {
      return;
    }
    if (aSq(aSs) || br) {
      br = false;
      bb.resize();
      bV.aAR.resize();
      aY.dX();
      bX.dX();
      aZ.resize();
      aT.resize();
      aO.resize();
      t.resize();
      if (aD.z4 >= 1) {
        aV.resize(false);
        aU.resize();
        aW.resize();
        aS.resize();
        aR.resize();
        aN.resize();
        aM.resize();
        bB.resize();
        av.resize();
        aP.resize();
        aQ.resize();
        aL.resize();
        bd.resize();
        af.resize();
        aX.resize();
        bg.resize();
        aS.a7p();
      } else {
        aa.aEe();
        aa.aEf();
      }
      be.df = true;
    }
  }
  function aSp(f9) {
    if (f9 && f9 > 128) {
      return Math.floor(f9);
    }
    return 128;
  }
  function aSt(i, j) {
    var pj = (i + j) / 2;
    var aSu = a0.id !== 0 || i < j ? 700 : 1200;
    var aSv = Math.min(aSu / pj, 1);
    if (bi.eE.data[1].value === 0) {
      aSv = (2 * aSv) / 3;
    } else {
      aSv = Math.min(aSv + ((bi.eE.data[1].value - 1) * (1 - aSv)) / 2, 1);
    }
    h.k = (window.devicePixelRatio || 1) * aSv;
  }
  function aSq(aSs) {
    var s5, a7E, s6, sn;
    if (h.rg > 0) {
      return false;
    }
    s5 = aSp(document.documentElement.clientWidth);
    a7E = aSp(
      window.visualViewport && a0.id !== 2 ? window.visualViewport.height : document.documentElement.clientHeight
    );
    aSt(s5, a7E);
    if (aSs && !aSl) {
      aSl = true;
      document.body.removeChild(a0X);
    } else if (aSl) {
      aSl = false;
      document.body.appendChild(a0X);
    }
    s6 = Math.floor(0.5 + s5 * h.k);
    sn = Math.floor(0.5 + a7E * h.k);
    if (s6 === h.i && sn === h.j) {
      return false;
    }
    h.i = s6;
    h.j = sn;
    h.min = aA3(s6, sn);
    h.max = a5I(s6, sn);
    h.pj = bK.dn(s6 + sn, 2);
    h.tn = s6 / sn;
    a0X.width = s6;
    a0X.height = sn;
    a0X.style.width = s5 + "px";
    a0X.style.height = a7E + "px";
    aSn = be.eG + 1000;
    return true;
  }
}
function dD() {
  this.aRH = new aSw();
  this.zs = new aSx();
}
function aSx() {
  this.zt = function () {
    var aB, gE;
    var eh = al.jx;
    var ys = al.jy;
    var xX = ag.xX;
    var a73 = this.aFz();
    for (aB = 0; aB < eh; aB++) {
      gE = ys[aB];
      if (!b9.g2.jK(gE)) {
        xX[gE] = a73;
      }
    }
    var p3 = ag.p3;
    var iz = ag.iz;
    var j0 = ag.j0;
    var zb = ag.zb;
    eh = aD.jw;
    for (aB = 0; aB < eh; aB++) {
      if (zb[aB] === 0 || j0[aB] < 1 || 2 * p3[aB] > 3 * (iz[aB] + j0[aB])) {
        xX[aB] = 0;
      }
    }
    var zq = 0;
    for (aB = 0; aB < eh; aB++) {
      zq += xX[aB] > 0;
    }
    return zq;
  };
  this.aFz = function () {
    return Math.min(65535, be.jt());
  };
}
function aSw() {
  var size = 256;
  this.ir = function (aSy, aSz) {
    var g = new Uint8Array(size);
    aT0(g, aSy, aSz);
    aT1(g, aSy, 2);
    aT1(g, aSz, 7);
    aT2(g);
    return aQZ(g);
  };
  function aT0(g, aSy, aSz) {
    var aB;
    var eh = size;
    var aT3 = 3 + ((4 + aSy) % 32768);
    var aT4 = 12 + (aSz % 32768);
    var aT5 = 17 + (((aSy & aSz) + (aSy | aSz) + aSy) % 32768);
    for (aB = 0; aB < eh; aB++) {
      aT3 = 1 + ((aT3 * aT4) % aT5);
      g[aB] = aT3 % 256;
    }
  }
  function aT1(g, f9, hU) {
    var aB;
    var eh = size;
    for (aB = 0; aB < eh; aB++) {
      g[aB] = (g[aB] + ((f9 >> (aB + hU) % 30) & 1)) % 256;
    }
  }
  function aT2(g) {
    var aB, f9;
    var eh = size;
    var e2 = 0;
    for (aB = 0; aB < 30000; aB++) {
      f9 = g[e2];
      g[e2] = (f9 + aB + g[(e2 + aB) % eh]) % 256;
      e2 = (f9 + aB + e2 + (f9 & e2)) % eh;
    }
  }
  function aQZ(g) {
    var aB;
    var eh = size;
    var a7E = 1;
    var sn = 1;
    for (aB = 0; aB < eh; aB += 2) {
      a7E = ((1 + a7E) * (g[aB] + 1)) % 1073741824;
      sn = ((1 + sn) * (g[aB + 1] + 1)) % 1073741824;
    }
    return [a7E, sn];
  }
}
function ci() {
  var aT6;
  var aT7;
  var h9;
  var aT8;
  this.dX = function () {
    var aB, eo, eq, aRT, aT9;
    var i, j, xG, hb, vh, f9, gE, ex, f0;
    if (aTA()) {
      aT7 = null;
      return;
    }
    aT6 = bK.dn(64 + 32, 4);
    if (bR.eN === 1) {
      aRT = 0;
      aT9 = 160;
    } else {
      aRT = 128;
      aT9 = 32;
    }
    aT8 = S[7] + aRT + "," + aRT + "," + aRT + ")";
    aT7 = new Array(4);
    for (aB = 3; aB >= 0; aB--) {
      aT7[aB] = document.createElement(S[4]);
      i = aB % 2 === 0 ? bR.es : aT6;
      j = aB % 2 === 0 ? aT6 : bR.et + 2 * aT6;
      aT7[aB].width = i;
      aT7[aB].height = j;
      xG = aT7[aB].getContext("2d", {
        alpha: false,
      });
      hb = xG.getImageData(0, 0, i, j);
      vh = hb.data;
      if (aB % 2 === 0) {
        for (eq = aT6 - 1; eq >= 0; eq--) {
          f9 = aT9 + Math.floor(((eq + 1) * (aRT - aT9)) / (aT6 + 1));
          for (eo = i - 1; eo >= 0; eo--) {
            gE = ((aB === 0 ? aT6 - eq - 1 : eq) * i + eo) * 4;
            vh[gE] = f9;
            vh[gE + 1] = f9;
            vh[gE + 2] = f9;
            vh[gE + 3] = 255;
          }
        }
      } else {
        for (eo = aT6 - 1; eo >= 0; eo--) {
          f9 = aT9 + Math.floor(((eo + 1) * (aRT - aT9)) / (aT6 + 1));
          for (eq = j - 1 - aT6; eq >= aT6; eq--) {
            gE = (eq * i + (aB === 3 ? aT6 - eo - 1 : eo)) * 4;
            vh[gE] = f9;
            vh[gE + 1] = f9;
            vh[gE + 2] = f9;
            vh[gE + 3] = 255;
          }
        }
        for (f0 = 1; f0 >= 0; f0--) {
          for (eo = aT6 - 1; eo >= 0; eo--) {
            for (eq = aT6 - 1; eq >= 0; eq--) {
              ex = (Math.pow(eo * eo + eq * eq, 0.5) + 1) / (aT6 + 1);
              ex = ex > 1 ? 1 : ex;
              f9 = aT9 + Math.floor(ex * (aRT - aT9));
              gE = ((f0 === 0 ? aT6 - eq - 1 : eq + f0 * (j - aT6)) * i + (aB === 1 ? eo : aT6 - eo - 1)) * 4;
              vh[gE] = f9;
              vh[gE + 1] = f9;
              vh[gE + 2] = f9;
              vh[gE + 3] = 255;
            }
          }
        }
      }
      xG.putImageData(hb, 0, 0);
    }
    aTB(aT9);
  };
  function aTA() {
    h9 = true;
    aT8 = S[7] + bR.vf[0] + "," + bR.vf[1] + "," + bR.vf[2] + ")";
    if (bR.aJ8(bR.eN)) {
      return true;
    }
    h9 = false;
    return false;
  }
  function aTB(a4S) {
    bR.va.fillStyle = S[7] + a4S + "," + a4S + "," + a4S + ")";
    bR.va.fillRect(0, 0, bR.es, 1);
    bR.va.fillRect(0, bR.et - 1, bR.es, 1);
    bR.va.fillRect(0, 0, 1, bR.et);
    bR.va.fillRect(bR.es - 1, 0, 1, bR.et);
  }
  this.xA = function () {
    var f0 = h9 ? 0 : -aT6;
    if (!aKl(f0, f0, bR.es - 2 * f0, bR.et - 2 * f0, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF)) {
      tr.fillStyle = aT8;
      tr.fillRect(0, 0, h.i, h.j);
    }
  };
  this.tq = function () {
    if (h9) {
      return;
    }
    if (aKk(0, -aT6, bR.es, aT6, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF)) {
      tr.drawImage(aT7[0], bZ.aTG, bZ.aTH - aT6);
    }
    if (aKk(bR.es, -aT6, aT6, bR.et + 2 * aT6, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF)) {
      tr.drawImage(aT7[1], bZ.aTG + bR.es, bZ.aTH - aT6);
    }
    if (aKk(0, bR.et, bR.es, aT6, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF)) {
      tr.drawImage(aT7[2], bZ.aTG, bZ.aTH + bR.et);
    }
    if (aKk(-aT6, -aT6, aT6, bR.et + 2 * aT6, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF)) {
      tr.drawImage(aT7[3], bZ.aTG - aT6, bZ.aTH - aT6);
    }
  };
}
function d2() {
  this.hA = new aTI();
  this.aFx = new aTJ();
  this.xD = new aTK();
  this.y = new aTL();
  this.iQ = new aTM();
  this.a4S = new aTN();
  this.aTO = new aTP();
  this.jk = new aTQ();
  this.kY = new aTR();
  this.aTS = new aTT();
  this.dX = function () {
    this.xD.dX();
    this.y.dX();
    this.iQ.dX();
    this.a4S.dX();
    this.aTS.dX();
  };
  this.tq = function () {
    this.aTS.tq();
    this.xD.tq();
  };
}
function aTQ() {
  this.ir = function (player) {
    if (!aD.data.passableWater) {
      return false;
    }
    if (ag.gN[player].length === 0) {
      return false;
    }
    if (bM.y.ov === bM.y.kA) {
      return false;
    }
    var ou = bM.y.ou[player];
    if (ou >= Math.max(3 * an.performance.ky, aE.kA[aE.hL[player]])) {
      return false;
    }
    if (ou === bM.y.p7) {
      return false;
    }
    if (!b9.g2.p1(player, aE.k8[aE.hL[player]], 32, 0)) {
      return false;
    }
    if (!an.ie.ir(player) && !an.ih.ir(player)) {
      return false;
    }
    if (!aTU(player)) {
      return false;
    }
    return aTV(player);
  };
  function aTV(player) {
    b9.g2.p4(player);
    bM.y.pA(player);
    return true;
  }
  function aTU(a2U) {
    var a2V;
    var aTW = (bN.fI[1] + bL.hg[bN.fI[2] - 1]) << 2;
    if (ac.eY(aTW)) {
      return true;
    }
    a2V = ac.eZ(aTW);
    if (a2U === a2V) {
      return false;
    }
    if (!ea(a2U, a2V)) {
      return false;
    }
    return true;
  }
}
function aTI() {
  this.hB = function (player, aTX) {
    if (!aD.data.passableWater) {
      return false;
    }
    if (!bL.iL(aTX)) {
      return false;
    }
    if (bM.y.ov === bM.y.kA) {
      return false;
    }
    if (bM.y.ou[player] === bM.y.p7) {
      return false;
    }
    if (ag.gN[player].length === 0) {
      return false;
    }
    if (!bM.kY.kZ(player, aTX)) {
      return false;
    }
    if (!aTY(aTX)) {
      return false;
    }
    return true;
  };
  this.oF = function (player, m9, aTX) {
    if (!bL.iL(aTX)) {
      return false;
    }
    if (!this.pB(player, m9)) {
      return false;
    }
    if (!bM.kY.pC(aTX)) {
      return false;
    }
    if (!aTY(aTX)) {
      return false;
    }
    return true;
  };
  this.pB = function (player, id) {
    var aB, aTZ;
    var sI = player << 3;
    var sJ = sI + bM.y.ou[player];
    var aTa = bM.y.aTa;
    var aTb = bM.y.aTb;
    for (aB = sI; aB < sJ; aB++) {
      aTZ = aTa[aB];
      if (id === aTb[aTZ]) {
        bN.fI[3] = aTZ;
        return true;
      }
    }
    return false;
  };
  this.oE = function (eT) {
    var a4T = bM.a4S.a4T;
    if (!this.pB(aD.eR, a4T)) {
      return false;
    }
    b7.h3.oE(a4T, eT);
    return true;
  };
  this.a4V = function (kz, l0) {
    var player = aD.eR;
    var eh = bM.y.ou[player];
    if (eh === 0) {
      return false;
    }
    var aTa = bM.y.aTa;
    var mC = bM.y.mC;
    var sI = player << 3;
    var sJ = sI + eh;
    var aTc = 16 * 5;
    var aN9 = -1;
    for (var aB = sJ - 1; aB >= sI; aB--) {
      var aTd = aTa[aB];
      var ex = bL.hy(kz, l0, mC[aTd]);
      if (ex < aTc) {
        aTc = ex;
        aN9 = aTd;
      }
    }
    if (!aTe(aN9, kz, l0)) {
      return false;
    }
    bM.a4S.a4T = bM.y.aTb[aN9];
    bk.p9.a4V();
    return true;
  };
  this.a4c = function (kz, l0) {
    var eh = bM.y.ov;
    if (eh < 1) {
      return -1;
    }
    var mC = bM.y.mC;
    var aTc = 16 * 5;
    var aN9 = -1;
    for (var aB = 0; aB < eh; aB++) {
      var ex = bL.hy(kz, l0, mC[aB]);
      if (ex < aTc) {
        aTc = ex;
        aN9 = aB;
      }
    }
    if (!aTe(aN9, kz, l0)) {
      return -1;
    }
    return aN9;
  };
  this.mB = function (player, id) {
    var eh = bM.y.ou[player];
    var sI = player << 3;
    var sJ = sI + eh;
    var aTb = bM.y.aTb;
    var aTa = bM.y.aTa;
    for (var aB = sI; aB < sJ; aB++) {
      var aTd = aTa[aB];
      if (aTb[aTd] === id) {
        return aTd;
      }
    }
    return -1;
  };
  this.aFu = function (player) {
    var eh = bM.y.ou[player];
    var sI = player << 3;
    var sJ = sI + eh;
    var aTa = bM.y.aTa;
    var a5b = bM.y.a5b;
    var hL = 0;
    for (var aB = sI; aB < sJ; aB++) {
      hL += a5b[aTa[aB]];
    }
    return hL;
  };
  this.mH = function (player) {
    var eh = bM.y.ou[player];
    if (eh === 0) {
      return -1;
    }
    return bM.y.aTa[player << 3];
  };
  function aTe(aB, kz, l0) {
    if (aB < 0) {
      return false;
    }
    var aTf = bM.y.mC[aB];
    var aTg = bL.i4(aTf);
    var aTh = bL.i7(aTf);
    var aTi = 1.25 * 16 * (0.9 + 0.1 * Math.log10(bM.y.a5b[aB]));
    aTi = Math.max(aTi, bL.iK(b9.ph.sN(0.02, 1.7)));
    return bK.aKs(bL.i3(kz), bL.i6(l0), aTg, aTh, aTi);
  }
  function aTY(aTX) {
    var aTj = 4 + (0.03 * (1 + 1.5 * a0.a1.r7()) * h.pj) / iI;
    return bL.i8(aTX, bN.fI[1]) < aTj;
  }
}
function aTJ() {
  this.aFy = function (player) {
    var aB;
    var aTa = bM.y.aTa;
    var sI = player << 3;
    var sJ = sI + bM.y.ou[player] - 1;
    for (aB = sJ; aB >= sI; aB--) {
      this.aTk(aTa[aB]);
    }
  };
  this.aTk = function (aTl) {
    var y = bM.y;
    var aTm = y.ov - 1;
    var aTn = y.a5a[aTl];
    var aTo = y.aTp[aTl];
    var aTq = y.mC[aTl];
    y.ov = aTm;
    y.a5a[aTl] = y.a5a[aTm];
    y.aTr[aTl] = y.aTr[aTm];
    y.aTs[aTl] = y.aTs[aTm];
    y.mC[aTl] = y.mC[aTm];
    y.aTt[aTl] = y.aTt[aTm];
    y.a5b[aTl] = y.a5b[aTm];
    y.aTp[aTl] = y.aTp[aTm];
    y.aTb[aTl] = y.aTb[aTm];
    y.aTu[aTl] = y.aTu[aTm];
    y.aTv[aTl] = y.aTv[aTm];
    y.aTa[y.a5a[aTl]] = aTl;
    aTw(aTn);
    bM.iQ.iQ[bL.iP(y.mC[aTl])][y.aTp[aTl]] = aTl;
    aTx(bL.iP(aTq), aTo);
  };
  function aTw(aS0) {
    var player = aS0 >> 3;
    var y = bM.y;
    var eh = y.ou[player] - 1;
    var aTy = (player << 3) + eh;
    y.ou[player] = eh;
    if (aTy === aS0) {
      return;
    }
    y.aTa[aS0] = y.aTa[aTy];
    y.a5a[y.aTa[aS0]] = aS0;
  }
  function aTx(aB, aTz) {
    var aLo = bM.iQ.iQ[aB];
    var e = aLo.pop();
    if (aTz === aLo.length) {
      return;
    }
    aLo[aTz] = e;
    bM.y.aTp[e] = aTz;
  }
}
function aTK() {
  var aU0;
  var xh = 8;
  var aU1 = new Array(2);
  this.dX = function () {
    aU0 = new Array(aD.ee);
    aU1[0] = aU2(255);
    aU1[1] = aU2(0);
  };
  function aU2(e2) {
    var hY = xh + 4;
    var a1t = b9.ph.vW(hY, hY);
    var he = b9.ph.getContext(a1t, true);
    var hb = b9.ph.getImageData(he, hY, hY);
    var vh = hb.data;
    aU3(vh, hY + 1, e2);
    aU3(vh, hY + 2, e2);
    aU3(vh, 2 * hY + 1, e2);
    aU3(vh, 2 * hY - 3, e2);
    aU3(vh, 2 * hY - 2, e2);
    aU3(vh, 3 * hY - 2, e2);
    aU3(vh, hY * (hY - 3) + 1, e2);
    aU3(vh, hY * (hY - 2) + 1, e2);
    aU3(vh, hY * (hY - 2) + 2, e2);
    aU3(vh, hY * (hY - 2) - 2, e2);
    aU3(vh, hY * (hY - 1) - 3, e2);
    aU3(vh, hY * (hY - 1) - 2, e2);
    he.putImageData(hb, 0, 0);
    return a1t;
  }
  function aU3(vh, eT, e2) {
    var eL = 4 * eT;
    vh[eL] = 255;
    vh[eL + 1] = 255;
    vh[eL + 2] = e2;
    vh[eL + 3] = 255;
  }
  function vW(player) {
    var a1t = b9.ph.vW(xh, xh);
    var he = b9.ph.getContext(a1t, true);
    aU4(he, player);
    return a1t;
  }
  function aU4(he, player) {
    var eo, eq, i2, i5, ex, eT, aU5, aU6, aU7;
    var hY = xh;
    var hb = b9.ph.getImageData(he, hY, hY);
    var vh = hb.data;
    var ke = (hY >> 1) - 0.5;
    var aT8 = ac.a6B(player);
    var aU8 = b9.pq.a1R(aT8, 0.5);
    if (!b9.pq.a1T(aT8, aU8, 300)) {
      b9.pq.a1V(aT8, 100);
    }
    for (eq = 0; eq < hY; eq++) {
      for (eo = 0; eo < hY; eo++) {
        i2 = eo - ke;
        i5 = eq - ke;
        eT = (eq * hY + eo) * 4;
        ex = i2 * i2 + i5 * i5;
        aU6 = ((hY - 1.5) * (hY - 1.5)) / 4;
        aU7 = ((hY - 4.5) * (hY - 4.5)) / 4;
        aU5 = ex <= aU7 ? aU8 : aT8;
        vh[eT] = aU5[0];
        vh[eT + 1] = aU5[1];
        vh[eT + 2] = aU5[2];
        vh[eT + 3] = ex > aU6 ? 0 : 255;
      }
    }
    he.putImageData(hb, 0, 0);
  }
  this.tq = function () {
    var aB, aU9, aKt, aKu, eo, eq, player, fontSize, a1t, el, hL, aUA, i1;
    var aUB, aUC, aUD, aUE;
    var mC = bM.y.mC;
    var a5a = bM.y.a5a;
    var a5b = bM.y.a5b;
    var aTv = bM.y.aTv;
    var aUF = aU0;
    var aUG = aD.eR;
    var aUH = -1;
    var eh = bM.y.ov;
    var aUI = h.i;
    var aUJ = h.j;
    var aUK = bR.es << 4;
    var aUL = xh;
    var eW = iI;
    var eL = eW / aUL;
    var mD = iH / eW;
    var mE = iJ / eW;
    var mQ = (aUI + iH) / eW;
    var mR = (aUJ + iJ) / eW;
    var i2 = mQ - mD;
    var i5 = mR - mE;
    var he = tr;
    if (bM.hA.pB(aD.eR, bM.a4S.a4T)) {
      aUH = bN.fI[3];
    }
    he.imageSmoothingEnabled = eW < 9;
    b9.ph.textAlign(he, 1);
    b9.ph.textBaseline(he, 1);
    for (aB = 0; aB < eh; aB++) {
      player = a5a[aB] >> 3;
      hL = a5b[aB];
      aU9 = 0.9 + 0.1 * Math.log10(hL);
      i1 = mC[aB];
      aKt = (i1 % aUK) / 16 - aU9;
      aKu = Math.floor(i1 / aUK) / 16 - aU9;
      eo = (aUI * (aKt - mD)) / i2;
      eq = (aUJ * (aKu - mE)) / i5;
      aUD = +(player === aUG);
      aUC = 1 + aUD / 8;
      aUE = eW * aU9;
      aUB = -2 * aUE * aUC;
      aUC = (aUD * aUE) / 4;
      if (eo < aUB || eq < aUB || eo > aUI + aUC || eq > aUJ + aUC) {
        continue;
      }
      el = 2 * aU9 * eL;
      aUA = aU9 * eW;
      a1t = aUF[player];
      if (a1t === undefined) {
        aUF[player] = a1t = vW(player);
      }
      if (player === aUG) {
        he.setTransform(el, 0, 0, el, eo - el * 2, eq - el * 2);
        he.drawImage(aU1[+(aB === aUH)], 0, 0);
      }
      he.setTransform(el, 0, 0, el, eo, eq);
      he.drawImage(a1t, 0, 0);
      fontSize = Math.floor(aUM(hL) * aUA);
      if (fontSize < 6) {
        continue;
      }
      he.setTransform(1, 0, 0, 1, 0, 0);
      he.fillStyle = aTv[aB] ? bA.nL : bA.mn;
      he.font = b9.ph.rY(1, fontSize);
      he.fillText(b9.qh.yM(hL), eo + aUA, eq + aUA + 0.1 * fontSize);
    }
    he.imageSmoothingEnabled = false;
    he.setTransform(1, 0, 0, 1, 0, 0);
  };
  function aUM(hL) {
    if (hL < 1000) {
      return 0.42;
    }
    if (hL < 10000) {
      return 0.34;
    }
    if (hL < 1000000) {
      return 0.26;
    }
    if (hL < 100000000) {
      return 0.19;
    }
    return 0.15;
  }
}
function aTT() {
  var a1t;
  var hY = 20;
  this.dX = function () {
    if (a1t) {
      return;
    }
    a1t = bO.y.aUN(hY, bf.aUO[7]);
  };
  this.tq = function () {
    var mX = iI;
    if (mX >= 5) {
      return;
    }
    var aUI = h.i;
    var aUJ = h.j;
    var mD = iH / mX;
    var mE = iJ / mX;
    var mQ = (aUI + iH) / mX;
    var mR = (aUJ + iJ) / mX;
    var gF = -hY * mX;
    var aUP = 0.5 * gF;
    var aUK = bR.es << 4;
    var eh = bM.y.ov;
    var mC = bM.y.mC;
    var aUQ = a1t;
    var he = tr;
    if (mX > 3) {
      he.globalAlpha = 0.5 * (5 - mX);
    }
    for (var aB = 0; aB < eh; aB++) {
      var i1 = mC[aB];
      var aUR = (i1 % aUK) / 16;
      var aUS = Math.floor(i1 / aUK) / 16;
      var eo = (aUI * (aUR - mD)) / (mQ - mD) + aUP;
      var eq = (aUJ * (aUS - mE)) / (mR - mE) + aUP;
      if (eo > aUI || eq > aUJ || eo < gF || eq < gF) {
        continue;
      }
      he.setTransform(mX, 0, 0, mX, eo, eq);
      he.drawImage(aUQ, 0, 0);
    }
    he.globalAlpha = 1;
    he.setTransform(mX, 0, 0, mX, 0, 0);
  };
}
function aTP() {
  this.ir = function () {
    var aB, aTf, aTO;
    var aTu = bM.y.aTu;
    var mC = bM.y.mC;
    var aTs = bM.y.aTs;
    for (aB = bM.y.ov - 1; aB >= 0; aB--) {
      aTf = mC[aB];
      aTO = aTu[aB];
      if (aTO === 0 || aTf !== aTs[aB]) {
        continue;
      }
      aUT(aB, bL.iO(aTf), aTO - 1);
      bM.aFx.aTk(aB);
    }
  };
  function aUT(aB, aUU, hT) {
    var j7;
    var player = bM.y.a5a[aB] >> 3;
    var aTW = (aUU + bL.hg[hT]) << 2;
    var hL = bM.y.a5b[aB];
    bc.aUV(player);
    if (ac.eY(aTW)) {
      j7 = aD.ee;
    } else {
      j7 = ac.eZ(aTW);
      if (j7 === player) {
        var f9 = b9.g2.g5(player, hL);
        bc.g6(player, hL - f9, 12);
        return;
      }
      if (!ea(player, j7)) {
        b7.jz.oT(player, j7, hL);
        return;
      }
    }
    if (!ad.jI(player, j7) && !ad.ja(player)) {
      bc.g6(player, hL, 12);
      return;
    }
    ag.g8[player].push(aUU << 2);
    ad.j4(player, hL, j7);
    aF.j5(player, true);
  }
  this.aUW = function (player, eT, hT, m9) {
    if (hT === 0) {
      return;
    }
    var aUG = aD.eR;
    if (!b9.g2.gt(aUG)) {
      return;
    }
    if (!ea(player, aUG)) {
      return;
    }
    if (player === aUG) {
      return;
    }
    if (ag.gN[aUG].length === 0) {
      return;
    }
    hT--;
    var aTW = (eT + bL.hg[hT]) << 2;
    if (!ac.eY(aTW) && !ea(player, ac.eZ(aTW))) {
      return;
    }
    var ev = false;
    for (var aB = 0; aB < 4; aB++) {
      aTW = (eT + bL.hg[aB]) << 2;
      if (!ac.ec(aTW)) {
        continue;
      }
      if (ac.eY(aTW)) {
        continue;
      }
      if (ac.eZ(aTW) === aUG) {
        ev = true;
        break;
      }
    }
    if (!ev) {
      return;
    }
    aN.a4U(719, 0);
    aN.xZ(180, L(435, [ag.xa[player]]), 719, player, bA.nK, bA.mk, -1, true, undefined, {
      f1: 1,
      m9: m9,
    });
  };
}
function aTL() {
  this.aUX = null;
  this.kA = 512;
  this.p7 = 8;
  this.ov = 0;
  this.aUY = 0;
  this.a5a = new Uint16Array(this.kA);
  this.aTr = new Uint32Array(this.kA);
  this.aTs = new Uint32Array(this.kA);
  this.mC = new Uint32Array(this.kA);
  this.aTt = new Uint16Array(this.kA);
  this.a5b = new Uint32Array(this.kA);
  this.aTp = new Uint16Array(this.kA);
  this.aTb = new Uint16Array(this.kA);
  this.aTu = new Uint8Array(this.kA);
  this.aTv = new Uint8Array(this.kA);
  this.ou = new Uint8Array(aD.ee);
  this.aTa = new Uint16Array(this.p7 * aD.ee);
  this.dX = function () {
    this.aUY = 0;
    this.ov = 0;
    this.aUX = new Uint8Array(bR.es + bR.et);
    this.ou.fill(0);
  };
  this.pA = function (player) {
    var eh = this.ov;
    var aUZ = bL.iN(bN.fI[0]);
    var aUa = this.ou[player];
    var aUb = (player << 3) + aUa;
    this.a5a[eh] = aUb;
    this.aTr[eh] = aUZ;
    this.mC[eh] = aUZ;
    this.aTs[eh] = bL.iN(bN.fI[1]);
    this.aTt[eh] = 0;
    var hL = bN.fE[0];
    if (hL < 60) {
      b9.g2.g3(player, 60 - hL);
      this.a5b[eh] = 60;
    } else {
      this.a5b[eh] = hL;
    }
    this.aTp[eh] = bM.iQ.pA(eh, bL.iP(aUZ));
    this.aTb[eh] = this.aUY;
    this.aTu[eh] = bN.fI[2];
    this.aTv[eh] = 0;
    this.aUY = (this.aUY + 1) & 1023;
    this.aTa[aUb] = eh;
    this.ou[player] = aUa + 1;
    this.ov++;
    bM.aTO.aUW(player, bN.fI[1], bN.fI[2], this.aTb[eh]);
  };
  this.oE = function () {
    var aTZ = bN.fI[3];
    this.aTr[aTZ] = this.mC[aTZ];
    this.aTs[aTZ] = bL.iN(bN.fI[1]);
    this.aTt[aTZ] = 0;
    this.aTu[aTZ] = bN.fI[2];
    bM.aTO.aUW(this.a5a[aTZ] >> 3, bN.fI[1], bN.fI[2], this.aTb[aTZ]);
  };
  this.ir = function () {
    bM.aTO.ir();
    var gE = aD.eR;
    var dm = bM.hA.aFu(gE);
    aUc(this);
    aUd(this);
    aUe(this);
    aUf(this);
    bc.g6(gE, dm - bM.hA.aFu(gE), 15);
  };
  function aUe(rL) {
    if (be.jt() % 5 !== 3) {
      return;
    }
    var aB, hL;
    var a5b = rL.a5b;
    var eh = rL.ov;
    for (aB = 0; aB < eh; aB++) {
      hL = a5b[aB];
      a5b[aB] = Math.max(hL - Math.max(1, hL >> 7), 0);
    }
  }
  function aUf(rL) {
    var aB;
    var a5b = rL.a5b;
    var aTv = rL.aTv;
    var eh = rL.ov;
    for (aB = eh - 1; aB >= 0; aB--) {
      aTv[aB] = aTv[aB] >> 1;
      if (a5b[aB] === 0) {
        bM.aFx.aTk(aB);
      }
    }
  }
  function aUc(rL) {
    var aB, aUZ, aUg, aUh, aUi, aUj, aUk, aUl, aUm, aUn, aUo, ek, aUp, gF;
    var aTr = rL.aTr;
    var aTs = rL.aTs;
    var mC = rL.mC;
    var a5b = rL.a5b;
    var aTv = rL.aTv;
    var aTt = rL.aTt;
    var aTp = rL.aTp;
    var eh = rL.ov;
    var aUK = bR.es << 4;
    for (aB = eh - 1; aB >= 0; aB--) {
      aUh = mC[aB];
      aUg = aTs[aB];
      if (aUh === aUg) {
        continue;
      }
      aUZ = aTr[aB];
      aUj = aUZ % aUK;
      aUk = ~~((aUZ + 0.5) / aUK);
      aUl = aUg % aUK;
      aUm = ~~((aUg + 0.5) / aUK);
      aUn = aUl - aUj;
      aUo = aUm - aUk;
      ek = ~~Math.sqrt(aUn * aUn + aUo * aUo + 0.5);
      gF = 200000 + Math.min(20 * a5b[aB], 400000);
      if (aTv[aB]) {
        gF = bK.dn(gF, 5);
      }
      aUp = aTt[aB] + Math.max(~~((gF + 0.5) / ek), 1);
      if (aUp >= 65535) {
        mC[aB] = aUi = aUg;
      } else {
        aTt[aB] = aUp;
        mC[aB] = aUi = aUj + bK.dn(aUp * aUn, 65536) + aUK * (aUk + bK.dn(aUp * aUo, 65536));
      }
      aTp[aB] = bM.iQ.aUq(aTp[aB], aUh, aUi);
    }
  }
  function aUd(rL) {
    if (be.jt() % 2 !== 1) {
      return;
    }
    var aB, hU, ke, f1, f2, aUr, y2, aUs, h6, vp, hk, hl, mD, mE, aUZ, aUg, aUt;
    var ex, aUu, aUv, aUw;
    var eh = rL.ov;
    var mC = rL.mC;
    var a5a = rL.a5a;
    var a5b = rL.a5b;
    var aTv = rL.aTv;
    var iQ = bM.iQ.iQ;
    var aUx = iQ.length;
    var aUy = bM.iQ.aUy;
    var aUK = bR.es << 4;
    var aUz = aD.hW;
    var aRo = bf.ef;
    var aTc = 120 * 120;
    var gF = (eh - 1) * (bK.dn(be.jt(), 2) % 2);
    for (aB = 0; aB < eh; aB++) {
      hU = Math.abs(aB - gF);
      aUZ = mC[hU];
      ke = bL.iP(aUZ);
      h6 = a5a[hU] >> 3;
      mD = aUZ % aUK;
      mE = ~~((aUZ + 0.5) / aUK);
      aUv = a5b[hU];
      for (f1 = 0; f1 < 9; f1++) {
        aUr = ke + aUy[f1];
        if (aUr < 0 || aUr >= aUx) {
          continue;
        }
        aUs = iQ[aUr];
        y2 = aUs.length;
        for (f2 = 0; f2 < y2; f2++) {
          aUt = aUs[f2];
          vp = a5a[aUt] >> 3;
          if (h6 === vp || (aUz && aRo[h6] === aRo[vp] && aRo[h6])) {
            continue;
          }
          aUg = mC[aUt];
          hk = mD - (aUg % aUK);
          hl = mE - ~~((aUg + 0.5) / aUK);
          ex = hk * hk + hl * hl;
          if (ex < aTc) {
            aUw = a5b[aUt];
            if (aUw <= aUv) {
              aUu = Math.max(1, bK.dn(aUw + bK.dn(aUv - aUw, 10), 10));
            } else {
              aUu = Math.max(1, bK.dn(aUv, 10));
            }
            a5b[aUt] = Math.max(aUw - aUu, 0);
            aTv[aUt] = 4;
          }
        }
      }
    }
  }
}
function aTM() {
  this.aV0 = 32;
  this.eo = 0;
  this.eq = 0;
  this.iR = 0;
  this.aV1 = 0;
  this.aV2 = 4;
  this.iQ = null;
  this.aUy = new Int16Array(9);
  this.dX = function () {
    this.iR = 1 + bK.dn(bR.es - 1, this.aV0);
    this.aV1 = 1 + bK.dn(bR.et - 1, this.aV0);
    this.iQ = new Array(this.iR * this.aV1);
    b9.pq.a1Q(this.iQ);
    aV3(this.aUy, this.iR);
  };
  function aV3(aUy, i) {
    var eo, eq;
    for (eo = -1; eo <= 1; eo++) {
      for (eq = -1; eq <= 1; eq++) {
        aUy[3 * (1 + eq) + 1 + eo] = eq * i + eo;
      }
    }
  }
  this.pA = function (aV4, aB) {
    this.iQ[aB].push(aV4);
    return this.iQ[aB].length - 1;
  };
  this.aUq = function (aV5, aUZ, aUg) {
    var aV6, aV7;
    var sI = bL.iP(aUZ);
    var sJ = bL.iP(aUg);
    if (sI === sJ) {
      return aV5;
    }
    aV6 = this.iQ[sI].pop();
    if (this.iQ[sI].length === aV5) {
      return this.pA(aV6, sJ);
    }
    aV7 = this.iQ[sI][aV5];
    this.iQ[sI][aV5] = aV6;
    bM.y.aTp[aV6] = aV5;
    return this.pA(aV7, sJ);
  };
}
function aTR() {
  this.kZ = function (player, aV8) {
    var hT, hj;
    var h5 = bL.hr(player, aV8);
    if (h5 === aV8) {
      return false;
    }
    hT = bL.hi(h5, aV8);
    hj = bL.iS(h5, hT);
    if (!ac.h9(hj << 2)) {
      hT = bL.hp(h5, aV8, hT);
      hj = bL.iS(h5, hT);
      if (!ac.h9(hj << 2)) {
        return false;
      }
    }
    bN.fI[0] = hj;
    bN.fI[1] = aV8;
    bN.fI[2] = 0;
    if (hj === aV8) {
      return true;
    }
    if (a0N(bL.iN(hj), aV8)) {
      if (bN.fI[2] !== 0 && bL.hx(player, (bN.fI[1] + bL.hg[bN.fI[2] - 1]) << 2)) {
        return false;
      }
      return true;
    }
    return false;
  };
  this.pC = function (aV8) {
    var aUZ = bM.y.mC[bN.fI[3]];
    bN.fI[1] = aV8;
    bN.fI[2] = 0;
    return a0N(aUZ, aV8);
  };
  function a0N(aUg, aV8) {
    if (!aV9(aUg, aV8)) {
      return false;
    }
    if (bN.fB[0] === 0) {
      if (ac.h9(aV8 << 2)) {
        return true;
      }
      return false;
    }
    if (!aVA(aV8)) {
      return false;
    }
    if (bN.fI[2] && ac.em(bN.fI[4])) {
      return false;
    }
    if (!aVB(bL.iO(aUg))) {
      return false;
    }
    return true;
  }
  function aV9(aUg, aTX) {
    var hj = bL.iO(aUg);
    var aVC = Math.abs(bL.ep(aTX) - bL.ep(hj));
    var aVD = Math.abs(bL.er(aTX) - bL.er(hj));
    if (Math.max(aVC, aVD) === 0) {
      return false;
    }
    aVE(aUg, bL.iN(aTX), aVC, aVD);
    return true;
  }
  function aVE(aUZ, aUg, aVC, aVD) {
    var aVF = bL.i4(aUZ);
    var aVG = bL.i7(aUZ);
    var aVH = bL.i4(aUg);
    var aVI = bL.i7(aUg);
    var aVJ = aVH - aVF;
    var aVK = aVI - aVG;
    var aVL = Math.abs(aVJ);
    var aVM = Math.abs(aVK);
    var aVN = aVJ > 0 ? 1 : 3;
    var aVO = aVK > 0 ? 2 : 0;
    if (aVL > aVM) {
      aVP(aVF, aVG, aVF + aVL, aVG + aVM, aVN, aVO, aVC);
    } else {
      aVP(aVG, aVF, aVG + aVM, aVF + aVL, aVO, aVN, aVD);
    }
  }
  function aVP(aVF, aVG, aVH, aVI, aVN, aVO, aVC) {
    var aB, eq;
    var aUX = bM.y.aUX;
    var gF = 0;
    var aVQ = 0;
    var j = aVI - aVG;
    var i = aVH - aVF;
    var aVR = aVF % 16;
    for (aB = 1; aB <= aVC; aB++) {
      aUX[gF++] = aVN;
      aUX[gF] = aVO;
      eq = ((j * (aVR + (aB << 4)) + 0.5) / i) >> 4;
      gF += eq - aVQ;
      aVQ = eq;
    }
    bN.fN(bN.fB, gF);
  }
  function aVA(aTX) {
    if (ac.h9(aTX << 2)) {
      return true;
    }
    return aVS(aTX);
  }
  function aVS(aTX) {
    var aB, hT;
    var aUX = bM.y.aUX;
    var aVT = bL;
    var eh = bN.fB[0];
    var aVU = 4 * aTX;
    for (aB = eh - 1; aB >= 0; aB--) {
      hT = aUX[aB];
      var aVV = aVU;
      aVU = aVT.iT(aVU, (hT + 2) & 3);
      if (ac.h9(aVU)) {
        bN.fB[0] = aB;
        bN.fI[1] = aVU >> 2;
        bN.fI[2] = 1 + hT;
        bN.fI[4] = aVV;
        return true;
      }
    }
    return false;
  }
  function aVB(aVW) {
    var aB;
    var vh = aAZ;
    var aUX = bM.y.aUX;
    var eh = bN.fB[0] - 1;
    var aVU = 4 * aVW;
    var hh = bL.hh;
    for (aB = 0; aB < eh; aB++) {
      aVU += hh[aUX[aB]];
      if (!(vh[aVU + 3] === 0 && vh[aVU + 2] === 2)) {
        return false;
      }
    }
    return true;
  }
}
function aTN() {
  var xh = 32;
  var xg = new Array(2);
  this.a4T = -1;
  this.dX = function () {
    this.a4T = -1;
    if (xg[0]) {
      return;
    }
    xg[0] = vW(255);
    xg[1] = vW(0);
  };
  function vW(f2) {
    var eo, eq, eT, i2, i5, ex;
    var hY = xh;
    var a1t = b9.ph.vW(hY, hY);
    var he = b9.ph.getContext(a1t, true);
    var hb = b9.ph.getImageData(he, hY, hY);
    var vh = hb.data;
    var ke = (hY >> 1) - 0.5;
    var kf = Math.sqrt(ke * ke);
    vh.fill(255);
    for (eq = 0; eq < hY; eq++) {
      for (eo = 0; eo < hY; eo++) {
        i2 = eo - ke;
        i5 = eq - ke;
        eT = (eq * hY + eo) * 4;
        ex = (255 * 2.8 * (kf - Math.sqrt(i2 * i2 + i5 * i5))) / kf;
        vh[eT + 2] = f2;
        vh[eT + 3] = ex > 255 ? 0 : ex;
      }
    }
    he.putImageData(hb, 0, 0);
    return a1t;
  }
  this.aVX = function (he, eL, eo, eq, e1, aB) {
    if (!b9.g2.gt(aD.eR)) {
      return;
    }
    eL *= (4 / 3) * (20 / 32);
    e1 *= 4 / 3;
    he.setTransform(eL, 0, 0, eL, eo - e1, eq - e1);
    he.drawImage(xg[+(bM.y.aTb[aB] === this.a4T)], 0, 0);
  };
}
function da() {
  this.aPW = [
    L(436),
    L(437),
    L(438),
    L(439),
    L(440),
    L(441),
    L(442),
    L(443),
    L(444),
    L(445),
    L(446),
    L(447),
    L(448),
    L(449),
    L(450),
  ];
  var aVY = [
    S[52],
    "",
    "KeyB",
    "",
    "KeyW",
    "",
    "KeyS",
    "",
    "KeyD",
    "",
    "KeyA",
    "",
    "KeyH",
    "",
    "NumpadAdd",
    "",
    "NumpadSubtract",
    "",
    "ArrowLeft",
    "",
    "ArrowRight",
    "",
    "ArrowUp",
    "",
    "ArrowDown",
    "",
    "KeyM",
    "",
    "KeyP",
    "",
  ];
  this.aAF = new Array(aVY.length);
  this.dX = function () {
    var value = bi.eE.data[155].value;
    var g = value.split(";");
    var ke = g.length;
    aVZ();
    if (ke > aVY.length) {
      return;
    }
    for (var aB = 0; aB < ke; aB++) {
      if (g[aB].length) {
        this.aAF[aB] = g[aB];
      }
    }
  };
  function aVZ() {
    var eh = aVY.length;
    for (var aB = 0; aB < eh; aB++) {
      bW.aAF[aB] = aVY[aB];
    }
  }
  this.aPY = function (e2, code) {
    var aAF = this.aAF;
    var aVa = aVY;
    aAF[e2] = code;
    var pO = "";
    var eh = aAF.length;
    var aVb = [];
    for (var aB = 0; aB < eh; aB++) {
      aVb.push(aAF[aB] === aVa[aB] ? "" : aAF[aB]);
    }
    eh--;
    for (var aB = 0; aB < eh; aB++) {
      pO += aVb[aB] + ";";
    }
    pO += aVb[eh];
    bi.rB.rC(155, pO);
  };
  this.aPV = function () {
    bi.rB.rC(155, "");
    this.dX();
  };
  this.f2 = function (code, e2) {
    return code === this.aAF[e2] || code === this.aAF[e2 + 1];
  };
}
function dU() {
  var aVc = 1;
  var aVd = new Array(aVc);
  var aVe = new Array(aVc);
  var aVf = 20;
  var eF = 0;
  var aVg = false;
  this.dX = function () {
    if (window.document.documentMode) {
      return;
    }
    var src =
      "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
    for (var aB = aVc - 1; aB >= 0; aB--) {
      aVh(aB, src);
    }
    aVg = true;
  };
  this.tK = function () {
    if (!aVg) {
      return;
    }
    aVg = false;
    for (var aB = aVc - 1; aB >= 0; aB--) {
      aVd[aB].onpause = null;
      aVd[aB].oncanplaythrough = null;
      document.body.removeChild(aVd[aB]);
      aVd[aB] = null;
    }
  };
  function aVh(aB, src) {
    aVe[aB] = 0;
    aVd[aB] = document.createElement("audio");
    aVd[aB].src = src;
    aVd[aB].setAttribute("preload", S[9]);
    aVd[aB].setAttribute("controls", S[5]);
    aVd[aB].style.display = S[5];
    aVd[aB].onpause = function () {
      aVe[aB] = 1;
    };
    aVd[aB].oncanplaythrough = function () {
      aVe[aB] = aVe[aB] === 0 ? 1 : aVe[aB];
    };
    document.body.appendChild(aVd[aB]);
  }
  function aVi() {
    aVf++;
    bo.play();
  }
  this.play = function () {
    if (!aVg) {
      return;
    }
    var dm = performance.now();
    if (dm > eF + 66) {
      for (var aB = aVc - 1; aB >= 0; aB--) {
        if (aVe[aB] === 1) {
          eF = dm;
          aVe[aB] = 2;
          aVd[aB].play();
          return;
        }
      }
    }
    if (aVf > 0) {
      aVf--;
      setTimeout(aVi, 66);
    }
  };
}
function cW() {
  this.a71 = function () {
    if (al.jx < 3) {
      return false;
    }
    if (ag.gU[lB[0]] >= aD.jg >> 1) {
      return false;
    }
    if (aD.hW) {
      return aVj();
    } else {
      return aVk();
    }
  };
  function aVk() {
    var aVl = ae.aH0();
    if (2 * ag.gi[lB[0]] >= aVl) {
      return false;
    }
    return true;
  }
  function aVj() {
    var aVl = ae.aH0();
    var aVm = ae.aH1(bg.l8());
    if (2 * aVm >= aVl) {
      return false;
    }
    return true;
  }
}
function c7() {
  this.dX = function () {
    if (aD.data.sResourcesType === 0) {
      aVn();
    } else if (aD.data.sResourcesType === 1) {
      aVo();
    } else {
      aVp();
    }
    bc.li[8] = ag.gi[aD.eR];
  };
  function aVn() {
    var aUa = aD.jw;
    var gi = ag.gi;
    for (var aB = 0; aB < aUa; aB++) {
      gi[aB] = 512;
    }
    var aUb = aD.wD;
    var k9 = aE.k9;
    var hL = aE.hL;
    for (aB = aUa; aB < aUb; aB++) {
      gi[aB] = k9[hL[aB]];
    }
  }
  function aVo() {
    var eh = aD.wD;
    var gi = ag.gi;
    var sResourcesValue = aD.data.sResourcesValue;
    for (var aB = 0; aB < eh; aB++) {
      gi[aB] = sResourcesValue;
    }
  }
  function aVp() {
    var eh = aD.wD;
    var gi = ag.gi;
    var sResourcesData = aD.data.sResourcesData;
    for (var aB = 0; aB < eh; aB++) {
      gi[aB] = sResourcesData[aB];
    }
  }
}
function dL() {
  var aVq = 501;
  this.aVr = new Uint32Array(aVq);
  this.a2Y = new Uint32Array(aVq);
  this.a9u = new Uint16Array(aVq);
  this.aPe = 0;
  var aVs = 1;
  var aVt = 0;
  this.max = [0, 0, 0];
  this.aVu = 0;
  this.li = new Array(21);
  this.aVv = null;
  this.dY = function () {
    this.aVv = [
      L(451),
      L(452),
      L(453),
      L(454),
      L(455),
      L(456),
      L(457),
      L(458),
      L(289),
      L(290),
      L(459),
      L(460),
      L(461),
      L(462),
      "",
      L(463),
      L(464),
      L(465),
      L(249),
      L(466),
      L(467),
    ];
  };
  this.dX = function () {
    this.aPe = 0;
    aVs = 1;
    this.aVu = 0;
    aVt = 0;
    aVw(this);
    this.li.fill(0);
  };
  this.p5 = function (player, iG) {
    if (!b9.g2.a2T(player)) {
      return;
    }
    this.li[0] += iG + 1;
    this.li[1]++;
    this.li[12] += bN.fE[1];
  };
  this.oV = function (player, oA) {
    if (player === aD.eR) {
      aN.oV(bN.fE[0], bN.fE[1], oA);
      this.li[12] += bN.fE[1];
      this.li[16] += bN.fE[0];
    }
    if (oA === aD.eR) {
      aN.a5o(bN.fE[0], player);
      this.li[10] += bN.fE[0];
    }
  };
  this.p8 = function (player) {
    if (!b9.g2.a2T(player)) {
      return;
    }
    this.li[2]++;
    this.li[12] += bN.fE[1];
  };
  this.pJ = function (player) {
    if (!b9.g2.a2T(player)) {
      return;
    }
    this.li[19]++;
    this.li[12] += bN.fE[1];
  };
  this.aUV = function (player) {
    if (!b9.g2.a2T(player)) {
      return;
    }
    this.li[20]++;
  };
  this.g6 = function (player, a3F, e2) {
    if (!b9.g2.a2T(player)) {
      return;
    }
    this.li[e2] += a3F;
  };
  this.ir = function () {
    if (this.aVu) {
      return;
    }
    if (aVt-- > 0) {
      return;
    }
    aVx(this);
  };
  function aVx(self) {
    self.aVr[self.aPe] = ag.gU[aD.eR];
    self.a2Y[self.aPe] = ag.gi[aD.eR];
    self.a9u[self.aPe] = ae.a9v(aD.eR);
    aVy(self, self.aPe);
    self.aPe++;
    if (self.aPe === aVq) {
      aVz(self);
    }
    aVt = aVs - 1;
    bd.lZ();
    if (ag.lm[aD.eR] === 0) {
      self.aVu = be.jt();
    }
  }
  function aVz(self) {
    aVw(self);
    aVy(self, 0);
    self.aPe = 1 + bK.dn(aVq, 2);
    for (var aB = 1; aB < self.aPe; aB++) {
      self.aVr[aB] = self.aVr[aB * 2];
      self.a2Y[aB] = self.a2Y[aB * 2];
      self.a9u[aB] = self.a9u[aB * 2];
      aVy(self, aB);
    }
    aVs *= 2;
  }
  function aVw(self) {
    self.max.fill(0);
  }
  function aVy(self, aB) {
    self.max[0] = Math.max(self.aVr[aB], self.max[0]);
    self.max[1] = Math.max(self.a2Y[aB], self.max[1]);
    self.max[2] = Math.max(self.a9u[aB], self.max[2]);
  }
}
function dM() {
  this.i = 0;
  this.j = 0;
  this.s5 = 0;
  this.s6 = 0;
  this.aW0 = 0;
  this.aW1 = 0;
  this.a7E = 0;
  this.sn = 0;
  this.aW2 = 0;
  var aW3 = 0;
  this.aW4 = 0;
  this.aW5 = 0;
  this.aW6 = 0;
  this.a6a = 0;
  this.e2 = 0;
  this.a9X = null;
  this.hO = false;
  this.aW7 = -1;
  this.aW8 = false;
  this.aW9 = [0, 0];
  this.dY = function () {
    this.a9X = [L(468), L(121, 0, "Balance"), L(120, 0, S[102]), L(469)];
  };
  this.dX = function () {
    this.hO = false;
    this.aW7 = -1;
    this.aW8 = false;
    this.resize();
  };
  this.resize = function () {
    var hd = 1.369;
    this.i = h.i < hd * h.j ? h.i : h.j * hd;
    var ek = a0.a1.r7() && h.i < h.j ? 1 : a0.a1.r7() ? 0.8 : h.i < h.j ? 0.65 : 0.59;
    this.i = Math.floor(ek * this.i);
    this.i -= a0.a1.r7() && h.i < h.j ? 2 * bb.gap + 2 : 0;
    this.j = Math.floor(this.i / hd);
    this.a6a = Math.floor(this.j / 150);
    this.a6a = Math.max(this.a6a, 1.5);
    this.s5 = Math.floor(1 + this.i * 0.02);
    this.s6 = Math.floor(1 + this.i * 0.04);
    this.a7E = this.s6;
    aW3 = Math.floor(0.75 * this.a7E);
    this.sn = Math.floor(1 + this.i * 0.075);
    this.aW4 = Math.floor(1 + this.i * 0.1125);
    this.aW5 = Math.floor(this.i * (a0.a1.r7() ? 0.03 : 0.029));
    this.aW5 = Math.max(this.aW5, 4);
    this.aW6 = Math.floor(this.i * 0.035);
    this.aW6 = Math.max(this.aW6, 4);
    this.aW2 = this.j - 2 * this.a7E - this.sn - this.aW4;
    if (this.hO) {
      this.aWA();
    }
  };
  this.gu = function (kz, l0) {
    if (!this.hO) {
      return false;
    }
    var wF = kz;
    var wG = l0;
    kz -= bK.dn(h.i - this.i, 2);
    l0 -= bK.dn(h.j - this.j, 2);
    if (kz < 0 || l0 < 0 || kz >= this.i || l0 >= this.j || (kz >= this.i - this.aW4 && l0 < this.aW4)) {
      if (aM.gu(wF, wG) === -1 && !bB.gu(wF, wG)) {
        this.r0();
      }
      return true;
    }
    if (l0 < this.aW4) {
      return true;
    }
    if (l0 < this.j - this.sn) {
      this.aW8 = true;
      this.aW7 = (kz - 2 * this.s5 - this.aW0) / this.aW1;
      if (this.e2 !== 3) {
        be.df = true;
      }
      return true;
    }
    var aB = Math.floor(kz / (this.i / this.a9X.length));
    aB = aB < 0 ? 0 : aB >= this.a9X.length ? this.a9X.length - 1 : aB;
    if (aB !== this.e2) {
      this.e2 = aB;
      this.aWA();
      be.df = true;
    }
    return true;
  };
  this.a0Y = function (kz, l0) {
    this.aW9[0] = kz;
    this.aW9[1] = l0;
    if (this.hO && this.aW8) {
      kz -= bK.dn(h.i - this.i, 2);
      var dm = this.aW7;
      this.aW7 = (kz - 2 * this.s5 - this.aW0) / this.aW1;
      if ((this.aW7 >= 0 && this.aW7 <= 1) || (dm >= 0 && dm <= 1)) {
        be.df = true;
      }
      return true;
    }
    return false;
  };
  this.a0x = function () {
    if (this.aW8) {
      this.aW8 = false;
    }
  };
  this.a19 = function () {
    if (this.hO) {
      this.r0();
    } else {
      this.show();
    }
  };
  this.show = function () {
    if (bc.aPe < 2) {
      return;
    }
    this.hO = true;
    this.aWA();
  };
  this.r0 = function () {
    this.hO = false;
    this.aW7 = -1;
    be.df = true;
  };
  this.aWA = function () {
    if (this.e2 < 2) {
      this.aW0 = aQ.measureText(b9.qh.yM(bc.max[this.e2]), b9.ph.rY(0, this.aW5));
    } else if (this.e2 === 2) {
      this.aW0 = aQ.measureText(b9.qh.a38(6, 2), b9.ph.rY(0, this.aW5));
    }
    this.aW1 = this.i - 2 * this.s5 - this.aW0 - this.s6;
  };
  this.lZ = function () {
    if (!this.hO) {
      return;
    }
    this.aWA();
  };
  this.tq = function () {
    if (!this.hO) {
      return;
    }
    this.a7V();
  };
  this.a7V = function () {
    var eo = bK.dn(h.i - this.i, 2);
    var eq = bK.dn(h.j - this.j, 2);
    tr.setTransform(1, 0, 0, 1, eo, eq);
    tr.fillStyle = bA.mk;
    tr.fillRect(0, this.aW4, this.i, this.j - this.aW4);
    this.aWB();
    this.aOT();
    tr.strokeRect(0, 0, this.i, this.j);
    b9.ph.textAlign(tr, 2);
    tr.font = b9.ph.rY(0, this.aW5);
    if (this.e2 === 0) {
      this.aWC(bc.aVr, eo, eq);
    } else if (this.e2 === 1) {
      this.aWC(bc.a2Y, eo, eq);
    } else if (this.e2 === 2) {
      this.aWD(eo, eq);
    } else if (this.e2 === 3) {
      this.aWE(eo, eq);
      this.aWF(eo, eq);
    }
    aM.a4t(Math.floor(eo + this.i - 0.725 * this.aW4), Math.floor(eq + 0.275 * this.aW4), Math.floor(0.45 * this.aW4));
    tr.setTransform(1, 0, 0, 1, 0, 0);
  };
  this.aWB = function () {
    var aB, dm;
    tr.lineWidth = this.a6a;
    b9.ph.textBaseline(tr, 1);
    b9.ph.textAlign(tr, 1);
    tr.strokeStyle = bA.mn;
    tr.font = b9.ph.rY(1, this.aW6);
    dm = this.i / this.a9X.length;
    tr.fillStyle = bA.n9;
    tr.fillRect(this.e2 * dm, this.j - this.sn, dm, this.sn);
    tr.fillStyle = bA.mn;
    tr.fillRect(0, this.j - this.sn - 0.5 * this.a6a, this.i, this.a6a);
    for (aB = 1; aB <= 3; aB++) {
      tr.fillRect(aB * dm, this.j - this.sn, this.a6a, this.sn);
    }
    for (aB = this.a9X.length - 1; aB >= 0; aB--) {
      tr.fillText(b9.xG.a25(this.a9X[aB], 0, 0.9 * dm), (aB + 0.5) * dm, this.j - 0.46 * this.sn);
    }
  };
  this.aOT = function () {
    tr.fillStyle = bA.nZ;
    tr.fillRect(0, 0, this.i, this.aW4);
    tr.fillStyle = bA.mn;
    tr.fillRect(0, this.aW4 - 0.5 * this.a6a, this.i, this.a6a);
    tr.font = b9.ph.rY(1, 0.39 * this.aW4);
    tr.fillText(b9.xG.a25(L(470), 0, 0.8 * this.i), Math.floor(this.i / 2), Math.floor(0.55 * this.aW4));
  };
  this.aWC = function (g, eo, eq) {
    var ke = bc.max[this.e2];
    tr.setTransform(1, 0, 0, 1, eo + 2 * this.s5 + this.aW0, eq + this.a7E + this.aW4);
    tr.lineWidth = 2;
    var a1S = this.aW2 / Math.sqrt(ke);
    tr.beginPath();
    tr.moveTo(this.aW1, this.aW2 - a1S * Math.sqrt(g[bc.aPe - 1]));
    for (var aB = bc.aPe - 2; aB >= 0; aB--) {
      tr.lineTo((aB * this.aW1) / (bc.aPe - 1), this.aW2 - a1S * Math.sqrt(g[aB]));
    }
    tr.stroke();
    var eL = this.a4t(g, a1S, 0.5);
    if (eL < 0.95) {
      tr.fillText(b9.qh.yM(ke), -this.s5, 0);
    }
    if (Math.abs(eL - 0.5) > 0.05) {
      tr.fillText(b9.qh.yM(Math.floor(ke / 4)), -this.s5, Math.floor(this.aW2 / 2));
    }
    if (eL > 0.05) {
      tr.fillText("0", -this.s5, this.aW2);
    }
  };
  this.aWD = function (eo, eq) {
    tr.setTransform(1, 0, 0, 1, eo + 2 * this.s5 + this.aW0, eq + this.a7E + this.aW4);
    tr.lineWidth = 2;
    var a1S = this.aW2 / Math.max(bc.max[this.e2], 1);
    tr.beginPath();
    tr.moveTo(this.aW1, this.aW2 - a1S * bc.a9u[bc.aPe - 1]);
    for (var aB = bc.aPe - 2; aB >= 0; aB--) {
      tr.lineTo((aB * this.aW1) / (bc.aPe - 1), this.aW2 - a1S * bc.a9u[aB]);
    }
    tr.stroke();
    var eL = this.a4t(bc.a9u, a1S, 1);
    var ke = bc.max[this.e2] / 100;
    if (eL < 0.95) {
      tr.fillText(b9.qh.a38(ke, 2), -this.s5, 0);
    }
    if (Math.abs(eL - 0.5) > 0.05) {
      tr.fillText(b9.qh.a38(ke / 2, 2), -this.s5, Math.floor(this.aW2 / 2));
    }
    if (eL > 0.05) {
      tr.fillText(b9.qh.a38(0, 2), -this.s5, this.aW2);
    }
  };
  this.aWE = function (eo, eq) {
    var aB;
    tr.setTransform(1, 0, 0, 1, eo + 0.34 * this.i, eq + 2 * aW3 + this.aW4);
    b9.ph.textAlign(tr, 2);
    var a9I = this.j - 4 * aW3 - this.sn - this.aW4;
    var eh = 10;
    var g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7];
    for (aB = 9; aB >= 0; aB--) {
      tr.fillText(b9.xG.a25(bc.aVv[g[aB]], 0, 0.31 * this.i), 0, (aB * a9I) / (eh - 1));
    }
    var f9 = bc.li;
    tr.setTransform(1, 0, 0, 1, eo + 0.39 * this.i, eq + 2 * aW3 + this.aW4);
    b9.ph.textAlign(tr, 0);
    tr.fillText(b9.qh.a38((100 * f9[0]) / (1024 * Math.max(f9[1], 1)), 1), 0, 0);
    for (aB = 8; aB >= 1; aB--) {
      tr.fillText(f9[g[aB]].toString(), 0, (aB * a9I) / (eh - 1));
    }
    tr.fillText(b9.qh.a38(100 * (1 - ag.gU[aD.eR] / f9[7]), 0), 0, a9I);
  };
  this.aWF = function (eo, eq) {
    var aB;
    tr.setTransform(1, 0, 0, 1, eo + 0.79 * this.i, eq + 2 * aW3 + this.aW4);
    b9.ph.textAlign(tr, 2);
    var a9I = this.j - 4 * aW3 - this.sn - this.aW4;
    var eh = 9;
    tr.fillStyle = bA.n4;
    for (aB = 2; aB >= 0; aB--) {
      tr.fillText(b9.xG.a25(bc.aVv[aB + 8], 0, 0.31 * this.i), 0, (aB * a9I) / eh);
    }
    tr.fillText(b9.xG.a25(bc.aVv[18], 0, 0.31 * this.i), 0, (3 * a9I) / eh);
    tr.fillStyle = bA.n3;
    tr.fillText(b9.xG.a25(bc.aVv[11], 0, 0.31 * this.i), 0, (4 * a9I) / eh);
    tr.fillStyle = bA.nM;
    tr.fillText(b9.xG.a25(bc.aVv[13], 0, 0.31 * this.i), 0, (5 * a9I) / eh);
    tr.fillText(b9.xG.a25(bc.aVv[15], 0, 0.31 * this.i), 0, (6 * a9I) / eh);
    tr.fillText(b9.xG.a25(bc.aVv[16], 0, 0.31 * this.i), 0, (7 * a9I) / eh);
    tr.fillText(b9.xG.a25(bc.aVv[12], 0, 0.31 * this.i), 0, (8 * a9I) / eh);
    tr.fillStyle = bA.nL;
    tr.fillText(b9.xG.a25(bc.aVv[17], 0, 0.31 * this.i), 0, a9I);
    tr.fillStyle = bA.n4;
    var f9 = bc.li;
    var aD5 = f9[8] + f9[9] + f9[10] + f9[18];
    var a5X = b9.qh.yM(aD5);
    var aNE = tr.measureText(a5X).width;
    tr.setTransform(1, 0, 0, 1, eo + 0.83 * this.i + aNE, eq + 2 * aW3 + this.aW4);
    tr.fillText(b9.qh.yM(f9[8]), 0, 0);
    tr.fillText(b9.qh.yM(f9[9]), 0, (1 * a9I) / eh);
    tr.fillText(b9.qh.yM(f9[10]), 0, (2 * a9I) / eh);
    tr.fillText(b9.qh.yM(f9[18]), 0, (3 * a9I) / eh);
    tr.fillStyle = bA.n3;
    tr.fillText(a5X, 0, (4 * a9I) / eh);
    tr.fillStyle = bA.nM;
    tr.fillText(b9.qh.yM(f9[13]), 0, (5 * a9I) / eh);
    tr.fillText(b9.qh.yM(f9[15]), 0, (6 * a9I) / eh);
    tr.fillText(b9.qh.yM(f9[16]), 0, (7 * a9I) / eh);
    tr.fillText(b9.qh.yM(f9[12]), 0, (8 * a9I) / eh);
    var aWG = f9[12] + f9[13] + f9[15] + f9[16];
    tr.fillStyle = bA.nL;
    tr.fillText(b9.qh.yM(aWG), 0, a9I);
    tr.fillStyle = bA.mn;
  };
  this.a4t = function (g, a1S, a86) {
    if (this.aW7 < 0 || this.aW7 > 1) {
      return 0.25;
    }
    var aB = this.aW7 * (bc.aPe - 1);
    var e = Math.floor(aB);
    var fO = g[e];
    var fQ = g[e < bc.aPe - 1 ? e + 1 : e];
    fO = fO + (aB - e) * (fQ - fO);
    tr.strokeStyle = bA.mq;
    if (this.aW7 > 0.04) {
      this.aWH(
        0,
        this.aW2 - a1S * Math.pow(fO, a86),
        (aB * this.aW1) / (bc.aPe - 1),
        this.aW2 - a1S * Math.pow(fO, a86)
      );
    }
    if (fO / bc.max[this.e2] > 0.04) {
      this.aWH(
        (aB * this.aW1) / (bc.aPe - 1),
        this.aW2,
        (aB * this.aW1) / (bc.aPe - 1),
        this.aW2 - a1S * Math.pow(fO, a86)
      );
    }
    tr.fillStyle = bA.nO;
    tr.beginPath();
    tr.arc(
      (aB * this.aW1) / (bc.aPe - 1),
      this.aW2 - a1S * Math.pow(fO, a86),
      Math.max(2, 0.014 * this.j),
      0,
      2 * Math.PI
    );
    tr.fill();
    var eG = this.aW7 * be.a9w;
    if (ag.lm[aD.eR] === 0) {
      eG = Math.floor(eG * bc.aVu);
    } else {
      eG = Math.floor(eG * be.jt());
    }
    tr.fillStyle = bA.mn;
    tr.fillText(
      a86 === 1 ? b9.qh.a38(fO / 100, 2) : b9.qh.yM(Math.floor(fO)),
      -this.s5,
      this.aW2 - a1S * Math.pow(fO, a86)
    );
    b9.ph.textAlign(tr, 1);
    tr.fillText(aW.a9l(eG), (aB * this.aW1) / (bc.aPe - 1), this.aW2 + this.aW5 - (a0.a1.r7() ? 2 : 0) - this.a6a);
    b9.ph.textAlign(tr, 2);
    return (a1S * Math.pow(fO, a86)) / this.aW2;
  };
  this.aWH = function (mD, mE, mQ, mR) {
    tr.beginPath();
    tr.moveTo(mD, mE);
    tr.lineTo(mQ, mR);
    tr.stroke();
  };
}
function bv() {
  this.aWI = "https://";
  this.aWJ = this.aWI + "territorial.io/";
  this.aPf = this.aWJ + "changelog";
  this.aPj = this.aWJ + "terms";
  this.aWK = this.aWJ + "cookie_policy";
  this.aP6 = this.aWJ + "privacy";
  this.aPi = this.aWJ + "tutorial";
  this.aPh = this.aWJ + "players";
  this.aPg = this.aWJ + "clans";
  this.zp = this.aWJ + "clan-results";
  this.aMN = "https://patreon.com/c/territorial";
  this.aBE = this.aWI + "play.google.com/store/apps/details?id=territorial.io";
  this.a07 = this.aWI + "apps.apple.com/app/id1581110913";
  this.aWL = this.aWI + "www.youtube.com/watch?v=toZTQ8aRdFc";
  this.aBF = this.aWI + "discord.gg/pthqvpTXmh";
  this.aBG = this.aWI + "www.instagram.com/davidtschacher/";
  this.xw =
    "🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼";
}
function d4() {
  this.y = new aWM();
  this.xD = new aWN();
  this.dX = function () {
    this.y.dX();
  };
  this.ir = function () {
    if (this.y.a5x === 0) {
      return;
    }
    this.y.a5x--;
  };
}
function aWN() {
  this.tq = function () {
    if (bO.y.a5x === 0) {
      return;
    }
    aWO();
    if (aD.h2) {
      aWP();
    }
  };
  function aWO() {
    tr.globalAlpha = Math.min(bO.y.a5x / 580, 1);
    tr.drawImage(bO.y.aWQ, 1 + aS.xB(), 1 + aS.xC());
    tr.globalAlpha = 1;
  }
  function aWP() {
    var mD = iH / iI;
    var mE = iJ / iI;
    var mQ = (h.i + iH) / iI;
    var mR = (h.j + iJ) / iI;
    var gF = bO.y.aWR * iI;
    var aWS = bO.y.aWS;
    for (var aB = aD.jw - 1; aB >= 0; aB--) {
      aWT(aB, gF, mD, mE, mQ, mR, aWS);
    }
    tr.setTransform(iI, 0, 0, iI, 0, 0);
  }
  function aWT(aB, gF, mD, mE, mQ, mR, aWS) {
    if (ag.lm[aB] === 0 || ag.gU[aB] === 0) {
      return;
    }
    var eo = (h.i * ((ag.iV[aB] + ag.iW[aB] + 1) / 2 - mD)) / (mQ - mD) - 0.5 * gF;
    var eq = (h.j * ((ag.iX[aB] + ag.iY[aB] + 1) / 2 - mE)) / (mR - mE) - 0.5 * gF;
    if (eo > h.i || eq > h.j || eo < -gF || eq < -gF) {
      return;
    }
    tr.setTransform(iI, 0, 0, iI, eo, eq);
    tr.drawImage(aWS[aD.hW ? bf.ef[aB] : 1], 0, 0);
  }
}
function aWM() {
  this.aWR = 28;
  this.a5x = 0;
  this.aWQ = null;
  this.aWS = null;
  var aWU = null;
  this.dX = function () {
    this.a5x = 700;
    aWV(this);
    aBC(this, aWW(this));
    if (!aD.h2) {
      this.a3Q();
    }
  };
  function aWW(rL) {
    if (rL.aWQ !== null && rL.aWQ.width === bR.es - 2 && rL.aWQ.height === bR.et - 2) {
      return true;
    }
    rL.aWQ = b9.ph.vW(bR.es - 2, bR.et - 2);
    return false;
  }
  function aWV(rL) {
    var hY = rL.aWR;
    rL.aWS = [];
    aWU = [];
    if (aD.hW) {
      for (var aB = 0; aB <= aD.wK; aB++) {
        rL.aWS.push(aWX(hY, bf.aUO[bf.kI[aB]]));
        aWU.push(aWX(hY >> 1, bf.aUO[bf.kI[aB]]));
      }
      if (aD.kD === 9) {
        aWU.push(aWX(hY, bf.aUO[1]));
      }
    } else {
      rL.aWS.push(aWX(hY, bf.aUO[7]));
      rL.aWS.push(aWX(hY, bf.aUO[4]));
      aWU.push(aWX(hY >> 1, bf.aUO[7]));
    }
  }
  this.aUN = function (hY, aWY) {
    return aWX(hY, aWY);
  };
  function aWX(hY, aWY) {
    var eo, eq, eT, i2, i5, ex;
    var a1t = b9.ph.vW(hY, hY);
    var he = b9.ph.getContext(a1t, true);
    var hb = b9.ph.getImageData(he, hY, hY);
    var vh = hb.data;
    var ke = (hY >> 1) - 0.5;
    var aWZ = ke + 0.5;
    aWZ *= aWZ;
    for (eq = 0; eq < hY; eq++) {
      for (eo = 0; eo < hY; eo++) {
        i2 = eo - ke;
        i5 = eq - ke;
        eT = (eq * hY + eo) * 4;
        ex = i2 * i2 + i5 * i5;
        vh[eT] = aWY[0];
        vh[eT + 1] = aWY[1];
        vh[eT + 2] = aWY[2];
        vh[eT + 3] = ((aWZ - ex) * aWY[3]) / aWZ;
      }
    }
    he.putImageData(hb, 0, 0);
    return a1t;
  }
  function aBC(rL, aWa) {
    var aB;
    var aWQ = rL.aWQ;
    var he = b9.ph.getContext(aWQ, true);
    var eh = aD.ee;
    var hY = rL.aWR >> 1;
    he.imageSmoothingEnabled = false;
    he.setTransform(1, 0, 0, 1, 0, 0);
    if (aWa) {
      he.clearRect(0, 0, aWQ.width, aWQ.height);
    }
    if (aD.kD === 9) {
      hY = hY << 1;
      var aWb = ay.kM[5];
      for (aB = eh - aWb; aB < eh; aB++) {
        aVX(aB, he, aWU, hY);
      }
      eh -= aWb;
      hY = hY >> 1;
    }
    for (aB = aD.jw; aB < eh; aB++) {
      aVX(aB, he, aWU, hY);
    }
  }
  this.a3Q = function () {
    var eh = aD.jw;
    var hY = this.aWR;
    var aWS = this.aWS;
    var he = b9.ph.getContext(this.aWQ, true);
    for (var aB = 0; aB < eh; aB++) {
      aVX(aB, he, aWS, hY);
    }
  };
  function aVX(aB, he, a1t, hY) {
    if (ag.lm[aB] === 0 || ag.gU[aB] === 0) {
      return;
    }
    var eo = (ag.iV[aB] + ag.iW[aB] + 1 - hY - 2) >> 1;
    var eq = (ag.iX[aB] + ag.iY[aB] + 1 - hY - 2) >> 1;
    he.drawImage(a1t[aD.hW ? (aD.kD === 9 && aE.hL[aB] === 5 ? 3 : bf.ef[aB]) : aB < aD.jw ? 1 : 0], eo, eq);
  }
}
function d5() {
  this.oP = function (player) {
    aN.zG(player, player === aD.eR ? 21 : 22);
    aWc(player);
    aWd();
  };
  this.ow = function (player) {
    if (aD.z4 === 1 && ag.lm[player] !== 0 && ag.a2P[player] !== 2) {
      aWc(player);
    }
    aD.z7--;
    aD.z6--;
    aN.zG(player, 4);
    if (b9.g2.gs(2)) {
      aW.lY(true);
    }
    aWd();
  };
  function aWd() {
    if (aD.kD === 8 && aD.z4 === 1) {
      bQ.yh.z3();
    }
  }
  function aWc(player) {
    if (aD.h2) {
      ak.aFo(player);
      al.aIn();
      if (aD.kF) {
        aD.oz.ir();
      }
    } else {
      b2.aBW(player);
    }
  }
}
function dF() {
  this.aRz = [
    "rgba(90,90,90,0.88)",
    "rgba(130,12,12,0.88)",
    "rgba(12,130,12,0.88)",
    "rgba(12,12,130,0.88)",
    "rgba(130,130,12,0.88)",
    "rgba(130,12,130,0.88)",
    "rgba(12,130,130,0.88)",
    "rgba(130,130,130,0.88)",
    "rgba(0,0,0,0.88)",
  ];
  this.a9F = [
    "rgb(210,200,200)",
    "rgb(255,120,120)",
    "rgb(0,230,0)",
    "rgb(150,150,255)",
    "rgb(240,240,25)",
    "rgb(255,70,255)",
    "rgb(25,240,240)",
    bA.mn,
    "rgb(170,170,170)",
  ];
  this.aWe = [
    bA.mn,
    "rgb(255,0,0)",
    "rgb(0,255,0)",
    "rgb(0,0,255)",
    "rgb(255,255,0)",
    "rgb(255,0,255)",
    "rgb(0,255,255)",
    bA.mn,
    bA.me,
  ];
  this.aWf = [bA.me, bA.mn, bA.mn, bA.mn, bA.me, bA.me, bA.me, bA.me, bA.mn];
  var aWg = [
    "255,255,255",
    "0,0,0",
    "255,4,4",
    "200,4,4",
    "4,255,4",
    "4,180,4",
    "255,195,195",
    "90,3,3",
    "200,255,200",
    "3,84,3",
  ];
  this.aIF = [
    S[8] + aWg[0] + ",",
    S[8] + aWg[1] + ",",
    S[8] + aWg[2] + ",",
    S[8] + aWg[3] + ",",
    S[8] + aWg[4] + ",",
    S[8] + aWg[5] + ",",
    S[8] + aWg[6] + ",",
    S[8] + aWg[7] + ",",
    S[8] + aWg[8] + ",",
    S[8] + aWg[9] + ",",
  ];
  this.aIG = [
    S[7] + aWg[0] + ")",
    S[7] + aWg[1] + ")",
    S[7] + aWg[2] + ")",
    S[7] + aWg[3] + ")",
    S[7] + aWg[4] + ")",
    S[7] + aWg[5] + ")",
    S[7] + aWg[6] + ")",
    S[7] + aWg[7] + ")",
    S[7] + aWg[8] + ")",
    S[7] + aWg[9] + ")",
  ];
  this.zP = null;
  this.aUO = [
    [128, 128, 128, 180],
    [255, 0, 0, 180],
    [0, 255, 0, 180],
    [50, 50, 255, 180],
    [255, 255, 0, 180],
    [255, 0, 255, 180],
    [0, 255, 255, 180],
    [255, 255, 255, 180],
    [0, 0, 0, 180],
  ];
  var aWh = [
    [128, 128, 128],
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
    [255, 255, 0],
    [255, 0, 255],
    [0, 255, 255],
    [255, 255, 255],
    [0, 0, 0],
  ];
  this.kI = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.ef = new Uint8Array(aD.ee);
  this.a9G = new Uint8Array(aD.ee);
  this.wQ = new Uint16Array(aD.ee);
  this.wR = new Uint16Array(this.kI.length + 1);
  this.wS = new Uint16Array(this.kI.length);
  this.dY = function () {
    this.zP = [L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(478), L(479)];
  };
  this.dX = function () {
    this.ef.fill(0);
    this.aWi();
    if (!aD.hW) {
      return;
    }
    if (aD.kD === 9) {
      aWj();
    } else {
      if (aD.kF) {
        aWk();
      } else {
        this.ir();
      }
    }
    aWl();
    aWm();
  };
  this.aWi = function () {
    for (var aB = this.kI.length - 1; aB >= 0; aB--) {
      this.kI[aB] = aB;
    }
  };
  function aWj() {
    var ef = bf.ef;
    for (var aB = aD.data.teamPlayerCount[7] - 1; aB >= 0; aB--) {
      ef[aB] = 1;
    }
    var eh = aD.ee;
    for (aB = aD.data.teamPlayerCount[7]; aB < eh; aB++) {
      ef[aB] = 2;
    }
    bf.kI[1] = 7;
    bf.kI[2] = 8;
  }
  this.ir = function () {
    var hm = new Uint8Array(aD.jw);
    var hn = new Uint8Array(aD.jw);
    var aWn = new Uint16Array(8);
    var aWo = new Uint16Array(this.kI.length);
    this.aWp(hm, hn, aWn, 1);
    this.aFR(aWn);
    this.aWq(aWo, hm, hn);
    this.aWr(hm, hn, aWo);
    this.aWs();
  };
  function aWk() {
    var colorsData = aD.data.colorsData;
    if (!aD.data.selectableColor) {
      for (var aB = aD.jw - 1; aB >= 0; aB--) {
        colorsData[aB] = ax.jE(262144);
      }
    }
    var aWt = 0;
    var ex = 256 * 3;
    var aRT = [4 * (colorsData[0] >> 12), 4 * ((colorsData[0] >> 6) & 63), 4 * (colorsData[0] & 63)];
    var teamPlayerCount = aD.data.teamPlayerCount;
    for (aB = 0; aB < 9; aB++) {
      if (!teamPlayerCount[aB]) {
        continue;
      }
      var ek = 0;
      for (var f1 = 0; f1 < 3; f1++) {
        ek += Math.abs(aWh[aB][f1] - aRT[f1]);
      }
      if (ek < ex) {
        aWt = aB;
        ex = ek;
      }
    }
    var aWu = new Uint16Array(9);
    for (aB = 0; aB < 9; aB++) {
      aWu[aB] = teamPlayerCount[aB];
    }
    var kI = bf.kI;
    var aWv = new Uint8Array(9);
    kI[0] = 0;
    var g9 = 1;
    for (aB = 1; aB < 9; aB++) {
      if (aWu[aB]) {
        aWv[aB] = g9;
        kI[g9++] = aB;
      }
    }
    var jD = aD.jw;
    var ef = bf.ef;
    if (aWu[aWt]) {
      aWu[aWt]--;
      ef[0] = aWv[aWt];
    } else {
      jD = 0;
    }
    var f2 = 0;
    for (aB = jD; aB < aD.wD; aB++) {
      var hU = kI[f2];
      if (aWu[hU]) {
        aWu[hU]--;
        ef[aB] = aWv[hU];
      } else {
        f2++;
        aB--;
        if (f2 >= 9) {
          console.log("error 325");
          return;
        }
      }
    }
  }
  this.aWp = function (hm, hn, aWu, aWw) {
    var aB, f1, e, aWx;
    var eh = this.kI.length - aWw;
    var g = new Uint16Array(eh);
    var colorsData = aD.data.colorsData;
    for (aB = aD.jw - 1; aB >= 0; aB--) {
      for (f1 = eh; f1 >= aWw; f1--) {
        g[f1 - 1] =
          Math.abs(4 * (colorsData[aB] >> 12) - aWh[f1][0]) +
          Math.abs(4 * ((colorsData[aB] >> 6) & 63) - aWh[f1][1]) +
          Math.abs(4 * (colorsData[aB] & 63) - aWh[f1][2]);
      }
      aWx = 768;
      for (f1 = eh - 1; f1 >= 0; f1--) {
        e = (f1 + aB) % eh;
        if (g[e] < aWx) {
          aWx = g[e];
          hm[aB] = e;
        }
      }
      aWu[hm[aB]] += 4;
      aWx = 768;
      for (f1 = eh - 1; f1 >= 0; f1--) {
        e = (f1 + aB) % eh;
        if (g[e] < aWx && e !== hm[aB]) {
          aWx = g[e];
          hn[aB] = e;
        }
      }
      aWu[hn[aB]]++;
    }
  };
  this.aFR = function (aWu) {
    var aB, f1, kg;
    var eh = this.kI.length - 1;
    for (aB = eh; aB >= 0; aB--) {
      this.kI[aB] = aB;
    }
    for (aB = eh - 1; aB >= 0; aB--) {
      aWu[aB]++;
    }
    for (aB = 1; aB <= eh; aB++) {
      kg = 0;
      for (f1 = 1; f1 < eh; f1++) {
        if (aWu[f1] > aWu[kg]) {
          kg = f1;
        }
      }
      aWu[kg] = 0;
      this.kI[aB] = kg + 1;
    }
  };
  this.aWq = function (aWo, hm, hn) {
    var f1, zj, f2, ek, e, mP, sM;
    var aWy = this.kI.length - 1;
    var qB = new Uint16Array(aWy);
    var aWz = [];
    var aX0 = 0;
    var zi = [];
    var aX1 = [];
    loop: for (var aB = 0; aB < aD.jw; aB++) {
      zj = b9.qh.zk(ag.zh[aB]);
      if (zj !== null) {
        for (f1 = zi.length - 1; f1 >= 0; f1--) {
          if (zj === zi[f1]) {
            aX1[f1].push(aB);
            aX0 = Math.max(aX0, aX1[f1].length);
            continue loop;
          }
        }
        zi.push(zj);
        aWz.push(false);
        aX1.push([aB]);
        aX0 = Math.max(aX0, 1);
      }
    }
    while (aD.wK > 2 && aX0 > bK.dn(aD.jw, aD.wK)) {
      aD.wK--;
      aD.kD--;
    }
    for (f1 = zi.length - 1; f1 >= 0; f1--) {
      ek = -1;
      for (f2 = zi.length - 1; f2 >= 0; f2--) {
        if (!aWz[f2] && (ek === -1 || aX1[f2].length > aX1[ek].length)) {
          ek = f2;
        }
      }
      for (f2 = aWy - 1; f2 >= 0; f2--) {
        qB[f2] = 1;
      }
      for (f2 = aX1[ek].length - 1; f2 >= 0; f2--) {
        qB[hm[aX1[ek][f2]]] += 3;
        qB[hn[aX1[ek][f2]]]++;
      }
      for (aB = aWy - 1; aB >= 0; aB--) {
        e = ek % aWy;
        for (f2 = aWy - 1; f2 >= 0; f2--) {
          if (qB[f2] > qB[e]) {
            e = f2;
          }
        }
        mP = -1;
        for (f2 = aD.wK; f2 > 0; f2--) {
          if (this.kI[f2] === e + 1) {
            mP = f2;
            break;
          }
        }
        qB[e] = 0;
        if (mP === -1) {
          continue;
        }
        sM = 0;
        for (f2 = aD.wK; f2 > 0; f2--) {
          if (aWo[mP] > aWo[f2]) {
            sM++;
          }
        }
        if (sM === aD.wK - 1) {
          continue;
        }
        for (f2 = aX1[ek].length - 1; f2 >= 0; f2--) {
          aWo[mP]++;
          this.ef[aX1[ek][f2]] = mP;
        }
        break;
      }
      aWz[ek] = true;
    }
  };
  this.aWr = function (hm, hn, aWo) {
    var aB, f1, i1;
    var eh = this.kI.length - 1;
    var border = bK.dn(aD.jw, aD.wK);
    if (aD.jw % aD.wK > 0) {
      border++;
    }
    var aX2 = new Uint8Array(eh + 1);
    for (f1 = eh; f1 >= 1; f1--) {
      aX2[this.kI[f1]] = f1;
    }
    for (aB = 0; aB < aD.jw; aB++) {
      i1 = aX2[hm[aB] + 1];
      if (this.ef[aB] === 0 && i1 <= aD.wK && aWo[i1] < border) {
        aWo[i1]++;
        this.ef[aB] = i1;
      }
    }
    for (aB = 0; aB < aD.jw; aB++) {
      i1 = aX2[hn[aB] + 1];
      if (this.ef[aB] === 0 && i1 <= aD.wK && aWo[i1] < border) {
        aWo[i1]++;
        this.ef[aB] = i1;
      }
    }
    for (f1 = aD.wK; f1 >= 1; f1--) {
      for (aB = aD.jw - 1; aB >= 0; aB--) {
        if (aWo[f1] >= border) {
          break;
        }
        if (this.ef[aB] === 0) {
          aWo[f1]++;
          this.ef[aB] = f1;
        }
      }
    }
  };
  this.aWs = function () {
    for (var aB = aD.jw; aB < aD.ee; aB++) {
      this.ef[aB] = 1 + (aB % aD.wK);
    }
  };
  function aWl() {
    var eh = aD.ee;
    var wQ = bf.wQ;
    var wR = bf.wR;
    var wS = bf.wS;
    var ef = bf.ef;
    var kI = bf.kI;
    var wJ = kI.length;
    var eE = new Array(wJ);
    for (var aB = 0; aB < wJ; aB++) {
      eE[aB] = [];
    }
    for (aB = 0; aB < eh; aB++) {
      eE[kI[ef[aB]]].push(aB);
    }
    for (aB = 1; aB <= wJ; aB++) {
      wR[aB] = wR[aB - 1] + eE[aB - 1].length;
    }
    for (aB = 0; aB < wJ; aB++) {
      var g9 = eE[aB].length;
      var ke = wR[aB];
      for (var hU = 0; hU < g9; hU++) {
        wQ[hU + ke] = eE[aB][hU];
      }
    }
    var jw = aD.jw;
    for (aB = 0; aB < wJ; aB++) {
      g9 = eE[aB].length;
      ke = wR[aB];
      for (hU = 0; hU < g9; hU++) {
        if (wQ[hU + ke] >= jw) {
          wS[aB] = hU;
          break;
        }
      }
    }
  }
  function aWm() {
    var eh = aD.ee;
    var ef = bf.ef;
    var a9G = bf.a9G;
    var kI = bf.kI;
    for (var aB = 0; aB < eh; aB++) {
      a9G[aB] = kI[ef[aB]];
    }
    if (aD.kD === 9) {
      a9G.fill(1, eh - ay.kM[5]);
    }
  }
}
function gV() {
  var aB, eo, eq;
  for (aB = fb - 1; aB >= 0; aB--) {
    eo = bK.dn(fd[aB], 4) % bR.es;
    eq = bK.dn(fd[aB], 4 * bR.es);
    ag.iV[fW] = Math.min(eo, ag.iV[fW]);
    ag.iX[fW] = Math.min(eq, ag.iX[fW]);
    ag.iW[fW] = Math.max(eo, ag.iW[fW]);
    ag.iY[fW] = Math.max(eq, ag.iY[fW]);
  }
}
function fq() {
  var eh = ag.g8[fW].length;
  var ek, gE, aB;
  var ej = ac.ej;
  loop: for (aB = eh - 1; aB >= 0; aB--) {
    for (ek = 3; ek >= 0; ek--) {
      gE = ag.g8[fW][aB] + ej[ek];
      if (ac.eY(gE) || (ac.gG(gE) && ac.eZ(gE) !== fW)) {
        ac.jA(ag.g8[fW][aB], fW);
        continue loop;
      }
    }
    ag.g8[fW][aB] = ag.g8[fW][eh - 1];
    ag.g8[fW].pop();
    eh--;
  }
}
function fr() {
  var player = fW;
  var gM = ag.gM;
  var gN = ag.gN;
  var f7 = ag.f7;
  var eh = gM[player].length;
  var ej = ac.ej;
  loop: for (var aB = eh - 1; aB >= 0; aB--) {
    var aX3 = false;
    var aX4 = false;
    for (var ek = 3; ek >= 0; ek--) {
      var gE = gM[player][aB] + ej[ek];
      if (ac.aFb(gE, player)) {
        continue loop;
      }
      aX3 = aX3 || ac.h9(gE);
      aX4 = aX4 || ac.aFa(gE);
    }
    if (aX3) {
      gN[player].push(gM[player][aB]);
    } else if (aX4) {
      f7[player].push(gM[player][aB]);
    } else {
      ac.wm(gM[player][aB], player);
    }
    gM[player][aB] = gM[player][eh - 1];
    gM[player].pop();
    eh--;
  }
}
function gK() {
  ag.gU[fa] -= fb;
}
function gL(border) {
  var eh = border.length;
  for (var aB = eh - 1; aB >= 0; aB--) {
    if (!ac.x6(fa, border[aB])) {
      border[aB] = border[eh - 1];
      border.pop();
      eh--;
    }
  }
}
function gO(border) {
  var eh = border.length;
  for (var aB = eh - 1; aB >= 0; aB--) {
    if (!ac.x6(fa, border[aB]) && ac.ec(border[aB])) {
      border[aB] = border[eh - 1];
      border.pop();
      eh--;
    }
  }
}
function gP(border) {
  var eh = border.length;
  var ej = ac.ej;
  var ek, gE;
  for (var aB = eh - 1; aB >= 0; aB--) {
    for (ek = 3; ek >= 0; ek--) {
      gE = border[aB] + ej[ek];
      if (ac.aFb(gE, fa)) {
        ag.gM[fa].push(border[aB]);
        border[aB] = border[eh - 1];
        border.pop();
        eh--;
        break;
      }
    }
  }
}
function gQ() {
  var ek, gE;
  var ej = ac.ej;
  for (var aB = fb - 1; aB >= 0; aB--) {
    for (ek = 3; ek >= 0; ek--) {
      gE = fd[aB] + ej[ek];
      if (ac.aFc(fa, gE) && ac.aFd(gE)) {
        ag.gM[fa].push(gE);
        ac.gB(gE, fa);
      }
    }
  }
}
function gR() {
  var eo, eq;
  loop: while (ag.iX[fa] < ag.iY[fa]) {
    for (eo = ag.iW[fa]; eo >= ag.iV[fa]; eo--) {
      if (ac.x6(fa, (ag.iX[fa] * bR.es + eo) * 4)) {
        break loop;
      }
    }
    ag.iX[fa]++;
  }
  loop: while (ag.iX[fa] < ag.iY[fa]) {
    for (eo = ag.iW[fa]; eo >= ag.iV[fa]; eo--) {
      if (ac.x6(fa, (ag.iY[fa] * bR.es + eo) * 4)) {
        break loop;
      }
    }
    ag.iY[fa]--;
  }
  loop: while (ag.iV[fa] < ag.iW[fa]) {
    for (eq = ag.iY[fa]; eq >= ag.iX[fa]; eq--) {
      if (ac.x6(fa, (eq * bR.es + ag.iV[fa]) * 4)) {
        break loop;
      }
    }
    ag.iV[fa]++;
  }
  loop: while (ag.iV[fa] < ag.iW[fa]) {
    for (eq = ag.iY[fa]; eq >= ag.iX[fa]; eq--) {
      if (ac.x6(fa, (eq * bR.es + ag.iW[fa]) * 4)) {
        break loop;
      }
    }
    ag.iW[fa]--;
  }
}
function ea(player, j7) {
  return bf.ef[player] === 0 || bf.ef[player] !== bf.ef[j7];
}
function hF(player, j7) {
  var aB, e;
  var aX5 = ad.fm(player);
  for (aB = 0; aB < aX5; aB++) {
    if (ad.fn(player, aB) !== 0) {
      continue;
    }
    e = ad.fs(player, aB);
    if (e === aD.ee) {
      if (j7 === aD.ee) {
        return false;
      }
      if (hD(j7)) {
        return true;
      }
    } else {
      if (!b9.g2.ki(e)) {
        continue;
      }
      if (j7 === aD.ee) {
        if (hD(e)) {
          return true;
        }
      } else if (hH(j7, e)) {
        return true;
      }
    }
  }
  return false;
}
function hD(player) {
  var ek, aB, gF;
  var eh = ag.gM[player].length;
  var ej = ac.ej;
  for (ek = 3; ek >= 0; ek--) {
    gF = ej[ek];
    for (aB = 0; aB < eh; aB++) {
      if (ac.eY(ag.gM[player][aB] + gF)) {
        return true;
      }
    }
  }
  return false;
}
function aFk(player) {
  var ek, aB, gF;
  var eh = ag.gM[player].length;
  var ej = ac.ej;
  for (ek = 3; ek >= 0; ek--) {
    gF = ej[ek];
    for (aB = 0; aB < eh; aB++) {
      if (ac.j9(ag.gM[player][aB]) && ac.eY(ag.gM[player][aB] + gF)) {
        return true;
      }
    }
  }
  return false;
}
function hH(a2U, a2V) {
  var aB, dm, ek, gF, gE;
  var aUa = ag.gM[a2U].length;
  var aUb = ag.gM[a2V].length;
  if (aUb < aUa) {
    dm = a2U;
    a2U = a2V;
    a2V = dm;
    dm = aUa;
    aUa = aUb;
    aUb = dm;
  }
  var ej = ac.ej;
  for (ek = 3; ek >= 0; ek--) {
    gF = ej[ek];
    for (aB = 0; aB < aUa; aB++) {
      gE = ag.gM[a2U][aB] + gF;
      if (ac.gG(gE) && ac.eZ(gE) === a2V) {
        return true;
      }
    }
  }
  return false;
}
function aFl(a2U, a2V) {
  var aB, ek, gF, gE;
  var aUa = ag.gM[a2U].length;
  var ej = ac.ej;
  for (ek = 3; ek >= 0; ek--) {
    gF = ej[ek];
    for (aB = 0; aB < aUa; aB++) {
      if (ac.j9(ag.gM[a2U][aB])) {
        gE = ag.gM[a2U][aB] + gF;
        if (ac.gG(gE) && ac.eZ(gE) === a2V) {
          return true;
        }
      }
    }
  }
  return false;
}
function dR() {
  this.p9 = new aX6();
}
function aX6() {
  this.hC = function (player) {
    if (!b9.g2.a2Q(player)) {
      return;
    }
    aN.xZ(80, L(480), 637, 0, bA.nc, bA.mk, -1, false);
  };
  this.a4V = function () {
    aN.xZ(80, L(481), 637, 0, bA.nc, bA.mk, -1, false);
  };
  this.oE = function (player) {
    if (!b9.g2.a2Q(player)) {
      return;
    }
    aN.xZ(80, L(482), 637, 0, bA.nc, bA.mk, -1, false);
  };
}
function aX7() {
  this.aX8 = 0;
  this.ir = function () {
    aO.ir();
    aZ.ir();
    h.ir();
    az.y.ir();
    aw.aEx();
    if (be.df) {
      be.df = false;
      aa.tq();
    }
  };
}
function aX9() {
  this.eG = be.eG;
  this.e2 = 0;
  this.aX8 = 0;
  this.aEv = 0;
  this.aXA = null;
  this.aXB = 7;
  this.a5y = 0;
  this.dX = function () {
    this.aEv = 0;
    this.aXA = [];
    this.e2 = 0;
    this.aX8 = 0;
  };
  this.aR1 = function (aC) {
    if (aD.h2) {
      this.a9x(aC);
      return;
    }
    this.aXA.push(aC);
    if (aD.z4 === 2) {
      for (var aB = 0; aB < this.aXA.length; aB++) {
        b7.o3.ir(this.aXA[aB]);
      }
      this.aXA = [];
      return;
    }
  };
  this.a9x = function (aC) {
    if (aD.z4 === 2) {
      return;
    }
    b7.o3.ir(aC);
    b8.ir();
    aW.a9x(this.aEv);
    if (this.aEv === aD.a3W) {
      aD.oz.ir();
      this.aEv = 0;
      this.e2 = 0;
      this.aX8 = 0;
      this.eG = be.eG;
      return;
    }
    this.aEv++;
    af.a3P();
    af.lY(true);
    ba.aAX();
  };
  this.ir = function () {
    h.ir();
    if (aD.h2) {
      be.df = aW.a9x(-1) || be.df;
      la();
    } else {
      if (this.e2 === 0) {
        if (be.eG >= this.eG) {
          this.eG += be.a9w * Math.floor(1 + (be.eG - this.eG) / be.a9w);
          if (aD.z4 === 2) {
            lP();
          } else {
            this.aXC();
          }
          this.e2++;
          if (be.eG - this.a5y > 27) {
            this.aXD();
          }
        }
      } else {
        this.aXD();
      }
    }
    lV();
    if (be.df) {
      be.df = false;
      x9();
    }
    this.a5y = be.eG;
  };
  this.aXD = function () {
    be.df = true;
    lX();
    this.e2 = 0;
  };
  this.aXC = function () {
    var uY, aB;
    if (this.aX8 !== this.aEv * 7) {
      lR();
      ba.aAX();
      return;
    }
    uY = false;
    loop: while (this.aXE()) {
      uY = true;
      lR();
      if (aD.z4 === 2) {
        break;
      }
      if (this.aXA.length > 0) {
        for (aB = this.aXB - 2; aB >= 0; aB--) {
          lR();
          if (aD.z4 === 2) {
            break loop;
          }
        }
      } else {
        break;
      }
    }
    if (uY) {
      ba.aAX();
    } else {
      lP();
      ba.a3S();
    }
  };
  this.aXE = function () {
    if (this.aXA.length > 0) {
      this.aEv++;
      b7.o3.ir(this.aXA[0]);
      this.aXA.shift();
      return true;
    }
    return false;
  };
}
function aXF() {
  var aXG;
  var aXH;
  var aXI;
  var aEv;
  var aXJ;
  var e2 = 0;
  var eG = be.eG;
  this.aX8 = 0;
  this.dX = function () {
    aXG = 0;
    aXH = 0;
    aXI = 0;
    aEv = 0;
    aXJ = 0;
  };
  this.ir = function () {
    h.ir();
    if (bB.a7Q() < 1.7) {
      aXK();
    } else {
      aXL();
    }
    lV();
    if (be.df) {
      be.df = false;
      x9();
    }
  };
  function aXK() {
    var aUx;
    if (e2 === 0) {
      if (be.eG >= eG) {
        aUx = be.a9w / bB.a7Q();
        eG += aUx * Math.floor(1 + (be.eG - eG) / aUx);
        if (aD.z4 === 2 || aM.gr || !bB.a3t) {
          lP();
        } else {
          aXM();
          ba.aAX();
        }
        e2++;
      }
    } else {
      aXN();
    }
  }
  function aXL() {
    var aUx;
    if (be.eG >= eG) {
      if (aD.z4 === 2 || aM.gr || !bB.a3t) {
        lP();
        eG = be.eG;
      } else {
        aUx = be.a9w / bB.a7Q();
        if ((be.eG - eG) / aUx > 16) {
          eG = be.eG - 16 * aUx;
        }
        while (be.eG >= eG && aD.z4 !== 2) {
          eG += aUx;
          aXM();
        }
        ba.aAX();
      }
    }
    aXN();
  }
  function aXM() {
    if (aXO()) {
      return;
    }
    if (!aXP()) {
      return;
    }
    lR();
  }
  function aXO() {
    if (!aD.h2) {
      return 0;
    }
    if (aD.kF) {
      return 0;
    }
    if (aD.z4 === 2) {
      return 1;
    }
    if (aXJ % 7 !== 0) {
      aXJ++;
      return 1;
    }
    if (aEv === aD.a3W) {
      if (!aXP()) {
        return 0;
      }
      aW.a9x(aEv);
      aD.oz.ir();
      return 1;
    }
    if (!aXP()) {
      return 0;
    }
    aXJ++;
    aEv++;
    af.a3P();
    af.lY(true);
    return 1;
  }
  function aXN() {
    e2 = 0;
    if (aD.h2) {
      be.df = aW.a9x(aEv - (aXJ % 7 === 0 ? 0 : 1) + (aXJ % 7) / 7) || be.df;
      la();
      return;
    }
    if (aM.gr || !bB.a3t) {
      la();
    } else {
      be.df = true;
      lX();
    }
  }
  function aXP() {
    var aB, eh, ke;
    var aXQ = b8.ox.aS9;
    var fO = b8.ox.aSA;
    var fQ = b8.ox.aSB;
    var fS = b8.ox.aSC;
    var aXR = b8.ox.aSD;
    var aXS = b8.ox.aSE;
    if (aXG >= aXS.length) {
      aN.a0K("Replay file smaller than expected.");
      bB.a1A(false);
      aD.z4 = 2;
      return false;
    }
    ke = aXS[aXG];
    if (!aXR[aXG]) {
      if (++aXI >= ke) {
        aXG++;
        aXI = 0;
      }
      return true;
    }
    eh = aXH + ke;
    for (aB = aXH; aB < eh; aB++) {
      b7.o3.ok(aXQ[aB], fO[aB], fQ[aB], fS[aB]);
    }
    aXH += ke;
    aXG++;
    return true;
  }
  this.zE = function () {
    if (b8.ox.aSE.length - aXG <= 2) {
      return;
    }
    aN.a0K("Replay file larger than expected.");
  };
}
function aXT() {
  var e2 = 0;
  var eG = be.eG;
  this.aX8 = 0;
  this.ir = function () {
    h.ir();
    if (aD.h2) {
      la();
    } else {
      if (e2 === 0) {
        if (be.eG >= eG) {
          eG += be.a9w * Math.floor(1 + (be.eG - eG) / be.a9w);
          if (aD.z4 === 2 || aM.gr) {
            lP();
          } else {
            lR();
            ba.aAX();
          }
          e2++;
        }
      } else {
        if (aM.gr) {
          la();
        } else {
          be.df = true;
          lX();
        }
        e2 = 0;
      }
    }
    lV();
    if (be.df) {
      be.df = false;
      x9();
    }
  };
}
function dN() {
  this.zD = null;
  this.df = false;
  this.eG = 0;
  this.a9w = 56;
  var aXU = 0;
  this.dX = function () {
    this.a3q();
    window.requestAnimationFrame(aXV);
    this.eG = performance.now();
  };
  this.a3h = function () {
    if (aD.gq) {
      this.zD = new aXF();
      this.zD.dX();
      return;
    }
    if (aD.kF) {
      this.zD = new aXT();
    } else {
      this.zD = new aX9();
      this.zD.dX();
    }
  };
  this.a3q = function () {
    this.zD = new aX7();
    this.df = true;
  };
  this.ir = function () {
    this.zD.aX8++;
  };
  this.jt = function () {
    return this.zD.aX8;
  };
  function aXV() {
    be.eG = aXU = performance.now();
    be.zD.ir();
    window.requestAnimationFrame(aXV);
  }
  this.aQd = function () {
    var dm = performance.now();
    if (aXU + 1000 > dm) {
      return;
    }
    this.eG = dm;
    this.zD.ir();
  };
}
function cp() {
  var aEK = 0;
  var aXW = true;
  this.ir = function () {
    if (be.eG < aEK) {
      return;
    }
    aEu();
  };
  function aEu() {
    aEK = be.eG + 5000;
    if (aD.gq || aD.kF) {
      return;
    }
    if (b9.g2.gt(aD.eR)) {
      return;
    }
    var dm = new Date();
    var a60 = dm.getUTCSeconds();
    if (aXW) {
      if (a60 < 50) {
        aXW = false;
      }
      return;
    }
    if (a60 < 50) {
      return;
    }
    aXW = true;
    var a5z = (dm.getUTCMinutes() + 1) % 60;
    if (a5z % 5 !== 0) {
      return;
    }
    if (a5z === 0 || a5z === 20 || a5z === 40) {
      if (aD.kD < 7) {
        aXX(0);
      }
      return;
    }
    if (a5z === 10 || a5z === 30 || a5z === 50) {
      if (aD.kD === 7 || aD.kD === 10) {
        aXX(1);
      }
      return;
    }
    if (a5z === 5 || a5z === 25 || a5z === 45) {
      if (aD.kD === 8) {
        aXX(2);
      }
      return;
    }
    if (a5z === 35) {
      if (aD.kD === 9) {
        aXX(3);
      }
    }
  }
  function aXX(id) {
    var r = [L(483), L(484), L(485), L(486)][id];
    aN.a5f(r);
  }
}
function cj() {
  var mD;
  var mE;
  var mQ;
  var mR;
  var aXY = 0;
  var aXZ = 0;
  this.a0c = function (e) {
    if (e.touches.length > 1) {
      aXZ = be.eG;
      aXY = 3;
      aXa(e);
      aL.r0();
      return true;
    }
    aXY = 0;
    return false;
  };
  this.a0d = function (e) {
    if (aD.z4 === 0) {
      return false;
    }
    if (e.touches.length > 1) {
      aXY = Math.max(aXY - 1, 0);
      if (!aH.mV()) {
        return true;
      }
      var aJc = aXb();
      aXa(e);
      var aJd = aXb();
      var hz = Math.floor((mD + mQ) / 2);
      var i0 = Math.floor((mE + mR) / 2);
      aS.a7q(hz, i0, Math.max(0.125, aJd) / Math.max(0.125, aJc));
      be.df = true;
      return true;
    }
    return false;
  };
  this.a10 = function () {
    var eo, eq;
    if (aXY) {
      aXY = 0;
      if (be.eG < aXZ + 500) {
        eo = (mD + mQ) / 2;
        eq = (mE + mR) / 2;
        aL.a0u(eo, eq);
        if (aL.click(eo, eq, true)) {
          be.df = true;
        }
        return true;
      }
    }
    return false;
  };
  function aXb() {
    return Math.pow(Math.pow(mQ - mD, 2) + Math.pow(mR - mE, 2), 0.5);
  }
  function aXa(e) {
    mD = h.k * e.touches[0].clientX;
    mE = h.k * e.touches[0].clientY;
    mQ = h.k * e.touches[1].clientX;
    mR = h.k * e.touches[1].clientY;
  }
}
function cy() {
  this.size = 0;
  this.e2 = 0;
  this.aC = null;
  this.dX = function (aC) {
    this.e2 = 0;
    this.aC = aC;
    this.size = aC.length;
  };
  this.tK = function () {
    this.aC = null;
  };
  this.oj = function (size) {
    var aB;
    var f9 = 0;
    var aC = this.aC;
    var mV = this.e2 + size - 1;
    for (aB = this.e2; aB <= mV; aB++) {
      f9 |= ((aC[aB >> 3] >> (7 - (aB & 7))) & 1) << (mV - aB);
    }
    this.e2 += size;
    if (this.e2 > 8 * this.size) {
      console.error("Unwrapper Overflow");
    }
    return f9;
  };
  this.aR9 = function (size) {
    var f1 = size >> 1;
    var ek = 1 << f1;
    return ek * this.oj(size - f1) + this.oj(f1);
  };
  this.aRA = function (aXc) {
    return this.size === bC.aR8(aXc);
  };
  this.aSR = function (vz, aXd, aXe) {
    var g9 = this.oj(vz);
    if (!g9) {
      return null;
    }
    var eh = Math.max(g9, aXe);
    var g = aXd <= 8 ? new Uint8Array(eh) : aXd <= 16 ? new Uint16Array(eh) : new Uint32Array(eh);
    for (var aB = 0; aB < g9; aB++) {
      g[aB] = this.oj(aXd);
    }
    var f9 = g[g9 - 1];
    if (!f9) {
      return g;
    }
    g.fill(f9, g9);
    return g;
  };
  this.aSS = function (vz, aXf, aXe) {
    var g9 = this.oj(vz);
    if (!g9) {
      return null;
    }
    var eh = Math.max(g9, aXe);
    var g = new Array(eh);
    for (var aB = 0; aB < g9; aB++) {
      g[aB] = this.aSP(aXf);
    }
    g.fill(g[g9 - 1], g9);
    return g;
  };
  this.aSP = function (vz) {
    return bF.v5.v9(this.oj(vz));
  };
  this.aSQ = function () {
    var pO = bE.s1.s2(bE.s1.s3(this.oj(30)));
    pO = b9.qh.a3K(pO, "_", "/");
    pO = b9.qh.a3K(pO, "-", "+");
    var aXg = "";
    while ((pO.length + aXg.length) % 4) {
      aXg = aXg + "=";
    }
    pO = S[91] + pO + aXg;
    var aGG = new Image();
    aGG.onload = function () {
      b8.aGf.aGg(aGG);
      aGG.onload = null;
      aGG = null;
    };
    aGG.src = pO;
  };
}
function dH() {
  this.aTG = 0;
  this.aTH = 0;
  this.aTC = 0;
  this.aTD = 0;
  this.aTE = 0;
  this.aTF = 0;
  this.aAY = [0, 0, 0, 0];
  this.mU = function () {
    this.aTG = aS.xB();
    this.aTH = aS.xC();
    this.aTC = -this.aTG;
    this.aTD = -this.aTH;
    this.aTE = h.i / iI;
    this.aTF = h.j / iI;
    this.aAY[0] = Math.floor(this.aTC);
    this.aAY[1] = Math.floor(this.aTD);
    this.aAY[2] = Math.floor(this.aAY[0] + this.aTE + 1);
    this.aAY[3] = Math.floor(this.aAY[1] + this.aTF + 1);
    ba.aAV = true;
  };
}
function ck() {
  var a6W;
  var lz;
  this.dX = function () {
    a6W = 1;
    lz = 0;
  };
  this.ir = function () {
    if (a6W > 0) {
      aXh();
    }
  };
  function aXh() {
    lz = lz === 0 ? be.eG + 16 : lz;
    a6W -= (be.eG - lz) * 0.001;
    a6W = a6W < 0 ? 0 : a6W;
    lz = be.eG;
    be.df = true;
  }
  this.tq = function () {
    if (a6W > 0) {
      aXi();
    }
  };
  function aXi() {
    tr.fillStyle = "rgba(0,0,0," + a6W + ")";
    tr.fillRect(0, 0, h.i, h.j);
  }
}
function a6() {
  this.size = 0;
  this.e2 = 0;
  this.aC = null;
  this.dX = function (aC) {
    this.e2 = 0;
    this.aC = aC;
    this.size = aC.length;
  };
  this.a7 = function (aXc) {
    this.dX(new Uint8Array(this.aR8(aXc)));
    return this.aC;
  };
  this.tK = function () {
    this.aC = null;
  };
  this.a8 = function (size, a64) {
    var aB;
    var aC = this.aC;
    var mV = this.e2 + size - 1;
    for (aB = this.e2; aB <= mV; aB++) {
      aC[aB >> 3] |= ((a64 >> (mV - aB)) & 1) << (7 - (aB & 7));
    }
    this.e2 += size;
    if (this.e2 > 8 * this.size) {
      console.error("Wrapper Overflow");
    }
  };
  this.aR7 = function (size, a64) {
    var f1 = size >> 1;
    var ek = 1 << f1;
    this.a8(size - f1, bK.dn(a64, ek));
    this.a8(f1, a64 % ek);
  };
  this.aXj = function (size) {
    var aB;
    var aC = this.aC;
    var mV = this.e2 + size;
    for (aB = this.e2; aB < mV; aB++) {
      aC[aB >> 3] &= 255 ^ (128 >>> (aB & 7));
    }
  };
  this.aR8 = function (aXc) {
    return (aXc + 7) >> 3;
  };
  this.aXk = function (g, jD, mV, aXl) {
    var aB;
    for (aB = jD; aB < mV; aB++) {
      this.a8(aXl, g[aB]);
    }
  };
}
function cx() {
  this.dX = function () {
    this.g = [];
    this.e2 = 0;
  };
  this.aRW = function () {
    return new Uint8Array(this.g);
  };
  this.a8 = function (aXm, value) {
    var g = this.g;
    var mV = this.e2 + aXm - 1;
    var aXn = 1 + (mV >> 3);
    while (g.length < aXn) {
      g.push(0);
    }
    for (var aB = this.e2; aB <= mV; aB++) {
      g[aB >> 3] |= ((value >> (mV - aB)) & 1) << (7 - (aB & 7));
    }
    this.e2 += aXm;
  };
  this.de = function (g, vz, aXd) {
    var aXo = b9.pq.a1n(g);
    this.a8(vz, aXo);
    for (var aB = 0; aB < aXo; aB++) {
      this.a8(aXd, g[aB]);
    }
  };
  this.aSj = function (g, vz, aXf) {
    var aXo = b9.pq.a1n(g);
    this.a8(vz, aXo);
    for (var aB = 0; aB < aXo; aB++) {
      this.aSh(g[aB], aXf);
    }
  };
  this.aSh = function (pO, vz) {
    var eh = pO.length;
    this.a8(vz, eh);
    for (var aB = 0; aB < eh; aB++) {
      this.a8(16, pO.charCodeAt(aB));
    }
  };
  this.aSi = function (a1t) {
    var pO = a1t.toDataURL();
    var aXp = pO.split(",");
    if (aXp.length < 2) {
      console.log("error 266");
      return;
    }
    pO = aXp[aXp.length - 1];
    pO = b9.qh.a3K(pO, "/", "_");
    pO = b9.qh.a3K(pO, "\\+", "-");
    pO = b9.qh.a3K(pO, "=", "");
    var vI = bF.s1.vF(pO);
    var eh = vI.length;
    this.a8(30, eh);
    for (var aB = 0; aB < eh; aB++) {
      this.a8(6, vI[aB]);
    }
  };
}
setTimeout(bq, 10000);
window.onload = function () {
  const lobbyCodeFromUrl = getUrlParameter("code");
  bq();
  if (lobbyCodeFromUrl) {
    let playerName = bi.eE.data[122].value.slice(0, 20);
    while (playerName.length < 3) {
      playerName += "1";
    }
    bi.eE.data[122].value = playerName;
    connectToServer(lobbyCodeFromUrl, playerName);
  }
};
