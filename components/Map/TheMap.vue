<template>
	<div class="map-cont">
		<div class="map-labels">
			<div class="map-labels-wrapper map-labels-slavyanskiy">
				<div class="map-label-city map-label-city-krymskiy">
					<div class="map-label-city-title">Крымский район</div>
				</div>
				<div class="map-label-city map-label-city-abinskiy">
					<div class="map-label-city-title">Абинский район</div>
				</div>
				<div class="map-label-city map-label-city-anapa">
					<div class="map-label-city-title">Анапа</div>
				</div>
				<div class="map-label-city map-label-city-temrukskiy">
					<div class="map-label-city-title">Темрюкский район</div>
				</div>
				<div class="map-label-city map-label-city-slavyanskiy">
					<div class="map-label-city-title">Славянский район</div>
				</div>
			</div>
		</div>
		<svg class="map-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			width="1228.16px" height="648.03px" viewBox="0 0 1228.16 648.03" preserveAspectRatio="xMidYMid meet"
			style="overflow:visible;enable-background:new 0 0 1228.16 648.03;" xml:space="preserve">
			<style type="text/css">
			polygon {stroke-width: 1px; stroke: var(--Azure32);}
			</style>
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
						<g class="o-city-title-cont">
							<path class="o-bg" d="M677.7,64.5c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h47.1
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8H679c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V64.5z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 681.8802 64.6924)">Павловский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/krylovskiy')">
						<polygon id="krylovskiy" class="o-city" points="619.95,52.21 735.87,54.44 707.46,27.78 632.27,25.74"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M670.1,36.9c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h48.4
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-54.7c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V36.9z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 674.2798 37.0902)">Крыловский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/sherbinovskiy')">
						<polygon id="sherbinovskiy" class="o-city" points="437.92,39.28 481.5,39.62 503.29,20.55 495.63,2.68 439.79,0 433.16,5.23 451.37,6.77"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M472.2,15.1c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h53.7
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-60c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V15.1z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 476.4268 15.3289)">Щербиновский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/kushevskiy')">
						<polygon id="kushevskiy" class="o-city" points="560,40.23 625.29,40.74 632.27,25.74 683.47,27.13 687.51,9.04 560.07,3.99"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M608.3,17.5c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h44.4
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-50.8c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V17.5z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 612.4752 17.6888)">Кущевский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/eyskiy')">
						<polygon id="eyskiy" class="o-city" points="393.88,37.88 434.34,69.73 461.73,39.46 437.92,39.28 446.55,18.41 409.34,17.39 
						406.6,11.79 331.05,21.1 336.22,37.24"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M377.5,24.3c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h33.4
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-39.8c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V24.3z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 381.6611 24.4892)">Ейский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/starominskiy')">
						<polygon id="starominskiy" class="o-city" points="481.5,39.62 560,40.23 560,23.24 503.29,20.55"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M523.8,29.9c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h53.7
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-60c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V29.9z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 528.0306 30.13)">Староминский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-kanevskoy/leningradskiy')">
						<polygon id="leningradskiy" class="o-city" points="611.79,69.73 625.29,40.74 531.24,40.01 530.44,69.73"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M545.3,52.7c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h56.3
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-62.6c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V52.7z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 549.4712 52.8914)">Ленинградский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/kanevskoy')" >
						<polygon id="kanevskoy" class="o-city" points="602.48,89.73 611.79,69.73 530.44,69.73 531.24,40.01 461.73,39.46 434.34,69.73 465.2,79.76"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M468.6,59.4c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h43.6
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-49.9c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V59.4z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 472.7861 59.6515)">Каневской район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/primorsko-akhtarskiy')">
						<polygon id="primorsko-akhtarskiy" class="o-city" points="465.2,79.76 434.34,69.73 427.85,76.89 381.03,62.69 375.56,73.13 
						323.9,76.19 302.72,108.07 447.47,104.95"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M351.1,92c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h79.7
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-86c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V92z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 355.2961 92.1741)">Приморско-Ахтарский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/bruhovetskiy')">
						<polygon id="bruhovetskiy" class="o-city" points="596.9,101.73 602.48,89.73 465.2,79.76 447.47,104.95"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M502.2,92c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h50.6
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-56.9c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V92z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 506.3888 92.1741)">Брюховецкий район</text>
						</g>
					</g>
				</g>
				<g class="o-title-cont" :class="{ 'city-cont-hover': isRegionOpened }">
					<path class="o-bg" d="M550.31,51.81c0-9,0-13.5,2.29-16.65c0.74-1.02,1.64-1.91,2.65-2.65
						c3.15-2.29,7.65-2.29,16.65-2.29h68.41c9,0,13.5,0,16.65,2.29c1.02,0.74,1.91,1.64,2.65,2.65c2.29,3.15,2.29,7.65,2.29,16.65v0.8
						c0,9,0,13.5-2.29,16.65c-0.74,1.02-1.64,1.91-2.65,2.65c-3.15,2.29-7.65,2.29-16.65,2.29h-86.41c-1.5,0-2.25,0-2.78-0.38
						c-0.17-0.12-0.32-0.27-0.44-0.44c-0.38-0.53-0.38-1.28-0.38-2.78V51.81z"/>
					<text class="o-title" transform="matrix(1 0 0 1 562.21 64.206)">Каневской</text>
					<text class="o-header" transform="matrix(1 0 0 1 562.4907 48.206)">Округ</text>
					<text class="o-header-number" transform="matrix(1 0 0 1 635.4197 48.206)">53</text>
					<line class="o-header-line" x1="607.31" y1="43.71" x2="632.95" y2="43.71"/>
				</g>
			</nuxt-link>
			<nuxt-link to="/region/o-tihoretskiy" class="link-to-o">
				<g class="o-cont" id="o-tihoretskiy" :class="{ 'city-cont-hover': isRegionOpened }">
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/novopokrovskiy')">
						<polygon id="novopokrovskiy" class="o-city" points="744.8,81.4 763.1,80.3 797,111.4 862.1,114.5 785.3,55.4 735.9,54.4"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M778.8,75.2c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h61.2
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2V72c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-67.5c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V75.2z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 782.9998 75.3807)">Новопокровский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/beloglinskiy')">
						<polygon id="beloglinskiy" class="o-city" points="862.1,114.5 908.1,116.7 921.7,103.9 830,56.3 785.3,55.4"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M859.2,89c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8H920
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-59.6c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V89z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 863.4041 89.2223)">Белоглинский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-tihoretskiy/tihoretskiy')">
						<polygon id="tihoretskiy" class="o-city" points="718.78,130.8 797.02,111.35 763.07,80.34 667,85.96"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M729.3,100.8c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h46.6
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-53c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V100.8z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 733.5164 101.023)">Тихорецкий район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/kavkazskiy')">
						<polygon id="kavkazskiy" class="o-city" points="767.52,146.64 867.5,146.33 854.79,114.13 797.02,111.35 758.68,120.88"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M796.5,128.4c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h46.6
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-53c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V128.4z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 800.7206 128.6243)">Кавказский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/tbilisskiy')">
						<polygon id="tbilisskiy" class="o-city" points="725.43,193.7 777.26,175.01 758.68,120.88 709.41,133.13"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M739.1,151c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h46.6
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-53c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V151z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 743.3173 151.2261)">Тбилисский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/ust-labinskiy')">
						<polygon id="ust-labinskiy" class="o-city" points="572.99,167.05 725.43,193.7 709.41,133.13"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M654.9,163c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h59
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-65.3c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V163z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 659.112 163.2269)">Усть–Лабинский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/vyselkovskiy')">
						<polygon id="vyselkovskiy" class="o-city" points="638.02,150.88 718.78,130.8 667,85.96 602.48,89.73 596.9,101.73"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M647.1,111c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h53.7
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-60c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V111z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 651.3113 111.223)">Выселковский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/korenovskiy')">
						<polygon id="korenovskiy" class="o-city" points="528.38,145.64 572.99,167.05 638.02,150.88 596.9,101.73 529.53,103.18"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M566.5,130.6c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h50.2
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-56.5c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V130.6z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 570.7061 130.7841)">Кореновский район</text>
						</g>
					</g>
				</g>
				<g class="o-title-cont">
					<path class="o-bg" d="M764.63,113.48c0-9,0-13.5,2.29-16.65c0.74-1.02,1.64-1.91,2.65-2.65
						c3.15-2.29,7.65-2.29,16.65-2.29h79.41c9,0,13.5,0,16.65,2.29c1.02,0.74,1.91,1.64,2.65,2.65c2.29,3.15,2.29,7.65,2.29,16.65v0.8
						c0,9,0,13.5-2.29,16.65c-0.74,1.02-1.64,1.91-2.65,2.65c-3.15,2.29-7.65,2.29-16.65,2.29h-97.41c-1.5,0-2.25,0-2.78-0.38
						c-0.17-0.12-0.32-0.27-0.44-0.44c-0.38-0.53-0.38-1.28-0.38-2.78V113.48z"/>
					<text class="o-title" transform="matrix(1 0 0 1 776.5315 125.8803)">Тихорецкий</text>
					<text class="o-header" transform="matrix(1 0 0 1 776.8121 109.8803)">Округ</text>
					<text class="o-header-number" transform="matrix(1 0 0 1 861.1376 109.8803)">51</text>
					<line class="o-header-line" x1="821.63" y1="105.38" x2="858.15" y2="105.38"/>
				</g>
			</nuxt-link>
			<nuxt-link to="/region/o-krasnoarmeyskiy" class="link-to-o">
				<g class="o-cont" id="o-krasnoarmeyskiy">
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-krasnoarmeyskiy/timashevskiy')" >
						<polygon id="timashevskiy" class="o-city" points="482.32,153.28 528.38,145.64 529.53,103.18 447.47,104.95"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M496.6,124.9c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h52.3
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-58.6c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V124.9z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 500.7625 125.11)">Тимашевский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-krasnoarmeyskiy/kalininskiy')">
						<polygon id="kalininskiy" class="o-city" points="418.98,163.76 482.32,153.28 447.47,104.95 357.91,106.88 352.77,116.7"/>
						<g class="o-city-title-cont" >
							<path class="o-bg" d="M420.7,132.9c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h50.9
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-57.3c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V132.9z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 424.8418 133.1112)">Калининский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-krasnoarmeyskiy/krasnoarmeyskiy')">
						<polygon id="krasnoarmeyskiy" class="o-city" points="433.28,194.62 448.82,183.66 418.98,163.76 352.77,116.7 319.78,179.78 
						334.46,180.06"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M372.8,156.8c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h63.7
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-70c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V156.8z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 376.9999 156.9922)">Красноармейский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-krasnoarmeyskiy/dinskoy')">
						<polygon id="dinskoy" class="o-city" points="494.8,203.69 527.12,192.41 527.81,167.05 492.25,167.05 482.32,153.28 
						418.98,163.76 448.82,183.66 433.28,194.62"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M475.8,179.7c0-3.2,0-4.8,0.8-5.9c0.3-0.4,0.6-0.7,0.9-0.9c1.1-0.8,2.7-0.8,5.9-0.8h37.3
							c3.2,0,4.8,0,5.9,0.8c0.4,0.3,0.7,0.6,0.9,0.9c0.8,1.1,0.8,2,0.8,5.2v-2.5c0,3.2,0,4.8-0.8,5.9c-0.3,0.4-0.6,0.7-0.9,0.9
							c-1.1,0.8-2.7,0.8-5.9,0.8h-43.6c-0.5,0-0.8,0-1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.1-1V179.7z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 479.9879 179.8932)">Динской район</text>
						</g>
					</g>
				</g>
				<g class="o-title-cont">
					<path class="o-bg" d="M413.6,114.1c0-9,0-13.5,2.3-16.7c0.7-1,1.6-1.9,2.7-2.7c3.2-2.3,7.7-2.3,16.7-2.3h128.2
					c9,0,13.5,0,16.7,2.3c1,0.7,1.9,1.6,2.7,2.7c2.3,3.2,2.3,7.7,2.3,16.7v0.8c0,9,0,13.5-2.3,16.7c-0.7,1-1.6,1.9-2.7,2.7
					c-3.2,2.3-7.7,2.3-16.7,2.3H417.2c-1.5,0-2.2,0-2.8-0.4c-0.2-0.1-0.3-0.3-0.4-0.4c-0.4-0.5-0.4-1.3-0.4-2.8V114.1z"/>
					<text class="o-title" transform="matrix(1 0 0 1 425.5033 126.4801)">Красноармейский</text>
					<text class="o-header" transform="matrix(1 0 0 1 425.784 110.4801)">Округ</text>
					<text class="o-header-number" transform="matrix(1 0 0 1 558.246 110.4801)">47</text>
					<line class="o-header-line" x1="470.6" y1="106" x2="555.3" y2="106"/>
				</g>
			</nuxt-link>
			<nuxt-link to="/region/o-krasnodarskiy" class="link-to-o">
				<g class="o-cont" id="o-krasnodarskiy" @click.prevent="onDesClick('/region/o-krasnodarskiy/krasnodar')">
					<polygon id="krasnodar" class="o-city" points="572.99,167.05 528.38,145.64 482.32,153.28 492.25,167.05 527.81,167.05 
					527.12,192.41 494.8,203.69 545.93,211.22 619.26,175.19 "/>
				</g>
				<g class="o-title-cont">
					<path class="o-bg" d="M548.7,166.65c0-9,0-13.5,2.29-16.65c0.74-1.02,1.64-1.91,2.65-2.65
						c3.15-2.29,7.65-2.29,16.65-2.29h107.61c9,0,13.5,0,16.65,2.29c1.02,0.74,1.91,1.64,2.65,2.65c2.29,3.15,2.29,7.65,2.29,16.65v0.8
						c0,9,0,13.5-2.29,16.65c-0.74,1.02-1.64,1.91-2.65,2.65c-3.15,2.29-7.65,2.29-16.65,2.29H552.3c-1.5,0-2.25,0-2.78-0.38
						c-0.17-0.12-0.32-0.27-0.44-0.44c-0.38-0.53-0.38-1.28-0.38-2.78V166.65z"/>
					<text class="o-title" transform="matrix(1 0 0 1 560.6021 179.048)">Краснодарский</text>
					<text class="o-header" transform="matrix(1 0 0 1 560.8827 163.048)">Округ</text>
					<text class="o-header-number" transform="matrix(1 0 0 1 672.2401 163.048)">46</text>
					<line class="o-header-line" x1="605.7" y1="158.55" x2="668.95" y2="158.55"/>
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
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-slavyanskiy/temrukskiy')">
						<polygon id="temrukskiy" class="o-city" points="236.24,178.17 227.42,149.06 164.01,158.14 79.53,144.42 57.8,154.53 
						92.64,162.59 74.85,174.2 9.3,173.78 0,185.81 90.01,200.41"/>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-slavyanskiy/anapa')">
						<polygon id="anapa" class="o-city" points="191.62,184.95 90.01,200.41 123.83,259.15 183.11,209.7 	"/>
					</g>
				</g>
				<g class="o-title-cont">
					<path class="o-bg" d="M233.9,184.6c0-9,0-13.5,2.3-16.7c0.7-1,1.6-1.9,2.7-2.7c3.2-2.3,7.7-2.3,16.7-2.3h79.7
					c9,0,13.5,0,16.7,2.3c1,0.7,1.9,1.6,2.7,2.7c2.3,3.2,2.3,7.7,2.3,16.7v0.8c0,9,0,13.5-2.3,16.7c-0.7,1-1.6,1.9-2.7,2.7
					c-3.2,2.3-7.7,2.3-16.7,2.3h-97.7c-1.5,0-2.2,0-2.8-0.4c-0.2-0.1-0.3-0.3-0.4-0.4c-0.4-0.5-0.4-1.3-0.4-2.8V184.6z"/>
					<text class="o-title" transform="matrix(1 0 0 1 245.8224 196.9522)">Славянский</text>
					<text class="o-header" transform="matrix(1 0 0 1 246.1031 180.9522)">Округ</text>
					<text class="o-header-number" transform="matrix(1 0 0 1 329.5893 180.9522)">48</text>
					<line class="o-header-line" x1="290.9" y1="176.5" x2="325.2" y2="176.5"/>
				</g>
			</nuxt-link>
			<nuxt-link to="/region/o-tuapsinskiy" class="link-to-o">
				<g class="o-cont" id="o-tuapsinskiy">
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDisClick('/region/o-tuapsinskiy/goryachiy-kluch')" >
						<polygon id="goryachiy-kluch" class="o-city" points="615.18,246.59 499,227.74 443.76,305.97 545.69,334.66 	"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M512.6,277.8c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h50.9
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7V273c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-60.4c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V277.8z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 518.8786 278.0696)">Горячий Ключ</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/severskiy')" >
						<polygon id="severskiy" class="o-city" points="499,227.74 434.32,217.24 433.28,194.62 407.73,190.86 348.55,279.18 
						443.76,305.97"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M416.3,250.8c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h64.1
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7V246c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-73.6c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V250.8z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 422.6131 251.1058)">Северский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/novorossiysk')">
						<polygon id="novorossiysk" class="o-city" points="251.52,271.69 265.81,255.9 222.72,213.72 183.11,209.7 123.83,259.15 
							176.88,276.23 214.72,270.62 216.77,255.61 229.76,252.38"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M186.4,237.7c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2H252
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7V233c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-63.6c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V237.7z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 192.7213 238.0297)">Новороссийск</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/gelendzhik')">
						<polygon id="gelendzhik" class="o-city" points="407.73,295.83 265.81,255.9 251.52,271.69 298.5,313.38 372.82,336.95"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M317.5,295.8c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h39.3
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7V291c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-48.8c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V295.8z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 323.7654 296.077)">Геленджик</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/tuapsinskiy')">
						<polygon id="tuapsinskiy" class="o-city" points="407.73,295.83 372.82,336.95 446.83,360.42 521.49,421.79 596.58,391.63 
						620.51,355.71"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M467.4,343.8c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h77.3
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7V339c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-86.8c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V343.8z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 473.6493 344.1147)">Туапсинский район</text>
						</g>
					</g>
				</g>
				<g class="o-title-cont">
					<path class="o-bg" d="M410.2,259.4c0-9,0-13.5,2.3-16.7c0.7-1,1.6-1.9,2.7-2.7c3.2-2.3,7.7-2.3,16.7-2.3h99.3
					c9,0,13.5,0,16.7,2.3c1,0.7,1.9,1.6,2.7,2.7c2.3,3.2,2.3,7.7,2.3,16.7v0.8c0,9,0,13.5-2.3,16.7c-0.7,1-1.6,1.9-2.7,2.7
					c-3.2,2.3-7.7,2.3-16.7,2.3H413.8c-1.5,0-2.2,0-2.8-0.4c-0.2-0.1-0.3-0.3-0.4-0.4c-0.4-0.5-0.4-1.3-0.4-2.8V259.4z"/>
					<text class="o-title" transform="matrix(1 0 0 1 422.1505 271.7766)">Туапскинский</text>
					<text class="o-header" transform="matrix(1 0 0 1 422.4312 255.7766)">Округ</text>
					<text class="o-header-number" transform="matrix(1 0 0 1 525.1927 255.7766)">49</text>
					<line class="o-header-line" x1="467.2" y1="251.3" x2="522.6" y2="251.3"/>
				</g>
			</nuxt-link>
			<nuxt-link to="/region/o-armavirskiy" class="link-to-o">
				<g class="o-cont" id="o-armavirskiy">
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/kurganinskiy')">
						<polygon id="kurganinskiy" class="o-city" points="938.4,244.4 880.8,190.5 777.3,175 725.4,193.7 834,212.8 875.4,259.8"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M817.5,196.1c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h78.4
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7v-3.7c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-87.9c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V196.1z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 823.8147 196.3886)">Курганинский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/labinskiy')">
						<polygon id="labinskiy" class="o-city" points="1008.6,310.4 1025.8,299.4 938.4,244.4 875.4,259.8 979.3,376.3 1107.8,403.5"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M953.1,299.2c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h65.1
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7v-3.7c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2H955c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V299.2z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 959.4072 299.4794)">Лабинский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/novokubanskiy')">
						<polygon id="novokubanskiy" class="o-city" points="922.95,208.48 950.72,197.9 979.26,214.91 1030.85,214.33 979.85,173.61 
						863.59,174.33 938.44,244.36 1025.78,299.41 1051.9,282.65"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M928.1,182.3c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h86.2
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7v-3.7c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2H930c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V182.3z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 934.3428 182.6579)">Новокубанский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/armavir')">
						<polygon id="armavir" class="o-city" points="979.26,214.91 950.72,197.9 922.95,208.48 990.52,247.34 1005.93,247.34"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M960.5,210.7c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2H999
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7V206c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-36.6c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V210.7z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 966.775 211.0594)">Армавир</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/uspenskiy')">
						<polygon id="uspenskiy" class="o-city" points="1030.85,214.33 979.26,214.91 1005.93,247.34 990.52,247.34 1051.9,282.65 
						1087.4,259.86 1077.75,214.33"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M1029.5,234.4c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h65.1
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7v-3.7c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-74.6c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V234.4z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 1035.7441 234.7367)">Успенский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/otradnenskiy')">
						<polygon id="otradnenskiy" class="o-city" points="1146.79,322.66 1158.15,312.79 1069.76,271.18 1008.59,310.44 1107.77,403.53 
						1179,418.61 1228.16,373.89"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M1099.5,332c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h79.9
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7v-3.7c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-89.4c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V332z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 1105.7653 332.3257)">Отрадненский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-armavirskiy/mostovskiy')">
						<polygon id="mostovskiy" class="o-city" points="914.6,303.56 877.83,303.63 840.18,254.58 802.68,249.05 897.21,524.43 
						1008.59,573.64 1029.64,554.48 1013.34,520.07 1028.53,431.81"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M932.6,430c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h70.4
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7v-3.7c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-79.9c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V430z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 938.9326 430.3218)">Мостовский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-armavirskiy/gulkevichskiy')" >
						<polygon id="gulkevichskiy" class="o-city" points="880.76,190.45 863.59,174.33 919.78,173.98 867.5,146.33 767.52,146.64 
						777.26,175.01"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M833,159.7c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h83.1
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7v-3.7c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-92.7c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V159.7z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 839.2587 159.978)">Гулькевичский район</text>
						</g>
					</g>
				</g>
				<g class="o-title-cont">
					<path class="o-bg" d="M921.7,244.2c0-9,0-13.5,2.3-16.7c0.7-1,1.6-1.9,2.7-2.7c3.2-2.3,7.7-2.3,16.7-2.3h91.4
					c9,0,13.5,0,16.7,2.3c1,0.7,1.9,1.6,2.7,2.7c2.3,3.2,2.3,7.7,2.3,16.7v0.8c0,9,0,13.5-2.3,16.7c-0.7,1-1.6,1.9-2.7,2.7
					c-3.2,2.3-7.7,2.3-16.7,2.3H925.3c-1.5,0-2.2,0-2.8-0.4c-0.2-0.1-0.3-0.3-0.4-0.4c-0.4-0.5-0.4-1.3-0.4-2.8V244.2z"/>
					<text class="o-title" transform="matrix(1 0 0 1 933.6439 256.5683)">Армавирский</text>
					<text class="o-header" transform="matrix(1 0 0 1 933.9245 240.5683)">Округ</text>
					<text class="o-header-number" transform="matrix(1 0 0 1 1028.7406 240.5683)">52</text>
					<line class="o-header-line" x1="978.7" y1="236.1" x2="1024.8" y2="236.1"/>
				</g>
			</nuxt-link>
			<nuxt-link to="/region/o-sochinskiy" class="link-to-o">
				<g class="o-cont o-cont-district" id="o-sochinskiy">
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-sochinskiy/apsheronskiy')">
						<polygon id="apsheronskiy" class="o-city" points="767.5,358.9 704.4,334.7 695.8,289.2 597.3,269.2 545.7,334.7 620.5,355.7 
							596.6,391.6 682.5,429.6 691.9,373.1 754.5,399.8"/>
						<g class="o-city-title-cont" >
							<path class="o-bg" d="M653,341c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h77.3
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7v-3.7c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-86.8c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V341z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 659.2867 341.3511)">Апшеронский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-sochinskiy/belorechenskiy')">
						<polygon id="belorechenskiy" class="o-city" points="695.82,289.21 723.11,252.56 685.33,207.42 649.69,214.49 621.24,202.79 
						602.91,218.54 629.67,228.22 597.33,269.22"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M661.7,246.7c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h83
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7V242c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-92.5c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V246.7z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 667.9951 247.0544)">Белореченский район</text>
						</g>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-sochinskiy/sochi')">
						<polygon id="sochi" class="o-city" points="596.58,391.63 521.49,421.79 796.75,648.03 823.2,573.64 1008.59,573.64"/>
						<g class="o-city-title-cont">
							<path class="o-bg" d="M685.6,482.7c0-4.8,0-7.1,1.2-8.8c0.4-0.5,0.9-1,1.4-1.4c1.7-1.2,4-1.2,8.8-1.2h12.1
							c4.8,0,7.1,0,8.8,1.2c0.5,0.4,1,0.9,1.4,1.4c1.2,1.7,1.2,3,1.2,7.7V478c0,4.8,0,7.1-1.2,8.8c-0.4,0.5-0.9,1-1.4,1.4
							c-1.7,1.2-4,1.2-8.8,1.2h-21.6c-0.8,0-1.2,0-1.5-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.2-0.7-0.2-1.5V482.7z"/>
							<text class="o-title o-city-title" transform="matrix(1 0 0 1 691.9219 483.0316)">Сочи</text>
						</g>
					</g>
				</g>
				<g class="o-title-cont" >
					<path class="o-bg" d="M645.2,327.9c0-9,0-13.5,2.3-16.7c0.7-1,1.6-1.9,2.7-2.7c3.2-2.3,7.7-2.3,16.7-2.3h74.4
					c9,0,13.5,0,16.7,2.3c1,0.7,1.9,1.6,2.7,2.7c2.3,3.2,2.3,7.7,2.3,16.7v0.8c0,9,0,13.5-2.3,16.7c-0.7,1-1.6,1.9-2.7,2.7
					c-3.2,2.3-7.7,2.3-16.7,2.3h-92.4c-1.5,0-2.2,0-2.8-0.4c-0.2-0.1-0.3-0.3-0.4-0.4c-0.4-0.5-0.4-1.3-0.4-2.8V327.9z"/>
					<text class="o-title" transform="matrix(1 0 0 1 657.1313 340.2736)">Сочинский</text>
					<text class="o-header" transform="matrix(1 0 0 1 657.412 324.2736)">Округ</text>
					<text class="o-header-number" transform="matrix(1 0 0 1 733.0045 324.2736)">50</text>
					<line class="o-header-line" x1="702.2" y1="319.8" x2="730.9" y2="319.8"/>
				</g>
			</nuxt-link>
		</svg>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, ref, useContext, useRouter, } from '@nuxtjs/composition-api'

import { useMap, } from '@/composition/map'

export default defineComponent({
    name:'TheMap',
    setup () {
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
          onDesClick,
          isRegionOpened,
        }
    },
})
</script>

<style scoped>
.o-city-title-cont {
  display: none;
  transition: all .25s ease-in-out;
}

.city-cont-hover:hover {
  transition: all .25s ease-in-out;
  transform: translateY(-0.5rem);
}

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

.map-svg .o-city {
	fill: rgba(203, 231, 247, 0.64);
	transition: fill .25s ease-in-out;
}
.link-to-o:hover .o-city {
	fill: rgba(203, 231, 247, 1);
}

.map-svg .o-city#o-adygeya {
	fill: rgba(203, 231, 247, 0.2);
}

.link-to-o, 
.o-title-cont {
	cursor: pointer;
}

/*  
.o-city-title-cont {
	display: none;
} */

.o-bg {
	fill: var(--Azure100);
}

.o-header-number,
.o-header {
	fill: var(--White56);
	font-size: 1.2rem;
	text-transform: uppercase;
	letter-spacing: .05em;
	transition: fill .15s ease-in-out;
}
.link-to-o:hover .o-header-number,
.link-to-o:hover .o-header {
	fill: var(--White100);
}

.o-header-line {
	fill: none;
	stroke: var(--White56);
	transition: stroke .15s ease-in-out;
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

.o-city-title {
	font-size: .448rem;
}

.link-to-o>.o-cont {
	transition: transform .25s ease-in-out;
}
.link-to-o:hover>.o-cont {
	transform: translateY(-2rem);
}


/* хтмл плашки карты */

.map-labels {
	position: absolute;
}

.map-label-city {
	display: flex;
	background: var(--Azure100);
	border-radius: 12px 12px 12px 2px;
	padding: .4rem .8rem;
	position: absolute;
}

.map-label-city-title {
	color: var(--White100);
	font-size: 1.6rem;
	line-height: 2rem;
	text-transform: uppercase;
	letter-spacing: .05em;
}

.map-label-city-krymskiy {
	left: 58vw;
	top: 44vh;
	display: none;
}
.map-label-city-abinskiy {
	left: 78vw;
	top: 54vh;
	display: none;
}
.map-label-city-anapa {
	left: 420px;
	top: 320px;
}
.map-label-city-temrukskiy {
	left: 28vw;
	top: 32vh;
	display: none;
}
.map-label-city-slavyanskiy {
	left: 66vw;
	top: 20vh;
	display: none;
}



@media (max-width: 460px) {
	.map-cont {
		grid-column: 1/7;
		margin-top: -4rem;
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