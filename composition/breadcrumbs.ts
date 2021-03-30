import { ref,  } from '@nuxtjs/composition-api'
import { Breadcrumb, } from "@/modules/types"

const breadcrumbs  = ref<Breadcrumb[]>([] as Breadcrumb[])

export const useBreadcrumbs = () => {
   
  const setBreadcrumbs = (b: Breadcrumb[]) => {
    breadcrumbs.value = b
  }

  const getBreadcrumbs = () => {
    return breadcrumbs.value
  }

  return {
    breadcrumbs,
    setBreadcrumbs,
    getBreadcrumbs,
  }
}