import React from "react";
import { FiPlus } from "react-icons/fi";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="rounded-md bg-primary/20">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4"
      >
        <h3 className="text-sm font-semibold">{question}</h3>
        <button className="text-gray-500 focus:outline-none">
          <FiPlus
            className={`transform ${isOpen ? "rotate-45" : "rotate-0"}`}
          />
        </button>
      </div>
      {isOpen && (
        <p className="border-b border-gray-200 p-4 text-xs">{answer}</p>
      )}
    </div>
  );
};

export default Accordion;
