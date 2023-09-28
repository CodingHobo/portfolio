import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Resume = () => {
  return (
    <section
      id="resume"
      data-nav-tooltip="Resume"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Résumé.</h3>
        </div>
        <div className="row">
          <p><em><b>PLEASE NOTE:</b> PDF viewing is not supported by some browsers
          on mobile devices in dark mode.<br></br>
          Please switch to light mode, or download my résumé
          <a href="/Tanya_Shylock_Resume.pdf" target="blank"> here.</a></em>
          </p>
          <div className="col-sm-12 m-15px-tb">
            <div className="resume-content">
              <object data="/Tanya_Shylock_Resume.pdf" type="application/pdf" width="100%" height="600px">
                <p>This browser does not support PDFs. Please download the PDF to view it:
                  <a href="/Tanya_Shylock_Resume.pdf">Download PDF</a>.</p>
              </object>
            </div>
          </div>
        </div>
        <div className="separated" />
        {/* <Testimonials /> */}
      </div>
    </section>
  );
};
export default Resume;
