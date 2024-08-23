import { Height } from '@mui/icons-material'
import { height } from '@mui/system'
import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux'
import { removeWidget } from '../redux/features/dashBoardSlice'

export default function Widget({widget,categoryId}) {

  const dispatch = useDispatch()

const handleDelete= () =>{
  dispatch(removeWidget({categoryId,widgetId:widget.widgetId}))

}

  return (
   <Box sx={{minWidth: 400, flexShrink: 0,height: 250, backgroundColor: "white",p:4,borderRadius: 5, display: "flex", flexDirection: "column", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
   >
<Typography sx={{color: "black" ,fontWeight: "bold", textStraight: "bold"}}>{widget.widgetName}</Typography>
<SignalCellularAltIcon sx={{color: "gray",mt: 5, width: 100, height: 100, alignSelf: "center"}}/>
<Typography variant='p'sx={{alignSelf: "center"}}>{widget.widgetText} </Typography>
<IconButton color="primary" aria-label="add to shopping cart" sx={{color: "red",mt: 5,  alignSelf: "end"}} onClick={handleDelete}>
<RemoveCircleOutlineIcon  /></IconButton>

   </Box>
  )
}
