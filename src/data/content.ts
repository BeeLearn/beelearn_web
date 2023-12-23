import { IlFun, IlContent, IlReward, IlMotivation } from "@/assets";

type Reason = {
  title: string;
  subtitle: string;
  content: string;
  illustration: typeof import("*.svg");
};

export const learnerChoiceReasons: Reason[] = [
  {
    title: "free, fun and effective",
    subtitle: "",
    content:
      "Learning with BeeLearn is fun, and reviews shows that it works! With quick, bite-sized lessons, you'l earn points and unlock new levels while gaining real-world programming skills.",
    illustration: IlFun,
  },
  {
    title: "backed by AI",
    subtitle: "",
    content:
      "We use a combination of research-backed teaching methods and delightful content to create courses. Our AI model helps personalize course contents for you that effectively teach you how to code, solve technical problems and more!",
    illustration: IlContent,
  },
  {
    title: "stay motivated",
    subtitle: "",
    content: "We make it easy to form a habit of coding with friendly competitions, fun challenges, and reminders via  push notifications.",
    illustration: IlMotivation,
  },
  {
    title: "get reward",
    subtitle: "",
    content: "Get reward for completing tasks and join the weekly leader-board to measure how dedicated you are to learning.",
    illustration: IlReward,
  },
];
