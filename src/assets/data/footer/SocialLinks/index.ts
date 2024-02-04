import { TwitterOutlined } from "@ant-design/icons";

import openseaIcon from "@/assets/images/icon/opensea.svg";
import mediumIcon from "@/assets/images/icon/med.svg";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import React from "react";

const SocialLinks = [
  {
    thumb: openseaIcon,
    url: "#",
  },
  {
    icon: React.createElement(TwitterOutlined),
    url: "#",
  },
  {
    icon: React.createElement(FaLinkedinIn),
    url: "#",
  },
  {
    icon: React.createElement(FaFacebook),
    url: "#",
  },
  {
    icon: React.createElement(FaInstagram),
    url: "#",
  },
  {
    icon: React.createElement(FaTelegramPlane),
    url: "#",
  },
  {
    thumb: mediumIcon,
    url: "#",
  },
];

export default SocialLinks;
