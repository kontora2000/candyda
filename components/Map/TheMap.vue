<template>
	<div class="map-cont">
		<MapLabels />
		<div class="map-svg-wrapper">
			<svg v-show="!isRegionOpened" class="map-shadow-wrapper map-shadow-wrapper-1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				width="1268.3px" height="669.4px" viewBox="0 0 1268.3 669.4"  xml:space="preserve">
				<defs></defs>
				<path class="map-shadow-stroke" d="M1183.9,333.2l11.7-10.2l-91.2-42.9l18.2-11.7l-10-47h-48.4l-52.6-42l-62,0.4l-53.9-28.5L882.6,118l7.6,0.4
					l47.5,2.3l14-13.2L857,58.3l-46.1-0.9l-51-1l-29.3-27.5l-24.8-0.7l4.2-18.7L578.4,4.4l-0.1,19.9l-58.5-2.8L511.9,3l-57.6-2.8
					l-6.9,5.4l18.8,1.6l-5,12l-38.4-1.1l-2.8-5.8l-78,9.6l5.3,16.7l59.5,0.7l41.7,32.9l-6.7,7.4l-48.3-14.7L388,75.7l-53.3,3.2
					l-21.9,32.9l0,0l-49.5,2.1l-28.2,40.2l-65.4,9.4l-87.2-14.2l-22.4,10.4l35.9,8.3l-18.4,12l-67.6-0.4L0.5,192l92.9,15.1l34.9,60.6
					l54.7,17.6l39.1-5.8l2.1-15.5l13.4-3.3l22.5,19.9l48.5,43l76.7,24.3l76.4,24.2l77.1,63.3L822.7,669l27.3-76.8h191.3l21.7-19.8
					l-16.8-35.5l15.7-91.1l-50.9-57.2l132.6,28.1l73.5,15.6l50.7-46.2L1183.9,333.2z M704.8,443.6l9.7-58.3l64.6,27.5l13.4-42.1
					l-65.1-25.1l-8.9-46.9l28.2-37.8l-39-46.6l-36.8,7.3l-29.4-12.1l-18.9,16.3l27.6,10l-15,19l-119.9-19.5l-66.7-10.8l-1.1-23.3
					l63.5,9.4l52.8,7.8l75.7-37.2l109.6,19.1l112,19.7l42.8,48.4l40.2,45.2l-37.8,0.1L867.5,263l-38.7-5.7l97.6,284.2L704.8,443.6z"/>
			</svg>
			<svg  v-show="!isRegionOpened" class="map-shadow-wrapper map-shadow-wrapper-0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				width="1302.4px" height="687.4px" viewBox="0 0 1268.3 669.4" xml:space="preserve">
				<defs></defs>
				<path class="map-shadow-stroke" d="M1215.8,342.2l12-10.5l-93.7-44.1l18.7-12l-10.2-48.2h-49.7l-54.1-43.2l-63.7,0.4l-55.4-29.3l-13.5-34.1
					l7.8,0.4l48.7,2.3l14.4-13.5L880,59.9L832.7,59l-52.4-1l-30.1-28.3L724.8,29L729,9.8L594,4.5l-0.1,20.4L533.8,22l-8.1-18.9
					l-59.2-2.8l-7,5.5l19.3,1.6l-5.1,12.3l-39.4-1.1l-2.9-5.9l-80.1,9.9l5.5,17.1l61.1,0.7l42.9,33.7l-6.9,7.6l-49.6-15.1l-5.8,11.1
					L343.7,81l-22.4,33.8l0,0l-50.8,2.1l-29,41.3l-67.2,9.6l-89.5-14.5l-23,10.7l36.9,8.5l-18.9,12.3l-69.5-0.4l-9.9,12.7l95.4,15.5
					l35.8,62.2l56.2,18.1L228,287l2.2-15.9l13.8-3.4l23.1,20.5l49.8,44.2l78.8,25l78.4,24.9l79.1,65L844.8,687l28-78.8h196.5l22.3-20.3
					l-17.3-36.5l16.1-93.5l-52.2-58.8l136.2,28.8l75.5,16l52.1-47.4L1215.8,342.2z M723.8,455.5l9.9-59.9l66.3,28.2l13.8-43.3L747,354.9
					l-9.1-48.2l28.9-38.8l-40-47.8l-37.8,7.5l-30.2-12.4l-19.4,16.7l28.4,10.3l-15.4,19.5l-123.1-20l-68.5-11.1l-1.1-24l65.2,9.6l54.2,8
				l77.7-38.2l112.5,19.6l115.1,20.3l43.9,49.8l41.3,46.4l-38.8,0.1l-39.9-52l-39.7-5.9L951.3,556L723.8,455.5z"/>
			</svg>
			<svg class="map-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				width="1228.16px" height="648.03px" viewBox="0 0 1268.3 669.4" 
				:preserveAspectRatio="$device.isMobile ? 'xMidYMid slice' : ''"
				style="overflow:visible;enable-background:new 0 0 1228.16 648.03;" xml:space="preserve">
				<!--<defs>
					<filter id="shadow-o-city" x="0" y="0" width="100%" height="100%">
						<feOffset result="offOut" in="SourceGraphic" dx="0" dy="2" />
						<feGaussianBlur result="blurOut" in="offOut" stdDeviation="6" />
						<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
						<feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
					</filter>
				</defs>-->
				<polygon id="o-adygeya" points="691.91,373.11 682.55,429.61 897.21,524.43 802.68,249.05 840.18,254.58 
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
							<polygon id="kushchevskiy" class="o-city" points="560,40.23 625.29,40.74 632.27,25.74 683.47,27.13 687.51,9.04 560.07,3.99"/>
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
						<path class="o-kanevskoy-stroke o-stroke" v-show="!isRegionOpened" d="M736.3,54.7L707.9,28l-24-0.7l4-18.1L560.5,4.2l-0.1,19.2l-56.7-2.7l-7.7-17.9l-55.8-2.7
							l-6.6,5.2L451.8,7L447,18.7l-37.2-1l-2.7-5.6l-75.6,9.3l5.2,16.1l57.7,0.6L434.8,70l-6.5,7.2l-46.8-14.2L376,73.4l-51.7,3.1
							l-21.2,31.9l144.8-3.1l149.4-3.2l5.6-12l142.3-8.3L736.3,54.7z"/>
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
						</g><path class="o-tihoreckiy-stroke o-stroke" v-show="!isRegionOpened" d="M908.6,116.9l13.6-12.8l-91.7-47.7l-44.7-0.9l-49.4-1l8.9,27l-77.8,4.5L602.9,90l-5.6,12
							l-67.4,1.5l-1.1,42.5l44.6,21.4L725.9,194l51.8-18.7l-9.7-28.4l100-0.3l-12.7-32.2l7.3,0.4L908.6,116.9z M797.5,111.6"/>
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
						<polygon class="o-krasnoarmeyskiy-stroke o-stroke" v-show="!isRegionOpened" points="530,103.4 447.9,105.2 358.4,107.1 353.2,117 320.2,180 334.9,180.3 
							433.7,194.9 495.3,203.9 527.6,192.7 528.3,167.3 492.7,167.3 482.8,153.5 528.8,145.9 "/>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-krasnodarskiy" class="link-to-o">
					<g class="o-cont" id="o-krasnodarskiy" @click.prevent="onDesClick('/region/o-krasnodarskiy/krasnodar')">
						<polygon id="krasnodar" class="o-city" points="572.99,167.05 528.38,145.64 482.32,153.28 492.25,167.05 527.81,167.05 
						527.12,192.41 494.8,203.69 545.93,211.22 619.26,175.19 "/>
						<polygon class="o-krasnodarskiy-stroke o-stroke" v-show="!isRegionOpened" points="573.4,167.3 528.8,145.9 482.8,153.5 492.7,167.3 528.3,167.3 527.6,192.7 
							495.3,203.9 546.4,211.5 619.7,175.4 "/>
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
							<polygon id="temryukskiy" class="o-city" points="236.24,178.17 227.42,149.06 164.01,158.14 79.53,144.42 57.8,154.53 
							92.64,162.59 74.85,174.2 9.3,173.78 0,185.81 90.01,200.41"/>
						</g>
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-slavyanskiy/anapa')">
							<polygon id="anapa" class="o-city" points="191.62,184.95 90.01,200.41 123.83,259.15 183.11,209.7 	"/>
						</g>
						<polygon class="o-slavyanskiy-stroke o-stroke"  v-show="!isRegionOpened" points="334.9,180.3 320.2,180 358.4,107.1 303.2,108.3 255.2,110.3 227.9,149.3 
							164.5,158.4 80,144.7 58.3,154.8 93.1,162.8 75.3,174.5 9.8,174 0.5,186.1 90.5,200.7 124.3,259.4 183.6,210 223.2,214 266.3,256.2 
							349,279.4 408.2,191.1 "/>
					</g>
				</nuxt-link>
				<nuxt-link to="/region/o-tuapsinskiy" class="link-to-o">
					<g class="o-cont" id="o-tuapsinskiy">
						<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tuapsinskiy/goryachiy-klyuch')" >
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
						<polygon class="o-tuapsinskiy-stroke o-stroke" v-show="!isRegionOpened" points="546.1,334.9 615.6,246.8 499.5,228 434.8,217.5 433.7,194.9 408.2,191.1 
							349,279.4 349,279.4 266.3,256.2 223.2,214 183.6,210 124.3,259.4 177.3,276.5 215.2,270.9 217.2,255.9 230.2,252.6 252,271.9 
							299,313.6 373.3,337.2 447.3,360.7 521.9,422 597,391.9 621,356 "/>
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
						<path class="o-armavirskiy-stroke o-stroke" v-show="!isRegionOpened" d="M1147.2,322.9l11.4-9.9l-88.4-41.6l17.6-11.3l-9.7-45.5h-46.9l-51-40.7l-60.1,0.4
							L868,146.6l-100,0.3l9.7,28.4L725.9,194l108.6,19.1l41.4,46.9l39,43.8l-36.6,0.1l-37.7-49.1l-37.5-5.5l94.5,275.4l111.4,49.2
							l21.1-19.2l-16.3-34.4l15.2-88.3l-49.3-55.5l128.5,27.2l71.2,15.1l49.2-44.7L1147.2,322.9z"/>
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
						<polygon class="o-sochinskiy-stroke o-stroke" v-show="!isRegionOpened" points="683,429.9 692.4,373.4 754.9,400 768,359.2 704.9,334.9 696.3,289.5 723.6,252.8 
							685.8,207.7 650.1,214.7 621.7,203 603.4,218.8 630.1,228.5 597.8,269.5 546.1,334.9 621,356 597,391.9 521.9,422 797.2,648.3 
							823.7,573.9 1009,573.9 "/>
					</g>
				</nuxt-link>
			</svg>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, useContext, useRouter, } from '@nuxtjs/composition-api'

import { useMap, } from '@/composition/map'
import { useDevice, } from '@/composition/device'

import MapLabels from './MapLabels.vue'

export default defineComponent(
  {
    name:'TheMap',
    components: { 
	  MapLabels, 
    },
    setup()
     {
        const { route, } = useContext()
        const { mapSvg, zoomTo, setTo, resetViewBox, isRegionOpened, } = useMap()
		const { isMobile,} = useDevice()
        onMounted(() => {
            const slug = route.value.params.slug
            mapSvg.value = document.querySelector('.map-svg') as SVGAElement
            if (slug) {
                if (route.value.name === 'region-slug') {
                    setTo(slug, isMobile)
                }
            }
        })
        const  isMinusOne = ref(false)
        watch(route, () => {
            const slug = route.value.params.slug
            if (slug) {
                if (route.value.name === 'region-slug') {
                    zoomTo(slug, isMobile)
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
	stroke-dasharray: 1px;
	transition: all .15s linear;
}
.link-to-o:hover .o-city, .link-to-o-hover  {
	fill: #2c9aff;
	stroke: rgba(255,255,255, .4);
}

.o-stroke {
	stroke: #9fd1ff;
	stroke-width: 1px;
	fill: none;
	transition: stroke .15s linear;
}
.link-to-o:hover .o-stroke {
	stroke: #2c9aff;
}

.o-city-opened {
	fill: #eef4fd;
	stroke: #9fd1ff;
	stroke-dasharray: 0;
	transition: all .15s linear;
}
.o-city-opened:hover {
	fill: #2c9aff;
	stroke: #2c9aff;
}

.map-shadow-stroke {
	fill: none;
	stroke: #9fd1ff;
	stroke-width: 1px;
}
.map-shadow-wrapper {
	position: absolute;
}
.map-shadow-wrapper-0 {
	opacity: .2;
	margin-top: .8rem;
	margin-left: -3.7rem;
	z-index: -2;
}
.map-shadow-wrapper-1 {
	opacity: .4;
	margin-left: -2rem;
	margin-top: .4rem;
	z-index: -1;
}

.map-svg #o-adygeya {
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

/*.link-to-o>.o-cont {
	transition: transform .2s ease-in-out;
}
.link-to-o:hover>.o-cont {
	transform: translateY(-1.2rem);
}*/

@media (max-width: 460px) {
	.map-cont {
		grid-column: 1/7;
		margin-top: 1.2rem;
		margin-bottom: -8rem;
		min-height: 60vh;
	}
	.map-svg {
		
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 48vh;
	}
}
@media (min-width: 1460px) {
	.map-cont {
		grid-column: 3/7;
	}
}

</style>