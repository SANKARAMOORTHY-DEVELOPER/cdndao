import Image from "next/image";
import { createElement, FC } from "react";
import styles from "@styles/Sections/Features.module.scss";

const Features: FC = () => {
  return (
    <section aria-label="Features" className={styles.main}>
      {elements.map(({ image, text, title }, id) => {
        return (
          <div key={`Feature-${id}`}>
            <Image
              width={75}
              height={75}
              src={image}
              objectFit="contain"
              priority
              alt=""
            />
            {createElement(`h${1 + id}`, null, title)}
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;

const elements = [
  {
    image: "/icon-access-anywhere.svg",
    title: "Access your Algos, anywhere",
    text: `Algosphere is a CDN based account means Algos are always accessible to you`,
  },
  {
    image: "/icon-security.svg",
    title: "Secure",
    text: ` we offer an tamper-proof inherently secure environment where users collectively regulate addictive algorithms in online gambling and social media`,
  },
  {
    image: "/icon-collaboration.svg",
    title: "DAO Regulated",
    text: ` AlgoSphere empowers users like you to actively participate in shaping 
    a digital landscape that prioritizes responsible 
    and ethical technology use.`,
  },
  {
    image: "/icon-any-file.svg",
    title: "Blockchain based solution",
    text: `we're using blockchain technology to revolutionize the regulation of addictive algorithms in online gambling and social media apps`,
  },
];
