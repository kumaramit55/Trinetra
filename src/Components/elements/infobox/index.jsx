import CustomSvgImage from "../customsvgImage";


const InfoBox = ({ IconComponent, title,color }) => (
  <div className="d-flex align-items-center gap-3 px-3 py-2 rounded" style={{ minWidth: 180, maxWidth: 260 }}>
    <CustomSvgImage
        src={IconComponent}    
        width={40}
        height={40}
        title={title}
        fill={color}
        ariaHidden={false}
        onClick={() => alert('Icon clicked')}
        className="my-custom-icon"
      />
    <div>
      <p className="fw-bold lh-sm mb-0">{title}</p>
    </div>
  </div>
);

export default InfoBox;
