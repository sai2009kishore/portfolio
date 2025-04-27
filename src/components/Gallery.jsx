import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../assets/styles/gallery.css';

const images = [
    {
        src: require('../assets/img/gallery/img-1.jpg'),
        uploadDate: "April 25, 2025",
        description: "My only opportunity to capture the fall colors.",
        location: "Dallas, TX"
    },
    {
        src: require('../assets/img/gallery/img-2.jpg'),
        uploadDate: "April 25, 2025",
        description: "Golden hour in the city.",
        location: "Dallas, TX"
    },
    {
        src: require('../assets/img/gallery/img-3.jpg'),
        uploadDate: "April 26, 2025",
        description: "On a break in between a walk.",
        location: "Dallas, TX"
    },
    {
        src: require('../assets/img/gallery/img-4.jpg'),
        uploadDate: "April 27, 2025",
        description: "Sun climbing the mountains.",
        location: "Vontimitta, IN"
    },
];

const Gallery = () => {
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        document.body.style.background = "linear-gradient(to top right, #7F7FD5, #86A8E7, #91EAE4)";
    }, []);

    const handleShow = (img) => {
        setCurrentImage(img);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <div className="gallery-page main-content">
            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div key={index} className="gallery-card" onClick={() => handleShow(img)}>
                        <img src={img.src} alt={`Gallery ${index}`} className="gallery-img" />
                        <div className="gallery-info">
                            <p className="gallery-description">{img.description}</p>
                            <div className="gallery-bottom">
                                {img.location && (
                                    <p className="gallery-location">📍 {img.location}</p>
                                )}
                                <p className="gallery-date">{img.uploadDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="custom-modal">
                <Modal.Body className="modal-body-custom">
                    {currentImage && (
                        <>
                            <img src={currentImage.src} alt="Enlarged" className="modal-img" />
                            <div className="modal-caption">
                                <h5>{currentImage.description}</h5>
                                <div className="modal-bottom">
                                    {currentImage.location && (
                                        <p className="modal-location">📍 {currentImage.location}</p>
                                    )}
                                    <p className="modal-date">{currentImage.uploadDate}</p>
                                </div>
                            </div>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Gallery;
