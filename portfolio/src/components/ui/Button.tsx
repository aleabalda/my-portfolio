// https://linktr.ee/aleabalda

interface ButtonProps {
  ID: string;
  text: string;
}

export const Button = ({ ID, text }: ButtonProps) => {
  return (
    <button id={ID} className="button">
      {text}
    </button>
  );
};
