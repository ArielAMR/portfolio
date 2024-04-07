let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');


function generateQR(){
    if(qrText.value){
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        document.querySelector('.imgBox').style.height = 'auto'
    }else{
        qrText.classList.add('not-found');
        setTimeout(()=>{
            searchBox.classList.remove('not-found');
        },100)
        document.querySelector('.imgBox').style.height = '0'
    }
}