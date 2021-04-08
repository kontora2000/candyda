import { ref,  } from '@nuxtjs/composition-api'
import { Breadcrumb, Candidate, Post, } from '@/modules/types'
import { mainPageURL, topURL, postsURL, } from '@/modules/links'

const breadcrumbs  = ref<Breadcrumb[]>([] as Breadcrumb[])
const isBreadcrumbsVisible = ref<boolean>(false)

export const useBreadcrumbs = () => {
   
  const setBreadcrumbs = (b: Breadcrumb[]) => {
    breadcrumbs.value = b
  }

  const getBreadcrumbs = () => {
    return breadcrumbs.value
  }

  const setCandidateBreadcrumbs = (candidate:Candidate) => {
    if (!candidate.region) {
      breadcrumbs.value = [
        topURL
      ]
  }
  else {
      breadcrumbs.value = [
          mainPageURL,
          {
              url: `/region/${candidate.region.slug}`,
              title: `${candidate.region.name} округ`,
          }
      ]
      if (candidate.district) {
          breadcrumbs.value.push({
              url: `/region/${candidate.region.slug}/${candidate.district.slug}`,
              title: `${candidate.district.name}`,
          })
          breadcrumbs.value.push({
              url: `/region/${candidate.region.slug}/${candidate.district.slug}/candidates`,
              title: 'Кандидаты',
          })
      }  
    }
  }
   
  const setPostBreadCrumbs = (post: Post) => {
    if (!post.region) {
      breadcrumbs.value = [ postsURL ]
    }
    else {
      breadcrumbs.value = [
        {
          url: '/',
          title: 'Краснодарский край'
        },
        {
          url: `/region/${post.region.slug}`,
          title: `${post.region.name} округ`,
        }
      ]
      if (post.district) {
        breadcrumbs.value.push({
          url: `/region/${post.region.slug}/${post.district.slug}`,
          title: post.district.name.includes('г.') ? `${post.district.name}` : `${post.district.name} район`,
        })
      }
    }
  }
  
  const checkVisibility = (route) => {
    isBreadcrumbsVisible.value =  
      route.value.path.includes('region') || 
      route.value.path.includes('district') || 
      route.value.name === 'news-slug' || 
      route.value.name == 'candidate-slug'
  }

  return {
    breadcrumbs,
    isBreadcrumbsVisible,
    setBreadcrumbs,
    getBreadcrumbs,
    setCandidateBreadcrumbs,
    setPostBreadCrumbs,
    checkVisibility,
  }
}