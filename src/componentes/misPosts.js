import React, {Component} from 'react';
import MisPostsVista from './misPostsVista';

class MisPosts extends Component{
    constructor(props) {
        super(props);
    }
    //Creamos objeto donde se almacenan los valores consumidos de la API
    state = {
       posts: []     
    }
    //Funcion encargada de consultar los posts
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) =>{
            this.setState({ posts: data }); 
        })
        .catch(console.log)
    }
    render () {
        return(
            <MisPostsVista posts={this.state.posts} />
        )
    }

}

export default MisPosts;