import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

export const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-5.0, -30.0, 0],
        center: [-60, -30],
        scale: 800,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Map configuration */}
      <Geographies
        geography="/features/features.json"
        fill="rgba(16, 194, 236, .3)"
        stroke="rgba(0, 0, 0, .4)"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      {/* Point of the country name */}
      <Annotation
        subject={[-46.6388, -23.5489]}
        dx={90}
        dy={30}
        connectorProps={{
          stroke: "#10c2ec",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="90" textAnchor="end" alignmentBaseline="middle" fill="#10c2ec">
          {"São Paulo"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};
