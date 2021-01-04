import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER
} from '../types';


const ContactState = props => {

    const initialState = {
        contacts: [{
            id: 1,
            name: "ram",
            email: "rss@mgso.com",
            phone: "33-33-3",
            type: "profesonal"
        },
        {
            id: 2,
            name: "ram",
            email: "rss@mgso.com",
            phone: "33-33-3",
            type: "professional"
        },
        {
            id: 3,
            name: "laxmi",
            email: "sads.com",
            phone: "8855*",
            type: "professional"
        }],
        current: null,
        filtered:null
    };


    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact

    const addContact = contact => {
        contact.id = 25
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    //DeleteContact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    //Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    
    //Clear Current Contact

    const clearCurrent = contact => {
        dispatch({ type: CLEAR_CURRENT });
    }


    //Update Contact

    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }

    //Filter Contact

    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    }

    //Clear Filter
    const clearFilter = contact => {
        dispatch({ type: CLEAR_FILTER });
    }

    return (  
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered:state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}>
            {props.children}
            
        </ContactContext.Provider>
    )

}

export default ContactState;


