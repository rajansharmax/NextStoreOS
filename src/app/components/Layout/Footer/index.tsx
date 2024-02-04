import FooterStyleWrapper from "./styled";
import { Image } from "react-bootstrap";
import image from '@/assets/images/logo.png'
import FooterLinks from "@/assets/data/footer/FooterLinks";
import FooterBottom from "./Footerbottom";

const Footer = () => {
  return (
    <FooterStyleWrapper>
      <div className="top-footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer_image">
                <a href="# ">
                  <Image src={image.src} alt="bithu nft footer logo" />
                </a>
                <p>
                  Bithu is great solution for launch your NFT for minting. It
                  uses a dictionary over 200 Latin words, combined with a
                  handful.
                </p>
              </div>
            </div>

            {FooterLinks?.map((menu, i) => (
              <div key={i} className=" col-sm-6 col-md-3 col-lg-2 link-widgets">
                <div className="footer-menu">
                  <h5 className="menu-title">{menu.widgetName}</h5>
                  <ul className="menu-list">
                    {menu.items?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-md-6 col-lg-4">
              <div className="footer-menu footer_newsletter">
                <h5 className="menu-title">Subscribe Newsletter</h5>
                <div className="form-box">
                  <input
                    type="text"
                    name="text"
                    placeholder="Email address"
                    required
                  />
                  <button>
                    <Image src={'/images/blog/arrow-icon.png'} alt="bithu nft arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </FooterStyleWrapper>
  );
};

export default Footer;
