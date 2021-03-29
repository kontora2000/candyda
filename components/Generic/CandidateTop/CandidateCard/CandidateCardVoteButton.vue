<template>
   <div class="votes-counter-small-wrapper">
      <div class="votes-counter-small"
           :class="{ 'voted': isVoted }"
           @click.prevent="$emit('vote')"

      >
         <span class="icon icon-votes-counter">
            <use xlink:href="/sprite.svg#icon-check" />
         </span>
         <span class="votes-counter-small-digits">{{ votes }}</span>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'

export default defineComponent({
    name:'VoteButton',
    props: {
        votes: {
            type: Number as PropType<number>,
            required: true,
        },
        isLoading: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        isVoted: {
            type: Boolean as PropType<boolean>,
            default: false,
        }
    },
})
</script>


<style scoped>
.votes-counter-small-wrapper {
   position: relative;
   width: 100%;
}

.votes-counter-small {
   background-color: var(--Azure100);
   display: inline-block;
   border-radius: 300px;
   float: right;
   font-size: 2rem;
   line-height: 2rem;
   padding: .2rem .8rem .4rem .6rem;
   position: absolute;
   top: -1.2rem;
   right: .8rem;
   z-index: 3;
}
.first.candidate-card-cont .votes-counter-small,
.second.candidate-card-cont .votes-counter-small {
   font-size: 3.2rem;
   line-height: 2.4rem;
   padding: .8rem 1.2rem 1rem;
   top: -2.2rem;
}

.votes-counter-small-digits {
   color: var(--White100);
}

.icon-votes-counter {
   display: inline-block;
   width: 1.6rem;
   height: 1.3rem;
}

.icon-votes-counter>use {
   display: block;
   height: inherit;
   width: inherit;
}

.icon-votes-counter>use path {
   fill: var(--White56);
}



@media (max-width: 360px) {
   .votes-counter-small {
         font-size: 1.4rem;
   }
}
</style>
