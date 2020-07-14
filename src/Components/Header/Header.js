import React, {Component} from 'react';
import classes from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={classes.head}>
                <b className={classes.headLine}>To Do List</b>
                <p className={classes.count}>Total {this.props.count} ToDo</p>
            </div>
        )
    }
}

export default Header;
