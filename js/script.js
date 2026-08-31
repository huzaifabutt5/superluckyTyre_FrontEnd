function opensetting() {
    window.location.href = "account-setting.html";
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar") || document.querySelector(".sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    if (!sidebar) return;

    if (window.innerWidth <= 991) {
        sidebar.classList.toggle("sidebar-show");

        if (overlay) {
            overlay.classList.toggle("sidebar-show");
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar") || document.querySelector(".sidebar");
    const overlay = document.getElementById("sidebarOverlay");


    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", function (e) {
            e.stopPropagation(); 

            if (window.innerWidth <= 991) {
                sidebar.classList.toggle("sidebar-show");

                if (overlay) {
                    overlay.classList.toggle("sidebar-show");
                }
            }
        });
    }


    document.addEventListener("click", function (e) {
        if (window.innerWidth <= 991 && sidebar && sidebar.classList.contains("sidebar-show")) {
            const isClickInsideSidebar = sidebar.contains(e.target);
            const isClickOnToggle = sidebarToggle && sidebarToggle.contains(e.target);

    
            if (!isClickInsideSidebar && !isClickOnToggle) {
                sidebar.classList.remove("sidebar-show");
                if (overlay) {
                    overlay.classList.remove("sidebar-show");
                }
            }
        }
    });

    if (overlay) {
        overlay.addEventListener("click", function () {
            if (sidebar) sidebar.classList.remove("sidebar-show");
            overlay.classList.remove("sidebar-show");
        });
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



// ============logout  popup ======//

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
const resetDateBtn = document.getElementById("resetDate");
if (resetDateBtn) {
    resetDateBtn.onclick = function () {
        const fromDate = document.getElementById("fromDate");
        const toDate = document.getElementById("toDate");

        if (fromDate) fromDate.value = "";
        if (toDate) toDate.value = "";
    };
}

// apply filter 
const applyDateBtn = document.getElementById("applyDate");
if (applyDateBtn) {
    applyDateBtn.onclick = function () {
        let fromInput = document.getElementById("fromDate");
        let toInput = document.getElementById("toDate");

        let from = fromInput ? fromInput.value : "";
        let to = toInput ? toInput.value : "";

        console.log("From:", from, "To:", to);

        if (typeof closeDateModal === "function") {
            closeDateModal();
        }
    };
}

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
//--====customer js====================================================================================================


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
function productListing() {
    window.location.href = "manage-product.html";
}

//-----------report js------------------//
function switchTab(tabType) {
    const salePanel = document.getElementById('saleTabContent');
    const purchasePanel = document.getElementById('purchaseTabContent');
    const saleLabel = document.getElementById('tabSaleLabel');
    const purchaseLabel = document.getElementById('tabPurchaseLabel');

    if (tabType === 'sale') {
        salePanel.classList.add('active');
        purchasePanel.classList.remove('active');
        saleLabel.classList.add('active');
        purchaseLabel.classList.remove('active');
    } else {
        purchasePanel.classList.add('active');
        salePanel.classList.remove('active');
        purchaseLabel.classList.add('active');
        saleLabel.classList.remove('active');
    }
}
//=============== pnl report js=======================//
function getreport() {
    window.location.href = "get-report.html";
}

//===========ADD NEW EXPENSE=====================//
function addnewexpense() {
    window.location.href = "manage-expenses.html";
}
//============add new role dropdown===========//
document.addEventListener("DOMContentLoaded", function () {

    // 1. DROPDOWN CODE
    const accessSelectBox = document.getElementById("accessSelectBox");
    const accessDropdown = document.getElementById("accessDropdown");
    const accessPlaceholder = document.getElementById("accessPlaceholder");
    const selectedAccess = document.getElementById("selectedAccess");

    if (accessSelectBox && accessDropdown) {

        accessSelectBox.addEventListener("click", function (e) {
            e.stopPropagation();
            accessDropdown.classList.toggle("show");
        });

        accessDropdown.addEventListener("click", function (e) {
            e.stopPropagation();
        });


        function updateSelectedItems() {
            if (!selectedAccess || !accessPlaceholder) return;

            selectedAccess.innerHTML = "";
            const checked = accessDropdown.querySelectorAll('input[type="checkbox"]:checked');

            if (checked.length === 0) {
                accessPlaceholder.style.display = "inline";
            } else {
                accessPlaceholder.style.display = "none";

                checked.forEach(function (cb) {
                    const chip = document.createElement("span");
                    chip.className = "access-item";
                    chip.innerHTML = `${cb.getAttribute("data-name")} <span class="access-item-remove">&times;</span>`;


                    chip.querySelector(".access-item-remove").addEventListener("click", function (ev) {
                        ev.stopPropagation();
                        cb.checked = false;
                        updateSelectedItems();
                    });

                    selectedAccess.appendChild(chip);
                });
            }
        }

        const checkboxes = accessDropdown.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener("change", updateSelectedItems);
        });

        document.addEventListener("click", function () {
            accessDropdown.classList.remove("show");
        });
    }

    // Modal logic
    const openBtn = document.getElementById("openPasswordModal");
    const modal = document.getElementById("passwordModal");
    const cancelBtn = document.getElementById("cancelPasswordModal");

    if (openBtn) {
        openBtn.onclick = function () {
            if (modal) modal.classList.add("active");
        };
    }

    if (cancelBtn) {
        cancelBtn.onclick = function () {
            if (modal) modal.classList.remove("active");
        };
    }
});

function addrole() {
    window.location.href = "manage-role.html";
}

function removerole() {
    window.location.href = "add-new-role.html";
}

//====================================== Account settings==================================//
function saveSetting() {
    window.location.href = "dashboard.html";
}
document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openPasswordModal");
    const modal = document.getElementById("passwordModal");
    const cancelBtn = document.getElementById("cancelPasswordModal");
    const updateBtn = document.getElementById("updatePassword");

    // OPEN MODAL
    if (openBtn && modal) {
        openBtn.addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.add("active");
        });
    }


    if (cancelBtn && modal) {
        cancelBtn.addEventListener("click", function () {
            modal.classList.remove("active");
        });
    }


    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }


    if (updateBtn && modal) {
        updateBtn.addEventListener("click", function () {

            modal.classList.remove("active");
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {

    const openEmailModalBtn = document.querySelector(".change-email-btn");
    const emailModalOverlay = document.getElementById("emailModalOverlay");

    const emailStep1 = document.getElementById("emailStep1");
    const emailStep2 = document.getElementById("emailStep2");

    const continueEmailStep = document.getElementById("continueEmailStep");
    const cancelEmailModal1 = document.getElementById("cancelEmailModal1");
    const cancelEmailModal2 = document.getElementById("cancelEmailModal2");
    const updateEmailAddressBtn = document.getElementById("updateEmailAddressBtn");

    function resetEmailModal() {
        if (emailModalOverlay) emailModalOverlay.classList.remove("active");
        setTimeout(() => {
            if (emailStep1 && emailStep2) {
                emailStep1.classList.add("active");
                emailStep2.classList.remove("active");
            }
        }, 200);
    }

    // Open Modal 
    if (openEmailModalBtn && emailModalOverlay) {
        openEmailModalBtn.addEventListener("click", function (e) {
            e.preventDefault();
            emailModalOverlay.classList.add("active");
        });
    }


    if (continueEmailStep) {
        continueEmailStep.addEventListener("click", function () {
            emailStep1.classList.remove("active");
            emailStep2.classList.add("active");
        });
    }

    // Close Modal on Cancel
    if (cancelEmailModal1) cancelEmailModal1.addEventListener("click", resetEmailModal);
    if (cancelEmailModal2) cancelEmailModal2.addEventListener("click", resetEmailModal);


    if (emailModalOverlay) {
        emailModalOverlay.addEventListener("click", function (e) {
            if (e.target === emailModalOverlay) {
                resetEmailModal();
            }
        });
    }


    if (updateEmailAddressBtn) {
        updateEmailAddressBtn.addEventListener("click", function () {

            resetEmailModal();
        });
    }
});


//==========================sale page js=======================
let currentStep = 1;
const totalSteps = 3;

function updateStepperUI() {

    // step colors
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.getElementById(`stepIndicator${i}`);

        if (stepElement) {
            stepElement.classList.remove("active", "completed");

            if (i < currentStep) {
                stepElement.classList.add("completed");
            } else if (i === currentStep) {
                stepElement.classList.add("active");
            }
        }
    }

    // content switch
    for (let i = 1; i <= totalSteps; i++) {
        const content = document.getElementById(`stepContent${i}`);

        if (content) {
            content.style.display = (i === currentStep) ? "block" : "none";
        }
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateStepperUI();
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepperUI();
    }
}

function jumpToStep(stepNum) {
    if (stepNum >= 1 && stepNum <= totalSteps) {
        currentStep = stepNum;
        updateStepperUI();
    }
}

function openVariantModal(productName, productCode) {
    const modal = document.getElementById("variantModal");
    const nameElem = document.getElementById("modalProductName");
    const codeElem = document.getElementById("modalProductCode");

    if (nameElem) {
        nameElem.innerText = productName;
    }

    if (codeElem) {
        codeElem.innerText = productCode;
    }

    if (modal) {
        modal.classList.add("show");
    }
}

function closeVariantModal() {
    const modal = document.getElementById("variantModal");

    if (modal) {
        modal.classList.remove("show");
    }
}

function changeQty(btn, delta) {
    if (!btn || !btn.parentElement) return;

    const input = btn.parentElement.querySelector(".qty-val");

    if (!input) return;

    let val = parseInt(input.value) || 1;

    val += delta;

    if (val < 1) {
        val = 1;
    }

    input.value = val < 10 ? "0" + val : val;
}

document.addEventListener("DOMContentLoaded", function () {

    // Only update stepper UI if step indicator exists on the page
    if (document.getElementById("stepIndicator1")) {
        updateStepperUI();
    }

    const applyBtn = document.querySelector(".btn-apply");

    if (applyBtn) {
        applyBtn.addEventListener("click", function () {
            closeVariantModal();

            const cartSidebar = document.getElementById("cartSidebar");

            if (cartSidebar) {
                cartSidebar.classList.add("show");
            }
        });
    }

    const cartItemsList = document.getElementById("cartItemsList");

    if (cartItemsList) {
        cartItemsList.addEventListener("click", function (event) {
            if (event.target && event.target.classList.contains("btn-delete-item")) {
                const itemRow = event.target.closest(".cart-item");

                if (itemRow) {
                    itemRow.remove();
                }

                if (cartItemsList.querySelectorAll(".cart-item").length === 0) {
                    const cartSidebar = document.getElementById("cartSidebar");

                    if (cartSidebar) {
                        cartSidebar.classList.remove("show");
                    }
                }
            }
        });
    }

    const variantModal = document.getElementById("variantModal");

    if (variantModal) {
        variantModal.addEventListener("click", function (event) {
            if (event.target === variantModal) {
                closeVariantModal();
            }
        });
    }
});

function showSuccess() {
    const modal = document.getElementById("successModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

window.addEventListener("click", function (e) {
    let modal = document.getElementById("successModal");
    if (modal && e.target === modal) {
        modal.style.display = "none";
    }
});


//==========================return sale js======================
function getInvoice() {
    document.getElementById("invoiceDetails").style.display = "block";

    const hasNegative = document.querySelector(".negative");

    if (hasNegative) {
        document.getElementById("returnBtn").classList.remove("btn-disabled");
        document.getElementById("paybackBtn").classList.remove("btn-disabled");

        document.getElementById("returnBtn").classList.add("btn-active", "btn-orange");
        document.getElementById("paybackBtn").classList.add("btn-active", "btn-blue");

        document.getElementById("cancelBtn").classList.add("btn-active");
    }
}

//==============Purchse product js============================
function jumpToSteps(step) {
    const totalSteps = 3;

    // Step indicators update with safe null checks
    for (let i = 1; i <= totalSteps; i++) {
        const stepEl = document.getElementById(`step-Indicator${i}`);

        if (stepEl) {
            stepEl.classList.remove("active", "completed");
            if (i < step) {
                stepEl.classList.add("completed");
            } else if (i === step) {
                stepEl.classList.add("active");
            }
        }
    }

    // Hide step contents safely
    for (let i = 1; i <= totalSteps; i++) {
        const contentEl = document.getElementById(`stepContent${i}`);
        if (contentEl) {
            contentEl.style.display = "none";
        }
    }

    // Show active step content safely
    const activeContent = document.getElementById("stepContent" + step);
    if (activeContent) {
        activeContent.style.display = "block";
    }
}

// Safely invoke jumpToSteps on window load
window.addEventListener("load", function () {
    if (document.getElementById("step-Indicator1") || document.getElementById("stepContent1")) {
        jumpToSteps(1);
    }
});

// =======================
let selectedProduct = {};

function openProductPopup(name, size) {
    selectedProduct = { name, size };

    const prodModal = document.getElementById("prodModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalSize = document.getElementById("modalSize");

    if (prodModal) {
        prodModal.style.display = "flex";
    }

    if (modalTitle) {
        modalTitle.innerText = name || "";
    }

    if (modalSize) {
        modalSize.innerText = size || "";
    }
}

function closeProdModal() {
    const prodModal = document.getElementById("prodModal");
    if (prodModal) {
        prodModal.style.display = "none";
    }
}

function addToCart() {
    // Popup close safely
    closeProdModal();

    // Show cart panel safely
    const cartPanel = document.getElementById("cartPanel");
    if (cartPanel) {
        cartPanel.style.display = "block";
    }

    const gridArea = document.querySelector(".purchase-products-section");
    if (gridArea) {
        gridArea.classList.add("shrink");
    }
}

function showSuccessPopup() {
    const popup = document.getElementById("successPopup");
    if (popup) {
        popup.style.display = "flex";
    }
}

function closeSuccessPopup() {
    const popup = document.getElementById("successPopup");
    if (popup) {
        popup.style.display = "none";
    }
}

window.addEventListener("click", function (e) {
    const popup = document.getElementById("successPopup");
    if (popup && e.target === popup) {
        popup.style.display = "none";
    }
});

//============================LOGIN PAGE====================
document.addEventListener("DOMContentLoaded", function () {

    const loginStep = document.getElementById("loginStep");
    const forgotStep = document.getElementById("forgotStep");
    const otpStep = document.getElementById("otpStep");
    const newPasswordStep = document.getElementById("newPasswordStep");


    const allSteps = [loginStep, forgotStep, otpStep, newPasswordStep];


    function showStep(targetStep) {
        allSteps.forEach(step => {
            if (step) step.classList.remove("active");
        });
        if (targetStep) targetStep.classList.add("active");
    }


    const gotoForgotLink = document.getElementById("gotoForgot");
    if (gotoForgotLink) {
        gotoForgotLink.addEventListener("click", function (e) {
            e.preventDefault();
            showStep(forgotStep);
        });
    }


    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value.trim();


            const demoEmail = "admin@gmail.com";
            const demoPassword = "12345678";

            if (email === demoEmail && password === demoPassword) {

                window.location.href = "dashboard.html";
            } else {

                alert("Invalid Credentials!\n\nDemo Email: " + demoEmail + "\nDemo Password: " + demoPassword);
            }
        });
    }


    const forgotForm = document.getElementById("forgotForm");
    if (forgotForm) {
        forgotForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("resetEmail").value;


            console.log("Sending OTP to:", email);


            showStep(otpStep);
        });
    }
    const otpForm = document.getElementById("otpForm");
    if (otpForm) {
        otpForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const otp = document.getElementById("otpCode").value;


            console.log("Verifying OTP:", otp);


            showStep(newPasswordStep);
        });
    }

    const newPasswordForm = document.getElementById("newPasswordForm");
    if (newPasswordForm) {
        newPasswordForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const newPassword = document.getElementById("newPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;


            if (newPassword !== confirmPassword) {
                alert("Passwords do not match! Please check again.");
                return;
            }


            console.log("Updating password...");
            alert("Password reset successfully! Please login with your new password.");


            newPasswordForm.reset();
            showStep(loginStep);
        });
    }
});




// ======================= CUSTOM DATA TABLES =======================
document.addEventListener("DOMContentLoaded", function () {
    const initializedScopes = new WeakSet();
    const searchSelector = ".vendor-search input, .role-search input, .expense-search input, .stock-search input, .search-control input, input[type='search']";

    function getTableScope(table) {
        let scope = table.parentElement;

        while (scope && scope !== document.body) {
            const footer = scope.querySelector(":scope > [class*='footer']");
            const entries = scope.querySelector(":scope > select, :scope .vendor-table-top select, :scope .stock-entries select, :scope .entries select, :scope .select-entries, :scope .pnl-entries select");
            const search = scope.querySelector(searchSelector);

            if (footer && entries && (search || table.closest(".pnl-card"))) {
                return scope;
            }

            scope = scope.parentElement;
        }

        return null;
    }

    function getRows(table) {
        if (!table.tBodies.length) return [];

        const rows = Array.from(table.tBodies[0].children).filter(row => row.tagName === "TR");

        if (table.classList.contains("stock-product-table")) {
            return rows
                .filter(row => row.classList.contains("stock-product-row"))
                .map(row => ({
                    rows: [row, row.nextElementSibling].filter(Boolean),
                    text: row.textContent.toLowerCase()
                }));
        }

        return rows.map(row => ({
            rows: [row],
            text: row.textContent.toLowerCase()
        }));
    }

    function initializeDataTable(table, scope) {
        if (initializedScopes.has(scope)) return;
        initializedScopes.add(scope);

        const entriesSelect = scope.querySelector(".vendor-table-top select, .stock-entries select, .entries select, .select-entries, .pnl-entries select, :scope > select");
        const searchInput = scope.querySelector(searchSelector);
        const footer = scope.querySelector("[class*='footer']");
        const pagination = footer ? footer.querySelector(".pagination, .stock-pagination") : null;
        const showing = footer ? footer.querySelector("span") : null;
        const controlledTables = scope.querySelectorAll(".tab-content-panel table").length
            ? Array.from(scope.querySelectorAll(".tab-content-panel table"))
            : [table];
        const recordsByTable = new Map(controlledTables.map(controlledTable => [controlledTable, getRows(controlledTable)]));

        if (!entriesSelect || !footer || !pagination || !showing) return;

        const state = {
            currentPage: 1,
            entriesPerPage: parseInt(entriesSelect.value, 10) || 10,
            query: ""
        };

        function getActiveTable() {
            const activePanel = scope.querySelector(".tab-content-panel.active");
            return activePanel ? activePanel.querySelector("table") : table;
        }

        function getFilteredRecords() {
            const records = recordsByTable.get(getActiveTable()) || [];
            return records.filter(record => record.text.includes(state.query));
        }

        function renderRows(visibleRecords) {
            const visibleRows = new Set(visibleRecords.flatMap(record => record.rows));

            recordsByTable.forEach(records => {
                records.forEach(record => {
                    record.rows.forEach(row => {
                        row.style.display = visibleRows.has(row) ? "" : "none";
                    });
                });
            });
        }

        function addPaginationButton(label, page, disabled, active) {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = label;
            button.disabled = disabled;
            if (active) button.classList.add("active", "stock-page-active");
            button.addEventListener("click", function () {
                if (!disabled) {
                    state.currentPage = page;
                    render();
                }
            });
            pagination.appendChild(button);
        }

        function renderPagination(pageCount) {
            const buttons = Array.from(pagination.querySelectorAll("button"));
            const firstLabel = buttons[0] ? buttons[0].textContent.trim() : "«";
            const lastLabel = buttons[buttons.length - 1] ? buttons[buttons.length - 1].textContent.trim() : "»";

            pagination.innerHTML = "";
            addPaginationButton(firstLabel, 1, state.currentPage === 1 || pageCount === 0, false);
            addPaginationButton("‹", Math.max(1, state.currentPage - 1), state.currentPage === 1 || pageCount === 0, false);

            for (let page = 1; page <= pageCount; page++) {
                addPaginationButton(String(page), page, false, page === state.currentPage);
            }

            addPaginationButton("›", Math.min(pageCount, state.currentPage + 1), state.currentPage === pageCount || pageCount === 0, false);
            addPaginationButton(lastLabel, pageCount, state.currentPage === pageCount || pageCount === 0, false);
        }

        function render() {
            const filteredRecords = getFilteredRecords();
            const pageCount = Math.ceil(filteredRecords.length / state.entriesPerPage);
            state.currentPage = pageCount ? Math.min(state.currentPage, pageCount) : 1;
            const startIndex = (state.currentPage - 1) * state.entriesPerPage;
            const visibleRecords = filteredRecords.slice(startIndex, startIndex + state.entriesPerPage);

            renderRows(visibleRecords);
            renderPagination(pageCount);
            showing.textContent = filteredRecords.length
                ? `Showing ${startIndex + 1} to ${startIndex + visibleRecords.length} of ${filteredRecords.length} entries`
                : "No matching records found";
        }

        if (searchInput) {
            searchInput.addEventListener("input", function () {
                state.query = this.value.trim().toLowerCase();
                state.currentPage = 1;
                render();
            });
        }

        entriesSelect.addEventListener("change", function () {
            state.entriesPerPage = parseInt(this.value, 10) || 10;
            state.currentPage = 1;
            render();
        });

        scope.querySelectorAll("input[name='reportTab']").forEach(function (tab) {
            tab.addEventListener("change", function () {
                setTimeout(render, 0);
            });
        });

        render();
    }

    document.querySelectorAll("table").forEach(function (table) {
        if (table.parentElement.closest("table") || table.classList.contains("stock-batch-table")) return;
        const scope = getTableScope(table);
        if (scope) initializeDataTable(table, scope);
    });

    document.querySelectorAll(".left-products-section").forEach(function (section) {
        const searchInput = section.querySelector(".search-control .search-input");
        const productCards = Array.from(section.querySelectorAll(".product-card-table .product-card"));

        if (!searchInput || !productCards.length) return;

        searchInput.addEventListener("input", function () {
            const query = this.value.trim().toLowerCase();

            productCards.forEach(function (card) {
                card.style.display = card.textContent.toLowerCase().includes(query) ? "" : "none";
            });
        });
    });
});

