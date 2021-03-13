const Utils = require("./utils");

describe( 'Utils', () => {
	describe( 'isHomePage', () => {
		it("should match if on homepage", () => {
			const utils = new Utils();
			window.history.pushState({}, "", "/");
			expect(utils.isHomePage()).toBeTruthy();
		});

		it("should match if on homepage and has query parameters", () => {
			const utils = new Utils();
			window.history.pushState({}, "", "/?foo=bar");
			expect(utils.isHomePage()).toBeTruthy();
		});

		it("should match if on homepage and has hash navigation", () => {
			const utils = new Utils();
			window.history.pushState({}, "", "/#foo");
			expect(utils.isHomePage()).toBeTruthy();
		});

		it("should not match if on another page", () => {
			const utils = new Utils();
			window.history.pushState({}, '', '/news');
			expect(utils.isHomePage()).toBeFalsy();
		});

		it("should match with different homepage parameter", () => {
			const utils = new Utils({
				homePagePath: '/home'
			});
			window.history.pushState({}, "", "/home");
			expect(utils.isHomePage()).toBeTruthy();
		});
	});
});
