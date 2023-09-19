import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/"
        },
        {
            name: "Services",
            path: "/"
        },
        {
            name: "Contact",
            path: "/"
        }
    ]

    const router = useRouter();

    return (
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <Link href="">Logo</Link>
                </div>
                <div className={hamburgerOpen ? "hamburger hamburger_opened" : "hamburger"} onClick={toggleHamburger}>
                    <div className={hamburgerOpen ? "burger1_opened" : "burger1"}></div>
                    <div className={hamburgerOpen ? "burger2_opened" : "burger2"}></div>
                    <div className={hamburgerOpen ? "burger3_opened" : "burger3"}></div>
                </div>
                <div className="menu" style={{ transform: hamburgerOpen ? 'translateX(0%)' : 'translateX(100%)', transition: hamburgerOpen ? '1s' : '0'}}>
                    <ul>
                        {
                            links.map(({ name, path }, index) => {
                                return (
                                    <li style={{ transition: hamburgerOpen ? '.8s' : '.8s', transitionDelay: hamburgerOpen ? '.8s' : '', transform: hamburgerOpen ? 'translateX(0vw)' : 'translateX(-150vw)' }} key={index}>
                                        <Link href={path}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}