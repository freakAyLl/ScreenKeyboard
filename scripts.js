let line=document.querySelector('[data-line]');
let arr=['q','w','e','r','t','y','u','i','o','p','DEL','a','s','d','f','g','h','j','k','l',';',"ENTER",'z','x','c','v','b','n','m',',','.','/','SHIFT','SPACE']
let lower=true
let children = document.querySelector(".keyboard").children
function write(array){
    for(let i=0; i < array.length ;i++){
        let actual= document.createElement('button')
        //working related
        actual.innerText=array[i]
        actual.addEventListener('click',()=>{
            switch(actual.innerHTML){
                case 'DEL':
                    document.querySelector('[data-display]').innerHTML=document.querySelector('[data-display]').innerHTML.slice(0,-1)
                    return
                break;
                case 'ENTER':
                    alert('Sent!', document.querySelector('[data-display]').innerHTML='')
                    return
                break;
                case 'SHIFT':
                    actual.classList.toggle('shift')
                    shift()
                    return
                break;
                case 'SPACE':
                    document.querySelector('[data-display]').innerHTML+=' '
                    return
                break;
            }
            document.querySelector('[data-display]').innerHTML+=actual.innerHTML
              
        })
        //css related
        line.appendChild(actual)
        actual.classList.add('character')
        if(i==10){actual.classList.add('delete')}
        if(i==10 || i==21 ||i==32){actual.classList.add('last-column')}
        if(i==33){actual.classList.add('space')}
        }
}
function shift(){
    if(lower){
        for(let i=0 ;i<children.length;i++){
            children[i].innerHTML=children[i].innerHTML.toUpperCase()
        }
    }else{
        console.log()
        for(let i=0 ;i<children.length;i++){
            if(i==10 || i==21 ||i==32 || i==33){
                children[i].innerHTML=children[i].innerHTML
            }else{
                children[i].innerHTML=children[i].innerHTML.toLowerCase()
            }
        }
    }
    lower= !lower
}
write(arr);