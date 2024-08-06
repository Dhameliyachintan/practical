import React, { useState } from 'react';
import { categories, subcategoriesdata } from '../constant';

export default function CategoryData() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <>
            <div>
                <div className='logo'>
                    <h1>Categories</h1>
                </div>
                <nav>
                    <div className='categories-flex'>
                        {categories.map(category => (
                            <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                                {category.name}
                            </li>
                        ))}
                    </div>
                    <div>
                        <h2>Subcategories</h2>
                        {selectedCategory !== null && (
                            <div className='d-flex'>
                                <ul>
                                    {subcategoriesdata.filter(subcategory => subcategory.id === selectedCategory).map(subcategorydata => (
                                        <div key={subcategorydata.id} className='d-flex justify-content-between'>
                                            {subcategorydata.subcategories.map(subcategory => (
                                                <div className='width me-2'>
                                                    <li key={subcategory.name}>
                                                        <a href={subcategory.link}>{subcategory.name}</a>
                                                        <img src={subcategory.image} alt="" />
                                                    </li>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}
