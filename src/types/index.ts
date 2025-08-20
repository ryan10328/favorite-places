export type Place = {
    id: number;
    title: string;
    imageUrl: string;
    address: string;
    location: Location;
}

export type Location = {
    lat: number;
    lng: number;
}


