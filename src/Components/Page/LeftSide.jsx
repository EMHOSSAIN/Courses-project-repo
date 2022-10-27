import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories]=useState ([])

    useEffect( ()=>{
        fetch('https://learning-server-vert.vercel.app/categories')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div>
          <h4>Course Category : {categories.length}</h4>
            {
                categories.map(category=> <p key={category.id} >
                    <Link to={`/category/${category.id}`}> {category.name} </Link>

                </p>)
            }
        </div>
    );
};

export default LeftSide;