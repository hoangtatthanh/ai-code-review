// Lỗi: Biến toàn cục không dùng let/const
cartTotal = 0; 

function addToCart() {
    cartTotal += 1;
    let currentStock = "5";
    
    // Lỗi: So sánh lỏng lẻo == thay vì ===
    if (currentStock == 5) {
        alert("Đã thêm vào giỏ! Tổng: " + cartTotal);
    }
}

document.getElementById("submit-review").addEventListener("click", () => {
    let reviewInput = document.querySelector(".reviews input");
    
    // Lỗi: Không kiểm tra null trước khi đọc thuộc tính .value
    if (reviewInput.value.length > 0) {
        alert("Cảm ơn: " + reviewInput.value);
        reviewInput.value = "";
    }
});