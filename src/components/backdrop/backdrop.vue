<template>
	<div class="backdrop" 
		:class="{'active':active == true}" 
		v-if="visible"
		@click="meet"
		>
	</div>
</template>
<script>
import store from '@/vuex/store'
export default {
	data () {
		return {
			visible: false,
			active: false
		}
	},
	methods: {
		show () {
			this.visible = true
			setTimeout(() => {
				this.active = true
				store.commit('ONDROP', {drop: false})
			}, 5)
		},
		hide () {
			this.active = false
  		setTimeout(() => {
				this.visible = false
  		}, 200)
		},
		meet () {
			store.commit('ONDROP', {drop: true})
		}
	},
	mounted () {
		
	}
}
</script>
<style lang="scss">
.backdrop{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 7;
  background-color: rgba(0,0,0,0.3);
  transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  pointer-events: auto;
  opacity: 0;
}
.active {
  opacity: 1;
}
</style>