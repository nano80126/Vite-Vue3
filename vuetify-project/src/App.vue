<template>
    <v-app>
        <v-app-bar app color="blue-grey darken-4">

            <v-spacer></v-spacer>

            <v-btn min-width="24" height="36" text class="" small>
                <v-icon x-small icon="mdi-vuetify" />
            </v-btn>

        </v-app-bar>

        <v-main>
            <HelloWorld />

            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
</script>

