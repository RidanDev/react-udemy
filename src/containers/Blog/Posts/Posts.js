import React, { Component } from 'react'
import axios from '../../../axios'
import { Link } from 'react-router-dom'

import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        //.then() è un metodo di ES6 che permette di eseguire del codice
        //solamente quando la richiesta è stata effettuata
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts })
                //console.log(response)
            })
            .catch(error => {
                console.log(error)
                //this.setState({ error: true })
            })
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id })
    }

    render() {
        let posts = <h1 style={{ textAlign: 'center', color: 'red' }}>
            <strong>Something went wrong!</strong></h1>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link
                        to={'/' + post.id}
                        key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>)
            })

            return (
                <section className="Posts">
                    {posts}
                </section>
            )
        }

    }
}

export default Posts