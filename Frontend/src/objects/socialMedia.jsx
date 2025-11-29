import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

import { X, WhatsApp } from "@mui/icons-material";

export const socialMedia = [
  {
    icon: <FacebookIcon />,
    color: "#1877F2",
    name: "Facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    icon: <X />,
    color: "#000000",
    name: "X",
    url: "https://twitter.com/intent/tweet?url=",
  },
  {
    icon: <LinkedInIcon />,
    color: "#0A66C2",
    name: "LinkedIn",
    url: "https://www.linkedin.com/shareArticle?mini=true&url=",
  },
  { icon: <InstagramIcon />, color: "#C13584", name: "Instagram", url: "#" },
  {
    icon: <WhatsApp />,
    color: "#25D366",
    name: "WhatsApp",
    url: "https://wa.me/?text=",
  },
];
