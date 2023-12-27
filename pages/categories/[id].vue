<template>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 class="fw-bold">دسته بندی : {{ category.name }}</h4>
    </div>

    <div>
        <div class="row gy-4">
            <div class="col-md-3">
                <label class="form-label">نام</label>
                <input type="text" class="form-control" disabled :placeholder="category.name" />
            </div>
            <div class="col-md-3">
                <label class="form-label">توضیحات</label>
                <input type="text" class="form-control" disabled :placeholder="category.description" />
            </div>
        </div>
    </div>
<!-- 
    <CategoryDelete :categoryId="category.id" /> 
-->
<button @click="deleteCategory" class="btn btn-dark mt-5">
    حذف
    <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
</button>
</template>

<script setup>
import { useToast } from "vue-toastification";
definePageMeta({
    middleware: 'auth'
})
const loading = ref(false);
const toast = useToast();
const route = useRoute();

const { data: category } = await useFetch('/api/global', {
    query: { url: `/categories/${route.params.id}` },
    headers: useRequestHeaders(['cookie'])
})
async function deleteCategory() {
    try {
        loading.value = true;

        await $fetch('/api/global', {
            method: 'DELETE',
            query: { url: `/categories/${route.params.id}` },
        })

        toast.warning("حذف دسته بندی باموفقیت انجام شد");
        return navigateTo('/categories')
    } catch (error) {
        console.log(error.data);
    } finally {
        loading.value = false;
    }
}
</script>