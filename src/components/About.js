import Link from 'next/link';

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/montreux.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h4>
                  {`I'm`} a dedicated Full-Stack Software Engineer who merges
                  technical proficiency with a passion for design, creating
                  robust and aesthetically pleasing software solutions.{" "}
                </h4>
                <div>
                  <ul>
                    <li>🖥 Languages: JavaScript, Python, HTML, CSS, TypeScript, SQL</li>
                    <li>📚 Libraries / Frameworks: React, Django, Flask, Bootstrap,
                      jQuery, Node.js, Express, SQLAlchemy, Axios, cURL</li>
                    <li>🛠 Dev Tools and Testing: PostgreSQL, VSCode, Git, GitHub,
                      AWS S3, Insomnia, Agile Development, Jest, React Testing Library,
                      Python Unittest, Jasmine</li>
                    <li>🖌 Design: Adobe Creative Suite, Canva, Figma, AutoCAD, 3ds Max</li>
                    <li>🌱 Currently Refining and Developing Technologies: Angular,
                      TypeScript</li></ul>
                </div>
                <h6>Beyond the professional realm, my interests encompass an
                  insatiable appetite for travel and cultural immersion,
                  alongside a profound love for music and the performing arts.
                  My mind thrives on new information, experiences, and challenges,
                  fueling my identity as a lifelong learner. In my leisure time,
                  I relish playing board games with friends, engaging in artistic
                  pursuits such as drawing, painting, and zentangling, and making
                  lasting memories with my cherished family. The cherry on top
                  is time spent cuddling the {`world's`} most adorable dog,
                  Hobo (no, really, {`he's`} the cutest).
                  </h6>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <div className="media-body">
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count"></span>
                      <div className="media-body">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                <Link href="/#contactus">
                    <a className="px-btn px-btn-theme">
                    <span>Contact Me</span>
                    </a>
                </Link>
                <Link href="/#work">
                    <a className="px-btn px-btn-theme">Portfolio</a>
                </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2023</span>
                <h6>Full-Stack Software Engineer</h6>
                <p>Rithm School | San Fransisco, CA</p>
              </li>
              <li>
                <span>2020</span>
                <h6>Interior Design</h6>
                <p>Florence Design Academy | Florence, Italy</p>
              </li>
              <li>
                <span>2000</span>
                <h6>Web and Graphic Design</h6>
                <p>Self-studied</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Core Competencies</h3>
              <div className="skill-lt">
                <h6>Javascript | HTML | CSS | Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>React | Django | SQLAlchemy | Bootstrap</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "82%" }}>
                    <span data-toggle="tooltip" title="82%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Adobe Creative Suite | Canva | AutoCAD | 3ds Max | Figma</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "98%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>React Testing Library | Python Unittest | Integration Testing | End-to-end Testing</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "78%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <br></br>
              <div className="skills-box">
              <h3>Emerging Skills</h3>
              <div className="skill-lt">
                <h6>Angular | TypeScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer Intern</h6>
                  <label>Rithm School | Remote | July 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  SIS (Student Information System) - Contributed to the development of a sophisticated,
                  scalable Learning Management System serving as the central hub
                  for student and staff information, courses, and cohort assets.
                  This white-labeled product has generated over seven figures in
                  revenue to date. I enhanced user experience and data security by
                  overhauling project labels
                  for clarity and adding clickable GitHub profile links, implementing
                  a discreet system for private information denotation visible only
                  to authorized users, and engineering a seamlessly integrated blog
                  app for efficient content administration. This blog app, which
                  I linked to the admin panel, facilitated effortless creation,
                  editing, and scheduling of blog posts and optimized content
                  management through efficient database storage and retrieval of
                  posts and associated information.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Tour Manager | Festival Coordinator</h6>
                  <label>Music Industry | International | 1999 - 2020 </label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  Demonstrated mastery in tour and festival management, focusing
                  on comprehensive event planning, from logistics coordination to
                  teardown. Consistently fostered robust artist relationships,
                  managed performance schedules, and served as the primary liaison
                  among artists, management, and event stakeholders.
                  Financial responsibilities included effective budget management,
                  contract negotiation, and strategic cost-saving implementations,
                  leading to substantial savings without compromising on quality.
                  The culmination of these skills ensured the successful execution
                  of numerous music events with an emphasis on complex logistics,
                  financial accountability, and fostering a collaborative environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Interior & Graphic Design</h6>
                  <label>Freelance | Remote | Jan 2000 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  As a versatile designer, {`I've`} catered to diverse client
                  needs with customized graphic and interior designs.
                  Leveraging advanced software, {`I've`} produced engaging graphics
                  and innovative interior design concepts. Comprehensive client
                  consultations allow me to craft layouts and 3D visualizations
                  that reflect client visions. I manage all design stages to
                  ensure timely, on-budget project completion, coordinating with
                  contractors and architects for quality execution. By keeping
                  pace with design trends and technology advancements, I consistently
                  deliver fresh and competitive design solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
