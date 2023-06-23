import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const AgGrid = ({
  columnDefs,
  rowData,
   pagination, 
   paginationPageSize, 
   headerHeight, 
   onGridReady, 
   defaultColDef, 
   rowSelection, 
   onFilterChanged, 
   checkboxSelection, 
   headerCheckboxSelectionFilteredOnly,
   headerCheckboxSelection

   }) => {
  return (
    <div className="ag-theme-alpine" style={{minWidth: '100px', minHeight: '300px' }} >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        headerCheckboxSelection={headerCheckboxSelection} // Enable checkbox selection in the header
        headerCheckboxSelectionFilteredOnly={headerCheckboxSelectionFilteredOnly} // Enable checkbox selection only for filtered rows in the header
        checkboxSelection={checkboxSelection} // Enable checkbox selection for each row
        onFilterChanged={onFilterChanged} // Callback function for filter changes
        rowSelection={rowSelection} // Set the row selection mode
        // rowData={AGData} // Set the data for the grid
        // columnDefs={AgColumnData} // Set the column definitions for the grid
        defaultColDef={defaultColDef} // Set the default column definitions for the grid
        // pagination={true} // Enable pagination
        onGridReady={onGridReady} // Callback function for grid ready event
        // paginationPageSize={100} // Set the number of rows per page in pagination
        headerHeight={headerHeight} // Set the height of the header

      />
    </div>
  );
};

export default AgGrid;
