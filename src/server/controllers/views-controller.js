
import React from 'react';

import MainView from '../views/main-view.jsx';

class ViewsControlller {
	constructor() {

	}

	main(req, res) {
		//construir y retornar la vista

		res.render(<MainView></MainView>);
	}
}

export default ViewsControlller;
