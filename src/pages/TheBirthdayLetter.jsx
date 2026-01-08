import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Hi, sayangkuuuuuu</p>
                    <p>
                        sejak pertama kali kamu hadir, banyak hal yang berubah tanpa aku sadari, aku belajar bagaimana rasanya dihargai, dijaga, dan dirayakan sebagai seseorang yang pantas dicintai, aku selalu merasa cukup bahkan lebih dari cukup ketika kamu ada. caramu memahami aku tanpa aku perlu menjelaskan apa apa, caramu mendengarkan aku yapping, dan caramu menenangkan tanpa banyak kata, semua itu membuatku seneng banget rasanya. Kamu cantik, lucuu, menggemaskan, perhatian, kamu bukan hanya cantik dari luar, tapi juga dari hati
                    </p>
                    <p>
                        apa yang membuatku cocok denganmu? 
kamu tuh kenyamanan yang selama ini aku cari cari, kamu bukan hanya seseorang yang aku inginkan, tapi juga seseorang yang aku butuhkan, teman cerita, temen mabar, dan rumah bagiku yang sering merasa lelah, terima kasih sayang🩷
                    </p>
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>Miki</p>
                </div>
            </div>

            <div className="title">
                <p>mau lagi?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/thanks-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">makasih</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sorry-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">maaf</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/happy-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">seneng</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sad-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sedih</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
