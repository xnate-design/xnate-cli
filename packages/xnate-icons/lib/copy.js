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
  d: "M592 96H353C308.8 96 272 130.8 272 175V192h-15C212.8 192 176 226.8 176 271v576c0 44.2 36.8 81 81 81h416c44.2 0 79-36.8 79-81V832h17c44.2 0 79-36.8 79-81V352L592 96z m0 89.2l166.8 166.8H592V185.2z m96 661.8c0 9.4-6.8 17-15 17h-416c-8.8 0-17-8.2-17-17v-576c0-8.2 7.6-15 17-15h15v511c0 44.2 20.8 65 65 65H688v15z m96-96c0 9.4-6.8 17-15 17h-416c-8.8 0-17-8.2-17-17v-576c0-8.2 7.6-15 17-15H528v256h256v335z",
  fillRule: "evenodd"
}));
const Copy = React.forwardRef((props, ref) => {
  return React.createElement(_iconBase.default, Object.assign({
    name: "light"
  }, props, {
    ref: ref
  }), React.createElement(Icon, null));
});
var _default = Copy;
exports.default = _default;