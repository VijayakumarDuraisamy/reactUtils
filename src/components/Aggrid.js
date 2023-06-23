import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const AgGrid = ({ columnDefs, rowData }) => {
    return (
      <div className="ag-theme-alpine" style={{ height: '300px', width: '100%' }}>
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    );
  };
  
  export default AgGrid;
  