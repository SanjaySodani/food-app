import './App.css';

function Item(props) {
    return (
        <div className="col my-2">
            <div className="card">
                <div className='cardImgDiv'>
                    <img src={props.details.image} className="card-img-top cardImg" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.details.name}</h5>
                    <h6 className="card-subtitle text-muted">Price : {props.details.price} Rs</h6>
                    <p className="card-text mt-2">{props.details.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;