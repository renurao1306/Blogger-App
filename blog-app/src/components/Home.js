import React from "react";

function Home() {
    return (
        <>
            <div style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', height: '700px', left: 0, right: 0, position: 'fixed' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '60px', color: '#000' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Welcome to Blogger!</h1>
                    <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>Explore the world of blogging with us. <br/>Share your thoughts, stories, and ideas with the world. <br/>Get inspired by reading the adventures of others!</p>
                </div>
            </div>
        </>
    )
}
export default Home;