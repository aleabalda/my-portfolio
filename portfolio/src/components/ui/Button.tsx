interface ButtonProps {
  ID: string;
  text: string;
  link?: string;
}

export const Button = ({ ID, text, link }: ButtonProps) => {
  return (
    <button id={ID} className="button">
      {link ? (
        <a className="link" href={link} target="_blank">
          {text}
        </a>
      ) : (
        text
      )}
    </button>
  );
};
