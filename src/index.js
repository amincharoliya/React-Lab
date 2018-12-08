import React,{Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import Home from './home';
import ToDoList from './todolist';
import Notfound from './notfound.js'
import Nav from './navigation.js'
import Users from './users'
import User from './user'

class App extends Component { 
    render(){
        const users = [
            {id: 1, name: 'Mark', description: 'Mark is UI Designer with over 10 years of experience in the industry.Lorem Impsum simple dummy text.', url:'https://picsum.photos/100/101'},
            {id: 2, name: 'Jeff', description: 'Jeff is UI Designer with over 10 years of experience in the industry.Lorem Impsum simple dummy text.', url:'https://picsum.photos/101/100'},
            {id: 3, name: 'Eric', description: 'Eric is UI Designer with over 10 years of experience in the industry.Lorem Impsum simple dummy text.', url:'https://picsum.photos/99/100'},
            {id: 4, name: 'Philips',description: 'Philip is UI Designer with over 10 years of experience in the industry.Lorem Impsum simple dummy text.', url:'https://picsum.photos/100/99'}
        ];
        return(
            <Router>
                <div>
                    <Nav />
                    <div className="main-area">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/todo" component={ToDoList} />
                            <Route path="/users" component={() => <Users userData={users} />}/>
                            <Route path="/user/:id" component={() => <User userData={users} />} />
                            <Route component={Notfound} />
                        </Switch>
                    </div>
                </div>   
            </Router>
        )
    }
}

serviceWorker.register();

ReactDOM.render(<App />, document.querySelector('#root'));