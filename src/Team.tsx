import Nashmil from "./nashmil.jpg";
import Bence from "./bence-a-toth.jpg";
import Qamar from "./qamar.jpg";
import Aijaz from "./aijaz.jpg";
import Behzad from "./behzad.jpg";
import Marcell from "./marcell.jpg";

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
            A multi-passionate with a background in Software Engineering and
            Psychology. Poet & writer. Children and nature-lover. An admirer of
            arts of all kinds. Advocate of equal, accessible and efficient
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
            A creative and open-minded graphic designer. Enthusiastic about
            human rights. Experienced in education and special needs. Fan of
            modern art. Lover of literature and cinema. Amazed by 1960s culture.
          </p>
        </div>
        <div className="team-member">
          <img src={Qamar} alt="" />
          <div>
            <div className="name">Qamar Farooq</div>
            <div className="role">Software Engineer</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            enim nulla culpa quam ipsam. Iure, architecto culpa exercitationem
            dolores.
          </p>
        </div>
        <div className="team-member">
          <img src={Aijaz} alt="" />
          <div>
            <div className="name">Aijaz Ahmad</div>
            <div className="role">Software Engineer</div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            enim nulla culpa quam ipsam. Iure, architecto culpa exercitationem
            dolores.
          </p>
        </div>
        <div className="team-member">
          <img src={Behzad} alt="" />
          <div>
            <div className="name">Behzad Ebrahimi</div>
            <div className="role">Software Engineer</div>
          </div>
          <p>
            esme vaghei ahmade zoghi sit amet consectetur adipisicing elit.
            Aspernatur enim nulla culpa quam ipsam. Iure, architecto culpa
            exercitationem dolores.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Team;
