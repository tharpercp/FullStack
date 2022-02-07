

class PostAlbum extends React.Component {
    constructor(props){
        super(props)
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
                        
                    </div>
                </form>

            </div>

        )
    }
}

export default PostAlbum;