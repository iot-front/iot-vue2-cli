const user = {
	state: {
		userDinfo: {} //D端-群组内唯一用户信息
	},
	mutations: {
		upUserDinfo(state, info) {
			state.userDinfo = info || {}
		}
	}
}
export default user
