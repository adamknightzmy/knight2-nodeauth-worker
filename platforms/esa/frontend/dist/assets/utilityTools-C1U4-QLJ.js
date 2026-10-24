const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/passwordGenerator-Bk5hV_YY.js","assets/element-plus-Dc0VvpTa.js","assets/vue-core-BNUN2Iuz.js","assets/element-plus-CqJ-3YyC.css","assets/index-CMWeXdkK.js","assets/pdf-utils-Dcr3mDSn.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-BOqfRzLV.js","assets/index-CeTN7Y2W.css","assets/timeSync-QLHh1C-9.js","assets/qrParser-BXsMFwWn.js","assets/totpSecret-BCL0gfsO.js","assets/common-B-vRrfue.js","assets/vaultService-OrDuJVRo.js","assets/resourceRegistry-DyPweXha.js","assets/qr-utils-D-SDrG32.js","assets/appsReview-dSWTVmiX.js","assets/iconProtonAuth-BnHW_SuB.js","assets/iconLastPassAuth-B90QyTw7.js"])))=>i.map(i=>d[i]);
import { _, __tla as __tla_0 } from "./pdf-utils-Dcr3mDSn.js";
import { u as x, g as O, aC as q, ax as z, ay as B, aU as $, a2 as F } from "./element-plus-Dc0VvpTa.js";
import { I as g } from "./iconToolbox-3JzhpDO3.js";
import { M, v as N, __tla as __tla_1 } from "./index-CMWeXdkK.js";
import { a6 as t, l as r, i as e, F as T, r as m, aF as h, at as k, al as n, k as E, ac as j, j as f, ag as y, g as w, W as Q, S as d, t as p } from "./vue-core-BNUN2Iuz.js";
import "./compression-utils-BzBbrBKd.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-BOqfRzLV.js";
let fe;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })()
]).then(async ()=>{
    let U, W, G, H, J, K, X, Y, Z, ee, te, oe, se, ae, ce, re;
    U = {
        class: "tools-wrapper"
    };
    W = {
        class: "tab-card-wrapper"
    };
    G = {
        class: "page-header-container"
    };
    H = {
        class: "page-header-hero"
    };
    J = {
        class: "hero-icon-wrapper"
    };
    K = {
        key: 0
    };
    X = {
        class: "page-desc-text"
    };
    Y = {
        class: "page-header-hero"
    };
    Z = {
        class: "hero-icon-wrapper"
    };
    ee = {
        key: 0
    };
    te = {
        class: "page-desc-text"
    };
    oe = {
        key: 0,
        class: "tools-grid"
    };
    se = {
        class: "tool-card-content"
    };
    ae = {
        class: "icon-wrapper"
    };
    ce = {
        class: "text-info"
    };
    re = {
        key: 1,
        class: "tool-container"
    };
    fe = {
        __name: "utilityTools",
        setup (ie) {
            const u = M(), C = p(()=>_(()=>import("./passwordGenerator-Bk5hV_YY.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))), I = p(()=>_(()=>import("./timeSync-QLHh1C-9.js"), __vite__mapDeps([10,1,2,3,4,5,6,7,8,9]))), D = p(()=>_(()=>import("./qrParser-BXsMFwWn.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([11,5,6,1,2,3,4,7,8,9]))), P = p(()=>_(()=>import("./totpSecret-BCL0gfsO.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([12,5,6,1,2,3,8,13,4,7,9,14,15,16]))), S = p(()=>_(()=>import("./appsReview-dSWTVmiX.js"), __vite__mapDeps([17,1,2,3,18,4,5,6,7,8,9,19]))), i = w({
                get: ()=>u.activeSubTool,
                set: (s)=>{
                    u.activeSubTool = s;
                }
            }), { t: o } = N.global, v = w(()=>[
                    {
                        id: "totp-secret",
                        title: o("tools.totp_secret_title"),
                        desc: o("tools.totp_secret_desc"),
                        icon: d(q)
                    },
                    {
                        id: "apps-review",
                        title: o("tools.apps_review_title"),
                        desc: o("tools.apps_review_desc"),
                        icon: d(z)
                    },
                    {
                        id: "password",
                        title: o("tools.password_gen_title"),
                        desc: o("tools.password_gen_desc"),
                        icon: d(B)
                    },
                    {
                        id: "time-sync",
                        title: o("tools.time_sync_title"),
                        desc: o("tools.time_sync_desc"),
                        icon: d($)
                    },
                    {
                        id: "qr-parser",
                        title: o("tools.qr_parser_title"),
                        desc: o("tools.qr_parser_desc"),
                        icon: d(F)
                    }
                ]), V = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.title : "工具";
            }, b = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.desc : "";
            }, A = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.icon : g;
            }, L = w(()=>{
                switch(i.value){
                    case "password":
                        return C;
                    case "time-sync":
                        return I;
                    case "qr-parser":
                        return D;
                    case "totp-secret":
                        return P;
                    case "apps-review":
                        return S;
                    default:
                        return null;
                }
            });
            return (s, a)=>{
                const c = x, R = O;
                return t(), r("div", U, [
                    e("div", W, [
                        e("div", G, [
                            i.value ? (t(), r(T, {
                                key: 1
                            }, [
                                e("div", Y, [
                                    e("div", Z, [
                                        m(c, {
                                            size: 28
                                        }, {
                                            default: h(()=>[
                                                    (t(), f(y(A(i.value))))
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    k(u).isMobile ? E("", !0) : (t(), r("h2", ee, n(V(i.value)), 1))
                                ]),
                                e("p", te, n(b(i.value)), 1)
                            ], 64)) : (t(), r(T, {
                                key: 0
                            }, [
                                e("div", H, [
                                    e("div", J, [
                                        m(c, {
                                            size: 28
                                        }, {
                                            default: h(()=>[
                                                    m(g)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    k(u).isMobile ? E("", !0) : (t(), r("h2", K, n(s.$t("tools.title")), 1))
                                ]),
                                e("p", X, n(s.$t("tools.desc")), 1)
                            ], 64))
                        ]),
                        i.value ? (t(), r("div", re, [
                            (t(), f(y(L.value)))
                        ])) : (t(), r("div", oe, [
                            (t(!0), r(T, null, j(v.value, (l)=>(t(), f(R, {
                                    key: l.id,
                                    shadow: "hover",
                                    class: Q([
                                        "tool-card",
                                        `tool-card-${l.id}`
                                    ]),
                                    onClick: (le)=>i.value = l.id
                                }, {
                                    default: h(()=>[
                                            e("div", se, [
                                                e("div", ae, [
                                                    m(c, {
                                                        size: 32
                                                    }, {
                                                        default: h(()=>[
                                                                (t(), f(y(l.icon)))
                                                            ]),
                                                        _: 2
                                                    }, 1024)
                                                ]),
                                                e("div", ce, [
                                                    e("h3", null, n(l.title), 1),
                                                    e("p", null, n(l.desc), 1)
                                                ])
                                            ])
                                        ]),
                                    _: 2
                                }, 1032, [
                                    "class",
                                    "onClick"
                                ]))), 128))
                        ]))
                    ])
                ]);
            };
        }
    };
});
export { fe as default, __tla };
