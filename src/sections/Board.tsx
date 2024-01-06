const Board = () => {
  return <section className="container-fluid dark-background" id="Board">

  		<div className="container">

  			<h1>Meet the Board</h1>
  			<p style={{margin: '0 0 3rem', textAlign: 'center'}}>
					Professional "Real World" experience in the markets we serve
  				ensure we can lead all companies forward and up!</p>
  			<div className="board-members">
  				<div className="member">
  					<img src="src/assets/board-members/james.png" alt="James Steward" />
  					<div className="blender"></div>
  					<div className="caption">
  						<h3>James Steward</h3>
  						<h4>CEO</h4>
  					</div>
  				</div>
  				<div className="member">
  					<img src="src/assets/board-members/roderick.png" alt="Roderick Wijsmuller" />
  					<div className="blender"></div>
  					<div className="caption">
  						<h3>Roderick Wijsmuller</h3>
  						<h4>CFO</h4>
  					</div>
  				</div>
  				<div className="member">
  					<img src="src/assets/board-members/steven.png" alt="Steven Bernaert" />
  					<div className="blender"></div>
  					<div className="caption">
  						<h3>Steven Bernaert</h3>
  						<h4>Investment manager</h4>
  					</div>
  				</div>
  				<div className="member">
  					<img src="src/assets/board-members/maarten.png" alt="Maarten Meijnen" />
  					<div className="blender"></div>
  					<div className="caption">
  						<h3>Maarten Meijnen</h3>
  						<h4>Supervisiory Board Member</h4>
  					</div>
  				</div>
  				<div className="member">
  					<img src="src/assets/board-members/dirk.png" alt="Dirk Hoorn" />
  					<div className="blender"></div>
  					<div className="caption">
  						<h3>Dirk Hoorn</h3>
  						<h4>Supervisiory Board Member</h4>
  					</div>
  				</div>
  			</div>
  		</div>

  	</section>
}

export default Board
