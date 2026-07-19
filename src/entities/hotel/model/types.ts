export type Hotel = {
    id: string;
    name: string;
    city: string;
    country: string;
    address: string;
    description: string;
    pricePerNight: number;
    rating: number;
    reviewCount: number;
    amenities: string[];
    coordinates: {
        lat: number;
        lng: number;
    };
    images: string[];      
};
