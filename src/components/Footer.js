import '../styles/Footer.scss'
import github from '../assets/github.png'

export default function Footer() {
    return <footer id="footer">
        LEGO, the LEGO logo, the Minifigure, DUPLO, LEGENDS OF CHIMA, NINJAGO, BIONICLE, MINDSTORMS and MIXELS are trademarks and copyrights of the LEGO Group. ©2022 The LEGO Group.<br /> THIS WEB SITE WAS MADE FOR WEB-DEVELOPMENT PRACTICE
        <a href="https://github.com/obviouslymilk/shopping-cart"><img src={github} alt='github'></img></a>
    </footer>
}