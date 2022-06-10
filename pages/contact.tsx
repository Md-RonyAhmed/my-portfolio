import Head from 'next/head';
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
   const form = useRef();
    const sendEmail = (event) => {
      event.preventDefault();

      emailjs
        .sendForm(
          "service_te8dkkk",
          "template_26l7hwo",
          form.current,
          "p6XQzia97zQMqN2SX"
        )
        .then(
          (result) => {
            if (result) {
              return toast.success('Message Send Successfully');
            }
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            return toast.error("Something went wrong");
          }
        );
    };
  return (
    <>
      <Head>
        <title>Md.Rony | Contact</title>
      </Head>{" "}
      <div className="text-center mt-6 mb-0 px-2">
        <h1 className="text-3xl font-bold">Send Message</h1>
        <p className="py-3">
          If you have query? Please do not hesitate. Send me the message.
        </p>
      </div>
      <div className="md:w-1/2 lg:w-2/3 w-5/6 mx-auto dark:bg-base-100 bg-slate-100 shadow-custom-light rounded-md mb-10">
        <div className="card-body">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name" required
                className="input input-bordered bg-transparent"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email" required
                className="input input-bordered bg-transparent"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject" required
                className="input input-bordered bg-transparent"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Message</span>
              </label>
              <textarea
                name="message"
                id=""
                cols={15}
                rows={5}
                placeholder="Enter your message" required
                className="textarea textarea-bordered bg-transparent"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline btn-info"
              />
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Contact