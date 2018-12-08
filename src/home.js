import React,{Component} from 'react';
import Helmet,{ HelmetProvider  } from 'react-helmet-async'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            timer : true,
            isLoggedIn : false
        };
        this.ToggleTimer = this.ToggleTimer.bind(this);
    }
    tick(){
        this.setState({
            date : new Date()
        })
    }
    ToggleTimer(){
        if(this.state.timer){
            clearInterval(this.TimerID);
            this.setState({timer : false});
        }else{
            this.setState({timer : true});
            this.TimerID = setInterval( () =>
                this.tick(),1000 
            )
        }
        
    }
    componentDidMount(){
        this.TimerID = setInterval( () =>
            this.tick(),1000 
        )
    }
    componentWillUnmount(){
        clearInterval(this.TimerID);
    }
    render(props) {
        return(
            <div>
                <HelmetProvider>
                    <Helmet>
                        <title>Welcome to React Lab!</title>
                        <meta name="description" content="Find cool apps developed with react." />
                    </Helmet>
                </HelmetProvider>

                <h1>Hello {this.props.name}!</h1>
                <p className={this.state.timer ? 'true' : 'false'}>Time is {this.state.date.toLocaleTimeString()}</p>
                <button onClick={this.ToggleTimer}>{this.state.timer ? 'ON' : 'OFF'}</button>
            </div>
        );
    }
}

export default Home;