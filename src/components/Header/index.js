import './header.css'


const Header = () => {
    return (
        <header>

            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#" id='logo'>{'<'}<strong>Luan</strong>{'/>'}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-5" id="navbarNav">
                        <ul className="navbar-nav" id="ul">
                            <li className="nav-item">
                                <a className="nav-link" href="#apresentation" id='navbar-item'>About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skillsSection" id='navbar-item'>Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projectsSection" id='navbar-item'>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactSection" id='navbar-item'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </header>
    )
}

export default Header