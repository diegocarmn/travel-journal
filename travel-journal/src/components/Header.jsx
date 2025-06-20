import logo from '../assets/globe-logo.svg';

function Header() {
    return (
        <nav className="header">
            <img className="header-logo" src={logo} alt="white globe logo" />
            <span className="header-title">my travel journal.</span>
        </nav>
    )
}
export default Header