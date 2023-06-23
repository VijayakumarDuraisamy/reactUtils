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
    var columnDefs = _a.columnDefs, rowData = _a.rowData;
    return (_jsx("div", __assign({ className: "ag-theme-alpine", style: { height: '300px', width: '100%' } }, { children: _jsx(AgGridReact, { columnDefs: columnDefs, rowData: rowData }) })));
};
export default AgGrid;
