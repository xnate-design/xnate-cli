import * as React from 'react';
import IconBase from './iconBase';
const Icon = (props) => (React.createElement("svg", Object.assign({ viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor" }, props),
    React.createElement("path", { d: "M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z", fillRule: "evenodd" })));
const ChevronLeft = React.forwardRef((props, ref) => {
    return (React.createElement(IconBase, Object.assign({ name: "chevron-right" }, props, { ref: ref }),
        React.createElement(Icon, null)));
});
export default ChevronLeft;
