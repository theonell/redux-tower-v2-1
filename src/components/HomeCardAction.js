import React, { Component } from 'react'
import styled from 'styled-components'

class HomeCardAction extends Component {
  
  render () {
    const { likes, like, goComment, id } = this.props
    return (
      <Wrap>
        <Button onClick={like} >
          {likes} 赞
        </Button>
        <Button onClick={() => goComment(id)} >
          2 评论
        </Button>
      </Wrap>
    )
  }
}

export default HomeCardAction

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.div`
  background-color: rgb(242, 244, 246);
  color: rgb(76, 87, 101);
  height: 36px;
  :hover {
    cursor: pointer;
  }
  line-height: 36px;
`
