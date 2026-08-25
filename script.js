var button = document.getElementById('buy-btn');

var unusedVariable = "Hello n8n!";

button.addEventListener('click', function() {
    console.log("Người dùng đã click vào nút mua hàng");
    alert('Cảm ơn bạn đã quan tâm đến sản phẩm của TimberTusk!');
});

function calculatePrice(price, tax) {
    return price + (price * tax);
}