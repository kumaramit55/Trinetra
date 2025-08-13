const InfoBox = ({ IconComponent, title }) => (
  <div className="d-flex align-items-center gap-3 px-3 py-2 rounded" style={{ minWidth: 180, maxWidth: 260 }}>
    {IconComponent && <IconComponent size={32} />}
    <div>
      <p className="fw-bold lh-sm mb-0">{title}</p>
    </div>
  </div>
);

export default InfoBox;
