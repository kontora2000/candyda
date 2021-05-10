<template>
	<div class="map-cont">
		<TheLabels />
		<div class="map-svg-wrapper">
			<svg class="map-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				width="1228.16px" height="648.03px" viewBox="0 0 1228.16 648.03" 
				style="overflow:visible;enable-background:new 0 0 1228.16 648.03;" xml:space="preserve">
				<!--<defs>
					<filter id="shadow-o-city" x="0" y="0" width="100%" height="100%">
						<feOffset result="offOut" in="SourceGraphic" dx="0" dy="2" />
						<feGaussianBlur result="blurOut" in="offOut" stdDeviation="6" />
						<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
						<feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
					</filter>
				</defs>-->
				<polygon id="o-adygeya" class="o-city" points="691.91,373.11 682.55,429.61 897.21,524.43 802.68,249.05 840.18,254.58 
					877.83,303.63 914.6,303.56 834.01,212.83 619.26,175.19 545.93,211.22 433.28,194.62 434.32,217.24 615.18,246.59 629.67,228.22 
					602.91,218.54 621.24,202.79 649.69,214.49 685.33,207.42 723.11,252.56 695.82,289.21 704.45,334.66 767.52,358.95 754.49,399.76 
					"/>
				<nuxt-link to="/region/o-kanevskoy" class="link-to-o">
					<g class="o-cont" id="o-kanevskoy">
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/pavlovskiy')">
							<polygon id="pavlovskiy" class="o-city" points="602.48,89.73 744.81,81.41 735.87,54.44 619.95,52.21"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/krylovskiy')">
							<polygon id="krylovskiy" class="o-city" points="619.95,52.21 735.87,54.44 707.46,27.78 632.27,25.74"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/shcherbinovskiy')">
							<polygon id="shcherbinovskiy" class="o-city" points="437.92,39.28 481.5,39.62 503.29,20.55 495.63,2.68 439.79,0 433.16,5.23 451.37,6.77"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/kushchevskiy')">
							<polygon id="kushevskiy" class="o-city" points="560,40.23 625.29,40.74 632.27,25.74 683.47,27.13 687.51,9.04 560.07,3.99"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/eyskiy')">
							<polygon id="eyskiy" class="o-city" points="393.88,37.88 434.34,69.73 461.73,39.46 437.92,39.28 446.55,18.41 409.34,17.39 
							406.6,11.79 331.05,21.1 336.22,37.24"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/starominskiy')">
							<polygon id="starominskiy" class="o-city" points="481.5,39.62 560,40.23 560,23.24 503.29,20.55"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-kanevskoy/leningradskiy')">
							<polygon id="leningradskiy" class="o-city" points="611.79,69.73 625.29,40.74 531.24,40.01 530.44,69.73"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/kanevskoy')" >
							<polygon id="kanevskoy" class="o-city" points="602.48,89.73 611.79,69.73 530.44,69.73 531.24,40.01 461.73,39.46 434.34,69.73 465.2,79.76"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/primorsko-ahtarskiy')">
							<polygon id="primorsko-ahtarskiy" class="o-city" points="465.2,79.76 434.34,69.73 427.85,76.89 381.03,62.69 375.56,73.13 
							323.9,76.19 302.72,108.07 447.47,104.95"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/bryuhoveckiy')">
							<polygon id="bryuhoveckiy" class="o-city" points="596.9,101.73 602.48,89.73 465.2,79.76 447.47,104.95"/>
						</g>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-tihoretskiy" class="link-to-o">
					<g class="o-cont" id="o-tihoretskiy" :class="{ 'city-cont-hover': isRegionOpened }">
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/novopokrovskiy')">
							<polygon id="novopokrovskiy" class="o-city" points="744.8,81.4 763.1,80.3 797,111.4 862.1,114.5 785.3,55.4 735.9,54.4"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/beloglinskiy')">
							<polygon id="beloglinskiy" class="o-city" points="862.1,114.5 908.1,116.7 921.7,103.9 830,56.3 785.3,55.4"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-tihoretskiy/tihoreckiy')">
							<polygon id="tihoreckiy" class="o-city" points="718.78,130.8 797.02,111.35 763.07,80.34 667,85.96"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/kavkazskiy')">
							<polygon id="kavkazskiy" class="o-city" points="767.52,146.64 867.5,146.33 854.79,114.13 797.02,111.35 758.68,120.88"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/tbilisskiy')">
							<polygon id="tbilisskiy" class="o-city" points="725.43,193.7 777.26,175.01 758.68,120.88 709.41,133.13"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/ust-labinskiy')">
							<polygon id="ust-labinskiy" class="o-city" points="572.99,167.05 725.43,193.7 709.41,133.13"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/vyselkovskiy')">
							<polygon id="vyselkovskiy" class="o-city" points="638.02,150.88 718.78,130.8 667,85.96 602.48,89.73 596.9,101.73"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/korenovskiy')">
							<polygon id="korenovskiy" class="o-city" points="528.38,145.64 572.99,167.05 638.02,150.88 596.9,101.73 529.53,103.18"/>
						</g>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-krasnoarmeyskiy" class="link-to-o">
					<g class="o-cont" id="o-krasnoarmeyskiy">
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-krasnoarmeyskiy/timashevskiy')" >
							<polygon id="timashevskiy" class="o-city" points="482.32,153.28 528.38,145.64 529.53,103.18 447.47,104.95"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-krasnoarmeyskiy/kalininskiy')">
							<polygon id="kalininskiy" class="o-city" points="418.98,163.76 482.32,153.28 447.47,104.95 357.91,106.88 352.77,116.7"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-krasnoarmeyskiy/krasnoarmeyskiy')">
							<polygon id="krasnoarmeyskiy" class="o-city" points="433.28,194.62 448.82,183.66 418.98,163.76 352.77,116.7 319.78,179.78 
							334.46,180.06"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-krasnoarmeyskiy/dinskoy')">
							<polygon id="dinskoy" class="o-city" points="494.8,203.69 527.12,192.41 527.81,167.05 492.25,167.05 482.32,153.28 
							418.98,163.76 448.82,183.66 433.28,194.62"/>
						</g>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-krasnodarskiy" class="link-to-o">
					<g class="o-cont" id="o-krasnodarskiy" @click.prevent="onDesClick('/region/o-krasnodarskiy/krasnodar')">
						<polygon id="krasnodar" class="o-city" points="572.99,167.05 528.38,145.64 482.32,153.28 492.25,167.05 527.81,167.05 
						527.12,192.41 494.8,203.69 545.93,211.22 619.26,175.19 "/>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-slavyanskiy" class="link-to-o">
					<g class="o-cont" id="o-slavyanskiy">
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-slavyanskiy/slavyanskiy')">
							<polygon id="slavyanskiy" class="o-city" points="357.91,106.88 302.72,108.07 254.75,110.06 227.42,149.06 236.24,178.17 
							319.78,179.78"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-slavyanskiy/abinskiy')">
							<polygon id="abinskiy" class="o-city" points="348.55,279.18 407.73,190.86 334.46,180.06 265.81,255.9 	"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-slavyanskiy/krymskiy')">
							<polygon id="krymskiy" class="o-city" points="236.24,178.17 191.62,184.95 183.11,209.7 222.72,213.72 265.81,255.9 
							334.46,180.06"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-slavyanskiy/temryukskiy')">
							<polygon id="temrukskiy" class="o-city" points="236.24,178.17 227.42,149.06 164.01,158.14 79.53,144.42 57.8,154.53 
							92.64,162.59 74.85,174.2 9.3,173.78 0,185.81 90.01,200.41"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-slavyanskiy/anapa')">
							<polygon id="anapa" class="o-city" points="191.62,184.95 90.01,200.41 123.83,259.15 183.11,209.7 	"/>
						</g>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-tuapsinskiy" class="link-to-o">
					<g class="o-cont" id="o-tuapsinskiy">
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDisClick('/region/o-tuapsinskiy/goryachiy-klyuch')" >
							<polygon id="goryachiy-klyuch" class="o-city" points="615.18,246.59 499,227.74 443.76,305.97 545.69,334.66"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/severskiy')" >
							<polygon id="severskiy" class="o-city" points="499,227.74 434.32,217.24 433.28,194.62 407.73,190.86 348.55,279.18 
							443.76,305.97"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/novorossiysk')">
							<polygon id="novorossiysk" class="o-city" points="251.52,271.69 265.81,255.9 222.72,213.72 183.11,209.7 123.83,259.15 
								176.88,276.23 214.72,270.62 216.77,255.61 229.76,252.38"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/gelendzhik')">
							<polygon id="gelendzhik" class="o-city" points="407.73,295.83 265.81,255.9 251.52,271.69 298.5,313.38 372.82,336.95"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/tuapsinskiy')">
							<polygon id="tuapsinskiy" class="o-city" points="407.73,295.83 372.82,336.95 446.83,360.42 521.49,421.79 596.58,391.63 
							620.51,355.71"/>
						</g>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-armavirskiy" class="link-to-o">
					<g class="o-cont" id="o-armavirskiy">
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/kurganinskiy')">
							<polygon id="kurganinskiy" class="o-city" points="938.4,244.4 880.8,190.5 777.3,175 725.4,193.7 834,212.8 875.4,259.8"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/labinskiy')">
							<polygon id="labinskiy" class="o-city" points="1008.6,310.4 1025.8,299.4 938.4,244.4 875.4,259.8 979.3,376.3 1107.8,403.5"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/novokubanskiy')">
							<polygon id="novokubanskiy" class="o-city" points="922.95,208.48 950.72,197.9 979.26,214.91 1030.85,214.33 979.85,173.61 
							863.59,174.33 938.44,244.36 1025.78,299.41 1051.9,282.65"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/armavir')">
							<polygon id="armavir" class="o-city" points="979.26,214.91 950.72,197.9 922.95,208.48 990.52,247.34 1005.93,247.34"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/uspenskiy')">
							<polygon id="uspenskiy" class="o-city" points="1030.85,214.33 979.26,214.91 1005.93,247.34 990.52,247.34 1051.9,282.65 
							1087.4,259.86 1077.75,214.33"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/otradnenskiy')">
							<polygon id="otradnenskiy" class="o-city" points="1146.79,322.66 1158.15,312.79 1069.76,271.18 1008.59,310.44 1107.77,403.53 
							1179,418.61 1228.16,373.89"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-armavirskiy/mostovskiy')">
							<polygon id="mostovskiy" class="o-city" points="914.6,303.56 877.83,303.63 840.18,254.58 802.68,249.05 897.21,524.43 
							1008.59,573.64 1029.64,554.48 1013.34,520.07 1028.53,431.81"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/gulkevichskiy')" >
							<polygon id="gulkevichskiy" class="o-city" points="880.76,190.45 863.59,174.33 919.78,173.98 867.5,146.33 767.52,146.64 
							777.26,175.01"/>
						</g>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-sochinskiy" class="link-to-o">
					<g class="o-cont o-cont-district" id="o-sochinskiy">
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-sochinskiy/apsheronskiy')">
							<polygon id="apsheronskiy" class="o-city" points="767.5,358.9 704.4,334.7 695.8,289.2 597.3,269.2 545.7,334.7 620.5,355.7 596.6,391.6 682.5,429.6 691.9,373.1 754.5,399.8"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-sochinskiy/belorechenskiy')">
							<polygon id="belorechenskiy" class="o-city" points="695.82,289.21 723.11,252.56 685.33,207.42 649.69,214.49 621.24,202.79 
							602.91,218.54 629.67,228.22 597.33,269.22"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-sochinskiy/sochi')">
							<polygon id="sochi" class="o-city" points="596.58,391.63 521.49,421.79 796.75,648.03 823.2,573.64 1008.59,573.64"/>
						</g>
					</g>
				</nuxt-link>
			</svg>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, ref, useContext, useRouter, } from '@nuxtjs/composition-api'

import { useMap, } from '@/composition/map'
import MapLabel from './DistrictLabel.vue'
import RegionLabel from './RegionLabel.vue'
import TheLabels from './TheLabels.vue'

export default defineComponent(
  {
    name:'TheMap',
    components: { 
      MapLabel,
      RegionLabel,
	  TheLabels, 
    },
    setup()
     {
        const { route, } = useContext()
        const { mapSvg, zoomTo, setTo, resetViewBox, isRegionOpened, } = useMap()
        onMounted(() => {
            const slug = route.value.params.slug
            mapSvg.value = document.querySelector('.map-svg') as SVGAElement
            if (slug) {
                if (route.value.name === 'region-slug') {
                    setTo(slug)
                }
            }
        })
        const  isMinusOne = ref(false)
        watch(route, () => {
            const slug = route.value.params.slug
            if (slug) {
                if (route.value.name === 'region-slug') {
                    zoomTo(slug)
                    isRegionOpened.value = true
                    isMinusOne.value = true
                }
            }
            if (route.value.path === '' || route.value.path === '/') {
                resetViewBox()
                isMinusOne.value = false
            }
        })

        const router = useRouter()
        const onDesClick = (url: string) => {
          if (isRegionOpened.value)
            router.push(url)
          else {
            router.push(url.substring(0, url.lastIndexOf('/')))
          }
        }
        return {
          isMinusOne,
          isRegionOpened,
          onDesClick,
        }
    },
})
</script>

<style scoped>
.map-cont {
	/*filter: drop-shadow(rgba(0, 102, 204, 0.2) 0px 22px 64px);*/
	grid-column: 1/33;
	position: relative;
	margin-top: 1.2rem;
	margin-bottom: -18rem;
}

.minus-one {
  z-index: -1;
}

.map-svg {
	/*filter: drop-shadow(rgba(0, 131, 204, 0.72) 0px 12px 16px);*/
}

.o-city {
	fill: #eef4fd;
	stroke-width: .5px; 
	stroke: #C2D8EF;
	stroke-dasharray: 4px;
	transition: fill .5s linear,
				stroke .15s linear;
}
.link-to-o:hover .o-city {
	fill: #2c9aff;
	stroke: #c2d8ef00;
}

.map-svg .o-city#o-adygeya {
	fill: rgba(203, 231, 247, 0.12);
	stroke: none;
}

.link-to-o, 
.o-title-cont {
	cursor: pointer;
}

.o-header-line {
	fill: none;
	stroke: var(--White56);
	transition: stroke .15s linear;
}
.link-to-o:hover .o-header-line {
	stroke: var(--White100);
}

.o-title {
	fill: var(--White100);
	font-size: 1.3rem;
	text-transform: uppercase;
	letter-spacing: .075em;
}

.link-to-o>.o-cont {
	transition: transform .2s ease-in-out;
}
.link-to-o:hover>.o-cont {
	transform: translateY(-1.2rem);
}

@media (max-width: 460px) {
	.map-cont {
		grid-column: 1/7;
		margin-top: 1.2rem;
		margin-bottom: -8rem;
		min-height: 60vh;
	}
	.map-svg {
		transform: scale(1.8);
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 48vh;
	}
}
</style>