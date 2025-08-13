const InfoBox = ({ image, alt, title }) => (
  <div className="d-flex align-items-center gap-3  px-3 py-2 rounded text-white" style={{ minWidth: 180, maxWidth: 260 }}>
    <img
      src={image}
      alt={alt}
      className="img-fluid rounded"
      style={{ width: 32, height: 32, objectFit: "cover" }}
    />
    <div>
      <p className="fw-bold lh-sm mb-0">{title}</p>
    </div>
  </div>
);

export default InfoBox;
