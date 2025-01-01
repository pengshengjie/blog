import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import jpg from "./bg.webp";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/frontenddesign"
          >
            Quick Start ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    console.log([
      "%c",
      "                   _ooOoo_",
      "                  o8888888o",
      "                  88\" . \"88",
      "                  (| -_- |)",
      "                  O\\  =  /O",
      "               ____/`---'\\____",
      "             .'  \\\\|     |//  `.",
      "            /  \\\\|||  :  |||//  \\",
      "           /  _||||| -:- |||||-  \\",
      "           |   | \\\\\\  -  /// |   |",
      "           | \\_|  ''\\---/''  |   |",
      "           \\  .-\\__  `-`  ___/-. /",
      "         ___`. .'  /--.--\\  `. . __",
      "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
      "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
      "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
      "======`-.____`-.___\\_____/___.-`____.-'======",
      "                   `=---='",
      "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
      "         佛祖保佑       永无BUG"
    ].join('\n'), 'color:red');
    
    console.log([
      "%c",
      "      写字楼里写字间，写字间里程序员；",
      "      程序人员写程序，又拿程序换酒钱。",
      "      酒醒只在网上坐，酒醉还来网下眠；",
      "      酒醉酒醒日复日，网上网下年复年。",
      "      但愿老死电脑间，不愿鞠躬老板前；",
      "      奔驰宝马贵者趣，公交自行程序员。",
      "      别人笑我忒疯癫，我笑自己命太贱；",
      "      不见满街漂亮妹，哪个归得程序员？",
    ].join('\n'), 'color:green')
  })
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      {/* <main>
        <HomepageFeatures />
      </main> */}
      <div
        style={{
          flex: 1,
          background: `url(${jpg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Link
          className="button button--secondary button--lg"
          to="/docs/工程化"
          style={{
            marginTop: -100,
            opacity: .8,
            background: '#000',
            color: '#e569ff'
          }}
        >
          <p></p>
          <p>Hi, I'm CodingJ</p>
        </Link>
      </div>
    </Layout>
  );
}
