import css_Button from "components/Button/Button.module.scss";
import Link from "next/link";

export default function Button({ children, href }) {
    return (
        <div className={css_Button.button}>
            <Link href={href}>
                <div>{children}</div>
                <div className={css_Button.right}>
                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25813 3.51613L8.742 7L5.25813 10.4839" stroke="white" stroke-width="1.16129" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </Link>
        </div>
    );
}