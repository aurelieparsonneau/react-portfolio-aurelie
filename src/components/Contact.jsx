import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-20"
    >
      <form
        method="POST"
        action="https://getform.io/f/49cc40fd-056d-4b85-a253-31abf7cdd7a9"
        className="flex flex-col sd:max-w-[300px] md:max-w-[600px] w-full pt-4"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Envoyez le formulaire ou envoyez moi un email :
            a.parsonneau@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-1"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-1 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-1"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center">
          Envoyer le formulaire
        </button>
      </form>
    </div>
  );
};

export default Contact;
