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

/*** SAVE PLAN ACTION - ACTION NOW ***/
function loadCategory($val1=''){
    try {
		const idType = $($val1).val();
        if(idType !== ''){
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: baseUrl + 'web/notification/loadselectcategory',
                data: {selecTypeNoti: idType},
                success: function (response) {
					
					const total = Object.keys(response).length;
                    if(total > 0){
						const selectCategory = $('select[name="selectCategory"]');
						selectCategory.empty();
						selectCategory.append('<option value="">Selecciona...</option>');
						for (var i = 0; i < total; i++) {
							selectCategory.append('<option value="' + response[i].id + '">' + response[i].titulo + '</option>');
						}
						selectCategory.selectpicker('refresh');
					}
                    
					
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}


/** EJECUCION DE FUNCIONES **/
$(document).on('change', 'select[name="selecTypeNoti"]', function() {
    loadCategory(this);
});