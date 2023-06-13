import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



function BookList() {
  const navigate = useNavigate();
  const headData=["Id","Name","Year","Rating","Summary","Pages","Books Available","Action"];
  const [book, setBook]=useState([])
  const getBook = () => {
    fetch(`https://644e10f11b4567f4d57f2ab6.mockapi.io/newUser`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setBook(result));

      
  };
//   const getallBooks = async()=>{
//     const res =await axios.get("https://library-qc02.onrender.com/").catch((err)=>console.log(err));

//     console.log(res)
//     // if(res.status !== 200){
//     //  return console.log("No data")
//     // }
//     const resdata = await res.data;
//     return resdata

// };
  useEffect(() => getBook(), []);
  return (
    <div>
    <Box height={100} />
    {/* <div>Book List</div> */}
    <div className='container'>
    <h1 className='bookh'>Books List</h1>
    <div className='tab'>
    <table>
    <thead>
      {headData.map((element, index)=>{
        return <th key={index}>{element}</th> 
      })}
    </thead>
    <tbody>
    {book.map((element,index)=>{
           return ( 
        <tr key={index}
        id={element.id} >
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.year}</td>
        <td>{element.rating}</td>
        <td>{element.summary}</td>
        <td>{element.pages}</td>
        <td>{element.stock}</td>
        <td><Button
        onClick={() => {
          navigate(`/books/edit/${element.id}`);
        }}
        >
          <EditIcon/>
        </Button>
        <Button 
        onClick={() => {
          alert("Are you sure you want to delete");
          fetch(`https://644e10f11b4567f4d57f2ab6.mockapi.io/newUser/${element.id}`,{
            method: 'DELETE'
          }).then(()=>getBook());
        }}
        >
            <DeleteIcon color='error'/>
        </Button></td>
      </tr>
    
      );
    })}
    </tbody>
    </table>
    </div>
    </div>
    </div>
  )
}

export default BookList