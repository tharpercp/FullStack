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
            showAlbum: false,
        }

        this.handleBody = this.handleBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    renderAlbumOptions () {
        if (this.state.showAlbum) {
            return (
            <label htmlFor="album-name">Album Name
                <input className="album-name" type="text" />
            </label>
            )
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

    toggleAlbums () {
        const status = !this.state.showAlbum
        this.setState({showAlbum: status})
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[user_id]', this.state.user_id);
        formData.append('photo[album_id]', this.state.album_id);
        formData.append('photo[img_url]', this.state.awsURL);
        formData.append('photo[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('photo[photo]', this.state.photoFile);
        }
        this.props.postPhoto(formData).then((res) => {
            this.props.history.push('/feed');
        });
    }

    render () {
        return (
            <div className="post-photo-container">
                <form onSubmit={this.handleSubmit} className="post-photo-form">
                    <h6 className="post-photo-title">Upload a photo</h6>
                    <label htmlFor="post-photo-button">Select a Photo
                        <input className="post-photo-button" type="file" onChange={this.handleFile} />
                    </label>
                    <label htmlFor="photo-form-body">Post Body (optional)
                        <input className="post-form-body" type="text" onChange={this.handleBody} />
                    </label>
                    <label htmlFor="album" value="true" onClick={() => this.toggleAlbums()}>Create Album?</label>
                    {this.renderAlbumOptions()}
                    <button type="submit">Create Post</button>
                </form>
            </div>
        )
    }
}

export default PostPhoto;