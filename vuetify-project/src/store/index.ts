import { createStore } from 'vuex';

export interface State {
	count: number;
}

export default createStore({
	state() {
		return {
			count: 0
		};
	},
	mutations: {
		changeAddOneCount(state: State) {
			state.count++;
		},
		changeTenCount(state: State, valueNum: number) {
			state.count = valueNum;
		}
	}
});
