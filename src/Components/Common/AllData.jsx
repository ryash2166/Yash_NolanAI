import {
    MdOutlineDraw,
    MdOutlineEmojiObjects,
    MdOutlineDeveloperBoard,
    MdOutlineThumbUp,
    MdOutlinePsychologyAlt,
    MdOutlineCases,
    MdOutlineFormatAlignCenter,
    MdOutlineWorkspaces,
    MdOutlineUploadFile,
    MdOutlineNewspaper,
    MdOutlinePhotoSizeSelectActual,
    MdOutlineSchedule,
    MdOutlineFormatListBulleted,
    MdOutlineDirectionsRun,
    MdOutlineSavings,
    MdOutlineBolt,
    MdOutlineMovieFilter,
  } from "react-icons/md";
  
  import adam from "../../assets/Testimonials/Adam.png";
  import boubkar from "../../assets/Testimonials/Boubkar.png";
  import bryce from "../../assets/Testimonials/Bryce.png";
  import damarrus from "../../assets/Testimonials/Damarrus.png";
  import damon from "../../assets/Testimonials/Damon.png";
  import daniel from "../../assets/Testimonials/Daniel.png";
  import hj from "../../assets/Testimonials/HJ.png";
  import michael from "../../assets/Testimonials/Michael.png";
  import mike from "../../assets/Testimonials/Mike.png";
  import patrick from "../../assets/Testimonials/Patrick.png";
  import rm from "../../assets/Testimonials/RM.png";
  import sean from "../../assets/Testimonials/Sean.png";
  import thomas from "../../assets/Testimonials/Thomas.png";
  import undercover from "../../assets/Testimonials/Undercover.png";
  import imdb from "../../assets/asset_6.svg";
  import insta from "../../assets/asset_7.svg";
  import world from "../../assets/asset_9.svg";
  import x from "../../assets/asset_31.svg";
  
  export const tabs = [
    {
      title: "Screenwriters",
      content: [
        {
          text: "Write and experiment for free script editor with affordable Premium plans.",
          icon: <MdOutlineDraw className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Avoid writers's blocks with AI-powered suggestions.",
          icon: <MdOutlineEmojiObjects className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Brainstorm with AI to develop story beats and test out scene and character concepts.",
          icon: <MdOutlinePsychologyAlt className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Create scripts that look and feel professional without stressing out about the technicalities.",
          icon: <MdOutlineCases className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Cut down on tedious tasks such as formatting with Built-in automated script formatting.",
          icon: <MdOutlineFormatAlignCenter className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Collaborate with your team, get suggestions and feedback from your peers and colleagues.",
          icon: <MdOutlineWorkspaces className="w-6 h-6 text-[#2c79ea]" />,
        },
      ],
    },
    {
      title: "Producers",
      content: [
        {
          text: "Quickly import and work on existing scripts, streamlining the pre-production process.",
          icon: <MdOutlineUploadFile className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Generate comprehensive production schedules in seconds based on automatic script breakdowns.",
          icon: (
            <MdOutlineFormatListBulleted className="w-6 h-6 text-[#2c79ea]" />
          ),
        },
        {
          text: "Save on multiple tools by getting script scoring and coverage directly within the platform.",
          icon: <MdOutlineNewspaper className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Easily create compelling pitch decks that are directly linked to your script, enhancing the pitch process.",
          icon: <MdOutlineMovieFilter className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Access a vast library of film industry images, including posters and cast member photos, to find the perfect visual representation for your projects.",
          icon: (
            <MdOutlinePhotoSizeSelectActual className="w-6 h-6 text-[#2c79ea]" />
          ),
        },
        {
          text: "Reduce expenses by consolidating several production tools into one efficient platform, cutting down on overhead and increasing productivity.",
          icon: <MdOutlineWorkspaces className="w-6 h-6 text-[#2c79ea]" />,
        },
      ],
    },
    {
      title: "Directors",
      content: [
        {
          text: "Streamline your preparation with our automated breakdown, saving days of manual work and allowing more time for creative decisions.",
          icon: (
            <MdOutlineFormatListBulleted className="w-6 h-6 text-[#2c79ea]" />
          ),
        },
        {
          text: "Benefit from scheduling that's directly linked to your script breakdown, with seamless adjustments as script changes occur, ensuring constant alignment with your production team.",
          icon: <MdOutlineSchedule className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Utilize our impressive storyboard features that assist with detailed camera directions and render high-quality AI-generated images to visualize scenes vividly.",
          icon: <MdOutlineDeveloperBoard className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Gain deep insights with advanced analytics that review your script to identify any gaps or elements that might be missing, enhancing the narrative and technical robustness.",
          icon: <MdOutlineNewspaper className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Facilitate effective communication and instant feedback within your team through an integrated platform designed to keep everyone updated and engaged.",
          icon: <MdOutlineWorkspaces className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Maintain artistic integrity while leveraging technology to refine scenes, enhance pacing, and perfect shot compositions with intuitive tools that support your directorial vision.",
          icon: <MdOutlineThumbUp className="w-6 h-6 text-[#2c79ea]" />,
        },
      ],
    },
  ];
  
  export const items = [
    {
      id: "h-j-grayson",
      name: "H.J. Grayson",
      title: "Writer • Producer • Director",
      review_img_1: imdb,
      review_img_2: insta,
      review_1:
        "There are other AI tools, but NolanAI is creating a space for a mom in Ohio or Thailand who has a story to tell and owns the process in which our story gets made.NolanAI gives folks from all backgrounds a platform to use fundamental tools and technology in a virtual space to create and at least have a fighting chance to be represented. Take your future into your own hands. Then when you can hire those below-the-line crew members or artists then HIRE them. Use your power for good!",
      review_2: "Use your power for good!",
      image: hj,
    },
    {
      id: "boubkar-benzabat",
      name: "Boubkar Benzabat",
      title: "Director of Photography • Editor • Producer • Director",
      review_img_1: imdb,
      review_img_2: world,
      review_1:
        "NOLANAI is the best value-for-money AI tool you can find for preparing and developing your movie. It's exciting to be part of a pioneering adventure that will shape the future of the film industry. The NOLANAI team is dedicated, regularly improving the tools, and they are highly communicative and responsive when it comes to solving any issues users may face. The 'Script Coverage' and 'Plot Hole' tools are like a compass, helping identify the most critical problems in your script. But what impresses me most is the Pitch Deck creator tool. I used to hate creating Pitch Decks, but NOLANAI makes it fun, easy, fast, and creative!",
      image: boubkar,
    },
    {
      id: "michael-d-korolenko",
      name: "Michael D. Korolenko",
      title: "Writer • Producer • Director",
      review_img_1: imdb,
      review_1:
        "I am incredibly pleased with NolanAI for scriptwriting—so much so that I'm recommending it to my college scriptwriting class.",
      review_2:
        "NolanAI offers script editing capabilities, catching spelling and grammar mistakes like most good scriptwriting software. But what truly sets it apart is its Script Coverage. The feedback is incredibly in-depth and almost unbelievable that it's done by AI. Having dealt with script “readers” in the past, I know how often they skim through scripts or make inaccurate comparisons (one famously compared my alternate-present screenplay to “Back to the Future,” even though my story had no time travel). NolanAI's Script Coverage avoids all that nonsense. And it's not like HAL 9000 rewriting your screenplay. Once the script coverage is done and the changes are suggested, then the real work begins and it's often a lot of work but well worth it.",
      review_3:
        "The higher-tier subscriptions of NolanAI include fantastic features like image generation and storyboarding, which are well worth the investment. Overall, it's the perfect scriptwriting software for me. The storyboarding, character and bio generation features are outstanding. The AI-generated character profile for Alexandra, one of my characters, impressed both me and my colleague.",
      review_4:
        "The Script Editor allows writers to refine their scripts directly within the platform, and the Script Doctor tool offers scene-by-scene feedback, highlighting strengths and weaknesses, with suggestions that enhance your screenplay without taking over. You're free to use the suggestions or ignore them, but many are spot-on for crafting a final draft you can confidently send to a studio.",
      image: michael,
    },
    {
      id: "r-m-reel-whisperer",
      name: "R.M - Reel Whisperer",
      title: "Producer",
      review_1:
        "NolanAI has transformed the way I produce films. The script breakdown and scheduling features have automated tedious tasks, allowing my team to focus on what truly matters-making the movie. The efficiency and transparency brought by NolanAI has saved us time and resources and allowed us to places those resources back into production. Every little bit counts and we have felt the ease of burden on our below the line. As a producer in Bollywood, managing productions is a constant challenge, NolanAI has become an indispensable part of my workflow. R.M!",
      image: rm,
    },
    {
      id: "sean-kael-williams",
      name: "Sean Kael williams",
      title: "Actor • Writer • Producer",
      review_img_1: imdb,
      review_img_2: insta,
      review_1:
        "I saw posts about NolanAI on Instagram and did the free trial to give it a try. So far it's been fantastic especially if I'm stuck with writing. The coverage has helped me with trying to figure out plot holes in my screenplays. The feature I have been most impressed with is the pitch deck builder. What usually takes me weeks now takes a day.",
      review_2: "The amount of time it has saved me has been game changing.",
      image: sean,
    },
    {
      id: "undercover-director",
      name: "Undercover Director 🎥",
      title: "Director",
      review_1:
        "On the current film I am directing we have been using NolanAI in ways that even theirI team was surprised to hear about. The automated storyboard generation in particular. Of course we used it for my storyboarding of the film as a first go but our department heads have been using it to come up with their own unique and creative ideas for the film. Art department. Set design. Hair and makeup as well as my DP. We are all messing around with it and as a result have had an explosion of ideas and creativity. With all the fear, apprehension of new technology, and too many options offering too little, NolanAI has been a fresh and exciting new face. Even allowing me to explore innovative suggestions for camera angles and scene compositions that elevate the visual storytelling of my film. The pitch deck and coverage features were excellent in development, but we have also been using them onset to explore on the day and in the moment possibilities. Creatively liberating to use. I am thrilled to see where this goes.",
      image: undercover,
    },
    {
      id: "thomas-beaudoin",
      name: "Thomas Beaudoin",
      title: "Actor • Writer • Producer • Director",
      review_img_1: imdb,
      review_img_2: x,
      review_1:
        "Artificial Intelligence accessible to the public has recently been at the forefront of artistic discussions, and with good reason. The concerns about its impact are valid. This is where NolanAI steps in with an ethical approach in the realm of filmmaking. NolanAI's ability to break down scripts at incredible speed significantly enhances time efficiency for writers. Its comprehensive script coverage is a fantastic tool that helps filmmakers identify and refine areas that may need attention by providing subjective yet specific insights. It even catches the subtext, deeper meanings and hidden metaphors intended by the writer. That said, with or without AI, as independent artists in the industry, the ultimate goal is to be as productive as possible on our own which then propels us to team up with like-minded creatives, because filmmaking is, and will always remain, a collaborative art form. NolanAI is that convenient “assistant”, eager to help you achieve that.",
      image: thomas,
    },
    {
      id: "patrick-muldoon",
      name: "Patrick Muldoon",
      title: "Actor • Producer • Writer",
      review_img_1: imdb,
      review_1:
        "As an actor having a script breakdown is a priceless commodity. Understanding the relationships between characters and how they interact with the story determines how I will navigate a role. NolanAI makes it easy. It streamlines the detective work that is needed for me to give the story and character what it deserves. As a producer, NolanAI has been a lifesaver in coverage. I am able to get a detailed analysis of a script in seconds that is absent of biases, prejudices or otherwise subjective input. I need to know if the structure is sound, if the story is coherent, and if the characters are three dimensional. From the scoring, breakdown, and feedback provided by NolanAI, I can save precious time and I get right into the nuts and bolts of development. Moving from development to pre production, the features of coverage, schedule, treatment, pitch deck and storyboard have been not only cost savers but creative amplifiers that have enabled deeper conversations between department heads. The clarity of artistic vision on projects using NolanAI has been crystal clear.",
      image: patrick,
    },
    {
      id: "adam-g-simon",
      name: "Adam G. Simon",
      title: "Writer • Producer • Actor",
      review_img_1: imdb,
      review_img_2: insta,
      review_1:
        "NolanAI has completely revolutionized the way I go from script to screen—it's not just a tool; it's my creative partner.",
      review_2:
        "This platform has schooled me on the entire filmmaking process beyond just my role as a writer and producer. Thanks to its awesome co-piloting feature, I've smashed through writer's block and sparked epic collaborations with other writers. Nolan's script coverage is a game-changer, spotting plot holes and fine-tuning character arcs like nothing else. And while the storyboard, deck creation, and budgeting tools are still growing, they're already starting to flip the script on Hollywood's old-school power dynamics. It's more than disruptive—it's a badass movement back to the creators. Seriously, it's a no-brainer: if you're not using Nolan, you're missing out.",
      review_3:
        "I recommend it to everyone looking to make their mark as a storyteller.",
      image: adam,
    },
    {
      id: "damarrus-grant",
      name: "Damarrus Grant",
      title: "Actor • Director • Writer",
      review_img_1: imdb,
      review_img_2: insta,
      review_1:
        "I believe that NolanAI will serve as a pioneer in producing the next generation of screenwriters. The software serves as a co-pilot for your ideas, enhances creativity, and allows you to complete a polished script in no time! My experience in using NolanAI has been wonderful thus far. They also have excellent support staff and technical support who are also excited about helping you to navigate your Nolan Ai experience with ease and comfort!",
      review_2: "Thank you again!",
      image: damarrus,
    },
    {
      id: "daniel-farag",
      name: "Daniel Farag",
      title: "Actor • Producer • Writer",
      review_img_1: imdb,
      review_img_2: insta,
      review_1:
        "So far when I use NolanAi, I feel like I've stepped into the future.",
      review_2:
        "Basically a one stop tool for writers/directors/producers..from aspiring to veteran.",
      review_3:
        "With a few clicks and in some cases in seconds, I get coverage, script notes, story boards..even a shooting schedule.",
      review_4: "An amazing application. I'm excited to watch it's evolution.",
      image: daniel,
    },
    {
      id: "damon-h-chung",
      name: "Damon H. Chung",
      title: "Cinematographer • Producer",
      review_img_1: imdb,
      review_img_2: world,
      review_1:
        "NolanAI has been a transformative tool for my pre-production process. The automatic script breakdown and scheduling features not only streamline our pre-production but also significantly saves time for the assistant directors, allowing for a more efficient planning phase. The coverage report is equally impressive, providing a quick yet thorough screening of projects, which is crucial in deciding which scripts warrant a deeper look.",
      review_2:
        "NolanAI has not only revolutionized our workflow but also enhanced our decision-making process with its innovative features. It's not just a tool; it's a vital asset that keeps you competitive in the fast-paced world of production. Embrace it, and you'll never be left behind.",
      image: damon,
    },
    {
      id: "bryce-hirscherg",
      name: "Bryce Hirschberg",
      title: "Director • Writer • Editor • Actor",
      review_img_1: imdb,
      review_img_2: insta,
      review_1: "As an independent filmmaker, NolanAI makes life so much easier.",
      review_2:
        "From ironing out my story ideas, to creating a pitch deck, to doing ALL of my pre-production, it is the most advanced, AI enhanced, all in one production assistant.",
      review_3: "Wearing multiple hats has never been more fun.",
      image: bryce,
    },
    {
      id: "mike-wech",
      name: "Mike Wech",
      title: "Producer • Editor • Writer",
      review_img_1: imdb,
      review_1: "NolanAI has the ability to be a game changer for producers.",
      review_2:
        "What used to take days could soon take hours and the technology is constantly improving. I was happy that the developers were quick to address the issues and eager to learn how the program can become more efficient for producers.",
      review_3:
        "The incorporated new features that we asked for and are eager to help filmmakers streamline production.",
      review_4: "Highly recommended.",
      image: mike,
    },
  ];
  
  export const features = [
    {
      icon: <MdOutlineDirectionsRun />,
      title: "90% Faster",
      subtitle: "Speed Through Project Completion",
    },
    {
      icon: <MdOutlineSavings />,
      title: "80% Lower Costs",
      subtitle: "Halve Your Expenses",
    },
    {
      icon: <MdOutlineBolt />,
      title: "Exceptional Quality",
      subtitle: "Surpass the Highest Industry Standards",
    },
  ];
  
  export const AiFeature = [
    {
      to: "/features",
      icon: {},
    },
  ];
  

//   Pricing Data

export const toggleOptions = [
    { value: "monthly", label: "Monthly" },
    {
      value: "quarterly",
      label: "Every 3 months",
      badge: "10% off",
      badgeColor: "rgb(218, 136, 19)",
    },
    {
      value: "annually",
      label: "Annually",
      badge: "30% off",
      badgeColor: "rgb(100, 156, 7)",
    },
  ];
  
  export const tabsData = {
    monthly: [
      {
        title: "Basic",
        description:
          "Kickstart your writing adventure with basic tools to explore NolanAI.",
        price: "$0",
        features: [
          "Basic Writing Tools",
          "Limited access to story development features",
          "AI Requests with a 30-day usage period",
        ],
      },
      {
        title: "Creator",
        description:
          "Enhance productivity with unlimited access to essential writing tools.",
        discountedPrice: "$40",
        billingInfo: "Billed Monthly",
        featureTitle: "Everything included in Basic, plus :",
        features: [
          "Core writing tools without limitation",
          "Basic pre production tools",
          "Unlimited AI request and images",
        ],
      },
      {
        title: "Pro",
        description:
          "Amplify your process efficiency with our full pre-production automated suite",
        discountedPrice: "$100",
        billingInfo: "Billed Monthly",
        featureTitle: "Everything included in Creator, plus :",
        features: [
          "Advance writing tools with analytics",
          "Automated pre production suite",
          "Premium quality images",
        ],
      },
    ],
    quarterly: [
      {
        title: "Basic",
        description:
          "Kickstart your writing adventure with basic tools to explore NolanAI.",
        price: "$0",
        features: [
          "Basic Writing Tools",
          "Limited access to story development features",
          "AI Requests with a 30-day usage period",
        ],
      },
      {
        title: "Creator",
        description:
          "Enhance productivity with unlimited access to essential writing tools.",
        discountedPrice: "$108",
        price: "$120",
        billingInfo: "Billed every 3 months",
        featureTitle: "Everything included in Basic, plus :",
        features: [
          "Core writing tools without limitation",
          "Basic pre production tools",
          "Unlimited AI request and images",
        ],
      },
      {
        title: "Pro",
        description:
          "Amplify your process efficiency with our full pre-production automated suite",
        price: "$300",
        discountedPrice: "$270",
        billingInfo: "Billed every 3 months",
        featureTitle: "Everything included in Creator, plus :",
        features: [
          "Advance writing tools with analytics",
          "Automated pre production suite",
          "Premium quality images",
        ],
      },
    ],
    annually: [
      {
        title: "Basic",
        description:
          "Kickstart your writing adventure with basic tools to explore NolanAI.",
        price: "$0",
        features: [
          "Basic Writing Tools",
          "Limited access to story development features",
          "AI Requests with a 30-day usage period",
        ],
      },
      {
        title: "Creator",
        description:
          "Enhance productivity with unlimited access to essential writing tools.",
        price: "$480",
        discountedPrice: "$336",
        billingInfo: "Billed Annually",
        featureTitle: "Everything included in Basic, plus :",
        features: [
          "Core writing tools without limitation",
          "Basic pre production tools",
          "Unlimited AI request and images",
        ],
      },
      {
        title: "Pro",
        description:
          "Amplify your process efficiency with our full pre-production automated suite",
        price: "$1200",
        discountedPrice: "$840",
        billingInfo: "Billed Annually",
        featureTitle: "Everything included in Creator, plus :",
        features: [
          "Advance writing tools with analytics",
          "Automated pre production suite",
          "Premium quality images",
        ],
      },
    ],
  };
  
  export const featuresData = [
    {
      title: "Unlimited Projects and Scripts",
      subtitle:
        "Create as many projects and scripts as you want without limitation.",
      basic: { true: true, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Automatic Cloud sync and Backup",
      subtitle: "",
      basic: { true: true, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "History",
      subtitle: "Access previous versions of your scripts.",
      basic: { true: true, text: "Last 3 days" },
      creator: { true: true, text: "Last 90 days" },
      pro: { true: true, text: "" },
    },
    {
      title: "Brainstorming",
      subtitle: "Brainstorm with Nolan: Ask Questions on Screenplay Writing.",
      basic: { true: true, text: "Basic AI 100 request" },
      creator: { true: true, text: "Basic AI unlimited requests" },
      pro: { true: true, text: "PRO AI unlimited requests" },
    },
    {
      title: "Co Pilot/AI requests",
      subtitle: "Ask AI change accent, continue dialogue, change ton of text.",
      basic: { true: true, text: "Basic AI 30 request" },
      creator: {
        true: true,
        text: "Unlimited BASIC AI requests. Co-Pilot will analyze twice as much content as Free and Basic Plans.",
      },
      pro: {
        true: true,
        text: "Unlimited PRO AI requests. Co-Pilot will analyze twice as much content as Free and Basic Plans.",
      },
    },
    {
      title: "AI Image Generations",
      subtitle: "Draw Scenes and Characters.",
      basic: { true: true, text: "5 request" },
      creator: { true: true, text: "Unlimited" },
      pro: { true: true, text: "Unlimited" },
    },
    {
      title: "PDF and Final Draft export",
      subtitle: "",
      basic: { true: true, text: "Watermarked" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Script Sharing",
      subtitle: "",
      basic: { true: true, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Storyboard",
      subtitle: "Automated storyboard.",
      basic: {
        true: true,
        text: "Up to five frames per scene and no AI sketches.",
      },
      creator: { true: true, text: "Basic AI sketches" },
      pro: { true: true, text: "PRO AI sketch all scenes with one click" },
    },
    {
      title: "Scheduling",
      subtitle:
        "Automatically sorts your stripboard in the most efficient way for shooting..",
      basic: { true: true, text: "1 script" },
      creator: { true: true, text: "Unlimited scripts" },
      pro: {
        true: true,
        text: "Unlimited scripts + Scene Shooting Duration Estimations",
      },
    },
    {
      title: "Shot List",
      subtitle:
        "Effortlessly organize your shooting plan with shot lists linked to scheduling and storyboarding.",
      basic: { true: true, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "PDF and Final Draft import",
      subtitle: "",
      basic: { true: true, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Screenplay Title Generations",
      subtitle: "",
      basic: { true: false, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Script Doctor",
      subtitle:
        "Improve, refine, and fix your script—from formatting to pacing and beyond.",
      basic: { true: false, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Script Breakdown",
      subtitle: "Break down your script with one click",
      basic: { true: true, text: "1 script" },
      creator: {
        true: true,
        text: "Unlimited scripts and Semi-Automatic Script Breakdown",
      },
      pro: {
        true: true,
        text: "Unlimited scripts + Automatic Script Breakdown: Break down the whole script within a few minutes.",
      },
    },
    {
      title: "ColLab: Virtual Writers' Room",
      subtitle:
        "Invite others to join NolanAI and co-write and edit scripts seamlessly.",
      basic: { true: true, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Create Scene",
      subtitle:
        "Import your scene's beat sheet and let Nolan generate the initial draft of your scene.",
      basic: { true: false, text: "" },
      creator: { true: true, text: "Basic AI Unlimited scenes" },
      pro: { true: true, text: "PRO AI Unlimited scenes" },
    },
    {
      title: "Plot Hole Detection Report",
      subtitle:
        "Enhance your storytelling by improving narrative consistency with our analysis tool.",
      basic: { true: false, text: "" },
      creator: { true: false, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Script Coverage Report",
      subtitle: "",
      basic: { true: false, text: "" },
      creator: { true: false, text: "" },
      pro: { true: true, text: "" },
    },
    {
      title: "Pitch Deck",
      subtitle:
        "Ultimate tool for filmmakers looking to create professional-quality pitch decks",
      basic: { true: true, text: "" },
      creator: { true: true, text: "" },
      pro: { true: true, text: "PRO templates and elementss" },
    },
  ];
  