import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ExitToApp from "@mui/icons-material/ExitToApp";
import InputBase from "@mui/material/InputBase";
import { ButtonGroup, FormControl, FormGroup, InputLabel, Paper, Popper, TableContainer,Select, TextField, MenuList, MenuItem } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import { Label } from "@mui/icons-material";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import { addCategory, addWidget, searchByWidgetName } from "../redux/features/dashBoardSlice";
import { useSelector } from "react-redux";



const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [openWidget, setOpenWidget] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [categoryName, setCategoryName] = React.useState('');
  const [widgetName, setWidgetName] = React.useState('');
  const [widgetText, setWidgetText] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);
  

  const handleSearch = (searchTerm) => {
    // const results = dispatch(searchByWidgetName(searchTerm));
    // console.log(results);
  };


  const toggleDrawer = (newOpen, openWidget = false) => () => {
    setOpenWidget(openWidget);
    setOpen(newOpen);
  };

  const handleChange = (event) => {
    setCategory(event.target.value );
  };
  const handleAddCategory = () => {
   
    dispatch(addCategory({categoryName}));
   
    setCategoryName('')
    toggleDrawer(false)


  }
  const handleAddWidget = () => {

    dispatch(addWidget({categoryId: category, widgetName, widgetText}));
    setWidgetName('')
    setWidgetText('')
    setCategory('')
    toggleDrawer(false)

  }

  const DrawerList = (
    <Box sx={{ width: 500 }} role="presentation">
      <TableContainer
        sx={{ backgroundColor: "#1F1F38", display: "flex", width: "inherit" }}
      >
        <Typography
          variant="p"
          component="div"
          sx={{ flexGrow: 1, p: 1, color: "white" }}
        >
          {openWidget ? "Add Widget" : "Add Category"}
        </Typography>
        <IconButton onClick={toggleDrawer(false)}> <ExitToApp sx={{ color: "white" }} /></IconButton>
      </TableContainer>
      <FormGroup sx={{ m: 5, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <FormControl>
          <InputLabel>{openWidget ? "Enter Widget Name" : "Enter Category Name"}</InputLabel>
          <Input fullWidth sx={{ p: 1, mb: 1, color: "black" }} value={openWidget ? widgetName : categoryName} onChange={(e) => openWidget ? setWidgetName(e.target.value) : setCategoryName(e.target.value)} />
        </FormControl>
        {openWidget && (
          <FormControl >
            <InputLabel>Enter Widget Text</InputLabel>
            <Input fullWidth sx={{ p: 1, mt: 1,mb:2, color: "black" }} value={widgetText} onChange={(e) => setWidgetText(e.target.value)}/>
          </FormControl>
          )}
            {openWidget && (
              <FormControl>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="select-category"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          {categories.map((category) => (
            <MenuItem key={category.categoryId} value={category.categoryId}>
              {category.categoryName}
            </MenuItem>
          ))}
        </Select>
          </FormControl>
        )}
        <Button variant="contained" sx={{ mt: 60, boxShadow: "inherit", backgroundColor: "#1F1F38", color: "white", border: "1px solid #1F1F38", ":hover": { backgroundColor: "#1F1F38", border: "1px solid #1F1F38" } }}
        onClick={openWidget ? handleAddWidget : handleAddCategory}
        >
          Add
        </Button>
      </FormGroup>
    </Box>
  );


  return (
    <Box sx={{ p: 0, m: 0 }}>
      <AppBar
        sx={{ backgroundColor: "#DDEAF0", p: 0, m: 0, boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="p" component="div" sx={{ flexGrow: 1, color: "black" }}>
            CNAPP Dashboard
          </Typography>
          <Paper sx={{ p: 1, backgroundColor: "transparent" }} elevation={0}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Widgets by name"
              inputProps={{ "aria-label": "search google maps" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={() => handleSearch(searchTerm)}>
              <SearchIcon />
            </IconButton>
          </Paper>

          <Button
            sx={{
              ml: 1,
              border: "1px solid black",
              color: "black",
              fontSize: "12px",
            }}
            endIcon={<AddIcon />}
            variant="outlined"
            onClick={toggleDrawer(true, false)}
          >
            Add Category
          </Button>
          <Button
            sx={{
              ml: 1,
              border: "1px solid black",
              color: "black",
              fontSize: "12px",
            }}
            onClick={toggleDrawer(true, true)}
            endIcon={<AddIcon />}
            variant="outlined"
          >
            Add Widget
          </Button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
