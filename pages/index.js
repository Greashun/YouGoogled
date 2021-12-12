import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  CookieSVG,
  DocSVG,
  HackerSVG,
  MapSVG,
  NerdSVG,
  ShieldSVG,
  SearchbarSVG,
  BrowserSVG,
  PhoneSVG,
  SlideSVG,
  SearchResultsSVG,
  VideoSVG,
} from "../public/svgs/source";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

export default function Home() {
  return (
    <div className={styles.content}>
      <section className={styles.searchBarSection}>
        <div className={styles.mainImg}></div>
        <div className={styles.topTitle}>
          <h1 className={styles.searchBarTitle}>
            <span className={styles.colorBlue}>Y</span>
            <span className={styles.colorRed}>o</span>
            <span className={styles.colorYellow}>u</span>
            <span> </span>
            <span className={styles.colorBlue}>G</span>
            <span className={styles.colorGreen}>o</span>
            <span className={styles.colorRed}>o</span>
            <span className={styles.colorYellow}>g</span>
            <span className={styles.colorBlue}>l</span>
            <span className={styles.colorRed}>e</span>
            <span className={styles.colorYellow}>d</span>
          </h1>
        </div>
        <div className={styles.searchBarText}>
          {/*<p id={styles.bar}>Internet Privacy </p>*/}
        </div>
      </section>

      {/*<section className={styles.searchBarSection}></section>*/}

      {/*<div>
        
      </div>*/}
      <section className={styles.privacySection}>
        <div className={styles.searchResultText}>
          <h2>What is Internet Privacy</h2>
          <p>
            The level of privacy an individual has while connected to the
            internet while sharing private information with others.
          </p>
          <h2>Introduction</h2>
          <p>
            Today’s internet is a prosperous goldmine for Google. Whether users
            are browsing websites or watching videos, Google aggregates our data
            to understand human behaviors. However, is there any information
            that we don&apos;t want it to know?
          </p>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.mainSectionTitle}>
          <h2>How Google Tracks Us</h2>
        </div>
        <div>
          <img src="/img/email.svg" className={styles.emailIcon} />
          <img src="/img/ramen.svg" className={styles.ramenIcon} />
        </div>
        <div className={styles.docSection}>
          <div className={styles.docText}>
            <h3>Gmail, Google Office Suite, Google Photo</h3>
            <p>
              Any files created on with Gmail, Google Office Suite, or Google
              Photo are scanned by Google&apos;. The tools uses an algorithm
              that will aggregate words from the document to be used for
              personalized ads.
            </p>
          </div>
        </div>
        <div>
          <img src="/img/cookie-1.svg" className={styles.cookieOneIcon} />
          <img src="/img/cookie-2.svg" className={styles.cookieTwoIcon} />
        </div>
        <div className={styles.browserSection}>
          <div className={styles.docText}>
            <h3>Google Chrome</h3>
            {/*<CookieSVG />*/}
            <p>
              The main way Chrome tracks you is through{" "}
              <a href="https://www.optimizesmart.com/google-analytics-cookies-ultimate-guide/">
                cookies
              </a>{" "}
              that contains data used to identify our computer. Its a way for
              the service to identify your computer which includes the{" "}
              <a href="https://www.hostgator.com/blog/how-ip-addresses-are-tracked/.">
                IP address
              </a>
              , log-in info, operating system, screen size, mouse movements,
              etc.{" "}
            </p>
          </div>
        </div>
        <div>
          <img src="/img/pin.svg" className={styles.pinIcon} />
          <img src="/img/tickets.svg" className={styles.ticketsIcon} />
        </div>
        <div className={styles.mapSection}>
          <div className={styles.docText}>
            <h3>Android Phone</h3>
            <p>
              Location tracking is a common method Google keeps track of our
              movement. The GPS feature on the smartphone provides Google a
              better understanding on our habits. The data is used on Google
              Map&apos; to influence our behavior by creating suggestions.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.slideSection}>
        <div className={styles.slideText}>
          <h2>What Does Google Do with Our Data</h2>
          <ul>
            <li>
              {" "}
              Google&apos;s policy ensures that users&apos; data to be not sold
              to third-party vendors.{" "}
            </li>
            <li>
              Uses our data for personalized adverts. Advertisers can customize
              their campaigns to their targeted audience.
            </li>
            <li>
              Dependent on your data to customize your experience to continue
              using their productt lines.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoTube}>
          <div className={styles.videoSpace}></div>
          <div className={styles.videText}>
            <h2>Digital Security and Your Data</h2>
            <p>
              Between 2012 - 2017{" "}
              <a href="https://www.brookings.edu/research/why-protecting-privacy-is-a-losing-game-today-and-how-to-change-the-game/">
                major breaches
              </a>{" "}
              were done by hackers. Hackers use different types of tactics for
              installing malicious malware. In 2014,{" "}
              <a href="https://ir.homedepot.com/news-releases/2014/11-06-2014-014517315.">
                Home Depot
              </a>{" "}
              suffered a breach when an unauthorized third party got hold of a
              vendor&apos;s{" "}
              <a href="https://whatismyipaddress.com/homedepot-hack.">
                password
              </a>
              . The files stolen were 56 million email addresses but are
              susceptible to phishing scams. In addition, the hackers can
              navigate a portion of the Home Depot network to install
              customizable malware. The same happened to Target in 2013, where
              hackers were able to obtain a vendor&apos;s key. The hackers
              installed malware where it can retrieve a user&apos;s credit and
              debit card information. In 2013, Target suffered a breach where
              hackers were able to obtain a vendor&apos;s key. The hackers
              installed malware where it can retrieve a user&apos;s credit and
              debit card information. Yahoo also reported a data breach
              affecting 3 billion users in 2016. The hacker obtained the
              user&apos;s name, email address, phone numbers, date of birth,
              hashed passwords, and security questions and answers.
            </p>
            <br></br>
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div>
          <img src="/img/jellyfishes.svg" className={styles.virusOne} />
        </div>
        <div className={styles.finalSectionText}>
          <h2>Protecting Ourselves Online</h2>
          <p>
            It&apos;s important to limit how much information we provide to a
            big company. The overreliance on the platform can come to a point
            where an unauthorized actor obtains our data. Google provides a
            dashboard to allow users to customize what data they want to
            opt-out. Another solution is to use other alternative platforms with
            similar services. On the internet, there&apos;s no absolute way to
            abstain from using online services. We can, however, protect
            ourselves by understanding what information we are willing to
            provide. Internet privacy is about controlling what information we
            want to show rather than show it all.
          </p>
        </div>
        {/*<div>
          <img src="/img/jellyfish.svg" className={styles.virusTwo} />
        </div>*/}
      </section>
    </div>
  );
}
