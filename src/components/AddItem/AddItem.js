import React, {Component} from 'react';
import './AddItem.css';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div className="additem-wrapper">
                Adding Item Preview
            </div>
        );
    }
}

export default AddItem;