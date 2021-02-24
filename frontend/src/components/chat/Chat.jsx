import './Chat.css'
import React, { Component }  from 'react'
import UserPicture from '../../assets/imgs/users/test/test.png'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: '',
    title: 'Chat'
}

const baseUrl= 'http://localhost:3001/chat'


export default class Chat extends Component{
   
    renderMenssage(){
        return(
            <div className="row col-12 col-md-12" id="chat">
                <div className="col-6 col-md-6 row">
                    <div className="col-2 col-md-2">
                        <img src={UserPicture} alt="fotos" />
                        user x
                    </div>
                    <div className="col-10 col-md-10 container">
                        Hello, world!!!!
                    </div>
                </div>
                { this.renderContacts() }
            </div>
        )
    }

    renderContacts(){
    return(
        <div className="row">
            <div className="col-6 col-md-6">
                  <img src={UserPicture} alt="fotos" />
                    friend X
            </div>
        </div>
        )
    }

    renderChatForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-6 col-md-6">
                        <textarea type="textarea" className="form-control"
                            name="menssage"
                            rows="2"
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
            { this.renderMenssage() }
            { this.renderChatForm() }                
            </Main>
        )
    }

}
