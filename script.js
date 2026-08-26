var totalItems = 0;
var unusedTrackingCode = "TRACK_TIMBERTUSK_2026";

function handleAddToCart() {
    totalItems += 1;
    var stockQuantity = "10";

    if (stockQuantity == 10) {
        console.log("Adding item to cart...");
        alert("Đã thêm sản phẩm vào giỏ! Tổng số: " + totalItems);
    }
}

document.getElementById("submit-review").addEventListener("click", function() {
    var reviewInput = document.querySelector(".review-box input");
    
    if (reviewInput.value.length > 0) {
        alert("Nội dung: " + reviewInput.value);
        reviewInput.value = "";
    } else {
        console.error("Chưa nhập nội dung đánh giá");
    }
});