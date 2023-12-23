type Faq = {
  title: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    title: "what exactly is beelearn",
    answer:
      "BeeLearn is a bite-size learning platform to learn programming, data structures & algorithm and prepare for the coding interview. BeeLearn also offer exclusive categories such as Blockchain and Web3.",
  },
  {
    title: "Do you provide a free trial?",
    answer: "Yes, BeeLearn allows you to have premium access to our content for 7 days before we start billing.",
  },
  {
    title: "Is there an option to purchase individual courses and packages?",
    answer: "No, BeeLearn provide you a monthly subscription with access to all courses. We provide new, updated contents regularly prioritized for premium users only.",
  },
  {
    title: "Do you provide course completion certificate?",
    answer: "No, but we plan to provide a course completion certificate for all courses in near future. Once you finish the course, the certificate will be generated automatically.",
  },
];

export default faqs;
