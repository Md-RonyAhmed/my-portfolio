import Head from 'next/head';
import React from 'react'

const Contact = () => {
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
          <div className="form-control">
            <label className="label">
              <span className="">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered bg-transparent"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-transparent"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Message</span>
            </label>
            <textarea
              name=""
              id=""
              cols={15}
              rows={5}
              placeholder="Enter your message"
              className="textarea textarea-bordered bg-transparent"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-outline btn-info">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact