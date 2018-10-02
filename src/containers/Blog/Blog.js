import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    componentDidMount() {
        //.then() è un metodo di ES6 che permette di eseguire del codice
        //solamente quando la richiesta è stata effettuata
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
            })
    }
    
    render() {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
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