import React from "react";
import Carousel from "../Common/Slider";

const PricingSlider = () => {
  const items = [
    {
      name: "H.J. Grayson",
      title: "Writer • Producer • Director",
      review_img_1: "/src/assets/asset_6.svg",
      review_img_2: "/src/assets/asset_7.svg",
      review_1:
        "There are other AI tools, but NolanAI is creating a space for a mom in Ohio or Thailand who has a story to tell and owns the process in which our story gets made.NolanAI gives folks from all backgrounds a platform to use fundamental tools and technology in a virtual space to create and at least have a fighting chance to be represented. Take your future into your own hands. Then when you can hire those below-the-line crew members or artists then HIRE them. Use your power for good!",
      review_2: "Use your power for good!",
      image: "/src/assets/HJ.png",
    },
    {
      name: "Boubkar Benzabat",
      title: "Director of Photography • Editor • Producer • Director",
      review_img_1: "/src/assets/asset_6.svg",
      review_img_2: "/src/assets/asset_9.svg",
      review_1:
        "NOLANAI is the best value-for-money AI tool you can find for preparing and developing your movie. It's exciting to be part of a pioneering adventure that will shape the future of the film industry. The NOLANAI team is dedicated, regularly improving the tools, and they are highly communicative and responsive when it comes to solving any issues users may face. The 'Script Coverage' and 'Plot Hole' tools are like a compass, helping identify the most critical problems in your script. But what impresses me most is the Pitch Deck creator tool. I used to hate creating Pitch Decks, but NOLANAI makes it fun, easy, fast, and creative!",
      image: "/src/assets/boubkar.jpeg",
    },
    {
      name: "Michael D. Korolenko",
      title: "Writer • Producer • Director",
      review_img_1: "/src/assets/asset_6.svg",
      review_img_2: "/src/assets/asset_9.svg",
      review_1:
        "I am incredibly pleased with NolanAI for scriptwriting—so much so that I'm recommending it to my college scriptwriting class.",
      review_2:
        "NolanAI offers script editing capabilities, catching spelling and grammar mistakes like most good scriptwriting software. But what truly sets it apart is its Script Coverage. The feedback is incredibly in-depth and almost unbelievable that it's done by AI. Having dealt with script “readers” in the past, I know how often they skim through scripts or make inaccurate comparisons (one famously compared my alternate-present screenplay to “Back to the Future,” even though my story had no time travel). NolanAI's Script Coverage avoids all that nonsense. And it's not like HAL 9000 rewriting your screenplay. Once the script coverage is done and the changes are suggested, then the real work begins and it's often a lot of work but well worth it.",
      review_3:
        "The higher-tier subscriptions of NolanAI include fantastic features like image generation and storyboarding, which are well worth the investment. Overall, it's the perfect scriptwriting software for me. The storyboarding, character and bio generation features are outstanding. The AI-generated character profile for Alexandra, one of my characters, impressed both me and my colleague.",
      review_4:
        "The Script Editor allows writers to refine their scripts directly within the platform, and the Script Doctor tool offers scene-by-scene feedback, highlighting strengths and weaknesses, with suggestions that enhance your screenplay without taking over. You’re free to use the suggestions or ignore them, but many are spot-on for crafting a final draft you can confidently send to a studio.",
      image: "/src/assets/michael.jpeg",
    },
  ];

  return <Carousel item={items} />;
};

export default PricingSlider;
