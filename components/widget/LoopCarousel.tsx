import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from 'styles/LoopCarousel.module.scss';

const LoopScroll = ({ children, width }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [firstItemRef, firstItemInView] = useInView({ threshold: .1 });
    const [lastItemRef, lastItemInView] = useInView({ threshold: .1 });

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    }
    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    useEffect(() => {
        let requestId: number;
        let lastTimestamp: number;
        let timeDelta: number;

        const autoScroll = (timestamp: number) => {
            if (!isHovering && carouselRef.current) {
                if (lastTimestamp) {
                    timeDelta = timestamp - lastTimestamp;
                    if (30 < timeDelta) {
                        carouselRef.current.scrollLeft += 1;
                        lastTimestamp = timestamp
                    }
                } else {
                    lastTimestamp = timestamp;
                }
            }
            requestId = requestAnimationFrame(autoScroll);
        };
        requestId = requestAnimationFrame(autoScroll);

        return () => {
            cancelAnimationFrame(requestId);
        };
    }, [isHovering]);

    useEffect(() => {
        if (firstItemInView) {
            carouselRef.current.scrollLeft = containerRef.current.scrollWidth / 3;
        }
    }, [firstItemInView]);
    useEffect(() => {
        if (lastItemInView) {
            carouselRef.current.scrollLeft =
                containerRef.current.scrollWidth / 3 - containerRef.current.offsetWidth;
        }
    }, [lastItemInView]);

    return (
        <div className={styles.gradation}>
            <div
                className={styles.carousel}
                ref={carouselRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
            >
                <div className={styles.container} ref={containerRef}>
                    <div ref={firstItemRef}></div>
                    {[...Array(3)].map((_, i) => (
                        <div className={styles.items} key={i}>
                            {children}
                        </div>
                    ))}
                    <div ref={lastItemRef}></div>
                </div>
            </div >
        </div>
    );
};

export default LoopScroll;