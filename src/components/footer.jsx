import { faGithub, faLinkedin, faSnapchat, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
    return (
        <div className="footer text-white">
        <div class="container">
            <footer class="py-3">
            <ul class="nav justify-content-center border-bottom my-4 gap-3 pb-3 mb-3">
                <FontAwesomeIcon className="socialLink" icon={faFacebook} />
                <FontAwesomeIcon className="socialLink" icon={faTwitter} />
                <FontAwesomeIcon className="socialLink" icon={faLinkedin} />
                <FontAwesomeIcon className="socialLink" icon={faGithub} />
                <FontAwesomeIcon className="socialLink" icon={faSnapchat} />
                <FontAwesomeIcon className="socialLink" icon={faWhatsapp} />
            </ul>
            <p class="text-center py-2">© 2024 Company, Inc</p>
            </footer>
          </div>
        </div>

    )
}

export default Footer;