import React, { Component } from 'react';
import {noteData} from '../firebaseConnect';
import Note from './Note';



class ListView extends Component {
     
    constructor(props, context) {
        super(props, context);
        this.state={
            firebaseData:[]
        }
    }
    
    
    componentWillMount() {
        noteData.on('value',(notes)=>{
            let arrData =[];
            notes.forEach((note)=>{
                let obj = {id:note.key,title:note.val().title,content:note.val().content};
                arrData.push(obj);
            })
            this.setState({firebaseData:arrData});
        })

    }
    
    
    showData = ()=>{
        if(this.state.firebaseData){
            return this.state.firebaseData.map((note)=>{
                return <Note id={note.id} title={note.title} content={note.content}/>
            })
        }
    }

    render() {
        return (
            <div className="col">
            {/* COMPONENT LIST NODE */}
                {
                    this.showData()
                }
            {/* END COMPONENT LIST NODE */}                
            </div>
        );
    }
}


export default ListView