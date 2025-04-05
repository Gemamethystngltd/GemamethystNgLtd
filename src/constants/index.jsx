import { v4 as uuidv4 } from "uuid";
import stats from "../assets/icons/bar-chart.png";
import horn from "../assets/icons/bullhorn.png";
import vector from "../assets/icons/vector.png";
import ux from "../assets/icons/web-design.png";
import branding from "../assets/icons/branding.png";
import web from "../assets/icons/web-programming.png";
import cer from "../assets/icons/certificate.png";

// pdf importsd
import pdf1 from "../assets/pdf/PRINCIPLES OF DISEASE CONTROL AND USES OF EPIDEMIOLOGY.pdf";

// porfolio imports:
import bg1 from "../assets/images/xwork-1.jpg.pagespeed.ic.ll4YaSK4EN.jpg";
import bg2 from "../assets/images/xwork-2.jpg.pagespeed.ic.r-iPsMtsGp.jpg";
import bg3 from "../assets/images/xwork-3.jpg.pagespeed.ic.KnEiS52Z3l.jpg";
import bg4 from "../assets/images/xwork-4.jpg.pagespeed.ic.LMea4nnNOz.jpg";
import bg5 from "../assets/images/xwork-7.jpg.pagespeed.ic.SotmrmTuoS.jpg";
import bg6 from "../assets/images/xwork-8.jpg.pagespeed.ic.kEJc9g0qrQ.jpg";

// testimonia imports:
import Avatar1 from "../assets/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg";
import Avatar2 from "../assets/images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg";
import Avatar3 from "../assets/images/xstaff-1.jpg.pagespeed.ic.eGaw1QpE70.jpg";

// blog sevtion imports
import img1 from "../assets/images/ximage_1.jpg.pagespeed.ic.2BInOJMs0v.jpg";
import img2 from "../assets/images/ximage_2.jpg.pagespeed.ic.fDt7QyzCfC.jpg";
import img3 from "../assets/images/ximage_3.jpg.pagespeed.ic.CzImA-z_Ch.jpg";
import img4 from "../assets/images/xwork-9.jpg.pagespeed.ic.BYds7aMzrK.jpg";
// import img5 from "../assets/images/xwork-8.jpg.pagespeed.ic.kEJc9g0qrQ.jpg";
// import img6 from "../assets/images/xwork-7.jpg.pagespeed.ic.SotmrmTuoS.jpg";
// import img7 from "../assets/images/ximage_4.jpg.pagespeed.ic.9VUxuBaVRa.jpg";

//content datat fro the faqs sectioin
export const faqs = [
  {
    question: "How to fix a problem?",
    answer: [
      "Be calm",
      "Understand the source of the problem",
      "Think outside the box",
      " Be a team player, so the problem is solved faster",
      "Appreciate everyone for the solutions offered.",
    ],
  },
  {
    question: "How to manage your Website?",
    answer: [
      "What is your target audience",
      "What is your brand saying",
      " How should your customers feel when they are on your website",
      " Your website should be updated quarterly",
    ],
  },
  {
    question: "How to grow your investments funds?",
    answer: [
      "Do not rush into investments",
      "Understand what the market is saying",
      "Read all terms and conditions before signing any form of agreement",
      " Start small",
      "Think big",
    ],
  },
  {
    question: "   What are those requirements for businesses?",
    answer: [
      "Major requirement to start a business is the idea,a thorough research must be carried out in order to have a realistic feasible study. Team members- people to help actualize those plans with actions. For proper and legal acknowledgement of the idea CAC registration is required.",
    ],
  },
];

export const services = [
  {
    text: " Gemamethyst Academy",
    serviceicon: cer,
  },
  {
    text: " Engineering Designs",
    serviceicon: horn,
  },
  {
    text: " Digital Products",
    serviceicon: horn,
  },

  {
    text: "Online Marketing",
    serviceicon: stats,
  },
  {
    text: " Graphic Designs",
    serviceicon: vector,
  },
  {
    text: " Application Development",
    serviceicon: branding,
  },
  {
    text: " Web Development",
    serviceicon: web,
  },
  {
    text: " UX/UI Design",
    serviceicon: ux,
  },
];

export const porfolio = [
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg1,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg2,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg3,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg4,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg5,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg6,
  },
];

export const testimonials = [
  {
    quote:
      "AIworksquad has been a game-changer for my business. Their virtual assistants have helped me manage complex projects, handle customer queries, and reduce costs.",
    name: "Larry Devis",
    title: "SWE Owner",
    img: Avatar1,
  },
  {
    quote:
      "AIworksquad's state-of-the-art technology has helped me stay ahead of the competition. Their AI-powered virtual assistant has enabled me to automate tasks, reduce errors, and enhance efficiency.",
    name: "Rajiv Manohar",
    title: "SWE Owner",
    img: Avatar2,
  },
  {
    quote:
      "Since partnering with AIworksquad, I've seen a significant improvement in my business's productivity. Their AI-powered technology has helped me save time and make informed decisions.",
    name: "Lynda",
    title: "SWE Owner",
    img: Avatar3,
  },
  {
    quote:
      "Since partnering with AIworksquad, I've seen a significant improvement in my business's productivity. Their AI-powered technology has helped me save time and make informed decisions .",
    name: "Larry Davis",
    title: "SWE Owner",
    img: Avatar1,
  },
];

export const blogspost = [
  {
    img: img1,
    title: "Marketing Strategies for Digital Ecosystem",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
  {
    img: img2,
    title: "Marketing Strategies for Digital Ecosystem",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
  {
    img: img3,
    title: "Marketing Strategies for Digital Ecosystem",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
];

// blog post data export

export const blogspostlong = [
  {
    id: uuidv4(),
    img: img1,
    title: "Marketing Strategies for Digital Ecosystem",
    description:
      "Explore effective marketing techniques in today’s digital-first economy.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "In the fast-evolving world of digital marketing, businesses must adapt to stay ahead. This article explores effective strategies to grow your brand in the Nigerian digital ecosystem.",
        subHeader: "Key Strategies to Adopt:",
        sublists: [
          "Leverage social media platforms like TikTok and Instagram to reach younger demographics.",
          "Use influencer partnerships to increase brand credibility and visibility.",
          "Optimize content for mobile users, who make up a majority of Nigeria's internet traffic.",
        ],
        conclusion:
          "By embracing these strategies, businesses can increase their online visibility, connect better with their audience, and thrive in the digital age.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img2,
    title: "The Rise of E-commerce in West Africa",
    description:
      "Discover how online shopping is reshaping the retail landscape in Nigeria.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "E-commerce is transforming how West Africans shop, with Nigeria leading the charge. This article looks at trends, challenges, and opportunities in the growing online retail market.",
        subHeader: "What’s Driving Growth:",
        sublists: [
          "Increased smartphone penetration and internet access.",
          "The emergence of local e-commerce platforms like Jumia and Konga.",
          "Adoption of fintech solutions for seamless online payments.",
        ],
        conclusion:
          "With supportive policies and continued innovation, Nigeria's e-commerce sector is poised to become a major driver of economic growth.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img3,
    title: "Harnessing Data Analytics for Business Success",
    description:
      "Data is the new oil—see how Nigerian firms are using it to win big.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Data analytics is no longer optional for Nigerian companies looking to scale. This article uncovers how insights from data are helping businesses make informed decisions.",
        subHeader: "Why It Matters:",
        sublists: [
          "Enables businesses to understand customer behavior more clearly.",
          "Drives targeted marketing efforts and cost savings.",
          "Improves product development and delivery efficiency.",
        ],
        conclusion:
          "With the right tools and talent, businesses in Nigeria can turn data into powerful decision-making assets.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img4,
    title: "Digital Transformation in Nigerian Healthcare",
    description:
      "From electronic records to AI diagnostics, tech is changing health outcomes.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "The integration of digital solutions in healthcare is revolutionizing patient care in Nigeria. This article explores how technology is improving diagnostics, access, and service delivery.",
        subHeader: "Breakthroughs in HealthTech:",
        sublists: [
          "AI-powered diagnostics for faster disease detection.",
          "Telemedicine services bridging the urban-rural health gap.",
          "Digital record keeping for better patient history management.",
        ],
        conclusion:
          "As the Nigerian health sector continues to digitize, patients and professionals alike are experiencing better, faster, and more reliable care.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img3,
    title: "How Fintech Is Driving Financial Inclusion in Nigeria",
    description:
      "Mobile money and digital banks are reshaping Nigeria’s financial system.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Over the past decade, fintech has emerged as a major force in Nigeria's economy, offering access to banking services for millions previously excluded.",
        subHeader: "Fintech Impact Areas:",
        sublists: [
          "Mobile wallets like OPay and PalmPay providing easy payments.",
          "Lending platforms offering microloans without traditional banks.",
          "Increased financial literacy through digital education initiatives.",
        ],
        conclusion:
          "Fintech is helping to bridge the economic divide, allowing more Nigerians to participate in the formal economy.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img1,
    title: "EdTech Revolution: Learning in the Digital Age",
    description:
      "Explore how online education platforms are empowering Nigerian youth.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "The rise of EdTech is transforming education access and quality in Nigeria. With internet-enabled tools, students from any region can now learn from top educators.",
        subHeader: "Digital Learning Tools:",
        sublists: [
          "E-learning platforms like uLesson and AltSchool Africa.",
          "Interactive tools for STEM learning and coding.",
          "Virtual classrooms enabling remote learning during school closures.",
        ],
        conclusion:
          "Digital education empowers young Nigerians with skills needed to thrive in the global knowledge economy.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img2,
    title: "Greentech: Nigeria’s Path to a Sustainable Future",
    description:
      "Can Nigeria lead Africa’s green energy shift? Let’s explore the trends.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Climate change and energy shortages are forcing Nigeria to rethink its energy approach. Green technology may be the answer.",
        subHeader: "Sustainable Solutions Emerging:",
        sublists: [
          "Solar panel initiatives in rural communities.",
          "Eco-friendly startups producing biodegradable products.",
          "Government incentives for renewable energy adoption.",
        ],
        conclusion:
          "Greentech not only addresses climate change but also creates jobs and innovation opportunities.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img2,
    title: "The Remote Work Culture in Nigeria",
    description:
      "Remote jobs are becoming the norm—how can Nigerians prepare and thrive?",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "The global shift toward remote work has impacted Nigeria’s job market. More companies are now hiring remotely, even across borders.",
        subHeader: "Keys to Remote Success:",
        sublists: [
          "Build strong digital skills and an online portfolio.",
          "Invest in a stable internet connection and workspace.",
          "Join global freelancing platforms like Upwork and Fiverr.",
        ],
        conclusion:
          "Remote work opens global opportunities for Nigerians, especially in tech, writing, and design.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img4,
    title: "Cybersecurity Awareness in Nigeria",
    description:
      "Staying safe online is more important than ever. Here's what you should know.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Cybercrime in Nigeria is growing fast. From scams to ransomware attacks, awareness is key for businesses and individuals alike.",
        subHeader: "Steps to Stay Protected:",
        sublists: [
          "Enable two-factor authentication on all accounts.",
          "Use antivirus software and keep systems updated.",
          "Be cautious of phishing emails and suspicious links.",
        ],
        conclusion:
          "With basic security habits, Nigerians can protect their digital identities and financial assets.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img1,
    title: "The Creator Economy in Africa: A Rising Force",
    description:
      "Meet the new generation of Nigerian creators monetizing content online.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Thanks to platforms like YouTube, TikTok, and Substack, Nigerian creatives are turning talent into thriving businesses.",
        subHeader: "Opportunities for Creators:",
        sublists: [
          "Monetize content via ads, brand deals, and fan subscriptions.",
          "Use platforms like Paystack and Flutterwave for donations and sales.",
          "Collaborate with international creators to grow your audience.",
        ],
        conclusion:
          "The digital creator economy is offering Nigerians new, scalable paths to income and influence.",
      },
    ],
  },
];

export const porfoliolong = [
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg1,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg2,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg3,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg4,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg5,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg2,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg4,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg1,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg5,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg2,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg5,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg1,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg4,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg2,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg6,
  },
];

// contact page data
export const contacData = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Address",
    description: "Omu-Aran",
  },
  {
    icon: "fa-solid fa-phone",
    title: "Phone",
    description: "+234 815 9531 614",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    description: "amethystngltd@gmail.com",
  },
  {
    icon: "fa-solid fa-earth-americas",
    title: "Website",
    description: "Gemamethystng",
  },
];
