import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Features from "./components/FeaturesPage";
import BelowNavbar from "./components/BelowNavbar";
import { useState } from "react";
import ScrollFeatures from "./components/ScrollFeatures";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HorizontalScroll from "./components/HorizontalScroll";
import FirstNavbar from "./components/FirstNavbar";
import Footer from "./components/Footer";
function App() {
  const [first_details, setfirst_details] = useState([
    {
      src: "./first.png",
      heading: "Convert more customers at scale",
      subheading:
        "Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.",
    },
    {
      src: "./second.png",
      heading: "Discover new ways to automate",
      subheading:
        "Get a head start with pre-built journeys that help you cross-sell your products, recover carts.",
    },
    {
      src: "./third.png",
      heading: "Keep your emails relevant and your brand growing",
      subheading:
        "Deliver personalized emails based on their buying behavior, survey responses,etc.",
    },
  ]);

  const [second_details, setsecond_details] = useState([
    {
      src: "./first.png",
      heading: "Predict who’s likely to buy again",
      subheading:
        "Create segments of customers based on their lifetime value and likelihood to purchase.",
    },
    {
      src: "./second.png",
      heading: "Build customers for life",
      subheading:
        "Use our intelligent predictions to tighten your targeting strategy,repeat sales.",
    },
  ]);

  const locomotiveScroll = new LocomotiveScroll();

  // gsap code
  useGSAP(() => {
    gsap.from(".navbar div", {
      opacity: 0,
      duration: 0.5,
      y: -50,
      stagger: 0.2,
    });
    gsap.from(".hero", {
      opacity: 0,
      duration: 0.5,
      x: -50,
      delay: 1,
      stagger: 0.2,
    });
    gsap.from(".imghai", {
      y: 300,
      opacity: 0,
      duration: 1,
    });
  });

  // using usestate hook to create two arrays storing heading and subheading for components

  return (
    <>
      <BelowNavbar />

      <Features />

      <div
        data-scroll
        data-scroll-speed="0.5"
        className="component-2 h-[80vh] w-full bg-[#241C15] text-white flex justify-around items-center"
      >
        <div className="left w-[25%]">
          <p className="head text-4xl my-[3rem]">
            Find out why we’re best-in-class
          </p>
          <p className="subh text-2xl font-serif">
            The #1 email marketing and automations platform* that recommends
            ways to get more opens, clicks, and sales.
          </p>
        </div>
        <div className="cont w-[50%] grid grid-cols-2 gap-[6rem]">
          <div>
            <p className="pp text-2xl mb-2">Up to 39x ROI</p>
            <p className="font-serif">seen by Mailchimp users*</p>
          </div>
          <div>
            <p className="pp text-2xl mb-2">22 years experience</p>
            <p className="font-serif">helping businesses sell more</p>
          </div>
          <div>
            <p className="pp text-2xl mb-2">12M+ Users</p>
            <p className="font-serif">of Mailchimp globally</p>
          </div>
          <div>
            <p className="pp text-2xl mb-2">$1.7K per campaign</p>
            <p className="font-serif">generated on average*</p>
          </div>
        </div>
      </div>

      <div className="component-3 w-full h-[90vh] bg-white flex justify-around items-center">
        <div className="left w-[30%]">
          <p className="pp text-4xl ">
            Get started easily with a personalized product tour
          </p>
          <p className="font-serif my-[2rem]">
            An onboarding specialist is here to help you get started with
            confidence—it’s included with Standard and Premium plans.*
          </p>
          <button className="flex items-center justify-center font-serif rounded-[4rem] h-[3rem] w-[15rem] text-center bg-[#FFE01B]">
            Learn more about onboarding
          </button>
        </div>
        <img
          data-scroll-speed="0.5"
          src="https://eep.io/images/yzco4xsimv0y/eeOxTgGvLZjag4xB9SK7h/18bbe5f5514e075ae697322976223c1f/Onboarding_Placement_-_Woman_on_phone_and_laptop.png?w=842&fm=avif&q=60"
          alt=""
          className="imghai h-[70%]"
        />
      </div>

      {/* heading component is used here to render the content */}
      <Heading message="Generate up to 7x more orders* with Customer Journey Builder automations" />

      {/* features component is used here to render the content */}
      <div className="scroll">
        <ScrollFeatures firstdetails={first_details} />
      </div>

      <div className="hscroll">
        <HorizontalScroll firstdetails={first_details} />
      </div>
      <div className="component-7 h-screen w-full flex font-mono">
        <div className="right w-[50%] h-full bg-[#E7B75F] ">
          <div
            className="mt-[15rem] w-[70%] mx-auto"
            style={{ fontFamily: "sans-serif" }}
          >
            <p className="text-4xl font-bold">
              Keep customers ready to buy with engaging content
            </p>
            <p className="ml-[2rem] my-5 text-2xl">Content Optimizer</p>
            <p>
              Learn how your emails compare to the top-performing campaigns in
              your industry and get data-driven suggestions for improving your
              copy, imagery, and layout.
            </p>
            <hr style={{ borderColor: "black" }} />
            <p className="ml-[2rem] my-5 text-xl">Creative Assistant</p>
            <hr style={{ borderColor: "black" }} />
            <p className="ml-[2rem] my-5 text-xl">GDPR ready tools</p>
          </div>
        </div>
        <img src="./dnld.png" alt="" className="h-full w-[50%]" />
      </div>

      {/* heading component is used here to render the content */}
      <Heading message="Get up to 141% more revenue* with our Customer Lifetime Value and Likelihood to Purchase segments" />

      <div className="scroll">
        <ScrollFeatures firstdetails={second_details} />
      </div>

      <div className="hscroll">
        <HorizontalScroll firstdetails={second_details} />
      </div>

      <Footer
        column1={[
          "Why MailChimp?",
          "Product Updates",
          "Email Marketing",
          "Websites",
          "Transactions Email",
          "How We Compare",
          "GDPR Compliance",
          "Security",
          "Status",
          "MobileApp",
        ]}
        column2={[
          "Marketing Library",
          "Free Marketing Tools",
          "Marketing Glossary",
          "Integration Directory",
        ]}
        column3={["Agencies & Freelacer", "Developrs", "Events"]}
        column4={[
          "Our Story",
          "Newaroom",
          "Give Where You Live",
          "Careers",
          "Accesiblity",
        ]}
        column5={[
          "COntact Us",
          "Hire an Expert",
          "Help Center",
          "Talk to Sales",
        ]}
      />
    </>
  );
}

export default App;
