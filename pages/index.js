import styles from "../styles/Resume.module.css";
import Head from "next/head";

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Arun S — Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.page}>
        <article className={styles.container}>
          <header className={styles.header}>

            <div className={styles.profile}>
              <div className={styles.avatarWrap} aria-hidden="true">
                <img className={styles.avatar} src="/arun.jpg" alt="Arun S" />
              </div>
              <h1 className={styles.name}>ARUN S</h1>
            </div>

            <aside className={styles.contact}>
              <div className={styles.contactTitle}>
                <span className={styles.badge}>C</span>
                <span className={styles.titleText}>ONTACT</span>
              </div>

              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.icon} aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  <span>+91 93453 09926</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.icon} aria-hidden="true">
                    <MailIcon />
                  </span>
                  <a className={styles.link} href="mailto:arunrealm2005@gmail.com">
                    arunrealm2005@gmail.com
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.icon} aria-hidden="true">
                    <PinIcon />
                  </span>
                  <span>Salem, Tamil Nadu, India</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.icon} aria-hidden="true">
                    <LinkedInIcon />
                  </span>
                  <a
                    className={styles.link}
                    href="https://linkedin.com/in/arun2005s"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/arun2005s
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.icon} aria-hidden="true">
                    <GitHubIcon />
                  </span>
                  <a
                    className={styles.link}
                    href="https://github.com/Arun2005s"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/Arun2005s
                  </a>
                </li>
              </ul>
            </aside>
          </header>

          <div className={styles.body}>
            <section className={styles.left}>
              <ResumeSection title="DUCATION" badgeLetter="E">
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <div className={styles.itemTitle}>B-Tech - IT</div>
                    <div className={styles.itemSub}>
                      Kongu Engineering College (2027) - 9.13 (4th Sem)
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.itemTitle}>11th (2021-2022) - 87.6%</div>
                    <div className={styles.itemSub}>
                      Bharathiyar Matric Hr.Sec.School, Attur, Salem.
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.itemTitle}>12th (2022-2023) - 94.3%</div>
                    <div className={styles.itemSub}>
                      Bharathiyar Matric Hr.Sec.School, Attur, Salem.
                    </div>
                  </li>
                </ul>
              </ResumeSection>

              <ResumeSection title="CHIEVEMENTS" badgeLetter="A">
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Received “Academic Excellence Award” from Kongu Vellalar Trust at
                    Kongu Engineering College for the academic year 2024-25.
                  </li>
                  <li className={styles.listItem}>
                    Selected in top 50 teams in Ruby Year Celebration of Kongu
                    Engineering College for academic year 2024-25.
                  </li>
                </ul>
              </ResumeSection>

              <ResumeSection title="KILLS" badgeLetter="S">
                <ul className={styles.list}>
                  <li className={styles.listItem}>Language: C, Java</li>
                  <li className={styles.listItem}>Front End: HTML, CSS</li>
                  <li className={styles.listItem}>Back End: MongoDB, MySQL</li>
                </ul>
              </ResumeSection>

              <ResumeSection title="REA OF INTEREST" badgeLetter="A">
                <ul className={styles.list}>
                  <li className={styles.listItem}>Web Technology</li>
                  <li className={styles.listItem}>App Development</li>
                  <li className={styles.listItem}>Internet Of Things - IOT</li>
                </ul>
              </ResumeSection>

              <ResumeSection title="ERTIFICATIONS" badgeLetter="C">
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    MongoDB Associate Developer - [April 2025] - MongoDB, Inc.
                  </li>
                  <li className={styles.listItem}>
                    Oracle APEX Cloud Developer Certified Professional - [May 2025] -
                    Oracle Corporation
                  </li>
                </ul>
              </ResumeSection>
            </section>

            <section className={styles.right}>
              <ResumeSection title="AREER OBJECTIVE" badgeLetter="C">
                <p className={styles.paragraph}>
                  A very motivated and detail-oriented B.Tech Information Technology
                  student with a strong foundation in computer science principles,
                  software development, and problem-solving skills.
                </p>
              </ResumeSection>

              <ResumeSection title="ROJECTS" badgeLetter="P">
                <div className={styles.project}>
                  <div className={styles.projectTitle}>
                    LEARNIT <span className={styles.projectDash}>-</span>{" "}
                    <span className={styles.projectSubtitle}>
                      AN EFFECTIVE LEARNING PLATFORM
                    </span>
                  </div>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      Developed a Learning Management System (LMS) to facilitate
                      seamless course management, student tracking, and content
                      delivery.
                    </li>
                    <li className={styles.listItem}>
                      Tech Stack : Node.js, Express.js, HTML, CSS, React
                    </li>
                  </ul>
                  <div className={styles.urlLine}>
                    <a
                      className={styles.link}
                      href="https://github.com/Arun2005s/Online-Learning-System"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://github.com/Arun2005s/Online-Learning-System
                    </a>
                  </div>
                </div>

                <div className={styles.project}>
                  <div className={styles.projectTitle}>
                    MUSIC PLAYER <span className={styles.projectDash}>-</span>{" "}
                    <span className={styles.projectSubtitle}>
                      AN EFFICIENT MUSIC PLAYER
                    </span>
                  </div>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      A Music Player made using Java, which makes the songs to store,
                      sort, shuffle easier.
                    </li>
                    <li className={styles.listItem}>Tech Stack : Java, Jplayer, AWT</li>
                  </ul>
                  <div className={styles.urlLine}>
                    <a
                      className={styles.link}
                      href="https://github.com/Arun2005s/Music_Player"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://github.com/Arun2005s/Music_Player
                    </a>
                  </div>
                </div>

                <div className={styles.project}>
                  <div className={styles.projectTitle}>
                    VOTENOW <span className={styles.projectDash}>-</span>{" "}
                    <span className={styles.projectSubtitle}>
                      A VOTING SYSTEM FOR FAR AWAY PEOPLES
                    </span>
                  </div>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      A Voting System made using Python, which helps the citizens
                      living far away to vote in the election.
                    </li>
                    <li className={styles.listItem}>Tech Stack : Python, Tkinter</li>
                  </ul>
                  <div className={styles.urlLine}>
                    <a
                      className={styles.link}
                      href="https://github.com/Arun2005s/PythonProject"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://github.com/Arun2005s/PythonProject
                    </a>
                  </div>
                </div>

                <div className={styles.project}>
                  <div className={styles.projectTitle}>
                    BAKEHUB <span className={styles.projectDash}>-</span>{" "}
                    <span className={styles.projectSubtitle}>
                      AN ONLINE BAKERY MANAGEMENT SYSTEM
                    </span>
                  </div>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      An Online Bakery Management System developed using HTML,
                      Angular, and MongoDB, which helps customers to place orders from
                      remote locations.
                    </li>
                    <li className={styles.listItem}>
                      Tech Stack - HTML, CSS, Bootstrap, MongoDB
                    </li>
                  </ul>
                  <div className={styles.urlLine}>
                    <a
                      className={styles.link}
                      href="http://github.com/Arun2005s/Bakery-Management-System"
                      target="_blank"
                      rel="noreferrer"
                    >
                      http://github.com/Arun2005s/Bakery-Management-System
                    </a>
                  </div>
                </div>
              </ResumeSection>

              <ResumeSection title="APERS PRESENTED" badgeLetter="P">
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    SPECTRA GENIX&apos;24 - AI in CyberSecurity @ KGISL Institute of
                    Technology
                  </li>
                  <li className={styles.listItem}>
                    KALLIKRATES&apos;24 - Construction Ideologies @ KPR Institute of
                    Engineering
                  </li>
                  <li className={styles.listItem}>
                    XYNTRA&apos;25 - AferVault @ Rajalakshmi Engineering College
                  </li>
                </ul>
              </ResumeSection>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

function ResumeSection({ title, badgeLetter, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.badge} aria-hidden="true">
          {badgeLetter}
        </span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5.5 7.5 12 12.2l6.5-4.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.5a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M6.6 9.5V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.6 6.3h0"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M10.2 19v-5.2c0-1.7 1-2.8 2.7-2.8 1.6 0 2.5 1.1 2.5 2.8V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 9.5V11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.2 11c.5-.9 1.4-1.5 2.7-1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M9.2 19.5c-3.6 1.1-3.6-1.8-5-2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.8 19.5v-2.9c0-.8.3-1.5.8-2-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.5.5.9 1.3.9 2.6v2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M12 20.5c-4.7 0-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5 20.5 7.3 20.5 12"
        stroke="currentColor"
        strokeWidth="0"
        opacity="0"
      />
    </svg>
  );
}

