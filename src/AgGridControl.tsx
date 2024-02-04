import { withJsonFormsControlProps } from '@jsonforms/react';
import {
  ArrayLayoutProps,
  composePaths,
  createDefaultValue,
  isObjectArrayWithNesting,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import React, { useState } from "react";
import { withJsonFormsArrayLayoutProps, useJsonForms } from "@jsonforms/react";
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { get } from "lodash";


const AgGridControl = ({
  visible,
  enabled,
  id,
  uischema,
  schema,
  label,
  rootSchema,
  renderers,
  cells,
  data,
  path,
  errors,
  uischemas,
  addItem,
  removeItems,
}: ArrayLayoutProps) => {

  const ctx = useJsonForms();
  const rootData = ctx.core!.data;
  const inData = get(rootData, path);

  const [rowData, setRowData] = useState(inData);
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<any>(uischema.options?.colDefs);
  
  return (
    <div style={{height: '400px'}}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  )
}

export default React.memo(
  withJsonFormsArrayLayoutProps(AgGridControl)
);
