import { faker } from '@faker-js/faker';
import type { Hotel } from '../../entities/hotel/model/types';

const cities = [
    {
        name: 'Moscow',
        country: 'Russia',
        lat: 55.7558,
        lng: 37.6173,
    },
    {
        name: 'New York',
        country: 'USA',
        lat: 40.7128,
        lng: -74.0060,
    },
    {
        name: 'Tokyo',
        country: 'Japan',
        lat: 35.6895,
        lng: 139.6917,
    },
    {
        name: 'Paris',
        country: 'France',
        lat: 48.8566,
        lng: 2.3522,
    },
    {
        name: 'London',
        country: 'UK',
        lat: 51.5074,
        lng: -0.1278,
    }
]

const amenties = [
    'Free Wi-Fi',
    'Swimming Pool',
    'Fitness Center',
    'Spa',
    'Restaurant',
    'Bar',
    'Room Service',
    'Airport Shuttle',
    'Pet-Friendly',
    'Parking',
];

const generateHotels = (): Hotel => {
    const city = faker.helpers.arrayElement(cities);
    const amenities = faker.helpers.arrayElements(amenties, faker.number.int({ min: 3, max: 7 }));
    const pricePerNight = faker.number.int({ min: 50, max: 500 });
    const rating = faker.number.float({ min: 1, max: 5, fractionDigits: 1 });
    const reviewCount = faker.number.int({ min: 0, max: 1000 });

    return {
        id: faker.string.uuid(),
        name: faker.company.name(),
        city: city.name,
        country: city.country,
        address: faker.location.streetAddress(),
        description: faker.lorem.paragraphs(2),
        pricePerNight,
        rating,
        reviewCount,
        amenities,
        images: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.image.url()),
        coordinates: {
            lat: city.lat + faker.number.float({ min: -0.05, max: 0.05 }),
            lng: city.lng + faker.number.float({ min: -0.05, max: 0.05 }),
        },
    };
}

export const hotels: Hotel[] = Array.from({ length: 20 }, generateHotels);


