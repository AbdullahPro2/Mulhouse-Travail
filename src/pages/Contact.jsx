import React from 'react';
import email from '../assets/contact/email.png';
import phone from '../assets/contact/contactUs.png';
import location from '../assets/contact/location.png';
import ContactingItem from '../components/contact/ContactingItem';
import FormRow from '../features/authentication/FormRow';
function Contact() {
  return (
    <div>
      <h1 className="mt-8 text-center font-black uppercase text-[#004D40]">
        How Can We Help?
      </h1>
      <div className="mt-5 flex flex-col justify-between gap-6  px-2 xs:px-4 sm:px-6 md:flex-row md:px-10 lg:px-14">
        <div className="md:max-w-1/2 md:space-y-10">
          <ContactingItem
            img={email}
            text="Our Service is always in your disponibility"
          >
            <span className="cursor-pointer font-semibold text-teal-800">
              mulhouse@travail.fr
            </span>
          </ContactingItem>
          <ContactingItem img={phone} text="You can call us">
            <span className="cursor-pointer font-semibold text-teal-800">
              lundi - jeudi 8:00h - 17:00h <br /> vendredi 8:00h - 12:00 h
            </span>
          </ContactingItem>
          <ContactingItem img={location} text=" We would love to meet you.">
            <span className="cursor-pointer font-semibold text-teal-800">
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
              className="send-message mt-4 w-full cursor-pointer rounded border-0 bg-[#004D40] px-4 py-2 text-center font-normal leading-loose text-teal-50 md:text-lg lg:mt-16"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
