import { Link } from "react-router-dom";
import React from "react";
import { Button } from "antd";
import "./App.css";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider className="side">
        <div className="demo-logo-vertical" />
        <Button>
          <Link to="/">首页</Link>
        </Button>
        <Button>
          <Link to="/home">首页1</Link>
        </Button>
      </Sider>
      <Layout
        style={{
          marginInlineStart: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content className="content">
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          footer
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
