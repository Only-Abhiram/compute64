import React, { useEffect, useState } from "react";

const TypingHeading = () => {
    const texts = [
        "Encode & Decode Base64 strings Effortlessly",
        "Fast. Free. Reliable.",
        "Simplify your encoding experience"
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        const speed = isDeleting ? 30 : 80;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
                }
            } else {
                setDisplayedText(currentText.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts]);

    return (
        <h1 className="text-3xl font-bold text-center text-[#2a41e8] text-shadow-lg/10 my-6">
            {displayedText}
            <span className="animate-pulse ">|</span>
        </h1>
    );
};

export default TypingHeading;
