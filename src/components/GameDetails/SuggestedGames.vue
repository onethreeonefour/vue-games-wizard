<template>
	<h1 class="underline-heading">Similar Games</h1>
	<div className="suggested-grid-container">
		<div v-for="(el, index) in Suggested.results" :key="index" class="game-card">
			<router-link :to="{ name: 'GameDetails', params: { id: el.id } }">
				<img v-bind:src="el.background_image" alt="popular" />
				<div>
					<h2>{{ el.name }}</h2>
					<h5
						v-if="el.metacritic !== null"
						class="metacritic"
						v-bind:style="[
							el.metacritic > 75
								? { backgroundColor: 'green' }
								: el.metacritic > 65
								? { backgroundColor: 'orange' }
								: { backgroundColor: 'red' },
						]"
					>
						{{ el.metacritic }}
					</h5>
					<h5 v-else class="metacritic">NA</h5>

					<h5>{{ el.released }}</h5>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
	props: ["Suggested"],
};
</script>
