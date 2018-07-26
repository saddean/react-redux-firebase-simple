import {noteData} from '../firebaseConnect';
const redux = require('redux');


//reducer note
const noteInitialState = {
    isEdit :false,
    dataEditForm:{},
    alertShow :false,
    alertContent:'',
    alertType:'info'
};
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.item);
            return state;
        case "CHANGE_EDIT_STATUS":
            if(!state.isEdit){
                state.dataEditForm={};
            }
            return {...state,isEdit:!state.isEdit};
        case "SAVE_DATA_EDIT_FORM":
            return {...state,dataEditForm:action.obj};
        case "EDIT_DATA_ON_SERVER":
            noteData.child(action.item.id).update({
                title:action.item.title,
                content:action.item.content,
            })
            return {...state,dataEditForm:{}}   
        case "ALERT_OFF":
            return {...state,alertShow:false}
        case "ALERT_ON":
            return {...state,alertShow:true,alertContent:action.alertContent,alertType:action.alertType}
        case "DELETE_NOTE":
            noteData.child(action.id).remove();
            return state;
        default:
            return state
    }
}

//create store
const store =  redux.createStore(allReducer);
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()));
})


export default store;   