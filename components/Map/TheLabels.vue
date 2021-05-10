<template>
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
				<MapLabel slug="ust-labinskiy" region="tihoretskiy" :top="356" :left="416"><nobr>Усть-Лабинский</nobr> район</MapLabel>
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
				<MapLabel slug="primorsko-ahtarskiy" region="kanevskoy" :top="320" :left="172"><nobr>Приморско–Ахтарский</nobr> район</MapLabel>
				<MapLabel slug="eyskiy" region="kanevskoy" :top="156" :left="272">Ейский район</MapLabel>
				<MapLabel slug="shcherbinovskiy" region="kanevskoy" :top="128" :left="452">Щербиновский район</MapLabel>
			</div>
			<div class="map-lables-wrapper region-labels">
				<RegionLabel  slug="krasnoarmeyskiy" :top="320" :left="320" :number="47">Красноармейский</RegionLabel>
			</div>
		</div>
</template>
<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'
import MapLabel from './MapLabel.vue'
import RegionLabel from './RegionLabel.vue'

export default defineComponent({
  components: {
        MapLabel, 
        RegionLabel 
    },
    name: 'TheLabels',
})
</script>
<style scoped>
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