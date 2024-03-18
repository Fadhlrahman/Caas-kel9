import React from 'react';
import './CMcss.css'; // File CSS untuk menambahkan gaya khusus
import Image1 from '../assets/nopal.jpg';
import Image2 from '../assets/arsil.jpg';
import Image3 from '../assets/Addhiya.jpg';
import Image4 from '../assets/citra.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const TMprofile = () => {
    return (
        <div className="container team-profile">
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="member">
                        <img src={Image1} alt="Nopal" width="200" height="auto"/>
                        <h2>Naufal Fawwaz M</h2>
                        <p>1101223070</p>
                            <a href="https://github.com/Novaafm" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="member">
                        <img src={Image2} alt="Arsil" width="200" height="auto"/>
                        <h2>Fadhlrahman Fitra Arsil</h2>
                        <p>1101223151</p>
                            <a href="https://github.com/Fadhlrahman" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="member">
                        <img src={Image3} alt="Addhiya" width="200" height="auto"/>
                        <h2>Ad Dhiya Fahma Bilnadzary N</h2>
                        <p>1101220264</p>
                            <a href="https://github.com/Addhiya" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="member">
                        <img src={Image4} alt="Citra" width="200" height="auto"/>
                        <h2>Citra Kusumadewi Sribawono</h2>
                        <p>101012340196</p>
                            <a href="https://github.com/citraakusumadewi" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TMprofile;
