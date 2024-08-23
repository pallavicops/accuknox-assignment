import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import Widget from './Widget'

const Widgets = ({ category }) => {
  return (
    <Box sx={{ mt: 10 }}>
  <Typography sx={{color: "black" ,fontWeight: "bold", textStraight: "bold"}}>{category.categoryName}</Typography>
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: 2,
      overflowX: "auto",  // Enables horizontal scrolling
      scrollBehavior: "smooth",  // Smooth scrolling behavior
      paddingBottom: 2,  // Adds padding to avoid clipping of widgets
      scrollbarWidth: "none",  // For Firefox
      "&::-webkit-scrollbar": {
        display: "none",  // For Chrome, Safari, and Edge
      },
    }}
  >
    {category.widgets.map((widget) => (
      <Widget key={widget.widgetId} widget={widget} categoryId={category.categoryId} />
    ))}
  </Box>
</Box>

  )
}

export default Widgets
