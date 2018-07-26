import React, { Component } from 'react';
import {connect} from 'react-redux';

class Note extends Component {

    getDataEdit = ()=>{
        return {id:this.props.id,title:this.props.title,content:this.props.content};
    }

    deleteNote = ()=>{
        this.props.deleteNoteById(this.props.id);
        this.props.alertOn("Xóa thành công","danger");
    }



    render() {
        return (
            
            <div id="listNote" role="tablist" aria-multiselectable="true">
                <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#listNote" href={"#number"+this.props.id} aria-expanded="true" aria-controls="notecontent1">
                        {this.props.title}
                    </a>
                    <div className="btn-group float-right">
                        <button onClick={()=>{this.props.changeEditStatus();this.props.saveDataEditForm(this.getDataEdit())}} className="btn btn-outline-info"> <i className="fa fa-edit"></i> Edit</button>
                        <button onClick={()=>this.deleteNote()} className="btn btn-outline-danger"> <i className="fa fa-trash"></i> Delete</button>
                    </div>
                    </h5>
                </div>
                <div id={"number"+this.props.id} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.content}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({type:"CHANGE_EDIT_STATUS"})
      },
      saveDataEditForm:(obj) =>{
        dispatch({type:"SAVE_DATA_EDIT_FORM",obj})
      },
      deleteNoteById:(id) =>{
        dispatch({type:"DELETE_NOTE",id})
      },
      alertOn: (alertContent,alertType)=>{
        dispatch({type:"ALERT_ON",alertContent,alertType})
    },

    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Note)   