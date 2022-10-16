// THÊM MỤC ĐỂ BẮT ĐẦU VÀ KẾT THÚC DANH SÁCH
var list = document.getElementsByTagName('ul')[0];

// THÊM MỤC MỚI VÀO KẾT THÚC DANH SÁCH
var newItemlast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemlast.appendChild(newTextLast);
list.appendChild(newItemlast);

// THÊM MỤC MỚI BẮT ĐẦU DANH SÁCH
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');
// THÊM MỘT NHÓM COOL VÀO TẤT CẢ DANH SÁCH
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

// THÊM SỐ MẶT HÀNG TRONG DANH SÁCH VÀO PHẦN ĐẦU
var heading = document.querySelector('h2');