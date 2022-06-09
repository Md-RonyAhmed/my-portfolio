import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

const About: NextPage = () => {
  // console.log(services);

  return (
    <>
      {" "}
      <Head>
        <title>Md.Rony | About</title>
      </Head>
      <div className="flex flex-col flex-grow px-6 pt-1 ">
        <h6 className="my-3 text-base font-medium">
          I am an organized, punctual, honest, and self-motivated employee,
          capable of time management and working under pressure in all
          environments.The biggest strength of mine is that I can effectively
          push myself to achieve my goals and learn new technology within a
          short time.
        </h6>
        <div
          className="flex-grow p-4 mt-5 bg-slate-300 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-3 text-xl font-semibold tracking-wide">
            My Working Area:
          </h4>

          <div className="grid gap-6 my-3 md:grid-cols-2">
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service) => (
              <div
                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                key={service.title}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
