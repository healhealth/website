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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            eos iusto, laboriosam ex, eveniet ducimus aspernatur provident nisi
            adipisci incidunt quam error possimus facere perspiciatis tempora
            quis ratione alias porro.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            eos iusto, laboriosam ex, eveniet ducimus aspernatur provident nisi
            adipisci incidunt quam error possimus facere perspiciatis tempora
            quis ratione alias porro.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            eos iusto, laboriosam ex, eveniet ducimus aspernatur provident nisi
            adipisci incidunt quam error possimus facere perspiciatis tempora
            quis ratione alias porro.
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
