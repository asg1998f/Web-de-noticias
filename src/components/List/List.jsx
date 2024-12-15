import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const API_KEY= "MrHLlvKFQzi9GGXbE8MKEIea8XZEo2LQ"

const List = () => {
  const [books,setBooks] = useState([])
  const getBooks =async()=>{
  try {
    const res = await axios.get( `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${API_KEY}`)
    console.log(res.data)
  } catch (error) {
    console.error(error)
  }
  }

  useEffect(()=>{
    getBooks()
  },[])

  return (
    <div>List
         {books.map((book) => {
        return (
          <div>
            {book.name}
          </div>
        );
      })}
    </div>
  )
}

export default List