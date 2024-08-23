import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = {
    "categories": [
      {"categoryId": nanoid(),
        "categoryName": "CSPM Executive Dashboard",
        "widgets": [
          {
            "widgetId": nanoid(),
            "widgetName": "Widget 1",
            "widgetText": "This is some random text for Widget 1."
          },
          {
            "widgetId": nanoid(),
            "widgetName": "Widget 2",
            "widgetText": "This is some random text for Widget 2."
          }
        ]
      },
      {"categoryId": nanoid(),
        "categoryName": "Security Overview",
        "widgets": [
          {
            "widgetId": nanoid(),
            "widgetName": "Widget 3",
            "widgetText": "This is some random text for Widget 3."
          }
        ]
      }
    ]
  }

  export const dashBoardSlice = createSlice({
    name: "dashBoard",
    initialState,
    reducers: {
      addCategory: (state, action) => {
        const newCategory = {
          "categoryId": nanoid(),
          "categoryName": action.payload.categoryName,
          "widgets": []
        }
        state.categories.push(newCategory)
      },
      addWidget: (state, action) => {
        const { categoryId, widgetName, widgetText } = action.payload;
      
        // Find the category by categoryId
        const category = state.categories.find(cat => cat.categoryId === categoryId);
      
        if (category) {
          const newWidget = {
            widgetId: nanoid(),
            widgetName,
            widgetText
          };
          category.widgets.push(newWidget);
        } else {
          console.error(`Category with ID ${categoryId} not found`);
        }
      },
      removeCategory: (state, action) => {
        state.categories = state.categories.filter(category => category.categoryId !== action.payload.categoryId)
      },
      removeWidget: (state, action) => {
        const { categoryId, widgetId } = action.payload;
      
        // Find the category by categoryId
        const category = state.categories.find(cat => cat.categoryId === categoryId);
      
        if (category) {
          category.widgets = category.widgets.filter(widget => widget.widgetId !== widgetId);
        } else {
          console.error(`Category with ID ${categoryId} not found`);
        }
      },
      searchByWidgetName: (state, action) => {
        const searchTerm = action.payload.toLowerCase();
        const results = [];
  
        state.categories.forEach((category) => {
          category.widgets.forEach((widget) => {
            if (widget.widgetName.toLowerCase().includes(searchTerm)) {
              results.push({ ...widget, categoryId: category.categoryId });
            }
          });
        });
  
        return results; // This will return the results to the caller
      },

    }
  })

  export const {addCategory, addWidget, removeCategory, removeWidget, searchByWidgetName} = dashBoardSlice.actions
  export default dashBoardSlice.reducer