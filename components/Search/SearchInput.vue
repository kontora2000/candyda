<template>
  <form @submit.prevent="handleSearch" class="search-form">
    <input 
      @focus="onFocus"
      @blur="onBlur"
      class="search-input" 
      type="text" 
      :placeholder="searchInputPlaceholder"
      v-model="searchString"
      @>
      <transition name="fade-fast">
        <div class="search-close" v-if="isCloseButtonVisible" @click="onCloseButtonClick">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M15.5 14.4618L1.06673 0L0 1.06886L14.4333 15.5304L0.0608999 29.9311L1.12763 31L15.5 16.5992L29.8724 31L30.9391 29.9311L16.5667 15.5304L31 1.06886L29.9333 0L15.5 14.4618Z" />
          </svg>
        </div>
      </transition>
      <div class="search-blocks-wrapper">
          <span 
          class="search-block"
          v-for="(block, index) in searchBlocks"
          :key="generateKey(index)"> 
            <span class="search-block-delete" @click.prevent="deleteBlock(index)">  
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M15.5 14.4618L1.06673 0L0 1.06886L14.4333 15.5304L0.0608999 29.9311L1.12763 31L15.5 16.5992L29.8724 31L30.9391 29.9311L16.5667 15.5304L31 1.06886L29.9333 0L15.5 14.4618Z" />
              </svg>
            </span>
            <span class="search-block-text">
              {{ block }} 
            </span>     
        </span>
      </div>
  </form>
</template>

<script>
import { defineComponent,  ref, } from '@nuxtjs/composition-api'
import { useSearch, } from '~/composition/search'
import { useHelpers, } from '@/composition/helpers'

export default defineComponent({
    name:'SearchInput',
    setup (_, { emit, }) {
        const { searchBlocks, searchString, isSearchOpen, parseSearchString, searchInputPlaceholder, resetPlaceholder,  } = useSearch()
        const { generateKey, } = useHelpers() 

        const isCloseButtonVisible = ref(false)

        const onFocus = () => {
            isSearchOpen.value = true
            emit('searchFocus')
            searchInputPlaceholder.value = ''
            window.setTimeout(() => {             
                isCloseButtonVisible.value = true
            }, 150) 
        }
        const onBlur = () => {
            // // if (searchBlocks.value.length == 0 && searchString.value === '') {
            // searchString.value = ''
            // searchBlocks.value = []
            // isCloseButtonVisible.value = false
            // emit('searchClose')
            // window.setTimeout(() => { isSearchOpen.value = false;  }, 150) 
            // // }
        }
        const onCloseButtonClick = () => {  
            searchBlocks.value = []
            searchString.value = ''
            isCloseButtonVisible.value = false
            resetPlaceholder()
            window.setTimeout(() => { isSearchOpen.value = false;  }, 150) 
            emit('searchClose')
        }

        const handleSearch = () => {
            parseSearchString()
            searchString.value = ''
        }

        const deleteBlock = (ind) => {
            searchBlocks.value.splice(ind, 1)
        }

        return {
            searchBlocks,
            searchString,
            searchInputPlaceholder,
            isCloseButtonVisible,
            onCloseButtonClick,
            onBlur,
            onFocus,
            handleSearch,
            generateKey,
            deleteBlock,
        }
    },
})
</script>
<style>
  .search-form {
    position: relative;
  }

  .search-input {
    width: 100%;
  }

  .search-close {
    top:-44px;
    left: 100%;
    height: 64px;
    width: 64px;
    max-width: 64px;
    max-height: 64px;
    position: absolute;
    left:calc(100% + 1.8rem);
    top: 0px;
    border-radius: 100px;
    background: linear-gradient(270.53deg, rgba(0, 68, 171, 0.08) 0%, rgba(0, 68, 171, 0.03) 100%);
    background: var(--Azure12);
    cursor: pointer;
  }

  .search-close:hover {
    background: var(--Azure84);
  }

  .search-close svg {
    position: relative;
    left: 16px;
    top: 16px;
    max-width: 64px;
    max-height: 64px;
  }

  .search-blocks-wrapper {
    position: absolute;
    top: 0.5rem;
    padding-left: 6rem;
    line-height: 2.3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

 

  .search-block {
    background: var(--Azure100);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 40px;
    box-sizing: border-box;
    padding: calc(2rem - .5rem) 1.6rem;
    margin-left: .9rem;
    color: var(--White100);
  }

  .search-block:first-of-type {
    margin-left: 0;
  } 

  .search-block-text {
    padding: 0;
    margin-left: 0.95rem;
  }

  .search-block-delete {
    cursor: pointer;
    padding: 0;
    height: 16px;
    width: 16px;
  }
  
  .search-block-delete svg{
    height: 100%;
    width: 100%;
    fill: var(--White100);
  }

  .search-block-delete:hover svg{
    fill: var(--Black100);
  }
</style>