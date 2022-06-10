import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  setShowDetail,
  showDetail,
}) => {
  // const [showDetail, setShowDetail] = useState(0);

  return (
    <div>
      <Image
        src={image_path[0]}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>
      <button
        onClick={() => setShowDetail(id)}
        className="my-2 text-center mx-auto w-full btn btn-sm btn-info btn-outline"
      >
        Show Details
      </button>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 md:grid max-w-full h-full overflow-auto p-2 text-black bg-gray-100 md:grid-cols-2 md:gap-x-12 dark:text-white dark:bg-dark-100">
          <div className="m-4">
            <div>Some Snapshot:</div>
            {/* <img src={image_path} alt={name} /> */}
            {image_path.map((image) => (
              // eslint-disable-next-line react/jsx-key
              <>
                <div className="m-4">
                  <Image
                    src={image}
                    alt={name}
                    layout="responsive"
                    height="150"
                    width="300"
                  />
                </div>
              </>
            ))}
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">
              <h3> Features:</h3>
              {description.map((d, i) => (
                <>
                  <ul>
                    <li>
                      {i + 1}. {d}
                    </li>
                  </ul>
                </>
              ))}
            </h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github Repo</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Live Preview</span>
              </a>
            </div>
          </div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
