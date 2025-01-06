import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import Table from "./constants/Table";
import { IconButton } from "@mui/material";
import { Delete, Visibility } from "@mui/icons-material";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { server } from "../../main";


const FormManagement = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${server}/apply/get-all-applicants`, { withCredentials: true });
                console.log(response)
                setRows(response.data.applicants.map((user) => ({
                    ...user,
                    id: user._id,
                    title: user.title,

                })));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${server}/apply/delete/${id}`);
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            toast.success("User deleted successfully!");
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Failed to delete user.");
        }
    };

    const columns = [
        {
            field: "serial",
            headerName: "S.No",
            width: 70,
            renderCell: (params) => {
                const index = rows.findIndex((row) => row.id === params.row.id);
                return <span>{index + 1}</span>;
            },
        },
        { field: "id", headerName: "ID", width: 70, hide: true },
        { field: "title", headerName: "Title", width: 560 },
        {
            field: "view",
            headerName: "View",
            width: 100,
            renderCell: (params) => (
                <Link to={`/admin/form-data/${params.row.id}`}>
                    <IconButton aria-label="view">
                        <Visibility style={{ color: "blue" }} />
                    </IconButton>
                </Link>
            ),
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 100,
            renderCell: (params) => (
                <IconButton onClick={() => handleDelete(params.row.id)} aria-label="delete">
                    <Delete style={{ color: "red" }} />
                </IconButton>
            ),
        },
    ];

    return (
        <AdminLayout>
            <Table heading={"All Users Data"} columns={columns} rows={rows} />
        </AdminLayout>
    );
};

export default FormManagement;
