const routers = [
	{
		path: "/:first/:second/:third?",
		meta: {
			title: ""
		},
		component: resolve => require(["./views/public/container.vue"], resolve)
	},
	{
		path: "/",
		redirect: "/order/selfSpare"
	}];
export default routers;