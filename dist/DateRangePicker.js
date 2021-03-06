(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "moment-jalaali", "./index.js"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("moment-jalaali"), require("./index.js"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.momentJalaali, global.index);
        global.DateRangePicker = mod.exports;
    }
})(this, function (exports, _react, _momentJalaali, _index) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _momentJalaali2 = _interopRequireDefault(_momentJalaali);

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var DateRangePicker = function (_React$Component) {
        _inherits(DateRangePicker, _React$Component);

        function DateRangePicker(props) {
            _classCallCheck(this, DateRangePicker);

            var _this = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, props));

            _this.change = _this.change.bind(_this);
            _this.secondchange = _this.secondchange.bind(_this);
            _this.state = { disableFromUnix: "" };
            return _this;
        }

        _createClass(DateRangePicker, [{
            key: "change",
            value: function change(unix, formatted) {
                var onChangeStart = this.props.onChangeStart;

                this.setState({ disableFromUnix: unix });
                if (!!onChangeStart) onChangeStart(unix, formatted);
            }
        }, {
            key: "secondchange",
            value: function secondchange(unix, formatted) {
                var onChangeEnd = this.props.onChangeEnd;

                if (!!onChangeEnd) onChangeEnd(unix, formatted);
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props,
                    placeholderEnd = _props.placeholderEnd,
                    placeholderStart = _props.placeholderStart,
                    idStart = _props.idStart,
                    idEnd = _props.idEnd,
                    format = _props.format,
                    customClassEnd = _props.customClassEnd,
                    customClassStart = _props.customClassStart,
                    containerClass = _props.containerClass,
                    inputTextAlign = _props.inputTextAlign,
                    monthTitleEnable = _props.monthTitleEnable;
                var disableFromUnix = this.state.disableFromUnix;

                if (!placeholderStart) placeholderStart = "";
                if (!placeholderEnd) placeholderEnd = "";
                if (!idStart) idStart = "";
                if (!idEnd) idEnd = "";
                return _react2.default.createElement(
                    "div",
                    { className: "jdtrp", style: { textAlign: "initial" } },
                    _react2.default.createElement(_index2.default, { monthTitleEnable: monthTitleEnable, containerClass: containerClass, inputTextAlign: inputTextAlign, customClass: customClassStart, placeholder: placeholderStart, format: format, onChange: this.change, id: idStart }),
                    _react2.default.createElement(
                        "div",
                        null,
                        "->"
                    ),
                    !disableFromUnix && _react2.default.createElement(
                        "div",
                        null,
                        placeholderEnd
                    ),
                    !!disableFromUnix && _react2.default.createElement(_index2.default, { containerClass: containerClass, inputTextAlign: inputTextAlign, customClass: customClassEnd, placeholder: placeholderEnd, disableFromUnix: disableFromUnix, format: format, onChange: this.secondchange, id: "datePicker" })
                );
            }
        }]);

        return DateRangePicker;
    }(_react2.default.Component);

    exports.default = DateRangePicker;
});