let count = 0;
let up = true

const value = document.getElementById('value')
const btn = document.querySelectorAll('.btn')




btn.forEach(function(event){
    event.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increasing')){
             count++;

        }else if (styles.contains('decreasing')){

                count--;

        }else{
            count = 0
        }
        
        value.textContent = count;
        if(count > 0){
            value.style.color = 'green';
        }else if(count < 0){
            value.style.color = 'red';
        }else if (count == 0){
            value.style.color = 'black';
        }



    })

})