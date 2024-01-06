const ContactUs = () => {
  return <section className="container-fluid dark-background" id="Contact_Us">

		<div className="container">
			<div className="relative-wrapper">
				<div className="crowd-paragraph">
					<div className="wrapper" style={{minWidth: '50%'}}>
						<h1>Contact Us</h1>
					</div>
					<div className="wrapper">
						<p>We'd really love to hear from you so why not drop us an email and we'll get back to you as soon as we
							can.
						</p>
					</div>
				</div>
				<form className="contact-us">
					<div className="flex-grid">
						<div className="col">
							<label>
								<p>Your Name</p>
								<input type="text" />
							</label>
						</div>
						<div className="col">
							<label>
								<p>Your Email</p>
								<input type="text" />
							</label>
						</div>
					</div>
					<div className="flex-grid">
						<div className="col col-large">
							<label>
								<p>Message</p>
								<textarea rows={2}></textarea>
							</label>
						</div>
					</div>
					<div className="flex-grid">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>

	</section>
}

export default ContactUs
