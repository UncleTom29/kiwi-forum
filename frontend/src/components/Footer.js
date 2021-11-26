import React from "react";

const Footer = () => (
    <footer>
        Created at <span id="rajat">Kiwi Lab</span>
        <br />
        <span>
            <i
                className="fab fa-github"
                onClick={() =>
                    window.open("https://github.com/kiwilabofficial", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-instagram"
                onClick={() =>
                    window.open("https://www.instagram.com/", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-linkedin"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-facebook"
                onClick={() =>
                    window.open(
                        "https://facebook.com",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-twitter"
                onClick={() =>
                    window.open("https://twitter.com/kiwilabofficial", "_blank")
                }
            ></i>
        </span>
    </footer>
);

export default Footer;
