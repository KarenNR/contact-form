<script setup>
    import { ref } from 'vue';

    let contactForm = ref();

    let snackbar = ref(false);

    // v-models for form
    let firstName = ref("");
    let lastName = ref("");
    let email = ref("");
    let queryType = ref("");
    let message = ref("");
    let consent = ref(false);

    // Rules for form
    const rules = ref({
        required: v => !!v || 'This field is required',
        validMail: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Please enter a valid email address',
        requiredQuery: v => !!v || 'Please select a query type',
        consent: v => !!v || 'To submit this form, please consent to being contacted'
    });

    // Handle submit form
    async function submitContactForm() {
        let isValid = await contactForm.value.validate();
        if (isValid.valid) {
            // Extra: Log values
            console.log("First Name: " + firstName.value);
            console.log("Last Name: " + lastName.value);
            console.log("Email Address: " + email.value);
            console.log("Query Type: " + (queryType.value === 'general-enquiry' ? 'GeneralEnquiry' : 'Support Request'));
            console.log("Message: " + message.value);
            console.log("Consent: " + consent.value);
            // Show success message
            snackbar.value = true;
        }
    }
</script>

<template>
    <v-container class="py-0">
        <!-- Form -->
        <v-row justify="center">
            <v-col cols="12" md="7">
                <v-card elevation="0" class="px-8 py-7 rounded-lg">
                    <v-form @submit.prevent ref="contactForm">
                        <h1 class="text-dark mb-4">Contact Us</h1>
                        <v-row>
                            <!-- First Name Field -->
                            <v-col cols="12" md="6">
                                <p class="text-dark mb-2">First Name *</p>
                                <v-text-field variant="outlined" 
                                              color="primary"
                                              hide-details="auto"
                                              density="compact"
                                              :rules="[rules.required]"
                                              v-model="firstName"></v-text-field>
                            </v-col>
                            <!-- Last Name Field -->
                            <v-col cols="12" md="6">
                                <p class="text-dark mb-2">Last Name *</p>
                                <v-text-field variant="outlined" 
                                              color="primary"
                                              hide-details="auto"
                                              density="compact"
                                              :rules="[rules.required]"
                                              v-model="lastName"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <!-- Email Address Field -->
                            <v-col cols="12">
                                <p class="text-dark mb-2">Email Address *</p>
                                <v-text-field variant="outlined" 
                                              color="primary"
                                              hide-details="auto"
                                              density="compact"
                                              :rules="[rules.required, rules.validMail]"
                                              v-model="email"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-radio-group class="mt-4" :rules="[rules.requiredQuery]" v-model="queryType">
                            <v-row>
                                <!-- Query Type Field -->
                                <v-col cols="12" class="mb-0 pb-0">
                                    <p class="text-dark">Query Type *</p>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-sheet class="query-type" rounded border>
                                        <v-radio label="General Enquiry" 
                                                 value="general-enquiry"
                                                 color="primary"
                                                 :class="{ 'bg-background': queryType === 'general-enquiry' }"></v-radio>
                                    </v-sheet>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-sheet class="query-type" rounded border>
                                        <v-radio label="Support Request" 
                                                 value="support-request"
                                                 color="primary"
                                                 :class="{ 'bg-background': queryType === 'support-request' }"></v-radio>
                                    </v-sheet>
                                </v-col>
                            </v-row>
                        </v-radio-group>
                        <v-row>
                            <!-- Message Field -->
                            <v-col cols="12">
                                <p class="text-dark mb-2">Message *</p>
                                <v-textarea variant="outlined" 
                                            color="primary"
                                            hide-details="auto"
                                            rows="2"
                                            density="compact"
                                            :rules="[rules.required]"
                                            v-model="message"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <!-- Consent Field -->
                            <v-col cols="12">
                                <v-checkbox label="I consent to being contacted by the team *"
                                            hide-details="auto"
                                            color="primary"
                                            density="compact"
                                            :rules="[rules.consent]"
                                            v-model="consent"></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn type="submit"
                                       color="primary" 
                                       block 
                                       class="py-6 submit-btn" 
                                       @click="submitContactForm()">Submit</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>

        <!-- Success message -->
        <v-snackbar v-model="snackbar"
                    timeout="5000"
                    location="top"
                    multi-line
                    color="dark"
                    rounded="lg">
            <v-card variant="text" class="px-3 py-2">
                <p class="mb-2 d-flex align-center">
                    <img src="/assets/images/icon-success-check.svg" alt="Success" height="18" class="me-2">
                    <span class="font-weight-bold">Message Sent!</span>
                </p>
                <p class="font-weight-light">Thanks for completing the form. We'll be in touch soon!</p>
            </v-card>
        </v-snackbar>
    </v-container>
</template>

<style scoped>
    @font-face {
        font-family: 'Karla';
        src: url('@/assets/fonts/Karla-VariableFont_wght.ttf');
    }

    .v-container, .v-snackbar {
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