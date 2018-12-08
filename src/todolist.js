import React,{Component} from 'react';
import Helmet,{ HelmetProvider  } from 'react-helmet-async'
import './app.css'
import './todo.css'

class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state = {tasks: ['Demo Task'], checkedAll : false};
        this.taskSubmit = this.taskSubmit.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    //Add a new task
    taskSubmit(e) {
        let inputValue = document.querySelector('.taskInput').value;
        if(this.state.tasks.indexOf(inputValue) === -1 && inputValue !== ''){
            this.setState({
                tasks : [...this.state.tasks,inputValue]
            });
            document.querySelector('.taskInput').value = '';
            console.log(this.state.tasks)
        }else{
            if(inputValue === ''){
                alert('Task name can not be blank!')
            }else{
                alert('Task already exist!')
            }
        }
        e.preventDefault()
    }

    //Delet task
    deleteTask(index){
        // this.state.tasks.splice(index,1);
    }

    //Check clicked task
    checkTask(){
        this.setState({

        })
    }
    //Check all tasks
    checkAll(){
        this.setState({
            checkedAll : !this.state.checkedAll
        })
    }
    
    render() {
        const taskItems = this.state.tasks.map((task, index)=> {
            return <li className={this.state.checkedAll ? 'checked' : 'unchecked'} key={index} onClick={this.checkTask.bind(this)} >
                <span>Delete</span>
                {task}
            </li>
        })
       
        return(
            <div className="taskMain">
                <HelmetProvider>
                    <Helmet>
                        <title>Todo List App | React Lab</title>
                        <meta name="description" content="Simple App to add delete lists" />
                    </Helmet>
                </HelmetProvider>
                <form onSubmit={this.taskSubmit} autoComplete='off'>
                    <input className="taskInput" type="text" name="tasktext"  placeholder="Enter your Task Here" />
                </form>
                <button className="dark-button"  onClick={this.taskSubmit}>Add</button>
                <ul className="tasks">
                {taskItems}
                </ul>
                <button className="dark-button" onClick={this.checkAll.bind(this)}>{this.state.checkedAll ? 'Uncheck All' : 'Check All'}</button>
            </div>
        );
    }
}
export default ToDoList;