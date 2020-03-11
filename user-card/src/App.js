import React from 'react';
import axios from "axios"
import Card from './components/Card'
import { render } from '@testing-library/react';
import Followers from './components/Followers';
import styled from 'styled-components'

const CardDiv = styled.div `
margin:0 5%;


`
const H2 = styled.div `

text-align:center;
font-size:2rem;
`

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
users: [],
followers:[]
    }
  }

componentDidMount(){
  axios.get('https://api.github.com/users/alan5123')
  
  .then(response => {
    this.setState({
users: response.data,

    })
    console.log(response)
  })
  axios.get('https://api.github.com/users/alan5123/followers')
  .then(response => {
    this.setState({
followers: response.data

    })
    console.log(response)
  })
  

}


render(){
  return (
<div>
    <H2> Github User Cards</H2>
    <CardDiv>
      
<Card users={this.state.users}/>
<p>This Users followers:</p>
<Followers followers={this.state.followers}/>
</CardDiv>
</div>
  )
 }
}

