import React from "react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="border-b-[1px] border-b-gray-300">
      <div
        className="max-w-7xl w-full md:px-8 px-4 py-16 flex items-center mx-auto"
        id="contact"
      >
        <div className="container w-full flex items-center justify-between">
          <div className="w-1/2 flex flex-col space-y-5">
            <div>
              <p className="font-medium text-sm mb-3">CONTACT NOW</p>
              <h3 className="text-3xl  font-bold ">GET IN TOUCH NOW</h3>
            </div>
            <p className="my-4 text-base">
              We&apos;d be happy to help you in building a beautiful farm and
              also solve your queries.
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-400">PHONE</p>
              <a href="tel:+91 99009 55444" className="mt-2">
                +91 99009 55444
              </a>
              <a href="tel:+91 98450 54449" className="text-base">
                +91 98450 54449
              </a>
            </div>
            <div>
              <p className="text-sm mb-3 text-gray-400">EMAIL</p>
              <a href="mailto:info@avillionfarms.com" className="text-base">
                info@avillionfarms.com
              </a>
            </div>
            <div>
              <p className="text-sm mb-3 text-gray-400">OFFICE ADDRESS</p>
              <p className="text-base">
                6th Cross Road, 1371, 29th Main Rd, Munivenkatappa Layout, BTM
                2nd Stage,
                <br /> Bengaluru, Karnataka 560076
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
