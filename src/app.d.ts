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
		interface AppData {
			name: string;
			public_url: string;
			health_url: string;
			description: string;
			icon: string;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
