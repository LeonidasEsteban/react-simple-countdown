'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountDown = function (_Component) {
  _inherits(CountDown, _Component);

  function CountDown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CountDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CountDown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        var date = _this2.getDateData(_this2.props.date);
        if (date) {
          _this2.setState(date);
        } else {
          _this2.stop();
          _this2.props.onEnd();
        }
      }, 1000);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var date = this.getDateData(this.props.date);
      if (date) {
        this.setState(date);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'getDateData',
    value: function getDateData(endDate) {
      var diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

      if (diff <= 0) {
        return false;
      }

      var timeLeft = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        millisec: 0
      };

      if (diff >= 365.25 * 86400) {
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
      }
      if (diff >= 86400) {
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
      }
      if (diff >= 3600) {
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
      }
      if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
      }
      timeLeft.sec = diff;
      return timeLeft;
    }
  }, {
    key: 'render',
    value: function render() {
      var countDown = this.state;
      var days = undefined;
      if (countDown.days === 1) {
        days = this.props.days.singular;
      } else {
        days = this.props.days.plural;
      }
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        countDown.days > 0 && _react2.default.createElement(
          'div',
          { className: this.props.className + '-col is-day' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              this.leadingZeros(countDown.days)
            ),
            _react2.default.createElement(
              'span',
              null,
              days
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.className + '-col is-hour' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              this.leadingZeros(countDown.hours)
            ),
            _react2.default.createElement(
              'span',
              null,
              this.props.hours
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.className + '-col is-min' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              this.leadingZeros(countDown.min)
            ),
            _react2.default.createElement(
              'span',
              null,
              this.props.mins
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.className + '-col is-seg' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              this.leadingZeros(countDown.sec)
            ),
            _react2.default.createElement(
              'span',
              null,
              this.props.segs
            )
          )
        )
      );
    }
  }, {
    key: 'stop',
    value: function stop() {
      clearInterval(this.interval);
    }
  }, {
    key: 'leadingZeros',
    value: function leadingZeros(num) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


      var length_ = length;
      var num_ = num;
      if (length_ === null) {
        length_ = 2;
      }
      num_ = String(num_);
      while (num_.length < length_) {
        num_ = '0' + num_;
      }
      return num_;
    }
  }]);

  return CountDown;
}(_react.Component);

CountDown.displayName = 'Simple countDown';
CountDown.propTypes = {
  date: _react.PropTypes.string,
  className: _react.PropTypes.string,
  days: _react.PropTypes.objectOf(_react.PropTypes.string),
  hours: _react.PropTypes.string,
  mins: _react.PropTypes.string,
  segs: _react.PropTypes.string,
  onEnd: _react.PropTypes.func
};
CountDown.defaultProps = {
  date: new Date(),
  className: 'CountDown',
  days: {
    plural: 'Days',
    singular: 'Day'
  },
  hours: 'Hours',
  mins: 'Min',
  segs: 'Seg',
  onEnd: function onEnd() {}

};
;

exports.default = CountDown;
