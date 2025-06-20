import { useForm, ValidationError } from '@formspree/react';
import './Contact.scss';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

export const Contact = () => {
    const [state, handleSubmit] = useForm("mdoqwkbv");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [modalDismissed, setModalDismissed] = useState<boolean>(false);
    useEffect(() => {
        if (state.succeeded) {
            setFormSubmitted(true);
        }
    }, [state.succeeded])
    return (
        <>
            {!formSubmitted &&
                <form onSubmit={handleSubmit}>
                    <div className="Contact" id="contact">
                        <div className="Contact--FormRow">
                            <div>
                                <p>Reach out below if you'd like to get in touch with Janae about art therapy, her books, and/or illustrations.</p>
                            </div>
                        </div>
                        <div className="Contact--FormRow">
                            <input
                                id="name"
                                type="name"
                                name="name"
                                placeholder="Name"
                                required
                                className='Contact--Input'
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div className="Contact--FormRow">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className='Contact--Input'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="Contact--FormRow">
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder='Message'
                                className='Contact--Input'
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div className="Contact--FormRow">
                            <button className="Contact--Button" type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            }
            <Modal
                isOpen={formSubmitted && !modalDismissed}
                onRequestClose={() => setModalDismissed(true)}
                contentLabel="Thanks for reaching out!"
                className="Contact--Modal"
            >
                <div className="Contact--ModalContent">
                    <h2>Thanks for reaching out!</h2>
                    <p>I'll get back to you soon :)</p>
                    <button className="Contact--Button Contact--ModalButton" onClick={() => setModalDismissed(true)}>Close</button>
                </div>
            </Modal>
        </>
    );
}