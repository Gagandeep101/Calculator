    var inp_area = document.querySelector(".input_filled");
    
    // Clear screen btn
    var clr_scr = document.querySelector(".clear_btn");
    clr_scr.addEventListener("click", function () {
        inp_area.value = "";
    });

    // Working with calculator seocnd row

    // num_1 button
    var num1 = document.querySelector(".num_1");
    num1.addEventListener("click", function () {
        inp_area.value = inp_area.value + '1';
    });

    // num_2 button
    var num2 = document.querySelector(".num_2");
    num2.addEventListener("click", function () {
        inp_area.value = inp_area.value + '2';
    });

    // num_3 button
    var num3 = document.querySelector(".num_3");
    num3.addEventListener("click", function () {
        inp_area.value = inp_area.value + '3';
    });

    // ope_add button
    var ope_add = document.querySelector(".ope_add");
    ope_add.addEventListener("click", function () {
        inp_area.value = inp_area.value + '+';
    });

    // Working with calculator third row

    // num_4 button
    var num4 = document.querySelector(".num_4");
    num4.addEventListener("click", function () {
        inp_area.value = inp_area.value + '4';
    });

    // num_5 button
    var num5 = document.querySelector(".num_5");
    num5.addEventListener("click", function () {
        inp_area.value = inp_area.value + '5';
    });

    // num_6 button
    var num6 = document.querySelector(".num_6");
    num6.addEventListener("click", function () {
        inp_area.value = inp_area.value + '6';
    });

    // ope_sub button
    var ope_sub = document.querySelector(".ope_sub");
    ope_sub.addEventListener("click", function () {
        inp_area.value = inp_area.value + '+';
    });

    // Working with calculator fouth row

    // num_7 button
    var num7 = document.querySelector(".num_7");
    num7.addEventListener("click", function () {
        inp_area.value = inp_area.value + '7';
    });

    // num_8 button
    var num8 = document.querySelector(".num_8");
    num8.addEventListener("click", function () {
        inp_area.value = inp_area.value + '8';
    });

    // num_9 button
    var num9 = document.querySelector(".num_9");
    num9.addEventListener("click", function () {
        inp_area.value = inp_area.value + '9';
    });

    // ope_mul button
    var ope_mul = document.querySelector(".ope_mul");
    ope_mul.addEventListener("click", function () {
        inp_area.value = inp_area.value + '*';
    });
    // Working with calculator fifth row

    // ope_div button
    var ope_div = document.querySelector(".ope_div");
    ope_div.addEventListener("click", function () {
        inp_area.value = inp_area.value + '/';
    });

    // num_0 button
    var num0 = document.querySelector(".num_0");
    num0.addEventListener("click", function () {
        inp_area.value = inp_area.value + '0';
    });

    // dec_poi button
    var dec_poi = document.querySelector(".dec_poi");
    dec_poi.addEventListener("click", function () {
        inp_area.value = inp_area.value + '.';
    });

    // ope_cal button
    var ope_cal = document.querySelector(".ope_cal");
    ope_cal.addEventListener("click", function () {
        inp_area.value = eval(inp_area.value);
    });