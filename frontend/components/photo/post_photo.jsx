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
        if (this.state.showAlbum) {
            return (
                <div className="post-photo-container">
                    <form onSubmit={this.handleSubmit} className="post-photo-form">
                    <h1 className="close-modal"  onClick={() => this.props.onClose()}>X</h1>
                    <h1 className="post-photo-title">Create a post by uploading a photo. Feel free to add an optional caption! It is also highly encouraged to create albums to help group your photos into categories!</h1>
                        <label htmlFor="upload-photo-text">1. Select a Photo</label>
                        <br/>
                            <input className="upload-photo-button" type="file" onChange={this.handleFile} />
                        <br/>
                        <label htmlFor="upload-photo-caption-text">2. Photo Caption (optional)</label>
                        <br></br>
                        <input className="upload-photo-caption-button" type="text" onChange={this.handleBody} />
                        
                        <br />
                        <div className="post-photo-buttons-container">
                            <button className="create-album-button" onClick={() => this.toggleAlbums()}>Back</button>
                            <button className="post-photo-button" type="submit">Create Post &amp; Album</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="post-photo-container">
                    <form onSubmit={this.handleSubmit} className="post-photo-form">
                    <h1 className="close-modal"  onClick={() => this.props.onClose()}>x</h1>
                    <h1 className="post-photo-title">Create a post by uploading a photo. Feel free to add an optional caption! It is also highly encouraged to create albums to help group your photos into categories!</h1>
                        <label htmlFor="upload-photo-text">1. Select a Photo</label>
                        <br/>
                            <input className="upload-photo-button" type="file" onChange={this.handleFile} />
                        <br/>
                        <label htmlFor="upload-photo-caption-text">2. Photo Caption (optional)</label>
                        <br></br>
                        <input className="upload-photo-caption-button" type="text" onChange={this.handleBody} />
                        
                        <br />
                        <div className="post-photo-buttons-container">
                            <button className="create-album-button" onClick={() => this.toggleAlbums()}>Album Options?</button>
                            <button className="post-photo-button" type="submit">Create Post</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default PostPhoto;