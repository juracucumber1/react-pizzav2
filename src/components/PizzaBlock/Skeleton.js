import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={0}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="138" cy="138" r="138" />
        <rect x="1" y="290" rx="10" ry="10" width="284" height="20" />
        <rect x="0" y="328" rx="10" ry="10" width="280" height="37" />
        <rect x="140" y="380" rx="16" ry="16" width="140" height="41" />
        <rect x="0" y="380" rx="7" ry="7" width="130" height="24" />
    </ContentLoader>
)

export default Skeleton

