const inputs= document.querySelectorAll(".input");
const calculateAreaBtn =document.querySelector("#calculate-area-btn");
const output =document.querySelector("#output")

calculateAreaBtn.addEventListener("click", calculateArea)

function calculateArea(){
    const areaOfTriangle = 0.5* basexheight(Number(inputs[0].value),Number(inputs[1].value));
    output.innerText="The Area of Triangle is " + areaOfTriangle;
}
function basexheight(base, height){
    const bxh = base*height;
    return bxh;
}