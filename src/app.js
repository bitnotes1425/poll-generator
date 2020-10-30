const PollBox = styled( "div" )`
	margin: 1rem;

	&:hover h1, &:hover ul, &:hover .avatar {
		background-color: #eee;
	}
`;

const PollHeader = styled( "h1" )`
	background-color: #ddd;
	margin: 0;
	padding: 0 1.2rem .8rem 1.2rem;
	border-bottom: 1px solid #555;
`;

const PollChoices = styled( "ul" )`
	list-style-type: none;
	background-color: #ddd;
	margin: 0;
	padding: .8rem .4rem;
	border-radius: 0 0 .6rem .6rem;
`;

const PollChoice = styled( "li" )`
	cursor: pointer;
	padding: .2rem 1.8rem;
	transition: background-color .1s linear;
	border-radius: .4rem;
	position: relative;

	&.active::before {
		content: "";
		width: 8px;
		height: 16px;
		border: 2px solid green;
		border-width: 0 2px 2px 0;
		position: absolute;
		transform: rotate(45deg);
		left: .6rem;
		top: .1rem;
	}

	&:hover {
		background-color: #aaa;
	}
`;

const Image = styled( "img" )`
	margin: 0 .5rem 0 0;
	vertical-align: middle;
	border-radius: 50%;
	box-shadow: 0 1px 6px rgba(32,33,36,.28);
`;

const AvatarContainer = styled( "div" )`
	background-color: #ddd;
	padding: .5rem 1rem;
	border-radius: .6rem .6rem 0 0;
`;

function Avatar( props ) {
	const { name, image } = props;
	return (
		<AvatarContainer className="avatar">
			<Image src={ image }/>
			<span>{ name }</span>
		</AvatarContainer>
	);
}

const creators = new Map();

class Poll extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			hasAvatarLoaded: false
		};
		this.update = this.update.bind( this );
	}
	update() {
		this.setState( { hasAvatarLoaded: true } );
	}
	componentDidMount() {
		const updater = this.update;
		this.props.data.creator.get().then( function( doc ) {
			const { name } = doc.data();
			creators.set( doc.id, {
				name,
				image: `https://www.gravatar.com/avatar/${ CryptoJS.MD5( doc.id ).toString() }?d=retro&s=40`
			} );
			updater();
		} );
	}
	render() {
		let counter = 0;
		const { title, choices, creator } = this.props.data;
		return (
			<PollBox>
				{ this.state.hasAvatarLoaded && <Avatar { ...creators.get( creator.id ) }/> }
				<PollHeader>{ title }</PollHeader>
				<PollChoices>{ choices.map( choice => <PollChoice key={ counter++ } className={ Math.random() > 0.5 ? "active" : "" }>{ choice }</PollChoice>) }</PollChoices>
			</PollBox>
		);
	}
}

//*
function App( props ) {
	const { data } = props;
	return data.map( poll => <Poll key={ poll.id } data={ poll.data }/> );
}
/*/
function App( props ) {
	return <Avatar name="John Wick" image="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d52?d=retro&s=40"/>;
}
//*/