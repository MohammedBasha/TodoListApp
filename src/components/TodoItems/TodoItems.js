import React from 'react';
import './TodoItems.css';

const TodoItems = (props) => {
    const {items} = props,
        ListItems = items.map((item, index) => {
            return (
                <div key={item.id} className="todoitem">
                    <span className="item-index">{++index}</span>
                    <span className="item-name">{item.name}</span>
                    <span className="item-age">{item.age}</span>
                    <span className="item-action">&times;</span>
                </div>
            )
        });

    return (
        <div className="todoitems-wrapper">
            <div className="todoitem todoitem-header">
                <span className="item-index-header">No.</span>
                <span className="item-name-header">Name</span>
                <span className="item-age-header">Age</span>
                <span className="item-action-header">Action</span>
            </div>
            {ListItems}
        </div>
    );
}

export default TodoItems;