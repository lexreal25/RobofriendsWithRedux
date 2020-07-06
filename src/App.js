import React, { Component } from 'react';
import './containers/App.css';
import { connect } from 'react-redux'
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll' 
import {setSearchField, requestRobots} from './actions'

//parameter state comes from index.js provider store state(rootRudcers)

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
}
}

class App extends Component{
  /*this fucntion are now being returned as part of the props from onRequestRobots 
  constructor(){
    super()
    this.state ={
      robots: [],
     /* searchField:'' 
    }
  }
*/
  componentDidMount(){
    this.props.onRequestRobots();
    /* Replaced with the reducer 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    .then(users => {this.setState({robots:users})})
    */
  }

/*
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }
*/

  render(){
   /* const{robots /*, searchField} = this.state */
    const {searchField, onSearchChange, robots,isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
     return(
      <div className='tc'>
        <h1 className='f1'>robofriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            {isPending ? <h1>Loading</h1> :<CardList robots={filteredRobots}/>}
        </Scroll>
      </div>
  );
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
