<div className="navbar-options">
                    <div className="drop-down">
                            <div className="navlink" onClick={() => this.setState({account: 'visible'})} >My Account</div>
                            <option className="navlink-hidden" value="My Photos" style={{visibility: this.state.account}}/>
                            <option className="navlink-hidden" value="My Albums" style={{visibility: this.state.account}}/>
                            <option className="navlink-hidden" value="My Comments" style={{visibility: this.state.account}}/>
                            <option className="navlink-hidden" value="My Tags" style={{visibility: this.state.account}}/>
                    </div>
                    <div className="drop-down">
                        
                            <option selected value="Photos" className="navlink" onClick={() => this.setState({photos: 'visible'})} >Photos</option>
                            <option className="navlink-hidden" value="Post New Photo" style={{photos: this.state.account}}/>
                            <option className="navlink-hidden" value="Edit Your Photos" style={{photos: this.state.account}}/>
                            <option className="navlink-hidden" value="Browse Other's Photos" style={{photos: this.state.account}}/>
                    </div>
                    <div className="drop-down">
                        
                            <option selected value="Albums" className="navlink" onClick={() => this.setState({albums: 'visible'})}>Albums</option>
                            <option className="navlink-hidden" value="Create New Album" style={{albums: this.state.account}}/>
                            <option className="navlink-hidden" value="Edit An Album" style={{albums: this.state.account}}/>
                            <option className="navlink-hidden" value="Browse Other's Albums" style={{albums: this.state.account}}/>
                    </div>
                    <div className="navlink" alt="logout" onClick={() => this.props.logout()}>↩</div>
                </div>