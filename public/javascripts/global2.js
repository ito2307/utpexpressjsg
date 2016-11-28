// Studentlist data array for filling in info box
var studentListData = [];
 
// DOM Ready =============================================================
$(document).ready(function() {
 
    // Populate the Student table on initial page load
    populateTable();
});
 
// Functions =============================================================
 
// Fill table with data
function populateTable() {
 
    // Empty content string
    var tableContent = '';
 
    // jQuery AJAX call for JSON
    $.getJSON( '/estudiante/detallardata', function( data ) {
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.id + '</td>';
            tableContent += '<td>' + this.nombre + '</td>';
            tableContent += '<td>' + this.apellido + '</td>';
            tableContent += '<td>' + this.cedula + '</td>';
            tableContent += '<td>' + this.descripcion + '</td>';
            tableContent += '<td>' + this.activo + '</td>';
            tableContent += '</tr>';                                    
        });
		
		// Inject the whole content string into our existing HTML table
		$('#ListaDeEstudiantes table tbody').html(tableContent);
    });
};