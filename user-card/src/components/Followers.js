import React, { useState, useEffect}  from 'react'
import Card from './Card'
import styled from 'styled-components'


const CardDiv = styled.div `
display:flex;
flex-wrap:wrap;


`

class followers extends React.Component {
constructor() {
    super();
    this.state = {
followers:[]
    }

}

render(){

    return(
        <CardDiv >
            {this.props.followers.map((item, index) => (
              
                  <Card users = {item} 
/>

                

    ))}
        </CardDiv>
    )
}


}
export default followers






































// const Followers = props => {

//  const [state, setState] = useState([])

//  useEffect(() => {
// setState(props.followers)

//  },[state])

// console.log(state)
 

    
    
//     return (
//          <div>
//              {
//              props.Followers
             
             
             
             
             
//         }
//          </div>
//     )
    
//     }
//     export default Followers