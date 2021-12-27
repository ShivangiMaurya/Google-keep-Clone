import React from 'react';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';

const Note=(props)=>{
//    console.log(props);

   const deleteNote=()=>{
    //    ab hame pta kaise lagega ki konsa vala item delete krna h so we need an id...
       props.deleteItem(props.id);
   }
    return(
        <>
        <div className="note">
           {/* <h1>Title</h1> */}
           <h1>{props.title}</h1> 
           {/* <br/> */}
           {/* <p>this is the content</p> */}
           <p>{props.content}</p>

                <button onClick={deleteNote}id="btn" >Delete Notes</button>

        </div>
       
        </>
    );
};
export default Note;