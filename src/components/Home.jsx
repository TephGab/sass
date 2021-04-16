import React from 'react';

const Home = () => {
    return (
        <main>
            <div className="carousel">
                <div className="carousel__figure">
                    <img src="./media/car1.jpg" alt="moon" className="carousel__figure--pic"/>
                    <img src="./media/car1.jpg" alt="space" className="carousel__figure--pic"/>
                    <img src="./media/car1.jpg" alt="" className="carousel__figure--pic"/>
                </div>
            </div>
        </main>
    );
};

export default Home;