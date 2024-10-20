import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import { GoCheck } from "react-icons/go";

const Features = () => {
  return (
    <section id="services">
      <div className="section">
        <div className="left-content">
          <p className="heading">notes monitoring</p>
          <h1 className="title">Simplify your notes monitoring</h1>
          <p className="paragraph">
            Stay on top of your notes and manage them with ease across all your
            categories. Gain better clarity, and track everything with our
            user-friendly dashboard.
          </p>
          <div className="list">
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>Track notes across all categories</p>
            </span>
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>Manage notes with ease</p>
            </span>
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>Stay on top of your notes</p>
            </span>
          </div>
          <Link
            className="flex items-center gap-3 capitalize text-primary"
            to="about"
          >
            <span>Learn more</span>
            <span className="rounded-full bg-primary/20 p-0.5">
              <TiArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div className="rounded-xl bg-gradient-to-l from-primary to-primary/40">
          <img
            className="h-full w-full scale-75"
            src="product-imgs/feature-1.png"
            alt="notes monitoring"
          />
        </div>
      </div>
      <div className="section">
        <div className="left-content">
          <p className="heading">Dark Mode</p>
          <h1 className="title">
            Empower Your Collaborators with Seamless Dark Mode
          </h1>
          <p className="paragraph">
            Offer a better experience to your team or customers by enabling dark
            mode for improved accessibility and comfort during late-night work
            sessions. Whether managing projects or collaborating with others,
            dark mode ensures they can work effortlessly in any lighting
            condition.
          </p>
          <div className="list">
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>Toggle between light and dark modes instantly.</p>
            </span>
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>Automatically sync with system-level dark mode settings.</p>
            </span>
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>
                Accessible design with high contrast and readability in dark
                mode.
              </p>
            </span>
          </div>
          <Link
            className="flex items-center gap-3 capitalize text-primary"
            to="about"
          >
            <span>Learn more</span>
            <span className="rounded-full bg-primary/20 p-0.5">
              <TiArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div className="rounded-xl bg-gradient-to-l from-primary/40 to-primary xl:order-first">
          <img
            className="h-full w-full scale-75"
            src="product-imgs/feature-2.png"
            alt="notes monitoring"
          />
        </div>
      </div>
      <div className="section">
        <div className="left-content">
          <p className="heading">Artificial Assistant</p>
          <h1 className="title">
            Unlock the Power of Real-Time Assistance in Your Editor
          </h1>
          <p className="paragraph">
            Imagine having an AI chatbot that helps you as you work—right inside
            your editor. Whether you're drafting content, solving a coding
            challenge, or exploring a new topic, our AI chatbot integration
            brings real-time conversation and learning to your fingertips.
          </p>
          <div className="list">
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>
                Instant Support: Get real-time answers and assistance within the
                editor.
              </p>
            </span>
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>
                Seamless Integration: Stay in your workflow without switching
                tabs or tools.
              </p>
            </span>
            <span className="list item">
              <GoCheck size={25} className="text-primary" />
              <p>
                Smart Suggestions: AI-driven recommendations for content
                improvement or code fixes.
              </p>
            </span>
          </div>
          <Link
            className="flex items-center gap-3 capitalize text-primary"
            to="about"
          >
            <span>Learn more</span>
            <span className="rounded-full bg-primary/20 p-0.5">
              <TiArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div className="rounded-xl bg-gradient-to-l from-primary to-primary/40">
          <img
            className="h-full w-full scale-75"
            src="product-imgs/feature-3.png"
            alt="notes monitoring"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
