import { faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'styles/social.module.css'


export default function Social({ iconSize = 'initial'}) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href='https://twitter.com/'>
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className='sr-only'>Twitter</span>
                </a>
            </li>
            <li>
                <a href='https://facebook.com/'>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className='sr-only'>Facebook</span>
                </a>
            </li>
            <li>
                <a href='https://github.com/'>
                    <FontAwesomeIcon icon={faGithub} />
                    <span className='sr-only'>GitHub</span>
                </a>
            </li>
        </ul>
    )
}
