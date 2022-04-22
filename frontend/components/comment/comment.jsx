import React from "react";

class Comment extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            photo_id: this.props.photoId,
            body: '',
            user_id: this.props.currentUser,
        }

    }

    componentDidMount () {
        this.props.fetchAllComments(this.props.photoId);
    }

    handleChange(e) {
        this.setState({body: e.currentTarget.value})
    }

    submitComment () {
        this.props.postComment(this.state)
    }

    // renderComments () {
    //     const comments = this.props.comments
    //     if (comments) {

    //         return (
    //             <ul className="comments-list">
    //                 {comments.map(comment => {
    //                     if (comment.user_id === this.props.user_id) {
    //                         return (
    //                             <li className="comment-item-self">{comment.body}</li>
    //                         )
    //                     } else {
    //                         return (
    //                             <li className="comment-item-other">{comment.body}</li>
    //                         )
    //                     }
    //                 })}      
    //             </ul>
    //         )
    //     } else {
    //         return (
    //             <ul className="comments-list">
    //                 <li className="comment-item-self">No Comments Yet</li>
    //             </ul>
    //         )
    //     }
    // }

    render () {
        return (
            <div className="comment-container">
                {/* <div className="comments">
                    {this.renderComments()}
                </div> */}
            </div>
        )
    }
}

export default Comment;