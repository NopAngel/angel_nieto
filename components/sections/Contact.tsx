"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendMail = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_lpdsfvr", "template_zyfxxgl", form.current, {
        publicKey: "LkV-DDCXffRJrsosj",
      })
      .then(
        () => {
          toast.success("Mail Submit, Successfully!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        },
        (error: any) => {
          console.log(error);
          toast.error("Failed Submit", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      );
  };

  return (
    <section
      className="flex h-[90vh] items-center justify-around gap-5 xl:flex-row flex-col w-full"
      id="contact"
    >
      <section>
        <h1 className="text-4xl font-semibold">Contact Us.</h1>
        <div className="p-10 opacity-50">
          <p>angelnieto1402@gmail.com</p>
        </div>
      </section>
      <section>
        <form ref={form} onSubmit={sendMail}>
          <div className="xl:w-[500px] w-full bg-neutral-900 rounded-md">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent p-4 outline-none w-full"
              name="user_name"
            />
          </div>
          <div className="xl:w-[500px] w-full bg-neutral-900 rounded-md mt-2">
            <input
              type="email"
              placeholder="Mail"
              className="bg-transparent p-4 outline-none w-full"
              name="user_email"
            />
          </div>

          <div className="xl:w-[500px] w-full h-[300px] bg-neutral-900 rounded-md mt-2">
            <textarea
              placeholder="Content"
              name="message"
              className="bg-transparent resize-none p-4 outline-none size-full"
            />
          </div>
          <div className="m-2 bg-black/55 hover:bg-black transition-colors duration-100 rounded-lg *:w-full">
            <button value="Send" className="p-2">
              Submit Mail
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
