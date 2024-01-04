const clk = document.querySelector('.clock')
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clk.innerHTML = date.toLocaleTimeString();
}, 1000)
