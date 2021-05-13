<template>
	<div class="map-labels">
		<div class="map-labels-wrapper map-labels-slavyanskiy">
			<DistrictLabel slug="anapa" region="slavyanskiy" :top="300" :left="420" :mobile-top="200" :mobile-left="20">Анапа</DistrictLabel>
			<DistrictLabel slug="krymskiy" region="slavyanskiy" :top="256" :left="720" :mobile-top="160" :mobile-left="140">Крымский район</DistrictLabel>
			<DistrictLabel slug="temryukskiy" region="slavyanskiy" :top="180" :left="400" :mobile-top="108" :mobile-left="0">Темрюкский район</DistrictLabel>
			<DistrictLabel slug="abinskiy" region="slavyanskiy" :top="332" :left="1012" :mobile-top="244" :mobile-left="212">Абинский район</DistrictLabel>
			<DistrictLabel slug="slavyanskiy" region="slavyanskiy" :top="108" :left="832" :mobile-top="92" :mobile-left="200">Славянский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-tuapsinskiy">
			<DistrictLabel slug="novorossiysk" region="tuapsinskiy" :top="100" :left="180">Новороссийск</DistrictLabel>
			<DistrictLabel slug="gelendzhik" region="tuapsinskiy" :top="220" :left="480">Геленджик</DistrictLabel>
			<DistrictLabel slug="tuapsinskiy" region="tuapsinskiy" :top="340" :left="880">Туапскинский район</DistrictLabel>
			<DistrictLabel slug="goryachiy-klyuch" region="tuapsinskiy" :top="180" :left="960">Горячий Ключ</DistrictLabel>
			<DistrictLabel slug="severskiy" region="tuapsinskiy" :top="140" :left="700">Северский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-sochinskiy">
			<DistrictLabel slug="sochi" region="sochinskiy" :top="356" :left="400">Сочи</DistrictLabel>
			<DistrictLabel slug="belorechenskiy" region="sochinskiy" :top="44" :left="400">Белореченский район</DistrictLabel>
			<DistrictLabel slug="apsheronskiy" region="sochinskiy" :top="200" :left="380">Апшеронский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-armavirskiy">
			<DistrictLabel slug="armavir" region="armavirskiy" :top="200" :left="680">Армавир</DistrictLabel>
			<DistrictLabel slug="mostovskiy" region="armavirskiy" :top="410" :left="560">Мостовский район</DistrictLabel>
			<DistrictLabel slug="labinskiy" region="armavirskiy" :top="340" :left="700">Лабинский район</DistrictLabel>
			<DistrictLabel slug="otradnenskiy" region="armavirskiy" :top="400" :left="940">Отрадненский район</DistrictLabel>
			<DistrictLabel slug="uspenskiy" region="armavirskiy" :top="232" :left="820">Успенский район</DistrictLabel>
			<DistrictLabel slug="novokubanskiy" region="armavirskiy" :top="140" :left="660">Новокубанский район</DistrictLabel>
			<DistrictLabel slug="kurganinskiy" region="armavirskiy" :top="152" :left="440">Курганинский район</DistrictLabel>
			<DistrictLabel slug="gulkevichskiy" region="armavirskiy" :top="100" :left="488">Гулькевичский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-tihoretskiy">
			<DistrictLabel slug="tbilisskiy" region="tihoretskiy" :top="320" :left="660">Тбилисский район</DistrictLabel>
			<DistrictLabel slug="ust-labinskiy" region="tihoretskiy" :top="356" :left="416"><nobr>Усть-Лабинский</nobr> район</DistrictLabel>
			<DistrictLabel slug="kavkazskiy" region="tihoretskiy" :top="252" :left="860">Кавказский район</DistrictLabel>
			<DistrictLabel slug="korenovskiy" region="tihoretskiy" :top="252" :left="120">Кореновский район</DistrictLabel>
			<DistrictLabel slug="vyselkovskiy" region="tihoretskiy" :top="200" :left="400">Выселковский район</DistrictLabel>
			<DistrictLabel slug="tihoreckiy" region="tihoretskiy" :top="168" :left="640">Тихорецкий район</DistrictLabel>
			<DistrictLabel slug="novopokrovskiy" region="tihoretskiy" :top="96" :left="820">Новопокровский район</DistrictLabel>
			<DistrictLabel slug="beloglinskiy" region="tihoretskiy" :top="140" :left="1060">Белоглинский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-krasnoarmeyskiy">
			<DistrictLabel slug="dinskoy" region="krasnoarmeyskiy" :top="264" :left="800">Динской район</DistrictLabel>
			<DistrictLabel slug="krasnoarmeyskiy" region="krasnoarmeyskiy" :top="220" :left="440">Красноармейский район</DistrictLabel>
			<DistrictLabel slug="kalininskiy" region="krasnoarmeyskiy" :top="132" :left="620">Калининский район</DistrictLabel>
			<DistrictLabel slug="timashevskiy" region="krasnoarmeyskiy" :top="112" :left="840">Тимашевский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-kanevskoy">
			<DistrictLabel slug="pavlovskiy" region="kanevskoy" :top="276" :left="980">Павловский район</DistrictLabel>
			<DistrictLabel slug="krylovskiy" region="kanevskoy" :top="188" :left="1020">Крыловский район</DistrictLabel>
			<DistrictLabel slug="kushchevskiy" region="kanevskoy" :top="124" :left="836">Кущевский район</DistrictLabel>
			<DistrictLabel slug="bryuhoveckiy" region="kanevskoy" :top="344" :left="580">Брюховецкий район</DistrictLabel>
			<DistrictLabel slug="kanevskoy" region="kanevskoy" :top="264" :left="500">Каневской район</DistrictLabel>
			<DistrictLabel slug="leningradskiy" region="kanevskoy" :top="228" :left="728">Ленинградский район</DistrictLabel>
			<DistrictLabel slug="starominskiy" region="kanevskoy" :top="164" :left="600">Староминский район</DistrictLabel>
			<DistrictLabel slug="primorsko-ahtarskiy" region="kanevskoy" :top="320" :left="172"><nobr>Приморско–Ахтарский</nobr> район</DistrictLabel>
			<DistrictLabel slug="eyskiy" region="kanevskoy" :top="156" :left="272">Ейский район</DistrictLabel>
			<DistrictLabel slug="shcherbinovskiy" region="kanevskoy" :top="128" :left="452">Щербиновский район</DistrictLabel>
		</div>
		<div class="map-lables-wrapper region-labels">
			<RegionLabel  slug="krasnoarmeyskiy" :top="68" :left="356" :mobile-top="60" :mobile-left="0" :number="47">Красноармейский</RegionLabel>
			<RegionLabel  slug="krasnodarskiy" :top="124" :left="480" :mobile-top="40" :mobile-left="80" :number="46">Краснодарский</RegionLabel>
			<RegionLabel  slug="slavyanskiy" :top="120" :left="160" :mobile-top="160" :mobile-left="0" :number="48">Славянский</RegionLabel>
			<RegionLabel  slug="tuapsinskiy" :top="240" :left="400" :mobile-top="240" :mobile-left="80" :number="49">Туапсинский</RegionLabel>
			<RegionLabel  slug="sochinskiy" :top="292" :left="592" :mobile-top="300" :mobile-left="200" :number="50">Сочинский</RegionLabel>
			<RegionLabel  slug="tihoretskiy" :top="68" :left="672" :mobile-top="40" :mobile-left="230" :number="51">Тихорецкий</RegionLabel>
			<RegionLabel  slug="armavirskiy" :top="228" :left="924" :mobile-top="200" :mobile-left="218" :number="52">Армавирский</RegionLabel>
			<RegionLabel  slug="kanevskoy" :top="8" :left="520" :mobile-top="-20" :mobile-left="140" :number="53">Каневской</RegionLabel>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'
import DistrictLabel from './DistrictLabel.vue'
import RegionLabel from './RegionLabel.vue'

export default defineComponent({
  components: {
        DistrictLabel, 
        RegionLabel 
    },
    name: 'TheLabels',
})
</script>
<style scoped>
.map-labels {
	position: absolute;
	z-index: 1;
}

.map-label-area-emblem {
	display: inline-flex;
	width: 2.8rem;
	height: 3.2rem;
	margin: .2rem .6rem 0 0;
	position: relative;
}
</style>