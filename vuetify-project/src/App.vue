<template>
	<v-app>
		<v-app-bar app :height="appbarHeight" flat color="blue-grey-darken-4">
			<v-spacer />

			<v-btn min-width="24" height="36" text class="" small>
				<v-icon x-small icon="mdi-vuetify" />
			</v-btn>

			<v-btn min-width="24" width="36">
				<v-icon x-small icon="mdi-window-minimize" />
			</v-btn>
			<v-btn min-width="24" width="36">
				<v-icon x-small icon="mdi-window-maximize" />
			</v-btn>
			<v-btn min-width="24" width="36" class="mr-0">
				<v-icon x-small icon="mdi-window-close" />
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer app theme="dark" permanent rail :rail-width="navigationWidth">
			<v-list nav :lines="false" class="px-0">
				<v-tooltip v-for="(item, index) in routes" :key="`item${index}`" open-delay="300">
					<template #activator="{ props }">
						<v-list-item
							v-ripple="false"
							class="mx-1"
							color="purple"
							variant="plain"
							:prepend-icon="item.meta?.icon"
							exact
							:to="item.path"
							v-bind="props"
						/>
					</template>
					<span>{{ item.meta?.title }}</span>
				</v-tooltip>
			</v-list>

			<template #append>
				<v-list nav :lines="false" class="px-0">
					<v-tooltip open-delay="300">
						<template #activator="{ props }">
							<v-list-item
								v-ripple="false"
								class="mx-1 nav-item text-center"
								variant="plain"
								prepend-icon="mdi-music"
								v-bind="props"
								@click="showSheet"
							></v-list-item>
						</template>
						<span> {{ 'Player' }}</span>
					</v-tooltip>
				</v-list>
			</template>
		</v-navigation-drawer>

		<v-main>
			<!-- <HelloWorld /> -->
			<router-view :title="'123'" />
		</v-main>

		<v-footer app inset :height="footerHeight" color="grey-darken-4">
			<v-col v-if="isDev" class="py-0 text-right" style="opacity: 0.8">
				<span class="mr-2">1</span>
				<span class="mr-2">2</span>
			</v-col>
			<v-col v-else class="py-0 text-right" style="opacity: 0.8"> &copy; {{ new Date().getFullYear() }} <strong>EleCrawler</strong> </v-col>
		</v-footer>
	</v-app>
</template>

<script setup lang="ts">
import router, { routes } from '@/router';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
// import HelloWorld from '@/components/HelloWorld.vue';

const appbarHeight = 32;
const navigationWidth = 48;
const footerHeight = 24;

const route = useRoute();

const showSheet = () => {
	//
};

const isDev = computed(() => {
	return process.env.NODE_ENV === 'development';
});

const mountedFunc = onMounted(() => {
	console.log(route);
});
</script>

<style scoped lang="scss">
.nav-item {
	cursor: pointer;
}
</style>

<!-- 
<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
	setup(props) {
		onMounted(() => {
			console.log(this.$route);
		});
	}
}); -->
<!-- </script> -->
