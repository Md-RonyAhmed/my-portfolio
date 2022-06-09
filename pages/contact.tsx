import React from 'react'

const Contact = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Send Message</h1>
          <p className="py-6">
           If you have query? Please don't hesitate. Send me the message.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl dark:bg-base-100 bg-slate-100 shadow-custom-light">
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
                cols={30}
                rows={10}
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
  );
}

export default Contact