/*****/
$(document).on('submit', '.form-action', function() {
    $.blockUI({css: {border: 'none', overflow: 'hidden !important', padding: '15px', backgroundColor: '#000', '-webkit-border-radius': '10px', '-moz-border-radius': '10px', opacity: .5, color: '#fff'}});
    var formulario = $(this);
    var metodoEnvio = formulario.attr('method');
    $.ajax({
        url: formulario.attr('action'),
        type: metodoEnvio,
        data: formulario.serialize(),
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(response) {
            $.unblockUI({});
            formulario.find('.response').html(response);
        }, 
        error: function(){
            $.unblockUI({});
            alert('An internal error has occurred.');
        }
    });
    return false;
});


/*****************************/
const dt = new DataTransfer(); // Permet de manipuler les fichiers de l'input file
$("#attachment").on('change', function(e){
	for(var i = 0; i < this.files.length; i++){
		let fileBloc = $('<span/>', {class: 'file-block'}),
			 fileName = $('<span/>', {class: 'name', text: this.files.item(i).name});
		fileBloc.append('<span class="file-delete"><span>+</span></span>')
			.append(fileName);
		$("#filesList > #files-names").append(fileBloc);
	};
	// Ajout des fichiers dans l'objet DataTransfer
	for (let file of this.files) {
		dt.items.add(file);
	}
	// Mise à jour des fichiers de l'input file après ajout
	this.files = dt.files;

	// EventListener pour le bouton de suppression créé
	$('span.file-delete').click(function(){
		let name = $(this).next('span.name').text();
		// Supprimer l'affichage du nom de fichier
		$(this).parent().remove();
		for(let i = 0; i < dt.items.length; i++){
			// Correspondance du fichier et du nom
			if(name === dt.items[i].getAsFile().name){
				// Suppression du fichier dans l'objet DataTransfer
				dt.items.remove(i);
				continue;
			}
		}
		// Mise à jour des fichiers de l'input file après suppression
		document.getElementById('attachment').files = dt.files;
	});
});
/************/

// LOAD DOCUMENT FIRST //
document.addEventListener("DOMContentLoaded", () => checkStatus());

const checkStatus = () => {
    const getStyle = getComputedStyle(document.querySelector(".progressb"));
    const progress = {
        container: document.querySelectorAll(".progressb"),
        width: getStyle.getPropertyValue("--width").trim().replace("px",""),
        strokeWidth: getStyle.getPropertyValue("--strokeWidth"),
        timing: 30
    }
    // LOOP CONTAINER //
    progress.container.forEach(container => {
        let counter = 0;
        const status = +container.dataset.status;
        const circle = container.querySelector(".progress__circle");
        const radius = (progress.width / 2) - (progress.strokeWidth / 2);
        const circleLength = radius * 2 * Math.PI;

        circle.setAttribute("cx", progress.width / 2);
        circle.setAttribute("cy", progress.width / 2);
        circle.setAttribute("r", radius);
        circle.style.strokeDasharray = circleLength;
        container.classList.add("active");

        setInterval(()=> {
            if (counter === status) {
                clearInterval();
                return;
            } 
            counter++;
            circle.style.strokeDashoffset = circleLength - (counter / 100) * circleLength;
            //container.querySelector(".progress__status").innerText = `${counter}%`;
        }, progress.timing);
    });
};


// LOAD DOCUMENT FIRST //
document.addEventListener("DOMContentLoaded", () => checkStatus2());

const checkStatus2 = () => {
    const getStyle = getComputedStyle(document.querySelector(".progressb2"));
    const progress = {
        container: document.querySelectorAll(".progressb2"),
        width: getStyle.getPropertyValue("--width2").trim().replace("px",""),
        strokeWidth: getStyle.getPropertyValue("--strokeWidth2"),
        timing: 30
    }
    // LOOP CONTAINER //
    progress.container.forEach(container => {
        let counter = 0;
        const status = +container.dataset.status;
        const circle = container.querySelector(".progress__circle2");
        const radius = (progress.width / 2) - (progress.strokeWidth / 2);
        const circleLength = radius * 2 * Math.PI;

        circle.setAttribute("cx", progress.width / 2);
        circle.setAttribute("cy", progress.width / 2);
        circle.setAttribute("r", radius);
        circle.style.strokeDasharray = circleLength;
        container.classList.add("active");

        setInterval(()=> {
            if (counter === status) {
                clearInterval();
                return;
            } 
            counter++;
            circle.style.strokeDashoffset = circleLength - (counter / 100) * circleLength;
            container.querySelector(".progress__status2").innerText = `${counter}%`;
        }, progress.timing);
    });
};



/*** ACCION INMEDIATA ****/
function actioNow(){
    const yesNo = $('input[name="rdo"]:checked').val();
    if(yesNo == 'yes'){
        $('#accionInme').css('display', 'block');
        //$('#sustento').css('display', 'none');
        $('#accionInme .btnAddAction').css('display', 'block');
    }else{
        $('#accionInme').css('display', 'none');
        //$('#sustento').css('display', 'block');
        $('#accionInme .btnAddAction').css('display', 'none');
        //$('#accionInme .boxActionInme').empty();
    }
}
/******/

/*** PLAN DE ACCION ****/
function planAction(){
    const yesNo = $('input[name="rdo2"]:checked').val();
    if(yesNo == 'yes2'){
        $('#planAccion').css('display', 'block');
        //$('#sustento2').css('display', 'none');
        $('#planAccion .btnAddAction').css('display', 'block');
    }else{
        $('#planAccion').css('display', 'none');
        //$('#sustento2').css('display', 'block');
        $('#planAccion .btnAddAction').css('display', 'none');
        //$('#planAccion .boxPlanAction').empty();
    }
}
/******/

function progressPorc(){
    var porcentajeFijo = 0;
    var cantInputs = $('.inputPorc').length + 1;
    var cantInputsNotEmpty = 0;
    const values = $('.inputPorc');
    var porcentajeFinal = 0;
    /**/
    const actionInme = $('.boxActionInme .item');
    const actionPlan = $('.boxPlanAction .item');
    /**/
    

    for (let i = 0; i < values.length; i++) {
        //const element = array[index];
        if(values[i].value !== ''){
            cantInputsNotEmpty = cantInputsNotEmpty + 1;
        }
    }
    
    /***/
    if(actionInme.length > 0){
        cantInputsNotEmpty = cantInputsNotEmpty + 1;
        cantInputs = cantInputs + 1;
    }
    /***/
    if(actionPlan.length > 0){
        cantInputsNotEmpty = cantInputsNotEmpty + 1;
        cantInputs = cantInputs + 1;
    }
    
    porcentajeFijo = 100 / cantInputs;

    porcentajeFinal = cantInputsNotEmpty * porcentajeFijo;
    if(porcentajeFinal !== 0){
        porcentajeFinal = (porcentajeFinal).toFixed();
    }else{
        porcentajeFinal = 1;
    }
    
    /**/
    $('.progressb').attr('data-status', porcentajeFinal);
    $('.progressb2').attr('data-status', porcentajeFinal);
}
progressPorc();

function loadSelectColabEdit($this){
    const selectColab = $($this);
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: baseUrl + 'gestionmejora/notification/process/selectcolabedit',
        data: {},
        success: function (response) {
            const total = Object.keys(response).length;
            selectColab.empty();
            if(total > 0){
                selectColab.append('<option value="">Selecciona...</option>');
                for (var i = 0; i < total; i++) {
                    selectColab.append('<option value="' + response[i].id + '">' + response[i].fullname + '</option>');
                }
            }
            $($this).selectpicker('refresh');
        },
        error: function(textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
        }
    });
}

/************/
function addActionI(){
    const boxActionI = $('#accionInme .boxActionInme');
    const ci = $('.item').length;
    var html = '<div class="input_content item">';
            html += '<div class="row">';
                html += '<div class="col-lg-11">';
                    html += '<div class="row">';
                        html += '<div class="col-lg-6">';
                            html += '<div class="input_content">';
                                html += '<input type="text" placeholder="Descripción" name="descrip[]">';
                                html += '<input type="hidden" value="INMEDIATA" name="tipo[]">';
                            html += '</div>';
                        html += '</div>';

                    html += '<div class="col-lg-3">';
                        html += '<div class="input_content">';
                            html += '<select name="selectStateAI[]" class="selectpicker form-control">';
                                html += '<option value="PENDIENTE">PENDIENTE</option>';
                                html += '<option value="EN PROCESO">EN PROCESO</option>';
                                html += '<option value="CERRADO">CERRADO</option>';
                            html += '</select>';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="col-lg-3">';
                        html += '<div class="input_content">';
                            html += '<input type="date" placeholder="Fecha límite" name="date[]">';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="col-lg-4">';
                        html += '<div class="input_content">';                    
                            html += '<select name="selectColab[]" class="selectpicker form-control s'+(ci+1)+'">';
                                html += '<option value="">Selecciona</option>';
                            html += '</select>';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="col-lg-4">';
                        html += '<div class="input_content">';
                            html += '<input type="text" placeholder="Correo" name="email[]">';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="col-lg-4">';
                        html += '<div class="input_content">';       
                            html += '<input type="file" name="file[]" id="file-'+(ci+1)+'" class="inputfile inputfile-1" data-multiple-caption="count files selected">';
                            html += '<label for="file-'+(ci+1)+'"><span>Selecciona un archivo...</span></label>';
                        html += '</div>';
                    html += '</div>';

                html += '</div>';
            html += '</div>';

            html += '<div class="col-lg-1">';
                html += '<div class="btnsActionInme">';
                    html += '<a href="javascript:void(0);" data-id="'+1+'" class="btnSave" data-action="addAction"><i class="fal fa-check"></i></a>';
                    html += '<a href="javascript:void(0);" class="btnDelete"><i class="fal fa-trash"></i></a>';
                html += '</div>';
            html += '</div>';
        html += '</div>';
    html += '</div>';
    
    boxActionI.append(html);
    $('select[name="selectStateAI[]"]').selectpicker('refresh');
    /**/
    loadSelectColabEdit('.s'+(ci+1));
    inputFileValidate();
}


function deleteActionI($this){
    const inputContent = $($this).parent().parent().parent().parent();
    inputContent.remove();
    enableCheckYesNo();
    enableCheckYesNo2();
}

function enableCheckYesNo(){
    const cantItems = $('.boxActionInme .item');
    const inputNo = $('#no');
    if(cantItems.length > 0){
        inputNo.attr('disabled', true);
    }else{
        inputNo.attr('disabled', false);
    }
}

function enableCheckYesNo2(){
    const cantItems = $('.boxPlanAction .item');
    const inputNo = $('#no2');
    if(cantItems.length > 0){
        inputNo.attr('disabled', true);
    }else{
        inputNo.attr('disabled', false);
    }
}
/****/

function addPlanAction(){
    const boxPlanAction = $('#planAccion .boxPlanAction');
    const ci = $('.item').length;
    var html = '<div class="input_content item">';
            html += '<div class="row">';
                html += '<div class="col-lg-11">';
                    html += '<div class="row">';
                        html += '<div class="col-lg-6">';
                            html += '<div class="input_content">';
                                html += '<input type="text" placeholder="Descripción" name="descrip[]">';
                                html += '<input type="hidden" value="PLAN" name="tipo[]">';
                            html += '</div>';
                        html += '</div>';

                    html += '<div class="col-lg-3">';
                        html += '<div class="input_content">';
                            html += '<select name="selectStatePA[]" class="selectpicker form-control">';
                                html += '<option value="PENDIENTE">Pendiente</option>';
                                html += '<option value="EN PROCESO">En proceso</option>';
                                html += '<option value="CERRADO">Cerrado</option>';
                            html += '</select>';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="col-lg-3">';
                        html += '<div class="input_content">';
                            html += '<input type="date" placeholder="Fecha límite" name="date[]">';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="col-lg-4">';
                        html += '<div class="input_content">';
                            html += '<select name="selectColab[]" class="selectpicker form-control s2'+(ci+1)+'"></select>';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="col-lg-4">';
                        html += '<div class="input_content">';
                            html += '<input type="text" placeholder="Correo"  name="email[]">';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="col-lg-4">';
                        html += '<div class="input_content">';       
                            html += '<input type="file" name="file[]" id="file-'+(ci+1)+'" class="inputfile inputfile-1" data-multiple-caption="count files selected">';
                            html += '<label for="file-'+(ci+1)+'"><span>Selecciona un archivo...</span></label>';
                        html += '</div>';
                    html += '</div>';

                html += '</div>';
            html += '</div>';

            html += '<div class="col-lg-1">';
                html += '<div class="btnsActionInme">';
                    html += '<a href="javascript:void(0);" class="btnSave" data-action="addAction"><i class="fal fa-check"></i></a>';
                    html += '<a href="javascript:void(0);" class="btnDelete"><i class="fal fa-trash"></i></a>';
                html += '</div>';
            html += '</div>';
        html += '</div>';
    html += '</div>';
    
    boxPlanAction.append(html);
    $('select[name="selectStatePA[]"]').selectpicker('refresh');
    /***/
    loadSelectColabEdit('.s2'+(ci+1));
    inputFileValidate();
}



function getEmailColab($this){
    const colaboradorId = $($this).val();
    const inputEmail = $($this).parent().parent().parent().parent().find('input[name="email[]"]');
    const inputEmailEdit = $($this).parent().parent().parent().parent().find('input[name="edit_email[]"]');
    try {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: baseUrl + 'gestionmejora/getCorreoUser',
            data: { colaboradorId: colaboradorId},
            success: function (response) {
                inputEmail.val(response.email);
                inputEmailEdit.val(response.email);
            },
            error: function(textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }
        });
    } catch (error) {
        console.log(error);
    }
}

/*** SAVE PLAN ACTION - ACTION NOW ***/
function saveAction($val1='', $val2 = '', $val3 = '', $val4 = '', $val5 = '', $val6 = [], $val7 = '', $val8 = ''){
    try {
        var data = new FormData();
        const fileLength = $val6.files.length;
        
        if(fileLength > 0){
            data.append('file', $val6.files[0]);
        }

        data.append('tipo', $val1);
        data.append('descrip', $val2);
        data.append('state', $val3);
        data.append('colabId', $val4);
        data.append('date', $val5);
        data.append('id', $val7);
        data.append('notificacionId', $('input[name="notificacionId"]').val());

        if($val1!=='' && $val2!=='' && $val3!=='' && $val4!== '' && $val5 !== ''){
            $.ajax({
                type: "POST",
                url: baseUrl + 'gestionmejora/notification/process/' + $val8,
                dataType: 'json',
                data: data,
                processData: false,
                contentType: false,
                success: function (response) {
                    

                    if(response.states == 'OK'){
                        alertify.alert('<h4>' + response.message + '</h4>');
                        setTimeout(function(){location.reload();}, 1500);
                    }else if(response.states == 'NOFILE'){
                        alertify.alert('Archivo no compatible o muy pesado!');
                    }else{
                        alertify.alert('No se encontró el registro!');
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                }
            });
        }else{
            alertify.alert('<h4>Hay campos vacíos...</h4>');
        }
    } catch (error) {
        console.log(error);
    }
}

/**** DELETE ACTION *****/
function deleteAction($this){
    const itemId = $($this).attr('data-id');
    if(itemId !== '' && itemId !== 0){
        alertify.confirm('<h4>¿Está seguro que desea eliminar este registro?</h4>')
        .set('title', 'Importante')
        .set('labels', {ok: 'Confirmar', cancel: 'Cancelar'})
        .set('onok', function(closeEvent) {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: baseUrl + 'gestionmejora/notification/process/deleteAction',
                data: {itemId: itemId},
                success: function (response) {
                    if(response.states == 'OK'){
                        alertify.alert('<h4>El registro fue eliminado correctamente!</h4>');
                        location.reload();
                    }else{
                        alertify.error('No se encontró el registro!');
                    }
                },
                error: function(textStatus, errorThrown) {
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                }
            });
        });
    }
}

/****/
function deleteFileAsignado($this = ''){
    const itemId = $($this).attr('data-id');
    if(itemId !== '' && itemId !== 0){
        alertify.confirm('<h4>¿Está seguro que desea eliminar este archivo?</h4>')
        .set('title', 'Importante')
        .set('labels', {ok: 'Confirmar', cancel: 'Cancelar'})
        .set('onok', function(closeEvent) {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: baseUrl + 'gestionmejora/notification/process/deleteFile',
                data: {itemId: itemId},
                success: function (response) {
                    if(response.states == 'OK'){
                        alertify.alert('<h4>El archivo fue eliminado correctamente!</h4>');
                        location.reload();
                    }else{
                        alertify.error('No se encontró el registro!');
                    }
                },
                error: function(textStatus, errorThrown) {
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                }
            });
        });
    }
}


/*** INPUT FILE***/
function inputFileValidate(){
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call( inputs, function( input ){
        var label = input.nextElementSibling;
        var labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e ){
            var fileName = '';
            if( this.files && this.files.length > 1 ){
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( 'count', this.files.length );
            }else{
                fileName = e.target.value.split( '\\' ).pop();
            }
            
            var arrayFile = fileName.split(".");
            var extension = "." + arrayFile.slice(-1)[0];
            valid = [".",".jpg",".png",".pdf",".docx",".PDF",".DOCX",".JPG",".PNG"];
            
            if( valid.indexOf(extension.toLowerCase()) == -1 ){
                label.querySelector( 'span' ).innerHTML = "Extensión del archivo no permitido";
                label.querySelector( 'span' ).style.color = '#d3394c';
            }else if(valid.indexOf(extension.toLowerCase()) == 0){
                label.innerHTML = labelVal;
                label.querySelector( 'span' ).style.color = '#212529';
            }else{
                label.querySelector( 'span' ).innerHTML = fileName;
                label.querySelector( 'span' ).style.color = '#6cd339';
            }
        });

        // Firefox bug fix

        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
}
inputFileValidate();

/**** DELETE FILE ****/
function deleteFile($this, $folder = '', $file = ''){
    const idAction = $($this).attr('data-id');
    if(idAction !== ''){
        alertify.confirm('<h4>¿Está seguro que desea eliminar el archivo?</h4>')
        .set('title', 'Importante')
        .set('labels', {ok: 'Confirmar', cancel: 'Cancelar'})
        .set('onok', function(closeEvent) {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: baseUrl + 'gestionmejora/deleteFile',
                data: {idAction: idAction, folder: $folder, file: $file},
                success: function (response) {

                    let total = Object.keys(response).length;
                    console.log(total);
                    if(total > 0){
                        alertify.alert('<h4>El archivo fue eliminado correctamente!</h4>');
                        location.reload();
                    }else{
                        console.log("no hay archivo");
                        alertify.error('No se encontró el archivo!');
                    }
                },
                error: function(textStatus, errorThrown) {
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                }
            });
        });
    }
    /*$.ajax({
        type: 'POST',
        dataType: 'json',
        url: baseUrl + 'gestionmejora/notification/process/selectcolabedit',
        data: {},
        success: function (response) {
            const total = Object.keys(response).length;
            selectColab.empty();
            if(total > 0){
                selectColab.append('<option value="">Selecciona...</option>');
                for (var i = 0; i < total; i++) {
                    selectColab.append('<option value="' + response[i].id + '">' + response[i].fullname + '</option>');
                }
            }
            $($this).selectpicker('refresh');
        },
        error: function(textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
        }
    });*/
}

/**** EJECUCIÓN DE FUNCIONES ****/
$(document).on('change', '.inputPorc', function() {
    progressPorc();
    checkStatus();
    checkStatus2();
});

$(document).on('change', 'input[name="rdo"]', function() {
    actioNow();
});

$(document).on('change', 'input[name="rdo2"]', function() {
    planAction();
});

$(document).on('click', '#accionInme .btnAddAction', function() {
    addActionI();
    progressPorc();
    const cantItems = $('.boxActionInme .item');
    if(cantItems.length == 1){
        checkStatus();
        checkStatus2();
    }
});

$(document).on('click', '#accionInme .btnsActionInme .btnDelete', function() {
    deleteActionI(this);
    progressPorc();
    const cantItems = $('.boxActionInme .item');
    if(cantItems.length == 0){
        checkStatus();
        checkStatus2();
    }
});

$(document).on('click', '#planAccion .btnAddAction', function() {
    addPlanAction();
    progressPorc();
    const cantItems = $('.boxPlanAction .item');
    if(cantItems.length == 1){
        checkStatus();
        checkStatus2();
    }
});
/**/
$(document).on('click', '#planAccion .btnsActionInme .btnDelete', function() {
    deleteActionI(this);
});

/**/
$(document).on('click', '#accionInme .btnsActionInme .btnSave', function() {
    const p = $(this).parent().parent().parent();
    const url = $(this).attr('data-action');

    const tipo = p.find('input[name="tipo[]"]').val();
    const descrip = p.find('input[name="descrip[]"]').val();
    const state = p.find('select[name="selectStateAI[]"]').val();
    const colabId = p.find('select[name="selectColab[]"]').val();
    const date = p.find('input[name="date[]"]').val();
    const file = document.getElementById(p.find('input[name="file[]"]').attr('id'));
    saveAction(tipo, descrip, state, colabId, date, file, '', url);
});

$(document).on('click', '#planAccion .btnsActionInme .btnSave', function() {
    const p = $(this).parent().parent().parent();
    const url = $(this).attr('data-action');

    const tipo = p.find('input[name="tipo[]"]').val();
    const descrip = p.find('input[name="descrip[]"]').val();
    const state = p.find('select[name="selectStatePA[]"]').val();
    const colabId = p.find('select[name="selectColab[]"]').val();
    const date = p.find('input[name="date[]"]').val();
    const file = document.getElementById(p.find('input[name="file[]"]').attr('id'));
    saveAction(tipo, descrip, state, colabId, date, file, '', url);
});
/**/
enableCheckYesNo();
enableCheckYesNo2();
/**/
$(document).on('click', '#accionInme .btnsActionInme .btnDeleteEdit', function() {
    deleteAction(this);
});

$(document).on('click', '#planAccion .btnsActionInme .btnDeleteEdit', function() {
    deleteAction(this);
});
/**/
$(document).on('click', '#accionInme .btnsActionInme .btnSaveEdit', function() {
    const p = $(this).parent().parent().parent();
    const url = $(this).attr('data-action');
    const id = $(this).attr('data-id');

    const tipo = p.find('input[name="edit_tipo[]"]').val();
    const descrip = p.find('input[name="edit_descrip[]"]').val();
    const state = p.find('select[name="edit_selectStateAI[]"]').val();
    const colabId = p.find('select[name="selectColabEdit[]"]').val();
    const date = p.find('input[name="edit_date[]"]').val();
    const file = document.getElementById(p.find('input[name="file[]"]').attr('id'));
    saveAction(tipo, descrip, state, colabId, date, file, id, url);
});

$(document).on('click', '#planAccion .btnsActionInme .btnSaveEdit', function() {
    const p = $(this).parent().parent().parent();
    const url = $(this).attr('data-action');
    const id = $(this).attr('data-id');

    const tipo = p.find('input[name="edit_tipo[]"]').val();
    const descrip = p.find('input[name="edit_descrip[]"]').val();
    const state = p.find('select[name="edit_selectStatePA[]"]').val();
    const colabId = p.find('select[name="selectColabEdit[]"]').val();
    const date = p.find('input[name="edit_date[]"]').val();
    const file = document.getElementById(p.find('input[name="file[]"]').attr('id'));
    saveAction(tipo, descrip, state, colabId, date, file, id, url);
});
/**/
$(document).on('click', '.deleteFile', function() {
    deleteFileAsignado(this);
});
/**/
$(document).on('change', 'select[name="selectColabEdit[]"], select[name="selectColab[]"]', function() {
    getEmailColab(this);
});

/****/

$(document).on('click', '.btnDeleteFile', function() {
    const file = $(this).attr('data-file');
    deleteFile(this, 'actionfile', file);
});