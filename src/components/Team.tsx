
import Nashmil from "../images/nashmil.jpg";
import Bence from "../images/bence-a-toth.jpg";
import Qamar from "../images/qamar.jpg";
import Aijaz from "../images/aijaz.jpg";
import Behzad from "../images/behzad.jpg";
import Marcell from "../images/marcell.jpg";

import "./Team.css";

const Team = () => (
  <div className="site-main-inner-wrapper dark">
    <section>
      <h2>Our team</h2>
      <div className="our-team">
        <div className="team-member">
          <img src={Nashmil} alt="" />
          <div>
            <div className="name">Nashmil Sepehriazad</div>
            <div className="role">Founder, Managing Director</div>
          </div>
          <p>
            Multi-passionate. Psychotherapist and personal development coach.
            Software engineer. Poet & writer. Children and nature-lover. Admirer
            of arts of all kinds. Advocate of equal, accessible and efficient
            mental healthcare for all.
          </p>
        </div>
        <div className="team-member">
          <img src={Bence} alt="" />
          <div>
            <div className="name">Bence A. Tóth</div>
            <div className="role">Principal Software Engineer</div>
          </div>
          <p>
            Front-end developer, software architect, team lead, tech lead,
            mentor, teacher, tutor, volunteer, open source advocate, functional
            programming enthusiast, accessibility nerd, CSS ninja. Building
            software and relationships.
          </p>
        </div>
        <div className="team-member">
          <img src={Marcell} alt="" />
          <div>
            <div className="name">Marcell Ákos Tóth</div>
            <div className="role">Graphics Designer</div>
          </div>
          <p>
            Creative and open-minded graphic designer. Enthusiastic about human
            rights. Experienced in education and special needs. Fan of modern
            art. Lover of literature and cinema. Amazed by 1960s culture.
          </p>
        </div>
        <div className="team-member">
          <img src={Qamar} alt="" />
          <div>
            <div className="name">Qamar Farooq</div>
            <div className="role">Software Engineer</div>
          </div>
          <p>
            Determined and enthusiastic Fullstack Engineer. Problem-solver and
            quick learner. Flexible and experienced working with people across
            multiple geographies.
          </p>
        </div>
        <div className="team-member">
          <img src={Aijaz} alt="" />
          <div>
            <div className="name">Aijaz Ahmad</div>
            <div className="role">Software Engineer</div>
          </div>
          <p>
            Passionate and creative Frontend Engineer. Naturally out of the box
            thinker. Open-minded, strong team-player and always thriving to
            learn new technologies.
          </p>
        </div>
        <div className="team-member">
          <img src={Behzad} alt="" />
          <div>
            <div className="name">Behzad Ebrahimi</div>
            <div className="role">Software Engineer</div>
          </div>
          <p>
            Radiant Software Developer with aspirations for excellence and
            ambitions for a fruitful career. A machinist who redeems the noises
            of the workplace with the pursuit of music in the free time.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Team;
