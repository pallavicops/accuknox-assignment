import { Box } from '@mui/material';
import Widgets from './Widgets'
import React from 'react'
import { useSelector } from 'react-redux'

const Categories = () => {
    const categories = useSelector((state) => state.categories);
  return (
   
        categories.map((category) => (
    <Widgets key={category.categoryId} category={category} />
   ))
    
   

  )
}

export default Categories
