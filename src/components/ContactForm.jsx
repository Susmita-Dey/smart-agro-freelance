import React from "react";
import { ContactTextArea, ContactInput } from "./ContactFormInput";
import Button from "./Button";

function ContactForm() {
  return (
    <div>
      <form className="flex flex-col space-y-5 mt-10">
        <ContactInput placeholder={"Your name"} inputType="text" />
        <ContactInput placeholder={"Phone Number"} inputType="tel" />
        <ContactInput placeholder={"Your Email"} inputType="email" />
        <ContactInput placeholder={"Farmhouse of interest"} inputType="text" />
        <ContactTextArea />
        <Button
          text={"Send Message"}
          className="p-3 w-40 font-medium text-lg"
        />
      </form>
    </div>
  );
}

export default ContactForm;
