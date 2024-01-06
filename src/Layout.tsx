export const Header = () => {
  return <header id="Home">
		<div className="flex-wrapper">
			<div id="logo">
				<a href="javascript:;" target-section="#Welcoming_Banner">
					<img className="logo" src="/src/assets/logo-crowd.svg" alt="" /></a>
			</div>
			<nav>
				<div id="main-menu">
					<div><a href="javascript:;" target-section="#Welcoming_Banner">HOME</a></div>
					<div><a href="javascript:;" target-section="#About_CROWD">ABOUT</a></div>
					<div><a href="javascript:;" target-section="#Strategy">STRATEGY</a></div>
					<div><a href="javascript:;" target-section="#Our_Solutions">SOLUTIONS</a></div>
					<div><a href="javascript:;" target-section="#Projects">PROJECTS</a></div>
					<div><a href="javascript:;" target-section="#Board">TEAM</a></div>
					<div><a href="javascript:;" target-section="#Contact_Us">CONTACT</a></div>
				</div>
			</nav>
			<div id="menu-button"></div>
		</div>
	</header>;
};

export const Footer = () => {
  return <footer className="container-fluid dark-background">
		<img style={{width: '8em', display: 'block', margin: 'auto'}} className="logo" src="/src/assets/logo-crowd-light.svg"
			alt="CROWD Logo" />

		<ul className="logos-at-footer">
			<li><img src="/src/assets/companies/logo-cyclepods.png" alt="Company of CROWD" /></li>
			<li><img src="/src/assets/companies/logo-ijslander.png" alt="Company of CROWD" /></li>
			<li><img src="/src/assets/companies/logo-lumiguide.png" alt="Company of CROWD" /></li>
			<li><img src="/src/assets/companies/logo-velopa.png" alt="Company of CROWD"    /></li>
			<li><img src="/src/assets/companies/logo-ziegler.png" alt="Company of CROWD"   /></li>
		</ul>

		<br /><br />
		<p>© CROWD 2021 </p>

	</footer>;
};
