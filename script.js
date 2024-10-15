const totalUsersElement = document.getElementById('totalUsers');
const totalSalesElement = document.getElementById('totalSales');

const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function() {
    const totalUsers = totalUsersElement.textContent;
    const totalSales = totalSalesElement.textContent;

    alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
});
