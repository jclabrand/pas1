

import express from 'express';

class Routes {
	constructor(controllers) {
		this.router = express.Router();

		this.router.use('/sistemas', controllers.views.main);

		this.router.use('/perfil', (req, res) => {
			console.log('PERFIL');
			res.send('PERFIL');
		});
	}
}

export default Routes;
