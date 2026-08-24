function toggleSidebar() {

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    if (!sidebar) {
        return;
    }

    if (window.innerWidth <= 991) {

        sidebar.classList.toggle("sidebar-show");

        if (overlay) {
            overlay.classList.toggle("sidebar-show");
        }

    }

}
window.addEventListener("resize", function () {

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    if (window.innerWidth > 991) {

        if (sidebar) {
            sidebar.classList.remove("sidebar-show");
        }

        if (overlay) {
            overlay.classList.remove("sidebar-show");
        }

    }

});



document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById("dashboardChart");

    if (ctx && typeof Chart !== "undefined") {

        new Chart(ctx, {

            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],

                datasets: [

                    {
                        label: "Sales",
                        data: [
                            46000, 34000, 48000, 32000,
                            41000, 45000, 40000, 49000,
                            33000, 52000, 50000, 57000
                        ],
                        borderColor: "#4b7ff5",
                        backgroundColor: "rgba(75,127,245,0.15)",
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 1.5
                    },

                    {
                        label: "Purchase",
                        data: [
                            12000, 18000, 15000, 24000,
                            23000, 25000, 22000, 29000,
                            25000, 32000, 34000, 25000
                        ],
                        borderColor: "#884dff",
                        backgroundColor: "rgba(136,77,255,0.10)",
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 1.5
                    },

                    {
                        label: "Expense",
                        data: [
                            12000, 30000, 25000, 24000,
                            41000, 35000, 43000, 49000,
                            34000, 45000, 50000, 25000
                        ],
                        borderColor: "#ff9d2e",
                        backgroundColor: "rgba(255,157,46,0.12)",
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 1.5
                    },

                    {
                        label: "PnL(Profit/Lose)",
                        data: [
                            3000, 9000, 5000, 4000,
                            10000, 6000, 7000, 6000,
                            5000, 7000, 13000, 7000
                        ],
                        borderColor: "#19a965",
                        backgroundColor: "rgba(25,169,101,0.12)",
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 1.5
                    }

                ]

            },

            options: {

                responsive: true,
                maintainAspectRatio: false,

                interaction: {
                    mode: "index",
                    intersect: false
                },

                plugins: {

                    legend: {
                        display: false
                    },

                    tooltip: {
                        enabled: true
                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,
                        max: 70000,

                        ticks: {

                            stepSize: 10000,

                            font: {
                                size: 8
                            },

                            callback: function (value) {
                                return (value / 1000) + "k";
                            }

                        },

                        grid: {
                            color: "#eeeeee"
                        }

                    },

                    x: {

                        ticks: {
                            font: {
                                size: 8
                            }
                        },

                        grid: {
                            display: false
                        }

                    }

                }

            }

        });

    }


    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");

            if (!emailInput || !passwordInput) {
                return;
            }

            const email = emailInput.value.trim();
            const password = passwordInput.value;

            const correctEmail = "sajjalanees1699@gmail.com";
            const correctPassword = "123456";

            if (email === correctEmail && password === correctPassword) {

                window.location.href = "dashboard.html";

            } else {

                alert("Invalid email or password.");

            }

        });

    }


    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.querySelector(".sidebar");

    if (sidebarToggle && sidebar) {

        sidebarToggle.addEventListener("click", function () {

            if (window.innerWidth <= 768) {

                sidebar.classList.toggle("sidebar-show");

            }

        });

    }


    const calendarBtn = document.getElementById("calendarBtn");
    const dateModal = document.getElementById("dateModal");
    const resetDate = document.getElementById("resetDate");
    const applyDate = document.getElementById("applyDate");
    const fromDate = document.getElementById("fromDate");
    const toDate = document.getElementById("toDate");

    if (calendarBtn && dateModal) {

        calendarBtn.addEventListener("click", function () {

            dateModal.classList.add("show");

        });


        if (resetDate) {

            resetDate.addEventListener("click", function () {

                if (fromDate) {
                    fromDate.value = "";
                }

                if (toDate) {
                    toDate.value = "";
                }

            });

        }


        if (applyDate) {

            applyDate.addEventListener("click", function () {

                if (
                    !fromDate ||
                    !toDate ||
                    fromDate.value === "" ||
                    toDate.value === ""
                ) {

                    alert("Please select both dates.");

                    return;

                }

                dateModal.classList.remove("show");

                console.log("From Date:", fromDate.value);
                console.log("To Date:", toDate.value);

            });

        }


        dateModal.addEventListener("click", function (event) {

            if (event.target === dateModal) {

                dateModal.classList.remove("show");

            }

        });

    }


    const rangeSelect = document.getElementById("rangeSelect");

    if (rangeSelect) {

        rangeSelect.addEventListener("change", function () {

            console.log("Selected range:", this.value);

        });

    }

});



// logout  popup //

function logoutUser() {
    document.getElementById("logoutModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("logoutModal").style.display = "none";
}

function confirmLogout() {
    window.location.href = "login.html";
}
// date popup//

function openDateModal() {
    document.getElementById("dateModal").style.display = "flex";
}

// close modal
function closeDateModal() {
    document.getElementById("dateModal").style.display = "none";
}

// reset dates
document.getElementById("resetDate").onclick = function () {
    document.getElementById("fromDate").value = "";
    document.getElementById("toDate").value = "";
};

// apply filter
document.getElementById("applyDate").onclick = function () {
    let from = document.getElementById("fromDate").value;
    let to = document.getElementById("toDate").value;

    console.log("From:", from, "To:", to);

    closeDateModal();
};

// close on outside click
window.onclick = function (e) {
    let modal = document.getElementById("dateModal");
    if (e.target === modal) {
        closeDateModal();
    }
};
//------------------------------------------------------//
function view() {
    window.location.href = "view-vendor.html";
}
//-----------delete model-------------//
function openDeleteModal() {
    document.getElementById("deleteModal").style.display = "flex";
}

function closeDeleteModal() {
    document.getElementById("deleteModal").style.display = "none";
}

function confirmDelete() {
    alert("Deleted Successfully!");
    closeDeleteModal();
}
//---------------------add new vendor------------------//
function AddNewVendor() {
    window.location.href = "vendor.html";
}
//==================open pay model=====================//

function paytoVendor() {
    document.getElementById("payModal").style.display = "flex";
}

function closePayModal() {
    document.getElementById("payModal").style.display = "none";
}
window.onclick = function (e) {
    let modal = document.getElementById("PayModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

function cancel() {
    document.getElementById("payModal").style.display = "none";
    window.location.reload();
}
//--====customer js====================================================================================================//


function customerview() {
    window.location.href = "view-customer.html";
}
function AddNewCustomer() {
    window.location.href = "customer.html";
}


//==================open pay model=====================//
// OPEN MODAL
function openGetModal() {
    document.getElementById("getModal").style.display = "flex";
}

// CLOSE MODAL
function closeGetModal() {
    document.getElementById("getModal").style.display = "none";
}

// CLOSE ON OUTSIDE CLICK
window.onclick = function (e) {
    let modal = document.getElementById("getModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
//===========product js=================//
function AddNewProduct() {
    window.location.href = "manage-product.html";
}
//============stock listing js============//
function toggleStockDetails(row) {

    const detailsRow = row.nextElementSibling;

    const isOpen = detailsRow.classList.contains("stock-details-open");

    // Close all other rows
    document.querySelectorAll(".stock-details-row").forEach(function (item) {
        item.classList.remove("stock-details-open");
    });

    document.querySelectorAll(".stock-product-row").forEach(function (item) {
        item.classList.remove("stock-open");
    });


    // Open clicked row
    if (!isOpen) {
        detailsRow.classList.add("stock-details-open");
        row.classList.add("stock-open");
    }
}
function productListing(){
    window.location.href= "manage-product.html";
}

//-----------report js------------------//
function purchasereturn(){
    window.location.href="report-purchase.html";
}
function salereturn(){
    window.location.href="reporting.html";
}
//=============== pnl report js=======================//
function getreport(){
     window.location.href="get-report.html";
}
