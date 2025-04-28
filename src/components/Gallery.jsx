import { useEffect, useState, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import '../assets/styles/gallery.css';

const images = [
    {
        src: require('../assets/img/gallery/img-1.jpg'),
        uploadDate: "April 25, 2025",
        description: "My only opportunity to capture the fall colors",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-2.jpg'),
        uploadDate: "April 25, 2025",
        description: "Golden hour in the city",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-3.jpg'),
        uploadDate: "April 26, 2025",
        description: "On a break between a walk",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-4.jpg'),
        uploadDate: "April 27, 2025",
        description: "Sun climbing the mountains",
        location: "Vontimitta, IN",
        type: "Nature"
    },
];

const Gallery = () => {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [selectedType, setSelectedType] = useState('All');

    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)";
    }, []);

    const uniqueTypes = ["All", ...new Set(images.map(img => img.type))];
    const filteredImages = selectedType === "All" ? images : images.filter(img => img.type === selectedType);

    const handleShow = (index) => {
        setCurrentIndex(index);
        setShow(true);
    };

    const handleClose = useCallback(() => {
        setShow(false);
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    }, [filteredImages.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
    }, [filteredImages.length]);

    const currentImage = currentIndex !== null ? filteredImages[currentIndex] : null;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!show) return;

            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [show, handleNext, handlePrev, handleClose]);

    return (
        <div className="gallery-page main-content">
            <div className="filter-bar">
                {uniqueTypes.map((type, idx) => (
                    <button
                        key={idx}
                        className={`filter-button ${selectedType === type ? 'active' : ''}`}
                        onClick={() => setSelectedType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredImages.map((img, index) => (
                    <div key={index} className="gallery-card" onClick={() => handleShow(index)}>
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
                            <div className="modal-image-container">
                                <button className="nav-button fixed-left" onClick={handlePrev}>❮</button>
                                <img src={currentImage.src} alt="Enlarged" className="modal-img" />
                                <button className="nav-button fixed-right" onClick={handleNext}>❯</button>
                            </div>

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
