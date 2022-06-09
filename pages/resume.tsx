import Bar from "../components/Bar";
import { backend, hosting, languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Daffodil International University (2018-2022)</p>
            <p className="my-3">
              I have completed my Bsc in Computer Science Engineering with cgpa 3.74 out of 4.00 
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Tata Consultancy Services</p>
            <p className="my-3">I don't know why I am doing this job</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 mt-0 text-2xl font-bold">Familiar Technology</h5>
          <div className="my-2">
            {backend.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 mt-0 text-2xl font-bold">Deployed</h5>
          <div className="my-2 pb-4">
            {hosting.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
