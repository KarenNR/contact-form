<script setup>

</script>

<template>
    <v-container class="py-0">
        <v-row justify="center">
            <v-col cols="12" md="7">
                <v-card elevation="0" class="px-8 py-7 rounded-lg">
                    <v-form>
                        <h1 class="text-dark mb-4">Contact Us</h1>
                        <v-row>
                            <v-col cols="12" md="6">
                                <p class="text-dark mb-2">First Name *</p>
                                <v-text-field variant="outlined" 
                                              color="primary"
                                              hide-details="auto"
                                              density="compact"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <p class="text-dark mb-2">Last Name *</p>
                                <v-text-field variant="outlined" 
                                              color="primary"
                                              hide-details="auto"
                                              density="compact"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <p class="text-dark mb-2">Email Address *</p>
                                <v-text-field variant="outlined" 
                                              color="primary"
                                              hide-details="auto"
                                              density="compact"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-radio-group class="mt-4">
                            <v-row>
                                <v-col cols="12" class="mb-0 pb-0">
                                    <p class="text-dark">Query Type *</p>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-sheet class="query-type" rounded border>
                                        <v-radio label="General Enquiry" 
                                                 value="general-enquiry"
                                                 color="primary"></v-radio>
                                    </v-sheet>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-sheet class="query-type" rounded border>
                                        <v-radio label="Support Request" 
                                                 value="support-request"
                                                 color="primary"></v-radio>
                                    </v-sheet>
                                </v-col>
                            </v-row>
                        </v-radio-group>
                        <v-row>
                            <v-col cols="12">
                                <p class="text-dark mb-2">Message *</p>
                                <v-textarea variant="outlined" 
                                            color="primary"
                                            hide-details="auto"
                                            rows="2"
                                            density="compact"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-checkbox label="I consent to being contacted by the team *"
                                            hide-details="auto"
                                            color="primary"
                                            density="compact"></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn color="primary" block class="py-6 submit-btn">Submit</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    @font-face {
        font-family: 'Karla';
        src: url('@/assets/fonts/Karla-VariableFont_wght.ttf');
    }

    .v-container {
        font-family: 'Karla', sans-serif !important;
    }

    .query-type {
        border: 1px solid #ABABAB;
    }

    .query-type:hover {
        border: 1px solid #3E3E3E;
    }

    .submit-btn {
        text-transform: unset !important;
    }
</style>