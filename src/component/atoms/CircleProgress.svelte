<script>
	export let skillPercentage;
    export let skillName;
</script>

<div class="box" style="--skillPercentage: {skillPercentage}">
	<div class="percent">
		<svg>
			<circle cx="28" cy="28" r="28"></circle>
			<circle cx="28" cy="28" r="28"></circle>
		</svg>
		<div class="num">
			<h2>{skillPercentage}<span>%</span></h2>
			<span class="text">{skillName}</span>
		</div>
	</div>
</div>

<style lang="scss">
	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		flex-direction: column;
		transition: transform 0.2s;
		.percent {
			width: 65px;
			height: 65px;
			position: relative;
			svg {
				width: 65px;
				height: 65px;
				position: relative;
				circle {
					width: 65px;
					height: 65px;
					fill: none;
					stroke-width: 4;
					stroke: #000;
					transform: translate(5px, 5px);
					stroke-dasharray: 176;
					stroke-dashoffset: 176;
					stroke-linecap: round;

					&:nth-child(1) {
						stroke-dashoffset: 0;
						stroke: #f3f3f3;
					}
					&:nth-child(2) {
						stroke-dashoffset: calc(176 - (176 * var(--skillPercentage)) / 100);
						stroke: var(--color-red-neon);
					}
				}
			}
			.num {
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: absolute;
				color: #fff;

				h2 {
					font-size: 12px;
					margin: 0;
					padding: 0;
					span {
						font-size: 10px;
					}
				}
				.text {
                    font-size: 8px;
					padding:  0;
					color: #999;
					font-weight: 700;
				}
			}
		}
	}
</style>
