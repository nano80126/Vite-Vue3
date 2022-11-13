<template>
	<div>
		<v-row class="d-flex align-center">
			<v-col cols="4" class="bg-red">
				{{ obj.page }}
			</v-col>

			<v-col cols="4" class="text-right bg-info">
				<!-- {{ store.state.count }} -->
				{{ obj.page }}
			</v-col>

			<v-col cols="4" class="text-center">
				<v-btn text class="mx-3 rounded-xl" color="success" @click="obj.page++">
					<v-icon class="color-white" icon="mdi-account" />
					{{ count }}
				</v-btn>

				<v-text-field> {{ pagination.current }} </v-text-field>
				<v-text-field> {{ title }} </v-text-field>
			</v-col>
		</v-row>
	</div>
</template>

<!-- <script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

let store = useStore();

const addHander = () => {
	store.commit('changeAddOneCount');
};

const ChangeHander = () => {
	store.commit('changeTenCount', 10);
};
</script> -->
<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed, watch } from 'vue';

export default defineComponent({
	props: {
		title: {
			type: String,
			required: true
		},
		title2: Boolean
	},
	setup(props, { emit }) {
		const count = ref(1);

		console.log(count.value);
		console.log(props);

		const obj = reactive({
			page: 1,
			pagesize: 10
		});

		onMounted(() => {
			getList();
		});

		const pagination = computed(() => ({
			current: obj.page + obj.pagesize
		}));

		const getList = () => {
			console.log(123);
		};

		watch(
			() => obj,
			(newValue) => {
				console.log(newValue);
			}
		);

		return {
			count,
			obj,
			getList,
			// mountedFunc
			pagination
		};
	}
});
</script>

<style scoped lang="scss">
.test {
	width: 50;
	height: 80;
	color: #555;
}
</style>
