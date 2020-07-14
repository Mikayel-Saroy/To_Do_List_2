import React, {Component} from 'react';
import classes from './Tasks.module.css';
import icon from './../edit_icon.png';


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            editValue: '',
        }
    }

    onChange = (e) => {
        this.setState({editValue: e.target.value});
    }
    handleEditing = () => {
        this.setState({editing: true});
    }
    handleEditingDone = (e) => {
        if (e.keyCode === 13) {
            this.submitChanges();
        }
    }
    submitChanges = () => {
        if (this.state.editValue !== '') {
            this.setState({editing: false});
            this.props.editingTheTask(this.props.item.id, this.state.editValue);
            this.setState({editValue: ''});
        }
    }


    render() {
        let viewStyle = {};
        let editStyle = {};

        if (this.state.editing === false) {
            editStyle.display = 'none';
        } else {
            viewStyle.display = 'none';
        }

        return (
            <div className={classes.main}>
                <p className={classes.task} style={viewStyle}>{this.props.item.taskName}</p>
                <div style={editStyle}>
                    <input value={this.state.editValue}
                           type='text'
                           onChange={this.onChange}
                           onKeyDown={this.handleEditingDone.bind(this)}
                           className={classes.editInput}
                    />
                    <button onClick={this.submitChanges} className={classes.editButton}>Update</button>
                </div>
                <img src={icon} alt='editIcon' className={classes.editIcon} onClick={this.handleEditing.bind(this)}/>
                <button className={classes.isDone}
                        onClick={() => this.props.isDoneButton(this.props.item.id)}>{this.props.item.isDone}</button>
            </div>
        )
    }
}

export default Tasks;
