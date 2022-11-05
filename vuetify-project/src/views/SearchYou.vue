<template>
	<div>
		<v-row class="d-flex align-center">
			<v-col cols="4" class="bg-red">1</v-col>
			<v-col cols="4" class="text-right bg-info">
				{{ store.state.count }}
			</v-col>

			<v-col cols="4" class="text-center">
				<v-btn text class="mx-3 rounded-xl" color="success" @click="addHander">
					<v-icon class="color-white" icon="mdi-account" />
					123
				</v-btn>

				<v-btn @click="ChangeHander">+10</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

let store = useStore();

const addHander = () => {
	store.commit('changeAddOneCount');
};

const ChangeHander = () => {
	store.commit('changeTenCount', 10);
};
</script>

<style scoped lang="scss">
.test {
	width: 50;
	height: 80;
	color: #555;
}
</style>
