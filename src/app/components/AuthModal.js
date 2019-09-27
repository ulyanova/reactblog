import React, {Component} from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '25%'
    }
};

Modal.setAppElement('#app')

export default class AuthModal extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
                                    <input id="name" type="text" className="modal__input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">password:</label>
                                    <input id="password" type="text" className="modal__input" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <a href="#" className="modal-footer__a login" onClick={(event) => {
                                event.preventDefault();
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

/*<button className="articles__button active" onClick={this.openModal}>leave a comment</button>*/

/*
* <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
                    <button onClick={this.closeModal}>close</button>
                    <form>
                        <label htmlFor="name">name:</label>
                        <input id="name" type="text" className="modal__input" />
                        <label htmlFor="password">password:</label>
                        <input id="password" type="text" className="modal__input" />
                        <button>login</button>
                        <a href="#" className="articles__button active" onClick={(event) => {
                            event.preventDefault();

                        }}>Create an account</a>
                    </form>
* */



/*<div className="modal">
                <p className="modal__header">Join the discussion</p>
                <form className="modal-body">
                    <label htmlFor="name">name:</label>
                    <input id="name" type="text" className="modal__input" />
                    <label htmlFor="password">password:</label>
                    <input id="password" type="text" className="modal__input" />
                </form>
                <div className="modal__footer">
                    <a href="#" className="articles__button" onClick={(event) => {
                        event.preventDefault();

                    }}>login</a>
                    <a href="#" className="articles__button" onClick={(event) => {
                        event.preventDefault();

                    }}>register</a>
                </div>
            </div>*/