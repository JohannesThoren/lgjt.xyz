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
	import { Router, Link, Route } from 'svelte-routing';

	import home from './pages/Home.svelte';
	import about from './pages/About.svelte';

	export let url = '';
</script>

<Router {url}>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">LGJT.XYZ</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item"><Link class="nav-link" to="Contact">Contact</Link></li>
					<li class="nav-item"><Link class="nav-link" to="About">About</Link></li>
				</ul>
			</div>
		</div>
	</nav>
	<div>
		<Route path="/" component={home}></Route>
		<Route path="/Contact" component={home}></Route>
		<Route path="/About" component={about}></Route>
	</div>
</Router>

<style>
  
</style>
