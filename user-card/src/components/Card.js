import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Div = styled.div `
width:20%;

`

const Img = styled.img `
width:20vh;

`

class Card extends React.Component{
constructor(){
    super();
    this.state = {
users: []
    }


}

componentDidMount(){
    axios.get(`https://api.github.com/users/alan5123`)
    
    .then(response => {
      this.setState({
  users: response.data,
  
      })
      console.log(response)
    })
    
    
    
  
  }

render(){
    return(
    <Div>
<p>Username: {this.props.users.login}</p>

<a href = '{this.props.users.html_url}'>Github</a>
<div>
<Img src = {this.props.users.avatar_url} alt = 'profile pic'/>
</div>

    </Div>
    )
}

}

export default Card