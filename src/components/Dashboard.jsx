import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import { FaUser, FaThumbsUp, FaShoppingCart } from "react-icons/fa";
import { IoIosFingerPrint } from "react-icons/io";

Chart.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend, Title);

const Dashboard = ({ users = [] }) => {
    const totalUsers = users.length;

    const summary = [
        {
            title: "Users Active",
            count: 1600,
            icon: <FaUser size={24} />,
            bg: "#f97316",
            change: "+55%",
        },
        {
            title: "Click Events",
            count: 357,
            icon: <IoIosFingerPrint size={24} />,
            bg: "#1f2937",
            change: "+124%",
        },
        {
            title: "Purchases",
            count: 2300,
            icon: <FaShoppingCart size={24} />,
            bg: "#1f2937",
            change: "+15%",
        },
        {
            title: "Likes",
            count: 940,
            icon: <FaThumbsUp size={24} />,
            bg: "#1f2937",
            change: "+90%",
        },
    ];

    const emailDomains = users.reduce((acc, u) => {
        const domain = u.email.split("@")[1];
        acc[domain] = (acc[domain] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(emailDomains);
    const values = Object.values(emailDomains);
    const backgroundColors = ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6610f2", "#17a2b8"];

    const infoCards = [
        {
            title: "Soft UI Dashboard",
            subtitle: "Built by developers",
            text: "From colors, cards, typography to complex elements, you will find the full documentation.",
            image: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png",
            dark: false,
        },
        {
            title: "Work with the rockets",
            text: "Wealth creation is an evolutionarily recent positive-sum game. It is all about who takes the opportunity first.",
            image: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png",
            dark: true,
        },
    ];

    return (
        <div className="container-fluid">
            {/* Summary Cards */}
            <div className="row mb-4">
                {summary.map((item, i) => (
                    <div className="col-md-3 mb-3" key={i}>
                        <div
                            className="card text-white d-flex flex-column justify-content-between"
                            style={{ backgroundColor: item.bg, borderRadius: "12px", minHeight: "130px" }}
                        >
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div className="bg-white text-dark rounded-circle p-2">{item.icon}</div>
                                <div className="text-end">
                                    <h5 className="mb-0">{item.count}</h5>
                                    <small>{item.title}</small>
                                </div>
                            </div>
                            <div className="px-3 pb-2 text-end">
                                <small>{item.change}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card p-3">
                        <h5 className="text-center">Users per Domain</h5>
                        <div style={{ height: "300px" }}>
                            <Bar
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { display: false },
                                    },
                                }}
                                data={{
                                    labels,
                                    datasets: [
                                        {
                                            label: "Users",
                                            data: values,
                                            backgroundColor: backgroundColors,
                                        },
                                    ],
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card p-3">
                        <h5 className="text-center">Domain Share</h5>
                        <div style={{ height: "300px" }}>
                            <Pie
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                }}
                                data={{
                                    labels,
                                    datasets: [
                                        {
                                            data: values,
                                            backgroundColor: backgroundColors,
                                        },
                                    ],
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Cards Section */}
            <div className="row mb-4">
                {infoCards.map((card, idx) => (
                    <div className="col-md-6 mb-3" key={idx}>
                        <div
                            className={`card h-100 d-flex flex-row align-items-center p-3 shadow-sm transition-transform ${card.dark ? "bg-dark text-white" : "bg-light"
                                }`}
                            style={{
                                borderRadius: "16px",
                                minHeight: "180px",
                                border: "none",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.02)";
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
                            }}
                        >
                            <div className="flex-grow-1 pe-3">
                                {card.subtitle && (
                                    <small className="text-muted fw-bold d-block mb-1">{card.subtitle}</small>
                                )}
                                <h5 className="fw-bold mb-2">{card.title}</h5>
                                <p style={{ fontSize: "14px", marginBottom: "0.5rem" }}>{card.text}</p>
                                <a href="#" className="fw-semibold text-primary text-decoration-none">
                                    Read More →
                                </a>
                            </div>
                            <div className="text-center">
                                <div
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        backgroundColor: "#f8f9fa",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: card.dark ? "2px solid #ffffff33" : "2px solid #dee2e6",
                                    }}
                                >
                                    <img
                                        src={card.image}
                                        alt="card visual"
                                        style={{
                                            width: "90px",
                                            height: "90px",
                                            objectFit: "cover",
                                            borderRadius: "10px",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Dashboard;
