function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Link(props) {
    var href = props.href,
        other = _objectWithoutProperties(props, ["href"]);

    return React.createElement(
        "a",
        Object.assign({ href: href }, other),
        props.children || href
    );
}