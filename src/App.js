import React, { Component } from 'react';
import Menu from './Component/Menu';
import ListView from './Component/ListView';
import EditView from './Component/EditView';
import {connect} from 'react-redux';
import AlertInfo from './Component/AlertInfo';

class App extends Component {
  
  showEditForm = ()=>{
    if(this.props.isEdit){
      return <EditView/>
    }
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <AlertInfo/>
        <div className="container"> 
          <div className="row">
            <AlertInfo/>
              <ListView/>
              {
                this.showEditForm()
              }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch("CHANGE_EDIT_STATUS")
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
