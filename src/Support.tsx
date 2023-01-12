import { useEffect, useRef } from "react";

import Hand from "./hand.png";
import Piggy from "./piggy.png";

import "./Support.css";

const Support = () => {
  const supportWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const windowScrollHandler = () => {
      // console.log("I am scrolling");
      // console.log(supportWrapper.current);
      const viewportHeight = window.innerHeight;
      const supportWrapperTop =
        supportWrapper.current?.getBoundingClientRect()?.top ?? 0;
      const supportWrapperHeight =
        supportWrapper.current?.getBoundingClientRect()?.height ?? 0;

      const intervalLength = -1 * supportWrapperHeight - viewportHeight;
      const currentPosition = supportWrapperTop - viewportHeight;
      const ratio = currentPosition / intervalLength;
      console.log(`${(ratio * 100).toFixed(2)}%`);
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
          <div className="coin" />
        </div>
      </section>
    </div>
  );
};

export default Support;
