import React from "react";

export const ContactInput = ({ placeholder, inputType }) => {
  return (
    <input
      type={inputType}
      id={inputType}
      className="bg-[#263C28] border text-gray-100 text-sm border-[#263C28] focus:border-[#263C28] w-[70%] rounded-lg block p-4  dark:placeholder-gray-400 dark:  "
      placeholder={placeholder}
      required
    />
  );
};

export const ContactTextArea = () => {
  return (
    <textarea
      type="text"
      id="message"
      cols={12}
      rows={4}
      className="bg-[#263C28] border text-gray-100 text-sm border-[#263C28] focus:border-[#263C28] w-[70%] rounded-lg block p-4  dark:placeholder-gray-400 dark:  "
      placeholder="Your Message"
      required
    />
  );
};
