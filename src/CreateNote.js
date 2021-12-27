import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    // console.log("prop"+props);
    const [note, setNote] = useState(
        //    we pass 2 variable objs
        // usestate ke pass jo bhi data h vo setnote 
        {
            title: "",
            content: "",
        }
        // console.log(props);
    );
    const InputEvent=( event)=>{
        // target is method not obj
        event. preventDefault() ;
        const{name,value}=event.target;
        // console.log(value);
        // use state m jo phele se hi data h use hm access kr skte h 
        setNote((prevData)=>{
            return{
                ...prevData,
                // hamre jo bhi name h uski value content ho jaaye
                [name]:value,
                // ab user n jo bhi likha h vo ek array m store ho jaaye and bo hame app component k ander karna h
            };
        }
        );
        console.log( note);
    };

    const addEvent=(event)=>{
        event. preventDefault() ;
        props.passNote(note);
        // ab pta kaise chalega ki kis note ko add krna h toh hamare-note-m saare data h usko hm karege pss
         setNote(
            //    we pass 2 variable objs
            // usestate ke pass jo bhi data h vo setnote 
            {
                title: "",
                content: "",
            }
            // console.log(props);
        );
    }
    return (
        <>
            <div className="main_note">
                <form>
                    <input  type="text"id="input" 
                     type="text"
                    name="title"
                    value={note.title} 
                    onChange={InputEvent} 
                    //  type="text"
                      placeholder="Title"
                      autoComplete='off'
                       />
                    <textarea id="inputt"
                     name="content"
                     value={note.content} 
                      onChange={InputEvent}
                       rows="8" 
                       column="7" 
                       placeholder="Write a note..."
                       autoComplete='off'
                       >

                       </textarea>
                    <button onClick={addEvent}id="btn" >Add Notes</button>
                    {/* <Button>  */}
                    {/* <AddIcon/> */}

                    {/* </Button> */}


                </form>
            </div>

        </>
    );
};
export default CreateNote;