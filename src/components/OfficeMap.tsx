import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './OfficeMap.css';

// Fix Leaflet default marker icon issue with bundlers
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

interface OfficeLocation {
    name: string;
    address: string;
    lat: number;
    lng: number;
}

const offices: OfficeLocation[] = [
    {
        name: 'Delhi – Surajmal Vihar',
        address: 'D-90 Surajmal Vihar, Near Yamuna Sports Complex Gate No.1, Delhi-110092',
        lat: 28.6285,
        lng: 77.3028,
    },
    {
        name: 'Delhi – Kashmere Gate',
        address: '1246, Chhota Bazar, Kashmere Gate, Delhi-110006',
        lat: 28.6672,
        lng: 77.2273,
    },
    {
        name: 'Noida',
        address: 'BS-104, Sec 70, Noida, U.P. - 201301',
        lat: 28.5744,
        lng: 77.3701,
    },
    {
        name: 'New Delhi – Panchsheel Enclave',
        address: 'B-19, Basement, Panchsheel Enclave, New Delhi - 110017',
        lat: 28.5535,
        lng: 77.2196,
    },
];

const OfficeMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Centre the map between all offices
        const map = L.map(mapRef.current, {
            scrollWheelZoom: false,
        }).setView([28.61, 77.29], 11);

        mapInstanceRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 18,
        }).addTo(map);

        // Add markers for each office
        offices.forEach((office) => {
            L.marker([office.lat, office.lng])
                .addTo(map)
                .bindPopup(
                    `<strong>${office.name}</strong><br/>${office.address}`
                );
        });

        // Fit bounds to show all markers with padding
        const bounds = L.latLngBounds(offices.map((o) => [o.lat, o.lng]));
        map.fitBounds(bounds, { padding: [40, 40] });

        return () => {
            map.remove();
            mapInstanceRef.current = null;
        };
    }, []);

    return (
        <div className="office-map">
            <h3 className="office-map__title">Our Office Locations</h3>
            <div className="office-map__container" ref={mapRef} />
        </div>
    );
};

export default OfficeMap;
