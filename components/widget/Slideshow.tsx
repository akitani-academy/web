import { useState, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from "styles/Slideshow.module.scss";

type Props = {
    images: [string, string][];
    seconds: number;
};

export default function Slideshow({ images, seconds }: Props) {

    // images.reverse();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, seconds * 1000);

        return () => clearInterval(intervalId);
    }, [seconds, images.length]);

    return (
        <div className={styles.slideshow}>
            {images.map(([url, alt], index) => (
                <div
                    key={index}
                    className={classNames(
                        styles.slide,
                        { [styles.hidden]: index == currentIndex }
                    )}
                >
                    <Image
                        src={url} alt={alt}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            ))}
        </div>
    );
};