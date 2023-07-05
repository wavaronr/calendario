import ProfileAsesor from "./ProfileAsesor";
function asesorOffCanvas() {


  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Asesores
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ProfileAsesor/>
      </div>
    </div>
  );
}
export default asesorOffCanvas;
