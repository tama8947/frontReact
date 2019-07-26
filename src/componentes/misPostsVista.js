import React, {Component} from 'react';

class MisPostsVista extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>Posts de JsONPLACEHOLDER</h1>
                {
                    this.props.posts.map((post) => (
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>        
                    ))
                }                
            </div>
        )
    };
}

export default MisPostsVista;