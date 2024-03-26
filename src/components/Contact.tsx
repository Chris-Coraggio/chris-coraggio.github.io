import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export const Contact = () => {
    const [state, handleSubmit] = useForm("mdoqwkbv");
    if (state.succeeded) {
        return <p>Thanks for reaching out! I'll email you back soon</p>;
    }
    return (
        <div className="Contact">
            <form onSubmit={handleSubmit}>
                <div className="Contact--FormRow">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="Contact--FormRow">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <div className="Contact--FormRow">
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}