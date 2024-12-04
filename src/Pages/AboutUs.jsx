import React from "react";
import red from '../assets/asset_14.svg'
import round from '../assets/asset_16.svg'
import blue from '../assets/asset_15.svg'

const AboutUs = () => {
  return (
    <>
      <div className="text-[#f5f2f0]">
        <div className="relative h-full max-sm:relative">
            <div className="absolute top-0 left-0 w-full h-full">
                <img src={red} alt="" />
            </div>
            <div className="absolute top-0 right-0 max-sm:hidden">
                <img src={blue} alt="" />
            </div>
            <div className="absolute top-0 left-0 max-sm:hidden">
                <img src={round} alt="" />
            </div>
            <div className="min-h-60 flex items-center pb-8 px-16 pt-16 max-sm:pt-0 max-sm:px-0 max-sm:pb-8">
                <div className="z-[1] w-full max-sm:text-center max-sm:mt-[100px]">
                    <h1 className="text-[32px] font-bold uppercase -tracking-[0.04em]">about us</h1>
                    <h3 className="m-0 -tracking-[0.04em] text-[40px] font-light max-lg:text-[28px] ">
                        industry's 
                        <span className="text-[64px] font-bold max-sm:text-5xl"> largest</span>
                        <br />
                        end-to-end pre-production
                        <span className="text-[64px] font-bold max-sm:text-5xl"> AI suite</span>
                    </h3>
                </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center rleative ">
        <div className="px-[176px] mb-5 text-[#f5f2f0] max-sm:p-4 ">
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">Our mission</h3>
        <p className="leading-8 text-[17px] font-light">
          Our mission is to empower filmmakers at every stage of pre-production
          with advanced AI-driven tools, enhancing creativity and efficiency
          while maintaining your unique vision.
        </p>
        <p className="leading-8 text-[17px] font-light">
          <b className="font-bold">NolanAI is here to help, not to take over...</b>
        </p>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">Core Values and Vision: </h3>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">1. Leading the Charge in Ethical AI:</h3>
        <p className="leading-8 text-[17px] font-light">
          At NolanAI, we prioritize the ethical implications of AI in the
          creative industry. Unlike many companies that push for automation at
          the expense of human creativity, we believe in AI-powered tools that
          enhance human-driven storytelling. Our platform is designed to
          collaborate with users, ensuring that AI serves as a co-creator rather
          than a replacement.
        </p>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">2. Empowering Creatives:</h3>
        <p className="leading-8 text-[17px] font-light">
          NolanAI is a powerful tool designed to enhance, not eliminate, the
          role of creatives. Think of our platform as an Ironman suit for
          filmmakers, providing them with advanced capabilities while keeping
          the creative control firmly in their hands.
        </p>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">3. Comprehensive Solutions:</h3>
        <p className="leading-8 text-[17px] font-light">
          While most AI companies in Hollywood offer point solutions, NolanAI
          stands out as a one-stop shop for development, pre-production, and
          production deliverables. We are expanding our capabilities to include
          budgeting, sales, and distribution, making us the only platform that
          supports filmmakers through the entire production lifecycle.
        </p>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">4. Future Expansion:</h3>
        <p className="leading-8 text-[17px] font-light">
          Over the next year, NolanAI will expand its offerings to cover
          post-production, sales, and distribution. Our goal is to streamline
          processes that are antiquated and mismanaged. We are bringing
          efficiency, transparency, and savings to every stage of film
          production. We are also expanding into all areas of content creation
          and creative education. Video Games, Marketing, Advertising, and
          ethical AI training in institutions of higher learning.
        </p>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">5. Empowering Creatives with Control:</h3>
        <p className="leading-8 text-[17px] font-light">
          We are committed to placing power back in the hands of creatives.
          NolanAI enables filmmakers to create materials, book gigs, sell their
          work, and retain rights and control over their creations, fostering a
          more autonomous and empowered creative community.
        </p>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">6. Streamlining Processes:</h3>
        <p className="leading-8 text-[17px] font-light">
          As we expand into budgeting, sales, and distribution, our singular
          focus is to eliminate inefficiencies and corruption. We aim to create
          a more transparent, efficient, and fair system for all stakeholders in
          the film industry as well as other media industries.
        </p>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">7. Cost-Effective Content Creation:</h3>
        <p className="leading-8 text-[17px] font-light">
          NolanAI's tools are designed to increase content creation while
          minimizing costs. By providing comprehensive solutions that cover all
          aspects of film production, we help filmmakers bring their visions to
          life more affordably and efficiently.
        </p>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words">
          <b className="font-bold">
            What We Offer: NolanAI offers several groundbreaking tools for
            filmmakers:
          </b>
        </h3>
        <ul className="pl-10 list-[circle]">
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Screenwriting Tools:</b>
            </p>
            <p className="leading-8 text-[17px] font-light">
              AI-enhanced writing assistance for character development, plot,
              and dialogue.
            </p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Storyboarding:</b>
            </p>
            <p className="leading-8 text-[17px] font-light"> Visual planning tools to bring your scenes to life.</p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Script Breakdown &amp; Scheduling:</b>
            </p>
            <p className="leading-8 text-[17px] font-light"> Efficient management of production logistics.</p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Budgeting Tools:</b>
            </p>
            <p className="leading-8 text-[17px] font-light"> Tools to track and manage your production budget.</p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Pitch Deck Creation:</b>
            </p>
            <p className="leading-8 text-[17px] font-light">
              Professional templates to present your projects to investors and
              collaborators.
            </p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Collaboration Features:</b>
            </p>
            <p className="leading-8 text-[17px] font-light"> Seamless teamwork capabilities, whether remote or on-site.</p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Analytics:</b>
            </p>
            <p className="leading-8 text-[17px] font-light">
              Insights and analytics to track your progress and improve your
              script.
            </p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Script Coverage:</b>
            </p>
            <p className="leading-8 text-[17px] font-light">
              {" "}
              Detailed script coverage to identify strengths and weaknesses.
            </p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Plot Hole Detection:</b>
            </p>
            <p className="leading-8 text-[17px] font-light"> AI-driven plot hole detection to ensure story coherence.</p>
          </li>
          <li>
            <p className="leading-8 text-[17px] font-light">
              <b className="font-bold">Support:</b>
            </p>
            <p className="leading-8 text-[17px] font-light">
              Comprehensive support options, including community support, email
              support for Basic plans, and priority support for Pro plans.
            </p>
          </li>
        </ul>
        <h3 className="text-[40px] max-sm:text-[32px] mt-6 mb-2 font-bold break-words"></h3>
        <p className="leading-8 text-[17px] font-light">
          <b className="font-bold">Drop us an email:- </b>
          <a className="text-[#057ffa] hover:text-[#66a1db] duration-300 ease-in" href="mailto:hello@nolanai.app">hello@nolanai.app </a>
          <b className="font-bold">For support:- </b>
          <a className="text-[#057ffa] hover:text-[#66a1db] duration-300 ease-in" href="mailto:support@nolanai.app">
            <b className="font-bold">support@nolanai.app</b>
          </a>
        </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
