<!--
 Copyright 2024 johannes
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<script lang="ts">
	import Repo from '../lib/repo.svelte';

	async function fetch_repos() {
		let resp = await fetch('https://api.github.com/users/JohannesThoren/repos');
		let json = await resp.json();
		return json;
	}

	let reposPromise = fetch_repos();
</script>

<main>
	<h1>Github Repositories</h1>
	<p>Here is a list of my public github repositories</p>
	<div id="repos-list">

		{#await reposPromise}
			<div class="spinner spinner-border" role="status" />
		{:then repos}
			{#each repos as repo}
				<Repo {repo}></Repo>
			{/each}
		{/await}
	</div>
</main>

<style>
	#repos-list{
        
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
	}
</style>
