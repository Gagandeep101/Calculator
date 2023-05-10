var inp_area=document.querySelector(".input_filled");
var res='';
var screen_val="";

// Clear screen btn
var clr_scr=document.querySelector(".clear_btn");
clr_scr.addEventListener("click",function(){
    inp_area.value="";
});

// Working with calculator first row

// num_1 button
var num1=document.querySelector(".num_1");
num1.addEventListener("click",function(){
    inp_area.value=inp_area.value+'1';
});

// num_2 button
var num2=document.querySelector(".num_2");
num2.addEventListener("click",function(){
    inp_area.value=inp_area.value+'2';
});

// num_3 button
var num3=document.querySelector(".num_3");
num3.addEventListener("click",function(){
    inp_area.value=inp_area.value+'3';
});

// ope_add button
var ope_add=document.querySelector(".ope_add");
ope_add.addEventListener("click",function(){
    inp_area.value=inp_area.value+'+';
});


