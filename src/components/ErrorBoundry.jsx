import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError: false
        }
    }
    /*
    static getDerivedStateFromError(error){
        return {hasError: true}
    } 
    componentDidCatch(error, info){
        this.setState({hasError:true})
    }
*/
    render() {
       return !this.state.hasError ?
        <h1>oops.Thats not good</h1> 
        : (
            this.props.children
         )
    }
}
