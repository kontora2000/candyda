<template>
	<div class="map-labels">
		<div class="map-labels-wrapper map-labels-slavyanskiy">
			<DistrictLabel :top="-20" :mobile-top="8" :mobile-left="-16" slug="anapa" region="slavyanskiy" >Анапа</DistrictLabel>
			<DistrictLabel :top="-48" :left="-40" :mobile-top="-8" :mobile-left="-32" slug="krymskiy" region="slavyanskiy">Крымский район</DistrictLabel>
			<DistrictLabel :mobile-top="12" slug="temryukskiy" region="slavyanskiy">Темрюкский район</DistrictLabel>
			<DistrictLabel :top="-40" :mobile-top="16" :mobile-left="-44" slug="abinskiy" region="slavyanskiy">Абинский район</DistrictLabel>
			<DistrictLabel :left="-40" :mobile-top="8" :mobile-left="-20" slug="slavyanskiy" region="slavyanskiy">Славянский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-tuapsinskiy">
			<DistrictLabel :mobile-top="12" :mobile-left="16" slug="novorossiysk" region="tuapsinskiy">Новороссийск</DistrictLabel>
			<DistrictLabel :mobile-top="16" :mobile-left="-24" slug="gelendzhik" region="tuapsinskiy">Геленджик</DistrictLabel>
			<DistrictLabel :top="-28" :left="-80" :mobile-top="4" :mobile-left="-52" slug="tuapsinskiy" region="tuapsinskiy">Туапскинский район</DistrictLabel>
			<DistrictLabel :mobile-top="16" :mobile-left="-16" slug="goryachiy-klyuch" region="tuapsinskiy" >Горячий Ключ</DistrictLabel>
			<DistrictLabel :mobile-top="8" :mobile-left="-20" slug="severskiy" region="tuapsinskiy">Северский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-sochinskiy">
			<DistrictLabel :top="-92" :left="-180" :mobile-top="-32" :mobile-left="-100" slug="sochi" region="sochinskiy">Сочи</DistrictLabel>
			<DistrictLabel :left="-12" :mobile-top="20" slug="belorechenskiy" region="sochinskiy">Белореченский район</DistrictLabel>
			<DistrictLabel :top="-24" :left="-20" slug="apsheronskiy" region="sochinskiy">Апшеронский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-armavirskiy">
			<DistrictLabel :top="-80" :left="-92" :mobile-top="-20" :mobile-left="-44" slug="labinskiy" region="armavirskiy">Лабинский район</DistrictLabel>
			<DistrictLabel :top="-172" :left="-112" :mobile-top="-80" :mobile-left="-72" slug="mostovskiy" region="armavirskiy">Мостовский район</DistrictLabel>
			<DistrictLabel :top="-60" :left="-60" :mobile-top="0" :mobile-left="-72" slug="otradnenskiy" region="armavirskiy">Отрадненский район</DistrictLabel>
			<DistrictLabel :top="-8" :left="12" :mobile-top="24" :mobile-left="0" slug="uspenskiy" region="armavirskiy">Успенский район</DistrictLabel>
			<DistrictLabel :top="-100" :left="-40" :mobile-top="-44" :mobile-left="-4" slug="novokubanskiy" region="armavirskiy">Новокубанский район</DistrictLabel>
			<DistrictLabel :top="-12" :left="-8" :mobile-top="12" :mobile-left="-8" slug="armavir" region="armavirskiy">Армавир</DistrictLabel>
			<DistrictLabel :top="-28" :left="-32" :mobile-top="-4" :mobile-left="-12" slug="kurganinskiy" region="armavirskiy">Курганинский район</DistrictLabel>
			<DistrictLabel :top="-20" :left="-44" :mobile-top="2" :mobile-left="-20" slug="gulkevichskiy" region="armavirskiy">Гулькевичский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-tihoretskiy">
			<DistrictLabel :top="-20" :mobile-top="16" :mobile-left="-8" slug="tbilisskiy" region="tihoretskiy" >Тбилисский район</DistrictLabel>
			<DistrictLabel :top="-12" :mobile-top="28" :mobile-left="4" slug="ust-labinskiy" region="tihoretskiy" ><nobr>Усть-Лабинский</nobr> район</DistrictLabel>
			<DistrictLabel :mobile-top="20" :mobile-left="-36" slug="kavkazskiy" region="tihoretskiy" >Кавказский район</DistrictLabel>
			<DistrictLabel :mobile-top="28" :mobile-left="52" slug="korenovskiy" region="tihoretskiy" >Кореновский район</DistrictLabel>
			<DistrictLabel :mobile-top="0" :mobile-left="-36" slug="vyselkovskiy" region="tihoretskiy" >Выселковский район</DistrictLabel>
			<DistrictLabel :mobile-top="20" :mobile-left="-8" slug="tihoreckiy" region="tihoretskiy" >Тихорецкий район</DistrictLabel>
			<DistrictLabel :left="-48" :mobile-top="14" :mobile-left="-32" slug="novopokrovskiy" region="tihoretskiy" >Новопокровский район</DistrictLabel>
			<DistrictLabel :top="-5" :mobile-top="-32" :mobile-left="-96" slug="beloglinskiy" region="tihoretskiy" >Белоглинский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-krasnoarmeyskiy">
			<DistrictLabel :top="-8" :left="32" :mobile-top="12" :mobile-left="8" slug="dinskoy" region="krasnoarmeyskiy" >Динской район</DistrictLabel>
			<DistrictLabel :top="20" :left="-40" :mobile-top="20" :mobile-left="-20" slug="krasnoarmeyskiy" region="krasnoarmeyskiy" >Красноармейский район</DistrictLabel>
			<DistrictLabel :top="-8" :left="-12" :mobile-left="-12" slug="kalininskiy" region="krasnoarmeyskiy" >Калининский район</DistrictLabel>
			<DistrictLabel :top="-16" :left="16" :mobile-top="10" :mobile-left="12" slug="timashevskiy" region="krasnoarmeyskiy" >Тимашевский район</DistrictLabel>
		</div>
		<div class="map-labels-wrapper map-labels-kanevskoy">
			<DistrictLabel :top="-12" :left="-20" :mobile-top="-8" :mobile-left="-44" slug="kushchevskiy" region="kanevskoy" >Кущевский район</DistrictLabel>
			<DistrictLabel :left="-20" :mobile-top="8" :mobile-left="-84" slug="krylovskiy" region="kanevskoy" >Крыловский район</DistrictLabel>
			<DistrictLabel :top="-8" :mobile-top="16" :mobile-left="4" slug="bryuhoveckiy" region="kanevskoy" >Брюховецкий район</DistrictLabel>
			<DistrictLabel :top="-12" :left="-96" :mobile-top="12" :mobile-left="-52" slug="kanevskoy" region="kanevskoy" >Каневской район</DistrictLabel>
			<DistrictLabel :top="-8" :left="-12" :mobile-top="18" :mobile-left="-12" slug="leningradskiy" region="kanevskoy" >Ленинградский район</DistrictLabel>
			<DistrictLabel :left="-24" :mobile-top="28" :mobile-left="-84" slug="pavlovskiy" region="kanevskoy" >Павловский район</DistrictLabel>
			<DistrictLabel :mobile-top="16" :mobile-left="88" slug="primorsko-ahtarskiy" region="kanevskoy" >Приморско&thinsp;–&thinsp;Ахтарский</DistrictLabel>
			<DistrictLabel :top="-44" :mobile-top="12" :mobile-left="52" slug="eyskiy" region="kanevskoy" >Ейский район</DistrictLabel>
			<DistrictLabel :top="-32" :mobile-top="-8" :mobile-left="-8" slug="shcherbinovskiy" region="kanevskoy" >Щербиновский район</DistrictLabel>
			<DistrictLabel :top="-8" :mobile-top="12" slug="starominskiy" region="kanevskoy" >Староминский район</DistrictLabel>
		</div>
		<div class="map-lables-wrapper region-labels">
			<RegionLabel  slug="slavyanskiy" :top="-8" :left="24" :mobile-top="20" :mobile-left="40" :number="48">Славянский</RegionLabel>
			<RegionLabel  slug="tuapsinskiy" :top="-24" :left="64" :mobile-top="8" :mobile-left="40" :number="49">Туапсинский</RegionLabel>
			<RegionLabel  slug="sochinskiy" :top="-96" :left="-112" :mobile-top="24" :mobile-left="-44" :number="50">Сочинский</RegionLabel>
			<RegionLabel  slug="tihoretskiy" :mobile-left="12" :number="51">Тихорецкий</RegionLabel>
			<RegionLabel  slug="armavirskiy" :top="-88" :mobile-top="4" :mobile-left="-48" :number="52">Армавирский</RegionLabel>
			<RegionLabel  slug="kanevskoy" :mobile-top="-8" :mobile-left="20" :number="53">Каневской</RegionLabel>
			<RegionLabel  slug="krasnoarmeyskiy" :top="-32" :mobile-top="-16" :mobile-left="-12" :number="47">Красноармейский</RegionLabel>
			<RegionLabel  slug="krasnodarskiy" :mobile-top="10" :number="46">Краснодарский</RegionLabel>
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