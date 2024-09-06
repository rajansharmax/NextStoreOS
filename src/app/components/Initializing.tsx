import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 64,
      color: "#0ff",
      textShadow: "0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff",
    }}
    spin
  />
);

const Initializing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#000",
      }}
    >
      <Spin size="large" />
      <p
        style={{
          marginTop: 16,
          fontSize: 20,
          color: "#0ff",
          textShadow: "0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff",
          fontFamily: "Monospace",
        }}
      >
        NeonLights...
      </p>
    </div>
  );
};

export default Initializing;
