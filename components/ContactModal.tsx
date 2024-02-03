import submitContactForm from "@/actions/submitContactForm";
import { emailRedirect } from "@/utils";
import Head from "next/head";
import { Dispatch, SetStateAction } from "react";
import Draggable from "react-draggable";

type ContactModalProps = {
  toggleModal: Dispatch<SetStateAction<boolean>>;
};

export default function ContactModal({ toggleModal }: ContactModalProps) {
  return (
    <Draggable handle="#contact-modal-header">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <form
        action={submitContactForm}
        id="contact-modal"
        className="w-4/5 lg:w-[650px] flex flex-col absolute z-20 "
      >
        <div
          id="contact-modal-header"
          className="py-2 px-4 bg-trace-ash bg-opacity-30 backdrop-blur-md flex rounded-tl-xl rounded-tr-xl relative items-center cursor-grab"
        >
          <button
            className="w-[14px] h-[14px] bg-[#FC5552] rounded-full absolute"
            onClick={() => toggleModal(false)}
          ></button>
          <label
            htmlFor="contact-modal"
            className="uppercase text-sm text-demo-smoke mx-auto cursor-grab"
          >
            Contact
          </label>
        </div>
        <div className="h-[400px] flex flex-col p-4 gap-3 bg-[#1E1E1E] text-demo-smoke">
          <div className="flex flex-col">
            <p className="geist text-sm font-light">Spinnin.studio</p>
            <p className="geist text-sm font-light">
              ©{new Date().getFullYear()}
            </p>
          </div>
          <p className="geist text-sm font-light">
            Links:{" "}
            <a
              href="https://instagram.com/spinnin.studio"
              target="_blank"
              className="underline"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://jasonzubiate.com"
              target="_blank"
              className="underline"
            >
              Founder
            </a>
          </p>
          <p className="geist text-sm font-light">
            For all inquiries, please contact{" "}
            <a className="cursor-pointer text-blue-400" onClick={emailRedirect}>
              hey.spinnin@gmail.com
            </a>
            .
          </p>
          <p className="geist text-sm font-light">
            How about we do a thing or two. For project requests, drop us a
            message below. We&apos;re looking forward to connecting with you.
          </p>
          <p className="geist text-sm font-light">Your message:</p>
          <div className="flex gap-2 items-center">
            <div className="w-[6px] h-[6px] bg-[#7FF039] pulse rounded-full"></div>
            <input
              name="message"
              type="text"
              className="bg-inherit geist text-sm font-light focus:outline-none w-full"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const currentForm = e.currentTarget.form;
                  if (currentForm) {
                    submitContactForm(new FormData(currentForm));
                  }
                  setTimeout(() => {
                    toggleModal(false);
                  }, 500);
                }
              }}
            />
          </div>
        </div>
        <div className="p-3 bg-[#1E1E1E] flex justify-end rounded-bl-xl rounded-br-xl border-t border-t-[#353535]">
          <button
            type="submit"
            onClick={() => {
              setTimeout(() => {
                toggleModal(false);
              }, 250);
            }}
            className="uppercase text-sm rounded-full bg-demo-smoke hover:bg-gray-200 text-trace-ash px-4 py-2 transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </Draggable>
  );
}
