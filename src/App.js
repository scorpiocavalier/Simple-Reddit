import React, { useState } from 'react'
import styled from 'styled-components'

export default () => {
  const [ input, setInput ] = useState( '' )

  const [ results, setResults ] = useState( [ { data: { title: 'Enter a reddit handle' } } ] )

  const handleChange = ( e ) => {
    setInput( e.target.value )
  }

  const handleSearch = async e => {
    e.preventDefault()
    const postsPerRequest = 25
    const uri = `https://www.reddit.com/r/${ input }.json?limit=${ postsPerRequest }`
    const res = await fetch( uri )
    const data = await res.json()
    setResults( data.data.children )
  }

  return (
    <MainWrapper>
      <h1>Reddit</h1>
      <form>
        <Input
          type="text"
          value={ input }
          onChange={ e => handleChange( e ) }
        />
        <SearchBtn onClick={ e => handleSearch( e ) }>Search</SearchBtn>
      </form>

      <Results>
        { results.map( ( result, index ) => (
          <Result key={ index }>{ result.data.title }</Result>
        ) ) }
      </Results>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  height: 100%;
`

const SearchBtn = styled.button`
  margin-left: 10px;
  background: #cee3f8;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background: #ff4500;
    color: white;
  }
`

const Results = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Result = styled.li`
  padding: 10px 0;
`