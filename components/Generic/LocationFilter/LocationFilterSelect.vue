<template>
 <div class="filter-select" 
  :tabindex="tabindex" 
  @blur="open = false"
  >
    <div class="selected"
      v-if="selected" 
      :class="{ open: open }" 
      @click="open = !open">
        {{ selected.name }}
    </div>
    <div class="select-icon">
      <span v-if="selected.slug" name="icon-close" @click="$emit('clear')" >&times;</span>
      <svg v-else width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L9.5 11.5L18 1.5" stroke="black" stroke-opacity="0.32" stroke-width="1.8"/>
      </svg>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div class="select-item"
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        ">
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    name:'LocationFilterSelect',
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: Object,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
        current: {
            type: Object,
            required: false,
        },
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    watch: {
        current() {
            this.selected = this.current
        },
    },
})

</script>

<style scoped>
.filter-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  min-height: 64px;
  max-width: 20.24rem;
  margin-top:2rem;
}

.filter-select .selected {
  border-radius: 100px;
  min-height: 6.4rem;
  color: var(--Black32);
  padding-left: 1.9rem;
  padding-top:2rem;
  cursor: pointer;
  user-select: none;
  background-color:var(--Azure32);
  font-size: 2rem;
  line-height: 2rem;
}

.filter-select .selected.open {
  border-radius: 25px 25px 0px 0px;
  color: var(--Black100);
}

.filter-select .select-icon {
  position: absolute;
  right: 1em;
  max-width: 2rem;
  max-height: 2rem;
  top: calc(50% - 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-select .select-icon .span,svg {
  max-width: 2rem;
  max-height: 2rem;
  color:var(--Black32);
}

.filter-select .items {
  color:var(--Black32);
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  background-color:var(--Azure32);
  backdrop-filter: blur(32px);
}

.filter-select .items .select-item {
  color: var(--Black32);
  padding: 1rem;
  padding-left: 1em;
  z-index: 1;  
  cursor: pointer;
  user-select: none;
}

.filter-select .items .select-item:hover {
  background-color: var(--Azure84);
}

.selectHide {
  display: none;
}
</style>