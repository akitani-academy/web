import { useState, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from "styles/Slideshow.module.scss";

export default function Slideshow({ images, seconds }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, seconds * 1000);

        return () => clearInterval(intervalId);
    }, [seconds, images.length]);

    return (
        <div className={styles.slideshow}>
            {images.map((e, index) => (
                <div
                    key={index}
                    className={classNames(
                        styles.slide,
                        { [styles.hidden]: index == currentIndex }
                    )}
                >
                    <Image
                        src={e.src}
                        alt={e.alt}
                        width={1080}
                        height={1080 * e.height / e.width}
                        sizes="(max-width: 708px) 100vw, 100vw"
                    />
                </div>
            ))}
        </div>
    );
};