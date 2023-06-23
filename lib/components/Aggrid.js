var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
var AgGrid = function (_a) {
    var columnDefs = _a.columnDefs, rowData = _a.rowData, pagination = _a.pagination, paginationPageSize = _a.paginationPageSize, headerHeight = _a.headerHeight, onGridReady = _a.onGridReady, defaultColDef = _a.defaultColDef, rowSelection = _a.rowSelection, onFilterChanged = _a.onFilterChanged, checkboxSelection = _a.checkboxSelection, headerCheckboxSelectionFilteredOnly = _a.headerCheckboxSelectionFilteredOnly, headerCheckboxSelection = _a.headerCheckboxSelection;
    return (_jsx("div", __assign({ className: "ag-theme-alpine", style: { minWidth: '100px', minHeight: '300px' } }, { children: _jsx(AgGridReact, { columnDefs: columnDefs, rowData: rowData, pagination: pagination, paginationPageSize: paginationPageSize, headerCheckboxSelection: headerCheckboxSelection, headerCheckboxSelectionFilteredOnly: headerCheckboxSelectionFilteredOnly, checkboxSelection: checkboxSelection, onFilterChanged: onFilterChanged, rowSelection: rowSelection, 
            // rowData={AGData} // Set the data for the grid
            // columnDefs={AgColumnData} // Set the column definitions for the grid
            defaultColDef: defaultColDef, 
            // pagination={true} // Enable pagination
            onGridReady: onGridReady, 
            // paginationPageSize={100} // Set the number of rows per page in pagination
            headerHeight: headerHeight }) })));
};
export default AgGrid;
