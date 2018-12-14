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
        this.deleteAll = this.deleteAll.bind(this)
    }

    //Add a new task
    taskSubmit(e) {
        let inputValue = document.querySelector('.taskInput').value;
        if(this.state.tasks.indexOf(inputValue) === -1 && inputValue !== ''){
            this.setState({
                tasks : [...this.state.tasks,inputValue]
            });
            document.querySelector('.taskInput').value = '';
            // console.log(this.state.tasks)
            this.checkTask = this.checkTask.bind(this)
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
        const taskName = index.target.parentNode.innerText.replace('Delete','');
        console.log(taskName);
        const newTasks = this.state.tasks.filter((i)=> {return i !== taskName});
        console.log(newTasks);
        this.setState({
            tasks : newTasks
        });
    }

    //Check clicked task
    checkTask(i){
        i.target.classList.toggle('checked');
    }
    //To delete All the tasks
    deleteAll(){
        this.setState({
            tasks : ''
        })
    }
    
    render() {
        if(this.state.tasks){
            var taskItems = this.state.tasks.map((task, index)=> {
                let mtask = <li className={this.state.checkedAll ? 'checked' : 'unchecked'} key={index} onClick={this.checkTask} >
                    <span onClick={this.deleteTask}>Delete</span>
                    {task}
                </li>;
                return mtask;
            });
        }
       
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
                <button className="dark-button" onClick={this.deleteAll}>Delete All</button>
            </div>
        );
    }
}
export default ToDoList;