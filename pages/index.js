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
                <span className={styles.titleText}>CONTACT</span>
              </div>

              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span>Phone: </span>
                  <span>+91 93453 09926</span>
                </li>
                <li className={styles.contactItem}>
                  <span>Email: </span>
                  <a className={styles.link} href="mailto:arunrealm2005@gmail.com">
                    arunrealm2005@gmail.com
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span>Location: </span>
                  <span>Salem, Tamil Nadu, India</span>
                </li>
                <li className={styles.contactItem}>
                  <span>LinkedIn: </span>
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
                  <span>GitHub: </span>
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
              <ResumeSection title="EDUCATION">
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

              <ResumeSection title="ACHIEVEMENTS">
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

              <ResumeSection title="SKILLS">
                <ul className={styles.list}>
                  <li className={styles.listItem}>Language: C, Java</li>
                  <li className={styles.listItem}>Front End: HTML, CSS</li>
                  <li className={styles.listItem}>Back End: MongoDB, MySQL</li>
                </ul>
              </ResumeSection>

              <ResumeSection title="AREA OF INTEREST">
                <ul className={styles.list}>
                  <li className={styles.listItem}>Web Technology</li>
                  <li className={styles.listItem}>App Development</li>
                  <li className={styles.listItem}>Internet Of Things - IOT</li>
                </ul>
              </ResumeSection>

              <ResumeSection title="CERTIFICATIONS">
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
              <ResumeSection title="CAREER OBJECTIVE">
                <p className={styles.paragraph}>
                  A very motivated and detail-oriented B.Tech Information Technology
                  student with a strong foundation in computer science principles,
                  software development, and problem-solving skills.
                </p>
              </ResumeSection>

              <ResumeSection title="PROJECTS">
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

              <ResumeSection title="PAPERS PRESENTED">
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

function ResumeSection({ title, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}



