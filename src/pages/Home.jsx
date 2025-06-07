import React from "react";

function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 font-[Montserrat]">
      {/* Main Content Sections */}
      <section className="flex flex-col">
        {/* Hero / Banner Section */}
        <section className="relative h-[800px]">
          <img
            className="-z-10 h-full"
            src="/pexels-tima-miroshnichenko-6693656 1.png"
            alt="hero-background-image"
          />
          <div className="absolute top-0 left-0 right-0 z-10 mt-[23px] ml-[96px]">
            <header className="flex justify-between">
              <div>
                <img src="/home-logo.png" alt="home-logo" />
              </div>
              <div>
                <button className="text-white text-[16px] font-[500] px-[23px] py-[12px] cursor-pointer">
                  Login
                </button>
                <button className="bg-[#009ACE] rounded-md text-white text-[16px] font-[500] px-[23px] py-[12px] ml-4 mr-[140px] cursor-pointer hover:bg-[#007B9E] transition ease-in duration-300">
                  Start for free
                </button>
              </div>
            </header>
            <div className="mt-[109px]">
              <h1 className="text-[40px]/[100%] font-[700] text-white">
                Effortless Payment <br /> Solutions for Your <br /> Business
              </h1>
              <p className="mt-[19px] font-[inter] font-[500] text-[18px] text-white">
                Start accepting payments as soon as you set up and <br />
                reach more customers than ever
              </p>
              <button className="bg-[#009ACE] rounded-md text-white text-[16px] font-[500] px-[23px] py-[18px] mt-[50px] cursor-pointer hover:bg-[#007B9E] transition ease-in duration-300">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* What we do Section */}
        <section className="relative h-[485px]">
          <img
            className="-z-10 h-full"
            src="/what-we-do.png"
            alt="what-we-do-bg_image"
          />
          <div className="absolute top-0 left-0 right-0">
            <div className="  flex flex-col items-center text-center mt-[75px] mb-[42px]">
              <h2 className="text-[36px]/[100%] font-[800] text-[#072D56]">
                We've helped grow <br /> hundreds of businesses
              </h2>
              <p className="text-[16px]/[100%] font-[500] text-[#000000] mt-[17px]">
                See somethings we can offer you
              </p>
            </div>

            <div className="flex gap-[30px]">
              <div className="">
                <div className="flex my-[49px] ml-[74px] mr-[43px]">
                  <img
                    className="mt-[3px] w-[56px] h-[56px]"
                    src="/payment-link-icon.png"
                    alt="payment-link-icon"
                  />
                  <div className="mt-[7px] ml-[27px]">
                    <h3 className="text-[22px]/[100%] font-[600] text-[#072D56]">
                      Payment Links
                    </h3>
                    <p className="text-[16px]/[100%] font-[500] text-[#072D56] mt-[6px]">
                      Offer your customers a dynamic payment experience
                      seamlessly
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex my-[49px] ml-[74px] mr-[43px]">
                  <img
                    className="mt-[3px] w-[56px] h-[56px]"
                    src="/ussd-icon.png"
                    alt="payment-link-icon"
                  />
                  <div className="mt-[7px] ml-[27px]">
                    <h3 className="text-[22px]/[100%] font-[600] text-[#072D56]">
                      USSD
                    </h3>
                    <p className="text-[16px]/[100%] font-[500] text-[#072D56] mt-[6px]">
                      We will create a unique and dedicated/shared set of codes
                      for your business
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex my-[49px] ml-[74px] mr-[43px]">
                  <img
                    className="mt-[3px] w-[56px] h-[56px]"
                    src="/virtual-wallet-icon.png"
                    alt="payment-link-icon"
                  />
                  <div className="mt-[7px] ml-[27px]">
                    <h3 className="text-[22px]/[100%] font-[600] text-[#072D56]">
                      Virtual Account
                    </h3>
                    <p className="text-[16px]/[100%] font-[500] text-[#072D56] mt-[6px]">
                      Get a virtual account to accept payments without having to
                      share main account
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section className="bg-[#F3FCFF] h-[718px] relative">
          <div className="absolute top-0 left-[-355px] w-[718px] h-[718px] bg-[#699BF759] rounded-full"></div>
          <div className="absolute top-[404px] left-[206px] w-[314px] h-[314px] bg-[#00BFFF26] rounded-full"></div>
          <div className=" absolute top-[204px] left-[102px] ">
            <h1 className="text-[36px]/[100%] font-[800] text-[#072D56] w-[460px]">
              Payments made simple. <br /> Unleash the power with <br />
              our developer-first APIs
            </h1>
            <p className="mt-[20px] font-[500] text-[16px]/[150%] text-[#000000] w-[460px]">
              A suite of APIs to collect payments, manage treasury and launch
              financial products globally. The payments API with payment
              coverage across developed and emerging markets.
            </p>
            <button className="bg-[#009ACE] rounded-md text-white text-[16px] font-[500] px-[19px] py-[10px] mt-[50px] cursor-pointer hover:bg-[#007B9E] transition ease-in duration-300">
              View API Documentation
            </button>
          </div>
          <img
            className="absolute top-[127px] left-[681px]"
            src="/payment-code-image.png"
            alt="code screenshot"
          />
        </section>

        {/* Seamless Integration Section */}
        <section className="relative h-[795px] bg-[#072D56]">
          <img
            className="absolute left-[2.01px]"
            src="/arrow-icon.png"
            alt=""
          />
          <img
            className="absolute top-[145px] left-[129px]"
            src="/smiling-man-img.png"
            alt=""
          />

          <div className=" absolute top-[228px] left-[940px] ">
            <h1 className="text-[36px]/[100%] font-[700] text-white w-[303px]">
              Seamless integration and streamlined operations
            </h1>
            <p className="mt-[31px] font-[500] text-[16px]/[150%] text-white w-[388px]">
              Experience easy integration and efficient operations with BaaS
              intuitive platform. We empower you to focus on what matters most-
              serving your customers, while we handle the technicalities of it
              all.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="h-[902px]">
          <div className="  flex flex-col items-center text-center mt-[96px]">
            <h2 className="text-[40px]/[100%] font-[800] text-[#000000]">
              We'd love to hear from you
            </h2>
            <p className="text-[22px]/[100%] font-[500] text-[#000000] mt-[11px]">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[30px] mt-[60px] justify-center mx-auto max-w-[1030px]">
            <div className="flex border border-[#ACC9CD59] rounded-lg shadow-[0_0_100px_20px_rgba(205,223,255,0.2)] max-w-[500px] max-h-[250px]">
              <img
                className="mt-[25px] ml-[25px] max-h-[75px] max-w-[75px]"
                src="/chat-icon.png"
                alt="chat-icon"
              />
              <div className="mt-[49px] ml-[19px]">
                <h3 className="text-[22px]/[100%] font-[600] text-[#000000]">
                  Chat to Support
                </h3>
                <p className="text-[18px]/[130%] font-[400] text-[#000000] mt-[3px] mb-[29px] max-w-[356px]">
                  Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mb-[29px]">
                  <a
                    className="underline text-[18px]/[100%] font-[400] text-[#000000]"
                    href=""
                  >
                    hello@taviatech.com.ng
                  </a>
                </div>
              </div>
            </div>
            <div className="flex border border-[#ACC9CD59] rounded-lg shadow-[0_0_100px_20px_rgba(205,223,255,0.2)] max-w-[500px] max-h-[250px]">
              <img
                className="mt-[25px] ml-[25px] max-h-[75px] max-w-[75px]"
                src="/chat-support.png"
                alt="chat-support-icon"
              />
              <div className="mt-[49px] ml-[19px]">
                <h3 className="text-[22px]/[100%] font-[600] text-[#000000]">
                  Chat to Support
                </h3>
                <p className="text-[18px]/[130%] font-[400] text-[#000000] mt-[3px] mb-[29px] max-w-[356px]">
                  Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mb-[29px]">
                  <a
                    className="underline text-[18px]/[100%] font-[400] text-[#000000]"
                    href=""
                  >
                    hello@taviatech.com.ng
                  </a>
                </div>
              </div>
            </div>
            <div className="flex border border-[#ACC9CD59] rounded-lg shadow-[0_0_100px_20px_rgba(205,223,255,0.2)] max-w-[500px] max-h-[250px]">
              <img
                className="mt-[25px] ml-[25px] max-h-[75px] max-w-[75px]"
                src="/map-icon.png"
                alt="map-icon"
              />
              <div className="mt-[49px] ml-[19px]">
                <h3 className="text-[22px]/[100%] font-[600] text-[#000000]">
                  Visit Us
                </h3>
                <p className="text-[18px]/[130%] font-[400] text-[#000000] mt-[3px] mb-[29px] max-w-[356px]">
                  Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mb-[29px]">
                  <a
                    className="underline text-[18px]/[100%] font-[400] text-[#000000]"
                    href=""
                  >
                    hello@taviatech.com.ng
                  </a>
                </div>
              </div>
            </div>
            <div className="flex border border-[#ACC9CD59] rounded-lg shadow-[0_0_100px_20px_rgba(205,223,255,0.2)] max-w-[500px] max-h-[250px]">
              <img
                className="mt-[25px] ml-[25px] max-h-[75px] max-w-[75px]"
                src="/phone-icon.png"
                alt="phone-icon"
              />
              <div className="mt-[49px] ml-[19px]">
                <h3 className="text-[22px]/[100%] font-[600] text-[#000000]">
                  Call Us
                </h3>
                <p className="text-[18px]/[130%] font-[400] text-[#000000] mt-[3px] mb-[29px] max-w-[356px]">
                  Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mb-[29px]">
                  <a
                    className="underline text-[18px]/[100%] font-[400] text-[#000000]"
                    href=""
                  >
                    hello@taviatech.com.ng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section>
          <div className="max-w-[1278px] h-[276px] mx-auto flex justify-center items-center bg-[#072D56] rounded-4xl">
            <div className="flex h-[78px] items-center">
              <h3 className="font-[800] text-[32px]/[100%] text-[#FFFFFF] max-w-[358px]">
                Keep Updated About <br /> Our Product
              </h3>
              <div className="flex max-w-[674px] relative ml-[28px]">
                <input
                  type="email"
                  placeholder=""
                  className="border border-gray-300 bg-white w-[674px] rounded-[8px] px-4 py-2 h-[58px] focus:outline-none focus:ring-2 focus:ring-[#009ACE] transition ease-in duration-300"
                />
                <div className="absolute left-[524px] top-[3px]">
                  <button className="bg-[#009ACE] rounded-md text-white text-[16px] font-[700] px-[40px] py-[14px] cursor-pointer hover:bg-[#007B9E] transition ease-in duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start Growing Section */}
        <section>
          <div className="max-w-[1216px] mx-auto">
            <div className="flex flex-col items-center text-center mt-[64px]">
              <h2 className="text-[40px]/[100%] font-[700] text-[#101828]">
                Start growing with us
              </h2>
              <p className="text-[20px]/[100%] font-[400] font-[inter] text-[#667085] mt-[16px]">
                Join us and see how your customers enjoy seamless payments
              </p>
            </div>
            <div className="flex justify-center mt-[40px]">
              <button className="bg-[#1C3F79] rounded-[10px] text-white text-[20px] font-[500] px-[21px] py-[12px] cursor-pointer hover:bg-[#007B9E] transition ease-in duration-300">
                Get Started
              </button>
            </div>

            {/* Table SubSection */}
            <div className="mt-[64px] flex justify-center gap-[32px]">
              <div className="flex flex-col w-[176px]">
                <h4 className="mb-[16px] font-[inter] font-[600] text-[14px] text-[#98A2B3]">
                  Product
                </h4>
                <div className="flex flex-col gap-[12px] text-[16px] text-[#667085] font-[inter] font-[500]">
                  <a href="">Overview</a>
                  <a href="">Features</a>
                  <a href="">Solutions</a>
                  <a href="">Tutorials</a>
                  <a href="">Pricing</a>
                  <a href="">Releases</a>
                </div>
              </div>

              <div className="flex flex-col w-[176px]">
                <h4 className="mb-[16px] font-[inter] font-[600] text-[14px] text-[#98A2B3]">
                  Company
                </h4>
                <div className="flex flex-col gap-[12px] text-[16px] text-[#667085] font-[inter] font-[500]">
                  <a href="">About us</a>
                  <a href="">Careers</a>
                  <a href="">Press</a>
                  <a href="">News</a>
                  <a href="">Media Kit</a>
                  <a href="">Contact</a>
                </div>
              </div>

              <div className="flex flex-col w-[176px]">
                <h4 className="mb-[16px] font-[inter] font-[600] text-[14px] text-[#98A2B3]">
                  Resources
                </h4>
                <div className="flex flex-col gap-[12px] text-[16px] text-[#667085] font-[inter] font-[500]">
                  <a href="">Blog</a>
                  <a href="">Newsletter</a>
                  <a href="">Events</a>
                  <a href="">Help Centre</a>
                  <a href="">Tutorials</a>
                  <a href="">Support</a>
                </div>
              </div>

              <div className="flex flex-col w-[176px]">
                <h4 className="mb-[16px] font-[inter] font-[600] text-[14px] text-[#98A2B3]">
                  Use Cases
                </h4>
                <div className="flex flex-col gap-[12px] text-[16px] text-[#667085] font-[inter] font-[500]">
                  <a href="">Startups</a>
                  <a href="">Enterprise</a>
                  <a href="">Government</a>
                  <a href="">Saas</a>
                  <a href="">Marketplaces</a>
                  <a href="">Ecommerce</a>
                </div>
              </div>

              <div className="flex flex-col w-[176px]">
                <h4 className="mb-[16px] font-[inter] font-[600] text-[14px] text-[#98A2B3]">
                  Social
                </h4>
                <div className="flex flex-col gap-[12px] text-[16px] text-[#667085] font-[inter] font-[500]">
                  <a href="">Twitter</a>
                  <a href="">LinkedIn</a>
                  <a href="">Facebook</a>
                  <a href="">Github</a>
                  <a href="">AngelList</a>
                  <a href="">Dribble</a>
                </div>
              </div>

              <div className="flex flex-col w-[176px]">
                <h4 className="mb-[16px] font-[inter] font-[600] text-[14px] text-[#98A2B3]">
                  Legal
                </h4>
                <div className="flex flex-col gap-[12px] text-[16px] text-[#667085] font-[inter] font-[500]">
                  <a href="">Terms</a>
                  <a href="">Privacy</a>
                  <a href="">Cookies</a>
                  <a href="">Licenses</a>
                  <a href="">Settings</a>
                  <a href="">Contact</a>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-[81px] mb-[48px]  max-w-[1216px] mx-auto ">
            <div className="bg-[#E4E7EC] h-[1px] mb-[16px]">

            </div>
            <div className="flex justify-between items-center">
              <img className="" src="blue-logo.png" alt="footer-home-logo" />
              <p className="text-gray-500 text-sm">
                © 2024 Tavia Technologies Limited. All rights reserved.
              </p>
            </div>
          </footer>
        </section>
      </section>
    </main>
  );
}

export default Home;
