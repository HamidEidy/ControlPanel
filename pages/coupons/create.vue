<template>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 class="fw-bold">ایجاد کد تخفیف</h4>
    </div>

    <div v-if="errors.length > 0" class="alert alert-danger col-md-3 m-auto mb-4" role="alert">
        <ul class="mb-0">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
    </div>

    <FormKit type="form" @submit="create" :incomplete-message="false" :actions="false">
        <div class="row gy-4">
            <div class="col-md-3">
                <FormKit type="text" name="code" id="code" label="کد تخفیف" label-class="form-label"
                    input-class="form-control" messages-class="form-text text-danger" validation="required"
                    :validation-messages="{ required: 'فیلد کد تخفیف الزامیست' }" />
            </div>
            <div class="col-md-3">
                <FormKit type="text" name="percentage" id="percentage" label="درصد" label-class="form-label"
                    input-class="form-control" messages-class="form-text text-danger" validation="required|number"
                    :validation-messages="{ required: 'فیلد درصد الزامیست', number: 'مقدار درصد باید عددی باشد' }" />
            </div>
            <ClientOnly>
                <div class="col-md-3">
                    <label class="form-label">تاریخ انقضا </label>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-clock"></i></span>
                        <input type="text" class="form-control" id="date-expire">
                    </div>
                    <date-picker v-model="dateExpire" display-format="HH:mm jYYYY-jMM-jDD" format="YYYY-MM-DD HH:mm:ss"
                        type="datetime" custom-input="#date-expire" />
                </div>
            </ClientOnly>

            <FormKit type="submit" input-class="btn btn-outline-dark mt-3">
                ایجاد تخفیف
                <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
            </FormKit>
        </div>
    </FormKit>

</template>

<script setup>
import { useToast } from "vue-toastification";

definePageMeta({
    middleware: 'auth'
})

const dateExpire = ref(null);

const loading = ref(false);
const errors = ref([]);
const toast = useToast();


async function create(formData) {
    if (!dateExpire.value) {
        toast.error("فیلد تاریخ انقضا الزامیست");
        return;
    }

    try {
        loading.value = true;
        errors.value = [];

        await $fetch('/api/global', {
            method: 'POST',
            body: { ...formData, expired_at: dateExpire.value },
            query: { url: '/coupons' },
        });

        toast.success("ایجاد تخفیف باموفقیت انجام شد");
        return navigateTo('/coupons')
    } catch (error) {
        errors.value = Object.values(error.data.data.message).flat();
    } finally {
        loading.value = false;
    }
}
</script>