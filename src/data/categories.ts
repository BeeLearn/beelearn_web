import {
  IcAr,
  IcBulb,
  IcCloudOps,
  IcDatabase,
  IcDesktop,
  IcEdit,
  IcEmbedded,
  IcMobile,
  IcSecurity,
  IcStatistic,
} from "@/assets";

type Category = {
  name: string;
  icon: typeof import("*.svg");
};

const categories: Category[] = [
  {
    name: "Argument Reality",
    icon: IcAr,
  },
  {
    name: "Technical reasoning",
    icon: IcBulb,
  },
  {
    name: "Dev Ops",
    icon: IcCloudOps,
  },
  {
    name: "Database",
    icon: IcDatabase,
  },
  {
    name: "Web development",
    icon: IcDesktop,
  },
  {
    name: "Content Writing",
    icon: IcEdit,
  },
  {
    name: "Embedded System",
    icon: IcEmbedded,
  },
  {
    name: "Mobile development",
    icon: IcMobile,
  },
  {
    name: "Cybersecurity",
    icon: IcSecurity,
  },
  {
    name: "Data science",
    icon: IcStatistic,
  },
];

export default categories;
