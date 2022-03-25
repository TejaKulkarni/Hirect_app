import React from "react";
import "./downloadpage.css";
import { Footer } from '..';

function Downloadpage() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>

                <div className="title-area-bottom">
                  <div className="title-area-left">
                    <h2
                      className="small-title"
                      style={{ marginbottom: "15px",textAlign: 'center' }}
                    >
                      Hire Anytime, Anywhere
                    </h2>
                    <h2 style= {{textAlign: 'center' }}>
                      Hirect is here to make your hiring process faster.
                      <br />
                      And you can chat with candidates anytime, anywhere.
                      <br />
                      Download the app here.
                    </h2>
                  </div>
                  <img
                    src="https://www.hirect.us/_nuxt/img/banner-image@2x-min.c44b25d.png"
                    alt="title-img"
                    className="title-area-img"
                  />
                </div>
                <div id="my-form" style={{ visibility: "hidden" }}></div>
              </div>
              <div className="form-area">
                <div className="get-hirect-app-c-page">
                  <div className="get-hirect-app">
                    <p class="main-title">Get Hirect App</p>
                    <div
                      className="get-hirect-input"
                      style={{ position: "relative" }}
                    >
                      <center>
                        <div className="get-hirect-c-input-form el-input">
                          <input
                            type="text"
                            autoComplete="off"
                            id="get-hirect-c-input-form"
                            placeholder="+1(XXX) XXX-XXXX"
                            class="el-input__inner"
                          />
                        </div>
                        <div style={{ height: "20px" }}>
                          <div
                            className="get-hirect-input-err-msg"
                            style={{ display: "none" }}
                          >
                            Please make sure to enter a valid phone number.
                          </div>
                        </div>
                        <button
                          type="button"
                          class="el-button get-hirect-input-btn el-button--primary el-button--mini"
                          style={{
                            bordercolor: "rgb(14,16,26)",
                            background: "rgb(14,16,26)",
                            color: "rgb(255,255,255)",
                          }}
                        >
                          <span>Text me the link</span>
                        </button>
                      </center>
                    </div>
                    <div className="get-hirect-display">
                      <div className="QRcode-pic-container">
                        <center>
                          <img
                            src="https://hirectapp.com/_nuxt/img/bg_qr_download_page.2820a4c.png"
                            alt="qr"
                            class="QRcode-pic-border"
                          />
                          <div>
                            <p
                              class="get-hirect-app-totally"
                              style={{ margintop: "25px" }}
                            >
                              Open the camera on your phone and point
                              <br />
                              at the QR code below to download Hirect
                            </p>
                          </div>
                          <div className="downloadDialog-button">
                            <button>
                              <a
                                href="https://apps.apple.com/US/app/id1518442417?mt=8"
                                target="_blank"
                              >
                                <img
                                  src="https://hirectapp.com/_nuxt/img/btn_appstore@2x.c35bf05.png"
                                  alt="appstore"
                                  class="downloadDialog-button-ios"
                                />{" "}
                              </a>
                            </button>
                            <button>
                              <a
                                href="https://hirectin.onelink.me/TwhD/b0fe8b20"
                                target="_blank"
                              >
                                <img
                                  src="https://hirectapp.com/_nuxt/img/btn_googleplay@2x.cb9308c.png"
                                  alt="google"
                                  class="downloadDialog-button-android"
                                />{" "}
                              </a>
                            </button>
                            <div class="downloadDialog-button-pkg-container">
                              <button>
                                <a href="https://prod-apk-package.s3.ap-south-1.amazonaws.com/app-official-release.apk">
                                  <img
                                    src="https://hirectapp.com/_nuxt/img/pkg_android.bebdb99.png"
                                    class="downloadDialog-button-pkg"
                                  />
                                </a>
                              </button>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-area-right">
                  <center>
                    <p class="area-2-text">
                      Join over 10,000 companies
                      <br />
                      Find top-notch candidates now
                    </p>
                    <img
                      src="https://hirectapp.com/_nuxt/img/logos.cc0d921.png"
                      alt="logos"
                      class="form-area-img"
                    />
                  </center>
                </div>
              </div>
              <div className="download-step">
                <center>
                  <p class="common-title">
                    Hirect can assist your recruiting
                    <br />
                    process in
                    <span style={{ color: "rgb(0,204,180)" }}>
                      {" "}
                      3 easy steps:
                    </span>
                  </p>
                  <div className="download-step-text-container">
                    <p class="common-text">Sign-up as a recruiter </p>
                    <p class="common-text">Post your job for FREE</p>
                    <p class="common-text">
                      Start direct chatting with
                      <br />
                      potential candidates
                    </p>
                  </div>
                  <img
                    src="https://hirectapp.com/_nuxt/img/download-step.2e71c14.png"
                    alt="download-step"
                    class="download-step-img"
                  />
                </center>
              </div>
              <div className="seeking-candidate">
                <img
                  src="https://hirectapp.com/_nuxt/img/hire-staff-image.96a89df.png"
                  alt="staff"
                  class="seeking-candidate-img"
                />
                <div className="seeking-candidate-right">
                  <p class="common-title" style={{ margin: "20px 0px" }}>
                    I am seeking a candidate
                    <br />
                    to fill the position
                  </p>
                  <p class="common-text">
                    Chat, interview and hire candidates in less than a day
                  </p>
                  <button
                    type="button"
                    class="el-button seeking-candidate-btn el-button--primary"
                  >
                    <span>Get Started &gt;</span>
                  </button>
                </div>
              </div>
              <div className="green-area">
                <center>
                  <p class="common-title" style={{ paddingtop: "100px" }}>
                    Pick candidates from 50+ categories
                  </p>
                  <div className="categories-container">
                    <div className="categories-item">Full Stack Engineer</div>
                    <div className="categories-item">Software Developer</div>
                    <div className="categories-item">C++ Programmer</div>
                    <div className="categories-item">iOS/Android Developer</div>
                    <div className="categories-item">Java Engineer</div>
                    <div className="categories-item">IT Engineer</div>
                    <div className="categories-item">UI/UX Designer</div>
                    <div className="categories-item">Web Developer</div>
                    <div className="categories-item">PHP&nbsp;Developer</div>
                    <div className="categories-item">Business Developer</div>
                    <div className="categories-more">+More</div>
                  </div>
                  <p class="common-title">
                    Hire top talent all across United States
                  </p>
                  <div className="categories-container">
                    <div className="categories-item">San Francisco Bay</div>
                    <div className="categories-item">New York</div>
                    <div className="categories-item">Los Angeles Area</div>
                    <div className="categories-item">Boston</div>
                    <div className="categories-item">Seattle</div>
                    <div className="categories-item">Chicago</div>
                    <div className="categories-item">Austin</div>
                    <div className="categories-item">Washington</div>
                    <div className="categories-item">San Diego</div>
                    <div className="categories-item">Dallas-Fort Worth</div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Downloadpage;