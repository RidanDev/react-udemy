import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        //.then() è un metodo di ES6 che permette di eseguire del codice
        //solamente quando la richiesta è stata effettuata
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
                //console.log(response)
            })
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;