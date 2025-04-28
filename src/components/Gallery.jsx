import { useEffect, useState, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import '../assets/styles/gallery.css';

const images = [
    {
        src: require('../assets/img/gallery/img-1.jpg'),
        uploadDate: "December 14, 2024",
        description: "Last Glimpse of Fall '24",
        location: "Farmers Branch, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-2.jpg'),
        uploadDate: "January 13, 2025",
        description: "The Hidden Gem",
        location: "Farmers Branch, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-3.jpg'),
        uploadDate: "January 18, 2025",
        description: "Abscission",
        location: "Irving, TX",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-4.jpg'),
        uploadDate: "March 6, 2025",
        description: "Delayed by the Mountains",
        location: "Vontimitta, IN",
        type: "Nature"
    },
    {
        src: require('../assets/img/gallery/img-5.jpg'),
        uploadDate: "June 27, 2024",
        description: "Vegan Spinach Pasta",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-6.jpg'),
        uploadDate: "August 5, 2024",
        description: "Banana Bread",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-7.jpg'),
        description: "Hakka Noodles w/ Chilli Paneer",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-8.jpg'),
        uploadDate: "September 6, 2024",
        description: "Bagels",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-9.jpg'),
        uploadDate: "September 6, 2024",
        description: "Vinayaka Chaturthi '24",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-10.jpg'),
        uploadDate: "September 22, 2024",
        description: "Neapolitan Pizza",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-11.jpg'),
        uploadDate: "Devember 14, 2024",
        description: "Brioche Buns",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-12.jpg'),
        uploadDate: "December 15, 2024",
        description: "Baby Koala w/ Mama",
        location: "Dallas, TX",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-13.jpg'),
        uploadDate: "December 24, 2024",
        description: "Hot Chocolate",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-14.jpg'),
        uploadDate: "January 2, 2025",
        description: "Lillies",
        location: "Dallas, TX",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-15.jpg'),
        uploadDate: "January 12, 2025",
        description: "Drunken Noodles",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-16.jpg'),
        uploadDate: "January 18, 2025",
        description: "Waffles",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-17.jpg'),
        uploadDate: "January 19, 2025",
        description: "Shrimp Tempura Rolls",
        location: "Dallas, TX",
        type: "Cooking/Baking"
    },
    {
        src: require('../assets/img/gallery/img-18.jpg'),
        uploadDate: "January 22, 2025",
        description: "The Living Room",
        location: "Dallas, TX",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-19.jpg'),
        uploadDate: "January 26, 2025",
        description: "A City Street",
        location: "Dallas, TX",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-20.jpg'),
        uploadDate: "January 30, 2025",
        description: "A Peaceful Lake",
        location: "Dallas, TX",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-21.jpg'),
        uploadDate: "February 12, 2025",
        description: "Mt. Fuji",
        location: "Dallas, TX",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-22.jpg'),
        uploadDate: "February 25, 2025",
        description: "The Stare",
        location: "Dallas, TX",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-23.jpg'),
        uploadDate: "March 13, 2025",
        description: "Simba",
        location: "Hyderabad, IN",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-24.jpg'),
        uploadDate: "March 14, 2025",
        description: "Cabin in the Woods",
        location: "Hyderabad, IN",
        type: "Painting/Sketching"
    },
    {
        src: require('../assets/img/gallery/img-25.jpg'),
        uploadDate: "April 17, 2025",
        description: "Sakura",
        location: "Dallas, TX",
        type: "Painting/Sketching"
    },
];

const sortByDate = (images) => {
    return images.slice()
        .sort((a, b) => {
            const dateA = a.uploadDate ? new Date(a.uploadDate) : null;
            const dateB = b.uploadDate ? new Date(b.uploadDate) : null;

            if (dateA && dateB) {
                return dateB - dateA;
            } else if (dateA && !dateB) {
                return -1;
            } else if (!dateA && dateB) {
                return 1;
            } else {
                return 0;
            }
        })
}

const Gallery = () => {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [selectedType, setSelectedType] = useState('All');

    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)";
    }, []);

    const uniqueTypes = ["All", ...new Set(images.map(img => img.type))];
    let filteredImages = (selectedType === "All" ? images : images.filter(img => img.type === selectedType));
    filteredImages = sortByDate(filteredImages);

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
                                <p className="gallery-location">📍 {img.location || "Unknown Location"}</p>
                                <p className="gallery-date">{img.uploadDate || "Unknown Date"}</p>
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
                                <h5 className="modal-title">{currentImage.description}</h5>

                                <div className="modal-bottom">
                                    <p className="modal-location">📍 {currentImage.location || "Unknown Location"}</p>
                                    <p className="modal-date">{currentImage.uploadDate || "Unknown Date"}</p>
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
