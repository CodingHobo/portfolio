import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
            <li
              className={`c-pointer ${activeBtn("applications")}`}
              onClick={handleFilterKeyChange("applications")}
              data-filter=".applications"
            >
              Applications
            </li>
            <li
              className={`c-pointer ${activeBtn("design")}`}
              onClick={handleFilterKeyChange("design")}
              data-filter=".design"
            >
              Design
            </li></ul>

        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item applications">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">HiveHunt</h5>
                <span>A Mobile-First Housing Marketplace</span><br></br>
                <span><a href=
                      "https://hivehunt.tanyashylock.dev/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/hivehunt"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/hivehunt.png" title="" alt="yard-hoppers-snippet" />
                <div className="portfolio-icon">
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="grid-item applications">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">GitHub Finder</h5>
                <span>A React app to simplify GitHub profile searches</span><br></br>
                <span><a href=
                      "https://github-finder.tanyashylock.dev/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/github-finder"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/ghFinder.png" title="" alt="ghf-snippet" />
              </div>
            </div>
          </div>{" "}
          <div className="grid-item applications">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Yard Hoppers</h5>
                <span>An Innovative Backyard Rental Platform</span><br></br>
                <span><a href=
                      "https://yardhoppers.surge.sh/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/yardHoppers-frontend"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-1.jpg" title="" alt="yard-hoppers-snippet" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Zillock Home</h5>
                <span>3ds Max Sample Rendering</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-9.jpg" title="" alt="zillock-floorplan-snippet" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item applications">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Jobly</h5>
                <span>An Integrated Job Search Platform</span><br></br>
                <span><a href=
                      "https://codinghobo-jobly.surge.sh/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/jobly-frontend"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-3.jpg" title="" alt="jobly-snippet" />
              </div>
            </div>
          </div>
          {/* grid item */}
          <div className="grid-item applications">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Memory Game</h5>
                <span>Can you beat your own high score?</span><br></br>
                <span><a href=
                      "https://memory-game.tanyashylock.dev/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/memory-game"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-5.jpg" title="mem-game" alt="memory-game" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Dazillio Home</h5>
                <span>AutoCAD Plans</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="elevations" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item applications">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Warbler</h5>
                <span>A Comprehensive Social Media Platform</span><br></br>
                <span><a href=
                      "https://codinghobo-warbler.onrender.com/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/flask-warbler"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-6.jpg" title="" alt="" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Chadzilla Music</h5>
                <span>Site Design</span>
                <br></br>
                <span><a href=
                      "https://www.chadzillamusic.com/"
                      target="blank"> Visit </a> </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/chadzilla.png" title="chadzilla-music" alt="chadzilla-music" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Anonymonkey</h5>
                <span>Site Design</span><br></br>
                <span><a href=
                      "https://www.anonymonkey.co/"
                      target="blank"> Visit </a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/anon-site.png" title="" alt="" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Anonymonkey</h5>
                <span>Branding and Product Design</span><br></br>
                <span><a href=
                      "https://www.anonymonkey.co/"
                      target="blank"> Visit </a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-2.jpg" title="" alt="anonymonkey-merch-snippet" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item applications">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Color Palette Generator</h5>
                <span>Harnessing the OpenAI API</span><br></br>
                <span><a href=
                      "https://color-gen-105349.uc.r.appspot.com/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/color-palette-generator"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/color-gen.png" title="" alt="anonymonkey-merch-snippet" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item applications">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Survey App</h5>
                <span>React App collecting user feedback</span><br></br>
                <span><a href=
                      "https://survey-app.tanyashylock.dev/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/survey-app"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/survey.png" title="" alt="anonymonkey-merch-snippet" />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
