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
export default function Home() {
  return (
    <div>
      <div className={styles.spaceApart}>
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

        <div className={styles.searchBar}>
          <div className={styles.searchBarText}>
            <p>Internet Privacy </p>
          </div>
          <div>
            <SearchbarSVG />
          </div>
        </div>
      </div>

      {/*<div>
        
      </div>*/}

      <div className={styles.mainSection}>
        <div className={styles.searchResultSite}>
          <SearchResultsSVG />
        </div>

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

        {/*<NerdSVG />*/}
        {/*<p>
            Internet privacy takes many forms: it could be privacy regarding our
            activities on a website, sharing how much we share about ourselves,
            etc. It can be our daily sp- -lurges, our recent shopping splurges,
            and the devices we use. Ideally, we want to control the amount of
            information that flows out. However, this isn&apos;t always the case
            for companies like Google. Once on their platform, they set the
            terms and conditions on how they use the user&apos;s information. So
            there&apos;s no absolute control for individuals to decide what others
            get to see our data or not.
          </p>*/}

        {/*<div className={styles.spaceApart}>

          </div>*/}

        <div className={styles.spaceApart}>
          <div>
            <h2>How Google Tracks Us</h2>
          </div>

          <div>
            <div className={styles.docText}>
              <h3>Gmail, Google Office Suite, Google Photo</h3>
              <p>
                Any documents created on with Gmail or Google Office Suite are
                scanned with Google Analytic. The tools algorithm will aggregate
                the words from the document to be used with personalized ads.
              </p>
            </div>
            <div className={styles.document}>
              <DocSVG />
            </div>
          </div>

          <div>
            <div className={styles.docText}>
              <h3>Google Chrome</h3>
              {/*<CookieSVG />*/}
              <p>
                The main way Chrome tracks you is through cookies that contains
                data used to identify our computer. Its a way for the service to
                identify your computer which includes the IP address, log-in
                info, operating system, screen size, mouse movements, etc.{" "}
              </p>
            </div>
            <div className={styles.document}>
              <BrowserSVG />
            </div>
          </div>

          <div>
            <div className={styles.docText}>
              <h3>Android Phone</h3>
              <p>
                The GPS feature on the smartphone provides Google a better
                understanding on our habits and the location we last visited.
                The data is used on Google Map&apos; to influence our behavior
                by creating suggestions.
              </p>
            </div>
            <div className={styles.document}>
              <MapSVG />
            </div>
          </div>
        </div>

        <div className={styles.spaceApart}>
          <div className={styles.slideText}>
            <h2>What Does Google Do with Our Data</h2>
            <ul>
              <li>
                {" "}
                Google&apos;s policy ensures that users&apos; data to be not
                sold to third-party vendors.{" "}
              </li>
              <li>
                Uses our data for personalized adverts. Advertisers can
                customize their campaigns to their targeted audience.
              </li>
              <li>
                Dependent on your data to customize your experience to continue
                using their productt lines.
              </li>
            </ul>
          </div>
          <div className={styles.powerSlide}>
            <SlideSVG />
          </div>
        </div>

        <div className={styles.spaceApart}>
          <div className={styles.videoText}>
            <h2>Digital Security and Your Data</h2>
            <p>
              Between 2012 - 2017 major breaches were done by hackers.
              User&apos;s data were compromised where it can be used misused or
              disclosed without consent. Hackers use different types of tactics
              for installing malicious malware. In 2013, Target suffered a
              breach where hackers were able to obtain a vendor&apos;s key. The
              hackers installed malware where it can retrieve a user&apos;s
              credit and debit card information. Yahoo also reported a data
              breach affecting 3 billion users in 2016. The hacker obtained the
              user&apos;s name, email address, phone numbers, date of birth,
              hashed passwords, and security questions and answers.
            </p>
          </div>
          <div className={styles.videoTube}>
            <VideoSVG />
          </div>
        </div>

        <div>
          <h2>Protecting Ourselves Online</h2>
          <ShieldSVG />
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
      </div>
    </div>
  );
}
