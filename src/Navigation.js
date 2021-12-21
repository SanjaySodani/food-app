import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to={'/Home'} className='navbar-brand'>Food App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <Link className='nav-item nav-link' to={'/Burger'}>Burgers</Link>
                    <Link className='nav-item nav-link' to={'/Pizza'}>Pizzas</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;