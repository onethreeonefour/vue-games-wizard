<template>
	<div class="search-results-container">
		<h1 class="underline-heading">Search Results</h1>
		<template v-if="SearchResults.length > 0">
			<div className="landing-grid-container">
				<div v-for="(el, index) in SearchResults" :key="index" class="game-card">
					<a :href="$router.resolve({ name: 'GameDetails', params: { id: el.id } }).href">
						<img v-bind:src="el.background_image" alt="popular" />
						<div>
							<h2>{{ el.name }}</h2>
							<span
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
							</span>
							<span v-else class="metacritic">NA</span>
							<h5>{{ el.released }}</h5>
						</div>
					</a>
				</div>
			</div>
		</template>
		<template v-else>
			<h1>Loading</h1>
		</template>
	</div>
</template>

<script>
import { API_KEY } from "../Config";
import axios from "axios";
export default {
	data() {
		return {
			SearchResults: {},
		};
	},

	mounted() {
		axios(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.$route.params.query}`).then((res) => {
			console.log(res);
			this.SearchResults = res.data.results;
		});
	},
};
</script>
<style scoped lang="scss">
.test {
	margin: 150px auto;
	width: 80%;
}
</style>
