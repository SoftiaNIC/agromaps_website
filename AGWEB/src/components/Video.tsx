import React from 'react';

const Video: React.FC = () => {
    return (
        <section className="video-section">
            <div className="container">
                <div className="video-content">
                    <h2>Nuestro Video</h2>
                    <div className="video-container">
                        {/* Aquí puedes agregar tu video o iframe */}
                        <div className="video-placeholder">
                            <p>Video placeholder - Agrega tu contenido aquí</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;
