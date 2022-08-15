import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-r from-[#C1EFFF]  to-[#C1EFFF] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/90fb261c-d4f8-450e-a970-90936d9626f7"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pt-12 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Contact
          </p>
          <p className="py-4">Submit the form below</p>
        </div>
        <input className="p-2" type="text" placeholder="Name" name="name" />
        <input
          className="my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border-2 text-white bg-black rounded-lg mt-4 px-4 py-3 my-8 mx-auto flex items-center hover:bg-white hover:text-black ">
          Lets's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
