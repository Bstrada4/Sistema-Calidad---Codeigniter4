/******* REPORTE KARDEX *******/
function reporteOne($this){
    var selectAno = Base64.encode($("select[name='selectAno']").val());
    var fechaHasta = Base64.encode($("input[name='fechaHasta']").val());
    var selectNotificador = Base64.encode($("select[name='selectUser']").val());

    if (selectAno !== '' && fechaHasta !== '' && selectNotificador) {
        if (selectAno == '') {
            selectAno = '=';
        }
        if (fechaHasta == '') {
            fechaHasta = '=';
        }
        if (selectNotificador == '') {
            selectNotificador = '=';
        }
        
        var url = $($this).attr("data-url");
        url = url + '/' + selectAno + '/' + fechaHasta + '/' +  selectNotificador;
        location.href = url;
    }else{
        alertify.alert('<h4>Espera! Hay campos vacíos...</h4>');
    }
}


/*** EJECUCION DE FUNCIONES ***/
$(document).on('click', '.reporteOne', function() {
    reporteOne(this);
});