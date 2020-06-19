
import http from 'http';
import express from 'express';

import { renderToString } from 'react-dom/server';

import Router from './routes';
import ViewsControlller from '../controllers/views-controller';

class App {
	constructor() {
		this.express = express();
		this.express.use(this.onRequest.bind(this));

		this.init();
	}

	init() {
		this.controllers = {
			views: new ViewsControlller()
		}

		this.routes = new Router(this.controllers);

		this.express.use('/', this.routes.router);

		this.server = http.createServer(this.express);
		this.server.listen(8181, () => {
			console.log('Servidor listo en el puerto 8181');
		});
	}

	onRequest(req, res, next) {
		res.render = component => res.send(renderToString(component));
		next();
	}
}

export default App;
