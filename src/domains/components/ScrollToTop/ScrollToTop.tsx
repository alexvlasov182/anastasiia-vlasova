import { useEffect, useState } from "react"
// import { StaticImage } from "gatsby-plugin-image"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])
    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop}>
                    <svg
                        width="48px"
                        height="48px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.6907 4.8866C21.5876 3.54639 20.5567 2.41237 19.1134 2.30928C17.0515 2.10309 14.1649 2 12 2C9.83505 2 6.94845 2.10309 4.8866 2.30928C4.16495 2.30928 3.54639 2.61856 3.13402 3.13402C2.72165 3.64948 2.41237 4.16495 2.30928 4.8866C2.10309 6.94845 2 9.83505 2 12C2 14.1649 2.20619 17.0515 2.30928 19.1134C2.41237 20.4536 3.4433 21.5876 4.8866 21.6907C6.94845 21.8969 9.83505 22 12 22C14.1649 22 17.0515 21.7938 19.1134 21.6907C20.4536 21.5876 21.5876 20.5567 21.6907 19.1134C21.8969 17.0515 22 14.1649 22 12C22 9.83505 21.8969 6.94845 21.6907 4.8866ZM16.6392 13.5464C16.433 13.6495 16.3299 13.7526 16.1237 13.7526C15.9175 13.7526 15.7113 13.6495 15.6082 13.5464L12.2062 10.1443C12.1031 10.0412 11.8969 10.0412 11.7938 10.1443L8.39175 13.5464C8.08247 13.8557 7.56701 13.8557 7.25773 13.5464C6.94845 13.2371 6.94845 12.7216 7.25773 12.4124L10.6598 9.01031C11.3814 8.28866 12.5155 8.28866 13.2371 9.01031L16.6392 12.4124C16.9485 12.8247 16.9485 13.2371 16.6392 13.5464Z"
                            fill="#2977E3"
                        />
                    </svg>
                </div>
            )}
        </div>
    )
}