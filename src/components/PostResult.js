import React from 'react'
import styled from 'styled-components'

export const PostResult = (props) => {
  const { url, author, title, ups } = props.post.data
  console.log('props.post', props.post)

  return (
    <MainWrapper onClick={ () => window.open(url, '_blank') }>
      <UpsWrapper>{ ups }</UpsWrapper>
      <Post>
        <Author>Posted by { author }</Author>
        <Title>{ title }</Title>
      </Post>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  margin: 15px auto;
  width: 70vw;
  border: 1px solid #cccccc;
  border-radius: 10px;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
  }
`

const UpsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  width: 30px;
  background: #dadbdc;
  `

const Post = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: white;
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  `

const Author = styled.span`
  padding: 10px;
  font-size: 0.9rem;
  color: #555;
`

const Title = styled.span`
  padding: 0 10px 10px 10px;
  font-weight: bold;
  font-size: 1.2rem;
`