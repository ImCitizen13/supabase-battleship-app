import styles from "./lightsaber.module.css";

export default function LightSaber() {
  return (
    <div className="lightsaber">
      {/* <input type="checkbox" id="on-off" /> */}
      <div className="blade"></div>
      <label className="hilt" ></label>
    </div>
  );
}
