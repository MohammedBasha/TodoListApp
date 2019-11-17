import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, name: 'Mohammed', age: '30'},
        {id: 2, name: 'Ahmed', age: '28'},
        {id: 3, name: 'Mahmoud', age: '26'}
      ]
    }
  }

  deleteItem = (id) => {
    // let items = this.state.items,
    //     i = items.findIndex(item => item.id === id);
    // items.splice(i, 1);
    // this.setState({
    //   items: items
    // });

    let items = this.state.items.filter(item => item.id !== id);
    this.setState({items});
  }

  addItem = item => {
    item.id = this.state.items.length + 1;
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
      <div className="todolist-app">
        Todo List Application
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}
 
export default App;
