import React from 'react';
import './DeskripsiAlat.css'; // File CSS untuk menambahkan gaya khusus

const DeskripsiAlat = () => {
    return (
        <div className="deskripsi-alat">
            <h3>SDAL ADALAH:</h3>
            <p className="text-black section"> {/* Mengubah warna teks menjadi putih */}
                IoT Smart Door Access dan Pencahayaan Otomatis adalah solusi inovatif yang menggabungkan teknologi Internet of Things (IoT) untuk memberikan akses pintu yang aman dan efisien serta mengatur pencahayaan ruangan secara otomatis.
            </p>
            <div className="text-black section">
                <h3>Fungsionalitas:</h3>
                <ul>
                    <li>Akses Pintu Cerdas dengan Sensor RFID</li>
                    <li>Pencahayaan Otomatis dengan Sensor Cahaya (LDR)</li>
                </ul>
            </div>
            <div className="text-black section">
                <h3>Cara Kerja:</h3>
                <ol>
                    <li>Membuka Akses Pintu</li>
                    <li>Pengaturan Pencahayaan Otomatis</li>
                </ol>
            </div>
            <div className="text-black section">
                <h3>Keuntungan:</h3>
                <ul>
                    <li>Keamanan Tinggi</li>
                    <li>Efisiensi Energi</li>
                </ul>
            </div>
            <div className="text-black section">
                <h3>Kesimpulan:</h3>
                <p>
                    IoT Smart Door Access dan Pencahayaan Otomatis adalah solusi yang ideal untuk meningkatkan keamanan dan efisiensi energi dalam lingkungan rumah atau kantor. Dengan kombinasi antara akses pintu pintar berbasis RFID dan pengaturan pencahayaan otomatis, pengguna dapat merasakan kenyamanan dan kemudahan dalam mengelola akses pintu dan pencahayaan ruangan.
                </p>
            </div>
        </div>
    );
}

export default DeskripsiAlat;
