import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "./baoyou"
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
          <p>I am a React development engineer.</p>
        </Link>
      </div>
    </Layout>
  );
}
