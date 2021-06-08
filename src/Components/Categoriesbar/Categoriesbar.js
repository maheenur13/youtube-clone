import React, { useState } from 'react';
import './_categoriesbar.scss';

const categoryCollection = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Barcelona',
    'Argentina',
    'Brazil',
    'Shwetabh',
    'Brazil',
    'Shwetabh',
    'Brazil',
    'Shwetabh',
    
]
const Categoriesbar = () => {
    const [activeElement, setActiveElement] = useState('All')
    const handleClick = category => {
        setActiveElement(category);
    }
    return (
        <div className="categoriesBar">
            {
                categoryCollection.map((category, i) => <span
                onClick={() => handleClick(category)}
                className={activeElement === category ? 'active' :''}
                key={i}>
                    {category}
                </span>)
            }
        </div>
    );
};

export default Categoriesbar;