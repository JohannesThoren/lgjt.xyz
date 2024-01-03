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
	interface IRepo {
		name: string;
		fork: boolean;
		description: string;
		html_url: string;
		language: string;
	}

	export let repo: IRepo;
</script>

<div class="repos-list-item">
	<strong>{repo.fork ? 'Fork of ' + repo.name : repo.name}</strong>
	<em class="repo-desc">{repo.description != null ? repo.description : 'no description'}</em>
	<div class="info">
		<span>Lang: <strong>{repo.language == null ? 'none' : repo.language} </strong></span>
		<a href={repo.html_url}>Link to repo</a>
	</div>
</div>

<style>
	.repo-desc {
		font-size: 10pt;
	}

	.repos-list-item {
		width: 100%;
		display: grid;
		grid-template-columns: 20% 60% 20%;
	}

	.info {
        font-size: 10pt;
		display: flex;
		justify-content: space-between;
	}

	@media screen and (max-width: 1050px) {
		.repos-list-item {
			padding: 0.5rem;
			border: 0px;
			border-bottom: 1px solid grey;
		}

		.repos-list-item,
		.repos-list-item > *,
		.info > * {
			display: block;
		}
	}
</style>
