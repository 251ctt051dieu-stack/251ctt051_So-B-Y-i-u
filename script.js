let mssv = "251CTT051";
let lastTwo = parseInt(mssv.slice(-2));

if(lastTwo % 2 === 0){
    document.querySelector(".courses")
    .style.gridTemplateColumns = "repeat(3,1fr)";
}else{
    document.querySelector(".courses")
    .style.gridTemplateColumns = "repeat(2,1fr)";
}