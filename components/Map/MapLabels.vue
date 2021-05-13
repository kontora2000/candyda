<template>
	<div class="map-labels">
		<div class="map-labels-wrapper map-labels-slavyanskiy">
			<DistrictLabel slug="anapa" region="slavyanskiy"  :mobile-top="200" :mobile-left="20">Анапа</DistrictLabel>
			<DistrictLabel slug="krymskiy" region="slavyanskiy"  :mobile-top="160" :mobile-left="140">Крымский район</DistrictLabel>
			<DistrictLabel slug="temryukskiy" region="slavyanskiy"  :mobile-top="108" :mobile-left="0">Темрюкский район</DistrictLabel>
			<DistrictLabel slug="abinskiy" region="slavyanskiy"  :mobile-top="244" :mobile-left="212">Абинский район</DistrictLabel>
			<DistrictLabel slug="slavyanskiy" region="slavyanskiy"  :mobile-top="92" :mobile-left="200">Славянский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-tuapsinskiy">
			<DistrictLabel slug="novorossiysk" region="tuapsinskiy" >Новороссийск</DistrictLabel>
			<DistrictLabel slug="gelendzhik" region="tuapsinskiy" >Геленджик</DistrictLabel>
			<DistrictLabel slug="tuapsinskiy" region="tuapsinskiy" >Туапскинский район</DistrictLabel>
			<DistrictLabel slug="goryachiy-klyuch" region="tuapsinskiy" >Горячий Ключ</DistrictLabel>
			<DistrictLabel slug="severskiy" region="tuapsinskiy" >Северский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-sochinskiy">
			<DistrictLabel slug="sochi" region="sochinskiy" >Сочи</DistrictLabel>
			<DistrictLabel slug="belorechenskiy" region="sochinskiy" >Белореченский район</DistrictLabel>
			<DistrictLabel slug="apsheronskiy" region="sochinskiy" >Апшеронский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-armavirskiy">
			<DistrictLabel slug="armavir" region="armavirskiy" >Армавир</DistrictLabel>
			<DistrictLabel slug="mostovskiy" region="armavirskiy" >Мостовский район</DistrictLabel>
			<DistrictLabel slug="labinskiy" region="armavirskiy" >Лабинский район</DistrictLabel>
			<DistrictLabel slug="otradnenskiy" region="armavirskiy" >Отрадненский район</DistrictLabel>
			<DistrictLabel slug="uspenskiy" region="armavirskiy" >Успенский район</DistrictLabel>
			<DistrictLabel slug="novokubanskiy" region="armavirskiy" >Новокубанский район</DistrictLabel>
			<DistrictLabel slug="kurganinskiy" region="armavirskiy" >Курганинский район</DistrictLabel>
			<DistrictLabel slug="gulkevichskiy" region="armavirskiy" >Гулькевичский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-tihoretskiy">
			<DistrictLabel slug="tbilisskiy" region="tihoretskiy" >Тбилисский район</DistrictLabel>
			<DistrictLabel slug="ust-labinskiy" region="tihoretskiy" ><nobr>Усть-Лабинский</nobr> район</DistrictLabel>
			<DistrictLabel slug="kavkazskiy" region="tihoretskiy" >Кавказский район</DistrictLabel>
			<DistrictLabel slug="korenovskiy" region="tihoretskiy" >Кореновский район</DistrictLabel>
			<DistrictLabel slug="vyselkovskiy" region="tihoretskiy" >Выселковский район</DistrictLabel>
			<DistrictLabel slug="tihoreckiy" region="tihoretskiy" >Тихорецкий район</DistrictLabel>
			<DistrictLabel slug="novopokrovskiy" region="tihoretskiy" >Новопокровский район</DistrictLabel>
			<DistrictLabel slug="beloglinskiy" region="tihoretskiy" >Белоглинский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-krasnoarmeyskiy">
			<DistrictLabel slug="dinskoy" region="krasnoarmeyskiy" >Динской район</DistrictLabel>
			<DistrictLabel slug="krasnoarmeyskiy" region="krasnoarmeyskiy" >Красноармейский район</DistrictLabel>
			<DistrictLabel slug="kalininskiy" region="krasnoarmeyskiy" >Калининский район</DistrictLabel>
			<DistrictLabel slug="timashevskiy" region="krasnoarmeyskiy" >Тимашевский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-kanevskoy">
			<DistrictLabel slug="pavlovskiy" region="kanevskoy" >Павловский район</DistrictLabel>
			<DistrictLabel slug="krylovskiy" region="kanevskoy" >Крыловский район</DistrictLabel>
			<DistrictLabel slug="kushchevskiy" region="kanevskoy" >Кущевский район</DistrictLabel>
			<DistrictLabel slug="bryuhoveckiy" region="kanevskoy" >Брюховецкий район</DistrictLabel>
			<DistrictLabel slug="kanevskoy" region="kanevskoy" >Каневской район</DistrictLabel>
			<DistrictLabel slug="leningradskiy" region="kanevskoy" >Ленинградский район</DistrictLabel>
			<DistrictLabel slug="starominskiy" region="kanevskoy" >Староминский район</DistrictLabel>
			<DistrictLabel slug="primorsko-ahtarskiy" region="kanevskoy" ><nobr>Приморско–Ахтарский</nobr> район</DistrictLabel>
			<DistrictLabel slug="eyskiy" region="kanevskoy" >Ейский район</DistrictLabel>
			<DistrictLabel slug="shcherbinovskiy" region="kanevskoy" >Щербиновский район</DistrictLabel>
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