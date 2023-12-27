<template>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 class="fw-bold">کاربر : {{ user.name }}</h4>
    </div>

    <div>
        <div class="row gy-4">
            <div class="col-md-3">
                <label class="form-label">نام</label>
                <input type="text" class="form-control" disabled :placeholder="user.name" />
            </div>
            <div class="col-md-3">
                <label class="form-label">ایمیل</label>
                <input type="text" class="form-control" disabled :placeholder="user.email" />
            </div>
            <div class="col-md-3">
                <label class="form-label">شماره تماس</label>
                <input type="text" class="form-control" disabled :placeholder="user.cellphone" />
            </div>
        </div>
    </div>
    <button @click="deleteUser" :disabled="loading" class="btn btn-dark mt-5">
        حذف
        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
    </button>
    <!-- <UserDelete :userId="user.id" /> -->
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast()
const route = useRoute();
const loading = ref(false);
//get user data
const { data: user} = await useFetch('/api/global',{
    query: {url: `/users/${route.params.id}`},
    Headers: useRequestHeaders(['cookie'])
})


//delete user
async function deleteUser(user){
try {
    loading.value = true;
    await $fetch('/api/global', {
        method : 'DELETE',
        query: {url: `/users/${route.params.id}`},
        // Headers : useRequestHeaders(['cookie'])
    })
toast.warning("حذف کاربر با موفقت انجام شد")
return navigateTo('/users')
} catch (error) {
    
}finally{
    loading.value = false
}
}
</script>