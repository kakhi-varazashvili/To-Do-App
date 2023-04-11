import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user';

class App extends Component {

  state = {
    todo: [{name: 'User 1'}, {name: 'User 2'}]

  }

  onChange = (event, index) => {
    const todo = [...this.state.todo];
    todo[index] = {
      name: event.target.value
    }
    this.setState({todo})
    // this.state.users{index} = {
    //   name: event.target.value
    // }
    // this.state.name = event.target.value
    this.setState({
      name: event.target.value

    })

  }



addUser = () => {
  const todo = [...this.state.todo];
  todo.push({name: 'Type your name'})
  this.setState({todo})
}
removeUser = (index) => {
  const todo = [...this.state.todo];
  todo.splice(index, 1);
  this.setState({todo});
}

  render() {
    return (
      <div className='users'>
        <div className='main'>
      <div className='todo'>To do List</div>
      <div className='done'>Done List</div>
      </div>

        {this.state.todo.map((user, index) =>  {
        
        return <User 
        key={index} 
        name={user.name} 
        onChange={(event) => this.onChange(event, index )}
        removeUser={() => this.removeUser(index)}
        /> 
        })}
        <button onClick={this.addUser}>Add User</button>
      </div>
        
    )
    
  }
}

export default App;
