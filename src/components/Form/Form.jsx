import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const initialValue = {
    bookname: "",
    bookauthor: "",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate

  const validateForm = () => {
    if (!data.booknamename) {
      setMessage("Bookname must exist");
    } else if (data.bookname.length < 3) {
      setMessage("Firstname must be at least 3 characters");
      setBtnDisabled(true);
    } else if (!data.bookauthor) {
        setMessage("FBookauthor must exist");
        setBtnDisabled(true);
    } else if (data.bookauthor.length < 3) {
          setMessage("Bookauthor must be at least 3 characters");
          setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
    setData(initialValue)
    navigate("/home")
  };

  useEffect(()=>{
    validateForm()
  },[data])

  return (
    <div><h3>New Book</h3>
      <form>
      <input type="text" name="bookname" value={data.bookname} placeholder="Book name" onChange={handleOnChange}></input>
      <input type="text" name="bookauthor" value={data.bookauthor} placeholder="Book author" onChange={handleOnChange}></input>
      <button onClick={handleSubmit} disabled={btnDisabled}>Enviar</button>
        <br />
        {message}
      </form>
    </div>
  )
}

export default Form