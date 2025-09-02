import InfoBox from "../infobox";


function InfoCard({ title, items, subTitle, flags, more }) {
  console.log(items)
  return (
    <div className="custom-card h-100 p-4">
      <h5 className="fw-bold mb-3">{title}</h5>

      <div className="d-flex flex-column gap-2">
        {items.map(({ IconComponent, title,color}, idx) => (
          <InfoBox key={idx} IconComponent={IconComponent} title={title} color={color} />
        ))}
      </div>

      {subTitle && flags && (
        <>
          <h6 className="fw-bold mt-4">{subTitle}</h6>
          <div className="d-flex flex-column gap-2">
            {flags.map(({ IconComponent, title,color }, idx) => (
              <InfoBox key={idx} IconComponent={IconComponent} title={title}  color={color}/>
            ))}
          </div>
        </>
      )}

      {more && (
        <p className="mt-3 text-danger" style={{ cursor: "pointer" }}>
          {more}
        </p>
      )}
    </div>
  );
}

export default InfoCard