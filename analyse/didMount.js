__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hook1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hook1 */ "./src/components/hook1.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key,
            {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
    }
    else {
        obj[key] = value;
    }
    return obj;
}

__webpack_require__(/*! ./css/common.css */ "./src/css/common.css");

__webpack_require__(/*! ./css/main.less */ "./src/css/main.less");

var count = __webpack_require__(/*! ./modules/Count */ "./src/modules/Count.js");

console.log('count:' + count);



var WJClassComp = /*#__PURE__*/function (_React$Component) {
    _inherits(WJClassComp, _React$Component);

    var _super = _createSuper(WJClassComp);

    function WJClassComp(props) {
        var _this;

        _classCallCheck(this, WJClassComp);

        _this = _super.call(this, props);

        _defineProperty(_assertThisInitialized(_this), "updateAddress", function (address) {
            _this.setState({
                address: address
            });
        });

        _defineProperty(_assertThisInitialized(_this), "getData", function () {
            console.log('http get data...');
        });

        _this.state = {
            address: ''
        };
        return _this;
    }

    _createClass(WJClassComp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log('this is didMount...');
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            console.log('this is shouldCompoentUpdate...');
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    onClick: function onClick() {
                        _this2.updateAddress('liuan');
                    }
                },
                "this is react component.",
            /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_hook1__WEBPACK_IMPORTED_MODULE_1__["default"], null)
            );
        }
    }]);

    return WJClassComp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WJClassComp);

//# sourceURL=webpack:///./src/index.js?