<template>
    <div class="page-content-superwrapper">
        <div class="page-content-wrapper grid-main">
            <div class="error-code-wrapper">
                <span class="error-code">404</span>
            </div>
            <div class="page-wrapper">
            <h1 class="page-header">Страница не найдена</h1>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import TheFooter from '@/components/Generic/Footer/TheFooter'
export default defineComponent({
    name:'error',
    components: {
        TheFooter,
    },
})
</script>

<style scoped>
.error-code-wrapper {
    grid-column: 1/-1;
}
.error-code {
    font-size: 56rem;
    position: absolute;
    line-height: 30rem;
    font-weight: 500;
    margin-left: 8%;
    mix-blend-mode: overlay;
}
</style>
