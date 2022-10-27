import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pdfData/Data'
import Data from '../pdfData/Data';

const LeftSide = () => {
    const [categories, setCategories]=useState ([])
    console.log(categories[0])

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
            <Data></Data>
        </div>
    );
};

export default LeftSide;