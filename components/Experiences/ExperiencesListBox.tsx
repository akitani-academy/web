
const _V = require("components/_V.js");
import Link from "next/link";
import css_index from "styles/index.module.scss";
import ExperiencesList from "components/Experiences/ExperiencesList";
import LoopCarousel from 'components/widget/LoopCarousel';

export default function Button({ data, filter, button }) {

    data = data.filter(item => filter.includes(item.slug));

    return (
        <div className={css_index.experiencesArea}>
            <Link href={button.link} className={css_index.experiencesLink}>
                {((data.length > 1) ? (
                    <LoopCarousel>
                        <div className={css_index.experiencesBox}>
                            {data.map((e, i) => (
                                e.child_list.map(
                                    (e1, i) => (10 < e1.post.length) && (
                                        <div className={css_index.experienceBox} key={i}>
                                            <ExperiencesList title={e.name} data={e1} responsive={false} />
                                        </div>
                                    )
                                )
                            ))}
                        </div>
                    </LoopCarousel>
                ) : (
                    <div className={css_index.experiencesBox}>
                        {data.map((e, i) => (
                            e.child_list.map(
                                (e1, i) => (9 < e1.post.length) && (
                                    <div className={css_index.experienceBox} key={i}>
                                        <ExperiencesList title={e.name} data={e1} responsive={false} />
                                    </div>
                                )
                            )
                        ))}
                    </div>
                ))}
                <div className={css_index.experiencesLinkArea}>
                    <div className={css_index.experiencesButton}>
                        {button.text}
                    </div>
                </div>
            </Link>
        </div>
    );
}