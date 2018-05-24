var inicioApp = function(){
    var Aceptar = function(){
        var usuario=$("#txtUsuario").val();
        var clave=$("#txtClave").val();
        var parametros="opc=validaentrada"+
                        "&usuario="+usuario+
                        "&clave="+clave+
                        "&aleatorio="+Math.random();
        $.ajax({
            cache:false,
            type: "POST",
            dataType: "json",
            url: "php/validaentrada.php",
            data: parametros,
            success: function(response){
                    if (response.respuesta == true){
                      //  alert("Bienvenido");
                      $("#secciondeinicio").hide("fast");
                      $("#frmUsuario").show(slow);
                      $("#txtNombreUsuario").focus();
                    }else{
                        alert("usuario o clave incorrecta(s)");
                    }
            },
            error: function(xhr,ajaxOptions,thrownError){

            }
        });
    }
    var buscarUsuario =function(){
    	var usuario = $("#txtNombreUsuario").val();
    	var parametros = "opc=buscarUsuario"+"&usuario="+usuario+"&aleatorio="+Math.random();
    	if (usuario != "") {
    		$.ajax({
            cache:false,
            type: "POST",
            dataType: "json",
            url: "php/buscarusuario.php",
            data: parametros,
            success: function(response){
                    if (response.respuesta == true){
                    $("#txtnombre").val(response.nombre);
                    $("#txtClaveUsusario").val(response.clave);

                    }else{
                        $("#txtnombre").focus();
                    }
            },
            error: function(xhr,ajaxOptions,thrownError){

            }
        });
    	}
    }
    var teclaNombreUsuario=function(tecla){
    	if (tecla.which==13) {
          buscarUsuario();
    	}
    }
    $("#btnAceptar").on("click",Aceptar);
    $("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
}
$(document).ready(inicioApp);