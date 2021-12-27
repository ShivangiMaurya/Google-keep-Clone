// import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';
import Header from"./Header";
import Footer from"./Footer";
import CreateNote from"./CreateNote";
import Note from"./Note";


const App=() =>{
  // array m data add krna h jo bhi user likh ra h
  const[addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    // alert("i am clicked");
    // ab hme arry m store krna h map method k through 1 by 1 usko render karana h
    setAddItem((prevData)=>{
      return[...prevData,note];
    });
    console.log(note);
    // console.log("addnote"+addNote);

  };
  return (
        <>
          <Header/>
    {/* add note k function ko yha define krna h bcz Note yha pr hai nd ek arry banakr hm note component
     ko 1 by 1 dikha skte h */}
          <CreateNote passNote={addNote}/>
          {/* <Note/> */}
          {/* addItem.map(function (currval,index,arr),thisvalue */}
          {
          addItem.map((val,index)=>{
            return( <Note 
            
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            
            />
            );
           } )
           }
            






          {/* <Footer/> */}
          {/* <Note/> */}


          </>
  );
}
export default App;
