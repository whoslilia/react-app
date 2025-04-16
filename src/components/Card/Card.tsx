import { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
  subtitle?: string;
  cardLink?: string;
}

export function CardBody(props: CardBodyProps) {
  const { text, title, subtitle, cardLink } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle">{subtitle}</h6>
      <p className="card-text">{text}</p>
      <a href="#" className="card-link">
        {cardLink}
      </a>
    </>
  );
}

export default Card;
