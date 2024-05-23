interface ButtonProps {
  ID: string;
  text: string;
  link?: string;
}

export const Button = ({ ID, text, link }: ButtonProps) => {
  return (
    <a id={ID} className="button" href={link} target="_blank">
      {text}
    </a>
  );
};
