
const _V = require("components/_V.js");
import Link from "next/link";
import css_index from "styles/index.module.scss";
import ExperiencesList from "components/Experiences/ExperiencesList";
import LoopCarousel from 'components/widget/LoopCarousel';


export default function Button({ data, filter = [] as any, button }) {

    if (Array.isArray(filter)) {
        data = data.filter(item => item.child_list.some(child => filter.includes(child.slug)));
    }
    if (typeof filter === 'object' && 'parent' in filter) {
        data = data.filter(item => filter.parent.includes(item.slug));
    }

    return (<>
        {(hasNineOrMorePosts(data)) && (<>

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
                            {(data[0].child_list.map(
                                (e, i) => (9 < e.post.length) && (
                                    <div className={css_index.experienceBox} key={i}>
                                        <ExperiencesList title={data[0].name} data={e} responsive={false} />
                                    </div>
                                ))
                            )}
                        </div>
                    ))}

                    <div className={css_index.experiencesLinkArea}>
                        <div className={css_index.experiencesButton}>
                            {button.text}
                        </div>
                    </div>

                </Link>
            </div>
        </>)}
    </>);
}

function hasNineOrMorePosts(data) {
    for (let i = 0; i < data.length; i++) {
        const child_list = data[i].child_list;
        for (let j = 0; j < child_list.length; j++) {
            const post = child_list[j].post;
            if (post.length >= 9) {
                return true;
            }
        }
    }
    return false;
}