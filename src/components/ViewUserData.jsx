import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "../features/users/thunk";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

const ViewUserData = ({ updateUser }) => {
    const { users, loading, error, errorMsg } = useSelector((state) => state.users);
    const [viewIndex, setViewIndex] = useState(-1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    const handleView = (index) => {
        setViewIndex(index);
    };

    const handleDelete = async (id) => {
        await dispatch(deleteUser(id));
        toast.success("User deleted successfully!");
    };

    if (error) {
        return (
            <h2 className="text-danger text-center mt-4">
                {errorMsg || "Something went wrong!"}
            </h2>
        );
    }

    const columns = [
        {
            name: "#",
            selector: (row, index) => index + 1,
            width: "60px",
        },
        {
            name: "Name",
            selector: (row) => row.name || "-",
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Phone",
            selector: (row) => row.phone || "-",
        },
        {
            name: "Role",
            selector: (row) => row.role || "User",
        },
        {
            name: "Status",
            cell: (row) => (
                <span
                    className={`badge ${row.status ? "bg-success" : "bg-secondary"}`}
                >
                    {row.status ? "Active" : "Inactive"}
                </span>
            ),
        },
        {
            name: "Password",
            cell: (row, index) => (
                <div className="d-flex align-items-center">
                    <input
                        disabled
                        type={viewIndex === index ? "text" : "password"}
                        className="form-control form-control-sm me-2"
                        style={{ width: "100px" }}
                        value={row.password}
                    />
                    {viewIndex === index ? (
                        <FaEyeSlash
                            style={{ cursor: "pointer" }}
                            onClick={() => handleView(-1)}
                        />
                    ) : (
                        <IoEyeSharp
                            style={{ cursor: "pointer" }}
                            onClick={() => handleView(index)}
                        />
                    )}
                </div>
            ),
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="d-flex flex-wrap gap-2">
                    <button
                        onClick={() => handleDelete(row.id)}
                        className="btn btn-sm btn-danger"
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => updateUser(row)}
                        className="btn btn-sm btn-warning"
                    >
                        Edit
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="card p-3 shadow-sm">
            <h4 className="mb-3">User List</h4>

            {/* Responsive table container */}
            <div className="table-responsive">
                <DataTable
                    columns={columns}
                    data={users}
                    progressPending={loading}
                    pagination
                    highlightOnHover
                    striped
                    responsive
                    noDataComponent="No Data Found"
                    className="table table-bordered"
                />
            </div>
        </div>
    );
};

export default ViewUserData;
