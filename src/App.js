import React, {Component} from 'react';
import classes from './App.module.css';
import Header from './Components/Header/Header';
import TaskCreation from './Components/TaskCreation/TaskCreation';
import Tasks from './Components/Tasks/Tasks';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            idGenerator: 1,
            inputValue: '',
            tasks: [],
        }
    }

    rerender = (task) => task.map(item => <Tasks item={item}
                                                 isDoneButton={this.isDoneButton}
                                                 editingTheTask={this.editingTheTask}/>)

    onChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    createButton = () => {
        if (this.state.inputValue !== '') {
            this.setState(() => {
                return {
                    tasks: [{
                        taskName: this.state.inputValue,
                        isDone: 'New',
                        id: this.state.idGenerator,
                    }, ...this.state.tasks],
                    inputValue: '',
                    count: this.state.count + 1,
                    idGenerator: this.state.idGenerator + 1,
                }
            });
            console.log(this.state.inputValue);
        }
    }

    isDoneButton = (idNum) => {
        let tasksList = [];
        let editPart = {};
        for (let i = 0; i < this.state.tasks.length; i++) {
            if (this.state.tasks[i].id === idNum) {
                if (this.state.tasks[i].isDone === 'New') {
                    editPart = {taskName: this.state.tasks[i].taskName, isDone: 'Done', id: this.state.tasks[i].id};
                } else {
                    editPart = {taskName: this.state.tasks[i].taskName, isDone: 'New', id: this.state.tasks[i].id};
                }
                tasksList.push(editPart);
            } else {
                tasksList.push(this.state.tasks[i]);
            }
        }
        this.setState({tasks: tasksList});
    }

    editingTheTask = (id, editTask) => {
        let tasksList = [];
        let editPart = {};
        for (let i = 0; i < this.state.tasks.length; i++) {
            if (id === this.state.tasks[i].id) {
                editPart = {
                    taskName: editTask,
                    isDone: this.state.tasks[i].isDone,
                    id: this.state.tasks[i].id,
                };
            } else {
                editPart = {
                    taskName: this.state.tasks[i].taskName,
                    isDone: this.state.tasks[i].isDone,
                    id: this.state.tasks[i].id,
                };
            }
            tasksList.push(editPart);
        }
        this.setState({tasks: tasksList});
    }

    render() {
        return (
            <div className={classes.main}>
                <Header count={this.state.count}/>
                <TaskCreation inputFunc={this.onChange}
                              inputValue={this.state.inputValue}
                              buttonFunc={this.createButton}
                              enterKeyFunction={this.enterKeyFunction}/>
                {this.rerender(this.state.tasks)}
            </div>
        )
    }
}

export default App;
