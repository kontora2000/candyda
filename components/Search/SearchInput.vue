<template>
  <form @submit.prevent="handleSearch" class="search-form" v-if="!$device.isMobile">
    <svg class="icon-search-svg icon-svg">
      <use xlink:href="/sprite.svg#icon-search" />
    </svg>
    <input 
      @focus="onFocus"
      @blur="onBlur"
      class="search-input" 
      :style="{ 'padding-left': searchInputPadding, width: searchInputWidth}"
      type="text" 
      :placeholder="searchInputPlaceholder"
      v-model="searchString">
      <transition name="fade-fast">
        <div class="search-close" 
          v-if="isCloseButtonVisible" 
          @click="onCloseButtonClick">
          <svg class="icon-close-svg icon-svg">
            <use xlink:href="/sprite.svg#icon-close" />
          </svg>
        </div>
      </transition>
      <div class="search-blocks-wrapper">
        <span 
        class="search-block"
        v-for="(block, index) in searchBlocks"
        :key="generateKey(index)"> 
          <span class="search-block-delete" @click.prevent="deleteBlock(index)">  
            <svg class="icon-cross-small-svg icon-svg">
                <use xlink:href="/sprite.svg#icon-cross-small" />
            </svg>
          </span>
          <span class="search-block-text">{{ block }}</span>
        </span>
      </div>
  </form>
  <!-- Мобильный поиск --> 
  <form v-else @submit.prevent="handleSearch">
    <input name="search"
       class="search-input" 
       type="text"  
       v-model="searchString"
       :placeholder="searchInputPlaceholder"
      :style="{ 'padding-left': searchInputPadding}" />
    <div class="search-blocks-wrapper">
          <span 
            class="search-block"
            v-for="(block, index) in searchBlocks"
            :key="generateKey(index)"> 
              <span class="search-block-delete" @click.prevent="deleteBlock(index)">  
                <svg class="icon-cross-small-svg icon-svg">
                    <use xlink:href="/sprite.svg#icon-cross-small" />
                </svg>
              </span>
              <span class="search-block-text">{{ block }}</span>
        </span>
      </div>
    <span class="search-input-icon">
      <svg class="icon-search-svg icon-svg">
        <use xlink:href="/sprite.svg#icon-search" />
      </svg>
    </span>
  </form>
</template>

<script>
import { defineComponent,  ref, onMounted, watch,  } from '@nuxtjs/composition-api'
import { useSearch, } from '@/composition/search'
import { useHelpers, } from '@/composition/helpers'

export default defineComponent({
    name:'SearchInput',
    setup (_, { emit, }) {
        const { searchBlocks, 
            searchString, 
            isSearchOpen, 
            parseSearchString, 
            searchInputPlaceholder, 
            searchInputPadding,
            resetPlaceholder,  
            searchRequest,     
            searchResults,
        } = useSearch()
        const { generateKey, } = useHelpers() 
        const isCloseButtonVisible = ref(false)
        const basePadding = '6rem'
        const searchInputWidth = ref('100%')
        let computedWidth = '100%'
        onMounted(() => {
            computedWidth = document.querySelector('.search-input').offsetWidth + 'px'
            searchInputWidth.value = computedWidth
        })
        const onFocus = () => {
            isSearchOpen.value = true
            searchInputWidth.value = '94%'
            emit('search-focus')
            searchInputPlaceholder.value = ''
            window.setTimeout(() => {             
                isCloseButtonVisible.value = true
            }, 150) 
            document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden'
            document.body.style.position = document.body.style.position === 'fixed' ? '' : 'fixed'
            const htmlElem = document.querySelector('html')
            htmlElem.style.overflow = htmlElem.style.overflow === 'hidden' ?  '' : 'hidden'
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
            searchInputPadding.value = '6rem'
            searchInputWidth.value = computedWidth
            resetPlaceholder()
            window.setTimeout(() => { isSearchOpen.value = false;  }, 150) 
            emit('search-close')
            document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden'
            document.body.style.position = document.body.style.position === 'fixed' ? '' : 'fixed'
            const htmlElem = document.querySelector('html')
            htmlElem.style.overflow = htmlElem.style.overflow === 'hidden' ?  '' : 'hidden'
        }
        const handleSearch = () => {
            if (searchString.value.trim !== '') {
                parseSearchString()
                window.setTimeout(() => {  
                    searchInputPadding.value = `calc(${basePadding} + ${document.querySelector('.search-blocks-wrapper').offsetWidth}px + 1rem)`
                }, 10)
            } 
            searchString.value = ''
        }
        const deleteBlock = (ind) => {
            searchBlocks.value.splice(ind, 1)
            window.setTimeout(() => {
                searchInputPadding.value = (searchBlocks.value.length > 0) ? 
                    `calc(${basePadding} + ${document.querySelector('.search-blocks-wrapper').offsetWidth}px + 1rem)` :
                    '6rem'
            }, 10)
        }
        watch(searchBlocks, ()=> {
            if (!isSearchOpen.value) {
                onFocus()
                window.setTimeout(() => {  
                    searchInputPadding.value = `calc(${basePadding} + ${document.querySelector('.search-blocks-wrapper').offsetWidth}px + 1rem)`
                }, 10)
                searchRequest()
                return
            }
            if (searchBlocks.value.length > 0) { searchRequest() } 
            else { searchResults.value = {} }
        })
        return {
            searchBlocks,
            searchString,
            searchInputPlaceholder,
            searchInputPadding,
            searchInputWidth,
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
<style scoped>
.search-form {
  grid-column: 2/32;
  position: relative;
}

.search-input {
  width: calc(100vw - 8rem);
  padding-left: 6rem;
  transition: all .15s ease-in-out;
}

.search-close {
  height: 6.4rem;
  width: 6.4rem;
  max-width: 6.4rem;
  max-height: 6.4rem;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 100px;
  background: var(--Azure16);
  cursor: pointer;
  transition: all .15s ease-in-out;
}

.search-close:hover {
  background: var(--Azure84);
  transform: translateY(-.8rem);
}

.search-close svg {
  fill: var(--Black100);
  position: relative;
  left: 16px;
  top: 16px;
  max-width: 3.2rem;
  max-height: 3.2rem;
  transition: fill .15s ease-in-out;
}
.search-close:hover svg {
  fill: var(--White100);
}

.search-blocks-wrapper {
  position: absolute;
  top: 0.5rem;
  margin-left: 6rem;
  line-height: 2.3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.search-block {
  background: var(--Azure100);
  cursor: default;
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
  height: 2rem;
  width: 2rem;
}

.icon-cross-small-svg {
  display: inline-block;
  fill: var(--White56);
  height: inherit;
  width: inherit;
  transition: fill .15s ease-in-out;
}
.search-block-delete:hover .icon-cross-small-svg {
  fill: var(--White100);
}

.icon-search-svg {
  width: 3.2rem;
  height: 2.6rem;
  position: absolute;
  z-index: 102;
  left: 2rem;
  top: 1.9rem;
}

.icon-search-svg use {
  fill: var(--Black32);
}
</style>