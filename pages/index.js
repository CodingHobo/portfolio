import dynamic from "next/dynamic";
import ParticlesBackground from "../src/components/ParticlesBackground";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
        <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello! I am</h6>
                  <h2 className="font-alt">Tanya Shylock - </h2>
                  <p className="lead">
                    A Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                  Leveraging a diverse background that includes a 20+ year professional
                  journey through the vibrant music industry, a rich understanding of design
                  principles, and a fresh yet intense dive into the world of software
                  engineering, I am a hybrid professional poised to merge the creative
                  and the technical. My strength lies in my ability to understand the
                  big picture and create software solutions that are not only functional
                  but aesthetically pleasing and user-friendly, reflecting my deep roots
                  in music and design. As I forge this new chapter in my career, I am
                  excited to bring my unique blend of experiences to the tech world,
                  harmonizing my past and present to shape engaging and resonant digital
                  experiences.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="Tanya_Shylock_Resume.pdf" download>
                      Download Résumé
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/firenze.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* About us */}
      <About />
      {/* End about us */}
      {/* Resume */}
      <Resume />
      {/* End Resume */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
