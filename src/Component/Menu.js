import React, { Component } from 'react';
import {connect} from 'react-redux';

class Menu extends Component {

    addFormNote=(event)=>{
        event.preventDefault();
        this.props.changeStatusForm();
    }
    render() {
        return (
            <div>
            {/* START MENU */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-5">
                <a className="navbar-brand text-light" href="true">Tường An</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#colslap1" aria-controls="colslap1" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="colslap1">
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                    <a className="nav-link" href="">Danh Sách <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a onClick={(event)=>this.addFormNote(event)} className="nav-link"  href="true">Thêm mới note</a>
                    </li>
                </ul>
                </div>
            </nav>
            {/* END MENU */}                      
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatusForm: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);     