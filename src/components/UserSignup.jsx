// components/UserSignup.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, editUser, fetchUser } from "../features/users/thunk";
import { toast } from "react-toastify";

const UserSignup = ({ user, setUser, editId, setEditId }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const finalUser = {
            name: user.name?.trim() || "",
            email: user.email?.trim() || "",
            password: user.password || "",
            phone: user.phone?.trim() || "",
            role: user.role || "User",
            status: !!user.status,
            id: editId || undefined,
        };

        // Validation
        if (!finalUser.name || !finalUser.email || !finalUser.password || !finalUser.phone) {
            toast.error("Please fill all fields.");
            return;
        }

        if (editId !== null) {
            await dispatch(editUser(finalUser));
            toast.success("User updated successfully!");
            setEditId(null);
        } else {
            await dispatch(createUser(finalUser));
            toast.success("User created successfully!");
        }

        setUser({});
    };

    return (
        <div className="card p-4 mb-4 shadow-sm">
            <h4 className="mb-3">{editId ? "Update User" : "Add User"}</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={user.name || ""}
                        onChange={handleChange}
                        placeholder="Enter full name"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email || ""}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password || ""}
                        onChange={handleChange}
                        placeholder="Enter password"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={user.phone || ""}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                        className="form-select"
                        name="role"
                        value={user.role || ""}
                        onChange={handleChange}
                    >
                        <option value="">Select role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>

                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="statusCheck"
                        name="status"
                        checked={user.status || false}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="statusCheck">
                        Active Status
                    </label>
                </div>

                <button className="btn btn-primary" type="submit" disabled={loading}>
                    {editId ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default UserSignup;
