import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createNewVideoPost } from '../../../../services/apiService';
import { button } from '../../../../shared/constants';

class NewVideoPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoURL: "",
            isVideoURLInputValid: false,
            isYoutube: false,
            testState: false
        }
    }

    videoURLInputHandler = (event) => {
        if (event.target.value.length !== 0 && event.target.value.includes("youtube.com/watch?v=")) {
            this.setState({ isVideoURLInputValid: true })
        } else {
            this.setState({ isVideoURLInputValid: false })
        }
        this.setState({ videoURL: event.target.value });

        // this.setState({ isVideoURLInputValid: true })
        // if (event.target.value.length === 0) {
        //     this.setState({ isVideoURLInputValid: false })
        // }
        // if (this.state.videoURL.includes("www.youtube.com")) {
        //     this.setState({ isYoutube: true });

        // }

    }

    createNewPost = () => {        
        if (this.state.isVideoURLInputValid) {
            createNewVideoPost(this.state.videoURL)
        }
    
    }
    render() {
        return (
            <div id="video" className="modal">
                <div className="modal-content">
                    <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat right">X</Link>
                    <h4>New Video</h4>
                    <div class="input-field col s12">
                        <input onChange={this.videoURLInputHandler} value={this.state.videoURL} type="text" class={this.state.isVideoURLInputValid ? "valid" : "invalid"} />
                        <span class="helper-text" data-error="Write a valid YouTube link" data-success="This seems to be a valid YouTube link!!">I will tell you if you are being stupid</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <Link to="/" onClick={this.createNewPost} className={this.state.isVideoURLInputValid ? button.active : button.disabled}>POST</Link>
                </div>
            </div>
        );
    }
}

export { NewVideoPost };