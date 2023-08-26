import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";

const Intro = () => (
  <section aria-labelledby="section1-title" className={styles.main}>
    <Image
      width={720}
      height={534}
      src="/illustration-intro.png"
      alt=""
      objectFit="contain"
      priority
    />
    <h1 id="section1-title">
      Regulated Baas Solution For Your Alogs
    </h1>
    <p>
      Our Regulated BaaS solution offers a sophisticated platform tailored for managing your algorithms
      with regulatory compliances.
    </p>
    <button type="button">Get Started</button>
  </section>
);

export default Intro;
