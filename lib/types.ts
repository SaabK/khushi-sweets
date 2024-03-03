export interface Product {
    image: string;
    name: string;
    price: number;
    weight: number;
    _id: string;
    isFeatured?: boolean;
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

export interface CartItemType extends Product {
    quantity: number;
}

// Redux

export interface CartState {
    items: CartItemType[];
    amount: number;
    total: number; // items quantity
}
