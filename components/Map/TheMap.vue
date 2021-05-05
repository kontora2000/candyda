<template>
	<div class="map-cont">
		<div class="map-labels">
			<div class="map-labels-wrapper map-labels-slavyanskiy">
				<MapLabel slug="anapa" region="slavyanskiy" :top="300" :left="420">Анапа</MapLabel>
				<MapLabel slug="krymskiy" region="slavyanskiy" :top="256" :left="720">Крымский район</MapLabel>
				<MapLabel slug="temryukskiy" region="slavyanskiy" :top="180" :left="400">Темрюкский район</MapLabel>
				<MapLabel slug="abinskiy" region="slavyanskiy" :top="332" :left="1012">Абинский район</MapLabel>
				<MapLabel slug="slavyanskiy" region="slavyanskiy" :top="108" :left="832">Славянский район</MapLabel>
			</div>
			<div class="map-labels-wrapper map-labels-tuapsinskiy">
				<MapLabel slug="novorossiysk" region="tuapsinskiy" :top="100" :left="180">Новороссийск</MapLabel>
				<MapLabel slug="gelendzhik" region="tuapsinskiy" :top="220" :left="480">Геленджик</MapLabel>
				<MapLabel slug="tuapsinskiy" region="tuapsinskiy" :top="340" :left="880">Туапскинский район</MapLabel>
				<MapLabel slug="goryachiy-klyuch" region="tuapsinskiy" :top="180" :left="960">Горячий Ключ</MapLabel>
				<MapLabel slug="severskiy" region="tuapsinskiy" :top="140" :left="700">Северский район</MapLabel>
			</div>
			<div class="map-labels-wrapper map-labels-sochinskiy">
				<MapLabel slug="sochi" region="sochinskiy" :top="380" :left="520">Сочи</MapLabel>
				<MapLabel slug="belorechenskiy" region="sochinskiy" :top="80" :left="480">Белореченский район</MapLabel>
				<MapLabel slug="apsheronskiy" region="sochinskiy" :top="206" :left="480">Апшеронский район</MapLabel>
			</div>
			<div class="map-labels-wrapper map-labels-armavirskiy">
				<MapLabel slug="armavir" region="armavirskiy" :top="200" :left="680">Армавир</MapLabel>
				<MapLabel slug="mostovskiy" region="armavirskiy" :top="410" :left="560">Мостовский район</MapLabel>
				<MapLabel slug="labinskiy" region="armavirskiy" :top="340" :left="700">Лабинский район</MapLabel>
				<MapLabel slug="otradnenskiy" region="armavirskiy" :top="400" :left="940">Отрадненский район</MapLabel>
				<MapLabel slug="uspenskiy" region="armavirskiy" :top="232" :left="820">Успенский район</MapLabel>
				<MapLabel slug="novokubanskiy" region="armavirskiy" :top="140" :left="660">Новокубанский район</MapLabel>
				<MapLabel slug="kurganinskiy" region="armavirskiy" :top="152" :left="440">Курганинский район</MapLabel>
				<MapLabel slug="gulkevichskiy" region="armavirskiy" :top="100" :left="488">Гулькевичский район</MapLabel>
			</div>
			<div class="map-labels-wrapper map-labels-tihoretskiy">
				<MapLabel slug="tbilisskiy" region="tihoretskiy" :top="320" :left="660">Тбилисский район</MapLabel>
				<MapLabel slug="ust-labinskiy" region="tihoretskiy" :top="356" :left="416">Усть-Лабинский район</MapLabel>
				<MapLabel slug="kavkazskiy" region="tihoretskiy" :top="252" :left="860">Кавказский район</MapLabel>
				<MapLabel slug="korenovskiy" region="tihoretskiy" :top="252" :left="120">Кореновский район</MapLabel>
				<MapLabel slug="vyselkovskiy" region="tihoretskiy" :top="200" :left="400">Выселковский район</MapLabel>
				<MapLabel slug="tihoreckiy" region="tihoretskiy" :top="168" :left="640">Тихорецкий район</MapLabel>
				<MapLabel slug="novopokrovskiy" region="tihoretskiy" :top="96" :left="820">Новопокровский район</MapLabel>
				<MapLabel slug="beloglinskiy" region="tihoretskiy" :top="140" :left="1060">Белоглинский район</MapLabel>
			</div>
			<div class="map-labels-wrapper map-labels-krasnoarmeyskiy">
				<MapLabel slug="dinskoy" region="krasnoarmeyskiy" :top="264" :left="800">Динской район</MapLabel>
				<MapLabel slug="krasnoarmeyskiy" region="krasnoarmeyskiy" :top="220" :left="440">Красноармейский район</MapLabel>
				<MapLabel slug="kalininskiy" region="krasnoarmeyskiy" :top="132" :left="620">Калининский район</MapLabel>
				<MapLabel slug="timashevskiy" region="krasnoarmeyskiy" :top="112" :left="840">Тимашевский район</MapLabel>
			</div>
			<div class="map-labels-wrapper map-labels-kanevskoy">
				<MapLabel slug="pavlovskiy" region="kanevskoy" :top="276" :left="980">Павловский район</MapLabel>
				<MapLabel slug="krylovskiy" region="kanevskoy" :top="188" :left="1020">Крыловский район</MapLabel>
				<MapLabel slug="kushchevskiy" region="kanevskoy" :top="124" :left="836">Кущевский район</MapLabel>
				<MapLabel slug="bryuhoveckiy" region="kanevskoy" :top="344" :left="580">Брюховецкий район</MapLabel>
				<MapLabel slug="kanevskoy" region="kanevskoy" :top="264" :left="500">Каневской район</MapLabel>
				<MapLabel slug="leningradskiy" region="kanevskoy" :top="228" :left="728">Ленинградский район</MapLabel>
				<MapLabel slug="starominskiy" region="kanevskoy" :top="164" :left="600">Староминский район</MapLabel>
				<MapLabel slug="primorsko-ahtarskiy" region="kanevskoy" :top="320" :left="172">Приморско–Ахтарский район</MapLabel>
				<MapLabel slug="eyskiy" region="kanevskoy" :top="156" :left="272">Ейский район</MapLabel>
				<MapLabel slug="shcherbinovskiy" region="kanevskoy" :top="128" :left="452">Щербиновский район</MapLabel>
			</div>
		</div>
		<svg class="map-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			width="1228.16px" height="648.03px" viewBox="0 0 1228.16 648.03" 
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
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/krylovskiy')">
						<polygon id="krylovskiy" class="o-city" points="619.95,52.21 735.87,54.44 707.46,27.78 632.27,25.74"/>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/sherbinovskiy')">
						<polygon id="sherbinovskiy" class="o-city" points="437.92,39.28 481.5,39.62 503.29,20.55 495.63,2.68 439.79,0 433.16,5.23 451.37,6.77"/>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/kushevskiy')">
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
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/primorsko-akhtarskiy')">
						<polygon id="primorsko-akhtarskiy" class="o-city" points="465.2,79.76 434.34,69.73 427.85,76.89 381.03,62.69 375.56,73.13 
						323.9,76.19 302.72,108.07 447.47,104.95"/>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-kanevskoy/bruhovetskiy')">
						<polygon id="bruhovetskiy" class="o-city" points="596.9,101.73 602.48,89.73 465.2,79.76 447.47,104.95"/>
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
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }" @click.prevent="onDesClick('/region/o-tihoretskiy/beloglinskiy')">
						<polygon id="beloglinskiy" class="o-city" points="862.1,114.5 908.1,116.7 921.7,103.9 830,56.3 785.3,55.4"/>
					</g>
					<g class="o-city-cont" :class="{ 'city-cont-hover': isRegionOpened }"  @click.prevent="onDesClick('/region/o-tihoretskiy/tihoretskiy')">
						<polygon id="tihoretskiy" class="o-city" points="718.78,130.8 797.02,111.35 763.07,80.34 667,85.96"/>
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
import MapLabel from './MapLabel.vue'

export default defineComponent(
  {
    name:'TheMap',
    components: { 
      MapLabel, 
    },
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

.map-label-area-emblem {
	display: inline-flex;
	width: 2.8rem;
	height: 3.2rem;
	margin: .2rem .6rem 0 0;
	position: relative;
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