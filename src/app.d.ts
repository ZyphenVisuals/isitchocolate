// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: any;
			pb: any;
		}
		interface PageData {
			form: any;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
