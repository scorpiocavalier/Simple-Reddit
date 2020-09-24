import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getPosts, setPosts } from '../redux/actions/posts'
import { PostResult } from './PostResult'

export default () => {
  const [ input, setInput ] = useState( '' )
  const posts = useSelector( state => state.posts.posts )
  const dispatch = useDispatch()

  const handleChange = ( e ) => {
    console.count( 'count' )
    setInput( e.target.value )
  }

  const handleSearch = async e => {
    e.preventDefault()
    const postsPerRequest = 25
    const uri = `https://www.reddit.com/r/${ input }.json?limit=${ postsPerRequest }`
    const res = await fetch( uri )
    const data = await res.json()
    dispatch( setPosts( data.data.children ) )
  }

  useEffect( () => {
    dispatch( getPosts )
  }, [ dispatch ] )

  return (
    <MainWrapper>
      <h1>Reddit</h1>
      <Form>
        <Input
          type="text"
          value={ input }
          onChange={ e => handleChange( e ) }
        />
        <SearchBtn onClick={ e => handleSearch( e ) }>Search</SearchBtn>
      </Form>

      <Posts>
        { posts.length > 0
          ? posts.map( ( post, index ) => (
            <PostResult key={ index } post={ post } />
          ) )
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

const SearchBtn = styled.button`
  height: 100%;
  margin-left: 15px;
  padding: 0 15px;
  background: #0079d3;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #7fbce9;
  }
`

const Posts = styled.ul`
  list-style-type: none;
  padding: 0;
`