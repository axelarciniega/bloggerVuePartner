<template>
profile page here
<div v-if="activeProfile" class="container">
    <section class="row">
        <div class="col-7">
            Profile page here
        </div>
    </section>
</div>

</template>

<script>
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService.js';
import Pop from '../utils/Pop.js';
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';


export default {
setup() {
    onMounted(() => {
        getProfileById()
    })
    const route = useRoute()
    async function getProfileById(){
        try {
            await profilesService.getProfileById(route.params.profileId)
        } catch (error) {
            Pop.error(error)
        }
    }
  return {
    blogs: computed(() => AppState.blogs),
    profile: computed(() => AppState.activeProfile),
    account: computed(() => AppState.account)
  };
},
};
</script>


<style>
</style>