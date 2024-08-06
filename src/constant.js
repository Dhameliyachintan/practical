import fotiosimage from './image/pexels-fotios-photos-1092644.jpg'
import leptopimage from './image/pexels-pixabay-356056.jpg'
import cameraimage from './image/pexels-fujifilmusa-3497065.jpg'

export const menuItemsdata = [
    {
        name: 'Home',
        link: '#home',
    },
    {
        name: 'Services',
        submenu: [
            { name: 'Web Development', link: '#webdev' },
            { name: 'App Development', link: '#appdev' },
            { name: 'SEO', link: '#seo' },
        ],
    },
    {
        name: 'About',
        link: '#about',
    },
    {
        name: 'Contact',
        submenu2: [
            { name: 'Email', link: '#email' },
            { name: 'Phone', link: '#phone' },
        ],
    },
];


export const categories = [
    {
        id: 1,
        name: 'Electronics',
    },
    {
        id: 2,
        name: 'Books'
    },
    {
        id: 3,
        name: 'Clothing'
    },
];


export const subcategoriesdata = [
    {
        id: 1,
        subcategories: [
            { name: 'Mobile Phones', link: '#mobile-phones', image: fotiosimage },
            { name: 'Laptops', link: '#laptops', image: leptopimage },
            { name: 'Cameras', link: '#cameras', image: cameraimage },
        ],
    },
    {
        id: 2,
        subcategories: [
            { name: 'Refrigerators', link: '#refrigerators', image: fotiosimage },
            { name: 'Washing Machines', link: '#washing-machines', image: fotiosimage },
            { name: 'Air Conditioners', link: '#air-conditioners', image: fotiosimage },
        ],
    },
    {
        id: 3,
        subcategories: [
            { name: 'Fiction', link: '#fiction', image: fotiosimage },
            { name: 'Non-Fiction', link: '#non-fiction', image: fotiosimage },
            { name: 'Educational', link: '#educational', image: fotiosimage },
        ],
    },
]


export const countries = [
    {
        name: 'india',
        value: 'IN',
        cities: [
            'Delhi',
            'Mumbai'
        ]
    },
    {
        name: 'Delhi',
        value: 'IN',
        cities: [
            'Delhis',
            'Mumbai'
        ]
    },
    {
        name: 'Pune',
        value: 'IN',
        cities: [
            'Delhiss',
            'Mumbai'
        ]
    }
]