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
