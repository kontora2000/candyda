<template>
	<div class="map-labels">
		<div class="map-labels-wrapper map-labels-slavyanskiy">
			<DistrictLabel slug="anapa" region="slavyanskiy" >Анапа</DistrictLabel>
			<DistrictLabel slug="krymskiy" region="slavyanskiy">Крымский район</DistrictLabel>
			<DistrictLabel slug="temryukskiy" region="slavyanskiy">Темрюкский район</DistrictLabel>
			<DistrictLabel slug="abinskiy" region="slavyanskiy">Абинский район</DistrictLabel>
			<DistrictLabel slug="slavyanskiy" region="slavyanskiy">Славянский район</DistrictLabel>
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
			<RegionLabel  slug="krasnoarmeyskiy"  :number="47">Красноармейский</RegionLabel>
			<RegionLabel  slug="krasnodarskiy"  :number="46">Краснодарский</RegionLabel>
			<RegionLabel  slug="slavyanskiy"   :number="48">Славянский</RegionLabel>
			<RegionLabel  slug="tuapsinskiy"   :number="49">Туапсинский</RegionLabel>
			<RegionLabel  slug="sochinskiy"   :number="50">Сочинский</RegionLabel>
			<RegionLabel  slug="tihoretskiy"   :number="51">Тихорецкий</RegionLabel>
			<RegionLabel  slug="armavirskiy"   :number="52">Армавирский</RegionLabel>
			<RegionLabel  slug="kanevskoy"   :number="53">Каневской</RegionLabel>
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
	display: none;
}

.map-label-area-emblem {
	display: inline-flex;
	width: 2.8rem;
	height: 3.2rem;
	margin: .2rem .6rem 0 0;
	position: relative;
}

</style>