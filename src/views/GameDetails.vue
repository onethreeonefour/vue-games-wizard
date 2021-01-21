<template>
	<template v-if="Game.hasOwnProperty('id')">
		<div
			class="game-container"
			v-bind:style="{
				backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%),url(${Game.background_image})`,
			}"
		>
			<div class="game-sub-details">
				<h1>{{ Game.name }}</h1>
				<h4>Release Date - {{ Game.released }}</h4>
				<div>
					<h2 class="game-rating">{{ rating }}</h2>
					<h4>RAWG Community Rating ( {{ Game.rating }} / {{ Game.rating_top }} ) {{ Game.reviews_count }} Ratings</h4>
					<span v-for="(el, index) in genres" v-bind:key="index">{{ el.name }}</span>
				</div>
			</div>
		</div>
		<div class="game-details">
			<div>
				<h1 class="underline-heading">About</h1>
				<div v-html="Game.description" class="game-description"></div>
				<hr />
				<div class="game-details-flex">
					<div>
						<h4>Platforms</h4>
						<span v-for="(el, index) in Game.platforms" v-bind:key="index">{{ el.platform.name }}&ensp;</span>
					</div>
					<div>
						<h4>Metascore</h4>
						<span
							class="metacritic"
							v-bind:style="[
								Game.metacritic > 75
									? { backgroundColor: 'green' }
									: Game.metacritic > 65
									? { backgroundColor: 'orange' }
									: { backgroundColor: 'red' },
							]"
						>
							{{ Game.metacritic }}
						</span>
					</div>
				</div>
				<div class="game-details-flex">
					<div>
						<h4>Developers</h4>
						<span v-for="(el, index) in Game.developers" v-bind:key="index">{{ el.name }}&ensp;</span>
					</div>
					<div>
						<h4>Publishers</h4>
						<span v-for="(el, index) in Game.publishers" v-bind:key="index">{{ el.name }}&ensp;</span>
					</div>
				</div>
			</div>
			<div>
				<h1 class="underline-heading">Media</h1>
				<video :src="Game.clip.clip" autoplay controls muted loop class="video-container"></video>
			</div>
		</div>
	</template>
	<template v-else>
		<div class="hero-container loading-text">
			<h1>Games Wizards - Loading...</h1>
		</div>
	</template>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			Game: {},
		};
	},
	computed: {
		rating() {
			let percent = 0;
			let highestRank = "";
			this.Game.ratings.map((el) => {
				if (el.percent > percent) {
					percent = el.percent;
					highestRank = el.title;
				}
			});
			return highestRank;
		},
		genres() {
			return this.Game.genres;
		},
	},
	mounted() {
		axios(`https://api.rawg.io/api/games/${this.$route.params.id}`).then((res) => {
			console.log(res);
			this.Game = res.data;
		});
	},
};
</script>

<style lang="scss">
.metacritic {
	padding: 0.5rem;
	color: white;
}
</style>
