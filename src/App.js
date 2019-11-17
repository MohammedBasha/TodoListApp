import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, name: 'Mohammed', age: 30},
        {id: 2, name: 'Ahmed', age: 28},
        {id: 3, name: 'Mahmoud', age: 26}
      ]
    }
  }

  render() {
    return (
      <div className="todolist-app">
        Todo List Application
        <TodoItems items={this.state.items} />
        <AddItem />
      </div>
    );
  }
}
 
export default App;
