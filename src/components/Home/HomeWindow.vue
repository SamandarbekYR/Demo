<template>
    <div class="fixed left-2 top-2">
        <Header></Header>
        <Saidbar></Saidbar>
    </div>
    <div class="right-10">
        <div class="p-4 sm:ml-64">
            <div class="p-4 mt-14">
                <main>
                  <SendMessage></SendMessage>
                </main>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Header from './Header.vue'
import Saidbar from './Saidbar.vue'
import SendMessage from './SendMessage.vue';

export default {
    components:
    {
        Header,
        Saidbar,
        SendMessage,
    }
}
</script>
<style ></style>