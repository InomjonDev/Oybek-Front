import React, { useEffect } from "react";
import "./Branches.css";
import { IoLocationOutline } from "react-icons/io5";

function Branches() {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<div className="main__branches">
			<h2 className="branch__text">
				Bizning<span> manzil</span>
				<IoLocationOutline />
			</h2>
			<div className="branch__one">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d579.152564265982!2d71.87561402279842!3d40.933076734032994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb590bbff40d95%3A0xb6b443f7e7f4210f!2sOybek%20Shirinliklari!5e0!3m2!1sru!2s!4v1697998186774!5m2!1sru!2s"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
				{/* <iframe
					src="https://www.google.com/maps/place/Chudzha,+%zD0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.9329717,71.8753361,62m/data=!3m1!1e3!4m16!1m9!4m8!1m3!2m2!1d71.8757223!2d40.9330766!1m3!2m2!1d71.8757223!2d40.9330766!3m5!1s0x38bb59e94898320f:0x9a0bb3a48863078!8m2!3d40.9328128!4d71.8758142!16s%2Fg%2F11gyrsh4my?hl=ru&entry=ttu"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe> */}
				<div className="info">
					<p>
						<span>Manzil:</span> Norin tumani Uchtepa MFY
					</p>
					<h3>
						Biz bilan Bog'lanish: <a href="">993904432</a>
					</h3>
					<h4>
						<span>Bizning ish Vaqtimmiz:</span> 6:00 dan 20:00 gacha
					</h4>
				</div>
			</div>
			{/* <br />
      <div className="branch__one">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6018.60367168656!2d71.676633!3d41.04052800000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAyJzI1LjkiTiA3McKwNDAnMzUuOSJF!5e0!3m2!1sru!2s!4v1693235056923!5m2!1sru!2s"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="info">
          <p>
            <span>Manzil:</span> Qizil kuprik gagarin
          </p>
          <h3>
            Biz bilan Bog'lanish: <a href="">907419131</a>
          </h3>
          <h4>
            <span>Bizning ish Vaqtimmiz:</span> 8:00 dan 18:00 gacha
          </h4>
        </div>
      </div>
      <br />
      <div className="branch__one">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6018.60367168656!2d71.676633!3d41.04052800000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAyJzI1LjkiTiA3McKwNDAnMzUuOSJF!5e0!3m2!1sru!2s!4v1693235056923!5m2!1sru!2s"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="info">
          <p>
            <span>Manzil:</span> Qizil kuprik gagarin
          </p>
          <h3>
            Biz bilan Bog'lanish: <a href="">907419131</a>
          </h3>
          <h4>
            <span>Bizning ish Vaqtimmiz:</span> 8:00 dan 18:00 gacha
          </h4>
        </div>
      </div>
      <br /> */}
		</div>
	);
}

export default Branches;
