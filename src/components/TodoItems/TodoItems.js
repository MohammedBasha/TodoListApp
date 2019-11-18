import React from 'react';
import './TodoItems.css';

const TodoItems = (props) => {
    const {items, deleteItem} = props,
        ListItems = items.length ? (
            items.map((item, index) => {
                return (
                    <div key={item.id} className="todoitem">
                        <span className="item-index">{++index}</span>
                        <span className="item-name">{item.name}</span>
                        <span className="item-age">{item.age}</span>
                        <span className="item-action" onClick={_ => deleteItem(item.id)} title="Delete Item">
                            &times;
                        </span>
                    </div>
                )
            })
        ) : (
            <div className="todoitem">
                <span>There is no items to show.</span>
            </div>
        );

    return (
        <div className="todoitems-wrapper">
            <div className="todoitem todoitem-header">
                <h4 className="item-index-header">No.</h4>
                <h4 className="item-name-header">Name</h4>
                <h4 className="item-age-header">Age</h4>
                <h4 className="item-action-header">Action</h4>
            </div>
            {ListItems}
        </div>
    );
}

export default TodoItems;