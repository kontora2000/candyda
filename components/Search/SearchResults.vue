<template>
 <div class="search-results-wrapper">
    <div class="search-results-candidates" v-if="results.candidates">
        <div class="search-result-header">{{ candidatesCount }}</div>
        <div class="sarch-result-grid">
            <CandidateCard v-for="candidate in results.candidates"
            :key="candiate.id"
            :candidate="candidate"></CandidateCard>
        </div>
    </div>
    <div class="search-results-tags" v-if="results.tags">
        <div class="search-result-header">{{ tagsCount }}</div>
    </div> 
    <div class="search-results-posts" v-if="results.posts">
      <div class="search-result-header">{{  postsCount }}</div>
    </div>
  </div> 
</template>