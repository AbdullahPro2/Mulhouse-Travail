import React from 'react';
import email from '../assets/contact/email.png';
import phone from '../assets/contact/contactUs.png';
import location from '../assets/contact/location.png';
import ContactingItem from '../components/contact/ContactingItem';
import FormRow from '../features/authentication/FormRow';
import PageHeading from '../layout/PageHeading';
function Contact() {
  return (
    <div>
      <PageHeading text="Comment pouvons nous aider ?" />

      <div className="mt-5 flex flex-col justify-between gap-6  px-2 xs:px-4 sm:px-6 md:flex-row md:px-10 lg:px-14">
        <div className="md:max-w-1/2 md:space-y-10">
          <ContactingItem
            img={email}
            text="Notre service est toujours à votre dispositiony"
          >
            <span className="cursor-pointer font-semibold text-[#1b64ac]">
              mulhouse@travail.fr
            </span>
          </ContactingItem>
          <ContactingItem img={phone} text="Vous pouvez nous appeler">
            <span className="cursor-pointer font-semibold text-[#1b64ac]">
              lundi - Jeudi 8:00h - 17:00h <br /> Vendredi 8:00h - 12:00 h
              <br /> Samedi Dimanche - Fermé
            </span>
          </ContactingItem>
          <ContactingItem
            img={location}
            text="Nous serions ravis de vous rencontrer"
          >
            <span className="cursor-pointer font-semibold text-[#1b64ac]">
              7 Rue de meurette 67200, Mulhouse
            </span>
          </ContactingItem>
        </div>
        <div className=" md:w-1/2 lg:w-[40%]">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="a12de647-b2a1-4d15-8876-caf558070861"
            ></input>
            <FormRow label="prénom">
              <input
                name="prénom"
                type="text"
                id="name"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                required
              />
            </FormRow>
            <FormRow label="email">
              <input
                name="Email"
                type="email"
                id="email"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                required
              />
            </FormRow>

            <FormRow label="message">
              <textarea
                name="Message"
                id="message"
                cols="10"
                rows="8"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                required
              />
            </FormRow>
            {/* Change it */}
            <input
              type="hidden"
              name="redirect"
              value="http://localhost:5173/merci-pour-contactez"
            ></input>
            <button
              type="submit"
              className="send-message mt-4 w-full cursor-pointer rounded border-0 bg-[#1b64ac] px-4 py-2 text-center font-normal leading-loose text-teal-50 md:text-lg lg:mt-16"
            >
              envoyer message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
