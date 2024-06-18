import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import blogs1 from '../assets/blog1.jpg'
import blogs2 from '../assets/blog2.jpg'
import blogs3 from '../assets/blog3.jpg'
import blogs4 from '../assets/blog4.jpg'

import { FaFacebookF, FaSquareInstagram, FaXTwitter, FaLinkedin, FaYoutube, } from "react-icons/fa6"

export const PROPERTIES = [
  {
    "title": "Tranquil Terrace Tranquility Haven",
    "image": img1,
    "category": "Cottage",
    "address": "Via Roma 21",
    "country": "Italy",
    "city": "Florence",
    "area": 450,
    "price": 450,
    "description": "Charming bungalow with modern amenities and scenic views.",
    "facilities": {
      "bedrooms": 3,
      "bathrooms": 2,
      "parkings": 1
    }
  },
  {
    "title": "Sunset Serenity Villa",
    "image": img2,
    "category": "Villa",
    "address": "Sunset Boulevard 14",
    "country": "Spain",
    "city": "Barcelona",
    "area": 600,
    "price": 800,
    "description": "Luxurious villa with breathtaking sunset views and a private pool.",
    "facilities": {
      "bedrooms": 4,
      "bathrooms": 3,
      "parkings": 2
    }
  },
  {
    "title": "Mountain Majesty Cabin",
    "image": img3,
    "category": "Cabin",
    "address": "Alpine Road 10",
    "country": "Switzerland",
    "city": "Zermatt",
    "area": 300,
    "price": 600,
    "description": "Cozy cabin nestled in the mountains with stunning alpine views.",
    "facilities": {
      "bedrooms": 2,
      "bathrooms": 2,
      "parkings": 1
    }
  },
  {
    "title": "Urban Oasis Apartment",
    "image": img4,
    "category": "Apartment",
    "address": "Main Street 50",
    "country": "Germany",
    "city": "Berlin",
    "area": 200,
    "price": 300,
    "description": "Modern apartment in the heart of the city with all urban conveniences.",
    "facilities": {
      "bedrooms": 1,
      "bathrooms": 1,
      "parkings": 0
    }
  },
  {
    "title": "Seaside Serenity Retreat",
    "image": img5,
    "category": "Retreat",
    "address": "Beach Road 7",
    "country": "Australia",
    "city": "Sydney",
    "area": 500,
    "price": 700,
    "description": "Serene retreat by the sea with direct beach access and ocean views.",
    "facilities": {
      "bedrooms": 3,
      "bathrooms": 2,
      "parkings": 1
    }
  },
]

export const BLOGS = [
  {
    title: "Tranquil Terrace Tranquility Haven",
    image: blogs1,
    category: 'Cottage',
  },
  {
    title: "Oceanview Oasis Serenity Escape",
    image: blogs2,
    category: 'Residence',
  },
  {
    title: "Sunrise Sanctuary Solace Retreat",
    image: blogs3,
    category: 'House',
  },
  {
    title: "Urban Elegance Sophistication",
    image: blogs4,
    category: 'Property',
  }
]

export const FOOTER_LINKS = [
  {
    title: "Learn more",
    links: [
      "About Us",
      "Latest Items",
      "Hot Offers",
      "Popular Residencies",
      "FAQs",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: [
      "Terms and Conditions",
      "Special Offers",
      "Customer Reviews"
    ]
  }
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-789" },
    { label: "Email Address", value: "info@casacentral.com" },

  ]
}

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: FaFacebookF },
    { icon: FaSquareInstagram },
    { icon: FaXTwitter },
    { icon: FaLinkedin },
    { icon: FaYoutube },
  ]
}