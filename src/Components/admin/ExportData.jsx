import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { useGridApiRef, useKeepGroupedColumnsHidden } from '@mui/x-data-grid-premium';
import TableExport from './TableExport';
import axios from 'axios';
import { server } from '../../main';



const ExportData = () => {
    const [rows, setRows] = useState([]);
    const apiRef = useGridApiRef(); // Use Grid API reference

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${server}/apply/get-all-applicants`, { withCredentials: true });  // Make sure this endpoint is correct
                setRows(response.data.applicants.map((user) => ({
                    ...user,
                    id: user._id,
                })));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    // Group by cementName and aggregate the quantity
    const initialState = useKeepGroupedColumnsHidden({
        apiRef,
        initialState: {
            rowGrouping: { model: ["id"] }, // Group by cementName
            aggregation: { model: { quantity: 'sum' } }, // Sum quantity for each group
        },
    });



    const columns = [
        {
            field: "serial",
            headerName: "S.No",
            headerClassName: "table-header",
            width: 70,
            renderCell: (params) => {
                // Get the index from the rows array based on the params.row.id
                const index = rows.findIndex((row) => row.id === params.row.id);
                return <span>{index + 1}</span>; // Add 1 to make it 1-based index
            },
        },

        { field: 'title', headerName: 'Title', headerClassName: 'table-header', width: 250 },
        { field: 'locationDescription', headerName: 'Location Description', headerClassName: 'table-header', width: 200 },
        { field: 'typeOfRO', headerName: 'Type Of RO', headerClassName: 'table-header', width: 200 },
        { field: 'modeOfSelection', headerName: 'Mode Of Selection', headerClassName: 'table-header', width: 250 },
        { field: 'state', headerName: 'State', headerClassName: 'table-header', width: 300 },
        { field: 'publishedDate', headerName: 'Published Date', headerClassName: 'table-header', width: 250 },
        { field: 'closingDate', headerName: 'Closing Date', headerClassName: 'table-header', width: 200 },
        { field: 'applyAs', headerName: 'Apply As', headerClassName: 'table-header', width: 250 },
        { field: 'firmName', headerName: 'Firm Name', headerClassName: 'table-header', width: 250 },
        { field: 'firstName', headerName: 'First Name', headerClassName: 'table-header', width: 250 },
        { field: 'lastName', headerName: 'Last Name', headerClassName: 'table-header', width: 250 },
        { field: 'companyName', headerName: 'Company Name', headerClassName: 'table-header', width: 250 },
        { field: 'gender', headerName: 'Gender', headerClassName: 'table-header', width: 250 },
        { field: 'mobileNumber', headerName: 'Mobile Number', headerClassName: 'table-header', width: 250 },
        { field: '', headerName: 'Gender', headerClassName: 'table-header', width: 250 },
    ];

    return (
        <AdminLayout>
            {/* <Box sx={{ height: 520, width: '100%' }}>
                
            </Box> */}

            <TableExport heading={"All Users Data"} columns={columns} rows={rows} initialState={initialState} apiRef={apiRef} />
        </AdminLayout>
    );
};

export default ExportData;
































































// import { useEffect, useState } from 'react';
// import AdminLayout from './AdminLayout';
// import { useGridApiRef, useKeepGroupedColumnsHidden } from '@mui/x-data-grid-premium';
// import { dashboardData } from './constants/sampleData';
// import TableExport from './TableExport';



// const ExportData = () => {
//     const [rows, setRows] = useState([]);
//     const apiRef = useGridApiRef(); // Use Grid API reference

//     useEffect(() => {
//         setRows(
//             dashboardData.users.map((i) => ({
//                 ...i,
//                 id: i._id, // Map your custom data to id
//             }))
//         );
//     }, []);

//     // Group by cementName and aggregate the quantity
//     const initialState = useKeepGroupedColumnsHidden({
//         apiRef,
//         initialState: {
//             rowGrouping: { model: ['cementName'] }, // Group by cementName
//             aggregation: { model: { quantity: 'sum' } }, // Sum quantity for each group
//         },
//     });



//     const columns = [
//         {
//             field: "serial",
//             headerName: "S.No",
//             headerClassName: "table-header",
//             width: 70,
//             renderCell: (params) => {
//                 // Get the index from the rows array based on the params.row.id
//                 const index = rows.findIndex((row) => row.id === params.row.id);
//                 return <span>{index + 1}</span>; // Add 1 to make it 1-based index
//             },
//         },

//         { field: 'name', headerName: 'Name', headerClassName: 'table-header', width: 250 },
//         { field: 'contactNumber', headerName: 'Contact Number', headerClassName: 'table-header', width: 200 },
//         { field: 'alternateNumber', headerName: 'Alternate Number', headerClassName: 'table-header', width: 200 },
//         { field: 'cementName', headerName: 'Cement Name', headerClassName: 'table-header', width: 300 },
//         { field: 'quantity', headerName: 'Quantity', headerClassName: 'table-header', width: 300, type: 'number' },
//         { field: 'city', headerName: 'City', headerClassName: 'table-header', width: 300 },
//         { field: 'state', headerName: 'State', headerClassName: 'table-header', width: 300 },
//         { field: 'pinCode', headerName: 'Pin Code', headerClassName: 'table-header', width: 300 },
//     ];

//     return (
//         <AdminLayout>
//             {/* <Box sx={{ height: 520, width: '100%' }}>
                
//             </Box> */}

//             <TableExport heading={"All Users Data"} columns={columns} rows={rows} initialState={initialState} apiRef={apiRef} />
//         </AdminLayout>
//     );
// };

// export default ExportData;
