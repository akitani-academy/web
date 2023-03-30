import { useState, useEffect } from 'react';
import Image from 'next/image';

type Props = {
    images: string[];
    seconds: number;
};

export default function Slideshow({ images, seconds }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, seconds * 1000);

        return () => clearInterval(intervalId);
    }, [seconds, images.length]);

    return (
        <ul>
            {images.map((image, index) => (
                <li key={index} className={index === currentIndex ? 'active' : ''}>
                    <Image src={image} alt={`Image ${index}`} width={800} height={600} />
                </li>
            ))}
        </ul>
    );
};