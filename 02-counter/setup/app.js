// set initial
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);//node list

btns.forEach(function (btn) {
    btn.addEventListener('click',function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('reset')){
            count= 0;
        }
        else if(styles.contains('increase')){
            count++;
        }
        value.textContent = count
    })
});