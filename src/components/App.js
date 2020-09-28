import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getPosts, setPosts, savePosts, loadPosts } from '../redux/actions/posts'
import { PostResult } from './PostResult'

export default () => {
  const [ input, setInput ] = useState('')
  const posts = useSelector(state => {
    console.log('state', state)
    return state.posts.posts
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const onSearch = async e => {
    e.preventDefault()
    const postsPerRequest = 25
    const uri = `https://www.reddit.com/r/${ input }.json?limit=${ postsPerRequest }`
    const res = await fetch(uri)
    const data = await res.json()
    dispatch(setPosts(data.data.children))
  }

  const onSave = e => {
    e.preventDefault()
    dispatch(savePosts(posts))
  }

  const onLoad = e => {
    e.preventDefault()
    dispatch(loadPosts())
  }

  useEffect(() => {
    dispatch(getPosts)
  }, [ dispatch ])

  return (
    <MainWrapper>
      <h1>Reddit</h1>
      <Form>
        <Input
          type="text"
          value={ input }
          onChange={ e => handleChange(e) }
        />
        <SearchBtn onClick={ e => onSearch(e) }>Search</SearchBtn>
        <SaveBtn onClick={ e => onSave(e) }>Save</SaveBtn>
        <LoadBtn onClick={ e => onLoad(e) }>Load</LoadBtn>
      </Form>

      <Posts>
        { posts.length > 0
          ? posts.map((post, index) => (
            <PostResult key={ index } post={ post } />
          ))
          : <p>No posts available.</p>
        }
      </Posts>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #dae0e6;
  min-height: 100vh;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 2rem;
`

const Input = styled.input`
  height: 100%;
  padding: 0 8px;
  font-size: 1.1rem;
`

const Btn = styled.button`
  height: 100%;
  margin-left: 15px;
  padding: 0 15px;
  background: #0079d3;
  color: white;
  border: none;
  border-radius: 5px;
`

const SearchBtn = styled(Btn)`
  &:hover {
    background: #008cf4;
  }
`

const SaveBtn = styled(Btn)`
  &:hover {
    background: #67bb6b;
  }
`

const LoadBtn = styled(Btn)`
  &:hover {
    background: #ff6a33;
  }
`

const Posts = styled.ul`
  list-style-type: none;
  padding: 0;
`