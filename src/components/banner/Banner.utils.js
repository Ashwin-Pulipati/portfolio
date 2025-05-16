export const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <div className="flex gap-1.5">
      {words.map((word, wi) => (
        <div key={wi} className="flex">
          {word.split("").map((char, ci) => (
            <span key={`${wi}-${ci}`} className="animate-on-hover">
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export const fadeUpProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeInOut" },
};
