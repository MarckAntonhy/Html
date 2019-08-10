var person = {
    name :"Miguel",
    dni :"78654321",
    address : "Las lomas",
    phone: "987654321",
    mail :"email@gmail.com",
};

var frm = document.forms.registry;

function setDataForm() {
    frm.elements.txtName.value = person.name;
    frm.elements.txtDni.value = person.dni;
    frm.elements.txtAddress.value = person.address;
    frm.elements.txtPhone.value = person.phone;
    frm.elements.txtMail.value = person.mail;
}

setDataForm();

function getDataForm(frm1){
    for(var i=0; i<frm1.elements.length; i++) {
        console.log(frm1.elements[i].value);
    }
}


function pintar(element, color){
    element.style.borderColor = color;
}


function procesar() {
    alert('enviado datos');
}

function verificacion(element){
    var valor = element.value;
    var color ;
    if(valor == ""){
        color = 'red';
    }
    else{
        color = 'lime';
    }

    element.style.borderColor = color;
}