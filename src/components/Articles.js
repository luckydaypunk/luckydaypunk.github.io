import React from 'react'
import './Articles.css'
import InfiniteUsers from './InfiniteUsers'

const Articles = () => (
    <div className='articles'>
        <p>Testing scrolling in ReactJS using <i>https://randomuser.me/api</i>.<br />
        This could be replaced by a serverless Lambda API endpoint that connects to a snappy,<br />
        no-sql DB with metadeta about articles.</p>
        <InfiniteUsers />
    </div>
)
export default Articles