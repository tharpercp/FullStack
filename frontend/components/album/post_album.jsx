

class PostAlbum extends React.Component {
    constructor(props){
        super(props)
    }


    renderPhotoOptions () {
        const photos = this.props.photos

        return (
            photos.map(photo =>
                    <div className="photo-option">
                        <a href={photo.link}></a>
                    </div>
                )
            )
    }

    render () {
        return (
            <div className="create-album">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Album Name
                        <input type="text"></input>
                    </label>
                    <label htmlFor="body">Description
                        <input type="text"></input>
                    </label>
                    <div className="scroll-menu-photo">
                        {this.renderPhotoOptions()}
                    </div>
                </form>

            </div>

        )
    }
}

export default PostAlbum;