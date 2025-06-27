import React from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer({ dark, setDark }) {
	return (
		<div>
			<footer className="footer" style={{ backgroundColor: dark ? "#393E46" : "" }}>
				<div className="d-flex bd-highlight">
					<div className="p-2 bd-highlight">
						<a href="https://github.com/karthikgeddada" target="_blank" rel="noopener noreferrer">
  <h4>
    <Badge pill variant="light" className="hvr-grow">
      <span role="img" aria-label="heart" className="emojiFix">❤️</span>{" "}
      Built by Geddada Karthik
    </Badge>
  </h4>
</a>

<h6 style={{ fontSize: "12px", color: "#ccc", marginTop: "4px" }}>
  Inspired by 450 DSA Cracker – MIT License
</h6>

					</div>
					<div className="ml-auto p-2 bd-highlight footer-toggle">
						<h4>
							{/* toggle dark mode */}
							<Badge
								pill
								variant="light"
								className="hvr-grow"
								onClick={() => {
									setDark(!dark);
									window.localStorage["isDark"] = !dark;
								}}
								style={{ cursor: "pointer" }}
							>
								{dark ? (
									<span role="img" aria-label="sun-emoji" className="emojiFix">
										☀️
									</span>
								) : (
									<span role="img" aria-label="moon-emoji" className="emojiFix">
										🌙
									</span>
								)}
							</Badge>{" "}
							<Link to="/about">
								<Badge pill variant="light" className="hvr-grow">
									About{" "}
									<span role="img" aria-label="face-with-monocole" className="emojiFix">
										🧐
									</span>
								</Badge>
							</Link>
						</h4>
					</div>
				</div>
			</footer>
		</div>
	);
}
