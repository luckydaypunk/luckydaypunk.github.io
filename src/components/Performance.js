import React from 'react'

const Performance = (props) => (
    <span className="PerformanceSpan">Table build time: {[props.end - props.start].toString().split('.')[0]}ms</span>
)
export default Performance