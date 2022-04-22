import React from 'react';
import photo from '../../../app/assets/images/seed/22.jpg'
import NavContainer from '../nav/nav_container'
import CommentContainer from '../comment/comment_container'

class PhotoShow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            like: 'white',
        }

    }

    toggleLike () {
        if (this.state.like === 'white') {
            this.props.like(this.props.photoId)
            this.setState({like: 'lightgreen'})
        } else {
            this.props.unLike(this.props.photoId)
            this.setState({like: 'white'})
        }
    }

    render() {
        return (
        <div>
            <NavContainer onClick={() => this.props.history.push('/feed')}/>
            <div className="photo-show-page">
                
                <div className="photo-show-container">
                    <img src={photo} />
                </div>
                <div className="photo-show-buttons">
                    <div className="like-button"  onClick={() => this.toggleLike()} style={{backgroundColor: this.state.like}}>👍</div>
                </div>
                <div className="photo-body">
                    <i>Photo taken on site at CCF headquarters in Otjiwarongo, Namibia. Learn more about the protection and conservation efforts at https://cheetah.org/</i>
                </div>
                {/* <CommentContainer photoId={this.props.photoId}/> */}
                <textarea onChange={this.handleChange}
                    className="comment-input"
                    rows="2"
                    type='text'
                    placeholder='Leave a comment'
                    component='input'
                ></textarea>
                <br/>
                <button className="submit-comment">Submit</button>
            </div>
            <br/>
        </div>


        )
    }
};

export default PhotoShow;