<script setup>
    import ContactForm from './components/ContactForm.vue';
    import AttributionBlock from './components/AttributionBlock.vue';
</script>

<template>
    <v-app class="bg-background">
        <v-container fluid class="h-100">
            <v-row class="h-100" align="center">
                <v-col cols="12">
                    <ContactForm />
                    <AttributionBlock />
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<style scoped>

</style>
