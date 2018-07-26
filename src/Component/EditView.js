import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state ={
            id:'',
            title:'',
            content:''
        }
    }

    
    componentWillMount() {
        if(this.props.dataEditForm){
            this.setState({
                id:this.props.dataEditForm.id,
                title:this.props.dataEditForm.title,
                content:this.props.dataEditForm.content,
            })
        }
    }
    
    


    // get data form -> set state
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    //state to items -> update firebase
    insertDataOnFire =(title,content)=>{
        //true id -> insert new data
        //else edit form
        if(this.state.id){
            let obj ={
                id:this.state.id,
                title:this.state.title,
                content:this.state.content
            };
            this.props.changeEditStatus();
            this.props.editData(obj);
            this.props.alertOn("Sửa thành công","success");
        }else{
            let item = {title,content};
            this.props.addData(item);
            this.props.changeEditStatus();
            this.props.alertOn("Thêm thành công","warning");
        }
    }



    render() {
        console.log(this.props.alertShow);
        return (
            <div className="col-4">
            {/* START EDIT */}
                <h3>Note</h3>
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="noteTitle">Tiêu đề note:</label>
                        <input defaultValue={this.props.dataEditForm.title} onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="title"  placeholder="Nhập tiêu đề note" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="noteTitle">Nội dung note</label>
                        <textarea defaultValue={this.props.dataEditForm.content} onChange={(event)=>this.isChange(event)} rows={5} type="text" className="form-control" name="content" placeholder="Nhập tiêu đề note"/>
                    </div>
                    <button onClick={()=>this.insertDataOnFire(this.state.title,this.state.content)} type="reset" className="btn btn-info btn-lg btn-block">Đồng Ý</button>
                </form>
            {/* END EDIT */}                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: (item) => {
            dispatch({type:"ADD_DATA",item})
        },
        changeEditStatus: ()=>{
            dispatch({type:"CHANGE_EDIT_STATUS"})
        },
        editData: (item)=>{
            dispatch({type:"EDIT_DATA_ON_SERVER",item})
        },
        alertOn: (alertContent,alertType)=>{
            dispatch({type:"ALERT_ON",alertContent,alertType})
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dataEditForm:state.dataEditForm     
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditView);