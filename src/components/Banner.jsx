function Banner (props) {
    return (
        <div className="banner">
            <img src={props.image} alt="Bannière" className="banner-img" />
            <div className="banner-overlay"></div>
            {props.text && <h1 className="banner-text">{props.text}</h1>}
        </div>
    );
}

export default Banner;