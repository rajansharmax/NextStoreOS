import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import logo from "@/assets/logoipsum.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { Image } from "antd";
import NavWrapper from './styled';
import { useModal } from "@/lib/utils/ModalContext";
import Button from "@/app/components/common/Button";
import MobileMenu from "./MobileMenu";
import { Container } from "react-bootstrap";
import Link from "next/link";
import routes from "@/config/routes";

const Header = () => {
  const {  } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    const header = document.getElementById("navbar") as HTMLElement;
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }, []);

  return (
    <NavWrapper className="bithu_header" id="navbar">
      <Container>
        <div className="bithu_menu_sect">
          <div className="bithu_menu_left_sect">
            <div className="logo">
              <a href="/">
                <Image src={logo.src} alt="bithu nft logo" />
              </a>
            </div>
          </div>
          <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
            <div className="bithu_menu_list">
              <ul>
                <li>
                  <Link href={routes.home}>Home</Link>
                </li>
                <li>
                  <Link href={routes.about}>About Us</Link>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li className="submenu">
                  <a href="# ">Pages +</a>
                  <div className="sub_menu_sect">
                    <ul className="sub_menu_list">
                      <li>
                        <a href="/">Home One</a>
                      </li>
                      <li>
                        <a href="/home-two">Home Two</a>
                      </li>
                      <li>
                        <a href="/home-three">Home Three</a>
                      </li>
                      <li>
                        <a href="/home-four">Home Four</a>
                      </li>
                      <li>
                        <a href="/home-five">Home Five</a>
                      </li>

                      <li>
                        <a href="/mint-1">Minting Page 1</a>
                      </li>
                      <li>
                        <a href="/mint-2">Minting Page 2</a>
                      </li>
                      <li>
                        <a href="/about">About Us </a>
                      </li>

                      <li>
                        <a href="/collections">Collections</a>
                      </li>
                      <li>
                        <a href="/roadmap">Roadmap</a>
                      </li>
                      <li>
                        <a href="/faq"> FAQs </a>
                      </li>
                      <li>
                        <a href="/coming-soon">Coming Soon</a>
                      </li>
                      <li>
                        <a href="/blogs">Latest Blog</a>
                      </li>
                      <li>
                        <a href="/post">Blog Details</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bithu_menu_btns">
              <Button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </NavWrapper>
  );
};

export default Header;
