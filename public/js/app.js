var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n\tmargin: 1rem;\n\n\t&:hover h1, &:hover ul, &:hover .avatar {\n\t\tbackground-color: #eee;\n\t}\n"], ["\n\tmargin: 1rem;\n\n\t&:hover h1, &:hover ul, &:hover .avatar {\n\t\tbackground-color: #eee;\n\t}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n\tbackground-color: #ddd;\n\tmargin: 0;\n\tpadding: 0 1.2rem .8rem 1.2rem;\n\tborder-bottom: 1px solid #555;\n"], ["\n\tbackground-color: #ddd;\n\tmargin: 0;\n\tpadding: 0 1.2rem .8rem 1.2rem;\n\tborder-bottom: 1px solid #555;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n\tlist-style-type: none;\n\tbackground-color: #ddd;\n\tmargin: 0;\n\tpadding: .8rem .4rem;\n\tborder-radius: 0 0 .6rem .6rem;\n"], ["\n\tlist-style-type: none;\n\tbackground-color: #ddd;\n\tmargin: 0;\n\tpadding: .8rem .4rem;\n\tborder-radius: 0 0 .6rem .6rem;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n\tcursor: pointer;\n\tpadding: .2rem 1.8rem;\n\ttransition: background-color .1s linear;\n\tborder-radius: .4rem;\n\tposition: relative;\n\n\t&.active::before {\n\t\tcontent: \"\";\n\t\twidth: 8px;\n\t\theight: 16px;\n\t\tborder: 2px solid green;\n\t\tborder-width: 0 2px 2px 0;\n\t\tposition: absolute;\n\t\ttransform: rotate(45deg);\n\t\tleft: .6rem;\n\t\ttop: .1rem;\n\t}\n\n\t&:hover {\n\t\tbackground-color: #aaa;\n\t}\n"], ["\n\tcursor: pointer;\n\tpadding: .2rem 1.8rem;\n\ttransition: background-color .1s linear;\n\tborder-radius: .4rem;\n\tposition: relative;\n\n\t&.active::before {\n\t\tcontent: \"\";\n\t\twidth: 8px;\n\t\theight: 16px;\n\t\tborder: 2px solid green;\n\t\tborder-width: 0 2px 2px 0;\n\t\tposition: absolute;\n\t\ttransform: rotate(45deg);\n\t\tleft: .6rem;\n\t\ttop: .1rem;\n\t}\n\n\t&:hover {\n\t\tbackground-color: #aaa;\n\t}\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n\tmargin: 0 .5rem 0 0;\n\tvertical-align: middle;\n\tborder-radius: 50%;\n\tbox-shadow: 0 1px 6px rgba(32,33,36,.28);\n"], ["\n\tmargin: 0 .5rem 0 0;\n\tvertical-align: middle;\n\tborder-radius: 50%;\n\tbox-shadow: 0 1px 6px rgba(32,33,36,.28);\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n\tbackground-color: #ddd;\n\tpadding: .5rem 1rem;\n\tborder-radius: .6rem .6rem 0 0;\n"], ["\n\tbackground-color: #ddd;\n\tpadding: .5rem 1rem;\n\tborder-radius: .6rem .6rem 0 0;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PollBox = styled("div")(_templateObject);

var PollHeader = styled("h1")(_templateObject2);

var PollChoices = styled("ul")(_templateObject3);

var PollChoice = styled("li")(_templateObject4);

var Image = styled("img")(_templateObject5);

var AvatarContainer = styled("div")(_templateObject6);

function Avatar(props) {
	var name = props.name,
	    image = props.image;

	return React.createElement(
		AvatarContainer,
		{ className: "avatar" },
		React.createElement(Image, { src: image }),
		React.createElement(
			"span",
			null,
			name
		)
	);
}

var creators = new Map();

var Poll = function (_React$Component) {
	_inherits(Poll, _React$Component);

	function Poll(props) {
		_classCallCheck(this, Poll);

		var _this = _possibleConstructorReturn(this, (Poll.__proto__ || Object.getPrototypeOf(Poll)).call(this, props));

		_this.state = {
			hasAvatarLoaded: false
		};
		_this.update = _this.update.bind(_this);
		return _this;
	}

	_createClass(Poll, [{
		key: "update",
		value: function update() {
			this.setState({ hasAvatarLoaded: true });
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var updater = this.update;
			this.props.data.creator.get().then(function (doc) {
				var _doc$data = doc.data(),
				    name = _doc$data.name;

				creators.set(doc.id, {
					name: name,
					image: "https://www.gravatar.com/avatar/" + CryptoJS.MD5(doc.id).toString() + "?d=retro&s=40"
				});
				updater();
			});
		}
	}, {
		key: "render",
		value: function render() {
			var counter = 0;
			var _props$data = this.props.data,
			    title = _props$data.title,
			    choices = _props$data.choices,
			    creator = _props$data.creator;

			return React.createElement(
				PollBox,
				null,
				this.state.hasAvatarLoaded && React.createElement(Avatar, creators.get(creator.id)),
				React.createElement(
					PollHeader,
					null,
					title
				),
				React.createElement(
					PollChoices,
					null,
					choices.map(function (choice) {
						return React.createElement(
							PollChoice,
							{ key: counter++, className: Math.random() > 0.5 ? "active" : "" },
							choice
						);
					})
				)
			);
		}
	}]);

	return Poll;
}(React.Component);

//*


function App(props) {
	var data = props.data;

	return data.map(function (poll) {
		return React.createElement(Poll, { key: poll.id, data: poll.data });
	});
}
/*/
function App( props ) {
	return <Avatar name="John Wick" image="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d52?d=retro&s=40"/>;
}
//*/