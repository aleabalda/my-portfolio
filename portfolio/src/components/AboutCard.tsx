interface AboutCardProps {
  id: string;
  image: string;
  title: string;
  text: string[];
  reference: string;
}

export const AboutCard = ({
  id,
  image,
  title,
  text,
  reference,
}: AboutCardProps) => {
  return (
    <>
      <div id={id} className="about-card">
        <img className="about-card-image" src={image} alt="card background" />
        <div className="about-card-content">
          <h3 className="about-card-title">{title}</h3>
          <div className="about-card-body">
            {text.map((val, key) => (
              <p className="about-card-text" key={`card-text-${key}`}>
                {val}
              </p>
            ))}
          </div>
          <p className="about-card-ref">{reference}</p>
        </div>
      </div>
    </>
  );
};
