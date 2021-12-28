import React from 'react';

class PostPhoto extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: this.props.user_id,
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

    render () {
        return (
            <div className="post-photo-container">
                <form onSubmit={this.handleSubmit}>
                    <label for="post-photo-button">Post a Photo
                        <input className="post-photo-button" type="file" onChange={this.handleFile} />
                    </label>
                    <label for="photo-form-body">Post Body
                        <input className="post-form-body" type="text" onChange={this.handleFile} />
                    </label>
                </form>
            </div>
        )
    }
}