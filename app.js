const express = require('express');
const app = express();

// ======== SE DETERMINA MOTOR Y EXTENSION ====

	app.set('view engine', 'ejs');

// ======== HABILITO ESTILOS ====

	app.use(express.static('public'));

	app.use(express.static('imagenes de prueba'));
	app.use(express.static('perfiles de prueba'));

// ========= DEFINO RAIZ ====

	app.use('/', require('./router'));


// ======== DOY INICIO A SERVIDOR ====

	app.listen(5000, ()=>{
		console.log('SERVER corriendo en http://localhost:5000');
	   
	})
