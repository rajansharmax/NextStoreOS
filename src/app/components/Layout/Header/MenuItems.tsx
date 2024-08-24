import { BulbOutlined, ClockCircleOutlined, LikeOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import routes from "@/config/routes";

export const menuItems = [
  { label: 'Best Sellers', href: routes.bestSellers, icon: <LikeOutlined style={{ fontSize: '20px', marginRight: "5px" }} /> },
  { label: 'Order Samples', href: routes.orderSample, icon: <BulbOutlined style={{ fontSize: '20px', marginRight: "5px" }} /> },
  { label: 'My Account', href: routes.myAccount, icon: <UserOutlined style={{ fontSize: '20px', marginRight: "5px" }} /> },
  { label: 'Repeat Orders', href: routes.repeatOrders, icon: <ClockCircleOutlined style={{ fontSize: '20px', marginRight: "5px" }} /> },
  { label: 'Cart', href: routes.cart, icon: <ShoppingCartOutlined style={{ fontSize: '24px', marginRight: "5px" }} /> }
];