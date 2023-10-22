import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const icons = [{ filial: "Bizning manzil" }, { haqimizda: "Biz haqimizda " }];

function Sidebar({ show, setShow }) {
	return (
		<>
			{show ? (
				<div className="sidebar__shadow" onClick={() => setShow(false)}></div>
			) : (
				<></>
			)}
			<div className={`sidebar ${show ? "show" : ""}`}>
				<div className="sidebar__content">
					<img src={Logo} alt="" />
					{icons.map((icon, index) => (
						<div className="sidebar__item" key={index}>
							<span onClick={() => setShow(false)}>
								{" "}
								<Link to={"/branches"}>{icon.filial}</Link>{" "}
							</span>
							<font onClick={() => setShow(false)}>
								{" "}
								<Link to={"/about"}>{icon.haqimizda}</Link>{" "}
							</font>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Sidebar;
