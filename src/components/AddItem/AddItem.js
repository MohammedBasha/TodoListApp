import React, {Component} from 'react';
import './AddItem.css';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name: '',
            age: ''
        });
    }

    render() {
        return (
            <div className="additem-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter your name" id="name" onChange={this.handleChange} value={this.state.name} />
                    <input type="text" placeholder="Enter your age" id="age" onChange={this.handleChange} value={this.state.age} />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        );
    }
}

export default AddItem;