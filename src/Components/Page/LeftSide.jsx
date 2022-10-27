import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categoryes, setCategories]=useState ([])

    useEffect( ()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div>
          <h4>Course Category : {categoryes.length}</h4>
            {
                categoryes.map(category=> <p key={category.id} >
                    <Link to={`/category/${category.id}`}> {category.name} </Link>

                </p>)
            }
        </div>
    );
};

export default LeftSide;