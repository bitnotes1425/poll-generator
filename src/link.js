function Link( props ) {
    const { href, ...other } = props;
    return (
        <a href={ href } { ...other }>{ props.children || href }</a>
    );
}