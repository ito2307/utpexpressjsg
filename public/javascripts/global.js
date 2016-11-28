// Studentlist data array for filling in info box
var studentListData = [];
 
// DOM Ready =============================================================
$(document).ready(function() {
 
    // Populate the Student table on initial page load
    populateTable();
	//populateTable2();
});
 
// Functions =============================================================
 
// Fill table with data
function populateTable() {
 
    // Empty content string
    var tableContent = '';
 
    // jQuery AJAX call for JSON
    $.getJSON( '/estudiante/listardata', function( data ) {
 
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.nombre + '</td>';
            tableContent += '<td>' + this.apellido + '</td>';
            tableContent += '<td>' + this.activo + '</td>';
            tableContent += '<td><a href="/estudiante/detallar&p=4" target="_blank" class="linkdeletestudent2" rel="' + this.id + '">detalle</a></td>';
            tableContent += '<td><a href="" class="linkdeletestudent" rel="' + this.id + '">eliminar</a></td>';
            tableContent += '</tr>';
                                                // Stick our user data array into a ListaDeEstudiantes variable in the global object
                                               
        });
		
		// Inject the whole content string into our existing HTML table
		$('#ListaDeEstudiantes table tbody').html(tableContent);
		// Delete Student link click
		$('#ListaDeEstudiantes table tbody').on('click', 'td a.linkdeletestudent', deleteStudent);

    });
};

// Delete Student
function deleteStudent(event) {
    event.preventDefault();
    var confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation === true) {
        $.ajax({
            type: 'DELETE',
            url: '/estudiante/deletestudent/' + $(this).attr('rel')
        }).done(function( response ) {
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }
            populateTable();
        });
    }
    else {
        return false;
    }
};

function populateTable2() {
    var tableContent = '';
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