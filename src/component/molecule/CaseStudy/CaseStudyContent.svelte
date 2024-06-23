<script>
</script>

<div class="about-content">
	<div class="container">
		<div class="title">
			<p class="box-description">Ecommerce - SSR, SSG, ISR and CSR</p>
			<p class="box-sub-title">Case Study</p>
		</div>
		<div class="initial-details">
			<div class="basic-details">
				<h5 class="box-sub-title">TOPIC</h5>
				<p class="box-description-small">ShopX</p>
				<h5 class="box-sub-title">TITLE</h5>
				<span class="box-description-small">
					<ul>
						<li>Server Side Rendering - SSR</li>
						<li>Client Side Rendering - CSR</li>
						<li>Static Site Generaction - SSG</li>
						<li>Incremental Static Generaction - ISR</li>
					</ul>
				</span>
			</div>
			<div class="basic-description">
				<h5 class="box-sub-title">COMPANY OVERVIEW</h5>
				<p class="box-description-small">
					E-ShopX is a leading e-commerce platform that sells a wide range of products including
					electronics, clothing, home goods, and more. To enhance user experience and optimize
					performance, E-ShopX employs a combination of Server-Side Rendering (SSR), Incremental
					Static Regeneration (ISR), Static Site Generation (SSG), and Client-Side Rendering (CSR).
				</p>
				<h5 class="box-sub-title">OBJECTIVES</h5>
				<span class="box-description-small">
					<ol>
						<li>Improve SEO to attract more organic traffic.</li>
						<li>Enhance Performance for faster load times and better user experience.</li>
						<li>Increase Engagement by ensuring users have the most up-to-date information.</li>
					</ol>
				</span>
			</div>
		</div>
		<div>
			<h2 class="box-title">Implementation of SSR, ISR, SSG, and CSR</h2>
			<p class="box-description-small">Server-Side Rendering (SSR)</p>
			<h5 class="box-sub-title">Use Case: Product Pages</h5>
		</div>
		<!-- <div class="section-image">
			<img src="/casestudy/1_ProductsPage.png" alt="Products Page" />
		</div> -->
		<div>
			<h4 class="box-title">Why SSR?</h4>
			<ul>
				<li class="box-description-small">
					SEO Optimization: Product pages benefit greatly from SSR because search engines can easily
					crawl and index the content, leading to better rankings.
				</li>
				<li class="box-description-small">
					First-Time User Experience: Ensures that users see a fully rendered page on their first
					visit, reducing bounce rates.
				</li>
			</ul>
			<h4 class="box-title">How it's implemented:</h4>
			<ul>
				<li class="box-description-small">
					When a user navigates to a product page, the server generates the HTML for that page on
					the fly, using the latest data from the database.
				</li>
				<li class="box-description-small">
					This HTML is then sent to the user's browser, ensuring that they see the complete content
					almost immediately.
				</li>
				<li class="box-description-small">
					For example, when a user visits eshopx.com/product/12345, the server fetches the product
					details, renders the HTML, and sends it to the client.
				</li>
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	.about-content {
		margin: var(--outer-box-margin);
		padding: var(--outer-box-padding);
		border-radius: var(--outer-box-border-radius);
		border: var(--box-border);
		min-width: 0;

		.container {
			margin: 4rem 10%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			justify-content: center;

			.title {
				display: flex;
				flex-direction: column;
			}

			.initial-details {
				display: flex;
				flex-direction: row;
				gap: 1rem;

				.basic-details {
					border: var(--box-border);
					border-radius: var(--inner-box-border-radius);
					background-color: var(--color-box-background);
					min-height: 12rem;
					padding: 0.75rem;
					width: 30%;

					ul {
						list-style: none;
						padding: 0;
					}
				}

				.basic-description {
					border: var(--box-border);
					border-radius: var(--inner-box-border-radius);
					background-color: var(--color-box-background);
					min-height: 12rem;
					padding: 0.75rem;
					width: 70%;
				}
			}
		}
	}
</style>
