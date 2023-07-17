import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="pt-20 lg:pt-28 px-8 lg:px-40 w-full h-full text-white"
    >
      <div className="">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 red-border">
            Contact
          </p>
        </div>
        <p className="mt-4 pb-12">Reach out to me today and let's start a conversation!</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-2">
          <div className="col-span-1 lg:col-span-1">
            <div className="pr-8 w-full">
              <form
                action="https://getform.io/f/386d8711-045e-43d8-b0ce-53e9c139fdfc"
                method="POST"
                className=" flex flex-col w-full"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>

                <button className="text-white rounded-none border-red-400 border-2 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300">
                  Let's talk
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="pl-0 lg:pl-8 w-full pb-8">
              <iframe title="address" id="address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8674059580662!2d73.94237937465026!3d18.534893082561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d7027e02c3%3A0x706966e0336158b9!2sVertical%20Oriana!5e0!3m2!1sen!2sin!4v1689475205783!5m2!1sen!2sin" width="100%" height="380" style={{ border: "0", width: "100%" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
