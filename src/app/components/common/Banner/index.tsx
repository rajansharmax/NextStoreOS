import { Breadcrumb, Carousel, Col, Row } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { BannerWrapper, BreadcrumbArea, StyledImage } from './styled';
import titleShape from "@/assets/images/icon/home-shape.png";
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import breadcumdBg from "@/assets/images/bg/breadcumb-bg.jpg";
import Image from 'next/image';


const Banner = () => {

  const items = [
    {
      key: '1',
      label: 'Item 1',
    },
    {
      key: '2',
      label: 'Item 2',
    },
    {
      key: '3',
      label: 'Item 3',
    },
  ];

  return (
    <Carousel
      dotPosition="bottom"
      autoplay
      effect="fade"
      pauseOnHover
      pauseOnDotsHover={true}
    >
      {items.map((item, i) => (
        <BannerWrapper key={item.key}>
          <div className="container">
            <div className="row align-items-center">
              <Row>
                <Col xs={24} sm={5} md={5} lg={5}>
                  <BreadcrumbArea>
                    <Breadcrumb className='breadcrumb_menu'
                      separator="."
                      items={[
                        {
                          title: 'Home',
                          href: '',
                        },
                        {
                          title: 'Banner' + i,
                          href: '',
                          className: 'about',
                        }
                      ]}
                    />
                    <h2 className="breadcrumb_title text-uppercase">ABOUT US {i}</h2>
                  </BreadcrumbArea>
                </Col>
              </Row>
            </div>
          </div>
        </BannerWrapper>
      ))}
    </Carousel>
  );
};

export default Banner;
