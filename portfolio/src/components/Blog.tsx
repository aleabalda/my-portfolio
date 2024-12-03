import { BlogData } from "./BlogData";
import memojiChefsKiss from "../assets/images/memoji-chefskiss.png";

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="section-container">
      <div id="blog-heading" className="section-heading">
        <h2>Blog</h2>
        <img className="memoji" src={memojiChefsKiss} alt="memoji lightbulb" />
      </div>
      <div className="blog-posts">
        {BlogData.map((val, key) => (
          <div
            key={key}
            className={`${
              val.unreleased
                ? "blog-card coming-soon outlined"
                : "blog-card outlined"
            }`}
          >
            <p className="blog-title">{val.title}</p>
            <div className="blog-text">{val.summary}</div>
            <div className="blog-tags-container">
              {val.tags.map((val) => (
                <div className="blog-tag">{val}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
