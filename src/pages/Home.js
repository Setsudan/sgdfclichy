import React from 'react';
import '../styles/pages/Landing.css'

function Home() {
    return (
        <div className="Landing">
            <div id="nav">
                <a href="/Choombas">
                    <div className="Parents Left">
                        <h2>Je n'ai jamais fait Scouts</h2>
                    </div>
                </a>
                <a href="/Scouts">
                    <div className="Scouts Right">
                        <h2>J'ai déjà été Scouts</h2>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Home;
