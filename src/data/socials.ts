import {
  IcFacebook,
  IcTwitter,
  IcInstagram,
  IcTikTok,
} from "@/assets";

type Social = {
  name: string;
  icon: typeof import("*.svg");
};

const socials: Social[] = [
  {
    name: "Facebook",
    icon: IcFacebook,
  },
  {
    name: "Twitter",
    icon: IcTwitter,
  },
  {
    name: "Instagram",
    icon: IcInstagram,
  },
  {
    name: "TikTok",
    icon: IcTikTok,
  },
];

export default socials;
