import React, { Component }  from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: '',
    title: 'Chat'
}

const baseUrl= 'http://localhost:3001/chat'


export default class Chat extends Component{


    renderChatForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <input type="text" className="form-control"
                            name="menssage"
                            onChange={ e => this.updateField(e) }
                            />
                   </div>
               <div className="row">
               <button  className="btn btn-primary"
                    onClick={ e => this.send() }>
                    <i className="fa  fa-paper-plane fa-2x"></i>
                </button>

            </div>
        </div>
    </div>

        )   

    }
    render(){
        return(
            <Main {...headerProps}>
            { this.renderChatForm() }                
            </Main>
        )
    }

}
