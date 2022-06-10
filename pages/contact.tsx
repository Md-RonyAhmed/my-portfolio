import Head from 'next/head';
import React from 'react'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Md.Rony | Contact</title>
      </Head>{" "}
      <div className="text-center mt-6 mb-0">
        <h1 className="text-5xl font-bold">Send Message</h1>
        <p className="py-3">
          If you have query? Please do not hesitate. Send me the message.
        </p>
      </div>
      <div className="hero min-h-screen mt-0 ">
        <div className="hero-content flex-col">
          <div className="card flex w-5/6 dark:bg-base-100 bg-slate-100 shadow-custom-light">
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
                  cols={50}
                  rows={20}
                  placeholder="Enter your message"
                  className="input input-bordered bg-transparent"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-outline btn-info">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact