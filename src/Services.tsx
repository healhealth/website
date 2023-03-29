import "./Services.css";
import { ReactComponent as Logo1 } from "./mental-health-professionals.svg";
import { ReactComponent as Logo2 } from "./self-help.svg";
import { ReactComponent as Logo3 } from "./coaching.svg";

const Services = () => (
  <div className="site-main-inner-wrapper">
    <section>
      <h2>Our services</h2>
      <section className="picture-right">
        <div>
          <h3>Tools for mental health professionals</h3>
          <p>
            We are building software and applications that help psychiatrists,
            psychologists, therapists and other professionals improve and
            accelerate their services resulting in more efficient and accurate
            outcomes and quality mental healthcare for their clients.
          </p>
        </div>
        <Logo1 />
      </section>
      <section className="picture-left">
        <div>
          <h3>Self-help tools</h3>
          <p>
            We are developing free efficient self-help tools for mental
            well-being which can be utilized by both individuals and prescribed
            by professionals to their clients. Individuals can use this tools to
            improve their mental well-being and manage their mental health
            symptoms. These tools can take many forms, including apps, videos,
            and websites. We are going to provide information, guidance, and
            techniques for managing stress, improving mood, and addressing
            specific mental health concerns
          </p>
        </div>
        <Logo2 />
      </section>
      <section className="picture-right">
        <div>
          <h3>Personal Development Coaching</h3>
          <p>
            Our team of psychotherapists and personal coaches collaborate with
            clients to identify, pursue, and achieve their goals using various
            techniques such as goal-setting, active listening, motivational
            interview, behavioral change, and more. Our personal development
            coaching program is specifically designed to help clients enhance
            important aspects of personal growth, including self-awareness,
            confidence, communication, upskilling, and positive thinking.
            Clients can choose to hire a personal development coach for
            one-to-one sessions, or companies and organizations can work with
            our coaches to support their employees, managers, and leaders.
            Regardless of the approach, our coaches serve as strategic thinking
            partners and sounding boards, providing inspiration and
            accountability.
          </p>
        </div>
        <Logo3 />
      </section>
    </section>
  </div>
);

export default Services;
