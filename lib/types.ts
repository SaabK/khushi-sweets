export interface Product {
    image: string;
    name: string;
    price: number;
}

export interface Testimonial {
    name: string;
    image: string;
    text: string;
}

export interface Social {
    name: string;
    href: string;
    icon: string;
}

export interface ICartItem {
    name: string;
    price: number;
    weight: number;
    quantity: number;
    image: string;
}

// Redux

export interface CartState {
    items: ICartItem[];
    amount: number;
    total: number; // items quantity
}
