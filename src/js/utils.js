/**
 * Dummy utility class to demonstrate a basic JS
 * structure and assoiciated test
 * @param {Object} params - containing:
 * @param {String} homePagePath - the pathname of the homepage (defaults to '/')
 */
class Utils {
	constructor(params) {
		this.params = Object.assign({
			homePagePath: '/'
		}, params);
	}

	/**
	 * Is the user on the hompage
	 * @return {Boolean}
	 */
	isHomePage() {
		return document.location.pathname === this.params.homePagePath;
	}
}

module.exports = Utils;
