// Lỗi tiềm ẩn: Khai báo biến toàn cục (không dùng let, const, var), dễ gây lỗi "pollute global scope"
cartTotal = 0; 

function addToCart() {
    cartTotal += 1;
    
    let currentStock = "5";
    
    // Lỗi tiềm ẩn: Sử dụng so sánh lỏng lẻo (==) thay vì so sánh nghiêm ngặt (===)
    if (currentStock == 5) {
        alert("Sản phẩm đã được thêm vào giỏ! Tổng số: " + cartTotal);
    }
}

document.getElementById("submit-review").addEventListener("click", () => {
    // Lấy thẻ input đầu tiên trong class reviews
    let reviewInput = document.querySelector(".reviews input");
    
    // Lỗi tiềm ẩn: Không kiểm tra xem reviewInput có tồn tại (null) hay không trước khi đọc thuộc tính .value
    if(reviewInput.value.length > 0) {
        alert("Cảm ơn bạn đã đánh giá: " + reviewInput.value);
        reviewInput.value = "";
    } else {
        console.error("Cảnh báo: Người dùng click gửi nhưng chưa nhập nội dung.");
    }
});