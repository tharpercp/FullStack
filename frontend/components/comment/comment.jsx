class Comment extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount () {
        this.props.fetchAllComments(this.props.photoId);
    }

    renderComments () {
        const comments = this.props.comments
        if (comments.length > 0) {

            return (
                <ul className="comments-list">
                    {comments.map(comment => {
                        if (comment.user_id === this.props.user_id) {
                            return (
                                <li className="comment-item-self">{comment.body}</li>
                            )
                        } else {
                            return (
                                <li className="comment-item-other">{comment.body}</li>
                            )
                        }
                    })}      
                </ul>
            )
        } else {
            return (
                <li className="comment-item-self">No Comments Yet</li>
            )
        }
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