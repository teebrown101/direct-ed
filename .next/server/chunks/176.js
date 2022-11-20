"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 7058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Button_Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Button/Button.tsx


const Button = ({ onCick , children , loading , className , loadingIndicator  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onCick,
        className: `btn capitalize ${loading && "loading"} ${className}`,
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: loadingIndicator
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        })
    });
};
/* harmony default export */ const Button_Button = (Button);

;// CONCATENATED MODULE: ./components/Button/index.ts



/***/ }),

/***/ 5879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PoolsCard_PoolsCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
;// CONCATENATED MODULE: ./components/Cards/PoolsCard/PoolsCard.tsx





const PoolsCard = ({ title , image  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full h-fit md:w-4/5 bg-light2 rounded-lg overflow-hidden shadow-md",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-48 relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `${image}`,
                    alt: "Pool Image",
                    width: "500",
                    height: "600"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-semibold text-xl text-center",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://directed.dev/",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center",
                            children: "Read more"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "divide-x divide-light flex items-center w-full border-b border-light",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-1/2 py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "font-semibold text-xl text-center",
                                    children: "23"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-center",
                                    children: "Scholarships funded"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-1/2 py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "font-semibold text-xl text-center",
                                    children: "1"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-center",
                                    children: "Remaining scholarship naming right"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-12 py-5 space-y-2 font-semibold",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-primary text-base flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineAccessTime, {}),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "33 days left"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "124 people have donated"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("progress", {
                        className: "progress progress-primary w-full bg-slate-300",
                        value: "80",
                        max: "100"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "text-base font-bold text-dark2",
                        children: [
                            "$300 to fund the next scholarship",
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center p-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/donate",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-primary",
                        children: "donate now"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const PoolsCard_PoolsCard = (PoolsCard);

;// CONCATENATED MODULE: ./components/Cards/PoolsCard/index.ts



/***/ }),

/***/ 1059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx



const NavLinks = [
    {
        title: "Scholarship Pools",
        link: "#"
    },
    {
        title: "Scholars’ Progress",
        link: "#"
    },
    {
        title: "Transactions",
        link: "#"
    }
];
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-primary h-fit py-4 w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "h-full w-full container flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "https://directed.dev/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-sm bg-primary-light border-none hover:bg-primary-light hover:border-none text-white",
                        children: "need help?"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "https://directed.dev/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-sm bg-primary-light border-none hover:bg-primary-light hover:border-none text-white",
                        children: "have a suggestion?"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-white",
                            children: [
                                "Terms and Conditions | Privacy Policy",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-white",
                            children: [
                                "\xa9 ",
                                new Date().getFullYear(),
                                " DirectEd. All rights reserved."
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Footer/index.ts



/***/ }),

/***/ 8510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Modal_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__(8547);
;// CONCATENATED MODULE: ./components/Modal/Modal.tsx



const Modal = ({ open , onClose , children , className  })=>{
    const handleStopPropagation = (event)=>{
        event.stopPropagation();
    };
    const handleClose = (event)=>{
        handleStopPropagation(event);
        if (onClose) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                checked: open,
                id: "my-modal",
                className: "modal-toggle"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal p-10",
                onClick: onClose,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: handleStopPropagation,
                    className: `modal-box ${className}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleClose,
                            className: "text-primary absolute top-2 right-2 z-50",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrFormClose, {
                                size: 20
                            })
                        }),
                        children
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./components/Modal/index.ts



/***/ }),

/***/ 3671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9361);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7058);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8510);
/* harmony import */ var _contexts_wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1392);
/* harmony import */ var _wallet_connectWallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6121);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_wallet__WEBPACK_IMPORTED_MODULE_7__, _wallet_connectWallet__WEBPACK_IMPORTED_MODULE_8__]);
([_contexts_wallet__WEBPACK_IMPORTED_MODULE_7__, _wallet_connectWallet__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const NavLinks = [
    {
        title: "Scholarship Pools",
        link: "/"
    },
    {
        title: "Scholars’ Progress",
        link: "/progress"
    }
];
const Navbar = ()=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const { connecting , walletNameConnected , connectWallet , walletConnected , connectedAddress , currentNetwork  } = (0,_contexts_wallet__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [wallet, setWallet] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const handleConnectWallet = async ()=>{
        setLoading(true);
        await (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .sleep */ ._)(2000).then(()=>{
            setLoading(false);
            setWallet(true);
            setOpen(true);
        });
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "bg-primary h-fit py-2 w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container flex items-center justify-between w-full h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "https://directed.dev/",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        id: "logo",
                                        src: "/static/images/logo.png",
                                        width: 50,
                                        height: 50,
                                        alt: "Direct Ed Logo"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-white text-xl font-semibold",
                                                id: "title",
                                                children: "DirectEd"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-white",
                                                id: "subtitle",
                                                children: "Realising Potential"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "hidden md:flex items-center space-x-5",
                            children: [
                                NavLinks.map((link, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: link.link,
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: `text-xl text-white ${router.pathname === link.link ? "font-semibold underline" : "font-light"}`,
                                            children: link.title
                                        })
                                    })),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "dropdown dropdown-hover",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            tabIndex: 0,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/transactions",
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `text-xl text-white ${router.pathname === "/transactions" ? "font-semibold underline" : "font-light"}`,
                                                    children: "Transactions"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            tabIndex: 0,
                                            className: "dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-body",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-lg font-semibold",
                                                    children: "The transaction page will be available after a donation has been made"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "dropdown dropdown-hover",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    tabIndex: 0,
                                    children: walletConnected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        className: "bg-light text-primary hover:bg-light font-semibold hover:border-none",
                                        children: [
                                            "$directEd: Connected to ",
                                            walletNameConnected
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_wallet_connectWallet__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                }),
                                !walletConnected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    tabIndex: 0,
                                    className: "hidden md:block dropdown-content card card-compact w-52 p-2 shadow bg-white mt-1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card-body",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Start by connecting your wallet"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Need help? Follow this",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                open: open,
                onClose: ()=>setOpen(false),
                className: "w-fit space-y-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "font-semibold text-2xl text-center w-64 capitalize",
                        children: "you have successfully connected a wallet!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setOpen(false),
                        className: "btn btn-primary btn-block",
                        children: "Close"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_0__]);
_Navbar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "AP": () => (/* reexport safe */ _Cards_PoolsCard__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "wp": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "zx": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9470);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1059);
/* harmony import */ var _Cards_PoolsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5879);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8510);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7058);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_0__]);
_Navbar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConnectWallet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1392);
/* harmony import */ var _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6377);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_wallet__WEBPACK_IMPORTED_MODULE_2__, _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_3__]);
([_contexts_wallet__WEBPACK_IMPORTED_MODULE_2__, _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ConnectWallet() {
    const { connecting , walletNameConnected , connectWallet  } = (0,_contexts_wallet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const [availableWallets, setAvailableWallets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function init() {
            setAvailableWallets(_martifylabs_mesh__WEBPACK_IMPORTED_MODULE_3__.BrowserWallet.getInstalledWallets());
        }
        init();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: availableWallets ? availableWallets.length == 0 ? "No wallets found" : availableWallets.map((wallet, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: ()=>connectWallet(wallet.name),
                className: "bg-light text-primary hover:bg-light font-semibold hover:border-none btn capitalize",
                children: [
                    "Connect with ",
                    wallet.name
                ]
            }, i)) : ""
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWallet),
/* harmony export */   "n": () => (/* binding */ WalletProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6377);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__]);
_martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    wallet: {},
    connecting: false,
    walletNameConnected: "",
    walletConnected: false,
    connectWallet: async (walletName)=>{},
    connectedAddress: "",
    currentNetwork: ""
});
const WalletProvider = ({ children  })=>{
    const [wallet, setWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [connecting, setConnecting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [walletNameConnected, setWalletNameConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [connectedAddress, setConnectedAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [currentNetwork, setCurrentNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( false || "");
    const connectWallet = async (walletName)=>{
        setConnecting(true);
        const _wallet = await _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__.BrowserWallet.enable(walletName);
        const _address = await _wallet.getUsedAddresses();
        const _network = await _wallet.getNetworkId();
        if (_wallet) {
            setWallet(_wallet);
            setWalletNameConnected(walletName);
            setWalletConnected(true);
            setConnectedAddress(_address[0]);
            if (_network == 0) setCurrentNetwork("Testnet");
            if (_network == 1) setCurrentNetwork("Mainnet");
        }
        setConnecting(false);
    };
    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            wallet,
            connecting,
            walletNameConnected,
            walletConnected,
            connectWallet,
            connectedAddress,
            currentNetwork
        }), [
        wallet,
        walletConnected,
        connecting,
        walletNameConnected,
        connectedAddress,
        currentNetwork
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletContext.Provider, {
        value: memoedValue,
        children: children
    });
};
function useWallet() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WalletContext);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ sleep)
/* harmony export */ });
const sleep = (time)=>new Promise((resolve)=>setTimeout(resolve, time));


/***/ })

};
;