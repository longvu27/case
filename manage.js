let data1 = [];
let data2 = [];
// Bảng 1:
//Hàm thêm các phần tử vào mảng
function add1() {
    let content_nd1 = document.getElementById("nd1").value;
    let money_tt1 = +document.getElementById("tt1").value;
    let obj1 = {
        content1: content_nd1,
        money1: money_tt1,
    }
    data1.push(obj1);
    display1();
    clear1();
}

//Hàm hiển thị các phần tử và tính tổng thu chi
function display1() {
    let table = `
    <tr>
        <th>STT</th>
        <th>Các nguồn tiền bạn có</th>
        <th>Số tiền bạn có</th>
        <th>Xóa</th>
    </tr>`;
    let sum1 = 0;
    for (let i = 0; i < data1.length; i++) {
        table += `<tr>
            <th>${i + 1}</th>
            <th>${data1[i].content1}</th>
            <th>${data1[i].money1}</th>
            <th><button id="del-1" onClick="deleteList1(${i})">Xóa dòng này</button></th>
        </tr>`;
        sum1 += data1[i].money1;
        const sum1Price = document.getElementById("sum1");
        sum1Price.innerHTML = sum1;
    }
    surplusMoney()
    document.getElementById("rep1").innerHTML = table;
}

// Hàm sau khi add xong nó sẽ xóa cái chữ ở ô input
function clear1() {
    document.getElementById("nd1").value = "";
    document.getElementById("tt1").value = "";
}

//Hàm xóa
function deleteList1(x) {
    if (confirm('Bạn có chắc là muốn xóa không???')) {
        for (let i = 0; i <= data1.length; i++) {
            if (i == x) {
                data1.splice(i, 1);
            }
            if (data1.length == 0) {
                document.getElementById("sum1").innerHTML = 0;
            }
            display1();
        }
    }
}

//Bảng 2:

function add2() {
    let content_nd2 = document.getElementById("nd2").value;
    let money_tt2 = +document.getElementById("tt2").value;
    let obj2 = {
        content2: content_nd2,
        money2: money_tt2,
    }
    data2.push(obj2);
    display2();
    clear2();
}

function display2() {
    let table = `<tr>
        <th>STT</th>
        <th>Nội dung tiêu dùng</th>
        <th>Số tiền đã chi</th>
        <th>Xóa</th>
    </tr>`;
    let sum2 = 0;
    for (let i = 0; i < data2.length; i++) {
        table += `<tr>
            <th>${i + 1}</th>
            <th>${data2[i].content2}</th>
            <th>${data2[i].money2}</th>
            <th><button id="del-2" onClick="deleteList2(${i})">Xóa dòng này</button></th>
        </tr>`;
        sum2 += data2[i].money2;
        const sum2Price = document.getElementById("sum2");
        sum2Price.innerHTML = sum2;
    }
    surplusMoney()
    document.getElementById("rep2").innerHTML = table;
}

function clear2() {
    document.getElementById("nd2").value = "";
    document.getElementById("tt2").value = "";
}

function deleteList2(y) {
    if (confirm('Bạn có chắc là muốn xóa không???')) {
        for (let i = 0; i < data2.length; i++) {
            if (i == y) {
                data2.splice(i, 1);
                display2();
            }
            if (data2.length == 0) {
                document.getElementById("sum2").innerHTML = 0;
            }
            display2();
        }
    }
}

// Hàm cộng tiền thu chi
function surplusMoney() {
    let sum01 = 0;
    let sum02 = 0;
    for (let i = 0; i < data1.length; i++) {
        sum01 += data1[i].money1;
    }
    for (let j = 0; j < data2.length; j++) {
        sum02 += data2[j].money2;
    }
    document.getElementById('surplus').innerHTML = sum01 - sum02;
    if ((sum01 - sum02) >= 50000000) {
        document.getElementById("comment").innerHTML = "bạn có kha khá tiền đấy"
    }
    if ((sum01 - sum02) < 1000000 && (sum01 - sum02) > 5000000) {
        document.getElementById("comment").innerHTML = "bấy nhiêu liệu có đủ dùng không bạn?"
    }
    if ((sum01 - sum02) < 5000000 && (sum01 - sum02) > 0) {
        document.getElementById("comment").innerHTML = "sắp hết tiền rồi, xin tiền ông pà zà thôi :)))"
    }
    if ((sum01 - sum02) < 0) {
        document.getElementById("comment").innerHTML = "bạn tiêu cái gì mà âm cmn tiền rồi???"
    }
    if ((sum01 - sum02) == 0) {
        document.getElementById("comment").innerHTML = "bạn khum cóa lấy 1 đồng lun á"
    }
}







