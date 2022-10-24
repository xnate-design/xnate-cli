"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _iconBase = _interopRequireDefault(require("./iconBase"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Icon = props => React.createElement("svg", Object.assign({
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor"
}, props), React.createElement("path", {
  d: "M887.328 617.152 533.952 267.008c-0.512-0.512-1.216-0.672-1.76-1.152-0.128-0.128-0.16-0.32-0.288-0.448-12.576-12.416-32.832-12.352-45.28 0.192L136.512 618.944c-12.448 12.576-12.352 32.8 0.192 45.248 6.24 6.176 14.4 9.28 22.528 9.28 8.224 0 16.48-3.168 22.72-9.472l327.84-330.816 332.48 329.408c6.24 6.176 14.368 9.28 22.528 9.28 8.256 0 16.48-3.168 22.72-9.472C899.968 649.856 899.872 629.6 887.328 617.152z",
  fillRule: "evenodd"
}));
const ChevronDown = React.forwardRef((props, ref) => {
  return React.createElement(_iconBase.default, Object.assign({
    name: "chevron-right"
  }, props, {
    ref: ref
  }), React.createElement(Icon, null));
});
var _default = ChevronDown;
exports.default = _default;