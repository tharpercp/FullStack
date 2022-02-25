class Comment extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount () {
        this.props.fetchAllComments();
    }

    renderComments () {
        const comments = this.props.photos
    }

    render () {
        return (
            <div className="comment-container">
                {this.renderComments()}
            </div>
        )
    }
}

export default Comment;