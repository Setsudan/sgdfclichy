import React from 'react';
import '../styles/pages/Landing.css'

function Home() {
    return (
        <div className="Landing">
            <div id="nav">
                <a href="/Parents">
                    <div className="Parents Left">
                        <h2>Je suis Parents</h2>
                    </div>
                </a>
                <a href="/Scouts" className="disabled">
                    <div className="Scouts Right">
                        <h2>Je suis Scouts</h2>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Home;
