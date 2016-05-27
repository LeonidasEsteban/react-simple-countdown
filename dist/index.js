'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var CountDown = (0, _react.createClass)({
  displayName: 'Simple countDown',
  propTypes: {
    date: _react.PropTypes.string,
    className: _react.PropTypes.string,
    days: _react.PropTypes.objectOf(_react.PropTypes.string),
    hours: _react.PropTypes.string,
    mins: _react.PropTypes.string,
    segs: _react.PropTypes.string,
    onEnd: _react.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
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
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.interval = setInterval(function () {
      var date = _this.getDateData(_this.props.date);
      if (date) {
        _this.setState(date);
      } else {
        _this.stop();
        _this.props.onEnd();
      }
    }, 1000);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.stop();
  },
  getDateData: function getDateData(endDate) {
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
  },
  render: function render() {
    var countDown = this.state;
    var days = undefined;
    if (countDown.days === 1) {
      days = this.props.days.singular;
    } else {
      days = this.props.days.plural;
    }
    return _react2['default'].createElement(
      'div',
      { className: this.props.className },
      _react2['default'].createElement(
        'div',
        { className: this.props.className + '-col is-day' },
        _react2['default'].createElement(
          'p',
          null,
          _react2['default'].createElement(
            'strong',
            null,
            this.leadingZeros(countDown.days)
          ),
          _react2['default'].createElement(
            'span',
            null,
            days
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: this.props.className + '-col is-hour' },
        _react2['default'].createElement(
          'p',
          null,
          _react2['default'].createElement(
            'strong',
            null,
            this.leadingZeros(countDown.hours)
          ),
          _react2['default'].createElement(
            'span',
            null,
            this.props.hours
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: this.props.className + '-col is-min' },
        _react2['default'].createElement(
          'p',
          null,
          _react2['default'].createElement(
            'strong',
            null,
            this.leadingZeros(countDown.min)
          ),
          _react2['default'].createElement(
            'span',
            null,
            this.props.mins
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: this.props.className + '-col is-seg' },
        _react2['default'].createElement(
          'p',
          null,
          _react2['default'].createElement(
            'strong',
            null,
            this.leadingZeros(countDown.sec)
          ),
          _react2['default'].createElement(
            'span',
            null,
            this.props.segs
          )
        )
      )
    );
  },
  stop: function stop() {
    clearInterval(this.interval);
  },
  leadingZeros: function leadingZeros(num) {
    var length = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

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
});

exports['default'] = CountDown;
module.exports = exports['default'];