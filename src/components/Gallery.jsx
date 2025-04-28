import { useEffect, useState, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import '../assets/styles/gallery.css';

const images = [
    {
        src: require('../assets/img/gallery/img-1.jpg'),
        uploadDate: "December 14, 2024",
        description: "My only opportunity to capture the fall colors in '24",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-2.jpg'),
        uploadDate: "January 13, 2025",
        description: "Golden hour in the city",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-3.jpg'),
        uploadDate: "January 18, 2025",
        description: "On a break between a walk",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-4.jpg'),
        uploadDate: "March 6, 2025",
        description: "Sun climbing the mountains",
        location: "Vontimitta, IN",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-5.jpg'),
        uploadDate: "April 28, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-6.jpg'),
        uploadDate: "April 29, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-7.jpg'),
        uploadDate: "April 30, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-8.jpg'),
        uploadDate: "May 1, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-9.jpg'),
        uploadDate: "May 2, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-10.jpg'),
        uploadDate: "May 3, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-11.jpg'),
        uploadDate: "May 4, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-12.jpg'),
        uploadDate: "May 5, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-13.jpg'),
        uploadDate: "May 6, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-14.jpg'),
        uploadDate: "May 7, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-15.jpg'),
        uploadDate: "May 8, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-16.jpg'),
        uploadDate: "May 9, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-17.jpg'),
        uploadDate: "May 10, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-18.jpg'),
        uploadDate: "May 11, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-19.jpg'),
        uploadDate: "May 12, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-20.jpg'),
        uploadDate: "May 13, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
    },
    {
        src: require('../assets/img/gallery/img-21.jpg'),
        uploadDate: "May 14, 2025",
        description: "A beautiful sunset",
        location: "Dallas, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-22.jpg'),
        uploadDate: "May 15, 2025",
        description: "Running in the park",
        location: "Dallas, TX",
        type: "Running"
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
                        <img
                            src={img.src}
                            alt={`Gallery ${index}`}
                            className={`gallery-img ${img.loaded ? 'loaded' : ''}`}
                            loading="lazy"
                            onLoad={(e) => e.target.classList.add('loaded')}
                        />
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
