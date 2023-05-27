export default function About() {
  return (
    <div className="about-me-section aboutme-inside my-5">
      <div className="d-flex flex-column">
        <span className="about-me-text" id="aboutme">
          About me
        </span>
        <span className="why-text-sub">Why Choose me?</span>
        <div className="row justify-content-center shadow-lg my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <lottie-player
              className="lottie-1"
              src="https://assets7.lottiefiles.com/packages/lf20_v1yudlrx.json"
              background="transparent"
              speed="1"
              // style={{ width: "500px", height: "500px" }}
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
            <span className="some-text-about-me">
              Full Stack web and mobile developer with background knowledge in MERN Stack with
              redux, along with a knack of building applications with utmost efficiency. Strong
              professional with a BSC willing to be an asset for an organization.
            </span>
            <span className="few-highlights">
              <span className="few-text">Here are few highlights</span>
              <span className="few-list">
                <ul>
                  <li> Full stack web and mobile development</li>
                  <li> Interactive Front end as per the design</li>
                  <li> Android studio,React Native and flutter</li>
                  <li> Node JS,Express,MongoDB (All backend technlogies)</li>
                  <li> Docker,Kubernetes,AWS</li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
