import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class ItemComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoading : true,
            department : '',
            post : '',
            salary : ''
        };
    }

    render(){
        if (this.state.isLoading){
            return(
                <div>
                    <ListItem button>
                        <Avatar alt="Profile Picture" src={'./static/images/avatar/' + this.state.department + '.png'}/>
                        <ListItemText primary={this.state.post} secondary={this.state.salary}/>
                    </ListItem>
                </div>
            ) 
        }
        else {
            return (            
            <div>
                <ListItem button>
                    <Avatar alt="Profile Picture" src={'./static/images/avatar/' + this.state.department + '.png'}/>
                    <ListItemText primary={this.state.post} secondary={this.state.salary}/>
                </ListItem>
            </div>)
        }
    }
}

export default ItemComponent;