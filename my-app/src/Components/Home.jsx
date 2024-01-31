import React from 'react'
import "./home.css"
import HomeData from "../Data/HomeData.json"

function Home() {

    const cardData = cardArray(HomeData, 4);

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active c-item">
                        <img src="https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 c-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Explore Your Dreams</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 c-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Explore Your Dreams</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 c-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Explore Your Dreams</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {HomeData.map(data => {
                    return (
                        <div className="card my-3 mx-1" style={{ width: `18rem` }} key={data.id}>
                            <img src={data.src} className="card-img-top" alt="..." style={{ height: "200px", width: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.text}</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })
                }
            </div> */}

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                {cardData.map((card, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
                        {card.map(data => (
                            <div className="card my-3 mx-1" style={{ width: `18rem` }} key={data.id}>
                                <img src={data.src} className="card-img-top" alt="..." style={{ height: "200px", width: `18rem` }} />
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">{data.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

function cardArray(array, size) {
    const cardsArray = [];
    for (let i = 0; i < array.length; i += size) {
        cardsArray.push(array.slice(i, i + size));
    }
    return cardsArray;
}


export default Home

