import React, {Component} from 'react';
import Modal from 'react-modal';
import {authoriseUser} from "../actions/usersActions";
import { connect } from 'react-redux';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '100%',
        maxWidth             : '300px'
    },
    overlay : {
        backgroundColor       : 'rgba(0,0,0,0.2)'
    }
};

Modal.setAppElement('#app')

@connect((store) => {
    return {
        users: store.users.users,
        auth_user: store.users.auth_user,
        authorization: store.users.authorization
    }
})

export default class AuthModal extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            username: '',
            userpassword: '',
            errormessage: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.login = this.login.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        this.subtitle.style.color = '#626262';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleChangeName(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({userpassword: event.target.value});
    }

    login() {
        //console.log(this.props.users, this.state.username, this.state.userpassword);
        let user = this.props.users.find(item => item.name == this.state.username);
        user ? (user.userpassword === this.state.userpassword ?
                this.props.dispatch(authoriseUser(user)) :
            this.setState({errormessage: 'Wrong password'})) :
            this.setState({errormessage: 'User with this name is&nbsp;not registered'});
    }

    render()
    {
        return (
            <>
                <a href="#" className="article__a active modal__a" onClick={(event) => {
                    event.preventDefault();
                    this.openModal();
                }}>leave a comment</a>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Join the discussion"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 ref={subtitle => this.subtitle = subtitle} className="modal-header__h2">Join the discussion</h2>
                            <a href="#" className="modal-header__a" onClick={(event) => {
                                event.preventDefault();
                                this.closeModal();
                            }}>x</a>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">name:</label>
                                    <input id="name" type="text" autoFocus placeholder="Jane Doe" className="modal__input"
                                           value={this.state.username} onChange={this.handleChangeName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">password:</label>
                                    <input id="password" type="text" placeholder="Jane1987" className="modal__input"
                                           value={this.state.userpassword} onChange={this.handleChangePassword} />
                                </div>
                            </form>
                            <p className="modal-errormessage">{this.state.errormessage}</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#" className="modal-footer__a login" onClick={(event) => {
                                event.preventDefault();
                                this.login()
                            }}>Login</a>
                            <a href="#" className="modal-footer__a create-account" onClick={(event) => {
                                event.preventDefault();
                            }}>Create an account</a>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}