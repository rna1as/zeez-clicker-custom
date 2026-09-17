let loading;
for(const button of document.querySelectorAll('[data-model]'))button.addEventListener('click',async()=>{
 document.getElementById('pickerStatus').textContent='Menyiapkan preview 3D…';
 try{loading??=import('./app.js');const app=await loading;await app.start(button.dataset.model);document.getElementById('pickerStatus').textContent='';}
 catch(error){loading=null;document.getElementById('pickerStatus').textContent='Preview belum dapat dimuat. Silakan coba lagi.';console.error(error)}
});
