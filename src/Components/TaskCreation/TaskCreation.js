import React, {Component} from 'react';
import classes from './TaskCreation.module.css';

class TaskCreation extends Component {
    enterKeyFunction = (e) => {
        if (e.keyCode === 13) this.props.buttonFunc();
    }

    render() {
        return (
            <div className={classes.main}>
                <input className={classes.input}
                       type='input'
                       onChange={this.props.inputFunc}
                       value={this.props.inputValue}
                       onKeyDown={(e) => this.enterKeyFunction(e)}
                       placeholder='Enter your task'/>
                <button className={classes.button}
                        onClick={this.props.buttonFunc}>Create</button>
            </div>
        )
    }
}

export default TaskCreation;
