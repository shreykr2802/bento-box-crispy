<script>
	import StackBox from '../../atoms/StackBox.svelte';
</script>

<section class="stack-i-use">
	<h2 class="box-title">Stack I use</h2>
	<div class="stack-images">
		<div class="stacks-used">
			<StackBox stackName="AWS" />
			<StackBox stackName="CSS3" />
			<StackBox stackName="JavaScript" />
			<StackBox stackName="Express" />
			<StackBox stackName="Git" />
			<StackBox stackName="HTML5" />
			<StackBox stackName="React" />
			<StackBox stackName="Redux" />
			<StackBox stackName="CodePen" />
			<StackBox stackName="Docker" />
			<StackBox stackName="ESLint" />
			<StackBox stackName="Figma" />
			<StackBox stackName="Jest" />
			<StackBox stackName="Knex.js" />
			<StackBox stackName="Kubernetes" />
			<StackBox stackName="Next.js" />
			<StackBox stackName="Svelte" />
			<StackBox stackName="Sass" />
			<StackBox stackName="PostgresSQL" />
			<StackBox stackName="Terraform" />
			<StackBox stackName="Vite.js" />
			<StackBox stackName="TypeScript" />
			<StackBox stackName="VSCode" />
			<StackBox stackName="Helm" />
		</div>
		<div class="stacks-used" aria-hidden="true">
			<StackBox stackName="AWS" />
			<StackBox stackName="CSS3" />
			<StackBox stackName="JavaScript" />
			<StackBox stackName="Express" />
			<StackBox stackName="Git" />
			<StackBox stackName="HTML5" />
			<StackBox stackName="React" />
			<StackBox stackName="Redux" />
			<StackBox stackName="CodePen" />
			<StackBox stackName="Docker" />
			<StackBox stackName="ESLint" />
			<StackBox stackName="Figma" />
			<StackBox stackName="Jest" />
			<StackBox stackName="Knex.js" />
			<StackBox stackName="Kubernetes" />
			<StackBox stackName="Next.js" />
			<StackBox stackName="Svelte" />
			<StackBox stackName="Sass" />
			<StackBox stackName="PostgresSQL" />
			<StackBox stackName="Terraform" />
			<StackBox stackName="Vite.js" />
			<StackBox stackName="TypeScript" />
			<StackBox stackName="VSCode" />
			<StackBox stackName="Helm" />
		</div>
	</div>
</section>

<style lang="scss">
	.stack-i-use {
		margin: 1rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		max-width: 90%;
		position: relative;
		user-select: none;
		height: 100%;

		&:hover {
			.stacks-used {
				animation-play-state: running;
			}
		}

		.stack-images {
			display: flex;
			flex-direction: row;
			position: absolute;
			align-items: center;
			top: 50%;
			bottom: 50%;
			gap: 0.5rem;
		}
		.stacks-used {
			flex-shrink: 0;
			display: flex;
			animation:
					// sidescroll linear infinite 30s reverse paused,
				sidescroll linear infinite 20s;
			animation-composition: add;
			transform: translateX(0%);
			will-change: transform;
			gap: 0.5rem;

			@keyframes sidescroll {
				from {
					transform: translateX(0);
				}
				to {
					transform: translateX(-100%);
				}
			}
		}
	}
</style>
