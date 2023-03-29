import { useEffect, useState, useRef } from "react";

import Hand from "./hand.png";
import Piggy from "./piggy.png";

import "./Support.css";

const Support = () => {
  const supportWrapper = useRef<HTMLDivElement | null>(null);

  const [coinPosition, setCoinPosition] = useState(0);
  const [coinRotation, setCoinRotation] = useState(0);

  useEffect(() => {
    const windowScrollHandler = () => {
      // console.log("I am scrolling");
      // console.log(supportWrapper.current);
      const viewportHeight = window.innerHeight;
      const supportWrapperTop =
        supportWrapper.current?.getBoundingClientRect()?.top ?? 0;
      const supportWrapperHeight =
        supportWrapper.current?.getBoundingClientRect()?.height ?? 0;
      const topOffset = 30;
      const coinSize = 36;
      const bottomOffset = 125 + coinSize;

      const intervalLength =
        -1 * (supportWrapperHeight - topOffset - bottomOffset) - viewportHeight;
      const currentPosition = supportWrapperTop - viewportHeight;
      const ratio = Math.max(0, Math.min(currentPosition / intervalLength, 1));

      const position =
        (supportWrapperHeight - topOffset - bottomOffset) * ratio + topOffset;

      setCoinPosition(position);
      setCoinRotation(ratio * 360 * 2);
    };

    window.addEventListener("scroll", windowScrollHandler);

    return () => {
      window.removeEventListener("scroll", windowScrollHandler);
    };
  }, []);

  return (
    <div className="site-main-inner-wrapper" ref={supportWrapper}>
      <section className="support">
        <div>
          <h2>Support us</h2>
          <p>Donating is caring.</p>
          <p>
            At Heal Health, we believe that mental health is a fundamental human
            right and that everyone should have access to the support they need.
            We are committed to providing free mental health services to those
            who need it most, but we need your help.
          </p>
          <p>
            Our mission is to help as many people as possible, but in order to
            do that we rely on the support of generous donors like you. With
            your donation, we will be able to continue providing free mental
            health services to those who need it most. We understand that these
            are difficult times, but any amount you can give, no matter how
            small, will make a big difference in the lives of those we serve.
          </p>
          <p>
            Your support will help us to continue providing vital mental health
            services to those who need it most. Thank you for your support and
            for helping us to make mental health care accessible to all. donate
            now!
          </p>
        </div>
        <div className="piggy-animation-wrapper">
          <img className="hand" src={Hand} alt="" />
          <img className="piggy" src={Piggy} alt="" />
          <div
            className="coin"
            style={{
              top: coinPosition,
              transform: `rotateY(${coinRotation}deg) rotateX(${coinRotation}deg)`,
            }}
          >
            ❤
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
