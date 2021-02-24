import React, { Component } from 'react'
import UserPicture from '../../assets/imgs/users/test/test.png'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {


}

const baseUrl = 'http://localhost:3001/profile'

export default class Profile extends Component {


    renderInsertProfile() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-6 col-md-6">
                        <img src={UserPicture} alt="fotos" />

                    </div>
                    <div className="col-6 col-md-6">
                         <input type="text" className="form-control" 
                            name="name"
                            value="Nome"
                            placeholder="NOME:"    
                        id=""/>
                        <input type="text" className="form-control" 
                            name="age"
                            value="Idade"
                            placeholder="Idade:"    
                        id=""/>
                         <input type="text" className="form-control" 
                            name="relationship"
                            value="Relationship"
                            placeholder="Status de relacionamento:"    
                        id=""/>
                         <textarea type="text" className="form-control" 
                            name="About"
                            value="Sobre mim"
                            placeholder="Sobre Mim:"    
                        id=""/>

                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <Main {...headerProps}>
                { this.renderInsertProfile()}
            </Main>

        )

    }

}  