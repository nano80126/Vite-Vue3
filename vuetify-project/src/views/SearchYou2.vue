<template>
	<div>
		<v-row class="d-flex align-center">
			<v-col cols="4" class="bg-purple">1</v-col>
			<v-col cols="4" class="text-right bg-success">
				{{ store.state.count }}
			</v-col>

			<v-col cols="4" class="text-center">
				<v-btn text class="mx-3 rounded-xl" color="success" @click="addA">
					<v-icon class="color-white" icon="mdi-account" />
					{{ a }}
				</v-btn>

				<v-btn text class="mx-3 rounded-xl" color="success" @click="addB">
					<v-icon class="color-white" icon="mdi-account" />
					{{ b }}
				</v-btn>

				<v-btn @click="ChangeHander">+10</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script setup lang="ts">
import { ref, defineComponent } from 'vue';
import { useStore } from 'vuex';

let store = useStore();

let a = ref(5);
let b = ref(6);

const addA = () => {
	a.value++;
};

const addB = () => {
	b.value++;
};

const addHander = () => {
	store.commit('changeAddOneCount');
};

const ChangeHander = () => {
	store.commit('changeTenCount', 10);
};
</script>
<!-- 
<script lang="ts">
export default {
	data() {
		return {
			b: 0
		};
	},
	methods: {
		addB() {
			this.b++;
		}
	},
	template: 'SearchYou2'
};
</script> -->

<style scoped lang="scss">
.test {
	width: 50;
	height: 80;
	color: #555;
}
</style>
