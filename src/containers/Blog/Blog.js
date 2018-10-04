import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'
//import NewPost from './NewPost/NewPost'

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost') 
})

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*Switch permette di eseguire il primo Route che fa match
                e non tutti (infatti senza Switch /:id verrebbe eseguito in quanto
                interpreterebbe new-post come un id)*/}
                <Switch>
                    {this.state.auth ? 
                        <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;