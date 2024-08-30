import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm('service_4508sk8', 'template_gu8x5k6', form.current, '4zWUb-bKuavDky2n4')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 optigurney text-5xl text-center">Contact us</h2>
        <p className="mb-8 lg:mb-16 uncutsans-regular text-center sm:text-xl">
          Curious about joining our community? Want to support our events and initiatives? Got questions about our organization? Let us know!
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" className="michroma block mb-2 text-sm">
              EMAIL
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="shadow-sm bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="michroma block mb-2 text-sm">
              SUBJECT
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-black shadow-sm"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="michroma block mb-2 text-sm">
              MESSAGE
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="michroma py-3 px-5 text-sm text-center text-black rounded-lg bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
