import React from 'react';

class PostPhoto extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: this.props.currentUser,
            img_url: "",
            album_id: "",
            body: "",
            photoFile: null,
            awsURL: null,
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, awsUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleBody(e) {
        this.setState({
            body: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[user_id]', this.state.user_id);
        formData.append('photo[album_id]', this.state.album_id);
        formData.append('photo[img_url]', this.state.img_url);
        if (this.state.photoFile) {
            formData.append('photo[photo]', this.state.photoFile);
        }

        this.props.postPhoto(formData);
    }

    render () {
        return (
            <div className="post-photo-container">
                <form onSubmit={this.handleSubmit}>
                    <label for="post-photo-button">Select a Photo
                        <input className="post-photo-button" type="file" onChange={this.handleFile} />
                    </label>
                    <label for="photo-form-body">Post Body (optional)
                        <input className="post-form-body" type="text" onChange={this.handleBody} />
                    </label>
                    <button type="submit">Create Post</button>
                </form>
            </div>
        )
    }
}

export default PostPhoto;