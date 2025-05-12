
import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  delay?: number;
  className?: string;
}

export function Typewriter({ texts, delay = 150, className = "" }: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        
        if (currentText === currentFullText) {
          setIsDeleting(true);
          return;
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, delay]);

  return (
    <div className={`typewriter ${className}`}>
      <span className="block">{currentText}</span>
    </div>
  );
}
