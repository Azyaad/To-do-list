const inputText= document.querySelector('#inpText');
const ul= document.querySelector('#ul');



const addButton= document.querySelector('.button');
addButton.addEventListener('click', function(e){

         e.preventDefault();
    
        if (inputText.value==='') {
           const msg = document.querySelector('.msg');
           msg.innerHTML='<h5>Please enter your task!<h5>';
           msg.classList.add('error');
        }
        else {

    const li= document.createElement('li');
    const span1= document.createElement('span');
    const span2= document.createElement('span');
    li.appendChild(span1);
    li.appendChild(span2);
    span1.className='taskName';
    span2.className='delete';
    
span1.appendChild(document.createTextNode(inputText.value));
span2.appendChild(document.createTextNode('Delete'));
    inputText.value='';
    e.preventDefault();
    ul.appendChild(li);
    const msg = document.querySelector('.msg');
     msg.innerHTML='';
     inputText.value ='';

        }
    // localStorage.setItem('keyNameBook', nameBook);

});

ul.addEventListener('click', function(e){

    if (e.target.className==='delete'){
        e.target.parentElement.remove();
    }

});